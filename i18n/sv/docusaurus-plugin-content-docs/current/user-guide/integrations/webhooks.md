---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# En första titt på Webhooks (v2)

_**OBS: Observera att denna funktion eller artikel är avsedd för avancerade användare.**_

En **webhook** är ett sätt för en app eller programvara som Ultimate Multisite att förse andra applikationer med information i realtid. En webhook levererar data eller nyttolaster till andra applikationer när det sker, vilket betyder att du **får data omedelbart.**

Detta är användbart om du behöver integrera eller skicka viss data från Ultimate Multisite till ett annat CRM eller system varje gång en händelse utlöses. Till exempel behöver du skicka användarens namn och e-postadress till en e-postlista varje gång ett nytt användarkonto skapas.

## Hur man skapar en webhook

För att skapa en webhook, gå till din nätverksadministratörs dashboard. Klicka på **Ultimate Multisite > Webhooks > Lägg till ny Webhook.**

![Tom listsida för Webhooks med knappen Lägg till ny Webhook](/img/admin/webhooks-list-empty.png)

Du kan sedan redigera webhook-konfigurationen:

![Formulär för Lägg till ny Webhook med fälten Namn, Händelse och URL](/img/admin/webhook-add-modal.png)

När du skapar en ny webhook kommer du att bli ombedd om information som **Namn, URL,** och **Händelse**. Du kan använda vilket namn du vill för din webhook. De viktigaste fälten är URL och Händelse.

![Redigeringsgränssnitt för webhook som visar URL-fältet och förhandsgranskning av nyttolast](/img/admin/webhook-url-field.png)

URL är den **endpoint eller destination** som Ultimate Multisite kommer att skicka **nyttolasten eller datan** till. Detta är applikationen som kommer att ta emot datan.

Zapier är den vanligaste lösningen som användare använder för att göra integration med tredjepartsapplikationer enklare. Utan en plattform som Zapier behöver du manuellt skapa en anpassad funktion som fångar upp datan och bearbetar den. Se denna artikel om **hur du använder Ultimate Multisite webhook med Zapier.**

I den här artikeln kommer vi att titta på den grundläggande principen för hur en webhook fungerar och de händelser som finns tillgängliga i Ultimate Multisite. Vi kommer att använda en tredjepartssajt som heter [requestbin.com](https://requestbin.com/). Denna sajt låter oss skapa en endpoint och fånga upp nyttolasten utan att skriva någon kod. _**Ansvarsfriskrivning: allt den kommer att göra är att visa oss att datan har tagits emot.**_ Det kommer inte att ske någon bearbetning eller någon form av åtgärd med nyttolasten.

Gå till [requestbin.com](https://requestbin.com/) och klicka på Skapa Request Bin.

Efter att du klickat på den knappen kommer du att bli ombedd att logga in om du redan har ett konto eller registrera dig. Om du redan har ett konto leder den dig direkt till deras dashboard. På deras dashboard kommer du omedelbart att se endpointen eller URL:en du kan använda när du skapar din Ultimate Multisite webhook.

Fortsätt och kopiera URL:en och gå tillbaka till Ultimate Multisite. Placera endpointen i URL-fältet och välj en händelse från rullgardinsmenyn. I detta exempel kommer vi att välja **Payment Received**.

Denna händelse utlöses varje gång en användare gör en betalning. Alla tillgängliga händelser, deras beskrivning och nyttolaster listas längst ner på sidan. Klicka på knappen **Lägg till ny Webhook** för att spara webhooken.

![Rullgardinsmeny för webhook-händelse med Payment Received valt](/img/admin/webhook-event-picker.png)

Vi kan nu skicka en testhändelse till endpointen för att se om webhooken vi skapade fungerar. Vi kan göra detta genom att klicka på **Skicka testhändelse** under webhooken vi skapade.

![Webhooks-lista som visar en konfigurerad webhook och åtgärden Skicka test](/img/admin/webhooks-list-populated.png)

Detta visar ett bekräftelsefönster som säger att testet lyckades.

![Resultat av webhook-testhändelse efter att en testnyttolast skickats](/img/admin/webhook-test-result.png)

Om vi nu går tillbaka till _Requestbin_-sajten kommer vi att se att nyttolasten har tagits emot och innehåller viss testdata.

Detta är grundprincipen för hur webhook och endpoints fungerar. Om du ska skapa en anpassad endpoint behöver du skapa en anpassad funktion för att bearbeta datan du tar emot från Ultimate Multisite.
