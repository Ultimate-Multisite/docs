---
id: wu_page_this-id_load
title: 'کردار - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

ڕێگە بدە بە پەرەپێدەرانی plugin کە hookی زیاتر زیاد بکەن بۆ لاپەڕەکانمان.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $id | `string` | IDی ئەم لاپەڕەیە. |
| $page_hook | `string` | hookی لاپەڕەی ئەم لاپەڕەیە. |
| $admin_page | `self` | نموونەی لاپەڕەکە. |

### لە وەشانی

- 1.8.2
- 2.0.4: پارامێتەری سێیەم زیادکرا: نموونەی لاپەڕەکە.
### سەرچاوە

پێناسەکراوە لە [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) لە دێڕی 332
