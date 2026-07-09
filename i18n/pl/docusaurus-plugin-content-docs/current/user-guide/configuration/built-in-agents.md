---
title: Wbudowani agenci
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Wbudowani agenci

Gratis AI Agent v1.9.0 zawiera pięciu wbudowanych agentów, z których każdy jest wstępnie skonfigurowany z ukierunkowanym zestawem narzędzi, dopasowanym promptem systemowym oraz sugestiami startowymi odpowiadającymi typowym zadaniom w danym obszarze. Przełączanie między agentami zmienia to, co asystent może zrobić i jak odpowiada — bez żadnej konfiguracji z Twojej strony. Superdav AI Agent v1.18.0 może dodać do tych przepływów pracy narzędzia uwzględniające harmonogram, rekordy przypomnień, bramki zatwierdzania oraz powiadomienia SMS, gdy powiązane integracje są skonfigurowane.

## Czym jest agent?

Każdy agent to nazwany profil konfiguracji, który łączy:

- **Narzędzia** — możliwości, które agent może wywoływać (np. Content Writer ma dostęp do możliwości tworzenia wpisów; Design Studio ma dostęp do możliwości CSS i theme.json)
- **Prompt systemowy** — instrukcje określające ton, priorytety i ograniczenia agenta
- **Sugestie** — gotowe prompty wyświetlane w interfejsie czatu, aby pomóc Ci szybko zacząć

## Dostęp do selektora agentów

1. Otwórz panel **Gratis AI Agent** na pasku bocznym administratora WordPress.
2. Kliknij **ikonę agenta** w lewym górnym rogu nagłówka czatu (ikona zmienia się, aby odzwierciedlać aktywnego agenta).
3. **Selektor agentów** otwiera się jako nakładka tabeli formularza. Każdy agent jest wymieniony z ikoną, nazwą i jednozdaniowym opisem.
4. Kliknij wiersz agenta, aby go aktywować. Nagłówek czatu aktualizuje się natychmiast.

Możesz też przełączać agentów w trakcie rozmowy — prompt systemowy nowego agenta zaczyna obowiązywać od następnej wiadomości.

## Pięciu wbudowanych agentów

### Content Writer

**Cel:** Tworzenie i edytowanie wpisów, stron oraz formularzy kontaktowych.

**Dostępne narzędzia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Przy włączonych integracjach Superdav AI Agent v1.18.0, skonfigurowany kontekst kalendarza, bramki zatwierdzania, przypomnienia i narzędzia powiadomień SMS mogą być również dostępne dla zatwierdzonych przepływów pracy.

**W czym sprawdza się dobrze:**
- Przygotowywanie szkiców i publikowanie wpisów blogowych na podstawie briefu lub konspektu
- Tworzenie pakietów stron docelowych dla nowej witryny
- Budowanie formularzy kontaktowych i zapytań
- Ustawianie obrazów wyróżniających we wpisach z URL lub wyszukiwania
- Tworzenie szkiców wiadomości po wydarzeniu na podstawie skonfigurowanego kontekstu Google Calendar, a następnie wstrzymanie się do zatwierdzenia przed wysłaniem powiadomień

**Sugestie startowe:**
- *Napisz wpis blogowy na 500 słów o korzyściach z WordPress multisite.*
- *Utwórz strony O nas, Usługi i Kontakt oraz je opublikuj.*
- *Dodaj formularz zapytania o rezerwację do strony Kontakt.*
- *Przygotuj szkic przypomnienia dla uczestników jutrzejszego skonfigurowanego wydarzenia w kalendarzu i poczekaj na zatwierdzenie przed wysłaniem.*

---

### Site Builder

**Cel:** Kompleksowe tworzenie witryny z jednego promptu.

**Dostępne narzędzia:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Z Superdav AI Agent v1.18.0 skonfigurowane narzędzia usług zarządzanych, zatwierdzania, przypomnień, kalendarza i SMS mogą być dostępne tam, gdzie administratorzy je włączą.

**W czym sprawdza się dobrze:**
- Generowanie wieloetapowego planu budowy witryny dla opisanego typu firmy
- Autonomiczne wykonywanie każdego etapu — struktury, treści, nawigacji, projektu
- Odzyskiwanie po błędach w trakcie planu bez konieczności ręcznej interwencji
- Instalowanie rekomendowanych pluginów jako części budowy
- Tworzenie formularzy kontaktowych bezpośrednio z interfejsu czatu (Superdav AI Agent v1.10.0+)
- Koordynowanie przypomnień o uruchomieniu lub wiadomości po wydarzeniu dla uczestników bez zduplikowanych powiadomień, gdy bramki zatwierdzania i rekordy przypomnień są włączone

**Sugestie startowe:**
- *Zbuduj witrynę portfolio fotograficznego z typem wpisu galerii, stroną rezerwacji i formularzem kontaktowym.*
- *Utwórz stronę restauracji z menu online, godzinami otwarcia i formularzem zapytania o rezerwację stolika.*
- *Skonfiguruj witrynę dla freelancera konsultingowego ze stronami usług, sekcją portfolio i blogiem.*
- *Dodaj formularz kontaktowy do strony Kontakt za pomocą kreatora witryny.*
- *Po zatwierdzeniu listy kontrolnej uruchomienia witryny wyślij przypomnienie SMS do skonfigurowanego kontaktu interesariusza.*

---

### Design Studio

**Cel:** Dostosowanie wizualne — kolory, typografia, CSS i wzorce bloków.

**Dostępne narzędzia:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**W czym sprawdza się dobrze:**
- Stosowanie nazwanych presetów motywu (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Dopracowywanie globalnej typografii i palet kolorów przez theme.json
- Wstrzykiwanie niestandardowego CSS dla nadpisań specyficznych dla marki
- Robienie zrzutu ekranu strony i analizowanie jej pod kątem problemów projektowych

**Sugestie startowe:**
- *Zastosuj preset warm-editorial, a następnie ustaw kolor podstawowy na #2d6a4f.*
- *Zrób zrzut ekranu strony głównej i powiedz mi, co byś ulepszył.*
- *Utwórz wielokrotnego użytku wzorzec bloku hero z obrazem tła na pełną szerokość i wyśrodkowanym nagłówkiem.*

### Plugin Manager

**Cel:** Odkrywanie, instalowanie i zarządzanie pluginami WordPress.

**Dostępne narzędzia:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**W czym sprawdza się dobrze:**
- Rekomendowanie najlepszego pluginu dla opisanego przypadku użycia
- Instalowanie pakietów możliwości z rejestru
- Przeglądanie dostępnego katalogu możliwości według kategorii

**Sugestie startowe:**
- *Jaki jest najlepszy plugin do katalogu członków?*
- *Zainstaluj pakiet możliwości WooCommerce.*
- *Pokaż mi wszystkie dostępne pakiety możliwości ecommerce.*

---

### Support Assistant

**Cel:** Odpowiadanie na pytania dotyczące treści witryny, ustawień i konfiguracji WordPress.

**Dostępne narzędzia:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Co robi dobrze:**
- Wyszukiwanie bieżących ustawień i opcji witryny
- Wyjaśnianie, jakie typy wpisów, taksonomie i menu są skonfigurowane w witrynie
- Odpowiadanie na pytania „co robi to ustawienie?” przez odczytywanie wartości na żywo
- Pełnienie roli diagnostycznej warstwy tylko do odczytu przed wprowadzaniem zmian

**Sugestie na początek:**
- *Jakie pluginy i ustawienia są obecnie aktywne w tej witrynie?*
- *Wypisz wszystkie niestandardowe typy wpisów zarejestrowane w tej witrynie.*
- *Jakie menu nawigacyjne istnieją i gdzie są przypisane?*

---

## Integracje automatyzacji Superdav

Gdy integracje Superdav AI Agent v1.18.0 są skonfigurowane, wbudowani agenci mogą uczestniczyć w bezpieczniejszych, świadomych harmonogramu przepływach pracy automatyzacji:

- **Narzędzia odczytu Google Calendar** pozwalają agentom sprawdzać skonfigurowane kalendarze i wydarzenia przed przygotowaniem dalszych działań.
- **Mapowanie kontaktów i uczestników** pomaga dopasować uczestników wydarzenia do użytkowników WordPress lub znanych kontaktów.
- **Bramki zatwierdzania przez człowieka** wstrzymują wrażliwe działania do czasu, aż upoważniony użytkownik je przejrzy i potwierdzi.
- **Rekordy przypomnień** zapobiegają duplikowaniu powiadomień, gdy zaplanowane zadania są ponawiane lub powtarzane.
- **Powiadomienia SMS TextBee** wysyłają skonfigurowane wiadomości tekstowe tylko wtedy, gdy dane uwierzytelniające SMS i uprawnienia przepływu pracy są włączone.

Zalecany przepływ pracy: poproś agenta o przygotowanie wiadomości lub działania, przejrzyj monit zatwierdzenia, a następnie pozwól zatwierdzonemu działaniu zostać wznowionemu. W przypadku cyklicznych przypomnień pozostaw włączoną deduplikację przypomnień, aby to samo wydarzenie lub ten sam kontakt nie otrzymywały wielokrotnych powiadomień.

---

## Dostosowywanie agentów

Każdego wbudowanego agenta można rozszerzyć lub zastąpić za pomocą filtra `gratis_ai_agent_agents`.

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

Nowy agent pojawia się w Agent Picker natychmiast po uruchomieniu filtra.

### Usuwanie wbudowanego agenta

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
