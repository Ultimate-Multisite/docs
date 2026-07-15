---
title: Webhookit
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhookien esikatselu (v2)

_**HUOMIO: Huomioi, että tämä ominaisuus tai artikkeli on tarkoitettu edistyneille käyttäjille.**_

**Webhook** on tapa, jolla sovellus tai ohjelmisto, kuten Ultimate Multisite, voi antaa tietoa reaaliajassa muihin sovelluksiin. Webhook lähettää dataa tai latauksia (payload) muihin sovelluksiin heti tapahtumana, mikä tarkoittaa, että **saat tiedon välittömästi.**

Tämä on hyödyllistä, jos tarvitset integraatiota tai haluat siirtää tiettyä dataa Ultimate Multisite-sta toiseen CRM:ään tai järjestelmään joka kerta kun tapahtuma käynnistyy. Esimerkiksi sinun täytyy lähettää käyttäjän nimi ja sähköpostiosoite postituslistalle aina, kun uusi käyttäjäprofiili luodaan.

## Webhookin luominen {#how-to-create-a-webhook}

Webhookin luomiseksi siirry verkko-admin-dashboardisi. Napsauta **Ultimate Multisite > Webhooks > Add New Webhook.**

![Tyhjä webhookien lista sivu "Add New Webhook" -painikkeella](/img/admin/webhooks-list-empty.png)

Voit sitten muokata webhookin konfiguraatiota:

![Add New Webhook -lomake, jossa on Name-, Event- ja URL-kentät](/img/admin/webhook-add-modal.png)

Kun luot uuden webhookin sinulta kysytään tietoja kuten **Name (Nimi), URL** ja **Event (Tapahtuma)**. Voit käyttää mitä tahansa nimeä haluamallasi webhookille. Tärkeimmät kentät ovat URL ja Event.

![Webhookin muokkausnäkymä, joka näyttää URL-kentän ja latauksen esikatselun](/img/admin/webhook-url-field.png)

URL on **päätepiste tai kohde**, johon Ultimate Multisite lähettää **payload'n tai datan**. Tämä on sovellus, joka vastaanottaa datan.

Zapier on yleisin ratkaisu, jota käyttäjät käyttävät tekevän integraation kolmannen osapuolen sovelluksiin helpommaksi. Ilman alustaa kuten Zapier sinun täytyy luoda manuaalisesti oma räätälöity funktio, joka tarttuu dataan ja käsittelee sen. Katso tätä artikkelia **kuinka käyttää Ultimate Multisite webhookia Zapierillä.**

Tässä artikkelissa katsomme peruskonseptia siitä, miten webhook toimii ja mitä tapahtumia on saatavilla Ultimate Multisite -järjestelmässä. Käytämme kolmannen osapuolen sivustoa nimeltä [requestbin.com](https://requestbin.com/). Tällä sivustolla voimme luoda endpointin ja vastaanottaa datan ilman koodausta. _**Vastuuvapauslauseke: se tekee vain näyttämisen siitä, että data on saatu.**_ Ei ole tapahtumista tai mitään toimintoja suoritettavissa payloadille.

Siirry [requestbin.com](https://requestbin.com) ja napsauta Create Request Bin -painiketta.

Napsauttamalla sitä sinulta kysytään kirjautumaan sisään, jos sinulla on jo tili tai rekisteröitymään. Jos sinulla on jo tiliä, se ohjaa sinut suoraan hallintapaneeliin. Heidän hallintapaneelissaan näet heti endpointin tai URL-osoitteen, jota voit käyttää Ultimate Multisite -webhookin luomiseen.

Kopioi sitten URL ja palaa Ultimate Multisiteen takaisin. Aseta endpoint URL-kenttään ja valitse tapahtuma pudotusvalikosta. Tässä esimerkissä valitaan **Payment Received** (Maksu vastaanotettu).

Tämä tapahtuma käynnistyy aina, kun käyttäjä tekee maksun. Kaikki saatavilla olevat tapahtumat, niiden kuvaukset ja payloadit on lueteltu sivun alaosassa. Napsauta **Add New Webhook** -painiketta tallentaaksesi webhoekin.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Voimme nyt lähettää testitapahtuman endpointille nähdäksemme, toimivaanko luomamme webhookin. Voimme tehdä tämän napsauttamalla **Send Test Event** -painiketta luomasi webhoekin alla.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Tämä näyttää vahvistusikkunan, jossa kerrotaan testin onnistuneesta.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Kun palaamme _Requestbin_ sivustolle näemme, että payload on saatu sisältäen jonkin testidataa.

Tämä on perusperiaate siitä, miten webhookit ja endpointit toimivat. Jos haluat luoda oman endpointin, sinun täytyy luoda oma funktio datan käsittelyyn, jonka saat Ultimate Multisite-järjestelmästä.
