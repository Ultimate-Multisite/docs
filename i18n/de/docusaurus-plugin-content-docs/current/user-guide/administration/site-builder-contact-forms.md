---
title: Site Builder Kontaktformulare
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformulare mit dem Site Builder {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 fügt die Möglichkeit hinzu, Kontaktformulare direkt über die Chat-Oberfläche mithilfe des Site Builder Agents zu erstellen. Dadurch können Sie voll funktionsfähige Kontaktformulare auf jede Seite einbinden, ohne die Chat-Oberfläche verlassen zu müssen.

## Überblick {#overview}

Die Funktion für Kontaktformulare im Site Builder (`create_contact_form`) erkennt automatisch Ihr installiertes Formular-Plugin und erstellt ein Kontaktformular mithilfe der nativen Funktionen dieses Plugins. Unterstützte Formular-Plugins sind:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Der Assistent wählt automatisch das beste verfügbare Formular-Plugin auf Ihrer Website aus und generiert ein Kontaktformular, das auf dieses Plugin zugeschnitten ist.

## Erstellen eines Kontaktformulars {#creating-a-contact-form}

Um ein Kontaktformular mit dem Site Builder zu erstellen:

1. Öffnen Sie das Chat-Panel des **Gratis AI Agent** im WordPress-Admin.
2. Wechseln Sie zum **Site Builder** Agent, indem Sie auf das Agenten-Symbol in der Chat-Kopfzeile klicken.
3. Beschreiben Sie das Kontaktformular, das Sie erstellen möchten. Zum Beispiel:

   > "Füge auf der Kontaktseite ein Kontaktformular mit Feldern für Name, E-Mail, Nachricht und Telefonnummer hinzu."

   Oder einfach:

   > "Erstelle ein Kontaktformular für die Kontaktseite."

4. Der Site Builder generiert das Kontaktformular und gibt einen Shortcode zurück, der sofort eingebettet werden kann.

## Verwendung des generierten Shortcodes {#using-the-generated-shortcode}

Nachdem der Site Builder das Kontaktformular erstellt hat, gibt er einen Shortcode zurück (zum Beispiel `[contact-form-7 id="123"]`). Sie können:

1. **Es in einer Seite oder einem Beitrag einbetten** — Kopieren Sie den Shortcode und fügen Sie ihn in jede Seite oder jeden Beitrag mit dem Block- oder dem klassischen Editor ein.
2. **Es über den Site Builder hinzufügen** — Bitten Sie den Site Builder, das Formular automatisch auf eine bestimmte Seite hinzuzufügen:

   > "Füge das Kontaktformular auf die Kontaktseite hinzu."

3. **Es in einem Template verwenden** — Wenn Sie mit PHP vertraut sind, können Sie den Shortcode in eine Theme-Template-Datei einfügen.

## Anpassung des Kontaktformulars {#customizing-the-contact-form}

Nachdem der Site Builder das Kontaktformular erstellt hat, können Sie es weiter anpassen:

### Über die Chat-Oberfläche {#via-the-chat-interface}

Bitten Sie den Site Builder, das Formular zu ändern:

> "Aktualisiere das Kontaktformular, um ein Betreff-Feld hinzuzufügen und das Nachrichtenfeld zwingend zu machen."

Der Site Builder aktualisiert das Formular und gibt den aktualisierten Shortcode zurück.

### Über die Admin-Oberfläche des Formular-Plugins {#via-the-form-plugins-admin-interface}

Sie können das Formular auch direkt in den Einstellungen Ihres Formular-Plugins anpassen:

1. Gehen Sie im WordPress-Admin zu **Contact Form 7** (oder Ihrem installierten Formular-Plugin).
2. Suchen Sie das vom Site Builder erstellte Formular.
3. Bearbeiten Sie die Formularfelder, Validierungsregeln und E-Mail-Benachrichtigungen nach Bedarf.

## Formular-Plugins und Kompatibilität {#form-plugins-and-compatibility}

Der Site Builder erkennt automatisch, welches Formular-Plugin auf Ihrer Website installiert ist, und verwendet es, um das Kontaktformular zu erstellen. Wenn mehrere Formular-Plugins installiert sind, priorisiert der Site Builder diese in folgender Reihenfolge:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Wenn keines dieser Plugins installiert ist, empfiehlt der Site Builder, zuerst eines zu installieren, bevor das Kontaktformular erstellt wird.

## E-Mail-Benachrichtigungen {#email-notifications}

Kontaktformulare, die vom Site Builder erstellt werden, sind standardmäßig so konfiguriert, dass sie E-Mail-Benachrichtigungen an den Website-Administrator senden. Sie können die Empfänger-E-Mail-Adresse und die Benachrichtigungsnachricht anpassen:

1. Gehen Sie zur Admin-Oberfläche Ihres Formular-Plugins.
2. Suchen Sie das vom Site Builder erstellte Formular.
3. Bearbeiten Sie die Einstellungen für die E-Mail-Benachrichtigungen.

Weitere Anweisungen finden Sie in der Dokumentation Ihres Formular-Plugins:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Anwendungsbeispiele {#example-use-cases}

### Einfaches Kontaktformular {#simple-contact-form}

> "Erstelle ein einfaches Kontaktformular mit Feldern für Name, E-Mail und Nachricht."

### Formular mit mehreren Schritten {#multi-step-form}

> "Erstelle ein Kontaktformular mit einem ersten Schritt für die Kontaktdaten und einem zweiten Schritt für die Nachricht und die bevorzugte Kontaktmethode."

### Formular mit bedingter Logik {#form-with-conditional-logic}

> "Erstelle ein Kontaktformular, das basierend auf der Auswahl des Benutzers in einem Dropdown-Menü unterschiedliche Felder anzeigt."

### Formular mit Datei-Upload {#form-with-file-upload}

> "Erstelle ein Kontaktformular, das es Benutzern ermöglicht, eine Datei oder einen Anhang hochzuladen."

:::note
Die Erstellung von Kontaktformularen ist in Superdav AI Agent v1.10.0 und neuer verfügbar. Der Site Builder Agent muss aktiv sein, um diese Funktion zu nutzen.
:::
