---
title: |-
  دومين مَپپيڭ قلدۇرۇش كېلىنىش

  Domain mapping سۆزده قلدۇرۇش
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# ডোমেইন ম্যাপিং কিভাবে কনফিগার করবেন (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite সংস্করণের ২.x এর জন্য প্রযোজ্য।**_

একটি প্রিমিয়াম নেটওয়ার্কের সবচেয়ে শক্তিশালী বৈশিষ্ট্যগুলোর মধ্যে একটি হলো আমাদের ক্লায়েন্টদের তাদের সাইটগুলিতে একটি টপ-লেভেল ডোমেইন যুক্ত করার সুযোগ দেওয়া। কারণ, কোনটি বেশি পেশাদার দেখায়: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) নাকি [_**joesbikeshop.com**_](http://joesbikeshop.com)? এই কারণেই Ultimate Multisite এই বৈশিষ্ট্যটি তৃতীয় পক্ষের প্লাগইন ব্যবহার করার প্রয়োজন ছাড়াই সরাসরি অন্তর্ভুক্ত করেছে।

## ডোমেইন ম্যাপিং কী?

নাম থেকেই বোঝা যায়, ডোমেইন ম্যাপিং হলো Ultimate Multisite-এর সেই ক্ষমতা যা একটি কাস্টম ডোমেইনের অনুরোধ গ্রহণ করে এবং সেই অনুরোধটিকে নেটওয়ার্কের সংশ্লিষ্ট সাইটের সাথে সংযুক্ত করে নির্দিষ্ট ডোমেইনটি যুক্ত করে।

### আপনার Ultimate Multisite নেটওয়ার্কে ডোমেইন ম্যাপিং কিভাবে সেটআপ করবেন

ডোমেইন ম্যাপিং কাজ করার জন্য আপনার দিক থেকে কিছু সেটিংস করা প্রয়োজন। সৌভাগ্যবশত, Ultimate Multisite আপনার কঠিন কাজটি স্বয়ংক্রিয়ভাবে করে দেয় যাতে আপনি সহজেই প্রয়োজনীয় শর্তগুলো পূরণ করতে পারেন।

Ultimate Multisite ইনস্টল করার সময়, উইজার্ডটি স্বয়ংক্রিয়ভাবে **sunrise.php** ফাইলটিকে নির্দিষ্ট ফোল্ডারে কপি এবং ইনস্টল করবে। এই ধাপটি সম্পন্ন না করা পর্যন্ত উইজার্ড আপনাকে এগিয়ে যেতে দেবে না।

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

এর মানে হলো, একবার Ultimate Multisite ইনস্টলেশন উইজার্ড আপনার নেটওয়ার্ক সেটআপ শেষ করলে, আপনি সাথে সাথেই কাস্টম ডোমেইন ম্যাপিং শুরু করতে পারবেন।

মনে রাখবেন, Ultimate Multisite-এ ডোমেইন ম্যাপিং বাধ্যতামূলক নয়। আপনার কাছে ওয়ার্ডপ্রেস মাল্টিসাইট নেটিভ ডোমেইন ম্যাপিং ফাংশন বা অন্য যেকোনো ডোমেইন ম্যাপিং সমাধান ব্যবহার করার বিকল্প রয়েছে।

Ultimate Multisite domenini başqa domen yönlendirme çözümlerine yer açmak için devre dışı bırakmanız gerekirse, bunu **Ultimate Multisite > Settings > Domain Mapping** altında yapabilirsiniz.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Bu seçeneğin hemen altında ayrıca **Force Admin Redirect** (Yönetici Yönlendirmesini Zorla) seçeneğini görebilirsiniz. Bu seçenek, müşterilerinizin yönetici paneline kendi özel alan adları ve alt alan adları üzerinden erişip erişemeyeceğini kontrol etmenize olanak tanır.

Eğer **Force redirect to mapped domain** (Haritalanmış domaine zorla yönlendir) seçeneğini seçerseniz, müşterileriniz yalnızca özel alan adları üzerinden yönetici paneline erişebilirler.

**Force redirect to network domain** (Ağ alan adına zorla yönlendir) seçeneği ise tam tersini yapar; müşterilerin kendi özel alan adlarından giriş yapmaya çalışsalar bile yalnızca alt alan adları üzerinden panellerine erişmelerine izin verilir.

Ve **Allow access to the admin by both mapped domain domain and network domain** (Hem haritalanmış alan adı hem de ağ alanı tarafından yöneticiye erişime izin ver) seçeneği, müşterilerin hem alt alan adından hem de özel alan adından yönetici panellerine erişmelerine olanak tanır.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Özel bir alanı haritalamanın iki yolu vardır. Birincisi, ağ yöneticinizdeki ana yönetici (super admin) olarak alan adını haritalamaktır ve ikincisi ise hesap sayfasındaki alt site yöneticisi paneli üzerinden yapılır.

Ancak özel alanı ağınızdaki bir alt siteye haritalamaya başlamadan önce, alan adının **DNS ayarlarının** doğru yapılandırıldığından emin olmanız gerekir.

###

### Alan adı DNS ayarlarının doğru yapılandırıldığından emin olmak

Mapping işləməsi üçün planlaşdırdığınız domeninizin sizin şəbəkənizin IP ünvanına yönləndirildiyindən əmin olmalısınız. Qeyd etmək lazımdır ki, sizə Network IP ünvanı - Ultimate Multisite-ın quraşdırıldığı domenindir - istədiyiniz xüsusi domen (custom domain) üçün IP ünvanı deyil. Müəyyən bir domen üçün IP ünvanını axtarmaq üçün [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) kimi yerlərə getməyinizi tövsiyə edirik, məsələn.

Domeni düzgün mappar etmək üçün **DNS** konfiqurasiyanızda həmin **IP ünvanına** yönəlmiş bir **A RECORD** əlavə etməlisiniz. DNS idarəçiliyi fərqli domen qeydiyyatçıları arasında çox dəyişdirilir, lakin " _Creating A Record on XXXX_ " (XXX-iniz domen qeydiyyatçınızdır, məsələn: " _Creating A Record on_ _GoDaddy_ ") axtarsanız bu barədə internetdə çox təlimat tapacaqsınız.

Əgər bunu düzgün işlətməkdə çətinlik çəkirsinizsə, **domen qeydiyyatçınızın dəstək xidməti ilə əlaqə saxlayın** və onlar bu hissədə sizə kömək edə bilərlər.

Əgər müştərilərin öz domenlərini mappar etməsinə icazə verməyi planlaşdırırsınızsa, onlar bu hissənin işini özləri görməlidirlər. Əgər A Record yaratmaqda çətinlik çəkdiklərini görsəniz, onları qeydiyyatçılarının dəstək sisteminə yönləndirin.

### Super Admin kimi xüsusi domen adını mappar etmək

Şəbəkənizdə super admin olaraq daxil olduqda, **Ultimate Multisite > Domains** bölməsinə keçərək xüsusi domen adlarını asanlıqla əlavə edib idarə edə bilərsiniz.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

این صفحه زیر، می‌تونید روی دکمه **Add Domain** در بالا کلیک کنید و یک پنجره مودال باز می‌شود که در آن می‌توانید **custom domain name** (نام دامنه سفارشی)، **the subsite** (زیرسایت) مورد نظر خود را برای اعمال نام دامنه سفارشی تنظیم و پر کنید، و تصمیم بگیرید که آیا می‌خواهید آن را به عنوان **primary domain** (دامنه اصلی) تنظیم کنید یا نه (توجه داشته باشید که می‌توانید **multiple domain names to one subsite** (چند نام دامنه را به یک زیرسایت نگاشت کنید)).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

بعد از وارد کردن تمام اطلاعات، می‌توانید روی دکمه **Add Existing Domain** در پایین کلیک کنید.

این کار فرآیند تأیید و دریافت اطلاعات DNS دامنه سفارشی را شروع می‌کند. همچنین یک لاگ در پایین صفحه خواهید دید تا بتوانید مراحل انجام شده را دنبال کنید. این فرآیند ممکن است چند دقیقه طول بکشد تا تمام شود.

Ultimate Multisite v2.13.0 به طور خودکار وقتی یک سایت جدید روی هاستی که باید به عنوان دامنه مخصوص هر سایت (per-site domain) در نظر گرفته شود ایجاد می‌شود، رکورد دامنه داخلی را هم می‌سازد. اگر هاست دامنه اصلی شبکه باشد، یا یکی از دامنه‌های پایه فرم پرداخت مشترک تنظیم شده در فیلد **Site URL** باشد، رکورد نگاشت‌شده خودکار دامنه نهایی (mapped-domain record) رد می‌شود تا دامنه پایه مشترک برای هر سایتی که از آن استفاده می‌کند، در دسترس بماند.

وضعیت **Stage** یا مرحله از **Checking DNS** به **Ready** تغییر خواهد کرد اگر همه چیز به درستی تنظیم شده باشد.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

اگر روی نام دامنه کلیک کنید، می‌توانید گزینه‌هایی را در داخل آن ببینید. بیایید نگاه سریعی به آن‌ها بیندازیم:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**مرحله (Stage):** این مرحله‌ای است که دامنه در آن قرار دارد. وقتی برای اولین بار دامنه را اضافه می‌کنید، احتمالاً روی مرحله **بررسی DNS (Checking DNS)** خواهد بود. این فرآیند بررسی می‌کند که ورودی‌های DNS درست هستند و تأیید می‌کند. سپس، دامنه به مرحله **بررسی SSL (Checking SSL)** منتقل می‌شود. Ultimate Multisite بررسی می‌کند که آیا دامنه دارای SSL است یا خیر و دامنه شما را به عنوان **آماده (Ready)** یا **آماده بدون SSL (Ready (without SSL))** دسته‌بندی می‌کند.

**سایت (Site):** زیردامنه مرتبط با این دامنه است. دامنه‌ای که نگاشت می‌شود، محتوای این سایت خاص را نشان می‌دهد.

**فعال (Active):** می‌توانید این گزینه را روشن یا خاموش کنید تا دامنه فعال یا غیرفعال شود.

**آیا دامنه اصلی است؟ (Is Primary Domain?):** مشتریان می‌توانند برای هر سایت از چندین دامنه نگاشت داشته باشند. از این گزینه استفاده کنید تا انتخاب کنید که آیا این دامنه برای آن سایت خاص، دامنه اصلی است یا خیر.

**امن است؟ (Is Secure?):** اگرچه Ultimate Multisite قبل از فعال کردن آن بررسی می‌کند که آیا دامنه دارای گواهی SSL است یا نه، شما می‌توانید به صورت دستی انتخاب کنید که دامنه را با یا بدون گواهی SSL بارگذاری کنید. توجه داشته باشید که اگر وب‌سایت فاقد گواهی SSL باشد و سعی کنید آن را مجبور به بارگذاری با SSL کنید، ممکن است خطاهایی دریافت کنید.

### نگاشت نام دامنه سفارشی به عنوان کاربر زیرساخت سایت (Mapping custom domain name as Subsite user)

مدیران زیرساخت سایت همچنین می‌توانند نام‌های دامنه سفارشی خود را از داشبورد مدیریت زیرساخت سایتشان نگاشت کنند.

ابتدا، باید مطمئن شوید که این گزینه را در تنظیمات **Domain mapping** فعال کرده‌اید. تصویر زیر را ببینید.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

شما همچنین می‌توانید این گزینه را در سطح **Plan** یا گزینه‌های محصول در بخش **Ultimate Multisite > Products** تنظیم یا پیکربندی کنید.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

هذه seçeneklerden herhangi biri etkinleştirildiğinde ve سابسايت کاربر özel دامنه (custom domain names) eşleştirmesine izin veriliyorsa، سابسايت کاربر **Account** sayfası altında **Domains** adlı یک metabox (متابوکس) را خواهد دید.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

کاربر می‌تواند روی دکمه **Add Domain** کلیک کند و این کار یک پنجره مودال (modal window) با دستورالعمل‌هایی را باز خواهد کرد.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

سپس کاربر می‌تواند روی **Next Step** کلیک کند و برای اضافه کردن نام دامنه سفارشی ادامه دهد. آن‌ها همچنین می‌توانند انتخاب کنند که آیا این دامنه اصلی (primary domain) خواهد بود یا خیر.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

روی **Add Domain** کلیک کردن، فرآیند تأیید و دریافت اطلاعات DNS دامنه سفارشی را آغاز می‌کند.

### درباره Domain Syncing (همگام‌سازی دامنه)

Domain Syncing یک فرآیند است که در آن Ultimate Multisite نام دامنه سفارشی شما را به عنوان یک دامنه افزونه (add-on domain) در حساب هاستینگ خود اضافه می‌کند **تا نگاشت دامنه کار کند**.

اگر ارائه‌دهنده هاستینگ شما با قابلیت Domain Mapping در Ultimate Multisite ادغام شده باشد، همگام‌سازی دامنه به صورت خودکار اتفاق می‌افتد. در حال حاضر، این ارائه‌دهندگان هاستینگ عبارتند از _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ و _Cpanel._

هنگامی که یک ادغام با ارائه‌دهنده هاست فعال باشد، Ultimate Multisite همچنین می‌تواند وظیفه ایجاد DNS یا زیردامنه سمت ارائه‌دهنده را برای سایت‌های جدید ایجاد شده در صف (enqueue) کند. اگر هیچ ادغام به دنبال آن وظیفه گوش ندهد، این کار پس‌زمینه (background job) برای جلوگیری از ورودی‌های بی‌اثر در صف نادیده گرفته می‌شود. بررسی‌های DNS و SSL برای دامنه‌های نگاشت شده همچنان از طریق فرآیند مرحله دامنه عادی اجرا می‌شوند.

Ultimate Multisite ayarlarına girip **Integration** (Entegrasyonlar) sekmesinde bu entegrasyonu etkinleştirmeniz gerekecek.

![Ultimate Multisite ayarlarındaki Entegrasyonlar sekmesini gösteren resim](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Entegrasyonlar ayarları sekmesindeki hosting sağlayıcı yapılandırma bağlantıları resmi -->

_Not: Eğer hosting sağlayıcınız yukarıda adı geçen sağlayıcılardan biri değilse, **alan adını manuel olarak senkronize etmeniz veya hosting hesabınıza eklemeniz gerekecek**._
