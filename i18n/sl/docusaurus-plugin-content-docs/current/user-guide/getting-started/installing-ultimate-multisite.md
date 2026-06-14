---
title: Instaliranje Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalacija Ultimate Multisite

:::note
Ta tutorial predpostavlja, da imate že nameščeno in konfigurirano WordPress Multisite. Za učenje tega, preverite [to tutorial](https://www.wpbeginner.com/glossary/multisite/) od WP Beginner.
:::

## Instalacija plugin-a

Ultimate Multisite je brezplačen na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Iz **Network Admin Dashboard** gre do **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Poiščite **"Ultimate Multisite"** (z navodnimi znakom za točno pododobitev) in bo se pojavil kot prvi rezultat. Kliknite na **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Po instalaciji kliknite na **Network Activate**, da aktivirate plugin po celotni mreži.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Po aktivaciji boste samostojno preusmerjeni na Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard vam bo vodil pri konfiguraciji Ultimate Multisite v približno 10 minutah.

### Dobši dobiček (Welcome)

Kliknite na **Get Started**, da začnete.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Preprečevanje pred instalacijo (Pre-install Checks)

Ta korak preverja informacije o vašem sistemu in WordPress instalaciji, da bi se zagotovilo, da zadovoljuje zahteve Ultimate Multisite. Če vse izgleda dobro, kliknite na **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Gumbni za povezave (v2.6.1+)
Če sta Ultimate Multisite bilo instalirano, vendar **ne je še aktivno na mreži** — na primer, če ste kliknili na **Aktiviraj** (single-site) namesto **Network Activate** iz ekrana za pluginove omrežja — korak Pre-install Checks bo to opazil in prikazal gumb **Network Activate**.

Kliknite na **Network Activate**, da se plugin sam avtomatsko aktivira po vseh vaših multisite mreži. Po aktivaciji se wizard nadaljuje normalno do koraka instalacije. Ne morate oditi iz wizardja, da bi popravili stanje aktivacije.
:::

### Instalacija

Installer bo ustvaril potrebne bazo podatkovne tabele in instaliral datoteko `sunrise.php`, ki jo Ultimate Multisite potrebuje za delovanje. Kliknite na **Install**, da nadaljujete.

![Korak instalacije, ki prikazuje bazo podatkovne tabele in sunrise.php](/img/installation/wizard-installation.png)

### Vaša Firma

Polniti svoje informacije o firmi in postaviti valuto za podrazdelitev (default currency). Ta informacija bo uporabljena skozi vso vašo WaaS platformo. Kliknite na **Continue**, ko boste končali.

![Korak konfiguracije vaše firme](/img/installation/wizard-your-company.png)

### Predhodni Vsebine

Ta korak vam omogoča instalacijo predoddelanih tem, izdelkov in druge začetne vsebine. To je odlična možnost za seznanjanje z funkcijami Ultimate Multisite. Kliknite na **Install**, da dodate predhodno vsebino, ali prekliči s tem korak, če boste želeli začeti od nič.

![Korak instalacije predhodne vsebine](/img/installation/wizard-default-content.png)

### Priporočene Pluginove

Opcionalno instalirajte priporočene drugplatne pluginove (companion plugins). Kliknite na **Install**, da jih dodate, ali prekliči za nadaljevanje.

![Korak priporočene pluginov](/img/installation/wizard-recommended-plugins.png)

### Sposobno!

To je to! Vaša instalacija Ultimate Multisite je dokončana. Zdaj lahko začnete graditi vaš spletni delovni prostor kot platformo za storitev z **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Začnite se zabaviti!
