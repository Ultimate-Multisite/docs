---
title: Zapier-integraatio
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisiten integrointi Zapierin kanssa

Yhdessä artikkelissa kävimme läpi [Webhooks](webhooks.md) -mekanismeista ja siitä, miten niitä voidaan käyttää kolmannen osapuolen sovellusten integroimiseen.

Webhookien käyttö voi olla hieman monimutkaista, sillä se vaatii edistettua ohjelmointitaitoa ja datapaketteja (payloads) vangitsemista. **Zapier** on tapa välttää tämä.

Zapierillä on yhteys yli 5000+ sovellukseen, mikä tekee eri sovellusten välisestä viestinnästä helpompaa.

Voit luoda **Triggers** (laukaisimia), jotka käynnistyvät, kun tapahtuu jotain verkossasi (esim. tili luodaan ja laukaisee `account_create`-tapahtuman) tai luoda **Actions** (toimintoja) verkossasi reagoimaan ulkoisiin tapahtumiin (esim. uuden käyttäjäjäsenyyden luominen Ultimate Multisite -verkostossa).

Tämä on mahdollista, koska **Ultimate Multisiten Zapier-laukaisimet ja -toiminnot** toimivat [REST API](https://developer.ultimatemultisite.com/api/docs/) -rajapinnan avulla.

## Kuinka aloittaa

Etsi ensin Ultimate Multisite Zapier-sovelluslistalta. Vaihtoehtoisesti voit klikata [tätä linkkiä](https://zapier.com/apps/wp-ultimo/integrations).

Siirry hallintapaneeliisi ja paina vasemmassa sivupalkissa olevaa **+** **Create Zap** -painiketta uuden Zapin luomiseksi.

![Zapierin hallintapaneeli Create Zap -painikkeella](/img/admin/webhooks-list.png)

Sinut ohjataan Zapin luontisivulle.

Hakukenttään kirjoita "wp ultimo". Klikkaa valitaksesi **Beta**-version vaihtoehdon.

![WP Ultimon etsiminen Zapierin sovelluslistalta](/img/admin/webhooks-list.png)

Kun olet valinnut sovelluksemme, valitse saatavilla olevasta tapahtumasta: **New Ultimate Multisite Event**.

![Uuden Ultimate Multisite -tapahtuman laukaisevan valinta](/img/admin/webhooks-list.png)

Nyt meidän täytyy antaa Zapierille pääsy **verkkoosi**. Klikkaamalla **Sign in** (Kirjaudu sisään), avautuu uusi ikkuna, joka vaatii **API-tunnisteita**.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Siir verkkonettiasimen hallintapaneeliin ja navigoi kohtaan **Ultimate Multisite > Asetukset** > **API & Webhooks** etsiäksesi API Settings -osion.

Valitse **Enable API** -vaihtoehto, sillä se on pakollinen tämän yhteyden toimimiseksi.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

Käytä **Copy to Clipboard** -kuvaketta API Key- ja API Secret -kentissä ja liitä nämä arvot integraatiokenttään.

URL-kenttään kirjoita verkon koko URL, mukaan lukien protokolla (HTTP tai HTTPS).

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

Napsauta **Yes, Continue** -painiketta siirtyäksesi seuraavaan vaiheeseen. Jos kaikki toimii oikein, sinut odottaa uusi yhdistetty tili! Napsauta **Continue** luodaksesi uuden triggerin.

## Uuden Triggerin luominen

Kun tilisi on yhdistetty, näet saatavilla olevat tapahtumat. Valitkaa tässä ohjeessa **payment_received** -tapahtumaa.

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

Kun tapahtuma on valittu ja napsautat **continue**, ilmestyy **testivaihe**.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Tässä vaiheessa Zapier testaaa, pystyykö Zapisi hakeutumaan kyseiseen tapahtumaan liittyvää **payloadia**. Samankaltaisissa tulevissa tapahtumissa lähetetään sama rakenneinen tieto.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Tutorialissa test oli **suoritettu onnistuneesti** ja se palautti esimerkkitietoja lataukseksi (payload). Nämä esimerkkitiedot auttavat meitä ohjaamaan toimintojen luomista. Laukaimesi on nyt luotu ja valmis yhdistettävä muihin sovelluksiin.

## Miten luodaan Actions

Actions käyttävät tietoa muista laukaimisista luodakseen uusia merkintöjä verkkoosi.

**Action-askun luomisessa** valitset Ultimate Multisite **Beta** -version ja vaihtoehdon **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Seuraavassa vaiheessa joko luot autentikoidun tiedon, kuten teimme **Aloitusohjeissa**, tai valitset jo olemassa olevan autentikoidun tiedon. Tässä ohjeessa valitaan sama aiemmin luotu autentikointi.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Actionin asettelu

Tämä on **actionin päävaihe** ja tässä asiat ovat hieman erilaisia. Ensimmäinen tieto, jonka valitset, on **Item**. Item on verkkomallesi **tiedon malli**, kuten **Customers (Asiakkaat), Payments (Maksut), Sites (Sivustot), Emails (Sähköpostit)** ja muut.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Kun valitset itemin, lomake **järjestä itsensä niin, että tarvittavat ja valinnaiset kentät** valitulle itemille näkyvät esiin.

Esimerkiksi kun valitset itemin **Customer (Asiakas)**, lomakkeen kentät tuovat mukaan kaikki, mitä on tarpeen täyttää uuden asiakkaan luomiseksi verkkoon.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Kun olet täyttänyt kaikki **vaaditut** merkityt kentät ja klikannut jatka, viimeinen näyttö näyttää sinulle täytetyt kentät sekä ne kentät, jotka jäivät tyhjiin.

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

Kun testisi on valmis ja onnistuu, toimintasi on konfiguroitu. On myös tärkeää tarkistaa verkostosi, että kohde luotiin juuri suorittamallasi toiminnon testillä.
