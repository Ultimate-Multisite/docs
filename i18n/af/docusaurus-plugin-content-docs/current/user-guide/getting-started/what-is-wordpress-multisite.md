---
title: Wat is WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Wat is WordPress Multisite?

Binne sy kern bied WordPress 'n funksie genaamd ‘Multisite’ wat sy oorsprong terugvoer na 2010 met die bekendstelling van WordPress 3.0. Sedertdien het dit 'n aantal hersienings ontvang wat daarop gemik was om nuwe funksies bekend te stel en die sekuriteit te versterk.

In wese kan 'n WordPress multisite voorgestel word as die volgende: 'n Universiteit onderhou 'n enkele installasie van WordPress, maar elke fakulteit onderhou sy eie WordPress-webwerf.

##

## Wat is WordPress Multisite Presies?

Multisite is 'n funksie van WordPress wat dit moontlik maak vir verskeie webwerwe om 'n enkele WordPress-installasie te deel. Wanneer multisite geaktiveer word, word die oorspronklike WordPress-webwerf omgeskakel om te ondersteun wat gewoonlik verwys word as 'n **netwerk van webwerwe**.

Hierdie netwerk deel die bestandstelsel (wat beteken dat **plugins en temas ook gedeel word**), die database, die WordPress-kernbestelle, die wp-config.php, ens.

Dit beteken dat WordPress-, tema- en plugin-opdaterings slegs een keer vir al jou netwerkwebwerwe moet uitgevoer word, aangesien hulle dieselfde lêers op die bestandstelsel deel.

Hierdie feit is een van die hoofvoordele van multisite, aangesien dit jou toelaat om die aantal webwerwe wat jy bestuur te laat groei terwyl die aantal take wat jy moet uitvoer om jou kliënte se webwerwe te onderhou, dieselfde bly.

##

## Subdomein of Subdirektorie?

Daar is twee maniere om WordPress multisite te laat loop – en jy moet een kies wanneer jy jou gewone WordPress-installasie na 'n multisite-installasie omskep:

**Subdomein:** bv.: [site.domain.com](http://site.domain.com)

…of

**Subdirektorie:** bv.: [yourdomain.com/site](http://yourdomain.com/site)

Elke modus het voordele en nadele wat jy in ag geneem moet wanneer jy hierdie besluit neem.

Een ding is wel belangrik om te weet: sodra jy jou besluit geneem het, is dit baie moeilik om jou netwerk van subdirektorie na subdomein of omgekeerd te verander – veral as jy reeds 'n handvol webwerwe geskep het.

Voordat jy daardie besluit neem, is hier 'n paar punte om in gedinge te hou:

**Subdirektorie-modus** is die maklikste modus in terme van opstel en onderhoud. Dit gebeur omdat al die webwerwe net rye is wat aan die hoofdomein vasgemaak is (bv. [yourdomain.com/subsite](http://yourdomain.com/subsite)). As gevolg hiervan het jy slegs **een SSL-sertifikaat** vir die hoofdomein nodig en dit sal die hele netwerk dek.

Terselfdertyd, weens sy URL-struktuur, sal Google en die meeste ander soekmasjiene al die subsites op jou subdirektorie-gebaseerde netwerk as een gigantiese webwerf beskou. As gevolg hiervan kan inhoud wat aan subsites deur jou eie kliënte bygevoeg word, die SEO-prestasie van jou landingswebwerf beïnvloed, byvoorbeeld. Die vlak van impak is betwiste en daar is 'n argument te maak dat sulke reëling selfs voordelig kan wees vir SEO-prestasie.

**Subdomein-modus** is 'n bietjie kompleks om op te stel, maar sy URL-struktuur (bv. [subsite.yournetwork.com](http://subsite.yournetwork.com)) word oor die algemeen as "meer professioneel" beskou.

Een van die hoofuitdagings by die opstel van subdomeinmodus is SSL-dekking (HTTPS) vir die hele netwerk. Dit kom neer op die feit dat webbrowsers subdomeine as geïsoleerde entiteite beskou. As gevolg hiervan sal jy 'n ander SSL-sertifikaat vir elke subdomein op jou netwerk benodig, of 'n spesiale tipe sertifikaat genaamd 'n **Wildcard SSL-sertifikaat**. In die laaste jare verbeter hostingverskaarders en panele hul spel in terme van SSL-voorsiening en sommige bied wildcard-sertifikaat op die klik van 'n knoppie, wat die gaping tussen die twee modusse in terme van kompleksiteit by die opstel sluit.

In teenstelling met subdirektorie-modus, word subsites op 'n subdomein-gebaseerde netwerk deur soekmasjiene beskou as aparte webwerwe, wat beteken dat inhoud wat op een subsite teenwoordig is, glad nie met die SEO-prestasie van ander subsites interfereer nie.

## Die Super Admin

Single-site WordPress-installasies laat jou toe om 'n onbeperkte aantal gebruikers by te voeg en daardie gebruikers verskillende gebruikersrolle met verskillende toestemminge te gee.

In WordPress Multisite word 'n nuwe tipe gebruiker ontgrens: **die super admin** – en 'n nuwe admin-paneel word ontgrens: **die netwerk-admin-paneel**.

Soos die naam aandui, het die super admin superkragte oor die netwerk, en is in staat om al sy subsites, plugins, temas, alles te bestuur!

Sodra jy jou single-site WordPress-installasie na multisite omskep, sal die oorspronklike admin van die enkele webwerf outomaties opgradeer na super admin.

Plugins en temas kan slegs vanaf die netwerk-admin-paneel deur super admins geïnstalleer of gedeïnstalleer word. Subsite-admins kan dan kies om daardie plugins of temas te aktiveer of te deaktiveer tensy die super admin netwerk 'n plugin aktiveer, wat dit dwing om altyd vir al die subsites aktief te wees.

_Let wel: soos jy kan sien, gee die uitnodiging van iemand na jou netwerk en die verleen van super admin-status aan hierdie gebruiker totale beheer oor jou netwerk. As 'n voorbeeld kan ander super admins selfs jou super admin-status verwyder, wat jou effektief van jou eie netwerk-admin-paneel uitsluit. Om Ultimate Multisite kliënte in staat te stel om granulaire beheer oor wat bykomende super admins kan doen, het ons 'n bykomie genaamd Support Agents. Hierdie bykomie laat jou toe om nog 'n tipe gebruiker te skep – 'n agent – met slegs die toestemminge wat hulle nodig mag hê om hul take op die netwerk uit te voer._

## Wat word gedeel tussen subsites en wat nie

Soos ons vroeër genoem het, is een van die sleutelvoordele van WordPress multisite dat al die subsites dieselfde konfigurasies, kernbestelle, temas, plugins, WordPress-kernbestelle, ens. deel.

Daar is egter elemente wat mooi op 'n per-subsite-basis beperk word.

\- Byvoorbeeld, elke subsite kry sy eie uploads-maatskappy. As gevolg hiervan kan uploads wat deur gebruikers van een spesifieke subsite gemaak is, nie op 'n ander subsite toeganklik wees nie.

\- Elke subsite het sy eie toegewyde admin-paneel en kan plugins of temas aktiveer of deaktiveer tensy hulle netwerk-aktief was deur 'n super admin.

\- Die meeste databasetafels word vir elke subsite geskep, wat beteken dat plase, kommentaar, bladsye, instellings, en meer vir elke subsite beperk word.

## Gebruikersbestuur op WordPress Multisite

Een delikate onderwerp op WordPress multisite is gebruikersbestuur. Die WordPress-gebruikers-tabel is een van die min wat onder al die subsites gedeel word.

Hierdie reëling kan probleme veroorsaak afhangende van wat jy beplan om met jou netwerk te bou. Die voorbeeld hieronder help om die mees dringende een te illustreer.

Stel die volgende scenario voor:

Jy skep 'n WordPress multisite-netwerk en begin subsites aanbied vir 'n maandeliklike fooi aan mense wat 'n e-handelwinkel wil hê.

Jy kry jou eerste betalende kliënt – John. Jy skep 'n webwerf vir John op jou netwerk, installeer al die nodige plugins, en skep dan 'n gebruiker vir John sodat hy sy winkel kan bestuur.

Dan kom 'n tweede kliënt – Alice. Jy doen dieselfde vir haar en sy het nou ook 'n winkel op jou netwerk.

John en Alice is albei jou kliënte, maar hulle ken mekaar nie. Wat belangriker is, as een van hulle die webwinkel van die ander besoek, is daar geen manier om te weet dat hierdie winkel op dieselfde netwerk van webwerwe gehost word nie.

Op 'n dag moet John 'n nuwe paar skoene koop en hy vind die perfekte een in Alice se winkel. Wanneer hy probeer om die aankoop te voltooi, kry hy 'n "e-posadres reeds in gebruik" foutboodskap, wat bizar is aangesien John 100% seker is dat dit die eerste keer is wat hy ooit Alice se webwerf besoek het.

Wat hier gebeur, is dat John se gebruiker oor die hele netwerk gedeel word, sodat wanneer hy probeer om 'n rekening te skep om by Alice se webwerf uit te tjek, WordPress sal detecteer dat 'n gebruiker met dieselfde e-posadres reeds bestaan en 'n fout sal gee.

_Let wel: Ons besef hoe sleg dit kan wees afhangende van jou gebruikssake, dus het Ultimate Multisite 'n opsie wat die gewone kontrole vir 'n bestaande gebruiker omseil, wat toelaat dat verskeie rekeninge geskep word met dieselfde e-posadres. Elke rekening is gebind aan 'n subsite, sodat die risiko van botsing tot 'n minimum gehou word. In die voorbeeld hierbo sou John nie 'n foutboodskap kry nie en sou daardie skoene sonder probleme kan koop. Hierdie opsie word Enable Multiple Accounts genoem, en kan op Ultimate Multisite → Settings → Login & Registration geaktiveer word._

Alhoewel die gebruikers-tabel gedeel word, kan gebruikers by die subsite-admins of die super admin by subsites bygevoeg en verwyder word, en hulle kan selfs verskillende gebruikersrolle op verskillende subsites hê.

## Prestasieoorwegings

WordPress multisite is regtig kragtig wat aankom op die aantal webwerwe wat dit kan ondersteun. Dit kan getoets word deur die feit dat [WordPress.com](https://WordPress.com), Edublogs, en Campuspress almal multisite-gebaseerde dienste is en elkeen honderde webwerwe huisves.

Alhoewel daar in teorie geen maksimum aantal webwerwe is wat jy op 'n enkele WordPress multisite-installasie kan huisves nie, kan die aantal webwerwe wat jy bevredigend kan laat loop, baie wissel afhangende van 'n aantal verskillende faktore: hoe dinamies die webwerwe is, watter plugins beskikbaar is vir subsites, ens.

As 'n vuistregel, hoe eenvoudiger jou netwerk is, hoe beter. Om webwerwe te verkies waar die inhoud nie regtig dinamies is nie (wat hulle uitstekende kandidate vir aggressiewe caching-strategieë maak) en die plugin-stap so lig moontlik te hou (hoe laer die aantal aktiewe plugins, hoe beter) kan die aantal subsites wat jy kan huisves, drasties verhoog.

Die beste deel is dat aangesien dit alles WordPress is, die dieselfde gereedskap wat jy reeds ken en liefhet vir prestasieverbeterings ook vir 'n multisite-netwerk sal werk.

Die hoofbottelnek vir multisite is die database, maar as alles anders korrek opgestel is, kan dit take van 'n paar duisend webwerwe voordat jy daaroor hoef te bekommer. Selfs dan is daar oplossings wat op daardie punt progressief bygevoeg kan word (soos database sharding oplossings, byvoorbeeld).
