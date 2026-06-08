---
title: Tools en Configuratie
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Tools en Configuratie

Theme Builder gebruikt een set tools om uw WordPress-site te analyseren, te ontwerpen en te bouwen. In versie 1.16.0 is **sd-ai-agent/site-scrape nu een Tier 1 tool**, waardoor deze standaard beschikbaar is in Theme Builder.

## Beschikbare Tools

### Tier 1 Tools (Altijd Beschikbaar)

Tier 1 tools zijn standaard beschikbaar in Theme Builder zonder extra configuratie.

#### sd-ai-agent/site-scrape

**Doel:** Bestaande websites analyseren om inspiratie voor het ontwerp, de inhoudsstructuur en de functionaliteit te halen.

**Mogelijkheden:**

- **Website-analyse** — webpagina's van concurrenten of inspiratiebronnen scrapen en analyseren
- **Ontwerpextractie** — kleuren, lettertypen en lay-outpatronen identificeren
- **Inhoudsstructuur** — het begrip van de paginavormgeving en hiërarchie
- **Feature detectie** — plugins en functionaliteit identificeren
- **Prestatieanalyse** — de paginisnelheid en optimalisatie controleren
- **SEO-analyse** — meta tags en gestructureerde data beoordelen

**Gebruik:**

```
Analyseer het ontwerp van example.com en gebruik dit als inspiratie voor mijn site.
```

**Wat het extraheert:**

- Kleurenpalet en kleurgebruik
- Typografie (lettertypen en groottes)
- Lay-outstructuur en witruimte
- Navigatiepatronen
- Inhoudsorganisatie
- Afbeeldingen en mediagebruik
- Interactieve elementen
- Mobile responsiveness

**Beperkingen:**

- Kan geen sites scrapen die beveiligd zijn met een wachtwoord
- Respecteert robots.txt en sitebeleid
- Kan dynamische inhoud mogelijk niet vastleggen
- Sites met veel JavaScript kunnen beperkte analyse hebben
- Grote sites kunnen langer duren om te analyseren

### Tier 2 Tools (Optioneel)

Tier 2 tools zijn beschikbaar wanneer ze expliciet zijn ingeschakeld in de Theme Builder instellingen.

#### Advanced Analytics

Biedt gedetailleerde prestatiegegevens:

- Pagina laadtijden
- Core Web Vitals
- SEO-score
- Toegankelijkheidsscore
- Best practices score

#### Content Optimizer

Analyseert en stelt verbeteringen voor voor:

- Leesbaarheid
- SEO-optimalisatie
- Gebruik van trefwoorden
- Inhoudsstructuur
- Plaatsing van call-to-action

### Tier 3 Tools (Premium)

Tier 3 tools vereisen extra configuratie of premium functies.

#### AI Content Generator

Genereert inhoud voor:

- Productbeschrijvingen
- Servicepagina's
- Blogposts
- Meta beschrijvingen
- Call-to-action teksten

#### Advanced Design Tools

Biedt geavanceerde ontwerpmogelijkheden:

- Generatie van custom CSS
- Creatie van animaties
- Ontwerp van interactieve elementen
- Geavanceerde kleurentheorie
- Typografische optimalisatie

## Tool Configuratie

### Tools Inschakelen

Om extra tools in Theme Builder in te schakelen:

1. Navigeer naar **Gratis AI Agent → Settings**
2. Ga naar **Theme Builder → Tools**
3. Schakel tools in/uit naar behoefte
4. Sla de instellingen op

### Tool Rechten

Sommige tools vereisen rechten:

- **Site scraping** — vereist internettoegang
- **Analytics** — vereist Google Analytics integratie
- **Content generation** — vereist API-sleutels
- **Advanced features** — kan een premium abonnement vereisen

### API Sleutels en Gegevens

Configureer API-sleutels voor tools die deze vereisen:

1. Ga naar **Gratis AI Agent → Settings → API Keys**
2. Voer de gegevens in voor elke tool
3. Test de verbinding
4. Sla veilig op

## Gebruik van sd-ai-agent/site-scrape

### Basisgebruik

Vraag Theme Builder om een website te analyseren:

```
Analyseer het ontwerp van de site van mijn concurrent op competitor.com
en stel ontwerpsuggesties voor mijn site.
```

### Specifieke Analyse

Vraag specifieke soorten analyse aan:

```
Haal het kleurenpalet van example.com en gebruik dit als inspiratie.
```

```
Analyseer de navigatiestructuur van example.com en pas een vergelijkbare
organisatie toe op mijn site.
```

```
Controleer de mobile responsiveness van example.com en zorg ervoor dat mijn site
even responsief is.
```

### Vergelijkende Analyse

Vergelijk meerdere sites:

```
Vergelijk de ontwerpen van site1.com en site2.com en creëer een ontwerp
dat de beste elementen van beide combineert.
```

## Beperkingen en Overwegingen van Tools

### Rate Limiting

- Scrapen is beperkt om overbelasting van de server te voorkomen
- Meerdere verzoeken naar dezelfde site kunnen worden beperkt
- Grote sites kunnen langer duren om te analyseren

### Nauwkeurigheid van Inhoud

- Dynamische inhoud kan niet volledig worden vastgelegd
- Inhoud gerenderd door JavaScript kan onvolledig zijn
- Real-time data kan niet worden weerspiegeld
- Sommige inhoud kan achter betaalmuren zitten

### Juridische en Ethische Overwegingen

- Respecteer robots.txt en sitebeleid
- Scraap geen auteursrechtelijk beschermde inhoud voor reproductie
- Gebruik analyse voor inspiratie, niet voor kopiëren
- Controleer of u het recht heeft om de geëxtraheerde inhoud te gebruiken
- Volg de servicevoorwaarden van de geanalyseerde sites

### Prestatie-impact

- Het scrapen van grote sites kan tijd kosten
- Meerdere gelijktijdige scrapes kunnen langzamer zijn
- Netwerkverbinding beïnvloedt de snelheid
- Grote datasets kunnen meer verwerking vereisen

## Best Practices

### Site Analyse Gebruiken

1. **Analyseer meerdere sites** — verzamel inspiratie uit verschillende bronnen
2. **Focus op structuur** — leer lay-out- en organisatiepatronen
3. **Extracteer kleuren** — gebruik kleurenpaletten als startpunt
4. **Bestudeer typografie** — identificeer lettertypecombinaties die u mooi vindt
5. **Bekijk navigatie** — begrijp de menu-organisatie

### Ethisch Scrapen

1. **Respecteer robots.txt** — volg de richtlijnen van de site
2. **Kopieer geen inhoud** — gebruik analyse uitsluitend voor inspiratie
3. **Controleer rechten** — zorg ervoor dat u de geëxtraheerde inhoud mag gebruiken
4. **Vermeld bronnen** — geef inspiratiebronnen credit
5. **Volg voorwaarden** — voldoen aan de servicevoorwaarden van de site

### Effectiviteit van Tools Maximaliseren

1. **Wees specifiek** — vraag om specifieke soorten analyse
2. **Geef context** — leg het doel van uw site uit
3. **Stel verwachtingen** — beschrijf uw ontwerddoelen
4. **Itereer** — verfijn op basis van de resultaten
5. **Combineer tools** — gebruik meerdere tools voor een uitgebreide analyse

## Probleemoplossing

### Site Scrapt Niet

- Controleer of de site openbaar toegankelijk is
- Controleer of robots.txt scraping toestaat
- Probeer een andere site
- Controleer de internetverbinding
- Neem contact op met de support als het probleem aanhoudt

### Onvolledige Analyse

- De site kan dynamische inhoud hebben
- JavaScript kan niet volledig zijn gerenderd
- Grote sites kunnen een time-out krijgen
- Probeer in plaats daarvan specifieke pagina's te analyseren
- Vraag specifieke analyse-typen aan

### Trage Prestaties

- Grote sites duren langer om te analyseren
- Meerdere gelijktijdige scrapes zijn langzamer
- Netwerkverbinding beïnvloedt de snelheid
- Probeer tijdens daluren
- Analyseer eerst kleinere secties

## Gerelateerde Documentatie

- [Discovery Interview](./discovery-interview.md) — verzamel ontwerpinformatie
- [Design Direction](./design-direction.md) — verfijn uw ontwerp
- [Hospitality Menus](./hospitality-menus.md) — creëer menupagina's
