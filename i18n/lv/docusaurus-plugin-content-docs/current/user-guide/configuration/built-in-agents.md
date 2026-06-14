---
title: Iesniegti agenti
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Iebūvērtie agenti

Gratis AI Agent v1.9.0 ietver pieci iekļautus agentus, katrs ir iepriekš konfiguriēts ar koncentrētu rīku komplektu, pielāgotu sistēmas promptu un sākuma ieteikumiem, kas atbildo biežām darbiem šajā jomā. Antavert to starp agentiem maina to, ko asistent var darīt un kā tas atbild, bez jebkāda konfigūras nepieciešamības no jūsu daļas.

## Kas ir Agentis?

Katrs agents ir nosaukts konfigurašanas profils, kas apvieno:

- **Rīkus (Tools)** — agentu spējās izmantot iespējas (piemēram, Kontenta rakstniekam ir piekļūta postu veidošanai; Dizainam studijai – CSS un theme.json spējām)
- **Sistēmas promptu (System prompt)** — instrukcijas, kas noteik vispārto, prioritātes un ierobežojumus agenta tonim
- **Ieteikumus (Suggestions)** — iepriekš rakstīti prompts, kas redzami чаta interfejsā, lai ātri sāktu strādāt

## Agentu izvēles piekļuvei

1. Atveriet **Gratis AI Agent** panelu WordPress admina sarakstā.
2. Nospressiet **agentu ikonu** чаta galvas augšējā left pusē (ikona mainās, lai atspoguļotu aktīvo agentu).
3. **Agentu izvēles (Agent Picker)** atveras kā form-tabulas overlājs. Katrs agents ir sarakstīts ar savu ikonu, nosaukumu un vienreizīgu aprakstu.
4. Nospressiet agenta rindu, lai to aktivizētu. Chat galva atjaunojas neatkarīgi no laika.

Jūs varat arī starptaupēt agentus sarunas laikā — ja viens agents kļūst aktīvs, tas ieviests savu sistēmas promptu no nākamās ziņas sākumā.

## Pieci iekļautie agenti

### Kontenta rakstnieks (Content Writer)

**Uzvaras:** Postu, lapām un kontaktformu veidošana un rediģēšana.

**Pieejami rīki:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Kas labākās virkārības:**
- Blogu rakstiem saraksta vai skicē no saraksta izveide un publicēšana
- Jaunajam vietnei veidotu landing page'ju paku izveide
- Kontakta un jautājumu iesniegšanas formāru izveide
- Postiem attiecināt izvēlētas bildes no URL vai meklēšanas

**Sākuma ieteikumi:**
- *Rakstīt 500 vārdu blogu postu par WordPress multisite priekšrocībām.*
- *Izveidot "Par mums", pakalpojumu un kontakta lapas un publicēt tos.*
- *Kontakcijas lapai pievienot rezervācijas jautājumu formāru.*

---

### Vietas izveids (Site Builder)

**Uzvaras:** Vispārējās vietnes izveide vienreizējā lūkas ar promptu.

**Pieejami rīki:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Kas labāk:**
- Izveidot vairākas fāzēm vietnes izveides plānu aprakstītas biznesa veida uchun
- Katru fāzi autonomi izpildīt — struktūra, saturs, navigācija, dizains
- Kļūdas plānā atgriešties bez manas iejaukšanās
- Izveidot ietejamus pluginus kā daļu no izveides

**Sākuma ieteikumi:**
- *Izveidot fotogrāfijas portfēļu vietni ar galerijas postu tipu, rezervācijas lapu un kontakta formāru.*
- *Izveidot restorāna vietni ar onla menu, atveršanas laikus un galdiņa rezervācijas jautājumu formu.*
- *Iestatīt freela konsultantu vietni ar pakalpojumu lapas, portfēļu sadaļu un blogu.*
- *Vietas izveidā lietot kontakta formāru Kontakta lapai.*

---

### Dizaina studija (Design Studio)

**Uzvaras:** Vizual pielāgošana — krāsas, tipografija, CSS un bloku atvaļinājumi.

**Pieejamie lietojamie tiekasnes:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Kas labāk darba:**
- Pielietot nosaukta tēmas presetus (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Svarīgi pielāgot globālo tipografiju un krāsu palīdu caur theme.json
- Iejaukt custom CSS, lai pārlaidētu zīmola specifiskus atšķirumus
- Uzņemt attēlu lapas un pārskatīt to dizaina problēmas

**Sākuma ieteikumi:**
- *Pielietot warm-editorial preset un pēc tam noteikt galveno krāsu uz #2d6a4f.*
- *Uzņemt attēlu puslapas un pateikt, kā jūs to uzlabotu.*
- *Izveidot atjaunojamu hero bloka patternu ar pilnplūdi zīmola attēlu un centrisētu sarakstu.*

---

### Plugin Manager (Pielietojumu pārvaldnieks)

**Uzvaras:** Atklāt, instalēt un pārvaldīt WordPress pievienotās komponentes.

**Pieejamie tiekasnes:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Kas labāk darba:**
- Ieteikt labāko pluginu konkrētām lietojuma situācijām
- Instalēt ability packs no reģistrā
- Pārskatīt pieejamu ability katalogu pēc kategorijām

**Sākuma ieteikumi:**
- *Kas ir labākais plugin membership directory (pilnvaru saraksta) lietošanai?*
- *Insturēt WooCommerce abilities pack.*
- *Parādiet man visus pieejamos e-komercijas ability packs.*

---

### Support Assistant (Atbalsta asistentas)

**Uzvaras:** Atbildēt uz jautājumiem par vietnes saturu, iestatījumus un WordPress konfigurāciju.

**Pieejamie tiekasnes:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ko kas ir labi darīts:**
- Aktuālās vietnes iestatījumu un opciju apmeklēšana.
- Izjaucināšana, kā konfigurēti post types, taxonomies un menūs vietnē.
- Atbildes uz jautājumiem "kas dara šī iestatījums?" lasot dzīvas vērtības.
- Līdzsakīšanās tikai lasīt vai diagnosticējošais slāvs pirms izmaiņām.

**Sākuma ieteikumi:**
- *Kas pluginus un iestatījumi ir pašlaicīgi aktīvi šajā vietnē?*
- *Sarakstiet visus custom post types, kas reģistrēti šajā vietnē.*
- *Kādas navigācijas menūs pastāv un kur tie ir saistīti?*

---

## Agentu pielāgošana

Katrs iekļautais agentu var paplašināt vai aizstāt caur `gratis_ai_agent_agents` filteri.

### Konkrētās sistēmas prompta pievienošana jau eksistentam agentam

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Jaunā agenta reģistrēšana

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimizē postus un lapas meklēšanas rindās.',
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

Jaunais agent parādās Agent Pickerā tieši pēc filtru veikšanas.

### Iegūst iekļautu agentu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
