---
title: Vidljivost sposobnosti
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Vidljivost Sposobnosti

Superdav AI Agent v1.12.0 uvodi kontrole **Vidljivosti Sposobnosti (Ability Visibility)** koje određuju na kojim platformama će se svaka sposobnost prikazati. To omogućava administratorima da precizno podešaju koje sposobnosti agenata su dostupne putem REST API-ja, MCP servera, WooCommerce integracija i drugih interfejsa.

## Šta je Vidljivost Sposobnosti? {#what-is-ability-visibility}

Vidljivost sposobnosti je sistem dozvola koji kontroliše:

- **Koje sposobnosti** su dostupne agentima
- **Gdje su prikazane** (REST API, MCP, WooCommerce, itd.)
- **Ko može pristupiti njima** (preko liste dozvoljenih partnera)
- **Kako su klasificirane** (prepoznate ili neklasificirane)

Svaka sposobnost nosi nivo vidljivosti koji određuje njenu dostupnost na različitim platformama.

## Nivoi Vidljivosti {#visibility-levels}

### Javna (Public) {#public}

**Javne sposobnosti** dostupne su svugdje:

- REST API endpoint-ovi
- MCP serveri
- WooCommerce integracije
- Chat interfejsi
- Sve korisničke uloge (uz odgovarajuće dozvole)

Primjer: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interna (Internal) {#internal}

**Interne sposobnosti** dostupne su samo unutar vaše WordPress instalacije:

- Chat interfejsi
- Admin paneli
- Samo za prijavljene korisnike
- Nisu izložene putem REST API-ja ili vanjskih integracija

Primjer: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partner sposobnosti** dostupne su samo za partnerima koji su na listi dozvoljenih:

- Zahtijeva eksplicitno dodavanje na listu dozvoljenih partnera
- Dostupne putem REST API-ja sa partner kredencijalima
- Dostupne putem MCP sa partner autentifikacijom
- Nisu dostupne običnim korisnicima

Primjer: `bulk-import-users`, `modify-billing`, `access-analytics`

### Onemogućena (Disabled) {#disabled}

**Onemogućene sposobnosti** nisu dostupne nigdje:

- Nisu izložene putem nijednog interfejsa
- Nisu dostupne u chatu
- Nisu dostupne u admin panelima
- Korisno za zastarjele ili eksperimentalne sposobnosti

## Upravljanje Vidljivošću Sposobnosti {#managing-ability-visibility}

### Pristup Podešavanjima Vidljivosti Sposobnosti {#accessing-ability-visibility-settings}

1. Idite na **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kliknite na karticu **Abilities**
3. Vidjet ćete listu svih instaliranih sposobnosti sa njihovim nivoima vidljivosti

### Pregled Detalja Sposobnosti {#viewing-ability-details}

Kliknite na bilo koju sposobnost da vidite:

- **Name**: Identifikator sposobnosti
- **Description**: Šta sposobnost radi
- **Current visibility**: Javna, Interna, Partner ili Onemogućena
- **Partner allow-list**: Koji partneri mogu pristupiti (ako je vidljivost Partner)
- **Last updated**: Kada je vidljivost zadnji put promijenjena
- **Status**: Prepoznata ili Neklasificirana

### Promjena Nivoa Vidljivosti {#changing-visibility-levels}

Da biste promijenili vidljivost sposobnosti:

1. Kliknite na sposobnost u listi
2. Odaberite novi nivo vidljivosti iz padajućeg izbornika
3. Ako birate "Partner", dodajte identifikatore partnera na listu dozvoljenih
4. Kliknite **Save**

Primjer:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masovne Operacije {#bulk-operations}

Da biste promijenili vidljivost više sposobnosti:

1. Označite kutice pored sposobnosti
2. Odaberite novi nivo vidljivosti iz padajućeg izbornika masovnih akcija
3. Kliknite **Apply**

## Lista Dozvoljenih Partnera (Partner Allow-List) {#partner-allow-list}

**Lista dozvoljenih partnera** kontroliše koji vanjski partneri mogu pristupiti sposobnostima nivoa Partner.

### Dodavanje Partnera {#adding-partners}

1. Idite na **Superdav AI Agent** → **Settings** → **Partners**
2. Kliknite **Add Partner**
3. Unesite identifikator partnera (obično API ključ ili ID organizacije)
4. Opcionalno dodajte ime i opis partnera
5. Kliknite **Save**

### Dodjeljivanje Sposobnosti Partnerima {#assigning-abilities-to-partners}

Nakon dodavanja partnera:

1. Idite na karticu **Abilities**
2. Pronađite sposobnost sa vidljivošću Partner
3. Kliknite za uređivanje
4. U sekciji "Partner allow-list", označite kutice za partnere koji bi trebali imati pristup
5. Kliknite **Save**

### Uklanjanje Partner Pristupa {#revoking-partner-access}

Da biste uklonili pristup partnera:

1. Uredite sposobnost
2. Odčekirajte kuticu partnera u listi dozvoljenih
3. Kliknite **Save**

Partner će odmah izgubiti pristup toj sposobnosti.

## Neklasificirane Sposobnosti {#unclassified-abilities}

Kada instalirate sposobnost treće strane koju Superdav AI Agent ne prepoznaje, označena je kao **Neklasificirana (Unclassified)**.

### Admin Obavještenje za Neklasificirane Sposobnosti {#admin-notice-for-unclassified-abilities}

Vidjet ćete admin obavještenje:

```
⚠️ Detektovane Neklasificirane Sposobnosti

Slijede sposobnosti su instalirane, ali nisu prepoznate:
- custom-import-tool
- external-api-wrapper

Ove sposobnosti mogu predstavljati sigurnosne ili kompatibilne rizike.
Molimo vas da ih pregledate i klasifikujete.

[Review Abilities] [Dismiss]
```

### Pregled Neklasificiranih Sposobnosti {#reviewing-unclassified-abilities}

1. Kliknite na **Review Abilities** u obavještenju
2. Za svaku neklasificiranu sposobnost, vidjet ćete:
   - Ime i opis sposobnosti
   - Izvor (koji plugin/addon je instalirao)
   - Predloženi nivo vidljivosti
   - Sigurnosna procjena

3. Izaberite nivo vidljivosti:
   - **Public**: Pouzdajte se u sposobnost; izložite je svugdje
   - **Internal**: Ograničite samo na internu upotrebu
   - **Partner**: Ograničite na specifične partnere
   - **Disabled**: Ne koristite ovu sposobnost

4. Kliknite **Classify** da sačuvate svoju odluku

### Zašto Klasifikovati Neklasificirane Sposobnosti? {#why-classify-unclassified-abilities}

Klasifikovanje sposobnosti:

- **Poboljšava sigurnost**: Eksplicitno odobravate šta je izloženo
- **Spriječava nesreće**: Neklasificirane sposobnosti su po defaultu onemogućene
- **Omogućava funkcije**: Nakon klasifikacije, sposobnost postaje dostupna
- **Dokumentuje odluke**: Vaši izbori su zapisani radi revizije

## Vidljivost na Različitim Platformama {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Javne sposobnosti** dostupne su putem REST endpoint-ova:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interne i Partner sposobnosti** nisu dostupne putem REST API-ja.

### MCP Serveri {#mcp-servers}

**Javne sposobnosti** dostupne su putem MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interne sposobnosti** nisu izložene putem MCP.

**Partner sposobnosti** dostupne su samo sa partner kredencijalima.

### WooCommerce Integracija {#woocommerce-integration}

**Javne sposobnosti** povezane sa WooCommerce-om su dostupne:

- Upravljanje proizvodima
- Obrada narudžbi
- Komunikacija sa klijentima

**Interne sposobnosti** nisu izložene WooCommerce-u.

### Chat Interfejs {#chat-interface}

**Sve sposobnosti** (Javne, Interne, Partner) dostupne su u chatu, ovisno o dozvolama korisnika:

- Administratori vide sve sposobnosti
- Obični korisnici vide samo Javne sposobnosti
- Partneri vide Javne + Partner sposobnosti (ako su na listi dozvoljenih)

## Najbolje Sigurnosne Prakse {#security-best-practices}

### Princip Najmanjeg Privileja (Principle of Least Privilege) {#principle-of-least-privilege}

- Postavite sposobnosti na najograničniji nivo vidljivosti koji i dalje omogućava njihovu upotrebu
- Koristite Partner vidljivost za osjetljive operacije
- Onemogućite sposobnosti koje ne koristite

### Redovni Auditi {#regular-audits}

- Pregledajte vidljivost sposobnosti mjesečno
- Provjerite neklasificirane sposobnosti
- Uklonite pristup za neiskorištene partnere

### Logovanje i Monitoring {#logging-and-monitoring}

- Pratite koje sposobnosti se najviše koriste
- Pratijte obrasce pristupa partnera
- Postavite upozorenje na neobičnu upotrebu sposobnosti

### Sposobnosti Treće Strane {#third-party-abilities}

- Pregledajte sposobnosti treće strane prije omogućavanja
- Eksplicitno ih klasifikujte
- Počnite sa Internom ili Partner vidljivošću
- Promovisanje na Javnu samo nakon provjere

## Rješavanje Problema (Troubleshooting) {#troubleshooting}

**Sposobnost se ne prikazuje u listi**
- Provjerite da li je sposobnost instalirana i aktivna
- Provjerite da li je plugin/addon omogućen
- Osvežite stranicu

**Ne mogu promijeniti vidljivost sposobnosti**
- Provjerite da li imate administrator dozvole
- Provjerite da li sposobnost nije zaključana od strane plugin-a
- Pokušajte onemogućiti konflikte plugin-ove

**Partner ne može pristupiti sposobnosti**
- Provjerite da li je partner na listi dozvoljenih
- Provjerite da li je vidljivost sposobnosti postavljena na Partner
- Potvrdite da su partner kredencijali ispravni
- Provjerite API logove radi grešaka autentifikacije

**Neklasificirane sposobnosti se i dalje pojavljuju**
- Pregledajte i klasifikujte ih u admin obavještenju
- Provjerite da li je vaša klasifikacija sačuvana
- Provjerite da li je plugin koji pruža sposobnost ažuran

## Migracija iz Starog Modusa (Legacy Mode) {#migration-from-legacy-mode}

Ako se nadograđujete sa starije verzije Superdav AI Agent-a:

- Sve postojeće sposobnosti automatski su klasificirane kao Javne
- Pregledajte i prilagodite vidljivost po potrebi
- Nije potrebna akcija, osim ako ne želite ograničiti pristup

Pogledajte **Third-Party Mode Migration** za više detalja o prelasku na izvornu Abilities API integraciju.

## Sljedeći Koraci {#next-steps}

Nakon konfigurisanja vidljivosti sposobnosti:

1. **Pregledajte svoje sposobnosti**: Auditirajte sve instalirane sposobnosti
2. **Klasifikujte neklasificirane sposobnosti**: Odgovorite na admin obavještenja
3. **Postavite partnere**: Dodajte partnere ako koristite Partner vidljivost
4. **Monitorujte upotrebu**: Pratite koje sposobnosti se najviše koriste
5. **Dokumentujte odluke**: Zapišite napomene o tome zašto ste izabrali svaki nivo vidljivosti
