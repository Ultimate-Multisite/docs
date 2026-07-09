---
id: wu_gocardless_cleanup_pending_site
title: Filtrační funkce - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Spouští se před smazáním osvozené čekací stránky (pending site) kvůli zrušenému členství GoCardless.

Pokud z tohoto filtru vrátíte `false`, smazání se zabrání.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $blog_id | `int` | ID blogu WordPress, který je čekací stránkou. |
| $membership | `\WP_Ultimo\Models\Membership` | Zrušené členství. |
| $old_status | `string` | Stav před zrušením. |

### Since {#since}

- 2.0.0
### Source {#source}

Definováno v [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) na řádku 1086
