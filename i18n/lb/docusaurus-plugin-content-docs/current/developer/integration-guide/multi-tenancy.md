---
title: Multi-Tenancy-Integratioun
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy-Integratioun

Ultimate Multisite: Multi-Tenancy 1.2.0 ännert verschidde Integratiounsberéierungspunkte fir souverän Tenants, Migratiounsverifikatioun an Automatiséierung vum Tenant-Liewenszyklus.

## Tenant-Bootstrap-Oflaf {#tenant-bootstrap-flow}

Integratiounen, déi Tenants erstellen oder änneren, sollten dës Reiefolleg befollegen:

1. Léist den Tenant-Registry-Andrag an den Isolatiounsmodell op.
2. Erstellt oder verifizéiert den Tenant-Datebank-Writer.
3. Bootstrappt den Tenant-Schema.
4. Stellt Tenant-Benotzer bereet.
5. Registréiert Tenant-Routing a Dateisystem-Weeër.
6. Féiert d'Migratiounsverifikatioun aus, ier den Tenant fräigeschalt gëtt.

Gitt net dovun aus, datt e souveränen Tenant d'Netzwierk-Datebankverbindung nei benotze kann. Benotzt d'Tenant-Registry- a Writer-Abstraktiounen, déi vun der Erweiderung bereetgestallt ginn.

## SSO- a REST-Hooks {#sso-and-rest-hooks}

Stateless Tenant-Autologin benotzt kuerzlieweg Tokens mat engem Zweck-Claim, JTI-Replay-Schutz, enger Oflaf-Cap an Origin-Pinning. Integratiounen, déi Login-Knäppercher oder Remote-Verwaltungslinks bäifügen, sollten Tenant-Visitten iwwer den ënnerstëtzte SSO-Oflaf generéieren amplaz Tenant-Login-URLen direkt ze konstruéieren.

Netzwierk-säiteg API-Audit-Evenementer an deeglech Zesummefaassunge si fir souverän Tenant-Gateways verfügbar. Benotzt dës Logbicher, wann Dir extern Systemer debuggt, déi Tenant-Liewenszyklus-Endpoints opruffen.

## Souverän Client-Aktiouns-URLen {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 routéiert Client-Aktioune vu souveränen Tenants zeréck op d'Haaptsäit fir Account-, Checkout-, Rechnungs-, Invoice-, Site-, Template-Wiessel- an Domain-Mapping-Oflëss. Integratiounen, déi Tenant-säiteg Verwaltungslinks renderen, sollten dës Aktiounen op de Client-Panel vun der Haaptsäit weisen an e validéiert Retourzil enthalen, wann de Benotzer no Ofschloss vun der Aktioun zeréck op den Tenant navigéiere soll kënnen.

Benotzt de Kär-SSO-Wrapper fir Cross-Domain-Verwaltungslinks:

```php
$url = wu_with_sso($main_site_customer_url);
```

Déi generéiert URL bleift iwwer `wu_sso_url` filterbar, deen d'SSO-URL, den aktuelle Benotzer, d'Zil-Site-ID an de Redirect-Kontext kritt. Erweiderunge kënnen dëse Filter benotzen, fir provider-spezifesche Kontext unzehänken oder d'Broker-URL ze ersetzen, wärend Ultimate Multisite seng Token-Validatioun erhale bleift.

Duplizéiert keng Membership-, Invoice-, Rechnungsadress-, Template- oder Domain-Verwaltungsstate bannent dem souveränen Tenant. Betruecht den Tenant-Dashboard als Launcher an de Client-Panel vun der Haaptsäit als de System of Record fir verwalt Aktiounen.

## Migratiounsverifikatioun {#migration-verification}

Nodeems eng Migratiouns- oder Liewenszyklus-Integratioun Tenant-Donnéeë geännert huet, féiert d'Verifikatiouns-Gates aus:

- `wp tenant verify-no-legacy --site=<site-id>` confirméiert, datt den Tenant net méi vu legacy netzwierk-säitege Weeër ofhänkt.
- `wp tenant verify-sovereign-push --site=<site-id>` confirméiert, datt souverän Push-Jobs veraarbecht an eidel gemaach kënne ginn.

Integratiounen sollten eng feelgeschloe Verifikatioun als Deployment-Blocker behandelen an vermeiden, en Tenant live ze markéieren, bis de Feeler geléist ass.

## Tenant-Läschung {#tenant-deletion}

Läschoflëss sollten den Teardown-Wee vun der Erweiderung opruffen, sou datt Tenant-Datebank-Credentials gebotzt ginn. Extern Integratiounen däerfen Provider-Ressourcen ewechhuelen, nodeems den Teardown erfollegräich war, sollten awer keng Host-Datebanken oder Dossiere läschen, soulaang Verifikatioun oder asynchron Push-Jobs nach lafen.

## Veralteten Datebank-Router {#deprecated-database-router}

De legacy `Database_Router` gouf duerch en Deprecation-Stub ersat. Nei Integratiounen sollten Tenants iwwer den aktuelle Site-Router an d'Tenant-Registry-APIs opléisen, amplaz vum ale Router-Klass ofzehänken.
