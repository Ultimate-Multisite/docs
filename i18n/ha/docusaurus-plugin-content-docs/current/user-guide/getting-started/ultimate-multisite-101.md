---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite wani plugin ne WordPress wanda ke ba ka damar don ba ka ba da WaaS ko Websites as a Service ga abokan hulɗa. Lokacin da muke shiga kuma mu koyi yadda Ultimate Multisite zai taimaka wa kasuwancin ku da abokan hulɗa, akwai wani ilimi na farko da muke buƙatar samunsa.

## WordPress Multisite {#the-wordpress-multisite}

Yawancin mu muna fahimtar hanyar da ake so a install WordPress ba tare da wani abu ba. Ko ka yi shi ta hanyar control panel ɗin gudanar da sabon wayar ku, ko don waɗanda suka shiga cikin ƙoƙari, ka shirya sabon web server da database, ka saukar fayilolin asali kuma ka fara tsarin install.

Wannan yana aiki ga miliyoyin wuraren WordPress a duk duniya amma daga bangaren wata makampaji ko wani gudanar da waya, bari mu tattauna yawan abubuwa na wani lokaci.

Duk da yake yana sauƙi don ƙirƙirar wani WordPress site ko kuma wancin wata wuta ta hanyar control panel mai samar da ayyuka (automated), matsaloli suka fara bayyana nan da nan idan ya zama a hannun sarrafa waɗannan wuraren. Idan ba a sarrafa su, za ka zama wani babban abin da malware ke neman shi. Sarrafa ma yana buƙatar ƙoƙari da kayayyaki kuma ko da akwai kayan aiki da plugins masu taimakawa don sauƙaƙe sarrafa da gudanar da WordPress sites, gaskiya cewa abokan hulɗa suna samun damar sarrafa su, wanda hakan zai iya rage wannan ƙoƙarin.

A cikin asalin sa, WordPress yana ba ka wani ƙwarewa wanda ake kira ‘Multisite’ wanda ya fara da 2010 a lokacin shiga WordPress 3.0. Tun daga nan ya samu wasu gyare-gyare don shigar sabbin ƙwarewa da kuma ƙarfafa tsaro.

A gaba, za ka iya tunanin WordPress multisite kamar haka: Wata Makarantar ta riƙe wani install na WordPress amma kowane fafiya tana riƙe wani WordPress site ñafe.

برای اینکه این جمله را تجزیه و تحلیل کنیم، بیایید نگاهی به برخی از اصطلاحات اساسی داشته باشیم که نه فقط در مستندات Ultimate Multisite بلکه در کل جامعه وردپرس وجود دارند.

### شبکه (The Network) {#the-network}

از نظر وردپرس، یک شبکه چند سایت (multisite network) جایی است که می‌توانید چندین زیرسایت را از یک داشبورد واحد مدیریت کنید. اگرچه ایجاد یک شبکه چند سایت بین ارائه‌دهندگان هاست متفاوت است، اما نتیجه نهایی معمولاً چند دستورالعمل اضافی در فایل wp-config.php برای اینکه به وردپرس بگوییم در این حالت خاص کار می‌کند وجود دارد.

تفاوت‌های متمایزی زیادی بین یک شبکه چند سایت و یک نصب مستقل وردپرس وجود دارد که ما به طور خلاصه در مورد آن صحبت خواهیم کرد.

#### زیردامنه در مقابل زیردایرکتوری (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

یکی از مهم‌ترین تصمیماتی که باید بگیرید این است که آیا نصب چند سایت با _زیردایرکتوری‌ها_ یا _زیرنامه‌ها (subdomains)_ کار خواهد کرد. Ultimate Multisite با هر دو گزینه به یک اندازه خوب کار می‌کند، اما بین این دو پیکربندی تفاوت‌های معماری وجود دارد.

در پیکربندی _زیردایرکتوری_، سایت‌های شبکه مسیری را بر اساس نام دامنه اصلی به ارث می‌برند. برای مثال، یک سایت شبکه با نام 'site1' آدرس کامل خود را https://domain.com/site1 خواهد داشت. در پیکربندی _زیرنامه‌ها (subdomain)_، سایت شبکه خودش یک _زیردامنه_ منحصر به فرد از نام دامنه اصلی دریافت می‌کند. بنابراین، سایتی که با نام 'site1' مشخص شده است، آدرس کامل خود را https://site1.domain.com/ خواهد داشت.

اگرچه هر دو گزینه انتخاب‌های کاملاً معتبر هستند، اما استفاده از _زیرنامه‌ها (subdomains)_ مزایای متعددی دارد، اما همچنین نیاز به فکر و برنامه‌ریزی بیشتری در معماری آن دارد.

د رابط DNS په اړه، کارولرۍ (subdirectories) استفاده کول نسبتاً ساده چالش دی. چون سایت‌های شبکه صرفاً فرزند مسیر اصلی هستند، برای نام دامنه اصلی فقط یک ورودی نام دامنه لازم است. اما برای زیرنامه‌ها (subdomains)، چالش کمی پیچیده‌تر است و یا باید برای هر سایت شبکه یک ورودی CNAME جداگانه داشته باشید یا در رکورد‌های DNS از یک کاراکتر wildcard (\*) استفاده کنید.

یک حوزه دیگر که باید به آن توجه کرد، SSL و صدور و استفاده از گواهی‌های SSL است. در تنظیمات subdirectory، می‌توان از یک گواهی دامنه واحد استفاده کرد زیرا سایت‌های شبکه صرفاً مسیرهای نام دامنه اصلی هستند. بنابراین، یک گواهی برای domain.com به طور کافی برای https://domain.com/site1، https://domain.com/site2 و غیره SSL را فراهم می‌کند.

در تنظیمات subdomain، استفاده از گواهی SSL wildcard یکی از رایج‌ترین گزینه‌ها است. این نوع گواهی SSL برای یک دامنه و زیرنامه‌های آن رمزگذاری (encryption) فراهم می‌کند. بنابراین، یک گواهی SSL wildcard برای https://site1.domain.com، https://site2.domain.com و خود https://domain.com نیز رمزگذاری را فراهم خواهد کرد.

اگرچه گزینه‌های دیگری هم وجود دارند، اما این‌ها اغلب در دامنه و کاربرد محدود هستند و نیاز به تنظیمات و ملاحظات اضافی در مورد مناسب بودن دارند.

#### افزونه‌ها و قالب‌ها (Plugins and Themes) {#plugins-and-themes}

همانطور که وردپرس از طرف مشتری می‌گیرد، از نظر خود آن را از دست می‌دهد. اگر مدیر سایت یک افزونه بد نصب کند یا به‌روزرسانی‌هایش را انجام ندهد، تنها قربانی و آسیب‌دیده این عمل خودش است. با این حال، اگر یک مدیر سایت یک افزونه بد را در یک نصب 멀تی‌سایت (multisite) نصب کند، قربانی هر سایتی که در شبکه نصب شده است می‌شود.

Don haka don wannan dalili ne: idan aka tsara a matsayin WordPress multisite, WordPress yana ɗaukar ikon shigar plugin da themes daga site administrators ba suke da shi ba, kuma yana kan gwi wannan ikon ga wani sabon network administrator ko 'super admin' role. Wannan role mai daraja zai iya yanke shawarar ko ya bar masu administrator na sites na network su gani ko samun menu na plugins a dashboard ɗinsu, kuma idan haka, ko waɗannan iyakoki suna ƙara ko rage plugin-plugin.

A wannan yanayin, network administrator yana da alhakin shigar plugin da themes zuwa network kuma yana bayar da iyakoki don amfani da waɗannan plugins da themes a sites na network. Site administrators ba za su iya shigar plugin da themes ko samun su ba da aka ba su site.

#### Masu Amfani da Administrators {#users-and-administrators}

A WordPress Multisite, duk sites na network suna raba idanar database ɗaya kuma saboda haka suna raba masu amfani, roles, da capabilities guda sama. Yadda mafi dacewa zaka iya tunawa shi ne cewa duk masu amfani sun kasance membri na network ba wani site na musamman ba.

Bada wannan fahimtar, yana iya zama rashin kyau a ba wa masu amfani damar ƙirƙira su kuma saboda haka WordPress Multisite ya ɗauka wannan ikon daga site administrators kuma ya kan shi ga wancin network administrator. A lokacin da hakan ya faru, network administrator zai iya bayar da iyakoki na gaba don ba wa site administrator damar ƙirƙirar asusun masu amfani don site ɗinsu.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Don sake maimaitawa wannan bayanin, ko da asusun masu amfani suna nuna dangantaka da site ɗinsu, a zahiri an ba su ga network kuma saboda haka dole ne su zama na musamman a duk network. Akwai wasu lokuta inda ake rashin iya rubuta sunan nazeri (usernames) saboda wannan dalili.

اگرچه این مفهوم در سیستم‌های سازمانی غریبه نیست، اما این منبع واحد برای ثبت کاربران و احراز هویت اغلب برای کسانی که با نصب‌های مستقل وردپرس آشنا هستند و مدیریت کاربر در آن کمی آسان‌تر است، مفهومی دشوار برای درک است.

#### رسانه‌ها (Media) {#media}

در سایت‌های شبکه‌ای که یک پایگاه داده مشترک را در وردپرس دارند، آن‌ها مسیرهای جداگانه‌ای روی سیستم فایل برای فایل‌های رسانه‌ای حفظ می‌کنند.

مکان استاندارد وردپرس (wp-content/uploads) باقی می‌ماند؛ با این حال، مسیر آن تغییر می‌کند تا شناسه منحصر به فرد سایت شبکه را منعکس کند. در نتیجه، فایل‌های رسانه‌ای یک سایت شبکه به صورت wp-contents/uploads/site/[id] ظاهر می‌شوند.

#### لینک‌های دائمی (Permalinks) {#permalinks}

پیش از این اشاره کردیم که پیکربندی _زیردامنه_ نسبت به _زیردایرکتوری_ مزایای متمایزی دارد و در اینجا آن را می‌بینیم: مسیرها.

در پیکربندی _زیردایرکتوری_، سایت اصلی (اولین سایتی که هنگام ایجاد شبکه ساخته می‌شود) و زیرسایت‌های شبکه باید از یک مسیر واحد که از نام دامنه به آن منتهی می‌شود، استفاده کنند. این امر پتانسیل ایجاد تعداد زیادی تداخل را دارد.

برای پست‌ها، یک مسیر اجباری /blog/ به سایت اصلی اضافه می‌شود تا با سایت‌های شبکه تداخل ایجاد نشود. این بدان معناست که لینک‌های دائمی زیبا مانند ‘نام پست’ به صورت domain.name/blog/post-name/ نمایش داده خواهند شد.

<!-- اسکرین‌شات در دسترس نیست: تنظیمات لینک‌های دائمی وردپرس که مسیر /blog/ را در پیکربندی زیردایرکتوری نشان می‌دهد -->

در پیکربندی _زیردامنه_ نیازی به این کار نیست زیرا هر سایت شبکه از جداسازی کامل دامنه بهره می‌برد و بنابراین به یک مسیر واحد وابسته نیست. آن‌ها در عوض، مسیرهای متمایز خود را بر اساس _زیردامنه_ خود حفظ می‌کنند.

<!-- اسکرین‌شات در دسترس نیست: تنظیمات لینک‌های دائمی وردپرس برای پیکربندی زیردامنه -->

#### صفحات استاتیک (Static Pages) {#static-pages}

لە ڕێکخستنی _subdirectory_دا، ئەگەریی زانیارییەکان لەسەر ناونیشانەکان بۆ لاپەڕەکانی ستاتیك وەک سایت سەرەکی و سایتە تۆڕییەکان یەک پۆل (path) بەشایەنان هەیە.

بۆ ڕێگرتن لەم مەترسییە، WordPress ڕێکاری پێشکەش دەکات کە دەتوانیت ناوی چەندین سایتێک بە بلاک لیست بکەیت بۆ ئەوەی لەگەڵ ناوی یەکەم سایتدا تێکچێت. بە شێوەیەکی ئاسایی، بەڕێوەبەری تۆڕەکە ڕێگاکانی سەرەوە (root paths) بۆ لاپەڕەکانی سایت سەرەکی دەنووسێت.

<!-- وێنەیەکی دروست نییە: ڕێکخستنی تۆڕی WordPress نیشاندای ناوی سایتەکان کە بلاک کراوە بۆ ڕێگرتن لە تێکچوون -->

لە ڕێکخستنی _subdomain_دا، ئەگەری تێکچوونی ناونیشانەکان بەهۆی _subdomain_ەوە کەم دەبێتەوە چونکە ئەو subdomainە تایبەتە بە سایتە تۆڕییەکە و پەیوەندییەک بە سایت سەرەکی نییە.

### تۆمارکردن (Registration) {#registration}

لە ناو ڕێکخستنی تۆڕی WordPress Multisite، چەندین هەڵبژاردەی نوێ بۆ تۆمارکردنی بەکارهێنەران هەیە کە دەدات بە بەکارهێنەرانی نوێ و ئێستا بوو بتوانن سایت دروست بکەن.

<!-- وێنەیەکی دروست نییە: ڕێکخستنی تۆڕی WordPress Multisite نیشاندای هەڵبژاردەکانی تۆمارکردن -->

وەک جۆرە دامەزراندنی WordPress کە بە تەنها کار دەکات، سایتە تۆڕییەکان ئەو هەڵبژاردنە باوە لەبەردەم تۆمارکردنی بەکارهێنەران یان داواکارییەکانی تۆمارکردن بۆ ڕۆڵەکان دەپارێزن.

<!-- وێنەیەکی دروست نییە: ڕێکخستنی تۆمارکردنی بەکارهێنەرانی سایتێکی WordPress کە بە تەنها کار دەکات نیشاندای هەڵبژاردە سنووردارەکان -->

کاتێک ئەو شومەرییەکانی بەکارهێنەران دروست دەکرێن، ئەو شومەرییە لە ئاستی تۆڕەکەدا دروست دەبن. بۆیە لەبری ئەوەی تایبەتمەند بێت بە یەک سایت، لەبەر تۆڕەکە دەبێت. ئەمەش چەندین لایەن و زیانێکی تایبەتی هەیە.

مثال کے طور پر، فرض کریں کہ آپ کی ورڈپریس ملٹی سائٹ خبروں اور معلومات کے کاروبار میں تھی۔ آپ اس ملٹی سائٹ کو قائم کریں گے اور پھر مالیات، ٹیکنالوجی، تفریح اور دیگر دلچسپی کے شعبوں کے لیے نیٹ ورک سائٹس بنائیں گے جبکہ پلگ انز اور تھیمز پر مجموعی کنٹرول برقرار رکھیں گے۔ ہر نیٹ ورک سائٹ کا اپنے نیٹ ورک سائٹ کی شکل و صورت اور صارف کے تجربے پر زیادہ کنٹرول ہوگا اس سے کہیں زیادہ جو کہ کسٹم پوسٹ ٹائپس یا عام پوسٹ کی کیٹیگریز میں ہوتا ہے۔

اس حد تک، جب کوئی صارف لاگ ان کرتا ہے تو وہ نیٹ ورک میں لاگ ان کرتا ہے اور بالآخر ہر نیٹ ورک سائٹ میں بھی لاگ ان ہوتا ہے تاکہ ایک ہموار تجربہ فراہم کیا جا سکے۔ اگر آپ کی نئی سائٹ سبسکرپشن پر مبنی تھی تو یہ بہترین حل اور نتیجہ ہوگا۔

اگر تاہم، ملٹی سائٹ کا مقصد مختلف نیٹ ورک سائٹس پیش کرنا ہو جن کا ایک دوسرے سے کوئی تعلق نہ ہو، تو تقریباً ہمیشہ ایسا ہی ہوتا ہے کہ صارف کے کرداروں (user roles) کو تبدیل کرنے کے لیے بیرونی یا اضافی پلگ ان کی ضرورت پڑتی ہے۔

### ڈومین اور SSL {#domain-and-ssl}

آئیے ورڈپریس ملٹی سائٹ انسٹالیشن کے بارے میں بات کرتے ہیں جو ہماری توجہ سے تقریباً چھپ جاتی ہے - WordPress.com۔ یہ ورڈپریس ملٹی سائٹ کا سب سے وسیع مثال ہے اور اس کی صلاحیتوں کو کسی مقصد کو پورا کرنے کے لیے کسٹمائز اور ڈھالنے کی صلاحیت کو ظاہر کرتا ہے۔

آج کل جدید انٹرنیٹ پر SSL کا استعمال تقریباً لازمی ہو گیا ہے اور ورڈپریس ملٹی سائٹس کے نیٹ ورک ایڈمنز کو جلد ہی ان چیلنجز کا سامنا کرنا پڑتا ہے۔

_subdomain_ کنفیگریشن میں سائٹس کو رُٹ ڈومین نیم کی بنیاد پر بنایا جاتا ہے۔ اس طرح 'site1' نامی سائٹ 'site1.domain.com' کے طور پر بنائی جائے گی۔ وائلڈ کارڈ SSL سرٹیفکیٹ کا استعمال کرتے ہوئے، ایک نیٹ ورک ایڈمن اس چیلنج کا کامیابی سے حل کر سکتا ہے اور نیٹ ورک کے لیے SSL انکرپشن کی صلاحیتیں فراہم کر سکتا ہے۔

WordPress Multisite mein ek domain mapping function hota hai jo network sites ko custom domain names ya network ke root domain se alag domain names se jodne ki ijazat deta hai.

Network administrators ke liye yeh domain name configuration aur SSL certificates ke issuance aur maintenance dono mein ek aur mushkil parh hai.

Is hadd tak, jab WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com) ko 'site1' se map karne ka raasta deta hai, tab network administrator ke liye DNS entries ko bahari taur par manage karne aur SSL certificates implement karne ki chunauti bachi rehti hai.

## Ultimate Multisite {#ultimate-multisite}

Ek stand-alone WordPress installation aur Multisite installation ke darmiyan farq ko samajhne ke baad, dekhte hain ki Ultimate Multisite Websites as a Service (WaaS) pradan karne ke liye kaise sabse behtareen hathiyar hai.

### Introduction {#introduction}

Ultimate Multisite aapka Swiss Army knife hai jab baat Website as a Service (WaaS) banane ki ho. Wix.com, Squarespace, WordPress.com aur phir apna khud ka service rakhne ke baare mein sochiye.

Andar se Ultimate Multisite WordPress Multisite ka istemal karta hai lekin yeh aisa tareeke se karta hai jo na sirf network administrators ke saamne multisite installations se judi kai mushkilon ko hal karta hai balki iski kshamtaon ko badhata hai jisse bahut tarah ke use cases ko support kiya ja sakta hai.

Aane wale hisson mein hum kuch aam use cases aur unhe support karne ke liye zaroori baaton par nazar dalenge.

### Use Cases {#use-cases}

#### Case 1: Ek Agency {#case-1-an-agency}

Aam taur par ek agency ki buniyadi hunar websites ke design mein hoti hain jismein unki hosting ya marketing ko mazeed services ke roop mein list kiya jata hai.

برای آژانس‌ها، Ultimate Multisite با توانایی خود در میزبانی و مدیریت چندین وب‌سایت روی یک پلتفرم، ارزش فوق‌العاده‌ای ارائه می‌دهد. این موضوع برای آژانس‌هایی که طراحی‌هایشان را بر اساس قالب‌های خاصی مانند GeneratePress، Astra، OceanWP یا دیگر استاندارد کرده‌اند، حتی می‌توان از قابلیت‌های Ultimate Multisite برای فعال کردن خودکار این قالب‌ها در هر سایت جدید استفاده کردند.

به همین ترتیب، با وجود تعداد زیاد پیشنهادات قیمت‌گذاری آژانس‌ها برای افزونه‌های رایج و محبوب، استفاده از Ultimate Multisite به آژانس‌ها اجازه می‌دهد با فراهم کردن یک پلتفرم مشترک که افزونه‌ها می‌توانند روی آن نصب، نگهداری و استفاده شوند، از سرمایه‌گذاری‌های موجود خود بهره ببرند.

احتمالاً استفاده از تنظیمات مورد نظر خواهد بود و خوشبختانه Ultimate Multisite با ادغام‌هایی که برای چندین ارائه‌دهنده هاست محبوب مانند Cloudflare و cPanel وجود دارد، نگاشت دامنه و گواهی SSL را بسیار آسان می‌کند.

بنابراین با استفاده از یکی از این ارائه‌دهندگان یا قرار دادن Ultimate Multisite پشت Cloudflare، جنبه‌هایی مانند مدیریت دامنه‌ها و گواهی‌های SSL تا حد زیادی ساده می‌شوند.

آژانس‌هایی که ترجیح می‌دهند کنترل دقیقی بر ایجاد سایت‌ها داشته باشند، از سهولت ساخت سایت‌ها و مرتبط کردن سایت‌ها با مشتریان و طرح‌ها از طریق رابط کاربری ساده شده Ultimate Multisite قدردانی خواهند کرد.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

کنترل دقیق بر افزونه‌ها و قالب‌ها به صورت مبتنی بر محصول از طریق رابط‌های کاربری بصری Ultimate Multisite حفظ می‌شود که به افزونه‌ها و قالب‌ها اجازه می‌دهد در زمان ایجاد یک سایت جدید، قابل دسترس یا پنهان باشند و وضعیت فعال‌سازی آن‌ها نیز مشخص باشد.

![Product plugin limitations interface](/img/config/product-plugins.png)

موضوعات (Themes) کارکردی مشابه دارند، که به این معنی است که می‌توان از بین موضوعات خاصی در هنگام ساخت سایت روی سایت فعال یا غیرفعال کرد.

![Product theme limitations interface](/img/config/product-themes.png)

آژانس‌ها با Ultimate Multisite آرامش خاطر پیدا می‌کنند و می‌توانند کاری را که بهترین هستند انجام دهند - طراحی وب‌سایت‌های فوق‌العاده.

#### مورد ۲: ارائه‌دهنده تخصصی (Niche Provider) {#case-2-niche-provider}

یک ضرب‌المثل قدیمی وجود دارد که می‌گوید، «یک کار را خوب انجام بده». برای بسیاری از متخصصان، این به معنای ساختن یک محصول یا سرویس حول یک ایده اصلی واحد است.

شاید شما یک گلف‌باز مشتاق باشید که وب‌سایت‌ها را به باشگاه‌ها تبلیغ می‌کنید یا شاید یک گیمر اسپورts حرفه‌ای باشید که وب‌سایت‌ها را به کلان‌ها ارائه می‌دهید. شاید فردی که یک سرویس رزرو را به رستوران‌ها تبلیغ می‌کند؟

به دلایل مختلف، شما می‌خواهید خدماتی بر اساس یک چارچوب و پلتفرم مشترک ارائه دهید. ممکن است شما افزونه‌های سفارشی طراحی یا سرمایه‌گذاری کرده باشید تا عملکرد مورد نیاز فراهم شود، یا ممکن است اینطور باشد که بهترین شیوه‌های صنعت به نوعی رویکرد استاندارد برای طراحی نیاز دارند.

یکی از ویژگی‌های نوآورانه Ultimate Multisite استفاده از سایت‌های قالب (template sites) است. یک سایت قالب جایی است که موضوع (theme) نصب و فعال شده باشد، افزونه‌های لازم نصب و فعال شده باشند و پست‌ها یا صفحات نمونه ایجاد شده باشند. وقتی مشتری بر اساس آن قالب یک سایت جدید می‌سازد، محتوا و تنظیمات قالب به سایت جدید کپی می‌شود.

برای ارائه‌دهندگان سایت‌ها و سرویس‌های تخصصی، این قابلیت مزیت بی‌نظیری در توانایی ساخت یک سایت آماده با افزونه‌ها و طراحی سفارشی فوری فراهم می‌کند. مشتری فقط باید حداقل ورودی ممکن را برای تکمیل سرویس ارائه دهد.

Bisa daidai daidai, dangane buƙatun ku, za a iya yin amfani da tsarin _subdirectory_ ko _subdomain_, wanda hakan zai ba da damar tsarin da ya dace. A wannan yanayin, za a yi zaɓin tsari na SSL mai sauki don _subdirectories_ ko SSL mai sauki na wildcard don _subdomains_.

#### Nazarin 3: Wurin Wurin Wajen WordPress (WordPress Web Hosting) {#case-3-wordpress-web-hosting}

Akwai hanyoyi da yawa don samar da wuraren wajen WordPress, amma ba wai a sauƙin samar da wuri ga abokin ciniki tare da wani bayanin WordPress da aka shigar shi. Wannan yana faruwa saboda akwai wasu mutane da matsaloli da ya kamata su haɗa don samar da wani aiki mai ma'ana.

Ultimate Multisite yana mallaka wannan fannin ta hanyar ba da mafita gaba (turnkey solution) mai cikakken bayani don samar da wuraren wajen WordPress. A cikin wannan mafitan akwai waɗannan hanyoyin na asali don samar da sabisoshin samun kuɗi, samun kuɗi, fassarorin checkout, ƙurangan rabawa, da kuma sadarwar abokan ciniki.

Yawancin aikin da ake bukata don shigar da, tsara, da kuma riƙewa da WordPress Multisite cikin kyakkyawan yadda Ultimate Multisite ya sauƙaƙe shi, yana ba masu kula da shaidar (network administrators) damar kawai kallon abubuwan da suka shafi sabisinsa ko fannin sa, kamar matakan kayan aiki (product tiers), tsadar kuɗi, da bayanan sabis.

Don masu haɓaka (developers) waɗanda suke so su haɗu da Ultimate Multisite, mafitan kuma yana ba da RESTful API mai cikakken bayani da Webhooks don sanarwa game da abubuwan da ke faruwa.

Bisa tare da dogara kan yawan plugin da licenses na waje, Ultimate Multisite yana ba damar mai sauki da ce ta hanyar ƙarin siffofi kamar Wix, Squarespace, WordPress.com da wasu.

### Nazarin Tsari (Architecture Considerations) {#architecture-considerations}

Kamar yadda ba shi ne babban hujjatu mai cikakken bayani, waɗannan abubuwan dole su yi a matsayin shawarwari don zaɓar fasahar da za ta taimaka wajen shigar da Ultimate Multisite.

#### Wurin Samarwa (Shared vs. Dedicated Hosting) {#shared-vs-dedicated-hosting}

بشكل أسف، ليست كل مزودي الاستضافة متساوين، وبعضهم يمارسون كثافة خوادم عالية جداً. عادةً ما يحقق المزودون ذوو التكلفة المنخفضة أرباحهم عن طريق زيادة كثافة الخادم إلى أقصى حد. ولهذا السبب، قد يكون تثبيت Ultimate Multisite الخاص بك مجرد واحد من مئات المواقع على نفس الخادم.

بدون إجراءات حماية مناسبة من المزود، تعاني المواقع الموجودة على خادم مشترك من مشكلة "الجيران الصاخبين". وهذا يعني أن موقعاً على نفس الخادم يستهلك الكثير من الموارد لدرجة أن المواقع الأخرى تضطر للتنافس على الموارد المتبقية. وغالباً ما يظهر هذا في شكل مواقع بطيئة أو لا تستجيب في الوقت المناسب.

بصفتك مزود استضافة ويب، فإن تدفق التأثير يعني أن عملائك سيختبرون سرعات ضعيفة، وترتيب صفحات منخفض، ومعدلات ارتداد عالية، مما يؤدي غالباً إلى فقدان العملاء الذين يبحثون عن خدمات في أماكن أخرى.

باختصار، الرخيص لا يعني الجيد.

يُعرف Ultimate Multisite بأنه يعمل مع عدد من مزودي الاستضافة الجيدة ويتكامل بشكل جيد مع بيئتهم لتوفير وظائف مثل تعيين النطاقات (domain mapping) وتأمين SSL تلقائي. هذه المزودون يقدرون الأداء ويوفرون خدمة ذات جودة أعلى من الاستضافة المشتركة.

للحصول على قائمة بالمزودين المتوافقين وتعليمات الإعداد الكامل لكل منهم، يرجى مراجعة وثائق "Compatible Providers".

#### اعتبارات الأداء {#performance-considerations}

Ultimate Multisite ليس تطبيقاً بطيئاً، بل هو سريع بشكل ملحوظ. ومع ذلك، فإنه يعمل فقط بقدر جودة التطبيق والبنية التحتية الأساسية ويمكنه الاستفادة فقط مما لديه وصول إليه.

فكر في هذا: أنت مسؤول الشبكة لتثبيت Ultimate Multisite يحتوي على 100 موقع. بعض تلك المواقع تسير بشكل جيد وتجذب عدداً من زوار الويب كل يوم.

این سناریو در مقیاس کوچک‌تر، مثلاً یک تا پنج سایت، متفاوت خواهد بود اما قبل از دیر شدن مشکلات مقیاس‌پذیری، مشکلی آشکار می‌شود.

اگر سایت تک Ultimate Multisite را مراقب نباشید، این سایت مسئول پاسخگویی به درخواست‌های همه بازدیدکنندگان از سایت‌ها خواهد بود. این درخواست‌ها می‌توانند برای صفحات PHP پویا یا فایل‌های استاتیک مانند فایل‌های استایل (stylesheets)، جاوا اسکریپت یا رسانه‌ها باشند. چه یک سایت و چه صد سایت، این کارها تکراری، یکنواخت و هدر رفته می‌شوند. نیازی نیست از قدرت CPU و حافظه برای پردازش یک فایل PHP استفاده کنید وقتی خروجی آن اطلاعات استاتیک یکسانی برای هر درخواست است.

به همین ترتیب، یک درخواست برای یک صفحه PHP یا HTML به نوبه خود چندین درخواست بعدی برای اسکریپت‌ها، استایل‌ها و فایل‌های تصویر ایجاد می‌کند. این درخواست‌ها مستقیماً به سرور Ultimate Multisite شما هدف قرار می‌گیرند.

می‌توان با ارتقاء سرور این مشکل را به راحتی حل کرد، اما این مشکل ثانوی یعنی تأخیرهای جغرافیایی را برطرف نمی‌کند. فقط چندین سرور در مکان‌های مختلف می‌توانند بتوانند به طور مناسب به این مشکل پاسخ دهند.

به همین دلیل اکثر مدیران شبکه از راهکارهای کش فرانت‌اند (front-end caching solutions) و شبکه‌های توزیع محتوا (CDN) برای پاسخگویی به درخواست‌های صفحات استاتیک استفاده می‌کنند. پاسخ دادن به این درخواست‌ها و سرو کردن دارایی‌ها قبل از اینکه درخواست به سرور برسد، منابع پردازشی را ذخیره می‌کند، تأخیرها را از بین می‌برد، ارتقاءهای غیرضروری را از میان برمی‌دارد و سرمایه‌گذاری‌های تکنولوژی را به حداکثر می‌رساند.

Ultimate Multisite شامل یک افزونه پیشرفته Cloudflare است که به مدیران شبکه اجازه می‌دهد نصب خود را پشت Cloudflare قرار دهند و نه تنها از قابلیت کش آن، بلکه از هاستینگ DNS، گواهی SSL و مکانیزم‌های امنیتی نیز استفاده کنند.

#### پشتیبان‌گیری (Backups) {#backups}

می‌توان از ۵۰ نفر برای مشاوره در مورد بکاپ‌ها پرسید و به ۵۰ نظر مختلف در استراتژی‌های بکاپ برسید. پاسخ این است که بستگی دارد.

Abin da ba shi da shakka cewa ake buƙatar backups kuma yana kyakkyawar tunani cewa ba za a kula da su ba daga wanda ke bayarwawa sabis na tsaro (managed service), musamman wanda ya bayarwaka wannan sabis. Saboda haka, abokan ciniki za su yi bincike da ma'aikacin shaharar wajen samar da kuma kula da wannan sabis. Wato wanda ma'aikacin shaharar yake bincike shi yana ba shi matsala daban.

Don wannan sashi, bari mu yarda cewa backup shine nuna yanayin tsarin a lokacin da aka fara yin backup. A yau da sauri, duk wani yanayin tsarin a lokacin da ake yin backup zai tura kuma ya yi haske a cikin backup.

Da fahimtar wannan, amsa kan yadda za a samu backups kuma abin mafi kyau ga muhallin ku zai dogara sosai akan buƙatanku da ikon gudanar da sabis na gudanar da shaharar don cika waɗannan buƙatanku. Duk da haka, daga mafi tsokaci zuwa mafi rashin tsokaci, za su ba ka wasu hanyoyi masu taimaka a ƙasa.

#### Snapshots (Harshen Gaba) {#snapshots}

Snapshots suna da matsayin maganin da ya yi tasiri ga backups saboda suna sauƙi, ba su da rikitarwa (haruta kowa har sai kana so ka sake), kuma suna "aiki" kai tsaye. Duk da hakan yana buƙatar taimako daga wajen shaharar ku kuma yawancin lokacin idan kuna da VPS (Virtual Private Server) ko wani abu kamar haka. Wasu masu bayarwa da aka lissafa a cikin littafinmu na 'Compatible Providers' suna ba da backups waɗanda ba su buƙatar wata shiga ko tunani daga ma'aikacin shaharar.

کپشن‌های سنتی بکاپ‌ها فایل‌ها و پایگاه داده‌ها را هدف قرار می‌دهند، در حالی که اسنپ‌شات (snapshot) کل دیسک را هدف قرار می‌دهد. این بدان معناست که نه تنها داده‌های سایت در اسنپ‌شات ثبت می‌شوند، بلکه سیستم عامل و تنظیمات هم ذخیره می‌شوند. برای بسیاری، این یک مزیت متمایز است زیرا می‌توان تقریباً بلافاصله از یک اسنپ‌شات یک سیستم جدید ایجاد کرد و آن را برای جایگزینی یک نمونه خراب به کار انداخت. به همین ترتیب، فرآیند بازیابی برای بازیابی فایل‌ها فقط نیاز به متصل کردن تصویر اسنپ‌شات به عنوان دیسک در یک نمونه موجود دارد تا بتوان به فایل‌ها دسترسی پیدا کرد و آن‌ها را کپی نمود.

اسنپ‌شات ممکن است با ارائه‌دهنده میزبانی هزینه اضافی داشته باشد، اما این مانند بیمه علیه حوادث است.

#### اسکریپت‌های خارجی (External Scripts) {#external-scripts}

به نظر نمی‌رسد که کمبود اسکریپت‌ها و راه‌حل‌های خارجی برای بکاپ گرفتن منابع وردپرس و MySQL وجود نداشته باشد و اینها برای Ultimate Multisite که یک پلاگین وردپرس است و از فایل سیستم و پایگاه داده وردپرس استفاده می‌کند، خوب کار خواهند کرد. بنابراین راهکاری که سایت‌های وردپرسی را بکاپ می‌گیرد، نیازهای Ultimate Multisite را به خوبی پوشش خواهد داد.

ما نمی‌توانیم هیچ اسکریپتی را بر دیگری توصیه کنیم، اما توصیه کلی ما این است که چندین آزمایش بکاپ و بازیابی را اجرا کنید تا مطمئن شوید نتایج مورد نظر شما هستند و با مداوم ارزیابی اسکریپت و عملکرد آن، به ویژه جایی که نوعی استراتژی بکاپ تفاضلی (differential backup strategy) اعمال می‌شود، «مطمئن باشید که مطمئن هستید».

باید توجه داشت که این اسکریپت‌ها در حین اجرا بار سیستم را افزایش می‌دهند که باید در نظر گرفته شود.

#### پلاگین‌ها (Plugins) {#plugins}

تقریباً هیچ مشکلی در وردپرس وجود ندارد که با یک پلاگین حل نشود و اگر مدیریت اسکریپت‌های خارجی برای شما مناسب نیست، شاید یک پلاگین گزینه بعدی عالی باشد.

ko ya plugin-tomi ko zaɓu, ka tabbata shi yana fahimtar multisite. Domin yadda yake aiki, lokacin da ake gudanar da backup, za ka ga wani ƙarin aiki (load) a server har sai an kammala aiki.

#### Domain da SSL {#domain-and-ssl-1}

Game da ya yi magana game da sunan domain a yanayin _subdomain_ na multisite, mafi yawan mafita ga masu kula da shaidar yanar gizo (network administrators) shi ne amfani da wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Wannan nau'in DNS entry zai iya samar da _subdomains_ kamar ‘site1.domain.com’ da ‘site2.domain.com’ zuwa IP address 1.2.3.4, wanda hakan ke tallafa wa Ultimate Multisite da kuma WordPress Multisite ta yawa a yanayin _subdomain_.

Wannan zai iya aiki sosai ga HTTP saboda ana karanta wuri da ake biyo daga HTTP headers, amma ba kaɗan akwai wuri da ya yi sauka kamar yanzu inda shaidar HTTPS mai aminci tana zama buƙata.

Khusa akwai zaɓuɗaci masu sauƙi don sertifikat SSL. A yanayin _subdirectory_ (sub-directory) ana iya amfani da sertifikat domain na yadda take suka shafi. Waɗannan suna da sauƙin samun su daga masu gudanar da hotawa (hosting providers) waɗanda za su yi amfani da sabon ayyukan LetsEncrypt ko wani jagora. Idan ba haka ba, ana iya samun su ta kasuwa daga masu samarwa idan kuna da ikon samar da buƙatar bayyanar sertifikat (certificate signing request).

A yanayin _subdomain_ (sub-domain) ana amfani da sertifikat SSL na wildcard zai yi daidai tare da domain na wildcard kuma zai ba sertifikat ikon zama mai buniyya ga domain na asali da duk _subdomains_ ba tare da wajibi ne kawai.

Dukannu dole mu tuna cewa sertifikat SSL na wildcard ba za su iya aiki da ayyukan kamar Cloudflare ba idan kuna kan tsarin enterprise ko kuma kuna sanya shiga hanya ga DNS-only, wanda hakan zai hana duk wani kayan ajiya (caching) da ingantawa.

Ultimate Multisite na farko yana bayarwa mafita ga wannan matsalar ta nuna ƙwarewar mu da buƙatun WordPress multisites. Lokacin da kake ƙarfafa wannan add-on mai sauƙi, Ultimate Multisite zai yi amfani da bayanan Cloudflare ɗinka don ƙara kayan DNS na wuraren yanar gizo (network sites) a cikin Cloudflare kuma ya sanya matsayin su "proxied". Wannan yana nufin duk wata subsite na yanar gizo, lokacin da aka ƙirƙira, za ta samu dukkan kariya da fa'idodin Cloudflare, ciki har SSL.

Dangane da yadda ake tsara da nauyi da manufar Ultimate Multisite ɗinka, ana iya buƙatar abokan ciniki su yi amfani da domain ɗinsu. A wannan yanayin, mai gudanar da yanar gizo (network administrator) yana da alhakin magance matsaloli biyu: Ɗaya, hotawa na sunan domain, kuma biyu, sertifikat SSL don domain ɗin.

برای بسیاری، استفاده از Cloudflare یک گزینه آسان است. مشتری فقط باید دامنه خود را روی Cloudflare قرار دهد، یک CNAME را به دامنه اصلی Ultimate Multisite اشاره کند و دامنه‌اش را در Ultimate Multisite نگاشت کند تا بتواند از نام دامنه سفارشی خود بهره‌مند شود.

خارج از این موارد، باید راه‌حل‌های جایگزین جستجو کرد که همین دلیل است که Ultimate Multisite لیستی از ارائه‌دهندگان سازگار را توصیه می‌کند. این به این دلیل است که فرآیند تنظیم DNS و SSL می‌تواند یک کار پیچیده باشد. با این حال، با ادغام Ultimate Multisite با این ارائه‌دهندگان، پیچیدگی بسیار کاهش یافته و رویه خودکار می‌شود.

#### افزونه‌ها (Plugins) {#plugins-1}

احتمالاً شما برای ارائه قابلیت‌ها به مشتریان یا سایت‌های شبکه به افزونه‌های بیشتری نیاز خواهید داشت. آیا همه افزونه‌ها با WordPress Multisite و Ultimate Multisite کار می‌کنند؟ خب، بستگی دارد.

در حالی که اکثر افزونه‌ها در یک WordPress Multisite قابل نصب هستند، فعال‌سازی و مجوزدهی آن‌ها از نویسنده به نویسنده متفاوت است.

چالش در نحوه اعمال مجوزهاست، زیرا برخی افزونه‌ها نیاز به مجوزدهی بر اساس هر دامنه دارند. این بدان معناست که برای برخی افزونه‌ها، مدیر شبکه باید به صورت دستی مجوز را برای هر افزونه روی هر سایت جدید فعال کند.

بنابراین بهتر است با نویسنده افزونه تماس بگیرید تا ببینید افزونه او چگونه با یک WordPress Multisite کار می‌کند و آیا نیازهای خاص یا رویه‌هایی برای اخذ مجوز آن وجود دارد یا خیر.
