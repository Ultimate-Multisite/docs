---
title: Instaluojama Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Instalavimas Ultimate Multisite

:::note
Šis tutorial prasideda tam tada, kad turite įdaliotą ir konfigūrintą WordPress Multisite. Norėdami sužinoti daugiau apie tai, rekomenduojame peržiūrėti [šį tutorialį](https://www.wpbeginner.com/glossary/multisite/) WP Beginner.
:::

## Pluginio įdalioti

Ultimate Multisite yra laisvai naudoti platformoje [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Nuo savo **Network Admin Dashboard** eikite į **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Paieškite **"Ultimate Multisite"** (su citraidomis, kad būtų tikslus atitinkamas) ir jis pasirodys kaip pirmasis rezultatas. Spauskite **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Po įdaliotoje instalacijoje spauskite **Network Activate**, kad aktyvuotumėte pluginį visame savo tinkluose.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Aktyvuojimo po to jūs būsite automatiškai nukreipti į Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard padės jums nustatyti Ultimate Multisite apie 10 minučių.

### Prisijungimas

Spauskite **Get Started**, kad pradėtumėte.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install patikrinimai

Šis žingsnis patikrina jūsų sistemos informaciją ir WordPress įdaliotą, kad užtikrintų, kad jis atitinka Ultimate Multisite reikalavimus. Jei viskas atrodo tinkamai, spauskite **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Mytažinimo mygtukas Network Activate (v2.6.1+)
Jei Ultimate Multisite buvo įdėtas, bet **neatsisijunčiam** — pavyzdžiui, jei pasirinkote **Activate** (vienas-site) instead of **Network Activate** iš tinklo pluginų ekrano — Pre-install Checks žingsnis tai pamatys ir pateiks jums mygtuką **Network Activate**.

Spausdami **Network Activate**, jūs automatiškai aktyvuojate šį plugin visame jūsų multisite tinklu. Aktyvuotas po to, vizualizator tęsiasi normaliai į įdėjimų žingsnį. Jums ne reikia išeiti iš vizualizatoriaus, kad sužeiktumėte aktyvavimo būseną.
:::

### Įdėjimas

Instalator sukurs reikiamus duomenų bazos lentelė ir įdės `sunrise.php` failą, kurį Ultimate Multisite reikia naudoti veikti. Spauskite **Install**, kad tęstumėte.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Jūsų Kompietis

Įrašykite savo įmonės informaciją ir nustatykite jūsų pagrindinę valūtą. Šią informaciją bus naudoti visame jūsų WaaS platformoje. Spauskite **Continue**, kai užbaigsite.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Pagrindinis Skaičius (Default Content)

Šis žingsnis leidžia įdėti predefiniotus šablonus, produktus ir kitą pradines turinį. Tai puikus būdas sužinoti Ultimate Multisite funkcijas. Spauskite **Install**, kad pridėtumėte pagrindinį turinį, arba praleiskite šį žingsnį, jei norite pradėti nuo nulio.

![Default content installation step](/img/installation/wizard-default-content.png)

### Rekomenduojami Pluginai

Valstybiškai įdėkite rekomenduojamus palaikymo pluginus. Spauskite **Install**, kad juos pridėtumėte arba praleiskite, kad tęstumėtumėte.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Pasirinkta!

Tai jau viskas! Jūsų Ultimate Multisite įdiegimas baigėsi. Dabar galite pradėti naujo svetainės platformos kūrimą iš **Network Admin Dashboard**.

![Įdiegimo pabaiga - Pasirinkimo ekrano vaizdas](/img/installation/wizard-ready.png)

![Network Admin Dashboard su aktyviai Ultimate Multisite](/img/installation/network-dashboard.png)

Atsimirkite ir pradėkite daryti!
