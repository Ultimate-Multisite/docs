---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# O primă privire asupra Webhook-urilor (v2)

_**ATENȚIE: Această funcționalitate sau articol este destinat utilizatorilor avansați.**_

Un **webhook** este o modalitate prin care o aplicație sau un software precum Ultimate Multisite poate furniza altor aplicații informații în timp real. Un webhook livrează date sau payload-uri către alte aplicații imediat ce acestea devin disponibile, ceea ce înseamnă că **primești datele instantaneu.**

Acest lucru este util atunci când trebuie să integrezi sau să transmiți anumite date din Ultimate Multisite către un alt CRM sau sistem de fiecare dată când se declanșează un eveniment. De exemplu, ai putea avea nevoie să trimiți numele și adresa de email a utilizatorului către o listă de corespondență de fiecare dată când se creează un cont nou.

## Cum să creezi un webhook

Pentru a crea un webhook, accesează panoul de administrare al rețelei. Click pe **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pagina cu lista de webhook-uri și butonul Add New Webhook](/img/admin/webhooks-list.png)

Când creezi un webhook nou, ți se vor cere informații precum **Name, URL,** și **Event**. Poți folosi orice nume dorești pentru webhook-ul tău. Cele mai importante câmpuri sunt URL și Event.

![Formularul pentru webhook nou cu câmpurile Name, URL și Event](/img/admin/webhooks-list.png)

URL reprezintă **endpoint-ul sau destinația** către care Ultimate Multisite va trimite **payload-ul sau datele**. Aceasta este aplicația care va primi datele.

Zapier este cea mai comună soluție pe care utilizatorii o folosesc pentru a facilita integrarea cu aplicații terțe. Fără o platformă precum Zapier, va trebui să creezi manual o funcție personalizată care să preia datele și să le proceseze. Consultă acest articol despre **cum să folosești webhook-ul Ultimate Multisite cu Zapier.**

În acest articol, vom analiza conceptul de bază al modului în care funcționează un webhook și evenimentele disponibile în Ultimate Multisite. Vom folosi un site terț numit [requestbin.com](https://requestbin.com/). Acest site ne va permite să creăm un endpoint și să captăm payload-ul fără a scrie cod. _**Notă: tot ce va face este să ne arate că datele au fost primite.**_ Nu va avea loc nicio procesare sau acțiune asupra payload-ului.

Accesează [requestbin.com](https://requestbin.com/) și click pe Create Request Bin.

![Site-ul RequestBin cu butonul Create Request Bin](/img/admin/webhooks-list.png)

După ce apeși butonul, ți se va cere să te autentifici dacă ai deja un cont sau să te înregistrezi. Dacă ai deja un cont, vei fi direcționat direct către panoul lor de control. În panoul de control, vei vedea imediat endpoint-ul sau URL-ul pe care îl poți folosi pentru a crea webhook-ul tău Ultimate Multisite.

![Panoul de control RequestBin care afișează URL-ul endpoint-ului](/img/admin/webhooks-list.png)

Copiază URL-ul și revino la Ultimate Multisite. Introdu endpoint-ul în câmpul URL și selectează un eveniment din meniul derulant. În acest exemplu, vom selecta **Payment Received**.

Acest eveniment se declanșează ori de câte ori un utilizator efectuează o plată. Toate evenimentele disponibile, descrierile lor și payload-urile sunt listate în partea de jos a paginii. Click pe butonul **Add New Webhook** pentru a salva webhook-ul.

![Webhook configurat cu evenimentul Payment Received](/img/admin/webhooks-list.png)

Acum putem trimite un eveniment de test către endpoint pentru a verifica dacă webhook-ul pe care l-am creat funcționează. Putem face acest lucru făcând click pe **Send Test Event** sub webhook-ul pe care l-am creat.

![Opțiunea Send Test Event sub webhook](/img/admin/webhooks-list.png)

Aceasta afișează o fereastră de confirmare care indică faptul că testul a fost realizat cu succes.

![Confirmare că evenimentul de test al webhook-ului a fost trimis cu succes](/img/admin/webhooks-list.png)

Acum, dacă ne întoarcem pe site-ul _Requestbin_, vom vedea că payload-ul a fost primit și conține câteva date de test.

![RequestBin afișând datele payload-ului webhook primit](/img/admin/webhooks-list.png)

Acesta este principiul de bază al modului în care funcționează webhook-urile și endpoint-urile. Dacă dorești să creezi un endpoint personalizat, va trebui să creezi o funcție personalizată pentru a procesa datele pe care le primești de la Ultimate Multisite.
