---
title: E-Mails und Rundsendungen versenden
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# E-Mails und Broadcasts senden (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Ultimate Multisite enthält eine Funktion, mit der du mit deinen Kunden kommunizieren kannst, indem du eine E-Mail an einen bestimmten Benutzer oder eine Gruppe von Benutzern sendest sowie Hinweise auf ihrem Admin-Dashboard anzeigst, um Ankündigungen zu verbreiten

## Admin-Hinweise mit Broadcasts zum Dashboard deiner Kunden hinzufügen {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Mit der Broadcast-Funktion von Ultimate Multisite kannst du **Admin-Hinweise** zum Admin-Dashboard der Subsite deines Benutzers hinzufügen.

Das ist äußerst hilfreich, wenn du eine Ankündigung machen musst, z. B. zu Systemwartung oder zum Angebot neuer Produkte oder Dienste für deine bestehenden Benutzer. So wird der Admin-Hinweis auf dem Dashboard deines Benutzers aussehen.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Um einen Admin-Hinweis zu starten, gehe zu deinem Netzwerk-Admin-Dashboard. Unter dem Menü **Ultimate Multisite** findest du die Option **Broadcasts**.

![Broadcasts-Listenseite im Ultimate Multisite-Admin](/img/admin/broadcasts-list.png)

Du kannst auch bestehende Broadcasts bearbeiten:

![Broadcast-Bearbeitungsoberfläche](/img/admin/broadcast-edit.png)

Klicke auf dieser Seite oben auf die Schaltfläche **Broadcast hinzufügen**.

Dadurch wird das Modalfenster „Broadcast hinzufügen“ geöffnet, in dem du auswählen kannst, welche Art von Broadcast du senden möchtest.

Wähle **Nachricht** aus und klicke dann auf die Schaltfläche **Nächster Schritt**.

![Modalfenster „Broadcast hinzufügen“ mit ausgewählter Option „Nachricht“](/img/admin/broadcast-add-message.png)

Im nächsten Fenster wirst du entweder nach dem **Zielkunden** oder dem **Zielprodukt** gefragt. Beachte, dass du mehr als einen Benutzer oder mehr als ein Produkt auswählen kannst.

Um entweder nach einem Benutzer-Account oder einem Produkt zu suchen, musst du das Schlüsselwort in das Feld eingeben.

Im Feld **Nachrichtentyp** kannst du die Farbe des Hinweises auswählen. Dadurch wird die Dringlichkeit deiner Nachricht hervorgehoben.

Anschließend kannst du auf **Nächster Schritt** klicken.

![Felder für Zielkunden, Zielprodukt und Nachrichtentyp für einen Nachrichten-Broadcast](/img/admin/broadcast-message-targets.png)

Im nächsten Fenster kannst du mit dem Verfassen deiner Nachricht beginnen, indem du den Betreff und den Inhalt/die Nachricht eingibst, die du an die Benutzer broadcasten möchtest.

![Betreff- und Inhaltseditor für Broadcast-Nachrichten im Verfassen-Schritt](/img/admin/broadcast-edit.png)

Nachdem du deine Nachricht erstellt hast, kannst du auf die Schaltfläche **Senden** klicken.

Und das war’s. Der Admin-Hinweis sollte sofort auf dem Dashboard deines Benutzers angezeigt werden.

## E-Mails an deine Kunden senden {#send-emails-to-your-customers}

Mit der Broadcast-Funktion von Ultimate Multisite kannst du eine E-Mail an deine Benutzer senden. Du hast die Möglichkeit, die E-Mail nur an bestimmte Benutzer zu senden oder eine bestimmte Benutzergruppe basierend auf dem Produkt oder Plan anzusprechen, unter dem sie abonniert sind.

Um einen E-Mail-Broadcast zu starten, gehe zu deinem Netzwerk-Admin-Dashboard. Unter dem Ultimate Multisite-Menü findest du die Broadcast-Option.

![Broadcasts-Listenseite als Ausgangspunkt für einen E-Mail-Broadcast](/img/admin/broadcasts-list.png)

Klicke auf dieser Seite oben auf die Schaltfläche **Broadcast hinzufügen**.

Dadurch wird das Modalfenster „Broadcast hinzufügen“ geöffnet, in dem du auswählen kannst, welche Art von Broadcast du senden möchtest. Wähle **E-Mail** aus und klicke dann auf die Schaltfläche **Nächster Schritt**.

![Modalfenster „Broadcast hinzufügen“ mit ausgewählter Option „E-Mail“](/img/admin/broadcast-add-email.png)

Im nächsten Fenster wirst du entweder nach dem **Zielkunden** oder dem **Zielproduk** t gefragt. Beachte, dass du mehr als einen Benutzer oder mehr als ein Produkt auswählen kannst.

Um entweder nach einem Benutzer-Account oder einem Produkt zu suchen, musst du das Schlüsselwort in das Feld eingeben.

Sobald deine Zielgruppe ausgewählt ist, kannst du auf **Nächster Schritt** klicken.

![Auswahl von Zielkunden und Zielprodukt für einen E-Mail-Broadcast](/img/admin/broadcast-email-targets.png)

Im nächsten Fenster kannst du mit dem Verfassen deiner E-Mail beginnen, indem du den Betreff und den Inhalt/die Nachricht eingibst, die du an die Benutzer senden möchtest.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Nachdem du deine Nachricht erstellt hast, kannst du auf die Schaltfläche **Senden** klicken.

Und so einfach ist es, mit der Broadcast-Funktion eine E-Mail an deine Endbenutzer zu senden.

## System-E-Mails {#system-emails}

System-E-Mails in Ultimate Multisite sind jene **automatischen Benachrichtigungen**, die vom System nach bestimmten Aktionen wie Registrierung, Zahlung, Domain-Mapping usw. gesendet werden. Diese E-Mails können in den Ultimate Multisite-Einstellungen bearbeitet oder geändert werden. Es enthält außerdem eine Funktion, mit der du bestehende Einstellungen aus einer anderen Ultimate Multisite-Installation zurücksetzen und importieren kannst.

### Zurücksetzen & Importieren {#resetting--importing}

Neue Ultimate Multisite-Versionen sowie Add-ons können und werden von Zeit zu Zeit neue E-Mails registrieren.

Um Konflikte und andere Probleme zu vermeiden, **fügen wir die neuen E-Mail-Vorlagen nicht automatisch als System-E-Mails zu deiner Installation hinzu** , es sei denn, sie sind für das korrekte Funktionieren einer bestimmten Funktion entscheidend.

Super-Admins und Agenten können diese neu registrierten E-Mails jedoch über das Importer-Tool importieren. Dieser Vorgang erstellt eine neue System-E-Mail mit dem Inhalt und der Konfiguration der neuen E-Mail-Vorlage, sodass der Super-Admin beliebige Änderungen vornehmen oder sie unverändert lassen kann.

#### So importierst du System-E-Mails {#how-to-import-system-emails}

Gehe zu deiner Ultimate Multisite-Einstellungsseite und öffne den Tab **E-Mails**.

![E-Mails-Tab in den Ultimate Multisite-Einstellungen mit dem Abschnitt „System-E-Mails“](/img/config/settings-emails-tab.png)

Klicke dann in der Seitenleiste auf die Schaltfläche **System-E-Mails anpassen**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Auf der Seite „System-E-Mails“ siehst du oben die Aktionsschaltfläche **Zurücksetzen & Importieren**. Wenn du auf diese Schaltfläche klickst, sollte sich das Modalfenster zum Importieren und Zurücksetzen öffnen.

![Aktionsschaltfläche „Zurücksetzen oder Importieren“ auf der Admin-Seite „System-E-Mails“](/img/admin/system-emails-reset-import.png)

Dann kannst du die Optionen zum Importieren von E-Mails umschalten, um zu sehen, welche System-E-Mails zum Import verfügbar sind.

<!-- Screenshot nicht verfügbar: Modal „Zurücksetzen und importieren“ mit ausgeklappten Optionen zum Importieren von E-Mails -->

#### System-E-Mails zurücksetzen {#reseting-system-emails}

Manchmal stellen Sie fest, dass die Änderungen, die Sie an einer bestimmten E-Mail-Vorlage vorgenommen haben, für Sie nicht mehr funktionieren, und Sie möchten sie auf ihren **Standardzustand** zurücksetzen.

In solchen Fällen haben Sie zwei Optionen: Sie können die System-E-Mail einfach löschen und sie erneut importieren (mithilfe der obigen Anweisungen) – dadurch werden jedoch Versandmetriken und andere Dinge gelöscht, weshalb diese Methode am wenigsten empfohlen wird.

Oder Sie können das Tool **Zurücksetzen & Importieren** verwenden, um diese E-Mail-Vorlage zurückzusetzen.

Um eine E-Mail-Vorlage zurückzusetzen, können Sie die obigen Schritte ausführen, bis Sie das Tool „Zurücksetzen & Importieren“ erreichen. Aktivieren Sie dann die Option **Zurücksetzen** und wählen Sie die E-Mails aus, die Sie auf ihren Standardinhalt zurücksetzen möchten.

<!-- Screenshot nicht verfügbar: Modal „Zurücksetzen und importieren“ mit ausgeklappten Optionen zum Zurücksetzen von E-Mails -->
