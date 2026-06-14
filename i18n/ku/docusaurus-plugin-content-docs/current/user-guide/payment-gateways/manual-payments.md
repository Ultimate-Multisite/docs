---
title: راستکردنی پاداشتەکان بە شێوەیەکی دەستی
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# تنظیم پرداخت‌های دستی (نسخه ۲)

_**نکته مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

پرداخت‌های دستی راهی است که اگر **Stripe** یا **PayPal** برای کاربران شما در دسترس نباشد، می‌توانید روش‌های پرداخت دیگری ارائه دهید. این می‌تواند انتقال وجه (wire)، انتقال بانکی یا هر روش پرداخت دیگری باشد که کاربران شما به صورت محلی در اختیار دارند.

## نحوه فعال کردن پرداخت‌های دستی

تنظیم پرداخت دستی خیلی ساده است. فقط کافیست آن را در بخش Payment Gateways فعال کنید و دستورالعمل‌های دقیقی در مورد اینکه کاربر باید چگونه پرداخت را ارسال کند، وارد نمایید.

ابتدا به **Ultimate Multisite > Settings > Payments** بروید. زیر قسمت **Payment Gateways**، گزینه **Manual** را روشن (toggle on) کنید. خواهید دید که یک جعبه با عنوان **Payment Instructions** برای شما ظاهر می‌شود.

اطلاعاتی که مشتری برای انجام پرداخت نیاز دارد را در این جعبه اضافه کنید. می‌توانید جزئیات حساب بانکی خود و ایمیلتان را قرار دهید تا مشتری بتواند تأیید پرداخت را به شما ارسال کند، مثلاً.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

این رابط تنظیمات دروازه دستی است:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

پس از تنظیم آن، فقط روی **Save Settings** کلیک کنید و کار تمام است. وقتی کاربران در شبکه شما ثبت‌نام می‌کنند، پیامی دریافت خواهند کرد که به آن‌ها اطلاع می‌دهد دستورالعمل‌های شما برای تکمیل خرید را دریافت خواهند کرد.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

و همچنین یک پیام در صفحه **Thank You** خود با دستورالعمل‌های پرداخت‌تان دریافت خواهند کرد.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## تأیید پرداخت‌های دستی

بۆ تاییدکردنی پاشەکەوتی بانکی بە شێوەیەکی دەستی، بگواشبە **Payments** (پاشەکەوتەکان) مینیوی لە لایەنی لێ بۆ لایەنی لێ. لەوێ دەتوانیت هەموو پاشەکەوتەکان لە تۆڕەکەت و وردەکارییەکانیان ببینیت، لەوانەش **status** (دۆخی). هەر پاشەکەوتی دەستی هەمیشە دۆخی **Pending** (چاوەڕوان) دەبێت تا ئەوەی خۆت بگۆڕیت.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

بە ڕێگەی 클릭کردن لەسەر **reference code** (کۆدی ئاماژە)، بۆ لاپەڕەی پاشەکەوتەکە دەچویت. لەم لاپەڕەیە هەموو وردەکاریی پاشەکەوتی چاوەڕوانکراوەکەت هەیە، وەک reference ID، بەرهەمەکان، تایمەستامپەکان و زیاتر.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

لە ستوونی ڕاستدا دەتوانیت دۆخی پاشەکەوتەکە بگۆڕیت. گۆڕینی ئەوە بۆ **Completed** (کەتمان) و هەڵگرتنی کارکردن لەسەر **Activate Membership** (چالاککردنی ئەندازیاری ئەستۆ) دەبێت، سایتەکەت چالاک بکات و ئەندازیاری کڕیارەکە چالاک دەبێت.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
