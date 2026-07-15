---
title: Verbesser d'Integration vum Kontrollpanel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Verbessere d'Integration mit dem Control Panel

## Überblick {#overview}
Enhance isch es modernes Control Panel, wo mächtigi Hosting-Automatisierigs- und Management-Funktione bietet. D'Integration ermöglicht automatische Domain-Synchronisierig und SSL-Zertifikat-Management zwüsche Ultimate Multisite und em Enhance Control Panel.

**Verwandte Diskussion:** Lueg [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) für Community-Tipps und meh Infos.

## Features {#features}
- Automatische Domain-Synchronisierig, wenn Domains in Ultimate Multisite abgebunde sind
- Automatische SSL-Zertifikat-Bereitstellung über LetsEncrypt, wenn d'DNS auflöst wird
- Subdomain-Unterstützig für Netzwerke, wo im Subdomain-Modus laufe
- Domain-Entfernig, wenn Abbindige gelöscht werde
- Verbindungstest zur Überprüfig vo de API-Credentials

## Anforderungen {#requirements}

### Systemanforderige {#system-requirements}
- Enhance Control Panel installiert und zugänglich
- WordPress Multisite Installation gehostet oder mit eme Enhance Server verbunde
- Apache Webserver (Enhance unterstützt aktuell Apache-Konfiguratione; LiteSpeed Enterprise isch zu reduziertem Priis verfügbar)

### API-Zugriff {#api-access}
Du muesch Administrator-Zugriff uf s'Enhance Control Panel ha, um API-Tokens z'erstelle.

## Deine API-Credentials erhalte {#getting-your-api-credentials}

### 1. Erstelle en API-Token {#1-create-an-api-token}

1. Log dich i dim Enhance Control Panel als Administrator ii
2. Klick uf **Settings** im Navigationsmenü
3. Navigier zu **Access Tokens**
4. Klick uf **Create Token**
5. Gib em Token en beschribende Name (z.B. "Ultimate Multisite Integration")
6. Weise d'Rolle **System Administrator** zue
7. Fürs Ablaufdatum:
   - Lass es leer, wenn du wetsch, dass de Token nie abläuft
   - Oder setz es spezifisches Ablaufsdatum für Sicherheitszweck
8. Klick uf **Create**

Nach de Erschaffung werdet Dir de **Access Token** und d'**Organization ID** aazeigt gstellt. **Speich Sie die sofort**, will de Token nur einisch angezeigt wird.

### 2. Holen Sie sich Ihre Organization ID {#2-get-your-organization-id}

D'Organization ID wird uf de Access Tokens Seite in ere blaue Informationsbox mit em Label "Org ID: {your_id}" aazeigt.

D'Organization ID isch en UUID im Format wie: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Sie chönne d'Organization ID au finde dur:
1. Gehe zur **Customers** Seite
2. Klicke uf **Manage customer** für de entsprechende Kunde
3. Luege Sie uf d'URL – d'Organization ID isch die alphanumerischi Charaktere nach `/customers/`

### 3. Holen Sie sich Ihre Server ID {#3-get-your-server-id}

Um Iri Server ID (wichtig für Domain-Operatione) z'finde:

1. Im Enhance Control Panel navigiere Sie zu **Servers**
2. Klicke uf de Server, wo Iri WordPress-Installation lauft
3. D'Server ID (UUID Format) isch i de URL oder in de Serverdetails sichtbar
4. Alternativ chönne Sie d'API bruche, um Server z'liste:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

D'Server ID folgt em UUID Format: `00000000-0000-0000-0000-000000000000`

### 4. Holen Sie sich Ihre API URL {#4-get-your-api-url}

Iri API URL isch Iri Enhance Control Panel URL mit `/api/` am Schluss:

```
https://your-enhance-panel.com/api/
```

**Wichtig:** De Pfad `/api/` isch nötig. Häufigi Fehler sind:
- Nur de Domain ohni `/api/` z'bruche
- HTTP statt HTTPS z'bruche (HTTPS isch für d'Sicherheit nötig)

## Konfiguration {#configuration}

### Erforderlichi Konstante {#required-constants}

Füge die folgende Konstante in Iri `wp-config.php` Datei hinzu:

// Verbessert d'Integration vom Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Setup via Integration Wizard {#setup-via-integration-wizard}

1. Im WordPress Admin gaats du uf **Ultimate Multisite** > **Settings**.
2. Navigier zu de Tab **Integrations**.
3. Find **Enhance Control Panel Integration** und klick uf **Configuration**.
4. De Wizard führt dich dur d'Iistellig:
   - **Schritt 1:** Iiführig und Überblick über d'Funktione.
   - **Schritt 2:** Iiiführ dini API-Credentials (Token, API URL, Server ID) iitrage.
   - **Schritt 3:** D'Verbindig teste.
   - **Schritt 4:** Überprüef und aktiviere.

Du chasch wähle:
- Dass de Wizard d'Constants automatisch i dini `wp-config.php` Datei iifügt.
- Dass du d'Constant-Definition kopiersch und manuell hinzufüegsch.

## Zuesätzlichi WordPress Konfiguration {#additional-wordpress-configuration}

Basierend uf Feedback vo de Community ([Diskussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) chönnt du die folgende zuesätzliche Iistellige konfiguriere:

### .htaccess Konfiguration {#htaccess-configuration}

Falls du Problem mit de Domain-Mapping hesch:
1. De ursprüngle Enhance `.htaccess` File lösche.
2. Ersetze ihn dur d'Standard WordPress Multisite `.htaccess` File.

### Cookie Constants {#cookie-constants}

Füeg die folgendi Constants i `wp-config.php` hinzu, um e korrekte Cookie-Handhabig über mappti Domains z'garantierä:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Wie es funktioniert {#how-it-works}

### Wenn e Domain mappt isch {#when-a-domain-is-mapped}

1. E Benutzer mappet en benutzerdefinierten Domain in Ultimate Multisite (oder es wird eine neue Seite im Subdomain-Modus erstellt)
2. D'Integration sendet en POST-Aafrog an d'API vo Enhance: `/servers/{server_id}/domains`
3. Enhance füegt d'Domain zu Ihrer Serverkonfiguration bi
4. Wenn d'DNS uf Ihre Server auflöst wird, stellt Enhance automatisch es SSL-Zertifikat via LetsEncrypt bereit
5. D'Domain wird mit HTTPS aktiv

### Wann en Domain entfernt wird {#when-a-domain-is-removed}

1. E Domain-Mapping wird in Ultimate Multisite gelöscht
2. D'Integration fragt Enhance nach de ID vo de Domain ab
3. En DELETE-Aafrog wird an: `/servers/{server_id}/domains/{domain_id}` gschickt
4. Enhance entfernt d'Domain us Ihrer Serverkonfiguration

### DNS- und SSL-Prüfung {#dns-and-ssl-checking}

Ultimate Multisite beinhaltet integrierti DNS- und SSL-Prüfungen:
- Sie chönne s'Prüfintervall in de **Domain Mapping Settings** iistelle (Standard: 300 Sekunde/5 Minute)
- S'System überprüft d'DNS-Propagations, bevor en Domain als aktiv markiert wird
- D'Gültigkeit vom SSL-Zertifikat wird automatisch prüeft
- Enhance übernimmt d'SSL-Bereitstellung automatisch, so isch manuelli SSL-Konfiguration nöd nötig

## Setup überprüefe {#verifying-setup}

### Verbindung teste {#test-the-connection}

1. Im Integration Wizard bruche Sie de Schritt **Test Connection**
2. D'Plugin versuecht, d'Domains uf Ihrem Server z'liste
3. En Erfolgsmeldig bestätigt:
   - API Credentials sind korrekt
   - API URL isch zugänglich
   - Server ID isch gültig
   - Berechtigunge sind richtig gsetzt

### Nach em Domain-Mapping {#after-mapping-a-domain}

1. Mappet en Testdomain in Ultimate Multisite
2. Überprüfet d'Ultimate Multisite Logs (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifiziere im Enhance Control Panel, dass d'Domain hinzugefügt worde isch:
   - Gehe zu **Servers** > **Ihre Server** > **Domains**
   - D'neui Domain söllt i de Liste erschiine
4. Sobald d'DNS propagiert isch, verifiziere, dass s'SSL automatisch bereitgstellt wird

## Problembehealdigkeet (Troubleshooting) {#troubleshooting}

### API-Verbindungssprobleme {#api-connection-issues}

**Fehler: "Failed to connect to Enhance API"**
- Prüef, ob `WU_ENHANCE_API_URL` am Schluss mit `/api/` endet.
- Stell sicher, dass du HTTPS bruchsch und nöd HTTP.
- Überprüef, ob s'Enhance Panel vo dim WordPress-Server us erreichbar isch.
- Prüef, ob kei Firewall-Regle d'Verbindig blockiere.

**Fehler: "Enhance API Token not found"**
- Stell sicher, dass `WU_ENHANCE_API_TOKEN` in `wp-config.php` definiert isch.
- Überprüef, ob de Token in Enhance nöd gelöscht oder abgloffe isch.
- Prüef uf Tippfehler im Token-Wert.

**Fehler: "Server ID is not configured"**
- Stell sicher, dass `WU_ENHANCE_SERVER_ID` in `wp-config.php` definiert isch.
- Überprüef, ob d'Server-ID es gültigs UUID-Format het.
- Bestätig, dass de Server i dim Enhance Panel existiert.

### Domain nöd hinzugefügt {#domain-not-added}

**Logs überprüefe:**
1. Gang zu **Ultimate Multisite** > **Logs**.
2. Filter nach **integration-enhance**.
3. Lueg nach Fehlermeldige, wo uf s'Problem hiwiise.

**Häufigi Ursache:**
- Ungültigs Domainname-Format.
- Domain existiert scho in Enhance.
- Nöd gnueg API-Rechte (stell sicher, dass de Token d'Rolle System Administrator het).
- Server-ID stimmt nöd mit em tatsächliche Server in Enhance überei.

### SSL-Zertifikatsprobleme {#ssl-certificate-issues}

**SSL wird nöd bereitgstellt:**
- Prüef, ob d'DNS uf d'IP-Adresse vo dim Server zeigt.
- Überprüef, ob d'Domain korrekt auflöst: `nslookup yourdomain.com`.
- Enhance brucht DNS-Auflösig, bevor es s'SSL bereitstelle cha.
- D'SSL-Bereitstelllig brucht typischerwiis 5-10 Minute nach de DNS-Propagation.
- Überprüef d'Logs vom Enhance Control Panel uf SSL-spezifischi Fehlermeldige.

**Manuell SSL-Fehlerbehebig in Enhance:**
1. Gang zu **Servers** > **Your Server** > **Domains**.
2. Find dini Domain und lueg de SSL-Status a.
3. Du chasch d'SSL-Bereitstelllig manuell uslöse, falls nötig.

### DNS-Prüfintervall {#dns-check-interval}

Wenn Domains oder SSL-Zertifikate z'langi Zit nehmed, um aktiviert z'werde:
1. Gang zu **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Find d'Iistellig **DNS Check Interval**
3. Pass vo de Standardwert 300 Sekunde uf en tieferen Wert (minimum: 10 Sekunde)
4. **Hinweis:** Tieferi Intervalls bedüiten meh Häufigi Prüefige, aber höcheri Serverbelastig

### Authentifizierigsfehler {#authentication-errors}

**HTTP 401/403 fehler:**
- Generier din API token in Enhance neu
- Überprüef, ob de Token d'Rolle **System Administrator** het
- Stell sicher, dass de Token nöd abgloffe isch
- Vergewisser dich, dass du d'richtigi Organization ID bruchsch (obwohl die typischerwiis nöd i de URL nötig isch)

### Log-Analyse {#log-analysis}

Aktiviere detaillierti Logging:
```php
// Füeg zu wp-config.php für verbesserte Debugging hinzu
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Und überprüef d'Logs unter:
- Ultimate Multisite Logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Verfügbar i de Admin-Oberflächi vo Enhance

## API Referenz {#api-reference}

### Authentifizierig {#authentication}
Alli API-Aafrog bruched Bearer Token Authentifizierig:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Häufigi Endpunkte, wo brucht wärde {#common-endpoints-used}

**Server iistelle:**
```
GET /servers
```

**Domains uf eme Server iistelle:**
```
GET /servers/{server_id}/domains
```

**E Domain hinzufüge:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**E Domain lösche:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Vollständigi API Dokumentation {#full-api-documentation}
Vollständigi API-Dokumentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices {#best-practices}

### Sicherheit {#security}
- **Commit Sie nie API-Tokens in die Versionskontrolle**
- Speichere Tokens in `wp-config.php`, welches von Git ausgeschlossen werden sollte
- Verwende Tokens mit den passenden Berechtigungen (System Administrator für volle Integration)
- Stelle Ablaufdaten für Produktionsumgebungen der Tokens ein
- Rote Tokens periodisch rotieren

### Performance {#performance}
- Nutze das Standard-DNS-Prüfintervall (300 Sekunden), um übermässige API-Aufrufe zu vermeiden
- Überwache die Ressourcen des Enhance Servers bei Durchführung von groß angelegten Domänenoperationen
- Ziehe in Betracht, Domänen hin und wieder aufzunehmen, wenn viele Domänen gleichzeitig gemappt werden

### Monitoring {#monitoring}
- Überprüfe regelmässig die Ultimate Multisite Logs auf Integrationsfehler
- Richte eine Überwachung für fehlgeschlagene Domänenhinzufügungen ein
- Überprüfe, ob SSL-Zertifikate korrekt bereitgestellt werden
- Beobachte die Kapazität des Enhance Servers und die Domänengrenzen

## Zusätzliche Ressourcen {#additional-resources}

- **Enhance Offizielle Dokumentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API-Dokumentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domänen-Mapping-Leitfaden:** Siehe Wiki-Seite "Wie man Domain Mapping v2 konfiguriert"

## Support {#support}

Falls du Probleme hast:
1. Überprüfe den Abschnitt zur Fehlerbehebung oben
2. Überprüfe die Ultimate Multisite Logs
3. Konsultiere die [GitHub Diskussionen](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktiere den Enhance Support für panel-spezifische Probleme
5. Erstelle eine neue Diskussion mit detaillierten Fehlerprotokollen für Community-Hilfe

## Notizen {#notes}

Dëst Integration handlet nume Domain Aliases; Enhance verwaltet d'SSL automatisch.
D'Integration unterstützt sowohl benutzerdefinierti Domain Mappings als au Sites basierend uf Subdomains.
Automatisch www Subdomain-Ersteitig cha in de Domain Mapping Settings konfiguriert werde.
Enhance unterstützt aktuell Apache Konfigurationen (LiteSpeed Enterprise isch verfügbar).
D'Domain-Entfernung us Ultimate Multisite wird d'Domain us Enhance entferne, aber es chan d'SSL-Zertifikate nöd sofort löschen.
