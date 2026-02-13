---
title: Hoe domeinmapping configureren
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# Hoe Domain Mapping Configureren (v2)

_**BELANGRIJK OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Een van de krachtigste functies van een premium netwerk is de mogelijkheid om onze klanten de kans te bieden een domein van het hoogste niveau aan hun sites te koppelen. Uiteindelijk, welke ziet er professioneler uit: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) of [_**joesbikeshop.com**_](http://joesbikeshop.com)? Daarom biedt Ultimate Multisite die functie ingebouwd, zonder de noodzaak om plugins van derden te gebruiken.

## Wat is domein mapping?

Zoals de naam al doet vermoeden, is domein mapping de mogelijkheid die door Ultimate Multisite wordt geboden om een verzoek voor een aangepast domein te ontvangen en dat verzoek te koppelen aan de overeenkomstige site in het netwerk met dat specifieke domein eraan gekoppeld.

### Hoe domein mapping instellen op uw Ultimate Multisite Netwerk

Domein mapping vereist enige configuratie aan uw kant om te werken. Gelukkig automatiseert Ultimate Multisite het zware werk voor u, zodat u de vereisten gemakkelijk kunt voldoen.

Tijdens de installatie van Ultimate Multisite zal de wizard automatisch het bestand **sunrise.php** kopiëren en installeren naar de aangewezen map. **De wizard laat u niet doorgaan totdat deze stap is voltooid**.

![Ultimate Multisite installation wizard with sunrise.php step](/img/config/settings-domain-mapping.png)

Dit betekent dat zodra de wizard voor de installatie van Ultimate Multisite het netwerk heeft opgezet, u meteen kunt beginnen met het koppelen van het aangepaste domein.

Merk op dat domein mapping in Ultimate Multisite niet verplicht is. U heeft de mogelijkheid om de native domein mapping functie van WordPress Multisite te gebruiken of een andere domein mapping oplossing.

Mocht u de domein mapping van Ultimate Multisite willen uitschakelen om plaats te maken voor andere domein mapping oplossingen, kunt u deze functie uitschakelen onder **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings with enable toggle](/img/config/settings-domain-mapping.png)

Recht onder deze optie ziet u ook de optie **Force Admin Redirect**. Met deze optie kunt u bepalen of uw klanten hun beheerdersdashboard zowel op hun aangepaste domein als subdomein kunnen openen of alleen op één van hen.

Als u **Force redirect to mapped domain** selecteert, kunnen uw klanten hun beheerdersdashboard alleen op hun aangepaste domeinen openen.

De optie **Force redirect to** **network domain** doet precies het tegenovergestelde - uw klanten mogen hun dashboards alleen op hun subdomein openen, zelfs als ze proberen in te loggen op hun aangepaste domeinen.

En de optie **Allow access to the admin by both mapped domain domain and network domain** laat hen hun beheerdersdashboards zowel op het subdomein als het aangepaste domein openen.

![Force Admin Redirect options for domain mapping](/img/config/settings-domain-mapping.png)

Er zijn twee manieren om een aangepast domein te koppelen. De eerste is door het domeinnaam te koppelen vanuit uw netwerkbeheerder dashboard als super admin en de tweede via het subsite beheerder dashboard onder de accountpagina.

Maar voordat u begint met het koppelen van het aangepaste domein aan een van de subsites in uw netwerk, moet u ervoor zorgen dat de **DNS-instellingen** van het domeinnaam correct zijn geconfigureerd.

### Zorg ervoor dat de DNS-instellingen van het domein correct zijn geconfigureerd

Voor een mapping om te werken, moet u ervoor zorgen dat het domein dat u wilt koppelen wijst naar het IP-adres van uw netwerk. Merk op dat u het IP-adres van het netwerk nodig heeft - het IP-adres van het domein waarop Ultimate Multisite is geïnstalleerd - niet het IP-adres van het aangepaste domein dat u wilt koppelen. Om het IP-adres van een specifiek domein te zoeken, raden we aan om naar [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) te gaan, bijvoorbeeld.

Om het domein correct te koppelen, moet u een **A RECORD** toevoegen aan uw **DNS** configuratie die wijst naar dat **IP-adres**. DNS-beheer verschilt sterk tussen verschillende domeinregistrars, maar er zijn tal van tutorials online die dit behandelen als u zoekt naar “_Creating A Record on XXXX_” waarbij XXXX uw domeinregistrar is (bijv.: “_Creating A Record on_ _GoDaddy_ ”).

Als u problemen ondervindt bij het laten werken, **contacteer dan de ondersteuning van uw domeinregistrar** en zij kunnen u hiermee helpen.

Als u van plan bent uw klanten hun eigen domeinen te laten koppelen, moeten zij dit zelf doen. Verwijs hen naar het ondersteuningssysteem van hun registrar als zij niet in staat zijn de A Record te maken.

### Aangepast domeinnaam koppelen als Super Admin

Wanneer u bent ingelogd als super admin op uw netwerk, kunt u eenvoudig aangepaste domeinnamen toevoegen en beheren via **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Op deze pagina kunt u op de knop **Add Domain** bovenaan klikken, waardoor een modaal venster verschijnt waarin u de **custom domain name**, **de subsite** waarop u de aangepaste domeinnaam wilt toepassen, kunt instellen en invullen, en kunt beslissen of u deze als **primary domain** wilt instellen of niet (let op dat u **meerdere domeinnamen aan één subsite** kunt koppelen).

![Add Domain modal with domain name and site fields](/img/admin/domains-list.png)

Nadat u alle informatie heeft ingevoerd, kunt u vervolgens op de knop **Add Existing Domain** onderaan klikken.

Dit start het proces van het verifiëren en ophalen van de DNS-informatie van het aangepaste domein. U zult ook een log zien onderaan de pagina om het proces te volgen. Dit proces kan enkele minuten duren.

De **Stage** of de status moet veranderen van **Checking DNS** naar **Ready** als alles correct is ingesteld.

![Domain stage changing from Checking DNS to Ready](/img/admin/domains-list.png)

![Domain with Ready status in domains list](/img/admin/domains-list.png)

Als u op de domeinnaam klikt, ziet u enkele opties binnen. Laten we ze snel bekijken:

![Domain detail page with stage, site, active, and SSL options](/img/admin/domains-list.png)

**Stage:** Dit is de fase waarin het domein zich bevindt. Wanneer u het domein voor het eerst toevoegt, bevindt het zich waarschijnlijk in de fase **Checking DNS**. Het proces controleert de DNS-invoer en bevestigt dat ze correct zijn. Vervolgens wordt het domein geplaatst in de fase **Checking SSL**. Ultimate Multisite controleert of het domein SSL heeft of niet en categoriseert uw domein als **Ready** of **Ready (without SSL)**.

**Site:** Het subdomein dat aan dit domein is gekoppeld. Het gekoppelde domein toont de inhoud van deze specifieke site.

**Active:** U kunt deze optie aan of uitzetten om het domein te activeren of te deactiveren.

**Is Primary Domain?:** Uw klanten kunnen meer dan één gekoppeld domein hebben voor elke site. Gebruik deze optie om te selecteren of dit het primaire domein is voor de specifieke site.

**Is Secure?:** Hoewel Ultimate Multisite controleert of het domein een SSL-certificaat heeft of niet voordat het wordt ingeschakeld, kunt u handmatig kiezen om het domein met of zonder SSL-certificaat te laden. Merk op dat als de website geen SSL-certificaat heeft en u probeert het geforceerd te laden met SSL, dit fouten kan veroorzaken.

### Aangepast domeinnaam koppelen als Subsite gebruiker

Subsite beheerders kunnen ook aangepaste domeinnamen koppelen vanuit hun subsite beheerder dashboard.

Allereerst moet u ervoor zorgen dat u deze optie inschakelt onder de **Domain mapping** instellingen. Zie de onderstaande screenshot.

![Domain mapping settings allowing subsite users to map domains](/img/config/settings-domain-mapping.png)

U kunt deze optie ook instellen of configureren onder het **Plan** niveau of productopties op **Ultimate Multisite > Products**.

![Product custom domains option in product settings](/img/config/settings-domain-mapping.png)

Wanneer een van die opties is ingeschakeld en een subsite gebruiker toestemming heeft om aangepaste domeinnamen te koppelen, moet de subsite gebruiker een metabox onder de **Account** pagina zien genaamd **Domains**.

![Domains metabox on the subsite account page](/img/admin/domains-list.png)

De gebruiker kan op de knop **Add Domain** klikken en dit brengt een modaal venster met instructies tevoorschijn.

![Add Domain modal with DNS instructions for subsite users](/img/admin/domains-list.png)

De gebruiker kan vervolgens op **Next Step** klikken en doorgaan met het toevoegen van de aangepaste domeinnaam. Ze kunnen ook kiezen of dit het primaire domein is of niet.

![Add custom domain name field with primary domain option](/img/admin/domains-list.png)

![Click Add Domain to start DNS verification](/img/admin/domains-list.png)Click to **Add Domain** will start the process of verifying and fetching the DNS information of the custom domain.

### Over Domein Syncing

Domain Syncing is een proces waarbij Ultimate Multisite het aangepaste domeinnaam toevoegt aan uw hostingaccount als een add-on domein **om de domein mapping te laten werken**.

Domain syncing gebeurt automatisch als uw hostingprovider integratie heeft met de domein mapping functie van Ultimate Multisite. Momenteel zijn dit hostingproviders _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ en _Cpanel._

U moet deze integratie activeren in de Ultimate Multisite instellingen onder het **Integration** tabblad.

![Integration tab in Ultimate Multisite settings](/img/config/settings-domain-mapping.png)

![Hosting provider integration settings for domain syncing](/img/config/settings-domain-mapping.png)

_Let op dat als uw hostingprovider niet een van de hierboven genoemde providers is,** moet u het domeinnaam handmatig synchroniseren of toevoegen** aan uw hostingaccount._
