---
title: Mitme võrgu muudatuste logi
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Networki muudatuste logi {#multi-network-changelog}

### 1.3.0 {#130}
* Uus: võrgu malli eelvaataja — sirvi ja eelvaata võrgu malle reaalajas paneelil enne ostmist.
* Uus: võrgu malli valija checkoutis — kliendid saavad signup checkouti voo ajal valida võrgu malli.
* Uus: võrkudeülene magic link SSO — kliendid saavad alamvõrkudele sujuvalt juurde pääseda magic-link autentimise kaudu.
* Uus: võrgu meedia kloonimine — saidi meedia dubleeritakse õigesti, kui võrke kloonitakse mallist.
* Parandus: võrgu kloonimine töötab nüüd ilma multi-tenancy lisamoodulita; superadministraatori õigused antakse pärast kloonimist uuesti.
* Parandus: võrgu loomine ühildub nüüd WooCommerce ja kõigi makseväravatega.
* Parandus: pordi number kaasatakse nüüd varudomeeni genereerimisse.
* Parandus: malli valija CSS viidi enqueued laaditavasse laaditabelisse, et tagada korrektne kuvamine kõigis teemades.
* Parandus: kaitse määratlemata `network_id` võtme eest saidi päringu ulatuses.
* Parandus: võrgu õiguste kontroll enne konteksti vahetamist hoiab ära `wpdb` tabeli atribuudi vead.

### 1.0.4 {#104}
* Parandus: uue võrgu loomine.
* Parandus: menüüde renderdamine.

### 1.0.3 {#103}
* Uuendatud versioonile Plugin Update Checker v5
* Lisatud moodsad WordPress plugini päised
* Parandatud ühilduvust uusimate WordPress versioonidega

### 1.0.2 {#102}
* Veaparandused ja jõudluse täiustused
* Täiustatud võrgu isolatsiooni

### 1.0.0 {#100}
* Esmane väljalase
* Põhiline mitme võrgu funktsionaalsus
* Integratsioon Multisite Ultimate’iga
