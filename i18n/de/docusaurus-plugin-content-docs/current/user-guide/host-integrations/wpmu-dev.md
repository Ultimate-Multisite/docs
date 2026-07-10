---
title: WPMU DEV Integration
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integration {#wpmu-dev-integration}

## Überblick {#overview}
WPMU DEV ist eine umfassende WordPress-Plattform, die Hosting, Plugins und Dienstleistungen für WordPress-Websites anbietet. Diese Integration ermöglicht die automatische Synchronisierung von Domains und die Verwaltung von SSL-Zertifikaten zwischen Ultimate Multisite und WPMU DEV Hosting.

## Funktionen {#features}
- Automatische Domain‑Synchronisierung
- SSL‑Zertifikatsverwaltung
- Erhöhte Anzahl von SSL‑Zertifikatsverifizierungsversuchen

## Voraussetzungen {#requirements}
Die Integration erkennt automatisch, ob Sie bei WPMU DEV gehostet werden, und nutzt die integrierte API. Keine zusätzliche Konfiguration ist erforderlich, wenn Sie bei WPMU DEV gehostet werden.

Die Integration prüft auf das Vorhandensein der Konstanten `WPMUDEV_HOSTING_SITE_ID`, die automatisch definiert wird, wenn Sie bei WPMU DEV gehostet werden.

## Installationsanweisungen {#setup-instructions}

### 1. WPMU DEV Hosting überprüfen {#1-verify-wpmu-dev-hosting}
Wenn Sie bei WPMU DEV gehostet werden, sollten die erforderlichen Konstanten bereits definiert sein. Vergewissern Sie sich, dass:
1. Die Konstante `WPMUDEV_HOSTING_SITE_ID` ist in Ihrer Umgebung definiert
2. Sie haben eine aktive WPMU DEV Mitgliedschaft mit API‑Zugriff

### 2. Integration aktivieren {#2-enable-the-integration}
1. In Ihrem WordPress‑Admin gehen Sie zu Ultimate Multisite > Einstellungen
2. Navigieren Sie zum Tab „Domain Mapping“
3. Scrollen Sie nach unten zu „Host Integrations“
4. Aktivieren Sie die WPMU DEV Integration
5. Klicken Sie auf „Änderungen speichern“

## Funktionsweise {#how-it-works}

### Domain‑Synchronisierung {#domain-syncing}
Wenn eine Domain in Ultimate Multisite zugeordnet wird:
1. Die Integration nutzt die WPMU DEV API, um die Domain zu Ihrem Hosting‑Konto hinzuzufügen
2. Sie fügt außerdem automatisch die www‑Version der Domain hinzu
3. WPMU DEV übernimmt die Domainkonfiguration und die Ausstellung des SSL‑Zertifikats

### SSL‑Zertifikatsverwaltung {#ssl-certificate-management}
Die Integration ist so konfiguriert, dass die Anzahl der Versuche zur SSL‑Zertifikatsverifizierung für WPMU DEV Hosting erhöht wird, da es einige Zeit dauern kann, bis SSL‑Zertifikate ausgestellt und installiert werden. Standardmäßig versucht sie bis zu 10 Mal, ein SSL‑Zertifikat zu verifizieren, im Vergleich zu den üblichen 5 Versuchen.

## Wichtige Hinweise {#important-notes}

### Domainentfernung {#domain-removal}
Derzeit bietet die WPMU DEV API keine Möglichkeit, Domains zu entfernen. Wenn eine Domainzuordnung in Ultimate Multisite entfernt wird, bleibt die Domain in Ihrem WPMU DEV Hosting‑Konto. Sie müssen sie bei Bedarf manuell im WPMU DEV Hosting‑Dashboard entfernen.

### API‑Authentifizierung {#api-authentication}
Die Integration verwendet den WPMU DEV API‑Schlüssel, der in Ihrer WordPress‑Datenbank als Option `wpmudev_apikey` gespeichert ist. Dieser wird automatisch eingerichtet, wenn Sie Ihre Website mit WPMU DEV verbinden.

## Fehlerbehebung {#troubleshooting}

### API‑Verbindungsprobleme {#api-connection-issues}
- Vergewissern Sie sich, dass Ihre Website ordnungsgemäß mit WPMU DEV verbunden ist
- Überprüfen Sie, ob die Option `wpmudev_apikey` in Ihrer WordPress‑Datenbank gesetzt ist
- Stellen Sie sicher, dass Ihre WPMU DEV Mitgliedschaft aktiv ist

### SSL‑Zertifikatsprobleme {#ssl-certificate-issues}
- WPMU DEV kann einige Zeit benötigen, um SSL‑Zertifikate auszustellen (normalerweise 5–15 Minuten)
- Die Integration ist so konfiguriert, dass bis zu 10 Mal nach SSL‑Zertifikaten gesucht wird
- Wenn SSL‑Zertifikate nach mehreren Versuchen immer noch nicht ausgestellt werden, kontaktieren Sie den WPMU DEV Support

### Domain nicht hinzugefügt {#domain-not-added}
- Überprüfen Sie die Ultimate Multisite‑Protokolle auf Fehlermeldungen
- Vergewissern Sie sich, dass die Domain nicht bereits zu WPMU DEV hinzugefügt wurde
- Stellen Sie sicher, dass Ihr WPMU DEV Hosting‑Plan die Anzahl der hinzugefügten Domains unterstützt
