---
title: Gehigarriaren Sunrise fitxategi-kargatzailea
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Gehigarriaren Sunrise fitxategi-kargatzailea {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 bertsioak sunrise hedapen-kargatzaile bat gehitzen du gehigarrientzat eta neurrira egindako MU-plugin integrazioentzat, WordPress sunrise abiaraztean exekutatu behar direnean sortutako `wp-content/sunrise.php` fitxategia editatu gabe.

## Noiz erabili {#when-to-use-it}

Erabili sunrise hedapen bat zure integrazioak ohiko pluginak kargatu aurretik exekutatu behar duenean, hala nola neurrira egindako domeinu-bideratzea, ostalariaren araberako eskaera-kudeaketa edo sarearen abiarazte goiztiarreko doikuntzak.

Ohiko integrazioetarako, hobetsi WordPress plugin arruntak, MU-pluginak eta dokumentatutako Ultimate Multisite hook-ak. Sunrise kodea oso goiz exekutatzen da, eta txikia, defentsiboa eta mendekotasunik gabea izan behar du.

## Fitxategiak izendatzeko konbentzioa {#file-naming-convention}

Sortu `sunrise.php` izeneko PHP fitxategi bat `ultimate-multisite-` hasten den izena duen gehigarri-direktorio batean:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Kargatzaileak pluginen direktorioa eskaneatzen du eredu honen bila:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Bat datozen fitxategiak ordena alfabetikoan kargatzen dira gehigarriaren bidearen arabera.

## Non kokatu fitxategia {#where-to-place-the-file}

Kokatu fitxategia sunrise portaeraren jabe den gehigarriaren erro-direktorioan:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Eskaneatzea `WP_CONTENT_DIR`-ekiko ebazten da, ez `WP_PLUGIN_DIR`-en uneko balioarekiko. Horrek aurkikuntza egonkor mantentzen du multi-tenancy edo beste abiarazte goiztiarreko kode batzuek plugin-direktorioko konstanteak sunrise fasean aldatzen dituztenean.

Ez editatu zuzenean sortutako `wp-content/sunrise.php` fitxategia. Kargatzaileak neurrira egindako kodeari sunrise portaera hedatzen uzten dio Ultimate Multisite-k instalatu eta eguneratzen duen core sunrise fitxategia fork egin gabe.

## Eskuragarri dauden hook-ak eta iragazkiak {#hooks-and-filters-available}

Gehigarrien sunrise fitxategiak Ultimate Multisite domeinu-mapatzea kargatu ondoren eta WordPress-ek `ms_loaded` jaurti aurretik exekutatzen dira. Une honetan, sunrise fitxategi batek hau egin dezake:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- behar denean sunrise garaiko konstanteak definitu, hala nola `BLOG_ID_CURRENT_SITE`;
- Ultimate Multisite sunrise laguntzailearen egoera irakurri, multi-tenancy integrazioek erabiltzen duten bideratze-egoera barne.

Ultimate Multisite-k `wu_sunrise_loaded` jaurtitzen du bere sunrise kargatzailea amaitu ondoren. Erabili ekintza hori sunrise abiaraztea osatu ondoren exekutatu behar den baina oraindik sunrise bizi-zikloari dagokion kodearentzat.

Deitu soilik sunrise fasean dagoeneko kargatuta dauden funtzioei. Saihestu datu-basean lan astuna egitea, txantiloiak errendatzea, HTTP eskaerak eta ohiko pluginen karga-ordena amaitu dela suposatzen duen kodea.

## Gutxieneko adibidea {#minimal-example}

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

Fitxategia hedatu ondoren, kargatu mapatutako domeinu bat eta mapatu gabeko gune nagusiko URL bat, bi bideek oraindik behar bezala abiarazten dutela berresteko.
