---
title: Zapier-integratie
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Integratie van Ultimate Multisite met Zapier

In een van de artikelen hebben we [Webhooks](webhooks.md) besproken en hoe ze kunnen worden gebruikt om te integreren met externe applicaties.

Het gebruik van webhooks is een beetje ingewikkeld omdat het gevorderde kennis vereist in coderen en het opvangen van payloads. Met **Zapier** kun je hieromheen komen.

Zapier heeft integraties met meer dan 5000 apps, waardoor communicatie tussen verschillende applicaties gemakkelijker wordt.

Je kunt **Triggers** maken die worden geactiveerd wanneer er gebeurtenissen plaatsvinden op je netwerk (bijv. een account wordt aangemaakt en triggert het account_create-evenement) of **Acties** genereren op je netwerk die reageren op externe gebeurtenissen (bijv. een nieuw accountlidmaatschap aanmaken in je Ultimate Multisite-netwerk).

Dit is mogelijk omdat de **Ultimate Multisite Zapier triggers** en acties worden aangedreven door de [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Hoe te beginnen

Zoek eerst naar Ultimate Multisite in de Zapier-applijst. Je kunt ook op [deze link](https://zapier.com/apps/wp-ultimo/integrations) klikken.

Ga naar je dashboard en klik op de **+** **Create Zap** knop in de linkerbalk om een nieuwe Zap in te stellen.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Je wordt doorgestuurd naar de Zap-creation pagina.

Typ in het zoekvak 'wp ultimo'. Klik om de **Beta** versie optie te kiezen.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Na het selecteren van onze app, kies het beschikbare evenement: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nu moeten we Zapier toegang geven tot **je netwerk**. Klikken op **Sign in** opent een nieuw venster dat de **API-gegevens** vereist.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Ga naar het adminpaneel van je netwerk en navigeer naar **Ultimate Multisite > Settings** > **API & Webhooks** en zoek naar het API Settings gedeelte.

Selecteer de optie **Enable API** omdat dit vereist is voor deze verbinding om te werken.

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

Gebruik het **Copy to Clipboard** icoon op de API Key en API Secret velden en plak die waarden op het integratiescherm.

Voer in het URL veld je volledige netwerk-URL in, inclusief het protocol (HTTP of HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Klik op de **Yes, Continue** knop om verder te gaan naar de volgende stap. Als alles goed gaat, word je begroet met je nieuwe verbonden account! Klik op **Continue** om een nieuwe trigger te maken.

## Hoe een nieuwe Trigger te maken

Nu je account is verbonden, kun je beschikbare evenementen zien. Laten we het **payment_received** evenement kiezen voor deze tutorial.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Zodra het evenement is geselecteerd en je op **continue** klikt, verschijnt een **test stap**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

In deze fase test Zapier of je Zap de specifieke payload voor dat evenement kan **fetchen**. In toekomstige evenementen van hetzelfde type zal informatie met dezelfde structuur worden verzonden.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

In onze tutorial is de test **succesvol voltooid** en heeft de payload voorbeeldinformatie teruggegeven. Deze voorbeeldinformatie is nuttig om ons te begeleiden bij het maken van acties. Je trigger is nu gemaakt en klaar om te verbinden met andere applicaties.

## Hoe Acties te maken

Acties gebruiken informatie van andere triggers om nieuwe items in je netwerk aan te maken.

In de **creating an action step** kies je de Ultimate Multisite **Beta** en de optie **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

In de volgende stap maak je ofwel je authenticatie aan, net zoals we deden in **Hoe te beginnen**, of selecteer je een bestaande authenticatie. In deze tutorial kiezen we dezelfde authenticatie die eerder is aangemaakt.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Het opzetten van de Actie

Dit is de **hoofd stap van de actie** en hier zijn de dingen een beetje anders. De eerste informatie die je kiest is het **Item**. Item is het **informatie model** van je netwerk, zoals **Customers, Payments, Sites, Emails** en anderen.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Bij het selecteren van een item zal het formulier **herorganiseren om de verplichte en optionele velden** voor het geselecteerde item te tonen.

Bijvoorbeeld, bij het selecteren van het item **Customer**, zullen de formulier velden alles tonen wat nodig is om een nieuwe Customer in het netwerk aan te maken.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Na het invullen van alle velden gemarkeerd als **required** en klikken op continue, toont een laatste scherm de ingevulde velden en de velden die niet zijn ingevuld.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Zodra je test voltooid is en succesvol, is je actie geconfigureerd. Het is ook belangrijk om op je netwerk te controleren of het item is aangemaakt met de test van je actie.
