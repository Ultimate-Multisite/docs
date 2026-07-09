---
title: Mga Tala sa Paglabas
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Mga Tala sa Release

## Bersyon 2.13.0 — Inilabas noong 2026-06-05

- Bago: Nagdagdag ng suporta sa sovereign-tenant para sa customer account, checkout, billing, site, invoice, pagpapalit ng template, at mga daloy ng domain mapping upang maidirekta ng mga network ng tenant ang mga customer pabalik sa pangunahing site para sa mga pinamamahalaang aksyon.
- Bago: Nagdagdag ng mga pagsusuri sa renewal-credential para sa mga umuulit na membership upang ma-disable ng mga gateway ang auto-renewal kapag nawawala ang naka-save na billing agreement, subscription, o vault token.
- Bago: Nagdagdag ng HMAC-verified loopback publishing para sa nakabinbing paggawa ng site upang gawing mas maaasahan ang provisioning mula checkout patungong site sa mga host kung saan naaantala ang mga background job.
- Bago: Nagdagdag ng mga extension point para sa developer para sa mga SSO URL, mga base domain ng checkout-form, at awtomatikong paggawa ng domain-record.
- Ayos: Mas maaasahan na ang SSO sa mga mapped domain, anonymous broker visit, logout, at mga salungatan sa dependency sa pagitan ng mga plugin.
- Ayos: Nakakabawi na ngayon ang nakabinbing paggawa ng site mula sa mga stale publish flag at iniiwasang maiwan ang mga customer na naka-stuck sa screen ng paggawa ng site.
- Ayos: Hindi na ginagawa ang mga domain record para sa mga shared checkout-form base domain, at nilalaktawan ang mga hindi nagagamit na background job ng host-provider kapag walang aktibong integrasyon.
- Ayos: Hindi na hinaharangan ng mga edge case sa checkout, billing address, pag-reset ng password, beripikasyon ng email, pagpapalit ng template, mga tour, at customer dashboard ang normal na daloy ng customer.
- Ayos: Pinananatili na ngayong pribado ng mga broadcast email ang mga recipient habang iniiwasan ang mga fatal error ng SMTP/plugin kapag nabigo ang mga listahan ng recipient o mga mail transport.
- Ayos: Iniiwasan na ngayon ng mga edge case sa pag-renew ng membership, pagpapakita ng expiration, at pagkolekta ng bayad ang agarang expiration, crash, o hindi nakuhang kinakailangang bayad.
- Pinahusay: Nasusubukan ang compatibility sa WordPress hanggang 7.0, muling binuo ang production Vue assets mula sa npm sources, at mas marami nang checkout, setup, SSO, at gateway flow ang sinasaklaw ng Cypress end-to-end coverage.

## Bersyon 2.12.0 — Inilabas noong 2026-05-15

- Bago: Idinagdag ang Hostinger (hPanel) bilang suportadong host provider na may integrasyon sa domain mapping
- Bago: Pinoproseso na ngayon ng Site Exporter ang mga network import bundle para sa mas pinadaling pagpapanumbalik ng site sa buong network
- Ayos: Gumagamit na ngayon ang mga BCC broadcast email ng undisclosed-recipients header upang maiwasang mailantad ang mga address ng recipient
- Ayos: Hindi na nasisira ang petsa ng expiration ng membership kapag nagse-save gamit ang value na hindi petsa
- Ayos: Tama nang kini-clear ng mga update sa Stripe membership ang mga discount nang hindi tinatawag ang deprecated na deleteDiscount API
- Ayos: Nililimitahan na ngayon ang mga SSO redirect sa mga domain-mapped site upang maiwasan ang walang katapusang redirect loop
- Ayos: Tama nang ina-update ng pagpili sa image picker ng setup wizard ang pinagbabatayang data model
- Ayos: Pinananatili na ngayon ng Site Exporter CLI ang tamang default na pagpili ng network site
- Pinahusay: Inalis ang bundled wp-cli mula sa package ng plugin, kaya nabawasan ang laki ng plugin

## Bersyon 2.11.0 — Inilabas noong 2026-05-11

- Bago: Nagsasama na ngayon ang mga export ng site ng self-booting na `index.php` upang ma-install ang ZIP sa bagong host nang walang hiwalay na pag-install ng plugin.
- Bago: Pinapahintulutan ng network export ang mga administrator na i-export ang lahat ng subsite sa iisang archive mula sa admin page ng Site Export.
- Bago: Ipinapatupad na ngayon ang Allow Site Templates plan toggle sa pamamagitan ng fallback chain, na wastong nililimitahan ang availability ng template para sa mga limitasyon ng plan.
- Bago: Nagbababala ang editor ng checkout form kapag idinagdag ang isang produkto nang walang naka-configure na kinakailangang field.
- Bago: Malinaw na inilalarawan na ngayon ng tab ng mga setting ng Import/Export ang saklaw nito at direktang nagli-link sa tool na Site Export.

## Bersyon 2.10.0 — Inilabas noong 2026-05-05

- Bago: PayPal guided setup wizard para sa manu-manong pagpasok ng credential na may OAuth flag gate para sa seamless na configuration ng gateway.
- Bago: Muling idinisenyo ang panel ng customer para sa pagpapalit ng template na may current-template card, persistent grid, at **I-reset ang kasalukuyang template** na button.
- Ayos: Hindi na nabibitin ng pagpapalit ng template ang UI kapag nabigo ang AJAX.
- Ayos: Siniguro ang mga permission state ng pagpapalit ng template laban sa hindi awtorisadong access.
- Ayos: Bineripika ang mga input ng site override bago i-save.
- Ayos: Ipinapakita na ngayon ang prompt ng billing address kapag walang laman ang address.
- Ayos: Nalutas ang mga abiso sa deprecation ng PHP 8.1 null-to-string.
- Ayos: Na-lazy-load ang Currents bago ang init hook upang maiwasan ang mga timing issue.
- Ayos: Nirerespeto ang filtered SSO path sa lahat ng login flow.
- Ayos: Pinananatili ang mga blangkong opsyon sa pagkakakilanlan ng site kapag nagse-save.

## Bersyon 2.9.0 — Inilabas noong 2026-04-30

- Bago: Idinagdag ang single-site export at import sa ilalim ng **Tools > Export & Import**.
- Ayos: Inihahatid na ngayon ang mga Export ZIP file sa pamamagitan ng authenticated download endpoint.
- Ayos: Itinama ang panganib ng SQL injection at mga query issue sa mga nakabinbing export/import query.
- Ayos: Hindi na-publish ang nakabinbing site kapag manu-manong bineberipika ng admin ang email ng customer.
- Ayos: Nilinis ang mga orphaned pending_site record kapag nawawala ang membership.
- Ayos: Itinama ang padding ng settings nav at search anchor navigation.
- Ayos: Ipinapakita na ngayon muna ang mga nakabinbing site sa view ng All Sites.
- Ayos: Idinagdag ang User-Agent header ng screenshot provider (mShots) upang maiwasan ang mga 403 error.
- Ayos: Nalutas ang circular dependency ng import cron schedule.
- Ayos: Na-normalize ang mga Tour ID sa mga underscore sa mga key ng user settings.
- Pinahusay: Ginagamit na ngayon ang ZipArchive sa halip na Alchemy/Zippy para sa mas mahusay na compatibility.

## Bersyon 2.8.0 — Inilabas noong 2026-04-29

- Bago: Idinagdag ang toggle na Enable Jumper sa UI ng mga setting ng Other Options.
- Bago: Idinagdag ang column na Status sa list table ng mga checkout form.
- Bago: Addon sunrise file loader para sa mga custom na extension ng MU plugin sunrise.
- Pinahusay: Inalis ang setting ng opt-in sa error-reporting mula sa pahina ng mga setting.
- Ayos: Site card ng thank-you page — limitado na ngayon ang laki ng larawan at tama na ang estilo ng mga link.
- Ayos: Pinalitan ang screenshot provider mula thum.io patungong WordPress.com mShots.
- Ayos: Nagtatakda na ngayon ang Enable Registration at Default Role ng tamang mga default sa bagong install.
- Ayos: Hindi na nagbabalik ng walang laman ang `get_site_url()` kapag may port ang domain.
- Ayos: Nakokopya na ngayon nang tama ang mga media file ng clone kapag walang laman ang setting na `copy_media`.
- Ayos: Tama nang nai-invalidate ang object cache pagkatapos ng network-activate na pagsusulat sa sitemeta.
- Ayos: Awtomatikong naipo-promote sa primary ang custom domain sa DNS verification para sa mga 3-part domain.
- Ayos: Kinakansela ang pending membership kapag nalinis na ang expired payment.
- Ayos: Muling na-bind ang password strength checker pagkatapos i-dismiss ang inline login prompt.
- Ayos: Natigil ang walang-katapusang pag-reload ng pahina sa thank-you page kapag nagawa na ang site.
- Ayos: Naka-sync ang opsyon sa registration ng WP core sa pag-activate ng plugin at pag-save ng mga setting.
- Ayos: Nagdagdag ng null expiration guard sa `calculate_expiration` para sa compatibility sa PHP 8.4.
- Ayos: Hinaharang ang mga duplicate signup kapag mayroon nang active membership ang customer.
- Ayos: Nagdagdag ng null check para sa `date_expiration` sa checkout.
- Ayos: Pinatibay ang site provisioning — mga limitasyon, paghihinuha ng membership, pag-promote ng domain.
- Ayos: Itinama ang label ng status ng pre-install check sa NOT Activated kapag nabigo ang check.
- Ayos: Ginamit ang checkout domain para sa mga URL ng email verification.
- Ayos: Auto-login pagkatapos ng checkout kapag walang password field.
- Ayos: Hindi na nag-e-expire ang mga free membership — itinuturing bilang panghabambuhay.
- Ayos: Pinipigilan ng email verification gate ang pag-publish ng site hanggang ma-verify ng customer ang email.
- Ayos: Itinama ang base path ng SES v2 API endpoint at identity route.
- Ayos: Na-emit ang hook na `wu_inline_login_error` sa pre-submit catch block.
