---
title: Closte Integration
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration {#closte-integration}

## Überblick {#overview}
Closte isch e verwalteti WordPress-Hosting-Plattform, wo uf Google Cloud Infrastruktur baut isch. D'Integration ermöglicht automatisch Domain-Synchronisation und SSL-Zertifikat-Verwaltig zwüsche Ultimate Multisite und Closte.

## Features {#features}
- Automatisch Domain-Synchronisation
- SSL-Zertifikat-Verwaltig
- Wildcard-Domain-Unterstützig
- Kei Konfigurationsbedarf, wenn Sie uf Closte laufe.

## Anforderungen {#requirements}
D'folgende Konstante muess in Ihrer `wp-config.php` Datei definiert sii, wenn Sie Closte bruche:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Die Konstante isch normalerwiis scho definiert, wenn Sie uf Closte hostet.

## Einrichtungsanleitig {#setup-instructions}

### 1. Überprüfe Ihre Closte API-Schlüssel {#1-verify-your-closte-api-key}

Wenn Sie uf Closte hostet, söll d'Konstante `CLOSTE_CLIENT_API_KEY` scho in Ihrer `wp-config.php` Datei definiert sii. Sie chönne das überprüefe, indem Sie Ihre `wp-config.php` Datei lueged.

### 2. Integration aktivieren {#2-enable-the-integration}

1. Im WordPress Admin gaht Sie zu Ultimate Multisite > Settings
2. Navigiered Sie zum Tab "Domain Mapping" (Domain-Zuordnung)
3. Scrollend Sie nach unten finded Sie "Host Integrations" (Host-Integrationen)
4. Aktiviered Sie d'Closte Integration
5. Klicke Sie uf "Save Changes" (Änderungen speichern)

## Wie funktioniert das? {#how-it-works}

Wenn e Domain in Ultimate Multisite zuordnet wird:

1. Sendet d'Integration en Aafrog an d'API vo Closte, um d'Domain zu Ihrer App zuefüege
2. Closte übernimmt automatisch d'Bereitstellig vom SSL-Zertifikat
3. Wenn e Domain-Zuordnung entfernt wird, nimmt d'Integration die Domain vo Closte weg

D'Integration funktioniert au mit de DNS-Prüfintervall-Einstellung in Ultimate Multisite und erlaubt Ihnen z'konfiguriere, wie oft s'System nach DNS-Propagation und SSL-Zertifikat-Ausstellige prüeft.

## Domain-Record-Erstellung {#domain-record-creation}

Dëst Integration stellt sicher, dass wenn e Site erstellt oder dupliziert wird, automatisch en Domainrecord erstellt gëtt. Dat isch bsunders wichtig für d Closte Integration, well d Erschaffung vum Domainrecord de Closte API triggert, um de Domain und s SSL-Zertifikat z'erstatten.

## Problembehebungsleitfaden {#troubleshooting}

### API-Verbindungssprobleme {#api-connection-issues}
- Überprüch, ob din Closte API Key korrekt isch.
- Stell sicher, dass din Closte Account d nötige Berechtigungen het.

### SSL-Zertifikatsprobleme {#ssl-certificate-issues}
- Closte kann e chli Zit bruichen, um SSL-Zertifikate z'erstatten (normalerwiis 5-10 Minute).
- Überprüch, ob dini Domains korrekt uf d IP-Adress vum Closte Server hiwiisen.
- Prüef d DNS-Record für dini Domain, um sicherzstelle, dass si richtig konfiguriert sinn.

### Domain Net Hifuge {#domain-not-added}
- Überprüch d Ultimate Multisite Logs uf irgendwelchi Fehlermeldige.
- Stell sicher, dass d Domain net scho zu Closte hinzugefügt isch.
- Sorg dafür, dass d DNS-Record vum dinere Domain korrekt konfiguriert sinn.

### DNS Prüfintervall {#dns-check-interval}
- Wenn SSL-Zertifikate z'lang bruichen, um z'erstatten, chönntsch s DNS Prüfintervall i de Domain Mapping Settings aapasse.
- S Standardintervall isch 300 Sekunde (5 Minute), aber du chasch es so tief wie 10 Sekunde stelle für schnelleri Prüfungen während em Teste.
