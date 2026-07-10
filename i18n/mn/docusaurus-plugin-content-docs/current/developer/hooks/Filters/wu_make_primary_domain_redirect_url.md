---
id: wu_make_primary_domain_redirect_url
title: Шүүлтүүр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Шүүлтүүр: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Домэйныг primary болгосны дараах redirect URL-ийг шүүнэ.

Хөгжүүлэгчдэд домэйныг primary болгон амжилттай тохируулсны дараа хэрэглэгчдийг хааш нь redirect хийхийг өөрчлөх боломж олгоно. Анхдагчаар main site дээрх одоогийн URL руу, эсвэл өөрчилж буй сайтын admin URL руу redirect хийнэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $redirect_url | `string` | Анхдагч redirect URL. Одоогийн URL (хэрэв main site бол) эсвэл одоогийн сайтын admin URL. |
| $current_site | `int` | Домэйныг нь primary болгож буй сайтын ID. |
| $domain | `\Domain` | Primary болгосон домэйн объект. |
| $old_primary_domains | `array` | Өмнө нь primary байсан домэйнүүдийн ID-уудын массив. |

### Хувилбараас {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639)-д 639-р мөрөнд тодорхойлсон


## Буцаах утга {#returns}
Шүүсэн redirect URL.
