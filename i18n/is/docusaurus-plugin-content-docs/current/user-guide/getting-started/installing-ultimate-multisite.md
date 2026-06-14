---
title: Innstillingar Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Innstalling Ultimate Multisite

:::note
Þessi leiðbeining hefur fyrir þér framfari að þú ert að hafa WordPress Multisite sett upp og hlut sett upp. Til að læra hvernig það gerist, skoða [þessa leiðbeininguna](https://www.wpbeginner.com/glossary/multisite/) af WP Beginner.
:::

## Innstalling Plugin-inn

Ultimate Multisite er til að skila freljandi á [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Frá **Network Admin Dashboard** þínu, ferðu yfir í **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Leita eftir **"Ultimate Multisite"** (með einkennum fyrir nákvæma samsvar) og það mun sýna sig sem fyrsta skýrslu. Klikka á **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Eftir að þú hefur sett upp það, klikka á **Network Activate** til að aktíva plugin-inn í hellu netinu þínu.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Eftir aktívað það verður þú sjálf án þess að vera leiðréttur á Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard mun leiða þig í uppsetningu Ultimate Multisite í nýjum 10 mínútum.

### Velkomið

Klikka á **Get Started** til að byrja.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Fyrir innstalls skrekkar

Þessi skref er skoðað yfir upplýsingar um kerfi þitt og WordPress innstallsinn til að tryggja að það uppfylli kröfur Ultimate Multisite. Ef allt sé í raunræða, klikka á **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Knúinn Aktivér nút (v2.6.1+)
Ef Ultimate Multisite var nýtt, en **hefur ekki enn aktivert netið** — t.d. ef þú klikkt **Activate** (single-site) í stað **Network Activate** frá skráningum fyrir netinu — mun Pre-install Checks stigið upptíma þetta og sýna nútíma **Network Activate** nút.

Þegar þú klikkur á **Network Activate** aktiviserir þú plugininn í heildar netinu þínu sjálf. Eftir að hann er aktivert, haldar leiðræðin nálægt annars sem við innreiðslu. Þú þarft ekki að láta leyndarmálið til að laga aktivationsáttan.
:::

### Innreiðsla

Installerinn mun skapa nauðsynlegar database-taflur og installa `sunrise.php` skráann sem Ultimate Multisite þarf til að virka. Klikka á **Install** til að halda fram.

![Innreiðslu stigi sýn database-taflur og sunrise.php](/img/installation/wizard-installation.png)

### Fyrir fyrirtilshópinn þinn

Fulli inn upplýsingum um fyrirtilið þitt og setja á skilvirkjafangurinn þinn. Þessi upplýsingar verða nota í heildar WaaS platform þinni. Klikka á **Continue** þegar þú ert færdur.

![Stigi fyrir fyrirtilshópinn þinn](/img/installation/wizard-your-company.png)

### Skilvirkur innihaldi

Þessi stigi leysir þér að installa fyrirhugaðar mallar, vörur og annað startinhaldi. Þetta er glínn leið til að fari með þér í kjarnafyrirfarandi eiginleika Ultimate Multisite. Klikka á **Install** til að bæta við skilvirkjann innihaldi, eða skoða stigið ef þú vilt byrja frá nulli.

![Stigi fyrir skilvirkjan innihaldinn](/img/installation/wizard-default-content.png)

### Aðskilinn pluginir

Valfræðlega installa tillaga samstarfsgildi pluginir. Klikka á **Install** til að bæta við þær eða skoða stigið ef þú vilt halda fram.

![Stigi fyrir tillaga pluginir](/img/installation/wizard-recommended-plugins.png)

### Klár!

Það er klár! Innstallsinn á Ultimate Multisite þínu er fullbiður. Þú getur nú byrjað að byggja síðu sem webssérvi (Website as a Service) frá **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Byrjaðu að leika!
