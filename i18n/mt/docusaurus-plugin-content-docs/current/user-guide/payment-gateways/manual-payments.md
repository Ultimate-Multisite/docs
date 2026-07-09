---
title: Twaqqif ta' Pagamenti Manwali
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Twaqqif ta’ Ħlasijiet Manwali (v2) {#setting-up-manual-payments-v2}

_**NOTA IMPORTANTI: Dan l-artiklu jirreferi għal Ultimate Multisite verżjoni 2.x.**_

Il-ħlasijiet manwali huma mod kif toffri metodi oħra ta’ ħlas jekk **Stripe** jew **PayPal** ma jkunux disponibbli għall-utenti tiegħek. Jista’ jkun trasferiment bankarju jew wire transfer jew kwalunkwe metodu ieħor ta’ ħlas disponibbli lokalment għall-utenti tiegħek.

## Kif tattiva Ħlasijiet Manwali {#how-to-enable-manual-payments}

It-twaqqif ta’ ħlas manwali huwa faċli ħafna. Trid biss tattivah taħt il-gateways tal-ħlas u ddaħħal istruzzjonijiet dettaljati dwar kif l-utent għandu jibgħat il-ħlas.

L-ewwel, mur fuq **Ultimate Multisite > Konfigurazzjoni > Ħlasijiet**. Taħt **Gateways tal-Ħlas** , attiva **Manwali**. Se tara li tidher kaxxa **Istruzzjonijiet għall-Ħlas** għalik.

Żid f’din il-kaxxa l-informazzjoni li l-klijent tiegħek ikollu bżonn biex jagħmel il-ħlas. Tista’ tkun id-dettalji tal-kont bankarju tiegħek u l-email tiegħek sabiex il-klijent ikun jista’ jibgħatlek il-konferma tal-ħlas, pereżempju.

![Toggle tal-gateway tal-ħlas manwali b’żona tat-test għall-Istruzzjonijiet għall-Ħlas](/img/config/manual-gateway-expanded.png)

Hawn l-interface tal-konfigurazzjoni tal-gateway manwali:

![Konfigurazzjoni tal-gateway manwali](/img/config/manual-gateway-settings.png)

Wara li twaqqfu, ikklikkja biss fuq **Issejvja l-Konfigurazzjoni** u jkun lest. Meta l-utenti jirreġistraw fin-network tiegħek, se jaraw messaġġ li jgħidilhom li se jirċievu l-istruzzjonijiet tiegħek biex itemmu x-xiri.

![Messaġġ ta’ konferma tar-reġistrazzjoni li jgħid lill-utent li se jirċievi l-istruzzjonijiet għall-ħlas](/img/frontend/registration-manual-notice.png)

U se jirċievu wkoll messaġġ fuq il-paġna **Grazzi** tiegħek bl-istruzzjonijiet tal-ħlas tiegħek.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Konferma ta’ ħlasijiet manwali {#confirming-manual-payments}

Biex tikkonferma ħlas manwali, mur fil-menu **Ħlasijiet** fuq il-bar tax-xellug. Hemmhekk tista’ tara l-ħlasijiet kollha fin-network tiegħek u d-dettalji tagħhom, inkluż l-**istatus** tagħhom. Ħlas manwali dejjem ikollu status **Pendenti** sakemm tibdlu manwalment.

![Lista tal-ħlasijiet li turi ħlas manwali pendenti](/img/admin/payments-list.png)

Idħol fil-paġna tal-ħlas billi tikklikkja l-**kodiċi ta’ referenza**. Fuq din il-paġna għandek id-dettalji kollha tal-ħlas pendenti, bħal ID ta’ referenza, prodotti, timestamps u aktar.

![Paġna tad-dettalji tal-ħlas li turi l-kodiċi ta’ referenza, prodotti, u totali](/img/admin/payment-edit.png)

Fil-kolonna tal-lemin, tista’ tbiddel l-istatus tal-ħlas. Jekk tibdlu għal **Imlesta** u **tattiva l-għażla Attiva s-Sħubija**, is-sit tal-klijent tiegħek jiġi attivat u s-sħubija tiegħu tkun attiva.

![Paġna tal-editjar tal-ħlas bi Status issettjat għal Imlesta u toggle Attiva s-Sħubija](/img/admin/payment-activate-membership.png)
