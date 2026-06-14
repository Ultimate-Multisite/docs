---
title: Migracija iš V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Priešgrįžimas iš V1

## Ultimate Multisite pasieko naują 2.x versijų seriją, atsidurėdamas nuo originalios 1.x versijų.

Ultimate Multisite versija 2.0 ir vėliau yra visiškai pernaujintas kodas, o tai reiškia, kad tarp senos ir naujos versijos yra labai mažai dalys. Tai dėl to, kol atnaujinate nuo 1.x iki 2.x, jūsų duomenis turės būti pasiekti formatui, kurį nauja versija gali suprasti.

Ačiū, Ultimate Multisite 2.0+ **pasiame su migratoriu**, kuris yra įtrauktas į kodą ir gali atpažinti duomenis iš senos versijos ir konvertuoti juos į naują formatą. Ši migracija vyksta per **Setup Wizard** (Nustatymo vadinimo) versijo 2.0+.

Ši lektūra apibūdina, kaip veikia migratorius, ką daryti atvejais, kai vėliau sukelia problemų, ir kaip atnaujinti problemas, kurios gali pasirodyti šio procesu metu.

_**SVARBUOTAS: Prieš pradėdami naujinimo nuo versijos 1.x iki versijos 2.0 patikrinkite, kad turėtumėte saugų kopijos savo svetainės duomenų bazai**_

## Pirmoji veikla

Pirmoji veikla – atsisiųsti pluginio .zip failą ir įdėti versiją 2.0 į jūsų tinklo administratoriaus panelį.

Po [įdėjimui ir aktyvavimu versijos 2.0](../getting-started/installing-ultimate-multisite.md), sistema automatiškai pamatys, kad jūsų Multisite veikia seniaje versijoje, o jūs pamatys šią pranešimą pluginio puslapio viršuje.

_**PASTABA:** Jei turite Ultimate Multisite 1.x įdėtą savo Multisite, turėtumėte pasirinkimo pakeisti pluginį tą versija, kurią justas atsisiųsti. Prašome, paspauskite ir **Pakeisti laikiną su įkeltu**._

<!-- Nuotrauka nepateikta: Pluginio puslapio, rodykla pasirinkti pakeisti v1 su įkeltu v2 versija -->

Nosek próximai puslapis jums pateiks, kokias senus (legacy) add-onus turite su versija 1.x ir informaciją apie tai, ar jūsų naudojama versija yra suderinama su versija 2.0 arba ar jums reikia įdaryti naujesnę versiją add-onui po migracijos.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kai busysite pasirengę tęsti, galite paspausti mygtuką, kuriame rašoma **Pasirinkti įdaryti naujesnę versiją**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Tada jūs būsite nukreipti į instalacijos žaada puslapį su pranešimais. Jums visai reikalinga paspausti **Pradėti**, kad tęstumėte kitam puslapui.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Paspaudus **Pradėti**, jūsų nukreips į Pre-install Checks_._ Tai rodys jūsų sistemines informacijas ir WordPress instalaciją ir pasirodo, ar tai atitinka **Ultimate Multisite reikalavimus**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Kitas žingsnis – įvesti savo Ultimate Multisite licencijos raktą ir aktyvuoti pluginą. Tai užtikrins, kad visi funkcionalumas, įskaitant add-onus, bus jūsų svetainėje veikti.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Po įvedimo raktą paspauskite **Sutinku ir aktyvuoti**.

Po licencijos aktyvavimo galite pradėti pačių instalaciją, paspaudus **Instaluoja** kitame puslapyje. Tai automatiškai sukuria reikalingus failus ir duomenų bazę, kurioms reikia versija 2.0 veikti.

## Dabar, migracija

Migratorui yra įtraukta saugumo funkcija, kuri patikrina visą jūsų multisite, kad užtikrintų, kad visi jūsų Ultimate Multisite duomenys gali būti migruoti be problemų. Spauskite mygtuką **Run Check**, kad pradėtumėte procesą.

Po atlikimo tikrinimą turite dvi galimybes: rezultatas gali būti su klaida arba be klaidos.

### Su klaida

Jei gausite klaidos pranešimą, jums reikės susisiekti su mūsų palaikymo komand stiprų, kad jie galėtų jums padėti atnaujinti klaidą. Įsitikinkite, kad **pateiktumėte klaidos logą**, kai pateiksite įrašą (ticket). Jūs galite atsisiųsti logą arba paspausti nuorodą „contact our support team“. Tai atidaro pagalbos widgetę dešinėje pusėje jūsų puslapio, kurie pre-pališinti laukus, kuriuose yra klaidos logai kaip aprašyme.

_**Kadangi sistema rasti klaidos, jūs nevarėsite tęsti migracijos į versiją 2.0. Tada galite atsilaukti į versiją 1.x, kad grindėtumėte savo tinklą, kol klaida bus išspręsta.**_

### Be klaidos

Jei sistema ne rasti jokių klaidos, pamatysite sėkmės pranešimą ir **Migrate** mygtuką apačioje, kuris leidžia jums tęsti migraciją. Šio puslapio metu jums bus priveržta sukurti duomenų bazos sauginimą (backup) prieš pradėdami, o tai yra labai rekomenduojama. Spauskite **Migrate**, jei jau turite sauginimo kopijos.

And tai viskas!

Galima tęsenį, kad atnaujintumėte savo logotipą ir kitus dalykus savo tinklu naudojant Wizard setup, arba pradėkite naršyti per meniu ir naujausiu interfeisu jūsų Ultimate Multisite versijos 2.0. Pradėkite daryti šiek tiek saugiai!
