---
title: Gweithredoedd Tyn-gwrthyn
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operacioedd Tenantau Sovereigennol

Ultimate Multisite: Multi-Tenancy 1.2.0 yn ychwanegau o ddefnyddio ar gyfer tenantau souvereniol: subsaites sy'n rhedeg gyda'u hunain db, gwrthdrefn fylfach (filesystem root), a cyd-fyndiad cyflwyniad (routing context) ond yn parhau i fod yn wellgynol gan y admin y rheol.

Defnyddiwch y dogfennau hwn paneddefennu safonau cleient, cyfathriadau am gyflym o safleoedd oer, neu melaethau sy'n symud subsaites standard i ffurf infrastruttura souvereniol.

## Pa beth mae newid ar gyfer y adminau {#what-changes-for-administrators}

- **Autologin tenant yn ddefnyddio statel** — Gallai adminau y rheol mynychu tenant souvereniol heb ei ddefnyddio statau seswn sy'n parhau i gydol. Mae’r token SSO yn cael ei gyfeiriadwch yn benodol, wedi'i cyflwyno ar gyfer oryddu (origin-pinned), wedi'i gwarchu o redeg (replay-protected), a wedi'i hanesyddio i ddefnyddio am amser breiniol.
- **Cyfathriadau routing sy'n ymwybodol o souvereniol** — Mae cyfathriadau y rheol aisgolyguol a tenantau souvereniol yn cael eu cyflwyno drwy alltyddiad safle site unig, gan ddifynnu diffygion ychwanegol rhwng y llwybrau installiadau uchel a newydd.
- **Stadu melaeth wedi'i gwylio** — Mae'r gwylio melaeth yn gwerto cyfathriadau cyflog, permisiwnwyr ysgrifennu db, status ddwyn y queue, a ddefnyddio tabiau llawn oer قبل i fod tenant yn cael ei golygu fel gwbl.
- **Teidiau diogel** — Mae teid diogel yn tynnu cyflogau tenant yn llwyr gan gyflwyno'r tenantau wedi'u ddifynnu felly nid oes y cyflogau db anghyfrifol yn parhau ar gael.

## Mynychu tenant souvereniol {#visiting-a-sovereign-tenant}

1. Gymelwch **Network Admin > Ultimate Multisite > Sites**.
2. Dewch y tenant souvereniol.
3. Defnyddiwch **Visit (SSO)** pan fydd yn cael ei ddefnyddio yn lle copio cyflogau neu creu acaethau admin tempora.

Mae'r ffordd mynychu yn creu token cyflwyniad breiniol ar gyfer y tenant hwn a redeg yr SSO mewn llyfr audit tenant. Os mae'r bot yn fail, gwylwch bod y domain tenant yn cael ei ddefnyddio i ddod i'r installiad a'i cael ei ddefnyddio ac os gallai'r tenant cyrraedd y endpoint SSO o'r rheol.

## Cyflwyniad operacioedd safleoedd oer {#remote-site-operations-checklist}

Ar ôl newid tenant souvereniol neu oer, gwylwch:

Mae'r domena tynol yn cyfeirio at y host sy'n rhoi'r fylfach o'r tynol.
Mae'r host ddata o'r tynol yn cyflwyno gyda'r cysylltiad host a gaelwyd ar gyfer y install hwnnw.
Mae'r adferiadau (migration verification commands) yn pasio ar gyfer y tynol.
Mae rheolion (queues) adferiad asgregol (Async migration queues) yn cael eu ddwyn cyn gwneud newidiadau i DNS neu eiddo.
Mae'r benwerth admin o'r tynol wedi cael ei chyfynnu yn ystod y adferiad ac gallai log in drwy SSO.

## Deletio tynoliadau souveren (sovereign tenants) {#deleting-sovereign-tenants}

Mae deletio tynol souveren yn ddwfn. Cyn fyddwch chi'n gwneud y cadarnhau ar gyfer y bakaun a chyddeall, yna delio o'r screen rheoli'r safle. Mae'r ffordd teidio 1.2.0 yn tynnu gredynau ddata o'r tynol fel rhan o'r glânu, ond bydd y adminau yn gallu gwaredig bod y bywyr ddata a'r fylfach wedi mynd i'r gwaith pan defnyddir panelau host allanol.

:::warning
Peidiwch â delio tynol souveren tra'r adferiad (migration verification) yn parhau neu tra'r gwaith push asgregol (async push jobs) yn cael eu cyflwyno. Awaitwch y cadarnhau i ddod i ben, felly nad yw'r teidio yn tynnu gredynau sydd angen eu cyfieithu gan y gwaith a'i ddefnyddio.
:::
