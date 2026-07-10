---
title: Tasarım Sistemi Estetik Becerisi
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Tasarım Sistemi Estetiği Beceri Seti {#design-system-aesthetics-skill}

**Tasarım Sistemi Estetiği beceri seti**, sitenizin görsel kimliğini iyileştirmek için rehberli bir yaklaşımdır. Tasarım sisteminizi tanımlayan tipografi, renk, boşluk ve hareket tokenları hakkında tutarlı kararlar almanıza yardımcı olur.

## Tasarım Sistemi Estetiği Nedir? {#what-is-design-system-aesthetics}

Tasarım Sistemi Estetiği, aşağıdaki konuları kapsayan yapılandırılmış bir beceri setidir:

- **Tipografi**: Yazı tipi aileleri, boyutlar, ağırlıklar ve satır yükseklikleri
- **Renk**: Birincil, ikincil, vurgu ve nötr paletler
- **Boşluk**: İç dolgu (padding), dış boşluk (margin) ve aralık (gap) ölçekleri
- **Kenarlıklar**: Yarıçap ve genişlik tokenları
- **Gölgeler**: Yükselti ve derinlik tokenları
- **Hareket**: Animasyonlar ve geçişler

Bu kararlar, temanızın `theme.json` dosyasına kaydedilir ve uyumlu bir görsel sistem oluşturur.

## Tasarım Sistemi Estetiği Neden Kullanılmalı? {#why-use-design-system-aesthetics}

### Tutarlılık {#consistency}

Bir tasarım sistemi şunları sağlar:

- Tüm metinler aynı tipografi ölçeğini kullanır
- Renkler siteniz genelinde tutarlı bir şekilde kullanılır
- Boşluklar öngörülebilir bir düzen izler
- Animasyonlar bir bütünlük hissi verir

### Verimlilik {#efficiency}

Sayfa sayfa tasarım kararları vermek yerine, şunları yaparsınız:

- Tokenları bir kez tanımlarsınız
- Her yerde uygularsınız
- Tek bir değeri değiştirerek global olarak güncellersiniz

### Esneklik {#flexibility}

Şunları yapabilirsiniz:

- Tüm tasarım sisteminizi hızlıca ayarlayabilirsiniz
- Farklı estetiklerle deney yapabilirsiniz
- Gelişirken marka tutarlılığını koruyabilirsiniz

## Tasarım Sistemi Estetiği Beceri Setini Tetikleme {#triggering-the-design-system-aesthetics-skill}

### Manuel Aktivasyon {#manual-activation}

Beceri setini istediğiniz zaman başlatabilirsiniz:

```
"Help me refine my design system"
```

veya

```
"Let's improve my site's aesthetics"
```

veya

```
"Guide me through design system decisions"
```

### Otomatik Öneriler {#automatic-suggestions}

Aşağıdaki durumlarda ajan, beceriyi kullanmanızı önerebilir:

- Tasarım değişiklikleri istediğinizde
- "Modern" veya "Profesyonel" bir yeniden tasarım talep ettiğinizde
- Görsel tutarlılığı artırmak istediğinizde
- Sitenizi yayınlamaya hazırlanırken

## Tasarım Sistemi Estetiği Süreci {#the-design-system-aesthetics-process}

### Adım 1: Tipografi {#step-1-typography}

Ajan, yazı tipi seçimleriniz hakkında sorular sorar:

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

Ajan daha sonra şunları tanımlar:

- **Başlık fontu**: Başlıklar ve başlıklar için birincil font
- **Gövde fontu**: Paragraflar ve gövde metni için font
- **Monospace fontu**: Kod ve teknik içerik için font
- **Boyut ölçeği**: Önceden tanımlanmış boyutlar (small, base, large, XL vb.)
- **Ağırlık ölçeği**: Font ağırlıkları (regular, medium, bold vb.)
- **Satır yüksekliği**: Okunabilirlik için satırlar arasındaki boşluk

### Adım 2: Renk Paleti {#step-2-color-palette}

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

Ajan, şunları içeren eksiksiz bir palet oluşturur:

- Birincil, ikincil ve vurgu renkleri
- Nötr gri tonlar (açık, orta, koyu)
- Semantik renkler (başarı, uyarı, hata)
- Üzerine gelme (hover) ve aktif durumlar

### Adım 3: Boşluk {#step-3-spacing}

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

Ajan boşluk tokenlarını tanımlar:

- Temel birim (genellikle 4px veya 8px)
- Ölçek: xs, sm, md, lg, xl, 2xl
- Padding, margin, gap için özel değerler

### Adım 4: Kenarlıklar ve Gölgeler {#step-4-borders-and-shadows}

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

Ajan şunları oluşturur:

- Kenarlık yarıçapı tokenları (butonlar, kartlar, giriş alanları için)
- Yükselti seviyeleri için gölge tokenları
- Kenarlık genişliği tokenları

### Adım 5: Hareket ve Animasyon {#step-5-motion-and-animation}

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

Ajan şunları tanımlar:

- Geçiş süreleri (hızlı, normal, yavaş)
- Yumuşatma fonksiyonları (ease-in, ease-out, ease-in-out)
- Yaygın etkileşimler için animasyon anahtar kareleri

## Tasarım Sistemi Estetiğini Uygulama {#applying-design-system-aesthetics}

### Otomatik Uygulama {#automatic-application}

Beceri setini tamamladıktan sonra ajan:

1. Tüm tokenlarla temanızın `theme.json` dosyasını günceller
2. Tasarım sistemini aktif temanıza uygular
3. Yeni sisteme uyması için blok stillerini yeniden oluşturur
4. Güncellenmiş temayı etkinleştirir

### Manuel Uygulama {#manual-application}

Ayrıca `theme.json` dosyasını doğrudan düzenleyebilirsiniz:

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

## Tasarım Sisteminizi Görüntüleme {#viewing-your-design-system}

### Ajana Sorun {#ask-the-agent}

```
"Show me my design system"
```

veya

```
"What are my current design tokens?"
```

Ajan, tipografinizi, renklerinizi, boşluklarınızı ve diğer tokenlarınızı gösterecektir.

### theme.json'ı Görüntüleme {#view-themejson}

Ham token tanımlarını görmek için `/wp-content/themes/[theme-name]/theme.json` dosyasını bir metin düzenleyicide açın.

## Tasarım Sisteminizi Güncelleme {#updating-your-design-system}

### Hızlı Güncellemeler {#quick-updates}

Ajan'dan belirli değişiklikler isteyin:

```
"Make the primary color darker"
```

veya

```
"Increase the spacing scale by 20%"
```

veya

```
"Change the heading font to a serif"
```

### Tam Yeniden Tasarım {#full-redesign}

Tasarım Sistemi Estetiği beceri setini tekrar çalıştırın:

```
"Let's redesign my entire design system"
```

Bu, mevcut değerlerinizden başlayarak tüm kararlar boyunca size rehberlik edecektir.

### Kısmi Güncellemeler {#partial-updates}

Belirli yönleri güncelleyin:

```
"Just update the color palette, keep everything else"
```

## Tasarım Sistemi En İyi Uygulamaları {#design-system-best-practices}

### Tutarlılık {#consistency-1}

- Her yerde aynı tokenları kullanın
- Tek seferlik renkler veya boyutlar oluşturmayın
- Değerleri doğrudan kodlamak yerine tokenlara referans verin

### Adlandırma {#naming}

Açık, anlamsal isimler kullanın:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Ölçeklenebilirlik {#scalability}

Sisteminizi ölçeklenecek şekilde tasarlayın:

- Piksel yerine göreceli birimler (rem, em) kullanın
- Keyfi değerler yerine ölçekler oluşturun (xs, sm, md, lg, xl)
- Gelecekteki eklemeler için plan yapın

### Dokümantasyon {#documentation}

Tasarım sisteminizi belgeleyin:

- Belirli renkleri neden seçtiğiniz
- Her token ne zaman kullanılmalı
- İstisnalar ve uç durumlar

## Yaygın Tasarım Sistemi Kalıpları {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}

- Sans-serif tipografi (Inter, Helvetica)
- Sınırlı renk paleti (2-3 renk)
- Geniş boşluk
- Hafif gölgeler
- Akıcı, hızlı animasyonlar

### Sıcak ve Samimi {#warm-and-friendly}

- Serif ve sans-serif karışımı
- Sıcak renk paleti (turuncu, sıcak griler)
- Yuvarlatılmış köşeler
- Yumuşak gölgeler
- Eğlenceli animasyonlar

### Profesyonel Kurumsal {#professional-corporate}

- Temiz sans-serif (Roboto, Open Sans)
- Vurgu rengi ile nötr palet
- Yapılandırılmış boşluk
- Minimal gölgeler
- Hafif geçişler

### Yaratıcı ve Cesur {#creative-and-bold}

- Belirgin tipografi
- Cesur renk paleti
- Değişken boşluk
- Güçlü gölgeler
- Dikkat çekici animasyonlar

## Sorun Giderme {#troubleshooting}

**Tasarım sistemi değişikliklerim görünmüyor**
- Tarayıcı önbelleğinizi temizleyin
- Statik bir oluşturucu kullanıyorsanız sitenizi yeniden oluşturun
- `theme.json` dosyasının geçerli JSON olduğundan emin olun
- Temanın etkinleştirildiğini doğrulayın

**Renkler farklı sayfalarda farklı görünüyor**
- Eklentilerdeki çakışan CSS'leri kontrol edin
- Tüm sayfaların aynı temayı kullandığından emin olun
- Herhangi bir önbellekleme eklentisini temizleyin

**Önceki bir tasarım sistemine dönmek istiyorum**
- Ajana sorun: "Show me my design system history"
- theme.json'ı manuel olarak önceki değerlere düzenleyin
- Farklı seçimlerle beceri setini tekrar çalıştırın

## Sonraki Adımlar {#next-steps}

Tasarım sisteminizi tanımladıktan sonra:

1. **Sitenizi Gözden Geçirin**: Yeni tasarımı görmek için sitenizi ziyaret edin
2. **Daha Fazla İyileştirin**: Beceri setini tekrar kullanarak ayarlamalar yapın
3. **Şablonlar Oluşturun**: Tasarım tokenlarınızı kullanarak özel blok şablonları oluşturun
4. **Belgeleme**: Tasarım sisteminizi ekip üyeleriyle paylaşın
