---
title: Instaliranje Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalacija Ultimate Multisite

:::note
Ovaj tutorijal pretpostavlja da već imate instaliran i konfigurisan WordPress Multisite. Da biste saznali kako, pogledajte [ovaj tutorijal] od WP Beginner-a.
:::

## Instalacija Plugin-a

Ultimate Multisite je besplatan na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Sa vašeg **Network Admin Dashboard-a**, idite na **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Pretražite **"Ultimate Multisite"** (sa navodnicima za tačan rezultat) i pojavit će se kao prvi rezultat. Kliknite na **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Nakon instalacije, kliknite na **Network Activate** da aktivirate plugin širom vaše mreže.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Nakon aktivacije, automatski ćete biti preusmjereni na Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard će vas voditi kroz konfigurisanje Ultimate Multisite u roku od otprilike 10 minuta.

### Dobrodošli

Kliknite na **Get Started** da počnete.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Provjere prije instalacije

Ovaj korak provjerava informacije o vašem sistemu i instalaciju WordPressa kako bi se osiguralo da zadovoljavaju zahtjeve Ultimate Multisite-a. Ako sve izgleda dobro, kliknite na **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
Ako je Ultimate Multisite instaliran, ali **još nije network-aktiviran** — na primjer, ako ste kliknuli na **Activate** (samo-sajt) umjesto **Network Activate** sa ekrana network plugin-a — korak Pre-install Checks će to detektovati i prikazati dugme **Network Activate**.

Klikom na **Network Activate** plugin se automatski aktivira širom vaše multisite mreže. Nakon aktivacije, wizard normalno nastavlja na korak instalacije. Ne morate napuštati wizard da biste popravili status aktivacije.
:::

### Instalacija

Instalator će kreirati potrebne baze podataka i instalirati `sunrise.php` datoteku koja je Ultimate Multisite-u potrebna za funkcionisanje. Kliknite na **Install** da nastavite.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Vaša kompanija

Popunite informacije o vašoj kompaniji i postavite zadnju valutu. Ove informacije će se koristiti širom vaše WaaS platforme. Kliknite na **Continue** kada završite.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Podrazumevani sadržaj

Ovaj korak vam omogućava da instalirate unaprijed definisane šablone, proizvode i drugi početni sadržaj. Ovo je odličan način da se upoznate sa funkcijama Ultimate Multisite-a. Kliknite na **Install** da dodate podrazumevani sadržaj, ili preskočite ovaj korak ako preferirate da počnete od nule.

![Default content installation step](/img/installation/wizard-default-content.png)

### Preporučeni pluginovi

Opcionalno instalirajte preporučene dodatne pluginove. Kliknite na **Install** da ih dodate ili preskočite da nastavite.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Spreman!

To je sve! Vaša instalacija Ultimate Multisite-a je završena. Sada možete početi graditi svoju Website as a Service platformu sa **Network Admin Dashboard-a**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Slobodno nastavite i uživajte!
