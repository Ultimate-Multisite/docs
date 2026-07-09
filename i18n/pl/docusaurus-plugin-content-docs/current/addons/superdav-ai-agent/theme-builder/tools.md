---
title: Narzędzia i konfiguracja
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Narzędzia i konfiguracja

Theme Builder używa zestawu narzędzi do analizowania, projektowania i budowania Twojej witryny WordPress. W wersji 1.16.0 **sd-ai-agent/site-scrape jest teraz narzędziem Tier 1**, dzięki czemu jest dostępne domyślnie w Theme Builder. Superdav AI Agent v1.18.0 wprowadza również osobno dystrybuowany pakiet towarzyszący Advanced dla zaufanych przepływów pracy deweloperów; te narzędzia nie są częścią podstawowego pakietu WordPress.org i muszą zostać zainstalowane oraz autoryzowane osobno.

## Dostępne narzędzia

### Narzędzia Tier 1 (zawsze dostępne)

Narzędzia Tier 1 są dostępne domyślnie w Theme Builder bez żadnej dodatkowej konfiguracji.

#### sd-ai-agent/site-scrape

**Cel:** Analizowanie istniejących witryn w celu wyodrębnienia inspiracji projektowej, struktury treści i funkcjonalności.

**Możliwości:**

- **Analiza witryn** — pobieranie i analizowanie witryn konkurencji lub inspiracyjnych
- **Wyodrębnianie projektu** — identyfikowanie kolorów, fontów i wzorców układu
- **Struktura treści** — zrozumienie organizacji i hierarchii stron
- **Wykrywanie funkcji** — identyfikowanie pluginów i funkcjonalności
- **Analiza wydajności** — sprawdzanie szybkości strony i optymalizacji
- **Analiza SEO** — przeglądanie meta tagów i danych strukturalnych

**Użycie:**

```
Przeanalizuj projekt example.com i użyj go jako inspiracji dla mojej witryny.
```

**Co wyodrębnia:**

- Paleta kolorów i użycie kolorów
- Typografia (fonty i rozmiary)
- Struktura układu i odstępy
- Wzorce nawigacji
- Organizacja treści
- Użycie obrazów i multimediów
- Elementy interaktywne
- Responsywność mobilna

**Ograniczenia:**

- Nie może pobierać witryn chronionych hasłem
- Respektuje robots.txt i zasady witryny
- Może nie przechwytywać treści dynamicznych
- Witryny intensywnie korzystające z JavaScript mogą mieć ograniczoną analizę
- Duże witryny mogą wymagać więcej czasu na analizę

### Narzędzia Tier 2 (opcjonalne)

Narzędzia Tier 2 są dostępne po ich wyraźnym włączeniu w ustawieniach Theme Builder.

#### Advanced Analytics

Zapewnia szczegółowe metryki wydajności:

- Czasy ładowania stron
- Core Web Vitals
- Wynik SEO
- Wynik dostępności
- Wynik najlepszych praktyk

#### Content Optimizer

Analizuje i sugeruje ulepszenia dla:

- Czytelności
- Optymalizacji SEO
- Użycia słów kluczowych
- Struktury treści
- Umiejscowienia wezwania do działania

### Narzędzia Tier 3 (Premium)

Narzędzia Tier 3 wymagają dodatkowej konfiguracji lub funkcji premium.

#### AI Content Generator

Generuje treści dla:

- Opisów produktów
- Stron usług
- Wpisów blogowych
- Meta opisów
- Tekstów wezwań do działania

#### Advanced Design Tools

Zapewnia zaawansowane możliwości projektowe:

- Generowanie niestandardowego CSS
- Tworzenie animacji
- Projektowanie elementów interaktywnych
- Zaawansowana teoria kolorów
- Optymalizacja typografii

### Zaawansowane narzędzia towarzyszące (osobny pakiet)

Pakiet towarzyszący Advanced jest dystrybuowany oddzielnie od podstawowego wydania Superdav AI Agent. Jest przeznaczony dla zaufanych środowisk deweloperów i właścicieli witryn, w których administratorzy wyraźnie zezwalają agentowi na używanie narzędzi o dużym wpływie.

Możliwości pakietu towarzyszącego Advanced mogą obejmować:

- **Narzędzia systemu plików** — sprawdzanie i modyfikowanie zatwierdzonych plików w zaufanych środowiskach
- **Narzędzia bazy danych** — odpytywanie lub aktualizowanie danych witryny po wyraźnej autoryzacji
- **Narzędzia WP-CLI** — uruchamianie poleceń konserwacyjnych i inspekcyjnych WordPress
- **Narzędzia dyspozytora REST** — wywoływanie zarejestrowanych endpointów REST przez kontrolowane przepływy dyspozytorskie
- **Narzędzia budowania pluginów** — szkicowanie i iterowanie kodu pluginu
- **Narzędzia migawek Git** — tworzenie migawek przed ryzykownymi operacjami deweloperskimi
- **Narzędzia zarządzania użytkownikami** — pomoc w przeglądaniu lub dostosowywaniu rekordów użytkowników tam, gdzie jest to dozwolone
- **Narzędzia benchmarków** — uruchamianie benchmarków wydajności lub możliwości na potrzeby przeglądu deweloperskiego

Nie dokumentuj ich jako ogólnie dostępnych narzędzi Theme Builder dla każdej instalacji. Są dostępne tylko wtedy, gdy pakiet towarzyszący Advanced jest zainstalowany, włączony i ograniczony do zaufanych administratorów.

## Konfiguracja narzędzi

### Włączanie narzędzi

Aby włączyć dodatkowe narzędzia w Theme Builder:

1. Przejdź do **Gratis AI Agent → Settings**
2. Przejdź do **Theme Builder → Tools**
3. Włącz lub wyłącz narzędzia zgodnie z potrzebami
4. Zapisz ustawienia

### Uprawnienia narzędzi

Niektóre narzędzia wymagają uprawnień:

- **Pobieranie witryny** — wymaga dostępu do internetu
- **Analytics** — wymaga integracji z Google Analytics
- **Generowanie treści** — wymaga kluczy API
- **Funkcje zaawansowane** — mogą wymagać subskrypcji premium
- **Zaawansowane narzędzia towarzyszące** — wymagają osobno dystrybuowanego pakietu Advanced i wyraźnego zaufania administratora

### Klucze API i dane uwierzytelniające

Skonfiguruj klucze API dla narzędzi, które ich wymagają:

1. Przejdź do **Gratis AI Agent → Settings → API Keys**
2. Wprowadź dane uwierzytelniające dla każdego narzędzia
3. Przetestuj połączenie
4. Zapisz bezpiecznie

### Instalowanie pakietu towarzyszącego Advanced

Pakiet towarzyszący Advanced jest wydawany oddzielnie od podstawowego ZIP WordPress.org. Zainstaluj go wyłącznie z oficjalnego kanału dystrybucji projektu dla danego wydania, a następnie ogranicz dostęp do zaufanych administratorów. Przejrzyj bramki zatwierdzania przez człowieka oraz zachowanie migawek git przed włączeniem narzędzi systemu plików, bazy danych, WP-CLI, dyspozytora REST, budowania pluginów, zarządzania użytkownikami lub benchmarków w witrynie produkcyjnej.

## Korzystanie z sd-ai-agent/site-scrape

### Podstawowe użycie

Poproś Theme Builder o przeanalizowanie witryny:

```
Przeanalizuj projekt witryny mojego konkurenta pod adresem competitor.com
i zasugeruj ulepszenia projektu dla mojej witryny.
```

### Konkretna analiza

Poproś o konkretne typy analizy:

```
Wyodrębnij paletę kolorów z example.com i użyj jej jako inspiracji.
```

```
Przeanalizuj strukturę nawigacji example.com i zastosuj podobną
organizację w mojej witrynie.
```

```
Sprawdź responsywność mobilną example.com i upewnij się, że moja witryna
jest równie responsywna.
```

### Analiza porównawcza

Porównaj wiele witryn:

```
Porównaj projekty site1.com i site2.com oraz utwórz projekt,
który łączy najlepsze elementy obu.
```

## Ograniczenia narzędzi i kwestie do rozważenia

### Ograniczanie częstotliwości

- Scraping ma ograniczoną częstotliwość, aby zapobiec przeciążeniu serwera
- Wiele żądań do tej samej witryny może być ograniczanych
- Analiza dużych witryn może potrwać dłużej

### Dokładność treści

- Treści dynamiczne mogą nie zostać w pełni uchwycone
- Treści renderowane przez JavaScript mogą być niekompletne
- Dane w czasie rzeczywistym mogą nie zostać odzwierciedlone
- Niektóre treści mogą znajdować się za paywallami

### Kwestie prawne i etyczne

- Szanuj robots.txt i zasady witryny
- Nie scrapuj treści chronionych prawem autorskim w celu reprodukcji
- Używaj analizy jako inspiracji, nie do kopiowania
- Zweryfikuj, czy masz prawa do użycia wyodrębnionych treści
- Przestrzegaj warunków korzystania z analizowanych witryn

### Wpływ na wydajność

- Scraping dużych witryn może zająć czas
- Wiele jednoczesnych scrapingów może działać wolniej
- Łączność sieciowa wpływa na szybkość
- Duże zbiory danych mogą wymagać więcej przetwarzania

## Najlepsze praktyki

### Korzystanie z analizy witryny

1. **Analizuj wiele witryn** — zbieraj inspiracje z kilku źródeł
2. **Skup się na strukturze** — poznaj wzorce układu i organizacji
3. **Wyodrębniaj kolory** — używaj palet kolorów jako punktów wyjścia
4. **Badaj typografię** — identyfikuj kombinacje fontów, które Ci się podobają
5. **Przejrzyj nawigację** — zrozum organizację menu

### Etyczny scraping

1. **Szanuj robots.txt** — przestrzegaj wytycznych witryny
2. **Nie kopiuj treści** — używaj analizy wyłącznie jako inspiracji
3. **Zweryfikuj prawa** — upewnij się, że możesz używać wyodrębnionych treści
4. **Podawaj źródła** — uznawaj źródła inspiracji
5. **Przestrzegaj warunków** — stosuj się do warunków korzystania z witryny

### Maksymalizacja skuteczności narzędzia

1. **Bądź konkretny** — proś o konkretne typy analizy
2. **Podaj kontekst** — wyjaśnij cel swojej witryny
3. **Ustal oczekiwania** — opisz swoje cele projektowe
4. **Iteruj** — dopracowuj na podstawie wyników
5. **Łącz narzędzia** — używaj wielu narzędzi do kompleksowej analizy

## Rozwiązywanie problemów

### Witryny nie można zeskrapować

- Sprawdź, czy witryna jest publicznie dostępna
- Zweryfikuj, czy robots.txt pozwala na scraping
- Spróbuj użyć innej witryny
- Sprawdź połączenie internetowe
- Skontaktuj się z pomocą techniczną, jeśli problem będzie się utrzymywał

### Niekompletna analiza

- Witryna może mieć treści dynamiczne
- JavaScript może nie zostać w pełni wyrenderowany
- Duże witryny mogą przekroczyć limit czasu
- Spróbuj zamiast tego analizować konkretne strony
- Poproś o konkretne typy analizy

### Wolna wydajność

- Analiza dużych witryn trwa dłużej
- Wiele jednoczesnych scrapingów działa wolniej
- Łączność sieciowa wpływa na szybkość
- Spróbuj poza godzinami szczytu
- Najpierw analizuj mniejsze sekcje

## Powiązana dokumentacja

- [Wywiad odkrywczy](./discovery-interview.md) — zbieraj informacje projektowe
- [Kierunek projektowy](./design-direction.md) — dopracuj swój projekt
- [Menu dla hospitality](./hospitality-menus.md) — twórz strony menu
