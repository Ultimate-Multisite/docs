---
title: Příjem plateb
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Přijímání plateb (v2)

_**DŮLEŽITÁ POZNÁMKA: Tento článek se týká Ultimate Multisite verze 2.x.**_

Ultimate Multisite obsahuje vestavěný systém členství a fakturace. Aby náš fakturační systém fungoval, integrovali jsme nejběžnější platební brány používané v e-commerce. Výchozí platební brány v Ultimate Multisite jsou _Stripe_, _PayPal_ a Manuální platba. Platby můžete přijímat také přes _WooCommerce_, _GoCardless_ a _Payfast_ – stačí nainstalovat jejich příslušné doplňky.

## Základní nastavení

Všechny tyto platební brány můžete nakonfigurovat v nastavení plateb Ultimate Multisite. Najdete je v **menu Ultimate Multisite > Nastavení > Platby.**

![Stránka nastavení plateb v Ultimate Multisite](/img/config/settings-payment-gateways.png)

Než začnete nastavovat platební bránu, podívejte se na základní nastavení plateb, která můžete nakonfigurovat:

**Vynutit automatické obnovení:** Tato volba zajistí, že se platba automaticky opakuje na konci každého fakturačního období podle frekvence, kterou uživatel zvolil.

![Přepínač nastavení vynuceného automatického obnovení](/img/config/settings-payment-gateways.png)

**Povolit zkušební období bez platební metody:** Když tuto možnost zapnete, váš klient nebude muset při registraci zadávat žádné platební údaje. Ty budou vyžadovány až po skončení zkušebního období.

![Přepínač povolení zkušebního období bez platební metody](/img/config/settings-payment-gateways.png)

**Odeslat fakturu při potvrzení platby:** Tato volba určuje, zda se má po zaplacení odeslat faktura. Uživatelé mají vždy přístup k historii svých plateb na nástěnce své podstránky. Tato možnost se nevztahuje na Manuální bránu.

![Přepínač odeslání faktury při potvrzení platby](/img/config/settings-payment-gateways.png)

**Schéma číslování faktur:** Zde si můžete vybrat mezi referenčním kódem platby nebo sekvenčním číslem. Pokud se rozhodnete používat pro faktury referenční kód platby, nemusíte nic nastavovat. Pokud zvolíte sekvenční číslování, budete muset nastavit **další číslo faktury** (Toto číslo bude použito jako číslo příští faktury vygenerované v systému. S každou novou fakturou se zvýší o jedna. Můžete ho změnit a uložit, čímž resetujete sekvenční číslo faktury na konkrétní hodnotu) a **prefix čísla faktury.**

![Výběr schématu číslování faktur](/img/config/settings-payment-gateways.png)

![Nastavení sekvenčního čísla faktury a prefixu](/img/config/settings-payment-gateways.png)

## Kde najdete platební brány:

Platební brány můžete nastavit na stejné stránce (**Ultimate Multisite > Nastavení > Platby**). Hned pod **aktivními platebními bránami** uvidíte: _Stripe_, _Stripe Checkout_, _PayPal_ a _Manuální_.

![Seznam aktivních platebních bran](/img/config/settings-payment-gateways.png)

Pro každou platební bránu máme samostatný článek, který vás provede kroky nastavení. Najdete je na odkazech níže.

**Nastavení brány Stripe**

**Nastavení brány PayPal**

**Nastavení manuálních plateb**

Pokud chcete jako platební bránu používat _WooCommerce_, _GoCardless_ nebo _Payfast_, budete muset **nainstalovat a nakonfigurovat jejich doplňky**.

### Jak nainstalovat doplněk WooCommerce:

Chápeme, že _Stripe_ a _PayPal_ nejsou dostupné v některých zemích, což omezuje nebo znemožňuje uživatelům Ultimate Multisite efektivně využívat náš plugin. Proto jsme vytvořili doplněk pro integraci s _WooCommerce_, což je velmi populární e-commerce plugin. Vývojáři po celém světě vytvořili doplňky integrující různé platební brány. Toho jsme využili k rozšíření možností platebních bran, které můžete s fakturačním systémem Ultimate Multisite používat.

_**DŮLEŽITÉ:** Ultimate Multisite: WooCommerce Integration vyžaduje, aby byl WooCommerce aktivován minimálně na vaší hlavní stránce._

Nejprve přejděte na stránku doplňků. Najdete ji v **Ultimate Multisite > Nastavení**. Měli byste vidět tabulku **Doplňky**. Klikněte na **Prohlédnout naše doplňky**.

![Stránka nastavení se sekcí doplňků](/img/config/settings-general.png)

Po kliknutí na **Prohlédnout naše doplňky** budete přesměrováni na stránku doplňků. Zde najdete všechny doplňky Ultimate Multisite. Klikněte na doplněk **Ultimate Multisite: WooCommerce Integration**.

![Stránka doplňků se seznamem dostupných doplňků](/img/config/settings-general.png)

Zobrazí se okno s detaily doplňku. Stačí kliknout na **Nainstalovat**.

![Dialog instalace doplňku WooCommerce](/img/config/settings-general.png)

Po dokončení instalace budete přesměrováni na stránku pluginů. Zde jednoduše klikněte na **Aktivovat v síti** a doplněk WooCommerce bude aktivován ve vaší síti.

![Aktivace doplňku WooCommerce v síti](/img/config/settings-general.png)

Po aktivaci, pokud ještě nemáte na svém webu nainstalovaný a aktivovaný plugin WooCommerce, zobrazí se vám upozornění.

![Upozornění na aktivaci WooCommerce](/img/config/settings-general.png)

Více informací o doplňku WooCommerce Integration najdete **zde**.

### Jak nainstalovat doplněk GoCardless:

Postup instalace doplňku _GoCardless_ je v podstatě stejný jako u doplňku _WooCommerce_. Přejděte na stránku doplňků a vyberte doplněk **Ultimate Multisite: GoCardless Gateway**.

![Stránka doplňků se seznamem dostupných doplňků](/img/config/settings-general.png)

Zobrazí se okno doplňku. Klikněte na **Nainstalovat**.

![Dialog instalace doplňku GoCardless](/img/config/settings-general.png)

Po dokončení instalace budete přesměrováni na stránku pluginů. Zde jednoduše klikněte na **Aktivovat v síti** a doplněk _GoCardless_ bude aktivován ve vaší síti.

![Aktivace doplňku GoCardless v síti](/img/config/settings-general.png)

Chcete-li se dozvědět, jak začít s bránou _GoCardless_, **přečtěte si tento článek**.

### Jak nainstalovat doplněk Payfast:

Přejděte na stránku doplňků a vyberte doplněk **Ultimate Multisite: Payfast Gateway**.

![Stránka doplňků se seznamem dostupných doplňků](/img/config/settings-general.png)

Zobrazí se okno doplňku. Klikněte na **Nainstalovat.**

![Dialog instalace doplňku Payfast](/img/config/settings-general.png)

Po dokončení instalace budete přesměrováni na stránku pluginů. Zde jednoduše klikněte na **Aktivovat v síti** a doplněk _Payfast_ bude aktivován ve vaší síti.

![Aktivace doplňku Payfast v síti](/img/config/settings-general.png)
