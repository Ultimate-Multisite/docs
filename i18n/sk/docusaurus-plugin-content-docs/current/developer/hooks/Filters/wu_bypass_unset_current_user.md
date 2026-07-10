---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Umožňuje vývojárom obísť kód na zrušenie nastavenia aktuálneho používateľa.

Vrátenie čohokoľvek iného než null obíde zrušenie nastavenia aktuálne prihláseného používateľa. Môže to byť užitočné v niektorých scenároch, napríklad pri práci s podstránkami, ktoré sa používajú ako administrátorské panely.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null na pokračovanie, čokoľvek iné na obídenie. |
| $current_user | `false\|\WP_User` | Objekt aktuálneho používateľa. |

### Od verzie {#since}

- 2.0.11
### Zdroj {#source}

Definované v [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) na riadku 221


## Návratová hodnota {#returns}
