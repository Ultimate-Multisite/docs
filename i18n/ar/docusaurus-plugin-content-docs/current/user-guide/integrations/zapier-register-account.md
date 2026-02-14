---
title: سجل حسابًا عبر Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# حدث: تسجيل حساب عبر Zapier

في المقال [دمج Ultimate Multisite مع Zapier](zapier.md)، ناقشنا كيفية استخدام Zapier لأداء إجراءات مختلفة داخل Ultimate Multisite بناءً على المشغلات والأحداث. في هذا المقال، سنوضح كيف يمكنك دمج تطبيقات الطرف الثالث. سنستخدم Google Sheets كمصدر للبيانات ونرسل المعلومات إلى Ultimate Multisite لتسجيل حساب.

أولاً، تحتاج إلى إنشاء **Google Sheet** تحت Google Drive الخاص بك. تأكد من تعريف كل عمود بشكل صحيح حتى تتمكن من تعيين البيانات بسهولة لاحقًا.

![Google Sheet مع أعمدة لبيانات العميل](/img/admin/webhooks-list.png)بعد إنشاء Google Sheet، يمكنك تسجيل الدخول إلى حسابك في Zapier وبدء إنشاء zap.

![لوحة تحكم Zapier لبدء إنشاء zap](/img/admin/webhooks-list.png)في حقل البحث عن **"حدث التطبيق"** اختر **"Google Sheets"**

![اختيار Google Sheets كحدث التطبيق](/img/admin/webhooks-list.png)

ثم لحقل **"الحدث"** اختر **"صف جديد في جدول البيانات"** واضغط على **"متابعة"**

![اختيار حدث صف جديد في جدول البيانات في Zapier](/img/admin/webhooks-list.png)الخطوة التالية ستطلب منك اختيار **حساب Google** حيث تم حفظ **Google Sheet**. تأكد فقط من تحديد حساب Google الصحيح.

![اختيار حساب Google لجدول البيانات](/img/admin/webhooks-list.png)

في **"إعداد المشغل"**، ستحتاج إلى اختيار وتحديد جدول البيانات وورقة العمل التي ستستخدمها حيث ستأتي البيانات. املأ تلك الحقول واضغط على **"متابعة"**

![إعداد المشغل مع اختيار جدول البيانات وورقة العمل](/img/admin/webhooks-list.png)التالي هو **"اختبار المشغل"** للتأكد من أن Google Sheet متصل بشكل صحيح.

![اختبار خطوة المشغل في Zapier](/img/admin/webhooks-list.png)إذا نجح الاختبار، يجب أن ترى النتيجة مع بعض القيم من جداول البيانات الخاصة بك. اضغط على **"متابعة"** للمتابعة.

![اختبار المشغل الناجح مع عرض قيم جدول البيانات](/img/admin/webhooks-list.png)الخطوة التالية هي إعداد الإجراء الثاني الذي سيقوم بإنشاء أو تسجيل حساب في Ultimate Multisite. في حقل البحث اختر **"Ultimate Multisite(2.0.2)"**

![اختيار Ultimate Multisite كإجراء التطبيق](/img/admin/webhooks-list.png)

في حقل **"الحدث"** اختر **"تسجيل حساب في Ultimate Multisite"** ثم اضغط على زر **"متابعة"**.

![حدث إجراء تسجيل حساب في Ultimate Multisite](/img/admin/webhooks-list.png)في **"إعداد الإجراء"**، سترى حقولًا مختلفة متاحة لبيانات العميل، العضويات، المنتجات، إلخ. يمكنك تعيين القيم من Google Sheet وتعيينها للحقول المناسبة حيث يجب أن تُملأ كما هو موضح في لقطة الشاشة أدناه.

![تعيين قيم Google Sheet إلى حقول Ultimate Multisite](/img/admin/webhooks-list.png)

بعد تعيين القيم، يمكنك اختبار الإجراء.

![اختبار إجراء تسجيل الحساب في Zapier](/img/admin/webhooks-list.png)
