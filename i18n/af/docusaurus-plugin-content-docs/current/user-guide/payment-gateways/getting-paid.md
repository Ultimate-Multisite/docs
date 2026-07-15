---
title: Betaal word
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Word Betaal (v2)

_**BELANGRIKE NOTA: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Ultimate Multisite het ’n ingeboude lidmaatskap- en faktureringstelsel. Vir ons faktureringstelsel om te funksioneer, het ons die mees algemene betalingspoortjies geïntegreer wat in e-handel gebruik word. Die verstek-betalingspoortjies in Ultimate Multisite is _Stripe_ , _PayPal_ , en Handmatige Betaling. Jy kan ook _WooCommerce_ , _GoCardless_ en _Payfast_ gebruik om betalings te ontvang deur hul onderskeie add-ons te installeer.

## Basiese Instellings {#basic-settings}

Jy kan enige van hierdie betalingspoortjies onder Ultimate Multisite betalingsinstellings konfigureer. Jy kan dit vind deur na **Ultimate Multisite menu > Settings > Payments.** te gaan

![Betalingsinstellingsbladsy in Ultimate Multisite wat die Payments-paneel wys](/img/config/payments-settings-page.png)

Voordat jy jou betalingspoortjie opstel, kyk asseblief na die basiese betalingsinstellings wat jy kan konfigureer:

**Dwing outomatiese hernu** **wing af:** Dit sal verseker dat die betaling outomaties aan die einde van elke faktureringsiklus herhaal, afhangend van die faktureringsfrekwensie wat die gebruiker gekies het.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontroleer of die aktiewe poortjie ’n herbruikbare hernuwingsbewys het voordat ’n herhalende lidmaatskap met outomatiese hernuwing geaktiveer gestoor word. ’n Hernuwingsbewys kan ’n poortjie-subskripsie, faktureringsooreenkoms, gestoorde vault-token, of ekwivalente herbruikbare betaalmetode wees. As die poortjie rapporteer dat geen bruikbare bewys bestaan nie, stoor Ultimate Multisite die lidmaatskap maar skakel outomatiese hernuwing af en teken die ontbrekende-bewys-toestand aan sodat ’n administrateur of ondersteuningsvloei die kliënt kan vra om betaling weer te magtig voor die hernuwingsdatum.

Dit verhoed dat ’n lidmaatskap lyk asof dit outomaties hernu wanneer die poortjie slegs eenmalige betalings kan invorder. Poortjie-add-ons behoort te bevestig dat herhalende checkouts ’n herbruikbare bewys stoor, veral wanneer die poortjie beide eenmalige vaslegging en vaulted-/subskripsie-betaalmodusse ondersteun.

**Laat proeflopies sonder betaal** **metode toe:** Met hierdie opsie geaktiveer hoef jou kliënt geen finansiële inligting tydens die registrasieproses by te voeg nie. Dit sal eers vereis word sodra die proeftydperk verstryk.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Stuur faktuur by betalingsbevestiging:** Dit gee jou ’n opsie of ’n faktuur ná betaling gestuur moet word of nie. Let daarop dat gebruikers toegang tot hul betalingsgeskiedenis onder hul subwerf-dashboard sal hê. Hierdie opsie is nie van toepassing op die Handmatige Poortjie nie.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Faktuurnommeringskema:** Hier kan jy óf ’n betalingsverwysingskode óf ’n opeenvolgende nommerskema kies. As jy kies om ’n betalingsverwysingskode vir jou fakture te gebruik, hoef jy niks te konfigureer nie. As jy kies om ’n opeenvolgende nommerskema te gebruik, sal jy die **volgende faktuurnommer** moet konfigureer (Hierdie nommer sal gebruik word as die faktuurnommer vir die volgende faktuur wat op die stelsel gegenereer word. Dit word met een verhoog elke keer wanneer ’n nuwe faktuur geskep word. Jy kan dit verander en stoor om die faktuur-opeenvolgende nommer na ’n spesifieke waarde terug te stel) en die **faktuurnommer-voorvoegsel.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Waar om die poortjies te vind: {#where-to-find-the-gateways}

Jy kan die betalingspoortjies op dieselfde bladsy opstel ( **Ultimate Multisite > Settings > Payments**). Reg onder **aktiewe betalingspoortjies** , sal jy kan sien: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ en _Manual_.

![Aktiewe Betalingspoortjies-afdeling wat Stripe, Stripe Checkout, PayPal en Manual lys](/img/config/payments-active-gateways.png)

Ons het ’n toegewyde artikel vir elke betalingspoortjie wat jou deur die stappe sal lei om dit op te stel, wat jy op die skakels hieronder kan vind.

Jy kan betalingsbesonderhede bekyk en wysig:

![Betalingswysigingskoppelvlak](/img/admin/payment-edit.png)

Hier is ’n volledige aansig van die betalingswysigingsbladsy:

![Volledige betalingswysigingskoppelvlak](/img/admin/payment-edit-full.png)

Hier is ook ’n volledige aansig van die betalingspoortjie-instellings:

![Volledige bladsy vir betalingspoortjie-instellings](/img/config/settings-payments-gateways-full.png)

**Stel die Stripe-poortjie op**

**Stel die PayPal-poortjie op**** **

**Stel handmatige betalings op**

Nou, as jy _WooCommerce_ , _GoCardless_ of _Payfast_ as jou betalingspoortjie wil gebruik, sal jy hul add-ons moet **installeer en konfigureer**.

### Hoe om die WooCommerce add-on te installeer: {#how-to-install-the-woocommerce-add-on}

Ons verstaan dat _Stripe_ en _PayPal_ nie in sommige lande beskikbaar is nie, wat Ultimate Multisite-gebruikers beperk of verhinder om ons plugin doeltreffend te gebruik. Daarom het ons ’n add-on geskep om _WooCommerce,_ te integreer, wat ’n baie gewilde e-handel-plugin is. Ontwikkelaars regoor die wêreld het add-ons geskep om verskillende betalingspoortjies daarmee te integreer. Ons het hiervan gebruik gemaak om die betalingspoortjies uit te brei wat jy met die Ultimate Multisite-faktureringstelsel kan gebruik.

_**BELANGRIK:** Ultimate Multisite: WooCommerce Integration vereis dat WooCommerce ten minste op jou hoofwerf geaktiveer is._

Gaan asseblief eers na die add-ons-bladsy. Jy kan dit vind deur na **Ultimate Multisite > Settings** te gaan. Jy behoort die **Add-ons**-tabel te sien. Klik op **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nadat jy op **Check our Add-ons** geklik het, sal jy na die add-ons-bladsy herlei word. Hier kan jy alle Ultimate Multisite add-ons vind. Klik op die **Ultimate Multisite: WooCommerce Integration** add-on.

![Add-ons-bladsy wat Ultimate Multisite add-ons lys, insluitend WooCommerce Integration](/img/addons/addons-page.png)

’n Venster sal oopmaak met die byvoeging se besonderhede. Klik net op **Installeer nou**.

<!-- Skermskoot nie beskikbaar nie: Ultimate Multisite WooCommerce Integration-byvoeging se besonderhede-dialoog met Installeer nou-knoppie -->

Nadat die installasie klaar is, sal jy na die inproppe-bladsy herlei word. Klik hier net op **Network Aktiveer** en die WooCommerce-byvoeging sal op jou netwerk geaktiveer word.

<!-- Skermskoot nie beskikbaar nie: Inproppe-bladsy met die Network Aktiveer-skakel vir die WooCommerce Integration-byvoeging -->

Nadat jy dit geaktiveer het, as jy steeds nie die WooCommerce-inprop op jou webwerf geïnstalleer en geaktiveer het nie, sal jy ’n herinnering ontvang.

<!-- Skermskoot nie beskikbaar nie: Admin-kennisgewing wat die administrateur herinner om die WooCommerce-inprop te installeer en te aktiveer -->

Om meer oor die WooCommerce Integration-byvoeging te lees, **klik hier**.

### Hoe om die GoCardless-byvoeging te installeer: {#how-to-install-the-gocardless-add-on}

Die stappe om die _GoCardless_-byvoeging te installeer, is amper dieselfde as vir die _WooCommerce_-byvoeging. Gaan asseblief na die byvoegingsbladsy en kies die **Ultimate Multisite: GoCardless Gateway**-byvoeging.

<!-- Skermskoot nie beskikbaar nie: Byvoegingsbladsy met die Ultimate Multisite GoCardless Gateway-byvoeging uitgelig -->

Die byvoegingsvenster sal oopmaak. Klik op **Installeer nou**.

<!-- Skermskoot nie beskikbaar nie: Ultimate Multisite GoCardless Gateway-byvoeging se besonderhede-dialoog met Installeer nou-knoppie -->

Nadat die installasie klaar is, sal jy na die inproppe-bladsy herlei word. Klik hier net op **Network Aktiveer** en die _GoCardless_-byvoeging sal op jou netwerk geaktiveer word.

<!-- Skermskoot nie beskikbaar nie: Inproppe-bladsy met die Network Aktiveer-skakel vir die GoCardless Gateway-byvoeging -->

Om te leer hoe om met die _GoCardless_-poort te begin, **lees hierdie artikel**.

### Hoe om die Payfast-byvoeging te installeer: {#how-to-install-the-payfast-add-on}

Gaan na die byvoegingsbladsy en kies die **Ultimate Multisite: Payfast Gateway**-byvoeging.

<!-- Skermskoot nie beskikbaar nie: Byvoegingsbladsy met die Ultimate Multisite Payfast Gateway-byvoeging uitgelig -->

Die byvoegingsvenster sal oopmaak. Klik op **Installeer nou.**

<!-- Skermskoot nie beskikbaar nie: Ultimate Multisite Payfast Gateway-byvoeging se besonderhede-dialoog met Installeer nou-knoppie -->

Nadat die installasie klaar is, sal jy na die inproppe-bladsy herlei word. Klik hier net op **Network Aktiveer** en die _Payfast_-byvoeging sal op jou netwerk geaktiveer word.

<!-- Skermskoot nie beskikbaar nie: Inproppe-bladsy met die Network Aktiveer-skakel vir die Payfast Gateway-byvoeging -->
