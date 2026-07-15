---
title: Céadtaíocht Míseartha Sovereigneach
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifike Migraíocht Sovereín

In Ultimate Multisite: Multi-Tenancy 1.2.0 tá commanda de verifike WP-CLI chun migraíocht teannant sovereignty a dhéanamh. Useat na commanda seo nuair níl an teannant, an fáil SSO, nó an install aislaigh ag déanamh ar chuid asraithe.

## Commanda a dhéanamh {#commands-to-run}

Déan verifike ó chomhthéacs WordPress:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Useat an ID site chun an teannant a bhfaidh a migriú. An commanda ar bith acu a chiallaíonn go bhfuil an teannant ag déanamh iarracht ar data leagach de chuid asraithe. An commanda de dhá is é a chiallaíonn go bhfuil na jobs sovereign push ag déanamh agus ag draint.

## Faoiadh common {#common-failures}

### Ní a bhíonn grantacha database ag tairiscint {#database-grants-do-not-match-the-host}

Má tá an verifike ag teacht ar faoiadh grantach nó writer-user failures, léiri an host database a chur ar fáil. Is é MySQL grant hosts ag déanamh éifeachtach ar chuid: `localhost`, `127.0.0.1`, agus ainm service container. Athrúchais an binding host teannant nó na grantacha database, agus ansin déan verifike ar fad.

### Níl Bedrock nó installa local ag curte sinte {#bedrock-or-local-installs-cannot-connect}

Le linn atá Bedrock nó socket installs ag curte sinte, is féidir leis an database a bheith ag `localhost` while an runtime a chomhconnú tríd an chuid address normaliseat. Is é Version 1.2.0 ag normaliseáil stráité host ar chuid amháin, ach leathanach host custom níl ag déanamh éifeachtach ar grantacha database.

### Níl an queue push async ag draint {#async-push-queue-does-not-drain}

Má níl `verify-sovereign-push` ag deán, léiri Action Scheduler nó an async runner a chur ar fáil. Déan cleamadh na jobs failte tar éifeachtach tar éifeachtach chun na féachaint a dhéanamh má tá siad safe ag teacht ar ais nó a bhaint.

### Tá cúilte úsáid teannant an-chomhthéacs ag déanamh éifeachtach {#tenant-user-count-is-wrong}

Is gcurann an migraíocht úsáidí do chuid teannant sovereignty. Má tá an install user a bheith ag déanamh tú, déan verifike ar an step de provisionú úsáidí ar fad prima chun SSO a dhéanamh tar éifeachtach.

### Níl fáil ar SSO visit {#sso-visit-is-rejected}

Is é ag cur chuir autologin do tenant (tenant) an-stáileach (stateless), is féidir leis an domáin do tenant, pin an t-uinntithe (origin pin), an t-amachas an t-token (token purpose), an nonce, agus an t-amachas (expiry) a bheith ag éifeachtar. Féach ar an t-URL do tenant chun cinnte agus déan an login go dtí an t-amachas tar éis a dhéanamh ar an SSO visit.

## Cuireann tú ar ais? {#when-to-retry}

Cuireann tú an t-bhreithniú (verification) ar ais tar éis gach cur chuimneamh inbhalla (infrastructure change). Ná déan athrú ar an traic prodúcth (production traffic), ná déan an daoine (source data) nó ná raibh an t-creidheanní migréidiú (migration credentials) ag an t-amachas go dtí a bheith an gcuid cur chuimneamh gach.
