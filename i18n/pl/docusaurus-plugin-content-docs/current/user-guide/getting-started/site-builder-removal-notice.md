---
title: Ogłoszenie o usunięciu trybu budowania strony
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Usunięcie trybu Site Builder {#site-builder-mode-removal-notice}

**Tryb Site Builder został usunięty w Superdav AI Agent v1.12.0.** Jeśli korzystałeś z trybu Site Builder, powinieneś przenieść się do używania **Setup Assistant agent** do tworzenia motywów i konfiguracji stron.

## Co się stało? {#what-happened}

### Site Builder Mode (Legacy) {#site-builder-mode-legacy}

Tryb Site Builder był interfejsem opartym na wizardzie, służącym do:

- Tworzenia stron na podstawie szablonów
- Konfigurowania podstawowych ustawień
- Wybierania motywu
- Ustawiania początkowej zawartości

### Co go zastąpiło? {#what-replaced-it}

**Setup Assistant agent** obsługuje teraz całą funkcjonalność Site Builder, oferując:

- Bardziej elastyczną konfigurację z przewodnictwem agenta
- Lepsze opcje dostosowania motywu
- Integrację z onboardingu Theme Builder
- Pamięć `site_brief` dla przyszłych sesji

## Jeśli używałeś Site Builder Mode {#if-you-were-using-site-builder-mode}

### Twoje strony są bezpieczne {#your-sites-are-safe}

- Istniejące strony utworzone w trybie Site Builder nadal działają
- Brak utraty danych ani zakłóceń działania strony
- Nadal możesz normalnie zarządzać swoimi stronami

### Przejście na Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Do nowego ustawiania stron lub zmian motywu użyj Setup Assistant agent:

```
"Help me set up a new site"
```

lub

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent zapewnia tę samą funkcjonalność, ale z większą elastycznością.

## Porównanie: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Funkcja | Site Builder (Usunięty) | Setup Assistant (Nowy) |
|---------|------------------------|----------------------|
| Metoda ustawienia | Formularz wizardowy | Konwersacja z agentem |
| Wybór motywu | Wstępnie zdefiniowane szablony | Generacja niestandardowa |
| Dostosowanie | Ograniczone opcje | Pełny system projektowy |
| Site brief | Nie jest przechowywany | Pamięć trwała |
| Przyszłe sesje | Powtórzenie ustawień | Wykorzystanie przechowywanego site_brief |
| Elastyczność | Sztywny przepływ pracy | Adaptacyjna konwersacja |

## Migracja do Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Dla nowych stron {#for-new-sites}

Zamiast używać trybu Site Builder:

1. Poproś: "Help me set up a new site"
2. Setup Assistant agent poprowadzi Cię przez:
   - Cel i cele strony
   - Grupę docelową
   - Tożsamość marki
   - Generację motywu
   - Początkową konfigurację

### Dla istniejących stron {#for-existing-sites}

Jeśli masz istniejącą stronę utworzoną w trybie Site Builder:

1. Możesz kontynuować jej używanie bez zmian
2. Aby zaktualizować motyw, poproś: "Redesign my site"
3. Setup Assistant agent pomoże Ci stworzyć nowy motyw
4. Dane Twojej strony pozostają niezmienione

### Dla zmian motywu {#for-theme-changes}

Zamiast wyboru motywu w Site Builder mode:

1. Poproś: "Change my theme"
2. Setup Assistant agent:
   - Zapytają o Twoje preferencje projektowe
   - Wygenerują niestandardowy motyw
   - Aktywują go na Twojej stronie

## Kluczowe różnice {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Wybierz szablon
2. Wybierz motyw
3. Skonfiguruj podstawowe ustawienia
4. Gotowe
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Opisz cel swojej strony
2. Określ grupę docelową
3. Wybierz preferencje projektowe
4. Agent generuje niestandardowy motyw
5. Agent aktywuje motyw
6. Site brief jest przechowywany na przyszłe sesje
```

## Korzyści z Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Większa elastyczność {#more-flexible}

- Opisz swoją stronę językiem naturalnym
- Otrzymuj niestandardowe rekomendacje
- Dostosowuje się do Twoich konkretnych potrzeb

### Lepsze dostosowanie {#better-customization}

- Generacja niestandardowego motywu
- Decyzje dotyczące systemu projektowego
- Trwałe tokeny projektowe

### Pamięć trwała {#persistent-memory}

- Twój site_brief jest przechowywany
- Przyszli agenci rozumieją Twoją stronę
- Nie musisz powtarzać informacji o konfiguracji

### Zintegrowany przepływ pracy {#integrated-workflow}

- Onboarding Theme Builder
- Design System Aesthetics skill
- Ability Visibility controls
- Wszystko działa razem płynnie

## Rozwiązywanie problemów {#troubleshooting}

### Nie mogę znaleźć Site Builder mode {#i-cant-find-site-builder-mode}

Tryb Site Builder został usunięty. Użyj zamiast niego Setup Assistant agent:

```
"Help me set up a new site"
```

### Chcę odtworzyć stronę z Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Możesz to odtworzyć za pomocą Setup Assistant agent:

1. Poproś: "Help me set up a new site"
2. Opisz cel i projekt swojej oryginalnej strony
3. Agent wygeneruje podobny motyw
4. Twój site_brief zostanie zapisany do przyszłego odniesienia

### Moja istniejąca strona Site Builder nie działa {#my-existing-site-builder-site-isnt-working}

Istniejące strony utworzone w trybie Site Builder nadal działają. Jeśli napotykasz problemy:

1. Sprawdź, czy Twój motyw jest nadal aktywny
2. Zweryfikuj, czy Twoje pluginy są włączone
3. Sprawdź logi błędów WordPress
4. Skontaktuj się z pomocą techniczną, jeśli problemy się utrzymują

### Czy nadal mogę używać moich starych szablonów Site Builder? {#can-i-still-use-my-old-site-builder-templates}

Szablony Site Builder nie są już dostępne. Jednak:

- Twoje istniejące strony nadal działają
- Możesz odtworzyć podobne strony za pomocą Setup Assistant agent
- Setup Assistant agent zapewnia więcej opcji dostosowania

## Następne kroki {#next-steps}

1. **Dla nowych stron**: Użyj Setup Assistant agent
2. **Dla istniejących stron**: Kontynuuj ich używanie bez zmian
3. **Dla zmian motywu**: Poproś o pomoc Setup Assistant agent
4. **Dla dopracowania projektu**: Użyj Design System Aesthetics skill

## Powiązane tematy {#related-topics}

- **Theme Builder Onboarding**: Przewodnik po ustawianiu niestandardowych motywów
- **Setup Assistant Agent**: Ustawianie stron z przewodnictwem agenta
- **Site Specification Skill**: Określanie celów i grupy docelowej strony
- **Design System Aesthetics Skill**: Dopracowywanie wizualnej tożsamości strony
