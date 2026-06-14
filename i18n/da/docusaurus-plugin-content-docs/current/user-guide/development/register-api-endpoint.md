---
title: Registrer API-endepunkt
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# API-endepunktet til Ultimate Multisite Register

I denne tutorial lærer du, hvordan du bruger Ultimate Multisite /register API-endepunktet til at oprette hele onboarding-processen for en ny kunde i dit netværk, og hvordan du gør det med Zapier.

Endepunktet bruger POST-metoden og kaldes via URL'en _**https://yoursite.com/wp-json/wu/v2/register**_. I denne kald udføres 4 processer inden for dit netværk:

  * En ny WordPress-bruger eller dens identifikation gennem bruger-ID'et oprettes.

  * En ny Kunde i Ultimate Multisite eller dens identifikation gennem kunde-ID'et oprettes.

  * En ny side på WordPress-netværket oprettes.

  * Til sidst oprettes et nyt Medlemskab i Ultimate Multisite.

For denne proces skal du bruge dine API-credentials. For at få dem, gå til dit netværksadministratorpanel, navigér til **Ultimate Multisite > Indstillinger** > **API & Webhooks**, og se efter sektionen API Settings.

![API Settings sektion i Ultimate Multisite](/img/config/settings-api.png)

Her er et fuldt overblik over API-indstillingssiden:

![API settings fuld side](/img/config/settings-api-full.png)

Vælg **Enable API** og få dine API-credentials.

Nu skal vi udforske endepunktet og derefter oprette en registreringshandling i Zapier.

## Endepunktskroppeparametre

Lad os have et overblik over de minimumsinformation, vi skal sende til endepunktet. I slutningen af denne artikel finder du det fulde kald.

### Kunde

Dette er oplysningerne, der er nødvendige for processen med at oprette Brugeren og Ultimate Multisite-Kunden:

"customer_id" : integer

Det er muligt at sende kunden ID'et, der er oprettet i dit netværk. Hvis det ikke sendes med, vil følgende information blive brugt til at oprette en ny kunde og en ny WordPress-bruger. Bruger-ID'et kan også sendes på samme måde som kundens ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Medlemskab**

Den eneste information, vi har brug for inde i dette objekt, er Medlemskabets Status.

"membership" { "status" : "string", // en af "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkter**

Produkter får en array med 1 eller flere produkt-ID'er fra dit netværk. Vær opmærksom på, at denne endpoint ikke opretter produkter. Tjek Ultimate Multisites dokumentation for bedre at forstå produktoprettelses-endpointet.

**"products" : [1,2],**

### Betaling

Ligesom med Medlemskab har vi kun brug for status.

**"payment" { "status" : "string", // en af "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

Og for at afslutte kroppen skal vi have sidens URL og Titel, begge inde i Site-objektet.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Tilbagevendelsen fra register-endpointet vil være en array med de nyoprettede medlemsinformationer.

## Oprettelse af en handling i Zapier

Med introduktionen af denne nye og mere robuste kontooprettelses-endpoint får du også adgang til en ny handling i Zapier.

Ved du hvordan du bruger og nyder alt, den nye version af Zapier tilbyder? Læs mere her. (link?)

### Oprettelse af en handling

For bedre at illustrere, hvordan du bruger registreringsendepunktet med Zapier, opretter vi en integration med Google Forms. Hver gang dette formular udfyldes og informationen gemmes i formularens svarark, vil et nyt medlem blive oprettet i Ultimate Multisite-netværket.

I Google Forms skal du oprette et formular med de mindst nødvendige felter til at oprette et nyt medlem i netværket.

<!-- Skærmbillede utilgængeligt: Google Form med felter til at oprette et nyt medlem -->

Nu opretter du en ny Zapier-workflow (Zap) og forbinder det oprettede form i Google via regnearket, hvor data gemmes.

<!-- Skærmbillede utilgængeligt: Zapier triggerkonfiguration der forbinder til Google Forms regneark -->

Færdig! Google Forms-formularen er forbundet med Zapier og klar til at blive integreret med netværket. Lad os nu gå videre til Handlingen (Action), som vil ske som resultat af Triggeren, som Google Forms udløser hver gang det udfyldes.

Find Ultimate Multisite-appen og vælg den. Til denne type Zap skal du vælge "Register"-muligheden.

<!-- Skærmbillede utilgængeligt: Zapier handlingsoversigt der viser Ultimate Multisite-app med Register-mulighed -->

Efter dette første skridt vælger du kontoen, som skal forbindes med denne Zap.<!-- Skærmbillede utilgængeligt: Trin til kontoforbindelse i Zapier for Ultimate Multisite -->

Dette er den mest følsomme del af hele processen. Vi skal matche felterne fra Google Forms med de mindst nødvendige felter for registreringsendepunktet, som vist i den foregående sektion i denne artikel.

I dette eksempel skal vi kun konfigurere brugernavn, e-mail, adgangskode, navn og websitrens URL. Resten er forudbestemt, så alle medlemskaber genereret fra dette Google Form følger samme produkt- og statusmønster.

<!-- Skærmbillede utilgængeligt: Zapier feltmapping mellem Google Forms og Ultimate Multisite registrerings-endpoint -->

Når informationerne er sat op, skal du gå videre til den sidste test. På det sidste skærm kan du se alle felterne, der bliver sendt til endpoint'et, deres respektive informationer samt de felter, der bliver sendt tomme.<!-- Skærmbillede utilgængeligt: Zapier testskærm, der viser alle felter, der skal sendes til registrerings-endpoint -->

Test din nye Zap, og den bør gennemføre succesfuldt. Hvis der opstår en fejl, tjek alle felterne for at se, om de bliver sendt korrekt. Da der er meget information, kan nogle ting gå ubeskrevne.

### Complete endpoint parametre

Her er det komplette kald og alle muligheder for felter, der kan sendes.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // en af "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // en af "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
