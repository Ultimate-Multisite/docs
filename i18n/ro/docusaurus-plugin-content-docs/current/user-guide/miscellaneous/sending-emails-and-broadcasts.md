---
title: Trimiterea e-mailurilor și a difuzărilor
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Trimiterea de emailuri și Broadcasts (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Ultimate Multisite vine cu o funcționalitate care îți va permite să comunici cu clienții tăi trimițând un email către un utilizator țintit sau un grup de utilizatori, precum și trimițând notificări pe Dashboard-ul lor de administrare pentru a difuza anunțuri

## Adaugă notificări de administrare în dashboard-ul clienților tăi cu Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Folosind funcționalitatea de broadcast Ultimate Multisite, poți adăuga **notificări de administrare** în dashboard-ul de administrare al subsite-ului utilizatorului tău.

Acest lucru este extrem de util dacă trebuie să faci un anunț, precum mentenanță de sistem sau oferirea de produse ori servicii noi utilizatorilor tăi existenți. Așa va arăta notificarea de administrare pe dashboard-ul utilizatorului tău.

<!-- Captură de ecran indisponibilă: Broadcast cu notificare de administrare afișat pe dashboard-ul subsite-ului unui client -->

Pentru a începe o notificare de administrare, mergi la dashboard-ul de administrare al rețelei și, sub meniul **Ultimate Multisite**, vei găsi opțiunea **Broadcasts**.

![Pagina listei Broadcasts în administrarea Ultimate Multisite](/img/admin/broadcasts-list.png)

De asemenea, poți edita broadcast-uri existente:

![Interfața de editare a broadcast-ului](/img/admin/broadcast-edit.png)

Din această pagină, apasă butonul **Adaugă Broadcast** din partea de sus.

Aceasta va deschide fereastra modală Adăugare broadcast, unde poți alege ce tip de broadcast dorești să trimiți.

Continuă și selectează **Mesaj**, apoi apasă butonul **Pasul următor**.

![Modalul de adăugare broadcast cu opțiunea Mesaj selectată](/img/admin/broadcast-add-message.png)

Următoarea fereastră îți va cere fie **Client țintă**, fie **Produs țintă**. Reține că poți selecta mai mult de un utilizator sau mai mult de un produs.

Pentru a căuta fie un Account de utilizator, fie un produs, trebuie să începi să tastezi cuvântul-cheie în câmp.

Sub câmpul **Tip mesaj**, poți selecta culoarea notificării. Aceasta va sublinia urgența mesajului tău.

Apoi poți apăsa **Pasul următor**.

![Câmpurile clienți țintă, produs țintă și tip mesaj pentru un broadcast de tip Mesaj](/img/admin/broadcast-message-targets.png)

Următoarea fereastră este locul unde poți începe să compui mesajul, introducând subiectul și conținutul/mesajul pe care dorești să îl difuzezi utilizatorilor.

![Subiectul mesajului de broadcast și editorul de conținut la pasul de compunere](/img/admin/broadcast-edit.png)

După ce ai creat mesajul, poți apăsa butonul **Trimite**.

Și asta este tot. Notificarea de administrare ar trebui să apară imediat pe dashboard-ul utilizatorului tău.

## Trimite emailuri clienților tăi {#send-emails-to-your-customers}

Folosind funcționalitatea de broadcast Ultimate Multisite, poți trimite un email utilizatorilor tăi. Ai opțiunea de a trimite emailul doar anumitor utilizatori sau de a ținti un anumit grup de utilizatori pe baza produsului sau planului la care sunt abonați.

Pentru a începe un broadcast prin email, mergi la dashboard-ul de administrare al rețelei și, sub meniul Ultimate Multisite, vei găsi opțiunea Broadcast.

![Pagina listei Broadcasts folosită ca punct de pornire pentru un broadcast prin email](/img/admin/broadcasts-list.png)

Din această pagină, apasă butonul **Adaugă broadcast** din partea de sus.

Aceasta va deschide fereastra modală Adăugare broadcast, unde poți alege ce tip de broadcast dorești să trimiți. Continuă și selectează **Email**, apoi apasă butonul **Pasul următor**.

![Modalul de adăugare broadcast cu opțiunea Email selectată](/img/admin/broadcast-add-email.png)

Următoarea fereastră îți va cere fie **Client țintă**, fie **Produs țintă**. Reține că poți selecta mai mult de un utilizator sau mai mult de un produs.

Pentru a căuta fie un Account de utilizator, fie un produs, trebuie să începi să tastezi cuvântul-cheie în câmp.

După ce publicul țintă este selectat, poți apăsa **Pasul următor**.

![Selecția clienților țintă și a produsului țintă pentru un broadcast prin Email](/img/admin/broadcast-email-targets.png)

Următoarea fereastră este locul unde poți începe să compui emailul, introducând subiectul și conținutul/mesajul pe care dorești să îl trimiți utilizatorilor.

<!-- Captură de ecran indisponibilă: Subiectul broadcast-ului prin email și editorul de conținut la pasul de compunere -->

După ce ai creat mesajul, poți apăsa butonul **Trimite**.

Și așa de ușor este să trimiți un email utilizatorilor tăi finali folosind funcționalitatea de broadcast.

## Emailuri de sistem {#system-emails}

Emailurile de sistem din Ultimate Multisite sunt acele **notificări automate** trimise de sistem după anumite acțiuni, precum înregistrarea, plata, maparea domeniului etc. Aceste emailuri pot fi editate sau modificate din setările Ultimate Multisite. De asemenea, vine cu o funcționalitate care îți va permite să resetezi și să imporți setările existente dintr-o altă instalare Ultimate Multisite.

### Resetare și importare {#resetting--importing}

Noile versiuni Ultimate Multisite, precum și add-on-urile, pot și vor înregistra emailuri noi din când în când.

Pentru a preveni conflictele și alte probleme, **nu vom adăuga automat noile șabloane de email ca Emailuri de sistem în instalarea ta** , decât dacă sunt esențiale pentru funcționarea corectă a unei anumite funcționalități.

Totuși, super administratorii și agenții pot importa aceste emailuri nou înregistrate prin instrumentul de import. Acest proces va crea un nou email de sistem cu conținutul și configurația noului șablon de email, permițând super administratorului să facă orice modificări dorește sau să le păstreze așa cum sunt.

#### Cum să imporți emailuri de sistem {#how-to-import-system-emails}

Mergi la pagina Setări Ultimate Multisite și accesează fila **Emailuri**.

![Fila Emailuri din setările Ultimate Multisite afișând secțiunea Emailuri de sistem](/img/config/settings-emails-tab.png)

Apoi, în bara laterală, apasă pe butonul **Personalizează Emailurile de sistem**.

<!-- Captură de ecran indisponibilă: Butonul Personalizează Emailurile de sistem în panoul lateral Emailuri de sistem -->

Pe pagina Emailuri de sistem, vei vedea butonul de acțiune **Resetare și importare** în partea de sus. Apăsarea acelui buton ar trebui să deschidă fereastra modală de importare și resetare.

![Butonul de acțiune Resetare sau Importare pe pagina de administrare Emailuri de sistem](/img/admin/system-emails-reset-import.png)

Apoi, poți comuta opțiunile Import Emails pentru a vedea ce emailuri de sistem sunt disponibile pentru importare.

<!-- Captură de ecran indisponibilă: fereastra modală Resetare și importare cu opțiunile de importare a emailurilor extinse -->

#### Resetarea emailurilor de sistem {#reseting-system-emails}

Alteori, îți vei da seama că modificările pe care le-ai făcut unui anumit șablon de email nu mai funcționează pentru tine și ai dori să îl resetezi la **starea implicită**.

În astfel de cazuri, ai două opțiuni: poți pur și simplu să ștergi emailul de sistem și să îl imporți înapoi (folosind instrucțiunile de mai sus) - ceea ce va șterge metricile de trimitere și alte lucruri, făcând această metodă cea mai puțin preferată.

Sau poți folosi **instrumentul Resetare și importare** pentru a reseta acel șablon de email.

Pentru a reseta un șablon de email, poți urma pașii de mai sus până ajungi la instrumentul Resetare și importare, apoi activează opțiunea **Resetare** și selectează emailurile pe care vrei să le resetezi la conținutul lor implicit.

<!-- Captură de ecran indisponibilă: fereastra modală Resetare și importare cu opțiunile de resetare a emailurilor extinse -->
