---
title: Entegrasyon Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Konbine Ultimate Multisite ak Zapier

Nan yon tèks, nou te pale de [Webhooks](webhooks.md) e kijan yo ka itilize pou konekte ak aplikasyon ki pa nan sistèm ou an.

Itilize webhooks se yon ti bagay konplike paske li mande yon konpreyansyon avanse nan koding epi kapab chwazi (catch) payload yo. Itilize **Zapier** se yon fason pou w evite sa.

Zapier gen koneksyon ak plis pase 5000+ aplikasyon ki fè kominikasyon ant diferan aplikasyon pi fasil.

Ou ka kreye **Triggers** ki pral kòmanse lè nanvan evènman yo sou rezo ou a (pa egzanp yon kont ki krye epi li bay evènman `account_create`) oswa jenerasyon **Actions** sou rezo ou a ki reponn ak evènman eksteryè (pa egzanp kreye yon nouvo manm nan yon gwoup nan rezo Ultimate Multisite ou an).

Sa posib paske **Ultimate Multisite Zapier's triggers** ak actions yo fonksyone ak [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kijan pou kòmanse {#how-to-start}

Premye bagay, chèche Ultimate Multisite nan lis aplikasyon Zapier la. Oswa ou ka klike sou [li sa a](https://zapier.com/apps/wp-ultimo/integrations).

Ale nan dashboard ou epi pres bouton **+** **Create Zap** la sou bar an bò pou mete yon nouvo Zap.

![Zapier dashboard ak bouton Create Zap](/img/admin/webhooks-list.png)

Ou pral reoriyete nan paj kreyasyon Zap la.

Nan bok chèche a, tape "wp ultimo". Klike pou chwazi opsyon **Beta**.

![Chèche WP Ultimo nan lis aplikasyon Zapier](/img/admin/webhooks-list.png)

Malgre ou fin chwazi aplikasyon nou an, chwazi evènman ki disponib la: **New Ultimate Multisite Event**.

![Chwazi New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Kounye a nou bezwen bay Zapier aksè nan **rezo ou a**. Klike sou **Sign in** pral ouvri yon nouvo fenèt ki mande **API credentials** yo.

![Prompt de connexion Zapier pour les identifiants API](/img/admin/webhooks-list.png)

Ale gade nan panel admin rezo ou a epi ale nan **Ultimate Multisite > Settings** > **API & Webhooks** epi chèche seksyon API Settings la.

Chwazi opsyon **Enable API** paske li nesesè pou koneksyon sa a fonksyone.

![Paramètres API ak Webhooks ak options Enable API](/img/admin/settings-api-webhooks.png)

Sèch ikon **Copy to Clipboard** sou champs API Key ak API Secret epi kole valè yo sou ekran entegrasyon an.

Sou champ URL la, mete tout URL rezo ou a, ki genyen protocole li (HTTP o HTTPS).

![Écran intégration Zapier ak les champs API Key, Secret, et URL](/img/admin/webhooks-list.png)

Klike sou bouton **Yes, Continue** pou ale nan etap ankò. Si tout mache byen, ou pral resevwa kont ou ki konekte la! Klike pou **Continue** pou kreye yon nouvo trigger.

## Kijan pou kreye yon nouvo Trigger {#how-to-create-a-new-trigger}

Kounye ou gen kont ou konekte, ou ka wè evènman yo ki disponib. Ann chwazi evènman **payment_received** pou aprantis sa a.

![Chwazi evènman payment_received nan trigger Zapier](/img/admin/webhooks-list.png)

Yon fwa evènman an chwazi epi ou klike pou **continue**, yon **test step** ap parèt.

![Etap test Zapier pou trigger la](/img/admin/webhooks-list.png)

Nan etap sa a, Zapier pral teste si Zap ou ka **jwenn payload espesifik pou evènman sa a**. Pou evènman menm kalite nan lavni yo, enfòmasyon ki gen menm estrikti sa a ap voye.

![Test trigger Zapier konplèt siksè ak payload la](/img/admin/webhooks-list.png)

Nan nouvwa a test la **konplè a byen** epi li te retounen ekzanp enfòmasyon payload la. Enfòmasyon egzampiy sa a ap itil pou gide nou pandan nou kreye aksyon yo. Ou trigger ou anse a kounye a ki fèt epi li pare pou konekte ak lòt aplikasyon.

## Kijan pou kreye Actions {#how-to-create-actions}

Actions itilize enfòmasyon soti nan lòt triggers pou kreye nouvo entri nan rezo ou an.

Nan **kreye yon etap aksyon** ou ap chwazi Ultimate Multisite **Beta** la epi opsyon **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Nan etap ankò ou pral kreye autentifikasyon ou, menm jan nou te fè nan **How to start**, oswa chwazi yon autentifikasyon ki deja kreye. Nan tutorial sa a, nou ap chwazi menm autentifikasyon ki te kreye anvan.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Konfigire Aksyon an {#setting-up-the-action}

Sa se **etap prensipal aksyon an** epi la bagay yo yon ti jan diferan. Premye enfòmasyon ou ap chwazi se **Item**. Item se **modèl enfòmasyon** rezo ou a tankou **Customers, Payments, Sites, Emails** ak lòt bagay.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Lè w ap chwazi yon item, fòm nan pral **rearrange pou pote chak chot ki nesesè ak opsyonèl** pou item ou a chwazi a.

Pou egzanp, lè w ap chwazi item **Customer**, fòm yo pral pote tout sa ki nesesè pou ranpli pou kreye yon nouvo Customer nan rezo a.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Apou aprann tout chak chot ki mar **required** epi klike sou continue, yon dènye ekran ap montre ou chak chot ki ranpli ak chot ki rete san ranpli.

![Test d'action Zapier montrant des champs remplis et non remplis](/img/admin/webhooks-list.png)

Dès que ou fin ou wè ke test la reyisi, ou aksyon ou a configure. Li enpòtan tou pou ou kontwole sou rezo ou si l'élément te kreye ak test aksyon ou a.
