---
title: إعداد PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# إعداد بوابة PayPal (v2)

_**ملاحظة مهمة: تشير هذه المقالة إلى Ultimate Multisite الإصدار 2.x.**_

يمكنك تفعيل ما يصل إلى أربع طرق دفع في صفحة إعدادات الدفع لدينا: Stripe وStripe Checkout وPayPal والدفع اليدوي. في هذه المقالة، سنرى كيفية التكامل مع **PayPal**.

تمامًا مثل Stripe، يُستخدم PayPal على نطاق واسع للمدفوعات عبر الإنترنت، خصوصًا على مواقع WordPress. سترشدك هذه المقالة إلى كيفية استخدام PayPal كطريقة دفع متاحة على شبكتك.

لاحظ أنك تحتاج إلى امتلاك **حساب PayPal Business** للحصول على بيانات اعتماد API المطلوبة لهذا التكامل.

## تفعيل PayPal على شبكتك {#enabling-paypal-on-your-network}

لتفعيل PayPal كطريقة دفع متاحة على شبكتك، انتقل إلى تبويب **Ultimate Multisite > Settings > Payments** وحدد المربع بجوار PayPal.

![تفعيل PayPal في بوابات الدفع النشطة](/img/config/settings-payment-gateways.png)

## استخدام معالج الإعداد الموجّه {#using-the-guided-setup-wizard}

يضيف Ultimate Multisite 2.10.0 معالج إعداد PayPal موجّهًا إلى إعدادات بوابة الدفع. بعد تفعيل PayPal، استخدم المعالج في **Ultimate Multisite > Settings > Payments** لاختيار الطريقة التي تريد بها ربط البوابة وتأكيد بيانات الاعتماد التي ما زالت مطلوبة قبل الحفظ.

يدعم المعالج مسارين للإعداد:

* **إدخال بيانات الاعتماد يدويًا**: استخدم هذا المسار عندما تكون لديك بالفعل بيانات اعتماد PayPal API، أو عندما لا يكون إعداد OAuth متاحًا لحسابك، أو عندما تفضّل نسخ بيانات الاعتماد من PayPal بنفسك. أدخل API Username وAPI Password وAPI Signature في حقول PayPal، ثم احفظ إعدادات الدفع.
* **بوابة اتصال OAuth**: استخدم هذا المسار فقط عندما يكون خيار OAuth متاحًا ومفعّلًا لتثبيتك. يعرض المعالج تدفق OAuth خلف علامة ميزة، لذلك تستمر الشبكات التي لا تملك العلامة في استخدام حقول إدخال بيانات الاعتماد اليدوية.

إذا لم ترَ خيار OAuth في المعالج، فأكمل تدفق إدخال بيانات الاعتماد يدويًا أدناه. تعمل البوابة باستخدام بيانات اعتماد PayPal Business API نفسها كما في إصدارات Ultimate Multisite 2.x السابقة.

## الحصول على بيانات اعتماد PayPal API {#getting-the-paypal-api-credentials}

بمجرد تفعيل PayPal كبوابة دفع، ستحتاج إلى تعبئة الحقول الخاصة بـ PayPal API **Username** وPayPal API **Password** وPayPal API **Signature**.

يمكنك الحصول على ذلك بتسجيل الدخول إلى حساب PayPal [Live](https://www.paypal.com/home) أو [Sandbox](https://www.sandbox.paypal.com/home).

(تذكّر أنه يمكنك استخدام **وضع sandbox** لاختبار المدفوعات ومعرفة ما إذا كانت البوابة مضبوطة بشكل صحيح. ما عليك سوى تشغيل القسم المقابل.)

![حقول بيانات اعتماد PayPal API ومفتاح تبديل وضع sandbox](/img/config/settings-payment-gateways.png)

لطلب بيانات اعتماد API Signature أو Certificate لحساب PayPal الخاص بك:

  1. انتقل إلى [إعدادات Account](https://www.paypal.com/businessmanage/account/accountAccess).

  2. في قسم **API access**، انقر على **Update**.
![إعدادات PayPal Account مع قسم API access](/img/config/settings-payment-gateways.png)

  3. ضمن **NVP/SOAP API integration (Classic)**، انقر على **Manage API credentials**.
![تكامل PayPal NVP/SOAP API وإدارة بيانات اعتماد API](/img/config/settings-payment-gateways.png)

     * إذا كنت قد أنشأت بالفعل API Signature أو Certificate، فستتم إعادة توجيهك إلى صفحة يمكنك العثور فيها على بيانات اعتمادك.

     * _**ملاحظة:** إذا طُلب منك التحقق من حساب PayPal الخاص بك، فاتبع التعليمات التي تظهر على الشاشة._

  4. حدّد خيارًا _واحدًا_ من الخيارات التالية، ثم انقر على **Agree and Submit**.

     * **Request API Signature** – حدّد للمصادقة باستخدام API Signature.

     * **Request API Certificate** – حدّد للمصادقة باستخدام API Certificate.

  5. ينشئ PayPal بيانات اعتماد API الخاصة بك كما يلي:
![بيانات اعتماد API التي أنشأها PayPal](/img/config/settings-payment-gateways.png)

     * تتضمن **بيانات اعتماد API Signature** كلًا من API Username وAPI Password وSignature، وهي لا تنتهي صلاحيتها. تكون هذه القيم مخفية افتراضيًا لمزيد من الأمان. انقر على **Show/Hide** للتبديل بين إظهارها وإخفائها. عند الانتهاء، انقر على **Done**.

     * تتضمن **بيانات اعتماد API Certificate** كلًا من API Username وAPI Password وCertificate، وتنتهي صلاحيتها تلقائيًا بعد ثلاث سنوات. انقر على **Download Certificate** لحفظ API Certificate على سطح مكتبك.

هذا كل شيء، لقد اكتمل تكامل الدفع عبر PayPal!

إذا كانت لديك أي أسئلة بخصوص إعدادات PayPal، يمكنك الرجوع إلى [مركز المساعدة](https://www.paypal.com/br/smarthelp/home) الخاص بـ PayPal.
