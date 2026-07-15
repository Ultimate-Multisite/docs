---
title: Mga Tala sa Pag-release
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Mga Nota sa Pag-release (Release Notes)

## Bersyon 2.13.0 — Gipa-release niadtong 2026-06-05 {#version-2130--released-on-2026-06-05}

Bago: Nagdugang kami og suporta sa sovereign-tenant para sa customer account, checkout, billing, site, invoice, template switching, ug domain mapping flows aron ang mga tenant network makadirekta balik sa main site para sa mga gihimong aksyon.

Bago: Nagdugang kami og renewal-credential checks para sa recurring memberships aron ang mga gateway mahimong magpatunaw (disable) sa auto-renewal kung wala'y saved billing agreement, subscription, o vault token.

Bago: Nagdugang kami og HMAC-verified loopback publishing para sa pending site creation aron mas mahimong ma-reliable ang checkout-to-site provisioning bisan pa kung na-delay ang background jobs sa mga host.

Bago: Nagdugang kami og developer extension points para sa SSO URLs, checkout-form base domains, ug automatic domain-record creation.

Ayos (Fix): Mas naging reliable ang SSO sa mga mapped domains, anonymous broker visits, logout, ug cross-plugin dependency conflicts.

Ayos (Fix): Ang pending site creation karon makarekober gikan sa stale publish flags ug malikayan ang pagpabilin sa mga customer sa checkout screen.

Ayos (Fix): Wala na naghimo og domain records para sa shared checkout-form base domains, ug gi-skip ang unused host-provider background jobs kung walay active nga integration.

Ayos (Fix): Ang mga edge cases sama sa checkout, billing address, password reset, email verification, template switching, tours, ug customer dashboard wala na makapugong sa normal nga dalan sa customer.

Ayos (Fix): Ang broadcast emails karon nagpabilin nga private ang mga recipients samtang malikayan ang SMTP/plugin fatal errors kung magkaproblema ang recipient lists o mail transports.

Ayos (Fix): Ang membership renewals, expiration display, ug payment collection edge cases karon malikayan ang dili dayon nga pag-expire, crashes, o missed required payments.

Gpaayo (Improved): Ang WordPress compatibility gi-test hangtod sa 7.0, ang production Vue assets gihimo og balik gikan sa npm sources, ug ang Cypress end-to-end coverage karon mas nag-exercise sa mga checkout, setup, SSO, ug gateway flows.

## Bersyon 2.12.0 — Gipaon sa Mayo 15, 2026 {#version-2120--released-on-2026-05-15}

- Bag-bag-o: Gitagana na ang Hostinger (hPanel) isip usa ka supported host provider uban sa domain mapping integration.
- Bag-bag-o: Ang Site Exporter karon nag-handle na sa network import bundles para mas dali ang pag-restore sa site sa tibuok network.
- Ayos: Ang BCC broadcast emails karon naggamit og undisclosed-recipients header aron dili ma-expose ang mga address sa mga tigdawat.
- Ayos: Ang membership expiration date dili na magkaproblema kung i-save gamit ang non-date value.
- Ayos: Ang Stripe membership updates karon husto nang nag-clear og discounts nga wala na kinahanglan tawgon ang deprecated deleteDiscount API.
- Ayos: Ang SSO redirects sa mga site nga domain-mapped karon limitado aron dili magpadayon sa walay katapusang redirect loops.
- Ayos: Ang pagpili sa image picker sa setup wizard karon husto nang nag-update sa underlying data model.
- Ayos: Ang Site Exporter CLI karon nagpreserba sa saktong default network site selection.
- Gpaayo: Gi-remove na ang bundled wp-cli gikan sa plugin package, nga nagpagaan sa size sa plugin.

## Bersyon 2.11.0 — Gipaon sa Mayo 11, 2026 {#version-2110--released-on-2026-05-11}

- Bag-bag-o: Ang site exports karon mag-bundle og usa ka self-booting `index.php` para ang ZIP mahimong i-install bisan unsa nga host nga walay kinahanglan pa og separate plugin install.
- Bag-bag-o: Ang Network export nagtugot sa mga administrator nga mag-export sa tanang subsites sa usa lang ka archive gikan sa Site Export admin page.
- Bag-bag-o: Gihatag na ang pagpugos (enforced) sa Site Templates plan toggle pinaagi sa fallback chain, aron ma-restrict kini ang availability sa template base sa limitasyon sa plano.
- Bag-bag-o: Ang checkout form editor naghatag og warning kung adunay product nga gi-add nga walay configured nga required field.
- Bag-bag-o: Ang import/export settings tab karon mas klaro kining i-describe ang scope niini ug direkta kini maglink sa Site Export tool.

## Bersyon 2.10.0 — Gipaon sa Mayo 5, 2026 {#version-2100--released-on-2026-05-05}

---
New: Bag-ong setup wizard sa PayPal para sa manual entry og credentials uban sa OAuth flag gate para sa dali nga pag-configure sa gateway.
New: Gi-redesign ang customer panel gamit ang current-template card, persistent grid, ug **Reset current template** button.
Fix: Ang pag-switch sa template dili na magpabugnaw sa UI kung magkaproblema ang AJAX failure.
Fix: Ang mga permission states sa template switching gipahigugma aron dili ma-access sa dili tugot nga paagi.
Fix: Gi-validate ang site override inputs sa dili pa i-save.
Fix: Gipakita na ang billing address prompt kung walay address.
Fix: Naayo ang mga deprecation notices sa PHP 8.1 bahin sa null-to-string.
Fix: Ang kasamtang nga lazy-loaded mauna sa init hook aron mapugngan ang timing issues.
Fix: Gipasidunggan ang Filtered SSO path sa tanang login flows.
Fix: Gipreserba ang mga blank site identity options pag-save.

## Version 2.9.0 — Gi-release niadtong 2026-04-30 {#version-290--released-on-2026-04-30}

- New: Dugang ang single-site export ug import ubos sa **Tools > Export & Import**.
- Fix: Ang mga ZIP files nga gipagawas karon gihatag pinaagi sa authenticated download endpoint.
- Fix: Naayo ang risk sa SQL injection ug query issues sa pending export/import queries.
- Fix: Ang pending site dili na ma-publish kung manu-mano kining gi-verify sa admin ang email sa customer.
- Fix: Gihapig ang mga orphaned pending_site records kung wala'y membership.
- Fix: Naayo ang padding sa settings nav ug search anchor navigation.
- Fix: Ang mga pending sites karon maoy unang ipakita sa All Sites view.
- Fix: Dugang ang User-Agent header sa screenshot provider (mShots) aron mapugngan ang 403 errors.
- Fix: Naayo ang circular dependency sa import cron schedule.
- Fix: Ang Tour IDs gi-normalize ng underscores sa user settings keys.
- Improved: Gigamit na ang ZipArchive imbes nga Alchemy/Zippy para sa mas maayong compatibility.

## Version 2.8.0 — Gi-release niadtong 2026-04-29 {#version-280--released-on-2026-04-29}

- Bag-o-bag: Nag-enable na ang Jumper toggle sa Other Options settings UI.
- Bag-o: Na-add ang Status column sa list table sa checkout forms.
- Bag-o: Na-add ang Addon sunrise file loader para sa custom MU-plugin sunrise extensions.
- Gi-improve: Ginuwag na ang error-reporting opt-in setting gikan sa settings page.
- Gi-fix: Ang site card sa thank-you page — ang image karon na limitado ug ang mga link gi-style na tama.
- Gi-fix: Na-switch ang screenshot provider gikan sa thum.io ngadto sa WordPress.com mShots.
- Gi-fix: Ang Registration ug Default Role na nag-set na og tama nga default kung bag-o i-install.
- Gi-fix: Ang `get_site_url()` dili na magbalik og empty kung ang domain adunay port.
- Gi-fix: Ang pagkopya sa media files karon na tama kung ang setting nga `copy_media` walay laman.
- Gi-fix: Ang object cache na-invalidate na tama human sa network-activate sitemeta write.
- Gi-fix: Ang custom domain awtomatikong gi-promote ngadto sa primary sa DNS verification para sa 3-part domains.
- Gi-fix: Ang pending membership na-cancel kung ang expired payment na-clean up.
- Gi-fix: Ang password strength checker na-rebound human gipahimo nga dismiss ang inline login prompt.
- Gi-fix: Ang infinite page reload na-stop sa thank-you page kung ang site na-create na.
- Gi-fix: Ang WP core registration option na-sync sa plugin activation ug settings save.
- Gi-fix: Na-add ang Null expiration guard sa `calculate_expiration` para sa PHP 8.4 compatibility.
- Gi-fix: Ang duplicate signups na-block kung ang customer na adunay active membership.
- Gi-fix: Na-add ang null check para sa `date_expiration` sa checkout.
- Gi-fix: Gipahigayon (hardened) ang site provisioning — mga limitasyon, membership inference, domain promotion.
- Gi-fix: Ang status label sa Pre-install check na gi-correct ngadto sa NOT Activated kung mapakyas ang check.
- Gi-fix: Ang checkout domain gigamit para sa email verification URLs.
- Gi-fix: Auto-login human sa checkout kung walay password field nga anaa.
- Gi-fix: Ang libreng membership dili na mag-expire — giatubang isip lifetime.

Pagsunod sa mga pag-ayo (Fixes):

*   **Email verification gate:** Ang site dili ma-publish hangtod nga ma-verify ang email sa customer.
*   **SES v2 API endpoint:** Na-correct na ang base path ug identity route para sa SES v2 API endpoint.
*   **`wu_inline_login_error` hook:** Kini na-emit na sa pre-submit catch block.
