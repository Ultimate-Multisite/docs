#!/usr/bin/env node

/**
 * Normalize generated i18n Markdown after machine translation.
 *
 * Docusaurus 3.9.2's excerpt generator strips H1 headings before choosing the
 * default SEO description, but it mishandles H1 custom heading IDs like
 * `# Title {#title}` and can emit descriptions such as `title}`. H1 anchors are
 * not needed for the docs TOC, so this removes only H1 custom IDs while keeping
 * lower-level translated heading anchors stable.
 *
 * The script also repairs homepage section labels that translation left in
 * English, reusing translated navbar/footer labels where available.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const I18N_DIR = path.join(ROOT_DIR, 'i18n');
const DOCS_PLUGIN_DIR = path.join('docusaurus-plugin-content-docs', 'current');
const CHECK_ONLY = process.argv.includes('--check');
const DRY_RUN = process.argv.includes('--dry-run') || CHECK_ONLY;

const HOMEPAGE_OVERRIDES = {
	azb: {
		title: 'Ultimate Multisite بلگه‌لری',
		documentationSections: 'بلگه‌لر بؤلمه‌لری',
		userGuide: 'ایستیفاده‌چی بئلگه‌سی',
		developerDocumentation: 'گلیشدیرن بلگه‌لری',
		addons: 'افزونه‌لر',
		gettingHelp: 'کؤمک آلماق',
	},
	ca: {addons: 'Complements'},
	ceb: {
		title: 'Dokumentasyon sa Ultimate Multisite',
		documentationSections: 'Mga seksyon sa dokumentasyon',
		userGuide: 'Giya sa tiggamit',
		developerDocumentation: 'Dokumentasyon sa developer',
		addons: 'Mga addon',
		gettingHelp: 'Pagkuha og tabang',
	},
	cy: {addons: 'Ychwanegion'},
	da: {addons: 'Tilføjelser'},
	eo: {addons: 'Aldonaĵoj'},
	eu: {addons: 'Gehigarriak'},
	es: {
		title: 'Documentación de Ultimate Multisite',
		documentationSections: 'Secciones de documentación',
		userGuide: 'Guía de usuario',
		developerDocumentation: 'Documentación para desarrolladores',
		addons: 'Complementos',
		gettingHelp: 'Obtener ayuda',
	},
	fil: {
		title: 'Dokumentasyon ng Ultimate Multisite',
		documentationSections: 'Mga seksyon ng dokumentasyon',
		userGuide: 'Gabay sa gumagamit',
		developerDocumentation: 'Dokumentasyon para sa developer',
		addons: 'Mga addon',
		gettingHelp: 'Pagkuha ng tulong',
	},
	fr: {
		title: 'Documentation d’Ultimate Multisite',
	},
	gd: {addons: 'Tuilleadain'},
	gu: {
		title: 'Ultimate Multisite દસ્તાવેજીકરણ',
		documentationSections: 'દસ્તાવેજીકરણ વિભાગો',
		userGuide: 'વપરાશકર્તા માર્ગદર્શિકા',
		developerDocumentation: 'વિકાસકર્તા દસ્તાવેજીકરણ',
		addons: 'એડઓન્સ',
		gettingHelp: 'મદદ મેળવવી',
	},
	ha: {addons: 'Ƙarin abubuwa'},
	ht: {addons: 'Modil siplemantè'},
	hi: {
		title: 'Ultimate Multisite दस्तावेज़ीकरण',
		documentationSections: 'दस्तावेज़ीकरण अनुभाग',
		userGuide: 'उपयोगकर्ता मार्गदर्शिका',
		developerDocumentation: 'डेवलपर दस्तावेज़ीकरण',
		addons: 'ऐडऑन',
		gettingHelp: 'सहायता प्राप्त करना',
	},
	hmn: {
		title: 'Ultimate Multisite cov ntaub ntawv qhia',
		documentationSections: 'Cov tshooj ntaub ntawv qhia',
		userGuide: 'Phau ntawv qhia rau tus siv',
		developerDocumentation: 'Cov ntaub ntawv rau developer',
		addons: 'Cov addon',
		gettingHelp: 'Tau kev pab',
	},
	hy: {addons: 'Հավելումներ'},
	it: {
		documentationSections: 'Sezioni della documentazione',
		userGuide: 'Guida utente',
		developerDocumentation: 'Documentazione per sviluppatori',
		addons: 'Componenti aggiuntivi',
		gettingHelp: 'Ottenere aiuto',
	},
	ja: {
		title: 'Ultimate Multisite ドキュメント',
	},
	jv: {addons: 'Tambahan'},
	kk: {addons: 'Қосымшалар'},
	km: {addons: 'ផ្នែកបន្ថែម'},
	ku: {addons: 'Pêvek'},
	ky: {addons: 'Кошумчалар'},
	la: {addons: 'Additamenta'},
	lb: {addons: 'Erweiderungen'},
	lo: {addons: 'ສ່ວນເສີມ'},
	lt: {addons: 'Priedai'},
	mg: {addons: 'Fanampiny'},
	mi: {addons: 'Tāpiritanga'},
	mn: {addons: 'Нэмэлтүүд'},
	mr: {addons: 'पूरक घटक'},
	my: {
		title: 'Ultimate Multisite စာရွက်စာတမ်းများ',
		documentationSections: 'စာရွက်စာတမ်း အပိုင်းများ',
		userGuide: 'အသုံးပြုသူ လမ်းညွှန်',
		developerDocumentation: 'Developer စာရွက်စာတမ်းများ',
		addons: 'အပိုဆောင်းပလပ်အင်များ',
		gettingHelp: 'အကူအညီ ရယူခြင်း',
	},
	nl: {
		title: 'Ultimate Multisite-documentatie',
	},
	ne: {addons: 'एडअनहरू'},
	ny: {addons: 'Zowonjezera'},
	ps: {addons: 'اضافې'},
	pt: {addons: 'Complementos'},
	'pt-BR': {
		title: 'Documentação do Ultimate Multisite',
		addons: 'Complementos',
	},
	rw: {addons: 'Inyongera'},
	sd: {addons: 'اضافا'},
	snd: {addons: 'اضافا'},
	so: {addons: 'Kordhino'},
	st: {addons: 'Dikatoloso'},
	su: {addons: 'Tambihan'},
	ta: {addons: 'சேர்க்கைகள்'},
	tg: {addons: 'Иловаҳо'},
	tk: {addons: 'Goşmaçalar'},
	ug: {addons: 'قوشۇمچىلار'},
	yo: {
		title: 'Ìwé ìtọ́nisọ́nà Ultimate Multisite',
		documentationSections: 'Àwọn abala ìwé ìtọ́nisọ́nà',
		developerDocumentation: 'Ìwé ìtọ́nisọ́nà fún olùgbéejáde',
		addons: 'Àfikún',
	},
};

function readJson(filePath) {
	try {
		return JSON.parse(fs.readFileSync(filePath, 'utf8'));
	} catch {
		return {};
	}
}

function translatedMessage(json, key, english) {
	const message = json[key]?.message;
	if (!message || message === english) return '';
	if (/[*→]/u.test(message)) return '';
	return message;
}

function themeTranslations(locale) {
	const themeDir = path.join(I18N_DIR, locale, 'docusaurus-theme-classic');
	const navbar = readJson(path.join(themeDir, 'navbar.json'));
	const footer = readJson(path.join(themeDir, 'footer.json'));

	return {
		userGuide: translatedMessage(navbar, 'item.label.User Guide', 'User Guide') || translatedMessage(footer, 'link.item.label.User Guide', 'User Guide'),
		developerDocumentation: translatedMessage(footer, 'link.item.label.Developer Docs', 'Developer Docs') || translatedMessage(navbar, 'item.label.Developer', 'Developer'),
		addons: translatedMessage(navbar, 'item.label.Addons', 'Addons') || translatedMessage(footer, 'link.item.label.Addons', 'Addons'),
	};
}

function homepageTranslations(locale) {
	const theme = themeTranslations(locale);
	const overrides = HOMEPAGE_OVERRIDES[locale] || {};

	return {
		title: overrides.title || '',
		documentationSections: overrides.documentationSections || '',
		userGuide: overrides.userGuide || theme.userGuide || '',
		developerDocumentation: overrides.developerDocumentation || theme.developerDocumentation || '',
		addons: overrides.addons || theme.addons || '',
		gettingHelp: overrides.gettingHelp || '',
	};
}

function replaceHeading(content, regex, label) {
	if (!label) return content;
	return content.replace(regex, (_match, prefix, suffix = '') => `${prefix}${label}${suffix}`);
}

function normalizeHomepage(locale, content) {
	const overrides = HOMEPAGE_OVERRIDES[locale] || {};
	const labels = homepageTranslations(locale);
	let normalized = content;

	normalized = replaceHeading(
		normalized,
		/^(#\s+)Ultimate Multisite Documentation([ \t]+\{#ultimate-multisite-documentation\})?[ \t]*$/m,
		labels.title,
	);
	normalized = replaceHeading(
		normalized,
		/^(##\s+)Documentation Sections([ \t]+\{#documentation-sections\})?[ \t]*$/m,
		labels.documentationSections,
	);
	if (overrides.documentationSections) {
		normalized = replaceHeading(
			normalized,
			/^(##\s+).+?([ \t]+\{#documentation-sections\})[ \t]*$/m,
			labels.documentationSections,
		);
	}
	normalized = replaceHeading(
		normalized,
		/^(###\s+(?:\[)?)User Guide((?:\](?:\([^)]*\))?)?[ \t]*(?:\{#user-guide\})?)[ \t]*$/m,
		labels.userGuide,
	);
	normalized = replaceHeading(
		normalized,
		/^(###\s+(?:\[)?)Developer Documentation((?:\](?:\([^)]*\))?)?[ \t]*(?:\{#developer-documentation\})?)[ \t]*$/m,
		labels.developerDocumentation,
	);
	normalized = replaceHeading(
		normalized,
		/^(###\s+(?:\[)?)Addons((?:\](?:\([^)]*\))?)?[ \t]*(?:\{#addons\})?)[ \t]*$/m,
		labels.addons,
	);
	if (overrides.addons) {
		normalized = replaceHeading(
			normalized,
			/^(###\s+(?:\[)?).+?((?:\](?:\([^)]*\))?)?[ \t]*\{#addons\})[ \t]*$/m,
			labels.addons,
		);
	}
	normalized = replaceHeading(
		normalized,
		/^(##\s+)Getting Help([ \t]+\{#getting-help\})?[ \t]*$/m,
		labels.gettingHelp,
	);

	return normalizeHomepageSpacing(normalized);
}

function normalizeHomepageSpacing(content) {
	const lines = content.split('\n');
	const normalized = [];

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const isHeading = /^#{1,6}\s+/.test(line);
		const previous = normalized[normalized.length - 1];

		if (isHeading && previous && previous !== '---') normalized.push('');
		normalized.push(line);

		const next = lines[i + 1];
		if (isHeading && next !== undefined && next !== '') normalized.push('');
	}

	return normalized.join('\n').replace(/\n{3,}/g, '\n\n');
}

function normalizeH1Ids(content) {
	return content.replace(/^(#\s+.+?)[ \t]+\{#[^}\n]+\}([ \t]*)$/gm, '$1$2');
}

function normalizeAddonDescriptionPlaceholder(content) {
	if (!/^\{\{ADDON_DESCRIPTION\}\}[ \t]*$/m.test(content)) return content;

	const titleMatch = content.match(/^title:\s*(?:"([^"]+)"|'([^']+)'|([^\n]+))\s*$/m);
	const title = (titleMatch?.[1] || titleMatch?.[2] || titleMatch?.[3] || 'Ultimate Multisite addon template').trim();
	return content.replace(/^\{\{ADDON_DESCRIPTION\}\}[ \t]*$/m, `${title} — Ultimate Multisite.`);
}

function collectMarkdownFiles(dir) {
	const files = [];
	if (!fs.existsSync(dir)) return files;

	for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
		const entryPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...collectMarkdownFiles(entryPath));
			continue;
		}
		if (/\.mdx?$/i.test(entry.name)) files.push(entryPath);
	}

	return files;
}

function homepageEnglishLabels(locale, content) {
	const labels = [];
	const checks = [
		['title', /^#\s+Ultimate Multisite Documentation(?:[ \t]+\{#ultimate-multisite-documentation\})?[ \t]*$/m],
		['documentationSections', /^##\s+Documentation Sections(?:[ \t]+\{#documentation-sections\})?[ \t]*$/m],
		['userGuide', /^###\s+(?:\[)?User Guide(?:\](?:\([^)]*\))?)?[ \t]*(?:\{#user-guide\})?[ \t]*$/m],
		['developerDocumentation', /^###\s+(?:\[)?Developer Documentation(?:\](?:\([^)]*\))?)?[ \t]*(?:\{#developer-documentation\})?[ \t]*$/m],
		['addons', /^###\s+(?:\[)?Addons(?:\](?:\([^)]*\))?)?[ \t]*(?:\{#addons\})?[ \t]*$/m],
		['gettingHelp', /^##\s+Getting Help(?:[ \t]+\{#getting-help\})?[ \t]*$/m],
	];

	for (const [label, regex] of checks) {
		if (regex.test(content)) labels.push(`${locale}:${label}`);
	}

	return labels;
}

function main() {
	const stats = {
		filesScanned: 0,
		filesChanged: 0,
		h1IdsFound: 0,
		addonDescriptionPlaceholdersFound: 0,
		homepageLabelsFound: [],
	};

	const localeDirs = fs.readdirSync(I18N_DIR, {withFileTypes: true})
		.filter(entry => entry.isDirectory())
		.map(entry => entry.name)
		.sort();

	for (const locale of localeDirs) {
		const docsDir = path.join(I18N_DIR, locale, DOCS_PLUGIN_DIR);
		const files = collectMarkdownFiles(docsDir);

		for (const filePath of files) {
			stats.filesScanned++;
			const before = fs.readFileSync(filePath, 'utf8');
			const h1Matches = before.match(/^#\s+.+?[ \t]+\{#[^}\n]+\}[ \t]*$/gm) || [];
			stats.h1IdsFound += h1Matches.length;
			if (/^\{\{ADDON_DESCRIPTION\}\}[ \t]*$/m.test(before)) stats.addonDescriptionPlaceholdersFound++;

			let after = before;
			if (path.basename(filePath) === 'index.md' && path.dirname(filePath) === docsDir) {
				after = normalizeHomepage(locale, after);
			}
			after = normalizeAddonDescriptionPlaceholder(after);
			after = normalizeH1Ids(after);

			if (path.basename(filePath) === 'index.md' && path.dirname(filePath) === docsDir) {
				stats.homepageLabelsFound.push(...homepageEnglishLabels(locale, after));
			}

			if (after !== before) {
				stats.filesChanged++;
				if (!DRY_RUN) fs.writeFileSync(filePath, after, 'utf8');
			}
		}
	}

	console.log(`Scanned ${stats.filesScanned} localized Markdown files.`);
	console.log(`${DRY_RUN ? 'Would update' : 'Updated'} ${stats.filesChanged} files.`);
	console.log(`H1 custom heading IDs found before normalization: ${stats.h1IdsFound}.`);
	console.log(`Addon description placeholders found before normalization: ${stats.addonDescriptionPlaceholdersFound}.`);

	if (stats.homepageLabelsFound.length > 0) {
		console.log('Homepage English labels remaining:');
		for (const label of stats.homepageLabelsFound.slice(0, 100)) console.log(`- ${label}`);
		if (stats.homepageLabelsFound.length > 100) console.log(`- ... ${stats.homepageLabelsFound.length - 100} more`);
	}

	if (CHECK_ONLY && (stats.h1IdsFound > 0 || stats.addonDescriptionPlaceholdersFound > 0 || stats.homepageLabelsFound.length > 0)) {
		process.exitCode = 1;
	}
}

main();
