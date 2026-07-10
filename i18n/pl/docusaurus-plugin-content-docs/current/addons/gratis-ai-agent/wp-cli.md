---
title: WP-CLI Odwołanie
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Odniesienie do WP-CLI {#wp-cli-reference}

Plugin Gratis AI Agent udostępnia rodzinę poleceń `wp gratis-ai-agent` do testowania agenta, zarządzania jego umiejętnościami (abilities) oraz sprawdzania statusu agenta z poziomu linii komend. Wszystkie polecenia wymagają WP-CLI 2.0 lub nowszej wersji.

## Instalacja {#installation}

Polecenia WP-CLI są rejestrowane automatycznie, gdy plugin jest aktywny. Sprawdź to za pomocą:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Uruchamia zestaw testów (benchmark) możliwości agenta — zbiór złożonych, wieloetapowych poleceń, które sprawdzają pełne spektrum jego umiejętności. Użyj tego do oceny wydajności modelu, porównywania dostawców AI lub walidacji pakietów umiejętności przed wdrożeniem na środowisko produkcyjne.

### Synopsis {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Opcje {#options}

| Opcja | Opis |
|---|---|
| `--question=<id>` | Uruchamia pojedyncze pytanie testowe po ID, zamiast całego zestawu |
| `--provider=<provider>` | Nadpisuje skonfigurowanego dostawcę AI dla bieżącego uruchomienia (np. `anthropic`, `openai`) |
| `--model=<model>` | Nadpisuje skonfigurowany model dla bieżącego uruchomienia (np. `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Format wyjściowy: `table` (domyślny), `json`, `csv` |
| `--save` | Zapisuje wyniki testów do bazy danych w celu porównania historycznego |

### Przykłady {#examples}

Uruchom pełny zestaw testów przy użyciu aktualnie skonfigurowanego dostawcy i modelu:

```bash
wp gratis-ai-agent benchmark
```

Uruchom pojedyncze pytanie (`q-restaurant-website`) i wyeksportuj wynik jako JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Uruchom test dla określonego modelu i zapisz wyniki:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Wyniki {#output}

Testy zwracają jeden wiersz na każde pytanie z następującymi kolumnami:

| Kolumna | Opis |
|---|---|
| `ID` | Identyfikator pytania |
| `Description` | Krótkie podsumowanie scenariusza testowego |
| `Score` | Wynik (pomyś/niepowodzenie lub wynik numeryczny, 0–100) |
| `Abilities Used` | Lista umiejętności wywołanych, oddzielona przecinkami |
| `Tokens` | Całkowita liczba zużytych tokenów |
| `Duration` | Czas trwania w sekundach |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Pytania testowe {#benchmark-questions}

Domyślny zestaw zawiera:

| ID | Scenariusz |
|---|---|
| `q-portfolio-site` | Utworzenie CPT Portfolio z taksonomią Kategoria Projektu i rejestracją wzorca bloku |
| `q-restaurant-website` | Budowa pełnej witryny restauracji z CPT menu, formularzem rezerwacji i nawigacją |
| `q-dark-mode-theme` | Zastosowanie gotowego presetu ciemnego motywu i wstrzyknięcie kolorów marki |
| `q-nav-builder` | Utworzenie głównego menu z czterema elementami i zagnieżdżonym rozwijanym menu |
| `q-options-roundtrip` | Odczytanie, zmodyfikowanie i przywrócenie zestawu opcji WordPress |
| `q-ability-install` | Wykrycie i zainstalowanie najbardziej odpowiedniego pakietu umiejętności dla opisanego przypadku użycia |

Dodatkowe pytania można rejestrować za pomocą filtra `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Zarządza zainstalowanymi umiejętnościami i pakietami umiejętności.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Wyświetla wszystkie zarejestrowane umiejętności, ich źródło (core lub pakiet) oraz aktualny status.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Opcje**

| Opcja | Opis |
|---|---|
| `--format=<format>` | Format wyjściowy: `table` (domyślny), `json`, `csv` |

**Przykład wyjścia**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Pobiera i aktywuje pakiet umiejętności z rejestru.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Argumenty**

| Argument | Opis |
|---|---|
| `<slug>` | Slug pluginu pakietu umiejętności, np. `gratis-ai-agent-woocommerce` |

**Przykład**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Wyłącza konkretną umiejętność bez usuwania całego pakietu. Przydatne do ograniczenia zakresu działania agenta na danym serwisie.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Przykład**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Ponownie aktywuje wcześniej wyłączoną umiejętność.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Wyświetla bieżącą konfigurację agenta oraz status połączenia.

```bash
wp gratis-ai-agent status
```

**Przykład wyjścia**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Wyświetla ostatnią aktywność agenta z logów debugowania.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Opcje**

| Opcja | Opis |
|---|---|
| `--last=<n>` | Wyświetla ostatnie N wpisów logu. Domyślnie `50` |
| `--level=<level>` | Filtruje po poziomie: `info`, `warning`, `error` |
| `--ability=<ability>` | Filtruje po nazwie umiejętności |

**Przykład**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Resetuje stan agenta: czyści wstrzyknięty CSS, usuwa CPT i taksonomie zarejestrowane przez agenta, resetuje globalne style i opróżnia cache opcji agenta. Nie usuwa pluginu ani jego ustawień.

```bash
wp gratis-ai-agent reset [--yes]
```

Dodaj `--yes`, aby pominąć prośbę o potwierdzenie.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Kody wyjścia {#exit-codes}

Wszystkie polecenia kończą się kodem `0` w przypadku sukcesu. Kody wyjścia niezerowe:

| Kod | Znaczenie |
|---|---|
| `1` | Ogólny błąd (patrz komunikat o błędzie) |
| `2` | Błąd połączenia z dostawcą |
| `3` | Umiejętność nieznaleziona |
| `4` | Pytanie testowe nieznalezione |
