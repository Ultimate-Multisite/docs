---
title: Integrace Zapier
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Integrace Ultimate Multisite se Zapierem

V jednom z článků jsme probírali [Webhooky](webhooks.md) a jak je lze využít pro integraci s aplikacemi třetích stran.

Používání webhooků je trochu složitější, protože vyžaduje pokročilé znalosti programování a zpracování payloadů. **Zapier** vám umožní se tomu vyhnout.

Zapier nabízí integraci s více než 5000 aplikacemi, což značně usnadňuje komunikaci mezi různými aplikacemi.

Můžete vytvářet **Triggery**, které se spustí při událostech na vaší síti (např. při vytvoření účtu se spustí událost account_create), nebo generovat **Akce** na vaší síti jako reakci na externí události (např. vytvořit nové členství účtu ve vaší síti Ultimate Multisite).

To je možné díky tomu, že **triggery a akce Ultimate Multisite v Zapieru** jsou poháněny [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Jak začít

Nejprve vyhledejte Ultimate Multisite v seznamu aplikací Zapieru. Případně můžete kliknout na [tento odkaz](https://zapier.com/apps/wp-ultimo/integrations).

Přejděte na váš dashboard a stiskněte tlačítko **+** **Create Zap** v levém postranním panelu pro nastavení nového Zapu.

![Dashboard Zapieru s tlačítkem Create Zap](/img/admin/webhooks-list.png)

Budete přesměrováni na stránku vytváření Zapu.

Do vyhledávacího pole zadejte "wp ultimo". Klikněte a vyberte možnost **Beta** verze.

![Vyhledávání WP Ultimo v seznamu aplikací Zapieru](/img/admin/webhooks-list.png)

Po výběru naší aplikace zvolte dostupnou událost: **New Ultimate Multisite Event**.

![Výběr triggeru New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Nyní potřebujeme dát Zapieru přístup k **vaší síti**. Kliknutím na **Sign in** se otevře nové okno vyžadující **API přihlašovací údaje**.

![Výzva k přihlášení do Zapieru pro API přihlašovací údaje](/img/admin/webhooks-list.png)

Přejděte do administračního panelu vaší sítě a navigujte na **Ultimate Multisite > Settings** > **API & Webhooks** a vyhledejte sekci API Settings.

Vyberte možnost **Enable API**, protože je potřebná pro fungování tohoto připojení.

![Nastavení API s možností Enable API v Ultimate Multisite](/img/admin/webhooks-list.png)

Použijte ikonu **Copy to Clipboard** u polí API Key a API Secret a vložte tyto hodnoty na obrazovce integrace.

Do pole URL zadejte úplnou URL adresu vaší sítě včetně protokolu (HTTP nebo HTTPS).

![Obrazovka integrace Zapieru s poli API Key, Secret a URL](/img/admin/webhooks-list.png)

Klikněte na tlačítko **Yes, Continue** pro přechod k dalšímu kroku. Pokud vše proběhne v pořádku, měl by vás přivítat váš nově připojený účet! Klikněte na **Continue** pro vytvoření nového triggeru.

## Jak vytvořit nový Trigger

Nyní, když je váš účet připojen, můžete vidět dostupné události. Pro tento tutoriál zvolme událost **payment_received**.

![Výběr události payment_received v triggeru Zapieru](/img/admin/webhooks-list.png)

Jakmile je událost vybrána a kliknete na **continue**, objeví se **testovací krok**.

![Testovací krok Zapieru pro trigger](/img/admin/webhooks-list.png)

V této fázi Zapier otestuje, zda váš Zap dokáže **načíst specifický payload pro danou událost**. Při budoucích událostech stejného typu budou odesílány informace se stejnou strukturou.

![Test triggeru Zapieru úspěšně dokončen s payloadem](/img/admin/webhooks-list.png)

V našem tutoriálu byl test **úspěšně dokončen** a vrátil ukázkové informace payloadu. Tyto ukázkové informace nám pomohou při vytváření akcí. Váš trigger je nyní vytvořen a připraven k propojení s dalšími aplikacemi.

## Jak vytvořit Akce

Akce využívají informace z jiných triggerů k vytváření nových záznamů ve vaší síti.

V **kroku vytváření akce** vyberete Ultimate Multisite **Beta** a možnost **Create Items on Ultimate Multisite**.

![Vytváření akce s možností Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

V dalším kroku buď vytvoříte své ověření, stejně jako jsme to udělali v části **Jak začít**, nebo vyberete již vytvořené ověření. V tomto tutoriálu zvolíme stejné ověření, které jsme vytvořili dříve.

![Výběr ověření pro akci Zapieru](/img/admin/webhooks-list.png)

### Nastavení Akce

Toto je **hlavní krok akce** a zde jsou věci trochu jiné. První informací, kterou zvolíte, je **Item**. Item je **informační model** vaší sítě, jako jsou **Customers, Payments, Sites, Emails** a další.

![Výběr typu Item pro akci Zapieru](/img/admin/webhooks-list.png)

Při výběru položky se formulář **přeuspořádá a zobrazí povinná a volitelná pole** pro vybranou položku.

Například při výběru položky **Customer** se ve formuláři zobrazí vše potřebné k vyplnění pro vytvoření nového zákazníka v síti.

![Pole položky Customer v nastavení akce Zapieru](/img/admin/webhooks-list.png)

Po vyplnění všech polí označených jako **required** a kliknutí na continue se zobrazí poslední obrazovka s vyplněnými poli a poli, která zůstala nevyplněná.

![Test akce Zapieru zobrazující vyplněná a nevyplněná pole](/img/admin/webhooks-list.png)

Jakmile je váš test dokončen a úspěšný, vaše akce je nakonfigurována. Je také důležité zkontrolovat ve vaší síti, zda byla položka vytvořena testem vaší akce.
