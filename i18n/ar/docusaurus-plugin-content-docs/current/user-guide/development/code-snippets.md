---
title: مقتطفات الكود
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets for v2

بشكل أساسي، تُستخدم مقتطفات الكود لـ **WordPress** لتنفيذ إجراءات معينة قد تتطلب إضافة مكون إضافي أصغر. تُوضع هذه المقتطفات في أحد ملفات نواة WordPress أو قالبك (عادةً ملف functions.php في قالبك النشط) أو يمكن استخدامها كمكوّن MU.

في هذه المقالة سنعرض لك ثلاثة مقتطفات كود يمكن استخدامها مع **Ultimate Multisite v2** :

  * [**تغيير موضع عنصر قائمة الحساب**](#changing-the-position-of-the-account-menu-item)

  * [**كيفية التحقق مما إذا كان المستخدم ضمن خطة معينة و/أو لديه اشتراك نشط**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**تصحيح مشاكل CORS مع أيقونات الخطوط في النطاقات المربوطة**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Changing the position of the Account menu item

لتغيير موضع عنصر قائمة الحساب في لوحة تحكم عميلك، فقط أضف مقتطف الكود التالي إلى ملف functions.php في قالبك النشط. يمكنك أيضًا وضع المقتطف داخل أحد مكوّنات MU أو مكوّنات مخصصة.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // عدل هذه القيمة لوضع القائمة في الموضع المطلوب.
```

## How to check if the user is under a given plan and/or has an active subscription

كمدير شبكة، قد تحتاج إلى إنشاء وظائف مخصصة تقوم بتنفيذ إجراءات أساسية أو تفعيل خدمة/ميزة لمجموعة مختارة من المشتركين أو المستخدمين النهائيين، بناءً على حالة اشتراكهم والخطة التي يشتركون فيها.

ستساعدك هذه الدوال الأصلية لـ Ultimate Multisite في ذلك.

للتحقق مما إذا كان المستخدم عضوًا في خطة معينة، يمكنك استخدام الدالة:

```php
wu_has_plan($user_id, $plan_id)
```

للتحقق مما إذا كان الاشتراك نشطًا، يمكنك استخدام الدالة:

```php
wu_is_active_subscriber($user_id)
```

فيما يلي مثال على مقتطف يختبر ما إذا كان المستخدم الحالي تحت خطة محددة (معرف الخطة 50) وإذا كان اشتراك المستخدم نشطًا.

```php
$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // المستخدم عضو في الخطة ويشترك نشطًا، قم بالعمل} else { // المستخدم ليس عضوًا في الخطة -- أو -- اشتراكه غير نشط، قم بالعمل الآخر} // end if;
```

لاحظ أن **wu_has_plan** يتطلب "معرف الخطة" ليعمل.

للحصول على معرف الخطة، يمكنك الانتقال إلى **Ultimate Multisite > Products**. سيُظهر معرف كل منتج على يمين الجدول.

لاحظ أن المستخدمين يمكنهم الاشتراك فقط في **Plan**، وليس في Package أو Service، حيث أنها إضافات فقط لـ **Plan**.

![قائمة المنتجات مع أرقام تعريف الخطة](/img/admin/products-list.png)

## Fixing CORS issues with Font-Icons in mapped domains

## Fixing CORS issues with Font-Icons in mapped domains

بعد ربط نطاق بموقع فرعي قد تكتشف أن الموقع يواجه صعوبة في تحميل الخطوط المخصصة. يحدث ذلك بسبب حظر عبر الأصل في إعدادات الخادم.

نظرًا لأن ملفات الخطوط تُحمَّل عادةً مباشرةً من CSS، فإن مكوّن ربط النطاقات لا يمكنه إعادة كتابة عناوين URL لاستخدام النطاق المربوط بدلاً من الأصلي، لذا لتصحيح المشكلة، ستحتاج إلى تعديل ملفات تكوين الخادم.

فيما يلي مقتطفات كود لتصحيح المشكلة لـ Apache و NGINX. تتطلب هذه التغييرات معرفة متقدمة بملفات تكوين الخادم (.htaccess وملفات تكوين NGINX). إذا لم تكن مرتاحًا لإجراء هذه التغييرات بنفسك، أرسل هذه الصفحة إلى وكلاء دعم مزود الاستضافة عند طلب المساعدة.

### Apache

في ملف .htaccess الخاص بك، أضف:

```apache
<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”
```

### NGINX

في ملف تكوين الخادم (الموقع يختلف من خادم لآخر)، أضف:

```nginx
location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
```
