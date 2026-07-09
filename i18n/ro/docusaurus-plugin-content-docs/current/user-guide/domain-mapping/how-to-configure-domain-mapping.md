---
title: Cum să configurați maparea domeniilor
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Cum să configurezi maparea domeniilor (v2) {#how-to-configure-domain-mapping-v2}

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Una dintre cele mai puternice funcționalități ale unei rețele premium este capacitatea de a le oferi clienților noștri șansa de a atașa un domeniu de nivel superior la site-urile lor. La urma urmei, ce arată mai profesionist: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) sau [_**joesbikeshop.com**_](http://joesbikeshop.com)? De aceea Ultimate Multisite oferă această funcționalitate integrată, fără a fi nevoie să folosești pluginuri terțe.

## Ce este maparea domeniilor? {#whats-domain-mapping}

Așa cum sugerează numele, maparea domeniilor este capacitatea oferită de Ultimate Multisite de a primi o solicitare pentru un domeniu personalizat și de a mapa acea solicitare către site-ul corespunzător din rețea care are atașat acel domeniu specific.

### Cum să configurezi maparea domeniilor în rețeaua ta Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Maparea domeniilor necesită câteva configurări din partea ta pentru a funcționa. Din fericire, Ultimate Multisite automatizează munca dificilă pentru tine, astfel încât să poți îndeplini cu ușurință cerințele.

În timpul instalării Ultimate Multisite, asistentul va copia și instala automat **sunrise.php** în folderul desemnat. **Asistentul nu îți va permite să continui până când acest pas nu este finalizat**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Aceasta înseamnă că, odată ce asistentul de instalare Ultimate Multisite a finalizat configurarea rețelei tale, poți începe imediat maparea domeniului personalizat.

Reține că maparea domeniilor în Ultimate Multisite nu este obligatorie. Ai opțiunea de a folosi funcția nativă de mapare a domeniilor din WordPress Multisite sau orice altă soluție de mapare a domeniilor.

Dacă ai nevoie să dezactivezi maparea domeniilor Ultimate Multisite pentru a face loc altor soluții de mapare a domeniilor, poți dezactiva această funcționalitate din **Ultimate Multisite > Setări > Mapare domenii**.

![Pagina de setări Mapare domenii care arată redirecționarea admin, mesajul de mapare și opțiunile DNS](/img/config/domain-mapping-settings.png)

Chiar sub această opțiune, poți vedea și opțiunea **Forțează redirecționarea admin**. Această opțiune îți permite să controlezi dacă clienții tăi vor putea să își acceseze Dashboard-ul de administrare atât pe domeniul lor personalizat, cât și pe subdomeniu, sau doar pe unul dintre ele.

Dacă selectezi **Forțează redirecționarea către domeniul mapat** , clienții tăi vor putea să își acceseze Dashboard-ul de administrare doar pe domeniile lor personalizate.

Opțiunea **Forțează redirecționarea către** **domeniul rețelei** va face exact opusul - clienților tăi li se va permite să își acceseze Dashboard-urile doar pe subdomeniul lor, chiar dacă încearcă să se autentifice pe domeniile lor personalizate.

Iar opțiunea **Permite accesul la admin atât prin domeniul mapat, cât și prin domeniul rețelei** le permite să își acceseze Dashboard-urile de administrare atât pe subdomeniu, cât și pe domeniul personalizat.

![Meniul derulant Redirecționare admin extins, afișând cele trei opțiuni de redirecționare](/img/config/domain-mapping-redirect-options.png)

Există două moduri de a mapa un domeniu personalizat. Primul este prin maparea numelui de domeniu din Dashboard-ul de administrare al rețelei ca super administrator, iar al doilea este prin Dashboard-ul de administrare al subsite-ului, în pagina Account.

Dar înainte să începi să mapezi domeniul personalizat la unul dintre subsite-urile din rețeaua ta, va trebui să te asiguri că **setările DNS** ale numelui de domeniu sunt configurate corect.

###

### Asigură-te că setările DNS ale domeniului sunt configurate corect {#making-sure-the-domain-dns-settings-are-properly-configured}

Pentru ca o mapare să funcționeze, trebuie să te asiguri că domeniul pe care plănuiești să îl mapezi indică spre adresa IP a rețelei tale. Reține că ai nevoie de adresa IP a rețelei - adresa IP a domeniului unde este instalat Ultimate Multisite - nu de adresa IP a domeniului personalizat pe care vrei să îl mapezi. Pentru a căuta adresa IP a unui anumit domeniu, sugerăm să mergi la [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), de exemplu.

Pentru a mapa corect domeniul, trebuie să adaugi o **ÎNREGISTRARE A** în configurația ta **DNS**, care să indice către acea **adresă IP**. Gestionarea DNS variază foarte mult între diferiți registratori de domenii, dar există multe tutoriale online care acoperă acest subiect dacă cauți „ _Crearea unei înregistrări A pe XXXX_ ”, unde XXXX este registratorul domeniului tău (ex.: „ _Crearea unei înregistrări A pe_ _GoDaddy_ ”).

Dacă întâmpini dificultăți în a face acest lucru să funcționeze, **contactează suportul registratorului domeniului tău**, iar aceștia te vor putea ajuta cu această parte.

Dacă plănuiești să le permiți clienților tăi să își mapeze propriile domenii, ei vor trebui să facă singuri această parte. Îndrumă-i către sistemul de suport al registratorului lor dacă nu reușesc să creeze înregistrarea A.

### Maparea numelui de domeniu personalizat ca Super Administrator {#mapping-custom-domain-name-as-super-admin}

Când ești autentificat ca super administrator în rețeaua ta, poți adăuga și gestiona cu ușurință nume de domenii personalizate mergând la **Ultimate Multisite > Domenii**.

![Pagina listei de domenii în Ultimate Multisite](/img/admin/domains-list.png)

În această pagină, poți face clic pe butonul **Adaugă domeniu** din partea de sus, iar acesta va deschide o fereastră modală în care poți seta și completa **numele de domeniu personalizat** , **subsite-ul** căruia dorești să îi aplici numele de domeniu personalizat și poți decide dacă vrei să îl setezi sau nu ca **nume de domeniu principal** (reține că poți mapa **mai multe nume de domenii la un singur subsite**).

![Fereastra modală Adaugă domeniu cu numele domeniului, selectorul de site și comutatorul pentru domeniul principal](/img/admin/domain-add-modal.png)

După ce ai introdus toate informațiile, poți face clic pe butonul **Adaugă domeniul existent** din partea de jos.

Aceasta va porni procesul de verificare și preluare a informațiilor DNS ale domeniului personalizat. Vei vedea, de asemenea, un jurnal în partea de jos a paginii pentru a urmări procesul prin care trece. Acest proces poate dura câteva minute până se finalizează.

Ultimate Multisite v2.13.0 creează, de asemenea, automat înregistrarea internă a domeniului atunci când este creat un site nou pe o gazdă care ar trebui tratată ca domeniu per-site. Dacă gazda este domeniul principal al rețelei sau unul dintre domeniile de bază partajate pentru formularul de checkout configurate într-un câmp **Site URL**, înregistrarea automată de domeniu mapat este omisă, astfel încât domeniul de bază partajat să rămână disponibil pentru fiecare site care îl folosește.

Când un client înregistrează un domeniu nou prin Domain Seller v1.3.0 sau mai nou, Ultimate Multisite mapează automat, în mod implicit, domeniul înregistrat la site-ul de rețea al clientului. Administratorii nu mai trebuie să adauge o înregistrare separată de domeniu mapat după o înregistrare reușită, cu excepția cazului în care doresc să ajusteze opțiuni precum marcajul de domeniu principal, starea de activare sau gestionarea SSL.

**Stage** sau starea ar trebui să se schimbe din **Checking DNS** în **Ready** dacă totul este configurat corect.

<!-- Captură de ecran indisponibilă: rând de domeniu care arată etapa Checking DNS în lista de domenii -->

<!-- Captură de ecran indisponibilă: rând de domeniu care arată etapa Ready cu indicatorul de stare verde -->

Dacă dai clic pe numele domeniului, vei putea vedea câteva opțiuni în interiorul acestuia. Să le analizăm rapid:

![Pagina de detalii a domeniului cu comutatoare pentru etapă, site, activ, principal și SSL](/img/admin/domain-edit.png)

**Stage:** Aceasta este etapa în care se află domeniul. Când adaugi domeniul pentru prima dată, probabil va fi în etapa **Checking DNS**. Procesul va verifica intrările DNS și va confirma că sunt corecte. Apoi, domeniul va fi pus în etapa **Checking SSL**. Ultimate Multisite va verifica dacă domeniul are SSL sau nu și îți va clasifica domeniul ca **Ready** sau **Ready (without SSL)**.

**Site:** Subdomeniul care este asociat cu acest domeniu. Domeniul mapat va afișa conținutul acestui site specific.

**Active:** Poți activa sau dezactiva această opțiune pentru a activa sau dezactiva domeniul.

**Is Primary Domain?:** Clienții tăi pot avea mai mult de un domeniu mapat pentru fiecare site. Folosește această opțiune pentru a selecta dacă acesta este domeniul principal pentru site-ul specific.

**Is Secure?:** Chiar dacă Ultimate Multisite verifică dacă domeniul are un certificat SSL sau nu înainte de a-l activa, poți selecta manual să încarci domeniul cu sau fără un certificat SSL. Reține că, dacă website-ul nu are un certificat SSL și încerci să forțezi încărcarea lui cu SSL, este posibil să îți dea erori.

### Maparea numelui de domeniu personalizat ca utilizator de Subsite {#mapping-custom-domain-name-as-subsite-user}

Administratorii de Subsite pot, de asemenea, să mapeze nume de domenii personalizate din panoul de administrare al subsite-ului lor.

Mai întâi, trebuie să te asiguri că activezi această opțiune în setările **Domain mapping**. Vezi captura de ecran de mai jos.

<!-- Captură de ecran indisponibilă: setări Domain mapping care permit utilizatorilor de subsite să mapeze domenii prin comutatorul Customer DNS Management -->

Poți, de asemenea, să setezi sau să configurezi această opțiune la nivelul **Plan** sau în opțiunile produsului pe **Ultimate Multisite > Products**.

![Secțiunea Domenii personalizate pe pagina de editare a produsului](/img/config/product-custom-domains.png)

Când oricare dintre aceste opțiuni este activată și unui utilizator de subsite i se permite să mapeze nume de domenii personalizate, utilizatorul de subsite ar trebui să vadă un metabox pe pagina **Account** numit **Domains**.

<!-- Captură de ecran indisponibilă: metabox Domains pe pagina Account a subsite-ului cu butonul Add Domain -->

Utilizatorul poate da clic pe butonul **Add Domain** și acesta va deschide o fereastră modală cu câteva instrucțiuni.

<!-- Captură de ecran indisponibilă: modal Add Domain care arată instrucțiuni pentru înregistrarea DNS A pentru utilizatorii de subsite -->

Utilizatorul poate apoi să dea clic pe **Next Step** și să continue cu adăugarea numelui de domeniu personalizat. De asemenea, poate alege dacă acesta va fi domeniul principal sau nu.

<!-- Captură de ecran indisponibilă: formular Add Domain cu câmp pentru numele de domeniu personalizat și comutator pentru domeniu principal -->

<!-- Captură de ecran indisponibilă: pas de confirmare Add Domain care declanșează verificarea DNS -->

Clic pe **Add Domain** va porni procesul de verificare și preluare a informațiilor DNS ale domeniului personalizat.

### Despre sincronizarea domeniilor {#about-domain-syncing}

Sincronizarea domeniilor este un proces prin care Ultimate Multisite adaugă numele de domeniu personalizat în contul tău de găzduire ca domeniu add-on **pentru ca maparea domeniului să funcționeze**.

Sincronizarea domeniilor are loc automat dacă furnizorul tău de găzduire are integrare cu funcționalitatea de mapare a domeniilor din Ultimate Multisite. În prezent, acești furnizori de găzduire sunt _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ și _Cpanel._

Când o integrare cu furnizorul de găzduire este activă, Ultimate Multisite poate, de asemenea, să pună în coadă sarcina de creare DNS sau subdomeniu pe partea furnizorului pentru site-urile nou create. Dacă nicio integrare nu ascultă acea sarcină, jobul de fundal este omis pentru a evita intrări în coadă fără efect. Verificările DNS și SSL pentru domeniile mapate continuă să ruleze prin procesul normal al etapei domeniului.

Va trebui să activezi această integrare în setările Ultimate Multisite, în fila **Integration**.

![Fila Integrations în setările Ultimate Multisite care arată furnizorii de găzduire](/img/config/integrations-tab.png)

<!-- Captură de ecran indisponibilă: linkuri Configuration ale furnizorului de găzduire în fila de setări Integrations -->

_Reține că, dacă furnizorul tău de găzduire nu este unul dintre furnizorii menționați mai sus,**va trebui să sincronizezi manual sau să adaugi numele de domeniu** în contul tău de găzduire._
