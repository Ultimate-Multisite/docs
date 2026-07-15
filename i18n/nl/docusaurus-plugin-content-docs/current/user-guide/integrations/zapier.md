---
title: Zapier-integratie
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite integreren met Zapier

In een van de artikelen bespraken we [Webhooks](webhooks.md) en hoe ze kunnen worden gebruikt om te integreren met applicaties van derden.

Het gebruik van webhooks is een beetje ingewikkeld, omdat het geavanceerde kennis vereist van coderen en het opvangen van payloads. Het gebruik van **Zapier** is een manier om dat te omzeilen.

Zapier heeft integraties met meer dan 5000+ apps, wat communicatie tussen verschillende applicaties eenvoudiger maakt.

Je kunt **Triggers** maken die worden geactiveerd wanneer er gebeurtenissen plaatsvinden op je netwerk (bijv. er wordt een account aangemaakt en dit activeert de account_create-gebeurtenis) of **Acties** genereren op je netwerk als reactie op externe gebeurtenissen (bijv. een nieuw accountlidmaatschap aanmaken in je Ultimate Multisite-netwerk).

Dit is mogelijk omdat **de triggers** en acties van **Ultimate Multisite Zapier** worden aangedreven door de [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Hoe te beginnen {#how-to-start}

Zoek eerst naar Ultimate Multisite in de Zapier-applijst. Je kunt ook op [deze link](https://zapier.com/apps/wp-ultimo/integrations) klikken.

Ga naar je dashboard en druk op de knop **+** **Zap maken** in de linkerzijbalk om een nieuwe Zap in te stellen.

![Zapier-dashboard met knop Zap maken](/img/admin/webhooks-list.png)

Je wordt doorgestuurd naar de pagina voor het maken van een Zap.

Typ "wp ultimo" in het zoekvak. Klik om de optie voor de **Beta**-versie te kiezen.

![Zoeken naar WP Ultimo in de Zapier-applijst](/img/admin/webhooks-list.png)

Nadat je onze app hebt geselecteerd, kies je de beschikbare gebeurtenis: **Nieuwe Ultimate Multisite-gebeurtenis**.

![De trigger Nieuwe Ultimate Multisite-gebeurtenis selecteren](/img/admin/webhooks-list.png)

Nu moeten we Zapier toegang geven tot **je netwerk**. Klikken op **Aanmelden** opent een nieuw venster waarin de **API-inloggegevens** worden gevraagd.

![Zapier-aanmeldprompt voor API-inloggegevens](/img/admin/webhooks-list.png)

Ga naar het beheerderspaneel van je netwerk en navigeer naar **Ultimate Multisite > Instellingen** > **API & Webhooks** en zoek naar het gedeelte API-instellingen.

Selecteer de optie **API inschakelen**, omdat dit vereist is om deze verbinding te laten werken.

![API- en Webhooks-instellingen met opties API-instellingen en API inschakelen](/img/admin/settings-api-webhooks.png)

Gebruik het pictogram **Kopiëren naar klembord** bij de velden API Key en API Secret en plak die waarden op het integratiescherm.

Vul in het URL-veld de volledige URL van je netwerk in, inclusief het protocol (HTTP of HTTPS).

![Zapier-integratiescherm met velden API Key, Secret en URL](/img/admin/webhooks-list.png)

Klik op de knop **Ja, doorgaan** om door te gaan naar de volgende stap. Als alles goed werkt, zou je begroet moeten worden door je nieuwe verbonden account! Klik op **Doorgaan** om een nieuwe trigger te maken.

## Hoe je een nieuwe Trigger maakt {#how-to-create-a-new-trigger}

Nu je account is verbonden, kun je beschikbare gebeurtenissen zien. Laten we voor deze tutorial de gebeurtenis **payment_received** kiezen.

![payment_received-gebeurtenis selecteren in Zapier-trigger](/img/admin/webhooks-list.png)

Zodra de gebeurtenis is geselecteerd en je op **doorgaan** klikt, verschijnt er een **teststap**.

![Zapier-teststap voor de trigger](/img/admin/webhooks-list.png)

In deze fase test Zapier of je Zap **de specifieke payload voor die gebeurtenis kan ophalen**. Bij toekomstige gebeurtenissen van hetzelfde type wordt informatie met dezelfde structuur verzonden.

![Zapier-triggertest succesvol voltooid met payload](/img/admin/webhooks-list.png)

In onze tutorial werd de test **succesvol voltooid** en werd voorbeeldinformatie van de payload geretourneerd. Deze voorbeeldinformatie is nuttig om ons te begeleiden bij het maken van acties. Je trigger is nu gemaakt en klaar om te worden verbonden met andere applicaties.

## Hoe je Acties maakt {#how-to-create-actions}

Acties gebruiken informatie uit andere triggers om nieuwe items in je netwerk aan te maken.

In de **stap voor het maken van een actie** kies je Ultimate Multisite **Beta** en de optie **Items maken op Ultimate Multisite**.

![Een actie maken met Items maken op Ultimate Multisite](/img/admin/webhooks-list.png)

In de volgende stap maak je je authenticatie aan, net zoals we deden in **Hoe te beginnen**, of selecteer je een aangemaakte authenticatie. In deze tutorial kiezen we dezelfde authenticatie die eerder is aangemaakt.

![Authenticatie selecteren voor de Zapier-actie](/img/admin/webhooks-list.png)

### De Actie instellen {#setting-up-the-action}

Dit is de **hoofdstap van de actie** en hier zijn de zaken iets anders. De eerste informatie die je kiest is het **Item**. Item is het **informatiemodel** van je netwerk, zoals **Klanten, Betalingen, Sites, E-mails** en andere.

![Itemtype kiezen voor de Zapier-actie](/img/admin/webhooks-list.png)

Wanneer je een item selecteert, zal het formulier **opnieuw worden ingedeeld om de verplichte en optionele velden** voor het geselecteerde item te tonen.

Wanneer je bijvoorbeeld het item **Klant** selecteert, tonen de formuliervelden alles wat nodig is om in te vullen om een nieuwe Klant in het netwerk aan te maken.

![Klant-itemvelden in de installatie van de Zapier-actie](/img/admin/webhooks-list.png)

Na het invullen van alle velden die als **verplicht** zijn gemarkeerd en het klikken op doorgaan, toont een laatste scherm de ingevulde velden en de velden die niet zijn ingevuld.

![Zapier-actietest met ingevulde en niet-ingevulde velden](/img/admin/webhooks-list.png)

Zodra je test is voltooid en succesvol is, is je actie geconfigureerd. Het is ook belangrijk om op je netwerk te controleren of het item is aangemaakt met de test van je actie.
