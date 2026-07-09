---
title: Gushyiraho Kwishyura mu buryo bwa Manual
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Gushyiraho Ubwishyu Bukorwa N'intoki (v2)

_**ICYITONDERWA CY'INGENZI: Iyi nyandiko ireba Ultimate Multisite version 2.x.**_

Ubwishyu bukorwa n'intoki ni uburyo bwo guha abakoresha bawe ubundi buryo bwo kwishyura igihe **Stripe** cyangwa **PayPal** bitabonetse kuri bo. Bushobora kuba kohereza amafaranga kuri banki cyangwa ubundi buryo ubwo ari bwo bwose bwo kwishyura buboneka aho abakoresha bawe bari.

## Uko wafungura Ubwishyu Bukorwa N'intoki

Gushyiraho ubwishyu bukorwa n'intoki biroroshye cyane. Ukeneye gusa kubufungurira munsi y'amarembo yo kwishyura no gushyiramo amabwiriza arambuye y'uko umukoresha agomba kohereza ubwishyu.

Banza ujye kuri **Ultimate Multisite > Settings > Payments**. Munsi ya **Payment Gateways** , fungura **Manual**. Uzabona ko agasanduku ka **Payment Instructions** kazakugaragarira.

Ongeramo muri aka gasanduku amakuru umukiriya wawe azakenera kugira ngo akore ubwishyu. Ashobora kuba amakuru ya konti yawe ya banki na email yawe kugira ngo umukiriya akohereze icyemezo cy'ubwishyu, urugero.

![Akabuto ko gufungura Manual payment gateway kari kumwe n'ahandikirwa Payment Instructions](/img/config/manual-gateway-expanded.png)

Dore interface y'igenamiterere rya manual gateway:

![Igenamiterere rya manual gateway](/img/config/manual-gateway-settings.png)

Nyuma yo kubishyiraho, kanda gusa kuri **Save Settings** maze birangire. Igihe abakoresha biyandikisha kuri network yawe, bazabona ubutumwa bubabwira ko bazakira amabwiriza yawe yo kurangiza kugura.

![Ubutumwa bwo kwemeza kwiyandikisha bubwira umukoresha ko azakira amabwiriza yo kwishyura](/img/frontend/registration-manual-notice.png)

Kandi bazakira n'ubutumwa ku rupapuro rwawe rwa **Thank You** ruriho amabwiriza yawe yo kwishyura.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Kwemeza ubwishyu bukorwa n'intoki

Kugira ngo wemeze ubwishyu bukorwa n'intoki, jya kuri menu ya **Payments** ku ruhande rw'ibumoso. Aho ushobora kubona ubwishyu bwose buri kuri network yawe n'ibisobanuro byabwo, harimo na **status** yabwo. Ubwishyu bukorwa n'intoki buzahorana status ya **Pending** kugeza igihe ubuhinduye n'intoki.

![Urutonde rwa Payments rwerekana ubwishyu bukorwa n'intoki buri Pending](/img/admin/payments-list.png)

Injira ku rupapuro rw'ubwishyu ukanze **reference code**. Kuri uru rupapuro ufite ibisobanuro byose by'ubwishyu bukiri Pending, nko kuri reference ID, ibicuruzwa, ibihe byanditswe n'ibindi.

![Urupapuro rw'ibisobanuro by'ubwishyu rwerekana reference code, ibicuruzwa, n'imibare yose](/img/admin/payment-edit.png)

Mu nkingi y'iburyo, ushobora guhindura status y'ubwishyu. Kuyihindura ukayishyira kuri **Completed** no **gufungura uburyo bwa Activate Membership** bizafungurira site y'umukiriya wawe kandi membership ye izaba ikora.

![Urupapuro rwo guhindura ubwishyu rufite Status yashyizwe kuri Completed na Activate Membership yafunguwe](/img/admin/payment-activate-membership.png)
