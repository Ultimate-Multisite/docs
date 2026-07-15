---
title: Integrare multi-tenant
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integrare Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 modifică mai multe puncte de integrare pentru chiriași suverani, verificarea migrării și automatizarea ciclului de viață al chiriașilor.

## Fluxul de bootstrap al chiriașului {#tenant-bootstrap-flow}

Integrările care creează sau modifică chiriași ar trebui să urmeze această ordine:

1. Rezolvați înregistrarea din registrul chiriașului și modelul de izolare.
2. Creați sau verificați scriitorul bazei de date a chiriașului.
3. Inițializați schema chiriașului.
4. Provisionați utilizatorii chiriașului.
5. Înregistrați rutarea chiriașului și căile sistemului de fișiere.
6. Rulați verificarea migrării înainte de a expune chiriașul.

Nu presupuneți că un chiriaș suveran poate reutiliza conexiunea la baza de date a rețelei. Folosiți registrul chiriașilor și abstracțiile de scriitor furnizate de addon.

## SSO și hook-uri REST {#sso-and-rest-hooks}

Autentificarea automată fără stare a chiriașului folosește tokenuri cu durată scurtă, cu o revendicare de scop, protecție împotriva reluării JTI, o limită de expirare și fixarea originii. Integrările care adaugă butoane de conectare sau linkuri de administrare la distanță ar trebui să genereze vizite ale chiriașului prin fluxul SSO acceptat, în loc să construiască direct URL-uri de autentificare ale chiriașului.

Evenimentele de audit API din partea rețelei și rezumatele zilnice sunt disponibile pentru gateway-uri ale chiriașilor suverani. Folosiți aceste jurnale când depanați sisteme externe care apelează endpoint-uri ale ciclului de viață al chiriașilor.

## URL-uri de acțiuni pentru clienți suverani {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 rutează acțiunile clienților chiriașilor suverani înapoi către site-ul principal pentru fluxuri de cont, checkout, facturare, factură, site, schimbare de șablon și mapare a domeniului. Integrările care afișează linkuri de administrare din partea chiriașului ar trebui să direcționeze acele acțiuni către panoul clientului de pe site-ul principal și să includă o țintă de întoarcere validată atunci când utilizatorul ar trebui să poată naviga înapoi la chiriaș după finalizarea acțiunii.

Folosiți wrapperul SSO de bază pentru linkurile de administrare cross-domain:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL-ul generat rămâne filtrabil prin `wu_sso_url`, care primește URL-ul SSO, utilizatorul curent, ID-ul site-ului țintă și contextul de redirecționare. Addon-urile pot folosi acel filtru pentru a adăuga context specific furnizorului sau pentru a înlocui URL-ul brokerului, păstrând în același timp validarea tokenului Ultimate Multisite.

Nu duplicați starea abonamentului, facturii, adresei de facturare, șablonului sau administrării domeniului în interiorul chiriașului suveran. Tratați dashboard-ul chiriașului ca lansator și panoul clientului de pe site-ul principal ca sistemul de referință pentru acțiunile administrate.

## Verificarea migrării {#migration-verification}

După ce o integrare de migrare sau ciclu de viață modifică datele chiriașului, rulați porțile de verificare:

- `wp tenant verify-no-legacy --site=<site-id>` confirmă că chiriașul nu mai depinde de căi legacy din partea rețelei.
- `wp tenant verify-sovereign-push --site=<site-id>` confirmă că joburile de push suveran pot procesa și se pot goli.

Integrările ar trebui să trateze verificarea eșuată ca pe un blocaj de implementare și să evite marcarea unui chiriaș ca live până când eșecul este rezolvat.

## Ștergerea chiriașului {#tenant-deletion}

Fluxurile de ștergere ar trebui să apeleze calea de teardown a addon-ului, astfel încât acreditările bazei de date a chiriașului să fie curățate. Integrările externe pot elimina resursele furnizorului după ce teardown-ul reușește, dar nu ar trebui să șteargă bazele de date sau folderele gazdă în timp ce verificarea sau joburile de push asincrone încă rulează.

## Router de bază de date depreciat {#deprecated-database-router}

Vechiul `Database_Router` a fost înlocuit cu un stub de depreciere. Integrările noi ar trebui să rezolve chiriașii prin routerul de site curent și API-urile registrului chiriașilor, în loc să depindă de vechea clasă de router.
