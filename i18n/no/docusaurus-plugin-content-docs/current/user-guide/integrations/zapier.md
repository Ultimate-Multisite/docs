---
title: Zapier-integrasjon
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integrere Ultimate Multisite med Zapier

I en av artiklene diskuterte vi [Webhooks](webhooks.md) og hvordan de kan brukes til å integrere med tredjepartsapplikasjoner.

Å bruke webhooks er litt komplisert siden det krever avansert kunnskap om koding og håndtering av payloads. Med **Zapier** kan du unngå dette.

Zapier har integrasjon med over 5000+ apper, noe som gjør kommunikasjonen mellom ulike applikasjoner enklere.

Du kan opprette **Triggers** som utløses når hendelser skjer på nettverket ditt (f.eks. når en konto opprettes og utløser account_create-hendelsen), eller generere **Actions** på nettverket ditt som reaksjon på eksterne hendelser (f.eks. opprette et nytt kontomedlemskap i Ultimate Multisite-nettverket ditt).

Dette er mulig fordi **Ultimate Multisite Zapiers triggers** og actions drives av [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Slik kommer du i gang

Først søker du etter Ultimate Multisite i Zapiers appliste. Alternativt kan du klikke på [denne lenken](https://zapier.com/apps/wp-ultimo/integrations).

Gå til dashboardet ditt og trykk på **+** **Create Zap**-knappen i venstre sidefelt for å sette opp en ny Zap.

![Zapier-dashboard med Create Zap-knapp](/img/admin/webhooks-list.png)

Du blir videresendt til siden for opprettelse av Zap.

Skriv «wp ultimo» i søkeboksen. Klikk for å velge **Beta**-versjonen.

![Søke etter WP Ultimo i Zapiers appliste](/img/admin/webhooks-list.png)

Etter at du har valgt appen vår, velger du den tilgjengelige hendelsen: **New Ultimate Multisite Event**.

![Velge New Ultimate Multisite Event-trigger](/img/admin/webhooks-list.png)

Nå må vi gi Zapier tilgang til **nettverket ditt**. Ved å klikke på **Sign in** åpnes et nytt vindu som ber om **API-legitimasjonen**.

![Zapier Sign in-melding for API-legitimasjon](/img/admin/webhooks-list.png)

Gå til adminpanelet for nettverket ditt og naviger til **Ultimate Multisite > Settings** > **API & Webhooks** og finn API Settings-seksjonen.

Velg alternativet **Enable API** siden det er nødvendig for at denne tilkoblingen skal fungere.

![API Settings med Enable API-alternativ i Ultimate Multisite](/img/admin/webhooks-list.png)

Bruk **Copy to Clipboard**-ikonet på API Key- og API Secret-feltene og lim inn disse verdiene på integrasjonsskjermen.

I URL-feltet skriver du inn den fullstendige URL-en til nettverket ditt, inkludert protokollen (HTTP eller HTTPS).

![Zapier-integrasjonsskjerm med API Key-, Secret- og URL-felter](/img/admin/webhooks-list.png)

Klikk på **Yes, Continue**-knappen for å gå videre til neste steg. Hvis alt fungerer som det skal, blir du møtt av din nye tilkoblede konto! Klikk på **Continue** for å opprette en ny trigger.

## Slik oppretter du en ny Trigger

Nå som kontoen din er tilkoblet, kan du se tilgjengelige hendelser. La oss velge **payment_received**-hendelsen for denne veiledningen.

![Velge payment_received-hendelse i Zapier-trigger](/img/admin/webhooks-list.png)

Når hendelsen er valgt og du klikker på **continue**, vises et **teststeg**.

![Zapier-teststeg for triggeren](/img/admin/webhooks-list.png)

I dette steget tester Zapier om Zap-en din kan **hente den spesifikke payloaden for den hendelsen**. Ved fremtidige hendelser av samme type vil informasjon med samme struktur bli sendt.

![Zapier-triggertest fullført med payload](/img/admin/webhooks-list.png)

I vår veiledning ble testen **fullført** og returnerte eksempelinformasjonen fra payloaden. Denne eksempelinformasjonen vil være nyttig som veiledning når vi oppretter actions. Triggeren din er nå opprettet og klar til å kobles til andre applikasjoner.

## Slik oppretter du Actions

Actions bruker informasjon fra andre triggers til å opprette nye oppføringer i nettverket ditt.

I **steget for opprettelse av action** velger du Ultimate Multisite **Beta** og alternativet **Create Items on Ultimate Multisite**.

![Opprette en action med Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

I neste steg oppretter du enten en ny autentisering, akkurat som vi gjorde i **Slik kommer du i gang**, eller velger en eksisterende autentisering. I denne veiledningen velger vi den samme autentiseringen vi opprettet tidligere.

![Velge autentisering for Zapier-action](/img/admin/webhooks-list.png)

### Sette opp Action

Dette er **hovedsteget i action-oppsettet**, og her er ting litt annerledes. Den første informasjonen du velger er **Item**. Item er **informasjonsmodellen** i nettverket ditt, som **Customers, Payments, Sites, Emails** og andre.

![Velge Item-type for Zapier-action](/img/admin/webhooks-list.png)

Når du velger et item, **tilpasses skjemaet for å vise de obligatoriske og valgfrie feltene** for det valgte elementet.

For eksempel, når du velger item-typen **Customer**, vil skjemafeltene vise alt som er nødvendig å fylle ut for å opprette en ny kunde i nettverket.

![Customer-item-felter i Zapier-action-oppsett](/img/admin/webhooks-list.png)

Etter at du har fylt ut alle felt merket som **required** og klikket på continue, vises en siste skjerm med de utfylte feltene og feltene som ble stående tomme.

![Zapier-action-test som viser utfylte og tomme felter](/img/admin/webhooks-list.png)

Så snart testen din er fullført og vellykket, er action-en din konfigurert. Det er også viktig å sjekke i nettverket ditt om elementet ble opprettet med testen av action-en din.
