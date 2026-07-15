---
title: Migrācija no V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Pārvietošanās no V1

## Ultimate Multisite ir pāriet no savas oriģinālās 1.x izlaidumu sērijas uz 2.x izlaidumu sēriju. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versija 2.0 un jaunāka ir pilna koda pārrakstīšana, kas nozīmē, ka vecajā versijā un jaunkajā nav vēl daudz dalu kopīgs. Tā kā tas ir tāds skaijis ietekme, upgrade no 1.x uz 2.x veidā jūsu dati būs jāpārvieto formatā, ko var saprast jaunākās versijas.

Lūgums, Ultimate Multisite 2.0+ **dabā ir iekļauts migrator**, kas spēj atveidot datus no vecās versijas un pārvietot tos uz jauno formātu. Šī pārvietošana notiek versija 2.0+ **Iestatījumu palīdzētā (Setup Wizard)** laikā.

Šajā pamatojā apmeklējam, kā migrator darbojas, ko darīt, ja ir kļūdas, un kā atrisināt problēmas, kas var radīties šajā procesā.

_**SVARĪGI: Pirms sākat upgrade no versijas 1.x uz versiju 2.0 pārliecinājieties, ka jums ir izveidots vietnes datubāzes kopjums (backup)**_

## Pirmais soļums {#first-steps}

Pirmais soļums ir lejupielādēt plugin .zip failu un instalēt versiju 2.0 savā tīkla administratora dashboardā.

Pēc tam, kad [instalējat un aktivizējiet versiju 2.0](../getting-started/installing-ultimate-multisite.md), sistēma automātiski pamanīs, ka jūsu Multisite darbojas ar vecajām versijām, un jūs redzēsiet šo ziņojumu pluginu lapas augšpusē.

_**PĀMĒNU: Ja jums ir instalēta Ultimate Multisite 1.x savā Multisite, jums būs iespēja aizstāt pluginu ar to versiju, ko jūs just lejupielādējāt. Lūdzu, turieties un klikšķiniet uz **Aizstāt pašreizējo ar uzlādētu**._

<!-- Iejaums nepieejams: Pluginas lapa, kas redz visējā iespēju aizstāt v1 ar uzlādētu v2 versiju -->

Nā nākamā lapājs jums tiks pateikts, kādas senas paplašinājumi (legacy add-ons) ir instalēti kopā ar versiju 1.x. Tajā būs instrukcijas par to, vai versija, ko jūs izmantojat, ir saderīga ar versiju 2.0 vai vai jums ir nepieciešams uzstādīt uppgrādēto paplašinājuma versiju pēc migrācijas.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kad būs gatavs turpināt, varat nosprst unies pogu **Apmeklēt instalēto programmu, lai pabeigtu uppgrādēšanu**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Tā pēc tam aizved jūs uz instalācijas wizard lapām ar dažiem labienīcības ziņojumiem. Jums pietiks nosprst unies **Sākt** (Get Started), lai pāriet uz nākamu lapu.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Pēc tam, kad nospirstiet **Sākt**, jūs tiks novirzīts uz Pre-install Checks_._ Šeit jums parādīsies jūsu sistēmas informācija un WordPress instalācija un teikt, vai tā atbilst **Ultimate Multisite prasībām**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Nākamais soļums ir ievadīt savu Ultimate Multisite licences kodu un aktivizēt paplašinājumu. Tas nodrošina, ka visi funkcijas, ieskaitot paplašinājumus, būs pieejami jūsu vietnē.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Pēc tam, kad ievadīja kodu, nospirstiet **Saskaņoties un aktivizēt** (Agree & Activate).

Licences aktivizācijas pēc tam var sākt patieku instalāciju, nospirstot **Instalēt** (Install) nākamajā lapā. Tas automātiski izveidzi nepieciešamos failus un datubāzi, kas ir nepieciešami versijai 2.0 darbīšanai.

## Tagšana {#now-the-migration}

Migratoram ir iekļauta drošības funkcija, kas pārbauda jūsu visus multisite, lai pārliecinātos, ka visi jūsu Ultimate Multisite dati var tikt tagāti bez jebkāda problēmas. Nospiediet pogu **Run Check**, lai sāktu procesu.

Pēc pārbaudes veikšanas jums būs divas iespējas: rezultāts var būt gan **ar** kļūda, gan **bez** kļūdas.

### Ar kļūdu {#with-error}

Ja saņem kļūdas ziņojumu, jums būs jāpaliek ar mūsu atbalsta komandai, lai viņi varētu jums palīdzēt labot kļūdu. Lūdzu, pārliecinieties, ka **pieejat kļūdas logu**, kad veicjat pieteikumu (ticket). Jūs varat lejupielādēt logu vai nospiediet saiti, kas norāda "sazināties ar mūsu atbalsta komandu". Tas atvērs palīdzības widgetu uz labās puses jūsu lapas, kuram jau ir iestatīti lauki, kas ietver kļūdas logus aprakstībā.

_**Tā kā sistēma atradīja kļūdu, jūs nevarat turpināt tagšanu versijai 2.0. Tad jūs varat atgriezties uz versiju 1.x, lai turpinātu jūsu tīkla veikšanu līdz kļūda tiek labota.**_

### Bez kļūdas {#without-error}

Ja sistēma neiztiek jebkāda kļūda, jūs redziet veiksmējuma ziņojumu un **Migrate** pogu zem apakšda, kas ļaus jums turpināt tagšanu. Šajā lapā jums tiks atcerēts veikt databāzes kopiju pirms turpināt, ko mēs ļoti ieteikām. Nospiediet **Migrate**, ja jums jau ir kopija.

Un tas ir viss!

Jūs varat turpināt izveidoto "Wizard" iestatījumus, lai atjauninātu savu logo un citus lietas vismazs tīklā, vai sākt navigēt ar menu un jaunu interfeisu Ultimate Multisite versija 2.0. Sākiet veikt kādu mazru izbraukumu!
