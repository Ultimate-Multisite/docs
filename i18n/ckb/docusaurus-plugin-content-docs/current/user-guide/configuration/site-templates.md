---
title: پۆلێوەکانی سایتەکان
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# قالب‌های سایت (نسخه ۲)

_**توجه: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد. اگر از نسخه ۱.x استفاده می‌کنید،**_ **به این مقاله مراجعه کنید.**_

هدف ما هنگام ساخت یک شبکه حرفه‌ای با Ultimate Multisite، خودکار کردن تا حد امکان فرآیندها است در حالی که انعطاف‌پذیری و گزینه‌های مختلفی به مشتریانمان می‌دهیم تا هنگام ساخت وب‌سایت‌هایشان بتوانند انتخاب کنند. یکی از راه‌های آسان برای دستیابی به این تعادل استفاده از قابلیت Site Templates در Ultimate Multisite است.

## قالب سایت چیست؟ {#what-is-a-site-template}

همانطور که از نامش پیداست، یک Site Template یک سایت پایه (boilerplate) است که می‌توان از آن هنگام ساخت سایت‌های جدید در شبکه خود استفاده کرد.

این بدان معناست که شما می‌توانید یک سایت پایه بسازید، افزونه‌های مختلفی را فعال کنید، یک قالب فعال تنظیم کنید و آن را هر شکلی که دوست دارید سفارشی‌سازی کنید. سپس، وقتی مشتری شما یک حساب جدید ایجاد می‌کند، به جای اینکه یک سایت وردپرسی پیش‌فرض با محتوای معنی‌دار در داخلش دریافت کند، کپی از سایت پایه شما را با تمام سفارشی‌سازی‌ها و محتواهای موجود دریافت خواهد کرد.

این عالی به نظر می‌رسد، اما چگونه یک قالب سایت جدید ایجاد کنم؟ این کار به سادگی ممکن است انجام شود.

## ایجاد و ویرایش یک Site Template جدید {#creating-and-editing-a-new-site-template}

Site Templates فقط سایت‌های معمولی در شبکه شما هستند. برای ایجاد یک قالب جدید، می‌توانید به سادگی به **Network Admin > Ultimate Multisite > Sites > Add Site** بروید.

**![دکمه افزودن سایت در صفحه لیست سایت‌ها](/img/config/site-templates-list.png)**

این کار یک پنجره مودال (modal window) باز می‌کند که از شما **عنوان سایت، دامنه/مسیر سایت،** و **نوع سایت** را می‌پرسد. در قسمت کشویی **Site Type** مطمئن شوید که **Site Template** را انتخاب می‌کنید.*

_![پنجره مودال افزودن قالب سایت با منوی کشویی نوع سایت](/img/config/site-templates-list.png)_

شما همچنین می‌توانید یک توضیحات قابل مشاهده برای مشتری اضافه کنید تا توضیح دهید که این قالب شامل چه چیزهایی است:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

لە خاڵە کۆتایی فۆرمەکەدا، دەتوانیت دۆشی **Copy Site** (کپی سایت) یەکێک ببینیت. ئەم تایبەتمەندییە ڕێگە بە تۆ دەدات کە نوی یەک قالب سایت لەسەر بنەمای یەک قالب سایت هەیە دروست بکەیت و وەک سەرەتایی بۆ ئەوەی کات بەسەربرێت، بە شێوەیەکی کاریگەر زیاتر کات بەسەربرێت لە دروستکردنی قالب سایت لە سەرەتادا.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### گۆڕینی ناوەڕۆکی یەک قالب سایت (Site Template) {#customizing-the-contents-of-a-site-template}

بۆ گۆڕینی قالب سایتت، تەنها دەتوانیت بگاتە پۆستێلەکانی داشبۆردی (dashboard panel) و ئەو گۆڕانکارییان بکە کە پێویستیت. دەتوانیت نووسینەکان، صفحاتەکان دروست بکەیت، پلگینەکان چالاک بکەیت و تیۆمە سەرەکییەکە بگۆڕیت. دەتوانیت تەنانەت بگاتە Customizer و هەموو جۆرە ڕێوشوێنی گۆڕینی تایبەتی (customization options) بگۆڕیت.

![Site template edit interface](/img/config/site-template-edit.png)

هەر ئەو داتایانە دەگۆڕێنەوە کاتێک کڕیارێک یەک سایت نوێ لەسەر بنەمای ئەو Site Templateە دروست دەکات.

### ڕێوشوێنی پێشکەوتوو (Advanced Options) {#advanced-options}

ئەگەر بە هەندێک کۆدنووسینی تایبەت دەزانیت، دەتوانیت لە APIی Search and Replace ی ئێمە بەکاربهێنیت بۆ گۆڕینی ئۆتۆماتیکی زانیارییەکان لەسەر سایت نوێ دوای دروستکردنی. ئەمە کارگێرییە بۆ شت وەک گۆڕینی ناوی کۆمپانیا لە ماڵپەڕی About، گۆڕینی ئیمەی پەیوەندیکردن لە ماڵپەڕی Contact، و هتد.

### بەکارهێنانی Site Templates (قالبەکانی سایت) {#using-site-templates}

باشە، تۆ چەندین قالب سایت جیاواز دروست کردووە کە دیزاین، تیۆم و ڕێکخستنە جیاوازیان هەیە. ئێستا چۆن دەتوانیت ئەوان لە تۆڕەکەت بەکاربهێنیت؟

بۆیە، ئێستا دوو ڕێگای سەرەکی هەن کە دەتوانیت بەکاریان بهێنیت (ناوەکانی یەکتر لەسەر یەک کات):

  * پەیوەندیکردنی یەک Site Template بۆ هەموو پلاندانەکانی تۆ (Plans)
**یان**

  * ڕێگەدان بە کڕیارەکان کە خۆیان قالب سایتەکان هەڵبژێرن لە کاتی تۆمارکردندا.

#### ڕێگای ١: دانانی Site Template (Assign Site Template) {#mode-1-assign-site-template}

لە ئەم ڕێگەتانە، کڕیارەکان ناهێنیت دەتوانن قالبێک هەڵبژێرن کاتێک یەکەم جار حساب دروست دەکەن، بەڵکو ئێوە دیاری دەکەیت کە چ القابێک لەسەر هەر پلانی خۆتان بەکاربهێنرێت.

 بۆ ئەوەی ئەم کارە بکەن، دەبێت ببیتە **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

ئەمە دەبێتนำھێنێت بۆ لاپەڕەی **Edit Product**. لە خوارەوە لە بەشی **Product Options**، تابلۆی **Site template** دابگرن و هەڵبژاردنی **Assign Site Template** لە فیلدی دراپ داونەکە بکەن. ئەمە لیستەکەی قالبە سایتەکان دەهێنێت و ڕێگە دەدات یەک قالب سایت هەڵبژێرن کە تایبەت بەو بەرهەمە.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: هەڵبژاردنی قالبەکانی سایت کە بەکارخستراون دەکرێت {#mode-2-choose-available-site-template}

لە ئەم ڕێگەتانە، ئێوە کڕیارەکان لە کاتی تۆمارکردنەوە هەڵبژاردنێک دەدەن. ئەوان دەتوانن لە نێوان قالبە سایتە جیاوازەکانی ئەو پلەیان هەڵبژێرن کە لە تنظیمات بەرهەمەکەدا دیاری کردووە. ئێوە دەرفەت دەدەن کە ڕێگە بدەن یەکamberی قالبە سایتەکان بۆ ئەوەی هەڵبژێرن، لە خوارەوە لە بەرهەمە هەڵبژاردنی پلەیان دەکرێت. ئەمە دەتوانێت بێت وەک ئەوەی چەند کۆمەڵێک قالبەکانی سایت لە ژێر هەر بەرهەمێکدا هەبێت، کە بۆ بەرهەمێکی گرانتر باشە بۆ دیاریکردنی تایبەتمەندی و کارامەی جیاواز.

لە لاپەڕەی **Edit Product**دا، لە خێڕی **Product Options**دا، تابلۆی **Site template** بخوێنەرەوە و هەڵبژاردنی **Choose Available Site Template** لە فیلدی دراپ-دا بکە. ئەم کارە لیستەکەی تابلۆدە دەهێنێت و ڕێگە بە تۆ دەدات ئەو تابلۆیە هەڵبژێریت کە دەتەوێت بە ئاسان بێت. دەتوانیت ئەمە بە هەڵبژاردنی ڕەفتارەکەی (Behavior) ئەنجام بدەیت: **Available** ئەگەر دەتەوێت تابلۆەکە لە لیستەکەدا بێت. **Not Available** ئەگەر دەتەوێت تابلۆکە وەک کێشەیەکی هەڵبژاردن نیشان بدرێت. و **Pre-selected** ئەگەر دەتەوێت یەکێک لە تابلۆکانی لیستەکە بە شێوەیەکی پیش‌دۆزراو هەڵبژێردرا بێت.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Modeی سەرەکی: هەڵبژاردنی Site template لە فۆرمەکەدا بۆ Checkout {#default-mode-site-template-selection-on-the-checkout-form}

ئەگەر دەتەوێت هەموو تابلۆکانی سایتەکەت لە کاتی تۆمارکردن بە ئاسان بێت، یان دەتەوێت زیاتر کار نەکات بۆ دانان یان دیاریکردنی تابلۆکانی سایت لە ژێر هەر بەرهەمێک کە دروست دەکەیت. ئەوا دەتوانیت هەڵبژاردنی Site template لە ژێر **Checkout Form**ی خۆت بکە. بۆ ئەم مەبەست، بگە بهێڵ **Ultimate Multisite > Checkout Forms** و لە خوارەوەی فۆرمەکەی کە دەتەوێت ڕێکبخەریش بکە، **Edit** بگرە.

ئەم کارە لاپەڕەی **Edit Checkout Form** دەهێنێت. فیلدی **Template Selection** بخوێنەرەوە و لە خوارەوەی ئەو فیلدەدا، **Edit** بگرە.

کاتی ئەوە، پەنجەرەیەکی modal دەبێت. لە ژێر فیلدی **Template Sites**، دەتوانیت هەموو تابلۆکانی سایتەکەت کە دەتەوێت لە کاتی تۆمارکردن بە ئاسان بێت، هەڵبژێریت و لیست بکەیتەوە. ئەو تابلۆکانەی لەم شوێنە دیاری دەکەیت، بە شێوەیەکی سەرەکی دەبن، هەر بەرهەمێک کە بەکارهێنەر هەڵبژاردراوە، بەهۆی ئەوەی تۆ ڕێکخستووە.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

لە پێشەوە (frontend)، کڕیارەکان تابلۆکەرچۆکی لە کاتی کۆتاییکردندا دەبینن و دەتوانن دیزاینی سەرەتایی بۆ سایت نوێی خۆیان هەڵبژێرن.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Paramètrèyên Templateyê Website {#site-template-options}

Heqetîtiya din a funksiyona templateyê web site hene ku tu dikarin aktivaş bikin an jî neaktivaş bikin li bajarirên Ultimate Multisite.

![Paramètrâyên templateyê web site di bajarirên Ultimate Multisite de](/img/config/settings-sites-templates-section.png)

#### Îzin a Guherîna Template {#allow-template-switching}

Aktivaşkirina vê opsiyonê bi dikare izin bidawîan ji bo guhertina template'i wan biken ji ber çêtirê nûkirinê de piştî ku hesab û web site hatine çêkir. Ev ji siyaka manderê ji van aya re gelek faydanî ye, chunke ew dikarin templateyek din bi gihîştina xwe yê ne bestkirin a wan ji bo hewcedariyên taybetxweş de biken.

#### Îzin a Karên ji Templateyên wan wekî Web Siteeyan bikar anîn {#allow-users-to-use-their-site-as-templates}

Ji ber ku karên subsite ji van derê wekî wekî web siteyek xwe li din xwediyê wekî çêtir û rêzîna wan diyar kirine, ew dikarin wê klon bikin û wekî yek ji templateyên web siteeyan ku li ser şێوەزê nû subsiteyek din li bajarira we hene, bikar biken. Ev opsiyonê ji wan bi karê xwe re bi taybetxweşiyê izin bidawî.

#### Kopkirina Media li Demokrîzîna Templateyê {#copy-media-on-template-duplication}

Aktivaşkirina vê opsiyonê kopirine media yên li ser web siteyek template hatibe li web siteyek nû deriyan. Ev dikare ji aliyê planên cihê ve hatine guhertin.

#### **Pazikan ji bo Kurdên Navînî (Search Engines) ji Templateyên Web Siteeyan** {#prevent-search-engines-from-indexing-site-templates}

Templateyên web siteeyan wekî ku di vê maddede de bi wan şerê kirine, boilerplate in lê hîn jî ji gelem ji bajarira we ne, ku wê ji aliyê kurdên navînî ve hatibe dikarin dîtin. Ev opsiyonê bi dikare izin bidawî ku templateyên web siteeyan piştine ku kurdên navînî dikarin wan derbêjin (index bikin).

## Pêkirina Templateyên Web Siteeyan bi kurdina avtomatî a çêkirin û gihîştinê (auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

یکی از قدرتمندترین ویژگی‌های Ultimate Multisite این است که شما می‌توانید متن، رنگ و فیلدهای دلخواه را روی فرم ثبت‌نام اضافه کنید. وقتی آن داده‌ها را دریافت کردیم، می‌توانیم از آن‌ها برای پر کردن پیش‌فرض محتوا در بخش‌های خاص قالب انتخاب شده استفاده کنیم. سپس، وقتی سایت جدید منتشر می‌شود، Ultimate Multisite جایگزین این مکان‌هایی که با نگهدارنده (placeholder) مشخص شده‌اند، با اطلاعات واقعی ثبت‌شده هنگام ثبت‌نام می‌کند.

به عنوان مثال، اگر می‌خواهید نام شرکت کاربر نهایی را در حین ثبت‌نام دریافت کرده و به طور خودکار نام شرکت را روی صفحه اصلی سایت قرار دهید. شما باید این مکان‌ها را در صفحه اصلی قالب سایت خود اضافه کنید، مثلاً همانطور که در تصویر زیر است (مکان‌های نگهدارنده باید با آکولادهای دوتایی - {{placeholder_name}} احاطه شوند).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

سپس، می‌توانید به سادگی یک فیلد ثبت‌نام متناظر را در فرم تسویه حساب خود اضافه کنید تا آن داده‌ها را دریافت نمایید. همان ویرایشگر فرم تسویه حساب که برای انتخاب قالب استفاده می‌شود، به شما اجازه می‌دهد فیلدهای سفارشی را در کنار انتخاب قالب قرار دهید:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

سپس مشتری شما می‌تواند آن فیلد را در طول ثبت‌نام پر کند.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite سپس مکان‌های نگهدارنده را به طور خودکار با داده‌هایی که توسط مشتری ارائه شده جایگزین می‌کند.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### حل مشکل "قالب پر از مکان‌های نگهدارنده" {#solving-the-template-full-of-placeholders-problem}

همه این‌ها عالی است، اما ما با یک مشکل آزاردهنده روبرو می‌شویم: حالا قالب‌های سایت ما - که مشتریان می‌توانند به آن‌ها مراجعه کنند - پر از مکان‌های نگهدارنده نامرتبی هستند که اطلاعات زیادی ندارند.

بۆ چارەسەرکردنی ئەمە، ئێمە دەتوانن ئەو ئەپشۆیانەی کە بۆ ناو جێگرەوەکان (placeholders) دەنووسین، بە بەها وێنەیی دیاری بکەین، و لەو بەهایانە بەکاری دەهێنین بۆ گەڕان و گۆڕینی ناوەکانیان لەسەر ئەو سایتە قالبەکاندا کە کڕیارەکانتان سەردانی دەکەن.

دەتوانیت دەستگەیشتن بە ویرتۆر (editor)ی جێگرەوەکانی قالب بە لیژنەی **Ultimate Multisite > Settings > Sites** بگەیت، و پاشان لەو لایەنی کاتژمێری (sidebar)، سەر پەڕەی **Edit Placeholders** بڵێیت.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

ئەم کارە دەبێت تۆ بگەیەنێت بۆ ویرتۆرەکەی ناوەڕۆکی جێگرەوەکان، کە لەوێ دەتوانیت جێگرەوەکان زیاد بکەیت و ناوەڕۆکی تایبەتی هەر یەکێکیان بەکاری بهێنیت.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
