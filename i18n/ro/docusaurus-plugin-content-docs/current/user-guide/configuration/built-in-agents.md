---
title: Agenți încorporate
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agenții Integră

Gratis AI Agent v1.9.0 include cinci agenți încorporați, fiecare preconfigurat cu un set de instrumente focalizat, un prompt de sistem adaptat și sugestii de pornire potrivite sarcinilor comune din acel domeniu. Comutarea între agenți schimbă ce poate face asistentul și cum răspunde — fără nicio configurare din partea dumneavoastră.

## Ce este un Agent?

Fiecare agent este un profil de configurare cu nume care combină:

- **Tools (Instrumente)** — abilitățile pe care agentul are voie să le invoce (de exemplu, un Content Writer are acces la abilități de creare de postări; un Design Studio are acces la abilități CSS și theme.json)
- **System prompt (Prompt de sistem)** — instrucțiuni care stabilesc tonul, prioritățile și constrângerile agentului
- **Suggestions (Sugestii)** — prompturi pre-scrise afișate în interfața de chat pentru a vă ajuta să începeți rapid

## Accesarea Selectorului de Agenți

1. Deschideți panoul **Gratis AI Agent** în bara laterală de administrare WordPress.
2. Faceți clic pe **pictograma agentului** în colțul din stânga sus al antetului de chat (pictograma se schimbă pentru a reflecta agentul activ).
3. **Agent Picker** se deschide ca o suprapunere de tip tabel-formular. Fiecare agent este listat cu pictograma, numele și o scurtă descriere.
4. Faceți clic pe rândul unui agent pentru a-l activa. Antetul de chat se actualizează imediat.

De asemenea, puteți comuta agenții în timpul unei conversații — promptul de sistem al noului agent intră în vigoare de la următorul mesaj.

## Cele Cinci Agenți Integră

### Content Writer (Scriitor de Conținut)

**Focus (Obiectiv):** Crearea și editarea postărilor, paginilor și formularelor de contact.

**Available tools (Instrumente disponibile):** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ce face bine:**
- Elaborarea și publicarea postărilor de blog dintr-un rezumat sau un plan
- Crearea în lot de pagini de destinație pentru un site nou
- Construirea de formulare de contact și de solicitări
- Setarea imaginilor în evidență pe postări dintr-un URL sau o căutare

**Starter suggestions (Sugestii de pornire):**
- *Scrie un articol de blog de 500 de cuvinte despre beneficiile WordPress multisite.*
- *Creează paginile „Despre noi”, „Servicii” și „Contact” și publică-le.*
- *Adaugă un formular de solicitare de rezervare pe pagina de Contact.*

---

### Site Builder (Constructor de Site-uri)

**Focus (Obiectiv):** Crearea unui site web de la cap la bătailă dintr-un singur prompt.

**Available tools (Instrumente disponibile):** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ce face bine:**
- Generarea unui plan de construcție a site-ului în mai multe faze pentru un tip de afacere descris
- Executarea fiecărei faze autonom — structură, conținut, navigare, design
- Recuperarea de erori în timpul planului fără a necesita intervenție manuală
- Instalarea plugin-urilor recomandate ca parte a construcției
- Crearea de formulare de contact direct din interfața de chat (Superdav AI Agent v1.10.0+)

**Starter suggestions (Sugestii de pornire):**
- *Construiește un site de portofoliu foto cu un tip de postare de galerie, o pagină de rezervare și un formular de contact.*
- *Creează un site de restaurant cu un meniu online, ore de program și un formular de solicitare de rezervare a mesei.*
- *Setează un site de consultanță freelance cu pagini de servicii, o secțiune de portofoliu și un blog.*
- *Adaugă un formular de contact pe pagina de Contact folosind constructorul de site.*

---

### Design Studio (Studio de Design)

**Focus (Obiectiv):** Personalizare vizuală — culori, tipografie, CSS și pattern-uri de blocuri.

**Available tools (Instrumente disponibile):** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ce face bine:**
- Aplicarea de presetări de teme cu nume (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Rafinarea tipografiei globale și a paletelor de culori prin theme.json
- Injectarea de CSS personalizat pentru suprascrieri specifice brandului
- Prelevarea unei capture de ecran ale unei pagini și revizuirea acesteia pentru probleme de design

**Starter suggestions (Sugestii de pornire):**
- *Aplică presetarea warm-editorial și apoi setează culoarea primară la #2d6a4f.*
- *Preia o captură de ecran a paginii de acasă și spune-mi ce aș îmbunătăți.*
- *Creează un pattern de bloc hero reutilizabil cu o imagine de fundal full-width și un titlu centrat.*

---

### Plugin Manager (Manager de Plugin-uri)

**Focus (Obiectiv):** Descoperirea, instalarea și gestionarea plugin-urilor WordPress.

**Available tools (Instrumente disponibile):** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ce face bine:**
- Recomandarea celei mai bune plugin-uri pentru un caz de utilizare descris
- Instalarea pachetelor de abilități din registru
- Navigarea catalogului de abilități disponibile după categorie

**Starter suggestions (Sugestii de pornire):**
- *Care este cel mai bun plugin pentru un director de membrii?*
- *Instalează pachetul de abilități WooCommerce.*
- *Arată-mi toate pachetele de abilități e-commerce disponibile.*

---

### Support Assistant (Asistent de Suport)

**Focus (Obiectiv):** Răspunsul la întrebări despre conținutul site-ului, setări și configurarea WordPress.

**Available tools (Instrumente disponibile):** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ce face bine:**
- Consultarea setărilor și opțiunilor curente ale site-ului
- Explicarea ce sunt tipurile de postări, taxonomiele și meniurile configurate pe site
- Răspunsul la întrebări precum „ce face această setare?” prin citirea valorilor live
- Acționarea ca un strat de diagnosticare doar în citire, înainte de a face modificări

**Starter suggestions (Sugestii de pornire):**
- *Ce plugin-uri și setări sunt active în prezent pe acest site?*
- *Listează toate tipurile de postări personalizate înregistrate pe acest site.*
- *Ce meniuri de navigare există și unde sunt atribuite?*

---

## Personalizarea Agenților

Fiecare agent integră poate fi extins sau înlocuit prin filtru-ul `gratis_ai_agent_agents`.

### Adăugarea unui prompt de sistem personalizat unui agent existent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Înregistrarea unui agent nou

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

Noul agent apare în Agent Picker imediat după rularea filtrului.

### Eliminarea unui agent integră

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
