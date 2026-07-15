---
title: Ultimate Multisiten asentaminen
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisiten asentaminen

:::note
Tämä opas olettaa, että WordPress Multisite on jo asennettu ja määritetty. Lisätietoja löydät tästä oppaasta [this tutorial](https://www.wpbeginner.com/glossary/multisite/) WP Beginner -sivustolta.
:::

## Laajennuksen asentaminen {#installing-the-plugin}

Ultimate Multisite on saatavilla ilmaiseksi osoitteessa [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/).

Siirry **Verkkoadmin-hallintapaneelissa** kohtaan **Laajennukset → Lisää uusi laajennus**.

![Verkkoadminin "Lisää uusi laajennus" -sivu](/img/installation/add-new-plugin.png)

Hae termillä **"Ultimate Multisite"** (lainausmerkit tarkkaa hakua varten), jolloin se näkyy ensimmäisenä tuloksena. Napsauta **Asenna nyt**.

![Hakutulokset, joissa näkyy Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Kun asennus on valmis, napsauta **Aktivoi verkossa** aktivoidaksesi laajennuksen koko verkossasi.

![Laajennus asennettu ja "Aktivoi verkossa" -painike näkyvissä](/img/installation/plugin-installed.png)

Aktivoinnin jälkeen sinut ohjataan automaattisesti asetusvelhoon.

![Laajennus aktivoitu ja ohjaa käyttäjän velhoon](/img/installation/plugin-activated.png)

## Asetusvelho {#setup-wizard}

Asetusvelho opastaa sinua Ultimate Multisiten määrittämisessä noin 10 minuutissa.

### Tervetuloa {#welcome}

Napsauta **Aloita** aloittaaksesi.

![Asetusvelhon tervetulosivu](/img/installation/wizard-welcome.png)

### Esiasennuksen tarkistukset {#pre-install-checks}

Tässä vaiheessa tarkistetaan järjestelmätietosi ja WordPress-asennuksesi varmistaaksesi, että ne täyttävät Ultimate Multisiten vaatimukset. Jos kaikki näyttää hyvältä, napsauta **Siirry seuraavaan vaiheeseen**.

![Esiasennuksen tarkistukset, joissa näkyvät järjestelmävaatimukset](/img/installation/wizard-pre-install-checks.png)

:::note Aktivoi verkossa -painike (v2.6.1+)
Jos Ultimate Multisite on asennettu, mutta **sitä ei ole vielä aktivoitu verkossa** – esimerkiksi jos napsautit **Aktivoi** (yksittäinen sivusto) sen sijaan, että olisit napsauttanut **Aktivoi verkossa** laajennusten hallintanäytöltä – esiasennuksen tarkistusvaihe havaitsee tämän ja näyttää **Aktivoi verkossa** -painikkeen.

Napsauttamalla **Aktivoi verkossa** aktivoit laajennuksen automaattisesti koko multisivustoverkossasi. Kun aktivointi on suoritettu, velho jatkaa normaalisti asennusvaiheeseen. Sinun ei tarvitse poistua velhosta korjataksesi aktivointitilaa.
:::

### Asennus {#installation}

Asentaja luo tarvittavat tietokantataulut ja asentaa `sunrise.php`-tiedoston, jota Ultimate Multisite tarvitsee toimiakseen. Napsauta **Asenna** jatkaaksesi.

![Asennusvaihe, jossa näkyvät tietokantataulut ja sunrise.php](/img/installation/wizard-installation.png)

### Yrityksesi tiedot {#your-company}

Täytä yrityksesi tiedot ja määritä oletusvaluutta. Näitä tietoja käytetään koko WaaS-alustallasi. Napsauta **Jatka**, kun olet valmis.

![Yrityksen tietojen määritysvaihe](/img/installation/wizard-your-company.png)

### Oletussisältö {#default-content}

Tässä vaiheessa voit asentaa ennalta määritettyjä malleja, tuotteita ja muuta aloitusmateriaalia. Tämä on loistava tapa tutustua Ultimate Multisiten ominaisuuksiin. Napsauta **Asenna** lisätäksesi oletussisällön tai ohita tämä vaihe, jos haluat aloittaa puhtaalta pöydältä.

![Oletussisällön asennusvaihe](/img/installation/wizard-default-content.png)

### Suositellut laajennukset {#recommended-plugins}

Asenna valinnaisesti suositeltuja lisälaajennuksia. Napsauta **Asenna** lisätäksesi ne tai ohita jatkaaksesi.

![Suositeltujen laajennusten vaihe](/img/installation/wizard-recommended-plugins.png)

### Valmis! {#ready}

Siinä kaikki! Ultimate Multisite -asennuksesi on valmis. Voit nyt aloittaa Website as a Service -alustan rakentamisen **Verkkoadmin-hallintapaneelista**.

![Asetus valmis – Valmis-näyttö](/img/installation/wizard-ready.png)

![Verkkoadmin-hallintapaneeli, jossa Ultimate Multisite on aktiivinen](/img/installation/network-dashboard.png)

Pidä hauskaa!
