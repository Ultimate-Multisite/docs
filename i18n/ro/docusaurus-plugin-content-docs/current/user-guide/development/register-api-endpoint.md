---
title: Înregistrează Endpoint API
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Endpoint-ul API Register din Ultimate Multisite

În acest tutorial, vei învăța cum să folosești endpoint-ul API /register din Ultimate Multisite pentru a crea întregul proces de onboarding pentru un client nou în rețeaua ta și cum să faci asta cu Zapier.

Endpoint-ul folosește metoda POST și este apelat prin URL-ul _**https://yoursite.com/wp-json/wu/v2/register**_. La acest apel, 4 procese vor fi executate în rețeaua ta:

  * Va fi creat un utilizator WordPress nou sau va fi identificat prin ID-ul de utilizator.

  * Va fi creat un Client nou în Ultimate Multisite sau va fi identificat prin ID-ul de client.

  * Va fi creat un site nou în rețeaua WordPress.

  * La final, va fi creat un Abonament nou în Ultimate Multisite.

Pentru acest proces, vei avea nevoie de credențialele tale API. Pentru a le obține, mergi în panoul de administrare al rețelei, navighează la **Ultimate Multisite > Settings** > **API & Webhooks** și caută secțiunea API Settings.

![Secțiunea API Settings în Ultimate Multisite](/img/config/settings-api.png)  
Selectează **Enable API** și obține credențialele tale API.

Acum, hai să explorăm endpoint-ul și apoi să creăm o acțiune de înregistrare în Zapier.

## Parametrii body ai endpoint-ului

Hai să vedem care sunt informațiile minime pe care trebuie să le trimitem către endpoint. La sfârșitul acestui articol, vei găsi apelul complet.

### Customer

Acestea sunt informațiile necesare pentru procesul de creare a Utilizatorului și a Clientului Ultimate Multisite:

"customer_id" : integer

Este posibil să trimiți ID-ul clientului creat în rețeaua ta. Dacă nu este trimis, informațiile de mai jos vor fi folosite pentru a crea un client nou și un utilizator WordPress nou. ID-ul utilizatorului poate fi trimis și el în același mod ca ID-ul clientului.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

Singura informație de care avem nevoie în acest obiect este Statusul Abonamentului.

"membership" { "status" : "string", // una dintre valorile "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Produsele sunt trimise ca un array cu 1 sau mai multe ID-uri de produs din rețeaua ta. Atenție, acest endpoint nu creează produse. Consultă documentația Ultimate Multisite pentru a înțelege mai bine endpoint-ul de creare a produselor.

**"products" : [1,2],**

### Payment

La fel ca la Membership, avem nevoie doar de status.

**"payment" { "status" : "string", // una dintre valorile "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Și pentru a încheia body-ul, avem nevoie de URL-ul și Titlul site-ului, ambele în interiorul obiectului Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Răspunsul endpoint-ului register va fi un array cu informațiile abonamentului nou creat.

## Crearea unei acțiuni în Zapier

Odată cu introducerea acestui endpoint nou și mai robust de creare a conturilor, vei avea acces și la o acțiune nouă în Zapier.

Știi cum să folosești și să te bucuri de tot ce oferă noua versiune de Zapier? Află mai multe aici. (link?)

### Crearea unei acțiuni

Pentru a ilustra mai bine cum să folosești endpoint-ul de înregistrare cu Zapier, hai să creăm o integrare cu Google Forms. De fiecare dată când acest formular este completat și informațiile sunt salvate în foaia de răspunsuri a formularului, un abonament nou va fi creat în rețeaua Ultimate Multisite.

În Google Forms, creează un formular cu câmpurile minime necesare pentru a crea un abonament nou în rețea.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Acum în Zapier, creează un Zap nou și conectează formularul creat în Google prin foaia de calcul unde sunt salvate datele.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Gata! Formularul Google Forms este conectat cu Zapier și pregătit să fie integrat cu rețeaua. Acum hai să trecem la Acțiunea care va rezulta din Trigger-ul pe care Google Forms îl declanșează de fiecare dată când este completat.

Localizează noua aplicație Ultimate Multisite și selecteaz-o. Pentru acest tip de Zap alege opțiunea Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

După acest prim pas, alege contul care va fi conectat cu acest Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Aceasta este partea cea mai sensibilă a întregului proces. Trebuie să potrivim câmpurile care au venit din Google Forms cu câmpurile minime necesare pentru endpoint-ul register, așa cum am arătat în secțiunea anterioară a acestui articol.

În acest exemplu, trebuie doar să configurăm numele de utilizator, email-ul, parola, numele și URL-ul site-ului. Restul este lăsat predeterminat, astfel încât toate abonamentele generate prin acest Google Forms să urmeze același tipar de produs și status.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Cu informațiile configurate, treci la testul final. Pe ultimul ecran poți vedea toate câmpurile care vor fi trimise către endpoint, informațiile lor respective și câmpurile care vor fi trimise goale.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testează noul tău Zap și ar trebui să se finalizeze cu succes. Dacă apare vreo eroare, verifică toate câmpurile și dacă sunt trimise corect. Deoarece sunt multe informații, unele lucruri pot trece neobservate.

### Parametrii compleți ai endpoint-ului

Iată apelul complet și toate posibilitățile de câmpuri care pot fi trimise.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // una dintre valorile "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // una dintre valorile "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
