---
title: Zapier Integration
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Pag-integrate sa Ultimate Multisite gamit ang Zapier

Sa isa sa mga artikulo, pinag-istoryahan nato ang [Webhooks](webhooks.md) ug unsaon ni paggamit para mag-integrate sa mga third-party application.

Ang paggamit sa webhooks medyo komplikado kay nagkinahanglan kini og advanced nga kahibalo sa coding ug pagkuha sa payloads. Ang **Zapier** usa ka paagi aron malikayan nimo kana.

Ang Zapier adunay koneksyon sa labaw 5000+ apps, nga naghimo sa komunikasyon tali sa lain-laing application mas dali.

Makakab-ot nimo ang paghimo og **Triggers** nga mag-activate kung adunay mga panghitabo sa imong network (pananglitan, usa ka account ang gihimo ug mag-trigger kini sa `account_create` event) o makag-generate og **Actions** sa imong network nga nagreact sa external events (pananglitan, paghimo og bag-ong membership account sa imong Ultimate Multisite network).

Kini posible tungod kay ang mga **Ultimate Multisite Zapier triggers** ug actions gipagana sa [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Unsaon pag-umpisa {#how-to-start}

Una, pangitaa ang Ultimate Multisite sa listahan sa apps sa Zapier. Alternatibo, pwede kang mag-click ni [kini nga link](https://zapier.com/apps/wp-ultimo/integrations).

Padulong sa imong dashboard ug i-press ang **+** **Create Zap** button sa left sidebar aron mag-set up og bag-ong Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Mag-redirect ka sa page sa paghimo sa Zap.

Sa search box, i-type ang "wp ultimo". I-click aron pilion ang **Beta** version option.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Human mapili ang among app, piliha ang available nga event: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Karon kinahanglan nato hatagan og access sa Zapier ang **imong network**. Ang pag-click sa **Sign in** magbukas og bag-ong window nga nanginahanglan sa **API credentials**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Punta sa imong network admin panel ug mag-navigate sa **Ultimate Multisite > Settings** > **API & Webhooks** ug pangitaa ang API Settings section.

Piliha ang **Enable API** option kay kinahanglan ni para molihok kini nga koneksyon.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Gamita ang icon nga **Copy to Clipboard** sa mga field sa API Key ug API Secret ug i-paste na kana nga values sa integration screen.

Sa URL field, ibutang ang imong network full URL, lakip na ang protocol (HTTP o HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

I-click ang **Yes, Continue** button para molihok sa sunod nga lakang. Kung maayo tanan, mabati ka na sa imong bagong konektadong account! I-click ang **Continue** para maghimo og bag-ong trigger.

## Unsaon paghimo og bag-ong Trigger {#how-to-create-a-new-trigger}

Karon nga konektado na ang imong account, makakita ka na sa mga available events. Atong pilion ang **payment_received** event para ni tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Pagkahuman ma-select nimo ang event ug i-click ang **continue**, moabot ka sa usa ka **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Ni ni nga stage, akong itest sa Zap kung makakuha ba kini og **specific payload para anang event**. Sa umaabot nga mga event sa parehas nga klase, ang impormasyon nga may parehas nga istraktura ang ipadala.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Sa atong tutorial, ang test **nagsukol sa maayo** ug nagbalik sa sample nga impormasyon sa payload. Kini nga sample nga impormasyon magamit kanato aron maggiya namo samtang naghimo og mga aksyon. Ang imong trigger kay gibuhat na ug andam na para i-connect sa ubang applications.

## Unsaon paghimo og Actions {#how-to-create-actions}

Ang Actions naggamit og impormasyon gikan sa ubang triggers aron makahimo og bag-ong entries sa imong network.

Sa **paghimo og action step**, mopili ka sa Ultimate Multisite **Beta** ug ang option nga **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Sa sunod nga lakang, maghimo ka o magpili og authentication, sama sa gihimo nato sa **How to start**, o magpili og gi-create nang authentication. Sa tutorial ani, mopili kita sa parehas nga authentication kaniadto na nato gihimo.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Pag-set up sa Action {#setting-up-the-action}

Kini ang **main step sa action** ug diri medyo lain ang mga butang. Ang unang impormasyon nga imong pilion kay ang **Item**. Ang Item mao ang **information model** sa imong network sama sa **Customers, Payments, Sites, Emails** ug uban pa.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Pagpili og item, ang form mag-rearrange aron ibutang ang mga field nga gikinahanglan ug optional para sa napiling item.

Pananglitan, kung mopili ka sa item **Customer**, ang mga field sa form magdala sa tanan nga kinahanglan nimo pun-on aron makahimo og bag-ong Customer sa network.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Human sa pagpuno sa tanang mga field nga gihubad isip **required** ug pag-click sa continue, usa ka katapusang screen ang magpakita kanimo sa mga napunong field ug sa mga field nga wala pa napuno.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Sa dihang makompleto na ug malampuson ang imong test, ma-configure na ang imong action. Importante usab nga mag-check sa inyong network kung ang item gihimo gamit ang test sa inyong action.
