---
title: Notizak
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Eskaintzak (Release Notes) {#release-notes}

## Bertsio 2.13.0 — Iragitzituta 2026-06-05-ean {#version-2130--released-on-2026-06-05}

- New: Kudeak (sovereign-tenant) suport has been added for customer account, checkout, billing, site, invoice, template switching, and domain mapping flows so that tenant networks can direct customers back to the main site for managed actions.
- New: Has been added renewal-credential checks for recurring memberships so gateways can disable auto-renewal when a saved billing agreement, subscription, or vault token is missing.
- New: HMAC-verified loopback publishing has been added for pending site creation to make checkout-to-site provisioning more reliable on hosts where background jobs are delayed.
- New: Has been added developer extension points for SSO URLs, checkout-form base domains, and automatic domain-record creation.
- Fix: SSO is now more reliable across mapped domains, anonymous broker visits, logout, and cross-plugin dependency conflicts.
- Fix: Pending site creation now recovers from stale publish flags and avoids leaving customers stuck on the site-creation screen.
- Fix: Domain records are no longer created for shared checkout-form base domains, and unused host-provider background jobs are skipped when no integration is active.
- Fix: Edge cases in checkout, billing address, password reset, email verification, template switching, tours, and customer dashboard no longer block normal customer flows.
- Fix: Broadcast emails now keep recipients private while avoiding SMTP/plugin fatal errors when recipient lists or mail transports fail.
- Fix: Membership renewals, expiration display, and payment collection edge cases now avoid immediate expirations, crashes, or missed required payments.
- Improved: WordPress compatibility is tested up to 7.0, production Vue assets are rebuilt from npm sources, and Cypress end-to-end coverage now exercises more checkout, setup, SSO, and gateway flows.

## Bertsioa 2.12.0 — Iragitzit 2026-05-15an {#version-2120--released-on-2026-05-15}

- New: Hostinger (hPanel) iragitzit host provider bat domain mapping integrazioa eta.
- New: Site Exporter-ek network import bundlesak eskaintzen du, eta horrek site berezpenaren network-le eragindura laguntzen du.
- Fix: BCC broadcast emails-ek iragitzit-ezko pertsonalariak (undisclosed-recipients header) erabiltzen ditu, eta pertsonalariak ez ematen duen informazioa prevenitzera.
- Fix: Data saldzen testu bat datu-testura (non-date value) erabiliz ere, membership expiration date-ek korruzion ez da.
- Fix: Stripe membership update-ek eskaintzak (discounts) zure API batekin ez du garrantzia (deprecated deleteDiscount API) bilatzen eta zuzenean boratzen ditu.
- Fix: Domain-mapatutako site-etan SSO redirect-ek erregitzituta da, eta horrek iragitzituta loopak (infinite redirect loops) prevenitzera.
- Fix: Setup wizard-eko imagena aukeraren iragitzitua datu-modelaren espezifikazioa zuzenean update egiten du.
- Fix: Site Exporter CLI-ek network site aukeraren default korrektoak errespetatzen ditu.
- Improved: Plugin paketik wp-cli bat eskaintzen ez da, eta horrek plugin-aren diseinua warezinak azaltzen du.

## Bertsioa 2.11.0 — Iragitzit 2026-05-11an {#version-2110--released-on-2026-05-11}

- New: Site export-ek `index.php` berezpen bat eskaintzen du, eta horrek ZIP-aren instalazioa host lehenago ez plugin bat erregitzen duen ere.
- New: Network export-ek administrazioak Site Export admin lapuran bat arkidu guztia (subsites) archive batean iragitzituta ematen du.
- New: Site Templates plan toggle-ek fallback chain batten bidez errespetatzen da, eta horrek plan limitazioak espezifikatzeko template-aren erabilera korrektean murriztzen du.
- New: Checkout form editor-ek beharrezko leku bat ez dagoenean produktu bat gehitu beharko du adierazpena (warning).
- New: Import/Export settings tab-ek bere eragiketa zehazten du eta Site Export tool-era direktu link bat ematen du.

## Bertsioa 2.10.0 — Iragitzit 2026-05-05an {#version-2100--released-on-2026-05-05}

- New: PayPal setup wizard iriduta manual credentialak adosten, OAuth flag gatearekin eragiten daingoa konfiguratorekin ezberdina.
- New: Customer panelaren template aldatzeko diseinazioa diren carda, grid persistente eta **Reset current template** botoi bereizkin dezake.
- Fix: Template aldatzea AJAX error batean UI-aren ez dago eragiten.
- Fix: Template aldatzeko autorizazio estatikak unauthorized akses batzuk gertu nahi du.
- Fix: Site override inputak saldatu baino lehenan biltzen dira.
- Fix: Adresa ez dagoenean billing address prompta daingoa eragiten da.
- Fix: PHP 8.1 null-to-string deprecation notices iradokita dira.
- Fix: Lazy-loaded currentak init hookaren aurrera erabiltzen dira horrek orduko problema hauek prevenitzera.
- Fix: SSO path filteratua gertu nahi du guztiz login flow-etan.
- Fix: Saldatuenean blank site identity opsioak eragiten dira.

## Version 2.9.0 — Iradokita 2026-04-30an {#version-290--released-on-2026-04-30}

- New: **Tools > Export & Import**-aren ondorioz single-site export eta import hasi da.
- Fix: Export ZIP fileak autentikatu download endpoint batzu behar dira.
- Fix: Pending export/import query-n SQL injection risk eta galderia iradokita dira.
- Fix: Admin-ek customer emaila manuelan biltzen duenean pending sitea ez da publikatu.
- Fix: Membershipa ez dagoenean pending_site recordak bereizkin dezake.
- Fix: Settings nav padding eta search anchor navigazioa eragiten dira.
- Fix: Pending sitesak All Sites ikuspenaren lehenago eragiten dira.
- Fix: Screenshot provider (mShots) User-Agent header bat hasi da 403 errorrak prevenitzera.
- Fix: Import cron schedule-n circular dependency bereizkin dezake.
- Fix: User settings key-etan Tour IDs iradokita zungarizkoak (underscores) dira.
- Improved: ZipArchive-a Alchemy/Zippy-aren lehenago erabiltzen da, horrek mehatzo eta kompatibilitate hobetuta dagoela.

## Version 2.8.0 — Iradokita 2026-04-29an {#version-280--released-on-2026-04-29}

- New: Euskaldia (Jumper) bideratu dituen irudiak (toggle) erabilera "Other Options" (Gaindoku Opciones) hena dagoen.
- New: Checkout forms list tablean status (estatus) kolumna hasi da.
- New: Custom MU-plugin sunrise beste estalkiak (extensions) irudien (file loader) hasi da.
- Improved: Settings lapuriko error-reporting bideratu dituen aukeraa araudia da.
- Fix: "Thank-you" lapuriko site carda — irudiak eskaintza duten eta linkak estala dagozkien.
- Fix: Screenshot providera thum.io-tik WordPress.com mShots-i hasi da.
- Fix: Registrazioa (Registration) eta Default Rolea (Rol Aurreratu) bideratzea irudien (defaults) ondo ematen da instalazio berrietan.
- Fix: `get_site_url()` ez du erretik itxarrian (empty) irudiak (port) domainioak barne dagoenean.
- Fix: `copy_media` aukeraa erretik jakin dituen irudien kopiaztapenak ondo kopiatzen da media fileak.
- Fix: Network-activate sitemeta data hasi eta sitemapeta (sitemeta) irudiak (object cache) ondo bat ditu.
- Fix: 3-part domainioetan DNS bideratzea eratu dituen auto-promozioa primarioa (primary) ematen da.
- Fix: Maitasun (membership) aldatu dituzten eta laburpenak (expired payment) asekitzen duenean, pending membership cancelatzen da.
- Fix: Inline login prompta (login irudia) desbatatu ondoren, password strength checkera (password eragiketa kontrola) hasi da.
- Fix: Site lehiak (site already created) dagoenean, "thank-you" lapuriko infinite page reload (irudiak berriro kudeatzea) araudia ondo ematen da.
- Fix: Plugin aktibatu eta settings save egin ondoren WP core registration aukeraa sinkronizatzen da.
- Fix: PHP 8.4 erabilera harmonizatzeko, `calculate_expiration` funtzioan null expiration guard hasi da.
- Fix: Klientela (customer) irudien aktibo dagoenean, duplicate signups (irudien duplikatua) barri egiten dira.
- Fix: Checkout-ean date_expiration (irudiak aldatu dituzten data) bideratu null check hasi da.
- Fix: Site provisionmenta (site lehiak emateak) eratu dituen limitazioak, membership inference (maitasun inferentzia), domainio promosioak ondo bat ditu.
- Fix: Kontrolua barri egiten duenean pre-install check status labela "NOT Activated" irudien hasi da.
- Fix: Email verification URL-ek erabiltzen dituzten checkout domainioak (domain) ondo bat ditu.
- Fix: Password field ez dagoenean, checkout ondoren auto-login hasi da.
- Fix: Maitasun gizarteko (free memberships) aldatu ez duena — erabetzen da "lifetime" (etxearen laburpen).

- Aurreratzea: Email biderbatzera (verification) aukera web-sail publication-a (site publish) erantzuten du taldearen emaila biderbatzen duelaren ondoren.
- Aurreratzea: SES v2 API endpoint-en base path-a eta identidad ruta-a jartzen duten.
- Aurreratzea: `wu_inline_login_error` hook-a pre-submit catch block-an emiten du.
