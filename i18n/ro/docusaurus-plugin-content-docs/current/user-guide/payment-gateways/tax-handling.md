---
title: Gestionarea taxelor
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Gestionarea taxelor

Ultimate Multisite are un modul de colectare a taxelor integrat în pluginul nostru de bază, așa că, dacă trebuie să colectezi taxe pe vânzări pentru planurile, pachetele și serviciile tale, poți face acest lucru cu ușurință fără a recurge la instalarea vreunor suplimente.

Pentru companiile localizate în Europa, oferim un **supliment** care adaugă instrumente și funcționalități pentru a **susține mai bine conformitatea cu VAT**.

Ultimate Multisite nu depune și nu virează taxe în numele tău către guvern; noi te ajutăm doar să colectezi taxele corespunzătoare în momentul tranzacției. **Va trebui în continuare să virezi taxele pe cont propriu.**

## Activarea colectării taxelor {#enabling-tax-collection}

Colectarea taxelor nu este activată implicit. Pentru a o activa, trebuie să mergi la **Ultimate Multisite > Setări > Taxe** și să comuți pentru a activa setarea Activează taxele.

![Comutatorul Activează taxele în partea de sus a paginii de setări pentru taxe](/img/config/settings-taxes-enable.png)

Iată o vedere completă a paginii de setări pentru taxe:

![Pagina completă de setări pentru taxe](/img/config/settings-taxes-full.png)

Poți vedea și setările de taxe pentru produse individuale:

![Setări de taxe pentru produse](/img/config/settings-taxes.png)

### Taxă exclusă vs. taxă inclusă {#tax-excluded-vs-tax-included}

În mod implicit, toate prețurile produselor tale sunt fără taxe, ceea ce înseamnă că taxele **nu sunt incluse** în prețul produsului. Dacă stabilim că un client trebuie să plătească taxe pentru o anumită achiziție, vom adăuga taxele **peste** subtotal.

Dacă preferi ca taxele să fie incluse în prețul produsului tău, poți face acest lucru activând setarea **Taxă inclusă**.

![Rândul comutatorului Taxă inclusă sub setarea Activează taxele](/img/config/settings-taxes-inclusive.png)

Nu uita să **salvezi** modificările pe care le-ai făcut.

###

## Crearea cotelor de taxă {#creating-tax-rates}

După ce activezi Colectarea taxelor, va trebui să creezi cote de taxă pentru locații specifice folosind editorul nostru de cote de taxă.

Poți accesa editorul făcând clic pe butonul **Gestionează cotele de taxă** din bara laterală a paginii de setări pentru taxe.

![Linkul Gestionează cotele de taxă în panoul Cote de taxă de pe pagina de setări](/img/config/settings-taxes-manage-rates.png)

Pe pagina editorului de cote de taxă, poți adăuga cote de taxă noi făcând clic pe butonul **Adaugă rând nou**.

![Tabelul editorului de cote de taxă cu butonul Adaugă rând nou în partea de sus](/img/config/tax-rates-editor.png)

Va trebui să dai fiecărei cote de taxă un **titlu** (folosit pe facturi). Apoi poți alege **țara** (obligatorie), **statul,** și **orașul** (ambele opționale) unde această taxă va fi percepută. În final, adaugă **cota de taxă în procente**.

### Categorii de taxe {#tax-categories}

Poți crea și mai multe categorii de taxe, pentru a adăuga cote de taxă diferite pentru tipuri diferite de produse.

Fă clic pentru a **Adăuga categorie de taxe nouă** , apoi scrie numele categoriei tale și apasă **Creează**.

![Butonul Adaugă categorie de taxe nouă în partea de sus a editorului de cote de taxă](/img/config/tax-categories-add.png)

![Câmpul de introducere Nume categorie de taxe în fereastra modală de creare a categoriei](/img/config/tax-categories-create-modal.png)

Pentru a naviga prin categorii, fă clic pe **Comută** și selectează categoria la care vrei să adaugi taxe noi.

![Buton derulant Comută pentru a schimba între categorii de taxe](/img/config/tax-categories-switch.png)

![Meniu derulant selector categorie de taxe care arată categoriile disponibile](/img/config/tax-categories-select.png)

Poți seta categoria de taxe pentru un anumit produs mergând la **pagina de editare a produsului** și apoi la fila Taxe.

![Fila de taxe a produsului cu categoria de taxe și comutatorul taxabil](/img/config/product-taxes.png)

Pe același ecran, poți dezactiva comutatorul **Este taxabil?** pentru a informa Ultimate Multisite că nu ar trebui să colecteze taxe pentru acel produs specific.

## Suport pentru VAT european {#european-vat-support}

După cum am menționat anterior, avem un supliment disponibil pentru clienții din UE care au cerințe suplimentare din cauza reglementărilor europene privind VAT.

Instrumentele noastre VAT ajută la câteva lucruri importante:

  * Încărcarea ușoară a cotelor VAT din UE;

  * Colectarea și validarea numărului VAT - și taxarea inversă pentru entitățile scutite de VAT (cum ar fi companiile cu numere VAT valide);

Pentru a instala acel supliment, mergi la **Ultimate Multisite > Setări** și apoi fă clic pe linkul din bara laterală **Verifică suplimentele noastre**.

![Bara laterală a paginii de setări cu linkul Verifică suplimentele noastre](/img/config/settings-taxes-addons-link.png)

Vei fi redirecționat către pagina noastră de suplimente. Acolo, poți căuta **suplimentul Ultimate Multisite VAT** și îl poți instala.

<!-- Captură de ecran indisponibilă: dala suplimentului VAT pe pagina de suplimente -->

<!-- Captură de ecran indisponibilă: dialogul Instalează acum pentru suplimentul VAT -->

Apoi, mergi la **Administrare rețea > Pluginuri** și activează acel supliment la nivelul întregii rețele.

<!-- Captură de ecran indisponibilă: acțiunea Activează în rețea pentru suplimentul VAT pe pagina Pluginuri -->

Dacă revii la **fila Setări taxe** , vei vedea opțiuni noi disponibile. Activează opțiunea **Activează suportul VAT** pentru a activa noile instrumente VAT. Nu uita să îți **salvezi** setările!

<!-- Captură de ecran indisponibilă: comutatorul Activează suportul VAT în setările de taxe după activarea suplimentului -->

### Preluarea cotelor de taxă VAT {#pulling-on-vat-tax-rates}

Unul dintre instrumentele pe care le adaugă integrarea noastră este posibilitatea de a încărca cotele de taxă pentru statele membre UE. Acest lucru se poate face vizitând pagina editorului de cote de taxă după activarea suportului VAT UE.

În partea de jos a paginii, vei vedea opțiunile de preluare VAT. Selectarea unui tip de cotă și clicul pe butonul **Actualizează cotele VAT UE** vor prelua și vor popula automat tabelul cu cotele de taxă pentru fiecare stat membru UE. Apoi, trebuie doar să salvezi.

![Butonul Actualizează cotele VAT UE în partea de jos a editorului de cote de taxă](/img/config/tax-rates-vat-pull.png)

Poți edita și valorile după ce le preiei. Pentru a face acest lucru, editează pur și simplu linia din tabel de care ai nevoie și fă clic pentru a salva noile valori.

### Validarea VAT {#vat-validation}

Când suportul VAT este activat, Ultimate Multisite va adăuga un câmp suplimentar în formularul de finalizare a comenzii, sub câmpul pentru adresa de facturare. Câmpul va apărea doar pentru clienții localizați în UE.

<!-- Captură de ecran indisponibilă: câmpul Număr VAT în formularul de finalizare a comenzii din frontend sub adresa de facturare -->

Ultimate Multisite va valida apoi numărul de TVA și, dacă acesta revine ca fiind valid, se aplică mecanismul de taxare inversă, iar cota de taxă este setată la 0% pentru acea comandă.
