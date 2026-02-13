---
title: Webhooks
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Ein erster Blick auf Webhooks (v2)

_**ACHTUNG: Beachten Sie, dass diese Funktion oder dieser Artikel für fortgeschrittene Benutzer gedacht ist.**_

Ein **Webhook** ist eine Möglichkeit für eine App oder Software wie Ultimate Multisite, anderen Anwendungen Echtzeitinformationen bereitzustellen. Ein Webhook liefert Daten oder Payloads an andere Anwendungen, sobald sie auftreten, was bedeutet, dass Sie **die Daten sofort erhalten.**

Dies ist hilfreich, wenn Sie bestimmte Daten von Ultimate Multisite an ein anderes CRM oder System übergeben oder integrieren müssen, jedes Mal wenn ein Ereignis ausgelöst wird. Zum Beispiel müssen Sie den Namen und die E‑Mail-Adresse des Benutzers jedes Mal an eine Mailingliste senden, wenn ein neues Benutzerkonto erstellt wird.

## Wie man einen Webhook erstellt

Um einen Webhook zu erstellen, gehen Sie zu Ihrem Netzwerk-Admin-Dashboard. Klicken Sie auf **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Beim Erstellen eines neuen Webhooks werden Sie nach Informationen wie **Name, URL** und **Event** gefragt. Sie können jeden gewünschten Namen für Ihren Webhook verwenden. Die wichtigsten Felder sind die URL und das Event.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL ist der **Endpunkt oder das Ziel**, an das Ultimate Multisite die **Payload oder Daten** senden wird. Dies ist die Anwendung, die die Daten empfängt.

Zapier ist die häufigste Lösung, die Benutzer verwenden, um die Integration mit Drittanbieteranwendungen zu erleichtern. Ohne eine Plattform wie Zapier müssen Sie eine benutzerdefinierte Funktion manuell erstellen, die die Daten erfasst und verarbeitet. Lesen Sie diesen Artikel zu **wie man Ultimate Multisite Webhook mit Zapier verwendet.**

In diesem Artikel werden wir das grundlegende Konzept betrachten, wie ein Webhook funktioniert und welche Ereignisse in Ultimate Multisite verfügbar sind. Wir werden eine Drittanbieter-Website namens [requestbin.com](https://requestbin.com/) verwenden. Diese Website ermöglicht es uns, einen Endpunkt zu erstellen und die Payload zu erfassen, ohne Code zu schreiben. _**Haftungsausschluss: Alles, was es tun wird, ist uns zeigen, dass die Daten empfangen wurden.**_ Es wird keine Verarbeitung oder irgendeine Art von Aktion an der Payload durchgeführt.

Gehen Sie zu [requestbin.com](https://requestbin.com/) und klicken Sie auf Create Request Bin.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Nach dem Klicken auf diese Schaltfläche werden Sie aufgefordert, sich anzumelden, wenn Sie bereits ein Konto haben, oder sich anzumelden. Wenn Sie bereits ein Konto haben, führt es Sie direkt zu ihrem Dashboard. Auf ihrem Dashboard sehen Sie sofort den Endpunkt oder die URL, die Sie beim Erstellen Ihres Ultimate Multisite Webhooks verwenden können.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

Kopieren Sie die URL und gehen Sie zurück zu Ultimate Multisite. Platzieren Sie den Endpunkt im URL-Feld und wählen Sie ein Ereignis aus dem Dropdown aus. In diesem Beispiel wählen wir **Payment Received**.

Dieses Ereignis wird ausgelöst, wann immer ein Benutzer eine Zahlung tätigt. Alle verfügbaren Ereignisse, ihre Beschreibungen und Payloads sind am Ende der Seite aufgeführt. Klicken Sie auf die Schaltfläche **Add New Webhook**, um den Webhook zu speichern.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Wir können jetzt ein Testereignis an den Endpunkt senden, um zu sehen, ob der von uns erstellte Webhook funktioniert. Dazu klicken Sie auf **Send Test Event** unter dem von uns erstellten Webhook.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Dies zeigt ein Bestätigungsfenster, das besagt, dass der Test erfolgreich war.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Wenn wir jetzt zur _Requestbin_-Website zurückkehren, sehen wir, dass die Payload mit einigen Testdaten empfangen wurde.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Dies ist das grundlegende Prinzip, wie Webhooks und Endpunkte funktionieren. Wenn Sie einen benutzerdefinierten Endpunkt erstellen möchten, müssen Sie eine benutzerdefinierte Funktion erstellen, um die Daten zu verarbeiten, die Sie von Ultimate Multisite erhalten.
