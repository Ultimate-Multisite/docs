---
title: D'Ufsetze vum Sunrise Constant uf Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# De Sunrise constant uf Closte u "true" setten

Einigi Host-Provider sperre d `wp-config.php` us Sicherheitsgründ. Das heisst, dass Ultimate Multisite d Datei nöd automatisch bearbeite kann, um die nötige Konstante z'füege, damit Domain Mapping und anderi Funktione laufe. Closte isch so en Host.

Allerdings bietet Closte e Weg, Konstante uf d `wp-config.php` uf sichere Art hinzuzfüege. Du muesch eifach die Schritt folge:

## U de Closte Dashboard {#on-the-closte-dashboard}

Zuerst [log dich i dini Closte-Konti ii](https://app.closte.com/), klick uf s'Menüitem Sites, denn klick uf de Dashboard-Link uf de Site, wo du grad schaffsch:

<!-- Screenshot unavailable: Closte dashboard mit Sites-Menü und Dashboard-Link -->

Du wirst e Reihe vo neue Menüitem uf de linke Siite gseh. Navigier über das Menü zur Seite **Settings**:

<!-- Screenshot unavailable: Closte linki Seitenleiste zeigt die Settings Option -->

Dänn, i de **Settings**, find de WP-Config Tab und denn s'Feld "Additional wp-config.php content" uf däm Tab:

<!-- Screenshot unavailable: Closte Settings-Seite mit WP-Config Tab zeigt das Feld Additional wp-config.php content -->

Im Kontext vo de Installation vo Ultimate Multisite muesch du die sunrise Konstante i das Feld füege. Füeg eifach en neue Zeile hinzu und füeg d'folgi Zeile ii. Danach klick uf de Button **Save All**.

define('SUNRISE', true);

Das isch alles! Gang zrugg zum Ultimate Multisite Installier-Wizard und lade d'Seite neu, um de Prozess wiiterzfüehre.
