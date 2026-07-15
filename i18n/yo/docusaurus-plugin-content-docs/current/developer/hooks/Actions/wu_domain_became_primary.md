---
id: wu_domain_became_primary
title: Ìgbésẹ̀ - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Ìṣe: wu_domain_became_primary

Ó máa ń ṣẹlẹ̀ nígbà tí domeeni kan bá di domeeni àkọ́kọ́ fún site kan.

Ìṣe yìí máa ń jẹ́ dídáná nígbà tí primary_domain flag ti domeeni kan bá jẹ́ ṣíṣètò sí true, bóyá nígbà tí a ń dá domeeni àkọ́kọ́ tuntun tàbí nígbà tí a ń ṣe àfikún sí domeeni tó wà tẹ́lẹ̀ kí ó di àkọ́kọ́.

## Àwọn Parameter {#parameters}

| Orúkọ | Irú | Àpèjúwe |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domeeni tó di àkọ́kọ́. |
| $blog_id | `int` | ID blog ti site tí ó kan. |
| $was_new | `bool` | Bóyá èyí jẹ́ domeeni tí a ṣẹ̀ṣẹ̀ dá. |

### Láti {#since}

- 2.0.0
### Orísun {#source}

A ṣàlàyé rẹ̀ ní [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ní laini 560
