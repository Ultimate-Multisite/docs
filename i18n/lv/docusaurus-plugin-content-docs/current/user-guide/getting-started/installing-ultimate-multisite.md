---
title: Uzstādīt Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Uzlabojums Ultimate Multisite instalēšana

:::note
Šis uzdevums pieprasa, ka jums jau ir instalēts un konfigurēts WordPress Multisite. Lai uzzinātu, kā to darīt, apskatiet [šķirto uzdevumu](https://www.wpbeginner.com/glossary/multisite/) WP Beginner.
:::

## Plugins instalēšana

Ultimate Multisite ir bezmaksas pieejams [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

No savas **Network Admin Dashboard** pārvietojieties uz **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Meklējiet pēc **"Ultimate Multisite"** (ar citriem apakšgrafiem, lai nodrošinātu precīzu atbilstošumu), un tas parādīsies kā pirmais rezultāts. Nospressiet **Install Now**.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Instalētas pēc instalēšanas nospressiet **Network Activate**, lai aktivizētu pluginu visā jūsu tīklā.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Aktivizēšanas pēc tam jūs automātiski pārvietos uz Iestatījumus (Setup Wizard).

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Iestatījumu viedoklis (Setup Wizard)

Iestatījumu viedoklis palīdz jums konfigurēt Ultimate Multisite apmēram 10 minūtes laikā.

### Sveicieni
Nospressiet **Get Started**, lai sāktu.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-instalācijas pārbaudes
Šis soļums pārbauda jūsu sistēmas informāciju un WordPress instalāciju, lai pārliecinātos, ka tās atbilst Ultimate Multisite prasībām. Ja viss ir labi, nospressiet **Go to the Next Step**.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Uzlabojums "Network Activate" pogas (v2.6.1+)
Ja Ultimate Multisite ir instalēts, bet **vēl nav aktivizēts tīklā** — piemēram, ja jūs klikšķinājāt uz **Aktivizēt** (single-site) vietā uz **Network Activate** no tīkla pluginu saraksta — Pre-install Checks solis to pamanīs šo un parādīs **Network Activate** pogu.

Klikšķinot uz **Network Activate**, jūs automātiski aktivizējat pluginu visā jūsu multisite tīklā. Aktivizētas pēc tam, wizard turpinās normāli instalācijas solī. Jums nav nepieciešams pamesties no wizard'a, lai labotu aktivācijas stāvokli.
:::

### Instalēšana

Instalētājs izveidzi nepieciešamos databāzes tabulas un instalē `sunrise.php` failu, ko Ultimate Multisite vajadzīgs veiktam darbību. Klikšķiniet uz **Install**, lai turpinātu.

![Instalācijas solis, kas redz database tabulas un sunrise.php](/img/installation/wizard-installation.png)

### Jūsu Uzņēmums

Ieiet savu uzņēmuma informāciju un noteikiet savu defaultu valutu. Šī informācija tiks lietota visās jūsu WaaS platformā. Klikšķiniet uz **Continue**, kad būsies beidzies.

![Jūsu uzņēmuma konfigurācijas solis](/img/installation/wizard-your-company.png)

### Default Saturs

Šis solis ļauj instalēt precizēti noteiktu šablonus, produktus un citu sākumu saturu. Tas ir lielisks veids, lai iepazītos ar Ultimate Multisite funkcijām. Klikšķiniet uz **Install**, lai pievienotu defaultu saturu, vai pārsniegt šo solī, ja vēlaties sākt no nol.

![Default satura instalācijas solis](/img/installation/wizard-default-content.png)

### Ieteicamie Plugin'i

Optiāli instalējiet ieteicamo uzlabojumu pluginus. Klikšķiniet uz **Install**, lai tos pievienotu, vai pārsniegt šo solī turpināt.

![Ieteicamie pluginu solis](/img/installation/wizard-recommended-plugins.png)

### Sveiks!

Tas ir beidzies! Jums ir gatava uzstādīt Ultimate Multisite. Tagad varat sākt izveidot savu vietnes platformu kā lietojamā pakalpojumu no **Network Admin Dashboard**.

![Uzstādīšana pabeigta - Gatava ekrāns](/img/installation/wizard-ready.png)

![Datu tīkla admina dashboard ar Ultimate Multisite aktivizētu](/img/installation/network-dashboard.png)

Varat sākāt veidot!
