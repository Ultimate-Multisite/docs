---
title: Instaliranje Ultimate Multisite-a
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instaliranje Ultimate Multisite

:::note
Ovaj vodič pretpostavlja da već imate instaliran i konfigurisan WordPress Multisite. Da biste saznali kako to učiniti, pogledajte ovaj tutorijal [ovdje](https://www.wpbeginner.com/glossary/multisite/) na WP Beginner-u.
:::

## Instaliranje dodatka

Ultimate Multisite je besplatno dostupan na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Iz vašeg **Network Admin Dashboarda**, idite na **Plugins → Add New Plugin**.

![Stranica Network Admin Add New Plugin](/img/installation/add-new-plugin.png)

Pretražite za **"Ultimate Multisite"** (sa navodnicima za tačnu pretragu) i pojavit će se kao prvi rezultat. Kliknite **Install Now**.

![Rezultati pretrage koji prikazuju Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Nakon instalacije, kliknite **Network Activate** da biste aktivirali dodatak u cijeloj vašoj mreži.

![Dodatak je instaliran sa dugmetom Network Activate](/img/installation/plugin-installed.png)

Nakon aktivacije, automatski ćete biti preusmjereni na Setup Wizard.

![Dodatak je aktiviran i preusmjeren na čarobnjak](/img/installation/plugin-activated.png)

## Čarobnjak za podešavanje

Čarobnjak za podešavanje će vas voditi kroz konfiguraciju Ultimate Multisite u otprilike 10 minuta.

### Dobrodošli

Kliknite **Get Started** da biste započeli.

![Početni ekran čarobnjaka](/img/installation/wizard-welcome.png)

### Prethodne provjere

Ovaj korak provjerava informacije o vašem sistemu i WordPress instalaciji kako bi se uvjerio da ispunjava zahtjeve Ultimate Multisite-a. Ako sve izgleda dobro, kliknite **Go to the Next Step**.

![Prethodne provjere koje prikazuju sistemske zahtjeve](/img/installation/wizard-pre-install-checks.png)

:::note Dugme Network Activate (v2.6.1+)
Ako je Ultimate Multisite instaliran, ali **još nije aktiviran na nivou mreže** — na primjer, ako ste kliknuli **Activate** (za jednu lokaciju) umjesto **Network Activate** sa ekrana mrežnih dodataka — korak prethodnih provjera će to otkriti i prikazati dugme **Network Activate**.

Klikom na **Network Activate**, aktivira se dodatak u cijeloj vašoj multisite mreži. Nakon aktivacije, čarobnjak normalno nastavlja do koraka instalacije. Nema potrebe da napustite čarobnjak kako biste riješili stanje aktivacije.
:::

### Instalacija

Instaler će kreirati potrebne tabele baze podataka i instalirati datoteku `sunrise.php` koja je potrebna za funkcioniranje Ultimate Multisite-a. Kliknite **Install** da biste nastavili.

![Korak instalacije koji prikazuje tabele baze podataka i sunrise.php](/img/installation/wizard-installation.png)

### Vaša kompanija

Unesite informacije o vašoj kompaniji i postavite zadani novčani iznos. Ove informacije će se koristiti u cijeloj vašoj WaaS platformi. Kliknite **Continue** kada završite.

![Korak konfiguracije Vaše kompanije](/img/installation/wizard-your-company.png)

### Zadana sadržina

Ovaj korak vam omogućava da instalirate unaprijed definirane predloške, proizvode i ostalu početnu sadržinu. Ovo je odličan način da se upoznate sa značajkama Ultimate Multisite-a. Kliknite **Install** da biste dodali zadani sadržaj ili preskočite ovaj korak ako želite da počnete od nule.

![Korak instalacije zadane sadržine](/img/installation/wizard-default-content.png)

### Preporučeni dodaci

Opciono, instalirajte preporučene dodatne module. Kliknite **Install** da biste ih dodali ili preskočite da biste nastavili.

![Korak preporučenih dodataka](/img/installation/wizard-recommended-plugins.png)

### Spremni!

To je to! Vaša instalacija Ultimate Multisite je završena. Sada možete početi graditi svoju Website as a Service platformu iz **Network Admin Dashboarda**.

![Podešavanje je završeno - ekran Spremni](/img/installation/wizard-ready.png)

![Network Admin Dashboard sa aktivnim Ultimate Multisite-om](/img/installation/network-dashboard.png)

Slobodno se zabavite!
