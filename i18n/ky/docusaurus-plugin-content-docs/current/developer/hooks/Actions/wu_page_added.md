---
id: wu_page_added
title: Аракет - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

plugin иштеп чыгуучуларга баракчалар катталганда кошумча нерселерди иштетүүгө мүмкүндүк берет.

Белгилүү бир баракча каралып жатканда гана иштей турган wu_page_load'дан айырмаланып, бул hook Ultimate Multisite коду аркылуу кошулуп жаткан ар бир админ баракча үчүн каттоо учурунда иштейт.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $page_id | `string` | Бул баракчанын ID'си. |
| $page_hook | `string` | Бул баракчанын hook аты. |

### Баштап {#since}

- 2.0.0
### Булак {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) ичинде 228-сапта аныкталган.
