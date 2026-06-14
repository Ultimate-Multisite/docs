---
title: El. laiškų ir skaitmeninių pranešimų siuntimas
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# El. El. Skelbimai ir pranešimai (v2)

_**SVARBUOTAS PRANEŠIMAS: Šis straipsnis taikomas Ultimate Multisite versijai 2.x.**_

Ultimate Multisite yra su funkcija, kuri leidžia jums susisiekti su savo klientais siuntant el. paštu tikslintiems vartotojams arba grupėms vartotojų ir siųsti pranešimus į jų admin panelį, kad padarytumėte skelbti naujinimus.

## Pridėti admin pranešimus prie jūsų klientų panelių per Skelbimai (Broadcasts)

Naudojant Ultimate Multisite skelbimo funkciją, galite pridėti **admin pranešimus** į jūsų vartotojo subsite admin panelį.

Tai yra labai naudinga situacijose, kai jums reikia padaryti pranešimą, pavyzdžiui, apie sistemų priežiūros arba pasiūlyti naujus produktus ar paslaugas savo esami vartotojams. Tai taip atrodo admin pranešimas jūsų vartotojo panelioje.

<!-- Screenshot unavailable: Admin pranešimo skelbimas rodomas klientų subsite paneliu -->

Kad pradėti admin pranešimą, eikite į savo tinklo administratorio panelį ir meniu **Ultimate Multisite** pasirinkite **Broadcasts**.

![Skelbimų sąrašas Ultimate Multisite admin panelioje](/img/admin/broadcasts-list.png)

Galite taip pat redaguoti esami skelbimus:

![Skelbimo redaguojimo interfeys](/img/admin/broadcast-edit.png)

Iš šios puslapio spauskite mygtuką **Pridėti skelbimą** (Add Broadcast) viršuje.

Tai atidarybę "Add broadcast" modala, kurioje galite pasirinkti, kokio tipo skelbimo norite siųsti.

Pasirinkite **Message**, o tada spauskite mygtuką **Kiti žingsnis** (Next Step).

![Skelbimo pridėjimo modala su pasirinkta "Message" opsinija](/img/admin/broadcast-add-message.png)

Kiti langas užduosis nurodyti, kurį vartotoją (**Target customer**) ar kokį produktą (**Target product**) norite paspausti. Priežastai galite pasirinkti daugiau nei vieną vartotoją arba daugiau nei vieną produktą.

Kortaiškas ieškojant, ar vartotojo paskyrą ar produktą, turite pradėti įvesti žodį (žodžių grupę) lauke.

**Pranešimų tipų** lauke galite pasirinkti pranešimo spalvą. Tai pabrėžia jūsų pranešimo reikšmingumą.

Tada galite paspausti **Kiro žingsnį**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Kitas langas yra tas, kur galite pradėti sukurti savo pranešimą įvedant pavadinimą ir turinį/pranešimą, kurį norite siųsti vartotojams.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Pradėję pranešimą, galite paspausti mygtuką **Siųsti**.

Ir tai už viską. Administracinis pranešimas turi iškart atsirasti jūsų vartotojo paneliui (dashboard).

## Siųskite el. paštus savo klientams

Naudojant Ultimate Multisite siuntimo funkciją, galite siųsti el. paštą savo vartotojams. Jums yra pasirinkimas siųsti el. paštą tik specificiems vartotojams arba nuažvaloti specifiką vartotojų grupę, remiantis produktumu ar planu, kuriam jie yra subskribofluoti.

Norėdami pradėti el. pašto siuntimą, eikite į savo tinklo administratoriaus panelių ir po Ultimate Multisite meniu rasti pateiktą Siuntimo (Broadcast) opsinę.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Iš šios puslapio paspauskite viršuje mygtuką **Pridėti siuntimą**.

Tai atidaro modalų langą Pridėti siuntimą, kurio per galite pasirinkti, kokio tipo siuntimo norite siųsti. Pasirinkite **El. paštas**, o tada paspauskite mygtuką **Kiro žingsnį**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Kitas langas užklausys jūsų pasirinkimo: ar norite nuažvaloti **Tikslus klientai** (Target customer), ar **Tikslų produktą** (Target product). Priežastai, kad galite pasirinkti daugiau nei vieną vartotoją arba daugiau nei vieną produktą.

Norėdami ieškoti vartotojo paskyros ar produkto turite nurodyti žodžio laukelyje.

Kai pasirinksite savo tikslinę sąmonę, galite paspausti **Kiro stepą**.

![Tikslinių klientų ir tikslinio produkto pasirinkimas el. išsiandimo](/img/admin/broadcast-email-targets.png)

Kitras langas yra tai, kur galite pradėti saugoti savo el. laišką įvedant pavadinimą ir turinį/pranešimą, kurį norite siųsti vartotojams.

<!-- Screenshot unavailable: El. išsiandimo pavadinimas ir turinio redaktorius saugimo pase -->

Pas sukūrę savo pranešimą galite npausti mygtuką **Siųsti**.

Ir tai yra, kaip lengvai siųsti el. laišką jūsų vartotojams naudojant išsiandimo funkciją.

## Sisteminiai el. laiški

Sisteminiai el. laiški Ultimate Multisite yra tie **automatiniai pranešimai**, kuriuos sistema siųsta po tietų veiksmų, tokių kaip registracija, mokėjimas, domenų netyrinimas ir kitos. Šie el. laiškai galima redaguoti ar pakeisti iš Ultimate Multisite nustatymų. Tai taip pat sukuria funkciją, kuri leidžia atnaujinti ir importuoti esančias nustatymus iš kitos Ultimate Multisite įdiegimo.

### Atnaujinimas ir importavimas

Nauji Ultimate Multisite versijos, taip pat add-onai, laisvai gali registruoti naujus el. laiškus laiko retumai.

Norint užpresti konfliktus ir kitus problemas, **mes ne pridės naujų el. šablonų kaip Sisteminį el. laišką į jūsų įdiegimo automatiškai**, jei jie nėra svarbi tam tikro funkcijos tinkamui veikimui.

Tačiau super administratoriai ir agentai gali importuoti šiuo naujiau registruotus el. laiškus per importavimo įrankį. Šis procesas sukuria naują sisteminį el. laišką su naujo el. šablonų turiniu ir konfigūracija, leidžiant super administratorui atlikti bet kokias norimą pakeitimus arba laikti juos taikomus.

#### Kaip importuoti sisteminus el. laiški

Pergaukite Ultimate Multisite nustatyjimo puslapį ir eikite į **Emails** (El. laiškų) tvarka.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Tada, ant skelbimų skelbimų (sidebar) pasirinkimo mygtuko spauskite **Customize System Emails** (Prisidaugoti sisteminių el. laiškų).

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Sisteminių el. laiškų puslapyje viršuje pamatysite mygtuką **Reset & Import** (Atnaujinti ir importuoti). Spauskite jį, kad atidarytumėte modala langą „Importuoti ir atnaujinti“.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Tada galite paleisti Import Email options (Jautimas importuoti el. laiškus), kad pamatumėtumėte, kurie sisteminiai el. laiški yra pasaukti.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Sisteminių el. laiškų atnaujinimas (Resetingas)

Kai kurios kartos pamatysite, kad pakeitimai, kuriuos atlikote nurodytoje el. laiško šablono, jums nepatinka ir norite jį grąžinti į jo **naudojamą būseną**.

Šiems atvejais turite dvi variantus: galite tiesiog ištrinti sisteminį el. laišką ir importuoti jį atgal (naudinga viršup laidintus nurodytus instrukcijas) – tai ištrins siuntimo metrikas ir kitas dalykai, todėl šis būdas yra labiausiai nepageidamas.

Arba galite naudoti **Reset & Import tool** (Atnaujinimo ir importavimo įrankį), kad atnaujintumėte tą el. laiško šabloną.

Kad atnaujinti el. laiško šabloną, turite sekti viršup nurodytus žingsnius iki „Reset & Import tool“ (Atnaujinimo ir importavimo įrankis), o tada paleiskite **Reset** (Atnaujinimas) opsiją ir pasirinkite el. laiški, kuriuos norite grąžinti į jų pagrindinį turinį.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
