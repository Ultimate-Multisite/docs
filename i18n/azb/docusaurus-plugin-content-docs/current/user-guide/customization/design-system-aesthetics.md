---
title: Design System Aesthetics Skill
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Design System Estetiği Becerisi

**Design System Estetiği becerisi**, sitenizin görsel kimliğini iyileştirmek için rehberli bir yaklaşımdır. Bu beceri, tasarım sisteminizi tanımlayan tipografi, renk, boşluk ve hareket tokenları hakkında tutarlı kararlar almanıza yardımcı olur.

## Design System Estetiği Nedir? {#what-is-design-system-aesthetics}

Design System Estetiği, aşağıdaki konuları kapsayan yapılandırılmış bir beceridir:

- **Tipografi**: Font aileleri, boyutlar, ağırlıklar ve satır yükseklikleri
- **Renk**: Birincil, ikincil, vurgu ve nötr paletler
- **Boşluk**: İç dolgu (Padding), kenar boşluğu (Margin) ve boşluk ölçekleri (Gap scales)
- **Kenarlıklar**: Yarıçap ve genişlik tokenları
- **Gölgeleme**: Yükselti ve derinlik tokenları
- **Hareket**: Animasyonlar ve geçişler

Bu kararlar, temanızın `theme.json` dosyasına kaydedilir ve böylece birbiriyle uyumlu bir görsel sistem oluşturulur.

## Design System Estetiği Neden Kullanılmalı? {#why-use-design-system-aesthetics}

### Tutarlılık {#consistency}

Bir tasarım sistemi şunları sağlar:

- Tüm metinler aynı tipografi ölçeğini kullanır
- Renkler siteniz genelinde tutarlı bir şekilde kullanılır
- Boşluklar tahmin edilebilir bir desene uyar
- Animasyonlar birleşik hissedilir

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

## Design System Estetiği Becerisini Tetikleme {#triggering-the-design-system-aesthetics-skill}

### Manuel Aktivasyon {#manual-activation}

Bu beceriyi istediğiniz zaman başlatabilirsiniz:

```
"Design sistemimi iyileştirmeme yardım et"
```

veya

```
"Sitemin estetiğini geliştirelim"
```

veya

```
"Bana tasarım sistemi kararları konusunda rehberlik et"
```

### Otomatik Öneriler {#automatic-suggestions}

Ajanlar, aşağıdaki durumlarda bu beceriyi kullanmanızı önerebilir:

- Tasarım değişiklikleri istediğinizde
- "Modern" veya "profesyonel" bir yeniden tasarım talep ettiğinizde
- Görsel tutarlılığı artırmak istediğinizde
- Sitenizi yayınlamaya hazırlanırken

## Design System Estetiği Süreci {#the-design-system-aesthetics-process}

### Adım 1: Tipografi {#step-1-typography}

Ajan, font seçimleriniz hakkında sorular sorar:

```
Tercih ettiğiniz tipografi stili nedir?
- Serif (geleneksel, zarif)
- Sans-serif (modern, temiz)
- Monospace (teknik, kod odaklı)

Başlık fontunuz için:
- Belirgin bir başlık fontu mu istiyorsunuz, yoksa gövde metniyle aynı mı olsun?
- Tercih: cesur, zarif, eğlenceli, minimal mi?

Gövde metni fontunuz için:
- Okunabilirlik anahtardır. Hangisini tercih edersiniz:
  - Daha büyük, daha ferah metin
  - Kompakt, verimli metin
  - Standart boyutlandırma
```

Ajan daha sonra şunları tanımlar:

- **Başlık fontu**: Başlıklar ve başlıklar için birincil font
- **Gövde fontu**: Paragraflar ve gövde metni için font
- **Monospace fontu**: Kod ve teknik içerik için font
- **Boyut ölçeği**: Önceden tanımlanmış boyutlar (küçük, temel, büyük, XL vb.)
- **Ağırlık ölçeği**: Font ağırlıkları (normal, orta, cesur vb.)
- **Satır yüksekliği**: Okunabilirlik için satırlar arasındaki boşluk

### Adım 2: Renk Paleti {#step-2-color-palette}

```
Renk paletinizi tanımlayalım.

Birincil renk (marka renginiz):
- Mevcut: [mevcut rengi gösterir]
- Değiştirilecek: [renk seçici veya hex kodu]

İkincil renk (destekleyici renk):
- Mevcut: [mevcut rengi gösterir]
- Değiştirilecek: [renk seçici veya hex kodu]

Vurgu rengi (öne çıkarılanlar ve CTA'lar):
- Mevcut: [mevcut rengi gösterir]
- Değiştirilecek: [renk seçici veya hex kodu]

Nötr palet (metin, kenarlık, arka plan için gri tonlar):
- Açık: [renk]
- Orta: [renk]
- Koyu: [renk]
```

Ajan, şunları içeren eksiksiz bir palet oluşturur:

- Birincil, ikincil ve vurgu renkleri
- Nötr gri tonlar (açık, orta, koyu)
- Semantik renkler (başarı, uyarı, hata)
- Üzerine gelme (hover) ve aktif durumlar

### Adım 3: Boşluk {#step-3-spacing}

```
Ne kadar nefes alma alanı istiyorsunuz?

Boşluk ölçeği tercihi:
- Kompakt (sıkı, verimli düzenler)
- Normal (dengeli boşluk)
- Ferah (bol beyaz alan)

Bu şunları etkiler:
- Butonlar ve kartlar içindeki iç dolgu (Padding)
- Bölümler arasındaki kenar boşlukları (Margins)
- Izgara öğeleri arasındaki boşluk (Gap)
```

Ajan boşluk tokenlarını tanımlar:

- Temel birim (genellikle 4px veya 8px)
- Ölçek: xs, sm, md, lg, xl, 2xl
- İç dolgu, kenar boşluğu, boşluk için özel değerler

### Adım 4: Kenarlıklar ve Gölgeleme {#step-4-borders-and-shadows}

```
Görsel derinlik ve tanımlama:

Kenarlık yarıçapı tercihi:
- Keskin (yuvarlama yok)
- Hafif (küçük yarıçap)
- Yuvarlak (orta yarıçap)
- Çok yuvarlak (büyük yarıçap)

Gölge derinliği:
- Düz (gölge yok)
- Hafif (hafif gölgeler)
- Belirgin (güçlü gölgeler)
```

Ajan şunları oluşturur:

- Kenarlık yarıçapı tokenları (butonlar, kartlar, giriş alanları için)
- Yükselti seviyeleri için gölge tokenları
- Kenarlık genişliği tokenları

### Adım 5: Hareket ve Animasyon {#step-5-motion-and-animation}

```
Siteniz etkileşimli olduğunda nasıl hissettirmeli?

Animasyon tercihi:
- Minimal (animasyon yok)
- Hafif (nazik geçişler)
- Eğlenceli (gözle görülür animasyonlar)

Belirli animasyonlar:
- Sayfa geçişleri: solma, kayma veya hiçbiri mi?
- Buton üzerine gelme: ölçeklenme, renk değiştirme veya ikisi birden mi?
- Yükleme durumları: dönen simge, iskelet veya ilerleme çubuğu mu?
```

Ajan şunları tanımlar:

- Geçiş süreleri (hızlı, normal, yavaş)
- Yumuşatma fonksiyonları (ease-in, ease-out, ease-in-out)
- Yaygın etkileşimler için animasyon anahtar kareleri

## Design System Estetiğini Uygulama {#applying-design-system-aesthetics}

### Otomatik Uygulama {#automatic-application}

Beceri tamamlandıktan sonra ajan:

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

## Design System'ınızı Görüntüleme {#viewing-your-design-system}

### Ajana Sorun {#ask-the-agent}

```
"Design sistemimi göster"
```

veya

```
"Mevcut tasarım tokenlarım neler?"
```

Ajan, tipografinizi, renklerinizi, boşluklarınızı ve diğer tokenlarınızı gösterecektir.

### theme.json'ı Görüntüleme {#view-themejson}

Ham token tanımlarını görmek için `/wp-content/themes/[tema-adı]/theme.json` dosyasını bir metin düzenleyicide açın.

## Design System'ınızı Güncelleme {#updating-your-design-system}

### Hızlı Güncellemeler {#quick-updates}

Ajan'dan belirli değişiklikler isteyin:

```
"Birincil rengi daha koyu yap"
```

veya

```
"Boşluk ölçeğini %20 artır"
```

veya

```
"Başlık fontunu serif yap"
```

### Tam Yeniden Tasarım {#full-redesign}

Design System Estetiği becerisini yeniden çalıştırın:

```
"Tüm tasarım sistemimi yeniden tasarlayalım"
```

Bu, mevcut değerlerinizden başlayarak tüm kararlar boyunca size rehberlik edecektir.

### Kısmi Güncellemeler {#partial-updates}

Belirli yönleri güncelleyin:

```
"Sadece renk paletini güncelle, diğer her şeyi koru"
```

## Design System En İyi Uygulamaları {#design-system-best-practices}

### Tutarlılık {#consistency-1}

- Her yerde aynı tokenları kullanın
- Tek seferlik renkler veya boyutlar oluşturmayın
- Değerleri sabit kodlamak yerine tokenlara referans verin

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

- Belirli renkleri neden seçtiğinizi
- Her tokenı ne zaman kullanacağınızı
- İstisnaları ve uç durumları

## Yaygın Design System Desenleri {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}

- Sans-serif tipografi (Inter, Helvetica)
- Sınırlı renk paleti (2-3 renk)
- Ferah boşluk
- Hafif gölgeler
- Akıcı, hızlı animasyonlar

### Sıcak ve Samimi {#warm-and-friendly}

- Serif ve sans-serif karışımı
- Sıcak renk paleti (turuncu, sıcak griler)
- Yuvarlak köşeler
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
- Gözle görülür animasyonlar

## Sorun Giderme {#troubleshooting}

**Design sistemimdeki değişiklikler görünmüyor**
- Tarayıcı önbelleğinizi temizleyin
- Statik bir oluşturucu kullanıyorsanız sitenizi yeniden oluşturun
- `theme.json` dosyasının geçerli JSON olduğundan emin olun
- Temanın etkinleştirildiğini doğrulayın

**Renkler farklı sayfalarda farklı görünüyor**
- Plugin'lerde çakışan CSS olup olmadığını kontrol edin
- Tüm sayfaların aynı temayı kullandığından emin olun
- Herhangi bir caching plugin'ini temizleyin

**Önceki bir tasarım sistemine dönmek istiyorum**
- Ajana sorun: "Design sistemim geçmişini göster"
- theme.json'ı manuel olarak önceki değerlere düzenleyin
- Farklı seçimlerle beceriyi yeniden çalıştırın

## Sonraki Adımlar {#next-steps}

Tasarım sisteminizi tanımladıktan sonra:

1. **Sitenizi gözden geçirin**: Yeni tasarımı görmek için sitenizi ziyaret edin
2. **Daha fazla iyileştirin**: Beceriyi tekrar kullanarak ayarlamalar yapın
3. **Şablonlar oluşturun**: Tasarım tokenlarınızı kullanarak özel blok şablonları oluşturun
4. **Belgeleme**: Tasarım sisteminizi ekip üyeleriyle paylaşın
