---
title: API-Endpunkt registrieren
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# Der Ultimate Multisite Register API-Endpunkt

In diesem Tutorial lernen Sie, wie Sie den Ultimate Multisite /register API-Endpunkt nutzen, um den gesamten Onboarding-Prozess für einen neuen Kunden in Ihrem Netzwerk zu erstellen und wie Sie dies mit Zapier durchführen.

Der Endpunkt verwendet die POST-Methode und wird über die URL _**https://yoursite.com/wp-json/wu/v2/register**_ aufgerufen. In diesem Aufruf werden vier Prozesse innerhalb Ihres Netzwerks ausgeführt:

* Ein neuer WordPress-Benutzer oder seine Identifikation über die Benutzer-ID wird erstellt.
* Ein neuer Kunde in Ultimate Multisite oder seine Identifikation über die Kunden-ID wird erstellt.
* Eine neue Seite im WordPress-Netzwerk wird erstellt.
* Abschließend wird eine neue Mitgliedschaft in Ultimate Multisite erstellt.

Für diesen Prozess benötigen Sie Ihre API-Anmeldeinformationen. Um diese zu erhalten, gehen Sie zum Admin-Panel Ihres Netzwerks, navigieren Sie zu **Ultimate Multisite > Settings** > **API & Webhooks**, und suchen Sie den Abschnitt API Settings.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzcShcSVgI.png)

Wählen Sie **Enable API** und erhalten Sie Ihre API-Anmeldeinformationen.

Nun erkunden wir den Endpunkt und erstellen anschließend eine Registrierungsaktion in Zapier.

## Parameter des Endpunkt-Body

Hier erhalten Sie einen Überblick über die minimalen Informationen, die wir an den Endpunkt senden müssen. Am Ende dieses Artikels finden Sie den vollständigen Aufruf.

### Kunde

Dies sind die Informationen, die für den Prozess der Erstellung des Benutzers und des Ultimate Multisite-Kunden erforderlich sind:

```
"customer_id" : integer

It is possible to send the customer ID created in your network. If not submitted, the information below will be used to create a new customer and a new WordPress user. The user ID can also be sent in the same manner as the customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },
```

### **Mitgliedschaft**

Die einzige Information, die wir in diesem Objekt benötigen, ist der Mitgliedschaftsstatus.

```
"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },
```

### **Produkte**

Produkte werden als Array mit 1 oder mehr Produkt-IDs aus Ihrem Netzwerk übergeben. Beachten Sie, dass dieser Endpunkt keine Produkte erstellt. Prüfen Sie die Dokumentation von Ultimate Multisite, um den Produkt-Erstellung-Endpunkt besser zu verstehen.

**"products" : [1,2],**

### Zahlung

Wie bei der Mitgliedschaft benötigen wir nur den Status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Website

Um den Body abzuschließen, benötigen wir die URL und den Titel der Website, beide im Site-Objekt.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Die Rückgabe des Register-Endpunkts ist ein Array mit den neu erstellten Mitgliedschaftsinformationen.

## Eine Aktion in Zapier erstellen

Mit der Einführung dieses neuen und robusteren Kontenerstellungs-Endpunkts erhalten Sie außerdem Zugriff auf eine neue Aktion in Zapier.

Wissen Sie, wie Sie alles nutzen und genießen können, was die neue Version von Zapier bietet? Erfahren Sie mehr hier. (link?)

### Eine Aktion erstellen

Um besser zu veranschaulichen, wie man den Registrierungs-Endpunkt mit Zapier nutzt, erstellen wir eine Integration mit Google Forms. Jedes Mal, wenn dieses Formular ausgefüllt und die Informationen im Antwortblatt des Formulars gespeichert werden, wird eine neue Mitgliedschaft im Ultimate Multisite-Netzwerk erstellt.

Erstellen Sie in Google Forms ein Formular mit den minimalen Feldern, die erforderlich sind, um eine neue Mitgliedschaft im Netzwerk zu erstellen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xaVRQkloWg.png)

Erstellen Sie nun in Zapier einen neuen Zap und verbinden Sie das erstellte Formular in Google über das Spreadsheet, in dem die Daten gespeichert sind.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-67iVl1XK46.png)

Fertig! Das Google Forms-Formular ist mit Zapier verbunden und bereit für die Integration mit dem Netzwerk. Nun gehen wir zur Aktion, die sich aus dem Trigger ergibt, den Google Forms jedes Mal auslöst, wenn es ausgefüllt wird.

Suchen Sie die neue Ultimate Multisite-App und wählen Sie sie aus. Für diesen Zap wählen Sie die Register-Option.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hq2yHGYR31.png)

Nach diesem ersten Schritt wählen Sie das Konto aus, das mit diesem Zap verbunden wird.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BuyTLt0JUM.png)

Dies ist der sensibelste Teil des gesamten Prozesses. Wir müssen die Felder, die von Google Forms stammen, mit den minimalen Feldern abgleichen, die für den Registrierungs-Endpunkt erforderlich sind, wie im vorherigen Abschnitt dieses Artikels gezeigt.

In diesem Beispiel müssen wir nur den Benutzernamen, die E-Mail, das Passwort, den Namen und die URL der Website konfigurieren. Der Rest bleibt vorbestimmt, damit alle von diesem Google Forms generierten Mitgliedschaften das gleiche Produkt- und Statusmuster haben.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4pjTVOmauz.png)

Mit den eingestellten Informationen fahren Sie mit dem letzten Test fort. Auf dem letzten Bildschirm sehen Sie alle Felder, die an den Endpunkt gesendet werden, ihre jeweiligen Informationen und die Felder, die leer gesendet werden.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fD2A9dYbDs.png)

Testen Sie Ihren neuen Zap und er sollte erfolgreich abgeschlossen werden. Wenn ein Fehler auftritt, überprüfen Sie alle Felder und ob sie korrekt gesendet werden. Da es viele Informationen gibt, können einige Dinge übersehen werden.

### Vollständige Endpunkt-Parameter

Hier ist der vollständige Aufruf und alle Möglichkeiten von Feldern, die gesendet werden können.

```
"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
```
