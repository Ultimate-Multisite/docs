---
title: Löggingur á viðskiptavini
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Skýslaður síða fyrir viðskiptavinann þinn (v2)

_**VIÐSKIPURLEIKN: Þessi grein er tengd Ultimate Multisite v2.x.**_

Þegar viðskiptavinir skrá sig í plan á nýtingarnetinu þínu, fá þeir aðgang að netnum og hans dashboardi með mikilvægum upplýsingum um betalingar, samþættingar, domænar, takmarkanir á planunum og m.fl.

Í þessum tölvuleiðbeiningu reynjum við að leiða þig í gegnum síðuna fyrir viðskiptavinann og sjá hvað viðskiptavinir geta sjá og gera innri þar.

## Skýslaður síða

Skýslaður síða er aðgangur til þess sem þú getur komið á **Account** (Skýlaður) í dashboard-inum fyrir viðskiptavinann þinn.

![Menulinja á skýlaðum dashboardi](/img/account-page/account-menu.png)

Á netnum sovereign tenant v2.13.0 heldur Ultimate Multisite þessi upplýsingar um viðskiptavini á hlutverki hópmyndar (main site). Ef viðskiptavinur opnar skýlað síðuna, betalingsréttindi, faktu, faktu, stjórnun síða, skiftingu temblaga eða mappa domænu frá sovereign tenant, leiðin er að hópmyndar síðunni svo að reikningur og samþættingar á netnum haldið fram sem aukna.

Þegar viðskiptavinur kemur í þennan hópmyndar síðuna, getur hópmyndar dashboardur innihalda leið aftur til tenant síðunnar. Leiðin er sýnd onlyf þegar Ultimate Multisite getur staðfest að leiðin sé einn af viðskiptavina sínum síðunum, sem hindrar óþarfir leiðum en heldur áfram með ferli tenantins.

![Áhersla á skýlaða síðuna](/img/account-page/overview.png)

Eftir að viðskiptavinur klikkar á það, sjá hann upplýsingar um samþættinguna sína, hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hefðu hef

### Översikt over medlemmskapet þitt:

Fyrir fyrsta hluta undir nafni netasíðans þíns sýnir öllu upplýsingar um núverandi planinn og þjónustur/pakka sem var kaupað með því. Hlutið sýnir einnig medlemmskaflannúmer, fyrsta eingöngu betalingssumma sem var betald fyrir það, hversu mikið planinn og þjónusta/pakki kostar og hversu oft hann hefur verið betallað fyrir þennan medlemmskaflann. Þeir geta einnig séð hvort medlemmskaflann sé **Ávinnandi** (Active), **Lykktur** (Expired) eða **Stoppður** (Canceled).

![Översikt over medlemmskaflann sýn plan, fjármuni og betalingsupplýsingar](/img/account-page/membership-card.png)

Á fyrsta hluta undir þessum hluta geta þínir viðskiptavinir séð **Um þessa síðu** (About This Site) og **Síðu-límit** (Site Limits) hluti. Þessi hluti sýna þeim allar takmarkanir sem eru í tengslum við planinn: skráningarsvæði, innlegg, yfirflutningar, bílunar osv... Þessar takmarkanir geta sést uppsetð á hverjum planmsíðu í **Ultimate Multisite > Products**.

![Um þessa síðu og Síðu-límit hluti sýn takmarkanir planins](/img/account-page/site-limits.png)

Á hvíldum yfir **Medummskaflann þinn** geta viðskiptavinir klikkað á **Breyta** (Change). Þetta sýnir þeim allar tilfelli sem eru til við disponeringu og pakka/þjónustur. Ef þeir velja annar plan, verða takmarkanir þess orðast í stað takmarkanirnar á núverandi medlemmskaflanum - ekki er mikilvægt hvort þeir séu að nákvæma (downgrading) eða uppgraðum (upgrading).

En ef þínir viðskiptavinir velja að kaupa pakka eða þjónustur fyrir þennan núverandi medlemmskaflann - eins og meiri skráningarsvæði eða bílunar - verður ekki breytt núverandi medlemmskaflann, heldur eru nýjar pakkarin auðvitað við því viðaukt.

Litið á að kupónkóð notkun getist ekki í þessum síðu til breytingar medlemmskaflans. Ef viðskiptavinur notaði kupónkóða á fyrstu kaupinu af medlemmskaflanum, verður kóðinn betaldur einnig að nýjum medlemmskaflanum.

### Uppfræðing betalingsvísar:

Á reikningasíð í gegnum getum þínum viðskiptavinum að uppfærja reikningarsíða sína. Þau þurfa bara að klikka á **Update** nýtt við _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Ný vinnuvera mun sýnast fyrir viðskiptavinann þennan. Allt þeirra sem þurfa að gera er að fylla í nýtt heiti og klikka á _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Breiðing síða:

Til að láta viðskiptavinum breita síðuþema sína, þarftur að fara yfir í **Ultimate Multisite > Settings > Sites** og slá á úr möguleika **Allow Template Switching**.

Eftir það, á **Ultimate Multisite > Products**, veldu planunum þín og fara í tabinn **Site Templates**. Skilið það að möguleiki **Allow Site Templates** er slá á úr og á **Site Template Selection Mode**, er valdið möguleiki **Choose Available Site Templates**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Þú gætir að sjá allar tilfóstslegir síðaþema sem eru til við vefsíðuna þinni. Veldu það sem þú vilt gera til tilfóstslegra og það sem þú vilt ekki vera til fóstslegra fyrir viðskiptavini sem eru skráðir undir þessum plani. Skilið að þessi valkostur áhrifast einnig á skjama upplýsinga um betalningu, svo að éginn sem er veldið sem **Not Available** mun ekki sýnast á skráningasíðunni fyrir þennan plan.

En nú geta viðskiptavinir þín klikka á **Change Site Template** í sínum reikningasíðunni.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 sýnir breytilega skjama fyrir breiðing þema. Skjameinnin byrjar með **current-template card** svo viðskiptavinir geta séð hvernig fóstslegur er áfram áður en þeir velja nýtt.

Það er stöðugt net av tilfarga fyrir mögulega vísvaldir staflasíða sem eru sýnilegar þegar viðskiptavinir skoða valkostana sína. Þetta hjálpar þeim að samanbeita staflum sem eru leyfðir fyrir planinn þessar án þess að mistökka núverandi vali.

![Lista tilfarga fyrir staflasíða fyrir planinn](/img/config/site-templates-list.png)

Eftir að hafa sést það sem þeir vilja breyta í, munu þeim beitt á að staðfesta breytinguna.

![Dialogur til staðfestingar breytingar staflasíða](/img/account-page/template-switch-confirm.png)

Eftir að hafa skipt það á á svona staðfestingu og klikkt á **Process Switch** (Skipti stafla), munu ný staflasíða verið nota á netinu viðskiptavinin.

Viðskiptavinir geta einnig notað **Reset current template** (Viðbrjóta núverandi stafla) frá þessum panelni þegar þeir þurfa að setja stafluna aftur í þann sem er nýtt á. Þann sem skiptar stafla er kannski ólík við skiptingu á annarra staflans, svo að viðskiptavinir ættu að staðfesta það onlyf þegar þeir hafa skilning um að hvernig viðbrjótingin verða á innihaldi síðunnar.

### Að bæta með sérstökum domænum (Custom Domains):

Viðskiptavinir þín geta einnig að hafa valkost hingað til að bæta með sérstökum domænum fyrir þennan plan á sínu reikningasíðu. Til að leyfa viðskiptavinum að nota sérstökum domænum, ferðu í **Ultimate Multisite > Settings >** **Domain Mapping**.

Skipti á svona valkostinn: **Enable Domain Mapping** (Leyfi domæna mappa). Þetta munu leyfa viðskiptavinum þínum að nota sérstökum domænum á netverkstildi.

Gleymðu ekki að hafa líka á við hvernig domæna mappa er leyfð á produktbasis - þar sem þú getur takmarkað produkt til að neita viðskiptavinum notkun sérstökum domána.

Ferðu í **Ultimate Multisite > Products**. Veldu planinn sem þér passar og ferðu í tabann **Custom Domains** (Sérstök domænar). Skipti á svona valkostinn: **Allow Custom Domains** (Leyfi sérstök domænar).

![Tabur fyrir sérstök domænar með leyfisvalkostum til að leyfa sérstök domænar](/img/config/product-custom-domains.png)

Þetta leyfir öll viðskiptavili sem eru reiknaðir í þessum sérstaka plani að nota eigin domænar (custom domains). Á síðunni fyrir reikninginn geta viðskiptavinir þín lagt á eigin domén með því að klikka á **Add Domain** (Laga domén).

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Fyrsta glugn sem opnast sýnir viðskiptavinum þínum texta sem gefur þeim leiðbeiningar um hvernig þeir geta uppfærð DNS-skjalði sína til að gera þessa eigin domén að virkni á netinu þínu.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Þessi texti getur sést (þar sem þú ert það) í **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Hér er fullt sýn á skjaldi fyrir innstillinguna domén mapping:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Eftir að klikka á **Next Step** (Næstu skref), geta viðskiptavinir þín lagt á eigin doména námsn af þeim og velja hvort þessi eigin domén verður héraðar (primary). Skalnið er að viðskiptavinir þín geta notað fleiri en eina eigin domén fyrir vísitalinn sína, svo þeir geti velja hvaða einn verður héraðar.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Eftir að klikka á **Add Domain** (Laga domén), verður domænin lagt í reikning þess viðskiptavinarins. All þeir þurfa að gera núna er að breyta DNS-skjalðum þessar eigin doméns á registrarinn sínum fyrir domén.

### Breyta lykilheiti:

Inni reikninga-dashboardi geta viðskiptavinir þín einnig breyta lykilheiti með því að klikka á **Change Password** (Breyta lykilheiti).

![Change Password button on account page](/img/account-page/change-password-button.png)

Þetta mun sýna nýtt vindauga þar sem viðskiptavinir þitt verða að fylla inn núverandi lykilheiti og síðan lykilheiti nýs lykilheiti sem þeir vilja nota.

![Form til breytingu lykilheiti með lykilheiti núverjum og nýjum](/img/account-page/change-password-form.png)

### Fara-eina sviði:

Við havemdum einnig tveir valkostir sem eru sýnd á hluta **Fara-eina sviðs**: **Slettja vísitalinn** og **Slettja reikning**. Þau eru bæði í Fara-eina sviði því að þessar aðgerðir eru ótilboðar. Ef viðskiptavinir þitt slettja vefsíðuna eða reikningann hefur ekki möguleika á að fá hann aftur.

![Fara-eina sviði með valkostum Sletta vísitalinn og Sletta reikning](/img/account-page/danger-zone.png)

Ef viðskiptavinir þitt klikka á nýttan af þessum tveimjum valkostum, mun þeir sjá vindauga sem þeir verða að skila inn til að slá á valkostningi til að fjarlægja vefsíðuna eða reikningann og þeir verða varningu um að þessi aðgerð getur ekki vegna.

![Staðfesting vindauga fyrir Sletta vísitalinn](/img/account-page/delete-site-confirm.png)

![Staðfesting vindauga fyrir Sletta reikning](/img/account-page/delete-account-confirm.png)

Ef þeir slettja vefsíðuna sína, er reikningurinn og samþættingin (membership) þín ekki áhrifast. Þau munu bara mistökka allan innihald á vefsíðunni sína. Ef þeir slettja reikningann hefur allar vefsíðurnar, samþættingar og upplýsingar um þennan reikning sem verða mistökka.
