---
title: إنشاء رموز الخصم
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# إنشاء رموز الخصم (v2)

_**ملاحظة هامة: تشير هذه المقالة إلى إصدار Ultimate Multisite 2.x.**_

مع Ultimate Multisite يمكنك إنشاء رموز خصم لتقديم خصومات لعملائك على اشتراكاتهم. وإنشاءها سهل!

## إنشاء وتحرير رموز الخصم

لإنشاء أو تحرير رمز خصم، انتقل إلى **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

ستجد هناك قائمة بالرموز الخصم التي أنشأتها بالفعل.

يمكنك النقر على **Add Discount** **Code** لإنشاء قسيمة جديدة أو تحرير القسائم الموجودة بالتمرير فوقها والنقر على **Edit**.

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

ستتم إعادة توجيهك إلى الصفحة التي ستقوم فيها بإنشاء أو تحرير رمز القسيمة. في هذا المثال سننشئ واحدة جديدة.

![Discount code edit page](/img/config/discount-codes-list.png)

دعنا نلقي نظرة على الإعدادات المتاحة هنا:

**Enter Discount Code:** هذا هو فقط اسم رمز الخصم الخاص بك. هذا ليس الكود الذي سيحتاجه عملاؤك لاستخدامه في نموذج الدفع.

**Description:** هنا يمكنك وصف موجز ما هو الغرض من هذه القسيمة.

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** هنا هو المكان الذي تحدد فيه الكود الذي سيحتاجه عملاؤك لإدخاله أثناء الدفع.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** هنا يمكنك تعيين إما **percentage** أو **fixed amount** من المال لرمز الخصم الخاص بك.

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** إذا تم إيقاف تشغيل هذا الخيار، فسيتم تطبيق رمز الخصم هذا فقط على **first payment**. جميع المدفوعات الأخرى لن تحصل على خصم. إذا تم تشغيل هذا الخيار، فسيكون رمز الخصم صالحًا لجميع المدفوعات المستقبلية.

**Setup fee discount:** إذا تم إيقاف تشغيل هذا الخيار، فلن يمنح رمز القسيمة أي خصم لرسوم التثبيت للطلب. إذا تم تشغيل هذا الخيار، يمكنك تعيين الخصم (نسبة مئوية أو مبلغ ثابت) الذي سيطبقه رمز القسيمة على رسوم التثبيت لخططك.

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** قم بتفعيل أو إلغاء تفعيل رمز القسيمة يدويًا.

![Active toggle for discount code](/img/config/discount-codes-list.png)

في **Advanced Options**، لدينا الإعدادات التالية:

**Limit uses:**

  * **Uses:** هنا يمكنك رؤية عدد المرات التي تم فيها استخدام رمز الخصم.

  * **Max uses:** سيحد هذا من عدد المرات التي يمكن للمستخدمين استخدامها. على سبيل المثال، إذا وضعت 10 هنا، فسيتمكن القسيمة من الاستخدام 10 مرات فقط. بعد هذا الحد، لا يمكن استخدام رمز القسيمة بعد ذلك.

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** هنا سيكون لديك خيار إضافة تاريخ بدء و/أو تاريخ انتهاء صلاحية لرمز القسيمة الخاص بك.

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** إذا قمت بتفعيل **Select products**، فستظهر لك جميع منتجاتك. سيكون لديك خيار اختيار يدوي (بتفعيل أو إيقاف) أي منتج يمكنه قبول رمز القسيمة هذا. المنتجات التي تم إيقاف تشغيلها هنا لن تظهر أي تغيير إذا حاول عملاؤك استخدام رمز القسيمة على هذه المنتجات.

![Limit products selection toggles](/img/config/discount-codes-list.png)

بعد إعداد جميع هذه الخيارات، انقر على **Save Discount Code** لحفظ القسيمة الخاصة بك، وقد انتهيت!

![Save Discount Code button](/img/config/discount-codes-list.png)

الآن القسيمة موجودة في قائمتك، ومن هناك يمكنك النقر على **edit or delete** لتعديلها أو حذفها.

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### استخدام معلمات URL:

إذا كنت ترغب في تخصيص جداول التسعير الخاصة بك أو إنشاء صفحة رموز خصم جميلة لموقعك وتريد تطبيق رمز خصم على نموذج الدفع تلقائيًا، يمكنك فعل ذلك عبر معلمات URL.

أولاً، تحتاج إلى الحصول على الرابط القابل للمشاركة لخطةك. للقيام بذلك، انتقل إلى **Ultimate Multisite > Products** واختر خطة.

انقر على زر **Click to Copy Shareable Link**. سيعطيك ذلك الرابط القابل للمشاركة لهذه الخطة المحددة. في حالتنا، كان الرابط القابل للمشاركة هو [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

لتطبيق رمز الخصم الخاص بك على هذه الخطة المحددة، أضف ببساطة المعامل **?discount_code=XXX** إلى عنوان URL. حيث **XXX** هو رمز القسيمة.

في مثالنا هنا، سنطبق رمز القسيمة **50OFF** على هذا المنتج المحدد.

عنوان URL لهذه الخطة المحددة مع تطبيق رمز الخصم 50OFF سيبدو كالتالي: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
