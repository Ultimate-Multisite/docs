---
title: Nastavenie konconstant Sunrise na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Nastavenie kon constantu sunrise na true v Closte

Niektorí poskytovatelia hostov lockujú súbor wp-config.php z dôvodu bezpečnosti. To znamená, že Ultimate Multisite nemôže automaticky upraviť súbor a pridať potrebné constancy pre správne mapovanie domén a iné funkcie. Closte je jeden taký host.

Avšak Closte ponúka spôsob, ako pridať constancy do wp-config.php v bezpečnom zmysle. Musíte len postupovať podľa krokov nižšie:

## Na dashboarde Closte {#on-the-closte-dashboard}

Prv prvej, [prihláste sa do svojho účtu Closte](https://app.closte.com/), kliknite na položku Menu Sites, potom kliknite na odkaz Dashboard na site, na ktorom práve pracujete:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Bude vám zobrazené niekoľko nových položiek v menu vľavo obrazovky. Navigujte do stránky **Settings** pomocou toho meniu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Potom na **Settings** nájdite záložku WP-Config a potom pole "Additional wp-config.php content" na tejto záložke:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

V kontexte inštalácie Ultimate Multisite budete musieť pridať constantu sunrise do toho pola. Len pridajte novú riadok a vložte riadok nižšie. Potom kliknite na tlačidlo **Save All**.

define('SUNRISE', true);

To je to všetko, máte hotové. Vráťte sa k inštalačnej asistencie Ultimate Multisite a obnovte stránku, aby ste pokračovali v procese.
