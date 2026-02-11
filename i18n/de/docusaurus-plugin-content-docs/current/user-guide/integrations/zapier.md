---
title: Zapier-Integration
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Integration von Ultimate Multisite mit Zapier

In einem der Artikel haben wir über [Webhooks](webhooks.md) gesprochen und wie sie zur Integration mit Drittanbieter-Anwendungen verwendet werden können.  
Webhooks zu nutzen ist etwas kompliziert, da sie fortgeschrittenes Wissen in der Programmierung und im Umgang mit Payloads erfordern. Mit **Zapier** haben Sie eine Möglichkeit, dieses Problem zu umgehen.  
Zapier integriert sich mit über 5000 Apps, was die Kommunikation zwischen verschiedenen Anwendungen erleichtert.  
Sie können **Triggers** erstellen, die ausgelöst werden, wenn Ereignisse in Ihrem Netzwerk auftreten (z. B. wird ein Konto erstellt und löst das Ereignis account_create aus) oder **Actions** in Ihrem Netzwerk generieren, die auf externe Ereignisse reagieren (z. B. ein neues Kontomember in Ihrem Ultimate Multisite Netzwerk erstellen).  
Dies ist möglich, weil die **Ultimate Multisite Zapier's triggers** und Aktionen von der [REST API](https://developer.ultimatemultisite.com/api/docs/) angetrieben werden.

## Wie man startet

Zuerst suchen Sie nach Ultimate Multisite in der Zapier-App-Liste. Alternativ können Sie [diesen Link](https://zapier.com/apps/wp-ultimo/integrations) anklicken.  
Gehen Sie zu Ihrem Dashboard und drücken Sie die **+** **Create Zap**-Schaltfläche in der linken Seitenleiste, um einen neuen Zap einzurichten.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kyu5ufUXOv.png)

Sie werden zur Zap-Erstellungsseite weitergeleitet.  

In dem Suchfeld geben Sie „wp ultimo“ ein. Klicken Sie, um die **Beta**-Version auszuwählen.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BrOYbp7dSE.png)

Nach Auswahl unserer App wählen Sie das verfügbare Ereignis: **New Ultimate Multisite Event**.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-srblXqJnQE.png)

Nun müssen wir Zapier Zugriff auf **Ihr Netzwerk** gewähren. Durch Klicken auf **Sign in** öffnet sich ein neues Fenster, das die **API-Anmeldeinformationen** erfordert.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HcULsQoFpZ.png)

Gehen Sie zum Admin-Panel Ihres Netzwerks und navigieren Sie zu **Ultimate Multisite > Settings** > **API & Webhooks** und suchen Sie den Abschnitt API Settings.  

Wählen Sie die Option **Enable API**, da sie für diese Verbindung erforderlich ist.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-l7KbeKUkPX.png)

Verwenden Sie das Symbol **Copy to Clipboard** in den Feldern API Key und API Secret und fügen Sie diese Werte auf dem Integrationsbildschirm ein.  

Geben Sie im URL-Feld die vollständige URL Ihres Netzwerks ein, einschließlich des Protokolls (HTTP oder HTTPS).  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4UVPQAlzYk.png)

Klicken Sie auf die Schaltfläche **Yes, Continue**, um zum nächsten Schritt zu gelangen. Wenn alles funktioniert, werden Sie von Ihrem neuen verbundenen Konto begrüßt! Klicken Sie auf **Continue**, um einen neuen Trigger zu erstellen.

## Wie man einen neuen Trigger erstellt

Jetzt, da Ihr Konto verbunden ist, können Sie verfügbare Ereignisse sehen. Wählen wir das Ereignis **payment_received** für dieses Tutorial aus.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZE7WgSGw8.png)

Sobald das Ereignis ausgewählt wurde und Sie auf **continue** klicken, erscheint ein **Testschritt**.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-SWo5wbMkgZ.png)

In dieser Phase testet Zapier, ob Ihr Zap die **spezifische Payload für dieses Ereignis** abrufen kann. In zukünftigen Ereignissen desselben Typs wird Informationen mit derselben Struktur gesendet.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-CVCJxhN3ai.png)

In unserem Tutorial wurde der Test **erfolgreich abgeschlossen** und die Beispiel-Payload zurückgegeben. Diese Beispielinformationen sind hilfreich, um uns beim Erstellen von Aktionen zu leiten. Ihr Trigger ist jetzt erstellt und bereit, mit anderen Anwendungen verbunden zu werden.

## Wie man Aktionen erstellt

Aktionen nutzen Informationen aus anderen Triggern, um neue Einträge in Ihrem Netzwerk zu erstellen.  
Im **creating an action step** wählen Sie Ultimate Multisite **Beta** und die Option **Create Items on Ultimate Multisite**.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-swCbHP8jNG.png)

Im nächsten Schritt erstellen Sie entweder Ihre Authentifizierung, genau wie wir es in **How to start** gemacht haben, oder wählen eine erstellte Authentifizierung aus. In diesem Tutorial wählen wir dieselbe zuvor erstellte Authentifizierung.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iRSFnhpoHv.png)

### Einrichten der Aktion

Dies ist der **Hauptschritt der Aktion** und hier ist es etwas anders. Die erste Information, die Sie auswählen, ist das **Item**. Das Item ist das **Informationsmodell** Ihres Netzwerks, wie **Customers, Payments, Sites, Emails** und andere.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GC4iHxBn4e.png)

Wenn Sie ein Item auswählen, wird das Formular **umorganisiert**, um die erforderlichen und optionalen Felder für das ausgewählte Item anzuzeigen.  

Beispielsweise werden bei Auswahl des Items **Customer** die Formularfelder alles anzeigen, was erforderlich ist, um einen neuen Customer im Netzwerk zu erstellen.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4xpHH5xTaf.png)

Nach Ausfüllen aller als **required** markierten Felder und Klicken auf continue zeigt Ihnen ein letztes Bildschirm die ausgefüllten Felder und die nicht ausgefüllten Felder an.  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JLPq56npV6.png)

Sobald Ihr Test abgeschlossen und erfolgreich ist, ist Ihre Aktion konfiguriert. Es ist auch wichtig, in Ihrem Netzwerk zu überprüfen, ob das Item mit dem Test Ihrer Aktion erstellt wurde.
