---
title: Manisana ny API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ny fidirana API an'ny Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Ao anatin'ity tutorial ity, ianao dia hahatantatra ny fomba fampiasana ny endpoint `/register` an'ny Ultimate Multisite /register API mba hamoronana ny dingana fanomanana (onboarding) manontolo ho an'ny mpanjifa vaovao ao amin'ny tambajotra misy anao ary ahoana no hanaovana izany miaraka amin'i Zapier.

Ity endpoint ity dia mampiasa ny fomba POST ary antsoina amin'ny URL _**https://yoursite.com/wp-json/wu/v2/register**_. Amin'ity antso ity, dingana 4 dia hatao ao anatin'ny tambajotranareo:

  * Ho namboarina mpampiasa WordPress vaovao na ny famantarana azy amin'ny alalan'ny user ID.

  * Ho namboarina Mpanjifa vaovao ao amin'ny Ultimate Multisite na ny famantarana azy amin'ny customer ID.

  * Ho namboarina toerana (site) vaovao eo amin'ny tambajotran'WordPress.

  * Amin'ny farany, ho namboarina Fandraisana Anjara (Membership) vaovao ao amin'ny Ultimate Multisite.

Ho an'ity dingana ity, mila ny fampahalalana API ianao. mba hahazoana azy ireo, dia mandehin'ny panel mpitantana tambajotranareo, mifandray mankany amin'i **Ultimate Multisite > Settings** > **API & Webhooks**, ary jereo ny faritra API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Ity dia fomba fijery feno an'ny pejy API settings:

![API settings full page](/img/config/settings-api-full.png)

Safidio ny **Enable API** ary azo ny fampahalalana API anao.

Ity dia ny fandalinana ny endpoint sy ny famoronana asa fanamarinana (registration action) ao amin'i Zapier.

## Parameters an'ny vatana (body parameters) {#endpoint-body-parameters}

Andeha ho antsoina ny fampahalalana fototra ilaina izay tokony alefa any amin'ity endpoint ity. Amin'ny farany amin'ity lahatsoratra ity, dia hahita ny antso feno ianao.

### Mpanjifa (Customer) {#customer}

Ity no fampahalalana ilaina ho an'ny dingana famoronana Mpampiasa (User) sy ny Mpanjifa ao amin'ny Ultimate Multisite:

"customer_id" : integer

Mety azo atao ny mandefa ny ID mpanjifa nataona tao amin'ny tambajy anareo ve. Raha tsy voapetra, dia hampiasaina ireo fampahalalana eto ambany mba hamoronana mpanjifa vaovao sy mpampiasa WordPress vaovao. Afaka alefa koa ny User ID amin'ny fomba mitovy amin'ny Customer ID izany.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Fandraisana anjara (Membership)** {#membership}

Ny fampahalalana tokana ilainay ao anatin'ity object ity dia ny Toerana Fandraisana Anjara (Membership Status).

"membership" { "status" : "string", // iray amin'ireto: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Vokatra (Products)** {#products}

Ny vokatra dia azo atao amin'ny array misy ID vokatra iray na maromaro avy ao amin'ny tambajy anareo. Aza matahotra, ity endpoint ity dia tsy mamorona vokatra. Jereo ny dokamanta an'Ultimate Multisite mba hahatakarana bebe kokoa momba ny endpoint famoronana vokatra.

**"products" : [1,2],**

### Fandoavam-bola (Payment) {#payment}

Tahaka amin'ny Membership, mila ny toetran'izany ihany isika.

**"payment" { "status" : "string", // iray amin'ireto: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Tranom-boary (Site) {#site}

Ary mba hanakiana ny vatana dia mila ny URL sy ny Anaran'ny tranokala ianao, samy ao anatin'ny Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ny valin'ny register endpoint dia array misy ny fampahalalana momba ny fandraisana anjara vaovao natao.

## Famoronana action ao amin'ny Zapier {#creating-an-action-in-zapier}

Nanombaniana ity endpoint vaovao sy matanjaka kokoa ho fanamboarana kaonty ity, dia afaka miditra amin'ny action vaovao ao amin'ny Zapier ianao.

Fantatro ve ny fomba fampiasana sy fandresena izay rehetra atolotra an'ny dikan-teny vaovao an'ny Zapier? Fantaro bebe kokoa eto. (link?)

### Famoronana action {#creating-an-action}

Zapier amin'ny fampiasana ny registration endpoint miaraka amin'ny Zapier, dia ataovy ho mora kokoa ny fanazavana azy amin'ny alalan'ny famoronana integration amin'ny Google Forms. Isaky ny manome an-tsipika ity forms ity ary voatahiry ny vaovao ao amin'ny fampahafantarana valiny (answer sheet) an'ilay form, dia hisy fidirana vaovao iray ho voarakitra ao amin'ny tambajotra Ultimate Multisite.

Ao amin'ny Google Forms, dia faomana form misy ireo sehatra (fields) ilaina indrindra mba hamoronana fidirana vaovao ao anatin'ny tambajotra.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ity amin'ny Zapier kosa, dia faomana Zap vaovao ary mifandray amin'ilay form voarakitra tao amin'ny Google amin'ny alalan'ny spreadsheet izay voatahiry ny data.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Vita! Ny form Google Forms dia mifandray amin'ny Zapier ary vonona ho voifandray amin'ny tambajotra. Andao handray dingana manaraka izay vokatra azo avy amin'ilay Trigger izay mampandeha isaky ny feno azy ny Google Forms.

Mitadiava ilay app vaovao Ultimate Multisite dia safidio izy. Ho an'ity karazana Zap ity, safidio ny safidy Register (Fidirana).

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Aorian'ity dingana voalohany ity, safidio ilay kaonty izay hifandray amin'ity Zap ity.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Ity no ampahany tena sarotra indrindra amin'ny dingana manontolo. Mila mifanaraka ny sehatra avy amin'ny Google Forms amin'ireo sehatra voalohany ilaina ho an'ilay registration endpoint, araka izay naseho teo amin'ny fizarana teo aloha ao amin'ity lahatsoratra ity isika.

Ao anatin'ity ohatra ity, mila manova ny username, email, password, anarana ary URL an'ny website ihany isika. Ny sisa dia efa voatete (pre-determined) satria ny fidirana vaovao rehetra vokarina amin'ity Google Forms ity dia hanaraka ny endrika sy ny sata mitovy amin'ilay vokatra sy ny sata iray.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Ny fanomezana ny fampahalalana, dia mandroso amin'ny fitsapana farany. Amin'ilay efijery farany dia afaka mahita ny sehatra rehetra izay ho alefa any amin'ny endpoint, ny fampahalalam-ba azy ary ireo sehatra izay alefa tsy misy zavatra.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Andramo ny Zap vaovao anao ary tokony ho vita tsara izany. Raha misy fahadisoana mitranga, jereo avy amin'ny sehatra rehetra ary raha alefa marina ve ireo zavatra rehetra. Satria misy fampahalalana marobe dia mety tsy ho voamarina ny zavatra sasany.

### Paramètres manontolo an'ilay endpoint {#complete-endpoint-parameters}

Ity no antso manontolo sy ny dikan'ny sehatra rehetra azo alefa.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // iray amin'ireo hoe "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // iray amin'ireo hoe "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
