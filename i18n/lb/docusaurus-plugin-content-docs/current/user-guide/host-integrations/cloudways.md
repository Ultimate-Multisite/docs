---
title: Cloudways Integratioun
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Überblick {#overview}
Cloudways isch e verwalteti Cloud-Hosting-Plattform, wo dir erlaubt, WordPress-Sites uf verschidene Cloud-Provider wie DigitalOcean, AWS, Google Cloud und meh z'deploye. Dä Integration ermöglicht automatische Domain-Synchronisation und SSL-Zertifikat-Management zwüsche Ultimate Multisite und Cloudways.

## Features {#features}
- Automatische Domain-Synchronisation
- SSL-Zertifikat-Management
- Unterstützig für extra Domains
- DNS-Validierig für SSL-Zertifikate

## Anforderungen {#requirements}
D'folgende Konstante müend du in din `wp-config.php` Datei definiere:

```php
define('WU_CLOUDWAYS_EMAIL', 'din_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'din_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'din_server_id');
define('WU_CLOUDWAYS_APP_ID', 'din_app_id');
```

Optional chasch du au folgendes definiere:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'komma,getrennt,liste,vo,domains');
```

## Setup-Anleitig {#setup-instructions}

### 1. Hol dir dini Cloudways API Credentials {#1-get-your-cloudways-api-credentials}

1. Log dich i dim Cloudways Dashboard ii
2. Gang zu "Account" > "API Keys"
3. Generier en API-Key, falls du no kei hesch
4. Kopier dini E-Mail und de API-Key

### 2. Hol dir dini Server- und App-IDs {#2-get-your-server-and-application-ids}

1. Im Cloudways Dashboard gang zu "Servers"
2. Wähl de Server us, wo dini WordPress Multisite gehostet isch
3. D'Server ID isch i de URL sichtbar: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gang zu "Applications" und wähl dini WordPress-App us
5. D'App ID isch i de URL sichtbar: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Füeg Konstante zu wp-config.php hinzu {#3-add-constants-to-wp-configphp}

Füeg d'folgende Konstante in dini `wp-config.php` Datei ii:

```php
define('WU_CLOUDWAYS_EMAIL', 'uwys-cloudways-email');
define('WU_CLOUDWAYS_API_KEY', 'uwys-api-key');
define('WU_CLOUDWAYS_SERVER_ID', 'uwys-server-id');
define('WU_CLOUDWAYS_APP_ID', 'uwys-app-id');
```

Wenn Sie wiiteri **externi** Domäne (voite usserhalb vo Ihrem Multisite-Netzwerk) händ, wo immer uf de Cloudways Alias-Liste si sölle blibe:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Füege Sie nöd d'Wildcard vo Ihrem eigete Netz i
Füge `*.ihre-netzwerk.com` (oder jede Subdomain-Muster vo Ihrem eigene Netzwerk) nöd zu
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Lueg bitte unter [Wichtig — wildcard SSL Falle](#important--wildcard-ssl-pitfall) druf, warum das verhindert, dass pro Tenant SSL-Zertifikate usgstellt wärde.
:::

### 4. D'Integration aktiviere {#4-enable-the-integration}

1. Im WordPress Admin-Bereich gahts zu Ultimate Multisite > Settings
2. Navigiered zur Registerkarte "Domain Mapping" (Domän-Zuordnung)
3. Scrolled Sie uf "Host Integrations" (Host-Integrationen) ab
4. Aktiviere d'Cloudways Integration
5. Klicke Sie uf "Save Changes" (Änderige speichern)

## Wie funktioniert das? {#how-it-works}

### Domain Syncing (Domän-Synchronisierig) {#domain-syncing}

Wenn e Domäne in Ultimate Multisite zuordnet wird:

1. D'Integration holt alli aktuell zuordnete Domänen ab
2. Si füegt d'neui Domäne zur Liste hinzu (mit ere www-Version, falls zutreffend)
3. Si schickt d'ganzi Liste über d'API a Cloudways
4. Cloudways aktualisiert d'Domain Aliase für dini App

Hinweis: D'Cloudways API brucht jedes Mal d'ganzi Liste vo Domänen z'schicke, nöd nur einzelni Domäne hinzuzfüege oder z'entferne.

### SSL Certificate Management (SSL-Zertifikat-Verwaltig) {#ssl-certificate-management}

Nachdem d'Domänen synchronisiert sind:

1. D'Integration prüeft, welchi Domänen gültigi DNS-Einträge uf Ihren Server händ
2. Si schickt en Aafrog a Cloudways, um Let's Encrypt SSL Zertifikate für die Domänen z'installiere
3. Cloudways übernimmt d'Uusstellig und Installation vom SSL Zertifikat

D'Integration fordert immer **standard** (nöd-wildcard) Let's Encrypt-Zertifikaten vo Cloudways a. Wenn e wildcard-Muster in `WU_CLOUDWAYS_EXTRA_DOMAINS` aggebotte wird, wird d'führendi `*.` vor de SSL-Aafrog entfernt – s'wildcard selber wird mit dere Integration nie installiert. Um es wildcard-Zertifikat uf Cloudways z'bruche, müesst du es manuell installiere, aber das blockiert d'Let's Encrypt-Ussgabe pro Domain für mappti benutzerdefinierti Domains (siehe Fallstrick unta).

## Extra Domains {#extra-domains}

D'Konstante `WU_CLOUDWAYS_EXTRA_DOMAINS` erlaubt dir, zusätzlechi **externi** Domains z'spezifiziere, wo immer uf de Alias-Liste vo de Cloudways App blibe sölled. Bruchs sie für:

- Externi Domains, wo nöd vo Ultimate Multisite verwaltet wärde (z.B. e separate Marketing-Site, wo di gliichi Cloudways App teilt).
- Parkti oder Staging-Domains, wo du uf de Alias-Liste vo de App blibe sölled.

Bruchs die Konstante **nöd** für d'Subdomain-Wildcard vo dim eigene Netzwerk (z.B. `*.your-network.com`). Sieh dir de Wildcard SSL Fallstrick unta a.

## Wichtig — Wildcard SSL Fallstrick {#important--wildcard-ssl-pitfall}

E häufige Fehler bi de Folg vo de Standard-Iistellig vo Cloudways isch, e wildcard wie `*.your-network.com` i `WU_CLOUDWAYS_EXTRA_DOMAINS` z'füege oder es manuell Cloudways wildcard SSL-Zertifikat für die Wildcard z'installiere.

**Wenn du das machsch, wird Cloudways d'Ussgabe vo Let's Encrypt-Zertifikaten für di pro-Tenant benutzerdefinierten Domains blockiere, wo Ultimate Multisite mappet.** Cloudways ersetzt s'aktivi SSL-Zertifikat uf de App jedes Mal neu, und es vorhär existierends wildcard-Zertifikat uf de App blockiert d'pro-Domain Let's Encrypt-Ussgabe, wo die Integration sich druf verlaast.

### Empfohleni Cloudways SSL Iistellig für es Ultimate Multisite Netzwerk {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Installier en Tab **SSL Certificate** vo de Cloudways applicatioun, installier en **standard Let's Encrypt certificate** wo nur `your-network.com` und `www.your-network.com` abdeckt — **nöd** e wildcard.
2. Setet nöd `*.your-network.com` (oder irgendein Subdomain Muster vo Ihrer eigete Netzwerch) in `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reservieret die Konstante nur für **externi** Domäne.
3. Erstelle de per-tenant subdomain wildcard nur uf de **DNS** Ebene (en `A` record für `*.your-network.com`, wo uf d'IP vo Ihrem Cloudways Server zeigt) so dass Subsites auufgelöst wärde. SSL für einzelni mappti benutzerdefinierti Domäne wird denn automatisch über d'Integration via Let's Encrypt usgstellt.

Wenn d'benutzerdefinierten Domäne vo Ihre Mieter ohni SSL feststeckt, überprüefet de Cloudways SSL Tab. Wenn dört en wildcard certificate aktiv isch, entferne sie, stell en standard Let's Encrypt certificate nur für d'Hauptnetzwerchdomäne neu und entferne alli wildcard Einträg us `WU_CLOUDWAYS_EXTRA_DOMAINS`. Denn triggeret en Domain Mapping (oder wartet uf de nöchsti) und d'Integration fangt a, per Domäne Zertifikate wieder uszstelle.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Überprüefet, ob Ihre E-Mail und API Key korrekt sind
- Überprüefet, ob Ihre Server- und Application IDs korrekt sind
- Stell sicher, dass Ihr Cloudways Account d'nötige Berechtigunge het

### SSL Zertifikatsprobleme {#ssl-certificate-issues}
- Cloudways verlangt, dass Domänen gültigi DNS-Einträge uf Ihren Server zeige, bevor SSL-Zertifikate usgstellt werde chönne.
- D Integration prüeft d DNS-Einträg vor de Aafrog nach SSL-Zertifikaten.
- Wenn SSL-Zertifikate nöd usgstellt werde, überprüef, ob dini Domäne korrekt uf d IP-Adress vom Server zeigt.
- **Per-tenant benutzerdefinierti Domänen ohni SSL feststecke?** Überprüef de Tab "SSL Certificate" i de Cloudways Applikation. Wenn es en Wildcard-Zertifikat (manuell installiert oder wo `*.your-network.com` abdeckt) aktiv isch, wird Cloudways Let's Encrypt Zertifikate für einzeln mappti benutzerdefinierti Domänen nöd usgäh. Ersetz das mit eme Standard Let's Encrypt Zertifikat, wo nur d Hauptnetzwerkdomäne (`your-network.com`, `www.your-network.com`) abdeckt, und entfern all Wildcard-Einträg us `WU_CLOUDWAYS_EXTRA_DOMAINS`. Start denn en Domänenmappig neu (oder warte uf d nächsti) und d Integration wird Zertifikate pro Domäne aafroge.

### Domäne nöd hinzugefügt {#domain-not-added}
- Überprüef d Ultimate Multisite Logs uf irgendwelchi Fehlermeldige.
- Bestätig, dass d Domäne nöd scho zu Cloudways hinzugefügt isch.
- Stell sicher, dass din Cloudways Plan d Anzahl Domänen unterstützt, wo du hinzufüegsch.
