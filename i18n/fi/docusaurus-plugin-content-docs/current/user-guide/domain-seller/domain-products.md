---
title: Verkkotunnukset ja hinnat
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Verkkotunnus-tuotteet ja hinnoittelu {#domain-products-and-pricing}

Verkkotunnus-tuotteet ovat tapa hallita hinnoittelua, TLD:itä (top-level domains), WHOIS-tietosuojaa ja palveluntarjoajien valintaa. Jokainen verkkotunnus-tuote on perus Multisite Ultimate -tuote, jolle lisätään erillinen **Domain Settings** -välilehti.

## Verkkotunnus-tuotteen luominen {#creating-a-domain-product}

1. Mene kohtaan **Network Admin › Ultimate Multisite › Products**.
2. Napsauta **Add New** (Lisää uusi).
3. Aseta tuotetyyppi **Domain** (Verkkotunnus).
4. Konfiguroi **Domain Settings** -välilehti (katso alla).
5. Tallenna.

Verkkotunnus-tuotteet näkyvät tuotelistalla purppuranvärisellä **Domain**-merkinnällä ja niitä voi suodattaa käyttämällä **Domain Products** -välilehteä.

## Domain Settings -välilehti {#domain-settings-tab}

### Tarjoaja (Provider) {#provider}

Valitse, mikä rekisteri hoitaa tämän tuotteen rekisteröinnin. Oletusarvo on globaali **Default provider** (oletustarjoaja), joka on asetettu Domain Seller -asetuksissa.

### Tuetut TLD:t (Supported TLDs) {#supported-tlds}

Jätä tyhjä, jos haluat luoda **catch-all product** (kaikkia kattavia tuotteita), joka koskee kaikkia TLD:itä, joita ei vastaa muu tuote.

Syötä pilkkelistettuna listan TLD:itä (esim. `.com, .net, .org`) luodaksesi **TLD-specific product** (TLD:iin liittyvän tuotteen), joka koskee vain niitä pääteosia.

**Miten tuotteiden vastaavuus toimii:** Kun asiakas etsii verkkotunnusta, lisäosa valitsee tarkimman vastaavan tuotteen. Tuote, jolla on `.com` TLD-listassaan, saa ensisijaisen oikeuden verrattuna yleiseen catch-all-tuotteeseen. Jos ei löydy TLD:iin liittyvää tuotetta, käytetään yleistä tuotetta. Jos tuotteita ei ole olemassa, verkkotunnusetsintä ei näytetä.

### Marginaalityyppi (Markup type) {#markup-type}

Kolme tilaa ohjaavat sitä, miten vähittäishinta lasketaan myyntihinnan ja tukkohinnan perusteella:

| Tila | Miten se toimii |
|---|---|
| **Percentage** (Prosentuaalinen) | Lisää prosenttiosuuden tukkohintaan. 20 % lisäys $10 tukkohintaiselle verkkotunnukselle antaa $12. |
| **Fixed markup** (Kiinteä marginaali) | Lisää kiinteän dollarimäärän. $5 marginaalin lisääminen $10 verkkotunnukseen antaa $15. |
| **Fixed price** (Kiinteä hinta) | Ohittaa kokonaan tukkohinnan. Laskee aina syöttämäsi summan. |

### Esittelyhinnoittelu (Introductory pricing) {#introductory-pricing}

### Alennus tarjonta alennuksella ensimmäisen vuoden hinnalla. Aseta erillinen **Aloitushinta** (vuoden 1 hinta) rinnakkain säännölliseen **Uudelleenmääräyshintaan** (vuosi 2+) nähden. Asiakas näkee molemmat hinnat kassalla, jotta hän tietää, mitä odottaa uudelleenkäsittelyssä. {#whois-privacy}

### WHOIS-tietosuoja {#tld-import-and-sync}

Ohjaa sitä, tarjotaanko WHOIS-tietosuojaa hallitsemille domaineille tällä tuotteella rekisteröityille domaineille.

| Asetus | Käyttäytyminen |
|---|---|
| **Poistettu käytöstä** | WHOIS-tietosuojaa ei tarjota tai aktivoitu. |
| **Aina sisältyvä** | WHOIS-tietosuoja on aktivoitu automaattisesti rekisteröinnin yhteydessä ilman maksua. |
| **Asiakkaan valinta** | Kassalla ilmestyy valintaruutu. Aseta **Tietosuoja hinta** maksamaan vuodessa, tai jätä se $0:ksi tarjotaan ilmaiseksi. |

Namecheapin kohdalla WHOIS-tietosuoja käyttää WhoisGuardia (aina ilmainen). OpenSRS käyttää OpenSRS-tietosuoja-palvelua (voi olla kustannuksia tukkuhinnassa).

---

## TLD:n tuonti ja synkronointi {#auto-renewal}

Domain-tuotteet näyttävät reaaliaikaisen tukkuhinnan, joka haetaan yhdistetystä toimittajasta. Jotta tämä toimisi, TLD:t on tuotettava sisään.

- **Manuaalinen synkronointi:** Asetukset › Domain Seller › Sync TLDs (toimittajan mukaan)
- **Automaattinen synkronointi:** Suoritetaan päivittäin aikataulutetun cron-työn avulla kaikilla konfiguroiduilla toimittajilla.

Synkronoinnin jälkeen siirry minkä tahansa domain-tuotteen Domain Settings -välilehteen ja käytä TLD-valitsinta nähdä saatavilla olevat TLD:t niiden nykyisillä tukkuhinnoillaan.

---

## Automaattinen uusiminen {#admin-manual-domain-registration}

Domain-uudelleenmääräykset on sidottu asiakkaan jäsenyyden tilaan:

- Kun jäsenyys uusitaan ja domain liitetään, domain-uudelleenmääräys asetetaan automaattisesti jonoon.
- Uudelleenmääräysyritykset käyttävät asiakkaan aktiivista maksukonetta.
- Epäonnistuneet uudelleenmääräykset yritetään uudelleen automaattisesti eksponentiaalisella takaisinkytkennällä (exponential backoff).
- Sähköpostitiedotteita lähetetään onnistuneiden uusimisten, epäonnistumisten ja tulevien vanhentumisten yhteydessä.

Sähköpostimalleja domainin elinkaaren tapahtumille:

| Tapahtuma | Mallin ID |
|---|---|
| Alue rekisteröity | `domain_registered` |
| Alue uusittu | `domain_renewed` |
| Uudistus epäonnistui | `domain_renewal_failed` |
| Alue lähestyy vanhentumista | `domain_expiring_soon` |

---

## Ylläpito: Manuaalinen alueen rekisteröinti

Rekisteröidä aluetta asiakkaan puolesta ilman, että hän suorittaa kassalla ostosta:

1. Mene **Network Admin › Ultimate Multisite › Register Domain** -sivulle
2. Valitse asiakas ja syötä alan nimi
3. Täytä rekisteröidyn yhteystietojen tiedot (nimi, osoite, puhelinnumero)
4. Klikkaa **Register**

Alueen rekisterimerkintä luodaan ja liitetään asiakkaan tiliin.
