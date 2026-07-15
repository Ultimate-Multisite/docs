---
title: خطة yükseltmek
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# پلن آپگرود qilish (v2)

_**مهم یادداشت: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

مشتریان شما می‌توانند در هر زمان پلن‌های خود را ارتقا دهند. آن‌ها یا می‌توانند به یک پلن دیگر ارتقا دهند یا هر سرویس یا بسته‌های اضافی که شما در شبکه خود ارائه می‌دهید را خریداری کنند.

در این آموزش، ما بررسی خواهیم کرد که مشتریان چگونه می‌توانند پلن خود را ارتقا دهند و پس از فرآیند ارتقاء چه اتفاقی می‌افتد.

برای ارتقای پلن، مشتریان باید به داشبورد خود دسترسی پیدا کرده و به صفحه **Account** بروند.

![داشبورد زیرمجموعه مشتری با لینک منوی Account قابل مشاهده](/img/account-page/account-menu.png)

در صفحه Account، وضعیت عضویت فعلی و پلن مرتبط با آن برایشان نمایش داده می‌شود. برای ارتقا به یک پلن دیگر، باید روی دکمه **Change** در گوشه سمت راست بخش **Your Membership** کلیک کنند.

![صفحه Account کارت Your Membership با دکمه Change](/img/account-page/membership-change-button.png)

آن‌ها به فرم پرداخت هدایت می‌شوند که در آن تمام پلن‌های موجود نمایش داده خواهند شد.

همچنین، اگر فقط می‌خواهند یک سرویس یا بسته خاص را خریداری کنند (مثل تعداد بازدیدهای نامحدود یا فضای دیسک در مثال ما)، و نه اینکه پلن خود را ارتقا دهند، می‌توانند **سرویس‌ها و بسته‌های موجود برای پلن فعلی خود** را نیز ببینند.

![انتخابگر ارتقاء نشان‌دهنده پلن‌ها و بسته‌های موجود از سمت مشتری](/img/account-page/upgrade-picker.png)

پس از انتخاب محصولی که می‌خواهند خریداری کنند، میزان پرداخت فعلی خود را - به جز هر اعتبار موجود - و اینکه در تاریخ صورتحساب بعدی چقدر هزینه خواهند کرد، مشاهده خواهند کرد.

معمولاً، اگر محصول یک پلن دیگر باشد و پرداخت بین هزینه عضویت انجام شود، آن‌ها برای مبلغ پرداختی روی پلن اول اعتبار دریافت خواهند کرد.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Əgər onlar hazır abunəlikdən heç bir şey dəyişməyəcək bir plan və ya paket seçsəlarsa, onlara bunu izah edən bir mesaj göstəriləcək.

![Selected plan does not change the subscription notice](/img/account-page/upgrade-no-change.png)

Checkout tamamlandıktan sonra, yeni məhsul(lar) müştərilərin hesabına əlavə olunaca və yeni məhsul(ların) bütün limitləri və funksiyaları dərhal ona əlavə ediləcək: ziyarətlər, disk sahəsi, postlar və s.

##

## Upgrade and Downgrade Paths (Yüksəlmə və Aşağı İnme Yolları) {#upgrade-and-downgrade-paths}

Hər bir məhsulunuzda **Up & Downgrades** tabı olacaq. Bu tabdakı ilk seçim **Plan Group** adlı bir sahədir.

**Plan grupları**, Ultimate Multisite-a bəzi planların eyni "ailəyə" aid olduğunu və buna görə də yüksəlmə/aşağı inme yolu seçimlərini qurmaq üçün istifadə edilməsini bildirməyə imkan verir.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Məsələn, sizdə **Free plan** (Pulsuz plan), **Basic Plan** (Əsas Plan) və **Premium Plan** (Premium Plan) mövcuddur. Siz istifadəçilər **Free Plan** altında abunə olunanların yalnız **Premium Plan**a yüksəlməsinə icazə vermək istəyirsiniz və onların "Basic Plan"ı yüksəlmə seçimi kimi görməsini istəmirsiniz. Bütün etməli olduğunuz şey, aşağıdakı ekran görüntülərində göstərildiyi kimi həm Free Plan, həm də Premium Plan üçün eyni plan qrup adını təyin etməkdir.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

این کار این است که به Ultimate Multisite بگوییم در شبکه یک «خانواده» از طرح‌ها وجود دارد که نامش **High End** است. وقتی برای ارتقاء یا کاهش سطح سرویس پیشنهاد می‌دهیم، فقط طرح‌هایی که از همین خانواده هستند را به عنوان گزینه برای کاربر نمایش دهیم.
