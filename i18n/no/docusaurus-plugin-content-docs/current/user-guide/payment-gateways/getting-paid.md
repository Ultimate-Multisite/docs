---
title: Å få betalt
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Motta betalinger (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Ultimate Multisite har et innebygd medlems- og faktureringssystem. For at faktureringssystemet skal fungere, har vi integrert de vanligste betalingsløsningene som brukes i netthandel. Standardløsningene i Ultimate Multisite er _Stripe_, _PayPal_ og manuell betaling. Du kan også bruke _WooCommerce_, _GoCardless_ og _Payfast_ til å motta betalinger ved å installere de respektive tilleggene.

## Grunnleggende innstillinger

Du kan konfigurere alle disse betalingsløsningene under betalingsinnstillingene i Ultimate Multisite. Du finner dem ved å gå til **Ultimate Multisite-menyen > Innstillinger > Betalinger.**

![Siden for betalingsinnstillinger i Ultimate Multisite](/img/config/settings-payment-gateways.png)

Før du setter opp betalingsløsningen din, bør du ta en titt på de grunnleggende betalingsinnstillingene du kan konfigurere:

**Tving automatisk fornyelse:** Dette sørger for at betalingen automatisk gjentas ved slutten av hver faktureringsperiode, avhengig av faktureringsfrekvensen brukeren har valgt.

![Innstilling for å slå på automatisk fornyelse](/img/config/settings-payment-gateways.png)

**Tillat prøveperioder uten betalingsmetode:** Med dette alternativet aktivert trenger ikke kunden å legge inn betalingsinformasjon under registreringsprosessen. Dette kreves først når prøveperioden utløper.

![Bryter for å tillate prøveperioder uten betalingsmetode](/img/config/settings-payment-gateways.png)

**Send faktura ved betalingsbekreftelse:** Her kan du velge om det skal sendes en faktura etter betaling eller ikke. Merk at brukere har tilgang til betalingshistorikken sin via kontrollpanelet på undersiden sin. Dette alternativet gjelder ikke for manuell betaling.

![Bryter for å sende faktura ved betalingsbekreftelse](/img/config/settings-payment-gateways.png)

**Fakturanummereringsmetode:** Her kan du velge mellom en betalingsreferansekode eller et sekvensielt nummereringssystem. Hvis du velger å bruke betalingsreferansekode for fakturaene dine, trenger du ikke konfigurere noe. Hvis du velger sekvensielt nummereringssystem, må du konfigurere **neste fakturanummer** (dette nummeret brukes som fakturanummer for neste faktura som genereres i systemet. Det økes med én hver gang en ny faktura opprettes. Du kan endre og lagre det for å tilbakestille fakturanummereringen til en bestemt verdi) og **fakturanummerprefikset.**

![Valg av fakturanummereringsmetode](/img/config/settings-payment-gateways.png)

![Innstillinger for sekvensielt fakturanummer og prefiks](/img/config/settings-payment-gateways.png)

## Hvor du finner betalingsløsningene:

Du kan sette opp betalingsløsningene på samme side (**Ultimate Multisite > Innstillinger > Betalinger**). Rett under **aktive betalingsløsninger** finner du: _Stripe_, _Stripe Checkout_, _PayPal_ og _Manuell_.

![Liste over aktive betalingsløsninger](/img/config/settings-payment-gateways.png)

Vi har en egen artikkel for hver betalingsløsning som veileder deg gjennom oppsettsprosessen. Du finner dem via lenkene nedenfor.

**Sette opp Stripe-løsningen**

**Sette opp PayPal-løsningen**

**Sette opp manuelle betalinger**

Hvis du vil bruke _WooCommerce_, _GoCardless_ eller _Payfast_ som betalingsløsning, må du **installere og konfigurere tilleggene deres**.

### Slik installerer du WooCommerce-tillegget:

Vi forstår at _Stripe_ og _PayPal_ ikke er tilgjengelig i alle land, noe som begrenser eller hindrer Ultimate Multisite-brukere i å bruke pluginen vår effektivt. Derfor har vi laget et tillegg for å integrere _WooCommerce_, som er en svært populær netthandelsplugin. Utviklere over hele verden har laget tillegg for å integrere ulike betalingsløsninger med den. Vi utnyttet dette for å utvide betalingsmulighetene du kan bruke med Ultimate Multisites faktureringssystem.

_**VIKTIG:** Ultimate Multisite: WooCommerce Integration krever at WooCommerce er aktivert minst på hovedsiden din._

Gå først til tilleggssiden. Du finner den ved å gå til **Ultimate Multisite > Innstillinger**. Der ser du **Tillegg**-tabellen. Klikk på **Se våre tillegg**.

![Innstillingssiden med tilleggsseksjon](/img/config/settings-general.png)

Etter at du klikker på **Se våre tillegg**, blir du videresendt til tilleggssiden. Her finner du alle Ultimate Multisite-tillegg. Klikk på tillegget **Ultimate Multisite: WooCommerce Integration**.

![Tilleggssiden med oversikt over tilgjengelige tillegg](/img/config/settings-general.png)

Et vindu med tilleggsdetaljer dukker opp. Klikk bare på **Installer nå**.

![Installasjonsdialog for WooCommerce-tillegget](/img/config/settings-general.png)

Etter at installasjonen er fullført, blir du videresendt til pluginsiden. Klikk her på **Nettverksaktiver**, og WooCommerce-tillegget blir aktivert på nettverket ditt.

![Nettverksaktiver WooCommerce-tillegget](/img/config/settings-general.png)

Etter aktivering vil du få en påminnelse hvis du ikke allerede har WooCommerce-pluginen installert og aktivert på nettstedet ditt.

![Påminnelse om å aktivere WooCommerce](/img/config/settings-general.png)

For å lese mer om WooCommerce Integration-tillegget, **klikk her**.

### Slik installerer du GoCardless-tillegget:

Fremgangsmåten for å installere _GoCardless_-tillegget er stort sett den samme som for _WooCommerce_-tillegget. Gå til tilleggssiden og velg tillegget **Ultimate Multisite: GoCardless Gateway**.

![Tilleggssiden med oversikt over tilgjengelige tillegg](/img/config/settings-general.png)

Tilleggsvinduet dukker opp. Klikk på **Installer nå**.

![Installasjonsdialog for GoCardless-tillegget](/img/config/settings-general.png)

Etter at installasjonen er fullført, blir du videresendt til pluginsiden. Klikk her på **Nettverksaktiver**, og _GoCardless_-tillegget blir aktivert på nettverket ditt.

![Nettverksaktiver GoCardless-tillegget](/img/config/settings-general.png)

For å lære hvordan du kommer i gang med _GoCardless_-løsningen, **les denne artikkelen**.

### Slik installerer du Payfast-tillegget:

Gå til tilleggssiden og velg tillegget **Ultimate Multisite: Payfast Gateway**.

![Tilleggssiden med oversikt over tilgjengelige tillegg](/img/config/settings-general.png)

Tilleggsvinduet dukker opp. Klikk på **Installer nå.**

![Installasjonsdialog for Payfast-tillegget](/img/config/settings-general.png)

Etter at installasjonen er fullført, blir du videresendt til pluginsiden. Klikk her på **Nettverksaktiver**, og _Payfast_-tillegget blir aktivert på nettverket ditt.

![Nettverksaktiver Payfast-tillegget](/img/config/settings-general.png)
