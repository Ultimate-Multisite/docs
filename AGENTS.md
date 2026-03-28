# AGENTS.md — Ultimate Multisite Documentation

## Project Overview

Docusaurus 3 documentation site for the Ultimate Multisite WordPress plugin ecosystem. Deployed to ultimatemultisite.com/docs/ via GitHub Actions on push to `main`. Contains user guide, developer docs, and addon documentation across 40+ locales.

## Build & Dev Commands

```bash
npm install                                # Install dependencies
npm start                                  # Dev server at localhost:3000 (hot reload)
npm run build                              # Production build to /build/
npm run serve                              # Serve production build locally
npm run clear                              # Clear Docusaurus cache (.docusaurus/)
```

### Translation

```bash
node scripts/translate.js --locales es,fr       # Translate specific locales
node scripts/translate.js --locales all          # Translate all locales
node scripts/translate.js --locales fr --dry-run # Preview without writing
node scripts/translate.js --commit               # Auto-commit each translated file
```

Requires env vars: `OPENAI_API_KEY`, `OPENAI_API_BASE`, `OPENAI_MODEL`.

### Hooks Generation

```bash
bash scripts/generate-hooks.sh    # Requires PHP 8.3+ and plugin source checkouts
```

Generates hooks docs from PHP source into `docs/developer/hooks/` and `docs/addons/*/hooks/`.

## Project Structure

```
docs/
├── docs/                          # Documentation content (Markdown/MDX)
│   ├── user-guide/                # End-user documentation
│   ├── developer/                 # Hooks reference, REST API, integration guides
│   └── addons/                    # Addon-specific documentation (26+ addons)
├── i18n/                          # Translated content (auto-generated)
├── scripts/
│   ├── translate.js               # OpenAI-powered translation
│   └── generate-hooks.sh          # PHP hooks doc generator
├── src/
│   ├── components/AddonBanner.js  # React component for addon purchase links
│   └── css/custom.css             # Theme (primary: #678233, dark mode support)
├── static/                        # Static assets (images, favicon)
├── docusaurus.config.js           # Site config, i18n, navbar, footer
├── sidebars.js                    # Three independent sidebars
├── package.json
└── CLAUDE.md                      # Additional AI context (read for reference)
```

## Content Conventions

- All docs are Markdown or MDX in `docs/`
- Pages use YAML frontmatter: `title`, `sidebar_position`
- Docs route base path is `/` (not `/docs/`)
- Three sidebar sections: User Guide, Developer, Addons

## Code Style

- JavaScript/JSX follows standard Docusaurus patterns
- No ESLint config — follow existing conventions
- CSS uses custom properties in `src/css/custom.css`

## CI/CD

- **deploy-docs.yml**: On push to main — clones 26+ addon repos, generates hooks/changelogs, builds, deploys via rsync
- **translate.yml**: Manual trigger — runs AI translation

## Important Notes

- `ultimate-multisite/`, `addons/`, `wp-hooks-docs/`, `.hooks-tmp/` are cloned/generated at build time and gitignored — do not create manually
- English source lives in `docs/`, translations in `i18n/{locale}/`
- RTL languages configured in `docusaurus.config.js` `localeConfigs`
- Product name is "Ultimate Multisite" in all user-facing text
