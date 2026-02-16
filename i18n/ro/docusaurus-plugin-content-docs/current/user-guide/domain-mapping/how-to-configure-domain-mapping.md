---
title: Cum să configurați maparea domeniului
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Cum să configurezi maparea domeniilor (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Una dintre cele mai puternice funcționalități ale unei rețele premium este posibilitatea de a le oferi clienților noștri șansa să atașeze un domeniu de nivel superior site-urilor lor. La urma urmei, ce arată mai profesional: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) sau [_**joesbikeshop.com**_](http://joesbikeshop.com)? De aceea, Ultimate Multisite oferă această funcționalitate integrată, fără a fi nevoie să folosești plugin-uri de la terți.

## Ce este maparea domeniilor?

Așa cum sugerează și numele, maparea domeniilor este capacitatea oferită de Ultimate Multisite de a prelua o cerere pentru un domeniu personalizat și de a direcționa acea cerere către site-ul corespunzător din rețea care are acel domeniu atașat.

### Cum să configurezi maparea domeniilor în rețeaua ta Ultimate Multisite

Maparea domeniilor necesită câteva configurări din partea ta pentru a funcționa. Din fericire, Ultimate Multisite automatizează partea dificilă, astfel încât să poți îndeplini cerințele cu ușurință.

În timpul instalării Ultimate Multisite, asistentul va copia și instala automat fișierul **sunrise.php** în folderul desemnat. **Asistentul nu îți va permite să continui până când acest pas nu este finalizat**.

![Asistentul de instalare Ultimate Multisite cu pasul sunrise.php](/img/config/settings-domain-mapping.png)

Aceasta înseamnă că, odată ce asistentul de instalare Ultimate Multisite a finalizat configurarea rețelei tale, poți începe să mapezi domeniul personalizat imediat.

Reține că maparea domeniilor în Ultimate Multisite nu este obligatorie. Ai opțiunea de a folosi funcția nativă de mapare a domeniilor din WordPress Multisite sau orice altă soluție de mapare a domeniilor.

Dacă trebuie să dezactivezi maparea domeniilor din Ultimate Multisite pentru a face loc altor soluții de mapare, poți dezactiva această funcționalitate din **Ultimate Multisite > Settings > Domain Mapping**.

![Setările Domain Mapping cu butonul de activare](/img/config/settings-domain-mapping.png)

Chiar sub această opțiune, poți vedea și opțiunea **Force Admin Redirect**. Această opțiune îți permite să controlezi dacă clienții tăi vor putea accesa panoul de administrare atât pe domeniul lor personalizat, cât și pe subdomeniu, sau doar pe unul dintre ele.

Dacă selectezi **Force redirect to mapped domain**, clienții tăi vor putea accesa panoul de administrare doar pe domeniile lor personalizate.

Opțiunea **Force redirect to network domain** va face exact opusul - clienții tăi vor putea accesa panourile de administrare doar pe subdomeniu, chiar dacă încearcă să se autentifice pe domeniile lor personalizate.

Iar opțiunea **Allow access to the admin by both mapped domain domain and network domain** le permite să acceseze panourile de administrare atât pe subdomeniu, cât și pe domeniul personalizat.

![Opțiunile Force Admin Redirect pentru maparea domeniilor](/img/config/settings-domain-mapping.png)

Există două modalități de a mapa un domeniu personalizat. Prima este prin maparea numelui de domeniu din panoul de administrare al rețelei ca super admin, iar a doua este prin panoul de administrare al subsite-ului, din pagina de cont.

Dar înainte să începi să mapezi domeniul personalizat la unul dintre subsite-urile din rețeaua ta, va trebui să te asiguri că **setările DNS** ale numelui de domeniu sunt configurate corect.

### 

### Asigură-te că setările DNS ale domeniului sunt configurate corect

Pentru ca maparea să funcționeze, trebuie să te asiguri că domeniul pe care intenționezi să-l mapezi indică spre adresa IP a rețelei tale. Reține că ai nevoie de adresa IP a rețelei - adresa IP a domeniului unde este instalat Ultimate Multisite - nu adresa IP a domeniului personalizat pe care vrei să-l mapezi. Pentru a căuta adresa IP a unui domeniu specific, îți sugerăm să accesezi [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), de exemplu.

Pentru a mapa corect domeniul, trebuie să adaugi o **înregistrare A (A RECORD)** în configurația **DNS** care să indice spre acea **adresă IP**. Gestionarea DNS variază foarte mult între diferiți registrari de domenii, dar există numeroase tutoriale online pe acest subiect dacă cauți „_Creating A Record on XXXX_", unde XXXX este registrarul tău de domenii (ex.: „_Creating A Record on GoDaddy_").

Dacă întâmpini dificultăți în a face acest lucru să funcționeze, **contactează suportul registrarului tău de domenii** și te vor putea ajuta cu această parte.

Dacă intenționezi să le permiți clienților tăi să-și mapeze propriile domenii, ei vor trebui să facă această parte singuri. Îndrumă-i către sistemul de suport al registrarului lor dacă nu reușesc să creeze înregistrarea A.

### Maparea numelui de domeniu personalizat ca Super Admin

Când ești autentificat ca super admin în rețeaua ta, poți adăuga și gestiona cu ușurință nume de domenii personalizate accesând **Ultimate Multisite > Domains**.

![Pagina cu lista domeniilor în Ultimate Multisite](/img/admin/domains-list.png)

Pe această pagină, poți face clic pe butonul **Add Domain** din partea de sus și aceasta va afișa o fereastră modală unde poți seta și completa **numele domeniului personalizat**, **subsite-ul** căruia dorești să-i aplici numele de domeniu personalizat și decide dacă vrei să-l setezi ca **domeniu primar** sau nu (reține că poți mapa **mai multe nume de domenii la un singur subsite**).

![Fereastra modală Add Domain cu câmpurile pentru nume domeniu și site](/img/admin/domains-list.png)

După ce ai completat toate informațiile, poți face clic pe butonul **Add Existing Domain** din partea de jos.

Aceasta va începe procesul de verificare și preluare a informațiilor DNS ale domeniului personalizat. Vei vedea și un jurnal în partea de jos a paginii pentru a urmări procesul prin care trece. Acest proces poate dura câteva minute până la finalizare.

**Stage** sau statusul ar trebui să se schimbe din **Checking DNS** în **Ready** dacă totul este configurat corect.

![Statusul domeniului schimbându-se din Checking DNS în Ready](/img/admin/domains-list.png)

![Domeniu cu statusul Ready în lista de domenii](/img/admin/domains-list.png)

Dacă faci clic pe numele domeniului, vei putea vedea câteva opțiuni în interior. Hai să aruncăm o privire rapidă asupra lor:

![Pagina de detalii a domeniului cu opțiunile stage, site, active și SSL](/img/admin/domains-list.png)

**Stage:** Aceasta este etapa în care se află domeniul. Când adaugi prima dată domeniul, probabil va fi în etapa **Checking DNS**. Procesul va verifica intrările DNS și va confirma că sunt corecte. Apoi, domeniul va fi trecut la etapa **Checking SSL**. Ultimate Multisite va verifica dacă domeniul are SSL sau nu și va categoriza domeniul tău ca **Ready** sau **Ready (without SSL)**.

**Site:** Subdomeniul care este asociat cu acest domeniu. Domeniul mapat va afișa conținutul acestui site specific.

**Active:** Poți activa sau dezactiva această opțiune pentru a activa sau dezactiva domeniul.

**Is Primary Domain?:** Clienții tăi pot avea mai mult de un domeniu mapat pentru fiecare site. Folosește această opțiune pentru a selecta dacă acesta este domeniul primar pentru site-ul specific.

**Is Secure?:** Chiar dacă Ultimate Multisite verifică dacă domeniul are un certificat SSL sau nu înainte de a-l activa, poți selecta manual să încarci domeniul cu sau fără certificat SSL. Reține că dacă site-ul nu are un certificat SSL și încerci să-l forțezi să se încarce cu SSL, poate genera erori.

### Maparea numelui de domeniu personalizat ca utilizator Subsite

Administratorii subsite-urilor pot, de asemenea, să mapeze nume de domenii personalizate din panoul de administrare al subsite-ului lor.

Mai întâi, trebuie să te asiguri că activezi această opțiune în setările **Domain mapping**. Vezi captura de ecran de mai jos.

![Setările de mapare a domeniilor care permit utilizatorilor subsite să mapeze domenii](/img/config/settings-domain-mapping.png)

Poți, de asemenea, să setezi sau să configurezi această opțiune la nivelul **Plan** sau în opțiunile produsului din **Ultimate Multisite > Products**.

![Opțiunea de domenii personalizate în setările produsului](/img/config/settings-domain-mapping.png)

Când oricare dintre aceste opțiuni este activată și unui utilizator de subsite i se permite să mapeze nume de domenii personalizate, utilizatorul subsite-ului ar trebui să vadă o casetă meta în pagina **Account** numită **Domains**.

![Caseta meta Domains în pagina de cont a subsite-ului](/img/admin/domains-list.png)

Utilizatorul poate face clic pe butonul **Add Domain** și aceasta va afișa o fereastră modală cu câteva instrucțiuni.

![Fereastra modală Add Domain cu instrucțiuni DNS pentru utilizatorii subsite](/img/admin/domains-list.png)

Utilizatorul poate apoi face clic pe **Next Step** și continua să adauge numele domeniului personalizat. Poate alege, de asemenea, dacă acesta va fi domeniul primar sau nu.

![Câmpul pentru adăugarea numelui de domeniu personalizat cu opțiunea de domeniu primar](/img/admin/domains-list.png)

![Clic pe Add Domain pentru a începe verificarea DNS](/img/admin/domains-list.png)Clic pe **Add Domain** va începe procesul de verificare și preluare a informațiilor DNS ale domeniului personalizat.

### Despre sincronizarea domeniilor

Sincronizarea domeniilor este un proces prin care Ultimate Multisite adaugă numele de domeniu personalizat în contul tău de hosting ca domeniu suplimentar (add-on domain) **pentru ca maparea domeniului să funcționeze**.

Sincronizarea domeniilor are loc automat dacă furnizorul tău de hosting are integrare cu funcționalitatea de mapare a domeniilor din Ultimate Multisite. În prezent, acești furnizori de hosting sunt _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ și _Cpanel_.

Va trebui să activezi această integrare în setările Ultimate Multisite, în tab-ul **Integration**.

![Tab-ul Integration în setările Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Setările de integrare cu furnizorul de hosting pentru sincronizarea domeniilor](/img/config/settings-domain-mapping.png)

_Reține că dacă furnizorul tău de hosting nu este unul dintre furnizorii menționați mai sus, **va trebui să sincronizezi sau să adaugi manual numele de domeniu** în contul tău de hosting._
