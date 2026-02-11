---
title: RunCloud-Integration
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## Überblick
RunCloud ist eine cloudbasierte Serververwaltungsplattform, die es Ihnen ermöglicht, Webanwendungen einfach auf Ihren eigenen Cloud-Servern bereitzustellen und zu verwalten. Diese Integration ermöglicht die automatische Synchronisierung von Domains und die Verwaltung von SSL-Zertifikaten zwischen Ultimate Multisite und RunCloud.

## Funktionen
- Automatische Domain‑Synchronisierung
- Verwaltung von SSL‑Zertifikaten
- Entfernung von Domains, wenn Zuordnungen gelöscht werden

## Voraussetzungen
Die folgenden Konstanten müssen in Ihrer `wp-config.php`‑Datei definiert sein:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Installationsanweisungen

### 1. Holen Sie sich Ihre RunCloud API‑Anmeldeinformationen

1. Melden Sie sich bei Ihrem RunCloud‑Dashboard an  
2. Gehen Sie zu **User Profile** (klicken Sie auf Ihr Profilbild in der oberen rechten Ecke)  
3. Wählen Sie **API** aus dem Menü  
4. Klicken Sie auf **Generate API Key**, falls Sie noch keinen haben  
5. Kopieren Sie Ihren API Key und Ihr API Secret  

### 2. Holen Sie sich Ihre Server‑ und App‑IDs

1. Gehen Sie in Ihrem RunCloud‑Dashboard zu **Servers**  
2. Wählen Sie den Server aus, auf dem Ihre WordPress‑Multisite gehostet wird  
3. Die Server‑ID ist in der URL sichtbar: `https://manage.runcloud.io/servers/{SERVER_ID}`  
4. Gehen Sie zu **Web Applications** und wählen Sie Ihre WordPress‑Anwendung aus  
5. Die App‑ID ist in der URL sichtbar: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`  

### 3. Fügen Sie Konstanten zu wp-config.php hinzu

Fügen Sie die folgenden Konstanten zu Ihrer `wp-config.php`‑Datei hinzu:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Aktivieren Sie die Integration

1. Gehen Sie in Ihrem WordPress‑Adminbereich zu **Ultimate Multisite > Settings**  
2. Navigieren Sie zur Registerkarte **Domain Mapping**  
3. Scrollen Sie nach unten zu **Host Integrations**  
4. Aktivieren Sie die RunCloud‑Integration  
5. Klicken Sie auf **Save Changes**  

## Wie es funktioniert

Wenn eine Domain in Ultimate Multisite zugeordnet wird:

1. Die Integration sendet eine Anfrage an die RunCloud‑API, um die Domain zu Ihrer Anwendung hinzuzufügen  
2. Wenn die Domain erfolgreich hinzugefügt wurde, wird die Integration auch SSL‑Zertifikate neu bereitstellen  
3. Wenn eine Domain‑Zuordnung entfernt wird, entfernt die Integration die Domain von RunCloud  

Für Subdomain‑Installationen wird die Integration automatisch die Erstellung von Subdomains in RunCloud übernehmen, wenn neue Sites zu Ihrem Netzwerk hinzugefügt werden.

## Fehlerbehebung

### API‑Verbindungsprobleme
- Überprüfen Sie, ob Ihre API‑Anmeldeinformationen korrekt sind  
- Überprüfen Sie, ob Ihre Server‑ und App‑IDs korrekt sind  
- Stellen Sie sicher, dass Ihr RunCloud‑Konto die erforderlichen Berechtigungen hat  

### SSL‑Zertifikatsprobleme
- RunCloud kann einige Zeit benötigen, um SSL‑Zertifikate auszustellen  
- Überprüfen Sie, ob Ihre Domains korrekt auf die IP‑Adresse Ihres Servers zeigen  
- Überprüfen Sie die RunCloud SSL‑Einstellungen für Ihre Anwendung  

### Domain nicht hinzugefügt
- Überprüfen Sie die Ultimate Multisite‑Protokolle auf Fehlermeldungen  
- Überprüfen Sie, ob die Domain nicht bereits zu RunCloud hinzugefügt wurde  
- Stellen Sie sicher, dass Ihr RunCloud‑Plan mehrere Domains unterstützt
