---
title: Nähtavus
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Võimaluse nähtavus (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 lisab **Võimaluse nähtavuse** kontrollid, mis määratlevad, millised pinnad (surfaces) iga võimele on avatud. See võimaldab administraatorit hianna seda, millise agenti võimed on saadaval REST API-ga, MCP serveril, WooCommerce integreerimudel ja teistes interfeesse.

## Mis on Võimaluse nähtavus? {#what-is-ability-visibility}

Võimaluse nähtavus on luba süsteem, mis kontrollib:

- **Millised võimed** on agentidele saadaval
- **Kus neid avatakse** (REST API, MCP, WooCommerce jne.)
- **Kes neid külastada** (partnerite lubamise nalistega)
- **Kuidas neid klassifitseeritakse** (tundmeks klassifitseeritud vs. klassifitseeritumata)

Iga võime on sellele omab nähtavusaste, mis määratleb selle saadavalolekuse erinevate pinnade ület.

## Nähtavusaste {#visibility-levels}

### Avalik (Public) {#public}

**Avalikud võimed** on saadaval igal kohas:

- REST API lõpppunktid
- MCP serverid
- WooCommerce integreerimudel
- Chatti interfeessid
- Kõik kasutajarolid (kohandatud lubuste abil)

Näide: `scaffold-block-theme`, `activate-theme`, `send-email`

### Sisuline (Internal) {#internal}

**Sisulised võimed** on saadaval ainult teie WordPress installatsioonil:

- Chatti interfeessid
- Administratsioonipaneled
- Ajaanded kasutajad ainult
- Ei ole avatud REST API-ga või välise integreerimudelest

Näide: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partner võimed** on saadaval ainult lubatud partneritele:

- nõuab eksplisiitset partnerite lubamise nalistega lisamist
- Saadaval REST API-ga partneri ühtlustega
- Saadaval MCP-ga partner autentifootiga
- Ei ole saadaval tavaliste kasutajate jaoks

Näide: `bulk-import-users`, `modify-billing`, `access-analytics`

### Võidetud (Disabled) {#disabled}

**Võidetud võimed** ei ole ühelgi saadaval:

- Ei ole avatud milleleki pinnaga
- Ei ole saadaval chattis
- Ei ole saadaval administratsioonipaneelides
- Kasulik vanade või eksperimentaalsete võimete jaoks

## Võimuste nähtavuse juhtimine {#managing-ability-visibility}

### Võimuste nähtavuse seadistuste külastamine {#accessing-ability-visibility-settings}

1. Minenda **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klõpsake **Abilities** tabile
3. Siin näete kõik installitud võimused ja nende nähtavusleved

### Võimuste üksikasjade vaatamise {#viewing-ability-details}

Klõpsake milleväärse võimuse all, et näha:

- **Name**: Võimuse identifitseerij
- **Description**: Mis võimus teeb
- **Current visibility**: Täna, Sisuline, Partner või Võidetud (Disabled)
- **Partner allow-list**: Millised partnerid pääsuraks (partneri nähtavuse korral)
- **Last updated**: Kui viimati muuteti nähtavust
- **Status**: Tunnistatud või Klassifitseeritumata

### Nähtavuslevede muutmise {#changing-visibility-levels}

Võimuse nähtavuse muutmine:

1. Klõpsake listis võimu all
2. Valige uus nähtavusleade valikust alasvetava menust
3. Kui valite "Partner", lisage partneri identifitseerijad allow-listile
4. Klõpsake **Save**

Näide:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Massiivsed operatsioonid {#bulk-operations}

Paljud võimuste nähtavuse muutmine:

1. Tähistage suures võimustest kõrval olevat laukut
2. Valige uus nähtavusleade valikust massiivse toimimise alasvetava menust
3. Klõpsake **Apply**

## Partneri allow-list {#partner-allow-list}

**Partneri allow-list** kontrollib, millised väljaspool partnerid pääsuraks Partner-tase võimusi kasutama.

### Partnerite lisamine {#adding-partners}

1. Minenda **Superdav AI Agent** → **Settings** → **Partners**
2. Klõpsake **Add Partner**
3. Sisestage partneri identifitseerij (pole igalgi API key või organisatsiooni ID)
4. Lisage valikult partneri nimi ja kirjeldus
5. Klõpsake **Save**

### Võimuste partnerite asendamine {#assigning-abilities-to-partners}

Partneri lisamist pärast:

1. Minimele **Abilite** tabis
2. Leida abilite, mille Partner nähtavus on
3. Klõpsake muutmiseks
4. "Partner allow-list" osas lühike, milles tähistate kontrolli jaoks vajalikke partnerid
5. Klõpsake **Save**

### Partneri juuritamise tagastamine {#revoking-partner-access}

Partneri küsimuse eemal damiseks:

1. Muuta abilite
2. Kontuvaadige partneri kontrollikohas olev lahendusest
3. Klõpsake **Save**

Partner kaotab selle abilite kasutamise kohe.

## Klassifitseerimatu abilited {#unclassified-abilities}

Kui installite kolmandise osalduja abilite, mida Superdav AI Agent ei tunnista, see märgitakse kui **Unclassified**.

### Administratsioonikogemus klassifitseerimatud abilite kohta {#admin-notice-for-unclassified-abilities}

Näete administrati koguniku:

```
⚠️ Klassifitseerimatud abilid tuvastatud

Järgnevate abiliste on installitud, kuid neid ei tunneta:
- custom-import-tool
- external-api-wrapper

Need abilid võivad põhjustada turvalisuse või vastupidi kasutamise riske.
Palun vaadake ja klassifitseerige need.

[Abiliste vaatamine] [Eemaldamine]
```

### Klassifitseerimatud abiliste vaatamise {#reviewing-unclassified-abilities}

1. Klõpsake küsimuses **Review Abilities**
2. Iga klassifitseerimatud abilite kohta näete:
   - Abilite nimi ja kirjeldus
   - Allikast (mis plugin/addon selle installis)
   - Soovitatud nähtavusaste
   - Turvalisuse hindamine

3. Valige nähtavusaste taseme:
   - **Public**: Uudistage usaldust abilile; avage seda igal kohas
   - **Internal**: Piirake kasutamise sisemise kasutuseni ainult
   - **Partner**: Piirake spetsiifiliste partneritele
   - **Disabled**: Ära kasutage seda abilit

4. Klõpsake **Classify** saadud otsuse salvestamiseks

### Miks klassifitseerida klassifitseerimatud abilid? {#why-classify-unclassified-abilities}

Abilite klassifitseerimine:

- **Parandab turvalisust**: Te kinnitate eksponeerimist eksplisiitselt
- **Vajab vältida õnnetusi**: Klassifitseerimatud abilid on oletuks eemaldatud
- **Avab funktsioone**: Klassifitseerimise pärast saab abilite kasutamine saadaval
- **Dokumenteerib otsuse**: Valikud on auditlikule tarkuse jaoks registreeritud

## Nähtavus erinevate pinnadeelades {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Avalikud võimalused** on saadaval REST endpointide kaudu:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Sisemised ja partneri võimalused** on REST API kaudu saadaval mitte.

### MCP Serverid {#mcp-servers}

**Avalikud võimalused** on saadaval MCP abil:

```
MCP Server: Superdav AI Agent
Käesolevad võimalused:
- scaffold-block-theme
- activate-theme
- send-email
```

**Sisemised võimalused** ei ole MCP abil avatud.

**Partneri võimalusi** on saadaval ainult partneri ühtlustega.

### WooCommerce integreerimine {#woocommerce-integration}

**WooCommercega seotud avalikud võimalused** on saadaval:

- Toote haldamine
- Tellide töötlemine
- Klientidega kommunikatsioon

**Sisemised võimalused** ei ole avatud WooCommerceile.

### Chattiküsimusinterface {#chat-interface}

**Kõik võimalused** (avalikud, sisemised, partneri) on saadaval chattis, sõltuvalt kasutaja õigustest:

- Administratejad näevad kõik võimalused
- Tavalisel kasutajatel näed ainult avalikud võimalused
- Partnerid näevad avalikud + partneri võimalusi (nend korral, kui nad on whitelistitud)

## Turvalisuse parimised praktikad {#security-best-practices}

### Väike õiguste põhimõte {#principle-of-least-privilege}

- Asetage võimalused kõige piirustavamale nähtavusle, mis nende kasutamist endiselt võimaldab
- Kasutage partneri nähtavust tundlikud operatsioonid jaoks
- Lülitage välja võimalused, mida te ei kasuta

### Regulaarsed auditi {#regular-audits}

- Kontrollige võimaluste nähtavust kord kuus kuud
- Kontrollige klassifitseerimatuide
- Eemaldage küsimatud partnerite kasutamata aksesse

### Logimine ja jälgimine {#logging-and-monitoring}

- Järgige, millise võimalusi kõige rohkem kasutatakse
- Järgige partnerite külastamise maku
- Teatage eritihedas võimaluste kasutamisest

### Kolmandate osapoolte võimalused {#third-party-abilities}

- Kontrollige kolmandate osapoolte võimalusi enne aktiveerimist
- Klassifitseerige need ekspliciteelt
- Alustage sisemise või partneri nähtavusega
- Promootige avalikuks ainult pärast kontrollimist

## Probleemlust {#troubleshooting}

**Kõrraldu ei näha loendis**
- Kontrollige, kas võlade on paigaldatud ja aktiivsed
- Kontrollige, et plugin/addon on aktiveeritud
- Vaadige lehte (refresh)

**Võlade nähtavuse muutmist ei saa teha**
- Kontrollige, et teil on administraatorlikud õigused
- Kontrollige, et võla ei ole lukustatud mingi pluginiga
- Proovige konflikti tekitavate pluginate deaktiveerimist

**Partner ei saa külastada võla**
- Kontrollige, kas partner on lubamise loendis (allow-list)
- Kontrollige, et võla nähtavus on asetatud "Partner"iks
- Lõpetage kontroll partneri kinnitust
- Kontrollige API logid autentimiskohaste vigu kohta

**Klassifitseerimatu võlad jätkuvalt ilmub**
- Vaadige ja klassifitseerige need administraatori teaveteks (admin notice)
- Kontrollige, et teie klassifikatsioon on salvestatud
- Kontrollige, kas võla antvaata plugin on uuendatud

## Migratsioon vanema režiimidest {#migration-from-legacy-mode}

Kui tõstate vanemast Superdav AI Agenti versioon:

- Kõik olemasolevad võlad klassifitseeritakse automaatselt "Public"iks
- Vaadige ja reguleerige nähtavust vajalikud juhul
- Ei vaja tegevust, kui soovite külastuse piirata

Loe **Kolmepoolse režiimi migratsiooni** rohkem infot ülesliituse API-integreerimise üle.

## Järgmine sammud {#next-steps}

Võla nähtavuse konfiguratsiooni pärast:

1. **Vaadige oma võla**: Kontrollige kõik paigaldatud võlad
2. **Klassifitseerige klassifitseerimatu võlad**: Vastase administraatori teaveteks
3. **Loo partnerid**: Lisage partnerid, kui kasutate Partner nähtavust
4. **Jälgige kasutamist**: Kontrollige, millised võlad kasutatakse kõige rohkem
5. **Dokumenteerige otsuse**: Hoidke märkmeid sellele, miks te valitas iga nähtavusaste
