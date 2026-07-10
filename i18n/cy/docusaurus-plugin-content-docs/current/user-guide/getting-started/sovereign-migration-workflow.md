---
title: Gweithredol Mynediad Sovereigol
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Gweithro Cyfderau Mynolion {#sovereign-migration-workflow}

Ultimate Multisite: Multi-Tenancy 1.2.0 yn ychwanegau cyfderau mynolion i'r mewnol i'r gweithredig o'r subsite standard i'r gweithredig tenant souverain.

## Cynllunio cyn i ddechrau {#before-you-start}

Cynllunio bod cymryd:

- Cyfderau cyfyngedigol o'r safle gwreiddiol (source site).
- Ychwaneg addon Multi-Tenancy yn gweithredol.
- Databasa tenant ymwnebu, gyfeiriad system farchnad (filesystem root), a ddaen domain yn barodol.
- Cyfathrebu databasa host sy'n cyfathrebu â'r adran destyn.
- Cyfathrebu cyffredinau WP-CLI ar gyfer y rheol.

## Cynllunio canlyniadwyd {#recommended-workflow}

1. Paratoi databasa tenant a system farchnad.
2. Cyfeiriwch neu sicrwch setegau isolasi tenant.
3. Rannu'r gweithredig tenant.
4. Cyfathrebu neu gyffredinau byweth tenant.
5. Tynnu'r gweithredig asgynol (async migration jobs).
6. Rannu'r cyfderau mynolion o'r gweithredig.
7. Ymddangos y tenant gyda SSO.
8. Gwylio DNS neu rheoli yn unig ar ôl bod y cyfderau wedi cael eu cyffredin.

## Cyfderau gyfderau {#verification-gates}

Mae'r cynllunio cyfderau yn gwerto'r gweithredig o'r amgylchedd rhwng chwaraeon:

- Mae'r schema tenant yn bodoli ac yn gallu cael ei ddefnyddio gan y gweithredig databasa tenant.
- Mae'r host databasa a cyfathrebu wedi'i gyfeiriadau iawn.
- Mae bywethau tenant yn bresennol ac yn cyfathreg â'r cyfrifau o'r gweithredig install user souverain a'r ddefnyddiol.
- Gall y rheol asgynol (async push queue) tynnu'n llwyddiannus.
- Nid oes angen gyfeiriadau data ar ochr y rheol legacy i'r tenant souverain.

Gwneidio â phrydion cynllunio fel blocau cyn ddechrau. Gyfwrdd y problem databasa, byweth, queue neu rheoli a rannu'r cyfderau eto yn ôl cyn dangos y tenant i'r cyddeeion.

## Ymddangos gyntaf mewn proddection {#first-production-visit}

Ar ôl bod y cyfderau wedi cael eu cyffredin, defnyddiwch **Visit (SSO)** o'r screen rheoli safle ar gyfer y cyfarfod admin gyntaf. Mae hyn yn sicr y rheoli tenant, y gaelion token SSO, y cyd-gynllunio origin, a'r cyfathrebu byweth tenant yn un adran control.
