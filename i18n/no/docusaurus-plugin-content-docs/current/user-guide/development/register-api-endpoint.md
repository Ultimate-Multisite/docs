---
title: Registrer API-endepunkt
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# API-endepunktet /register i Ultimate Multisite

I denne veiledningen lærer du hvordan du bruker API-endepunktet /register i Ultimate Multisite til å bygge hele innføringsprosessen for en ny kunde i nettverket ditt, og hvordan du gjør dette med Zapier.

Endepunktet bruker POST-metoden og kalles via URL-en _**https://yoursite.com/wp-json/wu/v2/register**_. Ved dette kallet utføres fire prosesser i nettverket ditt:

  * En ny WordPress-bruker opprettes, eller en eksisterende bruker identifiseres via bruker-ID.

  * En ny kunde i Ultimate Multisite opprettes, eller en eksisterende kunde identifiseres via kunde-ID.

  * Et nytt nettsted opprettes i WordPress-nettverket.

  * Til slutt opprettes et nytt medlemskap i Ultimate Multisite.

For denne prosessen trenger du API-legitimasjonen din. Du finner den ved å gå til nettverksadministrasjonspanelet, navigere til **Ultimate Multisite > Innstillinger** > **API og Webhooks**, og se etter seksjonen for API-innstillinger.

![Seksjonen for API-innstillinger i Ultimate Multisite](/img/config/settings-api.png)  
Velg **Aktiver API** og hent API-legitimasjonen din.

La oss nå utforske endepunktet og deretter opprette en registreringshandling i Zapier.

## Parametere i forespørselskroppen

La oss se på minimumsinformasjonen vi må sende til endepunktet. På slutten av denne artikkelen finner du det fullstendige kallet.

### Kunde

Dette er informasjonen som trengs for å opprette brukeren og Ultimate Multisite-kunden:

"customer_id" : integer

Det er mulig å sende kunde-ID-en som er opprettet i nettverket ditt. Hvis den ikke sendes, brukes informasjonen nedenfor til å opprette en ny kunde og en ny WordPress-bruker. Bruker-ID kan også sendes på samme måte som kunde-ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Medlemskap**

Den eneste informasjonen vi trenger i dette objektet er medlemskapsstatus.

"membership" { "status" : "string", // en av "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Produkter**

Produkter angis som en matrise med én eller flere produkt-ID-er fra nettverket ditt. Merk at dette endepunktet ikke oppretter produkter. Se dokumentasjonen for Ultimate Multisite for å forstå endepunktet for produktoppretting bedre.

**"products" : [1,2],**

### Betaling

Som med medlemskap trenger vi bare statusen.

**"payment" { "status" : "string", // en av "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Nettsted

For å avslutte forespørselskroppen trenger vi nettstedets URL og tittel, begge inne i Site-objektet.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Svaret fra register-endepunktet vil være en matrise med informasjon om det nyopprettede medlemskapet.

## Opprette en handling i Zapier

Med introduksjonen av dette nye og mer robuste endepunktet for kontooppretting får du også tilgang til en ny handling i Zapier.

Vet du hvordan du bruker og får mest mulig ut av alt den nye versjonen av Zapier tilbyr? Lær mer her. (link?)

### Opprette en handling

For å illustrere hvordan du bruker registreringsendepunktet med Zapier, skal vi lage en integrasjon med Google Forms. Hver gang dette skjemaet fylles ut og informasjonen lagres i skjemaets svarark, opprettes et nytt medlemskap i Ultimate Multisite-nettverket.

I Google Forms lager du et skjema med minimumsfeltene som trengs for å opprette et nytt medlemskap i nettverket.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Nå i Zapier lager du en ny Zap og kobler til det opprettede skjemaet i Google via regnearket der dataene lagres.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Ferdig! Google Forms-skjemaet er koblet til Zapier og klart til å integreres med nettverket. La oss nå gå videre til handlingen som utløses av triggeren som Google Forms aktiverer hver gang skjemaet fylles ut.

Finn den nye Ultimate Multisite-appen og velg den. For denne typen Zap velger du Register-alternativet.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Etter dette første steget velger du kontoen som skal kobles til denne Zap-en.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Dette er den mest følsomme delen av hele prosessen. Vi må matche feltene fra Google Forms med minimumsfeltene som kreves for register-endepunktet, som vist i forrige del av denne artikkelen.

I dette eksempelet trenger vi bare å konfigurere brukernavn, e-post, passord, navn og URL for nettstedet. Resten er forhåndsbestemt slik at alle medlemskap som genereres fra dette Google Forms-skjemaet følger samme produkt- og statusmønster.

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

Når informasjonen er satt opp, går du videre til den endelige testen. På den siste skjermen kan du se alle feltene som sendes til endepunktet, tilhørende informasjon og feltene som sendes tomme.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Test den nye Zap-en din, og den skal fullføres uten problemer. Hvis det oppstår feil, kontroller alle feltene og at de sendes riktig. Siden det er mye informasjon, kan noe lett bli oversett.

### Fullstendige endepunktparametere

Her er det fullstendige kallet og alle mulige felt som kan sendes.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // en av "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // en av "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
