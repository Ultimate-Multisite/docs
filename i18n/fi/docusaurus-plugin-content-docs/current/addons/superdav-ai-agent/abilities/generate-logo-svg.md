---
title: Luo logo-SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Luo logo-SVG

**Luo logo-SVG** -kyky antaa Theme Builderin luoda ja upottaa mukautettuja logo-SVG:itä suoraan WordPress-sivustollesi automaattisella nimiavaruusturvallisella puhdistuksella.

## Yleiskatsaus {#overview}

Tämä kyky luo skaalautuvia vektorigrafiikka- (SVG) logoja sivustosi brändäyssuunnan ja suunnittelumieltymysten perusteella. Luodut SVG:t puhdistetaan automaattisesti, jotta ne ovat turvallisia käyttää WordPressissä visuaalisen eheyden säilyessä.

## Parametrit {#parameters}

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|-----------|------|----------|-------------|
| `site_name` | string | Kyllä | Sen sivuston nimi, jolle logo luodaan |
| `style` | string | Kyllä | Suunnittelutyyli (esim. "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ei | Taulukko logossa käytettävistä heksavärikoodeista (esim. `["#678233", "#ffffff"]`) |
| `width` | number | Ei | SVG:n leveys pikseleinä (oletus: 200) |
| `height` | number | Ei | SVG:n korkeus pikseleinä (oletus: 200) |
| `include_text` | boolean | Ei | Sisällytetäänkö sivuston nimi logoon tekstinä (oletus: true) |

## Tulostusmuoto {#output-format}

Kyky palauttaa SVG-merkkijonon seuraavalla rakenteella:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG-puhdistuksen toiminta {#svg-sanitisation-behaviour}

Luoduille SVG:ille tehdään automaattinen nimiavaruusturvallinen puhdistus, joka:

- **Poistaa turvattomat attribuutit** — poistaa tapahtumankäsittelijät, skriptit ja mahdollisesti vaaralliset attribuutit
- **Säilyttää nimiavaruudet** — säilyttää SVG-nimiavaruudet (xmlns, xlink) oikeaa renderöintiä varten
- **Vahvistaa rakenteen** — varmistaa, että SVG noudattaa W3C-standardeja
- **Koodaa entiteetit** — escapettaa erikoismerkit tekstisisällössä asianmukaisesti
- **Poistaa ulkoiset viittaukset** — poistaa ulkoiset tyylitiedostot ja kuvaviittaukset

Tämä varmistaa, että SVG on turvallista upottaa suoraan WordPressiin ilman lisäpuhdistusta.

## Käyttöesimerkki {#usage-example}

**Kehote:**
```
Luo moderni logo teknologia-startupilleni nimeltä "CloudSync" käyttäen sinisiä ja valkoisia värejä.
```

**Tulos:**
Kyky luo SVG-logon, joka:
- Sisällyttää sivuston nimen "CloudSync"
- Käyttää määritettyä sinivalkoista värimaailmaa
- Noudattaa modernin suunnittelun periaatteita
- Puhdistetaan automaattisesti ja on valmis käyttöön

## Integrointi Theme Builderin kanssa {#integration-with-theme-builder}

Kun käytät Theme Builderin suunnittelusuunnan valintaa, Luo logo-SVG -kyky:

1. Analysoi suunnittelusuuntasi ja väripalettisi
2. Luo mukautetun SVG-logon, joka vastaa mieltymyksiäsi
3. Upottaa logon automaattisesti sivustosi ylätunnisteeseen/brändäysalueelle
4. Tallentaa SVG:n mukautettuna logona WordPress-mediaan

## Parhaat käytännöt {#best-practices}

- **Anna selkeät tyylimieltymykset** — kuvaile haluamasi suunnittelutyyli (moderni, klassinen, leikkisä jne.)
- **Määritä värit** — sisällytä brändivärisi yhtenäisyyden varmistamiseksi
- **Testaa renderöinti** — varmista, että logo näkyy oikein eri näyttökokojen välillä
- **Mukauta lisää** — käytä WordPressin logon mukautustyökaluja koon ja sijoittelun säätämiseen

## Rajoitukset {#limitations}

- SVG-logot luodaan staattisina grafiikkoina (ei animoituina)
- Monimutkaiset logot, joissa on paljon elementtejä, saattavat vaatia manuaalista viimeistelyä
- Mukautettuja fontteja ei tueta; tekstissä käytetään järjestelmäfontteja
- Erittäin suuret tai erittäin pienet mitat voivat vaikuttaa laatuun

## Liittyvät kyvyt {#related-abilities}

- [Vahvista paletin kontrasti](./validate-palette-contrast.md) — tarkista värikontrasti saavutettavuutta varten
- [Luo valikko](./create-menu.md) — luo navigointivalikoita sivustollesi
