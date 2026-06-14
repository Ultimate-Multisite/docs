---
title: Ho Setsoho Tšhomo ea Ho Tšhoma
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Set Up Payments Manual (v2)

_**LIPOTSE LE KOTSI: Le litlhahlo le lengwe le tla fana ka.**_

Le litlhahlo le lengwe le bone ho ba le bone le bone ho fana ka metefa e lengwe ha **Stripe** kapa **PayPal** se le fa batho ba hau. E ka na le wire a le bank transfer kapa metefa e lengwe e ntse le batho ba hau leba.

## Ke eng e tla fana ho feta Litlhahlo Le Lengwe (Manual Payments)

Ho setela litlhahlo le lengwe le le lina le le lina. Ho batla ho fetola, kea a fetola ka ho tsamaisa ka **Payment Gateways** le tsamaisa **Manual**. Ha o tsamaea, o tla bona sehlopha sa **Payment Instructions** se tla fana ka.

Tsamaea ka: **Ultimate Multisite > Settings > Payments**. Ka hlophiso ea **Payment Gateways**, tsamaisa **Manual** ho feta. O tla bona sehlopha sa **Payment Instructions** se tla fana ka.

Tsamaisa le litlhahlo tse a fetileng ba customer tla batla ho feta metefa. E ka na le ditlhahlo tsa bank ea hau le email ea hau hore customer a u tloha ho tloha confirmation ea metefa, re lebisa.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Kea le sehlopha sa setelo sa litlhahlo le lengwe:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Ha o fetola, tsamaisa ka **Save Settings** le e le feta. Ha batho ba tla tsamaea le netefe ea hau, ba tla bona litlhahlo tse tla ba le bone ho feta metefa.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Leba ba tla tloha le sehlopha sa **Thank You** le lengwe le le fana ka litlhahlo tsa metefa ea hau.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Ho Baola Litlhahlo Le Lengwe (Confirming manual payments)

Ho ba le fa'a tso'a le lala o le fa'a'apa'apa (manual payment), e te fa'atatau i le menu **Payments** i le fa'a'ata'i (left bar). I le fa'a'ata'i o le fa'a'ata'i, e te mafai ona fa'amama'a ai le fa'a'apa'apa so'o se fa'a'apa'apa i le fa'a'apitoa o le fa'a'atatau (details), e taitai ai le **status** o ia. O le fa'a'apa'apa manual, o le a fa'a'apitoa o le status **Pending** (e te fa'a'apitoa) i le taimi atoua e fa'amama'a ai i se fa'a'apitoa.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Fa'amama'a le fa'a'apa'apa o le pei o le **reference code** (code o le fa'atatau). I le fa'a'ata'i o se fa'a'apitoa, e te mafai ona fa'amama'a ai so'o se fa'a'apitoa o le fa'a'apa'apa pending, pe i le reference ID, fa'a'apitoa (products), timestamps, ma fa'amatalaga fa'apitoa.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

I le tulaga o le tasi (right column), e te mafai ona fa'amama'a ai le status o le fa'a'apa'apa. Fa'amama'a ia i **Completed** (fa'a'apitoa) ma fa'amama'a le opsiona **Activate Membership** (fa'a'atatau le membership), e te mafai ona fa'amama'a ai le site o le tagata o lo'o fa'a'apa'apa ma o le membership o ia e fa'a'apitoa.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
