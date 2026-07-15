---
title: Monisivuisen asennusohjain
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Asetusohje

Ultimate Multisite sisältää sisäänrakennetun ohjelman, joka muuntaa vakiintuneen WordPress-asennuksen automaattisesti WordPress Multisite -verkostoksi. Tämä poistaa tarpeen manuaalisesti muokata `wp-config.php`-tiedostoa tai suorittaa tietokantakomentoja.

:::tip
Jos WordPress-asennuksesi on jo käytössä Multisite-verkostona, voit ohittaa tämän vaiheen kokonaan. Ohjelma ilmestyy vain silloin, kun Multisite ei ole vielä aktivoitu.
:::

## Milloin ohjelma ilmestyy? {#when-does-the-wizard-appear}

Kun aktivoit Ultimate Multisiten vakiintuneelle (ei-Multisite) WordPress-asennukselle, plugin havaitsee, että Multisite ei ole käytössä, ja ohjaa sinut automaattisesti Multisite Setup -ohjelmaan sen sijaan, että se ohjaisi normaaliin asennusohjelmaan.

Voit myös päästä siihen suoraan **WP Admin > Ultimate Multisite > Multisite Setup** kautta.

## Edellytykset {#prerequisites}

Ohjelman suorittamisen ennen sitä varmista:

- Sinulla on **administratoroikeudet** WordPress-asennukseesi
- Palvelimen `wp-config.php`-tiedosto on **kirjoitettavissa** verkkopalvelimelta
- Sinulla on **tuore takaisinvaraus** tiedostoista ja tietokannasta

:::warning
Ohjelma muokkaa `wp-config.php`-tiedostoasi ja luo uusia tietokantataulukoita. Luo aina takaisinvaraus ennen jatkamista.
:::

## Vaihe 1: Tervetuloa {#step-1-welcome}

Ensimmäinen näyttö selittää, mitä WordPress Multisite on ja mitä ohjelma tekee:

- Aktivoi Multisite-ominaisuuden WordPress-konfiguraatiossa
- Luo tarvittavat verkoston tietokantataulut
- Lisää tarvittavat multisite-vakio-muuttujat `wp-config.php`-tiedostoon
- Aktivoi Ultimate Multisiten verkon yli

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

Napsauta **Jatka** siirtyä eteenpäin.

## Vaihe 2: Verkon konfigurointi {#step-2-network-configuration}

Tässä vaiheessa sinulta pyydetään määrittämään verkkoasetuksesi.

### Sivuston rakenne {#site-structure}

Valitse, miten verkkosivustoja organisoit haluat:

- **Alaalat (Sub-domains)** (Suositeltu) — Jokaisella sivustolla on oma alaosa, esimerkiksi `site1.yourdomain.com`
- **Alakansiot (Sub-directories)** — Sivustot luodaan polkuina, esimerkiksi `yourdomain.com/site1`

:::note
Jos valitset alalaita, sinun on konfiguroitava **wildcard DNS** ja **wildcard SSL -sertifikaatti** domeenisi varten. Useimmat hallitut WordPress-isännät hoitavat tämän automaattisesti. Katso [Ultimate Multisite 101](./ultimate-multisite-101) yksityiskohtaista vertailua.
:::

### Verkon nimi (Network Title) {#network-title}

Syötä nimi verkossasi. Tämä asetetaan oletuksena nykyisen sivuston nimeen lisättynä "Network". Voit muuttaa tätä myöhemmin verkkoasetuksista.

### Verkon ylläpitäjän sähköposti (Network Admin Email) {#network-admin-email}

Sähköpostiosoite, jota käytetään verkon hallintailmoituksiin. Tämä asetetaan oletuksena nykyisen käyttäjän sähköpostiosoitteeseen.

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

Täytettyä jälkeen klikkaa **Jatka** (Continue) siirtyä eteenpäin.

## Vaihe 3: Asennus (Installation) {#step-3-installation}

Klikkaa **Asenna** (Install) -painiketta aloittaaksesi. Ohjelma suorittaa viisi automaattista vaihetta peräkkäin, ja jokainen näyttää etenemisensä reaaliajassa:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Vaihe | Kuvaus |
|---|---|
| **Ota käyttöön monisite** | Lisää `WP_ALLOW_MULTISITE` -vakion tiedosto `wp-config.php`:n sisältä |
| **Luo verkko** | Luo monisite-tietokantataulut (`wp_site`, `wp_sitemeta`, `wp_blogs` jne.) ja täytä ne verkkoasetuksillasi |
| **Päivitä konfiguraatio** | Lisää lopulliset monisite-vakioiden tiedostoon `wp-config.php`:iin (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE` jne.) |
| **Korjaa evästeet** | Varmistaa, että sivuston URL on oikein verkkoasetuksissa estää sisäänkirjautumisongelmia aktivoitua jälkeen |
| **Aktivoi verkko-lisäosa** | Aktivoi Ultimate Multisite verkossa jotta se toimii koko verkossa |

Jokainen vaihe näyttää yhden näistä tiloista:

- **Odottamassa (Pending)** — Odottaa käsittelyä
- **Asennetaan... (Installing...)** — Suoritetaan tällä hetkellä
- **Onnistui! (Success!)** — Suoritettu onnistuneesti
- **Virheilmoitus (Error message)** — Virhe tapahtui (viesti kuvaa ongelmaa)

Kun kaikki vaiheet ovat suorittuneet onnistuneesti, näet jokaiselle kohdalle vihreän "Onnistui!" -tilanteen:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Sen jälkeen ohjain jatkaa automaattisesti valmistumissivulle.

## Vaihe 4: Valmis {#step-4-complete}

Kun asennus on valmis, näet onnistumisviestin, joka vahvistaa WordPress Multisiten olevan käytössä.

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

Voit nyt jatkaa Ultimate Multisite -asennusohjaimella WaaS-alustan konfiguroimiseksi (yritystiedot, oletussisältö, maksutulossivustot jne.).

:::note
Multisiteasennus valmistuttua selaimesi ohjataan uudelleen uuden verkkohallintoyhteyden kautta. Saatat joutua kirjautumaan uudelleen, koska autentikointikokemukset on päivitetty multisite-ympäristöä varten.
:::

## Manuaalinen asennusvaihtoehto (Fallback) {#manual-setup-fallback}

Jos ohjelma ei pysty kirjoittamaan tiedostoihin `wp-config.php` -tiedostoon (tiedostojen käyttöoikeuksien tai palvelimen rajoitusten vuoksi), se näyttää sinulle tarkat koodilinjat, jotka sinun täytyy lisätä manuaalisesti:

1. **wp-config.php -vakioiden** määritykset, jotka tulee lisätä `/* That's all, stop editing! */` -rivin yläpuolelle
2. **.htaccess -uudelleenohjausasetukset**, jotka sopivat valitsemaasi sivuston rakenteeseen (aladomeen tai alikansioon)

Manuaaliset muutokset tehtyä, päivitä sivu ja ohjelma havaitsee, että multisite on nyt aktiivinen.

## Ongelmanratkaisu {#troubleshooting}

### Ohjelma ilmoittaa, että wp-config.php ei ole kirjoitettavissa {#the-wizard-says-wp-configphp-is-not-writable}

Verkkopalvelinprosessilla on oltava kirjoitusoikeudet `wp-config.php` -tiedostoon. Voit joko:

- Muuttaa tiedoston käyttöoikeuksia tilapäisesti `644` tai `666`:ksi
- Käyttää ohjelman tarjoamia manuaalisen asennusvaihtoehtoja (fallback)
- Pyydä hostaajasi apua

### Sivustot eivät ole saatavilla asennuksen jälkeen (aladomeen) {#sites-are-not-accessible-after-setup-subdomains}

Jos valitsit aladomen rakenteen, sinun on määritettävä **wildcard DNS** -asetukset domeenisi kohdalle. Lisää DNS-rekisteri:

```
Type: A (tai CNAME)
Host: *
Value: [serverin IP-osoite]
```

Tarkista hostaajasi kanssa, jos et ole varma siitä, miten tätä asetusta konfiguroidaan.

### Autentikointiongelmia asennuksen jälkeen {#authentication-issues-after-setup}

Jos olet uloskirjautunut tai kohtaat evästeisiin liittyviä virheitä multisite-asetusten jälkeen:

1. Tyhjennä selaimen evästeet kyseiselle sivustolle
2. Kirjaudu uudelleen osoitteeseen `yourdomain.com/wp-login.php`
3. Jos ongelma jatkuu, tarkista, ettei `wp-config.php`-tiedostossa ole asetettu `COOKIE_DOMAIN` -vakioita `false`:ksi – tämä on tunnettu ongelma aladomen multisite-asennuksissa

### Asennuksessa epäonnistui jokin vaihe {#a-step-failed-during-installation}

Jos asennusvaiheessa ilmenee virhe:

1. Huomioi näytetty virheilmoitus.
2. Palaa konfigurointivaiheeseen ja yritä uudelleen.
3. Jos virhe jatkuu, tarkista palvelimesi PHP-virheloki saadaksesi lisätietoja.
4. Vaiheet, jotka on jo suoritettu, jätetään huomiotta seuraavissa käynnityksissä (asennin on idempotentti).
