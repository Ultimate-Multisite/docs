---
title: 'Ders 10: Lansman Günü'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Ders 10: Lansman Günü

Her şey inşa edildi. Kapıları açmadan önce, bu ders hiçbir şeyin bozuk, eksik veya utanç verici olmadığından emin olmak için lansman öncesi kontrol listesini inceliyor.

## Nerede Kalmıştık {#where-we-left-off}

FitSite'ta şablonlar, planlar, ödeme, marka kimliği, onboarding ve fiyatlandırma tamamen yapılandırıldı. Şimdi her şeyin çalıştığını doğrulayacak ve yayına gireceğiz.

## Lansman Öncesi Kontrol Listesi {#pre-launch-checklist}

Her maddeyi tek tek kontrol edin. Hiçbirini atlamayın.

### Platform Altyapısı {#platform-infrastructure}

- [ ] Hosting stabil ve yük altında iyi performans gösteriyor
- [ ] Wildcard SSL aktif ve tüm alt alan adları HTTPS üzerinden hizmet veriyor
- [ ] Domain mapping çalışıyor -- bir site oluşturmayı ve özel bir alan adı eşleştirmeyi test edin
- [ ] Yedeklemeler yapılandırıldı ve test edildi (doğrulamak için en az birini geri yükleyin)
- [ ] İzleme sistemi kuruldu -- platformun çöküp çökmediğini bileceksiniz

### Şablonlar {#templates}

- [ ] Üç şablon da yeni sitelerde doğru yüklendi
- [ ] Yer tutucu içerik faydalı ve yazım hatasından arınmış
- [ ] Tüm görseller uygun lisanslara sahip (stok fotoğraf filigranı olmamalı)
- [ ] Mobil uyumluluk her şablon sayfasında çalışıyor
- [ ] Sayfa yükleme hızı kabul edilebilir (GTmetrix veya PageSpeed Insights gibi bir araçla test edin)
- [ ] Her şablonda kırık bağlantı veya eksik varlık yok

### Planlar ve Ürünler {#plans-and-products}

- [ ] Üç plan da aktif ve görünür durumda
- [ ] Plan açıklamaları doğru ve nişe özel
- [ ] Fiyatlandırma doğru (aylık ve yıllık)
- [ ] Kurulum ücretleri doğru planlara yapılandırıldı
- [ ] Deneme süresi Starter plan'da çalışıyor
- [ ] Sipariş artırıcılar (Order bumps) ödeme sırasında doğru görünüyor
- [ ] Plugin ve tema kısıtlamaları plan başına doğru bir şekilde uygulanıyor

### Ödeme Akışı {#checkout-flow}

- [ ] Her plan için tam bir test kayıt işlemi yapın (test ödeme modunu kullanın)
- [ ] Şablon seçimi, plan başına doğru şablonları gösteriyor
- [ ] Ödeme başarılı bir şekilde gerçekleşiyor
- [ ] Müşteri, kayıt olduktan sonra hoş geldiniz e-postasını alıyor
- [ ] Yeni site, doğru şablonla oluşturuluyor
- [ ] Müşteri yeni sitesine hemen giriş yapabiliyor
- [ ] İndirim kodları doğru çalışıyor

### Marka Kimliği (Branding) {#branding}

- [ ] Giriş sayfası FitSite marka kimliğini gösteriyor
- [ ] Admin dashboard FitSite marka kimliğini gösteriyor
- [ ] Tüm sistem e-postaları FitSite marka kimliğini ve fitness'a özel dili kullanıyor
- [ ] Faturalar, işletme detaylarınızla birlikte doğru bir şekilde gösteriliyor
- [ ] Pazarlama sitesi yayında ve ödeme formuna bağlantı veriyor

### Onboarding (Kullanıcı Kabulü) {#onboarding}

- [ ] Quick Start widget'ı yeni müşteri dashboard'larında görünüyor
- [ ] Tüm Quick Start bağlantıları doğru sayfalara yönlendiriyor
- [ ] Hoş geldiniz e-posta dizisi yapılandırıldı ve test edildi
- [ ] Bilgi tabanı makaleleri yayınlandı ve erişilebilir durumda
- [ ] Hesap sayfası doğru plan bilgilerini ve yükseltme seçeneklerini gösteriyor

### Yasal ve İşletme {#legal-and-business}

- [ ] Hizmet Şartları yayınlandı ve ödeme sayfasından bağlantı verildi
- [ ] Gizlilik Politikası yayınlandı ve erişilebilir durumda
- [ ] İade politikası tanımlandı ve belgelendi
- [ ] Ödeme almak için bir işletme kuruluşu ayarlandı
- [ ] Ödeme ağ geçidi canlı modda (test modunda değil)
- [ ] Vergi yapılandırması yetki alanınız için doğru

## Yumuşak Lansman vs. Resmi Lansman {#soft-launch-vs-hard-launch}

İki aşamalı bir lansmanı düşünün:

### Aşama 1: Yumuşak Lansman (Soft Launch) {#phase-1-soft-launch}

Halka açık lansmandan önce 5-10 fitness stüdyosu sahibini kaydolmaya davet edin. Bunlar beta müşterilerinizdir. Karşılığında onlara önemli bir indirim (ömür boyu %50 indirim veya 3 ay ücretsiz) teklif edin:

- Kayıt ve onboarding deneyimi hakkında dürüst geri bildirim
- Sitesini bir vitrin örneği olarak kullanma izni
- Karşılaştıkları herhangi bir hata veya sorunu raporlama

Bu, halka açılmadan önce size gerçek müşteri geri bildirimi ve sergileyeceğiniz canlı siteler sağlar.

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
- **Yük altında performans**: Trafik artışı yaşarsanız, hosting'inizi nasıl ölçeklendireceğinizi bilin
- **Müşteri kafa karışıklığı**: Bilgi tabanınızı ve destek kanallarınızı hazır bulundurun

## FitSite Ağı Şu Ana Kadar {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Altyapı, içerik, ödeme ve yasal konuları kapsayan kapsamlı bir lansman öncesi kontrol listesi
- Halka açılmadan önce gerçek geri bildirim almak için bir yumuşak lansman stratejisi
- Güvenle yayına girmek için lansman günü prosedürleri
- Yaygın lansman günü sorunları için bir acil durum planı

---

**Sonraki:** [Ders 11: Müşteri Bulmak](lesson-11-customers) -- FitSite yayında olduğuna göre, fitness stüdyosu sahiplerini nasıl kaydolmaya yönlendirirsiniz?
