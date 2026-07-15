---
title: Verktyg och konfiguration
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Verktyg och konfiguration

Theme Builder använder en uppsättning verktyg för att analysera, designa och bygga din WordPress-webbplats. I version 1.16.0 är **sd-ai-agent/site-scrape nu ett Tier 1-verktyg**, vilket gör det tillgängligt som standard i Theme Builder. Superdav AI Agent v1.18.0 introducerar också ett separat distribuerat Advanced companion-paket för betrodda utvecklararbetsflöden; dessa verktyg är inte en del av WordPress.org-kärnpaketet och måste installeras och auktoriseras separat.

## Tillgängliga verktyg {#available-tools}

### Tier 1-verktyg (alltid tillgängliga) {#tier-1-tools-always-available}

Tier 1-verktyg är tillgängliga som standard i Theme Builder utan någon ytterligare konfiguration.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Syfte:** Analysera befintliga webbplatser för att extrahera designinspiration, innehållsstruktur och funktionalitet.

**Funktioner:**

- **Webbplatsanalys** — skrapa och analysera konkurrenters eller inspirationswebbplatser
- **Designextrahering** — identifiera färger, typsnitt och layoutmönster
- **Innehållsstruktur** — förstå sidorganisation och hierarki
- **Funktionsdetektering** — identifiera plugins och funktionalitet
- **Prestandaanalys** — kontrollera sidhastighet och optimering
- **SEO-analys** — granska metataggar och strukturerade data

**Användning:**

```
Analysera designen på example.com och använd den som inspiration för min webbplats.
```

**Vad det extraherar:**

- Färgpalett och färganvändning
- Typografi (typsnitt och storlekar)
- Layoutstruktur och avstånd
- Navigeringsmönster
- Innehållsorganisation
- Användning av bilder och media
- Interaktiva element
- Mobil responsivitet

**Begränsningar:**

- Kan inte skrapa lösenordsskyddade webbplatser
- Respekterar robots.txt och webbplatsens policyer
- Kanske inte fångar dynamiskt innehåll
- JavaScript-tunga webbplatser kan ha begränsad analys
- Stora webbplatser kan ta längre tid att analysera

### Tier 2-verktyg (valfria) {#tier-2-tools-optional}

Tier 2-verktyg är tillgängliga när de uttryckligen aktiveras i Theme Builder-inställningarna.

#### Avancerad analys {#advanced-analytics}

Tillhandahåller detaljerade prestandamått:

- Sidans laddningstider
- Core Web Vitals
- SEO-poäng
- Tillgänglighetspoäng
- Poäng för bästa praxis

#### Innehållsoptimerare {#content-optimizer}

Analyserar och föreslår förbättringar för:

- Läsbarhet
- SEO-optimering
- Nyckelordsanvändning
- Innehållsstruktur
- Placering av call-to-action

### Tier 3-verktyg (Premium) {#tier-3-tools-premium}

Tier 3-verktyg kräver ytterligare konfiguration eller premiumfunktioner.

#### AI-innehållsgenerator {#ai-content-generator}

Genererar innehåll för:

- Produktbeskrivningar
- Tjänstesidor
- Blogginlägg
- Metabeskrivningar
- Call-to-action-text

#### Avancerade designverktyg {#advanced-design-tools}

Tillhandahåller avancerade designfunktioner:

- Generering av anpassad CSS
- Skapande av animationer
- Design av interaktiva element
- Avancerad färgteori
- Typografioptimering

### Advanced Companion Tools (separat paket) {#advanced-companion-tools-separate-package}

Advanced companion-paketet distribueras separat från kärnversionen av Superdav AI Agent. Det är avsett för betrodda utvecklar- och webbplatsägarmiljöer där administratörer uttryckligen tillåter agenten att använda verktyg med stor påverkan.

Advanced companion-funktioner kan inkludera:

- **Filsystemverktyg** — inspektera och ändra godkända filer i betrodda miljöer
- **Databasverktyg** — fråga eller uppdatera webbplatsdata när det uttryckligen auktoriserats
- **WP-CLI-verktyg** — köra WordPress-underhålls- och inspektionskommandon
- **REST-dispatcherverktyg** — anropa registrerade REST-endpoints genom kontrollerade dispatch-arbetsflöden
- **Pluginbyggarverktyg** — skapa grundstruktur för och iterera på plugin-kod
- **Git-snapshotverktyg** — skapa snapshots före riskfyllda utvecklaroperationer
- **Användarhanteringsverktyg** — hjälpa till att granska eller justera användarposter där det är tillåtet
- **Benchmarkverktyg** — köra prestanda- eller funktionsbenchmarks för utvecklingsgranskning

Dokumentera inte dessa som allmänt tillgängliga Theme Builder-verktyg för varje installation. De är endast tillgängliga när Advanced companion-paketet är installerat, aktiverat och begränsat till betrodda administratörer.

## Verktygskonfiguration {#tool-configuration}

### Aktivera verktyg {#enabling-tools}

För att aktivera ytterligare verktyg i Theme Builder:

1. Navigera till **Gratis AI Agent → Settings**
2. Gå till **Theme Builder → Tools**
3. Slå på/av verktyg efter behov
4. Spara inställningar

### Verktygsbehörigheter {#tool-permissions}

Vissa verktyg kräver behörigheter:

- **Webbplatsskrapning** — kräver internetåtkomst
- **Analys** — kräver Google Analytics-integration
- **Innehållsgenerering** — kräver API-nycklar
- **Avancerade funktioner** — kan kräva premiumprenumeration
- **Advanced companion-verktyg** — kräver det separat distribuerade Advanced-paketet och uttryckligt administratörsförtroende

### API-nycklar och inloggningsuppgifter {#api-keys-and-credentials}

Konfigurera API-nycklar för verktyg som kräver dem:

1. Gå till **Gratis AI Agent → Settings → API Keys**
2. Ange inloggningsuppgifter för varje verktyg
3. Testa anslutning
4. Spara säkert

### Installera Advanced Companion-paketet {#installing-the-advanced-companion-package}

Advanced companion-paketet släpps separat från WordPress.org-kärn-ZIP-filen. Installera det endast från den officiella projektdistributionskanalen för utgåvan och begränsa sedan åtkomsten till betrodda administratörer. Granska grindar för mänskligt godkännande och git-snapshotbeteende innan du aktiverar filsystem-, databas-, WP-CLI-, REST-dispatcher-, pluginbyggar-, användarhanterings- eller benchmarkverktyg på en produktionswebbplats.

## Använda sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Grundläggande användning {#basic-usage}

Be Theme Builder att analysera en webbplats:

```
Analysera designen på min konkurrents webbplats på competitor.com
och föreslå designförbättringar för min webbplats.
```

### Specifik analys {#specific-analysis}

Begär specifika typer av analys:

```
Extrahera färgpaletten från example.com och använd den som inspiration.
```

```
Analysera navigeringsstrukturen på example.com och tillämpa liknande
organisation på min webbplats.
```

```
Kontrollera den mobila responsiviteten på example.com och säkerställ att min webbplats
är lika responsiv.
```

### Jämförelseanalys {#comparison-analysis}

Jämför flera webbplatser:

```
Jämför designerna på site1.com och site2.com och skapa en design
som kombinerar de bästa elementen från båda.
```

## Verktygsbegränsningar och överväganden {#tool-limitations-and-considerations}

### Hastighetsbegränsning {#rate-limiting}

- Scraping är hastighetsbegränsad för att förhindra serveröverbelastning
- Flera förfrågningar till samma webbplats kan strypas
- Stora webbplatser kan ta längre tid att analysera

### Innehållets noggrannhet {#content-accuracy}

- Dynamiskt innehåll kanske inte fångas upp fullständigt
- JavaScript-renderat innehåll kan vara ofullständigt
- Realtidsdata kanske inte återspeglas
- Visst innehåll kan finnas bakom betalväggar

### Juridiska och etiska överväganden {#legal-and-ethical-considerations}

- Respektera robots.txt och webbplatsens policyer
- Skrapa inte upphovsrättsskyddat innehåll för reproduktion
- Använd analys för inspiration, inte kopiering
- Verifiera att du har rättigheter att använda extraherat innehåll
- Följ användarvillkoren för analyserade webbplatser

### Prestandapåverkan {#performance-impact}

- Scraping av stora webbplatser kan ta tid
- Flera samtidiga scraping-processer kan vara långsammare
- Nätverksanslutning påverkar hastigheten
- Stora datamängder kan kräva mer bearbetning

## Bästa praxis {#best-practices}

### Använda webbplatsanalys {#using-site-analysis}

1. **Analysera flera webbplatser** — samla inspiration från flera källor
2. **Fokusera på struktur** — lär dig layout- och organisationsmönster
3. **Extrahera färger** — använd färgpaletter som utgångspunkter
4. **Studera typografi** — identifiera typsnittskombinationer du gillar
5. **Granska navigation** — förstå menyorganisation

### Etisk scraping {#ethical-scraping}

1. **Respektera robots.txt** — följ webbplatsens riktlinjer
2. **Kopiera inte innehåll** — använd analys endast för inspiration
3. **Verifiera rättigheter** — säkerställ att du kan använda extraherat innehåll
4. **Ange källor** — ge erkännande till inspirationskällor
5. **Följ villkor** — följ webbplatsens användarvillkor

### Maximera verktygets effektivitet {#maximizing-tool-effectiveness}

1. **Var specifik** — begär specifika typer av analys
2. **Ge sammanhang** — förklara din webbplats syfte
3. **Sätt förväntningar** — beskriv dina designmål
4. **Iterera** — förfina baserat på resultat
5. **Kombinera verktyg** — använd flera verktyg för heltäckande analys

## Felsökning {#troubleshooting}

### Webbplatsen går inte att skrapa {#site-wont-scrape}

- Kontrollera om webbplatsen är offentligt tillgänglig
- Verifiera att robots.txt tillåter scraping
- Prova en annan webbplats
- Kontrollera internetanslutningen
- Kontakta support om problemet kvarstår

### Ofullständig analys {#incomplete-analysis}

- Webbplatsen kan ha dynamiskt innehåll
- JavaScript kanske inte renderas fullständigt
- Stora webbplatser kan få timeout
- Prova att analysera specifika sidor i stället
- Begär specifika analystyper

### Långsam prestanda {#slow-performance}

- Stora webbplatser tar längre tid att analysera
- Flera samtidiga scraping-processer är långsammare
- Nätverksanslutning påverkar hastigheten
- Prova under tider med lägre belastning
- Analysera mindre sektioner först

## Relaterad dokumentation {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — samla designinformation
- [Design Direction](./design-direction.md) — förfina din design
- [Hospitality Menus](./hospitality-menus.md) — skapa menysidor
