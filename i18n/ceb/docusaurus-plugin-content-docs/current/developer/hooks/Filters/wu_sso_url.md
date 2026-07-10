---
id: wu_sso_url
title: Salain - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Salà: wu_sso_url {#filter-wussourl}

Mosala sa namugna nga mga SSO URL sa wala pa kini ibalik para sa cross-domain nga mga aksiyon sa kustomer.

Gamita kini nga salà kung ang usa ka integrasyon kinahanglan modugang og kasaligang konteksto sa usa ka SSO link sa sovereign-tenant o mopuli sa broker URL samtang gipreserba ang validation sa token sa Ultimate Multisite.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $sso_url | `string` | Namugna nga SSO URL. |
| $user | `WP_User` | Tiggamit nga i-authenticate pinaagi sa SSO nga pagbisita. |
| $site_id | `int` | ID sa gipunting nga websayt para sa pagbisita. |
| $redirect_to | `string` | Destinasyon nga URL human sa malampusong SSO validation. |

### Sukad {#since}

- 2.13.0

### Gigikanan {#source}

Gidefine sa `inc/sso/class-sso.php`.


## Mga Ibalik {#returns}

Nasala nga SSO URL.
