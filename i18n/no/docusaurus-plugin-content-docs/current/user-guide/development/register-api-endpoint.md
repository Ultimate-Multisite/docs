---
title: Registrer API-endepunkt
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API-endepunktet {#the-ultimate-multisite-register-api-endpoint}

I denne veiledningen lærer du hvordan du bruker Ultimate Multisite /register API-endepunktet til å opprette hele onboarding-prosessen for en ny kunde i nettverket ditt, og hvordan du gjør det med Zapier.

Endepunktet bruker POST-metoden og kalles av URL-en _**https://yoursite.com/wp-json/wu/v2/register**_. I dette kallet vil 4 prosesser bli utført i nettverket ditt:

  * En ny WordPress-bruker eller identifiseringen av den via bruker-ID-en vil bli opprettet.

  * En ny kunde i Ultimate Multisite eller identifiseringen av den via kunde-ID-en vil bli opprettet.

  * Et nytt nettsted på WordPress-nettverket vil bli opprettet.

  * Til slutt vil et nytt medlemskap i Ultimate Multisite bli opprettet.

For denne prosessen trenger du API-legitimasjonen din. For å få den går du til administrasjonspanelet for nettverket, navigerer til **Ultimate Multisite > Settings** > **API & Webhooks,** og ser etter API Settings-seksjonen.

![API Settings-seksjon i Ultimate Multisite](/img/config/settings-api.png)

Her er en full visning av API-innstillingssiden:

![Full API-innstillingsside](/img/config/settings-api-full.png)

Velg **Enable API** og hent API-legitimasjonen din.

La oss nå utforske endepunktet og deretter opprette en registreringshandling i Zapier.

## Parametere for endepunktets body {#endpoint-body-parameters}

La oss få en oversikt over minimumsinformasjonen vi må sende til endepunktet. På slutten av denne artikkelen finner du hele kallet.

### Kunde {#customer}

Dette er informasjonen som er nødvendig for prosessen med å opprette brukeren og Ultimate Multisite-kunden:

"customer_id" : integer

Det er mulig å sende kunde-ID-en som er opprettet i nettverket ditt. Hvis den ikke sendes inn, vil informasjonen nedenfor bli brukt til å opprette en ny kunde og en ny WordPress-bruker. Bruker-ID-en kan også sendes på samme måte som kunde-ID-en.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Medlemskap** {#membership}

Den eneste informasjonen vi trenger inne i dette objektet, er medlemskapsstatus.

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkter** {#products}

Produkter gis som en array med 1 eller flere produkt-ID-er fra nettverket ditt. Merk at dette endepunktet ikke oppretter produkter. Sjekk dokumentasjonen til Ultimate Multisite for å forstå endepunktet for produktopprettelse bedre.

**"products" : [1,2],**

### Betaling {#payment}

Som med medlemskap trenger vi bare statusen.

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Nettsted {#site}

Og for å avslutte body trenger vi nettstedets URL og tittel, begge inne i nettsted-objektet.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Returen fra register-endepunktet vil være en array med den nyopprettede medlemskapsinformasjonen.

## Opprette en handling i Zapier {#creating-an-action-in-zapier}

Med introduksjonen av dette nye og mer robuste endepunktet for kontoopprettelse får du også tilgang til en ny handling i Zapier.

Vet du hvordan du bruker og får glede av alt den nye versjonen av Zapier tilbyr? Lær mer her. (lenke?)

### Opprette en handling {#creating-an-action}

For å illustrere bedre hvordan du bruker registreringsendepunktet med Zapier, la oss opprette en integrasjon med Google Forms. Hver gang dette skjemaet fylles ut og informasjonen lagres i skjemaets svarark, vil et nytt medlemskap bli opprettet i Ultimate Multisite-nettverket.

I Google Forms lager du et skjema med minimumsfeltene som er nødvendige for å opprette et nytt medlemskap i nettverket.

<!-- Skjermbilde utilgjengelig: Google Forms-skjema med felt for å opprette et nytt medlemskap -->

Nå i Zapier lager du en ny Zap og kobler til det opprettede skjemaet i Google gjennom regnearket der dataene lagres.

<!-- Skjermbilde utilgjengelig: Zapier-triggerkonfigurasjon som kobler til Google Forms-regneark -->

Ferdig! Google Forms-skjemaet er koblet til Zapier og klart til å integreres med nettverket. La oss nå gå videre til handlingen som vil følge av triggeren som Google Forms utløser hver gang det fylles ut.

Finn den nye Ultimate Multisite-appen og velg den. For denne typen Zap velger du Register-alternativet.

<!-- Skjermbilde utilgjengelig: Zapier-handlingsvalg som viser Ultimate Multisite-app med Register-alternativ -->

Etter dette første trinnet velger du Account som skal kobles til denne Zap.<!-- Skjermbilde utilgjengelig: Zapier-kontotilkoblingstrinn for Ultimate Multisite -->

Dette er den mest sensitive delen av hele prosessen. Vi må matche feltene som kom fra Google Forms med minimumsfeltene som er nødvendige for register-endepunktet, som vist i forrige seksjon av denne artikkelen.

I dette eksemplet trenger vi bare å konfigurere brukernavn, e-post, passord, navn og URL for nettstedet. Resten er forhåndsbestemt slik at alle medlemskap som genereres på dette Google Forms-skjemaet, følger samme produkt- og statusmønster.

<!-- Skjermbilde utilgjengelig: Zapier-feltmapping mellom Google Forms og Ultimate Multisite register-endepunkt -->

Når informasjonen er satt opp, fortsetter du til den endelige testen. På den siste skjermen kan du se alle feltene som vil bli sendt til endepunktet, den respektive informasjonen deres og feltene som vil bli sendt tomme.<!-- Skjermbilde utilgjengelig: Zapier-testskjerm som viser alle felt som skal sendes til register-endepunktet -->

Test din nye Zap, og den skal fullføres uten problemer. Hvis det oppstår en feil, sjekk alle felt og om de sendes riktig. Siden det er mye informasjon, kan enkelte ting gå ubemerket hen.

### Fullstendige endepunktparametere {#complete-endpoint-parameters}

Her er det fullstendige kallet og alle mulighetene for felt som kan sendes.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
