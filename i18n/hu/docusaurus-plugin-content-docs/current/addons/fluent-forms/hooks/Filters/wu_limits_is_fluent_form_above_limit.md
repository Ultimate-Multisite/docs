---
id: wu_limits_is_fluent_form_above_limit
title: Szűrő - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

Ellenőrzi, hogy a megadott űrlapot (form type) engedélyezik-e ezen a terven (plan). Ez lehetővé teszi a plugin fejlesztők számára, hogy szűrjék a visszaadott értéket.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $value | `bool` | Ha az űrlapotípus meghaladja a limitet, vagy nem. |
| $form_type | `string` | Az ellenőrzött űrlapotípus. |
| $form_count | `int` | Az aktuális űrlapok száma. |
| $quota | `int` | Az engedélyezett kvóta. |

### Mivel {#since}

- 1.0.0
### Forrás {#source}

- Meghatározva a [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) fájlban a 56-sorban
- Meghatározva a [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) fájlban a 89-sorban
