---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# En första titt på Webhooks (v2)

_**OBS: Denna funktion eller artikel är avsedd för avancerade användare.**_

En **webhook** är ett sätt för en app eller programvara som Ultimate Multisite att förse andra applikationer med information i realtid. En webhook levererar data eller payload till andra applikationer direkt när något händer, vilket innebär att du **får data omedelbart.**

Detta är användbart om du behöver integrera eller skicka viss data från Ultimate Multisite till ett annat CRM eller system varje gång en händelse utlöses. Till exempel kan du behöva skicka användarens namn och e-postadress till en e-postlista varje gång ett nytt användarkonto skapas.

## Så skapar du en webhook

För att skapa en webhook, gå till din nätverksadministratörspanel. Klicka på **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks-listsida med knappen Add New Webhook](/img/admin/webhooks-list.png)

När du skapar en ny webhook blir du ombedd att fylla i information som **Name, URL,** och **Event**. Du kan använda vilket namn du vill för din webhook. De viktigaste fälten är URL och Event.

![Formulär för ny webhook med fälten Name, URL och Event](/img/admin/webhooks-list.png)

URL är **slutpunkten eller destinationen** dit Ultimate Multisite skickar **payload eller data**. Detta är applikationen som kommer att ta emot datan.

Zapier är den vanligaste lösningen som användare använder för att göra integration med tredjepartsapplikationer enklare. Utan en plattform som Zapier behöver du manuellt skapa en anpassad funktion som fångar upp datan och bearbetar den. Se denna artikel om **hur du använder Ultimate Multisite webhook med Zapier.**

I denna artikel kommer vi att titta på grundkonceptet för hur en webhook fungerar och vilka händelser som finns tillgängliga i Ultimate Multisite. Vi kommer att använda en tredjepartswebbplats som heter [requestbin.com](https://requestbin.com/). Denna webbplats låter oss skapa en slutpunkt och fånga upp payload utan att behöva skriva någon kod. _**Observera: allt den gör är att visa oss att datan har tagits emot.**_ Ingen bearbetning eller någon form av åtgärd kommer att utföras på payload.

Gå till [requestbin.com](https://requestbin.com/) och klicka på Create Request Bin.

![RequestBin-webbplatsens knapp Create Request Bin](/img/admin/webhooks-list.png)

När du klickat på den knappen blir du ombedd att logga in om du redan har ett konto, eller att registrera dig. Om du redan har ett konto leds du direkt till deras dashboard. På deras dashboard ser du omedelbart slutpunkten eller URL:en du kan använda för att skapa din Ultimate Multisite webhook.

![RequestBin dashboard som visar slutpunktens URL](/img/admin/webhooks-list.png)

Kopiera URL:en och gå tillbaka till Ultimate Multisite. Placera slutpunkten i URL-fältet och välj en händelse från rullgardinsmenyn. I detta exempel väljer vi **Payment Received**.

Denna händelse utlöses varje gång en användare gör en betalning. Alla tillgängliga händelser, deras beskrivningar och payload listas längst ner på sidan. Klicka på knappen **Add New Webhook** för att spara webhooken.

![Webhook konfigurerad med händelsen Payment Received](/img/admin/webhooks-list.png)

Nu kan vi skicka en testhändelse till slutpunkten för att se om webhooken vi skapade fungerar. Vi gör detta genom att klicka på **Send Test Event** under webhooken vi skapade.

![Alternativet Send Test Event under webhooken](/img/admin/webhooks-list.png)

Detta visar ett bekräftelsefönster som säger att testet lyckades.

![Bekräftelse på lyckad webhook-testhändelse](/img/admin/webhooks-list.png)

Om vi nu går tillbaka till _Requestbin_-webbplatsen ser vi att payload har tagits emot med viss testdata.

![RequestBin visar mottagen webhook payload-data](/img/admin/webhooks-list.png)

Detta är grundprincipen för hur webhooks och slutpunkter fungerar. Om du ska skapa en anpassad slutpunkt behöver du skapa en anpassad funktion för att bearbeta datan du tar emot från Ultimate Multisite.
