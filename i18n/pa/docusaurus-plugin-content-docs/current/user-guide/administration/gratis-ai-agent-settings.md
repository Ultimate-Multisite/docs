---
title: ਮੁਫ਼ਤ AI Agent ਸੈਟਿੰਗਾਂ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent Settings

Gratis AI Agent ਵਿੱਚ **Settings → Advanced** ਸਕ੍ਰੀਨ ਐਡਮਿਨਿਸਟਰੇਟਰ-level ਕਨਫਿਗਰੇਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ, ਜੋ ਕਿ v1.5.0 ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤੇ ਗਏ ਬੈਕਐਂਡ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਲਈ ਹੈ। ਇਹ ਪੇਜ **Feedback Endpoint** ਫੀਲਡਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਅਨੁਮਾਨਿਤ ਫਾਰਮੈਟ ਨੂੰ ਦਸਤਾਵੇਜ਼ ਕਰਦਾ ਹੈ।

## Settings ਤੱਕ ਪਹੁੰਚ ਕਰਨਾ

1. WordPress admin ਵਿੱਚ, **Gratis AI Agent → Settings** 'ਤੇ ਜਾਓ।
2. **Advanced** ਟੈਬ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

## Feedback Endpoint Configuration

ਫੀਡਬੈਕ ਐਂਡਪੁਆਇੰਟ (feedback endpoint) AI agent ਨੂੰ POST requests ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਯੂਜ਼ਰ 'thumbs-down' ਬਟਨ, auto-prompt banner, ਜਾਂ `/report-issue` ਕਮਾਂਡ ਰਾਹੀਂ ਫੀਡਬੈਕ ਜਮ੍ਹਾ ਕਰਦਾ ਹੈ।

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | ਉਹ URL ਜੋ JSON body ਨਾਲ HTTP POST requests ਵਜੋਂ ਫੀਡਬੈਕ ਜਮ੍ਹਾ ਕਰਦਾ ਹੈ। |
| **Feedback API Key** | ਹਰੇਕ ਫੀਡਬੈਕ ਰੀਕਵੈਸਟ ਦੇ `Authorization` header ਵਿੱਚ ਭੇਜਿਆ ਜਾਣ ਵਾਲਾ ਇੱਕ bearer token। ਜੇਕਰ ਤੁਹਾਡੇ endpoint ਨੂੰ authentication ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ, ਤਾਂ ਇਸਨੂੰ ਖਾਲੀ ਛੱਡ ਦਿਓ। |

### Expected JSON Payload

ਤੁਹਾਡੇ ਫੀਡਬੈਕ endpoint ਨੂੰ ਘੱਟੋ-ਘੱਟ ਹੇਠ ਲਿਖੇ ਫੀਲਡਾਂ ਵਾਲਾ JSON body ਸਵੀਕਾਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

ਸੰਵਾਦ ਦੇ context 'ਤੇ ਨਿਰਭਰ ਕਰਦੇ ਹੋਏ, payload ਵਿੱਚ ਵਾਧੂ ਫੀਲਡ ਹੋ ਸਕਦੇ ਹਨ।

### `triage_category` Values

AI triage layer payload ਨੂੰ ਅੱਗੇ ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ `triage_category` ਨੂੰ ਹੇਠ ਲਿਖੇ ਮੁੱਲਾਂ ਵਿੱਚੋਂ ਇੱਕ ਨਿਯਤ ਕਰਦਾ ਹੈ:

| Value | Meaning |
|---|---|
| `factual_error` | ਸਿਸਟਮ ਨੇ ਗਲਤ ਤੱਥਾਂ ਵਾਲੀ ਜਾਣਕਾਰੀ ਦਿੱਤੀ। |
| `unhelpful_answer` | ਜਵਾਬ ਤਕਨੀਕੀ ਤੌਰ 'ਤੇ ਸਹੀ ਸੀ ਪਰ ਕੰਮ ਆਉਣ ਵਾਲਾ ਨਹੀਂ ਸੀ। |
| `inappropriate_content` | ਜਵਾਬ ਵਿੱਚ ਅਜਿਹਾ content ਸੀ ਜੋ ਯੂਜ਼ਰਾਂ ਨੂੰ ਨਹੀਂ ਦਿਖਾਇਆ ਜਾਣਾ ਚਾਹੀਦਾ। |
| `other` | ਫੀਡਬੈਕ ਕਿਸੇ ਜਾਣੇ-ਪਛਾਣੇ category ਨਾਲ ਮੇਲ ਨਹੀਂ ਖਾਂਦਾ। |

### Authentication

ਜੇਕਰ ਤੁਹਾਡੇ endpoint ਨੂੰ authentication ਦੀ ਲੋੜ ਹੈ, ਤਾਂ **Feedback API Key** ਫੀਲਡ ਵਿੱਚ ਆਪਣਾ bearer token ਸੈੱਟ ਕਰੋ। agent ਇਹ ਭੇਜਦਾ ਹੈ:

```
Authorization: Bearer <your-api-key>
```

ਜੇ **Feedback API Key** ਫੀਲਡ ਖਾਲੀ ਹੈ, ਤਾਂ ਕੋਈ `Authorization` header ਨਹੀਂ ਭੇਜਿਆ ਜਾਂਦਾ।

### Feedback Collection ਨੂੰ ਅਸਮਰਥ ਕਰਨਾ

**Feedback Endpoint URL** ਅਤੇ **Feedback API Key** ਦੋਵੇਂ ਫੀਲਡ ਖਾਲੀ ਛੱਡ ਦਿਓ। 'thumbs-down' ਬਟਨ ਅਤੇ ਫੀਡਬੈਕ UI ਯੂਜ਼ਰਾਂ ਲਈ ਦਿਖਾਈ ਦੇਣਗੇ, ਪਰ submissions ਕਿਸੇ ਬਾਹਰੀ ਸੇਵਾ ਨੂੰ ਅੱਗੇ ਨਹੀਂ ਭੇਜੇ ਜਾਣਗੇ।

## Brave Search API Key

**Advanced** ਟੈਬ 'ਤੇ, **Brave Search API Key** ਫੀਲਡ [Internet Search](../configuration/internet-search) ਦੀ ਸਮਰੱਥਾ ਨੂੰ ਸੈੱਟ ਕਰਦਾ ਹੈ।

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard ਤੋਂ ਤੁਹਾਡੀ API key। AI assistant ਵਿੱਚ ਇੰਟਰਨੈਟ ਸਰਚ ਨੂੰ enable ਕਰਨ ਲਈ ਜ਼ਰੂਰੀ। |

ਇਸ ਫੀਲਡ ਦੇ label ਵਿੱਚ Brave Search API sign-up page ਦਾ ਕਲਿੱਕ ਕਰਨ ਯੋਗ link ਸ਼ਾਮਲ ਹੈ। ਇੰਟਰਨੈਟ ਸਰਚ ਨੂੰ disable ਕਰਨ ਲਈ ਇਸਨੂੰ ਖਾਲੀ ਛੱਡ ਦਿਓ।

ਇਸ feature 'ਤੇ end-user documentation ਲਈ [Internet Search](../configuration/internet-search) ਦੇਖੋ।

## Feature Flags

v1.9.0 ਵਿੱਚ ਵੀ ਸ਼ਾਮਲ, **Settings → Feature Flags** ਟੈਬ ਵਿਕਲਪਿਕ functionality ਲਈ toggle switches ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਹਰੇਕ flag ਜਾਂ ਤਾਂ network-wide enable ਹੁੰਦਾ ਹੈ ਜਾਂ disable; ਇਸ ਸਮੇਂ ਕੋਈ per-site override ਨਹੀਂ ਹੈ।

### Accessing Feature Flags

1. WordPress admin ਵਿੱਚ, **Gratis AI Agent → Settings** 'ਤੇ ਜਾਓ।
2. **Feature Flags** ਟੈਬ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | ਜਦੋਂ enable ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਸਿਰਫ਼ `administrator` role ਵਾਲੇ ਯੂਜ਼ਰ ਹੀ AI Agent chat panel ਖੋਲ੍ਹ ਸਕਦੇ ਹਨ। ਬਾਕੀ ਸਾਰੇ roles ਨੂੰ ਇਸ ਦੀ ਬਜਾਏ "Contact your administrator" message ਦਿਖਾਈ ਦੇਵੇਗਾ। |
| **Restrict to Network Admins** | Off | ਜਦੋਂ multisite network 'ਤੇ enable ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਸਿਰਫ਼ Super Admins ਹੀ agent ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਨ। ਵਿਅਕਤੀਗਤ site admins ਨੂੰ ਰੋਕ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ। ਜੇ ਦੋਵੇਂ enable ਹਨ ਤਾਂ ਇਹ "Restrict to Administrators" ਨੂੰ ਪਹਿਲ ਦੇਵੇਗਾ। |
| **Allow Subscriber Access** | Off | ਜਦੋਂ enable ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ `subscriber` role ਵਾਲੇ ਯੂਜ਼ਰ chat interface ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹਨ ਪਰ ਉਹ ਸਿਰਫ਼ read-only abilities ਤੱਕ ਸੀਮਿਤ ਹਨ (post banana ਜਾਂ settings change ਨਹੀਂ ਕਰ ਸਕਦੇ)। |
| **Disable for Non-Members** | Off | Ultimate Multisite membership status ਨਾਲ ਇੰਟੀਗ੍ਰੇਟ ਹੁੰਦਾ ਹੈ। ਜਦੋਂ enable ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਉਨ੍ਹਾਂ sites ਲਈ chat ਲੁਕਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਕੋਲ active membership ਨਹੀਂ ਹੈ। |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | chat widget ਦੇ ਹੇਠਾਂ ਦਿਖਾਈ ਦੇਣ ਵਾਲੀ branding attribution line ਹਟਾ ਦਿੰਦਾ ਹੈ। white-label deployments ਲਈ ਸਿਫਾਰਸ਼ੀ। |
| **Custom Agent Name** | *(blank)* | chat header ਅਤੇ admin menu ਵਿੱਚ default "Gratis AI Agent" label ਨੂੰ ਤੁਹਾਡੇ ਆਪਣੇ product name ਨਾਲ ਬਦਲ ਦਿੰਦਾ ਹੈ। default ਵਰਤਣ ਲਈ ਖਾਲੀ ਛੱਡ ਦਿਓ। |
| **Hide Agent Picker** | Off | ਜਦੋਂ enable ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਯੂਜ਼ਰ ਪੰਜ built-in agents ਵਿਚਕਾਰ switch ਨਹੀਂ ਕਰ ਸਕਦੇ। current agent Settings → General ਵਿੱਚ default ਵਜੋਂ ਜੋ configure ਕੀਤਾ ਗਿਆ ਹੈ, ਉਸ 'ਤੇ fix ਰਹਿੰਦਾ ਹੈ। |
| **Use Site Icon as Chat Avatar** | Off | chat widget header ਵਿੱਚ default AI icon ਨੂੰ WordPress site icon ਨਾਲ ਬਦਲ ਦਿੰਦਾ ਹੈ (Appearance → Customize → Site Identity ਹੇਠ ਸੈੱਟ ਕੀਤਾ ਗਿਆ)। |

### Applying Changes

ਕੋਈ ਵੀ flag toggle ਕਰਨ ਤੋਂ ਬਾਅਦ **Save Settings** 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਬਦਲਾਅ ਤੁਰੰਤ ਲਾਗੂ ਹੋ ਜਾਂਦੇ ਹਨ — ਕਿਸੇ cache flush ਜਾਂ plugin reactivation ਦੀ ਲੋੜ ਨਹੀਂ ਹੈ।
