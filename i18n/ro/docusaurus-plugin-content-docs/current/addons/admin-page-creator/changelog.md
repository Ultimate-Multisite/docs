---
title: Istoric de Modificări al Creatorului de Pagini Admin
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Jurnal de modificări Admin Page Creator

### Versiunea 1.9.0 - Lansată pe 2026-01-18 {#version-190---released-on-2026-01-18}

* Corectat: Erori fatale la activare.
* Refactorizat: Clasele surse de conținut pentru a folosi trait-ul Singleton cu inițializarea corectă a constructorului părinte.
* Corectat: Erori de compilare ale template-urilor Vue.js care împiedic selectorul de tip de conținut să se afișeze.
* Corectat: Proprietăți lipsă din datele Vue (template_id, external_link_url_embedable, external_link_url_checking).
* Corectat: Editorul TinyMCE nu se inițializa corect la încărcarea paginii.
* Corectat: Fișierul de suport pentru Divi nu era încărcat automat prin Composer.
* Corectat: Sintaxă PHP coruptă în clasa de suport Divi.
* Îmbunătățit: Organizarea și minificarea asset-urilor JavaScript.
* Îmbunătățit: Compatibilitatea cu cele mai recente versiuni WordPress și page builder-elor.

= Versiune: 1.8.8 - Lansată pe 2025-09-28

* Prefixul de nume schimbat în ultimate-multisite; actualizat domeniul de text; incrementat numărul versiunii.

### Versiunea 1.8.7 - 04/10/2023 {#version-187---04102023}

* Corectat: Eroare fatală la încercarea de a adăuga o pagină de admin nouă;
* Corectat: Conflict cu prefixul stylesheet-urilor Oxygen;

### Versiunea 1.8.6 - 09/08/2023 {#version-186---09082023}

* Adăugat: O opțiune pentru a afișa datele de pe site-ul principal sau de pe sub-site-ul curent.
* Adăugat: Suport pentru WordPress Block Editor (Gutenberg).
* Corectat: Rezolvat problema cu asset-urile paginii Brizy care nu se încărcau.

### Versiunea 1.8.5 - 09/12/2020 {#version-185---09122020}

* Corectat: Problema cu Opțiunile de Ecran (Screen Options) care nu dispărea pentru a ascunde meniul;

### Versiunea 1.8.4 - 11/11/2020 {#version-184---11112020}

* Corectat: Suport pentru Multisite Ultimate v2;

### Versiunea 1.8.3 - 01/10/2020 {#version-183---01102020}

* Corectat: Incompatibilități cu Beaver Builder din versiunile anterioare;
* Corectat: Inconsistențe de margine cu WP 5.5;

### Versiunea 1.8.2 - 21/09/2020 {#version-182---21092020}

* Corectat: Mici incompatibilități cu WP 5.5;

### Versiunea 1.8.1 - 05/08/2020 {#version-181---05082020}

* Corectat: Incompatibilitate cu Brizy 2.0;
* Corectat: Probleme minore de performanță la construirea listei de meniuri;

### Versiunea 1.8.0 - 27/04/2020 {#version-180---27042020}

* Corectat: Notificările ascunse sub bara de sus când nu este selectat modul de margine;
* Adăugat: Paginile personalizate pot înlocui acum mai multe pagini de nivel superior și sub-pagini ale adminului WordPress în același timp;
* Adăugat: Administratorii pot ascunde paginile de admin folosind WP Admin Pages PRO;

### Versiunea 1.7.9 - 01/04/2020 {#version-179---01042020}

* Corectat: Brizy 1.10.118 și versiunile mai noi care sparg suportul SVG pe paginile de admin;

### Versiunea 1.7.8 - 26/03/2020 {#version-178---26032020}

* Corectat: Eroarea de escapare care sparge pagina Editorului când se folosește limba franceză;

### Versiunea 1.7.7 - 04/03/2020 {#version-177---04032020}

* Corectat: Mică incompatibilitate cu Brizy Builder;
* Îmbunătățit: Actualizat Freemius SDK la 2.3.2;

### Versiunea 1.7.6 - 10/02/2020 {#version-176---10022020}

* Corectat: Butonul de editare al paginii de admin în colțul din dreapta jos nu funcționa pe Widget-urile Dashboard;
* Corectat: Mică incompatibilitate cu Astra;
* Corectat: Noua versiune a Brizy care sparge compatibilitatea;

### Versiunea 1.7.5 - 14/12/2019 {#version-175---14122019}

* Corectat: Adăugat un nou handler pentru cazuri marginale pentru a popula elementele meniului în opțiunea de Înlocuire a Paginii;
* Corectat: Fonturile Elementor nu funcționau;
* Îmbunătățit: Actualizat Freemius SDK pentru a suporta ascunderea informațiilor sensibile de pe pagina de Cont (Account);

### Versiunea 1.7.4 - 29/11/2019 {#version-174---29112019}

* Corectat: Incompatibilitate cu WooCommerce Memberships;
* Corectat: Componenta tab-ului Oxygen Builder nu funcționa;
* Corectat: Beaver Themer nu funcționa;

### Versiunea 1.7.3 - 12/07/2019 {#version-173---12072019}

* Corectat: Paginile care dispăreau când părintele lor este convertit într-un alt tip de pagină de admin;
* Îmbunătățit: Separatoarele de listă mai bune între tipurile de pagini de admin;
* Îmbunătățit: Revizuire de securitate a întregului cod de bază al plugin-ului;
* Îmbunătățit: Notă despre avertismentul tab-ului Separator când funcționalitatea nu este disponibilă pentru un anumit tip de meniu/sursă de conținut;

### Versiunea 1.7.2 - 01/07/2019 {#version-172---01072019}

* Corectat: Versiunea Freemius SDK actualizată la 2.3.0;
* Corectat: Problema de incompatibilitate cu Flywheel;

### Versiunea 1.7.1 - 27/06/2019 {#version-171---27062019}

* Corectat: Widget-ul de Bun Venut este acum afișat tuturor rolurilor;
* Corectat: Opțiunea de Ecran pentru a ascunde/afișa meniul Admin Pages nu este adăugată dacă meniul este ascuns prin filterul documentat pe https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Îmbunătățit: Ascunderea meniurilor Admin Pages ascunde acum și template-urile create din lista de template-uri salvate în Beaver Builder UI;
* Adăugat: Opțiuni pentru activarea și dezactivarea în masă a paginilor de admin;
* Adăugat: Opțiunea de a afișa paginile și pe site-ul principal;
* Adăugat: Opțiunea de a renumera etichetele meniului de nivel superior și sub-nivel în modul de Înlocuire.

### Versiunea 1.7.0 - 04/06/2019 {#version-170---04062019}

* Corectat: Probleme cu template-urile Oxygen care nu apăreau;
* Adăugat: Suport pentru Crearea de Widget-uri!

### Versiunea 1.6.1 - 22/05/2019 {#version-161---22052019}

* Corectat: Greșeli de tipar;
* Corectat: Sub-paginile care suprascriu elementele sub-meniului anterioare cu aceeași valoare de ordine;
* Corectat: Duplicarea resetează acum slug-ul paginii duplicate;
* Îmbunătățit: Fișierele po pt_BR și es_ES po actualizate;
* Îmbunătățit: Lista de tip tabel liste acum listează și numele paginilor personalizate ca pagini părinte;

### Versiunea 1.6.0 - 21/05/2019 {#version-160---21052019}

* Adăugat: Link-urile externe suportă acum și încărcarea iframe;

### Versiunea 1.5.5 - 17/05/2019 {#version-155---17052019}

* Corectat: Mesajul de avertizare care era emis când o pagină era ștergută sau duplicată;
* Corectat: Setările de permisiuni care nu erau aplicate Administratorilor;

### Versiunea 1.5.4 - 08/05/2019 {#version-154---08052019}

* Corectat: Incompatibilități cu Sliced Invoices;
* Corectat: Mică problemă cu Oxygen;
* Corectat: Placeholder-ul în câmpul titlu al paginii de admin noi nu dispărea la apăsarea unei taste (key-up);

### Versiunea 1.5.3 - 03/05/2019 {#version-153---03052019}

* Corectat: Incompatibilitate cu paginile de opțiuni ale Advanced Custom Field;
* Adăugat: Opțiunea de a adăuga utilizatori specifici ca ținte pentru paginile de admin personalizate;

### Versiunea 1.5.2 - 30/04/2019 {#version-152---30042019}

* Corectat: Incompatibilități cu versiunile mai noi de Brizy;
* Adăugat: Adăugat suportul în limba spaniolă - cu gentilețe de la John Rozzo. Mulțumesc, John!
* Adăugat: Suport Beta pentru Oxygen Builder;

### Versiunea 1.5.1 - 15/04/2019 {#version-151---15042019}

* Corectat: Problema cu placeholder-urile în editorii Normal și HTML;
* Corectat: Admin Pages nu se afișau pe Tools -> Export;
* Corectat: Încărcarea script-urilor și stilurilor doar pe paginile noastre;
* Adăugat: Super Administratorii pot acum a duplica paginile de Admin;

### Versiunea 1.5.0 - 29/03/2019 {#version-150---29032019}

* Corectat: Mici bug-uri apucate de Sentry;
* Corectat: Butonul de ștergere nu funcționa pe ecranul de editare al paginii de admin;
* Îmbunătățit: Butonul BeaverBuilder a fost schimbat pentru a clarifica că licența Standard BB este suportată de asemenea;
* Adăugat: Administratorii pot seta acum și ordinea sub-meniurilor;
* Adăugat: Modul de pagină de înlocuire are acum suport pentru toate elementele meniului disponibile;

### Versiunea 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Adăugat: Lansat ca plugin Stand-alone pe https://wpadminpagespro.com
* Adăugat: Opțiunea de a elimina elementul de meniu Admin Pages din meniu după finalizarea procesului de creare a paginii;
* Adăugat: Opțiunea de a elimina notificările de admin de pe paginile de admin;
* Adăugat: Procesarea conținutului, astfel încât să puteți plasa placeholder-uri precum {{user:first_name}} și să fie înlocuite automat cu meta-câmpul first_name al utilizatorului;
* Adăugat: Editor Inline;
* Adăugat: Clasa părinte consolidată a sursei de conținut pentru a facilita adăugarea viitoare de Page Builders/Content Sources;
* Adăugat: Suport pentru URL-uri externe;

### Versiunea 1.3.0 - 15/01/2019 {#version-130---15012019}

* Corectat: Admin Pages nu apar pe site-ul principal în mediile multisite;
* Îmbunătățit: Tipuri de postări personalizate Multisite Ultimate eliminate din ecranul de export al sub-siturilor;
* Adăugat: Bara de sus cu acțiuni rapide pentru administratorii de rețea pe paginile de creare;
* Adăugat: ENORM! Suport Elementor!
* Adăugat: ENORM! Suport Brizy!

### Versiunea 1.2.1 - 17/11/2018 {#version-121---17112018}

* Corectat: Realizarea plugin-ului compatibil cu Multisite Ultimate 1.9.0;

### Versiunea 1.2.0 - 10/09/2018 {#version-120---10092018}

* Adăugat: Suport PHP adăugat dacă WU_APC_ALLOW_PHP_PROCESSING este setat pe true în wp-config.php. Acest lucru nu folosește eval-ul PHP, dar poate duce totuși la găuri de securitate. Folosiți cu prudență;
* Îmbunătățit: Actualizatorul plugin-ului Add-on;
* Îmbunătățit: Nouă adresă URL pentru serverul de actualizări;

### Versiunea 1.1.2 - 16/08/2018 {#version-112---16082018}

* Corectat: Mică problemă cu WP Engine;

### Versiunea 1.1.1 - 16/08/2018 {#version-111---16082018}

* Corectat: Permisiunile care nu erau aplicate corect paginilor de înlocuire;

### Versiunea 1.1.0 - 15/08/2018 {#version-110---15082018}

* Adăugat: Template-urile Beaver Builder sunt acum suportate! Puteți folosi page builder-ul preferat pentru a crea pagini de admin personalizate;
* Adăugat: Acum este posibil să înlocuiți și conținutul paginilor de admin implicite ale WordPress;
* Adăugat: Acum este posibil să apendați conținutul creat în partea de sus sau de jos a paginilor de admin implicite ale WordPress;

### 0.0.1 {#001}
- Lansare inițială
