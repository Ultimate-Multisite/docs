---
title: Gratis AI Agent -asetukset
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent -asetukset

**Asetukset → Lisäasetukset** -näkymä Gratis AI Agentissa tarjoaa ylläpitäjätason määritykset backend-integraatioille. Tämä sivu dokumentoi palautteen välittämisen, hakupalveluntarjoajan avaimet, hallinnoidun Superdav-palvelun käyttöönoton, Google Calendar -hallinnat, TextBee SMS -asetukset ja verkonlaajuiset ominaisuusliput.

## Asetuksiin pääsy {#accessing-settings}

1. Siirry WordPress-ylläpidossa kohtaan **Gratis AI Agent → Asetukset**.
2. Napsauta **Lisäasetukset**-välilehteä.

## Palautteen päätepisteen määritys {#feedback-endpoint-configuration}

Palautteen päätepiste vastaanottaa POST-pyyntöjä AI-agentilta aina, kun käyttäjä lähettää palautetta peukku alas -painikkeen, automaattisen kehotebannerin tai `/report-issue`-komennon kautta.

| Kenttä | Kuvaus |
|---|---|
| **Palautteen päätepisteen URL** | URL, joka vastaanottaa palautelähetykset HTTP POST -pyyntöinä JSON-rungolla. |
| **Feedback API Key** | bearer token, joka lähetetään kunkin palautepyynnön `Authorization` headerissa. Jätä tyhjäksi, jos päätepisteesi ei vaadi todennusta. |

### Odotettu JSON-hyötykuorma {#expected-json-payload}

Palautteen päätepisteesi on hyväksyttävä JSON-runko, jossa on vähintään seuraavat kentät:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Hyötykuormassa voi olla lisäkenttiä keskustelun kontekstin mukaan.

### `triage_category`-arvot {#triagecategory-values}

AI-luokittelukerros määrittää yhden seuraavista arvoista kenttään `triage_category` ennen hyötykuorman välittämistä:

| Arvo | Merkitys |
|---|---|
| `factual_error` | Avustaja antoi virheellistä faktatietoa. |
| `unhelpful_answer` | Vastaus oli teknisesti oikein mutta ei hyödyllinen. |
| `inappropriate_content` | Vastaus sisälsi sisältöä, jota ei pitäisi näyttää käyttäjille. |
| `other` | Palaute ei vastannut tunnettua kategoriaa. |

### Todennus {#authentication}

Jos päätepisteesi vaatii todennusta, aseta **Feedback API Key** -kenttään bearer tokenisi. Agentti lähettää:

```
Authorization: Bearer <your-api-key>
```

Jos **Feedback API Key** -kenttä on tyhjä, `Authorization` headeria ei lähetetä.

### Palautteen keräämisen poistaminen käytöstä {#disabling-feedback-collection}

Jätä sekä **Palautteen päätepisteen URL**- että **Feedback API Key** -kentät tyhjiksi. Peukku alas -painike ja palautteen käyttöliittymä pysyvät käyttäjille näkyvissä, mutta lähetyksiä ei välitetä mihinkään ulkoiseen palveluun.

## Brave Search API Key {#brave-search-api-key}

Myös **Lisäasetukset**-välilehdellä oleva **Brave Search API Key** -kenttä ottaa käyttöön [Internet-haun](../configuration/internet-search) ominaisuuden.

| Kenttä | Kuvaus |
|---|---|
| **Brave Search API Key** | API-avaimesi Brave Searchin kehittäjien Dashboardista. Vaaditaan internet-haun käyttöönottamiseksi AI-avustajassa. |

Kentän otsikko sisältää napsautettavan linkin Brave Search API -rekisteröitymissivulle. Jätä tyhjäksi poistaaksesi internet-haun käytöstä.

Katso tämän ominaisuuden loppukäyttäjädokumentaatio kohdasta [Internet-haku](../configuration/internet-search).

## Hallinnoitu Superdav-palvelu {#managed-superdav-service}

Superdav AI Agent v1.18.0 lisää hallinnoidut Superdav-palvelun päätepisteet ja automaattisen yhteyden käyttöönoton tuetuille sivustoille. Käytä näitä hallintoja, kun sivustosi pitäisi yhdistää isännöityyn palveluntarjoajaan manuaalisesti määritetyn palvelupäätepisteen sijaan.

| Kenttä | Kuvaus |
|---|---|
| **Hallinnoitu Superdav-palvelu** | Ottaa käyttöön isännöidyn Superdav-palveluyhteyden tuetuille sivustoille. |
| **Yhteyden käyttöönotto** | Käynnistää automaattisen päätepisteen ja tunnistetietojen käyttöönoton. Käytä tätä sen jälkeen, kun olet vahvistanut, että sivuston tulee käyttää hallinnoitua palveluntarjoajaa. |
| **Palvelun päätepiste / yhteyden tila** | Näyttää nykyisen päätepisteen tai yhteyden tilan käyttöönoton jälkeen. |

Tallenna asetukset käyttöönoton jälkeen ja varmista yhteyden tila ennen kuin luotat hallinnoidun palvelun työnkulkuihin. Jos käyttöönotto epäonnistuu, tarkista näkyvissä olevat uudelleenyritysohjeet ja varmista, että sivustolla on lupa käyttää isännöityä palveluntarjoajaa.

## Google Calendar -määritys {#google-calendar-configuration}

Kun Superdav AI Agent v1.18.0:n kalenteriominaisuudet ovat käytössä, agentti voi lukea määritettyjä kalentereita ja tapahtumatietoja. Kalenterityökalut ovat lukupainotteisia ja hyödyllisiä aikataulutietoisille muistutuksille, osallistujien seurannalle ja kontaktien täsmäytykselle.

| Kenttä | Kuvaus |
|---|---|
| **Google Calendar -tunnistetiedot** | Tallentaa kalenteridatan lukemiseen vaadittavat tunnistetiedot tai token-yhteyden. |
| **Kalenterin valinta** | Rajoittaa, mitä määritettyjä kalentereita agentti saa tarkastella. |
| **Kalenteriyhteyden tila** | Vahvistaa, voivatko nykyiset tunnistetiedot lukea kalentereita ja tapahtumia. |

Pidä kalenterin tunnistetiedot rajattuina kalentereihin, joita agentti tarvitsee. Yhdistä uudelleen tai kierrätä tunnistetiedot, jos tila osoittaa vanhentuneen tokenin.

## TextBee SMS -ilmoitukset {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 lisää TextBeen SMS-palveluntarjoajaksi määritetyille ilmoitustyönkuluille. SMS-ilmoitukset tulisi yhdistää ihmisen hyväksyntäportteihin arkaluonteisissa tai käyttäjille näkyvissä viesteissä.

| Kenttä | Kuvaus |
|---|---|
| **TextBee API -avain** | Todentaa pyynnöt TextBee SMS -palveluntarjoajalle. |
| **TextBee-laite / lähettäjä** | Valitsee lähteville viesteille käytettävän TextBee-lähettäjän tai -laitteen, kun palveluntarjoaja sitä vaatii. |
| **SMS-ilmoitukset käytössä** | Sallii hyväksyttyjen työnkulkujen lähettää tekstiviesti-ilmoituksia. Jätä pois käytöstä estääksesi SMS-lähetykset. |

Lähetä testiviesti vain ylläpitäjän omistamaan numeroon ja vahvista sitten hyväksyntäportin toiminta ennen ajoitettujen tai osallistujille näkyvien muistutusten käyttöönottoa.

## Ominaisuusliput {#feature-flags}

Myös versiossa v1.9.0 esitelty **Asetukset → Ominaisuusliput** -välilehti tarjoaa vaihtokytkimet valinnaisille toiminnoille. Kukin lippu on joko käytössä tai pois käytöstä verkonlaajuisesti; sivustokohtaista ohitusta ei tällä hetkellä ole.

### Ominaisuuslippuihin pääsy {#accessing-feature-flags}

1. Siirry WordPress-ylläpidossa kohtaan **Gratis AI Agent → Asetukset**.
2. Napsauta **Ominaisuusliput**-välilehteä.

### Käyttöoikeuksien hallintaliput {#access-control-flags}

| Lippu | Oletus | Kuvaus |
|---|---|---|
| **Rajoita järjestelmänvalvojiin** | Pois | Kun käytössä, vain käyttäjät, joilla on `administrator`-rooli, voivat avata AI Agent -chat-paneelin. Kaikki muut roolit näkevät sen sijaan viestin "Ota yhteyttä järjestelmänvalvojaasi". |
| **Rajoita Network Admins -käyttäjiin** | Pois | Kun käytössä multisite-verkossa, vain Super Admins voivat käyttää agenttia. Yksittäisten sivustojen järjestelmänvalvojat estetään. Tämä ohittaa "Rajoita järjestelmänvalvojiin" -asetuksen, jos molemmat ovat käytössä. |
| **Salli Subscriber-käyttö** | Pois | Kun käytössä, käyttäjät, joilla on `subscriber`-rooli, voivat käyttää chat-käyttöliittymää, mutta heidät on rajoitettu vain luku -ominaisuuksiin (ei julkaisujen luontia tai asetusten muutoksia). |
| **Poista käytöstä muilta kuin jäseniltä** | Pois | Integroituu Ultimate Multisite -jäsenyyden tilaan. Kun käytössä, chat piilotetaan sivustoilta, joilla ei ole aktiivista jäsenyyttä. |

### Brändäysliput {#branding-flags}

| Lippu | Oletus | Kuvaus |
|---|---|---|
| **Piilota "Powered by Gratis AI Agent" -alatunniste** | Pois | Poistaa chat-widgetin alareunassa näytettävän brändäyksen viittausrivin. Suositellaan white-label-käyttöönottoihin. |
| **Mukautettu agentin nimi** | *(tyhjä)* | Korvaa chat-otsikon ja admin-valikon oletusarvoisen "Gratis AI Agent" -nimikkeen omalla tuotenimelläsi. Jätä tyhjäksi käyttääksesi oletusta. |
| **Piilota agentin valitsin** | Pois | Kun käytössä, käyttäjät eivät voi vaihtaa viiden sisäänrakennetun agentin välillä. Nykyinen agentti on kiinnitetty siihen, mikä on määritetty oletukseksi kohdassa Settings → General. |
| **Käytä sivuston kuvaketta chat-avatarina** | Pois | Korvaa chat-widgetin otsikon oletusarvoisen AI-kuvakkeen WordPress-sivuston kuvakkeella (asetetaan kohdassa Appearance → Customize → Site Identity). |

### Automaation turvallisuusliput {#automation-safety-flags}

Superdav AI Agent v1.18.0 tuo käyttöön ihmisen hyväksyntäportit ja muistutustietueet turvallisempia automaation suorituksia varten. Nämä hallinnat voivat näkyä ominaisuuslipuissa tai automaation lisäasetuksissa asennetusta paketista riippuen.

| Lippu | Oletus | Kuvaus |
|---|---|---|
| **Vaadi ihmisen hyväksyntä** | Suositellaan käytettäväksi | Keskeyttää arkaluonteiset automaatiot, kunnes valtuutettu käyttäjä tarkistaa ja vahvistaa ehdotetun toiminnon. |
| **Muistutusten deduplikointi** | Päällä | Tallentaa lähetetyt muistutukset, jotta uudelleenyritykset tai ajastetut suoritukset eivät lähetä päällekkäisiä ilmoituksia. |
| **Ota käyttöön kalenterityökalut** | Pois, kunnes määritetty | Sallii agentin lukea määritettyjä Google-kalentereita ja tapahtumia. |
| **Ota käyttöön SMS-ilmoitukset** | Pois, kunnes määritetty | Sallii hyväksyttyjen työnkulkujen lähettää TextBee SMS -ilmoituksia tunnistetietojen tallentamisen jälkeen. |

### Muutosten käyttöönotto {#applying-changes}

Napsauta **Tallenna asetukset** minkä tahansa lipun vaihtamisen jälkeen. Muutokset tulevat voimaan välittömästi — välimuistin tyhjennystä tai pluginin uudelleenaktivointia ei tarvita.
