---
title: Design Direction
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Tasarım Yönü

**Tasarım Yönü** adımı, Tema Oluşturucu'nun (Theme Builder) tüm temayı oluşturmasından önce temanızın görsel tasarımını incelemenize, düzenlemenize ve son haline getirmenize olanak tanır.

## Genel Bakış {#overview}

Keşif Görüşmesi'ni (Discovery Interview) tamamladıktan sonra, Tema Oluşturucu size **masaüstü ve mobil önizleme** ile tasarım yönünüzü sunar. Bu sayede, temaya geçmeden önce tasarımınızın farklı cihazlarda tam olarak nasıl görüneceğini görebilirsiniz.

## Tasarım Yönü Bileşenleri {#design-direction-components}

### 1. Renk Paleti {#1-color-palette}

Temanızın renk şeması şunları içerir:

- **Birincil renk** — düğmeler, bağlantılar ve vurgular için kullanılan ana marka rengi
- **İkincil renk** — çeşitlilik sağlamak için tamamlayıcı renk
- **Vurgu rengi** — önemli öğeler için dikkat çekici renk
- **Nötr renkler** — arka planlar ve metinler için gri ve beyaz tonları
- **Metin rengi** — okunabilirlik için ana metin rengi

### 2. Tipografi {#2-typography}

Şunlar için yazı tipi seçimleri:

- **Başlık yazı tipi** — sayfa başlıkları ve bölüm başlıklarında kullanılır
- **Gövde yazı tipi** — paragraf metinleri ve içeriklerde kullanılır
- **Yazı boyutları** — farklı ekran boyutları için duyarlı boyutlandırma
- **Satır yüksekliği** — okunabilirlik için satırlar arasındaki boşluk
- **Yazı ağırlıkları** — kalın, normal ve açık varyasyonlar

### 3. Düzen ve Boşluk {#3-layout-and-spacing}

- **Kapsayıcı genişliği** — içerik için maksimum genişlik
- **İç dolgu ve dış boşluklar (Padding and margins)** — öğelerin etrafındaki boşluk
- **Izgara sistemi (Grid system)** — duyarlı tasarım için sütun düzeni
- **Bileşen boşluğu** — kullanıcı arayüzü (UI) öğeleri arasındaki mesafe

### 4. Görsel Öğeler {#4-visual-elements}

- **Düğme stilleri** — birincil, ikincil ve üçüncül düğme tasarımları
- **Kart tasarımları** — içerik blokları için düzenler
- **İkonlar** — ikon stili ve boyutlandırması
- **Kenarlıklar ve gölgeler** — zarif görsel derinlik
- **Üzerine gelme efektleri (Hover effects)** — etkileşimli durum stillendirmesi

## Önizleme Oluşturma (Preview Rendering) {#preview-rendering}

### Masaüstü Önizlemesi {#desktop-preview}

Masaüstü önizlemesi, tasarımınızı tam genişlikte (genellikle 1200 piksel veya daha geniş) gösterir:

- Tam navigasyon menüsü
- Tüm sütunlarla birlikte eksiksiz düzen
- Büyük tipografi ve boşluklar
- Tüm görsel öğeler tam boyutta

### Mobil Önizlemesi {#mobile-preview}

Mobil önizlemesi, tasarımınızı mobil genişlikte (genellikle 375 piksel) gösterir:

- Duyarlı navigasyon (hamburger menü)
- Tek sütunlu düzen
- Ayarlanmış tipografi ve boşluklar
- Dokunmaya uygun düğme boyutları

### Duyarlı Kırılma Noktaları (Responsive Breakpoints) {#responsive-breakpoints}

Tema Oluşturucu, önizlemeleri bu kırılma noktalarında oluşturur:

| Cihaz | Genişlik | Önizleme |
|--------|-------|---------|
| **Mobil** | 375px | Portre telefon |
| **Tablet** | 768px | Manzara tablet |
| **Masaüstü** | 1200px | Tam genişlik masaüstü |
| **Büyük Masaüstü** | 1920px | Ultra geniş ekran |

## Tasarımınızı Düzenleme {#refining-your-design}

### Ayarlamalar Yapmak {#making-adjustments}

Tasarım yönünüzü şu yollarla düzenleyebilirsiniz:

1. **Renkleri ayarlama** — paletteki herhangi bir rengi değiştirebilirsiniz
2. **Yazıları değiştirme** — farklı yazı tipleri seçebilirsiniz
3. **Boşluğu değiştirme** — iç dolgu ve dış boşlukları ayarlayabilirsiniz
4. **Düzeni güncelleme** — kapsayıcı genişliklerini ve ızgara sütunlarını değiştirebilirsiniz
5. **Öğeleri özelleştirme** — düğme stilleri, kart tasarımları vb. düzenleyebilirsiniz

### Önizleme Güncellemeleri {#preview-updates}

Değişiklikler gerçek zamanlı olarak yansır:

- Masaüstü önizlemesi hemen güncellenir
- Mobil önizlemesi hemen güncellenir
- Tüm duyarlı kırılma noktaları güncellenir
- Değişiklikleri doğrulamak için önizlemeler arasında geçiş yapabilirsiniz

### Karşılaştırma Görünümü {#comparison-view}

Tasarım yönünüzü şunlarla karşılaştırın:

- **Orijinal tasarım** — neyin değiştiğini görmek için
- **Rakip tasarımlar** — ilham aldığınız sitelerle karşılaştırmak için
- **Önceki versiyonlar** — daha önceki tasarım yönlerine geri dönmek için

## Tasarım Yönü Onayı {#design-direction-approval}

Tasarımınızdan memnun kaldığınızda:

1. **Her iki önizlemeyi de gözden geçirin** — masaüstü ve mobil görünümün iyi olduğundan emin olun
2. **Tüm renkleri kontrol edin** — kontrast ve erişilebilirliği sağlayın
3. **Tipografiyi test edin** — tüm boyutlarda okunabilirliği doğrulayın
4. **Düzeni onaylayın** — boşluk ve hizalamayı kontrol edin
5. **Tasarımı onaylayın** — tema oluşturma işlemine devam edin

## Sonraki Adımlar {#next-steps}

Tasarım yönünüzü onayladıktan sonra:

1. Tema Oluşturucu tüm temanızı oluşturur
2. Tema WordPress sitenize kurulur
3. WordPress özelleştirici (customizer) kullanarak daha fazla özelleştirme yapabilirsiniz
4. [Hospitality Menus](./hospitality-menus.md) veya diğer özelliklere geçin

## En İyi Uygulamalar {#best-practices}

- **Gerçek cihazlarda test edin** — mümkünse gerçek telefonlar ve tabletler kullanın
- **Okunabilirliği kontrol edin** — metnin tüm boyutlarda okunabilir olduğundan emin olun
- **Kontrastı doğrulayın** — erişilebilirlik için [Validate Palette Contrast](../abilities/validate-palette-contrast.md) kullanın
- **Performansı düşünün** — hız için görselleri ve yazı tiplerini optimize edin
- **İçerik planlayın** — düzenin gerçek içeriğinizle çalışmasını sağlayın

## Sorun Giderme {#troubleshooting}

### Önizleme Güncellenmiyor {#preview-not-updating}

- Sayfayı yenileyin
- Tarayıcı önbelleğini temizleyin
- Farklı bir tarayıcı deneyin
- İnternet bağlantınızı kontrol edin

### Renkler Farklı Görünüyor {#colors-look-different}

- Monitör renk ayarlarını kontrol edin
- Farklı cihazlarda deneyin
- Renk kontrastını erişilebilirlik araçlarıyla doğrulayın
- Renk körlüğü simülatörlerini düşünün

### Tipografi Sorunları {#typography-issues}

- Yazı tipi dosyalarının yüklendiğini doğrulayın
- Farklı kırılma noktalarında yazı boyutunu kontrol edin
- Gerçek içerikle test edin
- Okunabilirlik için satır uzunluğunu düşünün

## İlgili Belgeler {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — tasarım bilgilerini toplayın
- [Hospitality Menus](./hospitality-menus.md) — yapılandırılmış menü sayfaları oluşturun
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — renk erişilebilirliğini kontrol edin
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — özel logolar oluşturun
