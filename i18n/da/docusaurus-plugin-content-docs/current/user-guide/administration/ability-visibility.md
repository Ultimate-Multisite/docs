---
title: Synlighed af funktioner
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Tilgængelighedsvisibilitet (Ability Visibility)

Superdav AI Agent v1.12.0 introducerer **Tilgængelighedsvisibilitets** kontroller, som styrer, hvilke overflader der viser hver evne. Dette giver administrator mulighed for at finjustere, hvilke agentkapaciteter der er tilgængelige via REST API'er, MCP-servere, WooCommerce-integrationer og andre interfaces.

## Hvad er Tilgængelighedsvisibilitet?

Tilgængelighedsvisibilitet er et tilladelsessystem, der styrer:

- **Hvilke evner** der er tilgængelige for agenter
- **Hvor de eksponeres** (REST API, MCP, WooCommerce osv.)
- **Hvem der kan få adgang** (via partner allow-lists)
- **Hvordan de klassificeres** (genkendte vs. uklassificerede)

Hver evne har et synlighedsniveau, der bestemmer dens tilgængelighed på tværs af forskellige overflader.

## Synlighedsniveauer

### Offentlig (Public)

**Offentlige evner** er tilgængelige overalt:

- REST API endpoints
- MCP servere
- WooCommerce integrationer
- Chat interfaces
- Alle brugerroller (med de passende rettigheder)

Eksempel: `scaffold-block-theme`, `activate-theme`, `send-email`

### Intern (Internal)

**Interne evner** er kun tilgængelige inden for din WordPress-installation:

- Chat interfaces
- Admin panels
- Kun loggede brugere
- Ikke eksponeret via REST API eller eksterne integrationer

Eksempel: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Partner-evner** er kun tilgængelige for hvidlister af partnere:

- Kræver eksplicit indføjelse på partner allow-list
- Tilgængelig via REST API med partner-credentials
- Tilgængelig via MCP med partner-autentifikation
- Ikke tilgængelig for almindelige brugere

Eksempel: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deaktiveret (Disabled)

**Deaktiverede evner** er ikke tilgængelige nogen steder:

- Ikke eksponeret via nogen overflade
- Ikke tilgængelig i chat
- Ikke tilgængelig i admin panels
- Nyttigt for devaluerede eller eksperimentelle evner

## Administrering synlighed for evner

### Tilgang til indstillinger for synlighed af evner

1. Gå til **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik på fanen **Abilities** (Evner)
3. Her ser du en liste over alle installerede evner med deres synlighedsgrader

### Se detaljer om evner

Klik på enhver evne for at se:

- **Name**: Evnens identifikator
- **Description**: Hvad evnen gør
- **Current visibility** (Nuværende synlighed): Offentlig, Intern, Partner eller Deaktiveret
- **Partner allow-list** (Partner tilladelsesliste): Hvilke partnere kan få adgang (hvis Partner-synlighed er valgt)
- **Last updated** (Sidste opdatering): Hvornår synligheden sidst blev ændret
- **Status**: Anerkendt eller Uklassificeret

### Ændring af synlighedsgrader

For at ændre en evnes synlighed:

1. Klik på evnen i listen
2. Vælg et nyt synlighedsniveau fra rullemenuen
3. Hvis du vælger "Partner", skal du tilføje partner-identifikatorer til tilladelseslisten
4. Klik på **Save** (Gem)

Eksempel:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masseoperationer

For at ændre synligheden for flere evner:

1. Marker de afkrydsningsfelter ved siden af de relevante evner
2. Vælg et nyt synlighedsniveau fra rullemenuen til massehandling
3. Klik på **Apply** (Anvend)

## Partner tilladelsesliste

**Partner allow-list** styrer, hvilke eksterne partnere der kan få adgang til evner med Partner-niveau.

### Tilføjelse af partnere

1. Gå til **Superdav AI Agent** → **Settings** → **Partners**
2. Klik på **Add Partner** (Tilføj partner)
3. Indtast partner-identifikatoren (typisk en API key eller organisations ID)
4. Tilføj eventuelt et partnernavn og en beskrivelse
5. Klik på **Save** (Gem)

### Tildeling af evner til partnere

Efter at have tilføjet en partner:

1. Gå til fanen **Abilities**
2. Find en evne med Partner synlighed
3. Klik på den for at redigere
4. I sektionen "Partner allow-list" skal du markere de bokse for de partnere, der skal have adgang
5. Klik på **Gem**

### Tilbagetrækning af partneradgang

For at fjerne en partners adgang:

1. Rediger evnen
2. Afmarker partnerens boks i tilladelisten
3. Klik på **Gem**

Partneren mister øjeblikkeligt adgangen til den pågældende evne.

## Uklassificerede evner

Når du installerer en tredjeparts-evne, som Superdav AI Agent ikke genkender, markeres den som **Uklassificeret**.

### Admin meddelelse for uklassificerede evner

Du vil se en admin meddelelse:

```
⚠️ Uklassificerede evner opdaget

Følgende evner er installeret, men genkendt:
- custom-import-tool
- external-api-wrapper

Disse evner kan udgøre sikkerheds- eller kompatibilitetsrisici.
Venligst gennemgå og klassificer dem.

[Gennemse evner] [Afvis]
```

### Gennemgang af uklassificerede evner

1. Klik på **Review Abilities** i meddelelsen
2. For hver uklassificeret evne vil du se:
   - Evnenavn og beskrivelse
   - Kilde (hvilken plugin/addon der installerede den)
   - Foreslået synlighedsniveau
   - Sikkerheds vurdering

3. Vælg et synlighedsniveau:
   - **Public**: Stol på evnen; eksponér den overalt
   - **Internal**: Begræns til intern brug kun
   - **Partner**: Begræns til specifikke partnere
   - **Disabled**: Brug ikke denne evne

4. Klik på **Classify** for at gemme din beslutning

### Hvorfor klassificere uklassificerede evner?

Klassificering af evner:

- **Forbedrer sikkerheden**: Du godkender eksplicit, hvad der bliver vist
- **Forhindrer uheld**: Uklassificerede evner er deaktiveret som standard
- **Muliggør funktioner**: Når en evne er klassificeret, bliver den tilgængelig
- **Dokumenterer beslutninger**: Dine valg logges til revisionsformål

## Synlighed på Forskellige Overflader

### REST API

**Offentlige evner** er tilgængelige via REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interne og partner-evner** er ikke tilgængelige via REST API.

### MCP Servers

**Offentlige evner** er tilgængelige via MCP:

```
MCP Server: Superdav AI Agent
Tilgængelige evner:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interne evner** eksponeres ikke via MCP.

**Partner-evner** er kun tilgængelige med partneroplysninger.

### WooCommerce Integration

**Offentlige evner** relateret til WooCommerce er tilgængelige:

- Produktstyring
- Ordbehandling
- Kundekommunikation

**Interne evner** eksponeres ikke til WooCommerce.

### Chat Interface

**Alle evner** (Offentlige, Interne, Partner) er tilgængelige i chatten, afhængigt af brugerrettigheder:

- Administratorer ser alle evner
- Almindelige brugere ser kun offentlige evner
- Partnere ser offentlige + partner-evner (hvis de er hvidlistet)

## Sikkerhedsmæssige Bedste Praksisser

### Mindst Privilegeret Adgangsprincip

- Sæt evner til den mest restriktive synlighed, der stadig tillader deres brug
- Brug partner-synlighed til følsomme operationer
- Deaktiver evner, du ikke bruger

### Regelmæssige Revisioner

- Gennemgå evne-synligheden månedligt
- Tjek efter uklassificerede evner
- Fjern adgang for ubrugte partnere

### Logning og Overvågning

- Overvåg hvilke evner der bruges mest
- Spor partneradgangsmønstre
- Alarm ved usædvanlig brug af evner

### Tredjeparts Evner

- Gennemgå tredjeparts evner, før du aktiverer dem
- Klassificér dem eksplicit
- Start med intern eller partner-synlighed
- Promover til offentlig kun efter godkendelse

## Fejlfinding

**En evne vises ikke i listen**
- Tjek, at evnen er installeret og aktiv
- Kontroller, om plugin'et/add-on er aktiveret
- Opfrisk siden

**Jeg kan ikke ændre synligheden af en evne**
- Tjek, at du har administratorrettigheder
- Kontroller, om evnen er låst af et plugin
- Prøv at deaktivere modstridende plugins

**En partner kan ikke få adgang til en evne**
- Tjek, at partneren er på tilladelseslisten (allow-list)
- Kontroller, at synligheden for evnen er sat til Partner
- Bekræft, at partnerens legitimationsoplysninger er korrekte
- Tjek API-loggene for autentifikationsfejl

**Uklassificerede evner fortsætter med at dukke op**
- Gennemgå og klassificer dem i admin-meddelelsen
- Kontroller, om din klassifikation er gemt
- Bekræft, at plugin'et, der leverer evnen, er opdateret

## Migration fra Legacy Mode

Hvis du opgraderer fra en ældre version af Superdav AI Agent:

- Alle eksisterende evner klassificeres automatisk som Offentlige (Public)
- Gennemgå og juster synligheden efter behov
- Ingen handling påkrævet, medmindre du ønsker at begrænse adgangen

Se **Migration til Third-Party Mode** for flere detaljer om overgangen til integration med native Abilities API.

## Næste skridt

Efter at have konfigureret synligheden af evner:

1. **Gennemgå dine evner**: Audit alle installerede evner
2. **Klassificer uklassificerede evner**: Svar på admin-meddelelser
3. **Opsæt partnere**: Tilføj partnere, hvis du bruger Partner synlighed
4. **Overvåg brug**: Spor, hvilke evner der bruges mest
5. **Dokumentér beslutninger**: Gem noter om, hvorfor du valgte hvert synligheds niveau
