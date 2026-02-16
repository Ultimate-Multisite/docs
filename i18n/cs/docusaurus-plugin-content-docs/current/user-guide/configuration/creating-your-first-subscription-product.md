---
title: Vytvoření vašeho prvního předplatného produktu
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Vytvoření vašeho prvního předplatného produktu (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek je určen pouze pro uživatele Ultimate Multisite verze 2.x. Pokud používáte verzi 1.x,**_ **_**podívejte se na tento článek**_**.

Abyste mohli provozovat svou síť a začít nabízet služby potenciálním uživatelům, potřebujete mít různé možnosti předplatného. Jak takové produkty vytvořit? Jaké typy produktů můžete nabízet? V tomto článku se dozvíte vše potřebné o produktech.

## Typ produktu

S Ultimate Multisite můžete svým klientům nabízet dvě kategorie produktů: **plány** a **doplňky** **(Order Bump)**. Doplňky se dělí na dva typy: **balíčky** a **služby**. Jejich rozdíly a specifika si ukážeme dále.

  * **Plány**: základní produkt Ultimate Multisite. Váš klient může mít členství pouze tehdy, pokud je připojeno k plánu. Plán poskytuje vašim klientům jeden nebo více webů (záleží na konfiguraci plánu) s omezeními, která nastavíte na stránce úprav produktu.

  * **Balíčky**: doplňky, které přímo ovlivňují funkce plánů Ultimate Multisite. Mění omezení nebo přidávají nové zdroje, pluginy či šablony k původnímu plánu, který si klient zakoupil. Například základní plán může umožňovat 1 000 návštěv měsíčně a vy můžete nabídnout balíček, který tento počet rozšíří na 10 000.

  * **Služby**: doplňky, které nemění funkce Ultimate Multisite. Jsou to úkoly, které provedete pro klienta navíc k zakoupenému plánu. Například váš zákazník si může koupit plán umožňující jeden web a zároveň zaplatit za extra službu vytvoření designu tohoto webu.

## Správa produktů

Pro mnohé lze záložku **Produkty** v Ultimate Multisite **(Ultimate Multisite > Products)** přirovnat k plánům v tradičním hostingovém prostředí.

V Ultimate Multisite záložka Produkty definuje strukturu a omezení platná pro konkrétní produkt nebo službu. Tyto struktury zahrnují popis produktu nebo služby, cenu, daně a oprávnění.

Tato sekce vám pomůže pochopit tento základní pilíř Ultimate Multisite.

![Stránka se seznamem produktů](/img/config/products-list.png)

## Přidání produktů

Ať už jde o plán, balíček nebo službu, vstupním bodem pro definici nové položky je **Ultimate Multisite > Products > Add Product**.

![Tlačítko Přidat produkt](/img/config/product-add-button.png)

Rozhraní obsahuje dvě hlavní sekce. Vlevo je několik záložek, které pomáhají s definicí produktu, a vpravo několik sekcí pro nastavení základní ceny produktu, jeho aktivního stavu a obrázku produktu.

![Přehled stránky úprav produktu](/img/config/product-edit-full.png)

### Popis

Základní informace o produktu můžete definovat zadáním názvu a popisu produktu. Tyto identifikátory se zobrazují všude, kde jsou vyžadovány informace o produktu – například při výběru plánu a ceny, na fakturách, při upgradech a podobně.

![Sekce popisu produktu](/img/config/product-description.png)

### Typ ceny

Na pravé straně rozhraní lze definovat základní cenu.

![Sekce ceny a uložení](/img/config/product-pricing-save.png)

Ultimate Multisite podporuje tři různé typy cen. Volba **paid** (placený) vyzve správce sítě k zadání informací o ceně produktu a frekvenci fakturace.

### Cena

Komponenta ceny definuje základní cenu produktu a fakturační interval.

![Sekce ceny a uložení](/img/config/product-pricing-save.png)

Například cena 29,99 $ s nastavením 1 měsíc bude účtovat 29,99 $ každý měsíc. Obdobně cena 89,97 $ s nastavením 3 měsíce bude účtovat tuto částku každé čtvrtletí.

### Fakturační cykly

Sekce fakturačních cyklů určuje frekvenci výše zmíněného fakturačního intervalu a obecně se chápe v kontextu smluv nebo pevných období.

![Sekce ceny a uložení](/img/config/product-pricing-save.png)

Například cena produktu 29,99 $ s intervalem 1 měsíc a 12 fakturačními cykly bude účtovat 29,99 $ měsíčně za produkt po následujících 12 měsíců. Jinými slovy, takové nastavení vytvoří pevnou cenovou podmínku 29,99 $ měsíčně po dobu 12 měsíců a poté se fakturace zastaví.

### Zkušební období

Zapnutí přepínače nabídky zkušebního období umožňuje správci sítě definovat zkušební dobu pro produkt.

![Sekce ceny a uložení](/img/config/product-pricing-save.png)

Během zkušebního období mohou zákazníci produkt volně používat a nebude jim účtováno, dokud zkušební období neskončí.

### Aktivační poplatek

K vašemu plánu můžete také přidat aktivační poplatek.

![Sekce ceny a uložení](/img/config/product-pricing-save.png)

To znamená, že váš klient zaplatí při první platbě extra částku (navíc k ceně plánu), která odpovídá poplatku definovanému v této sekci.

### Aktivní

Přepínač aktivní efektivně určuje, zda je produkt dostupný zákazníkům pro nové registrace.

![Přepínač Aktivní](/img/config/product-active.png)

Pokud jsou na tomto plánu stávající zákazníci, nastavení přepínače do vypnutého stavu plán prakticky „zakonzervuje" a odstraní ho z budoucích registrací. **Stávajícím zákazníkům na plánu bude nadále účtováno**, dokud nebudou převedeni na nový plán nebo z plánu odstraněni.

### Obrázek produktu

Tlačítko **Upload Image** umožňuje správci sítě využít knihovnu médií k výběru nebo nahrání obrázku produktu.

![Sekce obrázku produktu](/img/config/product-image.png)

### Smazání

Tlačítko **Delete Product** smaže produkt ze systému. Objeví se po publikování produktu.

![Sekce smazání produktu](/img/config/product-delete.png)

Na rozdíl od jiných smazání není produkt přesunut do koše. Po smazání je akce nevratná.

### Možnosti produktu

Jakmile jsou definovány základní informace o produktu, možnosti produktu pomáhají správci sítě dále specifikovat konkrétní atributy produktu.

#### Obecné

Záložka **General** definuje obecné atributy produktu, které nespadají do žádné z dalších specifických záložek produktu.

![Záložka Obecné](/img/config/product-general-tab.png)

Samovysvětlující **product slug** definuje slug, kterým je produkt identifikován v URL adresách a dalších oblastech Ultimate Multisite.

Ultimate Multisite podporuje několik typů produktů, jmenovitě Plan, Package a Service. Záložky **Product Options** se dynamicky upravují podle zvoleného typu produktu.

**Customer Role** určuje roli, která je zákazníkovi přiřazena při vytvoření webu. Pro většinu správců sítě to bude výchozí role Ultimate Multisite nebo Administrator. Výchozí roli Ultimate Multisite lze nastavit v **Ultimate Multisite > Settings > Login & Registration**.

![Nastavení role zákazníka](/img/config/product-customer-role-settings.png)

#### Upgrady a downgrady

Tato záložka určuje cesty upgradu a downgradu dostupné zákazníkovi v rámci jeho konkrétní úrovně.

Pro pochopení tohoto konceptu si představte příklad, kdy specializovaná instalace Ultimate Multisite poskytuje svým zákazníkům řešení pro správu vzdělávání. K dosažení tohoto cíle jsou definovány tři plány (Basic, Plus a Premium) a pro každý plán jsou aktivovány specifické pluginy (návod na aktivaci pluginů najdete dále v této sekci).

Pokud instalace Ultimate Multisite obsluhuje také firemní weby nebo e-commerce weby, tyto plány mohou vyžadovat instalaci a aktivaci jiných pluginů.

V tomto rozsahu by bylo nežádoucí a problematické umožnit zákazníkům e-learningu přechod na e-commerce plány, protože tyto plány, ceny a omezení nemusí být vhodné.

Proto může správce sítě definovat skupinu plánů a v rámci této skupiny specifikovat plány, na které může zákazník přejít, čímž omezí cestu zákazníka a předejde incidentům.

![Záložka Upgrady a downgrady](/img/config/product-upgrades.png)

Pro definici skupiny plánů specifikujte kompatibilní plány v seznamu **plan group**. **Product order** určuje, jak jsou plány seřazeny a zobrazeny od nejnižšího po nejvyšší.

Ultimate Multisite také obsahuje funkci **order bump**, kde lze k plánům přidat vhodné doplňkové produkty a služby. Ty jsou zákazníkovi nabízeny jako dodatečné položky, které lze přidat k plánům při platbě nebo během upgradu.

#### Cenové varianty

Cenové varianty umožňují správci sítě specifikovat alternativní cenové úrovně v závislosti na délce trvání. Toto nastavení umožňuje vytvořit cenové úrovně pro 3 měsíce, 6 měsíců nebo roční předplatné, případně jakoukoli jinou délku a frekvenci podle konkrétního případu použití.

![Záložka Cenové varianty](/img/config/product-price-variations.png)

Pro nastavení cenových variant přepněte **enable price variations** do aktivního stavu a klikněte na tlačítko **Add new Price Variation**.

Pro zadání varianty nastavte délku, období a cenu varianty. Další varianty lze zadat opětovným kliknutím na tlačítko.

![Záložka Cenové varianty](/img/config/product-price-variations.png)

#### Daně

Záložka **Taxes** odpovídá nastavení daní specifikovanému v **Ultimate Multisite > Settings > Taxes** a konkrétněji definovaným daňovým sazbám. Pro povolení daní a definici platných daňových sazeb si prosím prostudujte dokumentaci **Ultimate Multisite: Settings**

![Záložka Daně](/img/config/product-taxes.png)

V předchozím příkladu jsme definovali místní daňovou sazbu 7,25 % platnou pro zákazníky v Kalifornii (Spojené státy americké).

Jakmile je daňová sazba definována v **Ultimate Multisite > Settings > Manage Tax Rates**, lze ji vybrat na úrovni produktu.

![Záložka Daně](/img/config/product-taxes.png)

Pro označení produktu jako zdanitelné položky přepněte **Is Taxable** do aktivního stavu a vyberte příslušnou daňovou sazbu z rozbalovací nabídky Tax Category.

#### Šablony webů

Šablony webů jsou v podstatě kompletní WordPress weby, které jsou naklonovány na web zákazníka na začátku jeho předplatného.

![Záložka Šablony webů](/img/config/product-site-templates.png)

Správce sítě vytvoří a nakonfiguruje šablonu webu jako běžný WordPress web s aktivovanými a nakonfigurovanými šablonami vzhledu, pluginy a obsahem. Šablona webu je zákazníkovi naklonována doslovně.

Tato záložka umožňuje správci sítě specifikovat chování šablon webů při novém předplatném. Pro použití šablon webů přepněte **allow site templates** do aktivního stavu.

**Site template selection mode** definuje chování šablon webů během procesu předplatného.

Nastavení **Default** následuje kroky ve formuláři objednávky. Pokud správce sítě definoval krok výběru šablony v procesu objednávky a krok byl definován se šablonami, toto nastavení bude respektovat direktivy stanovené v kroku objednávky.

Volba **Assign Site Template** vynutí výběr specifikované šablony. V důsledku toho jsou všechny kroky výběru šablony v procesu objednávky odstraněny.

A konečně **Choose Available Site Templates** přepíše šablony specifikované v kroku objednávky šablonami vybranými v tomto nastavení. Lze také definovat předvybranou šablonu, která zákazníkovi usnadní výběr.

Pokud si správce sítě přeje, aby výběr šablony probíhal v krocích objednávky, postačí nastavení „_default_". Alternativně pro odstranění a uzamčení výběru šablony a delegování výběru na nastavení plánu mohou být žádoucí možnosti „_assign new template_" nebo „_choose available site templates_".

#### Weby

Záložka **Sites** je součástí funkcionality omezení Ultimate Multisite.

![Záložka Weby](/img/config/product-sites.png)

Toto nastavení specifikuje maximální počet webů, které může zákazník vytvořit v rámci svého členství.

Pro povolení omezení přepněte **limit sites** do aktivního stavu a specifikujte maximální počet webů v poli **site allowance**.

#### Návštěvy

Záložka **Visits** je další součástí systému omezení Ultimate Multisite. Toto nastavení umožňuje sledování a následné omezování unikátních návštěvníků webu zákazníka.

![Záložka Návštěvy](/img/config/product-visits.png)

Z marketingového pohledu mohou správci sítě využít toto nastavení jako prostředek k povzbuzení zákazníků k upgradu plánu po dosažení limitů. Toto nastavení může také pomoci správci sítě omezit a zabránit nadměrnému provozu na webech a zachovat systémové zdroje.

Pro využití této funkce přepněte **limit unique visits** do aktivního stavu a specifikujte maximální počet unikátních návštěvníků v poli **unique visits quota**.

Po dosažení tohoto limitu Ultimate Multisite přestane zobrazovat web zákazníka a místo toho zobrazí zprávu o překročení limitů.

#### Uživatelé

Omezení „Users" v Ultimate Multisite umožňují správci sítě stanovit limity na počet uživatelů, kteří mohou být vytvořeni a přiřazeni k rolím.

![Záložka Uživatelé](/img/config/product-users.png)

Pro povolení funkce omezení přepněte **limit user** do aktivního stavu posunutím doprava.

Dále pro každou roli, která má být omezena, přepněte přepínač vedle ní do aktivního stavu a definujte maximální horní limit v příslušném poli.

#### Typy příspěvků

Záložka **Post Types** umožňuje správci sítě stanovit detailní limity na rozsáhlou škálu typů příspěvků v rámci WordPress.

![Záložka Typy příspěvků](/img/config/product-post-types.png)

Vzhledem ke konstrukci WordPress jsou příspěvky a typy příspěvků významnou součástí jeho základní funkcionality, a proto je systém omezení Ultimate Multisite navržen tak, aby pomohl správci sítě při stanovení a udržování limitů.

Pro povolení tohoto subsystému omezení přepněte **limit post types** do aktivního stavu posunutím doprava.

Dále pro každý typ příspěvku, který má být omezen, jej zapněte posunutím doprava a specifikujte maximální horní limit v příslušném poli.

#### Diskový prostor

Záložka **Disk Space** umožňuje správcům sítě omezit prostor spotřebovávaný zákazníky.

![Záložka Diskový prostor](/img/config/product-disk-space.png)

Typicky ve WordPress multisite jsou základní soubory sdíleny mezi všemi weby a pro soubory médií a uploady jsou vytvořeny individuální adresáře, na které se tato nastavení a omezení vztahují.

Pro povolení omezení využití disku přepněte **limit disk size per site** do aktivního stavu posunutím doprava.

Dále specifikujte maximální horní limit v megabajtech v poli **disk space allowance**.

#### Vlastní doména

Přepnutím této možnosti můžete povolit vlastní domény konkrétně na tomto plánu.

![Záložka Vlastní domény](/img/config/product-custom-domains.png)

#### Šablony vzhledu

Záložka **Themes** v možnostech produktu umožňuje správci sítě zpřístupnit šablony vzhledu zákazníkům pro výběr a volitelně vynutit stav šablony.

![Záložka Šablony vzhledu](/img/config/product-themes.png)

_**Poznámka: Aby byly šablony vzhledu dostupné zákazníkům, musí být povoleny na úrovni sítě správcem sítě.**_

![Stránka síťových šablon vzhledu](/img/config/product-themes-network-enabled.png)

Možnost **visibility** definuje, zda je tato šablona vzhledu viditelná pro zákazníka při prohlížení záložky **Appearance > Themes** na jejich webu. Nastavení této možnosti na **Hidden** odstraní šablonu z pohledu a tím omezí možnost jejího výběru a aktivace.

![Záložka Šablony vzhledu](/img/config/product-themes.png)

Výběr **behavior** umožňuje správci sítě definovat stav šablony vzhledu při vytvoření webu zákazníka.

Ve stavu **Available** je šablona vzhledu zpřístupněna zákazníkovi pro vlastní aktivaci. Naopak stav **Not Available** odebírá zákazníkovi možnost aktivovat šablonu. A konečně možnost **Force Activate** vynutí výběr a aktivaci šablony, čímž ji nastaví jako výchozí při vytvoření webu.

#### Pluginy

Podobně jako záložka Themes, Ultimate Multisite umožňuje správci sítě definovat viditelnost pluginů pro zákazníky i jejich stav při vytvoření nového webu.

![Záložka Pluginy](/img/config/product-plugins.png)

Rozbalovací nabídka **visibility** umožňuje plugin buď zobrazit, nebo skrýt před zákazníkem při zobrazení na jeho webu prostřednictvím možnosti menu Plugins.

Správce sítě může dále manipulovat s chováním pluginů pomocí možností v rozbalovací nabídce behavior.

![Záložka Pluginy](/img/config/product-plugins.png)

Výběr **Default** respektuje stav pluginu definovaný v šabloně webu vybrané zákazníkem. Pluginy aktivované v šabloně tedy zůstanou aktivované, když je šablona naklonována na web zákazníka.

**Force Activate** uvede plugin do aktivního stavu při vytvoření webu a naopak **Force Inactivate** deaktivuje plugin při vytvoření webu. V obou těchto případech může zákazník ručně změnit stav pluginu prostřednictvím menu WordPress Plugins.

Nastavení **Force Activate & Lock** funguje podobně, ale zabraňuje zákazníkovi ve změně stavu pluginu. Nastavení Force Activate and Lock tedy vynutí plugin do jeho aktivního stavu a zabrání zákazníkovi v jeho deaktivaci. Podobně nastavení **Force Inactivate & Lock** vynutí plugin do jeho neaktivního stavu a zabrání uživateli v aktivaci pluginu.

Správce sítě může zvážit nastavení Force Activate & Lock a Force Inactivate & Lock v kombinaci se šablonami webů, protože pluginy a stavy pluginů v šablonách mohou být těmito nastaveními ovlivněny, pokud jsou vybrány.

#### Reset omezení

Záložka **Reset Limitations** resetuje všechny vlastní limity definované na produktu. Pro reset omezení klikněte na tlačítko **reset limitations**.

![Záložka Reset omezení](/img/config/product-reset-limitations.png)

Pro potvrzení akce přepněte **confirm reset** do aktivního stavu vpravo a klikněte na tlačítko **reset limitations**.

![Záložka Reset omezení](/img/config/product-reset-limitations.png)

## Úprava, duplikování nebo smazání produktu

Existující produkty lze upravovat, duplikovat nebo mazat přechodem na **Ultimate Multisite > Products** a najetím myší na název existujícího produktu.

![Akce při najetí na produkt](/img/config/product-hover-actions.png)
