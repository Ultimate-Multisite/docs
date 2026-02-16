---
title: Nastavení konstanty Sunrise na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Nastavení konstanty Sunrise na true u Closte

Někteří poskytovatelé hostingu zamykají soubor wp-config.php z bezpečnostních důvodů. To znamená, že Ultimate Multisite nemůže tento soubor automaticky upravit a přidat potřebné konstanty pro správné fungování mapování domén a dalších funkcí. Closte je jedním z takových hostingů.

Closte však nabízí způsob, jak přidat konstanty do wp-config.php bezpečným způsobem. Stačí postupovat podle níže uvedených kroků:

## V dashboardu Closte

Nejprve se [přihlaste do svého účtu Closte](https://app.closte.com/), klikněte na položku menu Sites a poté klikněte na odkaz Dashboard u webu, na kterém právě pracujete:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Na levé straně obrazovky se vám zobrazí řada nových položek menu. Pomocí tohoto menu přejděte na stránku **Settings**:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Poté na stránce **Settings** najděte záložku WP-Config a v ní pole "Additional wp-config.php content":

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Při instalaci Ultimate Multisite budete muset do tohoto pole přidat konstantu sunrise. Jednoduše přidejte nový řádek a vložte níže uvedený kód. Poté klikněte na tlačítko **Save All**.

define('SUNRISE', true);

A to je vše, máte hotovo. Vraťte se do průvodce instalací Ultimate Multisite a obnovte stránku, abyste mohli pokračovat v procesu.
