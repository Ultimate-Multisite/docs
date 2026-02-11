---
title: Cloudflare-Integration
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare Integration

## Überblick
Cloudflare ist ein führendes Content Delivery Network (CDN) und Sicherheitsanbieter, der hilft, Websites zu schützen und zu beschleunigen. Diese Integration ermöglicht die automatische Domainverwaltung zwischen Ultimate Multisite und Cloudflare, insbesondere für Subdomain-Multisite-Installationen.

## Funktionen
- Automatische Subdomain-Erstellung in Cloudflare
- Unterstützung für proxied Subdomains
- DNS‑Eintragverwaltung
- Verbesserte DNS‑Eintragsanzeige im Ultimate Multisite‑Admin

## Anforderungen
Die folgenden Konstanten müssen in Ihrer `wp-config.php` definiert sein:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Installationsanweisungen

### 1. Erhalten Sie Ihren Cloudflare API‑Schlüssel

1. Melden Sie sich bei Ihrem Cloudflare‑Dashboard an
2. Gehen Sie zu „My Profile“ (klicken Sie auf Ihre E‑Mail in der oberen rechten Ecke)
3. Wählen Sie „API Tokens“ aus dem Menü
4. Erstellen Sie ein neues API‑Token mit den folgenden Berechtigungen:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopieren Sie Ihr API‑Token

### 2. Erhalten Sie Ihre Zone‑ID

1. Wählen Sie in Ihrem Cloudflare‑Dashboard die Domain aus, die Sie verwenden möchten
2. Die Zone‑ID ist im Tab „Overview“ in der rechten Seitenleiste unter „API“ sichtbar
3. Kopieren Sie die Zone‑ID

### 3. Fügen Sie Konstanten zu `wp-config.php` hinzu

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktivieren Sie die Integration

1. Gehen Sie in Ihrem WordPress‑Admin zu Ultimate Multisite > Settings
2. Navigieren Sie zum Tab „Domain Mapping“
3. Scrollen Sie nach unten zu „Host Integrations“
4. Aktivieren Sie die Cloudflare‑Integration
5. Klicken Sie auf „Save Changes“

## Funktionsweise

### Subdomain‑Management

Wenn eine neue Site in einer Subdomain‑Multisite‑Installation erstellt wird:

1. Sendet die Integration eine Anfrage an die Cloudflare‑API, um einen CNAME‑Eintrag für die Subdomain hinzuzufügen
2. Die Subdomain wird standardmäßig über Cloudflare proxied (dies kann mit Filtern geändert werden)
3. Wenn eine Site gelöscht wird, entfernt die Integration die Subdomain von Cloudflare

### DNS‑Eintragsanzeige

Die Integration verbessert die DNS‑Eintragsanzeige im Ultimate Multisite‑Admin durch:

1. Abrufen von DNS‑Einträgen direkt von Cloudflare
2. Anzeige, ob Einträge proxied sind oder nicht
3. Anzeige zusätzlicher Informationen zu den DNS‑Einträgen

## Wichtige Hinweise

Seit den jüngsten Updates von Cloudflare ist Wildcard‑Proxying jetzt für alle Kunden verfügbar. Das bedeutet, dass die Cloudflare‑Integration für Subdomain‑Multisite‑Installationen weniger kritisch ist als früher, da Sie einfach einen Wildcard‑DNS‑Eintrag in Cloudflare einrichten können.

## Fehlerbehebung

### API‑Verbindungsprobleme
- Stellen Sie sicher, dass Ihr API‑Token korrekt ist und die erforderlichen Berechtigungen hat
- Überprüfen Sie, ob Ihre Zone‑ID korrekt ist
- Stellen Sie sicher, dass Ihr Cloudflare‑Konto die erforderlichen Berechtigungen hat

### Subdomain nicht hinzugefügt
- Überprüfen Sie die Ultimate Multisite‑Logs auf Fehlermeldungen
- Stellen Sie sicher, dass die Subdomain nicht bereits zu Cloudflare hinzugefügt wurde
- Stellen sicher, dass Ihr Cloudflare‑Plan die Anzahl der von Ihnen erstellten DNS‑Einträge unterstützt

### Proxy‑Probleme
- Wenn Sie nicht möchten, dass Subdomains proxied werden, können Sie den Filter `wu_cloudflare_should_proxy` verwenden
- Einige Funktionen funktionieren möglicherweise nicht korrekt, wenn proxied (z. B. bestimmte WordPress‑Admin‑Funktionen)
- Erwägen Sie die Verwendung von Cloudflare's Page Rules, um den Cache für Admin‑Seiten zu umgehen
