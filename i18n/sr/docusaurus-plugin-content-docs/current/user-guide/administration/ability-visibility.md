---
title: Vidljivost sposobnosti
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Vidljivost sposobnosti (Ability Visibility)

Superdav AI Agent v1.12.0 uvodi kontrole **Vidljivosti sposobnosti** (Ability Visibility) koje upravljaju kojim površinama se svaka sposobnost prikazuje. Ovo omogućava administratorima da precizno podeše koje mogućnosti agenta su dostupne putem REST API-ja, MCP servera, WooCommerce integracija i drugih interfejsa.

## Šta je Vidljivost sposobnosti?

Vidljivost sposobnosti je sistem dozvola koji kontroliše:

- **Koje sposobnosti** su dostupne za agente
- **Gde su one prikazane** (REST API, MCP, WooCommerce, itd.)
- **Ko može pristupiti njima** (preko liste dozvoljenih partnera)
- **Kako su klasifikovane** (prepoznate vs. neklasifikovane)

Svaka sposobnost ima nivo vidljivosti koji određuje njenu dostupnost na različitim površinama.

## Nivoi vidljivosti

### Javni (Public)

**Javni sposobnosti** su dostupni svuda:

- REST API endpoint-ovima
- MCP serverima
- WooCommerce integracijama
- Četnim interfejsima (Chat interfaces)
- Svojim rolama korisnika (sa odgovarajućim dozvolama)

Primer: `scaffold-block-theme`, `activate-theme`, `send-email`

### Interni (Internal)

**Internim sposobnostima** dostupne su samo unutar vaše WordPress instalacije:

- Četnim interfejsima
- Admin panelima
- Samo pri logovanih korisnicima
- Nisu prikazani putem REST API-ja ili spoljnih integracija

Primer: `manage-settings`, `view-analytics`, `export-data`

### Partneri (Partner)

**Sposobnosti partnera** dostupne su samo za liste dozvoljenih partnera:

- Zahteva eksplicitno unošenje u listu dozvoljenih partnera
- Dostupni putem REST API-ja sa partnerovim kreditima
- Dostupni putem MCP servera sa partner autentifikacijom
- Nisu dostupne običnim korisnicima

Primer: `bulk-import-users`, `modify-billing`, `access-analytics`

### Onemogućeni (Disabled)

**Onemogućene sposobnosti** nisu dostupne nigde:

- Nisu prikazane putem nijedne površine
- Nisu dostupne u chatu
- Nisu dostupne u admin panelima
- Korisno za zastarele ili eksperimentalne sposobnosti

## Upravljanje vidljivošću sposobnosti

### Pristup podešavanjima vidljivosti sposobnosti

1. Idite u **WordPress Admin** → **Superdav AI Agent** → **Settings** (Podešavanja)
2. Kliknite na karticu **Abilities** (Sposobnosti)
3. Videćete listu svih instaliranih sposobnosti sa njihovim nivoima vidljivosti

### Pregled detalja sposobnosti

Kliknite na bilo koju sposobnost da biste videli:

- **Name** (Naziv): Identifikator sposobnosti
- **Description** (Opis): Šta ta sposobnost radi
- **Current visibility** (Trenutna vidljivost): Javna, Interna, Partner ili Obezbeđena (Disabled)
- **Partner allow-list** (Lista dozvoljenih partnera): Koje partnere mogu pristupiti (ako je vidljivost za Partnere)
- **Last updated** (Poslednja ažuriranja): Kada se vidljivost poslednji put promenila
- **Status**: Prepoznat ili Ne klasifikovan

### Promena nivoa vidljivosti

Da biste promenili vidljivost sposobnosti:

1. Kliknite na sposobnost u listi
2. Izaberite novi nivo vidljivosti iz padajućeg menija (dropdown)
3. Ako odaberete "Partner", dodajte identifikatore partnera u listu dozvoljenih partnere (allow-list)
4. Kliknite na **Save** (Sačuvaj)

Primer:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Masovne operacije

Da biste promenili vidljivost za više sposobnosti:

1. Označite polja pored sposobnosti
2. Izaberite novi nivo vidljivosti iz padajućeg menija za masne akcije (bulk action)
3. Kliknite na **Apply** (Primeni)

## Lista dozvoljenih partnera (Partner Allow-List)

**Partner allow-list** kontroliše koje spoljne partnere mogu pristupiti sposobnostima nivoa Partner.

### Dodavanje partnera

1. Idite u **Superdav AI Agent** → **Settings** (Podešavanja) → **Partners** (Partneri)
2. Kliknite na **Add Partner** (Dodaj partner)
3. Unesite identifikator partnera (obično API ključ ili ID organizacije)
4. Opciono dodajte ime i opis partnera
5. Kliknite na **Save** (Sačuvaj)

### Dodela sposobnosti partnerima

Nakon dodavanja partnera:

1. Idite kart **Abilities** tab
2. Pronađite sposob sa vidljivošću Partnera (Partner visibility)
3. Kliknite da ga uredite
4. U sekciji "Partner allow-list" (lista dozvoljenih partnera), označite kutice za partnere kojima treba pristup
5. Kliknite na **Save**

### Odbacivanje pristupa partnerima

Da biste uklonili pristup partneru:

1. Uredite sposob
2. Odmarkirajte kuticu za tog partnera u listi dozvoljenih (allow-list)
3. Kliknite na **Save**

Partner će odmah izgubiti pristup toj sposobnosti.

## Neoklasifikovane sposobnosti (Unclassified Abilities)

Kada instalirate treći alat (ability) koji Superdav AI Agent ne prepoznaje, on se označava kao **Neoklasifikovan** (Unclassified).

### Obaveštenje za administratora o neoklasifikovanim sposobnostima

Videćete sledeće obaveštenje od admina:

```
⚠️ Detektovane Neoklasifikovane Sposobnosti

Slede sposobnosti su instalirane ali nisu prepoznate:
- custom-import-tool
- external-api-wrapper

Ove sposobnosti mogu predstavljati rizike za bezbednost ili kompatibilnost.
Molimo vas da ih pregledate i klasifikujete.

[Pregled Sposobnosti] [Odbacivanje]
```

### Pregled neoklasifikovanih sposobnosti

1. Kliknite na **Review Abilities** (Pregled Sposobnosti) u obaveštenju
2. Za svaku neoklasifikovanu sposobnost, videćete:
   - Ime i opis sposobnosti
   - Izvor (koji plugin/addon je instalirao tu sposobnost)
   - Predloženi nivo vidljivosti
   - Procena bezbednosti

3. Izaberite nivo vidljivosti:
   - **Public** (Javno): Verujte ovoj sposobnosti; izložite je svuda
   - **Internal** (Interno): Ograničite korišćenje samo na interno
   - **Partner**: Ograničite pristup određenim partnerima
   - **Disabled** (Onemogućeno): Ne koristite ovu sposobnost

4. Kliknite na **Classify** (Klasifikuj) da sačuvate svoju odluku

### Zašto klasifikovati neoklasifikovane sposobnosti?

Klasifikacija sposobnosti:

- **Poboljšava bezbednost**: Eksplicitno odobravate šta je izloženo
- **Sprečava nezgodne situacije**: Neoklasifikovane sposobnosti su po defaultu onemogućene
- **Omogućava funkcije**: Nakon klasifikacije, sposobnost postaje dostupna
- **Dokumentuje odluke**: Vaši izbori se beleže za reviziju

## Vidljivost na Različitim Povrsimima

### REST API

**Javne sposobnosti** su dostupne putem REST endpoint-ova:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interna i partner sposobnosti** nisu dostupne putem REST API.

### MCP Serveri

**Javne sposobnosti** su dostupne preko MCP-a:

```
MCP Server: Superdav AI Agent
Dostupne sposobnosti:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interna sposobnost** nije izložena putem MCP-a.

**Partner sposobnosti** su dostupne samo sa partner kreditima.

### WooCommerce Integracija

**Javne sposobnosti** vezane za WooCommerce su dostupne:

- Upravljanje proizvodima
- Obrada porudžbina
- Komunikacija sa kupcima

**Interna sposobnost** nije izložena WooCommerce-u.

### Čet Interface (Chat)

**Sve sposobnosti** (Javne, Interna, Partner) su dostupne u chatu, zavisno od dozvola korisnika:

- Administracije vide sve sposobnosti
- Redovni korisnici vide samo Javne sposobnosti
- Partneri vide Javne + Partner sposobnosti (ako su na listi za dopuštanje)

## Najbolje Praktike Bezbednosti

### Princip Najmanjeg Povoljnja (Principle of Least Privilege)

- Postavite sposobnosti na najograničiji vidljivost koja im omogućava korišćenje
- Koristite partner vidljivost za osetljive operacije
- Isključite sposobnosti koje ne koristite

### Redovne Audite

- Pregledajte vidljivost sposobnosti mesečno
- Proverite da li postoje neklasifikovane sposobnosti
- Uklonite pristup nekorisnim partnerima

### Logovanje i Praćenje (Logging and Monitoring)

- Pratite koje sposobnosti se najviše koriste
- Prate obrazac pristupa partnera
- Obavestite na neobično korišćenje sposobnosti

### Treće Strane Sposobnosti

- Pregledajte treće strane sposobnosti pre nego što ih omogućite
- Eksplicitno klasifikujte ih
- Počnite sa Internom ili Partner vidljivošću
- Promovirajte na Javnu samo nakon provere

## Rešavanje problema

**Ne može se videti neka sposobnost u listi**
- Proverite da li je sposobnost instalirana i aktivna
- Proverite da li je plugin/dodatak uključen (enabled)
- Osvježite stranicu

**Ne mogu da promenim vidljivost neke sposobnosti**
- Proverite da li imate administrator dozvole
- Proverite da li je sposobnost zaključana od strane nekog plugin-a
- Pokušajte da isključite sukobne (konfliktne) pluginove

**Partner ne može pristupiti nekoj sposobnosti**
- Proverite da li je partner u listi dozvoljenih korisnika (allow-list)
- Proverite da li je vidljivost sposobnosti postavljena na "Partner"
- Potvrdite da su kredencijali partnera ispravni
- Proverite API logove na prekršajne greške autentifikacije

**Ne klasifikovane sposobnosti nastavljaju da se pojavljuju**
- Pregledajte ih i klasifikujte u admin obavestoj (admin notice)
- Proverite da li je vaša klasifikacija sačuvana
- Proverite da li je plugin koji pruža tu sposobnost ažuran

## Migracija iz starog načina rada (Legacy Mode)

Ako nadogradite sa starije verzije Superdav AI Agent:

- Sva postojeća sposobnost će automatski biti klasifikovana kao "Public" (Javna)
- Pregledajte i prilagodite vidljivost kako je potrebno
- Nema potrebe za nekim radom osim ako ne želite da ograničite pristup

Pogledajte **Migraciju u režim trećih strana (Third-Party Mode Migration)** za više detalja o prelasku na integraciju sa nativnim Abilities API.

## Sledeći koraci

Nakon što konfigurišete vidljivost sposobnosti:

1. **Pregledajte svoje sposobnosti**: Audirajte sve instalirane sposobnosti
2. **Klasifikujte neklasifikovane sposobnosti**: Odgovorite na admin obaveštenja
3. **Postavite partnere**: Dodajte partnere ako koristite vidljivost za partnere (Partner visibility)
4. **Pratite korišćenje**: Pratite koje sposobnosti se najviše koriste
5. **Dokumentujte odluke**: Ostavite beleške o tome zašto ste izabrali svaki nivo vidljivosti
