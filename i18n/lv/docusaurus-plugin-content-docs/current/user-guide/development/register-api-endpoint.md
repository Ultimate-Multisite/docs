---
title: Reģistrēt API galvenkoju
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API galvenis Ultimate Multisite

Šajā instrukcijā jūs iepaziniete, kā izmantot Ultimate Multisite /register API galveni, lai veicētu visu uzsākšanas procesu jaunam klientam savā tīklā un kā to darīt ar Zapieru.

Galvens ir lietojams POST metodu, un to sauc URL: _**https://yoursite.com/wp-json/wu/v2/register**_. Šajā saskars ir izpildīti 4 procesi jūsu tīklā:

  * Izveidots jauns WordPress lietotājs vai viņa identifikācija ar lietotāja ID.

  * Izveidots jauns Klient Ultimate Multisite vai viņa identifikācija ar klienta ID.

  * Izveidots jauns vietne WordPress tīklā.

  * Beizēji, izveidots jauns Uzticības tiesība (Membership) Ultimate Multisite.

Šajā procesā jums būs nepieciešami jūsu API kredenci. Lai tos saņemtu, dodieties uz savu tīkla admin panelu, navigējiet uz **Ultimate Multisite > Settings** > **API & Webhooks**, un meklējiet API Settings sadaļu.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Šeit ir pilns skats uz API iestatījumu lapu:

![API settings full page](/img/config/settings-api-full.png)

Izvēlieties **Enable API** un saņemiet savas API kredences.

Tagad, atspējiet galveni un izveidiet reģistrācijas darbību Zapierā.

## Galvena ķermeņa parametri (Endpoint body parameters)

Atzīmēsim minimālu informāciju, ko mums ir jāsūtī uz galvenu. Šajā rakstā beigās jūs atrasties pilnu saskars.

### Klient (Customer)

Šis ir informācija, kas nepieciešama lietotāja un Ultimate Multisite klienta izveidošanas procesam:

"customer_id" : integer

Var ir iespējams sūtīt klientu ID, kas izveidots jūsu tīklā. Ja tas nav iesniegts, šī informācija tiks izmantota jauna klienta un jauna WordPress lietotāja izveidē. Lietotāja ID var arī sūtīt to pašu veidā kā klientu ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Pilnvaras (Membership)**

Mums šajā objektā nepieciešama tikai Pilnvaras statusa informācija.

"membership" { "status" : "string", // viens no "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkti**

Produkti tiek sniegti ar sarakstu ar vienu vai vairākus produktu ID no jūsu tīkla. Brīdinājums, šis endpoint neizveido produktus. Izskatīt Ultimate Multisite dokumentāciju, lai labāk saprastu produktu izveide endpointu.

**"products" : [1,2],**

### **Maksas (Payment)**

Līdz kā Pilnvaras, mums pietiek statusa informācija.

**"payment" { "status" : "string", // viens no "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Vieta (Site)**

Un lai aizvērtu ķermeņa, mums nepieciešams vietas URL un nosaukums, ab viens iekļauts Vietas objektā.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Reiz register endpoint atgriezenās ar sarakstu ar jauno izveidoto pilnvaras informāciju.

## Akcijas izveide Zapier-ā

Ar šī jauna un spēcīgāka konta izveides endpointa, jūs arī saisisat jaunu akciju Zapier-ā.

Vai zināt, kā izmantot un izbaudīt visu, ko piedāvā Zapieras jauns versija? Lai uzzināt vairāk šeit. (saite?)

### Akcijas izveide

Lai labāk ilustrētu, kā izmantot reģistrācijas endpointu ar Zapieru, izveidojiet integrāciju ar Google Forms. Kad šis forma tiek aizpildīta un informācija tiek saglabāta formātā atbildēm, sistēmā Ultimate Multisite tiek izveidots jauns biedrs.

Google Forms veiciet formu ar minimāli nepieciešamajiem laukiem, kas ir nepieciešami jauna biedra izveidošanai tīklā.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Tagad Zapierā izveidiet jaunu Zap un savienojiet izveidoto formu ar Google, caur spreadsheetu, kurā dati tiek saglabāti.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Garejota! Google Forms forma ir savienota ar Zapieru un gatava integrēties ar tīklu. Tagad pāriet uz Akciju, kas rezultātēs būs no Triggers, ko Google Forms izmanto katru reizi, kad tā tiek aizpildīta.

Atrodiet jaunu Ultimate Multisite lietotni un izvēlieties to. Šāda veida Zapā izvēlieties "Register" (Reģistrēties) opciju.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Pēc šī pirmās instrukcijas izvēlieties kontu, ar kuru būs savienots šis Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Šis ir vissensitīvākais daļa visu procesu. Mums jāatstaba lauki, kas atnismēti no Google Forms, ar minimāli nepieciešami laukiem reģistrācijas endpointa, kā redzams šīs rakstnes sadaļas iepriekšējā vietā.

Šajā piemēra mums ir nepieciešams konfigurēt tikai lietotāja vārdu (username), e-pastu, paroli, vārdu un tīmekļa vietnes URL adresi. Atkriti atlikušo ir precizēti, lai visus biedrus, kas izveidoti šajā Google Forms formā, sekojuši vienam produktam un statusa modelim.

<!-- Ie vidējams attēls nav pieejams: Zapier laiku mappingi starp Google Forms un Ultimate Multisite reģistrētāja endpointa -->

Kad informācija ir iestatīta, turpinājiet galveno pārbaudi. Pās savlaicīgajā ekrānā redziet visus laukus, kas tiks nosūtīti endpointam, to attiecīgu informāciju un laukus, kuri tiks nosūtīti tukši.<!-- Ie vidējams attēls nav pieejams: Zapier pārbaudes ekrānā redziet visus laukus, kas tiks nosūtīti reģistrētāja endpointam -->

Pārbaudiet savu jaunu Zap un tas jāveic veiksmīgi. Ja notiek kļūda, pārbaudiet visus laukus un vai tie tiek nosūtīti pareizi. Tā kā informācijas ir daudz, dažas lietas var neuzmanigt.

### Pilns endpointa parametri

Šeit ir pilna saucēšana un visie iespējami lauki, kas var tikties nosūtīti.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // viens no "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // viens no "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
