---
title: Vaatimukset
sidebar_position: 1
_i18n_hash: 77ce1a129b3eb304cc0b89d72faef9cf
---
# Ultimate Multisite vaatimukset

Ensimmäinen asia, josta saatat miettiä ennen Ultimate Multisiten ostamista, on se, mitkä ovat vaatimukset meidän pluginimme ajamiseen. Onneksi, Ultimate Multisiten ajamiseen riittää vain muutamia perusvaatimuksia: **verkkotunnus**, hyvä **hostauspalveluntarjoaja** ja WordPressin **Multisite** -asennus. Näitä tarvitset!

## Verkkotunnus {#domain-name}

Aloitetaan ensin verkkotunnuksesta.

Kun valitset verkkotunnuksen, muista miettiä, mikä on sinun erityinen toimialasi ja mitä luot Ultimate Multisitella: Haluatko luoda toimistoa? Myydä kauppamaisia sivustoja? Tai ehkä WordPress-verkkohollintaa? Kaikkea on mahdollista Ultimate Multisiten avulla.

Pluginimme tarjoaa tilauspalveluja, maksutietojen keräämisen, kassaprosessin lomakkeet, alennuskoodit ja asiakastiedustelut. WordPressin Multisite -asennuksen asennukseen, konfigurointiin ja ylläpitoon tarvittava suuri määrä työtä helpottuu Ultimate Multisiten avulla.

Minkä tahansa toimialan valinta voidaan hallita pluginimme avulla, kun myyt verkkosivuja palveluna! Varmista, että valitset verkkotunnuksen, joka sopii liiketoimintasuunnitelmaasi.

## Hostauspalveluntarjoaja {#hosting-provider}

Kun sinulla on houkutteleva verkkotunnus, joka edustaa toimialaa ja yritystäsi, sinun täytyy valita hyvä verkkopalveluntarjoaja hostataksesi verkostosi Ultimate Multisiten avulla. Markkinoilla on jo muutamia hyviä vaihtoehtoja. Jotkut hostauspalveluntarjoajat integroituvat hyvin Ultimate Multisiten kanssa, mikä voi olla ratkaiseva tekijä riippuen siitä, mitä suunnittelet rakentamiasi.

Ultimate Multisite toimii millä tahansa isännöintipalvelun kanssa. Ainoa ero on se, että joillakin isännöintiyhtiöillä kuten _WPMU DEV Hosting_, _WP Engine_, _Closte_, _Cloudways_, _Gridpane_ ja _Runcloud_ on tiiviimpi integraatio verkkotunnusten kartoitukseen (domain mapping). Muissa isännöinneissa saatat joutua kartoittamaan omaa verkkotunnustasi manuaalisesti. On myös hyvä hankkia isännöintipalvelu, joka tukee AutoSSL-ominaisuutta. _Closte_, _Runcloud_ ja cPanel tukevat sitä.

Kun kyseessä on palvelimen tekniset tiedot (server specifications), ei ole yhtä tiettyä kaavaa, sillä se riippuu siitä, mitä ominaisuuksia ja toimintoja tarjoat sekä verkon koosta. Jaettu isännöinti voi olla hyvä alku, mutta kun verkko alkaa kasvaa, sinun on todennäköisesti tarjottava omistettu VPS (Virtual Private Server).

## WordPress Multisite {#wordpress-multisite}

Nyt puhutaan hieman WordPress Multisite -asennuksesta.

WordPress Multisite mahdollistaa useiden sivustojen hallinnan yhdessä asennuksessa. Tämä on sisäänrakennettu ominaisuus, mutta se ei ole aktiivinen oletuksena. Sinun täytyy aktivoida tämä ominaisuus sekä WordPress-asennuksessasi että verkkosivusto-isännöintayhtiön hallintapaneelissa.

WordPressin kanssa Multisite -ominaisuuden **aktivoiminen on perusta Ultimate Multisitelle**. Koska Ultimate Multisiten pääkäyttötarkoitus on auttaa käyttäjiä hallitsemaan ja myymään verkkosivustoja palveluna, tämä on tehtävä WordPressillä Multisite -ominaisuus aktivoituna.

Meillä on **syvällinen artikkeli**, joka opasta sinua vaihe vaiheelta siitä, mitä tarvitset tehdä Multisite-ominaisuuden aktivointiin WordPress-asennuksessasi.

Kun olet aktivoinut Multisiten WordPressissä, on aika asentaa Ultimate Multisite. Ultimate Multisiten oikeaoppinen asennus vaatii:

  * WordPress: v5.3+ (Suositeltava: Viimeisin vakaa versio)

  * PHP: 7.4.x (tuki > 8.0 tulee pian)

  * MySQL: v5+ (Suositeltava: 5.6, jos sinulla ei ole saatavilla 8.0-versiota isännöintipalveluntarjoajaltasi)

Nämä ovat kaikki ohjelmiston vaatimukset Ultimate Multisite -järjestelmälle.

Muista, että Ultimate Multisite saattaa toimia PHP 8.0:n kanssa, mutta suosittelemme sitä käyttämään PHP 7.4.x:ää.

Suosittelemme myös asentamaan sen **pääalustoille** (main domains), ei alavalustoille tai alikansioille. Se saattaa toimia alavalustoilla/alikansioilla, mutta se voi aiheuttaa joitakin virheitä.

Yksityiskohtaisemmasta ohjeesta siitä, miten asentaa Ultimate Multisite, **klikkaa tähän**.
