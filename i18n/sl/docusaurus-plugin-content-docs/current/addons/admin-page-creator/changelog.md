---
title: Dnevnik sprememb ustvarjalnika skrbniških strani
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Dnevnik sprememb ustvarjalnika skrbniških strani

### Različica 1.9.0 - Izdano 2026-01-18 {#version-190---released-on-2026-01-18}

* Popravljeno: Usodne napake ob aktivaciji.
* Predelano: Razredi virov vsebine za uporabo lastnosti Singleton s pravilno inicializacijo nadrejenega konstruktorja
* Popravljeno: Napake pri prevajanju predloge Vue.js, ki so preprečevale prikaz izbirnika vrste vsebine
* Popravljeno: Manjkajoče podatkovne lastnosti Vue (template_id, external_link_url_embedable, external_link_url_checking)
* Popravljeno: Urejevalnik TinyMCE se ob nalaganju strani ni pravilno inicializiral
* Popravljeno: Datoteka podpore Divi se ni samodejno nalagala prek Composer
* Popravljeno: Poškodovana sintaksa PHP v razredu podpore Divi
* Izboljšano: Organizacija in minifikacija sredstev JavaScript
* Izboljšano: Združljivost z najnovejšimi različicami WordPress in graditeljev strani

= Različica: 1.8.8 - Izdano 2025-09-28

* Preimenovan prefiks v ultimate-multisite; posodobljena besedilna domena; dvig različice.

### Različica 1.8.7 - 04/10/2023 {#version-187---04102023}

* Popravljeno: Usodna napaka pri poskusu dodajanja nove skrbniške strani;
* Popravljeno: Konflikt s predpono slogovnih predlog Oxygen;

### Različica 1.8.6 - 09/08/2023 {#version-186---09082023}

* Dodano: Dodana možnost za prikaz podatkov z glavnega spletnega mesta ali trenutnega podmesta.
* Dodano: Dodana podpora za WordPress Block Editor (Gutenberg).
* Popravljeno: Odpravljena težava, pri kateri se sredstva strani Brizy niso nalagala.

### Različica 1.8.5 - 09/12/2020 {#version-185---09122020}

* Popravljeno: Težava z možnostmi zaslona za skrivanje menija ni izginila;

### Različica 1.8.4 - 11/11/2020 {#version-184---11112020}

* Popravljeno: Podpora za Multisite Ultimate v2;

### Različica 1.8.3 - 01/10/2020 {#version-183---01102020}

* Popravljeno: Nezdružljivosti z Beaver Builder iz prejšnje gradnje;
* Popravljeno: Neskladnosti robov z WP 5.5;

### Različica 1.8.2 - 21/09/2020 {#version-182---21092020}

* Popravljeno: Manjše nezdružljivosti z WP 5.5;

### Različica 1.8.1 - 05/08/2020 {#version-181---05082020}

* Popravljeno: Nezdružljivost z Brizy 2.0;
* Popravljeno: Manjše težave z zmogljivostjo pri gradnji seznama menija;

### Različica 1.8.0 - 27/04/2020 {#version-180---27042020}

* Popravljeno: Obvestila so bila skrita pod zgornjo vrstico, ko ni bil izbran način brez roba;
* Dodano: Strani po meri lahko zdaj hkrati zamenjajo več WordPress skrbniških strani najvišje ravni in podstrani;
* Dodano: Skrbniki lahko zdaj skrijejo skrbniške strani z uporabo WP Admin Pages PRO;

### Različica 1.7.9 - 01/04/2020 {#version-179---01042020}

* Popravljeno: Brizy 1.10.118 in novejše različice so pokvarile podporo SVG na skrbniških straneh;

### Različica 1.7.8 - 26/03/2020 {#version-178---26032020}

* Popravljeno: Napaka ubežnega zapisa je pokvarila stran urejevalnika pri uporabi francoščine;

### Različica 1.7.7 - 04/03/2020 {#version-177---04032020}

* Popravljeno: Manjša nezdružljivost z Brizy Builder;
* Izboljšano: Freemius SDK posodobljen na 2.3.2;

### Različica 1.7.6 - 10/02/2020 {#version-176---10022020}

* Popravljeno: Gumb za urejanje skrbniške strani v spodnjem desnem kotu ni deloval na gradnikih Dashboard;
* Popravljeno: Manjša nezdružljivost z Astra;
* Popravljeno: Nova različica Brizy je pokvarila združljivost;

### Različica 1.7.5 - 14/12/2019 {#version-175---14122019}

* Popravljeno: Dodan nov obravnavalnik robnega primera za zapolnitev elementov menija pri možnosti Zamenjaj stran;
* Popravljeno: Pisave Elementor niso delovale;
* Izboljšano: Freemius SDK posodobljen za podporo skrivanju občutljivih informacij s strani Account;

### Različica 1.7.4 - 29/11/2019 {#version-174---29112019}

* Popravljeno: Nezdružljivost z WooCommerce Memberships;
* Popravljeno: Komponenta zavihkov Oxygen Builder ni delovala;
* Popravljeno: Beaver Themer ni deloval;

### Različica 1.7.3 - 12/07/2019 {#version-173---12072019}

* Popravljeno: Strani so izginjale, ko je bil njihov nadrejeni element pretvorjen v drugo vrsto skrbniške strani;
* Izboljšano: Boljši ločilniki tabel seznama med vrstami skrbniških strani;
* Izboljšano: Varnostni pregled celotne kodne baze vtičnika;
* Izboljšano: Opomba na zavihku Separator opozori, ko funkcija ni na voljo za dano vrsto menija/vira vsebine;

### Različica 1.7.2 - 01/07/2019 {#version-172---01072019}

* Popravljeno: Različica Freemius SDK posodobljena na 2.3.0;
* Popravljeno: Težava z nezdružljivostjo s Flywheel;

### Različica 1.7.1 - 27/06/2019 {#version-171---27062019}

* Popravljeno: Pozdravni gradnik se zdaj prikaže vsem vlogam;
* Popravljeno: Možnost zaslona za skrivanje/prikaz menija skrbniških strani ni dodana, če se meni skriva prek filtra, dokumentiranega na https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Izboljšano: Skrivanje menijev skrbniških strani zdaj skrije tudi predloge, ustvarjene s seznama shranjenih predlog Beaver Builder v uporabniškem vmesniku graditelja;
* Dodano: Možnosti za množično aktiviranje in deaktiviranje skrbniških strani;
* Dodano: Možnost prikaza strani tudi na glavnem spletnem mestu;
* Dodano: Možnost preimenovanja oznak menijev najvišje in podrejene ravni v načinu zamenjave;

### Različica 1.7.0 - 04/06/2019 {#version-170---04062019}

* Popravek: Težave s predlogami Oxygen, ki se niso prikazovale;
* Dodano: Podpora za ustvarjanje gradnikov!

### Različica 1.6.1 - 22/05/2019 {#version-161---22052019}

* Popravljeno: Tipkarske napake;
* Popravljeno: Strani podmenija so prepisovale prejšnje elemente podmenija z enako vrednostjo vrstnega reda;
* Popravljeno: Podvajanje zdaj ponastavi ključ podvojene strani;
* Izboljšano: Posodobljene datoteke po pt_BR in es_ES;
* Izboljšano: Tabela seznama zdaj navaja ime strani po meri tudi kot nadrejene strani;

### Različica 1.6.0 - 21/05/2019 {#version-160---21052019}

* Dodano: Zunanje povezave zdaj podpirajo tudi nalaganje iframe;

### Različica 1.5.5 - 17/05/2019 {#version-155---17052019}

* Popravljeno: Opozorilno sporočilo se je sprožilo, ko je bila stran izbrisana ali podvojena;
* Popravljeno: Nastavitve dovoljenj se niso uporabljale za skrbnike;

### Različica 1.5.4 - 08/05/2019 {#version-154---08052019}

* Popravljeno: Nezdružljivosti s Sliced Invoices;
* Popravljeno: Manjša težava z Oxygen;
* Popravljeno: Nadomestno besedilo v polju naslova nove skrbniške strani ni izginilo ob pritisku tipke;

### Različica 1.5.3 - 03/05/2019 {#version-153---03052019}

* Popravljeno: Nezdružljivost s stranmi možnosti Advanced Custom Field;
* Dodano: Možnost dodajanja določenih uporabnikov kot ciljev skrbniških strani po meri;

### Različica 1.5.2 - 30/04/2019 {#version-152---30042019}

* Popravljeno: Nezdružljivosti z novejšimi različicami Brizy;
* Dodano: Dodan španski prevod - z dovoljenjem Johna Rozza. Hvala, John!
* Dodano: Beta podpora za Oxygen Builder;

### Različica 1.5.1 - 15/04/2019 {#version-151---15042019}

* Popravljeno: Težava z nadomestnimi besedili v urejevalnikih Normal in HTML;
* Popravljeno: Skrbniške strani se niso prikazovale v Orodja -> Izvoz;
* Popravljeno: Nalaganje skriptov in slogov samo na naših lastnih straneh;
* Dodano: Super skrbniki lahko zdaj podvajajo skrbniške strani;

### Različica 1.5.0 - 29/03/2019 {#version-150---29032019}

* Popravljeno: manjše napake, ki jih je zaznal Sentry;
* Popravljeno: gumb za brisanje ne deluje na zaslonu strani Edit Admin;
* Izboljšano: spremenjen gumb BeaverBuilder, da je jasno, da je podprta tudi licenca Standard BB;
* Dodano: skrbniki lahko nastavijo tudi vrstni red podmenijev;
* Dodano: način zamenjave strani ima zdaj podporo za vse razpoložljive elemente menija;

### Različica 1.4.0 - 14/02/2019 (samostojno) & 27/02/2019 (dodatek) {#version-140---14022019-stand-alone--27022019-add-on}

* Dodano: zagnano kot samostojen plugin na https://wpadminpagespro.com
* Dodano: možnost odstranitve elementa menija Admin Pages iz menija po končanem postopku ustvarjanja strani;
* Dodano: možnost odstranitve skrbniških obvestil s skrbniških strani;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Dodano: Inline Editor;
* Dodano: konsolidiran nadrejeni razred vira vsebine, da bo dodajanje novih Page Builders/Content Sources v prihodnje enostavno;
* Dodano: podpora za External URLs;

### Različica 1.3.0 - 15/01/2019 {#version-130---15012019}

* Popravljeno: Admin Pages se ne prikažejo na glavnem mestu v okoljih multisite;
* Izboljšano: odstranjeni tipi objav po meri Multisite Ultimate z zaslona za izvoz podmest;
* Dodano: zgornja vrstica s hitrimi dejanji za omrežne skrbnike na straneh za ustvarjanje;
* Dodano: OGROMNO! Podpora za Elementor!
* Dodano: OGROMNO! Podpora za Brizy!

### Različica 1.2.1 - 17/11/2018 {#version-121---17112018}

* Popravljeno: plugin je združljiv z Multisite Ultimate 1.9.0;

### Različica 1.2.0 - 10/09/2018 {#version-120---10092018}

* Dodano: podpora za PHP dodana, če je WU_APC_ALLOW_PHP_PROCESSING v wp-config.php nastavljeno na true. To ne uporablja PHP-jevega eval, vendar lahko še vedno povzroči varnostne luknje. Uporabljajte previdno;
* Izboljšano: posodobljevalnik plugin dodatka;
* Izboljšano: nov URL za strežnik posodobitev;

### Različica 1.1.2 - 16/08/2018 {#version-112---16082018}

* Popravljeno: manjša težava z WP Engine;

### Različica 1.1.1 - 16/08/2018 {#version-111---16082018}

* Popravljeno: dovoljenja niso pravilno uporabljena za zamenjavo strani;

### Različica 1.1.0 - 15/08/2018 {#version-110---15082018}

* Dodano: predloge Beaver Builder so zdaj podprte! S svojim najljubšim graditeljem strani lahko ustvarite skrbniške strani po meri;
* Dodano: zdaj je mogoče zamenjati tudi vsebino privzetih skrbniških strani WordPress;
* Dodano: zdaj je mogoče dodati ustvarjeno vsebino tudi na vrh ali dno privzetih skrbniških strani WordPress;

### 0.0.1 {#001}
- Začetna izdaja
