---
title: Instaliranje Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalacija Ultimate Multisite

:::note
Ovaj tutorial pretpostavlja da već imate instaliran i podešen WordPress Multisite. Za učenje kako to napraviti, pogledajte [ovaj tutorial](https://www.wpbeginner.com/glossary/multisite/) od WP Beginnera.
:::

## Instalacija Plugin-a

Ultimate Multisite je besplatan na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Iz **Network Admin Dashboarda**, idite na **Plugins → Add New Plugin**.

![Stranica za dodavanje novog plugin-a u Network Adminu](/img/installation/add-new-plugin.png)

Pretražite **"Ultimate Multisite"** (s navodnicima za točno podudaranje) i pojavit će se kao prvi rezultat. Kliknite na **Install Now**.

![Rezultati pretrage koji prikazuju Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Nakon instalacije, kliknite na **Network Activate** kako biste aktivirali plugin na cijeloj mreži.

![Plugin instaliran s gumbom Network Activate](/img/installation/plugin-installed.png)

Nakon aktivacije, automatski ćete biti preusmjereni na Setup Wizard.

![Plugin aktiviran i preusmjeren na wizardu](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard će vas voditi kroz konfiguraciju Ultimate Multisite u otprilike 10 minuta.

### Dobrodošli

Kliknite na **Get Started** da počnete.

![Stranica dobrodošlice Setup Wizarda](/img/installation/wizard-welcome.png)

### Provjere prije instalacije

Ovaj korak provjerava informacije o vašem sustavu i WordPress instalaciji kako bi se osiguralo da ispunjavate zahtjeve Ultimate Multisite. Ako sve izgleda dobro, kliknite na **Go to the Next Step**.

![Provjere prije instalacije koji prikazuju zahtjeve sustava](/img/installation/wizard-pre-install-checks.png)

:::note Dugme za Ultimate Multisite (v2.6.1+)
Ako je Ultimate Multisite instaliran, ali **jo još nije aktiviran na mrežu** — na primjer, ako ste kliknuli na **Aktiviraj** (single-site) umjesto **Network Activate** s ekrana za pluginove mreže — korak Pre-install Checks će to primijetiti i prikazati gumb **Network Activate**.

Klikom na **Network Activate** aktivirate plugin na cijelu svoju multisite mrežu automatski. Nakon aktiviranja, wizard nastavlja normalno do koraka instalacije. Ne morate napustiti wizard da biste popravili stanje aktivacije.
:::

### Instalacija

Installer će kreirati potrebne tabele u bazi podataka i instalirati datoteku `sunrise.php` koju Ultimate Multisite treba za rad. Kliknite na **Install** da nastavite.

![Korak instalacije prikazuje tabele u bazi podataka i sunrise.php](/img/installation/wizard-installation.png)

### Vaša tvrtka

Popunite informacije o svojoj tvrtki i postavite svoju podrazmjenu valutu. Ove informacije će se koristiti tijekom cijelog WaaS platforme. Kliknite na **Continue** kada završite.

![Korak konfiguracije vaše tvrtke](/img/installation/wizard-your-company.png)

### Podrazmjeni sadržaj

Ovim korakom možete instalirati unaprijed definirane šablone, proizvode i drugi početni sadržaj. Ovo je odličan način da se upoznate s značajkama Ultimate Multisite. Kliknite na **Install** za dodavanje podrazmjenskog sadržaja, ili preskočite ovaj korak ako preferirate početi od nule.

![Korak instalacije podrazmjenskog sadržaja](/img/installation/wizard-default-content.png)

### Preporučeni pluginovi

Opcionalno instalirajte preporučene dopunske pluginove. Kliknite na **Install** za dodavanje ili preskočite da biste nastavili.

![Korak preporučenih pluginova](/img/installation/wizard-recommended-plugins.png)

### Spremni!

To je to! Vaša instalacija Ultimate Multisite je gotova. Sada možete početi graditi svoju platformu za web kao uslugu (Website as a Service) iz **Network Admin Dashboarda**.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Sada slobodno počnite raditi!
