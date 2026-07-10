---
title: Asiakkaan tili-sivu
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Asiakkaan tili-sivu (v2) {#your-clients-account-page-v2}

_**TÄRKEÄ HUOMIO: Tämä artikkeli viittaa Ultimate Multisite -versioon 2.x.**_

Kun asiakkaat tilaavat suunnitelman verkostollasi, he pääsevät käsiksi verkkosivustoon ja sen hallintapaneeliin, josta löytyy tärkeää tietoa maksusta, jäsenyyksistä, verkkotunnuksista, suunnitelman rajoituksista jne.

Tässä ohjeessa opastamme sinut asiakkaan tili-sivun läpi ja näet, mitä asiakkaat voivat nähdä ja tehdä siinä.

## Tili-sivu {#the-account-page}

Asiakkaalle pääsy tili-sivulle on mahdollista klikkaamalla **Account** (Tili) -painiketta asiakkaan hallintapaneelissa.

![Asiakasvalikko asiakkaan hallintapaneelissa](/img/account-page/account-menu.png)

Sovereign tenant -verkkoissa Ultimate Multisite v2.13.0 pitää tämän asiakashallinnan kokemuksen pääsivustolla. Jos asiakas avaa tilin, siirtyy kassalle, laskutukseen, laskuihin, sivuston hallintaan, mallin vaihtamiseen tai verkkotunnusten kartoittamiseen sovereign tenant -verkosta, toiminto ohjataan takaisin pääsivuston asiakaspaneeliin, jotta verkoston maksut- ja jäsenrekisterit pysyvät virallisina.

Kun asiakas saapuu sovereign tenant -verkolta, pääsivuston asiakaspaneelissa voi olla linkki takaisin tenant-sivustolle. Takaisinlinkki näytetään vain, jos Ultimate Multisite pystyy vahvistamaan paluuko kohde yhden asiakkaan sivustojen joukosta, mikä estää satunnaisia ohjausliikkeitä samalla kun säilytetään tenant-työnkulku.

![Asiakaspaneelin yleiskuva](/img/account-page/overview.png)

Kun asiakas klikkaa sitä, hän näkee yleiskatsauksen jäsenyydestään, laskutusosoitteesta, laskuista, verkkotunnuksista, sivuston rajoituksista ja voi myös vaihtaa ****Sivustomallia** (jos se on sallittua verkostossasi).

He voivat myös vaihtaa jäsenyyden toiseen suunnitteluun tai ostaa toisen paketin tai palvelun, jonka tarjonta sinulla on. Katsotaan katsomme kunkin osion erikseen.

### Jäsenyyden yleiskatsaus: {#your-membership-overview}

Ensimmäinen laatikko heti asiakkaiden verkkosivun nimen alla näyttää yleiskatsauksen nykyisestä suunnitelmastasi ja ostetuista palveluista/paketeista. Laatikossa näkyy myös jäsennumerosi, alkuperäisesti maksettu summa, kuinka paljon suunnitelma ja mahdolliset palvelut/paketit maksavat sekä kuinka monta kertaa tätä jäsenyyttä on laskutettu. He voivat myös nähdä, onko jäsenyys **Aktiivinen**, **Vanhentunut** vai **Peruutus**.

![Jäsenyyden yleiskatsaus näyttää suunnitelman, summan ja laskutusdetaljit](/img/account-page/membership-card.png)

Tämän laatikon alapuolella asiakkaat näkevät osiot **Tietoa tästä sivustosta** ja **Sivuston rajoitukset**. Nämä osiot näyttävät heille kaikki rajoitukset, jotka liittyvät suunnitelmaasi: levytila, julkaisut, sivut, vierailut jne... Näitä rajoituksia voi määrittää jokaisella suunnitelmasivulla **Ultimate Multisite > Products** -osiossa.

![Tietoa tästä sivustosta ja sivuston rajoitukset -laatikot näyttävät suunnitelman rajoitukset](/img/account-page/site-limits.png)

**Jäsenyytesi** oikealla puolella asiakkaat voivat klikata **Muuta**. Tämä näyttää heille kaikki saatavilla olevat suunnitelmat ja paketit/palvelut. Jos valitset toisen suunnitelman, kyseisen suunnitelman rajoitukset tulevat päälle nykyisten jäsenyyden rajoitusten sijaan – riippumatta siitä, joko siirret ovat alaspäin tai ylöspäin.

Nyt jos asiakkaat valitsevat paketteja tai palveluita tällä nykyisellä jäsenyydellä – kuten enemmän levytilaa tai vierailuja – nykyistä jäsenyyttä ei muuteta, vaan uudet paketit lisätään siihen.

Huomioithan, että alennuskoodejä ei voi lisätä tälle jäsenyden muutos sivulle. Jos asiakas on käyttänyt alennuskoodia ensimmäisessä jäsenyyden ostotilanteessa, se pätee myös tähän uuteen jäsenyyteen.

### Laskutusosoitteen päivittäminen: {#updating-the-billing-address}

Tilin tilillä asiakkaat voivat päivittää myös laskutusosoitettaan. He tarvitsevat vain napsauttamaan **Päivitä** -painiketta _Laskutusosoitteen_ vieressä.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Asiakkaalle avautuu uusi ikkuna. Kaikki, mitä hänen tarvitsee tehdä, on täyttää uusi osoite ja napsauttaa _Tallenna muutokset_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Sivuston mallin vaihtaminen: {#changing-the-site-template}

Jotta asiakkaasi voivat vaihtaa sivustomallejaan, sinun täytyy mennä **Ultimate Multisite > Asetukset > Sivu** ja ottaa käyttöön valinta **Sallita mallin vaihtaminen**.

Lisäksi **Ultimate Multisite > Tuotteet** -osiossa valitse suunnitelmasi ja siirry välilehdelle **Sivustomallit**. Varmista, että valinta **Sallita sivustomallit** on päällä ja **Sivustomallin valintatila** on asetettu vaihtoehtoon **Valitse saatavilla olevat sivustomallit**.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Näet kaikki saatavilla olevat sivustomallit verkkosivustollasi. Valitse, mitkä haluat tehdä saataville ja mitkä et halua oleva saataville asiakkaille, jotka ovat tilaajina tästä suunnitelmasta. Huomaa, että nämä valinnat vaikuttavat myös kassalle, joten mikä tahansa malli, joka on valittu **Ei saatavilla**, ei ilmesty rekisteröintisivulle tälle suunnitelmalle.

Nyt asiakkaasi voivat napsauttaa **Vaihda sivustomalli** -painiketta tilillä.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 näyttää uudelleen suunnitellun mallinvaihtopaneelin. Paneeli alkaa **nykyisen mallin kortilla**, jotta asiakkaat näkevät, mikä malli on aktiivinen ennen kuin he valitsevat korvaavan sen.

Saat asiakkaat tarkastelevat vaihtoehtojaan, saatavilla olevien sivustotemplaattien pysyvä ruudukko pysyy näkyvissä. Tämä auttaa heitä vertailemaan suunnitelmalle sallittuja malleja ilman, että he menettävät näkymää nykyisestä valinnasta.

![Saatavilla olevat sivustotemplaattien lista suunnitelmalle](/img/config/site-templates-list.png)

Kun asiakas on valinnut sen, jota haluaa vaihtaa, hänelle pyydetään vahvistamaan muutoksen.

![Sivustotemblan vaihdon vahvistusdialogi](/img/account-page/template-switch-confirm.png)

Vahvistuksen kytkemisen ja **Process Switch** -painikkeen klikkaamisen jälkeen uusi sivustotemplaatti käytetään asiakkaan verkkosivulla.

Asiakkaat voivat myös käyttää **Reset current template** -toimintoa tästä panelista, jos he tarvitsevat sivuston palauttamiseen tällä hetkellä määriteltyyn malliin. Samoin kuin toisen mallin vaihtaminen, mallin nollaaminen voi ylittää sivuston sisällön, joten asiakkaiden tulisi vahvistaa se vain silloin, kun he ymmärtävät nollausprosessin.

### Mukautettujen domeenien lisääminen: {#adding-custom-domains}

Asiakkaillasi on myös mahdollisuus lisätä mukautettu domeeni tälle suunnitelmalle tilin sivulla. Jotta asiakkaat voivat käyttää mukautettuja domeeneja, siirry **Ultimate Multisite > Settings >** **Domain Mapping** -sivulle.

Kytke päälle vaihtoehto **Enable Domain Mapping**. Tämä antaa asiakkaillesi mahdollisuuden käyttää mukautettuja domeeneja verkostotasolla.

Älä unohda myös tarkistaa, onko domeenimapping käytössä tuotteittain – koska voit rajoittaa tiettyä tuotetta siten, et että asiakkaat voivat käyttää mukautettuja domeeneja.

Siirry **Ultimate Multisite > Products** -sivulle. Valitse haluamasi suunnitelma ja siirry **Custom Domains** -välilehdelle. Kytke päälle vaihtoehto **Allow Custom Domains**.

![Mukautetut domeenit -välilehti Allow Custom Domains -kytkimen kanssa](/img/config/product-custom-domains.png)

Tämä mahdollistaa kaikille tilaajille tälle tietylle suunnitelmalle käyttää omia verkkotunnuksia (custom domains). Nyt Tilisivulla asiakkaat voivat lisätä oman verkkotunnuksensa klikkaamalla **Lisää verkkotunnus** -painiketta.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

Avautuva ensimmäinen ikkuna näyttää asiakkaille viestin, jossa kerrotaan, miten päivittää DNS-rekisterit, jotta tämä oma verkkotunnus toimii verkostossasi.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Tätä viestiä voit muokata (sinä) **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions** -kohdassa.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Tässä on koko näkymä verkkotunnusten mappausasetuksista:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Kun klikkaat **Seuraava vaihe** (Next Step), asiakkaat voivat lisätä oman verkkotunnuksensa ja valita, onko tämä oma verkkotunnus pääverkkotunnus. Huomaa, että asiakkaat voivat käyttää useampaa omia verkkotunnuksia sivustoilleen, joten he voivat valita, mikä niistä on pääverkkotunnus.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Kun klikkaat **Lisää verkkotunnus** (Add Domain), verkkotunnus lisätään asiakkaan tiliin. Kaikki, mitä he tarvitsevat nyt, on muuttaa tämän oman verkkotunnuksen DNS-rekisterit verkkotunnuskirjaimissaan (domain registrar).

### Salasanan vaihtaminen: {#changing-password}

Tilisivun hallintapaneelissa asiakkaat voivat myös vaihtaa salasanansa klikkaamalla **Vaihtoehto** (Change Password).

![Change Password button on account page](/img/account-page/change-password-button.png)

Tämä näyttää uuden ikkunan, jossa asiakkaiden täytyy syöttää nykyinen salasana ja sitten uusi salasana, jota he haluavat käyttää.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Vaara-alue: {#danger-zone}

Meillä on myös kaksi vaihtoehtoa, jotka näkyvät **Vaara-alueen** osiossa: **Poista sivusto** ja **Poista tili**. Molemmat ovat vaara-alueella, koska nämä kaksi toimintoa eivät ole peruuttamattomia. Jos asiakkaat poistavat verkkosivustonsa tai tilinsä, he eivät voi palauttaa niitä takaisin.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Jos asiakas napsauttaa jotakin näistä kahdesta vaihtoehdosta, hänelle avautuu ikkuna, jossa hänen täytyy ottaa käyttöön valinta sivuston tai tilin poistamiseksi ja hänet varoitetaan siitä, että tätä toimintoa ei voi peruuttaa.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Jos asiakas poistaa verkkosivustonsa, tilinsä ja jäsenyyksensä pysyvät koskemattomina. He menettävät vain kaikki sisältö heidän verkkosivustollaan. Jos he poistavat tilinsä, kaikki verkkosivustot, jäsenyyksien tiedot ja tähän tiliin liittyvät tiedot katoavat.
