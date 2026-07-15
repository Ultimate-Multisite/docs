---
title: Validate Palette Contrast
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palet Kontrastını Doğrulama

**Palet Kontrastını Doğrulama** özelliği, renklerinizi temanıza uygulamadan önce, tasarım paletinizdeki renk çiftlerini WCAG (Web İçeriği Erişilebilirlik Yönergeleri) uyumluluğu açısından kontrol eder.

## Genel Bakış {#overview}

Bu özellik, sitenizin renk şemasının, metin ve arka plan renkleri arasındaki kontrast oranlarını doğrulayarak erişilebilirlik standartlarına uygun olmasını sağlar. Görme engelli kullanıcılar için okuması zor olabilecek renk kombinasyonlarını önlemeye yardımcı olur.

## Giriş Formatı {#input-format}

Bu özellik, bir renk paleti girişi kabul eder:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parametreler {#parameters}

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|------|----------|-------------|
| `colors` | array | Evet | `name` ve `hex` özelliklerine sahip renk nesneleri dizisi |
| `wcag_level` | string | Hayır | WCAG uyumluluk seviyesi: "A", "AA" (varsayılan) veya "AAA" |
| `pairs_to_check` | array | Hayır | Doğrulanacak belirli renk çiftleri (örneğin, `["primary-text", "background-text"]`) |

## Kontrol Edilen WCAG Seviyeleri {#wcag-levels-checked}

Bu özellik, WCAG standartlarına göre kontrast oranlarını doğrular:

| Seviye | Normal Metin | Büyük Metin | Minimum Oran |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Metin** — 18pt'den küçük metin (veya 14pt kalın)
- **Büyük Metin** — 18pt veya daha büyük metin (veya 14pt kalın veya daha büyük)

## Çıkış Şeması {#output-schema}

Bu özellik, ayrıntılı bir doğrulama raporu döndürür:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Çıkış Alanları {#output-fields}

| Alan | Tip | Açıklama |
|-------|------|-------------|
| `compliant` | boolean | Tüm paletin belirtilen WCAG seviyesine uyup uymadığını belirtir |
| `wcag_level` | string | Kontrol edilen WCAG seviyesi |
| `pairs` | array | Her renk çifti için ayrıntılı sonuçlar |
| `contrast_ratio` | number | Hesaplanan kontrast oranı (1:1 ila 21:1) |
| `status` | string | Her çift için "pass" (geçti) veya "fail" (kaldı) |
| `recommendations` | array | Başarısız olan çiftleri iyileştirmek için öneriler |

## Kullanım Örneği {#usage-example}

**İstem:**
```
Renk paletimin WCAG AA standartlarına uyup uymadığını kontrol edin. Birincil rengim #678233, metin rengim #ffffff ve arka planım #f5f5f5.
```

**Sonuç:**
Özellik, tüm renk kombinasyonlarını doğrular ve şunları döndürür:
- ✅ Birincil + Metin: 5.2:1 oranı (WCAG AA'yı geçiyor)
- ✅ Arka Plan + Metin: 12.1:1 oranı (WCAG AAA'yı geçiyor)
- Genel: WCAG AA ile uyumlu

## Tema Oluşturucu ile Entegrasyon {#integration-with-theme-builder}

Tema Oluşturucu'nun tasarım yönü seçilirken, Palet Kontrastını Doğrulama özelliği:

1. Seçtiğiniz renk paletini analiz eder
2. Tüm metin-arka plan kombinasyonlarını kontrol eder
3. Seçtiğiniz WCAG seviyesine göre doğrulama yapar
4. Uyumsuz çiftler için öneriler sunar
5. Erişilemez renk şemalarının uygulanmasını engeller

## En İyi Uygulamalar {#best-practices}

- **AA seviyesiyle başlayın** — WCAG AA, çoğu web sitesi için standarttır
- **Uygulamadan önce test edin** — paletinizi bir tasarıma bağlı kalmadan önce doğrulayın
- **Tüm kombinasyonları kontrol edin** — metin, bağlantılar ve kullanıcı arayüzü öğelerinin tümünün standartlara uyduğundan emin olun
- **Kullanıcı tercihlerini düşünün** — bazı kullanıcıların ek renk hassasiyetleri olabilir
- **Kontrast kontrolörleri kullanın** — doğrulama için bu özelliği tarayıcı araçlarıyla birleştirin

## Başarısız Çiftler ve Öneriler {#failing-pairs-and-recommendations}

Bir renk çifti doğrulama testi başarısız olursa, özellik öneriler sunar:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Metin rengini #ffffff yaparak açın (oran 5.2:1 olur)",
    "Arka plan rengini #556b2f yaparak koyulaştırın (oran 4.8:1 olur)",
    "Bunun yerine #4a6b1f gibi farklı bir birincil renk kullanın (oran 6.1:1 olur)"
  ]
}
```

## İlgili Özellikler {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — doğruladığınız renk paletiyle logo oluşturun
- [Create Menu](./create-menu.md) — erişilebilir renklerle navigasyon oluşturun
