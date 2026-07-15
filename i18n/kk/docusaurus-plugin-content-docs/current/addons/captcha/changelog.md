---
title: Captcha өзгерістер журналы
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha өзгерістер журналы

Нұсқа: 1.5.0 - 2026-05-22 күні шығарылды
* Жаңа: Қатаң тоқтататын сұрау жиілігін шектеуші — captcha-қорғалған беттердегі әрбір GET және POST сұрауын санайды (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) және HTTP 429 жауабын, `Retry-After` header-ын және кездейсоқ tarpit кідірісін (1–5 с, қатаң шегі 15 с) қайтарады.
* Жаңа: tarpit терезесін баптауға арналған `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` settings.
* Жаңа: сенімді IP ауқымдарын босатуға арналған `wu_cap_rate_limit_whitelist_ip` filter.
* Жаңа: қатаң тоқтату жауабы жіберілердің дәл алдында іске қосылатын `wu_cap_rate_limit_will_block` action.
* Жаңа: Жалғандауға төзімді клиент IP-ын анықтау. `Captcha_Core::get_client_ip()` (сұрау жиілігін шектеу bucket кілттері, captcha siteverify `remoteip` және статистика IP hashes үшін негізгі ақиқат көзі) енді қатаң сенім үлгісін қолданады: REMOTE_ADDR төменгі шек болып табылады, `CF-Connecting-IP` тек тікелей peer ағымдағы Cloudflare IP ауқымының ішінде болғанда ғана ескеріледі, ал `X-Forwarded-For` тек тікелей peer әкімші баптаған trusted-proxy тізімінде болғанда ғана ескеріледі; келуші IP-ына тоқтамас бұрын оңнан солға қарай өту сенімді/CF hop-тарын өткізіп жібереді.
* Жаңа: `cap_trust_cloudflare_headers` setting (әдепкіде ӨШІРУЛІ) — Cloudflare артында болғанда `CF-Connecting-IP` сенімін қосу. Плагин кірістірілген Cloudflare CIDR snapshot-ымен жеткізіледі және оны wp-cron арқылы апта сайын жаңартады, жаңарту сәтсіз болса кірістірілген fallback қолданылады.
* Жаңа: `cap_trusted_proxies` setting — өзіңіздің алдыңғы қатардағы proxy-леріңізді / load-balancer-леріңізді тізімдейтін CIDR немесе жалаң IP-лар textarea-сы (әр жолға біреу, `#` пікірлеріне рұқсат). Мұнсыз сұрау жиілігін шектеуші қосулы болса да, `X-Forwarded-For` еленбейді.
* Жаңа: ықтимал Cloudflare / proxy күйін алғаш қосқанда автоанықтау және бір басумен "Анықталған settings қолдану" admin notice. Плагин сақталған мәндеріңізді ешқашан қайта жазбайды; егер кейінгі traffic config шындыққа енді сәйкес келмейтінін көрсетсе (мысалы, Cloudflare CIDR ауқымдарын өзгертті және proxy CIDR-ыңыз енді ескірген), ұсынылған жаңартуды көрсететін жабылмайтын сәйкессіздік notice пайда болады.
* Түзетілді: Көрінбейтін режим енді `cap_security_level` мәнін үнсіз FAST-қа төмендетпейді — әкімші баптаған деңгей сақталады. Арнайы логика қажет сайттар үшін жаңа `wu_cap_server_security_level` filter қолжетімді.
* Түзетілді: Статистиканың `rate_limits_triggered` санағышы енді сирек post-success backstop жолында ғана емес, әр блоктауда артады.
* Түзетілді: `Captcha_Core::get_client_ip()` енді сұрау жиілігін шектеуші, captcha провайдерлері (reCAPTCHA + hCaptcha `siteverify`) және статистика бойынша келуші IP-ын тағайындаудың жалғыз ақиқат көзі — қолдан жасалған `CF-Connecting-IP` header-ын алып жүретін тікелей origin-server сұраулары нақты peer орнына жалған IP бойынша bucket-ке түсетін spoofing векторын жабады.
* Түзетілді: WooCommerce классикалық checkout сұрау жиілігін шектеу қақпасы енді `woocommerce_before_checkout_form` орнына `template_redirect` (басымдық 1) кезінде іске қосылады. Себет бос болғанда form-level hook ешқашан іске қосылмайды, сондықтан product қоспайтын flood traffic шектеушіні толық айналып өтетін.
* Түзетілді: WooCommerce pay-for-order сұрау жиілігін шектеу қақпасы енді `woocommerce_before_pay_action` орнына `template_redirect` кезінде іске қосылады. Соңғысы тек `wp_verify_nonce('woocommerce-pay')` сәтті өткеннен кейін іске қосылады, яғни unauth шабуылдаушылар (нақты threat model) шектеушіні ешқашан іске қоспайтын.
* Түзетілді: WooCommerce Store API (blocks) checkout сұрау жиілігін шектеу қақпасы енді `woocommerce_store_api_checkout_update_order_from_request` орнына `rest_pre_dispatch` кезінде іске қосылады. Соңғысы Store API себет пен billing fields тексергеннен кейін ғана іске қосылады, сондықтан unauth bots validator-дан 400 алып, шектеушіні ешқашан іске қоспайтын.
* Түзетілді: Ultimate Multisite inline-login сұрау жиілігін шектеу қақпасы енді `wu_before_inline_login` орнына `wu_ajax_nopriv_wu_inline_login` басымдығы 1-де (және logged-in mirror-да) іске қосылады. Соңғысы тек `check_ajax_referer('wu_checkout')` сәтті өткеннен кейін іске қосылады, сондықтан жарамды wu_checkout nonce-ы жоқ unauth bots 403 алып, шектеушіні ешқашан іске қоспайтын.
* Түзетілді: `Rate_Limiter::enforce()` енді `surface|ip` арқылы кілттелген бір сұрауға бір рет guard қолданады, сондықтан бір render кезінде екі рет іске қосылатын upstream hooks (әсіресе Ultimate Multisite ішіндегі `wu_setup_checkout`) енді тиімді сұрау жиілігі шегін екі есе азайтпайды.
* Түзетілді: Сұрау жиілігін шектеу бет қақпалары енді `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) тексермейді. Бұл filter "captcha басқа бет арқылы әлдеқашан өңделді" дегенді білдіреді және flood қорғанысынан бөлек — WooCommerce интеграциясы Woo nonce болғанда WordPress login captcha-ын өткізіп жіберу үшін оған hook жасаған, бұл сұрауды санауға әсер етіп, Woo POST-тарына шектеушіден жалтаруға мүмкіндік берген. Енді қолданылатын жалғыз айналып өту — сұрау жиілігін шектеуге арнайы `wu_cap_rate_limit_whitelist_ip` filter.

Нұсқа: 1.3.2 - 2026-01-27 күні шығарылды
* Түзетілді: Cap виджеті Elementor немесе басқа page builder-лер қолданатын checkout формаларында көрсетілмеуі
* Түзетілді: cap-widget custom element-інің wp_kses() sanitization арқылы алынып тасталуы
* Жақсартылды: HTML сүзгілеуін айналып өту үшін checkout captcha field үшін callable content қолдану
* Жақсартылды: Шеткі жағдайлар үшін fallback бар JavaScript жеңілдетілді

Нұсқа: 1.3.1 - 2026-01-26 күні шығарылды
* Түзетілді: Cap Captcha көрінбейтін режимінің динамикалық Ultimate Multisite checkout формаларында автоматты шешілмеуі
* Жақсартылды: Cap checkout script енді динамикалық жүктелген виджеттерді анықтау үшін MutationObserver қолданады
* Жақсартылды: Жіберуден бұрын token күту үшін checkout button interception қосылды

Version: 1.3.0 - 2026-01-27 күні шығарылды
* Жаңа: WooCommerce Blocks checkout интеграциясы Store API fetch ұстап қалуымен
* Жаңа: WooCommerce checkout үшін көрінбейтін captcha қолдауы (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Жаңа: Ultimate Multisite қолданбай пайдалану үшін жеке параметрлер беті
* Жаңа: тәуелділік қақтығыстарының алдын алу үшін Jetpack Autoloader
* Түзетілді: hCaptcha динамикалық Ultimate Multisite checkout-та көрсетілмеді (AJAX арқылы жүктелген мазмұн)
* Түзетілді: форма тексеру қателері пайда болғанда Captcha жаңартылмады/қалпына келтірілмеді
* Түзетілді: hCaptcha WooCommerce checkout бетінде көрсетілмеді
* Түзетілді: reCAPTCHA класы табылмады қатесі (google/recaptcha PHP кітапханасы қосылды)
* Жақсартылды: WordPress hooks, MutationObserver және AJAX ұстап қалу арқылы қателерді анықтау
* Жақсартылды: параметрлер сипаттамалары енді API кілттері үшін Dashboard URL-дарын қамтиды

Version: 1.2.2 - 2026-01-24 күні шығарылды
* Түзетілді: Captcha Ultimate Multisite Login Form Element ішінде көрсетілмеді (форма filter атауының сәйкессіздігі)
* Түзетілді: Cap widget HTML-і wp_kses() тазалауымен алынып тасталды
* Түзетілді: JavaScript селекторлары элемент ID-лерінде қиғаш сызықтары бар формаларды таба алмады
* Қосылды: classaddons үшін рұқсат етілген HTML тегтерін кеңейтуге арналған `wu_kses_allowed_html` filter hook
* Алынып тасталды: пайдаланылмайтын JavaScript файлдары провайдерге тән скрипттермен ауыстырылды

Version: 1.2.1 - 2026-01-23 күні шығарылды

* Түзетілді: Cap Captcha token тексеруі multisite орталарында сәтсіз болды (енді желі бойынша transients пайдаланады)
* Түзетілді: Captcha енді кіру мәртебесіне қарамастан барлық пайдаланушылар үшін тұрақты көрсетіледі
* Түзетілді: captcha көрсетуі мен тексеруі арасындағы сәйкессіздік checkout сәтсіздіктеріне себеп болды

Version: 1.2.0 - 2026-01-21 күні шығарылды

* Жаңа: Cap Captcha - өз серверінде орналастырылатын proof-of-work captcha, іске қосылғанда әдепкі бойынша қосылады
* Жаңа: Нөлдік баптау қорғанысы - addon-ды іске қосыңыз және бірден қорғаласыз
* Жаңа: оңай кеңейтуге арналған полиморфты captcha провайдері архитектурасы
* Жаңа: WooCommerce Store API checkout-ты card testing шабуылдарынан қорғау
* Жаңа: сынақтарды, тексерулерді және бұғатталған шабуылдарды көрсететін статистика бақылау Dashboard-ы
* Жаңа: Cap Captcha күрделілігі үшін қауіпсіздік деңгейі preset-тері (Fast, Medium, Max)
* Жаңа: reCAPTCHA және hCaptcha провайдерлеріне арналған абстрактілі базалық кластар
* Жақсартылды: код базасы модульдік провайдер кластарына қайта құрылымдалды
* Жақсартылды: арнайы manager класы арқылы жауапкершіліктер жақсырақ бөлінді
* Fixed: Security improvements for $_SERVER variable sanitization
* Түзетілді: WordPress атау беру келісімдері үшін PHPUnit test конфигурациясы

Version: 1.0.1 - 2025-09-28 күні шығарылды

* Префиксті ultimate-multisite деп өзгерту; text domain жаңарту; нұсқаны көтеру.
