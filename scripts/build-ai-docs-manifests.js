#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const docsDir = path.join(rootDir, 'docs');
const outputDir = path.join(rootDir, 'static', 'ai');
const publicBaseUrl = 'https://ultimatemultisite.com/docs/';

const docsManifestPath = path.join(outputDir, 'ums-docs-manifest.jsonl');
const codeManifestPath = path.join(outputDir, 'ums-code-reference-manifest.jsonl');
const markdownExtensions = new Set(['.md', '.mdx']);

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, {withFileTypes: true});
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
      continue;
    }

    if (entry.isFile() && markdownExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function extractFrontmatter(content) {
  if (!content.startsWith('---\n')) {
    return {};
  }

  const end = content.indexOf('\n---\n', 4);
  if (end === -1) {
    return {};
  }

  const metadata = {};
  const lines = content.slice(4, end).split('\n');
  for (const line of lines) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) {
      continue;
    }

    const value = match[2].trim().replace(/^['"]|['"]$/g, '');
    metadata[match[1]] = value;
  }

  return metadata;
}

function routeFor(relativePath) {
  let route = relativePath.replace(/\\/g, '/').replace(/\.(md|mdx)$/i, '');

  if (route.endsWith('/index')) {
    route = route.slice(0, -'/index'.length);
  } else if (route === 'index') {
    route = '';
  }

  return route;
}

function publicUrlFor(route) {
  return route ? `${publicBaseUrl}${route}` : publicBaseUrl;
}

function titleFor(content, frontmatter, relativePath) {
  if (frontmatter.title) {
    return frontmatter.title;
  }

  const heading = content.match(/^#\s+(.+)$/m);
  if (heading) {
    return heading[1].trim();
  }

  return path.basename(relativePath, path.extname(relativePath));
}

function isCodeReference(relativePath) {
  const normalized = relativePath.replace(/\\/g, '/');

  return (
    normalized.startsWith('developer/') ||
    normalized.startsWith('addons/superdav-ai-agent/') ||
    normalized.startsWith('addons/gratis-ai-agent/') ||
    /\/hooks\//.test(normalized)
  );
}

function recordFor(filePath) {
  const relativePath = path.relative(docsDir, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatter = extractFrontmatter(content);
  const route = routeFor(relativePath);

  return {
    id: `docs:${route || 'index'}`,
    path: relativePath,
    title: titleFor(content, frontmatter, relativePath),
    route: publicUrlFor(route),
    url: publicUrlFor(route),
    locale: 'en',
    metadata: {
      path: relativePath,
      route,
      source: 'docusaurus',
      code_reference: isCodeReference(relativePath),
    },
    content,
  };
}

function writeJsonl(filePath, records) {
  fs.writeFileSync(
    filePath,
    `${records.map((record) => JSON.stringify(record)).join('\n')}\n`,
    'utf8'
  );
}

fs.mkdirSync(outputDir, {recursive: true});

const records = listMarkdownFiles(docsDir).map(recordFor);
const codeReferenceRecords = records.filter((record) => record.metadata.code_reference);

writeJsonl(docsManifestPath, records);
writeJsonl(codeManifestPath, codeReferenceRecords);

console.log(`Wrote ${records.length} docs records to ${path.relative(rootDir, docsManifestPath)}`);
console.log(`Wrote ${codeReferenceRecords.length} code-reference records to ${path.relative(rootDir, codeManifestPath)}`);
