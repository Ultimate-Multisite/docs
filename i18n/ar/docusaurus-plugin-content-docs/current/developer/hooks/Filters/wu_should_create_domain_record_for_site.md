---
id: wu_should_create_domain_record_for_site
title: عامل تصفية - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# الفلتر: wu_should_create_domain_record_for_site

يفلتر ما إذا كان ينبغي لـ Ultimate Multisite إنشاء سجل نطاق لموقع تم إنشاؤه حديثًا.

استخدم هذا الفلتر لمنع أو تأجيل الإنشاء التلقائي لسجل النطاق للمواقع التي تستخدم نطاقًا أساسيًا مشتركًا لنموذج الدفع، أو مضيفًا داخليًا، أو نطاقًا ستديره إضافة تكامل أخرى بشكل منفصل.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $create | `bool` | ما إذا كان ينبغي إنشاء سجل النطاق. |
| $site | `WP_Site` | كائن الموقع الذي تم إنشاؤه حديثًا. |

### منذ {#since}

- 2.13.0

### المصدر {#source}

مُعرّف في `inc/functions/domain.php`.


## القيم المُعادة {#returns}

قيمة منطقية تشير إلى ما إذا كان سيتم إنشاء سجل النطاق.
