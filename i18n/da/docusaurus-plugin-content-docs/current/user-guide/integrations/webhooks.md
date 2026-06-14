---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Et første blik på webhooks (v2)

_**OPMÆRKSOM: Bemærk venligst, at denne funktion eller artikel er til avancerede brugere.**_

En **webhook** er en måde for en app eller software som Ultimate Multisite at give andre apps realtidsinformation. En webhook leverer data eller payloads til andre apps, så snart de sker, hvilket betyder, at du **får data med det samme**.

Dette er nyttigt, hvis du skal integrere eller sende visse data fra Ultimate Multisite til et andet CRM eller system hver gang en begivenhed udløses. For eksempel skal du sende brugerens navn og e-mailadresse til en mailingliste hver gang en ny brugerkonto oprettes.

## Sådan opretter du en webhook

For at oprette en webhook skal du gå til dit netværksadministrator dashboard. Klik på **Ultimate Multisite > Webhooks > Tilføj ny webhook**.

![Tom liste over webhooks med knappen Tilføj ny webhook](/img/admin/webhooks-list-empty.png)

Derefter kan du redigere webhook-konfigurationen:

![Tilføj ny webhook formular med felterne Navn, Begivenhed og URL](/img/admin/webhook-add-modal.png)

Når du opretter en ny webhook vil du blive bedt om information som **Navn, URL** og **Begivenhed**. Du kan bruge et hvilket som helst navn til din webhook. De vigtigste felter er dog URL'en og Begivenheden.

![Webhook redigeringsgrænseflade der viser URL-feltet og payload preview](/img/admin/webhook-url-field.png)

URL'en er **endpoint eller destination**, som Ultimate Multisite vil sende **payload eller data** til. Det er applikationen, der modtager dataene.

Zapier er den mest almindelige løsning, som brugere bruger til at gøre integration med tredjepartsapps lettere. Uden en platform som Zapier skal du manuelt oprette en custom funktion, der fanger og behandler dataene. Se denne artikel om **hvordan man bruger Ultimate Multisite webhook med Zapier**.

I denne artikel kigger vi på det grundlæggende koncept med, hvordan en webhook fungerer, og hvilke events der er tilgængelige i Ultimate Multisite. Vi vil bruge en tredjepartsplatform kaldet [requestbin.com](https://requestbin.com/). Denne side lader os oprette et endpoint og fange payload'en uden at skulle kode noget. _**Ansvarsfraskrivelse: alt, den gør, er at vise os, at data har været modtaget.**_ Der vil ikke blive foretaget nogen behandling eller handling på payload'en.

Gå til [requestbin.com](https://requestbin.com/) og klik på Create Request Bin.

Efter at have klikket på knappen bliver du bedt om at logge ind, hvis du allerede har en konto, eller oprette en ny. Hvis du allerede har en konto, vil det føre dig direkte til dit dashboard. På deres dashboard ser du straks endpoint'en eller URL'en, du kan bruge til at oprette din Ultimate Multisite webhook.

Kopier derefter URL'en og gå tilbage til Ultimate Multisite. Indsæt endpoint'en i feltet for URL og vælg en event fra rullemenuen. I dette eksempel vælger vi **Payment Received** (Betaling modtaget).

Denne event udløses hver gang en bruger foretager et betalingstransaktion. Alle tilgængelige events, deres beskrivelser og payloads findes nederst på siden. Klik på knappen **Add New Webhook** for at gemme webhoken.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Nu kan vi sende en testevent til endpoint'en for at se, om den webhook, vi har oprettet, virker. Vi kan gøre dette ved at klikke på **Send Test Event** under den webhook, du har oprettet.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Dette viser et bekræftelsesvindue, der siger, at testen var succesfuld.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Når vi går tilbage til _Requestbin_ sitet, vil du se, at payload'en er modtaget med nogle testdata.

Dette er grundprincippet for, hvordan webhooks og endpoints fungerer. Hvis du skal oprette et custom endpoint, skal du lave en custom funktion til at behandle de data, du modtager fra Ultimate Multisite.
