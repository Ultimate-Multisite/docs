---
title: Gina Kaddar Kuɗi Na Farko
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Tạo Sản Phẩm Đăng Ký Đầu Tiên Của Bạn (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này chỉ dành cho người dùng Ultimate Multisite phiên bản 2.x. Nếu bạn đang sử dụng phiên bản 1.x,**_ **_hãy xem bài viết này**_**.

Để bắt đầu chạy mạng lưới của bạn và bắt đầu bán dịch vụ của mình cho những người dùng tiềm năng, bạn cần có các tùy chọn đăng ký khác nhau. Làm thế nào để tạo ra những sản phẩm này? Bạn có thể cung cấp những loại sản phẩm nào? Trong bài viết này, chúng ta sẽ đề cập đến mọi thứ bạn cần biết về sản phẩm.

## Loại Sản Phẩm

Với Ultimate Multisite, bạn có thể cung cấp hai loại sản phẩm cho khách hàng của mình: **gói dịch vụ (plans)** và **tiện ích bổ sung (add-ons) (Order Bump)**. Các tiện ích bổ sung có thể được chia thành hai loại: **gói (packages)** và **dịch vụ (services)**. Chúng ta sẽ xem sự khác biệt và đặc điểm riêng của chúng ở phần tiếp theo.

  * **Gói dịch vụ (Plans)**: Đây là sản phẩm cơ bản của Ultimate Multisite. Khách hàng của bạn chỉ có thể tham gia thành viên nếu nó được gắn với một gói dịch vụ. Một gói dịch vụ cung cấp cho khách hàng của bạn một hoặc nhiều trang web (tùy thuộc vào cấu hình của gói dịch vụ) với những giới hạn mà bạn đặt trên trang chỉnh sửa sản phẩm của mình.

  * **Gói (Packages)**: Đây là các tiện ích bổ sung ảnh hưởng trực tiếp đến chức năng của các gói Ultimate Multisite. Chúng thay đổi các giới hạn hoặc thêm tài nguyên, plugin hoặc theme mới vào gói ban đầu mà khách hàng đã mua. Ví dụ, một gói cơ bản có thể cho phép 1.000 lượt truy cập mỗi tháng và bạn có thể cung cấp một gói mở rộng số này lên 10.000.

  * **Dịch vụ (Services)**: Đây là các tiện ích bổ sung không làm thay đổi chức năng của Ultimate Multisite. Chúng là những nhiệm vụ mà bạn sẽ thực hiện cho khách hàng của mình ngoài gói họ đã mua. Ví dụ, khách hàng của bạn có thể mua một gói cho phép một trang web và đồng thời trả tiền cho một dịch vụ bổ sung sẽ thiết kế trang web này.

## Quản lý Sản Phẩm

برای بسیاری، تب **Products** در Ultimate Multisite **(Ultimate Multisite > Products)** را می‌توان با طرح‌ها (plans) در محیط میزبانی سنتی مقایسه کرد.

در Ultimate Multisite، تب محصولات ساختار و محدودیت‌های مربوط به یک محصول یا سرویس خاص را تعریف می‌کند. این ساختارها شامل توضیحات محصول یا سرویس، قیمت، مالیات و مجوزها نیز می‌شود.

این بخش به شما کمک می‌کند تا این سنگ بنای اساسی Ultimate Multisite را بهتر درک کنید.

![Products list page](/img/config/products-list.png)

## اضافه کردن محصولات (Adding Products)

چه یک طرح، بسته یا سرویس، نقطه شروع تعریف یک آیتم جدید باشد، از طریق **Ultimate Multisite > Products > Add Product** انجام می‌شود.

![Add Product button](/img/config/product-add-button.png)

این رابط کاربری شامل دو بخش اصلی است. در سمت چپ چندین تب وجود دارد که به شما در تعریف محصول کمک می‌کنند و در سمت راست چند بخش برای تعیین قیمت پایه محصول، وضعیت فعال آن و تصویر محصول قرار دارند.

![Product edit page overview](/img/config/product-edit-full.png)

### توضیحات (Description)

اطلاعات پایه محصول را می‌توانید با وارد کردن نام محصول و شرح آن تعریف کنید. این شناسه‌ها هر جا که اطلاعات محصول مورد نیاز است، نمایش داده می‌شوند، مانند انتخاب طرح و قیمت‌گذاری، فاکتورها، ارتقاءها و موارد مشابه.

![Product description section](/img/config/product-description.png)

### نوع قیمت‌گذاری (Pricing Type)

در سمت راست رابط کاربری، می‌توانید قیمت پایه را تعریف کنید.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite از سه نوع قیمت‌گذاری مختلف پشتیبانی می‌کند. گزینه **paid** (پولی) از مدیر شبکه برای دریافت اطلاعات مربوط به قیمت محصول و دوره صورتحساب درخواست می‌کند.

### قیمت‌گذاری (Pricing)

بخش قیمت، قیمت پایه محصول و فاصله زمانی صورتحساب را مشخص می‌کند.

![Pricing and save section](/img/config/product-pricing-save.png)

donc misali, wani misali wato farashin $29.99 da siffar ɗaya ko kuma wani tsari na wata kwanaki zai yi kuɗi $29.99 kowace wata kwanaki. Akwai ma, farashi na $89.97 da tsarin na uku zai yi kuɗi wannan jari a kowane kwarta (quarter).

### Billing Cycles

Sashin billing cycles yana nuna yadda ake yin kuɗi don wannan tsari na wata kwanaki, kuma yawanci ana fahimta ne ta hanyar kuɗaɗar ko jadawalin da aka tsara.

![Pricing and save section](/img/config/product-pricing-save.png)

Misali, farashin wani kayi ɗaya na $29.99 da tsari na wata kwanaki da 1 kuma tsarin billing na 12 zai yi kuɗi $29.99 a kowace wata kwanaki ga wannan kayi na tsawon kwana 12. Wannan yana nufin, wannan tsarin zai samar da jadawalin farashi na $29.99 a kowace wata kwanaki na tsawon kwana 12 sannan ya daina kuɗaɗe.

### Trial Period

Ahawo toggle na manhajar trial yana ba masu kula da shaharar (network administrator) damar samar da wani lokaci na gwaji ga kayi ɗin.

![Pricing and save section](/img/config/product-pricing-save.png)

Bayan wannan lokacin gwajin, abokan ciniki suna iya amfani da kayi ɗin ba tare da kuɗaɗe ba har ya wuce lokacin gwaji.

### Setup Fee

Zaka iya saka wani kuɗin shirya (setup fee) ga tsarin ka kuma.

![Pricing and save section](/img/config/product-pricing-save.png)

Wannan yana nufin cewa abokan ciniki za su biya ƙarin jari a farkon kuɗi (na zahiri da wajen farashin tsari) wanda ke da alaƙa da kuɗin shirya da ka bayyana a wannan sashi.

### Active

Ahawo toggle na active yana samar da yadda kayi ɗin zai kasance mai amfani ga abokan ciniki don sabbin shiga.

![Active toggle](/img/config/product-active.png)

Idan akuna abokan cin wannan tsari na shiri: Idan akwai abokan ciniki da suka kasance a wannan tsarin, koyarawa (toggle) idan za a yi shi a yanayin "disabled" (ba samarwa), yana nufin an cire shi daga samun sabbin abokan ciniki. **Abokan ciniki da suka kasance a tsarin zasu ci gaba da a biya su** har sai an canza su zuwa wani tsari na sabo ko an cire su daga tsarin.

### Hoton Wato (Product Image)

Mai sauran hotuna (**Upload Image**) yana ba ma'aikacin yanar gizo (network administrator) damar amfani da bankin hotuna (media library) don zaɓa ko shigar hoton wato.

![Product image section](/img/config/product-image.png)

### Cire (Delete)

Mai cire Wato (**Delete Product**) yana cire wato daga tsarin. Yana bayyana ne lokacin da aka fitar da wato.

![Delete product section](/img/config/product-delete.png)

Babban bambanci shi ne, daban daga cikin cire-cire, wato ba a saka wato a yanayin "trash" (babban wurin shigar abubuwa). Don haka, bayan an cire shi, wannan aiki ba zai iya sake gudanarwa ba.

### Zaɓuwar Wato (Product Options)

Bayan an tsara bayanan asali na wato, zaɓuwar wato suna taimaka wa ma'aikacin yanar gizo don ƙara bayyanar takamaiman abubuwan da ke cikin wato.

#### Gabaɗaya (General)

Tabin **General** yana bayyana muhimman siffofin na wato ba su dace da kowa daga tabin musamman na wato.

![General tab](/img/config/product-general-tab.png)

**Product slug** wanda ya fi sauƙi fahimta yana bayyana slug (wannan lambar ko kalmar da ake amfani da ita a URL-saye da wasu wuraren Ultimate Multisite).

Ultimate Multisite yana samun nau'ikan wato da dama, misali Plan, Package, da Service. Tabin **Product Options** yana canzawa dangane da nau'in wato da aka tsara.

**Customer Role** yana nuna rawar da ake ba shi ga abokin ciniki lokacin da aka ƙirƙira wurin. Yana iya zama Ultimate Multisite default ko Administrator a yawancin lokuta don ma'aikacin yanar gizo, amma Ultimate Multisite default role za a iya sanya shi a **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### ارتقاء و پایین آوردن (Up & Downgrades)

این تب مشخص می‌کند که یک مشتری در سطح خاص خود چه مسیرهای ارتقاء و پایین آوردنی را دارد.

برای درک این مفهوم، مثالی را در نظر بگیرید که یک نصب Ultimate Multisite تخصصی، راهکارهای مدیریت یادگیری به مشتریانش ارائه می‌دهد. برای دستیابی به این سه طرح (Basic، Plus و Premium)، آن‌ها تعریف شده و افزونه‌های خاصی برای هر طرح فعال می‌شوند (برای دستورالعمل‌های فعال کردن افزونه‌ها در ادامه این بخش ببینید).

اگر نصب Ultimate Multisite همچنین وب‌سایت‌های تجاری یا تجارت الکترونیک را پشتیبانی کند، ممکن است این طرح‌ها نیاز به نصب و فعال کردن افزونه‌های متفاوتی داشته باشند.

به همین دلیل، اجازه دادن به مشتریان آموزش آنلاین برای انتقال به طرح‌های تجارت الکترونیک مطلوب و مشکل‌ساز خواهد بود، زیرا قیمت‌گذاری و محدودیت‌های آن‌ها ممکن است مناسب نباشد.

بنابراین برای محدود کردن مسیر مشتری و جلوگیری از بروز مشکلات، مدیر شبکه می‌تواند یک گروه طرح (plan group) تعریف کرده و در داخل آن مشخص کند که مشتری می‌تواند به کدام طرح‌ها منتقل شود.

![Up and Downgrades tab](/img/config/product-upgrades.png)

برای تعریف یک گروه طرح، طرح‌های سازگار را در لیست **group plan** مشخص کنید. **order bump** (افزایش سفارش) همچنین شامل ویژگی‌هایی است که محصولات و خدمات اضافی مناسب می‌توانند به طرح‌ها اضافه شوند. این موارد به عنوان اقلام اضافی به مشتری ارائه می‌شوند که می‌توانند در هنگام پرداخت یا در طول ارتقاء، به طرح‌ها اضافه شوند.

#### تغییرات قیمت (Price Variations)

تغییرات قیمت به مدیر شبکه اجازه می‌دهند که بسته به مدت زمان، سطوح قیمت‌گذاری جایگزین را مشخص کند. این تنظیم امکان ارائه دوره‌های پرداخت ماهانه، فصلی، سالانه یا هر دوره صورتحساب دیگری برای یک محصول واحد را فراهم می‌کند. برای مثال، شما می‌توانید یک محصول را با قیمت ۲۹.۹۹ دلار در ماه تنظیم کنید و یک گزینه سالانه با تخفیف ۲۴۹.۹۹ دلار در سال ارائه دهید.

![تب تغییرات قیمت](/img/config/product-price-variations-tab.png)

برای ایجاد تغییرات قیمت، دکمه **Enable Price Variations** را فعال کرده و روی دکمه **Add new Price Variation** کلیک کنید.

![تغییرات قیمت محصول](/img/config/product-price-variations.png)

برای وارد کردن یک تغییر قیمت، مدت زمان، دوره و قیمت آن را تنظیم کنید. می‌توانید با کلیک مجدد روی دکمه، تغییرات بیشتری اضافه کنید.

به عنوان مثال، اگر قیمت پایه محصول شما ۲۹.۹۹ دلار در ماه باشد، ممکن است موارد زیر را اضافه کنید:

  * **۳ ماه** با ۷۹.۹۹ دلار (تخفیف کمی نسبت به پرداخت ماهانه)
  * **۱ سال** با ۲۴۹.۹۹ دلار (تخفیف قابل توجه برای تعهد سالانه)

:::tip نمایش دکمه دوره صورتحساب در فرانت‌اند

تنها تغییرات قیمت، یک دکمه یا سوئیچ را به صفحه پرداخت (frontend checkout) اضافه نمی‌کند. برای اینکه مشتریان بتوانند بین دوره‌های صورت‌حساب جابه‌جا شوند (مثلاً ماهانه / سالانه)، باید یک فیلد **Period Selection** به فرم پرداخت خود اضافه کنید. برای دستورالعمل‌های گام به گام، به [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) مراجعه کنید.
:::

#### مالیات‌ها

تب **Taxes** با تنظیمات مالیاتی مشخص شده در **Ultimate Multisite > Settings > Taxes** و به طور خاص نرخ‌های مالیاتی تعریف شده همخوانی دارد. برای فعال کردن مالیات‌ها و تعیین نرخ‌های مالیاتی قابل اجرا، لطفاً به مستندات در **Ultimate Multisite: Settings** مراجعه کنید.

![تب مالیات‌ها](/img/config/product-taxes.png)

لە نموونەی پێشتردا، نرخێکی گرتی محلیی ٧.٢٥٪ بۆ کڕیارانی کاڵیفۆنیا (ایالات متحده آمریکا) دیاری کردیم.

کاتێک نرخەکە لە **Ultimate Multisite > Settings > Manage Tax Rates** دا دیاری بکەیت، دەتوانیت لە نێو پلەی بەرهەمەکەدا هەڵبژاردن بکەیت.

![Taxes tab](/img/config/product-taxes.png)

 بۆ ئەوەی نیشان بدەیت کە بەرهەمێک وەرگرتو शकते گرتی، دۆپڵی **Is Taxable** (ئایا وەرگرتو शकते گرتی) چالاک بکە و نرخێکی گرتی گونجاو لە دراپداونی Tax Category دا هەڵبژێرە.

#### Site Templates (نموونەی شوێنەکان)

لە بنەڕەتدا، site templates ئەو وێبسایتانەی WordPress کە تەواو دەبن و لە سەرەتای ئەوەی کڕیارێک ئەندرۆنی اشتراک بکات بۆ شوێنی کڕیاری دەکەن.

![Site Templates tab](/img/config/product-site-templates.png)

بەڕێوەبەری تۆڕ (network administrator) template site وەک وێبسایتی WordPressێکی ئاسایی دروست دەکات و ڕێکدەخات بەو شێوازەی کە قالبەکان، pluginەکان و ناوەڕۆکەکە چالاکن و ڕێکدەخات. template site بە تەواوی بۆ کڕیارەکە Clone دەکرێت.

ئەم تابلۆیە ڕێگە دەدات بە بەڕێوەبەری تۆڕ تا ئەو شێوازەی کە template site هاوڵاتی دەبێت لە کاتی اشتراکی نوێدا دیاری بکات. بۆ ئەوەی لەم پلەدا لەسەر template site بەکار بهێنیت، دۆپڵی **Allow Site Templates** (ڕێگەدان بە template site) چالاک بکە.

کاتێک **Allow Site Templates** نادەستێت، کڕیارانی ئەو پلەیە ناتوانن template هاوڵبژاردن بکەن، تەنانەت ئەگەر فۆرمەکەی دابەزاندنی پارە (checkout form)، لینکەکە کە دەکرێت بەشدار بکرێت یان پارامێترێکی URL هەبوو کە لەوانەیە template هاوڵاتی بکات. Ultimate Multisite ئێستا ئەم سنوورە بە ڕێگەی زنجیرەیەکی پشتیوانییەوە جێبەجێ دەکات لەسەر ئەو شوێنە سەرەکییانەی بەکار دەهێنن: پێشتر تنظیمەکانی پلە، پاشان تنظیمەکانی template formەکە، و دواتر template هاوڵاتی یان پارامێترێکی URL. ئەمە سنوورەکانی پلە بە یەک شێوەی ڕێکدەخات و ڕێگە لەوە دەگرێت کە template بۆ ئەو بەرهەمە نیشان بدات کە پێویستیان نییە.

**site template selection mode** (شێوازی هەڵبژاردنی template site) کردارەکانی template site لە کاتی پڕۆسەی اشتراکدا دیاری دەکات.

Setting **D** **Default** yakan bi matakan da matakan da ke cikin wajen samun bayanan (checkout form). Idan mai sarrafa shaharar (network administrator) ya ƙirƙira matakin zaɓar template a tsarin samun bayanan kuma an ƙirƙirta shi da templates, wannan setting zai bi umarnin da aka koya a cikin matakin checkout.

Idan ka gina **A** **Assign Site Template**, yana tana jaddada za a zaɓi template da aka bayyana. A wannan yanayin, duk matakan zaɓar template a tsarin samun bayanan an cire su.

A ƙarshe, **C** **Choose Available Site Templates** yana mayar da hankali kan templates da aka bayyana a matakin checkout da kuma templates da aka zaɓa a wannan setting ɗin. Za a iya ƙirƙirar template wanda ya dace a nan don taimaka wa abokin ciniki wajen zaɓa.

A ƙarshe, idan mai sarrafa shahar ya so za a yi zaɓar template a matakan checkout, setting na '_default_' zai iya ba shi daidai. A maimakon haka, don cire zaɓar template da kuma samar da zaɓa ga ayyukan tsarin (plan settings), za a iya yin amfani da zaɓuɓɓuka ' _assign new template_ ' ko ' _choose available site templates_ '.

#### Sites

Tabin **Sites** yana cikin ayyukan ƙayyadaddar Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Wannan setting yana nuna yawan mafi girman sites da abokin ciniki zai iya ƙirƙirar a ƙarƙashin shawararsa (membership).

Don samar da wannan ƙayyadaddar, ka sanya toggle na **limit sites** zuwa yanayin aiki kuma ka bayyana yawan mafi girman sites a cikin fildin **site allowance**.

#### Visits

Tabin **Visits** yana wani bangare ne na tsarin ƙayyadaddar Ultimate Multisite. Wannan setting yana ba damar cin siyayya da kuma sauya yawa ga masu zuwa na musamman (unique visitors) a wurin abokin ciniki.

![Visits tab](/img/config/product-visits.png)

از زاویه بازاریابی، مدیران شبکه می‌توانند از این تنظیم به عنوان راهی برای تشویق مشتریان به ارتقاء طرح خود پس از رسیدن به محدودیت‌ها استفاده کنند. این تنظیم همچنین می‌تواند به مدیر شبکه کمک کند تا ترافیک بیش از حد به سایت‌ها را مهار و از آن جلوگیری کند تا منابع سیستم حفظ شوند.

برای استفاده از این قابلیت، دکمه **limit unique visits** (محدود کردن بازدیدهای منحصر به فرد) را روی حالت فعال قرار دهید و حداکثر تعداد بازدیدکنندگان منحصر به فرد در فیلد **unique visits quota** (سهم بازدیدهای منحصر به فرد) را مشخص کنید.

هنگامی که این محدودیت به حد نصاب رسید، Ultimate Multisite به جای نمایش یک پیام مبنی بر تجاوز از محدودیت‌ها، دیگر سایت مشتری را سرو نخواهد کرد.

#### کاربران (Users)

محدودیت‌های 'Users' در Ultimate Multisite به مدیر شبکه اجازه می‌دهد محدودیت‌هایی را بر تعداد کاربرانی که می‌توان ایجاد و به نقش‌ها اختصاص داد اعمال کند.

![Users tab](/img/config/product-users.png)

برای فعال کردن ویژگی محدودیت، دکمه **limit user** (محدود کردن کاربر) را با کشیدن آن به سمت راست روی حالت فعال قرار دهید.

سپس برای هر نقشی که می‌خواهید محدود شود، دکمه کنار آن را روی حالت فعال قرار داده و حداکثر حد بالا را در فیلد مربوطه تعریف کنید.

#### انواع پست (Post Types)

تب **Post Types** (انواع پست) به مدیر شبکه اجازه می‌دهد محدودیت‌های دقیقی بر مجموعه گسترده‌ای از انواع پست‌ها در وردپرس اعمال کند.

![Post Types tab](/img/config/product-post-types.png)

به دلیل ساختار وردپرس، پست‌ها و انواع پست‌ها بخش مهمی از عملکرد اصلی آن هستند، بنابراین سیستم محدودیت Ultimate Multisite برای کمک به مدیر شبکه در ایجاد و حفظ محدودیت‌ها طراحی شده است.

برای فعال کردن این زیرسیستم محدودیت‌ها، دکمه **limit post types** (محدود کردن انواع پست) را با کشیدن آن به سمت راست روی حالت فعال قرار دهید.

بعد ذلك، برای هر نوع پست که می‌خواهید محدود شود، آن را با کشیدن به سمت راست روشن کنید و حداکثر مقدار مجاز در فیلد مربوطه را مشخص نمایید.

#### فضای دیسک (Disk Space)

تب **Disk Space** به مدیران شبکه اجازه می‌دهد فضای مصرفی توسط مشتریان را محدود کنند.

![Disk Space tab](/img/config/product-disk-space.png)

معمولاً در یک وردپرس 멀티سایت، فایل‌های اصلی بین همه سایت‌ها مشترک هستند و دایرکتوری‌های جداگانه برای فایل‌های رسانه‌ای و آپلودها ایجاد می‌شوند که این تنظیمات و محدودیت‌ها روی آن‌ها اعمال می‌شود.

برای فعال کردن محدودیت استفاده از دیسک، کلید **limit disk size per site** را با کشیدن آن به سمت راست در حالت فعال قرار دهید.

سپس، حداکثر حد بالایی را بر حسب مگابایت در فیلد **disk space allowance** مشخص کنید.

#### دامنه سفارشی (Custom Domain)

با روشن کردن این گزینه، می‌توانید دامنه‌های سفارشی را مخصوص این طرح اجازه دهید.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### تم‌ها (Themes)

تب **Themes** در تنظیمات محصول به مدیر شبکه اجازه می‌دهد تم‌ها را برای انتخاب توسط مشتریان در دسترس قرار دهد و به صورت اختیاری وضعیت تم را اجباری کند.

![Themes tab](/img/config/product-themes.png)

_**نکته: برای اینکه تم‌ها در اختیار مشتریان قرار گیرند، باید توسط مدیر شبکه در شبکه فعال (network enabled) شوند.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

گزینه **visibility** مشخص می‌کند که آیا این تم هنگام مشاهده تب **Appearance > Themes** در سایت خود توسط مشتری قابل مشاهده است یا خیر. تنظیم این گزینه روی **Hidden** (مخفی) باعث می‌شود تم از دید پنهان شده و بنابراین امکان انتخاب و فعال کردن آن محدود شود.

![Themes tab](/img/config/product-themes.png)

انتخاب **behavior** به مدیر شبکه اجازه می‌دهد وضعیت تم را هنگام ایجاد سایت مشتری تعریف کند.

لە ئەو شێوەیەی کە بەکار دێت، قالبەکە بۆ کڕیارەکە ئامادە دەکرێت بۆ چالاککردنەوەی خۆی. لە بەرامبەردا، لەو شێوازی **ناتوانرێت**، توانای چالاککردنی قالبەکە لە کڕیارەکەدا دەگرێت. لە کۆتاییدا، هەڵبژاردنی **Force Activate** (چالاککردنەوە بەهۆی فۆرس) هەڵدەستێت و چالاککردنی قالبەکە دەکات، بەمەش لە کاتی دروستکردنی سایتەکەدا وەک سەرەکی دەبن.

#### Plugins (پلانگینەکان)

وەک تابلۆی Themes، Ultimate Multisite ڕێگە بە بەڕێوەبەری تۆڕەکە دەدات کە بینینی پلانگینەکان بۆ کڕیاران دیاری بکات هەروەها لە ماوەی دروستکردنی سایتێکی نوێدا ئەو حالەتانەی کە لەسەر بنچینەی ئەوە دیاریکراون.

![Plugins tab](/img/config/product-plugins.png)

دابردراو (visibility) دەستپێدانی پلانگینەکە ڕێگە بەوە دەدات کە پلانگینەکە یان بینراو یان پاشکەوتوو بێت بۆ کڕیارەکە کاتێک لەسەر سایتەکەی لە ڕێگەی کارامەی منۆی Plugins.

بەکارھێنانی هەڵبژاردنی Behavior (چالاکیی)، بەڕێوەبەری تۆڕ دەتوانرێت زیاتر کاریگەریی پلانگینەکان بگۆڕێت بە بەکارهێنانی ئەو هەڵبژاردانەی لە دابردراو Behaviorدا هەن.

![Plugins tab](/img/config/product-plugins.png)

هەڵبژاردنی Default (سەرەکی) حالەتی پلانگینەکە دیاریکراوی لە شابلۆنی سایتێکدا ڕێگە دەگرێت کە کڕیار هەڵبژرێت. بەمەش، پلانگینەکان کە لەناو شابلۆنەکەدا چالاک بکرێن، کاتێک شابلۆنەکە بۆ سایتێکی کڕیارەکە Clone (دوبارە دروست) دەکرێت، وەک چالاک دەمانن.

Force Activate (چالاککردنەوە بەهۆی فۆرس) پلانگینەکە لە کاتی دروستکردنی سایتەکەدا لە حالەتی چالاک دەکات، و لە بەرامبەردا Force Inactivate (پاشکەوتووکردنەوە بەهۆی فۆرس) پلانگینەکە لە کاتی دروستکردنی سایتەکەدا پاشکەوتووە. لە هەردوو ئەم دۆخەدا، دەتوانرێت حالەتی پلانگینەکە بە شێوەیەکی دەستویی لەلایەن کڕیارەوە بگۆڕدرێت لە ڕێگەی منۆی WordPress Plugins یان.

Setting **Force Activate & Lock** a'a yi yana aiki kamar yadda ake yi amma yana hana abokin ciniki canza yanayin plugin. Don haka, idan ka sanya setting na Force Activate and Lock, zai rage plugin zuwa yanayin aiki kuma ya hana abokin ciniki dawo shi (deactivate). Idan kuma ka sanya setting na **Force Inactivate & Lock**, zai rage plugin zuwa yanayin ba aiki kuma ya hana amfanin canza shi.

Gwamnan shaharar (network administrator) yana iya gaya wa kansa ya yi la'akari da setting na Force Activate & Lock da Force Inactivate & Lock tare da site templates. Plugin da yanayinsa a cikin templates na iya samun tasiri daga waɗannan settings idan aka zaɓa su.

#### Canjin Ilimin (Reset Limitations)

Tabin **Reset Limitations** yana ragara duk iyakokunan da aka tsara ga wani kayi a kan wannan product ɗin. Don rage iyakukunin, danna maɓallin **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Don tabbatar ayyukan, danna toggle na **confirm reset** zuwa yanayin aiki a kan wajen hagu kuma danna maɓallin **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Gyara, Kuno ko Cire Product

Za a iya gyara, kuna shi (duplicate), ko cire product da ya wajare ta hanyar tafiya zuwa **Ultimate Multisite > Products** kuma danna kan sunan product ɗin da ke wajare.

![Product hover actions](/img/config/product-hover-actions.png)
