---
title: Ylläpitosivun luontityökalun muutosloki
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Ylläpitosivun luontityökalun muutosloki {#admin-page-creator-changelog}

### Versio 1.9.0 - Julkaistu 2026-01-18 {#version-190---released-on-2026-01-18}

* Korjattu: Vakavat virheet aktivoinnin yhteydessä.
* Uudelleenrakennettu: Sisältölähdeluokat käyttämään Singleton-piirrettä asianmukaisella ylätason konstruktorin alustuksella
* Korjattu: Vue.js-mallin käännösvirheet, jotka estivät sisältötyypin valitsimen renderöitymisen
* Korjattu: Puuttuvat Vue-dataominaisuudet (template_id, external_link_url_embedable, external_link_url_checking)
* Korjattu: TinyMCE-editori ei alustunut oikein sivun latautuessa
* Korjattu: Divi-tukitiedostoa ei ladattu automaattisesti Composerin kautta
* Korjattu: Vioittunut PHP-syntaksi Divi-tukiluokassa
* Parannettu: JavaScript-resurssien järjestely ja minifiointi
* Parannettu: Yhteensopivuus uusimpien WordPress- ja sivunrakentajaversioiden kanssa

= Versio: 1.8.8 - Julkaistu 2025-09-28

* Nimetty etuliite uudelleen muotoon ultimate-multisite; päivitetty tekstialue; version korotus.

### Versio 1.8.7 - 04/10/2023 {#version-187---04102023}

* Korjattu: Vakava virhe yritettäessä lisätä uusi ylläpitosivu;
* Korjattu: Ristiriita Oxygen-tyylitiedostojen etuliitteen kanssa;

### Versio 1.8.6 - 09/08/2023 {#version-186---09082023}

* Lisätty: Lisätty vaihtoehto näyttää dataa pääsivustolta tai nykyiseltä alisivustolta.
* Lisätty: Lisätty tuki WordPress-lohkoeditorille (Gutenberg).
* Korjattu: Korjattu ongelma, jossa Brizy-sivuresurssit eivät latautuneet.

### Versio 1.8.5 - 09/12/2020 {#version-185---09122020}

* Korjattu: Ongelma Screen Options -asetuksissa, jossa valikon piilottaminen ei poistunut käytöstä;

### Versio 1.8.4 - 11/11/2020 {#version-184---11112020}

* Korjattu: Tuki Multisite Ultimate v2:lle;

### Versio 1.8.3 - 01/10/2020 {#version-183---01102020}

* Korjattu: Yhteensopimattomuudet Beaver Builderin kanssa edellisestä koontiversiosta;
* Korjattu: Marginaalien epäjohdonmukaisuudet WP 5.5:n kanssa;

### Versio 1.8.2 - 21/09/2020 {#version-182---21092020}

* Korjattu: Pienet yhteensopimattomuudet WP 5.5:n kanssa;

### Versio 1.8.1 - 05/08/2020 {#version-181---05082020}

* Korjattu: Yhteensopimattomuus Brizy 2.0:n kanssa;
* Korjattu: Pienet suorituskykyongelmat valikkoluetteloa rakennettaessa;

### Versio 1.8.0 - 27/04/2020 {#version-180---27042020}

* Korjattu: Ilmoitukset piiloutuivat yläpalkin alle, kun marginaalitilaa ei ollut valittu;
* Lisätty: Mukautetut sivut voivat nyt korvata useita WordPress-ylläpidon ylätason ja alatason sivuja samanaikaisesti;
* Lisätty: Ylläpitäjät voivat nyt piilottaa ylläpitosivuja WP Admin Pages PRO:lla;

### Versio 1.7.9 - 01/04/2020 {#version-179---01042020}

* Korjattu: Brizy 1.10.118 ja uudemmat rikkoivat SVG-tuen ylläpitosivuilla;

### Versio 1.7.8 - 26/03/2020 {#version-178---26032020}

* Korjattu: Escaping-virhe rikkoi Editor-sivun ranskaa käytettäessä;

### Versio 1.7.7 - 04/03/2020 {#version-177---04032020}

* Korjattu: Pieni yhteensopimattomuus Brizy Builderin kanssa;
* Parannettu: Päivitetty Freemius SDK versioon 2.3.2;

### Versio 1.7.6 - 10/02/2020 {#version-176---10022020}

* Korjattu: Ylläpitosivun muokkauspainike oikeassa alakulmassa ei toiminut Dashboard-widgeteissä;
* Korjattu: Pieni yhteensopimattomuus Astran kanssa;
* Korjattu: Uusi Brizy-versio rikkoi yhteensopivuuden;

### Versio 1.7.5 - 14/12/2019 {#version-175---14122019}

* Korjattu: Lisätty uusi reunatapauksen käsittelijä valikkokohteiden täyttämiseksi Replace Page -vaihtoehdossa;
* Korjattu: Elementor-fontit eivät toimineet;
* Parannettu: Päivitetty Freemius SDK tukemaan arkaluonteisten tietojen piilottamista Account-sivulta;

### Versio 1.7.4 - 29/11/2019 {#version-174---29112019}

* Korjattu: Yhteensopimattomuus WooCommerce Membershipsin kanssa;
* Korjattu: Oxygen Builderin välilehtikomponentti ei toiminut;
* Korjattu: Beaver Themer ei toiminut;

### Versio 1.7.3 - 12/07/2019 {#version-173---12072019}

* Korjattu: Sivut katosivat, kun niiden ylätaso muunnettiin toiseksi ylläpitosivutyypiksi;
* Parannettu: Paremmat listataulukon erottimet ylläpitosivutyyppien välillä;
* Parannettu: Koko lisäosan koodipohjan tietoturvatarkastus;
* Parannettu: Huomautus Separator-välilehden varoituksessa, kun ominaisuus ei ole saatavilla tietylle valikko-/sisältölähdetyypille;

### Versio 1.7.2 - 01/07/2019 {#version-172---01072019}

* Korjattu: Päivitetty Freemius SDK -versio versioon 2.3.0;
* Korjattu: Yhteensopimattomuusongelma Flywheelin kanssa;

### Versio 1.7.1 - 27/06/2019 {#version-171---27062019}

* Korjattu: Welcome Widget näytetään nyt kaikille rooleille;
* Korjattu: Screen Option ylläpitosivuvalikon piilottamiseen/näyttämiseen ei lisätä, jos valikko piilotetaan suodattimella, joka on dokumentoitu osoitteessa https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Parannettu: Ylläpitosivuvalikoiden piilottaminen piilottaa nyt myös Beaver Builderin tallennettujen mallien luettelosta luodut mallit rakentajan käyttöliittymässä;
* Lisätty: Vaihtoehdot ylläpitosivujen massiiviseen aktivointiin ja poistamiseen käytöstä;
* Lisätty: Vaihtoehto näyttää sivuja myös pääsivustolla;
* Lisätty: Vaihtoehto nimetä ylätason ja alatason valikkonimiöt uudelleen Replace-tilassa;

### Versio 1.7.0 - 04/06/2019 {#version-170---04062019}

* Korjattu: Ongelmat, joissa Oxygen-mallit eivät näkyneet;
* Lisätty: Tuki widgettien luomiselle!

### Versio 1.6.1 - 22/05/2019 {#version-161---22052019}

* Korjattu: Kirjoitusvirheitä;
* Korjattu: Alivalikkosivut korvasivat aiempia alivalikkokohteita samalla järjestysarvolla;
* Korjattu: Monistaminen nollaa nyt monistetun sivun slug-arvon;
* Parannettu: Päivitetty pt_BR- ja es_ES-po-tiedostot;
* Parannettu: Listataulukko näyttää nyt mukautettujen sivujen nimet myös ylätason sivuina;

### Versio 1.6.0 - 21/05/2019 {#version-160---21052019}

* Lisätty: Ulkoiset linkit tukevat nyt myös iframe-latausta;

### Versio 1.5.5 - 17/05/2019 {#version-155---17052019}

* Korjattu: Varoitusviesti näytettiin, kun sivu poistettiin tai monistettiin;
* Korjattu: Oikeusasetuksia ei sovellettu ylläpitäjiin;

### Versio 1.5.4 - 08/05/2019 {#version-154---08052019}

* Korjattu: Yhteensopimattomuudet Sliced Invoicesin kanssa;
* Korjattu: Pieni ongelma Oxygenin kanssa;
* Korjattu: Paikkamerkki uuden ylläpitosivun otsikkokentässä ei poistunut näppäimen vapautuksella;

### Versio 1.5.3 - 03/05/2019 {#version-153---03052019}

* Korjattu: Yhteensopimattomuus Advanced Custom Field -asetussivujen kanssa;
* Lisätty: Vaihtoehto lisätä tiettyjä käyttäjiä mukautettujen ylläpitosivujen kohteiksi;

### Versio 1.5.2 - 30/04/2019 {#version-152---30042019}

* Korjattu: Yhteensopimattomuudet uudempien Brizy-versioiden kanssa;
* Lisätty: Espanjankielinen käännös lisätty – John Rozzon ansiosta. Kiitos, John!
* Lisätty: Betatuki Oxygen Builderille;

### Versio 1.5.1 - 15/04/2019 {#version-151---15042019}

* Korjattu: Ongelma paikkamerkeissä Normal- ja HTML-editoreissa;
* Korjattu: Ylläpitosivut eivät näkyneet kohdassa Tools -> Export;
* Korjattu: Skriptien ja tyylien lataaminen vain omilla sivuillamme;
* Lisätty: Super Adminit voivat nyt monistaa ylläpitosivuja;

### Versio 1.5.0 - 29/03/2019 {#version-150---29032019}

* Korjattu: Sentryn havaitsemia pieniä virheitä;
* Korjattu: Poista-painike ei toiminut Edit Admin -sivun näkymässä;
* Parannettu: BeaverBuilder-painiketta muutettu selventämään, että myös Standard BB -lisenssiä tuetaan;
* Lisätty: Ylläpitäjät voivat määrittää myös alavalikoiden järjestyksen;
* Lisätty: Sivun korvaustila tukee nyt kaikkia käytettävissä olevia valikkokohteita;

### Versio 1.4.0 - 14/02/2019 (erillinen) & 27/02/2019 (lisäosa) {#version-140---14022019-stand-alone--27022019-add-on}

* Lisätty: Julkaistu erillisenä pluginina osoitteessa https://wpadminpagespro.com
* Lisätty: Vaihtoehto poistaa Admin Pages -valikkokohde valikosta, kun sivun luontiprosessi on valmis;
* Lisätty: Vaihtoehto poistaa ylläpitäjän ilmoitukset hallintasivuilta;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Lisätty: Sisäinen editori;
* Lisätty: Yhdistetty sisältölähteen yläluokka, jotta uusien sivunrakentajien/sisältölähteiden lisääminen on tulevaisuudessa helppoa;
* Lisätty: Tuki ulkoisille URL-osoitteille;

### Versio 1.3.0 - 15/01/2019 {#version-130---15012019}

* Korjattu: Hallintasivut eivät näy pääsivustolla multisite-ympäristöissä;
* Parannettu: Poistettu Multisite Ultimate -mukautetut artikkelityypit alisivustojen vientinäkymästä;
* Lisätty: Yläpalkki pikatoiminnoilla verkon ylläpitäjille sivujen luontinäkymiin;
* Lisätty: VALTAVA! Elementor-tuki!
* Lisätty: VALTAVA! Brizy-tuki!

### Versio 1.2.1 - 17/11/2018 {#version-121---17112018}

* Korjattu: Tehty pluginista yhteensopiva Multisite Ultimate 1.9.0:n kanssa;

### Versio 1.2.0 - 10/09/2018 {#version-120---10092018}

* Lisätty: PHP-tuki lisätty, jos WU_APC_ALLOW_PHP_PROCESSING on asetettu arvoon true tiedostossa wp-config.php. Tämä ei käytä PHP:n eval-toimintoa, mutta se voi silti johtaa tietoturva-aukkoihin. Käytä tätä varoen;
* Parannettu: Lisäosan plugin-päivittäjä;
* Parannettu: Uusi URL päivityspalvelimelle;

### Versio 1.1.2 - 16/08/2018 {#version-112---16082018}

* Korjattu: Pieni ongelma WP Enginen kanssa;

### Versio 1.1.1 - 16/08/2018 {#version-111---16082018}

* Korjattu: Käyttöoikeuksia ei sovellettu oikein korvaussivuille;

### Versio 1.1.0 - 15/08/2018 {#version-110---15082018}

* Lisätty: Beaver Builder -mallipohjia tuetaan nyt! Voit käyttää suosikkisivunrakentajaasi mukautettujen hallintasivujen luomiseen;
* Lisätty: Nyt on mahdollista korvata myös WordPressin oletushallintasivujen sisältö;
* Lisätty: Nyt on mahdollista lisätä luotu sisältö myös WordPressin oletushallintasivujen ylä- tai alaosaan;

### 0.0.1 {#001}
- Ensimmäinen julkaisu
