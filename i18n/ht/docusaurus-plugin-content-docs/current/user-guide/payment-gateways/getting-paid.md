---
title: Jwenn Peyi
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# Kòman Peye (v2)

_**NOTE ENTRÈ:** Artikel sa a refere a Ultimate Multisite v2.x._

Ultimate Multisite gen yon sistèm manm ak faktirasyon ki vini avan l. Pou sistèm faktirasyon nou an ka fonksyone, nou te entegre pi komen pòt peman yo itilize nan e-commerce. Pòt peman deklan Ultimate Multisite yo se _Stripe_, _PayPal_, ak Peman Manèl (Manual Payment). Ou ka itilize _WooCommerce_, _GoCardless_ ak _Payfast_ tou pou resevwa peman lè ou enstale add-on ki koresponn ak yo.

## Règlaman Debaz (Basic Settings)

Ou ka configure nenpòt pòt peman sa yo anba chanjman faktirasyon Ultimate Multisite la. Ou ka jwenn li lè w ale nan **Ultimate Multisite menu > Settings > Payments.**

![Pagyan konfigirasyon peman nan Ultimate Multisite ki montre panèl Payments](/img/config/payments-settings-page.png)

Anvan ou mete ajou pòt peman ou, tanpri gade règlaman peman debaz ou ka configure:

**Force auto-rene w:** Sa ap asire ke peman an ap repete otomatikman nan fen chak sik faktirasyon selon frekans faktirasyon ki te chwazi itilizatè a.

<!-- Screenshot unavailable: Chanjman Force Auto-Renew sou pagyan konfigirasyon peman -->

Ultimate Multisite v2.13.0 ap kontwole si pòt ki aktif gen yon kredansyèl renouvèl ki ka itilize ankò anvan li kayte yon manm ki repete ak auto-renou k ap aktive. Yon kredansyèl renouvèl ka se abòn pòt, aktab faktirasyon, token vault ki te kayte, oswa metòd peman ki ka itilize ankò ki san yo pa gen okenn ekivalan. Si pòt la rapòte ke pa gen okenn kredansyèl ki ka itilize, Ultimate Multisite ap kayte manm nan menm jan sa a ap fè auto-renou la ap dekouvri epi li ap mete aksan sou eta "manch kredansyèl" pou yon administrateur oswa yon flwa sipò ka mande kliyan an re-authorize peman an anvan dat renouvèl la.

Sa sa a ede sa fè sa, nou anpeche yon manm (membership) parèt ke li ap rine otomatikman lè gateway la sèlman ka koleman paman ki fèt yon fwa. Add-ons pou gateway yo dwe konfime ke checkout ki rive souvan (recurring checkouts) estoke yon kredansyèl ki ka itilize ankò, sitou lè gateway la sipòte tou de modèl paman: capture yon fwa ak paman stokye/sòlisib (vaulted/subscription payment modes).

**Permet ensèyè san metòd paman:** Avèk opsyon sa a ki aktif, kliyan ou pa bezwen ajoute okenn enfòmasyon finansye pandan pwosesis reyegis la. Sa sèlman pral nesesè lè peryòd ensèyè a fini.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Vèsi faktura apre konfimasyon paman:** Sa bay ou opsyon pou w voye yon faktura oswa non apre paman an. Note ke itilizat yo ap gen aksè nan istorik paman yo sous dashboard subsite yo. Opsyon sa a pa aplike pou Gateway Manual la.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sistèm numè faktura:** La, ou ka chwazi yon kòd referans paman oswa yon sistèm nimewo ki gen sekans (sequential number scheme). Si ou chwazi pou w itilize yon kòd referans paman pou faktura ou yo, ou pa bezwen konfigire anyen. Si ou chwazi pou w itilize yon sistèm nimewo ki gen sekans, ou pral bezwen konfigire **nimewo faktura ankò** (Nimewo sa a ap itilize kòm nimewo faktura pou faktura ki pral jenere apre la sou sistèm nan. Li monte pa yon sèl chak fwa yon nou faktura ki kreye. Ou ka chanje li epi kayli l pou reponn nimewo sekans faktura a yon valè espesifik) ak **prefiks nimewo faktura**.

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Kote pou wè gateway yo:

Ou ka mete payment gateways sou menm paj la (**Ultimate Multisite > Settings > Payments**). Anba **active payment gateways**, ou pral gen vizib: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ak _Manual_.

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Nou gen yon artikel pou chak payment gateway ki pral gide ou nan etap mete l up, ou ka jwenn yo sou lyen anba a.

Ou ka wè epi edite detay paiement la:

![Payment edit interface](/img/admin/payment-edit.png)

Men yon vizyon konplè nan paj edisyon paiement la:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Men tou yon vizyon konplè de settings payment gateways yo:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Mete up Stripe gateway la**

**Mete up PayPal gateway la**** **

**Mete up manèl payments**

Kounye a, si ou vle itilize _WooCommerce_ , _GoCardless_ o _Payfast_ kòm payment gateway ou, ou pral bezwen **mete epi configure add-ons yo**.

### Kijan pou mete up WooCommerce add-on la:

Nou konprann ke _Stripe_ ak _PayPal_ pa disponib nan kèk peyi ki limite oswa bloke itilizat Ultimate Multisite pou itilize plugin nou an efektivman. Se poutèt sa nou te kreye yon add-on pou entegre _WooCommerce_, ki se yon plugin e-commerce trè popilè. Devlopè yo nan tout kote te kreye add-ons pou entegre diferan payment gateways ak li. Nou te itilize sa pou nou elaji payment gateways ou ka itilize ak sistèm faktir Ultimate Multisite la.

_**IMPORTANT:** Ultimate Multisite: Integrasyon akò ak WooCommerce mande ke WooCommerce dwe aktif deja sou sit prensipal ou._

Premye bagay la, tanpri ale nan paj "add-ons" (yon kalite zouti ki ajoute fonksyonalite). Ou ka jwenn li lè ou ale nan **Ultimate Multisite > Settings**. Ou pral wè tabèl **Add-ons** la. Klike sou **Check our Add-ons**.

<!-- Screenshot unavailable: Tabèl Add-ons sou sidebar Ultimate Multisite Settings ak liy Check our Add-ons -->

Malgre ou klike sou **Check our Add-ons**, ou pral dirije nan paj add-ons la. La, ou ka jwenn tout add-ons Ultimate Multisite yo. Klike sou add-on ki rele **Ultimate Multisite: WooCommerce Integration**.

![Paj add-ons ki ap lis tout add-ons Ultimate Multisite ki gen ladan WooCommerce Integration](/img/addons/addons-page.png)

Yon fenèt pral parèt ak detay add-on an. Sen jis klike sou **Install Now** (Instale Kounye).

<!-- Screenshot unavailable: Fenèt detay add-on Ultimate Multisite WooCommerce Integration ak bouton Install Now -->

Malgre enstalasyon an fini, ou pral dirije nan paj plugins la. La, sen jis klike sou **Network Activate** (Aktive Rezo), epi add-on WooCommerce a ap aktive sou rezo ou.

<!-- Screenshot unavailable: Paj plugins ak liy Network Activate pou add-on WooCommerce Integration -->

Malgre ou aktif li, si ou pa genyen tou pwofi WooCommerce ki active sou sit w la, ou pral jwenn yon raprimand.

<!-- Screenshot unavailable: Notis admin ki raprimande administrate a pou enstale epi aktive pwofi WooCommerce -->

Pou li plis sou add-on Integration WooCommerce, **klike kote sa**.

### Kijan pou enstale add-on GoCardless:

Etap pou mete l'add-on _GoCardless_ se prèske menm tankou l'add-on _WooCommerce_. Ale, ale nan paj add-ons la epi chwazi sou **Ultimate Multisite: GoCardless Gateway** add-on an.

<!-- Screenshot unavailable: Paj add-ons ak Ultimate Multisite GoCardless Gateway add-on ki mete aksan -->

Fenèt yon fenèt add-on ap parèt. Klike sou **Install Now**.

<!-- Screenshot unavailable: Dialog detay Ultimate Multisite GoCardless Gateway add-on ak bouton Install Now -->

Malgre enstalasyon an fini, ou pral redirekti nan paj plugins la. La, jis klike sou **Network Activate** epi l'add-on _GoCardless_ ap aktive sou rezo ou a.

<!-- Screenshot unavailable: Paj plugins ak link Network Activate pou GoCardless Gateway add-on -->

Pou aprann kijan pou kòmanse ak gateway _GoCardless_, **lis tèks sa a**.

### Kijan pou mete l'add-on Payfast:

Ale nan paj add-ons la epi chwazi sou **Ultimate Multisite: Payfast Gateway** add-on.

<!-- Screenshot unavailable: Paj add-ons ak Ultimate Multisite Payfast Gateway add-on ki mete aksan -->

Fenèt add-on ap parèt. Klike sou **Install Now**.

<!-- Screenshot unavailable: Dialog detay Ultimate Multisite Payfast Gateway add-on ak bouton Install Now -->

Malgre enstalasyon an fini, ou pral redirekti nan paj plugins la. La, jis klike sou **Network Activate** epi l'add-on _Payfast_ ap aktive sou rezo ou a.

<!-- Screenshot unavailable: Paj plugins ak link Network Activate pou Payfast Gateway add-on -->
