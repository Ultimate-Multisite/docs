---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# فلتر: wu_gococardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

يتم تشغيل هذا الفلتر قبل حذف موقع معلق غير مرتبط بعضوية GoCardless ملغاة.

لإيقاف عملية الحذف، قم بإرجاع القيمة `false` من هذا الفلتر.

## المعاملات (Parameters) {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $blog_id | `int` | معرف مدونة WordPress للموقع المعلق. |
| $membership | `\WP_Ultimo\Models\Membership` | العضوية الملغاة. |
| $old_status | `string` | الحالة التي كان عليها الموقع قبل الإلغاء. |

### منذ (Since) {#since}

- 2.0.0
### المصدر (Source) {#source}

مُعرّف في [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) في السطر 1086
