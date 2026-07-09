---
title: 'Ders 12: İşletmeyi Yürütmek'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Ders 12: İşletmeyi Yürütmek {#lesson-12-running-the-business}

Bir platform, bitirilen bir proje değil; yönetilen bir işletmedir. Bu ders, FitSite'ı yönetmenin günlük operasyonlarını ele alıyor: destek, faturalandırma, bakım ve müşterileri mutlu tutmak.

## Nereden Kaldık {#where-we-left-off}

FitSite yayında ve müşteriler kayıt oluyor. Şimdi operasyonu sürdürülebilir bir şekilde yürütmeniz gerekiyor.

## Günlük Operasyonlar {#daily-operations}

### İzleme (Monitoring) {#monitoring}

Bunları günlük olarak kontrol edin (veya uyarı sistemi kurun):

- **Uptime (Çevrimiçi Kalma Süresi)**: Platform erişilebilir durumda mı? Bir uptime izleme hizmeti kullanın.
- **Yeni Kayıtlar**: Bugün kaç yeni müşteri kaydoldu?
- **Başarısız Ödemeler**: Dikkat edilmesi gereken ödeme başarısızlıkları var mı?
- **Destek Talepleri**: Cevaplanmamış müşteri soruları var mı?

### Müşteri Desteği {#customer-support}

Niş odak noktanız burada bir avantaj. Tüm müşterileriniz fitness stüdyosu olduğu için, aynı soruları sürekli olarak göreceksiniz:

**Karşılaşacağınız yaygın sorular:**

- "Ders programımı nasıl güncellerim?"
- "Sitemin renklerini değiştirebilir miyim?"
- "Siteme yeni bir eğitmen nasıl eklerim?"
- "Alan adım çalışmıyor"
- "Planımı nasıl iptal eder/yükseltirim?"

Bilgi tabanınızı (8. Derste başladınız) bu tekrarlayan sorular etrafında oluşturun. Bir bilgi tabanı makalesi olabilecek her destek bileti, o makaleyi yazmanız gerektiğine dair bir sinyaldir.

### Destek Seviyeleri (Support Tiers) {#support-tiers}

Büyüdükçe, desteği plana göre yapılandırın:

| Plan | Destek Seviyesi | Yanıt Süresi |
|------|--------------|---------------|
| Starter | Bilgi tabanı + e-posta | 48 saat |
| Growth | E-posta desteği | 24 saat |
| Pro | Öncelikli e-posta + kurulum görüşmesi | 4 saat |

[Support Tickets eklentisi](/addons/support-tickets), platform içinde destek taleplerini yönetmenize yardımcı olabilir.

## Faturalandırma Operasyonları {#billing-operations}

### Tekrarlayan Ödemeler {#recurring-payments}

Ultimate Multisite, tekrarlayan faturalandırmayı ödeme ağ geçidiniz üzerinden otomatik olarak halleder. Sizin göreviniz şunları izlemektir:

- **Başarısız Ödemeler**: Derhal takip edin. Başarısızlıkların çoğu kasıtlı iptal değil, süresi dolmuş kartlardır.
- **Dunning**: Ödeme ağ geçidiniz üzerinden otomatik yeniden deneme mantığı kurun (Stripe bunu çok iyi halleder).
- **İptal Talepleri**: Müşterilerin neden ayrıldığını anlayın. Her iptal, bir geri bildirimdir.

### Üyelikleri Yönetmek {#managing-memberships}

Tüm aktif abonelikleri görüntülemek, yükseltme ve düşürme taleplerini yönetmek, gerektiğinde para iadesi yapmak ve deneme süresi bitişlerini yönetmek için **Ultimate Multisite > Memberships** bölümüne gidin:

Tüm detaylı referans için [Managing Memberships](/user-guide/administration/managing-memberships) bölümüne bakın.

### Faturalandırma (Invoicing) {#invoicing}

Her ödeme için faturaların doğru oluşturulduğundan emin olun. Müşteriler, iş gideri raporlaması için faturaya ihtiyaç duyabilirler. [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices) bölümüne bakın.

## Platform Bakımı {#platform-maintenance}

### WordPress ve Plugin Güncellemeleri {#wordpress-and-plugin-updates}

Ağ yöneticisi olarak, şunlardan sorumlusunuz:

- **WordPress çekirdek güncellemeleri**: Üretime uygulamadan önce bir staging sitesinde test edin
- **Plugin güncellemeleri**: Aynı şey -- önce test edin, sonra ağ genelinde uygulayın
- **Tema güncellemeleri**: Tema güncellemelerinden sonra şablonların hala doğru göründüğünü doğrulayın
- **Ultimate Multisite güncellemeleri**: Değişiklik günlüğünü takip edin ve güncellemeden önce test edin

:::warning Test Etmeden Üretimde Güncelleme Yapmayın
Bozuk bir güncelleme, ağınızdaki her müşteri sitesini etkiler. Güncellemeleri her zaman önce ağınızın bir staging kopyasında test edin.
:::

### Güvenlik {#security}

- Tüm yazılımları güncel tutun
- Yönetici hesapları için güçlü şifreler ve iki faktörlü kimlik doğrulama kullanın
- Şüpheli aktiviteye göre izleme yapın
- Güvenlik olayları için bir planınız olsun

### Performans {#performance}

Ağınız büyüdükçe şunları izleyin:

- **Sayfa yükleme süreleri**: Müşteri siteleri hızlı mı?
- **Sunucu kaynak kullanımı**: CPU, bellek, disk alanı
- **Veritabanı performansı**: Büyük ağlar zamanla veritabanı optimizasyonu gerektirir

Eğer henüz yapmadıysanız, önbellekleme (sayfa önbelleği, nesne önbelleği) ve bir CDN uygulamasını düşünün. [Cloudflare entegrasyonu](/user-guide/host-integrations/cloudflare) bunun çoğunu halleder.

## Müşteri Yaşam Döngüsü Yönetimi {#customer-lifecycle-management}

### Churn (Müşteri Kaybını) Azaltmak {#reducing-churn}

Churn, her ay iptal eden müşteri yüzdesidir. Bir abonelik işi için, churn'ü azaltmak, yeni müşteri kazanmak kadar önemlidir.

**Fitness stüdyosu müşterilerinin churn etmesinin yaygın nedenleri:**

- Platformu nasıl kullanacaklarını çözemediler → kurulum sürecini iyileştirin
- Site yeterince iyi görünmedi → şablonları iyileştirin
- Değeri göremediler → özellikleri veya iletişimi iyileştirin
- Daha ucuz bir alternatif buldular → niş değerinizi pekiştirin
- İşleri kapandı → kaçınılmaz, ancak bunu ayrı takip edin

### Yükseltmeleri Teşvik Etmek {#encouraging-upgrades}

Starter planındaki ve başarılı olan müşteriler yükseltmeye teşvik edilmelidir:

- Plan limitlerine ulaştıklarında (site, depolama), yükseltme istemleri gösterin
- Growth planı özelliklerini fayda sağlayacakları vurgulayan hedefli e-postalar gönderin
- Growth/Pro müşterilerinin neler inşa ettiğini sergileyin

### Geri Kazanım Kampanyaları (Win-Back Campaigns) {#win-back-campaigns}

Bir müşteri iptal ettiğinde:

1. Nedenini sorun (ayrılma anketi veya e-posta)
2. Mümkünse endişelerini giderin
3. Geri dönmesi için bir indirim teklif edin (iptalden 30-60 gün sonra)

## Haftalık ve Aylık Rutinler {#weekly-and-monthly-routines}

### Haftalık {#weekly}

- Yeni kayıtları ve iptalleri gözden geçirin
- Açık tüm destek biletlerine yanıt verin
- Platform performansını ve uptime'ı kontrol edin
- Herhangi bir başarısız ödemeyi kontrol edin

### Aylık {#monthly}

- Temel metrikleri analiz edin (MRR, churn, yeni müşteriler, yükseltmeler)
- WordPress ve plugin güncellemelerini uygulayın (staging testinden sonra)
- Destek kalıplarına göre bilgi tabanını gözden geçirin ve güncelleyin
- Müşterilere bir bülten veya güncelleme gönderin (yeni özellikler, ipuçları, fitness sektörü haberleri)

### Üç Aylık {#quarterly}

- Fiyatlandırmayı rakiplerle ve müşteri geri bildirimleriyle karşılaştırın
- Şablon tasarımlarını değerlendirin -- yenilenmeye ihtiyaçları var mı?
- Barındırma kapasitesini değerlendirin -- ölçeklenmeniz gerekiyor mu?
- Aktivasyon verilerine dayanarak kurulum sürecini gözden geçirin ve iyileştirin

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Uptime, kayıtlar, ödemeler ve destek için **Günlük izleme rutinleri**
- Plan seviyelerine uygun **Katmanlı bir destek yapısı**
- Dunning ve iptal yönetimi dahil **Faturalandırma operasyonları**
- Güncellemeler, güvenlik ve performans için **Bakım prosedürleri**
- Fitness nişine özel **Churn azaltma stratejileri**
- **Haftalık, aylık ve üç aylık operasyonel rutinler**

---

**Sonraki:** [Ders 13: Ölçeklenmek](lesson-13-growth) -- FitSite'ı küçük bir operasyondan gerçek bir işletmeye büyütmek.
