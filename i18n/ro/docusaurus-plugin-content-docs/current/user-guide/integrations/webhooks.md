---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# O primă privire asupra Webhooks (v2)

_**ATENȚIE: Rețineți că această funcționalitate sau acest articol este pentru utilizatori avansați.**_

Un **webhook** este o modalitate prin care o aplicație sau un software precum Ultimate Multisite poate furniza altor aplicații informații în timp real. Un webhook livrează date sau payloads către alte aplicații pe măsură ce se întâmplă, ceea ce înseamnă că **primiți date imediat.**

Acest lucru este util dacă trebuie să integrați sau să transmiteți anumite date din Ultimate Multisite către un alt CRM sau sistem de fiecare dată când este declanșat un eveniment. De exemplu, trebuie să trimiteți numele și adresa de e-mail ale utilizatorului către o listă de corespondență de fiecare dată când este creat un cont de utilizator nou.

## Cum să creați un webhook {#how-to-create-a-webhook}

Pentru a crea un webhook, mergeți la dashboard-ul de administrare al rețelei. Faceți clic pe **Ultimate Multisite > Webhooks > Add New Webhook.**

![Pagină goală a listei Webhooks cu butonul Add New Webhook](/img/admin/webhooks-list-empty.png)

Apoi puteți edita configurația webhook-ului:

![Formular Add New Webhook cu câmpuri pentru Name, Event și URL](/img/admin/webhook-add-modal.png)

Când creați un webhook nou, vi se vor solicita informații precum **Name, URL,** și **Event**. Puteți folosi orice nume doriți pentru webhook-ul dvs. Cele mai importante câmpuri sunt URL și Event.

![Interfață de editare webhook care arată câmpul URL și previzualizarea payload-ului](/img/admin/webhook-url-field.png)

URL este **endpoint-ul sau destinația** către care Ultimate Multisite va trimite **payload-ul sau datele**. Aceasta este aplicația care va primi datele.

Zapier este cea mai comună soluție pe care utilizatorul o folosește pentru a face mai ușoară integrarea cu aplicații terțe. Fără o platformă precum Zapier, va trebui să creați manual o funcție personalizată care va captura datele și le va procesa. Consultați acest articol despre **cum să folosiți webhook-ul Ultimate Multisite cu Zapier.**

În acest articol, vom analiza conceptul de bază al modului în care funcționează un webhook și evenimentele disponibile în Ultimate Multisite. Vom folosi un site terț numit [requestbin.com](https://requestbin.com/). Acest site ne va permite să creăm un endpoint și să capturăm payload-ul fără a scrie cod. _**Declinare a responsabilității: tot ce va face este să ne arate că datele au fost primite.**_ Nu va exista procesare sau niciun fel de acțiune efectuată asupra payload-ului.

Mergeți la [requestbin.com](https://requestbin.com/) și faceți clic pe Create Request Bin.

După ce faceți clic pe acel buton, vi se va cere să vă autentificați dacă aveți deja un cont sau să vă înregistrați. Dacă aveți deja un cont, vă va duce direct la dashboard-ul lor. În dashboard-ul lor, veți vedea imediat endpoint-ul sau URL-ul pe care îl puteți folosi la crearea webhook-ului Ultimate Multisite.

Continuați și copiați URL-ul, apoi reveniți la Ultimate Multisite. Plasați endpoint-ul în câmpul URL și selectați un eveniment din lista derulantă. În acest exemplu, vom selecta **Payment Received**.

Acest eveniment este declanșat ori de câte ori un utilizator efectuează o plată. Toate evenimentele disponibile, descrierea lor și payload-urile sunt listate în partea de jos a paginii. Faceți clic pe butonul **Add New Webhook** pentru a salva webhook-ul.

![Listă derulantă de evenimente webhook cu Payment Received selectat](/img/admin/webhook-event-picker.png)

Acum putem trimite un eveniment de test către endpoint pentru a vedea dacă webhook-ul pe care l-am creat funcționează. Putem face acest lucru făcând clic pe **Send Test Event** sub webhook-ul pe care l-am creat.

![Listă Webhooks care arată un webhook configurat și acțiunea Send Test](/img/admin/webhooks-list-populated.png)

Aceasta afișează o fereastră de confirmare care spune că testul a reușit.

![Rezultatul evenimentului de test webhook după trimiterea unui payload de test](/img/admin/webhook-test-result.png)

Acum, dacă revenim la site-ul _Requestbin_, vom vedea că payload-ul a fost primit și conține câteva date de test.

Acesta este principiul de bază al modului în care funcționează webhook-urile și endpoint-urile. Dacă urmează să creați un endpoint personalizat, va trebui să creați o funcție personalizată pentru a procesa datele pe care le primiți de la Ultimate Multisite.
