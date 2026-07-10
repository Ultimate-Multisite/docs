---
title: Zapier-integrasjon
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrere Ultimate Multisite med Zapier {#integrating-ultimate-multisite-with-zapier}

I en av artiklene diskuterte vi [Webhooks](webhooks.md) og hvordan de kan brukes til å integrere med tredjepartsapplikasjoner.

Å bruke webhooks er litt komplisert, ettersom det krever avansert kunnskap om koding og å fange opp payloads. Å bruke **Zapier** er en måte å komme rundt dette på.

Zapier har integrasjon med over 5000+ apper, noe som gjør kommunikasjon mellom ulike applikasjoner enklere.

Du kan opprette **Triggers** som utløses når hendelser skjer på nettverket ditt (f.eks. at en Account opprettes og utløser account_create-hendelsen), eller generere **Actions** på nettverket ditt som reagerer på eksterne hendelser (f.eks. opprette et nytt Account membership i Ultimate Multisite-nettverket ditt).

Dette er mulig fordi **Ultimate Multisite Zapier's triggers** og actions drives av [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Slik kommer du i gang {#how-to-start}

Først søker du etter Ultimate Multisite i Zapier-applisten. Alternativt kan du klikke på [denne lenken](https://zapier.com/apps/wp-ultimo/integrations).

Gå til Dashboard og trykk på **+** **Create Zap**-knappen i venstre sidefelt for å sette opp en ny Zap.

![Zapier-Dashboard med Create Zap-knapp](/img/admin/webhooks-list.png)

Du blir omdirigert til siden for opprettelse av Zap.

Skriv "wp ultimo" i søkefeltet. Klikk for å velge alternativet **Beta**-versjonen.

![Søker etter WP Ultimo i Zapier-applisten](/img/admin/webhooks-list.png)

Etter at du har valgt appen vår, velger du den tilgjengelige hendelsen: **New Ultimate Multisite Event**.

![Velger New Ultimate Multisite Event-trigger](/img/admin/webhooks-list.png)

Nå må vi gi Zapier tilgang til **nettverket ditt**. Hvis du klikker på **Sign in**, åpnes et nytt vindu som krever **API-legitimasjon**.

![Zapier Sign in-forespørsel om API-legitimasjon](/img/admin/webhooks-list.png)

Gå til administrasjonspanelet for nettverket ditt og naviger til **Ultimate Multisite > Settings** > **API & Webhooks**, og se etter delen API Settings.

Velg alternativet **Enable API**, ettersom det kreves for at denne tilkoblingen skal fungere.

![API and Webhooks-innstillinger med API Settings- og Enable API-alternativer](/img/admin/settings-api-webhooks.png)

Bruk **Copy to Clipboard**-ikonet på feltene API Key og API Secret, og lim inn disse verdiene på integrasjonsskjermen.

I URL-feltet legger du inn full URL for nettverket ditt, inkludert protokollen (HTTP eller HTTPS).

![Zapier-integrasjonsskjerm med API Key-, Secret- og URL-felt](/img/admin/webhooks-list.png)

Klikk på **Yes, Continue**-knappen for å gå videre til neste trinn. Hvis alt fungerer, skal du bli møtt av den nye tilkoblede Account-en din! Klikk på **Continue** for å opprette en ny trigger.

## Slik oppretter du en ny Trigger {#how-to-create-a-new-trigger}

Nå som Account-en din er tilkoblet, kan du se tilgjengelige hendelser. La oss velge **payment_received**-hendelsen for denne veiledningen.

![Velger payment_received-hendelse i Zapier-trigger](/img/admin/webhooks-list.png)

Når hendelsen er valgt og du klikker på **continue**, vises et **testtrinn**.

![Zapier-testtrinn for triggeren](/img/admin/webhooks-list.png)

På dette stadiet vil Zapier teste om Zap-en din kan **hente den spesifikke payload-en for den hendelsen**. Ved fremtidige hendelser av samme type vil informasjon med samme struktur bli sendt.

![Zapier-trigger-test fullført med payload](/img/admin/webhooks-list.png)

I veiledningen vår ble testen **fullført** og returnerte eksempeldata for payload-en. Denne eksempeldataen vil være nyttig som veiledning mens vi oppretter actions. Triggeren din er nå opprettet og klar til å kobles til andre applikasjoner.

## Slik oppretter du Actions {#how-to-create-actions}

Actions bruker informasjon fra andre triggers til å opprette nye oppføringer i nettverket ditt.

I **trinnet for å opprette en action** velger du Ultimate Multisite **Beta** og alternativet **Create Items on Ultimate Multisite**.

![Oppretter en action med Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

I neste trinn oppretter du enten autentiseringen din, akkurat som vi gjorde i **Slik kommer du i gang**, eller velger en opprettet autentisering. I denne veiledningen velger vi den samme autentiseringen som tidligere ble opprettet.

![Velger autentisering for Zapier-action](/img/admin/webhooks-list.png)

### Sette opp Action {#setting-up-the-action}

Dette er **hovedtrinnet i actionen**, og her er ting litt annerledes. Den første informasjonen du velger er **Item**. Item er **informasjonsmodellen** for nettverket ditt, som **Customers, Payments, Sites, Emails** og andre.

![Velger Item-type for Zapier-action](/img/admin/webhooks-list.png)

Når du velger en item, vil skjemaet **omorganisere seg for å vise de obligatoriske og valgfrie feltene** for den valgte item-en.

For eksempel, når du velger item-en **Customer**, vil skjemafeltene vise alt som er nødvendig å fylle ut for å opprette en ny Customer i nettverket.

![Customer-item-felt i oppsett av Zapier-action](/img/admin/webhooks-list.png)

Etter at du har fylt ut alle feltene merket som **obligatoriske** og klikket på fortsett, vil et siste skjermbilde vise deg de utfylte feltene og feltene som ikke ble fylt ut.

![Zapier-action-test som viser utfylte og ikke-utfylte felt](/img/admin/webhooks-list.png)

Så snart testen din fullføres og er vellykket, er actionen din konfigurert. Det er også viktig å sjekke i nettverket ditt om item-en ble opprettet med testen av actionen din.
