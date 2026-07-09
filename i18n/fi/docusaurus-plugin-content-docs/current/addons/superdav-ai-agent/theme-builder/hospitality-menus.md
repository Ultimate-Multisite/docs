---
title: Hotelli- ja ravintola-alan ruokalistat
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality-ruokalistat {#hospitality-menus}

**Hospitality Menus** -ominaisuuden avulla Theme Builder voi luoda ja upottaa jäsenneltyjä ruoka- ja juomalistasivuja suoraan WordPress-sivustollesi.

## Yleiskatsaus {#overview}

Theme Builder voi nyt luoda ammattimaisia, jäsenneltyjä ruokalistasivuja hospitality-yrityksille, kuten ravintoloille, kahviloille, baareille ja catering-palveluille. Nämä ruokalistat integroituvat täysin sivustosi ulkoasuun, ja niitä voi päivittää ja hallita helposti.

## Tuetut hospitality-tyypit {#supported-hospitality-types}

- **Ravintolat** — täyden palvelun ruokailuruokalistat
- **Kahvilat** — kahvi- ja kevyiden annosten ruokalistat
- **Baarit ja lounget** — juoma- ja alkupalalistat
- **Leipomot** — leivonnais- ja leipälistat
- **Catering-palvelut** — tapahtumien ruokalistavaihtoehdot
- **Ruokarekat** — liikkuvan ruokapalvelun ruokalistat
- **Panimot ja viinitilat** — juomalistat kuvauksilla

## Ruokalistan rakenne {#menu-structure}

### Ruokalistakategoriat {#menu-categories}

Ruokalistat järjestetään kategorioihin:

- **Alkupalat** — aloitusannokset ja pienet annokset
- **Pääruoat** — pääannokset
- **Lisukkeet** — lisukkeet ja vihannekset
- **Jälkiruoat** — makeat herkut
- **Juomat** — juomat (alkoholilliset ja alkoholittomat)
- **Erikoisuudet** — päivittäiset tai kausittaiset erikoisuudet

### Ruokalistakohteen muoto {#menu-item-format}

Jokainen ruokalistakohde sisältää:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Kohteen kentät {#item-fields}

| Kenttä | Tyyppi | Kuvaus |
|-------|------|-------------|
| `name` | string | Annoksen tai juoman nimi |
| `description` | string | Kohteen yksityiskohtainen kuvaus |
| `price` | string | Hinta (muotoiltu valuutan kanssa) |
| `dietary_info` | array | Ruokavalio-ominaisuudet (vegaaninen, gluteeniton jne.) |
| `allergens` | array | Yleiset allergeenit (pähkinät, äyriäiset jne.) |
| `availability` | string | Milloin saatavilla (päivittäin, kausittain jne.) |

## Hospitality-ruokalistojen luominen {#creating-hospitality-menus}

### Vaihe 1: Anna ruokalistatiedot {#step-1-provide-menu-information}

Kerro Theme Builderille ruokalistastasi:

```
Luo ravintolamenu italialaiselle ravintolalleni, jossa on alkupaloja,
pasta-annoksia, pääruokia ja jälkiruokia. Sisällytä hinnat ja kuvaukset.
```

### Vaihe 2: Theme Builder luo ruokalistan {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Luo jäsennellyn ruokalistasivun
2. Suunnittelee sen vastaamaan sivustosi themeä
3. Järjestää kohteet kategorioihin
4. Muotoilee hinnat ja kuvaukset
5. Lisää ruokavalio- ja allergeenitiedot

### Vaihe 3: Tarkista ja mukauta {#step-3-review-and-customize}

Voit:

1. Muokata ruokalistakohteita ja hintoja
2. Lisätä tai poistaa kategorioita
3. Järjestää kohteita uudelleen kategorioiden sisällä
4. Päivittää kuvauksia ja ruokavaliotietoja
5. Säätää tyylejä ja asettelua

## Ruokalistan näyttövaihtoehdot {#menu-display-options}

### Koko ruokalistasivu {#full-menu-page}

Oma sivu, joka näyttää koko ruokalistasi:

- Järjestetty kategorioittain
- Haettavissa ja suodatettavissa
- Tulostusystävällinen asettelu
- Mobiiliresponsiivinen design

### Ruokalistawidget {#menu-widget}

Upota ruokalistaosioita muille sivuille:

- Suositellut kohteet etusivulla
- Päivän erikoisuudet sivupalkissa
- Juomalista baarisivulla
- Jälkiruokaesittely alatunnisteessa

### Ruokalista-PDF {#menu-pdf}

Luo ladattava PDF-ruokalista:

- Ammattimainen muotoilu
- Tulostusvalmis laatu
- Sisältää kuvat ja kuvaukset
- Helppo jakaa ja lähettää sähköpostitse

## Ruokavalio- ja allergeenitiedot {#dietary-and-allergen-information}

### Ruokavalio-ominaisuudet {#dietary-attributes}

Merkitse kohteet ruokavaliotiedoilla:

- **Vegaaninen** — ei eläinperäisiä tuotteita
- **Kasvis** — ei lihaa
- **Gluteeniton** — turvallinen keliakiaa sairastaville
- **Maidoton** — ei maitotuotteita
- **Pähkinätön** — ei puupähkinöitä tai maapähkinöitä
- **Vähähiilihydraattinen** — vähemmän hiilihydraatteja
- **Runsasproteiininen** — proteiinipitoinen

### Allergeenivaroitukset {#allergen-warnings}

Sisällytä yleiset allergeenit:

- **Pähkinät** — puupähkinät ja maapähkinät
- **Äyriäiset ja nilviäiset** — äyriäiset ja nilviäiset
- **Kala** — kaikki kalalajit
- **Maito** — maito ja maitotuotteet
- **Kananmunat** — kananmunat
- **Soija** — soijatuotteet
- **Gluteeni** — vehnä ja gluteenia sisältävät viljat
- **Seesami** — seesaminsiemenet ja -öljy

## Ruokalistan hallinta {#menu-management}

### Hintojen päivittäminen {#updating-prices}

Päivitä ruokalistan hinnat helposti:

1. Siirry ruokalistasivulle
2. Napsauta "Muokkaa ruokalistaa"
3. Päivitä kohteiden hinnat
4. Tallenna muutokset
5. Muutokset näkyvät heti sivustollasi

### Kausikohteiden lisääminen {#adding-seasonal-items}

Luo kausittaisia ruokalistavariaatioita:

1. Luo uusi ruokalistaversio
2. Lisää kausikohteita
3. Merkitse kohteet "Kausittaisiksi"
4. Ajasta saatavuuspäivämäärät
5. Näytä automaattisesti kauden aikana

### Erikoisuuksien hallinta {#managing-specials}

Näytä päivittäisiä tai viikoittaisia erikoisuuksia:

1. Luo "Erikoisuudet"-kategoria
2. Lisää kohteita saatavuuspäivämäärillä
3. Korosta erikoisuuksia etusivulla
4. Päivitä päivittäin tai viikoittain
5. Arkistoi vanhat erikoisuudet

## Integraatio Theme Builderin kanssa {#integration-with-theme-builder}

Kun käytät Theme Builderia hospitality-sivustoille:

1. **Automaattinen ruokalistan tunnistus** — tunnistaa, oletko ruoka-/juomayritys
2. **Ruokalistasivun luonti** — luo ammattimaisia ruokalistasivuja
3. **Designin yhteensovitus** — ruokalistat vastaavat sivustosi themeä
4. **Mobiilioptimointi** — ruokalistat näkyvät kauniisti puhelimissa
5. **SEO-optimointi** — ruokalistat ovat hakukoneystävällisiä

## Parhaat käytännöt {#best-practices}

### Ruokalistan design {#menu-design}

- **Selkeä järjestys** — looginen kategoriorakenne
- **Luettavat kuvaukset** — houkuttelevat ja informatiiviset
- **Johdonmukainen hinnoittelu** — selkeä valuutta ja muotoilu
- **Ammattimaiset kuvat** — korkealaatuiset ruokakuvat
- **Tyhjä tila** — älä ahtaa sivua liian täyteen

### Sisältö {#content}

- **Tarkat kuvaukset** — kuvaile kohteet täsmällisesti
- **Korosta erikoisuuksia** — tee erikoisuuksista erottuvia
- **Sisällytä allergeenit** — listaa allergeenit aina
- **Päivitä säännöllisesti** — pidä hinnat ja kohteet ajan tasalla
- **Käytä houkuttelevaa kieltä** — saa kohteet kuulostamaan herkullisilta

### Saavutettavuus {#accessibility}

- **Luettavat fontit** — käytä selkeitä, helposti luettavia kirjasintyyppejä
- **Riittävä kontrasti** — varmista, että teksti on luettavaa
- **Ruokavaliomerkinnät** — merkitse ruokavaliovaihtoehdot selkeästi
- **Allergeenivaroitukset** — näytä allergeenit näkyvästi
- **Mobiiliystävällinen** — testaa kaikilla laitteilla

## Esimerkit {#examples}

### Ravintolan ruokalistan rakenne {#restaurant-menu-structure}

```
Alkupalat
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese-salaatti

Pastaruoat
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Pääruoat
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Jälkiruoat
├── Tiramisu
├── Panna Cotta
└── Gelato-valikoima
```

### Kahvilan valikkorakenne {#cafe-menu-structure}

```
Kahvi
├── Espresso
├── Cappuccino
└── Latte

Leivonnaiset
├── Croissantit
├── Muffinit
└── Sconesit

Voileivät
├── Caprese Panini
├── Savustettu Turkey Club
└── Kasviswrap
```

## Aiheeseen liittyvät ominaisuudet {#related-features}

- [Luo valikko](../abilities/create-menu.md) — luo navigointivalikoita
- [Suunnittelusuunta](./design-direction.md) — mukauta sivustosi suunnittelua
- [Kartoitushaastattelu](./discovery-interview.md) — suunnittele sivustosi rakenne
