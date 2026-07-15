---
title: 'Ders 7: Kendin Yapmak'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Ders 7: Kendi Markanız Yapmak

Müşterilerinizin asla "bir WordPress eklentisi" kullandıklarını hissetmemeleri gerekir. Onlar, kendi sektörleri için yapılmış bir platform olan FitSite'ı kullandıklarını hissetmeliler. Bu derste, markalaştırma, beyaz etiketleme (white-labeling) ve platformu bir ürün gibi hissettirme konularını ele alıyoruz.

## Nereden Başlamıştık {#where-we-left-off}

FitSite, fitness stüdyosu sahiplerini plan seçimi aşamasından canlı bir siteye taşıyan çalışan bir ödeme akışına sahiptir. Şimdi, tüm deneyimi tutarlı, markalı bir ürün gibi hissettireceğiz.

## Platform Alan Adınız {#your-platform-domain}

Markanızın temeli alan adınızdır. FitSite için:

- **Ana alan adı**: `fitsite.com` (pazarlama siteniz ve ağ kökünüz)
- **Müşteri siteleri**: `studioname.fitsite.com` (alt alan adları)
- **Özel alan adları**: Growth ve Pro planlarındaki müşteriler kendi alan adlarını eşleştirebilirler.

### Alan Adınızı Kurmak {#setting-up-your-domain}

1. Platform alan adınızı kaydedin
2. Bunu barındırma sağlayıcınıza yönlendirin
3. Müşteri alt alan adları için joker karakter DNS'i (`*.fitsite.com`) yapılandırın
4. Joker karakter SSL'in aktif olduğundan emin olun

Detaylı talimatlar için [Alan Adı Eşleştirme Nasıl Yapılır](/user-guide/domain-mapping/how-to-configure-domain-mapping) sayfasına bakın.

## Yönetici Deneyimini Beyaz Etiketleme (White-Labeling) {#white-labeling-the-admin-experience}

Bir fitness stüdyosu sahibi site paneline (dashboard) giriş yaptığında, WordPress veya Ultimate Multisite markasını değil, sizin markanızı görmelidir.

### Özel Giriş Sayfası {#custom-login-page}

WordPress giriş sayfasını şunları gösterecek şekilde özelleştirin:

- FitSite logonuz
- Fitness'e uygun arka plan görselleri
- Marka renkleriniz

### Dashboard Markalaması {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) eklentisini veya özel CSS kullanarak şunları yapın:

- WordPress logosunu FitSite logonuzla değiştirin
- Yönetici renk şemasını markanıza uyacak şekilde özelleştirin
- Fitness'e özel hızlı bağlantılar ve yardım kaynakları içeren özel bir dashboard widget'ı ekleyin

### Özel Yönetici Sayfaları {#custom-admin-pages}

Fitness stüdyosu sahipleri için en alakalı eylemleri öne çıkaran özel yönetici sayfaları oluşturmayı düşünün:

- "Sınıf Programınızı Düzenleyin"
- "Eğitmen Profillerini Güncelleyin"
- "Sitenizi Görüntüleyin"

Bu, nişle ilgili eylemleri standart WordPress menüsünün derinliklerine gömmek yerine, onları ön plana çıkararak öğrenme eğrisini azaltır.

## İletişimlerinizi Markalaştırmak {#branding-your-communications}

Her e-posta, fatura ve bildirim markanızı pekiştirmelidir.

### Sistem E-postaları {#system-emails}

**Ultimate Multisite > Ayarlar > E-postalar** bölümüne gidin ve tüm sistem e-postalarını özelleştirin:

- **Gönderen adı**: FitSite
- **Gönderen e-postası**: hello@fitsite.com
- **E-posta şablonları**: Marka renklerinizi ve logonuzu kullanın
- **Dil**: Fitness'e özel, her yerde

Özelleştirilmesi gereken temel e-postalar:

| E-posta | Genel Versiyon | FitSite Versiyonu |
|-------|----------------|-----------------|
| Hoş geldiniz | "Yeni siteniz hazır" | "Fitness stüdyosu web siteniz yayında" |
| Ödeme makbuzu | "Ödeme alındı" | "FitSite abonelik ödemesi onaylandı" |
| Deneme sona erme | "Denemeniz yakında sona eriyor" | "FitSite denemeniz 3 gün sonra bitiyor — stüdyo web sitenizi yayında tutun" |

### Faturalar {#invoices}

Fatura şablonlarını şunlarla özelleştirin:

- FitSite logonuz ve marka renkleriniz
- İşletme detaylarınız
- Fitness'e özel ürün adları (genel plan kimlikleri değil)

## Müşteriye Yönelik Site {#the-customer-facing-site}

Ana alan adınız (`fitsite.com`), platformu satan bir pazarlama sitesine ihtiyaç duyar. Bu, Ultimate Multisite ağ yöneticisinden ayrıdır; bu, işletmenizin halka açık yüzüdür.

Temel sayfalar:

- **Ana Sayfa**: Fitness işletmeleri için net bir değer önerisi
- **Özellikler**: FitSite'ın ne yaptığı, fitness terimleriyle
- **Fiyatlandırma**: Nişe özel özellik karşılaştırmalarıyla üç planınız
- **Örnekler**: Platform üzerinde oluşturulmuş siteleri sergileme
- **Kaydolun**: Ödeme formunuza bağlantılar

:::tip Pazarlama Siteniz Bir Ağ Sitesi Olabilir
Pazarlama sitenizi kendi ağınızdaki bir site olarak oluşturun. Bu, onu aynı dashboard'dan yönetmenizi sağlar ve kendi platformunuzun yeteneklerini sergiler.
:::

## Müşteriler İçin Özel Alan Adı {#custom-domain-for-customers}

Özel alan adlarını içeren planlardaki müşteriler için süreci net bir şekilde belgeleyin:

1. Müşteri alan adını bir kayıt kuruluşuna kaydeder veya transfer eder.
2. Müşteri DNS'i platformunuza yönlendirmek için günceller (tam kayıtları sağlayın).
3. Ultimate Multisite alan adı eşleştirmesini ve SSL'i yönetir.

Bu süreç için, teknik olmayan fitness stüdyosu sahiplerine yönelik hazırlanmış bir yardım makalesi veya bilgi tabanı girişi oluşturun.

## Şu Ana Kadar Oluşturduğumuz FitSite Ağı {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (alt alan adı modunda)
├── Ultimate Multisite (yapılandırılmış + markalı)
├── Platform Alan Adı (fitsite.com + joker karakter SSL)
├── Site Şablonları (Studio Essential, Gym Pro, Fitness Chain)
├── Ürünler (Starter, Growth, Pro + Sipariş Artırıcılar)
├── Ödeme Akışı (nişe özel, test edilmiş)
├── Markalaştırma
│   ├── Özel giriş sayfası
│   ├── Markalı admin dashboard'u
│   ├── Nişe özel sistem e-postaları
│   ├── Markalı faturalar
│   └── fitsite.com üzerindeki pazarlama sitesi
└── Onboarding akışına hazır (bir sonraki ders)
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Markalı bir deneyim için yapılandırılmış **Platform alan adı ve DNS**
- FitSite markasıyla baştan sona **beyaz etiketlenmiş admin**
- **Özelleştirilmiş iletişimler** — e-postalar, faturalar ve bildirimler tamamen markalı
- Fitness stüdyosu sahiplerine FitSite satan bir **pazarlama sitesi**
- Kendi alan adını isteyen müşteriler için **özel alan adı dokümantasyonu**

---

**Sonraki:** [Ders 8: Müşteri Onboarding'i](lesson-8-onboarding) — yeni bir kaydı aktif, mutlu bir müşteriye dönüştüren deneyimi tasarlıyoruz.
