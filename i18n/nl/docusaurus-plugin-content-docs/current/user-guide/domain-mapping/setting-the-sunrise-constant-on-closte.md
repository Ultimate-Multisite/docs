---
title: De Sunrise-constante instellen op Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# De Sunrise-constante op true zetten op Closte {#setting-the-sunrise-constant-to-true-on-closte}

Sommige hostproviders vergrendelen de wp-config.php om veiligheidsredenen. Dit betekent dat Ultimate Multisite het bestand niet automatisch kan bewerken om de benodigde constanten toe te voegen om domain mapping en andere functies te laten werken. Closte is zo’n host.

Closte biedt echter een manier om constanten op een veilige manier aan de wp-config.php toe te voegen. Je hoeft alleen de onderstaande stappen te volgen:

## Op het Closte-dashboard {#on-the-closte-dashboard}

Log eerst in op je [Closte-account](https://app.closte.com/), klik op het menu-item Sites en klik vervolgens op de Dashboard-link op de site waaraan je momenteel werkt:

<!-- Screenshot niet beschikbaar: Closte dashboard met Sites-menu en Dashboard-link -->

Je krijgt een aantal nieuwe menu-items aan de linkerkant van het scherm te zien. Navigeer naar de pagina **Settings** via dat menu:

<!-- Screenshot niet beschikbaar: Closte linkermenu met Settings-optie -->

Zoek vervolgens op **Settings** het WP-Config-tabblad en daarna het veld "Additional wp-config.php content" op dat tabblad:

<!-- Screenshot niet beschikbaar: Closte Settings-pagina met WP-Config-tabblad met het veld Additional wp-config.php content -->

In de context van het installeren van Ultimate Multisite moet je de sunrise-constante aan dat veld toevoegen. Voeg simpelweg een nieuwe regel toe en plak de onderstaande regel. Klik daarna op de knop **Save All**.

define('SUNRISE', true);

Dat is alles, je bent helemaal klaar. Ga terug naar de installatiewizard van Ultimate Multisite en vernieuw de pagina om het proces voort te zetten.
