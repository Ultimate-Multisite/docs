---
title: Cambiar de xarxa (Multi-Network) Changelog
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Diari de canvis de Multi-Xarxa

### 1.3.0
* Nou: Visualitzador de plantilles de xarxa — navega i previsualitza plantilles de xarxa amb un panell en directe abans de comprar.
* Nou: Selector de plantilles de xarxa al checkout — els clients poden seleccionar una plantilla de xarxa durant el procés de pagament d'alta.
* Nou: SSO d'enllaç màgic entre xarxes — els clients poden accedir a subxarxes de manera fluida mitjançant autenticació amb enllaç màgic.
* Nou: Clonació de mitjà de xarxa — el mitjà del lloc web es duplica correctament quan es clona xarxes des d'una plantilla.
* Correcció: La clonació de xarxes ara funciona sense l'addon de multi-inquilí; els privilegis de superadministrador es re-assignen després de la clonació.
* Correcció: La creació de xarxes ara és compatible amb WooCommerce i tots els gegants de pagament.
* Correcció: El número de port ara s'inclou a la generació de domini de reserva.
* Correcció: El CSS del selector de plantilles s'ha traslladat a una hoja de fulles estilístiques en cola per a un renderitzat correcte en tots els temes.
* Correcció: Protecció contra la clau `network_id` indefinida en el scope de la consulta del lloc web.
* Correcció: La verificació de permisos de xarxa abans de canviar de context previene errors de propietat de taula `wpdb`.

### 1.0.4
* Correcció: Creació de nova xarxa.
* Correcció: Renderitzat de menús.

### 1.0.3
* Actualitzat a Plugin Update Checker v5
* Se han afegat en-capçalats de plugin de WordPress moderns
* Millorada la compatibilitat amb les últimes versions de WordPress

### 1.0.2
* Correccions de bugs i millores de rendiment
* Aïllament de xarxa millorat

### 1.0.0
* Lliurament inicial
* Funcionalitat bàsica de multi-xarxa
* Integració amb Multisite Ultimate
