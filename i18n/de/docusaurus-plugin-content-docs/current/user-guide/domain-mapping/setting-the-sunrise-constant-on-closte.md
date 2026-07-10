---
title: Festlegen der Sunrise-Konstante auf Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Setzen der Sunrise-Konstante auf true bei Closte {#setting-the-sunrise-constant-to-true-on-closte}

Einige Host-Anbieter sperren die wp-config.php aus Sicherheitsgründen. Das bedeutet, dass Ultimate Multisite die Datei nicht automatisch bearbeiten kann, um die notwendigen Konstanten einzufügen, damit Domain-Mapping und andere Funktionen funktionieren. Closte ist ein solcher Host.

Closte bietet jedoch eine Möglichkeit, Konstanten auf sichere Weise zur wp-config.php hinzuzufügen. Du musst nur die folgenden Schritte befolgen:

## Im Closte-Dashboard {#on-the-closte-dashboard}

Melde dich zuerst [bei deinem Closte Account an](https://app.closte.com/), klicke auf den Menüpunkt Sites und dann auf den Dashboard-Link der Website, an der du gerade arbeitest:

<!-- Screenshot nicht verfügbar: Closte-Dashboard mit Sites-Menü und Dashboard-Link -->

Auf der linken Seite des Bildschirms werden dir mehrere neue Menüpunkte angezeigt. Navigiere über dieses Menü zur Seite **Einstellungen**:

<!-- Screenshot nicht verfügbar: Linkes Closte-Seitenleistenmenü mit Settings-Option -->

Suche dann unter **Einstellungen** den WP-Config-Tab und anschließend das Feld „Zusätzlicher wp-config.php-Inhalt“ in diesem Tab:

<!-- Screenshot nicht verfügbar: Closte-Settings-Seite mit WP-Config-Tab und Feld für zusätzlichen wp-config.php-Inhalt -->

Im Zusammenhang mit der Installation von Ultimate Multisite musst du die Sunrise-Konstante in dieses Feld einfügen. Füge einfach eine neue Zeile hinzu und füge die untenstehende Zeile ein. Klicke danach auf den Button **Alle speichern**.

define('SUNRISE', true);

Das war’s, du bist startklar. Kehre zum Installationsassistenten von Ultimate Multisite zurück und aktualisiere die Seite, um den Vorgang fortzusetzen.
