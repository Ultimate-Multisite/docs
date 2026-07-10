---
title: Regjistri i ndryshimeve për Krijuesin e Faqeve të Administratorit
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Regjistri i ndryshimeve i Admin Page Creator {#admin-page-creator-changelog}

### Versioni 1.9.0 - Lëshuar më 2026-01-18 {#version-190---released-on-2026-01-18}

* Rregulluar: Gabime fatale gjatë aktivizimit.
* Riorganizuar: Klasat e burimit të përmbajtjes për të përdorur trait Singleton me inicializim të duhur të konstruktorit prind
* Rregulluar: Gabime të kompilimit të shabllonit Vue.js që pengonin shfaqjen e përzgjedhësit të llojit të përmbajtjes
* Rregulluar: Mungojnë vetitë e të dhënave Vue (template_id, external_link_url_embedable, external_link_url_checking)
* Rregulluar: Editori TinyMCE nuk inicializohej siç duhet gjatë ngarkimit të faqes
* Rregulluar: Skedari i mbështetjes Divi nuk ngarkohej automatikisht përmes Composer
* Rregulluar: Sintaksë PHP e dëmtuar në klasën e mbështetjes Divi
* Përmirësuar: Organizimi dhe minifikimi i aseteve JavaScript
* Përmirësuar: Përputhshmëria me versionet më të fundit të WordPress dhe të ndërtuesve të faqeve

= Versioni: 1.8.8 - Lëshuar më 2025-09-28

* Riemërto prefiksin në ultimate-multisite; përditëso domenin e tekstit; rritje versioni.

### Versioni 1.8.7 - 04/10/2023 {#version-187---04102023}

* Rregulluar: Gabim fatal gjatë përpjekjes për të shtuar faqe të re administrimi;
* Rregulluar: Konflikt me prefiksin e fletëve të stileve Oxygen;

### Versioni 1.8.6 - 09/08/2023 {#version-186---09082023}

* Shtuar: U shtua një opsion për të shfaqur të dhënat nga faqja kryesore ose nga nën-faqja aktuale.
* Shtuar: U shtua mbështetje për WordPress Block Editor (Gutenberg).
* Rregulluar: U rregullua problemi me asetet e faqes Brizy që nuk ngarkoheshin.

### Versioni 1.8.5 - 09/12/2020 {#version-185---09122020}

* Rregulluar: Problemi me Screen Options për të fshehur menunë që nuk zhdukej;

### Versioni 1.8.4 - 11/11/2020 {#version-184---11112020}

* Rregulluar: Mbështetje për Multisite Ultimate v2;

### Versioni 1.8.3 - 01/10/2020 {#version-183---01102020}

* Rregulluar: Papërputhshmëri me Beaver Builder nga ndërtimi i mëparshëm;
* Rregulluar: Mospërputhje të margjinave me WP 5.5;

### Versioni 1.8.2 - 21/09/2020 {#version-182---21092020}

* Rregulluar: Papërputhshmëri të vogla me WP 5.5;

### Versioni 1.8.1 - 05/08/2020 {#version-181---05082020}

* Rregulluar: Papërputhshmëri me Brizy 2.0;
* Rregulluar: Probleme të vogla performance gjatë ndërtimit të listës së menusë;

### Versioni 1.8.0 - 27/04/2020 {#version-180---27042020}

* Rregulluar: Njoftimet fshiheshin nën shiritin e sipërm kur nuk ishte zgjedhur modalitet margjine;
* Shtuar: Faqet e personalizuara tani mund të zëvendësojnë njëkohësisht disa faqe të nivelit të lartë dhe nën-faqe administrimi të WordPress;
* Shtuar: Administratorët tani mund të fshehin faqe administrimi duke përdorur WP Admin Pages PRO;

### Versioni 1.7.9 - 01/04/2020 {#version-179---01042020}

* Rregulluar: Brizy 1.10.118 e lart prishte mbështetjen SVG në faqet e administrimit;

### Versioni 1.7.8 - 26/03/2020 {#version-178---26032020}

* Rregulluar: Gabim escapimi që prishte faqen e Editorit kur përdorej frëngjishtja;

### Versioni 1.7.7 - 04/03/2020 {#version-177---04032020}

* Rregulluar: Papërputhshmëri e vogël me Brizy Builder;
* Përmirësuar: Freemius SDK u përditësua në 2.3.2;

### Versioni 1.7.6 - 10/02/2020 {#version-176---10022020}

* Rregulluar: Butoni i redaktimit të faqes së administrimit në këndin poshtë djathtas nuk funksiononte në Dashboard Widgets;
* Rregulluar: Papërputhshmëri e vogël me Astra;
* Rregulluar: Versioni i ri i Brizy prishte përputhshmërinë;

### Versioni 1.7.5 - 14/12/2019 {#version-175---14122019}

* Rregulluar: U shtua një trajtues i ri për rast skajor për të mbushur elementet e menusë në opsionin Replace Page;
* Rregulluar: Fontet Elementor nuk funksiononin;
* Përmirësuar: Freemius SDK u përditësua për të mbështetur fshehjen e informacionit të ndjeshëm nga faqja Account;

### Versioni 1.7.4 - 29/11/2019 {#version-174---29112019}

* Rregulluar: Papërputhshmëri me WooCommerce Memberships;
* Rregulluar: Komponenti i skedave Oxygen Builder nuk funksiononte;
* Rregulluar: Beaver Themer nuk funksiononte;

### Versioni 1.7.3 - 12/07/2019 {#version-173---12072019}

* Rregulluar: Faqet zhdukeshin kur prindi i tyre konvertohej në një lloj tjetër faqeje administrimi;
* Përmirësuar: Ndarës më të mirë të tabelës së listës midis llojeve të faqeve të administrimit;
* Përmirësuar: Rishikim sigurie i të gjithë bazës së kodit të plugin-it;
* Përmirësuar: Shënim në paralajmërimin e skedës Separator kur funksioni nuk është i disponueshëm për një lloj të caktuar menuje/burimi përmbajtjeje;

### Versioni 1.7.2 - 01/07/2019 {#version-172---01072019}

* Rregulluar: Versioni i Freemius SDK u përditësua në 2.3.0;
* Rregulluar: Problem papërputhshmërie me Flywheel;

### Versioni 1.7.1 - 27/06/2019 {#version-171---27062019}

* Rregulluar: Welcome Widget tani shfaqet për të gjitha rolet;
* Rregulluar: Screen Option për të fshehur/shfaqur menunë Admin Pages nuk shtohet nëse menuja po fshihet përmes filtrit të dokumentuar në https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Përmirësuar: Fshehja e menuve Admin Pages tani fsheh gjithashtu shabllonet e krijuara nga lista e shablloneve të ruajtura të Beaver Builder në UI-në e ndërtuesit;
* Shtuar: Opsione për të aktivizuar dhe çaktivizuar në masë faqet e administrimit;
* Shtuar: Opsion për të shfaqur faqet edhe në faqen kryesore;
* Shtuar: Opsion për të riemërtuar etiketat e menusë së nivelit të lartë dhe nën-nivelit në modalitetin Replace;

### Versioni 1.7.0 - 04/06/2019 {#version-170---04062019}

* Rregulluar: Probleme me shabllonet Oxygen që nuk shfaqeshin;
* Shtuar: Mbështetje për krijimin e Widget-eve!

### Versioni 1.6.1 - 22/05/2019 {#version-161---22052019}

* Rregulluar: Gabime drejtshkrimore;
* Rregulluar: Faqet e nën-menusë mbishkruanin elementet e mëparshme të nën-menusë me të njëjtën vlerë renditjeje;
* Rregulluar: Dublikimi tani rivendos slug-un e faqes së dublikuar;
* Përmirësuar: Skedarët po pt_BR dhe es_ES u përditësuan;
* Përmirësuar: Tabela e listës tani rendit edhe emrin e faqeve të personalizuara si faqe prind;

### Versioni 1.6.0 - 21/05/2019 {#version-160---21052019}

* Shtuar: External Links tani mbështesin edhe ngarkimin me iframe;

### Versioni 1.5.5 - 17/05/2019 {#version-155---17052019}

* Rregulluar: Mesazh paralajmërimi që shfaqej kur një faqe ishte fshirë ose dublikuar;
* Rregulluar: Cilësimet e lejeve nuk aplikoheshin te administratorët;

### Versioni 1.5.4 - 08/05/2019 {#version-154---08052019}

* Rregulluar: Papërputhshmëri me Sliced Invoices;
* Rregulluar: Problem i vogël me Oxygen;
* Rregulluar: Placeholder-i në fushën e titullit të faqes së re të administrimit nuk zhdukej gjatë key-up;

### Versioni 1.5.3 - 03/05/2019 {#version-153---03052019}

* Rregulluar: Papërputhshmëri me faqet e opsioneve të Advanced Custom Field;
* Shtuar: Opsion për të shtuar përdorues specifikë si objektiva të faqeve të personalizuara të administrimit;

### Versioni 1.5.2 - 30/04/2019 {#version-152---30042019}

* Rregulluar: Papërputhshmëri me versionet më të reja të Brizy;
* Shtuar: Përkthimi spanjisht u shtua - me mirësjellje nga John Rozzo. Faleminderit, John!
* Shtuar: Mbështetje beta për Oxygen Builder;

### Versioni 1.5.1 - 15/04/2019 {#version-151---15042019}

* Rregulluar: Problem me placeholder-ët në editorët Normal dhe HTML;
* Rregulluar: Admin Pages nuk shfaqeshin te Tools -> Export;
* Rregulluar: Ngarkimi i skripteve dhe stileve vetëm në faqet tona;
* Shtuar: Super Administratorët tani mund të dublikojnë Admin Pages;

### Versioni 1.5.0 - 29/03/2019 {#version-150---29032019}

* Rregulluar: Defekte të vogla të kapura nga Sentry;
* Rregulluar: Butoni Delete nuk funksiononte në ekranin e faqes Edit Admin;
* Përmirësuar: U ndryshua butoni BeaverBuilder për ta bërë të qartë se licenca Standard BB mbështetet gjithashtu;
* Shtuar: Admins mund të vendosin edhe rendin e nënmenyve;
* Shtuar: Modaliteti i zëvendësimit të faqes tani ka mbështetje për të gjitha elementet e menusë të disponueshme;

### Versioni 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Shtuar: U lançua si plugin i pavarur në https://wpadminpagespro.com
* Shtuar: Opsion për të hequr elementin e menusë Admin Pages nga menuja pasi të përfundojë procesi i krijimit të faqes;
* Shtuar: Opsion për të hequr njoftimet e admin nga faqet admin;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Shtuar: Inline Editor;
* Shtuar: U konsolidua klasa prind e burimit të përmbajtjes për ta bërë të lehtë shtimin e Page Builders/Content Sources të rinj në të ardhmen;
* Shtuar: Mbështetje për URL të jashtme;

### Versioni 1.3.0 - 15/01/2019 {#version-130---15012019}

* Rregulluar: Admin Pages nuk shfaqen në sajtin kryesor në mjediset multisite;
* Përmirësuar: U hoqën llojet e personalizuara të postimeve të Multisite Ultimate nga ekrani i eksportit të subsites;
* Shtuar: Shirit i sipërm me veprime të shpejta për adminët e rrjetit në faqet e krijimit;
* Shtuar: E MADHE! Mbështetje për Elementor!
* Shtuar: E MADHE! Mbështetje për Brizy!

### Versioni 1.2.1 - 17/11/2018 {#version-121---17112018}

* Rregulluar: Bërja e plugin-it të përputhshëm me Multisite Ultimate 1.9.0;

### Versioni 1.2.0 - 10/09/2018 {#version-120---10092018}

* Shtuar: Mbështetja për PHP u shtua nëse WU_APC_ALLOW_PHP_PROCESSING është vendosur në true në wp-config.php. Kjo nuk përdor eval të PHP-së, por prapë mund të çojë në vrima sigurie. Përdoreni këtë me kujdes;
* Përmirësuar: Përditësuesi i plugin-it add-on;
* Përmirësuar: URL e re për serverin e përditësimeve;

### Versioni 1.1.2 - 16/08/2018 {#version-112---16082018}

* Rregulluar: Problem i vogël me WP Engine;

### Versioni 1.1.1 - 16/08/2018 {#version-111---16082018}

* Rregulluar: Lejet nuk po aplikoheshin saktë te faqet zëvendësuese;

### Versioni 1.1.0 - 15/08/2018 {#version-110---15082018}

* Shtuar: Shabllonet Beaver Builder tani mbështeten! Mund të përdorni ndërtuesin tuaj të preferuar të faqeve për të krijuar faqe admin të personalizuara;
* Shtuar: Tani është e mundur të zëvendësohet edhe përmbajtja e faqeve admin të parazgjedhura të WordPress;
* Shtuar: Tani është e mundur të shtohet përmbajtja e krijuar në krye ose në fund të faqeve admin të parazgjedhura të WordPress;

### 0.0.1 {#001}
- Publikimi fillestar
