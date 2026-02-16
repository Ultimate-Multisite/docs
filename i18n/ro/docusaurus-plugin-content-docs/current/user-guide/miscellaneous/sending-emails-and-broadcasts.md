---
title: Trimiterea Email-urilor și a Mesajelor Broadcast
sidebar_position: 11
_i18n_hash: 2c1041bf76187ffc82978d1fa966fb23
---
# Trimiterea de emailuri și anunțuri (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Ultimate Multisite include o funcționalitate care îți permite să comunici cu clienții tăi prin trimiterea unui email către un utilizator specific sau un grup de utilizatori, precum și prin afișarea de notificări în panoul lor de administrare pentru a transmite anunțuri.

## Adaugă notificări de administrare în dashboard-ul clienților tăi cu Broadcasts

Folosind funcționalitatea de broadcast din Ultimate Multisite, poți adăuga **notificări de administrare** în panoul de administrare al subsiturilor utilizatorilor tăi.

Acest lucru este extrem de util atunci când trebuie să faci un anunț despre mentenanța sistemului sau să oferi produse sau servicii noi utilizatorilor existenți. Așa va arăta notificarea de administrare în dashboard-ul utilizatorului tău.

![Notificare broadcast afișată în dashboard-ul clientului](/img/admin/broadcasts-list.png)

Pentru a crea o notificare de administrare, accesează panoul de administrare al rețelei și în meniul **Ultimate Multisite** vei găsi opțiunea **Broadcasts**.

![Meniul Broadcasts în administrarea Ultimate Multisite](/img/admin/broadcasts-list.png)

Din această pagină, apasă butonul **Add Broadcast** din partea de sus.

Aceasta va deschide fereastra modală Add broadcast unde poți alege ce tip de broadcast dorești să trimiți.

Selectează **Message** și apoi apasă butonul **Next Step**.

![Fereastra modală Add broadcast cu tipul Message selectat](/img/admin/broadcasts-list.png)

Următoarea fereastră îți va cere să alegi **Target customer** sau **Target product**. Poți selecta mai mult de un utilizator sau mai mult de un produs.

Pentru a căuta un cont de utilizator sau un produs, trebuie să începi să tastezi cuvântul cheie în câmp.

În câmpul **Message type**, poți selecta culoarea notificării. Aceasta va sublinia urgența mesajului tău.

Apoi poți apăsa **Next Step**.

![Selectarea clientului țintă și a produsului pentru broadcast](/img/admin/broadcasts-list.png)

Următoarea fereastră este locul unde poți compune mesajul tău introducând subiectul și conținutul/mesajul pe care dorești să îl transmiți utilizatorilor.

![Editorul pentru subiect și conținut al mesajului broadcast](/img/admin/broadcasts-list.png)

După ce ai creat mesajul, poți apăsa butonul **Send**.

Și asta e tot. Notificarea de administrare ar trebui să apară imediat în dashboard-ul utilizatorului tău.

## Trimite emailuri clienților tăi

Folosind funcționalitatea de broadcast din Ultimate Multisite, poți trimite un email utilizatorilor tăi. Ai opțiunea de a trimite emailul doar unor utilizatori specifici sau de a viza un grup specific de utilizatori în funcție de produsul sau planul la care sunt abonați.

Pentru a începe un broadcast prin email, accesează panoul de administrare al rețelei și în meniul Ultimate Multisite vei găsi opțiunea Broadcast.

![Pagina Broadcasts în administrarea Ultimate Multisite](/img/admin/broadcasts-list.png)

Din această pagină, apasă butonul **Add broadcast** din partea de sus.

Aceasta va deschide fereastra modală Add broadcast unde poți alege ce tip de broadcast dorești să trimiți. Selectează **Email** și apoi apasă butonul **Next Step**.

![Fereastra modală Add broadcast cu tipul Email selectat](/img/admin/broadcasts-list.png)

Următoarea fereastră îți va cere să alegi **Target customer** sau **Target product**. Poți selecta mai mult de un utilizator sau mai mult de un produs.

Pentru a căuta un cont de utilizator sau un produs, trebuie să începi să tastezi cuvântul cheie în câmp.

După ce ai selectat audiența țintă, poți apăsa **Next Step**.

![Selectarea clientului țintă și a produsului pentru broadcast prin email](/img/admin/broadcasts-list.png)

Următoarea fereastră este locul unde poți compune emailul tău introducând subiectul și conținutul/mesajul pe care dorești să îl trimiți utilizatorilor.

![Editorul pentru subiect și conținut al broadcast-ului prin email](/img/admin/broadcasts-list.png)

După ce ai creat mesajul, poți apăsa butonul **Send**.

Și iată cât de ușor este să trimiți un email utilizatorilor tăi folosind funcționalitatea de broadcast.

## Emailuri de sistem

Emailurile de sistem din Ultimate Multisite sunt acele **notificări automate** trimise de sistem după anumite acțiuni precum înregistrarea, plata, maparea domeniului etc. Aceste emailuri pot fi editate sau modificate din setările Ultimate Multisite. De asemenea, există o funcționalitate care îți permite să resetezi și să imporți setări existente dintr-o altă instalare Ultimate Multisite.

### Resetare și Import

Noile versiuni Ultimate Multisite, precum și add-on-urile, pot și vor înregistra emailuri noi din când în când.

Pentru a preveni conflictele și alte probleme, **nu vom adăuga automat noile șabloane de email ca Emailuri de sistem în instalarea ta**, decât dacă sunt esențiale pentru funcționarea corectă a unei anumite funcționalități.

Cu toate acestea, super adminii și agenții pot importa aceste emailuri nou înregistrate prin instrumentul de import. Acest proces va crea un nou email de sistem cu conținutul și configurația noului șablon de email, permițând super adminului să facă orice modificări dorește sau să le păstreze așa cum sunt.

#### Cum să imporți emailuri de sistem

Accesează pagina de setări Ultimate Multisite și navighează la tab-ul **Emails**.

![Tab-ul Emails în setările Ultimate Multisite](/img/config/settings-emails.png)

Apoi, în bara laterală, apasă pe butonul **Customize System Emails**.

![Butonul Customize System Emails în bara laterală](/img/config/settings-emails.png)

Pe pagina System Emails, vei vedea butonul de acțiune **Reset & Import** în partea de sus. Apăsând acel buton ar trebui să deschidă fereastra modală de import și resetare.

![Butonul de acțiune Reset and Import pe pagina System Emails](/img/config/settings-emails.png)

Apoi, poți activa opțiunile Import Emails pentru a vedea ce emailuri de sistem sunt disponibile pentru import.

![Opțiunile Import Emails care arată emailurile de sistem disponibile](/img/config/settings-emails.png)

#### Resetarea Emailurilor de sistem

Alteori, vei realiza că modificările pe care le-ai făcut unui anumit șablon de email nu mai funcționează pentru tine și ai dori să îl resetezi la **starea implicită**.

În astfel de cazuri, ai două opțiuni: poți pur și simplu să ștergi emailul de sistem și să îl imporți înapoi (folosind instrucțiunile de mai sus) - ceea ce va șterge metricile de trimitere și alte date, făcând această metodă mai puțin preferată.

Sau poți folosi instrumentul **Reset & Import** pentru a reseta acel șablon de email.

Pentru a reseta un șablon de email, poți urma pașii de mai sus până ajungi la instrumentul Reset & Import, și apoi, activează opțiunea **Reset** și selectează emailurile pe care dorești să le resetezi la conținutul lor implicit.

![Opțiunea Reset pentru restaurarea șabloanelor de email la valorile implicite](/img/config/settings-emails.png)
