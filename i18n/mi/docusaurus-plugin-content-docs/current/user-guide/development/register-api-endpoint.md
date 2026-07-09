---
title: Whakawātea API Endpoint
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Te Endpoint Register API o Whānau Whānui (Multisite) {#the-ultimate-multisite-register-api-endpoint}

I roto i tēnei tutorial, i whakaritea atu koe ki te whakamahi i te Ultimate Multisite /register API endpoint kia whakatō i te tino whaiaro (onboarding process) mō te mea hou i te whānau o koe ā, me te whakaahuatanga ahau i te whakamahi Zapier.

Ko te endpoint he fa'ainga POST (POST method) ana, ā, e whakawhanake ai e te URL _**https://yoursite.com/wp-json/wu/v2/register**_. I tēnei whiriwhiri, ko e whakatō i 4 mahi ana i roto i te whānau o koe:

  * He user WordPress hou, he tino whakamahi i te user ID ahau.
  * He Customer hou i Ultimate Multisite, he tino whakamahi i te customer ID ahau.
  * He site hou i te whānau WordPress, e whakawhanake ai.
  * I te whakamutunga, he Membership hou i Ultimate Multisite, e whakawhanake ai.

Mō tēnei mahi, ka tino pai akua atu i ngā credentials API ahau. Hei whai i ahau ki te panel admin o koe, whai i **Ultimate Multisite > Settings** > **API & Webhooks**, ā, he whakatika ahau i te seksion API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

He whakaahua mō te manawa o te API settings page:

![API settings full page](/img/config/settings-api-full.png)

Whakaritenga i **Enable API** ā, whai i ahau ki ngā credentials API ahau.

I tēnei wā, he whakamārama mō te endpoint me te whakawhanake i te registration action i Zapier.

## Ngā parameter o te body o te endpoint {#endpoint-body-parameters}

He whakamārama mō ngā mea hāpai nui kua roa atu e kitea ki te tino whiriwhiri (endpoint) ahau. I te whakatā o tēnei article, ka roto koe i te whakawhanake katoa.

### Customer {#customer}

Ko te mōhioinga he pēnei ana me te mahi mō te mahi whakatō User me te Ultimate Multisite Customer:

"customer_id" : integer

He takahi i te whaiaro o te mea whānau e whakatō i roto i tō wāhi. Ko te mea, he taea ana koe te tino rite ki te ID o te mea whānau e whakatō i roto i tō wāhi. Ae, he taea ai te tino rite ki te ID o te mea whānau e whakatō i roto i tō wāhi. Āe, he taea ai te tino rite ki te ID o te mea whānau e whakatō i roto i tō wāhi. Ko te user ID tika koa he taea ai te rite ki te customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Te mea tino nui e pēnei i te whaiaro ko te Status o te Membership.

"membership" { "status" : "string", // he tahi o "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Ko ngā Products e pēnei i te array (list) me te ID o ngā products mai i tō wāhi. He tino whakatika, ko koe e whakamārama ana, ko te endpoint (endpoint) này he ka taea te whakatō i ngā products. Kia kaha ki te whakamārama i te documentation o Ultimate Multisite kia mōhio rāmore iti i te endpoint e tika ana mo te whakatō i ngā products.

**"products" : [1,2],**

### Payment {#payment}

Ko te mea pēnei i te Membership, he tino nui ko te status.

**"payment" { "status" : "string", // he tahi o "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Ko mō te whakamutunga, he tino nui ko te URL o te site me te Titau (Title) o te site, kōrero mai i roto i te Site object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ko te whaiaro o te register endpoint e pēnei ana he array me ngā mōhaka (information) o te membership e pēnei i te whakatō mai.

## Whakawhanaungatanga action i Zapier {#creating-an-action-in-zapier}

Me te whakatū o te endpoint whakatō account hou me tino kaha ko, koe e taea ai te whaiaro action hou i Zapier.

Ko koe mōhio ana ahau i te whakamahi me te whaiaro katoa e te wera hou o Zapier e hoatu? Whakarongo atu ki a ia i tēnei link. (link?)

### Whakawhanaungatanga action {#creating-an-action}

Kia ora! Hei whakamārama mō te whakamahi o te registration endpoint me Zapier, he pēhea mātou e whakatō i te whaiaro (integration) ki Google Forms. Kei ngaro ahau i te screenshot: He tino pai tēnei. Kei ora mai i roto i te form o Google Forms, kia whakatō i ngā rohe (fields) anō ana ka taea te whakaratake i te whaiaro hou i te wāhi Ultimate Multisite network.

I Google Forms, whakamōhaki i te form ki te mea he tino pēhea te whakamahi i ngā rohe (fields) iti-iti anō ana kia whakatō i te whaiaro hou i te network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

I Zapier, whakamōhaki i te Zap hou me te whakatō i te form e whakatō ana i te data ki te spreadsheet i roto i Google.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Whakahaere! He pēhea te whakawhiti i te form o Google Forms me Zapier, ā, he tino hono ai ki te network. Kei te mea, he pēhea te whakatō i te Action (te mahi) e whaiora mai i te Trigger (te whakaahu) o Google Forms ko ngā wā ka whakamahia ana i te form.

Whakawākea i te app hou Ultimate Multisite me te whirihi i ai. Mo te mea he pēhea te Zap, kia whirihi i te option Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Iha i tēnei whakamāhaki wāhi hou, whirihi i te account (whaiaro) e whakapono ana ki tēnei Zap.

He mea tino nui tēnei wāhi i roto i te whānau katoa o te mahi. He mea nui ona te whakatira i ngā rohe (fields) e pēhea rawa te whakatira i ngā rohe anō ana mai i Google Forms ki ngā rohe iti-iti anō ana tika mō te registration endpoint, ahua i te whakatira i te wāhi hou o tēnei article.

I tēnei whakamāhaki, he tino pēhea te whakamaoritia i te username, email, password, name me URL o te website. He mea katoa kia whakatira anō ana, kia puta ake ngā membership katoa e whakatō ana i tēnei Google Forms ki te pattern o te product me te status (tahinga) pēhea.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Mea te whakamahi i te mōhio, whai i te whakamārama whakamutunga. I te whero whakamutunga, ka taea e koe te whakaahua i ngā fields katoa kia whakato ki te endpoint, ngā whakamohio o ngā mea, me ngā fields kia whakato i roto i te pō.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Whakawātea i tō Zap hou ā, ka whakatutaku i ai i runga i te pai. Ko te mea e pēnei i ko ngā whakamohio katoa, he taea ai ki te whakaatu i ngā mea katoa. He tino mōhio nui, he taea ai i ngā mea i roto i te pō kia whakatutaku.

### Ngā whakaritenga o te endpoint katoa {#complete-endpoint-parameters}

He tēnei whakawātea katoa me ngā mea katoa e taea te whakato.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // he tūmanako i "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // he tūmanako i "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
