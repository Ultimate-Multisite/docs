---
id: wu_membership_post_renew
title: Գործողություն - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Գործողություն: wu_membership_post_renew

Գործարկվում է անդամակցության թարմացումից հետո։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $expiration | `string` | Սահմանվելիք նոր ժամկետի ավարտի ամսաթիվը։ |
| $membership_id | `int` | Անդամակցության ID-ն։ |
| $membership | `\Membership` | Անդամակցության օբյեկտ։ |

### Սկսած {#since}

- 2.0
### Աղբյուր {#source}

Սահմանված է [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235)-ում՝ 2235-րդ տողում
