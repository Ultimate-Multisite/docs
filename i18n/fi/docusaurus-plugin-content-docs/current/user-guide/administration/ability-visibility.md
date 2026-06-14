---
title: Näkyvyysominaisuus
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Mahdollisuuden näkyvyys (Ability Visibility)

Superdav AI Agent v1.12.0 tuo uusia **Mahdollisuuden näkyvyys** -asetuksia, jotka säätelevät, mitkä ominaisuudet (abilities) ovat saatavilla eri käyttöliittymissä. Tämä antaa ylläpitäjille mahdollisuuden hienosäätää, mitkä agentin kyvyt ovat käytettävissä REST API:n, MCP-palvelimien, WooCommerce-integraatioiden ja muiden rajapintojen kautta.

## Mitä Mahdollisuuden näkyvyys on?

Mahdollisuuden näkyvyys on käyttöoikeusjärjestelmä, joka hallitsee seuraavia asioita:

- **Mitkä kyvyt** ovat saatavilla agenteille
- **Missä ne ovat esillä** (REST API, MCP, WooCommerce jne.)
- **Kuka voi käyttää niitä** (kumppanuusluetteloiden kautta)
- **Miten ne luokitellaan** (tunnistetut vs. luokittelemattomat)

Jokaisella kyvyllä on näkyvyysaste, joka määrittää sen saatavuuden eri käyttöliittymissä.

## Näkyvyysasteet

### Julkinen (Public)

**Julkiset kyvyt** ovat käytettävissä kaikkialla:

- REST API -päätepisteet
- MCP-palvelimet
- WooCommerce -integraatiot
- Chat-rajapinnat
- Kaikki käyttäjäroolit (sopivilla oikeuksilla)

Esimerkkejä: `scaffold-block-theme`, `activate-theme`, `send-email`

### Sisäinen (Internal)

**Sisäiset kyvyt** ovat saatavilla vain omassa WordPress-asennuksessasi:

- Chat-rajapinnat
- Admin-paneelit
- Vain kirjautuneet käyttäjät
- Ei esillä REST API:n tai ulkoisten integraatioiden kautta

Esimerkkejä: `manage-settings`, `view-analytics`, `export-data`

### Kumppanuus (Partner)

**Kumppanuuskyvyt** ovat saatavilla vain valitulle kumppaneille:

- Vaatii nimenomaisen kumppanuusluetteloon lisäämisen
- Saatavilla REST API:n kautta kumppanuusluvan avulla
- Saatavilla MCP:llä kumppanuusautentikoinnin avulla
- Ei saatavilla tavallisille käyttäjille

Esimerkkejä: `bulk-import-users`, `modify-billing`, `access-analytics`

### Poistettu käytöstä (Disabled)

**Poistetut kyvyt** eivät ole saatavilla missään:

- Ei esillä mitenkään rajapinnalla
- Ei saatavilla chatin kautta
- Ei saatavilla admin-paneeleissa
- Hyödyllinen vanhentuneille tai kokeellisille kyvyille

## Mahdollisuuden näkyvyyden hallinta

### Mahdollisuuden näkyvyysasetusten avaaminen

1. Mene **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Napsauta välilehteä **Abilities** (Mahdollisuudet)
3. Näet luettelon kaikista asennetuista mahdollistuksista ja niiden näkyvyysasteista

### Mahdollisuuden yksityiskohtien katsominen

Napsauta mitä tahansa mahdollistusta nähdäksesi:

- **Name** (Nimi): Mahdollistuksen tunniste
- **Description** (Kuvaus): Mitä mahdollistus tekee
- **Current visibility** (Nykyinen näkyvyys): Public (Julkinen), Internal (Sisäinen), Partner (Kumppani) tai Disabled (Poissa käytöstä)
- **Partner allow-list** (Kumppanilupa-lista): Mitkä kumppanit voivat päästä käsiksi (jos näkyvyys on Kumppanin tasolla)
- **Last updated** (Viimeisin päivitys): Milloin näkyvyyttä on viimeksi muutettu
- **Status** (Tila): Recognized (Tunnistettu) tai Unclassified (Ei luokiteltu)

### Näkyvyysasteiden muuttaminen

Jotta voit muuttaa mahdollistuksen näkyvyyttä:

1. Napsauta haluamaasi mahdollistusta listalta
2. Valitse uusi näkyvyysaste pudotusvalikosta
3. Jos valitset "Partner", lisää kumppanilupalista tunnisteet (allow-list)
4. Napsauta **Save** (Tallenna)

Esimerkki:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Massatoiminnot

Useiden mahdollistusten näkyvyyden muuttamiseksi:

1. Valitse ruutuja kyseisten mahdollistusten vieressä
2. Valitse uusi näkyvyysaste massatoimintojen pudotusvalikosta
3. Napsauta **Apply** (Sovella)

## Kumppanilupalista (Partner Allow-List)

**Kumppanilupalista** säädellään sitä, mitkä ulkoiset kumppanit voivat päästä käsiksi Kumppanin tasolla oleviin mahdollistuksiin.

### Kumppanien lisääminen

1. Mene **Superdav AI Agent** → **Settings** → **Partners** (Kumppanit)
2. Napsauta **Add Partner** (Lisää kumppani)
3. Syötä kumppanin tunniste (yleensä API-avaimen tai organisaation ID:n)
4. Lisää valinnaisesti kumppanin nimi ja kuvaus
5. Napsauta **Save** (Tallenna)

### Mahdollistusten määrittäminen kumppaneille

Kumppanin lisääsemisen jälkeen:

1. Siir **Abilities** -välilehdelle
2. Etsi ominaisuutta, jolla on Partner visibility (Partnerin näkyvyys)
3. Napsauta muokataksesi sitä
4. "Partner allow-list" -osiossa valitse ruutuja niille kumppaneille, joilla pitäisi olla pääsy
5. Napsauta **Save** (Tallenna)

### Kumppanuuden pääsyn peruuttaminen

Kumppanin pääsyn poistamiseksi:

1. Muokkaa ominaisuutta
2. Poista valintamerkki kumppanille allow-listalta
3. Napsauta **Save** (Tallenna)

Kumppanilla tulee välittömästi menettää pääsy kyseiseen ominaisuuteen.

## Luokittelemattomat ominaisuudet (Unclassified Abilities)

Kun asennat kolmannen osapuolen ominaisuuden, jota Superdav AI Agent ei tunnista, se merkitään **Unclassified** (Luokittelemat).

### Ylläpitäjän huomautus luokittelemattomista ominaisuuksista

Näet ylläpitäjän ilmoituksen:

```
⚠️ Luokittelemattomia ominaisuuksia havaittu

Seuraavat ominaisuudet on asennettu, mutta niitä ei tunnisteta:
- custom-import-tool
- external-api-wrapper

Nämä ominaisuudet voivat aiheuttaa turvallisuus- tai yhteensopivuusriskejä.
Ole hyvä ja tarkista ne ja luokittele ne.

[Review Abilities] [Dismiss] (Tarkista ominaisuuksia) [Hylkää]
```

### Luokittelemattomien ominaisuuksien tarkastelu

1. Napsauta ilmoituksessa **Review Abilities** (Tarkista ominaisuuksia)
2. Jokaisen luokittelemattoman ominaisuuden kohdalla näet:
   - Ominaisuuden nimi ja kuvaus
   - Lähde (mikä plugin/lisäosa asensi sen)
   - Ehdotettu näkyvyystaso
   - Turvallisuustarvike

3. Valitse näkyvyystaso:
   - **Public** (Julkinen): Luota ominaisuuteen; esiin kaikkialla
   - **Internal** (Sisäinen): Rajoita käyttö vain sisäiseen käyttöön
   - **Partner** (Kumppani): Rajoita tiettyihin kumppaneihin
   - **Disabled** (Poistettu käytöstä): Älä käytä tätä ominaisuutta

4. Napsauta **Classify** (Luokittele) tallentaaksesi päätöksesi

### Miksi luokitella luokittelemattomat ominaisuudet?

Ominaisuuksien luokittelu:

- **Parantaa turvallisuutta**: Hyväksyt nimenomaisesti, mitä esitetään
- **Estää onnettomuuksia**: Luokittelemattomat ominaisuudet ovat oletuksena poistettuna käytöstä
- **Mahdollistaa ominaisuudet**: Kun ominaisuus luokitellaan, se tulee saataville
- **Dokumentoi päätökset**: Valintojesi tallennetaan tarkastusta varten

## Näkyvyys eri pinnoilla

### REST API

**Julkiset ominaisuudet** ovat saatavilla REST-rajapintoja kautta:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Sisäiset ja kumppanuusominaisuudet** eivät ole saatavilla REST API:n kautta.

### MCP-palvelimet

**Julkiset ominaisuudet** ovat saatavilla MCP:llä:

```
MCP Server: Superdav AI Agent
Saatavilla olevat ominaisuudet:
- scaffold-block-theme
- activate-theme
- send-email
```

**Sisäisiä ominaisuuksia ei ole esillä MCP:n kautta.**

**Kumppanuusominaisuudet** ovat saatavilla vain kumppanuuskertoimilla.

### WooCommerce -integraatio

**Julkiset ominaisuudet**, jotka liittyvät WooCommerceiin, ovat saatavilla:

- Tuotteen hallinta
- Tilauksen käsittely
- Asiakaspalvelu

**Sisäisiä ominaisuuksia ei ole esillä WooCommerceille.**

### Chat-rajapinta

**Kaikki ominaisuudet** (Julkiset, Sisäiset, Kumppanuus) ovat saatavilla chatin kautta käyttäjän oikeuksien mukaan:

- Ylläpitäjät näkevät kaikki ominaisuudet
- Tavalliset käyttäjät näkevät vain Julkiset ominaisuudet
- Kumppanit näkevät Julkiset + Kumppanuusominaisuudet (jos on luokiteltu)

## Turvallisuusparhaat käytännöt

### Vähiten oikeuksien periaate (Principle of Least Privilege)

- Aseta ominaisuudet mahdollisimman rajoittavaksi näkyvyyteen, joka sallii silti niiden käytön
- Käytä Kumppanuusominaisuuksia arkaluonteisissa operaatioissa
- Poista pois päältä ne ominaisuudet, joita et käytä

### Säännölliset tarkastukset

- Tarkista ominaisuuksien näkyvyyttä kuukausittain
- Tarkista luokittelemattomat ominaisuudet
- Poista pääsy käyttämättömille kumppaneille

### Kirjaukset ja seuranta (Logging and Monitoring)

- Seuraa, mitkä ominaisuudet käytetään eniten
- Seuraa kumppanuuden pääsykuvioita
- Ilmoita poikkeavasta ominaisuuksien käytöstä

### Kolmannen osapuolen ominaisuudet

- Tarkista kolmannen osapuolen ominaisuudet ennen niiden aktivoimista
- Luokittele ne nimenomaisesti
- Aloita Sisäisellä tai Kumppanuusominaisuudella
- Edistele Julkiseen vasta tarkastelun jälkeen

## Ongelmanratkaisu

**Ominaisuus ei näy listalla**
- Tarkista, että ominaisuus on asennettu ja aktiivinen
- Varmista, että plugin/lisäosa on käytössä
- Päivitä sivu

**En pysty muuttamaan ominaisuuden näkyvyyttä**
- Varmista, että sinulla on ylläpitäjän oikeudet (administrator permissions)
- Tarkista, ettei ominaisuus ole lukittu jollakin pluginilla
- Yritä poistaa ristiriitaisia konflikteja aiheuttavia plugin-lisäosia

**Kumppanilla ei pääse käsiksi ominaisuuteen**
- Varmista, että kumppani on sallituissa listalla (allow-list)
- Tarkista, että ominaisuuden näkyvyys on asetettu "Partner" (Kumppani)
- Vahvista, että kumppanin tiedot ovat oikein
- Tarkista API-logit tunnistusvirheiden varalta

**Luokittelemattomat ominaisuudet jatkavat ilmestymistä**
- Tarkastele ja luokittele ne hallintapaneelin ilmoituksissa (admin notice)
- Varmista, että luokittelu on tallennettu
- Tarkista, että ominaisuutta tarjoava plugin on ajan tasalla

## Migraatio vanhasta tilasta (Legacy Mode)

Jos päivität vanhemmasta Superdav AI Agent -versiosta:

- Kaikki olemassa olevat ominaisuudet luokitellaan automaattisesti "Public" (Julkinen)
- Tarkastele ja säädä näkyvyyttä tarpeen mukaan
- Ei tarvitse tehdä mitään, ellei halua rajoittaa pääsyä

Katso **Third-Party Mode Migration** saadaksesi lisätietoja siirtymisestä natiivin Abilities API -integraatioon.

## Seuraavat askeleet

Ominaisuuden näkyvyyden määrittelyn jälkeen:

1. **Tarkastele ominaisuuksiasi**: Auditoi kaikki asennetut ominaisuudet
2. **Luokittele luokittelemattomat ominaisuudet**: Vastaa hallintapaneelin ilmoituksiin
3. **Aseta kumppanit**: Lisää kumppaneita, jos käytät Kumppanin näkyvyyttä (Partner visibility)
4. **Seuraa käyttöä**: Seuraa, mitkä ominaisuudet käytetään eniten
5. **Dokumentoi päätökset**: Pidä muistiinpanoja siitä, miksi valitsit jokaiselle näkyvyysasteen
