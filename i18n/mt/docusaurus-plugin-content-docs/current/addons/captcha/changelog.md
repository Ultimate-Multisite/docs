---
title: Reġistru tal-bidliet ta’ Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Reġistru tal-bidliet ta' Captcha

Verżjoni: 1.5.0 - Maħruġa fil-2026-05-22
* Ġdid: Limitatur tar-rata b'waqfien sħiħ — jgħodd kull GET u POST fuq uċuħ protetti b'captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) u jwieġeb b'HTTP 429, header `Retry-After`, u rqad tarpit każwali (1–5s, b'limitu assolut ta' 15s).
* Ġdid: settings `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` biex tirfina t-tieqa tat-tarpit.
* Ġdid: filter `wu_cap_rate_limit_whitelist_ip` biex teżenta firxiet ta' IP fdati.
* Ġdid: action `wu_cap_rate_limit_will_block` li titħaddem immedjatament qabel tintbagħat ir-risposta ta' waqfien sħiħ.
* Ġdid: Sejbien tal-IP tal-klijent reżistenti għall-falsifikazzjoni. `Captcha_Core::get_client_ip()` (is-sors tal-verità għall-keys tal-buckets tal-limitazzjoni tar-rata, captcha siteverify `remoteip`, u hashes tal-IP tal-istatistika) issa jinforza mudell strett ta' fiduċja: REMOTE_ADDR huwa l-bażi, `CF-Connecting-IP` jiġi rrispettat biss meta l-peer immedjat ikun ġewwa firxa attwali ta' IPs ta' Cloudflare, u `X-Forwarded-For` jiġi rrispettat biss meta l-peer immedjat ikun fil-lista ta' proxies fdati kkonfigurata mill-admin, b'mixja mil-lemin għax-xellug li taqbeż hops fdati/CF qabel tistabbilixxi l-IP tal-viżitatur.
* Ġdid: setting `cap_trust_cloudflare_headers` (default MITFI) — agħżel li tafda `CF-Connecting-IP` meta tkun wara Cloudflare. Il-plugin jiġi b'snapshot Cloudflare CIDR inkluż u jġeddu kull ġimgħa permezz ta' wp-cron b'fallback inkluż jekk it-tiġdid ifalli.
* Ġdid: setting `cap_trusted_proxies` — textarea ta' CIDRs jew IPs vojta (wieħed għal kull linja, kummenti `#` permessi) li telenka l-proxies / load-balancers ta' quddiem tiegħek stess. Mingħajr dan, `X-Forwarded-For` jiġi injorat anke meta l-limitatur tar-rata jkun attivat.
* Ġdid: Sejbien awtomatiku mal-ewwel attivazzjoni tal-qagħda probabbli ta' Cloudflare / proxy b'avviż admin ta' klikk waħda "Applika s-settings misjuba". Il-plugin qatt ma jikteb fuq il-valuri ssejvjati tiegħek; jekk traffiku sussegwenti jissuġġerixxi li l-konfigurazzjoni tiegħek m'għadhiex taqbel mar-realtà (eż. Cloudflare biddel il-firxiet CIDR u l-proxy CIDR tiegħek issa skada), jidher avviż ta' nuqqas ta' qbil li ma jistax jiġi miċħud bl-aġġornament irrakkomandat.
* Irranġat: Il-modalità inviżibbli m'għadhiex tnaqqas fis-skiet `cap_security_level` għal FAST — il-livell ikkonfigurat mill-admin jiġi rrispettat. Filter ġdid `wu_cap_server_security_level` huwa disponibbli għal siti li jridu loġika apposta.
* Irranġat: Il-counter tal-istatistika `rate_limits_triggered` issa jiżdied fuq kull blokka, mhux biss fuq il-passaġġ rari ta' backstop wara suċċess.
* Irranġat: `Captcha_Core::get_client_ip()` issa huwa s-sors uniku tal-verità għall-attribuzzjoni tal-IP tal-viżitatur madwar il-limitatur tar-rata, il-fornituri tal-captcha (reCAPTCHA + hCaptcha `siteverify`), u l-istatistika — jagħlaq vettur ta' falsifikazzjoni fejn talbiet diretti lis-server tal-oriġini li jġorru header `CF-Connecting-IP` iffalsifikat kienu jiġu bucketed skont l-IP iffalsifikat minflok il-peer reali.
* Irranġat: Il-gate tal-limitazzjoni tar-rata tal-checkout klassiku ta' WooCommerce issa titħaddem fuq `template_redirect` (prijorità 1) minflok `woocommerce_before_checkout_form`. Il-hook fil-livell tal-formola qatt ma jitħaddem meta l-karrettun ikun vojt, għalhekk traffiku ta' flood li qatt ma jżid prodott kien qed jaqbeż il-limitatur kompletament.
* Irranġat: Il-gate tal-limitazzjoni tar-rata ta' pay-for-order ta' WooCommerce issa titħaddem fuq `template_redirect` minflok `woocommerce_before_pay_action`. Din tal-aħħar titħaddem biss wara li `wp_verify_nonce('woocommerce-pay')` jirnexxi, li jfisser li attakkanti mhux awtentikati (il-mudell reali tat-theddida) qatt ma kienu jqabbdu l-limitatur.
* Irranġat: Il-gate tal-limitazzjoni tar-rata taċ-checkout ta' WooCommerce Store API (blocks) issa titħaddem fuq `rest_pre_dispatch` minflok `woocommerce_store_api_checkout_update_order_from_request`. Din tal-aħħar titħaddem biss wara li Store API tivvalida l-karrettun u l-fields tal-kontijiet, għalhekk bots mhux awtentikati kienu jirċievu 400 mill-validatur u qatt ma jqabbdu l-limitatur.
* Irranġat: Il-gate tal-limitazzjoni tar-rata tal-inline-login ta' Ultimate Multisite issa titħaddem fuq `wu_ajax_nopriv_wu_inline_login` prijorità 1 (u l-mera għal min ikun illoggjat) minflok `wu_before_inline_login`. Din tal-aħħar titħaddem biss wara li `check_ajax_referer('wu_checkout')` jirnexxi, għalhekk bots mhux awtentikati mingħajr wu_checkout nonce validu kienu jirċievu 403 u qatt ma jqabbdu l-limitatur.
* Irranġat: `Rate_Limiter::enforce()` issa japplika guard ta' darba għal kull talba keyed minn `surface|ip`, għalhekk hooks upstream li jitħaddmu darbtejn għal kull render (b'mod notevoli `wu_setup_checkout` f'Ultimate Multisite) m'għadhomx inaqqsu bin-nofs il-limitu effettiv tal-limitazzjoni tar-rata.
* Irranġat: Il-gates tal-uċuħ tal-limitazzjoni tar-rata m'għadhomx jikkonsultaw `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Dak il-filter jindika "captcha diġà ttrattat minn wiċċ ieħor" u huwa ortogonali għall-protezzjoni kontra flood — l-integrazzjoni ta' WooCommerce kienet qed tgħaqqdu biex taqbeż il-captcha tal-login ta' WordPress meta Woo nonce kien preżenti, u dan xerred fil-għadd tar-rata u ħalla lil Woo POSTs jevitaw il-limitatur. Il-filter speċifiku għal-limitazzjoni tar-rata `wu_cap_rate_limit_whitelist_ip` huwa l-uniku bypass li issa japplika.

Verżjoni: 1.3.2 - Maħruġa fil-2026-01-27
* Irranġat: Il-widget Cap ma kienx qed jidher fuq formoli ta' checkout li jużaw Elementor jew page builders oħra
* Irranġat: Element personalizzat cap-widget kien qed jitneħħa mis-sanitizzazzjoni wp_kses()
* Imtejjeb: Uża kontenut callable għall-field tal-captcha taċ-checkout biex taqbeż il-filtrazzjoni HTML
* Imtejjeb: JavaScript issimplifikat b'fallback għal każijiet estremi

Verżjoni: 1.3.1 - Maħruġa fil-2026-01-26
* Irranġat: Il-modalità inviżibbli ta' Cap Captcha ma kinitx qed tissolva awtomatikament fuq formoli dinamiċi ta' checkout ta' Ultimate Multisite
* Imtejjeb: L-iskript ta' checkout Cap issa juża MutationObserver biex jiskopri widgets mgħobbija dinamikament
* Imtejjeb: Żdiedet interċettazzjoni tal-buttuna taċ-checkout biex tistenna t-token qabel is-sottomissjoni

Verżjoni: 1.3.0 - Maħruġa fis-2026-01-27
* Ġdid: Integrazzjoni tal-ħlas ta' WooCommerce Blocks b'interċettazzjoni ta' fetch tal-Store API
* Ġdid: Appoġġ għal captcha inviżibbli għall-ħlas ta' WooCommerce (hCaptcha inviżibbli, reCAPTCHA v2 inviżibbli, v3)
* Ġdid: Paġna tas-settings indipendenti għall-użu mingħajr Ultimate Multisite
* Ġdid: Jetpack Autoloader għall-prevenzjoni ta' kunflitti tad-dipendenzi
* Irranġat: hCaptcha ma kienx qed jirrendi fuq ħlas dinamiku ta' Ultimate Multisite (kontenut mgħobbi b'AJAX)
* Irranġat: Captcha ma kienx qed jiġġedded/jiġi reset meta jseħħu żbalji fil-validazzjoni tal-formola
* Irranġat: hCaptcha ma kienx qed jidher fuq il-paġna tal-ħlas ta' WooCommerce
* Irranġat: Żball ta' klassi reCAPTCHA mhux misjuba (miżjuda l-librerija PHP google/recaptcha)
* Imtejjeb: Sejbien ta' żbalji permezz ta' hooks ta' WordPress, MutationObserver, u interċettazzjoni AJAX
* Imtejjeb: Id-deskrizzjonijiet tas-settings issa jinkludu URLs tad-dashboard għall-API keys

Verżjoni: 1.2.2 - Maħruġa fl-2026-01-24
* Irranġat: Captcha ma kienx qed jintwera fuq l-Element tal-Formola tal-Login ta' Ultimate Multisite (nuqqas ta' qbil fl-isem tal-filtru tal-formola)
* Irranġat: L-HTML tal-widget Cap kien qed jitneħħa bis-sanitizzazzjoni wp_kses()
* Irranġat: Is-seletturi JavaScript ma kinux qed isibu formoli b'slashes fl-IDs tal-elementi
* Miżjud: Filter hook `wu_kses_allowed_html` għal classaddons biex jestendu t-tags HTML permessi
* Imneħħi: Fajls JavaScript ta' kodiċi mejjet sostitwiti bi skripts speċifiċi għall-fornitur

Verżjoni: 1.2.1 - Maħruġa fit-2026-01-23

* Irranġat: Il-validazzjoni tat-token ta' Cap Captcha kienet qed tfalli f'ambjenti multisite (issa tuża transients fuq in-network kollu)
* Irranġat: Captcha issa jirrendi b'mod konsistenti għall-utenti kollha irrispettivament mill-istatus tal-login
* Irranġat: Nuqqas ta' qbil bejn ir-rendering u l-validazzjoni tal-captcha li kkawża fallimenti fil-ħlas

Verżjoni: 1.2.0 - Maħruġa fil-2026-01-21

* Ġdid: Cap Captcha - captcha proof-of-work ospitat minnek stess, attivat awtomatikament mal-attivazzjoni
* Ġdid: Protezzjoni mingħajr konfigurazzjoni - attiva l-addon u tkun protett minnufih
* Ġdid: Arkitettura polimorfika ta' fornitur tal-captcha għal estensibbiltà faċli
* Ġdid: Protezzjoni tal-ħlas ta' WooCommerce Store API kontra attakki ta' ttestjar tal-kards
* Ġdid: Dashboard tat-traċċar tal-istatistika li juri sfidi, verifiki, u attakki mblukkati
* Ġdid: Presets tal-livell tas-sigurtà (Mgħaġġel, Medju, Massimu) għad-diffikultà ta' Cap Captcha
* Ġdid: Klassijiet bażi astratti għall-fornituri reCAPTCHA u hCaptcha
* Imtejjeb: Il-codebase ġiet ristrutturata f'klassijiet modulari ta' fornituri
* Imtejjeb: Separazzjoni aħjar tar-responsabbiltajiet b'klassi manager iddedikata
* Fixed: Security improvements for $_SERVER variable sanitization
* Irranġat: Konfigurazzjoni tat-test PHPUnit għall-konvenzjonijiet tal-ismijiet ta' WordPress

Verżjoni: 1.0.1 - Maħruġa fit-2025-09-28

* Ibdel l-isem tal-prefiss għal ultimate-multisite; aġġorna t-text domain; żieda fil-verżjoni.
