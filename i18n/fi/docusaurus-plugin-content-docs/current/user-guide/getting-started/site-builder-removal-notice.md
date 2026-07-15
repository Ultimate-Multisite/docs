---
title: Sivuston rakentamisen tilan poistominen ilmoitus
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Sivustiedonrakennusmuodon poistomääräys

**Sivustotiedonrakennusmalli on poistettu Superdav AI Agent v1.12.0:ssa.** Jos käytit sivustotiedonrakennusmallia, sinun tulee siirtyä **Setup Assistant -agenttiin** teemojen luomiseen ja sivuston asetteluun.

## Mitä tapahtui? {#what-happened}

### Sivustotiedonrakennusmalli (Vanha versio) {#site-builder-mode-legacy}

Sivustotiedonrakennusmalli oli ohjekirjasto-pohjainen käyttöliittymä seuraaville tehtäville:

- Sivustojen luominen malleista
- Perusasetusten konfigurointi
- Teeman valinta
- Alkuperäisen sisällön asettelu

### Mitä sen tilalle on tullut? {#what-replaced-it}

**Setup Assistant -agentti** hoitaa nyt kaikki sivustotiedonrakennusmallin toiminnot seuraavasti:

- Joustavampi, agenttilla ohjattu asennus
- Paremmat teeman muokkausvaihtoehdot
- Teemojen rakentamisen (Theme Builder) sisäänpääsyyn integrointi
- Jatkuva sivustotiedon (`site_brief`) muisti tulevia istuntoja varten

## Jos käytit Sivustotiedonrakennusmallia {#if-you-were-using-site-builder-mode}

### Sivustosi ovat turvassa {#your-sites-are-safe}

- Sivustot, jotka luotiin käyttäen Sivustotiedonrakennusmallia, jatkavat toimimista
- Ei datan menetyksiä tai sivuston häiriöitä
- Voit jatkaa sivustojesi hallintaa normaalisti

### Siirry Setup Assistant -agenttiin {#migrate-to-setup-assistant-agent}

Uusien sivustojen asennukseen tai teemojen muutoksiin käytä Setup Assistant -agenttia:

```
"Help me set up a new site"
```

tai

```
"Start the Theme Builder onboarding"
```

Setup Assistant -agentti tarjoaa saman toiminnallisuuden joustavammalla tavalla.

## Vertailu: Sivustotiedonrakennusmalli vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Ominaisuus | Sivustotiedonrakennusmalli (Poistettu) | Setup Assistant (Uusi) |
|---|---|---|
| Asetusmenetelmä | Ohjekirjasto-lomake | Agenttikeskustelu |
| Teeman valinta | Ennakkoluulut mallit | Mukautettu luominen |
| Muokkausmahdollisuudet | Rajoitetut vaihtoehdot | Täysi suunnittelujärjestelmä |
| Sivustotiedon (Site brief) tallennus | Ei tallennettu | Jatkuva muisti |
| Tulevat istunnot | Toistettu asennus | Käytä tallennettua site_briefia |
| Joustavuus | Kiinteä työnkulku | Soveltuva keskustelu |

## Siirtyminen Setup Assistant -agenttiin {#migrating-to-setup-assistant-agent}

### Uusille sivuille {#for-new-sites}

Vai Site Builder -tilaa:

1. Pyydä apua uuden sivuston asennukseen
2. Asennusassistentti-agent ohjaa sinua läpi seuraavat asiat:
   - Sivuston tarkoitus ja tavoitteet
   - Kohdeyleisö
   - Brändin identiteetti
   - Teeman luominen
   - Aluksi asetusten määritys

### Olemassa oleville sivuille {#for-existing-sites}

Jos sinulla on olemassa oleva sivu Site Builder -tilasta:

1. Voit jatkaa sen käyttöä sellaisena kuin se on
2. Teeman päivittämiseksi pyydä: "Redesign my site" (Muotoile sivustoni uudelleen)
3. Asennusassistentti-agent auttaa sinua luomaan uuden teeman
4. Sivustodatan pysyy muuttumattomana

### Teemojen muutoksi {#for-theme-changes}

Site Builder -tilan sijaan:

1. Pyydä: "Change my theme" (Muuta teemaani)
2. Asennusassistentti-agent:
   - Kysyy sinulle suunnittelun mieltymyksistäsi
   - Luo räätälöidyn teeman
   - Aktivoi sen sivustollasi

## Keskeiset erot {#key-differences}

### Site Builder Mode (Sivuston rakentamisohjelmoiminen) {#site-builder-mode}

```
1. Valitse malli
2. Valitse teema
3. Aseta perusasetukset
4. Valmis
```

### Setup Assistant Agent (Asennusassistentti-agentti) {#setup-assistant-agent}

```
1. Kuvaile sivustosi tarkoitus
2. Määrittele kohdeyleisösi
3. Valitse suunnittelumieltymykset
4. Agent luo räätälöidyn teeman
5. Agent aktivoi teeman
6. Sivuston tiivistelmä tallennetaan tulevia istuntoja varten
```

## Setup Assistant Agentin edut {#benefits-of-setup-assistant-agent}

### Joustavampi {#more-flexible}

- Kuvaile sivustosi luonnollisella kielellä
- Saat räätälöityjä suosituksia
- Sovitaan omiin tarpeisiisi

### Parempi räätälöinti {#better-customization}

- Räätälöidyn teeman luominen
- Suunnittelujärjestelmän päätökset (Design system decisions)
- Jatkuvat suunnittelutunnisteet (Persistent design tokens)

### Jatkuva muisti {#persistent-memory}

- Sivuston tiivistelmä (`site_brief`) tallennetaan
- Tulevat agentit ymmärtävät sivustosi
- Ei tarvetta toistaa asennusasiakirjaa

### Integroitu työnkulku {#integrated-workflow}

- Teeman rakentaminen (Theme Builder onboarding)
- Suunnittelujärjestelmän esteettinen taito (Design System Aesthetics skill)
- Näkyvyyshallintatoiminnot (Ability Visibility controls)
- Kaikki toimivat saumattomasti yhdessä

## Ongelmanratkaisu {#troubleshooting}

### En löydä Site Builder -tilaa {#i-cant-find-site-builder-mode}

Site Builder -tila on poistettu. Käytä sen sijaan Setup Assistant Agentia:

"Autaudu uuden sivuston asennus"

### Haluan luoda sivuston uudelleen Site Builderista {#i-want-to-recreate-a-site-from-site-builder}

Voit tehdä tämän Setup Assistant -agentin avulla:

1. Pyydä: "Autaudu minua asettamaan uuden sivuston" (Help me set up a new site)
2. Kuvaile alkuperäisen sivustosi tarkoitus ja ulkoasu
3. Agentti luo sinulle samankaltaisen teeman
4. `site_brief` tallennetaan tulevaa viittausta varten

### Olemassa oleva Site Builder -sivusto ei toimi {#my-existing-site-builder-site-isnt-working}

Site Builder -tavalla luodut sivustot jatkavat toimimista. Jos kohtaat ongelmia:

1. Tarkista, että teemasi on edelleen aktiivinen
2. Varmista, että lisäosasi (plugins) ovat päällä
3. Tarkista WordPressin virhesivuja (error logs)
4. Ota yhteyttä tukeen, jos ongelmat jatkuvat

### Voinko käyttää vanhoja Site Builder -mallineja? {#can-i-still-use-my-old-site-builder-templates}

Site Builder -mallit eivät ole enää saatavilla. Kuitenkin:

- Olemassa olevat sivustosi jatkavat toimimista
- Voit luoda samankaltaisia sivustoja Setup Assistant -agentin avulla
- Setup Assistant -agentti tarjoaa enemmän räätälöintimahdollisuuksia

## Seuraavat askeleet {#next-steps}

1. **Uusille sivuille**: Käytä Setup Assistant -agenttia
2. **Olemassa oleville sivuille**: Jatka käyttämään niitä sellaisina
3. **Teeman muutoksi**: Pyydä apua Setup Assistant -agentilta
4. **Suunnittelun hienosäätöön**: Käytä Design System Aesthetics -taitoa

## Aiheeseen liittyvät aiheet {#related-topics}

- **Theme Builder Onboarding**: Ohjattu asennus räätälöityihin teemoihin
- **Setup Assistant Agent**: Agentin ohjaama sivuston asennus
- **Site Specification Skill**: Määrittele sivustosi tavoitteet ja yleisö
- **Design System Aesthetics Skill**: Hienosäädä sivustosi visuaalista identiteettiä
