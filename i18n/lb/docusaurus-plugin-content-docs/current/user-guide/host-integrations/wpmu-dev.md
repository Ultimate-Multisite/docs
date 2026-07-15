---
title: WPMU DEV Integration
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integration mit WPMU DEV

## Überblick {#overview}
WPMU DEV isch e umfassendi WordPress-Plattform, wo Hosting, Plugins und Service für WordPress-Sites aabietet. D'Integration ermöglicht automatisch Domain-Synchronisation und SSL-Zertifikat-Verwaltig zwüsche Ultimate Multisite und de WPMU DEV Hosting.

## Features {#features}
- Automatisch Domain-Synchronisation
- SSL-Zertifikat-Verwaltig
- Erweiterte Versuech zur SSL-Zertifikat-Verifizierig

## Anforderungen {#requirements}
D'Integration erkennt automatisch, ob Sie uf WPMU DEV hostet, und brucht d'eingebauti API. Wenn Sie uf WPMU DEV hostet, bruche Sie kei zusätzlechi Konfigurationsschritt.

D'Integration prüeft, ob d'Konstante `WPMUDEV_HOSTING_SITE_ID` vorhanden isch, wo automatisch definiert wird, wenn Sie uf WPMU DEV hostet.

## Einrichtigsanleitig {#setup-instructions}

### 1. Hosting mit WPMU DEV überprüefe {#1-verify-wpmu-dev-hosting}

Wenn Sie uf WPMU DEV hostet, sölle d'nötige Konstante scho definiert si. Überprüfe bitte:

1. D'Konstante `WPMUDEV_HOSTING_SITE_ID` isch in Ihrer Umgebung definiert
2. Sie händ e aktivi WPMU DEV-Mitgliedschaft mit API-Zuegang

### 2. Integration aktivieren {#2-enable-the-integration}

1. Im WordPress Admin-Bereich gaht Sie zu Ultimate Multisite > Settings
2. Navigiered zur Registerkarte "Domain Mapping"
3. Scrolled Sie nach unten bis zu "Host Integrations"
4. Aktiviered d'WPMU DEV Integration
5. Klickt Sie uf "Save Changes"

## Wie es funktioniert {#how-it-works}

### Domain-Synchronisation {#domain-syncing}

Wenn e Domain in Ultimate Multisite abgebunde wird:

1. Brucht d'Integration d'WPMU DEV API, um d'Domain zu Ihrem Hosting-Account z'füege
2. Sie füegt automatisch au d'www-Version vo de Domain hinzu
3. WPMU DEV übernimmt d'Domain-Konfiguration und d'Zertifikat-Ausstellig

### SSL-Zertifikat-Verwaltig {#ssl-certificate-management}

D'Integration isch so konfiguriert, dass d'Anzahl vo SSL-Zertifikat-Verifizierigsversuech für WPMU DEV Hosting erhöht wird, will es chönnt Zit bruche, bis SSL-Zertifikate usgstellt und installiert sind. Standardmässig probiert er bis zu 10 Mal d'SSL-Zertifikat-Verifizierig, im Verglich zu de üblichen 5 Versuech.

## Wichtigi Notize {#important-notes}

### Domänentferning {#domain-removal}

Aktuell bietet d'WPMU DEV API kei Möglichkeit, Domän z'entferne. Wenn e Domänen-Mapping in Ultimate Multisite entfernt wird, blibt d'Domän i dim WPMU DEV Hosting-Account. Du muesch sie manuell us em WPMU DEV Hosting Dashboard entferne, falls nötig.

### API Authentifizierig {#api-authentication}

D'Integration brucht de WPMU DEV API Key, wo in dinere WordPress-Datenbank als `wpmudev_apikey` Option gspeicheret isch. Das wird automatisch eingerichtet, wenn du dini Site mit WPMU DEV verbindisch.

## Fehlerbehebung {#troubleshooting}

### API Verbindigsprobleme {#api-connection-issues}
- Überprüef, ob dini Site ordentlech mit WPMU DEV verbunde isch.
- Prüef, ob d'Option `wpmudev_apikey` in dinere WordPress-Datenbank gsetzt isch.
- Stell sicher, dass dini WPMU DEV Mitgliedschaft aktiv isch.

### SSL-Zertifikatsprobleme {#ssl-certificate-issues}
- WPMU DEV chönnt Zit bruche, um SSL-Zertifikate uszgäh (normalerwiis 5-15 Minute).
- D'Integration isch so konfiguriert, dass sie bis zu 10 Mal nach SSL-Zertifikaten prüeft.
- Wenn d'SSL-Zertifikate nach mehrmalige Versuech immer no nöd usgäh wärde, kontaktiere de WPMU DEV Support.

### Domän nöd hinzugefügt {#domain-not-added}
- Überprüef d'Ultimate Multisite Logs uf Fehlermeldige.
- Stell sicher, dass d'Domän nöd scho bi WPMU DEV drin isch.
- Verifiziere, dass din WPMU DEV Hosting-Plan d'Anzahl vo Domänen unterstützt, wo du hinzufüegsch.
