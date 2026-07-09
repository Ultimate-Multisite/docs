---
title: Lisäosan Sunrise-tiedoston lataaja
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Lisäosan Sunrise-tiedoston lataaja

Ultimate Multisite 2.8.0 lisää sunrise-laajennuslataajan lisäosille ja mukautetuille MU-plugin-integraatioille, joiden täytyy suorittua WordPressin sunrise-käynnistyksen aikana muokkaamatta luotua `wp-content/sunrise.php`-tiedostoa.

## Milloin sitä käytetään

Käytä sunrise-laajennusta, kun integraatiosi täytyy suorittua ennen tavallisten pluginien lataamista, kuten mukautetussa verkkotunnusten reitityksessä, isäntäkohtaisessa pyyntöjen käsittelyssä tai varhaisissa verkon käynnistyksen säädöissä.

Tavallisissa integraatioissa suosi tavallisia WordPress-plugineja, MU-plugineja ja dokumentoituja Ultimate Multisite -koukkuja. Sunrise-koodi suoritetaan hyvin aikaisin, ja sen tulee pysyä pienenä, varovaisena ja riippuvuuksista vapaana.

## Tiedoston nimeämiskäytäntö

Luo PHP-tiedosto nimeltä `sunrise.php` lisäosahakemistoon, jonka nimi alkaa muodolla `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Lataaja käy plugins-hakemiston läpi tämän mallin varalta:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Vastaavat tiedostot ladataan aakkosjärjestyksessä lisäosan polun mukaan.

## Mihin tiedosto sijoitetaan

Sijoita tiedosto sen lisäosan juurihakemistoon, joka omistaa sunrise-toiminnan:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Haku ratkaistaan suhteessa `WP_CONTENT_DIR`-arvoon, ei `WP_PLUGIN_DIR`-arvon nykyiseen arvoon. Tämä pitää löytämisen vakaana, kun moniasiakkuus tai muu varhainen käynnistyskoodi muuttaa plugin-hakemistovakioita sunrise-vaiheen aikana.

Älä muokkaa luotua `wp-content/sunrise.php`-tiedostoa suoraan. Lataaja antaa mukautetun koodin laajentaa sunrise-toimintaa ilman, että haaroitetaan Ultimate Multisite -asentamaa ja päivittämää ytimen sunrise-tiedostoa.

## Käytettävissä olevat koukut ja suodattimet

Lisäosan sunrise-tiedostot suoritetaan sen jälkeen, kun Ultimate Multisite -verkkotunnusmääritys on latautunut, ja ennen kuin WordPress suorittaa `ms_loaded`-toiminnon. Tässä vaiheessa sunrise-tiedosto voi:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- määritellä sunrise-vaiheen vakioita, kuten `BLOG_ID_CURRENT_SITE`, tarvittaessa;
- lukea Ultimate Multisite -sunrise-aputilaa, mukaan lukien reititystila, jota moniasiakkuusintegraatiot käyttävät.

Ultimate Multisite suorittaa `wu_sunrise_loaded`-toiminnon sen jälkeen, kun sen sunrise-lataaja on valmis. Käytä kyseistä toimintoa koodille, jonka tulee suorittua sunrise-käynnistyksen valmistuttua mutta joka kuuluu edelleen sunrise-elinkaareen.

Kutsu vain funktioita, jotka on jo ladattu sunrise-vaiheessa. Vältä tietokantaraskasta työtä, mallien renderöintiä, HTTP-pyyntöjä ja koodia, joka olettaa tavallisen pluginien latausjärjestyksen valmistuneen.

## Minimaalinen esimerkki

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Kun olet ottanut tiedoston käyttöön, lataa määritetty verkkotunnus ja määrittämätön pääsivuston URL varmistaaksesi, että molemmat polut käynnistyvät edelleen oikein.
