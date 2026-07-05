# Ultimate Multisite Documentation

Source for the [Ultimate Multisite documentation site](https://ultimatemultisite.com/docs/).

Built with [Docusaurus](https://docusaurus.io/) and deployed automatically on push to `main`.

## Structure

- `docs/` - Documentation content (Markdown/MDX)
  - `docs/user-guide/` - End-user documentation
  - `docs/developer/` - Developer docs, hooks reference, REST API
  - `docs/addons/` - Addon-specific documentation
- `i18n/` - Translated content (auto-generated)
- `scripts/` - Build and translation tooling
- `src/` - Custom Docusaurus components and pages
- `static/` - Static assets (images, favicon)

## Development

```bash
npm install
npm start        # Local dev server at localhost:3000
npm run build    # Production build
```

## Translation

Documentation is translated using the Superdav AI Service through the existing OpenAI-compatible API path. The default cloud model is `superdav-chat-pro`; Ollama and other local-model options remain available through `scripts/translate.js` provider flags for local experiments.

Translations are generated via a GitHub Actions workflow:

```bash
# Trigger translation for all configured locales
gh workflow run translate.yml

# Translate specific languages
gh workflow run translate.yml -f languages=es,fr

# Force re-translation of all files
gh workflow run translate.yml -f force=true
```

By default, the translator preserves existing files whose `_i18n_hash` matches the current English source. Missing, stale, or hash-less translations are regenerated; use `force=true` only when every translation should be replaced.

### Required secrets

| Secret | Description |
|--------|-------------|
| `OPENAI_API_KEY` | Docs-specific Superdav site token for translation. Store only in GitHub Secrets; never commit or print the token. |

### Optional variables

| Variable or secret | Description |
|--------------------|-------------|
| `OPENAI_API_BASE` | API base URL. Defaults to `https://api.sdaiagent.com/v1`; either the repository variable or secret can override it. |
| `OPENAI_MODEL` | Translation model. Defaults to `superdav-chat-pro`; either the repository variable or secret can override it. |

### Local smoke test

Use placeholders for local testing; do not paste real tokens into logs or commits:

```bash
OPENAI_API_BASE=https://api.sdaiagent.com/v1 \
OPENAI_API_KEY=<docs-site-token> \
OPENAI_MODEL=superdav-chat-pro \
node scripts/translate.js --locales es --files <docs-relative-file> --dry-run
```

To keep using local models, pass the local provider explicitly:

```bash
node scripts/translate.js --provider ollama-native --base-url http://localhost:11434 --model translategemma:27b --locales es
```

## Deployment

Pushes to `main` trigger the Deploy Documentation workflow, which builds the site and deploys via rsync.
