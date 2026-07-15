---
title: Zapier integration
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integration af Ultimate Multisite med Zapier

I en af artiklerne talte vi om [Webhooks](webhooks.md) og hvordan de kan bruges til at integrere med tredjepartsapplikationer.

Brug af webhooks kan være lidt kompliceret, da det kræver avanceret viden inden for kodning og fangst af payloads. Ved at bruge **Zapier** kan du omgå dette.

Zapier har integrationer med over 5000+ apps, hvilket gør kommunikationen mellem forskellige applikationer nemmere.

Du kan oprette **Triggere**, der udløses, når begivenheder sker i dit netværk (f.eks. en konto oprettes og udløser `account_create` eventet) eller generere **Handlinger** i dit netværk, der reagerer på eksterne begivenheder (f.eks. opretning af et nyt medlemskab i dit Ultimate Multisite netværk).

Dette er muligt, fordi **Ultimate Multisite Zapier's triggers** og handlinger drives af [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Sådan starter du {#how-to-start}

Først skal du søge efter Ultimate Multisite i Zapier app-listen. Alternativt kan du klikke på [dette link](https://zapier.com/apps/wp-ultimo/integrations).

Gå til dit dashboard og tryk på knappen **+** **Create Zap** (Opret Zap) på venstre sidebjælke for at opsætte en ny Zap.

![Zapier dashboard med Create Zap knap](/img/admin/webhooks-list.png)

Du vil blive omdirigeret til siden til oprettelse af Zap.

I søgefeltet skal du indtaste "wp ultimo". Klik for at vælge **Beta** versionen.

![Søger efter WP Ultimo i Zapier app-listen](/img/admin/webhooks-list.png)

Når du har valgt vores app, skal du vælge den tilgængelige begivenhed: **New Ultimate Multisite Event**.

![Valg af New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nu skal vi give Zapier adgang til **dit netværk**. Ved at klikke på **Sign in** (Log ind) åbnes et nyt vindue, der kræver de **API credentials** (API-oplysninger).

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Gå til dit netværksadministratorpanel og navigér til **Ultimate Multisite > Indstillinger** > **API & Webhooks** og kig efter sektionen API Settings.

Vælg muligheden **Enable API**, da den er nødvendig for, at denne forbindelse kan virke.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Brug ikonet **Copy to Clipboard** på felterne API Key og API Secret og indsæt disse værdier på integrationsskærmen.

I feltet URL skal du indtaste din fulde netværks-URL, inklusive protokol (HTTP eller HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klik på knappen **Yes, Continue** for at gå videre til næste trin. Hvis alt fungerer som det skal, vil du blive mødt af din nye forbundne konto! Klik på **Continue** for at oprette en ny trigger.

## Sådan opretter du en ny Trigger {#how-to-create-a-new-trigger}

Nu hvor din konto er forbundet kan du se de tilgængelige hændelser. Lad os vælge begivenheden **payment_received** til denne tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Når begivenheden er valgt, og du klikker på **continue**, vil et **testtrin** dukke op.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

I dette trin tester Zapier, om din Zap kan **hente den specifikke payload til den pågældende begivenhed**. Ved fremtidige hændelser af samme type vil information med denne samme struktur blive sendt.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

I vores tutorial er testet og har **afleveret payload eksempelinformationen**. Denne eksempelinformation vil være nyttig til at guide os i skabelsen af actions. Din trigger er nu oprettet og klar til at blive forbundet med andre apps.

## Sådan opretter du Actions {#how-to-create-actions}

Actions bruger information fra andre triggers til at oprette nye poster i dit netværk.

I **oprettelse af et action-trin** vælger du Ultimate Multisite **Beta** og muligheden **Create Items on Ultimate Multisite**.

![Oprettelse af en action med Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

I det næste trin vælger du enten din autentifikation, ligesom vi gjorde i **Hvordan man starter**, eller vælger en eksisterende autentifikation. I denne tutorial vælger vi den samme autentifikation, der tidligere er oprettet.

![Valg af autentifikation til Zapier action](/img/admin/webhooks-list.png)

### Opsætning af Actionen {#setting-up-the-action}

Dette er **hovedtrinnet i actionen**, og her er tingene lidt anderledes. Den første information, du vælger, er **Item**. Item er dit netværks **informationsmodel** som f.eks. **Customers (Kunder), Payments (Betalinger), Sites (Websites), Emails** osv.

![Valg af Item-type til Zapier action](/img/admin/webhooks-list.png)

Når du vælger et item, vil formularen **omarrangeres for at vise de nødvendige og valgfrie felter** for det valgte item.

For eksempel, når du vælger itemet **Customer (Kunde)**, vil formularfelterne vise alt, der er nødvendigt for at oprette en ny Kunde i netværket.

![Customer item felter i opsætning af Zapier action](/img/admin/webhooks-list.png)

Når du har udfyldt alle felterne markeret som **required (nødvendige)** og klikker på fortsæt, vil en sidste skærm vise dig de udfyldte felter samt de felter, der er ufuldstændige.

![Test af Zapier handling, der viser udfyldte og ufuldstændige felter](/img/admin/webhooks-list.png)

Så snart din test er færdig og succesfuld, er din handling konfigureret. Det er også vigtigt at tjekke dit netværk for at se, om elementet blev oprettet med testen af din handling.
