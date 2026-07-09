---
title: Ændringslog for flere netværk
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Network ændringslog {#multi-network-changelog}

### 1.3.0 {#130}
* Ny: Forhåndsviser til netværksskabelon — gennemse og forhåndsvis netværksskabeloner med et live-panel før køb.
* Ny: Vælger til netværksskabelon ved checkout — kunder kan vælge en netværksskabelon under tilmeldings-checkout-flowet.
* Ny: Cross-network magic link SSO — kunder kan få adgang til undernetværk problemfrit via magic-link-godkendelse.
* Ny: Kloning af netværksmedier — sidemedier duplikeres korrekt, når netværk klones fra en skabelon.
* Rettelse: Netværkskloning fungerer nu uden multi-tenancy-addon; super admin-rettigheder tildeles igen efter kloning.
* Rettelse: Netværksoprettelse er nu kompatibel med WooCommerce og alle betalingsgateways.
* Rettelse: Portnummer inkluderes nu i fallback-domænegenerering.
* Rettelse: CSS til skabelonvælger flyttet til et stylesheet, der sættes i kø, for korrekt rendering på alle temaer.
* Rettelse: Beskyt mod udefineret `network_id`-nøgle i sideforespørgsels-scope.
* Rettelse: Kontrol af netværkstilladelser før kontekstskift forhindrer `wpdb`-tabelegenskabsfejl.

### 1.0.4 {#104}
* Rettelse: Oprettelse af nyt netværk.
* Rettelse: Rendering af menuer.

### 1.0.3 {#103}
* Opdateret til Plugin Update Checker v5
* Tilføjet moderne WordPress plugin-headere
* Forbedret kompatibilitet med de nyeste WordPress-versioner

### 1.0.2 {#102}
* Fejlrettelser og ydeevneforbedringer
* Forbedret netværksisolering

### 1.0.0 {#100}
* Første udgivelse
* Kernefunktionalitet til multinetwork
* Integration med Multisite Ultimate
