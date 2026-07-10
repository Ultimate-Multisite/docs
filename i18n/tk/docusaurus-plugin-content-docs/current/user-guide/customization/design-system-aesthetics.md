---
title: Dizayn Sistemi Estetika Bilişi
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Tasarım Sistemi Estetika Becerisi {#design-system-aesthetics-skill}

**Design System Aesthetics becerisi**, saytınızın görsel kimliğini düzeltmek için bir rehberli yaklaşımdır. Bu, tasarım sisteminizi tanımlayan tipografi, renk, boşluk ve hareket jetonları hakkında tutarlı kararlar vermenize yardımcı olur.

## Design System Estetiği Nedir? {#what-is-design-system-aesthetics}

Design System Aesthetics, şunları kapsayan yapılandırılmış bir beceridir:

- **Tipografi**: Font aileleri, boyutlar, ağırlıklar ve satır yükseklikleri
- **Renk**: Birincil, ikincil, vurgu ve nötr paletler
- **Boşluk (Spacing)**: İç dolgu (padding), kenar boşluğu (margin) ve boşluk ölçekleri (gap scales)
- **Kenarlıklar (Borders)**: Yarıçap ve genişlik jetonları
- **Gölgeler (Shadows)**: Yükseklik ve derinlik jetonları
- **Hareket (Motion)**: Animasyonlar ve geçişler

Bu kararlar, temanızın `theme.json` dosyasında yakalanır ve uyumlu bir görsel sistem oluşturur.

## Design System Estetiğini Neden Kullanmalısınız? {#why-use-design-system-aesthetics}

### Tutarlılık {#consistency}

Bir tasarım sistemi şunları sağlar:

- Tüm metin aynı tipografi ölçeğini kullanır
- Renkler siteniz boyunca tutarlı bir şekilde kullanılır
- Boşluklar öngörülebilir bir deseni takip eder
- Animasyonlar bir bütün olarak hissedilir

### Verimlilik {#efficiency}

Sayfa sayfa tasarım kararları almak yerine, siz:

- Jetonları bir kez tanımlarsınız
- Onları her yerde uygularsınız
- Tek bir değeri değiştirerek küresel olarak güncellersiniz

### Esneklik {#flexibility}

Şunları yapabilirsiniz:

- Tüm tasarım sisteminizi hızlıca ayarlayabilirsiniz
- Farklı estetiklerle deney yapabilirsiniz
- Gelişirken marka tutarlılığını koruyabilirsiniz

## Design System Estetiği Becerisini Tetikleme {#triggering-the-design-system-aesthetics-skill}

### Manuel Etkinleştirme {#manual-activation}

Beceriye istediğiniz zaman başlayabilirsiniz:

```
"Design sistemimi düzeltmeme yardım et"
```

veya

```
"Sitemin estetiklerini iyileştirelim"
```

veya

```
"Tasarım sistemi kararları konusunda beni yönlendir"
```

### Otomatik Öneriler {#automatic-suggestions}

Ajanlar şunları istediğinizde beceriyi kullanmanızı önerebilir:

- Tasarım değişiklikleri istediğinizde
- "modern" veya "profesyonel" bir yeniden tasarım talep ettiğinizde
- Görsel tutarlılığı artırmak istediğinizde
- Sitenizi yayınlamaya hazırlanırken

## Dizayn Sisteminin Estetika Prosesi {#the-design-system-aesthetics-process}

### Addım 1: Tipografi {#step-1-typography}

Agent sizden yazı tipleri hakkındaki tercihinizi sorar:

```
Sizin tercih ettiğiniz tipografi stili nedir?
- Serif (geleneksel, zewar)
- Sans-serif (modern, temiz)
- Monospace (teknik, kod odaklı)

Başlık fontunuz için:
- Ayrı bir başlık fontu mu istiyorsunuz, yoksa gövde metniyle aynı mı kullanacaksınız?
- Tercih: kalın, zewar, eğlenceli, minimal?

Gövde fontunuz için:
- Okunabilirlik esastır. Şunlardan hangisini tercih edersiniz:
  - Daha büyük, daha geniş metinler
  - Kısa, verimli metinler
  - Standart boyutlandırma
```

Ardından agent şunları tanımlar:

- **Başlık fontu**: Başlıklar ve unvanlar için birincil font
- **Gövde fontu**: Paragraflar ve gövde metni için font
- **Monospace fontu**: Kod ve teknik içerikler için font
- **Boyut ölçeği**: Önceden tanımlanmış boyutlar (küçük, temel, büyük, XL vb.)
- **Ağırlık ölçeği**: Font ağırlıkları (normal, orta, kalın vb.)
- **Satır yüksekliği**: Okunabilirlik için satırlar arasındaki boşluk

### Addım 2: Renk Paleti {#step-2-color-palette}

```
Renk paletinizi tanımlayalım.

Birincil renk (marka renginiz):
- Mevcut: [mevcut rengi gösterir]
- Değiştirin: [renk seçici veya hex kodu]

İkincil renk (destekleyici renk):
- Mevcut: [mevcut rengi gösterir]
- Değiştirin: [renk seçici veya hex kodu]

Vurgu rengi (öne çıkarma ve CTA'lar):
- Mevcut: [mevcut rengi gösterir]
- Değiştirin: [renk seçici veya hex kodu]

Nötr palet (metin, kenarlıklar, arka planlar için gri tonları):
- Açık: [renk]
- Orta: [renk]
- Koyu: [renk]
```

Agent şunları içeren eksiksiz bir palet oluşturur:

- Birincil, ikincil ve vurgu renkleri
- Nötr griler (açık, orta, koyu)
- Anlamsal renkler (başarı, uyarı, hata)
- Hover ve aktif durumlar

### Addım 3: Boşluk (Spacing) {#step-3-spacing}

Siz ne çökme (breathing room) islemek isleýärsiň?

Ortaçlyk derejesini saýlamak üçin:
- Kompakt (göç, nokatlaryň belli bir ýerinde ýygnamak)
- Normal (dengelemek üçin sazlaşykly boşluklar)
- Geniş (köp boşluklylyk)

Bu şu zatlara täsir edýär:
- Düğmeler we kartlaryň içindäki padding (boşluk)
- Bölümleriň arasyndaky margin (çykyş)
- Grid elementleri arasyndaky gap (aralyk)

Agent bu boşluk tokenlaryny bellemekde ulanylýar:

- Esasy birlik (adaty 4px ýa-da 8px)
- Ölçek: xs, sm, md, lg, xl, 2xl
- Padding, margin we gap üçin aýratyn dereceler

### 4-nji ädim: Çykyşlar we Göljelemekler (Borders and Shadows) {#step-4-borders-and-shadows}

```
Görsel çuňluk we keskinlik:

Border radius (çykyş radyusu) saýlamak:
- Keskin (döredilme ýok)
- Ýumşak (kiçi radyus)
- Dürümeli (orta radyus)
- Çelmekli dürümeli (uzyndan radyus)

Shadow depth (göljelemek derejesi):
- Düz (gölje yok)
- Ýumşak (haýy gölje)
- Keskin (güçli gölje)
```

Agent şu zatlary döredýär:

- Border radius tokenlary (düğmeler, kartlar, girizgiler üçin)
- Elevation (ýokarylylyk) derejeleri üçin Shadow tokenlary
- Border width (çykyş giňligi) tokenlary

### 5-nji ädim: Harakat we Animasiýa (Motion and Animation) {#step-5-motion-and-animation}

```
Sizi interaktivde ulanyp bilende sahypa nädip duýulmaly?

Animasiýa saýlamak:
- Minimal (animasiýa ýok)
- Ýumşak (haýy geçişler)
- Oýunly (görünýän animasiýalar)

Aýratyn animasiýalar:
- Saýpalaryň geçişleri: fade (sönüş), slide (başlanma/sona ýatmagy) ýa-da hiç hili?
- Düğme üsti (hover): scale (ölüşi), reňk üýtgemegi, ýa-da her ikisini hem?
- Yüklenýan hallary: spinner (dörediji), skeleton (skelet), ýa-da progress bar (ilerleme çubagy)?
```

Agent şu zatlary beller:

- Geçiş süresi (çyz, normal, geç)
- Easing funksiýalary (ease-in, ease-out, ease-in-out)
- Ünsi interaksiýalar üçin animasiýa keyframe-leri

## Dizayn Sistemini Ulanmak {#applying-design-system-aesthetics}

### Awtomatiki Ulanmak {#automatic-application}

Biliňçi işi tamamlandyryp, agent:

1. Siziň tema `theme.json` dosyasyny ähli tokenlary bilen güncelleýar
2. Dizayn sistemini işleýän temanyza ulanyp bilersiňiz
3. Täze sistem bilen sazlaşmak üçin blok stylaryny täzelendirýär
4. Güncellenipdirilen temany işe goýýar

### Manual Ulanmak {#manual-application}

Siz hem `theme.json` dosyasyny jogapkärlik bilen redaktir edip bilersiňiz:

## Tasarım Sisteminizi Görme {#viewing-your-design-system}

### Agent'e Sorun {#ask-the-agent}

```
"Show me my design system"
```

veya

```
"What are my current design tokens?"
```

Agent size, renkler, boşluklar ve başga tokenlaryňyzy görkezendir.

### theme.json-y Görtürip Görme {#view-themejson}

Raw token tanımlaryny görmegi üçin `/wp-content/themes/[theme-name]/theme.json` faylyny tekst redaktorda açyp görüp bilersiňiz.

## Tasarım Sisteminizi Güncellämek {#updating-your-design-system}

### Tezlikde Güncellemek {#quick-updates}

Agentden belli bir üýtgeşmeler soraň:

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

### Tam Yeniden Tasarlama {#full-redesign}

Tasarım Sistemleri Estetikas (Design System Aesthetics) ukulyny ýa-da skillini täzeden işledip görüň:

```
"Let's redesign my entire design system"
```

Bu sizi häzirki bahalardan başlap, ähli kararlaryňyz boýunça täzeden üýtgetmäge gönükdirýär.

### Kısmi Güncellemek {#partial-updates}

Belirli aýratyn bölekleri güncelleň:

```
"Just update the color palette, keep everything else"
```

## Tasarım Sistemleri Ilimleri (Best Practices) {#design-system-best-practices}

### Tutarlılık {#consistency-1}

- Biri bilen ähli ýerde birme-bir tokenlary ulanmagyň.
- Bir defa geçip biljek renkler ýa-da agramlar döretmäge kem çekmäň.
- Bahalary beýleki zatlar bilen berk ýazyp bilmezsiň, eger bolsa tokenlary referat edin.

### Adlandyrmak (Naming) {#naming}

Açyk we manysızlıgy belli adlary ulanmagyň:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Ýaýraklanma (Scalability) {#scalability}

### Dokumentasi {#documentation}

Tasarım sisteminizi belgeleyin:

- Neden belirli renkleri seçtiğinizi açıklayın
- Her bir token'ı ne zaman kullanmanız gerektiğini belirtin
- İstisnalar ve kenar durumları (edge cases) hakkında bilgi verin

## Yaygın Tasarım Sistemi Kalıpları {#common-design-system-patterns}

### Modern Minimalist {#modern-minimalist}

- Sans-serif tipografi (Inter, Helvetica)
- Sınırlı renk paleti (2-3 renk)
- Cömert boşluklar (spacing)
- Hafif gölgeler (shadows)
- Pürüzsüz, hızlı animasyonlar

### Sıcak ve Dostça {#warm-and-friendly}

- Serif ve sans-serif karışımı
- Sıcak renk paleti (turuncular, sıcak griler)
- Yuvarlak köşeler
- Yumuşak gölgeler
- Eğlenceli animasyonlar

### Profesyonel Kurumsal {#professional-corporate}

- Temiz sans-serif (Roboto, Open Sans)
- Vurgu rengi olan nötr palet
- Yapılandırılmış boşluklar
- Minimum gölgeler
- Hafif geçişler (transitions)

### Yaratıcı ve Cesur {#creative-and-bold}

- Ayırt edici tipografi
- Cesur renk paleti
- Çeşitli boşluklar
- Güçlü gölgeler
- Dikkat çekici animasyonlar

## Sorun Giderme {#troubleshooting}

**Tasarım sistemimdeki değişiklikler görünmüyor**
- Tarayıcı önbelleğinizi temizleyin (Clear your browser cache)
- Statik bir oluşturucu kullanıyorsanız sitenizi yeniden oluşturun (Rebuild your site if using a static generator)
- theme.json'ın geçerli JSON olduğundan emin olun (Check that theme.json is valid JSON)
- Temanın aktif olup olmadığını kontrol edin (Verify the theme is active)

**Renkler farklı sayfalarda farklı görünüyor**
- Eklentilerde çakışan CSS olup olmadığını kontrol edin (Check for conflicting CSS in plugins)
- Tüm sayfaların aynı temayı kullandığından emin olun (Verify all pages use the same theme)
- Herhangi bir önbellekleme eklentisini temizleyin (Clear any caching plugins)

**Önceki bir tasarım sistemine geri dönmek istiyorum**
- Acente ile konuşun: "Tasarım sistemi geçmişimi göster" ("Show me my design system history")
- theme.json'ı manuel olarak önceki değerlere düzenleyin (Manually edit theme.json to previous values)
- Farklı seçimlerle beceriyi yeniden çalıştırın (Re-run the skill with different choices)

## Sonraki Adımlar {#next-steps}

Tasarım sisteminizi tanımladıktan sonra:

1. **Sajyňyzy görkeziň**: Täze dizigni görmegi üçin sahypa-nıza girip görüň.
2. **Has dolyň**: Skill (hünär) bilen has birnäçe düzgünler goýyp görkeziji hasaplaň.
3. **Şablonlar döredip bilersiňiz**: Öz dizign tokenlaryny ulanmagy bilen öz şablon bloklaryňyzy döredip bilersiňiz.
4. **Dokumentasiýa ediň**: Öz dizign sisteminizi ekibi bilen paylaň.
