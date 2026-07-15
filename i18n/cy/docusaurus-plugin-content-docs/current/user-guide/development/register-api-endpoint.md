---
title: Regystro'r cyfeiriad API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ymddyn API Register o'r Ultimate Multisite

Yn yst tutorial, byddwch yn dysgu sut i ddefnyddio'r endpoint API /register o'r Ultimate Multisite i creu'r cyfnod gyfan o'r cyflwyniad am newyddol customer mewn rhwydwaith eich a sut i wneud hyn gyda Zapier.

Mae'r endpoint yn defnyddio'r ffurf POST ac mae'n cael ei galw gan yr URL _**https://yoursite.com/wp-json/wu/v2/register**_. Yn y cyfarfod hwn, bydd 4 prosesau yn cael eu cyflawni mewn rhwydwaith eich:

  * Bydd un benwerth WordPress neu ei gyfeiriad trwy'r ID benwerth yn cael ei creu.

  * Bydd un Customer mewn Ultimate Multisite neu ei gyfeiriad trwy'r ID customer yn cael ei creu.

  * Bydd un safle ar y rhwydwaith WordPress yn cael ei creu.

  * Yn y diwedd, bydd un Cyflwyniad (Membership) mewn Ultimate Multisite yn cael ei creu.

Ar gyfer y proses hwn, byddwch yn angen eich cyfrifau API. I gael nhw, mynd i'r panel admin rhwydwaith eich, mynd i **Ultimate Multisite > Settings** > **API & Webhooks**, ac gwellio am y rheolau API (API Settings).

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Dyma'r gweld cyfan o'r dudalen rheoli API:

![API settings full page](/img/config/settings-api-full.png)

Dechrau **Enable API** a gael eich cyfrifau API.

Bellch, byddwn yn chwilio am y endpoint ac ymlaen i creu gweithrediad cyflwyniad (registration action) mewn Zapier.

## Parametriau ffurf yr endpoint {#endpoint-body-parameters}

Byddwn yn cael gweld am y gairiad minimau sydd ei angen i anfon i'r endpoint. Yn y diwedd o'r ail ddefnydd, byddwch yn dod â'r cyfarfod cyfan.

### Customer {#customer}

Mae hyn yn wybodaeth sydd ei angen ar gyfer y proses creu'r User a'r Customer mewn Ultimate Multisite:

"customer_id" : integer

Mae'n posibilr i gyflwyno'r ID cyddeeiriad y gast yn eich rheiniad. Os nid yw'n cael ei gyflwyno, bydd y gairau isodol isodol ymlaen i creu gair newydd a bennewid WordPress. Gallai hefyd gyflwyno'r ID bennewidiol mewn modd fel y ID cyddeeiriad.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Cymdeithas** (Membership) {#membership}

Ynfon y cyfathrebu sydd yn angen i ni yn ysbryd, yw Statws Cymdeithas.

"membership" { "status" : "string", // un o "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Producaethau** (Products) {#products}

Mae producaethau cael ei rhoi â arall-llwybr gyda 1 neu fwy o ID producaeth o'r rheiniad eich. Beirddwch yn ddiogel, nid yw'r endpoint hwn yn creu producaethau. Gwellyn y drafiad Ultimate Multisite i ddeall wellfwy sydd mewn i'r endpoint creu producaethau.

**"products" : [1,2],**

### **Plaid** (Payment) {#payment}

Fel gyda Cymdeithas, mae angen i ni Statws.

**"payment" { "status" : "string", // un o "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### **Gwefan** (Site) {#site}

Ac i ddeall y bodgel, mae angen i ni'r URL a'r Titell y gwefan yn y Gymryd Gwefan.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Bydd y cyflwyniad o'r endpoint register yn cael ei ddarparu fel arall-llwybr gyda phrydnewid y gairau cymdeithas a creuwyd.

## Creu gweithrediad mewn Zapier {#creating-an-action-in-zapier}

 gyda'r cyflwyniad o'r endpoint creu account newydd a fwy gaeligol hwn, byddwch yn cael cyffredinol â gweithrediad newydd mewn Zapier hefyd.

A oes gennych chi ddefnyddio a lawen pob hyn ychwanegau sydd mewn i'r fersiwl newydd o Zapier? Dysgai mwy yma. (llink?)

### Creu gweithrediad {#creating-an-action}

I'nchw i'n ddefnyddio'r endpoint o regradd gyda Zapier yn fwy wellilltrefnu, byddwn ni'n creu cyfathrebu â Google Forms. Mae pob gdarau honno wedi'i llenwi a'i cadw yn y llyfr ymateb y ffurf, bydd einnewid newydd yn cael ei creu mewn rheolion Ultimate Multisite.

Yn Google Forms, gwneud ffurf gyda'r ffeiliau cyffredinol sydd angen i creu un newid yn y rheolion.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Mae'n ddyfynol mewn Zapier, gwneud zap newydd ac cysylltu'r ffurf a cael ei gael drwy'r spreadsheet lle mae data wedi'i cadw.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Daeth! Mae'r ffurf Google Forms wedi'i cysylltu â Zapier ac yn barod i cael ei gyfathrebu gyda'r rheolion. Yr hyn, byddwn ni'n mynd ar y Gweithrediad (Action) sydd yn angen o'r Trod (Trigger) a'r Google Forms mae'n creu pob gdarau honno.

Mwynhau'r app Ultimate Multisite newydd ac dewis ei. Ar gyfer ynddyfyn hwn, defnyddiwch y opsiwn Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Ar ôl ystafell cyntaf hon, dewiswch y cyfrifau sydd yn cael eu cysylltu â'r zap hon.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Mae hyn yn rhan fwyaf sensitif o'r proses yn llwyr. Mae angen i ni ddodyn y ffeiliau a dod o Google Forms gyda'r ffeiliau cyffredinol sydd angen i'r endpoint o regradd, felly fel y canlynol mewn sefyllfa uchod o'r ail ddefnyddiad hon.

Yn y مثال hwn, mae angen i ni gyflwyno'r username, email, cyfrifau, enw a URL y gwefan yn unig. Mae'r resus yn cael ei ddefnyddio wedi'i cyflwyno felly bydd pob newid a cael ei creu ar y Google Forms yn ddefnyddio'r model a statws yr un.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Yn ddefnyddio'r wybodaethau wedi'u setio, dod ar y gwsteliad o gwylio. Ar y blaenor bennaf gallwch weld pob field a fydd yn cael ei anfon i'r endpoint, y wybodaeth sydd yn ei gynnwys ac y fieldau sydd yn cael eu anfon yn ôl yn gwbl.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Gwylwch eich Zap newydd ac byddai'n gwblu'n llwyddiannus. Os oes unrhyw eros yn digwydd, gwylwch pob field a gweld os iddynt yn cael ei anfon yn dda. Oedd llawer o wybodaethau, gall rhywbethau fod yn cael eu gwach.

### Parametriau y endpoint cyfan {#complete-endpoint-parameters}

Dyma'r cyfarfod cyfan a pob posibilrwydd y fieldau sydd yn cael eu anfon.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // un o "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // un o "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
