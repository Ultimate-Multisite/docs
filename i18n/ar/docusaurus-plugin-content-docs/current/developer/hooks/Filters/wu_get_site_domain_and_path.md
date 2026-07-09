---
id: wu_get_site_domain_and_path
title: فلتر - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

السماح للمطورين بالتلاعب بأزواج النطاق/المسار.

قد يكون هذا مفيدًا للعديد من الأمور، مثل تنفيذ نوع من حلول الاختبار (المرحلة)، خوادم مختلفة، إلخ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | الكائن الحالي الذي يحتوي على مفاتيح النطاق والمسار. |
| $path_or_subdomain | `string` | المسار الأصلي/النطاق الفرعي الممرر إلى الدالة. |

### منذ {#since}

- 2.0.0

### المصدر {#source}

تم تعريفه في [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) في السطر 235

## الإرجاع {#returns}

كائن يحتوي على مفاتيح النطاق والمسار.
