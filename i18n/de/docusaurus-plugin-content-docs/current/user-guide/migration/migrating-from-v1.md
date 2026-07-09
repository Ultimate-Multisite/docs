---
title: Migration von V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migration von V1

## Ultimate Multisite ist von seiner ursprünglichen 1.x-Release-Familie zur 2.x-Release-Familie gewechselt.

Ultimate Multisite Version 2.0 und höher ist eine vollständige Neufassung der Codebasis, was bedeutet, dass zwischen der alten Version und der neuen nur sehr wenig gemeinsam ist. Aus diesem Grund müssen beim Upgrade von 1.x auf 2.x deine Daten in ein Format migriert werden, das die neuen Versionen verstehen können.

Glücklicherweise **enthält Ultimate Multisite 2.0+ einen Migrator**, der in den Kern integriert ist und Daten aus der alten Version erkennen und in das neue Format konvertieren kann. Diese Migration erfolgt während des **Setup Wizard** von Version 2.0+.

Diese Lektion behandelt, wie der Migrator funktioniert, was in Fehlerfällen zu tun ist und wie Probleme behoben werden können, die während dieses Prozesses auftreten könnten.

_**WICHTIG: Bevor du mit dem Upgrade von Version 1.x auf Version 2.0 beginnst, stelle bitte sicher, dass du ein Backup deiner Website-Datenbank erstellst**_

## Erste Schritte

Der erste Schritt besteht darin, die Plugin-.zip-Datei herunterzuladen und Version 2.0 in deinem Netzwerk-Admin-Dashboard zu installieren.

Nachdem du [Version 2.0 installiert und aktiviert hast](../getting-started/installing-ultimate-multisite.md), erkennt das System automatisch, dass dein Multisite auf der Legacy-Version läuft, und du siehst diese Meldung oben auf der Plugin-Seite.

_**HINWEIS:** Wenn du Ultimate Multisite 1.x auf deinem Multisite installiert hast, hast du die Möglichkeit, das Plugin durch die Version zu ersetzen, die du gerade heruntergeladen hast. Bitte fahre fort und klicke auf **Aktuelle durch hochgeladene ersetzen**._

<!-- Screenshot nicht verfügbar: Plugin-Seite mit Option, v1 durch hochgeladene v2-Version zu ersetzen -->

Auf der nächsten Seite erfährst du, welche Legacy-Add-ons du zusammen mit Version 1.x installiert hast. Sie enthält Anweisungen dazu, ob die von dir verwendete Version mit Version 2.0 kompatibel ist oder ob du nach der Migration eine aktualisierte Version des Add-ons installieren musst.

<!-- Screenshot nicht verfügbar: Meldung oben auf der Plugin-Seite über die Aktualisierung auf v2.0, mit Liste der Add-ons, die aktualisiert werden müssen -->

Sobald du bereit bist fortzufahren, kannst du auf den Button klicken, auf dem **Installer besuchen, um das Upgrade abzuschließen** steht.

<!-- Screenshot nicht verfügbar: Button mit der Aufschrift Installer besuchen, um das Upgrade abzuschließen -->

Dann gelangst du zur Seite des Installationsassistenten mit einigen Begrüßungsnachrichten. Du musst nur auf **Loslegen** klicken, um zur nächsten Seite zu wechseln.

<!-- Screenshot nicht verfügbar: Begrüßungsseite des Setup Wizard mit Loslegen-Button -->

Nachdem du auf **Loslegen** geklickt hast, wirst du zu den Vorinstallationsprüfungen weitergeleitet_._ Dort werden dir deine Systeminformationen und deine WordPress-Installation angezeigt, und es wird dir mitgeteilt, ob sie die **Anforderungen von Ultimate Multisite** erfüllt.

<!-- Screenshot nicht verfügbar: Seite Vorinstallationsprüfungen mit Bestätigung der Systemanforderungen -->

Der nächste Schritt besteht darin, deinen Ultimate Multisite-Lizenzschlüssel einzugeben und das Plugin zu aktivieren. Dadurch wird sichergestellt, dass alle Funktionen, einschließlich Add-ons, auf deiner Website verfügbar sind.

<!-- Screenshot nicht verfügbar: Seite zur Lizenzaktivierung mit Eingabe für Lizenzschlüssel und Button Zustimmen und aktivieren -->

Nachdem du deinen Schlüssel eingegeben hast, klicke auf **Zustimmen & aktivieren**.

Nach der Lizenzaktivierung kannst du die eigentliche Installation beginnen, indem du auf der nächsten Seite auf **Installieren** klickst. Dadurch werden automatisch die notwendigen Dateien und die Datenbank erstellt, die für die Funktion von Version 2.0 erforderlich sind.

<!-- Screenshot nicht verfügbar: Installationsseite mit Anzeige, was aktualisiert wird, und Installieren-Button -->

## Jetzt die Migration

Der Migrator verfügt über eine integrierte Sicherheitsfunktion, bei der dein gesamtes Multisite überprüft wird, um sicherzustellen, dass alle deine Ultimate Multisite-Daten ohne Probleme migriert werden können. Klicke auf den Button **Prüfung ausführen**, um den Prozess zu starten.

<!-- Screenshot nicht verfügbar: Migrationsseite mit Prüfung-ausführen-Button, um zu verifizieren, dass Daten konvertiert werden können -->

Nach dem Ausführen der Prüfung gibt es zwei Möglichkeiten: Das Ergebnis kann entweder **mit** einem Fehler oder **ohne Fehler** sein.

### Mit Fehler

Wenn du eine Fehlermeldung erhältst, musst du dich an unser Support-Team wenden, damit es dir bei der Behebung des Fehlers helfen kann. Stelle sicher, dass du **das Fehlerprotokoll bereitstellst**, wenn du ein Ticket erstellst. Du kannst das Protokoll herunterladen oder auf den Link klicken, der besagt, dass du unser Support-Team kontaktieren sollst. Dadurch wird das Hilfe-Widget auf der rechten Seite deiner Seite geöffnet, wobei die Felder bereits für dich vorausgefüllt sind und die Fehlerprotokolle in der Beschreibung enthalten.

_**Da das System einen Fehler gefunden hat, kannst du nicht mit der Migration auf Version 2.0 fortfahren. Du kannst dann zu Version 1.x zurückkehren, um dein Netzwerk weiter auszuführen, bis der Fehler behoben ist.**_

### Ohne Fehler

Wenn das System keinen Fehler findet, siehst du eine Erfolgsmeldung und unten einen **Migrieren**-Button, mit dem du mit der Migration fortfahren kannst. Auf dieser Seite wirst du daran erinnert, ein Backup deiner Datenbank zu erstellen, bevor du fortfährst, was wir dringend empfehlen. Klicke auf **Migrieren**, wenn du bereits ein Backup hast.

<!-- Screenshot nicht verfügbar: Migrationsseite mit Erfolgsmeldung und Backup-Empfehlung -->

<!-- Screenshot nicht verfügbar: Migrieren-Button in der unteren rechten Ecke -->

Und das ist alles, was nötig ist!

Du kannst entweder mit der Einrichtung im Wizard fortfahren, um dein Logo und andere Dinge in deinem Netzwerk zu aktualisieren, oder damit beginnen, durch das Menü deiner Ultimate Multisite Version 2.0 und die neue Oberfläche zu navigieren. Viel Spaß dabei.
