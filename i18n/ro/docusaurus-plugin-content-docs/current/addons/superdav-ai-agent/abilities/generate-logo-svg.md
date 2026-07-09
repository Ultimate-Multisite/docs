---
title: Generare SVG Logo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generare SVG Logo {#generate-logo-svg}

Funcționalitatea **Generare SVG Logo** permite Theme Builder să creeze și să încorporeze SVG-uri de logo personalizate direct în site-ul tău WordPress, cu o sanitizare automată și sigură din punct de vedere al namespace-urilor.

## Prezentare generală {#overview}

Această funcționalitate generează logo-uri în grafică vectorială scalabilă (SVG), bazate pe direcția de branding și preferințele de design ale site-ului tău. SVG-urile generate sunt automatizate și sanizate pentru a garanta că sunt sigure de utilizat în WordPress, menținând în același timp integritatea vizuală.

## Parametri {#parameters}

| Parametru | Tip | Obligatoriu | Descriere |
|-----------|------|-------------|-------------|
| `site_name` | string | Da | Numele site-ului pentru care se va genera logo-ul |
| `style` | string | Da | Stilul de design (de ex., "modern", "clasic", "minimalist", "jucăuș") |
| `colors` | array | Nu | Un tabel de coduri de culoare hex de utilizat în logo (ex., `["#678233", "#ffffff"]`) |
| `width` | number | Nu | Lățimea SVG în pixeli (implicit: 200) |
| `height` | number | Nu | Înălțimea SVG în pixeli (implicit: 200) |
| `include_text` | boolean | Nu | Dacă se va include numele site-ului ca text în logo (implicit: true) |

## Formatul de ieșire {#output-format}

Funcționalitatea returnează un șir SVG cu următoarea structură:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Comportamentul de sanitizare SVG {#svg-sanitisation-behaviour}

SVG-urile generate sunt supuse unei sanitizări automate, sigure din punct de vedere al namespace-urilor, pentru a:

- **Elimina atributele nesigure** — elimină *event handlers*, script-uri și atribute potențial periculoase
- **Păstra namespace-urile** — menține namespace-urile SVG (xmlns, xlink) pentru o afișare corectă
- **Valida structura** — asigură că SVG-ul respectă standardele W3C
- **Codifica entitățile** — escapează corect caracterele speciale din conținutul textului
- **Elimina referințele externe** — elimină fișierele CSS externe și referințele de imagini

Acest lucru garantează că SVG-ul este sigur de încorporat direct în WordPress, fără a necesita o sanitizare suplimentară.

## Exemplu de utilizare {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Rezultat:**
Funcționalitatea creează un logo SVG care:
- Incorporă numele site-ului "CloudSync"
- Utilizează schema de culori albastru și alb specificată
- Urmează principiile de design modern
- Este automatizat și gata de utilizare

## Integrarea cu Theme Builder {#integration-with-theme-builder}

Când folosești selecția de direcție de design din Theme Builder, funcționalitatea Generare SVG Logo:

1. Analizează direcția de design și paleta de culori a site-ului tău
2. Generează un logo SVG personalizat care se potrivește preferințelor tale
3. Încorporează automat logo-ul în zona de branding/antet a site-ului tău
4. Stochează SVG-ul ca un logo personalizat în media WordPress

## Cele mai bune practici {#best-practices}

- **Oferă preferințe clare de stil** — descrie stilul de design pe care îl dorești (modern, clasic, jucăuș etc.)
- **Specifică culorile** — include culorile brand-ului pentru consistență
- **Testează afișarea** — verifică dacă logo-ul afișează corect pe diferite dimensiuni de ecran
- **Personalizează și mai mult** — folosește instrumentele de personalizare a logo-ului din WordPress pentru a ajusta dimensiunea și plasarea

## Limitările {#limitations}

- Logo-urile SVG sunt generate ca grafică statică (nu animate)
- Logo-urile complexe cu multe elemente pot necesita rafinări manuale
- Nu sunt suportate fonturile personalizate; textul folosește fonturi sistem
- Dimensiunile foarte mari sau foarte mici pot afecta calitatea

## Funcționalități conexe {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — verifică contrastul culorilor pentru accesibilitate
- [Create Menu](./create-menu.md) — creează meniuri de navigare pentru site-ul tău
