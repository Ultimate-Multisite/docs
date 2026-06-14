---
title: Opsætning og udbyderkonfiguration
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domæne sælger: Opsætning og udbyderkonfiguration

Domain Seller addon leveres med en vejledende opsætningsassistent, der guider dig gennem hvert nødvendigt trin. Denne side dækker flowet i assistenten samt hvordan du konfigurerer eller genkonfigurerer udbydere derefter.

## Krav

- **Multisite Ultimate** v2.4.12 eller højere, netværksaktiveret
- **PHP** 7.4+
- API-nøgler for mindst én understøttet registreringsudbyder

## Første opsætningsassistent

Opsætningsassistenten starter automatisk første gang du aktiverer plugin'et på dit netværk. Den er også tilgængelig når som helst via **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Trin 1 — Vælg en udbyder

Vælg den registreringsudbyder, du vil forbinde dig med. Understøttede muligheder:

| Udbyder | DNS-styring | WHOIS privatliv |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nej | Ja (WhoisGuard, gratis) |
| HostAfrica | Ja | Ja (ID beskyttelse) |
| Openprovider | Ja | Ja |
| Hostinger | Via kerne-Hostinger domænemapping for hostede domæner | Ja |
| GoDaddy | Nej | Nej |
| ResellerClub | Ja | Nej |
| NameSilo | Nej | Nej |
| Enom | Ja | Nej |

### Trin 2 — Indtast legitimationsoplysninger

Hver udbyder har forskellige felter til legitimation:

**OpenSRS** — Brugernavn og privat nøgle (fra OpenSRS Reseller Control Panel)

**Namecheap** — Brugernavn og API-nøgle (fra Account › Tools › API Access)

**HostAfrica** — Domains Reseller API endpoint og legitimationsoplysninger fra HostAfrica reseller modulet. Der er i øjeblikket ingen separat sandbox endpoint dokumenteret; test med sikre læse-kunne kontroller, før du kører live registreringer.

**Openprovider** — Brugernavn og adgangskode med API-adgang aktiveret. Valgfri sandbox-tilstand bruger Openprovider sandbox API'en, og et valgfrit standard kundehåndtag kan genbruges til registreringer.

**Hostinger** — Det delte Hostinger hPanel API token fra den kerne-Hostinger integration. Samme token bruges til kerne domænemapping og registrering af Domænesælgere.

**GoDaddy** — API nøgle og hemmelighed (fra developer.godaddy.com)

**ResellerClub** — Reseller ID og API nøgle (fra ResellerClub kontrolpanelet)

**NameSilo** — API nøgle (fra namesilo.com › Account › API Manager)

**Enom** — Kontonummer og API token

Tjek **Sandbox mode**, hvor det er tilgængeligt, for at teste mod leverandørens testmiljø, før du går i produktion.

### Trin 3 — Test forbindelsen

Klik på **Test Connection**. Wizardet sender en letvægts API-opkald for at verificere legitimationsoplysninger og forbindelse. Ret eventuelle problemer med legitimation, før du fortsætter.

### Trin 4 — Importer TLD'er

Klik på **Import TLDs** for at trække alle tilgængelige TLD'er (Top-Level Domains) og wholesale priser fra den forbundne leverandør. Dette udfylder listen over TLD'er, der bruges af domæneprodukter. Importen kan tage 30–60 sekunder for leverandører med store TLD-kataloger.

TLD'erne synkroniseres også automatisk én gang om dagen via en planlagt cron job.

### Trin 5 — Opret et domæneprodukt

Wizardet opretter et standard "catch-all" domæneprodukt med en 10% markup (påslag). Du kan redigere dette produkt med det samme eller spring over og oprette produkter manuelt under **Ultimate Multisite › Products**.

Se [Domain Products and Pricing](./domain-products) for den fulde guide til produktkonfiguration.

---

## Konfigurering af en leverandør igen

Gå til **Network Admin › Ultimate Multisite › Settings › Domain Seller** (eller klik på **Settings** i plugin-listen).

Indstillingssiden indeholder:

- **Aktiver domæne salg** — slå hele funktionen til eller fra
- **Standardudbyder** — udbyderen, der bruges til domænesøgninger og nye produkter
- **Maksimalt antal TLD'er pr. søgning** — hvor mange TLD'er systemet skal tjekke, når en kunde søger; højere værdier viser flere muligheder, men er langsommere
- **Varighed for tilgængelighedscache** — hvor længe resultaterne for tilgængelighed og priser skal gemmes; lavere værdier giver større nøjagtighed, men øger antallet af API-kald
- **Administrer domæneprodukter** — hurtig genvej til Produktlisten
- **Konfigurer udbydere** — åbner Integration Wizard for at tilføje eller omkonfigurere udbydere

### Tilføjelse af en anden udbyder

Klik på **Konfigurer udbydere** og kør wizarden igen for den nye registreringsudbyder. Du kan have flere udbydere konfigureret samtidigt. Tildel hvert domæneprodukt til en specifik udbyder, eller lad det stå som standard.

### Manuel synkronisering af TLD'er

På indstillingssiden klikker du på **Synkroniser TLD'er** ved siden af enhver konfigureret udbyder for at hente de seneste priser. Dette er nyttigt efter, at en udbyder opdaterer engrospriser eller tilføjer nye TLD'er.

---

## Logs

Hver udbyder skriver til sin egen logkanal. Logs kan se ses under **Network Admin › Ultimate Multisite › Logs**:

| Log channel | Indhold |
|---|---|
| `domain-seller-registration` | Alle registreringsforsøg (succes og fejl) |
| `domain-seller-renewal` | Resultater fra fornyelsesjobbet |
| `domain-seller-opensrs` | Rå OpenSRS API aktivitet |
| `domain-seller-namecheap` | Rå Namecheap API aktivitet |
| `domain-seller-hostafrica` | Rå HostAfrica API aktivitet |
| `domain-seller-openprovider` | Rå Openprovider API aktivitet |
| `domain-seller-hostinger` | Rå Hostinger API aktivitet |
| `domain-seller-godaddy` | Rå GoDaddy API aktivitet |
| `domain-seller-resellerclub` | Rå ResellerClub API aktivitet |
| `domain-seller-namesilo` | Rå NameSilo API aktivitet |
| `domain-seller-enom` | Rå Enom API aktivitet |

---

## Noter om udbyderkapaciteter

Ikke alle registrørers API'er eksponerer de samme funktioner. Addon'et viser understøttede, men ikke-understøttede operationer med klare fejl til administratorne i stedet for at fejle lydløst.

- **HostAfrica** understøtter det bredeste live reseller workflow, herunder opslag, TLD/prissynkronisering, registrering, fornyelse, overførsel, nameserver opdateringer, DNS-oplysninger, EPP-koder, registrør-lås og ID-beskyttelse.
- **Openprovider** understøtter reseller-pris synkronisering af TLD'er, registrering, fornyelse, overførsler, nameserver opdateringer, DNS-zoner, EPP-koder, registrør-lås og WHOIS privatliv. Den autentificerer med et kortvarigt bearer token, som addon'et automatisk opdaterer.
- **Hostinger** understøtter tilgængelighedssøgning, registrering, portfolio-søgning, nameserver opdateringer, registrør-lås og WHOIS privatliv via det delte hPanel API-token. Hostingers offentlige Domains API eksponerer ikke reseller-/wholesale-priser, indgående overførsel eller eksplicit fornyelse, eller hentning af EPP-koder; fornyelser sker kun automatisk.
