---
title: Skrá API-endur
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API-endurinn register API-endurinn {#the-ultimate-multisite-register-api-endpoint}

Í þessum leiðbeiningum lærir þú hvernig nota upphafs- og skilgreiningar API-endurinn í Ultimate Multisite til að skapa heildar innleifingarprosessi fyrir nýja viðskipti í netinu þínu og hvernig þú getur gerð þess með Zapier.

Endurinn notar POST-metóð og er kallaður með URL-inni _**https://yoursite.com/wp-json/wu/v2/register**_. Í þessum kallað verki eru 4 ferli sem færast í gang í netinu þínu:

  * Nýr WordPress notari eða hans skilgreiningur með notarið ID-ann verður skráð.

  * Nýr viðskipti í Ultimate Multisite eða hans skilgreiningur með viðskipti-ID-ann verður skráð.

  * Nýr vitið á WordPress netinu verður skráð.

  * Í lokin verður ný membership í Ultimate Multisite skráð.

Til þessar ferli þarftu API-skilgreininguna þína. Til að fá þau, farðu yfir í administrasjónuna netinu þíns, naviga til **Ultimate Multisite > Settings** > **API & Webhooks**, og leita eftir afdelingu API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Hér er fullt sýn á síðunni fyrir API-skilgreininguna:

![API settings full page](/img/config/settings-api-full.png)

Veldu **Enable API** og fái þarar API-skilgreininguna þína.

En nú lærum við endurinn og skapum síðan register-áferð í Zapier.

## Parameterir á lykilendur endurinnar (Endpoint body parameters) {#endpoint-body-parameters}

Látum okkur skoða mínst nauðsynlegri upplýsingum sem þarf að sendast til endurinnar. Í stuttu máli síðar í þessari greininni finnurðu fullan kalla.

### Viðskipti (Customer) {#customer}

Þetta er upplýsingar sem eru nauðsynleg fyrir ferli skráningar notandans og Ultimate Multisite viðskipta:

"customer_id" : integer

Er er mögulelegt að sendja viðskiptavinarið ID sem varðveist í nálgunni þinni. Ef það ekki er sýnt, verður upplýsingum hér að neðan notað til að skapa nýjan viðskiptavin og nýjan WordPress notanda. Notendur-IDinn getur sendist á sama hátt sem viðskiptavini-IDinn.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Meðferð** (Membership) {#membership}

Eina upplýsingin sem þegar er nauðsynleg í þessum objektinu er stöðu meðferðarinnar.

"membership" { "status" : "string", // einn af "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Vörur** (Products) {#products}

Vörum eru gefnar array með 1 eða fleiri vörur-ID frá nálgunni þinni. Varðu að þú veist, þessi endpunkt skapar ekki vörur. Skoðaðu dokumentation Ultimate Multisite til að skilja betur endpuntskapningunar fyrir vörur.

**"products" : [1,2],**

### **Gjaldmiðsla** (Payment) {#payment}

Eins og með meðferðarinnu þarfum við bara stöðuna.

**"payment" { "status" : "string", // einn af "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Sítur** (Site) {#site}

Og til að loka formið þurfa við URL og titil síðunnar, bæði í Site objektinu.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Til að svara register endpuntti verður array með nýsköptum upplýsingum um meðferðarinnu.

## Skapa ásetningu í Zapier (Creating an action in Zapier) {#creating-an-action-in-zapier}

Með innleiðingu þess nýrra og sterkari endpuntskapningunar fyrir reikninga sjáðu að þér færast til nýrrar ásetningunar í Zapier.

Vissir þú hvernig notað og ánægja þig með allt sem nýrur útgáfan Zapier býður upp? Lær meira hér. (link?)

### Skapa ásetningu {#creating-an-action}

Til að lýsa betur hvernig nota registration endpoint með Zapier, skulum við skapa tengingu með Google Forms. Hvert sem forminn er fyllt út og upplýsingarnir eru safnaðar í svara formans, verður ný membership að skrá í netverk Ultimate Multisite.

Í Google Forms, skapau form með mínustu nauðsynlegum vöru til að skapa ný membership í netverkinn.

<!-- Skjólstakandi mynd: Google Forms form með vörum fyrir skráning nýr memberships -->

En nú í Zapier, skapau nýja Zap og tengdu formann sem var skráður í Google í arkefni þar sem data er safnað.

<!-- Skjólstakandi mynd: Samkvæði uppsetningar trigger-sins í Zapier til tengingar við Google Forms arkefni -->

Klár! Google Forms forminn er tengd við Zapier og bustið að tengja við netverkinn. En nú verðum við á aftur í Ágættu (Action) sem mun verið niðurstöður frá Trigger-sins sem Google Forms skapar hverju sinni þegar það er fyllt út.

Finndu nýja appinn Ultimate Multisite og veldu hann. Til þessna mína nauðsynlegar Zap veldu "Register" (Skráning).

<!-- Skjólstakandi mynd: Samkvæði val á Ágættu í Zapier sýnande appins Ultimate Multisite með valdi Register -->

Eftir þennan fyrsta skref, veldu reikninginn sem mun verið tengt við þennan Zap.<!-- Skjólstakandi mynd: Skref tengingar reiknings í Zapier fyrir Ultimate Multisite -->

Þetta er mest kjarni heilt ferlisins. Við þurfum að matcha (samræma) vörur sem koma frá Google Forms með mínustu nauðsynlegum vörum fyrir register endpoint, eins og sýnt í vorum á þessari greininni.

Í þessu dæmi þurfum við að uppsetja nánari upplýsingar um notendanafn (username), tölvuinn (email), lykillagjald (password), nafn og URL vefsítallsins. Restur er fyrirbestimmt svo að allir memberships sem eru skapandi á þessum Google Forms fylgi sama vörun og staðalinn staðalinn.

<!-- Skjálfarskjá ekki tilgjæður: Mappaðir feldir Zapier milli Google Forms og register endpoint-sérstudd -->

Þegar upplýsingarnar eru settar upp, halda þig í síðasta prófan. Á síðunni geturðu sjá allar feldir sem verða send til endpoint-sérstudd, upplýsingum þeirra og feldir sem verða send fram eins og tómvar.<!-- Skjálfarskjá prófan skrá Zapier sýn allar feldir sem verða send til register endpoint -->

Prófa nýja Zap-inn þinn og hann ætti að starfa vel. Ef einn villur kemur upp, skoðaðu alla feldir og ef þeir eru send fram rétt. Í þessum tilfelli er mögulelegt, þar sem er myrkur í öllum upplýsingum.

### Fullri parameterar endpoint-sérstudd {#complete-endpoint-parameters}

Hér er fullur kalla og allar möguleikalið feldir sem getur verið send fram.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // einn af "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // einn af "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
