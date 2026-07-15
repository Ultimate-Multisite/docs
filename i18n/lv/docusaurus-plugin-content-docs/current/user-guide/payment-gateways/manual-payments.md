---
title: Manuālo maksājumu iestatīšana
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manuālo maksājumu iestatīšana (v2)

_**SVARĪGA PIEZĪME: Šis raksts attiecas uz Ultimate Multisite versiju 2.x.**_

Manuālie maksājumi ir veids, kā piedāvāt citas maksājumu metodes, ja jūsu lietotājiem nav pieejams **Stripe** vai **PayPal**. Tas var būt pārskaitījums vai bankas pārskaitījums, vai jebkura cita maksājumu metode, kas jūsu lietotājiem pieejama lokāli.

## Kā iespējot manuālos maksājumus {#how-to-enable-manual-payments}

Manuālā maksājuma iestatīšana ir ļoti vienkārša. Jums tikai jāiespējo tas maksājumu vārtejās un jāievada detalizētas instrukcijas par to, kā lietotājam jānosūta maksājums.

Vispirms dodieties uz **Ultimate Multisite > Iestatījumi > Maksājumi**. Zem **Maksājumu vārtejas** ieslēdziet **Manuālais**. Jūs redzēsiet, ka parādīsies **Maksājuma instrukcijas** lodziņš.

Pievienojiet šajā lodziņā informāciju, kas jūsu klientam būs nepieciešama maksājuma veikšanai. Piemēram, tie var būt jūsu bankas konta rekvizīti un jūsu e-pasts, lai klients varētu jums nosūtīt maksājuma apstiprinājumu.

![Manuālās maksājumu vārtejas slēdzis ar Maksājuma instrukcijas teksta lauku](/img/config/manual-gateway-expanded.png)

Šeit ir manuālās vārtejas iestatījumu saskarne:

![Manuālās vārtejas iestatījumi](/img/config/manual-gateway-settings.png)

Pēc iestatīšanas vienkārši noklikšķiniet uz **Saglabāt iestatījumus**, un viss ir gatavs. Kad lietotāji reģistrēsies jūsu tīklā, viņi redzēs ziņojumu, kurā teikts, ka viņi saņems jūsu instrukcijas pirkuma pabeigšanai.

![Reģistrācijas apstiprinājuma ziņojums, kas lietotājam norāda, ka viņš saņems maksājuma instrukcijas](/img/frontend/registration-manual-notice.png)

Un viņi arī saņems ziņojumu jūsu **Paldies** lapā ar jūsu maksājuma instrukcijām.

<!-- Ekrānuzņēmums nav pieejams: Paldies lapa, kurā pēc checkout redzamas maksājuma instrukcijas -->

## Manuālo maksājumu apstiprināšana {#confirming-manual-payments}

Lai apstiprinātu manuālo maksājumu, dodieties uz **Maksājumi** izvēlni kreisajā joslā. Tur varat redzēt visus maksājumus savā tīklā un to informāciju, tostarp to **statusu**. Manuālajam maksājumam vienmēr būs **Gaida** statuss, līdz jūs to manuāli mainīsiet.

![Maksājumu saraksts, kurā redzams gaidošs manuālais maksājums](/img/admin/payments-list.png)

Atveriet maksājuma lapu, noklikšķinot uz **atsauces koda**. Šajā lapā ir visa informācija par gaidošo maksājumu, piemēram, atsauces ID, produkti, laikspiedoli un cita informācija.

![Maksājuma informācijas lapa, kurā redzams atsauces kods, produkti un kopsummas](/img/admin/payment-edit.png)

Labajā kolonnā varat mainīt maksājuma statusu. Mainot to uz **Pabeigts** un **ieslēdzot opciju Aktivizēt dalību**, tiks iespējota jūsu klienta vietne, un viņa dalība būs aktīva.

![Maksājuma rediģēšanas lapa ar statusu Pabeigts un slēdzi Aktivizēt dalību](/img/admin/payment-activate-membership.png)
