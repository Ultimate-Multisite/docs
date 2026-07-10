---
title: WooCommerce-integraation muutosloki
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce-integraation muutosloki {#woocommerce-integration-changelog}

Versio 2.2.0 - Julkaistu 2026-07-01
* Uutta: Ultimate Multisite -verosummat näkyvät nyt erillisinä WooCommerce-maksuriveinä kassalla, mikä tekee verojen kokonaissummista selkeämmät ennen maksua.
* Uutta: Lisätty valinnainen "Keskeytä jäsenyydet välittömästi epäonnistuneiden uusintojen yhteydessä" -asetus ja `wu_woo_suspend_on_payment_failure` -suodatin sivustoille, jotka haluavat epäonnistuneen uusinnan keskeytyksen WooCommerce Subscriptions -uudelleenyritysikkunan aikana.
* Korjaus: Täsmäytetty WooCommerce Subscription -tilat, jotka saattoivat jäädä epäsynkroniin Ultimate Multisite -jäsenyyksien kanssa epäonnistuneiden tai palautuneiden uusintojen jälkeen.
* Korjaus: Lisätty WooCommerce-kaupan valuutta Ultimate Multisite -valuuttaluetteloon, kun se puuttui.
* Korjaus: Säilytetty asiakkaan laskutustiedot, kun tilaajat ohjataan WooCommerce-kassalle.
* Parannettu: Lisätty yhteensopivuus Jetpack Autoloader 5:n kanssa.
* Parannettu: Siistitty julkaisupaketin luontia, jotta GitHub- ja marketplace-zipit välttävät sisäkkäiset valmisteluhakemistot ja kehitystiedostot.

Versio 2.0.6 - Julkaistu 2026-01-16
* Parannus: Sisällytä ydintilaukset lisäosaan. Ei enää vaadi Woocommerce Subscriptinos -laajennusta.

Versio 2.0.5 - Julkaistu 2026-01-09
* Parannus: Lataa käännökset glotpress API:sta.
* Korjaus: Vakava virhe joissakin sivunrakentajissa.
* korjaus: Loputon uudelleenohjaus, kun asiakas on pääsivuston jäsen.

Versio 2.0.4 - Julkaistu 2025-11-14
* Lisätty: Käännökset monille uusille kielille.
* Muutettu: Nimetty uudelleen muotoon Ultimate Multisite: Woocommerce Integration.
* Lisätty: Yhteensopivuus Woocommerce 10.2.1:n kanssa.
* Lisätty: Yhteensopivuus Woocommerce Subscriptions 7.7.0:n kanssa.
* Korjaus: Yhteensopivuus PHP 8.4:n kanssa
* Korjaus: Uudelleenohjaus mutta, kun WC-tilisivua ei ole olemassa.

Versio 2.0.3 - Julkaistu 2025-08-13
* Muutettu: Otettu automaattiset päivitykset käyttöön uuden marketplacen kanssa.

Versio 2.0.2 - Julkaistu 2025-07-05
* Muutettu: Nimetty uudelleen muotoon Multisite Ultimate: Woocommerce Integration.
* Lisätty: Yhteensopivuus Woocommerce 9.8.1:n kanssa.
* Lisätty: Yhteensopivuus Woocommerce Subscriptions 7.3.0:n kanssa.
* Korjaus: Asiakkaan tekemä tilauksen peruutus.
* Korjaus: Vakava virhe kassalohkoa käytettäessä.
* Parannus: Nyt yhteensopiva Woocommerce high performance custom order tables -ominaisuuden kanssa.
* Korjaus: Peruutus WooCommerce-kassalla voi silti päivittää jäsenyyden.

Versio 2.0.1 - Julkaistu 2023-08-09

* Lisätty: Yhteensopivuus Woocommerce 7.9.0:n kanssa.
* Lisätty: Yhteensopivuus Woocommerce Subscriptions 5.3.0:n kanssa.
* Lisätty: Tuki jäsenyyspäivityksille.
* Lisätty: Ilmoitukset kokeilujaksoista ja perustamismaksuista Woocommercessa.
* Lisätty: Ultimate Multisite Woocommerce -tuotteiden tunnistus meta-arvolla.
* Lisätty: Lisätty kertaluonteinen korjaus merkitsemään kaikki Ultimate Multisiteen liittyvät Woocommerce-tuotteet.
* Lisätty: Poistettu Ultimate Multisite -luodut tuotteet Woocommerce-luettelosta.
* Parannus: Luotu ei-toistuva Woocommerce-alennus ostoskoriin käytettäväksi.
* Parannus: Palautettu toistuva alennus Woocommerce-tuotteeseen.
* Parannus: Lisätty toistuvan alennuksen tunniste Woocommerce-tuotteeseen.
* Parannus: Varmistettu tuotetyyppi kassalla.
* Korjaus: Säilytetty jäsenyyden tila alaspäin vaihdon aikana.
* Korjaus: Tarkistettu, onko tilaus olemassa, virheiden välttämiseksi peruutusprosessin aikana.
* Korjaus: Lisätty tilauksen aloituspäivä käytettäväksi Woocommerce-tilauksissa.
* Sisäinen: Toteutettu uusi PHP 8.1 -koontiprosessi.

Versio 2.0.0 - Täydellinen uudelleenkirjoitus.

* Lisätty: Peruutusmenetelmä woo-tilauksen poistamiseen maksutapaa vaihdettaessa tai jäsenyyttä peruutettaessa;
* Lisätty: Käsittelijä jäsenyyksien alentamiseen ja päivittämiseen;
* Parannus: Lataa woocommerce-riippuvuudet asiakkaan päivityslomakkeelle alisivustoilla tilin päivityksen mahdollistamiseksi;
* Parannus: Lataa Woocommerce-ostoskori oikein, jos sitä ei ole olemassa;
* Parannus: Varmista, että olemme pääsivuston tauluissa kassaprosessin aikana;
* Parannus: Tee Ultimo-uusintatilaus Woocommerce-tilaustilauksen arvon perusteella eikä viimeisimmän maksun perusteella;
* Korjaus: Siirry WU Membership -painikkeen linkkiin;
* Korjaus: Aseta Ultimo-tilaus maksetuksi, kun Woocommerce-tilausuusinta on maksettu;
* Koonti: Lisää MPB rakentajaksi;

Versio 2.0.0-beta-5 - Julkaistu 2022-01-21

* Sisäinen: Lisätty hookien ja suodattimien generaattori;
* Sisäinen: Lisätty Ultimate Multisite -stub-tiedostot kehittäjän elämänlaadun parantamiseksi;
* Korjattu: Estä useiden tuotteiden luonti, kun se ei ole tarpeen;

Versio 2.0.0-beta.4 - 2021-09-23

* Korjaus: vaaditaan, että WooCommerce on verkossa aktiivinen eikä vain pääsivustolla;
* Parannus: lisätty suodatin, joka sallii lisäosan käytön mu-pluginina;

Versio 2.0.0-beta.3 - 2021-05-28

* Korjaus: Dashboard-käytönvalvonta oli liian aggressiivinen;
* Parannus: Lisätty WooCommerce-ohjelinkit Ultimate Multisite -ylävalikkoon;

Versio 2.0.0-beta.2 - 2021-05-04

* Parannus: luo odottavat maksut Ultimossa WCS-uusintatilauksen luonnin yhteydessä;
* Parannus: esitäyttää laskutuskentät Ultimate Multisite -asiakastiedoilla;
* Parannus: lisää laskutuskentät takaisin maksutavoille;

Versio 2.0.0-beta.1 - 2021-05-04

* Ensimmäinen betajulkaisu

-- Vanhat versiot --

Versio 1.2.6 - 26/03/2020

* Korjattu: Pieni yhteensopimattomuus WooCommerce Subscriptionsin uudempien versioiden kanssa;

Versio 1.2.5 - 26/08/2019

* Korjattu: Virhe edellisessä julkaisussa;

Versio 1.2.4 - 22/08/2019

* Parannettu: Lisätty vaihtoehto ohjata WooCommerce-kassanäkymään heti integraation jälkeen;

Versio 1.2.3 - 26/05/2019

* Korjattu: WooCommerce-maksusähköposti katosi joissakin reunatapauksissa;

Versio 1.2.2 - 27/02/2019

* Lisätty: Tuki perustamismaksuille WooCommerce Subscription -integraatiossa;

Versio 1.2.1 - 17/11/2018

* Korjattu: Yhteensopivuusongelmat Ultimate Multisite -version 1.9.0 kanssa;

Versio 1.2.0 - 10/09/2018

* Parannettu: Uusi päivitysten URL lisäosille;
* Lisätty: Betatuki WooCommerce Subscriptionille;

Versio 1.1.2 - 11/02/2018

* Korjattu: Maksulinkki luodaan dynaamisesti reagoimaan WooCommerce-päätepisteiden muutoksiin;
* Parannettu: Pakotamme nyt tilaustemme tilaksi valmis, kun payment_completed kutsutaan, varmistaaksemme, että uusintahookimme suoritetaan silloin kun niiden pitää;

Versio 1.1.1 - 24/01/2018

* Korjattu: Nyt se tarkistaa myös, onko WooCommerce juuri aktivoitu pääsivustolla;
* Korjattu: Sisällytetty ylikuormitukset, jotta tilauksen luonti voi sisältää verot;

Versio 1.1.0 - 04/11/2017

* Korjattu: Nyt integraatiopainikkeen nimiö muuttuu asetusten mukaisesti. Edellyttää Ultimate Multisite 1.5.0;
* Korjattu: WooCommerce Integration toimii nyt, vaikka WooCommerce ei olisi verkossa aktiivinen ja olisi aktivoitu vain pääsivustolla;

1.0.0 - Ensimmäinen julkaisu
