---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 aggiunge un caricatore di estensioni "sunrise" per gli add-on e le integrazioni personalizzate MU-plugin che devono essere eseguite durante il bootstrapping di WordPress sunrise senza dover modificare il file `wp-content/sunrise.php` generato.

## Quando usarlo

Utilizza un'estensione sunrise quando la tua integrazione deve essere eseguita prima del caricamento dei plugin regolari, ad esempio per il routing di domini personalizzati, la gestione delle richieste specifiche dell'host o aggiustamenti precoci del bootstrap della rete.

Per le integrazioni normali, è preferibile utilizzare i plugin WordPress regolari, gli MU-plugin e i hook documentati di Ultimate Multisite. Il codice sunrise viene eseguito molto presto e dovrebbe rimanere piccolo, difensivo e privo di dipendenze.

## Convenzione di denominazione dei file

Crea un file PHP chiamato `sunrise.php` in una directory add-on il cui nome inizia con `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Il caricatore scansiona la directory dei plugin per questo pattern:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

I file corrispondenti vengono caricati in ordine alfabetico per percorso add-on.

## Dove posizionare il file

Posiziona il file nella directory radice dell'add-on che gestisce il comportamento sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

La scansione è risolta rispetto a `WP_CONTENT_DIR`, non al valore corrente di `WP_PLUGIN_DIR`. Questo mantiene la scoperta stabile quando la multi-tenancy o altri codici di bootstrap precoci modificano le costanti della directory dei plugin durante il sunrise.

Non modificare direttamente il file `wp-content/sunrise.php` generato. Il caricatore permette al codice personalizzato di estendere il comportamento sunrise senza dover "forkare" il file core sunrise che Ultimate Multisite installa e aggiorna.

## Hook e filtri disponibili

I file sunrise degli add-on vengono eseguiti dopo che il mapping di domini di Ultimate Multisite è stato caricato e prima che WordPress emetta `ms_loaded`. A questo punto, un file sunrise può:

- leggere o sovrascrivere `$current_site` e `$current_blog`;
- accedere a `$wpdb` dopo che la configurazione del database è stata caricata;
- definire costanti temporali sunrise come `BLOG_ID_CURRENT_SITE` quando necessario;
- leggere lo stato helper sunrise di Ultimate Multisite, incluso lo stato di routing utilizzato dalle integrazioni multi-tenancy.

Ultimate Multisite emette `wu_sunrise_loaded` dopo che il suo caricatore sunrise ha terminato. Usa questo action per il codice che dovrebbe eseguire dopo che il bootstrap sunrise è completo, ma che fa comunque parte del ciclo di vita sunrise.

Chiama solo funzioni che sono già caricate nella fase sunrise. Evita lavori pesanti sul database, il rendering di template, le richieste HTTP e il codice che assume che l'ordine di caricamento normale dei plugin sia stato completato.

## Esempio minimo

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

Dopo aver distribuito il file, carica un dominio mappato e un URL main-site non mappato per confermare che entrambi i percorsi vengano ancora bootstrapati correttamente.
