---
title: Tema Qurucu Onboarding Axını
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Tema Qurucu Onboarding Prosesi

Superdav AI Agent v1.12.0, ilk qurulum zamanı sizə özəl bir blok teması yaratmağa kömək edən təlimatlı bir **Tema Qurucu onboarding prosesi** təqdim edir. Bu, köhnə Site Builder rejiminin yerinə daha çevik, agent dəstəkli bir yanaşmadır.

## Tema Qurucu Onboarding Prosesi Nədir?

Tema Qurucu onboarding prosesi, aşağıdakıları edən interaktiv bir qurulum siuardıdır:

- Dizayn qərarları (rənglər, tipoqrafiya, yerləşdirmə) boyunca sizi yönləndirir.
- Saytınızın vizual identifikasiya üstünlüklərini yığır.
- Ehtiyaclarınıza uyğun özəl bir blok teması yaradır.
- Tamamlandığı zaman temanı avtomatik aktivləşdirir.

Bu proses **Setup Assistant agenti** tərəfindən idarə olunur; bu agent aydınlaşdırıcı suallar soruşur və temanızı addım-addım qurur.

## Tema Qurucu Onboarding Prosesinə Başlamaq

### İlk Qurulum

Superdav AI Agent-i yeni bir WordPress quraşdırmasında ilk dəfə işə salanda, aşağıdakıları görəcəksiniz:

```
Superdav AI Agent-ə xoş gəlmisiniz!

Nə etmək istərdiniz?
1. Özəl bir tema qurmaq (Theme Builder)
2. Mövcud bir temadan istifadə etmək
3. Qurulumu indi atlamaq
```

Tema Qurucu onboarding prosesinə daxil olmaq üçün **"Build a custom theme"** (Özəl bir tema qurmaq) seçin.

### Əl ilə Aktivasiya

Həmçinin, istənilən vaxt aşağıdakıları soruşaraq Tema Qurucu onboarding prosesinə başlaya bilərsiniz:

```
"Start the Theme Builder onboarding"
```

və ya

```
"Help me create a custom theme"
```

## Onboarding Addımları

### Addım 1: Rejim Seçimi

Setup Assistant agenti üstünlüyünüz haqqında soruşur:

```
Temanızı necə qurmaq istərdiniz?
- Guided (Mən suallar soruşub sizin üçün quracağam)
- Hands-on (Mən sizə seçimlər göstərəcəm və siz qərar verəcəksiniz)
```

**Guided mode** (Yönləndirilmiş rejim) əksər istifadəçilər üçün tövsiyə olunur; agent sizin sənayənizə və məqsədlərinizə əsaslanaraq dizayn tövsiyələri verir.

### Addım 2: Sayt Spesifikasiyası

Sizdən saytınız haqqında soruşulacaq:

- **Sayt məqsədi**: E-commerce, blog, portfolio, SaaS və s.
- **Hədəf auditoriya**: Ziyarətçiləriniz kimdir?
- **Brend rəngləri**: Əsas və ikincil rənglər (və ya "Məncə, bilmirəm")
- **Ton**: Peşəkar, yaradıcı, oyunbaz, minimal və s.

Bu məlumat **site_brief** yaddaşınızda saxlanılır və agentlər gələcək sessiyalarda buna istinad edir.

### Addım 3: Dizayn Sistemi Qərarları

Agent sizə dizayn tokenlərini seçmək üçün yönləndirir:

- **Tipoqrafiya**: Şrift ailəsi (serif, sans-serif, monospace) və ölçü miqyası
- **Rəng palitrası**: Əsas, ikincil, vurğu və neytral rənglər
- **Boşluq (Spacing)**: Yığcam, normal və ya geniş yerləşdirmələr
- **Hərəkət (Motion)**: Animasiyalar və keçidlər (istənilərsə)

### Addım 4: Tema Generasiyası

Setup Assistant agenti özəl blok temanızı aşağıdakılarla qurur:

- Bütün dizayn tokenlərinizi ehtiva edən `theme.json`
- Ümumi yerləşdirmələr üçün blok şablonları (ana səhifə, blog, əlaqə)
- Dizayn sisteminizə uyğun özəl blok stilləri
- Tema meta məlumatları və WordPress dəstəklənməsi bəyan etmələri

### Addım 5: Aktivasiya və Yoxlama

Tema avtomatik aktivləşdirilir və aşağıdakıları görəcəksiniz:

```
✓ Özəl temanız indi aktivdir!
  Tema adı: [Your Site Name] Theme
  Rənglər: [Primary] / [Secondary]
  Tipoqrafiya: [Font Family]

  Yeni dizaynı görmək üçün saytınıza daxil olun.
```

Daha sonra temanın düzgün göstərilməsini yoxlamaq üçün saytınıza daxil ola bilərsiniz.

## Sayt Spesifikasiyası və site_brief Yaddaşı

Onboarding prosesi zamanı agent saytınızın spesifikasiyasını **site_brief** yaddaş kateqoriyasında yığır. Buna aşağıdakılar daxildir:

- Sayt məqsədi və məqsədləri
- Hədəf auditoriya
- Brend rəngləri və tonu
- Dizayn üstünlükləri
- Məzmun strukturu

### site_brief Niyə Vacibdir

Gələcək sessiyalarda agentlər site_brief-inizə aşağıdakılar üçün istinad edir:

- Dəyişikliklər zamanı dizayn ardıcıllığını qorumaq
- Saytınızın məqsədi ilə uyğun xüsusiyyətlər təklif etmək
- Kontekstə uyğun tövsiyələr vermək
- Qurulum suallarını təkrarlamaqdan çəkinmək

### site_brief-inizi Görmək

Agentdən aşağıdakıları soruşa bilərsiniz:

```
"Show me my site brief"
```

və ya

```
"What do you know about my site?"
```

Agent yadda saxladığı sayt spesifikasiyasını göstərəcək.

## Onboardingdən Sonra Təkmilləşdirmə

Tema Qurucu onboarding prosesi tamamlandıqdan sonra, aşağıdakıları edə bilərsiniz:

### Design System Aesthetics Skill-dən İstifadə Etmək

Dizayn təkmilləşdirmələri soruşun:

```
"Refine the typography to be more modern"
```

və ya

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** (Dizayn Sistemi Estetika bacarığı) hədəflənmiş dizayn yeniləmələri boyunca sizə kömək edir.

### theme.json-u Birbaşa Redaktə Etmək

Təkmil istifadəçilər üçün, aşağıdakıları tənzimləmək üçün `/wp-content/themes/[theme-name]/theme.json` faylını redaktə edin:

- Rəng tokenləri
- Tipoqrafiya miqyaları
- Boşluq dəyərləri
- Sərhəd və kölgə tərifləri

### Özəl Blok Şablonları Yaratmaq

Aşağıdakılar üçün özəl şablonlar yaratmaq üçün WordPress blok redaktorundan istifadə edin:

- Ana səhifə yerləşdirmələri
- Blog məqaləsi səhifələri
- Məhsul səhifələri
- Əlaqə formaları

## Müqayisə: Köhnə vs. Yeni Onboarding

| Xüsusiyyət | Site Builder (Köhnə) | Theme Builder (Yeni) |
|---------|----------------------|-------------------|
| Qurulum metodu | Wizard əsaslı forma | Agent tərəfindən yönləndirilmiş söhbət |
| Tema generasiyası | Məhdud şablonlar | Özəl quruluş (scaffolding) |
| Dizayn tokenləri | Əl ilə daxil etmə | Yönləndirilmiş qərarlar |
| Çevikliyi | Sabit seçimlər | Təkmilləşdirilə bilən |
| Gələcək yeniləmələr | İstinad edilmir | site_brief-də saxlanılır |

## Problemlərin Həlli

**Onboarding prosesi tamamlanmadı**
- Prosesi yenidən başlatmaq: "Start the Theme Builder onboarding"
- WordPress quraşdırmanızın güncel olduğundan əmin olun
- Setup Assistant agentinin aktiv olduğundan əmin olun

**site_brief-im istifadə edilmir**
- Agentin yaddaşa çıxışının olduğunu təsdiqləyin
- Agentdən "recall my site brief" (site_brief-imi xatırlat) deməsini xahiş edin
- Ayarlarınızda yaddaşın aktiv olduğundan əmin olun

**Yaradılan tema üstünlüklərimə uyğun deyil**
- Təkmilləşdirmə üçün Design System Aesthetics skill-dən istifadə edin
- Agentdən "regenerate the theme with [specific changes]" (temanı [müəyyən dəyişikliklərlə] yenilə) deməsini xahiş edin
- Dəqiq nəzarət üçün theme.json-u birbaşa redaktə edin

## Növbəti Addımlar

Tema Qurucu onboarding prosesi tamamlandıqdan sonra:

1. **Saytınızı yoxlayın**: Yeni temanı görmək üçün saytınıza daxil olun.
2. **Dizaynı təkmilləşdirin**: Tənzimləmələr üçün Design System Aesthetics skill-dən istifadə edin.
3. **Məzmun əlavə edin**: Saytınızın məzmununu qurmağa başlayın.
4. **Bacarıqları araşdırın**: scaffold-block-theme və activate-theme kimi digər agent bacarıqları haqqında öyrənin.
