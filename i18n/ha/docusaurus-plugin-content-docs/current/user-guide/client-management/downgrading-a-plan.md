---
title: Raba tsari
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# تغيییر بسته (v2)

_**نکته مهم: این مقاله به Ultimate Multisite نسخه 2.x اشاره دارد.**_

تغییر یا پایین آوردن یک طرح یا اشتراک کاری است که مشتریان شما ممکن است اگر بودجه محدودی داشته باشند یا تصمیم بگیرند که برای اداره زیرساخت خود نیاز به منابع زیادی ندارند، انجام دهند.

## چطور یک بسته را تغییر دهیم؟

مشتریان شما می‌توانند هر زمان با ورود به داشبورد مدیریت سایت فرعی (subsite admin dashboard) و کلیک بر روی **Change** در صفحه حساب کاربری خود، طرحشان را پایین بیاورند.

![صفحه حساب مشتری با کارت عضویت شما و دکمه تغییر](/img/account-page/membership-change-button.png)

هنگامی که روی دکمه **Change** کلیک می‌کنید، کاربر یا مشتری به صفحه پرداخت (checkout page) هدایت می‌شود جایی که می‌تواند طرح مورد نظر خود را برای تغییر اشتراک انتخاب کند.

![صفحه گزینه‌های کاهش بسته در سمت مشتری](/img/account-page/downgrade-picker.png)

در این مثال، ما طرح را از **Premium** به **Free** پایین می‌آوریم.

برای ادامه کار، کاربر فقط باید روی دکمه **Complete Checkout** کلیک کند. سپس او دوباره به صفحه حساب کاربری با پیامی در مورد تغییر معلق برای عضویت هدایت می‌شود. تغییرات در **چرخه صورتحساب بعدی** مشتری اعمال خواهد شد.

![صفحه حساب که بنر تغییر عضویت معلق را نشان می‌دهد](/img/account-page/pending-change.png)

### وقتی کاربر طرح خود را پایین می‌آورد چه اتفاقی می‌افتد؟

نکته مهم این است که پایین آوردن طرح، تنظیمات موجود در سایت فرعی کاربر را تغییر نمی‌دهد.

این کار به طور خودکار قالب سایت را تغییر نمی‌دهد زیرا تغییر قالب سایت کل زیرساخت سایت فرعی را پاک و ریست می‌کند. این کار برای جلوگیری از از دست رفتن داده‌های غیرضروری است. بنابراین فضای دیسک، تم‌ها، افزونه‌ها و غیره سالم خواهند بود مگر پست‌ها.

Muna fahimtar cewa damar kuya ita ce iyakuna da ku kiyaye a ƙarƙashin kowane tsari (plan), amma dole mu yi la'akari da abin zafi da za a sa ga wajen sabon gida (subsite) idan muka shafa ko canza duk wani tsarin sa.

Ga hanyoyi uku da kake iya bi don rubutu (posts) da ya wuce iyakuna da aka kiyaye a cikin tsarin: **Kiyaye rubutun yanzu** *,* **Tura rubutun zuwa ƙaramin wurin (trash)** *,* ko **Tura rubutun zuwa bayanan brouta (draft)** *.* Za ka iya shafafawa wannan a ƙarƙashin tsarin Ultimate Multisite settings.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Abin da ya faru da kuɗi (payment)

A farkon wuri (version 2.0), ba a buƙatar yin wani gyara kan kuɗin da ake bayarwa saboda tsarin rarraba kuɗi (proration).

Wannan shi ne saboda tsarin zai jira hoton samun kuɗin na yanzu ya **cika sikar kuɗin sa kafin** sabon tsari/samun kuɗi ya fara aiki. Adadin kuɗin sabawa ga sabon tsari zai dace da shi kuma zai shafi a cikin sikar kuɗin gaba na gaba.
