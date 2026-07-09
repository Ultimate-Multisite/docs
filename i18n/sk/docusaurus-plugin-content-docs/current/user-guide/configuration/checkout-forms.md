---
title: Formuláre na pokladni
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulá na pokladni (Checkout Forms) {#checkout-forms}

Formulá na pokladni sú jednoduchý a flexibilný spôsob, ako experimentovať s rôznymi prístupmi pri konverzi nových zákazníkov.

Ultimate Multisite 2.0 ponúka editor formulára na pokladni, ktorý vám umožňuje vytvárať quantoskoľvek formulá s rôznymi polmi, ponovenými produktmi atď.

Aby ste sa dostali k tejto funkcii, prejdite do menu Checkout Forms v ľavej lište.

![Zoznam formulárov na pokladni](/img/config/checkout-forms-list.png)

Na tejto stránke vidíte všetky vaše formulá na pokladni.

Tabu sťahujúca zoznam obsahuje stlúžku **Status**, aby ste mohli potvrdiť, či je každý formulár v súčasnosti dostupný pre zákazníkov:

| Status | Značka |
|---|---|
| **Active** (Aktívny) | Formulár sa môže použiť akkoľvek mieste, kde je publikovaný jeho shortcode alebo stránka registráции. |
| **Inactive** (Nezaktívnený) | Formulár je uložený, ale vypnutý. Zákazníci nemôžu dokončiť pokladňovanie s ním, kým ho znova neaktivujete. |

Použite stlúžku status pre predpätné správanie publikovania registračného toku, najmä ak si udržíte návrhy alebo sezónne formuláre na pokladni vedľa vašich živých formulárov.

Ak chcete vytvoriť nový, kliknite просто Add Checkout Form v hornej časti stránky.

Môžete si vybrať jednu z týchto troch možností ako bod spojený s začiatkom: single step (jednofázový), multi-step (vielfázový) alebo blank (prázdny). Potom kliknite na Prejsť do Editora.

Keď si vyberiete **single step** alebo **multi-step** ako bod spojený s začiatkom, šablón formulára obsahuje štandardne pole **Template Selection**. Toto pole umožňuje vašim zákazníkom vybrať si šablón stránky počas procesu registráции. Môžete ho zostaviť na mieste, odstrániť alebo presunúť ako akékoľvek iné pole v editori.

![Editor formulára na pokladni](/img/config/checkout-form-editor.png)

Alternatívne môžete upraviť alebo duplikovať formuláre, ktoré už máte, kliknutím na možnosti pod ich názvom. Tam nájdete aj možnosti, ako zkopírovať shortcode formulára alebo ho siahnuť.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Prehľad redaktóra formulára platby (Checkout Form Editor Overview) {#checkout-form-editor-overview}

Redaktor formulára platby poskytuje komplexný rozhrňanie na vytváranie vašich registračných formulárov. Tu je prehľad rozvrhania redaktóra:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Upravovanie formulára platby (Editing a Checkout Form) {#editing-a-checkout-form}

Môžete vytvárať formuláre platby na rôzne účely. V tomto príklade sa budeme pýtať si registračný formulár.

Po prechode do redaktóra formulára platby mu dáte názov (ktorý bude používať iba internú referenciu) a slug (používaný na vytváranie shortcode, napríklad).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Formuláre sú zložité z krokov a polí. Nový krok môžete pridať kliknutím na Pridať nový krok formulára platby (Add New Checkout Step).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvom záložke okna modálne formulára vyplňte obsah kroku vášho formulára. Dajte mu ID, názov a popis. Tieto položky sa väčšom najčastejšie používajú internom účelom.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Ďalej nastavte viditeľnosť kroku. Môžete si vybrať medzi "Vždy zobrazovať", "Zobraziť len pre prihlásené používateľov" alebo "Zobraziť len pre hostov".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Nakoniec skonfigurujte štýl kroku. Toto sú voliteľné polia.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Teraz je čas pridať polia k našemu prvomu kroku. Stačte kliknúť na Pridať nové pole (Add New Field) a vyberte si typ sekcie, ktorú chcete.

![Krok formulára objednávky s polmiami](/img/config/checkout-form-step-with-fields.png)

Každé pole má svoje rôzne parametre, ktoré musíte vyplniť. Pre tento prvý krok si vyberieme pole "Username" (Používateľské meno).

![Výber typu pola z rozbaľovacieho menu](/img/config/checkout-form-field-type-dropdown.png)

![Nastavenia obsahu pola Username](/img/config/checkout-form-username-content.png)

![Nastavenia viditeľnosti pola Username](/img/config/checkout-form-username-visibility.png)

![Nastavenia štýlu pola Username](/img/config/checkout-form-username-style.png)

Môžete pridať quantos krok a polí, ktoré potrebujete. Ak chcete zobraziť svoje produkty na výber pre zákazníkov, použite pole Pricing Table (Tabuľka cien). Ak chcete umožniť svojim klientom vybrať šablón, pridajte pole Template Selection (Výber šablóny) atď.

![Dialog pridaného nového pola](/img/config/checkout-form-add-field-dialog.png)

_**Poznámka:** username, email, password, site title, site URL, order summary, payment a submit button sú povinné polia pre vytvorenie formulára objednávky._

Kým pracujete na svojom formulári objednávky, môžete vždy použiť tlačidlo Preview (Predglédka), aby ste videli, ako to budú vidieť vaši zákazníci. Môžete tiež prepínať medzi zobrazením ako existujúce používateľ alebo návštevník.

![Tlačidlo predglédky formulára objednávky](/img/config/checkout-form-preview-button.png)

![Modal pre predglédku formulára objednávky](/img/config/checkout-form-preview-modal.png)

Nakoniec, v Advanced Options (Pokročilé možnosti) môžete nakonfigurovať správu pre stránku "Ďakujeme" (Thank You page), pridať kódky na sledovanie konverzií, pridať vlastný CSS pre váš formulár objednávky alebo ho obmedziť na určité krajiny.

![Pokročilé možnosti](/img/config/checkout-form-advanced.png)

Môžete tiež manuálne zapnúť alebo vypnúť svoj formulár objednávky, prepínajúc túto možnosť v pravom stĺpci, alebo ho trvalo odstrániť.

![Prepínač aktívnosti](/img/config/checkout-form-active.png)

Aby usť odstrániť formulár, kliknite na možnosť "Delete" (Odstrániť) v akciách formulára:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Nezabudnite uložiť váš formulár objednávky!

![Save button](/img/config/checkout-form-save.png)

Aby ste získali šortkód vášho formulára, kliknite na "Generate Shortcode" (Generovať šortkód) a skopírujte výsledok z modálneho okna.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Pole Tabulky cien {#the-pricing-table-field}

Pole **Pricing Table** (Tabuľka cien) zobrazuje vaše produkty na formulári objednávky, aby si zákazníci mohli vybrať plán. Keď tento pole upravujete, môžete skonfigurovať niekoľko možností:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Tu je, ako sa tabuľka cien zobrazuje na formulári registráции v prednej časti (frontend):

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Products** (Produkty): Vyberte, ktoré produkty chcete zobraziť a v akom poradí sa objavia.
  * **Force Different Durations** (Nezabezpečiť rôzne trvávajúce obdobia): Keď je toto zapnuté, všetky produkty sa zobrazia bez ohľadu na to, či majú odpovedajúcu variantu ceny pre aktuálne vybranú fakturačnú dobu. Keď je vypnuté (predvolené nastavenie), produkty bez varianty pre vybranú dobu sa skryujú.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Hide when Pre-Selected** (Skryť pri predodôdanom vybrane): Skryva tabuľku cien, keď je plán už vybraný cez URL (napríklad `/register/premium`).
  * **Pricing Table Template** (Šablona tabuľky cien): Vyberte vizuálnu šablónu pre tabuľku cien (Napr. Jednoduchá zoznam, Legacy atď.).

Ak pridalte produkt do Tabulky cien pred tým, ako formulár obsahuje pole potrebné na dokončenie objednávkového toku toho produktu, editor zobrazí upozornenie. Použite toto upozornenie, aby ste pridal chýbajúce povinné pole pred publikovaním alebo uložením zmien pre živý formulár registráции.

### Pridanie prepínaču výberu obdobia {#adding-a-period-selection-toggle}

Ak ste skonfigurovali [Price Variations](creating-your-first-subscription-product#price-variations) na svojich produktoch (napr. mesačné a ročné ceny), môžete pridať pole **Výber obdobia** do vášho formulára pokladne. Toto pole zobrazuje prepínač, ktorý umožňuje zákazníkom premieniť sa medzi fakturačnými obdobiami, a tabuľka cien sa dynamicky aktualizuje v reálnom čase.

#### Krok 1: Nastavenie variant cien na vašich produktoch {#step-1-set-up-price-variations-on-your-products}

Pred pridaním pola Výber obdobia si uistite sa, že máte skonfigurované varianty cien na svojich produktoch. Prejdite do **Ultimate Multisite > Products**, upravte produkt a prejdite na záložku **Price Variations**, aby ste pridali alternatívne fakturačné obdobia (napr. Ročné za zľavo).

![Tab Price Variations na produkte](/img/config/product-price-variations-tab.png)

#### Krok 2: Pridanie pola Výber obdobia do vášho formulára pokladne {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Prejdite do **Ultimate Multisite > Checkout Forms** a upravte svojý formulár pokladne.

2. Prejdite dole na krok, ktorý obsahuje vaše pole **Pricing Table** a kliknite na **Add new Field**.

3. V dialógu výberu typu pola kliknite na **Period Select**.

![Dialóg Add New Field zobrazujúci Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurujte možnosti obdobia. Každá možnosť potrebuje:
   * **Duration**: Počet (napr. `1`)
   * **Duration unit**: Typ obdobia (Dni, Týždne, Mesiac, alebo Roky)
   * **Label**: Text, ktorý uvidia zákazníci (napr. "Mesačné", "Ročné")

5. Kliknite na **+ Add Option**, aby ste pridali viac možností obdobia. Tieto možnosti musia zodpovedať variantom cien, ktoré ste skonfigurovali na svojich produktoch.

![Nastavenia pola Výberu obdobia](/img/config/period-selection-field-settings.png)

6. Vyberte **Period Selector Template** (Clean je štandardný, zobrazuje jednoduchý stylizovaný selektor pripravený na prispôsobený CSS).

7. Kliknite na **Save Field**.

#### Krok 3: Položte pole nad tabulkou cien {#step-3-position-the-field-above-the-pricing-table}

Pre najlepšiu užívateľskú skúsenosť je uistite sa, že pole Výber obdobia (Period Selection) bude vidieť **pred** tabulkou cien v vašom kroku pokladne. Môžete pole posúdiť a zmeniť jeho poriadok v redaktore formulára pokladne. Takto si zákazníci najprv vyberú obdobie fakturácie a potom uvidia ceny pre to obdobie.

![Redaktor formulára pokladne zobrazujúci poriadok polí](/img/config/checkout-form-editor-with-fields.png)

#### Ako to funguje na prednej strane (Frontend) {#how-it-works-on-the-frontend}

Po skonfigurovaní budú zákazníci, ktorí navštívajú vašu registračnú stránku, vidieť selektor obdobia nad tabulkou cien. Keď kliknu na iné fakturačné obdobie:

  * Tabulka cien sa okamžite aktualizuje a zobrazí ceny pre vybrané obdobie (nie je potrebná načítanie stránky).
  * Ak je **Force Different Durations** vypnuté v poli Tabulka cien, produkty bez variácie ceny pre vybrané obdobie budú skryté.
  * Ak je **Force Different Durations** zapnuté, všetky produkty zostávajú viditeľné aj ak nemajú variáciu pre vybrané obdobie (zobrazia si svoju štandardnú cenu).

#### Predvolba fakturačného obdobia cez URL {#pre-selecting-a-billing-period-via-url}

Môžete tiež predvoliť produkt a fakturačné obdobie pomocou URL. Ultimate Multisite podporuje tieto vzory URL:

  * `/register/premium` — Predvoľuje len produkt "Premium"
  * `/register/premium/12` — Predvoľuje produkt a 12-mesačnú dobu platnosti
  * `/register/premium/1/year` — Predvoľuje produkt s 1-ročnou dobou platnosti

### Pole výberu šablóny (Template Selection Field) {#the-template-selection-field}

Pole **Výberu šablóny** umožňuje zákazníkom vybrať si šablónu webovej stránky počas pokladne. Toto pole je v Ultimate Multisite v verzií v2.6.1 štandardne zahrnuté ako v jednom kroku (single step) aj v multi-step formulároch pokladne.

#### Pridanie pola manuálne {#adding-the-field-manually}

Ak ste vôbec s formulom vytvoreným predเวอร์zi v2.6.1 alebo začatým z prázdneho šablóny:

1. Prejdite do **Ultimate Multisite > Checkout Forms** a upravte svoj formulár na objednávku (checkout form).
2. V kroku, kde sa zbierajú detaily o sieti, kliknite na **Pridať nové pole**.
3. Z rozbaľovacieho menu typu pola vyberte **Výber šablóny** (Template Selection).
4. Konfigurujte pole:
   - **Label** — Nadpis, ktorý vidia zákazníci nad siatovou sietičnou sietičkou (napr. „Vyber sietovú sietičnú sietičku“).
   - **Required** — Čoľko je povinné, aby zákazníci vybrali šablónu pred pokračovaním.

#### Ako to funguje {#how-it-works}

Keď zákazník vyberie šablónu počas objednávky, Ultimate Multisite ju bude používať pri vytváraní ich novej sietičky. Šablóny, ktoré sa zobrazujú, pochádzajú z vašej zoznamu **Site Templates** (**Ultimate Multisite > Site Templates**). Zobrazia sa tu len šablóny označené ako dostupné pre zákazníkov.

### Základné domény formulára na objednávku (Checkout-form base domains) {#checkout-form-base-domains}

Ultimate Multisite vเวอร์zi 2.13.0 považuje domény nastavené v poloch **Site URL** formulára na objednávku za sietičnú základnú doménu (network base domain). Použite nastavenia dostupných domén pre pole, ak chcete, aby zákazníci vytvárali sietičky pod jednou alebo viac zdieľanými registračnými domenami, ako napríklad `example.com` a `sites.example.com`.

Zdieľané základné domény formulára na objednávku sa ne považujú za mapovanie prispôsobených domén pre sietičku. Keď zákazník vytvorí podkategóriu sietičku na jednej z týchto základných, Ultimate Multisite nebuduje záznam mapovanej domény, ktorý by spôsoboval, že zdieľaný host bude prísť len k tejto jednej sietičke. Zdieľaný host zostáva dostupný pre bratrané sietičky, ktoré používajú ten istý základ formulára na objednávku.

Zdieľajte prispôsobené domény pre sietičky jednotlivých zákazníkov, ako napríklad `customer-example.com`. Zdieľajte základné domény formulára na objednávku pre zdieľané registračnú sietičnú sietičky, ktoré môžu používať mnoho sietičiek.

#### Odstránenie pola {#removing-the-field}

Ak si ne ponúka webové šablóny, odstráňte pole Výber šablóny z vášho formulára. Klienti sa potom dostanú k tomu šablónu, ktorý je nastavený ako štandard v **Ultimate Multisite > Settings > Site Templates**.
