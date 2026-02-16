---
title: Vytváření slevových kódů
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Vytváření slevových kódů (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k verzi 2.x pluginu Ultimate Multisite.**_

S Ultimate Multisite můžete vytvářet slevové kódy a nabízet tak svým klientům slevy na jejich předplatné. A je to opravdu snadné!

## Vytváření a úprava slevových kódů

Pro vytvoření nebo úpravu slevového kódu přejděte na **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Zobrazí se vám seznam slevových kódů, které jste již vytvořili.

Kliknutím na **Add Discount** **Code** vytvoříte nový kupón, nebo můžete upravit stávající tak, že na ně najedete myší a kliknete na **Edit**.

![Seznam slevových kódů s akcemi při najetí myší](/img/config/discount-codes-list.png)

![Tlačítko Add Discount Code](/img/config/discount-codes-list.png)

Budete přesměrováni na stránku, kde můžete vytvořit nebo upravit svůj slevový kód. V tomto příkladu vytvoříme nový.

![Stránka pro úpravu slevového kódu](/img/config/discount-codes-list.png)

Pojďme se podívat na dostupná nastavení:

**Enter Discount Code:** Toto je pouze název vašeho slevového kódu. Nejedná se o kód, který budou vaši zákazníci zadávat v objednávkovém formuláři.

**Description:** Zde můžete stručně popsat, k čemu je tento kupón určen.

![Pole pro název a popis slevového kódu](/img/config/discount-codes-list.png)

**Coupon code:** Zde definujete kód, který budou vaši zákazníci zadávat při dokončení objednávky.

![Pole pro kód kupónu](/img/config/discount-codes-list.png)

**Discount:** Zde můžete nastavit buď **procentuální slevu**, nebo **pevnou částku** pro váš slevový kód.

![Nastavení procentuální slevy nebo pevné částky](/img/config/discount-codes-list.png)

**Apply to renewals:** Pokud je tato možnost vypnutá, slevový kód se uplatní pouze na **první platbu**. Všechny následující platby budou bez slevy. Pokud je tato možnost zapnutá, slevový kód bude platit pro všechny budoucí platby.

**Setup fee discount:** Pokud je tato možnost vypnutá, kupón **neposkytne žádnou slevu na zřizovací poplatek** objednávky. Pokud je tato možnost zapnutá, můžete nastavit slevu (procentuální nebo pevnou částku), kterou tento kupón uplatní na zřizovací poplatek vašich tarifů.

![Možnosti Apply to renewals a Setup fee discount](/img/config/discount-codes-list.png)

**Active:** Ručně aktivujte nebo deaktivujte tento slevový kód.

![Přepínač aktivace slevového kódu](/img/config/discount-codes-list.png)

V sekci **Advanced Optio** **ns** najdete následující nastavení:

**Limit uses:**

  * **Uses:** Zde vidíte, kolikrát byl slevový kód použit.

  * **Max uses:** Toto omezuje počet použití slevového kódu. Například pokud zde zadáte 10, kupón bude možné použít pouze 10krát. Po dosažení tohoto limitu už kupón nebude možné použít.

![Nastavení limitu použití s poli Uses a Max uses](/img/config/discount-codes-list.png)**Start & expiration dates:** Zde máte možnost nastavit datum zahájení platnosti a/nebo datum vypršení platnosti kupónu.

![Pole pro datum zahájení a vypršení platnosti](/img/config/discount-codes-list.png)

**Limit products:** Pokud zapnete možnost **Select products**, zobrazí se vám všechny vaše produkty. Můžete ručně vybrat (zapnutím nebo vypnutím), které produkty mohou tento slevový kód přijmout. Produkty, které jsou zde vypnuté, nebudou na tento kupón reagovat, i když se ho vaši zákazníci pokusí použít.

![Přepínače pro výběr omezených produktů](/img/config/discount-codes-list.png)

Po nastavení všech těchto možností klikněte na **Save Discount Code** pro uložení kupónu a máte hotovo!

![Tlačítko Save Discount Code](/img/config/discount-codes-list.png)

Kupón je nyní ve vašem seznamu a odtud ho můžete **upravit nebo smazat**.

![Slevový kód v seznamu s možnostmi úpravy a smazání](/img/config/discount-codes-list.png)

### 

### Použití URL parametrů:

Pokud chcete přizpůsobit své cenové tabulky nebo vytvořit na svém webu pěknou stránku se slevovými kódy a chcete automaticky aplikovat slevový kód do objednávkového formuláře, můžete to udělat pomocí URL parametrů.

Nejprve potřebujete získat sdílitelný odkaz pro váš tarif. To uděláte tak, že přejdete na **Ultimate Multisite > Products** a vyberete tarif.

Klikněte na tlačítko **Click to Copy Shareable Link**. Tím získáte sdílitelný odkaz na tento konkrétní tarif. V našem případě jsme dostali sdílitelný odkaz [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Stránka produktu s tlačítkem pro sdílitelný odkaz](/img/config/products-list.png)

Pro aplikování slevového kódu na tento konkrétní tarif stačí přidat parametr **?discount_code=XXX** do URL. Kde **XXX** je kód kupónu.

V našem příkladu budeme aplikovat kupón **50OFF** na tento konkrétní produkt.

URL pro tento konkrétní tarif s aplikovaným slevovým kódem 50OFF bude vypadat takto: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
