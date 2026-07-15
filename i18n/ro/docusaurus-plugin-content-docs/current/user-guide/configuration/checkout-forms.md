---
title: Formulare de finalizare a comenzii
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulare de checkout

Formularele de checkout sunt o modalitate ușoară și flexibilă de a experimenta cu abordări diferite atunci când încerci să convertești clienți noi.

Ultimate Multisite 2.0 oferă un editor de formulare de checkout care îți permite să creezi câte formulare dorești, cu câmpuri diferite, produse oferite etc.

Pentru a accesa această funcționalitate, mergi la meniul Formulare de checkout, în bara laterală din stânga.

![Lista formularelor de checkout](/img/config/checkout-forms-list.png)

Pe această pagină, poți vedea toate formularele de checkout pe care le ai.

Tabelul listei include o coloană **Stare**, astfel încât să poți confirma dacă fiecare formular este disponibil în prezent pentru clienți:

| Stare | Semnificație |
|---|---|
| **Activ** | Formularul poate fi folosit oriunde este publicat shortcode-ul său sau pagina de înregistrare. |
| **Inactiv** | Formularul este salvat, dar dezactivat. Clienții nu pot finaliza checkout-ul cu el până când nu îl activezi din nou. |

Folosește coloana de stare înainte de a edita un flux public de înregistrare, mai ales atunci când păstrezi formulare de checkout în schiță sau sezoniere alături de formularele tale active.

Dacă vrei să creezi unul nou, fă clic pe Adaugă formular de checkout în partea de sus a paginii.

Poți selecta una dintre aceste trei opțiuni ca punct de pornire: un singur pas, mai mulți pași sau gol. Apoi, fă clic pentru a merge la editor.

Când alegi **un singur pas** sau **mai mulți pași** ca punct de pornire, șablonul formularului include acum implicit un câmp **Selectare șablon**. Acest câmp le permite clienților tăi să aleagă un șablon de site în timpul procesului de înregistrare. Îl poți lăsa la locul lui, îl poți elimina sau îl poți repoziționa ca pe orice alt câmp din editor.

![Editor formular de checkout](/img/config/checkout-form-editor.png)

Alternativ, poți edita sau duplica formularele pe care le ai deja făcând clic pe opțiunile de sub numele acestuia. Acolo vei găsi și opțiunile pentru a copia shortcode-ul formularului sau pentru a șterge formularul.

![Acțiuni la trecerea cursorului peste formularul de checkout](/img/config/checkout-form-hover-actions.png)

#### Prezentare generală a editorului de formulare de checkout {#checkout-form-editor-overview}

Editorul de formulare de checkout oferă o interfață completă pentru construirea formularelor tale de înregistrare. Iată o prezentare generală a structurii editorului:

![Prezentare generală a editorului de formulare de checkout](/img/config/checkout-form-editor-overview.png)

### Editarea unui formular de checkout {#editing-a-checkout-form}

Poți crea formulare de checkout pentru scopuri diferite. În acest exemplu vom lucra la un formular de înregistrare.

După ce navighezi la editorul formularului de checkout, dă-i formularului un nume (care va fi folosit doar pentru referință internă) și un slug (folosit pentru a crea shortcakes, de exemplu).

![Editor formular de checkout](/img/config/checkout-form-editor.png)

Formularele sunt alcătuite din pași și câmpuri. Poți adăuga un pas nou făcând clic pe Adaugă pas nou de checkout.

![Adaugă pas nou de checkout](/img/config/checkout-form-add-step.png)

În prima filă a ferestrei modale, completează conținutul pasului formularului tău. Dă-i un ID, un nume și o descriere. Aceste elemente sunt folosite în principal intern.

![Fila de conținut a pasului formularului de checkout](/img/config/checkout-form-step-content.png)

Apoi, setează vizibilitatea pasului. Poți alege între „Afișează întotdeauna”, „Afișează doar pentru utilizatorii autentificați” sau „Afișează doar pentru vizitatori”.

![Fila de vizibilitate a pasului formularului de checkout](/img/config/checkout-form-step-visibility.png)

În cele din urmă, configurează stilul pasului. Acestea sunt câmpuri opționale.

![Fila de stil a pasului formularului de checkout](/img/config/checkout-form-step-style.png)

Acum este timpul să adăugăm câmpuri la primul nostru pas. Fă clic pe Adaugă câmp nou și selectează tipul de secțiune pe care îl dorești.

![Pas de formular de checkout cu câmpuri](/img/config/checkout-form-step-with-fields.png)

Fiecare câmp are parametri diferiți care trebuie completați. Pentru această primă intrare, vom selecta câmpul „Nume de utilizator”.

![Listă derulantă pentru selectarea tipului de câmp](/img/config/checkout-form-field-type-dropdown.png)

![Setări de conținut pentru câmpul Nume de utilizator](/img/config/checkout-form-username-content.png)

![Setări de vizibilitate pentru câmpul Nume de utilizator](/img/config/checkout-form-username-visibility.png)

![Setări de stil pentru câmpul Nume de utilizator](/img/config/checkout-form-username-style.png)

Poți adăuga câți pași și câte câmpuri ai nevoie. Pentru a afișa produsele astfel încât clienții tăi să aleagă unul, folosește câmpul Tabel de prețuri. Dacă vrei să le permiți clienților să aleagă un șablon, adaugă câmpul Selectare șablon. Și așa mai departe.

![Dialog Adaugă câmp nou](/img/config/checkout-form-add-field-dialog.png)

_**Notă:** numele de utilizator, emailul, parola, titlul site-ului, URL-ul site-ului, rezumatul comenzii, plata și butonul de trimitere sunt câmpuri obligatorii pentru a crea un formular de checkout._

În timp ce lucrezi la formularul tău de checkout, poți folosi oricând butonul Previzualizare pentru a vedea cum vor vedea clienții formularul. De asemenea, poți alterna între vizualizarea ca utilizator existent sau ca vizitator

![Buton de previzualizare a formularului de checkout](/img/config/checkout-form-preview-button.png)

![Modal de previzualizare a formularului de checkout](/img/config/checkout-form-preview-modal.png)

În cele din urmă, în Opțiuni avansate poți configura mesajul pentru pagina „Mulțumim”, poți adăuga fragmente pentru urmărirea conversiilor, poți adăuga CSS personalizat la formularul tău de checkout sau îl poți restricționa la anumite țări.

![Opțiuni avansate](/img/config/checkout-form-advanced.png)

De asemenea, poți activa sau dezactiva manual formularul tău de checkout comutând această opțiune în coloana din dreapta sau poți șterge definitiv formularul.

![Comutator Activ](/img/config/checkout-form-active.png)

Pentru a șterge un formular, fă clic pe opțiunea de ștergere din acțiunile formularului:

![Opțiune de ștergere a formularului de checkout](/img/config/checkout-form-delete.png)

Nu uita să salvezi formularul tău de checkout!

![Buton Salvare](/img/config/checkout-form-save.png)

Pentru a obține shortcode-ul formularului, fă clic pe Generează shortcode și copiază rezultatul afișat în fereastra modală.

![Buton Salvare cu shortcode](/img/config/checkout-form-save.png)

### Câmpul Tabel de prețuri {#the-pricing-table-field}

Câmpul **Tabel de prețuri** afișează produsele tale în formularul de checkout, astfel încât clienții să poată alege un plan. Când editezi acest câmp, poți configura mai multe opțiuni:

![Setări pentru câmpul Tabel de prețuri](/img/config/pricing-table-field-settings.png)

Iată cum apare tabelul de prețuri în formularul de înregistrare din frontend:

![Tabel de prețuri pentru checkout în frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Produse**: Selectați ce produse să fie afișate și ordinea în care apar.
  * **Forțează durate diferite**: Când este activat, toate produsele sunt afișate indiferent dacă au o variație de preț corespunzătoare pentru perioada de facturare selectată curent. Când este dezactivat (implicit), produsele fără o variație pentru perioada selectată sunt ascunse.
    ![Opțiune pentru forțarea duratelor în tabelul de prețuri](/img/config/pricing-table-force-durations.png)
  * **Ascunde când este preselectat**: Ascunde tabelul de prețuri când un plan a fost deja selectat prin URL (de ex. `/register/premium`).
  * **Șablon pentru tabelul de prețuri**: Alegeți șablonul vizual pentru tabelul de prețuri (Listă simplă, Legacy etc.).

Dacă adăugați un produs în Tabelul de prețuri înainte ca formularul să includă câmpurile necesare pentru a finaliza fluxul de checkout al acelui produs, editorul afișează acum un avertisment. Folosiți avertismentul pentru a adăuga câmpul obligatoriu lipsă înainte de a publica sau salva modificările pentru un formular de înregistrare live.

### Adăugarea unui comutator de selecție a perioadei {#adding-a-period-selection-toggle}

Dacă ați configurat [Variații de preț](creating-your-first-subscription-product#price-variations) pentru produsele dvs. (de ex. prețuri lunare și anuale), puteți adăuga un câmp **Selecție perioadă** în formularul dvs. de checkout. Acest câmp afișează un comutator care le permite clienților să schimbe perioadele de facturare, iar tabelul de prețuri se actualizează dinamic în timp real.

#### Pasul 1: Configurați variații de preț pentru produsele dvs. {#step-1-set-up-price-variations-on-your-products}

Înainte de a adăuga câmpul Selecție perioadă, asigurați-vă că produsele dvs. au variații de preț configurate. Mergeți la **Ultimate Multisite > Produse**, editați un produs și navigați la fila **Variații de preț** pentru a adăuga perioade alternative de facturare (de ex. Anual la un preț redus).

![Fila Variații de preț pentru un produs](/img/config/product-price-variations-tab.png)

#### Pasul 2: Adăugați câmpul Selecție perioadă în formularul dvs. de checkout {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Mergeți la **Ultimate Multisite > Checkout Forms** și editați formularul dvs. de checkout.

2. Derulați în jos până la pasul care conține câmpul **Tabel de prețuri** și faceți clic pe **Adaugă câmp nou**.

3. În dialogul de selectare a tipului de câmp, faceți clic pe **Selectare perioadă**.

![Dialogul Adaugă câmp nou care afișează Selectare perioadă](/img/config/checkout-form-add-field-dialog.png)

4. Configurați opțiunile de perioadă. Fiecare opțiune are nevoie de:
   * **Durată**: Numărul (de ex. `1`)
   * **Unitate de durată**: Tipul perioadei (Zile, Săptămâni, Luni sau Ani)
   * **Etichetă**: Textul pe care îl vor vedea clienții (de ex. „Lunar”, „Anual”)

5. Faceți clic pe **+ Adaugă opțiune** pentru a adăuga mai multe alegeri de perioadă. Aceste opțiuni trebuie să corespundă variațiilor de preț pe care le-ați configurat pentru produsele dvs.

![Setările câmpului Selecție perioadă](/img/config/period-selection-field-settings.png)

6. Alegeți un **Șablon selector de perioadă** (Clean este implicit, care redă un selector simplu stilizat, pregătit pentru CSS personalizat).

7. Faceți clic pe **Salvează câmpul**.

#### Pasul 3: Poziționați câmpul deasupra tabelului de prețuri {#step-3-position-the-field-above-the-pricing-table}

Pentru cea mai bună experiență de utilizare, asigurați-vă că apare câmpul Selecție perioadă **înainte** de câmpul Tabel de prețuri în pasul dvs. de checkout. Puteți trage câmpurile pentru a le reordona în editorul formularului de checkout. Astfel, clienții aleg mai întâi o perioadă de facturare și apoi văd prețurile pentru acea perioadă.

![Editorul formularului de checkout care afișează ordinea câmpurilor](/img/config/checkout-form-editor-with-fields.png)

#### Cum funcționează în frontend {#how-it-works-on-the-frontend}

După configurare, clienții care vă vizitează pagina de înregistrare vor vedea selectorul de perioadă deasupra tabelului de prețuri. Când fac clic pe o altă perioadă de facturare:

  * Tabelul de prețuri se actualizează instantaneu pentru a afișa prețurile pentru perioada selectată (nu este necesară reîncărcarea paginii).
  * Dacă **Forțează durate diferite** este dezactivat în câmpul Tabel de prețuri, produsele fără o variație de preț pentru perioada selectată vor fi ascunse.
  * Dacă **Forțează durate diferite** este activat, toate produsele rămân vizibile chiar dacă nu au o variație pentru perioada selectată (vor afișa prețul lor implicit).

#### Preselectarea unei perioade de facturare prin URL {#pre-selecting-a-billing-period-via-url}

De asemenea, puteți preselecta un produs și o perioadă de facturare prin URL. Ultimate Multisite acceptă aceste modele de URL:

  * `/register/premium` — Preselectează doar produsul „Premium”
  * `/register/premium/12` — Preselectează produsul și durata de 12 luni
  * `/register/premium/1/year` — Preselectează produsul cu o durată de 1 an

### Câmpul de selecție a șablonului {#the-template-selection-field}

Câmpul **Selecție șablon** le permite clienților să aleagă un șablon de site în timpul checkout-ului. Acum este inclus implicit în șabloanele de formular de checkout **cu un singur pas** și **cu mai mulți pași** adăugate în Ultimate Multisite v2.6.1.

#### Adăugarea manuală a câmpului {#adding-the-field-manually}

Dacă lucrați cu un formular care a fost creat înainte de v2.6.1 sau a pornit de la un șablon gol:

1. Mergeți la **Ultimate Multisite > Checkout Forms** și editați formularul dvs. de checkout.
2. În pasul în care sunt colectate detaliile site-ului, faceți clic pe **Adaugă câmp nou**.
3. Selectați **Selecție șablon** din dialogul de tip de câmp.
4. Configurați câmpul:
   - **Etichetă** — Titlul pe care clienții îl văd deasupra grilei de șabloane (de ex. „Alegeți un șablon de site”).
   - **Obligatoriu** — Dacă clienții trebuie să selecteze un șablon înainte de a continua.

#### Cum funcționează {#how-it-works}

Când un client alege un șablon în timpul checkout-ului, Ultimate Multisite îl folosește la furnizarea noului său site. Șabloanele afișate provin din lista dvs. **Șabloane de site** (**Ultimate Multisite > Site Templates**). Doar șabloanele marcate ca disponibile pentru clienți apar aici.

### Domenii de bază pentru formularele de checkout {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 tratează domeniile configurate în câmpurile **URL site** ale formularului de checkout ca domenii de bază ale rețelei. Folosiți setările pentru domenii disponibile ale câmpului atunci când doriți ca clienții să creeze site-uri sub unul sau mai multe domenii de înregistrare partajate, cum ar fi `example.com` și `sites.example.com`.

Domeniile de bază partajate pentru formularul de checkout nu sunt tratate ca mapări de domenii personalizate per site. Când un client creează un site în subdirector pe una dintre aceste baze, Ultimate Multisite nu creează o înregistrare de domeniu mapat care ar face ca gazda partajată să aparțină doar acelui singur site. Gazda partajată rămâne disponibilă pentru site-urile surori care folosesc aceeași bază de formular de checkout.

Păstrați domeniile personalizate pentru gazde mapate per client, cum ar fi `customer-example.com`. Păstrați domeniile de bază pentru formularul de checkout pentru gazdele de înregistrare partajate pe care multe site-uri le pot folosi.

#### Eliminarea câmpului {#removing-the-field}

Dacă nu oferiți șabloane de site, eliminați câmpul Template Selection din formularul dvs. Clienții vor primi apoi șablonul implicit configurat sub **Ultimate Multisite > Settings > Site Templates**.
