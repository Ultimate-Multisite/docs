---
title: Basiese Konsepte
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Basiese Konsepte

Vir 'n nuwe WordPress Multisite-gebruiker en iemand wat pas begin met Ultimate Multisite, kan daar baie nuwe woorde en frases wees om aan te neem. Om dit te leer is 'n belangrike taak omdat jy die platform en hoe dit as geheel werk, moet verstaan.

In hierdie artikel probeer ons om sommige van die sleutelkonsepte in WordPress te definieer en te verduidelik. Sommige hiervan is meer relevant vir gebruikers, ander vir ontwikkelaars, en sommige vir albei.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** is 'n tipe WordPress-installasie wat jou toelaat om 'n netwerk van verskeie webwerwe te skep en te bestuur vanaf een enkele WordPress-dashboard. Jy kan alles bestuur, insluitend die aantal werwe, funksies, temas en gebruikersrolle. Dit is moontlik om honderde en duisende werwe te bestuur.

## Netwerk {#network}

Vanuit WordPress se oogpunt is 'n multisite-netwerk waar 'n aantal **subsites** vanaf een enkele dashboard bestuur kan word. Hoewel die skep van 'n multisite-netwerk verskil tussen hosting-aanbieders, is die finale resultaat gewoonlik 'n paar bykomende riglyne in die **wp-config.php** lêer om WordPress te laat weet dat dit in hierdie spesifieke modus funksioneer.

Daar is 'n aantal duidelike verskille tussen 'n multisite-netwerk en 'n selfstandige WordPress-installasie wat ons kortliks sal bespreek.

## Database {#database}

'n Database is 'n gestruktureerde, georganiseerde stel data. In rekenaarterminologie verwys 'n database na sagteware wat gebruik word om data te stoor en te organiseer. Dink daaraan as 'n lêerkas waar jy data in verskillende afdelings genaamd tabelle stoor.

WordPress Multisite gebruik een database en elke subsite kry sy eie tabelle met die blog-ID in die prefiks, sodat sodra jy 'n netwerkinstallasie installeer en 'n subsite skep, moet jy hierdie tabelle hê:

_wp_1_options_ \- opsies-tabel vir eerste subsite

_wp_2_options_ \- opsies-tabel vir tweede subsite

## Hosting-aanbieder {#hosting-provider}

'n Hosting-aanbieder is 'n maatskappy wat besighede en individue in staat stel om hul webwerwe beskikbaar te stel via die World Wide Web. Die dienste wat webhosting-aanbieders aanbied, sal varieer, maar sluit gewoonlik webwerfontwerp, stoorruimte op 'n host, en konektiwiteit na die Internet in.

## Domein {#domain}

'n Domeinamenskap is 'n adres wat mense gebruik om jou webwerf te besoek. Dit vertel die webblaaier waar om vir jou webwerf te kyk. Net soos 'n straatadres, is 'n domein hoe mense jou webwerf aanlyn besoek. En, soos om 'n bord voor jou winkel te hê. As jy na ons webwerf wil besoek, sal jy ons webadres op jou blaaier se adres moet tik, wat [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) is, waar [**ultimatemultisite.com**](http://ultimatemultisite.com) die domeinamenskap is.

## Subdomein {#subdomain}

'n Subdomein is 'n tipe webwerfhiërargie onder die hoofdomein, maar in plaas daarvan om maatskappye te gebruik om inhoud op 'n webwerf te organiseer, kry dit eintlik sy eie webwerf. Dit word aangebied as [**https://site1.domain.com/**](https://site1.domain.com/) waar _site1_ die subdomeinamenskap is en [_domain.com_](http://domain.com) die hoofdomein is.

## Subdirektorie {#subdirectory}

'n Subdirektorie is 'n tipe webwerfhiërargie onder 'n hoofdomein wat maatskappye gebruik om inhoud op 'n webwerf te organiseer. 'n Subdirektorie is dieselfde as 'n submaatskappy en die name kan uitruilbaar gebruik word. Dit word aangebied as [**https://domain.com/site1**](https://domain.com/site1) waar _site1_ die subdirektorie-naam is en [_domain.com_](http://domain.com) die hoofdomein is.

## Subsite {#subsite}

'n Subsite is 'n kindwebwerf wat jy op 'n Multisite-netwerk skep. Dit kan óf 'n **subdomein** óf 'n **subdirektorie** wees, afhangende van hoe jou WordPress Multisite-installasie gekonfigureer is.

## Super Admin {#super-admin}

'n WordPress Super Admin is 'n gebruikersrol met volle vermoë om al die subsites op 'n Multisite-netwerk te bestuur. Vir Multisite-gebruikers is dit die **hoogste vlak van toegang** wat jy aan jou WordPress-installasie kan skenk.

## Plugin {#plugin}

Oor die algemeen is 'n plugin 'n stel kode wat ekstra funksionaliteit by jou WordPress-webwerf voeg. Dit kan so eenvoudig wees as om die aanmeldlogo te verander of so kompleks soos om e-handelfunksionaliteit by te voeg. _Woocommerce en Contact Form_ is voorbeelde van 'n plugin.

Op 'n WordPress Multisite kan plugins slegs vanaf die network admin dashboard deur 'n Super Admin geïnstalleer word. Subsite Admins kan plugins slegs binne hul subsite aktiver en deaktiveer.

## Themes {#themes}

'n WordPress-tema is 'n groep lêers (_grafika, stylblaaie en kode_) wat die algehele voorkoms van die webwerf bepaal. Dit verskaf al die front-end stylings soos lettertipe, bladsy-indeling, kleure, ens.

Net soos plugins, kan temas in WordPress Multisite slegs deur 'n Super Admin geïnstalleer word en kan op die subsite-vlak deur subsite-admins geaktiveer word.

## Site Template {#site-template}

**Site Template** is 'n basiswebwerf wat as 'n basis kan dien wanneer jy nuwe werwe in jou netwerk skep.

Dit beteken dat jy 'n basiswebwerf kan skep, verskillende plugins kan aktiveer, 'n aktiewe tema kan stel, en dit op enige manier kan aanpas wat jy wil. Dan, wanneer jou kliënt 'n nuwe rekening skep, sal hulle nie 'n standaard WordPress-webwerf met geen betekenisvolle inhoud binne nie, maar hulle sal 'n kopie van jou basiswebwerf kry met al die aanpassings en inhoud reeds op plek.

## Domain Mapping {#domain-mapping}

**Domain mapping** met WordPress is 'n manier om gebruikers na die korrekte host te herlei, deur 'n webwerf se adres. In 'n WordPress Multisite word subsites gebruik met óf 'n subdirektorie óf subdomein. Wat domain mapping doen, is dit laat subsite-gebruikers toe om 'n top-vlak domein soos [**joesbikeshop.com**](http://joesbikeshop.com) te gebruik om hul webwerfadres meer professioneel te laat lyk.

## SSL {#ssl}

SSL staan vir **Secure Sockets Layer**. Dit is 'n digitale sertifikaat wat die identiteit van 'n webwerf outentiseer en 'n versleutelde koneksie moontlik maak. Vandag word dit as die standaardtegnologie gebruik om 'n internetkoneksie veilig te hou en enige sensitiewe data te beskerm wat tussen twee stelsels gestuur word, wat voorkom dat kriminele enige oorgedra inligting lees en wysig, insluitend potensiële persoonlike besonderhede. Moderne blaaiers vereis SSL, wat dit noodsaak wanneer jy 'n webwerf skep en bedryf.

## Media {#media}

Media is beelde, audio, video en ander lêers wat 'n webwerf uitmaak.

Netwerkwerwe deel 'n enkele database in 'n WordPress Multisite; hulle handhaaf aparte paaie op die lêersisteem vir media lêers.

Die standaard WordPress-plek (wp-content/uploads) bly bestaan; egter, sy pad word verander om die netwerkwerf se unieke ID te weerspieël. Gevolglik verskyn media lêers vir 'n netwerkwerf as wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Permalinks is die permanente URL's van jou individuele blog-plasing of bladsy binne jou webwerf. Permalinks word ook verwys as **mooie skakels** (pretty links). Standaard gebruik WordPress URL's die query string-formaat wat soos hierdie lyk:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite is 'n WordPress plugin, gemaak vir WordPress Multisite-installasies, wat jou WordPress-installasie omskep in 'n premium netwerk van werwe – soos [WordPress.com](https://WordPress.com) – wat kliënte toelaat om werwe te skep via maandelikse, kwartaallikse of jaarlikse fooie (jy kan ook Gratis-planne skep).

## Checkout Form {#checkout-form}

Checkout Form is 'n enkele of meer-stappe bestelformulier wat die skep van subsite-, lidmaatskap- en gebruikersrekeninge deur Ultimate Multisite-registrasie behels. Dit bestaan uit verskillende velde en betalingsformuliere wat 'n gebruiker moet indien tydens die aanmeldproses.

## Webhook {#webhook}

'n Webhook (ook genoem 'n web terugroep of HTTP push API) is 'n manier vir 'n toepassing om ander toepassings met real-time inligting te voorsien. 'n Webhook lewer data aan ander toepassings soos dit gebeur, wat beteken dat jy data onmiddellik ontvang.

**Ultimate Multisite webhooks** maak oneindige moontlikhede oop, wat netwerkadministrateurs toelaat om alle soorte waansinnig-maar-nutige integrasies te doen, veral as dit in samewerking met dienste soos _Zapier en IFTTT_ gebruik word.

## Events {#events}

'n Event is 'n aksie wat plaasvind as gevolg van die gebruiker of 'n ander bronaksie, soos 'n muisklik. Ultimate Multisite hou 'n rekord van al die gebeurtenisse en logboeke wat plaasvind binne jou hele netwerk. Dit spoor verskillende aktiwiteite wat in jou multisite plaasvind, soos planveranderinge.
