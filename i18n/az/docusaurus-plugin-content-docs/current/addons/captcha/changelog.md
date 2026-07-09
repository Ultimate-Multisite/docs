---
title: Captcha Changelog
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Dəyişiklikləri Siyahısı {#captcha-changelog}

Versiya: 1.5.0 - Yayın tarixi: 2026-05-22
* Yeni: Hard-stop tezlik məhdudlaşdırıcısı — captcha ilə qorunan səhifələrdə (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) hər GET və POST sorğusunu sayır və HTTP 429, bir `Retry-After` başlıqı və təsadüfi bir "tarpit" yuxusu (1–5 saniyə, maksimum 15 saniyə) ilə cavab verir.
* Yeni: Tarpit pəncərəsinin tənzimlənməsi üçün `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ayarları.
* Yeni: Etibar edilən IP diapazonlarını istisna etmək üçün `wu_cap_rate_limit_whitelist_ip` filtri.
* Yeni: Hard-stop cavabı göndərilməzdən dərhal əvvəl işə düşən `wu_cap_rate_limit_will_block` eylemi.
* Yeni: Spoof-ə davamlı müştəri IP-sinin aşkarlanması. `Captcha_Core::get_client_ip()` (tezlik məhdudlaşdırma küfləri üçün mənbə həqiqəti, captcha siteverify `remoteip` və statistik IP hashləri) indi sərt bir etibar modelini tətbiq edir: REMOTE_ADDR ən aşağı səviyyədir, `CF-Connecting-IP` yalnız dərhal cəhinin cari Cloudflare IP diapazonunda olması zamanı nəzərə alınır və `X-Forwarded-For` yalnız dərhal cəhinin admin tərəfindən konfiqurasiya edilmiş etibarlı-proxy siyahısında olması zamanı nəzərə alınır. Bu, etibarlı/CF addımlarını atlayaraq və ziyarətçi IP-sinə fokuslanaraq sağdan sola doğru bir yoxlamadır.
* Yeni: `cap_trust_cloudflare_headers` ayarı (default OFF) — Cloudflare arxasında olduğunuz zaman `CF-Connecting-IP` etibarını aktivləşdirmək üçün. Plugin, Cloudflare CIDR snapshot-ını paketləyir və bu snapshot-ı yeniləmə uğursuz olsa belə, wp-cron vasitəsilə hər həftə yeniləyir.
* Yeni: `cap_trusted_proxies` ayarı — öz ön xətt proxy-lərinizi / load-balancer-lərinizi siyahılayan CIDR və ya sadə IP-lərin (hər biri bir sətirdə, `#` şərhləri icazəlidir) daxil ediləcəyi bir textarea. Bu ayar olmadan, tezlik məhdudlaşdırıcısı aktiv olsa belə, `X-Forwarded-For` nəzərə alınmır.
* Yeni: Ehtimal olunan Cloudflare / proxy vəziyyətinin ilk aktivləşdirmədə avtomatik aşkarlanması və bir kliklə "Aşkarlanmış ayarları tətbiq et" admin bildirişi. Plugin heç vaxt yadda saxladığınız dəyərləri dəyişdirmir; əgər sonrakı trafik konfiqurasiyanızın artıq reallıqla uyğun gəlmədiyini göstərirsə (məsələn, Cloudflare CIDR diapazonlarını dəyişibsə və proxy CIDR-iniz köhnəlmişdirsə), yoxlanıla bilməyən bir uyğunsuzluq bildirişi tövsiyə olunan yeniləməni göstərir.
* Düzəldildi: Görünməz rejim artıq `cap_security_level`-i səssizcə FAST-a aşağı salmır — admin tərəfindən konfiqurasiya edilmiş səviyyə qorunur. Xüsusi məntiq istəyən saytlar üçün yeni bir `wu_cap_server_security_level` filtri mövcuddur.
* Düzəldildi: Statistik `rate_limits_triggered` sayğacı indi hər bloklanmada, yalnız nadir post-uğur geri dayanma yolunda deyil, artırılır.
* Düzəldildi: `Captcha_Core::get_client_ip()` indi tezlik məhdudlaşdırıcısı, captcha provayderləri (reCAPTCHA + hCaptcha `siteverify`) və statistikalar üçün ziyarətçi IP-sinin yeganə mənbə həqiqətidir — bu, bir spoofing vektorunu bağlayır, çünki birbaşa origin-server sorğuları təhrif edilmiş `CF-Connecting-IP` başlıqı daşıyaraq, əsl cəhiyyət əvəzinə spoof edilmiş IP tərəfindən küflənməyə bilərdi.
* Düzəldildi: WooCommerce klassik checkout tezlik məhdudlaşdırma qapısı indi `woocommerce_before_checkout_form` əvəzinə `template_redirect` (prioritet 1) zamanı işə düşür. Bu form səviyyəli hook, səbət boş olduqda heç vaxt işə düşmür, buna görə də məhsul əlavə etməyən yağış trafiqi məhdudlaşdırıcını tamamilə atlayırdı.
* Düzəldildi: WooCommerce pay-for-order tezlik məhdudlaşdırma qapısı indi `woocommerce_before_pay_action` əvəzinə `template_redirect` zamanı işə düşür. Sonuncu yalnız `wp_verify_nonce('woocommerce-pay')` uğurla baş verdikdən sonra işə düşür, bu da o deməkdir ki, autentifikasiya edilməmiş hücumçılar (əsl təhdid modeli) heç vaxt məhdudlaşdırıcıyı tetikləmirdi.
* Düzəldildi: WooCommerce Store API (bloklar) checkout tezlik məhdudlaşdırma qapısı indi `woocommerce_store_api_checkout_update_order_from_request` əvəzinə `rest_pre_dispatch` zamanı işə düşür. Sonuncu yalnız Store API səbəti və fakturalama sahələrini təsdiqlədikdən sonra işə düşür, buna görə də autentifikasiya edilməmiş botlar validatordan 400 alırdı və məhdudlaşdırıcıyı heç vaxt tetikləmirdi.
* Düzəldildi: Ultimate Multisite inline-login tezlik məhdudlaşdırma qapısı indi `wu_before_inline_login` əvəzinə `wu_ajax_nopriv_wu_inline_login` prioritet 1 zamanı işə düşür (və giriş etmiş əksidir). Sonuncu yalnız `check_ajax_referer('wu_checkout')` uğurla baş verdikdən sonra işə düşür, buna görə də düzgün wu_checkout nonce-u olmayan autentifikasiya edilməmiş botlar 403 alırdı və məhdudlaşdırıcıyı heç vaxt tetikləmirdi.
* Düzəldildi: `Rate_Limiter::enforce()` indi `surface|ip` ilə açarı verilən, sorğu başına bir dəfə qoruyucu tətbiq edir, beləliklə yuxarı axın hook-ları ki, render zamanı iki dəfə işə düşür (xüsusilə Ultimate Multisite-də `wu_setup_checkout`), effektiv tezlik məhdudlaşdırma həddini yarıya salmır.
* Düzəldildi: Tezlik məhdudlaşdırma səhifə qapıları artıq `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filtri) ilə məsləhət görmür. Bu filtri "captcha artıq başqa bir səhifə tərəfindən idarə olunur" siqnalı verir və yağışdan qorunmadan müstəqildir — WooCommerce inteqrasiyası, Woo nonce-u mövcud olduqda WordPress giriş captcha-sını atlamaq üçün ona qoşulmuşdu, bu da tezlik sayına sızırdı və Woo POST-larının məhdudlaşdırıcıdan yayınmasına səbəb olurdu. İndi tətbiq olunan yeganə bypass, tezlik məhdudlaşdırması ilə bağlı `wu_cap_rate_limit_whitelist_ip` filtri olaraq qalır.

Versiya: 1.3.2 - Yayın tarixi: 2026-01-27
* Düzəldildi: Elementor və ya digər səhifə qurucuları istifadə edən checkout formalarında Cap widget-ı render olunmurdu.
* Düzəldildi: cap-widget, wp_kses() sanitasiyası tərəfindən silinirdi.
* İyiləşdirildi: Checkout captcha sahəsi üçün çağırılan məzmun (callable content) istifadə edilməsi, HTML filtrləməsinin atlanmasına kömək edir.
* İyiləşdirildi: Edge halları üçün fallback ilə JavaScript sadələşdirildi.

Versiya: 1.3.1 - Yayın tarixi: 2026-01-26
* Düzəldildi: Cap Captcha görünməz rejimi dinamik Ultimate Multisite checkout formalarında avtomatik həll olunmurdu.
* İyiləşdirildi: Cap checkout skripti indi dinamik yüklənən widget-ları aşkarlamak üçün MutationObserver istifadə edir.
* İyiləşdirildi: Göndərilməzdən əvvəl token gözləmək üçün checkout düyməsi yüngülləşdirildi.

Versiya: 1.3.0 - Yayın tarixi: 2026-01-27
* Yeni: WooCommerce Blocks checkout inteqrasiyası Store API fetch interceptor-u ilə.
* Yeni: WooCommerce checkout üçün görünməz captcha dəstəyi (hCaptcha görünməz, reCAPTCHA v2 görünməz, v3).
* Yeni: Ultimate Multisite olmadan istifadə üçün müstəqil ayarlar səhifəsi.
* Yeni: Dependency conflict-i (asılılıq münaqişəsi) qarşısını almaq üçün Jetpack Autoloader.
* Düzəldildi: hCaptcha dinamik Ultimate Multisite checkout-da (AJAX-yüklənən məzmun) render olunmurdu.
* Düzəldildi: Form validasiyası xətaları baş verdikdə Captcha yenilənmir/sıfırlanmırdı.
* Düzəldildi: hCaptcha WooCommerce checkout səhifəsində göstərilmirdi.
* Düzəldildi: reCAPTCHA class not found xətası (google/recaptcha PHP kitabxanası əlavə edildi).
* İyiləşdirildi: WordPress hook-ları, MutationObserver və AJAX interceptor-u vasitəsilə xəta aşkarlanması.
* İyiləşdirildi: Ayarlar təsvirlərinə API açarları üçün dashboard URL-ləri daxil edildi.

Versiya: 1.2.2 - Yayın tarixi: 2026-01-24
* Düzəldildi: Captcha Ultimate Multisite Login Form Element-ında göstərilmirdi (form filtri adı uyğunsuzluğu).
* Düzəldildi: Cap widget HTML-i wp_kses() sanitasiyası tərəfindən silinirdi.
* Düzəldildi: JavaScript selector-ları element ID-lərində slash olan formaları tapa bilmirdi.
* Əlavə edildi: classaddons üçün icazə verilən HTML tag-larını genişləndirmək üçün `wu_kses_allowed_html` filtri hook-u.
* Silindi: Ölü kod JavaScript faylları provayderə xas skriptlər ilə əvəz edildi.

Versiya: 1.2.1 - Yayın tarixi: 2026-01-23

* Düzəldildi: Multisite mühitlərində Cap Captcha token validasiyası uğursuz olurdu (indi şəbəkə genişləndirilmiş transient-dən istifadə edir).
* Düzəldildi: Captcha indi giriş statusundan asılı olmayaraq bütün istifadəçilər üçün sabit şəkildə render olunur.
* Düzəldildi: Checkout uğursuzluğuna səbəb olan captcha render edilməsi və validasiyası arasındakı uyğunsuzluq.

Versiya: 1.2.0 - Yayın tarixi: 2026-01-21

* Yeni: Cap Captcha - öz-yerdə barındırılan proof-of-work captcha, aktivləşdirmə zamanı default olaraq aktivdir.
* Yeni: Sıfır-konfiqurasiya qorunması - addon-u aktivləşdirin və dərhal qorunursunuz.
* Yeni: Asan genişlənmə üçün polimorfik captcha provayder arxitekturası.
* Yeni: WooCommerce Store API checkout-u kart testləmə hücumlarına qarşı qorunması.
* Yeni: Challenge, verifikasiya və bloklanmış hücumları göstərən statistik izləmə dashboard-u.
* Yeni: Cap Captcha çətinliyi üçün təsir səviyyələri (Fast, Medium, Max).
* Yeni: reCAPTCHA və hCaptcha provayderləri üçün abstrakt baz klaslar.
* İyiləşdirildi: Kod bazası modulyar provayder siniflərə riyazə edildi.
* İyiləşdirildi: Xüsusi menecer sinifi ilə məsuliyyətlərin daha yaxşı ayrılması.
* Düzəldildi: $_SERVER dəyişəni sanitasiyası üçün təhlükəsizlik təkmilləşdirmələri.
* Düzəldildi: WordPress adlandırma konvensiyaları üçün PHPUnit test konfiqurasiyası.

Versiya: 1.0.1 - Yayın tarixi: 2025-09-28

* Prefiks adını ultimate-multisite olaraq dəyişdi; text domain-i yeniləndi; versiya artırıldı.
