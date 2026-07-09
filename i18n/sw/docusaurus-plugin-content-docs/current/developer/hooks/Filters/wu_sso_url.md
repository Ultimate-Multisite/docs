---
id: wu_sso_url
title: Kichujio - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Kichujio: wu_sso_url

Huchuja URL za SSO zilizozalishwa kabla ya kurejeshwa kwa vitendo vya wateja kati ya vikoa.

Tumia kichujio hiki wakati muunganisho unahitaji kuongeza muktadha unaoaminika kwenye kiungo cha SSO cha mpangaji huru au kubadilisha URL ya broker huku ukihifadhi uthibitishaji wa token wa Ultimate Multisite.

## Vigezo

| Jina | Aina | Maelezo |
|------|------|-------------|
| $sso_url | `string` | URL ya SSO iliyozalishwa. |
| $user | `WP_User` | Mtumiaji atakayethibitishwa na ziara ya SSO. |
| $site_id | `int` | ID ya tovuti lengwa kwa ziara hiyo. |
| $redirect_to | `string` | URL ya marudio baada ya uthibitishaji wa SSO kufanikiwa. |

### Tangu

- 2.13.0

### Chanzo

Imefafanuliwa katika `inc/sso/class-sso.php`.


## Hurejesha

URL ya SSO iliyochujwa.
