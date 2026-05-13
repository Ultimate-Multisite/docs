---
title: "Multi-Network Changelog"
sidebar_position: 99
---

# Multi-Network Changelog

### 1.3.0
* New: Network template previewer — browse and preview network templates with a live panel before purchasing.
* New: Network template picker at checkout — customers can select a network template during the signup checkout flow.
* New: Cross-network magic link SSO — customers can access sub-networks seamlessly via magic-link authentication.
* New: Network media cloning — site media is correctly duplicated when cloning networks from a template.
* Fix: Network cloning now works without the multi-tenancy addon; super admin privileges are re-granted after clone.
* Fix: Network creation is now compatible with WooCommerce and all payment gateways.
* Fix: Port number is now included in fallback domain generation.
* Fix: Template picker CSS moved to an enqueued stylesheet for correct rendering on all themes.
* Fix: Guard against undefined `network_id` key in site query scope.
* Fix: Network permission check before context switching prevents `wpdb` table property errors.

### 1.0.4
* Fix: Creating New network.
* Fix: Rendering Menus.

### 1.0.3
* Updated to Plugin Update Checker v5
* Added modern WordPress plugin headers
* Improved compatibility with latest WordPress versions

### 1.0.2
* Bug fixes and performance improvements
* Enhanced network isolation

### 1.0.0
* Initial release
* Core multinetwork functionality
* Integration with Multisite Ultimate
