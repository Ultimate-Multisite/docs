---
title: WooCommerce integracijos keitimų žurnalas
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce integracijos pakeitimų žurnalas

Versija 2.2.0 - išleista 2026-07-01
* Nauja: Ultimate Multisite mokesčių sumos dabar rodomos kaip atskiros WooCommerce mokesčių eilutės atsiskaitymo metu, todėl mokesčių sumos prieš mokėjimą tampa aiškesnės.
* Nauja: pridėtas pasirenkamas nustatymas „Nedelsiant sustabdyti narystes po nepavykusių atnaujinimų“ ir `wu_woo_suspend_on_payment_failure` filtras svetainėms, kurios nori sustabdyti narystes po nepavykusio atnaujinimo WooCommerce Subscriptions pakartotinių bandymų laikotarpiu.
* Pataisyta: suderintos WooCommerce Subscription būsenos, kurios po nepavykusių arba atkurtų atnaujinimų galėjo likti nesinchronizuotos su Ultimate Multisite narystėmis.
* Pataisyta: WooCommerce parduotuvės valiuta pridėta prie Ultimate Multisite valiutų sąrašo, kai jos trūko.
* Pataisyta: išsaugoti klientų atsiskaitymo duomenys nukreipiant prenumeratorius į WooCommerce atsiskaitymą.
* Patobulinta: pridėtas suderinamumas su Jetpack Autoloader 5.
* Patobulinta: sutvarkytas leidimo paketo generavimas, kad GitHub ir prekyvietės zip failuose nebūtų įdėtų tarpinių katalogų ir kūrimo failų.

Versija 2.0.6 - išleista 2026-01-16
* Patobulinimas: į priedą įtrauktos pagrindinės prenumeratos. Nebereikia Woocommerce Subscriptinos plėtinio.

Versija 2.0.5 - išleista 2026-01-09
* Patobulinimas: vertimai įkeliami iš glotpress API.
* Pataisyta: kritinė klaida kai kuriuose puslapių kūrimo įrankiuose.
* pataisyta: begalinis peradresavimas, kai klientas yra pagrindinės svetainės narys.

Versija 2.0.4 - išleista 2025-11-14
* Pridėta: vertimai į daug daugiau kalbų.
* Pakeista: pervadinta į Ultimate Multisite: Woocommerce Integration.
* Pridėta: suderinamumas su Woocommerce 10.2.1.
* Pridėta: suderinamumas su Woocommerce Subscriptions 7.7.0.
* Pataisyta: suderinamumas su PHP 8.4
* Pataisyta: peradresavimas, kai nėra WC paskyros puslapio.

Versija 2.0.3 - išleista 2025-08-13
* Pakeista: įjungti automatiniai naujinimai su nauja prekyviete.

Versija 2.0.2 - išleista 2025-07-05
* Pakeista: pervadinta į Multisite Ultimate: Woocommerce Integration.
* Pridėta: suderinamumas su Woocommerce 9.8.1.
* Pridėta: suderinamumas su Woocommerce Subscriptions 7.3.0.
* Pataisyta: kliento atliekamas prenumeratos atšaukimas.
* Pataisyta: kritinė klaida naudojant atsiskaitymo bloką.
* Patobulinimas: dabar suderinama su Woocommerce didelio našumo tinkintomis užsakymų lentelėmis.
* Pataisyta: atšaukimas WooCommerce atsiskaityme vis tiek gali atnaujinti narystę.

Versija 2.0.1 - išleista 2023-08-09

* Pridėta: suderinamumas su Woocommerce 7.9.0.
* Pridėta: suderinamumas su Woocommerce Subscriptions 5.3.0.
* Pridėta: narystės atnaujinimų palaikymas.
* Pridėta: pranešimai apie bandomuosius laikotarpius ir nustatymo mokesčius Woocommerce.
* Pridėta: Ultimate Multisite Woocommerce produktų identifikavimas naudojant meta reikšmę.
* Pridėta: įterptas vienkartinis pataisymas, skirtas pažymėti visus su Ultimate Multisite susijusius Woocommerce produktus.
* Pridėta: Ultimate Multisite sukurti produktai pašalinti iš Woocommerce sąrašo.
* Patobulinimas: sukurtas nepasikartojantis Woocommerce nuolaidos pritaikymas krepšeliui.
* Patobulinimas: atkurta pasikartojanti nuolaida Woocommerce produktui.
* Patobulinimas: prie Woocommerce produkto pridėta pasikartojančios nuolaidos etiketė.
* Patobulinimas: užtikrintas produkto tipas atsiskaitymo metu.
* Pataisyta: išlaikyta narystės būsena per žeminimo procesą.
* Pataisyta: patikrinta, ar prenumerata egzistuoja, kad būtų išvengta klaidų atšaukimo proceso metu.
* Pataisyta: pridėta prenumeratos pradžios data, naudojama Woocommerce prenumeratose.
* Vidinis: įdiegtas naujas PHP 8.1 kūrimo procesas.

Versija 2.0.0 - visiškas perrašymas.

* Pridėta: atšaukimo apdorojimo metodas, pašalinantis woo prenumeratą keičiant mokėjimo vartus arba atšaukiant narystę;
* Pridėta: narystės žeminimo ir atnaujinimo apdoroklis;
* Patobulinimas: įkelti woocommerce priklausomybes kliento atnaujinimo formoje subsvetainėse, kad būtų galima atnaujinti paskyrą;
* Patobulinimas: teisingai įkelti Woocommerce krepšelį, jei jo nėra;
* Patobulinimas: užtikrinti, kad apdorojant atsiskaitymą būtume pagrindinės svetainės lentelėse;
* Patobulinimas: Ultimo atnaujinimo užsakymą grįsti Woocommerce prenumeratos užsakymo verte, o ne paskutiniu mokėjimu;
* Pataisyta: eiti į WU narystės mygtuko nuorodą;
* Pataisyta: nustatyti Ultimo užsakymą kaip apmokėtą, kai Woocommerce prenumeratų atnaujinimas apmokėtas;
* Versijos kūrimas: pridėti MPB kaip kūrimo įrankį;

Versija 2.0.0-beta-5 - išleista 2022-01-21

* Vidinis: pridėtas hook’ų ir filtrų generatorius;
* Vidinis: pridėti Ultimate Multisite šabloniniai failai kūrėjų patogumui;
* Pataisyta: užkirstas kelias kelių produktų kūrimui, kai tai nebūtina;

Versija 2.0.0-beta.4 - 2021-09-23

* Pataisyta: reikalauta, kad WooCommerce būtų aktyvus visame tinkle, o ne tik pagrindinėje svetainėje;
* Patobulinimas: pridėtas filtras, leidžiantis naudoti priedą kaip mu-plugin;

Versija 2.0.0-beta.3 - 2021-05-28

* Pataisyta: Dashboard prieigos kontrolė buvo per agresyvi;
* Patobulinimas: pridėtos WooCommerce pagalbos nuorodos į Ultimate Multisite viršutinį meniu;

Versija 2.0.0-beta.2 - 2021-05-04

* Patobulinimas: sukuria laukiančius mokėjimus Ultimo, kai sukuriamas WCS atnaujinimo užsakymas;
* Patobulinimas: iš anksto užpildo atsiskaitymo laukus Ultimate Multisite kliento duomenimis;
* Patobulinimas: grąžina atsiskaitymo laukus mokėjimo vartams;

Versija 2.0.0-beta.1 - 2021-05-04

* Pradinis beta leidimas

-- Ankstesnės versijos --

Versija 1.2.6 - 26/03/2020

* Pataisyta: nedidelis nesuderinamumas su naujesnėmis WooCommerce Subscriptions versijomis;

Versija 1.2.5 - 26/08/2019

* Pataisyta: klaida ankstesniame leidime;

Versija 1.2.4 - 22/08/2019

* Patobulinta: pridėta parinktis iš karto po integracijos peradresuoti į WooCommerce atsiskaitymo ekraną;

Versija 1.2.3 - 26/05/2019

* Pataisyta: WooCommerce mokėjimo el. laiškas kai kuriais kraštiniais atvejais pradingdavo;

Versija 1.2.2 - 27/02/2019

* Pridėta: nustatymo mokesčių palaikymas WooCommerce Subscription integracijoje;

Versija 1.2.1 - 17/11/2018

* Pataisyta: suderinamumo problemos su Ultimate Multisite 1.9.0 versija;

Versija 1.2.0 - 10/09/2018

* Patobulinta: naujas priedų naujinimų URL;
* Pridėta: beta palaikymas WooCommerce Subscription;

Versija 1.1.2 - 11/02/2018

* Pataisyta: nuoroda į mokėjimą generuojama dinamiškai, kad reaguotų į WooCommerce endpoint pakeitimus;
* Patobulinta: dabar priverstinai nustatome užbaigtą būseną savo užsakymams, kai iškviečiamas payment_completed, kad užtikrintume, jog mūsų atnaujinimo hook’ai veiktų tada, kai turėtų;

Versija 1.1.1 - 24/01/2018

* Ištaisyta: dabar taip pat tikrina, ar WooCommerce ką tik aktyvuotas pagrindinėje svetainėje;
* Ištaisyta: įtraukti perkrovimai, leidžiantys užsakymo kūrimui įtraukti mokesčius;

Versija 1.1.0 - 04/11/2017

* Ištaisyta: dabar integracijos mygtuko etiketė iš tikrųjų pasikeičia, kad atspindėtų nustatymus. Reikalinga Ultimate Multisite 1.5.0;
* Ištaisyta: WooCommerce integracija dabar veikia net jei WooCommerce nėra aktyvus tinkle ir yra aktyvuotas tik pagrindinėje svetainėje;

1.0.0 - Pradinis leidimas
