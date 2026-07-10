---
title: Utwórz menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Utwórz menu {#create-menu}

Możliwość **Utwórz menu** pozwala tworzyć menu nawigacyjne WordPress, obsługując jednocześnie oddzielne etykiety nawigacyjne, które różnią się od tytułów stron.

## Przegląd {#overview}

Ta możliwość rozszerza standardową funkcjonalność tworzenia menu, dodając możliwość określenia parametru `navigation_label`. Pozwala to na tworzenie menu, w których etykieta wyświetlana w nawigacji różni się od tytułu strony, co zapewnia większą elastyczność w strukturze witryny i doświadczeniu użytkownika.

## Parametry {#parameters}

| Parametr | Typ | Wymagany | Opis |
|-----------|------|----------|-------------|
| `name` | string | Tak | Nazwa menu, np. `Główna nawigacja` |
| `location` | string | Nie | Lokalizacja motywu, do której przypiszesz to menu, np. `primary` |
| `navigation_label` | string | Nie | Etykieta do wyświetlenia w nawigacji (różna od tytułu strony) |

## Wartość zwracana {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Etykieta nawigacyjna vs Tytuł strony {#navigation-label-vs-page-title}

Parametr `navigation_label` pozwala oddzielić wewnętrzną nazwę menu od etykiety wyświetlanej użytkownikom:

- **`name`** — Wewnętrzny identyfikator menu używany przez WordPress (np. "Primary Navigation")
- **`navigation_label`** — Etykieta wyświetlana odwiedzającym witrynę w nawigacji (np. "Menu główne")

Jest to przydatne, gdy:
- Twoja wewnętrzna konwencja nazewnictwa różni się od etykiet widocznych dla użytkowników
- Chcesz, aby etykiety w nawigacji były krótsze niż w panelu administracyjnym
- Musisz obsługiwać wiele języków z różną długością etykiet
- Tworzysz menu dla określonych regionów lub grup użytkowników

## Przykłady użycia {#usage-examples}

### Przykład 1: Proste menu z etykietą nawigacyjną {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Utwórz menu nawigacyjne główne o nazwie "Główna nawigacja" z etykietą nawigacyjną "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Przykład 2: Menu dla określonej lokalizacji motywu {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Utwórz menu stopki o nazwie "Linki stopki" z etykietą nawigacyjną "Szybkie linki" i przypisz je do lokalizacji stopki.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integracja z Theme Builderem {#integration-with-theme-builder}

Podczas używania Theme Buildera, możliwość Utwórz menu:

1. Automatycznie wykrywa dostępne lokalizacje menu motywu
2. Tworzy menu z odpowiednimi etykietami nawigacyjnymi dla Twojego projektu
3. Przypisuje menu do właściwych lokalizacji motywu
4. Obsługuje dodawanie elementów menu po utworzeniu

## Powiązane możliwości {#related-abilities}

- **`add_menu_item`** — Dodawanie elementów do istniejącego menu
- **`update_menu`** — Zmienianie nazwy menu lub ponowne przypisywanie go do lokalizacji motywu
- **`delete_menu`** — Usuwanie menu z witryny

## Najlepsze praktyki {#best-practices}

- **Używaj jasnych etykiet nawigacyjnych** — utrzymuj etykiety zwięzłe i opisowe dla użytkowników
- **Dopasuj lokalizacje motywu** — przypisuj menu do właściwej lokalizacji motywu, aby zapewnić prawidłowe wyświetlanie
- **Planuj strukturę menu** — zdecyduj o hierarchii menu, zanim zaczniesz dodawać elementy
- **Testuj responsywność** — upewnij się, że menu wyświetlają się poprawnie na urządzeniach mobilnych
- **Lokalizuj etykiety** — używaj różnych etykiet nawigacyjnych dla różnych wersji językowych

## Ograniczenia {#limitations}

- Etykiety nawigacyjne służą tylko do wyświetlania; wewnętrzna `name` nadal jest używana do identyfikacji w WordPress
- Wsparcie dla motywów jest różne; nie wszystkie motywy obsługują wszystkie lokalizacje menu
- Elementy menu muszą być dodawane osobno po utworzeniu menu
- Zmiana etykiety nawigacyjnej wymaga aktualizacji menu

## Powiązane możliwości {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — tworzenie logo dla nagłówka witryny
- [Validate Palette Contrast](./validate-palette-contrast.md) — zapewnienie dostępnych schematów kolorów
