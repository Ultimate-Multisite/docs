---
title: Uburyo bwo gukoresha Ultimate Multisite
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Multi-Tenancy ya Hostinger

Ultimate Multisite: Multi-Tenancy 1.2.0 yagira uburyo bwo gukoresha multi-tenancy mu Hostinger, aho domain cyangwa ibintu byo kwihagarika (hosted domains) bigaragaza ubushobozi bwo gukora tenant zikomeye (sovereign tenant provisioning) mu gihe cy'ubwoko bw'ibyo bishobora gukoreshwa n'uburyo bwa Hostinger domain-mapping.

Gukoresha uburyo bwo gukora iki iyo tenant domains n'ubushobozi bwo tenant zikomeye bigaragara mu gihe cyo gukoresha Hostinger hPanel.

## Icyemezo y'uko ubushobozi bwagira

1. Gukoresha uburyo bwa core Hostinger under **Ultimate Multisite > Settings > Host Integrations**.
2. Gutekereza ko API token ya Hostinger igaragaza ko igaragaza domain cyangwa subdomain yashobora gukemura.
3. Gukoresha Multi-Tenancy addon.
4. Gukoresha uburyo bwo gukomeza (isolation strategy) mu gihe cyo gukora tenant mbere yagira ubushobozi.
5. Gukoresha workflow ya gukomeza (migration verification workflow) mbere yugira ubutumwa bw'ubwoko (production traffic) ku tenant.

Uburyo bwo gukoresha Hostinger bigira uburyo bwo gukoresha ubushobozi bw'Hostinger buhagarika mu gihe cyo gukora ibyo kuri host. DNS igomba kugaragaza ko igaragaza aka account ya Hostinger, kandi amabwiriza y'account ya hPanel bizwiye.

## Ibintu by'ubushobozi bwo gukoresha

- Tenant zikomeye (Sovereign tenants) zishobora gukorwa n'ibyo bishobora gukora mu gihe cyo gukora domain.
- Icyemezo cyo database host strings by'ubushobozi bwagira uburyo bwo guhindura mbere yugira ubwoko bw'igabane (grant verification).
- Tenant zikomeye zishobora gukoresha ishusho ya database host value igaragaza mu hPanel, ariko iyo WordPress runtime itazwiho gukoresha uburyo bwo guhindura (local override).
- Icyemezo cyo SSO byitera ko domain ya tenant igomba kugaragaza ku tenant yashobora gukorwa n'Hostinger.

## Gukemura ibibazo mu gihe cyo gukoresha Hostinger tenants

- Iyo gukora install ya tenant itazikora, gutekereza ko domain yari yagira uburyo bwo guhagarika ku account ya Hostinger.
- Iyo gukomeza (database verification) itazikora, gushyira mu gukoresha ishusho ya username ya database ya tenant, ishusho ya database, n'ubwoko bw'host binding mu hPanel.
- Iyo **Visit (SSO)** itazikora, gutekereza ko DNS na SSL zishobora gukorwa ku domain ya tenant.
- Iyo gukemura ibintu byo gufata (teardown) bitera ko hari ibintu by'host byitera mu gihe cyo gukoresha ubushobozi, gushyira mu hPanel ibintu by'database, users, cyangwa folders zikomeye mbere yugira uburyo bwo gufata (confirming backups).
