---
title: Registracijos procesas
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registracijos procesas (v2)

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Visi vartotojai gali registruotis į jūsų tinklą skirtingais būdais. Jie gali naudoti jūsų registracijos formą arba pasidalinamos nuorodą pre-išpasirštu planui. Šiuo metu pateiksime, kaip jūsų klientai gali registruotis jūsų tinklyje naudojant turimus būdus ir ką sužysti po registracijos įvykimo jūsų tinklyje.

## Registracijos formos naudojimas: {#using-the-registration-form}

Tai yra standartinis registracijos procesas. Jūs kuriate registracijos puslapį su **checkout forma** (pirkimo/registracijos forma), ir tai bus vieta, kur vartotojai eina registruotis jūsų tinklyje ir užsiprenasti planą. Galite turėti kelis registracijos puslapis, kiekviena su skirta skirtinga registracijos forma, jei norite.

Defaultiame puslapis registracijai yra [_**jūsųdomenas.com/register**_](http://yourdomain.com/register), bet jį galite pakeisti bet kuriuo metu **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Kai vartotojas pasieks jūsų registracijos puslapį (paprastai paspaudus mygtuką **Sign in** arba **Buy now**), jis pamatys jūsų registracijos formą.

![Registracijos forma pateikiama registracijos puslapyje](/img/frontend/registration-form.png)

Štai pavyzdys, kaip atrodo checkout forma frontendui:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Visi jie turi padaryti visus privalomus laukus – el. pašto adresą, vartotojo vardą, slaptažodį ir kitus... – ir mokėti už planą arba patvirtinti savo el. pašto adresą, jei registruojasi nemokamais planui ar mokamais planui su išbandymo laikotarpiu be mokėjimo informacijos.

„Ačiū“ puslapyje jie pamatys pranešimą, skirantį juos įvertinti, ar reikia patvirtinti savo el. pašto adresą arba jei jūsų svetainė jau yra aktyviama ir galite ją pradėti naudoti.

![Ačiūties puslapis registracijos po registracijos](/img/frontend/registration-thank-you.png)

Jei reikalinga el. pašto adresų patvirtinimas, vartotojai turės eiti į savo el. pašto dėžutę ir paspausti patvirtinimo nuorodą. Jūsų svetainė nebus aktyvuota, jei jūsų el. pašto adresas nebus patvirtintas.

Jei jie suregistoje mokamyje plane ar el. pašto patvirtinimas nėra privalomas jūsų tinkluose, jų svetainė bus aktyvuota ties po kasamos užsakymo ir jiems bus pateikta nuoroda priscrieti į savo dashboardą.

![Svetainė aktyvuota su nuorodą į dashboardo priscrieti](/img/frontend/site-activated.png)

## Shareable Link naudojimas: {#using-a-shareable-link}

Registracijos procesas naudojant shareable link yra pagrindinis tas pats kaip registracijos forma, vienintelis skirtumas to, kad naudojant shareable link, jūsų klientai galės prekę ar svetainės šablono iš anksto pasirinkti kasamos užsakymo formoje (pateikta skyriui Pre-selecting products and templates via URL parameters) arba galbūt pridėti kupono kodą (pateikta skyriui Using URL Parameters).

Registracijos procesas bus tas pats: jie turės įvesti savo vardą, vartotojo vardą, el. pašto adresą, svetainės pavadinimą ir pavadinimą, o plan ar svetainės šablonas jau bus iš anksto pasirinktas jums.

### Registracija naudojant manualias mokėjimą: {#registering-using-manual-payments}

Jei jūs ne norite naudoti PayPal, Stripe ar kitą mokėjimo įgaitą, kurį siūlo Ultimate Multisite arba jo papildomai integracijos, galite naudoti manualias mokėjimą jūsų klientams. Šiu būdu galite pateikti jiems paskolos skaičių, kuriuos jie bus mokėti savo mėgstamajam mokėjimo procesoriui po to, kai suregistoje jūsų tinkluose.

Registracijos procesas bus tiksliai tas pats kaip aukščiau, bet registracijos puslapyje jūsų klientai pamatys pranešimą, kad jie gaus el. pašto su toliau nurodytomis instrukcijomis mokėjimo užbaigimo.

![Manual payment message during registration](/img/frontend/registration-manual-notice.png)

Ir registracijos paba, jie pateikiami mokėjimo instrukcijos, kurias jūs nustavote (ir jautosi apie tai el. paštu).

![Payment instructions shown after registration](/img/frontend/registration-payment-instructions.png)

Mokėjimo instrukcijas galite pakeisti **Ultimate Multisite > Settings > Payments** puslapyje, paleidžiant „Manual“ mokėjimo opsifikaciją:

![Manual payment toggle with payment instructions field](/img/config/manual-gateway-settings.png)

Kai jūsų klientas atliks manualį mokėjimą ir išsiųs jums patvirtinimą, turite **manuliai patvirtinti mokėjimą**, kad aktyvuotumė klientų nuskaitos ir svetainės.

Reikia ieškti „Ultimate Multisite > Payments“ puslapyje ir rasti klientų mokėjimą. Jis vis dar rodys statusą **Pending** (Pateikiamas).

![Payments list with pending manual payment](/img/admin/payments-list.png)

Spauskite mokėjimo numerį, ir privalosite pakeisti jo statusą į **Completed** (Atsisakytas).

![Payment details page](/img/admin/payment-edit.png)

![Changing payment status to Completed](/img/admin/payment-status-completed.png)

Pakeisdami statusą į **Completed**, pamatysite pranešimą „Activate membership“ (Aktyvuoti nuskaitą). Paleiskite šią opsifikaciją **on** (palikite įjungtą), kad aktyvuotumėte nuskaitą ir svetainę, susijusias su šiuo klientu. Vadoje spauskite „Save Payment“ (Išsaugoti mokėjimą).

![Activate membership toggle and Save Payment button](/img/admin/payment-activate-membership.png)

Jūsų klientas turės dabar galėti pasiekti dashboardą ir visus funkcijas, kurioms jis susirinkęs.
