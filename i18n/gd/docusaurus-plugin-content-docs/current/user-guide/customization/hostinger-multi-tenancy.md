---
title: Multi-Tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 adds a Hostinger multi-tenancy capability so hosted domains can participate in sovereign tenant provisioning alongside the existing Hostinger domain-mapping integration.

Usgaidh an eadar-dhearg seo nuair a ghlacda domáin tenant agus stráta tenanta isionnach trí hPanel Hostinger.

## Setup notes {#setup-notes}

1. Roinmigh an cur Hostinger sin air a bheith ag iarraidh i **Ultimate Multisite > Settings > Host Integrations**.
2. Comhthacaidh an token API Hostinger a bheith ag iarraidh gabháil ar domáin naidheachdaidh eile no subdomain.
3. Glac an addon Multi-Tenancy.
4. Roinmigh an stráit ionadachais tenanta air a bheith ag iarraidh i bhfáineadh an tenant.
5. Glac an workflow deartú marbhairtí ar fhaighneamh an tenant air a bheith ag iarraidh i bhfáineadh traic próifadh ar an tenant.

Bíonn an cur Hostinger sin ag athrú an cur Hostinger is fhéidir le cur-side operations. Is breen domhainn nach eil an DNS ag cur isteach ar chuid Hostinger, agus níltear liathas na hPanel.

## Capability-specific changes {#capability-specific-changes}

- Is féidir tenanta sovereign a creu le cur eadar-dhearg domáin a bheith ag iarraidh i bhfáineadh an host.
- Bhaidh stráit DB is éifeachtach ar fáil air a sholáir go leim ar fháil gabhail.
- Ba cheart a bheith marbhairtí tenanta a chur ar fáil ag cur Hostinger, an t-srath DB a bhaineann i bhfáineadh na hPanel an t-altráth WordPress a bheith ag iarraidh iarrchóir local.
- Bíonn siúlacha SSO ag iarraidh domáin tenanta a bheith ag cur isteach ar an tenant a bheith ag cur Hostinger.

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- Má tá an t-install tenanta ag fáil, comhthacaidh an domáin a bheith ag cur isteach air an account Hostinger.
- Má bhíonn an fhaighneamh DB ag fáil, is éifeachtach a chur ar fáil an username DB, an ainm DB, agus an binding host le hPanel.
- Má tá **Visit (SSO)** ag fáil, comhthacaidh an DNS agus an SSL a bheith ag cur isteach ar an domáin tenanta.
- Má tá an deartú ag tairiscint cur-side resources, dtug an aon DBs, users, no folders a bhaint as an hPanel tar éis a fháil ar fhaighneamh marbhairtí.
