---
title: Domæneprodukter og priser
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domæneprodukter og prissætning {#domain-products-and-pricing}

Domæneprodukter er, hvordan du styrer prissætning, TLD'er (Top-Level Domains), WHOIS-privatliv og udbyderudvælgelse. Hvert domæneprodukt er et standard Ultimate Multisite produkt med en ekstra **Domain Settings** faneblad.

## Oprettelse af et domæneprodukt {#creating-a-domain-product}

1. Gå til **Network Admin › Ultimate Multisite › Products**
2. Klik på **Add New** (Tilføj nyt)
3. Sæt produktformatet til **Domain**.
4. Konfigurer fanen **Domain Settings** (se nedenfor).
5. Gem.

Domæneprodukter vises med et lilla **Domain** badge i produktlisten og kan filtreres ved hjælp af fanen **Domain Products**.

## Domain settings faneblad {#domain-settings-tab}

### Udbyder (Provider) {#provider}

Vælg, hvilken registreringsudbyder der skal håndtere registreringen for dette produkt. Standardindstillingen er den globale **Default provider**, som er sat i indstillingerne for Domæne Sælger.

### Understøttede TLD'er (Supported TLDs) {#supported-tlds}

Lad feltet tomt for at oprette et **catch-all produkt**, der gælder for alle TLD'er, som ikke matcher et andet produkt. Indtast en komma-adskilt liste over TLD'er (f.eks. `.com, .net, .org`) for at oprette et **TLD-specifikt produkt**, der kun gælder for disse endelser.

**Hvordan produktmatchning fungerer:** Når en kunde søger efter et domæne, vælger add-on'et det mest specifikke matchende produkt. Et produkt med `.com` i sin TLD-liste har forrang for et catch-all produkt. Hvis der ikke findes et TLD-specifikt produkt, der matcher, bruges catch-all'en. Hvis der slet ikke findes produkter, vises domænesøgningen ikke.

### Prisjusteringstype (Markup type) {#markup-type}

Tre tilstande styrer, hvordan din detailpris beregnes ud fra anskaffelsesprisen:

| Tilstand | Hvordan det virker |
|---|---|
| **Procent** | Tilføjer en procent på toppen af anskaffelsesprisen. En 20% markup på et domæne med en anskaffelsespris på $10 giver $12. |
| **Fast prisjustering (Fixed markup)** | Tilføjer et fast beløb i dollars. En $5 markup på et domæne til $10 giver $15. |
| **Fast pris** | Ignorerer anskaffelsesprisen helt. Opkræver altid det beløb, du indtaster. |

### Indledende prissætning (Introductory pricing) {#introductory-pricing}

### Tilbud om rabatter på første år {#whois-privacy}

Aktiver muligheden for at tilbyde en nedsat pris i det første år. Sæt en separat **Introduktionspris** (prisen for år 1) ud over den almindelige **Fornyelsespris** (for år 2+). Kunden ser begge priser vist under kassen, så de ved, hvad de kan forvente ved fornyelsen.

### WHOIS privatliv {#tld-import-and-sync}

Kontroller om WHOIS privatliv beskyttelse tilbydes for domæner registreret gennem dette produkt.

| Indstilling | Adfærd |
|---|---|
| **Deaktiveret** | WHOIS privatliv tilbydes eller aktiveres aldrig. |
| **Alt inkluderet** | WHOIS privatliv aktiveres automatisk ved registrering uden omkostninger. |
| **Kundevalg** | En afkrydsningsboks vises under kassen. Sæt **Privatlivsprisen** til at opkræve pr. år, eller lad den være på $0 for at tilbyde det gratis. |

For Namecheap bruger WHOIS privatliv WhoisGuard (altid gratis). For OpenSRS bruger det OpenSRS privatlivservice (kan have en omkostning ved wholesale).

---

## TLD import og synkronisering {#auto-renewal}

Domæneprodukter viser realtids-wholesale-priser hentet fra den forbundne udbyder. For at dette skal virke, skal TLD'er importeres.

- **Manuel synkronisering:** Indstillinger › Domænesælger › Synkroniser TLD'er (per udbyder)
- **Automatisk synkronisering:** Kører dagligt via en planlagt cron job på tværs af alle konfigureret udbydere

Efter en synkronisering skal du gå til fanen Domæneindstillinger for et domæneprodukt og bruge TLD-vælgeren til at se de tilgængelige TLD'er med deres aktuelle wholesale-priser.

---

## Automatisk fornyelse {#admin-manual-domain-registration}

Domænefornyelser er knyttet til kundens medlemsstatus:

- Når et medlemskab fornyes og et domæne er linket, bliver domænefornyelsen automatisk sat i kø
- Fornyelsesforsøg bruger kundens aktive betalingsgateway
- Mislykkede fornyelser forsøges automatisk igen med eksponentiel backoff
- E-mail-notifikationer sendes ved succesfulde fornyelser, fejl og kommende udløb

E-mail skabelon-ID'er til domænecyklusbegivenheder:

| Event | Template ID |
|---|---|
| Domæne registreret | `domain_registered` |
| Domæne fornyet | `domain_renewed` |
| Fornyelse fejlede | `domain_renewal_failed` |
| Domæne udløber snart | `domain_expiring_soon` |

---

## Admin: Manuel domæneregistrering

For at registrere et domæne på vegne af en kunde uden at de skal gennemføre betalingen:

1. Gå til **Network Admin › Ultimate Multisite › Register Domain**
2. Vælg kunden og indtast domænenavnet
3. Udfyld registreringsoplysninger for modtager (navn, adresse, telefonnummer)
4. Klik på **Register**

Domænereddet oprettes og linkes til kundens konto.
