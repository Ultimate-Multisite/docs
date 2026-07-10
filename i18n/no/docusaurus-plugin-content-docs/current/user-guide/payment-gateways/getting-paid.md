---
title: Å få betalt
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Få betalt (v2) {#getting-paid-v2}

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Ultimate Multisite har et innebygd system for medlemskap og fakturering. For at faktureringssystemet vårt skal fungere, har vi integrert de vanligste betalingsløsningene som brukes i e-handel. Standard betalingsløsninger i Ultimate Multisite er _Stripe_ , _PayPal_ , og Manuell betaling. Du kan også bruke _WooCommerce_ , _GoCardless_ og _Payfast_ til å motta betalinger ved å installere deres respektive add-ons.

## Grunnleggende innstillinger {#basic-settings}

Du kan konfigurere hvilken som helst av disse betalingsløsningene under betalingsinnstillingene i Ultimate Multisite. Du finner det ved å gå til **Ultimate Multisite meny > Settings > Payments.**

![Innstillingsside for betalinger i Ultimate Multisite som viser Payments-panelet](/img/config/payments-settings-page.png)

Før du setter opp betalingsløsningen din, bør du se på de grunnleggende betalingsinnstillingene du kan konfigurere:

**Tving automatisk forny** **else:** Dette sørger for at betalingen automatisk gjentas på slutten av hver faktureringssyklus, avhengig av faktureringsfrekvensen brukeren har valgt.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 sjekker om den aktive betalingsløsningen har en gjenbrukbar fornyelseslegitimasjon før et gjentakende medlemskap med automatisk fornyelse aktivert lagres. En fornyelseslegitimasjon kan være et gateway-abonnement, en faktureringsavtale, en lagret vault token eller en tilsvarende gjenbrukbar betalingsmetode. Hvis betalingsløsningen rapporterer at ingen brukbar legitimasjon finnes, lagrer Ultimate Multisite medlemskapet, men slår av automatisk fornyelse og registrerer tilstanden med manglende legitimasjon, slik at en administrator eller supportflyt kan be kunden om å autorisere betalingen på nytt før fornyelsesdatoen.

Dette hindrer at et medlemskap ser ut til å bli automatisk fornyet når betalingsløsningen bare kan innkreve engangsbetalinger. Gateway add-ons bør bekrefte at gjentakende checkout lagrer en gjenbrukbar legitimasjon, spesielt når betalingsløsningen støtter både engangsinnkreving og vaulted-/abonnementsbetalingsmoduser.

**Tillat prøver uten betalings** **metode:** Når dette alternativet er aktivert, trenger ikke klienten din å legge til finansiell informasjon under registreringsprosessen. Dette kreves først når prøveperioden utløper.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send faktura ved betalingsbekreftelse:** Dette gir deg et valg om hvorvidt du vil sende en faktura etter betaling eller ikke. Merk at brukere vil ha tilgang til betalingshistorikken sin under dashboardet for undersiden sin. Dette alternativet gjelder ikke for Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fakturanummereringsskjema:** Her kan du velge enten en betalingsreferansekode eller et sekvensielt nummerskjema. Hvis du velger å bruke en betalingsreferansekode for fakturaene dine, trenger du ikke å konfigurere noe. Hvis du velger å bruke et sekvensielt nummerskjema, må du konfigurere **neste fakturanummer** (Dette nummeret vil bli brukt som fakturanummer for den neste fakturaen som genereres i systemet. Det økes med én hver gang en ny faktura opprettes. Du kan endre det og lagre det for å tilbakestille fakturaens sekvensielle nummer til en bestemt verdi) og **prefiks for fakturanummer.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Hvor finner du betalingsløsningene: {#where-to-find-the-gateways}

Du kan sette opp betalingsløsningene på samme side ( **Ultimate Multisite > Settings > Payments**). Rett under **aktive betalingsløsninger** , vil du kunne se: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ og _Manual_.

![Seksjonen Aktive betalingsløsninger som viser Stripe, Stripe Checkout, PayPal og Manual](/img/config/payments-active-gateways.png)

Vi har en egen artikkel for hver betalingsløsning som vil veilede deg gjennom trinnene for å sette den opp, som du finner via lenkene nedenfor.

Du kan vise og redigere betalingsdetaljer:

![Grensesnitt for redigering av betaling](/img/admin/payment-edit.png)

Her er en full visning av siden for redigering av betaling:

![Fullt grensesnitt for redigering av betaling](/img/admin/payment-edit-full.png)

Her er også en full visning av innstillingene for betalingsløsningene:

![Full side for innstillinger for betalingsløsninger](/img/config/settings-payments-gateways-full.png)

**Sette opp Stripe-gatewayen**

**Sette opp PayPal-gatewayen**** **

**Sette opp manuelle betalinger**

Nå, hvis du vil bruke _WooCommerce_ , _GoCardless_ eller _Payfast_ som betalingsløsning, må du **installere og konfigurere deres add-ons**.

### Slik installerer du WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Vi forstår at _Stripe_ og _PayPal_ ikke er tilgjengelige i enkelte land, noe som begrenser eller hindrer Ultimate Multisite-brukere i å bruke pluginen vår effektivt. Derfor laget vi en add-on for å integrere _WooCommerce,_ som er en svært populær e-handelsplugin. Utviklere over hele verden har laget add-ons for å integrere ulike betalingsløsninger med den. Vi utnyttet dette for å utvide betalingsløsningene du kan bruke med faktureringssystemet i Ultimate Multisite.

_**VIKTIG:** Ultimate Multisite: WooCommerce Integration krever at WooCommerce er aktivert minst på hovednettstedet ditt._

Gå først til add-ons-siden. Du finner den ved å gå til **Ultimate Multisite > Settings**. Du bør se **Add-ons**-tabellen. Klikk på **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Etter å ha klikket på **Check our Add-ons** , blir du omdirigert til add-ons-siden. Her finner du alle Ultimate Multisite add-ons. Klikk på **Ultimate Multisite: WooCommerce Integration** add-onen.

![Add-ons-side som viser Ultimate Multisite add-ons inkludert WooCommerce Integration](/img/addons/addons-page.png)

Et vindu vil dukke opp med add-on-detaljene. Bare klikk på **Install Now**.

<!-- Skjermbilde utilgjengelig: Dialog for Ultimate Multisite WooCommerce Integration add-on-detaljer med Install Now-knapp -->

Etter at installasjonen er ferdig, blir du omdirigert til plugins-siden. Her klikker du bare på **Network Activate**, så blir WooCommerce add-on aktivert på nettverket ditt.

<!-- Skjermbilde utilgjengelig: Plugins-side med Network Activate-lenken for WooCommerce Integration add-on -->

Etter at du har aktivert den, hvis du fortsatt ikke har WooCommerce plugin installert og aktivert på nettstedet ditt, vil du motta en påminnelse.

<!-- Skjermbilde utilgjengelig: Admin-varsel som minner administratoren om å installere og aktivere WooCommerce plugin -->

For å lese mer om WooCommerce Integration add-on, **klikk her**.

### Slik installerer du GoCardless add-on: {#how-to-install-the-gocardless-add-on}

Trinnene for å installere _GoCardless_ add-on er stort sett de samme som for _WooCommerce_ add-on. Gå til add-ons-siden og velg **Ultimate Multisite: GoCardless Gateway** add-on.

<!-- Skjermbilde utilgjengelig: Add-ons-side med Ultimate Multisite GoCardless Gateway add-on uthevet -->

Add-on-vinduet vil dukke opp. Klikk på **Install Now**.

<!-- Skjermbilde utilgjengelig: Dialog for Ultimate Multisite GoCardless Gateway add-on-detaljer med Install Now-knapp -->

Etter at installasjonen er ferdig, blir du omdirigert til plugins-siden. Her klikker du bare på **Network Activate**, så blir _GoCardless_ add-on aktivert på nettverket ditt.

<!-- Skjermbilde utilgjengelig: Plugins-side med Network Activate-lenken for GoCardless Gateway add-on -->

For å lære hvordan du kommer i gang med _GoCardless_ gateway, **les denne artikkelen**.

### Slik installerer du Payfast add-on: {#how-to-install-the-payfast-add-on}

Gå til add-ons-siden og velg **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Skjermbilde utilgjengelig: Add-ons-side med Ultimate Multisite Payfast Gateway add-on uthevet -->

Add-on-vinduet vil dukke opp. Klikk på **Install Now.**

<!-- Skjermbilde utilgjengelig: Dialog for Ultimate Multisite Payfast Gateway add-on-detaljer med Install Now-knapp -->

Etter at installasjonen er ferdig, blir du omdirigert til plugins-siden. Her klikker du bare på **Network Activate**, så blir _Payfast_ add-on aktivert på nettverket ditt.

<!-- Skjermbilde utilgjengelig: Plugins-side med Network Activate-lenken for Payfast Gateway add-on -->
