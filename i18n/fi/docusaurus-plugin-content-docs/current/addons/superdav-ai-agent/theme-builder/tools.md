---
title: Työkalut ja määritykset
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Työkalut ja määritys

Theme Builder käyttää joukkoa työkaluja WordPress-sivustosi analysointiin, suunnitteluun ja rakentamiseen. Versiossa 1.16.0 **sd-ai-agent/site-scrape on nyt tason 1 työkalu**, joten se on oletuksena käytettävissä Theme Builderissa. Superdav AI Agent v1.18.0 tuo myös erikseen jaeltavan Advanced-kumppanipaketin luotettuihin kehittäjätyönkulkuihin; nämä työkalut eivät ole osa WordPress.org-ydinpakettia, ja ne on asennettava ja valtuutettava erikseen.

## Käytettävissä olevat työkalut

### Tason 1 työkalut (aina käytettävissä)

Tason 1 työkalut ovat oletuksena käytettävissä Theme Builderissa ilman lisämäärityksiä.

#### sd-ai-agent/site-scrape

**Tarkoitus:** Analysoi olemassa olevia verkkosivustoja suunnitteluinspiraation, sisältörakenteen ja toiminnallisuuden poimimiseksi.

**Ominaisuudet:**

- **Verkkosivustoanalyysi** — kerää ja analysoi kilpailijoiden tai inspiraationa toimivien verkkosivustojen tietoja
- **Suunnittelun poiminta** — tunnista värit, fontit ja asettelumallit
- **Sisältörakenne** — ymmärrä sivujen järjestys ja hierarkia
- **Ominaisuuksien tunnistus** — tunnista lisäosat ja toiminnallisuus
- **Suorituskykyanalyysi** — tarkista sivunopeus ja optimointi
- **SEO-analyysi** — tarkista metatunnisteet ja strukturoitu data

**Käyttö:**

```
Analysoi example.com-sivuston suunnittelu ja käytä sitä inspiraationa sivustolleni.
```

**Mitä se poimii:**

- Väripaletti ja värien käyttö
- Typografia (fontit ja koot)
- Asettelurakenne ja välistys
- Navigointimallit
- Sisällön järjestys
- Kuvien ja median käyttö
- Interaktiiviset elementit
- Mobiilivasteisuus

**Rajoitukset:**

- Ei voi kerätä tietoja salasanalla suojatuista sivustoista
- Noudattaa robots.txt-tiedostoa ja sivustokäytäntöjä
- Ei välttämättä tallenna dynaamista sisältöä
- Paljon JavaScriptiä käyttävien sivustojen analyysi voi olla rajallinen
- Suurten sivustojen analysointi voi kestää pidempään

### Tason 2 työkalut (valinnaiset)

Tason 2 työkalut ovat käytettävissä, kun ne otetaan erikseen käyttöön Theme Builderin asetuksissa.

#### Edistynyt analytiikka

Tarjoaa yksityiskohtaisia suorituskykymittareita:

- Sivun latausajat
- Core Web Vitals
- SEO-pisteet
- Saavutettavuuspisteet
- Parhaiden käytäntöjen pisteet

#### Sisällön optimoija

Analysoi ja ehdottaa parannuksia seuraaviin:

- Luettavuus
- SEO-optimointi
- Avainsanojen käyttö
- Sisältörakenne
- Toimintakehotusten sijoittelu

### Tason 3 työkalut (Premium)

Tason 3 työkalut edellyttävät lisämäärityksiä tai premium-ominaisuuksia.

#### AI-sisällöntuottaja

Luo sisältöä seuraaviin:

- Tuotekuvaukset
- Palvelusivut
- Blogikirjoitukset
- Metakuvaukset
- Toimintakehotustekstit

#### Edistyneet suunnittelutyökalut

Tarjoaa edistyneitä suunnitteluominaisuuksia:

- Mukautetun CSS:n luonti
- Animaatioiden luonti
- Interaktiivisten elementtien suunnittelu
- Edistynyt väriteoria
- Typografian optimointi

### Advanced-kumppanityökalut (erillinen paketti)

Advanced-kumppanipaketti jaellaan erillään Superdav AI Agentin ydinjulkaisusta. Se on tarkoitettu luotettuihin kehittäjä- ja sivustonomistajaympäristöihin, joissa ylläpitäjät sallivat erikseen agentin käyttää vaikutukseltaan merkittäviä työkaluja.

Advanced-kumppaniominaisuuksiin voi sisältyä:

- **Tiedostojärjestelmätyökalut** — tarkastele ja muokkaa hyväksyttyjä tiedostoja luotetuissa ympäristöissä
- **Tietokantatyökalut** — tee kyselyitä tai päivitä sivuston dataa, kun se on erikseen valtuutettu
- **WP-CLI-työkalut** — suorita WordPressin ylläpito- ja tarkastuskomentoja
- **REST-välitystyökalut** — kutsu rekisteröityjä REST-päätepisteitä hallittujen välitystyönkulkujen kautta
- **Lisäosien rakennustyökalut** — rakenna runkoja ja iterointia lisäosakoodille
- **Git-tilannekuvatyökalut** — luo tilannekuvia ennen riskialttiita kehittäjätoimintoja
- **Käyttäjähallintatyökalut** — auta tarkistamaan tai säätämään käyttäjätietueita siellä, missä se on sallittu
- **Vertailumittaustyökalut** — suorita suorituskyky- tai kyvykkyysvertailuja kehityskatselmusta varten

Älä dokumentoi näitä yleisesti saatavilla olevina Theme Builder -työkaluina jokaiseen asennukseen. Ne ovat käytettävissä vain, kun Advanced-kumppanipaketti on asennettu, otettu käyttöön ja rajattu luotetuille ylläpitäjille.

## Työkalujen määritys

### Työkalujen käyttöönotto

Lisätyökalujen käyttöönotto Theme Builderissa:

1. Siirry kohtaan **Gratis AI Agent → Settings**
2. Siirry kohtaan **Theme Builder → Tools**
3. Ota työkalut käyttöön tai pois käytöstä tarpeen mukaan
4. Tallenna asetukset

### Työkalujen käyttöoikeudet

Jotkin työkalut edellyttävät käyttöoikeuksia:

- **Sivuston tietojen kerääminen** — edellyttää internetyhteyttä
- **Analytiikka** — edellyttää Google Analytics -integraatiota
- **Sisällön tuottaminen** — edellyttää API-avaimia
- **Edistyneet ominaisuudet** — voivat edellyttää premium-tilausta
- **Advanced-kumppanityökalut** — edellyttävät erikseen jaeltavaa Advanced-pakettia ja ylläpitäjän nimenomaista luottamusta

### API-avaimet ja tunnistetiedot

Määritä API-avaimet niitä edellyttäville työkaluille:

1. Siirry kohtaan **Gratis AI Agent → Settings → API Keys**
2. Syötä tunnistetiedot kullekin työkalulle
3. Testaa yhteys
4. Tallenna turvallisesti

### Advanced-kumppanipaketin asentaminen

Advanced-kumppanipaketti julkaistaan erillään WordPress.org-ydin-ZIPistä. Asenna se vain julkaisun virallisesta projektin jakelukanavasta ja rajaa sitten käyttöoikeus luotetuille ylläpitäjille. Tarkista ihmisen hyväksyntäportit ja git-tilannekuvien toiminta ennen kuin otat tiedostojärjestelmä-, tietokanta-, WP-CLI-, REST-välitys-, lisäosien rakennus-, käyttäjähallinta- tai vertailumittaustyökalut käyttöön tuotantosivustolla.

## sd-ai-agent/site-scrape-työkalun käyttäminen

### Peruskäyttö

Pyydä Theme Builderia analysoimaan verkkosivusto:

```
Analysoi kilpailijani sivuston suunnittelu osoitteessa competitor.com
ja ehdota suunnitteluparannuksia sivustolleni.
```

### Erityinen analyysi

Pyydä tiettyjä analyysityyppejä:

```
Poimi väripaletti osoitteesta example.com ja käytä sitä inspiraationa.
```

```
Analysoi example.com-sivuston navigointirakenne ja käytä samankaltaista
järjestystä sivustollani.
```

```
Tarkista example.com-sivuston mobiilivasteisuus ja varmista, että sivustoni
on yhtä vasteinen.
```

### Vertailuanalyysi

Vertaa useita sivustoja:

```
Vertaa site1.com- ja site2.com-sivustojen suunnittelua ja luo suunnittelu,
joka yhdistää molempien parhaat elementit.
```

## Työkalujen rajoitukset ja huomioitavat asiat

### Nopeusrajoitus

- Scraping on taajuusrajoitettu palvelimen ylikuormituksen estämiseksi
- Useita pyyntöjä samalle sivustolle voidaan hidastaa
- Suurten sivustojen analysointi voi kestää pidempään

### Sisällön tarkkuus

- Dynaamista sisältöä ei välttämättä saada kokonaan talteen
- JavaScript-renderöity sisältö voi olla puutteellista
- Reaaliaikaiset tiedot eivät välttämättä näy
- Osa sisällöstä voi olla maksumuurin takana

### Oikeudelliset ja eettiset näkökohdat

- Kunnioita robots.txt-tiedostoa ja sivuston käytäntöjä
- Älä scrape tekijänoikeuksin suojattua sisältöä uudelleenjulkaisua varten
- Käytä analyysia inspiraationa, älä kopiointiin
- Varmista, että sinulla on oikeudet käyttää poimittua sisältöä
- Noudata analysoitujen sivustojen käyttöehtoja

### Suorituskykyvaikutus

- Suurten sivustojen scraping voi viedä aikaa
- Useat samanaikaiset scrapet voivat olla hitaampia
- Verkkoyhteys vaikuttaa nopeuteen
- Suuret tietojoukot voivat vaatia enemmän käsittelyä

## Parhaat käytännöt

### Sivustoanalyysin käyttö

1. **Analysoi useita sivustoja** — kerää inspiraatiota useista lähteistä
2. **Keskity rakenteeseen** — opi asettelu- ja organisointimalleja
3. **Poimi värit** — käytä väripaletteja lähtökohtina
4. **Tutki typografiaa** — tunnista fonttiyhdistelmiä, joista pidät
5. **Tarkastele navigaatiota** — ymmärrä valikon organisointi

### Eettinen scraping

1. **Kunnioita robots.txt-tiedostoa** — noudata sivuston ohjeita
2. **Älä kopioi sisältöä** — käytä analyysia vain inspiraationa
3. **Varmista oikeudet** — varmista, että voit käyttää poimittua sisältöä
4. **Mainitse lähteet** — anna tunnustus inspiraation lähteille
5. **Noudata ehtoja** — noudata sivuston käyttöehtoja

### Työkalun tehokkuuden maksimointi

1. **Ole täsmällinen** — pyydä tietyn tyyppisiä analyysejä
2. **Anna konteksti** — selitä sivustosi tarkoitus
3. **Aseta odotukset** — kuvaile suunnittelutavoitteesi
4. **Iteroi** — tarkenna tulosten perusteella
5. **Yhdistä työkaluja** — käytä useita työkaluja kattavaan analyysiin

## Vianmääritys

### Sivustoa ei voi scrape

- Tarkista, onko sivusto julkisesti saatavilla
- Varmista, että robots.txt sallii scrapingin
- Kokeile toista sivustoa
- Tarkista internet-yhteys
- Ota yhteyttä tukeen, jos ongelma jatkuu

### Puutteellinen analyysi

- Sivustolla voi olla dynaamista sisältöä
- JavaScript ei välttämättä renderöidy kokonaan
- Suuret sivustot voivat aikakatkaista
- Kokeile analysoida sen sijaan tiettyjä sivuja
- Pyydä tiettyjä analyysityyppejä

### Hidas suorituskyky

- Suurten sivustojen analysointi kestää pidempään
- Useat samanaikaiset scrapet ovat hitaampia
- Verkkoyhteys vaikuttaa nopeuteen
- Kokeile ruuhka-aikojen ulkopuolella
- Analysoi ensin pienempiä osioita

## Aiheeseen liittyvä dokumentaatio

- [Discovery Interview](./discovery-interview.md) — kerää suunnittelutietoja
- [Design Direction](./design-direction.md) — tarkenna suunnitteluasi
- [Hospitality Menus](./hospitality-menus.md) — luo valikkosivuja
