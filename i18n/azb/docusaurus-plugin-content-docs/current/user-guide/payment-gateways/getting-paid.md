---
title: پول آلماق
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# اؤدنیش آلماق (v2)

_**اؤنه‌ملی قئید: بو مقاله Ultimate Multisite نسخه 2.x-ه آیددیر.**_

Ultimate Multisite ایچینده قورولموش عضویت و صورت‌حساب سیستمی وار. صورت‌حساب سیستمیمیزین ایشله‌مه‌سی اوچون، e-commerce-ده ایشله‌نن ان یایغین اؤدنیش gateway-لرینی بیرلشدیرمیشیک. Ultimate Multisite-ده پیش‌فرض اؤدنیش gateway-لری _Stripe_ ، _PayPal_ و Manual Payment-دیر. اؤدنیش آلماق اوچون اؤزل add-on-لارینی قوراشدیریراق _WooCommerce_ ، _GoCardless_ و _Payfast_ دا ایشله‌ده بیلرسینیز.

## اساسی تنظیم‌لر {#basic-settings}

بو اؤدنیش gateway-لریندن هر بیرینی Ultimate Multisite اؤدنیش تنظیم‌لری آلتیندا قوراشدیرا بیلرسینیز. اونو **Ultimate Multisite menu > Settings > Payments** یولو ایله تاپا بیلرسینیز.

![Ultimate Multisite-ده Payments پنلینی گؤستره‌ن اؤدنیش تنظیم‌لری صفحه‌سی](/img/config/payments-settings-page.png)

اؤدنیش gateway-ینیزی قورمادان اؤنجه، قوراشدیرا بیله‌جه‌یینیز اساسی اؤدنیش تنظیم‌لرینه باخین:

**اتوماتیک یئنیله‌مه‌نی مجبور ائله** **:** بو، اؤدنیشین ایشلدیجی‌نین سئچدی‌یی صورت‌حساب تکراریلیغینا گؤره هر صورت‌حساب دؤوره‌سینین سونوندا اؤز-اؤزونه تکرار اولماسی‌نی تضمین ائده‌جک.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 اتوماتیک یئنیله‌مه فعال اولان تکرارلی عضویت ساخلامازدان اؤنجه، فعال gateway-ین یئنیله‌مه اوچون تکرا ایشله‌نه بیلن اعتبارینین اولوب-اولمادیغینی یوخلاییر. یئنیله‌مه اعتباری gateway subscription، billing agreement، ساخلامیش vault token یا بونا برابر تکرا ایشله‌نه بیلن اؤدنیش یؤنتمی اولا بیلر. اگر gateway ایشله‌نه بیلن اعتبارین اولمادیغینی بیلدیرسه، Ultimate Multisite عضویتی ساخلايیر، اما اتوماتیک یئنیله‌مه‌نی سؤندورور و اعتبار چاتیشمامازلیغی حالینی قئید ائدیر کی، مدیر یا support آخیینی مشتری‌دن یئنیله‌مه تاریخیندن اؤنجه اؤدنیشی یئنی‌دن ایجازه‌له‌مه‌سینی ایسته‌یه بیلسین.

بو، gateway یالنیز بیر دفه‌لیک اؤدنیش‌لری تاپلا بیلدییی حالدا، عضویتین اتوماتیک یئنیله‌نه‌جک کیمی گؤرونمه‌سینین قاباغینی آلیر. Gateway add-on-لری تکرارلی checkout-لارین تکرا ایشله‌نه بیلن اعتبار ساخلاماسینی تأیید ائتمه‌لیدیر، خصوصاً gateway هم بیر دفه‌لیک capture، هم ده vaulted/subscription اؤدنیش مودلارینی دسته‌کله‌ینده.

**اؤدنیش یؤنتمی اولمادان trial-لارا ایجازه وئر:** بو سئچیم فعال اولاندا client قئیدیات پروسه‌سینده هیچ مالی معلومات علاوه ائتمه‌لی اولمایاجاق. بو فقط trial مودتی قورتاراندان سونرا لازیم اولاجاق.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**اؤدنیش تأییدینده invoice گؤندر:** بو، اؤدنیشدن سونرا invoice گؤندریب-گؤندرمه‌مه‌ک سئچیمی وئرir. قئید ائدین کی، ایشلدیجی‌لر اؤز subsite dashboard-لاریندا اؤدنیش تاریخچه‌لرینه چاتیشاجاقلار. بو سئچیم Manual Gateway-ه شامیل دییل.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Invoice نومره‌له‌مه طرحی:** بورادا یا اؤدنیش مرجع کودو، یا دا آردیجیل نومره طرحی سئچه بیلرسینیز. Invoice-لارینیز اوچون اؤدنیش مرجع کودو ایشله‌تمه‌یی سئچسنiz، هیچ نه قوراشدیرماغا احتیاج یوخدور. آردیجیل نومره طرحی سئچسنiz، **سونراکی invoice نومره‌سی**-نی (بو نومره سیستم‌ده یارادیلاجاق سونراکی invoice اوچون invoice نومره‌سی کیمی ایشله‌نه‌جک. هر یئنی invoice یارادیلاندا بیر واحد آرتیر. Invoice آردیجیل نومره‌سینی مشخص بیر دگره سیفیرلاماق اوچون اونو دَییشیب ساخلايا بیلرسینیز) و **invoice نومره پیشوندی**-نی قوراشدیرمالیسینیز.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Gateway-لری هارادا تاپماق اولار: {#where-to-find-the-gateways}

اؤدنیش gateway-لرینی همین صفحه‌ده قورا بیلرسینیز ( **Ultimate Multisite > Settings > Payments**). **active payment gateways**-ین دوز آلتیندا بونلاری گؤره‌جه‌کسینیز: _Stripe_ ، _Stripe_ _Checkout_ ، _PayPal_ و _Manual_.

![Stripe، Stripe Checkout، PayPal و Manual-ی لیستله‌ین Active Payment Gateways بؤلمه‌سی](/img/config/payments-active-gateways.png)

هر اؤدنیش gateway-ی اوچون اونو قورماق مرحلله‌رینده سیزه یول گؤسته‌ره‌جک آیری مقاله‌میز وار؛ آشاغیداکی لینک‌لرده تاپا بیلرسینیز.

اؤدنیش جزئیاتینی گؤره و دَییشدیره بیلرسینیز:

![اؤدنیش دَییشدیرمه آراایوزو](/img/admin/payment-edit.png)

اؤدنیش دَییشدیرمه صفحه‌سینین تام گؤرونوشو بودور:

![اؤدنیش دَییشدیرمه تام آراایوزو](/img/admin/payment-edit-full.png)

اؤدنیش gateway تنظیم‌لرینین تام گؤرونوشو ده بودور:

![اؤدنیش gateway تنظیم‌لری تام صفحه‌سی](/img/config/settings-payments-gateways-full.png)

**Stripe gateway-ینین قورولماسی**

**PayPal gateway-ینین قورولماسی**** **

**manual اؤدنیش‌لرین قورولماسی**

ایندی، اگر _WooCommerce_ ، _GoCardless_ یا _Payfast_ اؤدنیش gateway-ی کیمی ایشله‌تمک ایسته‌ییرسینیزسه، **اونلارین add-on-لارینی قوراشدیریب قورمالیسینیز**.

### WooCommerce add-on-ونو نئجه قوراشدیرماق: {#how-to-install-the-woocommerce-add-on}

بیلirik کی، _Stripe_ و _PayPal_ بعضی اؤلکه‌لرده موجود دییل و بو، Ultimate Multisite ایشلدیجی‌لرینین plugin-یمیزی مؤثر شکیلده ایشله‌تمه‌سینی محدودلاشدیریر یا انگلله‌ییر. بونا گؤره _WooCommerce,_ ایله بیرلشدیرمک اوچون بیر add-on یاراتدیق؛ بو، چوخ مشهور بیر e-commerce plugin-یدیر. دونیاداکی developer-لر فرقلی اؤدنیش gateway-لرینی اونا بیرلشدیرمک اوچون add-on-لار یاراتدی‌لار. بوندان فایدالانیب Ultimate Multisite صورت‌حساب سیستمی ایله ایشله‌ده بیله‌جه‌یینیز اؤدنیش gateway-لرینی گئنیشله‌ندیر‌دیک.

_**اؤنه‌ملی:** Ultimate Multisite: WooCommerce Integration اوچون WooCommerce ان آزی اصلی site-ینیزده فعال اولمالیدیر._

اؤنجه add-on-لار صفحه‌سینه گئدین. اونو **Ultimate Multisite > Settings** یولو ایله تاپا بیلرسینیز. **Add-ons** جدولی‌نی گؤرمه‌لی‌سینیز. **Check our Add-ons** اوستونه کلیک ائدین.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

**Check our Add-ons** اوستونه کلیک ائدندن سونرا، add-on-لار صفحه‌سینه یؤنله‌ندیریله‌جه‌کسینیز. بورادا بوتون Ultimate Multisite add-on-لارینی تاپا بیلرسینیز. **Ultimate Multisite: WooCommerce Integration** add-on-ونا کلیک ائدین.

![WooCommerce Integration دا داخیل اولماقلا Ultimate Multisite add-on-لارینی لیستله‌ین add-on-لار صفحه‌سی](/img/addons/addons-page.png)

اضافه‌نین دیتایل‌لاری ایله بیر پەنجیره آچیلار. تکجه **ایندی قوراشدیر** دؤیمه‌سینه کلیک ائله‌یین.

<!-- اسکرین‌شات یوخدور: Ultimate Multisite WooCommerce Integration اضافه‌سینین دیتایل پەنجیره‌سی، ایندی قوراشدیر دؤیمه‌سی ایله -->

قوراشدیرما قورتاراندان سونرا، افزونه‌لر صفحه‌سینه یؤنله‌ندیریله‌جه‌ک‌سینیز. بورادا تکجه **شبکه‌ده فعال ائله** دؤیمه‌سینه کلیک ائله‌یین و WooCommerce اضافه‌سی شبکه‌نیزده فعال اولاجاق.

<!-- اسکرین‌شات یوخدور: افزونه‌لر صفحه‌سی، WooCommerce Integration اضافه‌سی اوچون شبکه‌ده فعال ائله لینکینه مالیک -->

اونو فعال ائله‌دیکدن سونرا، اگر هله‌ده وب‌سایتینیزده WooCommerce افزونه‌سی قوراشدیریلماییب و فعال ائدیلمه‌ییبسه، بیر یادآوری آلاجاق‌سینیز.

<!-- اسکرین‌شات یوخدور: مدیرə WooCommerce افزونه‌سینی قوراشدیرماق و فعال ائله‌مک اوچون یادآوری ائدن ایداره بیلدیریشی -->

WooCommerce Integration اضافه‌سی حاقیندا داها آرتیق اوخوماق اوچون، **بورا کلیک ائله‌یین**.

### GoCardless اضافه‌سینی نئجه قوراشدیرماق: {#how-to-install-the-gocardless-add-on}

_GoCardless_ اضافه‌سینی قوراشدیرماق آدیم‌لاری دئمه‌ک اولار کی _WooCommerce_ اضافه‌سی ایله عینیدیر. لطفاً اضافه‌لر صفحه‌سینه گئدین و **Ultimate Multisite: GoCardless Gateway** اضافه‌سینی سئچین.

<!-- اسکرین‌شات یوخدور: اضافه‌لر صفحه‌سی، Ultimate Multisite GoCardless Gateway اضافه‌سی وورغولانمیش -->

اضافه پەنجیره‌سی آچیلار. **ایندی قوراشدیر** دؤیمه‌سینه کلیک ائله‌یین.

<!-- اسکرین‌شات یوخدور: Ultimate Multisite GoCardless Gateway اضافه‌سینین دیتایل پەنجیره‌سی، ایندی قوراشدیر دؤیمه‌سی ایله -->

قوراشدیرما قورتاراندان سونرا، افزونه‌لر صفحه‌سینه یؤنله‌ندیریله‌جه‌ک‌سینیز. بورادا تکجه **شبکه‌ده فعال ائله** دؤیمه‌سینه کلیک ائله‌یین و _GoCardless_ اضافه‌سی شبکه‌نیزده فعال اولاجاق.

<!-- اسکرین‌شات یوخدور: افزونه‌لر صفحه‌سی، GoCardless Gateway اضافه‌سی اوچون شبکه‌ده فعال ائله لینکینه مالیک -->

_GoCardless_ درگاهی ایله نئجه باشلاماغی اؤیرنمک اوچون، **بو مقاله‌نی اوخویون**.

### Payfast اضافه‌سینی نئجه قوراشدیرماق: {#how-to-install-the-payfast-add-on}

اضافه‌لر صفحه‌سینه گئدین و **Ultimate Multisite: Payfast Gateway** اضافه‌سینی سئچین.

<!-- اسکرین‌شات یوخدور: اضافه‌لر صفحه‌سی، Ultimate Multisite Payfast Gateway اضافه‌سی وورغولانمیش -->

اضافه پەنجیره‌سی آچیلار. **ایندی قوراشدیر.** دؤیمه‌سینه کلیک ائله‌یین.

<!-- اسکرین‌شات یوخدور: Ultimate Multisite Payfast Gateway اضافه‌سینین دیتایل پەنجیره‌سی، ایندی قوراشدیر دؤیمه‌سی ایله -->

قوراشدیرما قورتاراندان سونرا، افزونه‌لر صفحه‌سینه یؤنله‌ندیریله‌جه‌ک‌سینیز. بورادا تکجه **شبکه‌ده فعال ائله** دؤیمه‌سینه کلیک ائله‌یین و _Payfast_ اضافه‌سی شبکه‌نیزده فعال اولاجاق.

<!-- اسکرین‌شات یوخدور: افزونه‌لر صفحه‌سی، Payfast Gateway اضافه‌سی اوچون شبکه‌ده فعال ائله لینکینه مالیک -->
