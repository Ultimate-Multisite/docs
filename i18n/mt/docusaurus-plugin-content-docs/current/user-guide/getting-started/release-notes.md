---
title: Nota di rilascio
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Notiziamenti tal-Risemaltija {#release-notes}

## Versjoni 2.13.0 — Irrilissata fil-2026-06-05 {#version-2130--released-on-2026-06-05}

- Nuw: Aggiungat support per tenant sovrani (sovereign-tenant) għall-account tal-klijenti, checkout, fatturament, siti, fatturi, switch ta template u mapping tal-domeni biex reti tal-tenant jistgħu jorru l-klijenti mal-site primari għall-azioni gestiti.
- Nuw: Aggiungat controlli ta renewal (renewal-credential checks) għall-membership ricorrenti biex gateway jistgħu jew ma jistgħux jaħmlu l-auto-renewal meta m'għandu manx għal akkompromizzazzjoni tal-fatturament, subscription jew vault token savwati.
- Nuw: Aggiungat loopback publishing verifikati HMAC għall-site kien bejn (pending site creation) biex jimerħu l-provisioning tal-checkout għall-site aktar affidabbli fuq hostijiet li jidħlu l-job background.
- Nuw: Aggiungat developer extension points għall-SSO URLs, base domains tal-checkout-form u kreawment awtomatiku ta record tal-domeni.
- Fix: L-SSO huwa aktar affidabbli b'traxx tal-domeni mappati, żiżi anonimi (anonymous broker visits), logout u konflittijiet ta dipendenti cross-plugin.
- Fix: Il-site kien bejn (pending site creation) jipprova minn flagijiet ta pubblikazzjoni stanti (stale publish flags) u jevitaw li jgħidu l-klijenti fuq iscrint tal-site creation.
- Fix: Record tal-domeni ma jinklutu aktar għall-base domains tal-checkout-form, u job background ta provider host li ma jgħandux attivi jiġu skippati meta ma jkunx aktiiv xi integrazzjoni.
- Fix: Edge cases biex checkout, indirizz tal-fatturament, password reset, email verification, switch ta template, tours u dashboard tal-klijenti ma jgħidu l-flussi normali tal-klijenti.
- Fix: Email broadcast aktar jipprovvdu recipient privati wa jevitu errori fatalijiet SMTP/plugin meta t-listi recipient jew trasport tal-email jifailu.
- Fix: Edge cases biex renewal tal-membership, display ta scadenza u kolezzjoni tal-pagamenti jevitaw scadenza immediata, crash o pagamenti magħrufin.
- Improved: Kompatibbiltà WordPress testat fino għall-7.0, asset Vue ta prodott (production) jiġu ricostru min isorzi npm, u Cypress end-to-end coverage jmexxi aktar flussi tal-checkout, setup, SSO u gateway.

## Versjoni 2.12.0 — Irrilissat fil-2026-05-15 {#version-2120--released-on-2026-05-15}

- Nuw: Aggiumenta Hostinger (hPanel) bħala fornitore host supportat mal-mapping tal-domain
- Nuw: Il-Site Exporter jipproċessa l-network import bundles, biex jgħin fil-restoration tal-site fuq nnetz b'mod aktar semplifikat
- Fix: Email BCC broadcast tajjeb it-tessar now jikelu header ta recipient mhux mfaħħar biex jipprevjeni l-esposizione tal-indirizzi tal-recipient
- Fix: Data tal-membership expiration date ma tkun aqcod min jabbaq biex issalvu b val li mhix data tal-data
- Fix: Ażżżurijiet ta' membership tal-Stripe jikelu aħjar biex jncleanu discount biex ma jcallaw l-API deprecata deleteDiscount
- Fix: SSO redirects fuq siti mappati mal-domain immoġġawn it-tessar biex ma jkunx hemm loop ta redirect infiniti
- Fix: Selezzjoni tal-image picker fil-Setup wizard tajjeb tagħmel aggiorna korretta għall-data model tal-apojiet
- Fix: Il-Site Exporter CLI jippreserva l-selezzjoni difiċjata tal-network site b'mod korrett
- Improved: Elimina wp-cli bundle minn il-package tal-plugin, biex tqassse l-għadd tal-plugin

## Versjoni 2.11.0 — Irrilissat fil-2026-05-11 {#version-2110--released-on-2026-05-11}

- Nuw: Il-Site exports jipproċessa bundles ta `index.php` self-booting biex il-ZIP jkun jistabbilit fuq host ġdid b'mod li ma għandux installa plugin separat
- Nuw: Il-Network export jista' l-administraturi jexport kull subsite f'archive waħd ma' page tal-Site Export admin
- Nuw: Il-Allow Site Templates plan toggle jista' jkun forzatu b'chain ta fallback, biex jgħin biex jgħatti l-availability tal-template għall-limits tal-plan
- Nuw: L-checkout form editor jnwarnaw meta tiddir produkta mingħajr li field reqjud konfigurat
- Nuw: Il-Import/Export settings tab jispjega b'mod chiaro isseppettività tiegħu u jikelink dirett għall-Site Export tool

## Versjoni 2.10.0 — Irrilissat fil-2026-05-05 {#version-2100--released-on-2026-05-05}

- Nuw: Wizard setup PayPal għall input manuali ta kredjali b'flag OAuth gate biex ikun konfigurat b'mod moħtiġ (seamless gateway configuration).
- Nuw: Il-template switch tal-customer panel tiddissenyaw mill-aħħar ma jinqasmu b'card current-template, grid persistenti, u b'ut button **Reset current template**.
- Fix: Il-template switching ma j묵 (hang) l-UI appoċċi għall AJAX failure.
- Fix: Stati permess tal-template switching jgħandu b'mod aħjar kontra l-aċċess ta' id-dinja.
- Fix: Input override tal-site jipprovvdi validazzjoni qabel s-save.
- Fix: Il-prompt tal-indirizz tal-billing juri meta l-indirizz ma jkunx vuṭ.
- Fix: Notifikazzjonijiet ta deprecazzjoni PHP 8.1 null-to-string għaddu.
- Fix: Il-lazy-loading tal-current qabel hook init biex jipprevjeni problemi ta' timing.
- Fix: Il-SSO path filtrat jgħandu b'mod aħjar f'koll id-flows ta l-login.
- Fix: Opzioni identità tal-site vuṭa jgħandu b'mod aħjar meta tiddissenyaw (on save).

## Versjoni 2.9.0 — Irrilessita fil-2026-04-30 {#version-290--released-on-2026-04-30}

- Nuw: Export u import ta site waħdhom iddurju ta qudd **Tools > Export & Import**.
- Fix: Il-ZIP files tal-export jmur serviti minn endpoint ta download awtentikat.
- Fix: Risk ta SQL injection u problemi ta' query f'queries ta' export/import pendenti kkorrettati.
- Fix: Il-site pendenti ma jirrilesset meta l-admin jverifika l-email tal-customer manualment.
- Fix: Record pending_site orfani jiġu purifikati meta membership ma jkollhomx.
- Fix: Padding navigazzjoni u anchor search kkorrettati.
- Fix: Il-sites pendenti juri per ewliem fil-view All Sites.
- Fix: Provider ta screenshot (mShots) User-Agent header iddurju biex jiġu prevjuti errori 403.
- Fix: Circular dependency tal-cron schedule tal-import kkorrettata.
- Fix: Tour IDs normalizzati għal underscores f'settings keys tal-user.
- Improved: ZipArchive juttu u jmur it-Alchemy/Zippy biex ikunu kompatibbli b'mod aħjar.

## Versjoni 2.8.0 — Irrilessita fil-2026-04-29 {#version-280--released-on-2026-04-29}

- Nuw: Toggles Jumper attivata id-UI tal-għażliet Oħra.
- Nuw: Kolonna Status aḍḍixiet għall-lista ta formi checkout.
- Nuw: Loader tal-file sunrise Addon għal estensjonijiet custom MU-plugin sunrise.
- Migliju: Elimina l-setting tal-opt-in għall-report tal-erriġuri mill-settings page.
- Fix: Card siti ta' "Thank-you" — l-immaġini hija mġiegħla u l-linkijiet stilati b'mod korrett.
- Fix: Provider ta screenshot switch mill-thum.io għal WordPress.com mShots.
- Fix: Attivazzjoni tal-Registrazione u il-Rolle Definitiva setti default korretti fuq installazzjoni ġdida.
- Fix: `get_site_url()` ma tirtorna aktar qabel meta domini jinkluna port.
- Fix: Kopja ta' file media tirtirbija b'mod korrett meta l-setting `copy_media` kien vuṭi.
- Fix: Object cache jiġi invalidat b'mod korrett wara s-sitemeta write tal-network-activate.
- Fix: Domini custom auto-promossi għall-primari fuq verifikazzjoni DNS għal domini ta' 3 parti.
- Fix: Membership pending tirtilqu meta l-pagament li jgħin il-espirazzjoni jitnaqqas.
- Fix: Checker tal-forza tal-parola (Password strength checker) jiġi rebound wara li jgħin il-prompt tal-login inline jgħin.
- Fix: Rilodina ta' pagina infinita tirtirba fuq "thank-you page" meta s-sito jkun dejjem creat.
- Fix: Opċjoni ta' registrazzjoni tal-WP core setta b'mod korrett meta plugin attivat u settings jsir savati.
- Fix: Guard tal-espirazzjoni null aḍḍixiet f' `calculate_expiration` għall-kompatibbiltà PHP 8.4.
- Fix: Signups duplikat jiġu bloccati meta l-customer jkun dejjem għandi membership attivo.
- Fix: Null check aḍḍixiet għal `date_expiration` f' checkout.
- Fix: Provisioning tal-sito hija mġiegħla — limitazzjonijiet, inferenza ta' membership, promossa domini.
- Fix: Label status pre-install tirtirba b'mod korrett b'MOD NOT Activated meta l-check ma jkunx aktivat.
- Fix: Domini checkout jinkludi URL għall-verifikazzjoni tal-email.
- Fix: Auto-login wara checkout meta ma jkunx hemm field ta password.
- Fix: Membership free ma tirtilqu aktar — titreattja b'mod lifetime (dejjem).

*Fix: Il-gate tal-verifika tal-email (Email verification gate) impedisce l-pubblikazzjoni tal-site fin ma l-istruttura tal-email tiegħu ma jkun verifikata mill-customer.*
*Fix: Il-base path endpoint u l-identity route ta SES v2 API kkorrettin.*
*Fix: L-hook `wu_inline_login_error` emmitt f'il-catch block pre-submit.*
