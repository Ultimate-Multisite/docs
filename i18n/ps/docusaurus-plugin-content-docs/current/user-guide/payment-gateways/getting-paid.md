---
title: پایي ترلاسه کول
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# به پاداش رساندن (v2)

_**توجه بسیار مهم: این مقاله Ultimate Multisite نسخه ۲.x را می شناسد.**_

Ultimate Multisite یک سیستم عضویت و صورت‌حساب داخلی دارد. برای اینکه سیستم صورت‌حساب ما کار کند، ما رایج‌ترین دروازه‌های پرداخت مورد استفاده در تجارت الکترونیک را ادغام کرده‌ایم. دروازه‌های پرداخت پیش‌فرض در Ultimate Multisite عبارتند از _Stripe_، _PayPal_ و پرداخت دستی (Manual Payment). شما همچنین می‌توانید با نصب افزونه‌های مربوطه از _WooCommerce_، _GoCardless_ و _Payfast_ برای دریافت پرداخت استفاده کنید.

## تنظیمات پایه

شما می‌توانید هر یک از این دروازه‌های پرداخت را در تنظیمات پرداخت Ultimate Multisite پیکربندی کنید. می‌توانید با رفتن به **منوی Ultimate Multisite > Settings > Payments** آن را پیدا کنید.

![صفحه تنظیمات پرداخت در Ultimate Multisite که پنل Payments را نشان می‌دهد](/img/config/payments-settings-page.png)

قبل از اینکه دروازه پرداخت خود را تنظیم کنید، لطفاً نگاهی به تنظیمات پرداخت پایه داشته باشید که می‌توانید پیکربندی کنید:

**Force auto-renew (اجبار به تمدید خودکار):** این گزینه اطمینان حاصل می‌کند که پرداخت در پایان هر چرخه صورت‌حساب بسته به فرکانس صورت‌حساب انتخابی کاربر، به طور خودکار تکرار خواهد شد.

<!-- Screenshot unavailable: تنظیم کلیک روی Force Auto-Renew در صفحه تنظیمات پرداخت -->

Ultimate Multisite نسخه ۲.۱۳.۰ بررسی می‌کند که آیا دروازه فعال دارای یک اعتبار تمدید قابل استفاده مجدد است یا خیر، قبل از ذخیره عضویت تکراری با قابلیت تمدید خودکار فعال. یک اعتبار تمدید می‌تواند اشتراک دروازه، توافق صورت‌حساب، توکن خزانه ذخیره شده (saved vault token) یا روش پرداخت قابل استفاده مجدد معادل آن باشد. اگر دروازه گزارش دهد که هیچ اعتبار قابل استفاده‌ای وجود ندارد، Ultimate Multisite عضویت را ذخیره می‌کند اما تمدید خودکار را خاموش کرده و وضعیت فاقد اعتبار را ثبت می‌کند تا یک مدیر یا جریان پشتیبانی بتواند از مشتری بخواهد قبل از تاریخ تمدید دوباره پرداخت را تأیید کند.

د دې کار له دې پېښه ساتيږي چې د membership (عضویت) د gateway (پایلو دروازې) په صورت کې بیا خودکار (auto-renew) نه ښکاري، کله چې gateway یوازې یو ځلونه پیسې ترلاسه کولی شي. Gateway add-ons باید ډاغه کیدای شي چې tekrوارونکي چک اوټاوتونه (recurring checkouts) یو بیا کارولای ورکونکی معلومات (reusable credential) ذخیره کړي، تر ټولو ډیر کله چې gateway هم یوځل وخت (one-time capture) او vaulted/subscription payment modes وپلو.

**د پیسې بدون لوړ (Allow trials without payment)** **منهنجه:** د دې خيار فعال کولو سره، د رეგისტრáció پروسې په جریان کې ستاسو کلینټ باید هیڅ مالي معلومات اضافه নকړي. دا کار یوازې هغه وخت کیږي چې آزمویني دوره ختم شي.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**د پیسې کیدو په تایید کې فاکټور (Send invoice on payment confirmation):** دا تاسو ته دا خيار ورکوي چې آیا د پیسې ترلاسه کولو وروسته فاکټور (invoice) کیدو هم وکړئ یا نه. یاد ولहोस् چې کارونکي کولی شي د دوی subsite dashboard کې خپل د پیسې تاریخ (payment history) وګوري. دا خيار د Manual Gateway لپاره کار نه دی.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**د فاکټور نمبر کولو نظام (Invoice numbering scheme):** دلته، تاسو کولی شئ یا یو د پیسې مرجع کوډ (payment reference code) غوره کړئ او یا یو ترتیب شوي نمبرहरूको نظام (sequential number scheme). که تاسو د خپل فاکټورونو لپاره د مرجع کوډ کارولو غوره کوئ، نو تاسو هیڅ تنظیم کولو اړتیا نه لرئ. که تاسو د ترتیب شوي نمبرहरूको نظام کارولای غوره کوئ، نو تاسو باید **د راتلونکي فاکټور نمبر** (This number will be used as the invoice number for the next invoice generated on the system. It is incremented by one every time a new invoice is created. You can change it and save it to reset the invoice sequential number to a specific value) او **د فاکټور نمبر کی شروعونکی متن (invoice number prefix)** تنظیم کړئ.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## گیتویټहरू कहाँ ومومئ:

تاسو کولی شئ د لګولونو (payment gateways) تنظیم کړئ په عین ذات صفحه کې (**Ultimate Multisite > Settings > Payments**). د **active payment gateways** په منځ کې، تاسو کولی شئ وګورئ: _Stripe_، _Stripe_ Checkout، _PayPal_ او _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

مو د هر لګولونکي (payment gateway) لپاره یو ځانګړی مقاله جوړ کړې ده چې تاسو ته یې تنظیم کولوका مراحل سکھوي، کومه معلومات تاسو کولی شئ په لینکونو کې ومومئ.

تاسو کولی شئ لوستل او بدلولو معلومات وګورئ:

![Payment edit interface](/img/admin/payment-edit.png)

دا د لګوللو (payment) بدلولو صفحې پوره توضیحات دي:

![Payment edit full interface](/img/admin/payment-edit-full.png)

دا هم د لګوللو (payment gateways) تنظیمات پوره توضیحات دی:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway تنظیمول**

**PayPal gateway تنظیمول**** **

**د manuall payments تنظیمول**

که تاسو غواړئ چې _WooCommerce_، _GoCardless_ یا _Payfast_ د خپل لګولونکي (payment gateway) په توګه کار کړئ، نو تاسو باید د دوی **add-ons نصب او تنظیم کړئ**.

### WooCommerce add-on څنګه نصب کړئ:

مو پوهیږو چې _Stripe_ او _PayPal_ په ځینو کلونو کې موجود نه دي چې Ultimate Multisite प्रयोगونکو ته اجازه ورکوي چې د خپل پلاګین بشپړ کار وکړي. نو موږ یو add-on جوړ کړی دی چې _WooCommerce_ سره راټولوي، کوم چې یوه ډیره مشهور تجارتي (e-commerce) پلاګین دی. نړۍ کې د صنعت کارونکي مختلف لګولونکو (payment gateways) د دې سره راټولولو لپاره add-ons جوړوي. موږ له دې څخه ګټه پورته کړې ده ترڅو هغه لګولونکي چې تاسو یې د Ultimate Multisite بیا کولو سیستم سره کار کولی شئ، 확장 کړو.

_**مهم:** Ultimate Multisite: WooCommerce دمج هميشي (Integration) ديروي چې WooCommerce باید کم از کم په مین سایتमा فعال وي._

پہلاً، مهرباني وکړئ ورته add-ons صفحه ته لاړ شئ. تاسو کولی شئ دا له لارې ومومئ چې **Ultimate Multisite > Settings** ته لاړ شئ. تاسو باید **Add-ons** جدول وګورئ. د **Check our Add-ons** باندې کلیک وکړئ.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

د **Check our Add-ons** باندې کلیک کولو وروسته، تاسو به د add-ons صفحه ته ريډی렉ټ شئ. دلته تاسو کولی شئ ټول Ultimate Multisite add-ons وګورئ. د **Ultimate Multisite: WooCommerce Integration** add-on باندې کلیک وکړئ.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

یو ويوند (window) په add-on کی تفصیلاتو سره खुسول کیږي. یوازې د **Install Now** باندې کلیک وکړئ.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

د نصب پوره کېدو وروسته، تاسو به د plugins صفحه ته ريډی렉ټ شئ. دلته، یوازې د **Network Activate** باندې کلیک وکړئ او WooCommerce add-on په ستاسو شبکهमा فعال کیږي.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

فعال کولو وروسته، که تاسو ویبسایت کې WooCommerce plugin نصب او فعال نه کړی وي، نو تاسو یو یاددل ترلاسه کوئ.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

د WooCommerce Integration add-on په اړه نور معلومات لوړل لپاره، **دلته کلیک وکړئ**.

### د GoCardless add-on څنګه نصب کړئ:

_GoCardless_ add-on نصب गर्ने مراحل _WooCommerce_ add-on-ৰ দৰে একেই হ'ব। আপুনি add-ons পেজত যোৱা আৰু **Ultimate Multisite: GoCardless Gateway** add-onটো বাছনি কৰক।

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

add-on উইন্ডো খুলিব। **Install Now** ওপৰত ক্লিক কৰক।

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

ইনষ্টল হোৱাৰ পিছত, আপোনাক plugins পেজত পুনৰ ৰিডাইৰ্ট কৰা হ'ব। ইয়াত কেৱল **Network Activate** ওপৰত ক্লিক কৰক আৰু _GoCardless_ add-onটো আপোনাৰ নেটৱৰ্কত সক্ৰিয় কৰিব।

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ gateway লৈ कसरी আৰম্ভ কৰিব লাগে শিকিবলৈ, **এই مضمونটো পঢ়ক**।

### Payfast add-on কেনেকৈ ইনষ্টল কৰাব:

add-ons পেজত যোৱা আৰু **Ultimate Multisite: Payfast Gateway** add-onটো বাছনি কৰক।

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

add-on উইন্ডো খুলিব। **Install Now** ওপৰত ক্লিক কৰক।

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

ইনষ্টল হোৱাৰ পিছত, আপোনাক plugins পেজত পুনৰ ৰিডাইৰ্ট কৰা হ'ব। ইয়াত কেৱল **Network Activate** ওপৰত ক্লিক কৰক আৰু _Payfast_ add-onটো আপোনাৰ নেটৱৰ্কত সক্ৰিয় কৰিব।

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
