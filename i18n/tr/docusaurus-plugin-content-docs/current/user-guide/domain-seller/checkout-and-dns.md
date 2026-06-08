---
title: Ödeme Alanı ve Müşteri DNS'i
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Ödeme Alanı ve Müşteri DNS Yönetimi

## Alan Adı Seçimi (Domain Selection) Ödeme Alanı

**Alan Adı Seçimi** alanı, müşterilere sitelerinin alan adını nasıl alacakları konusunda bir seçenek sunan bir ödeme formu bileşenidir. Alan adı satışı yapabilmek için bunu herhangi bir ödeme formuna ekleyin.

### Alanı bir ödeme formuna ekleme

1. **Network Admin › Ultimate Multisite › Checkout Forms** yolunu izleyin.
2. Bir ödeme formu açın veya oluşturun.
3. Ödeme düzenleyicisinde **Add Field** (Alan Ekle) butonuna tıklayın.
4. Alan listesinden **Domain Selection** (Alan Adı Seçimi) seçeneğini seçin.
5. Alan seçeneklerini yapılandırın (aşağıya bakın).
6. Formu kaydedin.

### Alan Seçenekleri

**Domain modes** (Alan Adı Modları) — Müşterinin hangi sekmeleri göreceğini seçin. Her mod bağımsız olarak etkinleştirilebilir veya devre dışı bırakılabilir:

| Mode (Mod) | Ne yapar |
|---|---|
| **Subdomain** | Müşteri, ağınızdaki ücretsiz bir alt alan adı kullanır (örneğin, `mysite.yournetwork.com`). Ödeme gerekmez. |
| **Register New Domain** | Müşteri yeni bir alan adı arar ve yapılandırılmış sağlayıcınız aracılığıyla kaydeder. Fiyatlandırma için eşleşen alan adı ürününü kullanır. |
| **Existing Domain** | Müşteri zaten sahip olduğu bir alan adını eşleştirir. Kayıt ücreti yoktur. Alan adı otomatik olarak sitelerine bağlanır. |

**Default mode** (Varsayılan Mod) — Üç mod da etkinleştirildiğinde, hangi sekme ilk açılır. Alan adı kaydını isteğe bağlı tutmak için **Subdomain** olarak, satın alımları teşvik etmek için ise **Register New Domain** olarak ayarlayın.

**Domain product** (Alan Adı Ürünü) — İsteğe bağlı olarak bu alanı belirli bir alan adı ürününe sabitleyin. Ayarlanmazsa, eklenti otomatik olarak müşterinin aradığı TLD'ye göre eşleşen ürünü seçer.

### Kayıt Sahibi İletişim Alanları

Bir müşteri **Register New Domain** (Yeni Alan Adı Kaydet) sekmesini seçtiğinde, ödeme formu otomatik olarak aşağıdaki kayıt sahibi iletişim alanlarını ekler:

- Ad / Soyad
- E-posta adresi
- Adres (satır 1, şehir, eyalet/vilayet, posta kodu, ülke)
- Telefon numarası

Bunlar tüm kayıt kuruluşları tarafından zorunlu tutulur ve kayıt API çağrısı yapılmadan önce doğrulanır. Telefon numaraları, kayıt kuruluşlarının beklediği `+CC.NNN` uluslararası formatına göre otomatik olarak biçimlendirilir.

### Otomatik Oluşturulan Site URL'si

Bir müşteri bir alan adı kaydettiğinde veya eşleştirdiğinde, site URL alanı seçilen alan adı üzerinden otomatik olarak doldurulur. Müşterilerin ayrı bir URL alanı doldurmasına gerek yoktur.

### Arama Davranışı

- Alan adı uygunluğu, müşteri yazarken AJAX ile gerçek zamanlı olarak kontrol edilir.
- Tercih edilen alan adı kullanılamadığında alternatif TLD önerileri gösterilir.
- Fiyatlandırma canlı çekilir ve açıkça görüntülenir (kayıt fiyatı, yenileme fiyatı, isteğe bağlı WHOIS gizlilik ücreti).
- Kupon kodları, diğer herhangi bir ürünle aynı şekilde alan adı ürünlerine uygulanır.

**Arama yanıt verme hızını ayarlama:**

```php
// Yavaş bağlantılarda API çağrılarını azaltmak için debounce gecikmesini (milisaniye) artırın
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Alan adı arama formuna özel alanlar ekleme:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Ek notlar',
    ];
    return $fields;
});
```

---

## Müşteri DNS Yönetimi

Müşteriler, kayıtlı alan adları için DNS kayıtlarını **My Account** (Hesabım) sayfasından, alan adlarının girişleri altında yönetebilirler.

### Desteklenen Kayıt Türleri

| Type (Tür) | Kullanım Alanı |
|---|---|
| **A** | Host adını IPv4 adresine eşleştirir |
| **AAAA** | Host adını IPv6 adresine eşleştirir |
| **CNAME** | Başka bir host adına işaret eden bir takma ad oluşturur |
| **MX** | E-posta değişim sunucusunu ayarlar |
| **TXT** | SPF, DMARC, doğrulama veya diğer metin kayıtları ekler |

### Hangi sağlayıcılar DNS yönetimini destekliyor?

DNS yönetimi (kayıt ekleme, düzenleme, silme) **OpenSRS**, **ResellerClub** ve **Enom** ile mevcuttur. Namecheap, GoDaddy ve NameSilo alan adları durum ve sona erme bilgilerini gösterir, ancak DNS doğrudan kayıt kuruluşunun kontrol panelinde yönetilmelidir.

### Varsayılan DNS Kayıtları

Bir alan adı kaydedildiğinde otomatik olarak uygulanacak varsayılan DNS kayıtlarını yapılandırabilirsiniz. **Settings › Domain Seller › Default DNS Records** yolunu izleyin.

Varsayılan kayıt değerleri iki jetonu destekler:

| Token (Jeton) | Ne ile değiştirilir |
|---|---|
| `{DOMAIN}` | Kayıtlı alan adı (örneğin, `example.com`) |
| `{SITE_URL}` | Müşterinin sitesi için WordPress site URL'si |

**Örnek — kök alan adını ve www'yi sunucu IP'nize yönlendirme:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Yönetici: DNS görüntüleme ve düzenleme

Network yöneticileri, **Network Admin › Ultimate Multisite › Domains** sayfasındaki alan adı düzenleme sayfasından herhangi bir müşteri alan adının DNS kayıtlarını görüntüleyebilir ve düzenleyebilir.
