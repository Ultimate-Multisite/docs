---
id: wu_magic_link_enforce_ip
title: تصفية - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

تصفية ما إذا كان يجب فرض التحقق من عنوان IP.

اضبطه على false للسماح للرموز بالعمل من شبكات مختلفة. يقلل ذلك من الأمان لكنه يزيد من سهولة الاستخدام (على سبيل المثال، لمستخدمي الجوال الذين يبدلون الشبكات).

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $enforce | `bool` | ما إذا كان يجب فرض مطابقة عنوان IP. |

### Since

- 2.0.0

### Source

تم تعريفه في [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) في السطر 422
