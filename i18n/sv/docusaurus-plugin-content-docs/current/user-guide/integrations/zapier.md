---
title: Zapier-integration
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrera Ultimate Multisite med Zapier

I en av artiklarna diskuterade vi [Webhooks](webhooks.md) och hur de kan användas för att integrera med tredjepartsapplikationer.

Att använda webhooks är lite komplicerat eftersom det kräver avancerade kunskaper i kodning och att fånga payloads. Att använda **Zapier** är ett sätt för dig att komma runt det.

Zapier har integration med över 5000+ appar, vilket gör kommunikationen mellan olika applikationer enklare.

Du kan skapa **Triggers** som utlöses när händelser inträffar i ditt nätverk (t.ex. när ett Account skapas och utlöser händelsen account_create) eller generera **Actions** i ditt nätverk som reagerar på externa händelser (t.ex. skapa ett nytt Account-medlemskap i ditt Ultimate Multisite-nätverk).

Detta är möjligt eftersom **Ultimate Multisite Zapiers triggers** och actions drivs av [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Så kommer du igång

Sök först efter Ultimate Multisite i Zapiers applista. Alternativt kan du klicka på [den här länken](https://zapier.com/apps/wp-ultimo/integrations).

Gå till din Dashboard och tryck på knappen **+** **Create Zap** i den vänstra sidopanelen för att konfigurera en ny Zap.

![Zapier Dashboard med knappen Create Zap](/img/admin/webhooks-list.png)

Du kommer att omdirigeras till sidan för att skapa en Zap.

Skriv "wp ultimo" i sökrutan. Klicka för att välja alternativet för **Beta**-versionen.

![Söker efter WP Ultimo i Zapiers applista](/img/admin/webhooks-list.png)

Efter att ha valt vår app, välj den tillgängliga händelsen: **New Ultimate Multisite Event**.

![Väljer triggern New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Nu behöver vi ge Zapier åtkomst till **ditt nätverk**. Om du klickar på **Sign in** öppnas ett nytt fönster som kräver **API-uppgifterna**.

![Zapier Sign in-meddelande för API-uppgifter](/img/admin/webhooks-list.png)

Gå till ditt nätverks adminpanel och navigera till **Ultimate Multisite > Settings** > **API & Webhooks** och leta efter avsnittet API Settings.

Välj alternativet **Enable API** eftersom det krävs för att den här anslutningen ska fungera.

![API and Webhooks-inställningar med alternativen API Settings och Enable API](/img/admin/settings-api-webhooks.png)

Använd ikonen **Copy to Clipboard** på fälten API Key och API Secret och klistra in dessa värden på integrationsskärmen.

I URL-fältet anger du hela URL:en till ditt nätverk, inklusive protokollet (HTTP eller HTTPS).

![Zapier-integrationsskärm med fälten API Key, Secret och URL](/img/admin/webhooks-list.png)

Klicka på knappen **Yes, Continue** för att gå vidare till nästa steg. Om allt fungerar bör du hälsas av ditt nya anslutna Account! Klicka på **Continue** för att skapa en ny trigger.

## Hur du skapar en ny Trigger

Nu när ditt Account är anslutet kan du se tillgängliga händelser. Låt oss välja händelsen **payment_received** för den här handledningen.

![Väljer händelsen payment_received i Zapier-trigger](/img/admin/webhooks-list.png)

När händelsen har valts och du klickar på **continue** visas ett **teststeg**.

![Zapier-teststeg för triggern](/img/admin/webhooks-list.png)

I det här steget testar Zapier om din Zap kan **hämta den specifika payloaden för den händelsen**. Vid framtida händelser av samma typ skickas information med samma struktur.

![Zapier-triggerns test slutfördes framgångsrikt med payload](/img/admin/webhooks-list.png)

I vår handledning **slutfördes testet framgångsrikt** och returnerade exempelinformationen för payloaden. Den här exempelinformationen kommer att vara användbar för att vägleda oss när vi skapar actions. Din trigger är nu skapad och redo att anslutas till andra applikationer.

## Hur du skapar Actions

Actions använder information från andra triggers för att skapa nya poster i ditt nätverk.

I steget **skapa en action** väljer du Ultimate Multisite **Beta** och alternativet **Create Items on Ultimate Multisite**.

![Skapar en action med Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

I nästa steg skapar du antingen din autentisering, precis som vi gjorde i **Så kommer du igång**, eller väljer en skapad autentisering. I den här handledningen väljer vi samma autentisering som skapades tidigare.

![Väljer autentisering för Zapier-action](/img/admin/webhooks-list.png)

### Konfigurera Action

Detta är **huvudsteget i actionen** och här är saker lite annorlunda. Den första informationen du väljer är **Item**. Item är **informationsmodellen** för ditt nätverk, såsom **Customers, Payments, Sites, Emails** och andra.

![Väljer Item-typ för Zapier-action](/img/admin/webhooks-list.png)

När du väljer ett item kommer formuläret att **ordna om sig för att visa de obligatoriska och valfria fälten** för det valda itemet.

Till exempel, när du väljer itemet **Customer**, kommer formulärfälten att visa allt som är nödvändigt att fylla i för att skapa en ny Customer i nätverket.

![Customer item-fält i konfigurationen av Zapier-action](/img/admin/webhooks-list.png)

Efter att ha fyllt i alla fält markerade som **required** och klickat på fortsätt visar en sista skärm de ifyllda fälten och de fält som lämnades tomma.

![Zapier-actiontest som visar ifyllda och tomma fält](/img/admin/webhooks-list.png)

Så snart ditt test slutförs och lyckas är din action konfigurerad. Det är också viktigt att kontrollera i ditt nätverk om itemet skapades med testet av din action.
