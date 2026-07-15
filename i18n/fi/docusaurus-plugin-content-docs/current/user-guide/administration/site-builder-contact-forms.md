---
title: Sivuston rakentajan yhteydenottolomakkeet
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Sivuston rakentajan yhteydenottolomakkeet

Superdav AI Agent v1.10.0 tuo uuden ominaisuuden, jonka avulla voit luoda yhteydenottolomakkeita suoraan chat-käyttöliittymän kautta Site Builder -agentilla. Tämä mahdollistaa toimivan yhteydenottolomakkeen lisäämisen mille tahansa sivulle ilman, että sinun tarvitsee poistua chatinäkymästä.

## Yleiskatsaus {#overview}

Site Builderin yhteydenottolomakkeiden luominen (`create_contact_form`) tunnistaa automaattisesti asennetun lomakepluginisi ja luo yhteydenottolomakkeen käyttämällä kyseisen pluginin natiiveja ominaisuuksia. Tuettuja lomakeplugin-ohjelmia ovat:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Avustaja valitsee automaattisesti parhaan saatavilla olevan lomakepluginin sivustollasi ja luo yhteydenottolomakkeen, joka on räätälöity kyseiselle pluginille.

## Yhteydenottolomakkeen luominen {#creating-a-contact-form}

Yhteydenottolomakkeen luomiseen Site Builderin avulla:

1. Avaa **Gratis AI Agent** -chatpaneeli WordPress-adminissa.
2. Vaihda **Site Builder** -agenttiin klikkaamalla agenttikuvaa chat-otsikossa.
3. Kuvaile yhteydenottolomaketta, jonka haluat luoda. Esimerkiksi:

   > "Lisää yhteydenottolomake Contact-sivulle kentillä nimeä, sähköpostiosoite, viesti ja puhelinnumero."

   Tai yksinkertaisesti:

   > "Luo yhteydenottolomake Contact-sivulle."

4. Site Builder luo yhteydenottolomakkeen ja palauttaa lyhyen koodin (shortcode), jota voit upottaa.

## Luodun lyhyen koodin käyttö {#using-the-generated-shortcode}

Kun Site Builder on luonut yhteydenottolomakkeen, se palauttaa lyhyen koodin (esimerkiksi `[contact-form-7 id="123"]`). Voit:

1. **Upottaa sen sivulle tai julkaisuun** — Kopioi lyhyt koodi ja liitä se minkä tahansa sivuun tai julkaisuun käyttämällä block editoria tai klassista editoria.
2. **Lisätä sen Site Builderin kautta** — Pyydä Site Builderia lisäämään lomakkeen automaattisesti tiettyyn sivulle:

   > "Lisää yhteydenottolomake Contact-sivulle."

3. **Käytä sitä mallissa** — Jos olet mukava PHP:stä, voit lisätä lyhyen koodinpätkän teeman mallifailaan.

## Yhteydenottolomakkeen muokkaaminen {#customizing-the-contact-form}

Kun Site Builder luo yhteydenottolomakkeen, voit muokata sitä entisestään:

### Chat-käyttöliittymän kautta {#via-the-chat-interface}

Pyydä Site Builderia muokkaamaan lomaketta:

> "Päivitä yhteydenottolomake lisäämällä aihealueen ja tekevällä viestikentästä pakollisen."

Site Builder päivittää lomakkeen ja palauttaa päivitetyn lyhyen koodinpätkän.

### Lomakepalvelimen (Form Plugin) hallintapaneelin kautta {#via-the-form-plugins-admin-interface}

Voit myös muokata lomaketta suoraan lomakepalvelimesi asetuksissa:

1. Mene WordPressin hallintapaneelissa **Contact Form 7** -osioon (tai asennettuna lomakepalvelimeesi).
2. Etsi Site Builderin luoma lomake.
3. Muokkaa lomakkeen kenttiä, validointisääntöjä ja sähköpostitiedotteita tarpeen mukaan.

## Lomakepalvelimet ja yhteensopivuus {#form-plugins-and-compatibility}

Site Builder tunnistaa automaattisesti, mikä lomakepalvelin on asennettuna sivustollasi, ja käyttää sitä yhteydenottolomakkeen luomiseen. Jos useampia lomakepalvelimia on asennettuna, Site Builder priorisoi ne seuraavassa järjestyksessä:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Jos mitään näistä lisäosista ei ole asennettuna, Site Builder suosittelee sen asentamista ennen yhteydenottolomakkeen luomista.

## Sähköpostitiedotteet {#email-notifications}

Site Builderin luomat yhteydenottolomakkeet on oletuksena asetettu lähettämään sähköpostitiedotteita sivuston ylläpitäjälle. Voit muokata vastaanottajan sähköpostiosoitetta ja ilmoitusviestiä:

1. Mene lomakepalvelimesi hallintapaneeliin.
2. Etsi Site Builderin luoma lomake.
3. Muokkaa sähköpostitiedotteiden asetuksia.

Yksityiskohtaisista ohjeista katso lomakepalvelimesi dokumentaatiota:

- [Contact Form 7 sähköpostitiedotteet](https://contactform7.com/docs/)
- [WPForms sähköpostitiedotteet](https://wpforms.com/docs/)
- [Fluent Forms sähköpostitiedotteet](https://fluentforms.com/docs/)
- [Gravity Forms sähköpostitiedotteet](https://docs.gravityforms.com/)

## Esimerkkejä käytöksistä {#example-use-cases}

### Yksinkertainen yhteydenottolomake {#simple-contact-form}

> "Luo yksinkertainen yhteydenottolomake nimikkeen, sähköpostin ja viestin kentillä."

### Useita vaiheita sisältävä lomake {#multi-step-form}

> "Luo yhteydenottolomake, jossa on ensimmäinen vaihe yhteystietojen keräämiseksi ja toinen vaihe viestin sekä suositun yhteystavan valitsemiseksi."

### Ehdollisuuden logiikkaa sisältävä lomake {#form-with-conditional-logic}

> "Luo yhteydenottolomake, joka näyttää eri kenttiä riippuen käyttäjän valinnasta pudotusvalikosta."

### Tiedoston latauslomake {#form-with-file-upload}

> "Luo yhteydenottolomake, josta käyttäjät voivat ladata tiedoston tai liitteen."

:::note
Yhteydenottolomakkeen luominen on mahdollista Superdav AI Agent v1.10.0 ja sitä uudemmissa versioissa. Sivuston rakentaja-agentin on oltava aktiivinen tämän ominaisuuden käyttämiseksi.
:::
