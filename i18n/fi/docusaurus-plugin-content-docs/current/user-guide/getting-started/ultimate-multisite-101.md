---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101 {#ultimate-multisite-101}

Ultimate Multisite on WordPress on plugin on mahdollistaa sinulle tarjota WaaS- tai verkkosivusto-palvelua asiakkaille. Ennen kuin syvennymme siihen, miten Ultimate Multisite voi auttaa yritystäsi ja asiakkaitasi siellä, meidän täytyy hankkia peruskäsityksiä.

## WordPress Multisite {#the-wordpress-multisite}

Useimmin olemme tutustuneet vakiintuneeseen WordPress-asennukseen. Joko luot sen hallintapaneelisi kautta isännän avulla tai rohkeille asettamalla uuden verkkopalvelimen ja tietokannan, lataamalla perus tiedostot ja aloittamalla asennusprosessin.

Tämä toimii miljoonille WordPress-sivustoille ympäri maailmaa, mutta toimittajan tai palveluntarjoajan näkökulmasta meidän täytyy miettiä volyymeja hetken aikaa. Vaikka se on helppo luoda yksi WordPress-sivusto tai jopa satoja automaattisen hallintapaneelin avulla, ongelmat alkavat ilmestyä pian kun kyseessä on näiden sivustojen hallinta. Hallitsematta ne olet ensisijainen kohde haittaohjelmille. Hallinta tarkoittaa ponnistelua ja resursseja, ja vaikka saatavilla on ulkoisia työkaluja ja plugin-lisäosia auttamaan WordPress-sivustojen hallinnan ja ylläpidon sujuuttamisessa, asiakkaiden säilyttämä hallinnollinen pääsy tarkoittaa, että nämä ponnistelut voidaan helposti voittaa.

WordPressin ytimessä on ominaisuus nimeltä yksinkertaisesti ‘Multisite’, jonka alkuperä juontaa juurensa vuoteen 2010 WordPress 3.0:n lanauksen aikaan. Sen jälkeen se on saanut useita versioita, joilla on tavoitteena tuoda uusia ominaisuuksia ja tiukentaa turvallisuutta.

Yksinkertaisesti sanottuna WordPress-multisite voidaan ajatella näin: Yliopisto ylläpitää yhtä WordPress-asennusta, mutta jokainen tiedekunta ylläpitää omaa WordPress-sivustonsa.

Jotta voimme hahmottaa tämän lauseen, katso vielä joitakin perusterminologiaa, jotka löytyvät sekä Ultimate Multisite -dokumentaatiosta että WordPress-yhteisöstä yleisesti.

### Verkosto (The Network) {#the-network}

WordPressin mielessä multisite-verkko on paikka, jossa useita alisivuja voidaan hallita yhdestä taulakennuksesta (dashboard). Vaikka multisite-verkoston luominen vaihtelee isännöijän välillä, lopputulos on yleensä muutamia lisäohjeita wp-config.php -tiedostoon, jotta WordPress ymmärtää, että se toimii tässä erityisessä tilassa.

Multisite-verkoston ja itsenäisen WordPress-asennuksen välillä on useita selkeitä eroja, joita käymme läpi lyhyesti.

#### Aladomeeni vs. Alikansio (Subdomain vs. Subdirectory) {#subdomain-vs-subdirectory}

Yksi tärkeimmistä päätöksistä, jota sinun on tehtävä, on se, käytetäänkö multisite-asennusta _alikansoina_ vai _aladomeeneina_. Ultimate Multisite toimii molemmilla vaihtoehdoilla yhtä hyvin, mutta näiden kahden konfiguraation välillä on joitakin arkkitehtuurieroja.

_Alikansio`-konfiguraatiossa verkoston sivustot perivät polun päädomeenista. Esimerkiksi verkostosivusto nimeltä ‘site1’ saa täydellisen URL-osoitteensa https://domain.com/site1. _Aladomeeni`-konfiguraatiossa verkostosivustolla on oma _aladomeeninsa_, joka johdetaan päädomeenista. Siten sivusto nimeltä ‘site1’ saa täydellisen URL-osoitteensa https://site1.domain.com/.

Vaikka molemmat vaihtoehdot ovat täysin kelvollisia valintoja, _aladomeenien_ käyttö tarjoaa useita etuja, mutta vaatii myös enemmän mietteliäisyyttä ja suunnittelua sen arkkitehtuurin osalta.

DNS: Subdirektorien

DNS-näkökulmassa käytön `_subdirectories_` kanssa on suhteellisen yksinkertainen haaste. Koska verkkosivustot ovat vain pääpolun lapsia, tarvitaan vain yksi domeenimen entry päädomeenin nimelle. `_subdomains_` kohdalla haaste on hieman monimutkaisempi ja vaatii joko erillistä CNAME-entryä jokaiselle verkkosivustolle tai villakäyttöisellä (*) entryllä DNS-rekistereissä.

Toinen huomioitava alue liittyy SSL:ään ja SSL-sertifikaattien myöntämiseen ja käyttöön. `subdirectory`-konfiguraatiossa voidaan käyttää yhtä domeenisertifikaattia, koska verkkosivustot ovat vain päädomeenin polkuja. Siten sertifikaatti domain.com:lle tarjoaa riittävästi SSL:n https://domain.com/site1, https://domain.com/site2 jne -osoitteille.

`subdomain`-konfiguraatiossa villakäyttöinen SSL-sertifikaatin käyttö on yksi yleisimmistä vaihtoehdoista. Tämän tyyppinen SSL-sertifikaatti tarjoaa salaus domeenille ja sen `_subdomains_` sille. Siksi villakäyttöinen SSL-sertifikaatti tarjoaa salauksen https://site1.domain.com, https://site2.domain.com ja itse domain.com:lle.

Vaikka muita vaihtoehtoja on olemassa, ne ovat usein rajallisia laajuudeltaan ja sovellukseltaan, ja vaativat lisäkonfiguraatiota ja harkintaa sopivuuden suhteen.

#### Pluginit ja teemat {#plugins-and-themes}

WordPress ottaa myös jotain pois, ainakin asiakkaan näkökulmasta. Riippumattomassa WordPress-asennuksessa jos sivuston ylläpitäjä asentaa huonosti toimivan pluginin tai ei pidä asennustaan ajan tasalla, ainoa uhri ja kärsimys on itse hän. Kuitenkin jos sivuston ylläpitäjä asentaa huonosti toimivan pluginin multisite-asennukseen, se luo uhria jokaiselle verkossa olevan sivustolle.

Tämän vuoksi kun konfiguroit WordPress Multisite -asettamalla se, järjestelmä poistaa sivuston ylläpitäjiltä mahdollisuuden asentaa plugin- tai teemoja ja siirtää tämän toiminnon uuteen luotuun verkko-administratorirooliin tai 'super admin' -rooliin. Tämän etuoikeuden roolilla voi päättää, salliaanko verkoston sivustojen ylläpitäjien nähdä tai käyttää plugin-valikkoa hallintapaneelissaan ja sallitaanko tällaiset oikeudet myös plugin-asennuksen aktivoimiseen tai deaktivoimiseen.

Tässä mielessä verkko-administratorirooli on vastuussa plugin- ja teemojen asentamisesta verkkoon sekä oikeuksien delegoinnista, jotta näitä plugin- ja teemoja voidaan käyttää verkoston sivustoilla. Sivuston ylläpitäjät eivät voi asentaa plugin- tai teemoja tai päästä käsiksi niihin, jotka eivät ole heidän omalle sivustolleen määritetty.

#### Käyttäjät ja ylläpitäjät {#users-and-administrators}

WordPress Multisite -ympäristössä kaikki verkoston sivustot jakavat saman tietokannan ja siksi samat käyttäjät, roolit ja kyvyt. Paras tapa ajatella tätä on se, että kaikki käyttäjät ovat osa verkkoa eikä vain tiettyä sivustoa.

Tämän ymmärryksen perusteella ei ole toivottavaa sallia käyttäjien luomisen, ja siksi WordPress Multisite poistaa tämän mahdollisuuden sivuston ylläpitäjiltä siirtäen sen verkko-administratorirooliin. Vaihdolla verkko-administratorirooli voi delegoida tarvittavat oikeudet sivuston ylläpitäjälle luodakseen käyttäjätilejä omalle sivustolleen.

<!-- Kuvakaavaa ei ole saatavilla: WordPress Multisite -verkko käyttäjänhallintaliittymä -->

Toistettuna edellä, vaikka käyttäjätilit näyttävät liittyvän siihen sivustoon, johon ne kuuluvat, ne on todellisuudessa varattu verkolle ja siksi niiden on oltava ainutlaatuisia koko verkossa. On tapauksia, joissa käyttäjätunnuksia ei voida rekisteröidä tällaisen syyn vuoksi.

Vaikka tämä ei ole vieraassa järjestelmissä uusi käsite, yhtenä käyttäjien rekisteröinti- ja tunnistautumispaikka voi olla vaikea ymmärtää niille, jotka ovat tottuneet itsenäisiin WordPress-asennuksiin, joissa käyttäjähallinta on hieman helpompaa.

#### Media {#media}

Kun verkko-sivustot jakavat yhden tietokannan WordPress Multisite -ympäristössä, ne pitävät media-tiedostojen polut erillisinä tiedostojärjestelmässä.

Standardipolku (wp-content/uploads) pysyy samana; kuitenkin sen polku muutetaan heijastamaan verkko-sivuston ainutlaatuista ID:tä. Tämän seurauksena verkko-sivuston media-tiedostot näkyvät muodossa wp-contents/uploads/site/[id].

#### Permalinks (URL-osoitteet) {#permalinks}

Mainitsimme aiemmin, että _subdomain_ -asetuksella on omat etuja verrattuna _subdirectory_-asetukseen, ja tässä ne ovat: polut.

_Subdirectory_-asetuksessa pääsivuston (ensimmäisen sivuston, joka luodaan verkoston perustamisen yhteydessä) ja verkko-alueiden alisivustojen on jaettava sama polku verkkotunnuksen jälkeen. Tällä on potentiaalia valtavalle määrälle konflikteja.

Artikkeleille lisätään pääsivustolle pakollinen /blog/-polku estämään törmäykset verkko-alueiden kanssa. Tämä tarkoittaa, että tyylikkäät permalinkit kuten ‘Postin nimi’ näytetään muodossa domain.name/blog/post-name/.

<!-- Kuvakaavaa ei ole saatavilla: WordPressin permalinkkasetukset näyttävät /blog/-polun subdirectory-konfiguraatiossa -->

_Subdomain_-asetuksessa tätä toimintoa ei tarvitse, koska jokainen verkko-sivusto hyötyy täydellisestä domain-erottelusta ja tarvitsee siksi yhtä polkua. Sen sijaan ne ylläpitävät omia erillisiä polkujaan perustuen _subdomain_ -nimiin.

<!-- Kuvakaavaa ei ole saatavilla: WordPressin permalinkkasetukset subdomain-konfiguraatiolle -->

#### Staattiset sivut {#static-pages}

_subdirectory_-konfiguraatiossa nimekonfliktien potentiaali ulottuu staattisiin sivuille, kun pääsivusto ja verkko-sivustot jakavat saman polun.

Tämän estämiseksi WordPress tarjoaa keinon mustaikata (blacklist) tiettyjä sivuston nimiä, jotta ne eivät kilpaile ensimmäisen sivuston nimien kanssa. Tyypillisesti verkko-admini lisää pääsivuston sivujen juuripolut.

<!-- Kuvakaappauksen saatavuus puuttuu: WordPressin verkkoasetukset, jotka näyttävät kielletyt sivustonimet konfliktien välttämiseksi -->

_subdomain_-konfiguraatiossa nimekonfliktien mahdollisuutta lievitetään _subdomain_illa, koska se on ainutlaatuinen verkko-sivustolle ja ei ole mitenkään yhteydessä pääsivustoon.

### Rekisteröinti {#registration}

WordPress Multisite -verkkoasetuksissa on saatavilla useita uusia käyttäjärekisteröintiohjelmia, jotka mahdollistavat uusien ja olemassa olevien käyttäjien luomisen sivustoille.

<!-- Kuvakaappauksen saatavuus puuttuu: WordPress Multisite -verkkoasetukset, jotka näyttävät rekisteröintiovaihtoehdot -->

Eri kuin itsenäiset WordPress-asennukset, verkko-sivustot eivät pidä perinteisiä vaihtoehtoja käyttäjien rekisteröinnin sallimiseksi tai niiden määrittämiseksi rooleihin.

<!-- Kuvakaappauksen saatavuus puuttuu: WordPress -itsenäisen sivuston käyttäjärekisteröint asetukset, jotka näyttävät rajoitetut vaihtoehdot -->

Kun käyttäjätunnuksia luodaan, nämä tunnukset luodaan verkko-tasolla. Siksi ne eivät kuulu mihinkään tiettyyn sivustoon, vaan verkkoon. Tällä on omat erityiset edut ja haitat.

Esimerkiksi oletetaan, että WordPress Multisite-sivustosi on uutisten ja tiedon jakelun liiketoiminta. Sinä luot multisiten ja luot sitten verkko-sivustoja rahoitukselle, teknologiaan, viihdeteollisuuteen ja muihin kiinnostaviin aloihin ylläpitäen silti yleistä hallintaa plugin- ja teemojen suhteen. Jokaisella verkko-sivustolla on kuitenkin huomattavasti suurempi kontrolli ulkonäköön, tunteeseen ja käyttökokemukseen kuin custom post tyypit tai tavalliset postikategoriat.

Tähän asti, kun käyttäjä kirjautuu sisään, hän kirjautuu verkkoon ja lopulta on kirjautunut sisään myös jokaisille verkko-sivustoille tarjoten saumattoman kokemuksen. Jos uusi sivustosi olisi tilausperusteinen, tämä olisi ihanteellinen ratkaisu ja lopputulos.

Jos kuitenkin multisiten tarkoituksena oli tarjota erillisiä verkko-sivustoja, joilla ei ole keskinäistä suhdetta toisiinsa, on lähes aina tarpeen käyttää ulkoisia tai lisäplugin-lisäosia käyttäjäroolien muokkaamiseen.

### Verkkotunnus ja SSL {#domain-and-ssl}

Lähdetään puhumaan WordPress Multisite -asennuksesta, joka lähes jää huomiotta – Wordpress.com. Tämä on ehdottomasti kattavin esimerkki WordPress Multisite -rakenteesta ja osoittaa sen laajoja kykyjä muokata ja muotoilla tiettyä tarkoitusta varten.

Nykyään modernissa internetissä SSL-sertifikaattien käyttö on lähes pakollista, ja WordPress Multisiten ylläpitäjät kohtaavat pian nämä haasteet.

_Subdomain_-konfiguraatiossa sivustot luodaan juuriosoitteen perusteella. Siksi 'site1' niminen sivu luodaan nimellä 'site1.domain.com'. Wildcard-SSL-sertifikaatin avulla verkko-admin voi ratkaista tämän haasteen ja tarjota SSL-salauksen kyvyt verkolle.

WordPress Multisite sisältää verkkotunnusten kartoitustoiminnon, joka mahdollistaa verkko-sivustojen liittämisen räätälöityihin hallintoyhteyksiin tai hallintoyhteyksiin, jotka ovat erilaiset kuin verkoston juuritasoinen hallintoyhteyksi.

Verkkohallintoja varten tämä tuo mukanaan lisä monimutkaisuutta sekä hallintoyhteyksien määrittämisessä että SSL-sertifikaattien myöntämisessä ja ylläpidossa.

Tämän osalta, vaikka WordPress Multisite tarjoaa myös tapa kartoittaa [www.anotherdomain.com](http://www.anotherdomain.com) 'site1':een, verkkohallinto joutuu hallitsemaan ulkoisesti DNS-tietoja ja SSL-sertifikaattien toteuttamista.

## Ultimate Multisite {#ultimate-multisite}

Ymmärrettäessä erot itsenäisen WordPress-asennuksen ja Multisite-asennuksen välillä, tarkastellaan, miten Ultimate Multisite on lopullinen ase tarjoten Websites as a Service (WaaS) -ratkaisuja.

### Johdanto {#introduction}

Ultimate Multisite on Swiss Army Knife -tyyppinen työkalu sinulle verkkosivustojen palveluna (Website as a Service, WaaS) luomiseen. Ajattele Wix.comia, Squarespacea ja WordPress.comia ja mieti sitten oman palvelusi omistamista.

Taustalla Ultimate Multisite käyttää WordPress Multisite -järjestelmää, mutta se tekee sen tavalla, joka ei ainoastaan ratkaise verkkohallintoja kohtaamia monenlaisia haasteita multisite-asennuksilla, vaan parantaa myös kykyjä, joiden avulla voidaan tukea laaja valikoima käyttötapauksia.

Seuraavissa osioissa tarkastellaan joitakin yleisiä käyttötapauksia ja niihin liittyviä huomioita, jotka tarvitaan näiden tapauksien tukemiseen.

### Käyttötapaukset {#use-cases}

#### Tapaus 1: Toimisto (Agency) {#case-1-an-agency}

Tyypillisesti toimiston ydinosa on verkkosivustojen suunnittelu, jossa on esimerkiksi niiden isännöinti tai markkinointi listattuna lisäpalveluina.

Agensioilla Ultimate Multisite tarjoaa uskomattoman arvon monien verkkosivustojen isännöinnin ja hallinnan mahdollistamisessa yhden alustan avulla. Tämä on erityisen hyödyllistä agenteille, jotka standardoivat suunnittelunsa tiettyihin teemoihin, kuten GeneratePressiin, Astraan tai OceanWPiin; nämä voivat hyödyntää Ultimate Multisiten kykyjä automaattisesti aktivoidakseen nämä teemat jokaiselle uudelle sivustolle.

Samoin kuin monien agenttihintoihin liittyvät sopimukset yleisiin ja suosittuihin plugin-hintoihin, Ultimate Multisite mahdollistaa agenteille olemassa olevien investointejen hyödyntämisen tarjoamalla yhteisen alustan, josta pluginit voidaan asentaa, ylläpitää ja käyttää.

Todennäköisesti konfiguraation käyttö olisi haluttu, ja onneksi Ultimate Multisite tekee domeenimappauksen ja SSL-sertifikaattien hallinnan erittäin helppoan monien suosittujen isännöitsijöiden sekä palveluiden, kuten Cloudflare ja cPanel, integraatioiden ansiosta.

Näin käyttämällä jotakin näistä tarjoajista tai sijoittamalla Ultimate Multisite Cloudflaren taakse, domeenien hallinnan ja SSL-sertifikaattien kaltaiset asiat muuttuvat melko yksinkertaisiksi.

Agentit, jotka haluavat pitää tiukkaa kontrollia sivustojen luomisesta, arvostavat helppoutta, jolla voivat luoda sivustoja ja yhdistää sivustot asiakkaisiin ja suunnitelmiin Ultimate Multisiten sujuvan käyttöliittymän avulla.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Pluginien ja teemojen tiukka hallinta ylläpidetään tuotteittain Ultimate Multisiten intuitiivisten käyttöliittymien kautta, jotka mahdollistavat pluginien ja teemojen saatavuuden tai piilottamisen sekä niiden aktivaatiotilan uutta sivustoa varten.

![Product plugin limitations interface](/img/config/product-plugins.png)

Teemat tarjoavat samankaltaisia toimintoja, joiden avulla voidaan valita tietty teema aktivoitavaksi tai piilotettavaksi sivuston luomisen yhteydessä.

![Product theme limitations interface](/img/config/product-themes.png)

Agentit löytävät rauhan sydämeensä Ultimate Multisite -ratkaisun avulla, jolloin voivat tehdä parhaat asiansa – suunnitella poikkeuksellisia verkkosivustoja.

#### Tapaus 2: Erikoistunut tarjoaja {#case-2-niche-provider}

On vanha sanonta, joka sanoo: ”tee yksi asia ja tee se hyvin”. Monille erikoisasiantuneille tämä tarkoittaa tuotteen tai palvelun luomista yhden ydinidean ympärille.

Oletko ehkä intohimoinen golfari, joka mainostaa verkkosivustoja klubeille, tai mahdollisesti intohimoinen esports-pelaaja, joka tarjoaa verkkosivustoja claneille? Ehkä yksilö, joka markkinoi varausservissia ravintoloille?

Monista syistä haluat tarjota palveluita yhteisen kehyksen ja alustan perusteella. Se voi olla se, että olet suunnitellut tai investoinut erikoisominaisuuksi (bespoke plugins) tarjotaksesi vaadittavan toiminnallisuuden, tai se voi olla tilanne, jossa alan parhaat käytännöt vaativat jonkinlaisen standardoidun lähestymistavan suunnittelussa.

Ultimate Multisiten innovatiivinen ominaisuus on mallisivustojen (template sites) käyttö. Mallisivu on sellaiseen sivustoon, johon teema on asennettu ja aktivoitu, tarvittavat lisäosat on asennettu ja aktivoitu sekä otteita postauksia tai sivuja on luotu. Kun asiakas luo uuden sivuston mallin perusteella, mallin sisältö ja asetukset kopioidaan uudelle luodulle sivustolle.

Erikoistuneille sivusto- ja palveluntarjoajille tämä tarjoaa vertaamattoman etulyönnin kyvyssä luoda heti valmiiksi toimiva sivu omilla lisäosilla ja suunnittelulla. Asiakkaan ei tarvitse antaa vain vähiten tarpeellista syötettä palvelun täyttämiseksi.

Riippuen tarpeisiin riippuen molemmat _subdirectory_- tai _subdomain_-asetukset voivat sopia, jolloin arkkitehtuurivalinnat ovat yksinkertainen SSL-sertifikaatti alikansioille tai villakoodiselluun (wildcard) SSL-sertifikaatti alalohkoille.

#### Tapaus 3: WordPress-verkkopalvelut {#case-3-wordpress-web-hosting}

WordPress-sivustojen hostaamiseen on lukemattomia tapoja, mutta harvoin se on yhtä yksinkertaista kuin tarjota asiakkaalle valmiiksi asennettuna WordPressillä varustettua verkkotilaa. Tämä johtuu siitä, että merkityksellisen palvelun tarjoamiseksi on yhdistettävä useita päätöksiä ja huomioita.

Ultimate Multisite erottuu tässä asiassa tarjoamalla kattavan valmiin ratkaisun WordPress-sivustojen hostaukseen. Ratkaisu sisältää keskeiset mekanismit tilauspalveluiden, maksutapahtumien keräämisen, kassamuotojen, alennuskoodien ja asiakastietojen välittämisen toteuttamiseen.

Suurin osa WordPress Multisiten oikean asennuksen, konfiguroinnin ja ylläpidon integralista työtä helpottaa Ultimate Multisite siten paljon, että verkkoadministratorit tarvitsevat huomioimaan vain ne näkökulmat, jotka liittyvät heidän palveluun tai erikoisalaansa, kuten tuotetyypit, hinnoittelu ja palvelutarjoukset.

Kehittäjille, jotka haluavat integroitua Ultimate Multisiteen, ratkaisu tarjoaa myös kattavan RESTful API:n ja Webhookien tapahtumien ilmoittamiseen.

Ilman riippuvuutta lukemattomista ulkoisista lisäosista ja lisensoinneista Ultimate Multisite tarjoaa ominaisuusrikkaan ja vertailukelpoisen ratkaisun Wixille, Squarespaceille, WordPress.comille ja muihin.

### Arkkitehtuurin huomioiminen {#architecture-considerations}

Vaikka tämä ei ole kattava opas, seuraavat asiat voivat toimia ohjeena oikeiden teknologioiden valinnassa Ultimate Multisite-asennuksen tukemiseksi.

#### Jaettu vs. Omistettu hosting {#shared-vs-dedicated-hosting}

Valitettavasti ei kaikki isännöijät ole yhtä, ja jotkut harjoittavat äärimmäistä palvelimen tiheyttä. Edulliset tarjoajat tuottavat yleensä tuloja maksimoimalla palvelimen tiheyden. Siksi Ultimate Multisite -asennuksesi voi olla vain yksi satojen sivustojen joukosta samalla palvelimella.

Ilman asianmukaisia suojausmekanismeja tarjoittajalta, yhteispalvelimella olevat sivustot kokevat "meluisan naapurin" ongelman. Se tarkoittaa sitä, että sama palvelin sivu kuluttaa niin paljon resursseja, että muut sivustot joutuvat kilpailemaan jäljellä olevista resursseista. Tämä ilmenee usein sivustoilla, jotka ovat hitaampia tai eivät vastaa ajoissa.

Web-hostauspalveluntarjoajana itse näet, että vaikutukset tulevat siihen, että asiakkaasi kokevat huonoja nopeuksia, matalia hakutuloksia ja korkeita poistumisprosentteja, mikä usein johtaa asiakaspoistumiseen, kun he etsivät palveluita muualta.

Lyhyesti sanottuna halpa ei tarkoita hyvää.

Ultimate Multisite tunnetaan toimivansa monenlaisten hyvien isännöijöiden kanssa ja integroituvan hyvin niiden ympäristöön tarjoten toimintoja kuten domeenin kartoitus ja automaattinen SSL. Nämä tarjoajat arvostavat suorituskykyä ja tarjoavat korkeampaa palvelua kuin yhteispalvelimet.

Yhteensopivien tarjoajien luettelon ja jokaiselle niille täydellisen asennusohjeet löytyvät Compatible Providers -dokumentaatiosta.

#### Suorituskykyhuomioita {#performance-considerations}

Ultimate Multisite ei ole hidas sovellus, vaan se on erittäin nopea. Se toimii kuitenkin vain yhtä hyvin kuin alla oleva sovellus ja infrastruktuuri sekä voi hyödyntää vain sitä, johon sillä on pääsy.

Ajattele näin: Olet Ultimate Multisite -asennuksen verkkoadministrator 100 sivustolla. Jotkut näistä sivuista toimivat hyvin ja houkuttelevat päivittäin määrän verkkosivustojen vierailijoita.

Tämä skenaario olisi erilainen pienemmällä mittakaavalla, esimerkiksi yhden tai viiden sivuston kohdalla, mutta skaalan ongelmat ilmenevät pian.

Jos yhtä Ultimate Multisite -sivustoa ei huoleta, se on vastuussa kaikista vierailijoiden pyynnöistä sivuille. Nämä pyynnöt voivat olla dynaamisille PHP-sivuille tai staattisille tiedostoille, kuten tyylitiedostoille (stylesheets), JavaScript-tiedostoille tai media-tiedostoille. Olipa kyse yhdestä sivustosta tai sadasta, nämä tehtävät muuttuvat toistuviksi, tylsiksi ja hukkaan. Ei ole tarpeen käyttää CPU-voimaa ja muistia PHP-tiedoston käsittelyyn, jos tuloste on sama staattinen tieto jokaiselle pyynnölle.

Samoin yksi pyyntö PHP- tai HTML-sivusta luo useita seuraavia pyyntöjä skripteille, tyylitiedostoille ja kuvatiedostoille. Nämä pyynnöt kohdistuvat suoraan Ultimate Multisite -palvelimellesi.

Tätä ongelmaa voidaan ratkaista helposti päivittämällä palvelinta, mutta se ei korjaa toissijaista ongelmaa: maantieteellisiä viiveitä (geographic latencies). Vasta useiden palvelinten eri sijainneissa on mahdollista ratkaista tämä ongelma asianmukaisesti.

Tämän vuoksi useimmat verkkoalan ylläpitäjät käyttävät etupään välimuistin (front-end caching) ratkaisuja ja sisältöjakelualustoja (CDN) staattisten sivujen pyyntöjen täyttämiseen. Näiden pyyntöjen täyttäminen ja resurssien selaaminen ennen kuin pyyntö saavuttaa palvelinta säästää prosessointiresurssit, poistaa viiveet, välttää tarpeettomat päivitykset ja maksimoi teknologian investoinnit.

Ultimate Multisite sisältää kehittyneen Cloudflare add-on -lisäosan, joka mahdollistaa verkkoalan ylläpitäjille asennusten sijoittamisen Cloudflaren taakse ja hyödyntämisen ei vain sen välimuistuskapasiteetteja, vaan myös DNS-hostausta, SSL-sertifikaatteja ja turvamekanismeja.

#### Takaavat varmot (Backups) {#backups}

Voisi kysyä 50 ihmiseltä neuvoja takavarmuista ja saada 50 eri mielipidettä takavarmustrategioista. Vastaus on: se riippuu tilanteesta.

Ei kiinon ei ole kiistanalainen, että varmuuskopioinnit ovat pakollisia ja että on lähes mahdotonta ajatella, ettei niitä hallita palveluntarjoaja, erityisesti jos kyseessä on hallittu palvelu (managed service). Siksi asiakkaat katsovat verkkoasiantuntijaa tarjoamaan ja hallinnoimaan tätä palvelua. Kenelle verkkoasiantuntija kääntyy on täysin toisella ongelmalla.

Tämän osion tarkoituksiin sopii, että varmuuskopiointi on hetkellinen kopio järjestelmän tilasta juuri silloin kuin varmuuskopiointi aloitettiin. Yksinkertaisesti sanottuna, riippumatta siitä, mikä järjestelmän tila on varmuuskopioinnin aikana, se tila tallennetaan ja lukitaan varmuuskopioon.

Tämän ymmärryksen avulla vastaus siihen, miten saavutetaan varmuuskopioinnit ja mikä on paras ympäristöllesi, riippuu suurelta osin vaatimuksistasi ja isännöitsijän kyvystä täyttää ne vaatimukset. Kuitenkin mielipidekuohdan mukaan (suoraviivaisimmasta vähemmän suoraviivaiseen), alla olevat vaihtoehdot voivat tarjota jonkin ohjeita.

#### Snapshots (Kuvakaappaukset) {#snapshots}

Snapshots ovat varmuuskopioinnin "hopeisia laastareita", koska ne ovat helppoja, yksinkertaisia (kun et halua palauttaa) ja "toimivat vain". Ne vaativat kuitenkin jonkin verran apua tarjoajalta ja koskevat pääasiassa tilanteita, joissa sinulla on VPS (Virtual Private Server) tai vastaava. Useat meistä 'Yhteensopivista tarjoajista' -dokumentaatiossa luetelluista tarjoajista tarjoavat varmuuskopioita, jotka eivät vaadi enää verkkoasiantuntijan edes vähäisintä puuttumista tai harkintaa.

Perinteiset varmuuskopiot kohdistavat tiedostoihin ja tietokantoihin, kun taas snapshot (kuva) kohdistuu koko levyyn. Tämä tarkoittaa, että kuvassa tallennetaan ei vain sivuston dataa, vaan myös käyttöjärjestelmän ja konfiguraation. Monille tämä on selkeä etu, sillä uusi järjestelmä voidaan luoda lähes välittömästi snapshotista ja siirtää toimintaan korvaamaan ongelmallista instanssia. Samoin palautusprosessi tiedostojen palauttamiseksi vaatii vain snapshot-kuvan liittämistä levyksi olemassa olevalle instanssille, jotta tiedostoihin pääsee käsiksi ja kopioida niitä.

Snapshotit voivat lisätä kustannuksia hostingpalvelun toimesta, mutta ne ovat vakuutuspolitiikka onnettomuuksien varalta.

#### Ulkoiset skriptit (External Scripts) {#external-scripts}

WordPress- ja MySQL-resurssien varmuuskopiointiin on olemassa runsaasti ulkoisia skriptejä ja ratkaisuja, jotka sopisivat hyvin Ultimate Multisitelle, koska se on WordPress-lisäosa, joka hyödyntää WordPressin tiedostojärjestelmää ja tietokantaa. Siksi ratkaisu, joka varmuutta WordPress-sivustoille, kattaa riittävästi Ultimate Multisiten tarpeet.

Emme voi suositella yhtä skriptiä toista verrattuna, mutta yleinen neuvo on suorittaa useita varmuuskopiointia ja palautuksia testejä varmistaaksesi, että tulokset ovat halutut, ja "ole varma" jatkuvasti arvioimalla skriptin toimivuutta erityisesti siinä kohdassa, jossa käytetään jonkinlaista erotetun varmuuskopiointistrategian (differential backup strategy) soveltamista.

On huomioitava, että nämä skriptit lisää järjestelmän kuormaa suoritettuaan, jota tulee ottaa huomioon.

#### Lisäosat (Plugins) {#plugins}

WordPressissä on lähes ongelmat, joita ei voi ratkaista lisäosalla, ja jos ulkoisten skriptien hallinta ei ole sinun vahvuutesi, ehkä lisäosa on seuraava paras vaihtoehto.

Vaikka pluginit vaihtelevat vaihtoehdoissa ja ominaisuuksissa, ne tekevät pääasiassa saman tehtävän: kopioida WordPress-tiedostoja ja tietokantadataa. Sen jälkeen toiminnot eroavat, sillä jotkin pluginit voivat lähettää varmonot tiedostot ulkoisiin palveluihin, kuten Google Driveen tai Dropboxiin, tai jonkinlaiseen yhteensopivaan objektitallennuspalveluun, kuten S3:lle tai Wasabiin. Monipuolisimmat pluginit tarjoavat erotetut varmonnot tai jonkinlaisen strategian varmuudelle, jotta voidaan varmuuttaa vain muuttuneen datan varmuudella säästää ulkoisten tallennusmaksuja.

Valitessasi pluginia huomioi tarkistaa, että se tukee multisite-ominaisuutta. Sen toimintatavan vuoksi varmonnon aikana voit odottaa hetkellistä kuormaa palvelimella, kunnes prosessi on valmis.

#### Verkkotunnus ja SSL {#domain-and-ssl-1}

Verkkotunnusten käyttö multisite _subdomain_-tilassa on jo paljon keskusteltu. Lähes kaikille verkkoinsinööreille yleinen ratkaisu on käyttää villityyppisiä DNS-tietueita (wildcard DNS entries).

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

Tämäntyyppinen DNS-tietue ratkaisee onnistuneesti _subdomainit_, kuten ‘site1.domain.com’ ja ‘site2.domain.com’, IP-osoitteeseen 1.2.3.4, mikä tukee Ultimate Multisitea ja laajemminkin WordPress Multisitea käyttäen _subdomain_-tilaa.

Tämä voi toimia täydellisesti HTTP:llä, koska kohdehosti luetaan HTTP-otsikoista, mutta harvoin verkkosivut ovat niin yksinkertaisia nykyään, että turvallisia HTTPS-transaktioita ei ole lähes pakollisia.

Onnekinne on helppoja vaihtoehdot SSL-sertifikaatteihin. _subdirectory_-tilassa voit käyttää tavallista domeenisertifikaattia. Nämä ovat saatavilla helposti ja ilmaiseksi hostattorilta, jotka saattavat käyttää ilmaisella LetsEncrypt-palvelua tai muuta lähdettä. Muuten ne ovat kaupallisesti saatavilla viranomaisilta, jos pystyt luomaan sertifikaatin pyynnön (certificate signing request).

_Subdomain_-tilassa tähden SSL-sertifikaatti sopii täydellisesti tähden domeenin kanssa ja antaa sertifikaatille auktoriteetin juuritasolle sekä kaikille _subdomain_eille ilman ylimääräisiä asetuksia.

On kuitenkin huomioitava, että tähden SSL-sertifikaatteet eivät välttämättä toimi palveluiden, kuten Cloudflare:n kanssa, ellei ole yritysasiakasta tai aseta pääsyn vain DNS-tilaan, jolloin kaikki välimuistus ja optimointi ohitetaan.

Out-of-the-box Ultimate Multisite tarjoaa ratkaisun tähän ongelmaan osoittaen laajan kokemuksensa WordPress multisite -tarpeista. Tämän yksinkertaisen lisäosan aktivoiminen saa Ultimate Multisiten käyttämään Cloudflare-tunnisteitasi automaattisesti lisäämään DNS-tietueita verkko-sivustoille Cloudflareen ja asettamaan niiden tila 'proxied'. Näin jokaisella verkko-alilla, kun se luodaan, on täysi Cloudflare-suojaus ja -edut mukaan lukien SSL.

Riippuen Ultimate Multisite -asennuksen luonteesta ja tarkoituksesta asiakkaiden voi tarvita omia domeeneja. Tässä tapauksessa verkko-adminilta veloitetaan ratkaisemaan kaksi ongelmaa: yksi, nimen hallinnan (domain name) isännöinti ja toinen, kyseiselle domeenille liittyvät SSL-sertifikaatit.

Monille use Cloudflare on monille on helppo vaihtoehto. Asiakkaan tarvitsee vain sijoittaa oma domeeninsa Cloudflareen, osoittaa CNAME-linkin Ultimate Multisiten juuriosoitteeseen ja määrittää domeenin Ultimate Multisiteessa aloittaakseen omien verkkotunnusten hyödyntämisen.

Tämän ulkopuolella on etsittävä vaihtoehtoja, mistä siksi Ultimate Multisite suosittelee yhteensopivia tarjoajien luetteloa. Tämä johtuu siitä, että DNS- ja SSL-asetusten määrittely voi olla monimutkainen prosessi. Kuitenkin Ultimate Multisiten integroinnin avulla näiden tarjoajien kanssa monimutkaisuus poistuu huomattavasti ja prosessi on automatisoitu.

#### Pluginit {#plugins-1}

On erittäin todennäköistä, että tarvitset lisäpluginja asiakkaidesi tai verkko-sivustojen toimivuuden takaamiseksi. Toimivatko kaikki pluginit WordPress Multisite -ympäristössä ja Ultimate Multisite -ympäristössä? Tämä riippuu siitä.

Vaikka useimmat pluginit voidaan asentaa WordPress Multisiteen, niiden aktivoiminen ja lisensointi vaihtelevat kehittäjästä toiseen.

Haaste on siinä, miten lisenssit sovelletaan joillakin plugin-tyyppisillä, jotka vaativat lisenssin per-domeenin perusteella. Tämä tarkoittaa, että joidenkin pluginien kohdalla verkko-adminin täytyy aktivoitava lisensointi manuaalisesti jokaiselle pluginille jokaiselle uudelle sivustolle.

Siksi on ehkä parasta tarkistaa pluginin kehittäjältä, miten heidän plugininsa toimii WordPress Multisite -ympäristössä ja mitä erityisiä vaatimuksia tai menettelyjä tarvitaan sen lisensioimiseksi.
