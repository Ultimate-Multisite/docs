---
title: Domeintoewijzing configureren
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domeinmapping configureren (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Een van de krachtigste functies van een premium netwerk is de mogelijkheid om onze klanten de kans te bieden een topleveldomein aan hun sites te koppelen. Wat ziet er tenslotte professioneler uit: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) of [_**joesbikeshop.com**_](http://joesbikeshop.com)? Daarom biedt Ultimate Multisite die functie standaard ingebouwd, zonder dat je plugins van derden hoeft te gebruiken.

## Wat is domeinmapping?

Zoals de naam al aangeeft, is domeinmapping de mogelijkheid die Ultimate Multisite biedt om een aanvraag voor een aangepast domein te ontvangen en die aanvraag te koppelen aan de bijbehorende site in het netwerk waaraan dat specifieke domein is gekoppeld.

### Domeinmapping instellen op je Ultimate Multisite-netwerk

Domeinmapping vereist wat instellingen van jouw kant om te werken. Gelukkig automatiseert Ultimate Multisite het zware werk voor je, zodat je eenvoudig aan de vereisten kunt voldoen.

Tijdens de installatie van Ultimate Multisite kopieert en installeert de wizard automatisch **sunrise.php** naar de aangewezen map. **De wizard laat je pas doorgaan wanneer deze stap is voltooid**.

<!-- Screenshot niet beschikbaar: Ultimate Multisite-installatiewizard met sunrise.php-stap -->

Dit betekent dat zodra de Ultimate Multisite-installatiewizard klaar is met het instellen van je netwerk, je meteen kunt beginnen met het mappen van het aangepaste domein.

Let op dat domeinmapping in Ultimate Multisite niet verplicht is. Je hebt de optie om de native domeinmappingfunctie van WordPress Multisite of een andere oplossing voor domeinmapping te gebruiken.

Als je Ultimate Multisite-domeinmapping moet uitschakelen om ruimte te maken voor andere oplossingen voor domeinmapping, kun je deze functie uitschakelen onder **Ultimate Multisite > Instellingen > Domeinmapping**.

![Instellingenpagina voor domeinmapping met beheeromleiding, mappingbericht en DNS-opties](/img/config/domain-mapping-settings.png)

Direct onder deze optie zie je ook de optie **Beheeromleiding afdwingen**. Met deze optie kun je bepalen of je klanten toegang hebben tot hun beheer-Dashboard zowel op hun aangepaste domein als subdomein, of slechts op één ervan.

Als je **Omleiden naar gemapt domein afdwingen** selecteert, kunnen je klanten alleen toegang krijgen tot hun beheer-Dashboard op hun aangepaste domeinen.

De optie **Omleiden naar** **netwerkdomein afdwingen** doet precies het tegenovergestelde: je klanten mogen alleen toegang krijgen tot hun Dashboards op hun subdomein, zelfs als ze proberen in te loggen op hun aangepaste domeinen.

En de optie **Toegang tot het beheer toestaan via zowel het gemapte domein als het netwerkdomein** staat hen toe toegang te krijgen tot hun beheer-Dashboards zowel op het subdomein als op het aangepaste domein.

![Dropdown voor beheeromleiding uitgeklapt met de drie omleidingsopties](/img/config/domain-mapping-redirect-options.png)

Er zijn twee manieren om een aangepast domein te mappen. De eerste is door de domeinnaam vanuit je netwerkbeheer-Dashboard te mappen als superbeheerder en de tweede is via het beheer-Dashboard van de subsite onder de Account-pagina.

Maar voordat je begint met het mappen van het aangepaste domein naar een van de subsites in je netwerk, moet je ervoor zorgen dat de **DNS-instellingen** van de domeinnaam correct zijn geconfigureerd.

###

### Controleren of de DNS-instellingen van het domein correct zijn geconfigureerd

Om een mapping te laten werken, moet je ervoor zorgen dat het domein dat je wilt mappen naar het IP-adres van je netwerk wijst. Let erop dat je het IP-adres van het netwerk nodig hebt — het IP-adres van het domein waarop Ultimate Multisite is geïnstalleerd — niet het IP-adres van het aangepaste domein dat je wilt mappen. Om het IP-adres van een specifiek domein op te zoeken, raden we bijvoorbeeld aan naar [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) te gaan.

Om het domein correct te mappen, moet je een **A-record** toevoegen in je **DNS**-configuratie dat naar dat **IP-adres** wijst. DNS-beheer verschilt sterk per domeinregistrar, maar er zijn online veel tutorials die dit behandelen als je zoekt naar " _Een A-record aanmaken bij XXXX_ ", waarbij XXXX je domeinregistrar is (bijv.: " _Een A-record aanmaken bij_ _GoDaddy_ ").

Als je problemen ondervindt om dit werkend te krijgen, **neem dan contact op met de support van je domeinregistrar** en zij kunnen je met dit onderdeel helpen.

Als je van plan bent je klanten toe te staan hun eigen domeinen te mappen, moeten zij dit onderdeel zelf uitvoeren. Verwijs hen naar het supportsysteem van hun registrar als het hen niet lukt om het A-record aan te maken.

### Aangepaste domeinnaam mappen als superbeheerder

Wanneer je bent ingelogd als superbeheerder op je netwerk, kun je eenvoudig aangepaste domeinnamen toevoegen en beheren door naar **Ultimate Multisite > Domeinen** te gaan.

![Domeinenlijstpagina in Ultimate Multisite](/img/admin/domains-list.png)

Op deze pagina kun je bovenaan op de knop **Domein toevoegen** klikken. Dit opent een modaal venster waarin je de **aangepaste domeinnaam** kunt instellen en invullen, **de subsite** kunt kiezen waarop je de aangepaste domeinnaam wilt toepassen, en kunt beslissen of je deze wel of niet als **primaire domeinnaam** wilt instellen (let op dat je **meerdere domeinnamen aan één subsite kunt koppelen**).

![Modaal venster Domein toevoegen met domeinnaam, sitekiezer en schakelaar voor primair domein](/img/admin/domain-add-modal.png)

Nadat je alle informatie hebt ingevuld, kun je onderaan op de knop **Bestaand domein toevoegen** klikken.

Dit start het proces voor het verifiëren en ophalen van de DNS-informatie van het aangepaste domein. Onderaan de pagina zie je ook een logboek waarmee je het proces kunt volgen dat wordt uitgevoerd. Dit proces kan enkele minuten duren.

Ultimate Multisite v2.13.0 maakt ook automatisch het interne domeinrecord aan wanneer een nieuwe site wordt aangemaakt op een host die als een per-site domein moet worden behandeld. Als de host het primaire domein van het netwerk is, of een van de gedeelde basisdomeinen voor checkout-formulieren die zijn geconfigureerd op een **Site URL**-veld, wordt het automatische mapped-domainrecord overgeslagen zodat dat gedeelde basisdomein beschikbaar blijft voor elke site die het gebruikt.

Wanneer een klant een nieuw domein registreert via Domain Seller v1.3.0 of nieuwer, koppelt Ultimate Multisite standaard automatisch het geregistreerde domein aan de netwerksite van de klant. Beheerders hoeven na een succesvolle registratie niet langer een apart mapped-domainrecord toe te voegen, tenzij ze opties willen aanpassen zoals de primaire-domeinvlag, activeringsstatus of SSL-afhandeling.

De **Stage** of de status zou moeten veranderen van **Checking DNS** naar **Ready** als alles correct is ingesteld.

<!-- Screenshot niet beschikbaar: Domeinrij die de Checking DNS-stage toont in de domeinenlijst -->

<!-- Screenshot niet beschikbaar: Domeinrij die de Ready-stage toont met de groene statusindicator -->

Als je op de domeinnaam klikt, kun je enkele opties erin zien. Laten we er snel naar kijken:

![Domeindetailpagina met schakelaars voor stage, site, actief, primair en SSL](/img/admin/domain-edit.png)

**Stage:** Dit is de stage waarin het domein zich bevindt. Wanneer je het domein voor het eerst toevoegt, staat het waarschijnlijk in de **Checking DNS**-stage. Het proces controleert de DNS-vermeldingen en bevestigt dat ze correct zijn. Daarna wordt het domein in de **Checking SSL**-stage gezet. Ultimate Multisite controleert of het domein SSL heeft of niet en categoriseert je domein als **Ready** of **Ready (without SSL)**.

**Site:** Het subdomein dat aan dit domein is gekoppeld. Het gekoppelde domein toont de inhoud van deze specifieke site.

**Active:** Je kunt deze optie in- of uitschakelen om het domein te activeren of te deactiveren.

**Is Primary Domain?:** Je klanten kunnen meer dan één gekoppeld domein per site hebben. Gebruik deze optie om te selecteren of dit het primaire domein is voor de specifieke site.

**Is Secure?:** Hoewel Ultimate Multisite controleert of het domein een SSL-certificaat heeft voordat het wordt ingeschakeld, kun je handmatig selecteren of het domein met of zonder SSL-certificaat wordt geladen. Let op: als de website geen SSL-certificaat heeft en je probeert deze geforceerd met SSL te laden, kan dit fouten opleveren.

### Aangepaste domeinnaam koppelen als Subsite-gebruiker

Subsite-beheerders kunnen ook aangepaste domeinnamen koppelen vanuit hun subsite-beheerdersdashboard.

Eerst moet je ervoor zorgen dat je deze optie inschakelt onder de instellingen voor **Domain mapping**. Zie de screenshot hieronder.

<!-- Screenshot niet beschikbaar: Instellingen voor Domain mapping waarmee subsite-gebruikers domeinen kunnen koppelen via de schakelaar Customer DNS Management -->

Je kunt deze optie ook instellen of configureren op het niveau van **Plan** of productopties via **Ultimate Multisite > Products**.

![Sectie Custom Domains op de productbewerkingspagina](/img/config/product-custom-domains.png)

Wanneer een van deze opties is ingeschakeld en een subsite-gebruiker aangepaste domeinnamen mag koppelen, zou de subsite-gebruiker een metabox moeten zien onder de **Account**-pagina met de naam **Domains**.

<!-- Screenshot niet beschikbaar: Domains-metabox op de subsite Account-pagina met knop Add Domain -->

De gebruiker kan op de knop **Add Domain** klikken en er verschijnt een modaal venster met enkele instructies.

<!-- Screenshot niet beschikbaar: Add Domain-modal met DNS A-record-instructies voor subsite-gebruikers -->

De gebruiker kan vervolgens op **Next Step** klikken en doorgaan met het toevoegen van de aangepaste domeinnaam. Ze kunnen ook kiezen of dit het primaire domein wordt of niet.

<!-- Screenshot niet beschikbaar: Add Domain-formulier met veld voor aangepaste domeinnaam en schakelaar voor primair domein -->

<!-- Screenshot niet beschikbaar: Add Domain-bevestigingsstap die DNS-verificatie activeert -->

Klikken op **Add Domain** start het proces voor het verifiëren en ophalen van de DNS-informatie van het aangepaste domein.

### Over domeinsynchronisatie

Domeinsynchronisatie is een proces waarbij Ultimate Multisite de aangepaste domeinnaam aan je hostingaccount toevoegt als een add-on-domein **zodat de domain mapping werkt**.

Domeinsynchronisatie gebeurt automatisch als je hostingprovider integratie heeft met de domain mapping-functie van Ultimate Multisite. Momenteel zijn deze hostingproviders _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ en _Cpanel._

Wanneer een host-providerintegratie actief is, kan Ultimate Multisite ook de taak voor DNS- of subdomeinaanmaak aan de providerzijde in de wachtrij plaatsen voor nieuw aangemaakte sites. Als er geen integratie naar die taak luistert, wordt de achtergrondtaak overgeslagen om no-op wachtrij-items te vermijden. DNS- en SSL-controles voor gekoppelde domeinen blijven via het normale domein-stageproces lopen.

Je moet deze integratie activeren in de instellingen van Ultimate Multisite onder het tabblad **Integration**.

![Tabblad Integrations in Ultimate Multisite-instellingen met hostingproviders](/img/config/integrations-tab.png)

<!-- Screenshot niet beschikbaar: Configuration-links voor hostingproviders op het tabblad Integrations-instellingen -->

_Let op: als je hostingprovider niet een van de hierboven genoemde providers is, **moet je de domeinnaam handmatig synchroniseren of toevoegen** aan je hostingaccount._
