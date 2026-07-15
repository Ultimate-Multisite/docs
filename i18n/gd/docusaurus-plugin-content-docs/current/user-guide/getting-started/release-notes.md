---
title: An t-aithrisn a' chluarach
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Note a Chàirbhleachd (Release Notes)

## Versiù 2.13.0 — A ghràdh air 2026-06-05 {#version-2130--released-on-2026-06-05}

- New: Added sòbhain-tenant support airson contaichean, checkout, billing, site, invoice, template switching, agus domain mapping flows, mar a tha e gu sònraichte do chùl-cnàidhean (tenant networks) a bheith ag iarraidh àiteach na ùr-chùl-cnàidhean gu sònraichte air an sinne airson àiteach na h-aig an t-sìth airson ealaian.
- New: Added chraighean de chraighean a' chlàradh (renewal-credential checks) airson fìrinn a tha ag tairgseachadh gu sònraichte, mar a tha e gu sònraichte do chluichean (gateways) a bheith ag iarraidh a' chlàradh an ùir-chùl air a tharraing gu sònraichte nuair a tha fìrinn a tha a' tairgseachadh airson àiteach a tha a' tairgseachadh.
- New: Added publisadh a' chlàradh HMAC (HMAC-verified loopback publishing) airson sitean a tha ag tairgseachadh, mar a tha e gu sònraichte do fìrinn a tha a' tairgseachadh an àiteach air a tharraing gu sònraichte nuair a tha a' tairgseachadh na h-aig an t-sìth airson a bhith a' chlàradh.
- New: Added pointaiche de dhèanamh airson deughan (developer extension points) airson SSO URLs, base domains de checkout-form, agus creachdaidhean domain-record gu sònraichte.
- Fix: Tha SSO a tha fìrinn air a bhith a' chlàradh gu sònraichte air domain-aithreacha, tairgseachadh an bròcair (anonymous broker visits), logout, agus coimbeadh de chluichean (cross-plugin dependency conflicts).
- Fix: Tha sitean a tha ag tairgseachadh a' chlàradh a' tairgseachadh gu sònraichte air fìrinn a tha a' tairgseachadh, agus a tha e gu sònraichte do chùl-cnàidhean (pending site creation) a' chlàradh air faighinn de chluichean a tha a' tairgseachadh airson àiteach a tha a' tairgseachadh.
- Fix: Tha domain records a tha a' tairgseachadh gu sònraichte airson base domains de checkout-form a tha a' tairgseachadh, agus tha fìrinn a tha a' tairgseachadh an àiteach air a tharraing gu sònraichte nuair a tha e gu sònraichte do chluichean (host-provider background jobs) a tha a' tairgseachadh.
- Fix: Tha ealaian de checkout, billing address, password reset, email verification, template switching, tours, agus customer dashboard no-beulachdaidhean a tha a' tairgseachadh gu sònraichte air fhaighinn na fhaighinn a bheulachdaidhean normal.
- Fix: Tha e-mailan a chlàradh a' chlàradh a' chlàradh an àiteachan gu sònraichte air a bhith a' tairgseachadh, mar a tha e gu sònraichte do SMTP/plugin fatal errors nuair a tha fìrinn a tha a' tairgseachadh na h-aig an t-sìth airson liosta àiteachan no mail transports a tha a' tairgseachadh.
- Fix: Tha chraighean a' chlàradh fìrinn (membership renewals), a' sgaidh a' chlàradh, agus ealaian de chluichean (payment collection edge cases) a' chlàradh a' tairgseachadh air a bheulachdaidhean a tha a' tairgseachadh gu sònraichte.
- Improved: Tha WordPress compatibility a' chlàradh a' tairgseachadh gu sònraichte gu 7.0, tha assetan Vue de prodúct a' chlàradh a' tairgseachadh air seachdairean npm, agus tha Cypress end-to-end coverage a' chlàradh a' tairgseachadh a' chlàradh fhaighinn, setup, SSO, agus gateway flows gu sònraichte.

## Versian 2.12.0 — Ailbh a' Ghlasair air 2026-05-15 {#version-2120--released-on-2026-05-15}

- Nàs: Tha Hostinger (hPanel) a' chluainn de dhòighinn a' leathachadh gu sònraichte, agus tha e a' leathachadh domhaintan.
- Nàs: Tha Site Exporter a' leathachadh beann-bhàinnean ngrìomh (network import bundles) airson a' chluainn de dhòighinn a' leathachadh gu sònraichte, gus amh tha an t-seòl a' leathachadh gu sònraichte.
- Fhàs: Tha e-mailan BCC broadcast a' leathachadh a' leathachadh chùis-fheann (undisclosed-recipients header) airson a' chluainn de dhòighinn, gus amh tha an t-sealladh adhran-e-mailan a' leathachadh.
- Fhàs: Tha dtadhnaidh a' chluainn a' leathachadh (membership expiration date) a' leathachadh gu sònraichte nuair a tha e a' leathachadh le fhaisg ùr, air a' leathachadh gu fhaisg fhaisg-dhate.
- Fhàs: Tha atharrachadh chluainn Stripe a' leathachadh beann-bhàinnean (discounts) gu sònraichte gu fhaisg a' leathachadh API deleteDiscount a' leathachadh de dhòighinn.
- Fhàs: Tha dìochuinn SSO air sitean a' leathachadh domhaintan a' leathachadh a' chluainn airson a' leathachadh fhaisg-dhate (infinite redirect loops) gus amh tha e a' leathachadh gu sònraichte.
- Fhàs: Tha tòiseachadh a' leathachadh sealladh imge air an deadhnaidh a' chluainn a' leathachadh gu fhaisg-dhate (underlying data model) a' leathachadh gu sònraichte.
- Fhàs: Tha Site Exporter CLI a' leathachadh tòiseachadh a' chluainn de dhòighinn a' leathachadh sitean a' leathachadh gu fhaisg-dhate (default network site selection) a' leathachadh gu sònraichte.
- Amharraich: Tha e-cli wp-cli a' leathachadh beann-bhàinnean bundled air an pacaid a' chluainn, gus amh tha an t-seòl a' leathachadh a' leathachadh de dhòighinn.

## Versian 2.11.0 — Ailbh a' Ghlasair air 2026-05-11 {#version-2110--released-on-2026-05-11}

- Nàs: Tha sitean a' leathachadh a' leathachadh beann-bhàinnean (self-booting `index.php`) airson an ZIP a' leathachadh air chluainn de dhòighinn fuaimeach gu fhaisg a' leathachadh plugin a' leathachadh sealladh fhaisg-dhate.
- Nàs: Tha sitean a' leathachadh beann-bhàinnean (Network export) a' leathachadh a' chluainn a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leathachadh a' leath

- New: Wizard de chàrrp PayPal airson cruthachadh manual de chuidheann a tha OAuth flag gate airson co-fhreagairt gu sònraichte.
- New: Tha pan-teampaichean (template switch) panel chuiditeach wedi' sealltain a-nis gyda card current-template, grid persistent, agus nút **Reset current template**.
- Fix: Tha pan-teampaichean (template switching) a' tighinn an UI air a' chàrrachdais AJAX.
- Fix: Tha statan permhannachd pan-teampaichean wedi' sealltain airson co-fhreagairt an-fheannachd.
- Fix: Tha earrachaidhean site override wedi' sealltain air a' chàrrachdais a' sealltain.
- Fix: Bha th'am prâmadh de chuidheann a tha a' sealltain gu leithid nuair a tha an ainm a' tòr.
- Fix: Tha earrachaidhean PHP 8.1 airson null-to-string deprecation notices wedi' sealltain.
- Fix: Tha currach lazy-loaded air a' chomh ar init hook airson earrachdaidhean am fhaighinn.
- Fix: Tha an stiùr SSO a' sealltain gu leithid air a' chàrrachdais a' chuidheann.
- Fix: Tha optionaiche site blank wedi' sealltain air a' sealltain ar fhaighinn.

## Versiún 2.9.0 — A' sealltain ar 2026-04-30 {#version-2100--released-on-2026-05-05}

- New: Tha earrachaidhean export agus import de chuiditeann a tha a' sealltain air an **Tools > Export & Import**.
- Fix: Tha ZIP files export wedi' sealltain gu leithid a' chàrrachdais a' chuidheann.
- Fix: Tha earrachaidhean SQL injection agus am prâmadh mewn cruthachadh/import a tha a' sealltain air.
- Fix: Bha an site pending a' sealltain gu leithid nuair a tha an admin a' sealltain an ainm chuiditeach.
- Fix: Tha earrachaidhean pending_site a' sealltain gu leithid air nuair a tha an fheannachd a' tòr.
- Fix: Tha pàirt de padding na h-nàthpan agus an stiùr anchor search wedi' sealltain.
- Fix: Bha an site pending a' sealltain gu leithid ar an sinne All Sites.
- Fix: Tha an header User-Agent provider (mShots) a' sealltain air a' chàrrachdais 403.
- Fix: Tha an circl dependency cron schedule import wedi' sealltain.
- Fix: Tha Tour IDs wedi' sealltain gu leithid air underscores i gach cleachdadh setting.
- Improved: Tha ZipArchive a' sealltain a' chuidheann a' sònraichte a' chuidheann Alchemy/Zippy airson co-fhreagairt a chanaltachd.

## Versiún 2.8.0 — A' sealltain ar 2026-04-29 {#version-290--released-on-2026-04-30}

New: Enable Jumper toggle added to Other Options settings UI.
New: Status column added to the checkout forms list table.
New: Addon sunrise file loader for custom MU-plugin sunrise extensions.
Improved: Removed error-reporting opt-in setting from settings page.
Fix: Thank-you page site card — image now constrained and links styled correctly.
Fix: Screenshot provider switched from thum.io to WordPress.com mShots.
Fix: Enable Registration and Default Role now set correct defaults on fresh install.
Fix: `get_site_url()` no longer returns empty when domain includes a port.
Fix: Clone media files now copied correctly when `copy_media` setting was empty.
Fix: Object cache invalidated correctly after network-activate sitemeta write.
Fix: Custom domain auto-promoted to primary on DNS verification for 3-part domains.
Fix: Pending membership cancelled when expired payment is cleaned up.
Fix: Password strength checker rebound after inline login prompt dismissed.
Fix: Infinite page reload stopped on thank-you page when site already created.
Fix: WP core registration option synced on plugin activation and settings save.
Fix: Null expiration guard added in `calculate_expiration` for PHP 8.4 compatibility.
Fix: Duplicate signups blocked when customer already has an active membership.
Fix: Null check added for `date_expiration` in checkout.
Fix: Site provisioning hardened — limitations, membership inference, domain promotion.
Fix: Pre-install check status label corrected to NOT Activated when check fails.
Fix: Checkout domain used for email verification URLs.
Fix: Auto-login after checkout when no password field is present.
Fix: Free memberships no longer expire — treated as lifetime.

* Aostú: The email verification gate is stopping the site from going live until the customer checks their email.
* Aostú: The SES v2 API endpoint base path and identity route have been corrected.
* Aostú: The `wu_inline_login_error` hook is now emitted in the pre-submit catch block.
