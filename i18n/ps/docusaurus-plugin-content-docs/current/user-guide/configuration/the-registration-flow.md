---
title: ثبت کولو جریان
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# دทะเบียน کولو (v2) {#the-registration-flow-v2}

_**مهم یادداشت: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

کاربران می‌توانند به روش‌های مختلف در شبکه شما ثبت‌نام کنند. آنها می‌توانند از فرم ثبت‌نام شما یا یک لینک قابل اشتراک برای یک طرح از پیش انتخاب شده استفاده کنند. در اینجا ما نشان خواهیم داد که مشتریان شما چگونه با مسیرهای موجود در شبکه خود ثبت‌نام کنند و بعد از ثبت‌نام چه اتفاقی می‌افتد.

## استفاده از فرم ثبت‌نام: {#using-the-registration-form}

این فرآیند استاندارد ثبت‌نام است. شما یک صفحه ثبت‌نام با یک **checkout form** (فرم پرداخت) ایجاد می‌کنید و این جایی خواهد بود که مشتریان شما برای ثبت‌نام در شبکه خود و اشتراک در یک طرح می‌روند. اگر بخواهید، می‌توانید چندین صفحه ثبت‌نام داشته باشید، هر کدام با فرم ثبت‌نام متفاوتی.

صفحه پیش‌فرض برای ثبت‌نام [_**yourdomain.com/register**_ است، اما شما می‌توانید این را در هر زمان در **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** تغییر دهید.

وقتی کاربر به صفحه ثبت‌نام شما می‌رسد (معمولاً با کلیک روی دکمه **Sign in** یا **Buy now**)، فرم ثبت‌نام خود را در آنجا مشاهده خواهد کرد.

![فرم ثبت‌نام در صفحه ثبت‌نام نمایش داده شده است](/img/frontend/registration-form.png)

این یک مثال از فرم پرداخت است که در فرانت‌اند (Frontend) چگونه ظاهر می‌شود:

![فرم ثبت‌نام پرداخت فرانت‌اند](/img/config/checkout-frontend-registration.png)

همه کارهایی که باید انجام دهند این است که تمام فیلدهای اجباری - ایمیل، نام کاربری، رمز عبور و غیره... - را پر کنند و برای طرح هزینه پرداخت کنند یا اگر برای یک طرح رایگان یا طرح پولی با دوره آزمایشی بدون اطلاعات پرداخت ثبت‌نام می‌کنند، آدرس ایمیل خود را تأیید کنند.

در صفحه "ممنونیم" (Thank you)، آنها پیامی خواهند دید که به آنها می‌گوید آیا نیاز دارند آدرس ایمیل خود را تأیید کنند یا اینکه وب‌سایتشان از قبل فعال است و می‌توانند استفاده از آن را شروع کنند.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

که دیمیل آدرس ایمیل هم لازم دیارل، باید به صندوق پستی خپل ایمیل بدن و روی لینک تأیید کلیک کنن. اگر آدرس ایمیل یې تأیید نشه، ویبسایت یې فعال نخواهد شد.

اگر دوی یې پلاني به پخسې ثبت کړی دی یا توییکدای ایمیل لازم نه دی په شبکې مې، دوی د چک اوټ کېدو وروسته خپل ویبسایت فعال کیږي او دوی ته یو لینک ښودل کیږي چې د خپل ډش‌بورد (dashboard) لپاره لاگې شي.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## کارولایي له لارې یوه Shareable Link: {#using-a-shareable-link}

د له لارې ثبت او کارولایي لینک په کارولو کې، د ثبت form سره تقریباً همدا دی، یوازې توپیر دا ده چې کله تاسو یو shareable link کارولی، دوی کولی شي په چک اوټ form کې یو محصول یا ویبسایت template له پیشو (refer to the section Pre-selecting products and templates via URL parameters) غوره کړی وي، یا شاید یو coupon code اضافه کړی وي (refer to the section Using URL Parameters).

ثبت او کارولایي پروسه همدا به وي: دوی باید خپل نوم، username، ایمیل آدرس، ویبسایتको نوم او عنوان و ته پوره کړي... तर پلان یا سایت template د دوی لپاره پہلے له پیشو غوره شوی به وي.

### manuall payments (د وروستۍ پیسې) په کارولو کې: {#registering-using-manual-payments}

که تاسو PayPal، Stripe یا Ultimate Multisite یا د دې add-on integrations وړاندې کړایي کوم بل لوړلوی (payment gateway) کارولایي نه غواړئ، دوی کولی شي د خپل مشتریانو لپاره manuall payments کارولی. دا به تاسو ته اجازه ورکړي چې دوی شبکې ته ثبت کولو وروسته، له ستاسو غوره لوړلوي څخه یو invoice (فاکټورا) تولید کړئ ترڅو دوی یې بپرداام.

ثبت او کارولایي پروسه دقیقاً لاندې په څیر به وي، خو د ثبت صفحه کې دوی پیغام ویني چې دوی ته د پیسې پوره کولو لپاره مزید لارښوونې ورته ایمیل ترلاسه کیږي.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

و ثبت نام پوره، هغه د طالایي لارښوونې ویني چې تاسو یې تنظیم کړی (او په ایمیل هم به ترلاسه کړي).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

د طالایي لارښوونې کولی شي په **Ultimate Multisite > Settings > Payments** کې بدلون ورکړل چې **Manual** د طالایي طریقې خپله فعال کړئ:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

د کلاینټونو له پوره کولو وروسته او که دوی تاسو ته تأییدیه پېژندل کړي، تاسو باید **د طالایي لګښت manuallly confirm** کړئ ترڅو د کلاینټ MEMBERSHIP او ویبسټ فعال کړئ.

دا کار کوئ چې **Ultimate Multisite > Payments** ته لاړ شئ او د کلاینټ لګښت ومومئ. دا باید لاهم **Pending** وضعیت ښیي.

![Payments list with pending manual payment](/img/admin/payments-list.png)

د لګښت نمبر باندې کلیک وکړئ او تاسو کولی شئ د Status یې **Completed** ته بدل کړئ.

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

کله چې Status یې **Completed** ته بدل کړئ، تاسو باید پیغام "Activate membership" وینئ. دا خپله Option **on** کړئ ترڅو د دې کلاینټ او ویبسټ فعال شي چې له هغه سره تړلی دی. بیا کلیک وکړئ ترڅو **Save Payment** وکړي.

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

د اوس څخه، ستاسو کلاینټ کولی شي د dashboard او ټولې features چې دوی سبسکرایب کړی، ورته لاسرسی پیدا کړي.
