---
title: Cyflwyniad Mynediad Sovereiniol
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Gwylio'r Mynediad Sefydliol {#sovereign-migration-verification}

Mae Ultimate Multisite: Multi-Tenancy 1.2.0 yn cynnwys adferiadau WP-CLI i mynediadau tenantau sefydliol (sovereign). Defnyddiwch nhw pan fod y mynediad tenant, y myfylch SSO, neu'r seiliedigall isgoel nid yn ymddygi fel yr oedd yn cael ei gofyn.

## Cyfeiriadau i chwarae {#commands-to-run}

Chwarae adferiad o'r install WordPress yn y rheol:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Defnyddiwch y ID y site ar gyfer y tenant sydd yn cael ei mynediad. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol. Mae'r cyfeiriad cyntaf yn gwerto bod y tenant nid yn cyffredin â data legacy o'r rheol.

Mae'r cyfeiri

Mae cyflwyniad autologin o ddeallau (stateless tenant autologin) yn hanfod ei fod yn gyfathogh: mae angen i'r domenaeth y deall, pin y gorsedig (origin pin), peth y token, nonce a'r amser cyflwyniad (expiry) fod yn gyfathogh. Cynwain gwneud gwirioneddol y URL y deall yn llwyr yn ddiogel ac bydd y cyflwyniad ychwanegol yn cael ei ceisio yn rhywfaint ar ôl y cyflymiad SSO.

## Pan fyddwch yn ceisio eto {#common-failures}

Ceisio ail-gyfeiriad ar ôl chwarae'r newid mewn ffairiad (infrastructure change) gyda'i gael. Peidiwch â newid y traffic proddection, dod â'r data gyffredinol allan, neu dod â'r cyfrifau migras yn cael eu taro heb fod pob gwyliau cyflwyniad wedi mynd i'r ddiwedd.
