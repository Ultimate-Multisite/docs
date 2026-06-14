---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# An Fáil Ar Webhooks (v2)

_**ATTENTION: Nóta go bhfuil an feidhm seo nó an curte seo ar fáil do chuid úsáidheoirí ardchialla.**_

Is **webhook** cara a chur in áit app nó software mar Ultimate Multisite a bheith ag cur iontaí réel-time do sonraí eile. Déanann webhook data nó payloads go dtí app eile mar a bhíonn sé ag thabhairt, ar an cuid, rud é sin **táinig tú le sonraí agad amach.**

Is é seo ag teacht ar chuid is féidir linn a bheith ag cur isteach nó a chur i bhfeicriúraitheada sonraí ó Ultimate Multisite go dtí CRM nó system eile mar a thabhairt sé ag cur isteach an t-amach. Mar shampla, rud é sin ag teacht ar chuid is féidir leat a bheith ag cur isteach na leimeanna agus an email de chuid úsáidheor do liosta mailte mar a thabhairt sé ag cur isteach acount nua.

## Conas a chur in áit webhook

Leat a chur in áit webhook, rud é sin, go dtí do dashboard admin neteardóir. Cliom ar **Ultimate Multisite > Webhooks > Add New Webhook.**

![Empty Webhooks list page with Add New Webhook button](/img/admin/webhooks-list-empty.png)

Ansin leat a thabhairt ar fáil an curte webhook:

![Add New Webhook form with Name, Event, and URL fields](/img/admin/webhook-add-modal.png)

Nuair a chur in áit webhook nua, beidh tú ag iarraidh ina bheith le sonraí mar **Name, URL,** agus **Event**. Is féidir leat a bheith ag úsáid aon ainm atá agat ar do webhook. Is é na feidhm is ábhartha is fearr-chúram: an URL agus an Event.

![Webhook edit interface showing the URL field and payload preview](/img/admin/webhook-url-field.png)

Is é an URL **endpoint nó an curtha** a bhíonn Ultimate Multisite ag cur iontaí (payload) nó sonraí go dtí. Is é an app a bheith ag tógáil an data seo.

Is é Zapier an soluinn is fadail a úsáidtear de chuid úsáidheorí chun cur isteach leat integration leis an app tríú. Gan platform mar Zapier, beidh tú ag iarraidh cur isteach fuinneamh ar chuid is féidir leat a chur in áit custom function atá ag fháil sonraí agus a chur i bhfeicriúraitheada. Déanann an curte seo ar **conas a úsáid Ultimate Multisite webhook le Zapier.**

Iar seo, déan lá, ag cur isteach an ardán seo, ar an chuid kháiinntir de cheannas bunaithe má tá webhook a bhíonn agus conas a bheith na events atá ar Ultimate Multisite. Beidh méid ag úsáid ar site tríúchtain eile le haghaidh [requestbin.com](https://requestbin.com/). Beidh an site seo ag ceadaim linn a chur i ardán (endpoint) agus a ghlacadh an payload gan aon rud de codeáil a dhéanamh. _**An t-aisleabhar: is é sin an t-aon chuid a dhéanfar a sh fóirint go bhfuil an data ag teacht.**_ Beidh aon chur chun feidhm nó aon fáil ar an payload agam.

Go dtí [requestbin.com](https://requestbin.com/) agus cliceáil ar Create Request Bin.

Tar éifead, beidh sé ag iarraidh a bheith ag logáil má tá tú ag cur account already agat nó a chur in áit. Má tá tú ag cur account already, beidh sé ag cur tú go díreach ar an dashboard. Ar an dashboard, beidh tú ag fheiceáil an endpoint nó URL atá agat a leagan chun cabhrú ar chuid webhook Ultimate Multisite.

Go raibh tú ag cur i ardán an URL agus roinnt ar ais ar Ultimate Multisite. Déan an endpoint ar an fáil URL agus déan an event ó dháiríon (dropdown) a bheith agat. I seo, beidh méid ag teacht ar **Payment Received**.

Is é an event seo ag teacht chun cinn má tá cur chuid ag déanamh breagadh. Beidh gcothromais atá ar an t-am astair, an díriúchán agus na payloads atá ar an cur fáil. Cliceáil ar an nútair **Add New Webhook** chun an webhook a shábháil.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Beidh méid ag teacht ar an endpoint leat chun an t-am astair a fheiceáil má tá an webhook atá agat ag déanamh díriúchán. Beidh méid ag déanamh seo ag cliceáil ar **Send Test Event** anseo ar an webhook atá agat.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Beidh sé ag tairiscint a chur in áit a fháil go bhfuil an teast ceart.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Nuair a bhféadfaidh muid ar ais go dtí an site _Requestbin_, beidh méid an payload ag fháil, ag cur isteach cumhacht test.

Is é seo an prínéal bunaithe ar chuid na fáil agus endpoints. Má tá tú ag cur endpoint a bhaint as, deicinn leat rud éigin a chur in áit (custom function) chun an dáta a fháil ó Ultimate Multisite a chur i ardán.
