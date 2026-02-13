#!/usr/bin/env node

/**
 * Translate Docusaurus docs to multiple languages using OpenAI-compatible APIs.
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

const SIDEBAR_IDS = ['userGuideSidebar', 'developerSidebar', 'addonsSidebar'];

const RTL_LOCALES = new Set([
	'ar', 'he', 'fa', 'ur', 'ckb', 'ps', 'snd', 'ug', 'azb', 'yi',
]);

function parseArgs() {
	const args = process.argv.slice(2);
	const opts = {
		locales: [],
		concurrency: 5,
		dryRun: false,
		debug: false,
		timeout: parseInt(process.env.OPENAI_TIMEOUT, 10) || 900000, // 15 minutes default
		model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
		baseUrl: process.env.OPENAI_API_BASE || 'https://api.openai.com/v1',
		apiKey: process.env.OPENAI_API_KEY || '',
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
			case '--model':
				opts.model = args[++i];
				break;
			case '--base-url':
				opts.baseUrl = args[++i];
				break;
			case '--api-key':
				opts.apiKey = args[++i];
				break;
			case '--timeout':
				opts.timeout = parseInt(args[++i], 10) * 1000; // Convert seconds to ms
				break;
			case '--commit':
				opts.commit = true;
				break;
		}
	}

	return opts;
}

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
// OpenAI API call
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

async function translate(text, targetLocale, opts, context = {}) {
	const langName = getLocaleName(targetLocale);
	const field = context.field || 'body';

	// Use a focused prompt for short frontmatter fields (title, description)
	// to prevent the model from getting confused by tiny inputs.
	const systemPrompt = field === 'body'
		? `You are a professional translator for software documentation. Translate the Docusaurus Markdown/MDX content below from English to ${langName} (${targetLocale}).

The user message is the COMPLETE document to translate. Always produce a translation — never ask for clarification, request more context, or say you need the content. The text you receive IS the content.

WHAT TO TRANSLATE:
- All human-readable prose: headings, paragraphs, list items, table cells, link text, image alt text
- Descriptions and explanatory comments, including inside code blocks if they are prose (e.g. "// Custom logic when checkout completes")

WHAT TO KEEP UNCHANGED:
- Code: fenced code blocks, inline code, import statements, variable/function/class/hook names
- MDX/JSX tags and attributes (e.g. <Tabs>, <AddonBanner>)
- URLs, file paths, anchor links, cross-references
- Product/brand names: Ultimate Multisite, WordPress, WooCommerce, PHP, MySQL, Stripe, etc.
- HTML tags and attributes
- Frontmatter (the --- delimited header) — it has already been handled separately

FORMATTING RULES:
- Preserve all Markdown formatting exactly: headings, lists, bold, italic, links, images, tables
- Preserve blank lines and document structure — your output must have the same number of sections
- Do NOT add, remove, or duplicate headings or sections
- Do NOT wrap the output in a code fence or add any commentary before/after
- Your output should be approximately the same length as the input`
		: `Translate this short text from English to ${langName} (${targetLocale}). Output ONLY the translated text — no quotes, no explanation, no commentary. Keep product names (Ultimate Multisite, WordPress, etc.), technical identifiers (hook names like wu_*, function names), and formatting markers unchanged. The text to translate is:`;

	if (opts.debug) {
		console.log('\n--- DEBUG: API Request ---');
		console.log(`Context: ${context.file || 'unknown'} (${context.field || 'body'})`);
		console.log(`Target: ${langName} (${targetLocale})`);
		console.log(`Text size: ${formatBytes(Buffer.byteLength(text, 'utf-8'))}`);
		console.log('System prompt:');
		console.log(systemPrompt);
		console.log('\nUser content (first 500 chars):');
		console.log(text.substring(0, 500) + (text.length > 500 ? '...' : ''));
		console.log('--- END DEBUG ---\n');
	}

	const startTime = Date.now();

	const response = await fetch(`${opts.baseUrl}/chat/completions`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${opts.apiKey}`,
		},
		signal: AbortSignal.timeout(opts.timeout),
		body: JSON.stringify({
			model: opts.model,
			temperature: 0.1,
			stream: true,
			messages: [
				{role: 'system', content: systemPrompt},
				{role: 'user', content: text},
			],
		}),
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`API error ${response.status}: ${body}`);
	}

	// Stream the response
	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let content = '';
	let buffer = '';

	while (true) {
		const {done, value} = await reader.read();
		if (done) break;

		buffer += decoder.decode(value, {stream: true});

		// Process complete SSE lines
		const lines = buffer.split('\n');
		buffer = lines.pop() || ''; // Keep incomplete line in buffer

		for (const line of lines) {
			const trimmed = line.trim();
			if (!trimmed || trimmed === 'data: [DONE]') continue;
			if (!trimmed.startsWith('data: ')) continue;

			try {
				const json = JSON.parse(trimmed.slice(6));
				const delta = json.choices?.[0]?.delta?.content;
				if (delta) {
					content += delta;
					if (opts.debug) {
						process.stdout.write(delta);
					}
				}
			} catch {
				// Skip malformed JSON chunks
			}
		}
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

	// Validate output quality
	const validation = validateTranslation(text, content, field);
	if (validation) {
		throw new Error(`Bad translation (${validation})`);
	}

	return content;
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

function validateTranslation(input, output, field) {
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

async function translateFile(srcPath, targetLocale, opts) {
	const relPath = path.relative(DOCS_DIR, srcPath);
	const destDir = path.join(I18N_DIR, targetLocale, 'docusaurus-plugin-content-docs', 'current');
	const destPath = path.join(destDir, relPath);

	const srcContent = await fs.readFile(srcPath, 'utf-8');
	const srcHash = md5(srcContent);
	const fileSize = Buffer.byteLength(srcContent, 'utf-8');

	// Check if translation already exists and source hasn't changed
	if (await fs.pathExists(destPath)) {
		// const existing = await fs.readFile(destPath, 'utf-8');
		// const {data: existingFm} = matter(existing);
		// if (existingFm._i18n_hash === srcHash) {
        // Just check that it exists.
			return {file: relPath, status: 'skipped', size: fileSize};
		// }
	}

	if (opts.dryRun) {
		return {file: relPath, status: 'needs-translation', size: fileSize};
	}

	// Parse frontmatter
	const {data: fm, content: body} = matter(srcContent);

	const startTime = Date.now();
	const timings = [];

	// Translate the body
	const translatedBody = await translateWithRetry(body, targetLocale, opts, {
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

async function translateWithRetry(text, targetLocale, opts, context = {}, retries = 12) {
	const textSize = formatBytes(Buffer.byteLength(text, 'utf-8'));
	const contextDesc = context.file ? `${context.file}${context.field ? ` [${context.field}]` : ''}` : 'unknown';

	for (let attempt = 1; attempt <= retries; attempt++) {
		try {
			return await translate(text, targetLocale, opts, context);
		} catch (err) {
			// Fail immediately on auth/config errors - retrying won't help
			if (/API error (401|403|404)/.test(err.message)) {
				console.error(`  ✖ Fatal error for "${contextDesc}": ${err.message}`);
				throw err;
			}
			if (attempt === retries) throw err;
			// Exponential backoff: 5s, 10s, 20s, 40s... capped at 5 minutes
			const baseDelay = 5000;
			const delay = Math.min(baseDelay * Math.pow(2, attempt - 1), 300000);
			console.warn(`  ⚠ Retry ${attempt}/${retries} for "${contextDesc}" (${textSize}) after ${Math.round(delay/1000)}s: ${err.message}`);
			await new Promise(r => setTimeout(r, delay));
		}
	}
}

// ---------------------------------------------------------------------------
// Translate theme JSON (navbar, footer labels)
// ---------------------------------------------------------------------------

async function translateThemeJSON(targetLocale, opts) {
	const themeDir = path.join(I18N_DIR, targetLocale, 'docusaurus-theme-classic');
	await fs.ensureDir(themeDir);

	// navbar.json
	const navbarPath = path.join(themeDir, 'navbar.json');
	const navbar = {
		'title': {message: 'Ultimate Multisite', description: 'The title in the navbar'},
		'item.label.User Guide': {message: 'User Guide', description: 'Navbar item'},
		'item.label.Developer': {message: 'Developer', description: 'Navbar item'},
		'item.label.Addons': {message: 'Addons', description: 'Navbar item'},
		'item.label.Website': {message: 'Website', description: 'Navbar item'},
		'item.label.GitHub': {message: 'GitHub', description: 'Navbar item'},
	};

	// footer.json
	const footerPath = path.join(themeDir, 'footer.json');
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
				const translated = await translateWithRetry(original, targetLocale, opts);
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
				sidebarJson[key].message, targetLocale, opts
			);
			sidebarJson[key].message = translated.trim();
		} catch (err) {
			console.warn(`  Failed to translate sidebar "${key}": ${err.message}`);
		}
	}

	const outPath = path.join(sidebarDir, 'sidebarsCurrent.json');
	await fs.writeJson(outPath, sidebarJson, {spaces: 2});
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
	const opts = parseArgs();

	if (!opts.apiKey && !opts.dryRun) {
		console.error('Error: OPENAI_API_KEY is required. Set it as an environment variable or pass --api-key.');
		process.exit(1);
	}

	// Resolve locales
	let locales = opts.locales;
	if (locales.length === 0 || (locales.length === 1 && locales[0] === 'all')) {
		locales = ALL_LOCALES;
	}

	console.log(`Locales: ${locales.length}`);
	console.log(`Model: ${opts.model}`);
	console.log(`Concurrency: ${opts.concurrency}`);
	console.log(`Dry run: ${opts.dryRun}`);
	console.log(`Debug: ${opts.debug}`);
	console.log('');

	// Find all doc files (dedupe to guard against glob returning overlapping results)
	const files = [...new Set(await fg(['**/*.md', '**/*.mdx'], {
		cwd: DOCS_DIR,
		absolute: true,
		ignore: ['**/node_modules/**'],
	}))];

	console.log(`Found ${files.length} doc files`);
	console.log('');

	let totalErrors = 0;

	for (const locale of locales) {
		console.log(`\n=== Translating to ${getLocaleName(locale)} (${locale}) ===`);

		let translated = 0;
		let skipped = 0;
		let failed = 0;
		let needsTranslation = 0;

		// Translate doc files with concurrency
		const results = await pMap(
			files,
			async (file) => {
				try {
					const result = await translateFile(file, locale, opts);
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
					const relPath = path.relative(DOCS_DIR, file);
					console.error(`  ✖ ${relPath}: ${err.message}`);
					return {file: relPath, status: 'error', error: err.message};
				}
			},
			opts.concurrency
		);

		// Translate theme JSON and sidebar labels
		try {
			await translateThemeJSON(locale, opts);
		} catch (err) {
			console.error(`  ✖ theme JSON: ${err.message}`);
			failed++;
		}
		try {
			await translateSidebarJSON(locale, opts);
		} catch (err) {
			console.error(`  ✖ sidebar JSON: ${err.message}`);
			failed++;
		}

		if (opts.dryRun) {
			console.log(`  Files needing translation: ${needsTranslation}`);
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
