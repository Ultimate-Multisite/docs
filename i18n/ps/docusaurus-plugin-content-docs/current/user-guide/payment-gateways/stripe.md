---
title: Stripe تنظیمول
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# ستراپ گیتوی تنظیم کردن (v2)

_**مهم نکته: این مقاله Ultimate Multisite نسخه ۲.x را می شناسد.**_

شما می‌توانید تا چهار روش پرداخت در صفحه تنظیمات پرداخت ما فعال کنید: Stripe، Stripe Checkout، PayPal و دستی. در این مقاله، خواهیم دید که چگونه با **Stripe** یکپارچه شوید.

## فعال کردن Stripe {#enabling-stripe}

برای فعال کردن Stripe به عنوان یک دروازه پرداخت موجود در شبکه خود، به مسیر **Ultimate Multisite > Settings > Payments** بروید و کلیک روی دکمه کنار **Stripe** یا **Stripe Checkout** در بخش Active Payment Gateways را بزنید تا آن تیک زده شود.

![فعال کردن Stripe در دروازه‌های پرداخت فعال](/img/config/settings-payment-gateways.png)

### Stripe در مقابل Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** این روش فضایی برای وارد کردن شماره کارت اعتباری در طول فرآیند خرید نشان می‌دهد.

![فیلد کارت اعتباری درون خطی Stripe در طول خرید](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** این روش مشتری را در طول فرآیند خرید به یک صفحه Stripe Checkout هدایت می‌کند.

![صفحه ریدایرکت Stripe Checkout در طول خرید](/img/config/settings-payment-gateways.png)

### دریافت کلیدهای API استراپ (Stripe API keys) {#setting-up-stripe-webhook}

وقتی Stripe به عنوان یک دروازه پرداخت فعال شد، شما باید فیلدهای **Stripe Publishable Key** و **Stripe Secret Key** را پر کنید. می‌توانید این موارد را با ورود به حساب Stripe خود دریافت کنید.

_**توجه:** شما می‌توانید **Sandbox mode** (حالت آزمایشی) را فعال کنید تا تست کنید که روش پرداخت کار می‌کند یا نه._

![فیلدهای کلید API استراپ و دکمه حالت sandbox](/img/config/settings-payment-gateways.png)

در داشبورد Stripe خود، روی **Developers** در گوشه بالا سمت راست کلیک کرده و سپس در منوی سمت چپ روی **API Keys** کلیک کنید.

![بخش Developers داشبورد استراپ با API Keys](/img/config/settings-payment-gateways.png)

تاسو یا د **Test Data** (ترڅنګ وګورئ چې د integration په خپل لوړ کاري سایت کې کار کوي) یا نه کاروي، تاسو کولی شئ غوره کړئ. د دې بدلون لپاره، **Viewing test data** toggl کړه.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

د **Publishable key** او **Secret key** څخه هغه मान kopي کړئ چې له **Token** ستونل کې دي او د Ultimate Multisite Stripe Gateway felو کې یې ورسره کړئ. بیا کلیک وکړئ ترڅو **Save Changes** کړي.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## د Stripe Webhook تنظیمول

Stripe webhook events را ملاتوي چې هر کله په **د خپل stripe account** کې کوم لوړ کاري شتمن شي، دا به Ultimate Multisite ته خبر ورکړي.

**Developers** باندې کلیک وکړئ او بیا لور والی منو کې **Webhooks** آیتم غوره کړئ. بیا دوه اړخونو کې ترستې کلیک وکړئ چې **Add endpoint** کړي *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

تاسو یو **Endpoint URL** ته اړتیا لرئ *.* Ultimate Multisite خودکار Endpoint URL جوړوي چې تاسو یې د **Webhook Listener URL** felو په bölüm کې به پیل کړي، د **Ultimate Multisite Stripe Gateway** کې._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL kopي کړئ او په Stripe **Endpoint URL** felو کې ورسره کړئ.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

بیا تاسو باید یو **Event** غوره کړئ *.* د دې انتخاب अन्तर्गत، تاسو باید یوازې **Select all events** کاوه او کلیک وکړئ ترڅو **Add events** کړي. وروسته کلیک وکړئ چې بدلونونه حفظ کړئ (Save Changes).

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

دا چې ستاسو د Stripe پیسې integraton پوره شوې ده!
