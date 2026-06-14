---
title: Samfuri na Wurin Gida
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# قالب سایت‌ها (نسخه ۲)

_**توجه: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد. اگر از نسخه ۱.x استفاده می‌کنید،**_ **به این مقاله مراجعه کنید.**_

هدف ما وقتی یک شبکه حرفه‌ای با Ultimate Multisite می‌سازیم، اتوماتیک کردن تا حد امکان فرآیندها است در حالی که انعطاف‌پذیری و گزینه‌های مختلف را به مشتریانمان هنگام ساخت وب‌سایت‌هایشان می‌دهیم. یکی از راه‌های آسان برای رسیدن به این تعادل استفاده کردن از قابلیت Site Templates در Ultimate Multisite است.

## قالب سایت چیست؟

همانطور که از اسمش پیداست، یک Site Template یک سایت پایه (boilerplate site) است که می‌توان از آن هنگام ساخت سایت‌های جدید در شبکه خود استفاده کرد.

این بدان معناست که شما می‌توانید یک سایت پایه بسازید، افزونه‌های مختلف را فعال کنید، یک قالب فعال تنظیم کنید و آن را هر شکلی که دوست دارید سفارشی کنید. سپس، وقتی مشتری شما یک حساب جدید ایجاد می‌کند، به جای اینکه یک سایت وردپرسی پیش‌فرض با محتوای معنی‌دار در داخلش دریافت کند، یک کپی از سایت پایه شما را با تمام سفارشی‌ها و محتواهای آماده دریافت خواهد کرد.

این عالی به نظر می‌رسد، اما من چطور یک قالب سایت جدید بسازم؟ این کار به سادگی ممکن است انجام شود.

## ساخت و ویرایش یک Site Template جدید

Site Templates فقط سایت‌های معمولی در شبکه شما هستند. برای ساختن یک قالب جدید، کافی است به **Network Admin > Ultimate Multisite > Sites > Add Site** بروید.

**![دکمه افزودن سایت در صفحه لیست سایت‌ها](/img/config/site-templates-list.png)**

این کار یک پنجره مودال (modal window) باز می‌کند که از شما **عنوان سایت، دامنه/مسیر سایت،** و **نوع سایت** را می‌پرسد. در قسمت کشویی **Site Type** مطمئن شوید که **Site Template** را انتخاب می‌کنید.*

_![پنجره مودال افزودن قالب سایت با منوی نوع سایت](/img/config/site-templates-list.png)_

شما همچنین می‌توانید یک توضیحات قابل مشاهده برای مشتری اضافه کنید تا توضیح دهید که این قالب شامل چه چیزهایی است:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

A ƙasan wajen bayanan (form), za ka ga wani toggle switch na **Copy Site**. Wannan zai ba ka damar samar da sabon site template ne tare da amfani da wanda yake da shi a matsayin tushe don taimaka maka ka kashe lokaci maimakon ƙirƙirar site template daga asali.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Gyara abubuwan da ke cikin Site Template

Don gyara site template ɗinka, kawai tafiya zuwa dashboard panel ɗin sa kuma yi canjin da kake bukata. Za ka iya ƙirƙirar sabbin posts, pages, ƙarfafa plugins, da canza theme mai aiki. Wataƙila za ka iya tafiya zuwa Customizer kuma canza dukkan nau'ikan zaɓuwar gyara.

![Site template edit interface](/img/config/site-template-edit.png)

Duk wannan bayanai zai shafi lokacin da wani customer ya ƙirƙira sabon site tare da amfani da Site Template ɗin hakan.

### Zaɓuwar Girma (Advanced Options)

Idan kana son yin wasu rubutu na musamman, za ka iya amfani da Search and Replace API ɗin mu don a mayar da bayanai na asali a sabon site bayan an ƙirƙirayarsa. Wannan yana taimakawa wajen abubuwa kamar mayar da sunan kamfanoni a About page, ko mayar da imel ɗin addini a Contact page, da sauransu.

### Amfani da Site Templates

To, ka kalli, ka ƙirƙira ƙirar daban-daban na Site Templates tare da zane (designs), themes, da ayyuka daban-daban. Yaya za ka sa su yi amfani a kan shafukan ku yanzu?

Babban abin da za ka iya yi shi ne akwai hanyoyi biyu da za ka iya amfani da su (ba tare da yin hakan duka tare ba):

  * Kashe wani Site Template zuwa kowane Plans ɗinka.

**KO**

  * Ba da damar abokan hulɗarka su shiga zaɓin site templates kansu yayin shiga asusun.

#### Moduwar 1: Bayar Site Template

لە ئەم ڕێگەتانە، کڕیارەکان ناتوانن لە کاتی دروستکردنی ئەکاونت هەڵبژاردنی قالبێک بکەن، بەڵکو ئێوە دەتوانن دیاری بکەن کە چ قالبێک بۆ هەر یەکێک لە پلاندانەکانی خۆتان بەکاربهێنرێت.

ئەو کارە بۆ ئەوەی ئەنجام بدەن، پێویستە بگەیت بۆ **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

ئەمە دەبێت ببێتەوە بۆ لاپەڕەی **Edit Product**. لە خوارەوە لە بەشی **Product Options**، تابلۆی **Site template** دابگرە و هەڵبژاردنی **Assign Site Template** لە فیلدی دروپێدەر بکە. ئەمە لیستێک دەهێنێت کە قالبە سایتەکان موجودن و ڕێگە دەدات بە تۆ بۆ هەڵبژاردنی تەنها یەک قالب سایت تایبەت بەو بەرهەمە.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: هەڵبژاردنی قالب سایتە دروستکراوەکان

لە ئەم ڕێگەتانە، دەتوانیت کڕیارەکان لە کاتی تۆمارکردن هەڵبژاردن بکەن. ئەوان دەتوانن لە نێوان قالبە سایتە جیاوازەکانی ئەو قۆناغەی کە لە تنظیمات بەرهەمەکەدا دیاری کردووە هەڵبژێرن. ئێوە دەتوانیت ڕێگە بدەن کە تەنها لە نێوان ئەو قالبانەی کە هەڵبژاردراون، هەڵبژاردن بکەن. ئەمە دەدات بەوەی کە بۆ هەر بەرهەمێک سیتی جیاواز لە قالبە سایتەکانت هەبێت، کە بۆ بەرهەمێکی گرانتر باشە بۆ ئەوەی تایبەتمەندی و کارامەی جیاواز دیار بکرێن.

A cikin shafin **Edit Product** (Gyara da Kayarwa), a ƙarƙashin sashi na **Product Options** (Zaɓuwar Kayarwa), nemo tab ɗin **Site template** (Makaidansa Wurin Gida) kuma zaɓi zaɓin **Choose Available Site Template** (Zaɓi Makaidansa Wurin Gida da Zaɓa). Wannan zai kawo maka lissafin makaidan gida da suka kasance da shi kuma zai ba ka damar zaɓar makaidan gida da kake so su kasance da shi. Zaka iya yin hakan ta hanyar zaɓar yanayin aiki (Behavior) na shi: **Available** (Da Suwa) idan kana so makaidan gida ya shafi lissafi. _**Not Available**_ (Ba Za Suwa Ba) idan kana so makaidan gida ya kasa nuna a matsayin zaɓi. Kuma **Pre-selected** (An Zaɓa Baki) idan kana so wani daga cikin makaidan gida da aka lissafi ya zama na asali.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on the Checkout form (Yanayin Asali: Zaɓar Makaidansa Wurin Gida a cikin shafin Checkout Form)

Idan kana so duk makaidan gida na ka kasance da su a lokacin rikodawa, ko kuma ba ka son yin wani aiki na ƙarin da shi na samarwa ko bayyana makaidan gida a ƙarƙashin kowane kayarwa da kake samarwa. To za ka iya kawai saka zaɓar makaidan gida a ƙarƙashin **Checkout Form** (Shafin Samun Kasuwanci). Don yin hakan, tafiya zuwa **Ultimate Multisite > Checkout Forms** kuma danna **Edit** a ƙarƙashin shafin da kake so ka gyara.

Wannan zai kawo maka shafin **Edit Checkout Form** (Gyara Shafin Samun Kasuwanci). Nemo fildin **Template Selection** (Zaɓar Makaidansa Gida) kuma danna **Edit** a ƙarƙashin shi.

Wani window na musamman (modal window) zai bayyana. A ƙarƙashin fildin **Template Sites** (Makaidan Gida), za ka iya zaɓa da lissafi duk makaidan gida da kake so su kasance da su a lokacin rikodawa. Makaidan gida da kake bayyana daga nan zai kasance da shi ba tare da ya shafi wace kayarwa ce da kai ka zaɓa.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

A kan frontend (wurin gudanar da yanayin gida), abokan ciniki suna gan wa masu zaɓi makaidan gida a lokacin samun kasuwanci kuma za su iya zabi tsarin farko don sabon shafin su.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Tabbabiyoyin Shagwado na'urar (Site Template Options)

Akwai wasu ayyuka na sabbin shagwado na'urar (site templates functions) da za ka iya ɗaukar yin aiki ko kawarawa a ƙarƙashin binciken Ultimate Multisite.

![Tabbabiyoyin shagwado na'urar a cikin binciken Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Ba su ba da damar canza shagwada (Allow Template Switching)

Lokacin da ka samar da wannan zaɓin, za ka ba masu amfani da kai damar canza shagwadan da suka zaɓa a lokacin shigar wajen buɗe asusun da aka ƙirƙira bayan an ƙirƙira asusun da aka yi. Wannan yana da kyau ga abokin ciniki saboda yana ba su damar dawo da zaɓar shagwada idan su ji cewa zaɓin su na farko ba shi da kyau ga bukatun su na musamman.

#### Ba su ba da damar amfani da asusunsu a matsayin shagaba (Allow Users to use their Site as templates)

Tun da masu amfani na subsite suna kashe lokaci wajen gina da zane shafin su, za su iya son yin kwarara (clone) shi kuma amfani da shi a matsayin ɗaya daga cikin shagabadan da ke nan yayin ƙirƙirar wata subsite a kan layi. Wannan zaɓi zai ba su damar yin hakan.

#### Ajiye Wajen Kopi Media a Lokacin Dubawa Shagaba (Copy Media on Template Duplication)

Lokacin da ka bincika wannan zaɓin, za ka ɗauka dukkan media da aka ƙirƙira a shagaban na asali zuwa shafin da aka ƙirƙira saboda. Wannan zai iya canzawa a kowane tsari (plan).

#### **Karin Ba Duk Wajen Harshen Bincike (Prevent Search Engines from indexing Site Templates)**

Shagabadan na asali kamar yadda aka tattauna a wannan makale suna da matsayin "boilerplate" (shafi na gina), amma suna kanin wajen kasancewa a cikin yanarku, wanda hakan yana nufin cewa akwai damar masu bincike su samu. Wannan zaɓi zai ba ka damar ayyana shagabadan don masu bincike su iya ganinsu (index) ko ba.

## Shigar Shagabadan na Asali da Bincike da Gyara Maida (Pre-populating Site Templates with auto search-and-replace)

Ɗaya daga cikin ƙarfin mafi girman Ultimate Multisite shi ne ikon ƙara kowane rubutu, launi, da ayyuka (fields) ga wajen rubuta shiga (registration form). Bayan muna samun wannan bayanan, za mu iya amfani da shi don shigar abubuwan da suka shafi a wasu sassa na template na gida (site template) da aka zaɓa. Sannan, lokacin da ake fitar da wajen gida na sabon wuri (new site), Ultimate Multisite zai mayar da wahalar (placeholders) da bayanan da aka shigar a lokacin rubuta shiga.

Misali, idan kana so ka samu sunan kamfanin amfanin kai a lokacin rubuta shiga kuma ka saka sunan kamfani a wajen gida. A wajen gida na template ɗinka, dole ne ka ƙara wahalarsu (placeholders), kamar yadda ake nuna a hoton da ke ƙasa (wahalarsu dole ne su yi wa tsakanin daddaren curly braces - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Sannan, za ka iya ƙara wajen rubuta shiga mai dalili a cikin wajen gida (checkout form) na kai don samun wannan bayanan. Shi ne wajen gyaran wajen gida da aka yi amfani da shi don zaɓar template yana ba ka damar saka ayyuka masu dadi tare da zaɓar template:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Amfanin kai zai iya cika wannan wajen a lokacin rubuta shiga.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Sannan, Ultimate Multisite zai mayar da wahalarsu (placeholders) da bayanan da abokin ciniki ya ba shi a zahiri.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Maganin matsalar "template mai wahalarsu"

Duk wannan yana da kyau, amma muna fuskantar wata matsala mai rashin kyau: yanzu template na gida na mu - wanda abokan cinikinmu za su iya ziyartar shi - suna cika wahalarsu (placeholders) masu rashin kyau waɗanda ba su ba da wani bayani sosai.

Don haka don magance wannan matsalar, muna ba ku zaɓin saka ƙirar (fake values) ga wuraren da ake amfani da su (placeholders), kuma muna amfani da waɗannan ƙirar don nemawa da mayar da su a kan wuraren template yayin da abokan hulɗa ke zuwa.

Za ka iya samun damar shiga wajen gyara ƙirar template ta hanyar tafiya zuwa **Ultimate Multisite > Settings > Sites**, sannan, a gefen baya (sidebar), danna link ɗin **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Wannan zai kawo ka wurin gyara abubuwan da ake amfani da su, inda za ka iya ƙara waɗannan ƙirar (placeholders) da abubuwan da suka shafi su.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
