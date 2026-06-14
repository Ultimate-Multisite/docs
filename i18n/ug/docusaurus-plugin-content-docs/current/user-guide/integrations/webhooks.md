---
title: ويب هوک
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks-a Birin Bakış (v2)

_**DİKKAT: Bu özellik veya makale ileri düzey kullanıcılar içindir.**_

**Webhook**, Ultimate Multisite gibi bir uygulama veya yazılımın diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Bir webhook, veri veya yükleri olay gerçekleştiği anda başka uygulamalara gönderir, yani siz **veriyi hemen alırsınız**.

Bu, her olay tetiklendiğinde Ultimate Multisite'dan başka bir CRM veya sisteme belirli verileri entegre etmeniz veya iletmeniz gerektiğinde faydalıdır. Örneğin, yeni bir kullanıcı hesabı oluşturulduğunda kullanıcının adını ve e-posta adresini bir e-posta listesine göndermeniz gerekebilir.

## Webhook Nasıl Oluşturulur

Bir webhook oluşturmak için ağ yöneticisi (network admin) paneline gidin. **Ultimate Multisite > Webhooks > Add New Webhook** seçeneğine tıklayın.

![Add New Webhook butonu olan boş Webhooks listesi sayfası](/img/admin/webhooks-list-empty.png)

Ardından webhook yapılandırmasını düzenleyebilirsiniz:

![Ad, Olay ve URL alanları ile Yeni Webhook formu](/img/admin/webhook-add-modal.png)

Yeni bir webhook oluştururken **İsim (Name), URL** ve **Olay (Event)** gibi bilgilerden sorulacaksınız. Webhook'unuz için istediğiniz herhangi bir ismi kullanabilirsiniz. En önemli alanlar URL ve Olaydır.

![URL alanı ve yük önizlemesini gösteren Webhook düzenleme arayüzü](/img/admin/webhook-url-field.png)

URL, Ultimate Multisite'ın **yükü veya veriyi** göndereceği **uç nokta veya hedef** demektir. Veriyi alacak olan uygulama budur.

Zapier, üçüncü taraf uygulamalarla entegrasyonu kolaylaştırmak için kullanıcıların en çok kullandığı çözümdür. Zapier gibi bir platform olmadan, veriyi yakalayıp işleyecek özel bir fonksiyon manuel olarak oluşturmanız gerekecektir. **Ultimate Multisite webhook'unu Zapier ile nasıl kullanacağınız** hakkındaki bu makaleye bakın.

این مقاله در مورد مفهوم اساسی نحوه کار کردن یک webhook و رویدادهای موجود در Ultimate Multisite را بررسی خواهیم کرد. ما از یک سایت شخص ثالث به نام [requestbin.com](https://requestbin.com/) استفاده خواهیم کرد. این سایت به ما اجازه می‌دهد بدون هیچ کدی، یک endpoint ایجاد کنیم و پِی‌لود (payload) را دریافت کنیم. _**سلب مسئولیت: تمام کاری که این سایت انجام می‌دهد این است که به ما نشان دهد داده‌ها دریافت شده‌اند.**_ هیچ پردازشی یا هیچ نوع عملی روی پِی‌لود انجام نخواهد شد.

به [requestbin.com](https://requestbin.com/) بروید و روی Create Request Bin کلیک کنید.

بعد از کلیک روی آن دکمه، اگر قبلاً اکانت دارید وارد شوید یا ثبت نام کنید. اگر قبلاً اکانتی دارید، مستقیماً به داشبورد آن‌ها هدایت می‌شوید. در داشبوردشان، بلافاصله endpoint یا URL را خواهید دید که می‌توانید برای ساخت webhook Ultimate Multisite خود از آن استفاده کنید.

آدرس (URL) را کپی کرده و به Ultimate Multisite برگردید. endpoint را در فیلد URL قرار دهید و یک رویداد را از منوی کشویی انتخاب کنید. در این مثال، ما **Payment Received** (دریافت پرداخت) را انتخاب خواهیم کرد.

این رویداد هر زمان که کاربر پرداختی انجام می‌دهد فعال می‌شود. تمام رویدادهای موجود، توضیحات آن‌ها و پِی‌لودها در پایین صفحه لیست شده‌اند. برای ذخیره کردن webhook روی دکمه **Add New Webhook** (افزودن webhook) کلیک کنید.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

حالا می‌توانیم یک رویداد آزمایشی را به endpoint بفرستیم تا ببینیم آیا webhoook که ایجاد کرده‌ای کار می‌کند یا نه. ما می‌توانیم این کار را با کلیک روی **Send Test Event** (ارسال رویداد آزمایشی) در زیر webhook ساخته شده خود انجام دهیم.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

این یک پنجره تأیید نشان می‌دهد که آزمایش با موفقیت انجام شده است.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

هال وقت _Requestbin_ موقعي‌ن باشیم، اونجا ببینید که بار (payload) gelen test verileriyle birlikte alınmış.

این اساس کارِ webhook و endpoints هست. اگه بخواید یه endpoint سفارشی بسازید، باید یک تابع سفارشی بنویسید تا داده‌هایی رو که از Ultimate Multisite دریافت می‌کنید پردازش کنید.
