---
title: Asetukset ja tarjoajan konfigurointi
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Asetus ja Tarjoajan Konfigurointi {#domain-seller-setup-and-provider-configuration}

Domain Seller -lisäosa tulee mukana ohjeistavalla asennusoppaalla, joka ohjaa sinua läpi jokaisen tarvittavan vaiheen. Tämä sivu käsittelee oppaan virtaa sekä sitä, miten voit konfiguroida tai uudelleenkonfiguroida tarjoajia sen jälkeen.

## Vaatimukset {#requirements}

- **Multisite Ultimate** v2.4.12 tai uudempi, verkkoaktivoitu
- **PHP** 7.4+
- API-tunnukset ainakin yhden tuettavan rekisteröijän (registrar) osalta

## Ensimmäinen asennusoppa {#first-run-setup-wizard}

Asennusoppa käynnistyy automaattisesti ensimmäisen kerran, kun aktivoit lisäosan verkossa. Se on myös saatavilla milloin tahansa **Network Admin › Ultimate Multisite › Domain Seller Setup** -osiosta.

### Vaihe 1 — Valitse tarjoaja {#step-1--choose-a-provider}

Valitse rekisteröijä, johon haluat yhdistää. Tuetut vaihtoehdot:

| Tarjoaja | DNS-hallinta | WHOIS-tietosuoja |
|---|---|---|
| OpenSRS | Kyllä | Kyllä |
| Namecheap | Ei | Kyllä (WhoisGuard, ilmainen) |
| HostAfrica | Kyllä | Kyllä (ID-suojaus) |
| Openprovider | Kyllä | Kyllä |
| Hostinger | Hostingerin ydinalueen kartoituksen kautta isännöityjen domainien osalta | Kyllä |
| GoDaddy | Ei | Ei |
| ResellerClub | Kyllä | Ei |
| NameSilo | Ei | Ei |
| Enom | Kyllä | Ei |

### Vaihe 2 — Syötä tunnukset {#step-2--enter-credentials}

Jokaisella tarjoajalla on erilaiset tunnuskentät:

**OpenSRS** — Käyttäjätunnus ja yksityinen avain (OpenSRS Reseller Control Panelista)

**Namecheap** — Käyttäjätunnus ja API-avain (Account › Tools › API Access -osiosta)

**HostAfrica** — Domainien resellerin API-päätepiste ja tunnukset HostAfrica reseller-moduulista. Erillistä sandbox-päätepistettä ei ole tällä hetkellä dokumentoitu; testaa turvallisilla luettavilla tarkistuksilla ennen live-rekisteröintien suorittamista.

**Openprovider** — Käyttäjätunnus ja salasana API-juuriin päällä. Valinnainen sandbox-tila käyttää Openprovider sandbox API:ta, ja valinnainen oletushahmo voidaan käyttää rekisteröinteihin.

**Hostinger** — Hostingerin jaettava hPanel API-token perusintegraatiosta. Sama token mahdollistaa päädomaainan mappauksen ja domainmyyjän rekisteröintitoiminnot.

**GoDaddy** — API-avain ja salaisuus (developer.godaddy.com:sta)

**ResellerClub** — Reseller-ID ja API-avain (ResellerClubin hallintapaneelista)

**NameSilo** — API-avain (namesilo.com › Account › API Manager)

**Enom** — Tunniste ja API-token

Tarkista saatavuudessa **Sandbox mode**, jotta voit testata palveluntarjoajan testiympäristössä ennen live-käyttöä.

### Vaihe 3 — Yhdistelmän testaus {#step-3--test-the-connection}

Napsauta **Test Connection**. Ohjelma lähettää kevyen API-kutsun varmistaakseen tunnukset ja yhteys. Korjaa mahdolliset tunnistetiedot ongelmat ennen jatkamista.

### Vaihe 4 — TLD:iden tuonti {#step-4--import-tlds}

Napsauta **Import TLDs** (Tuonti TLD:t) hakeaksesi kaikki saatavilla olevat TLD:t ja tukkuhintojen yhdistetyn palveluntarjoajan kautta. Tämä täyttää domain-tuotteissa käytettävän TLD-listan. Tuonnilla voi kestää 30–60 sekuntia suurilla TLD-katalogeilla oleville palveluntarjoajille.

TLD:t synkronoidaan myös automaattisesti kerran päivässä aikataulutetun cron-työn avulla.

### Vaihe 5 — Domain-tuotteen luominen {#step-5--create-a-domain-product}

Ohjelma luo oletusvaihtoehtoisen domain-tuotteen, jossa on 10 % lisäarvo (markup). Voit muokata tätä tuotetta heti tai ohittaa vaiheen ja luoda tuotteita manuaalisesti **Ultimate Multisite › Products** -osiossa.

Katso [Domain Products and Pricing](./domain-products) saadaksesi täydellisen tuoteasetusten ohjeen.

---

## Palveluntarjoajan uudelleenkonfigurointi {#reconfiguring-a-provider}

Siirry kohtaan **Network Admin › Ultimate Multisite › Settings › Domain Seller** (tai napsauta **Settings** -painiketta plugin-listalta).

Asetussivulla on:

- **Enable domain selling** — kytke koko ominaisuuden päälle/pois
- **Default provider** — se toimittaja, jota käytetään verkkotunnusten hakuun ja uusien tuotteiden luomiseen
- **Max TLDs per search** — kuinka monta TLD:tä tarkistetaan, kun asiakas etsii; korkeammat arvot näyttävät enemmän vaihtoehtoja mutta ovat hitaampia
- **Availability cache duration** — kuinka kauan saatavuus- ja hinnoittelutuloksia tallennetaan; pienemmät arvot ovat tarkempia, mutta lisää API-kutsuja
- **Manage domain products** — nopea linkki tuotteiden listaan
- **Configure providers** — avaa Integraatiomestarin (Integration Wizard) lisättäksesi tai konfiguroidaksesi toimittajia uudelleen

### Toisen toimittajan lisääminen {#adding-a-second-provider}

Napsauta **Configure providers** ja suorita ohjelma uudelleen uutta rekisteriä varten. Voit konfiguroida useita toimittajia samanaikaisesti. Vaikka jokainen verkkotunnus tuote (domain product) määritetään tiettyyn toimittajaan, voit jättää sen oletukseksi.

### TLD:iden synkronointi manuaalisesti {#syncing-tlds-manually}

Asetusten sivulla napsauta **Sync TLDs** -painiketta konfiguroitujen toimittajien vieressä hakeaksesi uusimmat hinnat. Tämä on hyödyllistä, kun toimittaja päivittää tukkuhintoja tai lisää uusia TLD:itä.

---

## Logs (Tiedot) {#logs}

Jokainen toimittaja kirjoittaa omiin log-kanavoiinsa. Logit näkyvät **Network Admin › Ultimate Multisite › Logs** -osiossa:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | Kaikki rekisteröintyhtelyyritykset (onnistuneet ja epäonnistuneet) |
| `domain-seller-renewal` | Uudelleenkäsittelyn tulokset |
| `domain-seller-opensrs` | Rahoitus OpenSRS API -toiminta raaka-aineena |
| `domain-seller-namecheap` | Rahoitus Namecheap API -toiminta raaka-aineena |
| `domain-seller-hostafrica` | Rahoitus HostAfrica API -toiminta raaka-aineena |
| `domain-seller-openprovider` | Rahoitus Openprovider API -toiminta raaka-aineena |
| `domain-seller-hostinger` | Rahoitus Hostinger API -toiminta raaka-aineena |
| `domain-seller-godaddy` | Rahoitus GoDaddy API -toiminta raaka-aineena |
| `domain-seller-resellerclub` | Rahoitus ResellerClub API -toiminta raaka-aineena |
| `domain-seller-namesilo` | Rahoitus NameSilo API -toiminta raaka-aineena |
| `domain-seller-enom` | Rahoitus Enom API -toiminta raaka-aineena |

---

## Tarjoajan ominaisuuksien huomiot {#provider-capability-notes}

Ei jokainen rekisteröijayhtiön API paljasta samoja toimintoja. Addon näyttää tuetuttamattomat toiminnot selkeillä ylläpitäjän näkyvillä virheillä sen sijaan, että ne epäonnistuisi hiljaa.

- **HostAfrica** tukee laajempaa reaaliaikaista jälleenmyyjätyyppistä työnkulkuja, mukaan lukien haku, TLD/hinnan synkronointi, rekisteröinti, uusiminen, siirto, nameserver-päivitykset, DNS-rekisterit, EPP-koodit, rekisterin lukitus ja ID-suojaus.
- **Openprovider** tukee jälleenmyyjärahastettua TLD-synkronointia, rekisteröintiä, uusimista, siirtoja, nameserver-päivityksiä, DNS-alueita, EPP-koodeja, rekisterin lukitusta ja WHOIS-tietosuojaa. Se vahvista yhteyden lyhytaikaisella bearer tokenilla, jota addon päivittää automaattisesti.
- **Hostinger** tukee saatavuusetsintää, rekisteröintiä, portfolion hakua, nameserver-päivityksiä, rekisterin lukitusta ja WHOIS-tietosuojaa yhteisen hPanel API -tokenin kautta. Hostingerin julkisen Domainien API:n ei paljasta jälleenmyyjä-/whaletarvitteluja, sisäänpääsyvaihteluita, nimenomaista uusimista tai EPP-koodien hakemista; uusiminen on vain automaattisesti uusittavaa.
