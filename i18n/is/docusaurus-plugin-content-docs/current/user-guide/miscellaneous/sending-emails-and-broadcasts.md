---
title: Að senda tölvupósta og fjöldasendingar
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Að senda tölvupósta og útsendingar (v2)

_**MIKILVÆG ATHUGASEMD: Þessi grein vísar til Ultimate Multisite útgáfu 2.x.**_

Ultimate Multisite kemur með eiginleika sem gerir þér kleift að hafa samskipti við viðskiptavini þína með því að senda tölvupóst til marknotanda eða hóps notenda, ásamt því að senda tilkynningar á admin Dashboard þeirra til að senda út tilkynningar

## Bættu admin-tilkynningum við Dashboard viðskiptavina þinna með útsendingum

Með því að nota útsendingareiginleika Ultimate Multisite geturðu bætt **admin-tilkynningum** við admin Dashboard undirsíðu notandans þíns.

Þetta er afar gagnlegt ef þú þarft að senda út tilkynningu, eins og um kerfisviðhald eða tilboð á nýjum vörum eða þjónustu til núverandi notenda þinna. Svona mun admin-tilkynningin líta út á Dashboard notandans þíns.

<!-- Skjáskot ekki tiltækt: Admin-tilkynningarútsending sýnd á Dashboard undirsíðu viðskiptavinar -->

Til að hefja admin-tilkynningu skaltu fara á netkerfis-admin Dashboard og undir **Ultimate Multisite** valmyndinni finnurðu valkostinn **Útsendingar**.

![Listasíða útsendinga í Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Þú getur líka breytt núverandi útsendingum:

![Viðmót til að breyta útsendingu](/img/admin/broadcast-edit.png)

Á þessari síðu skaltu smella á **Bæta við útsendingu** hnappinn efst.

Þetta opnar modal-gluggann Bæta við útsendingu, þar sem þú getur valið hvaða tegund útsendingar þú vilt senda.

Veldu **Skilaboð** og smelltu síðan á **Næsta skref** hnappinn.

![Bæta við útsendingu modal með valkostinum Skilaboð völdum](/img/admin/broadcast-add-message.png)

Næsti gluggi mun biðja þig um annaðhvort **Markviðskiptavin** eða **Markvöru**. Athugaðu að þú getur valið fleiri en einn notanda eða fleiri en eina vöru.

Til að leita annaðhvort að notandaaðgangi eða vöru þarftu að byrja að slá inn leitarorðið inni í reitnum.

Undir **Tegund skilaboða** reitnum geturðu valið lit tilkynningarinnar. Þetta mun leggja áherslu á hversu áríðandi skilaboðin þín eru.

Þú getur síðan smellt á **Næsta skref**.

![Reitir fyrir markviðskiptavini, markvöru og tegund skilaboða fyrir skilaboðaútsendingu](/img/admin/broadcast-message-targets.png)

Næsti gluggi er þar sem þú getur byrjað að semja skilaboðin þín með því að slá inn efnið og innihaldið/skilaboðin sem þú vilt senda út til notendanna.

![Efni útsendingarskilaboða og ritill fyrir innihald í semja-skrefinu](/img/admin/broadcast-edit.png)

Eftir að hafa búið til skilaboðin þín geturðu síðan ýtt á **Senda** hnappinn.

Og þar með er það komið. Admin-tilkynningin ætti strax að birtast á Dashboard notandans þíns.

## Sendu tölvupósta til viðskiptavina þinna

Með því að nota útsendingareiginleika Ultimate Multisite geturðu sent tölvupóst til notenda þinna. Þú hefur val um að senda tölvupóstinn aðeins til tiltekinna notenda eða miða á tiltekinn notendahóp út frá vörunni eða áskriftarleiðinni sem þeir eru áskrifendur að.

Til að hefja tölvupóstsútsendingu skaltu fara á netkerfis-admin Dashboard og undir Ultimate Multisite valmyndinni finnurðu valkostinn Útsending.

![Listasíða útsendinga notuð sem upphafspunktur fyrir tölvupóstsútsendingu](/img/admin/broadcasts-list.png)

Á þessari síðu skaltu smella á **Bæta við útsendingu** hnappinn efst.

Þetta opnar modal-gluggann Bæta við útsendingu, þar sem þú getur valið hvaða tegund útsendingar þú vilt senda. Veldu **Tölvupóstur** og smelltu síðan á **Næsta skref** hnappinn.

![Bæta við útsendingu modal með valkostinum Tölvupóstur völdum](/img/admin/broadcast-add-email.png)

Næsti gluggi mun biðja þig um annaðhvort **Markviðskiptavin** eða **Markvöru**. Athugaðu að þú getur valið fleiri en einn notanda eða fleiri en eina vöru.

Til að leita annaðhvort að notandaaðgangi eða vöru þarftu að byrja að slá inn leitarorðið inni í reitnum.

Þegar markhópurinn þinn hefur verið valinn geturðu smellt á **Næsta skref**.

![Val á markviðskiptavinum og markvöru fyrir tölvupóstsútsendingu](/img/admin/broadcast-email-targets.png)

Næsti gluggi er þar sem þú getur byrjað að semja tölvupóstinn þinn með því að slá inn efnið og innihaldið/skilaboðin sem þú vilt senda til notendanna.

<!-- Skjáskot ekki tiltækt: Efni tölvupóstsútsendingar og ritill fyrir innihald í semja-skrefinu -->

Eftir að hafa búið til skilaboðin þín geturðu ýtt á **Senda** hnappinn.

Og svona auðvelt er að senda tölvupóst til endanotenda þinna með útsendingareiginleikanum.

## Kerfistölvupóstar

Kerfistölvupóstar í Ultimate Multisite eru þær **sjálfvirku tilkynningar** sem kerfið sendir eftir ákveðnar aðgerðir eins og skráningu, greiðslu, lénsvarpun o.s.frv. Hægt er að breyta eða aðlaga þessa tölvupósta úr stillingum Ultimate Multisite. Það kemur einnig með eiginleika sem gerir þér kleift að endurstilla og flytja inn núverandi stillingar úr annarri Ultimate Multisite uppsetningu.

### Endurstilling og innflutningur

Nýjar Ultimate Multisite útgáfur, sem og viðbætur, geta og munu skrá nýja tölvupósta af og til.

Til að koma í veg fyrir árekstra og önnur vandamál **munum við ekki bæta nýju tölvupóstssniðmátunum sjálfkrafa við sem kerfistölvupóstum í uppsetningunni þinni** , nema þau séu nauðsynleg fyrir rétta virkni tiltekins eiginleika.

Hins vegar geta super admin og umboðsaðilar flutt inn þessa nýskráðu tölvupósta með innflutningstólinu. Það ferli mun búa til nýjan kerfistölvupóst með innihaldi og stillingum nýja tölvupóstssniðmátsins, sem gerir super admin kleift að gera hvaða breytingar sem hann vill eða halda þeim óbreyttum.

#### Hvernig á að flytja inn kerfistölvupósta

Farðu á stillingasíðu Ultimate Multisite og opnaðu **Tölvupóstar** flipann.

![Tölvupóstar flipi í stillingum Ultimate Multisite sem sýnir hlutann Kerfistölvupóstar](/img/config/settings-emails-tab.png)

Síðan, á hliðarstikunni, skaltu smella á **Sérsníða kerfistölvupósta** hnappinn.

<!-- Skjáskot ekki tiltækt: Sérsníða kerfistölvupósta hnappur á hliðarspjaldi Kerfistölvupósta -->

Á síðunni Kerfistölvupóstar sérðu aðgerðarhnappinn **Endurstilla og flytja inn** efst. Að smella á þann hnapp ætti að opna modal-gluggann fyrir innflutning og endurstillingu.

![Aðgerðarhnappur fyrir Endurstilla eða Flytja inn á admin-síðu Kerfistölvupósta](/img/admin/system-emails-reset-import.png)

Síðan geturðu kveikt eða slökkt á valkostunum Flytja inn tölvupósta til að sjá hvaða kerfistölvupóstar eru tiltækir til innflutnings.

<!-- Skjámynd ekki tiltæk: Reset and Import-gluggi með Import Emails-valkostina opna -->

#### Endurstilling kerfistölvupósta

Stundum áttarðu þig á því að breytingarnar sem þú gerðir á tilteknu tölvupóstsniðmáti virka ekki lengur fyrir þig og þú vilt endurstilla það í **sjálfgefna stöðu**.

Í slíkum tilfellum hefurðu tvo valkosti: þú getur einfaldlega eytt kerfistölvupóstinum og flutt hann inn aftur (með leiðbeiningunum hér að ofan) - sem mun eyða sendingartölfræði og öðru, sem gerir þessa aðferð síður æskilega.

Eða þú getur notað **Reset & Import-tólið** til að endurstilla það tölvupóstsniðmát.

Til að endurstilla tölvupóstsniðmát geturðu fylgt skrefunum hér að ofan þar til þú kemur að Reset & Import-tólinu og síðan kveikt á **Reset**-valkostinum og valið tölvupóstana sem þú vilt endurstilla aftur í sjálfgefið efni þeirra.

<!-- Skjámynd ekki tiltæk: Reset and Import-gluggi með Reset Emails-valkostina opna -->
