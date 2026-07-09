---
title: Înregistrează un Account prin Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Eveniment: Înregistrarea unui Account prin Zapier

În articolul [Integrarea Ultimate Multisite cu Zapier](zapier.md), am discutat cum să folosești Zapier pentru a efectua diferite acțiuni în Ultimate Multisite pe baza triggerelor și evenimentelor. În acest articol, vom arăta cum poți integra aplicații terțe. Vom folosi Google Sheets ca sursă de date și vom trimite informațiile către Ultimate Multisite pentru a înregistra un Account.

Înainte de a conecta Zapier, mergi la **Ultimate Multisite > Settings > API & Webhooks** și confirmă că API este activat. Copiază API Key și API Secret de pe acest ecran când Zapier solicită credențialele Account Ultimate Multisite.

![Setări API și Webhooks cu opțiunile API Key, API Secret și Enable API](/img/admin/settings-api-webhooks.png)

Mai întâi, trebuie să creezi un **Google Sheet** în Google Drive. Asigură-te că definești corect fiecare coloană, astfel încât să poți mapa cu ușurință datele mai târziu.

După crearea unui Google sheet, te poți autentifica în contul tău Zapier și poți începe să creezi un zap.

Sub câmpul de căutare pentru **"App event"** selectează **"Google Sheets"**


Apoi, pentru câmpul "**Event** " selectează "**New spreadsheet row** " și apasă "**Continue** "

Pasul următor îți va cere să selectezi un **Google Account** unde este salvat **Google Sheet**. Așadar, asigură-te doar că este specificat contul google corect.


Sub **"Set up trigger** ", va trebui să selectezi și să specifici foaia de calcul google și foaia de lucru pe care le vei folosi, de unde vor proveni datele. Completează-le și apasă "**Continue** "

Următorul pas este să "**test your trigger** " pentru a te asigura că google sheet este conectat corect.

Dacă testul este reușit, ar trebui să vezi rezultatul afișând câteva valori din foile tale de calcul. Fă clic pe "**Continue** " pentru a continua.

Următorul pas este să configurezi a doua acțiune, care va crea sau înregistra un Account în Ultimate Multisite. În câmpul de căutare selectează "**Ultimate Multisite(2.0.2)** "


Sub câmpul "**Event** ", selectează "**Register an Account in Ultimate Multisite** ", apoi fă clic pe butonul "**Continue** ".

Sub "**Set up an action** ", vei vedea diferite câmpuri disponibile pentru datele clientului, membership-uri, produse etc. Poți mapa valorile din google sheet și le poți atribui câmpului corespunzător în care ar trebui populate, așa cum se arată în captura de ecran de mai jos.


După maparea valorilor, poți testa acțiunea.
