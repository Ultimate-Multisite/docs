---
title: Nastavitev ročnih plačil
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Nastavitev ročnih plačil (v2)

_**POMEMBNA OPOMBA: Ta članek se nanaša na Ultimate Multisite različico 2.x.**_

Ročna plačila so način, da ponudite druge plačilne metode, če **Stripe** ali **PayPal** nista na voljo vašim uporabnikom. To je lahko nakazilo ali bančno nakazilo ali katera koli druga plačilna metoda, ki je vašim uporabnikom na voljo lokalno.

## Kako omogočiti ročna plačila

Nastavitev ročnega plačila je zelo preprosta. Omogočiti ga morate le med plačilnimi prehodi in vnesti podrobna navodila, kako naj uporabnik pošlje plačilo.

Najprej pojdite na **Ultimate Multisite > Nastavitve > Plačila**. Pod **Plačilni prehodi** vklopite **Ročno**. Videli boste, da se bo prikazalo polje **Navodila za plačilo**.

V to polje dodajte informacije, ki jih bo vaša stranka potrebovala za izvedbo plačila. To so lahko na primer podatki o vašem bančnem računu in vaš e-poštni naslov, da vam lahko stranka pošlje potrdilo o plačilu.

![Preklop ročnega plačilnega prehoda z besedilnim poljem Navodila za plačilo](/img/config/manual-gateway-expanded.png)

Tukaj je vmesnik nastavitev ročnega prehoda:

![Nastavitve ročnega prehoda](/img/config/manual-gateway-settings.png)

Ko ga nastavite, samo kliknite **Shrani nastavitve** in končano je. Ko se uporabniki registrirajo v vaše omrežje, bodo videli sporočilo, da bodo prejeli vaša navodila za dokončanje nakupa.

![Potrditveno sporočilo ob registraciji, ki uporabniku pove, da bo prejel navodila za plačilo](/img/frontend/registration-manual-notice.png)

Prav tako bodo na vaši strani **Hvala** prejeli sporočilo z vašimi navodili za plačilo.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Potrjevanje ročnih plačil

Če želite potrditi ročno plačilo, pojdite v meni **Plačila** v levi vrstici. Tam lahko vidite vsa plačila v svojem omrežju in njihove podrobnosti, vključno z njihovim **stanjem**. Ročno plačilo bo vedno imelo stanje **V teku**, dokler ga ročno ne spremenite.

![Seznam plačil, ki prikazuje ročno plačilo v teku](/img/admin/payments-list.png)

Na stran plačila vstopite tako, da kliknete **referenčno kodo**. Na tej strani imate vse podrobnosti plačila v teku, kot so referenčni ID, izdelki, časovni žigi in drugo.

![Stran s podrobnostmi plačila, ki prikazuje referenčno kodo, izdelke in skupne zneske](/img/admin/payment-edit.png)

V desnem stolpcu lahko spremenite stanje plačila. Če ga spremenite v **Dokončano** in **vklopite možnost Aktiviraj članstvo**, boste omogočili spletno mesto svoje stranke in njeno članstvo bo aktivno.

![Stran za urejanje plačila s stanjem nastavljenim na Dokončano in preklopom Aktiviraj članstvo](/img/admin/payment-activate-membership.png)
