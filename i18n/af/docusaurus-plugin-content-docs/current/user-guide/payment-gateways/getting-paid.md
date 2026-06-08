---
title: Om betaal te word
sidebar_position: 15
_i18n_hash: 4d43609c920fa8085a3cea69343ad2fa
---
# Om Betaal te Kry (v2)

_**BELANGRIKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Ultimate Multisite het 'n ingeboude lidmaatskap- en faktuurstelsel. Vir ons faktuurstelsel om te funksioneer, het ons die mees algemene betalingspoorte wat in e-handel gebruik word, geïntegreer. Die standaard betalingspoorte in Ultimate Multisite is _Stripe_ , _PayPal_ , en Handmatige Betaling. Jy kan ook _WooCommerce_ , _GoCardless_ en _Payfast_ gebruik om betalings te ontvang deur hul onderskeie add-ons te installeer.

## Basiese Instellings

Jy kan enige van hierdie betalingspoorte onder die Ultimate Multisite betalingsinstellings konfigureer. Jy kan dit vind deur na **Ultimate Multisite-blaaikbord > Instellings > Betalings** te gaan.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Voordat jy jou betalingspoort instel, kyk asseblief na die basiese betalingsinstellings wat jy kan konfigureer:

**Force auto-renew:** Dit verseker dat die betaling outomaties sal herhaal aan die einde van elke faktuurkring, afhangende van die faktuentempo wat die gebruiker gekies het.

![Force Auto-Renew toggle setting on the Payments settings page](/img/config/payments-force-auto-renew.png)

**Allow trials without payment method:** Met hierdie opsie ingeskakel, hoef jou kliënt nie enige finansiële inligting tydens die registrasieproses by te voeg nie. Dit sal eers vereis word sodra die proefperiode verby is.

![Allow Trials Without Payment Method toggle on the Payments settings page](/img/config/payments-allow-trials.png)

**Send invoice on payment confirmation:** Dit gee jou die opsie of nie om 'n faktuur te stuur na betalingsbevestiging nie. Onthou dat gebruikers toegang tot hul betalingsgeskiedenis sal hê onder hul subsite-blaaikbord. Hierdie opsie geld nie vir die Handmatige Poort nie.

![Send Invoice on Payment Confirmation toggle on the Payments settings page](/img/config/payments-send-invoice.png)

**Invoice numbering scheme:** Hier kan jy óf 'n betalingsverwysingskode óf 'n opeenvolgende nommerreeks skakel. As jy kies om 'n betalingsverwysingskode vir jou fakture te gebruik, hoef jy niks te konfigureer nie. As jy kies om 'n opeenvolgende nommerreeks te gebruik, sal jy die **volgende faktuurnommer** (Hierdie nommer sal as die faktuurnommer vir die volgende faktuur wat op die stelsel gegenereer word, gebruik word. Dit word elke keer dat 'n nuwe faktuur geskep word, met een verhoog. Jy kan dit verander en dit stoor om die faktuuropeenvolgende nommer na 'n spesifieke waarde te reset) en die **faktuurnommer-voorsetsel** moet konfigureer.

![Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options](/img/config/payments-invoice-scheme.png)

![Next invoice number and invoice number prefix fields shown when Sequential Number is selected](/img/config/payments-invoice-sequential.png)

## Waar om die poorte te vind:

Jy kan die betalingspoorte op dieselfde bladsy instel (**Ultimate Multisite > Instellings > Betalings**). Reg onder **aktiewe betalingspoorte** sal jy die volgende kan sien: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ en _Handmatig_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Ons het 'n toegewyde artikel vir elke betalingspoort wat jou deur die stappe van die opstel lei, wat jy op die skakels hieronder kan vind.

Jy kan betalingsbesonderhede sien en redigeer:

![Payment edit interface](/img/admin/payment-edit.png)

Hier is 'n volledige uitsig van die betalingsredigeerbladsy:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Hier is ook 'n volledige uitsig van die betalingspoortinstellings:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Installeer die Stripe poort**

**Installeer die PayPal poort**

**Installeer handmatige betalings**

Nou, as jy _WooCommerce_ , _GoCardless_ of _Payfast_ as jou betalingspoort wil gebruik, sal jy **hul add-ons moet installeer en konfigureer**.

### Hoe om die WooCommerce add-on te installeer:

Ons verstaan dat _Stripe_ en _PayPal_ nie in sommige lande beskikbaar is wat Ultimate Multisite-gebruikers beperk of belemmer om ons plugin effektief te gebruik nie. Daarom het ons 'n add-on geskep om _WooCommerce_ te integreer, wat 'n baie gewilde e-handelsplugin is. Ontwikkelaars wêreldwyd het add-ons geskep om verskillende betalingspoorte daaraan te integreer. Ons het hierdie voordeel benut om die betalingspoorte uit te brei wat jy met die Ultimate Multisite faktuurstelsel kan gebruik.

_**BELANGRIK:** Ultimate Multisite: WooCommerce Integrasie vereis dat WooCommerce ten minste op jou hoofwebwerf geaktiveer is._

Gaan eers na die add-onsbladsy. Jy kan dit vind deur na **Ultimate Multisite > Instellings** te gaan. Jy behoort die **Add-ons** tabel te sien. Klik op **Check our Add-ons**.

![Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link](/img/config/settings-addons-table.png)

Nadat jy op **Check our Add-ons** geklik het, word jy na die add-onsbladsy herlei. Hier kan jy al die Ultimate Multisite add-ons vind. Klik op die **Ultimate Multisite: WooCommerce Integration** add-on.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

'n Venster sal met die add-on besonderhede oopspring. Klik net op **Install Now**.

![Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button](/img/addons/addon-install-woocommerce.png)

Nadat die installasie voltooi is, word jy na die pluginsbladsy herlei. Hier, klik net op **Network Activate** en die WooCommerce add-on sal op jou netwerk geaktiveer word.

![Plugins page with the Network Activate link for the WooCommerce Integration add-on](/img/addons/addon-network-activate-woocommerce.png)

Nadat dit geaktiveer is, as jy steeds nie die WooCommerce plugin op jou webwerf geïnstalleer en geaktiveer het nie, sal jy 'n herinnering ontvang.

![Admin notice reminding the administrator to install and activate the WooCommerce plugin](/img/addons/addon-woocommerce-reminder.png)

Om meer oor die WooCommerce Integration add-on te lees, **klik hier**.

### Hoe om die GoCardless add-on te installeer:

Die stappe om die _GoCardless_ add-on te installeer is byna dieselfde as die _WooCommerce_ add-on. Gaan asseblief na die add-onsbladsy en kies die **Ultimate Multisite: GoCardless Gateway** add-on.

![Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted](/img/addons/addons-page-gocardless.png)

Die add-on venster sal oopspring. Klik op **Install Now**.

![Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button](/img/addons/addon-install-gocardless.png)

Nadat die installasie voltooi is, word jy na die pluginsbladsy herlei. Hier, klik net op **Network Activate** en die _GoCardless_ add-on sal op jou netwerk geaktiveer word.

![Plugins page with the Network Activate link for the GoCardless Gateway add-on](/img/addons/addon-network-activate-gocardless.png)

Om te leer hoe om met die _GoCardless_ poort te begin, **lees hierdie artikel**.

### Hoe om die Payfast add-on te installeer:

Gaan na die add-onsbladsy en kies die **Ultimate Multisite: Payfast Gateway** add-on.

![Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted](/img/addons/addons-page-payfast.png)

Die add-on venster sal oopspring. Klik op **Install Now.**

![Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button](/img/addons/addon-install-payfast.png)

Nadat die installasie voltooi is, word jy na die pluginsbladsy herlei. Hier, klik net op **Network Activate** en die _Payfast_ add-on sal op jou netwerk geaktiveer word.

![Plugins page with the Network Activate link for the Payfast Gateway add-on](/img/addons/addon-network-activate-payfast.png)
