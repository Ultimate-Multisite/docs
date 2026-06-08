---
title: Wbudowane Agenty
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Wbudowani Agenci

Gratis AI Agent v1.9.0 zawiera pięciu wbudowanych agentów. Każdy z nich jest wstępnie skonfigurowany z zestawem narzędzi, dopasowanym promptem systemowym i sugestiami startowymi, które odpowiadają typowym zadaniom w danej dziedzinie. Przełączanie się między agentami zmienia możliwości i sposób odpowiedzi asystenta — bez konieczności jakiejkolwiek konfiguracji z Twojej strony.

## Co to jest Agent?

Każdy agent to nazwany profil konfiguracyjny, który łączy:

- **Narzędzia (Tools)** — możliwości, które agent może wywołać (np. Content Writer ma dostęp do możliwości tworzenia postów; Design Studio ma dostęp do możliwości CSS i theme.json)
- **Prompt systemowy (System prompt)** — instrukcje, które określają ton, priorytety i ograniczenia działania agenta
- **Sugestie (Suggestions)** — wstępnie napisane prompty wyświetlane w interfejsie czatu, aby pomóc Ci szybko zacząć pracę

## Dostęp do Wybieracza Agentów

1. Otwórz panel **Gratis AI Agent** w bocznym pasku administracyjnym WordPress.
2. Kliknij **ikonę agenta** w lewym górnym rogu nagłówka czatu (ikona zmienia się, aby odzwierciedlić aktywnego agenta).
3. **Agent Picker** otwiera się jako nakładka w formie tabeli. Każdy agent jest wymieniony wraz ze swoją ikoną, nazwą i krótkim opisem.
4. Kliknij w wiersz agenta, aby go aktywować. Nagłówek czatu aktualizuje się natychmiast.

Możesz również przełączać się między agentami w trakcie rozmowy — prompt systemowy nowego agenta zaczyna obowiązywać od następnej wiadomości.

## Pięciu Wbudowanych Agentów

### Content Writer (Twórca Treści)

**Skupienie:** Tworzenie i edytowanie postów, stron i formularzy kontaktowych.

**Dostępne narzędzia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Co robi dobrze:**
- Tworzenie i publikowanie wpisów blogowych na podstawie zarysu lub konspektu
- Tworzenie wsadu stron docelowych dla nowej witryny
- Budowanie formularzy kontaktowych i zapytaniowych
- Ustawianie obrazów wyróżniających na postach na podstawie URL lub wyszukiwania

**Sugestie startowe:**
- *Napisz 500-wyrazowy wpis blogowy na temat korzyści z używania WordPress multisite.*
- *Utwórz strony „O nas”, „Usługi” i „Kontakt” i opublikuj je.*
- *Dodaj formularz zapytania rezerwacyjnego do strony „Kontakt”.*

---

### Site Builder (Konstruktor Stron)

**Skupienie:** Tworzenie witryny od podstaw na podstawie jednego promptu.

**Dostępne narzędzia:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Co robi dobrze:**
- Generowanie wieloetapowego planu budowy witryny dla opisanego typu biznesu
- Wykonywanie każdego etapu autonomicznie — struktura, treści, nawigacja, design
- Odzyskiwanie po błędach w trakcie planu bez konieczności ręcznej interwencji
- Instalowanie polecanych pluginów jako część budowy
- Tworzenie formularzy kontaktowych bezpośrednio z interfejsu czatu (Superdav AI Agent v1.10.0+)

**Sugestie startowe:**
- *Zbuduj portfolio fotograficzne z typem postów galeria, stroną rezerwacji i formularzem kontaktowym.*
- *Utwórz witrynę restauracji z menu online, godzinami otwarcia i formularzem zapytania o rezerwację stolika.*
- *Ustaw witrynę dla konsultanta freelancera z stronami usług, sekcją portfolio i blogiem.*
- *Dodaj formularz kontaktowy do strony „Kontakt” za pomocą Konstruktora Stron.*

---

### Design Studio (Studio Projektowania)

**Skupienie:** Wizualna personalizacja — kolory, typografia, CSS i wzory bloków.

**Dostępne narzędzia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Co robi dobrze:**
- Aplikowanie nazwanego zestawu presetów tematycznych (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Precyzyjne dostrajanie globalnej typografii i palet kolorów za pomocą theme.json
- Wstrzykiwanie niestandardowego CSS do nadpisania specyficznych dla marki elementów
- Robienie zrzutu ekranu ze strony i przeglądanie go pod kątem problemów z designem

**Sugestie startowe:**
- *Zastosuj preset warm-editorial, a następnie ustaw kolor główny na #2d6a4f.*
- *Zrób zrzut ekranu strony głównej i powiedz mi, co byś poprawił.*
- *Utwórz wielokrotnego użytku wzór bloku hero z pełnometrażowym tłem i wyśrodkowanym nagłówkiem.*

---

### Plugin Manager (Menedżer Pluginów)

**Skupienie:** Odkrywanie, instalowanie i zarządzanie pluginami WordPress.

**Dostępne narzędzia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Co robi dobrze:**
- Polecanie najlepszego pluginu dla opisanego przypadku użycia
- Instalowanie pakietów możliwości z rejestru
- Przeglądanie dostępnego katalogu możliwości według kategorii

**Sugestie startowe:**
- *Jaki jest najlepszy plugin do katalogu członkowskiego?*
- *Zainstaluj pakiet możliwości WooCommerce.*
- *Pokaż mi wszystkie dostępne pakiety możliwości e-commerce.*

---

### Support Assistant (Asystent Wsparcia)

**Skupienie:** Odpowiadanie na pytania dotyczące treści witryny, ustawień i konfiguracji WordPress.

**Dostępne narzędzia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Co robi dobrze:**
- Sprawdzanie aktualnych ustawień i opcji witryny
- Wyjaśnianie, jakie typy postów, taksonomii i menu są skonfigurowane na witrynie
- Odpowiadanie na pytania typu „co robi to ustawienie?” poprzez odczytywanie żywych wartości
- Służy jako warstwa diagnostyczna tylko do odczytu, zanim zostaną wprowadzone zmiany

**Sugestie startowe:**
- *Jakie pluginy i ustawienia są obecnie aktywne na tej witrynie?*
- *Wypisz wszystkie niestandardowe typy postów zarejestrowane na tej witrynie.*
- *Jakie menu nawigacyjne istnieją i gdzie są przypisane?*

---

## Dostosowywanie Agentów

Każdy wbudowany agent można rozszerzyć lub zastąpić za pomocą filtra `gratis_ai_agent_agents`.

### Dodawanie niestandardowego promptu systemowego do istniejącego agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Rejestrowanie nowego agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Nowy agent pojawi się w Agent Pickerze natychmiast po uruchomieniu filtra.

### Usuwanie wbudowanego agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
