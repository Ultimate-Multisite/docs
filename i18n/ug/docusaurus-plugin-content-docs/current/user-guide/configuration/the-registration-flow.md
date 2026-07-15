---
title: تسجيل سير
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# قيد دان (v2)

_**مهم یادداشت: این مقاله به Ultimate Multisite نسخه 2.x اشاره دارد.**_

کاربران می‌توانند به روش‌های مختلف در شبکه شما ثبت‌نام کنند. آنها می‌توانند از فرم ثبت‌نام شما یا یک لینک قابل اشتراک برای یک طرح از پیش انتخاب شده استفاده کنند. در اینجا ما نشان خواهیم داد که مشتریان شما چگونه با مسیرهای موجود در شبکه خود ثبت‌نام کنند و بعد از ثبت‌نام چه اتفاقی می‌افتد.

## استفاده از فرم ثبت‌نام: {#using-the-registration-form}

این فرآیند استاندارد ثبت‌نام است. شما یک صفحه ثبت‌نام با یک **checkout form** (فرم پرداخت) ایجاد می‌کنید و این جایی است که مشتریان شما برای ثبت‌نام در شبکه خود و اشتراک در یک طرح می‌روند. اگر بخواهید، می‌توانید چندین صفحه ثبت‌نام داشته باشید، هر کدام با فرم ثبت‌نام متفاوتی.

صفحه پیش‌فرض برای ثبت‌نام [_**yourdomain.com/register**_ است، اما شما می‌توانید این را در هر زمان در **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** تغییر دهید.

وقتی کاربر به صفحه ثبت‌نام شما می‌رسد (معمولاً با کلیک روی دکمه **Sign in** یا **Buy now**)، فرم ثبت‌نام خود را در آنجا مشاهده خواهد کرد.

![فرم ثبت‌نام در صفحه ثبت‌نام نمایش داده شده است](/img/frontend/registration-form.png)

این یک نمونه از فرم پرداخت است که در فرانت‌اند (Frontend) ظاهر می‌شود:

![فرم ثبت‌نام پرداخت فرانت‌اند](/img/config/checkout-frontend-registration.png)

همه کار این است که تمام فیلدهای اجباری - ایمیل، نام کاربری، رمز عبور و غیره... - را پر کنند و برای طرح هزینه پرداخت کنند یا اگر برای یک طرح رایگان یا طرح پولی با دوره آزمایشی بدون اطلاعات پرداخت ثبت‌نام می‌کنند، آدرس ایمیل خود را تأیید کنند.

در صفحه "ممنونیم" (Thank you)، پیامی خواهند دید که به آنها می‌گوید آیا نیاز دارند آدرس ایمیل خود را تأیید کنند یا اینکه وب‌سایتشان از قبل فعال است و می‌توانند استفاده از آن را شروع کنند.

![Registration-daşdan soň ýa-da takykly linkden ulanyp goşmak](/img/frontend/registration-thank-you.png)

Eger e-poçta adresi tasdiqlamak zerur bolsa, olaryk öz e-poçta kutlygyna gitmeli we tasdiq linkine basmaly. Eger e-poçta adresi tasdiqlanmasa, olaryk web sahypasy işlemek (aktivləşdirmek) başlamaz.

Eger olar toplanan plan bilen goşylsa ýa-da siziň ulgamynda e-poça tasdiqlamak mazeratyny bermeýän bolsa, olaryk checkoutdan soň web sahypasy hemen işlenip biler we olara dashboardyza girmezlik üçin bir link görkezilýär.

![Dashboardyza girmezlik linki bilen web sahypasy işlendi](/img/frontend/site-activated.png)

## Paylaşylmadyk Linkden Ulanyp Goşmak: {#using-a-shareable-link}

Paylaşylmadyk link arkaly goşmak prosesi esasan goşmak formasy bilen birme-bir, diňe şeýledirki, paylaşylmadyk link ulanylanda, müşderileriniz checkout formasynda önüm ýa-da web sahypasy şablonyny önceden saýlaýarlar (URL parametrlary arkaly önümleri we şablonlary önceden saýlamak barada bölümden okap bilersiňiz) ýa-da belki hem kupon kody goşylyp biler (URL parametrlary ulanyp barada bölümden okap bilersiňiz).

Goşmak prosesi birme-bir bolup durar: olaryk adyny, ismini, e-poçta adresini, web sahypasy adyny we başlygyny ýazmaly... ýöne plan ýa-da web şablonu olaryk önceden saýlanyp biler.

### Manual Tozlary Ulanyp Goşmak: {#registering-using-manual-payments}

Eger siz Ultimate Multisite ýa-da onuň goşulmalaryny teklip edýän PayPal, Stripe ýa-da beýleki her bir töleg portalyny ulamak istemezse, olaryk müşderleriniz üçin manual tozlary ulanyp bilersiňiz. Bu ýagdaýda, olaryk siziň ulgamynda goşulandan soň siz olara tölemek üçin has howpsuz töleg edarçasy (invoice) döredip berip bilersiňiz.

Goşmak prosesi ýokarda ýaly birme-bir bolup durar, ýöne goşmak sahypasynda olaryk tölegi tamamlamak üçin has maglumat bilen bilelikdirýän e-poçta habar görkezilýär.

![Registration during manual payment message](/img/frontend/registration-manual-notice.png)

و بعد اینکه ثبت‌نام انجام شد، اون‌ها دستورالعمل‌های پرداخت رو که شما تنظیم کردید ببینند (و همچنین این اطلاعات به ایمیلشون هم می‌رسه).

![دستورالعمل‌های پرداخت پس از ثبت‌نام نمایش داده شده](/img/frontend/registration-payment-instructions.png)

این دستورالعمل‌های پرداخت رو می‌تونید با روشن کردن گزینه **Manual** در مسیر **Ultimate Multisite > Settings > Payments** تغییر بدید:

![سوئیچ پرداخت دستی همراه با فیلد دستورالعمل‌های پرداخت](/img/config/manual-gateway-settings.png)

بعد از اینکه مشتری شما پرداخت دستی رو انجام داد و تأییدیه رو به شما فرستاد، شما باید برای فعال کردن عضویت مشتری و وب‌سایتش، **پرداخت رو دستی تایید کنید**.

برای این کار، به مسیر **Ultimate Multisite > Payments** بروید و پرداخت مشتری را پیدا کنید. هنوز وضعیت آن باید **Pending** (در انتظار) باشد.

![لیست پرداخت‌ها با پرداخت دستی در انتظار](/img/admin/payments-list.png)

روی شماره پرداخت کلیک کنید و می‌توانید وضعیت آن را به **Completed** (تکمیل شده) تغییر دهید.

![صفحه جزئیات پرداخت](/img/admin/payment-edit.png)

![تغییر وضعیت پرداخت به Completed](/img/admin/payment-status-completed.png)

بعد از اینکه وضعیت آن را به **Completed** تغییر دادید، باید پیام **Activate membership** (فعال‌سازی عضویت) را ببینید. این گزینه را **on** (روشن) کنید تا عضویت و وب‌سایت مربوط به این مشتری فعال شود. سپس روی دکمه برای **Save Payment** (ذخیره پرداخت) کلیک کنید.

![سوئیچ فعال‌سازی عضویت و دکمه ذخیره پرداخت](/img/admin/payment-activate-membership.png)

حالا مشتری شما باید بتواند به داشبورد و تمام امکاناتی که مشترک شده است، دسترسی داشته باشد.
