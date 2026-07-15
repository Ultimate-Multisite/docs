---
title: Réigiú Endpoint API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Anail API register de Ultimate Multisite

Iar seo, fará tú a bhealach a bhfaidh tú a úsáid an endpoint /register API de Ultimate Multisite chun an cur chuig an tús (onboarding process) ar fáil do chuid oibre ina ngrú agus conairt é go dtí Zapier.

Bíonn an endpoint seo ag úsáid an meethacht POST agus tá sé a gníomhfaidh an URL _**https://yoursite.com/wp-json/wu/v2/register**_. Ag an t-aithne seo, beidh 4 cur chuig ag teacht i bhfeidhm ar fáil i do ngrú:

  * Beidh cur úr WordPress ná nua nó beidh sé a chuid féin a chuidtinn tríd an ID úr.

  * Beidh cur oibre (Customer) ná nua i Ultimate Multisite nó beidh sé a chuidtinn tríd an ID oibre.

  * Beidh site ná nua ar an gréine WordPress.

  * Ag deireadh, beidh Membership ná nua i Ultimate Multisite.

Leat é seo a dhéanamh, beidh tú ag cur fáil ar do chreachtais API (API credentials). Chun cuimhneacháin a fháil, cur isteach ar an panel admin de do ngrú, cur isteach ar **Ultimate Multisite > Settings** > **API & Webhooks**, agus leat é seo a fheiceáil i seachtán API Settings.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Seo an fhéidir a bhaineann ar an cur chuig API:

![API settings full page](/img/config/settings-api-full.png)

Déan chun **Enable API** a chur ar fáil agus gníomhfaidh do chreachtais API.

Ansin, leat é seo a sholáir an endpoint agus ansin cur cur chuig registration i Zapier.

## Parámeteí bodsa an endpoint {#endpoint-body-parameters}

Leat é seo a bheith ag cur fáil ar an fhorchas na méidteacha mínteacha a bheith ag cur isteach ar an endpoint. Ag deireadh an ardán seo, beidh tú ag cur fáil ar an cur chuig.

### Customer {#customer}

Is é seo an fhorchas a bhaineann le cur chuig an cur úr (User) agus an Cur oibre Ultimate Multisite:

"customer_id" : integer

Is féidir leat curteáil an ID oileúsa atá ag an t-net. Má níl aon cheannach a chur i bhfeidm, beidh an fhorbairt seo a bheith inúchán chun curteáil nua agus úsáid WordPress nua a chur i bhfeidm. Is féidir an ID úsáideach a chur i bhfeidm mar chuid an t-ID oileúsa.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

An t-aon chuid fhorbairt ag anseo ag curteáil a mór cheannach.

"membership" { "status" : "string", // aon dearcach mar "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Is dócha, tá ar chuid fhorbairt ag curteáil a mór ID oileúsa 1 nó níos mó ó an t-net. Déan tú ag curteáil, níl an endpoint seo a chur i bhfeidm. Déan tú léamh an dóciméad Ultimate Multisite chun an endpoint curteála a bheith agat ar fáil.

**"products" : [1,2],**

### Payment {#payment}

Mar chuid Membership, tá an status ag curteáil ag curteáil ag anseo.

**"payment" { "status" : "string", // aon dearcach mar "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Agus chun an chuid a deireadh, tá an URL agus an Titíl an t-site ag curteáil.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Beidh an curtas an register ag teacht ar fhorbairt a bhí curteála nua a chur i bhfeidm.

## Curteáil iontaí i Zapier {#creating-an-action-in-zapier}

Le curteáil nua agus níos foirmeacha seo, beidh tú ag curteáil nua i Zapier.

An bhfuil tú ag iarraidh a bheith ag úsáid an curtas nua dearcach a chur i bhfeidm? Déan tú léamh anseo. (link?)

### Curteáil iontaí {#creating-an-action}

Le linn é a chur chun cinn conas a bheith le point endpoint a úsáid le Zapier, roinnt intéaracht le Google Forms a cheartáimid. Mar chuid is gcurtha an fómhar seo agus is againn an t-aithris ag cur isteach an t-aithris i bhfáine an fómhar, beidh nua chuid ar chuid i ngníomhaithe i ngrúpa Ultimate Multisite.

I Google Forms, déan fómhar le na feidhmíocht is mór a bhaineann le cur isteach nua chuid i ngrúpa.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Ansin i Zapier, déan nua Zap agus connexthigh an fómhar a cheartáimid i Google tríd an spreadsheet a bhfuil na data ag cur isteach.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Done! Tá an fómhar Google Forms conexe le Zapier agus tá sé réidh chun é a chomhcheangail le an grúpa. Ansin láithreach go dtí an Aonráin (Action) a bhfáine ag an Taisce (Trigger) a cheartáimid ag Google Forms mar chuid is gcurtha.

Léigh an app Ultimate Multisite nua agus déan é. Do ardán seo, déan an option Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Tar éis an áit céanna seo, déan an account a bhfáine ag an Zap a chomhcheangail le seo.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Is é seo an chuid is áitintúil de chéad chuid an t-amach. Bíonn ríamh na feidhmíocht atá ag Google Forms le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaineann le na feidhmíocht is mór a bhaine

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Le linn atáirítear an fada, déan an test final. Ar an chuid féin a fheiceáil ar an scéal seo, thuigidh tú gach feidm a bhféadfadh a bheith ag cur isteach ar an endpoint, an fhorchas a bhaineann leis, agus na feidm a bhí ag cur isteach go mbéad.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Test an Zap nua agat agus is féidir é a deán go guthúil. Má tá aon cheangail as an t-am, léigh gach feidm agus an bhfuil siad ag cur isteach go ceart. Mar go bhfuil go leor fáil ar fáil, is féidir leis rud éigin a bheith ag iarraidh an t-am.

### Parametraí an endpoint go léir {#complete-endpoint-parameters}

Seo an cur chuig agus gach sprioc a bhaineann leis na feidm a bhí ag cur isteach.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // ag bheith ag "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // ag bheith ag "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
