---
title: Sovereignios nuomojimo operacijos
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operacijos

Ultimate Multisite 1.2.0 pridėja operatyvinius įrankius su soveneriais tenančiais: subsaitomis, kurios veikia su savo duomenų bazės, sistemos rootis ir routingu kontekstu, atliekant matomai nuo tinklo administratoriaus.

Naudokite šią puslapį, jei valdyme skirtai izoliuotą klientų svetainę, atliekate atsiėmimus į atstovines svetainės arba migracijas, kurios pereina standartinę subsaıtę į sovenerianją infrastruktūrą.

## Ką keičia administratoriams

- **Stateless tenant autologin** — Tinklo administratoriai gali apsilankyti soveneriam tenantui nepasileidžiant į ilgalaikį bendruose sesijos būstį. SSO tokenas yra tiksliai apribotas, priklausomai nuo šaltinio (origin-pinned), saugomas prieš atveikimą ir apribotas trumpu eksirksio laikotarpiu.
- **Sovereign-aware routing** — Senos izoliuotose tinkluose ir soveneriais tenančiais puslapis yra tvarkomi per tą pačia svetainės routingu žymę, sumažinant pradėjimo (bootstrap) skirtumus tarp senų ir naujų izoliuotų įrenginių.
- **Verified migration state** — Migracijos patikrinimas patikrina vartotojo nustatymus, duomenų bazės rašytojų įgaliojimus, sąrašų išlaidos būseną ir senos santabolės nepakartojimą, kol tenantis bus laikomas užbaigtu.
- **Safer teardown** — Sovenerio atsimines (teardown) dabar sklandiai pašalina tenanto kredencijas, kad ištrintų tenantus ne palikt naujų duomenų bazės prieigos.

## Sovenerio tenanto apsilankymas

1. Atidarykite **Network Admin > Ultimate Multisite > Sites**.
2. Pasirinkite sovenerį tenantį.
3. Naudokite **Visit (SSO)**, jei tai galioja, o ne kopijuokite slaptažodžių ar kūrykite trumpus administratoriaus paskyras.

Apsilankymo procesas sukuria trumpalaikį pradinimo tokeną (login token) šiam tenantui ir registruoja SSO įvykį tenanto audito žurnale. Jei mygtukas nepasртка, patikrinkite, ar tenanto domenų pavadinimas tvarkomas pagal tikėtinas įrenginį ir ar tenantis gali pasiekti tinklo vidutinio (network-side) SSO endpointą.

## Atstovinės svetainės operacijų sąrašas

Prieš keičiant sovenerį arba atstovinę svetainę patikrinkite:

- Tarpas domainas nurodo į hostą, kuris turi tenantų failų sistemą.
- Tenantų duomenų bazos hostas atitina konfigūruotą host binding tą instalaciją.
- Migracijos patvirtinimo komandos sėkmingai vyko tenantui.
- Asincriniai migracijos sąrašai yra išlaikyti, kol neįvyks DNS ar eigomirintų pakeitimai.
- Tenantų administratoris vartotojas buvo nustatytas metu migracijos ir gali prisijungti per SSO.

## Sovereign tenantų ištrinkimas

Sovereign tenantą ištrinkimas yra destruktiškas. Pirmiausia patvirtinkio rezervuoja ir eksporto būseną, tada ištrinkite iš ekrano pasirinkimo (site management screen). 1.2.0 išlaikymo procesas pašalina tenantų duomenų bazos kredencijas kaip dalį valymo, tačiau administratoriais turėtų patvirtinti, kad laukiamai naudojant eksprtinius hosto panelus, hosto lygio duomenų bazos vartotojai ir katalogai yra ištrinkti.

:::warning
Neištrinkite sovereigną tenantą, kol migracijos patvirtinimas dar vyksta arba asincriniai push darbai yra sąrašu. Laikykite, kol patvirtinimas bus užbaigtas, kad išlaikymo procesas neįdėtum vadinčių laukiamų darbų kredencijų.
:::
