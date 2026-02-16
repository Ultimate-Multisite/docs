---
title: Șabloane de site
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Șabloane de Site (v2)

_**NOTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x. Dacă utilizezi versiunea 1.x,**_ **consultă acest articol** _**.**_

Scopul nostru când creăm o rețea premium cu Ultimate Multisite este să automatizăm cât mai multe procese posibil, oferind în același timp clienților noștri flexibilitate și diferite opțiuni din care să aleagă când își creează site-urile. O modalitate simplă de a atinge acest echilibru este să folosim funcționalitatea Șabloane de Site din Ultimate Multisite.

## Ce este un Șablon de Site?

Așa cum sugerează și numele, un Șablon de Site este un site de bază care poate fi folosit ca punct de plecare la crearea de noi site-uri în rețeaua ta.

Asta înseamnă că poți crea un site de bază, activa diferite plugin-uri, seta o temă activă și personaliza totul cum dorești. Apoi, când clientul tău creează un cont nou, în loc să primească un site WordPress implicit fără conținut relevant, va primi o copie a site-ului tău de bază cu toate personalizările și conținutul deja configurate.

Sună excelent, dar cum creez un șablon de site nou? Este cât se poate de simplu.

## Crearea și Editarea unui nou Șablon de Site

Șabloanele de Site sunt pur și simplu site-uri normale din rețeaua ta. Pentru a crea un șablon nou, mergi la **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Butonul Add site în pagina cu lista de site-uri](/img/config/site-templates-list.png)**

Se va deschide o fereastră modală care îți va cere **Site title, Site Domain/path** și **Site type**. În câmpul drop-down **Site Type** asigură-te că selectezi **Site Template** *.*

_![Fereastra modală Add site template cu dropdown-ul site type](/img/config/site-templates-list.png)_

În partea de jos a formularului, vei observa un comutator **Copy Site**. Acesta îți va permite să creezi un șablon de site nou bazat pe un șablon de site existent ca punct de plecare, ajutându-te să economisești timp în loc să creezi un șablon de la zero.

![Fereastra modală Add site template cu comutatorul copy site](/img/config/site-templates-list.png)

### Personalizarea conținutului unui Șablon de Site

Pentru a-ți personaliza șablonul de site, navighează pur și simplu la panoul său de dashboard și fă modificările necesare. Poți crea articole noi, pagini, activa plugin-uri și schimba tema activă. Poți chiar să mergi în Customizer și să modifici tot felul de opțiuni de personalizare.

Toate aceste date vor fi copiate când un client creează un site nou bazat pe acel Șablon de Site.

### Opțiuni Avansate

Dacă te descurci cu puțin cod personalizat, poți folosi API-ul nostru de Search and Replace pentru a înlocui automat informații pe noul site după crearea acestuia. Acest lucru este util pentru lucruri precum înlocuirea numelor de companii pe o pagină Despre noi, înlocuirea email-ului de contact pe pagina de Contact, etc.

### Utilizarea Șabloanelor de Site

Bun, deci ai creat mai multe Șabloane de Site diferite cu design-uri, teme și setări diferite. Cum le faci utile în rețeaua ta acum?

Practic, există două abordări pe care le poți folosi acum (nu simultan):

  * Atașarea unui Șablon de Site la fiecare dintre Planurile tale

**SAU**

  * Permiterea clienților tăi să aleagă singuri șabloanele de site în timpul înregistrării.

#### Modul 1: Atribuie Șablon de Site

În acest mod, clienții tăi nu vor putea alege un șablon când își creează contul, ci tu vei defini care șablon ar trebui folosit pentru fiecare dintre Planurile tale.

Pentru a face asta, trebuie să mergi la **Ultimate Multisite > Products > Edit**.

![Editare produs pentru atribuirea șablonului de site](/img/config/product-site-templates.png)

Aceasta te va duce la pagina **Edit Product**. În secțiunea **Product Options**, găsește tab-ul **Site template** și selectează opțiunea **Assign Site Template** din câmpul drop-down. Aceasta va afișa lista de șabloane de site disponibile și îți va permite să selectezi un singur șablon de site dedicat produsului.

![Tab-ul site template al produsului cu opțiunea assign site template](/img/config/product-site-templates.png)

#### Modul 2: Alege Șablonul de Site Disponibil

În acest mod, vei oferi clienților tăi posibilitatea de a alege în timpul procesului de înregistrare. Ei vor putea selecta din diferitele șabloane de site pe care le definești în setările produsului. Ai opțiunea de a limita șabloanele de site din care pot alege pentru produsul selectat. Aceasta îți permite să ai seturi diferite de șabloane de site pentru fiecare produs, ceea ce este ideal pentru a evidenția funcții și caracteristici diferite pentru un produs cu preț mai mare.

Pe pagina **Edit Product**. În secțiunea **Product Options**, găsește tab-ul **Site template** și selectează opțiunea **Choose Available Site Template** din câmpul drop-down. Aceasta va afișa lista de șabloane de site disponibile și îți va permite să selectezi șabloanele de site pe care dorești să le faci disponibile. Poți face asta alegând Comportamentul lor: **Available** dacă vrei ca șablonul de site să fie inclus în listă. _**Not Available**_ dacă vrei ca șablonul de site să nu apară ca opțiune. Și **Pre-selected** dacă dorești ca unul dintre șabloanele de site listate să fie selectat implicit.

![Alegerea șabloanelor de site disponibile cu opțiuni de comportament](/img/config/product-site-templates.png)

### Modul Implicit: Selecția șablonului de site în formularul de Checkout

Dacă dorești ca toate șabloanele tale de site să fie disponibile în timpul înregistrării, sau poate preferi să nu faci munca suplimentară de a atribui sau specifica șabloane de site pentru fiecare produs pe care îl creezi. Atunci poți pur și simplu să setezi selecția șablonului de site în **Checkout Form**. Pentru a face asta, trebuie doar să mergi la **Ultimate Multisite > Checkout Forms**. Apoi apasă **Edit** sub formularul pe care dorești să îl configurezi.

![Pagina cu lista formularelor de checkout](/img/config/checkout-forms-list.png)

Aceasta va afișa pagina **Edit Checkout Form**. Găsește câmpul **Template Selection** și apasă **Edit** sub acesta.

![Editorul formularului de checkout cu câmpul template selection](/img/config/checkout-form-editor.png)

Va apărea o fereastră modală. În câmpul **Template Sites** poți selecta și lista toate șabloanele de site pe care dorești să le faci disponibile în timpul înregistrării. Șabloanele de site pe care le specifici aici vor fi disponibile indiferent de produsul selectat de utilizator.

![Câmpul template sites în editorul formularului de checkout](/img/config/checkout-form-step.png)

### Opțiuni pentru Șabloanele de Site

Există și alte funcții pentru șabloanele de site disponibile pe care le poți activa sau dezactiva în setările Ultimate Multisite.

![Opțiuni pentru șabloanele de site în setările Ultimate Multisite](/img/config/settings-sites.png)

#### Permite Schimbarea Șablonului

Activarea acestei opțiuni va permite clienților tăi să schimbe șablonul pe care l-au ales în timpul procesului de înregistrare după ce contul și site-ul sunt create. Acest lucru este util din punctul de vedere al clientului, deoarece le permite să re-selecteze un șablon dacă descoperă ulterior că alegerea lor inițială nu a fost cea mai bună pentru nevoile lor particulare.

#### Permite Utilizatorilor să folosească Site-ul lor ca șabloane

Deoarece utilizatorii subsite-urilor au petrecut timp construind și proiectând propriul site, ar putea dori să îl cloneze și să îl folosească ca unul dintre șabloanele de site disponibile la crearea unui alt subsite în rețeaua ta. Această opțiune le va permite să realizeze asta.

#### Copiază Media la Duplicarea Șablonului

Bifarea acestei opțiuni va copia fișierele media încărcate pe site-ul șablon pe site-ul nou creat. Aceasta poate fi suprascrisă pentru fiecare dintre planuri.

#### **Împiedică Motoarele de Căutare să indexeze Șabloanele de Site**

Șabloanele de site, așa cum am discutat în acest articol, sunt site-uri de bază dar fac totuși parte din rețeaua ta, ceea ce înseamnă că sunt încă disponibile pentru motoarele de căutare. Această opțiune îți va permite să ascunzi șabloanele de site astfel încât motoarele de căutare să nu le indexeze.

## Pre-popularea Șabloanelor de Site cu înlocuire automată

Una dintre cele mai puternice funcționalități ale Ultimate Multisite este capacitatea de a adăuga câmpuri arbitrare de text, culoare și selectare în formularul de înregistrare. Odată ce avem acele date capturate, le putem folosi pentru a pre-popula conținutul în anumite părți ale șablonului de site selectat. Apoi, când noul site este publicat, Ultimate Multisite va înlocui placeholder-ele cu informațiile reale introduse în timpul înregistrării.

De exemplu, dacă dorești să obții numele companiei utilizatorului final în timpul înregistrării și să pui automat numele companiei pe pagina principală. Pe pagina principală a site-ului tău șablon trebuie să adaugi placeholder-ele, ca în imaginea de mai jos (placeholder-ele trebuie adăugate între acolade duble - {{placeholder_name}}).

![Pagina principală cu text placeholder între acolade](/img/config/site-templates-list.png)

Apoi, poți adăuga pur și simplu un câmp de înregistrare corespunzător în formularul tău de checkout pentru a captura acele date:

![Formularul de checkout cu câmpul de înregistrare corespunzător](/img/config/checkout-form-editor.png)

Clientul tău va putea apoi să completeze acel câmp în timpul înregistrării.

![Câmpul de înregistrare completat de client](/img/config/checkout-form-step.png)

![Previzualizarea formularului de înregistrare](/img/config/checkout-form-editor.png)

Ultimate Multisite va înlocui apoi automat placeholder-ele cu datele furnizate de client.

![Placeholder-ele înlocuite cu datele clientului pe site](/img/config/site-templates-list.png)

### Rezolvarea problemei „șablon plin de placeholder-e"

Toate acestea sunt grozave, dar ne confruntăm cu o problemă neplăcută: acum șabloanele noastre de site - care pot fi vizitate de clienții noștri - sunt pline de placeholder-e urâte care nu spun prea multe.

Pentru a rezolva asta, oferim opțiunea de a seta valori false pentru placeholder-e, și folosim acele valori pentru a căuta și înlocui conținutul lor pe site-urile șablon în timp ce clienții tăi le vizitează.

Poți accesa editorul de placeholder-e pentru șabloane mergând la **Ultimate Multisite > Settings > Sites**, și apoi, în bara laterală, apasă pe link-ul **Edit Placeholders**.

![Setările placeholder-elor în pagina de setări Sites](/img/config/settings-sites.png)

Aceasta te va duce la editorul de conținut pentru placeholder-e, unde poți adăuga placeholder-e și conținutul lor corespunzător.

![Editorul de conținut pentru placeholder-ele șabloanelor](/img/config/settings-sites.png)
