---
title: Multisite-Usetzigsassistent
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard {#multisite-setup-wizard}

Ultimate Multisite beinhaltet en eingebauten wizard, wo eifach e normale WordPress-Installation automatisch in es WordPress Multisite Netzwerk umwandlet. Das heisst, du muesch nöd manuell `wp-config.php` bearbeite oder Datenbankbefehl usfüehre.

:::tip
Wenn dini WordPress-Installation scho als Multisite-Netzwerk lauft, chasch dä Schritt ganz überspringe. De wizard zeigt sich nur a, wenn Multisite no nöd aktiviert isch.
:::

## Wann erscheint de Wizard? {#when-does-the-wizard-appear}

Wenn du Ultimate Multisite uf e normale (nöd-Multisite) WordPress-Installation aktiviersch, merkt s Plugin, dass Multisite nöd aktiviert isch, und leitet dich automatisch zum Multisite Setup Wizard statt zum normale Setup Wizard wiiter.

Du chasch ihn au direkt unter **WP Admin > Ultimate Multisite > Multisite Setup** erreiche.

## Voraussetzungen {#prerequisites}

Bevor du de wizard startisch, stell sicher:

- Du hesch **Administratorzugriff** uf dini WordPress-Installation
- Dini Server `wp-config.php` Datei isch vom Webserver **schriibbar** (writable)
- Du hesch en **neue Backup** vo dine Date und Datenbank

:::warning
De wizard verändert dini `wp-config.php` Datei und erstellt neui Datenbanktabellen. Mach immer es Backup, bevor du wiitergaasch.
:::

## Schritt 1: Willkomme {#step-1-welcome}

D'ersti Bildschirm erklärt dir, was WordPress Multisite isch und was de wizard macht:

- Aktivier d'Multisite-Funktion i dinere WordPress-Konfiguration
- Erstelle die nötige Netzwerkdatenbanktabellen
- Füeg d'nötige multisite Konstante zu `wp-config.php` bi
- Aktiviere Ultimate Multisite im ganze Netzwerk

![Multisite Setup Wizard - Willkommeschritt](/img/installation/multisite-wizard/wizard-welcome.png)

Klick uf **Weiter**, um wiiterzgah.

## Schritt 2: Netzwerkkonfiguration {#step-2-network-configuration}

Dä Schritt fragt dich, wie du dini Netzwerkeinstellungen konfiguriere wetsch.

### Site Struktur {#site-structure}

Wähle, wie dini Netzwerbsite organisiert wëll sinn:

- **Sub-domains** (Empfohlen) — D'Sites kriecht eignen Subdomain, wéi `site1.yourdomain.com`
- **Sub-directories** — Sites ginn als Pfäffer erstellt, wéi `yourdomain.com/site1`

:::note
Wenn du Subdomains wählst, muesch **wildcard DNS** und en **wildcard SSL certificate** fir dini Domain konfiguréieren. D'meescht verwaltete WordPress-Hosts mache das automatisch. Lueg [Ultimate Multisite 101](./ultimate-multisite-101) für en detailléierte Verglich.
:::

### Netzwerknam {#network-title}
Gib en Name fir din Netzwer. Dat standardmäßig de Titel vo din aktuelle Site mit "Network" am End hät. Du chann dä speter us de Netzwerkeinstellungen ändere.

### Netzwerkinformatioun Email {#network-admin-email}
D'E-Mail-Adrässe, déi fir d'Netzwerkadministratiounsinifikatiounsmeldungen bruucht gëtt. Dat standardmäßig d'E-Mail-Adrässe vum aktuelle Benutzer hät.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Nachdem du déi Felcher ugefült häsch, klick uf **Continue**, um wiiterz'fahre.

## Schritt 3: Installation {#step-3-installation}

Klick uf de **Install** Button, um z'beginnen. De Wizard führt fünf automatiséiert Schrëtt i Sekwenz us, wobei jede sin Fortschritt in Echtzita zeigt:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Schritt | Beschriitig |
|---|---|
| **Multisite Aktivierä** | Fügt die Konstante `WP_ALLOW_MULTISITE` in `wp-config.php` hinzu |
| **Netzwerk Erstelle** | Erstellt d'Multisite-Datenbanktabellen (`wp_site`, `wp_sitemeta`, `wp_blogs`, etc.) und füllt sie mit de Konfigurationsdate vo dim Netzwerk |
| **Konfiguration Aktualisiere** | Fügt die abschliessende Multisite-Konstanten in `wp-config.php` hinzu (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, etc.) |
| **Cookies Korrigiere** | Stellt sicher, dass d'Site-URL im Netzwerk-Metadaten korrekt isch, um Authentifizierungsprobleme nach Aktivierig z'verhindere |
| **Netzwerk Plugin Aktivieren** | Aktiviert Ultimate Multisite als Netzwerk, damit es über s'ganze Netzwerk lauft |

Jede Schritt zeigt eine vo diesen Statusanzeige:

- **Pending** — Wartet noch verarbeitet z'werde
- **Installing...** — Wird grad laufe
- **Success!** — Erfolgreich abgschlosse
- **Error message** — Es isch en Fehler passiert (d'Nachricht beschribt s'Problem)

Sobald alli Schritt erfolgreich fertig sind, gsehsch für jede Punkt en grüene "Success!" Status:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

De Wizard gaht denn automatisch zur Abschlussbildschirm über.

## Schritt 4: Fertig {#step-4-complete}

Sobald d'Installation fertig isch, gsehsch en Erfolgsmeldig, wo bestätigt, dass WordPress Multisite aktiviert worde isch.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Jetzt chasch mit em Ultimate Multisite Setup Wizard wiiterfahre und dini WaaS Plattform konfiguriere (Firmendetails, Standardinhalt, Zahlungsgateways usw.).

:::note
Nachdem d'Multisite-Installation fertig isch, wird din Browser über de neu aktivierti Netzwerkadmin umgleitet. Du chönntsch eventuell no mal iilogge müesse, will d'Authentifizierigs-Cookies für d'Multisite-Umgebig aktualisiert sind.
:::

## Manuelle Einrichtung als Fallback {#manual-setup-fallback}

Wenn de Wizard nöd in dini `wp-config.php` Datei schriibe cha (wäg Dateberechtigunge oder Serverbeschränkige), zeigt er dir genau de Code, wo du manuell dezuefüege muesch:

1. D'**wp-config.php constants**, wo über d'Zeile `/* That's all, stop editing! */` dezuegfüege müesse wärde
2. D'.htaccess rewrite rules, wo zu dinere gwählte Site-Struktur (Subdomain oder Unterverzeichnis) passend sind

Nachdem du die manuelle Änderige gmacht hesch, lade d'Seite neu und de Wizard wird merke, dass s'Multisite jetzt aktiv isch.

## Fehlerbehebung {#troubleshooting}

### De Wizard seit, wp-config.php isch nöd schriibbar (not writable) {#the-wizard-says-wp-configphp-is-not-writable}

Dini Webserver-Prozess brucht Schreibberechtigunge für d'Datei `wp-config.php`. Du chasch entweder:

- D'Dateberechtigunge vorübergehend uf `644` oder `666` ändere
- D'Anleitige zur manuellen Einrichtung vom Wizard verwände
- Din Hosting-Provider um Hilf bitte

### Sites sind nach de Einrichtung nöd zuegänglich (Subdomains) {#sites-are-not-accessible-after-setup-subdomains}

Wenn du d'Subdomain-Struktur gwählt hesch, muesch du **Wildcard DNS** für dini Domain konfiguriere. Füeg en DNS-Eintrag dezue:

```
Type: A (oder CNAME)
Host: *
Value: [din Server IP]
```

Frag din Hosting-Provider, wenn du nöd weisch, wie du das konfiguriersch.

### Authentifizierigs-Problem nach de Einrichtung {#authentication-issues-after-setup}

Wenn du abglogge bisch oder Cookie-Fehler häsch nach de Multisite-Einrichtig:

1. Lösch dini Browser-Cookies für d'Site
2. Log di no mal i uf `yourdomain.com/wp-login.php`
3. Wenn s'Problem wiitergoht, überprüef, ob dini `wp-config.php` nöd `COOKIE_DOMAIN` uf `false` gsetzt het — das isch es bekanntes Problem bi Multisite-Installationen mit Subdomains.

### En Schritt isch während de Installation fehlgschlage {#a-step-failed-during-installation}

Wenn eini vo de Installatierschritt en Fehler zeigt:

1. Notiere d'Fehlerbesorgnis, wo aazeigt wird.
2. Gang zrugg zu em Konfigurationsschritt und versuech noamals.
3. Wenn de Fehler wiiterhin besteht, überprüef dini Server-PHP-Fehlerlog für meh Details.
4. Schritt, wo scho fertig sind, wërd an folgendi Läufe übersprungen (de Installer isch idempotent).
