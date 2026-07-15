---
title: دومين منتجләре һәм аркалары
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Ürünleri ve Fiyatlandırma

Domain ürünleri, fiyatlandırmayı, TLD'leri (alan uzantıları), WHOIS gizliliğini ve sağlayıcı seçimini nasıl kontrol edeceğinizi gösterir. Her domain ürünü, ekstra bir **Domain Ayarları** sekmesine sahip standart bir Multisite Ultimate ürünüdür.

## Domain ürünü oluşturma {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** bölümüne gidin.
2. **Add New** (Yeni Ekle) butonuna tıklayın.
3. Ürün tipini **Domain** olarak ayarlayın.
4. **Domain Settings** sekmesini yapılandırın (aşağıya bakın).
5. Kaydedin.

Domain ürünleri, ürün listesinde mor bir **Domain** rozetiyle görünür ve **Domain Products** sekmesi kullanılarak filtreleyebilirsiniz.

## Domain ayarları sekmesi {#domain-settings-tab}

### Sağlayıcı (Provider) {#provider}

Bu ürün için kaydı hangi kayıt kuruluşunun (registrar) yapacağını seçin. Varsayılan olarak, Domain Seller ayarlarında belirlenen küresel **Default provider** kullanılır.

### Desteklenen TLD'ler (Supported TLDs) {#supported-tlds}

Başka bir ürünle eşleşmeyen tüm TLD'lere uygulanacak bir **catch-all product** oluşturmak için boş bırakın.

Belirli uzantılara yalnızca uygulanan bir **TLD-specific product** oluşturmak için virgülle ayrılmış bir TLD listesi girin (örneğin, `.com, .net, .org`).

**Ürün eşleşmesi nasıl çalışır:** Bir müşteri bir domain aradığında, eklenti en spesifik eşleşen ürünü seçer. TLD listesinde `.com` olan bir ürün, catch-all üründen önce önceliklidir. Eğer hiçbir TLD'ye özel ürün eşleşmezse, catch-all kullanılır. Hiç ürün yoksa, domain araması gösterilmez.

### Markup tipi (Fiyatlandırma türü) {#markup-type}

Perakende fiyatınızın toptan maliyetten nasıl hesaplanacağını kontrol eden üç mod vardır:

| Mod | Nasıl Çalışır |
|---|---|
| **Percentage** (Yüzde) | Toptan maliyetin üzerine bir yüzde ekler. 10 dolarlık bir toptan domain için %20 artış, 12 dolar yapar. |
| **Fixed markup** (Sabit artış) | Sabit bir dolar miktarı ekler. 10 dolarlık bir domain için 5 dolarlık artış, 15 dolar yapar. |
| **Fixed price** (Sabit fiyat) | Toptan maliyeti tamamen yok sayar. Her zaman girdiğiniz tutarı ücretlendirirsiniz. |

### Giriş fiyatlandırması (Introductory pricing) {#introductory-pricing}

###折扣付き初年度価格の提供を有効にする

割引された初年度価格を設定します。通常の**更新価格**（2年目以降）と並んで、別の**導入価格**（1年目の価格）を設定します。お客様はチェックアウト中に両方の価格が表示されるので、更新時に何が起こるかを知ることができます。

### WHOIS gizliliği (Gizlilik) {#whois-privacy}

Bu ürünle kayıtlı alan adları için WHOIS gizliliği korumasının sunulup sunulmayacağını kontrol eder.

| Ayar | Davranış |
|---|---|
| **Devre Dışı** | WHOIS gizliliği asla sunulmaz veya etkinleştirilmez. |
| **Her Zaman Dahil** | WHOIS gizliliği kayıt sırasında otomatik olarak ücretsiz olarak etkinleştirilir. |
| **Müşteri Seçimi** | Check-out sırasında bir onay kutusu görünür. **Gizlilik fiyatını** yıllık ücretlendirme olarak ayarlayın veya ücretsiz sunmak için $0 olarak bırakın. |

Namecheap için WHOIS gizliliği WhoisGuard kullanır (her zaman ücretsizdir). OpenSRS ise OpenSRS gizlilik hizmetini kullanır (toptan satışta maliyeti olabilir).

---

## TLD içe aktarma ve senkronizasyon {#tld-import-and-sync}

Alan adı ürünleri, bağlı sağlayıcıdan çekilen gerçek zamanlı toptan fiyatlarını gösterir. Bunun çalışması için TLD'lerin içe aktarılması gerekir.

- **Manuel senkronizasyon:** Ayarlar › Domain Seller › Sync TLDs (sağlayıcıya göre)
- **Otomatik senkronizasyon:** Tüm yapılandırılmış sağlayıcılar üzerinden günlük bir zamanlanmış cron işi ile çalışır.

Senkronizasyondan sonra, herhangi bir alan adı ürününün Domain Settings sekmesine gidin ve mevcut toptan fiyatlarıyla birlikte kullanılabilir TLD'leri görmek için TLD seçicisini kullanın.

---

## Otomatik yenileme {#auto-renewal}

Alan adı yenilemeleri müşterinin üyelik durumuna bağlıdır:

- Bir üyelik yenilendiğinde ve bir alan adı bağlandığında, alan adı yenilemesi otomatik olarak kuyruğa alınır.
- Yenileme girişimleri, müşterinin aktif ödeme ağ geçidini kullanır.
- Başarısız yenilemeler, üstel geri çekilme (exponential backoff) ile otomatik olarak denenir.
- Başarılı yenilemeler, başarısızlıklar ve yaklaşan son kullanuk tarihler için e-posta bildirimleri gönderilir.

Alan ömrü olayları için e-posta şablon kimlikleri:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manual domain registration (Админ: Ручной регистрация домена) {#admin-manual-domain-registration}

Müşteri ödeme yapmadan kendi adına bir alan adı kaydetmek için:

1. **Network Admin › Ultimate Multisite › Register Domain** yoluna gidin
2. Müşteriyi seçin ve alan adını girin
3. Kayıt sahibi iletişim bilgilerini (isim, adres, telefon) doldurun
4. **Register** butonuna tıklayın

Alan adı kaydı oluşturulur ve müşterinin hesabına bağlanır.
