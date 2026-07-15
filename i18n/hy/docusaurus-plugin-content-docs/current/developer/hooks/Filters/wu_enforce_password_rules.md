---
id: wu_enforce_password_rules
title: Զտիչ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Զտիչ՝ wu_enforce_password_rules

Զտում է՝ արդյոք կիրառել գաղտնաբառի լրացուցիչ կանոններ։

Երբ true է, կիրառում է նվազագույն երկարության և նիշերի պահանջներ։ Ավտոմատ միացված է "Super Strong" կարգավորման կամ Defender Pro-ի Strong Password գործառույթի ակտիվ լինելու դեպքում։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $enforce_rules | `bool` | Արդյոք կիրառել լրացուցիչ կանոններ։ |
| $strength_setting | `string` | Ադմինի կարգավորման արժեքը։ |
| $defender_active | `bool` | Արդյոք Defender Pro Strong Password-ը ակտիվ է։ |

### Սկսած {#since}

- 2.4.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531)-ում՝ 531-րդ տողում
