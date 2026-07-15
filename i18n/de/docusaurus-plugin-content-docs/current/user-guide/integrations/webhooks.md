---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Ein erster Blick auf Webhooks (v2)

_**ACHTUNG: Beachte, dass diese Funktion oder dieser Artikel für fortgeschrittene Benutzer gedacht ist.**_

Ein **webhook** ist eine Möglichkeit für eine App oder Software wie Ultimate Multisite, anderen Anwendungen Echtzeitinformationen bereitzustellen. Ein webhook liefert Daten oder Payloads an andere Anwendungen, sobald etwas passiert, was bedeutet, dass du **Daten sofort erhältst.**

Das ist hilfreich, wenn du bestimmte Daten von Ultimate Multisite an ein anderes CRM oder System integrieren oder weitergeben musst, jedes Mal, wenn ein Ereignis ausgelöst wird. Zum Beispiel musst du den Namen und die E-Mail-Adresse des Benutzers an eine Mailingliste senden, jedes Mal, wenn ein neues Benutzerkonto erstellt wird.

## So erstellst du einen webhook {#how-to-create-a-webhook}

Um einen webhook zu erstellen, gehe zu deinem Netzwerk-Admin-Dashboard. Klicke auf **Ultimate Multisite > Webhooks > Add New Webhook.**

![Leere Webhooks-Listenseite mit Add New Webhook-Button](/img/admin/webhooks-list-empty.png)

Du kannst anschließend die webhook-Konfiguration bearbeiten:

![Add New Webhook-Formular mit Feldern für Name, Event und URL](/img/admin/webhook-add-modal.png)

Beim Erstellen eines neuen webhooks wirst du nach Informationen wie **Name, URL,** und **Event** gefragt. Du kannst für deinen webhook jeden beliebigen Namen verwenden. Die wichtigsten Felder sind die URL und Event.

![Webhook-Bearbeitungsoberfläche mit URL-Feld und Payload-Vorschau](/img/admin/webhook-url-field.png)

URL ist der **endpoint oder das Ziel**, an das Ultimate Multisite die **Payload oder Daten** sendet. Dies ist die Anwendung, die die Daten empfängt.

Zapier ist die häufigste Lösung, die Benutzer verwenden, um die Integration mit Anwendungen von Drittanbietern zu erleichtern. Ohne eine Plattform wie Zapier musst du manuell eine benutzerdefinierte Funktion erstellen, die die Daten abfängt und verarbeitet. Siehe diesen Artikel dazu, **wie du Ultimate Multisite webhook mit Zapier verwendest.**

In diesem Artikel betrachten wir das Grundkonzept, wie ein webhook funktioniert, und die in Ultimate Multisite verfügbaren Ereignisse. Wir verwenden eine Website eines Drittanbieters namens [requestbin.com](https://requestbin.com/). Diese Website ermöglicht es uns, einen endpoint zu erstellen und die Payload abzufangen, ohne Code zu schreiben. _**Haftungsausschluss: Alles, was sie tun wird, ist uns zu zeigen, dass die Daten empfangen wurden.**_ Es erfolgt keine Verarbeitung oder irgendeine Art von Aktion an der Payload.

Gehe zu [requestbin.com](https://requestbin.com/) und klicke auf Create Request Bin.

Nachdem du auf diesen Button geklickt hast, wirst du aufgefordert, dich anzumelden, wenn du bereits ein Konto hast, oder dich zu registrieren. Wenn du bereits ein Konto hast, wirst du direkt zu ihrem Dashboard weitergeleitet. In ihrem Dashboard siehst du sofort den endpoint oder die URL, die du beim Erstellen deines Ultimate Multisite webhooks verwenden kannst.

Kopiere die URL und gehe zurück zu Ultimate Multisite. Füge den endpoint in das URL-Feld ein und wähle ein Ereignis aus dem Dropdown aus. In diesem Beispiel wählen wir **Payment Received**.

Dieses Ereignis wird ausgelöst, wann immer ein Benutzer eine Zahlung vornimmt. Alle verfügbaren Ereignisse, ihre Beschreibung und Payloads sind am Ende der Seite aufgeführt. Klicke auf den **Add New Webhook**-Button, um den webhook zu speichern.

![Webhook-Event-Dropdown mit ausgewähltem Payment Received](/img/admin/webhook-event-picker.png)

Wir können nun ein Testereignis an den endpoint senden, um zu sehen, ob der von uns erstellte webhook funktioniert. Das können wir tun, indem wir unter dem von uns erstellten webhook auf **Send Test Event** klicken.

![Webhooks-Liste mit einem konfigurierten webhook und Send Test-Aktion](/img/admin/webhooks-list-populated.png)

Dies zeigt ein Bestätigungsfenster an, das besagt, dass der Test erfolgreich war.

![Webhook-Testereignis-Ergebnis nach dem Senden einer Test-Payload](/img/admin/webhook-test-result.png)

Wenn wir jetzt zur _Requestbin_-Website zurückgehen, sehen wir, dass die Payload mit einigen Testdaten empfangen wurde.

Dies ist das Grundprinzip, wie webhook und endpoints funktionieren. Wenn du einen benutzerdefinierten endpoint erstellst, musst du eine benutzerdefinierte Funktion erstellen, um die Daten zu verarbeiten, die du von Ultimate Multisite erhältst.
