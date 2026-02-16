---
title: Ödemeleri ve Faturaları Yönetme
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Ödemeleri ve Faturaları Yönetme

## Ödeme Ayarları

Ödeme almaya başlamadan önce, ödemeyle ilgili ayarları yapılandırmanız gerekir. **Ultimate Multisite → Ayarlar** bölümüne gidin ve **Ödeme** sekmesine tıklayın.

![Ödeme ayarları sekmesi](/img/admin/settings-payments-top.png)

### Genel Ödeme Seçenekleri

Genel ayarlarda şunları yapılandırabilirsiniz:

- **Para Birimi** — İşlemler için kullanılan varsayılan para birimi
- **Para Birimi Konumu** — Para birimi simgesinin nerede görüneceği (tutardan önce/sonra)

![Ödeme ağ geçidi ayarları](/img/admin/settings-payments-options.png)

### Ödeme Ağ Geçitleri

Ultimate Multisite birden fazla ödeme ağ geçidini destekler. Her birini Ödeme ayarları sekmesinden etkinleştirebilir ve yapılandırabilirsiniz.

![Ödeme ağ geçidi yapılandırması](/img/admin/settings-payments-gateways.png)

Kullanılabilir ağ geçitleri şunlardır:

- **Stripe** — Stripe üzerinden kredi kartı ödemeleri
- **PayPal** — PayPal ödemeleri
- **Manuel** — Çevrimdışı veya özel ödeme işlemleri için

Her ağ geçidinin, API anahtarlarını ve diğer ayarları girdiğiniz kendi yapılandırma bölümü vardır.

![Ek ağ geçidi ayarları](/img/admin/settings-payments-gateways-2.png)

### Sandbox Modu

Canlıya geçmeden önce ödeme entegrasyonunuzu test etmek için **Sandbox Modu**'nu etkinleştirebilirsiniz. Sandbox modu aktifken gerçek bir ücretlendirme yapılmaz.

## Ödemeleri Görüntüleme

Ağınızdaki tüm işlemleri görmek için Ultimate Multisite altındaki **Ödemeler** sayfasına gidin.

![Ödeme listesi](/img/admin/payments-list.png)

Ödemeleri duruma göre filtreleyebilir (tamamlandı, beklemede, başarısız, iade edildi) ve belirli işlemleri arayabilirsiniz.

Satır öğeleri, ilişkili üyelik, müşteri bilgileri ve ödeme ağ geçidi verileri dahil tüm ayrıntıları görmek için bir ödemeye tıklayın.

## Faturalar

Ultimate Multisite ödemeler için otomatik olarak fatura oluşturabilir. Fatura şablonunu ve numaralandırma biçimini Ödeme ayarlarından özelleştirebilirsiniz.

Fatura özelleştirme seçenekleri şunlardır:

- Faturalarda görüntülenen **şirket adı ve adresi**
- **Fatura numaralandırma** biçimi ve sırası
- Fatura başlığında görüntülenen **logo**
- Şartlar, notlar veya yasal bilgiler için **özel altbilgi metni**

Fatura şablonunu özelleştirmek için **Ultimate Multisite → Ayarlar → Ödeme** bölümüne gidin ve faturayla ilgili ayarları bulun.
