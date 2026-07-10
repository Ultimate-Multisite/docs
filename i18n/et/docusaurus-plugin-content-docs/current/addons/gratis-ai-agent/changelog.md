---
title: Muudatuste logi
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Muudatuste logi {#changelog}

## 1.9.0 — Välja antud 2026-04-28 {#190--released-on-2026-04-28}

### Uus {#new}

- **`create_contact_form` võimekus** — loob kontaktivormi, kasutades aktiivset vormi pluginat (Contact Form 7, WPForms, Fluent Forms või Gravity Forms), ja tagastab shortcode’i, mis on valmis lisamiseks mis tahes postitusse või lehele.
- **`set_featured_image` võimekus** — määrab postitusele või lehele esiletõstetud pildi olemasoleva Media Library manuse ID või kaug-URL-i põhjal; impordib pildi automaatselt, kui esitatakse URL.
- **`batch_create_posts` võimekus** — loob ühe võimekuse kutsega mitu postitust. Toetab samu parameetreid nagu `create_post`, raporteerib iga postituse õnnestumise/ebaõnnestumise ja sisaldab valikulist `stop_on_error` režiimi.
- **`page_template` parameeter** — lisatud funktsioonidele `create_post` ja `update_post`. Määrab loomise või uuendamise ajal PHP lehemalli faili (nt `page-full-width.php`). Anna `update_post`-ile tühi string, et taastada theme’i vaikeseade.
- **Kliendipoolsed kuvatõmmise võimekused** — `capture_screenshot`, `compare_screenshots` ja `review_page_design`. Jäädvusta live-lehtedest täis- või vaateakna kuvatõmmiseid serveripoolse headless-brauseri kaudu, võrdle kahte kuvatõmmist ja saa AI loodud disainiülevaade, mis hõlmab paigutust, tüpograafiat, värvi ja ligipääsetavust.
- **Viis sisseehitatud agenti** — Content Writer, Site Builder, Design Studio, Plugin Manager ja Support Assistant. Igal agentil on spetsiaalne tööriistakomplekt, kohandatud süsteemiviip ja alustamissoovitused. Vahetatav vestluse päises oleva uue **Agent Picker** kaudu. Vaata [Sisseehitatud agendid](../../user-guide/configuration/built-in-agents).
- **Funktsioonilipud** — uus **Settings → Feature Flags** sakk ligipääsukontrolli lülititega (piira administraatoritele, piira võrguhalduritele, tellija ligipääs, keela mitteliikmetele) ja brändingu valikutega (peida jaluse omistus, kohandatud agendi nimi, peida agentide valija, kasuta saidi ikooni vestluse avatarina). Vaata [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Viimase seansi taastamine** — vestluspaneel laadib nüüd lehe laadimisel ja vidina avamisel automaatselt uuesti kõige värskema vestluse, nii et kontekst ei kao lehtede vahel liikudes kunagi.
- **Plugina tegevuslingid** — kiirlingid Settings ja Abilities Registry juurde ilmuvad nüüd WordPressi **Plugins → Installed Plugins** kuval plugina kirjelduse all.

### Täiustatud {#improved}

- **Pildiallika uuestiproovimine** — agent proovib nüüd enne AI loodud pildile tagasilangemist allalaadimise ebaõnnestumisel uuesti kõiki seadistatud tasuta pildiallikaid.
- **Mudeli infopaneel** — alati nähtav vestluse päises; ei peideta enam pärast esimest sõnumit.
- **Automaatkerimise käitumine** — automaatkerimine peatub, kui kasutaja kerib üles lugemiseks; ilmub ujuv **Keri alla** nupp ja see sulgub automaatselt, kui kasutaja jõuab uusima sõnumini.
- **Agent Picker UI** — ümber kujundatud vormitabeli ülekattena koos iga agendi ikoonidega, muutes agentide kiire tuvastamise ja vahetamise lihtsamaks.
- **Laisalt laaditavad JS-tükid** — vestlusvidina algne JavaScripti pakett on nüüd jagatud laisalt laaditavateks tükkideks, vähendades algsete pakettide suurust 75–90%.
- **Vestlusvidina ümberkujundus** — ühtne AI ikoon asendab varasema kohandatud avatari; kooskõlas sisseehitatud agentide süsteemiga.
- **URL-ide linkideks muutmine** — süsteemisõnumites ja veateate mullides ilmuvad URL-id renderdatakse nüüd klõpsatavate linkidena.

### Parandatud {#fixed}

- **Võimekuste leitavus** — parandatud kirjeldused, süsteemiviiba viited ja nimeruumi joondus, et kõik võimekused ilmuksid usaldusväärselt agendi tööriistade loendis.
- **Pakkujate vahemälu** — pakkujad salvestatakse nüüd saidiüleselt vahemällu versiooniloenduri kaudu, vältides aegunud pakkujate probleeme multisite-võrkudes.
- **`ability_invalid_output`** — lahendatud 12 võimekuse käsitlejas; kõik tagastavad korrektselt struktureeritud JSON-vastused.
- **`pending_client_tool_calls` konveier** — ühendatud otsast lõpuni, nii et kliendipoolsed tööriistakutsed lõpevad õigesti ja tagastavad tulemused mudelile.
- **Ajaloo sahtel** — tagasipööramatud muudatused on tagasipööramise loendist välja jäetud; link **Vaata täielikku ajalugu** töötab nüüd õigesti.
- **Muudatuste/tagasipööramise süsteem** — parandatud viis eraldi viga ja ühendatud uue adminiliidese alla.
- **Settings salvestamise teavitus** — snackbar-teavitus ilmub nüüd usaldusväärselt pärast **Save Settings** klõpsamist.
- **Prügikasti kontekstimenüü** — lisatud valik **Kustuta jäädavalt**, et üksusi saaks lõplikult kustutada ilma prügikasti vaatesse jäämata.
- **Muuda ja saada uuesti** — muutmise ikoonil klõpsamine viib nüüd muutmisrežiimi ainult klõpsatud sõnumi, mitte kõik lõime sõnumid.
- **Vestluse paigutuse kõrgus** — vestluspaneel kohandab oma kõrgust, kui plugina lisatud sisu (adminiteated, bännerid) ilmub lehe kohale, vältides sisestusala ekraanilt välja tõukamist.

---

## 1.4.0 — Välja antud 2026-04-09 {#140--released-on-2026-04-09}

### Uus {#new-1}

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — käivitab käsurealt Agent Capabilities v1 benchmark suite’i CI torujuhtmete ja mudeli hindamise töövoogude jaoks. Toetab üksikküsimuse käivitusi, pakkuja/mudeli ülekirjutusi ning JSON/CSV väljundit.
- **Agent Capabilities v1 benchmark suite** — struktureeritud komplekt keerukaid, mitmesammulisi viipasid, mis testivad kogu võimekuste ulatust, koos skoorimise ning tokenite/kestuse aruandlusega.
- **Kohandatud postitusetüübi võimekused** — `register_post_type`, `list_post_types`, `delete_post_type`. Registreeringud püsivad taaskäivituste vahel options-tabeli kaudu.
- **Kohandatud taksonoomia võimekused** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Toetab hierarhilisi ja lamedaid taksonoomiaid koos valikuliste rewrite-slugidega.
- **Disainisüsteemi võimekused** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Sisaldab viit kureeritud eelseadistust: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles võimekused** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Loeb ja kirjutab theme.json väärtusi WordPress Global Styles API kaudu.
- **Navigatsioonimenüü haldamise võimekus** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Toetab pesastatud menüüsid ja theme asukoha määramist.
- **Valikute haldamise võimekus** — `get_option`, `set_option`, `delete_option`, `list_options`. Sisaldab sisseehitatud ohutusblokeerimisloendit, mis kaitseb kriitilisi WordPress valikuid muutmise eest.
- **Paigaldatavate võimekuste register** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Avasta ja aktiveeri võimekuspakke, mida levitatakse WordPress pluginate kujul.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Mitmefaasilised saidi koostamise plaanid pluginate avastamise, sammuväljundi viidete, edenemise jälgimise ja autonoomse veataastega.
- **Restorani veebisaidi benchmark-küsimus** (`q-restaurant-website`) — läbiv test, mis katab CPT registreerimise, disainisüsteemi, navigatsiooni ja plugina avastamise.
- **AI provider connector pluginad** lisatud WordPress Playground blueprint’idele kiiremaks lokaalse arenduskeskkonna seadistamiseks.

### Täiustatud {#improved-1}

- README uuendatud AI provider connector dokumentatsiooni ja seadistusjuhistega.

### Parandatud {#fixed-1}

- 25 PHPUnit testi tõrget `main` harus lahendatud.
- GitHub releases URL-i vorming failis `blueprint.json` parandatud.
- Ülesande ID-de ümbernummerdamine, et vältida kokkupõrkeid vanade ID-dega.

---

## 1.3.x {#13x}

_Varasema versiooni märkmeid hoitakse plugina repositooriumis._
