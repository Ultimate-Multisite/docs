---
id: wu_sso_url
title: فلٹر - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# فلٹر: wu_sso_url {#filter-wussourl}

کراس ڈومین کسٹمر کارروائیوں کے لیے واپس کیے جانے سے پہلے SSO URLs کو فلٹر کرتا ہے۔

یہ فلٹر اس وقت استعمال کریں جب کسی انضمام کو sovereign-tenant SSO لنک میں قابلِ اعتماد سیاق شامل کرنا ہو یا Ultimate Multisite کی ٹوکن توثیق برقرار رکھتے ہوئے broker URL تبدیل کرنا ہو۔

## پیرامیٹرز {#parameters}

| نام | قسم | وضاحت |
|------|------|-------------|
| $sso_url | `string` | تیار کردہ SSO URL۔ |
| $user | `WP_User` | وہ صارف جس کی SSO وزٹ کے ذریعے توثیق کی جائے گی۔ |
| $site_id | `int` | وزٹ کے لیے ہدف site ID۔ |
| $redirect_to | `string` | کامیاب SSO توثیق کے بعد منزل URL۔ |

### دستیاب از {#since}

- 2.13.0

### ماخذ {#source}

`inc/sso/class-sso.php` میں تعریف کیا گیا۔


## واپسی {#returns}

فلٹر کیا گیا SSO URL۔
