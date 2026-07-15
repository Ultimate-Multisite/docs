---
id: wu_sso_url
title: ফিল্টাৰ - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

ক্ৰছ-ডোমেইন গ্ৰাহক কাৰ্যৰ বাবে ঘূৰাই দিয়াৰ আগতে সৃষ্টি কৰা SSO URLs ফিল্টাৰ কৰে।

এটা সংযুক্তিকৰণে যদি sovereign-tenant SSO লিংকত বিশ্বাসযোগ্য প্ৰসঙ্গ যোগ কৰিব লাগে বা Ultimate Multisite's token validation সংৰক্ষণ কৰি broker URL সলনি কৰিব লাগে, তেন্তে এই ফিল্টাৰ ব্যৱহাৰ কৰক।

## পেৰামিটাৰসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | সৃষ্টি কৰা SSO URL। |
| $user | `WP_User` | SSO ভ্ৰমণৰ দ্বাৰা প্ৰমাণীকৃত হ’বলগীয়া ব্যৱহাৰকাৰী। |
| $site_id | `int` | ভ্ৰমণৰ বাবে লক্ষ্য চাইট ID। |
| $redirect_to | `string` | সফল SSO validation ৰ পিছৰ গন্তব্য URL। |

### যিহেতু {#since}

- 2.13.0

### উৎস {#source}

`inc/sso/class-sso.php`-ত সংজ্ঞায়িত।


## ঘূৰাই দিয়ে {#returns}

ফিল্টাৰ কৰা SSO URL।
