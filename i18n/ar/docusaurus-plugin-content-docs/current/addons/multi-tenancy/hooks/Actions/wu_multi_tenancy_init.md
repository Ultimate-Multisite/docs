---
id: wu_multi_tenancy_init
title: الإجراء - wu_multi_tenancy_init
sidebar_label: wu_multi_tenancy_init
_i18n_hash: d36b0a14ef482ff6731ffe6c85582c6a
---
# الإجراء: wu_multi_tenancy_init {#action-wumultitenancyinit}

يتم إطلاقه بعد تهيئة إضافة Multi‑Tenancy بالكامل.

## المعلمات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $addon | `\WP_Ultimo_Multi_Tenancy` | مثيل الإضافة. phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedHooknameFound -- wu_ هو البادئة القياسية لـ WP Ultimo. |

### منذ {#since}

- 1.0.0

### المصدر {#source}

تم تعريفه في [`ultimate-multisite-multi-tenancy.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/ultimate-multisite-multi-tenancy.php#L124) في السطر 124
