---
title: Jäsenyyden päättyminen ja sivuston estäminen
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Jäsenyyden vanhentuminen ja sivustojen estäminen {#membership-expiration-and-site-blocking}

Tämä opas selittää, miten Ultimate Multisite hoitaa jäsenyyksien vanhentumisen, kokeiden päättymisen ja etusivun sivustojen estämisen. Se kattaa jäsenyden elinkaaren aktiivisesta vanhentuneeseen, niitä hallitsevat asetukset sekä mitä tarkistaa, jos sivustot pysyvät käytettävinä jäsenyyden vanhentumisen jälkeen.

## Jäsenyden tilan elinkaari {#membership-status-lifecycle}

Jokaisella Ultimate Multisite -jäsenyydellä on yksi seuraavista tiloista:

:::note Ilmaiset jäsenyydet ovat ikuisia
Ilmaiset jäsenyydet eivät vanhene automaattisesti. Ultimate Multisite käsittelee niitä ikuisena pääsyä, joten ne eivät sisälly vanhentumistarkastuksiin, ellei ylläpitäjä muuta niiden tilaa tai siirrä asiakkaan toiseen tuotteeseen.
:::

| Tila | Merkitys |
|---|---|
| **Odottamassa** (Pending) | Odottavana ensimmäisestä maksusta tai sähköpostivahvistuksesta |
| **Kokeilujakso** (Trialing) | Aktiivinen kokeilujakso, maksua ei vielä kerätty |
| **Aktiivinen** (Active) | Maksutettu ja voimassa oleva |
| **Pysyvä odotuksessa** (On Hold) | Uudelleenkumouksen maksu on odottavana (tilaus luotu, maksun odottaminen) |
| **Vanhentunut** (Expired) | Vanhentumispäivää ja anteilajaksoa mennyt ilman uusiostoa |
| **Peruettu** (Cancelled) | Selkeästi peruttu asiakkaalla tai ylläpitäjä toimesta |

### Miten jäsenyydet siirtyvät vanhentuneiksi {#how-memberships-transition-to-expired}

Ultimate Multisite suorittaa taustahakistuksen **joka tunti** etsien jäsenyyksiä, jotka tulisi merkitä vanhentuneiksi. Tämä tarkistus käyttää [Action Scheduleria](https://actionscheduler.org/) (ei suoraan WP-Cronia) ja suoritetaan `wu_membership_check` -nimisen aikataulutetun toiminnon avulla.

Vanhentumistarkistuksessa on **sisäänrakennettu anteilajakso 3 päivää** oletuksena. Jäsenyys ei merkitään `expired`-tilaksi ennen kuin sen `date_expiration` -päivämäärän jälkeen kulunut aika on 3 päivää. Tämä antaa asiakkaille ajan suorittaa myöhäinen maksu ennen tilan muuttumista.

:::info
Kolmen päivän vanhentumisaikayleinen nopea aika on erillinen asetuksesta "Frontend Block Grace Period". Vanhentumisaikayleinen aika määrittää, milloin **tila muuttuu** aktiiviseksi/pidossa olevalta vanhentuneeksi. Frontend-blokki-vanhentumisaika puolestaan määrittää, milloin **sivusto estetään** sen jälkeen, kun tila on jo muuttunut.
:::

#### Automaattisesti uusittuvat vs. ei automaattisesti uusituvat jäsenyydet {#auto-renewing-vs-non-auto-renewing-memberships}

Tämä ero on tärkeä ymmärtää vanhentumishallinnan kannalta:

- **Ei automaattisesti uusituva jäsenyys** (`auto_renew = false`): Tunnisteen (cron job) käsittelee koko elinkaaren -- se luo uusiutumismaksut, siirtää jäsenyyden pidettäväksi ja merkitsee sen lopulta vanhentuneeksi, jos maksua ei ole vastaanotettu.

- **Automaattisesti uusituva jäsenyys** (`auto_renew = true`): Tunnisteen vanhentumistarkastus **ohittaa nämä kokonaan**. Maksuportaalilta (Stripe, PayPal jne.) odotetaan ilmoittavan Ultimate Multisite -järjestelmään web-hookilla, jos tilaus epäonnistuu tai peruutetaan. Jos web-hookia ei vastaanoteta -- esimerkiksi väärän konfiguroitujen päätepisteiden vuoksi, porttialueen ongelman tai tilauksen peruuttamisen järjestelmän ulkopuolella tapahtumana -- jäsenyys voi pysyä `active` -tilassa ikuisesti jopa vanhentumispäivämäärän jälkeen.

### Kuinka kokeilujakso päättyy {#how-trials-end}

Kun kokeilujakson aikana oleva jäsenyys päättyy, järjestelmä:

1. Luo odottavan uusiutumismaksun kokeilujakson kokonaismäärällä
2. Siirtää jäsenyyden tilan `trialing` -tilasta `on-hold` -tilaan
3. Lähettää uusiutumismaksun ilmoituslähetyssähköpostin asiakkaalle

Tämä prosessi suoritetaan samalla tunnituisella aikataululla kuin säännöllinen vanhentumistarkastus, mutta **vain ei automaattisesti uusituville jäsenyksille**. Automaattisissa kokeilujaksoissa maksuporttaliikenne hoitaa siirtymän kokeilusta maksulliseen tilaan.

## Frontend-juuri pääsyn estäminen {#block-frontend-access}

Olet oletuksena, kun jäsenyys päättyy tai siirtyy tauolle, **rajoitetaan vain wp-admin -paneeli**. Sivuston julkinen etupää pysyy saatavilla vierailijoille. Julkisen pääsyn estämiseksi sinun on käytettävä **Block Frontend Access** -asetusta.

### Asetuksen konfigurointi {#configuring-the-setting}

Siirry kohtaan **Ultimate Multisite > Settings > Memberships** ja aktivoi **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Tässä on koko näkymä jäsenyysasetusten sivusta:

![Membership settings full page](/img/config/settings-membership-full.png)

Kolme yhteen liittyvää asetusta hallitsee tätä käyttäytymistä:

| Asetus | Kuvaus | Oletusarvo |
|---|---|---|
| **Block Frontend Access** | Pääkytkin. Kun käytössä, estää verkko-sivustojen julkisen etupään, kun niiden jäsenyys ei ole enää aktiivinen. | Off |
| **Frontend Block Grace Period** | Päivien määrä odotettava aika sen jälkeen, kun jäsenyys on epäaktiivinen ennen estämistä. Aseta `0` estämään välittömästi. | 0 |
| **Frontend Block Page** | Sivu pääsivustolla, johon vierailijoita ohjataan, kun sivusto estetään. Jos sitä ei ole asetettu, vierailijat näkevät yleisen viestin "Sivua ei ole tällä hetkellä saatavilla" ja linkin sisäänkirjautumissivulle sivuston ylläpitäjän käyttöön. | None |

### Mitä vierailijat näkevät, kun sivu estetään {#what-visitors-see-when-a-site-is-blocked}

Kun etupää pääsy on estetty, vierailijat saavat joko:

1. **Ohjetuksi** valitsemaasi sivulle **Frontend Block Page** (jos sitä on konfiguroitu), tai
2. **Yleisen viestin**: "Tämä sivu ei ole tällä hetkellä saatavilla" ja linkki sisäänkirjautumissivulle sivuston ylläpitäjän käyttöön.

Sivuston ylläpitäjät voivat silti kirjautua sisään – sisäänkirjautumissivu ei koskaan esty.

### Mitä estetään ja milloin {#what-gets-blocked-and-when}

Estämiskäyttäytyminen riippuu jäsenyysstatusesta:

| Jäsenyyden tila | Etkikatselu estetty? | Koronisaika sovellettu? |
|---|---|---|
| Aktiivinen | Ei | -- |
| Kokeilu | **Ei** (katso huomautus alla) | -- |
| Odottamassa | Pidetään aktiivisena -- ei estetty | -- |
| Vanhentunut | **Kyllä**, jos Etkikatselu estettuna on päällä | Kyllä |
| Peruttu | **Kyllä**, aina (riippumatta asetuksista) | **Ei** -- estetään välittömästi |
| Odottamassa | Ei estetty jäsenyys Tarkistuksella | -- |

:::warning Kokeilujäsenyyksiä ei estetä
Vaikka kokeilujakso on päättynyt, `trialing`-tilalla oleva jäsenyys **ei** esty etukatselussa. Ennen siirtymistä toiseen tilaan (yleensä cron-jobin kautta `on-hold` -tilaan, sitten `expired`, jos maksua ei ole tehty), kokeilujäsenyyden on ensin siirryttävä toiseen tilaan. Jos näet kokeilujäsenyyksiä, jotka eivät ole siirtyneet, tarkista ongelmanratkaisusivun alla oleva osio.
:::

:::note Peruttu jäsenyksillä ohitetaan koronisaikaa
Perutut jäsenyydet estetään aina, kun vanhentumispäivämäärä on mennyt, riippumatta siitä, onko Etkikatselu estetty päällä. Koronisaika ei koske peruttuun jäsenyyksiin.
:::

## Ongelmanratkaisu: Sivustot pysyvät saatavilla vanhentumisen jälkeen {#troubleshooting-sites-remaining-accessible-after-expiration}

Jos sivustot pysyvät julkisesti käytettävissä, kun jäsenyys on vanhentunut, suorita nämä tarkistukset järjestyksessä:

### 1. Varmista, että Etkikatselu estetty -asetus on päällä {#1-verify-the-block-frontend-access-setting-is-enabled}

Siirry **Ultimate Multisite > Settings > Memberships** -sivulle ja varmista, että **Block Frontend Access** -kytkin on päällä. Tämä asetuksella oletetaan, että se on **pois päältä oletuksena**, mikä tarkoittaa, että vain wp-admin estetään, kun jäsenyys muuttuu passiiviseksi.

### 2. Tarkista Etikatselun estettuna -koronisaika {#2-check-the-frontend-block-grace-period}

Tarkista samalla asetussivulla **Frontend Block Grace Period** -arvo. Jos tämä on asetettu 7 päiväksi esimerkiksi, etusivu ei esty ennen jäsenyyden päättymispäivän kuluttua 7 päivää – vaikka jäsenyyden tila olisi jo `expired`.

Aseta tämä arvoksi `0`, jos haluat välittömän eston heti kun jäsenyys muuttuu passiiviseksi.

### 3. Vahvista, että Jäsenyyden Tila On Todella Muuttunut {#3-confirm-the-membership-status-has-actually-changed}

Siirry **Ultimate Multisite > Memberships** -sivulle ja tarkista vaikutusvalitun jäsenyyden tila. Jos se näyttää edelleen `active`, vaikka päättymispäivä on mennyt, tilamuutos ei ole tapahtunut. Yleisiä syitä:

- **Jäsenyys uusii automaattisesti**: Tarkista `auto_renew`-kenttä jäsenyyden muokkaussivulla. Jos automaattinen uusiutuminen on käytössä, päättymispäivän cron ohittaa tämän jäsenyyden – se luottaa maksuportaaliin ilmoittamaan epäonnistumisesta. Tarkista portaalisi (Stripe, PayPal) hallintapaneeli varmistaaksesi, että tila vastaa sitä, mitä Ultimate Multisite näyttää.

- **Cron-työ ei ole suoritettu**: Katso seuraava vaihe.

### 4. Varmista, että Action Scheduler Käynnistyy {#4-verify-action-scheduler-is-running}

Ultimate Multisite käyttää Action Schedulerin cron-työkuormien hallintaan. Mene **Tools > Scheduled Actions** -sivulle verkkoadminissa ja etsi:

- **`wu_membership_check`** -- Tämä pitäisi ilmestyä toistuvana tehtävänä, joka suoritetaan joka tunti. Jos se puuttuu, jäsenyys Tarkistukset eivät ole aikataulutettu.
- **`wu_async_mark_membership_as_expired`** -- Nämä ovat yksittäisiä tehtäviä, joilla tiettyjä jäsenyyksiä merkitään päättyneiksi. Jos näet tässä epäonnistuneita toimintoja, niissä voi olla virheilmoituksia, jotka selittävät syyn.

Jos näet jumiutuneita tai epäonnistuneita toimintoja, sinulla saattaa olla Action Scheduler -ongelma. Yleisiä syitä:

- **`DISABLE_WP_CRON` on `true`** `wp-config.php`-tiedon ilman järjestelmän tasolla käytettyä cron-korvausta
- **Matala sivuston liikennetaso** -- WP-Cron suoritetaan vain, kun joku vierailee sivustolla

Varmistaaksesi luotettavan cron-suorituksen aseta järjestelmän cron-työ:

```bash
# Suorita joka 5 minuuttia wgetillä
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Tai WP-CLI:llä
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Tarkista Gateway Webhook -ongelmat (Automaattisesti uusituvat jäsenyydet) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Jos jäsenyys uusitaan automaattisesti ja gateway-tilaus on peruutettu tai epäonnistunut, mutta Ultimate Multisite näyttää sen silti `active`-tilana:

- **Stripe**: Mene Stripe Dashboardiin > Customers ja tarkista tilausstatus. Varmista sitten webhook-päätepisteen toimivuus Developers > Webhooks -osiossa. Päätepisteen tulisi osoittaa sivustollesi ja näyttää onnistuneet toimitukset.
- **PayPal**: Tarkista tilausstatus PayPal-yritysttilililläsi ja varmista IPN/webhook-toimituksen.

Jos gateway näyttää tilauksen peruutettuna mutta Ultimate Multisite ei, webhook-ilmoitus on todennäköisesti menetetty. Voit muuttaa jäsenyden tilaa manuaalisesti **Ultimate Multisite > Memberships > [Edit Membership]** -osiossa.

### 6. Tarkista vanhentumisaikojen sallittu aika (Cron-taso) {#6-check-the-expiration-grace-period-cron-level}

Cron-tarkistuksella on oma sallittu aika (oletus: 3 päivää) ennen jäsenyyden merkitsemistä vanhentuneeksi. Tämä on erillinen etälaidasta (frontend block grace period). Kokonaisviive ennen kuin sivustoa estetään voi olla:

**Vanhentumisaikojen sallittu aika (3 päivää)** + **Etälaidasta sallittu aika (asetuksesi)** = Kokonaisviive

Esimerkiksi oletusasetuksilla ja 7 päivän etukäyttöajan (frontend grace period) myötä sivuston estyminen voi kestää jopa 10 päivää `date_expiration`-päivämäärän jälkeen.

### 7. Poista jäsenyys manuaalisesti {#7-manually-expire-a-membership}

Jos tarvitset sivustoa välittömästi estämään ilman odottamista cron-syklin päättymistä, voit muuttaa jäsenyyden tilaa manuaalisesti:

1. Mene **Ultimate Multisite > Memberships** -sivulle
2. Klikkaa vaikutusvalitun jäsenyyden kohdalla
3. Muuta tila **Expired** (Vanhentunut) tai **Cancelled** (Peruettu)
4. Klikkaa **Save** (Tallenna)

Etukäyttöajan eston vaikutus tulee voimaan seuraavalla sivun latauksella (riippuen etukäyttöajan säännöistä vanhentuneille jäsenyksille tai välittömästi peruetuille jäsenyksille).

## Yhteenveto {#summary}

Koko aikajana vanhentumispäivästä sivuston estämiseen:

```text
date_expiration kulkee ohi
       |
       v
  [3 päivän cron-etukäyttöaika]     <-- jäsenyys näyttää edelleen aktiiviselta/pidossa
       |
       v
  Cron merkitsee jäsenyyden "expired" (vanhentuneeksi)
       |
       v
  [Etukäyttöajan eston aika]  <-- määritetty Asetukset > Memberships -osiossa
       |
       v
  Sivuston etuosa on estetty
```

Peruetuille jäsenyksille polku on lyhyempi:

```text
  Jäsenyys peruettu
       |
       v
  date_expiration kulkee ohi (ei etukäyttöaika)
       |
       v
  Sivuston etuosa estetään välittömästi
```

## Kehittäjien viittaukset {#developer-reference}

Seuraavat hookit ja filterit antavat sinulle mahdollisuuden räätälöidä vanhentumisen ja eston käyttäytymistä:

| Hook/Filter | Kuvaus |
|---|---|
| `wu_membership_grace_period_days` | Suodata vapaapäivien määrä ennen jäsenyyden vanhentumista (oletus: 3) |
| `wu_schedule_membership_check_interval` | Suodata jakso jäsenyys Tarkistuksissa (oletus: 1 tunti) |
| `wu_membership_renewal_days_before_expiring` | Suodata, kuinka monta päivää ennen vanhentumista luodaan uusi maksutapahtuma (oletus: 3) |
| `wu_blocked_site_reactivation_url` | Suodata tarjotakseen räätälöidyn aktivointilinkin, kun sivusto on estetty |
| `wu_membership_is_active` | Suodata siitä, pidetäänkö jäsenyys aktiivisena |
| `wu_membership_expired_check_query_params` | Suodata kyselyparametrit, joita käytetään vanhentuneiden jäsenyyksien etsimiseen |
| `wu_membership_trial_check_query_params` | Suodata kyselyparametrit, joita käytetään vanhentuneiden kokeilujaksojen etsimiseen |
