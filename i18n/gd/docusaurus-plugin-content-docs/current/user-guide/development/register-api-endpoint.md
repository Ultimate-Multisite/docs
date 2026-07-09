---
title: Ráidh an API endpoint aistadh
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# An API endpoint a' Chàir a' Chùlchnaich (The Ultimate Multisite Register API endpoint) {#the-ultimate-multisite-register-api-endpoint}

Dug an tòradh seo, thuill thu le feuchain a' sgrùdadh a' chùlchnaich API Endpoint a' Chùlchnaich (Ultimate Multisite /register API endpoint) airson a' creachadh a' chùlchnaich fahuineach airson ùr-chùlchnaich ùr anns a' chùlchnaich agad agus faic a' sgrùdadh sin le Zapier.

Tha an endpoint a' sgrùdadh POST, agus tha e a' chùlchnaich gu URL _**https://yoursite.com/wp-json/wu/v2/register**_. San tòisich sinn, beidh 4 prosess a' chluichdha anns an t-chùlchnaich seo anns a' chùlchnaich agad:

  * Bhaidh ùr WordPress ùr no sgrùdadh eairt air a' chùlchnaich ùr sin gu ID ùr.

  * Bhaidh ùr Chùlchnaich ùr anns an Ultimate Multisite no sgrùdadh eairt air a' chùlchnaich ùr sin gu ID chùlchnaich.

  * Bhaidh ùr ùr ar t-chùlchnaich WordPress ùr anns an chùlchnaich.

  * Agus a' chùlnaich, bhaidh ùr fìor (Membership) ùr anns an Ultimate Multisite ùr.

 airson seo, thuill thu le ealaian API agad. Gus a' faic an tòisich, teicheadh gu panel admin a' chùlchnaich agad, teicheadh **Ultimate Multisite > Settings** > **API & Webhooks**, agus faic an seachadadh API (API Settings section).

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Seo tha fhaighinn a' chùlchnaich fìor air an seachadadh API:

![API settings full page](/img/config/settings-api-full.png)

Taisg an **Enable API** agus faic ealaian API agad.

An uair sin, leugh sinn an endpoint agus creach sinn a' chùlchnaich fahuineach mar a' chùlchnaich (registration action) anns Zapier.

## Paramètrair tòisich an body (Endpoint body parameters) {#endpoint-body-parameters}

Leugh sinn ealaian air faighinn an fhaighinn fhuasach sin a bheilnos a' sgrùdadh gu endpoint. Ar deamheachd an curtha seo, beidh thu le tòisich fìor a' chùlchnaich.

### Chùlchnaich (Customer) {#customer}

Tha an fhaighinn seo a' sàmhach airson an prosesas a' creachadh ùr agus an Chùlchnaich ùr anns an Ultimate Multisite:

"customer_id" : integer

Is e3ach ID seallach a'chuid a gineadhach air do chuid a gineadhach a gineadhach. Tha thuair a lasa, tha an fhaighinn a'chuid a gineadhach a gineadhach a gineadhach a gineadhach. Is e3ach ID seallach a lasa a gineadhach a gineadhach a gineadhach.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Tha an t-eòlas sin a lasa faicinn Status Membership.

"membership" { "status" : "string", // aon de na "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Tha eòganan a thar a' chuid a gineadhach ID 1 mar mòr. Bidh thu a' chuid, tha an endpoint seo a' tàinig a' cruinn eòganan. Seallach a' chuid a gineadhach Ultimate Multisite airson a bhith a' faicinn a' chuid a gineadhach a gineadhach.

**"products" : [1,2],**

### Payment {#payment}

Mar a tha an t-eòlas sin a lasa, tha sinn a' chuid Status.

**"payment" { "status" : "string", // aon de na "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

Tha an t-eòlas sin a lasa, tha an URL a' chuid an Taisneil. Tha e uile sin san obsect Site.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Tha an t-eòlas a' chuid register a lasa aon array le faicinn fhaighinn a gineadhach membership.

## Creachadh eògan air Zapier {#creating-an-action-in-zapier}

Le bhith a' chuid an endpoint nòth a tha a' chuid a gineadhach a tha a' tàinig, tha thu a' chuid eògan ùr san Zapier. A tha thu a' faicinn a' chuid a lasa agus a' fhaighinn eògan ùr a th' ann? Learn more here. (link?)

### Creachadh eògan {#creating-an-action}

An tò a chleachdadh an endpoint de registre le Zapier a chlàradh air a chleachdadh, rinn an t-uisge sin le Google Forms. Mar chùl, mar a tha an form seo a bhuladh agus a shàthachadh an fhaisg an fhoirbheithneach, faic mbeidh neoneamh a chruthachadh anns na h-nàdh Ultimate Multisite.

Mar Google Forms, creu form le an t-uisge sin a tha air a bhith daoine a chlàradh airson a chruthachadh de neoneamh new.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

An uair sin, mar Zapier, creu zap new agus coinn a' chluainteachd an form a tha air a bhith agad le Google a geal-fhaighinn anns an spreadsheet a shàthachadh an daoine.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Seo cheann! Tha an form Google Forms a chluainteachd le Zapier agus tha ready airson a chluainteachd le an nàdh. An uair sin, rinn an t-uisge sin air an Aithris (Action) a tha a' tòiseachadh de dhutha a tha a' tòiseachadh gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu sòn gu s

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Chan tha fhaighinn a' sgrùdadh, ròidh gu leathair. Ar an sin, ar an sinneach is dòigh thu faic thu a' chunn fyndhromach air an endpoint. Ar an sinneach, thu faic eir chùisbeul na fhaighinn a tha a' sgrùdadh, an fhaighinn a tha a' sgrùdadh air a' chùisbeul, agus an fhaighinn a tha a' sgrùdadh a tha a' sgrùdadh.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Test thu na Zap new agus bi thu a' sgrùdadh gu sònraichte. Mar sin, thu faic eir thu a' chunn fyndhromach air an endpoint a tha a' sgrùdadh gu sònraichte. Mar a tha mòran de dhòighinn, tha thailean beag aig tium.

### Paramètra endpoint fhuilich {#complete-endpoint-parameters}

Seo an call fhuilich agus a chùisbeul na fhaighinn a tha a' sgrùdadh air a tha a' sgrùdadh.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // aon de "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // aon de "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
