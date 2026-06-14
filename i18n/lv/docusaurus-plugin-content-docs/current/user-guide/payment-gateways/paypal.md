---
title: PayPal iestatīšana
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal integrācijas iestatīšana (v2)

_**SVARĪTĀ NOTE: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Mēs varam aktivizēt līdz četrām maksājuma metodiem mūsu maksājumu iestatījumu lapā: Stripe, Stripe Checkout, PayPal un Manuāli. Šajā rakstā redzēsim, kā integrēties ar **PayPal**.

Līdzīgi kā Stripe, PayPal ir ļoti izmantots tiešsaistes maksājumiem, īpaši WordPress vietnēs. Šis raksts visbiežāk jums palīdz, kā izmantot PayPal kā maksājuma metodu, kas ir pieejams jūsu tīklā.

Piezīmi: Jums nepieciešams būt ar **PayPal Business kontu**, lai saņemtu API krediti, kas nepieciešami šai integrācijai.

## PayPal aktivizēšana savā tīklā

Lai activētu PayPal kā pieejamu maksājuma metodu savā tīklā, pārvietojies uz **Ultimate Multisite > Settings > Payments** (Iestatījumi > Maksājumi) tablu un atzīmējiet kops ziņojumu blakus PayPal.

![PayPal aktivizēšana aktīvajos maksājuma portālā](/img/config/settings-payment-gateways.png)

## Guida iestatīšanas wizardā izmantošanu

Ultimate Multisite 2.10.0 pievieno guidu PayPal iestatīšanas wizardu maksājuma portāla iestatījumiem. Pēc tam, kad aktivizēties ar PayPal, izmantojiet wizardi **Ultimate Multisite > Settings > Payments** (Iestatījumi > Maksājumi), lai izvēlotu, kā vēlaties savienot portālu un apstiprinātu, kas vēl ir nepieciešams krediti pirms saglabāšanas.

Wizardis atbalsta divas iestatīšanas ceļus:

* **Manuāla atkarības ievadīšana**: Izmantojiet šo ceļu, ja jums jau ir PayPal API atkarības (credentials), neir ir pieejams OAuth iestatījums jūsu kontam vai labāk vēlaties kopēt atkarības no PayPal. Ievadiet API Username, API Password un API Signature PayPal laukos, pēc tam saglabājiet maksājumu iestatījumus.
* **OAuth savienojuma vārti**: Izmantojiet šo ceļu tikai tad, ja OAuth opcija ir pieejama un aktivizēta jūsu instalācijai. Wizard parāda OAuth procesu aiz feature flagiem, tāpēc tīkli bez flags turpinās izmantot manuālās atkarības ievades laukus.

Ja neredzat OAuth opciju wizardā, pabeidiet manuālās atkarības ievades procesu štai zemāk. Gateway darba ar tiem pašiem PayPal Business API atkarībām kā iepriekšējās Ultimate Multisite 2.x izlaidumiem.

## PayPal API atkarību saņemšana

Kad PayPal būs aktivizēts kā maksājumu gateway, jums būs jāievada lauki par PayPal API **Username**, PayPal API **Password** un PayPal API **Signature**.

Tā var saņemt, logojoties savā PayPal [Live](https://www.paypal.com/home) vai [Sandbox](https://www.sandbox.paypal.com/home) kontā.

(Atcerieties, ka tu vari izmantot **sandbox režīmu** maksājumu pārbaudīšanai un redzēt, vai gateway ir pareizi iestatīts. Vienkārši ieslēdz atbilstošo sadaļu.)

![PayPal API atkarību lauki un sandbox režīma pārlaugs](/img/config/settings-payment-gateways.png)

Lai pieprasītu API Signature vai sertifikātu atkarības savai PayPal kontai:

  1. Atgriezieties uz savām [Kontu iestatījumiem](https://www.paypal.com/businessmanage/account/accountAccess).

  2. **API access** sadaļā noklikšķiniet uz **Update**.
![PayPal Konta iestatījumi ar API piekļuvi sadaļu](/img/config/settings-payment-gateways.png)

3. Ap **NVP/SOAP API integrācijai (Classic)**, noklikšķiniet uz **Manāt API atļaujas**.
![PayPal NVP/SOAP API integrācija Manāt API atļaujas](/img/config/settings-payment-gateways.png)

     * Ja jums jau ir izveidota API paraksts vai sertifikāts, jūs tiksiet novirzīti uz lapu, kurā varat atrast savas atļaujas.

     * _**Piezīme:** Ja jums tiek prasīts apstiprināt savu PayPal kontu, seko ekrāna instrukcijām._

  4. Izvēlieties **vienu** no šiem variantiem un noklikšķiniet uz **Piekrīt un sūtīt**.

     * **Lietotāja API paraksta pieprasīšana (Request API Signature)** – Izvēlieties, ja vēlaties autentikāciju ar API parakstu.

     * **Lietotāja API sertifikāta pieprasīšana (Request API Certificate)** – Izvēlieties, ja vēlaties autentikāciju ar API sertifikātu.

  5. PayPal veido jūsu API atļaujas šādi:
![PayPal izveidotas API atļaujas](/img/config/settings-payment-gateways.png)

     * **API paraksta atļaujas** ietver API lietotāja vārdu, API parvoju un parakstu, kas neekspirē. Šie vērtējumi pēc defaulta ir slēptie drošības nodrošināšanai. Klikšķiniet uz **Parādīt/Slēpt** (Show/Hide), lai tos ieslēgtu vai izslēgtu. Pabeigtusi, noklikšķiniet uz **Pabeigt**.

     * **API sertifikāta atļaujas** ietver API lietotāja vārdu, API parvoju un sertifikātu, kas automātiski ekspirē trīs gadu pēc noteikuma. Klikšķiniet uz **Izvēlēties sertifikātu (Download Certificate)**, lai saglabātu API sertifikātu uz jūsu galvenajām ierīcēm.

Tas ir viss, jūsu PayPal maksājumu integrācija ir pabeigta!

Ja jums ir jautājumi par PayPal iestatījumiem, varat apskatīt PayPal's [Palīdzības centru (Help Center)](https://www.paypal.com/br/smarthelp/home).
