---
title: CyberPanel Integration
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

Dieses Handbuch erklärt, wie Sie die Ultimate Multisite CyberPanel Integration einrichten, damit gemappte Domains in Ihrem Netzwerk automatisch als virtuelle Hosts in CyberPanel hinzugefügt (und entfernt) werden, mit optionaler Auto-SSL-Bereitstellung über Let's Encrypt.

## Was es tut

*   Wenn eine Domain in Ultimate Multisite gemappt wird, ruft die Integration die CyberPanel API auf, um einen virtuellen Host für diese Domain zu erstellen.
*   Wird eine Domain-Zuordnung entfernt, ruft die Integration die API auf, um den entsprechenden virtuellen Host zu löschen.
*   Ist Auto-SSL aktiviert, löst die Integration die Ausstellung eines Let's Encrypt Zertifikats sofort nach der Erstellung des virtuellen Hosts aus.
*   Fügt optional den `www.` Alias hinzu oder entfernt ihn, abhängig von Ihrem „Auto-create www subdomain“-Einstellung in den Domain Mapping Settings.

## Voraussetzungen

*   Eine laufende CyberPanel Instanz (v2.3 oder neuer wird empfohlen), die von Ihrem WordPress Server erreichbar ist.
*   Eine bestehende Website in CyberPanel, die bereits die Wurzel Ihres WordPress Netzwerks bedient. Die Integration hängt neue virtuelle Hosts an diesen Server an.
*   Zugriff auf die CyberPanel API ist aktiviert. Die Authentifizierung erfolgt über Ihren CyberPanel Admin-Benutzernamen und Ihr Passwort.
*   Ihre DNS-Einträge für die gemappten Domains müssen bereits auf die IP-Adresse Ihres Servers zeigen, damit Auto-SSL ein gültiges Zertifikat ausstellen kann.

## Anforderungen

Die folgenden Konstanten müssen in Ihrer `wp-config.php` Datei definiert werden:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Optional können Sie auch definieren:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Standard: true — Let's Encrypt SSL nach der Domainerstellung ausstellen
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Standard: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Wird für den SSL-Zertifikats-Kontakt verwendet
```

## Einrichtungshinweise

### 1. Die CyberPanel API aktivieren

1. Melden Sie sich im CyberPanel Dashboard als Administrator an.
2. Gehen Sie zu **Security** > **SSL** und bestätigen Sie, dass SSL auf der CyberPanel-Oberfläche selbst aktiv ist (erforderlich für sichere API-Aufrufe).
3. Die CyberPanel API ist standardmäßig unter `https://your-server-ip:8090/api/` verfügbar. Es sind keine zusätzlichen Schritte erforderlich, um sie zu aktivieren – sie ist für Admin-Benutzer standardmäßig eingeschaltet.

### 2. Konstanten in wp-config.php hinzufügen

Fügen Sie die folgenden Konstanten vor der Zeile `/* That's all, stop editing! */` in Ihre `wp-config.php` Datei ein:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Um Auto-SSL zu aktivieren (empfohlen):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Die Integration aktivieren

1. Gehen Sie im WordPress Network Admin zu **Ultimate Multisite** > **Settings**.
2. Navigieren Sie zum Tab **Domain Mapping**.
3. Scrollen Sie zu **Host Integrations**.
4. Aktivieren Sie die **CyberPanel** Integration.
5. Klicken Sie auf **Save Changes**.

### 4. Konnektivität überprüfen

Verwenden Sie den integrierten Verbindungstest im Einstellungs-Assistenten:

1. Gehen Sie zu **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klicken Sie auf **Test Connection**.
3. Eine Erfolgsmeldung bestätigt, dass das Plugin die CyberPanel API erreichen und sich korrekt authentifizieren kann.

## Funktionsweise

### Domain Mapping

Wenn eine Domain in Ultimate Multisite gemappt wird:

1. Sendet die Integration eine `POST`-Anfrage an `/api/createWebsite` auf Ihrem CyberPanel Host.
2. CyberPanel erstellt einen neuen virtuellen Host für die Domain unter dem konfigurierten Paket.
3. Das Document Root wird so eingestellt, dass es auf Ihr WordPress Netzwerk-Wurzelverzeichnis zeigt.
4. Wird die Domain-Zuordnung entfernt, ruft die Integration `/api/deleteWebsite` auf, um den virtuellen Host zu bereinigen.

### Auto-SSL

Wenn `WU_CYBERPANEL_AUTO_SSL` auf `true` gesetzt ist:

1. Ruft die Integration nach der Erstellung des virtuellen Hosts `/api/issueSSL` für die Domain auf.
2. CyberPanel fordert ein Let's Encrypt Zertifikat mithilfe des ACME HTTP-01 Challenges an.
3. Das Zertifikat wird von CyberPanel automatisch vor Ablauf erneuert.

> **Wichtig:** Die DNS-Einträge müssen vollständig auf die IP-Adresse Ihres Servers propagiert sein, bevor Let's Encrypt die Domain validieren kann. Schlägt die SSL-Ausstellung unmittelbar nach dem Mapping fehl, warten Sie mit der erneuten Auslösung des SSL-Prozesses aus dem CyberPanel Dashboard unter **SSL** > **Manage SSL**.

### www Subdomain

Wenn **Auto-create www subdomain** in Ihren Domain Mapping Settings aktiviert ist, erstellt die Integration auch einen virtuellen Host-Alias für `www.<domain>` und stellt bei aktiviertem Auto-SSL ein Zertifikat aus, das sowohl den Apex- als auch den www-Varianten abdeckt.

### E-Mail-Weiterleitungen

Wenn das [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) Addon aktiv ist, kann CyberPanel auch Kunden-E-Mail-Weiterleitungen bereitstellen. Weiterleitungen leiten Nachrichten von einer Domain-Adresse an ein anderes Postfach weiter, ohne ein vollständiges Postfach zu erstellen. Dies ist nützlich für Aliase wie `info@customer-domain.test` oder `support@customer-domain.test`.

Bevor Sie Weiterleitungen für Kunden aktivieren:

1. Bestätigen Sie, dass die oben genannten CyberPanel Konstanten konfiguriert sind und der Verbindungstest erfolgreich war.
2. Aktivieren Sie den CyberPanel E-Mail-Provider in den Einstellungen des Emails Addons.
3. Bestätigen Sie, dass die Kunden-Domain bereits in CyberPanel existiert, bevor Sie die Weiterleitung erstellen.
4. Erstellen Sie eine Test-Weiterleitung und senden Sie eine Nachricht darüber, bevor Sie die Funktion auf Produktionsplänen anbieten.

Sollte die Erstellung der Weiterleitung fehlschlagen, überprüfen Sie zuerst die Ultimate Multisite Activity Logs und bestätigen Sie dann in CyberPanel, dass die Quell-Domain existiert und dass der API-Benutzer die Berechtigungen für das E-Mail-Management besitzt.

## Konfigurationsreferenz

| Konstante | Erforderlich | Standard | Beschreibung |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Vollständige URL zu Ihrer CyberPanel Instanz inklusive Port, z. B. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | CyberPanel Admin-Benutzername |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | CyberPanel Admin-Passwort |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel Hosting-Paket, das neuen virtuellen Hosts zugewiesen wird |
| `WU_CYBERPANEL_AUTO_SSL` | Nein | `true` | Stellt ein Let's Encrypt SSL Zertifikat nach der Domainerstellung aus |
| `WU_CYBERPANEL_PHP_VERSION` | Nein | `PHP 8.2` | PHP-Version für neue virtuelle Hosts (muss einer in CyberPanel installierten Version entsprechen) |
| `WU_CYBERPANEL_EMAIL` | Nein | — | Kontakt-E-Mail für die SSL-Zertifikatsregistrierung |

## Wichtige Hinweise

*   Die API von CyberPanel verwendet eine Token-Authentifizierung basierend auf Sitzungen. Die Integration übernimmt die Token-Beschaffung automatisch bei jedem API-Aufruf.
*   Ihr CyberPanel Admin-Konto muss die Berechtigung haben, Websites zu erstellen und zu löschen.
*   CyberPanel läuft standardmäßig auf Port `8090`. Falls Ihr Server eine Firewall verwendet, stellen Sie sicher, dass dieser Port vom WordPress Application Server aus erreichbar ist.
*   Die Integration verwaltet keine DNS-Einträge. Sie müssen die Domain-DNS auf die IP-Adresse Ihres Servers zeigen lassen, bevor Sie die Domain in Ultimate Multisite mappen.
*   Verwenden Sie OpenLiteSpeed (OLS), wird nach Änderungen am virtuellen Host automatisch ein sanfter Neustart ausgelöst. Es ist keine manuelle Intervention erforderlich.

## Fehlerbehebung

### API Connection Refused

*   Überprüfen Sie, ob Port `8090` in der Firewall Ihres Servers geöffnet ist.
*   Bestätigen Sie, dass der Wert `WU_CYBERPANEL_HOST` das korrekte Protokoll (`https://`) und den Port enthält.
*   Überprüfen Sie, ob Ihr CyberPanel SSL-Zertifikat gültig ist; selbstsignierte Zertifikate können zu TLS-Verifizierungsfehlern führen. Setzen Sie `WU_CYBERPANEL_VERIFY_SSL` nur in vertrauenswürdigen privaten Netzwerkumgebungen auf `false`.

### Authentication Errors

*   Bestätigen Sie, dass Ihr `WU_CYBERPANEL_USERNAME` und `WU_CYBERPANEL_PASSWORD` korrekt sind, indem Sie sich direkt bei CyberPanel anmelden.
*   CyberPanel sperrt Konten nach wiederholten fehlgeschlagenen Anmeldeversuchen. Überprüfen Sie in CyberPanel unter **Security** > **Brute Force Monitor**, falls Sperrungen auftreten.

### Domain Not Created

*   Überprüfen Sie das Ultimate Multisite Activity Log (**Ultimate Multisite** > **Activity Logs**) auf API-Fehlermeldungen.
*   Vergewissern Sie sich, dass das in `WU_CYBERPANEL_PACKAGE` definierte Paket in CyberPanel existiert (**Packages** > **List Packages**).
*   Stellen Sie sicher, dass die Domain nicht bereits als Website in CyberPanel registriert ist – die Erstellung doppelter Websites führt zu einem Fehler.

### SSL Certificate Not Issued

*   Bestätigen Sie, dass die DNS vollständig propagiert wurde: `dig +short your-domain.com` sollte die IP-Adresse Ihres Servers zurückgeben.
*   Let's Encrypt erzwingt Ratenbegrenzungen. Wenn Sie kürzlich mehrere Zertifikate für dieselbe Domain ausgestellt haben, warten Sie, bevor Sie es erneut versuchen.
*   Überprüfen Sie die CyberPanel SSL Logs unter **Logs** > **Error Logs** auf Details zu Zertifikatsausfallfehlern.
*   Als Fallback können Sie das SSL manuell über CyberPanel ausstellen: **SSL** > **Manage SSL** > wählen Sie die Domain > **Issue SSL**.

## Referenzen

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
