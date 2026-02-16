---
title: Upgradování tarifu
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Přechod na vyšší tarif (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Vaši zákazníci mohou kdykoli přejít na vyšší tarif. Mohou buď upgradovat na jiný tarif, nebo si zakoupit jakékoli doplňkové služby či balíčky, které na své síti nabízíte.

V tomto návodu si ukážeme, jak mohou zákazníci přejít na vyšší tarif a co se stane po dokončení upgradu.

Pro přechod na vyšší tarif by měli zákazníci vstoupit do svého dashboardu a přejít na stránku **Účet**.

![Dashboard zákazníka s odkazem na stránku Účet](/img/admin/memberships-list.png)

Na stránce Účet uvidí své aktuální členství a tarif, který k němu patří. Pro přechod na jiný tarif musí kliknout na **Změnit** v pravém horním rohu sekce **Vaše členství**.

![Sekce Vaše členství s tlačítkem Změnit](/img/admin/memberships-list.png)

Budou přesměrováni na pokladní formulář, kde se zobrazí všechny dostupné tarify.

Uvidí také **služby a balíčky dostupné pro jejich aktuální tarif**, pokud by chtěli zakoupit pouze konkrétní službu nebo balíček (například neomezené návštěvy nebo diskový prostor v našem příkladu), a ne upgradovat celý tarif.

![Pokladní formulář zobrazující dostupné tarify a balíčky](/img/admin/memberships-list.png)

Po výběru produktu, který chtějí zakoupit, uvidí, kolik zaplatí nyní – bez započtení existujícího kreditu – a kolik jim bude účtováno k dalšímu fakturačnímu datu.

Obvykle platí, že pokud je produktem jiný tarif a platba probíhá mezi účtovacími obdobími členství, zákazník obdrží kredit za částku zaplacenou za první tarif.

![Shrnutí platby za upgrade s kreditem a částkou k dalšímu účtování](/img/admin/memberships-list.png)

Pokud zákazník vybere tarif nebo balíček, který nic nezmění na aktuálním předplatném, zobrazí se mu zpráva, která to vysvětluje.

![Zpráva, když vybraný tarif nemění předplatné](/img/admin/memberships-list.png)

Po dokončení objednávky budou nové produkty přidány na účet zákazníka a všechny limity nebo funkce nových produktů se okamžitě aktivují: návštěvy, diskový prostor, příspěvky atd.

## 

## 

## Cesty pro upgrade a downgrade

U každého produktu najdete záložku **Upgrady a downgrady**. První možností na této záložce je pole nazvané **Skupina tarifů**.

**Skupiny tarifů** jsou to, co umožňuje Ultimate Multisite rozpoznat, že určité tarify patří do stejné „rodiny", a proto by měly být použity pro sestavení možností upgradu a downgradu.

![Záložka Upgrady a downgrady s polem Skupina tarifů](/img/config/product-upgrades.png)

Například máte k dispozici **Tarif zdarma**, **Základní tarif** a **Premium tarif**. Chcete, aby uživatelé s **Tarifem zdarma** mohli upgradovat pouze na **Premium tarif** a neviděli „Základní tarif" jako možnost upgradu. Stačí přiřadit stejný název skupiny tarifů pro Tarif zdarma i Premium tarif, jak je vidět na snímcích obrazovky níže.

![Tarif zdarma s přiřazenou skupinou High End](/img/config/product-upgrades.png)

![Premium tarif s přiřazenou skupinou High End](/img/config/product-upgrades.png)

Tím říkáte Ultimate Multisite, že v síti existuje „rodina" tarifů nazvaná **High End**. Při nabízení upgradů nebo downgradů se uživateli zobrazí pouze tarify ze stejné rodiny.
