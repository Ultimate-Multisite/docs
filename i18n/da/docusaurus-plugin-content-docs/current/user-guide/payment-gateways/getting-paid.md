---
title: At blive betalt
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Betaling (v2)

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Ultimate Multisite har et indbygget medlemskabssystem og en faktureringsfunktion. For at vores faktureringssystem kan fungere, har vi integreret de mest almindelige betalingsportaler, der bruges i e-handel. Standardbetalingsportaler i Ultimate Multisite er _Stripe_, _PayPal_ og Manuel Betaling. Du kan også bruge _WooCommerce_, _GoCardless_ og _Payfast_ til at modtage betalinger ved at installere deres respektive add-ons.

## Grundlæggende Indstillinger

Du kan konfigurere enhver af disse betalingsportaler under Ultimate Multisites betalingsindstillinger. Du finder dem ved at gå til **Ultimate Multisite menu > Settings > Payments.**

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Før du opsætter din betalingsportal, tjek venligst de grundlæggende betalingsindstillinger, du kan konfigurere:

**Force auto-rene** **w:** Dette sikrer, at betalingen automatisk gentages ved slutningen af hver faktureringscyklus, afhængigt af den faktureringsfrekvens, brugeren har valgt.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 tjekker, om den aktive portal har en genanvendelig fornyelsesbevis før gemning af et tilbagevendende medlemskab med automatisk fornyelse aktiveret. Et fornyelsesbevis kan være et portalabonnement, en faktureringsaftale, en gemt vault token eller tilsvarende genanvendelig betalingsmetode. Hvis portalerne rapporterer, at der ikke findes noget brugbart bevis, gemmer Ultimate Multisite medlemskabet, men slår automatisk fornyelse fra og registrerer tilstanden med manglende bevis, så en administrator eller support kan bede kunden om at genautorisere betalingen før fornyelsesdatoen.

**Tillad prøveperioder uden betaling** **metode:** Når denne mulighed er aktiveret, behøver din klient ikke tilføje nogen finansielle oplysninger under registreringsprocessen. Dette vil kun være nødvendigt, når prøveperioden udløber.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send faktura ved betalingsbekræftelse:** Dette giver dig mulighed for at vælge, om du vil sende en faktura efter betaling eller ej. Bemærk, at brugere vil have adgang til deres betalingshistorik under deres subsite dashboard. Denne mulighed gælder ikke for Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fakturanummeringsskema:** Her kan du vælge enten en betalingsreferencekode eller et sekventielt nummer-skema. Hvis du vælger at bruge en betalingsreferencekode til dine fakturaer, behøver du ikke konfigurere noget. Hvis du vælger et sekventielt nummer-skema, skal du konfigurere **næste fakturanummer** (Dette nummer vil blive brugt som fakturanummer for den næste faktura genereret i systemet. Det øges med ét hver gang en ny faktura oprettes. Du kan ændre det og gemme det for at nulstille det sekventielle fakturanummer til en specifik værdi) samt **fakturanummerets præfiks**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Næste fakturanummer og fakturanummerpræfikser vises, når Sekventielt nummer er valgt -->

## Hvor finder du gateway'erne:

Du kan opsætte betalingsgateway'erne på samme side (**Ultimate Multisite > Indstillinger > Betalinger**). Lige under **aktive betalingsgateway'er** vil du kunne se: _Stripe_, _Stripe_ Checkout, _PayPal_ og _Manuel_.

![Sektion for aktive betalingsgateway'er, der lister Stripe, Stripe Checkout, PayPal og Manuel](/img/config/payments-active-gateways.png)

Vi har en dedikeret artikel til hver betalingsgateway, som guider dig gennem trinene til opsætning, som du kan finde på de links nedenfor.

Du kan se og redigere betalingsdetaljer:

![Betalingsredigeringsgrænseflade](/img/admin/payment-edit.png)

Her er et fuldt overblik over siden til redigering af betalinger:

![Fuldt interface for betalingsredigering](/img/admin/payment-edit-full.png)

Her er også et fuldt overblik over indstillingerne for betalingsgateway'erne:

![Fuld side med indstillinger for betalingsgateway'er](/img/config/settings-payments-gateways-full.png)

**Opsætning af Stripe gateway'et**

**Opsætning af PayPal gateway'et**** **

**Opsætning af manuelle betalinger**

Nu, hvis du vil bruge _WooCommerce_, _GoCardless_ eller _Payfast_ som din betalingsgateway, skal du **installere og konfigurere deres add-ons**.

### Sådan installerer du WooCommerce add-on:

Vi forstår, at _Stripe_ og _PayPal_ ikke er tilgængelige i nogle lande, hvilket begrænser eller hindrer Ultimate Multisite brugere i effektivt at bruge vores plugin. Derfor har vi skabt et add-on til at integrere _WooCommerce_, som er en meget populær e-handelsplugin. Udviklere over hele verden har skabt add-ons til at integrere forskellige betalingsgateway'er med den. Vi har udnyttet dette til at udvide de betalingsgateway'er, du kan bruge med Ultimate Multisite faktureringssystem.

**VIGTIGTIG:** Ultimate Multisite: WooCommerce-integration kræver, at WooCommerce er aktiveret på mindst din hovedside.

Først skal du gå til fanen Tilføjelser (Add-ons). Du kan finde den ved at gå til **Ultimate Multisite > Indstillinger**. Her vil du se tabellen over **Tilføjelser** (Add-ons). Klik på **Tjek vores tilføjelser** (Check our Add-ons).

<!-- Screenshot unavailable: Tilføjelsetabel i Ultimate Multisite Indstillingsside med linket Tjek vores tilføjelser -->

Efter at have klikket på **Tjek vores tilføjelser**, bliver du omdirigeret til tilføjelseslisten. Her finder du alle Ultimate Multisite tilføjelser. Klik på tilføjelsen **Ultimate Multisite: WooCommerce Integration**.

![Tilføjelsesliste over Ultimate Multisite tilføjelser, herunder WooCommerce Integration](/img/addons/addons-page.png)

Et vindue popper op med detaljerne for tilføjelsen. Klik blot på **Installer nu** (Install Now).

<!-- Screenshot unavailable: Dialog med detaljer for Ultimate Multisite WooCommerce Integration tilføjelsen og knappen Installer nu -->

Når installationen er færdig, bliver du omdirigeret til plugins-siden. Her skal du blot klikke på **Aktiver netværk** (Network Activate), og WooCommerce-tilføjelsen vil blive aktiveret på dit netværk.

<!-- Screenshot unavailable: Pluginside med linket Aktiver netværk for WooCommerce Integration tilføjelsen -->

Efter aktivering modtager du en påmindelse, hvis du stadig ikke har WooCommerce-plugin'et installeret og aktiveret på din hjemmeside.

<!-- Screenshot unavailable: Admin-meddelelse der minder administrator om at installere og aktivere WooCommerce-pluginet -->

For at læse mere om WooCommerce Integration tilføjelsen, **klik her**.

### Sådan installerer du GoCardless tilføjelsen:

Trin de at installere tilføjelsen _GoCardless_ er næsten de samme som tilføjelsen _WooCommerce_. Gå til tilføjelseslisten og vælg tilføjelsen **Ultimate Multisite: GoCardless Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Tilføjelsesvinduet vil poppe op. Klik på **Install Now** (Installer nu).

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Når installationen er færdig, bliver du omdirigeret til pluginsiden. Her skal du blot klikke på **Network Activate** (Aktiver netværk), og _GoCardless_-tilføjelsen vil blive aktiveret på dit netværk.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

For at lære hvordan du starter med _GoCardless_ gatewayen, **læs denne artikel**.

### Sådan installerer du Payfast tilføjelsen:

Gå til tilføjelseslisten og vælg tilføjelsen **Ultimate Multisite: Payfast Gateway**.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Tilføjelsesvinduet vil poppe op. Klik på **Install Now** (Installer nu).

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Når installationen er færdig, bliver du omdirigeret til pluginsiden. Her skal du blot klikke på **Network Activate** (Aktiver netværk), og _Payfast_-tilføjelsen vil blive aktiveret på dit netværk.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
