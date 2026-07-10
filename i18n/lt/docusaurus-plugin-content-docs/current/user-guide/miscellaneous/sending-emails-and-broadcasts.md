---
title: El. laiškų ir transliacijų siuntimas
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# El. laiškų ir transliacijų siuntimas (v2) {#sending-emails-and-broadcasts-v2}

_**SVARBI PASTABA: šis straipsnis skirtas Ultimate Multisite 2.x versijai.**_

Ultimate Multisite turi funkciją, kuri leis jums bendrauti su savo klientais siunčiant el. laišką tiksliniam naudotojui arba naudotojų grupei, taip pat siunčiant pranešimus jų administratoriaus Dashboard, kad būtų paskelbti pranešimai.

## Pridėkite administratoriaus pranešimus prie savo klientų Dashboard naudodami transliacijas {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Naudodami Ultimate Multisite transliacijų funkciją, galite pridėti **administratoriaus pranešimus** prie savo naudotojo antrinės svetainės administratoriaus Dashboard.

Tai itin naudinga, jei jums reikia paskelbti pranešimą, pavyzdžiui, apie sistemos priežiūrą arba naujų produktų ar paslaugų pasiūlymą esamiems naudotojams. Taip administratoriaus pranešimas atrodys jūsų naudotojo Dashboard.

<!-- Ekrano kopija nepasiekiama: administratoriaus pranešimo transliacija rodoma kliento antrinės svetainės Dashboard -->

Norėdami pradėti administratoriaus pranešimą, eikite į savo tinklo administratoriaus Dashboard ir po **Ultimate Multisite** meniu rasite parinktį **Broadcasts**.

![Broadcasts sąrašo puslapis Ultimate Multisite administratoriaus srityje](/img/admin/broadcasts-list.png)

Taip pat galite redaguoti esamas transliacijas:

![Transliacijos redagavimo sąsaja](/img/admin/broadcast-edit.png)

Šiame puslapyje viršuje spustelėkite mygtuką **Add Broadcast**.

Bus atidarytas Add broadcast modalinis langas, kuriame galėsite pasirinkti, kokio tipo transliaciją norite siųsti.

Pasirinkite **Message**, tada spustelėkite mygtuką **Next Step**.

![Add broadcast modalinis langas su pasirinkta Message parinktimi](/img/admin/broadcast-add-message.png)

Kitame lange jūsų bus paprašyta pasirinkti **Target customer** arba **Target product**. Atkreipkite dėmesį, kad galite pasirinkti daugiau nei vieną naudotoją arba daugiau nei vieną produktą.

Norėdami ieškoti naudotojo Account arba produkto, turite pradėti vesti raktažodį lauke.

Lauke **Message type** galite pasirinkti pranešimo spalvą. Tai pabrėš jūsų žinutės skubumą.

Tada galite spustelėti **Next Step**.

![Tikslinių klientų, tikslinio produkto ir žinutės tipo laukai Message transliacijai](/img/admin/broadcast-message-targets.png)

Kitame lange galite pradėti kurti savo žinutę įvesdami temą ir turinį / žinutę, kurią norite transliuoti naudotojams.

![Transliacijos žinutės temos ir turinio redaktorius kūrimo žingsnyje](/img/admin/broadcast-edit.png)

Sukūrę žinutę, galite paspausti mygtuką **Send**.

Ir viskas. Administratoriaus pranešimas turėtų iš karto pasirodyti jūsų naudotojo Dashboard.

## Siųskite el. laiškus savo klientams {#send-emails-to-your-customers}

Naudodami Ultimate Multisite transliacijų funkciją, galite siųsti el. laišką savo naudotojams. Turite galimybę siųsti el. laišką tik konkretiems naudotojams arba taikyti į konkrečią naudotojų grupę pagal produktą ar planą, kurį jie yra užsiprenumeravę.

Norėdami pradėti el. laiško transliaciją, eikite į savo tinklo administratoriaus Dashboard ir po Ultimate Multisite meniu rasite Broadcast parinktį.

![Broadcasts sąrašo puslapis, naudojamas kaip el. laiško transliacijos pradžios taškas](/img/admin/broadcasts-list.png)

Šiame puslapyje viršuje spustelėkite mygtuką **Add broadcast**.

Bus atidarytas Add broadcast modalinis langas, kuriame galėsite pasirinkti, kokio tipo transliaciją norite siųsti. Pasirinkite **Email**, tada spustelėkite mygtuką **Next Step**.

![Add broadcast modalinis langas su pasirinkta Email parinktimi](/img/admin/broadcast-add-email.png)

Kitame lange jūsų bus paprašyta pasirinkti **Target customer** arba **Target produc** t. Atkreipkite dėmesį, kad galite pasirinkti daugiau nei vieną naudotoją arba daugiau nei vieną produktą.

Norėdami ieškoti naudotojo Account arba produkto, turite pradėti vesti raktažodį lauke.

Kai tikslinė auditorija bus pasirinkta, galite spustelėti **Next Step**.

![Tikslinių klientų ir tikslinio produkto pasirinkimas Email transliacijai](/img/admin/broadcast-email-targets.png)

Kitame lange galite pradėti kurti savo el. laišką įvesdami temą ir turinį / žinutę, kurią norite siųsti naudotojams.

<!-- Ekrano kopija nepasiekiama: el. laiško transliacijos temos ir turinio redaktorius kūrimo žingsnyje -->

Sukūrę žinutę, galite paspausti mygtuką **Send**.

Štai kaip lengva siųsti el. laišką savo galutiniams naudotojams naudojant transliacijų funkciją.

## Sisteminiai el. laiškai {#system-emails}

Sisteminiai el. laiškai Ultimate Multisite yra tie **automatiniai pranešimai**, kuriuos sistema siunčia po tam tikrų veiksmų, tokių kaip registracija, mokėjimas, domeno susiejimas ir pan. Šiuos el. laiškus galima redaguoti arba keisti Ultimate Multisite nustatymuose. Taip pat yra funkcija, kuri leis jums atstatyti ir importuoti esamus nustatymus iš kitos Ultimate Multisite diegimo versijos.

### Atstatymas ir importavimas {#resetting--importing}

Naujos Ultimate Multisite versijos, taip pat priedai, kartkartėmis gali ir registruos naujus el. laiškus.

Kad išvengtume konfliktų ir kitų problemų, **automatiškai nepridėsime naujų el. laiškų šablonų kaip System Emails jūsų diegime**, nebent jie yra būtini tinkamam konkrečios funkcijos veikimui.

Tačiau super administratoriai ir agentai gali importuoti šiuos naujai užregistruotus el. laiškus naudodami importavimo įrankį. Šis procesas sukurs naują sisteminį el. laišką su naujo el. laiško šablono turiniu ir konfigūracija, leisdamas super administratoriui atlikti bet kokius norimus pakeitimus arba palikti juos tokius, kokie yra.

#### Kaip importuoti sisteminius el. laiškus {#how-to-import-system-emails}

Eikite į savo Ultimate Multisite Settings puslapį ir pereikite į **Emails** skirtuką.

![Emails skirtukas Ultimate Multisite nustatymuose, rodantis System Emails skiltį](/img/config/settings-emails-tab.png)

Tada šoninėje juostoje spustelėkite mygtuką **Customize System Emails**.

<!-- Ekrano kopija nepasiekiama: Customize System Emails mygtukas System Emails šoninės juostos skydelyje -->

System Emails puslapyje viršuje matysite **Reset & Import** veiksmo mygtuką. Spustelėjus šį mygtuką turėtų atsidaryti importavimo ir atstatymo modalinis langas.

![Reset arba Import veiksmo mygtukas System Emails administratoriaus puslapyje](/img/admin/system-emails-reset-import.png)

Tada galite perjungti Import Emails parinktis, kad pamatytumėte, kurie sisteminiai el. laiškai gali būti importuoti.

<!-- Ekrano kopija nepasiekiama: modalinis langas „Atstatyti ir importuoti“ su išskleistomis el. laiškų importavimo parinktimis -->

#### Sisteminių el. laiškų atstatymas {#reseting-system-emails}

Kitais atvejais suprasite, kad pakeitimai, kuriuos atlikote konkrečiame el. laiško šablone, jums nebetinka, ir norėsite atstatyti jį į **numatytąją būseną**.

Tokiais atvejais turite dvi parinktis: galite tiesiog ištrinti sisteminį el. laišką ir importuoti jį iš naujo (naudodami aukščiau pateiktas instrukcijas) – tai ištrins siuntimo metrikas ir kitus dalykus, todėl šis metodas yra mažiausiai pageidautinas.

Arba galite naudoti **Atstatymo ir importavimo įrankį**, kad atstatytumėte tą el. laiško šabloną.

Norėdami atstatyti el. laiško šabloną, galite atlikti aukščiau nurodytus veiksmus, kol pasieksite Atstatymo ir importavimo įrankį, tada įjungti parinktį **Atstatyti** ir pasirinkti el. laiškus, kuriuos norite atstatyti į jų numatytąjį turinį.

<!-- Ekrano kopija nepasiekiama: modalinis langas „Atstatyti ir importuoti“ su išskleistomis el. laiškų atstatymo parinktimis -->
