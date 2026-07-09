---
title: Zapier-Integration
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integration von Ultimate Multisite mit Zapier

In einem der Artikel haben wir [Webhooks](webhooks.md) besprochen und wie sie zur Integration mit Anwendungen von Drittanbietern verwendet werden können.

Die Verwendung von Webhooks ist etwas kompliziert, da sie fortgeschrittene Kenntnisse im Programmieren und beim Abfangen von Payloads erfordert. Die Verwendung von **Zapier** ist eine Möglichkeit, das zu umgehen.

Zapier bietet Integrationen mit über 5000+ Apps, was die Kommunikation zwischen verschiedenen Anwendungen erleichtert.

Du kannst **Trigger** erstellen, die ausgelöst werden, wenn Ereignisse in deinem Netzwerk auftreten (z. B. wenn ein Account erstellt wird und das `account_create`-Ereignis auslöst), oder **Actions** in deinem Netzwerk erzeugen, die auf externe Ereignisse reagieren (z. B. eine neue Account-Mitgliedschaft in deinem Ultimate Multisite-Netzwerk erstellen).

Dies ist möglich, weil **Ultimate Multisite Zapier's triggers** und Actions von der [REST API](https://developer.ultimatemultisite.com/api/docs/) unterstützt werden.

## So beginnst du

Suche zuerst in der Zapier-App-Liste nach Ultimate Multisite. Alternativ kannst du auf [diesen Link](https://zapier.com/apps/wp-ultimo/integrations) klicken.

Gehe zu deinem Dashboard und drücke die Schaltfläche **+** **Create Zap** in der linken Seitenleiste, um einen neuen Zap einzurichten.

![Zapier-Dashboard mit Create Zap-Schaltfläche](/img/admin/webhooks-list.png)

Du wirst zur Seite zur Zap-Erstellung weitergeleitet.

Gib im Suchfeld „wp ultimo“ ein. Klicke, um die Option der **Beta**-Version auszuwählen.

![Suche nach WP Ultimo in der Zapier-App-Liste](/img/admin/webhooks-list.png)

Nachdem du unsere App ausgewählt hast, wähle das verfügbare Ereignis: **New Ultimate Multisite Event**.

![Auswahl des New Ultimate Multisite Event-Triggers](/img/admin/webhooks-list.png)

Jetzt müssen wir Zapier Zugriff auf **dein Netzwerk** geben. Ein Klick auf **Sign in** öffnet ein neues Fenster, das die **API-Zugangsdaten** erfordert.

![Zapier-Sign-in-Aufforderung für API-Zugangsdaten](/img/admin/webhooks-list.png)

Gehe zum Admin-Panel deines Netzwerks und navigiere zu **Ultimate Multisite > Settings** > **API & Webhooks** und suche den Abschnitt API Settings.

Wähle die Option **Enable API**, da sie erforderlich ist, damit diese Verbindung funktioniert.

![API- und Webhooks-Einstellungen mit API Settings- und Enable API-Optionen](/img/admin/settings-api-webhooks.png)

Verwende das Symbol **Copy to Clipboard** in den Feldern API Key und API Secret und füge diese Werte auf dem Integrationsbildschirm ein.

Gib im URL-Feld die vollständige URL deines Netzwerks ein, einschließlich des Protokolls (HTTP oder HTTPS).

![Zapier-Integrationsbildschirm mit API Key-, Secret- und URL-Feldern](/img/admin/webhooks-list.png)

Klicke auf die Schaltfläche **Yes, Continue**, um mit dem nächsten Schritt fortzufahren. Wenn alles funktioniert, solltest du von deinem neu verbundenen Account begrüßt werden! Klicke auf **Continue**, um einen neuen Trigger zu erstellen.

## So erstellst du einen neuen Trigger

Jetzt, da dein Account verbunden ist, kannst du verfügbare Ereignisse sehen. Wählen wir für dieses Tutorial das Ereignis **payment_received**.

![Auswahl des payment_received-Ereignisses im Zapier-Trigger](/img/admin/webhooks-list.png)

Sobald das Ereignis ausgewählt wurde und du auf **continue** klickst, erscheint ein **Testschritt**.

![Zapier-Testschritt für den Trigger](/img/admin/webhooks-list.png)

In dieser Phase testet Zapier, ob dein Zap **den spezifischen Payload für dieses Ereignis abrufen** kann. Bei zukünftigen Ereignissen desselben Typs werden Informationen mit derselben Struktur gesendet.

![Zapier-Trigger-Test erfolgreich mit Payload abgeschlossen](/img/admin/webhooks-list.png)

In unserem Tutorial wurde der Test **erfolgreich abgeschlossen** und gab Beispielinformationen zum Payload zurück. Diese Beispielinformationen sind hilfreich, um uns beim Erstellen von Actions zu leiten. Dein Trigger ist nun erstellt und bereit, mit anderen Anwendungen verbunden zu werden.

## So erstellst du Actions

Actions verwenden Informationen aus anderen Triggern, um neue Einträge in deinem Netzwerk zu erstellen.

Im **Schritt zum Erstellen einer Action** wählst du Ultimate Multisite **Beta** und die Option **Create Items on Ultimate Multisite**.

![Erstellen einer Action mit Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Im nächsten Schritt erstellst du entweder deine Authentifizierung, genau wie wir es in **So beginnst du** getan haben, oder wählst eine erstellte Authentifizierung aus. In diesem Tutorial wählen wir dieselbe zuvor erstellte Authentifizierung aus.

![Auswahl der Authentifizierung für die Zapier-Action](/img/admin/webhooks-list.png)

### Einrichten der Action

Dies ist der **Hauptschritt der Action** und hier sind die Dinge etwas anders. Die erste Information, die du auswählst, ist das **Item**. Item ist das **Informationsmodell** deines Netzwerks, wie **Customers, Payments, Sites, Emails** und andere.

![Auswahl des Item-Typs für die Zapier-Action](/img/admin/webhooks-list.png)

Beim Auswählen eines Items wird das Formular **neu angeordnet, um die erforderlichen und optionalen Felder** für das ausgewählte Item anzuzeigen.

Wenn du zum Beispiel das Item **Customer** auswählst, enthalten die Formularfelder alles, was ausgefüllt werden muss, um einen neuen Customer im Netzwerk zu erstellen.

![Customer-Item-Felder in der Einrichtung der Zapier-Action](/img/admin/webhooks-list.png)

Nachdem du alle als **erforderlich** markierten Felder ausgefüllt und auf Continue geklickt hast, zeigt dir ein letzter Bildschirm die ausgefüllten Felder und die Felder, die leer gelassen wurden.

![Zapier-Action-Test mit ausgefüllten und nicht ausgefüllten Feldern](/img/admin/webhooks-list.png)

Sobald dein Test abgeschlossen und erfolgreich ist, ist deine Action konfiguriert. Es ist außerdem wichtig, in deinem Netzwerk zu prüfen, ob das Item mit dem Test deiner Action erstellt wurde.
