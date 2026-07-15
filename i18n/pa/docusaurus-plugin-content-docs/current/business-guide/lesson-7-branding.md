---
title: 'ਪਾਠ ੭: ਇਸਨੂੰ ਆਪਣਾ ਬਣਾਉਣਾ'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lesson 7: ਇਸਨੂੰ ਆਪਣਾ ਬਣਾਉਣਾ (Making It Yours)

ਤੁਹਾਡੇ ਗਾਹਕ ਕਦੇ ਵੀ ਇਹ ਮਹਿਸੂਸ ਨਹੀਂ ਕਰਨੇ ਚਾਹੀਦੇ ਕਿ ਉਹ "ਕੋਈ WordPress plugin" ਵਰਤ ਰਹੇ ਹਨ। ਉਨ੍ਹਾਂ ਨੂੰ ਇਹ ਮਹਿਸੂਸ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਕਿ ਉਹ FitSite ਵਰਤ ਰਹੇ ਹਨ — ਇੱਕ ਪਲੇਟਫਾਰਮ ਜੋ ਖਾਸ ਤੌਰ 'ਤੇ ਉਨ੍ਹਾਂ ਦੇ ਇੰਡਸਟਰੀ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ। ਇਹ ਲੈਸਨ ਬ੍ਰਾਂਡਿੰਗ, ਵ੍ਹਾਈਟ-ਲੇਬਲਿੰਗ (white-labeling), ਅਤੇ ਪਲੇਟਫਾਰਮ ਨੂੰ ਇੱਕ ਪੂਰੇ ਪ੍ਰੋਡਕਟ ਵਾਂਗ ਮਹਿਸੂਸ ਕਰਵਾਉਣ ਬਾਰੇ ਗੱਲ ਕਰਦਾ ਹੈ।

## ਜਿੱਥੇ ਅਸੀਂ ਰੁਕੇ ਸੀ (Where We Left Off) {#where-we-left-off}

FitSite ਕੋਲ ਇੱਕ ਕੰਮ ਕਰਦਾ checkout flow ਹੈ ਜੋ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਨੂੰ ਪਲਾਨ ਚੁਣਨ ਤੋਂ ਲੈ ਕੇ ਇੱਕ ਲਾਈਵ ਸਾਈਟ ਤੱਕ ਲੈ ਜਾਂਦਾ ਹੈ। ਹੁਣ ਅਸੀਂ ਪੂਰੇ ਅਨੁਭਵ ਨੂੰ ਇੱਕ ਇਕਜੁੱਟ, ਬ੍ਰਾਂਡਡ ਪ੍ਰੋਡਕਟ ਵਾਂਗ ਬਣਾਉਂਦੇ ਹਾਂ।

## ਤੁਹਾਡਾ ਪਲੇਟਫਾਰਮ ਡੋਮੇਨ (Your Platform Domain) {#your-platform-domain}

ਤੁਹਾਡੇ ਬ੍ਰਾਂਡ ਦੀ ਨੀਂਹ ਤੁਹਾਡਾ ਡੋਮੇਨ ਹੈ। FitSite ਲਈ:

- **ਮੇਨ ਡੋਮੇਨ**: `fitsite.com` (ਤੁਹਾਡੀ ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ ਅਤੇ ਨੈਟਵਰਕ ਰੂਟ)
- **ਗਾਹਕ ਸਾਈਟਾਂ**: `studioname.fitsite.com` (ਸਬਡੋਮੇਨ)
- **ਕਸਟਮ ਡੋਮੇਨ**: Growth ਅਤੇ Pro ਪਲਾਨਾਂ 'ਤੇ ਗਾਹਕ ਆਪਣਾ ਡੋਮੇਨ ਜੋੜ ਸਕਦੇ ਹਨ

### ਆਪਣੇ ਡੋਮੇਨ ਸੈੱਟ ਕਰਨਾ (Setting Up Your Domain) {#setting-up-your-domain}

1. ਆਪਣਾ ਪਲੇਟਫਾਰਮ ਡੋਮੇਨ ਰਜਿਸਟਰ ਕਰੋ
2. ਇਸਨੂੰ ਆਪਣੇ ਹੋਸਟਿੰਗ ਪ੍ਰੋਵਾਈਡਰ ਨਾਲ ਜੋੜੋ (Point it to your hosting provider)
3. ਗਾਹਕ ਸਬਡੋਮੇਨਾਂ ਲਈ wildcard DNS (`*.fitsite.com`) configure ਕਰੋ
4. ਯਕੀਨੀ ਬਣਾਓ ਕਿ wildcard SSL ਐਕਟਿਵ ਹੈ

ਵਿਸਤ੍ਰਿਤ ਨਿਰਦੇਸ਼ਾਂ ਲਈ [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) ਵੇਖੋ।

## ਐਡਮਿਨ ਅਨੁਭਵ ਨੂੰ ਵ੍ਹਾਈਟ-ਲੇਬਲ ਕਰਨਾ (White-Labeling the Admin Experience) {#white-labeling-the-admin-experience}

ਜਦੋਂ ਕੋਈ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕ ਆਪਣੀ ਸਾਈਟ ਦੇ ਡੈਸ਼ਬੋਰਡ ਵਿੱਚ ਲੌਗਇਨ ਕਰਦਾ ਹੈ, ਤਾਂ ਉਸਨੂੰ WordPress ਜਾਂ Ultimate Multisite ਦੀ ਬ੍ਰਾਂਡਿੰਗ ਨਹੀਂ, ਸਗੋਂ ਤੁਹਾਡਾ ਬ੍ਰਾਂਡ ਦਿਖਣਾ ਚਾਹੀਦਾ ਹੈ।

### ਕਸਟਮ ਲੌਗਇਨ ਪੇਜ (Custom Login Page) {#custom-login-page}

WordPress ਲੌਗਇਨ ਪੇਜ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ ਤਾਂ ਜੋ ਇਹ ਦਿਖਾਵੇ:

- ਤੁਹਾਡਾ FitSite ਲੋਗੋ
- ਫਿਟਨੈਸ-ਸਹੀ ਬੈਕਗ੍ਰਾਉਂਡ ਤਸਵੀਰਾਂ
- ਤੁਹਾਡੇ ਬ੍ਰਾਂਡ ਦੇ ਰੰਗ

### ਡੈਸ਼ਬੋਰਡ ਬ੍ਰਾਂਡਿੰਗ (Dashboard Branding) {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) ਐਡਨ ਨਾਲ ਜਾਂ ਕਸਟਮ CSS ਦੀ ਵਰਤੋਂ ਕਰੋ ਤਾਂ ਜੋ:

- WordPress ਲੋਗੋ ਨੂੰ ਆਪਣੇ FitSite ਲੋਗੋ ਨਾਲ ਬਦਲਿਆ ਜਾ ਸਕੇ
- ਐਡਮਿਨ ਕਲਰ ਸਕੀਮ ਨੂੰ ਆਪਣੇ ਬ੍ਰਾਂਡ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਬਣਾਇਆ ਜਾ ਸਕੇ
- ਫਿਟਨੈਸ-ਵਿਸ਼ੇਸ਼ ਛੋਟੇ ਲਿੰਕ ਅਤੇ ਸਹਾਇਤਾ ਸਰੋਤਾਂ ਵਾਲਾ ਇੱਕ ਕਸਟਮ ਡੈਸ਼ਬੋਰਡ widget ਜੋੜਿਆ ਜਾ ਸਕੇ

### ਕਸਟਮ ਐਡਮਿਨ ਪੇਜ (Custom Admin Pages) {#custom-admin-pages}

ਕਸਟਮ ਐਡਮਿਨ ਪੇਜ ਬਣਾਉਣ 'ਤੇ ਵਿਚਾਰ ਕਰੋ ਜੋ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਲਈ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਕਾਰਵਾਈਆਂ ਨੂੰ ਸਾਹਮਣੇ ਲਿਆਉਂਦੇ ਹਨ:

- "Edit Your Class Schedule" (ਆਪਣਾ ਕਲਾਸ ਸ਼ਡਿਊਲ ਐਡਿਟ ਕਰੋ)
- "Update Trainer Profiles" (ਟਰੇਨਰ ਪ੍ਰੋਫਾਈਲ ਅਪਡੇਟ ਕਰੋ)
- "View Your Site" (ਆਪਣੀ ਸਾਈਟ ਵੇਖੋ)

ਇਹ ਸਟੈਂਡਰਡ WordPress ਮੀਨੂ ਵਿੱਚ ਗੱਡੀਆਂ ਕਰਨ ਦੀ ਬਜਾਏ, ਖਾਸ ਤੌਰ 'ਤੇ ਜ਼ਰੂਰੀ ਕਾਰਵਾਈਆਂ ਨੂੰ ਸਭ ਤੋਂ ਅੱਗੇ ਰੱਖ ਕੇ ਸਿੱਖਣ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।

## ਆਪਣੀ ਕਮਿਊਨੀਕੇਸ਼ਨਾਂ ਨੂੰ ਬ੍ਰਾਂਡ ਕਰਨਾ (Branding Your Communications) {#branding-your-communications}

ਹਰ ਈਮੇਲ, ਇਨਵੌਇਸ, ਅਤੇ ਨੋਟੀਫਿਕੇਸ਼ਨ ਨੂੰ ਤੁਹਾਡੇ ਬ੍ਰਾਂਡ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ।

### ਸਿਸਟਮ ਈਮੇਲਾਂ (System Emails) {#system-emails}

**Ultimate Multisite > Settings > Emails** 'ਤੇ ਜਾਓ ਅਤੇ ਸਾਰੇ ਸਿਸਟਮ ਈਮੇਲਾਂ ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰੋ:

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: ਆਪਣੇ ਬ੍ਰਾਂਡ ਦੇ ਰੰਗਾਂ ਅਤੇ ਲੋਗੋ ਦੀ ਵਰਤੋਂ ਕਰੋ
- **Language**: ਪੂਰੀ ਤਰ੍ਹਾਂ ਫਿਟਨੈਸ-ਵਿਸ਼ੇਸ਼

ਕਸਟਮਾਈਜ਼ ਕਰਨ ਲਈ ਮੁੱਖ ਈਮੇਲਾਂ:

| Email | Generic Version | FitSite Version |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### ਇਨਵੌਇਸ (Invoices) {#invoices}

ਇਨਵੌਇਸ ਟੈਂਪਲੇਟਾਂ ਨੂੰ ਇਸ ਨਾਲ ਕਸਟਮਾਈਜ਼ ਕਰੋ:

- ਤੁਹਾਡਾ FitSite ਲੋਗੋ ਅਤੇ ਬ੍ਰਾਂਡ ਰੰਗ
- ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਦੇ ਵੇਰਵੇ
- ਫਿਟਨੈਸ-ਵਿਸ਼ੇਸ਼ ਪ੍ਰੋਡਕਟ ਨਾਮ (ਕੋਈ ਆਮ ਪਲਾਨ ID ਨਹੀਂ)

## ਗਾਹਕ-ਸਮ diện ਸਾਈਟ (The Customer-Facing Site) {#the-customer-facing-site}

ਤੁਹਾਡੇ ਮੇਨ ਡੋਮੇਨ (`fitsite.com`) ਨੂੰ ਇੱਕ ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ ਜੋ ਪਲੇਟਫਾਰਮ ਵੇਚਦੀ ਹੈ। ਇਹ Ultimate Multisite ਨੈਟਵਰਕ ਐਡਮਿਨ ਤੋਂ ਵੱਖ ਹੈ — ਇਹ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਦਾ ਜਨਤਕ ਚਿਹਰਾ ਹੈ।

ਮੁੱਖ ਪੇਜ:

- **Homepage**: ਫਿਟਨੈਸ ਕਾਰੋਬਾਰਾਂ ਲਈ ਸਪੱਸ਼ਟ ਮੁੱਲ ਦਾ ਵਾਅਦਾ (Clear value proposition)
- **Features**: FitSite ਕੀ ਕਰਦਾ ਹੈ, ਫਿਟਨੈਸ ਸ਼ਬਦਾਂ ਵਿੱਚ
- **Pricing**: ਨਿਸ਼ਚਿਤ-ਵਿਸ਼ੇਸ਼ ਫੀਚਰ ਤੁਲਨਾਵਾਂ ਵਾਲੇ ਤੁਹਾਡੇ ਤਿੰਨ ਪਲਾਨ
- **Examples**: ਪਲੇਟਫਾਰਮ 'ਤੇ ਬਣੀਆਂ ਸਾਈਟਾਂ ਦਾ ਪ੍ਰਦਰਸ਼ਨ
- **Sign Up**: ਤੁਹਾਡੇ checkout form ਦੇ ਲਿੰਕ

:::tip ਤੁਹਾਡੀ ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ ਇੱਕ ਨੈਟਵਰਕ ਸਾਈਟ ਹੋ ਸਕਦੀ ਹੈ
ਆਪਣੀ ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ ਨੂੰ ਆਪਣੇ ਨੈਟਵਰਕ ਵਿੱਚ ਇੱਕ ਸਾਈਟ ਵਜੋਂ ਬਣਾਓ। ਇਹ ਤੁਹਾਨੂੰ ਇਸਨੂੰ ਇੱਕੋ ਡੈਸ਼ਬੋਰਡ ਤੋਂ ਪ੍ਰਬੰਧਿਤ ਕਰਨ ਦਿੰਦਾ ਹੈ ਅਤੇ ਤੁਹਾਡੇ ਆਪਣੇ ਪਲੇਟਫਾਰਮ ਦੀਆਂ ਸਮਰੱਥਾਵਾਂ ਦਾ ਪ੍ਰਦਰਸ਼ਨ ਕਰਦਾ ਹੈ।
:::

## ਗਾਹਕਾਂ ਲਈ ਕਸਟਮ ਡੋਮੇਨ (Custom Domain for Customers) {#custom-domain-for-customers}

ਉਨ੍ਹਾਂ ਗਾਹਕਾਂ ਲਈ ਜਿਨ੍ਹਾਂ ਦੇ ਪਲਾਨਾਂ ਵਿੱਚ ਕਸਟਮ ਡੋਮੇਨ ਸ਼ਾਮਲ ਹਨ, ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਸਪੱਸ਼ਟ ਤੌਰ 'ਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਕਰੋ:

1. ਗਾਹਕ ਆਪਣੇ ਡੋਮੇਨ ਨੂੰ ਇੱਕ ਰਜਿਸਟਰਰ ਕੋਲ ਰਜਿਸਟਰ ਜਾਂ ਟ੍ਰਾਂਸਫਰ ਕਰਦਾ ਹੈ
2. ਗਾਹਕ DNS ਨੂੰ ਅਪਡੇਟ ਕਰਦਾ ਹੈ ਤਾਂ ਜੋ ਇਹ ਤੁਹਾਡੇ ਪਲੇਟਫਾਰਮ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰੇ (ਸਹੀ ਰਿਕਾਰਡ ਪ੍ਰਦਾਨ ਕਰੋ)
3. Ultimate Multisite ਡੋਮੇਨ मैपिंग ਅਤੇ SSL ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ

ਇਸ ਪ੍ਰਕਿਰਿਆ ਲਈ ਖਾਸ ਤੌਰ 'ਤੇ ਇੱਕ ਸਹਾਇਤਾ ਲੇਖ ਜਾਂ ਗਿਆਨ ਕੋਸ਼ (knowledge base entry) ਬਣਾਓ, ਜੋ ਗੈਰ-ਤਕਨੀਕੀ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਲਈ ਲਿਖਿਆ ਹੋਵੇ।

## FitSite ਨੈਟਵਰਕ ਹੁਣ ਤੱਕ (The FitSite Network So Far) {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## ਇਸ ਲੈਸਨ ਵਿੱਚ ਅਸੀਂ ਕੀ ਬਣਾਇਆ (What We Built This Lesson) {#what-we-built-this-lesson}

- ਇੱਕ ਬ੍ਰਾਂਡਡ ਅਨੁਭਵ ਲਈ **ਪਲੇਟਫਾਰਮ ਡੋਮੇਨ ਅਤੇ DNS** configure ਕੀਤੇ ਗਏ
- FitSite ਬ੍ਰਾਂਡਿੰਗ ਨਾਲ **ਵ੍ਹਾਈਟ-ਲੇਬਲ ਐਡਮਿਨ**
- **ਕਸਟਮਾਈਜ਼ਡ ਕਮਿਊਨੀਕੇਸ਼ਨਾਂ** — ਈਮੇਲਾਂ, ਇਨਵੌਇਸਾਂ, ਅਤੇ ਨੋਟੀਫਿਕੇਸ਼ਨ ਸਾਰੇ ਬ੍ਰਾਂਡ ਅਨੁਸਾਰ
- ਇੱਕ **ਮਾਰਕੀਟਿੰਗ ਸਾਈਟ** ਜੋ ਫਿਟਨੈਸ ਸਟੂਡੀਓ ਮਾਲਕਾਂ ਨੂੰ FitSite ਵੇਚਦੀ ਹੈ
- ਗਾਹਕਾਂ ਲਈ **ਕਸਟਮ ਡੋਮੇਨ ਦਸਤਾਵੇਜ਼ੀਕਰਨ** ਜਿਨ੍ਹਾਂ ਨੂੰ ਆਪਣਾ ਡੋਮੇਨ ਚਾਹੀਦਾ ਹੈ

---

**ਅਗਲਾ:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) — ਅਸੀਂ ਉਹ ਅਨੁਭਵ ਡਿਜ਼ਾਈਨ ਕਰਦੇ ਹਾਂ ਜੋ ਇੱਕ ਨਵੇਂ ਸਾਈਨਅੱਪ ਨੂੰ ਇੱਕ ਸਰਗਰਮ, ਖੁਸ਼ ਗਾਹਕ ਵਿੱਚ ਬਦਲ ਦਿੰਦਾ ਹੈ।
