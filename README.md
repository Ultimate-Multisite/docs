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

Documentation is translated using an OpenAI-compatible API. Translations are generated via a GitHub Actions workflow:

```bash
# Trigger translation for all configured locales
gh workflow run translate.yml

# Translate specific languages
gh workflow run translate.yml -f languages=es,fr

# Force re-translation of all files
gh workflow run translate.yml -f force=true
```

### Required secrets

| Secret | Description |
|--------|-------------|
| `OPENAI_API_KEY` | API key for the translation model |
| `OPENAI_API_BASE` | Base URL for the API (e.g. `https://api.openai.com/v1`) |
| `OPENAI_MODEL` | Model to use (e.g. `gpt-4o-mini`) |

## Deployment

Pushes to `main` trigger the Deploy Documentation workflow, which builds the site and deploys via rsync.
