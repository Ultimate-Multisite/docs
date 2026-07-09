---
title: Vytváranie vášho prvého produktového ponuky na predplatné
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Vytvorenie vášho prvého produktového ponuky (v2) {#creating-your-first-subscription-product-v2}

_**DÔLEŽITÉU POZNÁTE: Tento článok je určený iba pre používateľov Ultimate Multisite verzie 2.x. Ak používate verziu 1.x,**_ **_pozrite si tento článok**_**.

Aby ste mohli začať spúšťať svoju siete a začínať ponúkať svoje služby potenciálnym používateľom, potrebujete mať rôzne možnosti predplatného. Ako vytvárať tieto produkty? Aké typy produktov môžete ponúkať? V tomto článku pokrytne prejdeme všetko, čo musíte vedieť o produktoch.

## Typ produktu {#product-type}

S Ultimate Multisite môžete svojim klientom ponúkať dve kategórie produktov: **plány** a **dodávky** **(Order Bump)**. Dodávky sa dá rozdeľuje na dva typy: **baly** a **služby**. Ich rozdiel a špecifické vlastnosti uvidíte ďalej.

  * **Plány**: základný produkt Ultimate Multisite. Klient môže mať členstvo len ak je pripojené k planu. Plán poskytuje klientom jeden alebo viac sítí (závisí to od konfigurácie vášho planu) s obmedzeniami, ktoré nastavíte na stránke pre úpravu produktu.

  * **Baly**: dodávky, ktoré ovplyvňujú funkčnosť plánov Ultimate Multisite priamo. Zmenia obmedzenia alebo pridajú nové zdroje, pluginy alebo témou k pôvodnému planu, ktorý klient zakúpil. Napríklad základný plán môže umožniť 1 000 návštev za mesiac a môžete ponúknuť bal, ktorý tento počet rozšíri na 10 000.

  * **Služby**: dodávky, ktoré funkčnosť Ultimate Multisite neupravujú. Sú to úlohy, ktoré vykonáte pre svojho klienta v súvislosti s plánom, ktorý zakúpil. Napríklad váš zákazník môže kúpiť plán, ktorý umožňuje jednu sieti a zároveň zaplatiť za extra službu, ktorá bude vytvárať dizajn tejto siete.

## Správa produktov {#managing-products}

Pre mnohom si záľubných používateľov tab **Products** v Ultimate Multisite **(Ultimate Multisite > Products)** dá sa porovnať s plánmi v tradičnom hostiteľskom prostredí.

V rámci Ultimate Multisite definuje tab Products štruktúru a obmedzenia platné pre konkrétny produkt alebo službu. Také sú tieto štruktúry zohľadnené na popis produktu alebo služby, cenu, daňové ohľady a prístup (permissions).

Táto časť vám pomôže pochopiť tento nevyhnutný základ Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Pridávanie produktov {#adding-products}

Nezáleží na tom, či je plán, balíček alebo služba vstupným bodom definovania nového položky, a to cez **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Rozhranie obsahuje dva hlavné sekcie. Na ľave sú niekoľko záložiek, ktoré pomáhajú s definovaním produktu, a na pravej strane si nachádzajú sekcie, ktoré definujú základnú cenu produktu, jeho aktívny stav a obrázok produktu.

![Product edit page overview](/img/config/product-edit-full.png)

### Popis {#description}

Základnú informáciu o produkte môžete definovať pomocou uvedenia názvu a popisu produktu. Toto identifikátory sa zobrazujú tam, kde je potrebná informácia o produkte, napríklad pri výbere plánu a ceny, faktúrach, pôvodných upgradech atď.

![Product description section](/img/config/product-description.png)

### Typ ceny {#pricing-type}

Na pravej strane rozhrania môžete definovať základnú cenu.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite podporuje drieť rôzne typy cien. Možnosť **paid** (platená) vyzýva administrátora siete na informácie týkajúce sa ceny produktu a frekvencie fakturácie.

### Ceny {#pricing}

Cenový komponent definuje základnú cenu produktu a interval fakturácie.

![Cenky a cena a úsporu sekcia](/img/config/product-pricing-save.png)

tým sa na príklad cene 29,99 $ s nastavením 1 mesiac bude účtovať 29,99 $ každý mesiac. Podobne, cena 89,97 $ s nastavením 3 mesiace bude účtovaná táto suma každé kvartál.

### Cykle fakturácie {#billing-cycles}

Sekcia cyklov fakturácie určuje frekvenciu uvedeného fakturačného intervalu a všeobecne sa to rozumie v kontexte zmluv alebo pevných termínov.

![Cenky a úspora sekcia](/img/config/product-pricing-save.png)

Napriek tomu, ak máte cenu produktu 29,99 $ s intervalom 1 mesiac a 12 cyklom fakturácie bude produkt účtovaný 29,99 $ za mesiac na produkt počas nasledujúcich 12 mesiacov. Innymi slovami, takéto nastavenie vytvorí pevný termín ceny 29,99 $ za mesiac na 12 mesiacov a potom fakturácia skončí.

### Doba skúšobná (Trial Period) {#trial-period}

Zapnutím prepínaču ponuky skúšky môže administrátor siete definovať dobu skúšobnú pre produkt.

![Cenky a úspora sekcia](/img/config/product-pricing-save.png)

Počas doby skúšobnej sú zákazníci voľní v používaní produktu a nebude im účtovaná suma, kým sa neuplynie doba skúšobnej.

### Poplatok za nastavenie (Setup Fee) {#setup-fee}

Môžete tiež uplatniť poplatok za nastavenie na váš plán.

![Cenky a úspora sekcia](/img/config/product-pricing-save.png)

To znamená, že váš klient zaplatí extra sumu pri prvom účtovaní (nadጨማሪ k cene plánu), ktorá odpovedá poplatku, ktorú ste definovali v tejto sekcii.

### Aktívny (Active) {#active}

Prepínač aktívny efektívne určuje, či je produkt dostupný pre zákazníkov na nové registráции.

![Aktívny prepínač](/img/config/product-active.png)

Akú, ak sú na tomto pláne máte existujúce zákazníkov, vypnutie prepínačom do stavu "disabled" efektívne zruší tento plán a odstráni ho z budúcich registrácií. **Existujúci zákazníci na pláne budú pokračovať v fakturácii** až kým sa im nepremenu pre nový plán alebo ich neodstránia z plánu.

### Obraz produktu {#product-image}

Tlačidlo **Upload Image** umožňuje administrátorovi siete použiť médiová biblioteka na vybrané alebo nahranie obrázka produktu.

![Product image section](/img/config/product-image.png)

### Odstrániť {#delete}

Tlačidlo **Delete Product** produkt odstráni z systému. Zobrazí sa až po publikovaní produktu.

![Delete product section](/img/config/product-delete.png)

Odlišne od iných odstránení, produkt sa nekomponuje do žiadneho košíka (trash state). Preto je akcia po odstránení nepovinná.

### Vlastnosti produktu {#product-options}

Keďže základná informácia o produkte je definovaná, sú možnosti produktu pomocou **Product Options** administrátorovi siete v ďalšom definovaní špecifických vlastností produktu.

#### Obecné {#general}

Odkazka **product slug** (slug produktu) definuje slug, ktorým sa produkt identifikuje v URL-och a iných častiach Ultimate Multisite.

Ultimate Multisite podporuje niekoľko typov produktov, najmä Plán, Balenie a Služba. Vlaste produkty **Product Options** sa dynamicky upravujú v závislosti od zvoleného typu produktu.

Pole **Customer Role** (Rola zákazníka) určuje rol, ktorá je priradená zákazníkovi pri vytvorení siete. Typicky pre väčšinu administrátorov siete bude to štandardná rola Ultimate Multisite alebo Administrator. Štandardnú rolu Ultimate Multisite môžete nastaviť v **Ultimate Multisite > Settings > Login & Registration**.

![Nastavenia roly zákazníka](/img/config/product-customer-role-settings.png)

#### Upgrade a Downgrades {#up--downgrades}

Táto záložka definuje cesty na pôsobenie (upgrade) a znížanie (downgrade), ktoré sú k dispozícii zákazníkovi v rámci jeho konkrétnej úrovne.

Aby ste pochopili tento koncept, zvážte príklad, kde špecializovaná inštancia Ultimate Multisite poskytuje riešenia správy učenia (LMS) svojim zákazníkom. Aby ste dosiahli tieto tri plány (Basic, Plus a Premium), definujú sa konkrétne súvisiace pluginy pre každý plán (zobrazenie inštrukcií o aktivácii pluginov je v tomto sekcii nižšie).

Ak inštancia Ultimate Multisite slúži aj podnikové webové stránky alebo e-commerce webové stránky, tieto plány môžu vyžadovať iné pluginy na inštaláciu a aktiváciu.

V tomto zmysle by bolo nechceť a problémové umožniť zákazníkom prechod do plánov e-commerce, pretože tieto plány, ich ceny a obmedzenia nemusí byť pri வங்கிat.

Aby ste preto obmedzili cestu zákazníka a zabránili incidentom, sietkový administrátor môže definovať skupinu plánov (plan group) a v rámci tejto skupiny určiť, do ktorých plánov môže zákazník prejsť.

![Záložka Upgrade a Downgrades](/img/config/product-upgrades.png)

Aby ste definovali skupinu plánov, vyberte kompatibilné plány z zoznamu **plan group**. **Poradie produktu** určuje, ako sú plány usporiadané a zobrazované od najnižšieho k najvyššiemu.

Ultimate Multisite tiež obsahuje funkciu **order bump**, kde je vhodné pridávať doplnkové produkty a služby k plánom. Služby sa zákazníkovi ponúkajú ako extra položky, ktoré sa môžu pridať k plánom pri pokladni alebo počas upgrade.

#### Cenové varianty {#price-variations}

Variačné ceny umožňujú administrátorom siete určiť alternatívne cenné úrovne v závislosti od trvania. Toto nastavenie umožňuje ponúkať to isté produkty na rôzne fakturačné obdobia, napríklad mesačne, kvartálne, ročne alebo akýkoľvek iný period. Napríklad môžete nastaviť produkt za 29,99 USD/mesiac s zľavou na ročnú ponuku za 249,99 USD/rok.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Aby ste vytvorili variačné ceny, nastavte prepínač **Enable Price Variations** (Aktívna správa variačných cien) na aktivný a kliknite na tlačidlo **Add new Price Variation** (Pridať novú variačnú cenu).

![Product price variations](/img/config/product-price-variations.png)

Aby ste zadali variáciu, nastavte trvanie, obdobie a cenu tejto variácie. Môžete pridať ďalšie variácie kliknutím na tlačidlo znova.

Napriek tomu, ak je cena základného produktu 29,99 USD mesačne, môžete pridať:

  * **3 mesiace** za 79,99 USD (malá zľava oproti mesačnej)
  * **1 rok** za 249,99 USD (významná zľava za ročné záväzky)

:::tip Zobrazenie prepínaču fakturačného obdobia na prednej strane (Frontend)

Variačné ceny samy o sebe nepridávajú prepínač alebo vypínač na prednej strane pokladne. Aby si zákazníci mohli premieniť medzi fakturačnými obdobiami (napr. Mesačne / Ročne), musíte pridať pole **Period Selection** (Výber obdobia) do vášho formulára pokladne. Pre podrobné návody si pozrite [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle).
:::

#### Daňové ohľady (Taxes) {#taxes}

Odkazník na zálehy **Taxes** (Daňové ohľady) je v súlade s nastaveniami daní definovanými v **Ultimate Multisite > Settings > Taxes** a konkrétne s definovanými daňovými sadzba. Aby ste aktivovali daňové ohľady a definovali platné daňové sadzby, si pozrite dokumentáciu na **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

V minulom príklade sme definovali miestny daňový spor na 7,25 %, ktorý sa pomáha zákazníkom v Kalifornii (Spojené státy americké).

Keď je daňový spor definovaný v **Ultimate Multisite > Settings > Manage Tax Rates**, je ho možné vybrať na úrovni produktu.

![Taxes tab](/img/config/product-taxes.png)

Aby ste ukázali, že produkt podlieha dani, nastavte prepínač **Is Taxable** (Je daňový) na aktív a vyberte príslušný daňový spor z rozbaľovacieho menu Tax Category (Kategória daní).

#### Site Templates (Šablóny sítí) {#site-templates}

V podstate sú šablóny sítí kompletné WordPress webové stránky, ktoré sa klonujú na stránku zákazníka na začiatku jeho predplatného.

![Site Templates tab](/img/config/product-site-templates.png)

Sieťový administrátor vytvára a konfiguruje šablónu sústredne ako štandardný WordPress web s aktivovanými a skonfigurovanými témov, pluginmi a obsahom. Šablóna sa kloní identicky na zákazníka.

Táto záložka umožňuje sieťovému administrátorovi určiť správanie šablón pre novú predplatbu. Aby ste mohli využívať šablóny sítí pre tento plán, nastavte prepínač **Allow Site Templates** (Povoliť šablóny sítí) na aktívny stav.

Keď je **Allow Site Templates** vypnutý, zákazníci na tomto pláne nemôžu vybrať šablóny, aj keď by to formulár na dokončenie objednávky, zdieľateľný odkaz alebo parametre URL umožnili ich využitie. Ultimate Multisite teraz tento limit vynucuje pomocou rezervernej reťazce cez všetky dostupné body vstupu: najprv sa skontrolujú nastavenia plánu, potom nastavenia šablóny v formulári na dokončenie objednávky a nakoniec predvolené alebo URL-dostupné šablóny. To udržuje limity plánu konzistentnými a bráni objavaniu šablón pre produkty, ktoré ich nemajú ponúkať.

**site template selection mode** (režim výberu šablón sití) definuje správanie šablón sítí počas procesu predplatného.

Použadavka **D** **Default** nastavuje postup podľa formulára na pokladni. Ak si administrátor siete v procesu pokladne definoval krok výberu šablóny a tento krok je definovaný s šablonami, toto nastavenie bude respektovať pokyny stanovené v kroku pokladne.

Uvedenie **A** **Assign Site Template** zaručuje výber šablóny, ktorú ste určili. Konsekvenčne sa všetky kroky výberu šablóny v pokladne odstránia.

Na koniec, **C** **Choose Available Site Templates** nadpisuje šablóny určené v kroku pokladne šablónami vybranými v tomto nastavení. Môžete tiež definovať predvolenú šablónu, aby pomohol zákazníkovi s výberom.

Nakoniec, ak si administrátor siete chce, aby sa výber šablóny bol vykonaný v krokoch pokladne, dostatočné bude nastavenie ' _default_ '. Alternatívne, aby ste odstránili a zablokovali výber šablóny a delegovali výber nastaveniam plánu, môžu byť užitočné možnosti ' _assign new template_ ' alebo ' _choose available site templates_ '.

#### Sité {#sites}
Odkazka **Sites** je súčasťou funkcie obmedzení Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Toto nastavenie určuje maximálnu možnú počty sítí, ktoré môže zákazník vytvoriť v rámci svojho členstva.

Aby ste aktivovali obmedzenie, nastavte prepínač **limit sites** do aktívneho stavu a uveďte maximálny počet sítí v poli **site allowance**.

#### Zmery {#visits}
Odkazka **Visits** je ďalšou súčasťou systému obmedzení Ultimate Multisite. Toto nastavenie umožňuje počítanie a následné obmedzenie unikátnych návštev na sieti zákazníka.

![Visits tab](/img/config/product-visits.png)

Z marketingového pohledu je tato síťová konfigurace pro administrátory možné využít ako spôsob, ako podporujú zákazníkov pri prechode na vyšší plán po dosiahnutí limitov. Táto funkcia tiež pomáha administrátorovi siete obmedziť a zabrániť nadmernému ruchu na stránkach, aby sa zachovali systémy.

Aby ste mohli využiť túto funkciu, nastavte prepínač **limit unique visits** do aktívneho stavu a v poli **unique visits quota** uveďte maximálnu možnú počty jedinečných návštev.

Keďže je tento limit dosiahnutý, Ultimate Multisite nebude slúžiť stránku zákazníka, ale zobrazí správu o preškolení limitov.

#### Používatelia {#users}

Omeňovanie v Ultimate Multisite pod kategóriou 'Users' umožňuje administrátorovi siete vyrobiť a priraditi obmedzenia na počet používateľov, ktorí môžu byť vytvoriať rôzne role.

![Users tab](/img/config/product-users.png)

Aby ste aktivovali funkciu obmedzení, nastavte prepínač **limit user** do aktívneho stavu, posúvavajte ho naправо.

Potom pre každú rolu, ktorú chcete obmedziť, nastavte prepínač vedľa nej do aktívneho stavu a definujte maximálnu hornú hranicu v príslušnom poli.

#### Typy prístupov (Post Types) {#post-types}

Tabu **Post Types** umožňuje administrátorovi siete vyrobiť detailné obmedzenia na rozmanité typy prístupov vo WordPress.

![Post Types tab](/img/config/product-post-types.png)

Vzhľadom na štruktúru WordPress je články a typy prístupov dôležitou súčasťou jeho základnej funkčnosti, a preto je systém obmedzení v Ultimate Multisite navrhnutý tak, aby pomohol administrátorovi siete vytvárať a udržiavať limity.

Aby ste aktivovali tento podsystém obmedzenia, nastavte prepínač **limit post types** do aktívneho stavu, posúvavajte ho naправо.

Ďalej pre každý typ príspevku, ktorý chcete obmedziť, ho zapnite cez prepnutie naправо a uveďte maximálnu hornú hranicu v príslušnom poli.

#### Disk priestor {#disk-space}

Odkazka **Disk Space** umožňuje sietovým administrátorom obmedziť priestor spotrebený zákazníkmi.

![Disk Space tab](/img/config/product-disk-space.png)

Typicky v WordPress multisite sú základné súbory zdieľaní medzi všetkými sitami, a individuálne vytvorené adresá uzatvorených prekyvov na media súboroch a načítavateľmi, kde sa tieto nastavenia a obmedzenia týkajú.

Aby ste umožnili obmedzenie spotreby diskového priestoru, nastavte prepínač **limit disk size per site** do aktívneho stavu, posúvajúc ho naправо.

Potom uveďte maximálnu hornú hranicu v megabajtach v poli **disk space allowance**.

#### Prispôsobená doména {#custom-domain}

Kliknutím na tento možnosť môžete umožniť prispôsobené domény len na tomto pláne.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Témata {#themes}

Odkazka **Themes** v ponuke produktových možností umožňuje sietovému administrátorovi, aby sú témata k dispozícii zákazníkom na výber a voliteľne zdefiniovať ich stav.

![Themes tab](/img/config/product-themes.png)

_**Poznámka: Aby sa témata mohli ponúkať zákazníkom, musia byť vnímané sítou sietovým administrátorom.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Možnosť **visibility** definuje, či je toto téma viditeľné pre zákazníka pri zobrazení jeho záložky **Appearance > Themes** v jeho site. Nastavenie tejto možnosti na **Hidden** odstráni tému z view a tým obmedzí schopnosť ju vybrať a aktivovať.

![Themes tab](/img/config/product-themes.png)

Výber **behavior** umožňuje sietovému administrátorovi definovať stav témy pri vytvorení zákazníckeho site.

V **Dostupnom** stave je téma k dispozícii zákazníkovi na samé aktiváciu. Naopak, v stave **Nespôsobilné** sa od zákazníka odstráni možnosť aktivovať tému. Najpozdnejšie, možnosť **Force Activate** zaručuje výber a aktiváciu témy, čím ju nastaví ako štandard pri vytvorení webovej stránky.

#### Plugins {#plugins}

Podobne ako v záľave Themes umožňuje Ultimate Multisite administrátorom siete definovať viditeľnosť pluginov pre zákazníkov tak, ako aj ich stav pri vytváraní nového webu.

![Plugins tab](/img/config/product-plugins.png)

Rozbaľovacie menu **viditeľnosti** umožňuje pluginu byť buď viditeľným alebo skrytým pre zákazníka, ak ho zobrazi na jeho webovej stránke pomocou možnosti v menu Plugins.

Administrátor siete môže ďalej upravovať správanie pluginov pomocou možností v rozbaľovacom menu **správania**.

![Plugins tab](/img/config/product-plugins.png)

Výber **Default** respektuje stav pluginu definovaný v šablónke webovej stránky, ktorú zákazník vybral. Preto pluginy aktivované v šablónke zostanú aktivované aj po jej klonovaní na webovú stránku zákazníka.

**Force Activate** nastaví plugin do aktívneho stavu pri vytvorení webu a naopak **Force Inactivate** ho deaktivuje pri vytvorení webu. V oboch týchto prípadoch môže zákazník stav pluginu manuálne zmeniť pomocou svojho menu Plugins v WordPress.

Nastavenie **Force Activate & Lock** funguje podobne, ale bráni zmeniť stav pluginu na strane zákazníka. Preto nastavene hodnoty Force Activate a Lock zaručia, že plugin bude v aktívnom stave a zákazník nebude mať možnosť ho deaktivovať. Podobne nastavenie **Force Inactivate & Lock** zaručí, že plugin bude v neaktívnom stave a používateľ nebude mať možnosť ho aktivovať.

Administrátor siete môže rozvážať použitie nastavení Force Activate & Lock a Force Inactivate & Lock v conjunction s šablónami stránok ako pluginov a stavmi pluginov v šablónach môžu byť ovplyvnené týmito nastaveniami, ak sú vybrané.

#### Omeňovanie pri zzerovaní (Reset Limitations) {#reset-limitations}

Odkaz na záložku **Reset Limitations** zzeruje všetky prispôradené limity definované pre produkt. Aby ste zzerovali limity, kliknite na tlačidlo **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Aby ste potvrdili akciu, premiete prepínač **confirm reset** do aktívneho stavu vpravo a kliknite na tlačidlo **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Upraviť, Duplikovať alebo Odstrániť Produkt {#edit-duplicate-or-delete-product}

Stávajúce sa produkty môžete upraviť, duplikovať alebo odstrániť, navigať do **Ultimate Multisite > Products** a presunúť myšou cez názov existujúceho produktu.

![Product hover actions](/img/config/product-hover-actions.png)
