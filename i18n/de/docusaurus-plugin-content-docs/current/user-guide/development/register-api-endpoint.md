---
title: API-Endpunkt registrieren
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Der Ultimate Multisite Register API-Endpunkt

In diesem Tutorial erfährst du, wie du den Ultimate Multisite /register API-Endpunkt verwendest, um den gesamten Onboarding-Prozess für einen neuen Kunden in deinem Netzwerk zu erstellen, und wie du das mit Zapier machst.

Der Endpunkt verwendet die POST-Methode und wird über die URL _**https://yoursite.com/wp-json/wu/v2/register**_ aufgerufen. Bei diesem Aufruf werden 4 Prozesse innerhalb deines Netzwerks ausgeführt:

  * Ein neuer WordPress-Benutzer oder dessen Identifizierung über die Benutzer-ID wird erstellt.

  * Ein neuer Kunde in Ultimate Multisite oder dessen Identifizierung über die Kunden-ID wird erstellt.

  * Eine neue Website im WordPress-Netzwerk wird erstellt.

  * Am Ende wird eine neue Mitgliedschaft in Ultimate Multisite erstellt.

Für diesen Prozess benötigst du deine API-Zugangsdaten. Um sie zu erhalten, gehe zu deinem Netzwerk-Admin-Panel, navigiere zu **Ultimate Multisite > Einstellungen** > **API & Webhooks,** und suche nach dem Abschnitt API-Einstellungen.

![Abschnitt API-Einstellungen in Ultimate Multisite](/img/config/settings-api.png)

Hier ist eine vollständige Ansicht der Seite mit den API-Einstellungen:

![Vollständige Seite der API-Einstellungen](/img/config/settings-api-full.png)

Wähle **API aktivieren** aus und hole dir deine API-Zugangsdaten.

Lass uns nun den Endpunkt erkunden und anschließend eine Registrierungsaktion in Zapier erstellen.

## Body-Parameter des Endpunkts {#endpoint-body-parameters}

Verschaffen wir uns einen Überblick über die Mindestinformationen, die wir an den Endpunkt senden müssen. Am Ende dieses Artikels findest du den vollständigen Aufruf.

### Kunde {#customer}

Dies sind die Informationen, die für den Prozess der Erstellung des Benutzers und des Ultimate Multisite-Kunden erforderlich sind:

"customer_id" : integer

Es ist möglich, die Kunden-ID zu senden, die in deinem Netzwerk erstellt wurde. Wenn sie nicht übermittelt wird, werden die folgenden Informationen verwendet, um einen neuen Kunden und einen neuen WordPress-Benutzer zu erstellen. Die Benutzer-ID kann ebenfalls auf die gleiche Weise wie die Kunden-ID gesendet werden.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Mitgliedschaft** {#membership}

Die einzige Information, die wir innerhalb dieses Objekts benötigen, ist der Mitgliedschaftsstatus.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkte** {#products}

Produkte erhalten ein Array mit 1 oder mehreren Produkt-IDs aus deinem Netzwerk. Beachte, dass dieser Endpunkt keine Produkte erstellt. Sieh in der Dokumentation von Ultimate Multisite nach, um den Endpunkt zur Produkterstellung besser zu verstehen.

**"products" : [1,2],**

### Zahlung {#payment}

Wie bei der Mitgliedschaft benötigen wir nur den Status.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Website {#site}

Und um den Body abzuschließen, benötigen wir die URL und den Titel der Website, beide innerhalb des Website-Objekts.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Die Rückgabe des Register-Endpunkts ist ein Array mit den neu erstellten Mitgliedschaftsinformationen.

## Eine Aktion in Zapier erstellen {#creating-an-action-in-zapier}

Mit der Einführung dieses neuen und robusteren Endpunkts zur Account-Erstellung erhältst du auch Zugriff auf eine neue Aktion in Zapier.

Weißt du, wie du alles nutzen und genießen kannst, was die neue Version von Zapier bietet? Erfahre hier mehr. (Link?)

### Eine Aktion erstellen {#creating-an-action}

Um besser zu veranschaulichen, wie der Registrierungsendpunkt mit Zapier verwendet wird, erstellen wir eine Integration mit Google Forms. Jedes Mal, wenn dieses Formular ausgefüllt wird und die Informationen im Antwortblatt des Formulars gespeichert werden, wird eine neue Mitgliedschaft im Ultimate Multisite-Netzwerk erstellt.

Erstelle in Google Forms ein Formular mit den Mindestfeldern, die erforderlich sind, um eine neue Mitgliedschaft im Netzwerk zu erstellen.

<!-- Screenshot nicht verfügbar: Google Forms-Formular mit Feldern zum Erstellen einer neuen Mitgliedschaft -->

Erstelle nun in Zapier einen neuen Zap und verbinde das erstellte Formular in Google über die Tabelle, in der die Daten gespeichert werden.

<!-- Screenshot nicht verfügbar: Zapier-Trigger-Konfiguration, die eine Verbindung zur Google Forms-Tabelle herstellt -->

Fertig! Das Google Forms-Formular ist mit Zapier verbunden und bereit, in das Netzwerk integriert zu werden. Gehen wir nun zur Aktion über, die aus dem Trigger resultiert, den Google Forms jedes Mal auslöst, wenn es ausgefüllt wird.

Suche die neue Ultimate Multisite-App und wähle sie aus. Wähle für diese Art von Zap die Option Registrieren.

<!-- Screenshot nicht verfügbar: Zapier-Aktionsauswahl mit Ultimate Multisite-App und Option Registrieren -->

Wähle nach diesem ersten Schritt den Account aus, der mit diesem Zap verbunden wird.<!-- Screenshot nicht verfügbar: Zapier-Schritt zur Account-Verbindung für Ultimate Multisite -->

Dies ist der sensibelste Teil des gesamten Prozesses. Wir müssen die Felder, die aus Google Forms stammen, den Mindestfeldern zuordnen, die für den Register-Endpunkt erforderlich sind, wie im vorherigen Abschnitt dieses Artikels gezeigt.

In diesem Beispiel müssen wir nur den Benutzernamen, die E-Mail-Adresse, das Passwort, den Namen und die URL der Website konfigurieren. Der Rest bleibt vordefiniert, sodass alle Mitgliedschaften, die über dieses Google Forms erstellt werden, demselben Produkt- und Statusmuster folgen.

<!-- Screenshot nicht verfügbar: Zapier-Feldzuordnung zwischen Google Forms und dem Ultimate Multisite Register-Endpunkt -->

Nachdem die Informationen eingerichtet sind, fahre mit dem abschließenden Test fort. Auf dem letzten Bildschirm siehst du alle Felder, die an den Endpunkt gesendet werden, ihre jeweiligen Informationen und die Felder, die leer gesendet werden.<!-- Screenshot nicht verfügbar: Zapier-Testbildschirm mit allen Feldern, die an den Register-Endpunkt gesendet werden -->

Teste deinen neuen Zap, und er sollte erfolgreich abgeschlossen werden. Wenn ein Fehler auftritt, überprüfe alle Felder und ob sie korrekt gesendet werden. Da es viele Informationen gibt, können einige Dinge unbemerkt bleiben.

### Vollständige Endpunktparameter {#complete-endpoint-parameters}

Hier ist der vollständige Aufruf und alle Möglichkeiten von Feldern, die gesendet werden können.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
