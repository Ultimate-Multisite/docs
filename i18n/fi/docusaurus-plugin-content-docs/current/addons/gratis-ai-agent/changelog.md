---
title: Muutosloki
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Muutosloki

## 1.9.0 — Julkaistu 2026-04-28

### Uutta

- **`create_contact_form`-toiminto** — luo yhteydenottolomakkeen käyttäen aktiivista lomake-pluginia (Contact Form 7, WPForms, Fluent Forms tai Gravity Forms) ja palauttaa shortcoden, joka on valmis upotettavaksi mihin tahansa artikkeliin tai sivuun.
- **`set_featured_image`-toiminto** — määrittää artikkelille tai sivulle artikkelikuvan olemassa olevan Media Library -liitteen ID:stä tai etä-URL:stä; tuo kuvan automaattisesti, kun URL annetaan.
- **`batch_create_posts`-toiminto** — luo useita artikkeleita yhdellä toimintokutsulla. Tukee samoja parametreja kuin `create_post`, raportoi onnistumisen/epäonnistumisen artikkelikohtaisesti ja sisältää valinnaisen `stop_on_error`-tilan.
- **`page_template`-parametri** — lisätty toimintoihin `create_post` ja `update_post`. Määrittää PHP-sivupohjatiedoston (esim. `page-full-width.php`) luonnin tai päivityksen yhteydessä. Anna tyhjä merkkijono toiminnolle `update_post`, jos haluat palauttaa theme-oletuksen.
- **Asiakaspuolen kuvakaappaustoiminnot** — `capture_screenshot`, `compare_screenshots` ja `review_page_design`. Ota koko sivun tai näkymän kuvakaappauksia live-sivuista palvelinpuolen headless-selaimen kautta, vertaile kahta kuvakaappausta ja hanki AI:n luoma suunnitteluarvio, joka kattaa asettelun, typografian, värit ja saavutettavuuden.
- **Viisi sisäänrakennettua agenttia** — Sisällön kirjoittaja, Sivuston rakentaja, Design Studio, Plugin-hallinta ja Tukiassistentti. Jokaisella agentilla on oma työkalujoukkonsa, räätälöity järjestelmäkehote ja aloitusehdotukset. Vaihdettavissa chat-otsikon uudella **Agentin valitsimella**. Katso [Sisäänrakennetut agentit](../../user-guide/configuration/built-in-agents).
- **Ominaisuusliput** — uusi **Asetukset → Ominaisuusliput** -välilehti, jossa on käyttöoikeuksien hallintavalinnat (rajoita ylläpitäjiin, rajoita verkon ylläpitäjiin, tilaajien käyttöoikeus, poista käytöstä muilta kuin jäseniltä) ja brändäysasetukset (piilota alatunnisteen attribuutio, mukautettu agentin nimi, piilota agentin valitsin, käytä sivuston kuvaketta chat-avatarina). Katso [Gratis AI Agent -asetukset](../../user-guide/administration/gratis-ai-agent-settings).
- **Palauta viimeisin istunto** — chat-paneeli lataa nyt viimeisimmän keskustelun automaattisesti sivun latautuessa ja widgetin avautuessa, joten konteksti ei koskaan katoa sivusiirtymien välillä.
- **Pluginin toimintolinkit** — pikalinkit asetuksiin ja toimintorekisteriin näkyvät nyt WordPressin **Pluginit → Asennetut pluginit** -näkymässä pluginin kuvauksen alapuolella.

### Parannettu

- **Kuvalähteen uudelleenyritys** — agentti yrittää nyt kaikkia määritettyjä ilmaisia kuvalähteitä uudelleen ennen kuin se palaa AI:n luomaan kuvaan latausvirheen sattuessa.
- **Mallin tietopaneeli** — näkyy aina chat-otsikossa; sitä ei enää piiloteta ensimmäisen viestin jälkeen.
- **Automaattisen vierityksen toiminta** — automaattinen vieritys keskeytyy, kun käyttäjä vierittää ylöspäin lukeakseen; kelluva **Vieritä alas** -painike tulee näkyviin ja poistuu automaattisesti, kun käyttäjä saavuttaa uusimman viestin.
- **Agentin valitsimen käyttöliittymä** — uudistettu lomaketaulukko-peittokuvaksi, jossa on agenttikohtaiset kuvakkeet, mikä helpottaa agenttien tunnistamista ja vaihtamista yhdellä silmäyksellä.
- **Laiskasti ladattavat JS-osat** — chat-widgetin alkuperäinen JavaScript-paketti on nyt jaettu laiskasti ladattaviin osiin, mikä pienentää alkuperäisiä pakettikokoja 75–90 %.
- **Chat-widgetin uudistus** — yhtenäinen AI-kuvake korvaa aiemman mukautetun avatarin; yhdenmukainen sisäänrakennetun agenttijärjestelmän kanssa.
- **URL-linkitys** — järjestelmäviesteissä ja virheviestikuplissa näkyvät URL:t renderöidään nyt klikattavina linkkeinä.

### Korjattu

- **Toimintojen löydettävyys** — kuvaukset, järjestelmäkehotteen viittaukset ja namespace-kohdistus korjattu, jotta kaikki toiminnot näkyvät luotettavasti agentin työkaluluettelossa.
- **Palveluntarjoajien välimuisti** — palveluntarjoajat välimuistitetaan nyt sivuston laajuisesti versiolasurin kautta, mikä estää vanhentuneiden palveluntarjoajien ongelmat multisite-verkoissa.
- **`ability_invalid_output`** — ratkaistu 12 toimintokäsittelijässä; kaikki palauttavat oikein jäsennellyt JSON-vastaukset.
- **`pending_client_tool_calls`-putki** — kytketty alusta loppuun, jotta asiakaspuolen työkalukutsut valmistuvat oikein ja palauttavat tulokset mallille.
- **Historialaatikko** — muutokset, joita ei voi palauttaa, suljetaan pois palautusluettelosta; **Näytä koko historia** -linkki toimii nyt oikein.
- **Muutokset/palautusjärjestelmä** — viisi erillistä bugia korjattu ja yhdistetty uuden admin-käyttöliittymän alle.
- **Tallenna asetukset -toast** — snackbar-ilmoitus näkyy nyt luotettavasti, kun **Tallenna asetukset** -painiketta klikataan.
- **Roskakorin kontekstivalikko** — lisätty **Poista pysyvästi** -vaihtoehto, jotta kohteet voidaan poistaa lopullisesti poistumatta roskakorinäkymästä.
- **Muokkaa ja lähetä uudelleen** — muokkauskuvakkeen klikkaaminen siirtyy nyt muokkaustilaan vain klikatun viestin osalta, ei kaikkien ketjun viestien.
- **Chat-asettelun korkeus** — chat-paneeli mukauttaa korkeutensa, kun pluginin lisäämää sisältöä (admin-ilmoituksia, bannereita) näkyy sivun yläpuolella, mikä estää syöttöalueen työntymisen pois näytöltä.

---

## 1.4.0 — Julkaistu 2026-04-09

### Uutta

- **WP-CLI benchmark command** (`wp gratis-ai-agent benchmark`) — suorittaa Agent Capabilities v1 benchmark suite -testikokonaisuuden komentoriviltä CI-putkia ja mallien arviointityönkulkuja varten. Tukee kysymyskohtaisia ajoja, tarjoajan/mallin ohituksia sekä JSON/CSV-tulostusta.
- **Agent Capabilities v1 benchmark suite** — jäsennelty joukko monimutkaisia, monivaiheisia kehotteita, jotka testaavat koko kyvykkyyspinnan, pisteytyksen sekä tokenien/keston raportoinnin kanssa.
- **Mukautetun sisältötyypin kyvykkyydet** — `register_post_type`, `list_post_types`, `delete_post_type`. Rekisteröinnit säilyvät uudelleenkäynnistysten yli options-taulun kautta.
- **Mukautetun taksonomian kyvykkyydet** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Tukee hierarkkisia ja litteitä taksonomioita valinnaisilla rewrite-slug-tunnisteilla.
- **Design System -kyvykkyydet** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Sisältää viisi kuratoitua esiasetusta: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Global Styles -kyvykkyydet** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Lukee ja kirjoittaa theme.json-arvoja WordPress Global Styles API:n kautta.
- **Navigaatiovalikon hallintakyvykkyys** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Tukee sisäkkäisiä valikoita ja teeman sijainnin määritystä.
- **Asetusten hallintakyvykkyys** — `get_option`, `set_option`, `delete_option`, `list_options`. Sisältää sisäänrakennetun turvaestolistan, joka suojaa kriittisiä WordPress-asetuksia muokkaukselta.
- **Asennettavien kyvykkyyksien rekisteri** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Löydä ja aktivoi kyvykkyyspaketteja, joita jaetaan WordPress-plugineina.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Monivaiheiset sivuston rakennussuunnitelmat, joissa on pluginien löytö, vaiheiden tulosviittaukset, edistymisen seuranta ja autonominen virheistä palautuminen.
- **Ravintolasivuston benchmark-kysymys** (`q-restaurant-website`) — päästä päähän -testi, joka kattaa CPT-rekisteröinnin, design systemin, navigaation ja pluginien löytämisen.
- **AI-tarjoajan liitinpluginit** lisätty WordPress Playground -blueprinteihin nopeampaa paikallisen kehityksen asetusta varten.

### Parannettu

- README päivitetty AI-tarjoajan liittimien dokumentaatiolla ja asennusohjeilla.

### Korjattu

- 25 PHPUnit-testivirhettä `main`-haarassa ratkaistu.
- GitHub-julkaisujen URL-muoto kohdassa `blueprint.json` korjattu.
- Tehtävätunnusten uudelleennumerointi törmäysten välttämiseksi vanhojen tunnusten kanssa.

---

## 1.3.x

_Aiemmat julkaisutiedot ylläpidetään pluginin repositoriossa._
