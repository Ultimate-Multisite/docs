---
title: Podobné pojmy
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Základné pojmy

Pre nového používateľa WordPress Multisite a pre toho, kto sa len začína používať Ultimate Multisite, na začiatku môže byť veľa nových slov a fráz, ktoré musíte pochopiť. Učenie ich je dôležitá úloha, pretože budete musieť pochopiť platformu a ako ona funguje celkom.

V tomto článku sa pokúsme definovať a vysvetliť niektoré kľúčové pojmy v WordPress. Niektoré sú relevantnejšie pre používateľov, iné pre vývojárov, a niekedy pre obojcie.

## WordPress Multisite

WordPress **Multisite** je typ instalácie WordPressu, ktorá vám umožňuje vytvárať a spravovať siatku viacerých webových stránok z jednej dashboardy WordPressu. Môžete spravovať všetko, vrátane počtu sítí, funkcií, tém a roľov používateľov. Je možné spravovať stovky a tisíce sítí.

## Sieť (Network)

V kontexte WordPressu je multisite sieť miestom, kde sa môže spravovať niekoľko **subsítiek** z jednej dashboardy. Hoci pri vytváraní multisite siete sa líši medzi poskytovateľmi hostingu, výsledkom je zvyčajne len niekoľko ďalších smerníc v súbore **wp-config.php**, ktoré informujú WordPress, že pracuje v tomto špecifickom režime.

Existuje niekoľko odlišností medzi multisite sieťou a samostatnou instaláciou WordPressu, ktorú krátke časovi prediskutujeme.

##Databáza (Database)

Databáza je štruktúrovaný, zorganizovaný súbor dát. V informatiknej terminológii sa databáza označuje za softvér používaný na ukladanie a organizovanie dát. Predstavte si to ako skrbnicu, kde ukladáte dáta v rôznych sekciách nazvaných tabuľkami.

WordPress Multisite používa jednu databázu a každá subsítka dostáva vlastné tabuľky s ID blogu v predponedí (prefix), takže ak nainštalujete sieť instaláciu, máte po vytvorení databázy a subsítky tieto tabuľky:

_wp_1_options_ - tab s pôvodnej poddomény

_wp_2_options_ - tab s pôvodnej poddomény

## Hostiteľ

Hostiteľ je firma, ktorá umožňuje podnikám a jednotlivcom prístup k svojim webovým stránkam cez World Wide Web. Služby ponúkané hostiteľmi webových stránok sa líšia, ale zvyčajne zahŕňajú návrh webovej stránky, priestor na ukladanie dát na hostovi a pripojenie na Internet.

## Doména

Doménová meno je adresa, ktorú ľudia používajú na navštívenie vašej stránky. Hovorí webový prehliadač, kde nájsť vašu stránku. Ak je to ako ulica, doménové meno je spôsob, akým ľudia navštevujú vašu webovú stránku online. A ako mať znamenie pred svojím obchodom. Ak chcete navštíviť našu webovú stránku, musíte zadávať na adrese v prehliadači adresu, ktorá je [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kde je [**ultimatemultisite.com**](http://ultimatemultisite.com) doménové meno.

## Poddoména (Subdomain)

Poddoména je typ hierarchie webových stránok pod hlavnou doménou, ale namiesto používania priečiatkov na organizáciu obsahu na webovej stránke, vytvára to vlastnú webovú stránku. Je prezentovaná ako [**https://site1.domain.com/**](https://site1.domain.com/), kde je _site1_ názov poddomény a [_domain.com_](http://domain.com) hlavná doména.

## Podkatalóg (Subdirectory)

Podkatalóg je typ hierarchie webových stránok pod základnou doménou, ktorý používa priečiatky na organizáciu obsahu na webovej stránke. Podkatalóg je to isté ako podpriečiatok a názvy sa môžu použiť vomne. Je prezentovaný ako [**https://domain.com/site1**](https://domain.com/site1), kde je _site1_ názov podkatalógu a [_domain.com_](http://domain.com) hlavná doména.

## Poddoména (Subsite)

Subsite je child sít, ktorý vytvoríte v sieti Multisite. Môže byť buď **subdoménem**, alebo **podkategóriou** (subdirectory), v závislosti od toho, ako máte nainštalovanú WordPress Multisite.

## Super Admin

WordPress Super Admin je používateľská rola s plnými schopnosťami na správu všetkých subsítov v sieti Multisite. Pre používateľov Multisite je to **najvyšší stupeň prístupu**, ktorý môžete poskytnúť vašej inštalácii WordPress.

## Plugin

V zmysle všeobecného, plugin je súbor kódu, ktorý pridáva extra funkčnosť na váš webový portál WordPress. Môže to byť jednoduché, ako zmena loga pri prihlásení, alebo zložitý, ako pridanie e-commerce funkčnosti. _Woocommerce a Contact Form_ sú príklady pluginov.

Na WordPress Multisite sa pluginy môžu nainštalovať len z adminového dashboardu sieti správcu pomocou Super Admina. Administrátoři subsítov môžu pluginy aktivovať a deaktivovať iba v rámci svojho konkrétneho subsítu.

## Themes

WordPress téma je skupina súborov (_grafika, šablóny CSS a kód_), ktorá určuje celkový vzhľad webovej stránky. Poskytuje všetky stylizácie front-endu, ako je štýlo písma, rozvrh stránky, farby atď.

Podobne ako pluginy, témy v WordPress Multisite môžu nainštalovať len Super Admin a môžu byť aktivované na úrovni subsítu správcami subsítov.

## Site Template

**Site Template** je základný šablón webovej stránky, ktorý môžete použiť ako základ pri vytváraní nových sítí v sieti.

To znamená, že môžete vytvoriť základnú stránku, aktivovať rôzne pluginy, nastaviť aktívne tému a prispôsobiť ju akýmkoľvek spôsobom. Potom, keď váš zákazník vytvorí nový účet, namiesto toho, aby dostal štandardný WordPress portál bez zmysluväčného obsahu, dostane kópiu vašej základnej stránky s všetkými prispôsobeniami a obsahom už vložene.

## Domain Mapping

**Mapovanie domén** s WordPressom je spôsob, ako presmerovať používateľov na správny host pomocou adrese webovej stránky. V WordPress Multisite sa poddomény vytvárajú buď v podkategórii (subdirectory), alebo ako poddoména (subdomain). Mapovanie domén umožňuje používateľom poddomény používať hornú doménu, ako je [**joesbikeshop.com**](http://joesbikeshop.com), aby ich adresa stránky vyzerala profesionálnejšie.

## SSL

SSL znamená **Secure Sockets Layer**. Je to digitálny certifikát, ktorý ověřuje identitu webovej stránky a umožňuje šifrovaný prístup. Dnes sa používa ako štandardová technológia na zabezpečenie internetového spojenia a chránenie akýchkoľvek citlivých údajov, ktoré sú posielané medzi týmito systémami, čím sa bráni zločiteľom prečítať a upraviť akékoľvek informácie, vrátane potenciálnych osobných údajov. Moderné prehliadače vyžadujú SSL, čo je nevyhnutné pri vytváraní a správe webovej stránky.

## Media

Media sú obrázky, zvukové záznamy, video a iné súbory, ktoré webovú stránku naplňujú.

Sieťové stránky zdielajú jednu databázu v WordPress Multisite, ale udržiavajú samostatné cesty na dosierke (filesystem) pre media súbory.

Štandardová poloha WordPressu (wp-content/uploads) zostáva bežná; však jej cesta je zmenená, aby odrážala unikátny ID sieťovej stránky. Keďže sa takto robí, súbory media pre sieťovú stránku sa objavujú ako wp-contents/uploads/site/[id].

## Permalinks

Permalinks sú trvalé URL adresy vašej jednotlivé blogovej publikácie alebo stránky v rámci vášho webu. Permalinks sa tiež označujú ako **pretty links** (lepšie odkazy). Po výpadom používajú WordPress URL-ov formát s otázkou reťazcami, ktorý vyzerá niečo naozaj takto:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite je WordPress plugin, ktorý je určený pre instalácie WordPress Multisite, ktorý transformuje vašu instaláciu WordPress na prémiovú siatku cien – ako [WordPress.com] – a umožňuje klientom vytvárať webové stránky za mesačné, štvrťročné alebo ročné poplatky (môžete tiež vytvárať bezplatné plány).

## Checkout Form

Checkout Form je jednofunkčný alebo viacstupňový formulár objednávky, ktorý zahŕňa vytvorenie subdomény, členstva a používateľských účtov prostredníctvom registráции Ultimate Multisite. Obsahuje rôzne pole a platobné formuláre, ktoré musí používateľ vyplniť počas procesu registráции.

## Webhook

Webhook (ktorý sa tiež nazýva web callback alebo HTTP push API) je spôsob, ako aplikácia poskytne iným aplikáciám informácie v reálnom čase. Webhook posiela údaje iným aplikáciám hneď, čo znamená, že tieto údaje dostanete okamžite.

**Ultimate Multisite webhooks** otvárajú nekonečné možnosti a umožňujú správcom siete vykonávať rôzne, ale užitočné integrácie, najmä ak sa používajú v conjunction s službami ako _Zapier_ a IFTTT_.

## Events

Event je akcia, ktorá sa stane v dôsledku akcie používateľa alebo inej zdroja, napríklad kliknutia myšou. Ultimate Multisite udržia si záznam o všetkých udalostiach a logoch, ktoré sa v celej vašej siatke deje. Sleduje rôzne aktivity, ktoré sa v vašom multisite stávajú, ako zmeny plánov.
