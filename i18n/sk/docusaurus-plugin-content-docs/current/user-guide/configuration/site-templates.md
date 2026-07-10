---
title: Šablóny stránok
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Šablóny sítí (v2) {#site-templates-v2}

_**POZNÁMKA: Tento článok sa týka verzie 2.x Ultimate Multisite. Ak používate verziu 1.x,**_ **prejdite na tento článok.**_

Naším cieľom pri vytváraní premium siete s Ultimate Multisite je automatizovať čo najviac procesov, pričom poskytujeme našim klientom flexibilitu a rôzne možnosti voči ktorým si môžu rozhodnúť pri vytváraní svojich webových stránok. Jednoduchý spôsob, ako dosiahnuť tento rovnováhu, je využitie funkcie Šablóny sítí Ultimate Multisite.

## Čo je Šablóna sítí? {#what-is-a-site-template}

Ako naznačuje názov, Šablóna sítí je základná webová stránka (boilerplate site), ktorú môžete použiť ako základ pri vytváraní nových sítí v vašej sieti.

To znamená, že môžete vytvoriť základnú stránku, aktivovať rôzne pluginy, nastaviť aktívny tému a prispôsobiť ju akýmkoľvek spôsobom. Potom, keď váš klient vytvorí nový účet, namiesto toho, aby dostal štandardnú WordPress stránku bez zmyselného obsahu, dostane kópiu vašej základnej stránky s všetkými prispôsobeniami a obsahom už vložene.

Znie to skvelý nápad, ale ako vytvoriť novú šablónu sítí? Je to jednoduchšie, ako by mohlo byť možné.

## Vytváranie a upravovanie novej Šablóny sítí {#creating-and-editing-a-new-site-template}

Šablóny sítí sú len bežné stránky v vašej sieti. Novú šablónu môžete vytvoriť jednoducho cez **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Pridaj stránku tlačidlo na stránke zoznamu sítí](/img/config/site-templates-list.png)**

Toto otvorí modálne okno, kde sa požiada o **Názov stránky, Domén/cesta stránky** a **Typ stránky**. Pod rozbaľovacím menu **Typ stránky** si uistite, že ste vybrali **Site Template** (Šablóna sítí).

_![Modálne okno pridania šablóny sítí s rozbaľovacím menu typu stránky](/img/config/site-templates-list.png)_

Môžete tiež pridať popis pre klienta, ktorý vysvetlí, čo šablóna obsahuje:

![Popis polia popisu šablona webové stránky na obrazovanki úpravy šablóny webovej stránky](/img/config/site-template-edit-description.png)

Na spodnej časti formulára uvidíte vypínač **Copy Site** (Kopírovať stránku). Umožní vám to vytvoriť nový šablon webovej stránky na základe existujúceho šablónu ako bod, z ktorého sa môžete použiť, aby ste si ušetril čas namiesto vytvárania šablóny úplne od začiatku.

![Modálka pridania šablóny webovej stránky s vypínačom kopírovania stránky](/img/config/site-templates-list.png)

### Prispôsobenie obsahu šablóny webovej stránky {#customizing-the-contents-of-a-site-template}

Aby ste si mohli prispôsobiť svoj šablon webovej stránky, stačuje navigať do jeho dashboardu a urobiť zmeny, ktoré potrebujete. Môžete vytvárať nové príspevky, stránky, aktivovať pluginy a zmeniť aktívny tému. Môžete sa dokonca presunúť do Customizera a zmeniť všetky druhy možností prispôsobenia.

![Rozhranie úpravy šablóny webovej stránky](/img/config/site-template-edit.png)

Všetokáto tieto údaje budú skopírované, keď zákazník vytvorí novú stránku na základe tejto Šablóny webovej stránky.

### Pokročilé možnosti {#advanced-options}

Ak máte zručnosti v niektorom prispôsobenom kódovaní, môžete využiť našu API Search and Replace (Hľadať a nahradiť) na automatické nahradenie informácií na novej stránke po jej vytvorení. Toto je užito pre veci ako nahradenie názvov firmien na stránke "O nás", nahradenie e-mailovej adresy kontaktného formulára atď.

### Používanie šablon webových stránok {#using-site-templates}

Dobre, vytvorili ste si množstvo rôznych Šablon webových stránok s rôznymi dizajnovmi, témami a nastaveniami. Ako ich teraz urobiť užito na vašej sieti?

V podstate máte teraz dve možnosti (nie súčasne):

  * Pridanie jednej Šablóny webovej stránky k každej z vašich Plánov

**ALEBO**

  * Umožnenie svojim klientom, aby sami si volili šablóny webových stránok počas registráции.

#### Režim 1: Pridanie šablóny webovej stránky {#mode-1-assign-site-template}

V tomto režime si vaši zákazníci nemôžu vybrať šablon, keď sa registrujú, ale naopak vy budete definovať, ktorý šablon bude použitý pre každý z vašich Plánov.

Na to budete musieť pohnáť do **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Toto vás presmeruje na stránku **Edit Product**. V sekcii **Product Options** nájdite záložku **Site template** a z rozbaľovacieho menu vyberte možnosť **Assign Site Template**. Otáča sa vám zobrazenie dostupných šablon a umožní vám vybrať len jednu šablonu pre daný produkt.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Režim 2: Vyberte dostupnú šablonu {#mode-2-choose-available-site-template}
V tomto režime ponúknete vašim zákazníkom voči výber počas procesu registráции. Môžu si vybrať z rôznych šablon, ktoré definujete v nastaveniach produktu. Máte možnosť obmedziť šablóny, z ktorých môžu vybrať, pod vybraným produktom. To vám umožní mať rôzne množiny šablon pre každý produkt, čo je ideálne na zvýraznenie rôznych funkcií a vlastností pre produkty s vyššou cenou.

Na stránke **Upraviť produkt**. V sekcii **Product Options** nájdite záložku **Site template** a z rozbaľovacieho menu vyberte možnosť **Choose Available Site Template**. Toto otvorí zoznam dostupných šablon sitovky a umožní vám vybrať, ktorú si chcete urobiť dostupnou. Môžete to urobiť pomocou jej správania: **Available** (Dostupné), ak chcete, aby sa šablona sitovky zobrazila v zozname. **Not Available** (Nezobrazená), ak nechcete, aby sa šablona sitovky zobrazovala ako možnosť. A **Pre-selected** (Predvolene vybraná), ak chcete, aby jedna z uvedených šablon sitovky bola predvolene zvolená.

![Vyberanie dostupných šablon sitovky s optionami správania](/img/config/product-site-templates.png)

### Predvolený režim: Výber šablóny sitovky na formulári pokladne (Checkout form) {#default-mode-site-template-selection-on-the-checkout-form}

Ak chcete, aby boli všetky vaše šablóny sitovky dostupné počas registráции, alebo nechcete robiť extra prác s prispôsobením alebo určením šablon sitovky pod každým produktom, ktorý vytvoríte. Môžete to jednoducho nastaviť výber šablóny sitovky pod vašim **Checkout Form**. Na to sa naviažte na **Ultimate Multisite > Checkout Forms** a kliknite na **Edit** pod formulárom, ktorý chcete skonfigurovať.

Toto otvorí stránku **Edit Checkout Form**. Nájdite pole **Template Selection** a kliknite na **Edit** pod ním.

Objaví sa modálne okno. Pod polom **Template Sites** môžete vybrať a uviesť všetky šablóny sitovky, ktoré chcete mať dostupné počas registráции. Šablóny sitovky, ktoré tu určíte, budú dostupné bez ohľadu na to, aký produkt si používateľ vybral.

![Pole výberu šablón v reditore formulára pokladne](/img/config/checkout-form-template-step.png)

Na prednej časti (frontend) vidia zákazníci voči šablonám sitovky počas pokladne a môžu si vybrať štartný dizajn pre svoju novú sitovku.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Možnosti šablón pre webové stránky {#site-template-options}

Existujú iné funkcie šablón pre webové stránky, ktoré môžete zapnúť alebo vypnúť v nastaveniach Ultimate Multisite.

![Možnosti šablón pre webové stránky v nastaveniach Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Povolenie prepínania šablón {#allow-template-switching}

Zapnutím tejto možnosti umožní vašim klientom, aby si mohli voči šablónu, ktorý vyberú počas procesu registráции, prepojiť iný šablón po vytvorení účtu a webovej stránky. Toto je užitočné z pohľadu klienta, pretože mu umožňuje znovu vybrať šablón, ak sa neskôr ujasní, že jeho pôvodný výber nie bol najlepším pre jeho konkrétne potreby.

#### Povolenie používateľom používať ich webovú stránku ako šablóny {#allow-users-to-use-their-site-as-templates}

Keďže používatelia subsite si strávili čas stavaniu a navrhovaním vlastnej webovej stránky, môžu chcieť ju klónovať a použiť ako jeden z dostupných šablón pri vytvorení iného subsite v vašej sieti. Táto možnosť im to umožní dosiahnuť.

#### Kopírovanie médií pri duplikácii šablóny {#copy-media-on-template-duplication}

Zapnutím tejto možnosti sa kopíruje media načítané na šablóne webovej stránky do nov vzdelanej webovej stránky. Toto môže byť prekonané v každom pláne.

#### **Zabrišcie indexovanie šablón pre webové stránky vyhľadávacími systémami** {#prevent-search-engines-from-indexing-site-templates}

Šablóny pre webové stránky, ako sa v tomto článku diskutovalo, sú štandardné vzory (boilerplate), ale stále sú súčasťou vašej siete, čo znamená, že ich môžu vyhľadať vyhľadávacie systémy. Táto možnosť vám umožní šablóny skryť tak, aby mohol vyhľadávač indexovať iné stránky.

## Predpripravovanie šablón pre webové stránky s automatickým vyhľadávaním a nahradením {#pre-populating-site-templates-with-auto-search-and-replace}

Jednou z najsilnejších vlastností Ultimate Multisite je schopnosť pridať do formulára registráции akvirituj text, farby a výberové pole. Keď tieto údaje zachytáme, môžeme ich použiť na predpripravovanie obsahu v určitých častiach vybraného šablónu stránky. Potom, keď sa nová stránka uverejní, Ultimate Multisite nahradí zástupné miesta (placeholders) reálnymi informáciami zadanými počas registráции.

Napriek tomu, ak chcete získať názov firmy vášho koncového používateľa počas registráции a automaticky pridať názov firmy na domovú stránku, musíte do šablóny domovnej stránky svojho šablónového webu pridať zástupné miesta. Musia byť zástupné miesta obklopené dvojitými zbr큘i – {{placeholder_name}}.

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Potom si môžete jednoducho pridať odpovedajúce pole registráции na svojý formulár objednávky, aby ste zachytili tieto údaje. Ten istý editor formulára objednávky, ktorý používate na výber šablóny, vám umožňuje umiestniť prispôsobené pole vedľa vybera šablón:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Váš zákazník potom bude môcť toto pole vyplniť počas registráции.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite potom automaticky nahradí zástupné miesta údajmi poskytnutými zákazníkom.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Riešenie problému „šablóna plná zástupných miest“ {#solving-the-template-full-of-placeholders-problem}

Všetko to je skvelé, ale gặpáme sa s neviditeľným problémom: teraz naše šablóny stránky – ktoré môžu zákazníci navštíviť – sú plné neviditeľných zástupných miest, ktoré nestretia veľa informácií.

Aby ste to vyriešili, ponúkame možnosť nastaviť sa prázdne hodnoty pre zástupné miesta (placeholders), a tieto hodnoty použijeme na vyhľadávanie a nahradenie ich obsahu v šablónách stránok, kým sú na neich zákazníci.

Môžete sa dostat do redaktóra zástupných miest šablónom pomocou navigácie na **Ultimate Multisite > Settings > Sites**, a potom v laternej lište kliknutím na odkaz **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Toto vás presmeruje do redaktóra obsahu zástupných miest, kde môžete pridať zástupné miesta a ich príslušný obsah.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
