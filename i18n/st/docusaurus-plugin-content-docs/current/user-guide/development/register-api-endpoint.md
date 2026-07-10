---
title: Hloka le liti la API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API Endpoint ya Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Ha le tšhobo ea tutorial ena, o tla tseba hore na lefe o ka sebelisa Ultimate Multisite /register API endpoint ho fetola bohlelo ba tsotlhe ba ntlha e ntlha ea lona le ho etsa le ho etsa le Zapier.

Endpoint ea hau e sebelisa POST method, le e hlokea ke URL _**https://yoursite.com/wp-json/wu/v2/register**_. Ka tsela ena, ho fetoga ka tsela ea hau ea lona, litšepo tse 4 li tla etoa mo le lona:

  * Mofuta o ntlha oa WordPress kapa ho hlalosa ka user ID a hae o tla fetola.

  * Mofuta o ntlha oa Customer e Ultimate Multisite kapa ho hlalosa ka customer ID a hae o tla fetola.

  * Site e ntlha ea WordPress e le lona e tla fetola.

  * Ka tsela ena, Membership e ntlha e Ultimate Multisite e tla fetola.

Ho feta le bohlokoa ba hau, o tla hloka credentials ea hau ea API. Ho li feta, fana ka panel ea admin ea lona ea lona, tsamaelo **Ultimate Multisite > Settings** > **API & Webhooks**, le ho hlalosa sebahale sa API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Kea le tšepo e fetang ea page ea API settings:

![API settings full page](/img/config/settings-api-full.png)

Hloka **Enable API** le feta credentials ea hau ea API.

Lumela, re tla etsa le endpoint le ho fetola action ea registration ka Zapier.

## Parameters ea body ea endpoint {#endpoint-body-parameters}

Letse re leka lehlelo la lipuo tse fapaneng tse re hloka ho tšoa eona endpoint. Ka lefifi la lona la tutorial ena, o tla bona call e fetang.

### Customer {#customer}

Kea lipuo tse hlophiso tse hlokang ho etsa tsotlhe tsa User le Ultimate Multisite Customer:

"customer_id" : integer

Ho ntlha ho tloboho le bohlokoa haholo: Ho nthelonga ho feta ID ea sefofotsoeng sa customer oa hau o tla fihla ka netefisa ea hau. Ha e fihle a fetahileng, litaba tse letsoho le litietsi tse nyane li tla ba lelapa la ho fetola customer le user oa WordPress. User ID e ka fihla ka masepele a sefofotsoeng sa customer.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Ho na le lipuo tse neng re hloka ka moho ea tsena ke Membership Status.

"membership" { "status" : "string", // e le ya "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Products ba fihla array le ID ea produk tse 1 kapa zo zo mo netefisa ea hau. Le tloha, sefofotso se se fetahileng se ne se fana ka ho bona lipuo tsa ho fetola products. Ho bona ho bone le ho na le bohlokoa haholo ho bona litaba tsa ho fetola products.

**"products" : [1,2],**

### Payment {#payment}

Ka lebaka la Membership, re hloka status fela.

**"payment" { "status" : "string", // e le ya "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Le ho sa ho fetola sefofotso, re hloka URL ea site le Title ea hau, ho fihla mo object ea Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Ho feta haufi (register endpoint) tla fihla array le lipuo tsa membership tse neng di fetola ka ntlha.

## Ho fetola action ea Zapier {#creating-an-action-in-zapier}

Le ho fanaetsoa sefofotso se se fetahileng se se hlophisoang le se se tsamaea, o tla ba le action e ntlha ea Zapier.

O na le tsela ea ho tseba hore na le ho ba le leboho le bohlokoa ba version e ntlha ea Zapier e fanaang? Ho bona lefa ho bone ka lona. (link?)

### Ho fetola action {#creating-an-action}

Ho ba le fa'aopoaga o le registration endpoint ma Zapier, e fa'atatau ona tatou fa'amalosia se integration ma Google Forms. O le fesili o le form o le fa'aopoaga ma fa'aalia i le a tatou fa'aopoaga membership tasi mai i le network Ultimate Multisite.

I Google Forms, fa'aopoaga se form ma fa'aalia le fesoasoani e taua lea e fa'aopoaga membership tasi mai i le network.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

O le Zapier, fa'aopoaga se Zap tasi ma fa'amalosia le form o le fa'aopoaga i Google mo le spreadsheet o le fa'aopoaga e taua lea o le data.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Fa'aopoaga! O le form o Google Forms ua fa'aalia ma Zapier ma e aoa ai fa'amalosia i le network. O le a tatou su'esu'eina i le Action o le a tatou fa'aopoaga o le Trigger o Google Forms o le a tatou fa'aopoaga i luga o le a tatou fa'aopoaga.

Fa'aalia le app Ultimate Multisite tasi ma fa'aalia ai. Mo le a tatou Zap o le tasi, su'esu'eina le optiono Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

I le a tatou fa'aopoaga lea, su'esu'eina le account o le a tatou fa'aopoaga i le Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

O lona ua fa'aaogā ma fa'aalia ai se fa'aopoaga. O lona e tatau ona tatou fa'amalosia mea e o le a tatou fa'aopoaga i le endpoint o le register, o le a tatou fa'aalia i le fesoasoani o le a tatou fa'aopoaga i le sese o le article lea.

I lenei fa'ata'ita'iga, o le a tatou fa'amalosia le username, email, password, name ma URL o le website. O le fa'aopoaga la'a fa'aalia ai e tatau ona tatou fa'amalosia mea e o le a tatou fa'aopoaga i le sese o le article lea, o le a tatou fa'aopoaga i le fesoasoani o le a tatou fa'aopoaga.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Le le fa setse, a la tsela ya tshediso. Ka screen efe, u ka bona bohlelo bo tla fana ka sebope (endpoint), litlhahlo tsa lona le lina, le litlhahlo tse tla fana ka ntlha.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Le fa u fetisa Zap e tlo, le tla fana ka tshediso. Ha ho na le sebope seka, o tla bona bohlelo ba litlhahlo le lina le tla fana ka ntlha. Le fa ho na le thuto, o tla bona litlhahlo hloekileng le hore li fana ka ntlha. Ka go na le lipuo tse ngata, go na le dikgwetlho tse dintsi ha a ka tsamaisa.

### Litlhahlo tsa sebope seka (Complete endpoint parameters) {#complete-endpoint-parameters}

Kea le tsela efe le bohlelo bohlelo ba litlhahlo tse ka fana ka fana ka ntlha.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // e le ya "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // e le ya "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
