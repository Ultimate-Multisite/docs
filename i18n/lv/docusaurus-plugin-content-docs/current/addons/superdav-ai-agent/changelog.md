---
title: Izmaiņu žurnāls
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Izmaiņu žurnāls

## 1.18.0 — Izlaists 2026-06-29 {#1180--released-on-2026-06-29}

### Jauns {#new}

- **Google Calendar rīki** — lasa konfigurētos kalendārus un notikumus grafiku apzinošām automatizācijām
- **Kontaktu kartēšana un dalībnieku palīgi** — saskaņo kalendāra dalībniekus ar vietnes lietotājiem un kontaktiem
- **Cilvēka apstiprinājuma vārti un atgādinājumu ieraksti** — aptur automatizācijas pārskatīšanai un izvairās no dublētiem paziņojumiem
- **TextBee SMS nodrošinātājs** — sūta konfigurētus īsziņu paziņojumus, izmantojot TextBee
- **Papildu pavadošā pakotne** — pievieno uzticama izstrādātāja failu sistēmas, datubāzes, WP-CLI, REST dispečera, plugin veidotāja, git momentuzņēmuma, lietotāju pārvaldības un veiktspējas testēšanas rīkus, kas tiek izplatīti atsevišķi no WordPress.org būvējuma

### Uzlabots {#improved}

- **Pārvaldītā Superdav pakalpojuma iestatīšana** — pievieno mitinātā pakalpojuma endpointus un automātisku savienojuma nodrošināšanu atbalstītām vietnēm
- **Izlaiduma iepakošana** — izveido atsevišķus pamata un Advanced ZIP failus, publicē abus GitHub un uz WordPress.org nosūta tikai pamata pakotni

### Labots {#fixed}

- **AI pieprasījumu uzticamība** — uzlabo modeļa izvēli, pieprasījumu taimautus, noklusējuma iestatīšanas modeli, spriešanas teksta apstrādi un atkārtota mēģinājuma norādījumus nederīgiem rīku izsaukumiem
- **Kalendāra un atgādinājumu nostiprināšana** — pastiprina Google Calendar tokenus un atgādinājumu deduplikāciju
- **Ievadapmācība un apstiprinājuma atsākšana** — labo frontend ievadapmācības palaišanu un apstiprināto spēju atsākšanu
- **WordPress.org iepakošanas pārskatīšanas problēmas** — risina iepakošanas pārskatīšanas atsauksmes pamata izlaidumam

## 1.16.0 — Izlaists 2026-05-20 {#1160--released-on-2026-05-20}

### Jauns {#new-1}

- **Logo SVG ģenerēšanas spēja** — Theme Builder tagad var ģenerēt un iegult pielāgotus logo SVG ar nosaukumvietām drošu sanitizāciju
- **Fotoattēla augšupielāde izpētes intervijā** — Theme Builder izpētes intervijā tagad ir iekļauts fotoattēla augšupielādes solis bagātākam dizaina kontekstam
- **Paletes kontrasta validēšanas spēja** — pārbauda krāsu pārus atbilstībai WCAG pirms to piemērošanas theme
- **Viesmīlības ēdienkartes** — Theme Builder tagad var ģenerēt strukturētas ēdienu un dzērienu ēdienkaršu lapas viesmīlības uzņēmumiem
- **Darbvirsmas un mobilā priekšskatījuma renderēšana** — priekšskatiet savu dizainu darbvirsmas un mobilajās ierīcēs dizaina virziena izvēles laikā
- **Navigācijas etiķetes parametrs** — Create Menu spēja tagad atbalsta atsevišķu `navigation_label`, kas ir nošķirts no lapas virsraksta
- **Tier 1 rīka pieejamība** — sd-ai-agent/site-scrape tagad ir Tier 1 rīks, kas pēc noklusējuma pieejams Theme Builder

### Labots {#fixed-1}

- **AI Client kešatmiņa** — tagad balstīta uz transients starppieprasījumu noturībai, novēršot datu zudumu ilgstošos agent uzdevumos
- **Plugin rindas darbību saites** — izlabotas un pārdēvētas skaidrībai

## 1.10.0 — Izlaists 2026-05-05 {#1100--released-on-2026-05-05}

### Jauns {#new-2}

- **Tavily interneta meklēšana** — pievieno Tavily kā meklēšanas nodrošinātāju bagātākiem interneta meklēšanas rezultātiem līdzās Brave Search
- **Theme apzinošas iebūvētās prasmes** — Block Themes, Classic Themes, Kadence Blocks un Kadence Theme prasmju ceļveži tagad tiek piegādāti kopā ar plugin
- **Vietnes veidotāja kontaktformas spēja** — pievieno kontaktformu jebkurai lapai tieši no tērzēšanas saskarnes

### Uzlabots {#improved-1}

- **WooCommerce integrācija pārstrādāta** — tagad izmanto natīvās WooCommerce API labākai uzticamībai un saderībai
- **Nodrošinātāju saraksts atsvaidzinās automātiski** — kad jebkurš plugin tiek aktivizēts vai deaktivizēts

### Labots {#fixed-2}

- **navigate-to spēja** — izlabots bezgalīgas pārlādes cikls dažās admin lapās
- **list-posts spēja** — tagad pareizi pārvērš kategoriju un tagu nosaukumus par slugiem
- **WP-CLI komandas** — atjaunoti trūkstošie nosaukumvietu aizstājvārdi pēc iepriekšējas pārstrādes
- **Notikumu automatizācija** — korekti apstrādā vietnes, kurās automatizācijas tabulas vēl nav izveidotas
- **memory-save spēja** — tagad izmanto pareizo nosaukumvietas prefiksu sistēmas instrukciju veidotājā
- **Skalāru rīku rezultāti** — tagad tiek pareizi ietīti pirms atgriešanas AI
- **Lietojuma statistika** — tagad pareizi apstrādā mantoto spējas atslēgas formātu, veicot jaunināšanu no vecākām versijām
