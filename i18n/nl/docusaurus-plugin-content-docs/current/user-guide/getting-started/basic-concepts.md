---
title: Basisconcepten
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Basisconcepten

Voor een nieuwe WordPress Multisite-gebruiker en iemand die net is begonnen met Ultimate Multisite, kunnen er in het begin veel nieuwe woorden en zinnen zijn die je moet leren. Het leren ervan is een belangrijke taak omdat je het platform en hoe het als geheel werkt moet begrijpen.

In dit artikel zullen we proberen enkele van de belangrijkste concepten in WordPress te definiëren en uit te leggen. Sommige zijn relevanter voor gebruikers, anderen voor ontwikkelaars, en sommige voor beide.

## WordPress Multisite

WordPress **Multisite** is een type WordPress-installatie waarmee je een netwerk van meerdere websites kunt creëren en beheren vanuit één WordPress-dashboard. Je kunt alles beheren, inclusief het aantal sites, functies, thema's en gebruikersrollen. Het is mogelijk om honderden en duizenden sites te beheren.

## Netwerk

In termen van WordPress is een multisite-netwerk een plek waar een aantal **subsites** beheerd kunnen worden vanuit één dashboard. Hoewel het opzetten van een multisite-netwerk verschilt tussen hostingproviders, is het eindresultaat meestal een paar extra richtlijnen in het **wp-config.php**-bestand om WordPress te laten weten dat het in deze specifieke modus werkt.

Er zijn een aantal duidelijke verschillen tussen een multisite-netwerk en een standalone WordPress-installatie die we kort zullen bespreken.

## Database

Een database is een gestructureerde, georganiseerde verzameling gegevens. In de informatica verwijst een database naar software die wordt gebruikt om gegevens op te slaan en te organiseren. Zie het als een archiefkast waarin je gegevens opslaat in verschillende secties genaamd tabellen.

WordPress Multisite gebruikt één database en elke subsite krijgt zijn eigen tabellen met de blog-id in de prefix, dus zodra je een netwerkinstallatie installeert en een subsite maakt, zou je deze tabellen moeten hebben:

_wp_1_options_ \- options table for first subsite

_wp_2_options_ \- options table for second subsite

## Hostingprovider

Een hostingprovider is een bedrijf dat bedrijven en particulieren in staat stelt hun websites beschikbaar te maken via het World Wide Web. De diensten die webhostingproviders aanbieden variëren, maar omvatten meestal websiteontwerp, opslagruimte op een host en connectiviteit met het internet.

## Domein

Een domeinnaam is een adres dat mensen gebruiken om je site te bezoeken. Het vertelt de webbrowser waar je site te vinden is. Net als een straatadres is een domein hoe mensen je website online bezoeken. En, net als een bord voor je winkel. Als je onze website wilt bezoeken, moet je ons webadres in het adresveld van je browser typen, namelijk [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ waar [**ultimatemultisite.com**](http://ultimatemultisite.com) het domeinnaam is.

## Subdomein

Een subdomein is een type website-hiërarchie onder het hoofd‑domein, maar in plaats van mappen te gebruiken om inhoud op een website te organiseren, krijgt het op de een of andere manier een eigen website. Het wordt weergegeven als [**https://site1.domain.com/**](https://site1.domain.com/) waarbij _site1_ de subdomeinnaam is en [_domain.com_](http://domain.com) het hoofd‑domein.

## Submap

Een submap is een type website-hiërarchie onder een root‑domein dat mappen gebruikt om inhoud op een website te organiseren. Een submap is hetzelfde als een subfolder en de namen kunnen uitwisselbaar worden gebruikt. Het wordt weergegeven als [**https://domain.com/site1**](https://domain.com/site1) waarbij _site1_ de submapnaam is en [_domain.com_](http://domain.com) het hoofd‑domein.

## Subsite

Subsite is een kindsite die je op een Multisite-netwerk creëert. Het kan een **subdomein** of een **submap** zijn, afhankelijk van hoe je WordPress Multisite-installatie is geconfigureerd.

## Super Admin

Een WordPress Super Admin is een gebruikersrol met volledige mogelijkheden om alle subsites op een Multisite-netwerk te beheren. Voor Multisite-gebruikers is het de **hoogste toegangs­niveau** die je aan je WordPress-installatie kunt geven.

## Plugin

In het algemeen is een plugin een set code die extra functionaliteit toevoegt aan je WordPress-site. Dit kan zo eenvoudig zijn als het wijzigen van het loginlogo of zo complex als het toevoegen van e‑commerce functionaliteit. _Woocommerce en Contact Form_ zijn voorbeelden van een plugin.

Op een WordPress Multisite kunnen plugins alleen worden geïnstalleerd via het netwerkbeheer‑dashboard door een Super Admin. Subsite‑Admins kunnen alleen plugins activeren en deactiveren binnen hun subsite.

## Thema's

Een WordPress‑thema is een groep bestanden (_graphics, style sheets, en code_) die het algemene uiterlijk van de site bepaalt. Het levert alle front‑end‑styling, zoals lettertype‑styling, paginlay-out, kleuren, enz.

Net als plugins kunnen thema's in WordPress Multisite alleen worden geïnstalleerd door een Super Admin en kunnen ze op subsite‑niveau worden geactiveerd door subsite‑admins.

## Site Template

**Site Template** is een boilerplate‑site die kan worden gebruikt als basis bij het creëren van nieuwe sites in je netwerk.

Dit betekent dat je een basis‑site kunt creëren, verschillende plugins kunt activeren, een actief thema kunt instellen en het kunt aanpassen op elke gewenste manier. Vervolgens, wanneer je klant een nieuw account aanmaakt, krijgen ze in plaats van een standaard WordPress‑site zonder betekenisvolle inhoud, een kopie van je basis‑site met alle aanpassingen en inhoud al aanwezig.

## Domein‑mapping

**Domain mapping** met WordPress is een manier om gebruikers naar de juiste host te leiden via het adres van een website. In een WordPress Multisite worden subsites aangemaakt met behulp van een submap of subdomein. Wat domain mapping doet, is dat het subsite‑gebruikers toestaat een domein van het hoogste niveau te gebruiken, zoals [**joesbikeshop.com**](http://joesbikeshop.com), zodat hun siteadres er professioneler uitziet.

## SSL

SSL staat voor **Secure Sockets Layer**. Het is een digitaal certificaat dat de identiteit van een website verifieert en een versleutelde verbinding mogelijk maakt. Tegenwoordig wordt het gebruikt als de standaardtechnologie om een internetverbinding veilig te houden en gevoelige gegevens die tussen twee systemen worden verzonden te beschermen, waardoor criminelen het lezen en wijzigen van overgedragen informatie, inclusief mogelijke persoonlijke gegevens, worden voorkomen. Moderne browsers vereisen SSL, waardoor het essentieel is bij het creëren en beheren van een website.

## Media

Media zijn afbeeldingen, audio, video en andere bestanden die een website vormen.

Netwerksites delen één database in een WordPress Multisite, ze behouden aparte paden op het bestandssysteem voor mediabestanden.

De standaard WordPress‑locatie (wp-content/uploads) blijft; echter wordt het pad aangepast om de unieke ID van de netwerksite weer te geven. Daardoor verschijnen mediabestanden voor een netwerksite als wp-contents/uploads/site/[id].

## Permalinks

Permalinks zijn de permanente URL's van je individuele blogpost of pagina binnen je site. Permalinks worden ook aangeduid als **pretty links**. Standaard gebruiken WordPress‑URL's het query‑string‑formaat, dat er ongeveer zo uitziet:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite is een WordPress‑plugin, gemaakt voor WordPress Multisite‑installaties, die je WordPress‑installatie transformeert in een premium netwerk van sites – zoals [WordPress.com](https://WordPress.com) – waardoor klanten sites kunnen creëren via maandelijkse, kwartaal‑ of jaarlijkse kosten (je kunt ook gratis plannen maken).

## Checkout Form

Checkout Form is een enkel of meerstaps‑orderformulier dat de creatie van subsite, lidmaatschap en gebruikersaccounts omvat via Ultimate Multisite‑registratie. Het bestaat uit verschillende velden en betalingsformulieren die een gebruiker moet indienen tijdens het aanmeldingsproces.

## Webhook

Een webhook (ook wel web callback of HTTP push API genoemd) is een manier waarop een app andere applicaties realtime informatie kan verstrekken. Een webhook levert gegevens aan andere applicaties zodra ze plaatsvinden, wat betekent dat je gegevens onmiddellijk ontvangt.

**Ultimate Multisite webhooks** openen eindeloze mogelijkheden, waardoor netwerk‑admins allerlei gekke maar nuttige integraties kunnen uitvoeren, vooral als ze worden gebruikt in combinatie met diensten zoals _Zapier en IFTTT_.

## Evenementen

Een Event is een actie die plaatsvindt als gevolg van de gebruiker of een andere bronactie, zoals een muisklik. Ultimate Multisite houdt een register bij van alle events en logs die plaatsvinden binnen je hele netwerk. Het volgt verschillende activiteiten die plaatsvinden in je multisite, zoals planwijzigingen.
