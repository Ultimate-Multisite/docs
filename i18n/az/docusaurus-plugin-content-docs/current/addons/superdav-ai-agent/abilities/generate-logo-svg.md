---
title: Loqo SVG Yarat
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG Generasiyası {#generate-logo-svg}

**Logo SVG Generasiyası** imkanı, Theme Builder-ə sayəsində, sizin WordPress saytınıza xüsusi logo SVG-lərini avtomatik olaraq təhlükəsizləşdirilmiş şəkildə yerləşdirməyə imkan verir.

## Ümumi Baxış {#overview}

Bu imkan, saytınızın brendinə və dizayn üstünlüklərinə əsaslanaraq miqyaslanabilən vektor qrafiklər (SVG) logo-ları yaradır. Yaradılan SVG-lər, vizual bütövlüyünü qoruyaraq, WordPress-də istifadə üçün təhlükəsiz olduğundan əmin olmaq üçün avtomatik olaraq təhlükəsizləşdirilir.

## Parametrlər {#parameters}

| Parametr | Tip | Tələb Olunur | Təsvir |
|-----------|------|----------|-------------|
| `site_name` | string | Bəli | Logo yaratmaq üçün saytın adı |
| `style` | string | Bəli | Dizayn üslubu (məsələn, "modern", "klassik", "minimalist", "oyunbaşı") |
| `colors` | array | Xeyr | Logoda istifadə ediləcək heks rəng kodları massivi (məsələn, `["#678233", "#ffffff"]`) |
| `width` | number | Xeyr | Piksel ilə SVG eni (default: 200) |
| `height` | number | Xeyr | Piksel ilə SVG hündürlüyü (default: 200) |
| `include_text` | boolean | Xeyr | Sayt adını logoda mətn olaraq göstərmək olub-olmaması (default: true) |

## Çıxış Formatı {#output-format}

Bu imkan aşağıdakı strukturda bir SVG string-i qaytarır:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Təhlükəsizləşdirilməsi (Sanitisation) Davranışı {#svg-sanitisation-behaviour}

Yaradılan SVG-lər aşağıdakıları etmək üçün avtomatik olaraq təhlükəsizləşdirilir:

- **Təhlükəsiz olmayan atributları çıxarır** — hadisə handlerlarını, skriptləri və potensial təhlükəli atributları təmizləyir
- **Namespace-ləri qoruyur** — düzgün göstərilmə üçün SVG namespace-lərini (xmlns, xlink) qoruyur
- **Strukturanı yoxlayır** — SVG-nin W3C standartlarına uyğun olduğundan əmin olur
- **Entiteti kodlayır** — mətn məzmunundakı xüsusi simvolları düzgün şəkildə qaçırır
- **Xarici istinadları çıxarır** — xarici stil fayllarını və şəkil istinadlarını təmizləyir

Bu, SVG-nin əlavə təhlükəsizləşdirmə tələb etmədən birbaşa WordPress-ə yerləşdirilməsi üçün təhlükəsiz olduğundan əmin edir.

## İstifadə Nümunəsi {#usage-example}

**Komanda:**
```
"CloudSync" adlı texnologiya startapım üçün mavi və ağ rənglərdən istifadə edərək modern bir logo yarat.
```

**Nəticə:**
Bu imkan aşağıdakıları edən bir SVG logo yaradır:
- Sayt adı "CloudSync"-ni əks etdirir
- Təyin edilmiş mavi və ağ rəng sxemindən istifadə edir
- Modern dizayn prinsiplərinə uyğundur
- Avtomatik olaraq təhlükəsizləşdirilmiş və istifadəyə hazırdır

## Theme Builder ilə İntegrasiya {#integration-with-theme-builder}

Theme Builder-in dizayn istiqaməti seçimi zamanı, Logo SVG Generasiyası imkanı:

1. Dizayn istiqamətiniz və rəng paletinizə nəzər salır
2. Üstünlüklərinizə uyğun xüsusi bir SVG logo yaradır
3. Logonu avtomatik olaraq saytınızın başlıq/brend sahəsinə yerləşdirir
4. SVG-ni WordPress media-sında xüsusi logo kimi saxlayır

## Ən Yaxşı Praktikalara Nəzər Salmaq {#best-practices}

- **Aydın üslub üstünlükləri verin** — istədiyiniz dizayn üslubunu təsvir edin (modern, klassik, oyunbaşı və s.)
- **Rəngləri təyin edin** — ardıcıllığı qorumaq üçün brend rənglərinizi daxil edin
- **Göstərilməni yoxlayın** — logonun fərqli ekran ölçülərində düzgün göstərilməsini yoxlayın
- **Daha da fərdiləşdirin** — ölçünü və yerləşdirməni tənzimləmək üçün WordPress-in logo fərdiləşdirmə alətlərindən istifadə edin

## Məhdudiyyətlər {#limitations}

- SVG logo-lar statik qrafiklər kimi yaradılır (animasiya deyil)
- Bir çox elementə malik mürəkkəb logo-lar əl ilə tənzimlənməyi tələb edə bilər
- Xüsusi şriftlər dəstəklənmir; mətn sistem şriftlərindən istifadə edir
- Çox böyük və ya çox kiçik ölçülər keyfiyyətə təsir edə bilər

## Əlaqəli İmkanlar {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — əlçatanlıq üçün rəng kontrastını yoxlayın
- [Create Menu](./create-menu.md) — saytınız üçün naviqasiya menyuları yaradın
