---
title: Instalace Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalace Ultimate Multisite

:::note
Tento návod předpokládá, že máte již nainstalovaný a nakonfigurovaný WordPress Multisite. Chcete-li se dozvědět, jak na to, podívejte se na [tento tutoriál](https://www.wpbeginner.com/glossary/multisite/) od WP Beginner.
:::

## Instalace pluginu

Ultimate Multisite je k dispozici zdarma na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Z vašeho **Network Admin Dashboard** přejděte do **Plugins → Add New Plugin**.

![Stránka Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Vyhledejte **"Ultimate Multisite"** (v uvozovkách pro přesnou shodu) a zobrazí se jako první výsledek. Klikněte na **Install Now**.

![Výsledky vyhledávání, kde se zobrazuje Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Po instalaci klikněte na **Network Activate** pro aktivaci pluginu v celé vaší síti.

![Plugin nainstalován s tlačítkem Network Activate](/img/installation/plugin-installed.png)

Po aktivaci budete automaticky přesměrováni do průvodce nastavením.

![Plugin aktivován a přesměrován do průvodce](/img/installation/plugin-activated.png)

## Průvodce nastavením

Průvodce nastavením vás provede konfigurací Ultimate Multisite přibližně za 10 minut.

### Vítejte

Klikněte na **Get Started** pro zahájení.

![Úvodní obrazovka průvodce nastavením](/img/installation/wizard-welcome.png)

### Předběžné kontroly

Tento krok kontroluje informace o vašem systému a instalaci WordPress, aby se zajistilo, že splňuje požadavky Ultimate Multisite. Pokud je vše v pořádku, klikněte na **Go to the Next Step**.

![Předběžné kontroly zobrazující systémové požadavky](/img/installation/wizard-pre-install-checks.png)

:::note Tlačítko Network Activate (v2.6.1+)
Pokud byl Ultimate Multisite nainstalován, ale **ještě nebyl aktivován v celé síti** – například pokud jste klikli na **Activate** (pro jeden web) místo na **Network Activate** z obrazovky s pluginy pro celou síť – krok Předběžné kontroly to zjistí a zobrazí tlačítko **Network Activate**.

Kliknutím na **Network Activate** aktivujete plugin v celé vaší multisite síti automaticky. Po aktivaci průvodce pokračuje normálně do kroku instalace. Není třeba opustit průvodce, abyste opravili stav aktivace.
:::

### Instalace

Instalátor vytvoří potřebné databázové tabulky a nainstaluje soubor `sunrise.php`, který Ultimate Multisite potřebuje pro správnou funkci. Klikněte na **Install** pro pokračování.

![Krok instalace zobrazující databázové tabulky a sunrise.php](/img/installation/wizard-installation.png)

### Vaše společnost

Vyplňte informace o vaší společnosti a nastavte výchozí měnu. Tyto informace budou používány v celé vaší platformě WaaS. Po dokončení klikněte na **Continue**.

![Krok konfigurace „Vaše společnost“](/img/installation/wizard-your-company.png)

### Výchozí obsah

Tento krok vám umožní nainstalovat předdefinované šablony, produkty a další výchozí obsah. Je to skvělý způsob, jak se seznámit s funkcemi Ultimate Multisite. Klikněte na **Install** pro přidání výchozího obsahu nebo tento krok přeskočte, pokud chcete začít od nuly.

![Krok instalace výchozího obsahu](/img/installation/wizard-default-content.png)

### Doporučené pluginy

Volitelně nainstalujte doporučené doplňkové pluginy. Kliknutím na **Install** je přidáte nebo pokračujte, pokud to nechcete.

![Krok s doporučenými pluginy](/img/installation/wizard-recommended-plugins.png)

### Hotovo!

To je vše! Instalace Ultimate Multisite je dokončena. Nyní můžete začít budovat svou platformu Website as a Service z **Network Admin Dashboard**.

![Nastavení dokončeno – obrazovka „Hotovo“](/img/installation/wizard-ready.png)

![Network Admin Dashboard s aktivovaným Ultimate Multisite](/img/installation/network-dashboard.png)

Přejeme vám hodně zábavy!
