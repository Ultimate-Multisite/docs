---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 fügt einen Sunrise Extension Loader für Add-ons und benutzerdefinierte MU-Plugin-Integrationen hinzu, die während des WordPress Sunrise Bootstrapping-Prozesses ausgeführt werden müssen, ohne dabei die generierte Datei `wp-content/sunrise.php` bearbeiten zu müssen.

## Wann Sie es verwenden sollten {#when-to-use-it}

Verwenden Sie eine Sunrise Extension, wenn Ihre Integration vor dem Laden regulärer Plugins ausgeführt werden muss. Beispiele hierfür sind benutzerdefinierte Domain-Weiterleitungen, die Verarbeitung von Anfragen, die auf den Host zugeschnitten sind, oder frühe Anpassungen des Netzwerks.

Für normale Integrationen sollten Sie stattdessen reguläre WordPress Plugins, MU-Plugins und die dokumentierten Ultimate Multisite Hooks verwenden. Sunrise-Code läuft sehr früh und sollte daher klein, defensiv und unabhängig von externen Abhängigkeiten bleiben.

## Namenskonvention für Dateien {#file-naming-convention}

Erstellen Sie eine PHP-Datei mit dem Namen `sunrise.php` in einem Addon-Verzeichnis, dessen Name mit `ultimate-multisite-` beginnt:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Der Loader durchsucht das Plugins-Verzeichnis nach diesem Muster:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Die passenden Dateien werden in alphabetischer Reihenfolge nach dem Addon-Pfad geladen.

## Wo die Datei platziert werden muss {#where-to-place-the-file}

Platzieren Sie die Datei im Stammverzeichnis des Addons, das für das Sunrise-Verhalten verantwortlich ist:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Die Überprüfung erfolgt relativ zu `WP_CONTENT_DIR` und nicht zum aktuellen Wert von `WP_PLUGIN_DIR`. Das gewährleistet, dass die Erkennung stabil bleibt, selbst wenn bei Multi-Tenancy oder anderem frühen Bootstrap-Code die Plugin-Verzeichnis-Konstanten während des Sunrise-Prozesses geändert werden.

Bearbeiten Sie die generierte Datei `wp-content/sunrise.php` nicht direkt. Der Loader ermöglicht es, benutzerdefinierten Code zu schreiben, der das Sunrise-Verhalten erweitert, ohne die Kern-Sunrise-Datei zu überschreiben, die Ultimate Multisite installiert und aktualisiert.

## Verfügbare Hooks und Filter {#hooks-and-filters-available}

Addon-Sunrise-Dateien laufen, nachdem die Domain-Zuordnung von Ultimate Multisite geladen wurde und bevor WordPress `ms_loaded` auslöst. An diesem Punkt kann eine Sunrise-Datei:

- `$current_site` und `$current_blog` lesen oder überschreiben;
- `$wpdb` zugreifen, nachdem die Datenbankkonfiguration geladen wurde;
- bei Bedarf Sunrise-Zeit-Konstanten wie `BLOG_ID_CURRENT_SITE` definieren;
- den Sunrise-Hilfszustand von Ultimate Multisite lesen, einschließlich des Routing-Zustands, der von Multi-Tenancy-Integrationen verwendet wird.

Ultimate Multisite löst `wu_sunrise_loaded` aus, nachdem sein Sunrise Loader fertig ist. Verwenden Sie dieses Action für Code, der nach Abschluss des Sunrise Bootstrapping-Prozesses laufen soll, aber dennoch zum Sunrise-Lebenszyklus gehört.

Rufen Sie nur Funktionen auf, die bereits in der Sunrise-Phase geladen sind. Vermeiden Sie datenbankintensive Arbeiten, Template-Rendering, HTTP-Anfragen und Code, der davon ausgeht, dass die normale Plugin-Ladereihenfolge abgeschlossen ist.

## Minimalbeispiel {#minimal-example}

```php
<?php
/**
 * Sunrise Extension für eine benutzerdefinierte Host-Integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Passt frühe Routings oder Konstanten an, bevor ms_loaded ausgeführt wird.
}
```

Nach dem Bereitstellen der Datei laden Sie eine zugeordnete Domain und eine nicht zugeordnete Haupt-Site-URL, um zu bestätigen, dass beide Pfade weiterhin korrekt bootstrappen.
