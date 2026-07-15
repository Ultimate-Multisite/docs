---
title: Multi-netwerk wijzigingslog
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Multi-Network Changelog

### 1.3.0 {#130}
* Nieuw: Network template previewer — blader door en bekijk vooraf network templates met een live paneel vóór aankoop.
* Nieuw: Network template picker bij afrekenen — klanten kunnen een network template selecteren tijdens de aanmeld-checkout-flow.
* Nieuw: Cross-network magic link SSO — klanten kunnen naadloos toegang krijgen tot subnetwerken via magic-link-authenticatie.
* Nieuw: Network media cloning — sitemedia wordt correct gedupliceerd bij het klonen van netwerken vanuit een template.
* Fix: Netwerkklonen werkt nu zonder de multi-tenancy addon; super admin-rechten worden na het klonen opnieuw toegekend.
* Fix: Netwerkaanmaak is nu compatibel met WooCommerce en alle betalingsgateways.
* Fix: Poortnummer wordt nu opgenomen in fallback-domeingeneratie.
* Fix: Template picker CSS verplaatst naar een ingequeue’de stylesheet voor correcte weergave op alle themes.
* Fix: Beschermt tegen ontbrekende `network_id`-sleutel in site-queryscope.
* Fix: Netwerktoestemmingscontrole vóór contextwisseling voorkomt fouten met `wpdb`-tabeleigenschappen.

### 1.0.4 {#104}
* Fix: Nieuw netwerk aanmaken.
* Fix: Menu’s renderen.

### 1.0.3 {#103}
* Bijgewerkt naar Plugin Update Checker v5
* Moderne WordPress plugin headers toegevoegd
* Compatibiliteit met de nieuwste WordPress-versies verbeterd

### 1.0.2 {#102}
* Bugfixes en prestatieverbeteringen
* Verbeterde netwerkisolatie

### 1.0.0 {#100}
* Eerste release
* Kernfunctionaliteit voor multinetwork
* Integratie met Multisite Ultimate
