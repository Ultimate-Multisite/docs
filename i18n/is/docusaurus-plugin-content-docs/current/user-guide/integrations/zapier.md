---
title: Zapier samþætting
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Samning Ultima Multisite við Zapier {#integrating-ultimate-multisite-with-zapier}

Í einum af greininum ræfum við [Webhooks](webhooks.md) og hvernig þeir geta verið notað til að tengja þessar við þriðja þjónustur.

Notkun webhooks er aðeins littin, þar sem það krefst framavísu þekkingu í kóða og fangning af payloadum (data sem sendast). Notkun **Zapier** er leið til fyrir þig til að koma yfir þetta.

Zapier hefur tengingar við meira en 5000 app, sem gerir samskipt milli ólíkra tækja auðveldari.

Þú getur skapað **Triggers** (hættum) sem verða til þegar hendingar eru í gang á netinu þínu (t.d. reikning er skráð og hampi fyrir hendingu `account_create`): eða gera **Actions** (áhrif) á netinu þínu sem svara við yfirburðar hendingar (t.d. skapa nýja lánningu í nýrnetverk þinn Ultima Multisite).

Þetta er mögulegt því að **Ultimate Multisite Zapier's triggers** og actions eru hannað með [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Hvernig byrja {#how-to-start}

Fyrst, leita eftir Ultimate Multisite í lista app-a Zapier. Eða þú getur klikkað á [þennan link](https://zapier.com/apps/wp-ultimo/integrations).

Gangi yfir í dashboard þinn og trykk **+** **Create Zap** (Skapa Zap) knappa á vinstri hítandi linuna til að sett upp nýja Zap.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Þú verður leiðréttur í síðu sköpunar Zaps.

Í leitaferlið skildu "wp ultimo". Klikkað á það til að velja **Beta** úr valkostningum.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Eft sem þú hefur valdið app-ann, velja tilfarahendingu: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

En nú þurfum við að gefa Zapier aðgang að **netinu þínu**. Klikka á **Sign in** (Skrá inn) í opnum nýjum glugga sem krefst **API credentials** (skráningarskilningum).

![Zapier innleganir fyrir API kennitala](/img/admin/webhooks-list.png)

Gangi í netadministrasjónuna þína og ferst til **Ultimate Multisite > Settings** > **API & Webhooks** og skoða leitað eftir hluta sem heitið er API Settings.

Veldu **Enable API** (Viðveita API) valkostninginn, þar sem hann er nauðsynlegur fyrir að þessi tenging verki.

![API og Webhooks settir með API Settings og Enable API valkostningum](/img/admin/settings-api-webhooks.png)

Notu **Copy to Clipboard** (Kopya í klíppborði) í hluta sem heitið er API Key og API Secret, og set þá gildi á skráningarskjanni.

Á URL-hlutinu skal du setja fullan neturlinn þinn, með því að innihalda protokollann (HTTP eða HTTPS).

![Skráningarskjá Zapier með API Key, Secret og URL hluta](/img/admin/webhooks-list.png)

Klikka á knappa **Yes, Continue** (Já, fortsetja) til að fara í næsta skref. Ef allt virkar, þurfaðu að vera velkominnur af nýjum tengdum reikningnum þínum! Klikka á **Continue** (Fortsetja) til að skapa nýtt trigger.

## Hvernig skapa nýja Trigger {#how-to-create-a-new-trigger}

En þegar reikningurinn þinn er tengd geturðu sjá tilfelli sem eru til viðbót. Látum okkur velja **payment_received** (skiptingur færð) tilfelli fyrir þennan menntu.

![Velja payment_received tilfelli í Zapier trigger](/img/admin/webhooks-list.png)

Eftir að tilfellið hefur verið valdið og klikkt á **continue** (fortsetja), mun **test step** (teststeg) yfir skráningu sýna sig.

![Zapier teststep fyrir trigger](/img/admin/webhooks-list.png)

Á þessum skrefi mun Zapier prófa hvort getur **fetch specific payload to that event** (henta sérstaka undirskrift til þess tilfells). Í framtíðar tilfellum sama tíða verður upplýsingar með sama hluti sem er send.

![Zapier trigger test fully successfully with payload](/img/admin/webhooks-list.png)

Í áhrifum okkar tónlistunnar var testurinn **gerðist vel** og sýndi vönduðan vöndun á dæmi upplýsinganna. Þessi dæmi upplýsingna mun verið mjög hvarðandi í leiðbeiningum þess til að skapa áhrif (actions). Þinn trigger er nú sett upp og bustið til að tengja við övrantar tækni.

## Hvernig skapa áhrif (Actions) {#how-to-create-actions}

Áhrif nota upplýsingar frá övrum triggers til að skapa nýja innsköppun í netinu þínu.

Í **gerð á áhrifstegnum** værið valdið Ultimate Multisite **Beta** og möguleiki **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Í næstu skrefum geturðu eða skapa þann auðkenningu þína, eins og við gerðum í **How to start**, eða velja auðkenningu sem er sett upp áður. Í þessari tónlistinni munum velja sama auðkenningu sem var sett upp áður.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Sett upp áhrifinn (Setting up the Action) {#setting-up-the-action}

Þetta er **hovedskrefið í áhrifinu** og hér eru dýrðar sem eru littli annar. Fyrir allt annað upplýsingu sem þú velur er **Item**. Item er **upplýsingamodellinn** netinu þíns eins og **Customers, Payments, Sites, Emails** og övrantar.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Þegar þú velur item, mun skjáinn **byrja að breyta til að sýna nauðsynleg og valfriðar feldi** fyrir valdinn itemann.

Til dæmis, þegar þú velur itemann **Customer**, mun feldir feldir byrja að sýna allt sem er nauðsynlegt til að fylla í til að skapa nýja Customer í netinu.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Eftir að fylla í allar feldir sem eru merkt sem **required** og klikka á continue, mun einn lokaskjá sýna þér fylda feldirnar og feldir sem var ekki fylla í.

![Test á Zapier hlutnum sýn fulla og ófulla velli](/img/admin/webhooks-list.png)

Þegar þitt test er fullyð og átturleg, er aðgengildurinn þinn sett upp. Það er einnig mikilvægt að skoða netverk þitt til að sjá hvort hlutinn hafi verið skráð með testinu á átturinn þínum.
