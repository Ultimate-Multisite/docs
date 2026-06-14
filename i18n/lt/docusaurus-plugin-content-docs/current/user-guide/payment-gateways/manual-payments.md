---
title: Manulinių mokėjimų nustatymas
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manuelios atsiuntimas (v2)

_**SVARINGU NUOTRAVIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Manualios atsiuntimai yra būdas pasiūlyti kitus mokėjimo būdus, jei jūsų vartotojams nėra įrengta **Stripe** ar **PayPal**. Tai gali būti bankinis arba wire transfer arba bet kokis kitas mokėjimo būdas, kuris yra jūsų vartotojams lokaliai.

## Kaip įjungti manualius atsiuntimus

Manualio atsiuntimo nustatymas yra labai lengras. Jums reikalinga tik ją įjungti pavadinimu "Payment Gateways" ir pateikti detalius instrukcijas, kaip vartotojas turi išsiųsti mokėjimą.

1. Eikite į **Ultimate Multisite > Settings > Payments**. Poje **Payment Gateways** paleiskite **Manual**. Prieš jums pasirodys **Payment Instructions** laukelis.
2. Įdėkite į šį laukelį informaciją, kurią jūsų klientui reikės mokėti. Tai gali būti jūsų banko dešiantų duomenys ir jūsų el. pašto adresas, kad vartotojas galėtų siųsti jums mokėjimo patvirtinimo, pavyzdžiui.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Štai interfeis manualių gateway nustatymų:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Nustatymas po įdėjimo atlikite vieną veiksmą **Save Settings**, ir tai padarytas. Kai vartotojai registruojasi jūsų tinkluose, jie pamatys pranešimą, kad gautų jūsų instrukcijas, kaip užbaigti pirkimą.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Jie gaus ir pranešimą ir jūsų **Thank You** puslapyje su jūsų mokėjimo instrukcijos.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manualių atsiuntimų patvirtinimas

Manulines mokėjimą patvirtinti, eikite į **Payments** meniu kairėje skelbimose. Ten jūs pakaite visus savo tinklo mokėjimų ir jų detales, įskaitant jų **statusą**. Manulinis mokėjimas bus laikytis **Pending** statuso kol jį manuliniu būdu nepasirinksite.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Įveskite mokėjimų puslapį paspaudę **referencijos kodą**. Šiame puslapyje turite visus detales apie laisvą mokėjimą, tokias kaip referencijos ID, produktai, laiko žymokai ir daugiau.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Dešinėje kolono galite pakeisti mokėjimo statusą. Pakeisdami jį į **Completed** ir paleidžiu „Activate Membership“ (Aktyvuoti nuskaitą), pateiksite savo klientų svetainę, o jų nuskaita bus aktyvi.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
