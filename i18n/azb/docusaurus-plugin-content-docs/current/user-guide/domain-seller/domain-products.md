---
title: Domain Produk dan Harga
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain Ürünleri ve Fiyatlandırma {#domain-products-and-pricing}

Domain ürünleri, fiyatlandırmayı, TLD'leri, WHOIS gizliliğini ve sağlayıcı seçimini kontrol ettiğiniz yerdir. Her domain ürünü, ek bir **Domain Ayarları** sekmesi bulunan standart bir Multisite Ultimate ürünüdür.

## Bir domain ürünü oluşturma {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** yolunu izleyin
2. **Add New**'a tıklayın
3. Ürün tipini **Domain** olarak ayarlayın
4. **Domain Ayarları** sekmesini yapılandırın (aşağıya bakın)
5. Kaydedin

Domain ürünleri, ürün listesinde mor bir **Domain** rozeti ile görünür ve **Domain Products** sekmesi kullanılarak filtrelenebilir.

## Domain ayarları sekmesi {#domain-settings-tab}

### Provider (Sağlayıcı) {#provider}

Bu ürün için hangi kayıt kuruluşunun (registrar) kaydı yöneteceğini seçin. Varsayılan olarak, Domain Seller ayarlarında belirlenen global **Default provider** kullanılır.

### Supported TLDs (Desteklenen TLD'ler) {#supported-tlds}

Boş bırakmak, başka bir ürün tarafından eşleştirilmeyen tüm TLD'lere uygulanacak bir **catch-all ürün** oluşturur.

Sadece o uzantılara uygulanacak bir **TLD'ye özel ürün** oluşturmak için virgülle ayrılmış bir TLD listesi girin (örneğin, `.com, .net, .org`).

**Ürün eşleştirme nasıl çalışır:** Bir müşteri bir domain aradığında, eklenti en spesifik eşleşen ürünü seçer. TLD listesinde `.com` bulunan bir ürün, catch-all ürününe göre önceliklidir. Eğer hiçbir TLD'ye özel ürün eşleşmezse, catch-all kullanılır. Hiç ürün yoksa, domain araması gösterilmez.

### Markup type (Ek Ücret Türü) {#markup-type}

Üç mod, perakende fiyatınızın toptan maliyetten nasıl hesaplanacağını kontrol eder:

| Mode (Mod) | Nasıl çalışır |
|---|---|
| **Percentage (Yüzde)** | Toptan maliyetin üzerine bir yüzde ekler. 10 dolarlık toptan bir domain için %20 ek ücret, 12 dolar yapar. |
| **Fixed markup (Sabit Ek Ücret)** | Sabit bir dolar miktarı ekler. 10 dolarlık bir domain için 5 dolarlık ek ücret, 15 dolar yapar. |
| **Fixed price (Sabit Fiyat)** | Toptan maliyeti tamamen yok sayar. Her zaman girdiğiniz tutarı ücretlendirir. |

### Introductory pricing (Tanıtım Fiyatlandırması) {#introductory-pricing}

İndirimli bir ilk yıl fiyatı sunmak için etkinleştirin. Düzenli **Renewal price** (2. yıl ve sonrası) fiyatının yanı sıra ayrı bir **Introductory price** (1. yıl fiyatı) belirleyin. Müşteri, yenileme sırasında ne bekleyeceğini bilmesi için her iki fiyatı da ödeme sırasında görür.

### WHOIS privacy (WHOIS Gizliliği) {#whois-privacy}

Bu ürün üzerinden kaydedilen domainler için WHOIS gizlilik korumasının sunulup sunulmayacağını kontrol eder.

| Setting (Ayarlar) | Behaviour (Davranış) |
|---|---|
| **Disabled (Devre Dışı)** | WHOIS gizliliği asla sunulmaz veya etkinleştirilmez. |
| **Always Included (Her Zaman Dahil)** | WHOIS gizliliği, herhangi bir ücret ödemeden kayıt sırasında otomatik olarak etkinleştirilir. |
| **Customer Choice (Müşteri Seçimi)** | Ödeme sırasında bir onay kutusu görünür. **Privacy price**'ı yıllık ücretlendirme yapmak için ayarlayın veya ücretsiz sunmak için $0 bırakın. |

Namecheap için WHOIS gizliliği WhoisGuard'ı (her zaman ücretsiz) kullanır. OpenSRS için ise OpenSRS gizlilik hizmetini (toptan maliyette ücretli olabilir) kullanır.

---

## TLD İçe Aktarma ve Senkronizasyon {#tld-import-and-sync}

Domain ürünleri, bağlı sağlayıcıdan çekilen gerçek zamanlı toptan fiyatlandırmayı gösterir. Bunun çalışması için TLD'lerin içe aktarılması gerekir.

- **Manual sync (Manuel senkronizasyon):** Settings › Domain Seller › Sync TLDs (sağlayıcı başına)
- **Automatic sync (Otomatik senkronizasyon):** Yapılandırılan tüm sağlayıcılar genelinde günlük bir zamanlanmış cron job ile çalışır

Senkronizasyondan sonra, herhangi bir domain ürününün Domain Settings sekmesine gidin ve mevcut TLD'leri güncel toptan fiyatlarıyla görmek için TLD seçicisini kullanın.

---

## Otomatik Yenileme {#auto-renewal}

Domain yenilemeleri, müşterinin üyelik durumuna bağlıdır:

- Bir üyelik yenilendiğinde ve bir domain bağlı olduğunda, domain yenilemesi otomatik olarak kuyruğa alınır
- Yenileme denemeleri, müşterinin aktif ödeme ağ geçidini kullanır
- Başarısız yenilemeler, üstel geri çekilme (exponential backoff) ile otomatik olarak yeniden denenir
- Başarılı yenilemeler, başarısızlıklar ve yaklaşan sona ermeler için e-posta bildirimleri gönderilir

Domain yaşam döngüsü olayları için e-posta şablon kimlikleri:

| Event (Olay) | Template ID (Şablon Kimliği) |
|---|---|
| Domain registered (Domain kaydedildi) | `domain_registered` |
| Domain renewed (Domain yenilendi) | `domain_renewed` |
| Renewal failed (Yenileme başarısız oldu) | `domain_renewal_failed` |
| Domain expiring soon (Domain yakında sona eriyor) | `domain_expiring_soon` |

---

## Yönetici: Manuel domain kaydı {#admin-manual-domain-registration}

Bir müşterinin ödeme yapmasını gerektirmeden onun adına bir domain kaydetmek için:

1. **Network Admin › Ultimate Multisite › Register Domain** yolunu izleyin
2. Müşteriyi seçin ve domain adını girin
3. Kayıt sahibi iletişim bilgilerini doldurun (ad, adres, telefon)
4. **Register**'a tıklayın

Domain kaydı oluşturulur ve müşterinin hesabına bağlanır.
