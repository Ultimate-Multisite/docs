---
title: Agjentë të integruar
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agjentët e integruar

Gratis AI Agent v1.9.0 dërgon pesë agjentë të integruar, secili i konfiguruar paraprakisht me një grup të fokusuar mjeteve, një prompt sistemi të përshtatur dhe sugjerime fillestare që përputhen me detyrat e zakonshme në atë fushë. Ndryshimi midis agjentëve ndryshon se çfarë mund të bëjë asistentit dhe si do të reagojë — pa asnjë konfigurim nga ana jote.

## Çfarë është një Agent?

Secili agent është një profil konfiguratues me emër që bashkon:

- **Mjetet (Tools)** — aftësitë që agjenti lejohet të thirrë (p.sh., një Shkrim Kontenuesi ka akses në aftësitë e krijimit të postimeve; një Studio Dizajni ka akses në aftësitë CSS dhe theme.json).
- **Prompt Sistemi (System prompt)** — udhëzimet që vendosin tonin, prioritetet dhe kufizimet e agjentit.
- **Sugjerimet (Suggestions)** — promptet të shkruara paraprakisht që shfaqen në interfejsin e bisedës për t'ju ndihmuar të filloni shpejt.

## Qasja në Zgjidhjen e Agjentëve (Agent Picker)

1. Hapni paneli **Gratis AI Agent** në panelin anësor të adminit WordPress-it.
2. Klikoni ikonen e **agentit** në krye-tavllin e bisedës (ikona ndryshon për të pasqyruar agjentin aktiv).
3. **Agent Picker** hapet si një sovranje me tabelë formati. Secili agent liston me ikonën, emrin dhe një përshkrim njëvjet.
4. Klikoni në një rresht agjenti për ta aktivizuar. Krye-tavllia përditësohet menjëherë.

Ndonjëherë mund të ndryshoni agjentët gjatë bisedës — prompt sistemi i agjentit të ri hyn në fuqi nga mesazhi i ardhshëm.

## Pesë Agjentët e Integruar

### Shkrim Kontenuesi (Content Writer)

**Fokus:** Krijimi dhe redaktimi i postimeve, faqeve dhe formularëve të kontaktit.

**Mjetet e disponueshme:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Çfarë bën mirë:**
- Përgatitja dhe publikimi i postimeve në blog nga një skicë ose plani
- Krijimi të grupe të faqjeve landing për një faqe të re
- Ndërtimi i formularëve të kontaktit dhe kërkesave
- Vendosja e imazheve të ngarkuara në postime nga një URL ose kërkimi

**Sugjerime fillestare:**
- *Shkruani një postim blog prej 500 fjalësh mbi përfitimet e WordPress multisite.*
- *Krijoni faqet About, Shërbime dhe Kontakt dhe publikojeni ato.*
- *Shtoni një formular kërkesash rezervimi në faqen Kontakt.*

---

### Site Builder (Ndërtues i Faqes)

**Fokus:** Krijimi i të gjithë faqeve të internetit nga një komandë e vetme.

**Mjetet e disponueshme:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Çfarë bën mirë:**
- Krijimin e një plani ndërtimi të faqeve në disa faza për një lloj biznesi të përshkruar
- Ekzekutimi i çdo faze pa ndërhyjë — struktura, përmbajtja, navigacioni, dizajni
- Rikonstruksioni nga gabimet gjatë planit pa nevojë për ndërhyrje manuale
- Instalimi i plugin-eve të rekomanduara si pjesë e ndërtimit
- Krijimi i formularëve të kontaktit direkt nga interfejsi i bisedës (Superdav AI Agent v1.10.0+)

**Sugjerime fillestare:**
- *Ndërtoni një faqe portofoli fotografik me llojin postimi gallery, një faqe rezervimi dhe një formular kontakt.*
- *Krijoni një faqe restoranti me meniu online, oraret e hapjes dhe një formular kërkesash rezervimi të tavoline.*
- *Vendosni një faqe konsultimesh freelance me faqe shërbimesh, një seksion portofoli dhe një blog.*
- *Shtoni një formular kontakt në faqen Kontakt duke përdorur Site Builder.*

---

### Design Studio (Studiu i Dizajnit)

**Fokus:** Personalizimi vizual — ngjyrat, tipografia, CSS dhe modelet e blloqeve.

**Mjetet e mjetë:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Çfarë bën mirë:**
- Aplikimin e presetave të temës me emër (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Përshtatja e detajeve globale të tipografisë dhe paletave të ngjyrave përmes theme.json
- Injeksioni i CSS-s të personalizuar për mbyllje specifike të markës
- Marrja një screenshot-i i një face dhe vlerësimi i saj për probleme dizajni

**Sugjerime fillestare:**
- *Aplikoni presetin warm-editorial dhe më pas vendosni ngjyrën primare në #2d6a4f.*
- *Marrja screenshot-i të faqes kryesore dhe më tregoni se çfarë do të përmirësonit.*
- *Krijoni një model (pattern) hero me hapësirë plotësisht gjerësi për sfond imazhi dhe titull i qendruar.*

---

### Menaxhuesi i Plugin-eve (Plugin Manager)

**Fokus:** Zbulimi, instalimi dhe menaxhimi i plugin-eve të WordPress.

**Mjetet e disponueshme:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Çfarë bën mirë:**
- Rekomandimin e pluginit më të mirë për një rast përdorimi i përshkruar
- Instalimi i paketave të aftësive (ability packs) nga regjistri
- Browsimi i katalogut të aftësive të disponueshme sipas kategorive

**Sugjerime fillestare:**
- *Cila është plugin më i mirë për një direktori anëtarësh?*
- *Instaloni paketën e aftësive WooCommerce.*
- *Më tregoni të gjitha paketat e aftësive të komercializimit (ecommerce) të disponueshme.*

---

### Asistenti i Mbështetjes (Support Assistant)

**Fokus:** Përgjigja në pyetje rreth përmbajtjes së faqes, cilësimeve dhe konfigurimit të WordPress.

**Mjetet e disponueshme:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Çfarë bën mirë:**
- Kërkon cilësimet dhe opsionet e aktualit të faqes së internetit.
- Shpjegon çfarë post types, taxonomies dhe menues janë konfiguruar në faqe.
- Përgjigjet pyetjeve "çfarë bën kjo opsion?" duke lexuar vlerat live.
- Shërben si një shtresë diagnostike të vetme leximi para se të bëni ndryshime.

**Sugjerime fillestare:**
- *Çfarë pluginë dhe cilësime janë aktive në këtë faqe?*
- *Listoni të gjitha custom post types që janë regjistruar në këtë faqe.*
- *Cilat menues navigimi ekzistojnë dhe ku janë të lidhur?*

---

## Personalizimi i Agjentëve (Customising Agents)

Çdo agent i ndërtuar mund të zgjerohet ose zbehet përmes filtrit `gratis_ai_agent_agents`.

### Shtimi i një system prompt custom në një agent ekzistues

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Regjistrimi i një agenti të ri

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimizon postet dhe faqet për mjetet e kërkimit.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ti je një specialist SEO. Fokusohu në optimizimin e fjalëve kyçe, përshkrimet meta dhe të dhënat strukturuar.',
        'suggestions'   => [
            'Përpiquni titullin e faqes kryesore dhe përshkrimin meta.',
            'Sugjeroni përmirësime të tagut të titullit për pesë postat më të fundit.',
        ],
    ];
    return $agents;
} );
```

Agenti i ri shfaqet në Agent Picker menjëherë pasi ekzekutohet filtri.

### Heqja e një agenti të integruar

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
