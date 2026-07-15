---
id: wu_page_this-id_load
title: 'Аракет - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d34bb63c8517d5bba151d14c83b3bb44
---
# Action: wu_page_\{$this->id\}_load

Плагин иштеп чыгуучуларына белгилүү бир баракчага кошумча hooks кошууга мүмкүндүк берет.

Колдонуу: Динамикалык бөлүк жарактуу баракча id менен алмаштырылышы керек, мисалы add_action('wu_page_events_load', 'callback_with_aditional_hook', 10, 2);

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $page_id | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бул баракчанын ID'си. |
| $page_hook | `string\|\WP_Ultimo_Site_Exporter\Admin_Pages\Base_Admin_Page` | Бул баракча үчүн түзүлгөн hook. |

### Чыгарылгандан бери {#since}

- 1.8.2
### Булак {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/admin-pages/class-base-admin-page.php#L301) ичинде 301-сапта аныкталган
