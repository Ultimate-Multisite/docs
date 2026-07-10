---
title: Osnovni koncepti
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Osnovni koncepti {#basic-concepts}

Za novega uporabnika WordPress Multisite in tisto, ki se le začne uporablati Ultimate Multisite, je na prvi pogled veliko novih besed in fraz. Učenje teh je pomembna naloga, ker boste morali razumeti platformo in kako ona deluje kot celotno.

V tem članku bomo poskušali definirati in pojasniti nekaj ključnih konceptov v WordPressu. Nekateri so bolj relevantni za uporabnike, drugi za razvijalce, a nekateri za oboje.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** je vrsta instalacije WordPressa, ki vam omogoča ustvarjanje in upravljanje mreže več spletnih strani iz ene WordPress dashboard-a. Lahko upravljate vse, vključno z številom strani, funkcijami, temami in vsemi vsemi vsemi vsemi vsemimi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi vsemi

_wp_1_options_ \- tab splošče za prvo podpoddelo

_wp_2_options_ \- tab splošče za drugo podpoddelo

## Gostilni ponudnik (Hosting provider) {#network}

Gostilni ponudnik je podjetje, ki omogoča podjetjem in osebam, da svoje spletne strani ponudijo preko World Wide Web. Storitev, ki jih ponujajo gostilni ponudniki, se razlikujejo, vendar običajno vključujejo dizajn spletnih strani, prostor za shranjevanje na hostu in povezljivost z Internetom.

## Domen (Domain) {#database}

Domen je naslov, ki ga uporabljajo ljudje, da bi obiskali vašo stran. Povezuje preglednik za spletno mesto s tem, kje naj iščejo vašo stran. Kot je ulicna naslov, domen je način, kako ljudje obiskujeta vašo spletno mesto na spletu. In kot imate plakat pred svojo trgovino. Če želite obiskati našo spletno stran, boste morali vpisati naš internetni naslov v adresu preglednika, ki je [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kjer je [**ultimatemultisite.com**](http://ultimatemultisite.com) domen.

## Poddomen (Subdomain) {#hosting-provider}

Poddomen je vrsta hierarhije spletnih strani pod glavnim domenom, vendar namesto uporabe folderjev za organizacijo vsebine na spletni strani, dobiva quasi lastno spletno mesto. Predstavljamo ga kot [**https://site1.domain.com/**](https://site1.domain.com/), kjer je _site1_ ime poddomena in [_domain.com_](http://domain.com) glavni domen.

## Poddirektorij (Subdirectory) {#domain}

Poddirektorij je vrsta hierarhije spletnih strani pod osnovnim domenom, ki uporablja foldere za organizacijo vsebine na spletni strani. Poddirektorij je isti kot podfolder in imena se lahko uporabljajo enako. Predstavljamo ga kot [**https://domain.com/site1**](https://domain.com/site1), kjer je _site1_ ime poddirektorija in [_domain.com_](http://domain.com) glavni domen.

## Podpoddelo (Subsite) {#subdomain}

Subsite je poddružina stran, ki jo ustvarjate v omrežju Multisite. Lahko lahko obstaja kot **subdomena** ali **pododrednik**, odvisno od tega kako je konfigurirano vaše WordPress Multisite instalacijo.

## Super Admin {#subdirectory}

WordPress Super Admin je uporabniška uloga z popolnimi možnostmi za upravljanje vseh podstran na omrežju Multisite. Za uporabnike Multisite je to **najvišji nivo dostopa**, ki ga lahko ponudite svoji WordPress instalaciji.

## Plugin {#subsite}

Na splošno je plugin skupina kode, ki dodaja dodatne funkcije vašemu WordPress spletu. To lahko od prostega spremembe logotipa za prijavu do kompleksnega dodajanja e-trgovinske funkcionalnosti. _Woocommerce_ in _Contact Form_ so primeri pluginov.

Na WordPress Multisite se pluginih lahko instalirajo le iz admin dashboard omrežja s strani Super Admina. Pododredniki (Subsite Admins) lahko aktivirajo in deaktivirajo pluginove samo v okviru svoje podstrane.

## Themes {#super-admin}

WordPress tema je skupina datotek (_grafike, stilne tablice in kode_), ki določa celoten izgled spletne strani. Omogoča vse prednje stiliranja, kot so stiliranje fontov, raspored strani, barve itd.

Kot pluginov, se v WordPress Multisite teme lahko instalirajo le s strani Super Admina in jih pododredniki lahko aktivirajo na ravni svoje podstrane.

## Site Template {#plugin}

**Site Template** je osnovna stran (boilerplate), ki jo lahko uporabljate kot osnovo pri ustvarjanju novih strank v omrežju.

To pomeni, da lahko ustvarite osnovno stran, aktivirate različne pluginove, postavite aktivno temo in jo prilagodite na svoj način. Nato, ko vaš kupec ustvari novo račun, ne bosta prejmel standardne WordPress strani brez smiselnega vsebine, ampak bo prejmel kopijo vaše osnovne strani z vsemi prilagoditvami in vsebino že postavljeno.

## Domain Mapping {#themes}

**Domain mapping** z WordPress je način, kako preusmeriti uporabnike na pravi host, preko naslova spletne strani. V WordPress Multisite se podstrani ustvarjajo tako s poddirektorijem kot z poddomenetom. Domen mapping omogoča, da uporabniki podstran uporabljajo top-level domen kot je [**joesbikeshop.com**](http://joesbikeshop.com), kar naredi naslov strani bolj profesionalen.

## SSL {#site-template}

SSL pomeni **Secure Sockets Layer**. To je digitalno certificate, ki potrjuje identiteto spletne strani in omogoča šifrovanico povezave. Dnes se uporablja kot standardna tehnologija za zagotavljanje varnosti internetne povezave in varovanje vsake občutljive podatke, ki se pošiljajo med dvema sistema, preprečuje kriminalce, da preberejo in spremenijo kakršno koli informacije, vključno z potencialnimi osebnimi podrobnostmi. Sodobni browsere zahtevajo SSL, kar ga naredi nujno pri ustvarjanju in delovanju spletne strani.

## Media {#domain-mapping}

Media so slike, zvok, video in drugi datoteke, ki sestavljajo spletno stran.

Omrežna spletna mesta delejo eno bazo podatkov v WordPress Multisite, ohranjajo pa različne poti na sistemu datotek za medije.

Standardna lokacija WordPressa (wp-content/uploads) ostaja; vendar se njena pot spremeni, da odražava edinstveni ID omrežnega mesta. Posledično se datoteke medijev za omrežno mesto pojavljajo kot wp-contents/uploads/site/[id].

## Permalinks {#ssl}

Permalinks so trajajoči URL-i vašega posamezne bloga ali strani v okviru vaše strani. Permalinks se tudi imenujejo **pretty links**. Po podrazdelih WordPress uporablja URL format z besedilnim nizom, ki izgleda podobno kot:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#media}

Ultimate Multisite je WordPress plugin, ki je namenjen instalacijam WordPress Multisite, ki spremeni vašo instalacijo WordPress v premium omrežje spletnih strani – kot na primer [WordPress.com] – ki omogoča strankam ustvarjanje strani z mesečnimi, kvartalnimi ali letnimi stroški (moжете tudi ustvariti Free načine).

## Checkout Form {#permalinks}

Checkout Form je en samostan ali večstopni obrazec za naročilo, ki vključuje ustvarjanje substrani, članstva in uporabniških računov prek registracije Ultimate Multisite. Sestavi se iz različnih polj in plačilnih form, ki jih mora uporabnik poslati med procesom prijave.

## Webhook {#ultimate-multisite}

Webhook (tudi imenovan kot web callback ali HTTP push API) je način za to, da aplikacija omogoči drugim aplikacijam dostop do informacij v realnem času. Webhook pošlje podatke drugim aplikacijam takoj, kar pomeni, da boste dobili podatke na trenutki.

**Ultimate Multisite webhooks** odpirajo neomejene možnosti, ki omogočajo adminom omrežja različne, čeprav zelo uporabne integracije, zlasti če se uporabljajo v sodelovanju z storitvami kot so _Zapier_ in IFTTT_.

## Events {#checkout-form}

Event je dejanje, ki nastane v rezultatu dejanske dejanja uporabnika ali druge virov, kot je klik na miščo. Ultimate Multisite vodi evidenco za vse dogodke in log, ki se zgodijo v celotni vašem omrežju. Sleduje različne aktivnosti, ki se zgodijo v vašem multisite, kot so spremembe načina.
