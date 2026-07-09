---
title: Alan Adı Ürünleri ve Fiyatlandırma
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Alan Adı Ürünleri ve Fiyatlandırma {#domain-products-and-pricing}

Alan adı ürünleri, fiyatlandırmayı, TLD'leri (Üst Düzey Alan Adları), WHOIS gizliliğini ve sağlayıcı seçimini kontrol etmenizi sağlayan mekanizmalardır. Her alan adı ürünü, ek bir **Alan Adı Ayarları** sekmesi bulunan standart bir Multisite Ultimate ürünüdür.

## Bir alan adı ürünü oluşturma {#creating-a-domain-product}

1. **Network Admin › Ultimate Multisite › Products** yolunu izleyin.
2. **Add New** (Yeni Ekle) butonuna tıklayın.
3. Ürün türünü **Domain** (Alan Adı) olarak ayarlayın.
4. **Domain Settings** (Alan Adı Ayarları) sekmesini yapılandırın (aşağıya bakınız).
5. Kaydedin.

Alan adı ürünleri, ürün listesinde mor bir **Domain** rozetiyle görünür ve **Domain Products** (Alan Adı Ürünleri) sekmesi kullanılarak filtrelenebilir.

## Alan Adı Ayarları sekmesi {#domain-settings-tab}

### Provider (Sağlayıcı) {#provider}

Bu ürün için hangi kayıt kuruluşunun (registrar) kaydı yöneteceğini seçin. Varsayılan olarak, Domain Seller ayarlarında belirlenen global **Default provider** (Varsayılan sağlayıcı) kullanılır.

### Supported TLDs (Desteklenen TLD'ler) {#supported-tlds}

Tüm TLD'lere uygulanacak bir **catch-all product** (tümünü kapsayan ürün) oluşturmak için bu alanı boş bırakın.

Yalnızca bu uzantılara uygulanacak bir **TLD-specific product** (TLD'ye özel ürün) oluşturmak için virgülle ayrılmış bir TLD listesi girin (örneğin, `.com, .net, .org`).

**Ürün eşleştirme nasıl çalışır:** Bir müşteri bir alan adı aradığında, eklenti en spesifik eşleşen ürünü seçer. TLD listesinde `.com` bulunan bir ürün, tümünü kapsayan bir üründen daha önceliklidir. Eğer hiçbir TLD'ye özel ürün eşleşmezse, tümünü kapsayan ürün kullanılır. Hiç ürün yoksa, alan adı araması gösterilmez.

### Markup type (Ek Ücret Türü) {#markup-type}

Toptan maliyetten perakende fiyatınızın nasıl hesaplanacağını kontrol eden üç mod vardır:

| Mode (Mod) | Nasıl Çalışır |
|---|---|
| **Percentage** (Yüzde) | Toptan maliyetin üzerine bir yüzde ekler. 10 dolarlık toptan bir alan adı için %20 ek ücret, 12 dolar yapar. |
| **Fixed markup** (Sabit Ek Ücret) | Sabit bir dolar miktarı ekler. 10 dolarlık bir alan adı için 5 dolarlık ek ücret, 15 dolar yapar. |
| **Fixed price** (Sabit Fiyat) | Toptan maliyeti tamamen yok sayar. Her zaman girdiğiniz tutarı ücretlendirir. |

### Introductory pricing (Tanıtım Fiyatlandırması) {#introductory-pricing}

İndirimli bir ilk yıl fiyatı sunmak için bu seçeneği etkinleştirin. Düzenli **Renewal price** (Yenileme fiyatı) (2. yıl ve sonrası) yanında ayrı bir **Introductory price** (Tanıtım fiyatı) (1. yıl) belirleyin. Müşteri, yenileme sırasında ne bekleyeceğini bilmesi için her iki fiyatı da ödeme aşamasında görür.

### WHOIS privacy (WHOIS Gizliliği) {#whois-privacy}

Bu ürün aracılığıyla kaydedilen alan adları için WHOIS gizliliği korumasının sunulup sunulmayacağını kontrol eder.

| Setting (Ayarlar) | Behaviour (Davranış) |
|---|---|
| **Disabled** (Devre Dışı) | WHOIS gizliliği asla sunulmaz veya etkinleştirilmez. |
| **Always Included** (Her Zaman Dahil) | WHOIS gizliliği, herhangi bir ücret ödemeden kayıt sırasında otomatik olarak etkinleştirilir. |
| **Customer Choice** (Müşteri Seçimi) | Ödeme aşamasında bir onay kutusu görünür. **Privacy price** (Gizlilik fiyatı) alanını yıllık ücret olarak ayarlayın veya ücretsiz sunmak için $0 bırakın. |

Namecheap için WHOIS gizliliği WhoisGuard'ı (her zaman ücretsiz) kullanır. OpenSRS için ise OpenSRS gizlilik hizmetini (toptan maliyette ücretli olabilir) kullanır.

---

## TLD İçe Aktarma ve Senkronizasyon {#tld-import-and-sync}

Alan adı ürünleri, bağlı sağlayıcıdan çekilen gerçek zamanlı toptan fiyatlandırmayı gösterir. Bunun çalışması için TLD'lerin içe aktarılması gerekir.

- **Manual sync** (Manuel senkronizasyon): Settings › Domain Seller › Sync TLDs (sağlayıcı başına)
- **Automatic sync** (Otomatik senkronizasyon): Yapılandırılan tüm sağlayıcılar genelinde günlük olarak zamanlanmış bir cron job ile çalışır.

Senkronizasyondan sonra, herhangi bir alan adı ürününün Domain Settings sekmesine gidin ve mevcut TLD'leri güncel toptan fiyatlarıyla görmek için TLD seçicisini kullanın.

---

## Otomatik Yenileme {#auto-renewal}

Alan adı yenilemeleri, müşterinin üyelik durumuna bağlıdır:

- Bir üyelik yenilendiğinde ve bir alan adı bağlı olduğunda, alan adı yenilemesi otomatik olarak kuyruğa alınır.
- Yenileme denemeleri, müşterinin aktif ödeme ağ geçidini kullanır.
- Başarısız yenilemeler, üstel geri çekilme (exponential backoff) ile otomatik olarak yeniden denenir.
- Başarılı yenilemeler, başarısızlıklar ve yaklaşan sona ermeler için e-posta bildirimleri gönderilir.

Alan adı yaşam döngüsü olayları için e-posta şablon kimlikleri:

| Event (Olay) | Template ID (Şablon Kimliği) |
|---|---|
| Domain registered (Alan adı kaydedildi) | `domain_registered` |
| Domain renewed (Alan adı yenilendi) | `domain_renewed` |
| Renewal failed (Yenileme başarısız oldu) | `domain_renewal_failed` |
| Domain expiring soon (Alan adı yakında sona eriyor) | `domain_expiring_soon` |

---

## Yönetici: Manuel alan adı kaydı {#admin-manual-domain-registration}

Bir müşterinin ödeme aşamasından geçmesine gerek kalmadan onun adına bir alan adı kaydetmek için:

1. **Network Admin › Ultimate Multisite › Register Domain** yolunu izleyin.
2. Müşteriyi seçin ve alan adı adını girin.
3. Kayıt sahibi iletişim bilgilerini (ad, adres, telefon) doldurun.
4. **Register** (Kayıt Et) butonuna tıklayın.

Alan adı kaydı oluşturulur ve müşterinin hesabına bağlanır.
