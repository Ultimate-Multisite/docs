---
title: Dizayn Sistemi Estetika Bacarığı
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Dizayn Sistemi Estetikası Bacarığı

**Dizayn Sistemi Estetikası bacarığı**, saytınızın vizual identitetini təkmilləşdirmək üçün tətbiqi bir yanaşmadır. Bu bacarıq, dizayn sisteminizi müəyyən edən tipoqrafiya, rəng, boşluq və hərəkət tokenləri haqqında ardıcıl qərarlar verməyinizə kömək edir.

## Dizayn Sistemi Estetikası nədir? {#what-is-design-system-aesthetics}

Dizayn Sistemi Estetikası, aşağıdakıları əhatə edən strukturlaşdırılmış bir bacarıqdır:

- **Tipoqrafiya**: Şrift ailələri, ölçüləri, çəkimləri və sətir hündürlükləri
- **Rəng**: Əsas, ikincil, vurğulayıcı və neytral palitlər
- **Boşluq**: Padding, margin və gap miqyasları
- **Sərhədlər**: Radius və en tokenləri
- **Kölgələr**: Yüksəklik və dərinlik tokenləri
- **Hərəkət**: Animasiyalar və keçidlər

Bu qərarlar, uyğun bir vizual sistem yaratmaq üçün mövzu (theme) `theme.json` faylınızda saxlanılır.

## Dizayn Sistemi Estetikası Niyə İstifadə Edilməlidir? {#why-use-design-system-aesthetics}

### Ardıcıllık (Consistency) {#consistency}

Bir dizayn sistemi aşağıdakıları təmin edir:

- Bütün mətn eyni tipoqrafiya miqyasından istifadə edir
- Rənglər saytınız boyunca ardıcıl istifadə olunur
- Boşluqlar proqnozlaşdırıla bilən bir nizam izləyir
- Animasiyalar birgə vəhdətlənmiş hiss olunur

### Effektivlik (Efficiency) {#efficiency}

Səhifə-səhifə dizayn qərarları vermək əvəzinə, siz:

- Tokenləri bir dəfə təyin edirsiniz
- Hər yerdə tətbiq edirsiniz
- Bir dəyəri dəyişərək global olaraq yeniləyirsiniz

### Çeviklik (Flexibility) {#flexibility}

Aşağıdakıları edə bilərsiniz:

- Bütün dizayn sisteminizi tez bir zamanda tənzimləyə bilərsiniz
- Müxtəlif estetikalarla sınaqdan keçirə bilərsiniz
- İnkişaf edərkən brend ardıcılığını qoruyaraq

## Dizayn Sistemi Estetikası Bacarığını Aktivləşdirmək {#triggering-the-design-system-aesthetics-skill}

### Əl ilə Aktivləşdirmə {#manual-activation}

Bacarığı istənilən vaxt başlatmaq olar:

```
"Help me refine my design system"
```

və ya

```
"Let's improve my site's aesthetics"
```

və ya

```
"Guide me through design system decisions"
```

### Avtomatik Təkliflər {#automatic-suggestions}

Agent, aşağıdakıları etdiyiniz zaman bacarıqdan istifadə etməyi təklif edə bilər:

- Dizayn dəyişiklikləri istəyirsinizsə
- "Müasir" və ya "peşəkar" yenidən dizayn istəyirsinizsə
- Vizual ardıcılığı yaxşılaşdırmaq istəyirsinizsə
- Saytınızı buraxmağa hazırlaşırsınızsa

## Dizayn Sistemi Estetikası Prosesi {#the-design-system-aesthetics-process}

### Addım 1: Tipoqrafiya {#step-1-typography}

Agent sizin şrift seçimləriniz haqqında soruşur:

```
What's your preferred typography style?
- Serif (traditional, elegant)
- Sans-serif (modern, clean)
- Monospace (technical, code-focused)

For your heading font:
- Do you want a distinct heading font, or use the same as body text?
- Preference: bold, elegant, playful, minimal?

For your body font:
- Readability is key. Do you prefer:
  - Larger, more spacious text
  - Compact, efficient text
  - Standard sizing
```

Daha sonra agent aşağıdakıları təyin edir:

- **Heading font**: Başlıqlar və başlıqlar üçün əsas şrift
- **Body font**: Paragraflar və mətn üçün şrift
- **Monospace font**: Kod və texniki məzmun üçün şrift
- **Size scale**: Ön-təyin edilmiş ölçülər (small, base, large, XL və s.)
- **Weight scale**: Şrift çəkimləri (regular, medium, bold və s.)
- **Line height**: Oxunaqlıq üçün sətirlər arasındakı boşluq

### Addım 2: Rəng Palitrası {#step-2-color-palette}

```
Let's define your color palette.

Primary color (your brand color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Secondary color (supporting color):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Accent color (highlights and CTAs):
- Current: [shows existing color]
- Change to: [color picker or hex code]

Neutral palette (grays for text, borders, backgrounds):
- Light: [color]
- Medium: [color]
- Dark: [color]
```

Agent aşağıdakıları əhatə edən tam bir palitra yaradır:

- Əsas, ikincil və vurğulayıcı rənglər
- Neytral boz tonlar (açıq, orta, tünd)
- Semantik rənglər (success, warning, error)
- Hover və aktiv vəziyyətlər

### Addım 3: Boşluq (Spacing) {#step-3-spacing}

```
How much breathing room do you want?

Spacing scale preference:
- Compact (tight, efficient layouts)
- Normal (balanced spacing)
- Spacious (generous whitespace)

This affects:
- Padding inside buttons and cards
- Margins between sections
- Gap between grid items
```

Agent boşluq tokenlərini təyin edir:

- Base unit (adətən 4px və ya 8px)
- Scale: xs, sm, md, lg, xl, 2xl
- Padding, margin, gap üçün spesifik dəyərlər

### Addım 4: Sərhədlər və Kölgələr {#step-4-borders-and-shadows}

```
Visual depth and definition:

Border radius preference:
- Sharp (no rounding)
- Subtle (small radius)
- Rounded (medium radius)
- Very rounded (large radius)

Shadow depth:
- Flat (no shadows)
- Subtle (light shadows)
- Pronounced (strong shadows)
```

Agent aşağıdakıları yaradır:

- Border radius tokenləri (düymələr, kartlar, inputlar üçün)
- Yüksəklik səviyyələri üçün kölgə tokenləri
- Border en tokenləri

### Addım 5: Hərəkət və Animasiya {#step-5-motion-and-animation}

```
How should your site feel when interactive?

Animation preference:
- Minimal (no animations)
- Subtle (gentle transitions)
- Playful (noticeable animations)

Specific animations:
- Page transitions: fade, slide, or none?
- Button hover: scale, color change, or both?
- Loading states: spinner, skeleton, or progress bar?
```

Agent aşağıdakıları təyin edir:

- Transition müddətləri (fast, normal, slow)
- Easing funksiyaları (ease-in, ease-out, ease-in-out)
- Ümumi interaksiyalar üçün animasiya keyframe-ləri

## Dizayn Sistemi Estetikası Tətbiqi {#applying-design-system-aesthetics}

### Avtomatik Tətbiq {#automatic-application}

Bacarığı tamamladıqdan sonra, agent:

1. Bütün tokenlərlə mövzu `theme.json` faylınızı yeniləyir
2. Dizayn sistemini aktiv mövzuya tətbiq edir
3. Yeni sistemə uyğunlaşmaq üçün blok stillərini yenidən yaradır
4. Yenilənmiş mövzunu aktivləşdirir

### Əl ilə Tətbiq {#manual-application}

`theme.json` faylını birbaşa redaktə edə bilərsiniz:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Dizayn Sisteminizi Görüntüləmək {#viewing-your-design-system}

### Agentdən Soruşmaq {#ask-the-agent}

```
"Show me my design system"
```

və ya

```
"What are my current design tokens?"
```

Agent tipoqrafiyanızı, rənglərinizi, boşluqlarınızı və digər tokenlərinizi göstərəcək.

### theme.json-u Görüntüləmək {#view-themejson}

Ham mətn redaktorunda `/wp-content/themes/[theme-name]/theme.json` yolunu açaraq xam token təriflərinə baxa bilərsiniz.

## Dizayn Sisteminizi Yeniləmək {#updating-your-design-system}

### Tez Yeniləmələr {#quick-updates}

Agentdən spesifik dəyişikliklər üçün soruşun:

```
"Make the primary color darker"
```

və ya

```
"Increase the spacing scale by 20%"
```

və ya

```
"Change the heading font to a serif"
```

### Tam Yenidən Dizayn {#full-redesign}

Dizayn Sistemi Estetikası bacarığını yenidən işə salın:

```
"Let's redesign my entire design system"
```

Bu, mövcud dəyərlərinizdən başlayaraq bütün qərarlardan keçməyinizə kömək edəcək.

### Qismən Yeniləmələr {#partial-updates}

Müəyyən aspektləri yeniləyin:

```
"Just update the color palette, keep everything else"
```

## Dizayn Sistemi Ən Yaxşı Praktikaları {#design-system-best-practices}

### Ardıcıllık {#consistency-1}

- Hər yerdə eyni tokenlərdən istifadə edin
- Bir dəfəlik rənglər və ya ölçülər yaratmayın
- Dəyərləri sərt kodlamaq əvəzinə tokenlərdən istifadə edin

### Adlandırma {#naming}

Aydın, semantik adlardan istifadə edin:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Miqyaslanabilirlik (Scalability) {#scalability}

Sisteminizi miqyaslanmaq üçün dizayn edin:

- Piksel əvəzinə nisbi vahidlər (rem, em) istifadə edin
- Arbitrary dəyərlər əvəzinə miqyaslar yaradın (xs, sm, md, lg, xl)
- Gələcək əlavələr üçün planlaşdırın

### Dokumentasiya {#documentation}

Dizayn sisteminizi sənədləşdirin:

- Niyə müəyyən rəngləri seçdiyinizi
- Hər tokenin nə vaxt istifadə edilməli olduğunu
- İstisnaları və kənar halları

## Ümumi Dizayn Sistemi Nümunələri {#common-design-system-patterns}

### Müasir Minimalist {#modern-minimalist}

- Sans-serif tipoqrafiya (Inter, Helvetica)
- Məhdud rəng palitrası (2-3 rəng)
- Geniş boşluq
- Zərif kölgələr
- Hamar, sürətli animasiyalar

### İstili və Dostyana {#warm-and-friendly}

- Serif və sans-serif qarışığı
- İstili rəng palitrası (narıncı, isti boz)
- Yuvarlaq künclər
- Yumşaq kölgələr
- Oyunçu animasiyalar

### Peşəkar Korporativ {#professional-corporate}

- Təmiz sans-serif (Roboto, Open Sans)
- Vurğulayıcı rəngli neytral palitra
- Strukturlaşdırılmış boşluq
- Minimal kölgələr
- Zərif keçidlər

### Yaradıcı və Cəsarətli {#creative-and-bold}

- Xüsusi tipoqrafiya
- Cəsarətli rəng palitrası
- Müxtəlif boşluqlar
- Güclü kölgələr
- Diqqət çəkən animasiyalar

## Problemlərin Həlli (Troubleshooting) {#troubleshooting}

**Dizayn sistemimdəki dəyişikliklər görünmür**
- Brauzer cache-inizi təmizləyin
- Statik generator istifadə edirsinizsə, saytınızı yenidən qurun (rebuild)
- `theme.json` faylının düzgün JSON olduğundan əmin olun
- Mövzu aktivdirmi yoxlayın

**Rənglər fərqli səhifələrdə fərqli görünür**
- Pluginlərdə qarşıdurucu CSS yoxlayın
- Bütün səhifələrin eyni mövzudan istifadə etdiyinə əmin olun
- Bütün caching pluginlərini təmizləyin

**Əvvəlki dizayn sisteminə qayıtmaq istəyirəm**
- Agentdən soruşun: "Show me my design system history"
- `theme.json` faylını əl ilə əvvəlki dəyərlərə redaktə edin
- Bacarığı fərqli seçimlərlə yenidən işə salın

## Növbəti Addımlar {#next-steps}

Dizayn sisteminizi təyin etdikdən sonra:

1. **Saytınızı nəzərdən keçirin**: Yeni dizaynı görmək üçün saytınıza daxil olun
2. **Daha da təkmilləşdirin**: Bacarığı yenidən istifadə edərək tənzimləmələr edin
3. **Şablonlar yaradın**: Dizayn tokenlərinizdən istifadə edərək fərdiləşdirilmiş blok şablonları yaradın
4. **Sənədləşdirin**: Dizayn sisteminizi komanda üzvlərinizlə bölüşün
