---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Kurulum Süreci {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0, ilk kurulumunuz sırasında size özel bir blok teması oluşturmanıza yardımcı olan rehberli bir **Theme Builder kurulum süreci** getiriyor. Bu özellik, eski Site Builder modunun yerini daha esnek, yapay zeka destekli bir yaklaşımla alıyor.

## Theme Builder Kurulum Süreci Nedir? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder kurulum süreci, aşağıdaki adımları içeren etkileşimli bir kurulum sihirbazıdır:

- Tasarım kararları (renkler, tipografi, düzen) konusunda size rehberlik eder
- Sitenizin görsel kimlik tercihlerini yakalar
- İhtiyaçlarınıza özel, özelleştirilmiş bir blok teması oluşturur
- İşlemi tamamladığınızda temayı otomatik olarak etkinleştirir

Bu süreç, sorular sorarak ve temanızı aşamalı olarak inşa eden **Setup Assistant agent** tarafından desteklenir.

## Theme Builder Kurulumuna Başlama {#starting-the-theme-builder-onboarding}

### İlk Kez Kurulum {#first-run-setup}

Superdav AI Agent'ı yeni bir WordPress kurulumunda ilk kez başlattığınızda şunları göreceksiniz:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder kurulum sürecine girmek için **"Build a custom theme"** (Özel bir tema oluştur) seçeneğini seçin.

### Manuel Aktivasyon {#manual-activation}

Ayrıca, istediğiniz zaman aşağıdaki komutları kullanarak Theme Builder kurulum sürecini başlatabilirsiniz:

```
"Start the Theme Builder onboarding"
```

veya

```
"Help me create a custom theme"
```

## Kurulum Adımları {#the-onboarding-steps}

### Adım 1: Mod Seçimi {#step-1-mode-selection}

Setup Assistant agent, tercihiniz hakkında size sorar:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

Çoğu kullanıcı için **Guided mode** (Rehberli mod) önerilir; agent, sektörünüze ve hedeflerinize göre tasarım önerileri yapar.

### Adım 2: Site Belirtimi {#step-2-site-specification}

Siteniz hakkında sorular sorulacaktır:

- **Site amacı**: E-ticaret, blog, portfolyo, SaaS vb.
- **Hedef kitle**: Ziyaretçileriniz kimler?
- **Marka renkleri**: Birincil ve ikincil renkler (veya "Emin değilim")
- **Ton**: Profesyonel, yaratıcı, eğlenceli, minimal vb.

Bu bilgiler, agent'ların gelecekteki oturumlarda referans aldığı **site_brief** belleğinizde saklanır.

### Adım 3: Tasarım Sistemi Kararları {#step-3-design-system-decisions}

Agent, tasarım token'ları seçimi konusunda size rehberlik eder:

- **Tipografi**: Font ailesi (serif, sans-serif, monospace) ve boyut ölçeği
- **Renk paleti**: Birincil, ikincil, vurgu ve nötr renkler
- **Boşluk (Spacing)**: Kompakt, normal veya geniş düzenler
- **Hareket (Motion)**: Animasyonlar ve geçişler (istenirse)

### Adım 4: Tema Oluşturma {#step-4-theme-generation}

Setup Assistant agent, özel blok temanızı şunlarla birlikte hazırlar:

- Tüm tasarım token'larınızı içeren `theme.json`
- Yaygın düzenler için blok şablonları (ana sayfa, blog, iletişim)
- Tasarım sisteminize uygun özel blok stilleri
- Tema meta verileri ve WordPress destek bildirimleri

### Adım 5: Aktivasyon ve Doğrulama {#step-5-activation-and-verification}

Tema otomatik olarak etkinleştirilir ve şunları görürsünüz:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Daha sonra temanın doğru görünüp görünmediğini kontrol etmek için sitenizi ziyaret edebilirsiniz.

## Site Belirtimi ve site_brief Belleği {#site-specification-and-sitebrief-memory}

Kurulum süreci boyunca, agent sitenizin belirtimini bir **site_brief** bellek kategorisinde yakalar. Bu şunları içerir:

- Site amacı ve hedefleri
- Hedef kitle
- Marka renkleri ve tonu
- Tasarım tercihleri
- İçerik yapısı

### site_brief Neden Önemli? {#why-sitebrief-matters}

Gelecekteki oturumlarda agent'lar site_brief'inizi şunlar için referans alır:

- Değişiklikler sırasında tasarım tutarlılığını korumak
- Sitenizin amacına uygun özellikler önermek
- Bağlam bilincine sahip öneriler sunmak
- Kurulum sorularını tekrarlamaktan kaçınmak

### site_brief'inizi Görüntüleme {#viewing-your-sitebrief}

Agent'a şunu sorabilirsiniz:

```
"Show me my site brief"
```

veya

```
"What do you know about my site?"
```

Agent, depolanan site belirtiminizi gösterecektir.

## Kurulum Sonrası Özelleştirme {#customizing-after-onboarding}

Theme Builder kurulum süreci tamamlandıktan sonra şunları yapabilirsiniz:

### Design System Aesthetics Skill'ı Kullanma {#use-the-design-system-aesthetics-skill}

Tasarım iyileştirmeleri isteyin:

```
"Refine the typography to be more modern"
```

veya

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** (Tasarım Sistemi Estetiği becerisi), size yönelik hedeflenmiş tasarım güncellemeleri konusunda rehberlik eder.

### theme.json'ı Doğrudan Düzenleme {#edit-themejson-directly}

Gelişmiş kullanıcılar için, şu ayarları yapmak üzere `/wp-content/themes/[theme-name]/theme.json` dosyasını düzenleyin:

- Renk token'ları
- Tipografi ölçekleri
- Boşluk değerleri
- Kenarlık ve gölge tanımları

### Özel Blok Şablonları Oluşturma {#create-custom-block-templates}

Şu amaçlar için özel şablonlar oluşturmak üzere WordPress blok düzenleyicisini kullanın:

- Ana sayfa düzenleri
- Blog yazısı sayfaları
- Ürün sayfaları
- İletişim formları

## Karşılaştırma: Eski ve Yeni Kurulum Süreci {#comparison-old-vs-new-onboarding}

| Özellik | Site Builder (Eski) | Theme Builder (Yeni) |
|---------|----------------------|-------------------|
| Kurulum yöntemi | Sihirbaz tabanlı form | Agent rehberli konuşma |
| Tema oluşturma | Sınırlı şablonlar | Özel iskelet (scaffolding) |
| Tasarım token'ları | Manuel giriş | Rehberli kararlar |
| Esneklik | Sabit seçenekler | Özelleştirilebilir |
| Gelecek güncellemeler | Referans alınmaz | site_brief'te saklanır |

## Sorun Giderme {#troubleshooting}

**Kurulum süreci tamamlanmadı**
- Süreci yeniden başlatın: "Start the Theme Builder onboarding"
- WordPress kurulumunuzun güncel olduğundan emin olun
- Setup Assistant agent'ın etkinleştirildiğini doğrulayın

**site_brief'im kullanılmıyor**
- Agent'ın belleğe erişimi olduğundan emin olun
- Agent'tan "recall my site brief" (site_brief'imi hatırlat) diye isteyin
- Ayarlarınızda belleğin etkinleştirildiğini kontrol edin

**Oluşturulan tema tercihlerime uymuyor**
- Bunu iyileştirmek için Design System Aesthetics skill'ı kullanın
- Agent'tan "regenerate the theme with [specific changes]" (belirli değişikliklerle temayı yeniden oluştur) diye isteyin
- Hassas kontrol için theme.json'ı doğrudan düzenleyin

## Sonraki Adımlar {#next-steps}

Theme Builder kurulum sürecini tamamladıktan sonra:

1. **Sitenizi doğrulayın**: Yeni temayı görmek için sitenizi ziyaret edin
2. **Tasarımı iyileştirin**: Ayarlamalar için Design System Aesthetics skill'ı kullanın
3. **İçerik ekleyin**: Sitenizin içeriğini oluşturmaya başlayın
4. **Yetenekleri keşfedin**: scaffold-block-theme ve activate-theme gibi diğer agent yetenekleri hakkında bilgi edinin
