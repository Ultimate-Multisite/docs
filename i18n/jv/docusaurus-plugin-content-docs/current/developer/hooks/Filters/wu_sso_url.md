---
id: wu_sso_url
title: Saringan - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Saringan: wu_sso_url {#filter-wussourl}

Nyaring URL SSO sing digawe sadurunge dibalekake kanggo tumindak pelanggan lintas-domain.

Gunakake saringan iki nalika integrasi perlu nambah konteks kapercayan menyang pranala SSO tenant-berdaulat utawa ngganti URL broker kanthi tetep njaga validasi token Ultimate Multisite.

## Parameter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $sso_url | `string` | URL SSO sing digawe. |
| $user | `WP_User` | Panganggo sing bakal diautentikasi dening kunjungan SSO. |
| $site_id | `int` | ID situs tujuan kanggo kunjungan kasebut. |
| $redirect_to | `string` | URL tujuan sawisé validasi SSO kasil. |

### Wiwit {#since}

- 2.13.0

### Sumber {#source}

Ditetepake ing `inc/sso/class-sso.php`.


## Ngasilake {#returns}

URL SSO sing wis disaring.
