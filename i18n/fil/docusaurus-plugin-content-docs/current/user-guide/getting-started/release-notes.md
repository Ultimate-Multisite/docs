---
title: Mga Tala sa Paglabas
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Talaan ng Paglabas

## Version 2.12.0 — Inilabas noong 2026-05-15

- Bago: Idinagdag ang Hostinger (hPanel) bilang sinusuportahang host provider na may integrasyon ng domain mapping.
- Bago: Ang Site Exporter ay ngayon ay humahawak na ng network import bundles para mas madaling maibalik ang site sa buong network.
- Inayos: Ang mga broadcast email sa BCC ay gumagamit na ngayon ng `undisclosed-recipients` header para hindi maipakita ang mga address ng tumatanggap.
- Inayos: Ang petsa ng pag-expire ng membership ay hindi na nasisira kapag nagse-save gamit ang halaga na hindi petsa.
- Inayos: Ang pag-update ng membership sa Stripe ay tama nang nagtatanggal ng mga diskwento nang hindi tinatawag ang deprecated na `deleteDiscount` API.
- Inayos: Ang SSO redirects sa mga site na may domain mapping ay ngayon ay may limitasyon para maiwasan ang walang katapusang pagli-redirect (infinite redirect loops).
- Inayos: Ang pagpili ng image sa setup wizard ay tama nang nag-a-update sa underlying data model.
- Inayos: Ang Site Exporter CLI ay ngayon ay nagpapanatili na ng tamang default network site selection.
- Pinahusay: Tinanggal ang bundled wp-cli mula sa plugin package, kaya bumaba ang laki ng plugin.

## Version 2.11.0 — Inilabas noong 2026-05-11

- Bago: Ang mga site export ay ngayon ay nagba-bundle ng isang self-booting `index.php` para na-i-install ang ZIP sa isang bagong host nang hindi nangangailangan ng hiwalay na pag-install ng plugin.
- Bago: Ang Network export ay nagpapahintulot sa mga administrator na i-export ang lahat ng subsites sa isang archive mula sa Site Export admin page.
- Bago: Ang pagpapahintulot sa Site Templates plan toggle ay ngayon ay ipinapatupad sa pamamagitan ng fallback chain, na tama nang naglilimita sa availability ng template para sa mga limitasyon ng plan.
- Bago: Nagpapaalala na ang checkout form editor kapag may produkto na idinagdag nang walang naka-configure na required field.
- Bago: Ang tab ng Import/Export settings ay malinaw nang naglalarawan ng saklaw nito at direktang nagli-link sa Site Export tool.

## Version 2.10.0 — Inilabas noong 2026-05-05

- Bago: PayPal guided setup wizard para sa manual credential entry na may OAuth flag gate para sa seamless gateway configuration.
- Bago: Ang customer panel para sa template switch ay dinisenyo muli na may current-template card, persistent grid, at **Reset current template** button.
- Inayos: Ang pagpapalit ng template ay hindi na nagha-hang sa UI kapag nag-fail ang AJAX.
- Inayos: Ang mga permission state sa pagpapalit ng template ay siniguro laban sa hindi awtorisadong pag-access.
- Inayos: Ang mga input ng site override ay nina-validate bago i-save.
- Inayos: Ang prompt para sa billing address ay ipinapakita na kapag walang laman ang address.
- Inayos: Naayos ang mga PHP 8.1 null-to-string deprecation notices.
- Inayos: Ang Currents ay lazy-loaded bago ang init hook para maiwasan ang mga isyu sa timing.
- Inayos: Ang Filtered SSO path ay iginagalang sa lahat ng login flow.
- Inayos: Ang mga opsyon ng blank site identity ay napananatili sa save.

## Version 2.9.0 — Inilabas noong 2026-04-30

- Bago: Nagdagdag ng single-site export at import sa ilalim ng **Tools > Export & Import**.
- Inayos: Ang mga Export ZIP files ay ngayon ay inihahatid sa pamamagitan ng isang authenticated download endpoint.
- Inayos: Inayos ang panganib ng SQL injection at mga isyu sa query sa pending export/import queries.
- Inayos: Ang pending site ay hindi na na-publish kapag mano-manong min-verify ng admin ang email ng customer.
- Inayos: Ang mga orphaned pending_site records ay nililinis kapag walang membership.
- Inayos: Ang padding ng settings navigation at search anchor navigation ay inayos.
- Inayos: Ang pending sites ay ngayon ay ipinapakita muna sa All Sites view.
- Inayos: Idinagdag ang Screenshot provider (mShots) User-Agent header para maiwasan ang 403 errors.
- Inayos: Naayos ang circular dependency ng import cron schedule.
- Inayos: Ang Tour IDs ay ni-normalize sa underscores sa user settings keys.
- Pinahusay: Gumamit na ng ZipArchive sa halip na Alchemy/Zippy para sa mas magandang compatibility.

## Version 2.8.0 — Inilabas noong 2026-04-29

- Bago: Idinagdag ang Enable Jumper toggle sa Other Options settings UI.
- Bago: Idinagdag ang Status column sa list table ng checkout forms.
- Bago: Idinagdag ang Addon sunrise file loader para sa custom MU-plugin sunrise extensions.
- Pinahusay: Tinanggal ang error-reporting opt-in setting mula sa settings page.
- Inayos: Site card sa thank-you page — ang image ay ngayon ay nilimitahan at tama ang styling ng links.
- Inayos: Ang Screenshot provider ay pinalitan mula thum.io patungong WordPress.com mShots.
- Inayos: Ang Enable Registration at Default Role ay ngayon ay nagse-set ng tamang default sa fresh install.
- Inayos: Ang `get_site_url()` ay hindi na nagre-return ng empty kapag ang domain ay may kasamang port.
- Inayos: Ang mga clone media files ay tama nang kinokopya kapag ang `copy_media` setting ay empty.
- Inayos: Ang object cache ay tama nang na-invalidate pagkatapos ng network-activate sitemeta write.
- Inayos: Ang custom domain ay awtomatikong na-promote sa primary sa DNS verification para sa 3-part domains.
- Inayos: Ang pending membership ay kinakansela kapag nililinis ang expired payment.
- Inayos: Ang password strength checker ay na-rebind pagkatapos i-dismiss ang inline login prompt.
- Inayos: Ang walang katapusang page reload ay pinatigil sa thank-you page kapag ang site ay nabuo na.
- Inayos: Ang WP core registration option ay naka-sync sa plugin activation at settings save.
- Inayos: Idinagdag ang Null expiration guard sa `calculate_expiration` para sa compatibility sa PHP 8.4.
- Inayos: Ang duplicate signups ay hinaharangan kapag ang customer ay mayroon nang active membership.
- Inayos: Idinagdag ang null check para sa `date_expiration` sa checkout.
- Inayos: Pinatibay ang site provisioning — limitasyon, membership inference, domain promotion.
- Inayos: Ang status label ng pre-install check ay naitama sa NOT Activated kapag nag-fail ang check.
- Inayos: Ang checkout domain ay ginagamit para sa email verification URLs.
- Inayos: Auto-login pagkatapos ng checkout kapag walang password field.
- Inayos: Ang mga free memberships ay hindi na nag-e-expire — itinuturing na lifetime.
- Inayos: Ang email verification gate ay nagpapatigil sa site publish hanggang ma-verify ng customer ang email.
- Inayos: Ang SES v2 API endpoint base path at identity route ay naitama.
- Inayos: Ang `wu_inline_login_error` hook ay ini-emit sa pre-submit catch block.
