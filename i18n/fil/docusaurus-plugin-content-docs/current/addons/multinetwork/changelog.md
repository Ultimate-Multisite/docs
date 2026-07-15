---
title: Multi-Network Changelog
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Talaan ng Pagbabago ng Multi-Network

### 1.3.0 {#130}
* New: Network template previewer — makapag-browse at makapag-preview ng network templates sa isang live panel bago bumili.
* New: Network template picker sa checkout — makakapili na ang mga customer ng network template habang nag-sign up sa checkout flow.
* New: Cross-network magic link SSO — makaka-access ang mga customer sa mga sub-network nang walang aberya (seamlessly) gamit ang magic-link authentication.
* New: Network media cloning — tama ang pagduplikasyon ng media ng site kapag nag-clone ng networks mula sa isang template.
* Fix: Gumagana na ang network cloning kahit wala ang multi-tenancy addon; ibabalik ang super admin privileges pagkatapos mag-clone.
* Fix: Gumagana na ang paglikha ng network kahit may WooCommerce at lahat ng payment gateways.
* Fix: Kasama na ngayon ang port number sa fallback domain generation.
* Fix: Inilipat ang Template picker CSS sa isang enqueued stylesheet para sa tamang rendering sa lahat ng themes.
* Fix: Naglagay ng proteksyon laban sa undefined `network_id` key sa site query scope.
* Fix: Pinipigilan ng network permission check bago ang context switching ang mga error sa property ng `wpdb` table.

### 1.0.4 {#104}
* Fix: Paglikha ng Bagong network.
* Fix: Pag-render ng Menus.

### 1.0.3 {#103}
* In-update sa Plugin Update Checker v5
* Nagdagdag ng modernong WordPress plugin headers
* Pinabuti ang compatibility sa pinakabagong bersyon ng WordPress

### 1.0.2 {#102}
* Pag-aayos ng bug at pagpapabuti ng performance
* Pinahusay ang network isolation

### 1.0.0 {#100}
* Unang paglabas (Initial release)
* Pangunahing functionality ng multi-network
* Integrasyon sa Multisite Ultimate
