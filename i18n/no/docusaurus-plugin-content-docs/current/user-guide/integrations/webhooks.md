---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# En første titt på webhooks (v2)

_**MERK: Denne funksjonen eller artikkelen er beregnet på avanserte brukere.**_

En **webhook** er en måte for en app eller programvare som Ultimate Multisite å gi andre applikasjoner informasjon i sanntid. En webhook leverer data eller nyttelast til andre applikasjoner når det skjer, noe som betyr at du **får data umiddelbart.**

Dette er nyttig hvis du trenger å integrere eller overføre bestemte data fra Ultimate Multisite til et annet CRM-system eller lignende hver gang en hendelse utløses. For eksempel kan det være at du må sende brukerens navn og e-postadresse til en e-postliste hver gang en ny brukerkonto opprettes.

## Slik oppretter du en webhook

For å opprette en webhook, gå til nettverksadministrasjonspanelet ditt. Klikk på **Ultimate Multisite > Webhooks > Add New Webhook.**

![Webhooks-listeside med Add New Webhook-knapp](/img/admin/webhooks-list.png)

Når du oppretter en ny webhook, blir du bedt om informasjon som **Name, URL** og **Event**. Du kan bruke hvilket som helst navn du vil for webhooken din. De viktigste feltene er URL og Event.

![Nytt webhook-skjema med feltene Name, URL og Event](/img/admin/webhooks-list.png)

URL er **endepunktet eller destinasjonen** som Ultimate Multisite vil sende **nyttelasten eller dataene** til. Dette er applikasjonen som vil motta dataene.

Zapier er den vanligste løsningen som brukere benytter for å gjøre integrasjon med tredjepartsapplikasjoner enklere. Uten en plattform som Zapier må du manuelt opprette en egendefinert funksjon som fanger opp dataene og behandler dem. Se denne artikkelen om **hvordan du bruker Ultimate Multisite-webhook med Zapier.**

I denne artikkelen skal vi se på det grunnleggende konseptet for hvordan en webhook fungerer og hvilke hendelser som er tilgjengelige i Ultimate Multisite. Vi vil bruke et tredjepartsnettsted som heter [requestbin.com](https://requestbin.com/). Dette nettstedet lar oss opprette et endepunkt og fange opp nyttelasten uten å skrive noe kode. _**Ansvarsfraskrivelse: alt det gjør er å vise oss at dataene er mottatt.**_ Det vil ikke være noen behandling eller noen form for handling utført på nyttelasten.

Gå til [requestbin.com](https://requestbin.com/) og klikk Create Request Bin.

![RequestBin-nettsted med Create Request Bin-knapp](/img/admin/webhooks-list.png)

Etter at du klikker på den knappen, vil den be deg om å logge inn hvis du allerede har en konto, eller registrere deg. Hvis du allerede har en konto, kommer du rett til dashboardet deres. På dashboardet vil du umiddelbart se endepunktet eller URL-en du kan bruke når du oppretter din Ultimate Multisite-webhook.

![RequestBin-dashboard som viser endepunkt-URL](/img/admin/webhooks-list.png)

Kopier URL-en og gå tilbake til Ultimate Multisite. Lim inn endepunktet i URL-feltet og velg en hendelse fra nedtrekkslisten. I dette eksempelet velger vi **Payment Received**.

Denne hendelsen utløses hver gang en bruker foretar en betaling. Alle tilgjengelige hendelser, beskrivelsene deres og nyttelaster er listet opp nederst på siden. Klikk på **Add New Webhook**-knappen for å lagre webhooken.

![Webhook konfigurert med Payment Received-hendelse](/img/admin/webhooks-list.png)

Vi kan nå sende en testhendelse til endepunktet for å se om webhooken vi opprettet fungerer. Vi gjør dette ved å klikke på **Send Test Event** under webhooken vi opprettet.

![Send Test Event-valg under webhooken](/img/admin/webhooks-list.png)

Dette viser et bekreftelsesvindu som sier at testen var vellykket.

![Bekreftelse på vellykket webhook-testhendelse](/img/admin/webhooks-list.png)

Nå, hvis vi går tilbake til _Requestbin_-nettstedet, vil vi se at nyttelasten er mottatt med noen testdata.

![RequestBin som viser mottatte webhook-nyttelastdata](/img/admin/webhooks-list.png)

Dette er det grunnleggende prinsippet for hvordan webhooks og endepunkter fungerer. Hvis du skal opprette et egendefinert endepunkt, må du lage en egendefinert funksjon for å behandle dataene du mottar fra Ultimate Multisite.
