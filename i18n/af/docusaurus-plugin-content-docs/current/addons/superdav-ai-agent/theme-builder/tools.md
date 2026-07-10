---
title: Gereedskap en konfigurasie
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Gereedskap en Konfigurasie {#tools-and-configuration}

Theme Builder gebruik ’n stel gereedskap om jou WordPress-werf te ontleed, te ontwerp en te bou. In weergawe 1.16.0 is **sd-ai-agent/site-scrape nou ’n Tier 1-gereedskap**, wat dit by verstek in Theme Builder beskikbaar maak. Superdav AI Agent v1.18.0 stel ook ’n afsonderlik verspreide Advanced-metgeselpakket bekend vir vertroude ontwikkelaarwerkvloeie; daardie gereedskap is nie deel van die WordPress.org-kernpakket nie en moet afsonderlik geïnstalleer en gemagtig word.

## Beskikbare Gereedskap {#available-tools}

### Tier 1-gereedskap (Altyd Beskikbaar) {#tier-1-tools-always-available}

Tier 1-gereedskap is by verstek in Theme Builder beskikbaar sonder enige bykomende konfigurasie.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Doel:** Ontleed bestaande webwerwe om ontwerpinspirasie, inhoudstruktuur en funksionaliteit te onttrek.

**Vermoëns:**

- **Webwerf-ontleding** — skraap en ontleed mededinger- of inspirasiewebwerwe
- **Ontwerponttrekking** — identifiseer kleure, lettertipes en uitlegpatrone
- **Inhoudstruktuur** — verstaan bladsy-organisasie en hiërargie
- **Funksie-opsporing** — identifiseer plugins en funksionaliteit
- **Prestasie-ontleding** — kontroleer bladsyspoed en optimalisering
- **SEO-ontleding** — hersien metamerkers en gestruktureerde data

**Gebruik:**

```
Ontleed die ontwerp van example.com en gebruik dit as inspirasie vir my werf.
```

**Wat Dit Onttrek:**

- Kleurpalet en kleurgebruik
- Tipografie (lettertipes en groottes)
- Uitlegstruktuur en spasiëring
- Navigasiepatrone
- Inhoudsorganisasie
- Beelde en mediagebruik
- Interaktiewe elemente
- Mobiele responsiwiteit

**Beperkings:**

- Kan nie wagwoordbeskermde werwe skraap nie
- Respekteer robots.txt en werfbeleide
- Mag dalk nie dinamiese inhoud vasvang nie
- JavaScript-swaar werwe kan beperkte ontleding hê
- Groot werwe kan langer neem om te ontleed

### Tier 2-gereedskap (Opsioneel) {#tier-2-tools-optional}

Tier 2-gereedskap is beskikbaar wanneer dit uitdruklik in Theme Builder-instellings geaktiveer is.

#### Gevorderde Analitika {#advanced-analytics}

Verskaf gedetailleerde prestasiemaatstawwe:

- Bladsylaaitye
- Core Web Vitals
- SEO-telling
- Toeganklikheidstelling
- Bestepraktyke-telling

#### Inhoudsoptimaliseerder {#content-optimizer}

Ontleed en stel verbeterings voor vir:

- Leesbaarheid
- SEO-optimalisering
- Sleutelwoordgebruik
- Inhoudstruktuur
- Plasing van oproepe tot aksie

### Tier 3-gereedskap (Premium) {#tier-3-tools-premium}

Tier 3-gereedskap vereis bykomende konfigurasie of premium-funksies.

#### AI-inhoudgenerator {#ai-content-generator}

Genereer inhoud vir:

- Produkbeskrywings
- Diensbladsye
- Blogplasings
- Metabeskrywings
- Oproep-tot-aksie-teks

#### Gevorderde Ontwerpgereedskap {#advanced-design-tools}

Verskaf gevorderde ontwerpvermoëns:

- Pasgemaakte CSS-generering
- Animasieskepping
- Interaktiewe elementontwerp
- Gevorderde kleurteorie
- Tipografie-optimalisering

### Advanced-metgeselgereedskap (Afsonderlike Pakket) {#advanced-companion-tools-separate-package}

Die Advanced-metgeselpakket word afsonderlik van die kern-Superdav AI Agent-vrystelling versprei. Dit is bedoel vir vertroude ontwikkelaar- en werfeienaaromgewings waar administrateurs uitdruklik toelaat dat die agent hoë-impak-gereedskap gebruik.

Advanced-metgeselvermoëns kan insluit:

- **Lêerstelselgereedskap** — inspekteer en wysig goedgekeurde lêers in vertroude omgewings
- **Databasisgereedskap** — doen navrae oor of werk werfdata op wanneer dit uitdruklik gemagtig is
- **WP-CLI-gereedskap** — voer WordPress-instandhoudings- en inspeksieopdragte uit
- **REST-versendergereedskap** — roep geregistreerde REST-eindpunte deur beheerde versendingswerkvloeie aan
- **Plugin-bouer-gereedskap** — skep raamwerke vir en iterer op plugin-kode
- **Git-momentopnamegereedskap** — skep momentopnames voor riskante ontwikkelaarbewerkings
- **Gebruikerbestuurgereedskap** — help om gebruikersrekords te hersien of aan te pas waar dit toegelaat word
- **Maatstafgereedskap** — voer prestasie- of vermoëmaatstawwe uit vir ontwikkelingshersiening

Moenie dit dokumenteer as algemeen beskikbare Theme Builder-gereedskap vir elke installasie nie. Dit is slegs beskikbaar wanneer die Advanced-metgeselpakket geïnstalleer, geaktiveer en tot vertroude administrateurs beperk is.

## Gereedskapkonfigurasie {#tool-configuration}

### Aktivering van Gereedskap {#enabling-tools}

Om bykomende gereedskap in Theme Builder te aktiveer:

1. Navigeer na **Gratis AI Agent → Settings**
2. Gaan na **Theme Builder → Tools**
3. Skakel gereedskap aan/af soos nodig
4. Stoor instellings

### Gereedskaptoestemmings {#tool-permissions}

Sommige gereedskap vereis toestemmings:

- **Werfskraap** — vereis internettoegang
- **Analitika** — vereis Google Analytics-integrasie
- **Inhoudgenerering** — vereis API-sleutels
- **Gevorderde funksies** — kan premium-intekening vereis
- **Advanced-metgeselgereedskap** — vereis die afsonderlik verspreide Advanced-pakket en uitdruklike administrateurvertroue

### API-sleutels en Geloofsbriewe {#api-keys-and-credentials}

Konfigureer API-sleutels vir gereedskap wat dit vereis:

1. Gaan na **Gratis AI Agent → Settings → API Keys**
2. Voer geloofsbriewe vir elke gereedskap in
3. Toets verbinding
4. Stoor veilig

### Installering van die Advanced-metgeselpakket {#installing-the-advanced-companion-package}

Die Advanced-metgeselpakket word afsonderlik van die WordPress.org-kern-ZIP vrygestel. Installeer dit slegs vanaf die amptelike projekverspreidingskanaal vir die vrystelling, en beperk dan toegang tot vertroude administrateurs. Hersien menslike goedkeuringshekke en git-momentopnamegedrag voordat lêerstelsel-, databasis-, WP-CLI-, REST-versender-, plugin-bouer-, gebruikerbestuur- of maatstafgereedskap op ’n produksiewerf geaktiveer word.

## Gebruik van sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Basiese Gebruik {#basic-usage}

Vra Theme Builder om ’n webwerf te ontleed:

```
Ontleed die ontwerp van my mededinger se werf by competitor.com
en stel ontwerpverbeterings vir my werf voor.
```

### Spesifieke Ontleding {#specific-analysis}

Versoek spesifieke soorte ontleding:

```
Onttrek die kleurpalet van example.com en gebruik dit as inspirasie.
```

```
Ontleed die navigasiestruktuur van example.com en pas soortgelyke
organisasie op my werf toe.
```

```
Kontroleer die mobiele responsiwiteit van example.com en verseker dat my werf
net so responsief is.
```

### Vergelykende Ontleding {#comparison-analysis}

Vergelyk verskeie werwe:

```
Vergelyk die ontwerpe van site1.com en site2.com en skep ’n ontwerp
wat die beste elemente van albei kombineer.
```

## Gereedskapbeperkings en Oorwegings {#tool-limitations-and-considerations}

### Tempo-beperking {#rate-limiting}

- Scraping word koersbeperk om bedieneroorlading te voorkom
- Veelvuldige versoeke na dieselfde webwerf kan vertraag word
- Groot webwerwe kan langer neem om te ontleed

### Inhoudsakkuraatheid {#content-accuracy}

- Dinamiese inhoud word moontlik nie volledig vasgelê nie
- JavaScript-gerenderde inhoud kan onvolledig wees
- Intydse data word moontlik nie weerspieël nie
- Sommige inhoud kan agter betaalmure wees

### Regs- en Etiese Oorwegings {#legal-and-ethical-considerations}

- Respekteer robots.txt en webwerfbeleide
- Moenie kopieregbeskermde inhoud vir reproduksie scrape nie
- Gebruik ontleding vir inspirasie, nie kopiëring nie
- Verifieer dat jy die regte het om onttrekte inhoud te gebruik
- Volg die diensbepalings van ontlede webwerwe

### Prestasie-impak {#performance-impact}

- Om groot webwerwe te scrape kan tyd neem
- Veelvuldige gelyktydige scrapes kan stadiger wees
- Netwerkverbinding beïnvloed spoed
- Groot datastelle kan meer verwerking vereis

## Beste Praktyke {#best-practices}

### Gebruik van Webwerf-ontleding {#using-site-analysis}

1. **Ontleed verskeie webwerwe** — versamel inspirasie uit verskeie bronne
2. **Fokus op struktuur** — leer uitleg- en organisasiepatrone
3. **Onttrek kleure** — gebruik kleurpalette as beginpunte
4. **Bestudeer tipografie** — identifiseer lettertipe-kombinasies waarvan jy hou
5. **Hersien navigasie** — verstaan spyskaartorganisasie

### Etiese Scraping {#ethical-scraping}

1. **Respekteer robots.txt** — volg webwerfriglyne
2. **Moenie inhoud kopieer nie** — gebruik ontleding slegs vir inspirasie
3. **Verifieer regte** — maak seker jy kan onttrekte inhoud gebruik
4. **Erken bronne** — gee erkenning aan inspirasiebronne
5. **Volg bepalings** — voldoen aan webwerf se diensbepalings

### Maksimalisering van Gereedskapdoeltreffendheid {#maximizing-tool-effectiveness}

1. **Wees spesifiek** — versoek spesifieke tipes ontleding
2. **Verskaf konteks** — verduidelik jou webwerf se doel
3. **Stel verwagtinge** — beskryf jou ontwerpdoelwitte
4. **Itereer** — verfyn op grond van resultate
5. **Kombineer gereedskap** — gebruik verskeie gereedskap vir omvattende ontleding

## Probleemoplossing {#troubleshooting}

### Webwerf Wil Nie Scrape Nie {#site-wont-scrape}

- Gaan na of die webwerf publiek toeganklik is
- Verifieer dat robots.txt scraping toelaat
- Probeer ’n ander webwerf
- Gaan internetverbinding na
- Kontak ondersteuning as die probleem voortduur

### Onvolledige Ontleding {#incomplete-analysis}

- Webwerf kan dinamiese inhoud hê
- JavaScript word moontlik nie volledig gerender nie
- Groot webwerwe kan uittel
- Probeer eerder spesifieke bladsye ontleed
- Versoek spesifieke ontledingstipes

### Stadige Prestasie {#slow-performance}

- Groot webwerwe neem langer om te ontleed
- Veelvuldige gelyktydige scrapes is stadiger
- Netwerkverbinding beïnvloed spoed
- Probeer gedurende buite-spitstye
- Ontleed eers kleiner afdelings

## Verwante Dokumentasie {#related-documentation}

- [Ontdekkingsonderhoud](./discovery-interview.md) — versamel ontwerpinligting
- [Ontwerprigting](./design-direction.md) — verfyn jou ontwerp
- [Gasvryheidsspyskaarte](./hospitality-menus.md) — skep spyskaartbladsye
