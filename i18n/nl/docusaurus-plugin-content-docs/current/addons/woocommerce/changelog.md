---
title: WooCommerce Integratie Changelog
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# WooCommerce Integration Changelog

Version 2.0.6 - Released on 2026-01-16
* Improvement: Include core subscriptions in the addon. No longer requires Woocommerce Subscriptinos extension.

Version 2.0.5 - Released on 2026-01-09
* Improvement: Load translations from glotpress API.
* Fix: Fatal error is some page builders.
* fix: Infinite redirect when the customer is a member of the main site.

Version 2.0.4 - Released on 2025-11-14
* Added: Translations for many more languages.
* Changed: Renamed to Ultimate Multisite: Woocommerce Integration.
* Added: Compatibility with Woocommerce 10.2.1.
* Added: Compatibility with Woocommerce Subscriptions 7.7.0.
* Fix: Compatibility with PHP 8.4
* Fix: Redirect but when no WC account page exists.

Version 2.0.3 - Released on 2025-08-13
* Changed: Enabled automatic updates with new marketplace.

Version 2.0.2 - Released on 2025-07-05
* Changed: Renamed to Multisite Ultimate: Woocommerce Integration.
* Added: Compatibility with Woocommerce 9.8.1.
* Added: Compatibility with Woocommerce Subscriptions 7.3.0.
* Fix: Cancelling a subscription by the customer.
* Fix: Fatal error when using checkout block.
* Improvement: Now compatible with Woocommerce high performance custom order tables.
* Fix: Cancelling at WooCommerce checkout can still upgrade a membership.

Version 2.0.1 - Released on 2023-08-09

* Added: Compatibility with Woocommerce 7.9.0.
* Added: Compatibility with Woocommerce Subscriptions 5.3.0.
* Added: Support for membership updates.
* Added: Notices about trials and setup fees in Woocommerce.
* Added: Identification of Ultimate Multisite Woocommerce products with a meta value.
* Added: Inserted a one-time fix to mark all Ultimate Multisite related Woocommerce products.
* Added: Removed Ultimate Multisite created products from the Woocommerce list.
* Improvement: Created a non-recurring Woocommerce discount to apply to the cart.
* Improvement: Restored the recurring discount to the Woocommerce product.
* Improvement: Added a recurring discount label to the Woocommerce product.
* Improvement: Ensured product type on checkout.
* Fix: Maintained membership status during the downgrade process.
* Fix: Checked if a subscription exists to avoid errors during the cancellation process.
* Fix: Added the start subscription date to use in Woocommerce subscriptions.
* Internal: Implemented a new PHP 8.1 build process.

Version 2.0.0 - Complete rewrite.

* Added: Process cancellation method to remove woo subscription when changing the gateway or canceling the membership;
* Added: Handler to downgrade and upgrade memberships;
* Improvement: Load woocommerce dependencies on customer update form in subsites to allow account update;
* Improvement: Correct load Woocommerce cart if not exist;
* Improvement: Ensure we are on main site tables when process a checkout;
* Improvement: Make Ultimo renewal order based on Woocommerce subscription order value and not from last payment;
* Fix: Go to WU Membership button link;
* Fix: Set Ultimo order as paid when Woocommerce subscriptions renewal has paid;
* Build: Add MPB as builder;

Version 2.0.0-beta-5 - Released on 2022-01-21

* Internal: Added hooks and filters generator;
* Internal: Added Ultimate Multisite stubs for developer quality of life;
* Fixed: Prevent the creation of multiple products when not necessary;

Version 2.0.0-beta.4 - 2021-09-23

* Fix: requiring WooCommerce to be network active instead of main site only;
* Improvement: added filter to allow the add-on to be used as a mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Fix: dashboard access control was too aggressive;
* Improvement: Added WooCommerce help links to Ultimate Multisite top-menu;

Version 2.0.0-beta.2 - 2021-05-04

* Improvement: creates pending payments on Ultimo on WCS renewal order creation;
* Improvement: pre-fills billing fields with Ultimate Multisite customer data;
* Improvement: adds back billing fields for gateways;

Version 2.0.0-beta.1 - 2021-05-04

* Initial beta release

-- Legacy Versions --

Version 1.2.6 - 26/03/2020

* Fixed: Small incompatibility with newer versions of WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Fixed: Error on previous release;

Version 1.2.4 - 22/08/2019

* Improved: Added option to redirect to WooCommerce checkout screen after integration immediately;

Version 1.2.3 - 26/05/2019

* Fixed: Payment email for WooCommerce disapeared in some edge cases;

Version 1.2.2 - 27/02/2019

* Added: Support to setup fees on the WooCommerce Subscription integration;

Version 1.2.1 - 17/11/2018

* Fixed: Compatibility issues with Ultimate Multisite version 1.9.0;

Version 1.2.0 - 10/09/2018

* Improved: New updates URL for add-ons;
* Added: Beta support to WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Fixed: Link to Pay being generated dynamically to respond to changes to WooCommerce endpoints;
* Improved: We now force completed status for our orders when payment_completed is called to make sure our renewal hooks run when they should;

Version 1.1.1 - 24/01/2018

* Fixed: Now it also checks to see if the WooCommerce is just activated on the main site;
* Fixed: Included over-loadings to allow order creation to include taxes;

Version 1.1.0 - 04/11/2017

* Fixed: Now the label of the integration button actually changes to reflect the settings. Requires Ultimate Multisite 1.5.0;
* Fixed: WooCommerce Integration now works even if WooCommerce is not network active and activated only in t^he main site;

1.0.0 - Initial Release
