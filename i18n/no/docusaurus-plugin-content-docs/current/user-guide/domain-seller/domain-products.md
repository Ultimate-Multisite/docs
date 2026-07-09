---
title: 'Domene, produkter og priser'
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domenedukter og prissetting {#domain-products-and-pricing}

Domeneduktene er der du styrer prissetting, TLDer, WHOIS-personvern og hvilken leverandør som skal brukes. Hver domenedukke er et standard Ultimate Multisite-produkt med en ekstra fane kalt **Domain Settings**.

## Opprette en domenedukke {#creating-a-domain-product}

1. Gå til **Network Admin › Ultimate Multisite › Products**
2. Klikk på **Add New**
3. Sett produkttypen til **Domain**
4. Konfigurer fanen **Domain Settings** (se nedenfor)
5. Lagre

Domeneduktene vises med et lilla **Domain**-merke i produktlisten og kan filtreres ved hjelp av fanen **Domain Products**.

## Domain settings tab {#domain-settings-tab}

### Provider {#provider}

Velg hvilket register som skal håndtere registreringen for dette produktet. Standardinnstillingen er det globale **Default provider** som er satt i Domain Seller settings.

### Supported TLDs {#supported-tlds}

La feltet stå tomt for å opprette et **catch-all produkt** som gjelder for alle TLDer som ikke er dekket av et annet produkt.

Skriv inn en kommaadskilt liste med TLDer (f.eks. `.com, .net, .org`) for å opprette et **TLD-spesifikt produkt** som kun gjelder for disse utvidelsene.

**Hvordan produktmatching fungerer:** Når en kunde søker etter et domene, velger tilleggspakken det mest spesifikke matchende produktet. Et produkt med `.com` i TLD-listen sin har forrang over et catch-all produkt. Hvis ingen TLD-spesifikt produkt matcher, brukes catch-all-produktet. Hvis det ikke finnes noen produkter, vises ikke domenesøket.

### Markup type {#markup-type}

Tre moduser styrer hvordan din utsalgspris beregnes fra engroskostnaden:

| Mode | Hvordan det fungerer |
|---|---|
| **Percentage** | Legger til en prosentandel på engroskostnaden. En 20 % påslag på et engrosdomene til $10 gir $12. |
| **Fixed markup** | Legger til et fast beløp i dollar. Et påslag på $5 på et domene til $10 gir $15. |
| **Fixed price** | Ignorerer engroskostnaden fullstendig. Belaster alltid beløpet du oppgir. |

### Introductory pricing {#introductory-pricing}

Aktiver for å tilby en rabattert pris det første året. Sett en separat **Introductory price** (prisen for år 1) sammen med den vanlige **Renewal price** (pris fra år 2 og utover). Kunden ser begge prisene under kassen, slik at de vet hva de kan forvente ved fornyelse.

### WHOIS privacy {#whois-privacy}

Styrer om WHOIS-personvern tilbys for domener registrert gjennom dette produktet.

| Setting | Behaviour |
|---|---|
| **Disabled** | WHOIS-personvern tilbys eller aktiveres aldri. |
| **Always Included** | WHOIS-personvern aktiveres automatisk ved registrering uten kostnad. |
| **Customer Choice** | En avkrysningsboks vises under kassen. Sett **Privacy price** for å kreve betaling per år, eller la den stå på $0 for å tilby det gratis. |

For Namecheap bruker WHOIS-personvern WhoisGuard (alltid gratis). For OpenSRS bruker det OpenSRS privacy service (kan ha en kostnad på engrosnivå).

---

## TLD import og synkronisering {#tld-import-and-sync}

Domeneduktene viser sanntids engrospriser hentet fra den tilkoblede leverandøren. For at dette skal fungere, må TLDene importeres.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (per provider)
- **Automatic sync:** Kjør daglig via en planlagt cron-jobb på tvers av alle konfigurerte leverandører

Etter en synkronisering, gå til fanen Domain Settings på en hvilken som helst domenedukke og bruk TLD-velgeren for å se tilgjengelige TLDer med deres gjeldende engrospriser.

---

## Auto-renewal {#auto-renewal}

Domenefornyelser er knyttet til kundens medlemsstatus:

- Når et medlemskap fornyes og et domene er knyttet, blir domenefornyelsen automatisk satt i kø
- Fornyingsforsøk bruker kundens aktive betalingsgateway
- Mislykkede fornyelser prøves på nytt automatisk med eksponentiell tilbakekobling (exponential backoff)
- E-postvarsler sendes for vellykkede fornyelser, feil og kommende utløp

E-postmal-ID-er for domenets livssyklushendelser:

| Event | Template ID |
|---|---|
| Domain registered | `domain_registered` |
| Domain renewed | `domain_renewed` |
| Renewal failed | `domain_renewal_failed` |
| Domain expiring soon | `domain_expiring_soon` |

---

## Admin: Manuell domenergistrering {#admin-manual-domain-registration}

For å registrere et domene på vegne av en kunde uten at de må gå gjennom kassen:

1. Gå til **Network Admin › Ultimate Multisite › Register Domain**
2. Velg kunden og skriv inn domenenavnet
3. Fyll inn registreringskontaktinformasjon (navn, adresse, telefon)
4. Klikk på **Register**

Domeneoppføringen opprettes og knyttes til kundens konto.
