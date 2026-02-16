---
title: Co je WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Co je WordPress Multisite?

WordPress přímo ve svém jádru nabízí funkci zvanou „Multisite", která má své kořeny v roce 2010, kdy byl uveden WordPress 3.0. Od té doby prošla řadou úprav zaměřených na přidávání nových funkcí a posilování bezpečnosti.

WordPress multisite si lze v podstatě představit takto: Univerzita provozuje jednu instalaci WordPressu, ale každá fakulta spravuje svůj vlastní web.

## 

## Co přesně je WordPress Multisite?

Multisite je funkce WordPressu, která umožňuje provozovat více webů na jedné instalaci WordPressu. Při aktivaci multisite se původní WordPress web přemění na tzv. **síť webů**.

Tato síť sdílí souborový systém (což znamená, že **pluginy a šablony jsou také sdílené**), databázi, základní soubory WordPressu, wp-config.php atd.

To znamená, že aktualizace WordPressu, šablon a pluginů stačí provést pouze jednou pro všechny weby ve vaší síti, protože sdílejí stejné soubory na disku.

Právě tato vlastnost je jednou z hlavních výhod multisite – umožňuje vám rozšiřovat počet spravovaných webů, aniž by se zvyšoval objem úkolů potřebných k údržbě webů vašich zákazníků.

## 

## Subdoména nebo podadresář?

WordPress multisite lze provozovat ve dvou režimech – a jeden z nich musíte zvolit při převodu běžné WordPress instalace na multisite:

**Subdoména:** např.: [site.domain.com](http://site.domain.com)

…nebo

**Podadresář:** např.: [yourdomain.com/site](http://yourdomain.com/site)

Každý režim má své výhody i nevýhody, které je třeba při rozhodování zvážit.

Je důležité zmínit jedno: jakmile se rozhodnete, změna sítě z podadresářového režimu na subdoménový nebo naopak je opravdu náročná – zejména pokud už máte vytvořených několik webů.

Před tím, než se rozhodnete, mějte na paměti následující:

**Režim podadresářů** je nejsnazší z hlediska nastavení i údržby. Je to proto, že všechny weby jsou pouze cestami připojenými k hlavní doméně (např. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Díky tomu potřebujete **pouze jeden SSL certifikát** pro hlavní doménu, který pokryje celou síť.

Zároveň kvůli této struktuře URL budou Google a většina ostatních vyhledávačů považovat všechny podweby ve vaší podadresářové síti za jeden velký web. V důsledku toho může obsah přidaný na podweby vašimi koncovými zákazníky ovlivnit SEO výkon vašeho hlavního webu. Míra tohoto vlivu je diskutabilní a existují argumenty, že takové uspořádání může být pro SEO výkon dokonce přínosné.

**Režim subdomén** je o něco složitější na nastavení, ale jeho struktura URL (např. [subsite.yournetwork.com](http://subsite.yournetwork.com)) je obecně vnímána jako „profesionálnější".

Jednou z hlavních výzev při nastavení subdoménového režimu je zajištění SSL (HTTPS) pro celou síť. Jde o to, že prohlížeče považují subdomény za samostatné entity. Proto budete potřebovat jiný SSL certifikát pro každou subdoménu ve vaší síti, nebo speciální typ certifikátu zvaný **Wildcard SSL certifikát**. V posledních letech poskytovatelé hostingu a hostingové panely výrazně zlepšují své možnosti vydávání SSL certifikátů a někteří nabízejí wildcard certifikáty na jedno kliknutí, čímž se rozdíl mezi oběma režimy z hlediska složitosti nastavení zmenšuje.

Na rozdíl od režimu podadresářů jsou podweby v subdoménové síti vyhledávači považovány za samostatné weby, což znamená, že obsah na jednom podwebu vůbec neovlivňuje SEO výkon ostatních podwebů.

## Super admin

Jednoduchá WordPress instalace umožňuje přidávat neomezený počet uživatelů a přidělovat jim různé uživatelské role s různými oprávněními.

V WordPress Multisite se odemkne nový typ uživatele: **super admin** – a také nový administrační panel: **síťový administrační panel**.

Jak název napovídá, super admin má nad sítí nadstandardní pravomoci a může spravovat všechny její podweby, pluginy, šablony, prostě všechno!

Jakmile převedete svou jednoduchou WordPress instalaci na multisite, původní administrátor webu bude automaticky povýšen na super admina.

Pluginy a šablony může instalovat nebo odinstalovat pouze super admin ze síťového administračního panelu. Administrátoři podwebů si pak mohou vybrat, zda tyto pluginy nebo šablony aktivují či deaktivují – pokud ovšem super admin neaktivuje plugin síťově, což vynutí jeho aktivaci na všech podwebech trvale.

_Poznámka: Jak vidíte, pozvání někoho do vaší sítě a udělení statusu super admina dává tomuto uživateli úplnou kontrolu nad vaší sítí. Jiní super admini vám mohou dokonce odebrat status super admina a účinně vás tak uzamknout z vašeho vlastního síťového administračního panelu. Abychom zákazníkům Ultimate Multisite umožnili detailní kontrolu nad tím, co mohou další super admini dělat, nabízíme doplněk nazvaný Support Agents. Tento doplněk vám umožní vytvořit další typ uživatele – agenta – pouze s oprávněními, která potřebuje k plnění svých úkolů v síti._

## Co je mezi podweby sdílené a co ne

Jak jsme již zmínili, jednou z klíčových výhod WordPress multisite je, že všechny podweby sdílejí stejné konfigurace, základní soubory, šablony, pluginy, soubory jádra WordPressu atd.

Existují však prvky, které jsou pěkně oddělené pro každý podweb.

\- Například každý podweb má vlastní složku pro nahrané soubory. Díky tomu nejsou soubory nahrané uživateli jednoho podwebu přístupné na jiném podwebu.

\- Každý podweb má vlastní administrační panel a může aktivovat či deaktivovat pluginy nebo šablony, pokud nebyly síťově aktivovány super adminem.

\- Většina databázových tabulek je vytvořena pro každý podweb zvlášť, což znamená, že příspěvky, komentáře, stránky, nastavení a další jsou odděleny pro každý podweb.

## Správa uživatelů v WordPress Multisite

Správa uživatelů je v WordPress multisite citlivé téma. Tabulka uživatelů WordPressu patří mezi několik málo tabulek, které jsou sdílené mezi všemi podweby.

Toto uspořádání může způsobovat problémy v závislosti na tom, co se svou sítí plánujete. Následující příklad ilustruje ten nejpalčivější.

Představte si následující scénář:

Vytvoříte WordPress multisite síť a začnete nabízet podweby za měsíční poplatek lidem, kteří chtějí mít e-shop.

Získáte prvního platícího zákazníka – Jana. Vytvoříte pro Jana web ve vaší síti, nainstalujete všechny potřebné pluginy a pak vytvoříte uživatelský účet pro Jana, aby mohl spravovat svůj obchod.

Pak přijde druhá zákaznice – Alice. Uděláte pro ni totéž a ona má nyní také obchod ve vaší síti.

Jan a Alice jsou oba vašimi zákazníky, ale navzájem se neznají. A co je důležitější, pokud jeden z nich navštíví web obchodu toho druhého, nemá jak zjistit, že je tento obchod hostován ve stejné síti webů.

Jednoho dne Jan potřebuje koupit nové boty a najde ty dokonalé v obchodě Alice. Když se pokusí dokončit nákup, dostane chybovou hlášku „e-mail je již používán", což je zvláštní, protože Jan si je stoprocentně jistý, že web Alice navštívil poprvé.

Stalo se to proto, že Janův uživatelský účet je sdílen v celé síti, takže když se pokusí vytvořit účet pro dokončení objednávky na webu Alice, WordPress zjistí, že uživatel se stejnou e-mailovou adresou již existuje, a vyhodí chybu.

_Poznámka: Uvědomujeme si, jak špatné to může být v závislosti na vašem případu použití, proto Ultimate Multisite nabízí možnost, která obchází běžné kontroly existujícího uživatele a umožňuje vytvořit více účtů se stejnou e-mailovou adresou. Každý účet je vázán na konkrétní podweb, takže riziko kolize je minimální. Ve výše uvedeném příkladu by Jan nedostal chybovou hlášku a mohl by si koupit boty bez problémů. Tato možnost se nazývá Enable Multiple Accounts a lze ji aktivovat v Ultimate Multisite → Settings → Login & Registration._

I když je tabulka uživatelů sdílená, uživatele mohou přidávat a odebírat z podwebů administrátoři podwebů nebo super admin, a mohou mít dokonce různé uživatelské role na různých podwebech.

## Úvahy o výkonu

WordPress multisite je opravdu silný v počtu webů, které dokáže podporovat. To dokazuje fakt, že [WordPress.com](https://WordPress.com), Edublogs a Campuspress jsou všechny služby založené na multisite a každá hostuje tisíce webů.

Zatímco teoreticky neexistuje maximální počet webů, které můžete hostovat na jedné WordPress multisite instalaci, v praxi se počet webů, které dokážete uspokojivě provozovat, může výrazně lišit v závislosti na různých faktorech: jak dynamické weby jsou, jaké pluginy jsou dostupné pro podweby atd.

Obecně platí, že čím jednodušší je vaše síť, tím lépe. Upřednostňování webů, kde obsah není příliš dynamický (což z nich dělá skvělé kandidáty pro agresivní strategie cachování) a udržování co nejlehčí sady pluginů (čím méně aktivních pluginů, tím lépe) může dramaticky zvýšit počet podwebů, které můžete hostovat.

Nejlepší je, že jelikož je to stále WordPress, stejné nástroje, které již znáte a máte rádi pro zlepšení výkonu, budou fungovat i pro multisite síť.

Hlavním úzkým hrdlem pro multisite je databáze, ale pokud je vše ostatní správně nastaveno, může to vydržet několik tisíc webů, než se o ni budete muset začít starat. I poté existují řešení, která lze postupně přidávat (například řešení pro sharding databáze).
