---
title: ਪਲੱਗਇਨ ਬਿਲਡਰ ਅਤੇ ਸੈਂਡਬਾਕਸ
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder ਅਤੇ Sandbox

Gratis AI Agent v1.5.0 ਵਿੱਚ **Plugin Builder & Sandbox System** ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ ਹੈ, ਜੋ AI assistant ਨੂੰ ਤੁਹਾਡੇ network 'ਤੇ WordPress plugins ਬਣਾਉਣ, activate ਕਰਨ ਅਤੇ manage ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ — ਇਹ ਸਭ ਇੱਕ ਸੁਰੱਖਿਅਤ, isolated sandbox environment ਰਾਹੀਂ ਹੁੰਦਾ ਹੈ।

## Overview {#overview}

Plugin Builder AI assistant ਨੂੰ natural language requests ਦੇ ਜਵਾਬ ਵਿੱਚ custom WordPress plugins ਲਿਖਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦਾ ਹੈ। ਬਣਾਏ ਗਏ plugins ਨੂੰ live site functionality 'ਤੇ ਕੋਈ ਅਸਰ ਪਾਉਣ ਤੋਂ ਪਹਿਲਾਂ, ਉਹ validate ਕੀਤੇ ਜਾਂਦੇ ਹਨ, store ਕੀਤੇ ਜਾਂਦੇ ਹਨ, ਅਤੇ ਇੱਕ sandbox layer ਦੇ ਅੰਦਰ activate ਕੀਤੇ ਜਾਂਦੇ ਹਨ।

ਇਸ ਦੇ ਉਪਯੋਗ (Use cases) ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:

- Developer ਦੀ ਮਦਦ ਤੋਂ ਬਿਨਾਂ lightweight utility plugins ਬਣਾਉਣਾ।
- Features ਦਾ Prototyping ਕਰਨਾ ਜਿਨ੍ਹਾਂ ਲਈ WordPress hooks ਜਾਂ custom post types ਦੀ ਲੋੜ ਹੋਵੇ।
- Batch operations ਲਈ short-lived automation scripts ਬਣਾਉਣਾ।

## AI ਰਾਹੀਂ Plugin ਬਣਾਉਣਾ (Generating a Plugin via AI) {#generating-a-plugin-via-ai}

ਇੱਕ plugin ਬਣਾਉਣ ਲਈ, Gratis AI Agent chat interface ਖੋਲ੍ਹੋ ਅਤੇ ਦੱਸੋ ਕਿ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ। ਉਦਾਹਰਨ ਲਈ:

> "ਇੱਕ plugin ਬਣਾਓ ਜੋ dashboard 'ਤੇ ਇੱਕ custom admin notice ਜੋੜਦਾ ਹੈ।"

AI ਇਹ ਕਰੇਗਾ:

1. structured code generation ਦੀ ਵਰਤੋਂ ਕਰਕੇ plugin ਦਾ PHP code ਤਿਆਰ ਕਰੇਗਾ।
2. syntax errors ਅਤੇ unsafe patterns ਲਈ output ਨੂੰ validate ਕਰੇਗਾ।
3. ਬਣਾਏ ਗਏ plugin ਨੂੰ sandbox store ਵਿੱਚ save ਕਰੇਗਾ।
4. plugin slug ਅਤੇ ਇੱਕ **Activate in Sandbox** ਬਟਨ ਨਾਲ ਇੱਕ confirmation ਦੇ ਨਾਲ ਵਾਪਸ ਕਰੇਗਾ।

activate ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਸੀਂ ਉਸੇ conversation thread ਵਿੱਚ follow-up ਕਰਕੇ ਨਤੀਜੇ ਨੂੰ refine ਕਰ ਸਕਦੇ ਹੋ।

## Sandbox Activation {#sandbox-activation}

sandbox ਵਿੱਚ ਇੱਕ generated plugin ਨੂੰ activate ਕਰਨਾ, ਉਸਨੂੰ live network 'ਤੇ activate ਕਰਨ ਤੋਂ ਵੱਖਰਾ ਹੈ। sandbox:

- plugin ਨੂੰ ਇੱਕ isolated WordPress environment (wp-env) ਵਿੱਚ ਚਲਾਉਂਦਾ ਹੈ।
- ਕਿਸੇ ਵੀ PHP errors, warnings, ਜਾਂ hook conflicts ਨੂੰ capture ਕਰਦਾ ਹੈ।
- activation ਦਾ ਨਤੀਜਾ chat interface ਵਿੱਚ ਵਾਪਸ ਦੱਸਦਾ ਹੈ।

sandbox ਵਿੱਚ plugin activate ਕਰਨ ਲਈ, AI chat response ਵਿੱਚ **Activate in Sandbox** ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰੋ, ਜਾਂ slash command ਦੀ ਵਰਤੋਂ ਕਰੋ:

```
/activate-plugin <plugin-slug>
```

ਇੱਕ status message confirm ਕਰਦਾ ਹੈ ਕਿ activation ਸਫਲ ਹੋਇਆ ਜਾਂ ਅਸਫਲ। ਅਸਫਲ ਹੋਣ 'ਤੇ, error log chat thread ਵਿੱਚ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।

## Generated Plugins ਨੂੰ Manage ਕਰਨਾ {#managing-generated-plugins}

Generated plugins **Gratis AI Agent → Plugin Builder → Manage Plugins** ਵਿੱਚ ਸੂਚੀਬੱਧ ਕੀਤੇ ਜਾਂਦੇ ਹਨ। ਇਸ ਸਕ੍ਰੀਨ ਤੋਂ ਤੁਸੀਂ ਇਹ ਕਰ ਸਕਦੇ ਹੋ:

| Action | Description |
|---|---|
| **View source** | ਪੂਰੇ plugin PHP code ਦੀ ਸਮੀਖਿਆ ਕਰੋ। |
| **Re-activate in sandbox** | sandbox activation check ਨੂੰ ਦੁਬਾਰਾ ਚਲਾਓ। |
| **Install on network** | plugin ਨੂੰ live network 'ਤੇ deploy ਕਰੋ (manual confirmation ਦੀ ਲੋੜ ਹੈ)। |
| **Update** | AI ਰਾਹੀਂ ਇੱਕ ਨਵਾਂ version ਪ੍ਰਦਾਨ ਕਰੋ, ਜੋ ਮੌਜੂਦਾ code ਨੂੰ replace ਕਰ ਦੇਵੇ। |
| **Delete** | plugin ਨੂੰ sandbox store ਤੋਂ ਹਟਾ ਦਿਓ। ਪਹਿਲਾਂ ਸਾਰੇ sites ਤੋਂ deactivate ਕਰਦਾ ਹੈ। |

:::warning
**Install on network** ਤੁਹਾਡੇ live WordPress multisite 'ਤੇ generated plugin ਨੂੰ deploy ਕਰਦਾ ਹੈ। ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ plugin code ਦੀ ਸਮੀਖਿਆ ਕਰੋ। Gratis AI Agent live install ਪੂਰਾ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ confirmation ਲਈ prompt ਕਰੇਗਾ।
:::

## Network 'ਤੇ Generated Plugin Install ਕਰਨਾ {#installing-a-generated-plugin-on-the-network}

ਜਦੋਂ ਤੁਸੀਂ ਇੱਕ sandboxed plugin ਨਾਲ ਸੰਤੁਸ਼ਟ ਹੋ ਜਾਂਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਇਸਨੂੰ live network 'ਤੇ install ਕਰ ਸਕਦੇ ਹੋ:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** 'ਤੇ ਜਾਓ।
2. ਉਸ plugin ਦੇ ਨਾਲ **Install on Network** 'ਤੇ ਕਲਿੱਕ ਕਰੋ ਜਿਸਨੂੰ ਤੁਸੀਂ deploy ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ।
3. dialog confirm ਕਰੋ। plugin `wp-content/plugins/` ਵਿੱਚ install ਹੋ ਜਾਂਦਾ ਹੈ ਅਤੇ network-activated ਹੋ ਜਾਂਦਾ ਹੈ।

ਵैकल्पਿਕ ਤੌਰ 'ਤੇ, chat interface ਵਿੱਚ slash command ਦੀ ਵਰਤੋਂ ਕਰੋ:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

ਇੱਕ generated plugin ਨੂੰ update ਕਰਨ ਲਈ, ਨਵਾਂ conversation ਵਿੱਚ AI assistant ਨੂੰ change ਬਾਰੇ ਦੱਸੋ:

> "dashboard-notice plugin ਨੂੰ update ਕਰੋ ਤਾਂ ਜੋ notice ਸਿਰਫ਼ administrators ਨੂੰ ਦਿਖਾਈ ਦੇਵੇ।"

AI ਇੱਕ ਨਵਾਂ version generate ਕਰਦਾ ਹੈ, ਜੋ current version ਦੇ ਨਾਲ sandbox ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ। ਤੁਸੀਂ diff ਦੀ ਸਮੀਖਿਆ ਕਰਦੇ ਹੋ ਅਤੇ update ਲਾਗੂ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ confirm ਕਰਦੇ ਹੋ।

## HookScanner Integration {#hookscanner-integration}

Plugin Builder, ਹਰੇਕ generated plugin ਦੁਆਰਾ register ਕੀਤੇ hooks ਅਤੇ filters ਦਾ analysis ਕਰਨ ਲਈ ਇੱਕ integrated **HookScanner** ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। HookScanner output chat response ਵਿੱਚ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:

- Action hooks registered (`add_action` calls)।
- Filter hooks registered (`add_filter` calls)।
- plugin dependencies ਵਿੱਚ ਮਿਲੇ ਕੋਈ ਵੀ hooks (ਇਹ `vendor/` ਅਤੇ `node_modules/` directories ਨੂੰ skip ਕਰਦਾ ਹੈ)।

ਇਹ ਤੁਹਾਨੂੰ plugin activate ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਉਸਦੇ behaviour ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।

## Security Considerations {#security-considerations}

- Generated plugins ਨੂੰ manually install ਕੀਤੇ plugins ਤੋਂ ਵੱਖਰੇ ਤੌਰ 'ਤੇ store ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਖੁਦ ਉਨ੍ਹਾਂ ਨੂੰ network 'ਤੇ install ਨਹੀਂ ਕਰਦੇ, ਉਦੋਂ ਤੱਕ ਉਹ standard WordPress plugin management screen ਰਾਹੀਂ accessible ਨਹੀਂ ਹੁੰਦੇ।
- sandbox plugin files likhte ਸਮੇਂ directory traversal ਨੂੰ ਰੋਕਣ ਲਈ path validation ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।
- ਖ਼ਤਰਨਾਕ function calls (ਜਿਵੇਂ ਕਿ `eval`, `exec`, `system`) ਵਾਲੇ plugins validation ਦੌਰਾਨ flag ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਅਤੇ activate ਨਹੀਂ ਹੋਣਗੇ।
