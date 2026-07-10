---
id: wu_gocardless_cleanup_pending_site
title: Iragazkia - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Iragazkia: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

GoCardless kidetza ezeztatu baterako umezurtz geratutako zain dagoen gune bat ezabatu aurretik abiarazten da.

Itzuli false iragazki honetatik ezabatzea eragozteko.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $blog_id | `int` | Zain dagoen gunearen WordPress blog IDa. |
| $membership | `\WP_Ultimo\Models\Membership` | Ezeztatutako kidetza. |
| $old_status | `string` | Ezeztatu aurreko egoera. |

### Noiztik {#since}

- 2.0.0
### Iturburua {#source}

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) fitxategian definitua, 1086. lerroan
