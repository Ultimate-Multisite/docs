---
title: Ultimate Multisite paigaldamine
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite installimine

:::note
Seeju käsrajaline tutori kasutab olemasoleva WordPress Multisite'i ja selle konfiguratsiooni. Selle kohta rohkem teada saada, lugege [nimetatud tutori](https://www.wpbeginner.com/glossary/multisite/) WP Beginnerist.
:::

## Plugin installimine

Ultimate Multisite on tasuta saadaval [WordPress.orgil](https://wordpress.org/plugins/ultimate-multisite/).

Minust **Network Admin Dashboard**i (Võrgu administraatori paneel) lähedige minud **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Otsi **"Ultimate Multisite"** (tõnameega jaoks täpsemise tagamiseks kasutage tühjakeede) ja see ilmub esimese tulemuseks. Klõpsake **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Installimise pärast klõpsake **Network Activate**, et aktiveerida plugin kogu oma võrku poolt.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Aktiveerimise pärast teeks teid automaatselt Setup Wizardi (Seadistusjuht) juurde.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Seadistusjuht (Setup Wizard)

Seadistusjuht juhendab teid Ultimate Multisite konfiguratsiooni lähedalt 10 minutit.

### tervitus

Klõpsake **Get Started** alustamiseks.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### installimise eesolevad kontrollid

See etapp kontrollib teie süsteemi ja WordPressi installatsiooni teavet, et veenduda sellest, et see täidab Ultimate Multisite nõuded. Kui kõik on korralikud, klõpsake **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate nupupunkt (v2.6.1+)
Kui Ultimate Multisite on paigutatud, kuid **ei ole yetüles võrretele aktiiviline** – näiteks kui klõpsate **Aktiivise** (single-site) asemel **Võrrele aktiveerimiseks** pluginide ekraanil – Pre-install Checks samm on seda tuvastab ja näitab **Network Activate** nupupunkt.

**Network Activate** klõpsamise abil aktiveeritakse plugin kogu teie multisite võrku automaatselt. Aktiveeritud pärast, juhendaja jätkab normaalset laadimisega installatsiooniks. Ei ole vaja lahkuda juhendajast aktiivsusel olevat probleem lahendamiseks.
:::

### Installimine

Installer luuab vajalikud database tabelid ja paigaldab `sunrise.php` faili, mida Ultimate Multisite toimimiseks vajab. Klõpsake **Install** jätkamiseks.

![Installimise samm, kus näed database tabelid ja sunrise.php](/img/installation/wizard-installation.png)

### Teie ettevõte

Täitke teie ettevõtte infolehed ja seadistage oma poolt. See teave kasutatakse kogu teie WaaS platvormil. Klõpsake **Continue** lõpetamise korral.

![Teie ettevõtte konfiguratsiooni samm](/img/installation/wizard-your-company.png)

### Pooldud sisu

See samm võimaldab teil paigaldada eelnevaid šablone, tooteid ja muud alguses olevat sisu. See on suurepärane viis tutvustuma Ultimate Multisite funktsioonidega. Klõpsake **Install** pooltud sisu lisamiseks või ülesseirkege see samm, kui soovite alustada tühistelt.

![Pooldud sisu installimise samm](/img/installation/wizard-default-content.png)

### Soovitatavad pluginid

Paigaldage valikult soovitatud kaaspluginid. Klõpsake **Install** nende lisamiseks või ülesseirkege devami jaoks.

![Soovitatavate pluginide samm](/img/installation/wizard-recommended-plugins.png)

### Valmis!

Se on valmis! Teie Ultimate Multisite installatsioon on lõpetatud. Saate nüüd alustada oma veebisaadi platformi valmistamist **Network Admin Dashboard**'ist.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Alustage mängida!
