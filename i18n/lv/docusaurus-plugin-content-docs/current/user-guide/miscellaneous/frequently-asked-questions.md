---
title: Čauka jautājumi
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Čieksviegli domande (FAQ)

Šeit ir dažas **čieksviegli domande**, kas bieži tiek uzdotas atbalsta pieprasījumos.

  * **Kas ir Ultimate Multisite?**

Ultimate Multisite ir WordPress plugin, kas izstrādāts WordPress multisite instalācijām, kas pārvērš jūsu WordPress instalāciju kļūst par premium tīklu vietņu sistēmu – tā nodrošina klientiem iespēju izveidot vietnes ar mēnesīgu, kvartālu vai gadu maksājumiem (varat arī izveidot bezmaksas plākus).

  * **Vai Ultimate Multisite strādās bez Multisite?**

Nē. Ultimate Multisite prasa WordPress multisite, subdirektori vai subdomēnu.

  * **Kas ir prasības Ultimate Multisite?**

Ultimate Multisite prasa:

**WordPress Versija** : v5.3+ (Ieteikts: Pēdējā stabilizēta versija)
**PHP Versija** : 7.4.x (Atbalsts par > 8.0 nāk nekavējoties)
**MySQL Versija** : v5+ (Ieteikts: Versija 5.6, ja jums nav pieejama 8.0 jūsu hostings sniedzītā)

_Tāpat jāaktivizē Multisite (subdomēns vai subdirektori).._ [Kā instalēt WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Vai Ultimate Multisite strādās ar Multisite ar subdirektoriem?**

Jā. Ultimate Multisite atbalsta gan subdirektoru, gan subdirektoru instalācijas.

  * **Vai Ultimate Multisite strādās ar Multisite ar subdomēniem?**

Jā. Ultimate Multisite atbalsta gan subdirektoru, gan subdomēnu instalācijas.

  * **Vai varu izmantot Ultimate Multisite, lai ierobežotu, kuras pluginus un temus lietot lietotāji var lietot?**

Jā. Ar Ultimate Multisite jūs varat izvēlēties, kādas pluginas un temas ir pieejamas katram plākam jūsu tīklā.

  * **Vai varu izmantot Ultimate Multisite, lai ierobežotu vietnē lietotāja radīto sarakstu (posts) skaitu?**

Jā Ultimate Multisite arvaroties atļauj jums izveidot postu kvotas **vis tiem pieejamiem postu tipiem** savā tīklā. Jūs varat arī ierobežot lietotāju skaitu, ko admini var iestatīt, **diska platību**, un daudz citu.

  * **Vai Ultimate Multisite atbalsta vietņu šablones (Site Templates)?**

Jā. Ar Ultimate Multisite jūs varat izveidot cik vēlmes Site Templates. Site Templates nav temoj, tas ir parasti vietnes savā tīklā. Jūs varat aktivizēt pluginus un temoj, un to Site Template labot vai pielāgot kā jums vajadzētu. Ja lietotājs izvēlies šo template, viņa vietne tiks izveidota kā šī template kopija, ar visām pielāgojamajām sarakstiem.

Jūs varat arī noteikt konkrētu template planam. Darot to, katrs lietotājs, kurš uzņems šo planu, saīs vietne tiks izveidota kā šī Site Template duplikats.

  * **Vai Ultimate Multisite integrējas ar WooCommerce?**

Jā!

Ja vēlaties, lai jūsu tīkla lietotāji būtu pieejami WooCommerce, ļaujot viņiem izveidot veikalu, tas ir iespējams ar Ultimate Multisite. Jūs varat pat ierobežot produktu skaitu, ko jūsu klientiem varēs izveidot katrā plāna līmenī.

Šeit attiecībā uz abonementu maksājumiem Ultimate Multisite jūs varat izmantot [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) ļaujot saviem Ultimate Multisite klientiem maksāt ar WooCommerce gatewayus savā galvenajā vietnē. Šāda veids ļauj jums izmantot lielu maksājumu portfeli, kas ir izstrādāti WooCommerce, lai atbilstošu saviem Ultimate Multisite klientiem.

  * **Vai ir kāds veids pārvietot abonementus no WPMUDEV Pro Sites?**

Jā Ultimate Multisite jums tagad piedāvā [noderīgu rīku, kas palīdz jums pāri](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) uz jūsu Pro Sites tīklu.

  * **Kura ir tukša "Atļautie plugins" (Allowed Plugins) apgriezeniskā lapka man Plan Edit Page?**

Ultimate Multisite ļauj jums atļaut vai aizliegt piekļuvi tikai tiem pluginiem, kas nav aktivizēti tīklā. Kad plugin tiek aktivizēts tīklā, pēc dabiski, tas automātiski ieliekas visam jūsu tīkla vietnei.

Ja neredzat jebkuru pluginu sarakstā "Atļautie plugins" lapkā, pārbaudiet, vai vēlamais plugin ir aktivs tīklā vai nav.

  * **Vai es varu izmantot savu cenu tabelu dizainu?**

Jā. Kopējā versijas 1.4.0 ar Ultimate Multisite atbalsta šablonu pārslēgšanu (template overrides).

  * **Vai Ultimate Multisite darbojas ar WP Engine?**

Jā. Ultimate Multisite vienmēr bija atbalsts WP Engine, bet domānu mapiņa darboties prasa adminam manuālu papildu soļus (domānu pievienošanu WP Engine panelim). **Tas nav vairāk jādarī no versijas 1.6.0.** Ultimate Multisite tieši integrējas ar WP Engine API, un domāni automātiski tiek pievienoti panelim pēc mapiņa veikšanas.

  * **Kuru hostingu pakalpojumu jūs ieteicāt?**

Ultimate Multisite varētu darboties ar jebkuru hostingu pakalpojumu. Vienīgais atšķirība ir tā, ka dažas hostingu kompānijas, piemēram Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane un [Runcloud.io](http://Runcloud.io), ir ar stingrāku integrāciju domānu mapiņas iespējām, tāpēc tie darbojas bez jautājumu (out of the box). Citas hostingu vietnēs jums var būt jāizmanto manuāli domānu mapiņa konfigurēšana.
