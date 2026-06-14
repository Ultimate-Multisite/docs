---
title: Ötülenim
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# پول گرفتن (v2)

_**مهم یادداشت: این مقاله به نسخه ۲.x Ultimate Multisite اشاره دارد.**_

Ultimate Multisite یک سیستم عضویت و صورت‌حساب داخلی دارد. برای اینکه سیستم صورت‌حساب ما کار کند، ما رایج‌ترین درگاه‌های پرداخت مورد استفاده در تجارت الکترونیک را ادغام کرده‌ایم. در Ultimate Multisite، درگاه‌های پرداخت پیش‌فرض عبارتند از _Stripe_، _PayPal_ و پرداخت دستی (Manual Payment). شما همچنین می‌توانید با نصب افزونه‌های مربوطه از _WooCommerce_، _GoCardless_ و _Payfast_ برای دریافت پرداخت استفاده کنید.

## تنظیمات پایه

شما می‌توانید هر یک از این درگاه‌های پرداخت را در تنظیمات پرداخت Ultimate Multisite پیکربندی کنید. می‌توانید با رفتن به **Ultimate Multisite menu > Settings > Payments** آن را پیدا کنید.

![صفحه تنظیمات پرداخت در Ultimate Multisite که پنل Payments را نشان می‌دهد](/img/config/payments-settings-page.png)

قبل از اینکه درگاه پرداخت خود را تنظیم کنید، لطفاً نگاهی به تنظیمات پرداخت پایه که می‌توانید پیکربندی کنید، بیندازید:

**Force auto-renew (اجبار به تمدید خودکار):** این گزینه اطمینان می‌دهد که پرداخت بسته به فرکانس صورت‌حساب انتخابی کاربر، در پایان هر چرخه صورت‌حساب به صورت خودکار تکرار خواهد شد.

<!-- Screenshot unavailable: تنظیم دکمه Force Auto-Renew در صفحه تنظیمات پرداخت -->

Ultimate Multisite نسخه ۲.۱۳.۰ بررسی می‌کند که آیا درگاه فعال دارای یک اعتبار قابل استفاده برای تمدید مجدد است یا خیر، قبل از ذخیره عضویت‌های تکراری با قابلیت تمدید خودکار فعال. یک اعتبار تمدید می‌تواند شامل اشتراک درگاه، توافق صورت‌حساب، توکن خزانه ذخیره‌شده (saved vault token) یا روش پرداخت قابل استفاده مجدد معادل آن باشد. اگر درگاه گزارش دهد که هیچ اعتبار قابل استفاده‌ای وجود ندارد، Ultimate Multisite عضویت را ذخیره می‌کند اما تمدید خودکار را خاموش کرده و وضعیت فاقد اعتبار را ثبت می‌کند تا یک مدیر یا جریان پشتیبانی بتواند از مشتری بخواهد قبل از تاریخ تمدید دوباره پرداخت را تأیید کند.

این کار از اینکه یک عضویت به عنوان تمدید خودکار نمایش داده شود جلوگیری می‌کند، وقتی که درگاه پرداخت فقط پرداخت‌های یک‌باره را قبول می‌کند. افزونه‌های درگاه باید تأیید کنند که چک‌اوت‌های تکراری یک اعتبار قابل استفاده مجدد ذخیره می‌کنند، مخصوصاً زمانی که درگاه هم حالت دریافت پرداخت یک‌باره و هم حالت پرداخت با ذخیره‌سازی/اشتراک پشتیبانی می‌شود.

**اجازه دادن به آزمون‌ها بدون روش پرداخت** **روش:** با فعال کردن این گزینه، مشتری شما نیازی نخواهد داشت که اطلاعات مالی را در طول فرآیند ثبت‌نام وارد کند. این فقط زمانی مورد نیاز خواهد بود که دوره آزمایشی منقضی شود.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**ارسال فاکتور پس از تأیید پرداخت:** این به شما این امکان را می‌دهد که بعد از پرداخت، آیا می‌خواهید فاکتور ارسال کنید یا نه. توجه داشته باشید که کاربران می‌توانند به سابقه پرداخت خود در داشبورد زیرسایت خود دسترسی داشته باشند. این گزینه برای درگاه دستی اعمال نمی‌شود.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**طرح شماره‌گذاری فاکتور:** در اینجا، می‌توانید یا یک کد مرجع پرداخت یا یک طرح شماره‌گذاری متوالی را انتخاب کنید. اگر تصمیم گرفتید از کد مرجع پرداخت برای فاکتورهای خود استفاده کنید، نیازی به تنظیم چیزی ندارید. اگر تصمیم گرفتید از طرح شماره‌گذاری متوالی استفاده کنید، باید **شماره فاکتور بعدی** (این عدد به عنوان شماره فاکتور برای فاکتور بعدی که در سیستم تولید می‌شود استفاده خواهد شد. هر بار که یک فاکتور جدید ایجاد می‌شود، این عدد یک واحد افزایش می‌یابد. می‌توانید آن را تغییر داده و ذخیره کنید تا شماره متوالی فاکتورها را روی یک مقدار خاص بازنشانی کنید) و **پیشوند شماره فاکتور** را تنظیم کنید.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Payment Gateway'leri Nerede Bulabilirsiniz:

Ödeme ağ geçitlerini aynı sayfada ayarlayabilirsiniz (**Ultimate Multisite > Settings > Payments**). **Aktif ödeme ağ geçitlerinin** hemen altında şunları görebilirsiniz: _Stripe_, _Stripe_ Checkout, _PayPal_ ve _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Her ödeme ağ geçidi için size kurulum adımlarını gösterecek özel bir makalemiz var, bu linklere bakabilirsiniz.

Ödeme detaylarını görebilir ve düzenleyebilirsiniz:

![Payment edit interface](/img/admin/payment-edit.png)

İşte ödeme düzenleme sayfasının tam görünümü:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ayrıca ödeme ağ geçidi ayarlarının tam görünümünü de aşağıda bulabilirsiniz:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe ağ geçidini ayarlama**

**PayPal ağ geçidini ayarlama**** **

**Manuel ödemeleri ayarlama**

Şimdi, eğer _WooCommerce_, _GoCardless_ veya _Payfast_'ı ödeme ağ geçidi olarak kullanmak isterseniz, onların eklentilerini **kurmanız ve yapılandırmanız** gerekecek.

### WooCommerce eklentisini nasıl kurarsınız:

Bazı ülkelerde _Stripe_ ve _PayPal_'ın bulunmadığını ve bu durumun Ultimate Multisite kullanıcılarının eklentimizi etkili bir şekilde kullanmasını kısıtladığını veya engellediğini anlıyoruz. Bu yüzden, çok popüler bir e-ticaret eklentisi olan _WooCommerce_'ı entegre etmek için bir eklenti (add-on) geliştirdik. Dünya genelindeki geliştiriciler, farklı ödeme ağ geçitlerini bu eklentiye entegre etmek için ekler yapmışlardır. Biz de bunu kullanarak Ultimate Multisite faturalandırma sisteminizle kullanabileceğiniz ödeme ağ geçitlerini genişlettik.

**مهم:** Ultimate Multisite: WooCommerce ایंटीگریشن (Integration) دات شما باید اصلی سایتتون رو حداقل یک بار فعال کرده باشید.

اول، لطفاً به صفحه افزونه‌ها (add-ons page) بروید. شما آن را با رفتن به **Ultimate Multisite > Settings** پیدا خواهید کرد. باید جدول **Add-ons** را ببینید. روی **Check our Add-ons** کلیک کنید.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar with the Add-ons table and Check our Add-ons link -->

روی **Check our Add-ons** کلیک کردن بعد، شما به صفحه افزونه‌ها هدایت خواهید شد. در اینجا می‌توانید تمام افزونه‌های Ultimate Multisite را پیدا کنید. روی افزونه **Ultimate Multisite: WooCommerce Integration** کلیک کنید.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

یک پنجره با جزئیات افزونه باز می‌شود. فقط روی **Install Now** کلیک کنید.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

نصب تمام شد، شما به صفحه پلاگین‌ها (plugins page) هدایت خواهید شد. در اینجا، فقط روی **Network Activate** کلیک کنید و افزونه WooCommerce روی شبکه شما فعال می‌شود.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

بعد از فعال کردن آن، اگر هنوز افزونه WooCommerce را روی وب‌سایت خود نصب و فعال نکرده باشید، یک یادآوری دریافت خواهید کرد.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

برای اینکه بیشتر در مورد افزونه Ultimate Multisite: WooCommerce Integration بدانید، **اینجا کلیک کنید**.

### GoCardless افزونه را چگونه نصب کنیم:

_GoCardless_ add-onu'nı quraşmaq, _WooCommerce_ add-onu quraşdırmaqdakiler bilen deyil, əslində eynidir. Add-ons səhifəsinə gedin we **Ultimate Multisite: GoCardless Gateway** add-onu seçin.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Add-onu açılan pəncərə çıxacaq. **Install Now** (İndi Quraşdır) düyməsinə basın.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Quraşdırma bitdikdən sonra, siz pluginlər səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Network Activate** (Şəbəkədə Aktivləşdir) düyməsinə basın və _GoCardless_ add-onu şəbəkənizdə aktivləşəcək.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ gateway ilə necə başlamaq barədə məlumat almaq üçün **bu artiklı oxuyun**.

### Payfast add-onu necə quraşdırılır:

Add-ons səhifəsinə gedin və **Ultimate Multisite: Payfast Gateway** add-onu seçin.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Add-onu açılan pəncərə çıxacaq. **Install Now** (İndi Quraşdır) düyməsinə basın.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Quraşdırma bitdikdən sonra, siz pluginlər səhifəsinə yönləndiriləcəksiniz. Burada sadəcə **Network Activate** (Şəbəkədə Aktivləşdir) düyməsinə basın və _Payfast_ add-onu şəbəkənizdə aktivləşəcək.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
