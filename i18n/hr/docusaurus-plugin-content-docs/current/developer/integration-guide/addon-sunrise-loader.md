---
title: Učitavač Sunrise datoteke dodatka
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise učitavač datoteka

Ultimate Multisite 2.8.0 dodaje učitavač sunrise proširenja za dodatke i prilagođene MU-plugin integracije koje se moraju pokrenuti tijekom WordPress sunrise pokretanja bez uređivanja generirane datoteke `wp-content/sunrise.php`.

## Kada ga koristiti {#when-to-use-it}

Upotrijebite sunrise proširenje kada se vaša integracija mora pokrenuti prije učitavanja redovnih pluginova, kao što su prilagođeno usmjeravanje domena, obrada zahtjeva specifična za host ili rane prilagodbe pokretanja mreže.

Za uobičajene integracije radije koristite redovne WordPress pluginove, MU-pluginove i dokumentirane Ultimate Multisite hookove. Sunrise kôd pokreće se vrlo rano i trebao bi ostati malen, defenzivan i bez ovisnosti.

## Konvencija imenovanja datoteka {#file-naming-convention}

Izradite PHP datoteku nazvanu `sunrise.php` u direktoriju dodatka čiji naziv počinje s `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Učitavač pretražuje direktorij pluginova za ovaj uzorak:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Podudarajuće datoteke učitavaju se abecednim redoslijedom prema putanji dodatka.

## Gdje smjestiti datoteku {#where-to-place-the-file}

Smjestite datoteku u korijenski direktorij dodatka koji posjeduje sunrise ponašanje:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Pretraživanje se razrješava relativno prema `WP_CONTENT_DIR`, a ne prema trenutačnoj vrijednosti `WP_PLUGIN_DIR`. To održava otkrivanje stabilnim kada multi-tenancy ili drugi rani kôd pokretanja mijenja konstante direktorija pluginova tijekom sunrise faze.

Nemojte izravno uređivati generiranu datoteku `wp-content/sunrise.php`. Učitavač omogućuje prilagođenom kôdu proširenje sunrise ponašanja bez forkanja temeljne sunrise datoteke koju Ultimate Multisite instalira i ažurira.

## Dostupni hookovi i filtri {#hooks-and-filters-available}

Addon sunrise datoteke pokreću se nakon što je Ultimate Multisite mapiranje domena učitano i prije nego što WordPress pokrene `ms_loaded`. U tom trenutku sunrise datoteka može:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- definirati konstante za vrijeme sunrise faze, kao što je `BLOG_ID_CURRENT_SITE`, kada je potrebno;
- čitati stanje Ultimate Multisite sunrise pomoćnika, uključujući stanje usmjeravanja koje koriste multi-tenancy integracije.

Ultimate Multisite pokreće `wu_sunrise_loaded` nakon što njegov sunrise učitavač završi. Upotrijebite tu akciju za kôd koji se treba pokrenuti nakon što je sunrise pokretanje dovršeno, ali i dalje pripada sunrise životnom ciklusu.

Pozivajte samo funkcije koje su već učitane u sunrise fazi. Izbjegavajte rad koji intenzivno koristi bazu podataka, renderiranje predložaka, HTTP zahtjeve i kôd koji pretpostavlja da je uobičajeni redoslijed učitavanja pluginova dovršen.

## Minimalan primjer {#minimal-example}

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

Nakon implementacije datoteke, učitajte mapiranu domenu i nemapirani URL glavne web-lokacije kako biste potvrdili da se obje putanje i dalje ispravno pokreću.
