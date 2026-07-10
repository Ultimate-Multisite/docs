---
title: Captcha дневник на промени
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Дневник на промени за Captcha {#captcha-changelog}

Верзија: 1.5.0 - Објавено на 2026-05-22
* Ново: Ограничувач на стапка со тврдо стопирање — го брои секое GET и POST на површини заштитени со captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) и одговара со HTTP 429, `Retry-After` header и случајно tarpit-задржување (1–5s, со тврда горна граница од 15s).
* Ново: Поставки `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` за нагодување на tarpit-прозорецот.
* Ново: Филтер `wu_cap_rate_limit_whitelist_ip` за изземање доверливи IP-опсези.
* Ново: Акција `wu_cap_rate_limit_will_block` што се активира непосредно пред да се испрати одговорот со тврдо стопирање.
* Ново: Детекција на IP на клиент отпорна на лажирање. `Captcha_Core::get_client_ip()` (изворот на вистината за клучеви на rate-limit bucket, captcha siteverify `remoteip` и IP-хешови за статистика) сега спроведува строг модел на доверба: REMOTE_ADDR е основата, `CF-Connecting-IP` се почитува само кога непосредниот peer е во тековен Cloudflare IP-опсег, а `X-Forwarded-For` се почитува само кога непосредниот peer е во администраторски конфигурираната листа на доверливи proxy, со одење оддесно налево што ги прескокнува доверливите/CF скокови пред да се утврди IP-адресата на посетителот.
* Ново: Поставка `cap_trust_cloudflare_headers` (стандардно OFF) — овозможете доверба во `CF-Connecting-IP` кога сте зад Cloudflare. plugin-от испорачува вграден Cloudflare CIDR snapshot и го освежува неделно преку wp-cron со вграден fallback ако освежувањето не успее.
* Ново: Поставка `cap_trusted_proxies` — textarea со CIDR-и или голи IP-адреси (една по ред, дозволени се `#` коментари) што ги наведува вашите сопствени предни proxy / load-balancer-и. Без ова, `X-Forwarded-For` се игнорира дури и кога ограничувачот на стапка е овозможен.
* Ново: Автоматска детекција при прво овозможување на веројатна Cloudflare / proxy поставеност со администраторско известување „Примени ги детектираните поставки“ со еден клик. plugin-от никогаш не ги пребришува вашите зачувани вредности; ако последователниот сообраќај сугерира дека вашата конфигурација повеќе не се совпаѓа со реалноста (на пр. Cloudflare ги сменил CIDR-опсезите и вашиот proxy CIDR сега е застарен), се прикажува известување за несовпаѓање што не може да се отфрли со препорачаното ажурирање.
* Поправено: Невидливиот режим повеќе не го намалува тивко `cap_security_level` на FAST — се почитува конфигурираното ниво на администраторот. Достапен е нов филтер `wu_cap_server_security_level` за сајтови што сакаат сопствена логика.
* Поправено: Бројачот за статистика `rate_limits_triggered` сега се зголемува при секое блокирање, не само на ретката backstop патека по успех.
* Поправено: `Captcha_Core::get_client_ip()` сега е единствениот извор на вистината за припишување на IP на посетител низ ограничувачот на стапка, captcha providers (reCAPTCHA + hCaptcha `siteverify`) и статистиката — затворајќи вектор за лажирање каде што директни барања до origin-server со фалсификуван `CF-Connecting-IP` header би биле групирани според лажираната IP наместо според вистинскиот peer.
* Поправено: Портата за ограничување на стапка на WooCommerce classic checkout сега се активира на `template_redirect` (priority 1) наместо на `woocommerce_before_checkout_form`. Hook-от на ниво на form никогаш не се активира кога количката е празна, па flood сообраќајот што никогаш не додава производ целосно го заобиколуваше ограничувачот.
* Поправено: Портата за ограничување на стапка на WooCommerce pay-for-order сега се активира на `template_redirect` наместо на `woocommerce_before_pay_action`. Второто се активира само откако `wp_verify_nonce('woocommerce-pay')` ќе успее, што значи дека unauth напаѓачите (вистинскиот threat model) никогаш не го активираа ограничувачот.
* Поправено: Портата за ограничување на стапка на WooCommerce Store API (blocks) checkout сега се активира на `rest_pre_dispatch` наместо на `woocommerce_store_api_checkout_update_order_from_request`. Второто се активира само откако Store API ќе ги валидира количката и полињата за наплата, па unauth ботовите добиваа 400 од валидаторот и никогаш не го активираа ограничувачот.
* Поправено: Портата за ограничување на стапка на Ultimate Multisite inline-login сега се активира на `wu_ajax_nopriv_wu_inline_login` priority 1 (и logged-in mirror) наместо на `wu_before_inline_login`. Второто се активира само откако `check_ajax_referer('wu_checkout')` ќе успее, па unauth ботовите без валиден wu_checkout nonce добиваа 403 и никогаш не го активираа ограничувачот.
* Поправено: `Rate_Limiter::enforce()` сега применува заштита еднаш по барање клучирана според `surface|ip`, така што upstream hooks што се активираат двапати по render (особено `wu_setup_checkout` во Ultimate Multisite) повеќе не го преполовуваат ефективниот праг за ограничување на стапка.
* Поправено: Портите за површини со ограничување на стапка повеќе не го консултираат `Captcha_Core::is_whitelisted()` (филтер `wu_captcha_whitelisted`). Тој филтер сигнализира „captcha веќе е обработена од друга површина“ и е ортогонален на заштитата од flood — WooCommerce интеграцијата го користеше за да ја прескокне WordPress login captcha кога беше присутен Woo nonce, што се прелеваше во броењето на стапката и им дозволуваше на Woo POST-овите да го избегнат ограничувачот. Филтерот специфичен за ограничување на стапка `wu_cap_rate_limit_whitelist_ip` е единственото заобиколување што сега се применува.

Верзија: 1.3.2 - Објавено на 2026-01-27
* Поправено: Cap widget не се прикажуваше на checkout forms што користат Elementor или други page builders
* Поправено: cap-widget custom element се отстрануваше од wp_kses() sanitization
* Подобрено: Се користи callable content за checkout captcha field за да се заобиколи HTML filtering
* Подобрено: Поедноставен JavaScript со fallback за гранични случаи

Верзија: 1.3.1 - Објавено на 2026-01-26
* Поправено: Невидливиот режим на Cap Captcha не се решаваше автоматски на динамички Ultimate Multisite checkout forms
* Подобрено: Cap checkout script сега користи MutationObserver за детектирање динамички вчитани widgets
* Подобрено: Додадено е пресретнување на checkout button за да се почека token пред поднесување

Version: 1.3.0 - Објавено на 2026-01-27
* Ново: WooCommerce Blocks интеграција за checkout со Store API fetch пресретнување
* Ново: Поддршка за невидлива captcha за WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Ново: Самостојна страница за поставки за користење без Ultimate Multisite
* Ново: Jetpack Autoloader за спречување конфликти на зависности
* Поправено: hCaptcha не се прикажуваше на динамички Ultimate Multisite checkout (содржина вчитана преку AJAX)
* Поправено: Captcha не се освежуваше/ресетираше кога се појавуваат грешки при валидација на формулар
* Поправено: hCaptcha не се прикажуваше на WooCommerce checkout страница
* Поправено: Грешка „reCAPTCHA class not found“ (додадена google/recaptcha PHP библиотека)
* Подобрено: Откривање грешки преку WordPress куки, MutationObserver и AJAX пресретнување
* Подобрено: Описите на поставките сега вклучуваат Dashboard URL-адреси за API клучеви

Version: 1.2.2 - Објавено на 2026-01-24
* Поправено: Captcha не се прикажуваше на Ultimate Multisite Login Form Element (несовпаѓање на името на филтерот за формулар)
* Поправено: HTML-от на Cap widget се отстрануваше со wp_kses() санитизација
* Поправено: JavaScript селекторите не наоѓаа формулари со коси црти во ID-ата на елементите
* Додадено: Filter hook `wu_kses_allowed_html` за classaddons да ги прошируваат дозволените HTML ознаки
* Отстрането: Неактивни JavaScript датотеки заменети со скрипти специфични за провајдер

Version: 1.2.1 - Објавено на 2026-01-23

* Поправено: Валидацијата на Cap Captcha токени не успеваше во multisite околини (сега користи network-wide transients)
* Поправено: Captcha сега се прикажува доследно за сите корисници без разлика на статусот на најава
* Поправено: Несовпаѓање помеѓу прикажување и валидација на captcha што предизвикуваше неуспеси при checkout

Version: 1.2.0 - Објавено на 2026-01-21

* Ново: Cap Captcha - самостојно хостирана proof-of-work captcha, овозможена стандардно при активирање
* Ново: Заштита без конфигурација - активирајте го addon и веднаш сте заштитени
* Ново: Полиморфна архитектура на captcha провајдер за лесно проширување
* Ново: WooCommerce Store API checkout заштита од напади со тестирање картички
* Ново: Dashboard за следење статистика што прикажува предизвици, верификации и блокирани напади
* Ново: Претпоставени безбедносни нивоа (Fast, Medium, Max) за тежина на Cap Captcha
* Ново: Апстрактни базни класи за reCAPTCHA и hCaptcha провајдери
* Подобрено: Рефакторирана кодна база во модуларни класи на провајдери
* Подобрено: Подобра поделба на одговорности со посветена manager класа
* Fixed: Security improvements for $_SERVER variable sanitization
* Поправено: PHPUnit тест-конфигурација за WordPress конвенции за именување

Version: 1.0.1 - Објавено на 2025-09-28

* Преименуван префикс во ultimate-multisite; ажуриран text domain; зголемена верзија.
