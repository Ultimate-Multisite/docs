---
title: Suverēni īrēju darbības
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operācijas

Ultimate Multisite 1.2.0 pievieno operacionālu rīku soverēniem īrniekiem: subsitēm, kas darbojas ar savu datubāzu, faila sistēmas galvu un routingu kontekstu, palīdzot to palikt redzami tīkla administratoram.

Izmantojiet šo lapu, ja vada izolētu klientu vietņu pārvaldību, attālumu subsitēm pāreju vai migrācijas, kas pārvieto standarta subsitiem soverēņās infrastruktūrai.

## Kāds ir mainījums administratoriem {#what-changes-for-administrators}

- **Stateless tenant autologin** — Tīkla administratori var apmeklēt soverēni īrnieku bez atkarības no ilgstoša dalīta sese stāvokļa (session state). SSO token ir saistīts konkrēti, oriģina noteikts, atkārtošanai aizsargots un ierobežots īsu laika terminam.
- **Sovereign-aware routing** — Vecie izolētas tīkli un soverēni īrnieki atrisinās ar vienu vietnes routingu ceļu, kas samazina starta atšķirības starp vecajiem un jauniem izolētiem instalācijām.
- **Verified migration state** — Migrācijas apstatu verifikācijas pārbaudes pārliecinās lietotāja sniegšanu, datubāzes rakstnieku iestatījumus, kvietu izpūres stāvokli un vecajiem tabulām trūkuma pirms īrnieka uzskatīšanas par pabeigtu.
- **Safer teardown** — Soverēņa pārtraukšana tagad tīri noņem īrnieka krediti, lai izslēgti īrnieki nepaliek vecas datubāzes piekļuves aizmugurē.

## Soverēna īrnieka apmeklēšana {#visiting-a-sovereign-tenant}

1. Atveriet **Network Admin > Ultimate Multisite > Sites**.
2. Izvēlieties soverēni īrnieku.
3. Izmantojiet **Visit (SSO)**, ja tas ir pieejams, vietā kopēšanas parotņu vai atkārtotas administratori kontu izveide.

Apmeklēšanas procesa veido īsu laika iekļuve tokeni šim īrniekam un ieraksta SSO notikumu īrnieka audita līnijā. Ja pogas neuzāk, pārbaudiet, vai īrnieka domēns atrisinās piepriekšnoteiktajai instalācijai un vai īrnieks var sasniegt tīkla puses SSO punkta (endpoint).

## Attāluma subsitiem operacionālo saraksta pārbaude {#remote-site-operations-checklist}

Pirms soverēna vai attāluma īrnieka mainīšanas, apstatu:

- A īpašuma domēns (tenant domain) punkti uz hosti, kas īpašumā ir īpašuma faili (filesystem).
- Īpašuma databāzes hosta atbilst konfiguriētajam host bindingam šai instalācijai.
- Migrācijas apstiprinājuma komandas veiksmīgi veicams īpašumam.
- Asincronās migrācijas saraksti (queues) tiek izpumpēti pirms DNS vai īpašuma mainām.
- Īpašuma admin lietotājs tika nodrošināts migrācijas laikā un var iekļūt ar SSO.

## Īpašumu domēnu izslēgšana (Deleting sovereign tenants) {#deleting-sovereign-tenants}

Īpašuma domēnu izslēgšana ir destruktīva. Pirms izslēgāt, apstiprini atsauces un izpūres (backup and export) statusu, pēc tam izslēgāt no vietnes pārvaldības ekrāna. Versija 1.2.0 teardown procesa izņem īpašuma databāzes krediti kā daļu no tīrīšanas, bet administratorji joprojām jāapstiprina, ka hosta līmeņa databāzes lietotāji un faili ir izslēgti, ja izmantojam ārējus hosta panelus.

:::warning
Neizslēgiet īpašumu domēnu, kamēr migrācijas apstiprinājums joprojām notiek vai asincronās push darbi (jobs) ir sarakstīti. Gaidiet apstiprinājuma pabeigšanu, lai teardown neizņemtu kredītus, kas nepieciešami gaidītajiem darbiem.
:::
