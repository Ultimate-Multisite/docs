---
title: Ultimate Multisite instalatzen
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite instalatzea {#installing-ultimate-multisite}

:::note
Tutoriale honek espezifikatzen du WordPress Multisite dagoeneko instalatuta eta konfiguraturik egon behar dela. Nola egin jakiteko, ikus WP Beginner-ek sortutako tutorial hau: [this tutorial](https://www.wpbeginner.com/glossary/multisite/).
:::

## Pluginaren instalazioa {#installing-the-plugin}

Ultimate Multisite doan eskuragarri dago [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) webgunean.

**Sareko Administratzailearen Dashboardetik**, joan **Plugins → Gehitu plugin berria**.

![Sareko administratzailearen "Plugin berria gehitu" orrialdea](/img/installation/add-new-plugin.png)

Bilatu **"Ultimate Multisite"** (komatxoekin, hobekuntza zehatzagoa lortzeko), eta lehen emaitza gisa agertuko da. Klik egin **Instalatu**.

![Emaitzak "Ultimate Multisite" erakusten ditu](/img/installation/search-ultimate-multisite.png)

Behin instalatuta, klik egin **Sare aktibatu** pluginaren funtzionalitatea zure sare osoan aktibatzeko.

![Plugin bat instalatuta eta "Sare aktibatu" botoiarekin](/img/installation/plugin-installed.png)

Aktibatzean, automatikoki bideratuko zaitu Konfigurazio Aulkietara.

![Plugin bat aktibatuta eta aulkietara bideratuta](/img/installation/plugin-activated.png)

## Konfigurazio Aulkia {#setup-wizard}

Konfigurazio Aulkiak Ultimate Multisite konfiguratzeko gidatzen zaitu, gutxi gorabehera 10 minututan.

### Ongi etorri {#welcome}

Klik egin **Hasi** botoian hasi ahal izateko.

![Konfigurazio Aulkiaren ongietorri pantaila](/img/installation/wizard-welcome.png)

### Aurreinstalazioaren egiaztapenak {#pre-install-checks}

Urrats honek zure sistemako informazioa eta WordPress instalazioa egiazten ditu, Ultimate Multisiteren baldintzak betetzen dituela ziurtatzeko. Dena ondo badago, klik egin **Joan hurrengo urratsera**.

![Aurreinstalazioaren egiaztapenak sistema-baldintzak erakusten ditu](/img/installation/wizard-pre-install-checks.png)

:::note "Sare aktibatu" botoia (b2.6.1+)
Ultimate Multisite instalatuta badago, baina **oraindik ez sarean aktibatuta** —adibidez, "Aktibatu" (gune bakarreko) klik egin baduzu, sareko pluginen pantailatik ordez "Sare aktibatu" botoian—, aurreinstalazioaren egiaztapen urratzak hori hautemango du eta **Sare aktibatu** botoia erakutsiko du.

**Sare aktibatu** botoian klik eginez pluginaren funtzionalitatea automatikoki aktibatuko da zure multisite sare osoan. Aktibatuta, aulkia normalean jarraituko du instalazio urratsera. Ez dago aukeratatik irten beharrik aktibazio egoera konpontzeko.
:::

### Instalazioa {#installation}

Instalatzaileak beharrezko datu-base taulak sortuko ditu eta `sunrise.php` fitxategia instalatuko du, Ultimate Multisitek funtzionatzeko behar duen fitxategia. Klik egin **Instalatu** aurrera egiteko.

![Instalazio urratsa datu-base taulak eta sunrise.php erakusten ditu](/img/installation/wizard-installation.png)

### Zure enpresa {#your-company}

Sartu zure enpresaren informazioa eta ezarri lehenetsitako moneta. Informazio hau zure WaaS plataforman zehar erabiliko da. Klik egin **Jarraitu** amaitu ondoren.

![Zure enpresaren konfigurazio urratsa](/img/installation/wizard-your-company.png)

### Lehenetsitako edukia {#default-content}

Urrats honek aurrez definitutako txantiloiak, produktuak eta beste hasierako eduki batzuk instalatzeko aukera ematen dizu. Hau Ultimate Multisiteren funtzioez ezagutzeko modu bikaina da. Klik egin **Instalatu** lehenetsitako edukia gehitzeko, edo utzi urrats hau nahiago baduzu hasiera batean.

![Lehenetsitako eduki instalazio urratsa](/img/installation/wizard-default-content.png)

### Gomendatutako pluginak {#recommended-plugins}

Aukeran, gomendatutako laguntzaile pluginak instala ditzakezu. Klik egin **Instalatu** gehitzeko edo utzi aurrera egiteko.

![Gomendatutako pluginen urratsa](/img/installation/wizard-recommended-plugins.png)

### Prest! {#ready}

Hori da dena! Zure Ultimate Multisite instalazioa amaituta dago. Orain hasi dezakezu zure "Webgunea Zerbitzu gisa" plataforma eraikitzen **Sareko Administratzailearen Dashboardetik**.

![Konfigurazioa amaituta - Prest pantaila](/img/installation/wizard-ready.png)

![Sareko administratzailearen dashboard, Ultimate Multisite aktibatuta](/img/installation/network-dashboard.png)

Aurrera eta ondo pasatu!
