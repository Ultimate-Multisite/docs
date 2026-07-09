---
title: Resevwa peman
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Resevwa Peman (v2) {#getting-paid-v2}

_**NÒT ENPÒTAN: Atik sa a fè referans ak Ultimate Multisite vèsyon 2.x.**_

Ultimate Multisite gen yon sistèm manm ak faktirasyon entegre. Pou sistèm faktirasyon nou an fonksyone, nou entegre passerelles peman ki pi komen yo itilize nan e-commerce. Passerelles peman pa defo nan Ultimate Multisite se _Stripe_ , _PayPal_ , ak Manual Payment. Ou kapab itilize tou _WooCommerce_ , _GoCardless_ ak _Payfast_ pou resevwa peman lè w enstale add-ons respektif yo.

## Paramèt Debaz {#basic-settings}

Ou kapab konfigire nenpòt nan passerelles peman sa yo anba paramèt peman Ultimate Multisite. Ou ka jwenn li lè w ale nan **meni Ultimate Multisite > Settings > Payments.**

![Paj paramèt peman nan Ultimate Multisite ki montre panèl Payments la](/img/config/payments-settings-page.png)

Anvan ou mete passerelle peman ou an kanpe, tanpri gade paramèt peman debaz ou kapab konfigire yo:

**Fòse renouvèlman oto** **matik:** Sa ap asire peman an ap repete otomatikman nan fen chak sik faktirasyon, selon frekans faktirasyon itilizatè a te chwazi a.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 verifye si passerelle aktif la gen yon idantifyan renouvèlman ki kapab reyitilize anvan li sove yon manm renouvlab ak renouvèlman otomatik aktive. Yon idantifyan renouvèlman kapab yon abònman passerelle, yon akò faktirasyon, yon token vault ki sove, oswa yon metòd peman ekivalan ki kapab reyitilize. Si passerelle la rapòte pa gen okenn idantifyan ki ka itilize, Ultimate Multisite sove manm nan men li fèmen renouvèlman otomatik epi li anrejistre eta idantifyan ki manke a pou yon administratè oswa yon pwosesis sipò kapab mande kliyan an re-otorize peman an anvan dat renouvèlman an.

Sa anpeche yon manm parèt tankou l ap renouvle otomatikman lè passerelle la kapab sèlman kolekte peman yon sèl fwa. Add-ons passerelle yo ta dwe konfime ke checkouts renouvlab yo estoke yon idantifyan ki kapab reyitilize, sitou lè passerelle la sipòte toude mòd peman kaptire yon sèl fwa ak mòd peman vaulted/abònman.

**Pèmèt esè san metòd** **peman:** Lè opsyon sa a aktive, kliyan ou a p ap bezwen ajoute okenn enfòmasyon finansye pandan pwosesis enskripsyon an. Sa ap vin obligatwa sèlman lè peryòd esè a ekspire.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Voye fakti lè peman konfime:** Sa ba ou yon opsyon pou w chwazi si ou vle voye yon fakti apre peman oswa non. Remake itilizatè yo ap gen aksè ak istorik peman yo anba dashboard subsite yo. Opsyon sa a pa aplike pou Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Konplo nimero fakti:** Isit la, ou kapab chwazi swa yon kòd referans peman oswa yon konplo nimewo sekansyèl. Si ou chwazi itilize yon kòd referans peman pou fakti ou yo, ou pa bezwen konfigire anyen. Si ou chwazi itilize yon konplo nimewo sekansyèl, w ap bezwen konfigire **pwochen nimewo fakti a** (Nimewo sa a ap itilize kòm nimewo fakti pou pwochen fakti ki jenere sou sistèm nan. Li ogmante pa youn chak fwa yo kreye yon nouvo fakti. Ou kapab chanje li epi sove li pou reyajiste nimewo sekansyèl fakti a ak yon valè espesifik) ak **prefiks nimewo fakti a.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Ki kote pou jwenn passerelles yo: {#where-to-find-the-gateways}

Ou kapab mete passerelles peman yo kanpe sou menm paj la ( **Ultimate Multisite > Settings > Payments**). Jis anba **passerelles peman aktif** , ou pral kapab wè: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ ak _Manual_.

![Seksyon Active Payment Gateways ki bay lis Stripe, Stripe Checkout, PayPal ak Manual](/img/config/payments-active-gateways.png)

Nou gen yon atik dedye pou chak passerelle peman ki pral gide ou atravè etap pou mete li kanpe; ou ka jwenn yo sou lyen ki anba yo.

Ou kapab wè epi modifye detay peman:

![Entèfas modifye peman](/img/admin/payment-edit.png)

Men yon vi konplè sou paj modifye peman an:

![Entèfas konplè modifye peman](/img/admin/payment-edit-full.png)

Men tou yon vi konplè sou paramèt passerelles peman yo:

![Paj konplè paramèt passerelles peman](/img/config/settings-payments-gateways-full.png)

**Mete passerelle Stripe la kanpe**

**Mete passerelle PayPal la kanpe**** **

**Mete peman manyèl yo kanpe**

Kounye a, si ou vle itilize _WooCommerce_ , _GoCardless_ oswa _Payfast_ kòm passerelle peman ou, w ap bezwen **enstale epi konfigire add-ons yo**.

### Ki jan pou enstale add-on WooCommerce la: {#how-to-install-the-woocommerce-add-on}

Nou konprann _Stripe_ ak _PayPal_ pa disponib nan kèk peyi, sa ki limite oswa anpeche itilizatè Ultimate Multisite yo itilize plugin nou an efektivman. Se poutèt sa nou te kreye yon add-on pou entegre _WooCommerce,_ ki se yon plugin e-commerce trè popilè. Devlopè toupatou nan mond lan te kreye add-ons pou entegre diferan passerelles peman ladan l. Nou te pwofite sa pou elaji passerelles peman ou kapab itilize ak sistèm faktirasyon Ultimate Multisite la.

_**ENPÒTAN:** Ultimate Multisite: WooCommerce Integration mande pou WooCommerce aktive omwen sou sit prensipal ou a._

Premyèman, tanpri ale nan paj add-ons la. Ou ka jwenn li lè w ale nan **Ultimate Multisite > Settings**. Ou ta dwe wè tablo **Add-ons** la. Klike sou **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Apre ou fin klike sou **Check our Add-ons** , y ap redirije ou sou paj add-ons la. Isit la ou kapab jwenn tout add-ons Ultimate Multisite yo. Klike sou add-on **Ultimate Multisite: WooCommerce Integration** lan.

![Paj add-ons ki bay lis add-ons Ultimate Multisite yo, tankou WooCommerce Integration](/img/addons/addons-page.png)

Yon fenèt ap parèt ak detay add-on nan. Jis klike sou **Enstale kounye a**.

<!-- Ekran pa disponib: dyalòg detay add-on Ultimate Multisite WooCommerce Integration ak bouton Enstale kounye a -->

Apre enstalasyon an fini, yo pral redirije w sou paj ekstansyon yo. Isit la, jis klike sou **Aktive sou rezo a** epi add-on WooCommerce la ap aktive sou rezo ou a.

<!-- Ekran pa disponib: Paj ekstansyon yo ak lyen Aktive sou rezo a pou add-on WooCommerce Integration la -->

Apre ou fin aktive li, si ou toujou pa gen ekstansyon WooCommerce la enstale ak aktive sou sit entènèt ou a, ou pral resevwa yon rapèl.

<!-- Ekran pa disponib: Avi admin ki raple administratè a pou enstale ak aktive ekstansyon WooCommerce la -->

Pou li plis sou add-on WooCommerce Integration la, **klike isit la**.

### Kijan pou enstale add-on GoCardless la: {#how-to-install-the-gocardless-add-on}

Etap pou enstale add-on _GoCardless_ la prèske menm ak add-on _WooCommerce_ la. Tanpri ale sou paj add-on yo epi chwazi add-on **Ultimate Multisite: GoCardless Gateway** la.

<!-- Ekran pa disponib: Paj add-on yo ak add-on Ultimate Multisite GoCardless Gateway la make -->

Fenèt add-on nan ap parèt. Klike sou **Enstale kounye a**.

<!-- Ekran pa disponib: Dyalòg detay add-on Ultimate Multisite GoCardless Gateway ak bouton Enstale kounye a -->

Apre enstalasyon an fini, yo pral redirije w sou paj ekstansyon yo. Isit la, jis klike sou **Aktive sou rezo a** epi add-on _GoCardless_ la ap aktive sou rezo ou a.

<!-- Ekran pa disponib: Paj ekstansyon yo ak lyen Aktive sou rezo a pou add-on GoCardless Gateway la -->

Pou aprann kijan pou kòmanse ak passerelle _GoCardless_ la, **li atik sa a**.

### Kijan pou enstale add-on Payfast la: {#how-to-install-the-payfast-add-on}

Ale sou paj add-on yo epi chwazi add-on **Ultimate Multisite: Payfast Gateway** la.

<!-- Ekran pa disponib: Paj add-on yo ak add-on Ultimate Multisite Payfast Gateway la make -->

Fenèt add-on nan ap parèt. Klike sou **Enstale kounye a.**

<!-- Ekran pa disponib: Dyalòg detay add-on Ultimate Multisite Payfast Gateway ak bouton Enstale kounye a -->

Apre enstalasyon an fini, yo pral redirije w sou paj ekstansyon yo. Isit la, jis klike sou **Aktive sou rezo a** epi add-on _Payfast_ la ap aktive sou rezo ou a.

<!-- Ekran pa disponib: Paj ekstansyon yo ak lyen Aktive sou rezo a pou add-on Payfast Gateway la -->
