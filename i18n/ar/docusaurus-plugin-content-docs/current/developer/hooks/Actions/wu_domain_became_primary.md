---
id: wu_domain_became_primary
title: الإجراء - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

يتم إطلاقه عندما يصبح نطاق هو النطاق الأساسي للموقع.

يتم تشغيل هذا الإجراء عندما يتم تعيين علم primary_domain للنطاق إلى true، إما عند إنشاء نطاق أساسي جديد أو عند تحديث نطاق موجود ليصبح أساسيًا.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | النطاق الذي أصبح أساسيًا. |
| $blog_id | `int` | معرف المدونة للموقع المتأثر. |
| $was_new | `bool` | ما إذا كان هذا نطاقًا تم إنشاؤه حديثًا. |

### Since

- 2.0.0

### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
