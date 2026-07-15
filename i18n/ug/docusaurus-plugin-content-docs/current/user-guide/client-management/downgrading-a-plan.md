---
title: خطة تكميلى قيد تلاشتۇرۇش
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# پلanı پایین آوردن (v2)

_**مهم توجه: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

پایین آوردن یک طرح یا اشتراک کاری یکی از کارهایی است که مشتریان شما ممکن است انجام دهند، اگر بودجه محدودی داشته باشند یا تصمیم بگیرند که برای اداره زیرساخت خود نیازی به منابع زیادی ندارند.

## چگونه پلن را پایین بیاوریم؟ {#how-to-downgrade-a-plan}

مشتریان شما می‌توانند هر زمان با وارد شدن به داشبورد مدیریت سایت فرعی (subsite admin dashboard) و کلیک بر روی **Change** در صفحه حساب کاربری خود، پلنشان را پایین بیاورند.

![صفحه حساب مشتری با کارت عضویت شما و دکمه Change](/img/account-page/membership-change-button.png)

هنگامی که روی دکمه **Change** کلیک می‌شود، کاربر یا مشتری به صفحه پرداخت (checkout page) هدایت می‌شود جایی که می‌تواند طرحی را انتخاب کند تا اشتراک خود را تغییر دهد.

![صفحه گزینه‌های پایین آوردن پلن در سمت مشتری](/img/account-page/downgrade-picker.png)

در این مثال، ما پلن را از **Premium** به **Free** پایین می‌آوریم.

برای ادامه کار، کاربر فقط باید روی دکمه **Complete Checkout** کلیک کند. سپس او دوباره به صفحه حساب کاربری باز خواهد گشت و پیامی در مورد تغییر معلق برای عضویت نمایش داده می‌شود. این تغییرات در **چرخه صورتحساب بعدی** مشتری اعمال خواهند شد.

![صفحه حساب که بنر تغییر عضویت معلق را نشان می‌دهد](/img/account-page/pending-change.png)

### وقتی کاربر پلن خود را پایین می‌آورد چه اتفاقی می‌افتد؟ {#what-happens-when-a-user-downgrades-their-plan}

مهم است بدانید که پایین آوردن پلن، تنظیمات موجود در زیرساخت سایت کاربر را تغییر نمی‌دهد.

این کار به طور خودکار قالب سایت را تغییر نمی‌دهد زیرا تغییر قالب سایت کل زیرساخت فرعی را پاک و ریست می‌کند. این کار برای جلوگیری از از دست رفتن داده‌های غیرضروری است. بنابراین فضای دیسک، تم‌ها، پلاگین‌ها و غیره سالم خواهند بود مگر پست‌ها.

Biz anladıkki sizin asıl endişeniz her bir planda belirlediğiniz limitler ve kotalarla ilgili, ancak biz herhangi bir yapılandırmayı silerseniz veya değiştirirseniz kullanıcının alt sitesine vereceği zararı da göz önünde bulundurmamız gerekiyor.

Planın belirlediği limiti aşan gönderiler için size 3 farklı seçenek sunuyoruz: **Gönderileri olduğu gibi tutmak** *,* **Gönderileri çöp kutusuna taşımak** *,* veya **Gönderileri taslak olarak taşımak** *. Bunu Ultimate Multisite ayarlarından yapılandırabilirsiniz.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Ödeme ne olur? {#what-happens-to-the-payment}

2.0 sürümünde, prorsiyonlama (proration) açısından ödemede artık herhangi bir ayarlama yapmanıza gerek kalmıyor.

Bunun nedeni, sistemin mevcut üyeliğin fatura döngüsünü **tamamlamasını bekleyip** yeni planın/üyeliğin etkili olmasını sağlamasıdır. Yeni üyelik için belirlenen yeni ödeme miktarı otomatik olarak bir sonraki fatura döngüsünde uygulanacak ve ücretlendirilecektir.
