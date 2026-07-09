---
title: Integratutako agenteak
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Integratutako agenteak

Gratis AI Agent v1.9.0-k bost agente integratu dakartza, bakoitza tresna multzo fokalizatu batekin, egokitutako sistemaren prompt batekin eta arlo horretako ohiko zereginetarako egokitutako hasierako iradokizunekin aurrez konfiguratuta. Agenteen artean aldatzeak laguntzaileak zer egin dezakeen eta nola erantzuten duen aldatzen du — zure aldetik inolako konfiguraziorik gabe. Superdav AI Agent v1.18.0-k egutegiaren araberako tresnak, oroigarri-erregistroak, onespen-ateak eta SMS jakinarazpenak gehi diezazkieke lan-fluxu horiei, erlazionatutako integrazioak konfiguratuta daudenean.

## Zer da agente bat?

Agente bakoitza izendatutako konfigurazio-profil bat da, honako hauek konbinatzen dituena:

- **Tresnak** — agenteak deitzeko baimena duen gaitasunak (adibidez, Eduki Idazle batek argitalpenak sortzeko gaitasunetarako sarbidea du; Diseinu Estudio batek CSS eta theme.json gaitasunetarako sarbidea du)
- **Sistemaren prompta** — agentearen tonua, lehentasunak eta mugak ezartzen dituzten jarraibideak
- **Iradokizunak** — txat-interfazean erakusten diren aurrez idatzitako promptak, azkar hasten laguntzeko

## Agent Picker-era sartzea

1. Ireki **Gratis AI Agent** panela WordPress administrazioaren alboko barran.
2. Egin klik txat-goiburuaren goiko ezkerreko **agentearen ikonoan** (ikonoa aldatu egiten da agente aktiboa islatzeko).
3. **Agent Picker** inprimaki-taula gainjartze gisa irekitzen da. Agente bakoitza bere ikonoarekin, izenarekin eta lerro bateko deskribapenarekin zerrendatzen da.
4. Egin klik agente baten errenkadan aktibatzeko. Txat-goiburua berehala eguneratzen da.

Agenteak elkarrizketa erdian ere alda ditzakezu — agente berriaren sistemaren prompta hurrengo mezutik aurrera aplikatzen da.

## Bost agente integratuak

### Eduki Idazlea

**Fokua:** Argitalpenak, orrialdeak eta kontaktu-inprimakiak sortzea eta editatzea.

**Eskuragarri dauden tresnak:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrazioak gaituta daudenean, konfiguratutako egutegi-testuingurua, onespen-ateak, oroigarriak eta SMS jakinarazpen-tresnak ere erabilgarri egon daitezke onartutako lan-fluxuetarako.

**Zer egiten du ondo:**
- Blog-argitalpenak zirriborratzea eta argitaratzea, briefing edo eskema batetik abiatuta
- Gune berri baterako landing page sortak sortzea
- Kontaktu- eta kontsulta-inprimakiak eraikitzea
- Argitalpenetan irudi nabarmenduak ezartzea URL batetik edo bilaketatik abiatuta
- Konfiguratutako Google Calendar testuingurutik ekitaldiaren jarraipen-mezuak zirriborratzea, eta gero onespenerako pausatzea jakinarazpenak bidali aurretik

**Hasierako iradokizunak:**
- *Idatzi 500 hitzeko blog-argitalpen bat WordPress multisite-ren onurei buruz.*
- *Sortu Guri buruz, Zerbitzuak eta Kontaktua orrialdeak eta argitaratu.*
- *Gehitu erreserba-kontsulta inprimaki bat Kontaktua orrialdean.*
- *Zirriborratu oroigarri bat biharko konfiguratutako egutegi-ekitaldiko parte-hartzaileentzat eta itxaron onespena bidali aurretik.*

---

### Gune Eraikitzailea

**Fokua:** Webgune osoa sortzea prompt bakar batetik abiatuta.

**Eskuragarri dauden tresnak:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0-rekin, konfiguratutako kudeatutako zerbitzuko, onespeneko, oroigarriko, egutegiko eta SMS tresnak erabilgarri egon daitezke administratzaileek gaitzen dituzten lekuetan.

**Zer egiten du ondo:**
- Deskribatutako negozio mota baterako fase anitzeko gune-eraikuntza plan bat sortzea
- Fase bakoitza autonomoki exekutatzea — egitura, edukia, nabigazioa, diseinua
- Planaren erdian erroreetatik berreskuratzea, eskuzko esku-hartzerik eskatu gabe
- Gomendatutako pluginak instalatzea eraikuntzaren parte gisa
- Kontaktu-inprimakiak zuzenean txat-interfazetik sortzea (Superdav AI Agent v1.10.0+)
- Abiarazte-oroigarriak edo parte-hartzaileen jarraipena koordinatzea jakinarazpen bikoizturik gabe, onespen-ateak eta oroigarri-erregistroak gaituta daudenean

**Hasierako iradokizunak:**
- *Eraiki argazkilaritza-portfolio gune bat galeria argitalpen mota batekin, erreserba-orrialde batekin eta kontaktu-inprimaki batekin.*
- *Sortu jatetxe-webgune bat online menuarekin, ordutegiekin eta mahai-erreserbarako kontsulta-inprimaki batekin.*
- *Konfiguratu freelance aholkularitza gune bat zerbitzu-orrialdeekin, portfolio atal batekin eta blog batekin.*
- *Gehitu kontaktu-inprimaki bat Kontaktua orrialdera gune-eraikitzailea erabiliz.*
- *Gunea abiarazteko egiaztapen-zerrenda onartu ondoren, bidali SMS oroigarri bat konfiguratutako interesdunaren kontaktura.*

---

### Diseinu Estudioa

**Fokua:** Ikusizko pertsonalizazioa — koloreak, tipografia, CSS eta bloke-ereduak.

**Eskuragarri dauden tresnak:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Zer egiten du ondo:**
- Izendatutako tema aurrezarpenak aplikatzea (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Tipografia globala eta kolore-paleta doitzea theme.json bidez
- CSS pertsonalizatua txertatzea markarako berariazko gainidazketetarako
- Orrialde baten pantaila-argazkia hartzea eta diseinu-arazoak aztertzea

**Hasierako iradokizunak:**
- *Aplikatu warm-editorial aurrezarpena eta gero ezarri kolore nagusia #2d6a4f gisa.*
- *Hartu hasiera-orriaren pantaila-argazki bat eta esan zer hobetuko zenukeen.*
- *Sortu berrerabil daitekeen hero bloke-eredu bat zabalera osoko atzeko planoko irudi batekin eta erdiratutako izenburuarekin.*

### Plugin Manager

**Fokua:** WordPress pluginak aurkitzea, instalatzea eta kudeatzea.

**Eskuragarri dauden tresnak:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Zer egiten du ondo:**
- Deskribatutako erabilera-kasu baterako plugin onena gomendatzea
- Erregistrotik gaitasun paketeak instalatzea
- Eskuragarri dagoen gaitasunen katalogoa kategoriaren arabera arakatzea

**Hasierako iradokizunak:**
- *Zein da bazkidetza-direktorio baterako plugin onena?*
- *Instalatu WooCommerce gaitasunen paketea.*
- *Erakutsi eskuragarri dauden ecommerce gaitasun pakete guztiak.*

---

### Laguntzailea

**Fokua:** Gune-edukiari, ezarpenei eta WordPress konfigurazioari buruzko galderak erantzutea.

**Eskuragarri dauden tresnak:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Ondo egiten duena:**
- Uneko gunearen ezarpenak eta aukerak bilatzea
- Gunean zer bidalketa mota, taxonomia eta menu konfiguratuta dauden azaltzea
- "zer egiten du ezarpen honek?" galderak erantzutea, zuzeneko balioak irakurriz
- Aldaketak egin aurretik irakurtzeko soilik den diagnostiko-geruza gisa jardutea

**Hasteko iradokizunak:**
- *Zer plugin eta ezarpen daude aktibo une honetan gune honetan?*
- *Zerrendatu gune honetan erregistratutako bidalketa mota pertsonalizatu guztiak.*
- *Zer nabigazio-menu daude eta non daude esleituta?*

---

## Superdav Automation integrazioak

Superdav AI Agent v1.18.0 integrazioak konfiguratuta daudenean, integratutako agenteek ordutegia kontuan hartzen duten automatizazio-lan-fluxu seguruagoetan parte har dezakete:

- **Google Calendar irakurtzeko tresnek** agenteei konfiguratutako egutegiak eta gertaerak aztertzen uzten diete, jarraipen-lana zirriborratu aurretik.
- **Kontaktuen eta parte-hartzaileen mapaketak** gertaeretako parte-hartzaileak WordPress erabiltzaileekin edo ezagutzen diren kontaktuekin parekatzen laguntzen du.
- **Giza onespen-ateek** ekintza sentikorrak pausatzen dituzte, baimendutako erabiltzaile batek berrikusi eta berretsi arte.
- **Oroigarri-erregistroek** jakinarazpen bikoiztuak saihesten dituzte programatutako lanak berriro saiatzen edo errepikatzen direnean.
- **TextBee SMS jakinarazpenek** konfiguratutako testu-mezuak bidaltzen dituzte soilik SMS kredentzialak eta lan-fluxuaren baimenak gaituta daudenean.

Gomendatutako lan-fluxua: eskatu agenteari mezua edo ekintza prestatzeko, berrikusi onespen-eskaera, eta ondoren baimendu onartutako ekintzari berriz ekitea. Oroigarri errepikakorretarako, mantendu oroigarrien desbikoiztea gaituta, gertaera edo kontaktu bera behin eta berriro jakinaraz ez dadin.

---

## Agenteak pertsonalizatzea

Integratutako agente bakoitza hedatu edo ordeztu daiteke `gratis_ai_agent_agents` iragazkiaren bidez.

### Lehendik dagoen agente bati sistema-prompt pertsonalizatua gehitzea

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Agente berri bat erregistratzea

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

Agente berria Agent hautatzailean agertzen da iragazkia exekutatu eta berehala.

### Integratutako agente bat kentzea

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
