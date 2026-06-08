---
title: Orkiestracja Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Orchestracja Site Builder v2

Site Builder Orchestration v2 (wprowadzona w Gratis AI Agent v1.4.0) to silnik napędzający wieloetapowe tworzenie stron internetowych. Kiedy poprosisz agenta o „wybudowanie strony restauracji” lub „stworzenie portfolio z blogiem”, orkiestrator rozbija ten wysoki cel na ustrukturykowany **plan**, odkrywa potrzebne plugin'i, wykonuje każdy krok sekwencyjnie, śledzi postępy i autonomicznie radzi sobie z błędami.

---

## Jak to działa

### 1. Generowanie planu

Gdy agent otrzymuje instrukcję budowania strony, wywołuje możliwość `create_site_plan`, aby wygenerować JSONowy **plan strony**. Plan opisuje:

- **Cel** — co końcowa strona powinna robić
- **Fazy** — uporządkowane grupy kroków (np. _Konfiguracja_, _Typy treści_, _Design_, _Treść_)
- **Kroki** — pojedyncze wywołania możliwości w ramach każdej fazy
- **Wymagania dotyczące pluginów** — plugin'y, które muszą być aktywne, aby niektóre kroki mogły się uruchomić
- **Plan awaryjny (Fallbacks)** — alternatywne kroki na wypadek, gdy główny krok się nie powiedzie

**Przykład planu (skrócony)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Odkrywanie pluginów

Zanim rozpocznie się wykonanie, orkiestrator skanuje `plugin_requirements` planu i sprawdza, które plugin'y są już aktywne. W przypadku brakujących pluginów:

1.  Wyszukuje w rejestrze za pomocą `recommend_plugin` najlepsze dopasowanie
2.  Prosi agenta o potwierdzenie rekomendacji
3.  Wyzwala instalację, jeśli zostanie zatwierdzone (lub jeśli automatyczna instalacja jest włączona w ustawieniach)

Błędy podczas odkrywania pluginów nie są krytyczne — orkiestrator oznacza dotknięte kroki jako `skipped` i kontynuuje resztę planu.

### 3. Wykonywanie planu

Orkiestrator wywołuje `execute_site_plan` z ID planu. Wykonanie przebiega fazy po fazie, krok po kroku:

- **Odwołania do kroków** (`__ref:` prefix) — kroki mogą odwoływać się do wyników poprzednich kroków. W powyższym przykładzie `__ref:create_menu.menu_id` jest rozwiązywane na `menu_id` zwrócony przez krok `create_menu`.
- **Kroki równoległe** — kroki w tej samej fazie, które nie mają wzajemnych zależności, są wysyłane równocześnie, gdy ustawiony jest flag `parallel`.
- **Limit czasu kroku** — każdy krok ma indywidualny limit czasu (domyślnie: ustawienie `Ability Timeout`). Krok, który przekroczy limit czasu, jest oznaczony jako `failed` i plan kontynuuje działanie.

### 4. Śledzenie postępów

Wywołaj `get_plan_progress` w dowolnym momencie, aby sprawdzić status wykonania:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Użytkownicy WP-CLI mogą monitorować postępy za pomocą:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Odzyskiwanie po błędach

Gdy krok się nie powiedzie, orkiestrator sprawdza, czy w planie zdefiniowano **plan awaryjny (fallback)**:

- **Plan awaryjny dostępny** — próbuje się go natychmiast. Jeśli się powiedzie, wykonanie trwa. Jeśli również się nie powiedzie, krok jest oznaczony jako `failed` i wykonanie kontynuuje się następnym krokiem.
- **Brak planu awaryjnego** — krok jest oznaczony jako `failed`. Kroki niekrytyczne są pomijane; kroki krytyczne (oznaczone jako `required: true`) zatrzymują bieżącą fazę i wyzwalają próbę odzyskania na poziomie fazy.

Agent raportuje wszystkie błędy w końcowym podsumowaniu planu i może zasugerować ręczne kroki naprawcze dla błędów nieodwracalnych.

---

## Możliwości Planu Strony (Site Plan Abilities)

### `create_site_plan`

Generuje ustrukturyzowany plan strony na podstawie opisu celu w języku naturalnym.

**Parametry**

| Parametr | Typ | Wymagany | Opis |
|---|---|---|---|
| `goal` | string | Tak | Opis celu strony w języku naturalnym |
| `style` | string | Nie | Preferowany styl wizualny: `minimal`, `bold`, `professional`, `playful`. Domyślnie: agent wybiera na podstawie celu |
| `plugins` | array | Nie | Slugi pluginów do uwzględnienia w planie. Orkiestrator automatycznie dodaje wymagane plugin'y. |
| `dry_run` | boolean | Nie | Jeśli `true`, zwraca JSON planu bez zapisywania ani wykonywania go. Domyślnie `false` |

**Zwraca** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan`

Rozpoczyna wykonywanie wcześniej wygenerowanego planu strony.

**Parametry**

| Parametr | Typ | Wymagany | Opis |
|---|---|---|---|
| `plan_id` | string | Tak | ID planu do wykonania |
| `auto_install_plugins` | boolean | Nie | Jeśli `true`, automatycznie instaluje wymagane plugin'y bez prośby o potwierdzenie. Domyślnie `false` |
| `max_retries` | integer | Nie | Liczba prób ponownego wykonania nieudanego kroku przed przejściem dalej. Domyślnie `1` |

**Zwraca** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress`

Zwraca aktualny status wykonania planu strony.

**Parametry**

| Parametr | Typ | Wymagany | Opis |
|---|---|---|---|
| `plan_id` | string | Tak | ID planu do sprawdzenia |

**Zwraca** obiekt postępu opisany w sekcji [Śledzenie postępów](#4-śledzenie-postępów) powyżej.

---

### `handle_plan_error`

Ręcznie rozwiązuje nieudany krok i wznowia wykonanie planu od następnego kroku. Użyj tego, gdy automatyczne odzyskiwanie nie było możliwe i chcesz interweniować.

**Parametry**

| Parametr | Typ | Wymagany | Opis |
|---|---|---|---|
| `plan_id` | string | Tak | ID planu |
| `step_id` | string | Tak | ID nieudanego kroku |
| `resolution` | string | Tak | Jeden z: `skip` (pomij i kontynuuj), `retry` (natychmiast ponów krok), lub `mark_done` (traktuj jako zakończony bez ponownego uruchamiania) |

**Zwraca** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## Porównanie v1 i v2

| Funkcja | v1 | v2 |
|---|---|---|
| Plany wielofazowe | Nie | Tak |
| Odwołania do wyników kroków (`__ref:`) | Nie | Tak |
| Odkrywanie pluginów | Ręczne | Automatyczne |
| API śledzenia postępów | Nie | Tak |
| Odzyskiwanie po błędach | Zawiódł i zatrzymał | Plan awaryjny + kontynuacja |
| Wykonywanie kroków równolegle | Nie | Tak (opcjonalnie na fazę) |
| Komendy planu WP-CLI | Nie | Tak |
| Integracja benchmarków | Nie | Tak (`q-restaurant-website`) |

---

## Komendy Planu WP-CLI

### `wp gratis-ai-agent plan create`

Generuje plan strony na podstawie opisu celu.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute`

Wykonuje wcześniej wygenerowany plan.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status`

Wyświetla bieżące postępy dla wykonującego się lub zakończonego planu.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list`

Wyświetla wszystkie plany stron (oczekujące, w trakcie i zakończone).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset`

Resetuje nieudany plan do stanu `pending`, aby można go było ponownie wykonać od początku.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
