---
title: Cúram na ghlúin Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Inseall Ultimate Multisite le Zapier {#integrating-ultimate-multisite-with-zapier}

I gcuid ar chláir, áit ag sbar éargáil ar [Webhooks](webhooks.md) agus conas a bheith i gceart le appachais third-party.

Is é an úsáid de webhooks caomadh ach níl sé go leor comhionachtaí ar fáil in codáil agus chun payload a laighne. Is é **Zapier** ró-chuid de chuid a bheith i gceart leat.

Tá Zapier i gceart le sin éifeachtaithe le fada 5000+ app, rud a dhéanann comhthéacs ar fáil idir appachais.

Is féidir leat creideach **Triggers** a chur ar fáil ag an t-aonach nuair a bheith i gceart ar chuid de chuid (e.g, caillte a chur ar fáil agus a thabhairt an eivrithe account_create) nó a chur ar fáil **Actions** ar chuid de chuid ag teacht ar éifeachtaí oifríngeolaíochta (e.g, creideach nua chuid membership caillte i do chuid network Ultimate Multisite).

Is é seo faisnéis go bhfuil **Ultimate Multisite Zapier's triggers** agus actions a bhaint as an [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Conas a fhágáil ar aghaidh {#how-to-start}

Ar anois, bíodh an chéad, is féidir leat a chur ar fáil Ultimate Multisite i liosta appachais Zapier. Mar chuid eile, leat a chluinadh [an link seo](https://zapier.com/apps/wp-ultimo/integrations).

Go dtí do dashboard agus gabháil ar an nútair **+** **Create Zap** ar an chuid leathair a bhonraithe chun nua Zap a chur ar fáil.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Bhaidh tú ag teacht ar an cur chuig an cur chuig a chur ar fáil.

Iarraidh i bhfáinneán "wp ultimo". Chluinadh chun an option **Beta** a chluinadh.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Tar éis an app a chur ar fáil, chun an eivrithe a fáil ag teacht ar fáil: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Anois, rud áirítear ag Zapier leat a bheith i gceart le **do chuid network**. Chluinadh i **Sign in** beidh an glaochán nua ag teacht ar fáil ag iarraidh **API credentials**.

![Prompt de login Zapier do kredinialais API](/img/admin/webhooks-list.png)

Rá thar go dtí chuid admin network duit agus tú a bhfáthach i **Ultimate Multisite > Settings** > **API & Webhooks** agus leiceáil ar an seachtain API Settings.

Taispeáin an option **Enable API** mar is é ag tairgíocht seo chun an cur chuimhneachán a bheith ag eolais.

![Settings API and Webhooks le API Settings agus option Enable API](/img/admin/settings-api-webhooks.png)

Use an icon **Copy to Clipboard** ar na feidhm API Key agus API Secret agus pasteáil an chuid cur chuimhneacháin seo ar an seachtain integration.

Ar an feadreachas URL, leiceáil an URL fhuil miúcháin do network, gan cur isteach an protocol (HTTP nó HTTPS).

![Seachtain integration Zapier le API Key, Secret agus URL fields](/img/admin/webhooks-list.png)

Cliceáil ar an nútair **Yes, Continue** chun an taitneamh seo a thabhairt go dtí an áit eile. Má tá cinnte cé linn, cheana féin do chuid cur chuimhneacháin nua! Cliceáil ar **Continue** chun cur chuimhneachán nua a chur i gceart.

## Conas a chur in áit nua (Trigger) {#how-to-create-a-new-trigger}

Anois atá do chuid cur chuimhneacháin ag cur chuimhneacháin, leiceáil ar na obairí atá ar fáil. Déanann méid **payment_received** chun an taitneamh seo a bheith ag cur chuimhneachán.

![Seachtain payment_received event i Zapier trigger](/img/admin/webhooks-list.png)

Agus leona an obair atá ag cur chuimhneachán agus má chloisteáil ar **continue**, beidh **test step** ag tairgíocht.

![Test step Zapier do trigger](/img/admin/webhooks-list.png)

Ag an áit seo, beidh Zapier ag teastáil an taitneamh atá agat chun **fhéachaint an payload a bhfuil sé ar an obair sin**. Ag cur chuimhneacháin eile deart, beidh cur chuimhneachán le an chuid struchtúr seo ag cur chuimhneachán.

![Test step trigger Zapier a thaispeán go díreach le payload](/img/admin/webhooks-list.png)

Sa bhfacht chun an Action

Bítheann Actions a bheith ar fáil trí thôngianna ó chuid trigger eile chun noutacha nua a chur i bhfeidmheas ar chuid nettóla.

Agus **chun an action step a chur in áit**, beidh tú ag iarraidh a chur in áit Ultimate Multisite **Beta** agus an option **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Agus iarrar tú ag cur in áit aithreacha (authentication), mar a dhélig méid ar **How to start**, nó chun aithreacha a chur in áit a bhí curaithe. Ag an taitéal seo, beidh muid ag iarraidh an aithreacha a bhí curaithe a chur in áit.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Déanamh ar an Action {#how-to-create-actions}

Is é seo an **step leathanach eile** agus is é an t-áit a bhfuil daoine ag iarraidh a bheith ag cur isteach, mar atá sé ag dul ar chuid eile. An áit a chur in áit ar an chéad cheann leat beidh tú ag iarraidh an **Item**. Is é an **information model** ar chuid t-netnchais agat, mar **Customers, Payments, Sites, Emails** agus eile.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Nuair a bhfáthfaidh tú item, beidh an fómhar ag athrú chun na feidhmheasraithe (fields) a bhfuil gá a chur iad agus a bheith ag cur isteach ar an item a bhí curaithe.

Mar shamhs, nuair a bhfáthfaidh tú an item **Customer**, beidh na feidhmheasraithe ag cur iad cinnte go bhfuil gach rud atá ag tairiscint chun Customer nua a chur in áit ar chuid nettóla.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Tar éis an foirithe a chur in áit, beidh cur chuimneach ar chuid feidhmheasraithe a bhí ag cur isteach agus na feidhmheasraithe a bhí ag cur isteach.

![Test a chaoi Zapier ag déanamh an t-aoná agus a bheith go bhfuil na feidhmacha caillte agus go bhfuil siad caillte](/img/admin/webhooks-list.png)

Ag cosúil gur cinnte go dtí an t-aoná atá sé chomhartha, tá an t-aoná agat ag cur isteach. Is é astúla ar cheart a dhéanamh ar do net iad a fheiceáil má bhí an áit atá ag cur isteach le test an t-aoná.
