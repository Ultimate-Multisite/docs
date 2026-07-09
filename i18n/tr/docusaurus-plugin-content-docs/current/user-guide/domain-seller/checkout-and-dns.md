---
title: Ödeme Alanı ve Müşteri DNS'i
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Alanı ve Müşteri DNS Yönetimi

## Alan Adı Seçimi checkout alanı

**Alan Adı Seçimi** alanı, müşterilere sitelerinin alan adını nasıl alacaklarına dair bir seçenek sunan bir checkout öğesidir. Alan adı satışını etkinleştirmek için herhangi bir checkout formuna ekleyin.

### Alanı bir checkout formuna ekleme

1. **Network Admin › Ultimate Multisite › Checkout Forms** bölümüne gidin
2. Bir checkout formu açın veya oluşturun
3. Checkout düzenleyicide **Alan Ekle**’ye tıklayın
4. Alan listesinden **Alan Adı Seçimi**’ni seçin
5. Alan seçeneklerini yapılandırın (aşağıya bakın)
6. Formu kaydedin

### Alan seçenekleri

**Alan adı modları** — Müşterinin hangi sekmeleri göreceğini seçin. Her mod bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir:

| Mod | Ne yapar |
|---|---|
| **Alt alan adı** | Müşteri ağınızda ücretsiz bir alt alan adı kullanır (örn. `mysite.yournetwork.com`). Ödeme gerekmez. |
| **Yeni Alan Adı Kaydet** | Müşteri yeni bir alan adı arar ve yapılandırılmış sağlayıcınız üzerinden kaydeder. Fiyatlandırma için eşleşen alan adı ürününü kullanır. |
| **Mevcut Alan Adı** | Müşteri zaten sahip olduğu bir alan adını eşler. Kayıt ücreti yoktur. Alan adı otomatik olarak sitesine eşlenir. |

**Varsayılan mod** — Üç modun tamamı etkinleştirildiğinde ilk hangi sekmenin açılacağı. Alan adı kaydını isteğe bağlı tutmak için **Alt alan adı** olarak, satın alımları teşvik etmek için **Yeni Alan Adı Kaydet** olarak ayarlayın.

**Alan adı ürünü** — İsteğe bağlı olarak bu alanı belirli bir alan adı ürününe sabitleyin. Ayarlanmazsa addon, müşterinin aradığı TLD’ye göre eşleşen ürünü otomatik olarak seçer.

### Alan adı sahibi iletişim alanları

Bir müşteri **Yeni Alan Adı Kaydet** sekmesini seçtiğinde, checkout formu alan adı sahibi iletişim alanlarını satır içinde ekler:

- Ad / Soyad
- E-posta adresi
- Adres (satır 1, şehir, eyalet/il, posta kodu, ülke)
- Telefon numarası

Bunlar tüm registrar’lar tarafından zorunlu tutulur ve kayıt API çağrısı yapılmadan önce doğrulanır. Telefon numaraları, registrar’ların beklediği `+CC.NNN` uluslararası biçimine otomatik olarak formatlanır.

### Otomatik oluşturulan site URL’si

Bir müşteri bir alan adı kaydettiğinde veya eşlediğinde, site URL alanı seçilen alan adından otomatik olarak doldurulur. Müşterilerin ayrı bir URL alanı doldurması gerekmez.

### Arama davranışı

- Alan adı uygunluğu, müşteri yazarken AJAX ile gerçek zamanlı olarak kontrol edilir
- Tercih edilen alan adı uygun olmadığında alternatif TLD önerileri gösterilir
- Fiyatlandırma canlı olarak alınır ve net biçimde gösterilir (kayıt fiyatı, yenileme fiyatı, isteğe bağlı WHOIS gizliliği ücreti)
- Kupon kodları, diğer tüm ürünlerde olduğu gibi alan adı ürünlerine de uygulanır

**Arama yanıt hızını ayarlama:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Alan adı arama formuna özel alanlar ekleme:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Müşteri DNS yönetimi

Müşteriler, kayıtlı alan adları için DNS kayıtlarını **My Account** sayfasından, alan adlarının girişi altında yönetebilir.

### Desteklenen kayıt türleri

| Tür | Kullanım |
|---|---|
| **A** | Ana makine adını IPv4 adresine eşleyin |
| **AAAA** | Ana makine adını IPv6 adresine eşleyin |
| **CNAME** | Başka bir ana makine adına işaret eden bir takma ad oluşturun |
| **MX** | Mail exchange sunucusunu ayarlayın |
| **TXT** | SPF, DMARC, doğrulama veya diğer metin kayıtları ekleyin |

### Hangi sağlayıcılar DNS yönetimini destekler?

DNS yönetimi (kayıt ekleme, düzenleme, silme) **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** ve **Openprovider** ile kullanılabilir. **Hostinger** alan adları, Domain Seller üzerinden nameserver’ları güncelleyebilir; barındırılan alan adları için DNS kayıtları, çekirdek Hostinger alan adı eşleme entegrasyonu tarafından yönetilir. Namecheap, GoDaddy ve NameSilo alan adları durum ve sona erme bilgilerini gösterir, ancak DNS doğrudan registrar’ın kontrol panelinden yönetilmelidir.

### Varsayılan DNS kayıtları

Bir alan adı kaydedildiğinde otomatik olarak uygulanan varsayılan DNS kayıtlarını yapılandırabilirsiniz. **Settings › Domain Seller › Default DNS Records** bölümüne gidin.

Varsayılan kayıt değerleri iki token’ı destekler:

| Token | Şununla değiştirilir |
|---|---|
| `{DOMAIN}` | Kayıtlı alan adı (örn. `example.com`) |
| `{SITE_URL}` | Müşterinin sitesi için WordPress site URL’si |

**Örnek — apex alan adını ve www’yi sunucu IP’nize yönlendirin:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS görüntüleme ve düzenleme

Network admin’ler, **Network Admin › Ultimate Multisite › Domains** içindeki alan adı düzenleme sayfasından herhangi bir müşteri alan adı için DNS kayıtlarını görüntüleyebilir ve düzenleyebilir.
