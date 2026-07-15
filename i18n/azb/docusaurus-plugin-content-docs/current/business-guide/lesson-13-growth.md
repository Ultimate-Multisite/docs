---
title: 'Dars 13: Wus''ul Kardan'
sidebar_position: 14
_i18n_hash: 44dd9e49f54ba924696a428224c5aae0
---
# Ders 13: Büyümek

Artık ödeme yapan müşterileri olan çalışan bir platformunuz var. Bu derste, küçük bir operasyondan sürdürülebilir bir işletmeye nasıl geçileceği anlatılıyor: altyapıyı büyütmek, operasyonları otomatikleştirmek ve müşteri başına geliri artırmak.

## Nerede Kalmıştık {#where-we-left-off}

FitSite yayında, müşteriler kayıt oluyor ve siz günlük operasyonları yürütüyorsunuz. Şimdi odak noktamız büyüme.

## Rakamlarınızı Bilin {#know-your-numbers}

Büyümeye geçmeden önce, nerede durduğunuzu anlamalısınız:

### Temel Metrikler {#key-metrics}

- **MRR (Aylık Tekrarlayan Gelir)**: Toplam aylık abonelik geliri
- **Müşteri sayısı**: Toplam aktif abone sayısı
- **ARPU (Kullanıcı Başına Ortalama Gelir)**: MRR'nin müşteri sayısına bölünmesiyle bulunur
- **Churn oranı**: Her ay iptal ettiren müşteri yüzdesi
- **LTV (Ömür Boyu Değer)**: Bir müşteriden elde edilen ortalama gelir (abonelikleri boyunca)
- **CAC (Müşteri Edinme Maliyeti)**: Bir müşteri edinmenin ortalama maliyeti

### Örnek: 50 Müşterili FitSite {#example-fitsite-at-50-customers}

| Metrik | Değer |
|--------|-------|
| Müşteriler | 50 (30 Starter, 15 Growth, 5 Pro) |
| MRR | $4,450 ($1,470 + $1,485 + $995 + $500 ek sipariş artışları) |
| ARPU | $89/ay |
| Aylık churn | %4 (ayda 2 iptal) |
| LTV | $89 x 25 ay = $2,225 |

Bu rakamlar size neye odaklanmanız gerektiğini söylüyor. Yüksek churn mu? Tutmayı düzeltin. Düşük ARPU mu? Yükseltmeleri teşvik edin. Yüksek CAC mı? Edinme kanallarını optimize edin.

## Altyapıyı Büyütmek {#scaling-infrastructure}

### Ne Zaman Büyütmeli {#when-to-scale}

Hosting'i şu durumlarda büyütmelisiniz:

- Sayfa yükleme süreleri belirgin şekilde artarsa
- Sunucu CPU veya belleği düzenli olarak %70 kullanım sınırını aşarsa
- 100'den fazla aktif siteye yaklaşılıyorsa
- Müşterilerden hızla ilgili şikayetler artarsa

### Nasıl Büyütmeli {#how-to-scale}

- **Dikey ölçeklendirme (Vertical scaling)**: Daha büyük bir sunucuya (daha fazla CPU, RAM) yükseltme yapın
- **Önbellekleme katmanları (Caching layers)**: Statik içerik için sayfa önbelleklemesi, nesne önbelleklemesi için Redis/Memcached ekleyin
- **CDN**: Cloudflare veya benzeri bir hizmet kullanmıyorsanız, statik varlıklar için bir CDN ekleyin
- **Veritabanı optimizasyonu**: Ağ büyüdükçe veritabanı sorguları yavaşlar. Tabloları optimize edin, indeks ekleyin, özel bir veritabanı sunucusu düşünün.
- **Sorumlulukları ayırma (Separate concerns)**: Medya depolamasını nesne depolamaya (S3 uyumlu) taşıyın, e-postaları bir işlem e-posta hizmetine aktarın

### Hosting Taşıma (Migration) {#hosting-migration}

Mevcut barındırıcınız daha fazla büyüyemeyecek durumdaysa, bir taşıma planlayın:

1. Yeni ortamı kurun
2. Ağınızın bir kopyasıyla kapsamlı testler yapın
3. Taşıma işlemini trafiğin az olduğu saatlere planlayın
4. Önceden minimum TTL ile DNS'i güncelleyin
5. Taşıma sonrası her şeyin çalıştığını doğrulayın

## Operasyonları Otomatikleştirmek {#automating-operations}

Büyüdükçe, manuel süreçler darboğaz haline gelir. Yapabileceğiniz her şeyi otomatikleştirin:

### Webhooks ve Zapier {#webhooks-and-zapier}

Şu işlemleri otomatikleştirmek için [Webhooks](/user-guide/integrations/webhooks) veya [Zapier](/user-guide/integrations/zapier) kullanın:

- **Yeni kayıt bildirimleri** → Slack kanalına veya CRM'e
- **İptal uyarıları** → geri kazanım e-posta dizisini tetikle
- **Ödeme başarısızlıkları** → izleme aracınızda uyarı ver
- **Plan yükseltmeleri** → yeni özellik rehberi ile tebrik e-postası gönder

### E-posta Otomasyonu {#email-automation}

Manuel e-postalardan otomatik dizilere geçin:

- Başlangıç dizisi (Zaten 8. Derste yapıldı)
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

- **Plan yükseltmeleri**: Starter müşterilerine Growth/Pro özelliklerini gösteren hedefli kampanyalar
- **Ek sipariş artışları (Order bumps)**: Mevcut müşterilere e-posta yoluyla ek ürünler tanıtın
- **Yıllık dönüşüm**: Aylık müşterilere yıllık faturalamaya geçmeleri için indirim teklif edin

### Yeni Gelir Kaynakları {#new-revenue-streams}

- **Hazır kurulum hizmeti**: Müşterinin sitesini kurup özelleştirmek için ücret alın
- **Özel tasarım hizmetleri**: Şablonun üzerine özel tasarım işleri sunun
- **Eğitim oturumları**: Uygulamalı yardıma ihtiyacı olan müşteriler için ücretli birebir eğitimler
- **Premium eklentiler**: Niş bazlı premium eklentileri ücretli ek özellik olarak sunun (örneğin, bir fitness sınıfı rezervasyon widget'ı)

### Fiyat Artırmak {#raising-prices}

Platformunuz olgunlaştıkça ve değer kattıkça:

- Mevcut müşterileri mevcut fiyatlarında tutun (Grandfathering)
- Yeni kayıtlar için fiyatları artırın
- Artışları yeni özellikler ve iyileştirmelerle gerekçelendirin

## Bir Ekip Kurmak {#building-a-team}

Bir noktada, her şeyi tek başınıza yapamazsınız. Yaygın ilk işe alımlar:

1. **Destek personeli**: Günlük müşteri sorularını yönetir (başlangıçta yarı zamanlı)
2. **İçerik üreticisi**: Bilgi tabanı makaleleri, blog yazıları ve pazarlama içeriği yazar
3. **Tasarımcı**: Şablonları iyileştirir ve yenilerini oluşturur

Çalışana ihtiyacınız yok. Platform işleri için yükleniciler (contractors) ve serbest çalışanlar (freelancers) çok iyi çalışır.

## Büyüme Dönüm Noktaları {#growth-milestones}

| Dönüm Noktası | Yaklaşık MRR | Odak Noktası |
|-----------|--------------|-------|
| 0-25 müşteri | $0-$2,500 | Ürün-pazar uyumu, doğrudan erişim |
| 25-100 müşteri | $2,500-$10,000 | Operasyonları sistematikleştirmek, içerik pazarlaması |
| 100-250 müşteri | $10,000-$25,000 | Destek personeli işe almak, dönüşümü optimize etmek, hosting'i büyütmek |
| 250-500 müşteri | $25,000-$50,000 | Ekip kurmak, yeni gelir kaynakları, premium özellikler |
| 500+ müşteri | $50,000+ | Platform olgunluğu, yan nişler, potansiyel çıkış (exit) |

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- İş sağlığını anlamak için **bir metrik çerçevesi**
- Onlarca siteden yüzlerce siteye büyümek için **altyapı ölçeklendirme planı**
- Destek, e-posta ve operasyonlar için **otomasyon stratejileri**
- Sadece yeni müşteri edinmenin ötesindeki **gelir artırma taktikleri**
- Tek kişilik operasyonun ötesine geçtiğinizde **ekip kurma rehberi**
- Her aşama için odak alanları içeren **büyüme dönüm noktaları**

---

**Sonraki:** [Ders 14: Sonra Ne Gelecek](lesson-14-whats-next) -- ilk nişinizin ötesine geçmek.
