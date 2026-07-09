---
title: Mabwera a mapulogolo
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Kufunso za Ufumbula (Release Notes) {#release-notes}

## Visi 2.13.0 — Kilipululika kuwa ndi 2026-06-05 {#version-2130--released-on-2026-06-05}

- Mapya: Kuti chinyamata: Tsimikiza kuwona kwa sovereign-tenant pa akaunti ya mteja, checkout, billing, site, invoice, kubadilisha template, na mapingo ya domain kuti tenant networks ziwatokeledwe wamteja kuwoleka kwenye site kuu kwa vitendo vilivyosimamiwa.
- Mapya: Tsimikiza ukaguzi wa credentials za urefu (renewal-credential checks) kwa usajili unaorudia ili gateways ziweze kuzima auto-renewal wakati hakuna makubaliano ya billing, subscription, au vault token iliyohifadhiwa.
- Mapya: Tsimikiza loopback publishing yenye HMAC verification kwa ajili ya kuunda site zinazotarajiwa ili kufanya provisioning ya checkout-to-site iwe na uaminifu zaidi kwenye hosts ambapo kazi za nyuma (background jobs) zina chelezi.
- Mapya: Tsimikiza developer extension points kwa SSO URLs, base domains za checkout-form, na kuunda rekodi za domain kiotomatiki.
- Kurekebisha: SSO imekuwa na uaminifu zaidi kwenye domain zilizopangwa, ziara za broker zisizo za uwazi (anonymous broker visits), logout, na migogoro ya viungo vya plugin mbalimbali.
- Kurekebisha: Kuunda site zinazotarajiwa sasa inarejesha kutoka kwa flags za kuchapisha zilizokwisha muda (stale publish flags) na kuepuka kuacha wateja wakishindwa kwenye skrini ya kuunda site.
- Kurekebisha: Rekodi za domain hazitengwi tena kwa base domains za checkout-form zinazoshirikishwa, na kazi za background za host-provider zisizotumika zinakwepa wakati hakuna ushirikishwaji wowote unaofanya kazi.
- Kurekebisha: Matatizo yanayotokea (edge cases) kwenye checkout, anwani ya billing, kuweka upya nambari ya siri (password reset), uthibitishaji wa barua pepe, kubadilisha template, tours, na dashboard ya mteja hazizuzuia mtiririko wa kawaida wa wateja.
- Kurekebisha: Barua pepe za kusambaza (Broadcast emails) sasa zinahifadhi watu waliokupokea kuwa wajiri (private) huku zikiepuka makosa makubwa ya SMTP/plugin wakati orodha za wapokeaji au usafirishaji wa barua pepe huvunjika.
- Kurekebisha: Matatizo yanayotokea kwenye matengenezo ya usajili (Membership renewals), kuonyesha muda wa kuisha, na kukusanya malipo hazitazidi kwa muda haraka, kuvunjika, au kupuuza malipo yaliyohitajika.
- Kuboreshwa: Ulinganifu wa WordPress umejaribiwa hadi 7.0, vitu vya production Vue vinarejeshwa upya kutoka kwenye npm sources, na Cypress end-to-end coverage sasa inafanya majaribio zaidi ya checkout, setup, SSO, na gateway flows.

## Version 2.12.0 — Kufutuliza ku 2026-05-15 {#version-2120--released-on-2026-05-15}

- Mpingo: Tiliye kulemba Hostinger (hPanel) monga wopangula wosangalala ndi mapulogalamu ndi kupanga dzina za zinthu (domain mapping integration).
- Mpingo: Site Exporter ikuti imapereka bundles za m'moyo wa mitengo ya mawu (network import bundles) kuti mupereke kukhazikitsa m'moyo wosangalala wosangalala.
- Kufikira: Emaile za BCC broadcast ikuti zimapereka header la wopangula osakhulupirika kuti zikupanga boso mabwiri awo (recipient addresses).
- Kufikira: Tsiku la kupitiliza membership lina kukhala lina m'moyo ngati muli kupereka m'moyo ndi chinthu osakhale m'tsiku.
- Kufikira: Zomwe zikuperekera membership za Stripe zimapereka mwayi wopangula discounts monga momwe yomwe yakhala lina, osati zimapereke API ya deleteDiscount yomwe yakhala lina.
- Kufikira: SSO redirects pa sites zomwe zikuperekera dzina za zinthu zimapereka mwayi wopangula kuti muphatikizidwe m'moyo osakhale.
- Kufikira: Mwayi wopanga pikhala lina la kupanga maphunziro (image picker) limapereka mwayi wopangula monga momwe yomwe yakhala lina.
- Kufikira: Site Exporter CLI ikuti imapereka mwayi wopangula wosangalala wosangalala wosangalala.
- Kusonyeza: Tiliye kupanga wp-cli ku m'moyo wa mapulogalamu, kukhazikitsa kusintha kwa mapulogalamu osakhale.

## Version 2.11.0 — Kufutuliza ku 2026-05-11 {#version-2110--released-on-2026-05-11}

- Mpingo: Site exports ikuti imapereka index.php yomwe imaperekera m'moyo wosangalala, chidziwika kuti ZIP yomwe ndi liyenera likupangidwa pa host osakhale monga mapulogalamu osakhale.
- Mpingo: Network export imapereka administrators kuti apereke subsites onse m'archive imodzi kuchokera pa admin page ya Site Export.
- Mpingo: Kuti mpangidwe wa Site Templates kuphatikizidwa ndi chain yomwe yomwe yakhala lina, zimapereka mwayi wopangula kuti zikuperekera templates zikuyenera kwa mapulogalamu awo.
- Mpingo: Checkout form editor imapereka chisoni pamene muli kupanga product osakhale ndi field lomwe likufunika.
- Mpingo: Tab ya Import/Export ikuti imapereka momwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe y

- Mapya: Setup wizard ya PayPal kwa kulema manual credential entry ndi OAuth flag gate kuti mwayi woperekera gateway woyenera.
- Mapya: Customer panel yomwe imachitidwa switch template imachitidwa mwayi woperekera card ya current-template, grid yomwe imakhala kukhala, ndipo **Reset current template** button.
- Kukulitsa: Ku switch template kumayesera UI pa AJAX failure.
- Kukulitsa: States za permission ya ku switch template zimachitidwa mwayi woperekera unauthorized access.
- Kukulitsa: Inputs za site override zimachitidwa mwayi woperekera kusaukira.
- Kukulitsa: Prompt ya billing address imachitidwa mwayi woperekera pamene address imakhala liku.
- Kukulitsa: Notices za PHP 8.1 za null-to-string zimachitidwa mwayi woperekera.
- Kukulitsa: Current lazy-loaded kumayesera init hook kuti muchezi wa nthawi woyenera.
- Kukulitsa: SSO path yomwe imachitidwa filter imachitidwa mwayi woperekera mwayi woperekera wosaukira.
- Kukulitsa: Blank site identity options zimachitidwa mwayi woperekera pamene imachitidwa save.

## Version 2.9.0 — Imaliza pa 2026-04-30 {#version-2100--released-on-2026-05-05}

- Mapya: Export ndipo import ya single-site imaperekedwa m'Tools > Export & Import.
- Kukulitsa: ZIP files za export zimachitidwa mwayi woperekera download endpoint yomwe imayenera.
- Kukulitsa: Risks za SQL injection ndi matindi a query m'pending export/import queries zimachitidwa mwayi woperekera.
- Kukulitsa: Site yomwe imaperekedwa imachitidwa mwayi woperekera pamene admin imayenera kuona email ya customer.
- Kukulitsa: Records za pending_site zomwe zimakhala liku zimachitidwa mwayi woperekera pamene membership imachitidwa kukhala.
- Kukulitsa: Padding ya settings nav ndi search anchor navigation zimachitidwa mwayi woperekera.
- Kukulitsa: Pending sites zimachitidwa m'All Sites view poyenera.
- Kukulitsa: Screenshot provider (mShots) User-Agent header imachitidwa mwayi woperekera pa 403 errors.
- Kukulitsa: Circular dependency ya import cron schedule imachitidwa mwayi woperekera.
- Kukulitsa: Tour IDs zimachitidwa underscores m'user settings keys.
- Kusonyeza: ZipArchive imachitidwa mwayi woperekera Alchemy/Zippy kuti mwayi woperekera woyenera.

## Version 2.8.0 — Imaliza pa 2026-04-29 {#version-290--released-on-2026-04-30}

- Mapya: Kufuna Jumper toggle kuliye kuwera mu settings UI ya Other Options.
- Mapya: Koloni column kuliye kuwera mu checkout forms list table.
- Mapya: Addon sunrise file loader kuti m'mplugin custom MU-plugin sunrise extensions.
- Kufunika: Kuliye error-reporting opt-in setting kuwera mu settings page.
- Kufunika: Site card ya thank-you page — image kuliye kuliye links kuliye kuliye styled mwayi.
- Kufunika: Screenshot provider kuliye thum.io ku WordPress.com mShots.
- Kufunika: Enable Registration na Default Role kuliye set correct defaults mu fresh install.
- Kufunika: `get_site_url()` sikuliye kuliye empty pa domain kuliye kuliye port.
- Kufunika: Clone media files sikuliye kuliye copied mwayi pa setting ya `copy_media` ilipo empty.
- Kufunika: Object cache sikuliye kuliye invalidated mwayi pa network-activate sitemeta write.
- Kufunika: Custom domain auto-promote ku primary mu DNS verification pa domains zili ndi mapeto omwe ali ndi nambo lisanu.
- Kufunika: Pending membership kuliye cancelled pa payment iliyonse ilipo cleanup.
- Kufunika: Password strength checker kuliye rebound pa inline login prompt iliyonse ilipo dismissed.
- Kufunika: Infinite page reload sikuliye ku thank-you page pa site iliyonse ili yenera likupanga.
- Kufunika: WP core registration option kuliye synced pa plugin activation na settings save.
- Kufunika: Null expiration guard kuliye wopanga mu `calculate_expiration` pa PHP 8.4 compatibility.
- Kufunika: Duplicate signups sikuliye ku blockipa pamene customer ali ndi membership iliyonse ilipo.
- Kufunika: Null check kuliye wopanga mu `date_expiration` m'checkout.
- Kufunika: Site provisioning kuliye hardened — limitations, membership inference, domain promotion.
- Kufunika: Pre-install check status label kuliye kuliye NOT Activated pa check iliyonse ili yenera likupanga.
- Kufunika: Checkout domain kuliye kuliye wopanga mu email verification URLs.
- Kufunika: Auto-login pa m'checkout pa nthawi yomwe siyo ndi password field.
- Kufunika: Free memberships sikuliye ku expire — kuliye treated monga lifetime.

- Kufunsa: Email verification gate kufulisa kupanga site yomwe wamwoneka mpaka mwana wamwoneka email.
- Kufunsa: Base path ya SES v2 API endpoint ndi route ya identity kuliye imapereka.
- Kufunsa: Hook `wu_inline_login_error` ikupereka m'block yomwe imapereka pansi pa pre-submit.
