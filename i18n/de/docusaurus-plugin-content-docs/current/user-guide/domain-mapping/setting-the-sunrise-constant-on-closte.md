---
title: Festlegen der Sonnenaufgangskonstante auf Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Die Sunrise-Konstante auf Closte auf true setzen

Einige Host-Anbieter sperren die wp-config.php aus Sicherheitsgründen. Das bedeutet, dass Ultimate Multisite die Datei nicht automatisch bearbeiten kann, um die notwendigen Konstanten einzufügen, damit Domain‑Mapping und andere Funktionen funktionieren. Closte ist einer dieser Anbieter.

Closte bietet jedoch eine Möglichkeit, Konstanten sicher zur wp-config.php hinzuzufügen. Sie müssen lediglich die unten aufgeführten Schritte befolgen:

## Auf dem Closte-Dashboard

Zuerst [loggen Sie sich in Ihr Closte-Konto ein](https://app.closte.com/), klicken Sie auf den Menüpunkt Sites und anschließend auf den Dashboard-Link der Seite, an der Sie gerade arbeiten:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Sie sehen eine Reihe neuer Menüeinträge auf der linken Seite des Bildschirms. Navigieren Sie zur **Settings**-Seite über dieses Menü:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Dann, auf der **Settings**-Seite, finden Sie den WP‑Config-Tab und anschließend das Feld „Additional wp-config.php content“ auf diesem Tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Im Zusammenhang mit der Installation von Ultimate Multisite müssen Sie die Sunrise-Konstante in dieses Feld einfügen. Fügen Sie einfach eine neue Zeile hinzu und fügen Sie die folgende Zeile ein. Danach klicken Sie auf die Schaltfläche **Save All**.

define('SUNRISE', true);

Das war’s, Sie sind fertig. Kehren Sie zum Ultimate Multisite-Installationsassistenten zurück und aktualisieren Sie die Seite, um den Prozess fortzusetzen.
