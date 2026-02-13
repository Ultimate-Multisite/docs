---
title: ''
sidebar_position: 4
_i18n_hash: 05938a764a4fd230e32fa0ef39d35ebd
---
# Site Sjablonen (v2)

_**LET OP: Dit artikel verwijst naar Ultimate Multisite versie 2.x. Als u versie 1.x gebruikt,**_ **zie dit artikel** _**.**_

Ons doel bij het creëren van een premium netwerk met Ultimate Multisite is om zo veel mogelijk processen te automatiseren, terwijl we onze klanten flexibiliteit en verschillende opties bieden om uit te kiezen bij het maken van hun websites. Een gemakkelijke manier om dit evenwicht te bereiken is het gebruik van de Ultimate Multisite Site Templates-functie.

## Wat is een Site Sjabloon?

Zoals de naam al aangeeft, is een Site Sjabloon een standaardsite die als basis kan worden gebruikt bij het maken van nieuwe sites in uw netwerk.

Dit betekent dat u een basissite kunt maken, verschillende plugins kunt activeren, een actief thema kunt instellen en het naar wens kunt aanpassen. Vervolgens, wanneer uw klant een nieuw account aanmaakt, krijgen ze in plaats van een standaard WordPress-site zonder betekenisvolle inhoud, een kopie van uw basissite met alle aanpassingen en inhoud al aanwezig.

Dat klinkt geweldig, maar hoe maak ik een nieuwe site template? Het is zo eenvoudig als het kan zijn.

## Een nieuwe Site Template maken en bewerken

Site Templates zijn gewoon normale sites op uw netwerk. Om een nieuwe template te maken, gaat u eenvoudig naar **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Dit opent een modaal venster waarin wordt gevraagd naar de **Site title, Site Domain/path,** en **Site type**. Onder het **Site Type** dropdown-menu zorgt u ervoor dat u **Site Template** selecteert *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Onderaan het formulier ziet u een **Copy Site** schakelaar. Hiermee kunt u een nieuwe site template maken op basis van een bestaande site template als uitgangspunt, zodat u tijd bespaart in plaats van een site template vanaf nul te maken.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### De inhoud van een Site Sjabloon aanpassen

Om uw site template aan te passen, navigeert u eenvoudig naar het dashboardpaneel en maakt u de gewenste wijzigingen. U kunt nieuwe berichten, pagina's maken, plugins activeren en het actieve thema wijzigen. U kunt zelfs naar de Customizer gaan en allerlei aanpassingsopties wijzigen.

Alle gegevens worden gekopieerd wanneer een klant een nieuwe site maakt op basis van die Site Sjabloon.

### Geavanceerde opties

Als u vertrouwd bent met wat aangepaste code, kunt u onze Search and Replace API gebruiken om automatisch informatie op de nieuwe site te vervangen na de creatie. Dit is handig voor zaken zoals het vervangen van bedrijfsnamen op een Over-Ons-pagina, het vervangen van het contact e-mailadres op de Contact-pagina, enz.

### Site Templates gebruiken

Oké, dus u heeft een aantal verschillende Site Templates met verschillende ontwerpen, thema's en instellingen gemaakt. Hoe maakt u ze nu nuttig op uw netwerk?

In principe zijn er nu twee benaderingen die u kunt gebruiken (niet tegelijkertijd):

  * Een Site Template koppelen aan elk van uw plannen

**OF**

  * Uw klanten de mogelijkheid geven om zelf de site templates te kiezen tijdens het aanmelden.

#### Modus 1: Site Template toewijzen

In deze modus kunnen uw klanten geen template kiezen wanneer ze een account aanmaken, maar bepaalt u welke template op elk van uw plannen moet worden gebruikt.

Om dit te doen, gaat u naar **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Dit brengt u naar de **Edit Product** pagina. Onder het gedeelte **Product Options** vindt u het tabblad **Site template** en selecteert u de optie **Assign Site Template** uit het dropdown-menu. Dit toont de lijst met beschikbare site templates en stelt u in staat om slechts één site template toe te wijzen aan het product.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Modus 2: Beschikbare Site Template kiezen

In deze modus geeft u uw klanten een keuze tijdens het aanmeldingsproces. Ze kunnen kiezen uit verschillende site templates die u onder de productinstellingen definieert. U heeft de mogelijkheid om het site template dat ze kunnen kiezen te beperken onder het geselecteerde product. Dit stelt u in staat om verschillende sets site templates onder elk product te hebben, wat ideaal is om verschillende functies en kenmerken te benadrukken voor een product met een hogere prijs.

Op de **Edit Product** pagina. Onder het gedeelte **Product Options** vindt u het tabblad **Site template** en selecteert u de optie **Choose Available Site Template** uit het dropdown-menu. Dit toont de lijst met beschikbare site templates en stelt u in staat om het site template te selecteren dat u wilt aanbieden. U kunt dit doen door het gedrag te kiezen: **Available** als u wilt dat het site template op de lijst staat. **Not Available** als u wilt dat het site template niet als optie verschijnt. En **Pre-selected** als u wilt dat een van de genoemde site templates standaard is geselecteerd.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Standaardmodus: Site template selectie op het afrekenformulier

Als u wilt dat al uw site templates beschikbaar zijn tijdens de registratie, of als u het extra werk van het toewijzen of specificeren van site templates onder elk product dat u maakt, liever vermijdt, kunt u eenvoudig de site template selectie instellen onder uw **Checkout Form**. Ga hiervoor naar **Ultimate Multisite > Checkout Forms**. Klik vervolgens op **Edit** onder het formulier dat u wilt configureren.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Dit brengt u naar de pagina **Edit Checkout Form**. Zoek het veld **Template Selection** en klik op **Edit** eronder.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

Een modaal venster verschijnt. Onder het veld **Template Sites** kunt u alle site templates selecteren en opsommen die beschikbaar moeten zijn tijdens de registratie. De site templates die u hier opgeeft, zijn beschikbaar ongeacht welk product de gebruiker heeft geselecteerd.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Site Template Opties

Er zijn andere functies voor site templates beschikbaar die u kunt in- of uitschakelen onder de instellingen van Ultimate Multisite.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Template Switching toestaan

Het inschakelen van deze optie stelt uw klanten in staat om het template dat ze tijdens het aanmeldingsproces hebben gekozen, te wijzigen nadat het account en de site zijn aangemaakt. Dit is handig vanuit het perspectief van de klant, omdat het hen in staat stelt een template opnieuw te selecteren als ze later ontdekken dat hun oorspronkelijke keuze niet de beste was voor hun specifieke behoeften.

#### Gebruikers toestaan hun site als templates te gebruiken

Aangezien subsitegebruikers tijd hebben besteed aan het bouwen en ontwerpen van hun eigen site, willen ze deze misschien klonen en gebruiken als een van de beschikbare site templates bij het aanmaken van een andere subsite op uw netwerk. Deze optie stelt hen in staat dit te doen.

#### Media kopiëren bij template duplicatie

Door deze optie aan te vinken, wordt de media die op de template site is geüpload, gekopieerd naar de nieuw aangemaakte site. Dit kan op elk van de plannen worden overschreven.

#### **Voorkomen dat zoekmachines Site Templates indexeren**

Site templates, zoals besproken in dit artikel, zijn standaard, maar nog steeds onderdeel van uw netwerk, wat betekent dat ze nog steeds beschikbaar zijn voor zoekmachines om te vinden. Deze optie stelt u in staat om de site templates te verbergen zodat zoekmachines ze kunnen indexeren.

## Site Templates vooraf invullen met auto search-and-replace

Een van de krachtigste functies van Ultimate Multisite is het vermogen om willekeurige tekst, kleur en selectievakjes toe te voegen aan het registratieformulier. Zodra we die gegevens hebben vastgelegd, kunnen we ze gebruiken om de inhoud vooraf in te vullen in bepaalde delen van de geselecteerde site template. Vervolgens, wanneer de nieuwe site wordt gepubliceerd, vervangt Ultimate Multisite de tijdelijke aanduidingen door de daadwerkelijke informatie die tijdens de registratie is ingevoerd.

Bijvoorbeeld, als u het bedrijfsnaam van uw eindgebruiker tijdens de registratie wilt verkrijgen en automatisch op de startpagina wilt plaatsen. Op de startpagina van uw template site moet u de tijdelijke aanduidingen toevoegen, zoals in de afbeelding hieronder (tijdelijke aanduidingen moeten worden omgeven door dubbele accolades - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Vervolgens kunt u eenvoudig een overeenkomstig registratieveld toevoegen aan uw afrekenformulier om die gegevens vast te leggen:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

Uw klant kan dat veld vervolgens invullen tijdens de registratie.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite vervangt vervolgens de tijdelijke aanduidingen automatisch met de door de klant verstrekte gegevens.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Het probleem 'template vol tijdelijke aanduidingen' oplossen

Dat alles is geweldig, maar we lopen tegen een lelijk probleem aan: nu onze site templates - die door onze klanten kunnen worden bezocht - vol zitten met lelijke tijdelijke aanduidingen die weinig vertellen.

Om dit op te lossen, bieden we de optie om nepwaarden in te stellen voor de tijdelijke aanduidingen, en gebruiken we die waarden om de inhoud op de template sites te zoeken en te vervangen terwijl uw klanten deze bezoeken.

U kunt toegang krijgen tot de editor voor template placeholders door naar **Ultimate Multisite > Settings > Sites** te gaan, en vervolgens op de zijbalk op de link **Edit Placeholders** te klikken.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

Dat brengt u naar de inhoudseditor voor placeholders, waar u placeholders en hun bijbehorende inhoud kunt toevoegen.

![Template placeholders content editor](/img/config/settings-sites.png)
