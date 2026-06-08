---
title: 'Lektion 4: Bygga nischmallar'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lektion 4: Bygga nisch-mallar

Mallar är kärnan i ditt nischvärdeerbjudande. En ägare av ett träningsstudio som registrerar sig och ser en webbplats som redan ser ut som en träningswebbplats – med klasschema, tränarprofiler och rätt bildmaterial – är mycket mer benägen att stanna kvar än någon som ser en tom duk.

## Var vi slutade

Vi har ett fungerande FitSite-nätverk med Ultimate Multisite installerat och konfigurerat. Nu bygger vi mallarna som får FitSite att kännas byggt specifikt för träningsföretag.

## Varför nisch-mallar spelar roll

Generiska mallar lägger ansvaret för det svåra arbetet på dina kunder: att ta reda på vilka sidor de behöver, vilken innehållsstruktur som fungerar och hur de ska få det att se rätt ut för deras bransch. Nisch-mallar eliminerar det motståndet.

En ägare av ett träningsstudio som registrerar sig för FitSite bör se:

- En startsida som ser ut som en träningsstudio-webbplats
- Sidor för klasser, scheman, tränare och prissättning som redan är skapade
- Bildmaterial och platshållar-innehåll som matchar deras bransch
- En design som känns professionell och varumärkesanpassad för fitness

De fyller i sina detaljer. De börjar inte från grunden.

## Planering av dina mallar

Innan du bygger, bestäm vilka mallar du ska erbjuda. För FitSite kommer vi att skapa tre:

### Mall 1: Studio Essential

För små studior och personliga tränare.

- **Startsida** med hjältbild, klasshöjdpunkter och uppmaning till handling
- **Om oss**-sida med studioberättelse och mission
- **Klasser**-sida med schemaläggningslayout
- **Tränare**-sida med profilkort
- **Kontakt**-sida med platskarta och formulär
- **Rent, modernt design** med en färgpalett som passar fitness

### Mall 2: Gym Pro

För etablerade gym med fler tjänster.

- Allt i Studio Essential, plus:
- **Medlemskap**-sida med prissättningstabell
- **Galleri**-sida för anläggningsbilder
- **Blogg**-sektion för fitness-tips och nyheter
- **Testimonials**-sektion på startsidan
- **Mer framträdliga varumärkes**alternativ

### Mall 3: Fitness Chain

För verksamheter med flera platser.

- Allt i Gym Pro, plus:
- **Platser**-sida med flera anläggningslistningar
- **Franchise/plats**-undersidmall
- **Centraliserat varumärke** med plats-specifika detaljer
- **Personalregister** över flera platser

## Bygga en mall-webbplats

I Ultimate Multisite är en mall helt enkelt en WordPress-webbplats som är konfigurerad på det sätt du vill att nya kundwebbplatser ska se ut. Här är hur du skapar en:

### Steg 1: Skapa mall-webbplatsen

1. Gå till **Sites > Add New** i ditt network admin
2. Skapa en webbplats med namnet `template-studio-essential`
3. Denna webbplats blir din arbetsyta

### Steg 2: Installera och konfigurera temat

Byt till mall-webbplatsens dashboard och:

1. Aktivera ett tema som passar fitnessföretag
2. Konfigurera temainställningar, färger och typografi
3. Ställ in header och footer med fitnessanpassad navigering

:::tip Val av tema
Välj ett tema som är tillräckligt flexibelt för att se bra ut för fitness, men inte så komplext att dina kunder inte kan hantera det. Teman som Astra, GeneratePress eller Kadence fungerar bra eftersom de är lätta, anpassningsbara och välunderstödda.
:::

### Steg 3: Skapa sidorna

Bygg ut varje sida med:

- **Platshållar-innehåll** som läser naturligt för fitness ("Välkommen till [Studio Name]" istället för "Lorem ipsum")
- **Platshållarbilder** från gratis bildarkiv som visar fitnessaktiviteter
- **Funktionella layouter** med hjälp av page builder eller block editor

Gör platshållar-innehållet instruktivt där det är möjligt. Istället för generisk fylltext, skriv innehåll som: "Ersätt detta med en kort beskrivning av ditt studio och vad som gör det speciellt. Nämn din träningsfilosofi, års erfarenhet eller vad klienterna kan förvänta sig."

### Steg 4: Konfigurera plugins

Installera och aktivera plugins som träningsstudior behöver:

- Ett boknings- eller schemaläggningsplugin (om det är tillämpligt för din plannivå)
- Ett kontaktformulär-plugin
- Ett SEO-plugin (förkonfigurerat med fitnessrelevanta standardinställningar)

### Steg 5: Markera som mall

1. Gå till **Ultimate Multisite > Sites**
2. Redigera mall-webbplatsen
3. Aktivera växlingsknappen **Site Template**

Upprepa denna process för varje mall du vill erbjuda.

## Mallkvalitetskontroll

Innan du gör en mall tillgänglig, verifiera följande:

- [ ] Alla sidor laddar korrekt och ser professionella ut
- [ ] Platshållar-innehållet är hjälpsamt och nischspecifikt
- [ ] Bilderna är lämpliga och korrekt licensierade
- [ ] Mobilresponsiviteten fungerar på alla sidor
- [ ] Navigeringen är logisk och komplett
- [ ] Kontaktformulären fungerar
- [ ] Inga trasiga länkar eller saknade tillgångar
- [ ] Sidladdningshastigheten är acceptabel

## FitSite-nätverket hittills

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## Vad vi byggde i denna lektion

- **Tre nischspecifika mallar** designade för olika storlekar på träningsföretag
- **Fitnessanpassat innehåll och bildmaterial** som får plattformen att kännas byggd specifikt
- **Instruktivt platshållar-innehåll** som guidar kunderna genom anpassningen
- **En kvalitetskontrollista** för att säkerställa att mallarna är redo för produktion

---

**Nästa:** [Lektion 5: Designa dina planer](lesson-5-plans) -- där vi skapar produktnivåer som matchar hur träningsföretag faktiskt fungerar.
