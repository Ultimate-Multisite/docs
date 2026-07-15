---
title: Administratora lapas veidotāja izmaiņu žurnāls
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Admin lapu izveidotāja izmaiņu žurnāls

### Versija 1.9.0 - Izlaista 2026-01-18 {#version-190---released-on-2026-01-18}

* Labots: fatālas kļūdas aktivizēšanas laikā.
* Pārstrādāts: satura avotu klases, lai izmantotu Singleton iezīmi ar pareizu vecākkonstruktora inicializāciju
* Labots: Vue.js veidņu kompilēšanas kļūdas, kas neļāva atveidot satura tipa atlasītāju
* Labots: trūkstošas Vue datu īpašības (template_id, external_link_url_embedable, external_link_url_checking)
* Labots: TinyMCE redaktors lapas ielādes laikā netika pareizi inicializēts
* Labots: Divi atbalsta fails netika automātiski ielādēts caur Composer
* Labots: bojāta PHP sintakse Divi atbalsta klasē
* Uzlabots: JavaScript resursu organizācija un minifikācija
* Uzlabots: saderība ar jaunākajām WordPress un lapu veidotāju versijām

= Versija: 1.8.8 - Izlaista 2025-09-28

* Pārdēvēts prefikss uz ultimate-multisite; atjaunināts teksta domēns; versijas paaugstinājums.

### Versija 1.8.7 - 04/10/2023 {#version-187---04102023}

* Labots: fatāla kļūda, mēģinot pievienot jaunu administratora lapu;
* Labots: konflikts ar Oxygen stilu lapu prefiksu;

### Versija 1.8.6 - 09/08/2023 {#version-186---09082023}

* Pievienots: pievienota opcija datu attēlošanai no galvenās vietnes vai pašreizējās apakšvietnes.
* Pievienots: pievienots WordPress Block Editor (Gutenberg) atbalsts.
* Labots: novērsta problēma, kuras dēļ Brizy lapas resursi netika ielādēti.

### Versija 1.8.5 - 09/12/2020 {#version-185---09122020}

* Labots: problēma ar Screen Options, lai paslēptu izvēlni, nepazuda;

### Versija 1.8.4 - 11/11/2020 {#version-184---11112020}

* Labots: atbalsts Multisite Ultimate v2;

### Versija 1.8.3 - 01/10/2020 {#version-183---01102020}

* Labots: nesaderības ar Beaver Builder no iepriekšējā būvējuma;
* Labots: atkāpju neatbilstības ar WP 5.5;

### Versija 1.8.2 - 21/09/2020 {#version-182---21092020}

* Labots: nelielas nesaderības ar WP 5.5;

### Versija 1.8.1 - 05/08/2020 {#version-181---05082020}

* Labots: nesaderība ar Brizy 2.0;
* Labots: nelielas veiktspējas problēmas, veidojot izvēlnes sarakstu;

### Versija 1.8.0 - 27/04/2020 {#version-180---27042020}

* Labots: paziņojumi tika paslēpti zem augšējās joslas, kad nebija atlasīts atkāpes režīms;
* Pievienots: pielāgotas lapas tagad var vienlaikus aizstāt vairākas WordPress administratora augšējā līmeņa lapas un apakšlapas;
* Pievienots: administratori tagad var paslēpt administratora lapas, izmantojot WP Admin Pages PRO;

### Versija 1.7.9 - 01/04/2020 {#version-179---01042020}

* Labots: Brizy 1.10.118 un jaunākas versijas sabojāja SVG atbalstu administratora lapās;

### Versija 1.7.8 - 26/03/2020 {#version-178---26032020}

* Labots: escapēšanas kļūda sabojāja redaktora lapu, izmantojot franču valodu;

### Versija 1.7.7 - 04/03/2020 {#version-177---04032020}

* Labots: neliela nesaderība ar Brizy Builder;
* Uzlabots: Freemius SDK atjaunināts uz 2.3.2;

### Versija 1.7.6 - 10/02/2020 {#version-176---10022020}

* Labots: Admin Page rediģēšanas poga apakšējā labajā stūrī nedarbojās Dashboard Widgets;
* Labots: neliela nesaderība ar Astra;
* Labots: jaunā Brizy versija sabojāja saderību;

### Versija 1.7.5 - 14/12/2019 {#version-175---14122019}

* Labots: pievienots jauns robežgadījumu apstrādātājs, lai aizpildītu izvēlnes vienumus opcijā Replace Page;
* Labots: Elementor fonti nedarbojās;
* Uzlabots: Freemius SDK atjaunināts, lai atbalstītu sensitīvas informācijas slēpšanu Account lapā;

### Versija 1.7.4 - 29/11/2019 {#version-174---29112019}

* Labots: nesaderība ar WooCommerce Memberships;
* Labots: Oxygen Builder cilnes komponents nedarbojās;
* Labots: Beaver Themer nedarbojās;

### Versija 1.7.3 - 12/07/2019 {#version-173---12072019}

* Labots: lapas pazuda, kad to vecāklapa tika pārveidota par citu administratora lapas tipu;
* Uzlabots: labāki saraksta tabulas atdalītāji starp Admin Page tipiem;
* Uzlabots: visa plugin koda bāzes drošības pārbaude;
* Uzlabots: piezīme Separator cilnē ar brīdinājumu, kad funkcija nav pieejama konkrētajam izvēlnes/satura avota tipam;

### Versija 1.7.2 - 01/07/2019 {#version-172---01072019}

* Labots: Freemius SDK versija atjaunināta uz 2.3.0;
* Labots: nesaderības problēma ar Flywheel;

### Versija 1.7.1 - 27/06/2019 {#version-171---27062019}

* Labots: Welcome Widget tagad tiek parādīts visām lomām;
* Labots: Screen Option, lai paslēptu/parādītu Admin Pages izvēlni, netiek pievienota, ja izvēlne tiek slēpta, izmantojot filtru, kas dokumentēts vietnē https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Uzlabots: Admin Pages izvēļņu slēpšana tagad arī paslēpj veidnes, kas izveidotas no Beaver Builder saglabāto veidņu saraksta veidotāja UI;
* Pievienots: opcijas administratora lapu masveida aktivizēšanai un deaktivizēšanai;
* Pievienots: opcija rādīt lapas arī galvenajā vietnē;
* Pievienots: opcija pārdēvēt augšējā un apakšlīmeņa izvēlnes etiķetes Replace režīmā;

### Versija 1.7.0 - 04/06/2019 {#version-170---04062019}

* Labots: problēmas ar Oxygen veidnēm, kas netika parādītas;
* Pievienots: atbalsts logrīku izveidei!

### Versija 1.6.1 - 22/05/2019 {#version-161---22052019}

* Labots: drukas kļūdas;
* Labots: apakšizvēlnes lapas pārrakstīja iepriekšējos apakšizvēlnes vienumus ar tādu pašu secības vērtību;
* Labots: dublēšana tagad atiestata dublētās lapas slug;
* Uzlabots: atjaunināti pt_BR un es_ES po faili;
* Uzlabots: saraksta tabula tagad uzskaita pielāgoto lapu nosaukumu arī kā vecāklapas;

### Versija 1.6.0 - 21/05/2019 {#version-160---21052019}

* Pievienots: ārējās saites tagad atbalsta arī iframe ielādi;

### Versija 1.5.5 - 17/05/2019 {#version-155---17052019}

* Labots: tika izmests brīdinājuma ziņojums, kad lapa tika dzēsta vai dublēta;
* Labots: atļauju iestatījumi netika piemēroti administratoriem;

### Versija 1.5.4 - 08/05/2019 {#version-154---08052019}

* Labots: nesaderības ar Sliced Invoices;
* Labots: neliela problēma ar Oxygen;
* Labots: vietturis jaunās administratora lapas virsraksta laukā nepazuda, nospiežot taustiņu;

### Versija 1.5.3 - 03/05/2019 {#version-153---03052019}

* Labots: nesaderība ar Advanced Custom Field opciju lapām;
* Pievienots: opcija pievienot konkrētus lietotājus kā pielāgoto administratora lapu mērķus;

### Versija 1.5.2 - 30/04/2019 {#version-152---30042019}

* Labots: nesaderības ar jaunākām Brizy versijām;
* Pievienots: pievienots tulkojums spāņu valodā — ar John Rozzo laipnu atļauju. Paldies, John!
* Pievienots: beta atbalsts Oxygen Builder;

### Versija 1.5.1 - 15/04/2019 {#version-151---15042019}

* Labots: problēma ar vietturiem Normal un HTML redaktoros;
* Labots: Admin Pages netika parādītas sadaļā Tools -> Export;
* Labots: skriptu un stilu ielāde tikai mūsu pašu lapās;
* Pievienots: Super Admins tagad var dublēt Admin Pages;

### Versija 1.5.0 - 29/03/2019 {#version-150---29032019}

* Labots: nelielas kļūdas, ko konstatēja Sentry;
* Labots: dzēšanas poga nedarbojas administrēšanas lapas rediģēšanas ekrānā;
* Uzlabots: mainīta BeaverBuilder poga, lai būtu skaidrs, ka tiek atbalstīta arī Standard BB licence;
* Pievienots: administratori var iestatīt arī apakšizvēļņu secību;
* Pievienots: lapas aizstāšanas režīms tagad atbalsta visus pieejamos izvēlnes vienumus;

### Versija 1.4.0 - 14/02/2019 (atsevišķs) & 27/02/2019 (papildinājums) {#version-140---14022019-stand-alone--27022019-add-on}

* Pievienots: palaists kā atsevišķs plugin vietnē https://wpadminpagespro.com
* Pievienots: iespēja noņemt Admin Pages izvēlnes vienumu no izvēlnes pēc lapas izveides procesa pabeigšanas;
* Pievienots: iespēja noņemt administratora paziņojumus no administrēšanas lapām;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Pievienots: Inline Editor;
* Pievienots: konsolidēta satura avota vecākklase, lai nākotnē būtu viegli pievienot jaunus Page Builders/Content Sources;
* Pievienots: atbalsts ārējiem URL;

### Versija 1.3.0 - 15/01/2019 {#version-130---15012019}

* Labots: administrēšanas lapas neparādās galvenajā vietnē multisite vidēs;
* Uzlabots: no apakšvietņu eksportēšanas ekrāna noņemti Multisite Ultimate pielāgotie ierakstu tipi;
* Pievienots: augšējā josla ar ātrajām darbībām tīkla administratoriem lapu izveides ekrānos;
* Pievienots: MILZĪGI! Elementor atbalsts!
* Pievienots: MILZĪGI! Brizy atbalsts!

### Versija 1.2.1 - 17/11/2018 {#version-121---17112018}

* Labots: plugin padarīts saderīgs ar Multisite Ultimate 1.9.0;

### Versija 1.2.0 - 10/09/2018 {#version-120---10092018}

* Pievienots: PHP atbalsts pievienots, ja WU_APC_ALLOW_PHP_PROCESSING wp-config.php failā ir iestatīts uz true. Tas neizmanto PHP eval, tomēr tas joprojām var radīt drošības ievainojamības. Izmantojiet to piesardzīgi;
* Uzlabots: papildinājuma plugin atjauninātājs;
* Uzlabots: jauns URL atjauninājumu serverim;

### Versija 1.1.2 - 16/08/2018 {#version-112---16082018}

* Labots: neliela problēma ar WP Engine;

### Versija 1.1.1 - 16/08/2018 {#version-111---16082018}

* Labots: atļaujas netiek pareizi piemērotas lapu aizstāšanai;

### Versija 1.1.0 - 15/08/2018 {#version-110---15082018}

* Pievienots: Beaver Builder veidnes tagad tiek atbalstītas! Varat izmantot savu iecienītāko lapu veidotāju, lai izveidotu pielāgotas administrēšanas lapas;
* Pievienots: tagad ir iespējams aizstāt arī noklusējuma WordPress administrēšanas lapu saturu;
* Pievienots: tagad ir iespējams arī pievienot izveidoto saturu noklusējuma WordPress administrēšanas lapu augšā vai apakšā;

### 0.0.1 {#001}
- Sākotnējais laidiens
