---
title: Uppgrunnding staðar
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Uppgradering ein Plan (v2) {#upgrading-a-plan-v2}

_**VIKTIG MERKNAD: Þessi grein er aðalmenningurinn fyrir Ultimate Multisite v2.x.**_

Þar sem viðskiptavinir þín geta uppgráð á planum sínum nánast hvaða tíma þeir vilja. Þeir geta eða uppgráða í annar plan eða kaupa hvaða aðferðar-eða pakka sem þú býður upp á á netinu þínu.

Í þessu tölvuleiðbeiningum munum við skoða hvernig þeir geta uppgráða planinn sínum og hvað gerist eftir uppgráðsferlið.

Til að uppgráða planinn hefja þar sem þær geta aðgangur til dashboard sínu og fara yfir yfir **Account** (Stjórn) -skjalann.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Á Account-skjalann munu þeir sjá núverandi lánningu sína og planinn sem er við þennan. Til uppgráð í annar plan verða þeir að klikka á **Change** (Breyta) í hvíldu uppu í **Your Membership** (Þín lánning) -hlutinu.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Þeir verða að leita yfir til skráningarskjafn sem allar mögulegar planir munu sýnast þeim.

Þeir geta einnig séð **services and packages available for their current plan** (þjónustu og pakkar sem eru til við þennan plan), ef þeir bara vilja kaupa sérstaka þjónustu eða pakka (eins og óbegilld bílferð eða skráningarsvæði í dæmi okkar hér), en ekki uppgráða planinn.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Eftir að þeir hafa valdið vönduna sem þeir vilja kaupa, munu þeir sjá hversu mikið þau verða að betalla núna - án þess að reikna með nánast öllum fyrir besta skuld - og hversu mikið þeir verða að betalla á næstu reikningartíma.

Í almennu tilfelli, ef vöndin er annar plan og betalningin er að gera milli lánningarskyldu, munu þeir fá skuld fyrir þá muna sem var betalla á fyrri plani.

![Uppgraði gjaldskýrslu sem sýnir skildi og næsta reikningargjald](/img/account-page/upgrade-summary.png)

Ef þeir velja plan eða pakki sem ekki breytur nýtt en það sem er nú í skráningu, sjá þeir skilaboð sem sýnir þetta.

![Tilskynning þegar valinn plan ekki breytur skráninguna](/img/account-page/upgrade-no-change.png)

Eftir að kaup fer eftir að kaupferli er fullfuið, verða nýttar vörp (eða vörp) viðbúnað til reikninga þeirra og allar takmarkanir eða eiginleikar nýrra vörpanna verða strax viðbúnað því: bílunar, skráningarsvæði, innlegg, m.fl...

## Uppgrað og nedgravnir leiðir (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Á hverjum vörpu þitt mun þú hafa **Up & Downgrades** tab. Fyrirst möguleiki á þessum tabinn er fältur nefnd **Plan Group**.

**Plan groups** eru það sem leyfir þér að segja Ultimate Multisite að sérstök planir ættu að vera í sama "familu", og því verða notað til að byggja upp möguleika fyrir uppgrað/nedgravnir.

![Uppgraði vörpu Up and Downgrades tab með fältum Plan Group](/img/config/product-upgrades-plan-group.png)

Til dæmis, þú hefur **Free plan**, **Basic Plan** og **Premium Plan** til að velja. Þú vilt að notendur sem eru skráðir á **Free Plan** ættu að geta uppgraða að **Premium Plan** og þú vilt ekki að þeir sjá "Basic Plan" sem uppgraðst möguleika. Allt þú þarft er að gera er að gefa sama nafn fyrir plan group fyrir Free og Premium plan eins og sýnt í myndum hér að neðan.

![Vörp Free Plan með High End plan group gefnum](/img/config/product-upgrades-free.png)

![Vörp Premium Plan með High End plan group gefnum](/img/config/product-upgrades-premium.png)

Þetta þarf að gefa Upplýsingum um Umfærðar (Ultimate Multisite) vettað að það er "familur" af kerfsþróunshlutum í netverkinu sem heiti **High End**. Þegar við býðum á upphæfingu eða sjálfsvælanir, verður only plans frá sama famili sem möguleiki fyrir notandann.
