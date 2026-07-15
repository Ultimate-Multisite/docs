---
title: Nustabdykite Saiklio konstanta Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise konstanto nustatymas Closteje

Kai kurie hostų tiekėjai užblokuoja wp-config.php saugumo priežasčių dėl saugos. Tai reiškia, kad Ultimate Multisite negali automatiškai redaguoti failą ir įdėti reikalingus konstantas, kad domenų netyrinimas ir kitos funkcijos tiktų veikti. Closte yra vienas tokių hostų.

Tačiau Closte siūlo būdą pridėti konstantas į wp-config.php saugiai. Jums visai reikia atlikti šiuos veiksmus:

## Clostejiame panele {#on-the-closte-dashboard}

Pirmiausia, [prisiimkite prie jos Closte paskyros](https://app.closte.com/), paspauskite meniu „Sites“, tada spauskite nuorodą „Dashboard“ ant toje svetainėje, kurui dabar dirbate:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Jums bus pateikta nurodytų naujų meniu elementų dešinėje skrinės pusėje. Naudokite šį meniu naršykite į svetainę **Settings** (Nustatymai):

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Tada, ant **Settings**, ieškokite tabą WP-Config ir tada laukelį „Additional wp-config.php content“ (Papildomas wp-config.php turinys) ant toje vadoje:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Instalavimo kontekste Ultimate Multisite jums reikės pridėti konstanta `sunrise` į šį laukelį. Visai reikia pridėti naują eilutę ir įdėti žemiau pateiktą eilutę. Po to spauskite mygtuką **Save All** (Išsaugoti viską).

define('SUNRISE', true);

Tai viena, ir visi jūsų nustatymai yra pasirengę. Grįžkite į Ultimate Multisite instalavimo žaizdinetę ir atnaujinkite puslapį, kad tęstumėte procesą.
