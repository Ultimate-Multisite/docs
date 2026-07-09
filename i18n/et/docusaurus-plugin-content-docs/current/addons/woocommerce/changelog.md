---
title: WooCommerce integratsiooni muudatuste logi
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce integratsiooni muudatuste logi

Versioon 2.2.0 - avaldatud 2026-07-01
* Uus: Ultimate Multisite maksusummad ilmuvad nüüd checkoutis eraldi WooCommerce tasuridadena, muutes maksude kogusummad enne maksmist selgemaks.
* Uus: lisati valikuline "Peata liikmesused ebaõnnestunud uuendamiste korral kohe" säte ja `wu_woo_suspend_on_payment_failure` filter saitidele, mis soovivad ebaõnnestunud uuendamise korral peatamist WooCommerce Subscriptionsi korduskatsete akna ajal.
* Parandus: ühtlustati WooCommerce Subscriptioni olekud, mis võisid pärast ebaõnnestunud või taastunud uuendamisi Ultimate Multisite liikmesustega sünkroonist välja jääda.
* Parandus: lisati WooCommerce poe valuuta Ultimate Multisite valuutaloendisse, kui see puudus.
* Parandus: säilitati kliendi arveldusandmed, kui tellijad suunati WooCommerce checkouti.
* Täiustatud: lisati ühilduvus Jetpack Autoloader 5-ga.
* Täiustatud: puhastati väljalaskepaketi genereerimine, et GitHubi ja marketplace'i zip-failid väldiksid pesastatud ettevalmistuskatalooge ja arendusfaile.

Versioon 2.0.6 - avaldatud 2026-01-16
* Täiustus: lisati põhitellimused lisamoodulisse. Ei nõua enam Woocommerce Subscriptinos laiendust.

Versioon 2.0.5 - avaldatud 2026-01-09
* Täiustus: laaditakse tõlked glotpress API-st.
* Parandus: fataalne viga mõnes leheehitajas.
* parandus: lõpmatu ümbersuunamine, kui klient on põhisaidi liige.

Versioon 2.0.4 - avaldatud 2025-11-14
* Lisatud: tõlked palju rohkematesse keeltesse.
* Muudetud: ümber nimetatud nimeks Ultimate Multisite: Woocommerce Integration.
* Lisatud: ühilduvus Woocommerce 10.2.1-ga.
* Lisatud: ühilduvus Woocommerce Subscriptions 7.7.0-ga.
* Parandus: ühilduvus PHP 8.4-ga
* Parandus: ümbersuunamine, kui WC konto lehte pole olemas.

Versioon 2.0.3 - avaldatud 2025-08-13
* Muudetud: lubati automaatsed uuendused uue marketplace'iga.

Versioon 2.0.2 - avaldatud 2025-07-05
* Muudetud: ümber nimetatud nimeks Multisite Ultimate: Woocommerce Integration.
* Lisatud: ühilduvus Woocommerce 9.8.1-ga.
* Lisatud: ühilduvus Woocommerce Subscriptions 7.3.0-ga.
* Parandus: tellimuse tühistamine kliendi poolt.
* Parandus: fataalne viga checkout-ploki kasutamisel.
* Täiustus: nüüd ühildub Woocommerce suure jõudlusega kohandatud tellimuste tabelitega.
* Parandus: tühistamine WooCommerce checkoutis võib endiselt liikmesust täiendada.

Versioon 2.0.1 - avaldatud 2023-08-09

* Lisatud: ühilduvus Woocommerce 7.9.0-ga.
* Lisatud: ühilduvus Woocommerce Subscriptions 5.3.0-ga.
* Lisatud: liikmesuse uuenduste tugi.
* Lisatud: teated prooviperioodide ja seadistustasude kohta Woocommerce'is.
* Lisatud: Ultimate Multisite Woocommerce toodete tuvastamine meta väärtuse abil.
* Lisatud: lisati ühekordne parandus, et märkida kõik Ultimate Multisite'iga seotud Woocommerce tooted.
* Lisatud: eemaldati Ultimate Multisite'i loodud tooted Woocommerce loendist.
* Täiustus: loodi ühekordne Woocommerce allahindlus, mida rakendada ostukorvile.
* Täiustus: taastati korduv allahindlus Woocommerce tootele.
* Täiustus: lisati Woocommerce tootele korduva allahindluse silt.
* Täiustus: tagati toote tüüp checkoutis.
* Parandus: säilitati liikmesuse olek madalamale paketile liikumise protsessi ajal.
* Parandus: kontrolliti, kas tellimus on olemas, et vältida vigu tühistamisprotsessi ajal.
* Parandus: lisati tellimuse alguskuupäev kasutamiseks Woocommerce tellimustes.
* Sisemine: rakendati uus PHP 8.1 ehitusprotsess.

Versioon 2.0.0 - täielik ümberkirjutus.

* Lisatud: tühistamise töötlemise meetod woo tellimuse eemaldamiseks, kui makselüüsi vahetatakse või liikmesus tühistatakse;
* Lisatud: käsitleja liikmesuste madalamale ja kõrgemale paketile viimiseks;
* Täiustus: laaditakse woocommerce sõltuvused alam saitidel kliendi uuendamise vormil, et võimaldada konto uuendamist;
* Täiustus: laaditakse Woocommerce ostukorv õigesti, kui seda pole olemas;
* Täiustus: tagatakse, et checkouti töötlemisel ollakse põhisaidi tabelites;
* Täiustus: tehakse Ultimo uuendamistellimus Woocommerce tellimuse tellimuse väärtuse põhjal, mitte viimasest maksest;
* Parandus: WU Membership nupu link;
* Parandus: märgitakse Ultimo tellimus makstuks, kui Woocommerce tellimuste uuendamine on tasutud;
* Ehitus: lisati MPB ehitajana;

Versioon 2.0.0-beta-5 - avaldatud 2022-01-21

* Sisemine: lisati hookide ja filtrite generaator;
* Sisemine: lisati Ultimate Multisite stubid arendaja tööelu parandamiseks;
* Parandatud: välditakse mitme toote loomist, kui see pole vajalik;

Versioon 2.0.0-beta.4 - 2021-09-23

* Parandus: nõuti, et WooCommerce oleks võrgus aktiivne, mitte ainult põhisaidil;
* Täiustus: lisati filter, et lisamoodulit saaks kasutada mu-pluginina;

Versioon 2.0.0-beta.3 - 2021-05-28

* Parandus: dashboardi juurdepääsukontroll oli liiga agressiivne;
* Täiustus: lisati WooCommerce abilingid Ultimate Multisite ülamenüüsse;

Versioon 2.0.0-beta.2 - 2021-05-04

* Täiustus: loob Ultimos ootel maksed WCS uuendamistellimuse loomisel;
* Täiustus: eeltäidab arveldusväljad Ultimate Multisite kliendiandmetega;
* Täiustus: lisab makselüüside jaoks arveldusväljad tagasi;

Versioon 2.0.0-beta.1 - 2021-05-04

* Esmane beetaväljalase

-- Pärandversioonid --

Versioon 1.2.6 - 26/03/2020

* Parandatud: väike ühildumatus WooCommerce Subscriptionsi uuemate versioonidega;

Versioon 1.2.5 - 26/08/2019

* Parandatud: viga eelmises väljalaskes;

Versioon 1.2.4 - 22/08/2019

* Täiustatud: lisati võimalus suunata kohe pärast integratsiooni WooCommerce checkouti ekraanile;

Versioon 1.2.3 - 26/05/2019

* Parandatud: WooCommerce maksemeil kadus mõnel erijuhul;

Versioon 1.2.2 - 27/02/2019

* Lisatud: seadistustasude tugi WooCommerce Subscriptioni integratsioonis;

Versioon 1.2.1 - 17/11/2018

* Parandatud: ühilduvusprobleemid Ultimate Multisite versiooniga 1.9.0;

Versioon 1.2.0 - 10/09/2018

* Täiustatud: uus uuenduste URL lisamoodulitele;
* Lisatud: beetatugi WooCommerce Subscriptionile;

Versioon 1.1.2 - 11/02/2018

* Parandatud: makselink genereeritakse dünaamiliselt, et reageerida WooCommerce endpointide muudatustele;
* Täiustatud: nüüd sunnime oma tellimustele lõpetatud oleku, kui payment_completed kutsutakse välja, et tagada meie uuendamishookide käivitumine õigel ajal;

Versioon 1.1.1 - 24/01/2018

* Parandatud: Nüüd kontrollib see ka, kas WooCommerce on just peamisel saidil aktiveeritud;
* Parandatud: Lisatud ülekoormamised, et tellimuse loomine saaks sisaldada makse;

Versioon 1.1.0 - 04/11/2017

* Parandatud: Nüüd muutub integratsiooninupu silt tegelikult, et kajastada seadeid. Nõuab Ultimate Multisite 1.5.0;
* Parandatud: WooCommerce Integration töötab nüüd isegi siis, kui WooCommerce ei ole võrgus aktiivne ja on aktiveeritud ainult t^he peamisel saidil;

1.0.0 - Esmane väljalase
