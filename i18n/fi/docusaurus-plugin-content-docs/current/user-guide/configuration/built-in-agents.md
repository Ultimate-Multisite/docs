---
title: Sisäänrakennetut agentit
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Sisäänrakennetut agentit

Gratis AI Agent v1.9.0 sisältää viisi sisäänrakennettua agenttia, joista jokainen on valmiiksi konfiguroitu tietyllä työkalupakettia, räätälöityä järjestelmäohjetta ja aloitusehdotuksia, jotka vastaavat yleisiin tehtäviin kyseisellä alueella. Agenttien vaihtaminen muuttaa sitä, mitä asistentti voi tehdä ja miten se vastaa — ilman että sinun tarvitsee tehdä mitään asetuksia.

## Mitä agentti on?

Jokainen agentti on nimetty konfiguraatioprofiili, joka yhdistää:

- **Työkalut (Tools)** — kyvyt, joita agentilta sallitaan käyttää (esim. Sisältökirjailijalla on pääsy julkaisutoimintoihin; Suunnittelustudiolla on pääsy CSS- ja theme.json -toimintoihin).
- **Järjestelmäohje (System prompt)** — ohjeet, jotka määrittävät agentin sävyn, prioriteetit ja rajoitukset.
- **Ehdotukset (Suggestions)** — valmiiksi kirjoitettuja kehotteita, jotka näytetään chatin käyttöliittymässä auttaakseen sinua aloittamaan nopeasti.

## Agenttivalikon avaaminen

1. Avaa **Gratis AI Agent** -paneeli WordPressin hallintapalkissa.
2. Napsauta **agenttikuvaketta** keskustelupalkin vasemmassa yläkulmassa (kuvake muuttuu vastaamaan aktiivista agenttia).
3. **Agenttivalikko (Agent Picker)** avautuu lomake-taulukko-overlayna. Jokainen agentti on lueteltu kuvakkeellaan, nimellä ja yhden rivin kuvauksella.
4. Napsauta agenttiriviä aktivoitaksesi sen. Chat-palkki päivittyy välittömästi.

Voit myös vaihtaa agentteja keskustelun aikana — uuden agentin järjestelmäohje astuu voimaan seuraavasta viestistä lähtien.

## Viisi sisäänrakennettua agenttia

### Sisältökirjailija (Content Writer)

**Fokus:** Postauksen, sivun ja yhteystietolomakkeen luominen ja muokkaaminen.

**Saatavilla olevat työkalut:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Mitä se tekee hyvin:**
- Blogipostien luominen ja julkaiseminen lyhyestä tiedosta tai suunnitelmasta
- Uuden sivuston sivuille erillisten sivujen (landing pages) luominen joukkona
- Yhteydenottolomakkeiden ja yhteydenottopyyntöjen rakentaminen
- Esikatselukuvan asettaminen postauksiin URL:stä tai hakutuloksista

**Aloitusehdotuksia:**
- *Kirjoita 500 sanan blogipostaus WordPress multisite -ominaisuuksien eduista.*
- *Luo Tietoa meistä, Palvelut ja Yhteystiedot -sivut ja julkaise ne.*
- *Lisää varaustilauksen yhteydenottolomake Yhteystietosivulle.*

---

### Sivuston rakentaja (Site Builder)

**Tarkoitus:** Kokonaisvaltainen verkkosivuston luominen yhdestä ohjeesta.

**Saatavilla olevat työkalut:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Mitä se tekee hyvin:**
- Luodaan monivaiheinen sivuston rakennussuunnitelma kuvatusta yritystyypistä
- Jokainen vaihe suoritetaan itsenäisesti — rakenne, sisältö, navigointi, ulkoasu
- Virheiden käsittely suunnittelun aikana ilman manuaalista puuttumista
- Suositellut pluginit asennetaan rakennuksen osana
- Yhteydenottolomakkeet luodaan suoraan chat-rajapinnan kautta (Superdav AI Agent v1.10.0+)

**Aloitusehdotuksia:**
- *Rakenna valokuva-albumisivusto galleriaportityyppillä, varaussivulla ja yhteydenottolomakkeella.*
- *Luo ravintolayritysverkkosivusto online-valikolla, aukioloajoilla ja pöytävarauksen yhteydenottolomakkeella.*
- *Aseta vapaaehtoiskonsultointisivusto palvelusivuilla, portfolio-osiolla ja blogilla.*
- *Lisää yhteystiedotlomake Yhteystietosivulle käyttämällä sivuston rakentajaa.*

---

### Suunnittelustudio (Design Studio)

**Tarkoitus:** Visuaalinen räätälöinti — värit, typografia, CSS ja lohkojen mallit.

**Saatavilla olevat työkalut:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Mitä se tekee hyvin:**
- Nimeistettujen teemapresettien (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) soveltaminen.
- Globaalin typografian ja väripalettien hienosäätö `theme.json` -asetusten avulla.
- Brändikohtaisi ylivoimaisuusohjelmien (CSS) lisääminen.
- Sivun kuvakaappauksen ottaminen ja sen suunnittelua varten tarkistaminen ongelmien varalta.

**Aloitusehdotuksia:**
- *Sovella warm-editorial -presetä ja aseta ensisijainen väri #2d6a4f:ksi.*
- *Ota kuvakaappaus etusivusta ja kerro, mitä voisit parantaa.*
- *Luo uudelleenkäytettävä hero block pattern, jossa on koko sivun leveys oleva taustakuva ja keskitetty otsikko.*

---

### Plugin Manager (Lisäosien hallinta)

**Fokus:** WordPress-lisäosien löytäminen, asennus ja hallinta.

**Saatavilla olevat työkalut:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Mitä se tekee hyvin:**
- Suositella parasta lisäosaa kuvaillulle käyttötarkoitukselle.
- Asentaa kyvyyspaketteja rekisteristä.
- Selaa saatavilla olevia kyvyysvalikoita luokittain.

**Aloitusehdotuksia:**
- *Mikä on paras lisäosa jäsenrekisterille?*
- *Asenna WooCommerce -kyvyyspaketti.*
- *Näytä minulle kaikki saatavilla olevat verkkokauppakyvyyspaketit.*

---

### Support Assistant (Tukiasiantuntija)

**Fokus:** Kysymysten vastaaminen sivuston sisällöstä, asetuksista ja WordPress-konfiguraatiosta.

**Saatavilla olevat työkalut:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Mitä se tekee hyvin:**
- Nykyisten sivuston asetusten ja vaihtoehtojen etsiminen.
- Post-tyyppien, taksonomioiden ja valikoiden määrittely sivustolla.
- "Mitä tämä asetuksella tehdään?" -kysymysten vastaaminen reaaliaikaisten arvojen lukemalla.
- Muutosten tekemisen edessä luettava diagnostiikka-kerros (read-only).

**Aloitusviestit:**
- *Mitkä pluginit ja asetukset ovat tällä sivustolla aktiivisia?*
- *Listaa kaikki tällä sivustolla rekisteröityt räätälöidyt post-tyypit.*
- *Mitkä navigointivalikot ovat olemassa ja mihin ne on määritetty?*

---

## Agenttien muokkaaminen (Customising Agents)

Jokainen sisäänrakennettu agentti voidaan laajentaa tai korvata `gratis_ai_agent_agents` -suodattimella.

### Omien järjestelmäpromptin lisääminen olemassa olevalle agentille

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Uuden agentin rekisteröiminen

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

Uusi agentit ilmestyy välittöisesti Agent Picker -valitsimeen suodattimen suorittamisen jälkeen.

### Sisäänrakennetun agentin poistaminen

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
