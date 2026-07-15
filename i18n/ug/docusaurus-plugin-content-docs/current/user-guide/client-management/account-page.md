---
title: مۇشتى ھساب سىچىسى
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# مۆلیکیتِرەکەت بۆ بەکارهێنەرەکان (v2)

_**تێبینی گرنگ: ئەم بابەت Ultimate Multisite 2.x بیری دەدات.**_

کاتێک کڕیارێک لە تۆڕەکەتدا پلانێک دابنێت، دەتوانێت دەستکاری وۆب‌سایتی و داش보اردەکەی بەدەست بهێنێت کە زانیاری گرنگ دەربارەی پارەدان، ئەندازیارییەکان، دوۆمەینەکان، سنوورەکانی پلان و هتد...

لە ئەم ڕێنماییەدا، ئێمە دەبینیت چۆن لەسەر لاپەڕەی بەڕێوەبردنی بەکارهێنەرەکە کار دەکەین و دەبینیت کە کڕیارەکان دەتوانن چی بکەن و ببینن لەو ناوچەیە.

## لاپەڕەی بەڕێوەبردنی بەکارهێنەر (The Account Page) {#the-account-page}

لاپەڕەی بەڕێوەبردنی بەکارهێنەر بە ڕێگەی 클릭کردنەوەی **Account** لەناو داش보اردەکەی کڕیارەکە دەست دێت.

![مێنیو ئەکاونت لە داش보اردەکەی کڕیاردا](/img/account-page/account-menu.png)

لە تۆڕە سوننەرەکان (sovereign tenant networks)، Ultimate Multisite v2.13.0 ئەم جۆرە بەڕێوەبردنی کڕیارە لەسەر وۆب‌سایتی سەرەکی دەداتە ژێر چاودێری سەرەکی. ئەگەر کڕیاری لە یەک تۆڕ سوننەردا کارێک بکات، وەک دابینکردنی پارە (checkout)، بڕینەوەی فاکچۆ (billing)، فاکچۆ (invoice)، بەڕێوەبردنی سایت (site-management)، گۆڕینی قالب (template-switching) یان مۆڵپەندی دوۆمە (domain-mapping)، ئەو کارە دەگەڕێتەوە بۆ پینڵی کڕیارەکانی وۆب‌سایتی سەرەکی، بە شێوەیەک کە تۆمارکردنی پارە و ئەندازیاری تۆڕەکە ڕاست بێت.

کاتێک کڕیار لە یەک تۆڕ سوننەردا دەچێت، پینڵی کڕیارەکانی وۆب‌سایتی سەرەکی دەتوانرێت لینکێکی گەڕانەوە بۆ سایتەکەی ئەو تۆڕ بەکاربهێنێت. ئەم لینکە تەنها کاتێک دەردەکەوێت کە Ultimate Multisite بتوانێت ئامادەکاریی گەڕانەوەکە وەک یەک لە سایتەکانی کڕیارەکە پشکنین بکات، ئەمەش ڕێگە لە ڕێگەی دابگرتنی بە شێوەیەکی نادەروست (arbitrary redirects) دەگرێت و کارکردنێکی تۆڕەکە پارێزراودە.

![بینینی گشتی لاپەڕەی بەڕێوەبردنی کڕیار](/img/account-page/overview.png)

پاش ئەوەی کڕیار لەسەر ئەو لینکە 클릭 بکات، دەتوانێت بینیت بینینی گشتیی ئەندازیاری خۆی، پیتەکانی پارەدان، فاکچۆکان، دوۆمەکان، سنوورەکانی سایت و هەروەها بتوانێت **Site Template** (ئەگەر لە تۆڕەکەت ڕێگەپێدراوە) بگۆڕێت.

دەتوانرێت ئەندازیاری خۆی بگۆڕیت بۆ پلانێکی دیکە یان پڕۆژەیەکی دیکە کە ئێمە پێشکەش دەکەین، یان پڕۆژەیەکی دیکە بخوێننەوە بکەن. بیستنی هەر بەشی بە جۆرێک بەجیا دەبینین.

### Sizin Üyelik Özeti: {#your-membership-overview}

Müşterilerinizin web sitesi adının hemen altındaki ilk blok, mevcut planınızı ve bu planla birlikte satın aldıkları hizmetleri/paketleri gösteren bir genel bakış sunar. Bu blok ayrıca üyelik numarasını, bunun için ödenen başlangıç miktarını, planın ve herhangi bir hizmet/paketin ne kadar tuttuğunu ve bu üyelik için kaç kez fatura kesildiğini de gösterirler. Ayrıca üyeliğin **Aktif** mı, **Süresi Dolmuş** mu yoksa **İptal Edilmiş** mi olduğunu da görebilirler.

![Planı, miktarı ve faturalandırma ayrıntılarını gösteren üyelik özeti](/img/account-page/membership-card.png)

Bu bloğun hemen altında müşterileriniz **Bu Site Hakkında** ve **Site Limitleri** bloklarını görebilirler. Bu bloklar, planlarının getirdiği tüm kısıtlamaları gösterir: disk alanı, gönderiler (posts), sayfalar, ziyaretler vb... Bu limitler **Ultimate Multisite > Products** sayfasındaki her plan sayfasında yapılandırılabilir.

![Plan kısıtlamalarını gösteren Site Hakkında ve Site Limitleri blokları](/img/account-page/site-limits.png)

**Sizin Üyeliğinizin** sağ tarafında müşteriler **Değiştir** seçeneğine tıklayabilirler. Bu, onlara mevcut tüm planları ve paketleri/hizmetleri gösterecektir. Başka bir plan seçerlerse, limitler üyelik için geçerli olan mevcut limitlerin yerine o planın limitleri uygulanacaktır; ister aşağı yükseltme (downgrading) yapsınlar ister yukarı yükseltme (upgrading).

Şimdi, müşterileriniz bu mevcut üyelik için paket veya hizmet satın almak isterlerse - örneğin daha fazla disk alanı veya ziyaret sayısı gibi - mevcut üyelik değişmeyecek, sadece yeni paketler buna eklenecektir.

Lütfen kupon kodlarının bu üyelik değiştirme sayfasına eklenemeyeceğini unutmayın. Müşteri ilk üyelik satın alımında bir kupon kodu kullandıysa, o kod bu yeni üyeliğe de uygulanacaktır.

### Faturalandırma Adresini Güncelleme: {#updating-the-billing-address}

حساب səhifəsində müştərilərin ödəniş ünvanını da yeniləməsinə imkan verilir. Onlar sadəcə _Billing Address_ yanında olan **Update** düyməsinə basmalarını lazımdır.

![Update billing address section with Update button](/img/account-page/billing-address.png)

Müştəri üçün yeni bir pəncərə açılacaq. Onların etməli olduğu yeganə şey, yeni ünvanı doldurmaq və _Save Changes_ düyməsinə basmaqdır.

![Update billing address form](/img/account-page/billing-address-form.png)

### Sayt Şablonunu Dəyişmək: {#changing-the-site-template}

Müştərilərin sayt şablonlarını dəyişməsinə imkan vermək üçün siz **Ultimate Multisite > Settings > Sites** bölməsinə getməli və **Allow Template Switching** seçimi üzərində aktiv etməlisiniz.

Həmçinin, **Ultimate Multisite > Products**-də planlarınızı seçin və **Site Templates** tabına keçin. **Allow Site Templates** seçimi aktiv olduğundan əmin olun və **Site Template Selection Mode** altında **Choose Available Site Templates** seçimi seçilib olmalıdır.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Veb saytınızdakı bütün mövcud sayt şablonlarını görə biləcəksiniz. Hansı şablonları əlçatan etmək istədiyinizi və hansı şablonları bu planla abunə olunan müştərilər üçün əlçatan olmamasını istədiyinizi seçə bilərsiniz. Qeyd edin ki, bu seçim həm ödəniş formunu da təsir edir; buna görə **Not Available** (Əlçatan Deyil) kimi seçilmiş hər hansı bir şablon bu plan üçün qeydiyyat səhifəsində görünməyəcək.

İndi müştərilər hesab səhifələri daxilində **Change Site Template**-ə klikləyə bilərlər.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 yenidən dizayn edilmiş şablon dəyişmə paneli göstərir. Bu panel, müştərilərin əvəz olunanı seçməzdən əvvəl hansı şablonun aktiv olduğunu görməsi üçün **current-template card** ilə başlayır.

مشتەرләр вариантларын карап чыгуы вакытында, коллоу ихтилары бар сайт шаблонларының да үзләренең планнары өчен күрсәтүләмәсе калдырылган. Бу аларны текучий танлыйлардан айнытып үтүсезлексез калдырып, планнары өчен я olunган шаблонларды салыштыруга мөһим тушунчу беренчелләр.

![План өчен бар сайт шаблонлары списы](/img/config/site-templates-list.png)

Сайт шаблонын танлыйлардан соң, алар өзгәртешүне тасдикләүгә килдерә.

![Сайт шаблонын өзгөртү тасдикләү диалогы](/img/account-page/template-switch-confirm.png)

Тасдикләүни ясап, **Process Switch**-кә клик иткәндә, янәш сайт шаблоны аларның миллек сайтында исәпләнә.

Мәсели, алар текучий шаблонга кайтарып җибәрүне кайткында, алар бу панельдан **Reset current template**-не дә ислетә алалар. Другаша шаблон өзгөртүгә килдеге китерүче иде, шаблонны ясау (reset) – булган сайт контентын үзине алмаштырырга мөмкин, демек алар бу ясау әсе өчен түшәрәндә тасдикләүледер.

### Кастом доменнарны Коснуру: {#adding-custom-domains}

Мәсели, алар планнары өчен кастом доменнарны да үзләренең хатталарында коснурга мөмкин. Аларның кастом доменнарны исәпләп ислетүе өчен **Ultimate Multisite > Settings >** **Domain Mapping**-гә китерегез.

**Enable Domain Mapping** опциясен ясагыз. Бу аларның сетьле деңгезедә кастом доменнарны исәпләп ислетүргә мөмкин булган.

Доменнарны продукт базасында да ясаулы булып чаккандыгын текшерергә китермесез – чөнки сиз аларның кастом доменнарны исәпләп ислетүене чеберлелек белән сыйнып күрә аласыз.

**Ultimate Multisite > Products**-кә китерегез. Сезнең танлый планны seçәгез һәм **Custom Domains** табына китерегез. **Allow Custom Domains** опциясен ясагыз.

![Allow Custom Domains тулысы бар кастом доменнар табы](/img/config/product-custom-domains.png)

این قابلیت به همه مشتریانی که مشترک در این طرح خاص هستند اجازه می‌دهد از دامنه‌های سفارشی استفاده کنند. حالا، در صفحه حساب کاربری، مشتریان شما می‌توانند با کلیک بر روی **Add Domain** (افزودن دامنه)، یک دامنه سفارشی اضافه کنند.

![دکمه افزودن دامنه در صفحه حساب کاربری](/img/account-page/add-domain-button.png)

اولین پنجره‌ای که باز می‌شود، یک پیام به مشتریان شما نشان می‌دهد که چگونه باید رکورد‌های DNS خود را به‌روزرسانی کنند تا این دامنه سفارشی روی شبکه شما کار کند.

![دستورات DNS هنگام افزودن یک دامنه سفارشی](/img/account-page/add-domain-dns.png)

این پیام را می‌توانید (شما به عنوان مدیر) در **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** ویرایش کنید.

![تنظیم دستور افزودن دامنه جدید در نگاشت دامنه](/img/config/settings-domain-mapping.png)

در اینجا نمای کاملی از صفحه تنظیمات نگاشت دامنه آمده است:

![نمای کامل تنظیمات نگاشت دامنه](/img/config/settings-domain-mapping-full.png)

بعد از کلیک بر روی **Next Step** (گام بعدی)، مشتریان شما می‌توانند نام دامنه سفارشی خود را اضافه کنند و انتخاب کنند که آیا این دامنه سفارشی باید دامنه اصلی باشد یا نه. توجه داشته باشید که مشتریان شما می‌توانند برای وب‌سایت‌هایشان از بیش از یک دامنه سفارشی استفاده کنند، بنابراین می‌توانند انتخاب کنند کدام یک به عنوان دامنه اصلی باشد.

![وارد کردن نام دامنه سفارشی با گزینه دامنه اصلی](/img/account-page/add-domain-primary.png)

بعد از کلیک بر روی **Add Domain** (افزودن دامنه)، دامنه به حساب مشتری شما اضافه می‌شود. تمام کاری که اکنون باید انجام دهند این است که رکورد‌های DNS این دامنه سفارشی را در رجیستر دامنه خود تغییر دهند.

### تغییر رمز عبور: {#changing-password}

در داشبورد حساب کاربری، مشتریان شما همچنین می‌توانند با کلیک بر روی **Change Password** (تغییر رمز عبور)، رمز عبور خود را تغییر دهند.

![دکمه تغییر رمز عبور در صفحه حساب کاربری](/img/account-page/change-password-button.png)

هذا يکنی یک پنجره جدید که در آن مشتریان باید رمز عبور فعلی خود را وارد کرده و سپس رمز عبوری که می‌خواهند استفاده کنند را وارد نمایند.

![فرم تغییر رمز عبور با فیلدهای رمز عبور فعلی و جدید](/img/account-page/change-password-form.png)

### منطقه خطر: {#danger-zone}

ما دو گزینه هم داریم که در قسمت **منطقه خطر (Danger Zone)** نشان داده شده‌اند: **حذف سایت (Delete Site)** و **حذف حساب کاربری (Delete Account)**. این دو هم در منطقه خطر قرار دارند چون این دو عمل غیرقابل بازگشت هستند. اگر مشتریان وب‌سایت یا حساب خود را حذف کنند، نمی‌توانند آن‌ها را پس بگیرند.

![منطقه خطر با گزینه‌های حذف سایت و حذف حساب کاربری](/img/account-page/danger-zone.png)

اگر مشتریان روی هر یک از این دو گزینه کلیک کنند، پنجره‌ای به آن‌ها نشان داده می‌شود که در آن باید گزینه حذف وب‌سایت یا حساب را فعال کنند و به آن‌ها هشدار داده می‌شود که این عمل قابل بازگشت نیست.

![گفت‌وگو تأیید حذف سایت](/img/account-page/delete-site-confirm.png)

![گفت‌وگو تأیید حذف حساب کاربری](/img/account-page/delete-account-confirm.png)

اگر آن‌ها وب‌سایت خود را حذف کنند، حساب و عضویتشان همچنان دست‌نخورده باقی می‌ماند. فقط تمام محتوای وب‌سایتشان از بین خواهد رفت. اگر حساب خود را حذف کنند، تمام وب‌سایت‌ها، عضویت‌ها و اطلاعات مربوط به این حساب از دست خواهد رفت.
