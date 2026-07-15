---
title: Værktøjer og konfiguration
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Værktøjer og konfiguration

Theme Builder bruger et sæt værktøjer til at analysere, designe og bygge dit WordPress site. I version 1.16.0 er **sd-ai-agent/site-scrape nu et niveau 1-værktøj**, hvilket gør det tilgængeligt som standard i Theme Builder. Superdav AI Agent v1.18.0 introducerer også en separat distribueret Advanced-ledsagerpakke til betroede udviklerarbejdsgange; disse værktøjer er ikke en del af WordPress.org-core-pakken og skal installeres og autoriseres separat.

## Tilgængelige værktøjer {#available-tools}

### Niveau 1-værktøjer (altid tilgængelige) {#tier-1-tools-always-available}

Niveau 1-værktøjer er tilgængelige som standard i Theme Builder uden yderligere konfiguration.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Formål:** Analysér eksisterende websites for at udtrække designinspiration, indholdsstruktur og funktionalitet.

**Funktioner:**

- **Websiteanalyse** — scrape og analysér konkurrenters eller inspirationswebsites
- **Designudtræk** — identificér farver, skrifttyper og layoutmønstre
- **Indholdsstruktur** — forstå sideorganisering og hierarki
- **Funktionsregistrering** — identificér plugins og funktionalitet
- **Ydeevneanalyse** — tjek sidehastighed og optimering
- **SEO-analyse** — gennemgå metatags og strukturerede data

**Brug:**

```
Analysér designet på example.com, og brug det som inspiration til mit site.
```

**Hvad det udtrækker:**

- Farvepalet og farvebrug
- Typografi (skrifttyper og størrelser)
- Layoutstruktur og afstande
- Navigationsmønstre
- Indholdsorganisering
- Brug af billeder og medier
- Interaktive elementer
- Mobil responsivitet

**Begrænsninger:**

- Kan ikke scrape adgangskodebeskyttede sites
- Respekterer robots.txt og site-politikker
- Indfanger muligvis ikke dynamisk indhold
- JavaScript-tunge sites kan have begrænset analyse
- Store sites kan tage længere tid at analysere

### Niveau 2-værktøjer (valgfri) {#tier-2-tools-optional}

Niveau 2-værktøjer er tilgængelige, når de eksplicit aktiveres i Theme Builder-indstillinger.

#### Avanceret analyse {#advanced-analytics}

Leverer detaljerede ydeevnemålinger:

- Sideindlæsningstider
- Core Web Vitals
- SEO-score
- Tilgængelighedsscore
- Score for bedste praksis

#### Indholdsoptimering {#content-optimizer}

Analyserer og foreslår forbedringer til:

- Læsbarhed
- SEO-optimering
- Brug af søgeord
- Indholdsstruktur
- Placering af opfordring til handling

### Niveau 3-værktøjer (Premium) {#tier-3-tools-premium}

Niveau 3-værktøjer kræver yderligere konfiguration eller Premium-funktioner.

#### AI-indholdsgenerator {#ai-content-generator}

Genererer indhold til:

- Produktbeskrivelser
- Servicesider
- Blogindlæg
- Metabeskrivelser
- Tekst til opfordring til handling

#### Avancerede designværktøjer {#advanced-design-tools}

Leverer avancerede designfunktioner:

- Generering af brugerdefineret CSS
- Oprettelse af animationer
- Design af interaktive elementer
- Avanceret farveteori
- Typografioptimering

### Advanced-ledsagerværktøjer (separat pakke) {#advanced-companion-tools-separate-package}

Advanced-ledsagerpakken distribueres separat fra core-udgivelsen af Superdav AI Agent. Den er beregnet til betroede udvikler- og siteejermiljøer, hvor administratorer eksplicit tillader agenten at bruge værktøjer med stor effekt.

Advanced-ledsagerfunktioner kan omfatte:

- **Filsystemværktøjer** — inspicér og rediger godkendte filer i betroede miljøer
- **Databaseværktøjer** — forespørg eller opdater site-data, når det eksplicit er autoriseret
- **WP-CLI-værktøjer** — kør WordPress-vedligeholdelses- og inspektionskommandoer
- **REST-dispatcherværktøjer** — kald registrerede REST-endpoints gennem kontrollerede dispatch-arbejdsgange
- **Plugin builder-værktøjer** — scaffold og iterér på plugin-kode
- **Git snapshot-værktøjer** — opret snapshots før risikable udviklerhandlinger
- **Brugeradministrationsværktøjer** — hjælp med at gennemgå eller justere brugerposter, hvor det er tilladt
- **Benchmarkværktøjer** — kør ydeevne- eller kapabilitetsbenchmarks til udviklingsgennemgang

Dokumentér ikke disse som generelt tilgængelige Theme Builder-værktøjer for enhver installation. De er kun tilgængelige, når Advanced-ledsagerpakken er installeret, aktiveret og begrænset til betroede administratorer.

## Værktøjskonfiguration {#tool-configuration}

### Aktivering af værktøjer {#enabling-tools}

Sådan aktiverer du yderligere værktøjer i Theme Builder:

1. Gå til **Gratis AI Agent → Settings**
2. Gå til **Theme Builder → Tools**
3. Slå værktøjer til/fra efter behov
4. Gem indstillinger

### Værktøjstilladelser {#tool-permissions}

Nogle værktøjer kræver tilladelser:

- **Site scraping** — kræver internetadgang
- **Analytics** — kræver Google Analytics-integration
- **Indholdsgenerering** — kræver API-nøgler
- **Avancerede funktioner** — kan kræve Premium-abonnement
- **Advanced-ledsagerværktøjer** — kræver den separat distribuerede Advanced-pakke og eksplicit administratortillid

### API-nøgler og legitimationsoplysninger {#api-keys-and-credentials}

Konfigurér API-nøgler for værktøjer, der kræver dem:

1. Gå til **Gratis AI Agent → Settings → API Keys**
2. Indtast legitimationsoplysninger for hvert værktøj
3. Test forbindelse
4. Gem sikkert

### Installation af Advanced-ledsagerpakken {#installing-the-advanced-companion-package}

Advanced-ledsagerpakken udgives separat fra WordPress.org-core-ZIP-filen. Installér den kun fra projektets officielle distributionskanal for udgivelsen, og begræns derefter adgang til betroede administratorer. Gennemgå porte for menneskelig godkendelse og git snapshot-adfærd, før du aktiverer filsystem-, database-, WP-CLI-, REST-dispatcher-, plugin builder-, brugeradministrations- eller benchmarkværktøjer på et produktionssite.

## Brug af sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Grundlæggende brug {#basic-usage}

Bed Theme Builder om at analysere et website:

```
Analysér designet på min konkurrents site på competitor.com
og foreslå designforbedringer til mit site.
```

### Specifik analyse {#specific-analysis}

Anmod om specifikke analysetyper:

```
Udtræk farvepaletten fra example.com, og brug den som inspiration.
```

```
Analysér navigationsstrukturen på example.com, og anvend en lignende
organisering på mit site.
```

```
Tjek den mobile responsivitet på example.com, og sørg for, at mit site
er lige så responsivt.
```

### Sammenligningsanalyse {#comparison-analysis}

Sammenlign flere sites:

```
Sammenlign designene på site1.com og site2.com, og opret et design,
der kombinerer de bedste elementer fra begge.
```

## Værktøjsbegrænsninger og overvejelser {#tool-limitations-and-considerations}

### Ratebegrænsning {#rate-limiting}

- Scraping er hastighedsbegrænset for at forhindre serveroverbelastning
- Flere anmodninger til samme websted kan blive droslet
- Store websteder kan tage længere tid at analysere

### Indholdsnøjagtighed {#content-accuracy}

- Dynamisk indhold bliver muligvis ikke fuldt indfanget
- JavaScript-renderet indhold kan være ufuldstændigt
- Realtidsdata afspejles muligvis ikke
- Noget indhold kan være bag betalingsmure

### Juridiske og etiske overvejelser {#legal-and-ethical-considerations}

- Respektér robots.txt og webstedspolitikker
- Scrape ikke ophavsretligt beskyttet indhold til reproduktion
- Brug analyse til inspiration, ikke kopiering
- Bekræft, at du har rettigheder til at bruge udtrukket indhold
- Følg servicevilkårene for analyserede websteder

### Ydeevnepåvirkning {#performance-impact}

- Scraping af store websteder kan tage tid
- Flere samtidige scrapes kan være langsommere
- Netværksforbindelse påvirker hastigheden
- Store datasæt kan kræve mere behandling

## Bedste praksis {#best-practices}

### Brug af webstedsanalyse {#using-site-analysis}

1. **Analyser flere websteder** — saml inspiration fra flere kilder
2. **Fokuser på struktur** — lær layout- og organisationsmønstre
3. **Udtræk farver** — brug farvepaletter som udgangspunkter
4. **Studér typografi** — identificer skrifttypekombinationer, du kan lide
5. **Gennemgå navigation** — forstå menuorganisering

### Etisk scraping {#ethical-scraping}

1. **Respektér robots.txt** — følg webstedets retningslinjer
2. **Kopiér ikke indhold** — brug kun analyse til inspiration
3. **Bekræft rettigheder** — sørg for, at du kan bruge udtrukket indhold
4. **Angiv kilder** — kreditér inspirationskilder
5. **Følg vilkår** — overhold webstedets servicevilkår

### Maksimering af værktøjseffektivitet {#maximizing-tool-effectiveness}

1. **Vær specifik** — anmod om specifikke typer analyse
2. **Giv kontekst** — forklar dit websteds formål
3. **Sæt forventninger** — beskriv dine designmål
4. **Iterér** — finjustér baseret på resultater
5. **Kombinér værktøjer** — brug flere værktøjer til omfattende analyse

## Fejlfinding {#troubleshooting}

### Webstedet kan ikke scrapes {#site-wont-scrape}

- Tjek, om webstedet er offentligt tilgængeligt
- Bekræft, at robots.txt tillader scraping
- Prøv et andet websted
- Tjek internetforbindelsen
- Kontakt support, hvis problemet fortsætter

### Ufuldstændig analyse {#incomplete-analysis}

- Webstedet kan have dynamisk indhold
- JavaScript bliver muligvis ikke fuldt renderet
- Store websteder kan få timeout
- Prøv at analysere specifikke sider i stedet
- Anmod om specifikke analysetyper

### Langsom ydeevne {#slow-performance}

- Store websteder tager længere tid at analysere
- Flere samtidige scrapes er langsommere
- Netværksforbindelse påvirker hastigheden
- Prøv uden for spidsbelastningstidspunkter
- Analyser mindre sektioner først

## Relateret dokumentation {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — saml designinformation
- [Design Direction](./design-direction.md) — finjustér dit design
- [Hospitality Menus](./hospitality-menus.md) — opret menusider
