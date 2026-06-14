---
title: Hostinger Multitenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 uvođuje mogućnost multi-tenancy od Hostingera tako da se ospitati domeni mogu učestvovati u proviziji suverenih tenanata uz postojeću integraciju mapiranja domena Hostingera.

Koristite ovu mogućnost kada upravljate domenima tenanata i izolovanom infrastrukturom tenanata putem Hostinger hPanel-a.

## Napomene o postavljanju

1. Konfigurišite osnovnu integraciju Hostingera pod **Ultimate Multisite > Settings > Host Integrations**.
2. Potvrdite da API token Hostingera može upravljati ciljnim domenom ili poddomenom.
3. Omogućite addon Multi-Tenancy.
4. Konfigurišite strategiju izolacije tenanata pre objavljivanja tenanta.
5. Pokrenite rad verifikacije migracije pre slanja produkcionog saobraćaja na tenanta.

Mogućnost Hostingera koristi zajedničku vezu Hostingera za operacije na strani hosta. DNS mora i dalje da pokazuje na ispravan nalog Hostingera, a ograničenja naloga hPanel-a i dalje važe.

## Promjene specifične za mogućnost

- Suverene tenante se mogu kreirati sa operacijama domena koje su svesne hosta (host-aware).
- Stringovi hosta baze podataka na istoj mašini se normalizuju pre potvrde dodjele.
- Tenanti upravljani od strane Hostingera bi trebali koristiti vrednost hosta baze podataka prikazanu u hPanel-u, osim ako WordPress runtime ne zahteva lokalno preklapanje (override).
- Poseti putem SSO zavise na tome da se domen tenanta rešava na Hostinger-hostovanog tenanta.

## Rješavanje problema sa Hostinger tenantima

- Ako instalacija tenanta ne uspe, proverite da li je domen već vezan za nalog Hostingera.
- Ako verifikacija baze podataka ne uspe, uporedite korisničko ime baze podataka, ime baze podataka i vezu hosta sa hPanel-om.
- Ako **Visit (SSO)** ne uspe, potvrdite da su DNS i SSL aktivni za domen tenanta.
- Ako je uklanjanje ostavlja resurse hosta, uklonite sve preostale baze podataka, korisnike ili foldere iz hPanel-a nakon potvrde rezervija (backup-ova).
