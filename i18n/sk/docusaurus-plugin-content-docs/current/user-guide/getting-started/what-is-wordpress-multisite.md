---
title: Čo je WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Čo je WordPress Multisite?

V svojom jádre poskytuje WordPress funkciu sa naznačujúcou ako „Multisite“, ktorá sa vracá do pôvodu z 2010 roku s lanskou WordPressu 3.0. Od toho isté má niekoľko revízií, ktoré sú určené na prinesenie nových funkcií a posilnenie bezpečnosti.

V podstate sa WordPress Multisite dá predstaviť takto: Univerzita udržiava jednu instaláciu WordPressu, ale každý fakulta má vlastnú webovú stránku WordPressu.

##

## Čo je presne WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Multisite je funkciou WordPressu, ktorá umožňuje viacero webových stránok využívať jednu instaláciu WordPressu. Keď sa multisite aktivuje, pôvodná webová stránka WordPressu sa premení na podporu toho, čo sa zvyčajne nazýva **sieť webových stránok**.

Tá sieť zdieľa súborový systém (čo znamená, že **plugins a themes tiež zdieľajú**), databázu, základné súbory WordPressu, wp-config.php atď.

To znamená, že aktualizácie WordPressu, tém a pluginov je potrebné vykonať len raz pre všetko vaše sieťové webové stránky, pretože sa súbory na súborovom systéme zdieľajú.

Táto fakto je jednou z hlavných výhod multisite, pretože umožňuje rozvíjať počet správnych sietí, ktoré spravujete, zároveň udržiavať rovnaký počet úloh, ktoré potrebujete vykonávať na udržiavaní webových stránok vašich klientov.

##

## Subdoména alebo podkatalóg? {#subdomain-or-subdirectory}

Existujú dve režimy pre skriatie WordPress Multisite – a musíte si vybrať jeden pri premenovaní vášho štandardného instalovaného WordPressu na multisite instaláciu:

**Subdoména:** napr. [site.domain.com](http://site.domain.com)

…alebo

**Podkatalóg:** napr. [yourdomain.com/site](http://yourdomain.com/site)

Každý režim má svoje výhody a nevýhody, ktoré musíte zvážiť pri tomto rozhodovaní.

Je je však dôležité si zapamätate jednu vec: ak ste už rozhodli, zmena siete z podkatalógového doménového mena (subdirectory) na poddoménu alebo naopak je veľmi náročná – najmä ak máte už vytvorené niekoľko webových stránok.

Predtým, než to rozhodnete, tu sú pár bodov, ktoré si mali zapamätať:

**Režim s podkatalógovým menom (Subdirectory Mode)** je najjednoduchší režim zameraný na nastavenie a údržbu. Toto sa deje preto, že všetky stránky sú len cesty pridané k hlavnému doménu (napríklad [vašdomena.com/subsite](http://vašdomena.com/subsite)). Ako dôsledok toho potrebujete **len jeden SSL certifikát** pre hlavné meno, a tento pooberie celú sieti.

V rovnaký čas, kvôli jeho URL štruktúre sa Google a väčšina iných vyhľadávačov považujú všetky podstránky v siete založenom na podkatalógovom menaní za jednu obrovskú stránku. Ako dôsledok toho môže obsah pridaný do podstrániek vašimi koncovými používateľmi ovplyvni SEO výkon vašej hlavnej landingovej stránky, napríklad. Úroveň vplyvu je debatedná a existuje argument, že takéto usporiadanie môže byť aj užitočné pre SEO výkon.

**Režim s poddoménovým menom (Subdomain Mode)** je trochu zložitejší na nastavenie, ale jeho URL štruktúra (napríklad [subsite.vašsie-siete.com](http://subsite.vašsie-siete.com)) sa všeobecne považuje za "profesionálnejšie".

Jedným z hlavným výzvou pri nastavení režimu poddomén (subdomain mode) je SSL pokrytie (HTTPS) pre celú sieti. Je to spôsobeno tým, že prehliadače považujú poddomény za izolované entity. Ako dôsledok sa budete musieť dùngovať iný SSL certifikát pre každú poddoménu v sieti, alebo špeciálny typ certifikátu zvania **Wildcard SSL certificate**. V posledných rokoch poskytovatelia hostingu a panely zvyšujú svoju ponuku SSL konfigurácie a niektoré ponúkajú wildcard certifikáty kliknutím na tlačidlo, čo zmenšuje rozdiel medzi týmito režimami v zložitełości nastavenia.

Na rozdiel od režimu podkatalógov (subdirectory mode) sú subportály v sieti založenom na poddoménach považované vyhľadávačmi za samostatné webové stránky, čo znamená, že obsah prítomný na jednej podstránke sa nekomolenie nepôsobia na SEO výkon iných podstránok vôbec.

## Super Admin {#the-super-admin}

Jednotkové instalácie WordPress umožňujú pridávať neobmedzený počet používateľov a dať týmto používateľom rôzne role s rôznymi prístupnosťami.

V WordPress Multisite sa rozjasní nový typ používateľa: **super admin** – a rozjasní sa nová panel administrácie: **network admin panel**.

Ako naznačuje názov, super admin má nad sieti supermoci, pretože je schopný spravovať všetky svoje podstránky, pluginy, témy, všetko!

Po konverzia vašej jednosítnej instalácie WordPress do multisite sa pôvodný admin jedného sítia automaticky zvysobuje na super admin.

Plugin a témy môžu byť nainštalované alebo odinstalované len z network admin panelu pomocou super adminov. Admini podstránok si potom môžu vybrať, či aktivujú alebo deaktivujú tieto pluginy alebo témy, ak to neuje vykonané super adminom siete, ktorý aktivuje plugin, čo ho zameria na aktívny stav pre všetky podstránky v každom čase.

_Poznámka: ako vidíte, invitovanie k vašej sieti a poskytnutie jej statusu superadmin dá používateľovi plnú kontrolu nad vašou sieťou. Napríklad iní superadmini môžu odstrániť váš status superadmina, čo efektívne blokuje váš prístup k admin panelu vašej vlastnej siete. Aby sme umožnili zákazníkom Ultimate Multisite mať špecifickú kontrolu nad tým, čo môžu robiť ďalší superadmini, máme doplnok nazvaný Support Agents. Tento doplnok vám umožňuje vytvoriť druh používateľa – agenta – s len tiemi právami, ktoré potrebuje na vykonávanie svojich úloh v sieti._

## Čo je zdieľané medzi subsitami a čo nie {#what-is-shared-among-subsites-and-what-is-not}

Ako sme už pominali, jednou z kľúčových výhod WordPress multisite je to, že všetky subsity majú prístup k rovnakým konfiguráciám, základným súborom, témam, pluginom, základným súborom WordPress atď.

Avšak existujú prvky, ktoré sú dobre obmedzené na základe jednotlivých subsít.

- Napríklad každá subita má vlastnú schránku pre načítanie súborov (uploads folder). V dôsledku toho súbory načítané používateľmi jednej konkrétnej subity sa nepočítajú na inej subite.
- Každá subita má vlastný príspevkový panel a môže aktivovať alebo deaktivovať pluginy alebo témy, ak ich superadmin nie aktivoval v sieti.
- Najväčšiu väčšinu tabuliek databázy je vytvorených pre každú subitu, čo znamená, že príspevky, komentáre, stránky, nastavenia a ďalšie sú obmedzené na každú subitu.

## Správa používateľov v WordPress Multisite {#user-management-on-wordpress-multisite}

Jednou citlivou témou v WordPress multisite je správa používateľov. Tabuľa používateľov WordPress je jedna z niečiatych tabuliek, ktoré sa zdieľajú medzi všetkými subsitami.

Táto štruktúra môže spôsobiť niektoré problémy v závislosti od toho, čo plánujete stavat s sietiou. Názór nižšie ilustruje najdôležitejší z nich.

Predstavte si nasledujúci scénár:

Vytvoríte si WordPress multisite sieť a začnete ponúkať podsítky za mesačnú poplatok ľuďom, ktorí chcú mať e-shop.

Získate svojho prvého platného zákazníka – Johna. Vytvoríte pre neho sitúáciu v vašej sieti, nainštalujete všetky potrebné pluginy a potom vytvoríte používateľa pre Johna, aby mohol spravovať svoj obchod.

Potom prichádza druhá zákazníčka – Alíša. Urobíte to rovnaké pre ňu a teraz má ona aj obchod v vašej sieti.

John a Alíša sú obojž vostri zákazníci, ale neznajú sa. Dôležitejšie je, ak navštívi jeden z nich webovôd Johna druhý obchod, nemôžete zistiť, že tento obchod je hostovaný na istej sieti sitiev.

Jedného dňa John chce kúpiť si novú pár obuvi a nájde si ju v obchode Alíše. Keď sa snaží dokončiť nákup, dostane chybu „e-mail už existuje“, čo je zvláštne, pretože John je 100 % istý, že to je prvýkrát navštívi web Alíše.

Čo tu nastalo, je to, že používateľ Johna je zdieľaný po celej sieti, takže keď sa pokúša vytvoriť účet na dokončenie nákupu na site Alíše, WordPress zistí, že používateľ s týmto adresou e-mailu už existuje a vygeneruje chybu.

_Poznámka: Rozumíme, ako to môže byť zlé v závislosti od vášho použitia, preto Ultimate Multisite má možnosť, ktorá obchádza bežné kontroly na existujúce používateľov a umožňuje vytvoriť viac účtov s tým istým adresou e-mailu. Každý účet je spojený s podsitkou, takže riziko kolízie je udržiavané na minimálnom. V príklade vyššie John neobdrží chybu a bude môcť si kúpiť tú obuv bez problémov. Táto možnosť sa nazýva Enable Multiple Accounts (Umožniť viac účtov) a môže byť aktivovaná v Ultimate Multisite → Settings → Login & Registration._

Hociak je tab s používateľmi zdieľaný, používateľov môžu admini podsitoviek alebo superadmin pridávať a odstraňovať z podsitoviek, a môžu mať na rôznych podsitoviek rôzne role používateľov.

## Predpoklady pre výkon {#performance-considerations}

WordPress multisite je skutočne silný, čo sa týka počtu sítí, ktoré môže podporovať. Toto sa dá overiť tým, že [WordPress.com](https://WordPress.com), Edublogs a Campuspress sú všetky služby založené na multisite a každý hostuje tisíce sítí.

Hoci v teorii neexistuje maximálna možná кількість sítí, ktoré môžete hostovať na jednej inštalácii WordPress multisite, v praxi môže zoznam sítí, ktoré môžete spravovať s úspešnou efektívnosťou, veľmi odlišovať závisiac od niekoľkých rôznych faktorov: aké sú dynamické súvety sítí, ktoré sú prístupné podsitoviek atď.

Ako pravidlo, čím jednoduchšia je vaša sieť, tým lepšie. Preferujte siete s sítiami, kde sa obsah nepremenne mení (čo ich robí skvelými kandidátmi pre agresívne strategie cache), a udržiavať stack pluginov čo najľahšou možnou (čím nižší počet aktívnych pluginov je, tým lepšie) môže drasticky zvýšiť počet podsitoviek, ktoré môžete hostovať.

Najlepšie je, že keďže všetko je WordPress, rovnaké nástroje, ktoré už poznáte a milujete na zlepšenie výkonu, budú fungovať aj pre multisite sieť.

Hlavným problémom pri multisite je databáza, ale ak je všetko inak nastavené, môže to trvať niekoľko tisíc sítí, než sa o ňom začnete obávať. Aj vtedy sú existujú riešenia, ktoré sa môžu postupne pridávať (ako sú riešenia shardovania databázy, napríklad).
