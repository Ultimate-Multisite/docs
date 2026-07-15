---
title: Hostinger Çoklu Kirýarlary
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 Hostinger multi-tenancy ufunksyly (multi-tenant) kämilikini goşdirir, bu bolsa hostlanýar domenler mevcut Hostinger domain-mapping integrasiýasy bilen bile özlerini bellenip duran tenantler arkaly özüni döretmekde iştirak edip bilýär.

Tenant domenleri we izolelen tenant infrastrukturyny Hostinger hPanel arkaly dolandyrmagyňyzda bu kämilikden peimanyň.

## Kurmak üçin notlar {#setup-notes}

1. Esasy Hostinger integrasiýasyny **Ultimate Multisite > Settings > Host Integrations** arkaly gurluň.
2. Hostinger API tokeni belent domen ýa-da subdomaini dolandyrmagy bilip biljekdigini anyklap görkeziň.
3. Multi-Tenancy addonini işjeňleşdirin.
4. Tenanti yzygiderden ýazmakdan öň tenant izole etme strategiasyny gurluň.
5. Prodüksiýa trafikini tenantä göndermezden öň migrasiýa barlagyny (migration verification workflow) işjeňleşdirin.

Hostinger kämiligi host-taraf operatsiyalar üçin paýlaşylýan Hostinger bağlantysyny ulanyp bilýär. DNS halaýyn Hostinger hasabyma ulanmaly we hPanel hasabynyň çäkleri täsir edip durýar.

## Kämilige görä üýtgeşmeler {#capability-specific-changes}

- Sovereign tenantler host-a pikir edip domen operatsiyalary bilen döredilip bilner.
- Database host stringleri gurlanma barlagyny bermezden normalizirlenir.
- Hostinger dolandyrmagyňyzda, WordPress runtime lokal üýtgeşme talap etse, hPanelde görkezilen database host derejesini ulanyp bilersiňiz.
- SSO wizitleri tenant domenini Hostinger arkaly hostlanýan tenant bilen baglanyşdyrmaga esaslanýar.

## Hostinger tenantlaryny üpjün etmek (Troubleshooting) {#troubleshooting-hostinger-tenants}

- Tenanti kurmak başlasa, domen Hostinger hasabyna ýeterlik baglanyp baýlandyryldygyny barlap görüň.
- Database barlagyny geçirmegi başarsa, tenant DB ismini, database adyny we host baglanyşyny hPanel bilen deňeşdirip görkeziň.
- **Visit (SSO)** başlasa, tenant domenini üçin DNS we SSL işjeňleşdirilendigini anyklap görüň.
- Tevziýetden soň host resurslary aradan aýyrsa, yedekleri barlap görmegiňizden soň hPanelden bar bolan database, userler ýa-da klaslary almagyňyz zerurdyr.
