---
title: Goşmaça Sunrise faýl ýükleýjisi
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Goşmaça Sunrise faýl ýükleýjisi

Ultimate Multisite 2.8.0, döredilen `wp-content/sunrise.php` faýlyny redaktirlemezden WordPress sunrise başlangyç ýüklenişi wagtynda işlemeli goşmaçalar we ýörite MU-plugin integrasiýalary üçin sunrise giňeltme ýükleýjisini goşýar.

## Haçan ulanmaly

Integrasiýaňyz adaty plaginler ýüklenmezinden öň işlemeli bolsa, meselem ýörite domen ugrukdyrmasy, hosta mahsus soraglary işlemek ýa-da irki tor başlangyç ýükleniş sazlamalary üçin sunrise giňeltmesini ulanyň.

Adaty integrasiýalar üçin adaty WordPress plaginlerini, MU-plugin-leri we resminamalaşdyrylan Ultimate Multisite hook-laryny ileri tutuň. Sunrise kody örän ir işleýär we kiçi, goragly hem-de baglylyksyz bolmaly.

## Faýl atlandyryş düzgüni

Ady `ultimate-multisite-` bilen başlanýan goşmaça katalogynda `sunrise.php` atly PHP faýly dörediň:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ýükleýji plaginler katalogyny şu nagyş boýunça gözden geçirýär:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Gabat gelýän faýllar goşmaça ýolunyň elipbiý tertibinde ýüklenýär.

## Faýly nirede ýerleşdirmeli

Faýly sunrise özüni alyp barşyna eýe bolan goşmaçanyň kök katalogynda ýerleşdiriň:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Gözden geçiriş `WP_PLUGIN_DIR`-iň häzirki bahasyna däl-de, `WP_CONTENT_DIR`-e görä çözülýär. Bu, köp-kärendeçilik ýa-da beýleki irki başlangyç ýükleniş kody sunrise wagtynda plagin katalog konstantalaryny üýtgedende tapylmagyň durnukly bolmagyny üpjün edýär.

Döredilen `wp-content/sunrise.php` faýlyny göni redaktirlemäň. Ýükleýji ýörite koda Ultimate Multisite gurýan we täzeläp durýan esasy sunrise faýlyny şahalamazdan sunrise özüni alyp barşyny giňeltmäge mümkinçilik berýär.

## Elýeterli hook-lar we filter-ler

Goşmaça sunrise faýllary Ultimate Multisite domen baglanyşygy ýüklenenden soň we WordPress `ms_loaded` işledilmezinden öň işleýär. Bu pursatda sunrise faýly şulary edip biler:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- zerur bolanda `BLOG_ID_CURRENT_SITE` ýaly sunrise wagty konstantalaryny kesgitläp biler;
- köp-kärendeçilik integrasiýalary tarapyndan ulanylýan ugrukdyrma ýagdaýyny hem öz içine alýan Ultimate Multisite sunrise kömekçi ýagdaýyny okap biler.

Ultimate Multisite öz sunrise ýükleýjisi tamamlanandan soň `wu_sunrise_loaded` işledýär. Sunrise başlangyç ýüklenişi tamamlanandan soň işlemeli, emma şonda-da sunrise ýaşaýyş aýlawyna degişli kod üçin şol hereketi ulanyň.

Diňe sunrise tapgyrynda eýýäm ýüklenen funksiýalary çagyryň. Maglumat bazasyna agyr düşýän işlerden, şablon renderlemekden, HTTP soraglaryndan we adaty plagin ýükleniş tertibiniň tamamlanandygyny çaklaýan koddan gaça duruň.

## Minimal mysal

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

Faýly ýerleşdireniňizden soň, iki ýoluň hem henizem dogry başlangyç ýüklenýändigini tassyklamak üçin baglanan domeni we baglanmadyk esasy saýt URL-ni ýüküň.
