---
title: Tema-Mütəxəssis Bacarıqlar
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Tema-Əsaslı Bacarıqlar {#theme-aware-skills}

Superdav AI Agent v1.10.0, aktiv WordPress temanıza avtomatik uyğunlaşan dörd yeni tema-əsaslı daxili bacarıq təqdim edir. Bu bacarıqlar, temanızın arxitekturasına və xüsusiyyətlərinə uyğunlaşdırılmış ixtisaslaşdırılmış bələdçilik və imkanlar təmin edir.

## Tema-Əsaslı Bacarıqlar Nədir? {#what-are-theme-aware-skills}

Tema-əsaslı bacarıqlar, AI köməkçisi tərəfindən saytınızda hazırda aktiv olan WordPress temasına əsasən avtomatik seçilən, öncədən qurulmuş bilik bazaları və alət dəstləridir. Temalar arasında keçid etdikdə, köməkçinin mövcud bacarıqları avtomatik yenilənir — əl ilə heç bir ayarlaşdırma tələb etmir.

Hər bir bacarıq aşağıdakıları əhatə edir:

- **Temaya xas sənədləşmə** — temanı necə istifadə etmək və özəlləşdirmək barədə bələdçilik
- **Blok və pattern istinadları** — mövcud bloklar, patternlar və dizayn seçimləri
- **Özəlləşdirmə nümunələri** — ümumi tapşırıqlar üçün kod parçaları və konfiqurasiya patternları
- **Ən yaxşı təcrübələr** — temanın arxitekturası və iş axını üçün tövsiyələr

## Mövcud Tema-Əsaslı Bacarıqlar {#available-theme-aware-skills}

### Blok Temaları (Block Themes) {#block-themes}

**Tətbiq olunur:** WordPress blok əsaslı (Full Site Editing) arxitekturasından istifadə edən temalar.

Block Themes bacarığı aşağıdakılar barədə bələdçilik verir:

- Blok redaktoru vasitəsilə şablonlar yaratmaq və redaktə etmək
- Blok patternları və yenidən istifadə edilə bilən bloklarla işləmək
- Global stilləri və theme.json ayarlarını özəlləşdirmək
- Tema bloklarından və variantlarından istifadə etmək
- Saytınız üçün özəl blok patternları qurmaq

**Avtomatik aktivləşir:** Aktiv temanız blok teması olduqda (``block-templates`` funksionallığını dəstəkləyir).

### Klassik Temalar (Classic Themes) {#classic-themes}

**Tətbiq olunur:** PHP şablonlarından və klassik redaktorundan istifadə edən ənənəvi WordPress temaları.

Classic Themes bacarığı aşağıdakılar barədə bələdçilik verir:

- PHP şablon faylları və hook-lar ilə işləmək
- Customizer vasitəsilə temanın görünüşünü özəlləşdirmək
- Widget sahələrindən və sidebar-lardan istifadə etmək
- CSS-i və child theme inkişafını dəyişdirmək
- Tema iyerarxiyasını və şablon taglarını anlamaq

**Avtomatik aktivləşir:** Aktiv temanız klassik (blok olmayan) tema olduqda.

### Kadence Blocks {#kadence-blocks}

**Tətbiq olunur:** İrəli blok əsaslı dizayn üçün Kadence Blocks plugin-indən istifadə edən saytlar.

Kadence Blocks bacarığı aşağıdakılar barədə bələdçilik verir:

- Kadence-in irəli blok kitabxanasından istifadə etmək (Hero, Testimonials, Pricing və s.)
- Kadence blok ayarlarını və responsive seçimlərini konfiqurasiya etmək
- Kadence-in grid və container blokları ilə özəl layoutlar qurmaq
- Kadence bloklarını temanızla inteqrasiya etmək
- Kadence-in dizayn sistemindən və presetlərindən istifadə etmək

**Avtomatik aktivləşir:** Kadence Blocks plugin-i saytınızda aktiv olduqda.

### Kadence Theme {#kadence-theme}

**Tətbiq olunur:** Blok əsaslı dizayn və özəlləşdirmə üçün Kadence temasından istifadə edən saytlar.

Kadence Theme bacarığı aşağıdakılar barədə bələdçilik verir:

- Global stillər və theme.json vasitəsilə Kadence temasını özəlləşdirmək
- Kadence-in daxili blok patternlarından və şablonlarından istifadə etmək
- Kadence tema ayarlarını və seçimlərini konfiqurasiya etmək
- Kadence-in dizayn sistemi ilə özəl dizaynlar qurmaq
- Kadence-i populyar plugin və alətlərlə inteqrasiya etmək

**Avtomatik aktivləşir:** Kadence teması aktiv temanız olduqda.

## Bacarıqlar Necə Seçilir {#how-skills-are-selected}

Köməkçi aktiv temanızı və quraşdırılmış pluginlərinizi hər mesajda avtomatik aşkarlayır. Əgər uyğun gələn tema-əsaslı bacarıq mövcuddursa, o, köməkçinin kontekstinə avtomatik yüklənir. Bacarıqları əl ilə aktivləşdirməyə və ya dəyişdirməyə ehtiyac yoxdur.

### Bir Neçə Bacarıq {#multiple-skills}

Əgər saytınıza bir neçə bacarıq tətbiq olunursa (məsələn, həm Kadence Blocks, həm də Kadence Theme aktivdirsə), köməkçi bütün tətbiq olunan bacarıqlara çıxışa malikdir və hər birindən bələdçilik götürə bilər.

### Temalar Arasında Keçid {#switching-themes}

Aktiv temanızı dəyişdikdə, köməkçinin mövcud bacarıqları növbəti mesajda avtomatik yenilənir. Məsələn:

1. **Block Themes** bacarığı aktiv olan bir blok temasından istifadə edirsiniz.
2. Klassik bir temaya keçirsiniz.
3. Növbəti mesajınızda, **Classic Themes** bacarığı avtomatik yüklənir və **Block Themes** bacarığı artıq mövcud deyil.

## Tema-Əsaslı Bacarıqlardan İstifadə {#using-theme-aware-skills}

Tema-əsaslı bacarıqdan istifadə etmək üçün sadəcə olaraq söhbət interfeysində nə etmək istədiyinizi təsvir edin. Köməkçi avtomatik olaraq müvafiq bacarığın bələdçiliyinə istinad edəcək.

### Nümunə Sorğular {#example-prompts}

**Block Themes üçün:**
> "Blok patternlarından istifadə edərək fon şəkli və mərkəzləşdirilmiş mətnlə bir hero bölməsi yaradın."

**Classic Themes üçün:**
> "Child theme istifadə edərək sidebar-a özəl bir widget sahəsi əlavə edin."

**Kadence Blocks üçün:**
> "Kadence Testimonials blokundan istifadə edərək bir şahidlərin bölməsini qurun."

**Kadence Theme üçün:**
> "Header layout və naviqasiya menyusu stilini özəlləşdirin."

Köməkçi aktiv temanıza və pluginlərinizə uyğun tema-xüsusi bələdçilik və kod nümunələri təqdim edəcək.

:::note
Tema-əsaslı bacarıqlar Superdav AI Agent v1.10.0 və sonrakı versiyalarda avtomatik mövcuddur. Əlavə qurulma və ya konfiqurasiya tələb etmir.
:::
