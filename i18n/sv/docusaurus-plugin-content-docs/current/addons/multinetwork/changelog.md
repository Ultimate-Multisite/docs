---
title: Multi-Nätverksändringslogg
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Network Ändringslogg

### 1.3.0 {#130}
* Nytt: Förhandsgranskare för nätverkstemplates – bläddra och förhandsgranska nätverkstemplates med en live-panel innan köp.
* Nytt: Val av nätverkstemplate i kassan – kunder kan välja en nätverkstemplate under registreringsflödet i kassan.
* Nytt: SSO med magisk länk över nätverk – kunder kan komma åt undernätverk smidigt via magisk länk-autentisering.
* Nytt: Kloning av nätverksmedia – webbplatsens media dupliceras korrekt när nätverk klonas från en template.
* Fix: Nätverkskloning fungerar nu utan multi-tenancy-tillägget; superadministratörsbehörigheter återställs efter kloningen.
* Fix: Nätverkskapande är nu kompatibelt med WooCommerce och alla betalningsgatewayar.
* Fix: Portnumret inkluderas nu i genereringen av fallback-domäner.
* Fix: CSS för template-väljaren flyttades till ett enqueued stylesheet för korrekt rendering på alla teman.
* Fix: Skydd mot okänd `network_id`-nyckel i scope för webbplatsfrågan.
* Fix: Kontroll av nätverkstillstånd innan kontextbyte förhindrar `wpdb`-tabellfel.

### 1.0.4 {#104}
* Fix: Skapa nytt nätverk.
* Fix: Rendera menyer.

### 1.0.3 {#103}
* Uppdaterad till Plugin Update Checker v5
* Tillagda moderna WordPress-plugin-huvuden
* Förbättrad kompatibilitet med senaste WordPress-versionerna

### 1.0.2 {#102}
* Buggfixar och prestandaförbättringar
* Förbättrad nätverksisolering

### 1.0.0 {#100}
* Initial utgivning
* Kärnfunktionalitet för flera nätverk
* Integration med Multisite Ultimate
