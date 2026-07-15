---
title: 'Dars 7: Ki Yek-e Khod-et'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Ders 7: Kendi Markanla Yapmak

Müşterileriniz asla "bir WordPress eklentisi" kullanıyor gibi hissetmemeli. FitSite kullanıyor gibi hissetmeliler; sanki bu platform, onların sektörüne özel olarak inşa edilmiş gibi. Bu derste markalama (branding), beyaz etiketleme (white-labeling) ve platformu bir ürün gibi hissettirme konularını ele alacağız.

## Nereden Kalmıştık {#where-we-left-off}

FitSite, fitness stüdyosu sahiplerini plan seçimi yapmaktan canlı bir siteye taşıyan çalışan bir ödeme akışına sahip. Şimdi bu tüm deneyimi, bir bütün, markalı bir ürün gibi hissettireceğiz.

## Platform Alan Adınız (Domain) {#your-platform-domain}

Markanızın temeli alan adınızdır. FitSite için:

- **Ana alan adı**: `fitsite.com` (pazarlama siteniz ve ağ kökünüz)
- **Müşteri siteleri**: `studioname.fitsite.com` (alt alan adları)
- **Özel alan adları**: Growth ve Pro planlarındaki müşteriler kendi alan adlarını eşleştirebilirler.

### Alan Adınızı Kurmak {#setting-up-your-domain}

1. Platform alan adınızı kaydedin
2. Hosting sağlayıcınıza yönlendirin
3. Müşteri alt alan adları için wildcard DNS (`*.fitsite.com`) yapılandırın
4. Wildcard SSL'in aktif olduğundan emin olun

Detaylı talimatlar için [Domain Mapping Nasıl Yapılandırılır](/user-guide/domain-mapping/how-to-configure-domain-mapping) sayfasına bakın.

## Yönetici Deneyimine Beyaz Etiketleme (White-Labeling) {#white-labeling-the-admin-experience}

Bir fitness stüdyosu sahibi site paneline (dashboard) giriş yaptığında, orada WordPress veya Ultimate Multisite markasını değil, sizin markanızı görmeli.

### Özel Giriş Sayfası {#custom-login-page}

WordPress giriş sayfasını şu bilgileri gösterecek şekilde özelleştirin:

- FitSite logonuz
- Fitness temalı arka plan görselleri
- Marka renkleriniz

### Dashboard Markalaması {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) eklentisini veya özel CSS kullanarak şunları yapın:

- WordPress logosunu FitSite logonuzla değiştirin
- Yönetici renk şemasını markanıza uygun hale getirin
- Fitness'a özel hızlı bağlantılar ve yardım kaynakları içeren özel bir dashboard widget'ı ekleyin

### Özel Yönetici Sayfaları {#custom-admin-pages}

Fitness stüdyosu sahipleri için en alakalı eylemleri öne çıkaran özel yönetici sayfaları oluşturmayı düşünün:

- "Sınıf Programınızı Düzenleyin"
- "Eğitmen Profillerini Güncelleyin"
- "Sitenizi Görüntüleyin"

Bu, standart WordPress menüsünde kaybolan eylemleri yerine, nişle ilgili eylemleri merkeze koyarak öğrenme eğrisini azaltır.

## İletişimlerinizi Markalama {#branding-your-communications}

Her e-posta, fatura ve bildirim markanızı pekiştirmeli.

### Sistem E-postaları {#system-emails}

**Ultimate Multisite > Ayarlar > E-postalar** bölümüne gidin ve tüm sistem e-postalarını özelleştirin:

- **Gönderen adı**: FitSite
- **Gönderen e-postası**: hello@fitsite.com
- **E-posta şablonları**: Marka renklerinizi ve logonuzu kullanın
- **Dil**: Fitness'a özel olsun

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
- Fitness'a özel ürün adları (genel plan ID'leri değil)

## Müşteriye Yönelik Site {#the-customer-facing-site}

Ana alan adınız (`fitsite.com`), platformu satan bir pazarlama sitesine ihtiyaç duyar. Bu, Ultimate Multisite ağ yöneticisinden ayrıdır; bu, işletmenizin halka açık yüzüdür.

Temel sayfalar:

- **Ana Sayfa**: Fitness işletmeleri için net bir değer önerisi
- **Özellikler**: FitSite'ın ne yaptığı, fitness terimleriyle
- **Fiyatlandırma**: Nişe özel özellik karşılaştırmalarıyla üç planınız
- **Örnekler**: Platform üzerinde oluşturulmuş siteleri sergileme
- **Kaydol**: Ödeme formunuza bağlantılar

:::tip Pazarlama Siteniz Bir Ağ Sitesi Olabilir
Pazarlama sitenizi kendi ağınızdaki bir site olarak oluşturun. Bu, onu aynı dashboard'dan yönetmenizi sağlar ve kendi platformunuzun yeteneklerini gösterir.
:::

## Müşteriler İçin Özel Alan Adı {#custom-domain-for-customers}

Özel alan adlarını içeren planlardaki müşteriler için süreci net bir şekilde belgeleyin:

1. Müşteri alan adını bir kayıt kuruluşuna kaydeder veya transfer eder.
2. Müşteri DNS'i platformunuza yönlendirmek için günceller (tam kayıtları sağlayın).
3. Ultimate Multisite alan adı eşleştirmesini ve SSL'i yönetir.

Bu süreç için, teknik olmayan fitness stüdyosu sahiplerine yönelik bir yardım makalesi veya bilgi tabanı girişi oluşturun.

## Şu Ana Kadar Oluşturduğumuz FitSite Ağı {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Bu Derste Neler İnşa Ettik {#what-we-built-this-lesson}

- Markalı bir deneyim için yapılandırılmış **Platform alan adı ve DNS**
- FitSite markasıyla baştan sona özelleştirilmiş **Beyaz Etiketli Yönetici**
- **Özelleştirilmiş iletişimler** — e-postalar, faturalar ve bildirimler tamamen markalı
- FitSite'ı fitness stüdyosu sahiplerine satan bir **pazarlama sitesi**
- Kendi alan adını isteyen müşteriler için **özel alan adı dokümantasyonu**

---

**Sıradaki:** [Ders 8: Müşteri Başlangıç Süreci](lesson-8-onboarding) — yeni bir kaydı aktif, mutlu bir müşteriye dönüştüren deneyimi tasarlıyoruz.
