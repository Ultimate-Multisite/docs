---
title: Kykyjen viiteopas
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Kykyjen viite

Kyvyt ovat atomisia toimintoja, joita Gratis AI Agent voi kutsua WordPress-asennuksessasi. Jokainen kyky on rekisteröity PHP-luokka, joka tarjoaa JSON-skeeman — agentti lukee tämän skeeman ajon aikana ymmärtääkseen, mitä parametreja tarvitaan ja mitä kyky palauttaa.

Tämä sivu dokumentoi kaikki Gratis AI Agent v1.9.0:n mukana toimitettavat kyvyt.

---

## Mukautetut artikkelityypit

Nämä kyvyt hallitsevat mukautettuja artikkelityyppejä (CPT), jotka on rekisteröity agentin kautta. Rekisteröinnit tallennetaan WordPressin options-tauluun, joten ne säilyvät pluginin deaktivoinnin ja uudelleenaktivoinnin yli.

### `register_post_type`

Rekisteröi uuden mukautetun artikkelityypin.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `slug` | string | Kyllä | Artikkelityypin avain (enintään 20 merkkiä, ei isoja kirjaimia, ei välilyöntejä) |
| `singular_label` | string | Kyllä | Ihmiselle luettava yksikkömuotoinen nimi, esim. `Portfolio Item` |
| `plural_label` | string | Kyllä | Ihmiselle luettava monikkomuotoinen nimi, esim. `Portfolio Items` |
| `public` | boolean | Ei | Onko artikkelityyppi julkisesti käytettävissä. Oletus `true` |
| `supports` | array | Ei | Tuettavat ominaisuudet: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Oletus `["title","editor"]` |
| `has_archive` | boolean | Ei | Onko artikkelityypin arkistosivu käytössä. Oletus `false` |
| `menu_icon` | string | Ei | Dashicons-luokka tai URL ylläpitovalikon kuvakkeelle. Oletus `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ei | URL-slug artikkelityypille. Oletuksena `slug` |

**Esimerkki**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Palauttaa** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Palauttaa kaikki agentin rekisteröimät mukautetut artikkelityypit.

**Parametrit** — ei mitään

**Palauttaa**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

Poistaa aiemmin agentin rekisteröimän mukautetun artikkelityypin rekisteröinnin. Tämän tyypin olemassa olevat artikkelit säilyvät tietokannassa, mutta niihin ei enää pääse käsiksi artikkelityypin kautta.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `slug` | string | Kyllä | Poistettava artikkelityypin avain |

**Palauttaa** `{ "success": true, "slug": "portfolio" }`

---

## Mukautetut taksonomiat

Nämä kyvyt hallitsevat mukautettuja taksonomioita. CPT:iden tavoin taksonomioiden rekisteröinnit tallennetaan pysyvästi.

### `register_taxonomy`

Rekisteröi uuden mukautetun taksonomian.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `slug` | string | Kyllä | Taksonomian avain (enintään 32 merkkiä) |
| `singular_label` | string | Kyllä | Ihmiselle luettava yksikkömuotoinen nimi, esim. `Project Category` |
| `plural_label` | string | Kyllä | Ihmiselle luettava monikkomuotoinen nimi, esim. `Project Categories` |
| `post_types` | array | Kyllä | Artikkelityyppien slugit, joihin tämä taksonomia tulee liittää |
| `hierarchical` | boolean | Ei | `true` kategoriatyyliselle, `false` avainsanatyyliselle. Oletus `true` |
| `public` | boolean | Ei | Ovatko termit julkisesti käytettävissä. Oletus `true` |
| `rewrite_slug` | string | Ei | URL-slug taksonomialle. Oletuksena `slug` |

**Esimerkki**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Palauttaa** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Palauttaa kaikki agentin rekisteröimät mukautetut taksonomiat.

**Parametrit** — ei mitään

**Palauttaa**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

Poistaa aiemmin agentin rekisteröimän mukautetun taksonomian rekisteröinnin.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `slug` | string | Kyllä | Poistettava taksonomian avain |

**Palauttaa** `{ "success": true, "slug": "project-category" }`

---

## Design System

Design system -kyvyt muokkaavat WordPress-sivuston visuaalista esitystä — mukautetusta CSS:stä lohkomalleihin ja sivuston logoon.

### `inject_custom_css`

Lisää CSS:ää sivuston `<head>`-osioon `wp_add_inline_style`-toiminnon kautta. CSS tallennetaan `gratis_ai_agent_custom_css`-asetukseen ja poistetaan jonosta siististi, kun kyky nollataan.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `css` | string | Kyllä | Lisättävä kelvollinen CSS |
| `label` | string | Ei | Ihmiselle luettava tunniste tälle CSS-lohkolle, käytetään debug-lokeissa. Oletus `"agent-injected"` |
| `replace` | boolean | Ei | Jos `true`, korvaa kaiken aiemmin lisätyn CSS:n. Oletus `false` (lisää perään) |

**Esimerkki**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Palauttaa** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Rekisteröi uudelleenkäytettävän lohkomallin WordPressin mallikirjastoon.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `slug` | string | Kyllä | Mallin tunniste, esim. `gratis/hero-dark` |
| `title` | string | Kyllä | Editorissa näytettävä ihmiselle luettava mallin nimi |
| `content` | string | Kyllä | Sarjallistettu lohkomerkintä (HTML) mallia varten |
| `categories` | array | Ei | Mallikategorioiden slugit, esim. `["featured", "hero"]` |
| `description` | string | Ei | Lyhyt kuvaus, joka näytetään mallin valitsimessa |
| `keywords` | array | Ei | Hakusanat |

**Palauttaa** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Listaa kaikki agentin rekisteröimät lohkomallit.

**Parametrit** — ei mitään

**Palauttaa**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo`

Asettaa WordPress-sivuston logoksi annetun liitteen ID:n tai etäkuvan URL:n. Kun URL annetaan, kuva ladataan ja tuodaan Media Libraryyn.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `attachment_id` | kokonaisluku | Ei | Olemassa olevan Media Library -liitteen ID |
| `url` | merkkijono | Ei | Etäkuvan URL, joka tuodaan ja asetetaan logoksi |

Jompikumpi arvoista `attachment_id` tai `url` on annettava.

**Palauttaa** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Ottaa käyttöön nimetyn väri-/typografiaesiasetuksen aktiivisen teeman `theme.json`-tiedostossa (tai `global-styles`-määrityksissä). Esiasetukset ovat Gratis AI Agent -tiimin ylläpitämiä kuratoituja paketteja.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `preset` | merkkijono | Kyllä | Esiasetuksen nimi, esim. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | totuusarvo | Ei | Jos `true`, yhdistä olemassa oleviin arvoihin korvaamisen sijaan. Oletus `false` |

**Saatavilla olevat esiasetukset**

| Esiasetus | Kuvaus |
|---|---|
| `minimal-dark` | Lähes musta tausta, valkoinen teksti, yksi korostusväri |
| `warm-editorial` | Lämmin luonnonvalkoinen tausta, antiikvaotsikot, maanläheiset korostusvärit |
| `corporate-blue` | Laivastonsininen ja valkoinen paletti ammattimaisella typografialla |
| `vibrant-startup` | Kirkkaat liukuvärit, pyöristetyt kulmat, moderni groteskikirjasintyyli |
| `classic-blog` | Neutraalit harmaat sävyt, miellyttävä rivikorkeus, perinteinen asetteluvälistys |

**Palauttaa** `{ "success": true, "preset": "minimal-dark" }`

---

## Globaalit tyylit

Globaalien tyylien kyvykkyydet lukevat ja kirjoittavat theme.json-arvoja WordPress Global Styles API:n kautta, vaikuttaen kaikkiin lohkoihin ja sivustonlaajuisesti malleihin.

### `get_global_styles`

Palauttaa nykyisen globaalien tyylien määrityksen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `path` | merkkijono | Ei | JSON-osoitin tiettyyn arvoon, esim. `/color/palette` tai `/typography/fontSizes`. Palauttaa koko objektin, jos jätetään pois. |

**Palauttaa** koko globaalien tyylien objektin tai arvon kohdassa `path`.

---

### `set_global_styles`

Päivittää yhden tai useamman arvon globaalien tyylien määrityksessä.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `path` | merkkijono | Kyllä | JSON-osoitin asetettavaan arvoon, esim. `/color/palette` |
| `value` | mikä tahansa | Kyllä | Uusi arvo |

**Esimerkki** — lisää väri palettiin

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Palauttaa** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Nollaa kaikki agentin käyttöön ottamat globaalien tyylien muutokset ja palauttaa teeman oletukset.

**Parametrit** — ei mitään

**Palauttaa** `{ "success": true }`

---

## Navigointivalikot

Navigointivalikkojen kyvykkyydet luovat ja hallitsevat WordPress-navigointivalikoita ja niiden kohteita.

### `create_menu`

Luo uuden WordPress-navigointivalikon.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `name` | merkkijono | Kyllä | Valikon nimi, esim. `Primary Navigation` |
| `location` | merkkijono | Ei | Teeman sijainti, johon tämä valikko liitetään, esim. `primary` |

**Palauttaa** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Nimeää valikon uudelleen tai liittää sen uudelleen teeman sijaintiin.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `menu_id` | kokonaisluku | Kyllä | Päivitettävän valikon ID |
| `name` | merkkijono | Ei | Uusi valikon nimi |
| `location` | merkkijono | Ei | Teeman sijainti, johon liitetään tai liitetään uudelleen |

**Palauttaa** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Lisää kohteen olemassa olevaan navigointivalikkoon.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `menu_id` | kokonaisluku | Kyllä | Kohdevalikon ID |
| `type` | merkkijono | Kyllä | Kohteen tyyppi: `custom`, `post_type` tai `taxonomy` |
| `title` | merkkijono | Ei | Valikkokohteen nimiö (pakollinen tyypille `custom`) |
| `url` | merkkijono | Ei | URL `custom`-kohteille |
| `object_id` | kokonaisluku | Ei | Julkaisun ID tai termin ID `post_type`-/`taxonomy`-kohteille |
| `parent_id` | kokonaisluku | Ei | Valikkokohteen ID, jonka alle tämä kohde sisennetään |
| `position` | kokonaisluku | Ei | Nollapohjainen sijainti valikossa |

**Palauttaa** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Poistaa kohteen navigointivalikosta.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `item_id` | kokonaisluku | Kyllä | Poistettavan valikkokohteen ID |

**Palauttaa** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Listaa kaikki WordPress-navigointivalikot, mukaan lukien niille liitetyt teeman sijainnit.

**Parametrit** — ei mitään

**Palauttaa**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Asetusten hallinta

Asetusten kyvykkyydet lukevat ja kirjoittavat WordPress-asetuksia `get_option` / `update_option` -toimintojen kautta. Sisäänrakennettu turvallisuusestolista estää kriittisten asetusten tahattoman muokkaamisen.

### `get_option`

Lukee WordPress-asetuksen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `option_name` | merkkijono | Kyllä | Asetuksen avain, esim. `blogname` |

**Palauttaa** `{ "option_name": "blogname", "value": "My Site" }`

Palauttaa virheen, jos `option_name` on turvallisuusestolistalla.

---

### `set_option`

Kirjoittaa WordPress-asetuksen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `option_name` | merkkijono | Kyllä | Asetuksen avain |
| `value` | mikä tahansa | Kyllä | Uusi arvo (sarjallistetaan automaattisesti taulukoille/objekteille) |
| `autoload` | merkkijono | Ei | `"yes"` tai `"no"`. Oletus säilyttää olemassa olevan autoload-asetuksen |

Palauttaa virheen, jos `option_name` on turvallisuuden estolistalla.

**Palauttaa** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Poistaa WordPress-asetuksen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `option_name` | string | Kyllä | Poistettava asetuksen avain |

Palauttaa virheen, jos `option_name` on turvallisuuden estolistalla.

**Palauttaa** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Listaa WordPress-asetukset, jotka vastaavat mallia.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `pattern` | string | Ei | SQL LIKE -malli asetusten nimien suodattamiseen, esim. `gratis_%`. Palauttaa kaikki asetukset, jos jätetään pois (käytä varoen suurissa tietokannoissa). |
| `limit` | integer | Ei | Tulosten enimmäismäärä. Oletus `50`, enintään `500` |

**Palauttaa**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Sisällönhallinta

Sisällönhallinnan ominaisuudet luovat ja muokkaavat WordPress-artikkeleita ja -sivuja. Artikkelien ID:t palautetaan, jotta monivaiheisten suunnitelmien myöhemmät vaiheet voivat viitata luotuun sisältöön.

### `create_post`

Luo uuden WordPress-artikkelin, sivun tai mukautetun sisältötyypin merkinnän.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `title` | string | Kyllä | Artikkelin otsikko |
| `content` | string | Ei | Artikkelin sisältö — hyväksyy pelkän tekstin, HTML:n tai sarjallistetun lohkomerkinnän |
| `status` | string | Ei | `draft`, `publish`, `pending`, `private`. Oletus `draft` |
| `post_type` | string | Ei | Sisältötyypin polkutunnus, esim. `post`, `page` tai mikä tahansa rekisteröity CPT. Oletus `post` |
| `excerpt` | string | Ei | Lyhyt yhteenveto, joka näytetään arkistoissa ja hakutuloksissa |
| `categories` | array | Ei | Määritettävien kategorioiden nimien tai ID:iden taulukko |
| `tags` | array | Ei | Määritettävien avainsanojen nimien tai ID:iden taulukko |
| `author` | integer | Ei | WordPress-käyttäjän ID, joka asetetaan artikkelin kirjoittajaksi. Oletuksena nykyinen käyttäjä |
| `date` | string | Ei | Julkaisupäivämäärä ISO 8601 -muodossa, esim. `2026-05-01T09:00:00` |
| `page_template` | string | Ei | Tälle artikkelille tai sivulle määritettävä mallipohjatiedosto, esim. `page-full-width.php`. Merkityksellinen vain, kun `post_type` on `page` tai CPT, joka tukee sivumallipohjia. |

**Esimerkki**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Palauttaa** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Päivittää olemassa olevan WordPress-artikkelin tai -sivun.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `post_id` | integer | Kyllä | Päivitettävän artikkelin ID |
| `title` | string | Ei | Uusi artikkelin otsikko |
| `content` | string | Ei | Uusi artikkelin sisältö |
| `status` | string | Ei | Uusi tila: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ei | Uusi ote |
| `categories` | array | Ei | Korvaa koko kategorialuettelo tällä nimien tai ID:iden taulukolla |
| `tags` | array | Ei | Korvaa koko avainsanaluettelo tällä nimien tai ID:iden taulukolla |
| `page_template` | string | Ei | Uusi mallipohjatiedosto, joka määritetään tälle artikkelille tai sivulle, esim. `page-full-width.php`. Anna tyhjä merkkijono poistaaksesi mallipohjamäärityksen ja palataksesi theme-oletukseen. |

**Esimerkki** — vaihda mallipohja luomisen jälkeen

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Palauttaa** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Luo useita artikkeleita yhdellä ominaisuuskutsulla, mikä vähentää edestakaisia pyyntöjä site-rakennusten tai sisällön massatuonnin aikana. Artikkelit luodaan järjestyksessä; jos yksi epäonnistuu, muut jatkavat ja epäonnistuminen raportoidaan tulostaulukossa.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `posts` | array | Kyllä | Artikkeliobjektien taulukko, joista jokainen hyväksyy samat parametrit kuin `create_post` |
| `stop_on_error` | boolean | Ei | Jos `true`, lopeta käsittely ensimmäisen epäonnistumisen jälkeen. Oletus `false` |

**Esimerkki**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Palauttaa**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image`

Määrittää artikkelille tai sivulle artikkelikuvan (artikkelin pikkukuvan). Hyväksyy olemassa olevan Media Library -liitteen ID:n tai etäkuvan URL-osoitteen; kun URL annetaan, kuva ladataan ja tuodaan automaattisesti.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `post_id` | integer | Kyllä | Päivitettävän artikkelin tai sivun ID |
| `attachment_id` | integer | Ei | Olemassa olevan Media Library -liitteen ID |
| `url` | string | Ei | Etäkuvan URL-osoite, joka tuodaan ja asetetaan artikkelikuvaksi |
| `alt_text` | string | Ei | Vaihtoehtoinen teksti, joka asetetaan liitteelle, jos se tuodaan URL-osoitteesta |

Jompikumpi arvoista `attachment_id` tai `url` on annettava.

**Palauttaa** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Luo yhteydenottolomakkeen aktiivisella lomake-pluginilla (Contact Form 7, WPForms, Fluent Forms tai Gravity Forms sen mukaan, mikä on asennettu). Palauttaa shortcode-koodin, joka voidaan upottaa mihin tahansa artikkeliin tai sivuun.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `title` | string | Kyllä | Lomakkeen nimi, joka näytetään lomakelisäosan adminissa |
| `fields` | array | Kyllä | Järjestetty luettelo lomakekentistä (katso Kenttä-objekti alla) |
| `recipient` | string | Ei | Sähköpostiosoite lähetysten vastaanottamiseen. Oletuksena WordPressin admin-sähköposti |
| `subject` | string | Ei | Sähköpostin aiherivi. Tukee `[your-name]`- ja `[your-subject]`-paikkamerkkejä käytettäessä Contact Form 7:ää |
| `confirmation_message` | string | Ei | Viesti, joka näytetään onnistuneen lähetyksen jälkeen. Oletus: `"Thank you for your message. We'll be in touch soon."` |

**Kenttä-objekti**

| Avain | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `name` | string | Kyllä | Sisäinen kentän nimi / koneavain |
| `label` | string | Kyllä | Ihmisluettava selite, joka näytetään lomakkeessa |
| `type` | string | Kyllä | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ei | Onko kenttä täytettävä ennen lähetystä. Oletus `false` |
| `options` | array | Ei | Vaihtoehdot `select`-, `checkbox`- ja `radio`-kentille |
| `placeholder` | string | Ei | Paikkamerkkiteksti tekstityyppisille syötteille |

**Esimerkki**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Palauttaa**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visuaalinen tarkistus

Visuaalisen tarkistuksen kyvyt antavat agentin ottaa kuvakaappauksia julkaistuista sivuista ja analysoida niitä, mikä mahdollistaa autonomisen suunnittelutarkistuksen, ennen/jälkeen-vertailut ja visuaaliset regressiotarkistukset ilman selainlaajennusta.

### `capture_screenshot`

Ottaa kuvakaappauksen WordPress-sivusta annetussa URL-osoitteessa käyttäen palvelinpuolen headless-selainta. Kuva tallennetaan Mediakirjastoon ja CDN-URL palautetaan.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `url` | string | Kyllä | Kuvakaapattavan sivun täydellinen URL, esim. `https://example.com/about/` |
| `width` | integer | Ei | Näkymäalueen leveys pikseleinä. Oletus `1280` |
| `height` | integer | Ei | Näkymäalueen korkeus pikseleinä. Oletus `800` |
| `full_page` | boolean | Ei | Kaappaa koko vieritettävä sivu pelkän näkymäalueen sijaan. Oletus `false` |
| `delay_ms` | integer | Ei | Millisekunnit, jotka odotetaan sivun latautumisen jälkeen ennen kaappausta; hyödyllinen animoidulle sisällölle. Oletus `500` |
| `label` | string | Ei | Ihmisluettava selite, joka tallennetaan liitteen mukana Mediakirjastoon |

**Palauttaa**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Ottaa kaksi kuvakaappausta ja palauttaa visuaalisen eroarvon sekä erokuvan, jossa muuttuneet alueet on korostettu. Hyödyllinen sen vahvistamiseen, että suunnittelumuutos tuotti odotetun tuloksen, tai tahattomien regressioiden havaitsemiseen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `before_url` | string | Kyllä | Sen sivun URL, joka kaapataan "ennen"-tilana |
| `after_url` | string | Kyllä | Sen sivun URL, joka kaapataan "jälkeen"-tilana. Voi olla sama URL, jos vertaillaan eri ajankohtia |
| `width` | integer | Ei | Näkymäalueen leveys molemmille kaappauksille. Oletus `1280` |
| `threshold` | float | Ei | Pikselieron kynnysarvo (0.0–1.0). Tämän toleranssin sisällä olevat pikselit katsotaan muuttumattomiksi. Oletus `0.1` |

**Palauttaa**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` arvo `0.0` tarkoittaa, ettei näkyvää muutosta ole; `1.0` tarkoittaa, että jokainen pikseli muuttui.

---

### `review_page_design`

Ottaa sivusta kuvakaappauksen ja lähettää sen kielimallille visuaalista analyysiä varten. Palauttaa jäsennellyn arvioinnin, joka kattaa asettelun, typografian, värien käytön ja saavutettavuuteen liittyvät huolenaiheet.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `url` | string | Kyllä | Tarkistettavan sivun täydellinen URL |
| `focus` | string | Ei | Pilkuilla erotettu luettelo tarkistusalueista, joita korostetaan: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Oletus: kaikki alueet |
| `width` | integer | Ei | Näkymäalueen leveys. Oletus `1280` |

**Palauttaa**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Asennettavat kyvyt

Asennettavien kykyjen rekisteri antaa sinun laajentaa agenttia lisäkykypaketeilla, joita jaellaan WordPress-lisäosina. Jokainen paketti rekisteröi yhden tai useamman kyvyn käyttäen vakiomuotoista kyky-API:a.

### `list_available_abilities`

Palauttaa rekisteristä asennettavissa olevien kykypakettien katalogin.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `category` | string | Ei | Suodata kategorian mukaan: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Palauttaa**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

Lataa ja aktivoi kykypaketin rekisteristä.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `slug` | string | Kyllä | Kykypakettipluginin slug |

**Palauttaa** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Kysyy kykypakettien rekisteristä parhaan pluginin kuvattuun käyttötapaukseen ja haluttaessa asentaa sen.

**Parametrit**

| Parametri | Tyyppi | Pakollinen | Kuvaus |
|---|---|---|---|
| `description` | string | Kyllä | Luonnollisen kielen kuvaus halutusta toiminnallisuudesta |
| `install` | boolean | Ei | Jos `true`, asentaa suositellun pluginin välittömästi. Oletus `false` |

**Esimerkki**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Palauttaa**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
