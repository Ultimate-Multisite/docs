---
title: ਸਮਰੱਥਾ ਦੀ ਦਿਖਾਈ
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility (ਸਮਰੱਥਾ ਦੀ ਦਿਖਾਈ)

Superdav AI Agent v1.12.0 ਨੇ **Ability Visibility** ਕੰਟਰੋਲ ਪੇਸ਼ ਕੀਤੇ ਹਨ ਜੋ ਇਹ ਨਿਯੰਤਰਿਤ ਕਰਦੇ ਹਨ ਕਿ ਕਿਹੜੀਆਂ surfaces (ਸਤਹਾਂ) ਹਰ ਇੱਕ ability ਨੂੰ ਦਿਖਾਉਂਦੀਆਂ ਹਨ। ਇਸ ਨਾਲ ਐਡਮਿਨਰੇਟਰਾਂ ਨੂੰ ਇਹ ਸਹੀ ਤਰ੍ਹਾਂ ਢਾਲਣ ਦੀ ਇਜਾਜ਼ਤ ਮਿਲਦੀ ਹੈ ਕਿ ਕਿਹੜੀਆਂ agent capabilities REST APIs, MCP servers, WooCommerce integrations, ਅਤੇ ਹੋਰ interfaces ਰਾਹੀਂ ਉਪਲਬਧ ਹਨ।

## Ability Visibility ਕੀ ਹੈ?

Ability Visibility ਇੱਕ permission system ਹੈ ਜੋ ਇਹ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ:

- **ਕਿਹੜੀਆਂ abilities** agents ਲਈ ਉਪਲਬਧ ਹਨ
- **ਉਹ ਕਿੱਥੇ ਦਿਖਾਈ ਦੇਣਗੀਆਂ** (REST API, MCP, WooCommerce, ਆਦਿ)
- **ਕੌਣ ਉਹਨਾਂ ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਦਾ ਹੈ** (partner allow-lists ਰਾਹੀਂ)
- **ਉਹ ਕਿਵੇਂ ਵਰਗੀਕ੍ਰਿਤ ਹਨ** (recognized vs. unclassified)

ਹਰ ability ਨਾਲ ਇੱਕ visibility level ਆਉਂਦਾ ਹੈ ਜੋ ਇਹ ਨਿਰਧਾਰਤ ਕਰਦਾ ਹੈ ਕਿ ਉਹ ਵੱਖ-ਵੱਖ surfaces 'ਤੇ ਕਿੰਨੀ ਉਪਲਬਧ ਹੋਵੇਗੀ।

## Visibility Levels (ਦਿਖਾਈ ਦੇਣ ਦੇ ਪੱਧਰ)

### Public (ਜਨਤਕ)

**Public abilities** ਹਰ ਜਗ੍ਹਾ ਉਪਲਬਧ ਹੁੰਦੀਆਂ ਹਨ:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- ਸਾਰੇ user roles (appropriate permissions ਨਾਲ)

ਉਦਾਹਰਨ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (ਅੰਦਰੂਨੀ)

**Internal abilities** ਸਿਰਫ਼ ਤੁਹਾਡੀ WordPress installation ਦੇ ਅੰਦਰ ਉਪਲਬਧ ਹੁੰਦੀਆਂ ਹਨ:

- Chat interfaces
- Admin panels
- ਸਿਰਫ਼ logged-in users ਲਈ
- REST API ਜਾਂ external integrations ਰਾਹੀਂ ਦਿਖਾਈ ਨਹੀਂ ਦਿੰਦੀਆਂ

ਉਦਾਹਰਨ: `manage-settings`, `view-analytics`, `export-data`

### Partner (ਸਹਿਕਰਮੀ)

**Partner abilities** ਸਿਰਫ਼ whitelisted partners ਲਈ ਉਪਲਬਧ ਹੁੰਦੀਆਂ ਹਨ:

- ਇਸ ਲਈ explicit partner allow-list entry ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ
- partner credentials ਨਾਲ REST API ਰਾਹੀਂ ਉਪਲਬਧ
- partner authentication ਨਾਲ MCP ਰਾਹੀਂ ਉਪਲਬਧ
- ਆਮ users ਲਈ ਉਪਲਬਧ ਨਹੀਂ

ਉਦਾਹਰਨ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (ਬੰਦ)

**Disabled abilities** ਕਿਤੇ ਵੀ ਉਪਲਬਧ ਨਹੀਂ ਹੁੰਦੀਆਂ:

- ਕਿਸੇ ਵੀ surface ਰਾਹੀਂ ਦਿਖਾਈ ਨਹੀਂ ਦਿੰਦੀਆਂ
- Chat ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ
- Admin panels ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ
- ਇਹ deprecated ਜਾਂ experimental abilities ਲਈ ਕੰਮ ਆਉਂਦੀ ਹੈ

## Ability Visibility Manage ਕਰਨਾ

### Ability Visibility Settings ਤੱਕ ਪਹੁੰਚ ਕਰਨਾ

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** 'ਤੇ ਜਾਓ
2. **Abilities** ਟੈਬ 'ਤੇ ਕਲਿੱਕ ਕਰੋ
3. ਤੁਹਾਨੂੰ ਸਾਰੇ install ਹੋਏ abilities ਦੀ ਸੂਚੀ ਮਿਲੇਗੀ, ਜਿਸ ਨਾਲ ਉਹਨਾਂ ਦੇ visibility levels ਵੀ ਦਿਖਣਗੇ।

### Ability Details ਦੇਖਣਾ

ਕਿਸੇ ਵੀ ability 'ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਤੁਸੀਂ ਦੇਖ ਸਕਦੇ ਹੋ:

- **Name**: ability ਦਾ identifier
- **Description**: ability ਕੀ ਕਰਦੀ ਹੈ
- **Current visibility**: Public, Internal, Partner, ਜਾਂ Disabled
- **Partner allow-list**: ਕਿਹੜੇ partners ਪਹੁੰਚ ਕਰ ਸਕਦੇ ਹਨ (ਜੇ Partner visibility ਹੈ)
- **Last updated**: ਕਿਹੜੇ ਸਮੇਂ visibility ਬਦਲੀ ਗਈ ਸੀ
- **Status**: Recognized ਜਾਂ Unclassified

### Visibility Levels ਬਦਲਣਾ

Ability ਦੀ visibility ਬਦਲਣ ਲਈ:

1. ਸੂਚੀ ਵਿੱਚ ability 'ਤੇ ਕਲਿੱਕ ਕਰੋ
2. ਡ੍ਰੌਪਡਾਊਨ ਤੋਂ ਨਵਾਂ visibility level ਚੁਣੋ
3. ਜੇ "Partner" ਚੁਣ ਰਹੇ ਹੋ, ਤਾਂ allow-list ਵਿੱਚ partner identifiers ਜੋੜੋ
4. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

ਉਦਾਹਰਨ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (ਇੱਕੋ ਵਾਰ ਵਿੱਚ ਕੰਮ)

ਇੱਕੋ ਵਾਰ ਵਿੱਚ ਕਈ abilities ਦੀ visibility ਬਦਲਣ ਲਈ:

1. abilities ਦੇ ਨਾਲ ਵਾਲੇ boxes ਨੂੰ check ਕਰੋ
2. bulk action ਡ੍ਰੌਪਡਾਊਨ ਤੋਂ ਨਵਾਂ visibility level ਚੁਣੋ
3. **Apply** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

## Partner Allow-List

**partner allow-list** ਇਹ ਕੰਟਰੋਲ ਕਰਦਾ ਹੈ ਕਿ ਕਿਹੜੇ external partners Partner-level abilities ਤੱਕ ਪਹੁੰਚ ਕਰ ਸਕਦੇ ਹਨ।

### Partners ਜੋੜਨਾ

1. **Superdav AI Agent** → **Settings** → **Partners** 'ਤੇ ਜਾਓ
2. **Add Partner** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
3. partner identifier (ਆਮ ਤੌਰ 'ਤੇ ਇੱਕ API key ਜਾਂ organization ID) ਦਰਜ ਕਰੋ
4. ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਇੱਕ partner name ਅਤੇ description ਜੋੜੋ
5. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

### Partners ਨੂੰ Abilities ਸੌਂਪਣਾ

ਇੱਕ partner ਜੋੜਨ ਤੋਂ ਬਾਅਦ:

1. **Abilities** ਟੈਬ 'ਤੇ ਜਾਓ
2. Partner visibility ਵਾਲੀ ability ਲੱਭੋ
3. edit ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ
4. "Partner allow-list" section ਵਿੱਚ, ਉਹਨਾਂ partners ਦੇ boxes ਨੂੰ check ਕਰੋ ਜਿਨ੍ਹਾਂ ਨੂੰ ਪਹੁੰਚ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ
5. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

### Partner Access ਵਾਪਸ ਲੈਣਾ (Revoking)

ਇੱਕ partner ਦੀ ਪਹੁੰਚ ਹਟਾਉਣ ਲਈ:

1. ability ਨੂੰ edit ਕਰੋ
2. allow-list ਵਿੱਚੋਂ partner ਦੇ box ਨੂੰ uncheck ਕਰੋ
3. **Save** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

partner ਨੂੰ ਤੁਰੰਤ ਉਸ ability ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਮਿਲੇਗੀ।

## Unclassified Abilities (ਅਨ੍ਰਮਿਤ abilities)

ਜਦੋਂ ਤੁਸੀਂ ਕੋਈ third-party ability install ਕਰਦੇ ਹੋ ਜੋ Superdav AI Agent ਨਹੀਂ ਪਛਾਣਦਾ, ਤਾਂ ਉਸਨੂੰ **Unclassified** ਨਾਮ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।

### Unclassified Abilities ਲਈ Admin Notice

ਤੁਹਾਨੂੰ ਇੱਕ admin notice ਦਿਖਾਈ ਦੇਵੇਗਾ:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities ਦੀ ਸਮੀਖਿਆ ਕਰਨਾ

1. notice ਵਿੱਚ **Review Abilities** 'ਤੇ ਕਲਿੱਕ ਕਰੋ
2. ਹਰੇਕ unclassified ability ਲਈ, ਤੁਹਾਨੂੰ ਇਹ ਦਿਖਾਈ ਦੇਵੇਗਾ:
   - Ability name ਅਤੇ description
   - Source (ਕਿਹੜਾ plugin/addon ਨੇ install ਕੀਤਾ)
   - Suggested visibility level
   - Security assessment

3. ਇੱਕ visibility level ਚੁਣੋ:
   - **Public**: ability 'ਤੇ ਭਰੋਸਾ ਕਰੋ; ਇਸਨੂੰ ਹਰ ਜਗ੍ਹਾ ਦਿਖਾਓ
   - **Internal**: ਸਿਰਫ਼ ਅੰਦਰੂਨੀ ਵਰਤੋਂ ਲਈ ਸੀਮਤ ਕਰੋ
   - **Partner**: ਸਿਰਫ਼ ਖਾਸ partners ਲਈ ਸੀਮਤ ਕਰੋ
   - **Disabled**: ਇਸ ability ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ

4. ਆਪਣੇ ਫੈਸਲੇ ਨੂੰ ਸੇਵ ਕਰਨ ਲਈ **Classify** 'ਤੇ ਕਲਿੱਕ ਕਰੋ

### Unclassified Abilities ਨੂੰ Classify ਕਿਉਂ ਕਰੀਏ?

abilities ਨੂੰ classify ਕਰਨ ਨਾਲ:

- **Security ਸੁਧਰਦਾ ਹੈ**: ਤੁਸੀਂ ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਮਨਜ਼ੂਰੀ ਦਿੰਦੇ ਹੋ ਕਿ ਕੀ ਦਿਖਾਇਆ ਜਾਵੇਗਾ
- **ਮਾੜੇ ਹਾਦਸਿਆਂ ਤੋਂ ਰੋਕਦਾ ਹੈ**: Unclassified abilities by default disable ਹੋ ਜਾਂਦੀਆਂ ਹਨ
- **features ਨੂੰ ਸੰਭਵ ਬਣਾਉਂਦਾ ਹੈ**: ਇੱਕ ਵਾਰ classify ਹੋਣ ਤੋਂ ਬਾਅਦ, ability ਉਪਲਬਧ ਹੋ ਜਾਂਦੀ ਹੈ
- **ਫੈਸਲਿਆਂ ਨੂੰ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕਰਦਾ ਹੈ**: ਤੁਹਾਡੇ ਚੋਣਾਂ audit purposes ਲਈ ਲੌਗ ਕਰ ਦਿੱਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ

## Different Surfaces 'ਤੇ Visibility

### REST API

**Public abilities** REST endpoints ਰਾਹੀਂ ਉਪਲਬਧ ਹਨ:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal ਅਤੇ Partner abilities** REST API ਰਾਹੀਂ ਉਪਲਬਧ ਨਹੀਂ ਹਨ।

### MCP Servers

**Public abilities** MCP ਰਾਹੀਂ ਉਪਲਬਧ ਹਨ:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCP ਰਾਹੀਂ expose ਨਹੀਂ ਹੁੰਦੀਆਂ।

**Partner abilities** ਸਿਰਫ਼ partner credentials ਨਾਲ ਉਪਲਬਧ ਹਨ।

### WooCommerce Integration

WooCommerce ਨਾਲ ਸਬੰਧਤ **Public abilities** ਉਪਲਬਧ ਹਨ:

- Product management
- Order processing
- Customer communication

**Internal abilities** WooCommerce ਨੂੰ expose ਨਹੀਂ ਹੁੰਦੀਆਂ।

### Chat Interface

**ਸਾਰੀਆਂ abilities** (Public, Internal, Partner) chat ਵਿੱਚ ਉਪਲਬਧ ਹਨ, ਜੋ user permissions 'ਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ:

- Administrators ਸਾਰੀਆਂ abilities ਦੇਖਦੇ ਹਨ
- Regular users ਸਿਰਫ਼ Public abilities ਦੇਖਦੇ ਹਨ
- Partners Public + Partner abilities ਦੇਖਦੇ ਹਨ (ਜੇ whitelisted ਹਨ)

## Security Best Practices (ਸੁਰੱਖਿਆ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਤਰੀਕੇ)

### Principle of Least Privilege (ਘੱਟੋ-ਘੱਟ ਸਹੂਲਤ ਦਾ ਸਿਧਾਂਤ)

- abilities ਨੂੰ ਸਭ ਤੋਂ ਜ਼ਿਆਦਾ restrictive visibility 'ਤੇ ਸੈੱਟ ਕਰੋ ਜੋ ਉਨ੍ਹਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦੇਵੇ
- sensitive operations ਲਈ Partner visibility ਦੀ ਵਰਤੋਂ ਕਰੋ
- ਉਹ abilities disable ਕਰੋ ਜਿਨ੍ਹਾਂ ਦੀ ਤੁਸੀਂ ਵਰਤੋਂ ਨਹੀਂ ਕਰਦੇ

### Regular Audits (ਨਿਯਮਤ ਜਾਂਚ)

- ਹਰ ਮਹੀਨੇ ability visibility ਦੀ ਸਮੀਖਿਆ ਕਰੋ
- unclassified abilities ਦੀ ਜਾਂਚ ਕਰੋ
- ਨਾ ਵਰਤੇ ਜਾਣ ਵਾਲੇ partners ਲਈ ਪਹੁੰਚ ਹਟਾਓ

### Logging and Monitoring (ਲੌ깅 ਅਤੇ ਨਿਗਰਾਨੀ)

- ਨਿਗਰਾਨੀ ਕਰੋ ਕਿ ਕਿਹੜੀਆਂ abilities ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ
- partner access patterns ਨੂੰ track ਕਰੋ
- bất normal ability usage 'ਤੇ alert ਕਰੋ

### Third-Party Abilities (ਤੀਜੀ ਧਿਰ ਦੀਆਂ abilities)

- enable ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ third-party abilities ਦੀ ਸਮੀਖਿਆ ਕਰੋ
- ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ classify ਕਰੋ
- Internal ਜਾਂ Partner visibility ਨਾਲ ਸ਼ੁਰੂ ਕਰੋ
- ਸਿਰਫ਼ vetting ਕਰਨ ਤੋਂ ਬਾਅਦ Public 'ਤੇ promote ਕਰੋ

## Troubleshooting (ਸਮੱਸਿਆ ਨਿਵਾਰਣ)

**ability ਸੂਚੀ ਵਿੱਚ ਨਹੀਂ ਦਿਖ ਰਹੀ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ability install ਅਤੇ active ਹੈ
- ਜਾਂਚ ਕਰੋ ਕਿ plugin/addon enable ਹੈ
- ਪੇਜ ਨੂੰ refresh ਕਰੋ

**ਮੈਂ ability ਦੀ visibility ਨਹੀਂ ਬਦਲ ਸਕਦਾ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਤੁਹਾਡੇ ਕੋਲ administrator permissions ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ ability ਕਿਸੇ plugin ਦੁਆਰਾ lock ਤਾਂ ਨਹੀਂ ਹੈ
- ਟਕਰਾਅ ਪੈਦਾ ਕਰਨ ਵਾਲੇ plugins ਨੂੰ disable ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰੋ

**partner ability ਤੱਕ ਪਹੁੰਚ ਨਹੀਂ ਕਰ ਸਕਦਾ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ partner allow-list ਵਿੱਚ ਹੈ
- ਜਾਂਚ ਕਰੋ ਕਿ ability ਦੀ visibility Partner 'ਤੇ set ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ partner ਦੇ credentials ਸਹੀ ਹਨ
- authentication errors ਲਈ API logs ਦੀ ਜਾਂਚ ਕਰੋ

**Unclassified abilities ਆਉਂਦੇ ਰਹਿੰਦੇ ਹਨ**
- admin notice ਵਿੱਚ ਉਹਨਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ ਅਤੇ classify ਕਰੋ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੀ classification save ਹੋ ਗਈ ਹੈ
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ability ਪ੍ਰਦਾਨ ਕਰਨ ਵਾਲਾ plugin up to date ਹੈ

## Migration from Legacy Mode (ਪੁਰਾਣੇ mode ਤੋਂ ਤਬਦੀਲੀ)

ਜੇ ਤੁਸੀਂ Superdav AI Agent ਦੇ ਪੁਰਾਣੇ version ਤੋਂ upgrade ਕਰ ਰਹੇ ਹੋ:

- ਸਾਰੀਆਂ existing abilities ਆਪਣੇ ਆਪ Public ਵਜੋਂ classify ਹੋ ਜਾਂਦੀਆਂ ਹਨ
- ਲੋੜ ਅਨੁਸਾਰ visibility ਦੀ ਸਮੀਖਿਆ ਕਰੋ ਅਤੇ ਢਾਲੋ
- ਕੋਈ ਕਾਰਵਾਈ ਜ਼ਰੂਰੀ ਨਹੀਂ ਹੈ ਜਦੋਂ ਤੱਕ ਤੁਸੀਂ ਪਹੁੰਚ ਨੂੰ ਸੀਮਤ ਨਹੀਂ ਕਰਨਾ ਚਾਹੁੰਦੇ

Transition to native Abilities API integration ਬਾਰੇ ਹੋਰ ਵੇਰਵੇ ਲਈ **Third-Party Mode Migration** ਦੇਖੋ।

## Next Steps (ਅਗਲੇ ਕਦਮ)

ability visibility configure ਕਰਨ ਤੋਂ ਬਾਅਦ:

1. **ਆਪਣੀਆਂ abilities ਦੀ ਸਮੀਖਿਆ ਕਰੋ**: ਸਾਰੀਆਂ install ਹੋਈ abilities ਦੀ ਜਾਂਚ ਕਰੋ
2. **unclassified abilities ਨੂੰ classify ਕਰੋ**: admin notices ਦਾ ਜਵਾਬ ਦਿਓ
3. **partners ਸੈੱਟ ਕਰੋ**: ਜੇ Partner visibility ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ ਤਾਂ partners ਜੋੜੋ
4. **usage ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ**: track ਕਰੋ ਕਿ ਕਿਹੜੀਆਂ abilities ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ
5. **ਫੈਸਲਿਆਂ ਨੂੰ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕਰੋ**: ਨੋਟਸ ਰੱਖੋ ਕਿ ਤੁਸੀਂ ਹਰ visibility level ਕਿਉਂ ਚੁਣਿਆ
