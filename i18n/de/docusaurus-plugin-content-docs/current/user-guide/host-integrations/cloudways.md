---
title: Cloudways-Integration
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways-Integration

## Übersicht {#overview}
Cloudways ist eine Managed-Cloud-Hosting-Plattform, mit der Sie WordPress-Websites bei verschiedenen Cloud-Anbietern wie DigitalOcean, AWS, Google Cloud und weiteren bereitstellen können. Diese Integration ermöglicht die automatische Domain-Synchronisierung und Verwaltung von SSL-Zertifikaten zwischen Ultimate Multisite und Cloudways.

## Funktionen {#features}
- Automatische Domain-Synchronisierung
- Verwaltung von SSL-Zertifikaten
- Unterstützung für zusätzliche Domains
- DNS-Validierung für SSL-Zertifikate

## Anforderungen {#requirements}
Die folgenden Konstanten müssen in Ihrer Datei `wp-config.php` definiert sein:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Optional können Sie auch Folgendes definieren:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Einrichtungsanleitung {#setup-instructions}

### 1. Ihre Cloudways-API-Zugangsdaten abrufen {#1-get-your-cloudways-api-credentials}

1. Melden Sie sich in Ihrem Cloudways-Dashboard an
2. Gehen Sie zu "Account" > "API Keys"
3. Erzeugen Sie einen API-Schlüssel, falls Sie noch keinen haben
4. Kopieren Sie Ihre E-Mail-Adresse und den API-Schlüssel

### 2. Ihre Server- und Anwendungs-IDs abrufen {#2-get-your-server-and-application-ids}

1. Gehen Sie in Ihrem Cloudways-Dashboard zu "Servers"
2. Wählen Sie den Server aus, auf dem Ihre WordPress-Multisite gehostet wird
3. Die Server-ID ist in der URL sichtbar: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Gehen Sie zu "Applications" und wählen Sie Ihre WordPress-Anwendung aus
5. Die App-ID ist in der URL sichtbar: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Konstanten zu wp-config.php hinzufügen {#3-add-constants-to-wp-configphp}

Fügen Sie die folgenden Konstanten zu Ihrer Datei `wp-config.php` hinzu:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Wenn Sie zusätzliche **externe** Domains haben (außerhalb Ihres Multisite-Netzwerks), die immer auf der Cloudways-Aliasliste beibehalten werden sollen:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Nehmen Sie den Wildcard Ihrer eigenen Netzwerks nicht auf
Fügen Sie `WU_CLOUDWAYS_EXTRA_DOMAINS` **nicht** `*.your-network.com` (oder ein Subdomain-Muster Ihres eigenen Netzwerks) hinzu. Siehe [Wichtig — Wildcard-SSL-Falle](#important--wildcard-ssl-pitfall)
unten, warum dies verhindert, dass SSL-Zertifikate pro Tenant ausgestellt werden.
:::

### 4. Integration aktivieren {#4-enable-the-integration}

1. Gehen Sie in Ihrem WordPress-Adminbereich zu Ultimate Multisite > Einstellungen
2. Navigieren Sie zum Tab "Domain Mapping"
3. Scrollen Sie nach unten zu "Host Integrations"
4. Aktivieren Sie die Cloudways-Integration
5. Klicken Sie auf "Änderungen speichern"

## Funktionsweise {#how-it-works}

### Domain-Synchronisierung {#domain-syncing}

Wenn eine Domain in Ultimate Multisite zugeordnet wird:

1. Die Integration ruft alle derzeit zugeordneten Domains ab
2. Sie fügt die neue Domain zur Liste hinzu (zusammen mit einer www-Version, falls zutreffend)
3. Sie sendet die vollständige Liste über die API an Cloudways
4. Cloudways aktualisiert die Domain-Aliase für Ihre Anwendung

Hinweis: Die Cloudways-API erfordert, dass jedes Mal die vollständige Liste der Domains gesendet wird, nicht nur das Hinzufügen oder Entfernen einzelner Domains.

### Verwaltung von SSL-Zertifikaten {#ssl-certificate-management}

Nachdem Domains synchronisiert wurden:

1. Die Integration prüft, welche Domains gültige DNS-Einträge haben, die auf Ihren Server verweisen
2. Sie sendet eine Anfrage an Cloudways, um Let's-Encrypt-SSL-Zertifikate für diese Domains zu installieren
3. Cloudways übernimmt die Ausstellung und Installation der SSL-Zertifikate

Die Integration fordert immer **standardmäßige** (Nicht-Wildcard-)Let's-Encrypt-Zertifikate von
Cloudways an. Wenn ein Wildcard-Muster in `WU_CLOUDWAYS_EXTRA_DOMAINS` angegeben wird, wird das führende
`*.` vor der SSL-Anfrage entfernt — der Wildcard selbst wird von dieser
Integration nie installiert. Um ein Wildcard-Zertifikat auf Cloudways zu verwenden, müssten Sie es
manuell installieren, aber dadurch wird die Ausstellung von Let's Encrypt pro Domain für zugeordnete benutzerdefinierte Domains blockiert
(siehe die Falle unten).

## Zusätzliche Domains {#extra-domains}

Die Konstante `WU_CLOUDWAYS_EXTRA_DOMAINS` ermöglicht es Ihnen, zusätzliche **externe**
Domains anzugeben, die immer auf der Aliasliste der Cloudways-Anwendung beibehalten werden sollen. Verwenden Sie sie für:

- Externe Domains, die nicht von Ultimate Multisite verwaltet werden (z. B. eine separate Marketing-Website, die dieselbe Cloudways-Anwendung teilt)
- Geparkte oder Staging-Domains, die Sie auf der Anwendungs-Aliasliste beibehalten möchten

Verwenden Sie diese Konstante **nicht** für den Subdomain-Wildcard Ihres eigenen Netzwerks
(z. B. `*.your-network.com`). Siehe die Wildcard-SSL-Falle unten.

## Wichtig — Wildcard-SSL-Falle {#important--wildcard-ssl-pitfall}

Ein häufiger Fehler beim Befolgen der Standard-Einrichtung von Cloudways besteht darin, einen Wildcard wie
`*.your-network.com` zu `WU_CLOUDWAYS_EXTRA_DOMAINS` hinzuzufügen oder manuell ein Cloudways-
Wildcard-SSL-Zertifikat für diesen Wildcard zu installieren.

**Wenn Sie dies tun, verweigert Cloudways die Ausstellung von Let's-Encrypt-Zertifikaten für die
benutzerdefinierten Domains pro Tenant, die Ultimate Multisite zuordnet.** Cloudways ersetzt jedes Mal das aktive
SSL-Zertifikat auf der Anwendung, und ein bereits vorhandenes Wildcard-Zertifikat auf
der Anwendung blockiert die Ausstellung von Let's Encrypt pro Domain, auf die die Integration angewiesen ist.

### Empfohlene Cloudways-SSL-Einrichtung für ein Ultimate Multisite-Netzwerk {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Installieren Sie im Tab **SSL Certificate** der Cloudways-Anwendung ein **standardmäßiges
   Let's-Encrypt-Zertifikat**, das nur `your-network.com` und `www.your-network.com` abdeckt
   — **kein** Wildcard.
2. Setzen Sie `*.your-network.com` (oder ein Subdomain-Muster Ihres eigenen Netzwerks) **nicht** in
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Reservieren Sie diese Konstante nur für **externe** Domains.
3. Erstellen Sie den Subdomain-Wildcard pro Tenant nur auf **DNS**-Ebene (einen `A`-Eintrag für
   `*.your-network.com`, der auf die IP Ihres Cloudways-Servers verweist), damit Subsites aufgelöst werden. SSL
   für einzelne zugeordnete benutzerdefinierte Domains wird dann automatisch von der Integration
   über Let's Encrypt ausgestellt.

Wenn die benutzerdefinierten Domains deiner Mandanten ohne SSL festhängen, prüfe den Cloudways-SSL-Tab. Wenn dort ein
Wildcard-Zertifikat aktiv ist, entferne es, stelle ein standardmäßiges Let's-Encrypt-
Zertifikat nur für die Haupt-Netzwerk-Domain neu aus und entferne alle Wildcard-Einträge aus
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Löse dann ein Domain-Mapping erneut aus (oder warte auf das nächste)
und die Integration beginnt wieder damit, Zertifikate pro Domain auszustellen.

## Fehlerbehebung {#troubleshooting}

### API-Verbindungsprobleme {#api-connection-issues}
- Überprüfe, ob deine E-Mail-Adresse und dein API-Schlüssel korrekt sind
- Prüfe, ob deine Server- und Anwendungs-IDs korrekt sind
- Stelle sicher, dass dein Cloudways Account über die notwendigen Berechtigungen verfügt

### SSL-Zertifikatprobleme {#ssl-certificate-issues}
- Cloudways verlangt, dass Domains gültige DNS-Einträge haben, die auf deinen Server verweisen, bevor SSL-Zertifikate ausgestellt werden
- Die Integration validiert DNS-Einträge, bevor SSL-Zertifikate angefordert werden
- Wenn keine SSL-Zertifikate ausgestellt werden, prüfe, ob deine Domains ordnungsgemäß auf die IP-Adresse deines Servers verweisen
- **Benutzerdefinierte Domains pro Mandant ohne SSL festhängend?** Prüfe den Tab „SSL Certificate“ der Cloudways-Anwendung. Wenn ein Wildcard-Zertifikat (manuell installiert oder `*.your-network.com` abdeckend) aktiv ist, stellt Cloudways keine Let's-Encrypt-Zertifikate für individuell zugeordnete benutzerdefinierte Domains aus. Ersetze es durch ein standardmäßiges Let's-Encrypt-Zertifikat, das nur die Haupt-Netzwerk-Domain (`your-network.com`, `www.your-network.com`) abdeckt, und entferne alle Wildcard-Einträge aus `WU_CLOUDWAYS_EXTRA_DOMAINS`. Löse dann ein Domain-Mapping erneut aus (oder warte auf das nächste) und die Integration wird Zertifikate pro Domain anfordern.

### Domain nicht hinzugefügt {#domain-not-added}
- Prüfe die Ultimate Multisite-Protokolle auf Fehlermeldungen
- Überprüfe, ob die Domain nicht bereits zu Cloudways hinzugefügt wurde
- Stelle sicher, dass dein Cloudways-Plan die Anzahl der Domains unterstützt, die du hinzufügst
