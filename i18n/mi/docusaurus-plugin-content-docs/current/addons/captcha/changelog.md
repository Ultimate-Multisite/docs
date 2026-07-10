---
title: Rangitaki Panonitanga Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Rangitaki Panoni Captcha {#captcha-changelog}

Putanga: 1.5.0 - I tukua i te 2026-05-22
* Hou: Kaitāmi auau aukati-mārō — ka tatau i ia GET me POST katoa i runga i ngā mata kua tiakina e te captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login), ā, ka whakautu ki te HTTP 429, tētahi `Retry-After` header, me tētahi whakaroanga tarpit matapōkeretia (1–5 hēkona, kua herea mārō ki te 15 hēkona).
* Hou: Ngā tautuhinga `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` hei whakarite i te matapihi tarpit.
* Hou: Tātari `wu_cap_rate_limit_whitelist_ip` hei whakawātea i ngā awhe IP whirinaki.
* Hou: Hohenga `wu_cap_rate_limit_will_block` ka whakakā wawe tonu i mua i te tukunga o te whakautu aukati-mārō.
* Hou: Rapunga IP-kiritaki ātete-whakapōhēhē. Ko `Captcha_Core::get_client_ip()` (te pūtake pono mō ngā kī pākete rāhui-auau, captcha siteverify `remoteip`, me ngā hash IP tatauranga) ināianei ka whakaū i tētahi tauira whirinaki mārō: ko REMOTE_ADDR te papa, ka whakahonoretia `CF-Connecting-IP` anake ina kei roto te hoa tata tonu i tētahi awhe IP Cloudflare onāianei, ā, ka whakahonoretia `X-Forwarded-For` anake ina kei te rārangi takawaenga-whirinaki kua whirihorahia e te kaiwhakahaere te hoa tata tonu, me tētahi hīkoi matau-ki-mauī ka peke i ngā pekanga whirinaki/CF i mua i te ū ki te IP manuhiri.
* Hou: Tautuhinga `cap_trust_cloudflare_headers` (taunoa WETO) — kōwhiri kia whirinaki ki `CF-Connecting-IP` ina kei muri i Cloudflare. Ka tukuna mai e te plugin tētahi whakaahua CIDR Cloudflare kua paiherea, ā, ka whakahouhia ia wiki mā te wp-cron me te hokinga paiherea mēnā ka rahua te whakahou.
* Hou: Tautuhinga `cap_trusted_proxies` — he textarea o ngā CIDR, IP tahanga rānei (kotahi ia rārangi, ka whakaaetia ngā kōrero `#`) e whakarārangi ana i ō ake takawaenga rārangi-mua / kaitaurite-uta. Ki te kore tēnei, ka waihohia `X-Forwarded-For`, ahakoa kua whakahohea te kaitāmi auau.
* Hou: Rapu-aunoa i te whakahohe tuatahi mō te tūāhua Cloudflare / takawaenga pea, me tētahi pānui kaiwhakahaere "Hoatu ngā tautuhinga kua kitea" pāwhiri-kotahi. Kāore rawa te plugin e tuhirua i ō uara kua tiakina; mēnā ka tohu te waka o muri mai kāore tō whirihoranga e hāngai ana ki te āhuatanga tūturu (hei tauira, kua panoni ngā awhe CIDR Cloudflare, ā, kua tawhito tō CIDR takawaenga ināianei), ka puta tētahi pānui hē-kore e taea te whakakore me te whakahou e tūtohutia ana.
* Kua whakatika: Kāore te aratau kāore e kitea e whakaheke puku ana i `cap_security_level` ki FAST — ka whakahonoretia te taumata kua whirihorahia e te kaiwhakahaere. Kei te wātea tētahi tātari hou `wu_cap_server_security_level` mō ngā pae e hiahia ana ki te arorau motuhake.
* Kua whakatika: Ka whakapiki ināianei te kautetanga tatauranga `rate_limits_triggered` i ia aukatinga, kaua i te ara backstop onge whai-muri-angitu anake.
* Kua whakatika: Ko `Captcha_Core::get_client_ip()` ināianei te pūtake pono kotahi mō te tautapa IP manuhiri puta noa i te kaitāmi auau, ngā kaiwhakarato captcha (reCAPTCHA + hCaptcha `siteverify`), me ngā tatauranga — e kati ana i tētahi ara whakapōhēhē i reira ngā tono tika ki te tūmau-taketake e kawe ana i tētahi `CF-Connecting-IP` header rūpahu ka pāketehia mā te IP rūpahu, kaua mā te hoa tūturu.
* Kua whakatika: Ka whakakā ināianei te kūaha rāhui-auau checkout tawhito WooCommerce i runga i `template_redirect` (matua 1), kaua i `woocommerce_before_checkout_form`. Kāore te hook taumata-puka e whakakā ina he wātea te kāta, nō reira i hipa katoa te waka waipuke kāore rawa e tāpiri hua i te kaitāmi.
* Kua whakatika: Ka whakakā ināianei te kūaha rāhui-auau pay-for-order WooCommerce i runga i `template_redirect`, kaua i `woocommerce_before_pay_action`. Ka whakakā te mea whakamutunga i muri anake i te angitu o `wp_verify_nonce('woocommerce-pay')`, arā kāore ngā kaiwhakaeke kāore i whakamotuhēhēngia (te tauira whakatuma tūturu) i whakaoho i te kaitāmi.
* Kua whakatika: Ka whakakā ināianei te kūaha rāhui-auau checkout WooCommerce Store API (blocks) i runga i `rest_pre_dispatch`, kaua i `woocommerce_store_api_checkout_update_order_from_request`. Ka whakakā te mea whakamutunga i muri anake i te whakamana a Store API i te kāta me ngā āpure nama, nō reira i whiwhi ngā bot kāore i whakamotuhēhēngia i te 400 mai i te kaiwhakamana, ā, kāore rawa i whakaoho i te kaitāmi.
* Kua whakatika: Ka whakakā ināianei te kūaha rāhui-auau inline-login Ultimate Multisite i runga i `wu_ajax_nopriv_wu_inline_login` matua 1 (me te whakaata kua takiuru) kaua i `wu_before_inline_login`. Ka whakakā te mea whakamutunga i muri anake i te angitu o `check_ajax_referer('wu_checkout')`, nō reira i whiwhi ngā bot kāore i whakamotuhēhēngia, kāore hoki he nonce wu_checkout whaimana, i te 403, ā, kāore rawa i whakaoho i te kaitāmi.
* Kua whakatika: Ka hoatu ināianei e `Rate_Limiter::enforce()` tētahi kaitiaki kotahi-ia-tono kua kīia ki `surface|ip`, nō reira kāore ngā hook whakarunga ka whakakā rua i ia tānga (otirā `wu_setup_checkout` i Ultimate Multisite) e haurua ināianei i te paepae rāhui-auau whaihua.
* Kua whakatika: Kāore ngā kūaha mata rāhui-auau e uiui ināianei ki `Captcha_Core::is_whitelisted()` (tātari `wu_captcha_whitelisted`). E tohu ana taua tātari "kua oti kē te captcha te whakahaere e tētahi atu mata", ā, he motuhake i te ārai-waipuke — i te here te whakakotahitanga WooCommerce i taua mea kia peke i te captcha takiuru WordPress ina he Woo nonce kei reira, ā, ka rere atu tērā ki te tatau auau, ka tuku i ngā Woo POST kia karo i te kaitāmi. Ko te tātari rāhui-auau-motuhake `wu_cap_rate_limit_whitelist_ip` anake te hipanga e pā ana ināianei.

Putanga: 1.3.2 - I tukua i te 2026-01-27
* Kua whakatika: Kāore te widget Cap e tānga ana i runga i ngā puka checkout e whakamahi ana i Elementor, i ētahi atu kaihanga whārangi rānei
* Kua whakatika: Kei te tangohia te huānga ritenga cap-widget e te horoinga wp_kses()
* Kua whakapai ake: Whakamahia he ihirangi callable mō te āpure captcha checkout kia hipa i te tātari HTML
* Kua whakapai ake: Kua whakangāwaritia te JavaScript me te hokinga mō ngā āhuatanga tapa

Putanga: 1.3.1 - I tukua i te 2026-01-26
* Kua whakatika: Kāore te aratau kāore e kitea o Cap Captcha e whakatau-aunoa ana i runga i ngā puka checkout Ultimate Multisite hihiri
* Kua whakapai ake: Ka whakamahi ināianei te hōtuhi checkout Cap i a MutationObserver hei kite i ngā widget kua utaina hihiri
* Kua whakapai ake: Kua tāpirihia te ārai pātene checkout kia tatari ki te token i mua i te tukunga

Putanga: 1.3.0 - I tukuna i te 2026-01-27
* Hou: Te whakaurunga WooCommerce Blocks checkout me te haukoti tiki Store API
* Hou: Tautoko captcha kāore e kitea mō te WooCommerce checkout (hCaptcha kāore e kitea, reCAPTCHA v2 kāore e kitea, v3)
* Hou: Whārangi tautuhinga tū motuhake hei whakamahi me te kore Ultimate Multisite
* Hou: Jetpack Autoloader mō te ārai papā whakawhirinaki
* Kua whakatika: Kāore a hCaptcha e whakaatu ki te Ultimate Multisite checkout hihiko (ihirangi utaina-AJAX)
* Kua whakatika: Kāore te Captcha e whakahou/tautuhi anō ina puta ngā hapa whakamana puka
* Kua whakatika: Kāore a hCaptcha e kitea ki te whārangi WooCommerce checkout
* Kua whakatika: Hapa kāore i kitea te akomanga reCAPTCHA (kua tāpirihia te whare pukapuka google/recaptcha PHP)
* Kua whakapai: Te kitenga hapa mā ngā WordPress hooks, MutationObserver, me te haukoti AJAX
* Kua whakapai: Kei ngā whakaahuatanga tautuhinga ināianei ngā URL papa whakahaere mō ngā API keys

Putanga: 1.2.2 - I tukuna i te 2026-01-24
* Kua whakatika: Kāore te Captcha e whakaatu ki te Huānga Puka Takiuru Ultimate Multisite (kāore i ōrite te ingoa tātari puka)
* Kua whakatika: I tangohia te HTML o te widget Cap e te puretanga wp_kses()
* Kua whakatika: Kāore ngā tīpako JavaScript e kite ana i ngā puka whai rītaha ki ngā ID huānga
* Kua tāpirihia: Filter hook `wu_kses_allowed_html` mō ngā classaddons kia whakawhānui i ngā tūtohu HTML e whakaaetia ana
* Kua tangohia: Kōnae JavaScript waehere mate kua whakakapia e ngā hōtuhi motuhake ki te kaiwhakarato

Putanga: 1.2.1 - I tukuna i te 2026-01-23

* Kua whakatika: I rahua te whakamana token Cap Captcha i ngā taiao multisite (ināianei ka whakamahi i ngā transients whānui-whatunga)
* Kua whakatika: Ka whakaatu ōrite te Captcha ināianei mō ngā kaiwhakamahi katoa ahakoa te tūnga takiuru
* Kua whakatika: Te kore ōrite i waenga i te whakaatu captcha me te whakamana i hua ai ngā rahunga checkout

Putanga: 1.2.0 - I tukuna i te 2026-01-21

* Hou: Cap Captcha - captcha proof-of-work manaaki-whaiaro, kua whakahohe taunoa i te whakahohe
* Hou: Parenga whirihora-kore - whakahohea te addon, ā, kua tiakina tonutia koe
* Hou: Hanganga kaiwhakarato captcha polymorphic mō te whakawhānuitanga māmā
* Hou: Parenga WooCommerce Store API checkout ki ngā whakaeke whakamātau kāri
* Hou: Papa whakahaere aroturuki tatauranga e whakaatu ana i ngā wero, ngā manatoko, me ngā whakaeke kua āraia
* Hou: Ngā tatūkē taumata haumarutanga (Tere, Waenga, Mōrahi) mō te uauatanga Cap Captcha
* Hou: Ngā akomanga pūtake waitara mō ngā kaiwhakarato reCAPTCHA me hCaptcha
* Kua whakapai: Kua whakaritea anō te codebase ki ngā akomanga kaiwhakarato kōwae
* Kua whakapai: He pai ake te wehewehe i ngā haepapa me te akomanga kaiwhakahaere motuhake
* Fixed: Security improvements for $_SERVER variable sanitization
* Kua whakatika: Whirihoranga whakamātautau PHPUnit mō ngā tikanga whakaingoa WordPress

Putanga: 1.0.1 - I tukuna i te 2025-09-28

* Whakaingoa anō i te prefix ki ultimate-multisite; whakahou i te text domain; pikinga putanga.
