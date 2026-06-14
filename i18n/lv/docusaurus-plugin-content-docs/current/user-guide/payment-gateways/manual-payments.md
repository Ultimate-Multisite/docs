---
title: Manuālo maksājumu iestatīšana
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manuālo maksājumu iestatīšana (v2)

_**SVIRTAS PIEZIŅAS: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Manuāli maksājumi ir veids, kā jums piedāvāt citus maksājuma līdzekļus, ja **Stripe** vai **PayPal** nav pieejami jūsu lietotājiem. Tas var būt bankas pār transfera vai jebkura citā maksājuma metode, kas ir pieejama jūsu lietotājiem vietē.

## Kā ielikt manuālos maksājumus

Manuālo maksājumu iestatīšana ir ļoti vienkārša. Jums pietiks ieslēgt to administrēt "Payment Gateways" (Maksājuma portali) sadaļā un ievietot detalizētus instrukcijas, kā lietotājam jāveic maksājums.

Pirms esošām, dodieties uz **Ultimate Multisite > Settings > Payments**. Zem "Payment Gateways" (Maksājuma portali) ieslēgt "Manual". Jūs redzēsiet, ka jums parādīsies "Payment Instructions" (Maksājuma instrukcijas) lauka.

Pievienoj šim laukam informāciju, kas jūsu klientam būs nepieciešama maksājumam. Tas var būt jūsu banka konta datus un e-pasta adresi, lai lietotājs var nosūtīt jums maksājuma apstiprinājumu, piemēram.

![Manuāla maksājuma portāla ieslēgšana ar teksta lauku instrukcijām](/img/config/manual-gateway-expanded.png)

Šeit ir manuālās portāla iestatījumu interfejs:

![Manuālās portālas iestatījumi](/img/config/manual-gateway-settings.png)

Pēc iestatīšanas vienkārši nospiediet "Save Settings" (Saglabāt iestatījumus), un tas ir pabeigts. Kad lietotāji reģistrējas jūsu tīklā, viņi redzēs ziņojumu, kas informēs tos par to, ka saņems savas instrukcijas maksājuma veicim.

![Reģistrācijas apstiprinājuma ziņojums, kas pateic lietotājam, ka saņems maksājuma instrukcijas](/img/frontend/registration-manual-notice.png)

Un viņi arī saņems ziņojumu jūsu **Thank You** (Paldies) lapā ar savām maksājuma instrukcijām.

<!-- Screenshot unavailable: Thank You lapa, kas redz maksājuma instrukcijas pēc izpildīšanas -->

## Manuālo maksājumu apstiprināšana

Lai apstiprinātu manuālu maksājumu, pārvietojies uz menu **Payments** (Maksājumi), kas atrodas kreisajā sarakstā. Tur jūs redziet visus maksājumus savā tīklā un viņu detaļas, tostarp viņu **statusu**. Manuālais maksājums vienmēr būs ar **Pending** (Pēterīgs) statusu līdz nepievērsiet to manuāli.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Ievadi maksājuma lapu, noklikšķinot uz **reference code** (references kodu). Šajā lapā jums ir visas detaļas par pēterīgo maksājumu, piemēram, references ID, produkti, laika zīmes un vēl daudz.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Celtajā stūrī var izveidot maksājuma statusu. Pāreizējot to par **Completed** (Pabeigts) un ieslēdzot opciju **Activate Membership** (Ieslēgt majstību), jūs atviegsu savu klienta vietni, un viņa majstība kļūs aktīva.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
