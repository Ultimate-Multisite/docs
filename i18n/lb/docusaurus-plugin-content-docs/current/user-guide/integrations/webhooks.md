---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Eifach e Blick uf Webhooks (v2) {#a-first-look-on-webhooks-v2}

_**ACHTUNG: Mer söttet wüsse, dass di Funktione oder de Artikel für fortgschritteni Benutzer sind.**_

E **webhook** isch en Weg, wie e App oder Software wie Ultimate Multisite anderi Applikatione mit Echtzit-Informatione versorge cha. E webhook liefert Date oder Payloads an anderi Applikatione, sobald öppis passiert, was bedütet, dass du **Date sofort überchunsch.**

Das isch nützlich, wenn du integriere oder bestimti Date vo Ultimate Multisite zu eme andere CRM oder System wiitergäbe muesch, jedes Mal, wenn es en Ereignis usglöst wird. Zum Bischpil bruchsch du de Name und d'E-Mail-Adrässe vom Benutzer an e Mailingliste, jedes Mal, wenn es es neus Benutzerkonto git.

## Wie mer en webhook erstellt {#how-to-create-a-webhook}

Um en webhook z'erstelle, gaht du zu dim Netzwerkadministrator-Dashboard. Klick uf **Ultimate Multisite > Webhooks > Add New Webhook.**

![Leeri Liste vo Webhooks mit Button "Add New Webhook"](/img/admin/webhooks-list-empty.png)

Dänn chasch du d'Webhook-Konfiguration bearbeite:

![Form zum Hinzufüge vo neuem Webhook mit Feldern Name, Event und URL](/img/admin/webhook-add-modal.png)

Wenn du en neue webhook erstellsch, wird dir Informatione wie **Name, URL** und **Event** gfragt. Du chasch de Name wähle, wo dir passt für din webhook. D'wichtigste Felder sind d'URL und s'Event.

![Bearbeitigsinterface vom Webhook mit Feld URL und Vorschau vo Payload](/img/admin/webhook-url-field.png)

D'URL isch de **Endpunkt oder d'Ziel**, wo Ultimate Multisite de **Payload oder Date** schickt. Das isch d'Applikation, wo d'Date überchunnt.

Zapier isch d'häufigsti Lösung, wo Benutzer bruche, um Integratione mit Drittanbieter-Applikatione einfacher z'mache. Ohni en Plattform wie Zapier muesch du manuell e benutzerdefinierti Funktion erstelle, wo d'Date ufnimmt und verarbeitet. Lueg dir dä Artikel ah über **wie mer Ultimate Multisite Webhooks mit Zapier bruche.**

In dësem Artikel lue mir de grundlegge Konzept wéi en webhook funktioniert an de Ereignisse, déi verfügbar sinn in Ultimate Multisite. Mir wärend e 3rd party Site namens [requestbin.com](https://requestbin.com/) benotzen. Dës Site laus et mir e endpoint z'erstelle a d'Payload ze fange, ohni Code z'schriien. _**Disclaimer: alls, wat se macht, isch nur ze ze ze ginn, datt d'Date empfangen hunn.**_ Es wird ke Verarbechtung oder jeglech Aktionen an de Payload gmacht.

Gang zu [requestbin.com](https://requestbin.com/) a und klickt uf Create Request Bin.

Nachdem Dir d'Knopf geklickt hätt, wird Dir gfragt, ob Dir scho e Konto hunn oder ob Dir e s'chriien. Wenn Dir scho e Konto hunn, führt et Dich direkt zu ihrem Dashboard. Auf ihrem Dashboard gsehnd Dir sofort de endpoint oder URL, wo Dir chunt, fir Iechere Ultimate Multisite webhook z'erstelle.

Kopiert d'URL a und gang zrugg zu Ultimate Multisite. Setzt de endpoint i s'URL-Feld a an a Wahl e Ereignis us em Dropdown. In dësem Beispill wëlle mir **Payment Received** wëse wëse.

Dëses Ereignis wird ausgelockt, wann e Benutzer e Zahldung macht. All déi verfügbar Ereignisse, hir Beschriwwersch a d'Payloads sinn am End vum Page ufglistet. Klickt uf de **Add New Webhook** Knopf, fir de webhook z'speichern.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Mir chënnen jetz e Testereignis an de endpoint senden, fir mir z'gseh, ob de webhook, wo mir erstellt hunn, funktioniert. Mir chënnen dat dur d'Klick uf **Send Test Event** unter dem webhook, wo mir erstellt hunn, ma dat mache.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Dëst gëtt e Bestätigungsfenster a, datt de Test erfolgreich war.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Wann mir zrugg zum _Requestbin_ Site gönd, gsehnd mir, dass de Payload empfange huet, mit chli Testdate drin.

Das isch s'Grundprinzip, wie Webhook und Endpoints funktioniere. Wenn Sie en eigene Endpoint erstelle wend, müesse Sie e eigeti Funktion erstelle, um d'Date z'verarbeite, wo Sie vo Ultimate Multisite überchönd.
