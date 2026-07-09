---
id: wu_bypass_unset_current_user
title: مرشح - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# المرشح: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

السماح للمطورين بتجاوز كود إلغاء تعيين المستخدم الحالي.

إرجاع أي شيء غير null سيؤدي إلى تجاوز إلغاء تعيين المستخدم الحالي الذي تم تسجيل دخوله. يمكن أن يكون ذلك مفيدًا في بعض السيناريوهات، على سبيل المثال، عند التعامل مع المواقع الفرعية التي تُستخدم كلوحات تحكم إدارية.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null للمضي قدمًا، أي شيء آخر لتجاوزها. |
| $current_user | `false\|\WP_User` | كائن المستخدم الحالي. |

### منذ {#since}

- 2.0.11

### المصدر {#source}

تم تعريفه في [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) في السطر 221

## الإرجاع {#returns}
