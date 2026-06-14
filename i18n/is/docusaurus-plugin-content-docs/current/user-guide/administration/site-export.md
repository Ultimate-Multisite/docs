---
title: Útboð síða
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Útskiðing staðar

Í admin-skýrslu **Site Export** getur nýtingarstjórnendur samkvæði eina staðar, eða heildar netverk, í nýjar nedlunarsamninga fyrir migra, uppfærslur, eða yfirferðun.

## Útskiðing eina staðar

Gangi **Ultimate Multisite > Site Export** og veldu **Generate new Site Export**. Veldu subsite sem þú vilt útskiða, síðan veldu hvort arkívið skali á upplufum, pluginum og þemarum.

Þegar útskiðið er fullyð í, nedlun ZIP-ins frá lista **Existing Exports**. Útskiðingasamningar (ZIP) eru nú með sjálfskynnu `index.php` og `readme.txt`, svo arkívið geti laðast upp á nýtt host og starfa án þess að fyrst installa sérstaka plugin fyrir innleiðingu.

## Útskiðing heildar netverkets

Brugðu **Network Export** á yfirskrifum Site Export eins og þú þarft eina arkívi sem inniheldur allar subsites í netverkinu. Þetta er hulega fyrir migra host-migra, öryggisþróunafyrstæði (disaster-recovery drills) eða uppbygging á staging þar sem hvert subsite þarf að ferðast saman.

Þar sem netverskunútskiði getur verið margfalt stórrri hámarki en útskiði eina staðar, körfuðu það í gang undir tíma með lítilli trafiki og staðfesti að tölvun fyrir uppluf, plugin, þemur og gerð ZIP-a sé viðkomandi.

### Network Import Bundles

Beginning with Ultimate Multisite 2.12.0 getur Site Exporter gera **network import bundles** — sérstök arkívi sem eru sniðnir að einföldum uppfærslum netverkets staðar. Network import bundle inniheldur allar nauðsynlegar lausnir og metadata til að uppfærja fleiri staðar í nýja netverskunútsbrúna.

#### Gera network import bundle

1. Gætu í **Ultimate Multisite > Site Export**
2. Klikk á **Generate new Network Export** (Generera ny nettverksexport)
3. Vel **Network Import Bundle** sem exporttípa
4. Vel hvort þú vilt innleiða uppladdun, plugin-ir og þæmar
5. Klikk á **Generate** (Generera)
6. Lasta ned ZIP-bundleinn frá lista **Existing Exports** (Til að finna hefurðu það í listanum fyrir núverandi exportar)

#### Til að nota með Network Import Bundle til að skila upp
(Restoring from a Network Import Bundle)

Til að skila upp staðir með network import bundle:

1. Installera Ultimate Multisite á miðstæðarvefsstöðuna þinni (target host)
2. Fullfær multisite setup wizardinn
3. Gætu í **Ultimate Multisite > Site Export** á nýr nettverkinu
4. Klikk á **Import Network Bundle** (Innafs network bundleinn)
5. Lasta upp ZIP-bundleinn með network import til að skila upp
6. Fylgja skráningstefnum á skjámyndinni sem eru í bundleinn
7. Innafs skráningurinn mun skila upp allar staðir, innihaldi þeirra og uppsetningargildi

Network import bundles fyrirhaldast:
- Innihaldi staðrar (posts, pages, custom post types)
- Uppsetningargildi og valkostir staðrar
- Notendurollar og réttindi
- Plugins og þæmar (ef þeir eru í bundleinni)
- Media uppladdun (ef þeir eru í bundleinni)
- Handnullar database-taflor og data

## Installera sjálfskynnd export ZIP

Til að skila upp sjálfskynnda ZIP á nýr vefsstöðu:

1. Lasta upp innihaldi exporta ZIP-sins í web root (vefsstæðuna)
2. Opna `index.php` sem laust upplaste í brauzarstjórn
3. Fylgja skráningstefnum á skjámyndinni sem eru í bundleinni exportpakkann fyrir sérstaklega athugasemdir um exportinn áður en þú fjölfráðar tímabundin laustu
4. Sjá í `readme.txt` sem er í bundleinni til sérstaklega athugasemdir um exportinn áður en þú fjölfráðar tímabundin laustu

Viss fyrir nánari uppsetningargildi og uppladdunarupplýsingar um viðbót (addon), sjá [Site Exporter addon documentation](/addons/site-exporter).

Viss fyrir eða innihald í eininguna sem er viðbótt á Ultimate Multisite 2.9.0, sjá [Export & Import](/user-guide/administration/export-import).
