---
title: Instaliranje Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalacija Ultimate Multisite

:::note
Ovaj tutorial pretpostavlja da već imate instaliran i podešen WordPress Multisite. Da biste naučili kako, pogledajte [ovaj tutorial](https://www.wpbeginner.com/glossary/multisite/) od WP Beginner-a.
:::

## Instalacija Plagana (Plugin)

Ultimate Multisite je besplatan na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Iz **Network Admin Dashboard**-a, idite na **Plugins → Add New Plugin**.

![Stranica za dodavanje novog plugina u Network Adminu](/img/installation/add-new-plugin.png)

Pretražite **"Ultimate Multisite"** (sa navodnicima za tačno poklapanje) i pojavit će se kao prvi rezultat. Kliknite na **Install Now**.

![Rezultati pretrage koji pokazuju Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Nakon instalacije, kliknite na **Network Activate** da aktivirate plugin u cijeloj mreži.

![Plugin instaliran sa dugmetom Network Activate](/img/installation/plugin-installed.png)

Nakon aktivacije, automatski ćete biti preusmjereni na Setup Wizard.

![Plugin aktiviran i preusmjeren na wizardu](/img/installation/plugin-activated.png)

## Setup Wizard (Wizard za podešavanje)

Setup Wizard će vas voditi kroz konfigurisanje Ultimate Multisite u otprilike 10 minuta.

### Welcome (Dobrodošli)

Kliknite na **Get Started** da počnete.

![Ekran dočekivanja Setup Wizard-a](/img/installation/wizard-welcome.png)

### Pre-install Checks (Provere pre instalacije)

Ovaj korak proverava informacije o vašem sistemu i WordPress instalaciji kako bi se osiguralo da ispunjavate zahteve Ultimate Multisite. Ako sve izgleda dobro, kliknite na **Go to the Next Step**.

![Pre-instalacijske provere koje pokazuju sistemske zahteve](/img/installation/wizard-pre-install-checks.png)

:::note Dugme za dugme Network Activate (v2.6.1+)
Ako je Ultimate Multisite instaliran, ali **jo još nije aktiviran u mreži** — na primer, ako ste kliknuli na **Activate** (single-site) umesto **Network Activate** sa ekrana za pluginove mreže — korak Pre-install Checks će to primetiti i prikazati dugme **Network Activate**.

Klikom na **Network Activate** plugin se automatski aktivira u celoj vašoj multisite mreži. Nakon aktivacije, wizard nastavlja normalno do koraka instalacije. Ne morate napustiti wizard da biste popravili stanje aktivacije.
:::

### Instalacija

Installer će kreirati potrebne baze podataka i instalirati fajl `sunrise.php` koji Ultimate Multisite treba da radi. Kliknite na **Install** da nastavite.

![Korak instalacije prikazuje tabele baze podataka i sunrise.php](/img/installation/wizard-installation.png)

### Vaša kompanija

Popunite informacije o vašoj firmi i postavite svoju podrazumevanu valutu. Ove informacije će se koristiti tokom cele vaše WaaS platforme. Kliknite na **Continue** kada završite.

![Korak konfiguracije vaše kompanije](/img/installation/wizard-your-company.png)

### Podrazumevani sadržaj

Ovim korakom možete instalirati unapred definisane šablone, proizvode i drugi početni sadržaj. Ovo je odličan način da se upoznate sa funkcijama Ultimate Multisite. Kliknite na **Install** da dodate podrazumevani sadržaj, ili preskočite ovaj korak ako preferirate da počnete od nule.

![Korak instalacije podrazumevanog sadržaja](/img/installation/wizard-default-content.png)

### Preporučeni pluginovi

Opciono instalirajte preporučene dopunske pluginove. Kliknite na **Install** da ih dodate ili preskočite da biste nastavili.

![Korak preporučenih pluginova](/img/installation/wizard-recommended-plugins.png)

### Spremni!

To je to sve! Vaša instalacija Ultimate Multisite je završena. Sada možete početi da gradite svoju platformu za veb sa uslugom (Website as a Service) iz **Network Admin Dashboard**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Sada slobodno počnite da se zabavljate!
