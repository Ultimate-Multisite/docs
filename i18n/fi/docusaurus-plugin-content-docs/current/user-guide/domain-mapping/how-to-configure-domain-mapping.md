---
title: Verkkotunnusten kartoituksen määrittäminen
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kuinka määrittää verkkotunnusten ohjaus (v2) {#how-to-configure-domain-mapping-v2}

_**TÄRKEÄ HUOMAUTUS: Tämä artikkeli koskee Ultimate Multisite -versiota 2.x.**_

Yksi premium-verkon tehokkaimmista ominaisuuksista on mahdollisuus tarjota asiakkaillemme tilaisuus liittää ylimmän tason verkkotunnus sivustoihinsa. Kumpi loppujen lopuksi näyttää ammattimaisemmalta: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) vai [_**joesbikeshop.com**_](http://joesbikeshop.com)? Siksi Ultimate Multisite tarjoaa tämän ominaisuuden sisäänrakennettuna ilman tarvetta käyttää kolmannen osapuolen plugineja.

## Mitä verkkotunnusten ohjaus on? {#whats-domain-mapping}

Kuten nimi kertoo, verkkotunnusten ohjaus on Ultimate Multisite -palvelun tarjoama mahdollisuus vastaanottaa mukautettua verkkotunnusta koskeva pyyntö ja ohjata kyseinen pyyntö verkon vastaavaan sivustoon, johon kyseinen verkkotunnus on liitetty.

### Kuinka määrittää verkkotunnusten ohjaus Ultimate Multisite -verkossasi {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Verkkotunnusten ohjaus vaatii hieman määrittämistä toimiakseen. Onneksi Ultimate Multisite automatisoi raskaan työn puolestasi, jotta voit täyttää vaatimukset helposti.

Ultimate Multisite -asennuksen aikana ohjattu toiminto kopioi ja asentaa **sunrise.php**-tiedoston automaattisesti määritettyyn kansioon. **Ohjattu toiminto ei anna sinun jatkaa, ennen kuin tämä vaihe on suoritettu**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tämä tarkoittaa, että kun Ultimate Multisite -asennuksen ohjattu toiminto on saanut verkkosi määrityksen valmiiksi, voit aloittaa mukautetun verkkotunnuksen ohjaamisen heti.

Huomaa, että verkkotunnusten ohjaus Ultimate Multisite -palvelussa ei ole pakollista. Sinulla on mahdollisuus käyttää WordPress Multisite -palvelun natiivia verkkotunnusten ohjaustoimintoa tai mitä tahansa muuta verkkotunnusten ohjausratkaisua.

Jos sinun täytyy poistaa Ultimate Multisite -verkkotunnusten ohjaus käytöstä antaaksesi tilaa muille verkkotunnusten ohjausratkaisuille, voit poistaa tämän ominaisuuden käytöstä kohdassa **Ultimate Multisite > Settings > Domain Mapping**.

![Verkkotunnusten ohjauksen asetussivu, jossa näkyvät ylläpitäjän uudelleenohjaus, ohjausviesti ja DNS-asetukset](/img/config/domain-mapping-settings.png)

Heti tämän vaihtoehdon alapuolella näet myös vaihtoehdon **Force Admin Redirect**. Tämän vaihtoehdon avulla voit hallita, voivatko asiakkaasi käyttää admin Dashboardiaan sekä mukautetussa verkkotunnuksessaan että aliverkkotunnuksessaan vai vain toisessa niistä.

Jos valitset **Force redirect to mapped domain** , asiakkaasi voivat käyttää admin Dashboardiaan vain mukautetuissa verkkotunnuksissaan.

Vaihtoehto **Force redirect to** **network domain** tekee täsmälleen päinvastoin – asiakkaasi voivat käyttää Dashboardejaan vain aliverkkotunnuksessaan, vaikka he yrittäisivät kirjautua sisään mukautetuissa verkkotunnuksissaan.

Ja vaihtoehto **Allow access to the admin by both mapped domain domain and network domain** sallii heidän käyttää admin Dashboardejaan sekä aliverkkotunnuksessa että mukautetussa verkkotunnuksessa.

![Admin Redirect -pudotusvalikko avattuna ja kolme uudelleenohjausvaihtoehtoa näkyvissä](/img/config/domain-mapping-redirect-options.png)

Mukautetun verkkotunnuksen ohjaamiseen on kaksi tapaa. Ensimmäinen on verkkotunnuksen ohjaaminen verkon admin Dashboardista super adminina, ja toinen on alisivuston admin Dashboardin kautta Account-sivulla.

Mutta ennen kuin aloitat mukautetun verkkotunnuksen ohjaamisen johonkin verkossasi olevaan alisivustoon, sinun täytyy varmistaa, että verkkotunnuksen **DNS-asetukset** on määritetty oikein.

###

### Varmista, että verkkotunnuksen DNS-asetukset on määritetty oikein {#making-sure-the-domain-dns-settings-are-properly-configured}

Jotta ohjaus toimisi, sinun täytyy varmistaa, että verkkotunnus, jonka aiot ohjata, osoittaa verkkosi IP-osoitteeseen. Huomaa, että tarvitset verkon IP-osoitteen – sen verkkotunnuksen IP-osoitteen, johon Ultimate Multisite on asennettu – et sen mukautetun verkkotunnuksen IP-osoitetta, jonka haluat ohjata. Tietyn verkkotunnuksen IP-osoitteen etsimiseen suosittelemme esimerkiksi [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)-palvelua.

Jotta verkkotunnus ohjataan oikein, sinun täytyy lisätä **A-tietue** **DNS**-määritykseesi osoittamaan kyseiseen **IP-osoitteeseen**. DNS-hallinta vaihtelee suuresti eri verkkotunnusrekisteröijien välillä, mutta verkossa on runsaasti ohjeita tästä, jos haet fraasilla " _Creating A Record on XXXX_ ", jossa XXXX on verkkotunnusrekisteröijäsi (esim.: " _Creating A Record on_ _GoDaddy_ ").

Jos sinulla on vaikeuksia saada tämä toimimaan, **ota yhteyttä verkkotunnusrekisteröijäsi tukeen**, ja he pystyvät auttamaan sinua tässä osassa.

Jos aiot sallia asiakkaidesi ohjata omia verkkotunnuksiaan, heidän täytyy tehdä tämä osa itse. Ohjaa heidät rekisteröijänsä tukijärjestelmän puoleen, jos he eivät pysty luomaan A-tietuetta.

### Mukautetun verkkotunnuksen ohjaaminen Super Adminina {#mapping-custom-domain-name-as-super-admin}

Kun olet kirjautunut sisään verkkoosi super adminina, voit helposti lisätä ja hallita mukautettuja verkkotunnuksia siirtymällä kohtaan **Ultimate Multisite > Domains**.

![Domains-luettelosivu Ultimate Multisite -palvelussa](/img/admin/domains-list.png)

Tällä sivulla voit napsauttaa yläosassa olevaa **Add Domain** -painiketta, jolloin avautuu modaali-ikkuna, jossa voit asettaa ja täyttää **mukautetun verkkotunnuksen nimen** , valita **alisivuston**, johon haluat käyttää mukautettua verkkotunnusta, ja päättää, haluatko asettaa sen **ensisijaiseksi verkkotunnukseksi** vai et (huomaa, että voit ohjata **useita verkkotunnuksia yhteen alisivustoon**).

![Add Domain -modaali, jossa on verkkotunnuksen nimi, sivustovalitsin ja ensisijaisen verkkotunnuksen kytkin](/img/admin/domain-add-modal.png)

Kun olet syöttänyt kaikki tiedot, voit napsauttaa alareunassa olevaa **Add Existing Domain** -painiketta.

Tämä käynnistää mukautetun verkkotunnuksen DNS-tietojen vahvistus- ja noutoprosessin. Näet myös sivun alareunassa lokin, jonka avulla voit seurata prosessin etenemistä. Tämän prosessin valmistuminen voi kestää muutaman minuutin.

Ultimate Multisite v2.13.0 luo myös sisäisen domain-tietueen automaattisesti, kun uusi sivusto luodaan hostille, jota tulee käsitellä sivustokohtaisena domainina. Jos host on verkoston ensisijainen domain tai jokin jaetun checkout-lomakkeen perusdomaineista, jotka on määritetty **Site URL** -kentässä, automaattinen mapped-domain-tietue ohitetaan, jotta jaettu perusdomain pysyy kaikkien sitä käyttävien sivustojen käytettävissä.

Kun asiakas rekisteröi uuden domainin Domain Seller v1.3.0:lla tai uudemmalla, Ultimate Multisite mapittaa rekisteröidyn domainin oletusarvoisesti asiakkaan verkostosivustoon. Ylläpitäjien ei enää tarvitse lisätä erillistä mapped-domain-tietuetta onnistuneen rekisteröinnin jälkeen, elleivät he halua säätää asetuksia, kuten ensisijaisen domainin merkintää, aktivointitilaa tai SSL-käsittelyä.

**Stage**-arvon tai tilan tulisi muuttua arvosta **Checking DNS** arvoon **Ready**, jos kaikki on määritetty oikein.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Jos napsautat domainin nimeä, näet sen sisällä joitakin asetuksia. Katsotaan niitä nopeasti:

![Domainin tietosivu, jossa on vaiheen, sivuston, aktiivisuuden, ensisijaisuuden ja SSL:n kytkimet](/img/admin/domain-edit.png)

**Stage:** Tämä on vaihe, jossa domain on. Kun lisäät domainin ensimmäisen kerran, se on todennäköisesti **Checking DNS** -vaiheessa. Prosessi tarkistaa DNS-tietueet ja vahvistaa, että ne ovat oikein. Sen jälkeen domain siirretään **Checking SSL** -vaiheeseen. Ultimate Multisite tarkistaa, onko domainilla SSL vai ei, ja luokittelee domainisi tilaan **Ready** tai **Ready (without SSL)**.

**Site:** Alidomain, joka on liitetty tähän domainiin. Mapitettu domain näyttää tämän tietyn sivuston sisällön.

**Active:** Voit kytkeä tämän asetuksen päälle tai pois aktivoidaksesi tai poistaaksesi domainin käytöstä.

**Is Primary Domain?:** Asiakkaillasi voi olla useampi kuin yksi mapitettu domain jokaiselle sivustolle. Käytä tätä asetusta valitaksesi, onko tämä kyseisen sivuston ensisijainen domain.

**Is Secure?:** Vaikka Ultimate Multisite tarkistaa, onko domainilla SSL-sertifikaatti vai ei ennen sen käyttöönottoa, voit valita manuaalisesti, ladataanko domain SSL-sertifikaatin kanssa vai ilman. Huomaa, että jos verkkosivustolla ei ole SSL-sertifikaattia ja yrität pakottaa sen latautumaan SSL:llä, se voi aiheuttaa virheitä.

### Mukautetun domain-nimen mapittaminen Subsite-käyttäjänä {#mapping-custom-domain-name-as-subsite-user}

Subsite-ylläpitäjät voivat myös mapittaa mukautettuja domain-nimiä oman subsitensa admin dashboardista.

Ensin sinun on varmistettava, että otat tämän asetuksen käyttöön **Domain mapping** -asetuksissa. Katso alla oleva kuvakaappaus.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Voit myös asettaa tai määrittää tämän asetuksen **Plan**-tasolla tai tuotteen asetuksissa kohdassa **Ultimate Multisite > Products**.

![Mukautetut domainit -osio tuotteen muokkaussivulla](/img/config/product-custom-domains.png)

Kun jokin näistä asetuksista on käytössä ja subsite-käyttäjällä on lupa mapittaa mukautettuja domain-nimiä, subsite-käyttäjän pitäisi nähdä **Account**-sivulla metabox nimeltä **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Käyttäjä voi napsauttaa **Add Domain** -painiketta, jolloin avautuu modal-ikkuna, jossa on ohjeita.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Käyttäjä voi sitten napsauttaa **Next Step** ja jatkaa mukautetun domain-nimen lisäämistä. Hän voi myös valita, onko tästä tuleva ensisijainen domain vai ei.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** -painikkeen napsauttaminen käynnistää mukautetun domainin DNS-tietojen vahvistamisen ja hakemisen.

### Tietoa domainien synkronoinnista {#about-domain-syncing}

Domainien synkronointi on prosessi, jossa Ultimate Multisite lisää mukautetun domain-nimen hosting-tilillesi lisädomainina, **jotta domain mapping toimii**.

Domainien synkronointi tapahtuu automaattisesti, jos hosting-palveluntarjoajallasi on integraatio Ultimate Multisite domain mapping -ominaisuuden kanssa. Tällä hetkellä näitä hosting-palveluntarjoajia ovat _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ja _Cpanel._

Kun host-palveluntarjoajan integraatio on aktiivinen, Ultimate Multisite voi myös lisätä palveluntarjoajan puolen DNS- tai alidomainin luontitehtävän jonoon uusille luoduille sivustoille. Jos mikään integraatio ei kuuntele kyseistä tehtävää, taustatyö ohitetaan no-op-jonotietueiden välttämiseksi. Mapitettujen domainien DNS- ja SSL-tarkistukset jatkuvat normaalin domain-vaiheprosessin kautta.

Sinun täytyy aktivoida tämä integraatio Ultimate Multisite -asetuksissa **Integration**-välilehdellä.

![Integrations-välilehti Ultimate Multisite -asetuksissa, jossa näkyvät hosting-palveluntarjoajat](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Huomaa, että jos hosting-palveluntarjoajasi ei ole jokin yllä mainituista palveluntarjoajista, **sinun täytyy synkronoida tai lisätä domain-nimi manuaalisesti** hosting-tilillesi._
