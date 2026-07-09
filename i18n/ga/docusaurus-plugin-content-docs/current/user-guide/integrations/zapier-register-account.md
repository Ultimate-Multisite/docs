---
title: Réigiú an Account trí Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Register an account via Zapier {#event-register-an-account-via-zapier}

Iar a ardán [Integrating Ultimate Multisite with Zapier](zapier.md), táimid ag siúlacht ar chuid atáin a bheith ag úsáid de Zapier chun eolaisfeanna eile a dhéanamh i Ultimate Multisite ar fáil ar na gnáthacha agus ar na athrúcháin (triggers and events). Iar an ardán seo, beidh mé a chur in iúl conas a bheith ag cur isteach (integrate) appailíocht chuid tríú. Beidh mé ag úsáid Google Sheets mar spás data agus beidh mé ag cur an t-aithris sin i Ultimate Multisite chun rachmasán a dhéanamh.

Ar primaill, go dtí a chomhacht le Zapier, rud éigin ar an ardán **Ultimate Multisite > Settings > API & Webhooks** agus féachaint ar an fáil go bhfuil an API acu. Cuir an Clé API (API Key) agus an Seachtain API (API Secret) ó chuid scéal seo chun na gnáthacha Ultimate Multisite a chur in iúl nuair aistriúidh Zapier do chuid acréidteachtaí.

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

Ar primaill, ag cur Google Sheet ar fáil i bhfinn Google Drive duit. Déan cinnte go bhfuil chuid colúin acu ar fáil ar fáil chun data a chur in iúl go héifeachtach leat anois.

Tar éis an Google Sheet a cur isteach, is féidir leat dul ina chomhacht ar do account Zapier agus a fhreagairt a dhéanamh ar athbhreithniú (zap) nua.

Ar an t-amais ar an cur chuig (search field) ar **"App event"**, déan chun **"Google Sheets"** a chur in iúl.

Tar éis, ar an fáil ar an áit "**Event**", déan chun "**New spreadsheet row**" a chur in iúl agus féachaint ar "**Continue**".

Beidh an t-amais seo ag iarraidh orm a chur i bhfinn **Google Account** a bhfuil an **Google Sheet** acu. Mar sin, déan cinnte go bhfuil an account Google ceart acu.

Ar an t-amais ar **"Set up trigger"**, beidh tú ag cur isteach agus ag cur in iúl an Google Spreadsheet agus an worksheet atá agat a bbeidh data a bheith ag cur in iúl ó chuid. Déan go leor é seo agus féachaint ar "**Continue**".

Tar éis, is féidir leat a **testáil do trigger** chun cinnte a bheith acu ar an Google Sheet.

Má tá test agat, rud éigin a bhaineann leis an t-aithris acu ar na spás data acu. Cuir féachaint ar "**Continue**" chun cinn a dhéanamh.

An ár leat a chéad taitneamh atá ag an t-aon chuid ar fáil: cur isteach an áit a dhéanamh ar an aithris eile a bhfaráin an account nó a chur in díonacht i Ultimate Multisite. Ar an fháil ar an fháil, déan chun "**Ultimate Multisite(2.0.2)**" a chur i bhfáiste.

Ar an áit ar an fháil "**Event**", déan chun "**Register an Account in Ultimate Multisite**" a chur i bhfáiste agus tapaidh ar an nútair "**Continue**".

Ar an áit ar "**Set up an action**", beidh tú ag iarraidh fáil ar fháil ardán fada ar dath chuid, membership, rialta, agus sin. Is féidir leat na h-aithrisí a chur i bhfáiste ar do Google Sheet agus a chur i bhfáiste ar an áit atá ag cur isteach mar a bhaineann an screenshot seo.

Tar éis an fháil ardán, is féidir leat an áit a testáil.
