---
title: క్యాప్చా మార్పుల చరిత్ర
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Version: 1.5.0 - Released on 2026-05-22
* New: Hard-stop rate limiter — ఇది captcha-రక్షిత పేజీలలో (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) జరిగే ప్రతి GET మరియు POST రిక్వెస్ట్‌ను లెక్కిస్తుంది. ఇది HTTP 429, ఒక `Retry-After` హెడర్, మరియు యాదృచ్ఛికంగా ఆలస్యం (1–5 సెకన్లు, గరిష్టంగా 15 సెకన్లు) తో సమాధానం ఇస్తుంది.
* New: Tarpit విండోను సర్దుబాటు చేయడానికి `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` సెట్టింగ్‌లు.
* New: నమ్మదగిన IP పరిధులను మినహాయించడానికి `wu_cap_rate_limit_whitelist_ip` filter.
* New: హార్డ్-స్టాప్ ప్రతిస్పందన పంపడానికి సరిగ్గా ముందు ట్రిగ్గర్ అయ్యే `wu_cap_rate_limit_will_block` action.
* New: Spoof-నిరోధక client-IP గుర్తింపు. `Captcha_Core::get_client_ip()` (rate-limit బకెట్ కీలు, captcha siteverify `remoteip`, మరియు గణాంకాల IP హాష్‌లకు మూలం) ఇప్పుడు కఠినమైన నమ్మక నమూనాను అమలు చేస్తుంది: REMOTE_ADDR అనేది కనీస స్థాయి, `CF-Connecting-IP` అనేది తక్షణ peer ప్రస్తుత Cloudflare IP పరిధిలో ఉన్నప్పుడు మాత్రమే గౌరవించబడుతుంది, మరియు `X-Forwarded-For` అనేది తక్షణ peer అడ్మిన్-కాన్ఫిగర్ చేయబడిన నమ్మక-proxy జాబితాలో ఉన్నప్పుడు మాత్రమే గౌరవించబడుతుంది. ఇది కుడి నుండి ఎడమ వైపుగా నడిచి, నమ్మకమైన/CF హอปస్‌ను దాటవేసి, సందర్శకుల IP పై స్థిరపడుతుంది.
* New: `cap_trust_cloudflare_headers` సెట్టింగ్ (డిఫాల్ట్‌గా OFF) — Cloudflare వెనుక ఉన్నప్పుడు `CF-Connecting-IP` నమ్మకాన్ని ఎంచుకోవడానికి. ఈ ప్లాగిన్ ఒక బండిల్ చేయబడిన Cloudflare CIDR స్నాప్‌షాట్‌ను పంపిణీ చేస్తుంది మరియు రిఫ్రెష్ అవ్వడానికి wp-cron ద్వారా ప్రతి వారం, రిఫ్రెష్ విఫలమైతే బండిల్ చేయబడిన ఫాల్‌బ్యాక్‌తో ఇది పనిచేస్తుంది.
* New: `cap_trusted_proxies` సెట్టింగ్ — మీ సొంత ఫ్రంట్-లైన్ ప్రాక్సీలు / లోడ్-బ్యాలెన్సర్‌లను జాబితా చేయడానికి CIDRs లేదా bare IPs యొక్క టెక్స్ట్ ఏరియా (ప్రతి లైన్‌లో ఒకటి, `#` కామెంట్లు అనుమతించబడ్డాయి). ఇది లేకపోతే, rate limiter ఎనేబుల్ అయినప్పటికీ `X-Forwarded-For` విస్మరించబడుతుంది.
* New: Cloudflare / proxy స్థితిని ఆటోమేటిక్‌గా గుర్తించడం మరియు మొదటిసారి ఎనేబుల్ చేయడం, దీని కోసం ఒక-క్లిక్ "Apply detected settings" అడ్మిన్ నోటిఫికేషన్ ఉంటుంది. ఈ ప్లాగిన్ ఎప్పుడూ మీ సేవ్ చేసిన విలువలను ఓవర్‌రైట్ చేయదు; తదుపరి ట్రాఫిక్ మీ కాన్ఫిగరేషన్ వాస్తవానికి సరిపోదని సూచిస్తే (ఉదాహరణకు, Cloudflare CIDR పరిధులను మార్చింది మరియు మీ proxy CIDR ఇప్పుడు పాతది అయితే), సిఫార్సు చేయబడిన అప్‌డేట్‌ను చూపించే తొలగించలేని mismatch నోటిఫికేషన్ కనిపిస్తుంది.
* Fixed: కనిపించని (Invisible) మోడ్ ఇకపై `cap_security_level`ను సైలెంట్‌గా FAST కి తగ్గించదు — అడ్మిన్ కాన్ఫిగర్ చేసిన స్థాయిని గౌరవిస్తుంది. ప్రత్యేకమైన లాజిక్ కావాలనుకునే సైట్‌ల కోసం కొత్త `wu_cap_server_security_level` filter అందుబాటులో ఉంది.
* Fixed: గణాంకాలు `rate_limits_triggered` కౌంటర్ ఇప్పుడు ప్రతి బ్లాక్‌పై పెరుగుతుంది, కేవలం అరుదైన పోస్ట్-సక్సెస్ బ్యాక్‌స్టాప్ మార్గంలో మాత్రమే కాదు.
* Fixed: `Captcha_Core::get_client_ip()` ఇప్పుడు rate limiter, captcha ప్రొవైడర్‌లు (reCAPTCHA + hCaptcha `siteverify`), మరియు గణాంకాల అంతటా సందర్శకుల IP కోసం ఏకైక మూలం (single source of truth)గా ఉంది — ఇది ఒక spoofing vectorను మూసివేసింది, ఇక్కడ నకిలీ `CF-Connecting-IP` హెడర్‌ను మోసుకెళ్లే ప్రత్యక్ష origin-server రిక్వెస్ట్‌లు నిజమైన peer స్థానంలో నకిలీ IP ద్వారా బకెట్ చేయబడేవి.
* Fixed: WooCommerce classic checkout rate-limit gate ఇప్పుడు `woocommerce_before_checkout_form` కి బదులుగా `template_redirect` (priority 1) పై ట్రిగ్గర్ అవుతుంది. కార్ట్ ఖాళీగా ఉన్నప్పుడు ఫారం-స్థాయి hook ఎప్పుడూ ట్రిగ్గర్ అవ్వదు, కాబట్టి ఉత్పత్తిని జోడించని ఫ్లడ్ ట్రాఫిక్ మొత్తం rate limiterను దాటవేసేది.
* Fixed: WooCommerce pay-for-order rate-limit gate ఇప్పుడు `woocommerce_before_pay_action` కి బదులుగా `template_redirect` పై ట్రిగ్గర్ అవుతుంది. రెండవది `wp_verify_nonce('woocommerce-pay')` విజయవంతం అయిన తర్వాత మాత్రమే ట్రిగ్గర్ అవుతుంది, అంటే ప్రామాణికం లేని దాడి చేసేవారు (నిజమైన threat model) ఎప్పుడూ rate limiterను ట్రిగ్గర్ చేయలేదు.
* Fixed: WooCommerce Store API (blocks) checkout rate-limit gate ఇప్పుడు `woocommerce_store_api_checkout_update_order_from_request` కి బదులుగా `rest_pre_dispatch` పై ట్రిగ్గర్ అవుతుంది. రెండవది Store API కార్ట్ మరియు బిల్లింగ్ ఫీల్డ్‌లను ధృవీకరించిన తర్వాత మాత్రమే ట్రిగ్గర్ అవుతుంది, కాబట్టి ప్రామాణికం లేని bots ధ్రువీకరణదారు నుండి 400 ని పొందాయి మరియు rate limiterను ఎప్పుడూ ట్రిగ్గర్ చేయలేదు.
* Fixed: Ultimate Multisite inline-login rate-limit gate ఇప్పుడు `wu_before_inline_login` కి బదులుగా `wu_ajax_nopriv_wu_inline_login` priority 1 (మరియు లాగిన్ అయిన mirror) పై ట్రిగ్గర్ అవుతుంది. రెండవది `check_ajax_referer('wu_checkout')` విజయవంతం అయిన తర్వాత మాత్రమే ట్రిగ్గర్ అవుతుంది, కాబట్టి చెల్లుబాటు అయ్యే wu_checkout nonce లేని ప్రామాణికం లేని bots 403 ని పొందాయి మరియు rate limiterను ఎప్పుడూ ట్రిగ్గర్ చేయలేదు.
* Fixed: `Rate_Limiter::enforce()` ఇప్పుడు `surface|ip` ద్వారా కీ చేయబడిన ఒకసారి-ప్రతి-రిక్వెస్ట్ గార్డ్‌ను వర్తింపజేస్తుంది, కాబట్టి పైప్‌స్ట్రీమ్ hooks (ఉదాహరణకు, Ultimate Multisite లో `wu_setup_checkout` రెండుసార్లు ట్రిగ్గర్ అవుతుంది) ఇకపై ప్రభావవంతమైన rate-limit థ్రెషోల్డ్‌ను సగానికి తగ్గించవు.
* Fixed: Rate-limit surface gates ఇకపై `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ను సంప్రదించవు. ఆ filter "captcha ఇప్పటికే మరొక surface ద్వారా నిర్వహించబడింది" అని సూచిస్తుంది మరియు ఫ్లడ్ రక్షణకు లంబంగా ఉంటుంది — WooCommerce ఇంటిగ్రేషన్ ఒక Woo nonce ఉన్నప్పుడు WordPress లాగిన్ captcha ని దాటవేయడానికి దీనిని hook చేసింది, ఇది rate లెక్కలోకి ప్రవహించి Woo POST లు rate limiterను తప్పించుకునేలా చేసింది. rate-limit-నిర్దిష్టమైన `wu_cap_rate_limit_whitelist_ip` filter మాత్రమే ఇప్పుడు వర్తించే బైపాస్.

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Elementor లేదా ఇతర పేజ్ బిల్డర్‌లను ఉపయోగించే checkout ఫారమ్‌లపై Cap widget రెండర్ అవ్వడం లేదు.
* Fixed: cap-widget కస్టమ్ ఎలిమెంట్ wp_kses() sanitization ద్వారా తొలగించబడుతోంది.
* Improved: HTML ఫిల్టరింగ్‌ను దాటవేయడానికి checkout captcha ఫీల్డ్‌కు callable content ఉపయోగించడం.
* Improved: edge cases కోసం ఫాల్‌బ్యాక్‌తో JavaScript ను సరళీకృతం చేయడం.

Version: 1.3.1 - Released on 2026-01-26
* Fixed: డైనమిక్ Ultimate Multisite checkout ఫారమ్‌లపై Cap Captcha కనిపించని (invisible) మోడ్ ఆటోమేటిక్‌గా పరిష్కరించడం లేదు.
* Improved: Cap checkout script ఇప్పుడు డైనమిక్‌గా లోడ్ చేయబడిన విడ్జెట్‌లను గుర్తించడానికి MutationObserver ను ఉపయోగిస్తుంది.
* Improved: సమర్పణకు ముందు టోకెన్ కోసం వేచి ఉండటానికి checkout బటన్ ఇంటర్‌సెప్షన్‌ను జోడించడం.

Version: 1.3.0 - Released on 2026-01-27
* New: Store API fetch interception తో WooCommerce Blocks checkout ఇంటిగ్రేషన్.
* New: WooCommerce checkout కోసం కనిపించని (invisible) captcha మద్దతు (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* New: Ultimate Multisite లేకుండా ఉపయోగించడానికి స్టాండలోన్ సెట్టింగ్స్ పేజీ.
* New: dependency conflict ని నివారించడానికి Jetpack Autoloader.
* Fixed: డైనమిక్ Ultimate Multisite checkout (AJAX-లోడ్ చేయబడిన కంటెంట్) పై hCaptcha రెండర్ అవ్వడం లేదు.
* Fixed: ఫారం ధ్రువీకరణ లోపాలు సంభవించినప్పుడు Captcha రిఫ్రెష్/రీసెట్ అవ్వడం లేదు.
* Fixed: WooCommerce checkout పేజీలో hCaptcha కనిపించడం లేదు.
* Fixed: reCAPTCHA class not found error (google/recaptcha PHP library జోడించబడింది).
* Improved: WordPress hooks, MutationObserver, మరియు AJAX interception ద్వారా లోపం గుర్తింపు.
* Improved: సెట్టింగ్ వివరణలలో API కీల కోసం డాష్‌బోర్డ్ URL లు ఇప్పుడు చేర్చబడ్డాయి.

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Ultimate Multisite Login Form Element పై Captcha ప్రదర్శించబడకపోవడం (form filter name mismatch).
* Fixed: Cap widget HTML wp_kses() sanitization ద్వారా తొలగించబడుతోంది.
* Fixed: JavaScript selectors లో element IDs లో స్లాష్‌లు ఉన్న ఫారమ్‌లను కనుగొనలేకపోవడం.
* Added: classaddons కు అనుమతించబడిన HTML ట్యాగ్‌లను విస్తరించడానికి `wu_kses_allowed_html` filter hook.
* Removed: Dead code JavaScript ఫైల్‌లు ప్రొవైడర్-నిర్దిష్ట స్క్రిప్ట్‌లతో భర్తీ చేయబడ్డాయి.

Version: 1.2.1 - Released on 2026-01-23

* Fixed: multisite environments లో Cap Captcha token ధ్రువీకరణ విఫలం కావడం (ఇప్పుడు network-wide transients ను ఉపయోగిస్తుంది).
* Fixed: లాగిన్ స్థితితో సంబంధం లేకుండా అన్ని వినియోగదారుల కోసం Captcha స్థిరంగా రెండర్ అవుతుంది.
* Fixed: checkout వైఫల్యాలకు కారణమైన captcha రెండరింగ్ మరియు ధ్రువీకరణ మధ్య తేడా.

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, activation పై డిఫాల్ట్‌గా ఎనేబుల్ చేయబడింది.
* New: Zero-configuration protection - add-on ను యాక్టివేట్ చేయండి మరియు మీరు తక్షణమే రక్షించబడతారు.
* New: సులభమైన విస్తరణ కోసం Polymorphic captcha provider architecture.
* New: card testing attacks నుండి WooCommerce Store API checkout రక్షణ.
* New: సవాళ్లు, ధ్రువీకరణలు మరియు బ్లాక్ చేయబడిన దాడులను చూపించే గణాంకాల ట్రాకింగ్ డాష్‌బోర్డ్.
* New: Cap Captcha కష్టతరం కోసం సెట్టింగ్ ప్రీసెట్‌లు (Fast, Medium, Max).
* New: reCAPTCHA మరియు hCaptcha ప్రొవైడర్‌ల కోసం Abstract base classes.
* Improved: మాడ్యులర్ ప్రొవైడర్ క్లాస్‌లుగా కోడ్‌బేస్‌ను పునర్నిర్మించడం.
* Improved: ప్రత్యేకమైన manager class తో ఆందోళనల విభజన మెరుగుపడింది.
* Fixed: $_SERVER variable sanitization కోసం భద్రతా మెరుగుదలలు.
* Fixed: WordPress naming conventions కోసం PHPUnit test configuration.

Version: 1.0.1 - Released on 2025-09-28

* పేరును ultimate-multisite కి మార్చడం; టెక్స్ట్ డొమైన్‌ను అప్‌డేట్ చేయడం; వెర్షన్ బంప్.
