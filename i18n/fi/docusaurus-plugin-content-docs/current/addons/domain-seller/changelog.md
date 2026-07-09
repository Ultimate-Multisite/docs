---
title: Verkkotunnusten myyjän muutosloki
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller -muutosloki

Versio 1.3.0 - Julkaistu 2026-06-02
- Uusi: Lisätty network-admin-varoitus, kun HostAfrica-jälleenmyyjän saldo laskee liian alas
- Uusi: Lisätty vastarekisteröityjen verkkotunnusten automaattinen kartoitus verkostosivustoon
- Korjaus: Sovellettu rekisteröijän kenttävaatimuksia vain uutta verkkotunnusta rekisteröitäessä
- Korjaus: Tehty saldon seurantailmoituksista kuitattavia
- Korjaus: Varmistettu, että WooCommerce-rekisteröijän laskutustiedot säilyvät
- Korjaus: Pakotettu rekisteröijän yhteystietovaatimukset rekisteröinnin aikana
- Korjaus: Estetty verkkotunnuksen rekisteröintituotteiden luominen 0 %:n katteella
- Korjaus: Säilytetty verkkotunnusvalinnat ja hinnoittelu checkout-istunnon kulun läpi
- Korjaus: Parannettu HostAfrica-verkkotunnushinnoittelun valuuttanäyttöä
- Korjaus: Parannettu checkout-lomakkeen action-toimintaa WP-coren query-var-ristiriitojen estämiseksi
- Parannettu: Linkitetty HostAfrica-jälleenmyyjän määritysdokumentaatio käyttöönotto-ohjeisiin

Versio 1.2.0 - Julkaistu 2026-05-25
- Uusi: Lisätty HostAfrica verkkotunnusten myynti-integraatioksi, jossa on tuki checkoutille, käyttöönotto-ohjatulle toiminnolle, haulle, TLD:lle/hinnoittelulle, rekisteröinnille, uusimiselle, siirrolle, nimipalvelimelle, DNS:lle, EPP-koodille, rekisterinpitäjän lukitukselle ja ID-suojaukselle
- Uusi: Lisätty Openprovider verkkotunnusten myynti-integraatioksi, jossa on tuki jälleenmyyjähinnoittelulle, rekisteröinnille, uusimiselle, siirrolle, nimipalvelimelle, DNS:lle, EPP-koodille, rekisterinpitäjän lukitukselle, WHOIS-yksityisyydelle ja TLD-synkronoinnille
- Uusi: Lisätty Hostinger verkkotunnusten myynti-integraatioksi, joka käyttää core-integraation jaettua Hostinger API -tokenia saatavuustarkistuksiin, rekisteröintiin, nimipalvelinpäivityksiin, rekisterinpitäjän lukitukseen ja WHOIS-yksityisyyteen
- Parannettu: Lisätty verkkotunnuksen elinkaaritoimintojen ja suodattimien docblockit kehittäjäintegraation ohjeistusta varten
- Parannettu: Päivitetty plugin-yhteensopivuuden metadata WordPress 7.0:aan addonin readme-tiedostossa
- Parannettu: Päivitetty suunnittelupohjat, joita käytetään tulevan julkaisun koordinointiin

Versio 1.1.0 - Julkaistu 2026-05-08
- Uusi: DNS-tietueen luonti (add_dns_record) toteutettu ResellerClub-, Enom- ja OpenSRS-rekisterinpitäjille
- Korjaus: Oletusarvoinen DNS Records -jäsennin sietää nyt {DOMAIN}- ja {SITE_URL}-tokeneita
- Korjaus: Verkkotunnusvalinnan checkout-kenttien slugien nimiavaruus on määritetty törmäyksen estämiseksi site_urlin kanssa

Versio 1.0.8 - Julkaistu 2026-05-07
- Korjaus: ResellerClub-verkkotunnushinnoittelu hakee nyt live-omakustannushinnat oikeasta API endpointista

Versio 1.0.7 - Julkaistu 2026-05-06
* Korjaus: ResellerClub test_connection lähettää vaaditun tlds-parametrin (#224)

Versio 1.0.6 - Julkaistu 2026-05-05
* Korjaus: ResellerClub-verkkotunnuksen rekisteröinti toimii nyt oikein parannetun API-vastauksen käsittelyn ja rekisteripohjaisen palveluntarjoajareitityksen ansiosta
* Korjaus: Register Domain -admin-sivun UX-parannukset
* Poistettu: CyberPanel-rekisterinpitäjäintegraatio

Versio 1.0.5 - Julkaistu 2026-04-02
* Uusi: GoDaddy-rekisterinpitäjäintegraatio verkkotunnusten rekisteröintiin ja hallintaan
* Uusi: NameSilo-rekisterinpitäjäintegraatio
* Uusi: ResellerClub-rekisterinpitäjäintegraatio
* Uusi: SES-lähetysverkkotunnuksen automaattinen vahvistus verkkotunnuksen oston ja kartoituksen yhteydessä
* Korjaus: Suojattu plugin-vakiot uudelleenmäärittelyltä testiympäristössä
* Korjaus: MySQL-liput jaetaan sanoihin oikein install-wp-tests.sh-tiedostossa

Versio 1.0.4 - Julkaistu 2026-03-14
* **Korjaus:** Joitakin puuttuvia css-resursseja
* **Korjaus:** Virhe, joka liittyy saatavilla olemattomiin tld:ihin

Versio 1.0.3 - Julkaistu 2026-03-09
* **Korjaus:** Vue-reaktiivisten ominaisuuksien virheet (domain_option, selected_domain, domain_provider), kun käytetään vanhaa rekisteröitymispohjaa checkout-lyhytkoodin kanssa
* **Korjaus:** Aliverkkotunnuksen syöttökentän kohdistusvirhe ja ylisuuri teksti verkkotunnusvalinnan checkout-kentässä
* **Korjaus:** Piilota "URL-osoitteesi on" -esikatselulohko, kun verkkotunnusvalintakenttä on näkyvissä

Versio 1.0.2 - Julkaistu 2026-03-01
* **Parannettu:** Poistettu yleiset kateasetukset asetussivulta — hinnoittelu on nyt yksinomaan tuotekohtaista
* **Parannettu:** Lisätty "Hallinnoi verkkotunnustuotteita" -linkki asetussivulle nopeaa siirtymistä varten
* **Parannettu:** Selkeämmät kenttäkuvaukset ja työkaluvihjeet verkkotunnustuotteiden asetuksiin (catch-all vs TLD-kohtainen, katetyypit, tutustumishinnoittelu)
* **Parannettu:** Paremmat kuvaukset koko asetussivulla (etsi TLD:t, uusimiset, DNS, ilmoitukset)

Versio 1.0.1 - Julkaistu 2026-02-27

* **Uusi:** TLD-tuontityökalu joukkohinnoittelun hallintaan
* **Uusi:** Esittelyhinnoittelun tuki verkkotunnustuotteille
* **Uusi:** E2E-testikokonaisuus Cypressillä
* **Uusi:** Sähköpostimallit verkkotunnuksen elinkaaren ilmoituksille
* **Uusi:** Rekisteröijän osoitekentät ylläpidon verkkotunnuksen rekisteröintimodaalissa, esitäytettyinä asetuksista
* **Uusi:** Asiakkaan DNS-hallintakäyttöliittymä, jossa on tuki tietueiden lisäämiselle, muokkaamiselle ja poistamiselle
* **Uusi:** "Tuo oma verkkotunnuksesi" -maksuvaihtoehto automaattisella verkkotunnuksen yhdistämisellä
* **Uusi:** Sivuston URL-osoitteen automaattinen luonti verkkotunnuksen nimestä maksun aikana
* **Uusi:** Oletusnimipalvelimen ja DNS-tietueiden määritys asetuksissa
* **Uusi:** Verkkotunnuksen rekisteröintitiedot ja DNS-hallinta ydintoimintojen verkkotunnuksen muokkaussivulla
* **Uusi:** Ohjattu käyttöönotto luo automaattisesti oletusarvoisen verkkotunnustuotteen järkevillä oletuksilla
* **Uusi:** Päivittäinen automaattinen TLD-synkronointi cronilla kaikille määritetyille palveluntarjoajille
* **Uusi:** WHOIS-yksityisyydensuoja tuotekohtaisella määrityksellä (aina päällä, asiakkaan valinta tai pois käytöstä)
* **Uusi:** WHOIS-yksityisyyden valintaruutu maksuvaiheessa, hinnoittelunäytöllä ja tumman tilan tuella
* **Uusi:** Rekisteröi verkkotunnus -ylläpitosivu manuaaliseen verkkotunnuksen rekisteröintiin
* **Uusi:** Automaattiset plugin-päivitykset Ultimate Multisite -päivityspalvelimen kautta
* **Uusi:** Verkkotunnustuotetyypin suodatinvälilehti tuoteluettelotaulukossa violetilla merkkityylillä
* **Uusi:** Rekisteröijän yhteystietokentät (nimi, osoite, kaupunki, osavaltio, postinumero, maa, puhelin) verkkotunnuksen maksulomakkeella
* **Uusi:** Rekisteröijän kenttien validointi ennen rekisteröijän API-kutsua selkeillä virheviesteillä
* **Uusi:** Palveluntarjoajakohtaiset lokikanavat verkkotunnuksen rekisteröintitapahtumille (esim. domain-seller-namecheap.log)
* **Uusi:** Rekisteröijän yhteystietokentät päärekisteröinti-/liittymismaksulomakkeella (näytetään, kun verkkotunnusta rekisteröidään)
* **Parannettu:** Verkkotunnuksen hakukenttä maksuvaiheessa korvattu yhtenäisellä verkkotunnuksen valintakentällä, joka tukee aliverkkotunnuksen, rekisteröinnin ja olemassa olevan verkkotunnuksen välilehtiä
* **Parannettu:** Verkkotunnustuotteen asetukset renderöityvät tuotteen muokkaussivulle inline-muodossa ydintoimintojen widget-järjestelmän kautta
* **Parannettu:** Asiakkaan verkkotunnustiedot kytkeytyvät ydintoimintojen verkkotunnuksen yhdistämiswidgetiin erillisen metaboxin sijaan
* **Parannettu:** TLD-tuontitoiminto yksinkertaistettu yhden napsautuksen synkronointiin kaikilta palveluntarjoajilta
* **Parannettu:** Namecheap-verkkotunnuksen saatavuus käyttää erä-API-kutsua nopeampaan hakuun
* **Parannettu:** Namecheap-hinnoittelu-API käyttää oikeita parametreja ja vastauksen jäsentämistä
* **Parannettu:** Keskitetty TLD-tallennus yhteen verkkoasetukseen
* **Parannettu:** Verkkotunnuksen toimintaloki DNS-muutoksille, siirroille ja määritysten käyttöönotolle
* **Parannettu:** Täysi TLD-synkronointi OpenSRS:lle IANA-päälistalla ja erävalidoinnilla
* **Parannettu:** Täysi TLD-synkronointi Namecheapille sivutetuilla API-pyynnöillä
* **Parannettu:** Vanhat palveluntarjoajaluokat korvattu Integration Registry -mallilla
* **Parannettu:** Asetuspaneeli DNS- ja siirtomäärityksillä
* **Parannettu:** Puhelinnumerot muotoillaan automaattisesti +CC.NNN-rekisteröijämuotoon
* **Parannettu:** Puhelinkentän validointi poistaa muotoilumerkit ennen lähettämistä
* **Parannettu:** Versiovaatimus nostettu Ultimate Multisite 2.4.12:een selkeämmällä ilmoituksella
* **Parannettu:** CI-työnkulku käyttää asianmukaista checkoutia sekä addonille että ydinosan pluginille
* **Parannettu:** prepare_registrant_info() lukee maksuvaiheessa tallennetuista käyttäjän metatiedoista ja käyttää laskutusosoitetta varavaihtoehtona
* **Korjattu:** Verkkotunnuksen haku-AJAX epäonnistui kirjautumattomilla käyttäjillä maksun aikana
* **Korjattu:** Verkkotunnuksen hinnoittelu-AJAX epäonnistui kirjautumattomilla käyttäjillä maksun aikana
* **Korjattu:** Spyc-luokan uudelleenmäärittelyn vakava virhe WP-CLI-komentoja suoritettaessa
* **Korjattu:** Namecheap sandbox API -aikakatkaisu oli liian lyhyt
* **Korjattu:** Verkkotunnuksen haun Valitse-painikkeen teksti ei näkynyt vihreällä taustalla
* **Korjattu:** Verkkotunnuksen rekisteröinti epäonnistui "RegistrantFirstName is Missing" -virheen vuoksi puuttuvien yhteystietojen takia
* **Korjattu:** Verkkotunnustietue luotiin arvolla blog_id=0, kun sivustoa ei vielä ollut olemassa maksun ajankohtana
* **Korjattu:** Oletus-TLD:iden asetus palautettiin merkkijonona jäsennetyn taulukon sijaan
* **Poistettu:** Erillinen verkkotunnusten hallinnan ylläpitosivu — käsitellään nyt ydintoimintojen verkkotunnussivujen kautta

Versio 1.0.0 - Julkaistu 2025-09-28

**Suuri uudelleenkirjoitus Ultimate Multisite v2:lle**

* **Uusi:** Täydellinen uudelleenkirjoitus modernilla PHP 7.4+ -arkkitehtuurilla
* **Uusi:** Saumaton integraatio Ultimate Multisite v2:n maksujärjestelmään
* **Uusi:** Verkkotunnustuotteiden hallinta joustavilla hinnoitteluvaihtoehdoilla
* **Uusi:** Useiden verkkotunnuspalveluntarjoajien tuen arkkitehtuuri
* **Uusi:** Automaattinen uusinta ja tilausintegraatio
* **Uusi:** Asiakkaan verkkotunnusten hallintakäyttöliittymä
* **Uusi:** Ylläpidon verkkotunnusten valvonta ja lokit
* **Uusi:** Kuponkituki verkkotunnustuotteille
* **Uusi:** Kattava asetusten hallinta
* **Uusi:** Kehittäjäystävällinen laajennettava koodikanta
* **Parannettu:** Päivitetty OpenSRS-palveluntarjoaja täydellä ominaisuustuella
* **Parannettu:** Moderni käyttöliittymä, joka on yhdenmukainen Ultimate Multisite v2:n kanssa
* **Korjattu:** Kaikki vanhentunut v1-koodi päivitetty v2-standardeihin
* **Poistettu:** Vanha v1-yhteensopivuus (rikkova muutos)

### Aiemmat versiot (v1 Legacy)

### Versio 0.0.3 - 20/08/2019

* Korjattu: Yhteensopimattomuus Groundhogg CRM:n kanssa
* Huomautus: Tämä oli viimeinen v1-yhteensopiva julkaisu

### Versio 0.0.2 - 07/12/2018

* Korjattu: License Key -kenttä poistettu
* Korjattu: Plan-välilehdet puuttuivat, kun ominaisuus-plugin on aktiivinen
* Parannettu: Rekisteröintikenttään lisätty ohituspainike

### Versio 0.0.1 - Ensimmäinen julkaisu

* OpenSRS-perusintegraatio WP Ultimo v1:lle
* Yksinkertainen verkkotunnuksen haku ja rekisteröinti
* Plan-pohjaiset verkkotunnusoikeudet
