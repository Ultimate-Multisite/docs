---
title: Generate Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG Oluşturma {#generate-logo-svg}

**Logo SVG Oluşturma** özelliği, Theme Builder'ın özel logo SVG'lerini otomatik namespace-safe sanitizasyon ile doğrudan WordPress sitenize oluşturmasına ve gömmesine olanak tanır.

## Genel Bakış {#overview}

Bu özellik, sitenizin marka yönelimine ve tasarım tercihlerine göre ölçeklenebilir vektör grafikli (SVG) logolar oluşturur. Oluşturulan SVG'ler, görsel bütünlüğü korurken WordPress'te kullanıma uygun olduğundan emin olmak için otomatik olarak sanitize edilir.

## Parametreler {#parameters}

| Parametre | Tür | Gerekli | Açıklama |
|-----------|------|----------|-------------|
| `site_name` | string | Evet | Logo oluşturulacak sitenin adı. |
| `style` | string | Evet | Tasarım stili (örneğin, "modern", "klasik", "minimalist", "oyuncu"). |
| `colors` | array | Hayır | Logoda kullanılacak hex renk kodu dizisi (örneğin, `["#678233", "#ffffff"]`). |
| `width` | number | Hayır | SVG genişliği piksel cinsinden (varsayılan: 200). |
| `height` | number | Hayır | SVG yüksekliği piksel cinsinden (varsayılan: 200). |
| `include_text` | boolean | Hayır | Site adının logoda metin olarak dahil edilip edilmeyeceği (varsayılan: true). |

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

## SVG Sanitizasyon Davranışı {#svg-sanitisation-behaviour}

Oluşturulan SVG'ler, aşağıdaki amaçlarla otomatik namespace-safe sanitizasyondan geçer:

- **Güvensiz nitelikleri kaldırma** — olay işleyicilerini, script'leri ve potansiyel olarak tehlikeli nitelikleri temizler.
- **Namespace'leri koruma** — doğru işleme için SVG namespace'lerini (xmlns, xlink) korur.
- **Yapıyı doğrulama** — SVG'nin W3C standartlarına uygun olduğundan emin olur.
- **Varlık kodlama** — metin içeriğindeki özel karakterleri düzgünce kaçırır.
- **Harici referansları kaldırma** — harici stil sayfalarını ve görsel referansları temizler.

Bu, SVG'nin ek sanitizasyona ihtiyaç duymadan doğrudan WordPress'e gömülebilir olmasını sağlar.

## Kullanım Örneği {#usage-example}

**İstem:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Sonuç:**
Özellik, aşağıdaki özellikleri taşıyan bir SVG logo oluşturur:
- "CloudSync" site adını içerir
- Belirtilen mavi ve beyaz renk şemasını kullanır
- Modern tasarım prensiplerini takip eder
- Otomatik olarak sanitize edilmiş ve kullanıma hazırdır

## Theme Builder ile Entegrasyon {#integration-with-theme-builder}

Theme Builder'ın tasarım yönü seçimini kullanırken, Generate Logo SVG özelliği:

1. Tasarım yönünüzü ve renk paletinizi analiz eder
2. Tercihlerinizle eşleşen özel bir SVG logo oluşturur
3. Logoyu otomatik olarak sitenizin başlık/markalama alanına gömer
4. SVG'yi WordPress medya kütüphanesinde özel bir logo olarak depolar

## En İyi Uygulamalar {#best-practices}

- **Net stil tercihleri belirtin** — istediğiniz tasarım stilini açıklayın (modern, klasik, eğlenceli vb.).
- **Renkleri belirtin** — tutarlılık için marka renklerinizi ekleyin.
- **Görüntülemeyi test edin** — logonun farklı ekran boyutlarında doğru göründüğünü doğrulayın.
- **Daha fazla özelleştirin** — boyut ve yerleşimi ayarlamak için WordPress'in logo özelleştirme araçlarını kullanın.

## Sınırlamalar {#limitations}

- SVG logolar statik grafikler olarak oluşturulur (animasyonlu değildir).
- Çok sayıda öğe içeren karmaşık logolar manuel düzenleme gerektirebilir.
- Özel fontlar desteklenmez; metin sistem fontlarını kullanır.
- Çok büyük veya çok küçük boyutlar kaliteyi etkileyebilir.

## İlgili Özellikler {#related-abilities}

- [Palet Kontrastını Doğrula](./validate-palette-contrast.md) — erişilebilirlik için renk kontrastını kontrol edin.
- [Menü Oluştur](./create-menu.md) — siteniz için navigasyon menüleri oluşturun.
