#!/usr/bin/env node

const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');

const rootDir = process.cwd();
const docsDir = path.join(rootDir, 'docs');
const outputDir = path.join(rootDir, 'static', 'ai');
const docusaurusConfig = require(path.join(rootDir, 'docusaurus.config.js'));
const publicBaseUrl = new URL(docusaurusConfig.baseUrl, docusaurusConfig.url).href;

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

function parseDocument(content, filePath) {
  try {
    return matter(content);
  } catch (error) {
    throw new Error(`Failed to parse frontmatter in ${path.relative(rootDir, filePath)}: ${error.message}`);
  }
}

function extractFrontmatter(content, filePath) {
  return parseDocument(content, filePath).data || {};
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
  let content;

  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Failed to read docs source ${relativePath}: ${error.message}`);
  }

  const parsedDocument = parseDocument(content, filePath);
  const frontmatter = extractFrontmatter(content, filePath);
  const route = routeFor(relativePath);
  const url = publicUrlFor(route);

  return {
    id: `docs:${route || 'index'}`,
    path: relativePath,
    title: titleFor(content, frontmatter, relativePath),
    url,
    locale: 'en',
    metadata: {
      path: relativePath,
      slug: route,
      source: 'docusaurus',
      code_reference: isCodeReference(relativePath),
    },
    content: parsedDocument.content,
  };
}

function writeJsonl(filePath, records) {
  try {
    fs.writeFileSync(
      filePath,
      `${records.map((record) => JSON.stringify(record)).join('\n')}\n`,
      'utf8'
    );
  } catch (error) {
    throw new Error(`Failed to write manifest ${path.relative(rootDir, filePath)}: ${error.message}`);
  }
}

fs.mkdirSync(outputDir, {recursive: true});

const records = listMarkdownFiles(docsDir).map(recordFor);
const codeReferenceRecords = records.filter((record) => record.metadata.code_reference);

writeJsonl(docsManifestPath, records);
writeJsonl(codeManifestPath, codeReferenceRecords);

console.log(`Wrote ${records.length} docs records to ${path.relative(rootDir, docsManifestPath)}`);
console.log(`Wrote ${codeReferenceRecords.length} code-reference records to ${path.relative(rootDir, codeManifestPath)}`);
