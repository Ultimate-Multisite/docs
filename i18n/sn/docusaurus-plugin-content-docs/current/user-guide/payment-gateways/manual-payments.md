---
title: Kupanga Mabhore Mune Zvinhu
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Kuita Kufamba (v2)

_**CHINDIRA CHINDIRA: Iriweyi iri rinoreferira Ultimate Multisite version 2.x.**_

Kuita kufamba (Manual payments) ndiyo nzira inokubvira kuti uonwe zvinhu hokuita kuita payment kana **Stripe** kana **PayPal** hairi kune vanhu vako. Izviya dzinogona kuva wire kana bank transfer kana nzira yechipfumbiro yakasiyana-nyaya inoshandiswa nevanhu vako pachavo.

## Sei Kuita Kufamba (Manual Payments)

Kuita kufamba kunoita zvinhu zvakanyanya kuitika. Unofanira kuonetsa kuti unogona kukubvira izvi pakati pe **Payment Gateways** uye utangei zvinangwa dzakakwana nezvinhu vanhu vana dzinogona kuita payment sei.

Mazuva akapfiri, enda ku **Ultimate Multisite > Settings > Payments**. Pakati pe **Payment Gateways**, onesha (toggle) **Manual** kuti iwe upfungire. Uona kuti chine box inosvika **Payment Instructions** inozuva.

Chingira izvi pakati pe box iyi zvinhu zvinodzidziswa kunoita payment vanhu vako. Izviya dzinogona kuva maererano ekuramba kwenyika yako uye email yako kuti vanhu vana vanokubvira confirmation yekufamba, sei.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Iyi interface yekutanga kufamba (manual gateway settings):

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Panguva unogona kuita, ndizviya **Save Settings** uye zvakaita. Panguva vanhu vana vanoregistra kune network yako, vanoona message inoti vanoita instructions dzedu kuti vave nekuita checkout.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ndinokubvirawo message pakati pe **Thank You** page yako neinstructions dzakufamba dzako.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Kuonetsa Kufamba (Confirming manual payments)

Kuti ufanira kufamba nekuita payment manual, endera ku menu ya **Payments** pa kiri mupfupi (left bar). Kuti unagone kuona zvinotevera payments dzako dzese kwenye network yako uye maerer anonyanya nazo, zvichisinga kuti **status** yavo. Payment manual hachange status yake yakai **Pending** kunze kunenge wauine kuibata nekuva yakai.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Chinjisa page ya payment nekuti unagone kuita i **reference code**. Pa page iyi, unagone kuona zvose zvinonyanya nezve payment yacho inotevera, sekuita reference ID, products, timestamps uye zvinhasi yakai uye zvinhasi zvakawanda.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Pa column ya mupfupi (right column), unagone kuunda status ye payment yacho. Kuti iwe uibude kuva **Completed** uye kuti utange option ya Activate Membership, izvi zvichatenderera site ya mutenda wako uye membership yake ichaichivaka.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
