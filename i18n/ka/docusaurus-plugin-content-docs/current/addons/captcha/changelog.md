---
title: Captcha-ს ცვლილებების ჟურნალი
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha-ის ცვლილებების ჟურნალი

Version: 1.5.0 - გამოშვებულია 2026-05-22
* ახალი: მკაცრი rate limiter — ითვლის ყოველ GET-სა და POST-ს captcha-ით დაცულ ზედაპირებზე (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) და პასუხობს HTTP 429-ით, `Retry-After` header-ით და შემთხვევითად განსაზღვრული tarpit დაყოვნებით (1–5 წმ, მკაცრი ზედა ზღვარი 15 წმ).
* ახალი: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` პარამეტრები tarpit ფანჯრის დასარეგულირებლად.
* ახალი: `wu_cap_rate_limit_whitelist_ip` filter სანდო IP დიაპაზონების გასათავისუფლებლად.
* ახალი: `wu_cap_rate_limit_will_block` action, რომელიც ირთვება უშუალოდ მანამ, სანამ მკაცრი შეჩერების პასუხი გაიგზავნება.
* ახალი: გაყალბებისადმი მდგრადი client-IP-ის აღმოჩენა. `Captcha_Core::get_client_ip()` (ჭეშმარიტების წყარო rate-limit bucket გასაღებებისთვის, captcha siteverify `remoteip`-ისთვის და სტატისტიკის IP ჰეშებისთვის) ახლა მკაცრ ნდობის მოდელს იყენებს: REMOTE_ADDR არის საწყისი საფუძველი, `CF-Connecting-IP` მიიღება მხოლოდ მაშინ, როცა უშუალო peer მიმდინარე Cloudflare IP დიაპაზონშია, ხოლო `X-Forwarded-For` მიიღება მხოლოდ მაშინ, როცა უშუალო peer admin-ის მიერ კონფიგურირებულ trusted-proxy სიაშია, მარჯვნიდან მარცხნივ გავლით, რომელიც გამოტოვებს სანდო/CF ჰოპებს, სანამ ვიზიტორის IP-ზე შეჩერდება.
* ახალი: `cap_trust_cloudflare_headers` პარამეტრი (ნაგულისხმევად OFF) — ჩართეთ `CF-Connecting-IP` ნდობა Cloudflare-ის უკან ყოფნისას. plugin-ს მოყვება ჩაშენებული Cloudflare CIDR snapshot და მას ყოველკვირეულად აახლებს wp-cron-ის მეშვეობით, ჩაშენებული fallback-ით, თუ განახლება ვერ მოხერხდება.
* ახალი: `cap_trusted_proxies` პარამეტრი — CIDR-ების ან შიშველი IP-ების textarea (თითო ხაზზე ერთი, `#` კომენტარები დაშვებულია), რომელიც ჩამოთვლის თქვენს საკუთარ წინა ხაზის proxy-ებს / load-balancer-ებს. ამის გარეშე `X-Forwarded-For` იგნორირებულია მაშინაც კი, როცა rate limiter ჩართულია.
* ახალი: პირველი ჩართვისას სავარაუდო Cloudflare / proxy მდგომარეობის ავტომატური აღმოჩენა ერთკლიკიანი "აღმოჩენილი პარამეტრების გამოყენება" admin შეტყობინებით. plugin არასოდეს გადაწერს თქვენს შენახულ მნიშვნელობებს; თუ შემდგომი traffic მიანიშნებს, რომ თქვენი კონფიგურაცია რეალობას აღარ ემთხვევა (მაგ. Cloudflare-მა CIDR დიაპაზონები შეცვალა და თქვენი proxy CIDR ახლა მოძველებულია), გამოჩნდება არამოხსნადი შეუსაბამობის შეტყობინება რეკომენდებული განახლებით.
* გასწორებულია: Invisible რეჟიმი აღარ აქვეითებს ჩუმად `cap_security_level`-ს FAST-მდე — admin-ის მიერ კონფიგურირებული დონე პატივცემულია. ხელმისაწვდომია ახალი `wu_cap_server_security_level` filter იმ საიტებისთვის, რომლებსაც მორგებული ლოგიკა სურთ.
* გასწორებულია: სტატისტიკის `rate_limits_triggered` მრიცხველი ახლა იზრდება ყოველ block-ზე და არა მხოლოდ იშვიათ post-success backstop გზაზე.
* გასწორებულია: `Captcha_Core::get_client_ip()` ახლა არის ჭეშმარიტების ერთადერთი წყარო ვიზიტორის IP-ის ატრიბუციისთვის rate limiter-ში, captcha providers-ში (reCAPTCHA + hCaptcha `siteverify`) და სტატისტიკაში — იხურება გაყალბების ვექტორი, სადაც direct origin-server მოთხოვნები გაყალბებული `CF-Connecting-IP` header-ით bucket-ში მოხვდებოდა გაყალბებული IP-ით, რეალური peer-ის ნაცვლად.
* გასწორებულია: WooCommerce კლასიკური checkout-ის rate-limit gate ახლა ირთვება `template_redirect`-ზე (priority 1) `woocommerce_before_checkout_form`-ის ნაცვლად. ფორმის დონის hook არასოდეს ირთვება, როცა cart ცარიელია, ამიტომ flood traffic, რომელიც product-ს არასოდეს ამატებდა, limiter-ს მთლიანად უვლიდა გვერდს.
* გასწორებულია: WooCommerce pay-for-order rate-limit gate ახლა ირთვება `template_redirect`-ზე `woocommerce_before_pay_action`-ის ნაცვლად. ეს უკანასკნელი ირთვება მხოლოდ მას შემდეგ, რაც `wp_verify_nonce('woocommerce-pay')` წარმატებულია, რაც ნიშნავს, რომ unauth თავდამსხმელები (რეალური საფრთხის მოდელი) limiter-ს არასოდეს ააქტიურებდნენ.
* გასწორებულია: WooCommerce Store API (blocks) checkout rate-limit gate ახლა ირთვება `rest_pre_dispatch`-ზე `woocommerce_store_api_checkout_update_order_from_request`-ის ნაცვლად. ეს უკანასკნელი ირთვება მხოლოდ მას შემდეგ, რაც Store API cart-სა და billing ველებს დაადასტურებს, ამიტომ unauth ბოტები validator-ისგან 400-ს იღებდნენ და limiter-ს არასოდეს ააქტიურებდნენ.
* გასწორებულია: Ultimate Multisite inline-login rate-limit gate ახლა ირთვება `wu_ajax_nopriv_wu_inline_login` priority 1-ზე (და logged-in mirror-ზე) `wu_before_inline_login`-ის ნაცვლად. ეს უკანასკნელი ირთვება მხოლოდ მას შემდეგ, რაც `check_ajax_referer('wu_checkout')` წარმატებულია, ამიტომ unauth ბოტები valid wu_checkout nonce-ის გარეშე 403-ს იღებდნენ და limiter-ს არასოდეს ააქტიურებდნენ.
* გასწორებულია: `Rate_Limiter::enforce()` ახლა იყენებს once-per-request guard-ს, რომელიც `surface|ip`-ით არის keyed, ამიტომ upstream hooks, რომლებიც render-ზე ორჯერ ირთვება (განსაკუთრებით `wu_setup_checkout` Ultimate Multisite-ში), აღარ ანახევრებს ეფექტურ rate-limit threshold-ს.
* გასწორებულია: Rate-limit surface gates აღარ მიმართავს `Captcha_Core::is_whitelisted()`-ს (`wu_captcha_whitelisted` filter). ეს filter მიუთითებს "captcha უკვე დამუშავებულია სხვა ზედაპირის მიერ" და flood დაცვისგან დამოუკიდებელია — WooCommerce integration მას იყენებდა WordPress login captcha-ს გამოსატოვებლად, როცა Woo nonce არსებობდა, რაც rate counting-ში გადადიოდა და Woo POST-ებს limiter-ის თავიდან აცილების საშუალებას აძლევდა. rate-limit-სპეციფიკური `wu_cap_rate_limit_whitelist_ip` filter არის ერთადერთი bypass, რომელიც ახლა მოქმედებს.

Version: 1.3.2 - გამოშვებულია 2026-01-27
* გასწორებულია: Cap widget არ რენდერდებოდა checkout ფორმებზე, რომლებიც Elementor-ს ან სხვა page builder-ებს იყენებდა
* გასწორებულია: cap-widget custom element იშლებოდა wp_kses() sanitization-ის მიერ
* გაუმჯობესებულია: checkout captcha field-ისთვის callable content-ის გამოყენება HTML filtering-ის გვერდის ავლისთვის
* გაუმჯობესებულია: გამარტივებული JavaScript fallback-ით edge case-ებისთვის

Version: 1.3.1 - გამოშვებულია 2026-01-26
* გასწორებულია: Cap Captcha invisible mode ავტომატურად არ წყდებოდა დინამიკურ Ultimate Multisite checkout ფორმებზე
* გაუმჯობესებულია: Cap checkout script ახლა იყენებს MutationObserver-ს დინამიკურად ჩატვირთული widgets-ის აღმოსაჩენად
* გაუმჯობესებულია: დაემატა checkout button interception, რათა submission-მდე token-ს დაელოდოს

Version: 1.3.0 - გამოშვებულია 2026-01-27
* ახალი: WooCommerce Blocks გადახდის გვერდის ინტეგრაცია Store API fetch ჩაჭერით
* ახალი: უხილავი captcha მხარდაჭერა WooCommerce გადახდის გვერდისთვის (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* ახალი: დამოუკიდებელი პარამეტრების გვერდი Ultimate Multisite-ის გარეშე გამოყენებისთვის
* ახალი: Jetpack Autoloader დამოკიდებულებათა კონფლიქტების თავიდან ასაცილებლად
* გასწორებულია: hCaptcha არ გამოისახებოდა დინამიკურ Ultimate Multisite გადახდის გვერდზე (AJAX-ით ჩატვირთული კონტენტი)
* გასწორებულია: Captcha არ ახლდებოდა/არ ნულდებოდა, როდესაც ფორმის ვალიდაციის შეცდომები ხდებოდა
* გასწორებულია: hCaptcha არ ჩანდა WooCommerce გადახდის გვერდზე
* გასწორებულია: reCAPTCHA კლასის ვერ პოვნის შეცდომა (დამატებულია google/recaptcha PHP ბიბლიოთეკა)
* გაუმჯობესებულია: შეცდომების აღმოჩენა WordPress hooks-ის, MutationObserver-ისა და AJAX ჩაჭერის მეშვეობით
* გაუმჯობესებულია: პარამეტრების აღწერებში ახლა შედის dashboard URL-ები API keys-ისთვის

Version: 1.2.2 - გამოშვებულია 2026-01-24
* გასწორებულია: Captcha არ გამოისახებოდა Ultimate Multisite Login Form Element-ზე (ფორმის ფილტრის სახელის შეუსაბამობა)
* გასწორებულია: Cap widget HTML იშლებოდა wp_kses() სანიტიზაციით
* გასწორებულია: JavaScript selectors ვერ პოულობდა ფორმებს, რომელთა ელემენტის ID-ებში სლეშებია
* დამატებულია: Filter hook `wu_kses_allowed_html` classaddons-ისთვის ნებადართული HTML tags-ის გასაფართოებლად
* წაშლილია: გამოუყენებელი JavaScript ფაილები ჩანაცვლდა provider-specific scripts-ით

Version: 1.2.1 - გამოშვებულია 2026-01-23

* გასწორებულია: Cap Captcha token-ის ვალიდაცია ვერ ხერხდებოდა multisite გარემოებში (ახლა იყენებს network-wide transients-ს)
* გასწორებულია: Captcha ახლა თანმიმდევრულად გამოისახება ყველა მომხმარებლისთვის, login სტატუსის მიუხედავად
* გასწორებულია: შეუსაბამობა captcha-ის გამოსახვასა და ვალიდაციას შორის, რაც იწვევდა გადახდის წარუმატებლობას

Version: 1.2.0 - გამოშვებულია 2026-01-21

* ახალი: Cap Captcha - თვითჰოსტირებული proof-of-work captcha, ჩართულია ნაგულისხმევად აქტივაციისას
* ახალი: ნულოვანი კონფიგურაციის დაცვა - გაააქტიურეთ addon და დაუყოვნებლივ დაცული ხართ
* ახალი: პოლიმორფული captcha provider არქიტექტურა მარტივი გაფართოებადობისთვის
* ახალი: WooCommerce Store API გადახდის დაცვა ბარათების ტესტირების შეტევებისგან
* ახალი: სტატისტიკის თვალთვალის dashboard, რომელიც აჩვენებს challenges-ს, verifications-ს და დაბლოკილ შეტევებს
* ახალი: უსაფრთხოების დონის წინასწარი პარამეტრები (Fast, Medium, Max) Cap Captcha difficulty-სთვის
* ახალი: აბსტრაქტული საბაზო კლასები reCAPTCHA და hCaptcha providers-ისთვის
* გაუმჯობესებულია: კოდბაზა გადაკეთდა მოდულურ provider კლასებად
* გაუმჯობესებულია: პასუხისმგებლობების უკეთესი გამიჯვნა გამოყოფილი manager class-ით
* Fixed: Security improvements for $_SERVER variable sanitization
* გასწორებულია: PHPUnit test configuration WordPress naming conventions-ისთვის

Version: 1.0.1 - გამოშვებულია 2025-09-28

* პრეფიქსის გადარქმევა ultimate-multisite-ად; text domain-ის განახლება; ვერსიის აწევა.
