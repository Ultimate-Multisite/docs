---
title: Dashboardin ymmärtäminen
sidebar_position: 7
_i18n_hash: 4869a2f03eb529c49c821a22eb6b9647
---
# Ultimate Multisite -hallinnan ymmärtäminen

Ensimmäiseksi tarkastellaan hallintapaneelia ennen kuin syvennymme monimutkaisempiin konfiguraatioasetuksiin ja Ultimate Multisiten toiminnallisuuksiin.

Kuten monien WordPress-lisäosien tapauksessa Ultimate Multisite luo verkostotasoisen valikkoruudun nimeltä **Ultimate Multisite**, jonka alla on useita alavalikkoelementtejä.

## Verkkohallinnan widgetit (Network Dashboard Widgets) {#network-dashboard-widgets}

Ultimate Multisite lisää muutamia hyödyllisiä widgettejä verkostotason hallintapaneeliin. Tämä paneeli löytyy navigointipolulla **My Sites → Network Admin → Dashboard**. Widgetit on suunniteltu tarjoamaan helppo pääsy tietoihin ja yleisiin toimintoihin verkostohallitsijalle.

![Network Dashboard with Ultimate Multisite widgets](/img/admin/network-dashboard-full.png)

### Ensimmäiset askeleet (First Steps) {#first-steps}

![First Steps widget](/img/admin/network-dashboard-first-steps.png)

Tämä widget ilmestyy Ultimate Multisiten uusilla asennuksilla ja muistuttaa verkostohallitsijaa suorittamaan lisätehtäviä, kuten maksutavan konfiguroinnin ja testikäyttäjän luomisen.

### Yhteenveto (Summary) {#summary}

![Summary widget](/img/admin/network-dashboard-summary.png)

Yhteenvetowidget raportoi päivän rekisteröityjen määrästä ja niistä saadusta tuloista. MRR (Monthly Recurring Revenue, kuukausittainen toistuva tulo) osoittaa ennustettua kokonaissummaa asiakkaiden keskuudessa, joilla on tuloa tuottavista jäsenyyksistä.

### Aktiviteetti-virta (Activity Stream) {#activity-stream}

![Activity Stream widget](/img/admin/network-dashboard-activity-stream.png)

Tämä widget raportoi tapahtumista Ultimate Multisiten sisällä. Tapahtumia ovat rekisteröitymissä, peruutusilmoitukset, sivustojen luominen ja poistaminen sekä muut aktiviteetit.

Lisätietoja tapahtumista löydät dokumentaation Events-osiosta.

### Nyt (Right Now) {#right-now}

![Right Now widget](/img/admin/network-dashboard-right-now.png)

Tämä työkaluwidget näyttää lyhyen yhteenvedon käyttäjistä ja sivustoista verkossa. Yläreunan nopeat oikotiet toimintoja mahdollistavat uusi sivustojen tai käyttäjien luomisen yhden napsautuksen sisällä.

### Uutiset ja keskustelut {#news-and-discussions}

![News and Discussions widget](/img/admin/network-dashboard-news.png)

Tämä widget hakee ja näyttää uusimmat Ultimate Multisite -uutiset. Pidä silmällä tässä widgetissa saadaksesi tietoa päivityksistä, kriittisistä virheistä ja turvallisuuskorjauksista.

## Ultimate Multisite Dashboard {#ultimate-multisite-dashboard}

Siellä, kun verkko-tason dashboard esittää kokonaisvaltaisen tiedon verkosta, Ultimate Multisite -dashboard (joka sijaitsee Ultimate Multisite -valikon ylätasolla) esittää tietoa palvelusta.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

### Kuukausittainen toistuva tulo kasvu (Monthly Recurring Revenue Growth) {#monthly-recurring-revenue-growth}

MRR (Monthly Recurring Revenue) -kaavio näyttää kuukausittaisen erittelyn tuloista 12 kuukauden kalenterikaudella.

![MRR Growth chart](/img/admin/um-dashboard-mrr.png)

Uusi tulo seurataan sinisellä, kun taas peruutus tapahtuu punaisella.

### Päivämäärärajojen tuki {#date-range-support}

Asiakasmäärien ja aktiivisuuden mukaan tilastot voivat muuttua ylivoimaisiksi. Dashboardissa olevat päivämäärärajojen tuki antaa verkko-adminille mahdollisuuden keskittyä vain tarvittavaan tietoon ja ajanjaksoon.

![Date range selector and stats](/img/admin/um-dashboard-date-range.png)

Päivämäärärajat säätelevät widgetien alla näytettävän tiedon jaksoja, mukaan lukien tulo, uudet jäsenyydet, rekisteröitymissuunnitelmat maittain, lomakkeiden perusteella rekisteröitymiset ja vieraillut sivustot.

![Dashboard statistics widgets](/img/admin/um-dashboard-stats.png)

:::tip
Jotta **Most Visited Sites** -widget toimii, aktivoi vierailumäärän laskemisen kohdasta **Ultimate Multisite → Settings → Sites → Enable Visits Limitation and Counting**.
:::
