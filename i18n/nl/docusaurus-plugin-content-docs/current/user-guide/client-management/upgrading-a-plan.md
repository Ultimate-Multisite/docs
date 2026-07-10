---
title: Een abonnement upgraden
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Een abonnement upgraden (v2) {#upgrading-a-plan-v2}

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Je klanten kunnen hun abonnementen op elk moment upgraden. Ze kunnen upgraden naar een ander abonnement of extra diensten of pakketten aanschaffen die je op je netwerk aanbiedt.

In deze tutorial behandelen we hoe ze hun abonnement kunnen upgraden en wat er gebeurt na het upgradeproces.

Om hun abonnement te upgraden, moeten je klanten naar hun Dashboard gaan en naar de pagina **Account** gaan.

![Dashboard van klant-subsite met Account-menulink zichtbaar](/img/account-page/account-menu.png)

Op de Account-pagina zien ze hun huidige membership en het bijbehorende abonnement. Om naar een ander abonnement te upgraden, moeten ze rechtsboven in de sectie **Your Membership** op **Wijzigen** klikken.

![Account-pagina Your Membership-kaart met knop Wijzigen](/img/account-page/membership-change-button.png)

Ze worden doorgestuurd naar een checkout-formulier waar alle beschikbare abonnementen worden weergegeven.

Ze kunnen ook de **diensten en pakketten zien die beschikbaar zijn voor hun huidige abonnement** , voor het geval ze alleen een specifieke dienst of pakket willen aanschaffen (zoals onbeperkte bezoeken of schijfruimte in ons voorbeeld hier), en het abonnement niet willen upgraden.

![Upgradekiezer met beschikbare abonnementen en pakketten aan klantzijde](/img/account-page/upgrade-picker.png)

Nadat ze het product hebben gekozen dat ze willen aanschaffen, zien ze hoeveel ze nu moeten betalen - exclusief eventueel bestaand tegoed - en hoeveel er op de volgende factuurdatum in rekening wordt gebracht.

Meestal, als het product een ander abonnement is en de betaling tussen membership-kosten plaatsvindt, ontvangen ze een tegoed voor het bedrag dat op het eerste abonnement is betaald.

![Upgradebetalingssamenvatting met toegepast tegoed en bedrag voor volgende facturering](/img/account-page/upgrade-summary.png)

Als ze een abonnement of pakket selecteren dat niets verandert aan het huidige abonnement, zien ze een bericht dat dit uitlegt.

![Melding wanneer het geselecteerde abonnement het abonnement niet wijzigt](/img/account-page/upgrade-no-change.png)

Nadat de checkout is voltooid, worden de nieuwe product(en) toegevoegd aan het Account van je klanten en worden alle limieten of functies van de nieuwe product(en) er direct aan toegevoegd: bezoeken, schijfruimte, berichten, enz...

##

##

## Upgrade- en downgradepaden {#upgrade-and-downgrade-paths}

Op elk van je producten heb je een tabblad **Up & Downgrades**. De eerste optie op dat tabblad is een veld met de naam **Plan Group**.

**Abonnementsgroepen** is wat je in staat stelt Ultimate Multisite te laten weten dat bepaalde abonnementen tot dezelfde "familie" behoren en daarom moeten worden gebruikt om opties voor upgrade-/downgradepaden te maken.

![Product bewerken Up and Downgrades-tabblad met Plan Group-veld](/img/config/product-upgrades-plan-group.png)

Bijvoorbeeld: je hebt een **Gratis abonnement** , een **Basisabonnement** en een **Premiumabonnement** beschikbaar. Je wilt dat gebruikers die onder het **Gratis abonnement** zijn geabonneerd alleen kunnen upgraden naar het **Premiumabonnement** en je wilt niet dat ze het "Basisabonnement" als upgradeoptie zien. Het enige wat je hoeft te doen, is dezelfde naam voor de abonnementsgroep toewijzen aan zowel de gratis als premium abonnementen, zoals weergegeven in de onderstaande schermafbeeldingen.

![Productpagina Gratis abonnement met toegewezen High End-abonnementsgroep](/img/config/product-upgrades-free.png)

![Productpagina Premiumabonnement met toegewezen High End-abonnementsgroep](/img/config/product-upgrades-premium.png)

Dit zou Ultimate Multisite moeten vertellen dat er een "familie" van abonnementen in het netwerk is met de naam **High End**. Bij het aanbieden van upgrades of downgrades worden alleen abonnementen uit dezelfde familie als optie aan de gebruiker gepresenteerd.
