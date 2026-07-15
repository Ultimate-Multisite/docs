---
title: Urugero rwa Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Gutang Ultimate Multisite na Zapier

Mu gihe mu ndaga kuri article runaka, twabwiye ku [Webhooks](webhooks.md) kandi uko bisobanura uburyo bwo gukoresha uburyo bwa webhooks kugira ngo utangire ubushobozi n'ibindi by'umuryango (3rd party applications).

Gukoresha webhooks ni ikintu gikomeye cyane kuko bikorera uburyo bw'ubwujumbura bw'ingingo kandi gukora ibyo bishobora kubona. Gukoresha **Zapier** ni uburyo ushaka ubwo bwo gutera uburyo bwa webhooks.

Zapier yashobora kugira uburyo bwo gukorana n'ibindi bya 5000+ cyangwa abantu benshi, bikaba bituma guhuza hasiho hagati y'ibindi byo mu gihe cyiza kandi gushobora.

Ushobora gukora **Triggers** (Icyemezo) cyangwa uburyo bwo gukora ibyo (Actions) ku gihe cyako kugira ngo bikorane n'ibindi bya mbere (eg, gukora account yashyirwaho kandi ikora event ya account_create) cyangwa gukora **Actions** ku gihe cyako kubyara ibintu by'umuryango (eg, gukora membership y'account yashyirwaho mu network ya Ultimate Multisite).

Icyo gikora ariko hari uburyo bwo gukora iki kuko **Ultimate Multisite Zapier's triggers** n'actions zikoreshwa uburyo bwa [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Uburyo bwo kwiga {#how-to-start}

Gukoresha uburyo bwo gushyira ngo utangire ni ukuri:
1. Gukoresha Ultimate Multisite mu list ya apps ya Zapier. Cyangwa, ushobora gukora [iki link](https://zapier.com/apps/wp-ultimo/integrations).
2. Gukora ku dashboard yawe kandi ugukora uburyo bwa **+** **Create Zap** kuri sidebar y'igice cy'umwihariko kugira ngo utangire Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Ushobora gushyirwa ku peji ya gukora Zap.
Mu search box, usobanura "wp ultimo". Gukora uburyo bwo gukoresha **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Nyuma yo gukoresha app yawe, ushobora gukoresha ibintu by'umwihariko: **New Ultimate Multisite Event** (Icyemezo cy'Ultimate Multisite yashyirwaho).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Ubu, twese turashobora gushyira Zapier kugira uburyo bwo gukoresha **network yawe**. Gukora kuri **Sign in** bikora window y'umunsi w'ubwujumbura (API credentials).

![Prompt ya Zapier yo kumenya API credentials](/img/admin/webhooks-list.png)

Gukora ku gukoresha panel ya network admin yawe kandi ugenda ku **Ultimate Multisite > Settings** > **API & Webhooks** kandi ukwumva API Settings section.

Koresha uburyo bwo gukoresha **Enable API** kuko ni ikoresho ikoreshwa mu kugera ku urugero rw'ibyo bikoreshwa mu gukorera uyu uburyo.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Gukoresha icondiciti ya **Copy to Clipboard** kuri fields za API Key n'API Secret kandi ugusubiza iyo ndimi ku screen y'integration.

Ku field ya URL, gukoresha URL yose ya network yawe, ukwibanda uburyo bwo kumenya (HTTP cyangwa HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Gukora **Yes, Continue** kugira ngo utangire mu gihe cy'ibindi byo. Niba byose bishobora gukora, uza kubarwaho n'account yawe yashyiramo! Gukora **Continue** kugira ngo utageze ku gihe cy'ubushobozi runaka.

## Uburyo bwo gukora Trigger shya hundo {#how-to-create-a-new-trigger}

Ubu n'uko account yawe yashyiramo, uza kumenya ibyo byose byashoboye kubaho. Turemeze **payment_received** event ku gihe cy'ibindi byo mu tutorial iyi.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Icyiza cyo ugiye gukoresha event kandi ugakora **continue**, uza kubona **test step**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Mu gihe cy'ibyo, Zapier izakora test kugira ngo yisobanure niba uwezi wakozeho gukoresha **fetch specific payload** ku gihe cyo. Mu gihe cy'ibindi byo byo mu buryo bwa event, intambulo ishyiramo iyo ndimi itandukanye izakora.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Mu ntangiramo mu tutorial yawe, uyu test **wakoze neza n'ubwumvikane** kandi wamutera ibyo byo mu payload. Icyo cyo mu payload cyo mu mwanya cyo gukora ibikorwa cyangwa "actions" cyo mu gihe cyo gukora ibikorwa cyangwa "actions". Umu trigger wawe ugiye kuboneka kandi wumutse kugabanyiriza n'ibindi by'ubwoko.

## Uburyo bwo gukora Actions (Actions) {#how-to-create-actions}

Actions zishobora gukoresha amakuru y'ibindi triggers kugira ngo zikoreshe ibyo mu rwego rwawe kugira ngo zikoreshe ibintu bishya mu network yawe.

Mu **gukora action step**, uza gushyira Ultimate Multisite **Beta** kandi wumutse uburyo bwo **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Mu gihe cy'ibindi, uza gukora authentication yawe, nk'uko twagiranye mu **How to start**, cyangwa wumutse authentication yagizeye gukorwa. Mu tutorial iyi, twatuma uyu authentication wari wakoze kandi twamutse.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Gukora Action (Setting up the Action) {#setting-up-the-action}

Iki ni **igice cy'ingenzi cy'action** kandi hano ibintu byiza bitandukanye. Icyo cyo mbere uza gushyira ni **Item**. Item ni **model y'amakuru** yawe mu network, nk'uko bishobora kuba ari **Customers (Abakoresha), Payments (Icyemezo), Sites (Abaraka), Emails**, n'ibindi.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Iyo uza gukoresha item, ifomu izagira **uburyo bwo guhindura ibintu byo mu gihe cyo gukora** kugira ngo yugire amakuru atangwa kandi atangwa n'ibindi.

Urugero, iyo uza gukoresha item **Customer**, ifomu igira ibintu byose bikwiriye kugira ngo utangire gukora Customer shya mu network yawe.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Nyuma yo gukorera amakuru yose atangwa kandi wumutse continue, ifomu ikoresha uza kuguha ibintu byose bishobora kuba byashoboye n'ibintu byose bitangwa.

![Test ya Zapier ikoreshwa ikoresha uburyo bwo gukora umukono (action) wako, y'umwihariko ni kwishobora kumenya ku rwego rwawe (network) niba igitemo cyari cyerekana n'ibyo umukono wako wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari wari w
