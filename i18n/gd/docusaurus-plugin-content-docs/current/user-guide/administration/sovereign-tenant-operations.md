---
title: Operadh na Tòiseach
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operations {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 adds operational tooling for sovereign tenants: subsites that run with their own database, filesystem root, and routing context while remaining visible from the network admin.

Co gais gu h-uile a' chùis: addas Ultimate Multisite 1.2.0 fòcas airgeachdan airson tenantan soberainn: subsaites a tha a' tòla mhaith le eadar, le seannach de dhìon (database), an guthach-fàilse (filesystem root), agus an tòlch-fhaighinn (routing context) air a bhith a' tòla mhaith de chùl-a-steach (network admin).

Usga an seimpair seo nuair a tha thu a' tòla mhaith sitean a tha a' tòla mhaith, a' chlàradh faighinn (remote-site handoffs), no leasachadh (migrations) a tha a' tòla mhaith subsite a tha a' tòla mhaith air a bhith a' tòla mhaith.

## Cànan a' chàrdanachdan (administrators) a' chlàradh {#what-changes-for-administrators}

- **Autologin tenant sin-a-steach (Stateless tenant autologin)** — Canannach-a-steach (Network admins) faicinn an tòla mhaith air a bhith a' tòla mhaith gu mòr chan a tha a' tòla mhaith a' chlàradh seann. Tha an token SSO a' tòla mhaith air a' chùis, a' tòla mhaith air a' chluas (origin-pinned), a' tòla mhaith air a' chlàradh (replay-protected), agus a' tòla mhaith air a' chluas beag.
- **Tòlch-fhaighinn sin-a-steach (Sovereign-aware routing)** — Tha seannach-a-steach (legacy isolated networks) agus tenantan soberainn a' tòla mhaith gu am beag air an tòlch-fhaighinn site a tha a' tòla mhaith, a' chlàradh fhaighinn (bootstrap differences) a' tòla mhaith air a' chluas a' tòla mhaith.
- **Stàta leasachda a' chlàradh (Verified migration state)** — Tha sealladh a' chlàradh a' tòla mhaith a' tòla mhaith an tòla mhaith, a' tòla mhaith air a' chluas de dhìon (database writer permissions), a' tòla mhaith air a' chluas de bhlochaidh (queue drain status), agus a' tòla mhaith air an tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla mhaith a' tòla

- An tòran domain an tòran (tenant domain) a' chlàradh gu leathair (host) a tha'n eòlas an fhirseamas (filesystem) an tòran.
- An tòran database host a' chlàradh a' chlàradh (host binding) a' sgrùdha airson sin tòran.
- Tha am fhoirbhliachdan deimhne (migration verification commands) a' sgrùdha airson an tòran.
- Tha cur nasctalta (async migration queues) a' sgrùdha gu leathair a' chlàradh (DNS) neu 'sgrùdha (ownership changes).
- Bha an ùirbhleachr admin an tòran a' sgrùdha (provisioned) air an tòran agus cànach a tha thuig a' le SSO.

## A' chlàradh tòrana sovereign (sovereign tenants) {#visiting-a-sovereign-tenant}

Tha a' chlàradh tòran sovereign a' chlàradh (destructive). Bidh thu a' sgrùdha an tòran agus a' sgrùdha a' le export air an uair, a' chlàradh gu leathair (site management screen) a' chlàradh. Tha am fhoirbhliachdan deimhne 1.2.0 a' sgrùdha cridheann database a' chlàradh (tenant database credentials) mar bheachd air an tòran, ach tha thuig a' le dè a tha a' chlàradh gu leathair (host-level database users and folders) a' sgrùdha gu leathair (external hosting panels).

:::warning
Dè an tòran sovereign a' chlàradh (delete) mar a tha am fhoirbhliachdan deimhne a' sgrùdha air, neu air fa-inneam cur nasctalta async push jobs. Bidh thu a' sgrùdha an deimhne gu leathair (verification) a' chlàradh airson a tha am fhoirbhliachdan a' sgrùdha air a' chlàradh (teardown).
:::
