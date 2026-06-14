---
title: Export y gartref
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Export y Safl

Mae'r pagedd admin **Site Export** yn sylw'n gael eich rhaglenau (network administrators) i gwneud olygu un safle, neu'r holl rheol (network), i gael ei archiwio i ddefnyddio ar gyfer migraiddio, baka, neu gweithrediad trefnu.

## Exportio un safle

Rydych chi ar **Ultimate Multisite > Site Export** a chwilio am **Generate new Site Export**. Dewch chwilio y subsite sydd eich bod eisiau exportio, yna dewch chwilio o fewn aroli (archive) bydd yn cynnwys uploads, plugins, a themes.

Pan fydd yr export wedi'i gwblhau, deallwch y ZIP o'r llyfr **Existing Exports**. Mae ZIPs exportio ar hyn o bryd yn cynnwys `index.php` sy'n deithio yn ei hun (self-booting) a `readme.txt`, felly gallai'r archiw cael ei ddefnyddio ar gyfer host newydd a entynnu heb ddechrau installio plugin importwr parhaol.

## Exportio'r holl rheol

Defnyddiwch **Network Export** ar pagedd Site Export pan oes gennychu angen un archiwio sydd yn cynnwys pob subsite yn y rheol. Mae hyn yn ddefnyddiol قبل migraiddio host, gwylio'r gweithrediadau cael anghyddu (disaster-recovery drills), neu adnewidiadau mewn stadiad lle mae'r un subsite'n angen mynd gyda'i gilydd.

Oherwydd bod export rheol yn gallu fod yn fawr iawn na export safle unig, gwneud ei chwarae yn ystod amser o ddefnydd (low-traffic window) a sicrwch bod y storiad cyflwyniadau'n cael ei gael i'r cyfathrebu cyflym ar gyfer uploads, plugins, themes, a ZIPs a gennychu.

### Network Import Bundles

Eryng gyda Ultimate Multisite 2.12.0, gallai Site Exporter cynrychioli **network import bundles** — archiwioedd specialaidd a ddynol i'r ddefnydd o safleoedd yn y rheol (network-wide site restoration). Mae network import bundle yn cynnwys pob ffeil sydd angen i gael yr holl ffeiliaid a metadata i adnewidiariad safleoedd am ystod newydd.

#### Cynrychioli Network Import Bundle

1. Ymddwch i **Ultimate Multisite > Site Export**
2. Clic ar **Generate new Network Export** (Genera new Export o Rheoliad Cyd-gynllun)
3. Dewch **Network Import Bundle** fel tiwrdd export (as the export type)
4. Dewch a wybilio a chyflwyno'r cyfathrebuau, y pluginau a'r thymau (Choose whether to include uploads, plugins, and themes)
5. Clic ar **Generate** (Genera)
6. Ddych chiwffordio'r ZIP bundle o'r llyfrgell **Existing Exports**

#### Reddodi o'r Network Import Bundle

I redi sites o'r network import bundle:

1. Rheoli Ultimate Multisite ar eich host target (target)
2. Gwylchwch y gweso'r set-up multisite (multisite setup wizard)
3. Ymddwch i **Ultimate Multisite > Site Export** ar y network new (new network)
4. Clic ar **Import Network Bundle** (Import Network Bundle)
5. Ddych chiwffordio'r ZIP file o'r network import bundle
6. Gyflwynwch y cyfarwyddiadau i'r gwaith yn y ffurf (on-screen)

Ychwanegwch y network import bundles:
- Cynnwys y cynnwys y site (posts, pages, custom post types)
- Setiau a opsiynau y site (Site settings and options)
- Grolau a chyflwynion ybysgolion (User roles and permissions)
- Pluginau a thymau (if included in the bundle)
- Cyflwyniadau media (if included in the bundle)
- Cwmiadau database a data (Custom database tables and data)

## Rheoli ZIP export sy'n gweithio yn ei hun ar host newydd

I redi ZIP sy'n gweithio yn ei hun ar host newydd:

1. Gyflwynwch y cynnwys o'r ZIP wedi'i export i'r web root target (target)
2. Agorwch y `index.php` a ddefnyddiwch yn y browser
3. Gyflwynwch y cyfarwyddiadau set-up ar y ffurf o'r package export sydd wedi'i gweithio (bundled)
4. Ddych chiwffordio'r `readme.txt` sydd wedi'i gweithio i ddefnyddio'r export ar gyfer nodau, cyn gwaredi'r fyliau temporaidd (temporary files).

Ar gyfer set-up a chyflwyniadau penodol y addon, gweld y [Site Exporter addon documentation](/addons/site-exporter).

Ar gyfer y tool un-site sydd wedi'i ychwanegu mewn Ultimate Multisite 2.9.0, gweld [Export & Import](/user-guide/administration/export-import).
