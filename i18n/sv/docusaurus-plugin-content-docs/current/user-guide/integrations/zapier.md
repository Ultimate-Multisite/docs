---
title: Zapier-integration
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integrera Ultimate Multisite med Zapier

I en av artiklarna diskuterade vi [Webhooks](webhooks.md) och hur de kan användas för att integrera med tredjepartsapplikationer.

Att använda webhooks är lite komplicerat eftersom det kräver avancerade kodkunskaper och hantering av payloads. Att använda **Zapier** är ett sätt att komma runt detta.

Zapier har integrering med över 5000+ appar vilket gör kommunikationen mellan olika applikationer enklare.

Du kan skapa **Triggers** som aktiveras när händelser sker på ditt nätverk (t.ex. ett konto skapas och utlöser account_create-händelsen) eller generera **Actions** på ditt nätverk som reagerar på externa händelser (t.ex. skapa ett nytt kontomedlemskap i ditt Ultimate Multisite-nätverk).

Detta är möjligt eftersom **Ultimate Multisite Zapiers triggers** och actions drivs av [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Kom igång

Först söker du efter Ultimate Multisite i Zapiers applista. Alternativt kan du klicka på [den här länken](https://zapier.com/apps/wp-ultimo/integrations).

Gå till din dashboard och klicka på knappen **+** **Create Zap** i vänstra sidofältet för att skapa en ny Zap.

![Zapier dashboard med Create Zap-knappen](/img/admin/webhooks-list.png)

Du kommer att omdirigeras till sidan för att skapa en Zap.

I sökrutan skriver du "wp ultimo". Klicka för att välja alternativet **Beta**-version.

![Sökning efter WP Ultimo i Zapiers applista](/img/admin/webhooks-list.png)

Efter att du valt vår app, välj den tillgängliga händelsen: **New Ultimate Multisite Event**.

![Välja New Ultimate Multisite Event-trigger](/img/admin/webhooks-list.png)

Nu behöver vi ge Zapier åtkomst till **ditt nätverk**. Genom att klicka på **Sign in** öppnas ett nytt fönster som kräver **API-uppgifterna**.

![Zapier Sign in-prompt för API-uppgifter](/img/admin/webhooks-list.png)

Gå till din nätverksadminpanel och navigera till **Ultimate Multisite > Settings** > **API & Webhooks** och leta efter sektionen API Settings.

Välj alternativet **Enable API** eftersom det krävs för att denna anslutning ska fungera.

![API Settings med Enable API-alternativet i Ultimate Multisite](/img/admin/webhooks-list.png)

Använd ikonen **Copy to Clipboard** på fälten API Key och API Secret och klistra in dessa värden på integrationsskärmen.

I URL-fältet anger du ditt nätverks fullständiga URL, inklusive protokollet (HTTP eller HTTPS).

![Zapier integrationsskärm med fält för API Key, Secret och URL](/img/admin/webhooks-list.png)

Klicka på knappen **Yes, Continue** för att gå vidare till nästa steg. Om allt fungerar som det ska kommer du att välkomnas av ditt nya anslutna konto! Klicka på **Continue** för att skapa en ny trigger.

## Så skapar du en ny Trigger

Nu när ditt konto är anslutet kan du se tillgängliga händelser. Låt oss välja händelsen **payment_received** för den här guiden.

![Välja payment_received-händelse i Zapier-trigger](/img/admin/webhooks-list.png)

När händelsen har valts och du klickar på **continue** visas ett **teststeg**.

![Zapier teststeg för triggern](/img/admin/webhooks-list.png)

I det här steget testar Zapier om din Zap kan **hämta den specifika payloaden för den händelsen**. Vid framtida händelser av samma typ kommer information med samma struktur att skickas.

![Zapier trigger-test slutfört framgångsrikt med payload](/img/admin/webhooks-list.png)

I vår guide slutfördes testet **framgångsrikt** och returnerade exempelinformation för payloaden. Denna exempelinformation kommer att vara användbar som vägledning när vi skapar actions. Din trigger är nu skapad och redo att kopplas till andra applikationer.

## Så skapar du Actions

Actions använder information från andra triggers för att skapa nya poster i ditt nätverk.

I steget **creating an action** väljer du Ultimate Multisite **Beta** och alternativet **Create Items on Ultimate Multisite**.

![Skapa en action med Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

I nästa steg skapar du antingen din autentisering, precis som vi gjorde i **Kom igång**, eller väljer en redan skapad autentisering. I den här guiden väljer vi samma autentisering som vi skapade tidigare.

![Välja autentisering för Zapier-actionen](/img/admin/webhooks-list.png)

### Konfigurera Action

Detta är **huvudsteget för actionen** och här fungerar saker lite annorlunda. Den första informationen du väljer är **Item**. Item är **informationsmodellen** för ditt nätverk såsom **Customers, Payments, Sites, Emails** och andra.

![Välja Item-typ för Zapier-actionen](/img/admin/webhooks-list.png)

När du väljer ett item kommer formuläret att **anpassas för att visa obligatoriska och valfria fält** för det valda itemet.

Till exempel, när du väljer itemet **Customer** kommer formulärfälten att visa allt som behöver fyllas i för att skapa en ny Customer i nätverket.

![Customer item-fält i Zapier action-konfiguration](/img/admin/webhooks-list.png)

Efter att du fyllt i alla fält markerade som **required** och klickat på continue, visas en sista skärm med de ifyllda fälten och de fält som lämnades tomma.

![Zapier action-test som visar ifyllda och tomma fält](/img/admin/webhooks-list.png)

Så snart ditt test slutförs framgångsrikt är din action konfigurerad. Det är också viktigt att kontrollera i ditt nätverk om itemet skapades med testet av din action.
