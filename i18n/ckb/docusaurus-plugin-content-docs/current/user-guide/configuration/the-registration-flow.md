---
title: پێویستی تۆمارکردنەکان
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# پروسèsی تۆمارکردن (نسخه ۲)

_**توجه مهم: این مقاله به Ultimate Multisite نسخه ۲.x اشاره دارد.**_

کاربران می‌توانند به روش‌های مختلف در شبکه شما ثبت‌نام کنند. آنها می‌توانند از فرم ثبت‌نام شما یا یک لینک قابل اشتراک برای یک طرح پیش‌انتخاب شده استفاده کنند. در اینجا نحوه ثبت‌نام مشتریان شما در شبکه خود با استفاده از مسیرهای موجود و آنچه پس از ثبت‌نام در شبکه شما اتفاق می‌افتد را نشان می‌دهیم.

## استفاده از فرم ثبت‌نام:

این فرآیند استاندارد ثبت‌نام است. شما یک صفحه ثبت‌نام با یک **checkout form** (فرم پرداخت) ایجاد می‌کنید و این جایی خواهد بود که مشتریان شما برای ثبت‌نام در شبکه خود و اشتراک در یک طرح مراجعه خواهند کرد. اگر بخواهید، می‌توانید چندین صفحه ثبت‌نام داشته باشید که هر کدام فرم ثبت‌نام متفاوتی دارند.

صفحه پیش‌فرض برای ثبت‌نام [_**yourdomain.com/register**_ است، اما شما می‌توانید این را در هر زمان در **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** تغییر دهید.

پس از اینکه کاربر به صفحه ثبت‌نام شما می‌رسد (معمولاً با کلیک بر روی دکمه **Sign in** یا **Buy now**)، فرم ثبت‌نام خود را در آنجا مشاهده خواهد کرد.

![فرم ثبت‌نام در صفحه ثبت‌نام نمایش داده شده است](/img/frontend/registration-form.png)

در اینجا نمونه‌ای از فرم پرداخت به صورت نمای فرانت‌اند آورده شده است:

![فرم ثبت‌نام پرداخت فرانت‌اند](/img/config/checkout-frontend-registration.png)

همه کارهایی که باید انجام دهند این است که تمام فیلدهای اجباری - ایمیل، نام کاربری، رمز عبور و غیره... را پر کنند و برای طرح هزینه پرداخت کنند یا اگر برای یک طرح رایگان یا طرح پولی با دوره آزمایشی بدون اطلاعات پرداخت ثبت‌نام می‌کنند، آدرس ایمیل خود را تأیید کنند.

در صفحه "ممنونیم"، پیامی خواهند دید که به آنها می‌گوید آیا نیاز به تأیید آدرس ایمیل دارند یا اینکه وب‌سایتشان از قبل فعال است و می‌توانند استفاده از آن را شروع کنند.

![Thank You page after registration](/img/frontend/registration-thank-you.png)

ئەگەر پێویست بێت کە پەیامەکەت لەسەر ئیمەیڵی تایید بکرێت، ئەوا دەبێت بەڕێوەبەری ئیمەیڵی خۆیان بگەن و سەرنجی لینکەکە بکەن بۆ تاییدکردن. وێبسایتی ئێوە چالاک نەکراوەتەوە ئەگەر ئیمەیڵی ئەوان تایید نەکرێت.

ئەگەر لە پلانی پایتە (paid plan) تۆمار کردبێت یان تاییدکردنی ئیمەیڵ بۆ تۆڕی ئێوە پێویست نییە، وێبسایتی ئەوان بە وردی دوای کۆتایی هاتنی پاشەکەوت (checkout) چالاک دەکرێت و لینکێک بۆ زانیارییەک بۆ سەر داشبۆردەیش دەردەخات.

![Site activated with link to sign in to dashboard](/img/frontend/site-activated.png)

## بەکارهێنانی لینکێکی بەشدار (Shareable Link):

پێوەرکردنی تۆمار بە بەکارهێنانی لینکێکی بەشدار لە بنەڕەتدا هەمان شتە واتی فرمۆتی تۆمار، تەنها جیاوازییەکە ئەوەیە کە بە بەکارهێنانی لینکێکی بەشدار، کڕیارەکانتان دەتوانن پێشوەختەیەک یان قالبێک بۆ بەرهەم یان وێبسایتی لەسەر فرمۆتی پاشەکەوت هەبێت (بنەڕەت بە بەشی Pre-selecting products and templates via URL parameters ببینن) یان ڕەنگە کۆدی کوپنێکی زیاد بکرێت (بنەڕەت بە بەشی Using URL Parameters ببینن).

پێوەرکردنی تۆمار هەمان شتە دەبێت: ئەوان پێویستە ناونیشان، ناوی کاربری، ئیمەیڵی، ناوی وێنەی وێبسایتی و ناونیشانی تایبەت و هتد... پڕ بکەنەوە... بەڵام پلانی یان قالب وێبسایتی لە پێشدا بۆ ئەوان هەڵبژراوە.

### تۆمارکردن بە پارە دەستی (Manual Payments):

ئەگەر ناتوانرێت PayPal، Stripe یان هەر گۆڕی ڕێڕەوی پایتە کە لەلایەن Ultimate Multisite یان کۆکردنەوەکانی تایبەت بەکاری دەهێنیت، بۆ کڕیارەکانت دەتوانیت پارەی دەستی بەکاربهێنیت. بەم شێوەیە، دەتوانیت فاکینۆ (invoice) بۆیان دروست بکەیت بۆ ئەوەی لەسەر پڕۆسیسەرێکی پارەی خۆت کە پێداچوونەوەی زیاتر دەکەیت، پارە ببنارن دوای تۆمارکردنیان لە تۆڕەکەت.

پێوەرکردنی تۆمار بە وردی هەمان شتە واتی سەرەوە، بەڵام لە لاپۆڵەی تۆمارکردن کڕیارەکانت دەبینن پەیامێک کە دەڵێت ئەوەی ئیمەیڵێکیان بۆ دابین دەکرێت لەگەڵ ڕێنمایی زیاتر بۆ تەواوکردنی پارەدان.

![Pagnedarinî ji bo sema aliyê yên taybetdar a kirin](/img/frontend/registration-manual-notice.png)

Hesabê bi ravekirina parast, wê li beriya estirpinên parast ku hûn derdikevin (و هم wê li ser emaila wan jî daweş bike).

![Semnîna parast li beriya vekirina pagnedarinê](/img/frontend/registration-payment-instructions.png)

Emilên parast dikarin bi guwardiyekirîn li **Ultimate Multisite > Settings > Payments** deriyan, paş ku hûn opționu **Manual** (Parast) bi kar kirin:

![Opçyonê manual a parast û xalê ji bo fela semnîna parast](/img/config/manual-gateway-settings.png)

Pêşketî ku mullanên we derine parastkirina manual û derine rapora wan, hûn dikarin **parastkirina manual** bi kar kirin da ku karistana mullan û vebseyê ji bo wan aktife bike.

Ji bo vê yekê, deriya **Ultimate Multisite > Payments** bi naveda parastkirina mullanên karê. Ew bi taybetî wekî **Pending** (Pazdaş) derdikeve.

![Liştoya parastiyan bi parastkirina manual a pazdaş](/img/admin/payments-list.png)

Li naveda parast, hûn dikarin ji bo guwardiyekirînê wê berbiye ku **Completed** (Pêkirin) bike.

![Pêkirina estatîa parastiyê ber bi Completed](/img/admin/payment-status-completed.png)

Paş ku estatîa wê berbiye ji **Completed**, hûn dikarin mesajekên "Activate membership" (Aktife kirin) bibînin. Opçyonê **on** (li ber) bike da ku mullan û vebseyê ku bi karistana wan hatine li ser, aktife bikevin. Pêşketî ji bo **Save Payment** (Sêwirandina parastkirina) jî derîne.

![Opçyonê aktife kirin a membership û butona Save Payment](/img/admin/payment-activate-membership.png)

Mullanên we niha dikarin berbiye li dashboard û hemû taybetxên ku wan ji bo siparin kirine, derdikevin.
