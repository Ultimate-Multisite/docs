---
title: Wygeneruj SVG logo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generowanie SVG Logo {#generate-logo-svg}

Funkcja **Generowanie SVG Logo** pozwala Theme Builderowi na tworzenie i osadzanie niestandardowych logo SVG bezpośrednio na Twojej witrynie WordPress, z automatyczną, bezpieczną sanitacją przestrzeni nazw.

## Przegląd {#overview}

Ta funkcja generuje skalowalne grafiki wektorowe (SVG) na podstawie kierunku brandingowego i preferencji projektowych Twojej witryny. Wygenerowane SVG są automatycznie sanitowane, aby zapewnić ich bezpieczeństwo w użyciu w WordPress, jednocześnie zachowując integralność wizualną.

## Parametry {#parameters}

| Parametr | Typ | Wymagany | Opis |
|-----------|------|----------|-------------|
| `site_name` | string | Tak | Nazwa witryny, dla której ma zostać wygenerowane logo |
| `style` | string | Tak | Styl projektu (np. "nowoczesny", "klasyczny", "minimalistyczny", "zabawny") |
| `colors` | array | Nie | Tablica kodów kolorów HEX do użycia w logo (np. `["#678233", "#ffffff"]`) |
| `width` | number | Nie | Szerokość SVG w pikselach (domyślnie: 200) |
| `height` | number | Nie | Wysokość SVG w pikselach (domyślnie: 200) |
| `include_text` | boolean | Nie | Czy należy uwzględnić nazwę witryny jako tekst w logo (domyślnie: true) |

## Format Wyjściowy {#output-format}

Funkcja zwraca ciąg SVG o następującej strukturze:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Zachowanie Sanitacji SVG {#svg-sanitisation-behaviour}

Wygenerowane SVG przechodzą automatyczną sanitację bezpieczną dla przestrzeni nazw, co ma na celu:

- **Usunięcie niebezpiecznych atrybutów** — usuwa obsługę zdarzeń, skrypty i potencjalnie niebezpieczne atrybuty
- **Zachowanie przestrzeni nazw** — utrzymuje przestrzenie nazw SVG (xmlns, xlink) dla prawidłowego renderowania
- **Walidacja struktury** — zapewnia, że SVG jest zgodne ze standardami W3C
- **Kodowanie encji** — poprawnie ucieka znaki specjalne w treści tekstowej
- **Usunięcie zewnętrznych odniesień** — usuwa zewnętrzne arkusze stylów i odniesienia do obrazów

Gwarantuje to, że SVG jest bezpieczne do osadzenia bezpośrednio w WordPress bez konieczności dodatkowej sanitacji.

## Przykład Użycia {#usage-example}

**Prompt:**
```
Wygeneruj nowoczesne logo dla mojego startupu technologicznego o nazwie "CloudSync" z użyciem niebieskiego i białego koloru.
```

**Wynik:**
Funkcja tworzy logo SVG, które:
- Zawiera nazwę witryny "CloudSync"
- Używa określonej palety kolorów niebieskiego i białego
- Odzwierciedla nowoczesne zasady projektowania
- Jest automatycznie zsanowane i gotowe do użycia

## Integracja z Theme Builderem {#integration-with-theme-builder}

Podczas korzystania z wyboru kierunku projektowego w Theme Builderze, funkcja Generowanie SVG Logo:

1. Analizuje Twój kierunek projektowy i paletę kolorów
2. Generuje niestandardowe logo SVG pasujące do Twoich preferencji
3. Automatycznie osadza logo w obszarze nagłówka/branding’u Twojej witryny
4. Przechowuje SVG jako niestandardowe logo w mediach WordPress

## Najlepsze Praktyki {#best-practices}

- **Podawaj jasne preferencje stylu** — opisz pożądany styl projektu (nowoczesny, klasyczny, zabawny itp.)
- **Określ kolory** — uwzględnij kolory swojej marki, aby zapewnić spójność
- **Testuj renderowanie** — upewnij się, że logo wyświetla się poprawnie na różnych rozmiarach ekranu
- **Dalsza personalizacja** — używaj narzędzi do personalizacji logo WordPress, aby dostosować rozmiar i umiejscowienie

## Ograniczenia {#limitations}

- Logo SVG jest generowane jako statyczna grafika (nie jest animowane)
- Złożone logo z wieloma elementami może wymagać ręcznego dopracowania
- Nie obsługiwane są niestandardowe czcionki; tekst używa czcionek systemowych
- Bardzo duże lub bardzo małe wymiary mogą wpłynąć na jakość

## Powiązane Funkcje {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — sprawdzenie kontrastu kolorów pod kątem dostępności
- [Create Menu](./create-menu.md) — tworzenie menu nawigacyjnych dla Twojej witryny
