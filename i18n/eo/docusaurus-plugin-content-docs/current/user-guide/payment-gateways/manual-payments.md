---
title: Agordado de Manaj Pagoj
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Agordo de Manaj Pagoj (v2)

_**GRAVA NOTO: Ĉi tiu artikolo rilatas al Ultimate Multisite versio 2.x.**_

Manaj pagoj estas maniero por vi oferti aliajn pagmetodojn, se **Stripe** aŭ **PayPal** ne estas disponeblaj por viaj uzantoj. Ĝi povas esti ĝiro aŭ banka transigo aŭ ajna alia pagmetodo disponebla al viaj uzantoj loke.

## Kiel ebligi Manajn Pagojn {#how-to-enable-manual-payments}

Agordi manan pagon estas tre facile. Vi nur bezonas ebligi ĝin sub pagaj kluzoj kaj enmeti detalajn instrukciojn pri kiel la uzanto devas sendi la pagon.

Unue, iru al **Ultimate Multisite > Agordoj > Pagoj**. Sub **Pagaj Kluzoj** , ŝaltu **Mana**. Vi vidos, ke skatolo **Pagaj Instrukcioj** aperos por vi.

Aldonu al ĉi tiu skatolo la informojn, kiujn via kliento bezonos por fari la pagon. Ĝi povas esti viaj bankkontaj detaloj kaj via retpoŝtadreso, por ke la kliento povu sendi al vi la pagokonfirmon, ekzemple.

![Ŝaltilo de mana paga kluzo kun tekstareo por Pagaj Instrukcioj](/img/config/manual-gateway-expanded.png)

Jen la interfaco de agordoj por la mana kluzo:

![Agordoj de mana kluzo](/img/config/manual-gateway-settings.png)

Post agordi ĝin, simple alklaku **Konservi Agordojn** kaj tio estas farita. Kiam uzantoj registriĝas al via reto, ili vidos mesaĝon dirantan al ili, ke ili ricevos viajn instrukciojn por kompletigi la aĉeton.

![Registra konfirma mesaĝo diranta al la uzanto, ke ili ricevos pagajn instrukciojn](/img/frontend/registration-manual-notice.png)

Kaj ili ankaŭ ricevos mesaĝon sur via **Dankon**-paĝo kun viaj pagaj instrukcioj.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konfirmado de manaj pagoj {#confirming-manual-payments}

Por konfirmi manan pagon, iru al la menuo **Pagoj** sur la maldekstra breto. Tie vi povas vidi ĉiujn pagojn en via reto kaj iliajn detalojn, inkluzive de ilia **stato**. Mana pago ĉiam havos staton **Pritraktata** ĝis vi permane ŝanĝos ĝin.

![Listo de pagoj montranta pritraktatan manan pagon](/img/admin/payments-list.png)

Eniru la pagopaĝon alklakante la **referencan kodon**. Sur ĉi tiu paĝo vi havas ĉiujn detalojn de la pritraktata pago, kiel referenca ID, produktoj, tempindikoj kaj pli.

![Paĝo de pagodetaloj montranta referencan kodon, produktojn kaj totalojn](/img/admin/payment-edit.png)

En la dekstra kolumno, vi povas ŝanĝi la staton de la pago. Ŝanĝi ĝin al **Kompletigita** kaj **ŝalti la opcion Aktivigi Membrecon** ebligos la retejon de via kliento kaj ilia membreco estos aktiva.

![Paĝo de redaktado de pago kun Stato agordita al Kompletigita kaj ŝaltilo Aktivigi Membrecon](/img/admin/payment-activate-membership.png)
