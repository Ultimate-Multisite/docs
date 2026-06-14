---
title: |+
  Gukora Uburyo Bw'Ushobora Gukoreshwa Icyemezo cy'Ushobora Gukoreshwa

sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Gukoresha Uguza Ubwumvikane (v2)

_**Urugero RUFITE: Iyi ndokuriye ku Ultimate Multisite version 2.x.**_

Gukoresha uguza ubwumvikane ni uburyo ushaka kugufasha abandi uburyo bwo gukora umuzuba n'ubwumvikane niba **Stripe** cyangwa **PayPal** ntibishobora kuba ari ku bakoresha wako. Iki gukora umuzuba kigaragaza ko umuntu ashobora gukora ubwumvikane bwa wire cyangwa uburyo bw'ubwumvikane buhagaragara kuri buri umuntu mu gihe runaka.

## Uburyo Bwo Gukoresha Ubwumvikane

Gukoresha uguza ubwumvikane ni gukora byiza kandi bishya. Ukeneye gukoresha ibyo ku buryo bw'ubwumvikane (payment gateways) kandi ukugira inama zikomeye ku buryo umuntu ashobora gukora umuzuba.

Gukoresha uguza ubwumvikane, ugenda kuri **Ultimate Multisite > Settings > Payments**. Ku gihe cy'ubwumvikane (Payment Gateways), togglezera **Manual** kugira ngo uhereze. Uzi ko **Payment Instructions** box izahagarara ku mwe.

Gusobanura mu boxi iyizo ibyo umuntu azakwibona kandi azakwibona uburyo bwo gukora umuzuba. Iyiweza ishobora kuba ari inama za banka yawe n'email yawe kugira ngo umuntu ashobore kukugira uburyo bwo gukoresha ubwumvikane, urugero ni ibyo.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Iyi ifite inama za uguza ubwumvikane:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Ntabwo ugashyira, gukora **Save Settings** kandi niwe wari wamenye. Iyo abantu bashyiraho mu rurimi rwawe, bazakwibona uburyo bwo kubona inama zawe kugira ngo basobanure umuzuba.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ntabwo bazakwibona hamwe mu **Thank You** page n'inama zawe z'ubwumvikane.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Gukora Ubwumvikane Bwa Ubwumvikane

Kugutambira umuzuba w'umutekano (manual payment), gukora uburyo bishobora, gukora ku menu ya **Payments** kuri baro ry'amashyirayi (left bar). Urukoze ubutumwa bwose bukurikirana mu rwego rwawe n'ubwoko bwo kuyikoresha, kandi uba umwe n'ubwoko bwo kuyikoresha. Umutekano w'umutekano (manual payment) uzaba **Pending** (Urukoze) mu gihe cyose uza gukora uburyo bishobora, aho uza gushyira ubwoko bwawe.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Gukoresha uburyo bwo kuyikoresha (payment page) ukoresheje **reference code** (uwo code w'ubwoko). Ku gihe cyo, uza kumenya ubwoko bwose bw'umutekano w'umutekano (pending payment), nk'uko reference ID, ibintu byo gukoresha (products), amaso y'igice (timestamps) n'ibindi.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ku gice cy'umwihariko (right column), uza kumenya ubwoko bw'umutekano bwawe. Kugira ngo ubereye ku **Completed** (Wagize) kandi ugukora **Activate Membership** (Gukoresha Umuco w'Umukoresha), uza gukora umusaruro wa site yawe y'umukoresha kandi umukoresha we uzaba wumukoresha.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
