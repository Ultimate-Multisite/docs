---
title: Migrating from V1
sidebar_position: 17
_i18n_hash: ab3379eeae93ce385ad01c599fc181cb
---
# Migration von V1

## Ultimate Multisite ist von seiner ursprünglichen 1.x-Familie von Releases auf die 2.x-Familie von Releases umgestiegen.

Ultimate Multisite Version 2.0 und höher ist eine komplette Neuschreibung der Codebasis, was bedeutet, dass zwischen der alten Version und der neuen Version sehr wenig gemeinsam ist. Aus diesem Grund muss bei einem Upgrade von 1.x auf 2.x Ihre Daten in ein Format migriert werden, das die neuen Versionen verstehen können.

Glücklicherweise verfügt Ultimate Multisite 2.0+ **über einen Migrator**, der im Kern integriert ist und Daten aus der alten Version erkennen und in das neue Format konvertieren kann. Diese Migration erfolgt während des **Setup Wizard** von Version 2.0+.

Diese Lektion erklärt, wie der Migrator funktioniert, was im Falle eines Fehlers zu tun ist und wie man Probleme, die während dieses Prozesses auftreten können, behebt.

_**WICHTIG: Bevor Sie mit dem Upgrade von Version 1.x auf Version 2.0 beginnen, stellen Sie bitte sicher, dass Sie ein Backup Ihrer Site-Datenbank erstellen**_

## Erste Schritte

Der erste Schritt besteht darin, die Plugin-.zip-Datei herunterzuladen und Version 2.0 in Ihrem Netzwerk-Admin-Dashboard zu installieren.

Nach dem [Installieren und Aktivieren von Version 2.0](../getting-started/installing-ultimate-multisite.md) erkennt das System automatisch, dass Ihre Multisite noch die Legacy-Version verwendet, und Sie sehen diese Meldung oben auf der Plugin-Seite.

_**HINWEIS:** Wenn Sie Ultimate Multisite 1.x auf Ihrer Multisite installiert haben, haben Sie die Möglichkeit, das Plugin durch die gerade heruntergeladene Version zu ersetzen. Bitte klicken Sie auf **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Sobald Sie bereit sind, können Sie auf die Schaltfläche klicken, die **Visit the Installer to finish the upgrade** anzeigt.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Anschließend gelangen Sie zur Installationsassistenten-Seite mit einigen Begrüßungsnachrichten. Sie müssen lediglich auf **Get Started** klicken, um zur nächsten Seite zu gelangen.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Nach dem Klicken auf **Get Started** wird Sie zur Pre-install Checks_._ weitergeleitet. Dort sehen Sie Ihre Systeminformationen und die WordPress-Installation und erfahren, ob sie die **Ultimate Multisite's requirements** erfüllt.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Der nächste Schritt besteht darin, Ihren Ultimate Multisite-Lizenzschlüssel einzugeben und das Plugin zu aktivieren. Dadurch werden alle Funktionen, einschließlich Add-ons, auf Ihrer Site verfügbar sein.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Nachdem Sie Ihren Schlüssel eingegeben haben, klicken Sie auf **Agree & Activate**.

Nach der Lizenzaktivierung können Sie die eigentliche Installation starten, indem Sie auf der nächsten Seite auf **Install** klicken. Dadurch werden automatisch die erforderlichen Dateien und die Datenbank erstellt, die für die Funktionsfähigkeit von Version 2.0 benötigt werden.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

## Jetzt die Migration

Der Migrator verfügt über eine integrierte Sicherheitsfunktion, die Ihr gesamtes Multisite überprüft, um sicherzustellen, dass alle Ihre Ultimate Multisite-Daten ohne Probleme migriert werden können. Klicken Sie auf die Schaltfläche **Run Check**, um den Prozess zu starten.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

Nach dem Ausführen des Checks haben Sie zwei Möglichkeiten: Das Ergebnis kann entweder **mit** einem Fehler oder **ohne** Fehler sein.

### Mit Fehler

Falls Sie eine Fehlermeldung erhalten, müssen Sie sich an unser Support-Team wenden, damit es Ihnen bei der Behebung des Fehlers hilft. Stellen Sie sicher, dass Sie beim Erstellen eines Tickets **den Fehlerprotokoll bereitstellen**. Sie können das Protokoll herunterladen oder auf den Link klicken, der „contact our support team“ sagt. Dadurch wird das Hilfs-Widget auf der rechten Seite Ihrer Seite geöffnet, wobei die Felder für Sie vorab ausgefüllt sind und die Fehlerprotokolle unter der Beschreibung enthalten sind.

_**Da das System einen Fehler gefunden hat, können Sie nicht zur Migration auf Version 2.0 fortfahren. Sie können dann zu Version 1.x zurückkehren, um Ihr Netzwerk weiterzuführen, bis der Fehler behoben ist.**_

### Ohne Fehler

Wenn das System keinen Fehler findet, sehen Sie eine Erfolgsmeldung und unten eine **Migrate**-Schaltfläche, die es Ihnen ermöglicht, mit der Migration fortzufahren. Auf dieser Seite werden Sie daran erinnert, ein Backup Ihrer Datenbank zu erstellen, bevor Sie fortfahren, was wir dringend empfehlen. Klicken Sie auf **Migrate**, wenn Sie bereits ein Backup haben.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

Und das ist alles, was Sie brauchen!

Sie können entweder den Wizard weiterführen, um Ihr Logo und andere Dinge in Ihrem Netzwerk zu aktualisieren, oder Sie beginnen, Ihr Ultimate Multisite Version 2.0-Menü und die neue Oberfläche zu erkunden. Legen Sie los und haben Sie Spaß.
