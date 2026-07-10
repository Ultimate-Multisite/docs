---
title: Agenți integrați
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agenți încorporați {#built-in-agents}

Gratis AI Agent v1.9.0 livrează cinci agenți încorporați, fiecare preconfigurat cu un set concentrat de instrumente, un prompt de sistem adaptat și sugestii de început potrivite pentru sarcini comune din acea zonă. Comutarea între agenți schimbă ce poate face asistentul și cum răspunde — fără nicio configurare din partea ta. Superdav AI Agent v1.18.0 poate adăuga instrumente care țin cont de program, înregistrări de mementouri, porți de aprobare și notificări SMS acestor fluxuri de lucru atunci când integrările aferente sunt configurate.

## Ce este un agent? {#what-is-an-agent}

Fiecare agent este un profil de configurare denumit care combină:

- **Instrumente** — abilitățile pe care agentul are voie să le invoce (de ex. un Content Writer are acces la abilități de creare a articolelor; un Design Studio are acces la abilități CSS și theme.json)
- **Prompt de sistem** — instrucțiuni care stabilesc tonul, prioritățile și constrângerile agentului
- **Sugestii** — prompturi pre-scrise afișate în interfața de chat pentru a te ajuta să începi rapid

## Accesarea selectorului de agenți {#accessing-the-agent-picker}

1. Deschide panoul **Gratis AI Agent** din bara laterală de administrare WordPress.
2. Fă clic pe **pictograma agentului** din colțul stânga sus al antetului chatului (pictograma se schimbă pentru a reflecta agentul activ).
3. **Selectorul de agenți** se deschide ca o suprapunere tip tabel-formular. Fiecare agent este listat cu pictograma, numele și o descriere de o linie.
4. Fă clic pe un rând de agent pentru a-l activa. Antetul chatului se actualizează imediat.

Poți comuta agenții și în mijlocul conversației — promptul de sistem al noului agent intră în vigoare de la următorul mesaj.

## Cei cinci agenți încorporați {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Focus:** Crearea și editarea articolelor, paginilor și formularelor de contact.

**Instrumente disponibile:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Cu integrările Superdav AI Agent v1.18.0 activate, contextul de calendar configurat, porțile de aprobare, mementourile și instrumentele de notificare SMS pot fi, de asemenea, disponibile pentru fluxurile de lucru aprobate.

**Ce face bine:**
- Redactarea și publicarea articolelor de blog pornind de la un brief sau o schiță
- Crearea de loturi de pagini de destinație pentru un site nou
- Construirea formularelor de contact și de solicitare
- Setarea imaginilor reprezentative pe articole dintr-un URL sau dintr-o căutare
- Redactarea mesajelor de follow-up pentru evenimente din contextul Google Calendar configurat, apoi pauză pentru aprobare înainte de trimiterea notificărilor

**Sugestii de început:**
- *Scrie un articol de blog de 500 de cuvinte despre beneficiile WordPress multisite.*
- *Creează o pagină Despre, Servicii și Contact și publică-le.*
- *Adaugă un formular de solicitare pentru rezervări pe pagina Contact.*
- *Redactează un memento pentru participanții la evenimentul configurat în calendarul de mâine și așteaptă aprobarea înainte de a-l trimite.*

---

### Site Builder {#site-builder}

**Focus:** Crearea completă a unui site web dintr-un singur prompt.

**Instrumente disponibile:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Cu Superdav AI Agent v1.18.0, instrumentele configurate pentru servicii gestionate, aprobare, mementouri, calendar și SMS pot fi disponibile acolo unde administratorii le activează.

**Ce face bine:**
- Generarea unui plan de construire a site-ului în mai multe faze pentru un tip de afacere descris
- Executarea autonomă a fiecărei faze — structură, conținut, navigare, design
- Recuperarea din erori în mijlocul planului fără a necesita intervenție manuală
- Instalarea pluginurilor recomandate ca parte a construirii
- Crearea formularelor de contact direct din interfața de chat (Superdav AI Agent v1.10.0+)
- Coordonarea mementourilor de lansare sau a follow-up-ului pentru participanți fără notificări duplicate atunci când porțile de aprobare și înregistrările de mementouri sunt activate

**Sugestii de început:**
- *Construiește un site de portofoliu fotografic cu un tip de articol pentru galerie, o pagină de rezervări și un formular de contact.*
- *Creează un site web pentru restaurant cu un meniu online, ore de funcționare și un formular de solicitare pentru rezervare de masă.*
- *Configurează un site de consultanță freelance cu pagini de servicii, o secțiune de portofoliu și un blog.*
- *Adaugă un formular de contact pe pagina Contact folosind constructorul de site.*
- *După ce lista de verificare pentru lansarea site-ului este aprobată, trimite un memento SMS către contactul părții interesate configurate.*

---

### Design Studio {#design-studio}

**Focus:** Personalizare vizuală — culori, tipografie, CSS și modele de blocuri.

**Instrumente disponibile:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ce face bine:**
- Aplicarea presetărilor de temă denumite (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Ajustarea fină a tipografiei globale și a paletelor de culori prin theme.json
- Injectarea de CSS personalizat pentru suprascrieri specifice brandului
- Realizarea unei capturi de ecran a unei pagini și analizarea ei pentru probleme de design

**Sugestii de început:**
- *Aplică presetarea warm-editorial și apoi setează culoarea principală la #2d6a4f.*
- *Fă o captură de ecran a paginii principale și spune-mi ce ai îmbunătăți.*
- *Creează un model reutilizabil de bloc hero cu o imagine de fundal pe toată lățimea și un titlu centrat.*

### Plugin Manager {#plugin-manager}

**Focus:** Descoperirea, instalarea și gestionarea pluginurilor WordPress.

**Instrumente disponibile:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ce face bine:**
- Recomandarea celui mai bun plugin pentru un caz de utilizare descris
- Instalarea pachetelor de abilități din registru
- Răsfoirea catalogului de abilități disponibile pe categorii

**Sugestii de început:**
- *Care este cel mai bun plugin pentru un director de membri?*
- *Instalează pachetul de abilități WooCommerce.*
- *Arată-mi toate pachetele de abilități ecommerce disponibile.*

---

### Support Assistant {#support-assistant}

**Focus:** Răspunsuri la întrebări despre conținutul site-ului, setări și configurarea WordPress.

**Instrumente disponibile:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ce face bine:**
- Caută setările și opțiunile curente ale site-ului
- Explică ce tipuri de articole, taxonomii și meniuri sunt configurate pe site
- Răspunde la întrebări de tipul „ce face această setare?” citind valori live
- Servește ca un strat de diagnosticare doar în citire înainte de a face modificări

**Sugestii de început:**
- *Ce plugin-uri și setări sunt active în prezent pe acest site?*
- *Listează toate tipurile de articole personalizate înregistrate pe acest site.*
- *Ce meniuri de navigare există și unde sunt atribuite?*

---

## Integrări de automatizare Superdav {#superdav-automation-integrations}

Când integrările Superdav AI Agent v1.18.0 sunt configurate, agenții încorporați pot participa la fluxuri de lucru de automatizare mai sigure, conștiente de programări:

- **Instrumentele de citire Google Calendar** permit agenților să inspecteze calendarele și evenimentele configurate înainte de a redacta lucrări ulterioare.
- **Maparea contactelor și participanților** ajută la asocierea participanților la eveniment cu utilizatori WordPress sau contacte cunoscute.
- **Porțile de aprobare umană** pun pe pauză acțiunile sensibile până când un utilizator autorizat le revizuiește și le confirmă.
- **Înregistrările de reminder** previn notificările duplicate atunci când sarcinile programate reîncearcă sau se repetă.
- **Notificările SMS TextBee** trimit mesajele text configurate numai când credențialele SMS și permisiunile fluxului de lucru sunt activate.

Flux recomandat: cere agentului să pregătească mesajul sau acțiunea, revizuiește solicitarea de aprobare, apoi permite acțiunii aprobate să reia. Pentru remindere recurente, păstrează deduplicarea reminderelor activată, astfel încât același eveniment sau contact să nu fie notificat în mod repetat.

---

## Personalizarea agenților {#customising-agents}

Fiecare agent încorporat poate fi extins sau înlocuit prin filtrul `gratis_ai_agent_agents`.

### Adăugarea unui prompt de sistem personalizat la un agent existent {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Înregistrarea unui agent nou {#registering-a-new-agent}

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

### Eliminarea unui agent încorporat {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
