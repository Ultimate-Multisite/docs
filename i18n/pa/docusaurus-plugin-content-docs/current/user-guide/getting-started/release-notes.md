---
title: ਨਿਕਾਸੀ ਨੋਟਾਂ
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# ਰਿਲੀਜ਼ ਨੋਟਸ

## ਵਰਜ਼ਨ 2.12.0 — 2026-05-15 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ

- ਨਵਾਂ: Hostinger (hPanel) ਨੂੰ ਸਪੋਰਟ ਕੀਤਾ ਗਿਆ ਹੋਸਟ ਪ੍ਰੋਵਾਈਡਰ ਵਜੋਂ ਜੋੜਿਆ ਗਿਆ ਹੈ, ਜਿਸ ਵਿੱਚ ਡੋਮੇਨ ਮੈਪਿੰਗ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਵੀ ਸ਼ਾਮਲ ਹੈ।
- ਨਵਾਂ: Site Exporter ਹੁਣ ਨੈਟਵਰਕ-ਵਾਈਡ ਸਾਈਟ ਰੀਸਟੋਰੇਸ਼ਨ ਲਈ ਸੂਚੀਬੱਧ ਨੈਟਵਰਕ ਇੰਪੋਰਟ ਬੰਡਲ ਨੂੰ ਹੈਂਡਲ ਕਰਦਾ ਹੈ।
- ਸੁਧਾਰ: BCC ਬ੍ਰੌਡਕਾਸਟ ਈਮੇਲਾਂ ਹੁਣ ਰਿਸੀਪੀਐਂਟ ਦੇ ਪਤੇ ਖੁੱਲ੍ਹ ਕੇ ਨਾ ਮਿਲਣ ਲਈ ਇੱਕ ਅਣਜਾਣ (undisclosed-recipients) ਹੈੱਡਰ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ।
- ਸੁਧਾਰ: ਮੈਂਬਰਸ਼ਿਪ ਦੀ Expiration Date ਹੁਣ ਗੈਰ-ਮਿਤੀ (non-date) ਮੁੱਲ ਨਾਲ ਸੇਵ ਕਰਨ 'ਤੇ ਖਰਾਬ ਨਹੀਂ ਹੁੰਦੀ।
- ਸੁਧਾਰ: Stripe ਮੈਂਬਰਸ਼ਿਪ ਅਪਡੇਟ ਹੁਣ ਡੀਪ੍ਰੀਕੇਟਿਡ deleteDiscount API ਨੂੰ ਕਾਲ ਕੀਤੇ ਬਿਨਾਂ ਸਹੀ ਤਰ੍ਹਾਂ ਡਿਸਕਾਊਂਟ ਸਾਫ਼ ਕਰਦੇ ਹਨ।
- ਸੁਧਾਰ: Domain-mapped sites 'ਤੇ SSO ਰੀਡਾਇਰੈਕਟ ਹੁਣ ਅਨੰਤ ਰੀਡਾਇਰੈਕਟ ਲੂਪ ਨੂੰ ਰੋਕਣ ਲਈ ਸੀਮਤ (capped) ਹਨ।
- ਸੁਧਾਰ: Setup wizard image picker ਦੀ ਚੋਣ ਹੁਣ ਪਿਛਲੇ ਲੇਅਰ ਦੇ ਡਾਟਾ ਮਾਡਲ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਅਪਡੇਟ ਕਰਦੀ ਹੈ।
- ਸੁਧਾਰ: Site Exporter CLI ਹੁਣ ਸਹੀ ਡਿਫਾਲਟ ਨੈਟਵਰਕ ਸਾਈਟ ਸਿਲੈਕਸ਼ਨ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਦਾ ਹੈ।
- ਸੁਧਾਰਿਆ ਗਿਆ: ਪਲੱਗਇਨ ਪੈਕੇਜ ਵਿੱਚ ਬੰਡਲਡ wp-cli ਹਟਾ ਦਿੱਤਾ ਗਿਆ ਹੈ, ਜਿਸ ਨਾਲ ਪਲੱਗਇਨ ਦਾ ਆਕਾਰ ਘਟ ਗਿਆ ਹੈ।

## ਵਰਜ਼ਨ 2.11.0 — 2026-05-11 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ

- ਨਵਾਂ: Site exports ਹੁਣ ਇੱਕ ਸੈਲਫ-ਬੂਟਿੰਗ `index.php` ਬੰਡਲ ਕਰਦੇ ਹਨ, ਤਾਂ ਜੋ ZIP ਨੂੰ ਵੱਖਰੇ ਪਲੱਗਇਨ ਇੰਸਟਾਲ ਕੀਤੇ ਬਿਨਾਂ ਇੱਕ ਤਾਜ਼ੇ ਹੋਸਟ 'ਤੇ ਇੰਸਟਾਲ ਕੀਤਾ ਜਾ ਸਕੇ।
- ਨਵਾਂ: ਨੈਟਵਰਕ export ਐਡਮਿਨਰੇਟਰਾਂ ਨੂੰ Site Export ਐਡਮਿਨ ਪੇਜ ਤੋਂ ਸਾਰੇ ਸਬਸਾਈਟਾਂ ਨੂੰ ਇੱਕ ਸਿੰਗਲ ਆਰਕਾਈਵ ਵਿੱਚ export ਕਰਨ ਦਿੰਦਾ ਹੈ।
- ਨਵਾਂ: Site Templates plan toggle ਨੂੰ ਹੁਣ ਇੱਕ ਫਾਲਬੈਕ 체ਨ ਰਾਹੀਂ ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਜੋ ਪਲਾਨ ਸੀਮਾਵਾਂ ਲਈ ਟੈਂਪਲੇਟ ਦੀ ਉਪਲਬਧਤਾ ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਸੀਮਤ ਕਰਦਾ ਹੈ।
- ਨਵਾਂ: Checkout form editor ਚੇਤਾਵਨੀ ਦਿੰਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਪ੍ਰੋਡਕਟ ਇੱਕ ਜ਼ਰੂਰੀ ਫੀਲਡ (required field) ਸੈਟਅਪ ਕੀਤੇ ਬਿਨਾਂ ਜੋੜਿਆ ਜਾਂਦਾ ਹੈ।
- ਨਵਾਂ: Import/Export settings tab ਹੁਣ ਆਪਣੇ ਦਾਇਰੇ (scope) ਦਾ ਸਪਸ਼ਟ ਵਰਣਨ ਕਰਦਾ ਹੈ ਅਤੇ ਸਿੱਧਾ Site Export ਟੂਲ ਨਾਲ ਲਿੰਕ ਕਰਦਾ ਹੈ।

## ਵਰਜ਼ਨ 2.10.0 — 2026-05-05 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ

- ਨਵਾਂ: PayPal ਲਈ ਮੈਨੂਅਲ ਕ੍ਰੈਡੈਂਸ਼ਲ ਐਂਟਰੀ ਵਾਲਾ ਗਾਈਡਡ ਸੈਟਅਪ ਵਿਜ਼ਾਰਡ, ਜੋ ਕਿ OAuth ਫਲੈਗ ਗੇਟ ਨਾਲ ਸਹਿਜ ਗੇਟਵੇ ਕਨਫਿਗਰੇਸ਼ਨ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।
- ਨਵਾਂ: Template switch ਕਸਟਮਰ ਪੈਨਲ ਨੂੰ current-template ਕਾਰਡ, ਪਰਸਿਸਟੈਂਟ ਗ੍ਰਿਡ, ਅਤੇ **Reset current template** ਬਟਨ ਨਾਲ ਮੁੜ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Template ਸਵਿਚਿੰਗ ਹੁਣ AJAX failure 'ਤੇ UI ਨੂੰ ਰੋਕ ਨਹੀਂ ਦਿੰਦੀ।
- ਸੁਧਾਰ: Template ਸਵਿਚਿੰਗ ਪਰਮਿਸ਼ਨ ਸਟੇਟਸ ਨੂੰ ਅਣਅਧਿਕਾਰਤ ਪਹੁੰਚ ਤੋਂ ਸੁਰੱਖਿਅਤ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Site override inputs ਨੂੰ ਸੇਵ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵੈਲੀਡੇਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: Billing address prompt ਹੁਣ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ ਜਦੋਂ ਪਤਾ ਖਾਲੀ ਹੁੰਦਾ ਹੈ।
- ਸੁਧਾਰ: PHP 8.1 null-to-string deprecation notices ਨੂੰ ਹੱਲ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Currents lazy-loaded before init hook ਨੂੰ ਟਾਈਮਿੰਗ ਦੇ ਮੁੱਦਿਆਂ ਨੂੰ ਰੋਕਣ ਲਈ।
- ਸੁਧਾਰ: Filtered SSO path ਨੂੰ ਸਾਰੇ ਲੌਗਇਨ ਫਲੋਜ਼ ਵਿੱਚ ਸਤਿਕਾਰ ਦਿੱਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Blank site identity options ਨੂੰ ਸੇਵ ਕਰਨ 'ਤੇ ਬਰਕਰਾਰ ਰੱਖਿਆ ਗਿਆ ਹੈ।

## ਵਰਜ਼ਨ 2.9.0 — 2026-04-30 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ

- ਨਵਾਂ: **Tools > Export & Import** ਹੇਠਾਂ ਸਿੰਗਲ-ਸਾਈਟ export ਅਤੇ import ਜੋੜਿਆ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Export ZIP ਫਾਈਲਾਂ ਨੂੰ ਹੁਣ ਇੱਕ ਅਥੈਂਟੀਕੇਟਿਡ ਡਾਊਨਲੋਡ ਐਂਡਪੁਆਇੰਟ ਰਾਹੀਂ ਸਰਵਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: ਪੈਂਡਿੰਗ export/import queries ਵਿੱਚ SQL injection ਦਾ ਜੋਖਮ ਅਤੇ query ਮੁੱਦੇ ਸੁਧਾਰੇ ਗਏ ਹਨ।
- ਸੁਧਾਰ: ਜਦੋਂ ਐਡਮਿਨ ਕਸਟਮਰ ਈਮੇਲ ਨੂੰ ਮੈਨੂਅਲੀ ਵੈਰੀਫਾਈ ਕਰਦਾ ਹੈ ਤਾਂ ਪੈਂਡਿੰਗ ਸਾਈਟ ਪਬਲਿਸ਼ ਨਹੀਂ ਹੁੰਦੀ।
- ਸੁਧਾਰ: ਮੈਂਬਰਸ਼ਿਪ ਗਾਇਬ ਹੋਣ 'ਤੇ Orphaned pending_site records ਨੂੰ ਸਾਫ਼ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Settings navigation padding ਅਤੇ search anchor navigation ਨੂੰ ਸੁਧਾਰਿਆ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: ਪੈਂਡਿੰਗ ਸਾਈਟਾਂ ਨੂੰ ਹੁਣ All Sites view ਵਿੱਚ ਪਹਿਲਾਂ ਦਿਖਾਇਆ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: Screenshot provider (mShots) ਲਈ User-Agent ਹੈੱਡਰ ਜੋੜਿਆ ਗਿਆ ਹੈ ਤਾਂ ਜੋ 403 errors ਨੂੰ ਰੋਕਿਆ ਜਾ ਸਕੇ।
- ਸੁਧਾਰ: Import cron schedule ਦੀ ਸਰਕੂਲਰ ਡਿਪੈਂਡੈਂਸੀ ਹੱਲ ਕੀਤੀ ਗਈ ਹੈ।
- ਸੁਧਾਰ: Tour IDs ਨੂੰ ਯੂਜ਼ਰ ਸੈਟਿੰਗਜ਼ ਕੀਜ਼ ਵਿੱਚ ਅੰਡਰਸਕੋਰਾਂ (underscores) ਵਿੱਚ ਨਾਰਮਲਾਈਜ਼ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰਿਆ ਗਿਆ: ਬਿਹਤਰ ਕੰਪੈਟਿਬਿਲਿਟੀ ਲਈ Alchemy/Zippy ਦੀ ਬਜਾਏ ZipArchive ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਗਈ ਹੈ।

## ਵਰਜ਼ਨ 2.8.0 — 2026-04-29 ਨੂੰ ਰਿਲੀਜ਼ ਕੀਤਾ ਗਿਆ

- ਨਵਾਂ: Other Options settings UI ਵਿੱਚ Enable Jumper toggle ਜੋੜਿਆ ਗਿਆ ਹੈ।
- ਨਵਾਂ: checkout forms list table ਵਿੱਚ Status column ਜੋੜਿਆ ਗਿਆ ਹੈ।
- ਨਵਾਂ: ਕਸਟਮ MU-plugin sunrise extensions ਲਈ Addon sunrise file loader।
- ਸੁਧਾਰਿਆ ਗਿਆ: settings page ਤੋਂ error-reporting opt-in ਸੈਟਿੰਗ ਹਟਾ ਦਿੱਤੀ ਗਈ ਹੈ।
- ਸੁਧਾਰ: Thank-you page site card — image ਹੁਣ ਸੀਮਤ (constrained) ਹੈ ਅਤੇ ਲਿੰਕ ਸਹੀ ਢੰਗ ਨਾਲ ਸਟਾਈਲ ਕੀਤੇ ਗਏ ਹਨ।
- ਸੁਧਾਰ: Screenshot provider ਨੂੰ thum.io ਤੋਂ WordPress.com mShots ਵਿੱਚ ਬਦਲਿਆ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Enable Registration ਅਤੇ Default Role ਹੁਣ ਤਾਜ਼ੇ ਇੰਸਟਾਲ 'ਤੇ ਸਹੀ ਡਿਫਾਲਟ ਸੈੱਟ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।
- ਸੁਧਾਰ: `get_site_url()` ਹੁਣ ਖਾਲੀ ਨਹੀਂ ਵਾਪਸ ਕਰਦਾ ਜਦੋਂ ਡੋਮੇਨ ਵਿੱਚ ਪੋਰਟ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ।
- ਸੁਧਾਰ: Clone media files ਹੁਣ ਸਹੀ ਢੰਗ ਨਾਲ ਕਾਪੀ ਕੀਤੇ ਜਾਂਦੇ ਹਨ ਜਦੋਂ `copy_media` ਸੈਟਿੰਗ ਖਾਲੀ ਹੁੰਦੀ ਹੈ।
- ਸੁਧਾਰ: Object cache ਨੂੰ network-activate sitemeta write ਤੋਂ ਬਾਅਦ ਸਹੀ ਢੰਗ ਨਾਲ ਇਨਵੈਲੀਡੇਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: 3-part domains ਲਈ DNS verification 'ਤੇ ਕਸਟਮ domain ਨੂੰ ਪ੍ਰਾਇਮਰੀ ਵਜੋਂ ਆਟੋ-ਪ੍ਰਮੋਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: ਜਦੋਂ Expiration Payment ਨੂੰ ਸਾਫ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਤਾਂ ਪੈਂਡਿੰਗ ਮੈਂਬਰਸ਼ਿਪ ਰੱਦ ਹੋ ਜਾਂਦੀ ਹੈ।
- ਸੁਧਾਰ: Password strength checker ਨੂੰ inline login prompt ਨੂੰ ਛੱਡਣ ਤੋਂ ਬਾਅਦ ਮੁੜ ਬੰਧਨ (rebound) ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: Thank-you page 'ਤੇ ਅਨੰਤ ਪੇਜ ਰੀਲੋਡ ਰੁਕ ਗਿਆ ਹੈ ਜਦੋਂ ਸਾਈਟ ਪਹਿਲਾਂ ਹੀ ਬਣਾ ਦਿੱਤੀ ਗਈ ਹੈ।
- ਸੁਧਾਰ: WP core registration option ਨੂੰ ਪਲੱਗਇਨ ਐਕਟੀਵੇਸ਼ਨ ਅਤੇ ਸੈਟਿੰਗ ਸੇਵ 'ਤੇ ਸਿੰਕ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: PHP 8.4 ਕੰਪੈਟਿਬਿਲਟੀ ਲਈ `calculate_expiration` ਵਿੱਚ Null expiration guard ਜੋੜਿਆ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: ਜਦੋਂ ਕਸਟਮਰ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਇੱਕ ਐਕਟਿਵ ਮੈਂਬਰਸ਼ਿਪ ਹੁੰਦੀ ਹੈ ਤਾਂ ਡੁਪਲੀਕੇਟ ਸਾਈਨਅੱਪ ਰੋਕ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: checkout ਵਿੱਚ `date_expiration` ਲਈ Null check ਜੋੜਿਆ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Site provisioning ਨੂੰ ਹੋਰ ਮਜ਼ਬੂਤ (hardened) ਕੀਤਾ ਗਿਆ ਹੈ — ਸੀਮਾਵਾਂ, ਮੈਂਬਰਸ਼ਿਪ ਅਨੁਮਾਨ, ਡੋਮੇਨ ਪ੍ਰਮੋਸ਼ਨ।
- ਸੁਧਾਰ: Pre-install check status label ਨੂੰ check failure 'ਤੇ NOT Activated ਸਹੀ ਢੰਗ ਨਾਲ ਸਹੀ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: Email verification URLs ਲਈ checkout domain ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।
- ਸੁਧਾਰ: ਜਦੋਂ ਕੋਈ ਪਾਸਵਰਡ ਫੀਲਡ ਨਹੀਂ ਹੁੰਦੀ ਤਾਂ checkout ਤੋਂ ਬਾਅਦ ਆਟੋ-ਲੌਗਇਨ।
- ਸੁਧਾਰ: Free memberships ਹੁਣ Expiration ਨਹੀਂ ਹੁੰਦੀਆਂ — ਇਨ੍ਹਾਂ ਨੂੰ ਲਾਈਫਟਾਈਮ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।
- ਸੁਧਾਰ: Email verification gate ਸਾਈਟ ਨੂੰ ਪਬਲਿਸ਼ ਹੋਣ ਤੋਂ ਰੋਕਦਾ ਹੈ ਜਦੋਂ ਤੱਕ ਕਸਟਮਰ ਈਮੇਲ ਵੈਰੀਫਾਈ ਨਹੀਂ ਕਰਦਾ।
- ਸੁਧਾਰ: SES v2 API endpoint base path ਅਤੇ identity route ਨੂੰ ਸਹੀ ਕੀਤਾ ਗਿਆ ਹੈ।
- ਸੁਧਾਰ: `wu_inline_login_error` hook ਨੂੰ pre-submit catch block ਵਿੱਚ emit ਕੀਤਾ ਜਾਂਦਾ ਹੈ।
