---
title: Klaida su Sunrise File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Klaida įdėdamas Sunrise failą

`sunrise.php` failas yra specialusis failas, kurį WordPress ieško, kol jis inicijuojasi (bootstraps). Kad WordPress galėtų atpažinti `sunrise.php` failą, jis turi būti pateiktas **wp-content** kataloge.

Kai įjungiate Ultimate Multisite ir perėjote pagal nustatymo vadovą, panašų kaip ta, kuri yra nuoseklyje, Ultimate Multisite bando nukopiuoti mūsų `sunrise.php` failą į wp-content katalogą.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Labai dažnai persegame sėkmingai nukopiuoti failą ir viskas veikia tinkamai. Tačiau, jei kažkas nėra tinkamai nustatytas (pvz., katalogų įvaizdis), galite susitikti su situacija, kai Ultimate Multisite negaudžia nukopiuoti failo.

Jei skaites klaidos pranešimą, kurį Ultimo jums pateikia, pamatysite, kad tai tiksliai atrodo štai: **Sunrise copy failed** (Sunrise kopijuoti nesukėlė).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Štai kaip to sužeisti: galite tiesiog nukopiuoti `sunrise.php` failą į wp-ultimo plugin katalogą ir įkleisti jį į savo wp-content katalogą. Po to atsisiųskite vadovos puslapį (wizard page) ir patikrinimai turėtų pasiekti sėkmingai.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Kiek tiek, tai gali reikalauti bendro patikrinimo jūsų katalogų įvaizdams, kad ateityje nebatytum problemų (ne tik su Ultimate Multisite, bet ir su kitais pluginais ir temais).

WordPress **Health Check tool** (į kurį galite pasiekti savo pagrindinėje svetainės **admin panel > Tools > Health Check**) gali informuoti, ar jūsų katalogų įvaizdis nustatytas tokioms reikšmėms, kurios gali sukelti problemų WordPress.

<!-- Įrašas nėra prieinamas: WordPress Health Check įrankis rodo dalys atėmimo sąlygų būseną -->
