---
id: wu_sso_url
title: Saringan - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Nyaring URL SSO anu dihasilkeun saméméh dipulangkeun pikeun lampah palanggan lintas-domain.

Paké filter ieu nalika integrasi perlu nambahkeun kontéks dipercaya kana tautan SSO sovereign-tenant atawa ngaganti URL broker bari tetep ngajaga validasi token Ultimate Multisite.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | URL SSO anu dihasilkeun. |
| $user | `WP_User` | Pamaké anu bakal diauténtikasi ku kunjungan SSO. |
| $site_id | `int` | ID situs tujuan pikeun kunjungan éta. |
| $redirect_to | `string` | URL tujuan sanggeus validasi SSO hasil. |

### Ti saprak

- 2.13.0

### Sumber

Ditangtukeun dina `inc/sso/class-sso.php`.


## Mulangkeun

URL SSO anu geus disaring.
