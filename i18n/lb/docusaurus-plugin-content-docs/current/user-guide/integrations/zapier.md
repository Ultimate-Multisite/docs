---
title: Zapier Integration
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integratioun vo Ultimate Multisite mit Zapier

In ere Artikel hämmer mir über [Webhooks](webhooks.md) gsproche und wie mer die für d'Integration mit Drittanbieter-Applikatione bruche chönnt.

D'Nutzig vo Webhooks isch chli kompliziert, will mer fortgschritteni Kenntnis i de Programmierung und s'Ufange vo Payload brucht. Mit **Zapier** hets e Weg, das z'umgah.

Zapier het Integratione mit über 5000+ Applikatione, was d'Kommunikation zwüsche verschiedene Applikatione einfacher macht.

Du chasch **Triggers** erstelle, wo usglöst wärde, wenn Ereignis uf dim Netzwerk passiere (z.B. es Konto wird erstellt und löst s'Event `account_create` us) oder **Actions** generiere, wo uf dim Netzwerk uf externi Ereignis reagiered (z.B. e neui Mitgliedschaft i dim Ultimate Multisite Netzwerk erstelle).

Das isch möglich, will d'**Ultimate Multisite Zapier Triggers** und Actions dur d'[REST API](https://developer.ultimatemultisite.com/api/docs/) aagtriibe wärde.

## Wie fangt mer aa?

Zuerst suchsch du Ultimate Multisite i de Zapier App-Liste. Alternativ chasch du uf [diesen Link](https://zapier.com/apps/wp-ultimo/integrations) klicke.

Geh zu dim Dashboard und drück d'**+ Create Zap** Schaltfläche i de linke Seitenleist, um e neui Zap z'richte.

![Zapier dashboard mit Create Zap Button](/img/admin/webhooks-list.png)

Du wirst uf d'Seite zur Zap-Erstellig umgleitet.

Gib im Suchfeld "wp ultimo" i und klick, um d'**Beta**-Version z'wähle.

![Suche nach WP Ultimo in Zapier App Liste](/img/admin/webhooks-list.png)

Nachdem du üsi App ausgewählt hesch, wähl s'verfüegbari Event: **New Ultimate Multisite Event**.

![Auswahl New Ultimate Multisite Event Trigger](/img/admin/webhooks-list.png)

Jetzt müend mir Zapier Zuegang zu **dim Netzwerk** gäh. Wenn du uf **Sign in** klickst, öffnet sich es neus Fenster, wo d'**API Credentials** brucht.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Geet op Ihr Netzwerkadministrator-paneel und navigiere zu **Ultimate Multisite > Settings** > **API & Webhooks** en lueg op de sectie API Settings.

Wähl d'Option **Enable API** us, will nötig isch für die Verbindung, dass das funktioniert.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Nimm s'Icon **Copy to Clipboard** bi de Felde API Key und API Secret und füeg die Werte uf de Integrationsbildschirm ii.

Im Feld URL gibst du dini ganz Netzwerk-URL ii, inklusiv em Protokoll (HTTP oder HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klick uf de Knopf **Yes, Continue**, um zur nächste Schritt z'cho. Wenn alles klappt, sölle Sie vo Ihrem neue verbundene Konto begrüesst werde! Klick uf **Continue**, um en neie Trigger z'erstelle.

## Wie mer en neie Trigger erstellt

Jetzt, wo Ihr Konto verbunde isch, chönne Sie d'verfüegbare Events gseh. Wählemer für die Tutorial-Ufgab de Event **payment_received**.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Sobald de Event ausgewählt isch und Sie uf **continue** klicke, wird en **testschritt** erschiine.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

In däm Schritt prüeft Zapier, ob Ihr Zap de **spezifischi payload zu däm Event abrufe** cha. Bi zukünftige Events vo de gliiche Art wird Information mit dere gliiche Struktur gschickt.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

In üsere Tutorial isch de Test **erfolgreich abgschlosse** und het d'Payload-Beispilsinformation zrugggäh. Dä Beispilsinformation wird eus helfe, wenn mir Aktionen erstelle. Din Trigger isch jetz erstellt und parat zum mit andere Applikatione verbunde z'si.

## Wie mer Actions erstellt

Actions bruche Informatione vo andere Triggern, um neui Einträg in dim Netzwerk z'erstelle.

Bi de **Erstellig vom Action-Schritt** wählsch du Ultimate Multisite **Beta** und d'Option **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Im nächste Schritt erstellsch entweder dini Authentifizierig, genau wie mirs bi **How to start** gmacht händ, oder wählsch e scho erstellti Authentifizierig us. In däm Tutorial wählemer die gliichi Authentifizierig, wo mer vorher erstellt händ.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action iistelle

Das isch de **Hauptschritt vom Action** und do sind d'Sache chli anders. D'ersti Information, wo du wählsch, isch s'**Item**. S'Item isch s'Informationsmodell vo dim Netzwerk wie **Customers, Payments, Sites, Emails** und anderi.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Wenn du es Item wählsch, wird s'Formular so umgstellt, dass d'notwendige und optionali Felder für das gwählte Item chunnd.

Zum Bischpil, wenn du s'Item **Customer** wählsch, bringed d'Formularfelder alles mit, was nötig isch, zum en neue Customer im Netzwerk z'erstelle.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Nachdem du alli Felder markiert als **required** usgfüllet hesch und uf continue klickst, zeigt dir en letschte Bildschirm d'ufgfülti Felder und die Felder, wo no leer sind.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Sobald Ihr Test abgeschlossen und erfolgreich isch, isch Ihri Aktion konfiguriert. Es isch au wichtig z'prüefe, ob de Artikel mit em Test vo Ihrer Aktion erstellt worde isch, wenn Sie uf Ihrem Netzwerk druf luege.
