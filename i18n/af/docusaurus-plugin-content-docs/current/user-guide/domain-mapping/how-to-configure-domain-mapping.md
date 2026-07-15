---
title: Hoe om domeinkartering op te stel
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Hoe om domeinkartering op te stel (v2)

_**BELANGRIKE NOTA: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Een van die kragtigste kenmerke van ’n premium-netwerk is die vermoë om ons kliënte die kans te bied om ’n topvlakdomein aan hul webwerwe te koppel. Per slot van rekening, wat lyk meer professioneel: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) of [_**joesbikeshop.com**_](http://joesbikeshop.com)? Daarom bied Ultimate Multisite daardie kenmerk ingebou, sonder dat dit nodig is om derdeparty-plugins te gebruik.

## Wat is domeinkartering? {#whats-domain-mapping}

Soos die naam aandui, is domeinkartering die vermoë wat deur Ultimate Multisite gebied word om ’n versoek vir ’n pasgemaakte domein te ontvang en daardie versoek te karteer na die ooreenstemmende webwerf in die netwerk waaraan daardie spesifieke domein gekoppel is.

### Hoe om domeinkartering op jou Ultimate Multisite-netwerk op te stel {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domeinkartering vereis ’n bietjie opstelling van jou kant af om te werk. Gelukkig outomatiseer Ultimate Multisite die harde werk vir jou sodat jy maklik aan die vereistes kan voldoen.

Tydens Ultimate Multisite-installasie sal die assistent outomaties die **sunrise.php** na die aangewese vouer kopieer en installeer. **Die assistent sal jou nie toelaat om voort te gaan totdat hierdie stap voltooi is nie**.

<!-- Skermskoot nie beskikbaar nie: Ultimate Multisite-installasieassistent met sunrise.php-stap -->

Dit beteken dat sodra die Ultimate Multisite-installasieassistent klaar is met die opstelling van jou netwerk, jy dadelik die pasgemaakte domein kan begin karteer.

Let daarop dat domeinkartering in Ultimate Multisite nie verpligtend is nie. Jy het die opsie om WordPress Multisite se inheemse domeinkarteringsfunksie of enige ander domeinkarteringsoplossing te gebruik.

Indien jy Ultimate Multisite-domeinkartering moet deaktiveer om plek te maak vir ander domeinkarteringsoplossings, kan jy hierdie kenmerk onder **Ultimate Multisite > Settings > Domain Mapping** deaktiveer.

![Domeinkartering-instellingsbladsy wat admin-herleiding, karteringsboodskap en DNS-opsies wys](/img/config/domain-mapping-settings.png)

Reg onder hierdie opsie kan jy ook die opsie **Force Admin Redirect** sien. Hierdie opsie laat jou toe om te beheer of jou kliënte toegang tot hul admin-Dashboard op beide hul pasgemaakte domein en subdomein sal hê, of slegs op een van hulle.

As jy **Force redirect to mapped domain** kies, sal jou kliënte slegs toegang tot hul admin-Dashboard op hul pasgemaakte domeine hê.

Die opsie **Force redirect to** **network domain** sal presies die teenoorgestelde doen - jou kliënte sal slegs toegelaat word om toegang tot hul Dashboards op hul subdomein te verkry, selfs as hulle probeer om op hul pasgemaakte domeine aan te meld.

En die opsie **Allow access to the admin by both mapped domain domain and network domain** laat hulle toe om toegang tot hul admin-Dashboards op beide die subdomein en die pasgemaakte domein te verkry.

![Admin-herleiding-aftreklys oopgevou wat die drie herleidingsopsies wys](/img/config/domain-mapping-redirect-options.png)

Daar is twee maniere om ’n pasgemaakte domein te karteer. Die eerste is deur die domeinnaam vanaf jou netwerk-admin-Dashboard as die super-admin te karteer, en die tweede is deur die subwebwerf-admin-Dashboard onder die Account-bladsy.

Maar voordat jy die pasgemaakte domein aan een van die subwebwerwe in jou netwerk begin karteer, sal jy moet seker maak dat die **DNS-instellings** van die domeinnaam behoorlik gekonfigureer is.

###

### Maak seker dat die domein se DNS-instellings behoorlik gekonfigureer is {#making-sure-the-domain-dns-settings-are-properly-configured}

Vir ’n kartering om te werk, moet jy seker maak dat die domein wat jy beplan om te karteer na jou netwerk se IP-adres wys. Let daarop dat jy die netwerk-IP-adres benodig - die IP-adres van die domein waar Ultimate Multisite geïnstalleer is - nie die IP-adres van die pasgemaakte domein wat jy wil karteer nie. Om na die IP-adres van ’n spesifieke domein te soek, stel ons voor dat jy byvoorbeeld na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) gaan.

Om die domein korrek te karteer, moet jy ’n **A RECORD** op jou **DNS**-konfigurasie byvoeg wat na daardie **IP-adres** wys. DNS-bestuur verskil baie tussen verskillende domeinregistreerders, maar daar is volop tutoriale aanlyn wat dit dek as jy soek vir " _Creating A Record on XXXX_ " waar XXXX jou domeinregistreerder is (bv.: " _Creating A Record on_ _GoDaddy_ ").

As jy sukkel om dit te laat werk, **kontak jou domeinregistreerder se ondersteuning** en hulle sal jou met hierdie deel kan help.

As jy beplan om jou kliënte toe te laat om hul eie domeine te karteer, sal hulle self die werk aan hierdie deel moet doen. Verwys hulle na hul registreerder se ondersteuningstelsel as hulle nie daarin slaag om die A Record te skep nie.

### Pasgemaakte domeinnaam as Super Admin karteer {#mapping-custom-domain-name-as-super-admin}

Wanneer jy as super-admin op jou netwerk aangemeld is, kan jy maklik pasgemaakte domeinname byvoeg en bestuur deur na **Ultimate Multisite > Domains** te gaan.

![Domeine-lysbladsy in Ultimate Multisite](/img/admin/domains-list.png)

Onder hierdie bladsy kan jy bo-op die **Add Domain**-knoppie klik en dit sal ’n modale venster oopmaak waar jy die **pasgemaakte domeinnaam**, **die subwebwerf** waarop jy die pasgemaakte domeinnaam wil toepas, kan stel en invul, en kan besluit of jy dit as die **primêre domein**naam wil stel of nie (let daarop dat jy **meervoudige domeinname aan een subwebwerf** kan karteer).

![Add Domain-modale venster met domeinnaam, webwerf-kieser en primêre-domein-skakelaar](/img/admin/domain-add-modal.png)

Nadat jy al die inligting ingevoer het, kan jy dan die **Add Existing Domain**-knoppie onderaan klik.

Dit sal die proses begin om die DNS-inligting van die pasgemaakte domein te verifieer en op te haal. Jy sal ook ’n log onderaan die bladsy sien sodat jy die proses waardeur dit gaan, kan volg. Hierdie proses kan ’n paar minute neem om te voltooi.

Ultimate Multisite v2.13.0 skep ook outomaties die interne domeinrekord wanneer ’n nuwe werf geskep word op ’n host wat as ’n per-werf-domein behandel moet word. As die host die netwerk se primêre domein is, of een van die gedeelde checkout-vorm-basisdomeine is wat op ’n **Site URL**-veld gekonfigureer is, word die outomatiese mapped-domain-rekord oorgeslaan sodat daardie gedeelde basisdomein beskikbaar bly vir elke werf wat dit gebruik.

Wanneer ’n kliënt ’n nuwe domein deur Domain Seller v1.3.0 of nuwer registreer, koppel Ultimate Multisite outomaties die geregistreerde domein by verstek aan die kliënt se netwerkwerf. Administrateurs hoef nie meer ’n aparte mapped-domain-rekord ná ’n suksesvolle registrasie by te voeg nie, tensy hulle opsies soos die primêre-domein-vlag, aktiveringstatus, of SSL-hantering wil aanpas.

Die **Stage** of die status behoort van **Checking DNS** na **Ready** te verander as alles behoorlik opgestel is.

<!-- Screenshot unavailable: Domeinry wat die Checking DNS-stadium in die domeinlys wys -->

<!-- Screenshot unavailable: Domeinry wat die Ready-stadium met die groen statusaanwyser wys -->

As jy op die domeinnaam klik, sal jy ’n paar opsies daarin kan sien. Kom ons kyk vinnig daarna:

![Domeinbesonderhedebladsy met stage-, werf-, aktief-, primêr- en SSL-skakelaars](/img/admin/domain-edit.png)

**Stage:** Dit is die stadium waarin die domein is. Wanneer jy die domein die eerste keer byvoeg, sal dit waarskynlik in die **Checking DNS**-stadium wees. Die proses sal na die DNS-inskrywings kyk en bevestig dat hulle korrek is. Daarna sal die domein in die **Checking SSL**-stadium geplaas word. Ultimate Multisite sal nagaan of die domein SSL het of nie en sal jou domein as **Ready** of **Ready (without SSL)** kategoriseer.

**Site:** Die subdomein wat met hierdie domein geassosieer word. Die gekoppelde domein sal die inhoud van hierdie spesifieke werf wys.

**Active:** Jy kan hierdie opsie aan- of afskakel om die domein te aktiveer of te deaktiveer.

**Is Primary Domain?:** Jou kliënte kan meer as een gekoppelde domein vir elke werf hê. Gebruik hierdie opsie om te kies of dit die primêre domein vir die spesifieke werf is.

**Is Secure?:** Alhoewel Ultimate Multisite nagaan of die domein ’n SSL-sertifikaat het of nie voordat dit geaktiveer word, kan jy handmatig kies om die domein met of sonder ’n SSL-sertifikaat te laai. Let daarop dat as die webwerf nie ’n SSL-sertifikaat het nie en jy probeer om dit met SSL te forseer, dit vir jou foute kan gee.

### Koppel pasgemaakte domeinnaam as Subsite-gebruiker {#mapping-custom-domain-name-as-subsite-user}

Subsite-administrateurs kan ook pasgemaakte domeinname vanaf hul subsite-admin-dashboard koppel.

Eerstens moet jy seker maak dat jy hierdie opsie onder die **Domain mapping**-instellings aktiveer. Sien die skermskoot hieronder.

<!-- Screenshot unavailable: Domain mapping-instellings wat subsite-gebruikers toelaat om domeine via Customer DNS Management-skakelaar te koppel -->

Jy kan ook hierdie opsie op die **Plan**-vlak of produkopsies op **Ultimate Multisite > Products** stel of konfigureer.

![Custom Domains-afdeling op die produk-wysigbladsy](/img/config/product-custom-domains.png)

Wanneer enige van daardie opsies geaktiveer is en ’n subsite-gebruiker toegelaat word om pasgemaakte domeinname te koppel, behoort die subsite-gebruiker ’n metabox onder die **Account**-bladsy genaamd **Domains** te sien.

<!-- Screenshot unavailable: Domains-metabox op die subsite Account-bladsy met Add Domain-knoppie -->

Die gebruiker kan op die **Add Domain**-knoppie klik en dit sal ’n modale venster met ’n paar instruksies oopmaak.

<!-- Screenshot unavailable: Add Domain-modale venster wat DNS A-record-instruksies vir subsite-gebruikers wys -->

Die gebruiker kan dan op **Next Step** klik en voortgaan om die pasgemaakte domeinnaam by te voeg. Hulle kan ook kies of dit die primêre domein sal wees of nie.

<!-- Screenshot unavailable: Add Domain-vorm met pasgemaakte domeinnaamveld en primêre domein-skakelaar -->

<!-- Screenshot unavailable: Add Domain-bevestigingstap wat DNS-verifikasie aktiveer -->

Klik op **Add Domain** sal die proses begin om die DNS-inligting van die pasgemaakte domein te verifieer en op te haal.

### Oor domeinsinkronisering {#about-domain-syncing}

Domeinsinkronisering is ’n proses waar Ultimate Multisite die pasgemaakte domeinnaam by jou hosting-rekening voeg as ’n byvoegdomein **sodat die domain mapping kan werk**.

Domeinsinkronisering gebeur outomaties as jou hosting-verskaffer integrasie met die Ultimate Multisite domain mapping-funksie het. Tans is hierdie hosting-verskaffers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ en _Cpanel._

Wanneer ’n host-verskaffer-integrasie aktief is, kan Ultimate Multisite ook die verskafferkant-DNS- of subdomeinskeppingstaak vir nuutgeskepte werwe in die tou plaas. As geen integrasie na daardie taak luister nie, word die agtergrondtaak oorgeslaan om no-op-tou-inskrywings te vermy. DNS- en SSL-kontroles vir gekoppelde domeine bly deur die normale domein-stadiumproses loop.

Jy sal hierdie integrasie in Ultimate Multisite-instellings onder die **Integration**-oortjie moet aktiveer.

![Integrations-oortjie in Ultimate Multisite-instellings wat hosting-verskaffers wys](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting-verskaffer Configuration-skakels op die Integrations-instellingsoortjie -->

_Let daarop dat as jou hosting-verskaffer nie een van daardie verskaffers hierbo genoem is nie,**jy die domeinnaam handmatig sal moet sinkroniseer of byvoeg** by jou hosting-rekening._
