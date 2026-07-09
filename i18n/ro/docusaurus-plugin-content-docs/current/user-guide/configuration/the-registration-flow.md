---
title: Fluxul de înregistrare
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Fluxul de înregistrare (v2) {#the-registration-flow-v2}

_**NOTĂ IMPORTANTĂ: Acest articol se referă la Ultimate Multisite versiunea 2.x.**_

Utilizatorii se pot înregistra în moduri diferite în rețeaua ta. Ei pot folosi formularul tău de înregistrare sau un link partajabil către un plan preselectat. Aici îți vom arăta cum se pot înregistra clienții tăi în rețeaua ta folosind căile disponibile și ce se întâmplă după ce se înregistrează în rețeaua ta.

## Folosind formularul de înregistrare: {#using-the-registration-form}

Acesta este procesul standard de înregistrare. Creezi o pagină de înregistrare cu un **formular de checkout**, iar acesta va fi locul unde clienții tăi vor merge pentru a se înregistra în rețeaua ta și a se abona la un plan. Poți avea mai multe pagini de înregistrare, fiecare cu un formular de înregistrare diferit, dacă dorești.

Pagina implicită pentru înregistrare este [_**yourdomain.com/register**_](http://yourdomain.com/register), dar poți schimba acest lucru oricând din **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

După ce un utilizator ajunge la pagina ta de înregistrare (de obicei făcând clic pe un buton **Autentifică-te** sau **Cumpără acum**), va vedea acolo formularul tău de înregistrare.

![Formular de înregistrare afișat pe pagina de înregistrare](/img/frontend/registration-form.png)

Iată un exemplu al formularului de checkout așa cum apare pe frontend:

![Formular de înregistrare checkout pe frontend](/img/config/checkout-frontend-registration.png)

Tot ce trebuie să facă este să completeze toate câmpurile obligatorii - email, nume de utilizator, parolă etc... - și să plătească pentru plan sau să își confirme adresa de email dacă se înregistrează pentru un plan gratuit sau un plan plătit cu perioadă de probă fără informații de plată.

Pe pagina „Mulțumim”, vor vedea un mesaj care le spune dacă trebuie să își confirme adresa de email sau dacă website-ul lor este deja activat și îl pot începe să îl folosească.

![Pagina Mulțumim după înregistrare](/img/frontend/registration-thank-you.png)

Dacă este necesară confirmarea adresei de email, vor trebui să meargă în inboxul lor de email și să facă clic pe linkul de verificare. Website-ul lor nu va fi activat dacă adresa lor de email nu este verificată.

Dacă s-au înregistrat pe un plan plătit sau verificarea emailului nu este obligatorie în rețeaua ta, website-ul lor va fi activat imediat după checkout și li se va afișa un link pentru a se autentifica în Dashboard.

![Site activat cu link pentru autentificare în Dashboard](/img/frontend/site-activated.png)

## Folosind un link partajabil: {#using-a-shareable-link}

Procesul de înregistrare folosind un link partajabil este, în principiu, același ca formularul de înregistrare; singura diferență este că, folosind un link partajabil, clienții tăi pot avea un produs sau un șablon de website preselectat în formularul de checkout (consultă secțiunea Preselectarea produselor și șabloanelor prin parametri URL) sau poate un cod de cupon adăugat (consultă secțiunea Folosirea parametrilor URL).

Procesul de înregistrare va fi același: vor trebui să își completeze numele, numele de utilizator, adresa de email, numele și titlul website-ului etc... dar planul sau șablonul de site va fi deja preselectat pentru ei.

### Înregistrarea folosind plăți manuale: {#registering-using-manual-payments}

Dacă nu vrei să folosești PayPal, Stripe sau orice alt gateway de plată oferit de Ultimate Multisite sau de integrările sale add-on, poți folosi plăți manuale pentru clienții tăi. În acest mod, poți genera o factură pentru ca ei să plătească prin procesatorul de plăți preferat după ce se înregistrează în rețeaua ta.

Procesul de înregistrare va fi exact același ca mai sus, dar pe pagina de înregistrare clienții tăi vor vedea un mesaj care precizează că vor primi un email cu instrucțiuni suplimentare pentru a finaliza plata.

![Mesaj de plată manuală în timpul înregistrării](/img/frontend/registration-manual-notice.png)

Iar după ce înregistrarea este finalizată, vor vedea instrucțiunile de plată pe care le-ai setat (și le vor primi, de asemenea, pe email).

![Instrucțiuni de plată afișate după înregistrare](/img/frontend/registration-payment-instructions.png)

Instrucțiunile de plată pot fi schimbate din **Ultimate Multisite > Settings > Payments** după activarea opțiunii de plată **Manual**:

![Comutator de plată manuală cu câmp pentru instrucțiuni de plată](/img/config/manual-gateway-settings.png)

După ce clienții tăi finalizează plata manuală și îți trimit confirmarea, trebuie să **confirmi manual plata** pentru a activa abonamentul clientului și website-ul.

Pentru a face acest lucru, mergi la **Ultimate Multisite > Payments** și găsește plata clientului. Ar trebui să afișeze încă starea **Pending**.

![Listă de plăți cu plată manuală în așteptare](/img/admin/payments-list.png)

Fă clic pe numărul plății și vei putea schimba starea acesteia în **Completed**.

![Pagina detaliilor plății](/img/admin/payment-edit.png)

![Schimbarea stării plății în Completed](/img/admin/payment-status-completed.png)

După schimbarea stării în **Completed** , ar trebui să vezi un mesaj **Activează abonamentul**. Comută această opțiune pe **on** pentru a activa abonamentul și website-ul asociat cu acest client. Apoi, fă clic pe **Save Payment**.

![Comutator Activează abonamentul și butonul Save Payment](/img/admin/payment-activate-membership.png)

Clientul tău ar trebui acum să poată accesa Dashboard și toate funcționalitățile la care s-a abonat.
