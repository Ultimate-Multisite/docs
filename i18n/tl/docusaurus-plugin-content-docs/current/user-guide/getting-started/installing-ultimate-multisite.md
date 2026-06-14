---
title: Pag-install ng Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Pag-install ng Ultimate Multisite

:::note
Ang tutorial na ito ay ipinapalagay na mayroon ka nang naka-install at naka-configure na WordPress Multisite. Para malaman kung paano ito gawin, tingnan ang [tutorial na ito](https://www.wpbeginner.com/glossary/multisite/) ng WP Beginner.
:::

## Pag-install ng Plugin

Ang Ultimate Multisite ay libre sa [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Mula sa iyong **Network Admin Dashboard**, pumunta sa **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Hanapin ang **"Ultimate Multisite"** (gamitin ang quotes para sa eksaktong paghahanap) at ito ang lalabas bilang unang resulta. I-click ang **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Kapag na-install na, i-click ang **Network Activate** para ma-activate ang plugin sa buong network mo.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Pagkatapos mag-activate, awtomatikong ire-redirect ka sa Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Gagabayan ka ng Setup Wizard para i-configure ang Ultimate Multisite sa loob ng humigit-kumulang 10 minuto.

### Welcome

I-click ang **Get Started** para magsimula.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

Ang hakbang na ito ay magche-check ng impormasyon ng system mo at ng WordPress installation para masigurong nakakatugon ito sa mga requirements ng Ultimate Multisite. Kung okay ang lahat, i-click ang **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
Kung na-install ang Ultimate Multisite pero **hindi pa naka-activate sa network** — halimbawa, kung pinindot mo ang **Activate** (single-site) imbes na **Network Activate** mula sa screen ng mga network plugins — matutukoy ito ng Pre-install Checks step at magpapakita ng button na **Network Activate**.

Ang pagpindot sa **Network Activate** ay awtomatikong mag-a-activate ng plugin sa buong multisite network mo. Kapag na-activate na, magpapatuloy nang normal ang wizard papunta sa installation step. Hindi mo kailangang umalis sa wizard para ayusin ang activation state.
:::

### Installation

Gagawa ang installer ng mga kinakailangang database tables at mag-iinstall ng `sunrise.php` file na kailangan ng Ultimate Multisite para gumana. I-click ang **Install** para magpatuloy.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Ang Iyong Kumpanya

Punan ang impormasyon ng iyong kumpanya at itakda ang iyong default na currency. Gagamitin ang impormasyong ito sa buong platform ng WaaS mo. I-click ang **Continue** kapag tapos ka na.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content

Sa hakbang na ito, maaari mong i-install ang mga predefine template, produkto, at iba pang starter content. Napakagandang paraan ito para mas makilala mo ang mga features ng Ultimate Multisite. I-click ang **Install** para idagdag ang default na content, o laktawan itong hakbang kung gusto mong magsimula nang walang anumang laman.

![Default content installation step](/img/installation/wizard-default-content.png)

### Mga Inirerekomendang Plugin

Opsyonal na i-install ang mga inirerekomendang kasamang plugin. I-click ang **Install** para idagdag ang mga ito o laktawan para magpatuloy.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Handang-handa Na!

Tapos na 'yan! Kumpleto na ang iyong Ultimate Multisite installation. Maaari ka nang magsimula sa pagbuo ng iyong Website as a Service platform mula sa **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard na may Ultimate Multisite aktibo](/img/installation/network-dashboard.png)

Mag-enjoy ka na!
