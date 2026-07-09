---
id: wu_make_primary_domain_redirect_url
title: Iragazkia - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Iragazkia: wu_make_primary_domain_redirect_url

Domeinu bat nagusi bihurtu ondoren birbideratze-URLa iragazten du.

Garatzaileei aukera ematen die erabiltzaileak nora birbideratuko diren pertsonalizatzeko, domeinu bat nagusi gisa behar bezala ezarri ondoren. Lehenespenez, gune nagusiko uneko URLra birbideratzen du, edo aldatzen ari den gunearen admin URLra.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $redirect_url | `string` | Birbideratze-URL lehenetsia. Edo uneko URLa (gune nagusia bada) edo uneko gunearen admin URLa. |
| $current_site | `int` | Nagusi bihurtzen ari den domeinua duen gunearen IDa. |
| $domain | `\Domain` | Nagusi bihurtu den domeinu-objektua. |
| $old_primary_domains | `array` | Lehenago nagusi ziren domeinuen IDen arraya. |

### Noiztik

- 2.0.0
### Iturburua

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) fitxategian definitua, 639. lerroan


## Itzulketak
Iragazitako birbideratze-URLa.
