---
title: Dodatak Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 dodaje sunrise extension loader za add-one i custom MU-plugin integracije koje moraju raditi tokom WordPress sunrise bootstrappinga, a da ne mijenjaju generisani fajl `wp-content/sunrise.php`.

## Kada ga koristiti {#when-to-use-it}

Koristite sunrise extension kada vaša integracija mora raditi prije nego što se učitaju regularni pluginovi, kao što su custom domain routing, rukovanje zahtjevima specifičnim za host, ili ranije prilagodbe network bootstrapa.

Za normalne integracije, preferirajte regularne WordPress pluginove, MU-pluginove i dokumentovane Ultimate Multisite hook-ove. Sunrise kod radi vrlo rano i treba biti mali, zaštitnički i bez zavisnosti od drugih komponenti.

## Konvencija imenovanja fajlova {#file-naming-convention}

Kreirajte PHP fajl pod nazivom `sunrise.php` u direktorijumu add-ona čije ime počinje sa `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader skenira direktorijum pluginova za ovaj obrazac:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Poklapajući fajlovi se učitavaju abecednim redoslijedom po putanji add-ona.

## Gdje postaviti fajl {#where-to-place-the-file}

Postavite fajl u korijenski direktorijum add-ona koji posjeduje sunrise ponašanje:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skeniranje je riješeno relativno u odnosu na `WP_CONTENT_DIR`, a ne na trenutnu vrijednost `WP_PLUGIN_DIR`. Ovo održava otkrivanje stabilnim kada multi-tenancy ili drugi rani bootstrap kod mijenjaju konstante direktorijuma pluginova tokom sunrise-a.

Ne mijenjujte direktno generisani fajl `wp-content/sunrise.php`. Loader omogućava custom kodu da proširi sunrise ponašanje bez forkovanja osnovnog sunrise fajla koji Ultimate Multisite instalira i ažurira.

## Dostupni hook-ovi i filteri {#hooks-and-filters-available}

Addon sunrise fajlovi rade nakon što je Ultimate Multisite domain mapping učitao i prije nego što WordPress pokrene `ms_loaded`. U ovom trenutku, sunrise fajl može:

- pročitati ili nadjačati `$current_site` i `$current_blog`;
- pristupiti `$wpdb` nakon što je konfiguracija baze podataka učitana;
- definisati konstante za vrijeme sunrise-a, kao što su `BLOG_ID_CURRENT_SITE`, kada je potrebno;
- pročitati stanje pomoćnika za sunrise Ultimate Multisite, uključujući stanje rutiranja koje je korišteno od strane multi-tenancy integracija.

Ultimate Multisite pokreće `wu_sunrise_loaded` nakon što mu loader za sunrise završi. Koristite taj action za kod koji treba raditi nakon što je bootstrap sunrise završen, ali i dalje pripada životnom ciklusu sunrise-a.

Pozovite samo funkcije koje su već učitane u fazi sunrise-a. Izbjegavajte rad teški vezan za bazu podataka, renderovanje šablona, HTTP zahtjeve i kod koji pretpostavlja da je završen normalni redoslijed učitavanja pluginova.

## Minimalni primjer {#minimal-example}

```php
<?php
/**
 * Sunrise extension za custom host integraciju.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Prilagodite rano rutiranje ili konstante prije ms_loaded.
}
```

Nakon implementacije fajla, učitajte mapirani domen i ne-mapirani URL glavne stranice kako biste potvrdili da oba puta i dalje pravilno bootstrapuju.
