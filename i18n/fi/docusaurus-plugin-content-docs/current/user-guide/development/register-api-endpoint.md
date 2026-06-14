---
title: Rekisteröi API-päätepiste
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite -rekister API-päätepiste

Tässä ohjeessa opit, miten käyttää Ultimate Multisite /register API-päätepistettä luodaksesi koko uuden asiakkaan sisäänkirjautumisprosessin verkostosi ja miten tehdä se Zapierillä.

Päätepiste käyttää POST-menetelmää ja sitä kutsutaan URL-osoitteella _**https://yoursite.com/wp-json/wu/v2/register**_. Tämän kutsun aikana neljä prosessia suoritetaan verkostossasi:

  * Uusi WordPress-käyttäjä luodaan tai tunnistetaan käyttäjätunnuksellaan.

  * Uusi asiakas Ultimate Multisite -järjestelmässä luodaan tai tunnistetaan asiakastunnuksellaan.

  * Uusi sivusto luodaan WordPress-verkostoon.

  * Lopuksi luodaan uusi jäsenyys Ultimate Multisite -järjestelmässä.

Tämän prosessin kannalta tarvitset API-tunnisteesi. Saat ne siirtymällä verkoston ylläpitäjäpaneeliin, navigomalla kohtaan **Ultimate Multisite > Settings** > **API & Webhooks** ja etsimällä API Settings -osio.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

Tässä on koko API-asetusten sivu:

![API settings full page](/img/config/settings-api-full.png)

Valitse **Enable API** ja saat API-tunnisteesi.

Nyt tutustuimme päätepisteeseen ja luomme sen jälkeen rekisteraustoiminnon Zapierissä.

## Päätepisteen runko-parametrit

Katsotaan yleiskuva minimitiedoista, joita meidän täytyy lähettää päätepisteelle. Tämän artikkelin lopussa löydät koko kutsun.

### Customer (Asiakas)

Tämä on tieto, joka on tarpeen käyttäjän ja Ultimate Multisite -asiakkaan luomiseen:

"customer_id" : integer

Onko mahdollista lähettää verkostossasi luotu asiakas-ID. Jos sitä ei lähetetä, alla oleva tieto käytetään uuden asiakkaan ja uuden WordPress-käyttäjän luomiseen. Käyttäjä-ID voidaan lähettää samalla tavalla kuin asiakas-ID.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Jäsenyys**

Ainoa tieto, jota tarvitsemme tässä objektissa, on jäsenyyden tila.

"membership" { "status" : "string", // yksi seuraavista: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Tuotteet**

Tuotteille annetaan taulukko (array) yhdestä tai useammasta tuotteen ID:stä verkostossasi. Huomioi, että tämä päätepiste ei luo tuotteita. Tarkista Ultimate Multisiten dokumentaatio saadaksesi paremman ymmärryksen tuote-epäonnistumisen luomiseen liittyvästä päätepisteestä.

**"products" : [1,2],**

### Maksu

Kuten jäsenyydessä, tarvitsemme vain tilan.

**"payment" { "status" : "string", // yksi seuraavista: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Sivu

Ja sulkeaksemme tiedon, tarvitsemme sivuston URL-osoitteen ja nimen Site-objektin sisällä.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Rekisteröintipäätteen palautus on taulukko, joka sisältää uuden luodun jäsenyyden tiedot.

## Toiminnon luominen Zapierissä

Tämän uuden ja vankemman tili-luontipäätteen mukana saat myös uuden toiminnon Zapierissä.

Tiedätkö, miten käyttää ja nauttia kaikesta, mitä uusi versio Zapier tarjoaa? Lue lisää tästä. (link?)

### Toiminnon luominen

Selitetään paremmin, miten rekisteröintipistettä käytetään Zapierin kanssa luomalla integraation Google Forms -tyyppiseen sovellukseen. Jokaisen lomakkeen täyttämisen ja tiedon tallentamisen muodossa uusi jäsen luodaan Ultimate Multisite -verkkoon.

Google Formsissa luo lomake, jossa on vain vähintään ne kentät, jotka ovat tarpeen luodaksesi uuden jäsenen verkkoon.

<!-- Kuvakaappaus saatavilla: Google Forms-lomake kentillä uuden jäsenen luomiseen -->

Nyt Zapierissä luo uusi Zap ja yhdistä luomasi lomakkeen Googleen sen taulukon kautta, johon data tallennetaan.

<!-- Kuvakaappaus saatavilla: Zapierin käynnistysasetus, joka yhdistää Google Forms -taulukkoon -->

Valmis! Google Forms -lomake on yhdistetty Zapieriin ja valmis integroimaan verkkoon. Siirrä nyt siirtymään Toimintoon (Action), joka seuraa sitä Käynnistystä (Trigger), jota Google Forms laukaisee jokaisen täyttämisen jälkeen.

Etsi uusi Ultimate Multisite -sovellus ja valitse se. Tällaisen Zapin kohdalla valitse Register-vaihtoehto.

<!-- Kuvakaappaus saatavilla: Zapierin toimintavalinta, jossa näkyy Ultimate Multisite-sovellus ja Register-vaihtoehto -->

Tämän ensimmäisen vaiheen jälkeen valitse tili, johon tämä Zap yhdistetään.<!-- Kuvakaappaus saatavilla: Ultimate Multisite -tilin yhdistysvaihe Zapierissä -->

Tämä on koko prosessin herkin osa. Meidän täytyy vastaamaan Google Formsista tulevia kenttiä vähintään niihin kenttiin, jotka ovat tarpeen rekisteröintipisteelle, kuten artikkelin edellisessä osiossa näkyy.

Tässä esimerkissä meidän tarvitsee vain määrittää käyttäjätunnus (username), sähköposti (email), salasana (password), nimi ja verkkosivuston URL-osoite. Muu on jo määritelty, jotta kaikki Google Forms -lomakkeilla luodut jäsenet noudattavat samaa tuotemallia ja tilaa.

<!-- Kuvakaappia ei saatavilla: Zapierin kenttien kartoitus Google Forms - Ultimate Multisite -rekister-endpointiin -->

Kun tiedot on asetettu, siirry viimeiseen testiin. Viimeisellä näytöllä näet kaikki ne kentät, jotka lähetetään endpointille, niiden vastaavat tiedot sekä ne kentät, jotka lähetetään tyhjinä.<!-- Kuvakaappia ei saatavilla: Zapierin testinäyttö kaikista kentistä, jotka lähetetään rekister-endpointille -->

Testaa uutta Zapisiasi ja se pitäisi suorittaa onnistuneesti. Jos ilmenee virhe, tarkista kaikki kentät ja varmista, että ne lähetetään oikein. Koska tietoa on paljon, jotkin asiat voivat jäädä huomaamatta.

### Täydelliset endpoint-parametrit

Tässä on koko kutsu ja kaikki mahdolliset kentät, jotka voidaan lähettää:

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // yksi seuraavista: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // yksi seuraavista: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
