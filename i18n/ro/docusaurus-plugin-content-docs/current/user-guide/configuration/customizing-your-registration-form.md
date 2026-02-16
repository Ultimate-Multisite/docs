---
title: Personalizarea formularului de înregistrare
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Personalizarea formularului de înregistrare

Pentru a face rețeaua ta unică față de celelalte soluții SaaS construite pe platforma WordPress, Ultimate Multisite îți permite să personalizezi paginile de înregistrare și autentificare cu funcționalitatea **Checkout Forms**.

Deși acestea sunt o metodă ușoară și flexibilă de a experimenta diferite abordări pentru a converti noi clienți, ele sunt folosite în principal pentru a crea formulare de înregistrare personalizate. Acest articol își propune să îți arate cum poți face asta.

## Paginile de autentificare și înregistrare:

La instalarea Ultimate Multisite, pluginul creează automat pagini personalizate de autentificare și înregistrare pe site-ul tău principal. Poți schimba aceste pagini implicite oricând accesând **Ultimate Multisite > Settings > Login & Registration**.

![Pagina de setări pentru autentificare și înregistrare](/img/config/settings-general.png)

Să aruncăm o privire la fiecare opțiune pe care o poți personaliza în pagina **Login & Registration**:

  * **Enable registration:** Această opțiune activează sau dezactivează înregistrarea în rețeaua ta. Dacă este dezactivată, clienții tăi nu vor putea să se înregistreze și să se aboneze la produsele tale.

  * **Enable email verification:** Dacă această opțiune este activată, clienții care se abonează la un plan gratuit sau la un plan plătit cu perioadă de încercare vor primi un email de verificare și vor trebui să dea clic pe linkul de verificare pentru ca site-urile lor să fie create.

  * **Default registration page:** Aceasta este pagina implicită pentru înregistrare. Această pagină trebuie să fie publicată pe site-ul tău și să aibă un formular de înregistrare (cunoscut și sub numele de checkout form) - unde clienții tăi se vor abona la produsele tale. Poți crea câte pagini de înregistrare și formulare de checkout dorești, doar nu uita să adaugi shortcode-ul formularului de checkout pe pagina de înregistrare, altfel nu va apărea.

  * **Use custom login page:** Această opțiune îți permite să folosești o pagină de autentificare personalizată, diferită de pagina implicită wp-login.php. Dacă această opțiune este activată, poți selecta ce pagină va fi folosită pentru autentificare în opțiunea **Default login page** (imediat mai jos).

  * **Obfuscate the original login url (wp-login.php):** Dacă vrei să ascunzi URL-ul original de autentificare, poți activa această opțiune. Acest lucru este util pentru a preveni atacurile de tip brute-force. Dacă această opțiune este activată, Ultimate Multisite va afișa o eroare 404 când un utilizator încearcă să acceseze linkul original wp-login.php.

  * **Force synchronous site publication:** După ce un client se abonează la un produs din rețea, noul site în așteptare trebuie convertit într-un site real de rețea. Procesul de publicare are loc prin Job Queue, în mod asincron. Activează această opțiune pentru a forța publicarea să aibă loc în aceeași cerere ca înregistrarea.

Acum, să vedem și alte opțiuni relevante pentru procesul de autentificare și înregistrare. Ele se află chiar sub **Other options** pe aceeași pagină Login & Registration:

  * **Default role:** Acesta este rolul pe care clienții tăi îl vor avea pe site-ul lor după procesul de înregistrare.

  * **Add users to the main site as well:** Activarea acestei opțiuni va adăuga utilizatorul și pe site-ul principal al rețelei tale după procesul de înregistrare. Dacă activezi această opțiune, va apărea mai jos și o opțiune pentru a seta **rolul implicit** al acestor utilizatori pe site-ul tău.

  * **Enable multiple accounts:** Permite utilizatorilor să aibă conturi pe diferite site-uri din rețeaua ta cu aceeași adresă de email. Dacă această opțiune este dezactivată, clienții tăi nu vor putea crea un cont pe alte site-uri care rulează în rețeaua ta cu aceeași adresă de email.

Și acestea sunt toate opțiunile legate de autentificare și înregistrare pe care le poți personaliza! Nu uita să salvezi setările după ce termini de editat.

## Utilizarea mai multor formulare de înregistrare:

Ultimate Multisite 2.0 oferă un editor de formulare de checkout care îți permite să creezi câte formulare dorești, cu câmpuri diferite, produse oferite etc.

Atât paginile de autentificare cât și cele de înregistrare sunt încorporate cu shortcode-uri: **[wu_login_form]** pe pagina de autentificare și **[wu_checkout]** pentru pagina de înregistrare. Poți personaliza în continuare pagina de înregistrare construind sau creând formulare de checkout.

Pentru a accesa această funcționalitate, mergi la meniul **Checkout Forms**, în bara laterală din stânga.

![Meniul Checkout Forms în bara laterală](/img/config/checkout-forms-list.png)

Pe această pagină, poți vedea toate formularele de checkout pe care le ai.

Dacă vrei să creezi unul nou, dă clic pe **Add Checkout Form** în partea de sus a paginii.

Poți selecta una dintre aceste trei opțiuni ca punct de plecare: single step, multi-step sau blank. Apoi, dă clic pe **Go to the Editor**.

![Adaugă formular de checkout cu opțiunile single step, multi-step sau blank](/img/config/checkout-forms-list.png)

Alternativ, poți edita sau duplica formularele pe care le ai deja dând clic pe opțiunile de sub numele lor. Acolo vei găsi și opțiunile pentru a copia shortcode-ul formularului sau pentru a șterge formularul.

![Acțiuni la hover pe formularul de checkout cu editare, duplicare și ștergere](/img/config/checkout-form-hover-actions.png)

Dacă selectezi single step sau multi-step, formularul de checkout va fi deja pre-populat cu pașii de bază pentru a funcționa. Apoi, dacă dorești, poți adăuga pași suplimentari.

### Editarea unui formular de checkout:

După cum am menționat anterior, poți crea formulare de checkout pentru diferite scopuri. În acest exemplu vom lucra la un formular de înregistrare.

După ce navighezi la editorul de formulare de checkout, dă formularului tău un nume (care va fi folosit doar pentru referință internă) și un slug (folosit pentru a crea shortcode-uri, de exemplu).

![Editorul de formulare de checkout cu câmpurile pentru nume și slug](/img/config/checkout-form-editor.png)

Formularele sunt compuse din pași și câmpuri. Poți adăuga un pas nou dând clic pe **Add New Checkout Step**.

![Butonul Add New Checkout Step](/img/config/checkout-form-add-step.png)

În prima filă a ferestrei modale, completează conținutul pasului din formular. Dă-i un ID, un nume și o descriere. Aceste elemente sunt folosite în principal pentru uz intern.

![Fila de conținut a pasului de checkout cu ID, nume și descriere](/img/config/checkout-form-step.png)

Apoi, setează vizibilitatea pasului. Poți alege între **Always show**, **Only show for logged in users** sau **Only show for guests**.

![Opțiunile de vizibilitate ale pasului de checkout](/img/config/checkout-form-step.png)

În cele din urmă, configurează stilul pasului. Acestea sunt câmpuri opționale.

![Configurarea stilului pasului de checkout](/img/config/checkout-form-step.png)

Acum, este momentul să adăugăm câmpuri la primul nostru pas. Dă clic pe **Add New Field** și selectează tipul de secțiune dorit.

![Butonul Add New Field](/img/config/checkout-form-editor.png)![Dropdown pentru selectarea tipului de câmp](/img/config/checkout-form-step.png)

Fiecare câmp are parametri diferiți de completat. Pentru această primă intrare, vom selecta câmpul **Username**.

![Configurarea câmpului Username](/img/config/checkout-form-step.png)![Parametrii câmpului Username](/img/config/checkout-form-step.png)![Setări suplimentare pentru câmpul Username](/img/config/checkout-form-step.png)

Poți adăuga câți pași și câmpuri ai nevoie. Pentru a afișa produsele tale astfel încât clienții să poată alege unul, folosește câmpul Pricing Table. Dacă vrei să le permiți clienților să aleagă un șablon, adaugă câmpul Template Selection. Și așa mai departe.

_**Notă:** Dacă creezi un produs după ce ai creat formularul de checkout, va trebui să adaugi produsul în secțiunea Pricing table. Dacă nu îl adaugi, produsul nu va apărea clienților tăi pe pagina de înregistrare._

_**Notă 2:** username, email, password, site title, site URL, order summary, payment și submit button sunt câmpuri obligatorii pentru a crea un formular de checkout._

În timp ce lucrezi la formularul de checkout, poți folosi oricând butonul Preview pentru a vedea cum vor vedea clienții tăi formularul. Poți, de asemenea, să alternezi între vizualizarea ca utilizator existent sau ca vizitator.

![Butonul Preview în editorul de formulare de checkout](/img/config/checkout-form-editor.png)![Previzualizarea formularului de checkout ca vizitator sau utilizator existent](/img/config/checkout-form-editor.png)

În cele din urmă, în **Advanced Options** poți configura mesajul pentru pagina **Thank You**, adăuga fragmente de cod pentru urmărirea conversiilor, adăuga CSS personalizat la formularul de checkout sau restricționa accesul pentru anumite țări.

![Advanced Options cu pagina Thank You, urmărirea conversiilor și CSS personalizat](/img/config/checkout-form-advanced.png)

Poți, de asemenea, să activezi sau să dezactivezi manual formularul de checkout prin comutarea acestei opțiuni din coloana din dreapta, sau să ștergi permanent formularul.

![Comutatorul Active și opțiunea de ștergere pentru formularul de checkout](/img/config/checkout-form-active.png)

Nu uita să salvezi formularul de checkout!

![Butonul Save Checkout Form](/img/config/checkout-form-save.png)

Pentru a obține shortcode-ul formularului, dă clic pe **Generate Shortcode** și copiază rezultatul afișat în fereastra modală.

![Fereastra modală Generate Shortcode cu shortcode-ul de copiat](/img/config/checkout-form-editor.png)

_**Notă:** Va trebui să adaugi acest shortcode pe pagina ta de înregistrare pentru ca acest formular de checkout să fie adăugat pe ea._

## Pre-selectarea produselor și șabloanelor prin parametri URL:

Dacă vrei să creezi tabele de prețuri personalizate pentru produsele tale și să pre-selectezi în formularul de checkout produsul sau șablonul pe care clientul tău îl alege din tabelul de prețuri sau din pagina de șabloane, poți folosi parametri URL pentru asta.

### **Pentru planuri:**

Mergi la **Ultimate Multisite > Products > Select a plan**. Ar trebui să vezi butonul **Click to copy Shareable Link** în partea de sus a paginii. Acesta este linkul pe care îl poți folosi pentru a pre-selecta acest plan specific în formularul de checkout.

![Pagina de produs cu butonul pentru link partajabil](/img/config/products-list.png)

Reține că acest link partajabil este valid doar pentru **Plans**. Nu poți folosi linkuri partajabile pentru pachete sau servicii.

### Pentru șabloane:

Dacă vrei să pre-selectezi șabloane de site în formularul de checkout, poți folosi parametrul: **?template_id=X** în URL-ul paginii tale de înregistrare. „X" trebuie înlocuit cu **numărul ID al șablonului de site**. Pentru a obține acest număr, mergi la **Ultimate Multisite > Sites**.

Dă clic pe **Manage** chiar sub șablonul de site pe care vrei să îl folosești. Vei vedea numărul SITE ID. Folosește acest număr pentru ca acest șablon de site specific să fie pre-selectat în formularul de checkout. În cazul nostru aici, parametrul URL ar fi **?template_id=2**.

![Lista de site-uri care afișează ID-ul șablonului de site](/img/config/site-templates-list.png)

Să presupunem că site-ul rețelei noastre este [**www.mynetwork.com**](http://www.mynetwork.com) și pagina noastră de înregistrare cu formularul de checkout se află pe pagina **/register**. URL-ul complet cu acest șablon de site pre-selectat va arăta astfel: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Și dacă dorești, poți pre-selecta atât produse cât și șabloane în formularul de checkout. Tot ce trebuie să faci este să copiezi linkul partajabil al planului și să lipești parametrul șablonului la sfârșit. Va arăta astfel: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
