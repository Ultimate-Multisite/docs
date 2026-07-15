---
title: Logo SVG Oluştur
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG Oluşturma

**Logo SVG Oluşturma** özelliği, Tema Oluşturucu'nun (Theme Builder) özel logo SVG'lerini otomatik olarak isim alanı güvenli temizleme (namespace-safe sanitisation) ile WordPress sitenize doğrudan eklemesine olanak tanır.

## Genel Bakış {#overview}

Bu özellik, sitenizin marka yönelimine ve tasarım tercihlerine dayalı olarak ölçeklenebilir vektör grafikli (SVG) logolar oluşturur. Oluşturulan SVG'ler, görsel bütünlüğü korurken WordPress'te kullanılmaları için otomatik olarak temizlenir (sanitise edilir).

## Parametreler {#parameters}

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|------|----------|-------------|
| `site_name` | string | Evet | Logo oluşturulacak sitenin adı |
| `style` | string | Evet | Tasarım stili (örneğin, "modern", "klasik", "minimalist", "oyuncu") |
| `colors` | array | Hayır | Logoda kullanılacak onaltılık renk kodu dizisi (örneğin, `["#678233", "#ffffff"]`) |
| `width` | number | Hayır | SVG genişliği piksel cinsinden (varsayılan: 200) |
| `height` | number | Hayır | SVG yüksekliği piksel cinsinden (varsayılan: 200) |
| `include_text` | boolean | Hayır | Site adını logoda metin olarak dahil edip etmeyeceği (varsayılan: true) |

## Çıktı Formatı {#output-format}

Özellik, aşağıdaki yapıya sahip bir SVG dizesi döndürür:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitasyon Davranışı {#svg-sanitisation-behaviour}

Oluşturulan SVG'ler, aşağıdaki işlemleri yapmak için otomatik isim alanı güvenli temizlemeden geçer:

- **Güvensiz nitelikleri kaldırma** — olay işleyicilerini, script'leri ve potansiyel olarak tehlikeli nitelikleri temizler
- **İsim alanlarını koruma** — doğru bir şekilde işlenmesi için SVG isim alanlarını (xmlns, xlink) korur
- **Yapıyı doğrulama** — SVG'nin W3C standartlarına uygun olduğundan emin olur
- **Varlıkları kodlama** — metin içeriğindeki özel karakterleri düzgün bir şekilde kaçırır
- **Harici referansları kaldırma** — harici stil sayfalarını ve görsel referansları temizler

Bu, SVG'nin ek sanitasyona ihtiyaç duymadan doğrudan WordPress'e gömülebilir olmasını sağlar.

## Kullanım Örneği {#usage-example}

**İstem:**
```
Mavi ve beyaz renkler kullanarak "CloudSync" adlı teknoloji girişimim için modern bir logo oluştur.
```

**Sonuç:**
Özellik, aşağıdaki özellikleri taşıyan bir SVG logo oluşturur:
- Site adını "CloudSync" içerir
- Belirtilen mavi ve beyaz renk şemasını kullanır
- Modern tasarım prensiplerini takip eder
- Otomatik olarak temizlenmiş ve kullanıma hazırdır

## Tema Oluşturucu ile Entegrasyon {#integration-with-theme-builder}

Tema Oluşturucu'nun tasarım yönü seçimini kullanırken, Logo SVG Oluşturma özelliği:

1. Tasarım yönünüzü ve renk paletinizi analiz eder
2. Tercihlerinizle eşleşen özel bir SVG logo oluşturur
3. Logoyu otomatik olarak sitenizin başlık/markalama alanına yerleştirir
4. SVG'yi WordPress medya kütüphanesinde özel bir logo olarak kaydeder

## En İyi Uygulamalar {#best-practices}

- **Net stil tercihleri belirtin** — İstediğiniz tasarım stilini açıklayın (modern, klasik, oyuncu vb.)
- **Renkleri belirtin** — Tutarlılık için marka renklerinizi ekleyin
- **Görüntülemeyi test edin** — Logonun farklı ekran boyutlarında doğru göründüğünü doğrulayın
- **Daha fazla özelleştirin** — Boyut ve yerleşimi ayarlamak için WordPress'in logo özelleştirme araçlarını kullanın

## Sınırlamalar {#limitations}

- SVG logolar statik grafikler olarak oluşturulur (animasyonlu değildir)
- Çok sayıda öğe içeren karmaşık logolar manuel düzenleme gerektirebilir
- Özel yazı tipleri desteklenmez; metin sistem yazı tiplerini kullanır
- Çok büyük veya çok küçük boyutlar kaliteyi etkileyebilir

## İlgili Özellikler {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — Erişilebilirlik için renk kontrastını kontrol edin
- [Create Menu](./create-menu.md) — Siteniz için navigasyon menüleri oluşturun
