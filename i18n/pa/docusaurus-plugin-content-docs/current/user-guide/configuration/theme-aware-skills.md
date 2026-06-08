---
title: ਥੀਮ-ਜਾਗਰੂਕ ਹੁਨਰ
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills

Superdav AI Agent v1.10.0 ਚਾਰ ਨਵੇਂ theme-aware ਬਿਲਟ-ਇਨ ਸਕਿੱਲਜ਼ ਨਾਲ ਆਇਆ ਹੈ ਜੋ ਆਪਣੇ ਆਪ ਤੁਹਾਡੇ ਸਰਗਰਮ WordPress theme ਦੇ ਅਨੁਕੂਲ ਹੋ ਜਾਂਦੇ ਹਨ। ਇਹ ਸਕਿੱਲਜ਼ ਤੁਹਾਡੇ theme ਦੇ ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਫੀਚਰਾਂ ਦੇ ਅਨੁਸਾਰ ਵਿਸ਼ੇਸ਼ ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਸਮਰੱਥਾ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।

## Theme-Aware Skills ਕੀ ਹਨ?

Theme-aware skills ਪਹਿਲਾਂ ਤੋਂ ਸੈੱਟ ਕੀਤੇ ਗਏ ਗਿਆਨ ਦੇ ਭੰਡਾਰ (knowledge bases) ਅਤੇ ਟੂਲ ਸੈੱਟ ਹਨ ਜੋ AI ਅਸਿਸਟੈਂਟ ਆਪਣੇ ਸਾਈਟ 'ਤੇ ਵਰਤ ਰਹੇ WordPress theme ਦੇ ਆਧਾਰ 'ਤੇ ਆਪਣੇ ਆਪ ਚੁਣਦਾ ਹੈ। ਜਦੋਂ ਤੁਸੀਂ themes ਬਦਲਦੇ ਹੋ, ਤਾਂ ਅਸਿਸਟੈਂਟ ਦੀਆਂ ਉਪਲਬਧ ਸਕਿੱਲਜ਼ ਆਪਣੇ ਆਪ ਅਪਡੇਟ ਹੋ ਜਾਂਦੀਆਂ ਹਨ — ਕਿਸੇ ਹੱਥੀਂ ਸੈਟਅਪ ਦੀ ਲੋੜ ਨਹੀਂ।

ਹਰੇਕ ਸਕਿੱਲ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:

- **Theme-specific documentation** — theme ਦੀ ਵਰਤੋਂ ਕਰਨ ਅਤੇ ਇਸਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ
- **Block and pattern references** — ਉਪਲਬਧ ਬਲਾਕ, ਪੈਟਰਨ, ਅਤੇ ਡਿਜ਼ਾਈਨ ਵਿਕਲਪ
- **Customization examples** — ਆਮ ਕੰਮਾਂ ਲਈ ਕੋਡ ਨਿਪਟਾਰੇ (snippets) ਅਤੇ ਕਨਫਿਗਰੇਸ਼ਨ ਪੈਟਰਨ
- **Best practices** — theme ਦੇ ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਕੰਮਕਾਫੀ (workflow) ਲਈ ਸਿਫ਼ਾਰਸ਼ਾਂ

## ਉਪਲਬਧ Theme-Aware Skills

### Block Themes

**ਕਿਸ ਲਈ ਲਾਗੂ:** ਉਹ themes ਜੋ WordPress block-based (Full Site Editing) ਆਰਕੀਟੈਕਚਰ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ।

Block Themes ਸਕਿੱਲ ਇਸ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:

- ਬਲਾਕ ਐਡੀਟਰ ਦੀ ਵਰਤੋਂ ਕਰਕੇ templates ਬਣਾਉਣਾ ਅਤੇ এডিট ਕਰਨਾ
- ਬਲਾਕ ਪੈਟਰਨਾਂ ਅਤੇ ਰੀਯੂਜ਼ੇਬਲ ਬਲਾਕਾਂ ਨਾਲ ਕੰਮ ਕਰਨਾ
- ਗਲੋਬਲ ਸਟਾਈਲਜ਼ ਅਤੇ theme.json ਸੈਟਿੰਗਾਂ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨਾ
- theme blocks ਅਤੇ variations ਦੀ ਵਰਤੋਂ ਕਰਨਾ
- ਆਪਣੀ ਸਾਈਟ ਲਈ ਕਸਟਮ ਬਲਾਕ ਪੈਟਰਨ ਬਣਾਉਣਾ

**ਆਟੋਮੈਟਿਕਲੀ ਐਕਟੀਵੇਟ ਹੋਵੇਗਾ ਜਦੋਂ:** ਤੁਹਾਡਾ ਸਰਗਰਮ theme ਇੱਕ block theme ਹੋਵੇ (ਜੋ `block-templates` ਫੀਚਰ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ)।

### Classic Themes

**ਕਿਸ ਲਈ ਲਾਗੂ:** ਰਵਾਇਤੀ WordPress themes ਜੋ PHP templates ਅਤੇ classic editor ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ।

Classic Themes ਸਕਿੱਲ ਇਸ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:

- PHP template files ਅਤੇ hooks ਨਾਲ ਕੰਮ ਕਰਨਾ
- Customizer ਰਾਹੀਂ theme ਦੀ ਦਿੱਖ (appearance) ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨਾ
- widget areas ਅਤੇ sidebars ਦੀ ਵਰਤੋਂ ਕਰਨਾ
- CSS ਨੂੰ ਮੋਡੀਫਾਈ ਕਰਨਾ ਅਤੇ child theme development
- theme hierarchy ਅਤੇ template tags ਨੂੰ ਸਮਝਣਾ

**ਆਟੋਮੈਟਿਕਲੀ ਐਕਟੀਵੇਟ ਹੋਵੇਗਾ ਜਦੋਂ:** ਤੁਹਾਡਾ ਸਰਗਰਮ theme ਇੱਕ classic (non-block) theme ਹੋਵੇ।

### Kadence Blocks

**ਕਿਸ ਲਈ ਲਾਗੂ:** ਉਹ ਸਾਈਟ ਜੋ ਐਡਵਾਂਸਡ block-based ਡਿਜ਼ਾਈਨ ਲਈ Kadence Blocks plugin ਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ।

Kadence Blocks ਸਕਿੱਲ ਇਸ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:

- Kadence ਦੀ ਐਡਵਾਂਸਡ block ਲਾਇਬ੍ਰੇਰੀ ਦੀ ਵਰਤੋਂ ਕਰਨਾ (Hero, Testimonials, Pricing, ਆਦਿ)
- Kadence block settings ਅਤੇ responsive options ਨੂੰ ਕਨਫਿਗਰ ਕਰਨਾ
- Kadence ਦੇ grid ਅਤੇ container blocks ਨਾਲ ਕਸਟਮ ਲੇਆਉਟ ਬਣਾਉਣਾ
- ਆਪਣੇ theme ਨਾਲ Kadence blocks ਨੂੰ ਇੰਟੀਗੇਟ ਕਰਨਾ
- Kadence ਦੇ design system ਅਤੇ presets ਦਾ ਲਾਭ ਲੈਣਾ

**ਆਟੋਮੈਟਿਕਲੀ ਐਕਟੀਵੇਟ ਹੋਵੇਗਾ ਜਦੋਂ:** Kadence Blocks plugin ਤੁਹਾਡੀ ਸਾਈਟ 'ਤੇ ਐਕਟੀਵੇਟ ਹੋਵੇ।

### Kadence Theme

**ਕਿਸ ਲਈ ਲਾਗੂ:** ਉਹ ਸਾਈਟ ਜੋ block-based ਡਿਜ਼ਾਈਨ ਅਤੇ ਕਸਟਮਾਈਜ਼ੇਸ਼ਨ ਲਈ Kadence theme ਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ।

Kadence Theme ਸਕਿੱਲ ਇਸ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:

- ਗਲੋਬਲ ਸਟਾਈਲਜ਼ ਅਤੇ theme.json ਰਾਹੀਂ Kadence theme ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰਨਾ
- Kadence ਦੇ ਬਿਲਟ-ਇਨ block patterns ਅਤੇ templates ਦੀ ਵਰਤੋਂ ਕਰਨਾ
- Kadence theme settings ਅਤੇ options ਨੂੰ ਕਨਫਿਗਰ ਕਰਨਾ
- Kadence ਦੇ design system ਨਾਲ ਕਸਟਮ ਡਿਜ਼ਾਈਨ ਬਣਾਉਣਾ
- Kadence ਨੂੰ ਪ੍ਰਸਿੱਧ plugins ਅਤੇ ਟੂਲ ਨਾਲ ਇੰਟੀਗੇਟ ਕਰਨਾ

**ਆਟੋਮੈਟਿਕਲੀ ਐਕਟੀਵੇਟ ਹੋਵੇਗਾ ਜਦੋਂ:** Kadence theme ਤੁਹਾਡਾ ਸਰਗਰਮ theme ਹੋਵੇ।

## Skills ਕਿਵੇਂ ਚੁਣੇ ਜਾਂਦੇ ਹਨ

ਅਸਿਸਟੈਂਟ ਹਰ ਮੈਸੇਜ 'ਤੇ ਤੁਹਾਡੇ ਸਰਗਰਮ theme ਅਤੇ ਇੰਸਟਾਲ ਕੀਤੇ plugins ਦਾ ਆਪਣੇ ਆਪ ਪਤਾ ਲਗਾਉਂਦਾ ਹੈ। ਜੇ ਕੋਈ ਮੇਲ ਖਾਂਸ਼ theme-aware skill ਉਪਲਬਧ ਹੈ, ਤਾਂ ਇਹ ਆਪਣੇ ਆਪ ਅਸਿਸਟੈਂਟ ਦੇ context ਵਿੱਚ ਲੋਡ ਹੋ ਜਾਂਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਸਕਿੱਲ ਨੂੰ ਹੱਥੀਂ ਐਨੇਬਲ ਜਾਂ ਸਵਿੱਚ ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।

### Multiple Skills

ਜੇ ਤੁਹਾਡੀ ਸਾਈਟ ਲਈ ਕਈ ਸਕਿੱਲਜ਼ ਲਾਗੂ ਹੁੰਦੀਆਂ ਹਨ (ਉਦਾਹਰਨ ਲਈ, ਜੇ ਤੁਹਾਡੇ ਕੋਲ Kadence Blocks ਅਤੇ Kadence Theme ਦੋਵੇਂ ਐਕਟੀਵੇਟ ਹਨ), ਤਾਂ ਅਸਿਸਟੈਂਟ ਨੂੰ ਸਾਰੀਆਂ ਲਾਗੂ ਹੋਣ ਵਾਲੀਆਂ ਸਕਿੱਲਜ਼ ਤੱਕ ਪਹੁੰਚ ਮਿਲਦੀ ਹੈ ਅਤੇ ਇਹ ਹਰੇਕ ਤੋਂ ਮਾਰਗਦਰਸ਼ਨ ਦਾ ਹਵਾਲਾ ਦੇ ਸਕਦਾ ਹੈ।

### Switching Themes

ਜਦੋਂ ਤੁਸੀਂ ਆਪਣਾ ਸਰਗਰਮ theme ਬਦਲਦੇ ਹੋ, ਤਾਂ ਅਸਿਸਟੈਂਟ ਦੀਆਂ ਉਪਲਬਧ ਸਕਿੱਲਜ਼ ਅਗਲੇ ਮੈਸੇਜ 'ਤੇ ਆਪਣੇ ਆਪ ਅਪਡੇਟ ਹੋ ਜਾਂਦੀਆਂ ਹਨ। ਉਦਾਹਰਨ ਲਈ:

1. ਤੁਸੀਂ **Block Themes** ਸਕਿੱਲ ਐਕਟੀਵੇਟ ਨਾਲ ਇੱਕ block theme ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ।
2. ਤੁਸੀਂ ਇੱਕ classic theme 'ਤੇ ਸਵਿੱਚ ਕਰਦੇ ਹੋ।
3. ਤੁਹਾਡੇ ਅਗਲੇ ਮੈਸੇਜ 'ਤੇ, **Classic Themes** ਸਕਿੱਲ ਆਪਣੇ ਆਪ ਲੋਡ ਹੋ ਜਾਂਦਾ ਹੈ, ਅਤੇ **Block Themes** ਸਕਿੱਲ ਹੁਣ ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦਾ।

## Theme-Aware Skills ਦੀ ਵਰਤੋਂ ਕਰਨਾ

theme-aware skill ਦਾ ਲਾਭ ਲੈਣ ਲਈ, ਸਿਰਫ਼ ਚੈਟ ਇੰਟਰਫੇਸ ਵਿੱਚ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਕੀ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ। ਅਸਿਸਟੈਂਟ ਆਪਣੇ ਆਪ ਸਹੀ ਸਕਿੱਲ ਦੇ ਮਾਰਗਦਰਸ਼ਨ ਦਾ ਹਵਾਲਾ ਦੇਵੇਗਾ।

### Example Prompts

**Block Themes ਲਈ:**
> "block patterns ਦੀ ਵਰਤੋਂ ਕਰਕੇ background image ਅਤੇ centered text ਨਾਲ ਇੱਕ hero section ਬਣਾਓ।"

**Classic Themes ਲਈ:**
> "child theme ਦੀ ਵਰਤੋਂ ਕਰਕੇ sidebar ਵਿੱਚ ਇੱਕ custom widget area ਜੋੜੋ।"

**Kadence Blocks ਲਈ:**
> "Kadence Testimonials block ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ testimonials section ਬਣਾਓ।"

**Kadence Theme ਲਈ:**
> "header layout ਅਤੇ navigation menu styling ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ।"

ਅਸਿਸਟੈਂਟ ਤੁਹਾਡੇ ਸਰਗਰਮ theme ਅਤੇ plugins ਦੇ ਅਨੁਸਾਰ theme-specific ਮਾਰਗਦਰਸ਼ਨ ਅਤੇ ਕੋਡ ਉਦਾਹਰਨ ਪ੍ਰਦਾਨ ਕਰੇਗਾ।

:::note
Theme-aware skills Superdav AI Agent v1.10.0 ਅਤੇ ਬਾਅਦ ਦੇ ਸੰਸਕਰਣਾਂ ਵਿੱਚ ਆਪਣੇ ਆਪ ਉਪਲਬਧ ਹਨ। ਕੋਈ ਵਾਧੂ ਸੈੱਟਅਪ ਜਾਂ ਕਨਫਿਗਰੇਸ਼ਨ ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।
:::
