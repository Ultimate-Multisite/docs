---
title: Hoe om Domein-mapping te Konfigureer
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# Hoe om Domeinmapping te Konfigureer (v2)

_**BELANGRIKIEKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Een van die kragtigste kenmerke van 'n premium netwerk is die vermoë om ons kliënte die geleentheid te gee om 'n top-level domein aan hul webwerwe te koppel. Want, wat lyk meer professioneel: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) of [_**joesbikeshop.com**_](http://joesbikeshop.com)? Daarom bied Ultimate Multisite hierdie kenmerk ingebou, sonder dat jy derde party plugins hoef te gebruik.

## Wat is domeinmapping?

Soos die naam voorgstel, is domeinmapping die vermoë wat Ultimate Multisite bied om 'n versoek vir 'n aangepaste domein te ontvang en daardie versoek te koppel aan die ooreenstemmende webwerf in die netwerk met daardie spesifieke domein aangeheg.

### Hoe om domeinmapping op jou Ultimate Multisite Netwerk op te stel

Domeinmapping vereis 'n bietjie opstelling van jou kant om te werk. Gelukkig outomatiseer Ultimate Multisite die moeilike werk vir jou, sodat jy maklik aan die vereistes kan voldoen.

Tydens die Ultimate Multisite-installasie sal die wizard outomaties die **sunrise.php** na die aangewese lêerhouer kopieer en installeer. **Die wizard sal jou nie toelaat om voort te gaan totdat hierdie stap voltooi is nie.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Dit beteken dat sodra die Ultimate Multisite-installasie-wizard jou netwerk ingestel het, kan jy dadelik met die mappasie van die aangepaste domein begin.

Let wel dat domeinmapping in Ultimate Multisite nie verpligtend is nie. Jy het die opsie om die ingebooide WordPress Multisite domeinmappasie-funksie of enige ander domeinmappasie-oplossing te gebruik.

Indien jy Ultimate Multisite domeinmappasie wil uitskakel om plek te maak vir ander domeinmappasie-oplossings, kan jy hierdie kenmerk uitskakel onder **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Net onder hierdie opsie, kan jy ook die opsie **Force Admin Redirect** sien. Hierdie opsie laat jou toe om te bepaal of jou kliënte toegang tot hul admin-dashboard sal hê op hul aangepaste domein en subdomein, of net op een van die twee.

As jy **Force redirect to mapped domain** kies, sal jou kliënte slegs toegang tot hul admin-dashboard hê op hul aangepaste domeine.

Die opsie **Force redirect to network domain** sal presies die teenoorgestelde doen – jou kliënte sal slegs toegang tot hul dashboards word toegelaat op hul subdomein, selfs as hulle probeer aanmeld op hul aangepaste domeine.

En die opsie **Allow access to the admin by both mapped domain domain and network domain** laat hulle toe om toegang tot hul admin-dashboards te hê op beide die subdomein en die aangepaste domein.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Daar is twee maniere om 'n aangepaste domein te map. Die eerste is deur die domeinnaam vanaf jou netwerk-admin-dashboard as super admin, en die tweede is deur die subwerf-admin-dashboard onder die rekeningbladsy.

Maar voordat jy die aangepaste domein aan een van die subwerwe in jou netwerk begin map, moet jy verseker dat die **DNS-instellings** van die domeinnaam korrek gekonfigureer is.

###

### Verseker dat die domein DNS-instellings korrek gekonfigureer is

Vir 'n mappasie om te werk, moet jy verseker dat die domein wat jy beplan om te map, na jou Netwerk se IP-adres wys. Let op dat jy die Netwerk IP-adres benodig – die IP-adres van die domein waar Ultimate Multisite geïnstalleer is – en nie die IP-adres van die aangepaste domein wat jy wil map nie. Om na die IP-adres van 'n spesifieke domein te soek, stel ons voor om na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) te gaan, byvoorbeeld.

Om die domein korrek te map, moet jy 'n **A RECORD** by jou **DNS**-konfigurasie voeg wat na daardie **IP-adres** wys. DNS-bestuur verskil baie tussen verskillende domein-registreerders, maar daar is baie tutorials aanlyn wat dit dek as jy soek na " _Creating A Record on XXXX_ " waar XXXX jou domein-registreerder is (bv.: " _Creating A Record on_ _GoDaddy_ ").

As jy sukkel om dit te laat werk, **kontak jou domein-registreerder se ondersteuning** en hulle sal jou met hierdie deel kan help.

As jy beplan om jou kliënte toe te laat om hul eie domeine te map, sal hulle die werk op hierdie deel self moet doen. Wys hulle na hul registreerder-ondersteuningssisteem as hulle sukkel om die A Record te skep.

### Aangepaste domeinnaam as Super Admin Map

Wanneer jy as super admin op jou netwerk ingelog is, kan jy maklik aangepaste domeinname byvoeg en bestuur deur na **Ultimate Multisite > Domains** te gaan.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Onder hierdie bladsy kan jy op die **Add Domain**-knoppie bo-op klik en dit sal 'n modale venster oopmaak waar jy die **aangepaste domeinnaam** kan stel en invul, **die subwerf** waarna jy die aangepaste domeinnaam wil toepas, en besluit of jy dit as die **primêre domein**naam wil stel of nie (let op dat jy **meerdere domeinname aan een subwerf** kan map).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Nadat jy al die inligting ingegee het, kan jy op die **Add Existing Domain**-knoppie onderaan klik.

Dit sal die proses van verifieer en ophaal van die DNS-inligting van die aangepaste domein begin. Jy sal ook 'n log onderaan die bladsy sien om die proses te volg wat dit deurgaan. Hierdie proses kan 'n paar minute neem om te voltooi.

Die **Stage** of die status moet van **Checking DNS** na **Ready** verander as alles korrek ingestel is.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

As jy op die domeinnaam klik, sal jy 'n paar opsies binne daarin kan sien. Kom ons kyk vinnig na hulle:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** Dit is die stadium waarin die domein is. Wanneer jy die domein vir die eerste keer byvoeg, sal dit waarskynlik op die **Checking DNS**-stadium wees. Die proses sal die DNS-inskrywings kontroleer en bevestig dat dit korrek is. Daarna sal die domein op die **Checking SSL**-stadium geplaas word. Ultimate Multisite sal nagaan of die domein SSL het of nie en sal jou domein as **Ready** of **Ready (without SSL)** kategoriseer.

**Site:** Die subdomein wat aan hierdie domein gekoppel is. Die gemapte domein sal die inhoud van hierdie spesifieke webwerf wys.

**Active:** Jy kan hierdie opsie aan of af skakel om die domein te aktiveer of te deaktiveer.

**Is Primary Domain?:** Jou kliënte kan meer as een gemapte domein vir elke webwerf hê. Gebruik hierdie opsie om te kies of dit die primêre domein vir die spesifieke webwerf is.

**Is Secure?:** Selfs al kontroleer Ultimate Multisite of die domein 'n SSL-sertifikaat het of nie voordat dit dit aktiveer nie, kan jy handmatig kies om die domein met of sonder 'n SSL-sertifikaat te laai. Let op dat as die webwerf nie 'n SSL-sertifikaat het en jy probeer om dit met SSL te dwing, dit foute kan gee.

### Aangepaste domeinnaam as Subwerfgebruiker Map

Subwerfadministrateurs kan ook aangepaste domeinname vanaf hul subwerf-admin-dashboard map.

Eerstens moet jy verseker dat jy hierdie opsie aktiveer onder die **Domain mapping**-instellings. Kyk na die skermkiekie hieronder.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Jy kan ook hierdie opsie stel of konfigureer onder die **Plan**-vlak of produkopsies op **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Wanneer enige van daardie opsies geaktiveer is en 'n subwerfgebruiker toegelaat word om aangepaste domeinname te map, sal die subwerfgebruiker 'n metaboks onder die **Account**-bladsy genaamd **Domains** sien.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Die gebruiker kan op die **Add Domain**-knoppie klik en dit sal 'n modale venster met 'n paar instruksies oopmaak.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Die gebruiker kan dan op **Next Step** klik en voortgaan met die byvoeging van die aangepaste domeinnaam. Hulle kan ook kies of dit die primêre domein sal wees of nie.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klik op **Add Domain** sal die proses van verifieer en ophaal van die DNS-inligting van die aangepaste domein begin.

### Oor Domeinsynkronisering

Domeinsynkronisering is 'n proses waar Ultimate Multisite die aangepaste domeinnaam by jou hosting-rekening byvoeg as 'n add-on domein **vir dat die domeinmappasie te werk doen**.

Domeinsynkronisering gebeur outomaties as jou hosting-verskaareder integrasie het met die Ultimate Multisite domeinmappasie-kenmerk. Tans is hierdie hosting-verskaareder _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ en _Cpanel._

Jy sal hierdie integrasie op Ultimate Multisite-instellings onder die **Integration**-tab moet aktiveer.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Let op dat as jou hosting-verskaareder nie een van die verskaareder wat hierbo genoem is nie,**sal jy die domeinnaam handmatig moet sinkroniseer of by jou hosting-rekening moet voeg]._
