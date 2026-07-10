---
title: Șabloane de site
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Șabloane de site (v2) {#site-templates-v2}

_**NOTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x. Dacă folosești versiunea 1.x,**_ **vezi acest articol** _**.**_

Scopul nostru atunci când creăm o rețea premium cu Ultimate Multisite este să automatizăm cât mai multe procese posibil, oferindu-le în același timp clienților noștri flexibilitate și opțiuni diferite din care să aleagă atunci când își creează site-urile. O modalitate simplă de a obține acest echilibru este să folosești funcționalitatea Șabloane de site din Ultimate Multisite.

## Ce este un Șablon de site? {#what-is-a-site-template}

Așa cum sugerează numele, un Șablon de site este un site boilerplate care poate fi folosit ca bază atunci când creezi site-uri noi în rețeaua ta.

Aceasta înseamnă că poți crea un site de bază, activa diferite pluginuri, seta o temă activă și îl poți personaliza în orice mod dorești. Apoi, când clientul tău creează un cont nou, în loc să primească un site WordPress implicit, fără conținut semnificativ în interior, va primi o copie a site-ului tău de bază, cu toate personalizările și conținutul deja pregătite.

Sună grozav, dar cum creez un șablon de site nou? Este cât se poate de simplu.

## Crearea și editarea unui Șablon de site nou {#creating-and-editing-a-new-site-template}

Șabloanele de site sunt doar site-uri normale în rețeaua ta. Pentru a crea un șablon nou, poți merge pur și simplu la **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Butonul de adăugare site din pagina cu lista de site-uri](/img/config/site-templates-list.png)**

Aceasta va deschide o fereastră modală în care ți se vor cere **Titlul site-ului, Domeniul/calea site-ului,** și **Tipul site-ului**. În câmpul derulant **Tipul site-ului**, asigură-te că selectezi **Șablon de site** *.*

_![Fereastră modală de adăugare șablon de site cu dropdown pentru tipul site-ului](/img/config/site-templates-list.png)_

Poți adăuga și o descriere vizibilă pentru client, pentru a explica ce include șablonul:

![Câmp de descriere a șablonului de site pe ecranul de editare a șablonului de site](/img/config/site-template-edit-description.png)

În partea de jos a formularului, vei observa un comutator **Copiază site-ul**. Acesta îți va permite să creezi un șablon de site nou pe baza unui șablon de site existent, ca punct de pornire, pentru a te ajuta să economisești timp în loc să creezi un șablon de site de la zero.

![Fereastră modală de adăugare șablon de site cu comutator de copiere site](/img/config/site-templates-list.png)

### Personalizarea conținutului unui Șablon de site {#customizing-the-contents-of-a-site-template}

Pentru a-ți personaliza șablonul de site, navighează pur și simplu la panoul său Dashboard și fă modificările de care ai nevoie. Poți crea articole noi, pagini, activa pluginuri și schimba tema activă. Poți chiar să mergi la Customizer și să schimbi tot felul de opțiuni de personalizare.

![Interfață de editare a șablonului de site](/img/config/site-template-edit.png)

Toate aceste date vor fi copiate atunci când un client creează un site nou bazat pe acel Șablon de site.

### Opțiuni avansate {#advanced-options}

Dacă te pricepi la puțin cod personalizat, poți folosi API-ul nostru de Căutare și Înlocuire pentru a înlocui automat informații pe site-ul nou după crearea acestuia. Acest lucru este util pentru lucruri precum înlocuirea numelor de companii pe o pagină Despre, înlocuirea e-mailului de contact pe pagina Contact etc.

### Utilizarea Șabloanelor de site {#using-site-templates}

Ok, deci ai creat o grămadă de Șabloane de site diferite, cu designuri, teme și setări diferite. Cum le faci utile în rețeaua ta acum?

Practic, există două abordări pe care le poți folosi acum (nu simultan):

  * Atașarea unui Șablon de site la fiecare dintre Planurile tale

**SAU**

  * Permiterea clienților tăi să aleagă singuri șabloanele de site în timpul înregistrării.

#### Modul 1: Atribuie Șablon de site {#mode-1-assign-site-template}

În acest mod, clienții tăi nu vor putea alege un șablon atunci când creează un cont, ci vei defini tu ce șablon ar trebui folosit pentru fiecare dintre Planurile tale.

Pentru a face acest lucru, va trebui să mergi la **Ultimate Multisite > Products > Edit**.

![Editează produsul pentru a atribui șablonul de site](/img/config/product-site-templates.png)

Aceasta te va duce la pagina **Editează produsul**. În secțiunea **Opțiuni produs**, găsește fila **Șablon de site** și selectează opțiunea **Atribuie Șablon de site** din câmpul derulant. Aceasta va afișa lista șabloanelor de site disponibile și îți va permite să selectezi un singur șablon de site dedicat produsului.

![Fila șablon de site a produsului cu opțiunea de atribuire șablon de site](/img/config/product-site-templates.png)

#### Modul 2: Alege Șablonul de site disponibil {#mode-2-choose-available-site-template}

În acest mod, le vei oferi clienților tăi o opțiune în timpul procesului de înregistrare. Ei vor putea selecta dintre diferite șabloane de site pe care le definești în setările produsului. Ai o opțiune pentru a limita șabloanele de site dintre care pot alege în cadrul produsului selectat. Acest lucru îți va permite să ai seturi diferite de șabloane de site pentru fiecare produs, ceea ce este ideal pentru a evidenția funcții și caracteristici diferite pentru un produs cu preț mai mare.

Pe pagina **Editează produsul**. În secțiunea **Opțiuni produs**, găsește fila **Șablon de site** și selectează opțiunea **Alege Șablonul de site disponibil** din câmpul derulant. Aceasta va afișa lista șabloanelor de site disponibile și îți va permite să selectezi șablonul de site pe care dorești să fie disponibil. Poți face acest lucru alegându-i Comportamentul: **Disponibil** dacă vrei ca șablonul de site să fie inclus în listă. _**Indisponibil**_ dacă vrei ca șablonul de site să nu apară ca opțiune. Și **Preselectat** dacă dorești ca unul dintre șabloanele de site listate să fie selectat implicit.

![Alege șabloanele de site disponibile cu opțiuni de comportament](/img/config/product-site-templates.png)

### Modul implicit: selectarea șablonului de site în formularul de checkout {#default-mode-site-template-selection-on-the-checkout-form}

Dacă dorești ca toate șabloanele tale de site să fie disponibile în timpul înregistrării sau poate nu preferi să faci munca suplimentară de a atribui ori specifica șabloane de site pentru fiecare produs pe care îl creezi, atunci poți seta pur și simplu selectarea șablonului de site în **Checkout Form**. Pentru a face acest lucru, mergi la **Ultimate Multisite > Checkout Forms** și fă clic pe **Edit** sub formularul pe care dorești să îl configurezi.

Aceasta va afișa pagina **Editează Checkout Form**. Găsește câmpul **Selecție șablon** și fă clic pe **Edit** sub acesta.

Va apărea o fereastră modală. Sub câmpul **Template Sites** poți selecta și lista toate șabloanele de site pe care dorești să le faci disponibile în timpul înregistrării. Șabloanele de site pe care le specifici de aici vor fi disponibile indiferent de produsul pe care l-a selectat utilizatorul.

![Câmp de selecție a șablonului în editorul formularului de checkout](/img/config/checkout-form-template-step.png)

Pe frontend, clienții văd selectorul de șablon în timpul checkout-ului și pot alege designul inițial pentru noul lor site.

![Selector de șablon pe frontend în timpul înregistrării](/img/config/frontend-template-chooser.png)

### Opțiuni pentru șablonul de site {#site-template-options}

Există și alte funcții pentru șabloane de site disponibile, pe care le poți activa sau dezactiva în setările Ultimate Multisite.

![Opțiuni pentru șabloane de site în setările Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Permite schimbarea șablonului {#allow-template-switching}

Activarea acestei opțiuni le va permite clienților tăi să schimbe șablonul pe care îl aleg în timpul procesului de înscriere, după ce Account și site-ul sunt create. Acest lucru este util din perspectiva clientului, deoarece îi permite să re-selecteze un șablon dacă descoperă mai târziu că alegerea inițială nu a fost cea mai bună pentru nevoile sale specifice.

#### Permite utilizatorilor să își folosească site-ul ca șabloane {#allow-users-to-use-their-site-as-templates}

Deoarece utilizatorii subsite au petrecut timp construindu-și și proiectându-și propriul site, este posibil să dorească să îl cloneze și să îl folosească drept unul dintre șabloanele de site disponibile la crearea unui alt subsite în rețeaua ta. Această opțiune le va permite să realizeze acest lucru.

#### Copiază media la duplicarea șablonului {#copy-media-on-template-duplication}

Bifarea acestei opțiuni va copia fișierele media încărcate pe site-ul șablon către site-ul nou creat. Acest lucru poate fi suprascris pentru fiecare dintre planuri.

#### **Împiedică motoarele de căutare să indexeze șabloanele de site** {#prevent-search-engines-from-indexing-site-templates}

Șabloanele de site discutate în acest articol sunt boilerplate, dar fac totuși parte din rețeaua ta, ceea ce înseamnă că sunt încă disponibile pentru a fi găsite de motoarele de căutare. Această opțiune îți va permite să ascunzi șabloanele de site, astfel încât motoarele de căutare să le poată indexa.

## Pre-completarea șabloanelor de site cu căutare și înlocuire automată {#pre-populating-site-templates-with-auto-search-and-replace}

Una dintre cele mai puternice funcționalități ale Ultimate Multisite este capacitatea de a adăuga câmpuri arbitrare de text, culoare și selecție în formularul de înregistrare. Odată ce am capturat aceste date, le putem folosi pentru a pre-completa conținutul în anumite părți ale șablonului de site selectat. Apoi, când noul site este publicat, Ultimate Multisite va înlocui placeholder-ele cu informațiile reale introduse în timpul înregistrării.

De exemplu, dacă dorești să obții numele companiei utilizatorului final în timpul înregistrării și să pui automat numele companiei pe pagina principală. Pe pagina principală a site-ului șablon trebuie să adaugi placeholder-ele, ca în imaginea de mai jos (placeholder-ele trebuie adăugate înconjurate de acolade duble - {{placeholder_name}}).

![Pagină principală cu text placeholder între acolade](/img/config/site-templates-list.png)

Apoi, poți pur și simplu să adaugi un câmp de înregistrare corespunzător în formularul tău de checkout pentru a captura acele date. Același editor al formularului de checkout folosit pentru selecția șablonului îți permite să plasezi câmpuri personalizate alături de selectorul de șablon:

![Selecția șablonului și câmpuri de înregistrare în editorul formularului de checkout](/img/config/checkout-form-template-step.png)

Clientul tău va putea apoi să completeze acel câmp în timpul înregistrării.

![Formular de checkout pe frontend cu selector de șablon](/img/config/frontend-template-chooser.png)

Ultimate Multisite va înlocui apoi automat placeholder-ele cu datele furnizate de client.

![Placeholder-e înlocuite cu datele clientului pe site](/img/config/site-templates-list.png)

### Rezolvarea problemei „șablon plin de placeholder-e” {#solving-the-template-full-of-placeholders-problem}

Toate acestea sunt grozave, dar ne confruntăm cu o problemă neplăcută: acum șabloanele noastre de site - care pot fi vizitate de clienții noștri - sunt pline de placeholder-e urâte, care nu spun mare lucru.

Pentru a rezolva asta, oferim opțiunea de a seta valori fictive pentru placeholder-e și folosim acele valori pentru a căuta și înlocui conținutul lor pe site-urile șablon în timp ce clienții tăi le vizitează.

Poți avea acces la editorul placeholder-elor de șablon mergând la **Ultimate Multisite > Settings > Sites**, iar apoi, în bara laterală, făcând clic pe linkul **Edit Placeholders**.

![Setări pentru șabloane de site în pagina de setări Sites](/img/config/settings-sites-templates-section.png)

Aceasta te va duce la editorul de conținut al placeholder-elor, unde poți adăuga placeholder-e și conținutul lor respectiv.

![Punct de intrare în editorul de conținut al placeholder-elor de șablon](/img/config/settings-sites-templates-section.png)
