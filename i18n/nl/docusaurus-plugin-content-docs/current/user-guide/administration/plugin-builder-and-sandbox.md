---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introduceert het **Plugin Builder & Sandbox System**, waarmee de AI-assistent WordPress-plugins op uw netwerk kan genereren, activeren en beheren — allemaal via een veilige, geïsoleerde sandbox-omgeving.

## Overzicht {#overview}

De Plugin Builder stelt de AI-assistent in staat om op basis van natuurlijke taalverzoeken aangepaste WordPress-plugins te schrijven. De gegenereerde plugins worden gevalideerd, opgeslagen en geactiveerd binnen een sandbox-laag voordat ze ooit de functionaliteit van de live site beïnvloeden.

Gebruiksscenario's omvatten:

- Het genereren van lichte nutsplugins zonder de betrokkenheid van een ontwikkelaar.
- Het prototypen van functies die WordPress hooks of custom post types vereisen.
- Het creëren van kortstondige automatisering scripts voor batchbewerkingen.

## Een Plugin Genereren via AI {#generating-a-plugin-via-ai}

Om een plugin te genereren, opent u de chatinterface van de Gratis AI Agent en beschrijft u wat u nodig heeft. Bijvoorbeeld:

> "Maak een plugin die een aangepaste admin-melding op het dashboard toevoegt."

De AI zal:

1. De PHP-code van de plugin produceren met behulp van gestructureerde code-generatie.
2. De output valideren op syntaxisfouten en onveilige patronen.
3. De gegenereerde plugin opslaan in de sandbox-opslag.
4. Een bevestiging geven met de plugin-slug en een knop **Activate in Sandbox**.

U kunt het resultaat verfijnen door in hetzelfde conversatietraject een opvolging te geven voordat u activeert.

## Sandbox Activering {#sandbox-activation}

Het activeren van een gegenereerde plugin in de sandbox verschilt van het activeren ervan op het live netwerk. De sandbox:

- Voert de plugin uit in een geïsoleerde WordPress-omgeving (wp-env).
- Vangt eventuele PHP-fouten, waarschuwingen of hook-conflicten op.
- Rapporteert het activeringsresultaat terug in de chatinterface.

Om een plugin in de sandbox te activeren, klikt u op de knop **Activate in Sandbox** in het AI-chatantwoord, of gebruikt u de slash-commando:

```
/activate-plugin <plugin-slug>
```

Een statusbericht bevestigt of de activatie is geslaagd of mislukt. Bij een mislukking wordt de foutlog in het chatdraad getoond.

## Beheren van Gegenereerde Plugins {#managing-generated-plugins}

Gegenereerde plugins staan vermeld onder **Gratis AI Agent → Plugin Builder → Manage Plugins**. Vanuit dit scherm kunt u:

| Actie | Beschrijving |
|---|---|
| **View source** | Bekijk de volledige plugin PHP-code. |
| **Re-activate in sandbox** | Voer de sandbox-activatiecontrole opnieuw uit. |
| **Install on network** | Deploy de plugin naar het live netwerk (vereist handmatige bevestiging). |
| **Update** | Geef een nieuwe versie via de AI, die de bestaande code vervangt. |
| **Delete** | Verwijder de plugin uit de sandbox-opslag. Deactiveert deze eerst van alle sites. |

:::warning
**Install on network** deployt de gegenereerde plugin naar uw live WordPress multisite. Controleer de plugin-code voordat u verdergaat. Gratis AI Agent vraagt om bevestiging voordat een live installatie wordt voltooid.
:::

## Een Gegenereerde Plugin Installeren op het Netwerk {#installing-a-generated-plugin-on-the-network}

Wanneer u tevreden bent met een in de sandbox geplaatste plugin, kunt u deze op het live netwerk installeren:

1. Ga naar **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik op **Install on Network** naast de plugin die u wilt deployen.
3. Bevestig het dialoogvenster. De plugin wordt geïnstalleerd in `wp-content/plugins/` en netwerk-geactiveerd.

Alternatief kunt u het slash-commando in de chatinterface gebruiken:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

Om een gegenereerde plugin te updaten, beschrijft u de wijziging aan de AI-assistent in een nieuw gesprek:

> "Update de dashboard-notice plugin zodat de melding alleen voor beheerders zichtbaar is."

De AI genereert een nieuwe versie, die naast de huidige versie in de sandbox verschijnt. U bekijkt het verschil (diff) en bevestigt voordat de update wordt toegepast.

## HookScanner Integratie {#hookscanner-integration}

De Plugin Builder gebruikt een geïntegreerde **HookScanner** om de hooks en filters te analyseren die door elke gegenereerde plugin worden geregistreerd. De output van HookScanner wordt weergegeven in het chatantwoord en bevat:

- Geregistreerde actie hooks (`add_action` oproepen).
- Geregistreerde filter hooks (`add_filter` oproepen).
- Alle hooks gevonden in plugin-afhankelijkheden (negeert `vendor/` en `node_modules/` mappen).

Dit helpt u om het gedrag van een plugin te begrijpen voordat u deze activeert.

## Security Considerations {#security-considerations}

- Gegenereerde plugins worden gescheiden opgeslagen van handmatig geïnstalleerde plugins en zijn niet toegankelijk via het standaard WordPress plugin-beheer scherm totdat u ze expliciet op het netwerk installeert.
- De sandbox gebruikt path validation om directory traversal te voorkomen bij het schrijven van pluginbestanden.
- Plugins met gevaarlijke functieoproepen (bijv. `eval`, `exec`, `system`) worden gemarkeerd tijdens de validatie en worden niet geactiveerd.
