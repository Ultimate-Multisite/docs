---
title: Birinchi Abonament Mahsulatingizni Yaratish
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# İlk Abonelik Ürününüzü Oluşturma (v2)

_**ÖNEMLİ NOT: Bu makale sadece Ultimate Multisite sürüm 2.x kullanıcıları içindir. Eğer sürüm 1.x kullanıyorsanız,**_ **_bu makaleye bakın**_**.

Ağınızı çalıştırmaya ve potansiyel kullanıcılara hizmetlerinizi satmaya başlamak için farklı abonelik seçeneklerine ihtiyacınız var. Bu ürünleri nasıl oluşturursunuz? Sunabileceğiniz ürün türleri nelerdir? Bu makalede, ürünlerle ilgili bilmeniz gereken her şeyi ele alacağız.

## Ürün Türü {#product-type}

Ultimate Multisite ile müşterilerinize iki kategori ürün sunabilirsiniz: **planlar** ve **eklentiler (Order Bump)**. Eklentiler iki türe ayrılabilir: **paketler** ve **hizmetler**. Aralarındaki farkları ve özel durumları bir sonraki bölümde göreceğiz.

* **Planlar**: Ultimate Multisite'ın temel ürünüdür. Bir müşterinin üyelik alabilmesi için bu planlara bağlı olması gerekir. Bir plan, size bir veya daha fazla site (planınızın yapılandırmasına bağlıdır) ve ürün düzenleme sayfanızda belirlediğiniz kısıtlamalarla birlikte sunar.

* **Paketler**: Ultimate Multisite planlarının işlevselliğini doğrudan etkileyen eklentilerdir. Bunlar, müşterinizin satın aldığı orijinal plana kısıtlamaları değiştirir veya yeni kaynaklar, eklentiler veya temalar ekler. Örneğin, temel bir plan ayda 1.000 ziyareti izin verebilir ve bu sayıyı 10.000'e genişleten bir paket sunabilirsiniz.

* **Hizmetler**: Ultimate Multisite'ın işlevselliğini değiştirmeyen eklentilerdir. Bunlar, müşterinizin satın aldığı planın yanı sıra sizin için gerçekleştireceğiniz görevlerdir. Örneğin, müşteriniz tek bir siteye izin veren bir plan satın alabilir ve bu site tasarımını yapacak ek bir hizmet için de ödeme yapabilir.

## Ürünleri Yönetme {#managing-products}

برای بسیاری، تب **Products** در Ultimate Multisite (**Ultimate Multisite > Products**) می‌شه با طرح‌ها (plans) در محیط هاستینگ سنتی یکی دانست.

در Ultimate Multisite، تب محصولات ساختار و محدودیت‌هایی رو برای یک محصول یا سرویس خاص تعریف می‌کنه. این ساختارها شامل توضیحات محصول یا سرویس، قیمت، مالیات و مجوزها هم هست.

این بخش به شما کمک می‌کنه تا این سنگ بنای اساسی Ultimate Multisite رو بهتر درک کنید.

![Products list page](/img/config/products-list.png)

## اضافه کردن محصولات (Adding Products) {#adding-products}

چه یک طرح، بسته یا سرویس، نقطه شروع تعریف یک آیتم جدید باشه، از طریق **Ultimate Multisite > Products > Add Product** انجام می‌شه.

![Add Product button](/img/config/product-add-button.png)

این رابط کاربری شامل دو بخش اصلی است. در سمت چپ چندین تب وجود داره که به شما در تعریف محصول کمک می‌کنن و در سمت راست چند بخش برای تعیین قیمت پایه محصول، وضعیت فعال بودن آن و تصویر محصول قرار دارند.

![Product edit page overview](/img/config/product-edit-full.png)

### توضیحات (Description) {#description}

اطلاعات پایه محصول با وارد کردن نام و توضیحات محصول قابل تعریف است. این شناسه‌ها هر جا که اطلاعات محصول لازم باشه، نمایش داده می‌شن؛ مثلاً در انتخاب طرح و قیمت‌گذاری، فاکتورها، ارتقاءها و موارد مشابه.

![Product description section](/img/config/product-description.png)

### نوع قیمت‌گذاری (Pricing Type) {#pricing-type}

در سمت راست رابط کاربری، قیمت‌گذاری پایه قابل تعریف است.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite از سه نوع قیمت‌گذاری مختلف پشتیبانی می‌کنه. گزینه **paid** (پولی) از مدیر شبکه برای اطلاعات مربوط به قیمت محصول و دوره صورتحساب درخواست می‌کند.

### قیمت‌گذاری (Pricing) {#pricing}

بخش قیمت، قیمت پایه محصول و بازه صورتحساب را مشخص می‌کند.

![Pricing and save section](/img/config/product-pricing-save.png)

شۇنداقى باشلاقدا، $29.99 ئۆزگەرتى (setting) 1 ھەفتىلىك учун بولsa، ҳار قاغىغان ھەر ойда $29.99 ташкил этиدۇ. Шунингдек، $89.97 баҳраси билан 3 ھەفتىلىك uchun ئۆزگەرتى бўлса, ҳар чоракда бу миқдорни тўлаш керак бўлади.

### Тўлов Циклари (Billing Cycles) {#billing-cycles}

Тўлов циклилар бўлимида юзага келтирилган тўлов даврининг тезлиги аниқланади ва бу одатда шартномалар ёки муайян муддатлар доирасида тушунилади.

![Pricing and save section](/img/config/product-pricing-save.png)

Масалан, 1 ой даврига ва 12 та тўлов циклига эга бўлган $29.99 баҳрасидаги маҳсулот учун бу миқдор 12 ой давомида ҳар ойда $29.99 ташкил этиб тўланади. Бунинг маъноси, бундай танловлар 12 ой давомига $29.99 миқдорида фиксированный баҳраси белгилаб беради ва кейинкида тўлаш тўхтатилади.

### Таjmlа (Trial Period) {#trial-period}

Таjmlа таклифини ёқиш (enabling the offer trial toggle) шабака администраторига маҳсулот учун таjmlа даврини белгилаш имкониятини беради.

![Pricing and save section](/img/config/product-pricing-save.png)

Тамжима даврида мижозлар маҳсулотдан эркин фойдаланади ва таjmlа даври тугамагунча тўламайди.

### Ўрнатиш ҳақи (Setup Fee) {#setup-fee}

Шунингдек, сизнинг режангизга ўрнатиш ҳақини қўллашингиз мумкин.

![Pricing and save section](/img/config/product-pricing-save.png)

Бу шуни англатадики мижозлар биринчи тўловда (баҳрасидан ташқари, режа баҳрасига қўшилган) бу бўлимда белгилаган ҳақига тенг бўлган қўшимча миқдорни тўлайди.

### Фаол (Active) {#active}

Фаол танлови маҳсулот янги ройхатдан ўтадиган мижозлар учун мавжуд эканлигини самарали белгилаб беради.

![Active toggle](/img/config/product-active.png)

Əgər bu plan ayarında mövcud müştərilər varsa və toggle-ı deaktiv edilmiş vəziyyətə qoyursunuzsa, bu, planı əvvəlki təyinatlardan çıxararaq gələcək yeni qeydiyyatlar üçün onu aradan qaldırır. **Plan üzərində mövcud müştərilər yeni plana keçdikləri və ya plandan silindikdən sonra** ödəniş etməyə davam edirlər.

### Məhsul Şəkli {#product-image}

**Upload Image** düyməsi şəbəkə administratoruna media kitabxanasından məhsul şəkli seçmək və ya yükləmək imkanı verir.

![Product image section](/img/config/product-image.png)

### Silmə {#delete}

**Delete Product** düyməsi məhsulu sistemdən silir. Məhsul yayınlandıqdan sonra görünür.

![Delete product section](/img/config/product-delete.png)

Digər silmələrdən fərqli olaraq, məhsul heç bir çöp vəziyyətində yerləşdirilməz. Beləlik ki, silindiyi zaman bu əməliyyat geri qaytarıla bilməz.

### Məhsul Seçimləri {#product-options}

Əsas səviyyədə məhsul məlumatları müəyyən edildikdən sonra, məhsul seçimləri şəbəkə administratoruna məhsulun xüsusi atributlarını daha da müəyyən etməyə kömək edir.

#### Ümumi {#general}

**General** tabı məhsulun ümumi xüsusiyyətlərini müəyyən edir ki, bunlar digər məhsul xüsusiyyəti olan tablardan heç birinə tətbiq edilmir.

![General tab](/img/config/product-general-tab.png)

**product slug** adlı bu aydın ad, məhsulun Ultimate Multisite və URL-lərin digər hissələrində kimlik olaraq istifadə edildiyi slug-u müəyyən edir.

Ultimate Multisite Plan, Paket və Xidmətlər kimi bir neçə məhsul növünü dəstəkləyir. **Product Options** tabları seçilən məhsul növünə uyğun olaraq dinamik şəkildə tənzimlənir.

**Customer Role** (Müştəri Rolü) sayt yaradılarkən müştəriyə təyin edilən rolu göstərir. Adətən, ən çox şəbəkə administratorları üçün bu Ultimate Multisite default və ya Administrator olacaq. Ultimate Multisite default rolunu **Ultimate Multisite > Settings > Login & Registration**-da təyin edə bilərsiniz.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Yukarı ve Aşağı Geçişler (Up & Downgrades) {#up--downgrades}

Bu sekme, bir müşterinin kendi özel kademesi içindeki mevcut yükseltme ve aşağı geçiş yollarını belirtir.

Bu kavramı anlamak için, niş bir Ultimate Multisite kurulumunun müşterilerine öğrenme yönetim çözümleri sağladığı bir örnek düşünün. Bu üç planın (Temel, Plus ve Premium) tanımlandığı ve her plan için özel eklentilerin etkinleştirildiği (eklentileri nasıl etkinleştireceğiniz hakkında daha sonra bu bölümde talimatlar göreceksiniz) hedefine ulaşmak için bu üç plan tanımlanır.

Eğer Ultimate Multisite kurulumu aynı zamanda iş web sitelerini veya e-ticaret web sitelerini de hizmet veriyorsa, bu planların farklı eklentilerin kurulmasını ve etkinleştirilmesini gerektirmesi gerekebilir.

Bu noktada, eLearning müşterilerinin e-ticaret planlarına geçiş yapmasına izin vermek istenmez ve sorunlu olabilir çünkü bu planlar, fiyatlandırma ve sınırlamalar uygun olmayabilir.

Böylece müşterinin yolunu kısıtlamak ve olayları önlemek için ağ yöneticisi bir plan grubu tanımlayabilir ve bu grupta müşterinin geçebileceği planları belirtebilir.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Bir plan grubu tanımlamak için **plan grubu** listesi içindeki uyumlu planları belirtin. **Ürün sırası (product order)**, planların en düşükten en yükseğe nasıl sıralanacağını ve gösterileceğini belirler.

Ultimate Multisite ayrıca bir **order bump** özelliğine de sahiptir; uygun olduğunda ek ürünler ve hizmetler planlara eklenebilir. Bunlar müşteriye ödeme sırasında veya yükseltme sırasında planlara eklenebilecek ek öğeler olarak sunulur.

#### Fiyat Değişiklikleri (Price Variations) {#price-variations}

قیمت تغییرات به مدیر شبکه اجازه می‌دهد بسته به مدت زمان، قیمت‌های متفاوت را مشخص کند. این تنظیم باعث می‌شود بتوانید برای یک محصول یک دوره ماهانه، فصلی، سالانه یا هر دوره صورت‌حساب دیگری ارائه دهید. به عنوان مثال، می‌توانید یک محصول را با قیمت ۲۹.۹۹ دلار در ماه تنظیم کرده و یک گزینه سالانه با تخفیف ۲۴۹.۹۹ دلار در سال اضافه کنید.

![Price Variations tab](/img/config/product-price-variations-tab.png)

برای ایجاد تغییرات قیمت، دکمه **Enable Price Variations** را فعال کنید و روی دکمه **Add new Price Variation** کلیک نمایید.

![Product price variations](/img/config/product-price-variations.png)

برای وارد کردن یک تغییر قیمت، مدت زمان، دوره و قیمت آن را تنظیم کنید. می‌توانید با کلیک مجدد روی دکمه، تغییرات بیشتری اضافه کنید.

به عنوان مثال، اگر قیمت پایه محصول شما ۲۹.۹۹ دلار در ماه باشد، ممکن است موارد زیر را اضافه کنید:

  * **۳ ماه** با ۷۹.۹۹ دلار (تخفیف کمی نسبت به ماهانه)
  * **۱ سال** با ۲۴۹.۹۹ دلار (برای تعهد سالانه تخفیف قابل توجهی)

:::tip نمایش دکمه انتخاب دوره صورت‌حساب در فرانت‌اند

تنها تغییرات قیمت، یک دکمه یا سوئیچ را به صفحه پرداخت (checkout) جلویی اضافه نمی‌کند. برای اینکه مشتریان بتوانند بین دوره‌های صورت‌حساب جابه‌جا شوند (مثلاً ماهانه / سالانه)، باید یک فیلد **Period Selection** به فرم پرداخت خود اضافه کنید. برای دستورالعمل‌های گام به گام، به [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) مراجعه کنید.
:::

#### مالیات‌ها (Taxes) {#taxes}

تب **Taxes** با تنظیمات مالیاتی مشخص شده در **Ultimate Multisite > Settings > Taxes** و به طور خاص نرخ‌های مالیاتی تعریف شده همخوانی دارد. برای فعال کردن مالیات‌ها و تعیین نرخ‌های مالیاتی قابل اعمال، لطفاً به مستندات **Ultimate Multisite: Settings** مراجعه کنید.

![Taxes tab](/img/config/product-taxes.png)

پشه‌ر، ما یک نرخ مالیاتی محلی ۷.۲۵٪ را برای مشتریان در کالیفرنیا (ایالات متحده آمریکا) تعریف کردیم.

وقتی نرخ مالیات در **Ultimate Multisite > Settings > Manage Tax Rates** تنظیم شود، قابل انتخاب در سطح محصول خواهد بود.

![Taxes tab](/img/config/product-taxes.png)

برای نشان دادن اینکه یک محصول مشمول مالیات است، دکمه **Is Taxable** را فعال کنید و نرخ مالیات مربوطه را از منوی کشویی Tax Category انتخاب نمایید.

#### Site Templates (قالب‌های سایت) {#site-templates}

به طور خلاصه، قالب‌های سایت وب‌سایت‌های وردپرسی کاملی هستند که در ابتدای اشتراک مشتری به سایت او کپی می‌شوند.

![Site Templates tab](/img/config/product-site-templates.png)

مدیر شبکه قالب سایت را به عنوان یک سایت وردپرس معمولی با تم‌ها، پلاگین‌ها و محتوای فعال و پیکربندی شده ایجاد و تنظیم می‌کند. قالب سایت دقیقاً برای مشتری کپی می‌شود.

این تب به مدیر شبکه اجازه می‌دهد رفتار قالب‌های سایت در هنگام اشتراک جدید را مشخص کند. برای استفاده از قالب‌های سایت برای این طرح، دکمه **Allow Site Templates** را روی حالت فعال قرار دهید.

وقتی **Allow Site Templates** غیرفعال باشد، مشتریان در این طرح حتی اگر یک فرم پرداخت، لینک قابل اشتراک‌گذاری یا پارامتر URL وجود داشته باشد که به طور معمول قالب‌ها را در دسترس قرار می‌دهد، نمی‌توانند قالب‌ها را انتخاب کنند. Ultimate Multisite اکنون این محدودیت را از طریق یک زنجیره پشتیبان (fallback chain) در نقاط ورودی موجود اعمال می‌کند: ابتدا تنظیمات طرح (plan settings) بررسی می‌شود، سپس تنظیمات فرم پرداخت قالب، و در نهایت قالب‌های از پیش انتخاب شده یا ارائه شده توسط URL. این کار باعث می‌شود محدودیت‌های طرح ثابت بماند و از نمایش قالب‌ها برای محصولاتی که نباید آن‌ها را ارائه دهند جلوگیری کند.

**site template selection mode** نحوه رفتار قالب‌های سایت در طول فرآیند اشتراک را مشخص می‌کند.

**D** **Default** تنظیمي، چكست آراش (checkout form) دا قادمه پله‌ها رو تبعیت می‌کنه. اگه شبکه مدیر یک قالب انتخاب مرحله تو فرآیند چک‌اوت تعریف کرده باشه و اون مرحله با قالب‌ها تعریف شده باشه، این تنظیم این دستورات رو رعایت می‌کنه که توی اون مرحله چك‌اوت تعیین شده.

**A** **Assign Site Template** (قالب سایت اختصاص دادن) رو مشخص کردن، انتخاب قالب مشخص شده رو مجبور می‌کنه. در نتیجه، هرگونه مرحله انتخاب قالب در فرآیند چک‌اوت حذف می‌شه.

در نهایت، **C** **Choose Available Site Templates** (قالب‌های سایت موجود را انتخاب کن)، قالب‌های تعیین شده در مرحله چك‌اوت رو با قالب‌هایی که در این تنظیم انتخاب شده‌اند، بازنویسی (override) می‌کنه. همچنین می‌شه یک قالب از قبل انتخاب شده رو برای کمک به مشتری در انتخاب تعریف کرد.

در نهایت، اگه مدیر شبکه بخواد انتخاب قالب‌ها در مراحل چک‌اوت اتفاق بیفته، تنظیم ' _default_ ' کافیه. یا اگر می‌خوای انتخاب قالب‌ها رو حذف و قفل کنی و وظیفه انتخاب رو به تنظیمات طرح (plan settings) بسپاری، گزینه‌های ' _assign new template_ ' یا ' _choose available site templates_ ' ممکنه مفید باشن.

#### Sites (سایت‌ها) {#sites}

تب **Sites** بخشی از قابلیت‌های محدودیت‌های Ultimate Multisite هست.

![Sites tab](/img/config/product-sites.png)

این تنظیم مشخص می‌کنه حداکثر تعداد سایت‌هایی که یک مشتری تحت عضویتش می‌تونه ایجاد کنه چنده.

برای فعال کردن این محدودیت، دکمه **limit sites** (محدود کردن سایت‌ها) رو روی حالت فعال قرار بدید و حداکثر تعداد سایت‌ها رو در فیلد **site allowance** (مجوز سایت) مشخص کنید.

#### Visits (بازدیدها) {#visits}

تب **Visits** بخش دیگری از سیستم محدودیت‌های Ultimate Multisite هست. این تنظیم اجازه می‌ده بازدیدکنندگان منحصر به فرد به سایت مشتری حساب بشن و بعد سرعت دسترسیشون رو کنترل (throttle) کنیم.

![Visits tab](/img/config/product-visits.png)

از یک دیدگاه بازاریابی، مدیران شبکه می‌توانند از این تنظیم به عنوان راهی برای تشویق مشتریان به ارتقاء طرح خود پس از رسیدن به محدودیت‌ها استفاده کنند. این تنظیم همچنین می‌تواند به مدیر شبکه کمک کند تا ترافیک بیش از حد به سایت‌ها را کنترل و جلوگیری کند تا منابع سیستم حفظ شوند.

برای استفاده از این قابلیت، دکمه **limit unique visits** (محدود کردن بازدیدهای منحصر به فرد) را روی حالت فعال قرار دهید و حداکثر تعداد بازدیدکنندگان منحصر به فرد را در فیلد **unique visits quota** (سهم بازدیدهای منحصر به فرد) مشخص کنید.

هنگامی که این محدودیت‌ها به پایان رسید، Ultimate Multisite به جای نمایش یک پیام مبنی بر تجاوز از محدودیت‌ها، دیگر سایت مشتری را سرو نخواهد کرد.

#### کاربران (Users) {#users}

محدودیت‌های 'Users' در Ultimate Multisite به مدیر شبکه اجازه می‌دهد محدودیت‌هایی را بر تعداد کاربرانی که می‌توان ایجاد و به نقش‌ها اختصاص داد اعمال کند.

![Users tab](/img/config/product-users.png)

برای فعال کردن ویژگی محدودیت، دکمه **limit user** (محدود کردن کاربر) را با کشیدن آن به سمت راست روی حالت فعال قرار دهید.

سپس برای هر نقشی که می‌خواهید محدود شود، دکمه کنار آن را روی حالت فعال تنظیم کرده و حداکثر حد بالایی را در فیلد مربوطه تعریف کنید.

#### انواع پست (Post Types) {#post-types}

تب **Post Types** به مدیر شبکه اجازه می‌دهد محدودیت‌های دقیقی بر مجموعه گسترده‌ای از انواع پست‌ها در وردپرس اعمال کند.

![Post Types tab](/img/config/product-post-types.png)

به دلیل ساختار وردپرس، پست‌ها و انواع پست‌ها بخش مهمی از عملکرد اصلی آن هستند، بنابراین سیستم محدودیت Ultimate Multisite برای کمک به مدیر شبکه در ایجاد و حفظ محدودیت‌ها طراحی شده است.

برای فعال کردن این زیرسیستم محدودیت‌ها، دکمه **limit post types** (محدود کردن انواع پست) را با کشیدن آن به سمت راست روی حالت فعال قرار دهید.

بعد، هر پست تایپ (post type) için, onu sağa kaydırarak açıp uygun alanda maksimum üst sınırı belirleyerek sınırlayabilirsiniz.

#### Disk Alanı (Disk Space) {#disk-space}

**Disk Alanı** sekmesi ağ yöneticilerine müşterilerin tüketeceği alanı kısıtlama imkanı verir.

![Disk Space tab](/img/config/product-disk-space.png)

Genellikle bir WordPress multisite'ta ana dosyalar tüm siteler arasında paylaşılır ve medya dosyaları ile yüklemeler için oluşturulan bireysel dizinler bu ayarların ve sınırlamaların uygulandığı yerlerdir.

Disk kullanım kısıtlamasını etkinleştirmek için, **limit disk size per site** (site başına disk boyutu limiti) düğmesini sağa kaydırarak aktif duruma getirin.

Ardından, **disk space allowance** (disk alanı tahsisi) alanında maksimum üst sınırı megabayt cinsinden belirtin.

#### Özel Alan Adı (Custom Domain) {#custom-domain}

Bu seçeneği açarak bu plan için özel alan adlarını müşterilere izin verebilirsiniz.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temalar (Themes) {#themes}

Ürün seçeneklerindeki **Temalar** sekmesi, ağ yöneticisine temaları müşterilerin seçim yapabilmeleri ve isteğe bağlı olarak temanın durumunu zorlamaları için kullanıma sunma imkanı verir.

![Themes tab](/img/config/product-themes.png)

_**Not: Temaların müşterilere sunulabilmesi için ağ yöneticisi tarafından ağda etkinleştirilmiş olması gerekir.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Görünürlük (visibility)** seçeneği, bu temanın müşterinin kendi sitesindeki **Appearance > Themes** (Görünüm > Temalar) sekmesini görüntülerken görünür olup olmayacağını tanımlar. Bu seçeneği **Hidden** (Gizli) olarak ayarlamak temayı görünürlükten kaldırır ve böylece onu seçme ve etkinleştirme yeteneğini kısıtlar.

![Themes tab](/img/config/product-themes.png)

**Davranış (behavior)** seçimi, ağ yöneticisine müşteri sitesi oluşturulduğunda temanın durumunu tanımlama imkanı verir.

**Mövcud (A Available) holatda tema mijoz uchun o'zidan faollashtirish imkonini beradi. Aksincha, Mavjud Bo'lmagan (Not Available) holatida esa mijozdan temani faollashtirish imkoniyati olib tashlanadi. Oxirida, **Majburiy Faollashtirish (Force Activate)** opsiyasi temani tanlash va faollashtirishni majburlaydi, shunda u sayt yaratilganda default sifatida belgilanishi mumkin.**

#### Plugins (Pluginlar) {#plugins}

Themes tab'dagi kabi, Ultimate Multisite tarmoq administratoriga pluginlarni mijozlarga ko'rsatishini va yangi sayt yaratilganda ularning holatini belgilash imkonini beradi.

![Plugins tab](/img/config/product-plugins.png)

**Ko'rinish (visibility)** menyusi orqali, pluginni mijozning saytida Plugins menyusi opsiyasidan ko'rganida yaqinida ko'rsatish yoki yashirish mumkin.

Tarmoq administrator pluginlarning xatti-harakatini behavior drop-downidagi opsiyalardan foydalanib yanada o'zgartirishi mumkin.

![Plugins tab](/img/config/product-plugins.png)

**Default (Default)** tanlovi mijoz tomonidan tanlangan sayt shablonida belgilangan plugin holatini hurmat qiladi. Shunday qilib, shablonga faollashtirilgan pluginlar shablon mijozning saytiga klonlanishi vaqtida ham faol bo'lib qoladi.

**Majburiy Faollashtirish (Force Activate)** esa sayt yaratilganda pluginni faol holatga qo'yadi, aksincha **Majburiy Faollashtirmaslik (Force Inactivate)** esa sayt yaratilganda pluginni faollashtirmaydi. Bu ikki vaziyatda ham, mijoz o'z WordPress Plugins menyusi orqali pluginning holatini qo'lda o'zgartirishi mumkin.

**Force Activate & Lock** تنظیمي (setting) هم تقریباً একই şekilde çalışır ama müşterinin eklentinin durumunu değiştirmesini engeller. Bu yüzden Force Activate ve Lock ayarı, eklentiyi aktif duruma zorlar ve müşterinin onu devre dışı bırakmasını engeller. Benzer şekilde, **Force Inactivate & Lock** ayarı da eklentiyi pasif duruma zorlar ve kullanıcının eklentiyi etkinleştirmesini engeller.

Ağ yöneticisi, Force Activate & Lock ve Force Inactivate & Lock ayarlarını site şablonları ile birlikte düşünmek isteyebilir; çünkü bu ayarlar seçildiğinde şablon içindeki eklenti durumları etkilenebilir.

#### Sıfırlama Sınırları (Reset Limitations) {#reset-limitations}

**Reset Limitations** sekmesi, üründe tanımlanmış tüm özel limitleri sıfırlar. Limitleri sıfırlamak için **reset limitations** düğmesine tıklayın.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Eylemi onaylamak için sağdaki **confirm reset** anahtarını aktif duruma kaydırın ve **reset limitations** düğmesine tıklayın.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Ürünü Düzenleme, Çoğaltma veya Silme {#edit-duplicate-or-delete-product}

Mevcut ürünler, **Ultimate Multisite > Products** yolunu izleyerek mevcut ürün adına fareyle gelip (hover) düzenlenebilir, çoğaltılabilir veya silinebilir.

![Product hover actions](/img/config/product-hover-actions.png)
