---
title: Ilmaiset tekoälyagentin asetukset
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Ilmaiset AI Agent -asetukset

**Asetukset → Edistyneet (Settings → Advanced)** -sivu Gratis AI Agentissa tarjoaa ylläpitotason konfiguraation taustajärjestelmäintegraatioille, jotka on lisätty versio 1.5.0:ssa. Tällä sivulla dokumentoidaan **Palautepäätepisteen (Feedback Endpoint)** kentät ja niiden odotettu muoto.

## Asetusten avaaminen

1. WordPress-hallintapaneelissa siirry kohtaan **Gratis AI Agent → Asetukset**.
2. Napsauta välilehteä **Edistyneet (Advanced)**.

## Palautepäätepisteen konfigurointi

Palautepäätepiste vastaanottaa POST-pyyntöjä AI-agentilta aina, kun käyttäjä lähettää palautetta peukalo alaspäin -painikkeella, automaattisella kehotteella tai `/report-issue`-komennolla.

| Kenttä | Kuvaus |
|---|---|
| **Feedback Endpoint URL** | URL, joka vastaanottaa palautteen POST-pyyntöinä JSON-runon (body) mukana. |
| **Feedback API Key** | Bearer-token, joka lähetetään jokaisen palautepyyntöön `Authorization`-otsikossa. Jätä tyhjäksi, jos päätepisteesi ei vaadi tunnistautumista. |

### Odotettu JSON-kuorma (Payload)

Palautepäätepisteen on hyväksyttävä JSON-runko, jossa on vähintään seuraavat kentät:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Vastaus oli virheellinen hinnoittelun osalta.",
  "triage_category": "factual_error"
}
```

Lisäkenttiä voi olla kuormassa riippuen keskustelun kontekstista.

### `triage_category` -arvot

AI-triage-kerros määrittää seuraavista arvoista kentälle `triage_category` ennen kuorman lähetystä:

| Arvo | Merkitys |
|---|---|
| `factual_error` | Avustaja antoi virheellistä fakto- tai tietoa. |
| `unhelpful_answer` | Vastaus oli teknisesti oikein, mutta ei hyödyllinen. |
| `inappropriate_content` | Vastauksessa oli sisältöä, jota ei tulisi näyttää käyttäjille. |
| `other` | Palautteen ei vastaa tunnettua kategoriaa. |

### Tunnistautuminen (Authentication)

Jos päätepiste vaatii tunnistautumista, aseta **Feedback API Key** -kenttä bearer-tokenisi arvoksi. Agenti viestii:

```
Authorization: Bearer <your-api-key>
```

Jos **Feedback API Key** -kenttä on tyhjä, `Authorization`-otsikkoa ei lähetetä.

### Feedback-keruun poistaminen käytöstä

Jätä sekä **Feedback Endpoint URL** että **Feedback API Key** -kentät tyhjäksi. Peukalo alaspäin -painike ja palautelomake pysyvät näkyvissä käyttäjille, mutta lähetyksiä ei lähetetä ulkoiseen palveluun.

## Brave Search API Key

Samoin **Advanced**-välilehdellä **Brave Search API Key** -kenttä mahdollistaa [Internet Search](https://yourdomain.com/configuration/internet-search) -ominaisuuden käytön.

| Kenttä | Kuvaus |
|---|---|
| **Brave Search API Key** | API-avaimesi Brave Searchin kehittäjäportaalista. Tarvitaan internet-haun aktivoimiseksi tekoälyassistentissa. |

Kentän tunniste sisältää klikattavan linkin Brave Search -API:n rekisteröintisivulle. Jätä tyhjäksi poistaaksesi internet-haku.

Katso [Internet Search](https://yourdomain.com/configuration/internet-search) saadaksesi käyttäjädokumentaation tästä ominaisuudesta.

## Feature Flags (Ominaisasetukset)

Lisäksi v1.9.0:ssa esitetyt **Settings → Feature Flags** -välilehti tarjoaa kytkinvaihtoehtoja valinnaisille toiminnallisuuksille. Jokainen flag on joko käytössä tai poistettu verkossa; tällä hetkellä ei ole mahdollisuutta ylittää tätä asetusta yksittäiselle sivustolle.

### Feature Flags -asetusten avaaminen

1. WordPress-hallintapaneelissa siirry **Gratis AI Agent → Settings** -osioon.
2. Napsauta **Feature Flags** -välilehteä.

### Access Control Flags (Pääsynhallinta-asetukset)

| Lippu | Oletusarvo | Kuvaus |
|---|---|---|
| **Rajoita ylläpitäjiin** | Pois päältä | Kun tämä on päällä, vain `administrator`-rooleilla olevat käyttäjät voivat avata AI Agent -chat-paneelin. Muut roolit näkevät "Ota yhteyttä ylläpitäjänne" -viestin. |
| **Rajoita verkkoystävällisiin ylläpitäjiin** | Pois päältä | Kun tämä on päällä multisite-verkossa, vain Super Adminit voivat käyttää agenttia. Yksittäisten sivustojen ylläpitäjät ovat estetty. Tämä ohittaa "Rajoita ylläpitäjiin" -asetuksen, jos molemmat ovat päällä. |
| **Salli tilaajien käyttö** | Pois päältä | Kun tämä on päällä, `subscriber`-rooleilla olevat käyttäjät voivat käyttää chat-käyttöliittymää, mutta heidän toimintansa on rajoitettu vain lukemiseen (ei postien luomista tai asetusten muuttamista). |
| **Poista pois jäsenettömillä** | Pois päältä | Integroidaan Ultimate Multisite -jäsenyyden tilan kanssa. Kun tämä on päällä, chat piilotetaan sivustoille, joilla ei ole aktiivista jäsenyyttä. |

### Brändäysvalit

| Lippu | Oletusarvo | Kuvaus |
|---|---|---|
| **Piilota "Powered by Gratis AI Agent" -alatunniste** | Pois päältä | Poistaa brändäyksen viivan, joka näkyy chat-widgetin alalaidassa. Suositeltavaa valkoisille merkinnöille (white-label) käyttötarkoituksiin. |
| **Mukautettu agentin nimi** | *(tyhjä)* | Korvaa oletusmerkintä "Gratis AI Agent" chat-otsikossa ja ylläpitomenuussa omalla tuotenimelläsi. Jätä tyhjä, jos haluat käyttää oletusta. |
| **Piilota agentin valitsin** | Pois päältä | Kun tämä on päällä, käyttäjät eivät voi vaihtaa neljän sisäänrakennetun agentin välillä. Nykyinen agentti pysyy samana kuin se on määritetty oletusarvoon Asetukset → Yleiset (Settings → General). |
| **Käytä sivuston kuvaketta chat-avatarina** | Pois päältä | Korvaa chat-widgetin otsikon oletus-AI-kuvakkeen WordPress-sivuston kuvakkeella (asetettu ulkoasu → Mukauta → Sivuston identiteetti). |

### Muutosten soveltaminen

Napsauta **Tallenna asetukset** sen jälkeen, kun olet vaihtanut mitä tahansa lippua. Muutokset tulevat voimaan välittömästi – ei tarvita välimuistin tyhjentämistä tai pluginin uudelleenkäynnistämistä.
