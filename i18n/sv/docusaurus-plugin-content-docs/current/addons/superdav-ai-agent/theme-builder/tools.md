---
title: Verktyg och konfiguration
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Verktyg och konfiguration

Theme Builder använder en uppsättning verktyg för att analysera, designa och bygga din WordPress-webbplats. I version 1.16.0 är **sd-ai-agent/site-scrape nu ett Tier 1-verktyg**, vilket gör det tillgängligt som standard i Theme Builder.

## Tillgängliga verktyg

### Tier 1-verktyg (Alltid tillgängliga)

Tier 1-verktyg är tillgängliga som standard i Theme Builder utan någon extra konfiguration.

#### sd-ai-agent/site-scrape

**Syfte:** Analyser befintliga webbplatser för att extrahera designinspiration, innehållsstruktur och funktionalitet.

**Funktioner:**

- **Webbanalys** — skrapar och analyserar konkurrenters eller inspirationswebbplatser
- **Designextraktion** — identifierar färger, typsnitt och layoutmönster
- **Innehållsstruktur** — förstår sidorganisation och hierarki
- **Funktionsdetektering** — identifierar plugins och funktionalitet
- **Prestandaanalys** — kontrollerar sidhastighet och optimering
- **SEO-analys** — granskar meta-taggar och strukturerad data

**Användning:**

```
Analysera designen av example.com och använd den som inspiration för min webbplats.
```

**Vad det extraherar:**

- Färgprakt och färgförbrukning
- Typografi (typsnitt och storlekar)
- Layoutstruktur och avstånd
- Navigationsmönster
- Innehållsorganisation
- Bilder och medieförbrukning
- Interaktiva element
- Mobilresponsivitet

**Begränsningar:**

- Kan inte skrapa webbplatser som är skyddade med lösenord
- Respekterar robots.txt och webbplatsens policyer
- Kan inte fånga dynamiskt innehåll
- Webbplatser med mycket JavaScript kan ha begränsad analys
- Stora webbplatser kan ta längre tid att analysera

### Tier 2-verktyg (Valfria)

Tier 2-verktyg är tillgängliga när de explicit aktiveras i Theme Builder-inställningarna.

#### Advanced Analytics

Ger detaljerade prestandamått:

- Sidladdningstider
- Core Web Vitals
- SEO-poäng
- Tillgänglighetsbetyg
- Bästa praxis-betyg

#### Content Optimizer

Analyserar och föreslår förbättringar för:

- Läsbarhet
- SEO-optimering
- Nyckelordshantering
- Innehållsstruktur
- Placering av Call-to-action

### Tier 3-verktyg (Premium)

Tier 3-verktyg kräver ytterligare konfiguration eller premiumfunktioner.

#### AI Content Generator

Genererar innehåll för:

- Produktbeskrivningar
- Servicetjänster
- Blogginlägg
- Meta-beskrivningar
- Call-to-action-text

#### Advanced Design Tools

Ger avancerade designkapaciteter:

- Generering av anpassad CSS
- Skapande av animationer
- Design av interaktiva element
- Avancerad färgteori
- Typografiooptimering

## Verktygskonfiguration

### Aktivera verktyg

För att aktivera ytterligare verktyg i Theme Builder:

1. Navigera till **Gratis AI Agent → Settings**
2. Gå till **Theme Builder → Tools**
3. Växla på verktygen efter behov
4. Spara inställningarna

### Verktygstillstånd

Vissa verktyg kräver behörigheter:

- **Site scraping** — kräver internetåtkomst
- **Analytics** — kräver integration med Google Analytics
- **Content generation** — kräver API-nycklar
- **Advanced features** — kan kräva ett premiumabonnemang

### API-nycklar och behörigheter

Konfigurera API-nycklar för verktyg som kräver dem:

1. Gå till **Gratis AI Agent → Settings → API Keys**
2. Ange behörigheter för varje verktyg
3. Testa anslutningen
4. Spara säkert

## Använda sd-ai-agent/site-scrape

### Grundläggande användning

Be Theme Builder att analysera en webbplats:

```
Analysera designen av min konkurrents webbplats på competitor.com
och föreslå designförbättringar för min webbplats.
```

### Specifik analys

Begär specifika typer av analys:

```
Extrahera färgpraktet från example.com och använd det som inspiration.
```

```
Analysera navigeringsstrukturen på example.com och tillämpa liknande
organisation på min webbplats.
```

```
Kontrollera mobilresponsiviteten på example.com och se till att min webbplats
är lika responsiv.
```

### Jämförelseanalys

Jämför flera webbplatser:

```
Jämför designerna av site1.com och site2.com och skapa en design
som kombinerar det bästa från båda.
```

## Verktygsbegränsningar och överväganden

### Rate Limiting (Begränsning av hastighet)

- Skrapning är begränsad för att förhindra överbelastning av servern
- Flera förfrågningar till samma webbplats kan begränsas
- Stora webbplatser kan ta längre tid att analysera

### Innehållsnoggrannhet

- Dynamiskt innehåll kan inte fångas helt
- JavaScript-renderat innehåll kan vara ofullständigt
- Realtidsdata kan vara oreflekterad
- Vissa innehåll kan vara bakom betalväggar

### Juridiska och etiska överväganden

- Respektera robots.txt och webbplatsens policyer
- Skrapa inte upphovsrättsskyddat innehåll för reproduktion
- Använd analysen för inspiration, inte för kopiering
- Verifiera att du har rätt att använda det extraherade innehållet
- Följ de tjänstevillkor som gäller för de analyserade webbplatserna

### Prestandapåverkan

- Att skrapa stora webbplatser kan ta tid
- Flera samtidiga skrapningar kan vara långsammare
- Nätverksanslutningen påverkar hastigheten
- Stora datamängder kan kräva mer bearbetning

## Bästa praxis

### Använda webbanalys

1. **Analysera flera webbplatser** — samla inspiration från flera källor
2. **Fokusera på strukturen** — lär dig layout- och organisationsmönster
3. **Extrahera färger** — använd färgprakt som utgångspunkt
4. **Studera typografin** — identifiera typsnittskombinationer du gillar
5. **Granska navigeringen** — förstå menyorganisationen

### Etisk skrapning

1. **Respektera robots.txt** — följ webbplatsens riktlinjer
2. **Kopiera inte innehåll** — använd analysen endast för inspiration
3. **Verifiera rättigheter** — se till att du kan använda det extraherade innehållet
4. **Angiv källor** — kreditera inspirationskällorna
5. **Följ villkor** — följ webbplatsens tjänstevillkor

### Maximera verktygseffektiviteten

1. **Var specifik** — begär specifika typer av analys
2. **Ge kontext** — förklara syftet med din webbplats
3. **Sätt förväntningar** — beskriv dina designmål
4. **Iterera** — förfina baserat på resultaten
5. **Kombinera verktyg** — använd flera verktyg för en omfattande analys

## Felsökning

### Webbplatsen skrapas inte

- Kontrollera om webbplatsen är publikt tillgänglig
- Verifiera att robots.txt tillåter skrapning
- Försök med en annan webbplats
- Kontrollera internetanslutningen
- Kontakta support om problemet kvarstår

### Ofullständig analys

- Webbplatsen kan ha dynamiskt innehåll
- JavaScript kan inte vara fullständigt renderat
- Stora webbplatser kan timea ut
- Försök analysera specifika sidor istället
- Begär specifika analysetyper

### Långsam prestanda

- Stora webbplatser tar längre tid att analysera
- Flera samtidiga skrapningar är långsammare
- Nätverksanslutningen påverkar hastigheten
- Försök under lågtrafikperioder
- Analysera mindre sektioner först

## Relaterad dokumentation

- [Discovery Interview](./discovery-interview.md) — samla designinformation
- [Design Direction](./design-direction.md) — förfina din design
- [Hospitality Menus](./hospitality-menus.md) — skapa menysidor
