---
title: Agjentë të integruar
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agentët e integruar

Gratis AI Agent v1.9.0 vjen me pesë agentë të integruar, secili i parakonfiguruar me një grup të fokusuar mjetesh, një system prompt të përshtatur dhe sugjerime fillestare që përputhen me detyra të zakonshme në atë fushë. Kalimi nga një agent te tjetri ndryshon çfarë mund të bëjë asistenti dhe si përgjigjet — pa asnjë konfigurim nga ana juaj. Superdav AI Agent v1.18.0 mund t’u shtojë këtyre rrjedhave të punës mjete të vetëdijshme për oraret, regjistra kujtesash, porta miratimi dhe njoftime SMS kur integrimet përkatëse janë të konfiguruara.

## Çfarë është një agent? {#what-is-an-agent}

Çdo agent është një profil konfigurimi me emër që kombinon:

- **Mjetet** — aftësitë që agenti lejohet të thërrasë (p.sh. një Shkrues Përmbajtjeje ka qasje në aftësi për krijimin e postimeve; një Studio Dizajni ka qasje në aftësi për CSS dhe theme.json)
- **System prompt** — udhëzime që përcaktojnë tonin, përparësitë dhe kufizimet e agentit
- **Sugjerimet** — prompt-e të shkruara paraprakisht që shfaqen në ndërfaqen e bisedës për t’ju ndihmuar të nisni shpejt

## Qasja te zgjedhësi i agentit {#accessing-the-agent-picker}

1. Hapni panelin **Gratis AI Agent** në shiritin anësor të administrimit të WordPress.
2. Klikoni **ikonën e agentit** në këndin e sipërm majtas të kokës së bisedës (ikona ndryshon për të pasqyruar agentin aktiv).
3. **Agent Picker** hapet si një mbivendosje form-table. Çdo agent renditet me ikonën, emrin dhe një përshkrim me një rresht.
4. Klikoni një rresht agenti për ta aktivizuar. Koka e bisedës përditësohet menjëherë.

Mund të ndërroni agentë edhe në mes të bisedës — system prompt i agentit të ri hyn në fuqi nga mesazhi i radhës.

## Pesë agentët e integruar {#the-five-built-in-agents}

### Shkrues Përmbajtjeje {#content-writer}

**Fokusi:** Krijimi dhe redaktimi i postimeve, faqeve dhe formularëve të kontaktit.

**Mjetet e disponueshme:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Me integrimet e Superdav AI Agent v1.18.0 të aktivizuara, konteksti i konfiguruar i kalendarit, portat e miratimit, kujtesat dhe mjetet e njoftimeve SMS mund të jenë gjithashtu të disponueshme për rrjedha pune të miratuara.

**Çfarë bën mirë:**
- Harton dhe publikon postime blogu nga një përmbledhje ose skicë
- Krijon grupe faqesh landing për një sajt të ri
- Ndërton formularë kontakti dhe kërkesash
- Vendos imazhe të veçuara në postime nga një URL ose kërkim
- Harton mesazhe pasuese për ngjarje nga konteksti i konfiguruar i Google Calendar, pastaj ndalet për miratim përpara dërgimit të njoftimeve

**Sugjerime fillestare:**
- *Shkruaj një postim blogu me 500 fjalë rreth përfitimeve të WordPress multisite.*
- *Krijo një faqe Rreth nesh, Shërbime dhe Kontakt dhe publikoji.*
- *Shto një formular kërkese për rezervim në faqen Kontakt.*
- *Harto një kujtesë për pjesëmarrësit në ngjarjen e konfiguruar të kalendarit për nesër dhe prit miratimin përpara se ta dërgosh.*

---

### Ndërtues Sajti {#site-builder}

**Fokusi:** Krijim i plotë i uebsajtit nga një prompt i vetëm.

**Mjetet e disponueshme:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Me Superdav AI Agent v1.18.0, mjetet e konfiguruara për shërbim të menaxhuar, miratim, kujtesa, kalendar dhe SMS mund të jenë të disponueshme aty ku administratorët i aktivizojnë.

**Çfarë bën mirë:**
- Gjeneron një plan ndërtimi sajti me shumë faza për një lloj biznesi të përshkruar
- Ekzekuton çdo fazë në mënyrë autonome — strukturë, përmbajtje, navigim, dizajn
- Rikuperohet nga gabimet në mes të planit pa kërkuar ndërhyrje manuale
- Instalon plugin-e të rekomanduara si pjesë e ndërtimit
- Krijon formularë kontakti drejtpërdrejt nga ndërfaqja e bisedës (Superdav AI Agent v1.10.0+)
- Koordinon kujtesat e lansimit ose ndjekjen pasuese të pjesëmarrësve pa njoftime të dyfishta kur portat e miratimit dhe regjistrat e kujtesave janë të aktivizuara

**Sugjerime fillestare:**
- *Ndërto një sajt portofoli fotografie me një lloj postimi galerie, një faqe rezervimi dhe një formular kontakti.*
- *Krijo një uebsajt restoranti me një menu online, orare hapjeje dhe një formular kërkese për rezervim tavoline.*
- *Konfiguro një sajt konsulence të pavarur me faqe shërbimesh, një seksion portofoli dhe një blog.*
- *Shto një formular kontakti në faqen Kontakt duke përdorur ndërtuesin e sajtit.*
- *Pasi lista e kontrollit për lansimin e sajtit të miratohet, dërgo një kujtesë SMS te kontakti i konfiguruar i palës së interesuar.*

---

### Studio Dizajni {#design-studio}

**Fokusi:** Përshtatje vizuale — ngjyra, tipografi, CSS dhe modele blloqesh.

**Mjetet e disponueshme:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Çfarë bën mirë:**
- Aplikon preset-e të emërtuara teme (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Rregullon me imtësi tipografinë globale dhe paletat e ngjyrave përmes theme.json
- Injekton CSS të personalizuar për ndryshime specifike të brandit
- Merr një pamje ekrani të një faqeje dhe e shqyrton për probleme dizajni

**Sugjerime fillestare:**
- *Apliko preset-in warm-editorial dhe pastaj vendos ngjyrën kryesore në #2d6a4f.*
- *Merr një pamje ekrani të faqes kryesore dhe më thuaj çfarë do të përmirësoje.*
- *Krijo një model blloku hero të ripërdorshëm me një imazh sfondi me gjerësi të plotë dhe titull të qendërzuar.*

### Menaxher Plugin-esh {#plugin-manager}

**Fokusi:** Zbulimi, instalimi dhe menaxhimi i plugin-eve WordPress.

**Mjetet e disponueshme:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Çfarë bën mirë:**
- Rekomandon plugin-in më të mirë për një rast përdorimi të përshkruar
- Instalon paketa aftësish nga regjistri
- Shfleton katalogun e aftësive të disponueshme sipas kategorisë

**Sugjerime fillestare:**
- *Cili është plugin-i më i mirë për një direktori anëtarësie?*
- *Instalo paketën e aftësive WooCommerce.*
- *Më trego të gjitha paketat e disponueshme të aftësive për ecommerce.*

---

### Asistent Mbështetjeje {#support-assistant}

**Fokusi:** Përgjigjja ndaj pyetjeve rreth përmbajtjes së sajtit, cilësimeve dhe konfigurimit të WordPress.

**Mjetet e disponueshme:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Çfarë bën mirë:**
- Kërkimi i cilësimeve dhe opsioneve aktuale të sajtit
- Shpjegimi se cilat lloje postimesh, taksonomi dhe menu janë konfiguruar në sajt
- Përgjigjja ndaj pyetjeve "çfarë bën ky cilësim?" duke lexuar vlerat live
- Shërbimi si një shtresë diagnostikuese vetëm për lexim përpara se të bëhen ndryshime

**Sugjerime fillestare:**
- *Cilët plugin-e dhe cilësime janë aktualisht aktive në këtë sajt?*
- *Listo të gjitha llojet e personalizuara të postimeve të regjistruara në këtë sajt.*
- *Cilat menu navigimi ekzistojnë dhe ku janë caktuar?*

---

## Integrimet e Automatizimit Superdav {#superdav-automation-integrations}

Kur integrimet e Superdav AI Agent v1.18.0 janë konfiguruar, agjentët e integruar mund të marrin pjesë në rrjedha pune automatizimi më të sigurta dhe të vetëdijshme për orarin:

- **Mjetet e leximit të Google Calendar** u lejojnë agjentëve të inspektojnë kalendarët dhe ngjarjet e konfiguruara përpara se të hartojnë punë pasuese.
- **Hartëzimi i kontakteve dhe pjesëmarrësve** ndihmon në përputhjen e pjesëmarrësve të ngjarjeve me përdoruesit e WordPress ose kontaktet e njohura.
- **Portat e miratimit njerëzor** ndalojnë veprimet e ndjeshme derisa një përdorues i autorizuar t’i shqyrtojë dhe konfirmojë ato.
- **Regjistrimet e kujtesave** parandalojnë njoftimet e dyfishta kur punët e planifikuara riprovohen ose përsëriten.
- **Njoftimet SMS TextBee** dërgojnë mesazhe tekst të konfiguruara vetëm kur kredencialet SMS dhe lejet e rrjedhës së punës janë të aktivizuara.

Rrjedhë pune e rekomanduar: kërkoji agjentit të përgatisë mesazhin ose veprimin, shqyrto njoftimin e miratimit, pastaj lejo që veprimi i miratuar të rifillojë. Për kujtesat e përsëritura, mbaje të aktivizuar deduplikimin e kujtesave që i njëjti event ose kontakt të mos njoftohet vazhdimisht.

---

## Personalizimi i agjentëve {#customising-agents}

Çdo agjent i integruar mund të zgjerohet ose zëvendësohet përmes filtrit `gratis_ai_agent_agents`.

### Shtimi i një kërkese sistemi të personalizuar te një agjent ekzistues {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Regjistrimi i një agjenti të ri {#registering-a-new-agent}

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

Agjenti i ri shfaqet në Agent Picker menjëherë pasi filtri të ekzekutohet.

### Heqja e një agjenti të integruar {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
