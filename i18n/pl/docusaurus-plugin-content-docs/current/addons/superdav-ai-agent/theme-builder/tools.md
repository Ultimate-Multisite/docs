---
title: Narzędzia i konfiguracja
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Narzędzia i konfiguracja

Theme Builder wykorzystuje zestaw narzędzi do analizowania, projektowania i budowania Twojej witryny WordPress. W wersji 1.16.0, **sd-ai-agent/site-scrape stał się narzędziem Poziomu 1 (Tier 1)**, co oznacza, że jest domyślnie dostępne w Theme Builder.

## Dostępne narzędzia

### Narzędzia Poziomu 1 (Tier 1) (Zawsze dostępne)

Narzędzia Poziomu 1 są domyślnie dostępne w Theme Builder bez konieczności dodatkowej konfiguracji.

#### sd-ai-agent/site-scrape

**Cel:** Analiza istniejących stron internetowych w celu wyciągnięcia inspiracji projektowych, struktury treści i funkcjonalności.

**Możliwości:**

- **Analiza witryny** — skroba i analizuje strony konkurencji lub źródła inspiracji
- **Ekstrakcja designu** — identyfikuje kolory, czcionki i wzory układu
- **Struktura treści** — rozumie organizację i hierarchię stron
- **Wykrywanie funkcji** — identyfikuje pluginów i funkcjonalności
- **Analiza wydajności** — sprawdza szybkość ładowania i optymalizację strony
- **Analiza SEO** — przegląda meta tagi i dane strukturalne

**Wykorzystanie:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Co wyciąga:**

- Paleta kolorów i sposób ich użycia
- Typografia (czcionki i rozmiary)
- Struktura układu i odstępy
- Wzorce nawigacji
- Organizacja treści
- Obrazy i wykorzystanie mediów
- Elementy interaktywne
- Responsywność na urządzeniach mobilnych

**Ograniczenia:**

- Nie może skrobać stron chronionych hasłem
- Szanuje pliki robots.txt i polityki witryny
- Może nie uchwycić treści dynamicznych
- Strony z dużą ilością JavaScript mogą mieć ograniczoną analizę
- Duże witryny mogą wymagać dłuższego czasu analizy

### Narzędzia Poziomu 2 (Tier 2) (Opcjonalne)

Narzędzia Poziomu 2 są dostępne, gdy zostaną jawnie włączone w ustawieniach Theme Builder.

#### Advanced Analytics

Dostarcza szczegółowe metryki wydajności:

- Czas ładowania strony
- Core Web Vitals
- Wynik SEO
- Wynik dostępności (Accessibility score)
- Wynik najlepszych praktyk (Best practices score)

#### Content Optimizer

Analizuje i sugeruje ulepszenia dla:

- Czytelności
- Optymalizacji SEO
- Wykorzystania słów kluczowych
- Struktury treści
- Umiejscowienia wezwań do działania (Call-to-action)

### Narzędzia Poziomu 3 (Tier 3) (Premium)

Narzędzia Poziomu 3 wymagają dodatkowej konfiguracji lub funkcji premium.

#### AI Content Generator

Generuje treści dla:

- Opisów produktów
- Stron usługowych
- Postów na blogu
- Meta opisów
- Tekstów wezwań do działania

#### Advanced Design Tools

Dostarcza zaawansowane możliwości projektowe:

- Generowanie niestandardowego CSS
- Tworzenie animacji
- Projektowanie elementów interaktywnych
- Zaawansowana teoria kolorów
- Optymalizacja typografii

## Konfiguracja narzędzi

### Włączanie narzędzi

Aby włączyć dodatkowe narzędzia w Theme Builder:

1. Przejdź do **Gratis AI Agent → Settings**
2. Przejdź do **Theme Builder → Tools**
3. Włącz/wyłącz narzędzia według potrzeb
4. Zapisz ustawienia

### Uprawnienia narzędzi

Niektóre narzędzia wymagają uprawnień:

- **Site scraping** — wymaga dostępu do Internetu
- **Analytics** — wymaga integracji z Google Analytics
- **Content generation** — wymaga kluczy API
- **Advanced features** — może wymagać subskrypcji premium

### Klucze API i poświadczenia

Skonfiguruj klucze API dla narzędzi, które ich wymagają:

1. Przejdź do **Gratis AI Agent → Settings → API Keys**
2. Wprowadź poświadczenia dla każdego narzędzia
3. Testuj połączenie
4. Zapisz bezpiecznie

## Używanie sd-ai-agent/site-scrape

### Podstawowe użycie

Poproś Theme Builder o analizę witryny:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Specyficzna analiza

Poproś o konkretne rodzaje analizy:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Analiza porównawcza

Porównaj wiele stron:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Ograniczenia i uwagi dotyczące narzędzi

### Ograniczenie liczby zapytań (Rate Limiting)

- Skrobanie jest ograniczone, aby zapobiec przeciążeniu serwera
- Wielokrotne żądania do tej samej witryny mogą zostać spowolnione (throttled)
- Duże witryny mogą wymagać dłuższego czasu analizy

### Dokładność treści

- Treści dynamiczne mogą nie zostać w pełni uchwycone
- Treści renderowane przez JavaScript mogą być niekompletne
- Dane w czasie rzeczywistym mogą nie być odzwierciedlone
- Niektóre treści mogą być chronione płatnymi murami (paywalls)

### Rozważania prawne i etyczne

- Szanuj pliki robots.txt i polityki witryny
- Nie skrobiej treści objętych prawem autorskim w celu reprodukcji
- Używaj analizy jako inspiracji, a nie do kopiowania
- Upewnij się, że masz prawa do używania wyciągniętych treści
- Przestrzegaj warunków użytkowania analizowanych stron

### Wpływ na wydajność

- Skrobanie dużych witryn może zająć czas
- Wielokrotne jednoczesne skrobania mogą być wolniejsze
- Łączność sieciowa wpływa na prędkość
- Duże zbiory danych mogą wymagać większej mocy obliczeniowej

## Najlepsze praktyki

### Wykorzystanie analizy witryny

1. **Analizuj wiele witryn** — zbieraj inspiracje z kilku źródeł
2. **Skup się na strukturze** — ucz się wzorców układu i organizacji
3. **Ekstrahuj kolory** — używaj palet kolorów jako punktu wyjścia
4. **Badaj typografię** — identyfikuj kombinacje czcionek, które Ci się podobają
5. **Przeglądaj nawigację** — rozumiej organizację menu

### Etyczne skrobanie

1. **Szanuj robots.txt** — przestrzegaj wytycznych witryny
2. **Nie kopiuj treści** — używaj analizy tylko jako inspiracji
3. **Weryfikuj prawa** — upewnij się, że możesz używać wyciągniętych treści
4. **Podawaj źródła** — przypisuj źródła inspiracji
5. **Przestrzegaj warunków** — działaj zgodnie z regulaminem witryny

### Maksymalizacja skuteczności narzędzi

1. **Bądź precyzyjny** — proś o konkretne rodzaje analizy
2. **Podaj kontekst** — wyjaśnij cel swojej witryny
3. **Określ oczekiwania** — opisz swoje cele projektowe
4. **Iteruj** — doskonal się na podstawie wyników
5. **Łącz narzędzia** — używaj wielu narzędzi do kompleksowej analizy

## Rozwiązywanie problemów

### Witryna nie może zostać skrobowana

- Sprawdź, czy witryna jest publicznie dostępna
- Zweryfikuj, czy robots.txt zezwala na skrobanie
- Spróbuj z inną witryną
- Sprawdź połączenie z Internetem
- Skontaktuj się z pomocą techniczną, jeśli problem się utrzymuje

### Niekompletna analiza

- Witryna może zawierać treści dynamiczne
- JavaScript może nie zostać w pełni wyrenderowany
- Duże witryny mogą przekroczyć limit czasu (timeout)
- Spróbuj analizować konkretne strony zamiast całej witryny
- Poproś o konkretne typy analizy

### Wolna wydajność

- Analiza dużych witryn trwa dłużej
- Wielokrotne jednoczesne skrobania są wolniejsze
- Łączność sieciowa wpływa na prędkość
- Spróbuj w godzinach poza szczytem
- Najpierw analizuj mniejsze sekcje

## Powiązane dokumenty

- [Discovery Interview](./discovery-interview.md) — zbieranie informacji projektowych
- [Design Direction](./design-direction.md) — dopracowanie projektu
- [Hospitality Menus](./hospitality-menus.md) — tworzenie stron z menu
