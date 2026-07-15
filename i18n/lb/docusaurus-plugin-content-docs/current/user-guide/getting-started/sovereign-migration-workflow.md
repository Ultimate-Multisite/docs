---
title: Workflow für souveräne Migration
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migration Workflow

Ultimate Multisite: Multi-Tenancy 1.2.0 füegt Migrationsprüfpunkt für d'Umschichtig vo eme Standard-Subsite in souveräne Tenant-Infrastruktur bi.

## Bevor Sie afange {#before-you-start}

Bestätige, dass Sie folgendes hend:

- E aktuelli Backup vom Quellsite.
- De Multi-Tenancy addon aktiv isch.
- D'Ziel-Tenant-Datenbank, de Dateisystem-Root und d'Domain parat sind.
- E Datenbank-Host-Binding, wo mit de Zielumgäbig übereinstimmt.
- Zuegang zu WP-CLI-Befehlen für s'Netzwerk.

## Empfohlene Workflow {#recommended-workflow}

1. Bereite d'Ziel-Tenant-Datenbank und s'Dateisystem vor.
2. Registriere oder aktualisiere d'Tenant-Isolation-Istellige.
3. Führe d'Tenant-Migration us.
4. Richte oder überprüfe d'Tenant-User.
5. Entleeri asynchi Migrationsjobs.
6. Führe d'souveräne Migrationsprüfung us.
7. Besueche Sie de Tenant mit SSO.
8. Ändere Sie DNS oder Routing erst, nachdem d'Prüefig erfolgreich isch.

## Prüfpunkt (Verification gates) {#verification-gates}

De Prüf-Workflow überprüft d'Migration vo verschidene Winkel:

- D'Tenant-Schema existiert und cha vom Tenant-Datenbank-Schriiber gschriebe werde.
- De konfigurierti Datenbank-Host het gültigi Berechtigunge.
- Tenant-User sind vorhanden und stimme mit de erwartete Anzahl vo souveräne Installier-User übere.
- D'asynchi Push-Warteschlange cha erfolgreich entleert werde.
- Legacy Netzwerk-seitigi Datenpfade sind für de souveräne Tenant nümme nötig.

Behandlet Prüfungsfehler als Blockierer vor em Start. Behebe Sie s'Problem mit de Datenbank, User, Warteschlange oder Routing und führe d'Prüefig no emol us, bevor Sie de Tenant für Chunde freigebet.

## Ersti Produktionsbesuch {#first-production-visit}

Nachdem d'Prüefig erfolgreich isch, bruche Sie **Besuech (SSO)** vo de Site-Management-Schiirm für de erscht Admin-Besuch. Das bestätigt s'Tenant-Routing, d'Umgang mit SSO-Tokens, d'Ursprungsfixierung und d'User-Bereitstellig uf Tenant-Site in eme kontrollierte Schritt.
