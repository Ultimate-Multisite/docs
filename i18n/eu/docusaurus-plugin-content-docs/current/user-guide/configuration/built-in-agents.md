---
title: Agentes inkorporatuta
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agente Integratuak

Gratis AI Agent v1.9.0-ean itxarriko agente inkusten du, zehar bat preconfiguratu da, hau da tool-ek, system prompt bat espezializatua eta horrek erabilera garrantzitsuak dira. Agente batetik beste batari aurkitzen (switch) da, hau da zer egin dezake eta onartu dena — ez du beharren konfigurazio edo auker bat.

## Zer da Agent bat?

Agente batek da irakurriko konfigurazio profil bat zehaztu eta:

- **Tools** — agenteari erabilera duten aukerak (adibidez, Content Writer-ek postrak emateko eta editatzeko aukera ditu; Design Studio-ek CSS eta theme.json erabilera ditu).
- **System prompt** — agentearen tonoa, prioritateak eta murriztuena bat daiko iragailuak.
- **Suggestions** — chat interfacean erabilera duten preconfiguratu prompt-ek, zehaztu eta hasten jakiteko laguntzeko.

## Agent Picker-ra aukeratu

1. WordPress admin sidebar-ean **Gratis AI Agent** panelak irekitu.
2. Chat header-ren atze-lapurtan (top-left) dagoen **agent icon**-a klikatu (icona aktibo agentearen erabilera aldatzen du).
3. **Agent Picker** iragailu-tabel bat gisa ireki da. Agente guztiek ikona, emauta eta deskribapena bat edo bi-line batarekin listatzen dira.
4. Agente bateko fila klikatu (click) da aktiboa egiteko. Chat headerak hemenan ondo aldatzen da.

Eskaintzen duten beste agenteetara ere bildu dezakezu eta bizitzaren geroagatik, agente berriaren system prompt-ek iragailu berriaren mensaian hasi egiten du.

## Agente Inkusten Dena Biak

### Content Writer (Idazle Kontuentua)

**Fokus:** Postrak, pahulpeak eta kontaktua formak emateko eta editatzeko.

**Erabilera duten tool-ek:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Nola inoizki on modu:**
- Blog postak eskolatu eta publikatu eta batzukko eskoletan batzuekin edo eskaintzeko eskoletatik (outline) eskolatu eta publikatu eta.
- Lehen webgune bat daiteko landing page batzuk batch batek eskolatu eta.
- Kontakion eta gizarteko eskoletak (forms) eskolatu eta.
- URL edo bilakidetzean eskolatu postetan featured images ezaratu eta.

**Lehen eskolapenaren sugerentziak:**
- *WordPress multisite-en interesak bidez 500-kalde blog post bat eskolatu.*
- *Bizi, Zerbitzu eta Kontakion lapurua (page) eskolatu eta publikatu.*
- *Kontakion lapurua Contact page-an agitzeko booking eskoleta (form).*

---

### Site Builder (Webgune Kontrolatzailea)

**Fokus:** Bat prompt batetik webgune guztia endi zehatz.

**Eskaintzen dituen herramienta hauek:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Nola modu ondo egiten du:**
- Deskribatu dituen negozio baten fase batzuekin webgune eskolapen plan bat emate eta.
- Fase guztietan (estructura, kontentua, navigazioa, diseinua) autonomikoki eskolatu eta.
- Plan batean errorrak gertatzen denean manualeak ez beharrezko jarduer edo inguruko ikusi baten alde egiten du.
- Eskolapen batzuekin pluginak rekomendatuak instalatzen ditu webgune eskolapena parte batean.
- Chat interface-etik direktu kontakion lapurak (contact forms) eskolatu eta (Superdav AI Agent v1.10.0+).

**Lehen eskolapenaren sugerentziak:**
- *Galeria post type bat, booking page bat eta kontakion lapurua eskolatu webgune fotografia portfolio batean.*
- *Restaurante webgune bat eskolatu menu online bat, aukera orduak eta mesa-booking kontuak eskolatu.*
- *Freelance konsultazio webgune bat eskolatu zerbitzu lapurak, portfolio sektiona bat eta blog bat.*
- *Site builder-en bestela kontakion lapurua Contact page-an agitzeko.*

---

### Design Studio (Diseinu Estudio)

**Fokus:** Ezkutik diseinazioa — coloreak, tipografia, CSS eta blokeak (block patterns).

**Etxeko herramienta hauek:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nola ondo egiten du:**
- Tema preset bat (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) aplikatzea.
- Tema.json bidez global tipografia eta kolor paleta hauek finetuneatzea.
- Brand-eko superposizioak (overrides) beste CSS ezarria injectatzea.
- Balidea screenshot bat hartzea eta disenyo problema horiek ikusteko.

**Gaitasun hasierako sugerentziak:**
- *Warm-editorial preset bat aplikatu eta gaur egun kolor primarioa #2d6a4f daitu.*
- *Homepage-aren screenshot bat hartu eta zer nola hobetzeko eskatzen duzu, adi ezagutai.*
- *Hero block pattern bat zurekin erabilera ematen, irudi bakarra (full-width background image) eta titulu sentratuta.*

---

### Plugin Manager (Plugin Barkapen)

**Fokus:** WordPress pluginak aurkitzea, instalatzea eta eskaintzea.

**Etxeko herramienta hauek:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Nola ondo egiten du:**
- Deskribatu dituen erabilera bestelako pluginaren emendatzea.
- Registry-n dagoen ability packs instalatzea.
- Ability cataloguea kategorian sortu denean aurkitzea.

**Gaitasun hasierako sugerentziak:**
- *Membership directory bat bestelako pluginarein zer da?*
- *WooCommerce abilities pack instalatu.*
- *Eskaintzen dituzten guztia ecommerce ability packs erakusten duzu.*

---

### Support Assistant (Mendatzaile Aurrezki)

**Fokus:** Sailaren kontuintelari, konfigurazio eta WordPress bidezko aukerak ezagutzeko.

**Etxeko herramienta hauek:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Nola inoizki on modu:**
- Aktual sitearen konfiguratizi eta opsioak bilatzen du.
- Sitean zein post types, taxonomies eta menus konfiguratatu dira, ezagutzen ematen du.
- "Zer egin du hau?" dituzko jarduera-eraketa irreal (live values) ikusten duen bitartean erantzuten du.
- Gehiago hasterain eginduan artean, hasierako erregistroa (read-only diagnostic layer) gisa funtzionatzen du.

**Hasiera-proposak:**
- *Nola plugin eta konfiguratiziak aktual sitean dagoen?*
- *Sitean erregistroatu dirudi post types guztia listatu.*
- *Zer navigazio menuk ez du eta horiek zerle hasituraz duten dira?*

---

## Agenteak modifikatu

Bestea, built-in agente bat edo gehiago baten modifikazioa egin dezakezu `gratis_ai_agent_agents` filteraren bestela.

### Agente jakin bat system prompt (system prompt) ez dagoen agente batean gehitu

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Agente berri bat erregistroa

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Post eta pages SEO engineak dira optimizatu.' ,
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'SEO specialist zara. Mehatzeko optimizazioa, meta descriptions eta structured data-ra onditu.' ,
        'suggestions'   => [
            'Homepage-aren titulu eta meta description ikusi.',
            'Post inkailu osoak (five most recent posts) titulu tag-nak onartzea hasteratu.',
        ],
    ];
    return $agents;
} );
```

Ez dago ezagututako agentea filter-raren ondoren Agent Picker-an hemen.

### Ezagututako agente bat ustez

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
