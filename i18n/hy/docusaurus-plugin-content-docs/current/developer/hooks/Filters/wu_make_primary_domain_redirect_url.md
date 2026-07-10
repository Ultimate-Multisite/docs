---
id: wu_make_primary_domain_redirect_url
title: Զտիչ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Զտիչ՝ wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Զտում է վերաուղղման URL-ը՝ դոմենը հիմնական դարձնելուց հետո։

Թույլ է տալիս մշակողներին հարմարեցնել, թե օգտատերերը ուր են վերաուղղվելու դոմենը հաջողությամբ որպես հիմնական սահմանելուց հետո։ Լռելյայն՝ վերաուղղում է հիմնական կայքի ընթացիկ URL-ին կամ փոփոխվող կայքի admin URL-ին։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $redirect_url | `string` | Լռելյայն վերաուղղման URL-ը։ Կամ ընթացիկ URL-ը (եթե հիմնական կայքն է), կամ ընթացիկ կայքի admin URL-ը։ |
| $current_site | `int` | Այն կայքի ID-ն, որի դոմենը դարձվում է հիմնական։ |
| $domain | `\Domain` | Դոմենի օբյեկտը, որը դարձվել է հիմնական։ |
| $old_primary_domains | `array` | Այն դոմենների ID-ների զանգվածը, որոնք նախկինում հիմնական էին։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ֆայլում՝ 639-րդ տողում


## Վերադարձնում է {#returns}
Զտված վերաուղղման URL-ը։
