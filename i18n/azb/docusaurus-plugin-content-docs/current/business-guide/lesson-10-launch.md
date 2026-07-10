---
title: 'Lekson 10: Uthkri Day'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Ders 10: Lansman Günü {#lesson-10-launch-day}

Her şey hazır. Kapıları açmadan önce, bu ders hiçbir şeyin bozuk, eksik veya utanç verici olmadığından emin olmak için ön lansman kontrol listesini inceliyor.

## Nerede Kalmıştık {#where-we-left-off}

FitSite'ta şablonlar, planlar, ödeme (checkout), marka kimliği, kullanıcıya alıştırma (onboarding) ve fiyatlandırma ayarları yapıldı. Şimdi her şeyin çalıştığını doğrulayıp yayına geçiyoruz.

## Ön Lansman Kontrol Listesi {#pre-launch-checklist}

Her maddeyi tek tek kontrol edin. Hiçbirini atlamayın.

### Platform Altyapısı {#platform-infrastructure}

- [ ] Barındırma (Hosting) stabil ve yük altında iyi performans gösteriyor mu
- [ ] Wildcard SSL aktif mi ve tüm alt alan adları HTTPS üzerinden hizmet veriyor mu
- [ ] Alan adı eşleştirme çalışıyor mu -- bir site oluşturup özel bir alan adı eşleştirmeyi test edin
- [ ] Yedeklemeler yapılandırıldı ve test edildi mi (doğrulamak için en az birini geri yükleyin)
- [ ] İzleme (Monitoring) sistemi kuruldu mu -- platformun çöktüğünü bilecek misiniz?

### Şablonlar {#templates}

- [ ] Üç şablon da yeni sitelerde doğru yüklenebiliyor mu
- [ ] Yer tutucu içerik yardımcı ve yazım hatasız mı
- [ ] Tüm görsellerin lisansı doğru mu (stok fotoğraf filigranı yok)
- [ ] Mobil uyumluluk her şablon sayfasında çalışıyor mu
- [ ] Sayfa yükleme hızı kabul edilebilir mi (GTmetrix veya PageSpeed Insights gibi bir araçla test edin)
- [ ] Her şablonda kırık bağlantı veya eksik varlık yok mu

### Planlar ve Ürünler {#plans-and-products}

- [ ] Üç plan da aktif ve görünür durumda mı
- [ ] Plan açıklamaları doğru ve nişe özel mi
- [ ] Fiyatlandırma doğru mu (aylık ve yıllık)
- [ ] Kurulum ücretleri doğru planlara ayarlandı mı
- [ ] Deneme süresi Starter plan'da çalışıyor mu
- [ ] Sipariş artırıcılar (Order bumps) ödeme sırasında doğru görünüyor mu
- [ ] Plugin ve tema kısıtlamaları her plana göre doğru uygulanıyor mu

### Ödeme Akışı (Checkout Flow) {#checkout-flow}

- [ ] Her plan için tam bir test kayıt işlemi yapın (test ödeme modunu kullanın)
- [ ] Şablon seçimi, plana göre doğru şablonları gösteriyor mu
- [ ] Ödeme başarılı bir şekilde gerçekleşiyor mu
- [ ] Müşteri, kayıt olduktan sonra hoş geldiniz e-postasını alıyor mu
- [ ] Yeni site, doğru şablonla oluşturuluyor mu
- [ ] Müşteri, yeni sitesine hemen giriş yapabiliyor mu
- [ ] İndirim kodları doğru çalışıyor mu

### Marka Kimliği (Branding) {#branding}

- [ ] Giriş sayfası FitSite markasını gösteriyor mu
- [ ] Yönetici paneli (Admin dashboard) FitSite markasını gösteriyor mu
- [ ] Tüm sistem e-postaları FitSite markasını ve fitness'a özel dili kullanıyor mu
- [ ] Faturalar, işletme detaylarınızla birlikte doğru bir şekilde gösteriliyor mu
- [ ] Pazarlama sitesi yayında ve ödeme formuna bağlantı veriyor mu

### Kullanıcıya Alıştırma (Onboarding) {#onboarding}

- [ ] Hızlı Başlangıç (Quick Start) widget'ı yeni müşteri panolarında görünüyor mu
- [ ] Tüm Hızlı Başlangıç bağlantıları doğru sayfalara yönlendiriyor mu
- [ ] Hoş geldiniz e-posta dizisi yapılandırıldı ve test edildi mi
- [ ] Bilgi tabanı makaleleri yayınlandı ve erişilebilir durumda mı
- [ ] Hesap sayfası doğru plan bilgilerini ve yükseltme seçeneklerini gösteriyor mu

### Yasal ve İşletme {#legal-and-business}

- [ ] Hizmet Şartları yayınlandı ve ödeme sayfasından bağlantı verilmiş mi
- [ ] Gizlilik politikası yayınlandı ve erişilebilir durumda mı
- [ ] İade politikası tanımlandı ve belgelendi mi
- [ ] Ödeme alımı için işletme kuruluşu yapıldı mı
- [ ] Ödeme ağ geçidi (Payment gateway) canlı modda mı (test modunda değil)
- [ ] Vergi yapılandırması yetki alanınız için doğru mu

## Yumuşak Lansman vs. Resmi Lansman {#soft-launch-vs-hard-launch}

İki aşamalı bir lansmanı düşünün:

### Aşama 1: Yumuşak Lansman (Soft Launch) {#phase-1-soft-launch}

Halka açık lansmandan önce 5-10 fitness stüdyosu sahibini kaydolmaya davet edin. Bunlar beta müşterilerinizdir. Karşılığında onlara önemli bir indirim (ömür boyu %50 indirim veya 3 ay ücretsiz) teklif edin:

- Kayıt ve kullanıcıya alıştırma deneyimi hakkında dürüst geri bildirim
- Sitesini bir örnek olarak kullanma izni
- Karşılaştıkları herhangi bir hata veya sorunu raporlama

Bu size gerçek müşteri geri bildirimi ve halka açılmadan önce sergileyeceğiniz canlı siteler sağlar.

### Aşama 2: Resmi Lansman (Public Launch) {#phase-2-public-launch}

Yumuşak lansman geri bildirimleri dahil edildikten sonra:

- Ödeme ağ geçidini canlı moda alın
- Pazarlama sitenizi yayınlayın
- Müşteri edinmeye başlayın (Ders 11)
- İlgili fitness sektör kanallarında duyurun

## Lansman Günü Yapılacaklar {#launch-day-actions}

Halka açık olacağınız gün:

1. **Canlı ödemelere geçin** -- ödeme ağ geçidinizdeki test modunu devre dışı bırakın
2. **Bir kez daha doğrulayın** -- gerçek bir ödeme ile tam bir test kayıt işlemi yapın (sonra kendinize iade edin)
3. **Yakından izleyin** -- hatalar, başarısız kayıtlar veya ödeme sorunları olup olmadığını kontrol edin
4. **Hazır olun** -- ilk gerçek müşterileriniz yardıma ihtiyaç duyabilir ve hızlı yanıt güven inşa eder
5. **Kısa bir kutlama yapın** -- sonra işinize geri dönün

## Ne Yanlış Gidebilir {#what-can-go-wrong}

Şunlara hazırlıklı olun:

- **Ödeme ağ geçidi sorunları**: Ağ geçidi sağlayıcınızın destek iletişim bilgilerini hazır bulundurun
- **SSL sertifikası sorunları**: Sertifikaları nasıl kontrol edeceğinizi ve yenileyeceğinizi bilin
- **E-posta teslimat hataları**: E-postaların gerçekten ulaşıp ulaşmadığını test edin (spam klasörlerini kontrol edin)
- **Yük altında performans**: Trafik artışı yaşarsanız, barındırmanızı nasıl ölçeklendireceğinizi bilin
- **Müşteri kafa karışıklığı**: Bilgi tabanınızı ve destek kanallarınızı hazır bulundurun

## FitSite Ağı Şu Ana Kadar {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (alt alan adı modu) ✓
├── Ultimate Multisite (yapılandırılmış + markalı) ✓
├── Platform Alan Adı (fitsite.com + wildcard SSL) ✓
├── Site Şablonları (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Ürünler (Starter, Growth, Pro + Sipariş Artırıcıları + İndirimler) ✓
├── Ödeme Akışı (uçtan uca test edildi) ✓
├── Marka Kimliği (tamamlandı) ✓
├── Müşteri Kullanıcıya Alıştırması (Quick Start, e-postalar, yardım kaynakları) ✓
├── Fiyatlandırma Stratejisi (yıllık, denemeler, kurulum ücretleri, indirimler) ✓
├── Ön Lansman Kontrol Listesi (doğrulandı) ✓
├── Yumuşak Lansman (beta müşterileri dahil edildi) ✓
└── CANLI ✓
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Altyapı, içerik, ödeme ve yasal konuları kapsayan kapsamlı bir ön lansman kontrol listesi
- Halka açılmadan önce gerçek geri bildirim almak için bir yumuşak lansman stratejisi
- Güvenle yayına geçmek için lansman günü prosedürleri
- Ortak lansman günü sorunları için bir acil durum planı

---

**Sonraki:** [Ders 11: Müşteri Bulmak](lesson-11-customers) -- FitSite yayında olduğuna göre, fitness stüdyosu sahiplerini nasıl kaydolmaya yönlendirirsiniz?
