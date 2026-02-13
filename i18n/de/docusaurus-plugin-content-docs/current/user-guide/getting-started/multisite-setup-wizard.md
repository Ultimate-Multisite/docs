---
title: Multisite-Setup-Assistent
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite-Setup-Assistent

Ultimate Multisite enthält einen integrierten Assistenten, der eine Standard-WordPress-Installation automatisch in ein WordPress-Multisite-Netzwerk umwandelt. Dadurch entfällt die Notwendigkeit, `wp-config.php` manuell zu bearbeiten oder Datenbankbefehle auszuführen.

:::tip
Wenn Ihre WordPress-Installation bereits als Multisite-Netzwerk läuft, können Sie diesen Schritt vollständig überspringen. Der Assistent erscheint nur, wenn Multisite noch nicht aktiviert ist.
:::

## Wann erscheint der Assistent?

Wenn Sie Ultimate Multisite auf einer Standard- (nicht-Multisite) WordPress-Installation aktivieren, erkennt das Plugin, dass Multisite nicht aktiviert ist, und leitet Sie automatisch zum Multisite-Setup-Assistenten weiter, anstatt zum regulären Setup-Assistenten.

Sie können es auch direkt unter **WP Admin > Ultimate Multisite > Multisite Setup** aufrufen.

## Voraussetzungen

Bevor Sie den Assistenten ausführen, stellen Sie sicher:

- Sie haben **Administratorzugriff** auf Ihre WordPress-Installation
- Die Datei `wp-config.php` Ihres Servers ist vom Webserver **schreibbar**
- Sie haben ein **aktuelles Backup** Ihrer Dateien und Datenbank

:::warning
Der Assistent ändert Ihre `wp-config.php`-Datei und erstellt neue Datenbanktabellen. Erstellen Sie immer ein Backup, bevor Sie fortfahren.
:::

## Schritt 1: Willkommen

Der erste Bildschirm erklärt, was WordPress Multisite ist und was der Assistent tun wird:

- Aktivieren Sie die Multisite-Funktion in Ihrer WordPress-Konfiguration
- Erstellen Sie die erforderlichen Netzwerk-Datenbanktabellen
- Fügen Sie die erforderlichen Multisite-Konstanten zu `wp-config.php` hinzu
- Aktivieren Sie Ultimate Multisite im gesamten Netzwerk

![Multisite Setup Wizard - Willkommen-Schritt](/img/installation/multisite-wizard/wizard-welcome.png)

Klicken Sie auf **Weiter**, um fortzufahren.

## Schritt 2: Netzwerk-Konfiguration

In diesem Schritt werden Sie aufgefordert, Ihre Netzwerkeinstellungen zu konfigurieren.

### Seitenstruktur

Wählen Sie, wie Ihre Netzwerkseiten organisiert werden sollen:

- **Subdomains** (empfohlen) — Seiten erhalten ihre eigene Subdomain, z. B. `site1.yourdomain.com`
- **Subverzeichnisse** — Seiten werden als Pfade erstellt, z. B. `yourdomain.com/site1`

:::note
Wenn Sie Subdomains wählen, müssen Sie **Wildcard-DNS** und ein **Wildcard-SSL-Zertifikat** für Ihre Domain konfigurieren. Die meisten verwalteten WordPress-Hosts erledigen dies automatisch. Sehen Sie sich [Ultimate Multisite 101](./ultimate-multisite-101) für einen detaillierten Vergleich an.
:::

### Netzwerk-Titel

Geben Sie einen Namen für Ihr Netzwerk ein. Standardmäßig wird der aktuelle Seitentitel mit „Network“ ergänzt. Sie können dies später in den Netzwerkeinstellungen ändern.

### Netzwerk-Admin-E-Mail

Die E-Mail-Adresse, die für Netzwerkadministrationsbenachrichtigungen verwendet wird. Standardmäßig wird die E-Mail-Adresse des aktuellen Benutzers verwendet.

![Multisite Setup Wizard - Netzwerk-Konfiguration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Nach Ausfüllen der Felder klicken Sie auf **Weiter**, um fortzufahren.

## Schritt 3: Installation

Klicken Sie auf die Schaltfläche **Installieren**, um zu beginnen. Der Assistent führt fünf automatisierte Schritte nacheinander aus, wobei jeder Schritt seinen Fortschritt in Echtzeit anzeigt:

![Multisite Setup Wizard - Installation ausstehend](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Schritt | Beschreibung |
|--------|--------------|
| **Enable Multisite** | Fügt die Konstante `WP_ALLOW_MULTISITE` zu `wp-config.php` hinzu |
| **Create Network** | Erstellt die Multisite-Datenbanktabellen (`wp_site`, `wp_sitemeta`, `wp_blogs`, usw.) und füllt sie mit Ihrer Netzwerkkonfiguration |
| **Update Configuration** | Fügt die endgültigen Multisite-Konstanten zu `wp-config.php` hinzu (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, usw.) |
| **Fix Cookies** | Stellt sicher, dass die Site-URL in den Netzwerk-Metadaten korrekt ist, um Authentifizierungsprobleme nach der Aktivierung zu verhindern |
| **Network Activate Plugin** | Aktiviert Ultimate Multisite im gesamten Netzwerk, sodass es im gesamten Netzwerk ausgeführt wird |

Jeder Schritt zeigt einen dieser Status an:

- Ausstehend — Warten auf Verarbeitung
- Installieren... — Wird gerade ausgeführt
- Erfolg! — Erfolgreich abgeschlossen
- Fehlermeldung — Ein Fehler ist aufgetreten (die Meldung beschreibt das Problem)

Sobald alle Schritte erfolgreich abgeschlossen sind, sehen Sie für jedes Element einen grünen Status „Erfolg!“:

![Multisite Setup Wizard - Installation abgeschlossen](/img/installation/multisite-wizard/wizard-installation-complete.png)

Der Assistent führt dann automatisch zum Abschlussbildschirm weiter.

## Schritt 4: Fertig

Sobald die Installation abgeschlossen ist, sehen Sie eine Erfolgsmeldung, die bestätigt, dass WordPress Multisite aktiviert wurde.

![Multisite Setup Wizard - Einrichtung abgeschlossen](/img/installation/multisite-wizard/wizard-complete.png)

Sie können nun mit dem Ultimate Multisite-Setup-Assistenten fortfahren, um Ihre WaaS-Plattform zu konfigurieren (Unternehmensdetails, Standardinhalte, Zahlungs-Gateways usw.).

:::note
Nach Abschluss der Multisite-Installation leitet Ihr Browser über den neu aktivierten Netzwerk-Admin weiter. Möglicherweise müssen Sie sich erneut anmelden, da die Authentifizierungs-Cookies für die Multisite-Umgebung aktualisiert werden.
:::

## Manuelle Setup-Alternative

Wenn der Assistent nicht in der Lage ist, in Ihre `wp-config.php`-Datei zu schreiben (aufgrund von Dateiberechtigungen oder Serverbeschränkungen), wird er den genauen Code anzeigen, den Sie manuell hinzufügen müssen:

1. Die **wp-config.php-Konstanten**, die über die Zeile `/* That's all, stop editing! */` hinzugefügt werden müssen
2. Die **.htaccess-Umleitungsregeln**, die für Ihre gewählte Seitenstruktur (Subdomain oder Subverzeichnis) geeignet sind

Nach den manuellen Änderungen die Seite aktualisieren, und der Assistent erkennt, dass Multisite jetzt aktiv ist.

## Fehlerbehebung

### Der Assistent sagt, wp-config.php sei nicht beschreibbar

Der Prozess Ihres Webservers benötigt Schreibberechtigung für die Datei `wp-config.php`. Sie können entweder:

- Temporär die Dateiberechtigungen auf `644` oder `666` ändern
- Die vom Assistenten bereitgestellten Anweisungen für die manuelle Setup-Alternative verwenden
- Um Hilfe bitten

### Seiten sind nach der Einrichtung nicht erreichbar (Subdomains)

Wenn Sie die Subdomain-Struktur gewählt haben, müssen Sie **Wildcard-DNS** für Ihre Domain konfigurieren. Fügen Sie einen DNS-Eintrag hinzu:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

Fragen Sie Ihren Hosting-Provider, wenn Sie unsicher sind, wie Sie dies konfigurieren.

### Authentifizierungsprobleme nach der Einrichtung

Wenn Sie abgemeldet sind oder nach der Multisite-Einrichtung Cookie-Fehler auftreten:

1. Löschen Sie die Browser-Cookies für die Seite
2. Melden Sie sich erneut unter `yourdomain.com/wp-login.php` an
3. Wenn das Problem weiterhin besteht, prüfen Sie, ob Ihre `wp-config.php` nicht `COOKIE_DOMAIN` auf `false` gesetzt hat — dies ist ein bekanntes Problem bei Subdomain-Multisite-Installationen

### Ein Schritt ist während der Installation fehlgeschlagen

Wenn einer der Installationsschritte einen Fehler anzeigt:

1. Notieren Sie sich die angezeigte Fehlermeldung
2. Gehen Sie zurück zum Konfigurationsschritt und versuchen Sie es erneut
3. Wenn der Fehler weiterhin besteht, prüfen Sie das PHP-Fehlerprotokoll Ihres Servers für weitere Details
4. Schritte, die bereits abgeschlossen wurden, werden bei nachfolgenden Durchläufen übersprungen (der Installer ist idempotent).
