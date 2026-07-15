---
title: Luo valikko
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Luo valikko

**Luo valikko** -ominaisuus luo WordPress-navigointivalikoita ja tukee erillisiä navigointitekstejä, jotka eroavat sivujen otsikoista.

## Yleiskatsaus {#overview}

Tämä ominaisuus laajentaa tavallista valikonluontitoiminnallisuutta mahdollisuudella määrittää `navigation_label`-parametri. Sen avulla voit luoda valikoita, joissa navigaatiossa näytettävä teksti eroaa sivun otsikosta, mikä tarjoaa enemmän joustavuutta sivuston rakenteeseen ja käyttäjäkokemukseen.

## Parametrit {#parameters}

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|-----------|------|----------|-------------|
| `name` | string | Kyllä | Valikon nimi, esim. `Primary Navigation` |
| `location` | string | Ei | Teeman sijainti, johon tämä valikko liitetään, esim. `primary` |
| `navigation_label` | string | Ei | Navigaatiossa näytettävä teksti (eri kuin sivun otsikko) |

## Paluuarvo {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigointiteksti vs. sivun otsikko {#navigation-label-vs-page-title}

`navigation_label`-parametrin avulla voit erottaa sisäisen valikon nimen käyttäjille navigaatiossa näytettävästä tekstistä:

- **`name`** — WordPressin käyttämä sisäinen valikkotunniste (esim. "Primary Navigation")
- **`navigation_label`** — Sivuston kävijöille navigaatiossa näytettävä teksti (esim. "Main Menu")

Tämä on hyödyllistä, kun:
- Sisäinen nimeämiskäytäntösi eroaa käyttäjille näkyvistä teksteistä
- Haluat navigaatioon lyhyemmät tekstit kuin ylläpitopaneeliin
- Sinun on tuettava useita kieliä, joissa tekstien pituudet vaihtelevat
- Rakennat valikoita tietyille alueille tai käyttäjäryhmille

## Käyttöesimerkit {#usage-examples}

### Esimerkki 1: Yksinkertainen valikko navigointitekstillä {#example-1-simple-menu-with-navigation-label}

**Kehote:**
```
Luo ensisijainen navigointivalikko nimeltä "Main Navigation" navigointitekstillä "Menu".
```

**Tulos:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Esimerkki 2: Valikko tiettyyn teeman sijaintiin {#example-2-menu-for-specific-theme-location}

**Kehote:**
```
Luo alatunnistevalikko nimeltä "Footer Links" navigointitekstillä "Quick Links" ja liitä se alatunnisteen sijaintiin.
```

**Tulos:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integraatio Theme Builderin kanssa {#integration-with-theme-builder}

Kun käytät Theme Builderia, Luo valikko -ominaisuus:

1. Tunnistaa automaattisesti käytettävissä olevat teeman valikkosijainnit
2. Luo valikoita suunnitteluusi sopivilla navigointiteksteillä
3. Liittää valikot oikeisiin teeman sijainteihin
4. Tukee valikkokohteiden lisäämistä luonnin jälkeen

## Liittyvät ominaisuudet {#related-abilities}

- **`add_menu_item`** — Lisää kohteita olemassa olevaan valikkoon
- **`update_menu`** — Nimeä valikko uudelleen tai liitä se uudelleen teeman sijaintiin
- **`delete_menu`** — Poista valikko sivustoltasi

## Parhaat käytännöt {#best-practices}

- **Käytä selkeitä navigointitekstejä** — pidä tekstit käyttäjille ytimekkäinä ja kuvaavina
- **Sovita teeman sijainteihin** — liitä valikot oikeaan teeman sijaintiin, jotta ne näkyvät oikein
- **Suunnittele valikkorakenne** — päätä valikkohierarkiasi ennen kohteiden luomista
- **Testaa responsiivisuus** — varmista, että valikot näkyvät oikein mobiililaitteilla
- **Lokalisoi tekstit** — käytä eri navigointitekstejä eri kieliversioille

## Rajoitukset {#limitations}

- Navigointitekstit ovat vain näyttämistä varten; sisäistä `name`-arvoa käytetään edelleen WordPress-tunnistukseen
- Teematuki vaihtelee; kaikki teemat eivät tue kaikkia valikkosijainteja
- Valikkokohteet on lisättävä erikseen valikon luonnin jälkeen
- Navigointitekstin muuttaminen edellyttää valikon päivittämistä

## Liittyvät ominaisuudet {#related-abilities-1}

- [Luo logon SVG](./generate-logo-svg.md) — luo logoja sivustosi ylätunnisteeseen
- [Vahvista paletin kontrasti](./validate-palette-contrast.md) — varmista saavutettavat värimallit
