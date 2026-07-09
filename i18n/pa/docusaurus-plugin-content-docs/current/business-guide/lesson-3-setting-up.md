---
title: 'ਪਾਠ ੩: ਆਪਣੇ ਨੈਟਵਰਕ ਨੂੰ ਸੈੱਟ ਕਰਨਾ'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: ਆਪਣਾ ਨੈੱਟਵਰਕ ਸੈੱਟ ਕਰਨਾ {#lesson-3-setting-up-your-network}

ਹੁਣ ਸਮਾਂ ਹੈ ਬਣਾਉਣ ਦਾ। ਇਸ ਲੈਸਨ ਵਿੱਚ ਤੁਸੀਂ Ultimate Multisite ਇੰਸਟਾਲ ਕਰੋਗੇ ਅਤੇ FitSite ਨੈੱਟਵਰਕ ਦੀ ਨੀਂਹ ਰੱਖੋਗੇ। ਇੱਥੇ ਲਏ ਹਰ ਫੈਸਲੇ ਨੂੰ ਫਿਟਨੈਸ ਨਿਸ਼ (niche) ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖ ਕੇ ਕੀਤਾ ਗਿਆ ਹੈ।

## ਜਿੱਥੇ ਰੁਕੇ ਸੀ {#where-we-left-off}

ਅਸੀਂ ਫਿਟਨੈਸ ਸਟੂਡੀਓਜ਼ ਨੂੰ ਆਪਣਾ ਨਿਸ਼ ਚੁਣਿਆ ਅਤੇ ਇਸ ਮੌਕੇ ਨੂੰ ਸਹੀ ਕਰ ਲਿਆ। ਹੁਣ ਅਸੀਂ ਉਸ ਵਿਚਾਰ ਨੂੰ ਇੱਕ ਕੰਮ ਕਰਨ ਵਾਲੇ ਪਲੇਟਫਾਰਮ ਵਿੱਚ ਬਦਲਦੇ ਹਾਂ।

## ਆਪਣੀ ਹੋਸਟਿੰਗ ਚੁਣਨਾ {#choosing-your-hosting}

ਤੁਹਾਡੀ ਹੋਸਟਿੰਗ ਦੀ ਚੋਣ ਇੱਕ ਨਿਸ਼ ਪਲੇਟਫਾਰਮ ਲਈ ਇੱਕ ਸਿੰਗਲ ਵੈੱਬਸਾਈਟ ਨਾਲੋਂ ਜ਼ਿਆਦਾ ਮਹੱਤਵਪੂਰਨ ਹੈ। ਤੁਸੀਂ ਸਿਰਫ਼ ਇੱਕ ਸਾਈਟ ਹੋਸਟ ਨਹੀਂ ਕਰ ਰਹੇ — ਤੁਸੀਂ ਇੱਕ ਨੈੱਟਵਰਕ ਹੋਸਟ ਕਰ ਰਹੇ ਹੋ ਜੋ ਦਰਜਨਾਂ ਜਾਂ ਸੈਂਕੜੇ ਸਾਈਟਾਂ ਤੱਕ ਵੱਡਾ ਹੋਵੇਗਾ।

### ਕੀ ਦੇਖਣਾ ਚਾਹੀਦਾ ਹੈ {#what-to-look-for}

- **WordPress Multisite support**: ਸਾਰੇ ਹੋਸਟਸ Multisite ਨੂੰ ਚੰਗੀ ਤਰ੍ਹਾਂ ਨਹੀਂ ਸੰਭਾਲਦੇ।
- **Wildcard SSL**: ਸਬਡੋਮੇਨ-ਆਧਾਰਿਤ ਨੈੱਟਵਰਕਾਂ ਲਈ ਜ਼ਰੂਰੀ।
- **Scalable resources**: ਤੁਹਾਨੂੰ ਬਿਨਾਂ ਮਾਈਗ੍ਰੇਟ ਕੀਤੇ ਵੱਧਣ ਲਈ ਜਗ੍ਹਾ ਚਾਹੀਦੀ ਹੈ।
- **Ultimate Multisite integration**: ਆਟੋਮੇਟਡ ਡੋਮੇਨ ਮੈਪਿੰਗ ਅਤੇ SSL ਨਾਲ ਕੰਮ ਕਰਨ ਦਾ ਬਹੁਤ ਘੱਟ ਸਮਾਂ ਲੱਗਦਾ ਹੈ।

### ਸਿਫਾਰਸ਼ ਕੀਤਾ ਪਹੁੰਚ {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) ਲਿਸਟ ਵਿੱਚੋਂ ਇੱਕ ਹੋਸਟ ਚੁਣੋ। ਇਹ Ultimate Multisite ਨਾਲ ਟੈਸਟ ਕੀਤੇ ਗਏ ਹਨ ਅਤੇ ਡੋਮੇਨ ਮੈਪਿੰਗ ਅਤੇ SSL ਆਟੋਮੇਸ਼ਨ ਲਈ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ।

FitSite ਲਈ, ਅਸੀਂ ਇੱਕ ਸਬਡੋਮੇਨ ਕਨਫਿਗਰੇਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਾਂਗੇ। ਇਸਦਾ ਮਤਲਬ ਹੈ ਕਿ ਗਾਹਕ ਸਾਈਟਾਂ ਸ਼ੁਰੂ ਵਿੱਚ `studioname.fitsite.com` ਵਜੋਂ ਦਿਖਾਈ ਦੇਣਗੀਆਂ, ਇਸ ਤੋਂ ਬਾਅਦ ਕਿ ਉਹ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਆਪਣਾ ਡੋਮੇਨ ਮੈਪ ਕਰ ਸਕਦੇ ਹਨ।

## WordPress Multisite ਇੰਸਟਾਲ ਕਰਨਾ {#installing-wordpress-multisite}

ਜੇ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ WordPress Multisite ਇੰਸਟਾਲੇਸ਼ਨ ਨਹੀਂ ਹੈ:

1. ਆਪਣੇ ਹੋਸਟਿੰਗ ਪ੍ਰੋਵਾਈਡਰ 'ਤੇ WordPress ਇੰਸਟਾਲ ਕਰੋ।
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) ਗਾਈਡ 'ਤੇ ਪਾਲਣਾ ਕਰੋ।
3. ਜਦੋਂ ਪੁੱਛਿਆ ਜਾਵੇ ਤਾਂ **subdomain** ਕਨਫਿਗਰੇਸ਼ਨ ਚੁਣੋ।

:::tip ਸਬਡੋਮੇਨ ਕਿਉਂ?
ਸਬਡੋਮੇਨ ਹਰੇਕ ਗਾਹਕ ਸਾਈਟ ਨੂੰ ਆਪਣਾ ਵੱਖਰਾ ਪਤਾ (`studio.fitsite.com`) ਦਿੰਦੇ ਹਨ, ਨਾ ਕਿ ਇੱਕ ਪਾਥ (`fitsite.com/studio`)। ਇਹ ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਲਈ ਵਧੇਰੇ ਪੇਸ਼ੇਵਰ ਹੈ ਅਤੇ ਪਰਮਲਿੰਕ ਸੰਘਰਸ਼ਾਂ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ। ਵਿਸਤ੍ਰਿਤ ਤੁਲਨਾ ਲਈ [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) ਵੇਖੋ।
:::

## Ultimate Multisite ਇੰਸਟਾਲ ਕਰਨਾ {#installing-ultimate-multisite}

ਇਸ ਗਾਈਡ 'ਤੇ ਪਾਲਣਾ ਕਰੋ: [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ਤਾਂ ਜੋ ਤੁਸੀਂ:

1. ਪਲੱਗਇਨ ਨੂੰ ਨੈੱਟਵਰਕ-ਵਿਆਪੀ (network-wide) ਅਪਲੋਡ ਅਤੇ ਐਕਟੀਵੇਟ ਕਰ ਸਕੋ।
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) ਚਲਾ ਸਕੋ।

ਸੈਟਅਪ ਵਿਜ਼ਾਰਡ ਦੌਰਾਨ, FitSite ਨਿਸ਼ ਨੂੰ ਧਿਆਨ ਵਿੱਚ ਰੱਖੋ:

- **Currency**: ਉਸ ਮੁਦਰਾ (currency) 'ਤੇ ਸੈੱਟ ਕਰੋ ਜੋ ਤੁਹਾਡੇ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਗਾਹਕ ਵਰਤਦੇ ਹਨ।
- **Company name**: "FitSite" (ਜਾਂ ਤੁਹਾਡਾ ਚੁਣਿਆ ਹੋਇਆ ਬ੍ਰਾਂਡ ਨਾਮ)।
- **Company logo**: ਆਪਣਾ ਬ੍ਰਾਂਡ ਲੋਗੋ ਅਪਲੋਡ ਕਰੋ — ਇਹ ਇਨਵੌਇਸਾਂ ਅਤੇ ਈਮੇਲਾਂ 'ਤੇ ਦਿਖਾਈ ਦੇਵੇਗਾ।

## ਫਿਟਨੈਸ ਨਿਸ਼ ਲਈ ਕਨਫਿਗਰ ਕਰਨਾ {#configuring-for-the-fitness-niche}

Ultimate Multisite ਇੰਸਟਾਲ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਇਹ ਨਿਸ਼-ਵਿਸ਼ੇਸ਼ ਕਨਫਿਗਰੇਸ਼ਨ ਚੋਣ ਕਰੋ:

### General Settings {#general-settings}

**Ultimate Multisite > Settings** 'ਤੇ ਜਾਓ ਅਤੇ ਇਹ ਕਨਫਿਗਰ ਕਰੋ:

- **Site name**: FitSite
- **Default role**: Administrator — ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਨੂੰ ਆਪਣੀ ਸਾਈਟ ਦੀ ਸਮੱਗਰੀ 'ਤੇ ਪੂਰਾ ਕੰਟਰੋਲ ਚਾਹੀਦਾ ਹੈ।
- **Registration**: ਯੂਜ਼ਰ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਨੂੰ ਐਨੇਬਲ ਕਰੋ ਤਾਂ ਜੋ ਸਟੂਡੀਓ ਮਾਲਕ ਖੁਦ ਸਾਈਨ ਅੱਪ ਹੋ ਸਕਣ।

### Email Configuration {#email-configuration}

ਤੁਹਾਡੇ ਸਿਸਟਮ ਈਮੇਲਾਂ ਨੂੰ ਤੁਹਾਡੇ ਨਿਸ਼ ਦੀ ਭਾਸ਼ਾ ਬੋਲਣੀ ਚਾਹੀਦੀ ਹੈ। **Ultimate Multisite > Settings > Emails** 'ਤੇ ਜਾਓ ਅਤੇ ਕਸਟਮਾਈਜ਼ ਕਰੋ:

- ਆਮ "your new site" ਭਾਸ਼ਾ ਨੂੰ ਫਿਟਨੈਸ-ਵਿਸ਼ੇਸ਼ ਸੰਦੇਸ਼ ਨਾਲ ਬਦਲੋ।
- ਉਦਾਹਰਨ ਸਵਾਗਤ ਵਿਸ਼ਾ: "ਤੁਹਾਡੀ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਵੈੱਬਸਾਈਟ ਤਿਆਰ ਹੈ"
- ਉਦਾਹਰਨ ਸਵਾਗਤ ਸਰੀਰ: ਉਨ੍ਹਾਂ ਦੇ ਸਟੂਡੀਓ, ਕਲਾਸਾਂ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਫਿਟਨੈਸ ਸਾਈਟ ਨਾਲ ਸ਼ੁਰੂਆਤ ਕਰਨ ਦਾ ਜ਼ਿਕਰ ਕਰੋ।

ਅਸੀਂ ਇਹਨਾਂ ਨੂੰ ਲੈਸਨ 8 (Customer Onboarding) ਵਿੱਚ ਹੋਰ ਸੁਧਾਰਾਂਗੇ, ਪਰ ਹੁਣੇ ਹੀ ਟੋਨ ਸੈੱਟ ਕਰਨਾ ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਸ਼ੁਰੂਆਤੀ ਟੈਸਟ ਸਾਈਨਅੱਪ ਵੀ ਨਿਸ਼-ਵਿਸ਼ੇਸ਼ ਮਹਿਸੂਸ ਹੋਣ।

### Domain Configuration {#domain-configuration}

ਜੇ ਤੁਸੀਂ ਇੱਕ ਕੰਪੈਟਿਬਲ ਹੋਸਟਿੰਗ ਪ੍ਰੋਵਾਈਡਰ ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਹੁਣੇ ਡੋਮੇਨ ਮੈਪਿੰਗ ਕਨਫਿਗਰ ਕਰੋ:

1. **Ultimate Multisite > Settings > Domain Mapping** 'ਤੇ ਜਾਓ।
2. ਆਪਣੇ ਖਾਸ ਹੋਸਟ ਲਈ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਗਾਈਡ 'ਤੇ ਪਾਲਣਾ ਕਰੋ।
3. ਟੈਸਟ ਕਰੋ ਕਿ ਨਵੇਂ ਸਬਸਾਈਟਾਂ ਨੂੰ ਆਟੋਮੈਟਿਕ ਤੌਰ 'ਤੇ SSL ਮਿਲ ਰਿਹਾ ਹੈ।

ਇਹ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ ਕਿ ਜਦੋਂ ਅਸੀਂ ਅਗਲੇ ਲੈਸਨ ਵਿੱਚ ਟੈਂਪਲੇਟ ਅਤੇ ਟੈਸਟ ਸਾਈਟ ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰਾਂਗੇ, ਤਾਂ ਸਭ ਕੁਝ ਸ਼ੁਰੂ ਤੋਂ ਅੰਤ ਤੱਕ ਕੰਮ ਕਰਦਾ ਹੈ।

## FitSite ਨੈੱਟਵਰਕ ਹੁਣ ਤੱਕ {#the-fitsite-network-so-far}

ਇਸ ਲੈਸਨ ਦੇ ਅੰਤ ਵਿੱਚ, ਇਹ ਹੈ ਜੋ ਤੁਹਾਡੇ ਕੋਲ ਹੈ:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## ਇਸ ਲੈਸਨ ਵਿੱਚ ਅਸੀਂ ਕੀ ਬਣਾਇਆ {#what-we-built-this-lesson}

- ਸਬਡੋਮੇਨ ਮੋਡ ਵਿੱਚ ਇੱਕ ਕੰਮ ਕਰਦਾ WordPress Multisite
- FitSite ਬ੍ਰਾਂਡਿੰਗ ਨਾਲ ਇੰਸਟਾਲ ਅਤੇ ਕਨਫਿਗਰ ਕੀਤਾ Ultimate Multisite
- ਇੱਕ ਵੱਡੇ ਨੈੱਟਵਰਕ ਲਈ ਸੈੱਟ ਕੀਤਾ ਹੋਇਆ ਹੋਸਟਿੰਗ ਅਤੇ SSL
- ਤੁਹਾਡੇ ਹੋਸਟਿੰਗ ਪ੍ਰੋਵਾਈਡਰ ਲਈ ਕਨਫਿਗਰ ਕੀਤਾ ਡੋਮੇਨ ਮੈਪਿੰਗ
- ਦਿਨ ਇੱਕ ਤੋਂ ਹੀ ਨਿਸ਼-ਵਿਸ਼ੇਸ਼ ਈਮੇਲ ਟੋਨ

---

**ਅਗਲਾ:** [Lesson 4: Building Niche Templates](lesson-4-templates) — ਅਸੀਂ ਸਾਈਟ ਟੈਂਪਲੇਟ ਬਣਾਵਾਂਗੇ ਜੋ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕ ਅਸਲ ਵਿੱਚ ਵਰਤਣਾ ਚਾਹਣਗੇ।
