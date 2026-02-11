---
title: Instellen van de Sunrise Constant op Closte
sidebar_position: 16
_i18n_hash: e579b8554057b98fef08a0f2bd2a0e82
---
# Instellen van de Sunrise constant op Closte

Sommige hostingproviders vergrendelen het wp-config.php om veiligheidsredenen. Dit betekent dat Ultimate Multisite het bestand niet automatisch kan bewerken om de noodzakelijke constanten toe te voegen om domeinmapping en andere functies te laten werken. Closte is zo'n hostingprovider.

Closte biedt echter een manier om constanten op een veilige manier toe te voegen aan het wp-config.php. Je hoeft alleen maar de onderstaande stappen te volgen:

## Op het Closte-dashboard

Allereerst, [log in op je Closte-account](https://app.closte.com/), klik op het menu-item Sites, en klik vervolgens op de Dashboard-link op de site waarop je momenteel werkt:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dPRIeofCDK.png)

Je krijgt een aantal nieuwe menu-items aan de linkerkant van het scherm te zien. Navigeer naar de **Settings**-pagina via dat menu:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JmSwHIOaGz.png)

Vervolgens, op de **Settings**, vind je het WP-Config-tabblad, en daarna het veld 'Additional wp-config.php content' op dat tabblad:

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FqVEnSTIu9.png)

In het kader van het installeren van Ultimate Multisite, moet je de sunrise constant toevoegen aan dat veld. Voeg eenvoudig een nieuwe regel toe en plak de onderstaande regel. Klik daarna op de **Save All**-knop.

define('SUNRISE', true);

Dat is het, je bent klaar. Ga terug naar de Ultimate Multisite-installatiewizard en vernieuw de pagina om het proces voort te zetten.
