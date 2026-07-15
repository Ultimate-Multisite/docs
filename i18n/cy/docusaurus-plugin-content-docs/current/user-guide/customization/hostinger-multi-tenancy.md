---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 yn ychwanegau multi-tenancy Hostinger felly, gan gynnwys domainau a ddefnyddir i cyfathogh mewn cyflwyniad tenant souveren gyda'r cyfathrebu domain Hostinger sydd ar gael.

Defnyddiw y chwanegau hwn pan mae domainau tenant a gweithgareddau tenant yn cael eu cyfarwyddo drwy Hostinger hPanel.

## Nodau paratoi {#setup-notes}

1. Cyflawni'r cyfathrebu Hostinger sydd ar gael o ddefnyddio mewn **Ultimate Multisite > Settings > Host Integrations**.
2. Cynhaltio bod y token API Hostinger yn gallu uchelau'r domain neu subdomain y cael ei ddefnyddio.
3. Gynllunio'r addon Multi-Tenancy.
4. Cyflawni'r strategaeth aisglwyddo tenant cyn cyhoeddi'r tenant.
5. Runo'r ffurf gweithgareddais am ychwanegau (migration verification workflow) cyn anfon trafau proddeol i'r tenant.

Mae'r chwanegau Hostinger yn defnyddio'r cysylltiad Hostinger ar gyfer weithgareddau ar ochr y host. Rhaid iddo'r DNS dal i ddangos i'r cyfrif Hostinger cywir, ac mae hanesau account hPanel yn parhau i golygu.

## Changau yn bennod-gynnwys chwanegau {#capability-specific-changes}

- Gallai cael tenant souveren gyda gweithgareddau domain sy'n ymwybodol o'r host.
- Mae strwythurau host database ar y methau cyfathrebu cyn cael cyflwyniad ychwanegau (grant verification).
- Rhaid i tenantau a gyfarwyddwyd gan Hostinger defnyddio'r gael db database a ddangos yn hPanel heb fod y runtime WordPress yn ei angen i ddefnyddio amrywiol.
- Mae y mynediad SSO yn cyffredin ar y domain tenant yn cael ei ddefnyddio i gyflwyni'r tenant sydd ar gael gan Hostinger.

## Cynllunio hostinger tenants {#troubleshooting-hostinger-tenants}

- Os mae cyflwyniad tenant yn fail, gwirionedd ychwanegwch bod y domain wedi'i chysylltu â'r account Hostinger.
- Os mae cyflwyniad database yn fail, gymparu'r username DB tenant, enw db, a cysylltiad host gyda hPanel.
- Os mae **Visit (SSO)** yn fail, gwirionedd ychwanegwch DNS a SSL yn gweithredu ar gyfer y domain tenant.
- Os mae teidio'r system yn gadael risgellau host ar ôl, talyb unrhyw db, benywirau, neu ffurf o ddefnyddwyr sydd ar gael mewn hPanel ar ôl cyflwyno'r cadarnhau'r back-upau.
