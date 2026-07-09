---
title: Nedskráning staðar
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Nedskráning staðans (v2) {#downgrading-a-plan-v2}

_**VIÐVÖGUN: Þessi grein er tengd Ultimate Multisite v2.x.**_

Nedskráning staðans eða skýrslu er almenn aðgerð sem það getur sést fyrir viðskiptavili þar sem þeir hafa lítið fjármagn eða ákveðið að þeir ekki þurfa mikið að rauna subsite.

## Hvernig nedskrána staðann {#how-to-downgrade-a-plan}
Viðskiptavinir geta nedskráningu staðans nýtt anytime með því að logga inn í administrasjónuna fyrir subsite sitt og klikka á **Change** (Breyta) undir sínum reikningurshlutina.

![Sérstakleiki reikningurshlutans viðskiptavina og Breyta-knapp](/img/account-page/membership-change-button.png)

Þegar notað er **Change** (Breyta)-knappinn, blir notandinn/viðskiptavinur leiðréttur til skýrslu um betalningu þar sem hann getur veldur val á staðni sem hann vill breyta skýrslunni sína.

![Sérstakleiki vala nedskráningu staðans á viðskiptavina sjálfi](/img/account-page/downgrade-picker.png)

Í þessum dæmi nedskránum við breytum staðni frá **Premium** til **Free**.

Til að halda fram þarf notandinn bara að klikka á **Complete Checkout** (Fullfær betalningu)-knappann. Það mun þá leiða hann aftur í reikningurshlutinn sem sýnir skilaboð um undirskráninguna fyrir skýrslu. Breytur verða við á **næstu betalningshönnun** viðskiptavinarins.

![Reikningurshluti sem sýnir undirskráningu með undirskráningu](/img/account-page/pending-change.png)

### Hvað gerist þegar notandi nedskráir staðann sitt {#what-happens-when-a-user-downgrades-their-plan}
Það er mikilvægt að merka, að nedskráning staðans sjálfa ekki breytur núverandi uppsetningu í subsite sín.

Það breytur ekki sjálf skýrslunna þar sem breyting á skýrslunni getur hefði fullkomlega sýnt og nullstilt subsite-inn. Þetta er til að fórna ónefndri gögnum. Því eru diskaspa, themes, plugins osaförð, nema postar.

Vi skiljum að hvernig það er að þitt að hvernig takmarkanir og kvótar sem þú setur undir hvert plan eru að vera að spurning, en við verðum að skoða það áhrif sem þetta gæti haft á under-sítann þinn ef við fjarlygjum eða breytum neptions af þessum uppsetningum.

Fyrir fréttagrunninn sem er yfir takmarkunni sem planið setur, hefurðu þú 3 möguleika: **Halda fréttagrunnin eins og hún er** *,* **Hleða fréttagrunnin í hausinn (trash)** *,* eða **Hleða fréttagrunnin í hausinn (draft)** *.* Þú getur sett þetta upp undir innstillingum Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Hvað gerist með betalningu {#what-happens-to-the-payment}

Í útgáfu 2.0 þarf ekki lengur nokkrar breytingar á betalningu varðandi proration (eins og að reikna út eftir notkun).

Þetta er því fyrir því að kerfið mun bíða þegar núverandi meðlimsins hefur **fullfærð sína reikningstíma áður en** ný plan/meðlimur fær á við. Ný betalningsjafnari gæði fyrir nýja meðlimsins verður sjálf virkð og reiknuð út á næstu reikningstíma.
