---
title: Kolmannen osapuolen tilan siirto
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Kolmannen kolmannen tilaan siirtyminen (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 muuttaa tapaa, jolla kolmannen osapuoliin liittyvät ominaisuudet käsitellään. **Kolmannen tila on nyt oletusarvoisesti "auto"**, mahdollistaen natiivin WordPress Abilities API -integraation WordPress 7.0+ versioissa ilman manuaalista konfiguraatiota.

## Mitä on muuttunut? {#what-changed}

### V1.12.0:n ennen {#before-v1120}

Kolmannet ominaisuudet vaativat manuaalista konfiguraatiota:

- Sinun oli aktivoitava erikseen "kolmas tila" (third-party mode)
- Ominaisuudet ladattiin omasta rekisteristä
- Integraatio WordPress Abilities API -an kanssa oli valinnaista
- Vanha tila (legacy mode) oli oletusarvo

### V1.12.0:n jälkeen {#after-v1120}

Kolmannet ominaisuudet toimivat automaattisesti:

- Kolmannen tila on oletusarvoisesti "auto"
- Ominaisuudet integroituvat natiivisti WordPress Abilities API -an kanssa
- Manuaalista konfiguraatiota ei tarvita WordPress 7.0+ versioissa
- Vanha tila (legacy mode) on edelleen saatavilla vanhemmille WordPress-versioille

## Kenelle tämä vaikuttaa? {#who-is-affected}

### Uudet asennukset (WordPress 7.0+) {#new-installations-wordpress-70}

**Ei vaadittavaa toimia.** Kolmannen tila asetetaan automaattisesti "auto"-tilaan, ja ominaisuudet toimivat heti valmiina.

### Olemassa olevat asennukset {#existing-installations}

**Asetukset säilyvät.** Jos käytit:

- **Vanhaa tilaa (Legacy mode)**: Pysyt vanhassa tilassa (ei muutoksia)
- **Manuaalista kolmannen tilaa**: Pysyt manuaalisessa tilassa (ei muutoksia)
- **Auto-tilaa**: Jatka auto-tilassa (ei muutoksia)

### WordPress-versiot ennen 7.0 {#wordpress-versions-before-70}

**Vanha tila on edelleen saatavilla.** Jos olet WordPress 6.x tai vanhemmassa versiossa:

- Kolmannen tilan oletusarvo on "legacy"
- Voit aktivoa kolmannen tilan manuaalisesti, jos haluat
- Päivitä WordPress 7.0+ -versioon käyttää natiivia Abilities API -ä

## Tilojen ymmärtäminen {#understanding-the-modes}

### Auto-tila (Uusi oletusarvo) {#auto-mode-new-default}

**Auto-tila** käyttää natiivia WordPress Abilities API -integraatiota:

- Ominaisuudet rekisteröidään WordPress hookeilla
- Täysi yhteensopivuus WordPress 7.0+ Abilities API -n kanssa
- Kolmannen tilan ominaisuuksien automaattinen löytyminen
- Manuaalista konfiguraatiota ei tarvita

**Milloin käyttää**: WordPress 7.0+ ja kolmannen osapuolen ominaisuuksia

### Manuaalinen tila (Manual Mode) {#manual-mode}

**Manuaalinen tila** vaatii nimenomaisen konfiguroinnin:

- Määrät, mitkä kolmannen osapuolen ominaisuudet lataudut
- Hyödyllinen testauksessa tai valitussa ominaisuuksien lataamisessa
- Vaatii konfiguraatiotiedostojen muokkaamista
- Enemmän hallintaa, mutta enemmän asennusta

**Milloin käyttää**: Testaukseen, valitun ominaisuuksien lataamiseen tai räätälöityihin konfiguraatioihin

### Vanhentunut tila (Legacy Mode) {#legacy-mode}

**Vanhentunut tila** käyttää vanhaa kolmannen osapuolen ominaisuusjärjestelmää:

- Räätälöity ominaisuuksien rekisteri (ei WordPress Abilities APIä)
- Taaksepäin yhteensopiva vanhempien WordPress-versioiden kanssa
- Ei natiivia WordPress-integraatiota
- Vanhentunut, mutta edelleen tuettu

**Milloin käyttää**: WordPress 6.x tai vanhemmat versiot, tai kun tarvitset vanhentuneen yhteensopivuuden

## Nykyisen tilan tarkistaminen {#checking-your-current-mode}

### Asetimen kautta (Via Admin Panel) {#via-admin-panel}

1. Mene **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Etsi asetusta **Third-Party Mode**
3. Näet nykyisen tilasi ja vaihtoehdot sen muuttamiseen

### Koodin kautta (Via Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' tai 'legacy'
```

## Tilauksen muuttaminen {#changing-your-mode}

### Vaihda automaattitilaan (Switch to Auto Mode) {#switch-to-auto-mode}

Jos olet WordPress 7.0+ ja haluat käyttää automaattitilaa:

1. Mene **Superdav AI Agent** → **Settings**
2. Etsi **Third-Party Mode**
3. Valitse **Auto (WordPress Abilities API)**
4. Napsauta **Save**

Superdav AI Agent löytää ja rekisteröi kolmannen osapuolen ominaisuudet automaattisesti.

### Vaihda manuaaliseen tilaan (Switch to Manual Mode) {#switch-to-manual-mode}

Jos haluat hallita manuaalisesti, mitkä ominaisuudet latautuvat:

1. Mene **Superdav AI Agent** → **Settings**
2. Etsi **Third-Party Mode**
3. Valitse **Manual**
4. Napsauta **Save**
5. Muokkaa konfiguraatiotiedostoasi määritelläksesi, mitkä ominaisuudet lataudut

### Vaihda vanhentuneeseen tilaan (Switch to Legacy Mode) {#switch-to-legacy-mode}

Jos tarvitset vanhentuneen yhteensopivuuden:

1. Mene **Superdav AI Agent** -asetuksiin → **Asetukset**
2. Etsi **Kolmannen osapuolen tila (Third-Party Mode)**
3. Valitse **Legacy**
4. Napsauta **Tallenna**

## Auto-tilassa olevien ominaisuuksien edut {#benefits-of-auto-mode}

### Automaattinen löytyminen {#automatic-discovery}

Ominaisuudet löytyvät automaattisesti seuraavista lähteistä:

- Asennetut pluginit
- Aktiivinen teema
- Pakolliset pluginit
- Drop-in -pluginit

Ei tarvita manuaalista rekisteröintiä.

### Luonnollinen integrointi {#native-integration}

Ominaisuudet integroituvat WordPress Abilities API:hin:

- Yhteensopiva WordPressin ydinominaisuuksien kanssa
- Toimii WordPressin hallintapaneelissa (admin)
- Soveltuu muihin plugin-ohjelmistoihin, jotka käyttävät Abilities API:a
- Tulevaisuuden kannalta tulevaisuuteen sopeutuva kun WordPress kehittyy

### Yksinkertaistettu hallinta {#simplified-management}

- Ei tarvetta muokata konfiguraatiotiedostoja
- Ei manuaalista ominaisuuksien rekisteröintiä
- Ominaisuuksien näkyvyys (Ability Visibility) säädöt toimivat automaattisesti
- Hallintapaneelin ilmoitukset varoittavat sinut luokittelemattomista ominaisuuksista

### Parempi suorituskyky {#better-performance}

- Ominaisuudet on tallennettu (cached)
- Latautuu tarvittaessa hitaasti (lazy-loaded)
- Optimoidut WordPress 7.0+ -versioille

## Migraatiopolku {#migration-path}

### Jos olet WordPress 6.x:ssä {#if-youre-on-wordpress-6x}

1. **Päivitä WordPressiin 7.0+** (kun on valmis)
2. **Päivitä Superdav AI Agentin** versioon v1.12.0+
3. **Muuta kolmannen osapuolen tila Auto-tilaan** (valinnainen; legacy-tila toimii edelleen)
4. **Tarkista ominaisuuksien näkyvyys** varmistaaksesi asianmukaiset pääsynhallintamekanismit

### Jos olet WordPress 7.0+:ssa {#if-youre-on-wordpress-70}

1. **Päivitä Superdav AI Agentin** versioon v1.12.0+
2. **Varmista, että kolmas osapuolen tila on asetettu Auto-tilaan** (se pitäisi olla oletusasetuksena)
3. **Tarkista ominaisuuksien näkyvyys** varmistaaksesi asianmukaiset pääsynhallintamekanismit
4. **Testaa kolmannen osapuolen ominaisuuksia** varmistaaksesi niiden toimivuuden

## Ongelmanratkaisu {#troubleshooting}

### Ominaisuudet eivät lataudu auto-tilassa {#abilities-arent-loading-in-auto-mode}

- Varmista, että olet WordPress 7.0+ -versiolla
- Tarkista, että kolmas osapuolen tila on asetettu "Auto"-tilaan
- Varmista, että ominaisuuden tarjoava plugin on aktiivinen
- Tarkista WordPressin virhesivut (error logs) rekisteröintivirheiden tarkistamiseksi

### Haluan pitää legacy-tilan käytössä {#i-want-to-keep-legacy-mode}

- Mene **Asetukset** → **Kolmas osapuolen tila (Third-Party Mode)**
- Valitse **Legacy**
- Napsauta **Tallenna**
- Legacy-tila jatkaa toimintaansa

### Mukautetut ominaisuutesi ei näy {#my-custom-abilities-arent-showing}

- Tarkista, että ne on rekisteröity WordPressin hookeilla
- Varmista, että ne toteuttavat Abilities API:n oikein
- Tarkista WordPressin virhesivuja (error logs)
- Käytä **Ability Visibility** -hallintapaneelia nähdäksesi kaikki rekisteröityt ominaisuudet

### Saan "luokiteltamattomia ominaisuuksia" -ilmoituksia {#im-getting-unclassified-ability-notices}

- Tämä on normaalia uusille kolmannen osapuolen ominaisuuksille
- Tarkista ja luokittele ne hallintapaneelin ilmoituksissa
- Katso **Ability Visibility** saadaksesi lisätietoja luokittelusta

## Taaksepäin yhteensopivuus (Backward Compatibility) {#backward-compatibility}

### Olemassa olevat asetukset {#existing-configurations}

Jos sinulla on olemassa olevia kolmannen osapuolen ominaisuuksien asetuksia:

- **Legacy mode** (Vanha tila): Asetuksesi jatkaa toimimista
- **Manual mode** (Manuaalinen tila): Asetuksesi jatkaa toimimista
- **Auto mode** (Automaattinen tila): Asetuksiasi ignoroidaan (automaattinen tila ottaa vallan)

Jotta voit säilyttää mukautetun asetuksesi, pysy Manuaalisessa tai Vanhassa tilassa.

### Poistumisaika (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy- ja Manuaalinen tila tuetaan edelleen täysin
- **v1.13.0+**: Legacy-tilalla voi ilmestyä poistumisilmoituksia
- **v2.0.0**: Legacy-tila voidaan poistaa (TBD)

## Paras käytäntö (Best Practices) {#best-practices}

### Uusille asennuksille {#for-new-installations}

- Käytä Auto modea (se on oletusasetus)
- Anna Superdav AI Agentin löytää ominaisuudet automaattisesti
- Käytä Ability Visibility -ominaisuutta pääsyn hallintaan

### Olemassa oleville asennuksille {#for-existing-installations}

- Päivitä WordPressiin 7.0+ mahdollisimman pian
- Vaihda Auto modeon yksinkertaistetun hallinnan vuoksi
- Tarkista ja luokittele ominaisuudet käyttäen Ability Visibility -ominaisuutta

### Mukautettuihin ominaisuuksiin {#for-custom-abilities}

- Rekisteröi ominaisuudet WordPressin hookeilla (Abilities API)
- Vältä mukautettuja ominaisrekistereitä (custom ability registries)
- Testaa WordPress 7.0+ Auto modea käytettäessä

## Seuraavat askeleet {#next-steps}

1. **Tarkista WordPress-versiosi**: Varmista, että käytät versiota 7.0 tai uudempi Auto-tilaa varten.
2. **Arvioi kolmannen osapuolen tila**: Mene Asetuksiin ja tarkista nykyinen tila.
3. **Päivitä tarvittaessa**: Vaihda Auto-tilaan, jos käytät WordPressia 7.0 tai uudempaa versiota.
4. **Luokittele kyvykkyjä**: Tarkastele ja luokittele kaikki luokitsemattomat kyvyt.
5. **Testaa**: Varmista, että kolmannen osapuolen kyvyt toimivat oikein.

## Aiheeseen liittyvät aiheet {#related-topics}

- **Kykyjen näkyvyys (Ability Visibility)**: Hallitse, mitkä kyvyt ovat näkyvissä missäkin kohdassa.
- **WordPress Abilities API**: Opi natiivin WordPress-kykyrekisteröinnistä.
- **Kolmannen osapuolen kykykehitys (Third-Party Ability Development)**: Luo kykyjä, jotka toimivat Auto-tilassa.
