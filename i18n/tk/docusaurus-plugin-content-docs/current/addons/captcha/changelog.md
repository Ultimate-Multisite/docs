---
title: Captcha üýtgeşmeler žurnaly
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha üýtgeşmeler žurnaly

Wersiýa: 1.5.0 - 2026-05-22 senesinde çykaryldy
* Täze: Berk duruzýan tizlik çäklendirijisi — captcha bilen goralan ýüzlerde (wp-login / registrasiýa / ýitirilen-parol / teswirler, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) her GET we POST haýyşyny sanaýar we HTTP 429, `Retry-After` header hem-de tötänleýin tarpit gijikdirmesi (1–5s, 15s bilen berk çäklendirilen) bilen jogap berýär.
* Täze: tarpit penjiresini sazlamak üçin `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` sazlamalary.
* Täze: ynamdar IP aralyklaryny boşatmak üçin `wu_cap_rate_limit_whitelist_ip` filter.
* Täze: berk duruzma jogaby iberilmezden öň dessine işleýän `wu_cap_rate_limit_will_block` action.
* Täze: Galplaşdyrma garşy durnukly müşderi-IP anyklamasy. `Captcha_Core::get_client_ip()` (tizlik çäklendiriş bucket açarlary, captcha siteverify `remoteip` we statistika IP hashleri üçin hakykatyň çeşmesi) indi berk ynam modelini mejbury ulanýar: REMOTE_ADDR iň aşaky esasdyr, `CF-Connecting-IP` diňe göni peer häzirki Cloudflare IP aralygynyň içinde bolanda kabul edilýär, `X-Forwarded-For` bolsa diňe göni peer admin tarapyndan sazlanan ynamdar-proxy sanawynda bolanda kabul edilýär; bu ýagdaýda zyýaratçy IP-sinde durmazdan öň ynamdar/CF geçişlerini sypdyrýan sagdan çepe ýörelge ulanylýar.
* Täze: `cap_trust_cloudflare_headers` sazlamasy (deslapky OFF) — Cloudflare aňyrsynda bolanyňyzda `CF-Connecting-IP` ynamyny açyň. Plugin içindäki Cloudflare CIDR snapshot bilen gelýär we ony hepdelik wp-cron arkaly täzeläp durýar; täzelenme başa barmasa, içindäki ätiýaç wariant ulanylýar.
* Täze: `cap_trusted_proxies` sazlamasy — öz öň hatardaky proxyleriňizi / ýük-balanslaýjylaryňyzy görkezýän CIDR-leriň ýa-da ýönekeý IP-leriň textarea sanawy (her setirde biri, `#` teswirlere rugsat). Bu bolmasa, tizlik çäklendirijisi açyk bolsa-da, `X-Forwarded-For` hasaba alynmaýar.
* Täze: Ilkinji açylanda mümkin Cloudflare / proxy ýagdaýyny awtomatik anyklamak we bir düwme bilen "Anyklanan sazlamalary ulan" admin habarnamasy. Plugin siziň saklanan bahalaryňyzyň üstünden hiç haçan ýazmaýar; soňraky trafik konfigurasiýaňyzyň indi hakykata gabat gelmeýändigini görkezse (meselem, Cloudflare CIDR aralyklary üýtgäp, siziň proxy CIDR-iňiz könelse), aýryp bolmaýan laýyk gelmezlik habarnamasy maslahat berilýän täzelenmäni görkezýär.
* Düzedildi: Görünmeýän režim indi `cap_security_level` bahasyny sessiz FAST derejesine peseltmeýär — admin tarapyndan sazlanan dereje hormatlanýar. Özboluşly logika isleýän saýtlar üçin täze `wu_cap_server_security_level` filter elýeterli.
* Düzedildi: Statistikadaky `rate_limits_triggered` hasaplaýjysy indi diňe seýrek post-success backstop ýolunda däl-de, her blokda artýar.
* Düzedildi: `Captcha_Core::get_client_ip()` indi tizlik çäklendirijisi, captcha üpjün edijileri (reCAPTCHA + hCaptcha `siteverify`) we statistika boýunça zyýaratçy IP degişli edilmesi üçin ýeke-täk hakykat çeşmesidir — galp `CF-Connecting-IP` header göterýän göni origin-server haýyşlarynyň hakyky peer ýerine galplaşdyrylan IP boýunça bucket edilmegine ýol berýän galplaşdyrma wektoryny ýapýar.
* Düzedildi: WooCommerce klassiki checkout tizlik-çäklendiriş derwezesi indi `woocommerce_before_checkout_form` ýerine `template_redirect`-de (prioritet 1) işleýär. Sebet boş bolanda forma derejesindäki hook hiç haçan işlemeýär, şonuň üçin önüm hiç goşmaýan flood trafik çäklendirijiden doly sowlup geçýärdi.
* Düzedildi: WooCommerce pay-for-order tizlik-çäklendiriş derwezesi indi `woocommerce_before_pay_action` ýerine `template_redirect`-de işleýär. Ikinjisi diňe `wp_verify_nonce('woocommerce-pay')` üstünlikli bolandan soň işleýärdi, bu bolsa unauth hüjümçileriň (hakyky howp modeli) çäklendirijini hiç haçan işjeňleşdirmeýändigini aňladýardy.
* Düzedildi: WooCommerce Store API (blocks) checkout tizlik-çäklendiriş derwezesi indi `woocommerce_store_api_checkout_update_order_from_request` ýerine `rest_pre_dispatch`-de işleýär. Ikinjisi diňe Store API sebedi we hasap-faktura meýdanlaryny barlandan soň işleýärdi, şonuň üçin unauth botlar barlaýjydan 400 alýardy we çäklendirijini hiç haçan işjeňleşdirmeýärdi.
* Düzedildi: Ultimate Multisite inline-login tizlik-çäklendiriş derwezesi indi `wu_before_inline_login` ýerine `wu_ajax_nopriv_wu_inline_login` prioritet 1-de (we ulgama girenler üçin aýna görnüşinde) işleýär. Ikinjisi diňe `check_ajax_referer('wu_checkout')` üstünlikli bolandan soň işleýärdi, şonuň üçin dogry wu_checkout nonce bolmadyk unauth botlar 403 alýardy we çäklendirijini hiç haçan işjeňleşdirmeýärdi.
* Düzedildi: `Rate_Limiter::enforce()` indi `surface|ip` boýunça açarlanan haýyş başyna bir gezeklik gorag ulanýar, şonuň üçin her renderde iki gezek işleýän ýokarky hooklar (hususan-da Ultimate Multisite-däki `wu_setup_checkout`) täsirli tizlik-çäklendiriş çägini indi ýarpa bölmeýär.
* Düzedildi: Tizlik-çäklendiriş ýüz derwezeleri indi `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) bilen maslahatlaşmaýar. Ol filter "captcha eýýäm başga bir ýüz tarapyndan işlenildi" diýip signal berýär we flood goragy bilen baglanyşyksyzdyr — WooCommerce integrasiýasy Woo nonce bar wagty WordPress login captcha-syny sypdyrmak üçin ony hook edýärdi, bu bolsa tizlik sanalmagyna syzyp, Woo POST-laryň çäklendirijiden gaçmagyna ýol berýärdi. Indi ulanylýan ýeke-täk sowlup geçme tizlik-çäklendirişe mahsus `wu_cap_rate_limit_whitelist_ip` filteridir.

Wersiýa: 1.3.2 - 2026-01-27 senesinde çykaryldy
* Düzedildi: Elementor ýa-da beýleki sahypa gurujylary ulanýan checkout formalarynda Cap widget görkezilmeýärdi
* Düzedildi: cap-widget custom elementiniň wp_kses() sanitizasiýasy tarapyndan aýrylmagy
* Gowulandyryldy: HTML süzgüjinden sowlup geçmek üçin checkout captcha meýdanynda callable mazmuny ulanmak
* Gowulandyryldy: Gyra ýagdaýlar üçin ätiýaç wariantly ýönekeýleşdirilen JavaScript

Wersiýa: 1.3.1 - 2026-01-26 senesinde çykaryldy
* Düzedildi: Cap Captcha görünmeýän režimi dinamiki Ultimate Multisite checkout formalarynda awtomatik çözülmeýärdi
* Gowulandyryldy: Cap checkout skripti indi dinamiki ýüklenen widgetlary anyklamak üçin MutationObserver ulanýar
* Gowulandyryldy: Ibermezden öň token-e garaşmak üçin checkout düwmesini saklamak goşuldy

Version: 1.3.0 - 2026-01-27 senesinde çykaryldy
* Täze: Store API fetch aralaşmagy bilen WooCommerce Blocks töleg sahypasy integrasiýasy
* Täze: WooCommerce töleg sahypasy üçin görünmeýän captcha goldawy (hCaptcha görünmeýän, reCAPTCHA v2 görünmeýän, v3)
* Täze: Ultimate Multisite bolmazdan ulanmak üçin aýratyn sazlamalar sahypasy
* Täze: baglylyk çaknyşyklarynyň öňüni almak üçin Jetpack Autoloader
* Düzedildi: dinamiki Ultimate Multisite töleg sahypasynda hCaptcha görkezilmeýärdi (AJAX bilen ýüklenen mazmun)
* Düzedildi: forma tassyklama ýalňyşlyklary ýüze çykanda Captcha täzelenmeýär/gaýtadan düzülmeýärdi
* Düzedildi: WooCommerce töleg sahypasynda hCaptcha görkezilmeýärdi
* Düzedildi: reCAPTCHA class tapylmady ýalňyşlygy (google/recaptcha PHP library goşuldy)
* Kämilleşdirildi: WordPress hooks, MutationObserver we AJAX aralaşmagy arkaly ýalňyşlyk kesgitlemek
* Kämilleşdirildi: sazlamalaryň düşündirişleri indi API açarlary üçin dashboard URL-lerini öz içine alýar

Version: 1.2.2 - 2026-01-24 senesinde çykaryldy
* Düzedildi: Ultimate Multisite Login Form Element-de Captcha görkezilmeýärdi (forma filter adynyň gabat gelmezligi)
* Düzedildi: Cap widget HTML-i wp_kses() arassalamasy tarapyndan aýrylýardy
* Düzedildi: JavaScript saýlaýjylary element ID-lerinde kese çyzyklar bolan formalary tapmaýardy
* Goşuldy: classaddons-laryň rugsat berlen HTML taglaryny giňeltmegi üçin Filter hook `wu_kses_allowed_html`
* Aýryldy: üpjün edijä mahsus scriptler bilen çalşylan işlemeýän JavaScript faýllary

Version: 1.2.1 - 2026-01-23 senesinde çykaryldy

* Düzedildi: multisite gurşawlarynda Cap Captcha token tassyklamasy şowsuz bolýardy (indi network-wide transients ulanýar)
* Düzedildi: Captcha indi login ýagdaýyna garamazdan ähli ulanyjylar üçin yzygiderli görkezilýär
* Düzedildi: captcha görkezilmegi bilen tassyklamagyň arasyndaky gabat gelmezlik, töleg sahypasy şowsuzlyklaryna sebäp bolýardy

Version: 1.2.0 - 2026-01-21 senesinde çykaryldy

* Täze: Cap Captcha - öz hostingli proof-of-work captcha, işjeňleşdirilende deslapky ýagdaýda açyk
* Täze: nol konfigurasiýaly gorag - addon-y işjeňleşdiriň we derrew goragly bolarsyňyz
* Täze: aňsat giňeldip bolýan polimorf captcha provider arhitekturasy
* Täze: kart test hüjümlerine garşy WooCommerce Store API töleg sahypasy goragy
* Täze: kynçylyklary, barlaglary we petiklenen hüjümleri görkezýän statistika yzarlama dashboard-y
* Täze: Cap Captcha kynlygy üçin howpsuzlyk derejesi presetleri (Çalt, Orta, Maks)
* Täze: reCAPTCHA we hCaptcha provider-leri üçin abstrakt esasy classlar
* Kämilleşdirildi: codebase modul provider classlaryna gaýtadan düzüldi
* Kämilleşdirildi: ýörite manager class bilen jogapkärçilikleriň has gowy bölünmegi
* Fixed: Security improvements for $_SERVER variable sanitization
* Düzedildi: WordPress atlandyryş düzgünleri üçin PHPUnit test konfigurasiýasy

Version: 1.0.1 - 2025-09-28 senesinde çykaryldy

* Prefiksi ultimate-multisite diýip üýtgetmek; text domain-i täzelemek; version-y ýokarlandyrmak.
