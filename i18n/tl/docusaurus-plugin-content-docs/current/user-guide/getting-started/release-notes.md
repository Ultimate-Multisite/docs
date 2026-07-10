---
title: Mga Tala ng Paglalabas
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Mga Tala ng Paglabas (Release Notes) {#release-notes}

## Bersyon 2.13.0 — Inilabas noong 2026-06-05 {#version-2130--released-on-2026-06-05}

- Bago: Nagdagdag ng suporta para sa sovereign-tenant para sa customer account, checkout, billing, site, invoice, template switching, at domain mapping flows para kaya ng mga tenant network na idirekta ang mga customer pabalik sa pangunahing site para sa mga managed actions.
- Bago: Nagdagdag ng renewal-credential checks para sa recurring memberships para hindi ma-disable ng gateways ang auto-renewal kapag kulang ang saved billing agreement, subscription, o vault token.
- Bago: Nagdagdag ng HMAC-verified loopback publishing para sa pending site creation para mas maging maaasahan ang checkout-to-site provisioning kahit na may delay sa background jobs sa mga host.
- Bago: Nagdagdag ng developer extension points para sa SSO URLs, checkout-form base domains, at automatic domain-record creation.
- Ayos: Mas naging maaasahan ang SSO sa iba't ibang mapped domains, anonymous broker visits, logout, at cross-plugin dependency conflicts.

- Ayos na: Ang pending site creation ay nakakabawi na mula sa mga lumang publish flag at iniiwasan ang pagpapatigil ng mga customer sa screen ng paglikha ng site.
- Ayos na: Hindi na ginagawa ang paggawa ng domain records para sa mga shared checkout-form base domains, at hindi na pinapatakbo ang mga background jobs ng host-provider kung walang aktibong integration.
- Ayos na: Ang mga edge cases tulad ng Checkout, billing address, password reset, email verification, template switching, tours, at customer dashboard ay hindi na nagiging hadlang sa normal na daloy ng customer.
- Ayos na: Ang mga broadcast emails ay pinapanatili na ang pagiging pribado ng mga tatanggap habang iniiwasan ang mga fatal error sa SMTP/plugin kapag nabigo ang listahan ng tatanggap o mail transport.
- Ayos na: Ang mga edge cases tulad ng membership renewals, expiration display, at payment collection ay hindi na nagdudulot ng agarang pag-expire, crash, o pagkaligta ng kinakailangang bayad.

Pinahusay: Sinusubukan ang compatibility ng WordPress hanggang sa bersyong 7.0, ang mga production Vue assets ay muling binubuo mula sa npm sources, at mas maraming checkout, setup, SSO, at gateway flows ang sinasagawa ng Cypress end-to-end coverage ngayon.

## Bersyon 2.12.0 — Inilabas noong 2026-5-15 {#version-2120--released-on-2026-05-15}

- Bago: Dinagdagan ng suporta ang Hostinger (hPanel) bilang isang supported host provider na may domain mapping integration.
- Bago: Ang Site Exporter ay ngayon ay humahawak na rin sa network import bundles para mas maging mabilis at maayos ang pagbabalik ng site sa buong network.
- Ayos: Ang mga BCC broadcast emails ay gumagamit na ng isang undisclosed-recipients header para hindi lumabas ang mga address ng tatanggap.
- Ayos: Hindi na nasisira ang membership expiration date kapag nagse-save gamit ang non-date value.
- Ayos: Tama na ngayon ang pagtanggal ng discounts sa Stripe membership updates nang hindi gumagamit ng deprecated deleteDiscount API.
- Ayos: Ang mga SSO redirect sa domain-mapped sites ay limitado na para maiwasan ang walang katapusang loop ng redirect.
- Ayos: Tama na rin ang pag-update ng underlying data model kapag pinipili ang image picker sa setup wizard.
- Ayos: Pinapanatili na ngayon ng Site Exporter CLI ang tamang default network site selection.

- Pinahusay na: Tinanggal ang bundled wp-cli mula sa package ng plugin, kaya mas lumiit ang laki ng plugin.

## Bersyon 2.11.0 — Inilabas noong 2026-05-11 {#version-2110--released-on-2026-05-11}

- Bago: Ang Site exports ay ngayon ay nagbubundle na ng sarili nitong `index.php` para ma-install agad sa bagong host ang ZIP file nang hindi na kailangan mag-install ng hiwalay na plugin.
- Bago: Ang Network export ay nagpapahintulot sa mga administrator na i-export lahat ng subsites sa isang archive mula sa Site Export admin page.
- Bago: Ang pagpapatakbo (toggle) para sa Site Templates plan ay ipinapatupad na ngayon gamit ang fallback chain, tama itong naglilimita sa availability ng template batay sa limitasyon ng plano.
- Bago: Nagbibigay ng babala ang checkout form editor kapag may product kang idinagdag nang walang naka-configure na required field.
- Bago: Ang tab para sa Import/Export settings ay malinaw na naglalarawan ng saklaw nito at direkta itong nakatutok (link) sa Site Export tool.

## Bersyon 2.10.0 — Inilabas noong 2026-05-05 {#version-2100--released-on-2026-05-05}

- Bago: Bagong PayPal guided setup wizard para sa manual entry ng credentials na may OAuth flag gate para sa maayos na pag-configure ng gateway.
- Bago: Redesigned ang customer panel kapag nagpapalit ng template gamit ang current-template card, persistent grid, at **Reset current template** button.
- Ayos: Hindi na nagkakabang UI kapag bumagsak ang AJAX sa pagpapalit ng template.
- Ayos: Sinigurado ang mga permission states ng pagpapalit ng template laban sa hindi awtorisadong access.
- Ayos: Na-validate muna bago i-save ang site override inputs.
- Ayos: Ipinapakita na ngayon ang billing address prompt kapag walang laman ang address.
- Ayos: Naayos ang mga deprecation notices ng PHP 8.1 tungkol sa null-to-string.
- Ayos: Inilalagay muna ang current lazy-loaded bago ang init hook para maiwasan ang timing issues.
- Ayos: Kinakatawan ang Filtered SSO path sa lahat ng login flows.
- Ayos: Pinapanatili ang mga blank site identity options kapag nagse-save.

## Bersyon 2.9.0 — Inilabas noong 2026-04-30 {#version-290--released-on-2026-04-30}

- Bago: Nagdagdag ng single-site export at import sa ilalim ng **Tools > Export & Import**.
- Ayusin: Ang mga ZIP file na ini-export ay ngayon ay ino-serve sa pamamagitan ng isang authenticated download endpoint.
- Ayusin: Inayos ang panganib ng SQL injection at mga isyu sa query sa mga pending export/import queries.
- Ayusin: Hindi na nagiging published ang pending site kapag manu-manong kinumpirma ng admin ang email ng customer.
- Ayusin: Nilinis ang mga orphaned `pending_site` records kapag nawawala ang membership.
- Ayusin: Inayos ang padding ng navigation sa Settings at ang search anchor navigation.
- Ayusin: Ang mga pending site ay ipinapakita na ngayon bilang una sa All Sites view.
- Ayusin: Nagdagdag ng User-Agent header para sa screenshot provider (mShots) upang maiwasan ang 403 errors.
- Ayusin: Naayos ang circular dependency ng import cron schedule.
- Ayos: Ang Tour IDs ay na-normalize sa underscores sa mga user settings keys.
- Pinahusay: Ginamit na ngayon ang ZipArchive sa halip na Alchemy/Zippy para sa mas magandang compatibility.

## Bersyon 2.8.0 — Inilabas noong Abril 29, 2026 {#version-280--released-on-2026-04-29}

- Bago: Nagdagdag ng Jumper toggle sa UI ng Other Options settings.
- Bago: Nagdagdag ng status column sa checkout forms list table.
- Bago: Nagdagdag ng Addon sunrise file loader para sa custom MU-plugin sunrise extensions.
- Pinahusay: Tinanggal ang error-reporting opt-in setting mula sa settings page.
- Ayusin: Site card ng thank-you page — ang imahe ay naging limitado at ang mga link ay naka-style nang tama.
- Ayusin: Ang screenshot provider ay pinalipat mula sa thum.io patungo sa WordPress.com mShots.
- Ayusin: Ang Registration at Default Role ay ngayon ay may tamang default settings sa bagong install.
- Ayusin: Hindi na nagbabalik ng empty ang `get_site_url()` kapag ang domain ay may port.
- Ayusin: Tama na ngayon ang pagkopya ng media files kapag ang setting na `copy_media` ay walang laman.
- Ayusin: Ang object cache ay tama nang na-invalidate pagkatapos ng network-activate sitemeta write.

- Ayusin: Awtomatikong itinaas ang custom domain bilang primary sa DNS verification para sa mga 3-part domain.
- Ayusin: Kinakansela ang pending membership kapag na-clean up na ang expired payment.
- Ayusin: Nagbabalik ang password strength checker pagkatapos tanggalin ang inline login prompt.
- Ayusin: Tumigil ang walang katapusang pag-reload ng pahina sa thank-you page kapag nakagawa na ng site.
- Ayusin: Sinynkron ang opsyon ng WP core registration sa plugin activation at settings save.
- Ayusin: Nagdagdag ng Null expiration guard sa `calculate_expiration` para sa compatibility ng PHP 8.4.
- Ayusin: Bawal ang duplicate signups kapag mayroon nang aktibong membership ang customer.
- Ayusin: Nagdagdag ng null check para sa `date_expiration` sa checkout.
- Ayusin: Pinatibay (hardened) ang site provisioning — mga limitasyon, paghula sa membership, promosyon ng domain.
- Ayusin: Itinama ang status label ng pre-install check bilang HINDI Aktibo kapag nabigo ang check.

- Ayusin: Domain na ginagamit para sa email verification URLs.
- Ayusin: Auto-login pagkatapos mag-checkout kapag walang field ng password.
- Ayusin: Ang mga libreng membership ay hindi na tumatagal — itinuturing itong lifetime.
- Ayusin: Ang gate ng email verification ay humihinto sa pag-publish ng site hanggang sa ma-verify ng customer ang kanilang email.
- Ayusin: Itinama ang base path at identity route para sa SES v2 API endpoint.
- Ayusin: Inilagay ang `wu_inline_login_error` hook sa pre-submit catch block.
