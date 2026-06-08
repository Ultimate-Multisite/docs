---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 adaugă un încărcător de extensii sunrise pentru add-on-uri și integrarile personalizate MU-plugin care trebuie să ruleze în timpul inițializării (bootstrapping) WordPress sunrise, fără a edita fișierul generat `wp-content/sunrise.php`.

## Când să îl folosești

Folosește o extensie sunrise atunci când integrarea ta trebuie să ruleze înainte ca plugin-urile obișnuite să fie încărcate, cum ar fi rutarea domeniului personalizat, gestionarea cererilor specifice gazdei sau ajustări timpurii ale bootstrapping-ului rețelei.

Pentru integrarile normale, preferă plugin-urile obișnuite WordPress, MU-plugin-urile și hook-urile documentate ale Ultimate Multisite. Codul sunrise rulează foarte devreme și ar trebui să rămână mic, defensiv și fără dependențe.

## Convenția de denumire a fișierelor

Creează un fișier PHP numit `sunrise.php` într-un director de add-on al cărui nume începe cu `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Încărcătorul scanează directorul plugin-urilor pentru acest model:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Fișierele care corespund sunt încărcate în ordine alfabetică după calea add-on-ului.

## Unde să plasezi fișierul

Plasează fișierul în directorul rădăcină al add-on-ului care deține comportamentul sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Scanarea este rezolvată relativ la `WP_CONTENT_DIR`, nu la valoarea curentă a `WP_PLUGIN_DIR`. Acest lucru menține descoperirea stabilă atunci când multi-tenancy sau alt cod de bootstrapping devreme modifică constantele directorului plugin-urilor în timpul sunrise.

Nu edita direct fișierul generat `wp-content/sunrise.php`. Încărcătorul permite ca codul personalizat să extindă comportamentul sunrise fără a forka fișierul core sunrise pe care Ultimate Multisite îl instalează și îl actualizează.

## Hook-uri și filtre disponibile

Fișierele sunrise ale add-on-urilor rulează după ce Ultimate Multisite a încărcat maparea domeniului și înainte ca WordPress să declanșeze `ms_loaded`. În acest moment, un fișier sunrise poate:

- să citească sau să suprascrie `$current_site` și `$current_blog`;
- să acceseze `$wpdb` după ce s-a încărcat configurarea bazei de date;
- să definească constante pentru perioada sunrise, cum ar fi `BLOG_ID_CURRENT_SITE`, atunci când este necesar;
- să citească starea helper-ului sunrise Ultimate Multisite, inclusiv starea de rutare folosită de integrarile multi-tenancy.

Ultimate Multisite declanșează `wu_sunrise_loaded` după ce încărcătorul său sunrise a terminat. Folosește acest action pentru codul care ar trebui să ruleze după ce bootstrapping-ul sunrise este complet, dar care aparține totuși ciclului de viață sunrise.

Chema doar funcțiile care sunt deja încărcate în faza sunrise. Evită munca grea de bază de date, randarea de template-uri, cererile HTTP și codul care presupune că s-a finalizat ordinea normală de încărcare a plugin-urilor.

## Exemplu minim

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

După implementarea fișierului, încarcă un domeniu mapat și o adresă principală (main-site) nemapată pentru a confirma că ambele căi fac bootstrapping-ul corect.
