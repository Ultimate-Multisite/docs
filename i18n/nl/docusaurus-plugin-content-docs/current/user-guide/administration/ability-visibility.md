---
title: Mogelijkheidszichtbaarheid
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Zichtbaarheid van Functionaliteiten (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 introduceert **Ability Visibility** (Zichtbaarheid van Functionaliteiten) besturingselementen die bepalen welke interfaces elke functionaliteit blootstellen. Dit stelt beheerders in staat om nauwkeurig in te stellen welke agent-mogelijkheden beschikbaar zijn via REST APIs, MCP servers, WooCommerce-integraties en andere interfaces.

## Wat is Ability Visibility? {#what-is-ability-visibility}

Ability Visibility is een toegangsbeheersysteem dat controleert over:

- **Welke functionaliteiten** beschikbaar zijn voor agents
- **Waar ze worden blootgesteld** (REST API, MCP, WooCommerce, enz.)
- **Wie er toegang toe kan krijgen** (via partner allow-lists)
- **Hoe ze worden geclassificeerd** (erkend vs. niet-geclassificeerd)

Elke functionaliteit heeft een zichtbaarheidsniveau dat bepaalt hoe deze beschikbaar is op verschillende interfaces.

## Zichtbaarheidsniveaus {#visibility-levels}

### Public (Openbaar) {#public}

**Openbare functionaliteiten** zijn overal beschikbaar:

- REST API endpoints
- MCP servers
- WooCommerce integraties
- Chat interfaces
- Alle gebruikersrollen (met de juiste rechten)

Voorbeeld: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (Intern) {#internal}

**Interne functionaliteiten** zijn alleen beschikbaar binnen uw WordPress-installatie:

- Chat interfaces
- Admin panels
- Alleen voor ingelogde gebruikers
- Niet blootgesteld via REST API of externe integraties

Voorbeeld: `manage-settings`, `view-analytics`, `export-data`

### Partner {#partner}

**Partnerfunctionaliteiten** zijn alleen beschikbaar voor geautoriseerde partners:

- Vereist expliciete vermelding op de partner allow-list
- Beschikbaar via REST API met partnergegevens
- Beschikbaar via MCP met partnerauthenticatie
- Niet beschikbaar voor gewone gebruikers

Voorbeeld: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (Uitgeschakeld) {#disabled}

**Uitgeschakelde functionaliteiten** zijn nergens beschikbaar:

- Niet blootgesteld via enige interface
- Niet beschikbaar in chat
- Niet beschikbaar in admin panels
- Handig voor verouderde of experimentele functionaliteiten

## Beheer van Ability Visibility {#managing-ability-visibility}

### Toegang tot Ability Visibility Instellingen {#accessing-ability-visibility-settings}

1. Ga naar **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klik op het tabblad **Abilities**
3. U ziet een lijst van alle geïnstalleerde functionaliteiten met hun zichtbaarheidsniveaus

### Bekijken van Functionaliteitsdetails {#viewing-ability-details}

Klik op een functionaliteit om te zien:

- **Name**: De identificatie van de functionaliteit
- **Description**: Wat de functionaliteit doet
- **Current visibility**: Public, Internal, Partner, of Disabled
- **Partner allow-list**: Welke partners toegang kunnen krijgen (indien Partner zichtbaarheid)
- **Last updated**: Wanneer de zichtbaarheid voor het laatst is gewijzigd
- **Status**: Recognized of Unclassified

### Wijzigen van Zichtbaarheidsniveaus {#changing-visibility-levels}

Om de zichtbaarheid van een functionaliteit te wijzigen:

1. Klik op de functionaliteit in de lijst
2. Selecteer een nieuw zichtbaarheidsniveau uit het dropdownmenu
3. Als u "Partner" selecteert, voeg dan partner-identifiers toe aan de allow-list
4. Klik op **Save**

Voorbeeld:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Groepsonderhoud (Bulk Operations) {#bulk-operations}

Om de zichtbaarheid van meerdere functionaliteiten te wijzigen:

1. Vink de vakjes naast de functionaliteiten aan
2. Selecteer een nieuw zichtbaarheidsniveau uit het bulk actie dropdownmenu
3. Klik op **Apply**

## Partner Allow-List {#partner-allow-list}

De **partner allow-list** bepaalt welke externe partners toegang krijgen tot Partner-niveau functionaliteiten.

### Partners Toevoegen {#adding-partners}

1. Ga naar **Superdav AI Agent** → **Settings** → **Partners**
2. Klik op **Add Partner**
3. Voer de partner-identifier in (meestal een API-sleutel of organisatie-ID)
4. Voeg optioneel een partnernaam en beschrijving toe
5. Klik op **Save**

### Functionaliteiten Toewijzen aan Partners {#assigning-abilities-to-partners}

Nadat u een partner heeft toegevoegd:

1. Ga naar het tabblad **Abilities**
2. Zoek een functionaliteit met Partner zichtbaarheid
3. Klik om te bewerken
4. In de sectie "Partner allow-list", vink de vakjes aan voor de partners die toegang moeten hebben
5. Klik op **Save**

### Partner Toegang Intrekken {#revoking-partner-access}

Om de toegang van een partner te verwijderen:

1. Bewerk de functionaliteit
2. Haal het vinkje van de partner in de allow-list
3. Klik op **Save**

De partner verliest onmiddellijk toegang tot die functionaliteit.

## Niet-geclassificeerde Functionaliteiten (Unclassified Abilities) {#unclassified-abilities}

Wanneer u een third-party functionaliteit installeert die Superdav AI Agent niet herkent, wordt deze gemarkeerd als **Unclassified**.

### Admin Melding voor Unclassified Abilities {#admin-notice-for-unclassified-abilities}

U ziet een admin melding:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities Bekijken {#reviewing-unclassified-abilities}

1. Klik op **Review Abilities** in de melding
2. Voor elke niet-geclassificeerde functionaliteit ziet u:
   - Naam en beschrijving van de functionaliteit
   - Bron (welke plugin/addon deze heeft geïnstalleerd)
   - Voorgesteld zichtbaarheidsniveau
   - Beoordeling van de beveiliging

3. Kies een zichtbaarheidsniveau:
   - **Public**: Vertrouw de functionaliteit; stel deze overal bloot
   - **Internal**: Beperk tot intern gebruik
   - **Partner**: Beperk tot specifieke partners
   - **Disabled**: Gebruik deze functionaliteit niet

4. Klik op **Classify** om uw beslissing op te slaan

### Waarom Unclassified Abilities Classificeren? {#why-classify-unclassified-abilities}

Het classificeren van functionaliteiten:

- **Verbetert de beveiliging**: U keurt expliciet goed wat wordt blootgesteld
- **Voorkomt ongevallen**: Niet-geclassificeerde functionaliteiten zijn standaard uitgeschakeld
- **Maakt functies mogelijk**: Zodra geclassificeerd, is de functionaliteit beschikbaar
- **Documenteert beslissingen**: Uw keuzes worden gelogd voor auditdoeleinden

## Zichtbaarheid in Verschillende Interfaces {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Openbare functionaliteiten** zijn beschikbaar via REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interne en Partnerfunctionaliteiten** zijn niet beschikbaar via REST API.

### MCP Servers {#mcp-servers}

**Openbare functionaliteiten** zijn beschikbaar via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interne functionaliteiten** worden niet blootgesteld via MCP.

**Partnerfunctionaliteiten** zijn alleen beschikbaar met partnergegevens.

### WooCommerce Integratie {#woocommerce-integration}

**Openbare functionaliteiten** gerelateerd aan WooCommerce zijn beschikbaar:

- Productbeheer
- Orderverwerking
- Klantcommunicatie

**Interne functionaliteiten** worden niet blootgesteld aan WooCommerce.

### Chat Interface {#chat-interface}

**Alle functionaliteiten** (Public, Internal, Partner) zijn beschikbaar in chat, afhankelijk van de gebruikersrechten:

- Beheerders zien alle functionaliteiten
- Gewone gebruikers zien alleen Openbare functionaliteiten
- Partners zien Openbare + Partnerfunctionaliteiten (indien geautoriseerd)

## Beveiligingsbest Practices {#security-best-practices}

### Principe van Minste Privileges (Principle of Least Privilege) {#principle-of-least-privilege}

- Stel functionaliteiten in op het meest beperkende zichtbaarheidsniveau dat hun gebruik nog toestaat
- Gebruik Partner zichtbaarheid voor gevoelige operaties
- Schakel functionaliteiten uit die u niet gebruikt

### Regelmatige Audits {#regular-audits}

- Controleer maandelijks de zichtbaarheid van functionaliteiten
- Controleer op niet-geclassificeerde functionaliteiten
- Neem toegang in voor niet-gebruikte partners

### Logging en Monitoring {#logging-and-monitoring}

- Monitor welke functionaliteiten het meest worden gebruikt
- Houd het toegangspatroon van partners bij
- Waarschuw bij ongebruikelijk gebruik van functionaliteiten

### Third-Party Functionaliteiten {#third-party-abilities}

- Controleer third-party functionaliteiten voordat u ze activeert
- Classificeer ze expliciet
- Begin met Internal of Partner zichtbaarheid
- Promoveer naar Public pas nadat u ze grondig heeft gecontroleerd

## Probleemoplossing (Troubleshooting) {#troubleshooting}

**Een functionaliteit wordt niet in de lijst getoond**
- Controleer of de functionaliteit is geïnstalleerd en actief
- Controleer of de plugin/addon is ingeschakeld
- Vernieuw de pagina

**Ik kan de zichtbaarheid van een functionaliteit niet wijzigen**
- Controleer of u beheerdersrechten heeft
- Controleer of de functionaliteit niet wordt geblokkeerd door een plugin
- Probeer conflicterende plugins uit te schakelen

**Een partner kan geen functionaliteit benaderen**
- Controleer of de partner in de allow-list staat
- Controleer of de zichtbaarheid van de functionaliteit is ingesteld op Partner
- Bevestig of de partnergegevens correct zijn
- Controleer de API logs op authenticatiefouten

**Niet-geclassificeerde functionaliteiten blijven verschijnen**
- Controleer en classificeer ze in de admin melding
- Controleer of uw classificatie is opgeslagen
- Bevestig dat de plugin die de functionaliteit levert up-to-date is

## Migratie vanuit Legacy Mode {#migration-from-legacy-mode}

Als u upgradeert van een oudere versie van Superdav AI Agent:

- Alle bestaande functionaliteiten worden automatisch geclassificeerd als Public
- Controleer en pas de zichtbaarheid indien nodig aan
- Geen actie vereist, tenzij u de toegang wilt beperken

Zie **Third-Party Mode Migration** voor meer details over de overgang naar de native Abilities API-integratie.

## Volgende Stappen {#next-steps}

Nadat u de zichtbaarheid van functionaliteiten heeft geconfigureerd:

1. **Controleer uw functionaliteiten**: Voer een audit uit van alle geïnstalleerde functionaliteiten
2. **Classificeer niet-geclassificeerde functionaliteiten**: Reageer op admin meldingen
3. **Stel partners in**: Voeg partners toe als u Partner zichtbaarheid gebruikt
4. **Monitor het gebruik**: Houd bij welke functionaliteiten het meest worden gebruikt
5. **Documenteer beslissingen**: Houd aantekeningen bij over waarom u elk zichtbaarheidsniveau heeft gekozen
