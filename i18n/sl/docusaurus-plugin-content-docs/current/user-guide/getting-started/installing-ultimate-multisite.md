---
title: Nameščanje Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Namestitev Ultimate Multisite {#installing-ultimate-multisite}

:::note
Ta vadnica predpostavlja, da že imate nameščen in konfiguriran WordPress Multisite. Če želite izvedeti, kako to storiti, si oglejte [to vadnico](https://www.wpbeginner.com/glossary/multisite/) na WP Beginner.
:::

## Namestitev vtičnika {#installing-the-plugin}

Ultimate Multisite je brezplačno dostopen na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

V **Network Admin Dashboard** pojdite na **Plugins → Add New Plugin**.

![Stran Network Admin za dodajanje novega vtičnika](/img/installation/add-new-plugin.png)

Iščite **"Ultimate Multisite"** (z narekovaji za točno ujemanje) in bo prikazan kot prvi rezultat. Kliknite **Install Now**.

![Rezultati iskanja, ki prikazujejo Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Ko je nameščen, kliknite **Network Activate**, da aktivirate vtičnik po celotnem omrežju.

![Vtičnik nameščen z gumbom Network Activate](/img/installation/plugin-installed.png)

Po aktivaciji boste samodejno preusmerjeni na Setup Wizard.

![Vtičnik aktiviran in preusmerjen čarovniku](/img/installation/plugin-activated.png)

## Namestitveni čarovnik {#setup-wizard}

Namestitveni čarovnik vas bo vodil skozi konfiguracijo Ultimate Multisite v približno 10 minutah.

### Dobrodošli {#welcome}

Kliknite **Get Started**, da začnete.

![Zaslon dobrodošlice namestitvenega čarovnika](/img/installation/wizard-welcome.png)

### Prednamestitvene preverbe {#pre-install-checks}

Ta korak preveri informacije o sistemu in namestitev WordPressa, da se prepriča, da izpolnjuje zahteve Ultimate Multisite. Če je vse v redu, kliknite **Go to the Next Step**.

![Prednamestitvene preverbe, ki prikazujejo sistemske zahteve](/img/installation/wizard-pre-install-checks.png)

:::note Gumb Network Activate (v2.6.1+)
Če je bil Ultimate Multisite nameščen, a **še ni omrežno aktiviran** – na primer, če ste kliknili **Activate** (enostavno spletno mesto) namesto **Network Activate** iz zaslona vtičnikov omrežja – bo korak Prednamestitvene preverbe to zaznal in prikazal gumb **Network Activate**.

Klik na **Network Activate** samodejno aktivira vtičnik po celotnem multisite omrežju. Ko je aktiviran, čarovnik normalno nadaljuje do koraka namestitve. Ni vam treba zapustiti čarovnika za popravilo stanja aktivacije.
:::

### Namestitev {#installation}

Namestitveni program bo ustvaril potrebne tabele podatkovne zbirke in namestil datoteko `sunrise.php`, ki jo Ultimate Multisite potrebuje za delovanje. Kliknite **Install** za nadaljevanje.

![Korak namestitve, ki prikazuje tabele podatkovne zbirke in sunrise.php](/img/installation/wizard-installation.png)

### Vaše podjetje {#your-company}

Izpolnite informacije o svojem podjetju in nastavite valuto po privzetem. Te informacije bodo uporabljene v celotni vaši WaaS platformi. Ko končate, kliknite **Continue**.

![Korak konfiguracije Vašega podjetja](/img/installation/wizard-your-company.png)

### Privzeta vsebina {#default-content}

Ta korak vam omogoča namestitev vnaprej določenih predlog, izdelkov in druge začetne vsebine. To je odličen način za seznanjanje s funkcijami Ultimate Multisite. Kliknite **Install** za dodajanje privzete vsebine ali preskočite ta korak, če raje začnete od začetka.

![Korak namestitve privzete vsebine](/img/installation/wizard-default-content.png)

### Priporočeni vtičniki {#recommended-plugins}

Po želji namestite priporočene spremljevalne vtičnike. Kliknite **Install** za dodajanje ali preskočite za nadaljevanje.

![Korak priporočenih vtičnikov](/img/installation/wizard-recommended-plugins.png)

### Pripravljeni! {#ready}

To je vse! Vaša namestitev Ultimate Multisite je končana. Zdaj lahko začnete graditi svojo platformo Website as a Service iz **Network Admin Dashboard**.

![Namestitev končana - zaslon Pripravljeni](/img/installation/wizard-ready.png)

![Network Admin Dashboard z aktivnim Ultimate Multisite](/img/installation/network-dashboard.png)

Naprej in zabavajte se!
