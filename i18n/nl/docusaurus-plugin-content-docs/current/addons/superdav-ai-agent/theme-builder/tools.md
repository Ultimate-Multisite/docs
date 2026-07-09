---
title: Tools en configuratie
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Tools en configuratie

Theme Builder gebruikt een set tools om je WordPress-site te analyseren, ontwerpen en bouwen. In versie 1.16.0 is **sd-ai-agent/site-scrape nu een Tier 1-tool**, waardoor deze standaard beschikbaar is in Theme Builder. Superdav AI Agent v1.18.0 introduceert ook een apart gedistribueerd geavanceerd companion-pakket voor vertrouwde ontwikkelaarsworkflows; die tools maken geen deel uit van het WordPress.org-kernpakket en moeten afzonderlijk worden geïnstalleerd en geautoriseerd.

## Beschikbare tools

### Tier 1-tools (altijd beschikbaar)

Tier 1-tools zijn standaard beschikbaar in Theme Builder zonder aanvullende configuratie.

#### sd-ai-agent/site-scrape

**Doel:** Bestaande websites analyseren om ontwerpinspiratie, contentstructuur en functionaliteit te extraheren.

**Mogelijkheden:**

- **Websiteanalyse** — websites van concurrenten of ter inspiratie scrapen en analyseren
- **Ontwerpextractie** — kleuren, lettertypen en lay-outpatronen identificeren
- **Contentstructuur** — paginaorganisatie en hiërarchie begrijpen
- **Functiedetectie** — plugins en functionaliteit identificeren
- **Prestatieanalyse** — paginasnelheid en optimalisatie controleren
- **SEO-analyse** — metatags en gestructureerde data beoordelen

**Gebruik:**

```
Analyseer het ontwerp van example.com en gebruik het als inspiratie voor mijn site.
```

**Wat het extraheert:**

- Kleurenpalet en kleurgebruik
- Typografie (lettertypen en groottes)
- Lay-outstructuur en witruimte
- Navigatiepatronen
- Contentorganisatie
- Gebruik van afbeeldingen en media
- Interactieve elementen
- Mobiele responsiviteit

**Beperkingen:**

- Kan geen met wachtwoord beveiligde sites scrapen
- Respecteert robots.txt en sitebeleid
- Legt dynamische content mogelijk niet vast
- JavaScript-intensieve sites kunnen beperkte analyse hebben
- Grote sites kunnen langer duren om te analyseren

### Tier 2-tools (optioneel)

Tier 2-tools zijn beschikbaar wanneer ze expliciet zijn ingeschakeld in de instellingen van Theme Builder.

#### Geavanceerde analytics

Biedt gedetailleerde prestatiestatistieken:

- Laadtijden van pagina's
- Core Web Vitals
- SEO-score
- Toegankelijkheidsscore
- Score voor best practices

#### Contentoptimalisator

Analyseert en stelt verbeteringen voor voor:

- Leesbaarheid
- SEO-optimalisatie
- Gebruik van trefwoorden
- Contentstructuur
- Plaatsing van call-to-actions

### Tier 3-tools (Premium)

Tier 3-tools vereisen aanvullende configuratie of premiumfuncties.

#### AI-contentgenerator

Genereert content voor:

- Productbeschrijvingen
- Servicepagina's
- Blogberichten
- Metabeschrijvingen
- Call-to-action-tekst

#### Geavanceerde ontwerptools

Biedt geavanceerde ontwerpmogelijkheden:

- Aangepaste CSS-generatie
- Animatiecreatie
- Ontwerp van interactieve elementen
- Geavanceerde kleurentheorie
- Typografie-optimalisatie

### Geavanceerde companion-tools (apart pakket)

Het geavanceerde companion-pakket wordt apart gedistribueerd van de kernrelease van Superdav AI Agent. Het is bedoeld voor vertrouwde omgevingen van ontwikkelaars en site-eigenaren waar beheerders de agent expliciet toestaan om tooling met grote impact te gebruiken.

Geavanceerde companion-mogelijkheden kunnen omvatten:

- **Bestandssysteemtools** — goedgekeurde bestanden in vertrouwde omgevingen inspecteren en wijzigen
- **Databasetools** — sitegegevens opvragen of bijwerken wanneer dit expliciet is geautoriseerd
- **WP-CLI-tools** — WordPress-onderhouds- en inspectiecommando's uitvoeren
- **REST-dispatchertools** — geregistreerde REST-endpoints aanroepen via gecontroleerde dispatchworkflows
- **Pluginbouwer-tools** — plugincode scaffolden en itereren
- **Git-snapshottools** — snapshots maken vóór risicovolle ontwikkelaarsoperaties
- **Gebruikersbeheertools** — helpen gebruikersrecords te beoordelen of aan te passen waar toegestaan
- **Benchmarktools** — prestatie- of capaciteitsbenchmarks uitvoeren voor ontwikkelingsbeoordeling

Documenteer deze niet als algemeen beschikbare Theme Builder-tools voor elke installatie. Ze zijn alleen beschikbaar wanneer het geavanceerde companion-pakket is geïnstalleerd, ingeschakeld en beperkt tot vertrouwde beheerders.

## Toolconfiguratie

### Tools inschakelen

Om aanvullende tools in Theme Builder in te schakelen:

1. Navigeer naar **Gratis AI Agent → Instellingen**
2. Ga naar **Theme Builder → Tools**
3. Schakel tools naar behoefte aan/uit
4. Sla instellingen op

### Toolrechten

Sommige tools vereisen rechten:

- **Site-scraping** — vereist internettoegang
- **Analytics** — vereist Google Analytics-integratie
- **Contentgeneratie** — vereist API keys
- **Geavanceerde functies** — kunnen een premiumabonnement vereisen
- **Geavanceerde companion-tools** — vereisen het apart gedistribueerde geavanceerde pakket en expliciet beheerdersvertrouwen

### API keys en inloggegevens

Configureer API keys voor tools die deze vereisen:

1. Ga naar **Gratis AI Agent → Instellingen → API keys**
2. Voer inloggegevens in voor elke tool
3. Test de verbinding
4. Sla veilig op

### Het geavanceerde companion-pakket installeren

Het geavanceerde companion-pakket wordt apart uitgebracht van de WordPress.org-kern-ZIP. Installeer het alleen via het officiële distributiekanaal van het project voor de release, en beperk daarna de toegang tot vertrouwde beheerders. Beoordeel menselijke goedkeuringsstappen en git-snapshotgedrag voordat je bestandssysteem-, database-, WP-CLI-, REST-dispatcher-, pluginbouwer-, gebruikersbeheer- of benchmarktools op een productiesite inschakelt.

## sd-ai-agent/site-scrape gebruiken

### Basisgebruik

Vraag Theme Builder om een website te analyseren:

```
Analyseer het ontwerp van de site van mijn concurrent op competitor.com
en stel ontwerpverbeteringen voor mijn site voor.
```

### Specifieke analyse

Vraag specifieke soorten analyse aan:

```
Extraheer het kleurenpalet van example.com en gebruik het als inspiratie.
```

```
Analyseer de navigatiestructuur van example.com en pas vergelijkbare
organisatie toe op mijn site.
```

```
Controleer de mobiele responsiviteit van example.com en zorg ervoor dat mijn site
even responsief is.
```

### Vergelijkingsanalyse

Vergelijk meerdere sites:

```
Vergelijk de ontwerpen van site1.com en site2.com en maak een ontwerp
dat de beste elementen van beide combineert.
```

## Toolbeperkingen en overwegingen

### Rate limiting

- Scrapen is beperkt in snelheid om overbelasting van de server te voorkomen
- Meerdere verzoeken aan dezelfde site kunnen worden vertraagd
- Grote sites kunnen langer duren om te analyseren

### Nauwkeurigheid van inhoud

- Dynamische inhoud wordt mogelijk niet volledig vastgelegd
- Door JavaScript weergegeven inhoud kan onvolledig zijn
- Realtime gegevens worden mogelijk niet weerspiegeld
- Sommige inhoud kan achter betaalmuren zitten

### Juridische en ethische overwegingen

- Respecteer robots.txt en sitebeleid
- Scrape geen auteursrechtelijk beschermde inhoud voor reproductie
- Gebruik analyse ter inspiratie, niet om te kopiëren
- Controleer of je rechten hebt om geëxtraheerde inhoud te gebruiken
- Volg de servicevoorwaarden van geanalyseerde sites

### Impact op prestaties

- Het scrapen van grote sites kan tijd kosten
- Meerdere gelijktijdige scrapes kunnen langzamer zijn
- Netwerkconnectiviteit beïnvloedt de snelheid
- Grote datasets kunnen meer verwerking vereisen

## Best practices

### Site-analyse gebruiken

1. **Analyseer meerdere sites** — verzamel inspiratie uit meerdere bronnen
2. **Focus op structuur** — leer patronen voor lay-out en organisatie
3. **Extraheer kleuren** — gebruik kleurenpaletten als startpunt
4. **Bestudeer typografie** — identificeer lettertypecombinaties die je mooi vindt
5. **Bekijk navigatie** — begrijp menuorganisatie

### Ethisch scrapen

1. **Respecteer robots.txt** — volg siterichtlijnen
2. **Kopieer geen inhoud** — gebruik analyse alleen ter inspiratie
3. **Controleer rechten** — zorg dat je geëxtraheerde inhoud mag gebruiken
4. **Vermeld bronnen** — geef inspiratiebronnen erkenning
5. **Volg voorwaarden** — voldoe aan de servicevoorwaarden van de site

### Effectiviteit van tools maximaliseren

1. **Wees specifiek** — vraag om specifieke soorten analyse
2. **Geef context** — leg het doel van je site uit
3. **Stel verwachtingen** — beschrijf je ontwerpdoelen
4. **Itereer** — verfijn op basis van resultaten
5. **Combineer tools** — gebruik meerdere tools voor uitgebreide analyse

## Probleemoplossing

### Site kan niet worden gescrapet

- Controleer of de site openbaar toegankelijk is
- Controleer of robots.txt scrapen toestaat
- Probeer een andere site
- Controleer de internetverbinding
- Neem contact op met support als het probleem aanhoudt

### Onvolledige analyse

- Site kan dynamische inhoud hebben
- JavaScript wordt mogelijk niet volledig weergegeven
- Grote sites kunnen een time-out krijgen
- Probeer in plaats daarvan specifieke pagina's te analyseren
- Vraag om specifieke analysetypen

### Trage prestaties

- Grote sites duren langer om te analyseren
- Meerdere gelijktijdige scrapes zijn langzamer
- Netwerkconnectiviteit beïnvloedt de snelheid
- Probeer het buiten piekuren
- Analyseer eerst kleinere secties

## Gerelateerde documentatie

- [Discovery Interview](./discovery-interview.md) — verzamel ontwerpinformatie
- [Ontwerprichting](./design-direction.md) — verfijn je ontwerp
- [Hospitality Menus](./hospitality-menus.md) — maak menupagina's
