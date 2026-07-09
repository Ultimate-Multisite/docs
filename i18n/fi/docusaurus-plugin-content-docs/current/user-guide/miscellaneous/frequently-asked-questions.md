---
title: Usein kysytyt kysymykset
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Usein kysytyt kysymykset {#frequently-asked-questions}

Tässä on joitakin yleisimpiä **Usein kysyttyjä kysymyksiä**, jotka esiin tulevat usein tukipyynnöissä.

  * **Mitä Ultimate Multisite on?**

Ultimate Multisite on WordPress-lisäosa, joka on tarkoitettu WordPress multisite -asennuksiin. Se muuttaa WordPress-asennuksesi premium-verkostoksi sivustoista – aivan kuten [WordPress.com](https://WordPress.com) – mahdollistaen asiakkaille luoda sivustoja kuukausimaksuilla, neljännesvuosimaksuilla tai vuosimaksuilla (voit myös luoda ilmaisversioita).

  * **Toimiiko Ultimate Multisite ilman Multisitea?**

Ei. Ultimate Multisite vaatii WordPress multisite -asennuksen, alikansion tai aladomeenin.

  * **Mitkä ovat Ultimate Multisiten vaatimukset?**

Ultimate Multisite vaatii:

**WordPress-versio**: v5.3+ (Suositus: Viimeisin vakaa versio)
**PHP-versio**: 7.4.x (Tuki > 8.0 tulee pian)
**MySQL-versio**: v5+ (Suositus: Versio 5.6, jos sinulla ei ole saatavilla 8.0-versiota isännöitsijältäsi)

_Multisite (aladomeeni tai alikansio) on myös aktivoitava._ [Miten asenna WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).

  * **Toimiiko Ultimate Multisite multisite -asennuksella alikansoilla?**

Kyllä. Ultimate Multisite tukee sekä alikansio- että aladomeen-asennuksia.

  * **Toimiiko Ultimate Multisite multisite -asennuksella aladomeineilla?**

Kyllä. Ultimate Multisite tukee sekä alikansio- että aladomeen-asennuksia.

  * **Voinko käyttää Ultimate Multisitea rajoittaaksesi, mitkä lisäosat ja teemat käyttäjät voivat käyttää?**

Kyllä. Ultimate Multisiteella voit valita, mitkä lisäosat ja teemat ovat saatavilla jokaiselle suunnitelmalta verkostossasi.

  * **Voinko käyttää Ultimate Multisitea rajoittaaksesi käyttäjän luomien julkaisujen määrää hänen sivustollaan?**

Kyllä. Ultimate Multisite -järjestelmällä voit asettaa postikvottia **kaikille saatavilla oleville postityypeille** verkostossasi. Voit myös rajoittaa määrän käyttäjiä, joita ylläpitäjä voi kutsua, sekä levytilaa ja paljon muuta.

  * **Tukeekö Ultimate Multisite sivustotemপ্লেkkejä?**

Kyllä. Ultimate Multisite -järjestelmällä voit luoda kuinka monta Site Templateia haluat. Site Templates eivät ole teemoja, vaan ne ovat normaaleja sivustoja verkostossasi. Voit aktiivisia plugin-teemoja ja muokata sitä Site Templatea millä tahansa tavalla. Jos käyttäjä valitsee kyseisen mallin, hänen sivustonsa luodaan sen kopiona, jossa kaikki muutokset ovat jo tehty.

Voit myös asettaa tietyn mallin tietylle suunnitelmalle. Tekemällä näin jokaisella suunnitelman mukaisesti rekisteröityllä käyttäjällä luodaan hänen sivustonsa kyseisen Site Template:n duplikaatiksi.

  * **Integroiiko Ultimate Multisite WooCommerce-järjestelmän kanssa?**

Kyllä!

Jos haluat verkostosi käyttäjien saavan käytettäväksi WooCommerce, jotta he voivat perustaa myymälöitä, se on mahdollista Ultimate Multisitella. Voit jopa rajoittaa määrää tuotteita, joita asiakkaasi voi luoda jokaisella suunnitelman tasolla.

Ultimate Multisiten tilausmaksuihin voit käyttää [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) -lisäosaa sallimaan Ultimate Multisite -asiakkaillesi maksamisen WooCommerce-portaalilla pääsivustolla. Näin voit hyödyntää WooCommercelle kehitettyä valtavaa maksuportaalivalikoimaa ja käyttää sitä Ultimate Multisite -asiakkaidesi laskutukseen.

  * **Onko olemassa tapa siirtää tilausmaksut WPMUDEV Pro Siteista?**

Kyllä, Ultimate Multisite tarjoaa nyt [käyttäjäystävällisen työkalun siirtymiseen](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) Pro Sites -verkostosi.

  * **Miksi "Sallitut lisäosat" (Allowed Plugins) -välilehti on tyhjä suunnitelmasivulla?**

Ultimate Multisite sallii vain pääsyn tai kieltämisen verkossa ei aktivoituille lisäosille. Kun lisäosa on verkossa aktivoitu, se latautuu luonteeltaan oletuksena jokaiselle verkkosi sivustolle.

Jos et näe mitään lisäosia "Sallitut lisäosat" -välilehdellä, tarkista, onko haluttu lisäosa verkossa aktiivinen vai ei.

  * **Voinko käyttää omaa hinnoittelutaulukon suunnittelua?**

Kyllä. Versio 1.4.0 alkaen Ultimate Multisite tukee mallin ylivoimaisia päällekkäisiä asetuksia (template overrides).

  * **Toimiiko Ultimate Multisite WP Engine -yhteistyössä?**

Kyllä. Ultimate Multisite on aina ollut tuettu WP Engineillä, mutta verkkotunnusten kartoituksen toimittamiseen tarvittiin hallinnolta manuaalisia lisätoimenpiteitä (verkkotunnuksen lisääminen WP Engine -paneeliin). **Tämä ei ole enää ongelma versio 1.6.0 alkaen.** Ultimate Multisite integroidaan suoraan WP Engine API:hin ja verkkotunnukset lisätään paneeliin automaattisesti kartoituksen jälkeen.

  * **Minkä isännöitsijaa suosittelet?**

Ultimate Multisite toimii millä tahansa isännöitsijän kanssa. Ainoa ero on se, että joillakin isännöitsijillä kuten Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane ja [Runcloud.io](http://Runcloud.io) on tiiviimpi integrointi verkkotunnusten kartoitustoiminnallisuuteen, jolloin ne toimivat "out of the box". Muille isännöitsijille saatat joutua asettamaan verkkotunnuksen kartoituksen manuaalisesti.
