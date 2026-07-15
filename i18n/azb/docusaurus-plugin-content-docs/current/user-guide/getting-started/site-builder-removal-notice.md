---
title: Site Builder Mode Removal Notice
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode Kaldırma Bildirimi

**Site Builder mode, Superdav AI Agent v1.12.0 sürümünde kaldırılmıştır.** Eğer Site Builder mode kullanıyorsanız, tema oluşturma ve site kurulumu için **Setup Assistant agent**'a geçiş yapmanız gerekir.

## Ne Oldu? {#what-happened}

### Site Builder Mode (Eski) {#site-builder-mode-legacy}

Site Builder mode, şu işlemler için bir sihirbaz arayüzüydü:

- Şablonlardan site oluşturma
- Temel ayarları yapılandırma
- Bir tema seçme
- Başlangıç içeriğini ayarlama

### Yerine Ne Geldi? {#what-replaced-it}

**Setup Assistant agent**, artık tüm Site Builder işlevlerini şunlarla birlikte ele alıyor:

- Daha esnek, agent rehberliğinde kurulum
- Daha iyi tema özelleştirme seçenekleri
- Theme Builder onboarding ile entegrasyon
- Gelecek oturumlar için kalıcı site_brief belleği

## Site Builder Mode Kullanıyorsanız {#if-you-were-using-site-builder-mode}

### Siteleriniz Güvende {#your-sites-are-safe}

- Site Builder mode ile oluşturulan mevcut siteler çalışmaya devam ediyor
- Veri kaybı veya site aksaması yok
- Sitelerinizi normal şekilde yönetmeye devam edebilirsiniz

### Setup Assistant Agent'a Geçiş Yapın {#migrate-to-setup-assistant-agent}

Yeni site kurulumu veya tema değişiklikleri için Setup Assistant agent'ı kullanın:

```
"Help me set up a new site"
```

veya

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent, daha fazla esneklik sunarak aynı işlevselliği sağlar.

## Karşılaştırma: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Özellik | Site Builder (Kaldırıldı) | Setup Assistant (Yeni) |
|---------|--------------------------|------------------------|
| Kurulum yöntemi | Sihirbaz formu | Agent konuşması |
| Tema seçimi | Önceden tanımlanmış şablonlar | Özel oluşturma |
| Özelleştirme | Sınırlı seçenekler | Tam tasarım sistemi |
| Site özeti | Saklanmıyor | Kalıcı bellek |
| Gelecek oturumlar | Kurulumu tekrarlama | Saklanan site_brief kullanımı |
| Esneklik | Sabit iş akışı | Uyumlu konuşma |

## Setup Assistant Agent'a Geçiş Yapma {#migrating-to-setup-assistant-agent}

### Yeni Siteler İçin {#for-new-sites}

Site Builder mode kullanmak yerine:

1. İstek: "Help me set up a new site"
2. Setup Assistant agent size şunlar konusunda rehberlik edecektir:
   - Site amacı ve hedefleri
   - Hedef kitle
   - Marka kimliği
   - Tema oluşturma
   - Başlangıç yapılandırması

### Mevcut Siteler İçin {#for-existing-sites}

Site Builder mode'dan kalan mevcut bir siteniz varsa:

1. Kullanmaya devam edebilirsiniz
2. Temayı güncellemek için şunu isteyin: "Redesign my site"
3. Setup Assistant agent yeni bir tema oluşturmanıza yardımcı olacaktır
4. Site verileriniz değişmeyecektir

### Tema Değişiklikleri İçin {#for-theme-changes}

Site Builder mode'un tema seçimi yerine:

1. İstek: "Change my theme"
2. Setup Assistant agent şunları yapacaktır:
   - Tasarım tercihlerinizi sorar
   - Özel bir tema oluşturur
   - Bunu sitenizde etkinleştirir

## Temel Farklılıklar {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Bir şablon seçin
2. Bir tema seçin
3. Temel ayarları yapılandırın
4. Tamamlandı
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Sitenizin amacını açıklayın
2. Hedef kitlenizi tanımlayın
3. Tasarım tercihlerinizi seçin
4. Agent özel tema oluşturur
5. Agent temayı etkinleştirir
6. Gelecek oturumlar için site özeti saklanır
```

## Setup Assistant Agent'ın Faydaları {#benefits-of-setup-assistant-agent}

### Daha Esnek {#more-flexible}

- Sitenizi doğal dilde tarif edin
- Özel öneriler alın
- Belirli ihtiyaçlarınıza uyum sağlar

### Daha İyi Özelleştirme {#better-customization}

- Özel tema oluşturma
- Tasarım sistemi kararları
- Kalıcı tasarım token'ları

### Kalıcı Bellek {#persistent-memory}

- site_brief'iniz saklanır
- Gelecek agent'lar sitenizi anlar
- Kurulum bilgisini tekrarlamaya gerek kalmaz

### Entegre İş Akışı {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- Hepsi sorunsuz bir şekilde birlikte çalışır

## Sorun Giderme {#troubleshooting}

### Site Builder mode'u bulamıyorum {#i-cant-find-site-builder-mode}

Site Builder mode kaldırıldı. Bunun yerine Setup Assistant agent'ı kullanın:

```
"Help me set up a new site"
```

### Site Builder'dan bir siteyi yeniden oluşturmak istiyorum {#i-want-to-recreate-a-site-from-site-builder}

Bunu Setup Assistant agent ile yeniden oluşturabilirsiniz:

1. İstek: "Help me set up a new site"
2. Orijinal sitenizin amacını ve tasarımını tarif edin
3. Agent benzer bir tema oluşturacaktır
4. site_brief'iniz gelecekteki referanslar için saklanacaktır

### Mevcut Site Builder sitem çalışmıyor {#my-existing-site-builder-site-isnt-working}

Site Builder mode ile oluşturulan mevcut siteler çalışmaya devam ediyor. Sorun yaşıyorsanız:

1. Temanızın hala etkin olduğundan emin olun
2. Plugin'lerinizin etkinleştirildiğini doğrulayın
3. WordPress hata günlüklerini kontrol edin
4. Sorunlar devam ederse destekle iletişime geçin

### Eski Site Builder şablonlarımı hala kullanabilir miyim? {#can-i-still-use-my-old-site-builder-templates}

Site Builder şablonları artık mevcut değil. Ancak:

- Mevcut siteleriniz çalışmaya devam ediyor
- Benzer siteleri Setup Assistant agent ile yeniden oluşturabilirsiniz
- Setup Assistant agent daha fazla özelleştirme seçeneği sunar

## Sonraki Adımlar {#next-steps}

1. **Yeni siteler için**: Setup Assistant agent'ı kullanın
2. **Mevcut siteler için**: Kullanmaya devam edin
3. **Tema değişiklikleri için**: Setup Assistant agent'tan yardım isteyin
4. **Tasarım iyileştirmesi için**: Design System Aesthetics skill'i kullanın

## İlgili Konular {#related-topics}

- **Theme Builder Onboarding**: Özel temalar için rehberli kurulum
- **Setup Assistant Agent**: Agent rehberliğinde site kurulumu
- **Site Specification Skill**: Sitenizin hedeflerini ve kitlesini tanımlama
- **Design System Aesthetics Skill**: Sitenizin görsel kimliğini iyileştirme
