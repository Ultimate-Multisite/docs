---
id: wu_membership_pre_renew
title: Գործողություն - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Գործողություն՝ wu_membership_pre_renew

Գործարկվում է անդամակցության երկարաձգումից առաջ։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $expiration | `string` | Սահմանվելիք նոր ժամկետի ավարտի ամսաթիվը։ |
| $membership_id | `int` | Անդամակցության ID-ն։ |
| $membership | `\Membership` | Անդամակցության օբյեկտ։ |

### Սկսած {#since}

- 2.0
### Աղբյուր {#source}

Սահմանված է [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204)-ում՝ 2204-րդ տողում
