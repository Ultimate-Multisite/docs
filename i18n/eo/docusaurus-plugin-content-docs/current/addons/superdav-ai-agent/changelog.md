---
title: Ŝanĝoprotokolo
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Ŝanĝoprotokolo {#changelog}

## 1.18.0 — Eldonita la 2026-06-29 {#1180--released-on-2026-06-29}

### Novaĵoj {#new}

- **Google Calendar iloj** — legu agorditajn kalendarojn kaj eventojn por horar-konsciaj aŭtomatigoj
- **Kontaktomapado kaj helpiloj por ĉeestantoj** — kongruigu kalendarajn partoprenantojn kun retejaj uzantoj kaj kontaktoj
- **Pordoj por homa aprobo kaj memorigaj registroj** — paŭzigu aŭtomatigojn por revizio kaj evitu duoblajn sciigojn
- **TextBee SMS provizanto** — sendu agorditajn tekstmesaĝajn sciigojn per TextBee
- **Altnivela kunula pakaĵo** — aldonu ilojn por fidinda-programista dosiersistemo, datumbazo, WP-CLI, REST-distribuilo, plugin-konstruilo, git-momentkopio, uzantadministrado kaj komparnormo, distribuitajn aparte de la WordPress.org-konstruaĵo

### Plibonigita {#improved}

- **Agordo de administrata Superdav servo** — aldonu gastigitajn servajn endpoints kaj aŭtomatan konektan proviziadon por subtenataj retejoj
- **Eldona pakado** — konstruu apartajn kernajn kaj Altnivelajn ZIP-ojn, publikigu ambaŭ en GitHub, kaj sendu nur la kernan pakaĵon al WordPress.org

### Korektita {#fixed}

- **Fidindeco de AI-petoj** — plibonigu modelan elekton, petajn tempolimojn, defaŭltan agordan modelon, traktadon de rezonada teksto kaj reprovan gvidon por nevalidaj ilvokoj
- **Plifortigo de kalendaro kaj memorigiloj** — plifortigu Google Calendar tokens kaj memorigilan malduobligon
- **Enkonduko kaj aprobo-rekomencoj** — korektu frontend-enkondukajn lanĉojn kaj konfirmitajn kapablo-rekomencojn
- **Problemoj de WordPress.org-paka revizio** — traktu paka-reviziajn rimarkojn por la kerna eldono

## 1.16.0 — Eldonita la 2026-05-20 {#1160--released-on-2026-05-20}

### Novaĵoj {#new-1}

- **Kapablo Generi Logo SVG** — Theme Builder nun povas generi kaj enkorpigi proprajn logo-SVG-ojn kun nomspac-sekura sanigado
- **Foto-alŝuto en malkovra intervjuo** — Theme Builder malkovra intervjuo nun inkluzivas foto-alŝutan paŝon por pli riĉa dezajna kunteksto
- **Kapablo Validigi Paletran Kontraston** — kontrolu kolorparojn pri WCAG-konformeco antaŭ ol apliki al theme
- **Gastigadaj menuoj** — Theme Builder nun povas generi strukturitajn manĝaĵajn kaj trinkaĵajn menu-paĝojn por gastigadaj entreprenoj
- **Bildigo de labortabla kaj poŝtelefona antaŭrigardo** — antaŭrigardu vian dezajnon sur labortablaj kaj poŝtelefonaj aparatoj dum elekto de dezajno-direkto
- **Parametro por navigada etikedo** — la kapablo Krei Menuon nun subtenas apartan `navigation_label` sendependan de la paĝtitolo
- **Havebleco de Tier 1 ilo** — sd-ai-agent/site-scrape nun estas Tier 1 ilo defaŭlte disponebla en Theme Builder

### Korektita {#fixed-1}

- **AI Client kaŝmemoro** — nun subtenata de transients por persisto inter petoj, malhelpante datumperdon dum longdaŭraj agentaj taskoj
- **Ago-ligiloj en plugin-vico** — korektitaj kaj renomitaj por klareco

## 1.10.0 — Eldonita la 2026-05-05 {#1100--released-on-2026-05-05}

### Novaĵoj {#new-2}

- **Tavily interreta serĉo** — aldonu Tavily kiel serĉprovizanton por pli riĉaj interretaj serĉrezultoj apud Brave Search
- **Theme-konsciaj enkonstruitaj kapabloj** — gvidiloj pri kapabloj por Block Themes, Classic Themes, Kadence Blocks kaj Kadence Theme nun venas kun la plugin
- **Kapablo pri kontaktformularo por reteja konstruado** — aldonu kontaktformularon al ajna paĝo rekte el la babilinterfaco

### Plibonigita {#improved-1}

- **WooCommerce integriĝo refaktorita** — nun uzas indiĝenajn WooCommerce API-ojn por pli bona fidindeco kaj kongrueco
- **Provizantolisto refreŝiĝas aŭtomate** — kiam ajna plugin estas aktivigita aŭ malaktivigita

### Korektita {#fixed-2}

- **navigate-to kapablo** — korektis senfinan reŝargan buklon en kelkaj administraj paĝoj
- **list-posts kapablo** — nun ĝuste solvas kategorio- kaj etikednomojn al slugs
- **WP-CLI komandoj** — restarigis mankantajn nomspacajn aliasojn post antaŭa refaktorado
- **Eventaŭtomatigo** — elegante traktas retejojn kie aŭtomatigaj tabeloj ankoraŭ ne estas kreitaj
- **memory-save kapablo** — nun uzas la ĝustan nomspacan prefikson en la sistema instrukciokonstruanto
- **Skalaraj ilrezultoj** — nun ĝuste envolvitaj antaŭ ol esti resenditaj al la AI
- **Uzostatistikoj** — nun ĝuste traktas la malnovan kapablo-ŝlosilan formaton dum ĝisdatigo de pli malnovaj versioj
