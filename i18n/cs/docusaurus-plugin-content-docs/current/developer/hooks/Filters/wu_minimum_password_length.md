---
id: wu_minimum_password_length
title: Filtrační parametr - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtr: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtruje minimální délku hesla.

Je vynucován pouze tehdy, když je nastavená hodnota `wu_enforce_password_rules` na `true`.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $min_length | `int` | Minimální délka hesla. Výchozí hodnota je 12 (odpovídá Defender Pro). |
| $defender_active | `bool` | Zda je aktivní funkce silného hesla Defender Pro. |

### Od verze {#since}

- 2.4.0
### Zdroj {#source}

Definováno v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) na řádku 543
