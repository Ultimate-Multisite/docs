---
title: Daudznomnieku integrācija
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Daudznomnieku integrācija

Ultimate Multisite: Multi-Tenancy 1.2.0 maina vairākus integrācijas saskares punktus suverēniem nomniekiem, migrācijas verifikācijai un nomnieku dzīves cikla automatizācijai.

## Nomnieka inicializācijas plūsma

Integrācijām, kas izveido vai modificē nomniekus, jāievēro šāda secība:

1. Atrisiniet nomnieka reģistra ierakstu un izolācijas modeli.
2. Izveidojiet vai pārbaudiet nomnieka datubāzes rakstītāju.
3. Inicializējiet nomnieka shēmu.
4. Nodrošiniet nomnieka lietotājus.
5. Reģistrējiet nomnieka maršrutēšanu un failu sistēmas ceļus.
6. Pirms nomnieka publiskošanas palaidiet migrācijas verifikāciju.

Nepieņemiet, ka suverēns nomnieks var atkārtoti izmantot tīkla datubāzes savienojumu. Izmantojiet nomnieka reģistru un rakstītāja abstrakcijas, ko nodrošina papildinājums.

## SSO un REST āķi

Bezstāvokļa nomnieka automātiskā pieteikšanās izmanto īslaicīgus tokenus ar nolūka prasību, JTI atkārtotas izmantošanas aizsardzību, derīguma termiņa ierobežojumu un izcelsmes piesaisti. Integrācijām, kas pievieno pieteikšanās pogas vai attālinātas pārvaldības saites, jāģenerē nomnieka apmeklējumi, izmantojot atbalstīto SSO plūsmu, nevis tieši veidojot nomnieka pieteikšanās URL.

Tīkla puses API audita notikumi un dienas kopsavilkumi ir pieejami suverēno nomnieku vārtejām. Izmantojiet šos žurnālus, atkļūdojot ārējas sistēmas, kas izsauc nomnieka dzīves cikla endpointus.

## Suverēna klienta darbību URL

Ultimate Multisite v2.13.0 maršrutē suverēna nomnieka klienta darbības atpakaļ uz galveno vietni Account, checkout, norēķinu, rēķinu, vietnes, veidnes maiņas un domēna kartēšanas plūsmām. Integrācijām, kas attēlo nomnieka puses pārvaldības saites, šīs darbības jānovirza uz galvenās vietnes klienta paneli un jāiekļauj validēts atgriešanās mērķis, ja lietotājam pēc darbības pabeigšanas jāspēj pārvietoties atpakaļ uz nomnieku.

Izmantojiet pamata SSO ietvaru starpdomēnu pārvaldības saitēm:

```php
$url = wu_with_sso($main_site_customer_url);
```

Ģenerētais URL joprojām ir filtrējams caur `wu_sso_url`, kas saņem SSO URL, pašreizējo lietotāju, mērķa vietnes ID un novirzīšanas kontekstu. Papildinājumi var izmantot šo filtru, lai pievienotu pakalpojumu sniedzējam specifisku kontekstu vai aizstātu broker URL, vienlaikus saglabājot Ultimate Multisite tokena validāciju.

Nedublējiet dalības, rēķinu, norēķinu adreses, veidņu vai domēna pārvaldības stāvokli suverēnā nomnieka iekšienē. Uztveriet nomnieka Dashboard kā palaidēju un galvenās vietnes klienta paneli kā pārvaldīto darbību patieso datu avotu.

## Migrācijas verifikācija

Pēc tam, kad migrācija vai dzīves cikla integrācija maina nomnieka datus, palaidiet verifikācijas vārtus:

- `wp tenant verify-no-legacy --site=<site-id>` apstiprina, ka nomnieks vairs nav atkarīgs no mantotajiem tīkla puses ceļiem.
- `wp tenant verify-sovereign-push --site=<site-id>` apstiprina, ka suverēnie push darbi var tikt apstrādāti un iztukšoti.

Integrācijām neveiksmīga verifikācija jāuzskata par izvietošanas bloķētāju un jāizvairās atzīmēt nomnieku kā aktīvu, līdz kļūme ir atrisināta.

## Nomnieka dzēšana

Dzēšanas plūsmām jāizsauc papildinājuma nojaukšanas ceļš, lai nomnieka datubāzes akreditācijas dati tiktu notīrīti. Ārējas integrācijas var noņemt pakalpojumu sniedzēja resursus pēc veiksmīgas nojaukšanas, bet nedrīkst dzēst resursdatora datubāzes vai mapes, kamēr verifikācija vai asinhronie push darbi vēl darbojas.

## Novecojis datubāzes maršrutētājs

Mantotais `Database_Router` ir aizstāts ar novecošanas aizstājēju. Jaunām integrācijām nomnieki jāatrisina, izmantojot pašreizējo vietnes maršrutētāju un nomnieku reģistra API, nevis paļaujoties uz veco maršrutētāja klasi.
