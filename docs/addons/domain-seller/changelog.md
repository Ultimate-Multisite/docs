---
title: "Domain Seller Changelog"
sidebar_position: 99
---

# Domain Seller Changelog

Version 1.4.0 - Released on 2026-07-09

- New: Added Cloudflare Registrar as a supported provider for domain registration, pricing, availability checks, and DNS management when a Cloudflare zone exists
- Fix: Displayed domain choices correctly when customers search from the header domain search
- Fix: Restored compatibility with Jetpack Autoloader 5 so the addon can load reliably with newer dependency tooling
- Fix: Limited automatic renewal jobs to the correct domain-renewal context
- Fix: Improved automatic renewal lookups so customer metadata is read from the correct schema

Version 1.3.0 - Released on 2026-06-02
- New: Added a network-admin warning when HostAfrica reseller balance gets too low
- New: Added automatic mapping of newly registered domains to the network site
- Fix: Applied registrant field requirements only when registering a new domain
- Fix: Made monitor balance notices dismissible
- Fix: Ensured WooCommerce registrant billing details are preserved
- Fix: Enforced registrant contact requirements during registration
- Fix: Prevented domain registration products from being created with 0% markup
- Fix: Preserved domain selections and pricing through checkout session flow
- Fix: Improved HostAfrica domain pricing currency display
- Fix: Improved checkout form-action behavior to prevent WP-core query-var mismatches
- Improved: Linked HostAfrica reseller configuration documentation in setup guidance

Version 1.2.0 - Released on 2026-05-25
- New: Added HostAfrica as a domain-selling integration with checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, and ID protection support
- New: Added Openprovider as a domain-selling integration with reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, and TLD sync support
- New: Added Hostinger as a domain-selling integration using the shared Hostinger API token from the core integration for availability checks, registration, nameserver updates, registrar lock, and WHOIS privacy
- Improved: Added domain lifecycle action and filter docblocks for developer integration guidance
- Improved: Updated plugin compatibility metadata to WordPress 7.0 in the addon readme
- Improved: Updated planning templates used for upcoming release coordination

Version 1.1.0 - Released on 2026-05-08
- New: DNS record creation (add_dns_record) implemented for ResellerClub, Enom, and OpenSRS registrars
- Fix: Default DNS Records parser now tolerates {DOMAIN} and {SITE_URL} tokens
- Fix: Domain selection checkout field slugs namespaced to prevent collision with site_url

Version 1.0.8 - Released on 2026-05-07
- Fix: ResellerClub domain pricing now fetches live cost prices from the correct API endpoint

Version 1.0.7 - Released on 2026-05-06
* Fix: ResellerClub test_connection sends required tlds parameter (#224)

Version 1.0.6 - Released on 2026-05-05
* Fix: ResellerClub domain registration now works correctly with improved API response handling and registry-driven provider routing
* Fix: Register Domain admin page UX improvements
* Removed: CyberPanel registrar integration

Version 1.0.5 - Released on 2026-04-02
* New: GoDaddy registrar integration for domain registration and management
* New: NameSilo registrar integration
* New: ResellerClub registrar integration
* New: Auto-verify SES sending domain on domain purchase and mapping
* Fix: Guard plugin constants against redefinition in test environment
* Fix: MySQL flags word-split correctly in install-wp-tests.sh

Version 1.0.4 - Released on 2026-03-14
* **Fix:** Some missing css assets
* **Fix:** Error related to unavailable tlds

Version 1.0.3 - Released on 2026-03-09
* **Fix:** Vue reactive property errors (domain_option, selected_domain, domain_provider) when using the legacy signup template with the checkout shortcode
* **Fix:** Subdomain input field misalignment and oversized text in the domain selection checkout field
* **Fix:** Hide the "Your URL will be" preview block when the domain selection field is present

Version 1.0.2 - Released on 2026-03-01
* **Improved:** Removed global markup settings from settings page — pricing is now exclusively per-product
* **Improved:** Added "Manage Domain Products" link on settings page for quick navigation
* **Improved:** Clearer field descriptions and tooltips for domain product settings (catch-all vs TLD-specific, markup types, introductory pricing)
* **Improved:** Better descriptions throughout the settings page (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - Released on 2026-02-27

* **New:** TLD import tool for bulk pricing management
* **New:** Introductory pricing support for domain products
* **New:** E2E test suite with Cypress
* **New:** Email templates for domain lifecycle notifications
* **New:** Registrant address fields on admin domain registration modal, pre-populated from settings
* **New:** Customer DNS management interface with add, edit, and delete record support
* **New:** "Bring your own domain" checkout option with automatic domain mapping
* **New:** Auto-generate site URL from domain name during checkout
* **New:** Default nameserver and DNS record configuration in settings
* **New:** Domain registration details and DNS management on core domain edit page
* **New:** Setup wizard auto-creates a default domain product with sensible defaults
* **New:** Daily automatic TLD sync via cron across all configured providers
* **New:** WHOIS privacy protection with per-product configuration (always on, customer choice, or disabled)
* **New:** WHOIS privacy checkout checkbox with pricing display and dark mode support
* **New:** Register Domain admin page for manual domain registration
* **New:** Automatic plugin updates via Ultimate Multisite update server
* **New:** Domain product type filter tab in product list table with purple badge styling
* **New:** Registrant contact fields (name, address, city, state, postal code, country, phone) on domain checkout form
* **New:** Registrant field validation before calling registrar API with clear error messages
* **New:** Provider-specific log channels for domain registration events (e.g. domain-seller-namecheap.log)
* **New:** Registrant contact fields on main registration/signup checkout form (shown when registering a domain)
* **Improved:** Replaced Domain Search checkout field with unified Domain Selection field supporting subdomain, register, and existing domain tabs
* **Improved:** Domain product settings render inline on product edit page via core widget system
* **Improved:** Customer domain info hooks into core domain mapping widget instead of standalone metabox
* **Improved:** TLD import wizard simplified to one-click sync from all providers
* **Improved:** Namecheap domain availability uses batch API call for faster search
* **Improved:** Namecheap pricing API uses correct parameters and response parsing
* **Improved:** Centralized TLD storage in a single network option
* **Improved:** Domain activity logging for DNS changes, transfers, and config application
* **Improved:** Full TLD sync for OpenSRS using IANA master list with batch validation
* **Improved:** Full TLD sync for Namecheap with paginated API requests
* **Improved:** Replaced legacy provider classes with Integration Registry pattern
* **Improved:** Settings panel with DNS and transfer configuration
* **Improved:** Phone numbers automatically formatted to +CC.NNN registrar format
* **Improved:** Phone field validation strips formatting characters before submission
* **Improved:** Version requirement bumped to Ultimate Multisite 2.4.12 with clearer notice
* **Improved:** CI workflow uses proper checkout for both addon and core plugin
* **Improved:** prepare_registrant_info() reads from checkout-saved user meta with billing address fallback
* **Fixed:** Domain search AJAX failing for non-logged-in users during checkout
* **Fixed:** Domain pricing AJAX failing for non-logged-in users during checkout
* **Fixed:** Spyc class redeclaration fatal error when running WP-CLI commands
* **Fixed:** Namecheap sandbox API timeout too short
* **Fixed:** Domain search Select button text not visible on green background
* **Fixed:** Domain registration failing with "RegistrantFirstName is Missing" error due to missing contact info
* **Fixed:** Domain record created with blog_id=0 when site didn't exist yet at checkout time
* **Fixed:** Default TLDs setting returned as string instead of parsed array
* **Removed:** Standalone Domain Management admin page — now handled through core domain pages

Version 1.0.0 - Released on 2025-09-28

**Major Rewrite for Ultimate Multisite v2**

* **New:** Complete rewrite with modern PHP 7.4+ architecture
* **New:** Seamless integration with Ultimate Multisite v2 checkout system
* **New:** Domain product management with flexible pricing options
* **New:** Multiple domain provider support architecture
* **New:** Auto-renewal and subscription integration
* **New:** Customer domain management interface
* **New:** Admin domain monitoring and logs
* **New:** Coupon support for domain products
* **New:** Comprehensive settings management
* **New:** Developer-friendly extensible codebase
* **Improved:** Updated OpenSRS provider with full feature support
* **Improved:** Modern UI consistent with Ultimate Multisite v2
* **Fixed:** All deprecated v1 code updated to v2 standards
* **Removed:** Legacy v1 compatibility (breaking change)

### Previous Versions (v1 Legacy)

### Version 0.0.3 - 20/08/2019

* Fixed: Incompatibility with Groundhogg CRM
* Note: This was the last v1-compatible release

### Version 0.0.2 - 07/12/2018

* Fixed: Removed the License Key field
* Fixed: Plan tabs missing when the feature plugin is active
* Improved: Added a skip button on the registration field

### Version 0.0.1 - Initial Release

* Basic OpenSRS integration for WP Ultimo v1
* Simple domain search and registration
* Plan-based domain permissions
