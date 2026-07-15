---
title: Daugiatenantės aplinkos integracija
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy integracija

Ultimate Multisite: Multi-Tenancy 1.2.0 pakeičia kelis integracijos sąlyčio taškus suvereniems nuomininkams, migracijos patikrai ir nuomininko gyvavimo ciklo automatizavimui.

## Nuomininko paleidimo srautas {#tenant-bootstrap-flow}

Integracijos, kurios kuria arba keičia nuomininkus, turėtų laikytis šios tvarkos:

1. Nustatykite nuomininko registro įrašą ir izoliacijos modelį.
2. Sukurkite arba patikrinkite nuomininko duomenų bazės rašytoją.
3. Paleiskite nuomininko schemą.
4. Paruoškite nuomininko naudotojus.
5. Užregistruokite nuomininko maršrutizavimą ir failų sistemos kelius.
6. Prieš atverdami nuomininką, paleiskite migracijos patikrą.

Nemanykite, kad suverenus nuomininkas gali pakartotinai naudoti tinklo duomenų bazės ryšį. Naudokite nuomininko registrą ir rašytojo abstrakcijas, kurias pateikia priedas.

## SSO ir REST kabliukai {#sso-and-rest-hooks}

Būsenos nelaikantis nuomininko automatinis prisijungimas naudoja trumpalaikius tokenus su paskirties teiginiu, JTI pakartojimo apsauga, galiojimo pabaigos riba ir kilmės prisegimu. Integracijos, kurios prideda prisijungimo mygtukus arba nuotolinio valdymo nuorodas, turėtų generuoti apsilankymus pas nuomininką per palaikomą SSO srautą, o ne tiesiogiai konstruoti nuomininko prisijungimo URL.

Tinklo pusės API audito įvykiai ir dienos suvestinės yra prieinami suverenių nuomininkų vartams. Naudokite tuos žurnalus derindami išorines sistemas, kurios kviečia nuomininko gyvavimo ciklo endpointus.

## Suverenaus kliento veiksmų URL {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 nukreipia suverenaus nuomininko kliento veiksmus atgal į pagrindinę svetainę Account, checkout, atsiskaitymo, sąskaitų faktūrų, svetainės, šablono keitimo ir domeno susiejimo srautams. Integracijos, kurios pateikia nuomininko pusės valdymo nuorodas, turėtų nukreipti šiuos veiksmus į pagrindinės svetainės kliento skydelį ir įtraukti patikrintą grįžimo tikslą, kai naudotojui turėtų būti leidžiama grįžti pas nuomininką atlikus veiksmą.

Naudokite pagrindinį SSO apvalkalą tarp domenų veikiančioms valdymo nuorodoms:

```php
$url = wu_with_sso($main_site_customer_url);
```

Sugeneruotas URL išlieka filtruojamas per `wu_sso_url`, kuris gauna SSO URL, dabartinį naudotoją, tikslinės svetainės ID ir peradresavimo kontekstą. Priedai gali naudoti tą filtrą, kad pridėtų teikėjui būdingą kontekstą arba pakeistų tarpininko URL, išlaikydami Ultimate Multisite tokeno validavimą.

Nedubliuokite narystės, sąskaitų faktūrų, atsiskaitymo adreso, šablono ar domeno valdymo būsenos suvereniame nuomininke. Nuomininko Dashboard laikykite paleidikliu, o pagrindinės svetainės kliento skydelį – valdomų veiksmų patikimu įrašo šaltiniu.

## Migracijos patikra {#migration-verification}

Po migracijos arba kai gyvavimo ciklo integracija pakeičia nuomininko duomenis, paleiskite patikros vartus:

- `wp tenant verify-no-legacy --site=<site-id>` patvirtina, kad nuomininkas nebepriklauso nuo senųjų tinklo pusės kelių.
- `wp tenant verify-sovereign-push --site=<site-id>` patvirtina, kad suverenūs push darbai gali būti apdoroti ir ištuštinti.

Integracijos turėtų laikyti nepavykusią patikrą diegimo blokatoriumi ir vengti pažymėti nuomininką kaip veikiantį, kol klaida bus išspręsta.

## Nuomininko ištrynimas {#tenant-deletion}

Ištrynimo srautai turėtų kviesti priedo išardymo kelią, kad nuomininko duomenų bazės kredencialai būtų išvalyti. Išorinės integracijos gali pašalinti teikėjo išteklius po sėkmingo išardymo, tačiau neturėtų trinti prieglobos duomenų bazių ar aplankų, kol patikra arba asinchroniniai push darbai vis dar vykdomi.

## Nebenaudojamas duomenų bazės maršrutizatorius {#deprecated-database-router}

Senasis `Database_Router` buvo pakeistas nebenaudojimo tarpine klase. Naujos integracijos turėtų nustatyti nuomininkus per dabartines svetainės maršrutizatoriaus ir nuomininko registro API, o ne priklausyti nuo senosios maršrutizatoriaus klasės.
