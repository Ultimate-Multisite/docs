---
title: Przepływ wprowadzający do Theme Buildera
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Proces Wprowadzający do Theme Buildera {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 wprowadza prowadzony **proces wprowadzający do Theme Buildera**, który pomaga stworzyć niestandardowy blokowy motyw (block theme) podczas początkowej konfiguracji. Zastępuje on stary tryb Site Builder bardziej elastycznym podejściem wspomaganym przez agenta.

## Co to jest Proces Wprowadzający do Theme Buildera? {#what-is-the-theme-builder-onboarding-flow}

Proces wprowadzający do Theme Buildera to interaktywny kreator konfiguracji, który:

- Poprowadzi Cię przez decyzje projektowe (kolory, typografia, układ)
- Uchwyci preferencje wizualne Twojej witryny
- Wygeneruje niestandardowy blokowy motyw dostosowany do Twoich potrzeb
- Aktywuje motyw automatycznie po zakończeniu

Proces jest napędzany przez **Setup Assistant agenta**, który zadaje pytania wyjaśniające i stopniowo buduje Twój motyw.

## Rozpoczęcie Procesu Wprowadzającego do Theme Buildera {#starting-the-theme-builder-onboarding}

### Konfiguracja przy pierwszym uruchomieniu {#first-run-setup}

Gdy po raz pierwszy uruchomisz Superdav AI Agent na nowej instalacji WordPress, zobaczysz:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Wybierz **"Build a custom theme"**, aby wejść do procesu wprowadzającego do Theme Buildera.

### Ręczna aktywacja {#manual-activation}

Możesz również rozpocząć proces wprowadzający do Theme Buildera w dowolnym momencie, żądając:

```
"Start the Theme Builder onboarding"
```

lub

```
"Help me create a custom theme"
```

## Kroki Wprowadzające {#the-onboarding-steps}

### Krok 1: Wybór trybu {#step-1-mode-selection}

Setup Assistant agent pyta o Twoje preferencje:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Tryb Guided** jest zalecany dla większości użytkowników; agent przedstawia rekomendacje projektowe na podstawie Twojej branży i celów.

### Krok 2: Specyfikacja witryny {#step-2-site-specification}

Zostaniesz poproszony o informacje o swojej witrynie:

- **Cel witryny**: E-commerce, blog, portfolio, SaaS itp.
- **Grupa docelowa**: Kto są Twoi odwiedzający?
- **Kolory marki**: Kolory podstawowe i dodatkowe (lub "Nie jestem pewien")
- **Ton**: Profesjonalny, kreatywny, zabawny, minimalistyczny itp.

Te informacje są zapisywane w pamięci **site_brief**, do której agentzy odwołują się w przyszłych sesjach.

### Krok 3: Decyzje dotyczące systemu projektowego {#step-3-design-system-decisions}

Agent poprowadzi Cię przez wybór tokenów projektowych:

- **Typografia**: Rodzina czcionek (serif, sans-serif, monospace) i skala rozmiarów
- **Paleta kolorów**: Kolory podstawowe, dodatkowe, akcentowe i neutralne
- **Odstępy**: Układy zwarte, normalne lub przestronne
- **Animacja**: Animacje i przejścia (jeśli są pożądane)

### Krok 4: Generowanie motywu {#step-4-theme-generation}

Setup Assistant agent tworzy szkielet Twojego niestandardowego blokowego motywu, zawierający:

- `theme.json` z wszystkimi Twoimi tokenami projektowymi
- Szablony bloków dla popularnych układów (strona główna, blog, kontakt)
- Niestandardowe style bloków pasujące do Twojego systemu projektowego
- Metadane motywu i deklaracje wsparcia WordPress

### Krok 5: Aktywacja i weryfikacja {#step-5-activation-and-verification}

Motyw jest automatycznie aktywowany, a Ty zobaczysz:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Następnie możesz odwiedzić swoją witrynę, aby zweryfikować, czy motyw wyświetla się poprawnie.

## Specyfikacja witryny i pamięć site_brief {#site-specification-and-sitebrief-memory}

Podczas procesu wprowadzającego agent przechwytuje specyfikację Twojej witryny w kategorii pamięci **site_brief**. Obejmuje to:

- Cel i cele witryny
- Grupa docelowa
- Kolory i ton marki
- Preferencje projektowe
- Struktura treści

### Dlaczego site_brief jest ważny {#why-sitebrief-matters}

W przyszłych sesjach agentzy odwołują się do Twojego site_brief, aby:

- Utrzymać spójność projektu przy zmianach
- Sugerować funkcje zgodne z celem Twojej witryny
- Dostarczać rekomendacje uwzględniające kontekst
- Unikać powtarzania pytań konfiguracyjnych

### Podgląd site_brief {#viewing-your-sitebrief}

Możesz poprosić agenta:

```
"Show me my site brief"
```

lub

```
"What do you know about my site?"
```

Agent wyświetli Twoją zapisaną specyfikację witryny.

## Dostosowywanie po zakończeniu procesu wprowadzającego {#customizing-after-onboarding}

Po zakończeniu procesu wprowadzającego do Theme Buildera możesz:

### Używać umiejętności Design System Aesthetics {#use-the-design-system-aesthetics-skill}

Poprosić o ulepszenia projektowe:

```
"Refine the typography to be more modern"
```

lub

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** poprowadzi Cię przez celowane aktualizacje projektowe.

### Edytowanie theme.json bezpośrednio {#edit-themejson-directly}

Dla zaawansowanych użytkowników edytuj plik `/wp-content/themes/[theme-name]/theme.json`, aby dostosować:

- Tokeny kolorów
- Skale typograficzne
- Wartości odstępów
- Definicje ramek i cieni

### Tworzenie niestandardowych szablonów bloków {#create-custom-block-templates}

Użyj edytora bloków WordPress, aby stworzyć niestandardowe szablony dla:

- Układów strony głównej
- Stron wpisów blogowych
- Stron produktów
- Formularzy kontaktowych

## Porównanie: Stary vs. Nowy proces wprowadzający {#comparison-old-vs-new-onboarding}

| Funkcja | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|---------------------|
| Metoda konfiguracji | Formularz oparty na wizardzie | Konwersacja prowadzona przez agenta |
| Generowanie motywu | Ograniczone szablony | Niestandardowy szkielet |
| Tokeny projektowe | Ręczne wprowadzanie | Prowadzone decyzje |
| Elastyczność | Ustalowane opcje | Możliwość dostosowania |
| Aktualizacje w przyszłości | Nie są odwoływane | Zapisywane w site_brief |

## Rozwiązywanie problemów {#troubleshooting}

**Proces wprowadzający nie został ukończony**
- Uruchom ponownie proces: "Start the Theme Builder onboarding"
- Sprawdź, czy Twoja instalacja WordPress jest aktualna
- Upewnij się, że Setup Assistant agent jest włączony

**Mój site_brief nie jest używany**
- Potwierdź, że agent ma dostęp do pamięci
- Poproś agenta o "recall my site brief"
- Sprawdź, czy pamięć jest włączona w ustawieniach

**Wygenerowany motyw nie odpowiada moim preferencjom**
- Użyj Design System Aesthetics skill, aby go ulepszyć
- Poproś agenta o "regenerate the theme with [specific changes]"
- Edytuj theme.json bezpośrednio, aby uzyskać precyzyjną kontrolę

## Następne kroki {#next-steps}

Po zakończeniu procesu wprowadzającego do Theme Buildera:

1. **Zweryfikuj swoją witrynę**: Odwiedź swoją witrynę, aby zobaczyć nowy motyw
2. **Ulepsz projekt**: Użyj Design System Aesthetics skill do dokonania poprawek
3. **Dodaj treści**: Zacznij budować treści swojej witryny
4. **Odkryj możliwości**: Dowiedz się o innych możliwościach agenta, takich jak scaffold-block-theme i activate-theme
