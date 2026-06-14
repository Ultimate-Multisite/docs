---
title: An t-aonacht Paymanta Mhaithreacha
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Set Up Amhailteachtanna Manuais (v2)

_**NOTE CRUCIAL: An cur an ardán seo a bhfeiceann ar Ultimate Multisite version 2.x.**_

Is é amhailteachtanna manuailsa shampla a fháil or láthairtanna pléasanna eile má tá **Stripe** nó **PayPal** gan a bheith ar fáil do chuid isuidiúiteach. Is féidir leis an t-amhas a bheith mar chuidine nó banc-aistriú nó aon chuidine amhailteachtaithe atá ar fáil leat local.

## Conas a fháil ar amhailteachtanna manuailsa

Is é sinte a chur ar fáil amhailteacht manual. Bíonn tú ag cur é seo ar fáil anseo i gcónaí pléasanna agus a chur in iarrachtaí ardaithe ar chuidine a bheith ag an chuidistí a bheith ag teacht an t-amhas.

Ar anois, rag thar **Ultimate Multisite > Settings > Payments**. Leathanach **Payment Gateways**, chomhthais **Manual** ar fáil. Beidh tú ag iarraidh a fheiceáil cabhrú **Payment Instructions** (Inseangail Amhailteachtanna Pléasanna).

Add an t-amhas seo le curte a bhaineann do chuid isuidiúiteach a bheith ag teacht an t-amhas. Is féidir é seo a bheith mar chuidine banc agus deichil email atá agat chun an t-amhas a bheith ag teacht ar fáil, dá réir example.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Is é seo an curte amhailteachtanna manual:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Tar éis a chur ar fáil, tagairt ar **Save Settings** agus tá sé donecht. Nuair a bhíonn chuid isuidiúiteach ag teacht ar fáil i do ngrúntach, beidh siad ag iarraidh an t-amhas a bheith ag teacht ar fáil chun an chléire a deánadh.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Agus beidh siad ag teacht ar fáil le amhailteacht ar do **Thank You** page le do amhailteachtanna pléasanna.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Aistriú amhailteachtanna manuailsa

Le a fáil ar curtiúchán tábhachtach, rag thar na meán **Payments** ar an chuid leat. Ag sin is féidir leat fheiceáil gach curtiúchán ar do ngrú agus iad a chuid féin, gan cur chun cinn na **status**. Beidh curtiúchán manach ar **Pending** (Taispeántúil) go dtí a bhfáthú go manach.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Chruinn an curtiúchán ag cur isteach ar chuid **reference code**. Ar an curtiúchán seo beidh tú gach curteoir ar an curtiúchán manach, mar chuid ID reference, caithreacha agus amachanna agus níos mó.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ar an colúin de oir, is féidir leat athrú an status curtiúcháin. Athrú go **Completed** (Comhlachta) agus an t-switch **Activate Membership** (Athrochaitheacht Múinteoirí) a chruinneáil beidh an site do chuid oileach agus an múinteoirí do chuid ag teacht ar fáil.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
