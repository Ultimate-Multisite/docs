---
title: Asennetaan Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisiten asennus

:::note
Tämä ohje olettaa, että sinulla on jo asennettuna ja konfiguroitu WordPress Multisite. Tiedät tarkemmin siitä, miten se tehdään [tässä ohjeessa](https://www.wpbeginner.com/glossary/multisite/) WP Beginnerin ohjeesta.
:::

## Pluginin asentaminen

Ultimate Multisite on saatavilla ilmaiseksi [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Siirry **Network Admin Dashboard** -valikosta kohtaan **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Etsi hakukentästä **"Ultimate Multisite"** (käytä lainausmerkkejä tarkkaa vastaavuutta varten), ja se ilmestyy ensimmäiseksi tulokseksi. Napsauta **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Asennuksen jälkeen napsauta **Network Activate** -painiketta aktivoitaksesi pluginin koko verkostosi alueella.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Aktivoimisen jälkeen sinut ohjataan automaattisesti Setup Wizardiin.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard ohjaa sinua konfiguroimaan Ultimate Multisite noin 10 minuutissa.

### Tervetuloa

Napsauta **Get Started** aloittaaksesi.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Asennuksen esikatselut

Tämä vaihe tarkistaa järjestelmän tiedot ja WordPressin asennuksen varmistaakseen, että ne täyttävät Ultimate Multisiten vaatimukset. Jos kaikki näyttää kunnolliselta, napsauta **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate -painoke (v2.6.1+)
Jos Ultimate Multisite on asennettu mutta sitä **ei ole vielä aktivoitu verkossa** – esimerkiksi jos klikit **Aktivoi** (yksikkö-sivusto) sen sijaan, että klikkaisit **Verkkoaktivoi** verkko-lisäosien näytöltä – Pre-install Checks -vaihe havaitsee tämän ja näyttää sinulle **Network Activate** -painikkeen.

**Network Activate** -painikkeen klikkaaminen aktivoi lisäosan automaattisesti koko multisite-verkossasi. Aktivoit sen jälkeen ohjain jatkaa normaalisti asennusvaiheeseen. Sinun ei tarvitse poistua ohjaimesta korjataksesi aktivaatiotilaa.
:::

### Asennus

Asennin ohjelma luo tarvittavat tietokantataulut ja asentaa `sunrise.php`-tiedoston, jota Ultimate Multisite tarvitsee toimimaan. Klikkaa **Install** jatkaaksesi.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Yrjäsi

Täytä yritystietosi ja aseta oletuskurenssi. Tätä tietoa käytetään koko WaaS-alustallasi. Klikkaa **Continue** kun olet valmis.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Oletussisältö

Tässä vaiheessa voit asentaa määriteltyjä malleja, tuotteita ja muuta aloitussisältöä. Tämä on hyvä tapa tutustua Ultimate Multisiten ominaisuuksiin. Klikkaa **Install** lisätäksesi oletus sisällön tai ohita tämä vaihe, jos haluat aloittaa tyhjästä.

![Default content installation step](/img/installation/wizard-default-content.png)

### Suositellut lisäosat (Plugins)

Asenna valinnaisesti suositellut kumppanilistat. Klikkaa **Install** niiden lisäämiseksi tai ohita jatkaaksesi.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Valmis!

Valmis! Ultimate Multisite -asennuksesi on valmis. Voit nyt aloittaa verkkosivustosi rakentamisen Website as a Service -alustana **Network Admin Dashboard** -painikkeen kautta.

![Asennus valmis - Valmiit ruutu](/img/installation/wizard-ready.png)

![Verkkoadminin hallintapaneeli Ultimate Multisite aktiivisena](/img/installation/network-dashboard.png)

Mene ja nauti!
