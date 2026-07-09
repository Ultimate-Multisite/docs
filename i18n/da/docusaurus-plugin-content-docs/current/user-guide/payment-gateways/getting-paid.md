---
title: Få betaling
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# At få betaling (v2) {#getting-paid-v2}

_**VIGTIG BEMÆRKNING: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Ultimate Multisite har et indbygget medlemskabs- og faktureringssystem. For at vores faktureringssystem kan fungere, har vi integreret de mest almindelige betalingsgateways, der bruges i e-handel. Standardbetalingsgateways i Ultimate Multisite er _Stripe_ , _PayPal_ , og manuel betaling. Du kan også bruge _WooCommerce_ , _GoCardless_ og _Payfast_ til at modtage betalinger ved at installere deres respektive add-ons.

## Grundlæggende indstillinger {#basic-settings}

Du kan konfigurere enhver af disse betalingsgateways under betalingsindstillingerne i Ultimate Multisite. Du kan finde det ved at gå til **Ultimate Multisite menu > Indstillinger > Betalinger.**

![Side med betalingsindstillinger i Ultimate Multisite, der viser panelet Betalinger](/img/config/payments-settings-page.png)

Før du opsætter din betalingsgateway, bedes du tage et kig på de grundlæggende betalingsindstillinger, du kan konfigurere:

**Tving automatisk fornyels** **e:** Dette sikrer, at betalingen automatisk gentages ved slutningen af hver faktureringscyklus afhængigt af den faktureringsfrekvens, brugeren har valgt.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontrollerer, om den aktive gateway har en genanvendelig fornyelsesoplysning, før et tilbagevendende medlemskab med automatisk fornyelse aktiveret gemmes. En fornyelsesoplysning kan være et gateway-abonnement, en faktureringsaftale, en gemt vault-token eller en tilsvarende genanvendelig betalingsmetode. Hvis gatewayen rapporterer, at der ikke findes nogen brugbar oplysning, gemmer Ultimate Multisite medlemskabet, men slår automatisk fornyelse fra og registrerer tilstanden med manglende oplysning, så en administrator eller et supportforløb kan bede kunden om at godkende betalingen igen før fornyelsesdatoen.

Dette forhindrer, at et medlemskab ser ud til at blive fornyet automatisk, når gatewayen kun kan opkræve engangsbetalinger. Gateway add-ons bør bekræfte, at tilbagevendende checkouts gemmer en genanvendelig oplysning, især når gatewayen understøtter både engangsopkrævning og vaulted-/abonnementsbetalingsmetoder.

**Tillad prøveperioder uden betalings** **metode:** Når denne mulighed er aktiveret, behøver din klient ikke at tilføje finansielle oplysninger under registreringsprocessen. Dette kræves først, når prøveperioden udløber.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Send faktura ved betalingsbekræftelse:** Dette giver dig mulighed for at vælge, om der skal sendes en faktura efter betaling eller ej. Bemærk, at brugere har adgang til deres betalingshistorik under deres subsite-dashboard. Denne mulighed gælder ikke for den manuelle gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fakturanummereringsskema:** Her kan du vælge enten en betalingsreferencekode eller et fortløbende nummerskema. Hvis du vælger at bruge en betalingsreferencekode til dine fakturaer, behøver du ikke at konfigurere noget. Hvis du vælger at bruge et fortløbende nummerskema, skal du konfigurere det **næste fakturanummer** (Dette nummer bruges som fakturanummer for den næste faktura, der genereres i systemet. Det øges med én, hver gang en ny faktura oprettes. Du kan ændre det og gemme det for at nulstille det fortløbende fakturanummer til en bestemt værdi) og **fakturanummerpræfikset.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Hvor finder du gateways: {#where-to-find-the-gateways}

Du kan opsætte betalingsgateways på den samme side ( **Ultimate Multisite > Indstillinger > Betalinger**). Lige under **aktive betalingsgateways** , vil du kunne se: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ og _Manuel_.

![Sektionen Aktive betalingsgateways, der viser Stripe, Stripe Checkout, PayPal og Manuel](/img/config/payments-active-gateways.png)

Vi har en dedikeret artikel for hver betalingsgateway, som guider dig gennem trinnene til at opsætte den, og som du kan finde via linksene nedenfor.

Du kan se og redigere betalingsoplysninger:

![Grænseflade til redigering af betaling](/img/admin/payment-edit.png)

Her er en fuld visning af siden til redigering af betaling:

![Fuld grænseflade til redigering af betaling](/img/admin/payment-edit-full.png)

Her er også en fuld visning af indstillingerne for betalingsgateways:

![Fuld side med indstillinger for betalingsgateways](/img/config/settings-payments-gateways-full.png)

**Opsætning af Stripe-gatewayen**

**Opsætning af PayPal-gatewayen**** **

**Opsætning af manuelle betalinger**

Hvis du nu vil bruge _WooCommerce_ , _GoCardless_ eller _Payfast_ som din betalingsgateway, skal du **installere og konfigurere deres add-ons**.

### Sådan installerer du WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Vi forstår, at _Stripe_ og _PayPal_ ikke er tilgængelige i nogle lande, hvilket begrænser eller hindrer Ultimate Multisite-brugere i effektivt at bruge vores plugin. Derfor oprettede vi et add-on til at integrere _WooCommerce,_ som er et meget populært e-handelsplugin. Udviklere over hele verden har oprettet add-ons til at integrere forskellige betalingsgateways med det. Vi udnyttede dette til at udvide de betalingsgateways, du kan bruge med Ultimate Multisite faktureringssystemet.

_**VIGTIGT:** Ultimate Multisite: WooCommerce Integration kræver, at WooCommerce er aktiveret mindst på dit hovedsite._

Gå først til add-ons-siden. Du kan finde den ved at gå til **Ultimate Multisite > Indstillinger**. Du bør se tabellen **Add-ons**. Klik på **Tjek vores add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Efter at have klikket på **Tjek vores add-ons** , bliver du omdirigeret til add-ons-siden. Her kan du finde alle Ultimate Multisite add-ons. Klik på add-onet **Ultimate Multisite: WooCommerce Integration**.

![Add-ons-side, der viser Ultimate Multisite add-ons inklusive WooCommerce Integration](/img/addons/addons-page.png)

Et vindue åbnes med detaljerne for tilføjelsen. Klik blot på **Installer nu**.

<!-- Skærmbillede ikke tilgængeligt: Dialog med detaljer for Ultimate Multisite WooCommerce Integration-tilføjelsen med knappen Installer nu -->

Når installationen er færdig, bliver du omdirigeret til udvidelsessiden. Her skal du blot klikke på **Aktivér på netværk**, og WooCommerce-tilføjelsen bliver aktiveret på dit netværk.

<!-- Skærmbillede ikke tilgængeligt: Udvidelsesside med linket Aktivér på netværk for WooCommerce Integration-tilføjelsen -->

Når du har aktiveret den, vil du modtage en påmindelse, hvis du stadig ikke har WooCommerce-udvidelsen installeret og aktiveret på dit websted.

<!-- Skærmbillede ikke tilgængeligt: Admin-meddelelse, der minder administratoren om at installere og aktivere WooCommerce-udvidelsen -->

For at læse mere om WooCommerce Integration-tilføjelsen, **klik her**.

### Sådan installerer du GoCardless-tilføjelsen: {#how-to-install-the-gocardless-add-on}

Trinnene til at installere _GoCardless_-tilføjelsen er stort set de samme som for _WooCommerce_-tilføjelsen. Gå til siden med tilføjelser, og vælg tilføjelsen **Ultimate Multisite: GoCardless Gateway**.

<!-- Skærmbillede ikke tilgængeligt: Side med tilføjelser, hvor Ultimate Multisite GoCardless Gateway-tilføjelsen er fremhævet -->

Tilføjelsesvinduet åbnes. Klik på **Installer nu**.

<!-- Skærmbillede ikke tilgængeligt: Dialog med detaljer for Ultimate Multisite GoCardless Gateway-tilføjelsen med knappen Installer nu -->

Når installationen er færdig, bliver du omdirigeret til udvidelsessiden. Her skal du blot klikke på **Aktivér på netværk**, og _GoCardless_-tilføjelsen bliver aktiveret på dit netværk.

<!-- Skærmbillede ikke tilgængeligt: Udvidelsesside med linket Aktivér på netværk for GoCardless Gateway-tilføjelsen -->

For at lære, hvordan du kommer i gang med _GoCardless_-gatewayen, **læs denne artikel**.

### Sådan installerer du Payfast-tilføjelsen: {#how-to-install-the-payfast-add-on}

Gå til siden med tilføjelser, og vælg tilføjelsen **Ultimate Multisite: Payfast Gateway**.

<!-- Skærmbillede ikke tilgængeligt: Side med tilføjelser, hvor Ultimate Multisite Payfast Gateway-tilføjelsen er fremhævet -->

Tilføjelsesvinduet åbnes. Klik på **Installer nu.**

<!-- Skærmbillede ikke tilgængeligt: Dialog med detaljer for Ultimate Multisite Payfast Gateway-tilføjelsen med knappen Installer nu -->

Når installationen er færdig, bliver du omdirigeret til udvidelsessiden. Her skal du blot klikke på **Aktivér på netværk**, og _Payfast_-tilføjelsen bliver aktiveret på dit netværk.

<!-- Skærmbillede ikke tilgængeligt: Udvidelsesside med linket Aktivér på netværk for Payfast Gateway-tilføjelsen -->
