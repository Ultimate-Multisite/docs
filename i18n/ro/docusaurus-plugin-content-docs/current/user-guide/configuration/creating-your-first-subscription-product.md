---
title: Crearea primului tău produs de abonament
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Crearea primului produs de abonament (v2)

_**NOTĂ IMPORTANTĂ: Acest articol este destinat exclusiv utilizatorilor Ultimate Multisite versiunea 2.x. Dacă folosești versiunea 1.x,**_ **_**consultă acest articol**_**.

Pentru a-ți lansa rețeaua și a începe să vinzi serviciile tale potențialilor utilizatori, trebuie să ai diferite opțiuni de abonament. Cum creezi aceste produse? Ce tipuri de produse poți oferi? În acest articol, vom acoperi tot ce trebuie să știi despre produse.

## Tipul produsului

Cu Ultimate Multisite poți oferi clienților tăi două categorii de produse: **planuri** și **add-on-uri** **(Order Bump)**. Add-on-urile se împart în două tipuri: **pachete** și **servicii**. Vom vedea diferențele și particularitățile lor în continuare.

  * **Planuri**: produsul fundamental al Ultimate Multisite. Clientul tău poate avea un abonament doar dacă este atașat unui plan. Un plan oferă clienților tăi unul sau mai multe site-uri (depinde de configurațiile planului tău) cu limitările pe care le setezi în pagina de editare a produsului.

  * **Pachete**: add-on-uri care influențează direct funcționalitățile planurilor Ultimate Multisite. Acestea modifică limitările sau adaugă resurse noi, plugin-uri sau teme la planul original pe care l-a cumpărat clientul tău. De exemplu, un plan de bază ar putea permite 1.000 de vizite pe lună, iar tu poți face disponibil un pachet care extinde acest număr la 10.000.

  * **Servicii:** add-on-uri care nu modifică funcționalitățile Ultimate Multisite. Sunt sarcini pe care le vei realiza pentru clientul tău în plus față de planul pe care l-a cumpărat. De exemplu, clientul tău ar putea cumpăra un plan care permite un singur site și, de asemenea, să plătească pentru un serviciu suplimentar care va realiza designul acestui site.

## Gestionarea produselor

Pentru mulți, tab-ul **Products** din Ultimate Multisite **(Ultimate Multisite > Products)** poate fi comparat cu planurile dintr-un mediu tradițional de hosting.

În cadrul Ultimate Multisite, tab-ul Products definește structura și limitările aplicabile unui produs sau serviciu specific. Astfel de structuri se extind la descrierea produsului sau serviciului, preț, taxe și permisiuni.

Această secțiune te va ghida în înțelegerea acestui element esențial al Ultimate Multisite.

![Pagina cu lista de produse](/img/config/products-list.png)

## Adăugarea produselor

Indiferent dacă este un plan, pachet sau serviciu, punctul de intrare pentru definirea unui element nou este prin **Ultimate Multisite > Products > Add Product**.

![Butonul Add Product](/img/config/product-add-button.png)

Interfața conține două secțiuni principale. În stânga sunt mai multe tab-uri care ajută la definirea produsului, iar în dreapta sunt câteva secțiuni pentru definirea prețului de bază al produsului, starea sa activă și imaginea produsului.

![Prezentare generală a paginii de editare produs](/img/config/product-edit-full.png)

### Descriere

Informațiile de bază ale produsului pot fi definite furnizând un nume și o descriere a produsului. Acești identificatori sunt afișați oriunde este necesară informația despre produs, cum ar fi selecția planului și prețului, facturi, upgrade-uri și altele.

![Secțiunea descriere produs](/img/config/product-description.png)

### Tipul de preț

În partea dreaptă a interfeței poate fi definit prețul de bază.

![Secțiunea preț și salvare](/img/config/product-pricing-save.png)

Ultimate Multisite suportă trei tipuri diferite de prețuri. Opțiunea **paid** (plătit) solicită administratorului de rețea informații privind prețul produsului și frecvența de facturare.

### Prețul

Componenta de preț definește prețul de bază al produsului și intervalul de facturare.

![Secțiunea preț și salvare](/img/config/product-pricing-save.png)

astfel, un exemplu de preț de 29,99 $ cu o setare de 1 lună va factura 29,99 $ în fiecare lună. Similar, un preț de 89,97 $ cu o setare de 3 luni va factura această sumă în fiecare trimestru.

### Cicluri de facturare

Secțiunea ciclurilor de facturare specifică frecvența intervalului de facturare menționat anterior și este în general înțeleasă în contextul contractelor sau termenilor fixi.

![Secțiunea preț și salvare](/img/config/product-pricing-save.png)

De exemplu, un preț de produs de 29,99 $ cu un interval de 1 lună și 12 cicluri de facturare ar factura 29,99 $ pe lună pentru produs pe parcursul următoarelor 12 luni. Cu alte cuvinte, o astfel de setare ar stabili un termen cu preț fix de 29,99 $ pe lună timp de 12 luni și apoi ar înceta facturarea.

### Perioada de probă

Activarea opțiunii de oferire a perioadei de probă permite administratorului de rețea să definească o perioadă de probă pentru produs.

![Secțiunea preț și salvare](/img/config/product-pricing-save.png)

În timpul perioadei de probă, clienții sunt liberi să folosească produsul și nu vor fi facturați până când perioada de probă nu a expirat.

### Taxa de configurare

Poți aplica, de asemenea, o taxă de configurare planului tău.

![Secțiunea preț și salvare](/img/config/product-pricing-save.png)

Aceasta înseamnă că clientul tău va plăti o sumă suplimentară la prima încărcare (pe lângă prețul planului) care corespunde taxei pe care ai definit-o în această secțiune.

### Activ

Comutatorul activ definește efectiv dacă produsul este disponibil clienților pentru înregistrări noi.

![Comutatorul activ](/img/config/product-active.png)

Dacă există clienți existenți pe acest plan, setarea comutatorului la starea dezactivată practic păstrează planul pentru clienții existenți, eliminându-l de la înregistrările viitoare. **Clienții existenți pe plan vor continua să fie facturați** până când vor fi trecuți la un plan nou sau eliminați din plan.

### Imaginea produsului

Butonul **Upload Image** permite administratorului de rețea să utilizeze biblioteca media pentru a selecta sau încărca o imagine a produsului.

![Secțiunea imagine produs](/img/config/product-image.png)

### Ștergere

Butonul **Delete Product** șterge produsul din sistem. Acesta apare după ce produsul este publicat.

![Secțiunea ștergere produs](/img/config/product-delete.png)

Spre deosebire de alte ștergeri, produsul nu este plasat în nicio stare de coș de gunoi. Prin urmare, odată șters, acțiunea este ireversibilă.

### Opțiunile produsului

După ce informațiile de bază ale produsului sunt definite, opțiunile produsului ajută administratorul de rețea să definească în continuare atributele specifice ale produsului.

#### General

Tab-ul **General** definește atributele generale ale produsului care nu sunt aplicabile niciunui alt tab specific produsului.

![Tab-ul General](/img/config/product-general-tab.png)

**Product slug** definește slug-ul cu care produsul este identificat în URL-uri și alte zone ale Ultimate Multisite.

Ultimate Multisite suportă mai multe tipuri de produse, și anume Plan, Package și Service. Tab-urile **Product Options** sunt ajustate dinamic în funcție de tipul de produs specificat.

**Customer Role** specifică rolul care este atribuit clientului când site-ul este creat. De obicei, pentru majoritatea administratorilor de rețea, acesta va fi valoarea implicită Ultimate Multisite sau Administrator. Rolul implicit Ultimate Multisite poate fi setat în **Ultimate Multisite > Settings > Login & Registration**.

![Setări rol client](/img/config/product-customer-role-settings.png)

#### Upgrade-uri și downgrade-uri

Acest tab specifică căile de upgrade și downgrade disponibile unui client în cadrul nivelului său specific.

Pentru a înțelege acest concept, consideră un exemplu în care o instalare Ultimate Multisite de nișă oferă soluții de management al învățării clienților săi. Pentru a realiza acest lucru, sunt definite trei planuri (Basic, Plus și Premium) și plugin-uri specifice sunt activate pentru fiecare plan (vezi mai târziu în această secțiune pentru instrucțiuni despre cum să activezi plugin-uri).

Dacă instalarea Ultimate Multisite deservește, de asemenea, site-uri de afaceri sau site-uri de eCommerce, acele planuri ar putea necesita instalarea și activarea unor plugin-uri diferite.

În această măsură, ar fi nedorit și problematic să permiți clienților eLearning să treacă la planuri de eCommerce, deoarece aceste planuri, prețuri și limitări ar putea să nu fie o potrivire adecvată.

Astfel, pentru a restricționa calea clientului și a preveni incidentele, administratorul de rețea poate defini un grup de planuri și în cadrul acelui grup poate specifica planurile la care clientul poate trece.

![Tab-ul Upgrade-uri și Downgrade-uri](/img/config/product-upgrades.png)

Pentru a defini un grup de planuri, specifică planurile compatibile în lista **plan group**. **Product order** determină cum sunt ordonate și afișate planurile de la cel mai mic la cel mai mare.

Ultimate Multisite include, de asemenea, o funcție **order bump** unde produse add-on și servicii adecvate pot fi adăugate la planuri. Acestea sunt oferite clientului ca elemente suplimentare care pot fi adăugate la planuri la checkout sau în timpul unui upgrade.

#### Variații de preț

Variațiile de preț permit administratorului de rețea să specifice niveluri alternative de prețuri în funcție de durată. Această setare face posibilă stabilirea nivelurilor de prețuri pentru 3 luni, 6 luni sau anual, sau orice altă durată și frecvență determinată de cazul de utilizare.

![Tab-ul Variații de preț](/img/config/product-price-variations.png)

Pentru a stabili variații de preț, setează comutatorul **enable price variations** la activ și apasă butonul **Add new Price Variation**.

Pentru a introduce o variație, setează durata, perioada și prețul variației. Variații suplimentare pot fi introduse apăsând din nou butonul.

![Tab-ul Variații de preț](/img/config/product-price-variations.png)

#### Taxe

Tab-ul **Taxes** se aliniază cu setările de taxe specificate în **Ultimate Multisite > Settings > Taxes** și mai specific cu ratele de taxe definite. Pentru a activa taxele și a defini ratele de taxe aplicabile, te rugăm să consulți documentația la **Ultimate Multisite: Settings**

![Tab-ul Taxe](/img/config/product-taxes.png)

Într-un exemplu anterior, am definit o rată de taxe locale de 7,25% aplicabilă clienților din California (Statele Unite ale Americii).

Odată ce rata de taxe este definită în **Ultimate Multisite > Settings > Manage Tax Rates**, aceasta este selectabilă la nivel de produs.

![Tab-ul Taxe](/img/config/product-taxes.png)

Pentru a indica că un produs este un element taxabil, setează comutatorul **Is Taxable** la activ și selectează rata de taxe aplicabilă din dropdown-ul Tax Category.

#### Template-uri de site

În esență, template-urile de site sunt site-uri WordPress complete care sunt clonate pe site-ul clientului la începutul abonamentului lor.

![Tab-ul Template-uri de site](/img/config/product-site-templates.png)

Administratorul de rețea creează și configurează site-ul template ca un site WordPress obișnuit cu teme, plugin-uri și conținut activate și configurate. Site-ul template este clonat exact clientului.

Acest tab permite administratorului de rețea să specifice comportamentul template-urilor de site la un abonament nou. Pentru a utiliza template-uri de site, setează comutatorul **allow site templates** la starea sa activă.

**Site template selection mode** definește comportamentul template-urilor de site în timpul procesului de abonare.

Setarea **Default** urmează pașii din formularul de checkout. Dacă administratorul de rețea a definit un pas de selecție a template-ului în procesul de checkout și pasul a fost definit cu template-uri, această setare va respecta directivele stabilite în pasul de checkout.

Specificarea **Assign Site Template** forțează selecția template-ului specificat. În consecință, orice pași de selecție a template-ului în procesul de checkout sunt eliminați.

În cele din urmă, **Choose Available Site Templates** suprascrie template-urile specificate în pasul de checkout cu template-urile selectate în această setare. Un template preselectat poate fi, de asemenea, definit pentru a ajuta clientul în selecție.

În cele din urmă, dacă administratorul de rețea dorește ca selecția template-ului să aibă loc în pașii de checkout, setarea '_default_' va fi suficientă. Alternativ, pentru a elimina și bloca selecția template-ului și a delega selecția către setările planului, opțiunile '_assign new template_' sau '_choose available site templates_' pot fi de dorit.

#### Site-uri

Tab-ul **Sites** face parte din funcționalitatea de limitări a Ultimate Multisite.

![Tab-ul Site-uri](/img/config/product-sites.png)

Această setare specifică numărul maxim de site-uri pe care un client le poate crea în cadrul abonamentului său.

Pentru a activa limitarea, setează comutatorul **limit sites** la starea sa activă și specifică numărul maxim de site-uri în câmpul **site allowance**.

#### Vizite

Tab-ul **Visits** este o altă parte a sistemului de limitări al Ultimate Multisite. Această setare permite contabilizarea și ulterior limitarea vizitatorilor unici pe site-ul unui client.

![Tab-ul Vizite](/img/config/product-visits.png)

Din perspectiva marketingului, administratorii de rețea pot utiliza această setare ca un mijloc de a încuraja clienții să-și upgradeze planul odată ce limitele sunt atinse. Această setare poate ajuta, de asemenea, administratorul de rețea să limiteze și să prevină traficul excesiv către site-uri pentru a conserva resursele sistemului.

Pentru a utiliza această funcție, setează comutatorul **limit unique visits** la starea sa activă și specifică numărul maxim de vizitatori unici în câmpul **unique visits quota**.

Odată ce această limită este atinsă, Ultimate Multisite va înceta să servească site-ul clientului, afișând în schimb un mesaj pentru a indica că limitele au fost depășite.

#### Utilizatori

Limitările 'Users' ale Ultimate Multisite permit administratorului de rețea să impună limite asupra numărului de utilizatori care pot fi creați și atribuiți unor roluri.

![Tab-ul Utilizatori](/img/config/product-users.png)

Pentru a activa funcția de limitări, setează comutatorul **limit user** la starea sa activă glisându-l spre dreapta.

Apoi, pentru fiecare rol care trebuie limitat, setează comutatorul de lângă el la starea activă și definește limita maximă superioară în câmpul corespunzător.

#### Tipuri de postări

Tab-ul **Post Types** permite administratorului de rețea să impună limite granulare asupra gamei extinse de tipuri de postări din WordPress.

![Tab-ul Tipuri de postări](/img/config/product-post-types.png)

Datorită construcției WordPress, postările și tipurile de postări sunt o componentă semnificativă a funcționalității sale de bază, iar astfel sistemul de limitări al Ultimate Multisite este conceput pentru a ajuta administratorul de rețea în stabilirea și menținerea limitelor.

Pentru a activa acest subsistem de limite, setează comutatorul **limit post types** la starea sa activă glisându-l spre dreapta.

Apoi, pentru fiecare tip de postare care trebuie limitat, activează-l glisând spre dreapta și specificând limita maximă superioară în câmpul corespunzător.

#### Spațiu pe disc

Tab-ul **Disk Space** permite administratorilor de rețea să restricționeze spațiul consumat de clienți.

![Tab-ul Spațiu pe disc](/img/config/product-disk-space.png)

De obicei, într-un multisite WordPress, fișierele de bază sunt partajate între toate site-urile și directoare individuale sunt create pentru fișierele media și încărcări, la care se aplică aceste setări și limitări.

Pentru a activa limitarea utilizării discului, setează comutatorul **limit disk size per site** la starea sa activă glisându-l spre dreapta.

Apoi, specifică limita maximă superioară în megabytes în câmpul **disk space allowance**.

#### Domeniu personalizat

Prin activarea acestei opțiuni poți permite domenii personalizate specific pe acest plan.

![Tab-ul Domenii personalizate](/img/config/product-custom-domains.png)

#### Teme

Tab-ul **Themes** din opțiunile produsului permite administratorului de rețea să facă teme disponibile clienților pentru selecție și să forțeze opțional starea temei.

![Tab-ul Teme](/img/config/product-themes.png)

_**Notă: Pentru ca temele să fie disponibile clienților, acestea trebuie să fie activate la nivel de rețea de către administratorul de rețea.**_

![Pagina teme rețea](/img/config/product-themes-network-enabled.png)

Opțiunea **visibility** definește dacă această temă este vizibilă sau nu clientului când vizualizează tab-ul **Appearance > Themes** în site-ul său. Setarea acestei opțiuni la **Hidden** elimină tema din vedere și astfel restricționează abilitatea de a o selecta și activa.

![Tab-ul Teme](/img/config/product-themes.png)

Selecția **behavior** permite administratorului de rețea să definească starea temei la crearea site-ului clientului.

În starea **Available**, tema este pusă la dispoziția clientului pentru auto-activare. Dimpotrivă, starea **Not Available** elimină de la client abilitatea de a activa tema. În cele din urmă, opțiunea **Force Activate** forțează selecția și activarea temei, setând-o astfel ca implicită la crearea site-ului.

#### Plugin-uri

Similar cu tab-ul Themes, Ultimate Multisite permite administratorului de rețea să definească vizibilitatea plugin-urilor pentru clienți, precum și starea lor la crearea unui site nou.

![Tab-ul Plugin-uri](/img/config/product-plugins.png)

Dropdown-ul **visibility** permite ca plugin-ul să fie fie vizibil, fie ascuns de client când este vizualizat pe site-ul său prin opțiunea de meniu Plugins.

Administratorul de rețea poate manipula în continuare comportamentul plugin-urilor utilizând opțiunile din dropdown-ul behavior.

![Tab-ul Plugin-uri](/img/config/product-plugins.png)

Selecția **Default** respectă starea plugin-ului definită în template-ul de site selectat de client. Astfel, plugin-urile care sunt activate în template vor rămâne activate când template-ul este clonat pe site-ul clientului.

**Force Activate** plasează plugin-ul într-o stare activă la crearea site-ului și, dimpotrivă, **Force Inactivate** dezactivează plugin-ul la crearea site-ului. În ambele circumstanțe, starea plugin-ului poate fi modificată manual de client prin meniul WordPress Plugins.

Setarea **Force Activate & Lock** funcționează similar, dar împiedică starea plugin-ului să fie modificată de client. Astfel, o setare de Force Activate and Lock va forța plugin-ul în starea sa activă și va împiedica clientul să-l dezactiveze. Similar, setarea **Force Inactivate & Lock** va forța plugin-ul în starea sa inactivă și va împiedica utilizatorul să activeze plugin-ul.

Administratorul de rețea ar putea dori să ia în considerare setările Force Activate & Lock și Force Inactivate & Lock în conjuncție cu template-urile de site, deoarece plugin-urile și stările plugin-urilor din template-uri pot fi afectate de aceste setări dacă sunt selectate.

#### Resetare limitări

Tab-ul **Reset Limitations** resetează toate limitele personalizate definite pe produs. Pentru a reseta limitările, apasă butonul **reset limitations**.

![Tab-ul Resetare limitări](/img/config/product-reset-limitations.png)

Pentru a confirma acțiunea, glisează comutatorul **confirm reset** la starea sa activă în dreapta și apasă butonul **reset limitations**.

![Tab-ul Resetare limitări](/img/config/product-reset-limitations.png)

## Editare, duplicare sau ștergere produs

Produsele existente pot fi editate, duplicate sau șterse navigând la **Ultimate Multisite > Products** și trecând cu mouse-ul peste numele produsului existent.

![Acțiuni la trecerea cu mouse-ul peste produs](/img/config/product-hover-actions.png)
