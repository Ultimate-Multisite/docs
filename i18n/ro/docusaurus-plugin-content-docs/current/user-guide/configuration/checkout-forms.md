---
title: Formulare de finalizare comandă
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Formulare de checkout

Formularele de checkout sunt o modalitate ușoară și flexibilă de a experimenta diferite abordări pentru a converti noi clienți.

Ultimate Multisite 2.0 oferă un editor de formulare de checkout care îți permite să creezi câte formulare dorești, cu diferite câmpuri, produse disponibile etc.

Pentru a accesa această funcție, mergi la meniul Checkout Forms, în bara laterală din stânga.

![Lista formularelor de checkout](/img/config/checkout-forms-list.png)

Pe această pagină poți vedea toate formularele de checkout pe care le ai.

Dacă vrei să creezi unul nou, pur și simplu apasă pe Add Checkout Form în partea de sus a paginii.

Poți selecta una dintre cele trei opțiuni ca punct de plecare: un singur pas, mai mulți pași sau gol. Apoi, apasă pe Go to the Editor.

![Editor formular de checkout](/img/config/checkout-form-editor.png)

Alternativ, poți edita sau duplica formularele existente apăsând pe opțiunile de sub numele acestora. Acolo vei găsi și opțiunile pentru a copia shortcode-ul formularului sau pentru a-l șterge.

![Acțiuni la hover pe formularul de checkout](/img/config/checkout-form-hover-actions.png)

### Editarea unui formular de checkout

Poți crea formulare de checkout pentru diferite scopuri. În acest exemplu vom lucra la un formular de înregistrare.

După ce navighezi la editorul de formulare de checkout, dă formularului tău un nume (care va fi folosit doar pentru referință internă) și un slug (folosit pentru a crea shortcode-uri, de exemplu).

![Editor formular de checkout](/img/config/checkout-form-editor.png)

Formularele sunt alcătuite din pași și câmpuri. Poți adăuga un pas nou apăsând pe Add New Checkout Step.

![Adaugă pas nou de checkout](/img/config/checkout-form-add-step.png)

În prima filă a ferestrei modale, completează conținutul pasului formularului. Dă-i un ID, un nume și o descriere. Aceste elemente sunt folosite în principal intern.

![Pas formular de checkout](/img/config/checkout-form-step.png)

Apoi, setează vizibilitatea pasului. Poți alege între „Afișează întotdeauna", „Afișează doar pentru utilizatorii autentificați" sau „Afișează doar pentru vizitatori".

![Pas formular de checkout](/img/config/checkout-form-step.png)

În cele din urmă, configurează stilul pasului. Acestea sunt câmpuri opționale.

![Pas formular de checkout](/img/config/checkout-form-step.png)

Acum este momentul să adăugăm câmpuri la primul nostru pas. Pur și simplu apasă pe Add New Field și selectează tipul de secțiune dorit.

![Pas formular de checkout cu câmpuri](/img/config/checkout-form-step.png)

Fiecare câmp are diferiți parametri de completat. Pentru această primă intrare, vom selecta câmpul „Username".

![Pas formular de checkout](/img/config/checkout-form-step.png)

![Pas formular de checkout](/img/config/checkout-form-step.png)

![Pas formular de checkout](/img/config/checkout-form-step.png)

Poți adăuga câți pași și câmpuri ai nevoie. Pentru a afișa produsele tale astfel încât clienții să aleagă unul, folosește câmpul Pricing Table. Dacă vrei să le permiți clienților să aleagă un template, adaugă câmpul Template Selection. Și așa mai departe.

_**Notă:** username, email, parolă, titlu site, URL site, sumar comandă, plată și buton de trimitere sunt câmpuri obligatorii pentru a crea un formular de checkout._

În timp ce lucrezi la formularul de checkout, poți folosi oricând butonul Preview pentru a vedea cum vor vedea clienții tăi formularul. Poți alterna și între vizualizarea ca utilizator existent sau ca vizitator.

![Salvare formular de checkout](/img/config/checkout-form-save.png)

![Editor formular de checkout](/img/config/checkout-form-editor.png)

În cele din urmă, în Advanced Options poți configura mesajul pentru pagina de „Mulțumim", adăuga snippet-uri pentru urmărirea conversiilor, adăuga CSS personalizat la formularul de checkout sau restricționa accesul la anumite țări.

![Opțiuni avansate](/img/config/checkout-form-advanced.png)

Poți, de asemenea, activa sau dezactiva manual formularul de checkout folosind această opțiune din coloana din dreapta, sau șterge permanent formularul.

![Comutator activ](/img/config/checkout-form-active.png)

Nu uita să salvezi formularul de checkout!

![Buton salvare](/img/config/checkout-form-save.png)

Pentru a obține shortcode-ul formularului, apasă pe Generate Shortcode și copiază rezultatul afișat în fereastra modală.

![Buton salvare cu shortcode](/img/config/checkout-form-save.png)
