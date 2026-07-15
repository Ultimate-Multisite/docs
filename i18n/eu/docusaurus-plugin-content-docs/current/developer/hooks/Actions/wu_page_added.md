---
id: wu_page_added
title: Ekintza - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Ekintza: wu_page_added

Plugin garatzaileei orriak erregistratzen direnean gauza osagarriak exekutatzeko aukera ematen die.

wu_page_load-ek ez bezala, orri jakin bat ikusten ari denean bakarrik exekutatzen baita, hook hau erregistroan exekutatzen da Ultimate Multisite kodea erabiliz gehitzen den admin orri bakoitzerako.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $page_id | `string` | Orri honen IDa. |
| $page_hook | `string` | Orri honen hook izena. |

### Noiztik {#since}

- 2.0.0
### Iturburua {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) fitxategian definitua, 228. lerroan
