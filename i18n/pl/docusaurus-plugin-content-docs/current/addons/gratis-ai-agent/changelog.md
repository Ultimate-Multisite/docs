---
title: Dziennik zmian
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Changelog {#changelog}

## 1.9.0 — Wydano 2026-04-28 {#190--released-on-2026-04-28}

### Nowości {#new}

- **Możliwość `create_contact_form`** — tworzy formularz kontaktowy przy użyciu aktywnego pluginu do formularzy (Contact Form 7, WPForms, Fluent Forms lub Gravity Forms) i zwraca shortcode gotowy do wklejenia w dowolny post lub stronę.
- **Możliwość `set_featured_image`** — przypisuje obraz wyróżniający do posta lub strony na podstawie istniejącego ID załącznika z Biblioteki Mediów lub zdalnego URL; automatycznie importuje obraz, gdy podany jest URL.
- **Możliwość `batch_create_posts`** — tworzy wiele postów w jednym wywołaniu możliwości. Obsługuje te same parametry co `create_post`, raportuje sukces/porażkę dla każdego posta i ma opcjonalny tryb `stop_on_error`.
- **Parametr `page_template`** — dodany do `create_post` i `update_post`. Przypisuje plik szablonu strony PHP (np. `page-full-width.php`) w momencie tworzenia lub aktualizacji. Aby przywrócić domyślny szablon motywu w `update_post`, przekazaj pusty ciąg znaków.
- **Możliwości zrzutów ekranu po stronie klienta** — `capture_screenshot`, `compare_screenshots` i `review_page_design`. Pozwalają na wykonanie pełnych lub widokowych zrzutów ekranu żywych stron za pomocą serwerowego headless browsera, porównanie dwóch zrzutów ekranu oraz otrzymanie przeglądu projektu wygenerowanego przez AI, obejmującego układ, typografię, kolor i dostępność.
- **Pięciu wbudowanych agentów** — Content Writer, Site Builder, Design Studio, Plugin Manager i Support Assistant. Każdy agent ma dedykowany zestaw narzędzi, dostosowany systemowy prompt i sugestie startowe. Można przełączać między nimi za pomocą nowego **Agent Picker** w nagłówku czatu. Więcej informacji znajdziesz w [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Flagi funkcji (Feature flags)** — nowa zakładka **Ustawienia → Flagi funkcji** z przełącznikami kontroli dostępu (ograniczony do administratorów, ograniczony do administratorów sieci, dostęp dla subskrybentów, wyłączony dla nieczłonków) oraz opcjami brandingowymi (ukryj atrybucję stopki, niestandardowa nazwa agenta, ukryj agent picker, użyj ikony strony jako awatara czatu). Sprawdź [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Przywracanie ostatniej sesji** — panel czatu automatycznie przeładowuje najnowszą konwersację po załadowaniu strony i po otwarciu widgetu, dzięki czemu kontekst nigdy nie jest tracony podczas nawigacji po stronie.
- **Linki akcji pluginów** — szybkie linki do Ustawień i Rejestru Możliwości pojawiają się teraz na ekranie **Plugins → Installed Plugins** w WordPress, poniżej opisu pluginu.

### Ulepszenia {#improved}

- **Ponawianie źródła obrazu** — agent teraz próbuje wszystkie skonfigurowane darmowe źródła obrazów, zanim przejdzie do generowania obrazu przez AI w przypadku niepowodzenia pobrania.
- **Panel informacji o modelu** — zawsze widoczny w nagłówku czatu; nie jest już ukrywany po pierwszej wiadomości.
- **Zachowanie automatycznego przewijania** — automatyczne przewijanie wstrzymuje się, gdy użytkownik przewija w górę, aby czytać; pojawia się i automatycznie znika pływający przycisk **Scroll to bottom**, gdy użytkownik dotrze do najnowszej wiadomości.
- **Interfejs Agent Picker** — przeprojektowany jako nakładka w formie tabeli z ikonami dla każdego agenta, co ułatwia szybką identyfikację i przełączanie agentów.
- **Lazy-loaded JS chunks** — początkowy bundle JavaScript widgetu czatu został podzielony na części ładowane leniwie, co zmniejszyło początkowy rozmiar bundle o 75–90%.
- **Przeprojektowany widget czatu** — ujednolicony ikoną AI zastąpił poprzedni niestandardowy awatar; jest spójny z systemem wbudowanych agentów.
- **Linkowanie URL** — URL-e pojawiające się w systemowych wiadomościach i bańkach z komunikatami o błędach są teraz renderowane jako klikalne linki.

### Poprawki {#fixed}

- **Odkrywalność możliwości** — poprawiono opisy, odniesienia do systemowych promptów i wyrównanie przestrzeni nazw, dzięki czemu wszystkie możliwości pojawiają się w liście narzędzi agenta niezawodnie.
- **Cache dostawców** — dostawcy są teraz cachowani na poziomie całej witryny za pomocą licznika wersji, zapobiegając problemom ze starymi danymi dostawców w sieciach multisite.
- **`ability_invalid_output`** — rozwiązano w 12 obsługaśnikach możliwości; wszystkie zwracają poprawnie ustrukturyzowane odpowiedzi JSON.
- **Potok `pending_client_tool_calls`** — podłączony end-to-end, dzięki czemu wywołania narzędzi po stronie klienta są prawidłowo finalizowane i zwracają wyniki do modelu.
- **Szeregowiec historii** — zmiany, których nie można cofnąć, są wyłączane ze spisu zmian do cofnięcia; link **View full history** działa teraz poprawnie.
- **System zmian/cofania** — naprawiono pięć oddzielnych błędów i ujednolicono je w nowym interfejsie administracyjnym.
- **Toast ustawień zapisu** — powiadomienie typu snackbar pojawia się teraz niezawodnie po kliknięciu **Save Settings**.
- **Menu kontekstowe kosza** — dodano opcję **Delete Permanently**, dzięki czemu elementy można usunąć trwale, bez pozostawiania ich w widoku kosza.
- **Edytowanie i ponowne wysłanie** — kliknięcie ikony edycji wprowadza tryb edycji tylko dla klikniętej wiadomości, a nie dla wszystkich wiadomości w wątku.
- **Wysokość układu czatu** — panel czatu dostosowuje swoją wysokość, gdy zawartość wstrzyknięta przez plugin (powiadomienia admina, banery) pojawia się nad stroną, zapobiegając przesunięciu obszaru wprowadzania poza ekran.

---

## 1.4.0 — Wydano 2026-04-09 {#140--released-on-2026-04-09}

### Nowości {#new-1}

- **Polecenie benchmarkowe WP-CLI** (`wp gratis-ai-agent benchmark`) — uruchamia zestaw testów Agent Capabilities v1 z linii poleceń, przeznaczony do potoków CI i przepływów oceny modelu. Obsługuje uruchamianie dla pojedynczych pytań, nadpisywanie dostawców/modeli oraz wyjście w formacie JSON/CSV.
- **Zestaw benchmarków Agent Capabilities v1** — ustrukturyzowany zestaw złożonych, wieloetapowych promptów, które testują pełną powierzchnię możliwości, z punktacją oraz raportowaniem tokenów/czasu trwania.
- **Możliwości dla niestandardowych typów postów** — `register_post_type`, `list_post_types`, `delete_post_type`. Rejestracje są zachowywane między restartami za pomocą tabeli opcji.
- **Możliwości dla niestandardowych taksonomii** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Obsługuje taksonomie hierarchiczne i płaskie z opcjonalnymi slugami przepisania.
- **Możliwości dla systemu projektowego (Design System)** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Obejmuje pięć starannie wybranych presetów: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Możliwości dla globalnych stylów** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Odczytuje i zapisuje wartości `theme.json` za pośrednictwem API Global Styles WordPress.
- **Możliwość zarządzania menu nawigacyjnym** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Obsługuje menu zagnieżdżone i przypisanie lokalizacji motywu.
- **Możliwość zarządzania opcjami** — `get_option`, `set_option`, `delete_option`, `list_options`. Obejmuje wbudowaną czarną listę bezpieczeństwa chroniącą krytyczne opcje WordPress przed modyfikacją.
- **Rejestr instalowalnych możliwości** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Odkrywaj i aktywuj pakiety możliwości rozproszone jako pluginów WordPress.
- **Orkiestracja Site Builder v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Wielofazowe plany budowy witryny z odkrywaniem pluginów, odniesieniami do wyników kroków, śledzeniem postępów i autonomicznym odzyskiwaniem po błędach.
- **Pytanie benchmarkowe dla witryny restauracji** (`q-restaurant-website`) — test end-to-end obejmujący rejestrację CPT, system projektowy, nawigację i odkrywanie pluginów.
- **Plugiiny łączników dostawców AI** dodane do blueprintów WordPress Playground, aby przyspieszyć lokalne ustawienie środowiska deweloperskiego.

### Ulepszenia {#improved-1}

- README zaktualizowany o dokumentację i instrukcje ustawienia łączników dostawców AI.

### Poprawki {#fixed-1}

- Naprawiono 25 błędów testów PHPUnit na gałęzi `main`.
- Poprawiony format URL wydania GitHub w `blueprint.json`.
- Ponumerowanie ID zadań, aby uniknąć kolizji ze starymi ID.

---

## 1.3.x {#13x}

_Starsze uwagi wydania są utrzymywane w repozytorium pluginu._
