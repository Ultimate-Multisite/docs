---
title: Oppsett og leverandørkonfigurasjon
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Oppsett og leverandørkonfigurasjon

Domain Seller-tillegget leveres med en veiviser for guidet oppsett som tar deg gjennom hvert nødvendige trinn. Denne siden dekker veiviserflyten og hvordan du konfigurerer eller rekonfigurerer leverandører etterpå.

## Krav

- **Multisite Ultimate** v2.4.12 eller nyere, nettverksaktivert
- **PHP** 7.4+
- API-legitimasjon for minst én støttet registrar

## Veiviser for førstegangsoppsett

Oppsettsveiviseren starter automatisk første gang du nettverksaktiverer pluginen. Den er også tilgjengelig når som helst fra **Nettverksadmin › Ultimate Multisite › Domain Seller-oppsett**.

### Trinn 1 — Velg en leverandør

Velg registraren du vil koble til. Støttede alternativer:

| Leverandør | DNS-administrasjon | WHOIS-personvern |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nei | Ja (WhoisGuard, gratis) |
| HostAfrica | Ja | Ja (ID-beskyttelse) |
| Openprovider | Ja | Ja |
| Hostinger | Via kjernefunksjonens Hostinger-domenekartlegging for hostede domener | Ja |
| GoDaddy | Nei | Nei |
| ResellerClub | Ja | Nei |
| NameSilo | Nei | Nei |
| Enom | Ja | Nei |

### Trinn 2 — Angi legitimasjon

Hver leverandør har forskjellige legitimasjonsfelt:

**OpenSRS** — Brukernavn og privat nøkkel (fra OpenSRS Reseller Control Panel)

**Namecheap** — Brukernavn og API-nøkkel (fra Account › Verktøy › API-tilgang)

**HostAfrica** — Domains Reseller API-endepunkt og legitimasjon fra HostAfrica-forhandlermodulen. Ingen separat sandbox-endepunkt er for øyeblikket dokumentert; test med trygge skrivebeskyttede kontroller før du kjører live-registreringer.

**Openprovider** — Brukernavn og passord med API-tilgang aktivert. Valgfri sandbox-modus bruker Openprovider sandbox-API-et, og et valgfritt standard kundehåndtak kan gjenbrukes for registreringer.

**Hostinger** — Det delte Hostinger hPanel API-tokenet fra kjerneintegrasjonen med Hostinger. Det samme tokenet driver kjernefunksjonens domenekartlegging og registreringsoperasjoner i Domain Seller.

**GoDaddy** — API-nøkkel og hemmelighet (fra developer.godaddy.com)

**ResellerClub** — Forhandler-ID og API-nøkkel (fra ResellerClub-kontrollpanelet)

**NameSilo** — API-nøkkel (fra namesilo.com › Account › API Manager)

**Enom** — Account-ID og API-token

Kryss av for **Sandbox-modus** der det er tilgjengelig for å teste mot leverandørens testmiljø før du går live.

### Trinn 3 — Test tilkoblingen

Klikk på **Test tilkobling**. Veiviseren sender et lett API-kall for å verifisere legitimasjon og tilkobling. Rett opp eventuelle legitimasjonsproblemer før du fortsetter.

### Trinn 4 — Importer TLD-er

Klikk på **Importer TLD-er** for å hente alle tilgjengelige TLD-er og engrospriser fra den tilkoblede leverandøren. Dette fyller ut TLD-listen som brukes av domeneprodukter. Importen kan ta 30–60 sekunder for leverandører med store TLD-kataloger.

TLD-er synkroniseres også automatisk på nytt én gang per dag via en planlagt cron-jobb.

### Trinn 5 — Opprett et domeneprodukt

Veiviseren oppretter et standard altomfattende domeneprodukt med 10 % påslag. Du kan redigere dette produktet umiddelbart eller hoppe over og opprette produkter manuelt under **Ultimate Multisite › Produkter**.

Se [Domeneprodukter og priser](./domain-products) for den fullstendige veiledningen til produktkonfigurasjon.

---

## Rekonfigurere en leverandør

Gå til **Nettverksadmin › Ultimate Multisite › Innstillinger › Domain Seller** (eller klikk på **Innstillinger** i pluginlisten).

Innstillingssiden inneholder:

- **Aktiver domenesalg** — slå hele funksjonen av/på
- **Standardleverandør** — leverandøren som brukes for domenesøk og nye produkter
- **Maks TLD-er per søk** — hvor mange TLD-er som skal sjekkes når en kunde søker; høyere verdier viser flere alternativer, men er tregere
- **Varighet for tilgjengelighetsbuffer** — hvor lenge tilgjengelighets- og prisresultater skal mellomlagres; lavere verdier er mer nøyaktige, men øker API-kall
- **Administrer domeneprodukter** — hurtiglenke til produktlisten
- **Konfigurer leverandører** — åpner integrasjonsveiviseren for å legge til eller rekonfigurere leverandører

### Legge til en andre leverandør

Klikk på **Konfigurer leverandører** og kjør veiviseren igjen for den nye registraren. Du kan ha flere leverandører konfigurert samtidig. Tilordne hvert domeneprodukt til en bestemt leverandør, eller la det stå på standarden.

### Synkronisere TLD-er manuelt

På innstillingssiden klikker du på **Synkroniser TLD-er** ved siden av en konfigurert leverandør for å hente de nyeste prisene. Dette er nyttig etter at en leverandør oppdaterer engrospriser eller legger til nye TLD-er.

---

## Logger

Hver leverandør skriver til sin egen loggkanal. Logger kan vises under **Nettverksadmin › Ultimate Multisite › Logger**:

| Loggkanal | Innhold |
|---|---|
| `domain-seller-registration` | Alle registreringsforsøk (vellykkede og mislykkede) |
| `domain-seller-renewal` | Resultater fra fornyelsesjobber |
| `domain-seller-opensrs` | Rå OpenSRS API-aktivitet |
| `domain-seller-namecheap` | Rå Namecheap API-aktivitet |
| `domain-seller-hostafrica` | Rå HostAfrica API-aktivitet |
| `domain-seller-openprovider` | Rå Openprovider API-aktivitet |
| `domain-seller-hostinger` | Rå Hostinger API-aktivitet |
| `domain-seller-godaddy` | Rå GoDaddy API-aktivitet |
| `domain-seller-resellerclub` | Rå ResellerClub API-aktivitet |
| `domain-seller-namesilo` | Rå NameSilo API-aktivitet |
| `domain-seller-enom` | Rå Enom API-aktivitet |

---

## Merknader om leverandørfunksjoner

Ikke alle registrar-API-er eksponerer de samme operasjonene. Tillegget viser operasjoner som ikke støttes, med tydelige feil rettet mot administratorer i stedet for å feile stille.

- **HostAfrica** støtter den bredeste live reseller-arbeidsflyten, inkludert oppslag, TLD/prissynkronisering, registrering, fornyelse, overføring, nameserver-oppdateringer, DNS records, EPP-koder, registrar lock og ID-beskyttelse.
- **Openprovider** støtter TLD-synkronisering med reseller-priser, registrering, fornyelse, overføringer, nameserver-oppdateringer, DNS zones, EPP-koder, registrar lock og WHOIS privacy. Den autentiserer med en kortlivet bearer token som tillegget oppdaterer automatisk.
- **Hostinger** støtter tilgjengelighetssøk, registrering, porteføljeoppslag, nameserver-oppdateringer, registrar lock og WHOIS privacy gjennom den delte hPanel API-tokenen. Hostingers offentlige Domains API eksponerer ikke reseller-/grossistpriser, innkommende overføring, eksplisitt fornyelse eller henting av EPP-kode; fornyelser er kun automatisk fornyelse.
