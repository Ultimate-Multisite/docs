---
title: Aldaketen erregistroa
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Aldaketen erregistroa

## 1.9.0 — 2026-04-28an argitaratua {#190--released-on-2026-04-28}

### Berria {#new}

- **`create_contact_form` gaitasuna** — kontaktu-inprimaki bat sortzen du inprimaki-plugin aktiboa erabiliz (Contact Form 7, WPForms, Fluent Forms edo Gravity Forms), eta edozein sarrera edo orritan txertatzeko prest dagoen shortcode bat itzultzen du.
- **`set_featured_image` gaitasuna** — sarrera edo orri bati irudi nabarmendu bat esleitzen dio, lehendik dagoen Media Library eranskin-ID batetik edo urruneko URL batetik; URL bat ematen denean, irudia automatikoki inportatzen du.
- **`batch_create_posts` gaitasuna** — hainbat sarrera sortzen ditu gaitasun-dei bakar batean. `create_post`-en parametro berberak onartzen ditu, sarrera bakoitzeko arrakasta/hutsegitea jakinarazten du, eta aukerako `stop_on_error` modua du.
- **`page_template` parametroa** — `create_post` eta `update_post`-i gehitua. PHP orri-txantiloi fitxategi bat (adib. `page-full-width.php`) esleitzen du sortzean edo eguneratzean. Pasa kate huts bat `update_post`-i theme lehenetsira itzultzeko.
- **Bezero-aldeko pantaila-argazkien gaitasunak** — `capture_screenshot`, `compare_screenshots` eta `review_page_design`. Hartu zuzeneko orrien pantaila-argazki osoak edo viewport-ekoak zerbitzari-aldeko headless nabigatzaile baten bidez, alderatu bi pantaila-argazki, eta jaso AI bidez sortutako diseinu-berrikuspen bat, diseinua, tipografia, kolorea eta irisgarritasuna barne hartzen dituena.
- **Bost agente integratu** — Eduki-idazlea, Gune-eraikitzailea, Diseinu-estudioa, Plugin-kudeatzailea eta Laguntzaile-asistentea. Agente bakoitzak tresna multzo dedikatu bat, egokitutako sistema-prompt bat eta hasierako iradokizunak ditu. Aldatu txataren goiburuko **Agente-hautatzaile** berriaren bidez. Ikusi [Agente integratuak](../../user-guide/configuration/built-in-agents).
- **Funtzio-bandera** — **Ezarpenak → Funtzio-banderak** fitxa berria, sarbide-kontrolerako etengailuekin (administratzaileetara mugatu, sareko administratzaileetara mugatu, harpidedunen sarbidea, kide ez direnentzat desgaitu) eta marka-aukerak (oineko atribuzioa ezkutatu, agentearen izen pertsonalizatua, agente-hautatzailea ezkutatu, gunearen ikonoa txateko avatar gisa erabili). Ikusi [Gratis AI Agent ezarpenak](../../user-guide/administration/gratis-ai-agent-settings).
- **Berrezarri azken saioa** — txat-panela orain automatikoki berriro kargatzen du azken elkarrizketa orria kargatzean eta widget-a irekitzean; beraz, testuingurua ez da inoiz galtzen orrien arteko nabigazioetan.
- **Plugin ekintza-estekak** — Ezarpenetara eta Gaitasunen Erregistrora joateko esteka azkarrak orain WordPress-eko **Pluginak → Instalatutako pluginak** pantailan agertzen dira pluginaren deskribapenaren azpian.

### Hobetua {#improved}

- **Irudi-iturburuaren berriro saiatzea** — agenteak orain konfiguratutako doako irudi-iturburu guztiak berriro saiatzen ditu deskarga-hutsegitean AI bidez sortutako irudi batera jo aurretik.
- **Ereduaren informazio-panela** — beti ikusgai txataren goiburuan; ez da gehiago ezkutatzen lehen mezuaren ondoren.
- **Auto-scroll portaera** — auto-scroll gelditu egiten da erabiltzaileak gora korritzen duenean irakurtzeko; **Korritu behealdera** botoi flotagarri bat agertzen da eta automatikoki desagertzen da erabiltzailea azken mezura iristen denean.
- **Agente-hautatzailearen UI** — form-table gainjartze gisa birdiseinatua, agente bakoitzeko ikonoekin; horrek agenteak begiratu batean identifikatzea eta aldatzea errazten du.
- **Lazy-loaded JS zatiak** — txat-widgetaren hasierako JavaScript sorta orain lazy-loaded zatitan banatuta dago, hasierako sorten tamainak %75–90 murriztuz.
- **Txat-widgetaren birdiseinua** — AI ikono bateratuak aurreko avatar pertsonalizatua ordezkatzen du; agente integratuen sistemarekin koherentea da.
- **URL esteka-bihurketa** — sistema-mezuetan eta errore-mezuen burbuiletan agertzen diren URLak orain klikagarri diren esteka gisa errendatzen dira.

### Konponduta {#fixed}

- **Gaitasunen aurkigarritasuna** — deskribapenak, sistema-prompten erreferentziak eta namespace lerrokatzea zuzendu dira, gaitasun guztiak agentearen tresna-zerrendan fidagarritasunez ager daitezen.
- **Hornitzaileen cachea** — hornitzaileak orain gune osoan cacheatzen dira bertsio-kontagailu baten bidez, multisite sareetan hornitzaile zaharkituen arazoak saihestuz.
- **`ability_invalid_output`** — 12 gaitasun-kudeatzailetan konponduta; guztiek behar bezala egituratutako JSON erantzunak itzultzen dituzte.
- **`pending_client_tool_calls` pipelinea** — muturretik muturrera konektatua, bezero-aldeko tresna-deiak behar bezala osa daitezen eta emaitzak eredura itzul daitezen.
- **Historiaren tiradera** — itzuli ezin diren aldaketak itzultze-zerrendatik kanpo uzten dira; **Ikusi historia osoa** estekak orain behar bezala funtzionatzen du.
- **Aldaketak/itzultze sistema** — bost akats bereizi konpondu eta admin interfaze berriaren azpian bateratu dira.
- **Gorde ezarpenak toast-a** — snackbar jakinarazpena orain fidagarritasunez agertzen da **Gorde ezarpenak** sakatu ondoren.
- **Zakarrontziaren testuinguru-menua** — **Ezabatu behin betiko** aukera gehitu da, elementuak zakarrontzi-ikuspegitik irten gabe guztiz ezabatu ahal izateko.
- **Editatu eta berriro bidali** — editatzeko ikonoan klik egiteak orain editatze moduan sartzen du klik egindako mezua bakarrik, ez hari osoko mezu guztiak.
- **Txat-diseinuaren altuera** — txat-panela bere altuerara egokitzen da pluginak injektatutako edukia (admin oharrak, banner-ak) orriaren gainean agertzen denean, sarrera-eremua pantailatik kanpo bultzatzea saihestuz.

---

## 1.4.0 — 2026-04-09an argitaratua {#140--released-on-2026-04-09}

### Berria {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — Agent Capabilities v1 benchmark multzoa komando-lerrotik exekutatzen du, CI kanalizazioetarako eta modeloen ebaluazio-lan-fluxuetarako. Galdera bakoitzeko exekuzioak, hornitzaile/modelo gainidazketak eta JSON/CSV irteera onartzen ditu.
- **Agent Capabilities v1 benchmark suite** — gaitasunen azalera osoa lantzen duten urrats anitzeko prompt konplexuen multzo egituratua, puntuazioarekin eta token/iraupen txostenarekin.
- **Custom Post Type gaitasunak** — `register_post_type`, `list_post_types`, `delete_post_type`. Erregistroek berrabiarazteen artean irauten dute options taularen bidez.
- **Custom Taxonomy gaitasunak** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Taxonomia hierarkikoak eta lauak onartzen ditu, aukerako rewrite slug-ekin.
- **Design System gaitasunak** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Hautatutako bost preset biltzen ditu: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles gaitasunak** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. theme.json balioak irakurtzen eta idazten ditu WordPress Global Styles API bidez.
- **Navigation Menu kudeaketa-gaitasuna** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Menu habiaratuak eta theme kokapenen esleipena onartzen ditu.
- **Options Management gaitasuna** — `get_option`, `set_option`, `delete_option`, `list_options`. WordPress aukera kritikoak aldaketetatik babesten dituen segurtasun-blokeo-zerrenda integratua dauka.
- **Installable Abilities Registry** — `list_available_abilities`, `install_ability`, `recommend_plugin`. WordPress plugin gisa banatutako gaitasun-paketeak aurkitu eta aktibatu.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Fase anitzeko gune-eraikuntza planak, plugin aurkikuntzarekin, urratsen irteera-erreferentziekin, aurrerapen-jarraipenarekin eta erroreen berreskuratze autonomoarekin.
- **Jatetxe webgunearen benchmark galdera** (`q-restaurant-website`) — muturretik muturrerako proba, CPT erregistroa, design system, nabigazioa eta plugin aurkikuntza estaltzen dituena.
- **AI hornitzaile-konektore pluginak** gehitu dira WordPress Playground blueprint-etara, tokiko garapen-konfigurazio azkarragorako.

### Hobetua {#improved-1}

- README eguneratu da AI hornitzaile-konektoreen dokumentazioarekin eta konfigurazio-argibideekin.

### Konpondua {#fixed-1}

- `main` adarreko 25 PHPUnit proba-hutsegite konpondu dira.
- GitHub releases URL formatua `blueprint.json`-en zuzendu da.
- Ataza IDen berrzenbakitzea, ID zaharrekin talkak saihesteko.

---

## 1.3.x {#13x}

_Aurreko argitalpen-oharrak pluginaren biltegian mantentzen dira._
