---
title: Pagatzeko
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Pagamendu (v2)

_**IMPORTANTE NOTA: Leze hau artikulu Ultimate Multisite 2.x bertsioari referentzia da.**_

Ultimate Multisite-ek membership eta fakturazio sistema bat dago. Bizienaren sistema funtzionatzeko, e-commerce-ean erabiltzen direla garrantzitsuak koletiboa metodo hauek integratu dugu. Ultimate Multisite-aren default payment gateways hauek dira _Stripe_, _PayPal_ eta Pagamendu Manuala. Horrek instalatzen dituzteko add-onsak erabiliz, _WooCommerce_, _GoCardless_ eta _Payfast_ mediante pagamento bat hartzeko ere.

## Sailak Osagarriak (Basic Settings)

Ultimate Multisitearen payment settings-ek ondorioztatu dezake hauek guztiak. Horrek **Ultimate Multisite menua > Settings > Payments** laukera jarraituz aurkitu daitezke.

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

Payment gateway bat konfiguratatu aurretik, konfiguratatu dituen sailak osagarriak ikusten duzu:

**Force auto-rene (Auto-renu zorrokatzea):** Hau gai daude bereziki iragailduko, erabiltzailearen saioa aukeratutako fakturazio freqwenciarearen ondorioz, lehen fakturazio urrunak guztietan automatikoki iragailuko.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0-ek, auto-renu aktiboa jakinarazituta membership bat ezagutzeko, aktibo gateway-ek iragailduko iragailua (renewal credential) dagoen edo ez dagoen jakin egiten du. Iragailua iragailua izan daiteke gateway subscription bat, fakturazio erlagia bat, vault token bat saldutako edo arrunta payment method bat. Gateway-ek erabiltzen ez dagoen iragailua informatu beharko du, Ultimate Multisite membership bat salditu du baina auto-renu hori deshabilitatzen du eta faltazko iragailua erregistro egiten du, hau daingoan administrazio edo suporta flujoak lehen fakturazio datuaren aurrera erabiltzaileari payment bat berri autorizatu beharko duen gertatuta.

**Probatak ez hasterren edo laburpen bat auto-renew da, honekian gisa da bere gateway-ek batez bat txosten iragitzare kondiziona dagoenean.** Gateway add-on-ek konprimitzen deben dira bere recurring checkout-ek identifikazio erresurgazteko (reusable credential) testatzea, batez ere gateway-ek både one-time capture eta vaulted/subscription payment moduak suportatzen dutenean.

**Laburpenak laburtu edo laburtu ez duen metodoa** **metodo:** Hau opszioa aktiboa eginduan, client-ek irregistroprozesuaren aurrean finantzialko informazio bat ez ematen dituzte. Horrek trial barkatuaren ondoren baino ez da beharrezkoa izango.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Laburpenak laburtu edo laburtu konformazioan bidali:** Hau lekuan da, laburtuaren ondoren laburtu bat bidaltzea edo ez bidaltzea erabiliko duen opszioa. Indartu nahi duzu iragilariak bere subsite dashboard-ean bere laburtu historiaren artean erabilera izango duela. Hau opszioa Manual Gateway-eko ez da aplikatzen.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Laburtuaren numerazio sistema:** Leitu nahi duzu laburtuak edo zehaztasun numerazio sistema bat aukeratu duzu. Iragilariak laburtuak iragilariak bitartean erabiltzea ere aipatzen duzu, ez da zerbait konfiguratu behar. Hau zehaztasun numerazio sistema bat erabiltzea aukeratzen duzu, **iragilariaren iragilari numeroa** (Hau numeroa erabiliko da sistema-eko iragilari lehen iragilariaren numeroa. Iragilari berri bat lekuan egindenean berezko baten bat incrementatzen da. Aurreratuta aldatu eta saldu dezakezu laburtuaren zehaztasun numerioa zehat maila batean irekitzen) eta **iragilariaren iragilari prefiksoak** konfiguratu behar duzu.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Hau aurkitu (gateways) aurki eta:

Pagintua (page) berean konponbatu da payment gatewaysak (payment gateways) ezartu dituzte (setup). (**Ultimate Multisite > Settings > Payments**). **active payment gateways** (aktibo payment gateways) ir handi, lehen da begirri aurkitu da ir aurkitu: _Stripe_, _Stripe_ Checkout_, _PayPal_ eta _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Payment gateway baten (payment gateway batetan) dedeku (guide) da artikulu berean dago, zein ir ezartu da ir aurkitu da linksak ondore dagozkate.

Payment detailak ikusi eta mugitu (edit) ditzate:

![Payment edit interface](/img/admin/payment-edit.png)

Hau da payment edit pagaren (page) guztia ikuspena:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Hau da payment gateways ezartuaren (settings) guztia ikuspenak ere:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe gateway ezartzea**

**PayPal gateway ezartzea**** **

**Manual payment ezartzea**

Aurreratuta, _WooCommerce_, _GoCardless_ edo _Payfast_ ir payment gatewayek (payment gateways) gisa erabiliz (use), bere add-onak (add-ons) instalatu eta konponbatu behar duzu.

### WooCommerce add-on instalatzeko modu:

Ez da ezagutua (we understand) zein batzuk (some countries) ir Stripe eta PayPal ez dago, eta horiek Ultimate Multisite erabiltzaileei pluginaren erabilera murriztu edo ahaztu egiten dute. Orain, _WooCommerce_n integratzeko add-on bat gureak ematen dituzte, zein da plugin berezbi populara e-commerce (e-commerce) plugin bat. Mendialako desarrollak irkinak (integrate) payment gateways ezberdinetara ere add-ons dira. Horrek gurearekin erabilizteko payment gatewaysak (payment gateways) Ultimate Multisite billing systemarekin integratzeko aukera ematen duzu.

_**IMPORTANTE:** Ultimate Multisite: WooCommerce integrazioa eskatzen du WooCommerce-na aktibatu behar da zure web nagiaren edozein lekuan._

Lehenik, gaur egindua **Add-ons** (Aplikazioak) lapera dela jarraitu. Horra aurkitu dugu **Ultimate Multisite > Settings** (Konfigurazioa) irudietan. **Add-ons** (Aplikazioak) taldea begiratu behar duzu. **Check our Add-ons** (Aplikazioak jartzen) klik egin.

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar-eko Add-ons table-a, Check our Add-ons linkarekin -->

**Check our Add-ons** (Aplikazioak jartzen) klik egin ondoren, add-ons lapera dela jarraitu. Horretan Ultimate Multisite-ren guztia aplikazioak aurkituko duzu. **Ultimate Multisite: WooCommerce Integration** (Integrazioa) aplikazioaren klik egin.

![Ultimate Multisite add-ons lapera-da, WooCommerce Integration-a barne sortzen](/img/addons/addons-page.png)

Aplikazioaren detallak ikusten duen finestra bat aporatuko da. Hau **Install Now** (Aktibatu jarri) klik egin behar duzu.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on-en detaylar dialoga, Install Now botoia dagoena -->

Instalazioa amaitu ondoren, plugins lapera dela jarraituko da. Horretan, **Network Activate** (Aplikazioa aktibatu) klik egin eta WooCommerce aplikazioaren add-onak zure network-an aktibatu izango da.

<!-- Screenshot unavailable: Plugins lapera-da, WooCommerce Integration add-onarekin Network Activate linka -->

Aktibatzen ondoren, web-aldean WooCommerce plugin ez dago instalatuta eta aktibatuta jakin nahi duzu, lehiak ematen du.

<!-- Screenshot unavailable: Admin notice-a, administratorari WooCommerce plugin instalatu eta aktibatu dezakeko lehiak ematen -->

WooCommerce Integration add-onarekin gehiago informazio jartzeko, **hiezi hori klik egin**.

### GoCardless add-onaren instalazioa ondo jakinarazteko:

GoCardless add-onak instalatzeko gaitasunak WooCommerce add-onaren gaitasunarekin gertatzen dira. Add-ons zehalan jarraitu eta **Ultimate Multisite: GoCardless Gateway** add-onak irudiu.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Add-onaren finestraia irudira da. **Install Now** (Aurreratu instalazioa) klikatu.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Instalazioa amaitu ondoren, plugins zehalan jarraitu. Hiera, **Network Activate** (Aktivitatea network-ean aktibatu) klikatu eta _GoCardless_ add-onak network-ean aktibatu da.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ gatewayarekin zerren jakinarazteko, **horri artikuluak lekua**.

### Payfast add-onaren instalazioa onartzeko:

Add-ons zehalan jarraitu eta **Ultimate Multisite: Payfast Gateway** add-onak irudiu.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Add-onaren finestraia irudira da. **Install Now.** (Aurreratu instalazioa) klikatu.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Instalazioa amaitu ondoren, plugins zehalan jarraitu. Hiera, **Network Activate** (Aktivitatea network-ean aktibatu) klikatu eta _Payfast_ add-onak network-ean aktibatu da.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
