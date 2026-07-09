---
title: Je eerste abonnementproduct aanmaken
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Je eerste abonnementsproduct maken (v2)

_**BELANGRIJKE OPMERKING: Dit artikel is alleen voor gebruikers van Ultimate Multisite versie 2.x. Als je versie 1.x gebruikt,**_ **_**bekijk dan dit artikel**_**.

Om je netwerk te gaan beheren en je diensten aan potentiële gebruikers te verkopen, heb je verschillende abonnementsopties nodig. Hoe maak je deze producten? Welke soorten producten kun je aanbieden? In dit artikel behandelen we alles wat je moet weten over producten.

## Producttype

Met Ultimate Multisite kun je twee categorieën producten aan je klanten aanbieden: **abonnementen** en **add-ons** **(Order Bump)**. Add-ons kunnen worden onderverdeeld in twee typen:**pakketten** en **diensten**. Hierna bekijken we hun verschillen en bijzonderheden.

  * **Abonnementen** : het fundamentele product van Ultimate Multisite. Je klant kan alleen een lidmaatschap hebben als dit aan een abonnement is gekoppeld. Een abonnement biedt je klanten een of meer sites (dit hangt af van de configuraties van je abonnement) met de beperkingen die je instelt op je pagina voor het bewerken van het product.

  * **Pakketten** : add-ons die direct invloed hebben op de functionaliteiten van Ultimate Multisite-abonnementen. Ze wijzigen beperkingen of voegen nieuwe resources, plugins of themes toe aan het oorspronkelijke abonnement dat je klant heeft gekocht. Een basisabonnement kan bijvoorbeeld 1.000 bezoeken per maand toestaan en je kunt een pakket beschikbaar maken dat dit aantal uitbreidt naar 10.000.

  * **Diensten:** add-ons die de functionaliteiten van Ultimate Multisite niet wijzigen. Het zijn taken die je voor je klant uitvoert naast het abonnement dat hij of zij heeft gekocht. Je klant kan bijvoorbeeld een abonnement kopen dat één site toestaat en ook betalen voor een extra dienst die het ontwerp van deze site maakt.

## Producten beheren

Voor velen kan het tabblad **Products** in Ultimate Multisite **(Ultimate Multisite > Products)** worden gelijkgesteld aan abonnementen in een traditionele hostingomgeving.

Binnen Ultimate Multisite definieert het tabblad Products de structuur en beperkingen die van toepassing zijn op een specifiek product of specifieke dienst. Dergelijke structuren omvatten de beschrijving van het product of de dienst, prijs, belastingen en rechten.

Deze sectie helpt je dit essentiële fundament van Ultimate Multisite te begrijpen.

![Pagina met productlijst](/img/config/products-list.png)

## Producten toevoegen

Of het nu om een abonnement, pakket of dienst gaat, het startpunt voor het definiëren van een nieuw item is via **Ultimate Multisite > Products > Add Product**.

![Knop Product toevoegen](/img/config/product-add-button.png)

De interface bevat twee hoofdsecties. Links staan verschillende tabbladen die helpen bij de definitie van het product en rechts staan enkele secties om de basisprijs van het product, de actieve status en de productafbeelding te definiëren.

![Overzicht van productbewerkingspagina](/img/config/product-edit-full.png)

### Beschrijving

De basisproductinformatie kan worden gedefinieerd door een productnaam en beschrijving op te geven. Deze aanduidingen worden weergegeven overal waar de productinformatie nodig is, zoals bij abonnement- en prijsselectie, facturen, upgrades en dergelijke.

![Sectie productbeschrijving](/img/config/product-description.png)

### Prijstype

Aan de rechterkant van de interface kan de basisprijs worden gedefinieerd.

![Sectie prijs en opslaan](/img/config/product-pricing-save.png)

Ultimate Multisite ondersteunt drie verschillende prijstypen. De optie **betaald** vraagt de netwerkbeheerder om informatie over de prijs van het product en de factureringsfrequentie.

### Prijsstelling

De prijscomponent definieert de basisproductprijs en het factureringsinterval.

![Sectie prijs en opslaan](/img/config/product-pricing-save.png)

dus een voorbeeldprijs van $29.99 met een instelling van 1 maand factureert elke maand $29.99. Op dezelfde manier factureert een prijs van $89.97 met een instelling van 3 maanden dat bedrag per kwartaal.

### Factureringscycli

De sectie factureringscycli specificeert de frequentie van het bovengenoemde factureringsinterval en wordt over het algemeen begrepen in het kader van contracten of vaste termijnen.

![Sectie prijs en opslaan](/img/config/product-pricing-save.png)

Een productprijs van $29.99 met een interval van 1 maand en 12 factureringscycli zou bijvoorbeeld $29.99 per maand voor het product factureren gedurende de daaropvolgende 12 maanden. Met andere woorden, zo'n instelling zou een vaste prijstermijn van $29.99 per maand voor 12 maanden vastleggen en daarna de facturering beëindigen.

### Proefperiode

Door de schakelaar voor het aanbieden van een proefperiode in te schakelen, kan de netwerkbeheerder een proefperiode voor het product definiëren.

![Sectie prijs en opslaan](/img/config/product-pricing-save.png)

Tijdens de proefperiode kunnen klanten het product gratis gebruiken en worden ze pas gefactureerd nadat de proefperiode is verlopen.

### Setupkosten

Je kunt ook setupkosten toepassen op je abonnement.

![Sectie prijs en opslaan](/img/config/product-pricing-save.png)

Dit betekent dat je klant bij de eerste afschrijving een extra bedrag betaalt (naast de prijs van het abonnement) dat overeenkomt met de kosten die je in deze sectie hebt gedefinieerd.

### Actief

De actieve schakelaar definieert effectief of het product beschikbaar is voor klanten voor nieuwe aanmeldingen.

![Actieve schakelaar](/img/config/product-active.png)

Als er bestaande klanten op dit abonnement zitten, zorgt het uitschakelen van de schakelaar er effectief voor dat het abonnement als bestaand wordt behouden en uit toekomstige aanmeldingen wordt verwijderd. **Bestaande klanten op het abonnement blijven gefactureerd worden** totdat ze naar een nieuw abonnement worden overgezet of uit het abonnement worden verwijderd.

### Productafbeelding

Met de knop **Upload Image** kan de netwerkbeheerder de mediabibliotheek gebruiken om een productafbeelding te selecteren of te uploaden.

![Sectie productafbeelding](/img/config/product-image.png)

### Verwijderen

De knop **Delete Product** verwijdert het product uit het systeem. Deze verschijnt zodra het product is gepubliceerd.

![Sectie product verwijderen](/img/config/product-delete.png)

In tegenstelling tot andere verwijderingen wordt het product niet in een prullenbakstatus geplaatst. Zodra het is verwijderd, is de actie dus onomkeerbaar.

### Productopties

Zodra de productinformatie op basisniveau is gedefinieerd, helpen de productopties de netwerkbeheerder om de specifieke kenmerken van het product verder te definiëren.

#### Algemeen

Het tabblad **Algemeen** definieert de algemene kenmerken van het product die niet van toepassing zijn op een van de andere productspecifieke tabbladen.

![Tabblad Algemeen](/img/config/product-general-tab.png)

De voor zich sprekende **product-slug** definieert de slug waarmee het product wordt geïdentificeerd in URLs en andere onderdelen van Ultimate Multisite.

Ultimate Multisite ondersteunt verschillende producttypen, namelijk Abonnement, Pakket en Dienst. De tabbladen **Productopties** worden dynamisch aangepast afhankelijk van het opgegeven producttype.

De **Klantrol** specificeert de rol die aan de klant wordt toegewezen wanneer de site wordt aangemaakt. Meestal is dit voor de meeste netwerkbeheerders de standaard van Ultimate Multisite of Beheerder. De standaardrol van Ultimate Multisite kan worden ingesteld in **Ultimate Multisite > Instellingen > Inloggen & Registratie**.

![Instellingen voor klantrol](/img/config/product-customer-role-settings.png)

#### Upgrades & downgrades

Dit tabblad specificeert de upgrade- en downgradepaden die beschikbaar zijn voor een klant binnen hun specifieke niveau.

Om dit concept te begrijpen, neem een voorbeeld waarin een niche-installatie van Ultimate Multisite oplossingen voor leermanagement aan haar klanten biedt. Om dit te bereiken worden drie abonnementen (Basis, Plus en Premium) gedefinieerd en worden specifieke plugins geactiveerd voor elk abonnement (zie verderop in deze sectie voor instructies over het activeren van plugins).

Als de Ultimate Multisite-installatie ook zakelijke websites of eCommerce-websites bedient, kunnen voor die abonnementen andere plugins moeten worden geïnstalleerd en geactiveerd.

In dit opzicht zou het ongewenst en problematisch zijn om eLearning-klanten te laten overstappen naar eCommerce-abonnementen, omdat deze abonnementen, prijzen en beperkingen mogelijk niet passend zijn.

Om het pad van de klant te beperken en incidenten te voorkomen, kan de netwerkbeheerder daarom een abonnementsgroep definiëren en binnen die groep specificeren naar welke abonnementen de klant kan overstappen.

![Tabblad Upgrades en downgrades](/img/config/product-upgrades.png)

Om een abonnementsgroep te definiëren, specificeer je de compatibele abonnementen in de lijst **abonnementsgroep**. De **productvolgorde** bepaalt hoe de abonnementen worden geordend en weergegeven, van laag naar hoog.

Ultimate Multisite bevat ook een functie voor **order bump**, waarbij passende aanvullende producten en diensten aan abonnementen kunnen worden toegevoegd. Deze worden aan de klant aangeboden als extra items die tijdens het afrekenen of tijdens een upgrade aan abonnementen kunnen worden toegevoegd.

#### Prijsvariaties

Prijsvariaties stellen de netwerkbeheerder in staat om alternatieve prijsniveaus te specificeren afhankelijk van de duur. Deze instelling maakt het mogelijk om maandelijkse, kwartaal-, jaarlijkse of elke andere factureringsperiode voor hetzelfde product aan te bieden. Je kunt bijvoorbeeld een product instellen op $29.99/maand met een jaarlijkse optie met korting van $249.99/jaar.

![Tabblad Prijsvariaties](/img/config/product-price-variations-tab.png)

Om prijsvariaties in te stellen, zet je de schakelaar **Prijsvariaties inschakelen** op actief en klik je op de knop **Nieuwe prijsvariatie toevoegen**.

![Productprijsvariaties](/img/config/product-price-variations.png)

Om een variatie in te voeren, stel je de duur, periode en prijs van de variatie in. Extra variaties kunnen worden ingevoerd door opnieuw op de knop te klikken.

Als je basisproductprijs bijvoorbeeld $29.99 per maand is, kun je toevoegen:

  * **3 maanden** voor $79.99 (een kleine korting ten opzichte van maandelijks)
  * **1 jaar** voor $249.99 (een aanzienlijke korting voor jaarlijkse verbintenis)

:::tip Een schakelaar voor de factureringsperiode weergeven op de frontend

Prijsvariaties alleen voegen geen toggle of schakelaar toe aan de frontend-checkout. Om klanten te laten wisselen tussen factureringsperioden (bijv. Maandelijks / Jaarlijks), moet je een veld **Periodeselectie** toevoegen aan je afrekenformulier. Zie [Afrekenformulieren: een periodeselectie-toggle toevoegen](checkout-forms#adding-a-period-selection-toggle) voor stapsgewijze instructies.
:::

#### Belastingen

Het tabblad **Belastingen** sluit aan op de belastinginstellingen die zijn opgegeven in **Ultimate Multisite > Instellingen > Belastingen** en meer specifiek op de gedefinieerde belastingtarieven. Raadpleeg de documentatie bij **Ultimate Multisite: Instellingen** om belastingen in te schakelen en toepasselijke belastingtarieven te definiëren.

![Tabblad Belastingen](/img/config/product-taxes.png)

In een vorig voorbeeld hebben we een lokaal belastingtarief van 7.25% gedefinieerd dat van toepassing is op klanten in Californië (Verenigde Staten van Amerika).

Zodra het belastingtarief is gedefinieerd in **Ultimate Multisite > Instellingen > Belastingtarieven beheren**, kan het op productniveau worden geselecteerd.

![Tabblad Belastingen](/img/config/product-taxes.png)

Om aan te geven dat een product een belastbaar item is, zet je de schakelaar **Is belastbaar** op actief en selecteer je het toepasselijke belastingtarief in de dropdown Belastingcategorie.

#### Sitesjablonen

In essentie zijn sitesjablonen volledige WordPress-websites die aan het begin van hun abonnement naar de site van een klant worden gekloond.

![Tabblad Sitesjablonen](/img/config/product-site-templates.png)

De netwerkbeheerder maakt en configureert de sjabloonsite als een reguliere WordPress-site met geactiveerde en geconfigureerde themes, plugins en content. De sjabloonsite wordt letterlijk naar de klant gekloond.

Dit tabblad stelt de netwerkbeheerder in staat om het gedrag van sitesjablonen bij een nieuw abonnement te specificeren. Om sitesjablonen voor dit abonnement te gebruiken, zet je de schakelaar **Sitesjablonen toestaan** op actief.

Wanneer **Sitesjablonen toestaan** is uitgeschakeld, kunnen klanten met het abonnement geen sjablonen kiezen, zelfs niet als een afrekenformulier, deelbare link of URL-parameter sjablonen anders beschikbaar zou maken. Ultimate Multisite dwingt deze limiet nu af via een fallback-keten over de beschikbare toegangspunten: abonnementinstellingen worden eerst gecontroleerd, daarna sjablooninstellingen van het afrekenformulier en vervolgens vooraf geselecteerde of via URL aangeleverde sjablonen. Dit houdt abonnementslimieten consistent en voorkomt dat sjablonen verschijnen voor producten die ze niet zouden moeten aanbieden.

De **site template-selectiemodus** definieert het gedrag van site templates tijdens het abonnementsproces.

De instelling **D** **efault** volgt de stappen in het checkout-formulier. Als de netwerkbeheerder een template-selectiestap in het checkout-proces heeft gedefinieerd en de stap met templates is gedefinieerd, zal deze instelling de richtlijnen volgen die in de checkout-stap zijn vastgesteld.

Het specificeren van **A** **ssign Site Template** forceert de selectie van de opgegeven template. Daardoor worden eventuele template-selectiestappen in het checkout-proces verwijderd.

Ten slotte overschrijft **C** **hoose Available Site Templates** de templates die in de checkout-stap zijn opgegeven met de templates die in deze instelling zijn geselecteerd. Er kan ook een vooraf geselecteerde template worden gedefinieerd om de klant te helpen bij de selectie.

Uiteindelijk, als de netwerkbeheerder wil dat template-selectie plaatsvindt in de checkout-stappen, volstaat de instelling ' _default_ '. Als alternatief, om template-selectie te verwijderen en te vergrendelen en de selectie te delegeren aan de plan-instellingen, kunnen de opties ' _assign new template_ ' of ' _choose available site templates_ ' wenselijk zijn.

#### Sites

Het tabblad **Sites** maakt deel uit van de beperkingsfunctionaliteit van Ultimate Multisite.

![Tabblad Sites](/img/config/product-sites.png)

Deze instelling specificeert het maximale aantal sites dat een klant onder zijn membership kan aanmaken.

Om de beperking in te schakelen, zet u de schakelaar **sites beperken** op actief en specificeert u het maximale aantal sites in het veld **site allowance**.

#### Bezoeken

Het tabblad **Visits** is een verder onderdeel van het beperkingssysteem van Ultimate Multisite. Met deze instelling kunnen unieke bezoekers aan de site van een klant worden geteld en vervolgens worden afgeknepen.

![Tabblad Visits](/img/config/product-visits.png)

Vanuit marketingperspectief kunnen netwerkbeheerders deze instelling gebruiken als middel om klanten aan te moedigen hun plan te upgraden zodra limieten zijn bereikt. Deze instelling kan de netwerkbeheerder ook helpen om overmatig verkeer naar sites te beperken en te voorkomen, zodat systeembronnen behouden blijven.

Om deze functie te gebruiken, zet u de schakelaar **limit unique visits** op actief en specificeert u het maximale aantal unieke bezoekers in het veld **unique visits quota**.

Zodra deze limiet is bereikt, stopt Ultimate Multisite met het aanbieden van de site van de klant in plaats van een bericht weer te geven dat aangeeft dat limieten zijn overschreden.

#### Gebruikers

De 'Users'-beperkingen van Ultimate Multisite stellen de netwerkbeheerder in staat limieten op te leggen aan het aantal gebruikers dat kan worden aangemaakt en aan rollen kan worden toegewezen.

![Tabblad Users](/img/config/product-users.png)

Om de beperkingsfunctie in te schakelen, zet u de schakelaar **limit user** op actief door deze naar rechts te schuiven.

Vervolgens zet u voor elke rol die moet worden beperkt de schakelaar ernaast op actief en definieert u de maximale bovengrens in het juiste veld.

#### Berichttypen

Het tabblad **Post Types** stelt de netwerkbeheerder in staat gedetailleerde limieten op te leggen aan de uitgebreide reeks berichttypen binnen WordPress.

![Tabblad Post Types](/img/config/product-post-types.png)

Vanwege de opbouw van WordPress zijn berichten en berichttypen een belangrijk onderdeel van de kernfunctionaliteit, en daarom is het beperkingssysteem van Ultimate Multisite ontworpen om de netwerkbeheerder te helpen bij het vaststellen en handhaven van limieten.

Om dit limietsubsysteem in te schakelen, zet u de schakelaar **limit post types** op actief door deze naar rechts te schuiven.

Vervolgens schakelt u voor elk berichttype dat moet worden beperkt de schakelaar in door deze naar rechts te schuiven en de maximale bovengrens in het juiste veld op te geven.

#### Schijfruimte

Het tabblad **Disk Space** stelt netwerkbeheerders in staat de ruimte te beperken die door klanten wordt verbruikt.

![Tabblad Disk Space](/img/config/product-disk-space.png)

Doorgaans worden in een WordPress multisite de kernbestanden gedeeld tussen alle sites en worden individuele mappen aangemaakt voor mediabestanden en uploads waarop deze instellingen en beperkingen van toepassing zijn.

Om de beperking van schijfgebruik in te schakelen, zet u de schakelaar **limit disk size per site** op actief door deze naar rechts te schuiven.

Specificeer vervolgens de maximale bovengrens in megabytes in het veld **disk space allowanc** e.

#### Aangepast domein

Door deze optie in te schakelen kunt u specifiek op dit plan aangepaste domeinen toestaan.

![Tabblad Custom Domains](/img/config/product-custom-domains.png)

#### Themes

Het tabblad **Themes** binnen de productopties stelt de netwerkbeheerder in staat themes beschikbaar te maken voor klanten om te selecteren en optioneel de status van de theme af te dwingen.

![Tabblad Themes](/img/config/product-themes.png)

_**Opmerking: Om themes beschikbaar te maken voor klanten, moeten ze door de netwerkbeheerder netwerkbreed zijn ingeschakeld.**_

![Pagina Network themes](/img/config/product-themes-network-enabled.png)

De optie **visibility** definieert of deze theme zichtbaar is voor de klant wanneer deze het tabblad **Appearance > Themes** binnen zijn site bekijkt. Door deze optie op **Hidden** te zetten, wordt de theme uit het zicht verwijderd en wordt zo de mogelijkheid om deze te selecteren en te activeren beperkt.

![Tabblad Themes](/img/config/product-themes.png)

De selectie **behavior** stelt de netwerkbeheerder in staat de status van de theme te definiëren bij het aanmaken van de klantensite.

In de status **A** **vailable** wordt de theme beschikbaar gemaakt voor de klant voor zelfactivatie. Omgekeerd ontneemt de status **Not Available** de klant de mogelijkheid om de theme te activeren. Ten slotte forceert de optie **Force Activate** de selectie en activatie van de theme, waardoor deze als standaard wordt ingesteld bij het aanmaken van de site.

#### Plugins

Vergelijkbaar met het tabblad Themes stelt Ultimate Multisite de netwerkbeheerder in staat de zichtbaarheid van plugins voor klanten te definiëren, evenals hun status bij het aanmaken van een nieuwe site.

![Tabblad Plugins](/img/config/product-plugins.png)

De vervolgkeuzelijst **visibility** maakt het mogelijk dat de plugin zichtbaar of verborgen is voor de klant wanneer deze op zijn site wordt bekeken via de menuoptie Plugins.

De netwerkbeheerder kan het gedrag van de plugins verder aanpassen door gebruik te maken van de opties in de gedrag-dropdown.

![Plugins-tabblad](/img/config/product-plugins.png)

De selectie **Standaard** respecteert de pluginstatus die is gedefinieerd in het sitesjabloon dat door de klant is geselecteerd. Plugins die binnen het sjabloon zijn geactiveerd, blijven dus geactiveerd wanneer het sjabloon naar de site van de klant wordt gekloond.

**Geforceerd activeren** plaatst de plugin in een actieve status bij het aanmaken van de site en omgekeerd deactiveert **Geforceerd deactiveren** de plugin bij het aanmaken van de site. In beide gevallen kan de status van de plugin handmatig door de klant worden gewijzigd via hun WordPress Plugins-menu.

De instelling **Geforceerd activeren en vergrendelen** werkt vergelijkbaar, maar voorkomt dat de pluginstatus door de klant wordt gewijzigd. Een instelling van Geforceerd activeren en vergrendelen dwingt de plugin dus naar de actieve status en voorkomt dat de klant deze deactiveert. Op dezelfde manier dwingt de instelling **Geforceerd deactiveren en vergrendelen** de plugin naar de inactieve status en voorkomt deze dat de gebruiker de plugin activeert.

De netwerkbeheerder kan overwegen de instellingen Geforceerd activeren en vergrendelen en Geforceerd deactiveren en vergrendelen te gebruiken in combinatie met sitesjablonen, omdat plugins en pluginstatussen binnen de sjablonen door deze instellingen kunnen worden beïnvloed als ze worden geselecteerd.

#### Beperkingen resetten

Het tabblad **Beperkingen resetten** reset alle aangepaste limieten die op het product zijn gedefinieerd. Klik op de knop **beperkingen resetten** om beperkingen te resetten.

![Tabblad Beperkingen resetten](/img/config/product-reset-limitations.png)

Om de actie te bevestigen, schuif je de schakelaar **reset bevestigen** naar de actieve status aan de rechterkant en klik je op de knop **beperkingen resetten**.

![Tabblad Beperkingen resetten](/img/config/product-reset-limitations.png)

## Product bewerken, dupliceren of verwijderen

Bestaande producten kunnen worden bewerkt, gedupliceerd of verwijderd door naar **Ultimate Multisite > Producten** te navigeren en met de muis over de bestaande productnaam te bewegen.

![Hoveracties voor product](/img/config/product-hover-actions.png)
