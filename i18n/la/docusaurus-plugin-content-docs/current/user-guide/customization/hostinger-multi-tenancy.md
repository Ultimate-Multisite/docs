---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy Hostinger {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 addeve potestatem multi-tenancy Hostinger, ita domina alojati possunt participare in provensione inquiliorum souverani cum integrazione mappae domini Hostinger iam existens.

Usa hoc potestatem cum dominae inquiliorum et infrastructura inquiliniorum isolatarum pervenient per Hostinger hPanel.

## Nota de configurazione {#setup-notes}

1. Configura integracion core Hostinger sub **Ultimate Multisite > Settings > Host Integrations**.
2. Confirma si token API Hostinger potest administrare dominum vel subdomain cibum.
3. Activa addon Multi-Tenancy.
4. Configura strategiam isolation inquiliniorum ante publicatione inquilii.
5. Executa workflow verification migratione ante inviendi trafficum productionem ad inquirium.

Potestatem Hostinger usus connection Hostinger partiti pro operationibus lato hostis. DNS tamen debet indicare ad attentum numerum Hostinger, et limitatio account hPanel iam applicatur.

## Mutatio specificae potestatis {#capability-specific-changes}

- Inquiria souverania possunt creari cum operationibus domini conscientiae hostis.
- Strings hosti database in eodem machina sunt normalizatae ante conferendum verificationem.
- Inquiria administratio Hostinger debent usque ut valor hosti database ostendatur in hPanel, nisi runtime WordPress localem superationem requirit.
- Visita SSO dependunt a domini inquiliniorum resolvere ad inquilinium alojatum Hostinger.

## Solutio problemata inquiliorum Hostinger {#troubleshooting-hostinger-tenants}

- Si installatio inquilii fallit, verifica si dominium iam attachatum est ad account Hostinger.
- Si verificatione database fallit, compara nomen utentis DB inquilinii, nomen database et vinculum hosti cum hPanel.
- Si **Visit (SSO)** fallit, confirma si DNS et SSL activi sunt pro domino inquiliniorum.
- Si demissionem lascit res hostis in manu, remove omnia database, utentias vel folder ex hPanel post confirmatione backup.
