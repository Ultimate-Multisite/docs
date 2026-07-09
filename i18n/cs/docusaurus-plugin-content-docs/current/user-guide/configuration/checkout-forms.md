---
title: Formuláře pokladny
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formuláře pokladny

Formuláře pokladny jsou snadný a flexibilní způsob, jak experimentovat s různými přístupy při snaze získat nové zákazníky.

Ultimate Multisite 2.0 nabízí editor formulářů pokladny, který vám umožňuje vytvořit tolik formulářů, kolik chcete, s různými poli, nabízenými produkty atd.

Pro přístup k této funkci přejděte do menu Formuláře pokladny v levém postranním panelu.

![Seznam formulářů pokladny](/img/config/checkout-forms-list.png)

Na této stránce vidíte všechny formuláře pokladny, které máte.

Tabulka seznamu obsahuje sloupec **Stav**, abyste mohli ověřit, zda je každý formulář aktuálně dostupný zákazníkům:

| Stav | Význam |
|---|---|
| **Aktivní** | Formulář lze použít kdekoli, kde je zveřejněn jeho shortcode nebo registrační stránka. |
| **Neaktivní** | Formulář je uložený, ale zakázaný. Zákazníci s ním nemohou dokončit checkout, dokud ho znovu nepovolíte. |

Použijte sloupec stavu před úpravou veřejného registračního procesu, zejména když vedle svých živých formulářů uchováváte koncepty nebo sezónní formuláře pokladny.

Pokud chcete vytvořit nový, stačí kliknout na Přidat formulář pokladny v horní části stránky.

Jako výchozí bod můžete vybrat jednu z těchto tří možností: jeden krok, více kroků nebo prázdný. Poté klikněte na Přejít do editoru.

Když jako výchozí bod zvolíte **jeden krok** nebo **více kroků**, šablona formuláře nyní ve výchozím nastavení obsahuje pole **Výběr šablony**. Toto pole umožňuje vašim zákazníkům vybrat šablonu webu během registračního procesu. Můžete ho ponechat na místě, odstranit nebo přesunout jako jakékoli jiné pole v editoru.

![Editor formuláře pokladny](/img/config/checkout-form-editor.png)

Případně můžete upravit nebo duplikovat formuláře, které už máte, kliknutím na možnosti pod jejich názvem. Tam také najdete možnosti zkopírovat shortcode formuláře nebo formulář smazat.

![Akce formuláře pokladny při najetí myší](/img/config/checkout-form-hover-actions.png)

#### Přehled editoru formuláře pokladny

Editor formulářů pokladny poskytuje komplexní rozhraní pro vytváření vašich registračních formulářů. Zde je přehled rozvržení editoru:

![Přehled editoru formuláře pokladny](/img/config/checkout-form-editor-overview.png)

### Úprava formuláře pokladny

Formuláře pokladny můžete vytvářet pro různé účely. V tomto příkladu budeme pracovat na registračním formuláři.

Po přechodu do editoru formuláře pokladny dejte formuláři název (bude použit pouze pro interní odkaz) a slug (použitý například k vytvoření shortcodů).

![Editor formuláře pokladny](/img/config/checkout-form-editor.png)

Formuláře se skládají z kroků a polí. Nový krok můžete přidat kliknutím na Přidat nový krok pokladny.

![Přidat nový krok pokladny](/img/config/checkout-form-add-step.png)

Na první kartě modálního okna vyplňte obsah kroku svého formuláře. Zadejte mu ID, název a popis. Tyto položky se většinou používají interně.

![Karta obsahu kroku formuláře pokladny](/img/config/checkout-form-step-content.png)

Dále nastavte viditelnost kroku. Můžete vybrat mezi možnostmi „Vždy zobrazit“, „Zobrazit pouze přihlášeným uživatelům“ nebo „Zobrazit pouze hostům“.

![Karta viditelnosti kroku formuláře pokladny](/img/config/checkout-form-step-visibility.png)

Nakonec nakonfigurujte styl kroku. Tato pole jsou volitelná.

![Karta stylu kroku formuláře pokladny](/img/config/checkout-form-step-style.png)

Nyní je čas přidat pole do našeho prvního kroku. Stačí kliknout na Přidat nové pole a vybrat typ sekce, který chcete.

![Krok formuláře pokladny s poli](/img/config/checkout-form-step-with-fields.png)

Každé pole má různé parametry k vyplnění. Pro tento první vstup vybereme pole „Uživatelské jméno“.

![Rozbalovací nabídka výběru typu pole](/img/config/checkout-form-field-type-dropdown.png)

![Nastavení obsahu pole uživatelského jména](/img/config/checkout-form-username-content.png)

![Nastavení viditelnosti pole uživatelského jména](/img/config/checkout-form-username-visibility.png)

![Nastavení stylu pole uživatelského jména](/img/config/checkout-form-username-style.png)

Můžete přidat tolik kroků a polí, kolik potřebujete. Chcete-li zobrazit své produkty, aby si vaši zákazníci mohli jeden vybrat, použijte pole Cenová tabulka. Pokud chcete svým klientům umožnit výběr šablony, přidejte pole Výběr šablony. A tak dále.

![Dialog Přidat nové pole](/img/config/checkout-form-add-field-dialog.png)

_**Poznámka:** uživatelské jméno, e-mail, heslo, název webu, URL webu, souhrn objednávky, platba a tlačítko odeslání jsou povinná pole pro vytvoření formuláře pokladny._

Když pracujete na formuláři pokladny, můžete kdykoli použít tlačítko Náhled a podívat se, jak formulář uvidí vaši klienti. Můžete také přepínat mezi zobrazením jako existující uživatel nebo návštěvník

![Tlačítko náhledu formuláře pokladny](/img/config/checkout-form-preview-button.png)

![Modální okno náhledu formuláře pokladny](/img/config/checkout-form-preview-modal.png)

Nakonec můžete v Pokročilých možnostech nakonfigurovat zprávu pro stránku „Děkujeme“, přidat úryvky pro sledování konverzí, přidat vlastní CSS do formuláře pokladny nebo ho omezit na určité země.

![Pokročilé možnosti](/img/config/checkout-form-advanced.png)

Formulář pokladny můžete také ručně povolit nebo zakázat přepnutím této možnosti v pravém sloupci, případně formulář trvale smazat.

![Přepínač Aktivní](/img/config/checkout-form-active.png)

Chcete-li formulář smazat, klikněte na možnost smazání v akcích formuláře:

![Možnost smazání formuláře pokladny](/img/config/checkout-form-delete.png)

Nezapomeňte uložit svůj formulář pokladny!

![Tlačítko Uložit](/img/config/checkout-form-save.png)

Chcete-li získat shortcode svého formuláře, klikněte na Generovat shortcode a zkopírujte výsledek zobrazený v modálním okně.

![Tlačítko Uložit se shortcodem](/img/config/checkout-form-save.png)

### Pole Cenová tabulka

Pole **Cenová tabulka** zobrazuje vaše produkty ve formuláři pokladny, aby si zákazníci mohli vybrat plán. Když toto pole upravujete, můžete nakonfigurovat několik možností:

![Nastavení pole Cenová tabulka](/img/config/pricing-table-field-settings.png)

Takto se cenová tabulka zobrazuje v registračním formuláři na frontendu:

![Cenová tabulka checkoutu na frontendu](/img/config/frontend-checkout-pricing-table.png)

  * **Produkty**: Vyberte, které produkty se mají zobrazit a v jakém pořadí se objeví.
  * **Vynutit různé doby trvání**: Když je povoleno, zobrazí se všechny produkty bez ohledu na to, zda mají odpovídající cenovou variantu pro aktuálně vybrané fakturační období. Když je zakázáno (výchozí), produkty bez varianty pro vybrané období jsou skryté.
    ![Možnost vynucení dob trvání v cenové tabulce](/img/config/pricing-table-force-durations.png)
  * **Skrýt při předvýběru**: Skryje cenovou tabulku, když už byl plán vybrán přes URL (např. `/register/premium`).
  * **Šablona cenové tabulky**: Vyberte vizuální šablonu pro cenovou tabulku (Jednoduchý seznam, Legacy atd.).

Pokud přidáte produkt do cenové tabulky dříve, než formulář obsahuje pole potřebná k dokončení checkout toku daného produktu, editor nyní zobrazí varování. Pomocí varování přidejte chybějící povinné pole před publikováním nebo uložením změn pro živý registrační formulář.

### Přidání přepínače výběru období

Pokud jste u svých produktů nakonfigurovali [cenové varianty](creating-your-first-subscription-product#price-variations) (např. měsíční a roční ceny), můžete do svého checkout formuláře přidat pole **Výběr období**. Toto pole zobrazí přepínač, který zákazníkům umožní přepínat mezi fakturačními obdobími, a cenová tabulka se bude dynamicky aktualizovat v reálném čase.

#### Krok 1: Nastavte cenové varianty u svých produktů

Před přidáním pole Výběr období se ujistěte, že vaše produkty mají nakonfigurované cenové varianty. Přejděte na **Ultimate Multisite > Produkty**, upravte produkt a přejděte na kartu **Cenové varianty**, kde přidáte alternativní fakturační období (např. roční za zvýhodněnou cenu).

![Karta Cenové varianty u produktu](/img/config/product-price-variations-tab.png)

#### Krok 2: Přidejte pole Výběr období do svého checkout formuláře

1. Přejděte na **Ultimate Multisite > Checkout formuláře** a upravte svůj checkout formulář.

2. Posuňte se dolů ke kroku, který obsahuje vaše pole **Cenová tabulka**, a klikněte na **Přidat nové pole**.

3. V dialogu pro výběr typu pole klikněte na **Výběr období**.

![Dialog Přidat nové pole zobrazující Výběr období](/img/config/checkout-form-add-field-dialog.png)

4. Nakonfigurujte možnosti období. Každá možnost potřebuje:
   * **Doba trvání**: Číslo (např. `1`)
   * **Jednotka doby trvání**: Typ období (dny, týdny, měsíce nebo roky)
   * **Popisek**: Text, který zákazníci uvidí (např. „Měsíčně“, „Ročně“)

5. Kliknutím na **+ Přidat možnost** přidejte další volby období. Tyto možnosti musí odpovídat cenovým variantám, které jste nakonfigurovali u svých produktů.

![Nastavení pole Výběr období](/img/config/period-selection-field-settings.png)

6. Vyberte **Šablonu výběru období** (Clean je výchozí, vykresluje jednoduchý stylovaný selektor připravený pro vlastní CSS).

7. Klikněte na **Uložit pole**.

#### Krok 3: Umístěte pole nad cenovou tabulku

Pro nejlepší uživatelský zážitek zajistěte, aby se pole Výběr období objevilo **před** polem Cenová tabulka ve vašem checkout kroku. Pole můžete v editoru checkout formuláře přetahovat a měnit tak jejich pořadí. Zákazníci si tak nejprve vyberou fakturační období a poté uvidí ceny pro dané období.

![Editor checkout formuláře zobrazující pořadí polí](/img/config/checkout-form-editor-with-fields.png)

#### Jak to funguje na frontendu

Po nakonfigurování zákazníci, kteří navštíví vaši registrační stránku, uvidí selektor období nad cenovou tabulkou. Když kliknou na jiné fakturační období:

  * Cenová tabulka se okamžitě aktualizuje a zobrazí ceny pro vybrané období (bez nutnosti znovu načítat stránku).
  * Pokud je u pole Cenová tabulka zakázáno **Vynutit různé doby trvání**, produkty bez cenové varianty pro vybrané období budou skryté.
  * Pokud je **Vynutit různé doby trvání** povoleno, všechny produkty zůstanou viditelné, i když nemají variantu pro vybrané období (zobrazí svou výchozí cenu).

#### Předvýběr fakturačního období přes URL

Produkt a fakturační období můžete také předvybrat prostřednictvím URL. Ultimate Multisite podporuje tyto vzory URL:

  * `/register/premium` — Předvybere pouze produkt „Premium“
  * `/register/premium/12` — Předvybere produkt a 12měsíční dobu trvání
  * `/register/premium/1/year` — Předvybere produkt s 1letou dobou trvání

### Pole Výběr šablony

Pole **Výběr šablony** umožňuje zákazníkům vybrat si šablonu webu během checkoutu. Nyní je ve výchozím nastavení zahrnuto v šablonách checkout formuláře **jednokrokový** a **vícekrokový** přidaných v Ultimate Multisite v2.6.1.

#### Ruční přidání pole

Pokud pracujete s formulářem, který byl vytvořen před verzí v2.6.1, nebo jste začali z prázdné šablony:

1. Přejděte na **Ultimate Multisite > Checkout formuláře** a upravte svůj checkout formulář.
2. V kroku, kde se shromažďují údaje o webu, klikněte na **Přidat nové pole**.
3. V dialogu typu pole vyberte **Výběr šablony**.
4. Nakonfigurujte pole:
   - **Popisek** — Nadpis, který zákazníci uvidí nad mřížkou šablon (např. „Vyberte šablonu webu“).
   - **Povinné** — Zda si zákazníci musí před pokračováním vybrat šablonu.

#### Jak to funguje

Když si zákazník během checkoutu vybere šablonu, Ultimate Multisite ji použije při zřizování jeho nového webu. Zobrazené šablony pocházejí z vašeho seznamu **Šablony webů** (**Ultimate Multisite > Šablony webů**). Zde se zobrazí pouze šablony označené jako dostupné zákazníkům.

### Základní domény checkout formulářů

Ultimate Multisite v2.13.0 zachází s doménami nakonfigurovanými v polích **URL webu** checkout formuláře jako se základními doménami sítě. Použijte nastavení dostupných domén daného pole, když chcete, aby zákazníci vytvářeli weby pod jednou nebo více sdílenými registračními doménami, například `example.com` a `sites.example.com`.

Sdílené základní domény checkout formulářů nejsou považovány za mapování vlastních domén pro jednotlivé weby. Když zákazník vytvoří web v podadresáři na jedné z těchto základních domén, Ultimate Multisite nevytvoří záznam mapované domény, který by způsobil, že sdílený host bude patřit pouze tomuto jednomu webu. Sdílený host zůstává dostupný pro sesterské weby, které používají stejný základ checkout formuláře.

Vlastní domény používejte pro mapované hosty jednotlivých zákazníků, například `customer-example.com`. Základní domény checkout formulářů používejte pro sdílené registrační hosty, které může využívat mnoho webů.

#### Odebrání pole

Pokud nenabízíte šablony webů, odeberte z formuláře pole Výběr šablony. Zákazníci pak obdrží tu výchozí šablonu, která je nakonfigurovaná v části **Ultimate Multisite > Settings > Site Templates**.
