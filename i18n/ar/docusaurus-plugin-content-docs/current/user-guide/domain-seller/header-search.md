---
title: بحث النطاق في الرأس
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# بحث النطاق من Header {#header-domain-search}

استخدم هذا الإعداد عندما تريد نموذجًا صغيرًا في Header يبدأ بحثًا عن نطاق، ثم يتيح للعميل الاختيار من النطاقات المتاحة داخل checkout الخاص بـ Ultimate Multisite.

## المتطلبات {#requirements}

- Ultimate Multisite مفعّل على الشبكة.
- Multisite Ultimate Domain Seller مفعّل على الشبكة.
- منتج تسجيل نطاق نشط واحد على الأقل مع:
  - تعيين `domain_provider` إلى موفّر مُعدّ.
  - TLDs مدعومة مُعدّة، على سبيل المثال `com` و`net` و`org`.
- نموذج checkout صالح يحتوي على حقل **اختيار النطاق**.

## نموذج checkout {#checkout-form}

1. أنشئ نموذج checkout المستخدم في صفحة التسجيل أو حرّره.
2. أضف حقول checkout/Account العادية المطلوبة، بما في ذلك **اسم المستخدم**. يرفض تحقق Ultimate Multisite نموذج checkout الذي يحتوي على حقل النطاق فقط.
3. أضف حقل **اختيار النطاق**.
4. اضبط وضع Domain Selection على **Register Only** عندما ينبغي أن يركّز المسار على النطاقات المسجلة بدلًا من النطاقات الفرعية المجانية أو النطاقات الموجودة.
5. عيّن منتج تسجيل النطاق لذلك الحقل.

يجب أن تعرض صفحة التسجيل نموذج checkout، على سبيل المثال:

```text
[wu_checkout slug="domain-form"]
```

## نموذج Header {#header-form}

أضف نموذج `GET` صغيرًا في Header الخاص بالموقع يرسل مصطلح البحث المُدخل إلى صفحة checkout باسم `domain_name`:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

لا تحدد نطاقًا مسبقًا في JavaScript مخصص لـ Header. يجب أن يمرّر Header مصطلح البحث فقط. يقرأ سكربت checkout الخاص بـ Domain Seller القيمة `?domain_name=example`، ويملأ مربع بحث checkout، ويُشغّل بحث التوفر بحيث يمكن للعميل الاختيار من النطاقات المُعادة.

## السلوك المتوقع {#expected-behaviour}

يجب أن يفتح البحث عن `example` في Header:

```text
/register/?domain_name=example
```

ينبغي أن يعرض checkout بعد ذلك نتائج قابلة للاختيار مثل:

- `example.com`
- `example.net`
- `example.org` غير متاح
- TLDs أخرى مدعومة من الموفّر

بعد اختيار نتيجة متاحة، يجب أن يتضمن ملخص الطلب منتج تسجيل النطاق واسم النطاق المحدد.

## التحقق {#verification}

1. افتح الصفحة الرئيسية.
2. ابحث عن اسم مجرد، على سبيل المثال `example`.
3. تأكد من أن رابط checkout يتضمن `?domain_name=example`.
4. تأكد من أن حقل النطاق في checkout يحتوي على `example`.
5. تأكد من ظهور قائمة بخيارات النطاق.
6. انقر على **تحديد** لنطاق متاح.
7. تأكد من أن ملخص الطلب يحتوي على `Domain Registration - example.com` أو النطاق المحدد.

## استكشاف الأخطاء وإصلاحها {#troubleshooting}

- إذا لم تظهر أي قائمة، فتحقق من تبويب الشبكة في المتصفح بحثًا عن `admin-ajax.php?action=wu_domain_search` وتأكد من أنه يعيد `domains` أو `results` غير فارغة.
- إذا فشل تحقق نموذج checkout أثناء الحفظ، فأضف حقول Account المطلوبة مثل **اسم المستخدم**.
- إذا لم يؤدِ اختيار نطاق إلى تحديث السلة، فتأكد من وجود `window.wu_checkout_form` وأن أصول checkout الخاصة بـ Domain Seller محمّلة على صفحة checkout.
