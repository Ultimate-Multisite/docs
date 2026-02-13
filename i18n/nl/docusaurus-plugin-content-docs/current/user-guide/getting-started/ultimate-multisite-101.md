---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 16b22d6284bfcd5dc740566431abfbf1
---
# Ultimate Multisite 101

Ultimate Multisite is een WordPress Multisite-plug‑in die je in staat stelt om WaaS of Websites as a Service aan klanten aan te bieden. Voordat we duiken en leren hoe Ultimate Multisite je bedrijf en klanten kan helpen, hebben we wat basiskennis nodig.

## De WordPress Multisite

De meeste van ons zijn bekend met de standaard WordPress-installatie. Je maakt het ofwel via het controlepaneel van je hostingprovider of, voor de moedigen, richt je een nieuwe webserver en database in, download je de kernbestanden en begin je met het installatieproces.

Dit werkt voor miljoenen WordPress‑sites over de hele wereld, maar vanuit het perspectief van een bureau of hostingprovider laten we even de volumes bespreken.

Hoewel het een synchronisatie is om één WordPress‑site of zelfs honderd via een geautomatiseerd controlepaneel te creëren, beginnen problemen al snel zich te tonen wanneer het overgaat tot het beheer van deze sites. Zonder beheer ben je een primair doelwit voor malware. Beheren betekent een inspanning en middelen vergen, en hoewel er externe tools en plug‑ins beschikbaar zijn om het beheer en de administratie van WordPress‑sites te stroomlijnen, betekent het feit dat klanten administratieve toegang behouden dat deze inspanningen gemakkelijk kunnen worden verslagen.

In zijn kern biedt WordPress een functie eenvoudig getiteld ‘Multisite’ die zijn oorsprong teruggaat tot 2010 bij de lancering van WordPress 3.0. Sindsdien heeft het een aantal revisies ontvangen gericht op het introduceren van nieuwe functies en het versterken van de beveiliging.

In wezen kan een WordPress‑multisite worden gezien als volgt: Een universiteit onderhoudt één installatie van WordPress, maar elke faculteit onderhoudt zijn eigen WordPress‑site.

Om deze uitspraak te verduidelijken, laten we eens kijken naar enkele van de basisterminologie die niet alleen in de documentatie van Ultimate Multisite voorkomt, maar ook in de WordPress‑gemeenschap.

### Het Netwerk

In termen van WordPress is een multisite‑netwerk een netwerk waarbij een aantal subsites vanuit één dashboard kunnen worden beheerd. Hoewel het creëren van een multisite‑netwerk verschilt tussen hostingproviders, is het eindresultaat meestal een paar extra richtlijnen in het wp-config.php‑bestand om WordPress te laten weten dat het in deze specifieke modus werkt.

Er zijn een aantal duidelijke verschillen tussen een multisite‑netwerk en een zelfstandige WordPress‑installatie die we kort zullen bespreken.

#### Subdomein vs. Subdirectory

Een van de meest directe beslissingen die je moet nemen, is of de multisite‑installatie zal werken met _subdirectories_ of _subdomains_. Ultimate Multisite werkt even goed met beide keuzes, maar er zijn enkele architecturale verschillen tussen de twee configuraties.

In een _subdirectory_-configuratie erven netwerk‑sites een pad gebaseerd op de hoofddomeinnaam. Bijvoorbeeld een netwerk‑site met de naam ‘site1’ heeft de volledige URL https://domain.com/site1. In een _subdomain_-configuratie heeft de netwerk‑site zijn eigen _subdomain_ afgeleid van de hoofddomeinnaam. Zo heeft een site met de naam ‘site1’ de volledige URL https://site1.domain.com/.

Hoewel beide opties volledig valide keuzes zijn, biedt het gebruik van _subdomains_ een aantal voordelen, maar vereist het ook meer nadenken en planning in de architectuur.

In termen van DNS presenteert het gebruik van _subdirectories_ een relatief eenvoudige uitdaging. Omdat netwerk‑sites simpelweg kinderen zijn van het hoofdpad, hoeft er slechts één domeinnaamvermelding te bestaan voor de hoofddomeinnaam. Voor _subdomains_ is de uitdaging iets complexer, waarbij een aparte CNAME‑vermelding voor elke netwerk‑site of een wildcard (*)‑vermelding in de DNS‑records vereist is.

Een ander aandachtspunt is SSL en de uitgifte en het gebruik van SSL‑certificaten. In een _subdirectory_-configuratie kan een enkel domeincertificaat worden gebruikt, aangezien de netwerk‑sites simpelweg paden zijn van de hoofddomeinnaam. Zo biedt een certificaat voor domain.com voldoende SSL voor https://domain.com/site1, https://domain.com/site2 en zo verder.

In een _subdomain_-configuratie is het gebruik van een wildcard SSL‑certificaat een van de meest voorkomende opties. Dit type SSL‑certificaat biedt encryptie voor een domein en zijn _subdomains_. Daarom biedt een wildcard SSL‑certificaat encryptie voor https://site1.domain.com, https://site2.domain.com en https://domain.com zelf.

Hoewel er andere opties bestaan, zijn deze vaak beperkt in reikwijdte en toepassing en vereisen ze extra configuratie en overweging met betrekking tot geschiktheid.

#### Plug‑ins en Thema's

Wat WordPress geeft, neemt het ook weg, althans vanuit het perspectief van de klant. In een zelfstandige WordPress‑installatie is de enige slachtoffer en lijdende van deze handeling de sitebeheerder zelf als hij een slecht plug‑in installeert of zijn installatie niet up‑to‑date houdt. Echter, een sitebeheerder die een slecht plug‑in installeert op een multisite‑installatie, creëert een slachtoffer voor elke site die in het netwerk is geïnstalleerd.

Om deze reden verwijdert WordPress, wanneer het als multisite is geconfigureerd, de mogelijkheid voor sitebeheerders om plug‑ins en thema's te installeren en verplaatst deze mogelijkheid naar een nieuw aangemaakte netwerkbeheerder of ‘super admin’-rol. Deze bevoegde rol kan vervolgens beslissen of beheerders van netwerk‑sites het plug‑inmenu in hun dashboard kunnen zien of er toegang toe hebben, en zo ja, of dergelijke machtigingen zich uitstrekken tot het _activeren_ of _deactiveren_ van plug‑ins.

In die zin is de netwerkbeheerder verantwoordelijk voor het installeren van plug‑ins en thema's in het netwerk en kent hij machtigingen toe om deze plug‑ins en thema's te gebruiken aan netwerk‑sites. Sitebeheerders kunnen geen plug‑ins en thema's installeren of toegang krijgen tot plug‑ins en thema's die niet aan hun site zijn toegewezen.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Terugkerend naar de bovenstaande uitspraak, hoewel de gebruikersaccounts lijken gerelateerd te zijn aan de site, worden ze in feite toegewezen aan het netwerk en moeten daarom uniek zijn binnen het netwerk. Er kunnen gevallen zijn waarin gebruikersnamen niet beschikbaar zijn om te registreren vanwege deze reden.

#### Media

Waar netwerk‑sites een enkele database delen in een WordPress‑Multisite, behouden ze afzonderlijke paden op het bestandssysteem voor mediabestanden.

De standaard WordPress‑locatie (wp-content/uploads) blijft; echter wordt het pad aangepast om de unieke ID van de netwerk‑site weer te geven. Bijgevolg verschijnen mediabestanden voor een netwerk‑site als wp-contents/uploads/site/[id].

#### Permalinks

We hebben eerder vermeld dat er onderscheidende voordelen zijn van _subdomain_ boven _subdirectory_ configuratie, en hier is het: paden.

In een _subdirectory_-configuratie moeten de hoofdsite (de eerste site die wordt gemaakt wanneer het netwerk wordt opgezet) en netwerk‑subsites het dezelfde pad delen dat van de domeinnaam leidt. Dit heeft het potentieel voor een groot aantal conflicten.

Voor berichten wordt een verplicht /blog/ pad toegevoegd aan de hoofdsite om botsingen met netwerk‑sites te voorkomen. Dit betekent dat mooie permalinks zoals ‘Post name’ worden weergegeven als domain.name/blog/post-name/

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

In een _subdomain_-configuratie is deze actie niet nodig omdat elke netwerk‑site profiteert van volledige domein scheiding en dus niet afhankelijk hoeft te zijn van een enkel pad. Ze behouden in plaats daarvan hun eigen distinctieve paden gebaseerd op hun _subdomain_.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Statische Pagina's

In een _subdirectory_-configuratie strekt het potentieel voor naamconflicten zich uit tot statische pagina's, aangezien de hoofdsite en netwerk‑sites hetzelfde pad delen.

Om dit te voorkomen, biedt WordPress een manier om bepaalde site‑namen op een zwarte lijst te plaatsen zodat ze niet conflicteren met de namen van de eerste site. Meestal zou de netwerkbeheerder de rootpaden van de pagina's van de hoofdsite invoeren.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

In een _subdomain_-configuratie worden de mogelijkheden voor naamconflicten gemitigeerd door het _subdomain_, aangezien het uniek is voor de netwerk‑site en op geen enkele manier gerelateerd is aan de hoofdsite.

### Registratie

In de netwerk‑instellingen van WordPress Multisite zijn verschillende nieuwe gebruikersregistratie‑opties beschikbaar, waardoor nieuwe en bestaande gebruikers sites kunnen aanmaken.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

In tegenstelling tot zelfstandige WordPress‑installaties behouden netwerk‑sites de bekende opties om gebruikersregistraties toe te staan of die registraties aan rollen toe te wijzen.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

Wanneer gebruikersaccounts worden aangemaakt, worden die accounts op netwerkniveau gegenereerd. Dus in plaats van te behoren tot één specifieke site, behoren ze tot het netwerk. Dit heeft enkele onderscheidende voor- en nadelen.

Bijvoorbeeld, stel dat je WordPress Multisite zich bezighoudt met nieuws en informatie. Je zou het multisite opzetten en vervolgens netwerk‑sites creëren voor financiën, technologie, entertainment en andere interessegebieden, terwijl je de algemene controle over plug‑ins en thema's behoudt. Elke netwerk‑site zou op zijn beurt een veel groter niveau van controle hebben over het uiterlijk en de gebruikerservaring van hun netwerk‑site dan aangepaste berichttypen of reguliere berichtcategorieën.

In die zin, wanneer een gebruiker inlogt, logt hij in op het netwerk en uiteindelijk op elke netwerk‑site om een naadloze ervaring te bieden. Als je nieuwe site op abonnementen is gebaseerd, zou dit de ideale oplossing en uitkomst zijn.

Als de beoogde aard en het doel van het multisite echter was om uiteenlopende netwerk‑sites aan te bieden die geen relatie tot elkaar hebben, is het vrijwel altijd het geval dat externe of aanvullende plug‑ins nodig zijn om de gebruikersrollen te manipuleren.

### Domein en SSL

Laten we het hebben over een WordPress Multisite‑installatie die bijna onze aandacht ontgaat - Wordpress.com. Dit is bij uitstek het meest uitgebreide voorbeeld van een WordPress multisite en toont zijn uitgebreide mogelijkheden om te worden aangepast en gevormd om een doel te vervullen.

Tegenwoordig is het gebruik van SSL op het moderne internet bijna verplicht en worden netwerkbeheerders van WordPress multisites al snel geconfronteerd met deze uitdagingen.

In een _subdomain_-configuratie worden sites gemaakt op basis van de hoofddomeinnaam. Zo wordt een site met de naam ‘site1’ aangemaakt als ‘site1.domain.com’. Door gebruik te maken van een wildcard SSL‑certificaat kan een netwerkbeheerder deze uitdaging succesvol aanpakken en SSL‑encryptie voor het netwerk bieden.

WordPress Multisite bevat een domein mapping‑functie die het mogelijk maakt om netwerk‑sites te koppelen aan aangepaste domeinnamen of domeinnamen die anders zijn dan het hoofddomein van het netwerk.

Voor netwerkbeheerders brengt dit een extra laag complexiteit met zich mee, zowel in domeinnaamconfiguratie als in de uitgifte en het onderhoud van SSL‑certificaten.

In die zin, hoewel WordPress Multisite een middel biedt om [www.anotherdomain.com](http://www.anotherdomain.com) te koppelen aan ‘site1’, blijft de netwerkbeheerder met de uitdaging om de DNS‑vermeldingen extern te beheren en de implementatie van SSL‑certificaten.

## Ultimate Multisite

Met de verschillen tussen een zelfstandige WordPress‑installatie en een Multisite‑installatie begrepen, laten we eens kijken hoe Ultimate Multisite het ultieme arsenaal is voor het aanbieden van Websites as a Service.

### Introductie

Ultimate Multisite is je Zwitsers zakmes als het gaat om het creëren van een Website as a Service (WaaS). Denk aan Wix.com, Squarespace, WordPress.com en denk vervolgens aan het bezitten van je eigen service.

Onder de motorkap maakt Ultimate Multisite gebruik van WordPress Multisite, maar doet dit op een manier die niet alleen de talloze uitdagingen oplost waarmee netwerkbeheerders te maken hebben met multisite‑installaties, maar ook de mogelijkheden verbetert, waardoor een breed scala aan use cases wordt ondersteund.

In de volgende secties bekijken we enkele veelvoorkomende use cases en overwegingen die nodig zijn om die cases te ondersteunen.

### Use Cases

#### Case 1: An Agency

Typisch liggen de kernvaardigheden van een bureau in het ontwerpen van websites, waarbij aspecten zoals hosting of marketing als aanvullende diensten worden vermeld.

Voor bureaus biedt Ultimate Multisite een ongelooflijke waardepropositie in zijn vermogen om meerdere websites op één platform te hosten en te beheren. Nog meer voor bureaus die hun ontwerpen standaardiseren op bepaalde thema's zoals GeneratePress, Astra, OceanWP of anderen, kunnen de mogelijkheden van Ultimate Multisite benutten om deze thema's automatisch te activeren voor elke nieuwe site.

Even met de overvloed aan deals voor bureauprijzen voor veelvoorkomende en populaire plug‑ins, stelt het gebruik van Ultimate Multisite bureaus in staat om bestaande investeringen te benutten door een gemeenschappelijk platform te bieden waaruit plug‑ins kunnen worden geïnstalleerd, onderhouden en gebruikt.

Meestal zou het gebruik van een configuratie gewenst zijn en gelukkig maakt Ultimate Multisite het ongelooflijk eenvoudig om domein mapping en SSL‑certificaten te faciliteren met zijn integraties voor een aantal populaire hostingproviders, evenals diensten zoals Cloudflare en cPanel.

Zo worden door het benutten van een van deze providers of door Ultimate Multisite achter Cloudflare te plaatsen, aspecten zoals het beheer van domeinen en SSL‑certificaten enigszins triviaal.

Bureaus die de voorkeur geven aan strakke controle over het aanmaken van sites, zullen de gemakkelijke manier waarderen waarop ze sites kunnen aanmaken en sites kunnen koppelen aan klanten en plannen via de gestroomlijnde interface van Ultimate Multisite.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Strakke controle over plug‑ins en thema's wordt op per-productbasis gehandhaafd via de intuïtieve interfaces van Ultimate Multisite, waardoor plug‑ins en thema's beschikbaar of verborgen kunnen worden gemaakt, evenals hun activatiestatus wanneer ze voor een nieuwe site worden geïnstalleerd.

![Product plugin limitations interface](/img/config/product-plugins.png)

Thema's bieden vergelijkbare functionaliteit, waardoor bepaalde thema's kunnen worden geactiveerd of verborgen bij het aanmaken van een site.

![Product theme limitations interface](/img/config/product-themes.png)

Bureaus zullen gemoedsrust vinden met Ultimate Multisite, waardoor ze kunnen doen waar ze het beste in zijn - uitzonderlijke websites ontwerpen.

#### Case 2: Niche Provider

Er is een oude zegswijze die zegt: 'Doe één ding en doe het goed'. Voor veel specialisten betekent dit het creëren van een product of dienst rond een enkele kernidee.

Misschien ben je een fervent golfer die websites promoot aan clubs of je bent een fervent esports‑speler die websites levert aan clans. Iemand die een boekingsservice promoot aan restaurants misschien?

Om verschillende redenen zou je diensten willen aanbieden op basis van een gemeenschappelijk framework en platform. Het kan zijn dat je op maat gemaakte plug‑ins hebt ontworpen of geïnvesteerd om de vereiste functionaliteit te bieden, of het kan zijn dat de beste praktijken in de branche een vorm van gestandaardiseerde aanpak vereisen.

Een van de innovatieve functies van Ultimate Multisite is het gebruik van sjabloon‑sites. Een sjabloon‑site is een site waarop het thema is geïnstalleerd en geactiveerd, noodzakelijke plug‑ins zijn geïnstalleerd en geactiveerd en voorbeeldberichten of pagina's zijn aangemaakt. Wanneer een klant een nieuwe site maakt op basis van het sjabloon, worden de inhoud en instellingen van het sjabloon gekopieerd naar de nieuw aangemaakte site.

Voor een aanbieder van niche‑sites en -diensten biedt dit een ongeëvenaard voordeel, omdat je onmiddellijk een site klaar kunt maken met aangepaste plug‑ins en ontwerp. De klant hoeft alleen de meest minimale input te leveren om de dienst te voltooien.

Afhankelijk van de vereisten kunnen zowel _subdirectory_- als _subdomains_-configuraties geschikt zijn, waarbij de architectuurkeuzes tussen een eenvoudig SSL‑certificaat voor _subdirectories_ of een wildcard SSL‑certificaat voor _subdomains_ liggen.

#### Case 3: WordPress Web Hosting

Er zijn talloze manieren om WordPress‑sites te hosten, maar het is zelden zo eenvoudig als het aanbieden van webruimte aan een klant met een vooraf geïnstalleerde versie van WordPress. Dit komt omdat een aantal beslissingen en overwegingen samen moeten komen om een betekenisvolle service te bieden.

Ultimate Multisite blinkt uit in dit gebied door een uitgebreide turnkey‑oplossing te bieden voor het hosten van WordPress‑sites. In de oplossing zijn de kernmechanismen opgenomen om abonnementsdiensten, betalingsverzameling, afrekenformulieren, kortingsbonnen en klantcommunicatie te bieden.

Veel van het integrale werk dat nodig is om een WordPress Multisite correct te installeren, configureren en onderhouden, wordt door Ultimate Multisite gefaciliteerd tot het punt waarop netwerkbeheerders alleen aspecten hoeven te overwegen die betrekking hebben op hun service of niche, zoals productniveaus, prijzen en serviceaanbiedingen.

Voor ontwikkelaars die willen integreren met Ultimate Multisite, biedt de oplossing ook een uitgebreide RESTful API en Webhooks voor gebeurtenisnotificatie.

Zonder afhankelijk te zijn van een talrijke externe plug‑ins en licenties, biedt Ultimate Multisite een rijk aan functies en een vergelijkbare oplossing als die van Wix, Squarespace, WordPress.com en anderen.

### Architectuur Overwegingen

Hoewel het geen uitgebreide gids is, dienen de volgende items als richtlijn voor de juiste selectie van technologieën om een Ultimate Multisite‑installatie te ondersteunen.

#### Shared vs. Dedicated Hosting

Helaas zijn niet alle hostingproviders gelijk en sommige hanteren extreme serverdichtheid. Goedkope providers genereren doorgaans inkomsten door de serverdichtheid te maximaliseren. Als zodanig kan je Ultimate Multisite‑installatie slechts één van meerdere honderden sites op dezelfde server zijn.

Zonder passende veiligheidsmaatregelen van de provider, ervaren sites op een gedeelde server het ‘lawaai van de buurman’-probleem. Dat wil zeggen, een site op dezelfde server verbruikt zoveel middelen dat andere sites moeten concurreren voor de resterende middelen. Vaak komt dit zich voor als sites die traag zijn of niet tijdig reageren.

Als zelf een webhostingprovider, zullen de effecten van de stroom betekenen dat je klanten slechte snelheden, lage paginavertegenwoordiging en hoge bouncepercentages ervaren, wat vaak leidt tot klantverloop omdat ze op zoek gaan naar diensten elders.

Kortom, goedkoop betekent niet goed.

Ultimate Multisite staat bekend om te werken met een aantal goede hostingproviders en integreert goed met hun omgeving om functies te bieden zoals domein mapping en automatische SSL. Deze providers waarderen prestaties en bieden een hogere kwaliteit service dan gedeelde hosting.

Voor een lijst met compatibele providers en volledige installatie‑instructies voor elk, raadpleeg de documentatie van Compatible Providers.

#### Prestatie Overwegingen

Ultimate Multisite is geen traag applicatie, maar is opmerkelijk snel. Het presteert echter alleen zo goed als de onderliggende applicatie en infrastructuur en kan alleen die gebruiken waar het toegang toe heeft.

Overweeg dit: Je bent de netwerkbeheerder van een Ultimate Multisite‑installatie met 100 sites. Sommige van die sites doen het goed en trekken elke dag een aantal websitebezoekers aan.

Dit scenario zou anders zijn op een kleinere schaal, bijvoorbeeld één tot vijf sites, maar al snel zouden schaalproblemen duidelijk worden.

Als het onbeheerd blijft, zou de enkele Ultimate Multisite‑site verantwoordelijk zijn voor het vervullen van de verzoeken van alle bezoekers van de sites. Deze verzoeken kunnen gaan om dynamische PHP‑pagina's of statische assets zoals stylesheets, javascript of mediabestanden. Of het nu één of honderd sites zijn, deze taken worden repetitief, eentonig en verspilling. Het is onnodig om CPU‑kracht en geheugen te gebruiken om een PHP‑bestand te verwerken wanneer de output dezelfde statische informatie is voor elk verzoek.

Evenzo genereert één verzoek voor een PHP‑ of HTML‑pagina op zijn beurt meerdere opvolgende verzoeken voor scripts, stylesheets en afbeeldingsbestanden. Die verzoeken zijn rechtstreeks gericht op je Ultimate Multisite‑server.

Je kunt dit probleem gemakkelijk oplossen door de server te upgraden, maar het lost geen secundair probleem op - geografische latenties. Alleen meerdere servers op meerdere locaties kunnen dit probleem adequaat aanpakken.

Om deze reden gebruiken de meeste netwerkbeheerders front‑end caching‑oplossingen en content delivery networks (CDN) om de verzoeken voor statische pagina's te vervullen. Het vervullen van deze verzoeken en het leveren van assets voordat het verzoek de server bereikt, bespaart verwerkingsbronnen, elimineert vertragingen, vermijdt onnodige upgrades en maximaliseert technologische investeringen.

Ultimate Multisite bevat een geavanceerde Cloudflare‑add‑on waarmee netwerkbeheerders hun installaties achter Cloudflare kunnen plaatsen en gebruik kunnen maken van niet alleen de caching‑mogelijkheden, maar ook DNS‑hosting, SSL‑certificaten en beveiligingsmechanismen.

#### Backups

Je kunt 50 mensen vragen om advies over back‑ups en 50 verschillende meningen over back‑upstrategieën ontvangen. Het antwoord is: het hangt af.

Wat niet betwist wordt, is dat back‑ups vereist zijn en dat het bijna onvoorstelbaar is dat deze niet door de provider worden beheerd, specifiek een die een beheerde service aanbiedt. Bijgevolg zullen klanten naar de netwerkbeheerder kijken om deze service te bieden en te beheren. Wie de netwerkbeheerder aanspreekt, is een geheel ander probleem.

Voor de doeleinden van deze sectie laten we het eens zijn dat een back‑up een momentopname is van de systeemstatus op het moment dat de back‑up werd gestart. Simpel gezegd, wat de status van het systeem ook is op het moment van de back‑up, die status wordt vastgelegd en opgeslagen in de back‑up.

Met dit begrip hangt het antwoord op hoe je de back‑ups kunt bereiken en wat het beste is voor je omgeving grotendeels af van je vereisten en het vermogen van de hostingprovider om aan die vereisten te voldoen. Echter, in volgorde van meest tot minst opinie, zouden de onderstaande opties wat richtlijn moeten bieden.

#### Snapshots

Snapshots zijn de zilveren bullets voor back‑ups omdat ze gemakkelijk, oncomplex (tot je wilt herstellen) en 'doen gewoon werken' zijn. Het vereist echter wel wat hulp van je provider en geldt meestal alleen als je een VPS (Virtual Private Server) of vergelijkbaar hebt. Verschillende providers vermeld in onze 'Compatible Providers'-documentatie bieden back‑ups die geen verdere interventie of overweging van de netwerkbeheerder vereisen.

Waar traditionele back‑ups zich richten op bestanden en databases, richt een snapshot zich op de volledige schijf. Dit betekent dat niet alleen de gegevens van de site worden vastgelegd in de snapshot, maar ook het besturingssysteem en de configuratie. Voor velen is dit een duidelijk voordeel, omdat een nieuw systeem bijna onmiddellijk kan worden gegenereerd vanuit een snapshot en in werking kan worden gesteld om een ​​slecht functionerende instantie te vervangen. Evenzo vereist het herstelproces om bestanden op te halen alleen het koppelen van de snapshot‑afbeelding als een schijf aan een bestaande instantie, zodat de bestanden kunnen worden benaderd en gekopieerd.

#### Externe Scripts

Er lijkt geen tekort aan externe scripts en oplossingen om WordPress- en MySQL‑resources te back‑uppen, en deze zouden goed werken voor Ultimate Multisite, aangezien het een WordPress‑plug‑in is die gebruikmaakt van het WordPress‑best

and system and database. Dus een oplossing die WordPress‑sites back‑upp, zou de behoeften van Ultimate Multisite adequaat dekken.

We kunnen geen enkel script aanbevelen boven een ander, maar ons algemene advies is om verschillende back‑up‑ en hersteltests uit te voeren om ervoor te zorgen dat de resultaten gewenst zijn en om 'zeker te zijn' door het script en zijn functionaliteit continu te evalueren, specifiek waar een vorm van differentiële back‑upstrategie wordt toegepast.

Het moet worden opgemerkt dat deze scripts, terwijl ze draaien, de systeembelasting zullen verhogen, wat in overweging moet worden genomen.

#### Plug‑ins

Er is bijna geen probleem in WordPress dat niet kan worden opgelost met een plug‑in, en als het beheren van externe scripts niet jouw ding is, dan is een plug‑in wellicht de volgende beste optie.

Hoewel plug‑ins variëren in opties en functies, voeren ze meestal dezelfde functie uit, namelijk het maken van een kopie van de WordPress‑bestanden en database‑inhoud. Daarna verschillen de functionaliteiten, aangezien sommige plug‑ins de back‑ups kunnen verzenden naar externe services zoals Google Drive of Dropbox of naar een soort compatibele objectopslagservice zoals S3, Wasabi of anderen. De meer uitgebreide plug‑ins bieden differentiële back‑ups of een soort strategie om alleen gegevens die zijn gewijzigd te back‑uppen om externe opslagkosten te besparen.

Bij het kiezen van je plug‑in, let er dan op dat deze multisite‑compatibel is. Vanwege de aard van de werking kun je tijdens het uitvoeren van de back‑up een tijdelijke belasting op de server verwachten totdat het proces is voltooid.

#### Domein en SSL

Er is al veel besproken over domeinnamen in multisite _subdomain_ modus. Een bijna universele oplossing voor netwerkbeheerders is het gebruik van wildcard DNS‑vermeldingen.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Dit type DNS‑vermelding zal _subdomains_ zoals 'site1.domain.com' en 'site2.domain.com' succesvol oplossen naar een IP‑adres van 1.2.3.4, waardoor Ultimate Multisite en in grotere mate WordPress Multisite in _subdomain_ modus worden ondersteund.

Dit werkt waarschijnlijk perfect voor HTTP omdat de doelhost wordt gelezen uit de HTTP‑headers, maar het web is zelden zo eenvoudig deze dagen dat beveiligde HTTPS‑transacties bijna verplicht zijn.

Gelukkig zijn er eenvoudige opties voor SSL‑certificaten. In _subdirectory_ modus kan een regulier domeincertificaat worden gebruikt. Deze zijn gemakkelijk en gratis beschikbaar bij hostingproviders die de gratis LetsEncrypt‑service of een andere bron kunnen gebruiken. Anders zijn deze commercieel beschikbaar bij autoriteiten als je in staat bent om het certificaatondertekeningsverzoek te genereren.

Voor _subdomain_ modus zal het gebruik van een wildcard SSL‑certificaat perfect passen bij een wildcard domein en het certificaat autoritair maken voor het hoofddomein en alle _subdomains_ zonder overbodige configuratie.

Echter, het moet worden opgemerkt dat wildcard SSL‑certificaten mogelijk niet werken met services zoals Cloudflare, tenzij je een enterprise‑plan hebt of de vermelding op DNS‑only instelt, waarbij alle caching en optimalisatie wordt omzeild.

Out‑of‑the‑box biedt Ultimate Multisite een oplossing voor dit probleem, waarmee onze uitgebreide ervaring met de behoeften van WordPress multisites wordt aangetoond. Het activeren van deze eenvoudige add‑on zorgt ervoor dat Ultimate Multisite gebruikmaakt van je Cloudflare‑gegevens om automatisch DNS‑vermeldingen voor netwerk‑sites in Cloudflare toe te voegen en hun modus in te stellen op 'proxied'. Op deze manier heeft elke netwerk‑subsite, wanneer deze wordt aangemaakt, de volledige bescherming en voordelen van Cloudflare, inclusief SSL.

Afhankelijk van de aard en het doel van je Ultimate Multisite‑installatie kan het nodig zijn dat klanten hun eigen domeinen gebruiken. In dit geval is de netwerkbeheerder belast met het oplossen van twee problemen. Ten eerste het hosten van de domeinnaam en ten tweede SSL‑certificaten voor het domein.

Voor velen is het gebruik van Cloudflare een gemakkelijke optie. De klant hoeft alleen zijn domein op Cloudflare te plaatsen, een CNAME naar het hoofddomein van Ultimate Multisite te wijzen en hun domein in Ultimate Multisite te koppelen om te beginnen profiteren van hun aangepaste domeinnaam.

Buiten dit, moeten alternatieve oplossingen worden gezocht, wat de reden is waarom Ultimate Multisite een lijst van Compatible Providers aanbeveelt. Dit komt omdat het proces van het opzetten van DNS en SSL een niet‑triviaal proces kan zijn. Echter, met de integratie van Ultimate Multisite met deze providers is de complexiteit veel verminderd en is de procedure geautomatiseerd.

#### Plug‑ins

Het is zeer waarschijnlijk dat je extra plug‑ins nodig hebt om functionaliteit te bieden aan je klanten of netwerk‑sites. Werken alle plug‑ins met WordPress Multisite en Ultimate Multisite? Nou, het hangt af.

Hoewel de meeste plug‑ins kunnen worden geïnstalleerd in een WordPress Multisite, varieert hun activatie en licenties per auteur.

De uitdaging ligt in hoe licenties worden toegepast, waarbij sommige plug‑ins licenties vereisen op per‑domein basis. Dit zou betekenen dat voor sommige plug‑ins de netwerkbeheerder de licentie handmatig moet activeren voor elke plug‑in op elke nieuwe site.
