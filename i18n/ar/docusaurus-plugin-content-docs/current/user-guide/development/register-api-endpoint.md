---
title: سجل نقطة النهاية للواجهة البرمجية
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# نقطة النهاية API لتسجيل Ultimate Multisite

في هذا الدرس، ستتعلم كيفية استخدام نقطة النهاية API /register الخاصة بـ Ultimate Multisite لإنشاء عملية الانضمام الكاملة لعميل جديد في شبكتك وكيفية القيام بذلك باستخدام Zapier.

تستخدم نقطة النهاية طريقة POST وتُستدعى عبر عنوان URL _**https://yoursite.com/wp-json/wu/v2/register**_. في هذا الاستدعاء، ستُنفذ 4 عمليات داخل شبكتك:

  * سيتم إنشاء مستخدم WordPress جديد أو تحديده عبر معرف المستخدم.
  * سيتم إنشاء عميل جديد في Ultimate Multisite أو تحديده عبر معرف العميل.
  * سيتم إنشاء موقع جديد على شبكة WordPress.
  * في النهاية، سيتم إنشاء عضوية جديدة في Ultimate Multisite.

لإجراء هذه العملية، ستحتاج إلى بيانات اعتماد API الخاصة بك. للحصول عليها، انتقل إلى لوحة إدارة الشبكة الخاصة بك، وتوجه إلى **Ultimate Multisite > Settings** > **API & Webhooks**، وابحث عن قسم إعدادات API.

![قسم إعدادات واجهة برمجة التطبيقات في Ultimate Multisite](/img/config/settings-api.png)  
حدد **Enable API** واحصل على بيانات اعتماد API الخاصة بك.

الآن، دعنا نستكشف نقطة النهاية ثم نُنشئ إجراء تسجيل في Zapier.

## معلمات جسم الطلب

دعنا نلقي نظرة عامة على الحد الأدنى من المعلومات التي نحتاج إلى إرسالها إلى نقطة النهاية. في نهاية هذه المقالة، ستجد الاستدعاء الكامل.

### العميل

هذه هي المعلومات الضرورية لعملية إنشاء المستخدم والعميل في Ultimate Multisite:

"customer_id" : integer

من الممكن إرسال معرف العميل الذي تم إنشاؤه في شبكتك. إذا لم يُقدَّم، فستُستخدم المعلومات أدناه لإنشاء عميل جديد ومستخدم WordPress جديد. يمكن أيضًا إرسال معرف المستخدم بنفس الطريقة التي يُرسل بها معرف العميل.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **العضوية**

المعلومة الوحيدة التي نحتاجها داخل هذا الكائن هي حالة العضوية.

"membership" { "status" : "string", // أحد "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **المنتجات**

يتم إعطاء المنتجات مصفوفة تحتوي على معرف منتج واحد أو أكثر من شبكتك. احذر، لا تنشئ هذه النقطة المنتجات. راجع وثائق Ultimate Multisite لفهم أفضل لنقطة النهاية لإنشاء المنتجات.

**"products" : [1,2],**

### الدفع

مثل العضوية، نحتاج فقط إلى الحالة.

**"payment" { "status" : "string", // أحد "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### الموقع

ولإغلاق الجسم نحتاج إلى عنوان URL للموقع وعنوانه، كلاهما داخل كائن Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

سيكون عائد نقطة النهاية register عبارة عن مصفوفة تحتوي على معلومات العضوية التي تم إنشاؤها حديثًا.

## إنشاء إجراء في Zapier

مع تقديم هذه النقطة الجديدة والمتينة لإنشاء الحساب، ستتمكن أيضًا من الوصول إلى إجراء جديد في Zapier.

هل تعرف كيف تستخدم وتستمتع بكل ما تقدمه النسخة الجديدة من Zapier؟ تعرف على المزيد هنا. (رابط؟)

### إنشاء إجراء

لتوضيح أفضل لكيفية استخدام نقطة النهاية للتسجيل مع Zapier، دعنا نُنشئ تكاملًا مع Google Forms. في كل مرة يُملأ فيها هذا النموذج وتُحفظ المعلومات في ورقة إجابات النموذج، سيتم إنشاء عضوية جديدة في شبكة Ultimate Multisite.

في Google Forms، أنشئ نموذجًا يحتوي على الحد الأدنى من الحقول اللازمة لإنشاء عضوية جديدة في الشبكة.

<!-- لا تتوفر لقطة شاشة: نموذج Google Forms مع حقول لإنشاء عضوية جديدة -->

الآن في Zapier، أنشئ Zap جديدًا وربط النموذج المُنشأ في Google عبر جدول البيانات حيث يتم حفظ البيانات.

<!-- لا تتوفر لقطة شاشة: تكوين تشغيل Zapier المتصل بجدول بيانات Google Forms -->

تم! تم توصيل نموذج Google Forms مع Zapier وجاهز للتكامل مع الشبكة. الآن دعنا ننتقل إلى الإجراء الذي سينتج عن التفعيل الذي يفعله Google Forms في كل مرة يُملأ فيها.

حدد تطبيق Ultimate Multisite الجديد وحدده. لهذا النوع من Zap اختر خيار Register.

<!-- لا تتوفر لقطة شاشة: اختيار إجراء Zapier مع تطبيق Ultimate Multisite وخيار Register -->

بعد هذه الخطوة الأولى، اختر الحساب الذي سيتم ربطه مع هذا Zap.<!-- لا تتوفر لقطة شاشة: خطوة اتصال حساب Zapier لتطبيق Ultimate Multisite -->

هذا هو الجزء الأكثر حساسية في العملية بأكملها. نحتاج إلى مطابقة الحقول التي جاءت من Google Forms مع الحد الأدنى من الحقول اللازمة لنقطة النهاية register، كما هو موضح في القسم السابق من هذه المقالة.

في هذا المثال، نحتاج فقط إلى تكوين اسم المستخدم، البريد الإلكتروني، كلمة المرور، الاسم وعنوان URL للموقع. يُترك الباقي مُحددًا مسبقًا بحيث تتبع جميع العضويات التي تم إنشاؤها على هذا Google Forms نفس نمط المنتج والحالة.

<!-- لا تتوفر لقطة شاشة: خريطة حقول Zapier بين Google Forms ونقطة النهاية register لـ Ultimate Multisite -->

مع إعداد المعلومات، انتقل إلى الاختبار النهائي. في الشاشة الأخيرة يمكنك رؤية جميع الحقول التي ستُرسل إلى نقطة النهاية، معلوماتها المقابلة والحقول التي ستُرسل فارغة.<!-- لا تتوفر لقطة شاشة: شاشة اختبار Zapier تُظهر جميع الحقول التي ستُرسل إلى نقطة النهاية register -->

اختبر Zap الجديد الخاص بك ويجب أن يكتمل بنجاح. إذا حدث أي خطأ، فراجع جميع الحقول وتأكد من إرسالها بشكل صحيح. نظرًا لوجود الكثير من المعلومات، قد تمر بعض الأشياء دون أن تُلاحظ.

### معلمات نقطة النهاية الكاملة

إليك الاستدعاء الكامل وجميع إمكانيات الحقول التي يمكن إرسالها.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // أحد "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // أحد "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
