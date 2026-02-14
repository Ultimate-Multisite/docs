---
title: إعداد Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# إعداد بوابة سترايب (v2)

_**ملاحظة هامة: تشير هذه المقالة إلى إصدار Ultimate Multisite 2.x.**_

يمكنك تفعيل ما يصل إلى أربع طرق دفع على صفحة إعدادات الدفع الخاصة بنا: Stripe، Stripe Checkout، PayPal، و Manual. في هذه المقالة، سنرى كيفية التكامل مع **Stripe**.

## تمكين Stripe

لتفعيل Stripe كبوابة دفع متاحة على شبكتك، اذهب إلى **Ultimate Multisite > Settings > Payments** وضع علامة على التبديل بجانب **Stripe** أو **Stripe Checkout** في قسم بوابات الدفع النشطة.

![تمكين Stripe في بوابات الدفع النشطة](/img/config/settings-payment-gateways.png)

### Stripe مقابل Stripe Checkout:

**Stripe:** ستظهر هذه الطريقة مساحة لإدخال رقم بطاقة الائتمان أثناء عملية الدفع.

![حقل بطاقة الائتمان المضمن في Stripe أثناء الدفع](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ستقوم هذه الطريقة بإعادة توجيه العميل إلى صفحة Stripe Checkout أثناء عملية الدفع.

![صفحة إعادة توجيه Stripe Checkout أثناء الدفع](/img/config/settings-payment-gateways.png)

الحصول على مفاتيح API الخاصة بـ Stripe

بمجرد تمكين Stripe كبوابة دفع، ستحتاج إلى ملء حقول **Stripe Publishable Key** و **Stripe Secret Key**. يمكنك الحصول على ذلك بتسجيل الدخول إلى حساب Stripe الخاص بك.

_**ملاحظة:** يمكنك تفعيل **Sandbox mode** لاختبار ما إذا كانت طريقة الدفع تعمل._ 

![حقول مفتاح API لـ Stripe وتبديل Sandbox mode](/img/config/settings-payment-gateways.png)

في لوحة تحكم Stripe الخاصة بك، انقر على **Developers** في الزاوية اليمنى العليا، ثم **API Keys** في القائمة اليسرى.

![قسم Developers في لوحة تحكم Stripe مع API Keys](/img/config/settings-payment-gateways.png)

يمكنك إما استخدام **Test Data** (لاختبار ما إذا كان التكامل يعمل على موقعك الإنتاجي) أو لا. لتغيير ذلك، قم بتبديل مفتاح **Viewing test data**.

![مفتاح تبديل Viewing test data في Stripe](/img/config/settings-payment-gateways.png)

انسخ القيمة من **Publishable key** و **Secret key**، من عمود **Token**، والصقها في حقول بوابة Stripe في Ultimate Multisite. ثم انقر على **Save Changes**.

![قيم مفتاح Publishable و Secret في Stripe](/img/config/settings-payment-gateways.png)

![لصق مفاتيح Stripe في إعدادات Ultimate Multisite](/img/config/settings-payment-gateways.png)

## إعداد Stripe Webhook

يُرسل Stripe أحداث webhook تُخطر Ultimate Multisite في أي وقت يحدث فيه حدث على **حساب Stripe الخاص بك**.

انقر على **Developers** ثم اختر عنصر **Webhooks** في القائمة اليسرى. ثم على الجانب الأيمن انقر على **Add endpoint** *.*

![صفحة Stripe Webhooks مع زر Add endpoint](/img/config/settings-payment-gateways.png)

ستحتاج إلى **Endpoint URL** *.* يقوم Ultimate Multisite بإنشاء عنوان URL للمنقطة تلقائيًا، والذي يمكنك العثور عليه مباشرة أسفل حقل **Webhook Listener URL** في قسم **Ultimate Multisite Stripe Gateway**_.

![حقل Webhook Listener URL في إعدادات بوابة Stripe](/img/config/settings-payment-gateways.png)

**انسخ** عنوان URL للمنقطة و**الصق**ه في حقل **Endpoint URL** في Stripe.

![لصق عنوان URL للمنقطة في إعداد webhook لـ Stripe](/img/config/settings-payment-gateways.png)

بعد ذلك، اختر **Event** *.* تحت هذا الخيار، تحتاج ببساطة إلى تحديد مربع **Select all events** والنقر على **Add events**. بعد ذلك انقر على **Add Endpoint** لحفظ التغييرات.

![اختيار جميع الأحداث وإضافة المنقطة لـ Stripe](/img/config/settings-payment-gateways.png)

هذا كل شيء، تكامل الدفع عبر Stripe مكتمل!
