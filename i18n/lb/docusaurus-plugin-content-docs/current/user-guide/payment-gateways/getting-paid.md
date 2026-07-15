---
title: Bezuelt ginn
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Bezuelt ginn (v2)

_**WICHTEG NOTIZ: Dësen Artikel bezitt sech op Ultimate Multisite Versioun 2.x.**_

Ultimate Multisite huet en agebaute Memberschafts- a Rechnungssystem. Fir datt eise Rechnungssystem funktionéiert, hu mir déi heefegst Bezuel-Gateways integréiert, déi am E-Commerce benotzt ginn. Déi standardméisseg Bezuel-Gateways an Ultimate Multisite sinn _Stripe_ , _PayPal_ , a manuell Bezuelung. Dir kënnt och _WooCommerce_ , _GoCardless_ an _Payfast_ benotzen, fir Bezuelungen ze kréien, andeems Dir hir jeeweileg Add-ons installéiert.

## Basis-Astellungen {#basic-settings}

Dir kënnt all dës Bezuel-Gateways ënner de Bezuel-Astellunge vun Ultimate Multisite konfiguréieren. Dir fannt se iwwer **Ultimate Multisite Menü > Astellungen > Bezuelungen.**

![Bezuel-Astellungssäit an Ultimate Multisite, déi de Bezuelunge-Panel weist](/img/config/payments-settings-page.png)

Ier Dir Äre Bezuel-Gateway ariicht, kuckt wgl. op déi Basis-Bezuel-Astellungen, déi Dir konfiguréiere kënnt:

**Auto-Erneierun** **g erzwingen:** Dëst suergt dofir, datt d'Bezuelung um Enn vun all Rechnungszyklus automatesch widderholl gëtt, ofhängeg vun der Rechnungsfrequenz, déi de Benotzer ausgewielt huet.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontrolléiert, ob den aktive Gateway eng wiederverwendbar Erneierungs-Umeldungsinformatioun huet, ier eng widderhuelend Memberschaft mat ageschalter Auto-Erneierung gespäichert gëtt. Eng Erneierungs-Umeldungsinformatioun kann e Gateway-Abonnement, eng Rechnungsaccord, e gespäicherten Vault-Token oder eng gläichwäerteg wiederverwendbar Bezuelmethod sinn. Wann de Gateway mellt, datt keng benotzbar Umeldungsinformatioun existéiert, späichert Ultimate Multisite d'Memberschaft, schalt awer d'Auto-Erneierung aus a späichert de Status vun der feelender Umeldungsinformatioun, sou datt en Administrateur oder Support-Ablaf de Client froe kann, d'Bezuelung virum Erneierungsdatum nei ze autoriséieren.

Dëst verhënnert, datt eng Memberschaft esou ausgesäit, wéi wann se sech automatesch erneiert, wann de Gateway nëmmen eemoleg Bezuelungen asammele kann. Gateway-Add-ons solle bestätegen, datt widderhuelend Checkouts eng wiederverwendbar Umeldungsinformatioun späicheren, besonnesch wann de Gateway souwuel eemoleg Erfaassung wéi och Vault-/Abonnement-Bezuelmodi ënnerstëtzt.

**Testphasen ouni Bezuel** **method erlaben:** Mat dëser Optioun ageschalt muss Äre Client keng finanziell Informatiounen am Registréierungsprozess derbäisetzen. Dëst gëtt eréischt erfuerderlech, wann d'Testperiod ofleeft.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Rechnung bei Bezuelbestätegung schécken:** Dëst gëtt Iech eng Optioun, ob eng Rechnung no der Bezuelung geschéckt soll ginn oder net. Beuecht, datt Benotzer Zougang zu hirer Bezuelgeschicht ënner hirem Subsite-Dashboard hunn. Dës Optioun gëllt net fir de manuelle Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Rechnungsnummeréierungsschema:** Hei kënnt Dir entweder e Bezuel-Referenzcode oder e sequentiellt Nummeréierungsschema auswielen. Wann Dir e Bezuel-Referenzcode fir Är Rechnunge benotze wëllt, musst Dir näischt konfiguréieren. Wann Dir e sequentiellt Nummeréierungsschema benotze wëllt, musst Dir déi **nächst Rechnungsnummer** konfiguréieren (Dës Nummer gëtt als Rechnungsnummer fir déi nächst Rechnung benotzt, déi am System generéiert gëtt. Si gëtt all Kéier ëm een erhéicht, wann eng nei Rechnung erstallt gëtt. Dir kënnt se änneren a späicheren, fir déi sequentiell Rechnungsnummer op e bestëmmte Wäert zréckzesetzen) an de **Rechnungsnummer-Prefix.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Wou d'Gateways ze fannen sinn: {#where-to-find-the-gateways}

Dir kënnt d'Bezuel-Gateways op där selwechter Säit ariichten ( **Ultimate Multisite > Settings > Payments**). Direkt ënner **aktive Bezuel-Gateways** , kënnt Dir gesinn: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ an _Manuell_.

![Sektioun aktiv Bezuel-Gateways mat Stripe, Stripe Checkout, PayPal a Manuell](/img/config/payments-active-gateways.png)

Mir hunn en dedizéierten Artikel fir all Bezuel-Gateway, deen Iech duerch d'Schrëtt vun der Ariichtung féiert; Dir fannt se iwwer d'Links hei ënnen.

Dir kënnt Bezuelungsdetailer ukucken an änneren:

![Bezuelungs-Beaarbechtungsinterface](/img/admin/payment-edit.png)

Hei ass eng voll Vue vun der Bezuelungs-Beaarbechtungssäit:

![Voll Bezuelungs-Beaarbechtungsinterface](/img/admin/payment-edit-full.png)

Hei ass och eng voll Vue vun de Bezuel-Gateway-Astellungen:

![Voll Säit mat Bezuel-Gateway-Astellungen](/img/config/settings-payments-gateways-full.png)

**De Stripe-Gateway ariichten**

**De PayPal-Gateway ariichten**** **

**Manuell Bezuelungen ariichten**

Elo, wann Dir _WooCommerce_ , _GoCardless_ oder _Payfast_ als Äre Bezuel-Gateway benotze wëllt, musst Dir **hir Add-ons installéieren a konfiguréieren**.

### Wéi een de WooCommerce-Add-on installéiert: {#how-to-install-the-woocommerce-add-on}

Mir verstinn, datt _Stripe_ an _PayPal_ a verschiddene Länner net verfügbar sinn, wat Ultimate Multisite-Benotzer limitéiert oder drun hënnert, eise Plugin effektiv ze benotzen. Dofir hu mir en Add-on erstallt, fir _WooCommerce,_ z'integréieren, wat e ganz populäre E-Commerce-Plugin ass. Entwéckler ronderëm d'Welt hunn Add-ons erstallt, fir verschidde Bezuel-Gateways domat z'integréieren. Mir hunn dëst genotzt, fir d'Bezuel-Gateways ze erweideren, déi Dir mam Rechnungssystem vun Ultimate Multisite benotze kënnt.

_**WICHTEG:** Ultimate Multisite: WooCommerce Integration erfuerdert, datt WooCommerce op d'mannst op Ärem Haaptsite aktivéiert ass._

Gitt als éischt wgl. op d'Add-ons-Säit. Dir fannt se iwwer **Ultimate Multisite > Settings**. Dir sollt d'Tabell **Add-ons** gesinn. Klickt op **Eis Add-ons kucken**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nodeems Dir op **Eis Add-ons kucken** geklickt hutt, gitt Dir op d'Add-ons-Säit weidergeleet. Hei fannt Dir all Ultimate Multisite-Add-ons. Klickt op den Add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons-Säit mat Ultimate Multisite-Add-ons inklusiv WooCommerce Integration](/img/addons/addons-page.png)

Eng Fënster mat den Detailer vun der Erweiderung geet op. Klickt einfach op **Elo installéieren**.

<!-- Screenshot net verfügbar: Dialog mat Detailer vun der Ultimate Multisite WooCommerce Integration-Erweiderung mat Elo installéieren-Knäppchen -->

Nodeems d’Installatioun fäerdeg ass, gitt Dir op d’Erweiderungs-Säit weidergeleet. Hei klickt einfach op **Am Netzwierk aktivéieren** an d’WooCommerce-Erweiderung gëtt op Ärem Netzwierk aktivéiert.

<!-- Screenshot net verfügbar: Erweiderungs-Säit mam Am Netzwierk aktivéieren-Link fir d’WooCommerce Integration-Erweiderung -->

Nodeems se aktivéiert ass, wann Dir d’WooCommerce-Erweiderung nach ëmmer net op Ärer Websäit installéiert an aktivéiert hutt, kritt Dir eng Erënnerung.

<!-- Screenshot net verfügbar: Admin-Hinweis deen den Administrateur drun erënnert, d’WooCommerce-Erweiderung ze installéieren an ze aktivéieren -->

Fir méi iwwer d’WooCommerce Integration-Erweiderung ze liesen, **klickt hei**.

### Wéi installéiert een d’GoCardless-Erweiderung: {#how-to-install-the-gocardless-add-on}

D’Schrëtt fir d’_GoCardless_-Erweiderung z’installéieren, si bal déiselwecht wéi bei der _WooCommerce_-Erweiderung. Gitt wgl. op d’Erweiderungs-Säit a wielt d’**Ultimate Multisite: GoCardless Gateway**-Erweiderung aus.

<!-- Screenshot net verfügbar: Erweiderungs-Säit mat markéierter Ultimate Multisite GoCardless Gateway-Erweiderung -->

D’Fënster vun der Erweiderung geet op. Klickt op **Elo installéieren**.

<!-- Screenshot net verfügbar: Dialog mat Detailer vun der Ultimate Multisite GoCardless Gateway-Erweiderung mat Elo installéieren-Knäppchen -->

Nodeems d’Installatioun fäerdeg ass, gitt Dir op d’Erweiderungs-Säit weidergeleet. Hei klickt einfach op **Am Netzwierk aktivéieren** an d’_GoCardless_-Erweiderung gëtt op Ärem Netzwierk aktivéiert.

<!-- Screenshot net verfügbar: Erweiderungs-Säit mam Am Netzwierk aktivéieren-Link fir d’GoCardless Gateway-Erweiderung -->

Fir ze léieren, wéi Dir mam _GoCardless_-Gateway ufänkt, **liest dësen Artikel**.

### Wéi installéiert een d’Payfast-Erweiderung: {#how-to-install-the-payfast-add-on}

Gitt op d’Erweiderungs-Säit a wielt d’**Ultimate Multisite: Payfast Gateway**-Erweiderung aus.

<!-- Screenshot net verfügbar: Erweiderungs-Säit mat markéierter Ultimate Multisite Payfast Gateway-Erweiderung -->

D’Fënster vun der Erweiderung geet op. Klickt op **Elo installéieren.**

<!-- Screenshot net verfügbar: Dialog mat Detailer vun der Ultimate Multisite Payfast Gateway-Erweiderung mat Elo installéieren-Knäppchen -->

Nodeems d’Installatioun fäerdeg ass, gitt Dir op d’Erweiderungs-Säit weidergeleet. Hei klickt einfach op **Am Netzwierk aktivéieren** an d’_Payfast_-Erweiderung gëtt op Ärem Netzwierk aktivéiert.

<!-- Screenshot net verfügbar: Erweiderungs-Säit mam Am Netzwierk aktivéieren-Link fir d’Payfast Gateway-Erweiderung -->
