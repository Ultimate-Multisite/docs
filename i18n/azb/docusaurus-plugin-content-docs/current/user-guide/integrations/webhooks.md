---
title: وب‌هوک‌لار
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) اوستونه ایلک باخیش

_**دقت: بیلین کی بو اؤزلیک یاخود مقاله ایلیری سوّیه ایشلدنلر اوچوندور.**_

بیر **webhook** بیر app یا Ultimate Multisite کیمی یازیلیمین باشقا اویقولامالارا گرچک‌زامانلی بیلگی وئرمک یولودور. webhook، اولای باش وئرن کیمی دیتانی یا payload-لاری باشقا اویقولامالارا چاتدیرار، یعنی **دیتانی دئرhal آلارسینیز.**

بو، هر دفعه بیر اولای تئتریلندیکده، Ultimate Multisite-دن باشقا CRM یا سیستمه معیّن دیتانی انتگره ائتمک یا اؤتورمک لازیم اولدوقدا یارارلیدیر. مثال اوچون، هر دفعه یئنی ایشلدن Account-ی یارادیلاندا، ایشلدنین آدینی و ایمیل آدرئسینی بیر میل لیستینه گؤندرمک لازیمدیر.

## بیر webhook نئجه یاراداق {#how-to-create-a-webhook}

webhook یاراتماق اوچون network admin dashboard-ینیزه گئدین. **Ultimate Multisite > Webhooks > Add New Webhook** اوستونه کلیک ائدین.

![Add New Webhook دؤیمه‌سی اولان بوش Webhooks لیست صحیفه‌سی](/img/admin/webhooks-list-empty.png)

سونرا webhook قورولوشونو دَییشدیره بیلرسینیز:

![Name، Event و URL ساحه‌لری اولان Add New Webhook فورمو](/img/admin/webhook-add-modal.png)

یئنی webhook یاراداندا، سیزدن **Name، URL،** و **Event** کیمی بیلگی‌لر ایسته‌نیله‌جک. webhook-ونوز اوچون ایسته‌دیینیز هر آدی ایشلده بیلرسینیز. ائن اؤنم‌لی ساحه‌لر URL و Event-دیر.

![URL ساحه‌سینی و payload اؤن‌باخیشینی گؤستره‌ن Webhook دَییشدیرمه آراوزو](/img/admin/webhook-url-field.png)

URL، Ultimate Multisite-ین **payload یا دیتانی** گؤندره‌جه‌یی **endpoint یا مقصد**‌دیر. بو، دیتانی آلاجاق اویقولامادیر.

Zapier، ایشلدنین 3rd party اویقولاما ایلە انتگراسیانی آسانلاشدیرماق اوچون ایشلته‌دیی ائن یایقین حَل‌دیر. Zapier کیمی بیر پلاتفورم اولماسا، دیتانی توتوب ایشله‌مک اوچون اؤزونوز custom function یاراتمالی‌سینیز. **Zapier ایلە Ultimate Multisite webhook-ونو نئجه ایشلتمک** باره‌سینده بو مقاله‌یه باخین.

بو مقاله‌ده، webhook-ون نئجه ایشله‌دیی‌نین اساسی مفهومونا و Ultimate Multisite-ده مۆوجود اولای‌لارا باخاجایق. [requestbin.com](https://requestbin.com/) آدلی بیر 3rd party سایت ایشلده‌جه‌ییک. بو سایت بیزه هیچ کود یازمادان endpoint یاراتماغا و payload-و توتماغا ایمکان وئرر. _**سلب مسئولیت: اونون گؤره‌جه‌یی یالنیز دیتانین آلینمیش اولدوغونو بیزه گؤستر‌مکدیر.**_ payload اوزرینه هیچ پردازش یا هر هانسی بیر عمل گؤرولمه‌یه‌جک.

[requestbin.com](https://requestbin.com/)-ا گئدین و Create Request Bin-ه کلیک ائدین.

او دؤیمه‌یه کلیک ائتدیکدن سونرا، اگر آرتیق Account-ونوز وارسا لاگین ائتمه‌یینیزی، یوخسا قاید اولماغینیزی ایسته‌یه‌جک. اگر آرتیق Account-ونوز وارسا، سیزی دۆز اونلارین Dashboard-ونا آپاراجاق. اونلارین Dashboard-وندا، Ultimate Multisite webhook-ونوزو یارادارکن ایشلده بیله‌جه‌یینیز endpoint یا URL-ی دئرhal گؤره‌جکسینیز.

ایندی URL-ی کپیالایین و Ultimate Multisite-ه قاییدین. endpoint-ی URL ساحه‌سینه قویدون و dropdown-دان بیر اولای سئچین. بو مثالدا **Payment Received** سئچه‌جه‌ییک.

بو اولای، هر دفعه بیر ایشلدن اؤدَنیش ائدنده تئتریلنیر. مۆوجود بوتون اولای‌لار، اونلارین آچیقلاماسی و payload-لاری صحیفه‌نین آشاغیسین‌دا لیستله‌نیب. webhook-و ساخلاماق اوچون **Add New Webhook** دؤیمه‌سینه کلیک ائدین.

![Payment Received سئچیلmiş webhook اولای dropdown-و](/img/admin/webhook-event-picker.png)

ایندی یاراتدیغیمیز webhook-ون ایشله‌ییب-ایشله‌مه‌دیی‌نی گؤرمک اوچون endpoint-ه test اولایی گؤندره بیلریک. بونو یاراتدیغیمیز webhook-ون آلتیندا **Send Test Event**-ه کلیک ائتمک‌له ائده بیلریک.

![بیر قورولموش webhook و Send Test عملی‌نی گؤستره‌ن Webhooks لیستی](/img/admin/webhooks-list-populated.png)

بو، test-ین اوغورلو اولدوغونو دئیه‌ن بیر تَصدیق پنجره‌سی گؤستریر.

![test payload گؤندریلندن سونرا webhook test اولای نتیجه‌سی](/img/admin/webhook-test-result.png)

ایندی _Requestbin_ سایتینا قاییتساق، payload-ون بیر آز test دیتاسی ایله آلینمیش اولدوغونو گؤره‌جه‌ییک.

بو، webhook و endpoint-لرین نئجه ایشله‌دیی‌نین اساسی پرینسیپیدیر. اگر custom endpoint یاراتماق ایسته‌ییرسینیزسه، Ultimate Multisite-دن آلدیغینیز دیتانی ایشله‌مک اوچون custom function یاراتمالی‌سینیز.
