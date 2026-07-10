---
title: Kuyenda ku V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Kufunsa ku Kufunsa ku V1 {#migrating-from-v1}

## Ultimate Multisite yali kukhala ku family ya 1.x yali yakhala ku family ya 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite version 2.0 ndi chinthu chinali kukhala kwawo, zomwe zimeneza m'chiyembekezo (codebase), zomwezi kumukati ndi chifukwa kuti kuli ndi chifukwa chachikulu pakati pa vuto lili ndi vuto lili lili kale ndi lili lili lili lili lili kale. Choncho, pamene mukuwera ku 2.x kuchokera ku 1.x, mukucheza data wanu kuti muli ndi chifukwa chomwe zinthu zina zomwe vuto lili lili kale limveka.

Koma, Ultimate Multisite 2.0+ **kuli ndi migrator** yomwe yali yakhala m'chiyembekezo (core) komwezi kumwezi kuti yenera data kuchokera ku vuto lili kale ndikuyenera kukhala kwa format yomwe vuto lili lili kale limveka. Kufunsa lili lili kale lili ndi migrator ili m'chiyembekezo (Setup Wizard) la version 2.0+.

Lilo lili lili kale limeneza kuti migrator imeneza bwanji, chinthu chomwe mukucheza pamene kuli ndi kusowa, ndikufunsa kuteteza mavuto omwe angayenera kuwera m'malo.

_**CHONCHO: M'malo mwa kumukwera kuchokera ku version 1.x ku version 2.0, munapereka kuti muli ndi chitsogo (backup) la database ya wanu.**_

## Zinthu za M'malo {#first-steps}

M'malo woyamba ndi kukhala kwa ziphindo (plugin .zip file) ndikuyesa version 2.0 pa dashboard ya admin ya wanu.

Pambuyo pamene mukucheza ndi kuactivate version 2.0 [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md), system imeneza bwino kuti Multisite yanu imeneza pa legacy version ndikuyenera kuona iwo mavuto pa m'malo wopangidwa (plugin page).

_**CHONCHO: Ngati muli ndi Ultimate Multisite 1.x imeneza pa Multisite yanu, mukucheza chitsogo cha plugin ndi version yomwe mukucheza. Choncho, chonde, kukhala kwa click kuti **Replace current with uploaded**._

<!-- Screenshot is not available: Plugin page showing option to replace v1 with uploaded v2 version -->

M'maka yelelo yomwe yotambira m'kulu ku m'ndondomeko wopangidwa (legacy add-ons) womwe umene umesangira n'version 1.x. Kuti mufune kulimbikizile n'version 2.0, kuli ndi mafunso omwe otambira kuti m'bale version yomwe uti ndi yenera kuwoneka n'version 2.0 kapena kuti mufune kutambira add-on yomwe umesangira kuti muwoneke wosiyanasiyana (upgraded).

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Pansi pa m'ndondomeko wopangidwa, mufune kutambira button yomwe imene **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Kuti mupitire ku m'ndondomeko wopangidwa, kulimbikizile ndi maulendo omwe muli ndi. Kuti mufune kutambira **Get Started** kuti mutambire ku m'ndondomeko wosiyanasiyana (wizard) yomwe imene.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Panda mupitire **Get Started**, kuli ndi malo omwe otambira ku Pre-install Checks_._ Izi zimene kutambira kuti mufune kudziwa za M'ndondomeko wopangidwa (System Information) ndi kupanga WordPress, ndipo zimene kumene kuti zikukwanirira **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

M'malo m'moyo muli ndi kutambira nkhani ya Ultimate Multisite (license key) ndipo mutambire plugin. Izi zimene kuti zonse zinthu, kuphatikiza add-ons, zikune kupathulidwa pa site yanu.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Panda mupanga key yanu, tambani **Agree & Activate**.

Panda m'ndondomeko wopangidwa (license) kumene, mutambire kutambira kukhazikitsa (Install) pa m'ndondomeko wosiyanasiyana (next page). Izi zimene kuti zikukwanirira malo ndi database omwe muli m'malo kuti version 2.0 ikwaniritsidwe.

## Nkhondo, Kuti Kufotokozera (Now, the migration) {#now-the-migration}

Kuteteza (The migrator) uma ndi chithandizo cha kuchepa kukhala m'moyo walo. Kuti kuti kukhale m'moyo wanu wose wa Ultimate Multisite kulipeza kukonzedwa m'moyo walo, kulimbikitsa **Run Check** button.

Kati pa kupanga check, muli ndi milankhulo imodzi: ndipo mungapeza **with** error kapena **without** error.

### Na Mlungu (With Error) {#with-error}

Ngati muli ndi meseji ya mlungu, mukufunika kukhala ndi timilolo lathu kuti tikuthandizire kuchepa m'moyo walo. Kuti muli ndi chinthu cha kukonza m'moyo walo, makhala ndi **provide the error log** pamene mukupeza ticket. Mungapeza log kapena mungupereze link yomwe imayenera kuti muphatikane timilolo lathu. Idzafuna kukhala ndi help widget m'moyo wanu m'malo wa kuphatikana, ndipo zimene zikukonzedwa m'moyo walo zikupanga kwa inu zomwe zikuphatikana m'moyo walo.

_**Chifukwa kuti system ilipatsa mlungu, mutha kukhala ndi kuyamba kuchepa ku version 2.0. Muli ndi ulemu kuti mukuchepa ku version 1.x kuti muperekeza kukonzedwa kwa wanu mpaka m'moyo walo utaperekedwa.**_

### Osati Na Mlungu (Without Error) {#without-error}

Ngati system siipatsa mlungu, mudzakhala ndi meseji ya kupeza ndipo **Migrate** button m'malo wa chinthu cha kusuka kuti mukuchepa. Pamene muli pa pageyi imeneyi, mudzakhala mupatsa kuti mukhale ndi backup ya database yanu pansi pa kupita m'moyo walo, komwe tikufunsa kwambiri. Kuti mukuchepa ngati muli ndi backup, thandiza **Migrate**.

Ndipo izi ndi zomwe mukuchepa!

Unapwanda wamwamba, mwaya kuwo yomwamba ya Wizard setup kuti mupangulira logo yanu ndi zopambana zina pamwimba wanu kapena mupambana ndi kupanda ku menu ye Ultimate Multisite version 2.0 ndipo interface yake yatsopano. Kodi muli woyenera kukhala ndi mafunso?
