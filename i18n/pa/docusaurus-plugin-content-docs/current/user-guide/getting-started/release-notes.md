---
title: ਰੀਲਿਜ਼ ਨੋਟਸ
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# ਰਿਲੀਜ਼ ਨੋਟਸ

## ਵਰਜਨ 2.13.0 — 2026-06-05 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ {#version-2130--released-on-2026-06-05}

- ਨਵਾਂ: ਗਾਹਕ Account, checkout, billing, ਸਾਈਟ, ਚਲਾਨ, ਟੈਮਪਲੇਟ ਬਦਲਣ, ਅਤੇ ਡੋਮੇਨ ਮੈਪਿੰਗ ਫਲੋਜ਼ ਲਈ sovereign-tenant ਸਹਾਇਤਾ ਜੋੜੀ ਗਈ ਤਾਂ ਜੋ tenant ਨੈੱਟਵਰਕ managed ਕਾਰਵਾਈਆਂ ਲਈ ਗਾਹਕਾਂ ਨੂੰ ਮੁੱਖ ਸਾਈਟ ਵੱਲ ਵਾਪਸ ਭੇਜ ਸਕਣ।
- ਨਵਾਂ: ਆਵਰਤੀ ਮੈਂਬਰਸ਼ਿਪਾਂ ਲਈ renewal-credential ਜਾਂਚਾਂ ਜੋੜੀਆਂ ਗਈਆਂ ਤਾਂ ਜੋ gateways ਸੇਵ ਕੀਤੇ billing agreement, subscription, ਜਾਂ vault token ਗੁੰਮ ਹੋਣ 'ਤੇ auto-renewal ਨੂੰ ਅਯੋਗ ਕਰ ਸਕਣ।
- ਨਵਾਂ: pending ਸਾਈਟ ਬਣਾਉਣ ਲਈ HMAC-verified loopback publishing ਜੋੜੀ ਗਈ ਤਾਂ ਜੋ ਉਹਨਾਂ hosts 'ਤੇ checkout-to-site provisioning ਹੋਰ ਭਰੋਸੇਯੋਗ ਬਣੇ ਜਿੱਥੇ ਪਿਛੋਕੜ jobs ਵਿੱਚ ਦੇਰੀ ਹੁੰਦੀ ਹੈ।
- ਨਵਾਂ: SSO URLs, checkout-form base domains, ਅਤੇ automatic domain-record creation ਲਈ developer extension points ਜੋੜੇ ਗਏ।
- ਠੀਕ ਕੀਤਾ: SSO ਹੁਣ mapped domains, anonymous broker visits, logout, ਅਤੇ cross-plugin dependency conflicts ਵਿੱਚ ਹੋਰ ਭਰੋਸੇਯੋਗ ਹੈ।
- ਠੀਕ ਕੀਤਾ: pending ਸਾਈਟ ਬਣਾਉਣਾ ਹੁਣ stale publish flags ਤੋਂ ਮੁੜ ਸੰਭਲ ਜਾਂਦਾ ਹੈ ਅਤੇ ਗਾਹਕਾਂ ਨੂੰ site-creation ਸਕ੍ਰੀਨ 'ਤੇ ਫਸੇ ਛੱਡਣ ਤੋਂ ਬਚਦਾ ਹੈ।
- ਠੀਕ ਕੀਤਾ: shared checkout-form base domains ਲਈ domain records ਹੁਣ ਨਹੀਂ ਬਣਾਏ ਜਾਂਦੇ, ਅਤੇ ਜਦੋਂ ਕੋਈ integration ਸਰਗਰਮ ਨਹੀਂ ਹੁੰਦੀ ਤਾਂ unused host-provider background jobs ਛੱਡ ਦਿੱਤੇ ਜਾਂਦੇ ਹਨ।
- ਠੀਕ ਕੀਤਾ: Checkout, billing address, password reset, email verification, template switching, tours, ਅਤੇ customer dashboard ਦੇ edge cases ਹੁਣ ਆਮ ਗਾਹਕ ਫਲੋਜ਼ ਨੂੰ ਰੋਕਦੇ ਨਹੀਂ ਹਨ।
- ਠੀਕ ਕੀਤਾ: Broadcast emails ਹੁਣ recipients ਨੂੰ ਨਿੱਜੀ ਰੱਖਦੀਆਂ ਹਨ ਅਤੇ ਨਾਲ ਹੀ recipient lists ਜਾਂ mail transports ਅਸਫਲ ਹੋਣ 'ਤੇ SMTP/plugin fatal errors ਤੋਂ ਬਚਦੀਆਂ ਹਨ।
- ਠੀਕ ਕੀਤਾ: Membership renewals, expiration display, ਅਤੇ payment collection edge cases ਹੁਣ ਤੁਰੰਤ expirations, crashes, ਜਾਂ ਲੋੜੀਂਦੀਆਂ payments ਛੁੱਟਣ ਤੋਂ ਬਚਦੇ ਹਨ।
- ਸੁਧਾਰਿਆ: WordPress compatibility 7.0 ਤੱਕ ਟੈਸਟ ਕੀਤੀ ਗਈ ਹੈ, production Vue assets npm sources ਤੋਂ ਦੁਬਾਰਾ ਬਣਾਏ ਗਏ ਹਨ, ਅਤੇ Cypress end-to-end coverage ਹੁਣ ਹੋਰ checkout, setup, SSO, ਅਤੇ gateway flows ਦੀ ਜਾਂਚ ਕਰਦੀ ਹੈ।

## ਵਰਜਨ 2.12.0 — 2026-05-15 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ {#version-2120--released-on-2026-05-15}

- ਨਵਾਂ: Hostinger (hPanel) ਨੂੰ domain mapping integration ਨਾਲ ਇੱਕ supported host provider ਵਜੋਂ ਜੋੜਿਆ ਗਿਆ
- ਨਵਾਂ: Site Exporter ਹੁਣ streamlined network-wide ਸਾਈਟ restoration ਲਈ network import bundles ਸੰਭਾਲਦਾ ਹੈ
- ਠੀਕ ਕੀਤਾ: BCC broadcast emails ਹੁਣ recipient addresses ਉਘਾੜਨ ਤੋਂ ਰੋਕਣ ਲਈ undisclosed-recipients header ਵਰਤਦੀਆਂ ਹਨ
- ਠੀਕ ਕੀਤਾ: non-date value ਨਾਲ save ਕਰਨ 'ਤੇ membership expiration date ਹੁਣ ਖਰਾਬ ਨਹੀਂ ਹੁੰਦੀ
- ਠੀਕ ਕੀਤਾ: Stripe membership updates ਹੁਣ deprecated deleteDiscount API ਨੂੰ call ਕੀਤੇ ਬਿਨਾਂ discounts ਨੂੰ ਸਹੀ ਤਰ੍ਹਾਂ clear ਕਰਦੀਆਂ ਹਨ
- ਠੀਕ ਕੀਤਾ: domain-mapped sites 'ਤੇ SSO redirects ਹੁਣ infinite redirect loops ਰੋਕਣ ਲਈ capped ਹਨ
- ਠੀਕ ਕੀਤਾ: Setup wizard image picker selection ਹੁਣ underlying data model ਨੂੰ ਸਹੀ ਤਰ੍ਹਾਂ update ਕਰਦੀ ਹੈ
- ਠੀਕ ਕੀਤਾ: Site Exporter CLI ਹੁਣ ਸਹੀ default network site selection ਨੂੰ preserve ਕਰਦਾ ਹੈ
- ਸੁਧਾਰਿਆ: plugin package ਤੋਂ bundled wp-cli ਹਟਾਇਆ ਗਿਆ, ਜਿਸ ਨਾਲ plugin size ਘੱਟ ਹੋਇਆ

## ਵਰਜਨ 2.11.0 — 2026-05-11 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ {#version-2110--released-on-2026-05-11}

- ਨਵਾਂ: ਸਾਈਟ exports ਹੁਣ self-booting `index.php` ਸ਼ਾਮਲ ਕਰਦੇ ਹਨ ਤਾਂ ਜੋ ZIP ਨੂੰ ਵੱਖਰੇ plugin install ਤੋਂ ਬਿਨਾਂ fresh host 'ਤੇ install ਕੀਤਾ ਜਾ ਸਕੇ।
- ਨਵਾਂ: Network export administrators ਨੂੰ Site Export admin page ਤੋਂ ਇੱਕੋ archive ਵਿੱਚ ਸਾਰੀਆਂ subsites export ਕਰਨ ਦਿੰਦਾ ਹੈ।
- ਨਵਾਂ: Allow Site Templates plan toggle ਹੁਣ fallback chain ਰਾਹੀਂ ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਜੋ plan limits ਲਈ template availability ਨੂੰ ਸਹੀ ਤਰ੍ਹਾਂ restrict ਕਰਦਾ ਹੈ।
- ਨਵਾਂ: Checkout form editor ਚੇਤਾਵਨੀ ਦਿੰਦਾ ਹੈ ਜਦੋਂ required field configured ਕੀਤੇ ਬਿਨਾਂ product ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ।
- ਨਵਾਂ: Import/Export settings tab ਹੁਣ ਆਪਣਾ scope ਸਪਸ਼ਟ ਤੌਰ 'ਤੇ ਵੇਰਵਾ ਦਿੰਦਾ ਹੈ ਅਤੇ Site Export tool ਨਾਲ ਸਿੱਧਾ link ਕਰਦਾ ਹੈ।

## ਵਰਜਨ 2.10.0 — 2026-05-05 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ {#version-2100--released-on-2026-05-05}

- ਨਵਾਂ: seamless gateway configuration ਲਈ OAuth flag gate ਨਾਲ manual credential entry ਵਾਸਤੇ PayPal guided setup wizard।
- ਨਵਾਂ: Template switch customer panel ਨੂੰ current-template card, persistent grid, ਅਤੇ **ਮੌਜੂਦਾ ਟੈਮਪਲੇਟ ਰੀਸੈੱਟ ਕਰੋ** button ਨਾਲ redesigned ਕੀਤਾ ਗਿਆ।
- ਠੀਕ ਕੀਤਾ: Template switching ਹੁਣ AJAX failure 'ਤੇ UI ਨੂੰ hang ਨਹੀਂ ਕਰਦੀ।
- ਠੀਕ ਕੀਤਾ: Template switching permission states ਨੂੰ unauthorized access ਤੋਂ secure ਕੀਤਾ ਗਿਆ।
- ਠੀਕ ਕੀਤਾ: Site override inputs ਨੂੰ save ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ validate ਕੀਤਾ ਗਿਆ।
- ਠੀਕ ਕੀਤਾ: Billing address prompt ਹੁਣ address empty ਹੋਣ 'ਤੇ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।
- ਠੀਕ ਕੀਤਾ: PHP 8.1 null-to-string deprecation notices ਹੱਲ ਕੀਤੇ ਗਏ।
- ਠੀਕ ਕੀਤਾ: timing issues ਰੋਕਣ ਲਈ Currents ਨੂੰ init hook ਤੋਂ ਪਹਿਲਾਂ lazy-loaded ਕੀਤਾ ਗਿਆ।
- ਠੀਕ ਕੀਤਾ: Filtered SSO path ਨੂੰ ਸਾਰੇ login flows ਵਿੱਚ ਮੰਨਿਆ ਗਿਆ।
- ਠੀਕ ਕੀਤਾ: Blank site identity options save 'ਤੇ preserve ਕੀਤੇ ਗਏ।

## ਵਰਜਨ 2.9.0 — 2026-04-30 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ {#version-290--released-on-2026-04-30}

- ਨਵਾਂ: Single-site export ਅਤੇ import **Tools > Export & Import** ਹੇਠ ਜੋੜੇ ਗਏ।
- ਠੀਕ ਕੀਤਾ: Export ZIP files ਹੁਣ authenticated download endpoint ਰਾਹੀਂ serve ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।
- ਠੀਕ ਕੀਤਾ: pending export/import queries ਵਿੱਚ SQL injection risk ਅਤੇ query issues ਠੀਕ ਕੀਤੇ ਗਏ।
- ਠੀਕ ਕੀਤਾ: ਜਦੋਂ admin ਗਾਹਕ ਦੀ email ਨੂੰ manually verify ਕਰਦਾ ਹੈ ਤਾਂ pending ਸਾਈਟ publish ਨਹੀਂ ਹੁੰਦੀ।
- ਠੀਕ ਕੀਤਾ: membership ਗੁੰਮ ਹੋਣ 'ਤੇ orphaned pending_site records clean up ਕੀਤੇ ਗਏ।
- ਠੀਕ ਕੀਤਾ: Settings nav padding ਅਤੇ search anchor navigation ਠੀਕ ਕੀਤੇ ਗਏ।
- ਠੀਕ ਕੀਤਾ: Pending sites ਹੁਣ All Sites view ਵਿੱਚ ਪਹਿਲਾਂ ਦਿਖਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।
- ਠੀਕ ਕੀਤਾ: 403 errors ਰੋਕਣ ਲਈ Screenshot provider (mShots) User-Agent header ਜੋੜਿਆ ਗਿਆ।
- ਠੀਕ ਕੀਤਾ: Import cron schedule circular dependency ਹੱਲ ਕੀਤੀ ਗਈ।
- ਠੀਕ ਕੀਤਾ: Tour IDs ਨੂੰ user settings keys ਵਿੱਚ underscores ਵਜੋਂ normalise ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰਿਆ: ਬਿਹਤਰ compatibility ਲਈ ਹੁਣ Alchemy/Zippy ਦੀ ਥਾਂ ZipArchive ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

## ਵਰਜਨ 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- ਨਵਾਂ: Other Options ਸੈਟਿੰਗਾਂ UI ਵਿੱਚ Enable Jumper ਟੌਗਲ ਜੋੜਿਆ ਗਿਆ।
- ਨਵਾਂ: ਚੈਕਆਉਟ ਫਾਰਮਾਂ ਦੀ ਸੂਚੀ ਟੇਬਲ ਵਿੱਚ ਸਥਿਤੀ ਕਾਲਮ ਜੋੜਿਆ ਗਿਆ।
- ਨਵਾਂ: ਕਸਟਮ MU-plugin sunrise ਐਕਸਟੈਂਸ਼ਨਾਂ ਲਈ ਐਡਆਨ sunrise ਫਾਈਲ ਲੋਡਰ।
- ਸੁਧਾਰਿਆ: ਸੈਟਿੰਗਾਂ ਪੰਨੇ ਤੋਂ ਗਲਤੀ-ਰਿਪੋਰਟਿੰਗ opt-in ਸੈਟਿੰਗ ਹਟਾਈ ਗਈ।
- ਸੁਧਾਰ: ਧੰਨਵਾਦ ਪੰਨੇ ਦਾ ਸਾਈਟ ਕਾਰਡ — ਚਿੱਤਰ ਹੁਣ ਸੀਮਿਤ ਹੈ ਅਤੇ ਲਿੰਕ ਸਹੀ ਢੰਗ ਨਾਲ ਸਟਾਈਲ ਕੀਤੇ ਗਏ ਹਨ।
- ਸੁਧਾਰ: ਸਕ੍ਰੀਨਸ਼ਾਟ ਪ੍ਰਦਾਤਾ thum.io ਤੋਂ WordPress.com mShots 'ਤੇ ਬਦਲਿਆ ਗਿਆ।
- ਸੁਧਾਰ: Enable Registration ਅਤੇ Default Role ਹੁਣ ਨਵੀਂ ਇੰਸਟਾਲੇਸ਼ਨ 'ਤੇ ਸਹੀ ਡਿਫਾਲਟ ਸੈੱਟ ਕਰਦੇ ਹਨ।
- ਸੁਧਾਰ: `get_site_url()` ਹੁਣ ਡੋਮੇਨ ਵਿੱਚ ਪੋਰਟ ਸ਼ਾਮਲ ਹੋਣ 'ਤੇ ਖਾਲੀ ਵਾਪਸ ਨਹੀਂ ਕਰਦਾ।
- ਸੁਧਾਰ: ਜਦੋਂ `copy_media` ਸੈਟਿੰਗ ਖਾਲੀ ਸੀ, ਕਲੋਨ ਮੀਡੀਆ ਫਾਈਲਾਂ ਹੁਣ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਕਾਪੀ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।
- ਸੁਧਾਰ: ਨੈੱਟਵਰਕ-ਐਕਟੀਵੇਟ sitemeta ਲਿਖਤ ਤੋਂ ਬਾਅਦ ਆਬਜੈਕਟ ਕੈਸ਼ ਸਹੀ ਤਰ੍ਹਾਂ ਅਵੈਧ ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰ: 3-ਭਾਗ ਵਾਲੇ ਡੋਮੇਨਾਂ ਲਈ DNS ਪੁਸ਼ਟੀਕਰਨ 'ਤੇ ਕਸਟਮ ਡੋਮੇਨ ਆਪਣੇ ਆਪ ਪ੍ਰਾਈਮਰੀ ਵਜੋਂ ਪ੍ਰਮੋਟ ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰ: ਜਦੋਂ ਮਿਆਦ ਪੁੱਗੀ ਭੁਗਤਾਨ ਸਫ਼ਾਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਤਾਂ ਲੰਬਿਤ ਮੈਂਬਰਸ਼ਿਪ ਰੱਦ ਕੀਤੀ ਗਈ।
- ਸੁਧਾਰ: ਇਨਲਾਈਨ ਲੌਗਇਨ ਪ੍ਰੌਮਪਟ ਖਾਰਜ ਹੋਣ ਤੋਂ ਬਾਅਦ ਪਾਸਵਰਡ ਮਜ਼ਬੂਤੀ ਜਾਂਚਕਰਤਾ ਮੁੜ ਬਾਈਂਡ ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰ: ਜਦੋਂ ਸਾਈਟ ਪਹਿਲਾਂ ਹੀ ਬਣ ਚੁੱਕੀ ਹੋਵੇ ਤਾਂ ਧੰਨਵਾਦ ਪੰਨੇ 'ਤੇ ਅਨੰਤ ਪੰਨਾ ਰੀਲੋਡ ਰੋਕਿਆ ਗਿਆ।
- ਸੁਧਾਰ: WP core ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਵਿਕਲਪ plugin ਐਕਟੀਵੇਸ਼ਨ ਅਤੇ ਸੈਟਿੰਗਾਂ ਸੇਵ ਕਰਨ 'ਤੇ ਸਿੰਕ ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰ: PHP 8.4 ਅਨੁਕੂਲਤਾ ਲਈ `calculate_expiration` ਵਿੱਚ null ਮਿਆਦ ਗਾਰਡ ਜੋੜਿਆ ਗਿਆ।
- ਸੁਧਾਰ: ਜਦੋਂ ਗਾਹਕ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਸਰਗਰਮ ਮੈਂਬਰਸ਼ਿਪ ਹੋਵੇ ਤਾਂ ਡੁਪਲੀਕੇਟ ਸਾਈਨਅੱਪ ਰੋਕੇ ਗਏ।
- ਸੁਧਾਰ: ਚੈਕਆਉਟ ਵਿੱਚ `date_expiration` ਲਈ null ਜਾਂਚ ਜੋੜੀ ਗਈ।
- ਸੁਧਾਰ: ਸਾਈਟ ਪ੍ਰੋਵਿਜ਼ਨਿੰਗ ਮਜ਼ਬੂਤ ਕੀਤੀ ਗਈ — ਸੀਮਾਵਾਂ, ਮੈਂਬਰਸ਼ਿਪ ਅਨੁਮਾਨ, ਡੋਮੇਨ ਪ੍ਰਮੋਸ਼ਨ।
- ਸੁਧਾਰ: ਪ੍ਰੀ-ਇੰਸਟਾਲ ਜਾਂਚ ਸਥਿਤੀ ਲੇਬਲ ਜਦੋਂ ਜਾਂਚ ਅਸਫਲ ਹੋਵੇ ਤਾਂ NOT Activated ਵਜੋਂ ਠੀਕ ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰ: ਈਮੇਲ ਪੁਸ਼ਟੀਕਰਨ URL ਲਈ ਚੈਕਆਉਟ ਡੋਮੇਨ ਵਰਤਿਆ ਗਿਆ।
- ਸੁਧਾਰ: ਜਦੋਂ ਕੋਈ ਪਾਸਵਰਡ ਫੀਲਡ ਮੌਜੂਦ ਨਹੀਂ ਹੁੰਦੀ ਤਾਂ ਚੈਕਆਉਟ ਤੋਂ ਬਾਅਦ ਆਟੋ-ਲੌਗਇਨ।
- ਸੁਧਾਰ: ਮੁਫ਼ਤ ਮੈਂਬਰਸ਼ਿਪਾਂ ਦੀ ਹੁਣ ਮਿਆਦ ਨਹੀਂ ਪੁੱਗਦੀ — ਜੀਵਨਕਾਲ ਵਜੋਂ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: ਈਮੇਲ ਪੁਸ਼ਟੀਕਰਨ ਗੇਟ ਸਾਈਟ ਪ੍ਰਕਾਸ਼ਨ ਨੂੰ ਗਾਹਕ ਵੱਲੋਂ ਈਮੇਲ ਪੁਸ਼ਟੀ ਕਰਨ ਤੱਕ ਰੋਕਦਾ ਹੈ।
- ਸੁਧਾਰ: SES v2 API ਐਂਡਪੋਇੰਟ ਬੇਸ ਪਾਥ ਅਤੇ ਪਛਾਣ ਰੂਟ ਠੀਕ ਕੀਤਾ ਗਿਆ।
- ਸੁਧਾਰ: `wu_inline_login_error` hook ਪ੍ਰੀ-ਸਬਮਿਟ catch ਬਲੌਕ ਵਿੱਚ ਉਤਸਰਜਿਤ ਕੀਤਾ ਗਿਆ।
