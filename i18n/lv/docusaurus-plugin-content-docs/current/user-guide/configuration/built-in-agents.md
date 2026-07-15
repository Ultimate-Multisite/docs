---
title: Iebūvētie aģenti
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Iebūvētie aģenti

Gratis AI Agent v1.9.0 tiek piegādāts ar pieciem iebūvētiem aģentiem, katrs iepriekš konfigurēts ar fokusētu rīku kopu, pielāgotu sistēmas uzvedni un sākuma ieteikumiem, kas atbilst bieži sastopamiem uzdevumiem attiecīgajā jomā. Pārslēgšanās starp aģentiem maina to, ko asistents var darīt un kā tas atbild — bez jebkādas konfigurēšanas no jūsu puses. Superdav AI Agent v1.18.0 var pievienot šīm darbplūsmām grafiku apzinošus rīkus, atgādinājumu ierakstus, apstiprināšanas vārtus un SMS paziņojumus, kad ir konfigurētas saistītās integrācijas.

## Kas ir aģents? {#what-is-an-agent}

Katrs aģents ir nosaukts konfigurācijas profils, kas apvieno:

- **Rīki** — spējas, kuras aģentam ir atļauts izsaukt (piem., satura autoram ir piekļuve ierakstu izveides spējām; dizaina studijai ir piekļuve CSS un theme.json spējām)
- **Sistēmas uzvedne** — norādījumi, kas nosaka aģenta toni, prioritātes un ierobežojumus
- **Ieteikumi** — iepriekš uzrakstītas uzvednes, kas tiek rādītas tērzēšanas saskarnē, lai palīdzētu ātri sākt darbu

## Piekļuve aģentu izvēlētājam {#accessing-the-agent-picker}

1. Atveriet **Gratis AI Agent** paneli WordPress administrēšanas sānjoslā.
2. Noklikšķiniet uz **aģenta ikonas** tērzēšanas galvenes augšējā kreisajā stūrī (ikona mainās, lai atspoguļotu aktīvo aģentu).
3. Tiek atvērts **aģentu izvēlētājs** kā formas tabulas pārklājums. Katrs aģents ir uzskaitīts ar tā ikonu, nosaukumu un vienas rindiņas aprakstu.
4. Noklikšķiniet uz aģenta rindas, lai to aktivizētu. Tērzēšanas galvene tiek nekavējoties atjaunināta.

Varat arī pārslēgt aģentus sarunas vidū — jaunā aģenta sistēmas uzvedne stājas spēkā no nākamā ziņojuma.

## Pieci iebūvētie aģenti {#the-five-built-in-agents}

### Satura autors {#content-writer}

**Fokuss:** Ierakstu, lapu un kontaktformu izveide un rediģēšana.

**Pieejamie rīki:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Ja ir iespējotas Superdav AI Agent v1.18.0 integrācijas, apstiprinātām darbplūsmām var būt pieejams arī konfigurēts kalendāra konteksts, apstiprināšanas vārti, atgādinājumi un SMS paziņojumu rīki.

**Ko tas dara labi:**
- Emuāra ierakstu melnrakstu sagatavošana un publicēšana pēc īsa apraksta vai plāna
- Jaunas vietnes nosēšanās lapu pakešu izveide
- Kontaktformu un pieprasījumu formu veidošana
- Izcēluma attēlu iestatīšana ierakstiem no URL vai meklēšanas
- Pasākuma pēcpārbaudes ziņojumu melnrakstu sagatavošana no konfigurēta Google Calendar konteksta, pēc tam apturēšana apstiprināšanai pirms paziņojumu nosūtīšanas

**Sākuma ieteikumi:**
- *Uzraksti 500 vārdu emuāra ierakstu par WordPress multisite priekšrocībām.*
- *Izveido Par mums, Pakalpojumu un Kontaktu lapu un publicē tās.*
- *Pievieno rezervācijas pieprasījuma formu Kontaktu lapai.*
- *Sagatavo atgādinājuma melnrakstu dalībniekiem par rītdienas konfigurēto kalendāra notikumu un pirms nosūtīšanas gaidi apstiprinājumu.*

---

### Vietnes veidotājs {#site-builder}

**Fokuss:** Pilnīga tīmekļa vietnes izveide no vienas uzvednes.

**Pieejamie rīki:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Ar Superdav AI Agent v1.18.0 var būt pieejami konfigurēti pārvaldītā pakalpojuma, apstiprināšanas, atgādinājumu, kalendāra un SMS rīki, ja administratori tos iespējo.

**Ko tas dara labi:**
- Vairāku fāžu vietnes izveides plāna ģenerēšana aprakstītam uzņēmējdarbības veidam
- Katras fāzes autonoma izpilde — struktūra, saturs, navigācija, dizains
- Atkopšanās no kļūdām plāna vidū bez manuālas iejaukšanās
- Ieteikto pluginu instalēšana kā daļa no izveides
- Kontaktformu izveide tieši no tērzēšanas saskarnes (Superdav AI Agent v1.10.0+)
- Palaišanas atgādinājumu vai dalībnieku pēcpārbaudes koordinēšana bez dublētiem paziņojumiem, kad ir iespējoti apstiprināšanas vārti un atgādinājumu ieraksti

**Sākuma ieteikumi:**
- *Izveido fotogrāfijas portfolio vietni ar galerijas ieraksta tipu, rezervācijas lapu un kontaktformu.*
- *Izveido restorāna tīmekļa vietni ar tiešsaistes ēdienkarti, darba laiku un galdiņa rezervācijas pieprasījuma formu.*
- *Iestati ārštata konsultāciju vietni ar pakalpojumu lapām, portfolio sadaļu un emuāru.*
- *Pievieno kontaktformu Kontaktu lapai, izmantojot vietnes veidotāju.*
- *Pēc vietnes palaišanas kontrolsaraksta apstiprināšanas nosūti SMS atgādinājumu konfigurētajai ieinteresētās personas kontaktpersonai.*

---

### Dizaina studija {#design-studio}

**Fokuss:** Vizuāla pielāgošana — krāsas, tipogrāfija, CSS un bloku šabloni.

**Pieejamie rīki:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Ko tas dara labi:**
- Nosauktu theme priekšiestatījumu piemērošana (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globālās tipogrāfijas un krāsu palešu precizēšana, izmantojot theme.json
- Pielāgota CSS ievietošana zīmolam specifiskām pārrakstēm
- Lapas ekrānuzņēmuma uzņemšana un tā pārskatīšana dizaina problēmu noteikšanai

**Sākuma ieteikumi:**
- *Piemēro warm-editorial priekšiestatījumu un pēc tam iestati primāro krāsu uz #2d6a4f.*
- *Uzņem sākumlapas ekrānuzņēmumu un pasaki, ko tu uzlabotu.*
- *Izveido atkārtoti izmantojamu hero bloka šablonu ar pilna platuma fona attēlu un centrētu virsrakstu.*

### Pluginu pārvaldnieks {#plugin-manager}

**Fokuss:** WordPress pluginu atklāšana, instalēšana un pārvaldība.

**Pieejamie rīki:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Ko tas dara labi:**
- Labākā plugina ieteikšana aprakstītam lietošanas gadījumam
- Spēju paku instalēšana no reģistra
- Pieejamā spēju kataloga pārlūkošana pēc kategorijas

**Sākuma ieteikumi:**
- *Kāds ir labākais plugins dalībnieku katalogam?*
- *Instalē WooCommerce spēju paku.*
- *Parādi man visas pieejamās ecommerce spēju pakas.*

---

### Atbalsta asistents {#support-assistant}

**Fokuss:** Atbilžu sniegšana uz jautājumiem par vietnes saturu, iestatījumiem un WordPress konfigurāciju.

**Pieejamie rīki:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ko tas dara labi:**
- Pašreizējo vietnes iestatījumu un opciju uzmeklēšana
- Skaidrošana, kādi ierakstu tipi, taksonomijas un izvēlnes ir konfigurētas vietnē
- Atbildēšana uz jautājumiem “ko dara šis iestatījums?”, nolasot aktuālās vērtības
- Kalpošana kā tikai lasāms diagnostikas slānis pirms izmaiņu veikšanas

**Sākuma ieteikumi:**
- *Kādi plugin un iestatījumi pašlaik ir aktīvi šajā vietnē?*
- *Uzskaiti visus pielāgotos ierakstu tipus, kas reģistrēti šajā vietnē.*
- *Kādas navigācijas izvēlnes pastāv, un kur tās ir piešķirtas?*

---

## Superdav automatizācijas integrācijas {#superdav-automation-integrations}

Kad Superdav AI Agent v1.18.0 integrācijas ir konfigurētas, iebūvētie agenti var piedalīties drošākās, grafiku apzinošās automatizācijas darbplūsmās:

- **Google Calendar lasīšanas rīki** ļauj agentiem pārbaudīt konfigurētos kalendārus un notikumus pirms turpmākā darba melnraksta sagatavošanas.
- **Kontaktu un dalībnieku kartēšana** palīdz sasaistīt notikumu dalībniekus ar WordPress lietotājiem vai zināmiem kontaktiem.
- **Cilvēka apstiprinājuma vārti** aptur sensitīvas darbības, līdz pilnvarots lietotājs tās pārskata un apstiprina.
- **Atgādinājumu ieraksti** novērš dublētus paziņojumus, kad ieplānotie darbi mēģina vēlreiz vai atkārtojas.
- **TextBee SMS paziņojumi** nosūta konfigurētas īsziņas tikai tad, kad ir iespējoti SMS akreditācijas dati un darbplūsmas atļaujas.

Ieteicamā darbplūsma: palūdziet agentam sagatavot ziņojumu vai darbību, pārskatiet apstiprinājuma uzvedni un pēc tam ļaujiet apstiprinātajai darbībai atsākties. Atkārtotiem atgādinājumiem turiet ieslēgtu atgādinājumu deduplikāciju, lai tas pats notikums vai kontakts netiktu informēts atkārtoti.

---

## Agentu pielāgošana {#customising-agents}

Katru iebūvēto agentu var paplašināt vai aizstāt, izmantojot `gratis_ai_agent_agents` filtru.

### Pielāgotas sistēmas uzvednes pievienošana esošam agentam {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Jauna agenta reģistrēšana {#registering-a-new-agent}

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

Jaunais agents parādās Agent Picker uzreiz pēc filtra izpildes.

### Iebūvēta agenta noņemšana {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
