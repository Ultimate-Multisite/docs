---
title: WordPress Multisite nima?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite چیست؟

وردپرس خودش یک قابلیت به نام «Multisite» (چند سایت) دارد که ریشه آن به سال ۲۰۱۰ و راه‌اندازی وردپرس ۳.۰ برمی‌گردد. از آن زمان، این قابلیت چندین بار اصلاح شده تا ویژگی‌های جدیدی اضافه شود و امنیت آن تقویت گردد.

به طور خلاصه، یک وردپرس چندسایتی را می‌توان اینطور تصور کرد: یک دانشگاه یک نصب واحد از وردپرس دارد اما هر دانشکده خودش سایت وردپرسی مخصوص به خود را مدیریت می‌کند.

##

## دقیقاً وردپرس چندسایت چیست؟

Multisite یک قابلیت در وردپرس است که اجازه می‌دهد چندین سایت، از یک نصب وردپرس مشترک استفاده کنند. وقتی Multisite فعال می‌شود، سایت اصلی وردپرس تبدیل به چیزی می‌شود که معمولاً **شبکه سایت‌ها** نامیده می‌شود.

این شبکه سیستم فایل (یعنی **پلاگین‌ها و تم‌ها هم مشترک هستند**)، پایگاه داده، فایل‌های اصلی وردپرس، wp-config.php و غیره را به اشتراک می‌گذارد.

این بدان معناست که به‌روزرسانی وردپرس، تم و پلاگین‌ها فقط یک بار برای تمام سایت‌های شبکه شما انجام می‌شود، زیرا آن‌ها روی سیستم فایل فایل‌های یکسانی دارند.

این واقعیت یکی از مزایای اصلی Multisite است، زیرا به شما اجازه می‌دهد تعداد سایت‌هایی را که مدیریت می‌کنید افزایش دهید در حالی که تعداد کارهایی که باید برای نگهداری سایت‌های مشتریان خود انجام دهید ثابت بماند.

##

## زیردامنه یا زیردایرکتوری؟

دو حالت برای اجرای وردپرس چندسایتی وجود دارد – و شما هنگام تبدیل نصب معمولی وردپرس به یک نصب چندسایتی باید یکی از آن‌ها را انتخاب کنید:

**زیردامنه (Subdomain):** مثلاً: [site.domain.com](http://site.domain.com)

...یا

**زیردایرکتوری (Subdirectory):** مثلاً: [yourdomain.com/site](http://yourdomain.com/site)

هر حالت مزایا و معایبی دارد که باید هنگام تصمیم‌گیری برای این کار در نظر بگیرید.

bir önemli şeyi not etmek gerekir: bir karar verdikten sonra ağınızı alt dizinden (subdirectory) alt alan adına (subdomain) veya tam tersine değiştirmek gerçekten zor olur – özellikle de zaten birkaç site oluşturmuşsanız.

Bu kararı vermeden önce göz önünde bulundurmanız gereken birkaç nokta var:

**Alt Dizin Modu (Subdirectory Mode)** kurulum ve bakım açısından en kolay moddur. Bunun nedeni, tüm sitelerin sadece ana alan adına bağlı yollar olmasıdır (örneğin [yourdomain.com/subsite](http://yourdomain.com/subsite)). Sonuç olarak, ana alan adı için yalnızca **bir SSL sertifikasına** ihtiyacınız olur ve bu tüm ağı kapsar.

Aynı zamanda, URL yapısı nedeniyle Google ve çoğu diğer arama motoru alt dizin tabanlı ağınızdaki tüm alt siteleri tek devasa site olarak görecektir. Sonuç olarak, son kullanıcılarınız tarafından alt sitelere eklenen içerik, örneğin açılış sayfanızın SEO performansını etkileyebilir. Etki seviyesi tartışmalıdır ve böyle bir düzenlemenin SEO performansı için faydalı olabileceği argümanları da bulunmaktadır.

**Alt Alan Adı Modu (Subdomain Mode)** kurulumu biraz daha karmaşıktır, ancak URL yapısı (örneğin [subsite.yournetwork.com](http://subsite.yournetwork.com)) genellikle "daha profesyonel" görünür.

ساینس مود (subdomain mode) رو تنظیم کردن در یک چالش اصلی، پوشش SSL (HTTPS) برای کل شبکه است. این به این دلیل است که مرورگرها زیردامنه‌ها را موجودیت‌های جداگانه در نظر می‌گیرند. در نتیجه، شما باید برای هر زیردامنه در شبکه خود یک گواهی SSL متفاوت داشته باشید، یا از نوع خاصی از گواهی به نام **Wildcard SSL certificate** استفاده کنید. در سال‌های اخیر، ارائه‌دهندگان هاست و پنل‌ها در زمینه فراهم کردن SSL پیشرفت کرده‌اند و برخی از آن‌ها با یک کلیک دکمه، گواهی‌های Wildcard را ارائه می‌دهند که این کار پیچیدگی تنظیم هر دو حالت رو نسبت به هم کم کرده است.

در مقایسه با مود زیردایرکتوری (subdirectory mode)، سایت‌های فرعی در یک شبکه مبتنی بر زیردامنه توسط موتورهای جستجو به عنوان وب‌سایت‌های جداگانه در نظر گرفته می‌شوند، به این معنی که محتوایی که روی یک سایت فرعی وجود دارد، اصلاً بر عملکرد سئو (SEO performance) سایر سایت‌های فرعی تأثیری ندارد.

## سوپر ادمین (The Super Admin)

نصب‌های وردپرس تک‌سایتی به شما اجازه می‌ده که تعداد نامحدودی کاربر اضافه کنید و به آن کاربران نقش‌ها و مجوزهای مختلف بدهید.

در وردپرس 멀티سایت (Multisite)، نوع جدیدی از کاربر باز می‌شود: **سوپر ادمین** – و یک پنل مدیریت جدید باز می‌شود: **پنل مدیریت شبکه**.

همانطور که از اسمش پیداست، سوپر ادمین قدرت‌های فوق‌العاده‌ای بر روی شبکه دارد و می‌تواند همه زیرسایت‌ها، پلاگین‌ها، تم‌ها و همه چیز را مدیریت کند!

وقتی نصب وردپرس تک‌سایتی خود را به 멀티سایت تبدیل می‌کنید، مدیر اصلی سایت تک‌سایتی به طور خودکار به سوپر ادمین ارتقا داده می‌شود.

پلاگین‌ها و تم‌ها فقط توسط سوپر ادمین از پنل مدیریت شبکه قابل نصب یا حذف هستند. سپس مدیران زیرسایت می‌توانند تصمیم بگیرند که آن پلاگین‌ها یا تم‌ها را فعال کنند یا غیرفعال، مگر اینکه سوپر ادمین شبکه یک پلاگین را فعال کند که این کار باعث می‌شود آن برای همه زیرسایت‌ها همیشه فعال باشد.

_Note: گەردوندا دەبینیت، بەدوای کە داواکردنی کەسێک بۆ تۆڕەکەت و دانانی ئەو زۆری ئیدارەی (super admin status) ی پێدەدات، ئەم کارە بەکارهێنەرەکە کۆنترۆڵی تەواوی تۆڕەکەت دەدات. وەک نموونە، ئەوانەیە سۆپر ئادمینەکانی دیکەش بتوانن زۆری ئیدارەیی تۆ لەناو ببەنەوە، کە بە شێوەیەکی کاریگەر دەتوانیت لە پۆینتی ئیدارەیی ناو تۆڕەکەت دابەزێنیت. بۆ ئەوەی کڕیارانی Ultimate Multisite بتوانن کۆنترۆڵی وردیان لەسەر ئەوەی سۆپر ئادمینەکانی دیکە چۆن کار بکەن هەبێت، ئێمە ایکشنێکی ناوی Support Agents بەردەست کردووم. ئەم add-on یەک دەتوانێت جۆرێکی تر لە بەکارهێنەر دروست بکات – کەسێک بە ناوی agent (ئاجنت) – و تەنها ئەو ڕێگەکان بدات کە پێویستیان بۆ ئەنجامدانی ئەرکەکانیان لەسەر تۆڕەکە هەیە._

## چی لە نێوان سایتە بچووکەکان هاوبەش دەبن و چی نییە

وەک پێشتر داوات کرد، یەکێک لە گرنگترین لایەنەکان لە WordPress multisite ئەوەیە کە هەموو سایتە بچووکەکان کۆنفیگراسیۆنە هاوشێنان، فایلە سەرەکییەکان، Theme هاوبەشەکان، Plugin هاوبەشەکان، و فایلەکانی core ی WordPress هاوبەش دەکەن.

بەڵام، ئەو شتومان هەن کە بە شێوەیەکی باش لەسەر بنەمای هەر سایت بچووکێک دیار دەکرێن.

- بۆ نموونە، هەر سایت بچووکێک فۆل得ی (uploads folder) تایبەتی خۆی دەبێت. بەهۆی ئەوە، فایلەکانی هەڵگرتراو کەسی یەک لە سایتێکی بچووکدا دەکات، ناهێتە دەست پێکردنی سایتێکی بچووک دیکە.

- هەر سایت بچووکێک پۆینتی ئیدارەیی تایبەتی خۆی هەیە و دەتوانێت Plugin یان Theme هاوبەشەکان چالاک بکات یان بگرێتەوە، لە کاتی ئەوەی سۆپر ئادمینەکە بە تۆڕەکە چالاک نەبوو.

- زۆربەی خشتەکانی داتابیس بۆ هەر سایت بچووکێک دروست دەبن، واتە پۆستەکان، کامنتەکان، پەڕەکان (pages)، تنظیمەکان و زیاتر لەوە هاوشێنان بە هەر سایت بچووکێک دیار دەکرێن.

## بەڕێوەبردنی بەکارهێنەران لە WordPress Multisite

یەکێک لە بابەتە هەستیارەکانی WordPress multisite بەڕێوەبردنی بەکارهێنەرانە. خشتەی بەکارهێنەرەکانی WordPress یەکێکە لەو Few (کەم) خشتان کە لە نێوان هەموو سایتە بچووکەکان هاوشێنان دەبن.

ئەم ڕێکخستنە دەتوانێت کێشەیەک دروست بکات بەپێی ئەوەی دەتەوێت چی لەگەڵ تۆڕەکەت دروست بکەیت. نموونەی خوارەوە یارمەتیت دەدات بۆ دیاریکردنی گرنگترین ones (ئەوانە).

هیوایە ئەم سێنارییە ببینید:

Ultimate Multisite-da bir WordPress multisite ağı quraştırarsan we bu ağ üzərində aylıq haq ödəyənlərə e-ticaret mağazası açmaq üçün subsaytlar təklif etməyə başlarsan.

İlk ödəniş edən müştərin – John – gəlir. Onun adı üçün şəbəkəndə bir sayt yaradarsan, bütün lazım olan pluginləri quraşdırırsan, sonra onun mağazasını idarə etməsi üçün John üçün istifadəçi yaradırsan.

Sonra ikinci müştəri – Alice – gəlir. Onun üçün də eyni işləri edirsən və indi o da şəbəkəndə bir mağazaya sahibdir.

John və Alice hər ikiniz sizin müştərinizsiniz, amma bir-birinizi tanımırsınız. Daha əhəmiyyəti budur ki, əgər onlardan biri digərinin mağaza saytına daxil olarsa, bu mağazanın eyni şəbəkədə host olunduğunu bilmək mümkün deyil.

Bir gün John yeni bir ayaqqabı almaq istəyir və mükəmməl olanları Alice-in mağazasında tapır. O alış-verişi bitirməyə çalışanda, "email artıq istifadə olunur" (email already in use) xətası alır, bu da qəribədir çünki John Alice-in saytına ilk dəfə daxil olduğunu 100% əmin olur.

Burada başvuran şey budur ki, Johnun istifadəçisi bütün şəbəkədə paylaşılır və o Alice-in saytında ödəniş etmək üçün hesab yaratmağa çalışanda, WordPress eyni email ünvanına sahib bir istifadəçi artıq olduğunu aşkarlayır və xəta verir.

_Qeyd: Bu sizin istifadə sahənizə görə nə qədər pis ola biləcəyini başa düşürük, buna görə Ultimate Multisite-da müştəri olunan hesablardan keçməyə imkan verən bir seçim var ki, bu da eyni email ünvanı ilə bir neçə hesab yaradılmasına icazə verir. Hər hesab bir subsaytla bağlı olduğu üçün toqquşma riski minimuma endirilmiş olur. Yuxarıdakı nümunədə John xəta mesajı almayacaq və o ayaqqabıları heç bir problem olmadan almağa qadir olacaq. Bu seçimin adı "Enable Multiple Accounts" (Çoxlu Hesablara İcazə Ver)dir və Ultimate Multisite → Settings → Login & Registration-da aktivləşdirilə bilər._

حتی اگر کاربر جدول مشترک باشد، زیرساht administratorlar veya süper adminler tarafından alt sitelere kullanıcı eklenebilir ve kaldırılabilir; hatta farklı alt sitelerde farklı kullanıcı rolleri de olabilir.

## Performans değerlendirmeleri

WordPress multisite, destekleyebileceği site sayısı açısından gerçekten çok güçlüdür. Bunu [WordPress.com](https://WordPress.com), Edublogs ve Campuspress gibi hizmetlerin hepsinin multisite tabanlı olması ve her birinin binlerce site barındırmasıyla test edebilirsiniz.

Teoride tek bir WordPress multisite kurulumunda barındırabileceğiniz sitelerin üst sınırı yoktur, ancak pratikte sorunsuz çalıştırabileceğiniz site sayısı; sitelerin ne kadar dinamik olduğu, alt siteler için hangi eklentilerin mevcut olduğu gibi birçok farklı faktöre bağlı olarak büyük ölçüde değişebilir.

Kural olarak, ağınız ne kadar basit olursa o kadar iyidir. İçeriğin gerçekten dinamik olmadığı (bu onları agresif önbellekleme stratejileri için harika aday yapar) ve eklenti yığınını mümkün olduğunca hafif tutmanın (aktif eklenti sayısı ne kadar azsa o kadar iyi olur) alt siteleri barındırabileceğiniz site sayısını önemli ölçüde artırabileceğini unutmayın.

En güzel yanı, hepsi WordPress olduğu için, performans iyileştirmeleri için zaten bildiğiniz ve sevdiğiniz aynı araçlar multisite ağınız için de işe yarayacaktır.

Multisitenin ana darboğazı veritabanıdır ancak diğer her şey doğru ayarlanmışsa, bundan endişelenmeniz gerekmeyecek kadar binlerce siteye kadar sürebilir. Hatta o noktada (örneğin veritabanı bölme çözümleri gibi) kademeli olarak eklenebilecek çözümler de vardır.
