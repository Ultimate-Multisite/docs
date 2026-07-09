---
id: wu_domain_has_correct_dns
title: Ֆիլտր - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Թույլ է տալիս փլագինների մշակողներին ավելացնել նոր ստուգումներ՝ արդյունքները սահմանելու համար։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $result | `bool` | ընթացիկ արդյունքը։ |
| $domain | `self` | Տիրույթի ընթացիկ օրինակը։ |
| $domains_and_ips | `array` | DNS որոնման ժամանակ գտնված տիրույթների և IP-ների ցանկը։ |

### Սկսած

- 2.0.4
### Աղբյուր

Սահմանված է [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ֆայլում՝ 455-րդ տողում


## Վերադարձնում է
Արդյոք DNS-ը ճիշտ է կարգավորված, թե ոչ։
