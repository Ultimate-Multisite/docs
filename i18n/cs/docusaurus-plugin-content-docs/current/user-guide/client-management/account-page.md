---
title: Stránka účtu klienta
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Stránka účtu vašeho klienta (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Když si zákazníci předplatí tarif ve vaší síti, získají přístup k webu a jeho nástěnce s důležitými informacemi o jejich platbách, členstvích, doménách, omezeních tarifu atd.

V tomto návodu vás provedeme stránkou účtu zákazníka a ukážeme vám, co vaši zákazníci mohou vidět a dělat.

## Stránka účtu

Stránka účtu je přístupná kliknutím na **Účet** v nástěnce vašeho zákazníka.

![Nabídka Účet v nástěnce zákazníka](/img/admin/dashboard.png)

![Přehled stránky účtu zákazníka](/img/admin/dashboard.png)

Po kliknutí zákazník uvidí přehled svého členství, fakturační adresu, faktury, domény, omezení webu a bude také moci změnit **Šablonu webu** (pokud je to ve vaší síti povoleno).

Může také změnit členství na jiný tarif nebo zakoupit další balíček či službu, kterou nabízíte. Pojďme se podívat na jednotlivé sekce.

### Přehled vašeho členství:

První blok přímo pod názvem webu vašeho zákazníka zobrazuje přehled aktuálního tarifu a služeb/balíčků, které s ním byly zakoupeny. Blok také zobrazuje číslo členství, počáteční zaplacenou částku, kolik stojí tarif a případné služby/balíčky a kolikrát bylo za toto členství účtováno. Zákazníci také vidí, zda je členství **Aktivní**, **Vypršelé** nebo **Zrušené**.

![Přehled členství zobrazující tarif, částku a fakturační údaje](/img/admin/memberships-list.png)

Přímo pod tímto blokem zákazníci vidí bloky **O tomto webu** a **Limity webu**. Tyto bloky jim zobrazují všechna omezení jejich tarifu: místo na disku, příspěvky, stránky, návštěvy atd. Tyto limity lze nastavit na stránce každého tarifu v **Ultimate Multisite > Produkty**.

![Bloky O tomto webu a Limity webu zobrazující omezení tarifu](/img/admin/dashboard.png)

Na pravé straně **Vašeho členství** mohou zákazníci kliknout na **Změnit**. Zobrazí se jim všechny dostupné tarify a balíčky/služby. Pokud si vyberou jiný tarif, začnou platit omezení nového tarifu místo aktuálních omezení členství – bez ohledu na to, zda přecházejí na nižší nebo vyšší tarif.

Pokud si však zákazníci zvolí zakoupení balíčků nebo služeb pro stávající členství – jako více místa na disku nebo návštěv – aktuální členství se nezmění, pouze se k němu přidají nové balíčky.

Upozorňujeme, že na této stránce změny členství nelze přidávat slevové kódy. Pokud zákazník použil slevový kód při prvním nákupu členství, kód se automaticky uplatní i na toto nové členství.

### Aktualizace fakturační adresy:

Na stránce účtu mohou zákazníci také aktualizovat svou fakturační adresu. Stačí kliknout na **Aktualizovat** vedle _Fakturační adresy_.

![Sekce Fakturační adresa s tlačítkem Aktualizovat](/img/admin/customers-list.png)

Zákazníkovi se zobrazí nové okno. Stačí vyplnit novou adresu a kliknout na _Uložit změny_.

![Formulář pro aktualizaci fakturační adresy](/img/admin/customers-list.png)

### Změna šablony webu:

Abyste umožnili zákazníkům měnit šablony jejich webů, přejděte do **Ultimate Multisite > Nastavení > Weby** a zapněte možnost **Povolit přepínání šablon**.

Dále v **Ultimate Multisite > Produkty** vyberte své tarify a přejděte na kartu **Šablony webu**. Ujistěte se, že je zapnutá možnost **Povolit šablony webu** a v **Režimu výběru šablony webu** je vybrána možnost **Vybrat dostupné šablony webu**.

![Karta Šablony webu produktu s režimem výběru šablon](/img/config/product-site-templates.png)

Uvidíte všechny dostupné šablony webu. Vyberte, které chcete zpřístupnit a které nemají být dostupné pro zákazníky předplácející tento tarif. Tato nastavení ovlivňují také formulář objednávky, takže šablony označené jako **Nedostupné** se nezobrazí na registrační stránce pro tento tarif.

Nyní mohou zákazníci kliknout na **Změnit šablonu webu** na stránce svého účtu.

![Tlačítko Změnit šablonu webu na stránce účtu](/img/admin/dashboard.png)  
Zákazníkovi se zobrazí seznam všech dostupných šablon webu pro tento tarif.

![Seznam dostupných šablon webu pro tarif](/img/config/site-templates-list.png)

Po výběru šablony, na kterou chtějí přejít, budou požádáni o potvrzení změny.

![Dialog pro potvrzení přepnutí šablony webu](/img/admin/dashboard.png)

Po zaškrtnutí potvrzení a kliknutí na **Provést přepnutí** se na webu zákazníka použije nová šablona webu.

### Přidání vlastních domén:

Zákazníci mají také možnost přidat vlastní doménu pro tento tarif na stránce svého účtu. Abyste zákazníkům umožnili používat vlastní domény, přejděte do **Ultimate Multisite > Nastavení > Mapování domén**.

Zapněte možnost **Povolit mapování domén**. To umožní vašim zákazníkům používat vlastní domény na úrovni celé sítě.

Nezapomeňte také zkontrolovat, zda je mapování domén povoleno na úrovni produktu – protože můžete omezit produkt tak, aby zákazníkům nepovoloval používání vlastních domén.

Přejděte do **Ultimate Multisite > Produkty**. Vyberte požadovaný tarif a přejděte na kartu **Vlastní domény**. Zapněte možnost **Povolit vlastní domény**.

![Karta Vlastní domény s přepínačem Povolit vlastní domény](/img/config/product-custom-domains.png)

Tím umožníte všem zákazníkům předplácejícím tento konkrétní tarif používat vlastní domény. Nyní mohou zákazníci na stránce Účtu přidat vlastní doménu kliknutím na **Přidat doménu**.

![Tlačítko Přidat doménu na stránce účtu](/img/admin/domains-list.png)

První okno, které se otevře, zobrazí zákazníkům zprávu s pokyny, jak aktualizovat DNS záznamy, aby vlastní doména fungovala ve vaší síti.

![Pokyny k DNS zobrazené při přidávání vlastní domény](/img/admin/domains-list.png)

Tuto zprávu můžete upravit v **Ultimate Multisite > Nastavení > Mapování domén > Pokyny pro přidání nové domény**.

![Nastavení Pokyny pro přidání nové domény v Mapování domén](/img/config/settings-domain-mapping.png)

Po kliknutí na **Další krok** mohou zákazníci zadat název své vlastní domény a zvolit, zda bude tato vlastní doména primární. Zákazníci mohou pro své weby používat více vlastních domén, takže si mohou vybrat, která bude primární.

![Zadání názvu vlastní domény s možností primární domény](/img/admin/domains-list.png)

Po kliknutí na **Přidat doménu** se doména přidá k účtu zákazníka. Nyní stačí změnit DNS záznamy této vlastní domény u registrátora domény.

### Změna hesla:

V nástěnce účtu mohou zákazníci také změnit své heslo kliknutím na **Změnit heslo**.

![Tlačítko Změnit heslo na stránce účtu](/img/admin/dashboard.png)

Zobrazí se nové okno, kde zákazníci vyplní své aktuální heslo a poté zadají nové heslo, které chtějí používat.

![Formulář pro změnu hesla s poli pro aktuální a nové heslo](/img/admin/dashboard.png)

### Nebezpečná zóna:

V části **Nebezpečná zóna** máme také dvě možnosti: **Smazat web** a **Smazat účet**. Obě jsou v nebezpečné zóně, protože tyto akce jsou nevratné. Pokud zákazníci smažou svůj web nebo účet, nemohou je obnovit.

![Nebezpečná zóna s možnostmi Smazat web a Smazat účet](/img/admin/dashboard.png)

Pokud zákazníci kliknou na některou z těchto možností, zobrazí se jim okno, kde musí zaškrtnout potvrzení odstranění webu nebo účtu a budou upozorněni, že tuto akci nelze vrátit zpět.

![Dialog pro potvrzení smazání webu](/img/admin/dashboard.png)

![Dialog pro potvrzení smazání účtu](/img/admin/dashboard.png)

Pokud smažou svůj web, jejich účet a členství zůstanou nedotčené. Ztratí pouze veškerý obsah na svém webu. Pokud smažou svůj účet, ztratí se všechny weby, členství a informace spojené s tímto účtem.
