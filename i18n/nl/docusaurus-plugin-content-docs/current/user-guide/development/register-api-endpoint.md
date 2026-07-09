---
title: API-eindpunt registreren
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Het Ultimate Multisite Register API-eindpunt {#the-ultimate-multisite-register-api-endpoint}

In deze tutorial leer je hoe je het Ultimate Multisite /register API-eindpunt gebruikt om het volledige onboardingproces voor een nieuwe klant in je netwerk te maken en hoe je dat met Zapier doet.

Het eindpunt gebruikt de POST-methode en wordt aangeroepen via de URL _**https://yoursite.com/wp-json/wu/v2/register**_. In deze aanroep worden 4 processen binnen je netwerk uitgevoerd:

  * Er wordt een nieuwe WordPress gebruiker aangemaakt, of deze wordt geïdentificeerd via de user ID.

  * Er wordt een nieuwe Customer in Ultimate Multisite aangemaakt, of deze wordt geïdentificeerd via de customer ID.

  * Er wordt een nieuwe site op het WordPress netwerk aangemaakt.

  * Aan het einde wordt er een nieuwe Membership in Ultimate Multisite aangemaakt.

Voor dit proces heb je je API-inloggegevens nodig. Om ze te verkrijgen, ga je naar je netwerkbeheerpaneel, navigeer je naar **Ultimate Multisite > Settings** > **API & Webhooks,** en zoek je naar de sectie API Settings.

![Sectie API Settings in Ultimate Multisite](/img/config/settings-api.png)

Hier is een volledig overzicht van de pagina met API-instellingen:

![Volledige pagina met API-instellingen](/img/config/settings-api-full.png)

Selecteer **Enable API** en haal je API-inloggegevens op.

Laten we nu het eindpunt verkennen en daarna een registratieactie in Zapier maken.

## Bodyparameters van het eindpunt {#endpoint-body-parameters}

Laten we een overzicht bekijken van de minimale informatie die we naar het eindpunt moeten sturen. Aan het einde van dit artikel vind je de volledige aanroep.

### Customer {#customer}

Dit is de informatie die nodig is voor het proces van het aanmaken van de User en de Ultimate Multisite Customer:

"customer_id" : integer

Het is mogelijk om de customer ID te verzenden die in je netwerk is aangemaakt. Als deze niet wordt ingediend, wordt de onderstaande informatie gebruikt om een nieuwe klant en een nieuwe WordPress gebruiker aan te maken. De user ID kan ook op dezelfde manier worden verzonden als de customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership** {#membership}

De enige informatie die we binnen dit object nodig hebben, is Membership Status.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products** {#products}

Products krijgen een array met 1 of meer product ID uit je netwerk. Let op: dit eindpunt maakt geen producten aan. Bekijk de documentatie van Ultimate Multisite om het eindpunt voor het aanmaken van producten beter te begrijpen.

**"products" : [1,2],**

### Payment {#payment}

Net als bij Membership hebben we alleen de status nodig.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site {#site}

En om de body af te sluiten hebben we de URL en titel van de site nodig, beide binnen het Site-object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

De return van het register-eindpunt is een array met de nieuw aangemaakte membership-informatie.

## Een actie maken in Zapier {#creating-an-action-in-zapier}

Met de introductie van dit nieuwe en robuustere eindpunt voor het aanmaken van Accounts krijg je ook toegang tot een nieuwe actie in Zapier.

Weet je hoe je alles kunt gebruiken en benutten wat de nieuwe versie van Zapier biedt? Lees hier meer. (link?)

### Een actie maken {#creating-an-action}

Om beter te illustreren hoe je het registratie-eindpunt met Zapier gebruikt, maken we een integratie met Google Forms. Elke keer dat dit formulier wordt ingevuld en de informatie wordt opgeslagen in het antwoordblad van het formulier, wordt er een nieuwe membership aangemaakt in het Ultimate Multisite netwerk.

Maak in Google Forms een formulier met de minimale velden die nodig zijn om een nieuwe membership in het netwerk aan te maken.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Maak nu in Zapier een nieuwe Zap en verbind het aangemaakte formulier in Google via de spreadsheet waarin de gegevens worden opgeslagen.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Klaar! Het Google Forms-formulier is verbonden met Zapier en klaar om te worden geïntegreerd met het netwerk. Laten we nu doorgaan naar de Action die voortkomt uit de Trigger die Google Forms activeert telkens wanneer het wordt ingevuld.

Zoek de nieuwe Ultimate Multisite app en selecteer deze. Kies voor dit soort Zap de optie Register.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Kies na deze eerste stap het Account dat met deze Zap wordt verbonden.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Dit is het meest gevoelige deel van het hele proces. We moeten de velden die uit Google Forms kwamen koppelen aan de minimale velden die nodig zijn voor het register-eindpunt, zoals weergegeven in de vorige sectie van dit artikel.

In dit voorbeeld hoeven we alleen de gebruikersnaam, e-mail, het wachtwoord, de naam en de URL van de website te configureren. De rest blijft vooraf bepaald, zodat alle memberships die via dit Google Forms worden gegenereerd hetzelfde product- en statuspatroon volgen.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Ga met de ingestelde informatie door naar de laatste test. Op het laatste scherm kun je alle velden zien die naar het eindpunt worden verzonden, hun respectieve informatie en de velden die leeg worden verzonden.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Test je nieuwe Zap en deze zou succesvol moeten worden voltooid. Als er een fout optreedt, controleer dan alle velden en of ze correct worden verzonden. Omdat er veel informatie is, kunnen sommige dingen onopgemerkt blijven.

### Volledige eindpuntparameters {#complete-endpoint-parameters}

Hier is de volledige aanroep en alle mogelijkheden van velden die kunnen worden verzonden.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
