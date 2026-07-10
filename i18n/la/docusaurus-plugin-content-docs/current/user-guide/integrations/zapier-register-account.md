---
title: Registra una conta per Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Eventum: Registrare un contul prin Zapier {#event-register-an-account-via-zapier}

În articolul [Integrarea Ultimate Multisite cu Zapier](zapier.md), am discutat despre cum să folosești Zapier pentru a realiza diferite acțiuni în cadrul Ultimate Multisite, bazându-te pe trigger-uri și evenimente. În acest articol, vom arăta cum poți integra aplicații terțe. Vom folosi Google Sheets ca sursă de date și le vom trimite informațiile către Ultimate Multisite pentru a se înregistra un cont.

Înainte de a conecta Zapier, mergi la **Ultimate Multisite > Settings > API & Webhooks** și confirmă că API-ul este activat. Copiază Cheia API (API Key) și Secretul API (API Secret) din această ecrană atunci când Zapier te cere credențialele contului Ultimate Multisite.

![Setări API și Webhooks cu Cheia API, Secretul API și opțiunile de activare a API-ului](/img/admin/settings-api-webhooks.png)

În primul rând, trebuie să creezi o **Google Sheet** în Google Drive-ul tău. Asigură-te că definesc corect fiecare coloană pentru a putea mape datele mai ușor ulterior.

După crearea unei Google Sheets, poți intra în contul tău Zapier și începe să creezi un zap.

Sub câmpul de căutare pentru **"App event"** (Eveniment aplicație), selectează **"Google Sheets"**.

Apoi, pentru câmpul "**Event**", selectează "**New spreadsheet row**" (Nouă linie în foaie). Apasă "**Continue**" (Continuă).

Urma pas va te cere să selectezi un **Google Account** (Cont Google) unde este salvată Google Sheet-ul. Așadar, asigură-te doar că ai specificat contul Google corect.

Sub **"Set up trigger"** (Configurare trigger), vei trebui să selectezi și să specifice Google Sheet-ul și foaia de calcul pe care o vei folosi ca sursă a datelor. Pur și simplu completează acele câmpuri și apasă "**Continue**".

Următorul pas este **"test your trigger"** (Testează trigger-ul) pentru a te asigura că Google Sheet-ul tău este conectat corect.

Dacă testul tău reușește, ar trebui să vezi rezultatul care arată unele valori din foile tale de calcul. Apasă "**Continue**" pentru a continua.

Hoc est iter successivo ut configure secundam actionem quae computat vel registrat account in Ultimate Multisite. In campo search select "**Ultimate Multisite(2.0.2)** ".

Sub campo "**Event** ", select "**Register an Account in Ultimate Multisite** " deinde cliqua in boton "**Continue** ".

Sub "**Set up an action** ", vides diversos campos ad datae clienti, membranas, producta, etc. Valores possis sub tua google sheet mappare et eos ad campum propriam assignare ubi debent esse populi, sicut in screenshot alio ostenditur.

Post mappationem valorum, actionem probare possis.
