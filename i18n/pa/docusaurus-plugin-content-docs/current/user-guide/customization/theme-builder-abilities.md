---
title: ਥੀਮ ਬਿਲਡਰ ਸਮਰੱਥਾਵਾਂ
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder ਦੀਆਂ ਸਮਰੱਥਾਵਾਂ: Scaffold ਅਤੇ Activate Block Themes

Superdav AI Agent v1.12.0 ਦੋ ਸ਼ਕਤੀਸ਼ਾਲੀ ਸਮਰੱਥਾਵਾਂ ਪੇਸ਼ ਕਰਦਾ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਚੈਟ ਇੰਟਰਫੇਸ ਤੋਂ ਸਿੱਧੇ ਕਸਟਮ ਬਲਾਕ تھیਮ ਬਣਾਉਣ ਅਤੇ ਲਾਗੂ ਕਰਨ (deploy) ਦੀ ਆਗਿਆ ਦਿੰਦੀਆਂ ਹਨ।

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ (Overview) {#overview}

**scaffold-block-theme** ਅਤੇ **activate-theme** ਸਮਰੱਥਾਵਾਂ 에ਜੰਟਾਂ ਨੂੰ ਇਹ ਕਰਨ ਦੇ ਯੋਗ ਬਣਾਉਂਦੀਆਂ ਹਨ:
- ਤੁਹਾਡੀਆਂ ਲੋੜਾਂ ਦੇ ਆਧਾਰ 'ਤੇ ਪੂਰੇ, ਵਰਤੋਂ ਲਈ ਤਿਆਰ ਬਲਾਕ تھیਮ ਬਣਾਉਣਾ
- ਹੱਥੀਂ ਦਖਲ ਦੇਣ ਤੋਂ ਬਿਨਾਂ ਤੁਹਾਡੀ ਸਾਈਟ 'ਤੇ تھیਮ ਨੂੰ ਆਪਣੇ ਆਪ ਐਕਟੀਵੇਟ ਕਰਨਾ
- ਗਾਈਡਡ ਡਿਜ਼ਾਈਨ ਫੈਸਲਿਆਂ ਰਾਹੀਂ ਇਕਸੁਰ ਵਿਜ਼ੂਅਲ ਪਛਾਣ (cohesive visual identities) ਬਣਾਉਣਾ

## Scaffold Block Theme {#scaffold-block-theme}

**scaffold-block-theme** ਸਮਰੱਥਾ ਇੱਕ ਨਵਾਂ WordPress ਬਲਾਕ تھیਮ ਬਣਾਉਂਦੀ ਹੈ ਜਿਸ ਵਿੱਚ ਪੂਰਾ تھیਮ ਢਾਂਚਾ (theme structure) ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਇਹ ਸ਼ਾਮਲ ਹਨ:

- ਡਿਜ਼ਾਈਨ ਟੋਕਨਾਂ ਨਾਲ `theme.json` ਕਨਫਿਗਰੇਸ਼ਨ
- ਆਮ ਲੇਆਉਟਾਂ ਲਈ ਬਲਾਕ ਟੈਂਪਲੇਟ ਫਾਈਲਾਂ
- ਕਸਟਮ ਬਲਾਕ ਸਟਾਈਲ ਅਤੇ ਵੇਰੀਏਸ਼ਨ
- تھیਮ ਮੈਟਾਡੇਟਾ ਅਤੇ ਸਪੋਰਟ ਡੈਕਲੇਰੇਸ਼ਨ

### ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ (How to Invoke) {#how-to-invoke}

Superdav AI Agent ਨਾਲ ਆਪਣੀ ਚੈਟ ਵਿੱਚ, ਤੁਸੀਂ تھیਮ ਬਣਾਉਣ ਲਈ ਬੇਨਤੀ ਕਰ ਸਕਦੇ ਹੋ:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

ਏਜੰਟ ਇਹ ਕਰੇਗਾ:
1. ਗੱਲਬਾਤ ਰਾਹੀਂ ਤੁਹਾਡੀਆਂ ਡਿਜ਼ਾਈਨ ਪਸੰਦਾਂ ਇਕੱਠੀਆਂ ਕਰੇਗਾ
2. ਪੂਰਾ تھیਮ ਢਾਂਚਾ ਬਣਾਏਗਾ
3. ਸਾਰੇ ਜ਼ਰੂਰੀ تھیਮ ਫਾਈਲਾਂ ਬਣਾਏਗਾ
4. ਐਕਟੀਵੇਸ਼ਨ ਲਈ تھیਮ ਤਿਆਰ ਕਰੇਗਾ

### ਉਮੀਦ ਕੀਤਾ ਗਿਆ ਆਉਟਪੁੱਟ (Expected Output) {#expected-output}

ਜਦੋਂ ਇਹ ਸਮਰੱਥਾ ਸਫਲਤਾਪੂਰਵਕ ਕੰਮ ਕਰੇਗੀ, ਤਾਂ ਤੁਹਾਨੂੰ ਇਹ ਦਿਖਾਈ ਦੇਵੇਗਾ:

- ਪੁਸ਼ਟੀ ਕਿ تھیਮ ਨੂੰ scaffold ਕਰ ਦਿੱਤਾ ਗਿਆ ਹੈ
- تھیਮ ਦਾ ਨਾਮ ਅਤੇ ਸਥਾਨ
- ਲਾਗੂ ਕੀਤੇ ਗਏ ਡਿਜ਼ਾਈਨ ਟੋਕਨਾਂ ਦਾ ਸਾਰਾਂਸ਼ (ਰੰਗ, ਟਾਈਪੋਗ੍ਰਾਫੀ, ফাঁਕੀ ਥਾਂ)
- ਐਕਟੀਵੇਟ ਕਰਨ ਲਈ ਤਿਆਰ ਸਥਿਤੀ

ਉਦਾਹਰਣ ਆਉਟਪੁੱਟ:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Theme Activate ਕਰਨਾ {#activate-theme}

**activate-theme** ਸਮਰੱਥਾ ਤੁਹਾਡੀ ਸਾਈਟ ਨੂੰ ਇੱਕ ਨਵੇਂ scaffold ਕੀਤੇ ਜਾਂ ਮੌਜੂਦਾ ਬਲਾਕ تھیਮ 'ਤੇ ਸਵਿੱਚ ਕਰਦੀ ਹੈ।

### ਕਿਵੇਂ ਵਰਤਣਾ ਹੈ (How to Invoke) {#how-to-invoke-1}

تھیਮ scaffold ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਇਸਨੂੰ ਤੁਰੰਤ ਐਕਟੀਵੇਟ ਕਰ ਸਕਦੇ ਹੋ:

```
"Activate the Modern Agency theme"
```

ਜਾਂ ਕੋਈ ਵੀ ਮੌਜੂਦਾ تھیਮ ਐਕਟੀਵੇਟ ਕਰ ਸਕਦੇ ਹੋ:

```
"Switch to the Twentytwentyfour theme"
```

### ਉਮੀਦ ਕੀਤਾ ਗਿਆ ਆਉਟਪੁੱਟ (Expected Output) {#expected-output-1}

ਜਦੋਂ ਐਕਟੀਵੇਸ਼ਨ ਸਫਲ ਹੁੰਦੀ ਹੈ:

- ਐਕਟਿਵ تھیਮ ਦੀ ਪੁਸ਼ਟੀ
- ਪਿਛਲਾ تھیਮ ਦਾ ਨਾਮ (ਸੰਦਰਭ ਲਈ)
- ਸਾਈਟ URL ਜਿੱਥੇ تھیਮ ਹੁਣ ਲਾਈਵ ਹੈ
- ਕੋਈ ਵੀ تھیਮ-ਵਿਸ਼ੇਸ਼ ਸੈਟਅਪ ਨੋਟਸ

ਉਦਾਹਰਣ ਆਉਟਪੁੱਟ:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## ਕੰਮਕਾਜ ਪ੍ਰਵਾਹ: Scaffold ਅਤੇ Activate {#workflow-scaffold-and-activate}

ਇੱਕ ਆਮ ਕੰਮਕਾਜ ਪ੍ਰਵਾਹ (workflow) ਦੋਵਾਂ ਸਮਰੱਥਾਵਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ:

1. **تھیਮ ਬਣਾਉਣ ਦੀ ਬੇਨਤੀ**: "ਮੇਰੇ SaaS ਲੈਂਡਿੰਗ ਪੇਜ ਲਈ ਇੱਕ ਬਲਾਕ تھیਮ ਬਣਾਓ"
2. **ਏਜੰਟ تھیਮ scaffold ਕਰਦਾ ਹੈ**: ਫਾਈਲਾਂ ਅਤੇ ਡਿਜ਼ਾਈਨ ਟੋਕਨ ਬਣਾਉਂਦਾ ਹੈ
3. **ਸਮੀਖਣ ਅਤੇ ਸੁਧਾਰ**: ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ ਡਿਜ਼ਾਈਨ ਬਦਲਾਅ ਬਾਰੇ ਚਰਚਾ ਕਰੋ
4. **ਐਕਟੀਵੇਟ ਕਰਨਾ**: "ਹੁਣ تھیਮ ਐਕਟੀਵੇਟ ਕਰੋ"
5. **ਜਾਂਚ ਕਰਨਾ**: ਨਵਾਂ ਡਿਜ਼ਾਈਨ ਲਾਈਵ ਹੈ কিনা ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਆਪਣੀ ਸਾਈਟ 'ਤੇ ਜਾਓ

## Design Tokens ਅਤੇ Customization {#design-tokens-and-customization}

Scaffold ਕੀਤੇ ਗਏ تھیਮ WordPress ਡਿਜ਼ਾਈਨ ਟੋਕਨ (theme.json ਰਾਹੀਂ) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius ਅਤੇ width tokens
- **Shadows**: Elevation levels

ਇਹ ਟੋਕਨ `theme.json` ਵਿੱਚ ਕੇਂਦ੍ਰਿਤ ਹੁੰਦੇ ਹਨ, ਜਿਸ ਨਾਲ ਇੱਕ ਫਾਈਲ ਤੋਂ ਹੀ ਤੁਹਾਡੀ ਪੂਰੀ ਡਿਜ਼ਾਈਨ ਸਿਸਟਮ ਨੂੰ 调整 ਕਰਨਾ ਆਸਾਨ ਹੋ ਜਾਂਦਾ ਹੈ।

## ਸੀਮਾਵਾਂ ਅਤੇ ਨੋਟਸ (Limitations and Notes) {#limitations-and-notes}

- تھیਮ `/wp-content/themes/` ਵਿੱਚ scaffold ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਅਤੇ WordPress ਨਾਮਕਰਨ ਕਨਵੈਨਸ਼ਨਾਂ ਦੀ ਪਾਲਣਾ ਕਰਨੀ ਚਾਹੀਦੀ ਹੈ
- ਐਕਟੀਵੇਸ਼ਨ ਲਈ ਤੁਹਾਡੀ WordPress ਸਾਈਟ 'ਤੇ ਸਹੀ ਅਧਿਕਾਰ (permissions) ਹੋਣੇ ਜ਼ਰੂਰੀ ਹਨ
- تھیਮਾਂ ਵਿੱਚ ਕਸਟਮ PHP ਕੋਡ ਘੱਟ ਹੁੰਦਾ ਹੈ; ਗੁੰਝਲਦਾਰ ਕਾਰਜਕੁਸ਼ਲਤਾ ਲਈ ਪਲੱਗਇਨ (plugins) ਦੀ ਵਰਤੋਂ ਕਰੋ
- ਬਲਾਕ تھیਮ WordPress 5.9 ਅਤੇ ਬਾਅਦ ਦੇ ਨਾਲ ਸਭ ਤੋਂ ਵਧੀਆ ਕੰਮ ਕਰਦੇ ਹਨ

## ਸਮੱਸਿਆ ਨਿਬੇੜੀ (Troubleshooting) {#troubleshooting}

**Scaffolding ਤੋਂ ਬਾਅਦ تھیਮ ਨਹੀਂ ਦਿਖਾਈ ਦੇ ਰਿਹਾ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ تھیਮ ਡਾਇਰੈਕਟਰੀ ਮੌਜੂਦ ਹੈ ਅਤੇ ਸਹੀ ਅਧਿਕਾਰ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ `theme.json` ਵੈਧ JSON ਹੈ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ تھیਮ ਦਾ ਨਾਮ ਮੌਜੂਦਾ تھیਮਾਂ ਨਾਲ ਟਕਰਾਅ ਨਹੀਂ ਕਰਦਾ

**Activation ਫੇਲ ਹੋ ਰਿਹਾ ਹੈ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਕੋਲ ਐਡਮਿਨਿਸਟਰੇਟਰ ਅਧਿਕਾਰ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ تھیਮ ਡਾਇਰੈਕਟਰੀ WordPress ਦੁਆਰਾ ਪੜ੍ਹਨਯੋਗ (readable) ਹੈ
- ਵੇਰਵਿਆਂ ਲਈ WordPress error logs ਦੀ ਸਮੀਖਿਆ ਕਰੋ

**Design tokens ਲਾਗੂ ਨਹੀਂ ਹੋ ਰਹੇ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ `theme.json` syntax ਸਹੀ ਹੈ
- ਕੋਈ ਵੀ ਕੈਸ਼ਿੰਗ ਪਲੱਗਇਨ (caching plugins) ਸਾਫ਼ ਕਰੋ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡਾ WordPress ਵਰਜ਼ਨ ਉਨ੍ਹਾਂ ਟੋਕਨਾਂ ਨੂੰ ਸਪੋਰਟ ਕਰਦਾ ਹੈ ਜੋ ਤੁਸੀਂ ਵਰਤ ਰਹੇ ਹੋ

## ਅਗਲੇ ਕਦਮ (Next Steps) {#next-steps}

ਆਪਣਾ تھیਮ ਐਕਟੀਵੇਟ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਇਹ ਕਰ ਸਕਦੇ ਹੋ:
- ਟਾਈਪੋਗ੍ਰਾਫੀ, ਰੰਗਾਂ ਅਤੇ ফাঁਕੀ ਥਾਂ ਨੂੰ ਸੁਧਾਰਨ ਲਈ **Design System Aesthetics skill** ਦੀ ਵਰਤੋਂ ਕਰੋ
- WordPress block editor ਰਾਹੀਂ ਵਿਅਕਤੀਗਤ ਬਲਾਕ ਸਟਾਈਲਾਂ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ
- تھیਮ ਦੀ `style.css` ਫਾਈਲ ਵਿੱਚ ਕਸਟਮ CSS ਜੋੜੋ
- ਖਾਸ ਪੇਜ ਕਿਸਮਾਂ ਲਈ ਕਸਟਮ ਬਲਾਕ ਟੈਂਪਲੇਟ ਬਣਾਓ
