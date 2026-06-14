---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje mogućnost multi-tenancy od Hostingera tako da ospitale domene mogu sudjelovati u proviziji suverenih najma (tenant) uz postojeću integraciju mapiranja domena Hostingera.

Koristite ovu mogućnost kada se domeni najma i izolirana infrastruktura najma upravljaju putem Hostinger hPanel-a.

## Napomene o postavljanju

1. Konfigurirajte osnovnu integraciju Hostingera pod **Ultimate Multisite > Settings > Host Integrations**.
2. Potvrdite da API token Hostingera može upravljati ciljnim domenom ili poddomenom.
3. Omogućite dodatak za multi-tenancy (Multi-Tenancy addon).
4. Konfigurišite strategiju izolacije najma prije objavljivanja najma.
5. Pokrenite rad verifikacije migracije prije slanja produkcijskog prometa na najma.

Mogućnost Hostingera koristi zajedničku vezu s Hostingerom za operacije na strani hosta (host-side operations). DNS se i dalje mora usmjeriti na ispravan račun Hostingera, a ograničenja računa hPanel-a i dalje važe.

## Promjene specifične za mogućnost

- Suverene najme se mogu kreirati s operacijama domena koje su svjesne hosta (host-aware).
- Stringovi hosta baze podataka na istoj mašini se normaliziraju prije provjere dodjele.
- Najmi koji upravlja Hostingerom treba koristiti vrijednost hosta baze podataka prikazanu u hPanel-u, osim ako WordPress runtime ne zahtijeva lokalno prebacivanje (override).
- Posjeti putem SSO zavise na tome da se domen najma resolve na Hostinger-hostan najma.

## Rješavanje problema s najmima Hostingera

- Ako instalacija najma ne uspije, provjerite je li domen već vezan za račun Hostingera.
- Ako provjera baze podataka ne uspije, uporedite korisničko ime baze podataka najma, naziv baze podataka i host binding s hPanel-om.
- Ako **Visit (SSO)** ne uspije, potvrdite da su DNS i SSL aktivni za domen najma.
- Ako je uklanjanje (teardown) ostavlja resurse hosta, uklonite sve preostale baze podataka, korisnike ili foldere iz hPanel-a nakon što potvrdite sigurnosne kopije (backups).
