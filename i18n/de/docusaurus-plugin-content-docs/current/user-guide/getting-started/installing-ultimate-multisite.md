---
title: Installation von Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installation von Ultimate Multisite

:::note
Dieses Tutorial geht davon aus, dass Sie bereits WordPress Multisite installiert und konfiguriert haben. Wie dies funktioniert, erfahren Sie in [diesem Tutorial](https://www.wpbeginner.com/glossary/multisite/) von WP Beginner.
:::

## Plugin installieren {#installing-the-plugin}

Ultimate Multisite ist kostenlos auf [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) verfügbar.

Gehen Sie in Ihrem **Network Admin Dashboard** zu **Plugins → Neues Plugin hinzufügen**.

![Netzwerk-Admin-Seite zum Hinzufügen eines neuen Plugins](/img/installation/add-new-plugin.png)

Suchen Sie nach **"Ultimate Multisite"** (mit Anführungszeichen für eine exakte Übereinstimmung), und es wird als erstes Ergebnis angezeigt. Klicken Sie auf **Jetzt installieren**.

![Suchergebnisse, die Ultimate Multisite anzeigen](/img/installation/search-ultimate-multisite.png)

Sobald die Installation abgeschlossen ist, klicken Sie auf **Netzwerkweit aktivieren**, um das Plugin in Ihrem gesamten Netzwerk zu aktivieren.

![Plugin installiert mit Button zur Netzwerkaktivierung](/img/installation/plugin-installed.png)

Nach der Aktivierung werden Sie automatisch zum Setup-Assistenten weitergeleitet.

![Plugin aktiviert und Weiterleitung zum Assistenten](/img/installation/plugin-activated.png)

## Setup-Assistent {#setup-wizard}

Der Setup-Assistent führt Sie in etwa 10 Minuten durch die Konfiguration von Ultimate Multisite.

### Willkommen {#welcome}

Klicken Sie auf **Loslegen**, um zu beginnen.

![Willkommensbildschirm des Setup-Assistenten](/img/installation/wizard-welcome.png)

### Vorinstallationsprüfungen {#pre-install-checks}

In diesem Schritt werden Ihre Systeminformationen und Ihre WordPress-Installation überprüft, um sicherzustellen, dass sie die Anforderungen von Ultimate Multisite erfüllen. Wenn alles in Ordnung ist, klicken Sie auf **Zum nächsten Schritt**.

![Vorinstallationsprüfungen mit angezeigten Systemanforderungen](/img/installation/wizard-pre-install-checks.png)

:::note Button zur Netzwerkaktivierung (v2.6.1+)
Wenn Ultimate Multisite installiert, aber **noch nicht netzwerkweit aktiviert** wurde – zum Beispiel, wenn Sie auf **Aktivieren** (für eine einzelne Site) statt auf **Netzwerkweit aktivieren** im Bildschirm für Netzwerk-Plugins geklickt haben –, erkennt der Schritt „Vorinstallationsprüfungen“ dies und zeigt einen Button zur **Netzwerkaktivierung** an.

Durch Klicken auf **Netzwerkweit aktivieren** wird das Plugin automatisch in Ihrem gesamten Multisite-Netzwerk aktiviert. Sobald es aktiviert ist, fährt der Assistent wie gewohnt mit dem Installationsschritt fort. Sie müssen den Assistenten nicht verlassen, um den Aktivierungsstatus zu korrigieren.
:::

### Installation {#installation}

Der Installer erstellt die erforderlichen Datenbanktabellen und installiert die `sunrise.php`-Datei, die Ultimate Multisite zum Funktionieren benötigt. Klicken Sie auf **Installieren**, um fortzufahren.

![Installationsschritt mit angezeigten Datenbanktabellen und sunrise.php](/img/installation/wizard-installation.png)

### Ihr Unternehmen {#your-company}

Geben Sie Ihre Unternehmensinformationen ein und legen Sie Ihre Standardwährung fest. Diese Informationen werden in Ihrer gesamten WaaS-Plattform verwendet. Klicken Sie nach Abschluss auf **Weiter**.

![Konfigurationsschritt „Ihr Unternehmen“](/img/installation/wizard-your-company.png)

### Standardinhalte {#default-content}

In diesem Schritt können Sie vordefinierte Vorlagen, Produkte und andere Startinhalte installieren. Dies ist ein guter Weg, um sich mit den Funktionen von Ultimate Multisite vertraut zu machen. Klicken Sie auf **Installieren**, um die Standardinhalte hinzuzufügen, oder überspringen Sie diesen Schritt, wenn Sie lieber bei Null anfangen möchten.

![Installationsschritt für Standardinhalte](/img/installation/wizard-default-content.png)

### Empfohlene Plugins {#recommended-plugins}

Optional können Sie empfohlene Begleit-Plugins installieren. Klicken Sie auf **Installieren**, um sie hinzuzufügen, oder überspringen Sie diesen Schritt, um fortzufahren.

![Schritt für empfohlene Plugins](/img/installation/wizard-recommended-plugins.png)

### Fertig! {#ready}

Das war's! Ihre Ultimate Multisite-Installation ist abgeschlossen. Sie können jetzt mit dem Aufbau Ihrer Website-as-a-Service-Plattform im **Network Admin Dashboard** beginnen.

![Setup abgeschlossen – Bildschirm „Fertig“](/img/installation/wizard-ready.png)

![Network Admin Dashboard mit aktivem Ultimate Multisite](/img/installation/network-dashboard.png)

Machen Sie sich bereit und haben Sie Spaß!
