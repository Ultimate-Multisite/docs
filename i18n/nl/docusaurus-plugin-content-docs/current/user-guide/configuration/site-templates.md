---
title: Site-sjablonen
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Sitetemplates (v2)

_**OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x. Als je versie 1.x gebruikt,**_ **bekijk dan dit artikel** _**.**_

Ons doel bij het maken van een premiumnetwerk met Ultimate Multisite is om zoveel mogelijk processen te automatiseren, terwijl we onze klanten flexibiliteit en verschillende opties geven om uit te kiezen bij het maken van hun websites. Een eenvoudige manier om deze balans te bereiken, is door gebruik te maken van de functie Ultimate Multisite sitetemplates.

## Wat is een sitetemplate?

Zoals de naam al aangeeft, is een sitetemplate een standaardsite die kan worden gebruikt als basis bij het maken van nieuwe sites in je netwerk.

Dit betekent dat je een basissite kunt maken, verschillende plugins kunt activeren, een actief theme kunt instellen en deze op elke gewenste manier kunt aanpassen. Wanneer je klant vervolgens een nieuwe Account aanmaakt, krijgen ze in plaats van een standaard WordPress-site zonder betekenisvolle inhoud een kopie van je basissite met alle aanpassingen en inhoud al aanwezig.

Dat klinkt geweldig, maar hoe maak ik een nieuwe sitetemplate? Het is zo eenvoudig als maar kan.

## Een nieuwe sitetemplate maken en bewerken

Sitetemplates zijn gewoon normale sites op je netwerk. Om een nieuwe template te maken kun je simpelweg naar **Netwerkbeheer > Ultimate Multisite > Sites > Site toevoegen.**

**![Knop Site toevoegen op de pagina met de lijst Sites](/img/config/site-templates-list.png)**

Dit opent een modaal venster waarin wordt gevraagd om de **Sitetitel, sitedomein/-pad,** en **Sitetype**. Zorg ervoor dat je onder het vervolgkeuzeveld **Sitetype** de optie **Sitetemplate** selecteert *.*

_![Modaal venster Sitetemplate toevoegen met vervolgkeuzelijst voor sitetype](/img/config/site-templates-list.png)_

Je kunt ook een klantgerichte beschrijving toevoegen om uit te leggen wat de template bevat:

![Beschrijvingveld voor sitetemplate op het bewerkingsscherm van de sitetemplate](/img/config/site-template-edit-description.png)

Onderaan het formulier zie je een schakelaar **Site kopiëren**. Hiermee kun je een nieuwe sitetemplate maken op basis van een bestaande sitetemplate als startpunt, zodat je tijd bespaart in plaats van een sitetemplate vanaf nul te maken.

![Modaal venster Sitetemplate toevoegen met schakelaar Site kopiëren](/img/config/site-templates-list.png)

### De inhoud van een sitetemplate aanpassen

Om je sitetemplate aan te passen, navigeer je eenvoudig naar het Dashboard-paneel ervan en breng je de gewenste wijzigingen aan. Je kunt nieuwe berichten en pagina's maken, plugins activeren en het actieve theme wijzigen. Je kunt zelfs naar de Customizer gaan en allerlei aanpassingsopties wijzigen.

![Bewerkingsinterface voor sitetemplate](/img/config/site-template-edit.png)

Al die gegevens worden gekopieerd wanneer een klant een nieuwe site maakt op basis van die sitetemplate.

### Geavanceerde opties

Als je goed overweg kunt met aangepaste code, kun je gebruikmaken van onze Zoek-en-vervang-API om automatisch informatie op de nieuwe site te vervangen nadat deze is gemaakt. Dit is handig voor zaken zoals het vervangen van bedrijfsnamen op een Over ons-pagina, het vervangen van het contact-e-mailadres op de Contactpagina, enzovoort.

### Sitetemplates gebruiken

Oké, dus je hebt een aantal verschillende sitetemplates gemaakt met verschillende ontwerpen, themes en instellingen. Hoe maak je ze nu nuttig op je netwerk?

In principe zijn er twee benaderingen die je nu kunt gebruiken (niet tegelijkertijd):

  * Eén sitetemplate koppelen aan elk van je abonnementen

**OF**

  * Je klanten toestaan om de sitetemplates zelf te kiezen tijdens de registratie.

#### Modus 1: Sitetemplate toewijzen

In deze modus kunnen je klanten geen template kiezen wanneer ze een Account aanmaken, maar bepaal jij welke template op elk van je abonnementen moet worden gebruikt.

Om dat te doen, moet je naar **Ultimate Multisite > Producten > Bewerken** gaan.

![Product bewerken om sitetemplate toe te wijzen](/img/config/product-site-templates.png)

Dit brengt je naar de pagina **Product bewerken**. Zoek onder de sectie **Productopties** het tabblad **Sitetemplate** en selecteer de optie **Sitetemplate toewijzen** in het vervolgkeuzeveld. Hiermee wordt de lijst met beschikbare sitetemplates weergegeven en kun je slechts één sitetemplate selecteren die aan het product is gekoppeld.

![Tabblad Sitetemplate van product met optie Sitetemplate toewijzen](/img/config/product-site-templates.png)

#### Modus 2: Beschikbare sitetemplate kiezen

In deze modus geef je je klanten een keuze tijdens het registratieproces. Ze kunnen kiezen uit verschillende sitetemplates die je onder de productinstellingen definieert. Je hebt een optie om de sitetemplate waaruit ze kunnen kiezen te beperken onder het geselecteerde product. Hiermee kun je verschillende sets sitetemplates onder elk product hebben, wat ideaal is om verschillende functies en mogelijkheden te benadrukken voor een duurder product.

Op de pagina **Product bewerken**. Zoek onder de sectie **Productopties** het tabblad **Sitetemplate** en selecteer de optie **Beschikbare sitetemplate kiezen** in het vervolgkeuzeveld. Hiermee wordt de lijst met beschikbare sitetemplates weergegeven en kun je de sitetemplate selecteren die je beschikbaar wilt maken. Je kunt dit doen door het gedrag te kiezen: **Beschikbaar** als je wilt dat de sitetemplate in de lijst wordt opgenomen. _**Niet beschikbaar**_ als je wilt dat de sitetemplate niet als optie wordt weergegeven. En **Vooraf geselecteerd** als je wilt dat een van de vermelde sitetemplates standaard geselecteerd is.

![Beschikbare sitetemplates kiezen met gedragsopties](/img/config/product-site-templates.png)

### Standaardmodus: selectie van sitetemplate op het afrekenformulier

Als je wilt dat al je sitetemplates beschikbaar zijn tijdens de registratie, of misschien liever geen extra werk doet om sitetemplates toe te wijzen of te specificeren onder elk product dat je maakt. Dan kun je de selectie van de sitetemplate eenvoudig instellen onder je **Afrekenformulier**. Ga hiervoor naar **Ultimate Multisite > Afrekenformulieren** en klik op **Bewerken** onder het formulier dat je wilt configureren.

Dit opent de pagina **Afrekenformulier bewerken**. Zoek het veld **Templateselectie** en klik daaronder op **Bewerken**.

Er verschijnt een modaal venster. Onder het veld **Templatesites** kun je alle sitesjablonen selecteren en opsommen die je tijdens de registratie beschikbaar wilt maken. De sitesjablonen die je hier opgeeft, zijn beschikbaar ongeacht welk product de gebruiker heeft geselecteerd.

![Veld voor sjabloonselectie in de editor voor het afrekenformulier](/img/config/checkout-form-template-step.png)

Op de frontend zien klanten de sjabloonkiezer tijdens het afrekenen en kunnen ze het startontwerp voor hun nieuwe site kiezen.

![Frontend-sjabloonkiezer tijdens registratie](/img/config/frontend-template-chooser.png)

### Opties voor sitesjablonen

Er zijn andere functies voor sitesjablonen beschikbaar die je kunt in- of uitschakelen onder de instellingen van Ultimate Multisite.

![Opties voor sitesjablonen in de instellingen van Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Sjabloonwissel toestaan

Als je deze optie inschakelt, kunnen je klanten het sjabloon dat ze tijdens het aanmeldproces kiezen, wijzigen nadat het Account en de site zijn aangemaakt. Dit is nuttig vanuit het oogpunt van een klant, omdat ze hiermee opnieuw een sjabloon kunnen selecteren als ze later ontdekken dat hun oorspronkelijke keuze niet de beste was voor hun specifieke behoeften.

#### Gebruikers toestaan hun site als sjablonen te gebruiken

Omdat gebruikers van subsites tijd hebben besteed aan het bouwen en ontwerpen van hun eigen site, willen ze deze mogelijk klonen en gebruiken als een van de beschikbare sitesjablonen bij het aanmaken van een andere subsite op je netwerk. Met deze optie kunnen ze dat doen.

#### Media kopiëren bij duplicatie van sjablonen

Als je deze optie aanvinkt, worden de media die op de sjabloonsite zijn geüpload gekopieerd naar de nieuw aangemaakte site. Dit kan per abonnement worden overschreven.

#### **Voorkomen dat zoekmachines sitesjablonen indexeren**

Sitesjablonen zoals besproken in dit artikel zijn basisversies, maar maken nog steeds deel uit van je netwerk, wat betekent dat ze nog steeds beschikbaar zijn voor zoekmachines om te vinden. Met deze optie kun je de sitesjablonen verbergen, zodat zoekmachines ze niet kunnen indexeren.

## Sitesjablonen vooraf invullen met automatisch zoeken-en-vervangen

Een van de krachtigste functies van Ultimate Multisite is de mogelijkheid om willekeurige tekst-, kleur- en selectievelden toe te voegen aan het registratieformulier. Zodra we die gegevens hebben vastgelegd, kunnen we ze gebruiken om de inhoud in bepaalde delen van het geselecteerde sitesjabloon vooraf in te vullen. Wanneer de nieuwe site vervolgens wordt gepubliceerd, vervangt Ultimate Multisite de placeholders door de daadwerkelijke informatie die tijdens de registratie is ingevoerd.

Als je bijvoorbeeld de bedrijfsnaam van je eindgebruiker tijdens de registratie wilt opvragen en de bedrijfsnaam automatisch op de homepage wilt plaatsen. Op de homepage van je sjabloonsite moet je de placeholders toevoegen, zoals in de afbeelding hieronder (placeholders moeten worden toegevoegd tussen dubbele accolades - {{placeholder_name}}).

![Homepage met placeholdertekst tussen accolades](/img/config/site-templates-list.png)

Daarna kun je eenvoudig een overeenkomend registratieveld toevoegen aan je afrekenformulier om die gegevens vast te leggen. Met dezelfde editor voor het afrekenformulier die wordt gebruikt voor sjabloonselectie kun je aangepaste velden naast de sjabloonkiezer plaatsen:

![Sjabloonselectie en registratievelden in de editor voor het afrekenformulier](/img/config/checkout-form-template-step.png)

Je klant kan dat veld vervolgens tijdens de registratie invullen.

![Frontend-afrekenformulier met sjabloonkiezer](/img/config/frontend-template-chooser.png)

Ultimate Multisite vervangt de placeholders vervolgens automatisch door de gegevens die door de klant zijn opgegeven.

![Placeholders vervangen door klantgegevens op de site](/img/config/site-templates-list.png)

### Het probleem van een "sjabloon vol placeholders" oplossen

Dat is allemaal geweldig, maar we lopen wel tegen een lelijk probleem aan: onze sitesjablonen - die door onze klanten kunnen worden bezocht - staan nu vol met lelijke placeholders die niet veel zeggen.

Om dat op te lossen, bieden we de optie om nepwaarden voor de placeholders in te stellen, en we gebruiken die waarden om hun inhoud op de sjabloonsites te zoeken en te vervangen terwijl je klanten ze bezoeken.

Je krijgt toegang tot de editor voor sjabloonplaceholders door naar **Ultimate Multisite > Instellingen > Sites** te gaan en vervolgens in de zijbalk op de link **Placeholders bewerken** te klikken.

![Instellingen voor sitesjablonen onder de instellingenpagina Sites](/img/config/settings-sites-templates-section.png)

Dat brengt je naar de inhoudseditor voor placeholders, waar je placeholders en hun bijbehorende inhoud kunt toevoegen.

![Toegangspunt voor de inhoudseditor voor sjabloonplaceholders](/img/config/settings-sites-templates-section.png)
