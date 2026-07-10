---
title: Hostinger Multi-Tenancy
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 füegt e Hostinger multi-tenancy Fähigkeite bi, dass gehosteti Domäne mit souveränem Tenant-Provisioning teilnehme chann, parallel zu de bestehende Hostinger domain-mapping Integration.

Benutze die Funktionalität, wenn Sie Tenant-Domänen und isolierti Tenant-Infrastruktur über Hostinger hPanel verwalte.

## Setup notes {#setup-notes}

1. Konfiguriere d'Kern-Hostinger-Integration unter **Ultimate Multisite > Settings > Host Integrations**.
2. Bestätige, dass de Hostinger API token d'Zieldomäne oder -subdomain verwalte cha.
3. Aktiviere de Multi-Tenancy addon.
4. Konfiguriere d'Tenant-Isolation-Strategie, bevor du de Tenant publiziersch.
5. Führe de Migration Verification Workflow us, bevor du Produktionsverkehr an de Tenant schicksch.

D'Hostinger-Fähigkeit brucht d'gemeinsami Hostinger-Verbindig für hostseitigi Operatione. D'DNS muess immer no uf s'richtige Hostinger-Konto hiwiise, und d'hPanel-Kontobeschränkige gälte immer no.

## Capability-specific changes {#capability-specific-changes}

- Souveräne Tenants chönne mit host-aware Domain-Operationen erstellt werde.
- Datenbank-Host-Strings uf de gliiche Maschine werdet vor de Verifizierig normalisiert.
- Hostinger-verwalteti Tenants sölled de Datenbank-Host-Wert bruche, wo in hPanel zeigt wird, es sei denn, WordPress Runtime brucht en lokale Override.
- SSO-Besüech verlasse sich druf, dass d'Tenant-Domäne uf de Hostinger-gehostete Tenant auflöst.

## Troubleshooting Hostinger tenants {#troubleshooting-hostinger-tenants}

- Wenn d'Installation vo eme Tenant fehlschlaht, überprüef, ob d'Domäne scho a s'Hostinger-Konto agfüegt isch.
- Wenn d'Datenbank-Verifizierig fehlschlaht, vergliich de DB-Benutzername, de Datenbankname und d'Host-Bindig vom Tenant mit hPanel.
- Wenn **Visit (SSO)** fehlschlaht, bestätige, dass DNS und SSL für d'Tenant-Domäne aktiv sind.
- Wenn du nach em Abbaue vo eme Tenant Host-Ressource hinterlahsch, entferne alli verbliebene Datenbanke, Benutzer oder Ordner us hPanel, nachdem du d'Backups bestätigt hesch.
