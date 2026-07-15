---
title: Registrera API-slutpunkt
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API endpoint

I den här handledningen lär du dig hur du använder Ultimate Multisite /register API endpoint för att skapa hela onboarding-processen för en ny kund i ditt nätverk och hur du gör det med Zapier.

Endpoint använder POST-metoden och anropas via URL:en _**https://yoursite.com/wp-json/wu/v2/register**_. I det här anropet kommer 4 processer att köras i ditt nätverk:

  * En ny WordPress-användare eller dess identifiering via användar-ID kommer att skapas.

  * En ny kund i Ultimate Multisite eller dess identifiering via kund-ID kommer att skapas.

  * En ny webbplats i WordPress-nätverket kommer att skapas.

  * Till slut kommer ett nytt Membership i Ultimate Multisite att skapas.

För den här processen behöver du dina API-autentiseringsuppgifter. För att få dem går du till din nätverksadministratörspanel, navigerar till **Ultimate Multisite > Settings** > **API & Webhooks,** och letar efter avsnittet API Settings.

![Avsnittet API Settings i Ultimate Multisite](/img/config/settings-api.png)

Här är en fullständig vy av sidan för API-inställningar:

![Fullständig sida för API-inställningar](/img/config/settings-api-full.png)

Välj **Enable API** och hämta dina API-autentiseringsuppgifter.

Nu ska vi utforska endpoint och sedan skapa en registreringsåtgärd i Zapier.

## Body-parametrar för endpoint {#endpoint-body-parameters}

Låt oss få en översikt över den minsta information vi behöver skicka till endpoint. I slutet av den här artikeln hittar du det fullständiga anropet.

### Kund {#customer}

Detta är informationen som behövs för processen att skapa användaren och Ultimate Multisite-kunden:

"customer_id" : integer

Det är möjligt att skicka kund-ID:t som skapats i ditt nätverk. Om det inte skickas in används informationen nedan för att skapa en ny kund och en ny WordPress-användare. Användar-ID kan också skickas på samma sätt som kund-ID:t.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

Den enda informationen vi behöver inuti detta objekt är Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkter** {#products}

Produkter anges som en array med 1 eller flera produkt-ID:n från ditt nätverk. Observera att denna endpoint inte skapar produkter. Läs Ultimate Multisite:s dokumentation för att bättre förstå endpoint för att skapa produkter.

**"products" : [1,2],**

### Betalning {#payment}

Precis som med Membership behöver vi bara statusen.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Webbplats {#site}

Och för att avsluta body behöver vi webbplatsens URL och titel, båda inuti webbplatsobjektet.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Svaret från register endpoint blir en array med informationen om det nyligen skapade medlemskapet.

## Skapa en åtgärd i Zapier {#creating-an-action-in-zapier}

Med introduktionen av denna nya och mer robusta endpoint för kontoskapande får du också tillgång till en ny åtgärd i Zapier.

Vet du hur du använder och drar nytta av allt som den nya versionen av Zapier erbjuder? Läs mer här. (länk?)

### Skapa en åtgärd {#creating-an-action}

För att bättre illustrera hur registrerings-endpoint används med Zapier ska vi skapa en integration med Google Forms. Varje gång det här formuläret fylls i och informationen sparas i formulärets svarskalkylblad skapas ett nytt medlemskap i Ultimate Multisite-nätverket.

I Google Forms skapar du ett formulär med de minsta fält som krävs för att skapa ett nytt medlemskap i nätverket.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nu i Zapier skapar du en ny Zap och ansluter det skapade formuläret i Google via kalkylbladet där data sparas.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Klart! Google Forms-formuläret är anslutet till Zapier och redo att integreras med nätverket. Nu går vi vidare till åtgärden som blir resultatet av triggern som Google Forms utlöser varje gång det fylls i.

Leta upp den nya Ultimate Multisite-appen och välj den. För den här typen av Zap väljer du alternativet Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Efter detta första steg väljer du det Account som ska anslutas till denna Zap.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Detta är den mest känsliga delen av hela processen. Vi behöver matcha fälten som kom från Google Forms med de minsta fält som krävs för register endpoint, som visas i föregående avsnitt av denna artikel.

I det här exemplet behöver vi bara konfigurera användarnamn, e-post, lösenord, namn och URL för webbplatsen. Resten lämnas fördefinierat så att alla medlemskap som genereras i detta Google Forms följer samma produkt- och statusmönster.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

När informationen är inställd fortsätter du till det slutliga testet. På den sista skärmen kan du se alla fält som kommer att skickas till endpoint, deras respektive information och de fält som kommer att skickas tomma.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Testa din nya Zap så bör den slutföras utan problem. Om något fel uppstår, kontrollera alla fält och om de skickas korrekt. Eftersom det finns mycket information kan vissa saker gå obemärkt förbi.

### Fullständiga endpoint-parametrar {#complete-endpoint-parameters}

Här är det fullständiga anropet och alla möjliga fält som kan skickas.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
