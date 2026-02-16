---
title: Alapfogalmak
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Alapfogalmak

Ha most kezded használni a WordPress Multisite-ot és az Ultimate Multisite-ot, sok új szóval és kifejezéssel találkozhatsz az elején. Fontos megismerni ezeket, mert csak így értheted meg igazán a platformot és annak működését.

Ebben a cikkben a WordPress legfontosabb fogalmait mutatjuk be és magyarázzuk el. Ezek közül néhány inkább a felhasználóknak szól, mások a fejlesztőknek, de vannak olyanok is, amelyek mindkét csoport számára hasznosak.

## WordPress Multisite

A WordPress **Multisite** a WordPress egy speciális telepítési módja, amellyel több webhelyet hozhatsz létre és kezelhetsz egyetlen WordPress vezérlőpultról. Mindent egy helyről irányíthatsz: a webhelyek számát, a funkciókat, a sablonokat és a felhasználói szerepköröket. Akár több száz vagy több ezer webhely kezelésére is alkalmas.

## Hálózat

A WordPress terminológiájában a multisite hálózat több **alwebhely** összessége, amelyeket egyetlen vezérlőpultról kezelhetsz. Bár a multisite hálózat létrehozása szolgáltatónként eltérő lehet, a végeredmény általában néhány extra beállítás a **wp-config.php** fájlban, amelyek jelzik a WordPress számára, hogy ebben a speciális üzemmódban működik.

A multisite hálózat és az önálló WordPress telepítés között számos fontos különbség van, amelyeket röviden áttekintünk.

## Adatbázis

Az adatbázis strukturált, rendszerezett adatok gyűjteménye. A számítástechnikában az adatbázis egy olyan szoftver, amely adatok tárolására és rendszerezésére szolgál. Képzeld el úgy, mint egy iratszekrényt, ahol az adatokat különböző részekben – úgynevezett táblákban – tárolod.

A WordPress Multisite egyetlen adatbázist használ, és minden alwebhely saját táblákat kap, amelyek előtagjában szerepel a blog azonosítója. Tehát miután telepíted a hálózatot és létrehozol egy alwebhelyet, a következő táblák jelennek meg:

_wp_1_options_ \- az első alwebhely beállításainak táblája

_wp_2_options_ \- a második alwebhely beállításainak táblája

## Tárhelyszolgáltató

A tárhelyszolgáltató olyan cég, amely lehetővé teszi vállalkozások és magánszemélyek számára, hogy webhelyeiket elérhetővé tegyék a világhálón. A szolgáltatók által kínált lehetőségek változóak, de általában tartalmazzák a weboldal-tervezést, a tárhely biztosítását és az internetkapcsolatot.

## Domain

A domain név az a cím, amelyet az emberek használnak a weboldalad meglátogatásához. Megmondja a böngészőnek, hogy hol keresse a webhelyedet. Ahogy egy utcanév segít megtalálni egy helyet, úgy a domain az az útvonal, amelyen keresztül az emberek eljutnak a weboldaladhoz. Olyan ez, mint egy cégtábla az üzleted előtt. Ha meg szeretnéd látogatni a weboldalunkat, be kell írnod a böngésződbe a webcímünket: [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ ahol az [**ultimatemultisite.com**](http://ultimatemultisite.com) a domain név.

## Aldomain

Az aldomain a fő domain alá tartozó webhely-hierarchia egyik típusa, de a mappák helyett önálló webhelyként működik a tartalom szervezésére. Formátuma: [**https://site1.domain.com/**](https://site1.domain.com/) ahol a _site1_ az aldomain neve, a [_domain.com_](http://domain.com) pedig a fő domain.

## Alkönyvtár

Az alkönyvtár a fő domain alá tartozó webhely-hierarchia egyik típusa, amely mappákat használ a tartalom szervezésére. Az alkönyvtár és az almappa ugyanazt jelenti, a két kifejezés szabadon felcserélhető. Formátuma: [**https://domain.com/site1**](https://domain.com/site1) ahol a _site1_ az alkönyvtár neve, a [_domain.com_](http://domain.com) pedig a fő domain.

## Alwebhely

Az alwebhely egy gyermekwebhely, amelyet a Multisite hálózaton belül hozol létre. Lehet **aldomain** vagy **alkönyvtár** is, attól függően, hogyan van konfigurálva a WordPress Multisite telepítésed.

## Szuperadmin

A WordPress Szuperadmin olyan felhasználói szerepkör, amely teljes jogosultsággal rendelkezik a Multisite hálózat összes alwebhelyének kezeléséhez. Multisite felhasználók számára ez a **legmagasabb szintű hozzáférés**, amelyet a WordPress telepítésedben biztosíthatsz.

## Plugin

Általánosságban a plugin olyan kódrészlet, amely extra funkciókat ad a WordPress webhelyedhez. Ez lehet olyan egyszerű, mint a bejelentkezési logó megváltoztatása, vagy olyan összetett, mint egy webáruház funkció hozzáadása. A _Woocommerce és a Contact Form_ például pluginek.

WordPress Multisite-ban a plugineket csak a hálózati adminisztrációs vezérlőpultról telepítheti a Szuperadmin. Az alwebhelyek adminisztrátorai csak aktiválhatják és deaktiválhatják a plugineket a saját alwebhelyükön.

## Sablonok

A WordPress sablon olyan fájlok gyűjteménye (_grafikák, stíluslapok és kód_), amelyek meghatározzák a webhely általános megjelenését. A sablon biztosítja a felület összes stíluselemét, például a betűtípusokat, az oldalelrendezést, a színeket stb.

A pluginekhez hasonlóan a sablonokat is csak a Szuperadmin telepítheti a WordPress Multisite-ban, de az alwebhelyek adminisztrátorai aktiválhatják őket a saját webhelyükön.

## Webhelysablon

A **Webhelysablon** egy előre elkészített alap-webhely, amelyet új webhelyek létrehozásához használhatsz a hálózatodban.

Ez azt jelenti, hogy készíthetsz egy alapwebhelyet, aktiválhatsz rajta különböző plugineket, beállíthatsz egy aktív sablont, és tetszés szerint testreszabhatod. Ezután, amikor egy ügyfeled új fiókot hoz létre, az alapértelmezett üres WordPress webhely helyett a te alapwebhelyed másolatát kapja meg, minden testreszabással és tartalommal együtt.

## Domain mapping

A WordPress **domain mapping** egy módszer a felhasználók megfelelő tárhelyhez irányítására a webhely címén keresztül. A WordPress Multisite-ban az alwebhelyek alkönyvtárral vagy aldomainnel jönnek létre. A domain mapping lehetővé teszi az alwebhely felhasználóinak, hogy elsődleges domaint használjanak, például a [**joesbikeshop.com**](http://joesbikeshop.com) címet, így a webhelyük címe professzionálisabbnak tűnik.

## SSL

Az SSL a **Secure Sockets Layer** rövidítése. Ez egy digitális tanúsítvány, amely hitelesíti egy webhely személyazonosságát és titkosított kapcsolatot tesz lehetővé. Napjainkban ez a szabványos technológia az internetkapcsolat biztonságának megőrzésére és a két rendszer között küldött érzékeny adatok védelmére, megakadályozva, hogy bűnözők elolvashassák vagy módosíthassák az átvitt információkat, beleértve a személyes adatokat is. A modern böngészők megkövetelik az SSL-t, ami elengedhetetlenné teszi weboldalak létrehozásánál és üzemeltetésénél.

## Média

A média a webhelyet alkotó képek, hangfájlok, videók és egyéb fájlok összessége.

A WordPress Multisite-ban a hálózati webhelyek egyetlen adatbázison osztoznak, de a médiafájlok külön mappákban tárolódnak.

A WordPress standard helye (wp-content/uploads) megmarad, de az elérési útja módosul, hogy tükrözze a hálózati webhely egyedi azonosítóját. Ennek megfelelően a hálózati webhely médiafájljai a wp-contents/uploads/site/[id] mappában jelennek meg.

## Permalinkek

A permalinkek a blogbejegyzéseid vagy oldalaid állandó URL-címei a webhelyeden belül. A permalinkeket **szép linkeknek** is nevezik. Alapértelmezés szerint a WordPress URL-ek lekérdezési karakterlánc formátumot használnak, ami valahogy így néz ki:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Az Ultimate Multisite egy WordPress plugin, amelyet kifejezetten WordPress Multisite telepítésekhez fejlesztettek. Átalakítja a WordPress telepítésedet prémium webhelyhálózattá – hasonlóan a [WordPress.com](https://WordPress.com)-hoz – ahol az ügyfelek havi, negyedéves vagy éves díj ellenében hozhatnak létre webhelyeket (ingyenes csomagokat is létrehozhatsz).

## Fizetési űrlap

A Fizetési űrlap egy egy- vagy többlépéses megrendelőlap, amely az alwebhely, a tagság és a felhasználói fiókok létrehozását tartalmazza az Ultimate Multisite regisztráción keresztül. Különböző mezőkből és fizetési űrlapokból áll, amelyeket a felhasználónak ki kell töltenie a regisztrációs folyamat során.

## Webhook

A webhook (más néven web callback vagy HTTP push API) egy módszer, amellyel egy alkalmazás valós idejű információkat küldhet más alkalmazásoknak. A webhook azonnal továbbítja az adatokat, amint azok keletkeznek, így az adatokat azonnal megkapod.

Az **Ultimate Multisite webhookok** végtelen lehetőségeket nyitnak meg, lehetővé téve a hálózati adminisztrátoroknak mindenféle kreatív és hasznos integráció létrehozását, különösen, ha olyan szolgáltatásokkal kombinálják, mint a _Zapier és az IFTTT_.

## Események

Az Esemény egy olyan művelet, amely felhasználói vagy más forrásból származó akció eredményeként történik, például egy egérkattintás. Az Ultimate Multisite nyilvántartja az összes eseményt és naplót, amelyek a hálózatodban történnek. Nyomon követi a multisite-odban zajló különböző tevékenységeket, például a csomagváltásokat.
