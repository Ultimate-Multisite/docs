---
title: Cloudflare-Integration
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare-Integration

## Überblick
Cloudflare ist ein führendes Content Delivery Network (CDN) und Sicherheitsanbieter, der dabei hilft, Websites zu schützen und zu beschleunigen. Diese Integration ermöglicht automatisches Domain-Management zwischen Ultimate Multisite und Cloudflare, insbesondere für Subdomain-Multisite-Installationen.

## Funktionen
- Automatische Subdomain-Erstellung in Cloudflare
- Unterstützung für proxied Subdomains
- DNS-Eintragsverwaltung
- Erweiterte DNS-Eintragsanzeige im Ultimate Multisite Admin

## Anforderungen
Die folgenden Konstanten müssen in deiner `wp-config.php`-Datei definiert sein:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Einrichtungsanleitung

### 1. Deinen Cloudflare API Key erhalten

1. Melde dich bei deinem Cloudflare Dashboard an
2. Gehe zu „Mein Profil“ (klicke oben rechts auf deine E-Mail-Adresse)
3. Wähle „API Tokens“ aus dem Menü
4. Erstelle ein neues API token mit den folgenden Berechtigungen:
   - Zone.Zone: Lesen
   - Zone.DNS: Bearbeiten
5. Kopiere dein API token

### 2. Deine Zone ID erhalten

1. Wähle in deinem Cloudflare Dashboard die Domain aus, die du verwenden möchtest
2. Die Zone ID ist im Tab „Überblick“ in der rechten Seitenleiste unter „API“ sichtbar
3. Kopiere die Zone ID

### 3. Konstanten zu wp-config.php hinzufügen

Füge die folgenden Konstanten zu deiner `wp-config.php`-Datei hinzu:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Die Integration aktivieren

1. Gehe in deinem WordPress Admin zu Ultimate Multisite > Einstellungen
2. Navigiere zum Tab „Domain Mapping“
3. Scrolle nach unten zu „Host-Integrationen“
4. Aktiviere die Cloudflare-Integration
5. Klicke auf „Änderungen speichern“

## Funktionsweise

### Subdomain-Verwaltung

Wenn in einer Subdomain-Multisite-Installation eine neue Website erstellt wird:

1. Die Integration sendet eine Anfrage an die API von Cloudflare, um einen CNAME-Eintrag für die Subdomain hinzuzufügen
2. Die Subdomain wird standardmäßig so konfiguriert, dass sie über Cloudflare proxied wird (dies kann mit Filtern geändert werden)
3. Wenn eine Website gelöscht wird, entfernt die Integration die Subdomain aus Cloudflare

### DNS-Eintragsanzeige

Die Integration erweitert die DNS-Eintragsanzeige im Ultimate Multisite Admin durch:

1. Abrufen von DNS-Einträgen direkt aus Cloudflare
2. Anzeigen, ob Einträge proxied sind oder nicht
3. Anzeigen zusätzlicher Informationen zu den DNS-Einträgen

## Cloudflare Custom Hostnames

**Cloudflare Custom Hostnames** (früher „Cloudflare for SaaS“ genannt) ist eine Cloudflare-Funktion, die es deinen Kunden ermöglicht, ihre eigenen Domains mit SSL in deinem Multisite-Netzwerk zu verwenden. Dies ist der empfohlene Ansatz für Domain-gemappte Multisite-Installationen, die Cloudflare verwenden, da Cloudflare die Ausstellung und Erneuerung der SSL-Zertifikate für jede benutzerdefinierte Domain automatisch verwaltet.

### Unterschied zur Standard-Cloudflare-Integration

| | Standardintegration | Cloudflare Custom Hostnames |
|---|---|---|
| **Zweck** | Erstellt automatisch DNS-Einträge für Subdomains | Ermöglicht benutzerdefinierte (gemappte) Domains mit von Cloudflare verwaltetem SSL |
| **Am besten geeignet für** | Subdomain-Multisite | Domain-gemappte Multisite |
| **SSL** | Wird separat gehandhabt | Wird automatisch von Cloudflare verwaltet |

### Cloudflare Custom Hostnames einrichten

1. Öffne in deinem Cloudflare Dashboard die Zone für deine Hauptdomain.
2. Gehe zu **SSL/TLS > Custom Hostnames**.
3. Füge einen Fallback-Origin hinzu, der auf die IP-Adresse oder den Hostnamen deines Servers verweist.
4. Füge für jede in Ultimate Multisite gemappte Kundendomain einen Custom Hostname-Eintrag in Cloudflare hinzu. Du kannst diesen Schritt mit der Cloudflare API automatisieren.
5. Cloudflare stellt TLS-Zertifikate für jeden benutzerdefinierten Hostnamen automatisch aus und erneuert sie, sobald das DNS des Kunden auf dein Netzwerk verweist.

Die vollständige API-Referenz findest du in der [Cloudflare Custom Hostnames-Dokumentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologie-Aktualisierung
Seit Ultimate Multisite v2.6.1 wird diese Funktion in allen Plugin-Einstellungen und Labels als **Cloudflare Custom Hostnames** bezeichnet. Frühere Versionen verwendeten den Namen „Cloudflare for SaaS“, der der zugrunde liegende Cloudflare-Produktname ist.
:::

## Wichtige Hinweise

Seit den jüngsten Updates von Cloudflare ist Wildcard-Proxying jetzt für alle Kunden verfügbar. Das bedeutet, dass die standardmäßige Cloudflare DNS-Integration für Subdomain-Multisite-Installationen weniger entscheidend ist als früher, da du einfach einen Wildcard-DNS-Eintrag in Cloudflare einrichten kannst.

## Fehlerbehebung

### API-Verbindungsprobleme
- Überprüfe, ob dein API token korrekt ist und die notwendigen Berechtigungen hat
- Prüfe, ob deine Zone ID korrekt ist
- Stelle sicher, dass dein Cloudflare-Account die notwendigen Berechtigungen hat

### Subdomain nicht hinzugefügt
- Prüfe die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Überprüfe, ob die Subdomain nicht bereits zu Cloudflare hinzugefügt wurde
- Stelle sicher, dass dein Cloudflare-Plan die Anzahl der DNS-Einträge unterstützt, die du erstellst

### Proxying-Probleme
- Wenn du nicht möchtest, dass Subdomains proxied werden, kannst du den `wu_cloudflare_should_proxy`-Filter verwenden
- Einige Funktionen funktionieren möglicherweise nicht korrekt, wenn proxied (z. B. bestimmte WordPress Admin-Funktionen)
- Erwäge, die Page Rules von Cloudflare zu verwenden, um den Cache für Admin-Seiten zu umgehen
