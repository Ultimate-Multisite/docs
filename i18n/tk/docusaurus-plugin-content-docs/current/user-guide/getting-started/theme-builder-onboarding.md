---
title: Tema Gurluşy Uğurlanmasy
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 sizde ilkin kurulumunuz sırasında özel bir blok teması yaratmanıza yardımcı olacak yönlendirilmiş **Theme Builder onboarding flow** (temadan önce ayar akışı) sunar. Bu, eski Site Builder modunu daha esnek, ajan destekli bir yaklaşımla değiştirir.

## Theme Builder Onboarding Flow Nedir? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow, şunları yapan etkileşimli bir kurulum sihirbazıdır:

- Tasarım kararları (renkler, tipografi, düzen) konusunda sizi yönlendirir
- Sitenizin görsel kimlik tercihlerini yakalar
- İhtiyaçlarınıza özel özel bir blok teması oluşturur
- Tamamlandığında temayı otomatik olarak etkinleştirir

Bu akış, açıklayıcı sorular soran ve temanızı kademeli olarak oluşturan **Setup Assistant agent** (Kurulum Asistanı ajanı) tarafından desteklenir.

## Theme Builder Onboarding'e Başlama {#starting-the-theme-builder-onboarding}

### İlk Çalıştırma Kurulumu (First-Run Setup) {#first-run-setup}

Superdav AI Agent'i yeni bir WordPress kurulumunda ilk başlattığınızda şunları göreceksiniz:

```
Superdav AI Agent'a hoş geldiniz!

Ne yapmak istersiniz?
1. Özel tema oluştur (Theme Builder)
2. Mevcut bir temayı kullan
3. Şimdilik kurulumu atla
```

Theme Builder onboarding flow'una girmek için **"Özel tema oluştur"** seçeneğini seçin.

### Manuel Etkinleştirme {#manual-activation}

Herhangi bir zamanda şunları isteyerek Theme Builder onboarding'e de başlayabilirsiniz:

```
"Start the Theme Builder onboarding"
```

veya

```
"Help me create a custom theme"
```

## Onboarding Adımları {#the-onboarding-steps}

### Adım 1: Mod Seçimi (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent sizden tercihiniz hakkında sorar:

```
Temanızı nasıl oluşturmak istersiniz?
- Yönlendirilmiş (Sorular soracağım ve sizin için onu oluşturacağım)
- Uygulamalı (Size seçenekleri göstereceğim ve siz karar vereceksiniz)
```

**Yönlendirilmiş mod**, çoğu kullanıcı için önerilir; ajan, sektörünüze ve hedeflerinize dayanarak tasarım önerileri sunar.

### Adım 2: Site Özellikleri (Site Specification) {#step-2-site-specification}

Sizden siteniz hakkında sorulacaktır:

- **Site maksady**: E-commerce, blog, portfolio, SaaS wepleri, şunlar.
- **Hedef auditoriya**: Sizi kimler görer?
- **Brand agzleri**: Başlıw (primary) we renkler we ikincil (secondary) we "mümkünsü bilmedim" diýip ýazyp bilersiňiz.
- **Ton**: Professional, yaratmçylykly, şeýle-şekilli, minimal we şunlar.

Bu maglumatlar size **site_brief** hatarynda saklanýar we agentler gelejekde bu hataryny referens edip bilýärler.

### 3-nji ädim: Design System Kararlary {#step-3-design-system-decisions}

Agent size design tokenlary (tasawur belgileri) bilen taryşygy geçdirýär:

- **Tipografi**: Fontulyk (serif, sans-serif, monospace) we agzalary
- **Renk palitramy**: Başlıw, ikincil, aksent we neýtral renkler
- **Boşluklar**: Ýumşak, normal ýa-da giňişli layoutlar
- **Harakatlar (Motion)**: Animasiýalar we geçişler (eğer isleseňiz)

### 4-nji ädim: Theme Döredilmegi {#step-4-theme-generation}

Setup Assistant agent size şu zatlary bilen özüňizden has howa goýan blok temany döredip berýär:

- Bütün design tokenlaryny öz içine alýan `theme.json`
- Umumy layoutlar üçin blok şablonlary (homepage, blog, contact)
- Design systemyza laýyklaşdyrylan custom block stylary
- Theme metadata we WordPress durnuklary barada deklarasiýalar

### 5-nji ädim: Aktivizasiýa we Barlaglaýyş {#step-5-activation-and-verification}

Tema awtomatiki aktivleşdirilýär we siz şu zatlary görersiňiz:

```
✓ Siziň custom temany indi işjeledir!
  Theme adı: [Siziň Site Ady] Theme
  Renkler: [Başlıw] / [İkincil]
  Tipografi: [Fontulyk]

  Iň soňky tasawurdy görmegi üçin site-iňizi zynjyryň.
```

Sonra tema düzgün görkezýändigini barlamak üçin site-iňizi barlap bilersiňiz.

## Site Spesifikasiýasy we site_brief Hatary {#site-specification-and-sitebrief-memory}

Onboarding (başlangyş) döredilýän wagtda, agent size siteňizi **site_brief** hatarynda özüni saklaýar. Bu şunlary öz içine alýar:

- Site maksady we maksatlary
- Hedef auditoriya
- Brand agzleri we tonu
- Design üstünlikleri (preferences)
- Content strukturasy

### site_brief Nirede Önemli? {#why-sitebrief-matters}

Gelejekde, agentler size site_brief hataryny şu zatlar üçin referens edip bilýärler:

### Siteniň qıssasını görmegi {#viewing-your-sitebrief}

Siz agenta şu soragy berip bilersiňiz:

```
"Show me my site brief"
```

ýa

```
"What do you know about my site?"
```

Agent siz saklanmış siteniziň spesifikasiyasyny görkezýär.

## Onboardingden soň özüni sazlamak {#customizing-after-onboarding}

Theme Builder onboarding tamamlandyndan soň, size şu zatlary edip bilersiňiz:

### Design System Aesthetics skilini ulanyň {#use-the-design-system-aesthetics-skill}

Dizayn hasaplanmagyny soraýan üçin:

```
"Refine the typography to be more modern"
```

ýa

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skilli** sizi esaslanýan dizayn täzelenmeler arkaly howa saklaýar.

### theme.json-y jogapkärlik bilen redaktir ediň {#edit-themejson-directly}

Özümden öwrenji ulanyjylar üçin, şu zatlary sazlamak üçin `/wp-content/themes/[theme-name]/theme.json` faylını redaktir ediň:

- Color tokens (Rangi belgileri)
- Typography scales (Harflerin ölçülendirilmesi)
- Spacing values (Aralyk derejeleri)
- Border and shadow definitions (Çäklemeler we gölge kesişmelerini bellemek)

### Custom Block Template-leri döredip görüň {#create-custom-block-templates}

WordPress block editorundan şu zatlar üçin özüňizden hasaplaýan şablonlary döredip ulanyň:

- Homepage layouts (Ana səhpeni görnüşleri)
- Blog post pages (Blog ýazgylarynyň sahypalary)
- Product pages (Wezipeler sahypalary)
- Contact forms (Iletişleri portal)

## Garaşdyrma: Köne we Täze Onboarding {#comparison-old-vs-new-onboarding}

| Özellik | Site Builder (Köne) | Theme Builder (Täze) |
|---|---|---|
| Sazlama usuly | Wizard-based form (Wizard esasly forma) | Agent-guided conversation (Agent tarapyndan hyzmat edilýän gürrüňdeşlik) |
| Tema döretmek | Limited templates (Çäreli şablonlar) | Custom scaffolding (Özden sazlanjyk) |
| Design tokens | Manual entry (El bilen ýazmak) | Guided decisions (Hyzmat edilip we maslahat berilýän kararlar) |
| Flexibilitet | Fixed options (Dogrulanmagan opsionalar) | Customizable (Sazlanjykly) |
| Geljekki täzelenmeler | Not referenced (Referensizdir) | Stored in site_brief (site_brief-de saklanýar) |

## Soraglar bilen çözmek {#troubleshooting}

**Onboarding akymy tamamlanmady**
- Akymy redaktir ediň: "Start the Theme Builder onboarding" (Theme Builder onboardingini başlatmak)
- WordPress instalasiýanyň täze bolup olmadığını barlap görüň
- Setup Assistant agenti işjeň edip etmediğini tassyklap görüň

**Meni site_brief ujemdir**
- Agent-in memory barada elinizde bolup baýlanýandygyny anyklaň
- Agentden "my site briefini ýatlap" diýip soraň
- Memory-ni siziň tassyklaryňyzda işleýändigini barlap görüň

**Hasaplanan tema meni hasaplanýan görnüşim bilen sazlaşmady**
- Onu sazlamak üçin Design System Aesthetics skill-ini ulanmagyň
- Agentden "[hasaplaýan üýtgeşmeler bilen] temany täzelendirmek" diýip soraň
- Kesgitlemek üçin theme.json-y jogapkärlikde düzetmäge girizdi

## Soňraki ädimler {#next-steps}

Theme Builder-i tamamlandyryp çykaryp çykanandan soň:

1. **Siteňizi barlap görüň**: Täze temany görmegi üçin siteňize girmegiň
2. **Dizigny sazlaň**: Sazlamak üçin Design System Aesthetics skill-ini ulanyp görnüşleri düzetmäge başlaň
3. **Mundaryat goşdirip görüň**: Siteňizi gurmak üçin mundaryaty başlatyň
4. **Käbilyklere seretap**: scaffold-block-theme we activate-theme ýaly beýleki agent käbilişleri hakda öwrenip görnüşiň
