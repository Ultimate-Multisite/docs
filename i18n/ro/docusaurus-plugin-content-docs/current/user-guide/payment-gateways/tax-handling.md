---
title: Gestionarea taxelor
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Gestionarea taxelor

Ultimate Multisite are un modul de colectare a taxelor integrat în plugin-ul principal, astfel încât, dacă trebuie să colectezi taxe de vânzare pentru planurile, pachetele și serviciile tale, poți face acest lucru cu ușurință fără a instala extensii suplimentare.

Pentru companiile din Europa, oferim un **add-on** care adaugă instrumente și funcționalități pentru a facilita **conformitatea cu TVA**.

Ultimate Multisite nu depune și nu virează taxele în numele tău către autorități; pur și simplu te ajutăm să colectezi taxele corespunzătoare în momentul tranzacției. **Va trebui în continuare să virezi taxele pe cont propriu.**

## Activarea colectării taxelor

Colectarea taxelor nu este activată implicit. Pentru a o activa, trebuie să accesezi **Ultimate Multisite > Settings > Taxes** și să comuți pentru a activa opțiunea Enable Taxes.

![Comutatorul Enable Taxes în setările de taxe](/img/config/settings-taxes.png)

### Taxe excluse vs. Taxe incluse

Implicit, toate prețurile produselor tale sunt fără taxe, ceea ce înseamnă că taxele **nu sunt incluse** în prețul produsului. Dacă stabilim că un client trebuie să plătească taxe pentru o anumită achiziție, vom adăuga taxele **peste** subtotal.

Dacă preferi să ai taxele incluse în prețul produsului, poți face acest lucru activând setarea **Inclusive Tax**.

![Comutatorul pentru setarea Inclusive Tax](/img/config/settings-taxes.png)

Nu uita să **salvezi** modificările făcute.

### 

## Crearea cotelor de impozitare

După ce activezi Colectarea Taxelor, va trebui să creezi cote de impozitare pentru locații specifice folosind editorul nostru de cote de impozitare.

Poți accesa editorul făcând clic pe butonul **Manage Tax Rates** din bara laterală a paginii de setări Taxes.

![Butonul Manage Tax Rates în bara laterală](/img/config/settings-taxes.png)

În pagina editorului de cote de impozitare, poți adăuga noi cote făcând clic pe butonul **Add new Row**.

![Editorul de cote de impozitare cu butonul Add new Row](/img/config/settings-taxes.png)

Va trebui să dai fiecărei cote de impozitare un **titlu** (folosit pe facturi). Apoi poți alege **țara** (obligatoriu), **județul** și **orașul** (ambele opționale) unde se va aplica această taxă. În final, adaugă **cota de impozitare în procente**.

### Categorii de taxe

Poți crea, de asemenea, mai multe Categorii de Taxe, pentru a adăuga cote de impozitare diferite pentru tipuri diferite de produse.

Fă clic pe **Add new Tax Category**, apoi scrie numele categoriei și apasă **Create**.

![Butonul Add new Tax Category](/img/config/settings-taxes.png)

![Crearea unei noi categorii de taxe](/img/config/settings-taxes.png)

Pentru a naviga între categorii, fă clic pe **Switch** și selectează categoria la care vrei să adaugi taxe noi.

![Comutarea între categoriile de taxe](/img/config/settings-taxes.png)

![Selectarea unei categorii de taxe pentru vizualizare](/img/config/settings-taxes.png)

Poți seta categoria de taxe pentru un anumit produs accesând **pagina de editare a produsului** și apoi tab-ul Taxes.

![Tab-ul Taxes al produsului cu categoria de taxe și comutatorul taxable](/img/config/product-taxes.png)

Pe același ecran, poți dezactiva comutatorul **Is Taxable?** pentru a indica Ultimate Multisite că nu trebuie să colecteze taxe pentru acel produs.

## Suport pentru TVA european

După cum am menționat anterior, avem un add-on disponibil pentru clienții din UE care au cerințe suplimentare din cauza reglementărilor europene privind TVA.

Instrumentele noastre pentru TVA ajută cu câteva aspecte importante:

  * Încărcarea ușoară a cotelor de TVA din UE;

  * Colectarea și validarea numărului de TVA - și taxare inversă pentru entitățile scutite de TVA (cum ar fi companiile cu numere de TVA valide);

Pentru a instala acest add-on, accesează **Ultimate Multisite > Settings** și apoi fă clic pe link-ul **Check our Add-ons** din bara laterală.

![Pagina de setări cu link-ul add-ons în bara laterală](/img/config/settings-taxes.png)

Vei fi redirecționat către pagina noastră de add-on-uri. Acolo, poți căuta **Ultimate Multisite VAT add-on** și îl poți instala.

![Add-on-ul VAT pe pagina de add-on-uri](/img/config/settings-taxes.png)

![Dialogul de instalare a add-on-ului VAT](/img/config/settings-taxes.png)

Apoi, accesează **Network Admin > Plugins** și activează add-on-ul la nivel de rețea.

![Activarea la nivel de rețea a add-on-ului VAT](/img/config/settings-taxes.png)

Dacă te întorci la **tab-ul Tax Settings**, vei vedea opțiuni noi disponibile. Activează opțiunea **Enable VAT Support** pentru a activa noile instrumente VAT. Nu uita să **salvezi** setările!

![Comutatorul Enable VAT Support în setările de taxe](/img/config/settings-taxes.png)

### Preluarea cotelor de TVA

Unul dintre instrumentele pe care le adaugă integrarea noastră este posibilitatea de a încărca cotele de impozitare pentru statele membre UE. Acest lucru se poate face accesând pagina editorului de cote de impozitare după activarea suportului pentru TVA UE.

În partea de jos a paginii, vei vedea opțiunile de preluare a TVA. Selectând un tip de cotă și făcând clic pe butonul **Update EU VAT Rates**, vor fi preluate și completate automat în tabel cotele de impozitare pentru fiecare stat membru UE. Apoi, trebuie doar să salvezi.

### ![Opțiunile de preluare a cotelor VAT cu butonul Update EU VAT Rates](/img/config/settings-taxes.png)

Poți edita valorile și după preluare. Pentru a face acest lucru, pur și simplu editează linia din tabel de care ai nevoie și fă clic pentru a salva noile valori.

### Validarea TVA

Când suportul VAT este activat, Ultimate Multisite va adăuga un câmp suplimentar în formularul de checkout, sub câmpul adresei de facturare. Câmpul va apărea doar pentru clienții din UE.

![Câmpul pentru numărul de TVA în formularul de checkout](/img/config/settings-taxes.png)

Ultimate Multisite va valida apoi Numărul de TVA și, dacă acesta este valid, se aplică mecanismul de taxare inversă și cota de impozitare este setată la 0% pentru acea comandă.
