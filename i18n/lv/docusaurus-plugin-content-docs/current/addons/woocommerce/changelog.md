---
title: WooCommerce integrācijas izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce integrācijas izmaiņu žurnāls

Versija 2.2.0 - Izlaista 2026-07-01
* Jauns: Ultimate Multisite nodokļu summas tagad parādās kā atsevišķas WooCommerce maksas rindas norēķināšanās laikā, padarot nodokļu kopsummas skaidrākas pirms maksājuma.
* Jauns: Pievienots izvēles iestatījums "Nekavējoties apturēt dalības pēc neveiksmīgiem atjaunojumiem" un `wu_woo_suspend_on_payment_failure` filtrs vietnēm, kas vēlas apturēšanu neveiksmīga atjaunojuma gadījumā WooCommerce Subscriptions atkārtoto mēģinājumu loga laikā.
* Labojums: Saskaņoti WooCommerce Subscription statusi, kas pēc neveiksmīgiem vai atgūtiem atjaunojumiem varēja palikt nesinhronizēti ar Ultimate Multisite dalībām.
* Labojums: Pievienota WooCommerce veikala valūta Ultimate Multisite valūtu sarakstam, ja tās trūka.
* Labojums: Saglabāta klienta norēķinu informācija, novirzot abonentus uz WooCommerce norēķināšanos.
* Uzlabots: Pievienota saderība ar Jetpack Autoloader 5.
* Uzlabots: Sakārtota laidiena pakotnes ģenerēšana, lai GitHub un tirgus zips izvairītos no ligzdotiem sagatavošanas direktorijiem un izstrādes failiem.

Versija 2.0.6 - Izlaista 2026-01-16
* Uzlabojums: Iekļaut pamata abonementus papildinājumā. Vairs nav nepieciešams Woocommerce Subscriptinos paplašinājums.

Versija 2.0.5 - Izlaista 2026-01-09
* Uzlabojums: Ielādēt tulkojumus no glotpress API.
* Labojums: Fatāla kļūda dažos lapu veidotājos.
* Labojums: Bezgalīga novirzīšana, kad klients ir galvenās vietnes dalībnieks.

Versija 2.0.4 - Izlaista 2025-11-14
* Pievienots: Tulkojumi daudzām citām valodām.
* Mainīts: Pārdēvēts par Ultimate Multisite: Woocommerce Integration.
* Pievienots: Saderība ar Woocommerce 10.2.1.
* Pievienots: Saderība ar Woocommerce Subscriptions 7.7.0.
* Labojums: Saderība ar PHP 8.4
* Labojums: Novirzīšana, bet kad nepastāv WC konta lapa.

Versija 2.0.3 - Izlaista 2025-08-13
* Mainīts: Iespējoti automātiskie atjauninājumi ar jauno tirgus vietu.

Versija 2.0.2 - Izlaista 2025-07-05
* Mainīts: Pārdēvēts par Multisite Ultimate: Woocommerce Integration.
* Pievienots: Saderība ar Woocommerce 9.8.1.
* Pievienots: Saderība ar Woocommerce Subscriptions 7.3.0.
* Labojums: Abonementa atcelšana, ko veic klients.
* Labojums: Fatāla kļūda, izmantojot norēķināšanās bloku.
* Uzlabojums: Tagad saderīgs ar Woocommerce augstas veiktspējas pielāgotajām pasūtījumu tabulām.
* Labojums: Atcelšana WooCommerce norēķināšanās laikā joprojām var jaunināt dalību.

Versija 2.0.1 - Izlaista 2023-08-09

* Pievienots: Saderība ar Woocommerce 7.9.0.
* Pievienots: Saderība ar Woocommerce Subscriptions 5.3.0.
* Pievienots: Atbalsts dalību atjauninājumiem.
* Pievienots: Paziņojumi par izmēģinājumiem un iestatīšanas maksām Woocommerce.
* Pievienots: Ultimate Multisite Woocommerce produktu identificēšana ar meta vērtību.
* Pievienots: Ievietots vienreizējs labojums, lai atzīmētu visus ar Ultimate Multisite saistītos Woocommerce produktus.
* Pievienots: Ultimate Multisite izveidotie produkti noņemti no Woocommerce saraksta.
* Uzlabojums: Izveidota neatkārtota Woocommerce atlaide, ko piemērot grozam.
* Uzlabojums: Atjaunota atkārtotā atlaide Woocommerce produktam.
* Uzlabojums: Pievienota atkārtotās atlaides etiķete Woocommerce produktam.
* Uzlabojums: Nodrošināts produkta tips norēķināšanās laikā.
* Labojums: Saglabāts dalības statuss pazemināšanas procesa laikā.
* Labojums: Pārbaudīts, vai abonements pastāv, lai izvairītos no kļūdām atcelšanas procesa laikā.
* Labojums: Pievienots abonementa sākuma datums izmantošanai Woocommerce abonementos.
* Iekšējs: Ieviests jauns PHP 8.1 būvēšanas process.

Versija 2.0.0 - Pilnīga pārrakstīšana.

* Pievienots: Atcelšanas apstrādes metode, lai noņemtu woo abonementu, mainot vārteju vai atceļot dalību;
* Pievienots: Apstrādātājs dalību pazemināšanai un jaunināšanai;
* Uzlabojums: Ielādēt woocommerce atkarības klienta atjaunināšanas formā apakšvietnēs, lai atļautu konta atjaunināšanu;
* Uzlabojums: Pareizi ielādēt Woocommerce grozu, ja tas nepastāv;
* Uzlabojums: Nodrošināt, ka atrodamies galvenās vietnes tabulās, apstrādājot norēķināšanos;
* Uzlabojums: Veidot Ultimo atjaunošanas pasūtījumu, balstoties uz Woocommerce abonementa pasūtījuma vērtību, nevis pēdējo maksājumu;
* Labojums: Poga saitei uz WU dalību;
* Labojums: Iestatīt Ultimo pasūtījumu kā apmaksātu, kad Woocommerce abonementu atjaunošana ir apmaksāta;
* Būvējums: Pievienot MPB kā veidotāju;

Versija 2.0.0-beta-5 - Izlaista 2022-01-21

* Iekšējs: Pievienots āķu un filtru ģenerators;
* Iekšējs: Pievienoti Ultimate Multisite stubi izstrādātāja dzīves kvalitātei;
* Labots: Novērsta vairāku produktu izveide, kad tas nav nepieciešams;

Versija 2.0.0-beta.4 - 2021-09-23

* Labojums: WooCommerce prasība būt aktīvam tīklā, nevis tikai galvenajā vietnē;
* Uzlabojums: pievienots filtrs, lai papildinājumu varētu izmantot kā mu-plugin;

Versija 2.0.0-beta.3 - 2021-05-28

* Labojums: Dashboard piekļuves kontrole bija pārāk agresīva;
* Uzlabojums: Pievienotas WooCommerce palīdzības saites Ultimate Multisite augšējai izvēlnei;

Versija 2.0.0-beta.2 - 2021-05-04

* Uzlabojums: izveido gaidošus maksājumus Ultimo WCS atjaunošanas pasūtījuma izveides laikā;
* Uzlabojums: iepriekš aizpilda norēķinu laukus ar Ultimate Multisite klienta datiem;
* Uzlabojums: pievieno atpakaļ norēķinu laukus vārtejām;

Versija 2.0.0-beta.1 - 2021-05-04

* Sākotnējais beta laidiens

-- Mantotās versijas --

Versija 1.2.6 - 26/03/2020

* Labots: Neliela nesaderība ar jaunākām WooCommerce Subscriptions versijām;

Versija 1.2.5 - 26/08/2019

* Labots: Kļūda iepriekšējā laidienā;

Versija 1.2.4 - 22/08/2019

* Uzlabots: Pievienota opcija pēc integrācijas nekavējoties novirzīt uz WooCommerce norēķināšanās ekrānu;

Versija 1.2.3 - 26/05/2019

* Labots: WooCommerce maksājuma e-pasts dažos robežgadījumos pazuda;

Versija 1.2.2 - 27/02/2019

* Pievienots: Atbalsts iestatīšanas maksām WooCommerce Subscription integrācijā;

Versija 1.2.1 - 17/11/2018

* Labots: Saderības problēmas ar Ultimate Multisite versiju 1.9.0;

Versija 1.2.0 - 10/09/2018

* Uzlabots: Jauns atjauninājumu URL papildinājumiem;
* Pievienots: Beta atbalsts WooCommerce Subscription;

Versija 1.1.2 - 11/02/2018

* Labots: Saite maksājumam tiek ģenerēta dinamiski, lai reaģētu uz izmaiņām WooCommerce endpointos;
* Uzlabots: Tagad mēs piespiedu kārtā iestatām pabeigtu statusu mūsu pasūtījumiem, kad tiek izsaukts payment_completed, lai pārliecinātos, ka mūsu atjaunošanas āķi darbojas tad, kad tiem vajadzētu;

Versija 1.1.1 - 24/01/2018

* Labots: Tagad tas arī pārbauda, vai WooCommerce ir tikko aktivizēts galvenajā vietnē;
* Labots: Iekļautas pārslodzes, lai pasūtījuma izveidē varētu iekļaut nodokļus;

Versija 1.1.0 - 04/11/2017

* Labots: Tagad integrācijas pogas etiķete faktiski mainās, lai atspoguļotu iestatījumus. Nepieciešams Ultimate Multisite 1.5.0;
* Labots: WooCommerce Integration tagad darbojas pat tad, ja WooCommerce nav aktīvs tīklā un ir aktivizēts tikai t^he galvenajā vietnē;

1.0.0 - Sākotnējais laidiens
