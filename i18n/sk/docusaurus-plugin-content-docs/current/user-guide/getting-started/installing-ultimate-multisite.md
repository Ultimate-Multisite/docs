---
title: Inštalácia Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalácia Ultimate Multisite

:::note
Tento návod predpokladá, že máte už nainštalovaný a skonfigurovaný WordPress Multisite. Aby ste sa naučili, ako to urobiť, pozrite si tento návod [tento návod](https://www.wpbeginner.com/glossary/multisite/) od WP Beginner.
:::

## Instalácia pluginu

Ultimate Multisite je k dispozícii zadarmo na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Z **Admin Dashboard siete** sa prejdite do **Plugins → Pridať nový plugin**.

![Strana pridaní nového pluginu v Admin Dashboard siete](/img/installation/add-new-plugin.png)

Vyhľadajte **"Ultimate Multisite"** (s vkladmi, aby ste našli presnú výpadku) a bude to prvý výsledok. Kliknite na **Install Now**.

![Výsledky vyhľadávania zobrazujúce Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Po stiahnutí kliknite na **Network Activate**, aby ste plugin aktivovali v celej sieti.

![Plugin nainštalovaný s tlačidlom Network Activate](/img/installation/plugin-installed.png)

Po aktivácii budete automaticky presmerovaní na Wizard nastavenia.

![Plugin aktivovaný a presmerovaný na wizard](/img/installation/plugin-activated.png)

## Wizard nastavenia

Wizard nastavenia vás krok za krokom popriete s konfiguráciou Ultimate Multisite približne v 10 minútach.

### Vitajte

Kliknite na **Get Started**, aby ste začali.

![Welcome obrazovka Wizard nastavenia](/img/installation/wizard-welcome.png)

### Predinstalované kontroly

Tento krok skontroluje informácie o vašom systéme a nainštalovaný WordPress, aby si uistil, že splňujú požiadavky Ultimate Multisite. Ak všetko vyzerá dobre, kliknite na **Go to the Next Step**.

![Predinstalované kontroly zobrazujúce požiadavky na systém](/img/installation/wizard-pre-install-checks.png)

:::note Tlačidlo Network Activate (v2.6.1+)
Ak ste nainštalovali Ultimate Multisite, ale **nie je ešte aktivovaný v sieti** — napríklad ak ste klikli na **Activate** (single-site) namiesto **Network Activate** z obrazovky pluginov siete — krok Pre-install Checks to to určí a zobrazí tlačidlo **Network Activate**.

Kliknutím na **Network Activate** aktivujete plugin automaticky po celej vašej sieti multisite. Po aktivácii pokračuje wizard normálne do kroku inštalácie. Nemusíte opustiť wizard, aby ste opravili stav aktivácie.
:::

### Inštalácia

Inštalátor vytvorí potrebné tabuľky v databáze a nainštaluje súbor `sunrise.php`, ktorý Ultimate Multisite potrebuje na fungovanie. Kliknite na **Install**, aby ste pokračovali.

![Krok inštalácie zobrazujúci tabuľky v databáze a sunrise.php](/img/installation/wizard-installation.png)

### Vaša firma

Vyplňte informácie o vašej firme a nastavte svoju štandardnú valutu. Táto informácia bude používaná po celom platforme WaaS. Kliknite na **Continue**, keď ste dokončili.

![Krok konfigurácie vašej firmy](/img/installation/wizard-your-company.png)

### Štandardný obsah

Tento krok vám umožní nainštalovať preddefinované šablóny, produkty a iný štartovací obsah. Je to skvelý spôsob, ako sa zvyknúť na funkcie Ultimate Multisite. Kliknite na **Install**, aby ste prispôsobil štandardný obsah, alebo tento krok prepojte, ak preferujete začať od začiatku.

![Krok inštalácie štandardného obsahu](/img/installation/wizard-default-content.png)

### Doplnkové pluginy

Voliteľne nainštalujte doporučené spoločné pluginy. Kliknite na **Install**, aby ste ich prispôsobil alebo prepojte, ak chcete pokračovať.

![Krok doporučených pluginov](/img/installation/wizard-recommended-plugins.png)

### Presne!

To dokončené! Vaša inštalácia Ultimate Multisite je dokončená. Môžete teraz začať stavba vašej platformy Web as a Service z **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Terď si zaberať do práce!
