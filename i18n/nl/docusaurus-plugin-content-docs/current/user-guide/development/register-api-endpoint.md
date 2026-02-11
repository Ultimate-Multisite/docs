---
title: API-eindpunt registreren
sidebar_position: 6
_i18n_hash: 8185a928b84bdc9e5563d14f7ddbe7d7
---
# De Ultimate Multisite Register API-eindpunt

In dit tutorial leer je hoe je de Ultimate Multisite /register API-eindpunt kunt gebruiken om het volledige onboardingproces voor een nieuwe klant in je netwerk te creëren en hoe je dat met Zapier doet.

Het eindpunt gebruikt de POST-methode en wordt aangeroepen via de URL _**https://yoursite.com/wp-json/wu/v2/register**_. In deze oproep worden 4 processen uitgevoerd binnen je netwerk:

* Een nieuwe WordPress-gebruiker of diens identificatie via de gebruikers-ID wordt aangemaakt.
* Een nieuwe Klant in Ultimate Multisite of diens identificatie via de klant-ID wordt aangemaakt.
* Een nieuwe site op het WordPress-netwerk wordt aangemaakt.
* Uiteindelijk wordt een nieuwe Lidmaatschap in Ultimate Multisite aangemaakt.

Voor dit proces heb je je API-gegevens nodig. Om ze te verkrijgen, ga je naar het netwerkadminpaneel, navigeer je naar **Ultimate Multisite > Settings** > **API & Webhooks**, en zoek je naar de sectie API Settings.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzcShcSVgI.png)  
Selecteer de **Enable API** en verkrijg je API-gegevens.

Nu gaan we het eindpunt verkennen en vervolgens een registratieactie in Zapier maken.

## Endpoint body parameters

Laten we een overzicht krijgen van de minimale informatie die we naar het eindpunt moeten sturen. Aan het einde van dit artikel vind je de volledige oproep.

### Customer

Dit is de informatie die nodig is voor het proces van het aanmaken van de Gebruiker en de Ultimate Multisite Klant:

```json
"customer_id" : integer

It is possible to send the customer ID created in your network. If not submitted, the information below will be used to create a new customer and a new WordPress user. The user ID can also be sent in the same manner as the customer ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },
```

### **Membership**

De enige informatie die we nodig hebben binnen dit object is Membership Status.

```json
"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },
```

### **Products**

Products worden gegeven als een array met 1 of meer product-ID's uit je netwerk. Let op, dit eindpunt maakt geen producten aan. Controleer de documentatie van Ultimate Multisite om het productcreatie-eindpunt beter te begrijpen.

**"products" : [1,2],**

### Payment

Net als bij Membership hebben we alleen de status nodig.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

En om het lichaam af te sluiten hebben we de URL en Titel van de site nodig, beide binnen het Site-object.

**"site" : { "site_url" : "string", "site_title" : "string" }**

De terugkeer van het register-eindpunt zal een array zijn met de nieuw aangemaakte lidmaatschapinformatie.

## Creating an action in Zapier

Met de introductie van dit nieuwe en robuustere accountcreatie-eindpunt krijg je ook toegang tot een nieuwe actie in Zapier.

Weet je hoe je alles kunt gebruiken en genieten van wat de nieuwe versie van Zapier biedt? Leer hier meer. (link?)

### Creating an action

Om beter te illustreren hoe je het registratie-eindpunt met Zapier kunt gebruiken, laten we een integratie maken met Google Forms. Elke keer dat dit formulier wordt ingevuld en de informatie wordt opgeslagen in het antwoordblad van het formulier, wordt er een nieuw lidmaatschap aangemaakt in het Ultimate Multisite-netwerk.

Maak in Google Forms een formulier met de minimale velden die nodig zijn om een nieuw lidmaatschap in het netwerk aan te maken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xaVRQkloWg.png)

Nu maak je in Zapier een nieuwe Zap en verbind je het gemaakte formulier in Google via het spreadsheet waar de gegevens zijn opgeslagen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-67iVl1XK46.png)

Klaar! Het Google Forms-formulier is verbonden met Zapier en klaar om te integreren met het netwerk. Laten we nu doorgaan naar de actie die voortkomt uit de trigger die Google Forms elke keer activeert wanneer het wordt ingevuld.

Zoek de nieuwe Ultimate Multisite-app en selecteer deze. Voor dit soort Zap kies je de Register-optie.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hq2yHGYR31.png)

Na deze eerste stap kies je het account dat met deze Zap wordt verbonden.![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BuyTLt0JUM.png)

Dit is het meest gevoelige deel van het hele proces. We moeten de velden die uit Google Forms komen afstemmen op de minimale velden die nodig zijn voor het register-eindpunt, zoals getoond in het vorige gedeelte van dit artikel.

In dit voorbeeld hoeven we alleen de gebruikersnaam, e-mailadres, wachtwoord, naam en URL van de website te configureren. De rest blijft vooraf bepaald zodat alle lidmaatschappen die via dit Google Forms worden gegenereerd hetzelfde product- en statuspatroon volgen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4pjTVOmauz.png)

Met de opgegeven informatie ga je verder met de laatste test. Op het laatste scherm zie je alle velden die naar het eindpunt worden verzonden, hun respectievelijke informatie en de velden die leeg worden verzonden.![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fD2A9dYbDs.png)

Test je nieuwe Zap en het zou succesvol moeten voltooien. Als er een fout optreedt, controleer dan alle velden en of ze correct worden verzonden. Omdat er veel informatie is, kunnen sommige dingen onopgemerkt blijven.

### Complete endpoint parameters

Hier is de volledige oproep en alle mogelijkheden van velden die kunnen worden verzonden.

```json
"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
```
