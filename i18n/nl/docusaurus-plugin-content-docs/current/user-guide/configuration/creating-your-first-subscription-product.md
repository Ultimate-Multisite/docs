---
title: Creëer je eerste abonnementsproduct
sidebar_position: 6
_i18n_hash: 0df17700c38413389d0678786906ad26
---
# Het creëren van je eerste abonnementsproduct (v2)

_**BELANGRIJK: Dit artikel is alleen voor Ultimate Multisite versie 2.x gebruikers. Als je versie 1.x gebruikt,**_ **_**bekijk dit artikel**_**._

Om je netwerk te laten draaien en je diensten te gaan verkopen aan potentiële gebruikers, moet je verschillende abonnementsopties hebben. Hoe maak je deze producten aan? Welke soorten producten kun je aanbieden? In dit artikel behandelen we alles wat je moet weten over producten.

## Producttype

Met Ultimate Multisite kun je twee categorieën producten aan je klanten aanbieden: **plannen** en **add-ons** **(Order Bump)**. Add-ons kunnen worden onderverdeeld in twee types: **pakketten** en **diensten**. We bekijken hun verschillen en bijzonderheden hieronder.

* **Plannen** : het fundamentele product van Ultimate Multisite. Je klant kan alleen een lidmaatschap hebben als het gekoppeld is aan een plan. Een plan biedt je klanten één of meer sites (het hangt af van de configuraties van je plan) met de beperkingen die je instelt op je productbewerkingspagina.

* **Pakketten** : add-ons die rechtstreeks invloed hebben op de functionaliteiten van Ultimate Multisite-plannen. Ze wijzigen beperkingen of voegen nieuwe bronnen, plugins of thema's toe aan het oorspronkelijke plan dat je klant heeft gekocht. Bijvoorbeeld, een basisplan staat 1.000 bezoeken per maand toe en je kunt een pakket beschikbaar maken dat dit aantal uitbreidt tot 10.000.

* **Diensten** : add-ons die de functionaliteiten van Ultimate Multisite niet wijzigen. Het zijn taken die je voor je klant uitvoert naast het plan dat ze hebben gekocht. Bijvoorbeeld, je klant kan een plan kopen dat één site toestaat en ook een extra dienst betalen die deze site ontwerpt.

## Producten beheren

Voor velen kan de **Products** tab in Ultimate Multisite **(Ultimate Multisite > Products)** worden vergeleken met plannen in een traditionele hostingomgeving.

Binnen Ultimate Multisite definieert de Products tab de constructie en beperkingen die van toepassing zijn op een specifiek product of dienst. Deze constructies omvatten product- of dienstbeschrijving, prijs, belastingen en permissies.

Deze sectie helpt je om dit essentiële hoeksteen van Ultimate Multisite te begrijpen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1YccQg0IBG.png)

## Producten toevoegen

Of het nu een plan, pakket of dienst is, het startpunt voor het definiëren van een nieuw item is via **Ultimate Multisite > Products > Add Product**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0AmJMeqen.png)

De interface bevat twee hoofdsecties. Aan de linkerkant bevinden zich verschillende tabs die helpen bij het definiëren van het product en aan de rechterkant zijn een aantal secties om de basisprijs van het product, de actieve status en het productafbeelding te definiëren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WRwYrlk0BS.png)

### Beschrijving

De basisproductinformatie kan worden gedefinieerd door een productnaam en beschrijving op te geven. Deze identificatoren worden weergegeven waar de productinformatie nodig is, zoals bij het selecteren van een plan en prijs, facturen, upgrades en dergelijke.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U9YjF0dghJ.png)

### Prijs Type

Aan de rechterkant van de interface kan de basisprijs worden gedefinieerd.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oHwhlrBFC9.png)

Ultimate Multisite ondersteunt drie verschillende prijsopties. De **paid** optie vraagt de netwerkbeheerder om informatie over de prijs van het product en de factureringsfrequentie.

### Prijs

Het prijscomponent definieert de basisproductprijs en het factureringsinterval.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-T03WJISsoh.png)

bijvoorbeeld een voorbeeldprijs van $29,99 met een instelling van 1 maand factureert $29,99 per maand. Evenzo, een prijs van $89,97 met een instelling van 3 maanden factureert dat bedrag per kwartaal.

### Factureringscycli

De factureringscycli sectie specificeert de frequentie van het genoemde factureringsinterval en wordt over het algemeen begrepen in het licht van contracten of vaste termijnen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-hVVAoxC4Jt.png)

Bijvoorbeeld, een productprijs van $29,99 met een interval van 1 maand en 12 factureringscycli zou $29,99 per maand factureren voor het product gedurende de volgende 12 maanden. Met andere woorden, een dergelijke instelling zou een vaste prijstermijn van $29,99 per maand voor 12 maanden vaststellen en vervolgens stoppen met factureren.

### Proefperiode

Het inschakelen van de proefperiode toggle stelt de netwerkbeheerder in staat een proefperiode voor het product te definiëren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MzxhWHqJLC.png)

Tijdens de proefperiode kunnen klanten het product vrij gebruiken en worden ze niet gefactureerd totdat de proefperiode is verstreken.

### Installatievergoeding

Je kunt ook een installatievergoeding toepassen op je plan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-8ZA2YvhWyK.png)

Dit betekent dat je klant een extra bedrag betaalt bij de eerste factuur (naast het prijsplan) dat overeenkomt met de vergoeding die je in deze sectie hebt gedefinieerd.

### Actief

De actieve toggle bepaalt effectief of het product beschikbaar is voor klanten voor nieuwe aanmeldingen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-74ET2mPskK.png)

Als er bestaande klanten op dit plan zijn, zorgt het uitschakelen van de toggle ervoor dat het plan wordt verouderd en wordt verwijderd uit toekomstige aanmeldingen. **Bestaande klanten op het plan blijven gefactureerd** totdat ze worden overgezet naar een nieuw plan of uit het plan worden verwijderd.

### Productafbeelding

De **Upload Image** knop stelt de netwerkbeheerder in staat om de mediabibliotheek te gebruiken om een productafbeelding te selecteren of te uploaden.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9tHhGvokLA.png)

### Verwijderen

De **Delete Product** knop verwijdert het product uit het systeem. Het verschijnt zodra het product is gepubliceerd.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rrmQohvw3S.png)

In tegenstelling tot andere verwijderingen wordt het product niet in een prullenbak geplaatst. Zodra het is verwijderd, is de actie onomkeerbaar.

### Productopties

Zodra de basisproductinformatie is gedefinieerd, helpen de productopties de netwerkbeheerder om de specifieke attributen van het product verder te definiëren.

#### Algemeen

De **General** tab definieert de algemene attributen van het product die niet van toepassing zijn op een van de andere product-specifieke tabs.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-z32g4XQeyT.png)

De zelfverklarende **product slug** definieert de slug waarmee het product wordt geïdentificeerd in URL's en andere gebieden van Ultimate Multisite.

Ultimate Multisite ondersteunt verschillende producttypes, namelijk Plan, Package en Service. De **Product Options** tabs worden dynamisch aangepast afhankelijk van het gespecificeerde producttype.

De **Customer Role** specificeert de rol die de klant krijgt toegewezen wanneer de site wordt aangemaakt. Meestal is dit voor de meeste netwerkbeheerders de Ultimate Multisite standaard of Administrator. De Ultimate Multisite standaardrol kan worden ingesteld in **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ap5I4lXWwB.png)

#### Up & Downgrades

Deze tab specificeert de upgrade- en downgradepaden die beschikbaar zijn voor een klant binnen hun specifieke niveau.

Om dit concept te begrijpen, overweeg een voorbeeld waarbij een niche Ultimate Multisite-installatie leerbeheersystemen aan haar klanten levert. Om dit te bereiken worden drie plannen (Basic, Plus en Premium) gedefinieerd en worden specifieke plugins geactiveerd voor elk plan (zie later in deze sectie voor instructies over het activeren van plugins).

Als de Ultimate Multisite-installatie ook bedrijfswebsites of eCommerce-websites bedient, kunnen die plannen verschillende plugins vereisen om te installeren en te activeren.

In die zin zou het ongewenst en problematisch zijn om eLearning-klanten toe te staan over te stappen naar eCommerce-plannen, aangezien deze plannen, prijzen en beperkingen mogelijk niet geschikt zijn.

Om de route van de klant te beperken en incidenten te voorkomen, kan de netwerkbeheerder een plangroep definiëren en binnen die groep de plannen specificeren waarnaar de klant kan overgaan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JnrZ4fWFEC.png)

Om een plangroep te definiëren, specificeer je de compatibele plannen in de **plan group** lijst. De **product order** bepaalt hoe de plannen worden gerangschikt en weergegeven van laag naar hoog.

Ultimate Multisite bevat ook een **order bump** functie waarbij geschikte add-on producten en diensten aan plannen kunnen worden toegevoegd. Deze worden aan de klant aangeboden als extra items die aan plannen kunnen worden toegevoegd bij het afrekenen of tijdens een upgrade.

#### Prijsvariaties

Prijsvariaties stellen de netwerkbeheerder in staat alternatieve prijsniveaus te specificeren op basis van duur. Deze instelling maakt het mogelijk om prijsniveaus van 3 maanden, 6 maanden of jaarlijks vast te stellen, of elke andere duur en frequentie zoals bepaald door het gebruiksscenario.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-d75YUO3opm.png)

Om prijsvariaties in te stellen, zet je de **enable price variations** toggle op actief en klik je op de **Add new Price Variation** knop.

Om een variatie in te voeren, stel je de duur, periode en prijs van de variatie in. Extra variaties kunnen worden ingevoerd door opnieuw op de knop te klikken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-x73uxkMU8o.png)

#### Belastingen

De **Taxes** tab is in lijn met de belastinginstellingen gespecificeerd in **Ultimate Multisite > Settings > Taxes** en meer specifiek de gedefinieerde belastingtarieven. Om belastingen in te schakelen en toepasselijke belastingtarieven te definiëren, zie de documentatie op **Ultimate Multisite: Settings**

**![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xYLtpFySzL.png)**

In een vorig voorbeeld gaven we een lokaal belastingtarief van 7,25% aan voor klanten in Californië (Verenigde Staten van Amerika).

Zodra het belastingtarief is gedefinieerd in **Ultimate Multisite > Settings > Manage Tax Rates** is het selecteerbaar op productniveau.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Sh1BVGVj6i.png)

Om aan te geven dat een product een belastbaar item is, zet je de **Is Taxable** toggle op actief en selecteer je het toepasselijke belastingtarief uit het Tax Category dropdown.

#### Site Templates

In wezen zijn site templates complete WordPress-websites die aan het begin van hun abonnement naar de site van een klant worden gekloond.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-llMSMXCDt4.png)

De netwerkbeheerder maakt en configureert de template site als een reguliere WordPress-site met geactiveerde en geconfigureerde thema's, plugins en inhoud. De template site wordt letterlijk gekloond naar de klant.

Deze tab laat de netwerkbeheerder het gedrag van site templates bij een nieuw abonnement specificeren. Om site templates te gebruiken, zet je de **allow site templates** toggle op actief.

De **site template selection mode** definieert het gedrag van site templates tijdens het abonnementsproces.

De **D** **efault** instelling volgt de stappen in het afrekenformulier. Als de netwerkbeheerder een template selectie stap heeft gedefinieerd in het afrekenproces en de stap is gedefinieerd met templates, zal deze instelling de richtlijnen respecteren die zijn vastgesteld in de checkout stap.

Het specificeren van **A** **ssign Site Template** dwingt de selectie van de opgegeven template. Daardoor worden alle template selectie stappen in het afrekenproces verwijderd.

Ten slotte overschrijft **C** **hoose Available Site Templates** de templates gespecificeerd in de checkout stap met de templates geselecteerd in deze instelling. Een vooraf geselecteerde template kan ook worden gedefinieerd om de klant te helpen bij de selectie.

Uiteindelijk, als de netwerkbeheerder wil dat template selectie plaatsvindt in de checkout stappen, volstaat de instelling van ‘_default_’. Als alternatief om template selectie te verwijderen en te vergrendelen en de selectie te delegeren aan de planinstellingen, kunnen de opties ‘_assign new template_’ of ‘_choose available site templates_’ wenselijk zijn.

#### Sites

De **Sites** tab maakt deel uit van de beperkingenfunctionaliteit van Ultimate Multisite.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-A8fzNucGyC.png)

Deze instelling specificeert het maximale aantal sites dat een klant kan aanmaken onder hun lidmaatschap.

Om de beperking in te schakelen, zet je de **limit sites** toggle op actief en specificeer je het maximale aantal sites in het **site allowance** veld.

#### Bezoeken

De **Visits** tab is een verdere onderdeel van het beperkingssysteem van Ultimate Multisite. Deze instelling maakt het mogelijk om het aantal unieke bezoekers van een klant's site te registreren en vervolgens te beperken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-e7f5otg89m.png)

Vanuit een marketingperspectief kunnen netwerkbeheerders deze instelling gebruiken als middel om klanten aan te moedigen hun plan te upgraden zodra de limieten zijn bereikt. Deze instelling kan ook helpen de netwerkbeheerder om overmatig verkeer naar sites te beperken en te voorkomen om systeemresources te behouden.

Om deze functie te gebruiken, zet je de **limit unique visits** toggle op actief en specificeer je het maximale aantal unieke bezoekers in het **unique visits quota** veld.

Zodra deze limiet is bereikt, stopt Ultimate Multisite met het bedienen van de klant's site in plaats van een bericht weer te geven dat de limieten zijn overschreden.

#### Gebruikers

De 'Users' beperkingen van Ultimate Multisite stellen de netwerkbeheerder in staat om limieten op te leggen aan het aantal gebruikers dat kan worden aangemaakt en toegewezen aan rollen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-maGYqW7WlP.png)

Om de beperkingsfunctie in te schakelen, zet je de **limit user** toggle op actief door deze naar rechts te schuiven.

Vervolgens, voor elke rol die beperkt moet worden, zet je de toggle naast die rol op actief en definieer je de maximale bovengrens in het juiste veld.

#### Post Types

De **Post Types** tab laat de netwerkbeheerder gedetailleerde limieten opleggen aan de uitgebreide reeks posttypes binnen WordPress.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ZELQvvqyvn.png)

Vanwege de constructie van WordPress zijn posts en posttypes een belangrijk onderdeel van de kernfunctionaliteit, en dus is het beperkingssysteem van Ultimate Multisite ontworpen om de netwerkbeheerder te helpen bij het vaststellen en handhaven van limieten.

Om dit subsysteem van limieten in te schakelen, zet je de **limit post types** toggle op actief door deze naar rechts te schuiven.

Vervolgens, voor elke posttype die beperkt moet worden, schakel je deze in door deze naar rechts te schuiven en de maximale bovengrens in het juiste veld te specificeren.

#### Schijfruimte

De **Disk Space** tab laat netwerkbeheerders de ruimte beperken die door klanten wordt verbruikt.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-EqlaLO0ebw.png)

Meestal worden in een WordPress multisite de kernbestanden gedeeld tussen alle sites en individuele mappen gemaakt voor mediabestanden en uploads waarop deze instellingen en beperkingen van toepassing zijn.

Om de beperking van schijfruimte in te schakelen, zet je de **limit disk size per site** toggle op actief door deze naar rechts te schuiven.

Vervolgens specificeer je de maximale bovengrens in megabytes in het **disk space allowanc** e veld.

#### Aangepaste Domein

Door deze optie in te schakelen, kun je aangepaste domeinen op dit plan specifiek toestaan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-KEMuUG76Fg.png)

#### Thema's

De **Themes** tab binnen de productopties laat de netwerkbeheerder thema's beschikbaar maken voor klanten om te selecteren en optioneel de staat van het thema afdwingen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rkyVSGnDqo.png)

_**Opmerking: Voor thema's om beschikbaar te zijn voor klanten moeten ze netwerkingeschakeld zijn door de netwerkbeheerder.**_

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HAQShYB7Y1.png)

De **visibility** optie definieert of dit thema zichtbaar is voor de klant wanneer ze hun **Appearance > Themes** tab bekijken binnen hun site. Het instellen van deze optie op **Hidden** verwijdert het thema uit het zicht en beperkt zo de mogelijkheid om het te selecteren en te activeren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ivsGIABl55.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

De **behavior** selectie laat de netwerkbeheerder de staat van het thema definiëren bij het aanmaken van de klantsite.

In de **A** **vailable** staat wordt het thema beschikbaar gesteld aan de klant voor zelfactivering. Omgekeerd verwijdert de **Not Available** staat de mogelijkheid voor de klant om het thema te activeren. Ten slotte dwingt de **Force Activate** optie de selectie en activatie van het thema, waardoor het als standaard wordt ingesteld bij het aanmaken van de site.

#### Plugins

Net als bij de Themes tab, laat Ultimate Multisite de netwerkbeheerder de zichtbaarheid van plugins voor klanten definiëren, evenals hun staat bij het aanmaken van een nieuwe site.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Ipzv31FIb6.png)

De **visibility** dropdown laat de plugin zichtbaar of verborgen zijn voor de klant wanneer deze wordt bekeken op hun site via het Plugins menu-optie.

De netwerkbeheerder kan het gedrag van de plugins verder manipuleren door gebruik te maken van de opties in de behavior dropdown.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jPTC92eZwc.png)

De **Default** selectie respecteert de plugin staat gedefinieerd in de site template geselecteerd door de klant. Zo blijven plugins die binnen de template zijn geactiveerd, geactiveerd wanneer de template wordt gekloond naar de klant's site.

De **Force Activate** zet de plugin in een actieve staat bij het aanmaken van de site en omgekeerd de **Force Inactivate** deactiveert de plugin bij het aanmaken van de site. In beide omstandigheden kan de staat van de plugin handmatig worden gewijzigd door de klant via hun WordPress Plugins menu.

De **Force Activate & Lock** instelling werkt op dezelfde manier, maar voorkomt dat de plugin staat wordt gewijzigd door de klant. Zo dwingt een instelling van Force Activate and Lock de plugin in zijn actieve staat en voorkomt dat de klant het deactiveert. Evenzo dwingt de **Force Inactivate & Lock** instelling de plugin naar zijn inactieve staat en voorkomt dat de gebruiker de plugin activeert.

De netwerkbeheerder kan overwegen de Force Activate & Lock en Force Inactivate & Lock instellingen te combineren met site templates, aangezien plugins en plugin staten binnen de templates kunnen worden beïnvloed door deze instellingen als ze zijn geselecteerd.

#### Reset Beperkingen

De **Reset Limitations** tab reset alle aangepaste limieten gedefinieerd op het product. Om de beperkingen te resetten, klik op de **reset limitations** knop.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UXNQerLby7.png)

Om de actie te bevestigen, schuif je de **confirm reset** toggle naar rechts op actief en klik je op de **reset limitations** knop.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-xKySIUIvrI.png)

#### Legacy Opties

De **Legacy Options** tab observeert bepaalde opties en gedragingen gedefinieerd in Ultimate Multisite 1.x.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Fn3BjwTH4r.png)

Deze opties worden aangeboden voor compatibiliteit en gemakkelijke overgang en zullen in toekomstige releases worden gedeactiveerd.

## Bewerken, dupliceren of verwijderen product

Bestaande producten kunnen worden bewerkt, gedupliceerd of verwijderd door naar **Ultimate Multisite > Products** te navigeren en over de bestaande productnaam te zweven.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GcHtJl6WmV.png)

## 

###
