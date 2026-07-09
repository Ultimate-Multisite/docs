---
title: Synlighet av evner
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Synlighet for funksjoner (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 introduserer kontroller for **Ability Visibility** som styrer hvilke grensesnitt som eksponerer hver funksjon. Dette lar administratorer finjustere hvilke agent-kapasiteter som er tilgjengelige via REST APIs, MCP-servere, WooCommerce-integrasjoner og andre grensesnitt.

## Hva er Ability Visibility? {#what-is-ability-visibility}

Ability Visibility er et tillatelsessystem som kontrollerer:

- **Hvilke funksjoner** som er tilgjengelige for agenter
- **Hvor de eksponeres** (REST API, MCP, WooCommerce, osv.)
- **Hvem som kan få tilgang til dem** (via partner allow-lists)
- **Hvordan de klassifiseres** (gjenkjent vs. uklassifisert)

Hver funksjon har et synlighetsnivå som bestemmer tilgjengeligheten på tvers av ulike grensesnitt.

## Synlighetsnivåer {#visibility-levels}

### Public (Offentlig) {#public}

**Public abilities** er tilgjengelige overalt:

- REST API-endepunkter
- MCP-servere
- WooCommerce-integrasjoner
- Chat-grensesnitt
- Alle brukerroller (med passende tillatelser)

Eksempel: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Internt) {#internal}

**Internal abilities** er kun tilgjengelige innenfor din WordPress-installasjon:

- Chat-grensesnitt
- Admin-paneler
- Kun for påloggede brukere
- Ikke eksponert via REST API eller eksterne integrasjoner

Eksempel: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partner abilities** er kun tilgjengelige for hvitlistede partnere:

- Krever eksplisitt oppføring i partner allow-list
- Tilgjengelig via REST API med partner-legitimasjon
- Tilgjengelig via MCP med partnerautentisering
- Ikke tilgjengelig for vanlige brukere

Eksempel: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Deaktivert) {#disabled}

**Disabled abilities** er ikke tilgjengelige noe sted:

- Ikke eksponert via noe grensesnitt
- Ikke tilgjengelig i chat
- Ikke tilgjengelig i admin-paneler
- Nyttig for foreldede eller eksperimentelle funksjoner

## Administrering av Ability Visibility {#managing-ability-visibility}

### Tilgang til Ability Visibility-innstillingene {#accessing-ability-visibility-settings}

1. Gå til **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klikk på fanen **Abilities**
3. Du vil se en liste over alle installerte funksjoner med deres synlighetsnivåer

### Visning av Ability-detaljer {#viewing-ability-details}

Klikk på en hvilken som helst funksjon for å se:

- **Name**: Funksjonens identifikator
- **Description**: Hva funksjonen gjør
- **Current visibility**: Public, Internal, Partner eller Disabled
- **Partner allow-list**: Hvilke partnere som kan få tilgang (hvis Partner synlighet)
- **Last updated**: Når synligheten sist ble endret
- **Status**: Recognized eller Unclassified

### Endring av Synlighetsnivåer {#changing-visibility-levels}

For å endre synligheten til en funksjon:

1. Klikk på funksjonen i listen
2. Velg et nytt synlighetsnivå fra rullegardinmenyen
3. Hvis du velger "Partner", legg til partner-identifikatorer i allow-listen
4. Klikk på **Save**

Eksempel:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masseoperasjoner (Bulk Operations) {#bulk-operations}

For å endre synligheten for flere funksjoner:

1. Kryss av i boksene ved siden av funksjonene
2. Velg et nytt synlighetsnivå fra bulk action-rullegardinmenyen
3. Klikk på **Apply**

## Partner Allow-List {#partner-allow-list}

**Partner allow-listen** kontrollerer hvilke eksterne partnere som kan få tilgang til Partner-nivå funksjoner.

### Legge til Partnere {#adding-partners}

1. Gå til **Superdav AI Agent** → **Settings** → **Partners**
2. Klikk på **Add Partner**
3. Skriv inn partner-identifikatoren (vanligvis en API-nøkkel eller organisasjons-ID)
4. Legg eventuelt til et partnernavn og en beskrivelse
5. Klikk på **Save**

### Tildele Funksjoner til Partnere {#assigning-abilities-to-partners}

Etter at du har lagt til en partner:

1. Gå til fanen **Abilities**
2. Finn en funksjon med Partner synlighet
3. Klikk for å redigere
4. I seksjonen "Partner allow-list", kryss av i boksene for de partnerne som skal ha tilgang
5. Klikk på **Save**

### Tilbakekalle Partner-tilgang {#revoking-partner-access}

For å fjerne en partners tilgang:

1. Rediger funksjonen
2. Fjern krysset i partnerens boks i allow-listen
3. Klikk på **Save**

Partneren mister umiddelbart tilgangen til den funksjonen.

## Uklassifiserte Funksjoner (Unclassified Abilities) {#unclassified-abilities}

Når du installerer en tredjepartsfunksjon som Superdav AI Agent ikke gjenkjenner, merkes den som **Unclassified**.

### Admin-varsel for Uklassifiserte Funksjoner {#admin-notice-for-unclassified-abilities}

Du vil se et admin-varsel:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Gjennomgang av Uklassifiserte Funksjoner {#reviewing-unclassified-abilities}

1. Klikk på **Review Abilities** i varselet
2. For hver uklassifisert funksjon, vil du se:
   - Funksjonsnavn og beskrivelse
   - Kilde (hvilket plugin/tillegg som installerte den)
   - Foreslått synlighetsnivå
   - Sikkerhetsvurdering

3. Velg et synlighetsnivå:
   - **Public**: Stoler på funksjonen; eksponerer den overalt
   - **Internal**: Begrenser til kun intern bruk
   - **Partner**: Begrenser til spesifikke partnere
   - **Disabled**: Ikke bruk denne funksjonen

4. Klikk på **Classify** for å lagre avgjørelsen din

### Hvorfor klassifisere uklassifiserte funksjoner? {#why-classify-unclassified-abilities}

Å klassifisere funksjoner:

- **Forbedrer sikkerheten**: Du godkjenner eksplisitt hva som eksponeres
- **Forebygger uhell**: Uklassifiserte funksjoner er deaktivert som standard
- **Aktiverer funksjoner**: Når den er klassifisert, blir funksjonen tilgjengelig
- **Dokumenterer beslutninger**: Dine valg logges for revisjonsformål

## Synlighet i Ulike Grensesnitt {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Public abilities** er tilgjengelige via REST-endepunkter:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal og Partner abilities** er ikke tilgjengelige via REST API.

### MCP Servers {#mcp-servers}

**Public abilities** er tilgjengelige via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** eksponeres ikke via MCP.

**Partner abilities** er kun tilgjengelige med partner-legitimasjon.

### WooCommerce Integration {#woocommerce-integration}

**Public abilities** relatert til WooCommerce er tilgjengelige:

- Produktadministrasjon
- Ordrebehandling
- Kundekommunikasjon

**Internal abilities** eksponeres ikke til WooCommerce.

### Chat Interface {#chat-interface}

**Alle abilities** (Public, Internal, Partner) er tilgjengelige i chat, avhengig av brukerrettigheter:

- Administratorer ser alle funksjoner
- Vanlige brukere ser kun Public abilities
- Partnere ser Public + Partner abilities (hvis hvitlistet)

## Sikkerhetspraksis {#security-best-practices}

### Prinsippet om minste privilegium (Principle of Least Privilege) {#principle-of-least-privilege}

- Sett funksjoner til det mest restriktive synlighetsnivået som fortsatt tillater bruk
- Bruk Partner synlighet for sensitive operasjoner
- Deaktiver funksjoner du ikke bruker

### Regelmessige revisjoner (Audits) {#regular-audits}

- Gjennomgå funksjons-synligheten månedlig
- Sjekk etter uklassifiserte funksjoner
- Fjern tilgang for ubrukte partnere

### Logging og Overvåking {#logging-and-monitoring}

- Overvåk hvilke funksjoner som brukes mest
- Spor mønstre for partner-tilgang
- Varsle ved uvanlig funksjonsbruk

### Tredjepartsfunksjoner {#third-party-abilities}

- Gjennomgå tredjepartsfunksjoner før du aktiverer dem
- Klassifiser dem eksplisitt
- Start med Internal eller Partner synlighet
- Fremhev til Public kun etter grundig vurdering

## Feilsøking (Troubleshooting) {#troubleshooting}

**En funksjon vises ikke i listen**
- Verifiser at funksjonen er installert og aktiv
- Sjekk at plugin/tillegg er aktivert
- Oppdater siden

**Jeg kan ikke endre en funksjons synlighet**
- Verifiser at du har administratorrettigheter
- Sjekk at funksjonen ikke er låst av et plugin
- Prøv å deaktivere konflikterende plugins

**En partner kan ikke få tilgang til en funksjon**
- Verifiser at partneren er i allow-listen
- Sjekk at funksjonens synlighet er satt til Partner
- Bekreft at partnerens legitimasjon er korrekt
- Sjekk API-logger for autentiseringsfeil

**Uklassifiserte funksjoner fortsetter å dukke opp**
- Gjennomgå og klassifiser dem i admin-varselet
- Sjekk at klassifiseringen din ble lagret
- Verifiser at pluginet som gir funksjonen er oppdatert

## Migrering fra Legacy Mode {#migration-from-legacy-mode}

Hvis du oppgraderer fra en eldre versjon av Superdav AI Agent:

- Alle eksisterende funksjoner blir automatisk klassifisert som Public
- Gjennomgå og juster synligheten etter behov
- Ingen handling kreves med mindre du ønsker å begrense tilgangen

Se **Third-Party Mode Migration** for flere detaljer om overgangen til native Abilities API-integrasjon.

## Neste Steg {#next-steps}

Etter at du har konfigurert funksjons-synligheten:

1. **Gjennomgå dine funksjoner**: Gjennomfør en revisjon av alle installerte funksjoner
2. **Klassifiser uklassifiserte funksjoner**: Svar på admin-varsler
3. **Sett opp partnere**: Legg til partnere hvis du bruker Partner synlighet
4. **Overvåk bruken**: Spor hvilke funksjoner som brukes mest
5. **Dokumenter beslutninger**: Ta notater om hvorfor du valgte hvert synlighetsnivå
