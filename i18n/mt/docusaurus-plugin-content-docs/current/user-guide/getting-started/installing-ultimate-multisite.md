---
title: Installazzjoni tal-Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installazzjoni ta Ultimate Multisite

:::note
Dan tutorial jiddeq li għandek it-installat u konfigurat WordPress Multisite. Biex tieħu bixx, għandu tqedda [dan tutorial](https://www.wpbeginner.com/glossary/multisite/) ta WP Beginner.
:::

## Installazzjoni tal-Plugin

Ultimate Multisite huwa disponibbli mill-gratu (free) fuq [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Min-fil **Network Admin Dashboard** tiegħek, tqedda għal **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Iċċekkja biex tiċċaqa **"Ultimate Multisite"** (ma' citazzjoni biex tkun it-eksakt) u se juri ukoll iż-riżultat ewliem. Iċċekkja **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Wara li tista' installat, iċċekkja **Network Activate** biex tivitalizza (activate) il-plugin f'kull nnetz tiegħek.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Wara l-attivazzjoni, tit-tivitalizza awtomatik għal Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Il-Setup Wizard jiddireddikkomandek biex tikkonga Ultimate Multisite f'daqqa ta 10 minuti.

### Welcome

Iċċekkja **Get Started** biex tibda.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

Dan it-step jikkontrolla informazzjoni tas-sistema tiegħek u l-installazzjoni ta WordPress biex tqassir li jidher li jittlaq il-reqiżum tal-Ultimate Multisite. Jekk kollha tista' tkun tajba, iċċekkja **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Botta Network Activate button (v2.6.1+)
Se Ultimate Multisite kien il-installat bil **m'għandhom ma jkun attivat fil-network** — biex naħares, se cliccaw fuq **Activate** (single-site) invece tal-**Network Activate** mill-screen tal-plugins ta network — il-step Pre-install Checks se jiskopri dan u tispari butta' **Network Activate**.

Biklikka fuq **Network Activate**, attivat il-plugin kulli l-network tiegħek awtomatikament. Wakad it-attiva, il-wizard jkompli normalment għall-step ta installazzjoni. Ma għandekx tixleb mill-wizard biex tfixxi l-stato tal-attivazzjoni.
:::

### Installazzjoni

L-installer se tgħmlu l-database tables li għalih huma bżonn u se tiinstalli l-file `sunrise.php` li Ultimate Multisite għandu biex jgħin. Clicka fuq **Install** biex tkompli.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Il-Kumprija Tieħed
Iġib informazzjoni ta' l-kumprija tiegħek u issaħħel il-currency diġament. Dan l-informazzjoni se tistabbilita kulli fl-platform WaaS tiegħek. Clicka fuq **Continue** meta tgħmlit.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Kontenut Diġament
Dan l-step jippermettik lek tinstall template predefinita, prodotti u kontenut oħra biex tibda. Dan huwa mod aħtonem biex ti tiffaħaq b'il-features ta Ultimate Multisite. Clicka fuq **Install** biex tista' l-content diġament, jew tixleb dan l-step se tista' tibda min il-zero.

![Default content installation step](/img/installation/wizard-default-content.png)

### Plugins Mjħallin
Tista' ti installa opzjonalment plugins kompanjoni mjerruġi. Clicka fuq **Install** biex tista' tininstallih jew tixleb biex tkun normalment.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Pronti!

Sehħi! L-installazzjoni tal-Ultimate Multisite tiegħek għad ssiġġa. Jidprogramma tista' tibda تبني il-Website tiegħek b'mod "as a Service" mill-**Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Mrid tista' tibda tfarxa!
