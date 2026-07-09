---
title: Nalagalnik datoteke Sunrise za dodatek
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 dodaja nalagalnik razširitev sunrise za dodatke in integracije MU-plugin po meri, ki se morajo izvajati med začetnim nalaganjem WordPress sunrise brez urejanja ustvarjene datoteke `wp-content/sunrise.php`.

## Kdaj ga uporabiti {#when-to-use-it}

Razširitev sunrise uporabite, ko se mora vaša integracija izvesti, preden se naložijo običajni vtičniki, na primer usmerjanje domen po meri, obravnava zahtev, specifična za gostitelja, ali zgodnje prilagoditve zagona omrežja.

Za običajne integracije raje uporabite običajne WordPress vtičnike, MU-plugin in dokumentirane kljuke Ultimate Multisite. Koda sunrise se izvaja zelo zgodaj ter naj ostane majhna, obrambno zasnovana in brez odvisnosti.

## Konvencija poimenovanja datotek {#file-naming-convention}

Ustvarite PHP datoteko z imenom `sunrise.php` v imeniku dodatka, katerega ime se začne z `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Nalagalnik pregleda imenik vtičnikov za ta vzorec:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ujemajoče se datoteke se naložijo po abecednem vrstnem redu glede na pot dodatka.

## Kam postaviti datoteko {#where-to-place-the-file}

Datoteko postavite v korenski imenik dodatka, ki je lastnik vedenja sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Pregled se razreši relativno na `WP_CONTENT_DIR`, ne na trenutno vrednost `WP_PLUGIN_DIR`. To ohranja odkrivanje stabilno, ko večnajemništvo ali druga zgodnja zagonska koda med sunrise spremeni konstante imenika vtičnikov.

Ne urejajte neposredno ustvarjene datoteke `wp-content/sunrise.php`. Nalagalnik omogoča, da koda po meri razširi vedenje sunrise brez forkanja osnovne datoteke sunrise, ki jo Ultimate Multisite namesti in posodablja.

## Razpoložljive kljuke in filtri {#hooks-and-filters-available}

Datoteke sunrise dodatkov se zaženejo po tem, ko se naloži preslikava domen Ultimate Multisite, in preden WordPress sproži `ms_loaded`. Na tej točki lahko datoteka sunrise:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- po potrebi definira konstante časa sunrise, kot je `BLOG_ID_CURRENT_SITE`;
- bere stanje pomožnih funkcij Ultimate Multisite sunrise, vključno s stanjem usmerjanja, ki ga uporabljajo integracije večnajemništva.

Ultimate Multisite sproži `wu_sunrise_loaded`, ko se njegov nalagalnik sunrise konča. To dejanje uporabite za kodo, ki se mora izvesti po končanem zagonu sunrise, vendar še vedno spada v življenjski cikel sunrise.

Kličite samo funkcije, ki so že naložene v fazi sunrise. Izogibajte se delu, ki močno obremenjuje bazo podatkov, izrisovanju predlog, HTTP zahtevam in kodi, ki predpostavlja, da je običajni vrstni red nalaganja vtičnikov že končan.

## Minimalen primer {#minimal-example}

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

Po namestitvi datoteke naložite preslikano domeno in nepreslikan URL glavnega spletnega mesta, da potrdite, da se obe poti še vedno pravilno zaganjata.
