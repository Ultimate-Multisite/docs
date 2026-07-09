---
title: Плагин Билдер ва Сандбокс
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# پلاتین Builder & Sandbox (ساخت و آزمایش محیط) {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0-ی با سیستم **Plugin Builder & Sandbox System** رو معرفی می‌کنه که به شما اجازه می‌ده هوش مصنوعی، افزونه‌های وردپرس رو توی یک محیط ایزوله و امن روی شبکه خودتون بسازه، فعال کنه و مدیریت کنه.

## مروری کلی (Overview) {#overview}

Plugin Builder به دستیار هوش مصنوعی اجازه می‌ده که بر اساس درخواست‌های زبان طبیعی، افزونه‌های سفارشی وردپرسی بنویسه. افزونه‌های تولید شده قبل از اینکه حتی روی سایت زنده تأثیر بگذارند، در یک لایه sandbox اعتبارسنجی، ذخیره و فعال می‌شوند.

موارد استفاده شامل موارد زیر است:

- بدون دخالت توسعه‌دهنده، افزونه‌های کم‌حجم (lightweight utility plugins) تولید کردن.
- ویژگی‌هایی که نیاز به هوک‌های وردپرس یا انواع پست سفارشی دارند را نمونه‌سازی (prototyping) کردن.
- اسکریپت‌های اتوماسیون کوتاه‌مدت برای عملیات دسته‌ای (batch operations) ایجاد کردن.

## تولید افزونه از طریق هوش مصنوعی (Generating a Plugin via AI) {#generating-a-plugin-via-ai}

برای ساختن یک افزونه، رابط چت Gratis AI Agent رو باز کنید و توضیح بدید که به چه چیزی نیاز دارید. مثلاً:

> "یک افزونه بساز که یه اطلاعیه مدیریتی سفارشی روی داشبورد اضافه کنه."

هوش مصنوعی این کارها رو انجام می‌ده:

1. کد PHP افزونه رو با استفاده از تولید کد ساختاریا (structured code generation) تولید می‌کنه.
2. خروجی رو برای خطاهای نحوی و الگوهای ناایمن اعتبارسنجی می‌کنه.
3. افزونه ساخته شده رو توی فروشگاه sandbox ذخیره می‌کنه.
4. یک تأییدیه همراه با اسلاگ (slug) افزونه و دکمه **Activate in Sandbox** برمی‌گردونه.

شما می‌توانید قبل از فعال کردن، در همان رشته گفتگو با پرسیدن سوالات بعدی نتیجه را اصلاح کنید.

## فعال‌سازی در sandbox (Sandbox Activation) {#sandbox-activation}

فعال کردن یک افزونه تولید شده در sandbox با فعال کردن آن روی شبکه زنده فرق داره. محیط sandbox:

- افزونه رو در یک محیط وردپرس ایزوله (wp-env) اجرا می‌کنه.
- هرگونه خطای PHP، هشدار یا تداخل هوک‌ها رو ثبت می‌کنه.
- نتیجه فعال‌سازی رو دوباره توی رابط چت گزارش می‌ده.

برای فعال کردن یک افزونه در sandbox، روی دکمه **Activate in Sandbox** در پاسخ چت هوش مصنوعی کلیک کنید، یا از دستور اسلش (slash command) استفاده کنید:

```
/activate-plugin <plugin-slug>
```

A status message confirms whether activation succeeded or failed. If it fails, the error log will be shown in the chat thread.

## Generated Plugins' Management (Generated Plugins-i Yönetimi) {#managing-generated-plugins}

Sizin yarattığınız pluginler **Gratis AI Agent → Plugin Builder → Manage Plugins** menüsünde listelenir. Bu ekrandan şunları yapabilirsiniz:

| İşlem | Açıklama |
|---|---|
| **Source View (Kaynak Görünümü)** | Tam plugin PHP kodunu inceleyin. |
| **Sandbox'ta Yeniden Etkinleştirme** | Sandbox aktivasyon kontrolünü tekrar çalıştırın. |
| **Ağda Kurulum (Install on network)** | Plugin'i canlı ağınıza dağıtın (manuel onay gerektirir). |
| **Güncelleme (Update)** | AI aracılığıyla yeni bir sürüm sağlayarak mevcut kodu değiştirin. |
| **Silme (Delete)** | Plugin'i sandbox deposundan kaldırın. Önce tüm sitelerden devre dışı bırakır. |

:::warning
**Ağda Kurulum (Install on network)** yarattığınız plugin'i canlı WordPress multisite'ınıza dağıtır. Devam etmeden önce lütfen plugin kodunu kontrol edin. Gratis AI Agent, canlı kurulumu tamamlamadan önce onay istemiş olacaktır.
:::

## Ağ Üzerinde Yarattığınız Bir Plugin Nasıl Kurulur (Installing a Generated Plugin on the Network) {#installing-a-generated-plugin-on-the-network}

Sandbox'ta bir plugin ile memnun kaldığınızda, onu canlı ağınıza kurabilirsiniz:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** adresine gidin.
2. Dağıtmak istediğiniz pluginin yanındaki **Install on Network (Ağda Kur)** seçeneğine tıklayın.
3. Diyaloğu onaylayın. Plugin, `wp-content/plugins/` dizinine kurulur ve ağ düzeyinde etkinleştirilir.

Alternatif olarak, sohbet arayüzündeki slash komutunu kullanabilirsiniz:

```
/install-plugin <plugin-slug>
```

## Plugin Güncellemeleri (Plugin Updates) {#plugin-updates}

Yarattığınız bir plugin'i güncellemek için yeni bir sohbette AI asistanına değişikliği tarif edin:

> "dashboard-notice pluginini sadece yöneticilere bildirim göstermesi için güncelleyin."

AI, mevcut sürümün yanında sandbox içinde yeni bir sürümü oluşturur. Farkı (diff) inceleyip güncelleme uygulanmadan önce onaylamanız gerekir.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder, هر yeni oluşturulan eklentinin kayıtlı hook'larını ve filter'larını analiz etmek için entegre bir **HookScanner** kullanır. HookScanner çıktısı sohbet yanıtında gösterilir ve şunları içerir:

- Kayıtlı Action hook'ları (`add_action` çağrıları).
- Kayıtlı Filter hook'ları (`add_filter` çağrıları).
- Eklenti bağımlılıklarında bulunan herhangi bir hook (bu durumda `vendor/` ve `node_modules/` dizinleri atlanır).

Bu, bir eklentiyi etkinleştirmeden önce onun nasıl davranacağını anlamanı sağlar.

## Security Considerations {#security-considerations}

- Oluşturulan eklentiler, manuel olarak kurulan eklentilerden ayrı bir yerde saklanır ve bunları ağda açıkça kurmadığınız sürece standart WordPress eklenti yönetim ekranından erişilemezler.
- Sandbox, eklenti dosyaları yazılırken dizin geçişini (directory traversal) önlemek için yol doğrulaması kullanır.
- Tehlikeli fonksiyon çağrılarına sahip eklentiler (örneğin, `eval`, `exec`, `system`) doğrulama sırasında işaretlenir ve etkinleştirilmezler.
