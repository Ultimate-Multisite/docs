---
title: دریافت وجه
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# دریافت پرداخت (v2)

_**نکتهٔ مهم: این مقاله به Ultimate Multisite نسخهٔ 2.x اشاره دارد.**_

Ultimate Multisite یک سیستم عضویت و صورت‌حساب داخلی دارد. برای اینکه سیستم صورت‌حساب ما کار کند، رایج‌ترین درگاه‌های پرداخت مورد استفاده در تجارت الکترونیک را یکپارچه کرده‌ایم. درگاه‌های پرداخت پیش‌فرض در Ultimate Multisite عبارت‌اند از _Stripe_ ، _PayPal_ ، و پرداخت دستی. همچنین می‌توانید با نصب افزونه‌های مربوطه از _WooCommerce_ ، _GoCardless_ و _Payfast_ برای دریافت پرداخت‌ها استفاده کنید.

## تنظیمات پایه

می‌توانید هر یک از این درگاه‌های پرداخت را در تنظیمات پرداخت Ultimate Multisite پیکربندی کنید. می‌توانید آن را از مسیر **منوی Ultimate Multisite > تنظیمات > پرداخت‌ها** پیدا کنید.

![صفحه تنظیمات پرداخت‌ها در Ultimate Multisite که پنل پرداخت‌ها را نشان می‌دهد](/img/config/payments-settings-page.png)

پیش از راه‌اندازی درگاه پرداخت خود، لطفاً نگاهی به تنظیمات پایهٔ پرداختی که می‌توانید پیکربندی کنید بیندازید:

**اجبار به تمدید خودکا** **ر:** این اطمینان می‌دهد که پرداخت در پایان هر چرخهٔ صورت‌حساب، بسته به تناوب صورت‌حسابی که کاربر انتخاب کرده است، به‌صورت خودکار تکرار شود.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 پیش از ذخیره‌کردن یک عضویت تکرارشونده با تمدید خودکار فعال، بررسی می‌کند که آیا درگاه فعال یک اعتبارنامهٔ تمدید قابل استفادهٔ مجدد دارد یا نه. اعتبارنامهٔ تمدید می‌تواند یک اشتراک درگاه، توافق صورت‌حساب، توکن خزانهٔ ذخیره‌شده، یا روش پرداخت قابل استفادهٔ مجدد معادل باشد. اگر درگاه گزارش دهد که هیچ اعتبارنامهٔ قابل استفاده‌ای وجود ندارد، Ultimate Multisite عضویت را ذخیره می‌کند اما تمدید خودکار را خاموش می‌کند و وضعیت نبود اعتبارنامه را ثبت می‌کند تا یک مدیر یا فرایند پشتیبانی بتواند از مشتری بخواهد پیش از تاریخ تمدید، پرداخت را دوباره مجاز کند.

این کار از این جلوگیری می‌کند که یک عضویت به‌گونه‌ای نمایش داده شود که انگار به‌صورت خودکار تمدید می‌شود، در حالی که درگاه فقط می‌تواند پرداخت‌های یک‌باره را دریافت کند. افزونه‌های درگاه باید تأیید کنند که پرداخت‌های تکرارشونده یک اعتبارنامهٔ قابل استفادهٔ مجدد را ذخیره می‌کنند، به‌ویژه زمانی که درگاه هم از دریافت یک‌باره و هم از حالت‌های پرداخت خزانه‌ای/اشتراکی پشتیبانی می‌کند.

**اجازه به دوره‌های آزمایشی بدون روش** **پرداخت:** با فعال بودن این گزینه، مشتری شما در طول فرایند ثبت‌نام مجبور نیست هیچ اطلاعات مالی اضافه کند. این فقط زمانی لازم خواهد شد که دورهٔ آزمایشی منقضی شود.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ارسال فاکتور هنگام تأیید پرداخت:** این به شما گزینه‌ای می‌دهد که پس از پرداخت، فاکتور ارسال شود یا نه. توجه داشته باشید که کاربران زیر Dashboard زیرسایت خود به تاریخچهٔ پرداختشان دسترسی خواهند داشت. این گزینه برای درگاه دستی اعمال نمی‌شود.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**طرح شماره‌گذاری فاکتور:** در اینجا می‌توانید یا یک کد مرجع پرداخت یا یک طرح شمارهٔ ترتیبی را انتخاب کنید. اگر استفاده از کد مرجع پرداخت را برای فاکتورهای خود انتخاب کنید، نیازی به پیکربندی چیزی ندارید. اگر استفاده از طرح شمارهٔ ترتیبی را انتخاب کنید، باید **شمارهٔ فاکتور بعدی** را پیکربندی کنید (این شماره به‌عنوان شمارهٔ فاکتور برای فاکتور بعدی تولیدشده در سیستم استفاده خواهد شد. هر بار که فاکتور جدیدی ایجاد می‌شود، یک واحد افزایش می‌یابد. می‌توانید آن را تغییر دهید و ذخیره کنید تا شمارهٔ ترتیبی فاکتور را به یک مقدار مشخص بازنشانی کنید) و **پیشوند شمارهٔ فاکتور** را پیکربندی کنید.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## درگاه‌ها را کجا پیدا کنید:

می‌توانید درگاه‌های پرداخت را در همان صفحه راه‌اندازی کنید ( **Ultimate Multisite > Settings > Payments**). درست زیر **درگاه‌های پرداخت فعال** ، می‌توانید این موارد را ببینید: _Stripe_ ، _Stripe_ _Checkout_ ، _PayPal_ و _Manual_.

![بخش درگاه‌های پرداخت فعال که Stripe، Stripe Checkout، PayPal و Manual را فهرست می‌کند](/img/config/payments-active-gateways.png)

برای هر درگاه پرداخت، مقاله‌ای اختصاصی داریم که شما را در مراحل راه‌اندازی آن راهنمایی می‌کند و می‌توانید آن‌ها را در لینک‌های زیر پیدا کنید.

می‌توانید جزئیات پرداخت را مشاهده و ویرایش کنید:

![رابط ویرایش پرداخت](/img/admin/payment-edit.png)

این نمای کامل صفحهٔ ویرایش پرداخت است:

![رابط کامل ویرایش پرداخت](/img/admin/payment-edit-full.png)

همچنین این هم نمای کامل تنظیمات درگاه‌های پرداخت است:

![صفحهٔ کامل تنظیمات درگاه‌های پرداخت](/img/config/settings-payments-gateways-full.png)

**راه‌اندازی درگاه Stripe**

**راه‌اندازی درگاه PayPal**** **

**راه‌اندازی پرداخت‌های دستی**

اکنون، اگر می‌خواهید از _WooCommerce_ ، _GoCardless_ یا _Payfast_ به‌عنوان درگاه پرداخت خود استفاده کنید، باید **افزونه‌های آن‌ها را نصب و پیکربندی کنید**.

### نحوهٔ نصب افزونهٔ WooCommerce:

می‌دانیم که _Stripe_ و _PayPal_ در برخی کشورها در دسترس نیستند که کاربران Ultimate Multisite را در استفادهٔ مؤثر از plugin ما محدود می‌کند یا مانع آن می‌شود. بنابراین یک افزونه ایجاد کردیم تا _WooCommerce,_ را یکپارچه کنیم، که یک plugin تجارت الکترونیک بسیار محبوب است. توسعه‌دهندگان در سراسر جهان افزونه‌هایی ایجاد کرده‌اند تا درگاه‌های پرداخت مختلف را با آن یکپارچه کنند. ما از این موضوع استفاده کردیم تا درگاه‌های پرداختی را که می‌توانید با سیستم صورت‌حساب Ultimate Multisite استفاده کنید گسترش دهیم.

_**مهم:** Ultimate Multisite: WooCommerce Integration نیاز دارد WooCommerce دست‌کم روی site اصلی شما فعال باشد._

ابتدا، لطفاً به صفحهٔ افزونه‌ها بروید. می‌توانید آن را از مسیر **Ultimate Multisite > Settings** پیدا کنید. باید جدول **افزونه‌ها** را ببینید. روی **افزونه‌های ما را بررسی کنید** کلیک کنید.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

پس از کلیک روی **افزونه‌های ما را بررسی کنید** ، به صفحهٔ افزونه‌ها هدایت خواهید شد. در اینجا می‌توانید همهٔ افزونه‌های Ultimate Multisite را پیدا کنید. روی افزونهٔ **Ultimate Multisite: WooCommerce Integration** کلیک کنید.

![صفحهٔ افزونه‌ها که افزونه‌های Ultimate Multisite از جمله WooCommerce Integration را فهرست می‌کند](/img/addons/addons-page.png)

پنجره‌ای با جزئیات افزونه ظاهر می‌شود. فقط روی **Install Now** کلیک کنید.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

پس از پایان نصب، به صفحه pluginها هدایت می‌شوید. اینجا فقط روی **Network Activate** کلیک کنید و افزونه WooCommerce روی شبکه شما فعال می‌شود.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

پس از فعال‌سازی آن، اگر هنوز plugin WooCommerce را روی وب‌سایت خود نصب و فعال نکرده باشید، یک یادآوری دریافت خواهید کرد.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

برای مطالعه بیشتر درباره افزونه WooCommerce Integration، **اینجا کلیک کنید**.

### نحوه نصب افزونه GoCardless:

مراحل نصب افزونه _GoCardless_ تقریباً همانند افزونه _WooCommerce_ است. لطفاً به صفحه افزونه‌ها بروید و افزونه **Ultimate Multisite: GoCardless Gateway** را انتخاب کنید.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

پنجره افزونه ظاهر می‌شود. روی **Install Now** کلیک کنید.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

پس از پایان نصب، به صفحه pluginها هدایت می‌شوید. اینجا فقط روی **Network Activate** کلیک کنید و افزونه _GoCardless_ روی شبکه شما فعال می‌شود.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

برای یادگیری نحوه شروع کار با درگاه _GoCardless_، **این مقاله را بخوانید**.

### نحوه نصب افزونه Payfast:

به صفحه افزونه‌ها بروید و افزونه **Ultimate Multisite: Payfast Gateway** را انتخاب کنید.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

پنجره افزونه ظاهر می‌شود. روی **Install Now.** کلیک کنید.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

پس از پایان نصب، به صفحه pluginها هدایت می‌شوید. اینجا فقط روی **Network Activate** کلیک کنید و افزونه _Payfast_ روی شبکه شما فعال می‌شود.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
