---
title: Įdiegti agentai
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Wbudovai Agentai

Gratis AI Agent v1.9.0 dostarcza pięć wbudowanych agentów, z których każdy jest wstępnie skonfigurowany zestawem narzędzi, spersonalizowanym systemowym promptem oraz sugestiami startowymi dopasowanymi do powszechnych zadań w danej dziedzinie. Przełączanie się między agentami zmienia to, co asystent może robić i jak odpowiada – bez żadnej konfiguracji po Twojej stronie.

## Czym jest Agent?

Każdy agent to nazwany profil konfiguracyjny, który łączy:

- **Narzędzia (Tools)** — możliwości, które agent ma prawo wywołać (np. Content Writer ma dostęp do możliwości tworzenia treści; Design Studio ma dostęp do umiejętności CSS i theme.json).
- **Systemowy prompt** — instrukcje określające ton, priorytety i ograniczenia agenta.
- **Sugestie (Suggestions)** — wstępnie napisane prompty wyświetlane w interfejsie czatu, które pomagają Ci szybko zacząć pracę.

## Dostęp do Wyboru Agentów

1. Otwórz panel **Gratis AI Agent** w pasku bocznym administracji WordPressa.
2. Kliknij **ikonę agenta** w lewym górnym rogu nagłówka czatu (ikona zmienia się, aby odzwierciedlać aktywny agent).
3. **Agent Picker** otwiera się jako nakładka tabeli formularza. Każdy agent jest wymieniony wraz z ikoną, nazwą i krótkim opisem.
4. Kliknij w wiersz agenta, aby go aktywować. Nagłówek czatu aktualizuje się natychmiast.

Możesz również przełączać się między agentami w trakcie rozmowy – systemowy prompt nowego agenta zaczyna obowiązywać od następnej wiadomości.

## Pięć Wbudowanych Agentów

### Content Writer (Piszący Treści)

**Skupienie:** Tworzenie i edycja postów, stron oraz formularzy kontaktowych.

**Dostępne narzędzia:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Kas labiausiai tinka:**
- Blogų parašymas ir publikavimas iš trumpo įrašo ar planų
- Naujo svetainės uchun puslapykių partijų kūrimas
- Kontakto ir užklauso formų kūrimas
- Postams nuolatinio vaizdo nustatymas URL ar paieška pagalba

**Pradžia sužestai:**
- *Rašykite apie 500 žodžių blogą apie WordPress multisite pranašumus.*
- *Sukurkite „Apie mus“, „Paslaugos“ ir „Kontaktai“ puslapykius ir publikuokite juos.*
- *Įdėkite rezervacijos užklauso formą Kontaktų puslapio įrinkalui.*

---

### Svetainės Dydžio Kuri

**Pakuotojimas:** Galima sukurti visą svetainę nuo vieno įrašo.

**Prieinami įrankiai:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Kas labiausiai tinka:**
- Sukurti daug fazų svetainės kūrimo planą aprašytam verslo tipui
- Kiekvieną fazę veikti autonomiškai – struktūra, turinys, navigacija, dizainas
- Atnaujinti klaidos viduje planui be reikalinga man mano
- Įdėti rekomenduojamus pluginus kaip dalį kūrimo
- Kontakto formų sukurti tiesiog iš chat svetainės kūrėjimo (Superdav AI Agent v1.10.0+)

**Pradžia sužestai:**
- *Sukurkite fotografijų portfolijos svetainę su galerijos įrašo tipu, rezervacijos puslapyku ir kontakto forma.*
- *Sukurkite restoranų svetainę su onlaikiniu meniu, veikimo laukais ir santalų rezervacijos užklauso forma.*
- *Nustatykite freelancerių konsultacijų svetainę su paslaugų puslapiais, portfoliju ir blogu.*
- *Naudokite svetainės kūrėjo kontakto formą Kontaktų puslapyje.*

---

### Dizaino Studija

**Pakuotojimas:** Vizualios personalizacijos – spalvos, tipografijos, CSS ir blokų šablonų.

**Paskutojami įrankiai:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kas geriausiai padary:**
- Naudoti pavadinimus theme preset'us (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Tame peržiūrėti ir sukurti globalų tipografijos ir spalvų paletros nustatymus per `theme.json`
- Įdaryti pritaikytą CSS kodą prekių ženaliui specifinių pakeitimų atlikimui
- Atimti puslapio skaitmeną ir peržiūrėti jį dizaino problemų užtikrinimui

**Pradžia:**
- *Tinklydami warm-editorial presetą, nustatykite pagrindinį spalvą į #2d6a4f.*
- *Atimkite naują puslapio pagrindinį skaitmenį ir pasakykite, ką turėtumėte pagerinti.*
- *Sukurkite naudingą hero blokų šabloną su visapriešingai vaizdu aktyvumu ir centrinę antraukę.*

---

### Plugin Manager (Įtraukimų valdyba)

**Kiekis:** Apibūdinti, įdaryti ir valdyti WordPress pluginus.

**Paskutojami įrankiai:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kas geriausiai padary:**
- Rekomenduoti geriausią pluginą apibūdintam naudojimo scenariju
- Įdaryti įtraukimų paketus iš registratorenio
- Peržiūrėti įtraukimų katalogą pagal kategorijas

**Pradžia:**
- *Koks geriausias pluginas klubui/memberių sąrašui?*
- *Įdarykite WooCommerce įtraukimų paketą.*
- *Pokažykite visus turimus e-komercijos įtraukimų paketus.*

---

### Support Assistant (Pagalba specialistė)

**Kiekis:** Atsakyti į klausimus apie svetainės turinį, nustatymus ir WordPress konfigūraciją.

**Paskutojami įrankiai:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Kas labiausiai geriaus:**
- Atidaryti dabartinius svetainės nustatymus ir parinktis.
- Paaiškinati, kokie post tipai, taksonomijos ir meniu yra konfigūruoti svetainei.
- Atsakyti į klausimus „kas šis nustatymas daro?“, skaitydami tiesioginius vertus.
- Veikti kaip skaitomas diagnostikos laisvas, prieš atlikdami pakeitimus.

**Pradžia:**
- *Kuri pluginai ir nustatymai yra aktyvi šioje svetainei?*
- *Nurodyti visus pritaikytus post tipus, registruotus šioje svetainei.*
- *Kuri navigacijos meniu egzistuoja ir kur jie priklausomai nurodyti?*

---

## Agentų pritaikymas

Kiekvienas įtrauktas agentas gali būti išplėstinamas arba pakeistas naudojant `gratis_ai_agent_agents` filtruojimą.

### Pridėti pritaikytą sisteminį promptą esamajam agentui

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registruoti naują agentą

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimizuoja postus ir puslapisems ieškoti enginečių.',
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

Naujas agentas pasirodžia Agent Picker'e tiesiogiai po filtra veikimo.

### Priešdaryti įtrauktą agentą

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
