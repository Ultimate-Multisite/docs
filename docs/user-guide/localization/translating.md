---
title: "Translating Ultimate Multisite"
sidebar_position: 19
---

# Translating Ultimate Multisite

Ultimate Multisite is developed in English, but the plugin is fully translatable and we actively welcome translation contributions.

## Core Plugin Translations

The core Ultimate Multisite plugin is translated through the official **WordPress.org translation platform**:

**[translate.wordpress.org/projects/wp-plugins/ultimate-multisite/](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)**

This is the standard WordPress community translation system. When translations reach a sufficient approval threshold, they are automatically distributed to all Ultimate Multisite users through WordPress plugin updates.

**We need your help!** If you speak a language other than English, please consider contributing translations. Even translating a few strings helps. To get started:

1. Visit [translate.wordpress.org](https://translate.wordpress.org/projects/wp-plugins/ultimate-multisite/)
2. Select your language
3. Click "Contribute Translation"
4. You'll need a free WordPress.org account

If you'd like to become a translation editor for your language (able to approve translations), reach out via [GitHub Discussions](https://github.com/Ultimate-Multisite/ultimate-multisite/discussions).

## Addon Translations

Addon plugins are translated separately at:

**[translate.ultimatemultisite.com](https://translate.ultimatemultisite.com/)**

The addon translations are currently AI-generated as a starting point. They cover all supported languages but may contain awkward phrasing or inaccuracies. We welcome human translators to review and suggest improvements to make them more natural and accurate.

## Server-Side Translation Packages

Gratis AI Translations Server can prepare translated plugin and theme packages from a central translation server instead of requiring every client site to translate strings locally.

The server-side workflow uses this order:

1. Import available human translations first, including approved translations from translate.wordpress.org for WordPress.org packages.
2. Identify strings that are still untranslated after the human import.
3. Queue only those remaining gaps for AI translation through the Superdav AI Service.
4. Require an administrator to manually approve queued jobs before processing.
5. Build and publish the translated package when the import and AI gap-filling steps finish.

This means community and other human translations are preserved whenever they exist. AI translation is used as a fallback for missing strings, and administrators keep control over when queued jobs are allowed to run.

When a package is complete, the requesting site can check its translation status and download the translated language package from the server.

## Local Translations

If you prefer to create translations locally for your own project rather than contributing upstream, there are two options:

### Using Poedit

You can use the desktop application **[Poedit](https://poedit.net)** to translate the `.pot` file:

1. Download Poedit from [poedit.net](https://poedit.net)
2. Open the `.pot` file from `wp-content/plugins/ultimate-multisite/lang/`
3. Translate the strings in the Poedit interface
4. Save -- Poedit generates `.po` and `.mo` files
5. Place the output files in the `lang` folder

### Using Loco Translate

The **[Loco Translate](https://wordpress.org/plugins/loco-translate/)** WordPress plugin lets you translate directly from the admin panel without any desktop tools. It handles creating and compiling translation files for you.
