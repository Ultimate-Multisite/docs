---
id: wu_page_added
title: Acció - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Aquesta acció: wu_page_added

Permet als desenvolupadors de plugins fer coses addicionals quan es registren les pàgines.

A diferència de `wu_page_load`, que només s'executa quan es visualitza una pàgina específica, aquest hook s'executa a la registratió per cada pàgina d'administració que es afegir utilitzant el codi d'Ultimate Multisite.

## Paràmetres

| Nom | Tip | Descripció |
|------|------|-------------|
| `$page_id` | `string` | L'ID de aquesta pàgina. |
| `$page_hook` | `string` | El nom del hook d'aquesta pàgina. |

### Des de

- 2.0.0
### Font

Definït en [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) a la línia 228
