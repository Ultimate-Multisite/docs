---
id: wu_bypass_unset_current_user
title: Àlẹ́mọ́ - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Gba awọn olùdàgbàsókè laaye lati kọjá kóòdù unset current user.

Pípadà ohunkóhun yàtọ̀ sí null yóò kọjá unset ti current user tí ó wọlé. Èyí lè wúlò ní díẹ̀ lára àwọn ìṣẹ̀lẹ̀, fún àpẹẹrẹ, nígbà tí a bá ń ṣiṣẹ́ pẹ̀lú àwọn sub-sites tí a ń lò gẹ́gẹ́ bí admin panels.

## Àwọn Parameter

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null láti tẹ̀síwájú, ohunkóhun míì láti kọjá rẹ. |
| $current_user | `false\|\WP_User` | Object current user náà. |

### Láti

- 2.0.11
### Orísun

A ṣàlàyé rẹ̀ nínú [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ní laini 221


## Àwọn ohun tí ó padà
