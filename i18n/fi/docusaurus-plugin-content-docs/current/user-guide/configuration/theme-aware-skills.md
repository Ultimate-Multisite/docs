---
title: Teemavetoiset taidot
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Teemästyne taitot {#theme-aware-skills}

Superdav AI Agent v1.10.0 sisältää neljä uutta teemäkohteen tietoon perustuvaa (theme-aware) sisäänrakennettua taitoa, jotka sopeutuvat automaattisesti aktiiviseen WordPress-teemaasi. Nämä taidot tarjoavat erikoistunutta ohjausta ja kykyjä, jotka on räätälöity teeman arkkitehtuuriin ja ominaisuuksiin.

## Mitkä ovat teemäkohteen tietävät taidot? {#what-are-theme-aware-skills}

Teemäkohteen tietävät taidot ovat valmiiksi konfiguroituja tietokantoja ja työkaluja, joita AI-assistentti valitsee automaattisesti sen perusteella, mikä WordPress-teema on tällä hetkellä aktiivinen sivustollasi. Kun vaihdat teemoja, asistentin saatavilla olevat taidot päivittyvät automaattisesti – ei tarvita manuaalista konfigurointia.

Jokainen taito sisältää:

- **Teemäkohtaisia dokumentaatioita** — ohjeita teeman käytöstä ja muokkaamisesta
- **Lohkojen ja mallien viittauksia** — saatavilla olevat lohkot, mallit ja suunnitteluvaihtoehdot
- **Muokkausesimerkkejä** — koodinpätkiä ja konfiguraatiomalleja yleisiin tehtäviin
- **Paras käytäntöjä** — suosituksia teeman arkkitehtuurille ja työnkululle

## Saatavilla olevat teemäkohteen tietävät taidot {#available-theme-aware-skills}

### Lohkot-teemat (Block Themes) {#block-themes}

**Soveltuu:** Teemoille, jotka käyttävät WordPressin lohkoperustista (Full Site Editing) arkkitehtuuria.

Lohkot-teen taito tarjoaa ohjeita:

- Mallien luomiseen ja muokkaamiseen lohkoeditorilla
- Lohkokuvioiden ja uudelleenkäytettävien lohkojen kanssa työskentelyyn
- Globaalien tyylien ja theme.json -asetusten muokkaamiseen
- Teemojen lohkojen ja variaatioiden käyttöön
- Oma lohkot mallien rakentamiseen sivustollesi

**Aktivoituu automaattisesti, kun:** Aktiivinen teema on lohko-teema (tuki `block-templates`-ominaisuudelle).

### Klassiset teemat (Classic Themes) {#classic-themes}

**Soveltuu:** Perinteisiin WordPress-teemoihin, jotka käyttävät PHP-mallinnuksia ja klassista editoria.

Klassisten teemojen taito tarjoaa ohjeita:

**Työskentely PHP-mallipohjien ja hookien kanssa**
**Teeman ulkoasun muokkaaminen Customizerin avulla**
**Widget-alueiden ja sivupalkkien käyttö**
**CSS:n muokkaaminen ja child theme -kehitys**
**Teeman hierarkian ja mallitunnisteiden ymmärtäminen**

**Aktivoituu automaattisesti, kun:** Aktiivinen teemasi on klassinen (ei-block) teema.

### Kadence Blocks {#kadence-blocks}

**Soveltuu:** Sivuille, joilla käytetään Kadence Blocks -lisäosa edistettava blockien perusteista suunnittelua varten.

Kadence Blocks -taito tarjoaa ohjeita:

*   Kadencen edistyneen blockikirjaston (Hero, Testimonials, Pricing jne.) käyttämisestä
*   Kadence-blockasetusten ja responsiivisten vaihtoehtojen konfiguroinnista
*   Kadencen ruudukon ja container-blockien avulla räätälöityjen asettelujen rakentamisesta
*   Kadence Blocks -elementtien integroimisesta teemaasi kanssa
*   Kadencen suunnittelujärjestelmän ja valmiiden asetusten hyödyntämisestä

**Aktivoituu automaattisesti, kun:** Kadence Blocks -lisäosa on aktiivinen sivustollasi.

### Kadence Theme {#kadence-theme}

**Soveltuu:** Sivuille, joilla käytetään Kadence-teemaa blockien perusteiseen suunnitteluun ja muokattavuuteen.

Kadence Theme -taito tarjoaa ohjeita:

*   Kadencen teeman muokkaamisesta globaalien tyylien ja theme.json-tiedoston avulla
*   Kadencen sisäänrakennettujen blockimallien ja mallien käytöstä
*   Kadence-teeman asetusten ja vaihtoehtojen konfiguroinnista
*   Kadencen suunnittelujärjestelmän avulla räätälöityjen suunnitelmien rakentamisesta
*   Kadencen integroimisesta suosittuihin lisäosiin ja työkaluihin

**Aktivoituu automaattisesti, kun:** Kadence-teema on aktiivinen teemasi.

## Miten taidot valitaan {#how-skills-are-selected}

Apulaisohjelma havaitsee automaattisesti aktiivisen teeman ja asennetut lisäosat jokaisen viestin yhteydessä. Jos saatavilla on vastaava teemaa tunnistava taito, se ladataan automaattisesti apulaisohjelman kontekstiin. Sinun ei tarvitse aktivoida tai vaihtaa taitoja manuaalisesti.

### Useat taidot {#multiple-skills}

Jos useassa on useita taitoja sivustollasi (esimerkiksi jos käytät sekä Kadence Blocks -moduulia että Kadence Theme -teemaa), avustaja pääsee käsiksi kaikkiin sovellettaviin taitoihin ja voi viitata ohjeisiin jokaisesta.

### Teemojen vaihtaminen {#switching-themes}

Kun vaihdat aktiivista teemaasi, avustajan saatavilla olevat taidot päivittyvät automaattisesti seuraavassa viestissä. Esimerkiksi:

1. Käytät moduuliteemaa ja **Block Themes** -taito on aktiivinen.
2. Vaihdat klassiseen teemaan.
3. Seuraavassa viestissä **Classic Themes** -taito latautuu automaattisesti, ja **Block Themes** -taito ei ole enää käytettävissä.

## Teemojen tietoisia taitojen käyttö {#using-theme-aware-skills}

Hyödynnät teemajasi tiedostavan taidon yksinkertaisesti kuvaamalla, mitä haluat tehdä keskusteluohjelmassa. Avustaja viittaa automaattisesti asianmukaisen taidon ohjeisiin.

### Esimerkkejä kehotteista {#example-prompts}

**Moduuliteemoille:**
> "Luo hero-osio taustakuvillla ja keskitetulla tekstillä käyttämällä moduulin malleja."

**Klassisille teemoille:**
> "Lisää räätälöity widgetialue sivupalkkiin lapsiteeman avulla."

**Kadence Blocks -moduulille:**
> "Rakenna todistusosio Kadencen Testimonials -moduulia käyttäen."

**Kadence Theme -teemalle:**
> "Muokkaa yläpalkin asettelua ja navigointivalikon tyyliä."

Avustaja antaa teemaan ja moduuleihin räätälöityjä ohjeita ja koodiesimerkkejä, jotka sopivat aktiiviseen teemaasi ja laajennuksiisi.

:::note
Teemajasi tiedostavat taidot ovat käytettävissä Superdav AI Agent v1.10.0 ja sitä uudemmissa versioissa automaattisesti. Lisäasetuksia tai konfiguraatiota ei tarvita.
:::
