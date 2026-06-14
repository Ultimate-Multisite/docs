---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 nua le cúramhacht multi-tenancy de Hostinger, ag curtha domáin a bhfaidh siad is éifeachtach i dtreo chuidaithe tenant sobhraíne (sovereign) senchéil, gan aon rud a bheith ag curtha le haghaidh curtha sinteadaim dearda le curtha mapping domáin atá ag curtha.

Use an curramhacht seo nuair a bhfaigheann domáin tenant agus stráit feachainn isolated mar chuidaithe tenant trí Hostinger hPanel.

## Note ar an t-aonráin (Setup notes)

1. Cúramhail an curtha core Hostinger i ngléas **Ultimate Multisite > Settings > Host Integrations**.
2. Confirme go bhfuil an token API de Hostinger ag curtha domáin nó subdomain a bhfaidh sé curtha.
3. Fáilte ar an addon Multi-Tenancy.
4. Cúramhail an stratear aisíocht (isolation strategy) de tenant trí a bheith ag curtha primaite go háirithe.
5. Déan an curramhacht dearcáid (migration verification workflow) primaite le haghaidh curtha traic prodruithe ar an tenant.

Bíonn an curramhacht Hostinger ag úsáid an curtha Hostinger chonaic (shared connection) chun oiriúnach a dhéanamh ar an chuid feachainn. Is féidir domáin an t-aonráin (DNS) anois a bheith ag curtha le curtha Hostinger atá ag curtha, agus is féidir le curtha hPanel a bheith ag curtha liomhaí tenant.

## Changúcháin a bhaineann leis an curramhacht

- Is féidir chuidaithe tenant sobhraíne (sovereign tenants) a chur i ngléas le curtha domáin atá ag curtha host-aware.
- Bíonn stráit feachainn deatú (database host strings) ar fáil anois primaite le haghaidh curtha curtha féachaint.
- Caithfidh chuidaithe tenant a bheith ag curtha an chuid curtha DB host value a bhaineann i hPanel, má tá an runtime WordPress ag curtha override local.
- Bíonn siad ar bhealach SSO ag curtha domáin tenant a bheith ag curtha an tenant atá ag curtha Hostinger.

## Déarcáid (Troubleshooting) de tenant Hostinger

- Má tá curtha install tenant ag fáil, déan curtha domáin ag curtha le curtha Hostinger atá ag curtha.
- Má tá curtha dearcáid DB ag fáil, féach ar an username DB, an ainm DB, agus an binding host a bheith ag curtha hPanel.
- Má tá **Visit (SSO)** ag fáil, confromain go bhfuil DNS agus SSL ag curtha domáin tenant atá ag curtha.
- Má tá an dearcáid (teardown) ag léamh curtha réimhse feachainn (host resources) ar an chuid feachainn, tóg an gcuid DBs, users, nó folders a bheith ag curtha le haghaidh hPanel tar éifeachtach le haghaidh curtha backup.
