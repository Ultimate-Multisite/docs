---
title: Captcha փոփոխությունների մատյան
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha-ի փոփոխությունների մատյան

Տարբերակ՝ 1.5.0 - Թողարկվել է 2026-05-22-ին
* Նոր՝ խիստ արգելափակող արագության սահմանափակիչ — հաշվում է յուրաքանչյուր GET և POST captcha-ով պաշտպանված մակերեսներում (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) և պատասխանում է HTTP 429-ով, `Retry-After` header-ով և պատահականացված tarpit քնի դադարով (1–5 վրկ, խիստ սահմանափակված առավելագույնը 15 վրկ-ով)։
* Նոր՝ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` կարգավորումներ՝ tarpit պատուհանը հարմարեցնելու համար։
* Նոր՝ `wu_cap_rate_limit_whitelist_ip` filter՝ վստահելի IP տիրույթները բացառելու համար։
* Նոր՝ `wu_cap_rate_limit_will_block` action, որը գործարկվում է անմիջապես խիստ արգելափակող պատասխանը ուղարկելուց առաջ։
* Նոր՝ կեղծումից պաշտպանված client-IP հայտնաբերում։ `Captcha_Core::get_client_ip()`-ը (rate-limit bucket բանալիների, captcha siteverify `remoteip`-ի և վիճակագրության IP hash-երի ճշմարտության աղբյուրը) այժմ կիրառում է վստահության խիստ մոդել․ REMOTE_ADDR-ը հիմքն է, `CF-Connecting-IP`-ն ընդունվում է միայն երբ անմիջական peer-ը գտնվում է Cloudflare-ի ընթացիկ IP տիրույթում, իսկ `X-Forwarded-For`-ն ընդունվում է միայն երբ անմիջական peer-ը admin-ի կողմից կարգավորված վստահելի proxy-ների ցանկում է՝ աջից ձախ անցումով, որը բաց է թողնում վստահելի/CF hop-երը նախքան այցելուի IP-ի վրա կանգ առնելը։
* Նոր՝ `cap_trust_cloudflare_headers` կարգավորում (լռելյայն՝ OFF) — միացրեք `CF-Connecting-IP`-ի վստահությունը, երբ Cloudflare-ի հետևում եք։ plugin-ը մատակարարվում է ներկառուցված Cloudflare CIDR snapshot-ով և շաբաթական թարմացնում է այն wp-cron-ի միջոցով՝ ներկառուցված fallback-ով, եթե թարմացումը ձախողվի։
* Նոր՝ `cap_trusted_proxies` կարգավորում — CIDR-ների կամ մերկ IP-ների textarea (մեկը՝ յուրաքանչյուր տողում, `#` մեկնաբանությունները թույլատրված են), որտեղ նշվում են ձեր սեփական առաջնագծի proxy-ները / load-balancer-ները։ Առանց դրա `X-Forwarded-For`-ն անտեսվում է նույնիսկ երբ արագության սահմանափակիչը միացված է։
* Նոր՝ առաջին միացման ժամանակ հավանական Cloudflare / proxy դիրքի ավտոմատ հայտնաբերում՝ մեկ սեղմումով "Կիրառել հայտնաբերված կարգավորումները" admin notice-ով։ plugin-ը երբեք չի վերագրում ձեր պահպանված արժեքները․ եթե հետագա traffic-ը հուշում է, որ ձեր config-ն այլևս չի համապատասխանում իրականությանը (օր.՝ Cloudflare-ը փոխել է CIDR տիրույթները, և ձեր proxy CIDR-ն այժմ հնացած է), չփակվող անհամապատասխանության notice-ը ցուցադրում է առաջարկվող թարմացումը։
* Ուղղված՝ Invisible mode-ն այլևս լուռ չի իջեցնում `cap_security_level`-ը FAST-ի — admin-ի կարգավորված մակարդակը հարգվում է։ Նոր `wu_cap_server_security_level` filter հասանելի է այն կայքերի համար, որոնք ցանկանում են հատուկ տրամաբանություն։
* Ուղղված՝ վիճակագրության `rate_limits_triggered` հաշվիչն այժմ ավելանում է յուրաքանչյուր արգելափակման ժամանակ, ոչ միայն հազվադեպ post-success backstop ուղու վրա։
* Ուղղված՝ `Captcha_Core::get_client_ip()`-ն այժմ այցելուի IP վերագրության ճշմարտության միակ աղբյուրն է արագության սահմանափակիչի, captcha provider-ների (reCAPTCHA + hCaptcha `siteverify`) և վիճակագրության ամբողջ տարածքում՝ փակելով կեղծման վեկտորը, որտեղ origin-server-ին ուղղակի հարցումները, որոնք կրում էին կեղծված `CF-Connecting-IP` header, bucket-վում էին կեղծված IP-ով՝ իրական peer-ի փոխարեն։
* Ուղղված՝ WooCommerce classic checkout rate-limit gate-ն այժմ գործարկվում է `template_redirect`-ի վրա (priority 1)՝ `woocommerce_before_checkout_form`-ի փոխարեն։ Form-level hook-ը երբեք չի գործարկվում, երբ cart-ը դատարկ է, ուստի flood traffic-ը, որը երբեք product չէր ավելացնում, ամբողջությամբ շրջանցում էր սահմանափակիչը։
* Ուղղված՝ WooCommerce pay-for-order rate-limit gate-ն այժմ գործարկվում է `template_redirect`-ի վրա՝ `woocommerce_before_pay_action`-ի փոխարեն։ Վերջինս գործարկվում է միայն այն բանից հետո, երբ `wp_verify_nonce('woocommerce-pay')`-ը հաջողվում է, ինչը նշանակում է, որ unauth հարձակվողները (իրական threat model-ը) երբեք չէին ակտիվացնում սահմանափակիչը։
* Ուղղված՝ WooCommerce Store API (blocks) checkout rate-limit gate-ն այժմ գործարկվում է `rest_pre_dispatch`-ի վրա՝ `woocommerce_store_api_checkout_update_order_from_request`-ի փոխարեն։ Վերջինս գործարկվում է միայն այն բանից հետո, երբ Store API-ն վավերացնում է cart-ը և billing դաշտերը, ուստի unauth bot-երը validator-ից ստանում էին 400 և երբեք չէին ակտիվացնում սահմանափակիչը։
* Ուղղված՝ Ultimate Multisite inline-login rate-limit gate-ն այժմ գործարկվում է `wu_ajax_nopriv_wu_inline_login` priority 1-ով (և logged-in mirror-ով)՝ `wu_before_inline_login`-ի փոխարեն։ Վերջինս գործարկվում է միայն այն բանից հետո, երբ `check_ajax_referer('wu_checkout')`-ը հաջողվում է, ուստի վավեր wu_checkout nonce չունեցող unauth bot-երը ստանում էին 403 և երբեք չէին ակտիվացնում սահմանափակիչը։
* Ուղղված՝ `Rate_Limiter::enforce()`-ն այժմ կիրառում է մեկ հարցման համար մեկ անգամ աշխատող guard՝ `surface|ip` բանալիով, ուստի upstream hook-երը, որոնք երկու անգամ են գործարկվում յուրաքանչյուր render-ի համար (հատկապես `wu_setup_checkout`-ը Ultimate Multisite-ում), այլևս չեն կիսում արդյունավետ rate-limit շեմը։
* Ուղղված՝ rate-limit surface gate-երն այլևս չեն խորհրդակցում `Captcha_Core::is_whitelisted()`-ի հետ (`wu_captcha_whitelisted` filter)։ Այդ filter-ը ազդանշում է "captcha-ն արդեն մշակվել է այլ մակերեսի կողմից" և flood protection-ից անկախ է — WooCommerce ինտեգրացիան այն hook էր անում՝ բաց թողնելու WordPress login captcha-ն, երբ Woo nonce կար, ինչը ներթափանցում էր rate counting-ի մեջ և թույլ էր տալիս Woo POST-երին խուսափել սահմանափակիչից։ Rate-limit-specific `wu_cap_rate_limit_whitelist_ip` filter-ը միակ շրջանցումն է, որն այժմ կիրառվում է։

Տարբերակ՝ 1.3.2 - Թողարկվել է 2026-01-27-ին
* Ուղղված՝ Cap widget-ը չէր render լինում Elementor կամ այլ page builder-ներ օգտագործող checkout form-երում
* Ուղղված՝ cap-widget custom element-ը հեռացվում էր wp_kses() sanitization-ի կողմից
* Բարելավված՝ օգտագործել callable content checkout captcha դաշտի համար՝ HTML filtering-ը շրջանցելու նպատակով
* Բարելավված՝ պարզեցված JavaScript՝ fallback-ով edge case-երի համար

Տարբերակ՝ 1.3.1 - Թողարկվել է 2026-01-26-ին
* Ուղղված՝ Cap Captcha invisible mode-ը ավտոմատ չէր լուծվում դինամիկ Ultimate Multisite checkout form-երում
* Բարելավված՝ Cap checkout script-ն այժմ օգտագործում է MutationObserver՝ դինամիկ բեռնվող widget-ները հայտնաբերելու համար
* Բարելավված՝ ավելացվել է checkout button interception՝ token-ին սպասելու համար նախքան submission-ը

Version: 1.3.0 - Թողարկվել է 2026-01-27
* Նոր․ WooCommerce Blocks վճարման ձևի ինտեգրում Store API fetch-ի միջամտությամբ
* Նոր․ Անտեսանելի captcha-ի աջակցություն WooCommerce վճարման ձևի համար (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Նոր․ Առանձին կարգավորումների էջ՝ առանց Ultimate Multisite օգտագործման համար
* Նոր․ Jetpack Autoloader՝ կախվածությունների բախումները կանխելու համար
* Ուղղված է․ hCaptcha-ն չէր ցուցադրվում դինամիկ Ultimate Multisite վճարման ձևում (AJAX-ով բեռնվող բովանդակություն)
* Ուղղված է․ Captcha-ն չէր թարմացվում/վերակայվում, երբ ձևի վավերացման սխալներ էին առաջանում
* Ուղղված է․ hCaptcha-ն չէր ցուցադրվում WooCommerce վճարման էջում
* Ուղղված է․ reCAPTCHA class not found սխալ (ավելացվել է google/recaptcha PHP գրադարանը)
* Բարելավված է․ Սխալների հայտնաբերում WordPress hooks-ի, MutationObserver-ի և AJAX-ի միջամտության միջոցով
* Բարելավված է․ Կարգավորումների նկարագրություններն այժմ ներառում են dashboard URL-ներ API բանալիների համար

Version: 1.2.2 - Թողարկվել է 2026-01-24
* Ուղղված է․ Captcha-ն չէր ցուցադրվում Ultimate Multisite Login Form Element-ում (ձևի ֆիլտրի անվան անհամապատասխանություն)
* Ուղղված է․ Cap widget HTML-ը հեռացվում էր wp_kses() մաքրման պատճառով
* Ուղղված է․ JavaScript selector-ները չէին գտնում ձևերը, որոնց տարրի ID-ներում շեղագծեր կային
* Ավելացված է․ Filter hook `wu_kses_allowed_html`՝ classaddons-ի համար թույլատրված HTML թեգերը ընդլայնելու նպատակով
* Հեռացված է․ Մեռած կոդով JavaScript ֆայլերը փոխարինվել են provider-ին հատուկ սկրիպտերով

Version: 1.2.1 - Թողարկվել է 2026-01-23

* Ուղղված է․ Cap Captcha token-ի վավերացումը ձախողվում էր multisite միջավայրերում (այժմ օգտագործում է network-wide transients)
* Ուղղված է․ Captcha-ն այժմ հետևողականորեն ցուցադրվում է բոլոր օգտատերերի համար՝ անկախ մուտք գործած լինելու կարգավիճակից
* Ուղղված է․ Captcha-ի ցուցադրման և վավերացման անհամապատասխանություն, որը առաջացնում էր վճարման ձևի ձախողումներ

Version: 1.2.0 - Թողարկվել է 2026-01-21

* Նոր․ Cap Captcha - ինքնուրույն հոսթինգով proof-of-work captcha, ակտիվացման ժամանակ լռելյայն միացված
* Նոր․ Zero-configuration պաշտպանություն - ակտիվացրեք addon-ը և անմիջապես պաշտպանված եք
* Նոր․ Պոլիմորֆ captcha provider ճարտարապետություն՝ հեշտ ընդլայնելիության համար
* Նոր․ WooCommerce Store API վճարման ձևի պաշտպանություն card testing հարձակումներից
* Նոր․ Վիճակագրության հետևման dashboard, որը ցույց է տալիս մարտահրավերները, ստուգումները և արգելափակված հարձակումները
* Նոր․ Անվտանգության մակարդակի նախադրյալներ (Fast, Medium, Max) Cap Captcha բարդության համար
* Նոր․ Աբստրակտ բազային class-ներ reCAPTCHA և hCaptcha provider-ների համար
* Բարելավված է․ Կոդային բազան վերակազմավորվել է մոդուլային provider class-ների
* Բարելավված է․ Պարտականությունների ավելի լավ տարանջատում՝ նվիրված manager class-ով
* Fixed: Security improvements for $_SERVER variable sanitization
* Ուղղված է․ PHPUnit թեստերի կոնֆիգուրացիա WordPress-ի անվանման պայմանականությունների համար

Version: 1.0.1 - Թողարկվել է 2025-09-28

* Վերանվանել prefix-ը ultimate-multisite-ի; թարմացնել text domain-ը; տարբերակի բարձրացում։
