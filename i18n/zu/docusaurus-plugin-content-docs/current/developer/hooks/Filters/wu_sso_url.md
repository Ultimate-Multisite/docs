---
id: wu_sso_url
title: Isihlungi - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Isihlungi: wu_sso_url {#filter-wussourl}

Sihluza ama-URL e-SSO akhiqiziwe ngaphambi kokuthi abuyiselwe ezenzweni zekhasimende ezinqamula izizinda.

Sebenzisa lesi sihlungi lapho ukuhlanganiswa kudinga ukwengeza umongo othenjwayo kusixhumanisi se-SSO se-tenant ozimele noma kushintshe i-URL ye-broker kuyilapho kugcinwa ukuqinisekiswa kwe-token kwe-Ultimate Multisite.

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $sso_url | `string` | I-URL ye-SSO ekhiqiziwe. |
| $user | `WP_User` | Umsebenzisi ozoqinisekiswa ukuvakasha kwe-SSO. |
| $site_id | `int` | I-ID yesayithi okuhloswe ukuvakashelwa kuyo. |
| $redirect_to | `string` | I-URL yendawo okuyiwa kuyo ngemva kokuqinisekiswa kwe-SSO okuphumelele. |

### Kusukela {#since}

- 2.13.0

### Umthombo {#source}

Kuchazwe ku-`inc/sso/class-sso.php`.


## Okubuyiswayo {#returns}

I-URL ye-SSO ehlungiwe.
