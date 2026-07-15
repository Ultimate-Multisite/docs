---
id: wu_gocardless_cleanup_pending_site
title: Filtras - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtras: wu_gocardless_cleanup_pending_site

Suveikia prieš ištrinant našlaitinę laukiančią svetainę atšauktai GoCardless narystei.

Grąžinkite false iš šio filtro, kad išvengtumėte ištrynimo.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $blog_id | `int` | Laukiančios svetainės WordPress tinklaraščio ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Atšaukta narystė. |
| $old_status | `string` | Būsena prieš atšaukimą. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) 1086 eilutėje
