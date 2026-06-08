---
title: Oppsett og leverandørkonfigurasjon
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Oppsett og leverandørkonfigurasjon

Domain Seller-addonet kommer med en veiledet oppsett-wizard som leder deg gjennom hvert nødvendige trinn. Denne siden dekker wizard-flyten og hvordan du konfigurerer eller rekonfigurerer leverandørene etterpå.

## Krav

- **Multisite Ultimate** v2.4.12 eller høyere, aktivert på nettverksnivå
- **PHP** 7.4+
- API-legitimasjon for minst én støttet registrar

## Oppsett-wizard ved første gangs bruk

Oppsett-wizarden starter automatisk første gang du aktiverer pluginet på nettverksnivå. Den er også tilgjengelig når som helst fra **Network Admin › Ultimate Multisite › Domain Seller Setup**.

### Trinn 1 — Velg en leverandør

Velg registrar du ønsker å koble til. Støttede alternativer:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Ja | Ja |
| Namecheap | Nei | Ja (WhoisGuard, gratis) |
| GoDaddy | Nei | Nei |
| ResellerClub | Ja | Nei |
| NameSilo | Nei | Nei |
| Enom | Ja | Nei |

### Trinn 2 — Angi legitimasjon

Hver leverandør har forskjellige felt for legitimasjon:

**OpenSRS** — Brukernavn og privat nøkkel (fra OpenSRS Reseller Control Panel)

**Namecheap** — Brukernavn og API-nøkkel (fra Account › Tools › API Access)

**GoDaddy** — API-nøkkel og hemmelighet (fra developer.godaddy.com)

**ResellerClub** — Reseller ID og API-nøkkel (fra ResellerClub control panel)

**NameSilo** — API-nøkkel (fra namesilo.com › Account › API Manager)

**Enom** — Account ID og API-token

Sjekk **Sandbox mode** der det er tilgjengelig for å teste mot leverandørens testmiljø før du går live.

### Trinn 3 — Test tilkoblingen

Klikk på **Test Connection**. Wizarden sender et lett API-kall for å bekrefte legitimasjon og tilkobling. Rett ut ethvert problem med legitimasjonen før du fortsetter.

### Trinn 4 — Importer TLD-er

Klikk på **Import TLDs** for å hente alle tilgjengelige TLD-er og engrospriser fra den tilkoblede leverandøren. Dette fyller TLD-listen som brukes av domene-produkter. Importen kan ta 30–60 sekunder for leverandører med store TLD-kataloger.

TLD-er synkroniseres også automatisk én gang i døgnet via en planlagt cron-jobb.

### Trinn 5 — Opprett et domene-produkt

Wizarden oppretter et standard "catch-all" domene-produkt med en påslag på 10%. Du kan redigere dette produktet umiddelbart, eller hoppe over og opprette produkter manuelt under **Ultimate Multisite › Products**.

Se [Domain Products and Pricing](./domain-products) for den fullstendige veiledningen for produktkonfigurasjon.

---

## Rekonfigurere en leverandør

Gå til **Network Admin › Ultimate Multisite › Settings › Domain Seller** (eller klikk på **Settings** i plugin-listen).

Innstillingssiden inneholder:

- **Enable domain selling** — slå hele funksjonen på/av
- **Default provider** — leverandøren som brukes for domenesøk og nye produkter
- **Max TLDs per search** — hvor mange TLD-er som skal sjekkes når en kunde søker; høyere verdier viser flere alternativer, men er tregere
- **Availability cache duration** — hvor lenge tilgjengelighets- og prisresultater skal caches; lavere verdier er mer nøyaktige, men øker API-kallene
- **Manage domain products** — rask lenke til Products-listen
- **Configure providers** — åpner Integration Wizard for å legge til eller rekonfigurere leverandører

### Legge til en andre leverandør

Klikk på **Configure providers** og kjør wizarden på nytt for den nye registrar. Du kan ha flere leverandører konfigurert samtidig. Tildel hvert domene-produkt til en spesifikk leverandør, eller la det stå på standard.

### Manuell synkronisering av TLD-er

På innstillingssiden, klikk på **Sync TLDs** ved siden av en hvilken som helst konfigurert leverandør for å hente de nyeste prisene. Dette er nyttig etter at en leverandør har oppdatert engrosprisene eller lagt til nye TLD-er.

---

## Logger

Hver leverandør skriver til sin egen loggkanal. Loggene er synlige under **Network Admin › Ultimate Multisite › Logs**:

| Loggkanal | Innhold |
|---|---|
| `domain-seller-registration` | Alle registreringsforsøk (suksess og feil) |
| `domain-seller-renewal` | Resultater fra fornyelsesjobben |
| `domain-seller-opensrs` | Rå OpenSRS API-aktivitet |
| `domain-seller-namecheap` | Rå Namecheap API-aktivitet |
| `domain-seller-godaddy` | Rå GoDaddy API-aktivitet |
| `domain-seller-resellerclub` | Rå ResellerClub API-aktivitet |
| `domain-seller-namesilo` | Rå NameSilo API-aktivitet |
| `domain-seller-enom` | Rå Enom API-aktivitet |
