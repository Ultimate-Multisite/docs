---
title: Referenca nastavitev
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Referenca nastavitev

Ta stran spremlja nastavitve, ki vplivajo na vsakodnevno administracijo, in nedavne spremembe vedenja v Ultimate Multisite.

## Druge možnosti

Območje **Druge možnosti** je prikazano pod **Ultimate Multisite > Settings > Login & Registration**.

| Nastavitev | Opis |
|---|---|
| **Omogoči Jumper** | Prikaže orodje Jumper za hitro navigacijo v skrbniškem območju. Uporabite ga za neposreden skok na zaslone Ultimate Multisite, omrežne objekte in podprte skrbniške cilje. Onemogočite ga, če ne želite, da je ta bližnjica vidna. |

## Poročanje o napakah in telemetrija

Prejšnja nastavitev za privolitev v poročanje o napakah je bila odstranjena s strani z nastavitvami. Anonimna telemetrija je onemogočena in ni preklopnika v UI, ki bi jo omogočil.

Če vzdržujete interne priročnike za postopke ali posnetke zaslona za stran z nastavitvami, odstranite sklice na staro polje za privolitev v poročanje o napakah, da skrbniki ne bodo iskali nastavitve, ki ni več prisotna.

## Nastavitve uvoza/izvoza

Zavihek nastavitev **Uvoz/izvoz** opisuje, katere nastavitve nadzira, in neposredno povezuje na **Ultimate Multisite > Site Export** za arhive spletnih mest in omrežja. Zavihek nastavitev uporabite za konfiguracijo uvoza/izvoza, **Tools > Export & Import** uporabite za potek dela izvoza/uvoza za posamezno spletno mesto, orodje Site Export pa uporabite, ko potrebujete celoten arhiv Network Export.

## Opozorilo o stanju Domain Seller HostAfrica

Ko je dodatek Domain Seller povezan s HostAfrica, omrežni skrbniki zdaj vidijo opozorilo o nizkem stanju, ki ga je mogoče opustiti, kadar je stanje računa reseller prenizko za zanesljivo obdelavo registracij ali podaljšanj domen.

To obvestilo obravnavajte kot operativno opozorilo: dopolnite stanje reseller HostAfrica, preden sprejmete več plačanih registracij domen, nato se vrnite v nastavitve Domain Seller ali na zaslon za spremljanje domen, da potrdite, da se registracije in podaljšanja lahko nadaljujejo normalno.

## Nastavitve povezovalnika ponudnika AI

Nastavitve povezovalnika ponudnika AI zdaj izpostavljajo samo podprte nabore OAuth računov:

| Ponudnik | Potek nastavitve |
|---|---|
| **Anthropic Max** | Povežite enega ali več računov Anthropic Max z gumbom OAuth. Uporabite ročno nadomestno možnost OAuth, kadar brskalnik v peskovniku ne more samodejno dokončati preusmeritve. |
| **OpenAI ChatGPT/Codex** | Povežite račune ChatGPT prek istega poteka dela nabora OAuth. Operacije, ki jih podpira povezovalnik, lahko po povezavi računa uporabljajo klice orodij ChatGPT Codex. |
| **Google AI Pro** | Povežite račune Google AI Pro prek OAuth, nato osvežite povezovalnik, če se seznam računov ne posodobi takoj. |

Cursor Pro ni več podprt ponudnik. Odstranite stare interne posnetke zaslona, priročnike za postopke ali korake uvajanja, ki omenjajo nastavitvena polja Cursor Pro ali poti povezovalnika.

Pri dodajanju ali odstranjevanju računov ponudnikov vnesite veljaven e-poštni naslov za račun, ki se osvežuje ali briše, in shranite nastavitve ponudnika, preden preizkusite operacije, podprte s povezovalnikom.
