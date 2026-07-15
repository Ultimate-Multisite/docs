---
title: Sisäänrakennetut agentit
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Sisäänrakennetut agentit

Gratis AI Agent v1.9.0 sisältää viisi sisäänrakennettua agenttia, joista jokainen on esikonfiguroitu kohdennetulla työkalujoukolla, räätälöidyllä järjestelmäkehotteella ja aloitusehdotuksilla, jotka sopivat kyseisen alueen yleisiin tehtäviin. Agenttien välillä vaihtaminen muuttaa sitä, mitä avustaja voi tehdä ja miten se vastaa — ilman mitään määrityksiä sinun puoleltasi. Superdav AI Agent v1.18.0 voi lisätä näihin työnkulkuihin aikataulutietoisia työkaluja, muistutustietueita, hyväksyntäportteja ja SMS-ilmoituksia, kun niihin liittyvät integraatiot on määritetty.

## Mikä agentti on? {#what-is-an-agent}

Jokainen agentti on nimetty määritysprofiili, joka yhdistää:

- **Työkalut** — kyvyt, joita agentti saa kutsua (esim. sisällöntuottajalla on pääsy julkaisujen luontikykyihin; Design Studiolla on pääsy CSS- ja theme.json-kykyihin)
- **Järjestelmäkehote** — ohjeet, jotka määrittävät agentin sävyn, prioriteetit ja rajoitukset
- **Ehdotukset** — valmiiksi kirjoitetut kehotteet, jotka näytetään chat-käyttöliittymässä, jotta pääset nopeasti alkuun

## Agentin valitsimen käyttäminen {#accessing-the-agent-picker}

1. Avaa **Gratis AI Agent** -paneeli WordPress-ylläpidon sivupalkissa.
2. Napsauta **agenttikuvaketta** chat-otsakkeen vasemmassa yläkulmassa (kuvake muuttuu aktiivisen agentin mukaan).
3. **Agent Picker** avautuu lomaketaulukon peittokuvana. Jokainen agentti näytetään kuvakkeensa, nimensä ja yhden rivin kuvauksensa kanssa.
4. Aktivoi agentti napsauttamalla agenttiriviä. Chat-otsake päivittyy välittömästi.

Voit myös vaihtaa agenttia kesken keskustelun — uuden agentin järjestelmäkehote tulee voimaan seuraavasta viestistä alkaen.

## Viisi sisäänrakennettua agenttia {#the-five-built-in-agents}

### Sisällöntuottaja {#content-writer}

**Painopiste:** Julkaisujen, sivujen ja yhteydenottolomakkeiden luominen ja muokkaaminen.

**Saatavilla olevat työkalut:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Kun Superdav AI Agent v1.18.0 -integraatiot ovat käytössä, määritetty kalenterikonteksti, hyväksyntäportit, muistutukset ja SMS-ilmoitustyökalut voivat myös olla hyväksyttyjen työnkulkujen käytettävissä.

**Missä se toimii hyvin:**
- Blogijulkaisujen luonnostelu ja julkaiseminen briiffin tai jäsennyksen pohjalta
- Laskeutumissivujen erien luominen uudelle sivustolle
- Yhteydenotto- ja kyselylomakkeiden rakentaminen
- Artikkelien artikkelikuvien asettaminen URL-osoitteesta tai hausta
- Tapahtuman seurantaviestien luonnostelu määritetyn Google Calendar -kontekstin perusteella ja sen jälkeen pysähtyminen hyväksyntää varten ennen ilmoitusten lähettämistä

**Aloitusehdotukset:**
- *Kirjoita 500 sanan blogijulkaisu WordPress multisiten hyödyistä.*
- *Luo Tietoa meistä-, Palvelut- ja Yhteystiedot-sivu ja julkaise ne.*
- *Lisää varauskyselylomake Yhteystiedot-sivulle.*
- *Luonnostele muistutus osallistujille huomisen määritetystä kalenteritapahtumasta ja odota hyväksyntää ennen sen lähettämistä.*

---

### Sivuston rakentaja {#site-builder}

**Painopiste:** Kokonaisvaltainen verkkosivuston luonti yhdestä kehotteesta.

**Saatavilla olevat työkalut:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0:n kanssa määritetyt hallitun palvelun, hyväksynnän, muistutuksen, kalenterin ja SMS:n työkalut voivat olla käytettävissä siellä, missä ylläpitäjät ottavat ne käyttöön.

**Missä se toimii hyvin:**
- Monivaiheisen sivuston rakennussuunnitelman luominen kuvatulle liiketoimintatyypille
- Jokaisen vaiheen suorittaminen autonomisesti — rakenne, sisältö, navigaatio, suunnittelu
- Virheistä palautuminen kesken suunnitelman ilman manuaalista puuttumista
- Suositeltujen lisäosien asentaminen osana rakennusta
- Yhteydenottolomakkeiden luominen suoraan chat-käyttöliittymästä (Superdav AI Agent v1.10.0+)
- Julkaisumuistutusten tai osallistujien seurantaviestien koordinointi ilman päällekkäisiä ilmoituksia, kun hyväksyntäportit ja muistutustietueet ovat käytössä

**Aloitusehdotukset:**
- *Rakenna valokuvausportfolio-sivusto, jossa on galleriatyyppinen julkaisutyyppi, varaussivu ja yhteydenottolomake.*
- *Luo ravintolasivusto, jossa on verkkomenu, aukioloajat ja pöytävarauskyselylomake.*
- *Määritä freelance-konsultointisivusto, jossa on palvelusivuja, portfolio-osio ja blogi.*
- *Lisää yhteydenottolomake Yhteystiedot-sivulle sivuston rakentajaa käyttäen.*
- *Kun sivuston julkaisun tarkistuslista on hyväksytty, lähetä SMS-muistutus määritetylle sidosryhmän yhteyshenkilölle.*

---

### Design Studio {#design-studio}

**Painopiste:** Visuaalinen mukauttaminen — värit, typografia, CSS ja lohkomallit.

**Saatavilla olevat työkalut:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Missä se toimii hyvin:**
- Nimettyjen teeman esiasetusten käyttäminen (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Globaalin typografian ja väripalettien hienosäätö theme.jsonin kautta
- Mukautetun CSS:n lisääminen brändikohtaisia ohituksia varten
- Sivun kuvakaappauksen ottaminen ja sen arviointi suunnitteluongelmien varalta

**Aloitusehdotukset:**
- *Käytä warm-editorial-esiasetusta ja aseta sitten pääväriksi #2d6a4f.*
- *Ota kuvakaappaus etusivusta ja kerro, mitä parantaisit.*
- *Luo uudelleenkäytettävä hero-lohkomalli, jossa on koko leveyden taustakuva ja keskitetty otsikko.*

### Lisäosien hallinta {#plugin-manager}

**Painopiste:** WordPress-lisäosien löytäminen, asentaminen ja hallinta.

**Saatavilla olevat työkalut:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Missä se toimii hyvin:**
- Parhaan lisäosan suositteleminen kuvattuun käyttötapaukseen
- Kyvykkyyspakettien asentaminen rekisteristä
- Saatavilla olevan kyvykkyysluettelon selaaminen kategorioittain

**Aloitusehdotukset:**
- *Mikä on paras lisäosa jäsenhakemistolle?*
- *Asenna WooCommerce-kyvykkyyspaketti.*
- *Näytä minulle kaikki saatavilla olevat ecommerce-kyvykkyyspaketit.*

---

### Tukiavustaja {#support-assistant}

**Painopiste:** Sivuston sisältöä, asetuksia ja WordPress-määrityksiä koskeviin kysymyksiin vastaaminen.

**Saatavilla olevat työkalut:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Mitä se tekee hyvin:**
- Nykyisten sivustoasetusten ja valintojen hakeminen
- Selittää, mitä julkaisutyyppejä, taksonomioita ja valikoita sivustolle on määritetty
- Vastaa "mitä tämä asetus tekee?" -kysymyksiin lukemalla reaaliaikaisia arvoja
- Toimii vain luku -diagnostiikkakerroksena ennen muutosten tekemistä

**Aloitusehdotuksia:**
- *Mitkä pluginit ja asetukset ovat tällä hetkellä aktiivisia tällä sivustolla?*
- *Listaa kaikki tälle sivustolle rekisteröidyt mukautetut julkaisutyypit.*
- *Mitä navigaatiovalikoita on olemassa ja mihin ne on määritetty?*

---

## Superdav-automaation integraatiot {#superdav-automation-integrations}

Kun Superdav AI Agent v1.18.0 -integraatiot on määritetty, sisäänrakennetut agentit voivat osallistua turvallisempiin aikataulut huomioiviin automaatiotyönkulkuihin:

- **Google Calendar -lukutyökalut** antavat agenteille mahdollisuuden tarkistaa määritetyt kalenterit ja tapahtumat ennen jatkotyön luonnostelua.
- **Yhteystietojen ja osallistujien yhdistäminen** auttaa yhdistämään tapahtuman osallistujat WordPress-käyttäjiin tai tunnettuihin yhteystietoihin.
- **Ihmisen hyväksyntäportit** keskeyttävät arkaluonteiset toimet, kunnes valtuutettu käyttäjä tarkistaa ja vahvistaa ne.
- **Muistutustietueet** estävät päällekkäiset ilmoitukset, kun ajastetut työt yrittävät uudelleen tai toistuvat.
- **TextBee SMS -ilmoitukset** lähettävät määritettyjä tekstiviestejä vain, kun SMS-tunnistetiedot ja työnkulun käyttöoikeudet ovat käytössä.

Suositeltu työnkulku: pyydä agenttia valmistelemaan viesti tai toiminto, tarkista hyväksyntäkehote ja salli sitten hyväksytyn toiminnon jatkua. Toistuvissa muistutuksissa pidä muistutusten duplikaattien poisto käytössä, jotta samalle tapahtumalle tai yhteystiedolle ei ilmoiteta toistuvasti.

---

## Agenttien mukauttaminen {#customising-agents}

Jokaista sisäänrakennettua agenttia voi laajentaa tai sen voi korvata `gratis_ai_agent_agents`-suodattimen kautta.

### Mukautetun järjestelmäkehotteen lisääminen olemassa olevaan agenttiin {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Uuden agentin rekisteröinti {#registering-a-new-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Uusi agentti ilmestyy Agenttivalitsimeen heti suodattimen suorittamisen jälkeen.

### Sisäänrakennetun agentin poistaminen {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
