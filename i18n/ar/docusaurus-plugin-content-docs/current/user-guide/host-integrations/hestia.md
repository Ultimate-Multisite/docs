---
title: دمج لوحة تحكم Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# لوحة تحكم هستيا

هذا الدليل يشرح كيفية تكوين تكامل Ultimate Multisite مع هستيا بحيث تُضاف النطاقات المعيّنة في شبكتك تلقائيًا (وتُحذف) كـ Web Domain Aliases في هستيا.

- مرجع سطر أوامر هستيا: v-add-web-domain-alias / v-delete-web-domain-alias
- الوثائق الرسمية لواجهة برمجة التطبيقات: https://hestiacp.com/docs/server-administration/rest-api.html

## ما الذي يفعله
- عند تعيين نطاق في Ultimate Multisite، يستدعي التكامل واجهة برمجة تطبيقات هستيا لتشغيل:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- عند إزالة تعيين نطاق، يتم تشغيل:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- يضيف/يزيل اختياريًا مستعار `www.` اعتمادًا على إعدادك “إنشاء نطاق فرعي www تلقائيًا” في إعدادات تعيين النطاق.

## المتطلبات المسبقة
- نطاق ويب هستيا موجود بالفعل يشير إلى تثبيت WordPress الخاص بك. سيقوم التكامل بإرفاق المستعارات بهذا النطاق الأساسي.
- تم تمكين وصول واجهة برمجة تطبيقات هستيا. يمكنك المصادقة باستخدام كلمة مرور أو تجزئة/رمز API.

راجع وثائق واجهة برمجة تطبيقات هستيا لتمكين وصول API وتفاصيل المصادقة:
https://hestiacp.com/docs/server-administration/rest-api.html

## التكوين (المعالج → التكاملات → هستيا)
أدخل القيم التالية:

- `WU_HESTIA_API_URL` (مطلوب)
  - نقطة النهاية الأساسية لواجهة برمجة التطبيقات، عادةً `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (مطلوب)
  - مستخدم هستيا المستخدم لأوامر واجهة برمجة التطبيقات (عادةً `admin`).
- `WU_HESTIA_API_PASSWORD` أو `WU_HESTIA_API_HASH` (على الأقل واحد)
  - اختر طريقة مصادقة واحدة: كلمة مرور أو تجزئة/رمز API.
- `WU_HESTIA_ACCOUNT` (مطلوب)
  - الحساب (المالك) لنطاق الويب في هستيا؛ هذا هو المعامل الأول لسطر أوامر.
- `WU_HESTIA_WEB_DOMAIN` (مطلوب)
  - نطاق الويب هستيا الموجود الذي يخدم WordPress الخاص بك (ستتم إرفاق المستعارات هنا).
- `WU_HESTIA_RESTART` (اختياري؛ الافتراضي `yes`)
  - ما إذا كان يجب إعادة تشغيل/إعادة تحميل الخدمات بعد تغييرات المستعار.

يمكنك ترك المعالج يحقن هذه الثوابت في `wp-config.php`، أو تعريفها يدويًا.

## التحقق من الإعداد
- في خطوة “الاختبار” للمعالج، يستدعي المكوّن `v-list-web-domains <WU_HESTIA_ACCOUNT> json` عبر واجهة برمجة التطبيقات. تؤكد الاستجابة الناجحة الاتصال والمصادقة.
- بعد تعيين نطاق، تحقق في هستيا: Web > النطاق الأساسي > Aliases. يجب أن ترى المستعار الجديد مضافًا.

## ملاحظات ونصائح
- تأكد من أن `WU_HESTIA_WEB_DOMAIN` موجود بالفعل ومملوك بواسطة `WU_HESTIA_ACCOUNT`.
- إذا كان SSL مطلوبًا، فقم بإدارة الشهادات في هستيا. يتعامل هذا التكامل حاليًا مع المستعارات فقط.
- قد يضيف/يزيل المكوّن `www.<domain>` اعتمادًا على إعداد “نطاق فرعي www” في تعيين النطاق.

## مثال على استدعاء API (cURL)

فيما يلي مثال مفهومي (اضبطه وفقًا لبيئتك). راجع الوثائق الرسمية للحصول على المعلمات الدقيقة.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

للحذف، استخدم `cmd=v-delete-web-domain-alias` والوسائط نفسها.

## استكشاف الأخطاء
- خطأ HTTP من واجهة برمجة التطبيقات: تحقق من أن `WU_HESTIA_API_URL` قابل للوصول ويشمل `/api`.
- أخطاء المصادقة: تأكد من `WU_HESTIA_API_USER` وأحد `WU_HESTIA_API_PASSWORD` أو `WU_HESTIA_API_HASH`.
- “مفقود الحساب/النطاق الأساسي” في السجلات: تأكد من أن `WU_HESTIA_ACCOUNT` و `WU_HESTIA_WEB_DOMAIN` محددين وصالحين في هستيا.

## المراجع
- واجهة برمجة تطبيقات هستيا: https://hestiacp.com/docs/server-administration/rest-api.html
- مرجع سطر أوامر هستيا (المستعارات): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
