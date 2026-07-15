---
title: Najčešće postavljana pitanja
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Često postavljana pitanja

Evo nekih **često postavljanih pitanja** koja se često pojavljuju tokom zahtjeva za podršku.

  * **Šta je Ultimate Multisite?**

Ultimate Multisite je WordPress plugin, napravljen za WordPress multisite instalacije, koji pretvara vašu WordPress instalaciju u premium mrežu sajtova – slično [WordPress.com](https://WordPress.com) – omogućavajući klijentima da kreiraju sajtove putem mjesečnih, kvartalnih ili godišnjih naknada (možete kreirati i besplatne planove).

  * **Da li će Ultimate Multisite raditi bez Multisite-a?**

Ne. Ultimate Multisite zahtijeva WordPress multisite, sa poddirektorijem (subdirectory) ili sa poddomenom (subdomain).

  * **Koje su zahtjevi za Ultimate Multisite?**

Ultimate Multisite zahtijeva:

**WordPress verzija** : v5.3+ (Preporučeno: Najnovija stabilna verzija)
**PHP verzija** : 7.4.x (Podrška za > 8.0 uskoro)
**MySQL verzija** : v5+ (Preporučeno: Verzija 5.6, u slučaju da vaš hosting provajder ne nudi 8.0)

_Multisite (poddomen ili poddirektorij) takođe mora biti aktiviran._ [Kako instalirati WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Da li će Ultimate Multisite raditi sa Multisite-om sa poddirektorijima (Subdirectories)?**

Da. Ultimate Multisite podržava kako instalacije sa poddirektorijima, tako i instalacije sa poddomenama.

  * **Da li će Ultimate Multisite raditi sa Multisite-om sa poddomenama (Subdomains)?**

Da. Ultimate Multisite podržava kako instalacije sa poddirektorijima, tako i instalacije sa poddomenama.

  * **Mogu li koristiti Ultimate Multisite da ograničim koji su Plugins i Themes dostupni korisnicima?**

Da. Uz Ultimate Multisite, možete odabrati koji su plugins i temi dostupni za svaki plan na vašoj mreži.

  * **Mogu li koristiti Ultimate Multisite da ograničim broj postova koje korisnik može kreirati na svom sajtu?**

Da. Uz Ultimate Multisite, možete postaviti kvote za postove za **svaku dostupnu vrstu postova** na vašoj mreži. Takođe možete ograničiti broj korisnika koje administrator može pozvati, **iznos disk prostora** i mnogo više.

  * **Da li Ultimate Multisite podržava Site Templates?**

Da. Uz Ultimate Multisite, možete kreirati koliko god Site Templates-a želite. Site Templates nisu temi, oni su normalni sajtovi na vašoj mreži. Možete aktivirati plugins, teme i prilagoditi taj Site Template na bilo koji način. Ako korisnik odabere taj šablon, njegov sajt će biti kreiran kao kopija tog šablona, sa svim prilagođenostima na mjestu.

Takođe možete postaviti određeni šablon za plan. Time, svaki korisnik koji se prijavi na taj plan imaće svoj sajt kreiran kao duplikat tog Site Template-a.

  * **Da li Ultimate Multisite integrira sa WooCommerce-om?**

Da!

Ako želite da vašim korisnicima mreže bude dostupan WooCommerce, omogućavajući im da postavljaju prodavnice, to je moguće pomoću Ultimate Multisite-a. Možete čak ograničiti broj proizvoda koje će vaši klijenti moći kreirati za svaki nivo plana.

Što se tiče plaćanja pretplate za Ultimate Multisite, možete koristiti [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) kako biste omogućili vašim Ultimate Multisite klijentima da plaćaju putem WooCommerce gateway-a na vašem glavnom sajtu. Na taj način, možete pristupiti ogromnoj biblioteci gateway-a za plaćanje razvijenih za WooCommerce i koristiti ih za naplatu vaših Ultimate Multisite klijenata.

  * **Postoji li način da migrirate pretplate sa WPMUDEV Pro Sites?**

Da, Ultimate Multisite sada nudi [korisan alat za migraciju](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) vaše Pro Sites mreže.

  * **Zašto je tab "Allowed Plugins" prazan na mojoj stranici za uređivanje plana?**

Ultimate Multisite vam dozvoljava da odobrite ili odbijete pristup plugins-ima koji nisu aktivirani na nivou mreže na vašoj mreži. Kada je plugin aktiviran na nivou mreže, po svojoj prirodi, on će biti podrazumevano učitan na svakom sajtu vaše mreže.

Ako ne vidite nikakve plugins na tabu "Allowed Plugins", provjerite da li je željeni plugin aktivan na nivou mreže ili ne.

  * **Mogu li koristiti svoj dizajn tabele s cijena?**

Da. Od verzije 1.4.0, Ultimate Multisite podržava nadjačavanje šablona (template overrides).

  * **Da li Ultimate Multisite radi sa WP Engine-om?**

Da. Ultimate Multisite je uvijek bio podržan od strane WP Engine-a, ali uspostavljanje mapiranja domena zahtijevalo je ručne dodatne korake od strane administratora (dodavanje domena u WP Engine panel). **To više nije slučaj od verzije 1.6.0.** Ultimate Multisite direktno se integriše sa WP Engine API-jem i domeni se automatski dodaju u panel nakon mapiranja.

  * **Koji hosting provajder preporučujete?**

Ultimate Multisite bi trebalo da radi sa bilo kojim hosting provajderom. Jedina razlika je u tome što neke hosting kompanije kao što su Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane i [Runcloud.io](http://Runcloud.io) imaju usku integraciju za mogućnosti mapiranja domena, pa funkcionišu "out of the box". Za druge hostinge, možda ćete morati ručno postaviti mapiranje domena.
