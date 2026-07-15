---
title: Kassakenttä ja asiakkaan DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Kassapisteen ja asiakkaan DNS-hallinta

## Verkkotunnuksen valintakenttä checkoutissa {#the-domain-selection-checkout-field}

**Domain Selection** -kenttä on kassalla oleva elementti, joka antaa asiakkaille valinnan siitä, miten he saavat sivustonsa verkkotunnuksen. Lisää se mihin tahansa kassaportaaliin mahdollisten domainien myynnin aktivoimiseksi.

### Kentän lisääminen kassaportaaliin {#adding-the-field-to-a-checkout-form}

1. Mene kohtaan **Network Admin › Ultimate Multisite › Checkout Forms**
2. Avaa tai luo kassaportaali
3. Kassaportaalin muokkaustilassa napsauta **Add Field** (Lisää kenttä)
4. Valitse listalta **Domain Selection**
5. Konfiguroi kentän vaihtoehdot (katso alla)
6. Tallenna lomake

### Kentän vaihtoehdot {#field-options}

**Domain modes** — Valitse, mitä välilehtiä asiakas näkee. Jokainen tila voidaan aktivoida tai poistaa käytöstä itsenäisesti:

| Tila | Mitä se tekee |
|---|---|
| **Subdomain** | Asiakas käyttää ilmaista aladomeenia verkostossasi (esim. `mysite.yournetwork.com`). Maksua ei tarvita. |
| **Register New Domain** | Asiakas etsii uutta domainia ja rekisteröi sen konfiguroitua toimittajaa kautta. Käyttää vastaavaa tuotetta hinnoittelun perusteella. |
| **Existing Domain** | Asiakas yhdistää omistamansa domainin. Rekisteröintimaksua ei ole. Domain liitetään automaattisesti sivustoon. |

**Default mode** — Kun kaikki kolme tilaa on käytössä, mikä välilehti avautuu ensin. Aseta **Subdomain**, jos haluat pitää domainit rekisteröinnin valinnaisena, tai **Register New Domain**, jos haluat kannustaa ostoksi.

**Domain product** — Voit valita tälle kentälle mahdollisesti tietyn domainituotteen. Jos sitä ei ole asetettu, lisäosa valitsee automaattisesti vastaavan tuotteen asiakkaan etsimän TLD:n perusteella.

### Rekisteroijan yhteystiedot {#registrant-contact-fields}

Kun asiakas valitsee **Register New Domain** -välilehden, kassaportaali lisää rekisteroijan yhteystietokentät suoraan lomakkeeseen:

- Etunimi / Sukunimi
- Sähköpostiosoite
- Osoite (rivi 1, kaupunki, maakunta/provinssi, postinumero, maa)
- Puhelinnumero

Nämä ovat pakollisia kaikille rekisteroijille ja validoidaan ennen kuin rekisteröintia API-kutsu suoritetaan. Puhelinnumerot muotoillaan automaattisesti rekisteroijien odottamaan kansainväliseen `+CC.NNN`-muotoon.

### Automaattisesti luotu sivuston URL-osoite {#auto-generated-site-url}

Kun asiakas rekisteröityy tai kartoittaa nimen, sivuston URL-kenttä täytetään automaattisesti valitun domeenin perusteella. Asiakkaan ei tarvitse täyttää erillistä URL-kenttää.

### Haku käyttäytyminen {#search-behaviour}

- Domeenin saatavuus tarkistetaan reaaliajassa AJAXin avulla, kun asiakas kirjoittaa
- Vaihtoehtoisia TLD-ehdotuksia näytetään, jos suosittu domeeni ei ole saatavilla
- Hinnat haetaan suoraan ja näytetään selkeästi (rekisteröintihinta, uusimishinta, valinnainen WHOIS-tietosuuskulut)
- Alennuskoodit soveltuvat domeenituotteisiin samalla tavalla kuin mihin tahansa muuhun tuotteeseen

**Hakutoiminnon hienosäätö:**

```php
// Lisää viive (millisekunteina) debounce-ajastimeen API-kutsujen vähentämiseksi hitailla yhteyksillä
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // oletus: 500
});
```

**Mukautettujen kenttien lisääminen domeenin hakulomakkeeseen:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Lisähuomiot',
    ];
    return $fields;
});
```

---

## Asiakkaan DNS-hallinta {#customer-dns-management}

Asiakkaat voivat hallita DNS-rekistereitä rekisteröityjilleen domeeneille **Oma tili** -sivulta, domeenin sisäänkirjoituksen alla.

### Tuetut rekisterityyppiset {#supported-record-types}

| Tyyppi | Käyttötarkoitus |
|---|---|
| **A** | Karttaa isäntänimen IPv4-osoitteeseen |
| **AAAA** | Karttaa isäntänimen IPv6-osoitteeseen |
| **CNAME** | Luo aliasin toiseen isäntänimeen osoittamiseksi |
| **MX** | Aseta sähköpostipalvelinpalvelin |
| **TXT** | Lisää SPF-, DMARC- tai muita tekstirekistereitä |

### Mitkä palveluntarjoajat tukevat DNS-hallintaa? {#which-providers-support-dns-management}

DNS-hallinta (rekisteröinti, muokkaus, poisto) on saatavilla **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** ja **Openprovider** -palveluissa. **Hostinger** -domeeneihin voi päivittää nameservereiden kautta Domain Sellerin avulla; isännöityjen domeeneihin liittyvät DNS-rekisterit hallitaan Hostingerin ydintä sisältävän domeenimappauksen (domain-mapping) integraation avulla. Namecheap-, GoDaddy- ja NameSilo-domeeneissa näkyy tila- ja vanhentumistiedot, mutta DNS:n on hallittava suoraan rekisteröijän hallintapaneelista.

### Oletus-DNS-rekisterit {#default-dns-records}

Voit määrittää oletus-DNS-rekistereitä, jotka asetetaan automaattisesti, kun domeeni rekisteröidään. Mene kohtaan **Settings › Domain Seller › Default DNS Records**.

Oletusarvojen tukee kaksi tokenia:

| Token | Korvataan |
|---|---|
| `{DOMAIN}` | Rekisteröityn domeenin nimi (esim. `example.com`) |
| `{SITE_URL}` | WordPress-sivuston URL asiakkaan sivulle |

**Esimerkki — osoita apex-domeenin ja www:n palvelimen IP-osoitteeseen:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS:n katselu ja muokkaus {#admin-viewing-and-editing-dns}

Verkko-administratorit voivat tarkastella ja muokata minkä tahansa asiakkaan domeenin DNS-rekistereitä domeenin muokkaussivulta kohdasta **Network Admin › Ultimate Multisite › Domains**.
