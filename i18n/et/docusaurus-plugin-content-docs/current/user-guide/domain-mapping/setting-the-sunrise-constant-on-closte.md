---
title: Sunrise konstanti määratamine Clostil
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise konstanti Closte'is tõstmine true-ksiks {#setting-the-sunrise-constant-to-true-on-closte}

Mõแน hosti tarjoaja lukustab wp-config.php turvalisuse tõttu. See tähendab, et Ultimate Multisite ei saa automaatselt muuta faili ja lisada vajalikke konstante, et domeenimappimist ja muid funktsioone töötaks. Closte on üks sellise hostide.

Kuid Closte pakub viiva selle, kuidas konstante lisada wp-config.php turvaliselt. Pead lihtsalt järgima all olevat sammude:

## Closte dashboardil {#on-the-closte-dashboard}

Enne, [logi sisse oma Closte kontole](https://app.closte.com/), klõpsake Sites menüüpunktile, seejärel klõpsake Dashboard-linki sellele lehel, kus töötate:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Teile esitakse ekraani vasakul poolil mitu uut menüpunkti. Navige **Settings** (Seaded) lehele selle menüü abil:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Seejärel, **Settings**ist, leids WP-Config tab ja si kallal oleva "Additional wp-config.php content" (Lisakogu wp-config.php sisu) väljeldus:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite installimise kontekstis pead lisama sunrise konstanti sellele välja. Lisige lihtsalt uue rivi ja liige alla oleva rivi. Seejärel klõpsake **Save All** (Kogu salvesta) nupul.

define('SUNRISE', true);

See on kõik, mis vaja oli. Nauda Ultimate Multisite installimise juurde ja paigista lehe üles, et jätkata protsessi.
