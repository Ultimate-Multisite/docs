---
title: Înregistrează endpointul API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Punctul final API /register Ultimate Multisite

În acest tutorial, vei învăța cum să folosești punctul final API /register Ultimate Multisite pentru a crea întregul proces de onboarding pentru un client nou în rețeaua ta și cum să faci asta cu Zapier.

Punctul final folosește metoda POST și este apelat prin URL-ul _**https://yoursite.com/wp-json/wu/v2/register**_. În acest apel, 4 procese vor fi executate în rețeaua ta:

  * Va fi creat un nou utilizator WordPress sau identificarea acestuia prin ID-ul de utilizator.

  * Va fi creat un nou client în Ultimate Multisite sau identificarea acestuia prin ID-ul de client.

  * Va fi creat un nou site în rețeaua WordPress.

  * La final, va fi creat un nou abonament în Ultimate Multisite.

Pentru acest proces, vei avea nevoie de datele tale de autentificare API. Pentru a le obține, mergi la panoul de administrare al rețelei, navighează la **Ultimate Multisite > Setări** > **API și Webhooks,** și caută secțiunea Setări API.

![Secțiunea Setări API în Ultimate Multisite](/img/config/settings-api.png)

Iată o vedere completă a paginii de setări API:

![Pagina completă de setări API](/img/config/settings-api-full.png)

Selectează **Activează API** și obține datele tale de autentificare API.

Acum, hai să explorăm punctul final și apoi să creăm o acțiune de înregistrare în Zapier.

## Parametrii corpului punctului final {#endpoint-body-parameters}

Hai să facem o prezentare generală a informațiilor minime pe care trebuie să le trimitem către punctul final. La finalul acestui articol, vei găsi apelul complet.

### Client {#customer}

Acestea sunt informațiile necesare pentru procesul de creare a utilizatorului și a clientului Ultimate Multisite:

"customer_id" : integer

Este posibil să trimiți ID-ul clientului creat în rețeaua ta. Dacă nu este trimis, informațiile de mai jos vor fi folosite pentru a crea un client nou și un utilizator WordPress nou. ID-ul de utilizator poate fi, de asemenea, trimis în același mod ca ID-ul clientului.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Abonament** {#membership}

Singura informație de care avem nevoie în interiorul acestui obiect este starea abonamentului.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produse** {#products}

Produsele primesc un array cu 1 sau mai multe ID-uri de produs din rețeaua ta. Atenție, acest punct final nu creează produse. Consultă documentația Ultimate Multisite pentru a înțelege mai bine punctul final de creare a produselor.

**"products" : [1,2],**

### Plată {#payment}

Ca și în cazul abonamentului, avem nevoie doar de stare.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Și pentru a închide corpul, avem nevoie de URL-ul și titlul site-ului, ambele în interiorul obiectului site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Răspunsul punctului final register va fi un array cu informațiile abonamentului nou creat.

## Crearea unei acțiuni în Zapier {#creating-an-action-in-zapier}

Odată cu introducerea acestui punct final nou și mai robust pentru crearea de conturi, vei avea acces și la o acțiune nouă în Zapier.

Știi cum să folosești și să te bucuri de tot ce oferă noua versiune de Zapier? Află mai multe aici. (link?)

### Crearea unei acțiuni {#creating-an-action}

Pentru a ilustra mai bine cum să folosești punctul final de înregistrare cu Zapier, hai să creăm o integrare cu Google Forms. De fiecare dată când acest formular este completat și informațiile sunt salvate în foaia de răspunsuri a formularului, va fi creat un nou abonament în rețeaua Ultimate Multisite.

În Google Forms, creează un formular cu câmpurile minime necesare pentru a crea un nou abonament în rețea.

<!-- Captură de ecran indisponibilă: formular Google Forms cu câmpuri pentru crearea unui abonament nou -->

Acum, în Zapier, creează un Zap nou și conectează formularul creat în Google prin foaia de calcul în care sunt salvate datele.

<!-- Captură de ecran indisponibilă: configurarea declanșatorului Zapier conectat la foaia de calcul Google Forms -->

Gata! Formularul Google Forms este conectat cu Zapier și pregătit să fie integrat cu rețeaua. Acum hai să trecem la acțiunea care va rezulta din declanșatorul pe care Google Forms îl declanșează de fiecare dată când este completat.

Găsește noua aplicație Ultimate Multisite și selecteaz-o. Pentru acest tip de Zap, alege opțiunea Înregistrare.

<!-- Captură de ecran indisponibilă: selecția acțiunii Zapier care arată aplicația Ultimate Multisite cu opțiunea Înregistrare -->

După acest prim pas, alege Account care va fi conectat cu acest Zap.<!-- Captură de ecran indisponibilă: pasul de conectare a contului Zapier pentru Ultimate Multisite -->

Aceasta este cea mai sensibilă parte a întregului proces. Trebuie să potrivim câmpurile care au venit din Google Forms cu câmpurile minime necesare pentru punctul final register, așa cum este arătat în secțiunea anterioară a acestui articol.

În acest exemplu, trebuie doar să configurăm numele de utilizator, e-mailul, parola, numele și URL-ul site-ului web. Restul este lăsat prestabilit, astfel încât toate abonamentele generate în acest Google Forms să urmeze același model de produs și stare.

<!-- Captură de ecran indisponibilă: maparea câmpurilor între Google Forms și punctul final register Ultimate Multisite -->

Cu informațiile configurate, treci la testul final. Pe ultimul ecran poți vedea toate câmpurile care vor fi trimise către punctul final, informațiile lor respective și câmpurile care vor fi trimise goale.<!-- Captură de ecran indisponibilă: ecranul de test Zapier care arată toate câmpurile ce vor fi trimise către punctul final register -->

Testează noul tău Zap și ar trebui să se finalizeze cu succes. Dacă apare vreo eroare, verifică toate câmpurile și dacă sunt trimise corect. Deoarece există multe informații, unele lucruri pot trece neobservate.

### Parametrii compleți ai punctului final {#complete-endpoint-parameters}

Iată apelul complet și toate posibilitățile de câmpuri care pot fi trimise.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
