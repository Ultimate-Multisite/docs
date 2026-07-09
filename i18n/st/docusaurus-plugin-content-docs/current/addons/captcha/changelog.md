---
title: Lenane la diphetoho la Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Lenane la liphetoho la Captcha

Mofuta: 1.5.0 - E lokollotsoe ka 2026-05-22
* E ncha: Hard-stop rate limiter — e bala GET le POST e nngwe le e nngwe dibakeng tse sireleditsweng ka captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) mme e araba ka HTTP 429, header ya `Retry-After`, le boroko ba tarpit bo kgethilweng ka tshohanyetso (1–5s, bo thibelletswe ka thata ho 15s).
* E ncha: di-setting tsa `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ho lokisa fensetere ya tarpit.
* E ncha: filter ya `wu_cap_rate_limit_whitelist_ip` ho lokolla meedi ya IP e tsheptjwang.
* E ncha: ketso ya `wu_cap_rate_limit_will_block` e qalang hanghang pele karabo ya hard-stop e romelwa.
* E ncha: Ho lemoha IP ya client ho hanyetsanang le spoofing. `Captcha_Core::get_client_ip()` (mohlodi wa nnete bakeng sa dinotlolo tsa dikotjana tsa rate-limit, captcha siteverify `remoteip`, le di-hash tsa IP tsa dipalopalo) jwale e tiisa mohlala o thata wa tshepo: REMOTE_ADDR ke motheo, `CF-Connecting-IP` e hlomphuwa feela ha molekane wa hanghang a le kahare ho mefuta ya hajwale ya Cloudflare IP, mme `X-Forwarded-For` e hlomphuwa feela ha molekane wa hanghang a le lenaneng la trusted-proxy le hlophisitsweng ke admin, ka ho tsamaya ho tloha ho le letona ho ya ho le letshehadi ho tlohang mehatong e tsheptjwang/CF pele e qetella ho IP ya moeti.
* E ncha: setting ya `cap_trust_cloudflare_headers` (default OFF) — kgetha ho tshepa `CF-Connecting-IP` ha o le ka mora Cloudflare. Plugin e tla le snapshot ya Cloudflare CIDR e kenyelleditsweng mme e e ntjhafatsa beke le beke ka wp-cron ka fallback e kenyelleditsweng haeba ntjhafatso e hloleha.
* E ncha: setting ya `cap_trusted_proxies` — textarea ya CIDR kapa di-IP tse se nang letho (e le nngwe moleng ka mong, ditlhaloso tsa `#` di dumelletswe) e thathamisang di-proxy tsa hao tsa pele / load-balancers. Ntle le sena, `X-Forwarded-For` e a hlokomolohwa leha rate limiter e buletswe.
* E ncha: Ho lemoha ka boona ha ho bulelwa lekgetlo la pele boemo bo ka bang teng ba Cloudflare / proxy ka tsebiso ya admin ya ho tobetsa hang feela "Sebedisa di-setting tse lemohilweng". Plugin ha e ke e ngola hodima boleng boo o bo bolokileng; haeba traffic ya morao e bontsha hore config ya hao ha e sa tshwana le nnete (mohl. Cloudflare e fetotse mefuta ya CIDR mme proxy CIDR ya hao jwale e tsofetse), tsebiso ya ho se tshwane e ke keng ya qhelelwa thoko e hlahisa ntjhafatso e kgothaletswang.
* E lokisitswe: Mokgwa o sa bonahaleng ha o sa theole `cap_security_level` ka kgutso ho FAST — boemo bo hlophisitsweng ke admin bo a hlomphuwa. Filter e ntjha ya `wu_cap_server_security_level` e teng bakeng sa ditsha tse batlang logic e ikgethileng.
* E lokisitswe: Sebali sa dipalopalo sa `rate_limits_triggered` jwale se eketseha block e nngwe le e nngwe, eseng feela tseleng e sa tlwaelehang ya backstop ka mora katleho.
* E lokisitswe: `Captcha_Core::get_client_ip()` jwale ke mohlodi o le mong wa nnete bakeng sa ho abela IP ya moeti hohle ho rate limiter, bafani ba captcha (reCAPTCHA + hCaptcha `siteverify`), le dipalopalo — ho kwala tsela ya spoofing moo dikopo tse tobileng server ya tshimoloho tse jereng header ya `CF-Connecting-IP` e qhekelletsweng di ka beng di kentse ka kotjaneng ka IP e qhekelletsweng ho ena le molekane wa nnete.
* E lokisitswe: Kgoro ya rate-limit ya WooCommerce classic checkout jwale e qala ho `template_redirect` (priority 1) ho ena le `woocommerce_before_checkout_form`. Hook ya boemo ba form ha e ke e qala ha kariki e se na letho, ka hoo traffic ya flood e sa kenyeng sehlahiswa le ka mohla e ne e feta limiter ka botlalo.
* E lokisitswe: Kgoro ya rate-limit ya WooCommerce pay-for-order jwale e qala ho `template_redirect` ho ena le `woocommerce_before_pay_action`. Ya morao e qala feela kamora hore `wp_verify_nonce('woocommerce-pay')` e atlehe, ho bolelang hore bahlaseli ba unauth (mohlala wa kotsi wa sebele) ha ba ka ba kenya limiter tshebetsong.
* E lokisitswe: Kgoro ya rate-limit ya WooCommerce Store API (blocks) checkout jwale e qala ho `rest_pre_dispatch` ho ena le `woocommerce_store_api_checkout_update_order_from_request`. Ya morao e qala feela kamora hore Store API e netefatse kariki le masimo a tefiso, ka hoo bots ba unauth ba ne ba fumana 400 ho tswa ho validator mme ba sa ka ba kgopisa limiter.
* E lokisitswe: Kgoro ya rate-limit ya Ultimate Multisite inline-login jwale e qala ho `wu_ajax_nopriv_wu_inline_login` priority 1 (le seipone sa ba logged-in) ho ena le `wu_before_inline_login`. Ya morao e qala feela kamora hore `check_ajax_referer('wu_checkout')` e atlehe, ka hoo bots ba unauth ntle le nonce ya wu_checkout e nepahetseng ba ne ba fumana 403 mme ba sa ka ba kgopisa limiter.
* E lokisitswe: `Rate_Limiter::enforce()` jwale e sebedisa molebedi wa hang ka kopo ya senotlolo sa `surface|ip`, ka hoo hooks tsa upstream tse qalang habedi ka render (haholo-holo `wu_setup_checkout` ho Ultimate Multisite) ha di sa fokotsa threshold e sebetsang ya rate-limit ka halofo.
* E lokisitswe: Dikgoro tsa dibaka tsa rate-limit ha di sa botsa `Captcha_Core::is_whitelisted()` (filter ya `wu_captcha_whitelisted`). Filter eo e bontsha "captcha e se e sebetswe ke sebaka se seng" mme e arohane le tshireletso ya flood — kopanyo ya WooCommerce e ne e e hokela ho tlola captcha ya WordPress login ha Woo nonce e le teng, e ileng ya dutlela palong ya rate mme ya dumella Woo POSTs ho qoba limiter. Filter e ikgethileng ya rate-limit ya `wu_cap_rate_limit_whitelist_ip` ke yona feela bypass e sebetsang jwale.

Mofuta: 1.3.2 - E lokollotsoe ka 2026-01-27
* E lokisitswe: Widget ya Cap e sa hlaheng ho diforomo tsa checkout tse sebedisang Elementor kapa page builders tse ding
* E lokisitswe: Custom element ya cap-widget e tloswa ke sanitization ya wp_kses()
* E ntlafaditswe: Sebedisa dikahare tse callable bakeng sa sebaka sa captcha sa checkout ho feta HTML filtering
* E ntlafaditswe: JavaScript e nolofaditswe ka fallback bakeng sa maemo a mathoko

Mofuta: 1.3.1 - E lokollotsoe ka 2026-01-26
* E lokisitswe: Mokgwa o sa bonahaleng wa Cap Captcha o sa rarolle ka boona ho diforomo tsa checkout tsa Ultimate Multisite tse fetohang
* E ntlafaditswe: Script ya Cap checkout jwale e sebedisa MutationObserver ho lemoha widgets tse laetsweng ka mokgwa o fetohang
* E ntlafaditswe: Ho kenyeleditswe ho tshwara konopo ya checkout ho emela token pele ho romelwa

Mofuta: 1.3.0 - E lokollotsoe ka 2026-01-27
* E ncha: Kopanyo ea WooCommerce Blocks checkout le ho kenella ho fetch ha Store API
* E ncha: Tšehetso ea captcha e sa bonahaleng bakeng sa WooCommerce checkout (hCaptcha e sa bonahaleng, reCAPTCHA v2 e sa bonahaleng, v3)
* E ncha: Leqephe le ikemetseng la litlhophiso bakeng sa tšebeliso ntle le Ultimate Multisite
* E ncha: Jetpack Autoloader bakeng sa thibelo ea likhohlano tsa litšetleho
* E lokisitsoe: hCaptcha e sa hlahisoe ho checkout e matla ea Ultimate Multisite (litaba tse jariloeng ka AJAX)
* E lokisitsoe: Captcha e sa khatholloe/setsoe bocha ha liphoso tsa netefatso ea foromo li hlaha
* E lokisitsoe: hCaptcha e sa hlahe leqepheng la WooCommerce checkout
* E lokisitsoe: Phoso ea sehlopha sa reCAPTCHA se sa fumanoeng (ho kentsoe laeborari ea google/recaptcha PHP)
* E ntlafalitsoe: Ho lemoha liphoso ka WordPress hooks, MutationObserver, le ho kenella ha AJAX
* E ntlafalitsoe: Litlhaloso tsa litlhophiso joale li kenyelletsa li-URL tsa dashboard bakeng sa linotlolo tsa API

Mofuta: 1.2.2 - E lokollotsoe ka 2026-01-24
* E lokisitsoe: Captcha e sa bontšoe ho Ultimate Multisite Login Form Element (lebitso la sefefo sa foromo le sa tšoaneng)
* E lokisitsoe: HTML ea Cap widget e tlosoa ke tlhoekiso ea wp_kses()
* E lokisitsoe: Likhetho tsa JavaScript li sa fumane liforomo tse nang le li-slash ho li-ID tsa element
* E kentsoe: Filter hook `wu_kses_allowed_html` bakeng sa classaddons ho atolosa li-tag tsa HTML tse lumelletsoeng
* E tlositsoe: Lifaele tsa JavaScript tsa khoutu e shoeleng li nkeloe sebaka ke lingoloa tse khethehileng tsa mofani

Mofuta: 1.2.1 - E lokollotsoe ka 2026-01-23

* E lokisitsoe: Netefatso ea token ea Cap Captcha e hloleha libakeng tsa multisite (joale e sebelisa transients tsa marangrang ka bophara)
* E lokisitsoe: Captcha joale e hlahisoa ka botsitso bakeng sa basebelisi bohle ho sa tsotellehe boemo ba ho kena
* E lokisitsoe: Ho se tšoane pakeng tsa ho hlahisoa ha captcha le netefatso ho bakileng ho hloleha ha checkout

Mofuta: 1.2.0 - E lokollotsoe ka 2026-01-21

* E ncha: Cap Captcha - captcha ea proof-of-work e ikamohetseng, e nolofalitsoeng ka kamehla ha e kentsoe tšebetsong
* E ncha: Tšireletso e se nang tlhophiso - kenya addon tšebetsong 'me u sirelelitsoe hang-hang
* E ncha: Moralo oa mofani oa captcha oa polymorphic bakeng sa katoloso e bonolo
* E ncha: Tšireletso ea WooCommerce Store API checkout khahlanong le litlhaselo tsa ho leka likarete
* E ncha: Dashboard ea ho sala lipalo-palo morao e bontšang liphephetso, linetefatso, le litlhaselo tse thibetsoeng
* E ncha: Litlhophiso tsa pele tsa boemo ba tšireletso (Potlakile, Mahareng, Boholo) bakeng sa bothata ba Cap Captcha
* E ncha: Lihlopha tsa motheo tse akaretsang bakeng sa bafani ba reCAPTCHA le hCaptcha
* E ntlafalitsoe: Codebase e hlophisitsoe bocha ka lihlopha tsa bafani tse modular
* E ntlafalitsoe: Karohano e betere ea boikarabelo ka sehlopha se inehetseng sa mookameli
* Fixed: Security improvements for $_SERVER variable sanitization
* E lokisitsoe: Tlhophiso ea teko ea PHPUnit bakeng sa litloaelo tsa mabitso tsa WordPress

Mofuta: 1.0.1 - E lokollotsoe ka 2025-09-28

* Reha prefix bocha hore e be ultimate-multisite; ntlafatsa text domain; phahamisa mofuta.
