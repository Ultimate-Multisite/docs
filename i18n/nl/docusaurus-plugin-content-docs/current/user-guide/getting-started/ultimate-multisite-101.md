---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite is een WordPress Multisite plugin waarmee je een WaaS of Websites as a Service aan klanten kunt aanbieden. Voordat we erin duiken en leren hoe Ultimate Multisite je bedrijf en klanten kan helpen, is er wat basiskennis die we moeten opdoen.

## De WordPress Multisite

De meesten van ons zijn bekend met de standaard WordPress-installatie. Je maakt die aan via het controlepaneel van je hostingprovider of, voor de dapperen, je zet een nieuwe webserver en database op, downloadt de kernbestanden en begint het installatieproces.

Dit werkt voor miljoenen WordPress sites over de hele wereld, maar laten we vanuit het perspectief van een bureau of hostingprovider even de volumes bespreken.

Hoewel het een fluitje van een cent is om één WordPress site of zelfs honderd aan te maken via een geautomatiseerd controlepaneel, beginnen problemen zich al snel te tonen wanneer het aankomt op het beheer van deze sites. Onbeheerd gelaten ben je een ideaal doelwit voor malware. Beheer betekent een inspanning van moeite en middelen, en hoewel er externe tools en plugins beschikbaar zijn om het beheer en de administratie van WordPress sites te helpen stroomlijnen, betekent het feit dat klanten administratieve toegang behouden dat deze inspanningen gemakkelijk tenietgedaan kunnen worden.

Binnen de kern biedt WordPress een functie die simpelweg ‘Multisite’ heet en waarvan de oorsprong teruggaat tot 2010 bij de lancering van WordPress 3.0. Sindsdien heeft deze een aantal revisies gekregen, gericht op het introduceren van nieuwe functies en het aanscherpen van de beveiliging.

In essentie kun je een WordPress multisite als volgt zien: een universiteit onderhoudt één enkele installatie van WordPress, maar elke faculteit onderhoudt zijn eigen WordPress site.

Om deze uitspraak uiteen te zetten, kijken we naar enkele basistermen die niet alleen in de documentatie van Ultimate Multisite voorkomen, maar ook binnen de WordPress-community.

### Het netwerk

In termen van WordPress is een multisite-netwerk waar een aantal subsites vanuit één dashboard kunnen worden beheerd. Hoewel het aanmaken van een multisite-netwerk per hostingprovider verschilt, is het eindresultaat meestal een paar extra directives in het wp-config.php-bestand om WordPress te laten weten dat het in deze specifieke modus werkt.

Er zijn een aantal duidelijke verschillen tussen een multisite-netwerk en een zelfstandige WordPress-installatie, die we kort zullen bespreken.

#### Subdomain vs. Subdirectory

Een van de meest directe beslissingen die je moet nemen, is of de multisite-installatie zal werken met _subdirectories_ of _subdomains_. Ultimate Multisite werkt even goed met beide keuzes, maar er zijn enkele architecturale verschillen tussen de twee configuraties.

In _subdirectory_-configuratie erven netwerksites een pad op basis van de hoofd-domeinnaam. Een netwerksite met het label ‘site1’ heeft bijvoorbeeld als volledige URL https://domain.com/site1. In _subdomain_-configuratie heeft de netwerksite zijn eigen _subdomain_, afgeleid van de hoofd-domeinnaam. Een site met het label ‘site1’ heeft dus als volledige URL https://site1.domain.com/.

Hoewel beide opties volkomen geldige keuzes zijn, biedt het gebruik van _subdomains_ een aantal voordelen, maar vereist het ook meer aandacht en planning in de architectuur.

Wat DNS betreft, vormt het gebruik van _subdirectories_ een relatief eenvoudige uitdaging. Omdat netwerksites simpelweg kinderen van het bovenliggende pad zijn, hoeft er slechts één domeinnaamvermelding te bestaan voor de hoofd-domeinnaam. Voor _subdomains_ is de uitdaging iets complexer en is ofwel een afzonderlijke CNAME-vermelding voor elke netwerksite nodig, ofwel een wildcard (*)-vermelding in de DNS-records.

Een ander aandachtspunt is SSL en de uitgifte en het gebruik van SSL-certificaten. In _subdirectory_-configuratie kan één enkel domeincertificaat worden gebruikt, omdat de netwerksites simpelweg paden van de hoofd-domeinnaam zijn. Een certificaat voor domain.com biedt dus afdoende SSL voor https://domain.com/site1, https://domain.com/site2 enzovoort.

In _subdomain_-configuratie is het gebruik van een wildcard-SSL-certificaat een van de meest voorkomende opties. Dit type SSL-certificaat biedt versleuteling voor een domein en zijn _subdomains_. Daarom biedt een wildcard-SSL-certificaat versleuteling voor https://site1.domain.com, https://site2.domain.com en https://domain.com zelf.

Hoewel er andere opties bestaan, zijn deze vaak beperkt in reikwijdte en toepassing en vereisen ze extra configuratie en overweging met betrekking tot geschiktheid.

#### Plugins en thema's

Wat WordPress geeft, neemt het ook weer weg, althans vanuit het perspectief van de klant. In een zelfstandige WordPress-installatie is, als de sitebeheerder een slechte plugin installeert of nalaat de installatie up-to-date te houden, de enige gedupeerde en het enige slachtoffer van deze handeling hijzelf. Een sitebeheerder die echter een slechte plugin installeert op een multisite-installatie, maakt van elke site die in het netwerk is geïnstalleerd een slachtoffer.

Om deze reden verwijdert WordPress, wanneer het als multisite is geconfigureerd, de mogelijkheid voor sitebeheerders om plugins en thema's te installeren en verplaatst deze mogelijkheid in plaats daarvan naar een nieuw aangemaakte netwerkbeheerder- of ‘super admin’-rol. Deze bevoorrechte rol kan vervolgens bepalen of beheerders van netwerksites het plugins-menu in hun dashboard mogen zien of openen en, zo ja, of dergelijke machtigingen zich uitstrekken tot het _activeren_ of _deactiveren_ van plugins.

In die zin is de netwerkbeheerder verantwoordelijk voor het installeren van plugins en thema's in het netwerk en delegeert hij machtigingen om van deze plugins en thema's gebruik te maken aan netwerksites. Sitebeheerders kunnen geen plugins en thema's installeren of toegang krijgen tot plugins en thema's die niet aan hun site zijn toegewezen.

#### Gebruikers en beheerders

In een WordPress Multisite delen alle netwerksites dezelfde database en delen ze daarom dezelfde gebruikers, rollen en capabilities. De meest passende manier om erover na te denken is dat alle gebruikers leden zijn van het netwerk en niet van een specifieke site.

Met dit begrip kan het onwenselijk zijn om toe te staan dat gebruikers worden aangemaakt, en om deze reden verwijdert WordPress Multisite deze mogelijkheid bij de sitebeheerders en verplaatst deze mogelijkheid naar de netwerkbeheerder. Op zijn beurt kan de netwerkbeheerder de noodzakelijke rechten delegeren aan een sitebeheerder, zodat die gebruikersaccounts voor zijn eigen site kan aanmaken.

<!-- Screenshot niet beschikbaar: WordPress Multisite-interface voor netwerkgebruikersbeheer -->

Om de bovenstaande uitspraak te herhalen: hoewel de gebruikersaccounts aan de site gerelateerd lijken te zijn, zijn ze in feite aan het netwerk toegewezen en moeten ze daarom uniek zijn binnen het netwerk. Er kunnen gevallen zijn waarin gebruikersnamen om deze reden niet beschikbaar zijn voor registratie.

Hoewel dit geen vreemd concept is in bedrijfssystemen, is deze enkele bron voor gebruikersregistratie en authenticatie vaak een lastig concept om te begrijpen voor mensen die bekend zijn met zelfstandige WordPress-installaties, waar gebruikersbeheer wat eenvoudiger is.

#### Media

Waar netwerksites één database delen in een WordPress Multisite, behouden ze afzonderlijke paden op het bestandssysteem voor mediabestanden.

De standaard WordPress-locatie (wp-content/uploads) blijft bestaan; het pad wordt echter aangepast om de unieke ID van de netwerksite weer te geven. Daardoor verschijnen mediabestanden voor een netwerksite als wp-contents/uploads/site/[id].

#### Permalinks

We noemden eerder dat er duidelijke voordelen zijn van een _subdomain_-configuratie ten opzichte van een _subdirectory_-configuratie, en hier is het: paden.

In een _subdirectory_-configuratie moeten de hoofdsite (de eerste site die wordt aangemaakt wanneer het netwerk wordt opgezet) en netwerksubsites hetzelfde pad delen dat vanaf de domeinnaam loopt. Dit kan tot een groot aantal conflicten leiden.

Voor berichten wordt een verplicht /blog/-pad toegevoegd aan de hoofdsite om botsingen met netwerksites te voorkomen. Dit betekent dat mooie permalinks zoals ‘Berichtnaam’ worden weergegeven als domain.name/blog/post-name/

<!-- Screenshot niet beschikbaar: WordPress-permalinkinstellingen die het /blog/-pad tonen in subdirectory-configuratie -->

In een _subdomain_-configuratie is deze actie niet nodig, omdat elke netwerksite profiteert van volledige domeinscheiding en dus niet hoeft te vertrouwen op één enkel pad. In plaats daarvan behouden ze hun eigen afzonderlijke paden op basis van hun _subdomain_.

<!-- Screenshot niet beschikbaar: WordPress-permalinkinstellingen voor subdomain-configuratie -->

#### Statische pagina's

In _subdirectory_-configuratie strekt de kans op naamconflicten zich uit tot statische pagina's, omdat de hoofdsite en netwerksites hetzelfde pad delen.

Om dit te voorkomen, biedt WordPress een manier om bepaalde sitenamen op een zwarte lijst te zetten, zodat ze niet conflicteren met de namen van de eerste site. Doorgaans zou de netwerkbeheerder de rootpaden van de pagina's van de hoofdsite invoeren.

<!-- Screenshot niet beschikbaar: WordPress-netwerkinstellingen die verboden sitenamen tonen om conflicten te voorkomen -->

In _subdomain_-configuratie wordt de mogelijkheid van naamconflicten beperkt door het _subdomain_, omdat dit uniek is voor de netwerksite en op geen enkele manier gerelateerd is aan de hoofdsite.

### Registratie

Binnen de netwerkinstellingen van WordPress Multisite zijn verschillende nieuwe opties voor gebruikersregistratie beschikbaar, waarmee nieuwe en bestaande gebruikers sites kunnen aanmaken.

<!-- Screenshot niet beschikbaar: WordPress Multisite-netwerkinstellingen die registratieopties tonen -->

In tegenstelling tot zelfstandige WordPress-installaties behouden netwerksites niet de vertrouwde opties om gebruikersregistraties toe te staan of die registraties aan rollen toe te wijzen.

<!-- Screenshot niet beschikbaar: gebruikersregistratie-instellingen van zelfstandige WordPress-site met beperkte opties -->

Wanneer gebruikersaccounts worden aangemaakt, worden die accounts op netwerkniveau gegenereerd. In plaats van bij één specifieke site te horen, horen ze dus bij het netwerk. Dit heeft enkele duidelijke voor- en nadelen.

Stel bijvoorbeeld dat je WordPress Multisite actief was in nieuws en informatie. Je zou de multisite opzetten en vervolgens netwerksites maken voor financiën, technologie, entertainment en andere interessegebieden, terwijl je de algehele controle over plugins en themes behoudt. Elke netwerksite zou op zijn beurt een veel grotere mate van controle hebben over de uitstraling en gebruikerservaring van hun netwerksite dan mogelijk zou zijn met aangepaste berichttypen of reguliere berichtcategorieën.

In die zin logt een gebruiker, wanneer hij inlogt, in op het netwerk en is hij uiteindelijk ook ingelogd op elke netwerksite, om een naadloze ervaring te bieden. Als je nieuwe site op abonnementen gebaseerd was, zou dit de ideale oplossing en uitkomst zijn.

Als de beoogde aard en het doel van de multisite echter was om uiteenlopende netwerksites aan te bieden die geen relatie met elkaar hebben, is het bijna altijd zo dat externe of aanvullende plugins nodig zijn om de gebruikersrollen te manipuleren.

### Domein en SSL

Laten we het hebben over een WordPress Multisite-installatie die bijna aan onze aandacht ontsnapt: Wordpress.com. Dit is veruit het meest uitgebreide voorbeeld van een Wordpress multisite en toont de uitgebreide mogelijkheden om te worden aangepast en gevormd om een doel te vervullen.

Tegenwoordig is op het moderne internet het gebruik van SSL bijna verplicht, en netwerkbeheerders van WordPress multisites worden al snel met deze uitdagingen geconfronteerd.

In _subdomain_-configuratie worden sites aangemaakt op basis van de rootdomeinnaam. Een site met het label ‘site1’ zou dus worden aangemaakt als ‘site1.domain.com’. Door gebruik te maken van een wildcard-SSL-certificaat kan een netwerkbeheerder deze uitdaging succesvol aanpakken en SSL-versleutelingsmogelijkheden voor het netwerk bieden.

WordPress Multisite bevat een domeinkoppelingsfunctie waarmee netwerksites kunnen worden gekoppeld aan aangepaste domeinnamen of domeinnamen die verschillen van het rootdomein van het netwerk.

Voor netwerkbeheerders levert dit een extra laag complexiteit op, zowel in de configuratie van domeinnamen als in de uitgifte en het onderhoud van SSL-certificaten.

In deze mate biedt WordPress Multisite weliswaar een manier om [www.anotherdomain.com](http://www.anotherdomain.com) aan ‘site1’ te koppelen, maar blijft de netwerkbeheerder zitten met de uitdaging om de DNS-vermeldingen en de implementatie van SSL-certificaten extern te beheren.

## Ultimate Multisite

Nu de verschillen tussen een zelfstandige WordPress-installatie en een Multisite-installatie duidelijk zijn, laten we bekijken hoe Ultimate Multisite het ultieme arsenaal is voor het aanbieden van Websites as a Service.

### Inleiding

Ultimate Multisite is je Zwitsers zakmes als het gaat om het creëren van een Website as a Service (WaaS). Denk aan Wix.com, Squarespace, WordPress.com en denk er dan aan dat je je eigen service bezit.

Onder de motorkap maakt Ultimate Multisite gebruik van WordPress Multisite, maar het doet dit op een manier die niet alleen de talloze uitdagingen oplost waarmee netwerkbeheerders bij multisite-installaties te maken krijgen, maar ook de mogelijkheden uitbreidt, zodat een breed scala aan gebruiksscenario’s kan worden ondersteund.

In de volgende secties bekijken we enkele veelvoorkomende gebruiksscenario’s en overwegingen die nodig zijn om die scenario’s te ondersteunen.

### Gebruiksscenario’s

#### Scenario 1: Een bureau

Doorgaans liggen de kernvaardigheden van een bureau in het ontwerpen van websites, waarbij aspecten zoals hosting of marketing als aanvullende services worden vermeld.

Voor bureaus biedt Ultimate Multisite een ongelooflijke waardepropositie met zijn mogelijkheden om meerdere websites op één platform te hosten en te beheren. Nog meer geldt dit voor bureaus die hun ontwerpen standaardiseren op bepaalde themes zoals GeneratePress, Astra, OceanWP of andere; zij kunnen de mogelijkheden van Ultimate Multisite benutten om deze themes automatisch te activeren voor elke nieuwe site.

Evenzo stelt het gebruik van Ultimate Multisite, met de overvloed aan deals voor bureauprijzen voor gangbare en populaire plugins, bureaus in staat om bestaande investeringen te benutten door een gemeenschappelijk platform te bieden van waaruit plugins kunnen worden geïnstalleerd, onderhouden en gebruikt.

Waarschijnlijk is het gebruik van een configuratie gewenst en gelukkig maakt Ultimate Multisite het ongelooflijk eenvoudig om domeinkoppeling en SSL-certificaten te faciliteren met zijn integraties voor een aantal populaire hostingproviders, evenals services zoals Cloudflare en cPanel.

Door dus een van deze providers te benutten of door Ultimate Multisite achter Cloudflare te plaatsen, worden aspecten zoals het beheer van domeinen en SSL-certificaten enigszins triviaal.

Bureaus die liever strakke controle houden over het creëren van sites, zullen de eenvoud waarderen waarmee ze sites kunnen creëren en sites aan klanten en plannen kunnen koppelen via de gestroomlijnde interface van Ultimate Multisite.

![Ultimate Multisite sitebeheerinterface](/img/admin/sites-list.png)

Strakke controle over plugins en themes wordt per product gehandhaafd via de intuïtieve interfaces van Ultimate Multisite, waarmee plugins en themes beschikbaar kunnen worden gemaakt of verborgen, evenals hun activatiestatus wanneer ze voor een nieuwe site worden geïnstantieerd.

![Interface voor beperkingen van productplugins](/img/config/product-plugins.png)

Themes bieden vergelijkbare functionaliteit, waardoor specifieke themes kunnen worden geactiveerd of verborgen bij het creëren van een site.

![Interface voor beperkingen van productthemes](/img/config/product-themes.png)

Bureaus zullen gemoedsrust vinden met Ultimate Multisite, waardoor ze kunnen doen waar ze het beste in zijn - uitzonderlijke websites ontwerpen.

#### Scenario 2: Nicheprovider

Er is een oud gezegde dat luidt: “doe één ding en doe het goed”. Voor veel specialisten betekent dit het creëren van een product of service rond één centraal idee.

Misschien ben je een fervent golfer die websites aan clubs promoot, of misschien ben je een fervent esports-gamer die websites aan clans aanbiedt. Misschien een individu dat een boekingsservice aan restaurants promoot?

Om vele redenen zou je services willen aanbieden op basis van een gemeenschappelijk framework en platform. Het kan zijn dat je op maat gemaakte plugins hebt ontworpen of erin hebt geïnvesteerd om de vereiste functionaliteit te bieden, of het kan zijn dat best practices in de branche een vorm van gestandaardiseerde ontwerpbenadering vereisen.

Een van de innovatieve functies van Ultimate Multisite is het gebruik van templatesites. Een templatesite is er een waarbij het theme is geïnstalleerd en geactiveerd, noodzakelijke plugins zijn geïnstalleerd en geactiveerd, en voorbeeldberichten of -pagina’s zijn gemaakt. Wanneer een klant een nieuwe site creëert op basis van de template, worden de inhoud en instellingen van de template gekopieerd naar de nieuw gecreëerde site.

Voor een aanbieder van nichesites en services biedt dit een ongeëvenaard voordeel in de mogelijkheid om direct een site te creëren die klaar is voor gebruik met aangepaste plugins en ontwerp. De klant hoeft slechts minimale input te leveren om de service te voltooien.

Afhankelijk van de vereisten kunnen zowel _subdirectory_- als _subdomain_-configuraties geschikt zijn, in welk geval de architectuurkeuzes zouden liggen tussen een eenvoudig SSL-certificaat voor _subdirectories_ of een wildcard SSL-certificaat voor _subdomains_.

#### Scenario 3: WordPress-webhosting

Er zijn talloze manieren om WordPress-sites te hosten, maar zelden is het zo eenvoudig als het aanbieden van webruimte aan een klant met een vooraf geïnstalleerde versie van WordPress. Dit komt doordat een aantal beslissingen en overwegingen samen moeten komen om een zinvolle service te bieden.

Ultimate Multisite blinkt uit op dit gebied door een uitgebreide kant-en-klare oplossing te bieden voor het hosten van WordPress-sites. In de oplossing zijn de kernmechanismen inbegrepen om abonnementsservices, betalingsinning, checkout-formulieren, kortingsbonnen en klantcommunicatie te bieden.

Veel van het integrale werk dat nodig is om een WordPress Multisite correct te installeren, configureren en onderhouden, wordt door Ultimate Multisite gefaciliteerd in die mate dat netwerkbeheerders alleen aspecten hoeven te overwegen voor zover die betrekking hebben op hun service of niche, zoals productniveaus, prijzen en serviceaanbiedingen.

Voor ontwikkelaars die willen integreren met Ultimate Multisite, biedt de oplossing ook een uitgebreide RESTful API en Webhooks voor gebeurtenismeldingen.

Zonder afhankelijkheid van een veelheid aan externe plugins en licenties biedt Ultimate Multisite een feature-rijke en vergelijkbare oplossing met die van Wix, Squarespace, WordPress.com en anderen.

### Architectuuroverwegingen

Hoewel dit geen uitgebreide gids is, zouden de volgende punten als richtlijn moeten dienen voor de juiste selectie van technologieën ter ondersteuning van een Ultimate Multisite-installatie.

#### Gedeelde vs. Dedicated Hosting

Helaas zijn niet alle hostingproviders gelijk en sommige hanteren extreme serverdichtheden. Goedkope providers genereren doorgaans inkomsten door de serverdichtheid te maximaliseren. Daardoor kan je Ultimate Multisite-installatie slechts één van enkele honderden sites op dezelfde server zijn.

Zonder passende waarborgen van de provider ervaren sites op een gedeelde server het probleem van de ‘luidruchtige buur’. Dat wil zeggen: een site op dezelfde server verbruikt zoveel resources dat andere sites moeten concurreren om de resterende resources. Vaak uit zich dit in sites die traag zijn of niet tijdig reageren.

Als aanbieder van webhosting zullen de doorwerkingseffecten betekenen dat je klanten slechte snelheden, een lage paginarangschikking en hoge bouncepercentages ervaren, wat vaak resulteert in klantverloop wanneer ze elders diensten zoeken.

Kortom: goedkoop betekent niet goed.

Ultimate Multisite staat erom bekend te werken met een aantal goede hostingproviders en integreert goed met hun omgeving om functies zoals domeintoewijzing en automatische SSL te bieden. Deze providers hechten waarde aan prestaties en leveren een dienst van hogere kwaliteit dan gedeelde hosting.

Voor een lijst met compatibele providers en volledige installatie-instructies voor elk daarvan, raadpleeg de documentatie van Compatible Providers.

#### Prestatieoverwegingen

Ultimate Multisite is geen trage applicatie; integendeel, het is opmerkelijk snel. Het presteert echter slechts zo goed als de onderliggende applicatie en infrastructuur en kan alleen benutten waartoe het toegang heeft.

Overweeg dit: je bent de netwerkbeheerder van een Ultimate Multisite-installatie met 100 sites. Sommige van die sites doen het goed en trekken elke dag een aantal websitebezoekers aan.

Dit scenario zou op kleinere schaal anders zijn, bijvoorbeeld bij één tot vijf sites, maar al snel zouden schaalproblemen duidelijk worden.

Als er niets aan wordt gedaan, zou de enkele Ultimate Multisite-site verantwoordelijk zijn voor het afhandelen van de verzoeken van alle bezoekers aan de sites. Deze verzoeken kunnen voor dynamische PHP-pagina’s zijn of voor statische assets zoals stylesheets, javascript of mediabestanden. Of het nu om één of honderd sites gaat, deze taken worden repetitief, eentonig en verspillen resources. Het is onnodig om CPU-kracht en geheugen te gebruiken om een PHP-bestand te verwerken wanneer de uitvoer voor elk verzoek dezelfde statische informatie is.

Evenzo genereert één verzoek voor een PHP- of HTML-pagina op zijn beurt meerdere daaropvolgende verzoeken voor scripts, stylesheets en afbeeldingsbestanden. Die verzoeken zijn rechtstreeks gericht op je Ultimate Multisite-server.

Je zou dit probleem gemakkelijk kunnen oplossen door de server te upgraden, maar dat lost een tweede probleem niet op: geografische latenties. Alleen meerdere servers op meerdere locaties zouden dit probleem goed kunnen aanpakken.

Om deze reden maken de meeste netwerkbeheerders gebruik van front-end caching-oplossingen en contentdistributienetwerken (CDN) om de verzoeken voor statische pagina’s af te handelen. Het afhandelen van deze verzoeken en het aanbieden van assets voordat het verzoek de server bereikt, bespaart verwerkingsresources, elimineert vertragingen, voorkomt onnodige upgrades en maximaliseert technologie-investeringen.

Ultimate Multisite bevat een geavanceerde Cloudflare-add-on waarmee netwerkbeheerders hun installaties achter Cloudflare kunnen plaatsen en niet alleen gebruik kunnen maken van de cachingmogelijkheden, maar ook van DNS-hosting, SSL-certificaten en beveiligingsmechanismen.

#### Back-ups

Je zou 50 mensen om advies over back-ups kunnen vragen en 50 verschillende meningen over back-upstrategieën krijgen. Het antwoord is: het hangt ervan af.

Wat niet ter discussie staat, is dat back-ups vereist zijn en dat het bijna ondenkbaar is dat deze niet door de provider worden beheerd, specifiek door een provider die een beheerde dienst aanbiedt. Bijgevolg zullen klanten naar de netwerkbeheerder kijken om deze dienst te leveren en te beheren. Naar wie de netwerkbeheerder kijkt, is een heel ander probleem.

Voor de doeleinden van deze sectie laten we afspreken dat een back-up een momentopname is van de systeemstatus op het moment dat de back-up werd gestart. Simpel gezegd: wat de status van het systeem ook is op het moment van de back-up, die status wordt vastgelegd en veilig opgeborgen in de back-up.

Met dit begrip zal het antwoord op hoe de back-ups moeten worden gerealiseerd en wat het beste is voor je omgeving grotendeels afhangen van je vereisten en het vermogen van de hostingprovider om aan die vereisten te voldoen. In volgorde van meest uitgesproken tot minst uitgesproken zouden de onderstaande opties echter enige richting moeten bieden.

#### Snapshots

Snapshots zijn de wondermiddelen voor back-ups omdat ze eenvoudig en ongecompliceerd zijn (totdat je wilt herstellen) en ‘gewoon werken’. Het vereist echter wel enige hulp van je provider en is meestal alleen van toepassing als je een VPS (Virtual Private Server) of iets vergelijkbaars hebt. Verschillende providers die in onze documentatie voor ‘Compatible Providers’ worden vermeld, bieden back-ups die geen verdere tussenkomst of overweging van de netwerkbeheerder vereisen.

Waar traditionele back-ups zich richten op bestanden en databases, richt een snapshot zich op de volledige schijf. Dit betekent dat niet alleen de data van de site in de snapshot wordt vastgelegd, maar ook het besturingssysteem en de configuratie. Voor velen is dit een duidelijk voordeel, omdat een nieuw systeem vrijwel direct vanuit een snapshot kan worden aangemaakt en in gebruik kan worden genomen ter vervanging van een haperende instantie. Evenzo vereist het herstelproces om alleen bestanden op te halen slechts dat de snapshot-image als schijf aan een bestaande instantie wordt gekoppeld, zodat de bestanden kunnen worden benaderd en gekopieerd.

Snapshots kunnen extra kosten met zich meebrengen bij de hostingprovider, maar het is een verzekeringspolis tegen ongelukken.

#### Externe scripts

Er lijkt geen tekort te zijn aan externe scripts en oplossingen om WordPress- en MySQL-resources te back-uppen, en deze zouden goed werken voor Ultimate Multisite, aangezien het een WordPress plugin is die gebruikmaakt van het WordPress-bestandssysteem en de database. Een oplossing die WordPress-sites back-upt, zou dus voldoende voorzien in de behoeften van Ultimate Multisite.

We kunnen niet het ene script boven het andere aanbevelen, maar ons algemene advies is om meerdere backup- en hersteltests uit te voeren om te verzekeren dat de resultaten naar wens zijn, en om ‘zeker te zijn van je zaak’ door het script en de functionaliteit ervan voortdurend te evalueren, vooral wanneer een vorm van differentiële backupstrategie wordt toegepast.

Het is belangrijk op te merken dat deze scripts, terwijl ze draaien, de systeembelasting zullen verhogen; hiermee moet rekening worden gehouden.

#### Plugins

Er is bijna geen probleem in WordPress dat niet met een plugin kan worden opgelost, en als het beheren van externe scripts niet jouw kopje java is, dan is een plugin misschien de beste volgende optie.

Hoewel plugins verschillen in opties en functies, voeren ze meestal dezelfde functie uit: een kopie maken van de WordPress-bestanden en de database-inhoud. Daarna verschillen de functionaliteiten, aangezien sommige plugins de backups naar externe diensten kunnen sturen, zoals Google Drive of Dropbox, of naar een soort compatibele objectopslagdienst zoals S3, Wasabi of andere. De uitgebreidere plugins bieden differentiële backups of een soort strategie om alleen gegevens te back-uppen die zijn gewijzigd, om kosten voor externe opslag te besparen.

Let er bij het kiezen van je plugin op dat je controleert of deze geschikt is voor multisite. Vanwege de aard van de werking kun je, terwijl de backup draait, tijdelijke belasting op de server verwachten totdat het proces is voltooid.

#### Domein en SSL

Er is al veel besproken over domeinnamen in multisite _subdomain_-modus. Een bijna universele oplossing voor netwerkbeheerders is het gebruik van wildcard DNS-vermeldingen.

![Voorbeeld van configuratie van wildcard DNS-vermelding](/img/config/settings-domain-mapping.png)

Dit type DNS-vermelding zal _subdomains_ zoals ‘site1.domain.com’ en ‘site2.domain.com’ succesvol laten verwijzen naar een IP-adres van 1.2.3.4, en ondersteunt daarmee Ultimate Multisite en in bredere zin WordPress Multisite met _subdomain_-modus.

Dit kan perfect werken voor HTTP, omdat de doelhost uit de HTTP-headers wordt gelezen, maar het web is tegenwoordig zelden zo eenvoudig, nu veilige HTTPS-transacties bijna verplicht zijn.

Gelukkig zijn er eenvoudige opties voor SSL-certificaten. In _subdirectory_-modus kan een regulier domeincertificaat worden gebruikt. Deze zijn gemakkelijk en gratis verkrijgbaar bij hostingproviders die mogelijk de gratis LetsEncrypt-dienst of een andere bron gebruiken. Anders zijn deze commercieel verkrijgbaar bij autoriteiten als je het certificate signing request kunt genereren.

Voor _subdomain_-modus gaat het gebruik van een wildcard SSL-certificaat perfect samen met een wildcard-domein en kan het certificaat gezaghebbend zijn voor het rootdomein en alle _subdomains_ zonder overbodige configuratie.

Er moet echter worden opgemerkt dat wildcard SSL-certificaten mogelijk niet werken met diensten zoals Cloudflare, tenzij je een enterprise plan hebt of de vermelding instelt op alleen DNS, in welk geval alle caching en optimalisatie worden omzeild.

Out-of-the-box biedt Ultimate Multisite een oplossing voor dit probleem, wat onze uitgebreide ervaring met de behoeften van WordPress multisites aantoont. Door deze eenvoudige add-on te activeren, laat Ultimate Multisite je Cloudflare-inloggegevens gebruiken om automatisch DNS-vermeldingen voor netwerksites in Cloudflare toe te voegen en hun modus in te stellen op ‘proxied’. Op deze manier krijgt elke netwerksubsite, wanneer deze wordt aangemaakt, de volledige bescherming en voordelen van Cloudflare, inclusief SSL.

Afhankelijk van de aard en het doel van je Ultimate Multisite-installatie kan het nodig zijn dat klanten hun eigen domeinen gebruiken. In dat geval is de netwerkbeheerder verantwoordelijk voor het oplossen van twee problemen. Ten eerste de hosting van de domeinnaam en ten tweede SSL-certificaten voor het domein.

Voor velen is het gebruik van Cloudflare een eenvoudige optie. De klant hoeft alleen zijn domein op Cloudflare te plaatsen, een CNAME naar het rootdomein van Ultimate Multisite te verwijzen en zijn domein in Ultimate Multisite te koppelen om gebruik te kunnen maken van zijn aangepaste domeinnaam.

Daarbuiten moeten alternatieve oplossingen worden gezocht, en daarom beveelt Ultimate Multisite een lijst met Compatible Providers aan. Dit komt doordat het proces van het instellen van DNS en SSL geen triviaal proces kan zijn. Met de integratie van Ultimate Multisite met deze providers wordt de complexiteit echter grotendeels weggenomen en wordt de procedure geautomatiseerd.

#### Plugins

Het is zeer waarschijnlijk dat je aanvullende plugins nodig hebt om functionaliteit te bieden aan je klanten of netwerksites. Werken alle plugins met WordPress Multisite en Ultimate Multisite? Nou, dat hangt ervan af.

Hoewel de meeste plugins installeerbaar zijn in een WordPress Multisite, verschilt hun activering en licentiëring per auteur.

De uitdaging ligt in hoe licentiëring wordt toegepast, waarbij sommige plugins licentiëring per domein vereisen. Dit zou betekenen dat de netwerkbeheerder voor sommige plugins de licentie handmatig moet activeren voor elke plugin op elke nieuwe site.

Daarom is het wellicht het beste om bij de plugin-auteur na te gaan hoe hun plugin zou werken met een WordPress Multisite en welke speciale vereisten of procedures nodig zijn om deze te licentiëren.
