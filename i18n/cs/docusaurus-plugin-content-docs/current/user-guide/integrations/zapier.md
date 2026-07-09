---
title: Integrace Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrace Ultimate Multisite se Zapier

V jednom z článků jsme probírali [Webhooks](webhooks.md) a jak je lze použít k integraci s aplikacemi třetích stran.

Používání webhooks je trochu složité, protože vyžaduje pokročilé znalosti programování a zachytávání payloads. Použití **Zapier** je způsob, jak to obejít.

Zapier má integraci s více než 5000+ aplikacemi, což usnadňuje komunikaci mezi různými aplikacemi.

Můžete vytvářet **Triggers**, které se spustí, když ve vaší síti nastanou události (např. je vytvořen účet a spustí událost account_create), nebo generovat **Actions** ve vaší síti jako reakci na externí události (např. vytvořit nové členství účtu ve vaší síti Ultimate Multisite).

To je možné, protože **triggers Ultimate Multisite Zapier** a actions jsou poháněny [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Jak začít

Nejprve vyhledejte Ultimate Multisite v seznamu aplikací Zapier. Případně můžete kliknout na [tento odkaz](https://zapier.com/apps/wp-ultimo/integrations).

Přejděte na svůj dashboard a stiskněte tlačítko **+** **Create Zap** v levém postranním panelu, abyste nastavili nový Zap.

![Dashboard Zapier s tlačítkem Create Zap](/img/admin/webhooks-list.png)

Budete přesměrováni na stránku pro vytvoření Zap.

Do vyhledávacího pole zadejte „wp ultimo“. Kliknutím vyberte možnost verze **Beta**.

![Vyhledávání WP Ultimo v seznamu aplikací Zapier](/img/admin/webhooks-list.png)

Po výběru naší aplikace vyberte dostupnou událost: **New Ultimate Multisite Event**.

![Výběr triggeru New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Nyní musíme dát Zapier přístup k **vaší síti**. Kliknutí na **Sign in** otevře nové okno vyžadující **API credentials**.

![Výzva Zapier k Sign in pro API credentials](/img/admin/webhooks-list.png)

Přejděte do administračního panelu své sítě a přejděte na **Ultimate Multisite > Settings** > **API & Webhooks** a vyhledejte sekci API Settings.

Vyberte možnost **Enable API**, protože je pro fungování tohoto připojení vyžadována.

![Nastavení API a Webhooks s možnostmi API Settings a Enable API](/img/admin/settings-api-webhooks.png)

Použijte ikonu **Copy to Clipboard** u polí API Key a API Secret a vložte tyto hodnoty na obrazovce integrace.

Do pole URL vložte úplnou URL své sítě včetně protokolu (HTTP nebo HTTPS).

![Obrazovka integrace Zapier s poli API Key, Secret a URL](/img/admin/webhooks-list.png)

Klikněte na tlačítko **Yes, Continue** a přejděte k dalšímu kroku. Pokud vše proběhne správně, měl by vás přivítat váš nový připojený account! Klikněte na **Continue** pro vytvoření nového triggeru.

## Jak vytvořit nový Trigger

Nyní, když je váš account připojen, můžete vidět dostupné události. Pro tento tutoriál zvolme událost **payment_received**.

![Výběr události payment_received v triggeru Zapier](/img/admin/webhooks-list.png)

Jakmile byla událost vybrána a kliknete na **continue**, zobrazí se **test step**.

![Testovací krok Zapier pro trigger](/img/admin/webhooks-list.png)

V této fázi Zapier otestuje, zda váš Zap dokáže **načíst konkrétní payload pro tuto událost**. U budoucích událostí stejného typu budou odesílány informace se stejnou strukturou.

![Test triggeru Zapier úspěšně dokončen s payloadem](/img/admin/webhooks-list.png)

V našem tutoriálu byl test **úspěšně dokončen** a vrátil ukázkové informace payloadu. Tyto ukázkové informace budou užitečné jako vodítko při vytváření actions. Váš trigger je nyní vytvořen a připraven k propojení s dalšími aplikacemi.

## Jak vytvořit Actions

Actions používají informace z jiných triggers k vytváření nových záznamů ve vaší síti.

V kroku **vytváření action** vyberete Ultimate Multisite **Beta** a možnost **Create Items on Ultimate Multisite**.

![Vytváření action pomocí Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

V dalším kroku buď vytvoříte své ověření, stejně jako jsme to udělali v části **Jak začít**, nebo vyberete vytvořené ověření. V tomto tutoriálu zvolíme stejné ověření vytvořené dříve.

![Výběr ověření pro action Zapier](/img/admin/webhooks-list.png)

### Nastavení Action

Toto je **hlavní krok action** a zde jsou věci trochu jiné. První informace, kterou vyberete, je **Item**. Item je **informační model** vaší sítě, například **Customers, Payments, Sites, Emails** a další.

![Výběr typu Item pro action Zapier](/img/admin/webhooks-list.png)

Při výběru itemu se formulář **přeskupí tak, aby zobrazil povinná a volitelná pole** pro vybraný item.

Například při výběru itemu **Customer** formulářová pole zobrazí vše, co je nutné vyplnit pro vytvoření nového Customer v síti.

![Pole itemu Customer v nastavení action Zapier](/img/admin/webhooks-list.png)

Po vyplnění všech polí označených jako **required** a kliknutí na pokračovat vám poslední obrazovka zobrazí vyplněná pole a pole, která zůstala nevyplněná.

![Test action Zapier zobrazující vyplněná a nevyplněná pole](/img/admin/webhooks-list.png)

Jakmile se váš test dokončí a je úspěšný, vaše action je nakonfigurována. Je také důležité zkontrolovat ve vaší síti, zda byl item vytvořen testem vaší action.
