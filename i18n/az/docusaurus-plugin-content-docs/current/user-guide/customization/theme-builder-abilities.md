---
title: Tema Qurucu Qabiliyyətləri
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Block Temaları Qurmaq və Aktivləşdirmək

Superdav AI Agent v1.12.0, sizə chat interfeysindən birbaşa özad block temaları yaratmağa və yerləşdirməyə imkan verən iki güclü imkan təqdim edir.

## Ümumi Baxış

**scaffold-block-theme** və **activate-theme** imkanları agentlərin aşağıdakıları etməsinə imkan verir:
- Təsvirinizə əsaslanaraq tam, istehsalə hazır block temaları yaratmaq
- Temaları əl ilə müdaxilə etmədən saytınızda avtomatik aktivləşdirmək
- Təlimatlı dizayn qərarları vasitəsilə bir-biri ilə uyğun vizual identitetlər yaratmaq

## Block Teması Qurmaq (Scaffold)

**scaffold-block-theme** imkanı tam bir tema strukturu ilə yeni bir WordPress block teması yaradır, o cümlədən:

- Dizayn tokenləri ilə `theme.json` konfiqurasiyası
- Ümumi layoutlar üçün Block şablon faylları
- Xüsusi block stilləri və variantları
- Tema meta məlumatları və dəstəklənmə bəyanatları

### Necə Çağırılır

Superdav AI Agent ilə söhbətinizdə tema yaratmağı istəyə bilərsiniz:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent aşağıdakıları edəcək:
1. Söhbət vasitəsilə dizayn üstünlüklərinizi toplayacaq
2. Tam tema strukturunu yaradacaq
3. Bütün zəruri tema fayllarını hazırlayacaq
4. Temanı aktivləşdirməyə hazır vəziyyətə gətirəcək

### Gözlənilən Nəticə

İmkan uğurla yerinə yetirildikdə, aşağıdakıları görəcəksiniz:

- Temanın qurulduğuna dair təsdiq
- Tema adı və yeri
- Tətbiq edilmiş dizayn tokenlərinin xülasəsi (rənglər, tipoqrafiya, boşluq)
- Aktivləşdirməyə hazır vəziyyət

Nümunə çıxışı:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Temanı Aktivləşdirmək (Activate)

**activate-theme** imkanı saytınızı yeni qurulmuş və ya mövcud bir block temasına keçirir.

### Necə Çağırılır

Bir tema qurulduqdan sonra, onu dərhal aktivləşdirə bilərsiniz:

```
"Activate the Modern Agency theme"
```

Və ya mövcud istənilən bir temanı aktivləşdirə bilərsiniz:

```
"Switch to the Twentytwentyfour theme"
```

### Gözlənilən Nəticə

Aktivləşdirmə uğurlu olduqda:

- Aktiv temanın təsdiqi
- Əvvəlki temanın adı (istinad üçün)
- Temanın hazırda aktiv olduğu Sayt URL-i
- Temaya xas hər hansı bir qurulma qeydləri

Nümunə çıxışı:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## İş Axını: Qurmaq və Aktivləşdirmək

Tipik bir iş axını hər iki imkanı birləşdirir:

1. **Tema yaratmağı istəmək**: "SaaS landing səhifəm üçün bir block teması yarat"
2. **Agent temanı qurur**: Faylları və dizayn tokenlərini yaradır
3. **Nəzərdən keçirmək və təkmilləşdirmək**: Lazım olarsa, dizayn dəyişiklikləri müzakirə edilir
4. **Aktivləşdirmək**: "Temanı indi aktivləşdir"
5. **Yoxlamaq**: Yeni dizaynın aktiv olub-olmadığını təsdiq etmək üçün saytınıza daxil olun

## Dizayn Tokenləri və Fərdiləşdirmə

Qurulmuş temalar WordPress dizayn tokenlərindən ( `theme.json` vasitəsilə) aşağıdakılar üçün istifadə edir:

- **Rənglər**: Əsas (Primary), ikincil (Secondary), vurğu (Accent), neytral palitralar
- **Tipoqrafiya**: Şrift ailələri, ölçülər, çəkilər, sətir aralıqları
- **Boşluq**: Padding, margin, gap miqyasları
- **Sərhədlər**: Radius və en tokenləri
- **Kölgələr**: Yüksəklik səviyyələri

Bu tokenlər `theme.json` faylında mərkəzləşdirilmişdir, bu da bütün dizayn sisteminizi bir fayldan asan şəkildə tənzimləməyə imkan verir.

## Məhdudiyyətlər və Qeydlər

- Temalar `/wp-content/themes/` içində qurulur və WordPress adlandırma konvensiyalarına riayət etməlidir
- Aktivləşdirmə üçün WordPress saytınızda müvafiq icazələr tələb olunur
- Temalardakı xüsusi PHP kodu minimaldir; mürəkkəb funksionallıq üçün plugin-lardan istifadə edin
- Block temaları WordPress 5.9 və sonrakıları ilə ən yaxşı işləyir

## Problemlərin Həlli

**Qurulmuşdan sonra tema görünmür**
- Tema kataloqunun mövcud olduğundan və düzgün icazələrə malik olduğundan əmin olun
- `theme.json` faylının düzgün JSON formatında olduğundan əmin olun
- Tema adının mövcud temalarla qarşılıqlı düşmədiyindən əmin olun

**Aktivləşdirmə uğursuz olur**
- Administrator icazələriniz olduğundan əmin olun
- Tema kataloqunun WordPress tərəfindən oxuna bilən olduğundan əmin olun
- Detallar üçün WordPress xəta loglarını yoxlayın

**Dizayn tokenləri tətbiq olunmur**
- `theme.json` sintaksisinin düzgün olduğundan əmin olun
- Bütün caching plugin-larını təmizləyin
- WordPress versiyanızın istifadə etdiyiniz tokenləri dəstəklədiyini yoxlayın

## Növbəti Addımlar

Temanızı aktivləşdirdiyinizdən sonra aşağıdakıları edə bilərsiniz:
- Tipoqrafiyanı, rəngləri və boşluqları təkmilləşdirmək üçün **Design System Aesthetics skill**-dən istifadə edin
- WordPress block editor vasitəsilə fərdi block stillərini fərdiləşdirin
- Temanın `style.css` faylında xüsusi CSS əlavə edin
- Müəyyən səhifə növləri üçün xüsusi block şablonları yaradın
