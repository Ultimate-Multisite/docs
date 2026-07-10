---
title: Modèl Sit
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**NOTE: Sa tèks sa a refere a Ultimate Multisite v2.x. Si ou ap itilize v1.x,**_ **gade tèks sa a.**_

N ap eseye fè yon rezo premium ak Ultimate Multisite la pou automate pi gwo pwosesis posib pandan nou bay kliyan nou fleksibilite ak diferan opsyon pou yo chwazi lè yo ap kreye sit entènèt yo. Yon fason fasil pou atvine balans sa a se itilize fonksyonalite Site Templates Ultimate Multisite la.

## Ki sa Site Template ye? {#what-is-a-site-template}

Kòm non li endike, yon Site Template se yon sit baz (boilerplate site) ki ka itilize kòm fondasyon lè ou ap kreye nouvo sit nan rezo w la.

Sa vle di ou ka kreye yon sit baz, aktive diferan plugin yo, mete yon thèm aktif, epi personalize l jan ou vle. Lè kliyan ou a ap kreye yon nouvo kont, anplis de jwenn yon sit WordPress defòt ki pa gen okenn kontni ki gen sans ladan l, li pral jwenn yon kopi sit baz ou a ak tout personalizasyon ak tout kontni yo deja mete la.

Sa sanble chwazi, men kijan mwen ka kreye yon nouvo Site Template? Li senp tankou sa ka rive.

## Kreye epi Edite yon nouvo Site Template {#creating-and-editing-a-new-site-template}

Site Templates se jis sit nòmal nan rezo ou a. Pou kreye yon nouvo template, ou ka senp ale **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Sa pral ouvri yon fenèt modal kote li ap mande **Site title (Tit sit la), Site Domain/path (Domèn/wout sit la),** ak **Site type (Tip sit la).** Anba chanjman drop-down pou **Site Type**, asire ou chwazi **Site Template**.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Ou ka ajoute yon deskripsyon ki destine kliyan an pou eksplike sa template a genyen:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Anwo an bas de bout nan fòm la, ou pral wè yon switch ki rele **Copy Site**. Sa ap pèmèt ou kreye yon nouvo site template baze sou yon site template ki egziste deja kòm pwen kòmanse pou ede w pwoteje tan ou olye pou ou kreye yon site template de zéro.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Personalize Kontni Yon Site Template {#customizing-the-contents-of-a-site-template}

Pou personalize site template ou a, senp ale nan panel dashboard li epi fè chanjman ou bezwen. Ou ka kreye nouvo posts, paj, aktive plugin yo epi chanje thèm aktif la. Ou menm ka ale nan Customizer la epi chanje tout kalite opsyon kustomizasyon.

![Site template edit interface](/img/config/site-template-edit.png)

Tout done sa a ap kopi lè yon kliyan kreye nouvo site ki baze sou Site Template sa a.

### Opsyon Avansé {#advanced-options}

Si ou konnen w gen kèk kòd koutim, ou ka itilize API Search and Replace nou an pou ranplase enfòmasyon otomatikman sou nouvo sit la apre li te kreye. Sa itil pou bagay tankou ranplase non konpayi sou paj About, ranplase imèl kontak sou paj Kontak, elatriye.

### Itilize Site Templates {#using-site-templates}

Ok, ou fin kreye anpil Site Template ki gen diferan konsepsyon, thèm ak chanjman. Kounye a, kijan pou w fè yo itil nan rezo ou?

Nan pati senp, gen de apwòch ou ka itilize kounye a (pa parèt ansanm):

  * Atache yon Site Template sou chak Plan ou genyen

**Oswa**

  * Kite kliyan ou chwazi site template yo tèm nan lè yo ap mete kont.

#### Mode 1: Asigne Site Template {#mode-1-assign-site-template}

Nan mod sa mode sa sa a, client yo pa t'ap chwazi yon template lè yo ap kreye kont yo, men ou se ki ou dwe defini ki template ki ta dwe itilize sou chak Plan ou genyen.

Pou fè sa, ou pral bezwen ale nan **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Sa ap mennen ou nan paj **Edit Product**. Anba seksyon **Product Options**, chèche onglet **Site template** epi chwazi opsyon **Assign Site Template** nan filye deroupan an. Sa pral montre lis tout site templates ki disponib e li pèmèt ou chwazi sèlman yon site template dedye pou pwodwi a.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Chwazi Site Template Disponib {#mode-2-choose-available-site-template}

Nan mode sa a, ou pral bay client yo chwa pandan pwosesis anrejistreman yo. Yo ap ka chwazi ant diferan site templates ou defini anba konfigirasyon pwodwi a. Ou gen opsyon pou limite site template yo ka chwazi anba pwodwi ki chwazi la. Sa pèmèt ou gen diferan gwoup site templates anba chak pwodwi, ki se ide pou mete aksan sou fonksyon ak karakteristik diferan pou yon pwodwi ki pi chè.

Sou sou la **Edit Product** page. Anba seksyon **Product Options**, chèche tab **Site template** epi selek la opsyon **Choose Available Site Template** nan fye drop-down la. Sa ap montre lis tout site templates ki disponib e li pral pèmèt ou selek site template ou vle pou li disponib. Ou ka fè sa lè ou chwazi konpòtman li: **Available** si ou vle site template a yo enkli nan lis la, _**Not Available**_ si ou vle site template a pa montre kòm yon opsyon, epi **Pre-selected** si ou vle youn nan site templates ki nan lis la vin seleksyon dekouvè.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Mode Defolte: Seleksyon site template sou fòm Checkout {#default-mode-site-template-selection-on-the-checkout-form}

Si ou vle tout site templates ou yo disponib pandan anrejistreman, oswa si ou pa renmen fè travay ekstra pou asigne oswa spesifye site templates anba chak pwodwi ou kreye. Lè sa a, ou ka senp mete seleksyon site template la anba **Checkout Form** ou. Pou fè sa, ale nan **Ultimate Multisite > Checkout Forms** epi klike sou **Edit** anba fòm ou vle configure a.

Sa ap montre paj **Edit Checkout Form**. Chèche fye **Template Selection** epi klike sou **Edit** anba li.

Yon fenèt modal ap parèt. Anba fye **Template Sites**, ou ka selek e lis tout site templates ou vle pou yo disponib pandan anrejistreman. Site templates ou spesifye de la pral disponib pa gen okenn pwodwi ki te chwazi pa itilizatè a.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Sou frontend, kliyan yo wè chwazi template pandan checkout epi yo ka chwazi konsepsyon kòmanse pou sit la nouvo yo.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opsyon Template Site {#site-template-options}

Gen kèk fonksyon opsyon sit ki ka disponib ou pou w kache oswa montre anba konfigirasyon Ultimate Multisite.

![Opsyon template sit nan konfigirasyon Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Lòp Pou Chanje Template (Allow Template Switching) {#allow-template-switching}

Lè ou active opsyon sa a, kliyan ou ap ka chanje template yo chwazi pandan pwosesis anrejistrasyon apre kont ak sit la te kreye. Sa a itil pou kliyan anpil paske li bay chans pou yo re-chwazi yon template si yo aprann nan lòt moman ke chwa orijinal la pa t'ap pi bon pou bezwen espesifik yo.

#### Lòp Pou Itilizat Yo itilize Sit yo kòm template (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Puis ke itilizat subsite yo pase tan ap bati ak konsepsyon sit yo, yo ka vle klone epi itilize li kòm youn nan opsyon template ki disponib lè ou ap kreye yon lòt subsite sou rezo ou a. Opsyon sa a pral pèmèt yo reyisi bagay sa a.

#### Kopye Media pandan Duplikasyon Template (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Lè ou kontwole opsyon sa a, li pral kopye media ki te telechaje sou sit template la nan sit ki te kreye la nouvo a. Sa ka chanje selon chak plan ou genyen.

#### **Prensipye pou Evite Moteur Rechèch yo Indexe Site Templates (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Site templates tankou sa nou diskite nan atik sa a se yon "boilerplate" men yo tou pèsi rezo ou, ki vle di yo tou reyèlman disponib pou motè rechèch yo jwenn. Opsyon sa a pral pèmèt ou ka kache site templates yo pou motè rechèch yo pa ka indexe yo.

## Pré-rempli Site Templates ak auto search-and-replace {#pre-populating-site-templates-with-auto-search-and-replace}

Yonn nan pi fèt Ultimate Multisite la se yon pati nan pi pwisan fonksyon li a: kapasite pou w ajoute tèks, koulè, ak chyen seleksyon nan fòm reyegisyan an. Lè nou jwenn done sa yo, nou ka itilize yo pou ranpli anvan kontni nan kèk pati nan template sit la ki chwazi a. Apre sa, lè nou ap pibliye sit la ki nouvo a, Ultimate Multisite pral ranplase plaslat yo ak enfòmasyon reyèl ki te antre pandan reyegisyan an.

Pou egzanp, si ou vle jwenn non konpayi itilizatè w la pandan reyegisyan an epi otomatikman mete non konpayi a sou paj kay la. Sou paj kay template sit ou an, ou bezwen ajoute plaslat yo, tankou nan imaj ki anba a (plaslat yo dwe antoure pa de curly brace - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Lè sa fini, ou ka senp ajoute yon chot reyegisyan ki koresponn ak li sou fòm checkout ou a pou w pran done sa a. Menm editeur fòm checkout ki itilize pou chwazi template la pèmèt ou mete chot koutim nan bò kote chwazi template a:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Kliyan ou an ap ka ranpli chot sa a pandan reyegisyan an.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite pral apre sa ranplase plaslat yo ak done ki te bay pa kliyan an otomatikman.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Rezoud pwoblèm "template plezi nan plaslat" {#solving-the-template-full-of-placeholders-problem}

Tout sa a se gran, men nou gen yon pwoblèm malgre: kounye a template sit nou yo - ki ka vizite pa kliyan nou an - plen ak plaslat malgre ki pa di anpil bagay.

Pou rezoud sa pwoblèm nan, nou ofri opsyon pou mete valè fasil (fake values) pou plasman yo, epi nou itilize valè sa a pou chèche ak ranplase kontni yo sou sit wot template pandan ke kliyan ou ap vizite.

Ou ka jwenn aksè nan editè plasman template an seksyon **Ultimate Multisite > Settings > Sites**, epi apre sa, sou sidebar la, klike sou lyen **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Sa ap mennen ou nan editè kontni plasman yo, kote ou ka ajoute plasman yo ak kontni ki koresponn ak yo.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
