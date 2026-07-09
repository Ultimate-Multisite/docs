---
title: Agentên Hundirîn
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Agentên Navxweyî

Gratis AI Agent v1.9.0 bi pênc agentên navxweyî tê, her yek ji wan bi komeke amûrên berê ve hatine amadekirin, system promptek taybet, û pêşniyarên destpêkê yên li gorî karên hevpar ên wê qadê hatine saz kirin. Guhertina di navbera agentan de tiştên ku arîkar dikare bike û awayê bersiva wî diguherîne — bêyî tu veavakirinek ji aliyê we ve. Superdav AI Agent v1.18.0 dikare dema entegrasyonên têkildar hatine veavakirin, amûrên haydar ji bernameyê, tomarên bîranînê, dergehên erêkirinê, û agahdariyên SMSê li van herikên karê zêde bike.

## Agent Çi Ye?

Her agent profîleke veavakirinê ya bi nav e ku van tiştan li hev tîne:

- **Amûr** — şiyanên ku destûr tê dayîn agent wan bi kar bîne (mînak, Content Writer xwedî gihîştina şiyanên afirandina nivîsê ye; Design Studio xwedî gihîştina şiyanên CSS û theme.json e)
- **System prompt** — rêwerzên ku awaz, pêşîtiyên, û sînorên agent diyar dikin
- **Pêşniyar** — promptên berê nivîsandî ku di navrûya sohbetê de tên nîşandan da ku hûn zû dest pê bikin

## Gihîştina Hilbijêrê Agentan

1. Panela **Gratis AI Agent** di sidebar a rêveberiya WordPress de vekin.
2. Li **îkona agent** ya li jora-çepê ya sernavê sohbetê bikirtînin (îkon li gorî agentê çalak diguhere).
3. **Hilbijêrê Agentan** wekî qatek form-table vedibe. Her agent bi îkona xwe, navê xwe, û danasînek yek rêzikî tê lîstekirin.
4. Li rêza agentekî bikirtînin da ku wê çalak bikin. Sernavê sohbetê yekser nû dibe.

Hûn dikarin di nîvê axaftinê de jî agentan biguherînin — system prompt a agentê nû ji peyama din ve bandor dike.

## Pênc Agentên Navxweyî

### Content Writer

**Baldarî:** Afirandin û sererastkirina nivîs, rûpel, û formên têkiliyê.

**Amûrên berdest:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Dema entegrasyonên Superdav AI Agent v1.18.0 çalak bin, konteksa salnameyê ya veavakirî, dergehên erêkirinê, bîranîn, û amûrên agahdariya SMSê jî dikarin ji bo herikên karê erêkirî berdest bin.

**Tiştên ku baş dike:**
- Amadekirina pêşnivîs û weşandina nivîsên blogê ji kurteyeke an xêzekê
- Afirandina komên rûpelên landing ji bo malpereke nû
- Avakirina formên têkilî û pirsînê
- Danîna wêneyên taybet li ser nivîsan ji URLekê an lêgerînê
- Amadekirina peyamên piştî-bûyerê ji konteksa Google Calendar ya veavakirî, paşê sekinandin ji bo erêkirinê berî şandina agahdariyan

**Pêşniyarên destpêkê:**
- *Nivîseke blogê ya 500 peyvan li ser sûdên WordPress multisite binivîse.*
- *Rûpelên About, Services, û Contact biafirîne û wan biweşîne.*
- *Formeke pirsîna bookingê li rûpela Contact zêde bike.*
- *Ji bo beşdarên bûyera salnameya veavakirî ya sibê bîranînek amade bike û berî şandinê li benda erêkirinê bimîne.*

---

### Site Builder

**Baldarî:** Afirandina malperê ji serî heta dawî ji yek promptê.

**Amûrên berdest:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Bi Superdav AI Agent v1.18.0 re, amûrên managed-service, erêkirinê, bîranînê, salnameyê, û SMSê yên veavakirî dikarin li cihên ku rêveber wan çalak dikin berdest bin.

**Tiştên ku baş dike:**
- Çêkirina planeke avakirina malperê ya çend qonaxî ji bo cureyeke karsaziyê ya hatî danasîn
- Pêkanîna her qonaxê bi xweserî — avahî, naverok, navîgasyon, dîzayn
- Rizgarkirin ji şaşiyan di nîvê planê de bêyî ku destwerdana destan hewce be
- Sazkirina pluginên pêşniyarkirî wekî beşek ji avakirinê
- Afirandina formên têkiliyê rasterast ji navrûya sohbetê (Superdav AI Agent v1.10.0+)
- Hevkoordînekirina bîranînên destpêkirinê an şopandina beşdaran bê agahdariyên dubare, dema dergehên erêkirinê û tomarên bîranînê çalak bin

**Pêşniyarên destpêkê:**
- *Malpereke portfolio ya wênekêşiyê bi cureyê nivîsa gallery, rûpeleke bookingê, û formeke têkiliyê ava bike.*
- *Malpereke xwaringehê bi menuyeke online, demên vekirinê, û formeke pirsîna rezervasyona masê biafirîne.*
- *Malpereke şêwirmendiya freelancer bi rûpelên xizmetan, beşa portfolio, û blogê saz bike.*
- *Bi karanîna site builder formeke têkiliyê li rûpela Contact zêde bike.*
- *Piştî ku lîsteya kontrola destpêkirina malperê hate erêkirin, bîranîneke SMSê ji têkiliya stakeholder a veavakirî re bişîne.*

---

### Design Studio

**Baldarî:** Taybetkirina dîtbarî — reng, tîpografî, CSS, û qalibên blokan.

**Amûrên berdest:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Tiştên ku baş dike:**
- Sepandina presetên theme yên bi nav (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Rastkirina hûr a tîpografiya gerdûnî û paletên rengan bi rêya theme.json
- Têxistina CSS a taybet ji bo overrideên taybet ên brandê
- Girtina screenshot a rûpelekê û nirxandina wê ji bo pirsgirêkên dîzaynê

**Pêşniyarên destpêkê:**
- *Preset a warm-editorial bisepîne û paşê rengê sereke bike #2d6a4f.*
- *Screenshot a homepageê bigire û ji min re bêje tu çi baştir dikî.*
- *Qalibeke bloka hero ya ji nû ve bikaranînê biafirîne bi wêneyê paşxaneyê ya firehiya tevahî û sernavê navendî.*

### Plugin Manager

**Baldarî:** Dîtin, sazkirin, û rêvebirina pluginên WordPress.

**Amûrên berdest:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Tiştên ku baş dike:**
- Pêşniyarkirina plugin a herî baş ji bo rewşeke bikaranînê ya hatî danasîn
- Sazkirina pakêtên şiyanê ji registry
- Gerîn di katalogê şiyanên berdest de li gorî kategoriyê

**Pêşniyarên destpêkê:**
- *Plugin a herî baş ji bo directory a membershipê çi ye?*
- *Pakêta şiyanên WooCommerce saz bike.*
- *Hemû pakêtên şiyanê yên ecommerce yên berdest nîşanî min bide.*

---

### Support Assistant

**Baldarî:** Bersivdana pirsan li ser naveroka malperê, mîheng, û veavakirina WordPress.

**Amûrên berdest:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ew çi baş dike:**
- Lêgerîna mîheng û vebijarkên heyî yên malperê
- Şirovekirina ku kîjan cureyên nivîsan, taksonomî û menu li ser malperê hatine mîhengkirin
- Bersivdana pirsên "ev mîheng çi dike?" bi xwendina nirxên zindî
- Kar kirin wekî qatek teşhîskirina tenê-xwendin berî guherandinê

**Pêşniyarên destpêkê:**
- *Kîjan plugin û mîheng niha li ser vê malperê çalak in?*
- *Hemû cureyên nivîsên taybet ên li ser vê malperê tomarbûyî navnîş bike.*
- *Kîjan menuên navîgasyonê hene û li ku hatine veqetandin?*

---

## Yekbûnên Otomasyonê yên Superdav

Dema yekbûnên Superdav AI Agent v1.18.0 hatibin mîhengkirin, ajanên navxweyî dikarin beşdarî herikînên xebatê yên otomasyonê yên ewletir û bi bernameyê re agahdar bibin:

- **Amûrên xwendina Google Calendar** dihêlin ajan berî nivîsandina xebata şopandinê salname û bûyerên mîhengkirî kontrol bikin.
- **Nexşandina têkilî û beşdaran** alîkar dike ku beşdarên bûyerê bi bikarhênerên WordPress an têkiliyên naskirî re werin lihevkirin.
- **Deriyên pejirandina mirovan** çalakiyên hestiyar radiwestînin heta bikarhênerek destûrdar wan binirxîne û piştrast bike.
- **Tomarên bîranînê** asteng dikin ku dema karên bernamekirî ji nû ve biceribînin an dubare bibin agahdarîyên ducar werin şandin.
- **Agahdarîyên TextBee SMS** tenê dema nasnameyên SMS û destûrên herikîna xebatê çalak bin peyamên nivîskî yên mîhengkirî dişînin.

Herikîna xebatê ya pêşniyarkirî: ji ajanê bipirse ku peyam an çalakiyê amade bike, daxwaza pejirandinê binirxîne, paşê bihêle çalakiya pejirandî bidome. Ji bo bîranînên dubare, deduplication a bîranînê çalak bihêle da ku heman bûyer an têkilî gelek caran agahdar nebe.

---

## Taybetkirina Ajanan

Her ajanê navxweyî dikare bi rêya filter a `gratis_ai_agent_agents` were berfirehkirin an were guhertin.

### Zêdekirina daxwaznameya pergalê ya taybet li ajanekî heyî

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Tomarkirina ajanekî nû

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

Ajanê nû tavilê piştî ku filter bixebite di Hilbijêrê Ajanê de xuya dibe.

### Rakirina ajanekî navxweyî

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
