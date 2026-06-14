---
title: Ymddygiad WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Ymystyrchu Integracio gyda WPMU DEV

## Oglampiad
WPMU DEV yw ffurfwr WordPress amlyg o ddefnyddio sy'n cynnig gweithrediadau, pluginau a serchion ar gyfer safleoedd WordPress. Mae’r integracio hwn yn sylw'n cyflwyno synchiad domena'n awtomatig a rheoli certysydd SSL rhwng Ultimate Multisite a gweithrediad WPMU DEV.

## Adranau
- Synchiad domena'n awtomatig
- Rheoli certysydd SSL
- Gorffenion gyfystroedd certysydd SSL yn gyfoethog

## Cyflwyniadau
Mae'r integracio yn gweld felly byddwch yn gweithredu ar WPMU DEV ac yn defnyddio API sydd wedi'i cyflwyno. Nid oes angen i chi roi unrhyw ddefnyddion ychwanegol os ydych yn gweithredu ar WPMU DEV.

Mae'r integracio yn gweld am y bresennol o'r constant `WPMUDEV_HOSTING_SITE_ID`, sydd wedi'i cyflwyno'n awtomatig pan fod yn gweithredu ar WPMU DEV.

## Cynllunau Rheoli

### 1. Gweld WPMU DEV Hosting
Os ydych yn gweithredu ar WPMU DEV, bydd y constantau sydd ei angen wedi'i cyflwyno. Gweld i fod:

1. Y constant `WPMUDEV_HOSTING_SITE_ID` wedi'i cyflwyno mewn anghytuntiad eich amgylchedd
2. Mae chi'n cael rhywbeth WPMU DEV ar gael gyda chwarae API

### 2. Gynllunio'r Integracio
1. Yn eich admin WordPress, mynd i Ultimate Multisite > Settings
2. Mynd i'r tab "Domain Mapping" (Cyflwyniad Domena)
3. Scroll i lawr i "Host Integrations" (Integracio Gweithrediadau)
4. Gweld y WPMU DEV integration yn llai
5. Clic ar "Save Changes" (Cadw newidiadau)

## Sut Mae'n Gweithio

### Synchiad Domena
Pan cael domena wedi'i cyflwyno mewn Ultimate Multisite:

1. Defnyddir y integracio API WPMU DEV i drosu'r domena i'ch cyfrif gweithrediad
2. Mae'n drosu'r ffurf www o'r domena hefyd yn awtomatig
3. Mae WPMU DEV yn rheoli'r cyflwyniad domena a'r cyfleu certysydd SSL

### Rheoli Certysydd SSL

Mae'r cyfathrebu wedi cael ei sicrwydd i sicr ychwanegu'r amserau gyfyngiad SSL ar gyfer hostyngiad WPMU DEV, gan fod yn gallai angen amser i ddarlledu a chwarae certyddion SSL. Yn ddefnyddiol, bydd hi'n ceisio cyfyngiadau cyfyngiad SSL i'r 10 gellid, yn gyfuno â'r 5 cyfyngiad cyffredinol.

## Notedion pwysig

### Ailta'r domenaeth (Domain Removal)

Ar hyn o bryd, nid oes gan API WPMU DEV ffordd i ddanhau domenaethau. Pan cael ei danhau domenaeth mewn Ultimate Multisite, bydd y domenaeth yn parhau i'r cyfrifau eich cyfrifau hostyngiad WPMU DEV. Byddwch yn angen i'ch danhau'r manwl o'r dashboard hostyngiad WPMU DEV os oes angen.

### Cyfyngiad API (API Authentication)

Mae'r cyfathrebu yn defnyddio'r golchi API WPMU DEV sydd wedi'i cadw mewn database WordPress fel opsiyn `wpmudev_apikey`. Mae hyn yn cael ei setio'n awtomatig pan mae eich safle wedi'i cysylltu â WPMU DEV.

## Cynllunio (Troubleshooting)

### Pัญหาau gyda chysyllti API
- Gwylio bod eich safle wedi'i cysylltu'n dda â WPMU DEV
- Proffwch bod y opsiyn `wpmudev_apikey` wedi'i setio mewn database WordPress eich
- Sicrhewch bod eich cyfrifau WPMU DEV yn weithredol

### Pัญหาau gyda certyddion SSL
- Gallai fod amser i WPMU DEV ddarlledu certyddion SSL (tywyll wrth 5-15 minuty)
- Mae'r cyfathrebu wedi'i setio i chwarae'r 10 gellid ar gyfer certyddion SSL
- Os nad oes y certyddion SSL yn cael eu ddarlledu ar ôl amserau cyfyngiadol, gwahidi'r cefnogaeth WPMU DEV

### Domenaeth nid wedi cael ei ddefnyddio
- Proffwch y logau Ultimate Multisite ar gyfer unrhyw mesg eros
- Sicrhewch bod y domenaeth nid yn cael ei ddefnyddio'n ddyddiadol i WPMU DEV
- Sicrhewch bod eich plan hostyngiad WPMU DEV yn cefnogi'r amserau domenaethau sy'n cael eich ychwanegu
