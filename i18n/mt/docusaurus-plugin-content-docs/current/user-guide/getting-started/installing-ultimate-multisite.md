---
title: L-installazzjoni ta' Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Installazzjoni ta' Ultimate Multisite

:::note
Dan it-tutorjal jassumi li diġà għandek WordPress Multisite installat u konfigurata. Biex titgħallem kif, iċċekkja [dan it-tutorjal](https://www.wpbeginner.com/glossary/multisite/) minn WP Beginner.
:::

## Installazzjoni tal-Plugin {#installing-the-plugin}

Ultimate Multisite huwa disponibbli b'xejn fuq [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Mill- **Dashboard ta' Amministratur tan-Netwerk** tiegħek, mur għal **Plugins → Żid Plugin Ġdid**.

![Paġna "Żid Plugin Ġdid" tal-Amministratur tan-Netwerk](/img/installation/add-new-plugin.png)

Fittex għal **"Ultimate Multisite"** (b'virgoletti għal korrispondenza eżatta) u se jidhru bħala l-ewwel riżultat. Ikklikka fuq **Installa Issa**.

![Riżultati tat-tfittix li juru Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Ladarba jiġi installat, ikklikka fuq **Attiva fin-Netwerk** biex tattiva l-plugin madwar in-netwerk kollu tiegħek.

![Plugin installat bil-buttuna "Attiva fin-Netwerk"](/img/installation/plugin-installed.png)

Wara l-attivazzjoni, ser tiġi awtomatikament dirett lejn il-Wizard tal-Isetup.

![Plugin attiv u mwaqqaf għall-wizard](/img/installation/plugin-activated.png)

## Wizard tal-Isetup {#setup-wizard}

Il-Wizard tal-Isetup jiggwidak fit-tip ta' Ultimate Multisite f'madwar 10 minuti.

### Merħba {#welcome}

Ikklikka fuq **Ibda** biex tibda.

![Skrin tal-merħba tal-Wizard tal-Isetup](/img/installation/wizard-welcome.png)

### Kontrolli ta' Qabel l-Installazzjoni {#pre-install-checks}

Dan il-pass jivverifika l-informazzjoni tas-sistema tiegħek u l-installazzjoni ta' WordPress biex jiżgura li jissodisfa r-rekwiżiti ta' Ultimate Multisite. Jekk kollox jidher tajjeb, ikklikka fuq **Mur għall-Pass Li Jmiss**.

![Kontrolli ta' qabel l-installazzjoni li juru r-rekwiżiti tas-sistema](/img/installation/wizard-pre-install-checks.png)

:::note Buttuna "Attiva fin-Netwerk" (v2.6.1+)
Jekk Ultimate Multisite ġie installat iżda **għadu mhux attiv fil-livell tan-netwerk** — pereżempju, jekk ikklikkajt fuq **Attiva** (single-site) minflok **Attiva fin-Netwerk** mill-iskrin tal-plugins tan-netwerk — il-pass tal-Kontrolli ta' Qabel l-Installazzjoni se jinduna f'dan u juru buttuna **Attiva fin-Netwerk**.

L-ikklikkjar fuq **Attiva fin-Netwerk** tattiva l-plugin madwar in-netwerk multisite kollu tiegħek awtomatikament. Ladarba jkun attiv, il-wizard ikompli normalment għall-pass tal-installazzjoni. M'hemmx bżonn li toħroġ mill-wizard biex issolva l-istatus tal-attivazzjoni.
:::

### Installazzjoni {#installation}

L-installer joħloq it-tabelli meħtieġa tad-database u jinstalla l-fajl `sunrise.php` li Ultimate Multisite jeħtieġ biex jaħdem. Ikklikka fuq **Installa** biex tkompli.

![Pass tal-installazzjoni li juru t-tabelli tad-database u sunrise.php](/img/installation/wizard-installation.png)

### Il-Kumpanija Tiegħek {#your-company}

Imla l-informazzjoni tal-kumpanija tiegħek u stabbilixxi l-munita default tiegħek. Din l-informazzjoni se tintuża matul il-pjattaforma WaaS tiegħek. Ikklikka fuq **Kompli** meta tkun lest.

![Pass tal-konfigurazzjoni "Il-Kumpanija Tiegħek"](/img/installation/wizard-your-company.png)

### Kontenut Default {#default-content}

Dan il-pass jippermettilek tinstalla templat, prodotti u kontenut ieħor ta' avviċinament definit minn qabel. Dan huwa mod tajjeb biex familjarizza ruħek mal-karatteristiċi ta' Ultimate Multisite. Ikklikka fuq **Installa** biex iżżid il-kontenut default, jew agħfas dan il-pass jekk tippreferi tibda mill-bidu.

![Pass tal-installazzjoni tal-kontenut default](/img/installation/wizard-default-content.png)

### Plugins Rakkomandati {#recommended-plugins}

Installa fakultattivament plugins kompann rakkomandati. Ikklikka fuq **Installa** biex iżżidhom jew agħfas biex tkompli.

![Pass tal-plugins rakkomandati](/img/installation/wizard-recommended-plugins.png)

### Lest! {#ready}

Hekk hu! L-installazzjoni ta' Ultimate Multisite tiegħek hija kompluta. Issa tista 'tibda tibni l-pjattaforma Website as a Service tiegħek mill- **Dashboard tal-Amministratur tan-Netwerk**.

![Isetup lest - Skrin "Lest"](/img/installation/wizard-ready.png)

![Dashboard tal-Amministratur tan-Netwerk b'Ultimate Multisite attiv](/img/installation/network-dashboard.png)

Mur u ibda tgawdi!
