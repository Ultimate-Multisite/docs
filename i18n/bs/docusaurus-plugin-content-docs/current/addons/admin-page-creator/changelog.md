---
title: Dnevnik izmjena Admin Page Creator
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Dnevnik promjena Admin Page Creator-a

### Verzija 1.9.0 - Obraćeno 2026-01-18 {#version-190---released-on-2026-01-18}

* Popravljeno: Smrtonosni errori prilikom aktivacije.
* Refaktorisano: Klase izvora sadržaja sada koriste Singleton trait sa pravilnom inicijalizacijom roditeljskog konstruktora.
* Popravljeno: Vue.js greške kompilacije šablona koje su spriječavale prikaz selektora tipa sadržaja.
* Popravljeno: Nedostajuća Vue podatkovna svojstva (template_id, external_link_url_embedable, external_link_url_checking).
* Popravljeno: TinyMCE editor se nije pravilno inicijalizirao pri učitavanju stranice.
* Popravljeno: Divi support fajl nije automatski učitavan preko Composer-a.
* Popravljeno: Korumpirani PHP sintaksa u Divi support klasi.
* Unapređeno: Organizacija i minifikacija JavaScript resursa.
* Unapređeno: Kompatibilnost sa najnovijim verzijama WordPressa i page builder-a.

= Verzija: 1.8.8 - Obraćeno 2025-09-28

* Promijenjen prefiks u ultimate-multisite; ažuriran tekstualni domen; povećana verzija.

### Verzija 1.8.7 - 04/10/2023 {#version-187---04102023}

* Popravljeno: Smrtonosni errori prilikom pokušaja dodavanja nove admin stranice;
* Popravljeno: Konflikt sa Oxygen stilovima (stylesheets) prefiksom;

### Verzija 1.8.6 - 09/08/2023 {#version-186---09082023}

* Dodato: Dodata opcija za prikaz podataka sa glavne stranice ili trenutne podstranice.
* Dodato: Dodata podrška za WordPress Block Editor (Gutenberg).
* Popravljeno: Popravljen problem sa resursima (assets) Brizy stranica koji nisu učitavali.

### Verzija 1.8.5 - 09/12/2020 {#version-185---09122020}

* Popravljeno: Problem sa Screen Options opcijom koja skriva meni nije nestajala;

### Verzija 1.8.4 - 11/11/2020 {#version-184---11112020}

* Popravljeno: Podrška za Multisite Ultimate v2;

### Verzija 1.8.3 - 01/10/2020 {#version-183---01102020}

* Popravljeno: Nepodudarnosti sa Beaver Builder-om iz prethodne verzije;
* Popravljeno: Nepostojanje margina (Margin inconsistencies) sa WP 5.5;

### Verzija 1.8.2 - 21/09/2020 {#version-182---21092020}

* Popravljeno: Male nepodudarnosti sa WP 5.5;

### Verzija 1.8.1 - 05/08/2020 {#version-181---05082020}

* Popravljeno: Nepodudarnost sa Brizy 2.0;
* Popravljeno: Male performanse probleme prilikom izgradnje liste menija;

### Verzija 1.8.0 - 27/04/2020 {#version-180---27042020}

* Popravljeno: Obavještenja koja su bila skrivena ispod trake (top-bar) kada nije odabran režim margina;
* Dodato: Prilagođene stranice sada mogu zamijeniti više WordPress admin stranica na najvišem i podnivou;
* Dodato: Administratori sada mogu sakriti admin stranice pomoću WP Admin Pages PRO;

### Verzija 1.7.9 - 01/04/2020 {#version-179---01042020}

* Popravljeno: Brizy 1.10.118 i novije pokvarile podršku za SVG na admin stranicama;

### Verzija 1.7.8 - 26/03/2020 {#version-178---26032020}

* Popravljeno: Greška kod escapinga koja je pokvarila Editor stranicu kada se koristi francuski jezik;

### Verzija 1.7.7 - 04/03/2020 {#version-177---04032020}

* Popravljeno: Mala nepodudarnost sa Brizy Builder-om;
* Unapređeno: Ažuriran Freemius SDK na verziju 2.3.2;

### Verzija 1.7.6 - 10/02/2020 {#version-176---10022020}

* Popravljeno: Admin Page edit dugme u donjem desnom kutu nije radilo na Dashboard Widgetima;
* Popravljeno: Mala nepodudarnost sa Astra;
* Popravljeno: Nova verzija Brizy pokvarila kompatibilnost;

### Verzija 1.7.5 - 14/12/2019 {#version-175---14122019}

* Popravljeno: Dodat novi handler za slučaj (edge-case handler) za popunjavanje stavki menija na opciji Replace Page;
* Popravljeno: Fontovi Elementora nisu radili;
* Unapređeno: Ažuriran Freemius SDK za podršku skrivanju osjetljivih informacija sa Account stranice;

### Verzija 1.7.4 - 29/11/2019 {#version-174---29112019}

* Popravljeno: Nepodudarnost sa WooCommerce Memberships;
* Popravljeno: Komponenta tab-a Oxygen Builder nije radila;
* Popravljeno: Beaver Themer nije radio;

### Verzija 1.7.3 - 12/07/2019 {#version-173---12072019}

* Popravljeno: Stranice nestaju kada se njihov roditelj konvertuje u drugi tip admin stranice;
* Unapređeno: Bolji razdjelnici tabele za liste između tipova Admin stranica;
* Unapređeno: Revizija sigurnosti cijelog koda plugin-a;
* Unapređeno: Napomena o upozorenju na Separator tabu kada funkcija nije dostupna za određeni tip menija/izvora sadržaja.

### Verzija 1.7.2 - 01/07/2019 {#version-172---01072019}

* Popravljeno: Ažurirana verzija Freemius SDK na 2.3.0;
* Popravljeno: Problem nepodudarnosti sa Flywheel-om;

### Verzija 1.7.1 - 27/06/2019 {#version-171---27062019}

* Popravljeno: Welcome Widget sada se prikazuje svim ulogama;
* Popravljeno: Screen Option za skrivanje/prikaz Admin Pages menija nije dodata ako se meni skriva putem filtera dokumentovanog na https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Unapređeno: Skrivanje Admin Pages menija sada takođe skriva šablone kreirane iz liste sačuvanih šablona Beaver Builder-a na UI-u builder-a;
* Dodato: Opcije za masovno aktiviranje i deaktiviranje admin stranica;
* Dodato: Opcija za prikaz stranica i na glavnoj stranici;
* Dodato: Opcija za preimenovanje oznaka menija na najvišem i podnivou u Replace modu;

### Verzija 1.7.0 - 04/06/2019 {#version-170---04062019}

* Popravak: Problemi sa Oxygen šablonima koji nisu prikazivali;
* Dodato: Podrška za kreiranje Widgeta!

### Verzija 1.6.1 - 22/05/2019 {#version-161---22052019}

* Popravljeno: Tipografske greške (Typos);
* Popravljeno: Pod-menija stranice prepisuju prethodne pod-menija stavke sa istom vrijednošću reda;
* Popravljeno: Duplikacija sada resetuje slug duplirane stranice;
* Unapređeno: Ažurirani pt_BR i es_ES po fajlovi;
* Unapređeno: Lista tabele sada navodi i ime prilagođenih stranica kao roditeljske stranice.

### Verzija 1.6.0 - 21/05/2019 {#version-160---21052019}

* Dodato: Eksterni linkovi sada podržavaju i učitavanje iframe-a.

### Verzija 1.5.5 - 17/05/2019 {#version-155---17052019}

* Popravljeno: Upozorenje poruke koja se bacala kada je stranica obrisana ili duplirana;
* Popravljeno: Podešavanja dozvola nisu primijenjena administratorima;

### Verzija 1.5.4 - 08/05/2019 {#version-154---08052019}

* Popravljeno: Nepodudarnosti sa Sliced Invoices;
* Popravljeno: Mali problem sa Oxygen-om;
* Popravljeno: Placeholder na novom polju naslova admin stranice nije nestajao pri kucanju (key-up);

### Verzija 1.5.3 - 03/05/2019 {#version-153---03052019}

* Popravljeno: Nepodudarnost sa Advanced Custom Field opcijskim stranicama;
* Dodato: Opcija za dodavanje specifičnih korisnika kao meta ciljeva prilagođenih admin stranica;

### Verzija 1.5.2 - 30/04/2019 {#version-152---30042019}

* Popravljeno: Nepodudarnosti sa novijim verzijama Brizy;
* Dodato: Dodata španska verzija - zahvaljujući Johnu Rozzu. Hvala, John!
* Dodato: Beta podrška za Oxygen Builder;

### Verzija 1.5.1 - 15/04/2019 {#version-151---15042019}

* Popravljeno: Problem sa placeholderima na Normal i HTML editorima;
* Popravljeno: Admin Pages nisu prikazivali na Tools -> Export;
* Popravljeno: Učitavanje skripti i stilova samo na našim stranicama;
* Dodato: Super Administratori sada mogu duplirati Admin Pages;

### Verzija 1.5.0 - 29/03/2019 {#version-150---29032019}

* Popravljeno: Mali bugovi uhvaćeni od strane Sentry-ja;
* Popravljeno: Delete dugme nije radilo na ekranu Edit Admin page;
* Unapređeno: BeaverBuilder dugme promijenjeno kako bi bilo jasno da je podržana i Standard BB licenca;
* Dodato: Administratori sada mogu postaviti redoslijed podmenija;
* Dodato: Replace page režim sada ima podršku za sve dostupne stavke menija;

### Verzija 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Dodato: Pokrenut kao stand-alone plugin na https://wpadminpagespro.com
* Dodato: Opcija za uklanjanje Admin Pages menija sa menija nakon procesa kreiranja stranice;
* Dodato: Opcija za uklanjanje admin obavještenja sa admin stranica;
* Dodato: Obrada sadržaja, tako da možete postaviti placeholder-e poput {{user:first_name}} i da se automatski zamijeni sa meta poljem korisnikovog imena.
* Dodato: Inline Editor;
* Dodato: Konsolidovana roditeljska klasa izvora sadržaja kako bi bilo lako dodati nove Page Builder-e/Izvore sadržaja u budućnosti;
* Dodato: Podrška za eksterne URL-ove;

### Verzija 1.3.0 - 15/01/2019 {#version-130---15012019}

* Popravljeno: Admin Pages se ne pojavljuju na glavnoj stranici u multisite okruženjima;
* Unapređeno: Uklonjeni Multisite Ultimate custom post tipovi sa ekrana za izvoz podstranica;
* Dodato: Top-bar sa brzim akcijama za network administratora na stranicama za kreiranje;
* Dodato: VELIKO! Podrška za Elementor!
* Dodato: VELIKO! Podrška za Brizy!

### Verzija 1.2.1 - 17/11/2018 {#version-121---17112018}

* Popravljeno: Učinjen plugin kompatibilnim sa Multisite Ultimate 1.9.0;

### Verzija 1.2.0 - 10/09/2018 {#version-120---10092018}

* Dodato: Dodata PHP podrška ako je WU_APC_ALLOW_PHP_PROCESSING postavljeno na true u wp-config.php. Ovo ne koristi PHP eval, ali i dalje može dovesti do sigurnosnih rupa. Koristite ovo oprezno;
* Unapređeno: Ažuriranje add-on plugin-a;
* Unapređeno: Nova URL adresa za server ažuriranja;

### Verzija 1.1.2 - 16/08/2018 {#version-112---16082018}

* Popravljeno: Mali problem sa WP Engine-om;

### Verzija 1.1.1 - 16/08/2018 {#version-111---16082018}

* Popravljeno: Dozvole nisu pravilno primijenjene za stranice za zamjenu;

### Verzija 1.1.0 - 15/08/2018 {#version-110---15082018}

* Dodato: Sada su podržani Beaver Builder šabloni! Možete koristiti svoj omiljeni page builder za kreiranje prilagođenih admin stranica;
* Dodato: Sada je moguće zamijeniti sadržaj podrazumevanih WordPress admin stranica;
* Dodato: Sada je moguće dodati sadržaj kreiran na vrh ili dno podrazumevanih WordPress admin stranica.

### 0.0.1 {#001}
- Prvo izdanje
