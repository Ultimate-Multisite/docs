---
id: wu_domain_became_primary
title: Գործողություն - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Գործողություն: wu_domain_became_primary

Գործարկվում է, երբ դոմենը դառնում է կայքի հիմնական դոմենը։

Այս գործողությունը գործարկվում է, երբ դոմենի primary_domain դրոշակը սահմանվում է true՝ թե՛ նոր հիմնական դոմեն ստեղծելիս, թե՛ գոյություն ունեցող դոմենը հիմնական դարձնելու համար թարմացնելիս։

## Պարամետրեր

| Անուն | Տիպ | Նկարագրություն |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Դոմենը, որը դարձավ հիմնական։ |
| $blog_id | `int` | Տուժած կայքի blog ID-ն։ |
| $was_new | `bool` | Արդյոք սա նոր ստեղծված դոմեն է։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560)-ում՝ 560-րդ տողում։
