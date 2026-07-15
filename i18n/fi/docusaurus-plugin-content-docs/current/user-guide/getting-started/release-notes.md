---
title: Julkaisunäytöt
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Julkaisun tiedot

## Versio 2.13.0 — Julkaistu 2026-06-05 {#version-2130--released-on-2026-06-05}

Uusi: Lisätty suvereenisten tenantien tuki asiakastilille, kassalle, laskutukselle, sivustoille, laskuille, mallipohjojen vaihtamiselle ja verkkotunnusten kartoituksille, jotta tenantin verkostot voivat ohjata asiakkaita takaisin pääsivustolle hallittaviin toimintoihin.
Uusi: Lisätty uusien tilausten vahvistus tarkistukset toistuvien jäsenyyksien yhteydessä, jolloin gatewayt voivat poistaa automaattisen uusiutumisen pois käytöstä, jos tallennettua laskutusasiaa, tilausta tai vault-tokenia puuttuu.
Uusi: Lisätty HMAC-vahvistettu loopback-julkaisu odottavien sivustojen luomiseen, jotta kassalta sivuston valmistelu on luotettavampaa isännöinnissä, joissa taustatehtävät viivästyy.
Uusi: Lisätty kehittäjälaajennuspisteitä SSO-URL-osoitteille, kassaportaalin perusdomeeneille ja automaattisen domeenirekisterien luomiseen.
Korjaus: SSO on nyt luotettavampi kartoitettujen domainien, anonyymien välittäjien vierailujen, uloskirjautumisten ja plugin-riippuvuuksien ristiriitojen suhteen.
Korjaus: Odottavan sivuston luominen palautuu nyt vanhoilta julkaisualueille ja estää asiakkaita jäämästä sivuston luontinäytölle.
Korjaus: Domeenirekisterit ei enää luoda yhteisiin kassaportaalin perusdomeeneihin, eikä käyttämättömiä isännöjän taustatehtäviä ohiteta, jos ei ole aktiivista integraatiota.
Korjaus: Kassalle, laskutusosoitteelle, salasanan nollaamiselle, sähköpostivahvistukselle, mallipohjojen vaihtamiselle, kierroksille ja asiakastason hallintapaneelien poikkeustilanteet eivät enää estä normaaleja asiakasvirtoja.
Korjaus: Levehdetyt sähköpostit pitävät nyt vastaanottajat yksityisinä samalla kun vältytään SMTP/plugin-kriittisistä virheistä, jos vastaanottajaluettelot tai sähköpostin siirrot epäonnistuvat.
Korjaus: Jäsenyyksien uusiutumiset, vanhentumisen näyttäminen ja maksutonnistukset välttävät nyt välittömän vanhentumisen, kaatumisen tai pakollisten maksujen jättämisen huomiotta.
Parannettu: WordPress-yhteensopivuus testattu aina versioon 7.0 asti, tuotantoyhteiset Vue-asetteet rakennetaan uudelleen npm-lähteistä ja Cypressin loppupäivän kattavuus suorittaa nyt enemmän kassavirtoja, asennuksia, SSO:ta ja portaleja.

## Versio 2.12.0 — Julkaistu 2026-05-15 {#version-2120--released-on-2026-05-15}

- Uusi: Lisätty Hostinger (hPanel) tuetuksi isäntänä ja verkkotunnusten kartoitustuen kanssa
- Uusi: Site Exporter käsittelee nyt verkkoimportin paketteja, mikä helpottaa verkkohallintojen laajuista sivuston palauttamista
- Korjaukset: BCC-lähetyssähköpostit käyttävät nyt piilotettua vastaanottajien otsikkoa estääkseen vastaanottajien osoitteiden paljastumisen
- Korjaukset: Jäsenyyden vanhentumispäivämäärä ei enää korruptoitunut tallennuksessa, kun käytetään päivämäärän sijaan muuta arvoa
- Korjaukset: Stripe-jäsenyyspäivitykset poistavat nyt alennukset oikein ilman vanhentunutta deleteDiscount API -funktiota
- Korjaukset: SSO-ohjaus (redirect) kartoitettujen sivustojen kohdalla on nyt rajoitettu estämään loputtomia ohjausketjuja
- Korjaukset: Asetusoppaan kuvavalinta päivittää nyt oikein alla olevaa datamallia
- Korjaukset: Site Exporter CLI säilyttää nyt oikean oletusverkon sivuston valinnan

## Versio 2.11.0 — Julkaistu 2026-05-11 {#version-2110--released-on-2026-05-11}

- Uusi: Site exportit pakkaavat nyt itsensä käynnistyvän `index.php`-tiedoston, jotta ZIP-tiedosto voidaan asentaa uuteen isäntään ilman erillistä plugin-asennusta
- Uusi: Verkkoexportilla ylläpitäjät voivat exportoida kaikki alisivustot yhdeksi arkistoksi Site Export -hallintapaneelista
- Uusi: Site Templates -mallin valinta on nyt pakollinen takaisinkytkennän kautta, mikä rajoittaa mallien saatavuutta suunnitelman rajoitusten mukaisesti
- Uusi: Kassakortin muokkauslomake varoittaa, jos tuotetta lisätään ilman määritettyä pakollista kenttää
- Uusi: Import/Export -asetustabi selittää nyt selkeämmin sen laajuuden ja linkittää suoraan Site Export -työkaluun

## Versio 2.10.0 — Julkaistu 2026-05-05 {#version-2100--released-on-2026-05-05}

Uusi: PayPalin ohjeistettu asennuswizard manuaalisten tunnusten syöttämiseen OAuth-tunnisteella sujuvan porttikonfiguraation varmistamiseksi.
Uusi: Mallin vaihtopaneeli suunniteltu uudelleen nykyisellä mallikortilla, pysyvällä ruudukolla ja **Nolla nykyinen malli** -painikkeella.
Korjaus: Mallin vaihtaminen ei enää jää UI-nesteeseen AJAX-virheen vuoksi.
Korjaus: Mallin vaihto sallimustilojen turvaus luvattomalta pääsyltystä vastaan.
Korjaus: Sivuston ylivoiman syötteet validoidaan ennen tallennusta.
Korjaus: Laskutusosoitteen pyyntö näytetään nyt, kun osoitetta ei ole annettu.
Korjaus: PHP 8.1 null-to-string -poistumisen ilmoitukset ratkaistu.
Korjaus: Nykyiset lajit ladataan ennen init hookia estämään ajoongelmia.
Korjaus: Suodatettu SSO-polku noudatetaan kaikissa kirjautumisvirroissa.
Korjaus: Tyhjän sivuston tunnistetiedot säilytetään tallennuksessa.

## Versio 2.9.0 — Julkaistu 30.04.2026 {#version-290--released-on-2026-04-30}

Uusi: Yksittäisen sivuston vienti ja tuonti lisätty **Työkalut > Vienti & tuonti** -valikossa.
Korjaus: Vientit ZIP-tiedostot tarjotaan nyt tunnistautuneen latauskohteen kautta.
Korjaus: SQL-injektion riski ja kyselyongelmat odottavissa vienti-/tuontakyselyissä korjattu.
Korjaus: Sivuston ei julkaista, kun ylläpitäjä vahvistaa asiakkaan sähköpostiosoitteen manuaalisesti.
Korjaus: Kuolleet `pending_site`-rekordit poistetaan, jos jäsenyys puuttuu.
Korjaus: Asetusten navigointpuskurit ja hakukohdan navigointkorjaukset korjattu.
Korjaus: Odottavat sivustot näytetään nyt ensin Kaikki sivut -näkymässä.
Korjaus: Kuvakaappauspalvelimen (mShots) User-Agent-otsikko lisätty estämään 403-virheet.
Korjaus: Tuontikronin aikataulun kiertävä riippuvuus ratkaistu.
Korjaus: Tour ID:t normalisoidaan alaviivuihin käyttäjäasetusten avaimissa.
Parannettu: ZipArchive käytetään nyt Alchemy/Zippy:n sijaan paremman yhteensopivuuden vuoksi.

## Versio 2.8.0 — Julkaistu 29.04.2026 {#version-280--released-on-2026-04-29}

Uusi: Jumper-kytkin lisätty Asetukset (Other Options) -käyttöliittymään.
Uusi: Tilakolonne lisätty kassaportaalin lomake-taulukkoon.
Uusi: Lisäosan sunrise-tiedoston lataus lisäosien (MU-plugin) mukautettujen sunrise-laajennusten käyttöön.
Parannettu: Poistettu virheiden raportoinnin valinta asetussivulta.
Korjattu: Kiitossivu -sivukortti – kuva on nyt rajoitettu ja linkit tyylitelty oikein.
Korjattu: Kuvakaappauspalvelin vaihdettu thum.io:sta WordPress.com mShotsiin.
Korjattu: Rekisteröitymisen ja oletusroolin asettaminen on nyt oikein uuden asennuksen yhteydessä.
Korjattu: `get_site_url()` ei enää palauta tyhjää arvoa, kun domeenissa on portti.
Korjattu: Tiedostojen kopiointi toimii nyt oikein, kun `copy_media`-asetus on tyhjä.
Korjattu: Objekti-cache invalidoidaan oikein verkkotiedostojen aktivoinnin jälkeen.
Korjattu: Mukautettu domeeni promotoidaan automaattisesti ensisijaiseksi DNS-varmistuksessa kolmen osaisen domeeneille.
Korjattu: Odottava jäsenyys peruutetaan, kun vanhentunut maksu poistetaan.
Korjattu: Salasanan vahvuustarkistin käynnistyy uudelleen suljetun sisäänkirjautumisen pyynnön jälkeen.
Korjattu: Loputussivulla ei ole äärettömän sivun latausta, jos sivusto on jo luotu.
Korjattu: WP core -rekisteröintivalinta synkronoidaan lisäosan aktivoinnin ja asetusten tallennuksen välillä.
Korjattu: Null-vanhentumiskontrolli lisätty `calculate_expiration`-funktioon PHP 8.4 -yhteensopivuuden vuoksi.
Korjattu: Kaksoisrekisteröitymiset estetään, jos asiakkaalla on jo aktiivinen jäsenyys.
Korjattu: Null-tarkistus lisätty `date_expiration`-kenttään kassaportaalissa.
Korjattu: Sivuston tarjoaminen on kovetettu – rajoitukset, jäsenyyden pääteltäminen ja domeenin promootio.
Korjattu: Ennennäkemisen tarkistusstatusmerkki korjattu olemaan NOT Activated, jos tarkistus epäonnistuu.
Korjattu: Kassaportaalissa käytettävä domeeni sähköpostivarmistustietojen URL-ille.
Korjattu: Automaattinen sisäänkirjautuminen kassalla, kun salasana-kenttää ei ole olemassa.
Korjattu: Ilmaisjäsenyydet eivät enää vanhene – käsitellään elinikäisinä.

Korjaus: Sähköpostivahvistusportti estää sivuston julkaisun, kun asiakas ei ole vahvistanut sähköpostia.
Korjaus: SES v2 API -pääpolku ja tunnistautumistie korjattu.
Korjaus: `wu_inline_login_error` hook ilmestyy pre-submit catch blockiin.
