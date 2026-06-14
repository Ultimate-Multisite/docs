---
title: Skráningarprosessi
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registrasjonarferlið (v2)

_**VIÐVÖGUN: Þessi grein er tengd Ultimate Multisite útgáfu 2.x.**_

Notendur geta skráðstufn í þann netið ykkurs á ólíkanar hátt. Þau geta notað skráningarsíða ykkurs eða liðinn sem er deildar fyrir forrétti plan. Hér sýnum við hvernig okkar viðskiptavinir geta skráðstufn í netinu ykkurs með tilfóstsæðum leiðum og hvað gerist eftir að þeir hafa skráðstufn í netinu ykkurs.

## Notkun skráningarsíðu:

Þetta er almenn skráningaraferli. Þú byggir skráningarsíða með **checkout form** og það er þar sem viðskiptavinir þín verða að fara til að skráaststufna í netinu ykkurs og skrá sig á plan. Þú getur haft fleiri skráningarsíðu, hver einn með ölum skráningarskráningarsíðuna ef þú vilt.

Standard síða fyrir skráningu er [_**yourdomain.com/register**_](http://yourdomain.com/register), en þú getur breytt þetta nánast hvaða stund á **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Eftir að notandinn komi í skráningarsíðuna ykkurs (til dæmis með því að klikka á knappa sem heiti er **Sign in** eða **Buy now**), sjá hann skráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarskráningarsk

![Takkarside eftir reikning](/img/frontend/registration-thank-you.png)

Ef tækifæri er nauðsynlegt, þá verða þeir að fara í tölvupóstmyndina sína og klikka á staðfestingarskilið. Netaskiptið mun ekki starfa ef reikningurinn hefur ekki verið staðfestur.

Ef þeir hafa skráð sig í tengd þjónustu eða ef tölvupóstastöðfesting er ekki nauðsynleg á netverkinn þínum, verður deildistofa síns starfð á vefsíðunni þar sem þeim sýnist staðsetning til að skrá sig inn í deildistofa.

![Vefsmið starfa með staðsetning til að skrá sig inn í deildistofa](/img/frontend/site-activated.png)

## Notkun staðsetna með liðréttum línunum (Shareable Link):

Að skrá sig með liðréttum línunum er í raun eins og við skráningarskjal, einar skilningurinn er að þegar nota liðréttan línuna geta þeirir sem kaupa voredagur eða vefsíðu-mall pre-selectuð á kaupumönnum (sjá hluta um fyrirframvalda val voredagurs og mallar með URL-parametrimum) eða það að einn kóði geti verið viðbúinn (sjá hluta um notkun URL-parametrimum).

Reikningurinn mun vera eins og áður: þeir verða að fylla út nafni, notkunannafn, tölvupóstnúmer, nafn vefsíðunnar og títil, sýnt m.m., en planinn eða mallinn er þegar pre-selectuð fyrir þeim.

### Skráning með mannvælum betalingsréttum (Manual Payments):

Ef þú vilt ekki nota PayPal, Stripe eða neðvenjulega betalingshætt tilbúna í Ultimate Multisite eða þessar viðbótshættir, geturðu nota mannvælum betalingsrétta fyrir kaupumönnum þina. Þannig geturðu skipt eftir reikningi fyrir þeim að betala á betalingshætt sem þú hefur valdið eftir að þeir hafa skráð sig í netverk þínum.

Reikningurinn mun vera eins og áður, en á skráningarskjalum sjá kaupumönnuðir skilaboð sem sýnir að þeir verða að fá tölvupóst með vöruferli til að fullfölja betalingu.

![Manule gjafn áhrif í þegar reikningurinn er skráð](/img/frontend/registration-manual-notice.png)

Og eftir að reikningurinn er fullfuið, sjá þeir betalingsleiðbeiningar sem þú hefur sett (og fái þær einnig í tölvupósti).

![Batalingsleiðbeiningar sýnd eftir skráningu](/img/frontend/registration-payment-instructions.png)

Batalingsleiðbeiningar getur breytt á **Ultimate Multisite > Settings > Payments** eftir að þú sláttar á **Manual** betalingsval:

![Slátt á manual betalingsval og lausnlinu fyrir betalingsleiðbeiningar](/img/config/manual-gateway-settings.png)

Eftir að þínir viðskiptavinir hafa fullfuið manuella betalingu og send í þig staðfesting, þarf þú að **manuellt staðfesta betalingu** til að aktíva viðskiptavarkilna og vísweb síðuna.

Til að gera þetta, ferst til **Ultimate Multisite > Payments** og finn viðskiptavininn betalingu. Hún ætti enn að sýna **Pending** (Enn ekki fullfuið) staðal.

![Lista betala með pending manuella betalingu](/img/admin/payments-list.png)

Klikka á betalingsnúmerið og þú gætir breytt staðalið til **Completed** (Fullfuið).

![Batalingsskýrslu yfir á Completed staðal](/img/admin/payment-status-completed.png)

Eftir að þú hefur breytt staðalið í **Completed**, ætti þú að sjá texta sem segir **Activate membership** (Aktíva skilning). Slátt á þessum vali **on** (á) til að aktíva skilninginn og vísweb síðuna sem er tengd þessum viðskiptavini. Þegar það er sett, klikka á **Save Payment** (Sérstaklega betalingu).

![Slátt á aktíva skilningi og Save Payment knappa](/img/admin/payment-activate-membership.png)

Viðskiptavinurinn þinn ætti nú að geta að hleðast dashboard og allar mögulegar eiginleika sem hann hefur tekið.
