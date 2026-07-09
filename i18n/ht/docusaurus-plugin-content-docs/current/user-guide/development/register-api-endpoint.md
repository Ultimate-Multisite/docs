---
title: Enrejistre Pwòch API
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Le point de terminaison API d'Ultimate Multisite {#the-ultimate-multisite-register-api-endpoint}

Nan aprantisaj sa tèks la, ou pral aprann kijan pou w itilize le point de terminaison API Ultimate Multisite /register pou kreye tout pwosesis ansèpasyon (onboarding) pou yon nouvo kliyan nan rezo ou epi kijan pou fè sa ak Zapier.

Le point de terminaison sa a itilize metòd POST e li rele pa URL _**https://yoursite.com/wp-json/wu/v2/register**_. Nan apèl sa a, 4 pwosesis pral eseye nan rezo ou:

  * Yon nouvo itilizat WordPress oswa idantifikasyon li atravè ID itilizat la pral kreye.

  * Yon nouvo Kliyan nan Ultimate Multisite oswa idantifikasyon li atravè ID kliyan la pral kreye.

  * Yon nouvo sit sou rezo WordPress la pral kreye.

  * Nan fen an, yon nouvo Manman (Membership) nan Ultimate Multisite pral kreye.

Pou pwosesis sa a, ou pral bezwen kredansyèl API ou yo. Pou jwenn yo, ale nan panel admin rezo ou, navige nan **Ultimate Multisite > Settings** > **API & Webhooks**, epi chèche seksyon API Settings la.

![Seksyon API Settings nan Ultimate Multisite](/img/config/settings-api.png)

Men yon gade konplè sou paj API settings la:

![Paj API settings konplè](/img/config/settings-api-full.png)

Chwazi **Enable API** epi jwenn kredansyèl API ou yo.

Kounye a, ann eksplore point de terminaison an epi kreye yon aksyon registrasyon nan Zapier.

## Paramèt bodi point de terminaison an {#endpoint-body-parameters}

Ann fè yon gade sou enfòmasyon minimum nou bezwen voye bay point de terminaison an. Nan fen atik sa a, ou pral jwenn apèl konplè a.

### Kliyan (Customer) {#customer}

Sa se enfòmasyon ki nesesè pou pwosesis kreye Itilizat la ak Kliyan Ultimate Multisite a:

"customer_id" : integer

È posib pour voye l'ID client ki te kreye nan rezo ou la. Si ou pa soumèt li, enfòmasyon ki anba a ap itilize pou kreye yon nouvo kliyan ak yon nouvo jwè WordPress. Ou ka voye ID jwè a menm jan ak ID kliyan an.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membresyè** {#membership}

Sèl enfòmasyon nou bezwen nan objekt sa a se Statut Membresyè.

"membership" { "status" : "string", // youn nan "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Pwodwi** {#products}

Pwodwi yo bay yon array ki gen 1 oki plis ID pwofi nan rezo ou la. Pran atansyon, endpoint sa a pa kreye pwofi. Tcheke dokiman Ultimate Multisite pou w konprann pi byen endpoint kreyasyon pwofi a.

**"products" : [1,2],**

### Peman {#payment}

Tankou ak Membresyè, nou sèlman bezwen estatistik la.

**"payment" { "status" : "string", // youn nan "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sit {#site}

E pou fè kò a fini, nou bezwen URL sit la ak Tit la, toude yo nan objekt Site a.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Retounen endpoint register la ap gen yon array ki gen enfòmasyon membresyè ki te kreye a.

## Kreye yon aksyon nan Zapier {#creating-an-action-in-zapier}

Avèk lansman endpoint nouvo ak pi fò sa pou kreye kont ou, ou pral jwenn yon nouvo aksyon nan Zapier tou.

Ou konnen kijan pou w itilize epi pran plezi tout sa nouvo vèsyon Zapier la of pase? Aprann plis isit. (link?)

### Kreye yon aksyon {#creating-an-action}

Pou montre pi byen kijan pou w itilize registration endpoint ak Zapier, nou pral kreye yon entegrasyon ak Google Forms. Chak fwa ou ranpli fòm sa a epi enfòmasyon an konserve nan lèt repons fòm la, yon nouvo manm (membership) ap kreye nan rezo Ultimate Multisite.

Nan Google Forms, fè yon fòm ki gen reyalizasyon ki nesesè pou kreye yon nouvo manm nan rezo a.

<!-- Screenshot indisponible: Fòm Google Forms ak chèf pou kreye yon nouvo manm -->

Kounye a nan Zapier, kreye yon nouvo Zap epi konekte fòm ki te kreye a nan Google atravè feuille (spreadsheet) kote done yo konserve.

<!-- Screenshot indisponible: Konfigirasyon trigger Zapier konekte ak feuille Google Forms -->

Fini! Fòm Google Forms la konekte ak Zapier e pare pou entegre ak rezo a. Kounye a, nou pral pase nan Aksyon (Action) ki pral rive apre Trigger sa a k ap aktive chak fwa li ranpli.

Chèche aplikasyon Ultimate Multisite la epi chwazi l. Pou kalite Zap sa a, chwazi opsyon Register.

<!-- Screenshot indisponible: Chwazi aksyon Zapier montre aplikasyon Ultimate Multisite ak opsyon Register -->

Aprè etap premye sa a, chwazi kont (account) ki pral konekte ak Zap sa a.<!-- Screenshot indisponible: Etap koneksyon kont Zapier pou Ultimate Multisite -->

Sa se pati ki pi santi l nan tout pwosesis la. Nou bezwen mete aksyon yo ki soti nan Google Forms yo koresponn ak reyalizasyon ki nesesè pou endpoint register la, jan montre nan seksyon anvan an nan atik sa a.

Nan egzanp sa a, nou sèlman bezwen configure non itilizatè (username), imèl (email), pawòl (password), non (name) ak URL sit entènèt la. Rès la deja detèmine pou tout manm ki jene yo nan Google Forms sa a swiv menm patat ak status la.

<!-- Screenshot indisponible: Mappage de champ Zapier entre Google Forms et le point de terminaison d'enregistrement Ultimate Multisite -->

Une fois que vous avez configuré les informations, passez au test final. Sur la dernière écran, vous verrez tous les champs qui seront envoyés au endpoint, leurs informations respectives et les champs qui seront envoyés vides.<!-- Screenshot indisponible: Écran de test Zapier montrant tous les champs à envoyer au point de terminaison d'enregistrement -->

Testez votre nouveau Zap et il devrait se terminer avec succès. Si une erreur survient, vérifiez tous les champs et voyez s'ils sont envoyés correctement. Comme il y a beaucoup d'informations, certaines choses peuvent passer inaperçues.

### Paramètres complets de l'endpoint {#complete-endpoint-parameters}

Voici l'appel complet et toutes les possibilités de champs qui peuvent être envoyés.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // l'un des suivants : "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // l'un des suivants : "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
