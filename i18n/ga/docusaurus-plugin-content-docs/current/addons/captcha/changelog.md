---
title: Loga Athruithe Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Loga Athruithe Captcha

Leagan: 1.5.0 - Eisithe ar 2026-05-22
* Nua: Teorannóir ráta le stop crua — comhaireann sé gach GET agus POST ar dhromchlaí atá cosanta le captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) agus freagraíonn sé le HTTP 429, ceanntásc `Retry-After`, agus codladh tarpit randamaithe (1–5s, le huasteorainn chrua 15s).
* Nua: Socruithe `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` chun fuinneog an tarpit a thiúnadh.
* Nua: Scagaire `wu_cap_rate_limit_whitelist_ip` chun raonta IP iontaofa a dhíolmhú.
* Nua: Gníomh `wu_cap_rate_limit_will_block` a lasann díreach sula seoltar an freagra stop crua.
* Nua: Brath IP cliaint atá frithsheasmhach in aghaidh bréagaithe. Cuireann `Captcha_Core::get_client_ip()` (foinse na fírinne d’eochracha buicéid teorann ráta, captcha siteverify `remoteip`, agus hais IP staitisticí) samhail dhian iontaoibhe i bhfeidhm anois: is é REMOTE_ADDR an bonnlíne, ní thugtar aitheantas do `CF-Connecting-IP` ach amháin nuair atá an piara láithreach laistigh de raon IP Cloudflare reatha, agus ní thugtar aitheantas do `X-Forwarded-For` ach amháin nuair atá an piara láithreach sa liosta seachfhreastalaithe iontaofa atá cumraithe ag an riarthóir, le siúl ó dheis go clé a scipeálann léimeanna iontaofa/CF sula socraítear ar IP an chuairteora.
* Nua: Socrú `cap_trust_cloudflare_headers` (réamhshocrú OFF) — roghnaigh muinín `CF-Connecting-IP` nuair atá tú taobh thiar de Cloudflare. Seolann an plugin pictiúr CIDR Cloudflare cuachta agus athnuachanann sé é go seachtainiúil trí wp-cron le cúl taca cuachta má theipeann ar an athnuachan.
* Nua: Socrú `cap_trusted_proxies` — réimse téacs de CIDRanna nó IPanna lom (ceann amháin in aghaidh na líne, ceadaítear nótaí tráchta `#`) a liostaíonn do seachfhreastalaithe tosaigh / cothromóirí ualaigh féin. Gan é seo, déantar neamhaird de `X-Forwarded-For` fiú nuair atá an teorannóir ráta cumasaithe.
* Nua: Uathbhrath ar an gcéad chumasú ar staidiúir Cloudflare / seachfhreastalaí is dócha, le fógra riaracháin aonchliceála "Cuir socruithe braite i bhfeidhm". Ní fhorscríobhann an plugin do luachanna sábháilte riamh; má thugann trácht ina dhiaidh sin le fios nach bhfuil do chumraíocht ag teacht leis an réaltacht a thuilleadh (m.sh. d’athraigh Cloudflare raonta CIDR agus tá CIDR do seachfhreastalaí as dáta anois), taispeánann fógra neamhdhiúltaithe neamhréire an nuashonrú molta.
* Ceartaithe: Ní dhéanann mód dofheicthe `cap_security_level` a íosghrádú go ciúin go FAST a thuilleadh — tugtar ómós don leibhéal atá cumraithe ag an riarthóir. Tá scagaire nua `wu_cap_server_security_level` ar fáil do shuíomhanna a dteastaíonn loighic shaincheaptha uathu.
* Ceartaithe: Méadaíonn an comhaireamh staitisticí `rate_limits_triggered` anois ar gach bloc, ní hamháin ar an gcosán cúltaca iar-ratha annamh.
* Ceartaithe: Is é `Captcha_Core::get_client_ip()` foinse aonair na fírinne anois le haghaidh sannadh IP cuairteora ar fud an teorannóra ráta, soláthraithe captcha (reCAPTCHA + hCaptcha `siteverify`), agus staitisticí — ag dúnadh veicteora bréagaithe ina mbeadh iarratais dhíreacha chuig an mbunfhreastalaí a raibh ceanntásc brionnaithe `CF-Connecting-IP` á iompar acu buicéadaithe de réir an IP bhrionnaithe in ionad an phiara fhíor.
* Ceartaithe: Lasann geata teorann ráta checkout clasaiceach WooCommerce anois ar `template_redirect` (tosaíocht 1) in ionad `woocommerce_before_checkout_form`. Ní lasann an hook ar leibhéal na foirme riamh nuair atá an cart folamh, mar sin bhí trácht tuilte nach gcuireann táirge leis riamh ag seachaint an teorannóra go hiomlán.
* Ceartaithe: Lasann geata teorann ráta pay-for-order WooCommerce anois ar `template_redirect` in ionad `woocommerce_before_pay_action`. Ní lasann an dara ceann ach tar éis do `wp_verify_nonce('woocommerce-pay')` éirí leis, rud a chiallaíonn nár spreag ionsaitheoirí neamhúdaraithe (an tsamhail bhagartha iarbhír) an teorannóir riamh.
* Ceartaithe: Lasann geata teorann ráta checkout WooCommerce Store API (bloic) anois ar `rest_pre_dispatch` in ionad `woocommerce_store_api_checkout_update_order_from_request`. Ní lasann an dara ceann ach tar éis do Store API an cart agus réimsí billeála a bhailíochtú, mar sin fuair róbónna neamhúdaraithe 400 ón mbailíochtóir agus níor tharraing siad an teorannóir riamh.
* Ceartaithe: Lasann geata teorann ráta inline-login Ultimate Multisite anois ar thosaíocht 1 `wu_ajax_nopriv_wu_inline_login` (agus an scáthán logáilte isteach) in ionad `wu_before_inline_login`. Ní lasann an dara ceann ach tar éis do `check_ajax_referer('wu_checkout')` éirí leis, mar sin fuair róbónna neamhúdaraithe gan nonce bailí wu_checkout 403 agus níor tharraing siad an teorannóir riamh.
* Ceartaithe: Cuireann `Rate_Limiter::enforce()` garda aonuaire in aghaidh an iarratais i bhfeidhm anois, eochraithe ag `surface|ip`, mar sin ní leathnaíonn hooks in aghaidh srutha a lasann faoi dhó in aghaidh an rindreála (go háirithe `wu_setup_checkout` in Ultimate Multisite) tairseach éifeachtach na teorann ráta a thuilleadh.
* Ceartaithe: Ní cheadaíonn geataí dromchla teorann ráta do `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) a thuilleadh. Tugann an scagaire sin le fios go bhfuil "captcha láimhseáilte cheana ag dromchla eile" agus tá sé neamhspleách ar chosaint i gcoinne tuilte — bhí comhtháthú WooCommerce á hookáil chun captcha logáil isteach WordPress a scipeáil nuair a bhí nonce Woo i láthair, rud a shil isteach sa chomhaireamh ráta agus a lig do POSTanna Woo an teorannóir a sheachaint. Is é an scagaire sainiúil don teorainn ráta `wu_cap_rate_limit_whitelist_ip` an t-aon seachbhóthar a chuirtear i bhfeidhm anois.

Leagan: 1.3.2 - Eisithe ar 2026-01-27
* Ceartaithe: Giuirléid Cap gan rindreáil ar fhoirmeacha checkout a úsáideann Elementor nó tógálaithe leathanach eile
* Ceartaithe: Eilimint shaincheaptha cap-widget á baint ag sláintíocht wp_kses()
* Feabhsaithe: Úsáid ábhar inghlaoite don réimse captcha checkout chun scagadh HTML a sheachbhóthar
* Feabhsaithe: JavaScript simplithe le cúl taca do chásanna imeallacha

Leagan: 1.3.1 - Eisithe ar 2026-01-26
* Ceartaithe: Mód dofheicthe Cap Captcha gan uathréiteach ar fhoirmeacha dinimiciúla checkout Ultimate Multisite
* Feabhsaithe: Úsáideann script checkout Cap MutationObserver anois chun giuirléidí luchtaithe go dinimiciúil a bhrath
* Feabhsaithe: Cuireadh idircheapadh cnaipe checkout leis chun fanacht le token roimh chur isteach

Leagan: 1.3.0 - Eisithe ar 2026-01-27
* Nua: Comhtháthú seiceáil amach WooCommerce Blocks le hidircheapadh fetch Store API
* Nua: Tacaíocht captcha dofheicthe do sheiceáil amach WooCommerce (hCaptcha dofheicthe, reCAPTCHA v2 dofheicthe, v3)
* Nua: Leathanach socruithe neamhspleách le húsáid gan Ultimate Multisite
* Nua: Jetpack Autoloader chun coinbhleachtaí spleáchais a chosc
* Ceartaithe: hCaptcha gan rindreáil ar sheiceáil amach dinimiciúil Ultimate Multisite (ábhar luchtaithe le AJAX)
* Ceartaithe: Captcha gan athnuachan/athshocrú nuair a tharlaíonn earráidí bailíochtaithe foirme
* Ceartaithe: hCaptcha gan taispeáint ar leathanach seiceáil amach WooCommerce
* Ceartaithe: Earráid nár aimsíodh aicme reCAPTCHA (cuireadh leabharlann PHP google/recaptcha leis)
* Feabhsaithe: Brath earráidí trí WordPress hooks, MutationObserver, agus idircheapadh AJAX
* Feabhsaithe: Tá URLanna Dashboard d’eochracha API san áireamh anois i gcur síos na socruithe

Leagan: 1.2.2 - Eisithe ar 2026-01-24
* Ceartaithe: Captcha gan taispeáint ar Ultimate Multisite Login Form Element (mímheaitseáil ainm scagaire foirme)
* Ceartaithe: HTML an ghiuirléid Cap á bhaint ag sláintíocht wp_kses()
* Ceartaithe: Roghnóirí JavaScript gan foirmeacha a aimsiú le slaiseanna in IDanna eiliminte
* Curtha leis: Filter hook `wu_kses_allowed_html` do classaddons chun clibeanna HTML ceadaithe a leathnú
* Bainte: Comhaid JavaScript marbhchóid curtha in ionad ag scripteanna sainiúla don soláthraí

Leagan: 1.2.1 - Eisithe ar 2026-01-23

* Ceartaithe: Bailíochtú token Cap Captcha ag teip i dtimpeallachtaí multisite (úsáideann sé transients ar fud an líonra anois)
* Ceartaithe: Rindreálann Captcha go comhsheasmhach anois do gach úsáideoir beag beann ar stádas logála isteach
* Ceartaithe: Mímheaitseáil idir rindreáil agus bailíochtú captcha a bhí ina cúis le teipeanna seiceáil amach

Leagan: 1.2.0 - Eisithe ar 2026-01-21

* Nua: Cap Captcha - captcha proof-of-work féinóstáilte, cumasaithe de réir réamhshocraithe ar ghníomhachtú
* Nua: Cosaint gan chumraíocht - gníomhachtaigh an addon agus tá tú cosanta láithreach
* Nua: Ailtireacht sholáthraí captcha ilmhoirfeach le haghaidh in-leathnaitheacht éasca
* Nua: Cosaint seiceáil amach WooCommerce Store API ar ionsaithe tástála cártaí
* Nua: Dashboard rianaithe staitisticí a thaispeánann dúshláin, fíoruithe, agus ionsaithe blocáilte
* Nua: Réamhshocruithe leibhéil slándála (Tapa, Meánach, Uasmhéid) do dheacracht Cap Captcha
* Nua: Bunaicmí teibí do sholáthraithe reCAPTCHA agus hCaptcha
* Feabhsaithe: Athstruchtúraíodh an bunachar cóid ina aicmí soláthraí modúlacha
* Feabhsaithe: Scaradh freagrachtaí níos fearr le haicme bhainisteora thiomnaithe
* Fixed: Security improvements for $_SERVER variable sanitization
* Ceartaithe: Cumraíocht tástála PHPUnit do choinbhinsiúin ainmniúcháin WordPress

Leagan: 1.0.1 - Eisithe ar 2025-09-28

* Athainmnigh réimír go ultimate-multisite; nuashonraigh text domain; ardú leagain.
