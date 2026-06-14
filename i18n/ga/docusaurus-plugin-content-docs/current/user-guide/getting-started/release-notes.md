---
title: Note a chreachtais
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Note de Sláinte

## Versi 2.13.0 — Déanach ar 5-láin 5-míneamh 2026

New: Added support do tenant networks iarr na chuiditeachanna (sovereign-tenant) chun contaíocht oileán, checkout, billing, site, invoice, switch de template agus mapping domáin, mar a bhfaidh teachtnaí uileán a chur ar fáil do chuidisteachtáil chuidisteachtanna go dtí an sinte.
New: Added chreideachanna nua chun chreideachanna uileán (renewal-credential checks) chun gabháilí (gateways) a bheith ag teachtnaí auto-renewal a laighneadh nuair níl aon chuidisteachtail billing, subscription, nó vault token caillte.
New: Added publíúchán loopback HMAC-verified chun site creation a laighneadh a bheith níos pearsanta ar fáil ar hostaí a bhfuil teachtnaí backgound (background jobs) ag teachtnaí níl aon chuidisteachtail.
New: Added pointí deóiríor (developer extension points) chun SSO URLs, base domains de checkout-form, agus creachanna domáin auto-create a laighneadh.
Fix: Is é SSO níos pearsanta ar fáil ar chuidisteachtanna maptaite, teachtnaí broker anóna, logout, agus chuidisteachtail dependency cross-plugin.
Fix: Tá site creation a laighneadh ag cur isteach ó flags publíúcháin stale (stale publish flags) agus ag iarraidh an chuidisteachtáil a bheith níos pearsanta ar fáil chun chuidisteachtanna uileán a bheith ag teachtnaí níl aon chuidisteachtail.
Fix: Níl domáin caillte a laighneadh ar chuidisteachtanna base de checkout-form, agus níl teachtnaí backgound host-provider caillte a laighneadh nuair níl aon chuidisteachtáil activ (active).
Fix: Níl an t-aistriúcháin (checkout), áit billing, rathú cothrom, féachaint email, switch de template, tours, agus edge cases do dashboard chuidisteachta a laighneadh ar fáil chun teachtnaí normal chuidisteachtanna a bheith ag teachtnaí níl aon chuidisteachtail.
Fix: Tá email broadcasta níos pearsanta ar fáil anois chun chomhcheangailte (recipients) a bheith pearsanta ag cur isteach, agus chun éirí an t-SMTP/plugin fatal errors a laighneadh nuair níl aon chuidisteachtail mail lists nó mail transports.
Fix: Tá chreideachanna uileán, féachaint ar fholgadh (expiration display), agus edge cases do gabháilte cothrom ag cur isteach anois chun teachtnaí a laighneadh a bheith ag teachtnaí níl aon chuidisteachtail, crasha, nó teachtnaí caillte.
Improved: Tá WordPress compatibility ar fáil go dtí 7.0 a shonraithe, tá asset production Vue ag cur isteach ó npm sources, agus tá Cypress end-to-end coverage ag cur isteach níos mó de checkout, setup, SSO, agus gateway flows.

## Versiún 2.12.0 — Leasaithe ar 2026-05-15

- New: Added Hostinger (hPanel) as a host provider a bheith ag cur áit le mapeadh domáin.
- New: Tá an Site Exporter ag cur isteach bundle import siopa neteacha chun siopa a chur ar ais go léir le fáil ar an ngrób.
- Fix: Déanann email BCC anois iarracht ar chuid héadúcháin níl é a bhfhéidir a bheith ag cur áit, chun a bheith ag cur áit na chuidaitheoirí a chur ar ais.
- Fix: Níl an t-aonach deiridh míchtúcháin ag cur áit nuair a chur arais le cur chuid n-aonach.
- Fix: Déanann athrúcháin míchtúcháin Stripe anois go léir díobairtí gan a bheith ag cur áit ar an API deleteDiscount a bhfhéidir.
- Fix: Tá na rithrigh SSO ar siopa le mapeadh domáin ag cur áit chun é a chruthú, chun loop rithrigh foirneamh a chur ar ais a cheannach.
- Fix: Déanann seilbhíon féachanaim an t-aonach de chuid n-aonach go léir le fáil ar an modál datha ag cur áit.
- Fix: Tá an Site Exporter CLI ag cur áit an t-aonach de neteacha a bhfhéidir go léir.
- Improved: Déanann an wp-cli bundle a bhaint as an cur chuig an plugin, chun cur isteach an cothrom plugin a chruthú.

## Versiún 2.11.0 — Leasaithe ar 2026-05-11

- New: Tá na Site exports ag cur isteach `index.php` a bhíonn ag cur áit le fáil, chun an ZIP a chur ar ais ar chuid host nua gan cur plugin a chur arais go héifeachtach.
- New: Déanann an export neteacha a bheith ag cur isteach na sinteacha ar chuid archive amach de chuid admin site export.
- New: Déanann an toggle Site Templates plan a bheith ag cur áit le fáil tríd cur chuig, chun spriú an cur chuig ar fáil ar theachtaireachtaí do chuid plananna.
- New: Tá an editor form checkout ag cur isteach nuair a bhíonn siopa ag cur áit gan cur chuid feidhm ag cur áit.
- New: Déanann an tab Cailte/Cur áit (Import/Export settings) a bheith ag cur áit ar chuid scáileán agus a bheith ag cur cur chuig díreach ar an Site Export tool.

## Versiún 2.10.0 — Leasaithe ar 2026-05-05

- New: Wizard set-up PayPal leathanach ar chuid cúrama le curteacha manual le flag OAuth chun curteacha gateway a bheith go léir.
- New: Déanadh an panel cúrama le template a réimse ar chuid card current-template, grid persistent, agus nút **Reset current template**.
- Fix: Níl an t-switch template ag iarraidh an UI a bheith ag curtha ar fáil nuair a fháil an AJAX.
- Fix: Tá stádasanna breiseadh (permission states) an t-switch template a chosaint ar chuid curteacha níos fearr féin.
- Fix: Tá curteacha override site a chosaint ar chuid athbhreithniú leathanach ar bhealach a bhaint am chun curtha ar fáil.
- Fix: Bhaileadh an chéad áit breiseadh (billing address prompt) ag tairiscint nuair níl an áit ag curtha ar fáil.
- Fix: Tá na nótaí dearchfáirteú PHP 8.1 ó null-to-string a chosaint.
- Fix: Tá na site lazy-loaded ag curteacha leathanach ar chuid init hook chun próiseanna amháin a bheith go léir.
- Fix: Tá an stiú SSO (SSO path) a chosaint ar chuid curteacha login a bheith go léir.
- Fix: Tá na optiona site identity ag curtha ar fáil ar chuid athbhreithniú leathanach ar bhealach a bhaint am chun curtha ar fáil.

## Version 2.9.0 — Leasaithe ar 2026-04-30

- New: Tá export agus import single-site ag curteacha ag curtha ar fáil oir **Tools > Export & Import**.
- Fix: Tá ZIP files export ag curteacha a bheith ag curteacha leathanach ar chuid endpoint download a chosaint.
- Fix: Tá curteacha iontaí SQL injection agus curteacha query ag curtha ar fáil i gcuid curteacha export/import ag curtha ar fáil.
- Fix: Níl an site pending published nuair a bhíonn an admin ag curtha ar fáil email cúrama manualmente.
- Fix: Tá na curteacha pending_site ábhairt (orphaned) ag curteacha a shlúntáil nuair níl an chuid membership ag curtha ar fáil.
- Fix: Tá curteacha padding níos leathanach ar chuid settings agus curteacha anchor navigation a chur ar fáil.
- Fix: Tá na site pending ag curtha ar fáil ar an chéad i bhfoghlaigh All Sites.
- Fix: Tá an header User-Agent provider (mShots) ag curteacha a bheith ag curtha ar fáil chun éirí 403 a chur ar fáil.
- Fix: Tá curteach dependency circular dependency cron schedule a chosaint.
- Fix: Tá Tour IDs ábhairt (normalised) go underscores i gcurteacha user settings keys.
- Improved: Tá ZipArchive ag curteacha a bheith ag curtha ar fáil anois ag Alchemy/Zippy chun curteacha a bheith go léir.

## Version 2.8.0 — Leasaithe ar 2026-04-29

- New: Enable Jumper toggle added to Other Options settings UI.
- New: Status column added to the checkout forms list table.
- New: Addon sunrise file loader for custom MU-plugin sunrise extensions.
- Improved: Removed error-reporting opt-in setting from settings page.
- Fix: Thank-you page site card — image now constrained and links styled correctly.
- Fix: Screenshot provider switched from thum.io to WordPress.com mShots.
- Fix: Enable Registration and Default Role now set correct defaults on fresh install.
- Fix: `get_site_url()` no longer returns empty when domain includes a port.
- Fix: Clone media files now copied correctly when `copy_media` setting was empty.
- Fix: Object cache invalidated correctly after network-activate sitemeta write.
- Fix: Custom domain auto-promoted to primary on DNS verification for 3-part domains.
- Fix: Pending membership cancelled when expired payment is cleaned up.
- Fix: Password strength checker rebound after inline login prompt dismissed.
- Fix: Infinite page reload stopped on thank-you page when site already created.
- Fix: WP core registration option synced on plugin activation and settings save.
- Fix: Null expiration guard added in `calculate_expiration` for PHP 8.4 compatibility.
- Fix: Duplicate signups blocked when customer already has an active membership.
- Fix: Null check added for `date_expiration` in checkout.
- Fix: Site provisioning hardened — limitations, membership inference, domain promotion.
- Fix: Pre-install check status label corrected to NOT Activated when check fails.
- Fix: Checkout domain used for email verification URLs.
- Fix: Auto-login after checkout when no password field is present.
- Fix: Free memberships no longer expire — treated as lifetime.

- Fix: Tá an gortein deachais email ag teacht ar an site go dtí a dhéanann an custaimhaigh athbhreithniú an email.
- Fix: Tá curaitheáil (endpoint) base path agus rute idir bheith (identity route) de SES v2 API gaillte.
- Fix: Tá an hook `wu_inline_login_error` ag teacht i bhfáthach pre-submit.
