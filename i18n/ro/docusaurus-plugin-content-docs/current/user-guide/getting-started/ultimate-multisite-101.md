---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite este un plugin pentru WordPress Multisite care îți permite să oferi clienților tăi un serviciu WaaS (Websites as a Service - Site-uri web ca serviciu). Înainte să intrăm în detalii și să învățăm cum Ultimate Multisite poate ajuta afacerea și clienții tăi, trebuie să dobândim câteva cunoștințe fundamentale.

## WordPress Multisite

Majoritatea dintre noi suntem familiarizați cu instalarea standard de WordPress. Fie o creezi prin panoul de control al furnizorului de hosting, fie, pentru cei mai curajoși, configurezi un nou server web și o bază de date, descarci fișierele de bază și începi procesul de instalare.

Această abordare funcționează pentru milioane de site-uri WordPress din întreaga lume, dar din perspectiva unei agenții sau a unui furnizor de hosting, hai să discutăm puțin despre volume.

Deși este foarte simplu să creezi un singur site WordPress sau chiar o sută prin intermediul unui panou de control automatizat, problemele încep să apară curând când vine vorba de administrarea acestor site-uri. Lăsate neîntreținute, devii o țintă perfectă pentru malware. A le administra înseamnă un efort considerabil de resurse și, deși există instrumente externe și plugin-uri disponibile pentru a eficientiza gestionarea și administrarea site-urilor WordPress, faptul că clienții păstrează accesul administrativ înseamnă că aceste eforturi pot fi ușor anulate.

În nucleul său, WordPress oferă o funcționalitate numită simplu „Multisite", care își are originile în 2010, odată cu lansarea WordPress 3.0. De atunci, a primit o serie de revizuiri menite să introducă funcționalități noi și să îmbunătățească securitatea.

În esență, un WordPress multisite poate fi gândit astfel: O universitate menține o singură instalare WordPress, dar fiecare facultate își administrează propriul site WordPress.

Pentru a detalia această afirmație, hai să aruncăm o privire asupra terminologiei de bază prezente nu doar în documentația Ultimate Multisite, ci și în comunitatea WordPress în general.

### Rețeaua

În termeni WordPress, o rețea multisite este locul unde mai multe subsite-uri pot fi gestionate dintr-un singur dashboard. Deși crearea unei rețele multisite diferă de la un furnizor de hosting la altul, rezultatul final este de obicei câteva directive suplimentare în fișierul wp-config.php care îi spun WordPress-ului că operează în acest mod specific.

Există o serie de diferențe distincte între o rețea multisite și o instalare WordPress independentă, pe care le vom discuta pe scurt.

#### Subdomeniu vs. Subdirector

Una dintre cele mai imediate decizii pe care va trebui să le iei este dacă instalarea multisite va opera cu _subdirectoare_ sau _subdomenii_. Ultimate Multisite funcționează la fel de bine cu ambele opțiuni, dar există câteva diferențe arhitecturale între cele două configurații.

În configurația cu _subdirector_, site-urile din rețea moștenesc o cale bazată pe numele domeniului principal. De exemplu, un site din rețea numit „site1" va avea URL-ul complet https://domain.com/site1. În configurația cu _subdomeniu_, site-ul din rețea va avea propriul _subdomeniu_ derivat din numele domeniului principal. Astfel, un site numit „site1" va avea URL-ul complet https://site1.domain.com/.

Deși ambele opțiuni sunt alegeri perfect valide, utilizarea _subdomeniilor_ oferă o serie de avantaje, dar necesită și mai multă planificare în arhitectura sa.

În ceea ce privește DNS-ul, utilizarea _subdirectoarelor_ prezintă o provocare relativ simplă. Deoarece site-urile din rețea sunt pur și simplu copii ai căii părinte, este necesară doar o singură intrare de nume de domeniu pentru domeniul principal. Pentru _subdomenii_, provocarea este puțin mai complexă, necesitând fie o intrare CNAME separată pentru fiecare site din rețea, fie o intrare wildcard (*) în înregistrările DNS.

Un alt aspect de luat în considerare este cel al SSL-ului și al emiterii și utilizării certificatelor SSL. În configurația cu _subdirector_, poate fi utilizat un singur certificat de domeniu, deoarece site-urile din rețea sunt pur și simplu căi ale numelui de domeniu principal. Astfel, un certificat pentru domain.com va asigura în mod adecvat SSL pentru https://domain.com/site1, https://domain.com/site2 și așa mai departe.

În configurația cu _subdomeniu_, utilizarea unui certificat SSL wildcard este una dintre cele mai comune opțiuni. Acest tip de certificat SSL oferă criptare pentru un domeniu și _subdomeniile_ sale. Prin urmare, un certificat SSL wildcard va oferi criptare pentru https://site1.domain.com, https://site2.domain.com și https://domain.com în sine.

Deși există și alte opțiuni, acestea sunt adesea limitate în scop și aplicare și necesită configurare și considerații suplimentare în ceea ce privește potrivirea lor.

#### Plugin-uri și Teme

Ce WordPress dă, tot WordPress ia, cel puțin din perspectiva clientului. Într-o instalare WordPress independentă, dacă administratorul site-ului instalează un plugin problematic sau nu își menține instalarea la zi, singura victimă a acestui act este el însuși. Cu toate acestea, un administrator de site care instalează un plugin problematic pe o instalare multisite transformă în victimă fiecare site instalat în rețea.

Din acest motiv, când este configurat ca multisite, WordPress elimină de la administratorii de site capacitatea de a instala plugin-uri și teme și mută această capacitate către un rol nou creat de administrator de rețea sau „super admin". Acest rol privilegiat poate decide apoi dacă permite administratorilor site-urilor din rețea să vadă sau să acceseze meniul de plugin-uri din dashboard-ul lor și, dacă da, dacă aceste permisiuni se extind la _activarea_ sau _dezactivarea_ plugin-urilor.

În acest sens, administratorul de rețea este responsabil pentru instalarea plugin-urilor și temelor în rețea și deleagă permisiunile de a utiliza aceste plugin-uri și teme către site-urile din rețea. Administratorii de site nu pot instala plugin-uri și teme sau accesa plugin-uri și teme care nu sunt alocate site-ului lor.

#### Utilizatori și Administratori

Într-un WordPress Multisite, toate site-urile din rețea partajează aceeași bază de date și, prin urmare, partajează aceiași utilizatori, roluri și capabilități. Cel mai potrivit mod de a gândi acest lucru este că toți utilizatorii sunt membri ai rețelei și nu ai unui site particular.

Având în vedere această înțelegere, poate fi nedorit să permiți crearea de utilizatori și din acest motiv WordPress Multisite elimină această capacitate de la administratorii de site și o mută către administratorul de rețea. La rândul său, administratorul de rețea poate delega privilegiile necesare unui administrator de site pentru a-i permite să creeze conturi de utilizator pentru propriul site.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Reiterând afirmația de mai sus, deși conturile de utilizator par a fi legate de site, ele sunt de fapt alocate rețelei și prin urmare trebuie să fie unice în cadrul rețelei. Pot exista situații în care numele de utilizator să fie indisponibile pentru înregistrare din acest motiv.

Deși nu este un concept străin în sistemele enterprise, această sursă unică de înregistrare și autentificare a utilizatorilor este adesea un concept dificil de înțeles pentru persoanele familiarizate cu instalările WordPress independente, unde administrarea utilizatorilor este oarecum mai simplă.

#### Media

În timp ce site-urile din rețea partajează o singură bază de date într-un WordPress Multisite, ele mențin căi separate pe sistemul de fișiere pentru fișierele media.

Locația standard WordPress (wp-content/uploads) rămâne; totuși, calea sa este modificată pentru a reflecta ID-ul unic al site-ului din rețea. În consecință, fișierele media pentru un site din rețea apar ca wp-contents/uploads/site/[id].

#### Permalink-uri

Am menționat anterior că există avantaje distincte ale configurației cu _subdomeniu_ față de cea cu _subdirector_ și iată care este: căile.

Într-o configurație cu _subdirector_, site-ul principal (primul site creat când rețeaua este stabilită) și subsite-urile din rețea trebuie să partajeze aceeași cale pornind de la numele de domeniu. Acest lucru are potențialul de a genera un număr mare de conflicte.

Pentru postări, o cale obligatorie /blog/ este adăugată site-ului principal pentru a preveni ciocnirile cu site-urile din rețea. Aceasta înseamnă că permalink-urile frumoase precum „Numele postării" vor fi prezentate ca domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Într-o configurație cu _subdomeniu_, această acțiune nu este necesară deoarece fiecare site din rețea beneficiază de separare completă a domeniului și astfel nu trebuie să se bazeze pe o singură cale. În schimb, își mențin propriile căi distincte bazate pe _subdomeniul_ lor.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Pagini Statice

În configurația cu _subdirector_, potențialul de conflicte de denumire se extinde la paginile statice, deoarece site-ul principal și site-urile din rețea partajează aceeași cale.

Pentru a preveni acest lucru, WordPress oferă un mijloc de a pune pe lista neagră anumite nume de site-uri, astfel încât să nu intre în conflict cu numele primului site. De obicei, administratorul de rețea ar introduce căile rădăcină ale paginilor site-ului principal.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

În configurația cu _subdomeniu_, posibilitatea conflictelor de denumire este atenuată de _subdomeniu_, deoarece acesta este unic pentru site-ul din rețea și nu este legat în niciun fel de site-ul principal.

### Înregistrare

În cadrul setărilor de rețea ale WordPress Multisite, sunt disponibile mai multe opțiuni noi de înregistrare a utilizatorilor, permițând utilizatorilor noi și existenți să creeze site-uri.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Spre deosebire de instalările WordPress independente, site-urile din rețea nu mențin opțiunile familiare pentru a permite înregistrările de utilizatori sau pentru a atribui aceste înregistrări unor roluri.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Când sunt create conturi de utilizator, aceste conturi sunt generate la nivel de rețea. Astfel, în loc să aparțină unui site particular, ele aparțin rețelei. Aceasta are câteva avantaje și dezavantaje distincte.

De exemplu, să presupunem că WordPress Multisite-ul tău ar fi în domeniul știrilor și informațiilor. Ai stabili multisite-ul și apoi ai crea site-uri în rețea pentru finanțe, tehnologie, divertisment și alte domenii de interes, menținând în același timp controlul general asupra plugin-urilor și temelor. Fiecare site din rețea ar avea, la rândul său, un nivel mult mai mare de control asupra aspectului și experienței utilizatorului site-ului lor din rețea decât ar avea tipurile de postări personalizate sau categoriile obișnuite de postări.

În acest sens, când un utilizator se autentifică, se autentifică în rețea și, în cele din urmă, este autentificat și în fiecare site din rețea pentru a oferi o experiență fără întreruperi. Dacă noul tău site ar fi bazat pe abonament, aceasta ar fi soluția și rezultatul ideal.

Dacă, totuși, natura și scopul intenționat al multisite-ului ar fi de a oferi site-uri disparate în rețea care nu au nicio relație unul cu celălalt, este aproape întotdeauna cazul că sunt necesare plugin-uri externe sau suplimentare pentru a manipula rolurile utilizatorilor.

### Domeniu și SSL

Hai să vorbim despre o instalare WordPress Multisite care aproape ne scapă atenției - Wordpress.com. Acesta este de departe cel mai extins exemplu de WordPress multisite și demonstrează abilitățile sale extinse de a fi personalizat și modelat pentru a îndeplini un scop.

În zilele noastre, pe internetul modern, utilizarea SSL este aproape obligatorie, iar administratorii de rețea ai WordPress multisite-urilor sunt curând confruntați cu aceste provocări.

În configurația cu _subdomeniu_, site-urile sunt create pe baza numelui de domeniu rădăcină. Astfel, un site numit „site1" ar fi creat ca „site1.domain.com". Folosind un certificat SSL wildcard, un administrator de rețea poate aborda cu succes această provocare și poate oferi capabilități de criptare SSL pentru rețea.

WordPress Multisite conține o funcție de mapare a domeniului care permite site-urilor din rețea să fie asociate cu nume de domeniu personalizate sau nume de domeniu diferite de domeniul rădăcină al rețelei.

Pentru administratorii de rețea, aceasta prezintă un nivel suplimentar de complexitate atât în configurarea numelor de domeniu, cât și în emiterea și întreținerea certificatelor SSL.

În acest sens, în timp ce WordPress Multisite oferă un mijloc de a permite [www.anotherdomain.com](http://www.anotherdomain.com) să fie mapat către „site1", administratorul de rețea rămâne cu provocarea de a gestiona extern intrările DNS și implementarea certificatelor SSL.

## Ultimate Multisite

Cu diferențele dintre o instalare WordPress independentă și o instalare Multisite înțelese, hai să aruncăm o privire asupra modului în care Ultimate Multisite este arsenalul suprem pentru furnizarea de Site-uri web ca Serviciu.

### Introducere

Ultimate Multisite este cuțitul tău elvețian când vine vorba de crearea unui Website as a Service (WaaS - Site web ca Serviciu). Gândește-te la Wix.com, Squarespace, WordPress.com și apoi gândește-te că deții propriul tău serviciu.

Sub capotă, Ultimate Multisite folosește WordPress Multisite, dar o face într-un mod care nu doar rezolvă miriadele de provocări cu care se confruntă administratorii de rețea cu instalările multisite, ci și îmbunătățește capabilitățile, permițând suportarea unei largi varietăți de cazuri de utilizare.

În secțiunile următoare vom analiza câteva cazuri de utilizare comune și considerațiile necesare pentru a sprijini aceste cazuri.

### Cazuri de Utilizare

#### Cazul 1: O Agenție

De obicei, competențele de bază ale unei agenții constau în designul site-urilor web, aspecte precum hosting-ul sau marketingul fiind listate ca servicii suplimentare.

Pentru agenții, Ultimate Multisite prezintă o propunere de valoare incredibilă în abilitățile sale de a găzdui și gestiona multiple site-uri web pe o singură platformă. Cu atât mai mult pentru agențiile care își standardizează design-urile pe teme particulare precum GeneratePress, Astra, OceanWP sau altele, pot valorifica abilitățile Ultimate Multisite de a activa automat aceste teme pentru fiecare site nou.

În mod similar, cu abundența de oferte de prețuri pentru agenții la plugin-uri comune și populare, utilizarea Ultimate Multisite permite agențiilor să valorifice investițiile existente, oferind o platformă comună de pe care plugin-urile pot fi instalate, întreținute și utilizate.

Cel mai probabil, ar fi dorită utilizarea unei configurații și, din fericire, Ultimate Multisite face incredibil de ușoară facilitarea mapării domeniului și a certificatelor SSL cu integrările sale pentru o serie de furnizori de hosting populari, precum și servicii precum Cloudflare și cPanel.

Astfel, prin valorificarea unuia dintre acești furnizori sau prin plasarea Ultimate Multisite în spatele Cloudflare, aspecte precum gestionarea domeniilor și a certificatelor SSL devin oarecum triviale.

Agențiile care preferă să păstreze un control strict asupra creării site-urilor vor aprecia ușurința cu care pot crea site-uri și asocia site-uri cu clienți și planuri prin interfața simplificată a Ultimate Multisite.

![Interfața de administrare a site-urilor Ultimate Multisite](/img/admin/sites-list.png)

Controlul strict asupra plugin-urilor și temelor este menținut pe bază de produs prin interfețele intuitive ale Ultimate Multisite, permițând plugin-urilor și temelor să fie disponibile sau ascunse, precum și starea lor de activare când sunt instanțiate pentru un site nou.

![Interfața de limitări ale plugin-urilor pentru produs](/img/config/product-plugins.png)

Temele oferă funcționalități similare, permițând anumitor teme să fie activate sau ascunse la crearea site-ului.

![Interfața de limitări ale temelor pentru produs](/img/config/product-themes.png)

Agențiile vor găsi liniște sufletească cu Ultimate Multisite, permițându-le să facă ceea ce fac cel mai bine - să creeze site-uri web excepționale.

#### Cazul 2: Furnizor de Nișă

Există o zicală veche care spune: „fă un singur lucru și fă-l bine". Pentru mulți specialiști, aceasta înseamnă crearea unui produs sau serviciu în jurul unei singure idei centrale.

Poate că ești un pasionat de golf care promovează site-uri web pentru cluburi sau poate ești un pasionat de esports care oferă site-uri web pentru clanuri. Un individ care promovează un serviciu de rezervări pentru restaurante, poate?

Din multe motive, ai dori să oferi servicii bazate pe un cadru și o platformă comună. Ar putea fi că ai proiectat sau ai investit în plugin-uri personalizate pentru a oferi funcționalitatea necesară sau ar putea fi cazul în care cele mai bune practici din industrie necesită o formă de abordare standardizată a designului.

Una dintre funcționalitățile inovatoare ale Ultimate Multisite este utilizarea site-urilor șablon. Un site șablon este unul în care tema a fost instalată și activată, plugin-urile necesare au fost instalate și activate și au fost create postări sau pagini exemplu. Când un client creează un site nou bazat pe șablon, conținutul și setările șablonului sunt copiate pe site-ul nou creat.

Pentru un furnizor de site-uri și servicii de nișă, aceasta oferă un avantaj fără egal în abilitatea de a crea instantaneu un site gata de utilizare cu plugin-uri și design personalizate. Clientul trebuie doar să ofere inputul minim pentru a finaliza serviciul.

În funcție de cerințe, atât configurațiile cu _subdirector_, cât și cele cu _subdomeniu_ pot fi potrivite, caz în care alegerile arhitecturale ar fi între un certificat SSL simplu pentru _subdirectoare_ sau un certificat SSL wildcard pentru _subdomenii_.

#### Cazul 3: Hosting Web WordPress

Există o multitudine de modalități de a găzdui site-uri WordPress, dar rareori este la fel de simplu ca și cum ai oferi spațiu web unui client cu o versiune preinstalată de WordPress. Aceasta pentru că o serie de decizii și considerații trebuie să se alinieze pentru a oferi un serviciu semnificativ.

Ultimate Multisite excelează în acest domeniu, oferind o soluție completă la cheie pentru găzduirea site-urilor WordPress. Incluse în soluție sunt mecanismele de bază pentru a oferi servicii de abonament, colectarea plăților, formulare de checkout, vouchere de reducere și comunicări cu clienții.

O mare parte din munca integrală necesară pentru a instala, configura și întreține corect un WordPress Multisite este facilitată de Ultimate Multisite în măsura în care administratorii de rețea trebuie să ia în considerare doar aspecte legate de serviciul sau nișa lor, cum ar fi nivelurile de produs, prețurile și ofertele de servicii.

Pentru dezvoltatorii care doresc să se integreze cu Ultimate Multisite, soluția oferă, de asemenea, un API RESTful cuprinzător și Webhook-uri pentru notificări de evenimente.

Fără a se baza pe o multitudine de plugin-uri și licențe externe, Ultimate Multisite oferă o soluție bogată în funcționalități și comparabilă cu cea a Wix, Squarespace, WordPress.com și altora.

### Considerații Arhitecturale

Deși nu este un ghid cuprinzător, următoarele elemente ar trebui să servească drept orientare pentru selectarea corectă a tehnologiilor pentru a susține o instalare Ultimate Multisite.

#### Hosting Partajat vs. Dedicat

Din păcate, nu toți furnizorii de hosting sunt egali și unii practică densități extreme de servere. Furnizorii cu costuri reduse generează de obicei venituri maximizând densitatea serverelor. Ca atare, instalarea ta Ultimate Multisite poate fi doar una dintre câteva sute de site-uri pe același server.

Fără măsuri de protecție adecvate din partea furnizorului, site-urile de pe un server partajat experimentează problema „vecinului zgomotos". Adică, un site de pe același server consumă atât de multe resurse încât alte site-uri trebuie să concureze pentru resursele rămase. Adesea, acest lucru se manifestă ca site-uri care sunt lente sau nu răspund în timp util.

Ca furnizor de hosting web tu însuți, efectele de propagare vor însemna că clienții tăi experimentează viteze slabe, rang scăzut al paginii și rate mari de abandon, rezultând adesea în pierderea clienților pe măsură ce aceștia caută servicii în altă parte.

Pe scurt, ieftin nu înseamnă bun.

Ultimate Multisite este cunoscut că funcționează cu o serie de furnizori de hosting buni și se integrează bine cu mediul lor pentru a oferi funcții precum maparea domeniului și SSL automat. Acești furnizori prețuiesc performanța și oferă un serviciu de calitate superioară hosting-ului partajat.

Pentru o listă de furnizori compatibili și instrucțiuni complete de configurare pentru fiecare, te rugăm să verifici documentația Furnizorilor Compatibili.

#### Considerații de Performanță

Ultimate Multisite nu este o aplicație lentă, dimpotrivă, este remarcabil de rapidă. Totuși, performează doar la fel de bine ca aplicația și infrastructura de bază și poate valorifica doar ceea ce are la dispoziție.

Gândește-te la asta: Ești administratorul de rețea al unei instalări Ultimate Multisite cu 100 de site-uri. Unele dintre acele site-uri merg bine și atrag un număr de vizitatori ai site-ului în fiecare zi.

Acest scenariu ar fi diferit la o scară mai mică de, să zicem, unu până la cinci site-uri, dar în curând problemele de scală ar deveni evidente.

Lăsat nesupravegheat, singurul site Ultimate Multisite ar fi responsabil pentru îndeplinirea cererilor tuturor vizitatorilor site-urilor. Aceste cereri ar putea fi pentru pagini PHP dinamice sau active statice precum foi de stil, javascript sau fișiere media. Fie că este un site sau o sută, aceste sarcini devin repetitive, monotone și risipitoare. Este inutil să folosești putere de procesare și memorie pentru a procesa un fișier PHP când rezultatul este aceeași informație statică pentru fiecare cerere.

În mod similar, o cerere pentru o pagină PHP sau HTML generează la rândul său multiple cereri succesive pentru scripturi, foi de stil și fișiere de imagine. Acele cereri sunt direcționate direct către serverul tău Ultimate Multisite.

Cineva ar putea rezolva ușor această problemă făcând upgrade la server, dar nu rezolvă o problemă secundară - latențele geografice. Doar servere multiple în locații multiple ar putea aborda corect această problemă.

Din acest motiv, majoritatea administratorilor de rețea folosesc soluții de caching front-end și rețele de distribuție a conținutului (CDN) pentru a îndeplini cererile pentru pagini statice. Îndeplinirea acestor cereri și servirea activelor înainte ca cererea să ajungă la server economisește resurse de procesare, elimină întârzierile, evită upgrade-urile inutile și maximizează investițiile tehnologice.

Ultimate Multisite include un add-on sofisticat pentru Cloudflare, permițând administratorilor de rețea să își plaseze instalările în spatele Cloudflare și să profite nu doar de capacitățile sale de caching, ci și de găzduirea DNS, certificatele SSL și mecanismele de securitate.

#### Backup-uri

Ai putea întreba 50 de persoane pentru sfaturi despre backup-uri și ai primi 50 de opinii diferite despre strategiile de backup. Răspunsul este: depinde.

Ce nu este disputat este că backup-urile sunt necesare și că este aproape de neconceput ca acestea să nu fie gestionate de furnizor, în special unul care oferă un serviciu administrat. În consecință, clienții se vor uita la administratorul de rețea pentru a oferi și gestiona acest serviciu. Către cine se uită administratorul de rețea este o problemă complet diferită.

În scopul acestei secțiuni, hai să fim de acord că un backup este o copie punct-în-timp a stării sistemului în momentul în care backup-ul a fost inițiat. Pur și simplu, oricare ar fi starea sistemului în momentul backup-ului, acea stare este capturată și păstrată în backup.

Cu această înțelegere, răspunsul la cum să realizezi backup-urile și ce este cel mai bun pentru mediul tău va depinde în mare măsură de cerințele tale și de capacitatea furnizorului de hosting de a satisface acele cerințe. Totuși, în ordinea de la cel mai opinat la cel mai puțin opinat, opțiunile de mai jos ar trebui să ofere o anumită orientare.

#### Snapshot-uri

Snapshot-urile sunt gloanțele de argint pentru backup-uri pentru că sunt ușoare, necompicate (până când vrei să restaurezi) și „pur și simplu funcționează". Necesită totuși ceva ajutor din partea furnizorului tău și se aplică în mare parte doar dacă ai un VPS (Virtual Private Server) sau similar. Mai mulți furnizori listați în documentația noastră „Furnizori Compatibili" oferă backup-uri care nu necesită intervenție sau considerații suplimentare din partea administratorului de rețea.

Acolo unde backup-urile tradiționale vizează fișiere și baze de date, un snapshot vizează întregul disc. Aceasta înseamnă că nu doar datele site-ului sunt capturate în snapshot, ci și sistemul de operare și configurația. Pentru mulți, acesta este un avantaj distinct, deoarece un nou sistem poate fi generat aproape instantaneu dintr-un snapshot și poate fi pus în funcțiune pentru a înlocui o instanță defectuoasă. În mod similar, procesul de recuperare pentru a prelua fișiere necesită doar atașarea imaginii snapshot ca disc la o instanță existentă, astfel încât fișierele să poată fi accesate și copiate.

Snapshot-urile pot atrage un cost suplimentar la furnizorul de hosting, dar este o poliță de asigurare împotriva accidentelor.

#### Scripturi Externe

Pare să nu existe lipsă de scripturi externe și soluții pentru backup-ul resurselor WordPress și MySQL și acestea ar funcționa bine pentru Ultimate Multisite, deoarece este un plugin WordPress care folosește sistemul de fișiere și baza de date WordPress. Astfel, o soluție care face backup la site-urile WordPress ar acoperi în mod adecvat nevoile Ultimate Multisite.

Nu putem recomanda un script în detrimentul altuia, dar sfatul nostru general este să rulezi mai multe teste de backup și restaurare pentru a te asigura că rezultatele sunt cele dorite și să „fii sigur că ești sigur" prin evaluarea continuă a scriptului și funcționalității sale, în special acolo unde este aplicată o formă de strategie de backup diferențial.

Trebuie menționat că aceste scripturi, în timp ce rulează, vor crește încărcarea sistemului, ceea ce ar trebui luat în considerare.

#### Plugin-uri

Nu există aproape nicio problemă în WordPress care să nu poată fi rezolvată cu un plugin și dacă gestionarea scripturilor externe nu este ceaiul tău, atunci poate că un plugin este următoarea cea mai bună opțiune.

Deși plugin-urile variază în opțiuni și funcționalități, ele îndeplinesc în mare parte aceeași funcție și anume să facă o copie a fișierelor WordPress și a conținutului bazei de date. După aceea, funcționalitățile diferă, deoarece unele plugin-uri pot trimite backup-urile către servicii externe precum Google Drive sau Dropbox sau către un fel de serviciu de stocare de obiecte compatibil precum S3, Wasabi sau altele. Plugin-urile mai cuprinzătoare oferă backup-uri diferențiale sau o formă de strategie pentru a face backup doar la datele care au fost modificate pentru a economisi costurile de stocare externă.

În selectarea plugin-ului tău, ai grijă să verifici că este compatibil cu multisite. Datorită naturii sale de operare, în timp ce backup-ul rulează, te poți aștepta la încărcare temporară pe server până când procesul este finalizat.

#### Domeniu și SSL

Multe au fost discutate deja în legătură cu numele de domeniu în modul _subdomeniu_ multisite. O soluție aproape universală pentru administratorii de rețea este utilizarea intrărilor DNS wildcard.

![Exemplu de configurare a intrării DNS wildcard](/img/config/settings-domain-mapping.png)

Acest tip de intrare DNS va rezolva cu succes _subdomeniile_ precum „site1.domain.com" și „site2.domain.com" la o adresă IP de 1.2.3.4, susținând astfel Ultimate Multisite și, într-o măsură mai largă, WordPress Multisite folosind modul _subdomeniu_.

Aceasta poate funcționa perfect pentru HTTP deoarece gazda țintă este citită din antetele HTTP, dar rareori este web-ul atât de simplu în zilele noastre, unde tranzacțiile HTTPS sigure sunt aproape obligatorii.

Din fericire, există opțiuni ușoare pentru certificatele SSL. În modul _subdirector_, poate fi folosit un certificat de domeniu obișnuit. Acestea sunt disponibile gratuit de la furnizorii de hosting care ar putea folosi serviciul gratuit LetsEncrypt sau altă sursă. În caz contrar, acestea sunt disponibile comercial de la autorități dacă poți genera cererea de semnare a certificatului.

Pentru modul _subdomeniu_, utilizarea unui certificat SSL wildcard se va potrivi perfect cu un domeniu wildcard și va permite certificatului să fie autoritar pentru domeniul rădăcină și toate _subdomeniile_ fără configurare suplimentară.

Totuși, trebuie menționat că certificatele SSL wildcard s-ar putea să nu funcționeze cu servicii precum Cloudflare decât dacă ești pe un plan enterprise sau setezi intrarea doar la DNS, caz în care toată caching-ul și optimizarea sunt ocolite.

Din cutie, Ultimate Multisite oferă o soluție la această problemă, demonstrând experiența noastră extinsă cu nevoile WordPress multisite-urilor. Activarea acestui add-on simplu va face ca Ultimate Multisite să folosească acreditările tale Cloudflare pentru a adăuga automat intrări DNS pentru site-urile din rețea în Cloudflare și a seta modul lor la „proxied". În acest mod, fiecare subsite din rețea, când este creat, va avea protecția completă și beneficiile Cloudflare, inclusiv SSL.

În funcție de natura și scopul instalării tale Ultimate Multisite, poate exista nevoia ca clienții să folosească propriile lor domenii. În acest caz, administratorul de rețea este însărcinat cu rezolvarea a două probleme. Una, găzduirea numelui de domeniu și două, certificatele SSL pentru domeniu.

Pentru mulți, utilizarea Cloudflare este o opțiune ușoară. Clientul trebuie doar să își plaseze domeniul pe Cloudflare, să îndrepte un CNAME către domeniul rădăcină al Ultimate Multisite și să mapeze domeniul lor în Ultimate Multisite pentru a începe să profite de numele lor de domeniu personalizat.

În afara acestuia, trebuie căutate soluții alternative, motiv pentru care Ultimate Multisite recomandă o listă de Furnizori Compatibili. Aceasta pentru că procesul de configurare DNS și SSL poate fi unul non-trivial. Totuși, cu integrarea Ultimate Multisite cu acești furnizori, complexitatea este mult eliminată și procedura este automatizată.

#### Plugin-uri

Este foarte probabil că ai avea nevoie de plugin-uri suplimentare pentru a oferi funcționalitate clienților tăi sau site-urilor din rețea. Funcționează toate plugin-urile cu WordPress Multisite și Ultimate Multisite? Ei bine, depinde.

Deși majoritatea plugin-urilor sunt instalabile într-un WordPress Multisite, activarea și licențierea lor variază de la autor la autor.

Provocarea constă în modul în care licențierea este aplicată, unele plugin-uri necesitând licențiere pe bază de domeniu. Aceasta ar însemna că pentru unele plugin-uri, administratorul de rețea trebuie să activeze manual licența pentru fiecare plugin pe fiecare site nou.

Prin urmare, ar fi cel mai bine să verifici cu autorul plugin-ului cum ar funcționa plugin-ul lor cu un WordPress Multisite și orice cerințe speciale sau proceduri necesare pentru a-l licenția.
