---
title: Sprawdź kontrast palety
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Walidacja Kontrastu Palety

Możliwość **Walidacja Kontrastu Palety** sprawdza pary kolorów w palecie Twojego projektu pod kątem zgodności z WCAG (Wytyczne dotyczące dostępności treści w Internecie) zanim zostaną zastosowane do motywu.

## Przegląd

Ta funkcja zapewnia, że schemat kolorów Twojej witryny spełnia standardy dostępności, walidując stosunki kontrastu między kolorami tekstu a tła. Pomaga to zapobiegać kombinacjom kolorów, które mogą być trudne do odczytania dla użytkowników z niepełnosprawnościami wzroku.

## Format Wejścia

Funkcja przyjmuje paletę kolorów jako dane wejściowe:

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

### Parametry

| Parametr | Typ | Wymagany | Opis |
|-----------|------|----------|-------------|
| `colors` | array | Tak | Tablica obiektów kolorów z właściwościami `name` i `hex` |
| `wcag_level` | string | Nie | Poziom zgodności WCAG: "A", "AA" (domyślny) lub "AAA" |
| `pairs_to_check` | array | Nie | Konkretne pary kolorów do walidacji (np. `["primary-text", "background-text"]`) |

## Sprawdzane Poziomy WCAG

Funkcja waliduje stosunki kontrastu zgodnie ze standardami WCAG:

| Poziom | Tekst Normalny | Tekst Duży | Minimalny Stosunek |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Tekst Normalny** — tekst mniejszy niż 18pt (lub 14pt pogrubiony)
- **Tekst Duży** — tekst 18pt lub większy (lub 14pt pogrubiony lub większy)

## Schemat Wyjścia

Funkcja zwraca szczegółowy raport walidacyjny:

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

### Pola Wyjściowe

| Pole | Typ | Opis |
|-------|------|-------------|
| `compliant` | boolean | Czy cała paleta spełnia określony poziom WCAG |
| `wcag_level` | string | Poziom WCAG, który został sprawdzony |
| `pairs` | array | Szczegółowe wyniki dla każdej pary kolorów |
| `contrast_ratio` | number | Obliczony stosunek kontrastu (od 1:1 do 21:1) |
| `status` | string | "pass" (zaliczone) lub "fail" (niezaliczone) dla każdej pary |
| `recommendations` | array | Sugestie poprawy dla par, które nie przeszły walidacji |

## Przykład Użycia

**Prompt:**
```
Sprawdź, czy moja paleta kolorów spełnia standardy WCAG AA. Mam kolor główny #678233, kolor tekstu #ffffff i tło #f5f5f5.
```

**Wynik:**
Funkcja waliduje wszystkie kombinacje kolorów i zwraca:
- ✅ Główny + Tekst: stosunek 5.2:1 (zalicza WCAG AA)
- ✅ Tło + Tekst: stosunek 12.1:1 (zalicza WCAG AAA)
- Ogólnie: Zgodne z WCAG AA

## Integracja z Theme Builder

Podczas używania wyboru kierunku projektowego w Theme Builder, funkcja Walidacja Kontrastu Palety:

1. Analizuje wybraną paletę kolorów
2. Sprawdza wszystkie kombinacje tekstu i tła
3. Waliduje względem wybranego poziomu WCAG
4. Dostarcza rekomendacje dla par niezgodnych ze standardami
5. Zapobiega zastosowaniu niedostępnych schematów kolorów

## Najlepsze Praktyki

- **Zacznij od poziomu AA** — WCAG AA to standard dla większości stron internetowych
- **Testuj przed zastosowaniem** — waliduj paletę, zanim zobowiążesz się do projektu
- **Sprawdź wszystkie kombinacje** — upewnij się, że tekst, linki i elementy interfejsu spełniają standardy
- **Weź pod uwagę preferencje użytkowników** — niektórzy użytkownicy mogą mieć dodatkową wrażliwość na kolory
- **Używaj checkerów kontrastu** — połącz tę funkcję z narzędziami przeglądarki w celu weryfikacji

## Pary Niepoprawne i Rekomendacje

Jeśli para kolorów nie przejdzie walidacji, funkcja dostarczy rekomendacje:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Rozjaśnij kolor tekstu do #ffffff (stosunek wyniósłby 5.2:1)",
    "Przyciemnij kolor tła do #556b2f (stosunek wyniósłby 4.8:1)",
    "Użyj innego koloru głównego, np. #4a6b1f (stosunek wyniósłby 6.1:1)"
  ]
}
```

## Powiązane Funkcje

- [Generate Logo SVG](./generate-logo-svg.md) — tworzenie logo z Twoją zweryfikowaną paletą kolorów
- [Create Menu](./create-menu.md) — budowanie nawigacji z dostępnymi kolorami
