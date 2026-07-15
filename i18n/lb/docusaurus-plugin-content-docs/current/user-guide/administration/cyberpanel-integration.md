---
title: CyberPanel Integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Dëse Leit erklärt, wie Sie d'Ultimate Multisite CyberPanel Integration konfigurieren, damit die in Ihrem Netzwerk gemappten Domains automatisch als virtuelle Hosts in CyberPanel hinzugefügt (und entfernt) werden – mit optionalem Auto-SSL-Provisioning über Let's Encrypt.

## Was es macht {#what-it-does}

- Wenn eine Domain in Ultimate Multisite gemappt wird, ruft die Integration die CyberPanel API auf, um einen virtuellen Host für diese Domain zu erstellen.
- Wenn eine Domain-Zuordnung entfernt wird, ruft die Integration die API auf, um den entsprechenden virtuellen Host zu löschen.
- Wenn Auto-SSL aktiviert ist, startet die Integration sofort nach der Erstellung des virtuellen Hosts die Zertifikatsausstellung von Let's Encrypt.
- Optional fügt/entfernt es den `www.` Alias je nach Ihrer Einstellung "Auto-create www subdomain" in den Domain Mapping Einstellungen.

## Voraussetzungen {#prerequisites}

- Eine laufende CyberPanel-Instanz (v2.3 oder neuer empfohlen), die von Ihrem WordPress-Server erreichbar ist.
- Eine bestehende Website in CyberPanel, die bereits die Wurzel Ihres WordPress-Netzwerks bedient. Die Integration hängt neue virtuelle Hosts an diesen Server an.
- CyberPanel API Zugriff aktiviert. Die Authentifizierung erfolgt mit Ihrem CyberPanel Admin-Benutzernamen und Passwort.
- Ihre DNS-Einträge für gemappte Domains müssen bereits auf die IP-Adresse Ihres Servers zeigen, bevor Auto-SSL ein gültiges Zertifikat ausstellen kann.

## Anforderungen {#requirements}

Die folgenden Konstanten müssen in Ihrer `wp-config.php` Datei definiert sein:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optional können Sie auch definieren:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standard: true — stellt Let's Encrypt SSL nach Domain-Erstellung bereit
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standard: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Wird für Kontakt bezüglich des SSL-Zertifikats verwendet
```

## Setup-Aafangsrichtlinie {#setup-instructions}

### 1. CyberPanel API aktiviere {#1-enable-the-cyberpanel-api}

1. Logge dich in dein CyberPanel-Dashboard als Administrator ein.
2. Gehe zu **Security** > **SSL** und bestätige, dass SSL auf der CyberPanel-Oberfläche selbst aktiv ist (erforderlich für sichere API-Aufrufe).
3. D'CyberPanel API isch standardmässig unter `https://your-server-ip:8090/api/` verfügbar. Es sind kei zusätzliche Schritt nötig, um sie zu aktivieren – sie isch für Admin-User standardmässig aktiv.

### 2. Konstante in wp-config.php hinzufügen {#2-add-constants-to-wp-configphp}

Füg die folgende Konstanten in deine `wp-config.php`-Datei vor der Zeile `/* That's all, stop editing! */` hinzu:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'dei_sichere_passwort');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Um Auto-SSL z'aktivierä (empfohlen):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integration aktiviere {#3-enable-the-integration}

1. Im WordPress Network Admin geisch zu **Ultimate Multisite** > **Settings**.
2. Navig zu de Register **Domain Mapping**.
3. Scrolle nach unten bis zu **Host Integrations**.
4. Aktiviere d'Integration **CyberPanel**.
5. Klick uf **Save Changes**.

### 4. Verbindig überprüefe {#4-verify-connectivity}

Benutz de integrierte Verbindungstest im Settings-Wizard:

1. Gang zu **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klicke uf **Test Connection**.
3. E Erfolgsmeldig bestätigt, dass de Plugin d'CyberPanel API erreiche und sich korrekt authentifiziere kann.

## Wie es funktioniert {#how-it-works}

### Domain Mapping {#domain-mapping}

Wenn e Domain in Ultimate Multisite abgebunde wird:

1. Sende d'Integration en `POST` Request an `/api/createWebsite` uf dim CyberPanel Host.
2. CyberPanel erstellt en neui virtuelle Host für d'Domain unter em konfigurierten Paket.
3. De Document Root wird so igstellt, dass er uf de WordPress Network Root Directory zeigt.
4. Wenn d'Domain Mapping entfernt wird, ruft d'Integration `/api/deleteWebsite` uf, um de virtuelle Host z'lösche.

### Auto-SSL {#auto-ssl}

Wenn `WU_CYBERPANEL_AUTO_SSL` uf `true` gstellt isch:

1. Nach em Erstelle vom virtuellen Host ruft d'Integration `/api/issueSSL` für d'Domain uf.
2. CyberPanel bittet Let's Encrypt um es Zertifikat mit de ACME HTTP-01 Challenge.
3. CyberPanel erneuert s'Zertifikat automatisch vor em Ablauf.

> **Wichtig:** D'DNS muess vollständig uf d'IP-Adress vo dim Server propagiert sii, bevor Let's Encrypt d'Domain validiere kann. Wenn d'SSL-Uusstell sofort nach de Mapping fehlschlaht, warte uf d'DNS-Propagierung und starte d'SSL neu über s'CyberPanel Dashboard unter **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Wenn **Auto-create www subdomain** in dine Domain Mapping Einstellungen aktiviert isch, erstellt d'Integration au en virtuelle Host Alias für `www.<domain>` und stellt bei Auto-SSL es Zertifikat us, wo sowohl d'Apex- als d'www-Variante abdeckt.

### E-Mail Forwarder {#email-forwarders}

Wann d'Addon [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) aktiv isch, cha CyberPanel au Kundefachmail-Weiterleitige aabietä. Weiterleitige leite Nachrichte vo ere Domain-Adresse zu ere andere Postfach um, ohni es ganzes Postfach z'mache, was nützlich isch für Aliase wie `info@customer-domain.test` oder `support@customer-domain.test`.

Bevor Sie Weiterleitige für Kunde aktivieren:

1. Bestätige, dass d'obige CyberPanel Konstante konfiguriert sind und de Verbindigstest erfolgreich isch.
2. Aktivier de CyberPanel E-Mail-Provider i de Einstellungen vom Emails Addon.
3. Bestätige, dass d'Kundedomain scho in CyberPanel existiert, bevor Sie de Weiterleitig erstelle.
4. Erstelle en Testweiterleitig und schick e Nachricht dur die verschicke, bevor Sie d'Funktion uf Produktionsplän aabietet.

Falls d'Weiterleitigserstellig fehlschlaht, lueg zersch i de Ultimate Multisite Aktivitätslogs, denn bestätige in CyberPanel, dass d'Quell-Domain existiert und dass de API-User d'Rechte für E-Mail-Management het.

## Konfigurationsreferenz {#configuration-reference}

| Konstante | Erforderlich | Standardwert | Beschriibig |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Vollständigi URL zu Ihrer CyberPanel Instanz mit Port, z.B. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | Admin-Benutzername vo CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | Admin-Passwort vo CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel Hosting Paket, wo für neui virtuelle Hosts zugewiese wird |
| `WU_CYBERPANEL_AUTO_SSL` | Nein | `true` | Erstelle en Let's Encrypt SSL-Zertifikat nach de Domain-Erstellig |
| `WU_CYBERPANEL_PHP_VERSION` | Nein | `PHP 8.2` | PHP-Version für neui virtuelle Hosts (muss mit ere in CyberPanel installierte Version übereinstimme) |
| `WU_CYBERPANEL_EMAIL` | Nein | — | Kontakt-E-Mail für d'SSL-Zertifikat-Registrierig |

## Wichtigi Notize {#important-notes}

D'API vo CyberPanel brucht Token-Authentifizierig basierend uf Session. D'Integration nimmt de Token automatisch bi jede API-Ufruf uf.
- Ihr CyberPanel Admin-Account muess d'Rechte ha, Websites z'erstelle und z'lösche.
- CyberPanel lauft standardmässig uf Port `8090`. Wenn Ihr Server en Firewall brucht, stellt sicher, dass die Port vom WordPress Application Server erreichbar isch.
- D'Integration verwaltet kei DNS-Einträge. Sie müend d'Domain-DNS uf d'IP-Adrässe vo Ihrem Server zeige, bevor Sie d'Domain in Ultimate Multisite abbilde.
- Wenn Sie OpenLiteSpeed (OLS) bruche, wird automatisch en sanfte Neustart usglöst nach Ändrige am Virtual Host. Es isch kei manuelli Iigriff nötig.

## Problembehebig {#troubleshooting}

### API-Verbindig abglehnt {#api-connection-refused}

- Überprüef, ob Port `8090` in de Firewall vo Ihrem Server offe isch.
- Bestätig, dass de Wert vo `WU_CYBERPANEL_HOST` s'korrekt Protokoll (`https://`) und d'Port enthält.
- Prüef, ob Ihr CyberPanel SSL-Zertifikat gültig isch; selbstsignierti Zertifikate chönne zu TLS-Verifizierigsfehler führe. Setz `WU_CYBERPANEL_VERIFY_SSL` nur in vertrauenswürdige private Netzumgäbig uf `false`.

### Authentifizierigsfehler {#authentication-errors}

- Bestätig, dass Ihr `WU_CYBERPANEL_USERNAME` und `WU_CYBERPANEL_PASSWORD` korrekt sind, indem Sie sich direkt bi CyberPanel iilogge.
- CyberPanel sperrt Konti nach mehrmalige fehlgschlagene Iloggeversuech. Prüef **Security** > **Brute Force Monitor** in CyberPanel, falls es Sperrige git.

### Domain nöd erstellt {#domain-not-created}

- Überprüef s'Aktivitätslog vo Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) uf API-Fehlermeldige.
- Bestätig, dass s'Paket, wo in `WU_CYBERPANEL_PACKAGE` definiert isch, in CyberPanel existiert (**Packages** > **List Packages**).
- Stell sicher, dass d'Domain nöd scho als Website in CyberPanel registriert isch – d'Erstellig vo doppelte Websites git en Fehler.

### SSL-Zertifikat nöd usgstellt {#ssl-certificate-not-issued}

Bestätige, dass d DNS vollständig propagiert isch: `dig +short your-domain.com` sött d IP vo dim Server zrugggebe.
Let's Encrypt setzt Ratenbegränzige (rate limits). Wenn du kürzlich mehri Zertifikate für die gliichi Domain usgstellt häsch, warte bitte, bevor du es wieder versuechsch.
Überprüf d CyberPanel SSL-Logs unter **Logs** > **Error Logs** für Details zu Fehler bi de Zertifikatusstellig.
Als Fallback chasch du SSL manuell vo CyberPanel usgstellt: **SSL** > **Manage SSL** > Domain wähle > **Issue SSL**.

## Referenze {#references}

- CyberPanel API Dokumentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Ratenbegränzungen: https://letsencrypt.org/docs/rate-limits/
