---
title: Stránka Account klienta
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Stránka Account vašeho klienta (v2) {#your-clients-account-page-v2}

_**DŮLEŽITÁ POZNÁMKA: Tento článek se vztahuje k Ultimate Multisite verze 2.x.**_

Když si zákazníci předplatí plán ve vaší síti, získají přístup k webu a jeho Dashboard s důležitými informacemi o svých platbách, členstvích, doménách, omezeních plánu atd...

V tomto návodu vás provedeme stránkou Account zákazníka a uvidíte, co v ní vaši zákazníci mohou vidět a dělat.

## Stránka Account {#the-account-page}

Stránka Account je dostupná kliknutím na **Account** v Dashboard vašeho zákazníka.

![Nabídka Account v Dashboard zákazníka](/img/account-page/account-menu.png)

Na suverénních tenant sítích ponechává Ultimate Multisite v2.13.0 tuto zkušenost se správou zákazníků na hlavním webu. Pokud zákazník ze suverénního tenantu otevře akce pro účet, pokladnu, fakturaci, fakturu, správu webu, přepínání šablon nebo mapování domén, akce směřuje zpět do zákaznického panelu hlavního webu, aby záznamy o fakturaci a členství v síti zůstaly směrodatné.

Když zákazník přichází ze suverénního tenantu, zákaznický panel hlavního webu může obsahovat odkaz pro návrat zpět na tenant web. Odkaz pro návrat se zobrazí pouze tehdy, když Ultimate Multisite dokáže ověřit cíl návratu jako jeden z webů zákazníka, což zabraňuje libovolným přesměrováním a zároveň zachovává workflow tenantu.

![Přehled stránky zákaznického účtu](/img/account-page/overview.png)

Po kliknutí se zákazníkům zobrazí přehled jejich členství, fakturační adresy, faktur, domén, omezení webu a budou také moci změnit ****Šablonu webu** (pokud je to ve vaší síti povoleno)**.

Mohou také změnit členství na jiný plán nebo zakoupit další balíček či službu, kterou nabízíte. Podívejme se na jednotlivé sekce zvlášť.

### Přehled vašeho členství: {#your-membership-overview}

První blok hned pod názvem webu vašich zákazníků zobrazuje přehled jejich aktuálního plánu a služeb/balíčků, které byly spolu s ním zakoupeny. Blok také zobrazuje číslo členství, počáteční částku, která za něj byla zaplacena, kolik stojí plán a případná služba/balíček a kolikrát jim bylo toto členství účtováno. Mohou také vidět, zda je členství **Aktivní**, **Vypršelé** nebo **Zrušené**.

![Přehled členství zobrazující plán, částku a fakturační údaje](/img/account-page/membership-card.png)

Hned pod tímto blokem mohou vaši zákazníci vidět bloky **O tomto webu** a **Limity webu**. Tyto bloky jim ukazují všechna omezení, která jsou součástí jejich plánu: místo na disku, příspěvky, stránky, návštěvy atd... Tyto limity lze nakonfigurovat na stránce každého plánu v **Ultimate Multisite > Produkty**.

![Bloky O tomto webu a Limity webu zobrazující omezení plánu](/img/account-page/site-limits.png)

Na pravé straně sekce **Vaše členství** mohou zákazníci kliknout na **Změnit**. Tím se jim zobrazí všechny dostupné plány a balíčky/služby. Pokud zvolí jiný plán, začnou místo aktuálních omezení členství platit omezení daného plánu – bez ohledu na to, zda přecházejí na nižší nebo vyšší plán.

Pokud se nyní vaši zákazníci rozhodnou zakoupit balíčky nebo služby pro toto aktuální členství – například více místa na disku nebo návštěv – aktuální členství se nezmění, pouze se k němu přidají nové balíčky.

Upozorňujeme, že na této stránce změny členství nelze přidat kupónové kódy. Pokud zákazník použil kupónový kód při prvním nákupu členství, kód se použije i na toto nové členství.

### Aktualizace fakturační adresy: {#updating-the-billing-address}

Na stránce Account mohou vaši zákazníci také aktualizovat svou fakturační adresu. Stačí kliknout na **Aktualizovat** vedle _Fakturační adresa_.

![Sekce Fakturační adresa s tlačítkem Aktualizovat](/img/account-page/billing-address.png)

Zákazníkovi se zobrazí nové okno. Stačí, aby vyplnil novou adresu a klikl na _Uložit změny_.

![Formulář pro aktualizaci fakturační adresy](/img/account-page/billing-address-form.png)

### Změna šablony webu: {#changing-the-site-template}

Abyste zákazníkům umožnili měnit šablony jejich webů, musíte přejít do **Ultimate Multisite > Nastavení > Weby** a zapnout možnost **Povolit přepínání šablon**.

Také v **Ultimate Multisite > Produkty** vyberte své plány a přejděte na kartu **Šablony webů**. Ujistěte se, že možnost **Povolit šablony webů** je zapnutá a že v části **Režim výběru šablony webu** je vybrána možnost **Vybrat dostupné šablony webů**.

![Karta šablon webů produktu s režimem výběru šablony](/img/config/product-site-templates.png)

Budete moci vidět všechny dostupné šablony webů na svém webu. Vyberte, které chcete zpřístupnit a které nechcete zpřístupnit zákazníkům přihlášeným k tomuto plánu. Upozorňujeme, že tato možnost ovlivňuje také formulář pokladny, takže žádná šablona vybraná jako **Nedostupná** se na registrační stránce pro tento plán nezobrazí.

Nyní mohou vaši zákazníci kliknout na **Změnit šablonu webu** na své stránce Account.

![Tlačítko Změnit šablonu webu na stránce Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 zobrazuje přepracovaný panel pro přepnutí šablony. Panel začíná **kartou aktuální šablony**, aby zákazníci viděli, která šablona je aktivní, než zvolí náhradu.

Trvalá mřížka dostupných šablon webů zůstává viditelná, zatímco zákazníci prohlížejí své možnosti. Pomáhá jim to porovnat šablony povolené pro jejich plán, aniž by ztratili přehled o aktuálním výběru.

![Seznam dostupných šablon webů pro plán](/img/config/site-templates-list.png)

Po výběru té, na kterou chtějí přejít, budou požádáni o potvrzení změny.

![Dialog pro potvrzení přepnutí šablony webu](/img/account-page/template-switch-confirm.png)

Po zapnutí potvrzení a kliknutí na **Zpracovat přepnutí** bude na webu vašeho zákazníka použita nová šablona webu.

Zákazníci mohou z tohoto panelu také použít **Reset current template**, když potřebují vrátit web zpět na aktuálně přiřazenou šablonu. Stejně jako při přepnutí na jinou šablonu může reset šablony přepsat obsah webu, takže zákazníci by jej měli potvrdit pouze tehdy, když rozumí akci resetování.

### Přidání vlastních domén: {#adding-custom-domains}

Vaši zákazníci budou mít také možnost přidat vlastní doménu pro tento plán na stránce svého Account. Chcete-li zákazníkům umožnit používat vlastní domény, přejděte na **Ultimate Multisite > Settings >** **Domain Mapping**.

Zapněte možnost **Enable Domain Mapping**. To vašim zákazníkům umožní používat vlastní domény na úrovni sítě.

Nezapomeňte také zkontrolovat, zda je domain mapping povolen na úrovni produktu – protože můžete omezit produkt tak, aby zákazníkům neumožňoval používat vlastní domény.

Přejděte na **Ultimate Multisite > Products**. Vyberte plán podle svého výběru a přejděte na kartu **Custom Domains**. Zapněte možnost **Allow Custom Domains**.

![Karta Custom Domains s přepínačem Allow Custom Domains](/img/config/product-custom-domains.png)

To umožní všem zákazníkům přihlášeným k tomuto konkrétnímu plánu používat vlastní domény. Nyní mohou vaši zákazníci na stránce Account přidat vlastní doménu kliknutím na **Add Domain**.

![Tlačítko Add Domain na stránce Account](/img/account-page/add-domain-button.png)

První okno, které se otevře, zobrazí vašim zákazníkům zprávu s pokyny, jak aktualizovat jejich DNS záznamy, aby tato vlastní doména fungovala ve vaší síti.

![Pokyny DNS zobrazené při přidávání vlastní domény](/img/account-page/add-domain-dns.png)

Tuto zprávu můžete upravit (vy) v **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Nastavení Add New Domain Instructions v Domain Mapping](/img/config/settings-domain-mapping.png)

Zde je úplný pohled na stránku nastavení domain mapping:

![Celá stránka nastavení domain mapping](/img/config/settings-domain-mapping-full.png)

Po kliknutí na **Next Step** mohou vaši zákazníci přidat název vlastní domény a zvolit, zda bude tato vlastní doména primární. Všimněte si, že vaši zákazníci mohou pro své webové stránky použít více než jednu vlastní doménu, takže si mohou vybrat, která z nich bude primární.

![Zadání názvu vlastní domény s možností primární domény](/img/account-page/add-domain-primary.png)

Po kliknutí na **Add Domain** bude doména přidána do Account vašeho zákazníka. Vše, co nyní musí udělat, je změnit DNS záznamy této vlastní domény u jejich registrátora domény.

### Změna hesla: {#changing-password}

V Dashboard účtu si vaši zákazníci mohou také změnit heslo kliknutím na **Change Password**.

![Tlačítko Change Password na stránce Account](/img/account-page/change-password-button.png)

Zobrazí se nové okno, ve kterém vaši zákazníci budou muset vyplnit své aktuální heslo a poté zadat nové heslo, které chtějí používat.

![Formulář pro změnu hesla s poli aktuálního a nového hesla](/img/account-page/change-password-form.png)

### Nebezpečná zóna: {#danger-zone}

Máme také dvě možnosti, které se zobrazují v části **Danger Zone**: **Delete Site** a **Delete Account**. Obě jsou v části Danger Zone, protože tyto dvě akce jsou nevratné. Pokud vaši zákazníci smažou svůj web nebo svůj účet, nemohou je obnovit zpět.

![Danger Zone s možnostmi Delete Site a Delete Account](/img/account-page/danger-zone.png)

Pokud vaši zákazníci kliknou na kteroukoli z těchto dvou možností, zobrazí se jim okno, kde budou muset zapnout možnost odstranění webu nebo účtu a budou upozorněni, že tuto akci nelze vrátit zpět.

![Potvrzovací dialog Delete Site](/img/account-page/delete-site-confirm.png)

![Potvrzovací dialog Delete Account](/img/account-page/delete-account-confirm.png)

Pokud smažou svůj web, jejich Account a členství zůstanou nedotčené. Přijdou jen o veškerý obsah na svém webu. Pokud smažou svůj Account, všechny weby, členství a informace týkající se tohoto Account budou ztraceny.
