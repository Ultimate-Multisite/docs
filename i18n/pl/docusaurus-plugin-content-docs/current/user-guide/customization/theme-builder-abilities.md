---
title: Zdolności Tworzenia Motywów
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Możliwości Tworzenia Tematów: Szkieletowanie i Aktywacja Block Themes

Superdav AI Agent v1.12.0 wprowadza dwie potężne funkcje, które pozwalają generować i wdrażać niestandardowe block themes bezpośrednio z interfejsu czatu.

## Przegląd

Funkcje **scaffold-block-theme** i **activate-theme** umożliwiają agentom:
- Generowanie kompletnych, gotowych do użycia block themes na podstawie Twoich wymagań
- Automatyczne aktywowanie tematów na Twojej stronie bez ręcznej interwencji
- Tworzenie spójnej identyfikacji wizualnej dzięki prowadzonym decyzjom projektowym

## Szkieletowanie Block Theme

Funkcja **scaffold-block-theme** generuje nowy block theme WordPress z kompletną strukturą, w tym:

- Konfigurację `theme.json` z tokenami projektowymi (design tokens)
- Pliki szablonów bloków dla popularnych układów
- Niestandardowe style i warianty bloków
- Metadane i deklaracje wsparcia dla całego motywu

### Jak wywołać

W czacie z Superdav AI Agent możesz poprosić o wygenerowanie motywu:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent wykona następujące kroki:
1. Zbiera Twoje preferencje projektowe poprzez rozmowę
2. Generuje kompletną strukturę motywu
3. Tworzy wszystkie niezbędne pliki motywu
4. Przygotowuje motyw do aktywacji

### Oczekiwany wynik

Po pomyślnym wykonaniu funkcji zobaczysz:

- Potwierdzenie, że motyw został przeszkieletowany (scaffolded)
- Nazwę i lokalizację motywu
- Podsumowanie zastosowanych tokenów projektowych (kolory, typografia, odstępy)
- Status gotowości do aktywacji

Przykład wyniku:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Aktywacja Motywu

Funkcja **activate-theme** przełącza Twoją stronę na nowo przeszkieletowany lub istniejący block theme.

### Jak wywołać

Po przeszkieletowaniu motywu możesz go natychmiast aktywować:

```
"Activate the Modern Agency theme"
```

Lub aktywować dowolny istniejący motyw:

```
"Switch to the Twentytwentyfour theme"
```

### Oczekiwany wynik

Po pomyślnej aktywacji:

- Potwierdzenie aktywnego motywu
- Nazwa poprzedniego motywu (do odniesienia)
- Adres URL strony, na której motyw jest teraz aktywny
- Ewentualne uwagi dotyczące konfiguracji specyficzne dla motywu

Przykład wyniku:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Przepływ pracy: Szkieletowanie i Aktywacja

Typowy przepływ pracy łączy obie funkcje:

1. **Żądanie generacji motywu**: "Create a block theme for my SaaS landing page"
2. **Agent szkieletuje motyw**: Generuje pliki i tokeny projektowe
3. **Przegląd i dopracowanie**: Dyskusja o zmianach projektowych, jeśli zajdzie taka potrzeba
4. **Aktywacja**: "Activate the theme now"
5. **Weryfikacja**: Odwiedź swoją stronę, aby potwierdzić, że nowy design jest aktywny

## Tokeny Projektowe i Dostosowanie

Przeszkieletowane motywy używają tokenów projektowych WordPress (poprzez `theme.json`) do:

- **Kolorów**: Kolor podstawowy (Primary), kolor wtórny (Secondary), akcent, paleta neutralna
- **Typografii**: Rodziny czcionek, rozmiary, grubości, wysokości linii
- **Odstępów**: Skale paddingu, marginu, gap
- **Obramowań**: Tokeny promienia i szerokości
- **Cieni**: Poziomy elewacji

Te tokeny są scentralizowane w pliku `theme.json`, co ułatwia dostosowanie całego systemu projektowego z jednego miejsca.

## Ograniczenia i Uwagi

- Motywy są szkieletowane w katalogu `/wp-content/themes/` i muszą przestrzegać konwencji nazewnictwa WordPress.
- Aktywacja wymaga odpowiednich uprawnień na Twojej stronie WordPress.
- Niestandardowy kod PHP w motywach jest minimalny; do złożonej funkcjonalności używaj pluginów.
- Block themes najlepiej działają z WordPress 5.9 i nowszym.

## Rozwiązywanie problemów

**Motyw nie pojawia się po szkieletowaniu**
- Sprawdź, czy katalog motywu istnieje i czy ma odpowiednie uprawnienia.
- Upewnij się, że `theme.json` jest poprawnym JSON.
- Upewnij się, że nazwa motywu nie koliduje z istniejącymi motywami.

**Aktywacja się nie udaje**
- Potwierdź, że masz uprawnienia administratora.
- Sprawdź, czy katalog motywu jest czytelny dla WordPress.
- Przejrzyj logi błędów WordPress, aby uzyskać szczegóły.

**Tokeny projektowe nie są stosowane**
- Sprawdź, czy składnia `theme.json` jest poprawna.
- Wyczyść wszelkie pamięci podręczne (caching plugins).
- Sprawdź, czy Twoja wersja WordPress obsługuje używane tokeny.

## Następne kroki

Po aktywacji motywu możesz:
- Użyć umiejętności **Design System Aesthetics** do dopracowania typografii, kolorów i odstępów
- Dostosowywać style poszczególnych bloków za pomocą edytora bloków WordPress
- Dodawać niestandardowy CSS w pliku `style.css` motywu
- Tworzyć niestandardowe szablony bloków dla określonych typów stron
