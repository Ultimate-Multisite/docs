---
title: Ultimate Multisite instalatzen ari den
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite Instalazioa

:::note
Hau ezagutzea, WordPress Multisite aldatu eta konfiguratuta dagoela. Zerren jakinarazteko, WP Beginner-ren [horri](https://www.wpbeginner.com/glossary/multisite/) tutorial-era jartzen duzu.
:::

## Plugin Instalazioa

Ultimate Multisite-ak WordPress.org-aldean guztiz jardutzeko libre da.

**Network Admin Dashboard**-etik, **Plugins → Add New Plugin** (Pluginak → Plugin berri gehitu) funtziara jarraitu.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (ezpugak hartuz, erabilizten) bilatu, eta lehen rezultatu gisa erakusten du. **Install Now** (Instaluatu dugu) klikatu.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Instalatu ondoren, pluginaren guztiaren network-an aktibatu eta Network Activate (Network Aktibatu) funtziara klikatu.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Aktibatuta jakinai duzu, automatican Setup Wizard (Konfigurazioa Goiditzen duen Aritmoa) zuzen dira.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (Konfigurazioa Goiditzen duen Aritmoa)

Setup Wizard-ek Ultimate Multisite konfiguratzea 10 min batean gurekin batzuk egiten du.

### Welcome (Egun on)

Lehen aurrera egin eta **Get Started** (Lehen Aurrera Egitu) klikatu.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks (Instalazioaren Aurreko Kontrolak)

Hau da sistema informazioa eta WordPress instalazioa kontrolatzen duen iradokoa, Ultimate Multisite-ren eskakiz onartzen duen jakinarazteko. Hau guztia ondo dagoela ikusten duzu, **Go to the Next Step** (Irri Beste Iradokora) klikatu.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate botoi (v2.6.1+)
Ultimate Multisite instalatu ari baina, baina **network-aktivatza ez da** — adibidez, network pluginak menuagatik **Activate** (single-site) irikusi duten beste bat duzue — Pre-install Checks edo itxera izango da eta **Network Activate** botoia erakusten du.

**Network Activate** irikusia da, pluginak guztizko multisite networkan awtomatiko aktibatu egiten du. Aktibatuta jakin denean, wizard-ek normalmenta instalazio urtera jarraitzen du. Aktibazio eta eraguntzu edo ezagutzeko beharrezkoa izango da wizard-ek lortu behar izan.
:::

### Instalazioa

Installer-ek beharrezko database tables sortuzkin eta Ultimate Multisite-i fisiko egiteko `sunrise.php` file-a instalatu egiten du. Aurrera egin dezakezu eta **Install** irikusia da.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Zerbitzua (Your Company)

Zerbitzuaren informazioa pliratu eta currencya defaultak emitu. Horrek WaaS platforman guztiz erabiltara izango da. Aurrera egin dezakezu horren alde egiten duenean.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Kontentua Defaulta (Default Content)

Ezaugarri templateak, produkzioak eta beste kontentuak instalatu dezakezu. Ultimate Multisite-ren funtzioak ezagutzeko modua handia da hau. Aurrera egin dezakezu default kontentua gehituz, edo gure irudiak lehenetik hasten nahi duzu, hori ezaugarri pasoa ezdu.

![Default content installation step](/img/installation/wizard-default-content.png)

### Pluginak Rekomendatuak (Recommended Plugins)

Rekomenduko pluginak instalatu dezakezu opsionala da. Gehituz gehituzu edo aurrera egin dezakezu.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Aurrez!

Zer da! Ultimate Multisite instalazioa amaitu da. Astezko **Network Admin Dashboard**-eko partirak tenure Website as a Service platform-a ez dira egin dezake.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Zer da, joko hasi!
