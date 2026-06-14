---
title: Yadda Ake Shigarwa Mapin Domin
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# چگونگی تنظیم نقشه‌برداری دامنه (نسخه ۲)

_**توجه مهم: این مقاله به نسخه ۲.x Ultimate Multisite اشاره دارد.**_

یکی از قدرتمندترین ویژگی‌های یک شبکه حرفه‌ای، توانایی ارائه فرصتی به مشتریانمان برای اتصال یک دامنه سطح بالا به سایت‌هایشان است. پس کدام حرفه‌ای‌تر به نظر می‌رسد: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) یا [_**joesbikeshop.com**_](http://joesbikeshop.com)? به همین دلیل Ultimate Multisite این قابلیت را بدون نیاز به استفاده از افزونه‌های شخص ثالث، در خود دارد.

## نقشه‌برداری دامنه چیست؟

همانطور که از اسمش پیداست، نقشه‌برداری دامنه توانایی ارائه شده توسط Ultimate Multisite برای دریافت درخواست یک دامنه سفارشی و نگاشت آن درخواست به سایت مربوطه در شبکه با اتصال آن دامنه خاص است.

### چگونه نقشه‌برداری دامنه را در شبکه Ultimate Multisite خود تنظیم کنیم؟

نقشه‌برداری دامنه نیاز به برخی تنظیمات از طرف شما دارد تا کار کند. خوشبختانه، Ultimate Multisite کارهای سخت را برای شما خودکار می‌کند تا بتوانید به راحتی الزامات را برآورده کنید.

در طول نصب Ultimate Multisite، ویزارد (wizard) به طور خودکار فایل **sunrise.php** را کپی کرده و در پوشه تعیین شده نصب می‌کند. **ویزارد اجازه پیشروی نخواهد داد مگر اینکه این مرحله تکمیل شود**.

<!-- Screenshot unavailable: نصب کننده Ultimate Multisite با مرحله sunrise.php -->

این بدان معناست که به محض اینکه ویزارد نصب Ultimate Multisite شبکه شما را تنظیم کرد، می‌توانید بلافاصله شروع به نقشه‌برداری دامنه سفارشی کنید.

توجه داشته باشید که نقشه‌برداری دامنه در Ultimate Multisite اجباری نیست. شما گزینه‌ای برای استفاده از تابع نقشه‌برداری دامنه بومی WordPress Multisite یا هر راه حل نقشه‌برداری دامنه‌ای دیگر دارید.

Idan kuna buƙatar ka ƙara wannan tsarin Ultimate Multisite na haske don ba wajen wani hanyoyin haske na domaina, za ka iya lalata wannan ƙwarewar a ƙarƙashin **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

A ƙasa wannan zaɓi, za ka ga zaɓin **Force Admin Redirect** (Gabaɗaya Ajiye Wurin Gudanarwa). Wannan zaɓi yana ba ka ikon sarrafa ko abokan ciniki za su iya samun dashboard ɗinsu na gudanarwa a domain ɗinsu na musamman da subdomain ko kawai a ɗayan su.

Idan ka zaɓi **Force redirect to mapped domain** (Gabaɗaya Ajiye Zuwa Domain Mai Haske), abokan ciniki za su iya samun dashboard ɗinsu na gudanarwa ne kawai a domain ɗinsu na musamman.

Zaɓin **Force redirect to network domain** (Gabaɗaya Ajiye Zuwa Domain Na Shugaban) zai yi da alamar da ke sama - abokan ciniki za su iya samun dashboard ɗinsu ne kawai a subdomain, ko da suka gwada shiga shi a domain ɗinsu na musamman.

Kuma zaɓin **Allow access to the admin by both mapped domain domain and network domain** (Bari Aikin Gudanarwa Ta Domain Mai Haske da Domain Na Shugaban) yana ba su ikon samun dashboard ɗinsu na gudanarwa a subdomain da kuma domain ɗinsu na musamman.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Akwai hanyoyi biyu don haske domain na musamman (custom domain). Farko shi ne ta hanyar haske sunan domain daga dashboard ɗin shugaban na shugaban ku a matsayin super admin, kuma na biyu ita ce ta hanyar dashboard ɗin subsite a ƙarƙashin shafin account.

Amma kafin ka fara haske domain na musamman zuwa wani subsite a cikin shugaban ku, dole ne ka tabbatar cewa **DNS settings** (tsarin DNS) na sunan domain an tsara shi sosai.

###

### Tabbatar da DNS settings na domain an tsara sosai

برای اینکه نقشه‌برداری کار کنه، باید مطمئن بشید که دامنه که می‌خواهید نگاشت کنید به آدرس IP شبکه شما اشاره می‌کند. توجه داشته باشید که شما به آدرس IP شبکه نیاز دارید - یعنی آدرس IP دامنه‌ای که Ultimate Multisite روی آن نصب شده است - نه آدرس IP دامنه سفارشی که می‌خواهید نگاشت کنید. برای جستجوی آدرس IP یک دامنه خاص، ما پیشنهاد می‌کنیم به [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) بروید، مثلاً.

برای اینکه نگاشت دامنه درست انجام شود، باید یک **A RECORD** در تنظیمات **DNS** خود اضافه کنید که به آن **آدرس IP** اشاره کند. مدیریت DNS بین ثبت‌کنندگان دامنه مختلف خیلی متفاوت است، اما آموزش‌های زیادی آنلاین وجود دارد که این موضوع را پوشش می‌دهند اگر جستجو کنید " _Creating A Record on XXXX_ " که در آن XXXX ثبت‌کننده دامنه شماست (مثلاً: " _Creating A Record on_ _GoDaddy_ ").

اگر با مشکل انجام این کار مواجه شدید، **با پشتیبانی ثبت‌کننده دامنه خود تماس بگیرید** و آنها می‌توانند در این بخش به شما کمک کنند.

اگر قصد دارید اجازه دهید مشتریان خود دامنه‌هایشان را نگاشت کنند، آنها باید این کار را خودشان انجام دهند. اگر نتوانستید A Record ایجاد کنید، آنها را به سیستم پشتیبانی ثبت‌کننده دامنه خود راهنمایی کنید.

### نگاشت نام دامنه سفارشی به عنوان سوپر ادمین

وقتی با دسترسی سوپر ادمین در شبکه خود وارد شده‌اید، می‌توانید با رفتن به بخش **Ultimate Multisite > Domains**، دامنه‌های سفارشی را به راحتی اضافه و مدیریت کنید.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

هذين صفحات تلاقي زر **Add Domain** فوق، وهذا بيفتح لك نافذة منبثقة تقدر فيها تحدد وتملأ **custom domain name** (اسم النطاق المخصص)، و**the subsite** (الموقع الفرعي) اللي تبغى تطبق عليه اسم النطاق المخصص هذا، وتقرر إذا ودك تخليه **primary domain** (النطاق الأساسي) ولا لا (لاحظ إن تقدر تربط **multiple domain names to one subsite** (عدة أسماء نطاقات لموقع فرعي واحد)).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

بعد ما تملأ كل المعلومات، تقدر تضغط على زر **Add Existing Domain** في الأسفل.

هذا يبدأ عملية التحقق وجلب معلومات DNS الخاص بالنطاق المخصص. وكمان بتشوف سجل (log) في أسفل الصفحة عشان تتابع العملية اللي قاعد تصير. هذي العملية ممكن تاخذ كم دقيقة لتكتمل.

Ultimate Multisite v2.13.0 يسوي تلقائي لـ **internal domain record** لما يتم إنشاء موقع جديد على استضافة تعتبر نطاق لكل موقع (per-site domain). إذا كانت الاستضافة هي النطاق الأساسي للشبكة، أو أحد أسماء النطاقات الأساسية اللي مُعدة في حقل **Site URL**، فبيتم تخطي سجل النطاق المرتبط تلقائياً عشان يظل النطاق الأساسي المشترك متاح لكل موقع يستخدمه.

الحالة (Stage) أو الوضع بيغير من **Checking DNS** إلى **Ready** إذا كانت كل شيء مُعد بشكل صحيح.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

إذا ضغطت على اسم النطاق، تقدر تشوف بعض الخيارات بداخله. خلينا نلقي نظرة سريعة عليها:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**مرحله (Stage):** این مرحله‌ای است که دامنه در آن قرار دارد. وقتی برای اولین بار دامنه را اضافه می‌کنید، احتمالاً روی مرحله **بررسی DNS** خواهد بود. این فرآیند بررسی می‌کند که ورودی‌های DNS درست هستند و تأیید می‌کند. سپس، دامنه به مرحله **بررسی SSL** منتقل می‌شود. Ultimate Multisite بررسی می‌کند که آیا دامنه دارای SSL است یا خیر و دامنه شما را به عنوان **آماده (Ready)** یا **آماده بدون SSL (Ready without SSL)** دسته‌بندی می‌کند.

**سایت (Site):** زیردامنه که با این دامنه مرتبط است. دامنه‌ای که نگاشت می‌شود، محتوای این سایت خاص را نشان می‌دهد.

**فعال (Active):** می‌توانید این گزینه را روشن یا خاموش کنید تا دامنه فعال یا غیرفعال شود.

**آیا دامنه اصلی است؟ (Is Primary Domain?):** مشتریان می‌توانند برای هر سایت از چندین دامنه نگاشت شده استفاده کنند. از این گزینه برای انتخاب اینکه آیا این دامنه برای آن سایت خاص، دامنه اصلی است یا خیر، استفاده کنید.

**امن است؟ (Is Secure?):** اگرچه Ultimate Multisite قبل از فعال کردن آن بررسی می‌کند که آیا دامنه دارای گواهی SSL است یا خیر، شما می‌توانید به صورت دستی انتخاب کنید که دامنه را با یا بدون گواهی SSL بارگذاری کنید. توجه داشته باشید که اگر وب‌سایت فاقد گواهی SSL باشد و سعی کنید آن را مجبور به بارگذاری با SSL کنید، ممکن است با خطا مواجه شوید.

### نگاشت نام دامنه سفارشی به عنوان کاربر زیرساخت سایت (Mapping custom domain name as Subsite user)

مدیران زیرساخت سایت همچنین می‌توانند نام‌های دامنه سفارشی خود را از داشبورد مدیر زیرساخت سایت خود نگاشت کنند.

ابتدا، باید مطمئن شوید که این گزینه را در تنظیمات **Domain mapping** فعال کرده‌اید. تصویر زیر را ببینید.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

شما همچنین می‌توانید این گزینه را در سطح **Plan** یا گزینه‌های محصول در بخش **Ultimate Multisite > Products** تنظیم یا پیکربندی کنید.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Idan kun duk wani daga cikin waɗannan za a samar da shi kuma ana izinin amfanin subsite ya yi hasas (map) na domain mai tsari, wannan amfanin subsite zai ga wani metabox a ƙarƙashin shafin **Account** wanda ake kira **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mai amfani zai iya danna maɓallin **Add Domain** kuma zai bayar da wani window mai bayanin yadda ake yi.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

A ƙarshe, mai amfani zai iya danna **Next Step** kuma ya ci gaba da ƙara sunan domain mai tsari. Zai iya zaɓar ko wannan zai zama domain na farko (primary) ko ba haka ba.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Danna **Add Domain** zai fara tsarin tabbatar da bayanai na DNS da kuma cawa (fetching) bayanan domain mai tsari.

### Game da Syncing na Domain

Domain Syncing wani tsari ne inda Ultimate Multisite ya ƙara sunan domain mai tsari a cikin asusun hosting ɗinka a matsayin domain na ƙarin **don aiki na hasas domain (domain mapping) ya yi**.

Domain syncing zai farawa ne ko kuma ba shi da wuri idan ƙarin hosting ɗinka yana da haɗi da wannan ƙirar hasas domain na Ultimate Multisite. A yanzu, waɗannan masu gudanar da hosting sun haɗa da _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ da _Cpanel._

Idan haɗin wani provider na hosting ya kasance aiki, Ultimate Multisite zai iya ƙara aiki (enqueue) aikin DNS ko ƙirƙirar subdomain na wajen wanda aka ƙirƙira sabon sites. Idan ba a sauraron wannan aikin ba, aiki na bayan (background job) zai tura don ya yi shi don su kare mu daga ƙarin bayanan da ba a bukata ba. Binciken DNS da SSL ga domain mai tsari yana ci gaba da yin aiki ta hanyar tsarin asali na domain.

Don zaman amfani da wannan haɗin a cikin babban tsarin Ultimate Multisite (Ultimate Multisite settings) a ƙarƙashin tab ɗin **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Ka tuna cewa idan ƙwararren ku na gudanar da wajen (hosting provider) ba shi daga waɗanda aka ambata a sama, **za dole ku yi syncing ko ƙara sunan domain** kai tsaye a cikin asusun ku na hosting._
