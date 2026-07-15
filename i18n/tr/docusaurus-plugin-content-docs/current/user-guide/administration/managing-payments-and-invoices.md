---
title: Ödemeleri ve Faturaları Yönetme
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Ödemeleri ve Faturaları Yönetme

## Ödeme Ayarları {#payment-settings}

Ödeme almaya başlamadan önce, ödemeyle ilgili ayarları yapılandırmanız gerekir. **Ultimate Multisite → Ayarlar** bölümüne gidin ve **Ödeme** sekmesine tıklayın.

![Ödeme ayarları sekmesi](/img/admin/settings-payments-top.png)

Ödeme ayarları sayfasının tam görünümü:

![Ödeme ayarları tam sayfa](/img/admin/settings-payments-full.png)

### Genel Ödeme Seçenekleri {#general-payment-options}

Genel ayarlarda şunları yapılandırabilirsiniz:

- **Para Birimi** — İşlemler için kullanılan varsayılan para birimi
- **Para Birimi Konumu** — Para birimi simgesinin nerede görüneceği (tutardan önce/sonra)

![Ödeme gateway ayarları](/img/admin/settings-payments-options.png)

### Ödeme Gateway'leri {#payment-gateways}

Ultimate Multisite birden fazla ödeme gateway'ini destekler. Her birini Ödeme ayarları sekmesinden etkinleştirip yapılandırabilirsiniz.

![Ödeme gateway yapılandırması](/img/admin/settings-payments-gateways.png)

Kullanılabilir gateway'ler şunları içerir:

- **Stripe** — Stripe üzerinden kredi kartı ödemeleri
- **PayPal** — PayPal ödemeleri
- **Manual** — Çevrimdışı veya özel ödeme işleme için

Her gateway'in API anahtarlarını ve diğer ayarları girdiğiniz kendi yapılandırma bölümü vardır.

![Ek gateway ayarları](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Canlıya geçmeden önce ödeme entegrasyonunuzu test etmek için **Sandbox Mode**'u etkinleştirebilirsiniz. Sandbox mode aktif olduğunda gerçek ücretlendirme yapılmaz.

## Ödemeleri Görüntüleme {#viewing-payments}

Ağınızdaki tüm işlemleri görmek için Ultimate Multisite altındaki **Ödemeler** sayfasına gidin.

![Ödemeler listesi](/img/admin/payments-list.png)

Ödemeleri duruma göre (tamamlandı, beklemede, başarısız, iade edildi) filtreleyebilir ve belirli işlemleri arayabilirsiniz.

Satır kalemleri, ilişkili üyelik, müşteri bilgileri ve ödeme gateway verileri dahil olmak üzere tüm ayrıntılarını görmek için bir ödemeye tıklayın.

## Faturalar {#invoices}

Ultimate Multisite ödemeler için otomatik olarak faturalar oluşturabilir. Fatura şablonunu ve numaralandırma biçimini Ödeme ayarlarından özelleştirebilirsiniz.

Fatura özelleştirme seçenekleri şunları içerir:

- **Şirket adı ve adresi** faturalarda görüntülenir
- **Fatura numaralandırma** biçimi ve sırası
- **Logo** fatura başlığında görüntülenir
- **Özel alt bilgi metni** şartlar, notlar veya yasal bilgiler için

Fatura şablonunu özelleştirmek için **Ultimate Multisite → Ayarlar → Ödeme** bölümüne gidin ve faturayla ilgili ayarları arayın.
