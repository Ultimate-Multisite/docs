---
title: Establint la Constante del Creixull de Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Configurar la constante Sunrise a true a Closte

Alguns proveïdors d'hosting bloquegen el fitxer `wp-config.php` per raons de seguretat. Això significa que Ultimate Multisite no pot editar el fitxer automàticament per incloure les constantes necessàries per fer funcionar la assignació de domini i altres funcionalitats. Closte és un exemple d'aquest tipus d'hosting.

No obstant això, Closte ofereix una manera de{\text{addrecar}} les constantes a `wp-config.php` de manera segura. Només has de seguir els passos que es descriuen a continuació:

## Al panell de control de Closte {#on-the-closte-dashboard}

En primer lloc, [accedeix al teu compte de Closte](https://app.closte.com/), fes clic al menú Sites, i després fes clic al enllaç Dashboard del site en el qual estem treballant:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Se t'ha de presentar un conjunt de nous elements de menú a la banda esquerra de la pantalla. Navega a la pàgina **Settings** utilitzant aquest menú:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Després, a **Settings**, busca la pestanya WP-Config, i després el camp "Additional wp-config.php content" d'aquesta pestanya:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

En el context de l'instal·lació d'Ultimate Multisite, hauràs de{\text{afegir}} la constante sunrise a aquest camp. Simplement afegeix una nova línia i afegeixa la línia que es mostra a continuació. Després, fes clic al botó **Save All**.

define('SUNRISE', true);

Això és tot, ja estàs preparat. Tornes al assistent d'instal·lació d'Ultimate Multisite i refresca la pàgina per continuar amb el procés.
