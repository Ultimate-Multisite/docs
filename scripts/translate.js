#!/usr/bin/env node

/**
 * Translate Docusaurus docs to multiple languages using AI APIs.
 *
 * Supports two providers:
 * - "openai"        — Superdav AI Service or any OpenAI-compatible API
 * - "ollama-native" — Ollama native /api/chat endpoint with thinking disabled
 * - "claude-proxy"  — Claude Max Proxy (uses local Claude CLI subscription credentials)
 *
 * Based on the docusaurus-i18n approach but rewritten to support:
 * - .md and .mdx files
 * - Improved translation prompts that preserve code/MDX syntax
 * - Concurrent API calls
 * - Multiple sidebar prefixes
 * - Locale filtering and dry-run mode
 *
 * Usage:
 *   node scripts/translate.js --locales fr,es,de
 *   node scripts/translate.js --locales all --concurrency 10
 *   node scripts/translate.js --locales fr --dry-run
 *   node scripts/translate.js --provider claude-proxy --model claude-sonnet-4-5-20250929 --locales fr
 */

const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');
const fg = require('fast-glob');
const {execSync} = require('child_process');

// ---------------------------------------------------------------------------
// Config & CLI args
// ---------------------------------------------------------------------------

const DOCS_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(DOCS_ROOT, 'docs');
const I18N_DIR = path.join(DOCS_ROOT, 'i18n');

const DEFAULT_CLOUD_API_BASE = 'https://api.sdaiagent.com/v1';
const DEFAULT_CLOUD_MODEL = 'superdav-chat-pro';

const SIDEBAR_IDS = ['userGuideSidebar', 'developerSidebar', 'addonsSidebar'];

const RTL_LOCALES = new Set([
	'ar', 'he', 'fa', 'ur', 'ckb', 'ps', 'snd', 'ug', 'azb', 'yi',
]);

function showHelp() {
	console.log(`
Usage: node scripts/translate.js --locales <codes> [options]

Translate Docusaurus docs to multiple languages using AI APIs.

Options:
  --locales <codes>     Comma-separated locale codes, or "all" (required)
  --priority <n>        Only translate files at this priority level or higher (1-4)
  --provider <name>     API provider: "openai" (default: Superdav/OpenAI-compatible), "ollama-native", or "claude-proxy"
  --model <model>       Model name (default: ${DEFAULT_CLOUD_MODEL}; provider-specific for local providers)
  --model-map <name>    Per-locale model routing: "single" (default) or "recommended"
  --base-url <url>      API base URL (default: ${DEFAULT_CLOUD_API_BASE}; provider-specific for local providers)
  --api-key <key>       API key (not needed for claude-proxy)
  --concurrency <n>     Parallel requests (default: 5)
  --timeout <seconds>   Per-request timeout in seconds (default: 900)
  --retries <n>         Retries per translated field/chunk (default: env TRANSLATE_RETRIES or 12)
  --num-ctx <tokens>    Ollama native per-request context length (default: env OLLAMA_REQUEST_NUM_CTX or unset)
  --num-predict <n>     Ollama native max generated tokens (default: env OLLAMA_NUM_PREDICT or 4096)
  --chunk-max-chars <n> Split body content above this size for local models (default: env TRANSLATE_CHUNK_MAX_CHARS or 1500)
  --files <paths>       Comma-separated docs-relative files to translate (e.g. user-guide/foo.md)
  --force               Re-translate files even when the destination already exists
  --print-model-plan    Print resolved model and prompt profile for each locale, then exit
  --dry-run             Show what would be translated without making API calls
  --debug               Print prompts, responses, and timing details
  --commit              Git commit each translated file immediately
  --help                Show this help message

Priority Levels:
  1                     User guide (all files under docs/user-guide/)
  2                     Addon index pages (docs/addons/*/index.md|mdx)
  3                     Developer guides excluding hooks (docs/developer/, not hooks/)
  4                     Addon changelogs + hooks, developer hooks (everything else)

Providers:
  openai                Any OpenAI-compatible API (default configured for Superdav AI Service)
  ollama-native         Ollama native /api/chat endpoint; disables Gemma/Qwen thinking
  claude-proxy          Claude Max Proxy using local Claude CLI credentials
                        Requires: https://github.com/rynfar/opencode-claude-max-proxy

Claude Proxy Models:
  claude-haiku-4-5-20251001      Haiku 4.5   — fastest, lowest quota usage
  claude-sonnet-4-5-20250929     Sonnet 4.5  — best quality/quota balance (default)
  claude-opus-4-6                Opus 4.6    — highest quality, highest quota usage

Environment Variables:
  TRANSLATE_PROVIDER    Same as --provider
  OPENAI_API_KEY        Same as --api-key
  OPENAI_API_BASE       Same as --base-url (default: ${DEFAULT_CLOUD_API_BASE})
  OPENAI_MODEL          Same as --model (default: ${DEFAULT_CLOUD_MODEL})
  OPENAI_TIMEOUT        Timeout in milliseconds

Examples:
  # Translate to French and Spanish using the default Superdav cloud model
  node scripts/translate.js --locales fr,es

  # Translate all locales with the default Superdav cloud model
  node scripts/translate.js --locales all --concurrency 10

  # Preview what needs translating
  node scripts/translate.js --locales fr --dry-run

  # Use Claude proxy with Sonnet (default model)
  node scripts/translate.js --provider claude-proxy --locales fr,es,de

  # Use Claude proxy with Opus for highest quality
  node scripts/translate.js --provider claude-proxy --model claude-opus-4-6 --locales fr

  # Use Claude proxy with Haiku for speed
  node scripts/translate.js --provider claude-proxy --model claude-haiku-4-5-20251001 --locales all

  # Use Ollama locally
  node scripts/translate.js --base-url http://localhost:11434/v1 --model llama3 --locales es

  # Use Ollama native API with thinking disabled
  node scripts/translate.js --provider ollama-native --base-url http://localhost:11434 --model translategemma:27b --locales es

  # Use validated local model routing and locale-specific prompts
  node scripts/translate.js --provider ollama-native --model-map recommended --locales all

  # Translate only user guide (priority 1)
  node scripts/translate.js --provider claude-proxy --priority 1 --locales fr

  # Translate user guide + addon index pages (priority 1-2)
  node scripts/translate.js --provider claude-proxy --priority 2 --locales fr

  # Preview what each priority level would translate
  node scripts/translate.js --priority 1 --locales fr --dry-run

  # Use Mistral API directly
  node scripts/translate.js --base-url https://api.mistral.ai/v1 --api-key <key> --model mistral-small-latest --locales fr
`);
	process.exit(0);
}

function normalizeOpenAICompatibleBaseUrl(baseUrl) {
	const trimmed = (baseUrl || DEFAULT_CLOUD_API_BASE).trim().replace(/\/+$/, '');
	const withoutCompletionPath = trimmed.replace(/\/chat\/completions$/i, '');

	try {
		const parsed = new URL(withoutCompletionPath);
		if (parsed.pathname === '' || parsed.pathname === '/') {
			parsed.pathname = '/v1';
			return parsed.toString().replace(/\/+$/, '');
		}
	} catch {
		// Keep non-URL values as-is so callers get the underlying fetch error.
	}

	return withoutCompletionPath;
}

function parseArgs() {
	const args = process.argv.slice(2);

	if (args.includes('--help') || args.includes('-h')) {
		showHelp();
	}

	const opts = {
		locales: [],
		priority: 0,
		concurrency: 5,
		dryRun: false,
		debug: false,
		timeout: parseInt(process.env.OPENAI_TIMEOUT, 10) || 900000, // 15 minutes default
		retries: parseInt(process.env.TRANSLATE_RETRIES || '', 10) || 12,
		provider: process.env.TRANSLATE_PROVIDER || 'openai',
		model: process.env.OPENAI_MODEL || DEFAULT_CLOUD_MODEL,
		modelExplicit: Boolean(process.env.OPENAI_MODEL),
		modelMap: process.env.TRANSLATE_MODEL_MAP || 'single',
		baseUrl: process.env.OPENAI_API_BASE || DEFAULT_CLOUD_API_BASE,
		baseUrlExplicit: Boolean(process.env.OPENAI_API_BASE),
		apiKey: process.env.OPENAI_API_KEY || '',
		numCtx: parseInt(process.env.OLLAMA_REQUEST_NUM_CTX || process.env.OLLAMA_NUM_CTX || '', 10) || 0,
		numPredict: parseInt(process.env.OLLAMA_NUM_PREDICT || '', 10) || 4096,
		chunkMaxChars: parseInt(process.env.TRANSLATE_CHUNK_MAX_CHARS || '', 10) || 1500,
		files: [],
		force: false,
		printModelPlan: false,
	};

	for (let i = 0; i < args.length; i++) {
		switch (args[i]) {
			case '--locales':
				opts.locales = args[++i].split(',').map(l => l.trim());
				break;
			case '--concurrency':
				opts.concurrency = parseInt(args[++i], 10);
				break;
			case '--dry-run':
				opts.dryRun = true;
				break;
			case '--debug':
				opts.debug = true;
				break;
			case '--priority':
				opts.priority = parseInt(args[++i], 10);
				break;
			case '--provider':
				opts.provider = args[++i];
				break;
			case '--model':
				opts.model = args[++i];
				opts.modelExplicit = true;
				break;
			case '--model-map':
				opts.modelMap = args[++i];
				break;
			case '--base-url':
				opts.baseUrl = args[++i];
				opts.baseUrlExplicit = true;
				break;
			case '--api-key':
				opts.apiKey = args[++i];
				break;
			case '--timeout':
				opts.timeout = parseInt(args[++i], 10) * 1000; // Convert seconds to ms
				break;
			case '--retries':
				opts.retries = parseInt(args[++i], 10);
				break;
			case '--num-ctx':
				opts.numCtx = parseInt(args[++i], 10);
				break;
			case '--num-predict':
				opts.numPredict = parseInt(args[++i], 10);
				break;
			case '--chunk-max-chars':
				opts.chunkMaxChars = parseInt(args[++i], 10);
				break;
			case '--files':
				opts.files = args[++i].split(',').map(file => file.trim()).filter(Boolean);
				break;
			case '--force':
				opts.force = true;
				break;
			case '--print-model-plan':
				opts.printModelPlan = true;
				break;
			case '--commit':
				opts.commit = true;
				break;
		}
	}

	// Provider-specific defaults
	if (opts.provider === 'claude-proxy') {
		if (!opts.baseUrlExplicit) {
			opts.baseUrl = 'http://127.0.0.1:3456';
		}
		if (!opts.modelExplicit) {
			opts.model = 'claude-sonnet-4-5-20250929';
		}
	}
	if (opts.provider === 'ollama-native' || opts.provider === 'ollama') {
		if (!opts.baseUrlExplicit) {
			opts.baseUrl = 'http://127.0.0.1:11434';
		}
		if (!opts.modelExplicit) {
			opts.model = 'translategemma:27b';
		}
	}
	if (opts.provider === 'openai') {
		opts.baseUrl = normalizeOpenAICompatibleBaseUrl(opts.baseUrl);
	}

	return opts;
}

const TECHNICAL_TERMS_TO_KEEP = [
	'Ultimate Multisite', 'WordPress', 'WooCommerce', 'PHP', 'MySQL', 'Stripe',
	'Account', 'Dashboard', 'MU plugin', 'Feedback API Key', 'bearer token',
	'Authorization header', 'Setup Assistant agent', 'Theme Builder', 'site_brief',
	'theme.json', 'Gratis AI Agent', 'Superdav AI Agent', 'Brave Search API Key',
];

// ---------------------------------------------------------------------------
// All supported locales (100+)
// ---------------------------------------------------------------------------

const ALL_LOCALES = [
	'af', 'am', 'ar', 'as', 'az', 'azb', 'be', 'bg', 'bn', 'bs',
	'ca', 'ceb', 'ckb', 'cs', 'cy', 'da', 'de', 'el', 'eo', 'es',
	'et', 'eu', 'fa', 'fi', 'fil', 'fr', 'ga', 'gd', 'gl', 'gu',
	'ha', 'he', 'hi', 'hmn', 'hr', 'ht', 'hu', 'hy', 'id', 'ig',
	'is', 'it', 'ja', 'jv', 'ka', 'kk', 'km', 'kn', 'ko', 'ku',
	'ky', 'la', 'lb', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml',
	'mn', 'mr', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'or',
	'pa', 'pl', 'ps', 'pt', 'pt-BR', 'ro', 'ru', 'rw', 'sd', 'si',
	'sk', 'sl', 'sn', 'snd', 'so', 'sq', 'sr', 'st', 'su', 'sv',
	'sw', 'ta', 'te', 'tg', 'th', 'tk', 'tl', 'tr', 'tt', 'ug',
	'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'yo', 'zh-Hans', 'zh-Hant',
	'zu',
];

const LOCAL_MODEL_FAMILIES = {
	'translategemma-27b': 'translategemma:27b',
	'qwen3.6-27b': 'qwen3.6:27b',
	'gemma4-26b-a4b': 'gemma4:26b-a4b-it-qat',
};

const RECOMMENDED_DEFAULT_MODEL_FAMILY = 'translategemma-27b';

// First-pass all-locale routing from /tmp/opencode/mt-eval/best-model-by-locale.*,
// converted to Ollama LLM families so every routed locale can use custom prompts.
// Locales that only passed with NLLB or needed manual repair keep the default
// translation-specialized LLM and receive stricter locale prompt notes below.
const RECOMMENDED_MODEL_FAMILY_OVERRIDES = {
	de: 'qwen3.6-27b',
	fr: 'qwen3.6-27b',
	gu: 'qwen3.6-27b',
	he: 'qwen3.6-27b',
	mi: 'qwen3.6-27b',
	mr: 'qwen3.6-27b',
	sl: 'qwen3.6-27b',
	sr: 'qwen3.6-27b',
	'zh-Hans': 'qwen3.6-27b',
	'zh-Hant': 'qwen3.6-27b',
};

const PROMPT_REPAIR_LOCALES = new Set([
	'azb', 'bn', 'hi', 'ja', 'km', 'kn', 'ku', 'ml', 'my', 'or', 'si', 'ta', 'te',
]);

const EXPECTED_SCRIPT_BY_LOCALE = {
	am: ['ethiopic'],
	ar: ['arabic'],
	as: ['bengali'],
	azb: ['arabic'],
	be: ['cyrillic'],
	bg: ['cyrillic'],
	bn: ['bengali'],
	ckb: ['arabic'],
	el: ['greek'],
	fa: ['arabic'],
	gu: ['gujarati'],
	he: ['hebrew'],
	hi: ['devanagari'],
	hy: ['armenian'],
	ja: ['cjk', 'kana'],
	ka: ['georgian'],
	kk: ['cyrillic'],
	km: ['khmer'],
	kn: ['kannada'],
	ko: ['hangul'],
	ky: ['cyrillic'],
	lo: ['lao'],
	mk: ['cyrillic'],
	ml: ['malayalam'],
	mn: ['cyrillic'],
	mr: ['devanagari'],
	my: ['myanmar'],
	ne: ['devanagari'],
	or: ['oriya'],
	pa: ['gurmukhi'],
	ps: ['arabic'],
	ru: ['cyrillic'],
	sd: ['arabic'],
	si: ['sinhala'],
	snd: ['arabic'],
	sr: ['cyrillic'],
	ta: ['tamil'],
	te: ['telugu'],
	tg: ['cyrillic'],
	th: ['thai'],
	tt: ['cyrillic'],
	ug: ['arabic'],
	uk: ['cyrillic'],
	ur: ['arabic'],
	yi: ['hebrew'],
	'zh-Hans': ['cjk'],
	'zh-Hant': ['cjk'],
};

const SCRIPT_PROMPT_NAMES = {
	arabic: 'Arabic script',
	armenian: 'Armenian script',
	bengali: 'Bengali-Assamese script',
	cjk: 'Chinese/Japanese ideographs',
	cyrillic: 'Cyrillic script',
	devanagari: 'Devanagari script',
	ethiopic: 'Ethiopic script',
	georgian: 'Georgian script',
	greek: 'Greek script',
	gujarati: 'Gujarati script',
	gurmukhi: 'Gurmukhi script',
	hangul: 'Hangul script',
	hebrew: 'Hebrew script',
	kana: 'Japanese kana',
	kannada: 'Kannada script',
	khmer: 'Khmer script',
	lao: 'Lao script',
	malayalam: 'Malayalam script',
	myanmar: 'Myanmar/Burmese script',
	oriya: 'Odia script',
	sinhala: 'Sinhala script',
	tamil: 'Tamil script',
	telugu: 'Telugu script',
	thai: 'Thai script',
};

const LOCALE_PROMPT_OVERRIDES = {
	az: ['Use North Azerbaijani in Latin script; do not switch to Arabic-script South Azerbaijani.'],
	azb: ['Use South Azerbaijani in Arabic script throughout; do not use North Azerbaijani Latin spelling.'],
	bn: ['Use natural Bengali; avoid repeating clauses and translate UI phrases instead of leaving them in English.'],
	ckb: ['Use Sorani/Central Kurdish in Arabic script; do not switch to Kurmanji Latin spelling.'],
	fil: ['Use natural Filipino; translate ordinary UI/prose words instead of copying English sentence structure.'],
	he: ['Use Hebrew script and natural right-to-left Hebrew; keep only protected product/code terms in English.'],
	hi: ['Use natural Hindi in Devanagari; translate all ordinary UI phrases such as step, template, field, checkout, and registration.'],
	hmn: ['Use Hmong in Latin script; keep the tone conversational and avoid literal English word order.'],
	ja: ['Use natural Japanese with kanji and kana; translate ordinary UI phrases and do not leave English labels unless they are protected product/code terms.'],
	km: ['Use natural Khmer script; avoid English UI labels and avoid mixing Thai, Lao, Latin, or other scripts.'],
	kn: ['Use natural Kannada script only; do not mix Tamil, Telugu, Latin, or other Indian scripts.'],
	ku: ['Use Kurmanji Kurdish in Latin script; do not use Sorani Arabic script for this locale.'],
	lo: ['Use Lao script and natural Lao phrasing; translate ordinary UI/prose terms.'],
	ml: ['Use natural Malayalam script only; do not mix Tamil, Telugu, Kannada, Latin, or other scripts.'],
	my: ['Use natural Burmese/Myanmar script; translate ordinary UI/prose words instead of leaving English labels.'],
	mt: ['Use the Maltese Latin alphabet only; write Maltese words such as "fuq" with Latin letters, never Arabic lookalike or transliteration characters.'],
	no: ['Use Norwegian Bokmål unless the source clearly requires another Norwegian standard.'],
	or: ['Use natural Odia script only; do not mix Bengali, Devanagari, Kannada, Telugu, Latin, or other scripts.'],
	'pt-BR': ['Use Brazilian Portuguese vocabulary and grammar, not European Portuguese.'],
	sd: ['Use Sindhi in Arabic script.'],
	si: ['Use natural Sinhala script; avoid English UI labels and avoid mixing Tamil, Latin, or other scripts.'],
	snd: ['Use Sindhi in Arabic script.'],
	sr: ['Use Serbian Cyrillic only; do not output Serbian Latin script.'],
	ta: ['Use natural Tamil script only; do not mix Sinhala, Malayalam, Telugu, Kannada, Latin, or other scripts.'],
	te: ['Use natural Telugu script only; do not mix Tamil, Kannada, Devanagari, Latin, or other scripts.'],
	ug: ['Use Uyghur in Arabic script; do not use Latin transliteration.'],
	yi: ['Use Yiddish in Hebrew script; do not switch to German, English, or Latin transliteration.'],
	'zh-Hans': ['Use Simplified Chinese characters and mainland-style terminology.'],
	'zh-Hant': ['Use Traditional Chinese characters and traditional-character terminology.'],
};

function getRecommendedModelFamily(locale) {
	return RECOMMENDED_MODEL_FAMILY_OVERRIDES[locale] || RECOMMENDED_DEFAULT_MODEL_FAMILY;
}

function getRecommendedModel(locale) {
	return LOCAL_MODEL_FAMILIES[getRecommendedModelFamily(locale)];
}

function getLocalePromptNotes(locale, opts = {}) {
	if (opts.modelMap !== 'recommended') return [];

	const langName = getLocaleName(locale);
	const notes = [
		`Write fluent ${langName} (${locale}); translate every ordinary English prose word unless it is protected code, a URL/path, or a listed product/technical term.`,
		'Preserve Markdown marker characters exactly, but translate the human-readable words inside bold, italic, link text, image alt text, headings, list items, and table cells.',
	];

	const expectedScripts = EXPECTED_SCRIPT_BY_LOCALE[locale];
	if (expectedScripts) {
		const scriptNames = expectedScripts.map(script => SCRIPT_PROMPT_NAMES[script] || script).join(' plus ');
		notes.push(`Use ${scriptNames} for translated prose; do not mix in unrelated scripts.`);
	} else if (LATIN_SCRIPT_LOCALES.has(locale)) {
		notes.push('Use Latin script for translated prose; do not switch to Cyrillic, Arabic, Hebrew, CJK, or other non-Latin scripts.');
	}

	if (PROMPT_REPAIR_LOCALES.has(locale)) {
		notes.push('This locale previously needed stricter handling: avoid repeated phrases, avoid source-language leakage, and prefer shorter natural sentences over literal calques.');
	}

	if (LOCALE_PROMPT_OVERRIDES[locale]) {
		notes.push(...LOCALE_PROMPT_OVERRIDES[locale]);
	}

	return notes;
}

function resolveLocaleOptions(locale, opts) {
	if (opts.modelMap !== 'recommended') {
		return {...opts, localePromptNotes: getLocalePromptNotes(locale, opts)};
	}

	const model = getRecommendedModel(locale);
	if (!model) {
		throw new Error(`No recommended model configured for locale: ${locale}`);
	}

	return {
		...opts,
		model,
		modelFamily: getRecommendedModelFamily(locale),
		localePromptNotes: getLocalePromptNotes(locale, opts),
	};
}

function printModelPlan(locales, opts) {
	console.log('Locale model plan:');
	for (const locale of locales) {
		const localeOpts = resolveLocaleOptions(locale, opts);
		const notes = localeOpts.localePromptNotes || [];
		console.log(`- ${locale}: ${localeOpts.model}${localeOpts.modelFamily ? ` (${localeOpts.modelFamily})` : ''}`);
		if (notes.length > 0) {
			for (const note of notes) {
				console.log(`  - ${note}`);
			}
		}
	}
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function md5(str) {
	return crypto.createHash('md5').update(str).digest('hex');
}

function getLocaleName(code) {
	try {
		const display = new Intl.DisplayNames(['en'], {type: 'language'});
		return display.of(code) || code;
	} catch {
		return code;
	}
}

/**
 * Commit a translated file to git immediately.
 */
function gitCommitFile(filePath, locale, relPath) {
	try {
		execSync(`git add "${filePath}"`, {cwd: DOCS_ROOT, stdio: 'pipe'});
		execSync(`git commit -m "translate(${locale}): ${relPath}" --no-verify`, {cwd: DOCS_ROOT, stdio: 'pipe'});
	} catch {
		// Ignore commit errors (e.g. nothing to commit)
	}
}

/**
 * Run async tasks with bounded concurrency.
 */
async function pMap(items, fn, concurrency) {
	const results = [];
	let index = 0;

	async function worker() {
		while (index < items.length) {
			const i = index++;
			results[i] = await fn(items[i], i);
		}
	}

	const workers = Array.from({length: Math.min(concurrency, items.length)}, () => worker());
	await Promise.all(workers);
	return results;
}

// ---------------------------------------------------------------------------
// API call (supports OpenAI-compatible and Claude Max Proxy providers)
// ---------------------------------------------------------------------------

function formatBytes(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatDuration(ms) {
	if (ms < 1000) return `${ms}ms`;
	if (ms < 60000) return `${(ms / 1000).toFixed(1)}s`;
	return `${(ms / 60000).toFixed(1)}m`;
}

function redactSecrets(value, opts = {}) {
	let output = String(value || '');
	const candidates = [
		opts.apiKey,
		process.env.OPENAI_API_KEY,
		process.env.OLLAMA_API_KEY,
		process.env.OLLAMA_BEARER_TOKEN,
		process.env.CONDUCTOR_TENANT_TOKEN,
	].filter(secret => secret && secret.length >= 8);

	for (const secret of candidates) {
		output = output.split(secret).join('[REDACTED]');
	}

	return output.replace(/Bearer\s+[^\s"']+/gi, 'Bearer [REDACTED]');
}

function getOllamaHeaders(apiKey, baseUrl) {
	const normalizedBaseUrl = (baseUrl || '').replace(/\/+$/, '');
	const isConductorPool = /\/v1\.0\/api\/ollama-pool/.test(normalizedBaseUrl);
	const headers = {
		'Content-Type': 'application/json',
	};

	if (!isConductorPool) {
		return headers;
	}

	const normalizedApiKey = apiKey === 'ollama' ? '' : apiKey;
	const bearerToken = normalizedApiKey || process.env.OLLAMA_API_KEY || process.env.OLLAMA_BEARER_TOKEN || process.env.CONDUCTOR_TENANT_TOKEN || '';
	if (bearerToken) {
		headers.Authorization = `Bearer ${bearerToken}`;
	}

	return headers;
}

function buildPrompts(targetLocale, field, opts = {}) {
	const langName = getLocaleName(targetLocale);
	const keepTerms = TECHNICAL_TERMS_TO_KEEP.join(', ');
	const localeNotes = opts.localePromptNotes || [];
	const localePromptBlock = localeNotes.length > 0
		? `\nLOCALE-SPECIFIC REQUIREMENTS:\n${localeNotes.map(note => `- ${note}`).join('\n')}\n`
		: '';

	const systemPrompt = field === 'body'
		? `Translate this Markdown/MDX excerpt from English to ${langName} (${targetLocale}). Return only the translated Markdown.

Terminology rule: keep these product/UI/technical terms in English unless the surrounding grammar needs a small suffix: ${keepTerms}.
${localePromptBlock}

CRITICAL: Output ONLY the translated document. No preamble, no commentary, no "Here is the translation". Start directly with the translated content.

WHAT TO TRANSLATE:
- Human-readable prose: headings, paragraphs, list items, table cells, link text, image alt text
- Natural-language explanations outside code/configuration
- Generic English nouns such as site, product, theme, plugin, client, field, plan, subscription, checkout, membership, endpoint, and code snippet when they appear as ordinary prose

WHAT TO KEEP UNCHANGED:
- Any raw code/configuration line. Copy a line exactly unchanged if it contains code syntax such as $, =>, function(, add_filter(, <FilesMatch, location ~, Header set, Access-Control-Allow-Origin, or code-like braces/semicolons
- Placeholders like @@UM_PROTECTED_BLOCK_000@@ are protected code/configuration. Copy them exactly unchanged
- Inline code, import statements, variable/function/class/hook names, command names, JSON keys, placeholders in angle brackets, and PHP code
- MDX/JSX tags and attributes (e.g. <Tabs>, <AddonBanner>)
- URLs, file paths, anchor links, cross-references
- Product/brand/UI/technology names listed above; do not treat generic words like site, product, theme, plugin, client, field, plan, or endpoint as protected unless they are code/URL/JSON identifiers or part of a listed name
- HTML tags and attributes
- Frontmatter (the --- delimited header) — it has already been handled separately

FORMATTING RULES:
- Preserve all Markdown formatting exactly: headings, lists, bold, italic, links, images, tables
- Preserve blank lines and document structure — your output must have the same number of sections
- Do NOT add or remove code fences. If the input line is not fenced code, do not introduce a fence
- Do NOT add, remove, or duplicate headings or sections
- Do NOT wrap the output in a code fence or add any commentary before/after
- Use only fluent ${langName} plus necessary unchanged English technical terms. Do not use words or characters from unrelated languages
- If a technical term is uncertain, keep the English term unchanged rather than inventing a rare word`
		: `You are a native ${langName} speaker. Translate the text below from English to ${langName} (${targetLocale}).
Rules: Output ONLY the translated text. No quotes, no explanation, no preamble like "Here is" or "I'll translate". Just the translation, nothing else. Keep product/UI/technical names (${keepTerms}), technical identifiers (hook names like wu_*), and formatting markers unchanged. Use only ${langName} plus necessary unchanged English technical terms.${localeNotes.length > 0 ? ` Locale requirements: ${localeNotes.join(' ')}` : ''}
Text:`;

	return {systemPrompt, langName};
}

/**
 * Send translation request via OpenAI-compatible chat completions API.
 */
async function translateOpenAI(text, systemPrompt, opts) {
	const baseUrl = normalizeOpenAICompatibleBaseUrl(opts.baseUrl);
	const requestBody = {
		model: opts.model,
		temperature: 0.1,
		stream: false,
		messages: [
			{role: 'system', content: systemPrompt},
			{role: 'user', content: text},
		],
	};

	const response = await fetch(`${baseUrl}/chat/completions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${opts.apiKey}`,
		},
		signal: AbortSignal.timeout(opts.timeout),
		body: JSON.stringify(requestBody),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`API error ${response.status}: ${redactSecrets(body, opts)}`);
	}

	const body = await response.text();
	let json;
	try {
		json = JSON.parse(body);
	} catch {
		throw new Error(`API returned non-JSON response: ${redactSecrets(body.slice(0, 1000), opts)}`);
	}

	if (json.error) {
		const message = json.error.message || JSON.stringify(json.error);
		throw new Error(`API error response: ${redactSecrets(message, opts)}`);
	}

	const content = extractOpenAIMessageContent(json);
	if (!content) {
		throw new Error('API response did not include choices[0].message.content');
	}

	if (opts.debug) process.stdout.write(content);
	return content;
}

function extractOpenAIMessageContent(json) {
	const choice = json.choices?.[0];
	const content = choice?.message?.content ?? choice?.text;

	if (typeof content === 'string') {
		return content;
	}

	if (Array.isArray(content)) {
		return content.map(part => {
			if (typeof part === 'string') return part;
			return part?.text || part?.content || '';
		}).join('');
	}

	return '';
}

/**
 * Send translation request via Ollama's native chat API.
 *
 * Gemma 4 exposes thinking by default in Ollama. The OpenAI-compatible
 * endpoint may stream reasoning-only chunks for these models, so use the
 * native endpoint where `think: false` reliably suppresses reasoning output.
 */
async function translateOllamaNative(text, systemPrompt, opts) {
	const baseUrl = opts.baseUrl.replace(/\/+$/, '').replace(/\/v1$/, '');
	const headers = getOllamaHeaders(opts.apiKey, opts.baseUrl);
	const options = {
		temperature: 0.1,
		num_predict: opts.numPredict,
	};
	if (opts.numCtx > 0) {
		options.num_ctx = opts.numCtx;
	}

	const response = await fetch(`${baseUrl}/api/chat`, {
		method: 'POST',
		headers,
		signal: AbortSignal.timeout(opts.timeout),
		body: JSON.stringify({
			model: opts.model,
			stream: true,
			think: false,
			keep_alive: -1,
			options,
			messages: [
				{role: 'system', content: systemPrompt},
				{role: 'user', content: text},
			],
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`API error ${response.status}: ${redactSecrets(body, opts)}`);
	}

	// Stream Ollama NDJSON format: {"message":{"content":"..."},"done":false}
	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let content = '';
	let buffer = '';

	while (true) {
		const {done, value} = await reader.read();
		if (done) break;

		buffer += decoder.decode(value, {stream: true});
		const lines = buffer.split('\n');
		buffer = lines.pop() || '';

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed) continue;

			try {
				const json = JSON.parse(trimmed);
				if (json.error) {
					throw new Error(json.error);
				}
				const delta = json.message?.content;
				if (delta) {
					content += delta;
					if (opts.debug) process.stdout.write(delta);
				}
			} catch (err) {
				if (err.message && !err.message.startsWith('Unexpected')) {
					throw err;
				}
				// Skip malformed/incomplete JSON chunks.
			}
		}
	}

	return content;
}

/**
 * Send translation request via Claude Max Proxy (Anthropic Messages API format).
 * The proxy runs locally and uses Claude CLI subscription credentials.
 */
async function translateClaudeProxy(text, systemPrompt, opts) {
	const url = `${opts.baseUrl.replace(/\/+$/, '')}/v1/messages`;

	const body = {
		model: opts.model,
		stream: true,
		messages: [
			{role: 'user', content: text},
		],
	};
	if (systemPrompt) {
		body.system = systemPrompt;
	}

	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		signal: AbortSignal.timeout(opts.timeout),
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`API error ${response.status}: ${redactSecrets(body, opts)}`);
	}

	// Stream Anthropic SSE format: event: content_block_delta + data: {"delta":{"text":"..."}}
	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let content = '';
	let buffer = '';

	while (true) {
		const {done, value} = await reader.read();
		if (done) break;

		buffer += decoder.decode(value, {stream: true});
		const lines = buffer.split('\n');
		buffer = lines.pop() || '';

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed || !trimmed.startsWith('data: ')) continue;

			try {
				const json = JSON.parse(trimmed.slice(6));

				// Anthropic streaming: content_block_delta events carry the text
				if (json.type === 'content_block_delta') {
					const delta = json.delta?.text;
					if (delta) {
						content += delta;
						if (opts.debug) process.stdout.write(delta);
					}
				}

				// Also handle non-streaming JSON response (just in case)
				if (json.content && Array.isArray(json.content)) {
					for (const block of json.content) {
						if (block.type === 'text' && block.text) {
							content += block.text;
							if (opts.debug) process.stdout.write(block.text);
						}
					}
				}
			} catch {
				// Skip malformed JSON chunks
			}
		}
	}

	return content;
}

async function translate(text, targetLocale, opts, context = {}) {
	const field = context.field || 'body';
	const {systemPrompt, langName} = buildPrompts(targetLocale, field, opts);

	if (opts.debug) {
		console.log('\n--- DEBUG: API Request ---');
		console.log(`Provider: ${opts.provider}`);
		console.log(`Context: ${context.file || 'unknown'} (${field})`);
		console.log(`Target: ${langName} (${targetLocale})`);
		console.log(`Text size: ${formatBytes(Buffer.byteLength(text, 'utf-8'))}`);
		console.log('System prompt:');
		console.log(systemPrompt);
		console.log('\nUser content (first 500 chars):');
		console.log(text.substring(0, 500) + (text.length > 500 ? '...' : ''));
		console.log('--- END DEBUG ---\n');
	}

	const startTime = Date.now();

	let content;
	if (opts.provider === 'claude-proxy') {
		if (field !== 'body') {
			// Short strings: merge instruction + text into a single user message.
			// The proxy flattens system/user into one text blob, which causes Claude
			// to see a tiny user turn after a long system block and hallucinate.
			// Combining them avoids this.
			content = await translateClaudeProxy(
				`${systemPrompt}\n${text}`, '', opts
			);
		} else {
			content = await translateClaudeProxy(text, systemPrompt, opts);
		}
	} else if (opts.provider === 'ollama-native' || opts.provider === 'ollama') {
		content = await translateOllamaNative(text, systemPrompt, opts);
	} else {
		content = await translateOpenAI(text, systemPrompt, opts);
	}

	if (opts.debug) {
		process.stdout.write('\n');
	}

	const elapsed = Date.now() - startTime;

	// Store timing info for reporting
	if (context.timings) {
		context.timings.push({field: context.field, size: Buffer.byteLength(text, 'utf-8'), elapsed});
	}

	// Sanitize: strip wrapping code fences that some models add around the output
	content = stripWrappingFences(content);
	content = normalizeLatinLocaleForeignTypos(content, targetLocale);

	// Validate output quality
	const validation = validateTranslation(text, content, field, targetLocale);
	if (validation) {
		throw new Error(`Bad translation (${validation})`);
	}

	return content;
}

function splitMarkdownBody(text, maxChars) {
	if (!maxChars || maxChars <= 0 || Buffer.byteLength(text, 'utf-8') <= maxChars) {
		return [text];
	}

	const lines = text.split('\n');
	const chunks = [];
	let current = [];
	let currentBytes = 0;
	let inCodeBlock = false;
	let lastSafeIndex = -1;

	function resetSafeIndex() {
		lastSafeIndex = -1;
		for (let i = 0; i < current.length; i++) {
			if (current[i].trim() === '') {
				lastSafeIndex = i + 1;
			}
		}
	}

	function flushChunk(splitIndex) {
		const chunkLines = current.slice(0, splitIndex);
		if (chunkLines.length > 0) {
			chunks.push(chunkLines.join('\n'));
		}
		current = current.slice(splitIndex);
		currentBytes = Buffer.byteLength(current.join('\n'), 'utf-8');
		resetSafeIndex();
	}

	for (const line of lines) {
		const lineBytes = Buffer.byteLength(line, 'utf-8') + (current.length > 0 ? 1 : 0);

		if (current.length > 0 && currentBytes + lineBytes > maxChars && !inCodeBlock) {
			const splitIndex = lastSafeIndex > 0 ? lastSafeIndex : current.length;
			flushChunk(splitIndex);
		}

		current.push(line);
		currentBytes = Buffer.byteLength(current.join('\n'), 'utf-8');

		if (/^\s*```/.test(line)) {
			inCodeBlock = !inCodeBlock;
		}
		if (!inCodeBlock && line.trim() === '') {
			lastSafeIndex = current.length;
		}
	}

	if (current.length > 0) {
		chunks.push(current.join('\n'));
	}

	return chunks.filter(chunk => chunk.length > 0);
}

async function translateBody(body, targetLocale, opts, context = {}) {
	const chunks = splitMarkdownBody(body, opts.chunkMaxChars);

	if (chunks.length === 1) {
		return translateMarkdownChunk(body, targetLocale, opts, context);
	}

	const translatedChunks = [];
	for (let i = 0; i < chunks.length; i++) {
		translatedChunks.push(await translateMarkdownChunk(chunks[i], targetLocale, opts, {
			...context,
			file: `${context.file || 'unknown'} chunk ${i + 1}/${chunks.length}`,
		}));
	}

	return translatedChunks.join('\n\n');
}

async function translateMarkdownChunk(chunk, targetLocale, opts, context = {}) {
	const protectedChunk = protectMarkdownSegments(chunk);
	const translated = await translateWithRetry(protectedChunk.text, targetLocale, opts, context);
	const restored = restoreMarkdownSegments(translated, protectedChunk.segments);
	const validation = validateTranslation(chunk, restored, 'body', targetLocale);
	if (validation) {
		throw new Error(`Bad translation (${validation})`);
	}
	return restored;
}

/**
 * Strip wrapping code fences (```markdown ... ```) that models sometimes
 * add around the entire translated output.
 */
function stripWrappingFences(text) {
	const trimmed = text.trim();
	const match = trimmed.match(/^```(?:markdown|mdx|md)?\s*\n([\s\S]*?)\n```\s*$/);
	if (match) return match[1];
	return text;
}

const LATIN_LOCALE_FOREIGN_TYPO_MAP = new Map([
	// TranslateGemma occasionally emits Arabic qaf inside an otherwise Latin
	// Maltese word, e.g. "fuق" instead of "fuq". Normalize only when the
	// character is embedded in or attached to Latin text; whole foreign-script
	// words still fail the script validator below.
	['ق', 'q'],
]);

function isLatinLetter(char) {
	return Boolean(char) && /\p{Script=Latin}/u.test(char);
}

function normalizeLatinLocaleForeignTypos(text, targetLocale) {
	if (!LATIN_SCRIPT_LOCALES.has(targetLocale)) return text;

	const chars = Array.from(text);
	let changed = false;
	for (let i = 0; i < chars.length; i++) {
		const replacement = LATIN_LOCALE_FOREIGN_TYPO_MAP.get(chars[i]);
		if (!replacement) continue;

		const previous = chars[i - 1] || '';
		const next = chars[i + 1] || '';
		if (!isLatinLetter(previous) && !isLatinLetter(next)) continue;

		chars[i] = replacement;
		changed = true;
	}

	return changed ? chars.join('') : text;
}

// ---------------------------------------------------------------------------
// Output validation — catch common AI translation failures
// ---------------------------------------------------------------------------

const BAD_OUTPUT_PATTERNS = [
	/I'm ready to translate/i,
	/I need the (?:Markdown|MDX|text|content|file)/i,
	/Could you (?:please )?provide/i,
	/Here(?:'s| is) the translat/i,
	/Please provide (?:the )?(?:content|text|file|markdown)/i,
	/I'll translate/i,
	/Let me translate/i,
	/I can help (?:you )?translate/i,
	/translation of the (?:above|following|provided)/i,
	/I don't have (?:access|the (?:content|text|file))/i,
	/No (?:content|text) (?:was )?provided/i,
	/waiting for (?:the )?(?:content|input|text)/i,
];

const LATIN_SCRIPT_LOCALES = new Set([
	'af', 'az', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'en', 'eo', 'es',
	'et', 'eu', 'fi', 'fil', 'fr', 'ga', 'gd', 'gl', 'ha', 'hmn', 'hr', 'ht',
	'hu', 'id', 'ig', 'is', 'it', 'jv', 'ku', 'la', 'lb', 'lt', 'lv', 'mg',
	'mi', 'ms', 'mt', 'nl', 'no', 'ny', 'pl', 'pt', 'pt-BR', 'ro', 'rw', 'sk',
	'sl', 'sn', 'so', 'sq', 'st', 'su', 'sv', 'sw', 'tk', 'tl', 'tr', 'uz',
	'xh', 'yo', 'zu',
]);

const SCRIPT_RANGES = {
	cjk: [[0x3400, 0x4DBF], [0x4E00, 0x9FFF], [0xF900, 0xFAFF]],
	hangul: [[0xAC00, 0xD7AF], [0x1100, 0x11FF], [0x3130, 0x318F]],
	kana: [[0x3040, 0x30FF], [0x31F0, 0x31FF]],
	cyrillic: [[0x0400, 0x04FF], [0x0500, 0x052F]],
	hebrew: [[0x0590, 0x05FF]],
	arabic: [[0x0600, 0x06FF], [0x0750, 0x077F], [0x08A0, 0x08FF], [0xFB50, 0xFDFF], [0xFE70, 0xFEFF]],
	devanagari: [[0x0900, 0x097F]],
	bengali: [[0x0980, 0x09FF]],
	gurmukhi: [[0x0A00, 0x0A7F]],
	gujarati: [[0x0A80, 0x0AFF]],
	oriya: [[0x0B00, 0x0B7F]],
	tamil: [[0x0B80, 0x0BFF]],
	telugu: [[0x0C00, 0x0C7F]],
	kannada: [[0x0C80, 0x0CFF]],
	malayalam: [[0x0D00, 0x0D7F]],
	sinhala: [[0x0D80, 0x0DFF]],
	thai: [[0x0E00, 0x0E7F]],
	lao: [[0x0E80, 0x0EFF]],
	tibetan: [[0x0F00, 0x0FFF]],
	myanmar: [[0x1000, 0x109F]],
	georgian: [[0x10A0, 0x10FF]],
	ethiopic: [[0x1200, 0x137F]],
	khmer: [[0x1780, 0x17FF]],
	armenian: [[0x0530, 0x058F]],
	greek: [[0x0370, 0x03FF]],
};

const SOURCE_LEAK_WORDS = new Set([
	'when', 'you', 'choose', 'single', 'step', 'multi', 'starting', 'point',
	'checkout', 'form', 'template', 'includes', 'selection', 'field', 'default',
	'this', 'lets', 'customers', 'pick', 'site', 'during', 'registration',
	'while', 'pricing', 'table', 'displays', 'products', 'billing', 'options',
	'they', 'can', 'select', 'install', 'activate', 'plugin', 'wizard', 'click',
	'continue', 'company', 'information', 'currency', 'recommended', 'plugins',
]);

function countRegex(text, pattern) {
	return (text.match(pattern) || []).length;
}

function countMarkdownLinks(text) {
	const matches = text.match(/!?\[[^\]\n]*\]\([^)]+\)/g) || [];
	return matches.filter(match => !match.startsWith('!')).length;
}

function countMarkdownImages(text) {
	const matches = text.match(/!?\[[^\]\n]*\]\([^)]+\)/g) || [];
	return matches.filter(match => match.startsWith('!')).length;
}

function stripFencedAndInlineCode(text) {
	const lines = [];
	let inCodeBlock = false;
	for (const line of text.split('\n')) {
		if (/^\s*```/.test(line)) {
			inCodeBlock = !inCodeBlock;
			continue;
		}
		if (!inCodeBlock) {
			lines.push(line);
		}
	}
	return lines.join('\n').replace(/`[^`]*`/g, '');
}

function countScriptChars(text, scriptName) {
	const ranges = SCRIPT_RANGES[scriptName] || [];
	let count = 0;
	for (const char of text) {
		const code = char.codePointAt(0);
		if (ranges.some(([start, end]) => code >= start && code <= end)) {
			count++;
		}
	}
	return count;
}

function countExpectedScriptChars(text, scripts) {
	return scripts
		.map(script => countScriptChars(text, script))
		.reduce((sum, value) => sum + value, 0);
}

function countLetterChars(text) {
	return Array.from(text).filter(char => /\p{L}/u.test(char)).length;
}

function sourceLeakRatio(text) {
	const words = stripFencedAndInlineCode(text).match(/[A-Za-z]{3,}/g) || [];
	if (words.length === 0) return 0;
	const leaked = words.filter(word => SOURCE_LEAK_WORDS.has(word.toLowerCase())).length;
	return leaked / words.length;
}

function getMdxTags(text) {
	return stripFencedAndInlineCode(text).match(/<\/?[A-Z][A-Za-z0-9]*(?:\s[^>]*)?>/g) || [];
}

function sameMultiset(left, right) {
	const counts = new Map();
	for (const value of left) {
		counts.set(value, (counts.get(value) || 0) + 1);
	}
	for (const value of right) {
		const next = (counts.get(value) || 0) - 1;
		if (next < 0) return false;
		if (next === 0) counts.delete(value);
		else counts.set(value, next);
	}
	return counts.size === 0;
}

function isRawCodeLikeLine(line) {
	const trimmed = line.trim();
	if (!trimmed || trimmed.startsWith('```')) return false;
	return /\$[A-Za-z_]|=>|\bfunction\s*\(|\badd_filter\s*\(|<\?php|<FilesMatch|\blocation\s+~\b|Header\s+set|Access-Control-Allow-Origin|^\s*[A-Za-z_][\w:]*\([^)]*\)\s*;?\s*$|^\s*["'][A-Za-z0-9_.-]+["']\s*:\s*.+,?\s*$|^\s*(?:npm|node|bash|php|composer|wp|curl|git|npx|yarn|pnpm)\b|[{}].*;/.test(line);
}

const CODE_FENCE_LANGUAGES = new Set([
	'bash', 'css', 'diff', 'html', 'ini', 'js', 'json', 'jsx', 'mdx', 'nginx',
	'php', 'sh', 'shell', 'sql', 'toml', 'ts', 'tsx', 'xml', 'yaml', 'yml',
]);

function getFenceLanguage(line) {
	const match = line.trim().match(/^```+\s*([A-Za-z0-9_-]+)?/);
	return match && match[1] ? match[1].toLowerCase() : '';
}

function shouldProtectFencedBlock(lines) {
	const language = getFenceLanguage(lines[0] || '');
	if (language && CODE_FENCE_LANGUAGES.has(language)) return true;

	const bodyLines = lines.slice(1, -1);
	if (bodyLines.some(isRawCodeLikeLine)) return true;

	return false;
}

function getAdmonitionDirective(line) {
	const match = line.match(/^\s*:::\s*(note|tip|info|warning|danger|caution|important)\b/i);
	return match ? match[1].toLowerCase() : '';
}

function getAdmonitionDirectives(text) {
	return text.split('\n').map(getAdmonitionDirective).filter(Boolean);
}

function isClosingAdmonitionFence(line) {
	return /^\s*:::\s*$/.test(line);
}

function protectAdmonitionLine(line, registerSegment) {
	if (isClosingAdmonitionFence(line)) {
		return registerSegment(line);
	}

	const match = line.match(/^(\s*:::\s*(?:note|tip|info|warning|danger|caution|important)\b)(.*)$/i);
	if (!match) return null;

	return `${registerSegment(match[1])}${match[2]}`;
}

function makeProtectedPlaceholder(index) {
	return `@@UM_PROTECTED_BLOCK_${String(index).padStart(3, '0')}@@`;
}

function protectMarkdownSegments(text) {
	const segments = [];
	const output = [];
	let inCodeBlock = false;
	let codeLines = [];

	function registerSegment(content) {
		const placeholder = makeProtectedPlaceholder(segments.length);
		segments.push({placeholder, content});
		return placeholder;
	}

	function pushSegment(content) {
		output.push(registerSegment(content));
		return 0;
	}

	for (const line of text.split('\n')) {
		if (/^\s*```/.test(line)) {
			codeLines.push(line);
			if (inCodeBlock) {
				if (shouldProtectFencedBlock(codeLines)) {
					pushSegment(codeLines.join('\n'));
				} else {
					const openingFence = codeLines[0];
					const closingFence = codeLines[codeLines.length - 1];
					pushSegment(openingFence);
					output.push(...codeLines.slice(1, -1));
					pushSegment(closingFence);
				}
				codeLines = [];
				inCodeBlock = false;
			} else {
				inCodeBlock = true;
			}
			continue;
		}

		if (inCodeBlock) {
			codeLines.push(line);
			continue;
		}

		const protectedAdmonition = protectAdmonitionLine(line, registerSegment);
		if (protectedAdmonition !== null) {
			output.push(protectedAdmonition);
			continue;
		}

		if (isRawCodeLikeLine(line)) {
			pushSegment(line);
			continue;
		}

		output.push(line);
	}

	if (codeLines.length > 0) {
		output.push(...codeLines);
	}

	return {text: output.join('\n'), segments};
}

function restoreMarkdownSegments(text, segments) {
	let restored = text;
	for (const {placeholder, content} of segments) {
		restored = restored.split(placeholder).join(content);
	}
	return restored;
}

function validateProtectedPlaceholders(input, output) {
	const placeholders = input.match(/@@UM_PROTECTED_BLOCK_\d{3}@@/g) || [];
	for (const placeholder of placeholders) {
		if (!output.includes(placeholder)) {
			return `protected placeholder changed: ${placeholder}`;
		}
	}
	return null;
}

function validateMarkdownStructure(input, output) {
	for (const marker of ['```', ':::']) {
		const inputCount = countRegex(input, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
		const outputCount = countRegex(output, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'));
		if (inputCount !== outputCount) return `${marker} count changed: ${inputCount}->${outputCount}`;
	}
	if (countRegex(output, /```/g) % 2 !== 0) return 'odd code fence count';

	const inputHeadings = countRegex(input, /^#{1,6}\s+\S/gm);
	const outputHeadings = countRegex(output, /^#{1,6}\s+\S/gm);
	if (inputHeadings !== outputHeadings) return `heading count changed: ${inputHeadings}->${outputHeadings}`;

	if (!sameMultiset(getAdmonitionDirectives(input), getAdmonitionDirectives(output))) {
		return 'admonition directive changed';
	}

	const inputLinks = countMarkdownLinks(input);
	const outputLinks = countMarkdownLinks(output);
	if (inputLinks !== outputLinks) return `link count changed: ${inputLinks}->${outputLinks}`;

	const inputImages = countMarkdownImages(input);
	const outputImages = countMarkdownImages(output);
	if (inputImages !== outputImages) return `image count changed: ${inputImages}->${outputImages}`;

	if (!sameMultiset(getMdxTags(input), getMdxTags(output))) return 'MDX component tags changed';

	return null;
}

function validateRawCodeLines(input, output) {
	for (const line of input.split('\n')) {
		const trimmed = line.trim();
		if (isRawCodeLikeLine(line) && !output.includes(trimmed)) {
			return `raw code/config line changed: "${trimmed.substring(0, 80)}"`;
		}
	}
	return null;
}

function validateRepeatedWords(output) {
	const prose = stripFencedAndInlineCode(output);
	for (const line of prose.split('\n')) {
		const words = line.match(/[\p{L}\p{N}_]+/gu) || [];
		let previous = '';
		let count = 0;
		for (const word of words) {
			const normalized = word.toLocaleLowerCase();
			if (normalized === previous) {
				count++;
			} else {
				previous = normalized;
				count = 1;
			}
			if (count >= 8) {
				return `degenerate repeated word: "${word}" x${count}`;
			}
		}
	}
	return null;
}

function validateLocaleScript(output, targetLocale, field) {
	if (field !== 'body') return null;

	const prose = stripFencedAndInlineCode(output);
	const expectedScripts = EXPECTED_SCRIPT_BY_LOCALE[targetLocale];
	if (expectedScripts) {
		const letters = countLetterChars(prose);
		const expected = countExpectedScriptChars(prose, expectedScripts);
		if (letters >= 80 && expected / Math.max(letters, 1) < 0.2) {
			return `low expected script ratio in ${targetLocale}: ${expected}/${letters}`;
		}

		const leak = sourceLeakRatio(prose);
		if (letters >= 80 && leak >= 0.35) {
			return `source English leakage in ${targetLocale}: ${(leak * 100).toFixed(0)}%`;
		}
	}

	if (LATIN_SCRIPT_LOCALES.has(targetLocale)) {
		const foreign = Object.keys(SCRIPT_RANGES)
			.map(script => countScriptChars(prose, script))
			.reduce((sum, value) => sum + value, 0);
		if (foreign > 0) return `foreign script characters in ${targetLocale}: ${foreign}`;
	}

	if (targetLocale === 'yi') {
		const foreign = ['cjk', 'hangul', 'kana', 'cyrillic', 'arabic']
			.map(script => countScriptChars(prose, script))
			.reduce((sum, value) => sum + value, 0);
		if (foreign > 0) return `foreign script characters in yi: ${foreign}`;

		const hebrew = countScriptChars(prose, 'hebrew');
		const alpha = Array.from(prose).filter(char => /\p{L}/u.test(char)).length;
		if (alpha >= 200 && hebrew / alpha < 0.2) {
			return `low Hebrew-script ratio in yi: ${hebrew}/${alpha}`;
		}
	}

	return null;
}

function validateTranslation(input, output, field, targetLocale) {
	const trimmed = output.trim();

	// Empty output
	if (!trimmed) return 'empty output';

	// Check for AI meta-commentary
	for (const pattern of BAD_OUTPUT_PATTERNS) {
		if (pattern.test(trimmed)) return `hallucination: "${trimmed.match(pattern)[0]}"`;
	}

	if (field === 'body') {
		const inputLines = input.split('\n').length;
		const outputLines = trimmed.split('\n').length;

		const placeholders = validateProtectedPlaceholders(input, trimmed);
		if (placeholders) return placeholders;

		const structure = validateMarkdownStructure(input, trimmed);
		if (structure) return structure;

		const rawCode = validateRawCodeLines(input, trimmed);
		if (rawCode) return rawCode;

		const script = validateLocaleScript(trimmed, targetLocale, field);
		if (script) return script;

		const repeatedWords = validateRepeatedWords(trimmed);
		if (repeatedWords) return repeatedWords;

		// Bloat detection: output is >3x the input line count (for files with >5 lines)
		if (inputLines > 5 && outputLines / inputLines > 3) {
			return `bloated: ${outputLines}/${inputLines} lines (${(outputLines / inputLines * 100).toFixed(0)}%)`;
		}

		// Truncation detection: output is <30% of input (for files with >5 lines)
		if (inputLines > 5 && outputLines / inputLines < 0.3) {
			return `truncated: ${outputLines}/${inputLines} lines (${(outputLines / inputLines * 100).toFixed(0)}%)`;
		}

		// Repetition detection: check if any non-code line repeats excessively
		const lineCounts = {};
		let inCodeBlock = false;
		for (const line of trimmed.split('\n')) {
			const l = line.trim();
			if (l.startsWith('```')) { inCodeBlock = !inCodeBlock; continue; }
			if (inCodeBlock) continue; // skip lines inside code fences
			if (l.length < 5) continue; // skip blank/short lines
			lineCounts[l] = (lineCounts[l] || 0) + 1;
			if (lineCounts[l] > 10) {
				return `degenerate: "${l.substring(0, 40)}" repeated ${lineCounts[l]}+ times`;
			}
		}
	}

	return null; // valid
}

// ---------------------------------------------------------------------------
// Translate a single doc file
// ---------------------------------------------------------------------------

async function getTranslationState(srcPath, targetLocale) {
	const relPath = path.relative(DOCS_DIR, srcPath);
	const destDir = path.join(I18N_DIR, targetLocale, 'docusaurus-plugin-content-docs', 'current');
	const destPath = path.join(destDir, relPath);
	const srcContent = await fs.readFile(srcPath, 'utf-8');
	const srcHash = md5(srcContent);
	const fileSize = Buffer.byteLength(srcContent, 'utf-8');

	if (!await fs.pathExists(destPath)) {
		return {srcPath, relPath, destPath, srcHash, fileSize, status: 'missing'};
	}

	try {
		const destContent = await fs.readFile(destPath, 'utf-8');
		const {data: translatedFm} = matter(destContent);
		const translatedHash = translatedFm._i18n_hash || '';
		return {
			srcPath,
			relPath,
			destPath,
			srcHash,
			fileSize,
			status: translatedHash === srcHash ? 'up-to-date' : 'stale',
			translatedHash,
		};
	} catch {
		return {srcPath, relPath, destPath, srcHash, fileSize, status: 'stale', translatedHash: ''};
	}
}

async function translateFile(srcPath, targetLocale, opts, translationState = null) {
	const state = translationState || await getTranslationState(srcPath, targetLocale);
	const {relPath, destPath} = state;

	if (!opts.force && state.status === 'up-to-date') {
		return {file: relPath, status: 'skipped', size: 0, reason: 'hash-match'};
	}

	if (opts.dryRun) {
		return {file: relPath, status: 'needs-translation', size: state.fileSize, reason: opts.force ? 'force' : state.status};
	}

	const srcContent = await fs.readFile(srcPath, 'utf-8');
	const srcHash = md5(srcContent);
	const fileSize = Buffer.byteLength(srcContent, 'utf-8');

	// Parse frontmatter
	const {data: fm, content: body} = matter(srcContent);

	const startTime = Date.now();
	const timings = [];

	// Translate the body
	const translatedBody = await translateBody(body, targetLocale, opts, {
		file: relPath,
		field: 'body',
		timings,
	});

	// Translate frontmatter title and description
	const translatedFm = {...fm, _i18n_hash: srcHash};
	if (fm.title) {
		translatedFm.title = await translateWithRetry(fm.title, targetLocale, opts, {
			file: relPath,
			field: 'title',
			timings,
		});
	}
	if (fm.description) {
		translatedFm.description = await translateWithRetry(fm.description, targetLocale, opts, {
			file: relPath,
			field: 'description',
			timings,
		});
	}

	const totalTime = Date.now() - startTime;

	// Write translated file
	const output = matter.stringify(translatedBody, translatedFm);
	await fs.ensureDir(path.dirname(destPath));
	await fs.writeFile(destPath, output, 'utf-8');

	// Commit immediately if --commit flag is set
	if (opts.commit) {
		gitCommitFile(destPath, targetLocale, relPath);
	}

	return {file: relPath, status: 'translated', size: fileSize, duration: totalTime};
}

async function translateWithRetry(text, targetLocale, opts, context = {}, retries = opts.retries) {
	const textSize = formatBytes(Buffer.byteLength(text, 'utf-8'));
	const contextDesc = context.file ? `${context.file}${context.field ? ` [${context.field}]` : ''}` : 'unknown';
	const maxRetries = Number.isFinite(retries) && retries > 0 ? retries : 1;

	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			return await translate(text, targetLocale, opts, context);
		} catch (err) {
			// Fail immediately on auth/config errors - retrying won't help
			if (/API error (401|403|404)/.test(err.message)) {
				console.error(`  ✖ Fatal error for "${contextDesc}": ${err.message}`);
				throw err;
			}
			if (attempt === maxRetries) throw err;
			// Exponential backoff: 5s, 10s, 20s, 40s... capped at 5 minutes
			const baseDelay = 5000;
			const delay = Math.min(baseDelay * Math.pow(2, attempt - 1), 300000);
			console.warn(`  ⚠ Retry ${attempt}/${maxRetries} for "${contextDesc}" (${textSize}) after ${Math.round(delay/1000)}s: ${err.message}`);
			await new Promise(r => setTimeout(r, delay));
		}
	}
}

// ---------------------------------------------------------------------------
// Translate theme JSON (navbar, footer labels)
// ---------------------------------------------------------------------------

async function translateThemeJSON(targetLocale, opts) {
	const themeDir = path.join(I18N_DIR, targetLocale, 'docusaurus-theme-classic');

	// Skip if both files already exist
	const navbarPath = path.join(themeDir, 'navbar.json');
	const footerPath = path.join(themeDir, 'footer.json');
	if (await fs.pathExists(navbarPath) && await fs.pathExists(footerPath)) {
		return;
	}

	await fs.ensureDir(themeDir);
	const navbar = {
		'title': {message: 'Ultimate Multisite', description: 'The title in the navbar'},
		'item.label.User Guide': {message: 'User Guide', description: 'Navbar item'},
		'item.label.Developer': {message: 'Developer', description: 'Navbar item'},
		'item.label.Addons': {message: 'Addons', description: 'Navbar item'},
		'item.label.Website': {message: 'Website', description: 'Navbar item'},
		'item.label.GitHub': {message: 'GitHub', description: 'Navbar item'},
	};

	// footer.json
	const footer = {
		'link.title.Documentation': {message: 'Documentation', description: 'Footer column title'},
		'link.title.Community': {message: 'Community', description: 'Footer column title'},
		'link.title.More': {message: 'More', description: 'Footer column title'},
		'link.item.label.User Guide': {message: 'User Guide', description: 'Footer link'},
		'link.item.label.Developer Docs': {message: 'Developer Docs', description: 'Footer link'},
		'link.item.label.Addons': {message: 'Addons', description: 'Footer link'},
		'link.item.label.GitHub Discussions': {message: 'GitHub Discussions', description: 'Footer link'},
		'link.item.label.WordPress.org': {message: 'WordPress.org', description: 'Footer link'},
		'link.item.label.Website': {message: 'Website', description: 'Footer link'},
		'link.item.label.GitHub': {message: 'GitHub', description: 'Footer link'},
		'copyright': {message: `Copyright © ${new Date().getFullYear()} Ultimate Multisite.`, description: 'Footer copyright'},
	};

	if (opts.dryRun) return;

	// Translate messages
	for (const obj of [navbar, footer]) {
		for (const key of Object.keys(obj)) {
			const original = obj[key].message;
			// Skip brand names that shouldn't be translated
			if (['Ultimate Multisite', 'GitHub', 'WordPress.org'].includes(original)) continue;
			try {
				const translated = await translateWithRetry(original, targetLocale, opts, {
					file: 'theme.json',
					field: 'label',
				});
				obj[key].message = translated.trim();
			} catch (err) {
				console.warn(`  Failed to translate theme key "${key}": ${err.message}`);
			}
		}
	}

	await fs.writeJson(navbarPath, navbar, {spaces: 2});
	await fs.writeJson(footerPath, footer, {spaces: 2});
}

// ---------------------------------------------------------------------------
// Translate sidebar labels
// ---------------------------------------------------------------------------

async function translateSidebarJSON(targetLocale, opts) {
	const sidebarDir = path.join(
		I18N_DIR, targetLocale, 'docusaurus-plugin-content-docs', 'current'
	);

	// Skip if sidebar JSON already exists
	const outPath = path.join(sidebarDir, 'sidebarsCurrent.json');
	if (await fs.pathExists(outPath)) {
		return;
	}

	await fs.ensureDir(sidebarDir);

	// Load sidebars.js to extract category labels
	const sidebarsPath = path.join(DOCS_ROOT, 'sidebars.js');
	// We need to extract labels - delete cache first to get fresh copy
	delete require.cache[require.resolve(sidebarsPath)];
	const sidebars = require(sidebarsPath);

	const sidebarJson = {};

	function extractLabels(items, sidebarId) {
		for (const item of items) {
			if (typeof item === 'object' && item.type === 'category' && item.label) {
				const key = `sidebar.${sidebarId}.category.${item.label}`;
				sidebarJson[key] = {
					message: item.label,
					description: `The label for category ${item.label} in sidebar ${sidebarId}`,
				};
				if (item.items) extractLabels(item.items, sidebarId);
			}
		}
	}

	for (const id of SIDEBAR_IDS) {
		if (sidebars[id]) {
			extractLabels(Array.isArray(sidebars[id]) ? sidebars[id] : [], id);
		}
	}

	if (opts.dryRun) return;

	// Translate labels
	for (const key of Object.keys(sidebarJson)) {
		try {
			const translated = await translateWithRetry(
				sidebarJson[key].message, targetLocale, opts, {
					file: 'sidebar.json',
					field: 'label',
				}
			);
			sidebarJson[key].message = translated.trim();
		} catch (err) {
			console.warn(`  Failed to translate sidebar "${key}": ${err.message}`);
		}
	}

	await fs.writeJson(outPath, sidebarJson, {spaces: 2});
}

// ---------------------------------------------------------------------------
// Priority classification
// ---------------------------------------------------------------------------

const PRIORITY_LABELS = {
	1: 'User Guide',
	2: 'Addon index pages',
	3: 'Developer guides (no hooks)',
	4: 'Changelogs + hooks',
};

// Assign a priority level (1-4) to a doc file based on its relative path.
// 1 = User guide, 2 = Addon index pages, 3 = Developer guides (no hooks), 4 = Rest
function getFilePriority(relPath) {
	if (relPath.startsWith('user-guide/')) return 1;

	if (/^addons\/[^/]+\/index\.mdx?$/.test(relPath)) return 2;

	if (relPath.startsWith('developer/') && !relPath.startsWith('developer/hooks/')) return 3;

	return 4;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
	const opts = parseArgs();

	if (!opts.apiKey && opts.provider !== 'claude-proxy' && opts.provider !== 'ollama-native' && opts.provider !== 'ollama' && !opts.dryRun) {
		console.error('Error: OPENAI_API_KEY is required. Set it as an environment variable or pass --api-key.');
		process.exit(1);
	}

	// Resolve locales
	let locales = opts.locales;
	if (locales.length === 0 || (locales.length === 1 && locales[0] === 'all')) {
		locales = ALL_LOCALES;
	}

	console.log(`Provider: ${opts.provider}`);
	console.log(`Locales: ${locales.length}`);
	console.log(`Model: ${opts.model}`);
	console.log(`Model map: ${opts.modelMap}`);
	console.log(`Base URL: ${opts.baseUrl}`);
	const priorityDesc = opts.priority
		? `1-${opts.priority} (${Object.entries(PRIORITY_LABELS).filter(([k]) => k <= opts.priority).map(([, v]) => v).join(', ')})`
		: 'all';
	console.log(`Priority: ${priorityDesc}`);
	console.log(`Concurrency: ${opts.concurrency}`);
	console.log(`Retries: ${opts.retries}`);
	console.log(`Dry run: ${opts.dryRun}`);
	console.log(`Debug: ${opts.debug}`);
	console.log(`Force: ${opts.force}`);
	console.log(`File filter: ${opts.files.length ? opts.files.join(', ') : 'none'}`);
	console.log('');

	if (!['single', 'recommended'].includes(opts.modelMap)) {
		console.error(`Error: unsupported --model-map value: ${opts.modelMap}`);
		process.exit(1);
	}

	if (opts.printModelPlan) {
		printModelPlan(locales, opts);
		return;
	}

	// Find all doc files (dedupe to guard against glob returning overlapping results)
	let files = [...new Set(await fg(['**/*.md', '**/*.mdx'], {
		cwd: DOCS_DIR,
		absolute: true,
		ignore: ['**/node_modules/**'],
	}))];

	// Filter by priority if specified
	if (opts.priority > 0) {
		const before = files.length;
		files = files.filter(f => getFilePriority(path.relative(DOCS_DIR, f)) <= opts.priority);
		console.log(`Found ${files.length} doc files (filtered from ${before} by priority 1-${opts.priority})`);
	} else {
		console.log(`Found ${files.length} doc files`);
	}

	if (opts.files.length > 0) {
		const requested = new Set(opts.files.map(file => file.replace(/^docs\//, '').replace(/^\/+/, '')));
		const before = files.length;
		files = files.filter(file => requested.has(path.relative(DOCS_DIR, file)));
		const found = new Set(files.map(file => path.relative(DOCS_DIR, file)));
		const missing = [...requested].filter(file => !found.has(file));
		if (missing.length > 0) {
			console.error(`Error: requested file(s) not found under docs/: ${missing.join(', ')}`);
			process.exit(1);
		}
		console.log(`Found ${files.length} doc files (filtered from ${before} by --files)`);
	}
	console.log('');

	let totalErrors = 0;

	for (const locale of locales) {
		const localeOpts = resolveLocaleOptions(locale, opts);
		console.log(`\n=== Translating to ${getLocaleName(locale)} (${locale}) ===`);
		if (opts.modelMap === 'recommended') {
			console.log(`  Model: ${localeOpts.model} (${localeOpts.modelFamily})`);
			if (localeOpts.localePromptNotes.length > 0) {
				console.log(`  Prompt notes: ${localeOpts.localePromptNotes.length}`);
			}
		}

		const fileStates = await Promise.all(files.map(file => getTranslationState(file, locale)));
		const upToDate = fileStates.filter(state => state.status === 'up-to-date').length;
		const stale = fileStates.filter(state => state.status === 'stale').length;
		const missing = fileStates.filter(state => state.status === 'missing').length;
		const needsWork = opts.force ? fileStates : fileStates.filter(state => state.status !== 'up-to-date');
		console.log(`  ${upToDate} up to date, ${stale} stale, ${missing} missing, ${needsWork.length} to translate`);

		let translated = 0;
		let skipped = opts.force ? 0 : upToDate;
		let failed = 0;
		let needsTranslation = 0;

		// Translate missing or stale files. Hash-matched files are skipped unless --force is set.
		await pMap(
			needsWork,
			async (state) => {
				try {
					const result = await translateFile(state.srcPath, locale, localeOpts, state);
					if (result.status === 'translated') {
						translated++;
						console.log(`  ✓ ${result.file} (${formatBytes(result.size)}, ${formatDuration(result.duration)})`);
					} else if (result.status === 'skipped') {
						skipped++;
					} else {
						needsTranslation++;
					}
					return result;
				} catch (err) {
					failed++;
					const relPath = state.relPath;
					console.error(`  ✖ ${relPath}: ${err.message}`);
					return {file: relPath, status: 'error', error: err.message};
				}
			},
			opts.concurrency
		);

		// Translate theme JSON and sidebar labels for full-locale runs only.
		if (opts.files.length === 0) {
			try {
				await translateThemeJSON(locale, localeOpts);
			} catch (err) {
				console.error(`  ✖ theme JSON: ${err.message}`);
				failed++;
			}
			try {
				await translateSidebarJSON(locale, localeOpts);
			} catch (err) {
				console.error(`  ✖ sidebar JSON: ${err.message}`);
				failed++;
			}
		}

		if (opts.dryRun) {
			console.log(`  Files needing translation: ${needsTranslation}`);
			console.log(`  Files stale: ${stale}`);
			console.log(`  Files missing: ${missing}`);
			console.log(`  Files up to date: ${skipped}`);
		} else {
			console.log(`  Translated: ${translated}, Skipped: ${skipped}, Failed: ${failed}`);
		}
		totalErrors += failed;
	}

	if (totalErrors > 0) {
		console.error(`\nDone with ${totalErrors} error(s).`);
		process.exit(1);
	}

	console.log('\nDone!');
}

main().catch(err => {
	console.error(err);
	process.exit(1);
});
