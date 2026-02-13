#!/usr/bin/env node

/**
 * Audit translated files for common translation issues.
 *
 * Checks:
 *  1. Truncated/blank — translation has <40% of the English source line count
 *  2. Bloated          — translation has >200% of the English source line count
 *  3. AI hallucination — frontmatter or body contains chatbot meta-commentary
 *  4. Empty body       — no meaningful content after frontmatter
 *  5. Orphaned         — translation exists without a matching English source
 *  6. Untranslated     — body content is identical to English source
 *
 * Usage:
 *   node scripts/audit-translations.js                   # audit all locales
 *   node scripts/audit-translations.js --locales fr,es   # audit specific locales
 *   node scripts/audit-translations.js --fix-truncated   # delete truncated/empty files
 *   node scripts/audit-translations.js --fix-bad         # delete all bad files (truncated, empty, hallucinated, untranslated)
 *   node scripts/audit-translations.js --json            # output JSON instead of table
 */

const fs = require('fs');
const path = require('path');
const { globSync } = require('fast-glob');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const DOCS_ROOT = path.resolve(__dirname, '..');
const ENGLISH_DIR = path.join(DOCS_ROOT, 'docs');
const I18N_DIR = path.join(DOCS_ROOT, 'i18n');
const PLUGIN_SUBPATH = 'docusaurus-plugin-content-docs/current';

const TRUNCATION_RATIO = 0.4;   // flag if translation < 40% of source lines
const BLOAT_RATIO = 2.0;        // flag if translation > 200% of source lines
const MIN_BODY_LINES = 1;       // minimum non-empty lines after frontmatter

// Patterns that indicate the AI model output meta-commentary instead of translating
const HALLUCINATION_PATTERNS = [
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
  /<!-{2,}\s*TODO/i,
  /\[INSERT\s/i,
  /\[TRANSLATE\s/i,
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getLocales(filter) {
  if (filter) return filter.split(',').map(l => l.trim());
  if (!fs.existsSync(I18N_DIR)) return [];
  return fs.readdirSync(I18N_DIR).filter(d => {
    const full = path.join(I18N_DIR, d, PLUGIN_SUBPATH);
    return d !== 'en' && fs.existsSync(full);
  });
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { raw: '', bodyStart: 0 };
  const endIndex = match[0].length;
  return { raw: match[1], bodyStart: endIndex };
}

function bodyLines(content) {
  const { bodyStart } = parseFrontmatter(content);
  const body = content.slice(bodyStart).trim();
  if (!body) return 0;
  return body.split('\n').filter(l => l.trim().length > 0).length;
}

function lineCount(content) {
  return content.split('\n').length;
}

function checkHallucination(content) {
  for (const pattern of HALLUCINATION_PATTERNS) {
    const match = content.match(pattern);
    if (match) return match[0];
  }
  return null;
}

/** Strip frontmatter and the _i18n_hash line to get comparable body text. */
function getBody(content) {
  const { bodyStart } = parseFrontmatter(content);
  return content.slice(bodyStart).trim();
}

/** Check if two bodies are effectively identical (ignoring whitespace). */
function isUntranslated(translatedContent, englishContent) {
  const tBody = getBody(translatedContent).replace(/\s+/g, ' ');
  const eBody = getBody(englishContent).replace(/\s+/g, ' ');
  if (eBody.length < 20) return false; // too short to judge
  return tBody === eBody;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function audit(localeFilter, opts = {}) {
  const locales = getLocales(localeFilter);
  if (locales.length === 0) {
    console.error('No locales found to audit.');
    process.exit(1);
  }

  const issues = [];

  for (const locale of locales) {
    const localeDir = path.join(I18N_DIR, locale, PLUGIN_SUBPATH);
    const files = globSync('**/*.{md,mdx}', { cwd: localeDir });

    for (const relFile of files) {
      const translatedPath = path.join(localeDir, relFile);
      const englishPath = path.join(ENGLISH_DIR, relFile);
      const translatedContent = fs.readFileSync(translatedPath, 'utf8');
      const translatedLines = lineCount(translatedContent);

      const fileIssues = [];

      // Check for AI hallucination
      const hallucination = checkHallucination(translatedContent);
      if (hallucination) {
        fileIssues.push({ type: 'hallucination', detail: hallucination });
      }

      // Check empty body
      const bLines = bodyLines(translatedContent);
      if (bLines < MIN_BODY_LINES) {
        fileIssues.push({ type: 'empty-body', detail: `${bLines} content lines` });
      }

      // Compare against English source
      if (fs.existsSync(englishPath)) {
        const englishContent = fs.readFileSync(englishPath, 'utf8');
        const englishLines = lineCount(englishContent);
        const ratio = translatedLines / englishLines;

        if (englishLines > 5 && ratio < TRUNCATION_RATIO) {
          fileIssues.push({
            type: 'truncated',
            detail: `${translatedLines}/${englishLines} lines (${(ratio * 100).toFixed(0)}%)`,
          });
        }

        if (englishLines > 5 && ratio > BLOAT_RATIO) {
          fileIssues.push({
            type: 'bloated',
            detail: `${translatedLines}/${englishLines} lines (${(ratio * 100).toFixed(0)}%)`,
          });
        }

        // Check if content was left untranslated (identical to English)
        if (isUntranslated(translatedContent, englishContent)) {
          fileIssues.push({ type: 'untranslated', detail: 'body identical to English' });
        }
      } else {
        fileIssues.push({ type: 'orphaned', detail: 'no English source' });
      }

      if (fileIssues.length > 0) {
        issues.push({ locale, file: relFile, issues: fileIssues });
      }
    }
  }

  return issues;
}

function printTable(issues) {
  if (issues.length === 0) {
    console.log('\nNo translation issues found.');
    return;
  }

  // Group by issue type for summary
  const byCat = {};
  for (const entry of issues) {
    for (const iss of entry.issues) {
      byCat[iss.type] = (byCat[iss.type] || 0) + 1;
    }
  }

  console.log('\n=== Translation Audit Summary ===\n');
  for (const [type, count] of Object.entries(byCat).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${type.padEnd(16)} ${count}`);
  }
  console.log(`  ${'TOTAL'.padEnd(16)} ${issues.length} files with issues\n`);

  // Group by type then print details
  const types = ['hallucination', 'empty-body', 'truncated', 'bloated', 'untranslated', 'orphaned'];
  for (const type of types) {
    const matching = issues.filter(e => e.issues.some(i => i.type === type));
    if (matching.length === 0) continue;

    console.log(`--- ${type.toUpperCase()} (${matching.length}) ---`);
    for (const entry of matching) {
      const detail = entry.issues.find(i => i.type === type).detail;
      console.log(`  [${entry.locale}] ${entry.file}  —  ${detail}`);
    }
    console.log();
  }
}

const FIXABLE_TYPES = ['truncated', 'empty-body', 'hallucination', 'untranslated'];

function deleteFiles(issues, types = FIXABLE_TYPES) {
  const bad = issues.filter(e => e.issues.some(i => types.includes(i.type)));
  if (bad.length === 0) {
    console.log('No fixable files to delete.');
    return;
  }
  console.log(`\nDeleting ${bad.length} bad translation files...\n`);
  for (const entry of bad) {
    const fullPath = path.join(I18N_DIR, entry.locale, PLUGIN_SUBPATH, entry.file);
    fs.unlinkSync(fullPath);
    const tags = entry.issues.map(i => i.type).join(', ');
    console.log(`  deleted: [${entry.locale}] ${entry.file}  (${tags})`);
  }
  console.log('\nDone. Re-run the translator to regenerate these files.');
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const localeIdx = args.indexOf('--locales');
const localeFilter = localeIdx !== -1 ? args[localeIdx + 1] : null;
const fixTruncated = args.includes('--fix-truncated');
const fixBad = args.includes('--fix-bad');
const jsonOutput = args.includes('--json');

const issues = audit(localeFilter);

if (jsonOutput) {
  console.log(JSON.stringify(issues, null, 2));
} else {
  printTable(issues);
  if (fixBad) {
    deleteFiles(issues);
  } else if (fixTruncated) {
    deleteFiles(issues, ['truncated', 'empty-body']);
  }
}

process.exit(issues.length > 0 ? 1 : 0);
