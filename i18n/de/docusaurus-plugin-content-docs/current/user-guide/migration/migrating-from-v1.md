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

![Meldung oben auf der Plugin-Seite: Danke für das Update auf Ultimate Multisite Version 2.0. Unterhalb befindet sich ein Link, der den Benutzer zum Versions-Upgrader führt. Anschließend folgt eine Liste von Add-ons, die aktualisiert werden müssen.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4E9kAFlcb5.png)

Sobald Sie bereit sind, können Sie auf die Schaltfläche klicken, die **Visit the Installer to finish the upgrade** anzeigt.

![In Rot eingerahmt: Schaltfläche mit der Aufschrift Visit the Installer to finish the upgrade](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BnJrjt7Drw.png)

Anschließend gelangen Sie zur Installationsassistenten-Seite mit einigen Begrüßungsnachrichten. Sie müssen lediglich auf **Get Started** klicken, um zur nächsten Seite zu gelangen.

![Willkommensseite des Setup Wizard. In Rot eingerahmt in der unteren rechten Ecke: Get Started-Schaltfläche.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1dvRbsEnrN.png)

Nach dem Klicken auf **Get Started** wird Sie zur Pre-install Checks_._ weitergeleitet. Dort sehen Sie Ihre Systeminformationen und die WordPress-Installation und erfahren, ob sie die **Ultimate Multisite's requirements** erfüllt.

![Pre-install Checks-Seite, die Bestätigungsnachrichten anzeigt, dass die Installation die Ultimate Multisite's requirements erfüllt. In Rot eingerahmt in der unteren rechten Ecke: Go to the next step-Schaltfläche.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-i0SwDNkaEO.png)

Der nächste Schritt besteht darin, Ihren Ultimate Multisite-Lizenzschlüssel einzugeben und das Plugin zu aktivieren. Dadurch werden alle Funktionen, einschließlich Add-ons, auf Ihrer Site verfügbar sein.

![Lizenzaktivierungsseite, die auflistet, was der Support beinhaltet und was nicht. Am unteren Rand befindet sich ein Feld, in das Sie die Plugin-Lizenz einfügen können. In Rot eingerahmt in der unteren rechten Ecke: Agree and activate-Schaltfläche.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-QAwmR9oLQL.png)

Nachdem Sie Ihren Schlüssel eingegeben haben, klicken Sie auf **Agree & Activate**.

Nach der Lizenzaktivierung können Sie die eigentliche Installation starten, indem Sie auf der nächsten Seite auf **Install** klicken. Dadurch werden automatisch die erforderlichen Dateien und die Datenbank erstellt, die für die Funktionsfähigkeit von Version 2.0 benötigt werden.

![Installationsseite, die anzeigt, was aktualisiert wird, damit Ultimate Multisite funktioniert. In Rot eingerahmt in der unteren rechten Ecke: Install-Schaltfläche.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FCyBH12y4d.png)

## Jetzt die Migration

Der Migrator verfügt über eine integrierte Sicherheitsfunktion, die Ihr gesamtes Multisite überprüft, um sicherzustellen, dass alle Ihre Ultimate Multisite-Daten ohne Probleme migriert werden können. Klicken Sie auf die Schaltfläche **Run Check**, um den Prozess zu starten.

![Migrationsseite, die erklärt, dass ein Check durchgeführt wird, um festzustellen, ob alle Ihre Daten aus v1 konvertiert werden können. In Rot eingerahmt in der unteren rechten Ecke: Run check-Schaltfläche.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vXLXFLjogz.png)

Nach dem Ausführen des Checks haben Sie zwei Möglichkeiten: Das Ergebnis kann entweder **mit** einem Fehler oder **ohne** Fehler sein.

### Mit Fehler

Falls Sie eine Fehlermeldung erhalten, müssen Sie sich an unser Support-Team wenden, damit es Ihnen bei der Behebung des Fehlers hilft. Stellen Sie sicher, dass Sie beim Erstellen eines Tickets **den Fehlerprotokoll bereitstellen**. Sie können das Protokoll herunterladen oder auf den Link klicken, der „contact our support team“ sagt. Dadurch wird das Hilfs-Widget auf der rechten Seite Ihrer Seite geöffnet, wobei die Felder für Sie vorab ausgefüllt sind und die Fehlerprotokolle unter der Beschreibung enthalten sind.

_**Da das System einen Fehler gefunden hat, können Sie nicht zur Migration auf Version 2.0 fortfahren. Sie können dann zu Version 1.x zurückkehren, um Ihr Netzwerk weiterzuführen, bis der Fehler behoben ist.**_

### Ohne Fehler

Wenn das System keinen Fehler findet, sehen Sie eine Erfolgsmeldung und unten eine **Migrate**-Schaltfläche, die es Ihnen ermöglicht, mit der Migration fortzufahren. Auf dieser Seite werden Sie daran erinnert, ein Backup Ihrer Datenbank zu erstellen, bevor Sie fortfahren, was wir dringend empfehlen. Klicken Sie auf **Migrate**, wenn Sie bereits ein Backup haben.

![Migrationsseite, die eine Erfolgsmeldung und eine Empfehlung zum Erstellen eines Backups anzeigt.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T5ELIgTX5a.png)

![In Rot eingerahmt in der unteren rechten Ecke: Migrate-Schaltfläche.](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y2AfV93rpf.png)

Und das ist alles, was Sie brauchen!

Sie können entweder den Wizard weiterführen, um Ihr Logo und andere Dinge in Ihrem Netzwerk zu aktualisieren, oder Sie beginnen, Ihr Ultimate Multisite Version 2.0-Menü und die neue Oberfläche zu erkunden. Legen Sie los und haben Sie Spaß.
