---
title: Konfigurado de Pagoj Manulaj
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manual Pagamentig Setuji (v2)

_**IMPORTANTE NOTA: Esta artikolo referas al Ultimate Multisite versio 2.x.**_

Manual pagamentig estas maniero, per vi oferi aliaj pagament metodoj se **Stripe** aŭ **PayPal** ne estas disponabla por viaj uzantoj. Ĝi povas esti wire transfer (wire) aŭ banka transfero aŭ alia pagament metodo disponabla al viaj lokalede.

## Kiel aktivi manual pagamentigojn

Seti manual pagamentigojn estas tre facila. Vi nur bezonas aktivi ĝin sub "Payment Gateways" kajmeti detalajn instruojn pri kiel uzanto devas envi Sendi la pagamenton.

Unue, aliri **Ultimate Multisite > Settings > Payments**. Sub **Payment Gateways**, turnu **Manual** al on. Vi vidus, ke unu "Payment Instructions" (Instruoj por Pagamento) kutimo apparos por vi.

Adu en ĉi ti kutimo la informojn kiujn via klientulo bezonas por fari la pagamenton. Ĝi povas esti via banka konta detaloj kaj via e-mail, por ekzemplaro, por ke la klientulo enviu al vi la konfirmaĵon de la pagamento.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Jen la interfaco de la manual gateway setoj:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Post kiam vi setis ĝin, kunfluu nur **Save Settings** (Salvi Setojn), kaj ĝi estas finita. Kiam uzantoj registriĝas al via rano, ili vidos mesaĝon diran al ili ke ili ricevos via instruojn por fini la aĉeton.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Kaj ili ricevos ankaŭ mesaĝon sur via **Thank You** (Dankon) paĝo kun viaj pagament metodoj instruoj.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfirmado de manual pagamentigoj

Pra kon manuala pago konfirmi, rajdu al menu **Payments** la la sintratu. Tami ti vidos ĉiuj pagoj sur via retejo kaj ilia detaloj, inkluzive ilia **status**. Manuala pago ĉiam havos **Pending** status ĝis ke vi manuele ŝanĝas ĝin.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Intru la pagaj paĝon per klikado sur la **reference code**. Sur ĉi tiu paĝo vi havas ĉiuj detalojn de la pendinga pago, kiel reference ID, produktoj, temporaj markoj kaj pli.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sur la destra kolono, vi povas ŝanĝi la status de la pago. Ŝanĝado al **Completed** kaj la togglo "Activate Membership" permesas via klientaj siton kaj ilia membraco fari aktiva.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
