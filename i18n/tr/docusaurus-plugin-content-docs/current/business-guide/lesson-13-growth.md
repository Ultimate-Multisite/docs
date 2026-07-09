---
title: 'Ders 13: Ölçeklendirme'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Ders 13: Ölçeklenmek {#lesson-13-scaling-up}

Ödeme yapan müşterileri olan çalışan bir platformunuz var. Bu ders, küçük bir operasyondan sürdürülebilir bir işletmeye nasıl büyüneceğinizi ele alıyor: altyapıyı ölçeklendirmek, operasyonları otomatikleştirmek ve müşteri başına geliri artırmak.

## Nerede Kalmıştık {#where-we-left-off}

FitSite yayında, müşteriler kayıt oluyor ve siz günlük operasyonları yürütüyorsunuz. Şimdi büyüme odağımıza geçiyoruz.

## Rakamlarınızı Bilin {#know-your-numbers}

Ölçeklenmeden önce, nerede durduğunuzu anlamalısınız:

### Temel Metrikler {#key-metrics}

- **MRR (Monthly Recurring Revenue - Aylık Tekrarlayan Gelir)**: Toplam aylık abonelik geliri
- **Müşteri sayısı**: Toplam aktif abone sayısı
- **ARPU (Average Revenue Per User - Kullanıcı Başına Ortalama Gelir)**: MRR'nin müşteri sayısına bölünmesiyle bulunur
- **Churn rate (Müşteri Kayıp Oranı)**: Her ay iptal eden müşteri yüzdesi
- **LTV (Lifetime Value - Ömür Boyu Değer)**: Bir müşteriden elde edilen ortalama toplam gelir
- **CAC (Customer Acquisition Cost - Müşteri Edinme Maliyeti)**: Bir müşteri edinmenin ortalama maliyeti

### Örnek: 50 Müşterili FitSite {#example-fitsite-at-50-customers}

| Metrik | Değer |
|--------|-------|
| Müşteriler | 50 (30 Başlangıç, 15 Büyüme, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 sipariş artırımı) |
| ARPU | Aylık $89 |
| Aylık kayıp oranı | %4 (Ayda 2 iptal) |
| LTV | $89 x 25 ay = $2,225 |

Bu rakamlar size neye odaklanmanız gerektiğini söylüyor. Yüksek kayıp oranı mı? Tutmayı düzeltin. Düşük ARPU mu? Yükseltmeleri teşvik edin. Yüksek CAC mı? Edinme kanallarını optimize edin.

## Altyapıyı Ölçeklendirmek {#scaling-infrastructure}

### Ne Zaman Ölçeklenmeli {#when-to-scale}

Hosting'i aşağıdaki durumlarda ölçeklendirin:

- Sayfa yükleme süreleri belirgin şekilde artarsa
- Sunucu CPU veya belleği düzenli olarak %70 kullanım sınırını aşarsa
- 100'den fazla aktif siteye yaklaşılıyorsa
- Hızla ilgili müşteri şikayetleri artarsa

### Nasıl Ölçeklenmeli {#how-to-scale}

- **Dikey ölçeklendirme (Vertical scaling)**: Daha büyük bir sunucuya (daha fazla CPU, RAM) yükseltme yapın.
- **Önbellekleme katmanları (Caching layers)**: Statik içerik için sayfa önbelleklemesi, nesne önbelleklemesi için Redis/Memcached ekleyin.
- **CDN**: Cloudflare veya benzeri bir hizmet kullanmıyorsanız, statik varlıklar için bir CDN ekleyin.
- **Veritabanı optimizasyonu**: Ağ büyüdükçe veritabanı sorguları yavaşlar. Tabloları optimize edin, indeks ekleyin ve özel bir veritabanı sunucusu düşünün.
- **Sorumlulukları ayırma (Separate concerns)**: Medya depolamasını nesne depolamaya (S3 uyumlu) taşıyın, e-postaları bir işlem e-posta hizmetine aktarın.

### Hosting Taşıma (Migration) {#hosting-migration}

Mevcut barındırıcınız daha fazla ölçeklenemeyecek durumdaysa, bir taşıma planlayın:

1. Yeni ortamı kurun
2. Ağınızın bir kopyasıyla kapsamlı testler yapın
3. Taşımayı trafiğin düşük olduğu saatlere planlayın
4. Önceden DNS'i minimum TTL ile güncelleyin
5. Taşıma sonrası her şeyin çalıştığını doğrulayın

## Operasyonları Otomatikleştirmek {#automating-operations}

Büyüdükçe, manuel süreçler darboğaz haline gelir. Yapabileceğiniz her şeyi otomatikleştirin:

### Webhook'lar ve Zapier {#webhooks-and-zapier}

Şu işlemleri otomatikleştirmek için [Webhooks](/user-guide/integrations/webhooks) veya [Zapier](/user-guide/integrations/zapier) kullanın:

- **Yeni kayıt bildirimleri** → Slack kanalına veya CRM'e
- **İptal uyarıları** → geri kazanım e-posta dizisini tetikleme
- **Ödeme başarısızlıkları** → izleme aracınızda uyarı verme
- **Plan yükseltmeleri** → yeni özellik rehberi ile tebrik e-postası

### E-posta Otomasyonu {#email-automation}

Manuel e-postalardan otomatik dizilere geçin:

- Başlangıç dizisi (Zaten 8. Derste oluşturuldu)
- Pasif müşteriler için yeniden etkileşim dizisi
- Müşteriler plan limitlerine yaklaştığında yükseltme hatırlatıcıları
- Yıllık aboneler için yenileme hatırlatıcıları

### Destek Otomasyonu {#support-automation}

- Sık sorulan sorular için **Hazır yanıtlar (Canned responses)**
- Destek biletinin alındığını onaylayan **Otomatik yanıtlar (Auto-replies)**
- Müşteriler mevcut makalelerle eşleşen biletler gönderdiğinde **Bilgi tabanı önerileri**

## Geliri Artırmak {#increasing-revenue}

Büyüme sadece daha fazla müşteriyle ilgili değildir. Aynı zamanda müşteri başına daha fazla gelirle de ilgilidir.

### Mevcut Müşterilere Yükseltme (Upselling) {#upselling-existing-customers}

- **Plan yükseltmeleri**: Başlangıç müşterilerine Büyüme/Pro özelliklerini gösteren hedefli kampanyalar
- **Sipariş artırımı (Order bumps)**: Mevcut müşterilere e-posta yoluyla ek ürünler tanıtma
- **Yıllık dönüşüm**: Aylık müşterilere yıllık faturalamaya geçmeleri için indirim teklif etme

### Yeni Gelir Kaynakları {#new-revenue-streams}

- **Hazır kurulum (Done-for-you setup)**: Bir müşterinin sitesini kurmak ve özelleştirmek için ücret talep etme
- **Özel tasarım hizmetleri**: Şablonun üzerine özel tasarım işleri sunma
- **Eğitim oturumları**: Uygulamalı yardıma ihtiyacı olan müşteriler için ücretli birebir eğitimler
- **Premium eklentiler**: Niş bazlı premium eklentileri ücretli ek özellik olarak sunma (örneğin, bir fitness sınıfı rezervasyon widget'ı)

### Fiyat Artırma {#raising-prices}

Platformunuz olgunlaştıkça ve değer kattıkça:

- Mevcut müşterileri mevcut fiyatlarında tutun (Grandfathering)
- Yeni kayıtlar için fiyatları artırın
- Artışları yeni özellikler ve iyileştirmelerle gerekçelendirin

## Bir Ekip Kurmak {#building-a-team}

Bir noktada, her şeyi tek başınıza yapamazsınız. Yaygın ilk işe alımlar:

1. **Destek personeli**: Günlük müşteri sorularını yönetir (başlangıçta yarı zamanlı)
2. **İçerik üreticisi**: Bilgi tabanı makaleleri, blog yazıları ve pazarlama içeriği yazar
3. **Tasarımcı**: Şablonları iyileştirir ve yenilerini oluşturur

Çalışana ihtiyacınız yok. Platform işleri için yükleniciler ve serbest çalışanlar iyi çalışır.

## Büyüme Dönüm Noktaları {#growth-milestones}

| Dönüm Noktası | Yaklaşık MRR | Odak Noktası |
|-----------|--------------|-------|
| 0-25 müşteri | $0-$2,500 | Ürün-pazar uyumu, doğrudan erişim |
| 25-100 müşteri | $2,500-$10,000 | Operasyonları sistematikleştirmek, içerik pazarlaması |
| 100-250 müşteri | $10,000-$25,000 | Destek personeli işe almak, dönüşümü optimize etmek, hosting'i ölçeklendirmek |
| 250-500 müşteri | $25,000-$50,000 | Ekip kurma, yeni gelir kaynakları, premium özellikler |
| 500+ müşteri | $50,000+ | Platform olgunluğu, yan nişler, potansiyel çıkış (exit) |

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- İş sağlığını anlamak için bir metrik çerçevesi
- Onlarca siteden yüzlerce siteye büyümek için altyapı ölçeklendirme planı
- Destek, e-posta ve operasyonlar için otomasyon stratejileri
- Sadece yeni müşteri edinmenin ötesindeki gelir artırma taktikleri
- Tek kişilik operasyonun ötesine geçtiğinizde ekip kurma rehberi
- Her aşama için odak alanları içeren büyüme dönüm noktaları

---

**Sonraki:** [Ders 14: Sonra Ne Gelecek](lesson-14-whats-next) -- ilk nişinizin ötesine geçmek.
