---
title: Sposobnost vidljivosti
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Vidljivost sposobnosti (Ability Visibility)

Superdav AI Agent v1.12.0 uvodi postavke **Vidljivosti sposobnosti** koje upravljaju kojim površinama se svaka sposobnost prikazuje. Ovo omogućuje administratorima da precizno podeše koje mogućnosti agenta su dostupne putem REST API-ja, MCP servera, WooCommerce integracija i drugih interfejsa.

## Što je Vidljivost sposobnosti? {#what-is-ability-visibility}

Vidljivost sposobnosti je sustav dozvola koji kontrolira:

- **Koje sposobnosti** su dostupne za agente
- **Gdje su prikazane** (REST API, MCP, WooCommerce itd.)
- **Tko ih može pristupiti** (preko liste dozvoljenih partnera)
- **Kako su klasificirane** (prepoznate vs. neklasificirane)

Svaka sposobnost ima nivo vidljivosti koji određuje njenu dostupnost na različitim površinama.

## Nivoi vidljivosti {#visibility-levels}

### Javni (Public) {#public}

**Javni sposobnosti** dostupni su svuda:

- REST API endpointovi
- MCP serveri
- WooCommerce integracije
- Chat interfejsi
- Svi korisnički profili (s odgovarajućim dozvolama)

Primjer: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interni (Internal) {#internal}

**Interni sposobnosti** dostupni su samo unutar vaše WordPress instalacije:

- Chat interfejsi
- Admin paneli
- Samo prijavljeni korisnici
- Nisu prikazani putem REST API-ja ili vanjskih integracija

Primjer: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partner sposobnosti** dostupne su samo partnerima na listi dozvoljenih:

- Zahtijeva eksplicitno dodavanje u listu dozvoljenih partnera
- Dostupni putem REST API-ja s partnerovim kreditima
- Dostupni putem MCP servera s partner autentifikacijom
- Nisu dostupne običnim korisnicima

Primjer: `bulk-import-users`, `modify-billing`, `access-analytics`

### Obezali (Disabled) {#disabled}

**Obezali sposobnosti** nisu dostupne nigdje:

- Nisu prikazani putem nijedne površine
- Nisu dostupni u chatu
- Nisu dostupni u admin panelima
- Korisno za zastarjele ili eksperimentalne sposobnosti

## Upravljanje vidljivošću sposobnosti {#managing-ability-visibility}

### Pristup postavkama vidljivosti sposobnosti {#accessing-ability-visibility-settings}

1. Idite u **WordPress Admin** → **Superdav AI Agent** → **Settings** (Postavke)
2. Kliknite na karticu **Abilities** (Sposobnosti)
3. Vidjet ćete popis svih instaliranih sposobnosti s njihovim razinama vidljivosti

### Pregled detalja sposobnosti {#viewing-ability-details}

Kliknite na bilo koju sposobnost kako biste vidjeli:

- **Name** (Naziv): Identifikator sposobnosti
- **Description** (Opis): Što ta sposobnost radi
- **Current visibility** (Trenutna vidljivost): Javna, Interna, Partner ili Obezbijedena (Disabled)
- **Partner allow-list** (Lista dozvoljenih partnera): Koje partnere mogu pristupiti (ako je vidljivost za Partnere)
- **Last updated** (Posljednje ažurirano): Kada se vidljivost posljednji put promijenila
- **Status**: Prepoznat ili Neodređen

### Promjena razina vidljivosti {#changing-visibility-levels}

Da biste promijenili vidljivost sposobnosti:

1. Kliknite na sposobnost u listi
2. Odaberite novi nivo vidljivosti iz padajućeg biranja (dropdowna)
3. Ako odaberete "Partner", dodajte identifikatore partnera u listu dozvoljenih (allow-list)
4. Kliknite na **Save** (Spremi)

Primjer:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masovne operacije {#bulk-operations}

Da biste promijenili vidljivost za više sposobnosti:

1. Označite polja pored sposobnosti
2. Odaberite novi nivo vidljivosti iz padajućeg biranja za masovnu akciju (bulk action)
3. Kliknite na **Apply** (Primijeni)

## Lista dozvoljenih partnera (Partner Allow-List) {#partner-allow-list}

**Lista dozvoljenih partnera** kontrolira koje vanjske partnere mogu pristupiti sposobnostima nivoa Partner.

### Dodavanje partnera {#adding-partners}

1. Idite u **Superdav AI Agent** → **Settings** (Postavke) → **Partners** (Partneri)
2. Kliknite na **Add Partner** (Dodaj partner)
3. Unesite identifikator partnera (obično API ključ ili ID organizacije)
4. Opcionalno dodajte ime i opis partnera
5. Kliknite na **Save** (Spremi)

### Dodjeljivanje sposobnosti partnerima {#assigning-abilities-to-partners}

Nakon dodavanja partnera:

1. Idite na karticu **Abilities** (Sposobnosti)
2. Pronađite sposobnost s vidljivošću za partnere (Partner visibility)
3. Kliknite za uređivanje
4. U odjeljku "Partner allow-list" (Lista dozvoljenih partnera), označite polja za partnere kojima treba pristup
5. Kliknite na **Save** (Spremi)

### Odbacivanje pristupa partnerima {#revoking-partner-access}

Da biste uklonili pristup partneru:

1. Uredite sposobnost
2. Odmaknite označenje partnera iz liste dozvoljenih (allow-list)
3. Kliknite na **Save** (Spremi)

Partner će odmah izgubiti pristup toj sposobnosti.

## Neoducjene sposobnosti (Unclassified Abilities) {#unclassified-abilities}

Kada instalirate treću stranu sposobnost koju Superdav AI Agent ne prepoznaje, ona se označava kao **Neoducjena** (Unclassified).

### Obavijest za administratora o neoducjenim sposobnostima {#admin-notice-for-unclassified-abilities}

Vidjet ćete obavijest za admina:

```
⚠️ Neoducjene sposobnosti primijećene je

Slijede sposobnosti su instalirane ali nisu prepoznate:
- custom-import-tool
- external-api-wrapper

Ove sposobnosti mogu predstavljati sigurnosne ili kompatibilne rizike.
Molimo vas da ih pregledate i klasifikirate.

[Pregled sposobnosti] [Odbaćanje]
```

### Pregled neoducjenih sposobnosti {#reviewing-unclassified-abilities}

1. Kliknite na **Review Abilities** (Pregled sposobnosti) u obavijesti
2. Za svaku neoducjenu sposobnost, vidjet ćete:
   - Naziv i opis sposobnosti
   - Izvornik (koji plugin/dodatak je instalirao tu sposobnost)
   - Predloženi nivo vidljivosti
   - Procjena sigurnosti

3. Odaberite nivo vidljivosti:
   - **Public** (Javno): Povjerujte se sposobnosti; izložite je svuda
   - **Internal** (Interno): Ograničite korištenje samo za interne potrebe
   - **Partner**: Ograničite na specifične partnere
   - **Disabled** (Onemogućeno): Ne koristite ovu sposobnost

4. Kliknite na **Classify** (Klasificiraj) da biste spremili svoju odluku

### Zašto klasificirati neoducjene sposobnosti? {#why-classify-unclassified-abilities}

Klasifikacija sposobnosti:

- **Poboljšava sigurnost**: Eksplicitno odobravate što je izloženo
- **Sprečava nesreće**: Neoducjene sposobnosti su podrazumom onemogućene
- **Omogućuje značajke**: Nakon klasifikacije, sposobnost postaje dostupna
- **Dokumentira odluke**: Vaši izbori se zapisuju za reviziju

## Vidljivost na Različitim Povrsimima {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Javne mogućnosti** dostupne su putem REST endpointa:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interna i partnerska mogućnosti** nisu dostupne putem REST API.

### MCP Serveri {#mcp-servers}

**Javne mogućnosti** dostupne su putem MCP-a:

```
MCP Server: Superdav AI Agent
Dostupne mogućnosti:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interna mogućnosti** nisu prikazane putem MCP-a.

**Partnerke mogućnosti** dostupne su samo s partnerskim podacima za prijave.

### WooCommerce Integracija {#woocommerce-integration}

**Javne mogućnosti** vezane za WooCommerce dostupne su:

- Upravljanje proizvodima
- Obrada narudžbina
- Komunikacija s klijentima

**Interna mogućnosti** nisu prikazane WooCommerceu.

### Chat Interfejs {#chat-interface}

**Sve mogućnosti** (Javne, Interna, Partnerke) dostupne su u chatu, ovisno o dozvolama korisnika:

- Administracije vide sve mogućnosti
- Redni korisnici vide samo Javne mogućnosti
- Partneri vide Javne + Partnerke mogućnosti (ako su na listi za odobrenje)

## Najbolje Praktike Bezbednosti {#security-best-practices}

### Princip Najmanjeg Povolja {#principle-of-least-privilege}

- Postavite mogućnosti na najograničavajuću vidljivost koja im omogućuje korištenje
- Koristite partnersku vidljivost za osjetljive operacije
- Isključite mogućnosti koje ne koristite

### Redovita Auditing {#regular-audits}

- Pregledajte vidljivost mogućnosti mjesečno
- Provjerite neklasifikovane mogućnosti
- Uklonite pristup nekorisnim partnerima

### Logiranje i Praćenje {#logging-and-monitoring}

- Pratite koje su mogućnosti najviše korištene
- Prtajte obrasce pristupa partnera
- Obavijestite na neobično korištenje mogućnosti

### Treće Strane Mogućnosti {#third-party-abilities}

- Pregledajte treće strane mogućnosti prije omogućavanja
- Eksplicitno ih klasifikirajte
- Počnite s Internom ili Partnerskom vidljivošću
- Promovirajte na Javnu tek nakon provere

## Rješavanje problema {#troubleshooting}

**Oblačnost se ne prikazuje na listi**
- Provjerite da je oblačnost instalirana i aktivna
- Provjerite da li je plugin/addon uključen
- Osvežite stranicu

**Ne mogu promijeniti vidljivost oblačnosti**
- Provjerite da imate administrator dozvole
- Provjerite da oblačnost nije zaključana od strane nekog plugin-a
- Pokušajte isključiti sukobne pluginove

**Partner ne može pristupiti oblačnosti**
- Provjerite da je partner u listi dopuštenih (allow-list)
- Provjerite da je vidljivost oblačnosti postavljena na Partner
- Potvrdite da su podatke prijave partnera ispravni
- Provjerite API logove na tražene greške autentifikacije

**Neklasificirane oblačnosti se nastavljaju pojavljivati**
- Pregledajte ih i klasificirajte ih u adminu obavijesti (admin notice)
- Provjerite da je vaša klasifikacija spremna
- Provjerite da li je plugin koji pruža tu oblačnost ažuriran

## Migracija iz starog načina rada (Legacy Mode) {#migration-from-legacy-mode}

Ako nadograđujete sa starije verzije Superdav AI Agent:

- Sva postojeća oblačnost se automatski klasificira kao Javna (Public)
- Pregledajte i prilagodite vidljivost prema potrebi
- Nema potrebe za akcijama osim ako ne želite ograničiti pristup

Pogledajte **Migraciju u način rada trećih strana (Third-Party Mode Migration)** za više detalja o prelasku na integraciju s native Abilities API.

## Sljedeći koraci {#next-steps}

Nakon što podesite vidljivost oblačnosti:

1. **Pregledajte svoje oblačnosti**: Audirajte sve instalirane oblačnosti
2. **Klasificirajte neklasificirane oblačnosti**: Odgovorite na admin obavijesti
3. **Postavite partnere**: Dodajte partnere ako koristite vidljivost za Partnere (Partner visibility)
4. **Pratite korištenje**: Pratite koje oblačnosti se najviše koriste
5. **Dokumentirajte odluke**: Ostavite bilje o tome zašto ste odabrali svaki nivo vidljivosti
