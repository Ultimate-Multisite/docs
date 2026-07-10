---
title: Integration vo Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integration mit dem Hestia Control Panel {#hestia-control-panel-integration}

Dëse Leitfaden erklärt, wie Sie d'Ultimate Multisite Hestia Integration so konfigurieren können, dass mappti Domänen in Ihrem Netz automatisch als Web Domain Aliases in Hestia hinzugefügt (und entfernt) werden.

- Hestia CLI Referenz: v-add-web-domain-alias / v-delete-web-domain-alias
- Offizielli REST API Dokumentation: https://hestiacp.com/docs/server-administration/rest-api.html

## Was es macht {#what-it-does}
- Wenn e Domäne in Ultimate Multisite mappt wird, ruft d'Integration d'Hestia API uf, um folgendes uszfüehre:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Wenn e Domänenmappig entfernt wird, lauft folgendes us:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Optional füeget/entfernet d'Integration de Alias `www.` je nach Ihrer Einstellung "Auto-create www subdomain" in de Domain Mapping Einstellungen.

## Voraussetzungen {#prerequisites}
- E bestehendi Hestia Web Domain, wo scho uf Ihre WordPress Installation zeigt. D'Integration wird Aliases zu dere Basisdomäne hänge.
- Hestia API Zuegang aktiviert. Sie chönne sich mit eme Passwort oder eme API Hash/Token authentifiziere.

Luege Sie sich d'Hestia REST API Dokumentation a, um de API Zuegang und d'Authentifizierigsdetails z'aktivierä:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfiguration (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Gib d'folgende Wärt aa:

- `WU_HESTIA_API_URL` (obligatorisch)
  - De Basis-API-Endpunkt, typischerwiis `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obligatorisch)
  - Hestia-Benutzer, wo Sie für API-Befehlen bruche (oft `admin`).
- `WU_HESTIA_API_PASSWORD` oder `WU_HESTIA_API_HASH` (mindestens eine)
  - Wähle e Methode zur Authentifizierig: Passwort oder API-Hash/Token.
- `WU_HESTIA_ACCOUNT` (obligatorisch)
  - S'Konto (Besitzer) vom Web-Domain in Hestia; das isch de erscht Argument für d'CLI.
- `WU_HESTIA_WEB_DOMAIN` (obligatorisch)
  - De bestehendi Hestia Web Domain, wo dini WordPress hostet (Aliases wärde do agfüegt).
- `WU_HESTIA_RESTART` (optional; Standard isch `yes`)
  - Ob mer d'Services nach Alias-Änderige neu starte/lade söll.

Sie chönne die Konstante im `wp-config.php` i de Wizard iifüege oder manuell definiere.

## Setup überprüefe {#verifying-setup}
- Im Wizard uf em Schritt „Testing“ ruft s'Plugin über d'API `v-list-web-domains <WU_HESTIA_ACCOUNT> json` uf. E Erfolgsantwort bestätigt d'Verbindig und d'Authentifizierig.
- Nach em Domain-Mapping überprüefet Sie in Hestia: Web > de Basisdomain > Aliases. Sie sölled de nöi Alias gseh ha.

## Notize & Tipps {#notes--tips}
- Stell sicher, dass `WU_HESTIA_WEB_DOMAIN` scho existiert und vo `WU_HESTIA_ACCOUNT` ghört wird.
- Wenn SSL nötig isch, verwaltet Sie d'Zertifikat bi Hestia. Die Integration handhabt momentan nur Aliases.
- S'Plugin chan au `www.<domain>` hinzufüge/entferne, abhängig vo de Iistellig "www subdomain" für dini Domain Mapping.

## Beispiel API-Aufruf (cURL) {#example-api-call-curl}
Unten isch es konzeptionells Bischpil (passe a dini Umgäbig a). Lueg d'offizielli Dokumentation für exakti Parameter aa.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (oder &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias zum hinzufügen)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Für de Löschung bruche Sie `cmd=v-delete-web-domain-alias` und die gliiche Argumente.

## Fehlerbehebung {#troubleshooting}
- HTTP-Fehler vo de API: Prüef, ob `WU_HESTIA_API_URL` erreichbar isch und `/api` enthält.
- Authentifizierungsfehler: Bestätigend Sie `WU_HESTIA_API_USER` und entweder `WU_HESTIA_API_PASSWORD` oder `WU_HESTIA_API_HASH`.
- „Missing account/base domain“ i de Logs: Stell sicher, dass `WU_HESTIA_ACCOUNT` und `WU_HESTIA_WEB_DOMAIN` in Hestia gesetzt und gültig sind.

## Referenze {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
