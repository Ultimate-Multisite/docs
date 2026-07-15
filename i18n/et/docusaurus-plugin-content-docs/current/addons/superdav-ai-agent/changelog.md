---
title: Muudatuste logi
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Muudatuste logi

## 1.18.0 — Avaldatud 2026-06-29 {#1180--released-on-2026-06-29}

### Uus {#new}

- **Google Calendar tööriistad** — loe seadistatud kalendreid ja sündmusi ajakavaga arvestavate automatiseerimiste jaoks
- **Kontaktide vastendamine ja osalejate abivahendid** — sobita kalendris osalejad saidi kasutajate ja kontaktidega
- **Inimese kinnituse väravad ja meeldetuletuste kirjed** — peata automatiseerimised ülevaatuseks ja väldi topeltteavitusi
- **TextBee SMS-i pakkuja** — saada seadistatud tekstisõnumite teavitusi TextBee kaudu
- **Täiustatud kaasapakett** — lisa usaldusväärse arendaja failisüsteemi-, andmebaasi-, WP-CLI-, REST-vahendaja-, pluginaehitaja-, git snapshot-, kasutajahaldus- ja jõudlustesti tööriistad, mida levitatakse WordPress.org-i versioonist eraldi

### Täiustatud {#improved}

- **Hallatud Superdav teenuse seadistus** — lisa majutatud teenuse endpointid ja automaatne ühenduse ettevalmistamine toetatud saitidele
- **Väljalaske pakendamine** — koosta eraldi tuuma- ja täiustatud ZIP-id, avalda mõlemad GitHubis ning saada WordPress.org-i ainult tuumapakett

### Parandatud {#fixed}

- **AI päringute töökindlus** — täiusta mudelivalikut, päringute ajalõppe, vaikimisi seadistusmudelit, arutlusteksti käsitlemist ja korduskatse juhiseid vigaste tööriistakutsete jaoks
- **Kalendri ja meeldetuletuste tugevdamine** — tugevda Google Calendar tokeneid ja meeldetuletuste deduplitseerimist
- **Sissejuhatuse ja kinnituste jätkamised** — paranda frontend’i sissejuhatuse käivitused ja kinnitatud võimekuste jätkamised
- **WordPress.org-i pakendamise ülevaatuse probleemid** — lahenda tuumaväljalaske pakendamise ülevaatuse tagasiside

## 1.16.0 — Avaldatud 2026-05-20 {#1160--released-on-2026-05-20}

### Uus {#new-1}

- **Generate Logo SVG võimekus** — Theme Builder saab nüüd genereerida ja manustada kohandatud logo SVG-sid nimeruumiturvalise puhastamisega
- **Foto üleslaadimine avastusintervjuus** — Theme Builderi avastusintervjuu sisaldab nüüd foto üleslaadimise sammu rikkalikuma kujunduskonteksti jaoks
- **Validate Palette Contrast võimekus** — kontrolli värvipaaride WCAG nõuetele vastavust enne nende rakendamist teemale
- **Majutusasutuste menüüd** — Theme Builder saab nüüd genereerida struktureeritud toidu- ja joogimenüü lehti majutus- ja toitlustusettevõtetele
- **Töölaua ja mobiili eelvaate renderdamine** — vaata kujundust eelvaates töölaua- ja mobiiliseadmetes kujundussuuna valimise ajal
- **Navigatsioonisildi parameeter** — Create Menu võimekus toetab nüüd eraldi `navigation_label` väärtust, mis erineb lehe pealkirjast
- **Tier 1 tööriista saadavus** — sd-ai-agent/site-scrape on nüüd Tier 1 tööriist, mis on Theme Builderis vaikimisi saadaval

### Parandatud {#fixed-1}

- **AI Client vahemälu** — põhineb nüüd transientidel päringuteülese püsivuse jaoks, vältides andmekadu pikaajaliste agendiülesannete korral
- **Plugina rea toimingulingid** — parandatud ja selguse huvides ümber nimetatud

## 1.10.0 — Avaldatud 2026-05-05 {#1100--released-on-2026-05-05}

### Uus {#new-2}

- **Tavily internetiotsing** — lisa Tavily otsingupakkujana rikkalikumate internetiotsingu tulemuste jaoks koos Brave Searchiga
- **Teemateadlikud sisseehitatud oskused** — Block Themes, Classic Themes, Kadence Blocks ja Kadence Theme oskuste juhendid tarnitakse nüüd koos pluginaga
- **Saidiehitaja kontaktivormi võimekus** — lisa kontaktivorm mis tahes lehele otse vestlusliidesest

### Täiustatud {#improved-1}

- **WooCommerce integratsioon ümber töötatud** — kasutab nüüd parema töökindluse ja ühilduvuse jaoks WooCommerce’i natiivseid API-sid
- **Pakkujate loend värskendub automaatselt** — kui mõni plugin aktiveeritakse või deaktiveeritakse

### Parandatud {#fixed-2}

- **navigate-to võimekus** — parandatud lõputu taaslaadimise tsükkel mõnel halduslehel
- **list-posts võimekus** — lahendab nüüd kategooriate ja siltide nimed korrektselt slugideks
- **WP-CLI käsud** — taastatud puuduvad nimeruumi aliased pärast eelmist ümbertöötlust
- **Sündmuste automatiseerimine** — käsitleb sujuvalt saite, kus automatiseerimistabeleid pole veel loodud
- **memory-save võimekus** — kasutab nüüd süsteemijuhiste koostajas õiget nimeruumi prefiksit
- **Skalaarsete tööriistatulemuste käsitlemine** — pakitakse nüüd enne AI-le tagastamist korrektselt
- **Kasutusstatistika** — käsitleb nüüd vanematelt versioonidelt uuendamisel pärand-võimekusvõtme vormingut korrektselt
