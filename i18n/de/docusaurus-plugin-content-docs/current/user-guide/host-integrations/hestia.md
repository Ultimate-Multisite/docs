---
title: Hestia Control Panel Integration
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

Dieser Leitfaden erklärt, wie Sie die Ultimate Multisite Hestia-Integration konfigurieren, damit in Ihrem Netzwerk zugeordnete Domains automatisch als Web Domain Aliases in Hestia hinzugefügt (und entfernt) werden.

- Hestia CLI reference: v-add-web-domain-alias / v-delete-web-domain-alias
- Official REST API doc: https://hestiacp.com/docs/server-administration/rest-api.html

## Was es tut
- Wenn eine Domain in Ultimate Multisite zugeordnet wird, ruft die Integration die Hestia-API auf, um auszuführen:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Wenn eine Domainzuordnung entfernt wird, wird ausgeführt:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Optional fügt hinzu/entfernt das `www.` Alias je nach Ihrer Einstellung „Auto-create www subdomain“ in den Domain Mapping‑Einstellungen.

## Voraussetzungen
- Eine bestehende Hestia Web Domain, die bereits auf Ihre WordPress-Installation zeigt. Die Integration wird Aliase an diese Basisdomain anhängen.
- Hestia API-Zugriff aktiviert. Sie können sich entweder mit einem Passwort oder einem API-Hash/Token authentifizieren.

Siehe die REST API-Dokumentation von Hestia für die Aktivierung des API-Zugriffs und Authentifizierungsdetails:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguration (Assistent → Integrationen → Hestia)
Geben Sie die folgenden Werte an:

- `WU_HESTIA_API_URL` (erforderlich)
  - Der Basis-API-Endpunkt, typischerweise `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (erforderlich)
  - Hestia-Benutzer, der für API-Befehle verwendet wird (häufig `admin`).
- `WU_HESTIA_API_PASSWORD` oder `WU_HESTIA_API_HASH` (mindestens einer)
  - Wählen Sie eine Authentifizierungsmethode: Passwort oder API-Hash/Token.
- `WU_HESTIA_ACCOUNT` (erforderlich)
  - Das Konto (Besitzer) der Web Domain in Hestia; dies ist das erste Argument für die CLI.
- `WU_HESTIA_WEB_DOMAIN` (erforderlich)
  - Die bestehende Hestia Web Domain, die Ihre WordPress bereitstellt (Aliase werden hier angehängt).
- `WU_HESTIA_RESTART` (optional; Standard `yes`)
  - Ob Dienste nach Aliasänderungen neu gestartet/neu geladen werden sollen.

Sie können den Assistenten diese Konstanten in `wp-config.php` einfügen lassen oder sie manuell definieren.

## Einrichtung überprüfen
- Im Assistenten-Schritt „Testing“ ruft das Plugin `v-list-web-domains <WU_HESTIA_ACCOUNT> json` über die API auf. Eine erfolgreiche Antwort bestätigt die Konnektivität und Authentifizierung.
- Nach der Zuordnung einer Domain prüfen Sie in Hestia: Web > die Basisdomain > Aliases. Sie sollten das neue Alias sehen.

## Hinweise & Tipps
- Stellen Sie sicher, dass `WU_HESTIA_WEB_DOMAIN` bereits existiert und von `WU_HESTIA_ACCOUNT` besessen wird.
- Wenn SSL erforderlich ist, verwalten Sie Zertifikate in Hestia. Diese Integration behandelt derzeit nur Aliase.
- Das Plugin kann auch `www.<domain>` hinzufügen/entfernen, je nach Ihrer Domain Mapping‑Einstellung „www subdomain“.

## Beispiel-API-Aufruf (cURL)
Unten ist ein konzeptionelles Beispiel (an Ihre Umgebung anpassen). Beziehen Sie sich auf die offizielle Dokumentation für genaue Parameter.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Für Delete verwenden Sie `cmd=v-delete-web-domain-alias` und dieselben Argumente.

## Fehlerbehebung
- HTTP-Fehler von der API: Überprüfen Sie, ob `WU_HESTIA_API_URL` erreichbar ist und `/api` enthält.
- Auth-Fehler: Bestätigen Sie `WU_HESTIA_API_USER` und entweder `WU_HESTIA_API_PASSWORD` oder `WU_HESTIA_API_HASH`.
- „Missing account/base domain“ in den Protokollen: Stellen Sie sicher, dass `WU_HESTIA_ACCOUNT` und `WU_HESTIA_WEB_DOMAIN` gesetzt und in Hestia gültig sind.

## Referenzen
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
