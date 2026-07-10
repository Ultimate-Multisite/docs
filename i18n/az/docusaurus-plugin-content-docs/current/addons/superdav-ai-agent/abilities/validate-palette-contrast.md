---
title: Palitra Kontrastını Yoxla
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Palitral Kontrastı Yoxlamaq {#validate-palette-contrast}

**Palitral Kontrastı Yoxlamaq** funksionallığı, dizayn palitranızdakı rəng cütlərini, onları mövzuya tətbiq etməzdən əvvəl WCAG (Web Kontentə Giriş Uyğunluğu Təlimatları) standartlarına uyğunluq baxımından yoxlayır.

## Ümumi Baxış {#overview}

Bu funksiya, mətn və fon rəngləri arasındakı kontrast nisbətlərini yoxlamaqla saytınızın rəng sxeminin giriş uyğunluğu standartlarını təmin etdiyinə əmin olur. Bu, vizual çatışmazlığı olan istifadəçilər üçün oxuması çətin ola biləcək rəng kombinasiyalarını qarşısını almağa kömək edir.

## Giriş Formatı {#input-format}

Funksiya, giriş olaraq bir rəng palitrası qəbul edir:

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

### Parametrlər {#parameters}

| Parametr | Tip | Tələb Olunur | Təsvir |
|-----------|------|----------|-------------|
| `colors` | array | Bəli | `name` və `hex` xüsusiyyətlərinə malik rəng obyektlərinin massivi |
| `wcag_level` | string | Xeyr | WCAG uyğunluq səviyyəsi: "A", "AA" (default) və ya "AAA" |
| `pairs_to_check` | array | Xeyr | Yoxlanılacaq müəyyən rəng cütləri (məsələn, `["primary-text", "background-text"]`) |

## Yoxlanılan WCAG Səviyyələri {#wcag-levels-checked}

Funksiya, WCAG standartlarına uyğun olaraq kontrast nisbətlərini yoxlayır:

| Səviyyə | Normal Mətn | Böyük Mətn | Minimum Nisbət |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Mətn** — 18pt-dən kiçik mətn (və ya 14pt qalın)
- **Böyük Mətn** — 18pt və ya daha böyük mətn (və ya 14pt qalın və ya daha böyük)

## Çıxış Şeması {#output-schema}

Funksiya, ətraflı bir yoxlama hesabatı qaytarır:

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

### Çıxış Sahələri {#output-fields}

| Sahə | Tip | Təsvir |
|-------|------|-------------|
| `compliant` | boolean | Bütün palitranın göstərilən WCAG səviyyəsinə uyğun olub-olmadığı |
| `wcag_level` | string | Yoxlanılan WCAG səviyyəsi |
| `pairs` | array | Hər bir rəng cütləri üçün ətraflı nəticələr |
| `contrast_ratio` | number | Hesablanmış kontrast nisbəti (1:1-dən 21:1-ə) |
| `status` | string | Hər bir cüt üçün "pass" (keçdi) və ya "fail" (keçmədi) |
| `recommendations` | array | Keçməyən cütləri yaxşılaşdırmaq üçün təkliflər |

## İstifadə Nümunəsi {#usage-example}

**Sual:**
```
Rəng palitramın WCAG AA standartlarına uyğun olub-olmadığını yoxlayın. Primary rəngim #678233, mətn rəngim #ffffff və fon rəngim #f5f5f5-dir.
```

**Nəticə:**
Funksiya bütün rəng kombinasiyalarını yoxlayır və aşağıdakıları qaytarır:
- ✅ Primary + Mətn: 5.2:1 nisbəti (WCAG AA-dan keçir)
- ✅ Fon + Mətn: 12.1:1 nisbəti (WCAG AAA-dan keçir)
- Ümumi: WCAG AA-ya uyğundur

## Mövzu Qurucu ilə İntegrasiya {#integration-with-theme-builder}

Mövzu Qurucusu (Theme Builder) dizayn istiqaməti seçərkən, Palitral Kontrastı Yoxlamaq funksionallığı:

1. Seçdiyiniz rəng palitrasını təhlil edir
2. Bütün mətn-fon kombinasiyalarını yoxlayır
3. Seçdiyiniz WCAG səviyyəsinə görə yoxlayır
4. Uyğun olmayan cütlər üçün təkliflər verir
5. Giriş uyğun olmayan rəng sxemlərinin tətbiq edilməsini əngəlləyir

## Ən Yaxşı Praktikalara Nəzarət {#best-practices}

- **AA səviyyəsi ilə başlayın** — WCAG AA, əksər saytlar üçün standartdır.
- **Tətbiq etməzdən əvvəl yoxlayın** — dizayna bağlı qalmadan əvvəl palitranızı yoxlayın.
- **Bütün kombinasiyaları yoxlayın** — mətn, linklər və UI elementlərinin hamısının standartlara uyğun olduğundan əmin olun.
- **İstifadəçi üstünlüklərini nəzərə alın** — bəzi istifadəçilərin əlavə rəng həssaslığı ola bilər.
- **Kontrast yoxlayıcılar istifadə edin** — təsdiq üçün bu funksionallığı brauzer alətləri ilə birləşdirin.

## Keçməyən Cütlər və Təkliflər {#failing-pairs-and-recommendations}

Əgər bir rəng cütlüyü yoxlamadan keçmirsə, funksiya təkliflər verir:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Mətn rəngini #ffffff-ə açıqlayın (nisbət 5.2:1 olardı)",
    "Fon rəngini #556b2f-ə tündləşdirin (nisbət 4.8:1 olardı)",
    "Primary rəng kimi #4a6b1f kimi fərqli bir rəngdan istifadə edin (nisbət 6.1:1 olardı)"
  ]
}
```

## Əlaqəli Funksionallıqlar {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — təsdiqlənmiş rəng palitranızla loqolar yaradın
- [Create Menu](./create-menu.md) — girişə giriş uyğun rənglərlə qurmaq
