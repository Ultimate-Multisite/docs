---
id: wu_apc_process_page_content
title: Filter - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Szűrő: wu_apc_process_page_content

Engedélyezi a fejlesztőknek, hogy módosítsák a végleges tartalmat.

## Paraméterek

| Név | Típus | Leírás |
|------|------|-------------|
| $content | `string` | Tartalom a helyettesítések után. |
| $content_before_processing | `string` | Tartalom a helyettesítések előtt. |
| $to_replace | `array` | Egy tömb, amely a helyőremezéseket tartalmazza. |
| $placeholder_count | `int` | Megtalált helyőremezések száma. |

### Since

- 1.4.0
### Source

Definíciója található [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) fájlban, 46-sorban.

## Vráhosítja
A módosítás utáni tartalom.
