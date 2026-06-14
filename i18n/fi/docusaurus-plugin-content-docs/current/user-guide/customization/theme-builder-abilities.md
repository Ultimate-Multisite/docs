---
title: Teeman rakentamisominaisuudet
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Teemanrakentajaomina: Block-teemojen luominen ja aktivoiminen

Superdav AI Agent v1.12.0 tuo mukanaan kaksi tehokasta ominaisuutta, jotka mahdollistavat räätälöityjen block-teemojen luomisen ja käyttöönoton suoraan chat-käyttöliittymän kautta.

## Yleiskatsaus

**scaffold-block-theme**- ja **activate-theme** -ominaisuudet mahdollistavat agenttien:
- Luodaksesi täydellisiä, tuotantoon valmiita block-teemoja annettujen ohjeiden perusteella
- Aktivoimaan teemoja sivustollasi automaattisesti ilman manuaalista toimintaa
- Luomaan yhtenäisen visuaalisen identiteetin ohjattuina suunnittelupäätöksillä

## Block-teeman luominen (Scaffold Block Theme)

**scaffold-block-theme**-ominaisuus luo uuden WordPress block-teeman, joka sisältää täydellisen teemarakenteen, mukaan lukien:

- `theme.json` -konfiguraation design tokens -tiedostolla
- Block-mallistot yleisille asetteluille
- Mukautettuja block-tyylejä ja variaatioita
- Teeman metatietoja ja tukea ilmoittavia tietoja

### Käyttöohje

Chatissa Superdav AI Agentin kanssa voit pyytää teeman luomista:

```
"Luo block-teema nimeltä 'Modern Agency' sinisellä ja valkoisella värimaailmalla,
sans-serif -typoilla ja ammattimaisella asettelulla"
```

Agentti tekee seuraavaa:
1. Kerää suunnittelun oletukset keskustelun kautta
2. Luo koko teemarakenteen
3. Luo kaikki tarvittavat teeman tiedostot
4. Valmistele teema aktivoimista varten

### Odotettu tuloste

Kun ominaisuus suoritetaan onnistuneesti, näet:

- Vahvistuksen siitä, että teema on luotu (scaffolded)
- Teeman nimi ja sijainti
- Yhteenveto sovelletuista design tokens -arvoista (värit, typografia, väli)
- Valmis aktivoimiseen tila

Esimerkki tulosteesta:
```
✓ Teema "Modern Agency" luotu onnistuneesti
  Sijainti: /wp-content/themes/modern-agency/
  Värit: Pääväri #0066CC, Toissijainen #FFFFFF
  Typografia: Inter (sans-serif)
  Tila: Valmis aktivoimiseen
```

## Teeman aktivoiminen (Activate Theme)

**activate-theme** -ominaisuus vaihtaa sivustosi uuden rakennusmallin tai olemassa olevan lohkon teeman välillä.

### Miten kutsua toimintoa

Teeman luomisen jälkeen voit aktivoida sen heti:

```
"Aktivoi Modern Agency -teeman"
```

Tai aktivoi minkä tahansa olemassa olevan teeman:

```
"Vaihtovi Twentytwentyfour -teemaan"
```

### Odotettu tuloste

Kun aktivoituminen onnistuu:

- Vahvistus aktiivisesta teemasta
- Edellisen teeman nimi (viitekäyttöön)
- Sivuston URL, jossa teema on nyt käytössä
- Teemaan liittyvät muut asennushuomiot

Esimerkki tulosteesta:
```
✓ Teema aktivoitu onnistuneesti
  Aktiivinen teema: Modern Agency
  Edellinen teema: Twentytwentyfour
  Käytössä: https://yoursite.com
  Huomautus: Tarkista etusivu varmistaaksesi asettelun
```

## Työprosessi: LuonCreate ja Aktivoi

Tyypillinen työnkulku yhdistää molemmat kyvyt:

1. **Pyydä teeman luomista**: "Luo lohkotema SaaS-sivustolle"
2. **Agent luo teeman**: Luo tiedostoja ja suunnittelutekointeja (design tokens)
3. **Arvioi ja hienosäädä**: Keskustele suunnittelun muutoksista tarvittaessa
4. **Aktivoi**: "Aktivoi teeman nyt"
5. **Vahvista**: Vieraile sivustollasi varmistaaksesi, että uusi ulkoasu on käytössä

## Suunnittelutekoni ja mukauttaminen (Design Tokens and Customization)

Luo teemasta käyttävät WordPress design tokens -mekanismeja (`theme.json`) seuraaviin asioihin:

- **Värit**: Pääväri, toissijainen väri, korostusväri, neutraali paletti
- **Typografia**: Fontit, koot, painot, rivivälit
- **Etäisyydet**: Sisä-/ulkoiset marginaalit, välit (padding, margin, gap scales)
- **Reunat**: Pyöristys- ja leveysmekanismit
- **Varjot**: Korkeusasteet

Nämä tokenit on keskitetty `theme.json`-tiedostoon, mikä helpottaa koko suunnittelujärjestelmän muuttamista yhdestä tiedostosta.

## Rajoitukset ja huomiot

Teemat luodaan kansioihin `/wp-content/themes/` ja niiden on noudatettava WordPressin nimikkeitä.
Aktivointi vaatii asianmukaisia oikeuksia WordPress-sivustollasi.
Mukautettu PHP-koodi teemoissa on vähäistä; käytä plugin-lisäosia monimutkaisempiin toimintoihin.
Blokki-teemat toimivat parhaiten WordPress 5.9 ja sitä uudemmissa versioissa.

## Ongelmanratkaisu

**Teema ei ilmesty luodun kansiosta**
- Tarkista, että teemakansio on olemassa ja siinä on oikeat käyttöoikeudet.
- Varmista, että `theme.json` on kelvollinen JSON-muoto.
- Varmista, ettei teeman nimi ole ristiriidassa olemassa olevien teemojen kanssa.

**Aktivointi epäonnistuu**
- Vahvista, että sinulla on ylläpitäjän oikeudet (administrator permissions).
- Tarkista, että WordPress pystyy lukemaan teemakansiota.
- Tarkista WordPressin virhesivujen logit saadaksesi lisätietoja.

**Suunnittelutunnisteet eivät sovia**
- Varmista, että `theme.json` syntaksi on oikein.
- Tyhjennä kaikki välimuistia koskevat pluginit.
- Tarkista, tukikohtasi WordPress-versio tuettavan tunnisteiden (tokens) versio.

## Seuraavat askeleet

Teeman aktivoimisen jälkeen voit:
- Käyttää **Design System Aesthetics** -taitoa tyypin, värien ja väljiyden hienosäätöön.
- Muokata yksittäisten blokkien tyylejä WordPressin blokkirivityökalun kautta.
- Lisätä omaa CSS:ää teeman `style.css` -tiedostoon.
- Luoda räätälöityjä blokkikuvioita tiettyjen sivutyypien käyttöön.
