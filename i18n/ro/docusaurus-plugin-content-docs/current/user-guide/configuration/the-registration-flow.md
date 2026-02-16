---
title: Fluxul de Înregistrare
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Fluxul de Înregistrare (v2)

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Utilizatorii se pot înregistra în rețeaua ta în mai multe moduri. Pot folosi formularul de înregistrare sau un link care poate fi distribuit către un plan preselectat. Aici îți vom arăta cum se pot înregistra clienții tăi în rețea folosind căile disponibile și ce se întâmplă după ce se înregistrează.

## Folosind Formularul de Înregistrare:

Acesta este procesul standard de înregistrare. Creezi o pagină de înregistrare cu un **formular de checkout** și aici vor veni clienții tăi pentru a se înregistra în rețea și a se abona la un plan. Poți avea mai multe pagini de înregistrare, fiecare cu un formular de înregistrare diferit, dacă dorești.

Pagina implicită pentru înregistrare este [_**domeniultau.com/register**_](http://yourdomain.com/register), dar poți schimba asta oricând din **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

După ce un utilizator ajunge pe pagina ta de înregistrare (de obicei făcând clic pe un buton **Conectare** sau **Cumpără acum**), va vedea formularul de înregistrare acolo.

![Formularul de înregistrare afișat pe pagina de înregistrare](/img/config/checkout-forms-list.png)

Tot ce trebuie să facă este să completeze toate câmpurile obligatorii - email, nume de utilizator, parolă, etc... - și să plătească pentru plan sau să-și confirme adresa de email dacă se înregistrează pentru un plan gratuit sau un plan plătit cu perioadă de probă fără informații de plată.

Pe pagina „Mulțumim", vor vedea un mesaj care le spune dacă trebuie să-și confirme adresa de email sau dacă site-ul lor este deja activat și pot începe să-l folosească.

![Pagina Mulțumim după înregistrare](/img/config/checkout-form-editor.png)

Dacă este necesară confirmarea adresei de email, vor trebui să meargă în căsuța lor de email și să facă clic pe linkul de verificare. Site-ul lor nu va fi activat dacă adresa de email nu este verificată.

Dacă s-au înregistrat la un plan plătit sau verificarea emailului nu este obligatorie în rețeaua ta, site-ul lor va fi activat imediat după checkout și li se va afișa un link pentru a se conecta la dashboard.

![Site activat cu link pentru conectare la dashboard](/img/config/checkout-form-editor.png)

## Folosind un Link Distribuibil:

Procesul de înregistrare folosind un link distribuibil este practic același ca la formularul de înregistrare, singura diferență fiind că folosind un link distribuibil, clienții tăi pot avea un produs sau un șablon de site preselectat în formularul de checkout (vezi secțiunea Preselectarea produselor și șabloanelor prin parametri URL) sau poate un cod de cupon adăugat (vezi secțiunea Folosirea Parametrilor URL).

Procesul de înregistrare va fi același: vor trebui să completeze numele, numele de utilizator, adresa de email, numele și titlul site-ului, etc... dar planul sau șablonul de site va fi deja preselectat pentru ei.

### Înregistrarea Folosind Plăți Manuale:

Dacă nu vrei să folosești PayPal, Stripe sau orice alt gateway de plată oferit de Ultimate Multisite sau de integrările sale add-on, poți folosi plăți manuale pentru clienții tăi. În acest fel, poți genera o factură pe care să o plătească în procesatorul de plăți preferat de tine după ce se înregistrează în rețea.

Procesul de înregistrare va fi exact același ca mai sus, dar pe pagina de înregistrare clienții tăi vor vedea un mesaj care precizează că vor primi un email cu instrucțiuni suplimentare pentru a finaliza plata.

![Mesaj de plată manuală în timpul înregistrării](/img/config/settings-payment-gateways.png)

Și după ce înregistrarea este finalizată, vor vedea instrucțiunile de plată pe care le-ai setat (și le vor primi și pe email).

![Instrucțiuni de plată afișate după înregistrare](/img/config/settings-payment-gateways.png)

Instrucțiunile de plată pot fi modificate din **Ultimate Multisite > Settings > Payments** după ce activezi opțiunea de plată **Manual**:

![Comutatorul pentru plată manuală cu câmpul pentru instrucțiuni de plată](/img/config/settings-payment-gateways.png)

După ce clienții tăi finalizează plata manuală și îți trimit confirmarea, trebuie să **confirmi manual plata** pentru a activa abonamentul și site-ul clientului.

Pentru a face asta, mergi la **Ultimate Multisite > Payments** și găsește plata clientului. Ar trebui să arate încă statusul **Pending**.

![Lista de plăți cu plată manuală în așteptare](/img/admin/payments-list.png)

Fă clic pe numărul plății și vei putea schimba statusul în **Completed**.

![Pagina cu detaliile plății](/img/admin/payments-list.png)

![Schimbarea statusului plății în Completed](/img/admin/payments-list.png)

După schimbarea statusului în **Completed**, ar trebui să vezi un mesaj **Activate membership**. Activează această opțiune pentru a activa abonamentul și site-ul asociat cu acest client. Apoi, fă clic pe **Save Payment**.

![Comutatorul Activate membership și butonul Save Payment](/img/admin/payments-list.png)

Clientul tău ar trebui acum să poată accesa dashboard-ul și toate funcționalitățile la care s-a abonat.
