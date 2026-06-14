---
title: Paj Kont Kliyan
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Pagyan Akontman Kliyan Ou (v2)

_**NOTE KRITIK: Sa tèks sa a se refere a Ultimate Multisite v2.x.**_

Lè kliyan yo abone yon plan sou rezo ou an, yo jwenn aksè nan yon sit entènèt ak dashboard li ki gen enfòmasyon enpòtan konsènan paman yo, manmship yo, domèn yo, limitasyon plan yo, elatriye...

Nan tèmisyèl sa a, nou pral gide ou atravè paj kont kliyan an epi ou pral wè sa kliyan ou ka wè ak fè la.

## Paj Kont La

Paj kont la rive jwenn li lè ou klike sou **Account** nan dashboard kliyan ou an.

![Menyu Kont nan dashboard kliyan](/img/account-page/account-menu.png)

Sou rezo tenant soberen, Ultimate Multisite v2.13.0 kenbe eksperyans jere kliyan sa a sou sit prensipal la. Si yon kliyan louvri kont, checkout, faktura (billing), faktura (invoice), jere sit la (site-management), chanje template, oswa map domèn soti nan yon tenant soberen, aksyon yo ap retounen nan panel kliyan sit prensipal la pou rekòt paman ak manmship rezo a rete otorize.

Lè kliyan an rive soti nan yon tenant soberen, panel kliyan sit prensipal la ka gen yon lyen retou ki pote li ankò sou sit tenant la. Lyen retou sa a montre sèlman lè Ultimate Multisite ka valide objektif retou a kòm youn nan sit kliyan yo, sa ki anpeche redireksyon arbitré pandan nou kenbe travay tenant la.

![Ganon kont kliyan](/img/account-page/overview.png)

Lè yon kliyan klike sou li, yo pral wè yon ganon sou manmship yo, adrès faktura (billing address), faktura yo, domèn yo, limitasyon sit la, epi yo ap ka chanje **Site Template** la (si sa pèmèt nan rezo ou an).

Yo ka tou chanje manmship yo pou yon lòt plan, oswa achte yon lòt pake oswa sèvis ou ofri. Ann gade chak seksyon sepilman.

### Aperçu de votre adhésion :

Le premier bloc juste en dessous du nom du site de vos clients montre un aperçu de leur plan actuel et des services/forfaits qu'ils ont achetés avec celui-ci. Ce bloc affiche aussi le numéro d'adhésion, le montant initial payé pour celle-ci, combien coûte le plan et tout service/forfait, et combien de fois cette adhésion a été facturée. Ils peuvent aussi voir si l'adhésion est **Active**, **Expirée** ou **Annulée**.

![Aperçu de l'adhésion montrant le plan, le montant et les détails de facturation](/img/account-page/membership-card.png)

Juste en dessous de ce bloc, vos clients peuvent voir les blocs **À Propos de Ce Site** et **Limites du Site**. Ces blocs leur montrent toutes les limitations qui accompagnent leur plan : espace disque, articles (posts), pages, visites, etc... Ces limites peuvent être configurées sur chaque page de plan dans **Ultimate Multisite > Products**.

![Blocs À Propos de Ce Site et Limites du Site montrant les limitations du plan](/img/account-page/site-limits.png)

Sur le côté droit de **Votre Adhésion**, les clients peuvent cliquer sur **Changer**. Cela leur montrera tous les plans et forfaits/services disponibles. S'ils choisissent un autre plan, les limitations pour ce nouveau plan prendront la place des limitations actuelles de l'adhésion – peu importe s'ils passent à un niveau inférieur ou supérieur.

Maintenant, si vos clients choisissent d'acheter des forfaits ou des services pour cette adhésion actuelle – comme plus d'espace disque ou de visites – l'adhésion actuelle ne sera pas changée, mais seulement les nouveaux forfaits seront ajoutés à elle.

Notez que vous ne pouvez pas ajouter de codes de réduction sur cette page de changement d'adhésion. Si le client a utilisé un code de réduction lors du premier achat de l'adhésion, ce code s'appliquera aussi à cette nouvelle adhésion.

### Mettre à jour l'adresse de facturation :

Souvan pa paj page compte la, nou ka fè kliyan ou yo chanje adrès faktura yo tou. Yo sèlman bezwen klike sou **Update** ki bò _Billing Address_ la.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Yon fenèt nouvo ap parèt pou kliyan ou a. Tout sa li bezwen fè se ranpli adrès nouvo a epi klike sou _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Chanje Site Template la:

Pou pèmèt kliyan ou yo chanje site template yo, ou dwe ale nan **Ultimate Multisite > Settings > Sites** epi klike sou opsyon **Allow Template Switching**.

A tou, sou **Ultimate Multisite > Products**, chwazi plan ou yo epi ale nan tab **Site Templates**. Asire w ke opsyon **Allow Site Templates** la ap on (on), epi sou **Site Template Selection Mode**, chwazi opsyon **Choose Available Site Templates**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Ou pral gen kapasite pou w wè tout site template ki disponib sou sit ou an. Chwazi sa yo ou vle fè yo disponib epi sa yo ou pa vle kliyan ki abone sous plan sa a ka wè. Note ke opsyon sa yo tou afekte fòm checkout la, donk nenpòt template ki chwazi kòm **Not Available** pa pral parèt sou paj reyegis la pou plan sa a.

Kounye a, kliyan ou yo ka klike sou **Change Site Template** nan page compte yo.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 montre yon panel chanje template ki rekonseye. Panel la kòmanse ak yon **current-template card** pou kliyan yo ka wè ki template a aktif anvan yo chwazi yon bagay ki ranplase li.

Yon gril ki genyen sit template disponib rete wè pandan ke kliyan yo ap egzamine opsyon yo. Sa ede yo konpare sit template ki pèmèt pou plan yo san yo pa pèdi lajan sou sa k ap chwazi kounye a.

![List sit template disponib pou plan an](/img/config/site-templates-list.png)

Malgre ke yo chwazi sa yo vle chanje, yo ap mande yo konfime chanjman an.

![Dialog konfime chanje sit template](/img/account-page/template-switch-confirm.png)

Malgre ke ou klike sou confirmation epi klike pou **Process Switch**, sit template ki nouvo a pral itilize sou sit kliyan ou an.

Kliyan yo ka itilize tou **Reset current template** soti nan panel sa a lè yo bezwen retounen sit la ba template ki te chwazi a kounye a. Tankou chanje pou yon lòt template, reponn yon template ka ap ekri sou kontni sit la, konsa kliyan yo sèlman dwe konfime li lè yo konprann aksyon reset la.

### Ajoute Domèn Koutim:

Kliyan ou yo gen opsyon ajoute domèn koutim pou plan sa a sou paj kont yo. Pou pèmèt kliyan ou yo itilize domèn koutim, ale nan **Ultimate Multisite > Settings >** **Domain Mapping**.

Aktive opsyon an **Enable Domain Mapping**. Sa ap pèmèt kliyan ou yo itilize domèn koutim sou nivo rezo a.

Pa bliye tou pou w kontwole si domain mapping la aktif sou baz pwodwi yo - paske ou ka limite yon pwodwi pou pa pèmèt kliyan ou yo itilize domèn koutim.

Ale nan **Ultimate Multisite > Products**. Chwazi plan ou a epi ale nan tab **Custom Domains**. Aktive opsyon an **Allow Custom Domains**.

![Tab Custom Domains ak toggle Allow Custom Domains](/img/config/product-custom-domains.png)

Sa sa a deja abonne ak plan espesifik sa sa a, tout client yo ka itilize custom domain. Kounye, sou paj Account la, nouvo kiyès ka ajoute yon custom domain lè yo klike sou **Add Domain**.

![Bouton Add Domain sou paj account](/img/account-page/add-domain-button.png)

Premye fenèt ki louvri a pral montre tout client ou yon mesaj ki direksyon kijan pou yo mete aksyon DNS yo pou fè custom domain sa a fonksyone sou rezo ou.

![Enstriksyon DNS montre lè w ajoute yon custom domain](/img/account-page/add-domain-dns.png)

Mesaj sa a ka edite (pa nou) sou **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Sèti Add New Domain Instructions nan Domain Mapping](/img/config/settings-domain-mapping.png)

Men yon vizyon konplè nan paj configuration domain mapping la:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Apou apre klike sou **Next Step**, tout client yo ka ajoute non custom domain yo epi chwazi si custom domain sa a pral pi prensipal la. Note ke tout client ou ka itilize plis pase yon sèl custom domain pou sit entènèt yo, kidonk yo ka chwazi ki moun ki pral pi prensipal la.

![Entri non custom domain ak opsyon domain prensipal](/img/account-page/add-domain-primary.png)

Apou apre klike sou **Add Domain**, domain sa a ap ajoute nan kont tout client ou an. Tout sa yo bezwen fè kounye se chanje aksyon DNS custom domain sa a sou registran domain yo.

### Chanje Pawòl:

Nan dashboard account la, tout client yo ka chanje pawòl yo tou lè yo klike sou **Change Password**.

![Bouton Change Password sou paj account](/img/account-page/change-password-button.png)

Sa a wè sa la pral montre yon nouvo fenèt kote kliyan ou yo ap bezwen antre pwòp mot de klavye yo epi apre sa antre nouvo mot de klavye ki vle itilize.

![Form chanje mot ak champs pou mot de klavye ki genyen ak nouvo mot de klavye](/img/account-page/change-password-form.png)

### Zòn Danje:

Nou gen de opsyon ki montre nan pati **Danger Zone** la: **Delete Site** (Sè Site a) ak **Delete Account** (Sè Kont la). Yo tou de nan zòn danje paske de aksyon sa yo pa ka geri. Si kliyan ou yo delete sit entènèt yo oswa kont yo, yo pa ka retounen yo ankò.

![Danger Zone ak opsyon Delete Site ak Delete Account](/img/account-page/danger-zone.png)

Si kliyan ou yo klike sou nenpòt nan de opsyon sa yo, yo pral montre yon fenèt kote yo ap bezwen active opsyon pou retire sit entènèt la oswa kont la epi yo pral bay avèt ke aksyon sa a pa ka geri.

![Fenèt konfime Delete Site](/img/account-page/delete-site-confirm.png)

![Fenèt konfime Delete Account](/img/account-page/delete-account-confirm.png)

Si yo delete sit entènèt la, kont ak manmship yo ap rete san chanjman. Yo jis pral pèdi tout kontni sou sit entènèt yo. Si yo delete kont yo, tout sit entènèt yo, tout manmship yo epi enfòmasyon ki gen rapò ak kont sa a ap pèdi.
