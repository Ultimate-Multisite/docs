---
title: Қолайлиқ Қолданар Маълуматларни Ўрнатиш
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# يدوَر پرداخت‌ها را تنظیم کردن (نسخه ۲)

_**نکته مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

پرداخت‌های دستی راهی است که اگر **Stripe** یا **PayPal** برای کاربران شما در دسترس نباشد، روش‌های پرداخت دیگری ارائه دهید. این می‌تواند انتقال وجه (wire)، انتقال بانکی یا هر روش پرداخت دیگری باشد که کاربران شما محلی دارند.

## نحوه فعال کردن پرداخت‌های دستی

تنظیم پرداخت دستی خیلی ساده است. فقط کافیست آن را در بخش دروازه‌های پرداخت (payment gateways) فعال کنید و دستورالعمل‌های دقیقی در مورد اینکه کاربر باید چگونه پول را ارسال کند، وارد نمایید.

ابتدا به **Ultimate Multisite > Settings > Payments** بروید. زیر قسمت **Payment Gateways**، گزینه **Manual** را روشن (toggle on) کنید. خواهید دید که یک جعبه با عنوان **Payment Instructions** برای شما ظاهر می‌شود.

اطلاعاتی که مشتری برای انجام پرداخت نیاز دارد را در این جعبه اضافه کنید. می‌توانید جزئیات حساب بانکی خود و ایمیلتان را قرار دهید تا مشتری بتواند تأیید پرداخت را به شما ارسال کند، مثلاً.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

این رابط تنظیمات دروازه دستی است:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

بعد از تنظیم آن، فقط روی **Save Settings** کلیک کنید و کار تمام شده است. وقتی کاربران در شبکه شما ثبت‌نام می‌کنند، پیامی دریافت خواهند کرد که به آن‌ها اطلاع می‌دهد دستورالعمل‌های تکمیل خرید را از شما دریافت خواهند کرد.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

و آن‌ها همچنین در صفحه **Thank You** (تشکر) با دستورالعمل‌های پرداخت شما مواجه خواهند شد.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## تأیید پرداخت‌های دستی

يدوي پرداخت را تأیید کنید، به منوی **Payments** در نوار سمت چپ بروید. در آنجا می‌توانید تمام پرداخت‌های شبکه خود و جزئیات آن‌ها، از جمله **status** (وضعیت) را ببینید. یک پرداخت دستی تا زمانی که شما آن را به صورت دستی تغییر ندهید، همیشه وضعیت **Pending** (در انتظار) خواهد داشت.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

با کلیک بر روی **reference code** (کد مرجع)، صفحه پرداخت را وارد کنید. در این صفحه شما تمام جزئیات پرداخت در انتظار، مانند reference ID (شناسه مرجع)، محصولات، زمان‌ها و موارد دیگر را خواهید داشت.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

در ستون سمت راست، می‌توانید وضعیت پرداخت را تغییر دهید. آن را به **Completed** (تکمیل شده) تغییر دادن و گزینه **Activate Membership** (فعال‌سازی عضویت) را روشن کردن باعث می‌شود سایت مشتری شما فعال شود و عضویت او فعال گردد.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
