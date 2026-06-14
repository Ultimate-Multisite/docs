---
title: Saurin Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# شمول دادن Ultimate Multisite با Zapier

در یکی از مقالات، ما در مورد [Webhooks](webhooks.md) صحبت کردیم و اینکه چطور می‌توان از آن‌ها برای اتصال به اپلیکیشن‌های شخص ثالث استفاده کرد.

استفاده از Webhooks کمی پیچیده است زیرا نیاز به دانش پیشرفته در کدنویسی و دریافت محموله‌ها (payloads) دارد. استفاده از **Zapier** راهی است که شما می‌توانید از این مشکل دور شوید.

Zapier با بیش از ۵۰۰۰ اپلیکیشن ادغام شده است که ارتباط بین برنامه‌های مختلف را آسان‌تر می‌کند.

شما می‌توانید **Triggers** (محرک‌ها) ایجاد کنید که وقتی رویدادهایی در شبکه شما رخ می‌دهد فعال شوند (مثلاً یک حساب ساخته می‌شود و رویداد `account_create` را تحریک می‌کند) یا **Actions** (اقدامات) را روی شبکه خود برای واکنش به رویدادهای خارجی انجام دهید (مثلاً عضویت جدیدی را در شبکه Ultimate Multisite خود ایجاد کنید).

این امکان‌پذیر است زیرا **Triggers** و **Actions** مربوط به **Ultimate Multisite Zapier** توسط [REST API](https://developer.ultimatemultisite.com/api/docs/) پشتیبانی می‌شوند.

## چطور شروع کنیم

ابتدا، Ultimate Multisite را در لیست اپلیکیشن‌های Zapier جستجو کنید. یا می‌توانید روی [این لینک](https://zapier.com/apps/wp-ultimo/integrations) کلیک کنید.

به داشبورد خود بروید و برای تنظیم یک Zap جدید، دکمه **+** **Create Zap** را در نوار کناری سمت چپ بزنید.

![داشبورد Zapier با دکمه Create Zap](/img/admin/webhooks-list.png)

شما به صفحه ایجاد Zap هدایت خواهید شد.

در کادر جستجو عبارت "wp ultimo" را تایپ کنید. برای انتخاب گزینه نسخه **Beta** کلیک کنید.

![جستجوی WP Ultimo در لیست اپلیکیشن‌های Zapier](/img/admin/webhooks-list.png)

بعد از انتخاب برنامه خود، رویداد موجود را انتخاب کنید: **New Ultimate Multisite Event**.

![انتخاب محرک New Ultimate Multisite Event](/img/admin/webhooks-list.png)

حالا باید به Zapier اجازه دسترسی به **شبکه شما** بدهیم. کلیک کردن روی **Sign in** (ورود)، پنجره جدیدی را باز می‌کند که نیاز به **API credentials** دارد.

![Prompt na shiga Zapier don samuniyoyin API credentials](/img/admin/webhooks-list.png)

Zuwa cikin dashboard na sarbin amfani (network admin panel) kuma tafiya zuwa **Ultimate Multisite > Settings** > **API & Webhooks**, sannan ka nemo sashi da ake kira API Settings.

Zaɓi zaɓin **Enable API** saboda yana buƙata don wannan haɗin ya yi aiki.

![Wurin tsarin API da Webhooks tare da zaɓin API Settings da Enable API](/img/admin/settings-api-webhooks.png)

Yi amfani da ikon **Copy to Clipboard** (Kopa zuwa clipboard) a kan makamakin API Key da API Secret, sannan ka dabba wa waɗannan ƙima a shafin haɗin (integration screen).

A fildin URL (URL field), ka saka URL ɗin gaba na network, tare da cikakken tsari (protocol) (HTTP ko HTTPS).

![Shafin haɗin Zapier tare da makamakin API Key, Secret, da URL fields](/img/admin/webhooks-list.png)

Danna maɓallin **Yes, Continue** (Eh, ci gaba) don tafiya zuwa mataki na gaba. Idan komai ya yi kyau, za ka samu binciken sabon asusunka! Danna don **Continue** (Ci gaba) don samar da wani trigger na sabon lokaci.

## Yadda ake ƙirƙirar Trigger na sabon lokaci (new Trigger)

Yanzu da aka haɗa asusinka, za ka iya ganin ayyukan da ke nan. Bari mu zaɓi ayyukan **payment_received** don wannan koyarwar.

![Zaɓar ayyukan payment_received a cikin trigger na Zapier](/img/admin/webhooks-list.png)

Bayan an zaɓi ayyukansa kuma ka danna **continue**, za ka ga wani **test step** (mataki na gwaji).

![Matakin gwajin test na Zapier don trigger](/img/admin/webhooks-list.png)

A wannan matakan, Zapier zai gwada idan iya **samun bayanin da ya shafi wannan ayyukan**. A ayyukannin gaba na irin wannan, za a aiko bayanai tare da wannan tsarin.

![Gwajin trigger na Zapier ya kammala cikin nasara tare da payload](/img/admin/webhooks-list.png)

لە کورسی:

لە ڕێنمایی ئێمەدا تاقیکردنەوەکە بە سەرکەوتوویی تەواو بووە و زانیاری نیشاندنی پەیامەکە (payload example information) دەگەڕێتەوە. ئەم زانیارییە بۆ ئێمە بەسوودە لە کاتی دروستکردنی اکشنەکاندا. تریگرەکەت ئێستا دروستکراوە و ئامادەیە بۆ پەیوەستکردن بە ئەپڵیکاتەکانی دیکە.

## چۆن اکشن (Actions) دروست بکەین

اکشنەکان زانیاری لە تریگرەکانی دیکە دەگرنەوە بۆ دروستکردنی نوێی پۆلێنکردن لە تۆڕەکەتدا.

لە **درستکردنی هەنگاوی اکشن**، تۆ Ultimate Multisite **Beta** و ئەو ڕەفتارەی **Create Items on Ultimate Multisite** دەبنە چاودێری.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

لە هەنگاوە دوایەکە، یان خودی ئۆتنتیکەیشنەکەت دروست دەکەیت، وەک ئەوەی لە **How to start** کردین، یان یان ئۆتنتیکەیشنێکی دروستکراو دەبنە چاودێری. لەم ڕێنماییەدا، ئێمە هەمان ئۆتنتیکەیشنەکە بەکار دەکەین کە پێشتر دروستکردووین.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### ڕێکخستنی اکشن (Setting up the Action)

ئەمە **هەنگاوی سەرەکیی اکشنە**یە و لێرە شتەکان کمیان جیاوازن. یەکەم زانیاری کە دەبنە چاودێری، **Item** (بۆلۆم)ە. Item بریتییە لە **مودێلی زانیاریی تۆڕەکەت** وەک **Customers, Payments, Sites, Emails** و دیکە.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

کاتێک دەبنە چاودێری، فۆرمەکە **پۆلێنکردنی ئەو فیلدە پێویست و ئەوەکان کە ئاسایی نین** بۆ ئەو Itemە دیاریکراو دەگەیەنێتەوە.

بۆ نموونە، کاتێک دەبنە چاودێری Item-ی **Customer**، فیلدەکانی فۆرمەکە هەموو ئەو شتان دەهێنن کە پێویستن بۆ دروستکردنی مکوڕێکی نوێ لە تۆڕدا.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

پاش پڕکردنەوەی هەموو فیلدەکانی **required** (پێویست) و 클릭 کردن بە continue، شاشەیەکی کۆتایی دەبینیت کە ئەو فیلدە پڕکراون و ئەو فیلدانەی پڕ نەکراون دەردەخات.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Bayan kana kammala gwajin kuma ya yi nasara, aiki ka dace (configured). Haka kuma yana da muhimmanci ka bincika kan shahar ku ko wani abu ya ƙunshi wannan aiki ta hanyar gwaji.
