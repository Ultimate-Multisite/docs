---
id: wu_gocardless_cleanup_pending_site
title: Scagaire - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Scagaire: wu_gocardless_cleanup_pending_site

Gníomhaíonn sé sula scriostar suíomh ar feitheamh dílleachta do bhallraíocht GoCardless cealaithe.

Tabhair false ar ais ón scagaire seo chun scriosadh a chosc.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $blog_id | `int` | ID blag WordPress an tsuímh ar feitheamh. |
| $membership | `\WP_Ultimo\Models\Membership` | An bhallraíocht chealaithe. |
| $old_status | `string` | An stádas roimh an gcealú. |

### Ó

- 2.0.0
### Foinse

Sainithe in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ag líne 1086
