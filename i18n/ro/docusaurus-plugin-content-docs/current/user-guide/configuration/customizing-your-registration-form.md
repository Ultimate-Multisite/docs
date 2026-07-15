---
title: Personalizarea formularului dvs. de înregistrare
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalizarea formularului de înregistrare

Pentru ca rețeaua ta să arate unic față de toate celelalte SaaS construite pe platforma WordPress, Ultimate Multisite îți permite să personalizezi paginile de înregistrare și autentificare cu funcționalitatea noastră **Formulare de checkout**.

Deși acestea sunt o modalitate ușoară și flexibilă de a experimenta cu abordări diferite atunci când încerci să convertești clienți noi, sunt folosite în principal pentru a crea formulare de înregistrare personalizate. Acest articol își propune să îți arate cum poți face acest lucru.

## Pagini de autentificare și înregistrare: {#login-and-registration-pages}

La instalarea Ultimate Multisite, acesta creează automat pagini personalizate de autentificare și înregistrare pe site-ul principal. Poți schimba oricând aceste pagini implicite accesând pagina **Ultimate Multisite > Setări > Autentificare și înregistrare**.

![Pagina de setări pentru autentificare și înregistrare](/img/config/settings-general.png)

Iată o vedere completă a paginii de setări pentru autentificare și înregistrare:

![Pagina completă de setări pentru autentificare și înregistrare](/img/config/settings-login-registration-full.png)

Să analizăm fiecare dintre opțiunile pe care le poți personaliza pe pagina **Autentificare și înregistrare**:

  * **Activează înregistrarea:** Această opțiune va activa sau dezactiva înregistrarea în rețeaua ta. Dacă este dezactivată, clienții tăi nu se vor putea înregistra și abona la produsele tale.

  * **Activează verificarea prin email:** Dacă această opțiune este activată, clienții care se abonează la un plan gratuit sau la un plan plătit cu o perioadă de probă vor primi un email de verificare și vor trebui să facă clic pe linkul de verificare pentru ca site-urile lor să fie create.

  * **Pagina implicită de înregistrare:** Aceasta este pagina implicită pentru înregistrare. Această pagină trebuie să fie publicată pe site-ul tău și să aibă un formular de înregistrare (cunoscut și ca formular de checkout) - unde clienții tăi se vor abona la produsele tale. Poți crea câte pagini de înregistrare și formulare de checkout dorești, doar nu uita să pui shortcode-ul formularului de checkout pe pagina de înregistrare, altfel acesta nu va apărea.

  * **Folosește pagină de autentificare personalizată:** Această opțiune îți permite să folosești o pagină de autentificare personalizată, alta decât pagina implicită wp-login.php. Dacă această opțiune este activată, poți selecta ce pagină va fi folosită pentru autentificare în opțiunea **Pagina implicită de autentificare** (chiar mai jos).

  * **Ascunde URL-ul original de autentificare (wp-login.php)** : Dacă vrei să ascunzi URL-ul original de autentificare, poți activa această opțiune. Acest lucru este util pentru a preveni atacurile brute-force. Dacă această opțiune este activată, Ultimate Multisite va afișa o eroare 404 atunci când un utilizator încearcă să acceseze linkul original wp-login.php

  * **Forțează publicarea sincronă a site-ului:** După ce un client se abonează la un produs într-o rețea, noul site în așteptare trebuie convertit într-un site real al rețelei. Procesul de publicare are loc prin coada de sarcini, asincron. Activează această opțiune pentru a forța publicarea să aibă loc în aceeași cerere ca înscrierea.

Acum, să vedem alte opțiuni care sunt încă relevante pentru procesul de autentificare și înregistrare. Acestea se află chiar sub **Alte opțiuni** pe aceeași pagină Autentificare și înregistrare:

  * **Rol implicit:** Acesta este rolul pe care clienții tăi îl vor avea pe site-ul lor după procesul de înscriere.

  * **Activează Jumper:** Activează scurtătura Jumper în zona de administrare. Jumper le permite administratorilor să sară rapid la ecranele Ultimate Multisite, obiectele rețelei și alte destinații acceptate, fără a naviga prin fiecare meniu. Dezactiveaz-o dacă preferi să ascunzi acel instrument de navigare rapidă din interfața de administrare.

  * **Adaugă utilizatorii și pe site-ul principal:** Activarea acestei opțiuni va adăuga utilizatorul și pe site-ul principal al rețelei tale după procesul de înscriere. Dacă activezi această opțiune, va apărea chiar mai jos și o opțiune pentru a seta **rolul implicit** al acestor utilizatori pe site-ul tău.

  * **Activează conturi multiple:** Permite utilizatorilor să aibă conturi pe site-uri diferite din rețeaua ta cu aceeași adresă de email. Dacă această opțiune este dezactivată, clienții tăi nu vor putea crea un cont pe alte site-uri care rulează în rețeaua ta cu aceeași adresă de email.

Și acestea sunt toate opțiunile legate de autentificare și înregistrare pe care le poți personaliza! Nu uita să îți salvezi setările după ce termini de editat.

## Folosirea mai multor formulare de înregistrare: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 oferă un editor de formulare de checkout care îți permite să creezi câte formulare dorești, cu câmpuri diferite, produse oferite etc.

Atât paginile de autentificare, cât și cele de înregistrare sunt încorporate cu shortcode-uri: **[wu_login_form]** pe pagina de autentificare și**[wu_checkout]** pentru pagina de înregistrare. Poți personaliza și mai mult pagina de înregistrare construind sau creând formulare de checkout.

Pentru a accesa această funcționalitate, mergi la meniul **Formulare de checkout**, în bara laterală din stânga.

![Meniul Formulare de checkout din bara laterală](/img/config/checkout-forms-list.png)

Pe această pagină, poți vedea toate formularele de checkout pe care le ai.

Dacă vrei să creezi unul nou, fă clic pe **Adaugă formular de checkout** în partea de sus a paginii.

Poți selecta una dintre aceste trei opțiuni ca punct de pornire: un singur pas, mai mulți pași sau gol. Apoi, fă clic pe **Mergi la editor**.

![Adaugă formular de checkout cu opțiuni pentru un singur pas, mai mulți pași sau gol](/img/config/checkout-forms-list.png)

Alternativ, poți edita sau duplica formularele pe care le ai deja făcând clic pe opțiunile de sub numele acestuia. Acolo vei găsi și opțiunile pentru a copia shortcode-ul formularului sau pentru a șterge formularul.

![Acțiuni la trecerea cursorului peste formularul de checkout, cu editare, duplicare și ștergere](/img/config/checkout-form-hover-actions.png)

Dacă selectezi un singur pas sau mai mulți pași, formularul de checkout va fi deja precompletat cu pașii de bază necesari pentru a funcționa. Apoi, dacă vrei, poți adăuga pași suplimentari.

### Editarea unui formular de checkout: {#editing-a-checkout-form}

Așa cum am menționat înainte, poți crea formulare de checkout pentru scopuri diferite. În acest exemplu vom lucra la un formular de înregistrare.

După ce navighezi la editorul formularului de checkout, dă formularului un nume (care va fi folosit doar ca referință internă) și un slug (folosit pentru a crea shortcode-uri, de exemplu).

![Editor de formular de checkout cu câmpuri pentru nume și slug](/img/config/checkout-form-name-slug.png)

Formularele sunt alcătuite din pași și câmpuri. Poți adăuga un pas nou făcând clic pe **Adaugă un pas nou de checkout**.

![Buton Adaugă un pas nou de checkout](/img/config/checkout-form-add-step.png)

În prima filă a ferestrei modale, completează conținutul pasului formularului tău. Oferă-i un ID, un nume și o descriere. Aceste elemente sunt folosite în principal intern.

![Fila de conținut a pasului de checkout cu ID, nume și descriere](/img/config/checkout-form-step-content.png)

Apoi, setează vizibilitatea pasului. Poți alege între **Afișează întotdeauna** , **Afișează doar pentru utilizatorii autentificați** sau **Afișează doar pentru vizitatori**.

![Opțiuni de vizibilitate pentru pasul de checkout](/img/config/checkout-form-step-visibility.png)

În final, configurează stilul pasului. Acestea sunt câmpuri opționale.

![Configurarea stilului pasului de checkout](/img/config/checkout-form-step-style.png)

Acum este timpul să adăugăm câmpuri la primul nostru pas. Fă clic pe **Adaugă un câmp nou** și selectează tipul de secțiune dorit.

![Buton Adaugă un câmp nou](/img/config/checkout-form-add-field-button.png)![Meniu derulant de selecție a tipului de câmp](/img/config/checkout-form-field-type-dropdown.png)

Fiecare câmp are parametri diferiți de completat. Pentru această primă intrare, vom selecta câmpul **Nume de utilizator**.

![Configurarea câmpului Nume de utilizator](/img/config/checkout-form-username-content.png)![Parametrii câmpului Nume de utilizator](/img/config/checkout-form-username-visibility.png)![Setări suplimentare ale câmpului Nume de utilizator](/img/config/checkout-form-username-style.png)

Poți adăuga câți pași și câmpuri ai nevoie. Pentru a afișa produsele astfel încât clienții tăi să aleagă unul, folosește câmpul Tabel de prețuri. Dacă vrei să le permiți clienților să aleagă un șablon, adaugă câmpul Selecție șablon. Și așa mai departe.

![Editor de formular de checkout cu câmp de selecție a șablonului](/img/config/checkout-form-with-template-field.png)

_**Notă:** Dacă creezi un produs după ce ai creat formularul de checkout, va trebui să adaugi produsul în secțiunea Tabel de prețuri. Dacă nu îl adaugi, produsul nu va apărea pentru clienții tăi pe pagina de înregistrare._

_**Nota 2:** numele de utilizator, emailul, parola, titlul site-ului, URL-ul site-ului, rezumatul comenzii, plata și butonul de trimitere sunt câmpuri obligatorii pentru a crea un formular de checkout._

În timp ce lucrezi la formularul tău de checkout, poți folosi oricând butonul Previzualizare pentru a vedea cum vor vedea clienții tăi formularul. De asemenea, poți alterna între vizualizarea ca utilizator existent sau ca vizitator.

![Buton Previzualizare în editorul formularului de checkout](/img/config/checkout-form-preview-button.png)![Previzualizare formular de checkout ca vizitator sau utilizator existent](/img/config/checkout-form-preview-modal.png)

În final, în **Opțiuni avansate** poți configura mesajul pentru pagina **Mulțumesc**, adăuga fragmente pentru urmărirea conversiilor, adăuga CSS personalizat la formularul tău de checkout sau îl poți restricționa la anumite țări.

![Opțiuni avansate cu pagina Mulțumesc, urmărirea conversiilor și CSS personalizat](/img/config/checkout-form-advanced.png)

De asemenea, poți activa sau dezactiva manual formularul de checkout comutând această opțiune din coloana din dreapta sau poți șterge permanent formularul.

![Comutator Activ și opțiune de ștergere pentru formularul de checkout](/img/config/checkout-form-active.png)

Nu uita să salvezi formularul de checkout!

![Buton Salvează formularul de checkout](/img/config/checkout-form-save.png)

Pentru a obține shortcode-ul formularului, fă clic pe **Generează shortcode** și copiază rezultatul afișat în fereastra modală.

![Modal Generează shortcode cu shortcode de copiat](/img/config/checkout-form-editor.png)

_**Notă:** Va trebui să adaugi acest shortcode pe pagina ta de înregistrare pentru ca acest formular de checkout să fie adăugat pe ea._

## Preselectarea produselor și șabloanelor prin parametri URL: {#pre-selecting-products-and-templates-via-url-parameters}

Dacă vrei să creezi tabele de prețuri personalizate pentru produsele tale și să preselectezi în formularul de checkout produsul sau șablonul pe care clientul tău îl alege din tabelul tău de prețuri sau din pagina de șabloane, poți folosi parametri URL pentru aceasta.

### **Pentru planuri:** {#for-plans}

Mergi la **Ultimate Multisite > Produse > Selectează un plan**. Ar trebui să vezi butonul **Fă clic pentru a copia linkul partajabil** în partea de sus a paginii. Acesta este linkul pe care îl poți folosi pentru a preselecta acest plan specific în formularul tău de checkout.

![Pagina produsului cu buton pentru link partajabil](/img/config/products-list.png)

Reține că acest link partajabil este valid doar pentru **Planuri**. Nu poți folosi linkuri partajabile pentru pachete sau servicii.

### Pentru șabloane: {#for-templates}

Dacă vrei să preselectezi șabloane de site în formularul tău de checkout, poți folosi parametrul: **?template_id=X** în URL-ul paginii tale de înregistrare. „X” trebuie înlocuit cu **numărul ID al șablonului de site**. Pentru a obține acest număr, mergi la **Ultimate Multisite > Site-uri**.

Fă clic pe **Gestionează** chiar sub șablonul de site pe care vrei să îl folosești. Vei vedea numărul SITE ID. Folosește acest număr pentru ca acest șablon de site specific să fie preselectat în formularul tău de checkout. În cazul nostru, parametrul URL ar fi **?template_id=2**.

![Lista de site-uri care afișează ID-ul șablonului de site](/img/config/site-templates-list.png)

Să presupunem că site-ul nostru de rețea este [**www.mynetwork.com**](http://www.mynetwork.com), iar pagina noastră de înregistrare cu formularul de checkout este localizată pe pagina **/register**. URL-ul complet cu acest șablon de site preselectat va arăta astfel: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Și, dacă vrei, poți preselecta atât produse, cât și șabloane în formularul tău de checkout. Tot ce trebuie să faci este să copiezi linkul partajabil al planului și să lipești parametrul șablonului la final. Va arăta astfel: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
