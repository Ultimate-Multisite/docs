---
title: Vytvoření prvního produktu s předplatným
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Vytvoření vašeho prvního produktu s předplatným (v2) {#creating-your-first-subscription-product-v2}

_**DŮLEŽITÁ POZNÁMKA: Tento článek je určen pouze pro uživatele Ultimate Multisite verze 2.x. Pokud používáte verzi 1.x,**_ **_**přečtěte si tento článek**_**.

Abyste mohli začít provozovat svou síť a začít prodávat své služby potenciálním uživatelům, potřebujete mít různé možnosti předplatného. Jak tyto produkty vytvoříte? Jaké typy produktů můžete nabízet? V tomto článku probereme vše, co potřebujete o produktech vědět.

## Typ produktu {#product-type}

S Ultimate Multisite můžete svým klientům nabízet dvě kategorie produktů: **plány** a **doplňky** **(Order Bump)**. Doplňky lze rozdělit na dva typy:**balíčky** a **služby**. Dále se podíváme na jejich rozdíly a specifika.

  * **Plány** : základní produkt Ultimate Multisite. Váš klient může mít členství pouze tehdy, pokud je připojeno k plánu. Plán poskytuje vašim klientům jeden nebo více webů (záleží na konfiguracích vašeho plánu) s omezeními, která nastavíte na stránce úprav produktu.

  * **Balíčky** : doplňky, které přímo ovlivňují funkcionality plánů Ultimate Multisite. Mění omezení nebo přidávají nové zdroje, pluginy nebo šablony k původnímu plánu, který si váš klient koupil. Například základní plán může umožňovat 1 000 návštěv měsíčně a vy můžete zpřístupnit balíček, který toto číslo rozšíří na 10 000.

  * **Služby:** doplňky, které nemění funkcionality Ultimate Multisite. Jsou to úkoly, které pro svého klienta provedete navíc k plánu, který si koupil. Například váš zákazník si může koupit plán, který umožňuje jeden web, a také zaplatit za dodatečnou službu, která vytvoří design tohoto webu.

## Správa produktů {#managing-products}

Pro mnohé lze kartu **Products** v Ultimate Multisite **(Ultimate Multisite > Products)** přirovnat k plánům v tradičním hostingovém prostředí.

V rámci Ultimate Multisite karta Products definuje strukturu a omezení použitelná pro konkrétní produkt nebo službu. Takové struktury zahrnují popis produktu nebo služby, cenu, daně a oprávnění.

Tato část vás provede pochopením tohoto zásadního základního kamene Ultimate Multisite.

![Stránka se seznamem produktů](/img/config/products-list.png)

## Přidávání produktů {#adding-products}

Ať už jde o plán, balíček nebo službu, vstupním bodem pro definování nové položky je **Ultimate Multisite > Products > Add Product**.

![Tlačítko Přidat produkt](/img/config/product-add-button.png)

Rozhraní obsahuje dvě hlavní části. Vlevo je několik karet, které pomáhají s definicí produktu, a vpravo je několik sekcí pro definování základní ceny produktu, jeho aktivního stavu a obrázku produktu.

![Přehled stránky úprav produktu](/img/config/product-edit-full.png)

### Popis {#description}

Základní informace o produktu lze definovat zadáním názvu produktu a popisu. Tyto identifikátory se zobrazují všude, kde jsou informace o produktu vyžadovány, například při výběru plánu a cen, na fakturách, při upgradech a podobně.

![Sekce popisu produktu](/img/config/product-description.png)

### Typ cen {#pricing-type}

Na pravé straně rozhraní lze definovat základní ceny.

![Sekce cen a uložení](/img/config/product-pricing-save.png)

Ultimate Multisite podporuje tři různé typy cen. Možnost **placené** vyzve správce sítě k zadání informací o ceně produktu a frekvenci fakturace.

### Ceny {#pricing}

Komponenta ceny definuje základní cenu produktu a fakturační interval.

![Sekce cen a uložení](/img/config/product-pricing-save.png)

tedy příklad ceny $29.99 s nastavením 1 měsíc bude účtovat $29.99 každý měsíc. Podobně cena $89.97 s nastavením 3 měsíce bude účtovat tuto částku každé čtvrtletí.

### Fakturační cykly {#billing-cycles}

Sekce fakturačních cyklů určuje frekvenci výše uvedeného fakturačního intervalu a obecně se chápe ve světle smluv nebo pevných období.

![Sekce cen a uložení](/img/config/product-pricing-save.png)

Například cena produktu $29.99 s intervalem 1 měsíc a 12 fakturačními cykly by účtovala $29.99 měsíčně za produkt po následujících 12 měsíců. Jinými slovy, takové nastavení by stanovilo pevně dané cenové období $29.99 měsíčně na 12 měsíců a poté by fakturace skončila.

### Zkušební období {#trial-period}

Zapnutí přepínače nabídky zkušebního období umožňuje správci sítě definovat zkušební období pro produkt.

![Sekce cen a uložení](/img/config/product-pricing-save.png)

Během zkušebního období mohou zákazníci produkt zdarma používat a nebude jim účtováno, dokud zkušební období neskončí.

### Zřizovací poplatek {#setup-fee}

Ke svému plánu můžete také přidat zřizovací poplatek.

![Sekce cen a uložení](/img/config/product-pricing-save.png)

To znamená, že váš klient zaplatí při první platbě dodatečnou částku (navíc k cenovému plánu), která odpovídá poplatku, který jste definovali v této sekci.

### Aktivní {#active}

Přepínač aktivního stavu efektivně určuje, zda je produkt dostupný zákazníkům pro nové registrace.

![Přepínač aktivního stavu](/img/config/product-active.png)

Pokud u tohoto plánu existují stávající zákazníci, nastavení přepínače do deaktivovaného stavu fakticky zachová plán pro stávající zákazníky a odstraní jej z budoucích registrací. **Stávající zákazníci v plánu budou nadále fakturováni**, dokud nebudou převedeni na nový plán nebo z plánu odstraněni.

### Obrázek produktu {#product-image}

Tlačítko **Upload Image** umožňuje správci sítě využít knihovnu médií k výběru nebo nahrání obrázku produktu.

![Sekce obrázku produktu](/img/config/product-image.png)

### Smazat {#delete}

Tlačítko **Delete Product** smaže produkt ze systému. Zobrazí se, jakmile je produkt publikován.

![Sekce smazání produktu](/img/config/product-delete.png)

Na rozdíl od jiných smazání není produkt umístěn do žádného stavu koše. Jakmile je tedy smazán, akce je nevratná.

### Možnosti produktu {#product-options}

Jakmile jsou definovány základní informace o produktu, možnosti produktu pomáhají správci sítě dále určit konkrétní atributy produktu.

#### Obecné {#general}

Karta **Obecné** definuje obecné atributy produktu, které se nevztahují na žádnou z ostatních karet specifických pro produkt.

![Karta Obecné](/img/config/product-general-tab.png)

Samovysvětlující **slug produktu** definuje slug, kterým je produkt identifikován v URL a dalších oblastech Ultimate Multisite.

Ultimate Multisite podporuje několik typů produktů, konkrétně Plan, Package a Service. Karty **Možnosti produktu** se dynamicky upravují podle zadaného typu produktu.

**Role zákazníka** určuje roli, která je zákazníkovi při vytvoření webu přiřazena. Pro většinu správců sítě to obvykle bude výchozí role Ultimate Multisite nebo Administrator. Výchozí roli Ultimate Multisite lze nastavit v **Ultimate Multisite > Settings > Login & Registration**.

![Nastavení role zákazníka](/img/config/product-customer-role-settings.png)

#### Upgrady a downgrady {#up--downgrades}

Tato karta určuje cesty upgradu a downgradu dostupné zákazníkovi v rámci jeho konkrétní úrovně.

Pro pochopení tohoto konceptu zvažte příklad, kdy specializovaná instalace Ultimate Multisite poskytuje svým zákazníkům řešení pro správu vzdělávání. K dosažení toho jsou definovány tři plány (Basic, Plus a Premium) a pro každý plán jsou aktivovány konkrétní pluginy (pokyny k aktivaci pluginů najdete dále v této části).

Pokud instalace Ultimate Multisite obsluhuje také firemní weby nebo eCommerce weby, mohou tyto plány vyžadovat instalaci a aktivaci jiných pluginů.

Z tohoto důvodu by bylo nežádoucí a problematické umožnit zákazníkům eLearningu přechod na eCommerce plány, protože tyto plány, ceny a omezení pro ně nemusí být vhodné.

Aby tedy správce sítě omezil cestu zákazníka a předešel incidentům, může definovat skupinu plánů a v rámci této skupiny určit plány, na které může zákazník přejít.

![Karta Upgrady a downgrady](/img/config/product-upgrades.png)

Chcete-li definovat skupinu plánů, zadejte kompatibilní plány v seznamu **skupina plánů**. **Pořadí produktu** určuje, jak jsou plány seřazeny a zobrazeny od nejnižšího po nejvyšší.

Ultimate Multisite také obsahuje funkci **order bump**, kde lze k plánům přidat vhodné doplňkové produkty a služby. Ty jsou zákazníkovi nabízeny jako další položky, které lze přidat k plánům při checkoutu nebo během upgradu.

#### Cenové varianty {#price-variations}

Cenové varianty umožňují správci sítě zadat alternativní cenové úrovně podle délky trvání. Toto nastavení umožňuje nabídnout pro stejný produkt měsíční, čtvrtletní, roční nebo jakékoli jiné fakturační období. Například můžete nastavit produkt za $29.99/měsíc se zvýhodněnou roční možností za $249.99/rok.

![Karta Cenové varianty](/img/config/product-price-variations-tab.png)

Chcete-li vytvořit cenové varianty, nastavte přepínač **Povolit cenové varianty** jako aktivní a klikněte na tlačítko **Přidat novou cenovou variantu**.

![Cenové varianty produktu](/img/config/product-price-variations.png)

Chcete-li zadat variantu, nastavte délku trvání, období a cenu varianty. Další varianty lze zadat opětovným kliknutím na tlačítko.

Například pokud je základní cena vašeho produktu $29.99 měsíčně, můžete přidat:

  * **3 měsíce** za $79.99 (malá sleva oproti měsíční platbě)
  * **1 rok** za $249.99 (výrazná sleva za roční závazek)

:::tip Zobrazení přepínače fakturačního období na frontendu

Samotné cenové varianty nepřidávají na frontend checkoutu žádný přepínač ani switch. Aby zákazníci mohli přepínat mezi fakturačními obdobími (např. měsíční / roční), musíte do svého checkout formuláře přidat pole **Výběr období**. Podrobné pokyny najdete v části [Checkout formuláře: Přidání přepínače výběru období](checkout-forms#adding-a-period-selection-toggle).
:::

#### Daně {#taxes}

Karta **Daně** odpovídá nastavením daní zadaným v **Ultimate Multisite > Settings > Taxes** a konkrétněji definovaným daňovým sazbám. Informace o povolení daní a definování použitelných daňových sazeb najdete v dokumentaci v části **Ultimate Multisite: Settings**

![Karta Daně](/img/config/product-taxes.png)

V předchozím příkladu jsme definovali místní daňovou sazbu 7,25 % vztahující se na zákazníky v Kalifornii (Spojené státy americké).

Jakmile je daňová sazba definována v **Ultimate Multisite > Settings > Manage Tax Rates**, lze ji vybrat na úrovni produktu.

![Karta Daně](/img/config/product-taxes.png)

Chcete-li označit produkt jako zdanitelnou položku, nastavte přepínač **Je zdanitelný** jako aktivní a vyberte použitelnou daňovou sazbu z rozbalovací nabídky Tax Category.

#### Šablony webů {#site-templates}

Šablony webů jsou v podstatě kompletní WordPress weby, které jsou při zahájení předplatného naklonovány na web zákazníka.

![Karta Šablony webů](/img/config/product-site-templates.png)

Správce sítě vytvoří a nakonfiguruje šablonový web jako běžný WordPress web s aktivovanými a nakonfigurovanými motivy, pluginy a obsahem. Šablonový web je zákazníkovi naklonován beze změn.

Tato karta umožňuje správci sítě určit chování šablon webů při novém předplatném. Chcete-li pro tento plán využívat šablony webů, nastavte přepínač **Povolit šablony webů** do aktivního stavu.

Když je **Povolit šablony webů** vypnuto, zákazníci v daném plánu nemohou vybírat šablony, i kdyby je jinak zpřístupňoval checkout formulář, sdílitelný odkaz nebo parametr URL. Ultimate Multisite nyní toto omezení vynucuje prostřednictvím záložního řetězce napříč dostupnými vstupními body: nejprve se kontrolují nastavení plánu, poté nastavení šablon checkout formuláře a následně předem vybrané nebo přes URL poskytnuté šablony. Tím se zachovává konzistence omezení plánů a brání se zobrazování šablon u produktů, které je nemají nabízet.

**Režim výběru šablony webu** definuje chování šablon webu během procesu předplatného.

Nastavení **D** **efault** postupuje podle kroků ve formuláři checkout. Pokud správce sítě definoval krok výběru šablony v procesu checkout a tento krok byl definován se šablonami, toto nastavení bude respektovat pokyny stanovené v kroku checkout.

Zadání **A** **ssign Site Template** vynutí výběr zadané šablony. V důsledku toho jsou odstraněny všechny kroky výběru šablony v procesu checkout.

Nakonec **C** **hoose Available Site Templates** přepíše šablony zadané v kroku checkout šablonami vybranými v tomto nastavení. Lze také definovat předem vybranou šablonu, která zákazníkovi usnadní výběr.

Pokud si správce sítě nakonec přeje, aby výběr šablony probíhal v krocích checkout, postačí nastavení ' _default_ '. Alternativně, chcete-li odebrat a uzamknout výběr šablony a delegovat výběr na nastavení plánu, mohou být vhodné možnosti ' _assign new template_ ' nebo ' _choose available site templates_ '.

#### Weby {#sites}

Karta **Weby** je součástí funkce omezení Ultimate Multisite.

![Karta Weby](/img/config/product-sites.png)

Toto nastavení určuje maximální počet webů, které může zákazník vytvořit v rámci svého členství.

Chcete-li omezení povolit, nastavte přepínač **omezit weby** do aktivního stavu a zadejte maximální počet webů do pole **limit webů**.

#### Návštěvy {#visits}

Karta **Návštěvy** je další součástí systému omezení Ultimate Multisite. Toto nastavení umožňuje započítávání a následné omezování unikátních návštěvníků webu zákazníka.

![Karta Návštěvy](/img/config/product-visits.png)

Z marketingového hlediska mohou správci sítě toto nastavení využít jako prostředek, jak povzbudit zákazníky k upgradu jejich plánu po dosažení limitů. Toto nastavení může správci sítě také pomoci omezit a zabránit nadměrnému provozu na webech, aby se šetřily systémové prostředky.

Chcete-li tuto funkci využít, nastavte přepínač **omezit unikátní návštěvy** do aktivního stavu a zadejte maximální počet unikátních návštěvníků do pole **kvóta unikátních návštěv**.

Jakmile bude tohoto limitu dosaženo, Ultimate Multisite přestane web zákazníka obsluhovat namísto zobrazení zprávy informující, že limity byly překročeny.

#### Uživatelé {#users}

Omezení 'Uživatelé' v Ultimate Multisite umožňují správci sítě uvalit limity na počet uživatelů, které lze vytvořit a přiřadit k rolím.

![Karta Uživatelé](/img/config/product-users.png)

Chcete-li funkci omezení povolit, nastavte přepínač **omezit uživatele** do aktivního stavu posunutím doprava.

Dále pro každou roli, která má být omezena, nastavte přepínač vedle ní do aktivního stavu a v příslušném poli definujte maximální horní limit.

#### Typy příspěvků {#post-types}

Karta **Typy příspěvků** umožňuje správci sítě uvalit podrobné limity na rozsáhlou škálu typů příspěvků v rámci WordPress.

![Karta Typy příspěvků](/img/config/product-post-types.png)

Vzhledem ke konstrukci WordPress jsou příspěvky a typy příspěvků významnou součástí jeho základní funkčnosti, a proto je systém omezení Ultimate Multisite navržen tak, aby správci sítě pomáhal se stanovováním a udržováním limitů.

Chcete-li tento subsystém limitů povolit, nastavte přepínač **omezit typy příspěvků** do aktivního stavu posunutím doprava.

Dále pro každý typ příspěvku, který má být omezen, jej zapněte posunutím přepínače doprava a zadejte maximální horní limit v příslušném poli.

#### Diskový prostor {#disk-space}

Karta **Diskový prostor** umožňuje správcům sítě omezit prostor spotřebovaný zákazníky.

![Karta Diskový prostor](/img/config/product-disk-space.png)

Typicky jsou ve WordPress multisite základní soubory sdíleny mezi všemi weby a pro mediální soubory a nahrávky jsou vytvářeny jednotlivé adresáře, na které se tato nastavení a omezení vztahují.

Chcete-li povolit omezení využití disku, nastavte přepínač **omezit velikost disku na web** do aktivního stavu posunutím doprava.

Dále zadejte maximální horní limit v megabajtech do pole **povolený diskový prostor**.

#### Vlastní doména {#custom-domain}

Přepnutím této možnosti můžete povolit vlastní domény konkrétně v tomto plánu.

![Karta Vlastní domény](/img/config/product-custom-domains.png)

#### Šablony {#themes}

Karta **Šablony** v rámci možností produktu umožňuje správci sítě zpřístupnit šablony zákazníkům k výběru a volitelně vynutit stav šablony.

![Karta Šablony](/img/config/product-themes.png)

_**Poznámka: Aby byly šablony zákazníkům dostupné, musí je správce sítě povolit na úrovni sítě.**_

![Stránka síťových šablon](/img/config/product-themes-network-enabled.png)

Možnost **viditelnost** definuje, zda je tato šablona viditelná zákazníkovi při zobrazení karty **Vzhled > Šablony** v rámci jeho webu. Nastavení této možnosti na **Skryté** odstraní šablonu ze zobrazení, a tím omezí možnost ji vybrat a aktivovat.

![Karta Šablony](/img/config/product-themes.png)

Výběr **chování** umožňuje správci sítě definovat stav šablony při vytvoření zákaznického webu.

Ve stavu **A** **vailable** je šablona zpřístupněna zákazníkovi pro vlastní aktivaci. Naopak stav **Not Available** zákazníkovi odebere možnost šablonu aktivovat. Nakonec možnost **Force Activate** vynutí výběr a aktivaci šablony, čímž ji při vytvoření webu nastaví jako výchozí.

#### Pluginy {#plugins}

Podobně jako karta Šablony umožňuje Ultimate Multisite správci sítě definovat viditelnost pluginů pro zákazníky i jejich stav při vytvoření nového webu.

![Karta Pluginy](/img/config/product-plugins.png)

Rozbalovací nabídka **viditelnost** umožňuje, aby byl plugin pro zákazníka buď viditelný, nebo skrytý při zobrazení na jeho webu prostřednictvím možnosti nabídky Pluginy.

Správce sítě může dále upravovat chování pluginů pomocí možností v rozbalovacím seznamu chování.

![Karta Pluginy](/img/config/product-plugins.png)

Volba **Default** respektuje stav pluginu definovaný v šabloně webu vybrané zákazníkem. Pluginy, které jsou v šabloně aktivované, tak zůstanou aktivované i po naklonování šablony na web zákazníka.

Volba **Force Activate** uvede plugin při vytvoření webu do aktivního stavu a naopak **Force Inactivate** plugin při vytvoření webu deaktivuje. V obou těchto případech může zákazník stav pluginu ručně změnit prostřednictvím své nabídky Pluginy ve WordPress.

Nastavení **Force Activate & Lock** funguje podobně, ale zabrání zákazníkovi změnit stav pluginu. Nastavení Force Activate and Lock tedy vynutí aktivní stav pluginu a zabrání zákazníkovi jej deaktivovat. Podobně nastavení **Force Inactivate & Lock** vynutí neaktivní stav pluginu a zabrání uživateli plugin aktivovat.

Správce sítě může zvážit nastavení Force Activate & Lock a Force Inactivate & Lock ve spojení se šablonami webů, protože pluginy a stavy pluginů v šablonách mohou být těmito nastaveními ovlivněny, pokud jsou vybrána.

#### Reset omezení {#reset-limitations}

Karta **Reset omezení** resetuje všechny vlastní limity definované u produktu. Chcete-li omezení resetovat, klikněte na tlačítko **resetovat omezení**.

![Karta Reset omezení](/img/config/product-reset-limitations.png)

Pro potvrzení akce přepněte přepínač **potvrdit reset** doprava do aktivního stavu a klikněte na tlačítko **resetovat omezení**.

![Karta Reset omezení](/img/config/product-reset-limitations.png)

## Upravit, duplikovat nebo smazat produkt {#edit-duplicate-or-delete-product}

Stávající produkty lze upravit, duplikovat nebo smazat tak, že přejdete na **Ultimate Multisite > Products** a najedete myší na název stávajícího produktu.

![Akce při najetí na produkt](/img/config/product-hover-actions.png)
