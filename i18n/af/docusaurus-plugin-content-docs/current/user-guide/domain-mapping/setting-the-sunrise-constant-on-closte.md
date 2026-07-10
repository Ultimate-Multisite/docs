---
title: Die Sunrise-konstante op Closte stel
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Die Sunrise-konstante op true stel op Closte {#setting-the-sunrise-constant-to-true-on-closte}

Somme hosting-aanbieders sluit die wp-config.php weens sekuriteitsredes. Dit beteken dat Ultimate Multisite nie die lêer outomaties kan wysig om die nodige konstantes in te sluit sodat domein-mappering en ander funksionaliteite werk nie. Closte is een van sulke aanbieders.

Egter, Closte bied 'n manier om konstantes veilig in die wp-config.php by te voeg. Jy moet net die stappe hieronder volg:

## Op die Closte dashboard {#on-the-closte-dashboard}

Log eers in op jou Closte-rekening, klik op die Sites-menu-item, en klik dan op die Dashboard-skakel op die webwerf waarmee jy tans werk:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Jy sal voorgestel word aan 'n aantal nuwe menu-items aan die linkerkant van die skerm. Navigeer na die **Settings**-bladsy met daardie menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Dan, op die **Settings**, vind die WP-Config-tab, en dan die "Additional wp-config.php content"-veld op daardie tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

In die konteks van die installering van Ultimate Multisite, sal jy die sunrise-konstante in daardie veld moet byvoeg. Voeg net 'n nuwe reël by en plak die reël hieronder. Daarna klik jy op die **Save All**-knoppie.

define('SUNRISE', true);

Dit is dit, jy is gereed. Gaan terug na die Ultimate Multisite-installasiemagie en verfris die bladsy om die proses voort te sit.
