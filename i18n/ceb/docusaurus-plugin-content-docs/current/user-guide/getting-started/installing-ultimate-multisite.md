---
title: Pag-install sa Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Pag-instalar sa Ultimate Multisite

:::note
Kini nga tutorial nagasugil nga naa na kay WordPress Multisite nga gi-install ug gi-configure. Aron makat-on unsa, tan-awa kining [tutorial](https://www.wpbeginner.com/glossary/multisite/) ni WP Beginner.
:::

## Pag-install sa Plugin

Ang Ultimate Multisite libre ra sa [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Gikan sa imong **Network Admin Dashboard**, adto sa **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

I-search ang **"Ultimate Multisite"** (gamit og quotes para sa eksaktong pagmatch) ug kini magpakita isip una nga resulta. I-click ang **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Human ma-install, i-click ang **Network Activate** aron ma-activate ang plugin sa tibuok imong network.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Pagkahuman sa pag-activate, awtomatikong dad-an ka sa Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Ang Setup Wizard maggiya nimo sa pag-configure sa Ultimate Multisite sulod mga 10 minutos.

### Welcome

I-click ang **Get Started** aron magsugod.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

Kini nga lakang mag-check sa impormasyon sa imong sistema ug sa WordPress installation para masiguro nga nakatubag kini sa mga kinahanglanon sa Ultimate Multisite. Kung tanan okay, i-click ang **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
Kung na-install ang Ultimate Multisite pero **wala pa kini gi-activate sa network** — pananglitan, kung nag-click ka og **Activate** (single-site) imbes nga **Network Activate** gikan sa screen sa mga network plugins — ang Pre-install Checks step ma-detect ni ug magpakita og **Network Activate** button.

Ang pag-click sa **Network Activate** ma-activate kini sa plugin sa tibuok imong multisite network awtomatiko. Human ma-activate, padayon ang wizard normal ngadto sa installation step. Kinahanglan nimo nga dili ka mobiya sa wizard para ayuhon ang activation state.
:::

### Installation

Ang installer maghimo sa mga kinahanglanon nga database tables ug i-install ang `sunrise.php` file nga gikinahanglan sa Ultimate Multisite aron molihok kini. I-click ang **Install** para magpadayon.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company

Pun-on ang imong impormasyon sa kompanya ug i-set ang imong default nga currency. Kini nga impormasyon gamiton sa tibuok panahon sa imong WaaS platform. I-click ang **Continue** kung tapos na nimo.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content

Kini nga step magtugot kanimo sa pag-install og mga predefined templates, products, ug uban pang starter content. Maayo ni nga paagi aron makaila ka sa mga features sa Ultimate Multisite. I-click ang **Install** para dugangan ang default content, o lakaw lang kung gusto nimo magsugod gikan sa wala pa.

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins

Optional nga i-install ang mga recommended companion plugins. I-click ang **Install** para dugangan kini o lakaw lang kung gusto nimo magpadayon.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready!

Tapos na! Ang imong Ultimate Multisite installation kay kompleto na. Mahimo na nimo magsugod sa paghimo og Website as a Service platform gikan sa **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Padayon na ug maglibog!
