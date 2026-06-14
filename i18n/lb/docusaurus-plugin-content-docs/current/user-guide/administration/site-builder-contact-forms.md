---
title: Kontaktformular für den Website-Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Kontaktformular vom Seitengenerator

Superdav AI Agent v1.10.0 füegt d'Möglichkeit hinzu, Kontaktformular direkt us de Chat-Oberflächi mit em Site Builder agent z'erstelle. Das erlaubt Ihne, voll funktionsfähigi Kontaktformular uf jede Siite z'füege, ohni de Chat z'verlah.

## Überblick

D'Möglichkeit zum Kontaktformular vom Site Builder (`create_contact_form`) erkennt automatisch Ihr installiertes Formular-Plugin und erstellt es Kontaktformular mit de native Fähigkeite vo däm Plugin. Unterstützig wird folgende Formular-Plugins:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

De Assistent wählt automatisch s'beschti verfügbari Formular-Plugin uf Ihrer Site us und generiert es Kontaktformular, wo genau uf das Plugin zugeschnitte isch.

## Ein Kontaktformular erstellen

Um mit em Site Builder es Kontaktformular z'erstelle:

1. Öffne d'Chatpanel vom **Gratis AI Agent** im WordPress-Admin.
2. Wechseln Sie zum **Site Builder** agent, indem Sie uf s'Agent-Icon im Chat-Header klicke.
3. Beschribed das Kontaktformular, wo Sie wend erstelle. Zum Bischpil:

   > "Füeg es Kontaktformular zur Kontaktseite mit Feldern für Name, E-Mail, Nachricht und Telefonnummer hinzu."

   Oder eifach:

   > "Erstelle es Kontaktformular für d'Kontaktseite."

4. De Site Builder generiert s'Kontaktformular und git en Shortcode zrugg, wo parat isch zum iibedate.

## Verwendung vom generierte Shortcode

Nachdem de Site Builder s'Kontaktformular erstellt het, git er en Shortcode zrugg (zum Bischpil `[contact-form-7 id="123"]`). Sie chönd:

1. **Iibedate in e Siite oder Post** — Kopiere de Shortcode und füege ihn i jede Siite oder Post mit em Block Editor oder klassische Editor ii.
2. **Über de Site Builder hinzufüge** — Bieted de Site Builder a, s'Formular automatisch zu ere spezifische Siite z'füege:

   > "Füeg s'Kontaktformular zur Kontaktseite hinzu."

3. **Bruche de Template nutze Dir** — Wenn Dir PHP vertraut isch, chönnt Dir d'Shortcode i e Theme-Template-Datei füege.

## Kontaktformular personalisiere

Nachdem de Site Builder s'Kontaktformular erstellt het, chönd Dir es wiiter personalisiere:

### Über d'Chat-Schnittstell

Frage de Site Builder, s'Formular z'ändere:

> "Aktualisier s'Kontaktformular, um e Betrefffeld hinzuzfüege und s'Nachrichtfeld als obligatorisch z'mache."

De Site Builder wird s'Formular aktualisiere und de aktualisierti shortcode zrugggäh.

### Über d'Admin-Schnittstell vom Formular-Plugin

Dir chönd s'Formular au direkt i de Iistellige vo Dim Formular-Plugin personalisiere:

1. Gang zu **Contact Form 7** (oder Dim installiertes Formular-Plugin) im WordPress Admin.
2. Find s'vom Site Builder erstellti Formular.
3. Ändere d'Formularfelder, d'Validierigsregle und d'E-Mail-Benachrichtigunge, wie nötig.

## Formular-Plugins und Kompatibilität

De Site Builder erkennt automatisch, welch Formular-Plugin uf Dim Site installiert isch, und brucht das, um s'Kontaktformular z'erstelle. Wenn mehri Formular-Plugins installiert sind, priorisiert de Site Builder sie in dere Reihenfolg:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Wenn keini vo dene Plugins installiert sind, wird de Site Builder empfäle, eine z'installiere, bevor er s'Kontaktformular erstellt.

## E-Mail-Benachrichtigunge

Kontaktformular, wo vom Site Builder erstellt worde sind, sind standardmässig so konfiguriert, dass sie E-Mail-Benachrichtigunge an de Site-Administrator schicked. Dir chönd d'Empfänger-E-Mail-Adrässe und d'Benachrichtigungsnachricht personalisiere:

1. Gang zu de Admin-Schnittstell vo Dim Formular-Plugin.
2. Find s'vom Site Builder erstellti Formular.
3. Ändere d'E-Mail-Benachrichtigigs-Iistellige.

Für detaillierti Ahleitige, lueg bitte d'Dokumentation vo Dim Formular-Plugin a:

- [E-Mail Notifikationen für Contact Form 7](https://contactform7.com/docs/)
- [E-Mail Notifikationen für WPForms](https://wpforms.com/docs/)
- [E-Mail Notifikationen für Fluent Forms](https://fluentforms.com/docs/)
- [E-Mail Notifikationen für Gravity Forms](https://docs.gravityforms.com/)

## Beispiel-Anwendungsfälle

### Einfaches Kontaktformular

> "Erstelle es eifachs Kontaktformular mit Feldern für Name, E-Mail und Nachricht."

### Mehrstufiges Formular

> "Erstelle ein Kontaktformular mit einem ersten Schritt für Kontaktdaten und einem zweiten Schritt für die Nachricht sowie die bevorzugte Kontaktmethode."

### Form mit bedingter Logik

> "Erstelle ein Kontaktformular, das verschiedene Felder basierend auf der Auswahl des Benutzers in einem Dropdown anzeigt."

### Form mit Dateiupload

> "Erstelle ein Kontaktformular, das es Benutzern ermöglicht, eine Datei oder einen Anhang hochzuladen."

:::note
Die Erstellung von Kontaktformularen ist ab Superdav AI Agent v1.10.0 möglich. Der Site Builder Agent muss aktiviert sein, um diese Funktion nutzen zu können.
:::
