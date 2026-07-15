---
title: Dnevnik promjena kreatora administratorskih stranica
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Dnevnik promjena Kreatora administratorskih stranica

### Verzija 1.9.0 - Objavljeno 2026-01-18 {#version-190---released-on-2026-01-18}

* Ispravljeno: Fatalne pogreške pri aktivaciji.
* Refaktorirano: Klase izvora sadržaja sada koriste Singleton trait s pravilnom inicijalizacijom konstruktora roditelja
* Ispravljeno: Pogreške kompilacije Vue.js predloška koje su sprječavale prikaz selektora vrste sadržaja
* Ispravljeno: Nedostajuća Vue podatkovna svojstva (template_id, external_link_url_embedable, external_link_url_checking)
* Ispravljeno: TinyMCE uređivač nije se pravilno inicijalizirao pri učitavanju stranice
* Ispravljeno: Datoteka podrške za Divi nije se automatski učitavala putem Composera
* Ispravljeno: Oštećena PHP sintaksa u klasi podrške za Divi
* Poboljšano: Organizacija i minifikacija JavaScript resursa
* Poboljšano: Kompatibilnost s najnovijim verzijama WordPressa i page buildera

= Verzija: 1.8.8 - Objavljeno 2025-09-28

* Preimenovan prefiks u ultimate-multisite; ažurirana tekstualna domena; povećana verzija.

### Verzija 1.8.7 - 04/10/2023 {#version-187---04102023}

* Ispravljeno: Fatalna pogreška pri pokušaju dodavanja nove administratorske stranice;
* Ispravljeno: Sukob s prefiksom Oxygen stilskih predložaka;

### Verzija 1.8.6 - 09/08/2023 {#version-186---09082023}

* Dodano: Dodana opcija za prikaz podataka s glavne stranice ili trenutačne podstranice.
* Dodano: Dodana podrška za WordPress Block Editor (Gutenberg).
* Ispravljeno: Ispravljen problem s neučitavanjem Brizy resursa stranice.

### Verzija 1.8.5 - 09/12/2020 {#version-185---09122020}

* Ispravljeno: Problem s opcijama zaslona za skrivanje izbornika koji nije nestajao;

### Verzija 1.8.4 - 11/11/2020 {#version-184---11112020}

* Ispravljeno: Podrška za Multisite Ultimate v2;

### Verzija 1.8.3 - 01/10/2020 {#version-183---01102020}

* Ispravljeno: Nekompatibilnosti s Beaver Builderom iz prethodne verzije;
* Ispravljeno: Nedosljednosti margina s WP 5.5;

### Verzija 1.8.2 - 21/09/2020 {#version-182---21092020}

* Ispravljeno: Manje nekompatibilnosti s WP 5.5;

### Verzija 1.8.1 - 05/08/2020 {#version-181---05082020}

* Ispravljeno: Nekompatibilnost s Brizy 2.0;
* Ispravljeno: Manji problemi s performansama pri izradi popisa izbornika;

### Verzija 1.8.0 - 27/04/2020 {#version-180---27042020}

* Ispravljeno: Obavijesti su bile skrivene ispod gornje trake kada nije odabran način rada margina;
* Dodano: Prilagođene stranice sada mogu istodobno zamijeniti više WordPress administratorskih stranica najviše razine i podstranica;
* Dodano: Administratori sada mogu skrivati administratorske stranice pomoću WP Admin Pages PRO;

### Verzija 1.7.9 - 01/04/2020 {#version-179---01042020}

* Ispravljeno: Brizy 1.10.118 i noviji narušavali su SVG podršku na administratorskim stranicama;

### Verzija 1.7.8 - 26/03/2020 {#version-178---26032020}

* Ispravljeno: Pogreška u escapingu koja je kvarila stranicu uređivača pri upotrebi francuskog jezika;

### Verzija 1.7.7 - 04/03/2020 {#version-177---04032020}

* Ispravljeno: Manja nekompatibilnost s Brizy Builderom;
* Poboljšano: Freemius SDK ažuriran na 2.3.2;

### Verzija 1.7.6 - 10/02/2020 {#version-176---10022020}

* Ispravljeno: Gumb za uređivanje administratorske stranice u donjem desnom kutu nije radio na Dashboard widgetima;
* Ispravljeno: Manja nekompatibilnost s Astrom;
* Ispravljeno: Nova verzija Brizyja narušavala je kompatibilnost;

### Verzija 1.7.5 - 14/12/2019 {#version-175---14122019}

* Ispravljeno: Dodan novi rukovatelj rubnog slučaja za popunjavanje stavki izbornika u opciji Zamijeni stranicu;
* Ispravljeno: Elementor fontovi nisu radili;
* Poboljšano: Freemius SDK ažuriran kako bi podržao skrivanje osjetljivih informacija sa stranice Account;

### Verzija 1.7.4 - 29/11/2019 {#version-174---29112019}

* Ispravljeno: Nekompatibilnost s WooCommerce Memberships;
* Ispravljeno: Komponenta kartice Oxygen Builder nije radila;
* Ispravljeno: Beaver Themer nije radio;

### Verzija 1.7.3 - 12/07/2019 {#version-173---12072019}

* Ispravljeno: Stranice su nestajale kada bi njihov roditelj bio pretvoren u drugu vrstu administratorske stranice;
* Poboljšano: Bolji razdjelnici tablice popisa između vrsta administratorskih stranica;
* Poboljšano: Sigurnosna revizija cijele kodne baze plugina;
* Poboljšano: Napomena na upozorenju kartice Separator kada značajka nije dostupna za zadanu vrstu izbornika/izvora sadržaja;

### Verzija 1.7.2 - 01/07/2019 {#version-172---01072019}

* Ispravljeno: Freemius SDK verzija ažurirana na 2.3.0;
* Ispravljeno: Problem nekompatibilnosti s Flywheelom;

### Verzija 1.7.1 - 27/06/2019 {#version-171---27062019}

* Ispravljeno: Widget dobrodošlice sada se prikazuje svim ulogama;
* Ispravljeno: Opcija zaslona za skrivanje/prikaz izbornika administratorskih stranica ne dodaje se ako se izbornik skriva putem filtra dokumentiranog na https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Poboljšano: Skrivanje izbornika administratorskih stranica sada također skriva predloške stvorene iz popisa spremljenih predložaka Beaver Buildera u korisničkom sučelju buildera;
* Dodano: Opcije za skupnu aktivaciju i deaktivaciju administratorskih stranica;
* Dodano: Opcija za prikaz stranica i na glavnoj stranici;
* Dodano: Opcija za preimenovanje oznaka izbornika najviše razine i podrazine u načinu Zamijeni;

### Verzija 1.7.0 - 04/06/2019 {#version-170---04062019}

* Ispravljeno: Problemi s neprikazivanjem Oxygen predložaka;
* Dodano: Podrška za stvaranje widgeta!

### Verzija 1.6.1 - 22/05/2019 {#version-161---22052019}

* Ispravljeno: Tipfeleri;
* Ispravljeno: Stranice podizbornika prepisivale su prethodne stavke podizbornika s istom vrijednošću redoslijeda;
* Ispravljeno: Dupliciranje sada resetira slug duplicirane stranice;
* Poboljšano: Ažurirane pt_BR i es_ES po datoteke;
* Poboljšano: Tablica popisa sada navodi i naziv prilagođenih stranica kao roditeljskih stranica;

### Verzija 1.6.0 - 21/05/2019 {#version-160---21052019}

* Dodano: Vanjske poveznice sada podržavaju i učitavanje u iframeu;

### Verzija 1.5.5 - 17/05/2019 {#version-155---17052019}

* Ispravljeno: Poruka upozorenja koja se prikazivala kada je stranica bila izbrisana ili duplicirana;
* Ispravljeno: Postavke dopuštenja nisu se primjenjivale na administratore;

### Verzija 1.5.4 - 08/05/2019 {#version-154---08052019}

* Ispravljeno: Nekompatibilnosti sa Sliced Invoices;
* Ispravljeno: Manji problem s Oxygenom;
* Ispravljeno: Placeholder u polju naslova nove administratorske stranice nije nestajao pri key-up događaju;

### Verzija 1.5.3 - 03/05/2019 {#version-153---03052019}

* Ispravljeno: Nekompatibilnost sa stranicama opcija Advanced Custom Field;
* Dodano: Opcija za dodavanje određenih korisnika kao ciljeva prilagođenih administratorskih stranica;

### Verzija 1.5.2 - 30/04/2019 {#version-152---30042019}

* Ispravljeno: Nekompatibilnosti s novijim verzijama Brizyja;
* Dodano: Dodan španjolski prijevod - zahvaljujući Johnu Rozzu. Hvala, John!
* Dodano: Beta podrška za Oxygen Builder;

### Verzija 1.5.1 - 15/04/2019 {#version-151---15042019}

* Ispravljeno: Problem s placeholderima u uređivačima Normal i HTML;
* Ispravljeno: Admin Pages se nisu prikazivale u Tools -> Export;
* Ispravljeno: Učitavanje skripti i stilova samo na našim vlastitim stranicama;
* Dodano: Super administratori sada mogu duplicirati Admin Pages;

### Verzija 1.5.0 - 29/03/2019 {#version-150---29032019}

* Ispravljeno: Manji bugovi koje je uhvatio Sentry;
* Ispravljeno: Gumb za brisanje ne radi na zaslonu stranice Edit Admin;
* Poboljšano: Promijenjen je BeaverBuilder gumb kako bi bilo jasno da je podržana i Standard BB licenca;
* Dodano: Admini mogu postaviti i redoslijed podizbornika;
* Dodano: Način zamjene stranice sada ima podršku za sve dostupne stavke izbornika;

### Verzija 1.4.0 - 14/02/2019 (samostalno) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Dodano: Pokrenuto kao samostalni plugin na https://wpadminpagespro.com
* Dodano: Opcija za uklanjanje stavke izbornika Admin Pages iz izbornika nakon završetka procesa izrade stranice;
* Dodano: Opcija za uklanjanje admin obavijesti s admin stranica;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Dodano: Inline Editor;
* Dodano: Konsolidirana nadređena klasa izvora sadržaja kako bi se u budućnosti olakšalo dodavanje novih Page Buildera/izvora sadržaja;
* Dodano: Podrška za vanjske URL-ove;

### Verzija 1.3.0 - 15/01/2019 {#version-130---15012019}

* Ispravljeno: Admin Pages se ne pojavljuju na glavnoj web-stranici u multisite okruženjima;
* Poboljšano: Uklonjene Multisite Ultimate prilagođene vrste objava sa zaslona za izvoz podweb-stranica;
* Dodano: Gornja traka s brzim radnjama za mrežne admine na stranicama za izradu;
* Dodano: OGROMNO! Podrška za Elementor!
* Dodano: OGROMNO! Podrška za Brizy!

### Verzija 1.2.1 - 17/11/2018 {#version-121---17112018}

* Ispravljeno: Usklađivanje plugina s Multisite Ultimate 1.9.0;

### Verzija 1.2.0 - 10/09/2018 {#version-120---10092018}

* Dodano: PHP podrška dodana je ako je WU_APC_ALLOW_PHP_PROCESSING postavljeno na true u wp-config.php. Ovo ne koristi PHP-ov eval, ali i dalje može dovesti do sigurnosnih rupa. Koristite ovo oprezno;
* Poboljšano: Alat za ažuriranje add-on plugina;
* Poboljšano: Novi URL za poslužitelj ažuriranja;

### Verzija 1.1.2 - 16/08/2018 {#version-112---16082018}

* Ispravljeno: Manji problem s WP Engine;

### Verzija 1.1.1 - 16/08/2018 {#version-111---16082018}

* Ispravljeno: Dopuštenja se ne primjenjuju ispravno na zamjenske stranice;

### Verzija 1.1.0 - 15/08/2018 {#version-110---15082018}

* Dodano: Beaver Builder predlošci sada su podržani! Možete koristiti svoj omiljeni alat za izradu stranica za izradu prilagođenih admin stranica;
* Dodano: Sada je moguće zamijeniti i sadržaj zadanih WordPress admin stranica;
* Dodano: Sada je moguće dodati izrađeni sadržaj na vrh ili dno zadanih WordPress admin stranica;

### 0.0.1 {#001}
- Početno izdanje
