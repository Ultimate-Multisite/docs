---
title: Înregistrează un Cont prin Zapier
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Eveniment: Înregistrează un cont prin Zapier

În articolul [Integrarea Ultimate Multisite cu Zapier](zapier.md), am discutat despre cum poți folosi Zapier pentru a efectua diferite acțiuni în Ultimate Multisite pe baza declanșatoarelor și evenimentelor. În acest articol, îți vom arăta cum poți integra aplicații externe. Vom folosi Google Sheets ca sursă de date și vom trimite informațiile către Ultimate Multisite pentru a înregistra un cont.

Mai întâi, trebuie să creezi un **Google Sheet** în Google Drive. Asigură-te că definești corect fiecare coloană pentru a putea mapa datele cu ușurință ulterior.

![Google Sheet cu coloane pentru datele clientului](/img/admin/webhooks-list.png)După ce ai creat un Google Sheet, te poți conecta la contul tău Zapier și poți începe să creezi un zap.

![Panoul de control Zapier pentru a începe crearea unui zap](/img/admin/webhooks-list.png)În câmpul de căutare pentru **„App event"** selectează **„Google Sheets"**

![Selectarea Google Sheets ca eveniment de aplicație](/img/admin/webhooks-list.png)

Apoi, pentru câmpul „**Event**" selectează „**New spreadsheet row**" și apasă „**Continue**"

![Selectarea evenimentului New spreadsheet row în Zapier](/img/admin/webhooks-list.png)Următorul pas îți va cere să selectezi un **Cont Google** unde este salvat **Google Sheet**-ul. Așadar, asigură-te că este specificat contul Google corect.

![Selectarea Contului Google pentru Google Sheet](/img/admin/webhooks-list.png)

La secțiunea „**Set up trigger**", va trebui să selectezi și să specifici foaia de calcul Google și worksheet-ul pe care le vei folosi ca sursă de date. Completează aceste câmpuri și apasă „**Continue**"

![Configurarea declanșatorului cu selectarea foii de calcul și a worksheet-ului](/img/admin/webhooks-list.png)Următorul pas este să „**testezi declanșatorul**" pentru a te asigura că foaia ta Google este conectată corect.

![Pasul de testare a declanșatorului în Zapier](/img/admin/webhooks-list.png)Dacă testul este reușit, ar trebui să vezi rezultatul afișând câteva valori din foile tale de calcul. Apasă „**Continue**" pentru a continua.

![Test de declanșator reușit care afișează valorile din foaia de calcul](/img/admin/webhooks-list.png)Următorul pas este să configurezi a doua acțiune care va crea sau înregistra un cont în Ultimate Multisite. În câmpul de căutare selectează „**Ultimate Multisite(2.0.2)**"

![Selectarea Ultimate Multisite ca aplicație de acțiune](/img/admin/webhooks-list.png)

La câmpul „**Event**", selectează „**Register an Account in Ultimate Multisite**" apoi apasă butonul „**Continue**".

![Evenimentul de acțiune Register an Account in Ultimate Multisite](/img/admin/webhooks-list.png)La secțiunea „**Set up an action**", vei vedea diferite câmpuri disponibile pentru datele clientului, abonamente, produse etc. Poți mapa valorile din foaia ta Google și le poți atribui câmpului corespunzător în care trebuie să fie completate, așa cum se arată în captura de ecran de mai jos.

![Maparea valorilor din Google Sheet în câmpurile Ultimate Multisite](/img/admin/webhooks-list.png)

După ce ai mapat valorile, poți testa acțiunea.

![Testarea acțiunii Zapier de înregistrare a contului](/img/admin/webhooks-list.png)
