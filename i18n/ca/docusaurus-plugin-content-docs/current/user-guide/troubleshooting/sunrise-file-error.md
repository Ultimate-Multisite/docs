---
title: Error de fitxer Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Error al instal·lar el fitxer Sunrise {#error-installing-the-sunrise-file}

El fitxer `sunrise.php` és un fitxer especial que WordPress busca mentre s'inicia. Per poder detectar el fitxer `sunrise.php`, ha de trobarse dins de la carpeta **wp-content**.

Quan actives Ultimate Multisite i passes per l'assistència d'instal·lació com la que teniu a la captura, Ultimate Multisite intenta copiar el nostre fitxer `sunrise.php` a la carpeta wp-content.

<!-- Captura no disponible: Pàgina de l'assistència d'instal·lació mostrant el pas d'instal·lació de sunrise.php -->

La majoria del temps, aconsegueixem copiar el fitxer amb èxit i tot funciona bé. Tanmateix, si alguna cosa no està configurada correctament (per exemple, els permisos de la carpeta), podries trobar una situació on Ultimate Multisite no pugui copiar el fitxer.

Si llegis el missatge d'error que t'dóna Ultimo, veuràs que és exactament això el que va passar aquí: **Sunrise copy failed** (La còpia de Sunrise fallida).

<!-- Captura no disponible: Missatge d'error que mostra Sunrise copy failed -->

Per solucionar-ho, pots simplement copiar el fitxer `sunrise.php` dins de la carpeta del plugin wp-ultimo i peguar-lo a la teva carpeta wp-content. Després d'ho fer, recarregaràs la pàgina de l'assistència d'instal·lació i les verificacions haurien de passar.

<!-- Captura no disponible: Gestor de fitxers mostrant sunrise.php dins de la carpeta del plugin wp-ultimo --> En qualsevol cas, això pot requerir una revisió general dels permisos de la teva carpeta per evitar problemes en el futur (no només amb Ultimate Multisite, sinó també amb altres plugins i temes).

La **ferla de verificació (Health Check tool)** que forma part d'WordPress (puedes accedir a ella des del teu **panel d'administració principal > Herramientas > Comprobació de salut**) pot avisar-te si tens permisos de carpeta configurats en valors que podrien causar problemes amb WordPress.

<!-- Captura no disponible: Ferla de verificació de WordPress mostrant el estat dels permisos de carpeta -->
