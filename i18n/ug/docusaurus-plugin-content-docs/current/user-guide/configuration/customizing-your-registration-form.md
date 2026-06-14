---
title: سجلmenizni özelleştirmek
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Registration Formınızı Özelleştirme

Aynı WordPress platformunda kurulu diğer tüm SaaS'lardan farklı görünmek için Ultimate Multisite, **Checkout Forms** özelliğimizle kayıt ve giriş sayfalarınızı özelleştirmenize olanak tanır.

Bunlar yeni müşterileri dönüştürmek için farklı yaklaşımları denemek istediğinizde kullanabileceğiniz kolay ve esnek bir yol olsa da, çoğunlukla kişiselleştirilmiş kayıt formları oluşturmak için kullanılırlar. Bu makale size bunu nasıl yapabileceğinizi göstermeyi amaçlıyor.

## Giriş ve kayıt sayfaları:

Ultimate Multisite kurulduğunda, ana sitenizde otomatik olarak özel giriş ve kayıt sayfaları oluşturur. Bu varsayılan sayfaları **Ultimate Multisite > Settings > Login & Registration** sayfasından istediğiniz zaman değiştirebilirsiniz.

![Login and Registration settings page](/img/config/settings-general.png)

İşte giriş ve kayıt ayarlarının tam görünümü:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

**Login & Registration** sayfasındaki özelleştirebileceğiniz her bir seçeneğe bir göz atalım:

  * **Enable registration (Kayıt etmeyi etkinleştir):** Bu seçenek, ağınızda kaydı açar veya kapatır. Kapalıysa, müşterileriniz ürünlerinize kayıt olamaz ve abone olamazlar.

  * **Enable email verification (E-posta doğrulamayı etkinleştir):** Bu seçenek açık olduğunda, ücretsiz bir plan için veya deneme süreli ücretli bir planla abone olan müşteriler doğrulama e-postası alacak ve web sitelerinin oluşturulması için doğrulama bağlantısına tıklamaları gerekecek.

* **پیش‌فرض صفحه ثبت‌نام (Default registration page):** این صفحه برای ثبت‌نام پیش‌فرض است. شما باید این صفحه را در وب‌سایت خود منتشر کنید و یک فرم ثبت‌نام (که به آن چک‌اوت فرم هم می‌گویند) داشته باشید - جایی که مشتریان شما محصولاتتان را مشترک خواهند شد. می‌توانید هر تعداد صفحه ثبت‌نام و فرم چک‌اوت ایجاد کنید، فقط یادتان باشد که شورت‌کد فرم چک‌اوت را در صفحه ثبت‌نام قرار دهید، وگرنه نمایش داده نخواهد شد.

* **استفاده از صفحه ورود سفارشی (Use custom login page):** این گزینه به شما اجازه می‌دهد از یک صفحه ورود سفارشی استفاده کنید، غیر از صفحه پیش‌فرض wp-login.php. اگر این گزینه را روشن کنید، می‌توانید انتخاب کنید که کدام صفحه برای ورود در گزینه **Default login page** (که درست زیر آن قرار دارد) استفاده شود.

* **مخفی کردن آدرس اصلی ورود (wp-login.php):** اگر می‌خواهید آدرس اصلی ورود را پنهان کنید، می‌توانید این گزینه را روشن کنید. این کار برای جلوگیری از حملات brute-force مفید است. اگر این گزینه فعال باشد، Ultimate Multisite زمانی که کاربر سعی کند به لینک اصلی wp-login.php دسترسی پیدا کند، خطای 404 نمایش می‌دهد.

* **اجبار به انتشار همزمان سایت (Force synchronous site publication):** بعد از اینکه یک مشتری در یک شبکه محصول مشترک شد، سایت جدید و در انتظار نیاز دارد تبدیل به یک سایت واقعی شبکه شود. این فرآیند انتشار از طریق Job Queue به صورت ناهمزمان انجام می‌شود. فعال کردن این گزینه باعث می‌شود که انتشار دقیقاً در همان درخواست ثبت‌نام اتفاق بیفتد.

حالا بیایید ببینیم سایر گزینه‌هایی که هنوز برای فرآیند ورود و ثبت‌نام مرتبط هستند چه هستند. آن‌ها درست زیر **Other options** (گزینه‌های دیگر) در همان صفحه Login & registration قرار دارند:

* **نقش پیش‌فرض (Default role):** این نقشی است که مشتریان شما پس از فرآیند ثبت‌نام روی وب‌سایت خود خواهند داشت.

* **Jumper'ı Etkinleştirme:** Bu ayar, admin alanında Jumper kısayolunu etkinleştirir. Jumper sayesinde yöneticiler, her menüyü tek tek taramadan Ultimate Multisite ekranlarına, ağ nesnelerine ve diğer desteklenen yerlere hızlıca atlayabilirler. Eğer bu hızlı gezinme aracını admin arayüzünden gizlemek isterseniz, bunu kapatabilirsiniz.

* **Ana siteye kullanıcı ekleme:** Bu seçeneği etkinleştirirseniz, kayıt işlemi bittikten sonra kullanıcıyı ağınızın ana sitesine de eklersiniz. Bu seçeneği etkinleştirirseniz, bu kullanıcıların web sitenizdeki **varsayılan rolünü** belirlemek için hemen altında bir seçenek de görünecektir.

* **Birden fazla hesabı etkinleştirme:** Kullanıcıların aynı e-posta adresiyle ağınızdaki farklı sitelerde hesaplara sahip olmalarına izin verir. Bu seçeneği kapalı tutarsanız, müşterileriniz ağınızda çalışan aynı e-posta adresine sahip diğer web sitelerinde hesap oluşturamayacaklardır.

Ve bu, giriş ve kayıtla ilgili özelleştirebileceğiniz tüm seçenekler! Düzenlemeyi bitirdikten sonra ayarlarınızı kaydetmeyi unutmayın.

## Birden Fazla Kayıt Formu Kullanma:

Ultimate Multisite 2.0, istediğiniz kadar farklı alanlar, ürünler vb. ile formlar oluşturmanıza olanak tanıyan bir ödeme formu düzenleyici sunar.

Hem giriş hem de kayıt sayfaları kısa kodlarla gömülüdür: giriş sayfasında **[wu_login_form]** ve kayıt sayfası için **[wu_checkout]**. Kayıt sayfasını, ödeme formları oluşturarak veya tasarlayarak daha da özelleştirebilirsiniz.

Bu özelliğe erişmek için sol taraftaki yan menüdeki **Checkout Forms** (Ödeme Formları) menüsüne gidin.

![Sidebar'daki Checkout Forms menüsü](/img/config/checkout-forms-list.png)

Bu sayfada sahip olduğunuz tüm ödeme formlarını görebilirsiniz.

Yeni bir tane oluşturmak isterseniz, sayfanın en üstündeki **Add Checkout Form** (Ödeme Formu Ekle) butonuna tıklamanız yeterlidir.

شما این سه گزینه را به عنوان نقطه شروع انتخاب می‌کنید: تک مرحله‌ای (single step)، چند مرحله‌ای (multi-step) یا خالی (blank). سپس، روی آن کلیک کنید تا به **ویرایشگر (Editor)** بروید.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

به طور alternatīو، می‌توانید با کلیک روی گزینه‌های زیر نام فرم موجود خود را ویرایش یا کپی کنید و یا از آن دو نسخه دیگر بسازید (duplicate). در آنجا، همچنین گزینه‌هایی برای کپی کردن shortcode فرم یا حذف فرم وجود دارد.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

اگر تک مرحله‌ای یا چند مرحله‌ای را انتخاب کنید، فرم پرداخت از قبل با مراحل اساسی که برای کار کردن لازم است پر شده است. سپس، اگر بخواهید می‌توانید مراحل اضافی به آن اضافه کنید.

### ویرایش یک فرم پرداخت:

همانطور که قبلاً گفتیم، شما می‌توانید فرم‌های پرداخت را برای اهداف مختلف بسازید. در این مثال، ما روی یک فرم ثبت‌نام کار خواهیم کرد.

پس از رفتن به ویرایشگر فرم پرداخت، نامی به فرم خود بدهید (که فقط برای ارجاع داخلی استفاده می‌شود) و یک slug (که برای ساخت shortcode استفاده می‌شود، مثلاً).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

فرم‌ها از مراحل و فیلدها تشکیل شده‌اند. می‌توانید با کلیک روی **Add New Checkout Step** (افزودن مرحله جدید فرم پرداخت)، یک مرحله جدید اضافه کنید.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

در تب اول پنجره مودال، محتوای مرحله فرم خود را پر کنید. به آن یک ID، نام و توضیحات بدهید. این موارد بیشتر برای استفاده داخلی هستند.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

سپس، دید (visibility) مرحله را تنظیم کنید. شما می‌توانید بین **Always show** (همیشه نمایش داده شود)، **Only show for logged in users** (فقط برای کاربران وارد شده نمایش داده شود) یا **Only show for guests** (فقط برای مهمان‌ها نمایش داده شود) یکی را انتخاب کنید.

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

آخر، مرحله‌ی استایل (style) رو تنظیم کنید. این‌ها فیلدهای اختیاری هستن.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

حالا وقت اضافه کردن فیلدها به اولین مرحله‌مون رسیده. فقط روی **Add New Field** کلیک کنید و نوع بخشی که می‌خواید رو انتخاب کنید.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

هر فیلدی پارامترهای متفاوتی داره که باید پر بشن. برای این ورود اول، ما فیلد **Username** رو انتخاب می‌کنیم.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

می‌تونید هر تعداد مرحله و فیلد که نیاز دارید اضافه کنید. برای نمایش محصولاتتون به مشتری‌ها تا یکی رو انتخاب کنن، از فیلد **Pricing Table** استفاده کنید. اگه می‌خواید اجازه بدید مشتری قالب (template) رو انتخاب کنه، فیلد **Template Selection** رو اضافه کنید. و همین‌طور...

_**توجه:** اگر بعد از ساخت فرم تسویه حساب (checkout form)، محصولی بسازید، باید اون محصول رو در بخش جدول قیمت‌گذاری (Pricing table section) اضافه کنید. اگه اضافه نکنید، محصول برای مشتری‌ها در صفحه ثبت نام نمایش داده نمی‌شه._

_**توجه ۲:** username، email، password، site title، site URL، order summary، payment و submit button فیلدهای اجباری هستن تا یک فرم تسویه حساب ساخته بشه._

در حالی که روی فرم تسویه حساب خود کار می‌کنید، همیشه می‌تونید از دکمه **Preview** استفاده کنید تا ببینید مشتری‌ها فرم رو چطور خواهند دید. همچنین می‌تونید بین حالت مشاهده به عنوان کاربر موجود (existing user) یا بازدیدکننده (visitor) جابه‌جا بشید.

![Checkout form preview button on the checkout form editor](/img/config/checkout-form-preview-button.png)![Visitor or existing user checkout form preview](/img/config/checkout-form-preview-modal.png)

آخر، **Advanced Options** (پیشنهادهای پیشرفته) bölümünden, **Thank You** (تشکر) sayfası için mesajı ayarlayabilir, dönüşümleri takip etmek için قطعات (snippets) ekleyebilir, چک‌आउट فرمınıza (checkout form) özel CSS ekleyebilir veya آن را مشخص کشورlere محدود edebilirsiniz.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

شما همچنین می‌توانید با کلیک کردن این گزینه در ستون سمت راست، فرم چک‌اوت خود را دستی فعال یا غیرفعال کنید، یا آن را به طور دائم حذف نمایید.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

فرم چک‌اوت خود را ذخیره کردن یادتان نرود!

![Save Checkout Form button](/img/config/checkout-form-save.png)

برای گرفتن شورت‌کد (shortcode) فرم خود، روی **Generate Shortcode** کلیک کنید و نتیجه‌ای که در پنجره مودال (modal window) نشان داده می‌شود را کپی نمایید.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**توجه:** برای اینکه این فرم چک‌اوت به صفحه ثبت نام شما اضافه شود، باید این شورت‌کد را در صفحه ثبت نام خود اضافه کنید._

## پیش از انتخاب محصولات و قالب‌ها از طریق پارامترهای URL:

اگر می‌خواهید جداول قیمت سفارشی (customized pricing tables) برای محصولاتتان ایجاد کنید و در فرم چک‌اوت، محصول یا قالبی که مشتری از جدول قیمت یا صفحه قالب‌های شما انتخاب می‌کند را از قبل انتخاب کنید، می‌توانید از پارامترهای URL برای این کار استفاده کنید.

### **برای طرح‌ها (plans):**

به مسیر **Ultimate Multisite > Products > Select a plan** بروید. باید دکمه **Click to copy Shareable Link** در بالای صفحه را ببینید. این لینکی است که می‌توانید از آن، این طرح خاص را روی فرم چک‌اوت خود از قبل انتخاب کنید.

![Product page with shareable link button](/img/config/products-list.png)

Ətraflı Qeyd: Bu paylaşılabilir link yalnız **Planlar** üçün keçərlıdır. Paketlər və ya xidmətlər üçün paylaşılabilir linklərdən istifadə edə bilməzsiniz.

### Şablonlar (templates) üçün:

Əgər ödəniş formanızda sayt şablonlarını əvvəlcədən seçmək istəyirsinizsə, qeydiyyat səhifəsi URL-inizdə **?template_id=X** parametridən istifadə edə bilərsiniz. "X" yerinə **sayt şablonunun ID nömrəsi** yazılmalıdır. Bu nömrəni almaq üçün **Ultimate Multisite > Sites** bölməsinə gedin.

İstifadə etmək istədiyiniz sayt şablonunun hemen altında **Manage**-ə klikləyin. Orada SITE ID nömrəsini görəcəksiniz. Bu nömrəni yalnız bu müəyyən sayt şablonu üçün ödəniş formanızda əvvəlcədən seçilməsi üçün istifadə edin. Bizim halımızda URL parametrləri **?template_id=2** olacaq.

![Sayt siyahısı, sayt şablonu ID-si göstərir](/img/config/site-templates-list.png)

Gəlin deyək ki, bizim şəbəkə veb saytımız [**www.mynetwork.com**](http://www.mynetwork.com) olsun və ödəniş formamızla qeydiyyat səhifəmiz **/register** səhifəsində yerləşsin. Bu sayt şablonu əvvəlcədən seçilmiş bütün URL, [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** ) kimi görünəcək.

Və əgər istəsəniz, həm məhsulları (products) həm də şablonları ödəniş formanızda əvvəlcədən seçmək istəyirsinizsə. Yalnız planın paylaşılabilir linkini kopyalayıb şablon parametrinə sonda yapışdırmanız kifayətdir. Bu belə görünəcək: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**
