---
title: Manuell Bezuelungen ariichten
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manuell Bezuelungen ariichten (v2)

_**WICHTEGEN HINWEIS: Dësen Artikel bezitt sech op Ultimate Multisite Versioun 2.x.**_

Manuell Bezuelunge sinn eng Méiglechkeet, fir aner Bezuelmethoden unzebidden, falls **Stripe** oder **PayPal** fir Är Benotzer net verfügbar sinn. Et kann eng Iwwerweisung oder Bankiwwerweisung sinn oder all aner Bezuelmethod, déi lokal fir Är Benotzer verfügbar ass.

## Wéi een Manuell Bezuelungen aktivéiert

Eng manuell Bezuelung ariichten ass ganz einfach. Dir musst se just ënner de Bezuel-Gateways aktivéieren an detailléiert Instruktiounen aginn, wéi de Benotzer d'Bezuelung schécke soll.

Gitt als éischt op **Ultimate Multisite > Settings > Payments**. Ënner **Payment Gateways** , schalt **Manual** un. Dir gesitt, datt eng **Payment Instructions**-Këscht fir Iech ugewise gëtt.

Füügt an dës Këscht d'Informatiounen derbäi, déi Äre Client brauch, fir d'Bezuelung ze maachen. Dat kënnen zum Beispill Är Bankkontodetailer an Är E-Mail sinn, sou datt de Client Iech d'Bezuelungsbestätegung schécke kann.

![Manuell Bezuel-Gateway-Schalter mat Payment Instructions-Textberäich](/img/config/manual-gateway-expanded.png)

Hei ass d'Astellungs-Interface vum manuelle Gateway:

![Astellunge vum manuelle Gateway](/img/config/manual-gateway-settings.png)

Nodeems Dir et ageriicht hutt, klickt einfach op **Save Settings** an et ass fäerdeg. Wann d'Benotzer sech an Ärem Netzwierk registréieren, gesi si e Message, deen hinne seet, datt si Är Instruktioune kréien, fir de Kaf ofzeschléissen.

![Registréierungsbestätegungsmessage, deen dem Benotzer seet, datt hie Bezuelinstruktioune kritt](/img/frontend/registration-manual-notice.png)

A si kréien och e Message op Ärer **Thank You**-Säit mat Äre Bezuelinstruktiounen.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manuell Bezuelunge bestätegen

Fir eng manuell Bezuelung ze bestätegen, gitt op de **Payments**-Menü an der lénkser Leesch. Do kënnt Dir all d'Bezuelungen an Ärem Netzwierk an hir Detailer gesinn, inklusiv hirem **Status**. Eng manuell Bezuelung huet ëmmer de Status **Pending**, bis Dir en manuell ännert.

![Bezuelungslëscht mat enger pending manueller Bezuelung](/img/admin/payments-list.png)

Gitt op d'Bezuelungssäit, andeems Dir op de **Referenzcode** klickt. Op dëser Säit hutt Dir all d'Detailer vun der pending Bezuelung, wéi Referenz-ID, Produkter, Zäitstempelen a méi.

![Bezuelungsdetailer-Säit mat Referenzcode, Produkter an Totaler](/img/admin/payment-edit.png)

An der rietser Kolonn kënnt Dir de Status vun der Bezuelung änneren. Wann Dir en op **Completed** ännert an d'Optioun **Activate Membership** aschalt, gëtt d'Websäit vun Ärem Client aktivéiert an hir Memberschaft ass aktiv.

![Bezuelungsännerungssäit mat Status op Completed gesat an Activate Membership-Schalter](/img/admin/payment-activate-membership.png)
