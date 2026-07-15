---
id: wu_sso_url
title: فیلتر - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# فیلتر: wu_sso_url

دومین‌لر آراسی موشتری عمللری اوچون قایتاریلماقدان قاباق یارادیلان SSO URL-لری فیلتر ائدیر.

بیر انتقراسیون، Ultimate Multisite-ین توکن دوغرولاماسینی قورویاراق، sovereign-tenant SSO لینکینه ائتیبارلی باغلام آرتیرمالی یا broker URL-نی دَییشدیرملی اولاندا بو فیلتر‌دن ایشلدین.

## پارامترلر {#parameters}

| آد | نوع | توضیح |
|------|------|-------------|
| $sso_url | `string` | یارادیلان SSO URL. |
| $user | `WP_User` | SSO گوروشو ایله کیملیگی دوغرولاناجاق ایشلدن. |
| $site_id | `int` | گوروش اوچون هدف سایت ID-سی. |
| $redirect_to | `string` | اوغورلو SSO دوغرولاماسیندان سونرا مقصد URL. |

### بو نسخه‌دن {#since}

- 2.13.0

### منبع {#source}

`inc/sso/class-sso.php` ایچینده تعریف اولونوب.


## قایتاریر {#returns}

فیلتر اولونموش SSO URL.
