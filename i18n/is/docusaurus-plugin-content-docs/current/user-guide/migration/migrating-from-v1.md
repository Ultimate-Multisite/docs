---
title: Til að migra úr V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Átil migra til V1

## Ultimate Multisite hefur skilið sig frá upprunalegu 1.x fjölbreyttu upplýsingum í 2.x fjölbreyttu upplýsingum.

Ultimate Multisite útgáfa 2.0 og hærri er fullkomn omskráning kóða, það sem þýðir að það er lítil sama til að deila á milli gamla og nýrinn útgáfur. Til þess vegna þegar þú uppgrunnar frá 1.x til 2.x þarf að migra gögnum þínum í formæt sem nýjar útgáfur geta skilgreind.

Átr setningum, Ultimate Multisite 2.0+ **held með sér migra** í kjarna upplýsinganna sem getur greint gögn frá gamla útgáfunni og breytt þau yfir í nýja formæt. Þessi migra fer áfram á síðu **Setup Wizard** fyrir útgáfu 2.0+.

Þessi læoni hefur tilgangi að sýna hvernig migraninn virkar, hvað þú getur gera við feli og hvernig þú getur lösa vanda sem gæti uppstått á meðan þessum ferli.

_**VIÐTÖK: Fyrir að byrja uppgrunni frá útgáfu 1.x til útgáfu 2.0, skoðaðu vel að þú ert skráður einn upplýsingarinn á vísitalinn sínu**_

## Första skref
Första skref er að draga niður .zip file-inn fyrir plugin og installera útgáfuna 2.0 á nýrnetverkshættumstafnum þínum (network admin dashboard).

Eftir að þú [installar og aktivarar útgáfu 2.0](../getting-started/installing-ultimate-multisite.md), mun kerfið sjálft greina að Multisite þitt rennir á gamla útgáfunni, og þú sjáðu þennan texti uppstofa á upphafi plugin síðunnar.

_**VIÐTÖK:** Ef þú hefur Ultimate Multisite 1.x sett á multisite þínu, munu þú hafa valkostning að skipta plugin-inn með útgáfunu sem þú varðir just. Vinsamlegast, halda þér í það og klikka á **Replace current with uploaded**._

<!-- Mynd er ekki til að sjá: Plugin síða sem sýnir valkostning að skipta v1 með upplufnu v2 útgáfu -->

Næsta yfirskrif er til að sýna þér hvaða gamla add-ons þú hefur sett upp saman með v1.x. Hún mun hafa leiðbeiningar um hvort útgáfan sem þú notar sé tölvulega viðeigandi fyrir v2.0 eða hvort þú þarft að nýta upp uppfærð útgáfu add-onsins eftir migraðann.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Þegar þú ert klár til að halda áfram, geturðu klikka á knappa sem hefur texta **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Það mun leiða þig svo í síðuna við uppsetningu með nokkrum velkomnum textum. Þú þarft bara að klikka á **Get Started** til að fara yfir á næsta yfirskrif.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Eftir að hafa klikkað á **Get Started**, mun hún leiða þig í uppfærslu fyrir uppsetningu (*Pre-install Checks*). Þetta sýnir þér upplýsingar um kerfið þitt og WordPress uppsetninguna þína og segir þér hvort það uppfylli **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Næsta skref er að skrifa inn lísensnapi Ultimate Multisite og aktiva plugininn. Þetta mun tryggja að allar eiginleikar, í gegnum add-onsins, séu til við hitið á síðuna þinni.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Eftir að hafa skrifað inn napið þitt, klikkaðu á **Agree & Activate**.

Eftir aktivað lísensnann geturðu byrjað með sjálf umsetningu með því að klikka á **Install** á næstu yfirskrif. Þetta mun sjálft skapa nauðsynlegar lausnir og database sem eru nauðsynlegar fyrir v2.0 að virka.

## Enn er migrasjonin

Migratorinn hefur innbyggd tryggleikafunn sem skynir þitt heilt multisite til að sjá sér um að allar upplýsingar í Ultimate Multisite geta migrað án þess að vera nokkrar áhyggjur. Klikkaðu á knappa **Run Check** til að byrja ferlið.

### Með villun

Ef þú fær villun, þá þurfaðu að tengjast viðkerningaferlið okkar svo þeir geti hjálpað þér með að laga villuna. Skildu að **veita villunarskjalinu** þegar þú ert að skapa tilkynningu (ticket). Þú getur nýtt skjalinu eða klikkað á linkinn sem segir "contact our support team". Það opnar hjálpaboxina á hönnuninni á huntu yfir síðuna þinni með fólksferlið fyrir þig, sem felur villunarskjalin undir orðlisti.

_**Þar sem kerfið fann villuna, gætirð ekki haldið fram við migrað til úrferð 2.0. Þú getur þá haldið fram við úrferð 1.x til að halda nýtingu netverkisins þitt þar sem villan er lagð á.**_

### Á meðan villun
Ef kerfið finnur ekki villuna, sjáðu þú á líkjing af árangri og knappa **Migrate** í undirskörvi, sem leyfir þér að halda fram við migrað. Á þessum yfirskrifum mun þig minna um að skapa upphafsvarið á database-inum fyrir þótt við sterklega ráðum þér til þess. Klikkaðu á **Migrate** ef þú hefur jákvænt upphafsvarið.

Og það er allt sem þarf!

Þú ert að getja séð áfram með uppsetninguna í Wizard til að upptíða logonav og öðrum mögulegum þingum á netinu, eða byrja að hleðast menu-ann í Ultimate Multisite 2.0 og nýja greinar hans. Byrja og havið þér nokkrar fyrirtækjaskynslur!
