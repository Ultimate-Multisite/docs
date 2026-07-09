---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# En første titt på Webhooks (v2)

_**OBS: Merk at denne funksjonen eller artikkelen er for avanserte brukere.**_

En **webhook** er en måte for en app eller programvare som Ultimate Multisite å gi andre applikasjoner informasjon i sanntid. En webhook leverer data eller payloads til andre applikasjoner idet det skjer, noe som betyr at du **får data umiddelbart.**

Dette er nyttig hvis du trenger å integrere eller sende bestemte data fra Ultimate Multisite til en annen CRM eller et annet system hver gang en hendelse utløses. For eksempel må du sende brukerens navn og e-postadresse til en e-postliste hver gang en ny brukerkonto opprettes.

## Slik oppretter du en webhook

For å opprette en webhook går du til nettverkets admin-dashboard. Klikk på **Ultimate Multisite > Webhooks > Legg til ny Webhook.**

![Tom Webhooks-liste-side med Legg til ny Webhook-knapp](/img/admin/webhooks-list-empty.png)

Du kan deretter redigere webhook-konfigurasjonen:

![Legg til ny Webhook-skjema med feltene Navn, Hendelse og URL](/img/admin/webhook-add-modal.png)

Når du oppretter en ny webhook, blir du bedt om informasjon som **Navn, URL,** og **Hendelse**. Du kan bruke hvilket som helst navn du vil for webhooken din. De viktigste feltene er URL og Hendelse.

![Webhook-redigeringsgrensesnitt som viser URL-feltet og forhåndsvisning av payload](/img/admin/webhook-url-field.png)

URL er **endpointen eller destinasjonen** som Ultimate Multisite vil sende **payload eller data** til. Dette er applikasjonen som vil motta dataene.

Zapier er den vanligste løsningen brukere bruker for å gjøre integrasjon med tredjepartsapplikasjoner enklere. Uten en plattform som Zapier må du manuelt opprette en tilpasset funksjon som fanger opp dataene og behandler dem. Se denne artikkelen om **hvordan du bruker Ultimate Multisite webhook med Zapier.**

I denne artikkelen ser vi på det grunnleggende konseptet for hvordan en webhook fungerer, og hendelsene som er tilgjengelige i Ultimate Multisite. Vi kommer til å bruke et tredjepartsnettsted kalt [requestbin.com](https://requestbin.com/). Dette nettstedet lar oss opprette en endpoint og fange opp payloaden uten å skrive kode. _**Ansvarsfraskrivelse: alt den vil gjøre, er å vise oss at dataene er mottatt.**_ Det vil ikke bli gjort noen behandling eller noen form for handling med payloaden.

Gå til [requestbin.com](https://requestbin.com/) og klikk på Opprett Request Bin.

Etter at du har klikket på den knappen, blir du bedt om å logge inn hvis du allerede har en konto, eller registrere deg. Hvis du allerede har en konto, fører den deg rett til dashboardet deres. På dashboardet deres vil du umiddelbart se endpointen eller URL-en du kan bruke når du oppretter Ultimate Multisite-webhooken din.

Kopier URL-en og gå tilbake til Ultimate Multisite. Plasser endpointen i URL-feltet og velg en hendelse fra nedtrekkslisten. I dette eksempelet velger vi **Betaling mottatt**.

Denne hendelsen utløses hver gang en bruker foretar en betaling. Alle tilgjengelige hendelser, beskrivelsen deres og payloads er oppført nederst på siden. Klikk på **Legg til ny Webhook**-knappen for å lagre webhooken.

![Webhook-hendelsesnedtrekk med Betaling mottatt valgt](/img/admin/webhook-event-picker.png)

Vi kan nå sende en testhendelse til endpointen slik at vi kan se om webhooken vi opprettet fungerer. Vi kan gjøre dette ved å klikke på **Send testhendelse** under webhooken vi opprettet.

![Webhooks-liste som viser én konfigurert webhook og Send test-handling](/img/admin/webhooks-list-populated.png)

Dette viser et bekreftelsesvindu som sier at testen var vellykket.

![Resultat av webhook-testhendelse etter sending av en test-payload](/img/admin/webhook-test-result.png)

Hvis vi nå går tilbake til _Requestbin_-nettstedet, vil vi se at payloaden er mottatt og inneholder noen testdata.

Dette er det grunnleggende prinsippet for hvordan webhooks og endepunkter fungerer. Hvis du skal opprette et tilpasset endepunkt, må du opprette en tilpasset funksjon for å behandle dataene du mottar fra Ultimate Multisite.
