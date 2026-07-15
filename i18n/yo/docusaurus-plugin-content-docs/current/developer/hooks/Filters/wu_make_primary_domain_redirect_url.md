---
id: wu_make_primary_domain_redirect_url
title: Àlẹmọ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Àlẹmọ: wu_make_primary_domain_redirect_url

Ṣe àlẹmọ URL ìtọ́kasí lẹ́yìn fífi domain kan ṣe àkọ́kọ́.

Ó jẹ́ kí àwọn olùdàgbàsókè lè ṣe àdáṣe ibi tí a ó darí àwọn aṣàmúlò sí lẹ́yìn tí wọ́n bá ṣàgbékalẹ̀ domain kan ní aṣeyọrí gẹ́gẹ́ bí àkọ́kọ́. Nípa àiyipada, ó máa ń darí sí URL lọwọlọwọ lórí ojúlé pàtàkì, tàbí sí URL alábòójútó ti ojúlé tí a ń ṣàtúnṣe.

## Àwọn Parameter {#parameters}

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $redirect_url | `string` | URL ìtọ́kasí àiyipada. Yálà URL lọwọlọwọ (bí ó bá jẹ́ ojúlé pàtàkì) tàbí URL alábòójútó ti ojúlé lọwọlọwọ. |
| $current_site | `int` | ID ti ojúlé tí domain rẹ̀ ń jẹ́ kí ó di àkọ́kọ́. |
| $domain | `\Domain` | Object domain tí a ti ṣe ní àkọ́kọ́. |
| $old_primary_domains | `array` | Array ti àwọn ID ti àwọn domain tí wọ́n jẹ́ àkọ́kọ́ tẹ́lẹ̀. |

### Láti {#since}

- 2.0.0
### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ní ila 639


## Àwọn Ìpadàpadà {#returns}
URL ìtọ́kasí tí a ti ṣe àlẹmọ.
