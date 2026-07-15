---
id: wu_sso_url
title: Süzgüç - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Domenlerara müşderi amallary üçin yzyna gaýtarylmazdan öň döredilen SSO URL-lerini süzýär.

Integrasiýa sovereign-tenant SSO baglanyşygyna ynamdar kontekst goşmaly ýa-da Ultimate Multisite-iň token barlagyny saklap, broker URL-ni çalyşmaly bolanda şu filter-i ulanyň.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $sso_url | `string` | Döredilen SSO URL. |
| $user | `WP_User` | SSO sapary arkaly autentifikasiýa ediljek ulanyjy. |
| $site_id | `int` | Sapar üçin nyşan site ID-si. |
| $redirect_to | `string` | Üstünlikli SSO barlagyndan soňky barmaly URL. |

### Wersiýadan bäri {#since}

- 2.13.0

### Çeşme {#source}

`inc/sso/class-sso.php` içinde kesgitlenen.


## Gaýtarýar {#returns}

Süzülen SSO URL.
