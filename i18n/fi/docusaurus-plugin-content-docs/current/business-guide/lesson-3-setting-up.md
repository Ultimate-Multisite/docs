---
title: 'Oppitunti 3: Verkostosi määrittäminen'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Oppitunti 3: Verkkosi määrittäminen {#lesson-3-setting-up-your-network}

On aika rakentaa. Tässä oppitunnissa asennat Ultimate Multisite -laajennuksen ja määrität FitSite-verkon perustan. Jokainen päätös tehdään fitness-niche mielessä.

## Mihin jäimme {#where-we-left-off}

Valitsimme fitness-studiot nicheksemme ja validoimme mahdollisuuden. Nyt muutamme idean toimivaksi alustaksi.

## Hostingin valitseminen {#choosing-your-hosting}

Hosting-valinnallasi on niche-alustalle enemmän merkitystä kuin yksittäiselle verkkosivustolle. Et hostaa yhtä sivustoa -- hostaat verkkoa, joka kasvaa kymmeniin tai satoihin sivustoihin.

### Mitä etsiä {#what-to-look-for}

- **WordPress Multisite -tuki**: Kaikki palveluntarjoajat eivät käsittele multisiteä hyvin
- **Wildcard SSL**: Välttämätön aliverkkotunnuksiin perustuville verkoille
- **Skaalautuvat resurssit**: Tarvitset kasvunvaraa ilman migraatiota
- **Ultimate Multisite -integraatio**: Automaattinen domain mapping ja SSL säästävät merkittävästi operatiivista työtä

### Suositeltu lähestymistapa {#recommended-approach}

Valitse palveluntarjoaja [Yhteensopivat palveluntarjoajat](/user-guide/host-integrations/closte) -listalta. Nämä on testattu Ultimate Multisite kanssa, ja ne tarjoavat tarvitsemasi integraatiot domain mappingiin ja SSL-automaatiota varten.

FitSiteä varten käytämme aliverkkotunnusmääritystä. Tämä tarkoittaa, että asiakassivustot näkyvät aluksi muodossa `studioname.fitsite.com`, ennen kuin ne voivat halutessaan yhdistää oman verkkotunnuksensa.

## WordPress Multisite -asennus {#installing-wordpress-multisite}

Jos sinulla ei vielä ole WordPress Multisite -asennusta:

1. Asenna WordPress hosting-palveluntarjoajallesi
2. Seuraa [WordPress Multisite -asennusohjetta](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Valitse **aliverkkotunnus**-määritys, kun sitä pyydetään

:::tip Miksi aliverkkotunnukset?
Aliverkkotunnukset antavat jokaiselle asiakassivustolle oman erillisen osoitteen (`studio.fitsite.com`) polun (`fitsite.com/studio`) sijaan. Tämä on asiakkaillesi ammattimaisempaa ja välttää kestolinkkien ristiriidat. Katso yksityiskohtainen vertailu kohdasta [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Ultimate Multisite -asennus {#installing-ultimate-multisite}

Seuraa [Ultimate Multisite -asennusohjetta](/user-guide/getting-started/installing-ultimate-multisite), jotta voit:

1. Ladata ja aktivoida pluginin koko verkossa
2. Suorittaa [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard)

Pidä asennusvelhon aikana FitSite-niche mielessä:

- **Valuutta**: Aseta valuutaksi se, jota fitness-studioasiakkaasi käyttävät
- **Yrityksen nimi**: "FitSite" (tai valitsemasi brändinimi)
- **Yrityksen logo**: Lataa brändilogosi -- tämä näkyy laskuissa ja sähköposteissa

## Määritys fitness-nicheä varten {#configuring-for-the-fitness-niche}

Kun Ultimate Multisite on asennettu, tee nämä nichekohtaiset määritysvalinnat:

### Yleiset asetukset {#general-settings}

Siirry kohtaan **Ultimate Multisite > Settings** ja määritä:

- **Sivuston nimi**: FitSite
- **Oletusrooli**: Administrator -- fitness-studioiden omistajat tarvitsevat täyden hallinnan sivustonsa sisältöön
- **Rekisteröityminen**: Ota käyttäjien rekisteröityminen käyttöön, jotta studioiden omistajat voivat rekisteröityä itse

### Sähköpostimääritys {#email-configuration}

Järjestelmäsi sähköpostien tulisi puhua nichesi kieltä. Siirry kohtaan **Ultimate Multisite > Settings > Emails** ja mukauta:

- Korvaa yleinen "uusi sivustosi" -kieli fitness-aiheisella viestinnällä
- Esimerkkitervetuloviestin aihe: "Fitness-studiosi verkkosivusto on valmis"
- Esimerkkitervetuloviestin sisältö: Viittaa heidän studioonsa, tunteihinsa ja siihen, miten he pääsevät alkuun fitness-sivustonsa kanssa

Hienosäädämme näitä lisää oppitunnissa 8 (Asiakkaan perehdytys), mutta sävyn määrittäminen nyt varmistaa, että jopa varhaiset testirekisteröitymiset tuntuvat nichekohtaisilta.

### Verkkotunnusmääritys {#domain-configuration}

Jos käytät yhteensopivaa hosting-palveluntarjoajaa, määritä domain mapping nyt:

1. Siirry kohtaan **Ultimate Multisite > Settings > Domain Mapping**
2. Seuraa oman palveluntarjoajasi integraatio-ohjetta
3. Testaa, että uudet alisivustot saavat SSL:n automaattisesti

Tämä varmistaa, että kun alamme luoda malleja ja testisivustoja seuraavassa oppitunnissa, kaikki toimii alusta loppuun.

## FitSite-verkko tähän mennessä {#the-fitsite-network-so-far}

Tämän oppitunnin lopussa sinulla on:

```
FitSite-verkko
├── WordPress Multisite (aliverkkotunnustila)
├── Ultimate Multisite (asennettu ja määritetty)
├── Hosting wildcard SSL:llä
├── Domain mapping määritetty
├── Nichekohtaiset sähköpostimallit (alustavat)
└── Valmis sivustomalleja varten (seuraava oppitunti)
```

## Mitä rakensimme tässä oppitunnissa {#what-we-built-this-lesson}

- **Toimiva WordPress Multisite** -asennus aliverkkotunnustilassa
- **Ultimate Multisite asennettuna** ja määritettynä FitSite-brändäyksellä
- **Hosting ja SSL** määritettynä kasvavaa verkkoa varten
- **Domain mapping** määritettynä hosting-palveluntarjoajallesi
- **Nichekohtainen sähköpostisävy** luotuna ensimmäisestä päivästä alkaen

---

**Seuraava:** [Oppitunti 4: Niche-mallien rakentaminen](lesson-4-templates) -- luomme sivustomalleja, joita fitness-studioiden omistajat oikeasti haluavat käyttää.
