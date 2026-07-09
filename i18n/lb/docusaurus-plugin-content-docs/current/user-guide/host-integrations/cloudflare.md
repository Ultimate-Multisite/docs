---
title: Cloudflare Integration
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integration {#cloudflare-integration}

## Überblick {#overview}
Cloudflare isch en führendi Content Delivery Network (CDN) und Sicherheitsdienst, wo hilft, Websites z'schütze und z'beschleunige. Dä Integration ermöglicht d'automatisch Domain-Verwaltung zwüsche Ultimate Multisite und Cloudflare, bsunders bi Subdomain Multisite Installatione.

## Features {#features}
- Automatisch Subdomain-Erstellig in Cloudflare
- Proxied Subdomain-Unterstützig
- DNS-Record-Verwaltig
- Verbesserti DNS-Record-Anzeige im Ultimate Multisite Admin

## Requirements {#requirements}
D'folgende Konstante müesse Sie i Ihrer `wp-config.php` Datei definiere:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Setup Instructions {#setup-instructions}

### 1. Holen Sie sich Ihren Cloudflare API Key {#1-get-your-cloudflare-api-key}

1. Logge sich i Ihrem Cloudflare Dashboard ii
2. Gehe zu "My Profile" (klicke uf Ihre E-Mail in de obere rechte Ecke)
3. Wähle "API Tokens" us em Menü
4. Erstelle en neui API Token mit de folgende Berechtigunge:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopiere Ihren API Token

### 2. Holen Sie sich Ihre Zone ID {#2-get-your-zone-id}

1. Im Cloudflare Dashboard wähle d'Domain us, wo Sie bruche wend
2. D'Zone ID isch im Tab "Overview" sichtbar, i de rechte Seitenleist unter "API"
3. Kopiere d'Zone ID

### 3. Fügen Sie Konstanten zu wp-config.php hinzu {#3-add-constants-to-wp-configphp}

Füge die folgende Konstante zu Ihrer `wp-config.php` Datei hinzu:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Aktivieren Sie die Integration {#4-enable-the-integration}

1. Im WordPress Admin geit zu Ultimate Multisite > Settings
2. Navigiere zum Tab "Domain Mapping"
3. Scrollen Sie nach unten bis zu "Host Integrations"
4. Aktiviered d'Cloudflare Integration
5. Klicke uf "Save Changes"

## Wie funktioniert es? {#how-it-works}

### Subdomain Management {#subdomain-management}

Wenn en neui Site i ere Subdomain Multisite Installation erstellt wird:

1. D'Integration sendt en Aafrogfrëscht an Froes an d'API vun Cloudflare, um en CNAME-Record fir de Unterdomän hinzuezfüegen.
2. De Unterdomän ass standardwiis dur Cloudflare proxied (dats kann mit Filters ändere ginn).
3. Wann e Site glöscht wird, entfernt d'Integration de Unterdomän vun Cloudflare.

### DNS-Record-Anzeige {#dns-record-display}

D'Integration verbessert d'Anzeige vun DNS-Records im Ultimate Multisite Admin dur:

1. DNS-Records direkt vun Cloudflare z'fetzen
2. Z'zeiged, ob Records proxied sinn oder net
3. Ergänzend Information über d'DNS-Records zeige

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (früehner genaht "Cloudflare for SaaS") isch en Cloudflare Feature, wo dinne Kunde erlaubt, ihri eigete Domäne mit SSL uf dim Multisite-Netzwerk z'bruche. Dat isch de empfohle Weg fir multisite Installatione, déi mit Cloudflare verknüpft sinn und Custom Domains benotzen, well Cloudflare d'SSL-Zertifikat-Ussgab an und Erneuerung automatisch fir jede Custom Domain verwaltet.

### Wie dat sich vun der Standard-Cloudflare Integration unterscheed {#how-it-differs-from-the-standard-cloudflare-integration}

| | Standard integration | Cloudflare Custom Hostnames |
|---|---|---|
| **Zweck** | Automatisch DNS-Records fir Unterdomänen erschaffen | Ermöglicht Custom (verknüpft) Domänen mit Cloudflare-verwalteter SSL |
| **Am beschte fir** | Unterdomän Multisite | Domain-verknüpfte Multisite |
| **SSL** | Separat verwaltet | Automatisch vun Cloudflare verwaltet |

### Cloudflare Custom Hostnames iistelle {#setting-up-cloudflare-custom-hostnames}

1. Öffne im Cloudflare Dashboard d'Zone für dini Hauptdomaine.
2. Gang zu **SSL/TLS > Custom Hostnames**.
3. Füeg en Fallback origin hinzu, wo uf d'IP oder de Hostname vo dim Server zeigt.
4. Für jede Kundedomain, wo in Ultimate Multisite abgebunde isch, füeg en Custom Hostname-Eintrag i Cloudflare hinzu. Du chasch dä Schritt mit de Cloudflare API automatisierä.
5. Cloudflare stellt und erneuert TLS-Zertifikat automatisch für jede Custom Hostname, sobald d'DNS vom Kunde uf dis Netzwerk zeigt.

Für d'vollständigi API-Referenz lueg dir [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Terminologie-Update
Ab Ultimate Multisite v2.6.1 wird die Funktion in allne Plugin-Iistellige und Labels als **Cloudflare Custom Hostnames** bezeichnet. Früecheri Versionen händ de Name "Cloudflare for SaaS" brucht, was de eigentliche Cloudflare Produktname isch.
:::

## Wichtigi Notize {#important-notes}

Ab de neuste Updates vo Cloudflare isch Wildcard Proxying für alli Kunde jetzt verfügbar. Das heisst, d'standardmässigi Cloudflare DNS-Integration isch für Subdomain Multisite-Installationen weniger wichtig als früecher, will du eifach en Wildcard DNS-Eintrag i Cloudflare iistelle chasch.

## Fehlerbehebung {#troubleshooting}

### API-Verbindigsprobleme {#api-connection-issues}
- Überprüef, ob din API Token korrekt isch und d'nötige Berechtigunge het.
- Prüef, ob dini Zone ID korrekt isch.
- Stell sicher, dass dis Cloudflare Konto d'nötige Berechtigunge het.

### Subdomain nöd hinzugefügt {#subdomain-not-added}
- Überprüef d'Ultimate Multisite Logs uf Fehlermeldige.
- Verifiziere, dass d'Subdomain nöd scho i Cloudflare drin isch.
- Stell sicher, dass din Cloudflare Plan d'Anzahl vo DNS-Einträgen unterstützt, wo du erstellsch.

### Proxyingsprobleme {#proxying-issues}

- Wenn Sie Subdomains nöd proxieren wend, chönnt Sie de Filter `wu_cloudflare_should_proxy` bruche.
- Es chan si sii, dass es e paar Funktione nöd richtig funktioniert, wenn sie proxied sind (zum Bischpil bestimti WordPress Admin-Funktione).
- Überleged, Cloudflare Page Rules z'bruche, um de Cache für Admin-Seiten z'umgah.
