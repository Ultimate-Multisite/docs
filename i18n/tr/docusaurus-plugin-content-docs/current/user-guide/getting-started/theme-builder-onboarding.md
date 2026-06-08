---
title: Tema Oluşturucu Başlangıç Akışı
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Tema Oluşturucu Başlatma Süreci

Superdav AI Agent v1.12.0, ilk kurulumunuz sırasında size özel bir blok teması oluşturmanıza yardımcı olan rehberli bir **Tema Oluşturucu başlatma süreci** sunuyor. Bu özellik, eski Site Builder modunun yerini daha esnek, yapay zeka destekli bir yaklaşımla alıyor.

## Tema Oluşturucu Başlatma Süreci Nedir?

Tema Oluşturucu başlatma süreci, aşağıdaki işlemleri yapan etkileşimli bir kurulum sihirbazıdır:

- Tasarım kararları (renkler, tipografi, düzen) konusunda size rehberlik eder
- Sitenizin görsel kimlik tercihlerini yakalar
- İhtiyaçlarınıza özel bir blok teması oluşturur
- İşlemi tamamladığınızda temayı otomatik olarak etkinleştirir

Bu süreç, sorular sorarak ve temanızı aşamalı olarak inşa eden **Setup Assistant agent** tarafından desteklenir.

## Tema Oluşturucu Başlatmaya Başlama

### İlk Çalıştırma Kurulumu

Superdav AI Agent'ı yeni bir WordPress kurulumunda ilk kez başlattığınızda şunları göreceksiniz:

```
Superdav AI Agent'a Hoş Geldiniz!

Ne yapmak istersiniz?
1. Özel bir tema oluştur (Tema Oluşturucu)
2. Mevcut bir tema kullan
3. Kurulumu şimdilik atla
```

Tema Oluşturucu başlatma sürecine girmek için **"Özel bir tema oluştur"** seçeneğini seçin.

### Manuel Etkinleştirme

Ayrıca, istediğiniz zaman aşağıdaki komutlardan birini isteyerek Tema Oluşturucu başlatma sürecini başlatabilirsiniz:

```
"Tema Oluşturucu başlatma sürecini başlat"
```

veya

```
"Özel bir tema oluşturmama yardım et"
```

## Başlatma Adımları

### Adım 1: Mod Seçimi

Setup Assistant agent, tercihiniz hakkında size sorar:

```
Temanızı nasıl oluşturmak istersiniz?
- Rehberli (Sorular soracağım ve sizin için oluşturacağım)
- Uygulamalı (Seçenekleri göstereceğim ve siz karar vereceksiniz)
```

Çoğu kullanıcı için **Rehberli mod** önerilir; agent, sektörünüze ve hedeflerinize göre tasarım önerileri yapar.

### Adım 2: Site Belirtimi

Siteniz hakkında sorular sorulacaktır:

- **Site amacı**: E-ticaret, blog, portföy, SaaS vb.
- **Hedef kitle**: Ziyaretçileriniz kimler?
- **Marka renkleri**: Birincil ve ikincil renkler (veya "Emin değilim")
- **Ton**: Profesyonel, yaratıcı, eğlenceli, minimal vb.

Bu bilgiler, agent'ların gelecekteki oturumlarda referans verdiği **site_brief** belleğinizde saklanır.

### Adım 3: Tasarım Sistemi Kararları

Agent, tasarım belirteçleri (design tokens) seçimi konusunda size rehberlik eder:

- **Tipografi**: Yazı tipi ailesi (serif, sans-serif, monospace) ve boyut ölçeği
- **Renk paleti**: Birincil, ikincil, vurgu ve nötr renkler
- **Boşluk (Spacing)**: Kompakt, normal veya ferah düzenler
- **Hareket (Motion)**: Animasyonlar ve geçişler (istenirse)

### Adım 4: Tema Oluşturma

Setup Assistant agent, özel blok temanızı şunlarla iskeletleştirir:

- Tüm tasarım belirteçlerinizi içeren `theme.json`
- Yaygın düzenler için blok şablonları (ana sayfa, blog, iletişim)
- Tasarım sisteminize uygun özel blok stilleri
- Tema meta verileri ve WordPress destek bildirimleri

### Adım 5: Etkinleştirme ve Doğrulama

Tema otomatik olarak etkinleştirilir ve şunları görürsünüz:

```
✓ Özel temanız artık yayında!
  Tema adı: [Siteniz Adı] Teması
  Renkler: [Birincil] / [İkincil]
  Tipografi: [Yazı Tipi Ailesi]

  Yeni tasarımı görmek için sitenizi ziyaret edin.
```

Daha sonra temanın doğru görünüp görünmediğini doğrulamak için sitenizi ziyaret edebilirsiniz.

## Site Belirtimi ve site_brief Belleği

Başlatma süreci sırasında, agent sitenizin belirtimini bir **site_brief** bellek kategorisinde yakalar. Bu şunları içerir:

- Site amacı ve hedefleri
- Hedef kitle
- Marka renkleri ve tonu
- Tasarım tercihleri
- İçerik yapısı

### site_brief Neden Önemli?

Gelecekteki oturumlarda agent'lar site_brief'inizi şunlar için referans alır:

- Değişiklikler boyunca tasarım tutarlılığını korumak
- Sitenizin amacına uygun özellikler önermek
- Bağlam bilincine sahip öneriler sağlamak
- Kurulum sorularını tekrarlamaktan kaçınmak

### site_brief'inizi Görüntüleme

Agent'a şunu sorabilirsiniz:

```
"site_brief'imi göster"
```

veya

```
"Sitem hakkında ne biliyorsun?"
```

Agent, depolanan site belirtiminizi gösterecektir.

## Başlatma Sonrası Özelleştirme

Tema Oluşturucu başlatma süreci tamamlandıktan sonra şunları yapabilirsiniz:

### Tasarım Sistemi Estetiği Yeteneğini Kullanma

Tasarım iyileştirmeleri isteyin:

```
"Tipografiyi daha modern olacak şekilde düzenle"
```

veya

```
"Renk paletini daha sıcak olacak şekilde ayarla"
```

**Design System Aesthetics skill**, size yönelik tasarım güncellemeleri konusunda rehberlik eder.

### theme.json Dosyasını Doğrudan Düzenleme

Gelişmiş kullanıcılar için, şu ayarları yapmak üzere `/wp-content/themes/[tema-adı]/theme.json` dosyasını düzenleyin:

- Renk belirteçleri
- Tipografi ölçekleri
- Boşluk değerleri
- Kenarlık ve gölge tanımları

### Özel Blok Şablonları Oluşturma

Şu amaçlar için özel şablonlar oluşturmak üzere WordPress blok düzenleyicisini kullanın:

- Ana sayfa düzenleri
- Blog yazısı sayfaları
- Ürün sayfaları
- İletişim formları

## Karşılaştırma: Eski vs. Yeni Başlatma Süreci

| Özellik | Site Builder (Eski) | Theme Builder (Yeni) |
|---------|-------------------|---------------------|
| Kurulum yöntemi | Sihirbaz tabanlı form | Agent rehberli konuşma |
| Tema oluşturma | Sınırlı şablonlar | Özel iskeletleştirme |
| Tasarım belirteçleri | Manuel giriş | Rehberli kararlar |
| Esneklik | Sabit seçenekler | Özelleştirilebilir |
| Gelecek güncellemeler | Referans alınmaz | site_brief'te saklanır |

## Sorun Giderme

**Başlatma süreci tamamlanmadı**
- Süreci yeniden başlatın: "Tema Oluşturucu başlatma sürecini başlat"
- WordPress kurulumunuzun güncel olduğundan emin olun
- Setup Assistant agent'ın etkinleştirildiğini doğrulayın

**site_brief'im kullanılmıyor**
- Agent'ın belleğe erişimi olduğundan emin olun
- Agent'tan "site_brief'imi hatırlat" diye isteyin
- Ayarlarınızda belleğin etkinleştirildiğini kontrol edin

**Oluşturulan tema tercihlerime uymuyor**
- Düzenlemek için Design System Aesthetics skill'i kullanın
- Agent'tan "temayı [belirli değişikliklerle] yeniden oluştur" diye isteyin
- Hassas kontrol için theme.json'ı doğrudan düzenleyin

## Sonraki Adımlar

Tema Oluşturucu başlatma sürecini tamamladıktan sonra:

1. **Sitenizi doğrulayın**: Yeni temayı görmek için sitenizi ziyaret edin
2. **Tasarımı iyileştirin**: Ayarlamalar için Design System Aesthetics skill'i kullanın
3. **İçerik ekleyin**: Sitenizin içeriğini oluşturmaya başlayın
4. **Yetenekleri keşfedin**: scaffold-block-theme ve activate-theme gibi diğer agent yetenekleri hakkında bilgi edinin
