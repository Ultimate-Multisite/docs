---
title: Multi-tenancy Hostinger
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 dodaje mogućnost Hostinger multi-tenancy, tako da ospitati domene mogu učestvovati u proviziji suverenih najmopredajatelja (tenant) uz postojeću integraciju mapiranja domena Hostinger.

Koristite ovu mogućnost kada se domen najmopredajatelja i izolirana infrastruktura najmopredajatelja upravljaju putem Hostinger hPanel-a.

## Napomene o podešavanju {#setup-notes}

1. Konfigurišite osnovnu integraciju Hostinger pod **Ultimate Multisite > Settings > Host Integrations**.
2. Proverite da li je Hostinger API token u stanju da upravlja ciljnim domenom ili poddomenom.
3. Omogućite dodatak (addon) Multi-Tenancy.
4. Konfigurišite strategiju izolacije najmopredajatelja pre objavljivanja najmopredajatelja.
5. Pokrenite rad kroz workflow verifikacije migracije pre slanja produkcionog saobraćaja na najmopredajatelja.

Hostinger mogućnost koristi zajedničku Hostinger vezu za operacije na strani hosta (host-side operations). DNS mora i dalje da pokazuje na ispravan Hostinger nalog, a ograničenja naloga hPanel se i dalje primenjuju.

## Promene specifične za mogućnost {#capability-specific-changes}

- Suverene najmopredajatelje se mogu kreirati sa operacijama domena koje su svesne hosta (host-aware).
- Stringovi hosta baze podataka na istoj mašini se normalizuju pre verifikacije dozvole.
- Najmopredajatelji upravljani od strane Hostingera bi trebalo da koriste vrednost hosta baze podataka prikazanu u hPanelu, osim ako WordPress runtime ne zahteva lokalno nadjačavanje (override).
- Posete putem SSO zavise na tome da se domen najmopredajatelja rešava na Hostinger osposobljenog najmopredajatelja.

## Rešavanje problema sa Hostinger najmopredajateljima {#troubleshooting-hostinger-tenants}

- Ako instalacija najmopredajatelja ne uspe, proverite da li je domen već vezan za nalog Hostingera.
- Ako verifikacija baze podataka ne uspe, uporedite korisničko ime baze podataka najmopredajatelja, ime baze podataka i host binding sa hPanelom.
- Ako **Visit (SSO)** ne uspe, potvrdite da su DNS i SSL aktivni za domen najmopredajatelja.
- Ako demontiranje ostavlja resurse hosta na kraju, uklonite sve preostale baze podataka, korisnike ili foldere iz hPanel-a nakon potvrde rezervnih kopija (backups).
