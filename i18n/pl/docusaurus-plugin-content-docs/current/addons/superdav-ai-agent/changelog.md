---
title: Dziennik zmian
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Zmiany w wersji (Changelog)

## 1.16.0 — Wydano 2026-05-20

### Nowości

- **Generowanie SVG logo** — Theme Builder może teraz generować i osadzać niestandardowe SVG logo z bezpieczną sanitacją (namespace-safe sanitisation).
- **Przesyłanie zdjęć w wywiadzie odkrywczym** — Wywiad odkrywczy w Theme Builder zawiera teraz krok przesyłania zdjęcia, co pozwala na bogatszy kontekst projektowy.
- **Walidacja kontrastu palety** — Sprawdzanie par kolorów pod kątem zgodności z WCAG przed zastosowaniem ich do motywu.
- **Menu dla branży hotelarskiej** — Theme Builder może teraz generować ustrukturyzowane strony z menu potraw i napojów dla biznesów hotelarskich.
- **Wyświetlanie wersji na desktopie i mobile** — Możesz podglądać swój projekt na urządzeniach stacjonarnych i mobilnych podczas wyboru kierunku projektowego.
- **Parametr etykiety nawigacyjnej** — Funkcja Tworzenie Menu (Create Menu) obsługuje teraz odrębną etykietę nawigacyjną (`navigation_label`), niezależną od tytułu strony.
- **Dostępność narzędzia Tier 1** — sd-ai-agent/site-scrape jest teraz narzędziem Tier 1, dostępnym domyślnie w Theme Builder.

### Poprawione

- **Cache klienta AI** — Teraz oparty na transientach, co zapewnia trwałość danych między żądaniami i zapobiega utracie danych podczas długotrwałych zadań agenta.
- **Linki akcji w wierszach pluginów** — Poprawiono i zmieniono nazwy dla większej przejrzystości.

## 1.10.0 — Wydano 2026-05-05

### Nowości

- **Wyszukiwanie internetowe Tavily** — Dodano Tavily jako dostawcę wyszukiwania, co zapewnia bogatsze wyniki wyszukiwania w Internecie obok Brave Search.
- **Wbudowane umiejętności świadome kontekstem motywu** — Block Themes, Classic Themes, Kadence Blocks i przewodniki umiejętności dla motywu Kadence są teraz dołączane do pluginu.
- **Funkcja formularza kontaktowego w site builderze** — Dodaj formularz kontaktowy na dowolną stronę bezpośrednio z interfejsu czatu.

### Ulepszone

- **Refaktoryzacja integracji WooCommerce** — Teraz używa natywnych API WooCommerce, co zapewnia lepszą niezawodność i kompatybilność.
- **Automatyczne odświeżanie listy dostawców** — Gdy aktywujesz lub dezaktywujesz dowolny plugin.

### Poprawione

- **Funkcja navigate-to** — Naprawiono nieskończoną pętlę przeładowania na niektórych stronach administracyjnych.
- **Funkcja list-posts** — Teraz poprawnie rozwiązuje nazwy kategorii i tagów na slugi.
- **Komendy WP-CLI** — Przywrócono brakujące aliasy namespace po poprzednim refaktoryzowaniu.
- **Automatyzacja zdarzeń** — Prawidłowo obsługuje strony, na których tabele automatyzacji nie zostały jeszcze utworzone.
- **Funkcja memory-save** — Teraz używa poprawnego prefiksu namespace w konstruktorze instrukcji systemowych.
- **Wyniki narzędzia Scalar** — Teraz poprawnie opakowywane przed zwróceniem do AI.
- **Statystyki użycia** — Teraz poprawnie obsługują stary format klucza funkcji (ability) podczas aktualizacji ze starszych wersji.
