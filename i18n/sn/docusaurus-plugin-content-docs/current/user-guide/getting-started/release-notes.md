---
title: Mavandzo ekupedzisira
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Zvinoreva Rezha (Release Notes)

## Versoni 2.13.0 — Chireve panguva 2026-06-05

- Chiiya: Kubva: Kubva support ye sovereign-tenant kuti account ya mwana, checkout, billing, site, invoice, template switching, uye domain mapping flows zvakawanda, izvi zvinokubatsira tenant networks kuita kuti vanhu vashanye vafare back kune main site kuti vashandise matenderi anogadzirwa.
- Chiiya: Kubva: Kubva checks dzemutauro wekugadzirisa (renewal-credential checks) dzinowanikwa pfungwa dze membership dzine kuratidza, izvi zvinokubatsira gateways kuita kuti auto-renewal isave imwe kana kune agreement ya billing, subscription, kana vault token inotevera isingazivikanwa.
- Chiiya: Kubva: Kubva loopback publishing ye HMAC (HMAC-verified loopback publishing) dzinowanikwa pfungwa dze site creation dzakaisikana kuti provisioning ye checkout-to-site iwe yakapfuura zvinhu, izvi zvinokubatsira pakati pe hosts inozvakanikwa.
- Chiiya: Kubva: Kubva developer extension points dzinowanikwa pfungwa dze SSO URLs, checkout-form base domains, uye creation ye domain-record kubva.
- Fix: SSO ndinobva yakakubatsira pakati pe mapped domains, anonymous broker visits, logout, uye zvinokanganisira zvinhu zveplugin dzine kuratidza (cross-plugin dependency conflicts).
- Fix: Pending site creation ndinobva kubva pfungwa dze publish flags dzakaisikana uye inopfuura kuita kuti vanhu vashanye vave munzvimbo dze site-creation.
- Fix: Domain records ndinobva kune base domains dzine checkout, billing address, password reset, email verification, template switching, tours, uye customer dashboard zvinokanganisira (edge cases) zvakawanda.
- Fix: Broadcast emails ndinobva kuita kuti vanhu vashanye vave munzvimbo dze private kana kune matambudziko ekupfuura kwe SMTP/plugin kana recipient lists kana mail transports dzine kuratidza.
- Fix: Membership renewals, expiration display, uye payment collection edge cases ndinobva kubva pfungwa dze kupfuura mwedzi, crashes, kana kuva nepayment inotevera.
- Improved: WordPress compatibility ndinobva kune 7.0, production Vue assets ndinokubva kubva npm sources, uye Cypress end-to-end coverage ndinobva kuita zvakawanda pfungwa dze checkout, setup, SSO, uye gateway flows.

## Versheni 2.12.0 — Chirevedu kuita kuita neparati 2026-05-15

- Chinangwa: Hostinger (hPanel) wakaonekwa se provider wekuti unogona kutenda, uye na kugadzirisa domain mapping
- Chinangwa: Site Exporter ndeyekuda kunge inoreva bundles dze network import kuti upanobatsira kuita site restoration yakanyanya kune network yese.
- Kufamba: BCC broadcast emails ndine zvinoreva header inosanganisira vanhu vose (undisenge anogona kuona) kuti zvinhu zvakasiyana zvakaita.
- Kufamba: Date yekuti membership itarisirwa haigadzirwa kana iingara nonedzi yakasiyana pane chokwadi kana iingara nonedzi yakasiyana pane chokwadi
- Kufamba: Updates dze membership dzine Stripe ndizvinoreva zvakanaka kuti dzisire discounts asi hazvire API inosanganisira (deprecated deleteDiscount API)
- Kufamba: SSO redirects pamusoro pe sites dzine domain mapping ndine kuita capping kuti hazviite redirect loops zvisingatitirirwa.
- Kufamba: Chizaro chekuti unogona kuchera panyira yakasiyana (image picker selection) ndine kunge kuitira data model inosanganisira zvakanaka.
- Kufamba: Site Exporter CLI ndine kuita default network site selection yakasiyana yakasiyana yakasiyana.
- Chinangwa: Kubatana wp-cli wakaondwa pamusoro pe plugin, kunge kubatana neplugin inenge inokwanisa kuitira size ya plugin ine zvakanyanya.

## Versheni 2.11.0 — Chirevedu kuita kuita neparati 2026-05-11

- Chinangwa: Site exports ndine kunge kubatana index.php inosanganisira kuti ZIP inogona kutarisirwa (installed) pane host chinobva kana kuti yakasiyana neplugin inenge inokwanisa kuita iye.
- Chinangwa: Network export inokubatsira administrators kuti vore subsites zvose mu archive imwe chete kubva munzira ye Site Export admin page.
- Chinangwa: Kubatana Allow Site Templates plan toggle ndine kunge kuitirwa nechaina (fallback chain), uye ndine kuita capping kwetemplates kana chiri kuita limits dzemplanu zvakasiyana.
- Chinangwa: Checkout form editor inoreva kana unenge uingara product yakashandiswa asi haunenge wakaona field inosanganisira.
- Chinangwa: Settings tab yekubatanidza/kudya (Import/Export) ndine kunge kuita zvakasiyana kuti inoreve scope yake uye inogadzirisa link dzine Site Export tool.

## Versheni 2.10.0 — Chirevedu kuita kuita neparati 2026-05-05

- Chii: Wizard ya PayPal kuti uingire credentials manually ne OAuth flag gate kuti uingire gateway zvakadzama.
- Chii: Customer panel inogadzirwa kubva ku template yakanaka, grid yakidzidzwa, uye button ye **Reset current template**.
- Fix: Kuwedzera template kunoita UI kuenda (hang) kana AJAX inofambira zvakanaka.
- Fix: States dzemabhukuya dzinogadzirwa kuti dzisavimbwe nekuvimbika kwevanhu vanotora.
- Fix: Inputs dzemabhukuya dzine validation yakagadzirwa panguva dzinogadzirwa.
- Fix: Prompt ye billing address inogone kuonekwa kana kuna address inenge inenge yakavara.
- Fix: Notices dzemabhukuya ekuti PHP 8.1 inosvika null-to-string dzakagadzirwa.
- Fix: Currents lazy-loaded panguva init hook kuti zvinhu zviri kuita zvakanaka.
- Fix: SSO path yakapfuma panguva dzinogadzirwa dzine kuta dzese dzemabhukuya.
- Fix: Options dzemabhukuya inenge dzakavara dzisavimbwe kana zvinogadzirwa.

## Version 2.9.0 — Chakaedza kuita panguva 2026-04-30

- New: Export uye import ya single-site yakagadzirwa panguva **Tools > Export & Import**.
- Fix: ZIP files dzemabhukuya dzinogadzirwa kubva mu endpoint wekudzorera (authenticated download endpoint).
- Fix: Risk ye SQL injection nematambudziko ekuryera (query issues) mumabhukuya akati panguva dzinogadzirwa.
- Fix: Pending site haingopushurwa kana admin anenge anobvunza email ya customer manually.
- Fix: Records dzemabhukuya dzine kuta dzichivara kana membership inenge inenge yakavara.
- Fix: Padding ye settings nav uye search anchor navigation yakagadzirwa.
- Fix: Pending sites zvinoonekwa pfungwa mu view ya All Sites.
- Fix: Screenshot provider (mShots) User-Agent header yakagadzirwa kuti isavimbwe 403 errors.
- Fix: Circular dependency ye import cron schedule yakagadzirwa.
- Fix: Tour IDs dzine kuta dzinogadzirwa ku underscores mumuser settings keys.
- Improved: ZipArchive inogadzirwa kubva mu Alchemy/Zippy kuti zvinhu zvinogona kuita zvakanaka.

## Version 2.8.0 — Chakaedza kuita panguva 2026-04-29

- Chii: Kufanira Jumper toggle yakagadzirwa mu settings UI ya Other Options.
- Chii: Kolonji chii (Status column) yakagadzirwa mune table ye checkout forms list.
- Chii: Addon sunrise file loader yakagadzirwa kuti uwedzire custom MU-plugin sunrise extensions.
- Chii: Kufanana kwakagadzirwa: Setting ya kuita error-reporting yakadurodza mu settings page.
- Fix: Site card ye thank-you page — chichidzidzo chenyoriyo (image) chine kudzidzwa uye links chinotarisirwa zvakanaka.
- Fix: Screenshot provider yakagadzirwa kubva ku thum.io ku WordPress.com mShots.
- Fix: Kuita Registration ne Default Role kunge kuita defaults dzakakodzera mu installation ya chokwadi.
- Fix: `get_site_url()` haunobudirira kuenda nemaoko kana domain inosanganisira port.
- Fix: Kufanana kwefiles ye media kunoita zvakanaka kana setting ya `copy_media` inenge inotarisirwa (empty).
- Fix: Object cache inotarisirwa zvakanaka panguva kubva kuita sitemeta write panguva network-activate.
- Fix: Custom domain inotarisirwa nekubva DNS verification kuti iwe yese yakagadzirwa kune primary kana domains dzine chiri 3.
- Fix: Pending membership inotarisirwa kana payment inenge inosvika (expired) inozvisanisiwa zvakanaka.
- Fix: Password strength checker inotarisirwa panguva login prompt inodzidzwa (dismissed).
- Fix: Infinite page reload inotarisirwa panguva thank-you page kana site yakagadzirwa nekuti hauna password field.
- Fix: WP core registration option inotarisirwa panguva plugin inobva kuita activation ne settings save.
- Fix: Null expiration guard yakagadzirwa mu `calculate_expiration` kuti iwe yese yakakodzera PHP 8.4.
- Fix: Signups dzine kuchiita (Duplicate signups) zvinotarisirwa kana mutenda anenge akaita membership akasvika.
- Fix: Null check yakagadzirwa mu `date_expiration` panguva checkout.
- Fix: Site provisioning inotarisirwa — zvinhu dzine mashandiro, kuona membership, nekubatsira domain.
- Fix: Label ye pre-install check inotarisirwa kuti HAINA KUTAI (NOT Activated) kana check inenge inotarisirwa.
- Fix: Checkout domain inotarisirwa panguva email verification URLs.
- Fix: Auto-login panguva checkout kana hauna password field.
- Fix: Free memberships haina kuita expiration anobva kune lifetime (lifetime).

- Kufarcha: Gate ya kuona email inashandisa kupakira (publish) kwe site mpaka mutenda anopindura email.
- Kufarcha: Base path ye API ya SES v2 na route ye identity yakashandiswa kuitika.
- Kufarcha: Hook `wu_inline_login_error` inyaya yekubata pre-submit inochirwa (emitted) mu catch block.
