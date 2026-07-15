---
title: Inštalácia systému Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Inštalácia Ultimate Multisite

:::note
Tento návod predpokladá, že už máte nainštalovaný a nakonfigurovaný WordPress Multisite. Ak sa chcete dozvedieť ako na to, pozrite si tento návod [this tutorial](https://www.wpbeginner.com/glossary/multisite/) od WP Beginner.
:::

## Inštalácia pluginu {#installing-the-plugin}

Ultimate Multisite je dostupný zadarmo na stránke [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Z vášho **Network Admin Dashboard**, prejdite do sekcie **Plugins → Add New Plugin**.

![Stránka Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Vyhľadajte výraz **"Ultimate Multisite"** (v úvodzovkách, aby sa hľadal presný reťazec) a zobrazí sa ako prvý výsledok. Kliknite na tlačidlo **Install Now**.

![Výsledky vyhľadávania zobrazujúce Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Po inštalácii kliknite na tlačidlo **Network Activate**, aby ste aktivovali plugin v celej vašej sieti.

![Plugin nainštalovaný s tlačidlom Network Activate](/img/installation/plugin-installed.png)

Po aktivácii budete automaticky presmerovaní do sprievodcu nastavením.

![Plugin aktivovaný a presmerovaný do sprievodcu](/img/installation/plugin-activated.png)

## Sprievodca nastavením {#setup-wizard}

Sprievodca nastavením vás prevedie konfiguráciou Ultimate Multisite približne za 10 minút.

### Vitajte {#welcome}

Kliknite na **Get Started**, aby ste začali.

![Úvodná obrazovka sprievodcu nastavením](/img/installation/wizard-welcome.png)

### Predbežné kontroly {#pre-install-checks}

Tento krok kontroluje informácie o vašom systéme a inštalácii WordPress, aby sa uistil, že spĺňajú požiadavky Ultimate Multisite. Ak je všetko v poriadku, kliknite na **Go to the Next Step**.

![Predbežné kontroly zobrazujúce systémové požiadavky](/img/installation/wizard-pre-install-checks.png)

:::note Tlačidlo Network Activate (v2.6.1+)
Ak bol Ultimate Multisite nainštalovaný, ale **zatiaľ nie je aktivovaný v celej sieti** – napríklad ak ste klikli na tlačidlo **Activate** (pre jednu lokalitu) namiesto **Network Activate** z obrazovky sieťových pluginov – krok predbežných kontrol to rozpozná a zobrazí tlačidlo **Network Activate**.

Kliknutím na **Network Activate** aktivujete plugin automaticky v celej vašej multisite sieti. Po aktivácii sprievodca pokračuje normálne do kroku inštalácie. Nie je potrebné opustiť sprievodcu, aby ste opravili stav aktivácie.
:::

### Inštalácia {#installation}

Inštalačný program vytvorí potrebné databázové tabuľky a nainštaluje súbor `sunrise.php`, ktorý Ultimate Multisite potrebuje na fungovanie. Kliknite na **Install**, aby ste pokračovali.

![Krok inštalácie zobrazujúci databázové tabuľky a sunrise.php](/img/installation/wizard-installation.png)

### Vaša spoločnosť {#your-company}

Vyplňte informácie o vašej spoločnosti a nastavte predvolenú menu. Tieto informácie budú použité v celej vašej WaaS platforme. Po dokončení kliknite na **Continue**.

![Krok konfigurácie Your Company](/img/installation/wizard-your-company.png)

### Predvolený obsah {#default-content}

Tento krok vám umožní nainštalovať preddefinované šablóny, produkty a iný úvodný obsah. Je to skvelý spôsob, ako sa oboznámiť s funkciami Ultimate Multisite. Kliknite na **Install**, aby ste pridali predvolený obsah, alebo tento krok preskočte, ak chcete začať od nuly.

![Krok inštalácie predvoleného obsahu](/img/installation/wizard-default-content.png)

### Odporúčané pluginy {#recommended-plugins}

Voliteľne nainštalujte odporúčané doplnkové pluginy. Kliknite na **Install**, aby ste ich pridali, alebo pokračujte bez nich.

![Krok odporúčaných pluginov](/img/installation/wizard-recommended-plugins.png)

### Hotovo! {#ready}

To je všetko! Vaša inštalácia Ultimate Multisite je dokončená. Teraz môžete začať budovať svoju platformu Website as a Service z **Network Admin Dashboard**.

![Nastavenie dokončené – obrazovka Ready](/img/installation/wizard-ready.png)

![Network Admin Dashboard s aktivovaným Ultimate Multisite](/img/installation/network-dashboard.png)

Užite si to!
