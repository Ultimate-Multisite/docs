---
id: wu_use_domain_mapping
title: Ֆիլտր - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Որոշում է՝ արդյոք պետք է օգտագործել համապատասխանեցում

Սովորաբար դուք կցանկանաք թույլատրել օգտագործել միայն ակտիվ համապատասխանեցումները։ Սակայն, եթե ցանկանում եք օգտագործել ավելի առաջադեմ տրամաբանություն կամ թույլատրել նաև ոչ ակտիվ դոմենների համապատասխանեցումը, պարզապես զտեք այստեղ։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $is_active | `bool` | Արդյո՞ք համապատասխանեցումը պետք է դիտարկվի որպես ակտիվ։ |
| $mapping | `\Domain` | Համապատասխանեցում, որը մենք ստուգում ենք |
| $domain | `string` |  |

### Աղբյուր {#source}

Սահմանված է [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391)-ում՝ 391-րդ տողում
