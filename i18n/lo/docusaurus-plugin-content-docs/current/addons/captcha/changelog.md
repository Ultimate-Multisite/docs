---
title: ບັນທຶກການປ່ຽນແປງ Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# ບັນທຶກການປ່ຽນແປງ Captcha {#captcha-changelog}

ເວີຊັນ: 1.5.0 - ປ່ອຍໃຊ້ໃນ 2026-05-22
* ໃໝ່: ຕົວຈຳກັດອັດຕາແບບຢຸດເດັດຂາດ — ນັບທຸກ GET ແລະ POST ໃນພື້ນທີ່ທີ່ປ້ອງກັນດ້ວຍ captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ແລະຕອບກັບດ້ວຍ HTTP 429, `Retry-After` header, ແລະການໜ່ວງ tarpit ແບບສຸ່ມ (1–5 ວິນາທີ, ຈຳກັດສູງສຸດເດັດຂາດທີ່ 15 ວິນາທີ).
* ໃໝ່: ການຕັ້ງຄ່າ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ເພື່ອປັບຊ່ວງເວລາ tarpit.
* ໃໝ່: filter `wu_cap_rate_limit_whitelist_ip` ເພື່ອຍົກເວັ້ນຊ່ວງ IP ທີ່ໄວ້ວາງໃຈ.
* ໃໝ່: action `wu_cap_rate_limit_will_block` ທີ່ຈະເຮັດວຽກທັນທີກ່ອນສົ່ງຄຳຕອບແບບຢຸດເດັດຂາດ.
* ໃໝ່: ການກວດຈັບ client-IP ທີ່ຕ້ານການປອມແປງ. `Captcha_Core::get_client_ip()` (ແຫຼ່ງຄວາມຈິງສຳລັບ rate-limit bucket keys, captcha siteverify `remoteip`, ແລະ hash IP ຂອງສະຖິຕິ) ຕອນນີ້ບັງຄັບໃຊ້ແບບຈຳລອງຄວາມໄວ້ວາງໃຈທີ່ເຂັ້ມງວດ: REMOTE_ADDR ເປັນພື້ນຖານ, `CF-Connecting-IP` ຈະຖືກເຄົາລົບສະເພາະເມື່ອ peer ທັນທີຢູ່ໃນຊ່ວງ IP Cloudflare ປັດຈຸບັນ, ແລະ `X-Forwarded-For` ຈະຖືກເຄົາລົບສະເພາະເມື່ອ peer ທັນທີຢູ່ໃນລາຍຊື່ trusted-proxy ທີ່ admin ກຳນົດ, ພ້ອມການໄລ່ຈາກຂວາໄປຊ້າຍທີ່ຂ້າມ trusted/CF hops ກ່ອນຈະຕົກລົງເລືອກ IP ຂອງຜູ້ເຂົ້າຊົມ.
* ໃໝ່: ການຕັ້ງຄ່າ `cap_trust_cloudflare_headers` (ຄ່າເລີ່ມຕົ້ນ OFF) — ເລືອກເຂົ້າໃຊ້ຄວາມໄວ້ວາງໃຈ `CF-Connecting-IP` ເມື່ອຢູ່ຫຼັງ Cloudflare. plugin ມາພ້ອມ snapshot Cloudflare CIDR ທີ່ລວມມາ ແລະ refresh ມັນທຸກອາທິດຜ່ານ wp-cron ພ້ອມ fallback ທີ່ລວມມາຖ້າ refresh ລົ້ມເຫຼວ.
* ໃໝ່: ການຕັ້ງຄ່າ `cap_trusted_proxies` — textarea ຂອງ CIDR ຫຼື IP ລ້ວນ (ໜຶ່ງລາຍການຕໍ່ແຖວ, ອະນຸຍາດຄຳເຫັນ `#`) ທີ່ລາຍຊື່ proxy / load-balancer ແນວໜ້າຂອງທ່ານເອງ. ຖ້າບໍ່ມີສິ່ງນີ້, `X-Forwarded-For` ຈະຖືກເມີນເສຍແມ່ນແຕ່ເມື່ອເປີດໃຊ້ຕົວຈຳກັດອັດຕາແລ້ວ.
* ໃໝ່: ການກວດຈັບອັດຕະໂນມັດໃນຄັ້ງທຳອິດທີ່ເປີດໃຊ້ ສຳລັບສະພາບ Cloudflare / proxy ທີ່ເປັນໄປໄດ້ ພ້ອມແຈ້ງເຕືອນ admin "ນຳໃຊ້ການຕັ້ງຄ່າທີ່ກວດພົບ" ແບບຄລິກດຽວ. plugin ບໍ່ເຄີຍຂຽນທັບຄ່າທີ່ທ່ານບັນທຶກໄວ້; ຖ້າ traffic ຕໍ່ມາຊີ້ວ່າ config ຂອງທ່ານບໍ່ກົງກັບຄວາມຈິງອີກຕໍ່ໄປ (ເຊັ່ນ Cloudflare ປ່ຽນຊ່ວງ CIDR ແລະ proxy CIDR ຂອງທ່ານຕອນນີ້ເກົ່າແລ້ວ), ແຈ້ງເຕືອນຄວາມບໍ່ກົງກັນທີ່ປິດບໍ່ໄດ້ຈະສະແດງການອັບເດດທີ່ແນະນຳ.
* ແກ້ໄຂ: ໂໝດ Invisible ບໍ່ downgrade `cap_security_level` ເປັນ FAST ແບບງຽບໆອີກຕໍ່ໄປ — ລະດັບທີ່ admin ກຳນົດຖືກເຄົາລົບ. filter ໃໝ່ `wu_cap_server_security_level` ມີໃຫ້ສຳລັບ site ທີ່ຕ້ອງການຕັກກະສະເພາະ.
* ແກ້ໄຂ: ຕົວນັບສະຖິຕິ `rate_limits_triggered` ຕອນນີ້ເພີ່ມຂຶ້ນໃນທຸກການບລັອກ, ບໍ່ແມ່ນສະເພາະໃນເສັ້ນທາງ backstop ຫຼັງສຳເລັດທີ່ພົບໄດ້ຍາກ.
* ແກ້ໄຂ: `Captcha_Core::get_client_ip()` ຕອນນີ້ເປັນແຫຼ່ງຄວາມຈິງດຽວສຳລັບການລະບຸ IP ຜູ້ເຂົ້າຊົມທົ່ວຕົວຈຳກັດອັດຕາ, captcha providers (reCAPTCHA + hCaptcha `siteverify`), ແລະສະຖິຕິ — ປິດ vector ການປອມແປງທີ່ request ໄປຫາ origin-server ໂດຍກົງທີ່ພົກ header `CF-Connecting-IP` ປອມຈະຖືກ bucket ຕາມ IP ທີ່ປອມ ແທນທີ່ຈະເປັນ peer ຈິງ.
* ແກ້ໄຂ: ປະຕູ rate-limit ຂອງ WooCommerce classic checkout ຕອນນີ້ເຮັດວຽກໃນ `template_redirect` (priority 1) ແທນ `woocommerce_before_checkout_form`. hook ລະດັບ form ບໍ່ເຄີຍເຮັດວຽກເມື່ອກະຕ່າຫວ່າງ, ດັ່ງນັ້ນ flood traffic ທີ່ບໍ່ເຄີຍເພີ່ມ product ຈຶ່ງຂ້າມຕົວຈຳກັດໄດ້ທັງໝົດ.
* ແກ້ໄຂ: ປະຕູ rate-limit ຂອງ WooCommerce pay-for-order ຕອນນີ້ເຮັດວຽກໃນ `template_redirect` ແທນ `woocommerce_before_pay_action`. ອັນຫຼັງເຮັດວຽກສະເພາະຫຼັງຈາກ `wp_verify_nonce('woocommerce-pay')` ສຳເລັດ, ຊຶ່ງໝາຍຄວາມວ່າ attacker ທີ່ບໍ່ໄດ້ auth (ແບບຈຳລອງໄພຄຸກຄາມຈິງ) ບໍ່ເຄີຍ trigger ຕົວຈຳກັດ.
* ແກ້ໄຂ: ປະຕູ rate-limit ຂອງ WooCommerce Store API (blocks) checkout ຕອນນີ້ເຮັດວຽກໃນ `rest_pre_dispatch` ແທນ `woocommerce_store_api_checkout_update_order_from_request`. ອັນຫຼັງເຮັດວຽກສະເພາະຫຼັງຈາກ Store API ກວດຢືນຢັນກະຕ່າ ແລະ field ໃບບິນແລ້ວ, ດັ່ງນັ້ນ bot ທີ່ບໍ່ໄດ້ auth ໄດ້ 400 ຈາກ validator ແລະບໍ່ເຄີຍສະດຸດຕົວຈຳກັດ.
* ແກ້ໄຂ: ປະຕູ rate-limit ຂອງ Ultimate Multisite inline-login ຕອນນີ້ເຮັດວຽກໃນ `wu_ajax_nopriv_wu_inline_login` priority 1 (ແລະ mirror ຂອງຜູ້ທີ່ login ແລ້ວ) ແທນ `wu_before_inline_login`. ອັນຫຼັງເຮັດວຽກສະເພາະຫຼັງຈາກ `check_ajax_referer('wu_checkout')` ສຳເລັດ, ດັ່ງນັ້ນ bot ທີ່ບໍ່ໄດ້ auth ແລະບໍ່ມີ wu_checkout nonce ທີ່ຖືກຕ້ອງໄດ້ 403 ແລະບໍ່ເຄີຍສະດຸດຕົວຈຳກັດ.
* ແກ້ໄຂ: `Rate_Limiter::enforce()` ຕອນນີ້ນຳ guard ແບບໜຶ່ງຄັ້ງຕໍ່ request ທີ່ keyed ດ້ວຍ `surface|ip` ມາໃຊ້, ດັ່ງນັ້ນ hook upstream ທີ່ເຮັດວຽກສອງຄັ້ງຕໍ່ການ render (ໂດຍສະເພາະ `wu_setup_checkout` ໃນ Ultimate Multisite) ບໍ່ຫຼຸດເກນ rate-limit ທີ່ມີຜົນໃຫ້ເຫຼືອເຄິ່ງໜຶ່ງອີກຕໍ່ໄປ.
* ແກ້ໄຂ: ປະຕູພື້ນທີ່ rate-limit ບໍ່ປຶກສາ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ອີກຕໍ່ໄປ. filter ນັ້ນສົ່ງສັນຍານວ່າ "captcha ຖືກຈັດການໂດຍພື້ນທີ່ອື່ນແລ້ວ" ແລະເປັນຄົນລະເລື່ອງກັບການປ້ອງກັນ flood — ການຜະສານ WooCommerce ເຄີຍ hook ມັນເພື່ອຂ້າມ WordPress login captcha ເມື່ອມີ Woo nonce ຢູ່, ຊຶ່ງໄຫຼເຂົ້າການນັບອັດຕາ ແລະປ່ອຍໃຫ້ Woo POSTs ຫຼີກຕົວຈຳກັດໄດ້. filter ສະເພາະ rate-limit `wu_cap_rate_limit_whitelist_ip` ເປັນ bypass ດຽວທີ່ນຳໃຊ້ໃນຕອນນີ້.

ເວີຊັນ: 1.3.2 - ປ່ອຍໃຊ້ໃນ 2026-01-27
* ແກ້ໄຂ: Cap widget ບໍ່ render ໃນ checkout forms ທີ່ໃຊ້ Elementor ຫຼື page builder ອື່ນໆ
* ແກ້ໄຂ: custom element cap-widget ຖືກລຶບອອກໂດຍ sanitization `wp_kses()`
* ປັບປຸງ: ໃຊ້ callable content ສຳລັບ checkout captcha field ເພື່ອຂ້າມການກັ່ນຕອງ HTML
* ປັບປຸງ: ເຮັດໃຫ້ JavaScript ງ່າຍຂຶ້ນພ້ອມ fallback ສຳລັບກໍລະນີຂອບ

ເວີຊັນ: 1.3.1 - ປ່ອຍໃຊ້ໃນ 2026-01-26
* ແກ້ໄຂ: ໂໝດ invisible ຂອງ Cap Captcha ບໍ່ auto-solving ໃນ Ultimate Multisite checkout forms ແບບໄດນາມິກ
* ປັບປຸງ: script checkout ຂອງ Cap ຕອນນີ້ໃຊ້ MutationObserver ເພື່ອກວດຈັບ widget ທີ່ໂຫຼດແບບໄດນາມິກ
* ປັບປຸງ: ເພີ່ມການສະກັດປຸ່ມ checkout ເພື່ອລໍຖ້າ token ກ່ອນສົ່ງ

Version: 1.3.0 - ປ່ອຍອອກໃນ 2026-01-27
* ໃໝ່: ການຜະສານການຊຳລະເງິນ WooCommerce Blocks ກັບການສະກັດການດຶງຂໍ້ມູນ Store API
* ໃໝ່: ຮອງຮັບ captcha ແບບເບິ່ງບໍ່ເຫັນສຳລັບການຊຳລະເງິນ WooCommerce (hCaptcha ແບບເບິ່ງບໍ່ເຫັນ, reCAPTCHA v2 ແບບເບິ່ງບໍ່ເຫັນ, v3)
* ໃໝ່: ໜ້າການຕັ້ງຄ່າແບບອິດສະຫຼະ ສຳລັບໃຊ້ໂດຍບໍ່ມີ Ultimate Multisite
* ໃໝ່: Jetpack Autoloader ສຳລັບປ້ອງກັນການຂັດແຍ້ງຂອງການພຶ່ງພາ
* ແກ້ໄຂແລ້ວ: hCaptcha ບໍ່ສະແດງໃນການຊຳລະເງິນ Ultimate Multisite ແບບໄດນາມິກ (ເນື້ອຫາທີ່ໂຫຼດດ້ວຍ AJAX)
* ແກ້ໄຂແລ້ວ: Captcha ບໍ່ຣີເຟຣຊ/ຣີເຊັດ ເມື່ອເກີດຂໍ້ຜິດພາດການກວດສອບຟອມ
* ແກ້ໄຂແລ້ວ: hCaptcha ບໍ່ສະແດງໃນໜ້າການຊຳລະເງິນ WooCommerce
* ແກ້ໄຂແລ້ວ: ຂໍ້ຜິດພາດບໍ່ພົບຄລາສ reCAPTCHA (ເພີ່ມໄລບຣາຣີ PHP google/recaptcha)
* ປັບປຸງ: ການກວດຈັບຂໍ້ຜິດພາດຜ່ານ WordPress hooks, MutationObserver, ແລະການສະກັດ AJAX
* ປັບປຸງ: ຄຳອະທິບາຍການຕັ້ງຄ່າຕອນນີ້ມີ URL ຂອງ Dashboard ສຳລັບ API keys

Version: 1.2.2 - ປ່ອຍອອກໃນ 2026-01-24
* ແກ້ໄຂແລ້ວ: Captcha ບໍ່ສະແດງໃນອົງປະກອບຟອມລັອກອິນ Ultimate Multisite (ຊື່ຕົວກັ່ນຕອງຟອມບໍ່ກົງກັນ)
* ແກ້ໄຂແລ້ວ: HTML ຂອງວິດເຈັດ Cap ຖືກລຶບອອກໂດຍການກຳຈັດຄວາມສະອາດ wp_kses()
* ແກ້ໄຂແລ້ວ: JavaScript selectors ບໍ່ພົບຟອມທີ່ມີຂີດທັບໃນ ID ຂອງອົງປະກອບ
* ເພີ່ມແລ້ວ: Filter hook `wu_kses_allowed_html` ສຳລັບ classaddons ເພື່ອຂະຫຍາຍແທັກ HTML ທີ່ອະນຸຍາດ
* ລຶບອອກແລ້ວ: ໄຟລ໌ JavaScript ໂຄດທີ່ບໍ່ໃຊ້ ຖືກແທນດ້ວຍສະຄຣິບສະເພາະຜູ້ໃຫ້ບໍລິການ

Version: 1.2.1 - ປ່ອຍອອກໃນ 2026-01-23

* ແກ້ໄຂແລ້ວ: ການກວດສອບໂທເຄັນ Cap Captcha ລົ້ມເຫຼວໃນສະພາບແວດລ້ອມ multisite (ຕອນນີ້ໃຊ້ transients ທົ່ວເຄືອຂ່າຍ)
* ແກ້ໄຂແລ້ວ: Captcha ຕອນນີ້ສະແດງຢ່າງສະໝ່ຳສະເໝີສຳລັບຜູ້ໃຊ້ທຸກຄົນ ໂດຍບໍ່ຄຳນຶງເຖິງສະຖານະລັອກອິນ
* ແກ້ໄຂແລ້ວ: ຄວາມບໍ່ກົງກັນລະຫວ່າງການສະແດງ captcha ແລະການກວດສອບ ທີ່ເຮັດໃຫ້ການຊຳລະເງິນລົ້ມເຫຼວ

Version: 1.2.0 - ປ່ອຍອອກໃນ 2026-01-21

* ໃໝ່: Cap Captcha - captcha ພິສູດການເຮັດວຽກແບບໂຮສເອງ, ເປີດໃຊ້ໂດຍຄ່າເລີ່ມຕົ້ນເມື່ອເປີດໃຊ້
* ໃໝ່: ການປົກປ້ອງແບບບໍ່ຕ້ອງຕັ້ງຄ່າ - ເປີດໃຊ້ addon ແລ້ວທ່ານຈະຖືກປົກປ້ອງທັນທີ
* ໃໝ່: ສະຖາປັດຕະຍະກຳຜູ້ໃຫ້ບໍລິການ captcha ແບບ polymorphic ສຳລັບຂະຫຍາຍໄດ້ງ່າຍ
* ໃໝ່: ການປົກປ້ອງການຊຳລະເງິນ WooCommerce Store API ຈາກການໂຈມຕີທົດສອບບັດ
* ໃໝ່: Dashboard ຕິດຕາມສະຖິຕິ ທີ່ສະແດງການທ້າທາຍ, ການຢືນຢັນ, ແລະການໂຈມຕີທີ່ຖືກບລັອກ
* ໃໝ່: ຊຸດຕັ້ງຄ່າລະດັບຄວາມປອດໄພ (Fast, Medium, Max) ສຳລັບຄວາມຍາກຂອງ Cap Captcha
* ໃໝ່: ຄລາສຖານນາມທຳມະສຳລັບຜູ້ໃຫ້ບໍລິການ reCAPTCHA ແລະ hCaptcha
* ປັບປຸງ: ປັບໂຄງສ້າງຖານໂຄດໃໝ່ເປັນຄລາສຜູ້ໃຫ້ບໍລິການແບບໂມດູລາ
* ປັບປຸງ: ແຍກໜ້າທີ່ຮັບຜິດຊອບໃຫ້ດີຂຶ້ນດ້ວຍຄລາສຜູ້ຈັດການໂດຍສະເພາະ
* Fixed: Security improvements for $_SERVER variable sanitization
* ແກ້ໄຂແລ້ວ: ການຕັ້ງຄ່າການທົດສອບ PHPUnit ສຳລັບຂໍ້ກຳນົດການຕັ້ງຊື່ຂອງ WordPress

Version: 1.0.1 - ປ່ອຍອອກໃນ 2025-09-28

* ປ່ຽນຊື່ prefix ເປັນ ultimate-multisite; ອັບເດດ text domain; ເພີ່ມເລກເວີຊັນ.
