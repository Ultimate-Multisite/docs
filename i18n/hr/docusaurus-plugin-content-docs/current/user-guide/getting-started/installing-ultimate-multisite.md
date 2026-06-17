---
title: Instaliranje Ultimate Multisitea
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instaliranje Ultimate Multisite

:::note
Ovaj vodič pretpostavlja da već imate instaliran i konfiguriran WordPress Multisite. Za više informacija pogledajte [ovu lekciju](https://www.wpbeginner.com/glossary/multisite/) na WP Beginneru.
:::

## Instaliranje dodatka

Ultimate Multisite dostupan je besplatno na [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

U **nadzornoj ploči mreže**, idite na **Dodaci → Dodaj novi dodatak**.

![Stranica za dodavanje novog dodatka u nadzornoj ploči mreže](/img/installation/add-new-plugin.png)

Pretražite **"Ultimate Multisite"** (s navodnicima za točan rezultat), pojavit će se kao prvi rezultat. Kliknite **Instaliraj sada**.

![Rezultati pretraživanja koji prikazuju Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Nakon instalacije, kliknite **Aktiviraj u mreži** da biste aktivirali dodatak u cijeloj vašoj mreži.

![Instaliran dodatak s gumbom Aktiviraj u mreži](/img/installation/plugin-installed.png)

Nakon aktivacije bit ćete automatski preusmjereni na čarobnjak za postavljanje.

![Dodatak je aktiviran i preusmjeren na čarobnjaka](/img/installation/plugin-activated.png)

## Čarobnjak za postavljanje

Čarobnjak za postavljanje vodit će vas kroz konfiguriranje Ultimate Multisite u otprilike 10 minuta.

### Dobrodošli

Kliknite **Započnite** da biste započeli.

![Početni zaslon čarobnjaka za postavljanje](/img/installation/wizard-welcome.png)

### Predinstalacijske provjere

Ovaj korak provjerava informacije o vašem sustavu i instalaciji WordPressa kako bi se osiguralo da ispunjava zahtjeve Ultimate Multisitea. Ako sve izgleda u redu, kliknite **Idite na sljedeći korak**.

![Predinstalacijske provjere koje prikazuju sistemske zahtjeve](/img/installation/wizard-pre-install-checks.png)

:::note Gumb Aktiviraj u mreži (v2.6.1+)
Ako je Ultimate Multisite instaliran, ali **još nije aktiviran u mreži** – na primjer, ako ste kliknuli **Aktiviraj** (za jednu web-lokaciju) umjesto **Aktiviraj u mreži** s ekrana mrežnih dodataka – korak predinstalacijskih provjera to će otkriti i prikazati gumb **Aktiviraj u mreži**.

Klikom na **Aktiviraj u mreži** automatski se aktivira dodatak u cijeloj vašoj multisite mreži. Nakon aktivacije, čarobnjak nastavlja normalno do koraka instalacije. Ne morate napustiti čarobnjaka da biste ispravili stanje aktivacije.
:::

### Instalacija

Instalator će stvoriti potrebne tablice baze podataka i instalirati datoteku `sunrise.php` koja je potrebna za funkcioniranje Ultimate Multisitea. Kliknite **Instalirajte** da biste nastavili.

![Korak instalacije koji prikazuje tablice baze podataka i datoteku sunrise.php](/img/installation/wizard-installation.png)

### Vaša tvrtka

Unesite informacije o svojoj tvrtki i postavite zadani valuta. Ove će se informacije koristiti u cijeloj vašoj WaaS platformi. Kliknite **Nastavi** kada završite.

![Korak konfiguracije "Vaša tvrtka"](/img/installation/wizard-your-company.png)

### Zadana sadržaja

Ovaj korak vam omogućuje instaliranje unaprijed definiranih predložaka, proizvoda i ostalih početnih sadržaja. Ovo je odličan način da se upoznate s značajkama Ultimate Multisitea. Kliknite **Instalirajte** da biste dodali zadani sadržaj ili preskočite ovaj korak ako želite započeti od nule.

![Korak instalacije zadanog sadržaja](/img/installation/wizard-default-content.png)

### Preporučeni dodaci

Opcionalno, instalirajte preporučene dodatne module. Kliknite **Instalirajte** da biste ih dodali ili preskočite kako biste nastavili.

![Korak preporučenih dodataka](/img/installation/wizard-recommended-plugins.png)

### Spremni!

To je to! Vaša instalacija Ultimate Multisitea je završena. Sada možete započeti s izradom svoje platforme Website as a Service (WaaS) iz **nadzorne ploče mreže**.

![Postavljanje je dovršeno - zaslon Spremni](/img/installation/wizard-ready.png)

![Nadzorna ploča mreže s aktiviranim Ultimate Multisiteom](/img/installation/network-dashboard.png)

Slobodno se zabavite!
