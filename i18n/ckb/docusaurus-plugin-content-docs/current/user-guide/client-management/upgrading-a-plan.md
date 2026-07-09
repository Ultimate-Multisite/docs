---
title: نوياندنی پلانی
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# به‌روزرساندن پکیج (نسخه ۲) {#upgrading-a-plan-v2}

_**توجه مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

مشتریان شما می‌توانند در هر زمان از پکیج‌های خود ارتقاء دهند. آن‌ها می‌توانند یا به یک پکیج دیگر ارتقاء یابند یا هر سرویس یا بسته‌های اضافی که شما در شبکه خود ارائه می‌دهید را خریداری کنند.

در این آموزش، ما بررسی خواهیم کرد که چگونه مشتریان می‌توانند پکیج خود را ارتقا دهند و چه اتفاقی پس از فرآیند ارتقاء رخ می‌دهد.

برای ارتقاء پکیج خود، مشتریان باید به داشبورد خود دسترسی پیدا کرده و به صفحه **Account** بروند.

![داشبورد زیرساخت مشتری با لینک منوی Account قابل مشاهده](/img/account-page/account-menu.png)

در صفحه Account، وضعیت عضویت فعلی و پکیجی که به آن مرتبط است نمایش داده می‌شود. برای ارتقاء به یک پکیج دیگر، باید روی **Change** در گوشه سمت راست بخش **Your Membership** کلیک کنند.

![صفحه Account کارت Your Membership با دکمه Change](/img/account-page/membership-change-button.png)

آن‌ها به فرم پرداخت هدایت می‌شوند که در آن تمام پکیج‌های موجود نمایش داده خواهند شد.

آن‌ها همچنین می‌توانند **سرویس‌ها و بسته‌های موجود برای پکیج فعلی خود** را ببینند، در صورتی که فقط بخواهند یک سرویس یا بسته خاص (مثل تعداد بازدیدهای نامحدود یا فضای دیسک در مثال ما) را خریداری کنند و نه ارتقاء پکیج.

![انتخابگر ارتقاء نشان‌دهنده پکیج‌ها و بسته‌های موجود از سمت مشتری](/img/account-page/upgrade-picker.png)

پس از انتخاب محصولی که می‌خواهند خریداری کنند، میزان مبلغ مورد نیاز فعلی خود را ببینند - به جز هرگونه اعتبار موجود - و اینکه در تاریخ صورتحساب بعدی چقدر هزینه خواهند کرد.

معمولاً، اگر محصول پکیج دیگری باشد و پرداخت بین هزینه عضویت انجام شود، آن‌ها برای مبلغ پرداختی روی پکیج اول اعتبار دریافت خواهند کرد.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

He biyanin, heti planek anar ba kuwazek nimanî ya berê xwe ji bo vê yekê.

![Notice li de planek selektif ne gelek guhertin a abonman](/img/account-page/upgrade-no-change.png)

Pişika pazarvanî bi dawî kirina sipê, pênkoçên nû yên produkt (product(s)) ji hesabên wan e şteynkirin û hem vê hemû sîmetr û taybetmendiyên produktên nû bi rastî li wê şteynkirin: berxwedan, mezinahiya disk, post, hewara...

##

## Pêşvekirina û Rêxistinîn (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Li her yek ji produktên xwe، hûn êyek tabêk bi navê **Up & Downgrades** hebe. Seçîya yekem li vê tabêka ye, çi şeye **Plan Group** tê yanîn.

**Plan groups** ئەو شتەیە ku bi wê ve dikare hînim Ultimate Multisite bide zanibin ku planên taybetî ji hev roja ne, û ji ber vê yekê, ji bo çuştelana seçinjên up/downgrade yên li ser wan têne bikaranîn.

![Tabêka editkirina produkt Up and Downgrades bi field-a Plan Group](/img/config/product-upgrades-plan-group.png)

Mişte, wekî nêmin, hûn hene **Free plan**، **Basic Plan** û **Premium Plan**. Hûn dixwazin karên ku li ser **Free Plan** abonman anîn ne, bi **Premium Plan** upgrade bin û hûn dixwazin ji wan vê yekê ne bibînin ku "Basic Plan" wekî seçijeya upgrade ye. Hem ku hûn hene ku hûn navê plan group-a yawê ji bo hem Free Plan û Premium Plan yanîn, wekî li wêneyên paşê derdike.

![Pajaya produkt Free Plan bi plan group-a High End tê yanîn](/img/config/product-upgrades-free.png)

![Pajaya produkt Premium Plan bi plan group-a High End tê yanîn](/img/config/product-upgrades-premium.png)

ئەم کارە دەبێت بڵێیت بە Ultimate Multisite کە لە تۆڕەکەدا چەند پلەیەکی "خێزان"ی ناوداریکراو هەیە بە ناوی **High End**. کاتێک پێشکەشکردنی زیاتر یان کەمبوونەوەی پلەکان دەکەیت، تەنها پلەکان لە هەمان خێزانێک دەبێت وەک بژاردەیەک بۆ بەکارهێنەرەکە نیشان بکرێن.
