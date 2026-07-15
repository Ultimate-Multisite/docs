---
title: Dziennik zmian
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Dziennik zmian

## 1.18.0 — Wydano 2026-06-29 {#1180--released-on-2026-06-29}

### Nowe {#new}

- **Narzędzia Google Calendar** — odczytują skonfigurowane kalendarze i wydarzenia na potrzeby automatyzacji uwzględniających harmonogram
- **Mapowanie kontaktów i pomocniki uczestników** — dopasowują uczestników kalendarza do użytkowników witryny i kontaktów
- **Bramki zatwierdzania przez człowieka i rekordy przypomnień** — wstrzymują automatyzacje do przeglądu i zapobiegają duplikowaniu powiadomień
- **Dostawca SMS TextBee** — wysyła skonfigurowane powiadomienia SMS przez TextBee
- **Zaawansowany pakiet towarzyszący** — dodaje narzędzia zaufanego dewelopera do systemu plików, bazy danych, WP-CLI, dyspozytora REST, kreatora wtyczek, migawek git, zarządzania użytkownikami i benchmarków, dystrybuowane oddzielnie od wersji WordPress.org

### Ulepszone {#improved}

- **Konfiguracja zarządzanej usługi Superdav** — dodaje punkty końcowe hostowanej usługi i automatyczne provisionowanie połączeń dla obsługiwanych witryn
- **Pakietowanie wydań** — buduje osobne paczki ZIP rdzenia i Advanced, publikuje obie na GitHub oraz wysyła do WordPress.org tylko paczkę rdzenia

### Naprawione {#fixed}

- **Niezawodność żądań AI** — ulepszono wybór modelu, limity czasu żądań, domyślny model konfiguracji, obsługę tekstu rozumowania oraz wskazówki ponawiania dla nieprawidłowych wywołań narzędzi
- **Wzmocnienie kalendarza i przypomnień** — wzmocniono tokeny Google Calendar i deduplikację przypomnień
- **Wznawianie onboardingu i zatwierdzeń** — naprawiono uruchamianie onboardingu we frontendzie oraz wznawianie potwierdzonych zdolności
- **Problemy z przeglądem pakietowania WordPress.org** — uwzględniono opinie z przeglądu pakietowania dla wydania rdzenia

## 1.16.0 — Wydano 2026-05-20 {#1160--released-on-2026-05-20}

### Nowe {#new-1}

- **Zdolność Generate Logo SVG** — Theme Builder może teraz generować i osadzać niestandardowe logo SVG z sanityzacją bezpieczną dla przestrzeni nazw
- **Przesyłanie zdjęć w wywiadzie rozpoznawczym** — wywiad rozpoznawczy Theme Builder zawiera teraz krok przesyłania zdjęcia, aby zapewnić bogatszy kontekst projektowy
- **Zdolność Validate Palette Contrast** — sprawdza pary kolorów pod kątem zgodności z WCAG przed zastosowaniem do motywu
- **Menu dla branży hospitality** — Theme Builder może teraz generować uporządkowane strony menu jedzenia i napojów dla firm z branży hospitality
- **Renderowanie podglądu na komputerze i urządzeniach mobilnych** — podglądaj swój projekt na komputerze i urządzeniach mobilnych podczas wyboru kierunku projektowego
- **Parametr etykiety nawigacji** — zdolność Create Menu obsługuje teraz osobny `navigation_label`, niezależny od tytułu strony
- **Dostępność narzędzi poziomu 1** — sd-ai-agent/site-scrape jest teraz narzędziem poziomu 1, domyślnie dostępnym w Theme Builder

### Naprawione {#fixed-1}

- **Pamięć podręczna AI Client** — jest teraz oparta na transientach dla trwałości między żądaniami, zapobiegając utracie danych podczas długotrwałych zadań agenta
- **Linki akcji w wierszu wtyczki** — poprawiono i przemianowano dla większej czytelności

## 1.10.0 — Wydano 2026-05-05 {#1100--released-on-2026-05-05}

### Nowe {#new-2}

- **Wyszukiwanie internetowe Tavily** — dodano Tavily jako dostawcę wyszukiwania, aby uzyskać bogatsze wyniki wyszukiwania internetowego obok Brave Search
- **Wbudowane umiejętności świadome motywu** — przewodniki umiejętności dla Block Themes, Classic Themes, Kadence Blocks i Kadence Theme są teraz dostarczane z wtyczką
- **Zdolność formularza kontaktowego kreatora witryn** — dodaj formularz kontaktowy do dowolnej strony bezpośrednio z interfejsu czatu

### Ulepszone {#improved-1}

- **Zrefaktoryzowano integrację WooCommerce** — teraz używa natywnych API WooCommerce dla większej niezawodności i kompatybilności
- **Lista dostawców odświeża się automatycznie** — gdy dowolna wtyczka zostanie włączona lub wyłączona

### Naprawione {#fixed-2}

- **Zdolność navigate-to** — naprawiono nieskończoną pętlę przeładowań na niektórych stronach administracyjnych
- **Zdolność list-posts** — teraz poprawnie rozwiązuje nazwy kategorii i tagów na slugi
- **Polecenia WP-CLI** — przywrócono brakujące aliasy przestrzeni nazw po poprzedniej refaktoryzacji
- **Automatyzacja zdarzeń** — poprawnie obsługuje witryny, w których tabele automatyzacji nie zostały jeszcze utworzone
- **Zdolność memory-save** — teraz używa poprawnego prefiksu przestrzeni nazw w kreatorze instrukcji systemowych
- **Skalarne wyniki narzędzi** — teraz są poprawnie opakowywane przed zwróceniem do AI
- **Statystyki użycia** — teraz poprawnie obsługują starszy format klucza zdolności podczas aktualizacji ze starszych wersji
