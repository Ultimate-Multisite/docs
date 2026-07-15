---
title: Mene ne WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Menene WordPress Multisite ne ke?

A cikin tsarin shi na asali, WordPress yana ba wani ƙwarewa mai suna ‘Multisite’ wanda ya fara daga shekarar 2010 da farawa da WordPress 3.0. Tun daga wannan lokacin ya samu wasu gyare-gyare ne don haɗa sabbin ƙwarewa da kuma inganta tsaro.

A gaba, za ka iya tunanin WordPress multisite kamar haka: Wani Jami'a yana ajiye wuri ɗaya na WordPress amma kowane fafatawa (faculty) tana ajiye wurin WordPress daban-daban.

##

## Menene WordPress Multisite a zahiri? {#what-exactly-is-wordpress-multisite}

Multisite wani ƙwarewa ne na WordPress wanda ke ba damar samar da wuraren da dama su yi amfani da wuri ɗaya na WordPress. Lokacin da aka fi ƙarfafa multisite, wurin WordPress na asali yana canza don tattauna abin da ake kira **wannan gida na wurare (network of sites)**.

Wannan gida yana raba tsarin fayiloli (wato **plugins da themes suna bayarwa tare**), database, fayilolin asali na WordPress, wp-config.php, da sauransu.

Wannan yana nufin cewa dole ne a yi gyare-gyare ga WordPress, theme, da plugin wani lokaci kawai don dukkan wuraren gidan ka a cikin wannan gida, tun nan dai suna raba fayiloli guda ɗaya a tsarin fayiloli.

Wannan gaskiya ita ce ɗaya daga cikin manyan fa'idodin multisite, saboda tana ba ka damar ƙara adadin wuraren da kake kula tare da dubawa da yadda ake yin ayyukan da kake bukata don a tsara wuraren abokan hulɗarka.

##

## Subdomain ko Subdirectory? {#subdomain-or-subdirectory}

Akwai hanyoyi biyu na gudanar da WordPress multisite – kuma dole ne ka zaɓi ɗaya lokacin da kake canza wurin WordPress na yau zuwa multisite:

**Subdomain:** misali: [site.domain.com](http://site.domain.com)

…ko

**Subdirectory:** misali: [yourdomain.com/site](http://yourdomain.com/site)

Kowane hanya tana da fa'idodi da abubuwan rashin fa'ida da dole ne ka yi la'akari da su lokacin da kake yanke wannan shawarar.

Wani abu da ya kamata ka tuna wani abu mai muhimmanci: bayan ka yi hakan, canza yanarku daga subdirectory zuwa subdomain ko yawan suke a kan shi yana da wahala sosai – musamman idan kana da wasu wurare da aka ƙirƙira.

Kafin ka yi wannan shawarar, ga wasu abubuwa da ya kamata ka tuna:

**Subdirectory Mode** shine mafi sauƙi a fannin shirya da kuma tsafawa. Wannan yana faruwa saboda duk waccen wurare sabase hanyoyin (paths) da aka haɗa da domain na gaba (misali [yourdomain.com/subsite](http://yourdomain.com/subsite)). A wannan yanayin, kana buƙatar **wata SSL certificate** kawai ga domain na gaba kuma wannan zai shafi dukkan yanarku.

A lokacin da haka, saboda tsarin URL-sa, Google da mafi yawan injin bincike ba za su kura dukkan subsites a cikin yanarku na subdirectory a matsayin wani wuri mai girma. A wannan yanayin, abubuwan da ake ƙara a subsites ta hanyar abokan ciniki na kai za su iya shafar ingancin SEO na wajen shiga (landing site) ɗinka, misali. Matakin tasiri yana iya ba da shakka kuma akwai magana cewa samar da wannan tsarin na iya zama mai kyau ga SEO performance.

**Subdomain Mode** yana da rikitarwa sosai a shirya shi, amma tsarin URL-sa (misali [subsite.yournetwork.com](http://subsite.yournetwork.com)) yawanci ana ganin yana da "mafi ingantaccen" bayani.

یکی از مشکلات اصلی در راه‌اندازی حالت دامین زیرمجموعه (subdomain mode) پوشش SSL (HTTPS) برای کل شبکه است. این موضوع به این دلیل است که مرورگرها دامین‌های زیرمجموعه را موجودیت‌های جداگانه در نظر می‌گیرند. در نتیجه، شما نیاز دارید برای هر دامین زیرمجموعه‌ای در شبکه خود یک گواهی SSL متفاوت داشته باشید، یا از نوع خاصی از گواهی به نام **Wildcard SSL certificate** استفاده کنید. در سال‌های اخیر، ارائه‌دهندگان هاست و پنل‌ها در زمینه فراهم کردن SSL پیشرفت کرده‌اند و برخی از آن‌ها با یک کلیک روی دکمه، گواهی‌های وایلدکارد را ارائه می‌دهند که شکاف پیچیدگی تنظیم این دو حالت را پر کرده است.

در مقابل حالت زیردایرکتوری (subdirectory mode)، سایت‌های فرعی در یک شبکه مبتنی بر دامین زیرمجموعه توسط موتورهای جستجو به عنوان وب‌سایت‌های جداگانه در نظر گرفته می‌شوند، به این معنی که محتوایی که روی یک سایت فرعی وجود دارد، اصلاً بر عملکرد سئو (SEO performance) سایر سایت‌های فرعی تأثیری ندارد.

## سوپر ادمین (The Super Admin) {#the-super-admin}

نصب‌های وردپرس تک‌سایتی (single-site WordPress installations) به شما اجازه می‌دهد تعداد نامحدودی کاربر اضافه کنید و نقش‌های کاربری مختلف با مجوزهای متفاوت به آن کاربران بدهید.

در وردپرس چندسایتی (Multisite)، نوع جدیدی از کاربر باز می‌شود: **سوپر ادمین** – و یک پنل مدیریت جدید باز می‌شود: **پنل مدیریت شبکه (network admin panel)**.

همانطور که از نامش پیداست، سوپر ادمین قدرت‌های فوق‌العاده‌ای بر روی شبکه دارد و قادر است همه سایت‌های فرعی، پلاگین‌ها، تم‌ها و همه چیز را مدیریت کند!

هنگامی که نصب وردپرس تک‌سایتی خود را به چندسایتی تبدیل می‌کنید، مدیر اصلی سایت تک‌سایتی به طور خودکار به سوپر ادمین ارتقا داده می‌شود.

پلاگین‌ها و تم‌ها فقط می‌توانند توسط سوپر ادمین از پنل مدیریت شبکه نصب یا حذف شوند. سپس مدیران سایت فرعی می‌توانند تصمیم بگیرند که آن پلاگین‌ها یا تم‌ها را فعال کنند یا غیرفعال نمایند، مگر اینکه سوپر ادمین شبکه یک پلاگین را فعال کند که این کار باعث می‌شود آن برای همه سایت‌های فرعی همیشه فعال باشد.

_Gargaɗi: Kuma kuka kuka, girmama wani mutum zuwa cikin shaidarka da ba shi matsayin super admin yana ba wannan mai amfani dukkan tallafin shaidarka. A matsayin misali, wasu super admins na iya canza matsalar super admin ta, wanda hakan ya ƙara maka rashin damar shiga wajen sarbin aikin shaidarka kansa. Don ba 'yan kliyenten Ultimate Multisite damar samun kawai (granular control) kan abin da wasu super admins za su iya yi, muna da wani add-on da ake kira Support Agents. Wannan add-on yana ba ka damar ƙirƙirar wani nau'in mai amfani – agent – tare da ikon da ya kamata shi don aikin da zai yi kan shaidarka._

## Me kake raba tsakanin subsites kuma me ba ka raba? {#what-is-shared-among-subsites-and-what-is-not}

Kamar yadda muka ambata a baya, ɗaya daga cikin manyan fa'idodin WordPress multisite shine cewa duk subsites suna raba dukkan tsarin (configurations), fayilolin asali (core files), themes, plugins, fayilolin asali na WordPress, da sauransu.

Amma akwai wasu abubuwa da aka tsara shi sosai ga kowane subsite.

- Misali, kowane subsite yana samun ƙofar uploads (uploads folder) daban. A matsayin haka, duk wani abu da mutane na wannan subsite suka saka ba za su iya shiga a wani subsite ba.
- Kowane subsite yana da ikon sarbin aikin daban kuma zai iya samarwa ko kawar da kayan aiki (plugins) ko themes idan ba super admin ya yi wa shaidarka aiki.
- Babban jadawalin database kowane subsite an ƙirƙira, wanda hakan na nufin cewa posts, comments, pages, settings, da sauransu suna tsara ga kowane subsite.

## Gudanar da amfani (User management) a WordPress Multisite {#user-management-on-wordpress-multisite}

Babu wata batun da ya shafi gudanar da amfani a WordPress multisite wanda ya kasance mai sauƙi sosai. Jadawalin masu amfani na WordPress ɗaya ne daga cikin waɗanda aka raba tsakanin dukkan subsites.

Wannan tsarin zai iya samar da wasu matsaloli dangane da abin da kake son gina da shaidarka. Misali a ƙasa yana taimaka wajen bayyana mafi girman matsalar.

Ka tun wannan yanayin:

Kauna kake wani WordPress multisite kuma fara ba shi subsites ga mutane da suke so su sami wuri na sayarwa (e-commerce store) da wata kuɗi a kowace wata shawarwar shekara.

Kake samu farkon abokin kuɗi – John. Ka ƙirƙira wuri don John a kan network ɗinka, ka install dukkan plugins da ake bukata, sannan ka ƙirƙira mai amfani (user) ga John domin shi ya iya sarrafa store ɗinsa.

Sannan kuma shiga Alice. Ka yi hakan a gare ta kuma yanzu tana da store a kan network ɗinka ma.

John da Alice suna cikin abokai, amma ba su sani ba. Wajen muhimmanci, idan ɗaya daga cikinsu ya ziyarci wurin sayarwar store ɗin ɗayan su, babu wata hanya don san cewa wannan store yana a kan iyalinta (network) na wurare.

Wata rana, John ya buƙaci karawa gaba mai kyau kuma ya samu mafi dacewa a cikin store ɗin Alice. Lokacin da yake ƙoƙarin kammala sayarwarsa, ya sami saƙon "email already in use" (email ya shafi) wanda shi ne abu na baƙin ciki saboda John yana da tabbacin 100% wannan shine farkon farkinsa da ya ziyarci website ɗin Alice.

Abin da ya faru shi ne mai amfani (user) na John an raba a dukkan network, don haka lokacin da yake ƙoƙarin ƙirƙirar asusun sayarwa a kan wurin Alice, WordPress zai gano cewa akwai mai amfani da imel ɗaya ya shafi kuma zai ba shi saƙo.

_Ga bayani: Mun fahimci yadda wannan zai iya zama mai rashin kyau dangane da nau'in aiki (use-case) na ku, don haka Ultimate Multisite yana da zaɓi wanda ke tsarewa ga bincike na asusun da ya kasance shi akai daidai, wanda ke ba damar ƙirƙirar asusun da dama ta amfani da imel ɗaya. Kowane asusu yana da alaƙa da subsite guda ɗaya, don haka haɗarin tsakanin su ya dace sosai. A misalin da aka bayyana a sama, John ba zai sami saƙon rashin kyau kuma zai iya si wancan karawa ba tare da matsala ba. Wannan zaɓi ana kiransa "Enable Multiple Accounts", kuma za ka iya ƙarfafa shi a Ultimate Multisite → Settings → Login & Registration._

حتی اگر جدول کاربران اشتراکی باشد، مدیران سایت‌های فرعی یا مدیر فوق‌العاده می‌توانند کاربران را به زیرسایت‌ها اضافه یا حذف کنند و حتی ممکن است کاربران در زیرسایت‌های مختلف نقش‌های کاربری متفاوتی داشته باشند.

## ملاحظات عملکرد (Performance considerations) {#performance-considerations}

وردپرس چندسایتی وقتی پای تعداد سایت‌هایی که می‌تواند پشتیبانی کند، وسط باشد واقعاً قدرتمند است. این موضوع را می‌توان با این حقیقت آزمایش کرد که [WordPress.com](https://WordPress.com)، Edublogs و Campuspress همگی سرویس‌های مبتنی بر چندسایتی هستند و هر کدام هزاران سایت را میزبانی می‌کنند.

در حالی که از نظر تئوری هیچ تعداد حداکثری از سایت‌هایی که می‌توانید روی یک نصب وردپرس چندسایتی میزبانی کنید وجود ندارد، در عمل تعداد سایت‌هایی که بتوانید به طور رضایت‌بخش اجرا کنید می‌تواند بسته به عوامل مختلفی بسیار متفاوت باشد: چقدر سایت‌ها پویا هستند، کدام افزونه‌ها برای زیرسایت‌ها در دسترس هستند و غیره.

به عنوان یک قاعده کلی، هر چه شبکه شما ساده‌تر باشد، بهتر است. تمرکز بر روی سایت‌هایی که محتوای آن‌ها واقعاً پویا نیست (که این باعث می‌شود کاندیداهای عالی برای استراتژی‌های کشینگ تهاجمی باشند) و نگه داشتن مجموعه افزونه‌ها تا حد امکان سبک (هرچه تعداد افزونه‌های فعال کمتر باشد بهتر است) می‌تواند تعداد زیرسایت‌هایی را که می‌توانید میزبانی کنید به شدت افزایش دهد.

بهترین بخش این است که از آنجایی که همه چیز وردپرس است، همان ابزارهایی که شما برای بهبود عملکرد می‌شناسید و دوست دارید، برای یک شبکه چندسایتی هم کار خواهند کرد.

بزرگ‌ترین گلوگاه (bottleneck) برای چندسایتی پایگاه داده است اما اگر بقیه موارد به درستی تنظیم شده باشند، ممکن است تا چند هزار سایت طول بکشد تا نگران آن شوید. حتی در آن زمان نیز راه‌حل‌هایی وجود دارند که می‌توانند به صورت مرحله‌ای اضافه شوند (مثلاً راه‌حل‌های تقسیم‌بندی دیتابیس).
