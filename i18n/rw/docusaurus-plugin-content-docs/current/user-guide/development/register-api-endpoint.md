---
title: Gukoresha API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Endpoint ya registration ya Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Mu gihe ulihagarira uko uburyo bwo gukora urugero rwose rwa kumenya umuntu w'umukoresha w'umuryango wawe (new customer) mu muryango wanyu, kandi nuko uba urugero bwo gukora ibi bikorwa na Zapier.

Uburyo bwo gukora iki bishobora gukoreshwa uburyo bwo POST kandi bishobora guhindurwa ku URL _**https://yoursite.com/wp-json/wu/v2/register**_. Mu gihe cyo, ibindi byiza 4 bigaragara mu muryango wanyu:

  * Umukoresha w'WordPress w'umukoresha w'umuryango (new WordPress user) cyangwa gukemura umukoresha uwo ukwibonyeho binyuze mu user ID.

  * Umukoresha w'Ultimate Multisite w'umukoresha w'umuryango (new Customer in Ultimate Multisite) cyangwa gukemura umukoresha uwo ukwibonyeho binyuze mu customer ID.

  * Uburyo bwo gukora site ya mbere ku muryango wa WordPress (a new site on the WordPress network).

  * Mu gihe cyo, umukoresha w'Ultimate Multisite (new Membership in Ultimate Multisite) uzakora.

Kugira ngo ugerere iki, ubushobozi bwo API (API credentials) uza kubaho. Uko uza gutanga, gukora mu dashboard ya admin ya muryango wanyu, ugenda ku **Ultimate Multisite > Settings** > **API & Webhooks**, kandi uza gushaka igice cy'API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Uruko rwose rwa API settings:

![API settings full page](/img/config/settings-api-full.png)

Gukoresha **Enable API** kandi uza gutanga ubushobozi bwo API (your API credentials).

Ubu, twagereze ku endpoint kandi twakora urugero rw'registration' mu Zapier.

## Icyemezo cyo mu body ya endpoint (Endpoint body parameters) {#endpoint-body-parameters}

Tugereze ku buryo bwo gukoresha ibindi byiza byiza bitewe n'ubwoko bw'information turi gutangira ku endpoint. Ku gihe cyo, uza kubona urugero rwose rwa call.

### Customer {#customer}

Iyi ni umusaruro w'information w'ubwoko bwo gukora User na Umukoresha w'Ultimate Multisite:

"customer_id" : integer

Ni vyose gukora u gukoresha ID y'umukundzi wako mu nyumbura rwawe. Ntabwo utagikorera, amakuru atandukanye ahandi ariko azashyirwa ku gukora umukundzi w'umukundzi w'umukundzi w'umukundzi w'umukundzi w'umukundzi w'umukundzi. Umuco wa umukundzi yashobora guhindurwa mu buryo nko mu gihe cyo gukoresha ID y'umukundzi.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Ubwumvikane (Membership)** {#membership}

Amakuru atandukanye atuko mu gihe cyo gukoresha uwo obujambo.

"membership" { "status" : "string", // mu gihe cyo "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Icyiciro (Products)** {#products}

Icyiciro cyangwa ibintu by'umukundzi bishobora gushyirwa mu array w'ibyo ID by'umukundzi mu nyumbura rwawe. Urahindura, uwo endpoint utagukora icyiciro. Gukoresha inyandiko za Ultimate Multisite kugira ngo ubone neza uwo endpoint cyo gukora icyiciro.

**"products" : [1,2],**

### **Icyemezo (Payment)** {#payment}

Nko mu buryo bwa Ubwumvikane, twifashishije status gusa.

**"payment" { "status" : "string", // mu gihe cyo "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Icyemezo (Site)** {#site}

Kugira ngo twamukire, twifashishije URL y'umukundzi n'Urugero rwa umukundzi mu gihe cyo gukoresha Icyemezo.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Icyemezo cyo gukora (register endpoint) kizahindura array y'umukundzi w'umukundzi w'umukundzi w'umukundzi w'umukundzi.

## Gukora action mu Zapier {#creating-an-action-in-zapier}

Ntabwo ubyumva uburyo bwa gukoresha no gutegura ibyo nyaho by'umukundzi w'umukundzi w'umukundzi w'umukundzi w'umukundzi w'umukundzi. Gushakira inama hano. (link?)

### Gukora action {#creating-an-action}

Kugira ngo twagire neza uburyo bwo gukoresha registration endpoint na Zapier, tworera integration na Google Forms. Gusa imbere y'imwe mu gihe form iyo itangwa kandi ibyemezo byo mu gihe cyo gushyira amakuru mu sheet ya ijambo ry'umuntu (answer sheet) mu form, uyu muryango w'Ultimate Multisite uzakoreshwa.

Mu Google Forms, tworera form yakuriye n'ubwoko bw'ibyo bishobora kugira ngo yitanye na gukora membership run cyane mu network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Icyoseze, muri Zapier, ugira new Zap kandi ugaragaza (connect) form yakuriye mu Google binyuze mu spreadsheet aho amakuru atangwa.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Wagize! Form ya Google Forms yitanye na Zapier kandi yari itandukanye kugira ngo yitanye n'uburyo bw'umwezi w'ibyo byitwariraho n'ibyo bishobora gukoreshwa mu network. Uyu muryango w'Ultimate Multisite, ugomba gushyira umuntu ugaragaza (select) kandi utera "Register" option.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Nyuma y'ibyo mbere, ugomba gukoresha account yakuriye kugira ngo itanye na uyu Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Iki ni igice cyiza cyane mu gihe cyose cyo gukora. Turatwaga ibyo byitwariraho mu Google Forms n'ibyo bishobora kugira ngo yitanye na ibyemezo byo mu registration endpoint, nk'uko twari twagize mu gihe cyo mbere muwezi w'ibyo byitwariraho.

Mu gihe cyo uburyo bwo gukoresha, turatwaga gukora username, email, password, izina n'URL y'website. Icyo gishobora kugaragaza, ibindi byose byari byitwariraho kugira ngo imwezi y'ibyo byitwariraho mu Google Forms itandukanye na uburyo bwo gushyira membership run cyane mu network.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Ntabwo ugiye ku gukora uburyo bwa mbere, ugenda ku test yakirimo. Ku gice cyo cyo habaga, uza kumenya uburyo bwa byose bwa fields (ubwoko bw'ibyo bishobora guhindurwa ku endpoint), ibyo byari mu gihe cyangwa byari bifite amakuru yabo kandi ibyo byari bitangwa mu gihe cyo gukoresha.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testya uwe Zap (Zap) uyu kandi, uza gutera ku bwiza. Niba hari ikibazo kigira umwihariko, ugenda kumenya byose fields kandi niba bishobora guhindurwa neza. Kuko hari amakuru menshi, ibintu byiza bituma ubwoba bwo gukoresha uzi.

### Amakuru y'endpoint yose (Complete endpoint parameters) {#complete-endpoint-parameters}

Iyi ni uburyo bwose bwa kuvuga kandi byose byashobora guhindurwa mu gihe cyose.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // uyu ni mu gihe cyo gukoresha "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // uyu ni mu gihe cyo gukoresha "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
