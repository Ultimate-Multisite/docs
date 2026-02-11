---
title: Wat is WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Wat is WordPress Multisite?

In zijn kern biedt WordPress een functie genaamd ‘Multisite’ die zijn oorsprong teruggaat tot 2010 bij de lancering van WordPress 3.0. Sindsdien heeft het een aantal revisies ondergaan gericht op het introduceren van nieuwe functies en het versterken van de beveiliging.

In wezen kan een WordPress multisite als volgt worden beschouwd: Een universiteit onderhoudt één installatie van WordPress, maar elke faculteit onderhoudt zijn eigen WordPress‑site.

## 

## Wat is WordPress Multisite precies?

Multisite is een functie van WordPress die het mogelijk maakt dat meerdere sites een enkele WordPress‑installatie delen. Wanneer multisite wordt geactiveerd, wordt de oorspronkelijke WordPress‑site omgezet om te ondersteunen wat meestal wordt aangeduid als een **netwerk van sites**.

Dit netwerk deelt het bestandssysteem (wat betekent dat **plugins en thema's ook gedeeld worden**), de database, de WordPress‑corebestanden, het wp-config.php, enz.

Dit betekent dat WordPress‑, thema‑ en pluginupdates slechts één keer hoeven te worden uitgevoerd voor al uw netwerk‑sites, omdat ze dezelfde bestanden op het bestandssysteem delen.

Dit feit is een van de belangrijkste voordelen van multisite, omdat het u in staat stelt het aantal sites dat u beheert te vergroten, terwijl het aantal taken dat u moet uitvoeren om de sites van uw klanten te onderhouden hetzelfde blijft.

## 

## Subdomein of subdirectory?

Er zijn twee modi om WordPress multisite te draaien – en u moet er één kiezen wanneer u uw reguliere WordPress‑installatie omzet in een multisite‑installatie:

**Subdomein:** ex.: [site.domain.com](http://site.domain.com)

…of

**Subdirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Elke modus heeft voor- en nadelen die u moet overwegen bij het nemen van deze beslissing.

Een belangrijk punt om te noteren, echter: zodra u uw beslissing heeft genomen, is het veranderen van uw netwerk van subdirectory naar subdomein of omgekeerd echt moeilijk – vooral als u al een aantal sites heeft aangemaakt.

Voordat u die beslissing neemt, zijn hier een paar punten om in gedachten te houden:

**Subdirectory‑modus** is de eenvoudigste modus qua installatie en onderhoud. Dit gebeurt omdat alle sites gewoon paden zijn die aan het hoofddomein zijn gekoppeld (bijv. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Als gevolg hiervan heeft u slechts **één SSL‑certificaat** nodig voor het hoofddomein en dat de hele netwerk zal dekken.

Tegelijkertijd, vanwege de URL‑structuur, beschouwen Google en de meeste andere zoekmachines alle subsites op uw subdirectory‑gebaseerde netwerk als één gigantische site. Als gevolg hiervan kan content die aan subsites door uw eindklanten wordt toegevoegd de SEO‑prestaties van uw landingssite beïnvloeden, bijvoorbeeld. Het niveau van impact is bespreekbaar en er is een argument dat een dergelijke regeling zelfs gunstig kan zijn voor SEO‑prestaties.

**Subdomein‑modus** is iets complexer op te zetten, maar de URL‑structuur (bijv. [subsite.yournetwork.com](http://subsite.yournetwork.com)) wordt over het algemeen als “professioneler” beschouwd.

Een van de belangrijkste uitdagingen bij het opzetten van subdomein‑modus is SSL‑dekking (HTTPS) voor het hele netwerk. Het komt neer op het feit dat browsers subdomeinen beschouwen als geïsoleerde entiteiten. Als gevolg hiervan heeft u een ander SSL‑certificaat nodig voor elk subdomein op uw netwerk, of een speciaal soort certificaat genaamd een **Wildcard SSL‑certificaat**. In de afgelopen jaren verbeteren hostingproviders en panels hun spel op het gebied van SSL‑voorziening en bieden sommigen wildcard‑certificaten met een klik van een knop, waardoor de kloof tussen de twee modi in termen van complexiteit bij het opzetten wordt verkleind.

In tegenstelling tot subdirectory‑modus worden subsites op een subdomein‑gebaseerd netwerk door zoekmachines beschouwd als afzonderlijke websites, wat betekent dat content die aanwezig is op één subsite de SEO‑prestaties van andere subsites helemaal niet beïnvloedt.

## De Super Admin

Single‑site WordPress‑installaties laten u een onbeperkt aantal gebruikers toevoegen en die gebruikers verschillende gebruikersrollen met verschillende permissies geven.

In WordPress Multisite wordt een nieuw type gebruiker ontgrendeld: **de super admin** – en een nieuw admin‑paneel ontgrendeld: **het netwerk‑admin‑paneel**.

Zoals de naam al impliceert, heeft de super admin superkrachten over het netwerk, in staat om al zijn subsites, plugins, thema's, alles te beheren!

Zodra u uw single‑site WordPress‑installatie omzet in multisite, wordt de oorspronkelijke admin van de single site automatisch geüpgraded tot super admin.

Plugins en thema's kunnen alleen worden geïnstalleerd of verwijderd via het netwerk‑admin‑paneel door super admins. Subsite‑admins kunnen vervolgens kiezen om die plugins of thema's te activeren of te deactiveren, tenzij de super admin het netwerk activeert, wat het dwingt om voor alle subsites altijd actief te zijn.

_Note: zoals u kunt zien, het uitnodigen van iemand in uw netwerk en het geven van super admin‑status geeft deze gebruiker volledige controle over uw netwerk. Als voorbeeld kunnen andere super admins zelfs uw super admin‑status verwijderen, waardoor u effectief wordt buitengesloten van uw eigen netwerk‑admin‑paneel. Om Ultimate Multisite‑klanten een fijnmazige controle te geven over wat extra super admins kunnen doen, hebben we een add‑on genaamd Support Agents. Dit add‑on stelt u in staat nog een soort gebruiker te creëren – een agent – met alleen de permissies die ze nodig hebben om hun taken op het netwerk uit te voeren._

## Wat wordt gedeeld tussen subsites en wat niet

Zoals we eerder hebben vermeld, is een van de belangrijkste voordelen van WordPress multisite dat alle subsites dezelfde configuraties, corebestanden, thema's, plugins, WordPress‑corebestanden, enz. delen.

Er zijn echter elementen die mooi per subsite zijn gescopeerd.

\- Voorbeeld: elke subsite krijgt zijn eigen uploads‑map. Als gevolg hiervan kunnen uploads die door gebruikers van één specifieke subsite zijn gemaakt niet worden benaderd op een andere subsite.

\- Elke subsite heeft zijn eigen toegewijde admin‑paneel en kan plugins of thema's activeren of deactiveren, tenzij ze netwerk‑actief zijn door een super admin.

\- De meeste database‑tabellen worden voor elke subsite aangemaakt, wat betekent dat berichten, reacties, pagina's, instellingen en meer per subsite zijn gescopeerd.

## Gebruikersbeheer op WordPress Multisite

Een delicate onderwerp op WordPress multisite is gebruikersbeheer. De WordPress‑gebruikertabel is een van de weinige die gedeeld wordt tussen alle subsites.

Deze regeling kan enkele problemen veroorzaken, afhankelijk van wat u van plan bent te bouwen met uw netwerk. Het onderstaande voorbeeld helpt het meest dringende probleem te illustreren.

Stel het volgende scenario voor:

U maakt een WordPress multisite‑netwerk en begint subsites aan te bieden voor een maandelijks tarief aan mensen die een e‑commerce‑winkel willen hebben.

U krijgt uw eerste betalende klant – John. U maakt een site voor John op uw netwerk, installeert alle noodzakelijke plugins, en maakt vervolgens een gebruiker voor John zodat hij zijn winkel kan beheren.

Vervolgens komt er een tweede klant – Alice. U doet hetzelfde voor haar en ze heeft nu ook een winkel op uw netwerk.

John en Alice zijn beide uw klanten, maar ze kennen elkaar niet. Belangrijker nog, als een van hen de winkelwebsite van de ander bezoekt, is er geen manier om te weten dat deze winkel wordt gehost op hetzelfde netwerk van sites.

Op een dag moet John een nieuw paar schoenen kopen en hij vindt de perfecte schoenen in Alice’s winkel. Wanneer hij probeert de aankoop af te ronden, krijgt hij een “email already in use” foutmelding, wat vreemd is omdat John 100 % zeker is dat dit de eerste keer is dat hij Alice’s website bezoekt.

Wat hier gebeurt, is dat John’s gebruiker gedeeld wordt over het hele netwerk, dus wanneer hij probeert een account aan te maken om af te rekenen op Alice’s site, detecteert WordPress dat een gebruiker met hetzelfde e‑mailadres al bestaat en geeft een foutmelding.

_Note: We realiseren ons hoe slecht dat kan zijn, afhankelijk van uw use‑case, dus Ultimate Multisite heeft een optie die de reguliere controles voor een bestaande gebruiker omzeilt, waardoor meerdere accounts kunnen worden aangemaakt met hetzelfde e‑mailadres. Elke account is gebonden aan een subsite, zodat het risico op botsing minimaal blijft. In het bovenstaande voorbeeld zou John geen foutmelding krijgen en zou hij die schoenen zonder probleem kunnen kopen. Deze optie heet Enable Multiple Accounts, en kan worden geactiveerd op Ultimate Multisite → Settings → Login & Registration._

Hoewel de gebruikers‑tabel gedeeld is, kunnen gebruikers worden toegevoegd aan en verwijderd van subsites door de subsite‑admins of de super admin, en kunnen ze zelfs verschillende gebruikersrollen hebben op verschillende subsites.

## Prestatieoverwegingen

WordPress multisite is echt krachtig als het gaat om het aantal sites dat het kan ondersteunen. Dit kan worden getest door het feit dat [WordPress.com](https://WordPress.com), Edublogs, en Campuspress allemaal multisite‑gebaseerde services zijn en elk duizenden sites hosten.

In theorie is er geen maximum aantal sites dat u kunt hosten op een enkele WordPress multisite‑installatie, maar in de praktijk kan het aantal sites dat u naar behoren kunt draaien sterk variëren, afhankelijk van een aantal verschillende factoren: hoe dynamisch de sites zijn, welke plugins beschikbaar zijn voor subsites, enz.

Als vuistregel is hoe eenvoudiger uw netwerk, hoe beter. Het favoriseren van sites waar de content niet echt dynamisch is (wat ze geweldige kandidaten maakt voor agressieve caching‑strategieën) en het zo licht mogelijk houden van de plugin‑stack (hoe lager het aantal actieve plugins, hoe beter) kan het aantal subsites dat u kunt hosten drastisch verhogen.

Het beste deel is dat het hier allemaal WordPress is, dus dezelfde tools die u al kent en liefheeft voor prestatieverbeteringen zullen ook werken voor een multisite‑netwerk.

De belangrijkste bottleneck voor multisite is de database, maar als alles anders correct is opgezet, kan het een paar duizend sites zijn voordat u zich zorgen hoeft te maken. Zelfs dan zijn er oplossingen die geleidelijk kunnen worden toegevoegd op dat punt (zoals database‑sharding‑oplossingen, bijvoorbeeld).
