---
title: ਬਦਲਾਅ ਸੂਚੀ
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — ਜਾਰੀ ਕੀਤਾ ਗਿਆ 2026-05-20

### ਨਵਾਂ (New)

- **Generate Logo SVG ability** — Theme Builder ਹੁਣ ਨਾਮ-ਸਪੇਸ ਸੁਰੱਖਿਅਤ ਸੈਨੀਟਾਈਜ਼ੇਸ਼ਨ ਨਾਲ ਕਸਟਮ ਲੋਗੋ SVG ਤਿਆਰ ਕਰ ਸਕਦਾ ਹੈ ਅਤੇ ਐਮਬੈਡ ਕਰ ਸਕਦਾ ਹੈ
- **Photo upload in discovery interview** — Theme Builder discovery interview ਵਿੱਚ ਹੁਣ ਵਧੇਰੇ ਵਿਸਤ੍ਰਿਤ ਡਿਜ਼ਾਈਨ ਕੰਟੈਕਸਟ ਲਈ ਫੋਟੋ ਅਪਲੋਡ ਕਰਨ ਦਾ ਕਦਮ ਸ਼ਾਮਲ ਹੈ
- **Validate Palette Contrast ability** — ਕਿਸੇ ਵੀ تھیਮ 'ਤੇ ਲਾਗੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ WCAG ਪਾਲਣਾ ਲਈ ਕਲਰ ਪੇਅਰਾਂ ਦੀ ਜਾਂਚ ਕਰੋ
- **Hospitality menus** — Theme Builder ਹੁਣ ਹੋਸਟੈਲਿਟੀ ਕਾਰੋਬਾਰਾਂ ਲਈ ਢਾਂਚਾਗਤ ਫੂਡ ਅਤੇ ਬੇਵਰੇਜ ਮੀਨੂ ਪੇਜ ਤਿਆਰ ਕਰ ਸਕਦਾ ਹੈ
- **Desktop and mobile preview rendering** — ਡਿਜ਼ਾਈਨ-ਡਾਇਰੈਕਸ਼ਨ ਚੁਣਦੇ ਸਮੇਂ ਡੈਸਕਟਾਪ ਅਤੇ ਮੋਬਾਈਲ ਡਿਵਾਈਸਾਂ 'ਤੇ ਆਪਣੇ ਡਿਜ਼ਾਈਨ ਦਾ ਪੂਰਵ-ਦਰਸ਼ਨ ਕਰੋ
- **Navigation label parameter** — Create Menu ability ਹੁਣ ਪੇਜ ਟਾਈਟਲ ਤੋਂ ਵੱਖਰਾ ਇੱਕ ਵੱਖਰਾ `navigation_label` ਸਹਾਰਾ ਦਿੰਦਾ ਹੈ
- **Tier 1 tool availability** — sd-ai-agent/site-scrape ਹੁਣ Theme Builder ਵਿੱਚ ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ ਉਪਲਬਧ ਇੱਕ Tier 1 ਟੂਲ ਹੈ

### ਸੁਧਾਰਿਆ ਗਿਆ (Fixed)

- **AI Client cache** — ਹੁਣ cross-request persistence ਲਈ transients ਦੁਆਰਾ ਸਪੋਰਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਲੰਬੇ ਚੱਲਣ ਵਾਲੇ agent ਕੰਮਾਂ 'ਤੇ ਡਾਟਾ ਗੁਆਚਣ ਤੋਂ ਰੋਕਿਆ ਜਾਂਦਾ ਹੈ
- **Plugin row action links** — ਸਪਸ਼ਟਤਾ ਲਈ ਸੁਧਾਰਿਆ ਅਤੇ ਨਾਮ ਬਦਲਿਆ ਗਿਆ

## 1.10.0 — ਜਾਰੀ ਕੀਤਾ ਗਿਆ 2026-05-05

### ਨਵਾਂ (New)

- **Tavily internet search** — Brave Search ਦੇ ਨਾਲ ਵਧੇਰੇ ਵਿਸਤ੍ਰਿਤ ਇੰਟਰਨੈਟ ਸਰਚ ਰਿਜ਼ਲਟਸ ਲਈ Tavily ਨੂੰ ਇੱਕ ਸਰਚ ਪ੍ਰੋਵਾਈਡਰ ਵਜੋਂ ਜੋੜੋ
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, ਅਤੇ Kadence Theme skill guides ਹੁਣ ਪਲੱਗਇਨ ਨਾਲ ਆਉਂਦੇ ਹਨ
- **Site builder contact form ability** — ਚੈਟ ਇੰਟਰਫੇਸ ਤੋਂ ਸਿੱਧੇ ਕਿਸੇ ਵੀ ਪੇਜ 'ਤੇ ਇੱਕ ਕੰਟੈਕਟ ਫਾਰਮ ਜੋੜੋ

### ਸੁਧਾਰਿਆ ਗਿਆ (Improved)

- **WooCommerce integration refactored** — ਹੁਣ ਵਧੇਰੇ ਭਰੋਸੇਯੋਗਤਾ ਅਤੇ ਅਨੁਕੂਲਤਾ ਲਈ native WooCommerce APIs ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ
- **Provider list refreshes automatically** — ਜਦੋਂ ਕੋਈ ਵੀ ਪਲੱਗਇਨ ਐਕਟੀਵੇਟ ਜਾਂ ਡੀਐਕਟੀਵੇਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ

### ਸੁਧਾਰਿਆ (Fixed)

- **navigate-to ability** — ਕੁਝ ਐਡਮਿਨ ਪੇਜਾਂ 'ਤੇ ਅਨੰਤ ਰੀਲੋਡ ਲੂਪ (infinite reload loop) ਨੂੰ ਠੀਕ ਕੀਤਾ ਗਿਆ
- **list-posts ability** — ਹੁਣ ਕੈਟਾਗਰੀ ਅਤੇ ਟੈਗ ਨਾਮਾਂ ਨੂੰ ਸਹੀ ਤਰ੍ਹਾਂ ਸਲੱਗਾਂ (slugs) ਵਿੱਚ ਰੋਲਵਰਸ ਕਰਦਾ ਹੈ
- **WP-CLI commands** — ਪਿਛਲੇ ਰੀਫੈਕਟਰ ਤੋਂ ਗਾਇਬ ਹੋਏ ਨਾਮ-ਸਪੇਸ ਨਾਮਾਂ (namespace aliases) ਨੂੰ ਬਹਾਲ ਕੀਤਾ ਗਿਆ
- **Event automation** — ਸਾਈਟਾਂ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਭਾਲਦਾ ਹੈ ਜਿੱਥੇ automation tables ਅਜੇ ਨਹੀਂ ਬਣੇ ਹੋਏ ਹਨ
- **memory-save ability** — ਹੁਣ ਸਿਸਟਮ ਇੰਸਟ੍ਰਕਸ਼ਨ ਬਿਲਡਰ ਵਿੱਚ ਸਹੀ ਨਾਮ-ਸਪੇਸ ਪ੍ਰੀਫਿਕਸ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ
- **Scalar tool results** — ਹੁਣ AI ਨੂੰ ਵਾਪਸ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਸਹੀ ਢੰਗ ਨਾਲ ਵ੍ਰੈਪ (wrapped) ਕੀਤਾ ਜਾਂਦਾ ਹੈ
- **Usage statistics** — ਹੁਣ ਪੁਰਾਣੇ ਵਰਜ਼ਨਾਂ ਤੋਂ ਅਪਗ੍ਰੇਡ ਕਰਦੇ ਸਮੇਂ legacy ability key format ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸੰਭਾਲਦਾ ਹੈ
