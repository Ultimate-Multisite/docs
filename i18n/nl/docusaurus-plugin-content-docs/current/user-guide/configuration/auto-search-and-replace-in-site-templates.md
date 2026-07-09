---
title: Automatisch zoeken en vervangen in sitesjablonen
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatisch zoeken en vervangen in site-templates (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Deze tutorial vereist WP UItimo versie 2.x.**_

Een van de krachtigste functies van Ultimate Multisite is de mogelijkheid om willekeurige tekst-, kleur- en selectievelden toe te voegen aan het registratieformulier. Zodra we die gegevens hebben vastgelegd, kunnen we ze gebruiken om de inhoud in bepaalde delen van de geselecteerde site-template vooraf in te vullen. Wanneer de nieuwe site vervolgens wordt gepubliceerd, vervangt Ultimate Multisite de tijdelijke aanduidingen door de daadwerkelijke informatie die tijdens de registratie is ingevoerd.

Je kunt bijvoorbeeld je template-sites maken met tijdelijke aanduidingen. Tijdelijke aanduidingen moeten worden toegevoegd tussen dubbele accolades - {{placeholder_name}}.

Vervolgens kun je eenvoudig een overeenkomend registratieveld toevoegen om die gegevens vast te leggen

Je klant kan dat veld dan invullen tijdens de registratie.

Ultimate Multisite vervangt de tijdelijke aanduidingen vervolgens automatisch door de gegevens die door de klant zijn opgegeven.

## **Het probleem van de "template vol tijdelijke aanduidingen" oplossen** {#solving-the-template-full-of-placeholders-problem}

Dat is allemaal geweldig, maar we lopen wel tegen een lelijk probleem aan: onze site-templates - die door onze klanten kunnen worden bezocht - staan nu vol met lelijke tijdelijke aanduidingen die niet veel zeggen.

Om dat op te lossen, bieden we de optie om nepwaarden in te stellen voor de tijdelijke aanduidingen, en we gebruiken die waarden om hun inhoud op de template-sites te zoeken en te vervangen terwijl je klanten ze bezoeken.

Je krijgt toegang tot de editor voor template-tijdelijke aanduidingen door naar **Ultimate Multisite > Instellingen > Sites** te gaan, naar het gedeelte Site Template-opties te scrollen en vervolgens op de link **Tijdelijke aanduidingen bewerken** te klikken.

![Gedeelte Site Template-opties op de pagina Sites-instellingen](/img/config/settings-sites-templates-section.png)

Dat brengt je naar de inhoudseditor voor tijdelijke aanduidingen, waar je tijdelijke aanduidingen en hun bijbehorende inhoud kunt toevoegen.

![Ingangspunt van de editor voor template-tijdelijke aanduidingen](/img/config/settings-sites-templates-section.png)
