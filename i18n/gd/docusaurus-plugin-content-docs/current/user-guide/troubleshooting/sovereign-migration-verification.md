---
title: Thine aithrisachadh na mion-raidhean
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Verifikeach Mòradh Sovereigne {#sovereign-migration-verification}

Ultimate Multisite: Multi-Tenancy 1.2.0 ma tha commandaichean de WP-CLI airson miorraichean (migrations) de tenant sovereignty. Rinn an t-earrach nan commandaichean seo gu robh a' chluarachd a' tòiseachadh air a' cheann, a' fhaighinn SSO, no a' sgaidh a' chluarachd a' tha a' gineall.

## Commandaichean a rinn {#commands-to-run}

Rinn an t-earrach de WP install WordPress a' chluarachd:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Usgaidh an ID site airson an tenant a tha a' fhaighinn. An t-earrach a' chluarachd a' cheann a' faicinn gun eil an tenant ag iarraidh data leagach (legacy) de latha. An t-earrach a' eile a' cheann a' faicinn gu bheil na jobaichean sovereign push ag obair agus a' chluarachadh.

## Fàiltean a tha a' gineall {#common-failures}

### Nàth a tha grantadaich de database a' tòiseachadh air an host {#database-grants-do-not-match-the-host}

Tha earrach a' cheann a' faicinn fhailltean (grants) no writer-user failures, rinn a' chluarachd an host database a' tha a' tòiseachadh. Tha `localhost`, `127.0.0.1`, agus ainm seirbheisg container gu leathan MySQL grant hosts. Athroghainn an binding host tenant no grantadaich de database, a losgaidh an t-earrach a' cheann.

### Fhàiltean Bedrock no local chaidh a' chluarachd {#bedrock-or-local-installs-cannot-connect}

Tha Bedrock agus socket installs a' faicinn an database ag tòiseachadh air `localhost` mar a tha an runtime a' tòiseachadh gu leithid air an fhàilteachadh (normalized address). Tha Version 1.2.0 a' chluarachd strìnghean host de sàmhach, ach eadar-dheargadh hosta a' chluarachd gu sgaidh le grantadaich de database.

### Chaidh an t-uisge push async a' chluarachadh (drain) {#async-push-queue-does-not-drain}

Tha `verify-sovereign-push` chaidh a' cheann, rinn a' chluarachd Action Scheduler no an runner async a' tha a' tòiseachadh. Athroghainn na jobaichean fhailltean gu leithid tar a tha sinn a' faicinn gu robh iad a' gineall a' riochdadh (retry) no a' sgaidh.

### Tha seirbheisg user tenant a' tòiseachadh air {#tenant-user-count-is-wrong}

Bheir an miorraich a' chluarachd eadar-fhaighinn (provision) useran airson an tenant sovereign. Má tha an user install a tha a' gineall, rinn an t-earrach a' cheann de chluarachd user provisioning a' chluarachd air a' riochdadh SSO gu leithid.

### Chaidh fhailtean SSO a' gineallt {#sso-visit-is-rejected}

Tha fhailtean SSO chaidh a' gineallt.

Tha autologin airson tenantan sin-stailise (stateless) a' tabhann a' chùineachadh gu robh an domhainn tòiseachaidh (tenant domain), pin an t-uisge (origin pin), an t-uisge token, an nonce, agus an t-àrd-dèan (expiry) a' tòiseachadh. Comharrach air a bhith ag dìonadh an URL an tenant a bhith ceart agus tha an t-uisge a' tabhann a' chùineachadh gu leathair an t-sgaidh (SSO visit).

## Nuair a tha thu a' tabhann a' fhaighinn {#when-to-retry}

Comharrach air a bhith a' faighinn an t-dèan tar a tha thu a' tabhann a' chùineachadh gu leathair an t-sgaidh (SSO visit) a' cridheann. Comharrach air a bhith a' faighinn an t-dèan tar a tha thu a' tabhann a' fhaighinn an t-dèan tar a tha thu a' tabhann a' chùineachadh gu leathair an t-sgaidh (SSO visit) a' cridheann.
