---
title: Registrera API-slutpunkt
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisites API-slutpunkt för registrering

I den här guiden lär du dig hur du använder Ultimate Multisites /register API-slutpunkt för att skapa hela introduktionsprocessen för en ny kund i ditt nätverk, och hur du gör det med Zapier.

Slutpunkten använder POST-metoden och anropas via URL:en _**https://dinwebbplats.se/wp-json/wu/v2/register**_. Vid detta anrop kommer fyra processer att köras i ditt nätverk:

  * En ny WordPress-användare skapas, alternativt identifieras en befintlig användare via användar-ID.

  * En ny kund i Ultimate Multisite skapas, alternativt identifieras en befintlig kund via kund-ID.

  * En ny webbplats skapas i WordPress-nätverket.

  * Slutligen skapas ett nytt medlemskap i Ultimate Multisite.

För denna process behöver du dina API-uppgifter. För att hämta dem, gå till nätverkets adminpanel, navigera till **Ultimate Multisite > Inställningar** > **API & Webhooks** och leta upp avsnittet API-inställningar.

![Avsnittet API-inställningar i Ultimate Multisite](/img/config/settings-api.png)  
Välj **Aktivera API** och hämta dina API-uppgifter.

Nu ska vi utforska slutpunkten och sedan skapa en registreringsåtgärd i Zapier.

## Parametrar i slutpunktens body

Låt oss få en överblick över den minsta mängd information vi behöver skicka till slutpunkten. I slutet av den här artikeln hittar du det fullständiga anropet.

### Kund

Det här är informationen som krävs för att skapa användaren och Ultimate Multisite-kunden:

"customer_id" : integer

Det är möjligt att skicka kund-ID för en kund som redan skapats i ditt nätverk. Om det inte skickas kommer informationen nedan att användas för att skapa en ny kund och en ny WordPress-användare. Användar-ID kan också skickas på samma sätt som kund-ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Medlemskap**

Den enda informationen vi behöver i det här objektet är medlemskapets status.

"membership" { "status" : "string", // ett av "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkter**

Produkter anges som en array med ett eller flera produkt-ID från ditt nätverk. Observera att denna slutpunkt inte skapar produkter. Se Ultimate Multisites dokumentation för mer information om slutpunkten för att skapa produkter.

**"products" : [1,2],**

### Betalning

Precis som för medlemskap behöver vi bara status.

**"payment" { "status" : "string", // ett av "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Webbplats

Och för att avsluta body:n behöver vi webbplatsens URL och titel, båda inuti Site-objektet.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Returen från register-slutpunkten blir en array med information om det nyskapade medlemskapet.

## Skapa en åtgärd i Zapier

I och med introduktionen av denna nya och mer robusta slutpunkt för kontoskapande får du också tillgång till en ny åtgärd i Zapier.

Vet du hur du använder och drar nytta av allt som den nya versionen av Zapier erbjuder? Läs mer här. (link?)

### Skapa en åtgärd

För att bättre illustrera hur du använder registreringsslutpunkten med Zapier ska vi skapa en integration med Google Forms. Varje gång detta formulär fylls i och informationen sparas i formulärets svarsblad skapas ett nytt medlemskap i Ultimate Multisite-nätverket.

I Google Forms skapar du ett formulär med de minimifält som krävs för att skapa ett nytt medlemskap i nätverket.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nu i Zapier skapar du en ny Zap och ansluter det skapade formuläret i Google via kalkylbladet där data sparas.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Klart! Google Forms-formuläret är anslutet med Zapier och redo att integreras med nätverket. Nu går vi vidare till åtgärden som blir resultatet av den trigger som Google Forms aktiverar varje gång formuläret fylls i.

Leta upp den nya Ultimate Multisite-appen och välj den. För den här typen av Zap väljer du alternativet Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Efter detta första steg väljer du det konto som ska anslutas till denna Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Det här är den känsligaste delen av hela processen. Vi behöver matcha fälten som kom från Google Forms med de minimifält som krävs för register-slutpunkten, enligt vad som visades i föregående avsnitt av den här artikeln.

I det här exemplet behöver vi bara konfigurera användarnamn, e-post, lösenord, namn och URL för webbplatsen. Resten lämnas förinställt så att alla medlemskap som genereras via detta Google Forms följer samma produkt- och statusmönster.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Med informationen inställd går du vidare till det slutliga testet. På den sista skärmen kan du se alla fält som kommer att skickas till slutpunkten, deras respektive information och de fält som skickas tomma.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testa din nya Zap och den bör slutföras utan problem. Om något fel uppstår, kontrollera alla fält och att de skickas korrekt. Eftersom det är mycket information kan vissa saker lätt missas.

### Fullständiga slutpunktsparametrar

Här är det fullständiga anropet och alla möjliga fält som kan skickas.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // ett av "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // ett av "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
