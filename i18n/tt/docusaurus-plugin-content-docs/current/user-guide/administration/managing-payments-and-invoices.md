---
title: Төлөмләр һәм чекиләрне ярдү etmek
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ödeme ve Fatura Yönetimi {#managing-payments-and-invoices}

## Ödeme Ayarları {#payment-settings}

Ödeme almaya başlamadan önce, ödeme ile ilgili ayarları yapılandırmanız gerekecek. **Ultimate Multisite → Ayarlar** bölümüne gidin ve **Payment** (Ödeme) sekmesine tıklayın.

![Payment settings tab](/img/admin/settings-payments-top.png)

İşte ödeme ayarları sayfasının tam görünümü:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Genel Ödeme Seçenekleri {#general-payment-options}

Genel ayarlarda şunları yapılandırabilirsiniz:

- **Currency** (Para Birimi) — İşlemler için kullanılan varsayılan para birimi
- **Currency Position** (Para Birimi Konumu) — Para biriminin nerede görüneceği (miktar öncesi/sonrası)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Ödeme Ağ Geçitleri (Payment Gateways) {#payment-gateways}

Ultimate Multisite birden fazla ödeme ağ geçidini destekler. Her birini Ödeme ayarları sekmesinden etkinleştirebilir ve yapılandırabilirsiniz.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mevcut olanlar şunlardır:

- **Stripe** — Stripe üzerinden kredi kartı ödemeleri
- **PayPal** — PayPal ödemeleri
- **Manual** (Manuel) — Çevrimdışı veya özel ödeme işlemleri için

Her ağ geçidinin kendi yapılandırma bölümü vardır; buraya API anahtarlarını ve diğer ayarları girersiniz.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Modu (Sandbox Mode) {#sandbox-mode}

Canlıya geçmeden önce ödeme entegrasyonunuzu test etmek için **Sandbox Modunu** etkinleştirebilirsiniz. Sandbox modu aktifken gerçek ücretlendirme yapılmaz.

## Ödemeleri Görüntüleme {#viewing-payments}

Ağınızdaki tüm işlemleri görmek için Ultimate Multisite altında **Payments** (Ödemeler) sayfasına gidin.

![Payments list](/img/admin/payments-list.png)

Ödemeleri durumlarına göre (tamamlandı, bekleyen, başarısız, iade edilen) filtreleyebilir ve belirli işlemleri arayabilirsiniz.

Оплате tıklayın, чтобы увидеть все подробности, включая позиции заказа, связанное членство, информацию о клиенте и данные платежного шлюза.

## Счета (Invoices) {#invoices}

Ultimate Multisite может автоматически создавать счета за платежи. Вы можете настроить шаблон счета и формат нумерации из настроек Платежей (Payment settings).

Возможности настройки счета включают:

- **Название и адрес компании**, отображаемые в счетах
- **Формат и последовательность нумерации** счета
- **Логотип**, отображаемый в шапке счета
- **Пользовательский текст подвал (footer text)** для условий, примечаний или юридической информации

Чтобы настроить шаблон счета, перейдите в **Ultimate Multisite → Settings → Payment** и найдите настройки, связанные со счетами.
