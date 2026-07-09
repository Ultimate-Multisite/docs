---
title: Rankinių mokėjimų nustatymas
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Rankinių mokėjimų nustatymas (v2) {#setting-up-manual-payments-v2}

_**SVARBI PASTABA: Šis straipsnis skirtas Ultimate Multisite 2.x versijai.**_

Rankiniai mokėjimai yra būdas pasiūlyti kitus mokėjimo metodus, jei **Stripe** arba **PayPal** nėra prieinami jūsų naudotojams. Tai gali būti pavedimas, banko pervedimas ar bet koks kitas mokėjimo metodas, vietiškai prieinamas jūsų naudotojams.

## Kaip įjungti rankinius mokėjimus {#how-to-enable-manual-payments}

Nustatyti rankinį mokėjimą labai paprasta. Jums tereikia jį įjungti mokėjimo sąsajose ir įrašyti išsamias instrukcijas, kaip naudotojas turėtų atsiųsti mokėjimą.

Pirmiausia eikite į **Ultimate Multisite > Nustatymai > Mokėjimai**. Po **Mokėjimo sąsajos** įjunkite **Rankinis**. Pamatysite, kad jums atsiras **Mokėjimo instrukcijos** laukelis.

Į šį laukelį įrašykite informaciją, kurios jūsų klientui reikės mokėjimui atlikti. Pavyzdžiui, tai gali būti jūsų banko sąskaitos duomenys ir jūsų el. paštas, kad klientas galėtų atsiųsti jums mokėjimo patvirtinimą.

![Rankinio mokėjimo sąsajos perjungiklis su Mokėjimo instrukcijų teksto sritimi](/img/config/manual-gateway-expanded.png)

Štai rankinės sąsajos nustatymų sąsaja:

![Rankinės sąsajos nustatymai](/img/config/manual-gateway-settings.png)

Viską nustatę, tiesiog spustelėkite **Išsaugoti nustatymus** ir viskas bus atlikta. Kai naudotojai registruosis jūsų tinkle, jie matys pranešimą, informuojantį, kad gaus jūsų instrukcijas pirkimui užbaigti.

![Registracijos patvirtinimo pranešimas, informuojantis naudotoją, kad jis gaus mokėjimo instrukcijas](/img/frontend/registration-manual-notice.png)

Jie taip pat gaus pranešimą jūsų **Ačiū** puslapyje su jūsų mokėjimo instrukcijomis.

<!-- Ekrano kopija nepasiekiama: Ačiū puslapis, kuriame po atsiskaitymo rodomos mokėjimo instrukcijos -->

## Rankinių mokėjimų patvirtinimas {#confirming-manual-payments}

Norėdami patvirtinti rankinį mokėjimą, eikite į **Mokėjimai** meniu kairėje juostoje. Ten galite matyti visus savo tinklo mokėjimus ir jų duomenis, įskaitant jų **būseną**. Rankinis mokėjimas visada turės **Laukiama** būseną, kol ją pakeisite rankiniu būdu.

![Mokėjimų sąrašas, kuriame rodomas laukiantis rankinis mokėjimas](/img/admin/payments-list.png)

Į mokėjimo puslapį pateksite spustelėję **nuorodos kodą**. Šiame puslapyje pateikiama visa laukiančio mokėjimo informacija, pvz., nuorodos ID, produktai, laiko žymos ir daugiau.

![Mokėjimo informacijos puslapis, kuriame rodomas nuorodos kodas, produktai ir sumos](/img/admin/payment-edit.png)

Dešiniajame stulpelyje galite pakeisti mokėjimo būseną. Pakeitus ją į **Užbaigta** ir **įjungus Aktyvuoti narystę** parinktį, jūsų kliento svetainė bus įjungta, o jo narystė taps aktyvi.

![Mokėjimo redagavimo puslapis, kuriame būsena nustatyta į Užbaigta ir įjungtas Aktyvuoti narystę perjungiklis](/img/admin/payment-activate-membership.png)
