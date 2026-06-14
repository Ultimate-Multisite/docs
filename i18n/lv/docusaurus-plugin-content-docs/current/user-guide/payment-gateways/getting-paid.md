---
title: Saņemšana
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Izmaksas sa maksājumiem (v2)

_**SVIRTIE PIEZIŅAS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Ultimate Multisite ir iekļauts lojālās sistēmas un maksājumu sistēmas. Lai mūsu maksājumu sistēma darbotos, mēs integrējām visvairāk izmantotajiem e-komercijas maksājuma portali. Ultimate Multisite defaultie maksājuma portāli ir _Stripe_, _PayPal_ un Manāla maksājums (Manual Payment). Jūs varat arī izmantot _WooCommerce_, _GoCardless_ un _Payfast_ saistītos add-onus instalējot tos, lai saņemtu maksājumus.

## Pamatojoties uz iestatījumiem

Jūs varat konfigurēt jebkuru no šiem maksājuma portāliem Ultimate Multisite maksājumu iestatījumos. Jūs to atrodat, dodoties **Ultimate Multisite menu > Settings > Payments.**

![Maksājumu iestatījumu lapas attēls Ultimate Multisite, kas redz panelu "Payments"](/img/config/payments-settings-page.png)

Pirms, kad izveidotu savu maksājuma portāli, lūdzu, apskati pamatojoties uz maksājuma iestatījumiem, ko varat konfigurēt:

**Force auto-rene** **w:** Tas nodrošina, ka maksājums automātiski atkārtojās katras fakturēšanas cikla beigās, atkarībā no fakturēšanas biežuma, kuru lietotājs izvēlējās.

<!-- Screenshot unavailable: Force Auto-Renew slēga iestatījums Maksājumu iestatījumu lapas attēlā -->

Ultimate Multisite v2.13.0 pārbauda, vai aktīvajais portāls ir ar atkārtotu atjauno krediti (renewal credential), pirms saglabājas atkārtojamais lojālās sistēmas ar automātiskai atjauno iespējām. Atjauno kredīts var būt portāla abonentē, fakturēšanas līgums, saglabāts vaulta tokēns vai līdzvērtīga atkārtota maksājuma metode. Ja portāls ziņo, ka nav lietojams kredīts, Ultimate Multisite saglabā lojālās sistēmas, bet izslēdz automātiskai atjauno un ieraksta trūkstošas kredīta stāvokli, lai administrators vai atbalsta līnija varētu piekļūt lietotājam pirms atjauno datumu.

**Atļaut mēģinājumus bez maksājuma** **metode:** Ar šīs opcijas iespējams, ka jūsu klientam nepieciešams pievienot finanšu informāciju reģistrācijas laikā. Tas būs nepieciešams tikai tad, kad pabeigt mēģinājuma laiks.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Sūtīt fakturu pēc maksājuma apstiprinātā:** Šis nodrošina opciju, vai sūtīt fakturu pēc maksājuma vai ne. Piezīmi: lietotāji turēs pieprasīs savas maksājumu vēstures savā subsites dashboardā. Šī opcija nepiemērota manuālajam Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Faktūras numuru shēma:** Šeit var izvēlēties gan maksājuma referance kodu, gan sekventāla numuru shēmu. Ja jūs izvēlaties lietot maksājuma referances kodu faktūrām, jums nav nepieciešams neko konfigurēt. Ja jūs izvēlaties lietot sekventālu numuru shēmu, jums būs jākonfigūrujams **nākamais faktūras numurs** (Šis numurs tiks izmantots kā faktūras numurs nākamajai sistēmā generētās faktūras. Tas palielinās ar vienu katrā jaunas faktūras kreklēšanas laikā. Jūs varat to mainīt un saglabāt, lai atgriezotu faktūras sekventālu numuru konkrētajam vērtībām) un **faktūras numura priekšlikumu**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kur atrod atrast:

Jūs varat iestatīt maksājuma iekļaušanas (payment gateways) pa pašām vienas lapas ( **Ultimate Multisite > Settings > Payments**). Tieši zem **aktīvo maksājuma iekļaušanas** jūs varat redzēt: _Stripe_, _Stripe_ Checkout, _PayPal_ un _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Mums ir viena īpaša raksts katras maksājuma iekļaušanas par, kas jums palīdzēs iestatīt to, un to varat atrast šajos saites:

Jūs varat redzēt un rediģēt maksājumu detaļus:

![Payment edit interface](/img/admin/payment-edit.png)

Šeit ir pilna skats uz maksājuma rediģēšanas lapu:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Šeit ir arī pilna skats uz maksājumu iekļaušanas iestatījumiem:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe iekļaušanas iestatīšana**

**PayPal iekļaušanas iestatīšana**** **

**Manuāla maksājumu iestatīšana**

Tagad, ja vēlaties izmantot _WooCommerce_, _GoCardless_ vai _Payfast_ kā savu maksājuma iekļaušanu, jums būs jāinstalē un konfigurē to add-ons.

### Kā instalēt WooCommerce add-on:

Mums saprotams, ka _Stripe_ un _PayPal_ nav pieejami visos valstīs, kas ierobežo vai traucas Ultimate Multisite lietotājus efektīvi izmantot mūsu pluginu. Tāpēc mēs radījām add-on, lai integrētu _WooCommerce_, kas ir ļoti populārs e-komercijas plugin. Pārdevēji visā pasaulē radījuši add-ons, lai to integrētu dažādus maksājuma iekļaušanas. Mēs izmantojām šo iespēju, lai paplašinātu maksājuma iekļaušanas, ko varat izmantot Ultimate Multisite faktūras sistēmā.

**SVIRTOTIEKŠMAI:** Ultimate Multisite: WooCommerce integrācijai nepieciešams, lai WooCommerce būtu aktivizēts vismaz uz jūsu galvenajām vietnēm.

Vispirms, lūdzu, pārvietojies uz papildu komponentu (add-ons) lapu. Jūs to atrodat, dodoties **Ultimate Multisite > Settings**. Jums jāparādās **Add-ons** tabula. Nospressiet **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Pēc tam, kad nospressiet **Check our Add-ons**, jūs tiksiet novirzīts uz papildu komponentu lapu. Tur jūs varat atrast visus Ultimate Multisite papildu komponentes. Nospressiet **Ultimate Multisite: WooCommerce Integration** papildu komponenti.

![Add-ons page listing Ultimate Multisite add-ons including WooCommerce Integration](/img/addons/addons-page.png)

Parādīsies loga ar papildu komponentes detaļām. Vienkārši nospressiet **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

Pēc tam, kad instalācija ir pabeista, jūs tiksiet novirzīts uz plugins lapu. Tur vienkārši nospressiet **Network Activate**, un WooCommerce papildu komponentes būs aktivizēta jūsu tīklā.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Aktivizējot to, ja jums vēl nav instalēts un aktivizēts WooCommerce papildu komponentes vietnē, jūs saņemsiet atgādinājumu.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Lai uzzinātu vairāk par WooCommerce integrācijas papildu komponenti, **nospressiet šeit**.

### Kā instalēt GoCardless papildu komponenti:

Instalēšanas soļi `_GoCardless_` add-ona ir praktiski tieši tos pati, kas ir noteikti `_WooCommerce_` add-onam. Lūdzu, pārvietojies uz add-ons lapu un izvēlieties **Ultimate Multisite: GoCardless Gateway** add-onu.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Parādīsies add-ona loga. Nospiediet **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Pēc instalēšanas pabeigšanas jūs tiks pārvietots uz plugins lapu. Tur vienkārši nospiediet **Network Activate**, un `_GoCardless_` add-ons aktīvējies jūsu tīklā.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Lai uzzinātu, kā sākt ar `_GoCardless_` gatewayu, **las šo rakstu**.

### Kā instalēt Payfast add-onu:

Pārvietojieties uz add-ons lapu un izvēlieties **Ultimate Multisite: Payfast Gateway** add-onu.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Parādīsies add-ona loga. Nospiediet **Install Now**.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Pēc instalēšanas pabeigšanas jūs tiks pārvietots uz plugins lapu. Tur vienkārši nospiediet **Network Activate**, un `_Payfast_` add-ons aktīvējies jūsu tīklā.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
