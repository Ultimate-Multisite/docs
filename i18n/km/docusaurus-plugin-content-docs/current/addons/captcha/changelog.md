---
title: កំណត់ហេតុការផ្លាស់ប្ដូរ Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# កំណត់ហេតុផ្លាស់ប្តូរ Captcha {#captcha-changelog}

Version: 1.5.0 - ចេញផ្សាយនៅ 2026-05-22
* ថ្មី៖ ឧបករណ៍កំណត់អត្រាបែប hard-stop — រាប់រាល់ GET និង POST លើផ្ទៃដែលត្រូវបានការពារ​ដោយ captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ហើយឆ្លើយតបដោយ HTTP 429, `Retry-After` header និងការពន្យារពេល tarpit ចៃដន្យ (1–5 វិនាទី កំណត់អតិបរមាដាច់ខាត 15 វិនាទី)។
* ថ្មី៖ ការកំណត់ `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ដើម្បីកែសម្រួលចន្លោះពេល tarpit។
* ថ្មី៖ filter `wu_cap_rate_limit_whitelist_ip` ដើម្បីលើកលែងជួរ IP ដែលទុកចិត្ត។
* ថ្មី៖ action `wu_cap_rate_limit_will_block` ដែលដំណើរការភ្លាមៗ មុនពេលផ្ញើការឆ្លើយតប hard-stop។
* ថ្មី៖ ការរកឃើញ IP របស់អ្នកប្រើដែលធន់នឹងការក្លែងបន្លំ។ `Captcha_Core::get_client_ip()` (ប្រភពពិតសម្រាប់កូនសោ bucket កំណត់អត្រា, captcha siteverify `remoteip` និង hash IP ស្ថិតិ) ឥឡូវអនុវត្តម៉ូដែលទុកចិត្តយ៉ាងតឹងរ៉ឹង៖ REMOTE_ADDR ជាមូលដ្ឋាន, `CF-Connecting-IP` ត្រូវបានទទួលស្គាល់តែពេល peer ភ្លាមៗស្ថិតក្នុងជួរ IP Cloudflare បច្ចុប្បន្ន ហើយ `X-Forwarded-For` ត្រូវបានទទួលស្គាល់តែពេល peer ភ្លាមៗស្ថិតក្នុងបញ្ជី trusted-proxy ដែល admin កំណត់ ដោយដើរពីស្តាំទៅឆ្វេង រំលង hop ដែលទុកចិត្ត/CF មុននឹងកំណត់ IP អ្នកទស្សនា។
* ថ្មី៖ ការកំណត់ `cap_trust_cloudflare_headers` (លំនាំដើម បិទ) — ជ្រើសរើសទុកចិត្ត `CF-Connecting-IP` ពេលស្ថិតក្រោយ Cloudflare។ plugin ភ្ជាប់មកជាមួយ snapshot Cloudflare CIDR ហើយធ្វើបច្ចុប្បន្នភាពរៀងរាល់សប្តាហ៍តាម wp-cron ដោយមាន fallback ភ្ជាប់មកជាមួយ ប្រសិនបើការធ្វើបច្ចុប្បន្នភាពបរាជ័យ។
* ថ្មី៖ ការកំណត់ `cap_trusted_proxies` — textarea សម្រាប់ CIDR ឬ IP ទទេ (មួយក្នុងមួយបន្ទាត់ អនុញ្ញាត comment `#`) ដែលរាយ proxy / load-balancer ខាងមុខរបស់អ្នក។ បើគ្មានវា `X-Forwarded-For` នឹងត្រូវបានមិនអើពើ ទោះបីបើកឧបករណ៍កំណត់អត្រាក៏ដោយ។
* ថ្មី៖ ការរកឃើញស្វ័យប្រវត្តិពេលបើកដំបូង សម្រាប់ស្ថានភាព Cloudflare / proxy ដែលទំនង ជាមួយសេចក្តីជូនដំណឹង admin "អនុវត្តការកំណត់ដែលបានរកឃើញ" ចុចមួយដង។ plugin មិនដែលសរសេរជាន់លើតម្លៃដែលអ្នកបានរក្សាទុកទេ។ ប្រសិនបើចរាចរណ៍បន្ទាប់បង្ហាញថាការកំណត់របស់អ្នកលែងត្រូវនឹងស្ថានភាពពិត (ឧ. Cloudflare ប្តូរជួរ CIDR ហើយ proxy CIDR របស់អ្នកហួសសម័យ) សេចក្តីជូនដំណឹងអំពីភាពមិនត្រូវគ្នាដែលមិនអាចបិទបាន នឹងបង្ហាញការធ្វើបច្ចុប្បន្នភាពដែលបានណែនាំ។
* បានជួសជុល៖ របៀបមើលមិនឃើញលែងបន្ទាប `cap_security_level` ទៅ FAST ដោយស្ងាត់ៗទៀតហើយ — កម្រិតដែល admin បានកំណត់ត្រូវបានគោរព។ មាន filter ថ្មី `wu_cap_server_security_level` សម្រាប់គេហទំព័រដែលចង់បានតក្កវិជ្ជាផ្ទាល់ខ្លួន។
* បានជួសជុល៖ counter ស្ថិតិ `rate_limits_triggered` ឥឡូវកើនឡើងនៅរាល់ការទប់ស្កាត់ មិនមែនតែផ្លូវ backstop ក្រោយជោគជ័យដែលកម្រជួបនោះទេ។
* បានជួសជុល៖ `Captcha_Core::get_client_ip()` ឥឡូវជាប្រភពពិតតែមួយសម្រាប់ការកំណត់អត្តសញ្ញាណ IP អ្នកទស្សនា ទាំងក្នុងឧបករណ៍កំណត់អត្រា, អ្នកផ្តល់ captcha (reCAPTCHA + hCaptcha `siteverify`) និងស្ថិតិ — បិទចន្លោះក្លែងបន្លំមួយ ដែលសំណើទៅ origin-server ដោយផ្ទាល់ដែលមាន `CF-Connecting-IP` header ក្លែងក្លាយ អាចត្រូវបានដាក់ bucket តាម IP ក្លែងក្លាយ ជំនួសឱ្យ peer ពិត។
* បានជួសជុល៖ ច្រកកំណត់អត្រា WooCommerce classic checkout ឥឡូវដំណើរការនៅ `template_redirect` (priority 1) ជំនួស `woocommerce_before_checkout_form`។ hook កម្រិត form មិនដំណើរការទេពេលរទេះទទេ ដូច្នេះចរាចរណ៍ជន់លិចដែលមិនដែលបន្ថែមផលិតផល បានរំលងឧបករណ៍កំណត់អត្រាទាំងស្រុង។
* បានជួសជុល៖ ច្រកកំណត់អត្រា WooCommerce pay-for-order ឥឡូវដំណើរការនៅ `template_redirect` ជំនួស `woocommerce_before_pay_action`។ ចុងក្រោយនោះដំណើរការតែបន្ទាប់ពី `wp_verify_nonce('woocommerce-pay')` ជោគជ័យ ដែលមានន័យថាអ្នកវាយប្រហារមិនបានផ្ទៀងផ្ទាត់ (ម៉ូដែលគំរាមកំហែងពិត) មិនដែលប៉ះឧបករណ៍កំណត់អត្រា។
* បានជួសជុល៖ ច្រកកំណត់អត្រា WooCommerce Store API (blocks) checkout ឥឡូវដំណើរការនៅ `rest_pre_dispatch` ជំនួស `woocommerce_store_api_checkout_update_order_from_request`។ ចុងក្រោយនោះដំណើរការតែបន្ទាប់ពី Store API ផ្ទៀងផ្ទាត់រទេះ និង field វិក័យប័ត្រ ដូច្នេះ bot មិនបានផ្ទៀងផ្ទាត់ទទួល 400 ពី validator ហើយមិនដែលប៉ះឧបករណ៍កំណត់អត្រា។
* បានជួសជុល៖ ច្រកកំណត់អត្រា Ultimate Multisite inline-login ឥឡូវដំណើរការនៅ `wu_ajax_nopriv_wu_inline_login` priority 1 (និង mirror សម្រាប់អ្នកបានចូល) ជំនួស `wu_before_inline_login`។ ចុងក្រោយនោះដំណើរការតែបន្ទាប់ពី `check_ajax_referer('wu_checkout')` ជោគជ័យ ដូច្នេះ bot មិនបានផ្ទៀងផ្ទាត់ដែលគ្មាន wu_checkout nonce ត្រឹមត្រូវ បានទទួល 403 ហើយមិនដែលប៉ះឧបករណ៍កំណត់អត្រា។
* បានជួសជុល៖ `Rate_Limiter::enforce()` ឥឡូវអនុវត្ត guard ម្តងក្នុងមួយសំណើ ដោយប្រើកូនសោ `surface|ip` ដូច្នេះ hook ខាងលើដែលដំណើរការពីរដងក្នុងមួយ render (ជាពិសេស `wu_setup_checkout` ក្នុង Ultimate Multisite) លែងកាត់ពាក់កណ្តាលកម្រិតកំណត់អត្រាមានប្រសិទ្ធភាពទៀតហើយ។
* បានជួសជុល៖ ច្រកផ្ទៃកំណត់អត្រាលែងពិគ្រោះ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter) ទៀតហើយ។ filter នោះសម្គាល់ថា "captcha ត្រូវបានដោះស្រាយរួចដោយផ្ទៃមួយផ្សេង" ហើយមិនពាក់ព័ន្ធនឹងការការពារចរាចរណ៍ជន់លិចទេ — ការរួមបញ្ចូល WooCommerce បានភ្ជាប់វាដើម្បីរំលង WordPress login captcha ពេលមាន Woo nonce ដែលធ្វើឱ្យប៉ះពាល់ដល់ការរាប់អត្រា ហើយអនុញ្ញាតឱ្យ Woo POST រំលងឧបករណ៍កំណត់អត្រា។ filter ជាក់លាក់សម្រាប់កំណត់អត្រា `wu_cap_rate_limit_whitelist_ip` គឺជា bypass តែមួយគត់ដែលអនុវត្តឥឡូវនេះ។

Version: 1.3.2 - ចេញផ្សាយនៅ 2026-01-27
* បានជួសជុល៖ widget Cap មិនបង្ហាញលើ form checkout ដែលប្រើ Elementor ឬ page builder ផ្សេងៗ
* បានជួសជុល៖ custom element cap-widget ត្រូវបានលុបចេញដោយការសម្អាត wp_kses()
* បានកែលម្អ៖ ប្រើ content ដែលអាចហៅបាន សម្រាប់ field captcha checkout ដើម្បីរំលងការចម្រោះ HTML
* បានកែលម្អ៖ បង្រួម JavaScript ឱ្យសាមញ្ញជាមួយ fallback សម្រាប់ករណីពិសេស

Version: 1.3.1 - ចេញផ្សាយនៅ 2026-01-26
* បានជួសជុល៖ របៀបមើលមិនឃើញរបស់ Cap Captcha មិនដោះស្រាយដោយស្វ័យប្រវត្តិលើ form checkout Ultimate Multisite ដែលផ្លាស់ប្តូរថាមវន្ត
* បានកែលម្អ៖ script checkout របស់ Cap ឥឡូវប្រើ MutationObserver ដើម្បីរកឃើញ widget ដែលផ្ទុកបែបថាមវន្ត
* បានកែលម្អ៖ បានបន្ថែមការចាប់ប៊ូតុង checkout ដើម្បីរង់ចាំ token មុនពេលដាក់ស្នើ

កំណែ: 1.3.0 - ចេញផ្សាយនៅ 2026-01-27
* ថ្មី: ការរួមបញ្ចូល WooCommerce Blocks checkout ជាមួយការចាប់យក Store API fetch
* ថ្មី: គាំទ្រ captcha មើលមិនឃើញសម្រាប់ WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* ថ្មី: ទំព័រការកំណត់ដាច់ដោយឡែកសម្រាប់ប្រើដោយមិនចាំបាច់មាន Ultimate Multisite
* ថ្មី: Jetpack Autoloader សម្រាប់ការពារការប៉ះទង្គិច dependency
* បានជួសជុល: hCaptcha មិនបង្ហាញលើ Ultimate Multisite checkout ដែលផ្ទុកដោយ dynamic (មាតិកាផ្ទុកតាម AJAX)
* បានជួសជុល: Captcha មិនធ្វើឱ្យស្រស់/កំណត់ឡើងវិញ នៅពេលមានកំហុសផ្ទៀងផ្ទាត់ទម្រង់
* បានជួសជុល: hCaptcha មិនបង្ហាញលើទំព័រ WooCommerce checkout
* បានជួសជុល: កំហុសរកមិនឃើញ class reCAPTCHA (បានបន្ថែម library PHP google/recaptcha)
* បានកែលម្អ: ការរកឃើញកំហុសតាម WordPress hooks, MutationObserver, និងការចាប់យក AJAX
* បានកែលម្អ: សេចក្ដីពិពណ៌នាការកំណត់ឥឡូវរួមបញ្ចូល URL របស់ Dashboard សម្រាប់ API keys

កំណែ: 1.2.2 - ចេញផ្សាយនៅ 2026-01-24
* បានជួសជុល: Captcha មិនបង្ហាញលើ Ultimate Multisite Login Form Element (ឈ្មោះ form filter មិនត្រូវគ្នា)
* បានជួសជុល: HTML របស់ Cap widget ត្រូវបានដកចេញដោយការសម្អាត wp_kses()
* បានជួសជុល: JavaScript selectors រកមិនឃើញទម្រង់ដែលមានសញ្ញា slash ក្នុង element IDs
* បានបន្ថែម: Filter hook `wu_kses_allowed_html` សម្រាប់ classaddons ដើម្បីពង្រីក HTML tags ដែលអនុញ្ញាត
* បានដកចេញ: ឯកសារ JavaScript code ស្លាប់ ត្រូវបានជំនួសដោយ scripts ជាក់លាក់តាម provider

កំណែ: 1.2.1 - ចេញផ្សាយនៅ 2026-01-23

* បានជួសជុល: ការផ្ទៀងផ្ទាត់ token របស់ Cap Captcha បរាជ័យក្នុងបរិស្ថាន multisite (ឥឡូវប្រើ transients កម្រិតបណ្ដាញទាំងមូល)
* បានជួសជុល: ឥឡូវ Captcha បង្ហាញស្មើគ្នាសម្រាប់អ្នកប្រើទាំងអស់ មិនថាស្ថានភាពចូលគណនីយ៉ាងណាក៏ដោយ
* បានជួសជុល: ភាពមិនស៊ីគ្នារវាងការបង្ហាញ captcha និងការផ្ទៀងផ្ទាត់ ដែលបង្កឱ្យ checkout បរាជ័យ

កំណែ: 1.2.0 - ចេញផ្សាយនៅ 2026-01-21

* ថ្មី: Cap Captcha - captcha proof-of-work បង្ហោះដោយខ្លួនឯង បើកតាមលំនាំដើមនៅពេលដំណើរការ
* ថ្មី: ការការពារដោយគ្មានការកំណត់ - ដំណើរការ addon ហើយអ្នកនឹងត្រូវបានការពារភ្លាមៗ
* ថ្មី: រចនាសម្ព័ន្ធ provider captcha បែប polymorphic សម្រាប់ងាយពង្រីក
* ថ្មី: ការការពារ WooCommerce Store API checkout ប្រឆាំងនឹងការវាយប្រហារ card testing
* ថ្មី: Dashboard តាមដានស្ថិតិ ដែលបង្ហាញ challenges, verifications, និងការវាយប្រហារដែលត្រូវបានទប់ស្កាត់
* ថ្មី: Presets កម្រិតសុវត្ថិភាព (Fast, Medium, Max) សម្រាប់កម្រិតលំបាក Cap Captcha
* ថ្មី: Abstract base classes សម្រាប់ reCAPTCHA និង hCaptcha providers
* បានកែលម្អ: រៀបចំ codebase ឡើងវិញជាថ្នាក់ provider ម៉ូឌុល
* បានកែលម្អ: បំបែកភារកិច្ចបានល្អជាងមុនដោយមាន class គ្រប់គ្រងផ្ទាល់
* Fixed: Security improvements for $_SERVER variable sanitization
* បានជួសជុល: ការកំណត់រចនាសម្ព័ន្ធ PHPUnit test សម្រាប់ទម្លាប់ដាក់ឈ្មោះរបស់ WordPress

កំណែ: 1.0.1 - ចេញផ្សាយនៅ 2025-09-28

* ប្តូរឈ្មោះ prefix ទៅជា ultimate-multisite; ធ្វើបច្ចុប្បន្នភាព text domain; បង្កើនកំណែ។
