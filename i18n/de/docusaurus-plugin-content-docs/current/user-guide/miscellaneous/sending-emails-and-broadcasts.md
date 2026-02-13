---
title: E-Mails senden und Rundschreiben
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# Senden von E-Mails und Rundschreiben (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Ultimate Multisite verfügt über eine Funktion, mit der Sie mit Ihren Kunden kommunizieren können, indem Sie eine E‑Mail an einen gezielten Benutzer oder eine Gruppe von Benutzern senden sowie Benachrichtigungen auf ihrem Admin-Dashboard anzeigen, um Ankündigungen zu verbreiten.

## Admin-Benachrichtigungen zu den Dashboards Ihrer Kunden mit Rundschreiben hinzufügen

Mit der Rundschreiben-Funktion von Ultimate Multisite können Sie **Admin-Benachrichtigungen** zum Admin-Dashboard Ihrer Subsite hinzufügen.

Dies ist äußerst hilfreich, wenn Sie eine Ankündigung wie Wartungsarbeiten oder das Angebot neuer Produkte oder Dienstleistungen an Ihre bestehenden Benutzer machen müssen. So sieht die Admin-Benachrichtigung auf dem Dashboard Ihres Benutzers aus.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

Um eine Admin-Benachrichtigung zu starten, gehen Sie zum Netzwerk-Admin-Dashboard und suchen Sie im Menü **Ultimate Multisite** nach der Option **Broadcasts**.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Klicken Sie auf dieser Seite oben auf die Schaltfläche **Add Broadcast**.

Dadurch öffnet sich das Modal-Fenster „Add broadcast“, in dem Sie auswählen können, welche Art von Rundschreiben Sie senden möchten. Wählen Sie **Message** und klicken Sie anschließend auf die Schaltfläche **Next Step**.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

Das nächste Fenster fragt Sie nach dem **Target customer** oder dem **Target product**. Beachten Sie, dass Sie mehr als einen Benutzer oder mehr als ein Produkt auswählen können.

Um nach einem Benutzerkonto oder Produkt zu suchen, müssen Sie das Schlüsselwort im Feld eingeben.

Im Feld **Message type** können Sie die Farbe der Benachrichtigung auswählen. Dadurch wird die Dringlichkeit Ihrer Nachricht betont.

Klicken Sie anschließend auf **Next Step**.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

Im nächsten Fenster können Sie Ihre Nachricht verfassen, indem Sie Betreff und Inhalt/Nachricht eingeben, die Sie an die Benutzer senden möchten.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

Nachdem Sie Ihre Nachricht erstellt haben, klicken Sie auf die Schaltfläche **Send**.

Und das war's. Die Admin-Benachrichtigung sollte sofort im Dashboard Ihres Benutzers angezeigt werden.

## E-Mails an Ihre Kunden senden

Mit der Rundschreiben-Funktion von Ultimate Multisite können Sie Ihren Benutzern eine E‑Mail senden. Sie haben die Möglichkeit, die E‑Mail nur an bestimmte Benutzer zu senden oder eine bestimmte Benutzergruppe basierend auf dem Produkt oder Plan, für den sie abonniert sind, anzusprechen.

Um ein E‑Mail-Rundschreiben zu starten, gehen Sie zum Netzwerk-Admin-Dashboard und suchen Sie im Menü Ultimate Multisite nach der Option Broadcast.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Klicken Sie auf dieser Seite oben auf die Schaltfläche **Add broadcast**.

Dadurch öffnet sich das Modal-Fenster „Add broadcast“, in dem Sie auswählen können, welche Art von Rundschreiben Sie senden möchten. Wählen Sie **Email** und klicken Sie anschließend auf die Schaltfläche **Next Step**.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

Das nächste Fenster fragt Sie nach dem **Target customer** oder dem **Target product**. Beachten Sie, dass Sie mehr als einen Benutzer oder mehr als ein Produkt auswählen können.

Um nach einem Benutzerkonto oder Produkt zu suchen, müssen Sie das Schlüsselwort im Feld eingeben.

Sobald Ihre Zielgruppe ausgewählt ist, klicken Sie auf **Next Step**.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

Im nächsten Fenster können Sie Ihre E‑Mail verfassen, indem Sie Betreff und Inhalt/Nachricht eingeben, die Sie an die Benutzer senden möchten.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

Nachdem Sie Ihre Nachricht erstellt haben, klicken Sie auf die Schaltfläche **Send**.

Und so einfach ist es, eine E‑Mail an Ihre Endbenutzer mit der Rundschreiben-Funktion zu senden.

## System-E-Mails

System-E-Mails in Ultimate Multisite sind die **automatischen Benachrichtigungen**, die vom System nach bestimmten Aktionen wie Registrierung, Zahlung, Domain‑Mapping usw. gesendet werden. Diese E‑Mails können in den Einstellungen von Ultimate Multisite bearbeitet oder geändert werden. Außerdem gibt es eine Funktion, mit der Sie vorhandene Einstellungen aus einer anderen Ultimate Multisite‑Installation zurücksetzen und importieren können.

### Zurücksetzen & Importieren

Neue Ultimate Multisite-Versionen sowie Add‑Ons können und werden von Zeit zu Zeit neue E‑Mails registrieren.

Um Konflikte und andere Probleme zu vermeiden, **werden wir die neuen E‑Mail-Vorlagen nicht automatisch als System‑E‑Mails in Ihrer Installation hinzufügen**, es sei denn, sie sind entscheidend für die korrekte Funktionsweise einer bestimmten Funktion.

Allerdings können Super‑Admins und Agenten diese neu registrierten E‑Mails über das Importtool importieren. Dieser Prozess erstellt eine neue System‑E‑Mail mit dem Inhalt und der Konfiguration der neuen E‑Mail-Vorlage, sodass der Super‑Admin beliebige Änderungen vornehmen oder sie unverändert lassen kann.

#### Wie man System‑E-Mails importiert

Gehen Sie zur Seite Einstellungen von Ultimate Multisite und öffnen Sie die Registerkarte **Emails**.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

Klicken Sie anschließend in der Seitenleiste auf die Schaltfläche **Customize System Emails**.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

Auf der Seite System‑E‑Mails sehen Sie oben die Schaltfläche **Reset & Import**. Durch Klicken auf diese Schaltfläche sollte das Modal-Fenster für Import und Zurücksetzen geöffnet werden.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

Anschließend können Sie die Option Import Emails umschalten, um zu sehen, welche System‑E‑Mails importiert werden können.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### Zurücksetzen von System‑E‑Mails

Manchmal stellen Sie fest, dass die Änderungen, die Sie an einer bestimmten E‑Mail-Vorlage vorgenommen haben, nicht mehr funktionieren und Sie sie in ihren **Standardzustand** zurücksetzen möchten.

In solchen Fällen haben Sie zwei Optionen: Sie können die System‑E‑Mail einfach löschen und wieder importieren (unter Verwendung der obigen Anweisungen) – was Sendungsmetriken und andere Daten löscht, wodurch diese Methode am wenigsten bevorzugt ist.

Oder Sie können das **Reset & Import**-Tool verwenden, um diese E‑Mail-Vorlage zurückzusetzen.

Um eine E‑Mail-Vorlage zurückzusetzen, können Sie die oben beschriebenen Schritte bis zum Reset & Import‑Tool befolgen, anschließend die Option **Reset** umschalten und die E‑Mails auswählen, die Sie auf ihren Standardinhalt zurücksetzen möchten.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
