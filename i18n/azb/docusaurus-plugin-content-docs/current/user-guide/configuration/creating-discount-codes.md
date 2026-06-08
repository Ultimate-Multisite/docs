---
title: Zyl Karn Zylak
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# إنشاء أكواد الخصم (v2)

_**ملاحظة هامة: يشير هذا المقال إلى الإصدار 2.x من Ultimate Multisite.**_

باستخدام Ultimate Multisite، يمكنك إنشاء أكواد خصم لمنح عملائك تخفيضات على اشتراكاتهم. وإنشاء هذه الأكواد أمر سهل للغاية!

## إنشاء وتعديل أكواد الخصم

لإنشاء أو تعديل كود خصم، اذهب إلى **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

ستجد هناك قائمة بأكواد الخصم التي أنشأتها بالفعل.

يمكنك النقر على **Add Discount Code** لإنشاء قسيمة جديدة، أو يمكنك تعديل الأكواد الموجودة لديك عن طريق تمرير مؤشر الماوس فوقها والنقر على **Edit**.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

سيتم توجيهك إلى الصفحة التي ستقوم فيها بإنشاء أو تعديل كود القسيمة الخاص بك. في هذا المثال، سنقوم بإنشاء كود جديد.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

دعنا نلقي نظرة على الإعدادات المتاحة هنا:

**Enter Discount Code:** هذا هو مجرد اسم لكود الخصم الخاص بك. هذا ليس الكود الذي سيحتاجه عملاؤك لإدخاله في نموذج الدفع.

**Description:** هنا، يمكنك وصف الغرض من هذه القسيمة باختصار.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

يمكنك أيضًا عرض حالة كود الخصم كنشط أو غير نشط:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** هنا تحدد الكود الذي سيحتاجه عملاؤك لإدخاله أثناء عملية الدفع.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** هنا، يمكنك تعيين إما **نسبة مئوية** أو **مبلغ ثابت** من المال لكود الخصم الخاص بك.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** إذا تم إيقاف تشغيل هذا الخيار، فلن يتم تطبيق كود الخصم هذا إلا على **الدفعة الأولى**. وستكون جميع الدفعات الأخرى بدون خصم. وإذا تم تشغيل هذا الخيار، فسيكون كود الخصم صالحًا لجميع الدفعات المستقبلية.

**Setup fee discount:** إذا تم إيقاف تشغيل هذا الخيار، فلن **يمنح كود القسيمة أي خصم على رسوم الإعداد** للطلب. وإذا تم تشغيل هذا الخيار، يمكنك تعيين الخصم (نسبة مئوية أو مبلغ ثابت) الذي سيتم تطبيقه بواسطة كود القسيمة هذا على رسوم إعداد خططك.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** لتفعيل أو إلغاء تفعيل كود القسيمة هذا يدويًا.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

تحت **Advanced Options** (الخيارات المتقدمة)، لدينا الإعدادات التالية:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** هنا، يمكنك رؤية عدد المرات التي تم فيها استخدام كود الخصم.

  * **Max uses:** سيحدد هذا الحد الأقصى لعدد المرات التي يمكن للمستخدمين فيها استخدام كود الخصم هذا. على سبيل المثال، إذا وضعت 10 هنا، فلا يمكن استخدام القسيمة إلا 10 مرات. بعد هذا الحد، لا يمكن استخدام كود القسيمة بعد الآن.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** هنا سيكون لديك خيار إضافة تاريخ بدء و/أو تاريخ انتهاء لقسيمتك.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** إذا قمت بتشغيل **Select products** (تحديد المنتجات)، فسيتم عرض جميع منتجاتك. وستتاح لك الفرصة لتحديد المنتج يدويًا (عن طريق تشغيله أو إيقافه) الذي يمكن قبول كود الخصم فيه. المنتجات التي يتم إيقاف تشغيلها هنا لن تظهر أي تغيير إذا حاول عملاؤك استخدام كود الخصم عليها.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

بعد إعداد كل هذه الخيارات، انقر على **Save Discount Code** لحفظ القسيمة، وبذلك تكون قد انتهيت!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

أصبح الكود الآن في قائمتك، ومن هناك، يمكنك النقر على **edit or delete** لتعديله أو حذفه.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### استخدام معلمات الرابط (URL Parameters):

إذا كنت ترغب في تخصيص جداول التسعير الخاصة بك أو بناء صفحة أكواد خصم جميلة لموقعك، وترغب في تطبيق كود خصم على نموذج الدفع الخاص بك تلقائيًا، فيمكنك القيام بذلك عبر معلمات الرابط (URL parameters).

أولاً، تحتاج إلى الحصول على الرابط القابل للمشاركة (shareable link) الخاص بخطتك. للقيام بذلك، اذهب إلى **Ultimate Multisite > Products** واختر خطة معينة.

انقر على زر **Click to Copy Shareable Link**. سيعطيك هذا الرابط القابل للمشاركة لهذه الخطة المحددة. في حالتنا، كان الرابط القابل للمشاركة المعطى هو [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

لتطبيق كود الخصم الخاص بك على هذه الخطة المحددة، ما عليك سوى إضافة المعلمة **?discount_code=XXX** إلى الرابط. حيث **XXX** هو كود الخصم.

في مثالنا هنا، سنقوم بتطبيق كود الخصم **50OFF** على هذا المنتج المحدد.

سيبدو الرابط لهذه الخطة المحددة ومع تطبيق كود الخصم 50OFF كما يلي: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
