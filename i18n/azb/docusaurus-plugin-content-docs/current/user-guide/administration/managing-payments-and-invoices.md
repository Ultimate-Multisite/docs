---
title: Ödemeler ve Faturaların Yönetimi
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ödeme ve Faturaları Yönetme

## Ödeme Ayarları {#payment-settings}

Ödeme almaya başlamadan önce, ödeme ile ilgili ayarları yapılandırmanız gerekiyor. **Ultimate Multisite → Ayarlar** sayfasına gidin ve **Ödeme** sekmesine tıklayın.

![Payment settings tab](/img/admin/settings-payments-top.png)

İşte ödeme ayarları sayfasının tam görünümü:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Genel Ödeme Seçenekleri {#general-payment-options}

Genel ayarlarda şunları yapılandırabilirsiniz:

- **Para Birimi** — İşlemlerde kullanılan varsayılan para birimi
- **Para Birimi Konumu** — Para birimi sembolünün nerede görüneceği (miktar öncesi/sonrası)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Ödeme Ağ Geçitleri (Payment Gateways) {#payment-gateways}

Ultimate Multisite birden fazla ödeme ağ geçidini destekler. Her birini Ödeme ayarları sekmesinden etkinleştirebilir ve yapılandırabilirsiniz.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Mevcut ağ geçitleri şunları içerir:

- **Stripe** — Stripe üzerinden kredi kartı ödemeleri
- **PayPal** — PayPal ödemeleri
- **Manuel** — Çevrimdışı veya özel ödeme işlemleri için

Her ağ geçidinin, API anahtarlarını ve diğer ayarları girdiğiniz kendi yapılandırma bölümü bulunur.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Modu {#sandbox-mode}

Canlıya geçmeden önce ödeme entegrasyonunuzu test etmek için **Sandbox Modu**'nu etkinleştirebilirsiniz. Sandbox modu aktifken gerçek ücret alınmaz.

## Ödemeleri Görüntüleme {#viewing-payments}

Tüm ağınızdaki işlemleri görmek için Ultimate Multisite altındaki **Ödemeler** sayfasına gidin.

![Payments list](/img/admin/payments-list.png)

Ödemeleri durumlarına göre (tamamlanmış, bekliyor, başarısız, iade edilmiş) filtreleyebilir ve belirli işlemleri arayabilirsiniz.

Bir ödemeye tıklayarak, kalem detaylarını, ilişkili üyeliği, müşteri bilgilerini ve ödeme ağ geçidi verilerini içeren tüm detaylarını görebilirsiniz.

## Faturalar {#invoices}

Ultimate Multisite, ödemeler için otomatik olarak fatura oluşturabilir. Fatura şablonunu ve numaralandırma formatını Ödeme ayarlarından özelleştirebilirsiniz.

Fatura özelleştirme seçenekleri şunları içerir:

- Faturalarda gösterilecek **Şirket adı ve adresi**
- **Fatura numaralandırma** formatı ve sırası
- Fatura başlığında gösterilecek **Logo**
- Şartlar, notlar veya yasal bilgiler için **Özel alt bilgi metni**

Fatura şablonunu özelleştirmek için **Ultimate Multisite → Ayarlar → Ödeme** sayfasına gidin ve fatura ile ilgili ayarlara bakın.
