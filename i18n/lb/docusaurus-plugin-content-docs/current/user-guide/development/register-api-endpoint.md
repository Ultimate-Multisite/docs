---
title: API-Endpunkt registriere
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# De API-Endpunkt vo de Ultimate Multisite Registrierig

In dë Tutorial lerne Dir, wéi Dir d'Ultimate Multisite /register API-Endpunkt bruche kënnt, um de ganz Onboarding-Prozess fir en neie Kunde i Ier Netz z'schaffe, und wéi Dir dat mit Zapier chunt.

De Endpunkt brucht d'POST-Methode und wird duer de URL _**https://yoursite.com/wp-json/wu/v2/register**_ ugeruf. Mit dësem Uruuf ginn 4 Prozess i Ier Netz usfüeiert:

  * En neie WordPress User oder sini Identifizierig duer de User ID wird erstellt.

  * En neie Customer in Ultimate Multisite oder sini Identifizierig duer de Customer ID wird erstellt.

  * E neie Site an der WordPress-Netzwerk wird erstellt.

  * Am End wird en neie Membership in Ultimate Multisite erstellt.

Fir dëse Prozess brucht Dir Ier API-Credentials. Um déi z'bekomme, gaet Dir zu Ierem Netz-Admin-Panel, navigéiert zu **Ultimate Multisite > Settings** > **API & Webhooks**, und lueft nach de API Settings Sektion.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Hier isch en ganz Ueberblick über d'API-Settings-Seite:

![API settings full page](/img/config/settings-api-full.png)

Wahl de **Enable API** und bechumm Ier API-Credentials.

Zou mir jetz de Endpunkt erkunden an d'Registration Action i Zapier.

## Endpoint Body Parameter

Léissen mir en Ueberblick über d'minimale Informatiounen, déi mir an de Endpunkt schicke mues. Am End vun dësem Artikel fänd Dir de ganz Uruuf.

### Customer

Dës sinn déi Informatiounen, déi notwendig sinn fir de Prozess vum User ze créeieren a de Ultimate Multisite Customer:

"customer_id" : integer

Es möglich, d'Kunde-ID z'Ihrer Netzwerch z'sende. Falls sie nöd übermittelt wird, wird die unteri Information brucht, um en neie Kunde und en neie WordPress-Benutzer z'erstelle. D'User-ID cha au uf di gliiche Art wie d'Kunde-ID gschickt werde.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Mitgliedschaft**

D'einzigi Information, wo mir i dem Objekt bruche mues, isch de Mitgliedschaftszustand.

"membership" { "status" : "string", // e vo "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkte**

Produkte überchömme en Array mit 1 oder meh Produkt-ID us Ihrem Netzwerk. Achtung, die Endpunkt erstellt kei Produkte. Lueg d'Dokumentation vo Ultimate Multisite für e besseri Verstandnis vom Produkt-Erstelligs-Endpunkt.

**"products" : [1,2],**

### Zahlig

Wie bi de Mitgliedschaft bruche mir nur de Status.

**"payment" { "status" : "string", // e vo "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Und zum s'Endi z'schlüsse bruche mir d'URL und de Titel vo de Site, beidi i dem Site-Objekt.

**"site" : { "site_url" : "string", "site_title" : "string" }**

D'Rückgab vom register Endpunkt wird en Array mit de neu erstellte Mitgliedschaftsinformatione si.

## E Aktion in Zapier erstelle

Mit de Iifüehrig vo däm nöie und robuster Account-Erstelligs-Endpunkt chönne Sie au e neui Aktion i Zapier nutze.

Weet Sie, wie Sie alles nutze und gnüsse, was d'neui Version vo Zapier aabietet? Erfahre meh do. (link?)

### E Aktion erstelle

Um besser z'zeige, wie mer de registration endpoint mit Zapier brucht, machemer e Integration mit Google Forms. Jedes Mal, wenn das Form usgfüllet wird und d'Informatione in de Antworttabelle vom Form gspeicheret wärde, wird en nöi Mitgliedschaft im Ultimate Multisite netzwerk erstellt.

In Google Forms mached mer es Form mit de mindescht nötige Felder, um en nöis Mitgliedschaft im netzwerk z'erstelle.

<!-- Screenshot unavailable: Google Forms form mit felder für d'Erstellig vo enere nöie Mitgliedschaft -->

Jetzt in Zapier mached mer en nöie Zap und verbindet s'Form über de Spreadsheet, wo d'Date gspeicheret wärde.

<!-- Screenshot unavailable: Zapier trigger konfiguriere verbindet mit Google Forms spreadsheet -->

Fertig! S'Google Forms Form isch mit Zapier verbunde und parat für d'Integration mit em netzwerk. Jetzt chömer zu de Aktion go, wo us em Trigger resultiert, wo Google Forms jedes Mal triggert wird, wenns gfüllet wird.

Findet d'neui Ultimate Multisite app und wählet sie us. Für so en Zap wählt mer d'Option Register.

<!-- Screenshot unavailable: Zapier action uswahl zeigt Ultimate Multisite app mit Register Option -->

Nach däm erste Schritt wählt mer s'Konto us, wo mit däm Zap verbunde wird.<!-- Screenshot unavailable: Zapier Konto-Verbindungs-Schritt für Ultimate Multisite -->

Das isch de heikelsti Teil vo de ganze Prozess. Mer müend d'Felder abgliche, wo vo Google Forms cho sind, mit de mindescht nötige Felder für de register endpoint, wie im vorhergehende Abschnitt vo däm Artikel zeigt.

In däm Bischpil bruched mer nur s'Username, d'E-Mail, s'Passwort, de Name und d'URL vo de Website z'konfiguriere. De Rest isch scho vorbestimmt, damit alli Mitgliedschaften, wo uf däm Google Forms generiert wärde, s'gliiche Produkt- und Statusmuster folge.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Wenn Sie die Informationen eingerichtet haben, fahren Sie mit dem letzten Test fort. Auf dem letzten Bildschirm sehen Sie alle Felder, die an den Endpoint gesendet werden, ihre jeweiligen Informationen und die Felder, die leer gesendet werden.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testen Sie Ihren neuen Zap, er sollte erfolgreich abgeschlossen werden. Sollte ein Fehler auftreten, überprüfen Sie alle Felder und ob sie korrekt gesendet werden. Da es viel Information gibt, können einige Dinge übersehen werden.

### Vollständige Endpoint Parameter

Hier ist der vollständige Aufruf und alle Möglichkeiten für die zu sendenden Felder.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // eine von "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // eine von "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
