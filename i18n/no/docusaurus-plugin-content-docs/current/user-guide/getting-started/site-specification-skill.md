---
title: Nettstedspesifikasjonsferdigheter
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill

**Site Specification skill** er en strukturert tilnærming for å fange opp nettstedets mål, målgruppe og merkevareidentitet. Denne informasjonen lagres i ditt **site_brief** minne, som agenter refererer til på tvers av økter for å gi konsistent og kontekstbevisst hjelp.

## Hva er Site Specification?

Site Specification er prosessen med å dokumentere:

- **Nettstedets formål**: Hva nettstedet gjør og hvorfor det eksisterer
- **Målgruppe**: Hvem som besøker nettstedet og hva de trenger
- **Merkevareidentitet**: Dine farger, tone og visuelle stil
- **Forretningsmål**: Hva suksess ser ut som for nettstedet ditt
- **Innholdsstruktur**: Hvordan nettstedet ditt er organisert

Denne spesifikasjonen blir ditt **site_brief**, et vedvarende minne som agenter bruker for å forstå konteksten til nettstedet ditt.

## Hvorfor bruke Site Specification?

### Konsistens på tvers av økter

Uten site_brief må du forklare nettstedets formål på nytt hver gang du starter en ny økt. Med det forstår agentene umiddelbart:

- Nettstedets mål og målgruppe
- Merkevarefargene og tonen din
- Innholdsstrukturen din
- Forretningsmålene dine

### Bedre anbefalinger

Agentene bruker site_briefen din til å:

- Foreslå funksjoner som samsvarer med nettstedets formål
- Anbefale innholdsstrukturer som matcher målene dine
- Foreslå design som er konsistente med merkevaren din
- Unngå å foreslå inkompatible funksjoner

### Raskere opplæring

Nye agenter (eller agenter i nye økter) kan raskt komme i gang ved å lese site_briefen din, i stedet for å måtte stille avklarende spørsmål.

## Starte Site Specification

### Under Theme Builder Onboarding

Site Specification skill starter automatisk under **Theme Builder onboarding flow**. Setup Assistant agent stiller spørsmål og bygger site_briefen din.

### Manuell igangsetting

Du kan starte Site Specification når som helst:

```
"La oss definere site-spesifikasjonen min"
```

eller

```
"Hjelp meg med å lage et site brief"
```

## Site Specification-prosessen

### Trinn 1: Nettstedets formål

Agenten spør:

```
Hva er nettstedets primære formål?
- E-handelsbutikk
- Blogg eller innholdsside
- Portefølje eller utstilling
- SaaS-applikasjon
- Fellesskap eller forum
- Andre: [beskriv]
```

Du kan velge en kategori eller beskrive ditt eget formål.

### Trinn 2: Målgruppe

```
Hvem er din primære målgruppe?
- Forbrukere / allmennheten
- Forretningsfolk
- Utviklere / tekniske brukere
- Studenter / utdannere
- Andre: [beskriv]

Hva er deres hovedbehov?
```

### Trinn 3: Merkevareidentitet

```
Hva er merkevarefargene dine?
- Primærfarge: [fargevelger eller hex-kode]
- Sekundærfarge: [fargevelger eller hex-kode]
- Aksentfarge: [valgfritt]

Hvordan ville du beskrive merkevaretonen din?
- Profesjonell / bedriftsmessig
- Kreativ / kunstnerisk
- Lekende / uformell
- Minimalistisk / moderne
- Varm / vennlig
```

### Trinn 4: Forretningsmål

```
Hva ser suksess ut som for nettstedet ditt?
- Generere leads
- Selge produkter
- Bygge fellesskap
- Dele kunnskap
- Etablere autoritet
- Andre: [beskriv]

Hva er din primære metrikk?
- Inntekter
- Brukerengasjement
- Innholdsrekkevidde
- Konverteringer
- Andre
```

### Trinn 5: Innholdsstruktur

```
Hvordan er innholdet ditt organisert?
- Flatt (alt innhold på samme nivå)
- Hierarkisk (kategorier og underkategorier)
- Kronologisk (bloggstil)
- Produktbasert (katalog)
- Andre: [beskriv]

Hvilke innholdstyper bruker du?
- Blogginnlegg
- Produktsider
- Casestudier
- Dokumentasjon
- Videoer
- Andre
```

## Ditt site_brief Minne

Etter at du har fullført Site Specification, lagres informasjonen din som **site_brief** i agentens minne. Dette er en strukturert opptegnelse som inneholder:

```json
{
  "site_purpose": "E-handelsbutikk for håndlaget smykke",
  "target_audience": "Kvinner i alderen 25-45, interessert i bærekraftig mote",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Varm, håndverksmessig, bærekraftig",
  "business_goals": ["Generere salg", "Bygge merkelojalitet"],
  "primary_metric": "Inntekter",
  "content_structure": "Produktkatalog med blogg",
  "content_types": ["Produktsider", "Blogginnlegg", "Kundefortellinger"]
}
```

## Se og oppdatere site_briefen din

### Se site_briefen din

Spør agenten:

```
"Vis meg mitt site brief"
```

eller

```
"Hva vet du om nettstedet mitt?"
```

Agenten vil vise den lagrede spesifikasjonen din.

### Oppdatere site_briefen din

Hvis nettstedet ditt utvikler seg, kan du oppdatere det:

```
"Oppdater mitt site brief: vi retter oss nå mot B2B-kunder"
```

eller

```
"Oppfrisk min site spesifikasjon"
```

Dette vil kjøre Site Specification skill på nytt med din eksisterende informasjon som utgangspunkt.

## Hvordan agenter bruker site_brief

### Designanbefalinger

Når du ber om designendringer, refererer agentene til site_briefen din:

```
Du: "Redesign min forsiden"
Agent: "Basert på site briefen din retter du deg mot kvinner i alderen 25-45
med en varm, håndverksmessig tone. Jeg vil lage et design som vektlegger
håndlagde smykker og bærekraftige verdier."
```

### Funksjonsforslag

Agentene foreslår funksjoner som samsvarer med målene dine:

```
Du: "Hvilke funksjoner bør jeg legge til?"
Agent: "For en e-handelsbutikk fokusert på kundelojalitet,
vil jeg anbefale: lojalitetsprogram, kundeanmeldelser, e-postnyhetsbrev
og produktanbefalinger."
```

### Innholdsstruktur

Agentene foreslår innholdsorganisering basert på strukturen din:

```
Du: "Hvordan bør jeg organisere bloggen min?"
Agent: "Siden du bruker en produktkatalog med blogg, vil jeg foreslå
å organisere innlegg etter produktkategori og lage 'stylingguider'
som viser flere produkter sammen."
```

## Beste praksis

### Vær spesifikk

I stedet for "allmenn målgruppe," beskriv din faktiske målgruppe:

- ✓ "Kvinner i alderen 25-45, interessert i bærekraftig mote"
- ✗ "Alle"

### Oppdater regelmessig

Ettersom nettstedet ditt utvikler seg, oppdater site_briefen din:

- Når du skifter fokus til en ny målgruppe
- Når du legger til nye produktlinjer
- Når merkevareidentiteten din endres
- Når forretningsmålene dine endres

### Bruk konsistent terminologi

Bruk de samme begrepene på tvers av økter:

- ✓ Si alltid "bærekraftig smykke" (ikke "miljøvennlig smykke" og "grønne produkter")
- ✓ Referer konsekvent til målgruppen på samme måte

### Inkluder kontekst

Gi bakgrunnsinformasjon som hjelper agentene å forstå beslutningene dine:

- "Vi retter oss mot profesjonelle som verdsetter kvalitet over pris"
- "Målgruppen vår er teknisk kyndig og forventer moderne design"
- "Vi er en oppstartsbedrift uten store midler, så vi trenger kostnadseffektive løsninger"

## Forhold til Theme Builder Onboarding

Site Specification skill er integrert i **Theme Builder onboarding flow**. Når du fullfører onboarding, blir site_briefen din automatisk opprettet med informasjonen du ga.

Du kan også kjøre Site Specification uavhengig hvis du ønsker det:

- For å forfine spesifikasjonen etter den første oppsettet
- For å oppdatere site briefen etter hvert som nettstedet ditt utvikler seg
- For å lage en detaljert spesifikasjon før du starter med Theme Builder

## Feilsøking

**site_briefen min blir ikke brukt**
- Bekreft at agenten har tilgang til minnet
- Be agenten om å "minne meg på site briefen min"
- Sjekk at minnet er aktivert i innstillingene dine

**Jeg vil starte på nytt med et nytt site_brief**
- Spør agenten: "Tøm mitt site brief og start på nytt"
- Kjør deretter Site Specification på nytt

**Agenten gir anbefalinger som ikke samsvarer med site_briefen min**
- Be agenten om å "gjennomgå site briefen min"
- Oppdater site_briefen din hvis den er utdatert
- Gi tilleggskontekst i forespørslene dine

## Neste skritt

Etter at du har definert site-spesifikasjonen din:

1. **Bruk Theme Builder**: Lag et tilpasset tema basert på site_briefen din
2. **Forbedre design**: Bruk Design System Aesthetics skill for detaljert designarbeid
3. **Planlegge innhold**: Be agentene om anbefalinger for innholdsstruktur
4. **Bygge funksjoner**: Be om funksjoner som samsvarer med forretningsmålene dine
