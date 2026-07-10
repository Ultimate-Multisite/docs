---
title: Captcha Değişiklik Geçmişi
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Değişiklik Geçmişi {#captcha-changelog}

Sürüm: 1.5.0 - Yayınlanma Tarihi: 2026-05-22
* Yeni: Sert durdurmalı rate limiter (hız sınırlayıcı) — captcha korumalı tüm GET ve POST isteklerini (wp-login / register / lost-password / yorumlar, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) sayar ve HTTP 429, bir `Retry-After` başlığı ve rastgele bir tarpit uykusu (1–5 saniye, maksimum 15 saniye ile sınırlandırılmış) ile yanıt verir.
* Yeni: Tarpit penceresini ayarlamak için `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ayarları.
* Yeni: Güvenilen IP aralıklarını hariç tutmak için `wu_cap_rate_limit_whitelist_ip` filtresi.
* Yeni: Sert durdurma yanıtı gönderilmeden hemen önce tetiklenen `wu_cap_rate_limit_will_block` eylemi.
* Yeni: Spoof'a karşı dirençli client-IP algılama. `Captcha_Core::get_client_ip()` (rate-limit kovası anahtarları, captcha siteverify `remoteip` ve istatistik IP hash'leri için doğruluk kaynağı) artık katı bir güven modeli uyguluyor: REMOTE_ADDR tabanı oluşturur, `CF-Connecting-IP` yalnızca anlık eş (peer) mevcut bir Cloudflare IP aralığındaysa dikkate alınır ve `X-Forwarded-For` yalnızca anlık eş yönetici tarafından yapılandırılmış güvenilir proxy listesindeyse dikkate alınır. Bu süreç, güvenilir/CF atlamalarını atlayarak ve ziyaretçi IP'sine odaklanarak sağdan sola doğru ilerler.
* Yeni: `cap_trust_cloudflare_headers` ayarı (varsayılan olarak KAPALI) — Cloudflare arkasında iken `CF-Connecting-IP` güvenliğine geçiş yapmanızı sağlar. Eklenti, Cloudflare CIDR anlık görüntüsünü paketlenmiş olarak içerir ve bu görüntü başarısız olursa, paketlenmiş bir yedekleme ile wp-cron aracılığıyla haftalık olarak yenilenir.
* Yeni: `cap_trusted_proxies` ayarı — Kendi ön cephe proxy'lerinizi / yük dengeleyicilerinizi listeleyen CIDR veya ham IP'ler (her biri bir satırda, `#` yorumları izin verilir) içeren bir textarea. Bu ayar olmadan, rate limiter etkinleştirilmiş olsa bile `X-Forwarded-For` dikkate alınmaz.
* Yeni: Olası Cloudflare / proxy durumunun otomatik algılanması ve tek tıkla "Algılanan ayarları uygula" yönetici bildirimi. Eklenti, kaydettiğiniz değerleri asla geçersiz kılmaz; sonraki trafik, yapılandırmanızın artık gerçeklikle eşleşmediğini gösterirse (örneğin Cloudflare CIDR aralıklarını değiştirdiyse ve proxy CIDR'ınız artık güncel değilse), düzeltilmesi gereken önerilen güncellemeyi gösteren, kapatılamayan bir uyarı belirir.
* Düzenlendi: Görünmez mod artık `cap_security_level`'ı sessizce FAST'a düşürmüyor — yönetici tarafından yapılandırılan seviye korunuyor. Özel mantık isteyen siteler için yeni bir `wu_cap_server_security_level` filtresi mevcuttur.
* Düzenlendi: İstatistik `rate_limits_triggered` sayacı artık yalnızca nadir bir başarı sonrası geri dönüş yolunda değil, her engellemede artıyor.
* Düzenlendi: `Captcha_Core::get_client_ip()` artık rate limiter, captcha sağlayıcıları (reCAPTCHA + hCaptcha `siteverify`) ve istatistikler genelinde ziyaretçi IP'si ataması için tek doğruluk kaynağıdır — doğrudan origin-server istekleri ile sahte `CF-Connecting-IP` başlığı taşıyan ve gerçek eş yerine sahte IP tarafından kovalanacak bir spoofing vektörünü kapatır.
* Düzenlendi: WooCommerce klasik checkout rate-limit kapısı artık `woocommerce_before_checkout_form` yerine `template_redirect` (öncelik 1) üzerinde tetikleniyor. Form seviyesindeki hook, sepet boş olduğunda asla tetiklenmediği için, ürün eklemeyen sel trafiği limitleyiciden tamamen kaçırıyordu.
* Düzenlendi: WooCommerce pay-for-order rate-limit kapısı artık `woocommerce_before_pay_action` yerine `template_redirect` üzerinde tetikleniyor. Sonuncusu yalnızca `wp_verify_nonce('woocommerce-pay')` başarılı olduktan sonra tetikleniyor, bu da yetkisiz saldırganların (asıl tehdit modeli) limitleyiciyi asla tetiklemediği anlamına geliyordu.
* Düzenlendi: WooCommerce Store API (bloklar) checkout rate-limit kapısı artık `woocommerce_store_api_checkout_update_order_from_request` yerine `rest_pre_dispatch` üzerinde tetikleniyor. Sonuncusu yalnızca Store API sepeti ve fatura alanlarını doğruladıktan sonra tetikleniyor, bu yüzden yetkisiz botlar doğrulayıcıdan 400 alıyor ve limitleyiciyi asla tetiklemiyordu.
* Düzenlendi: Ultimate Multisite inline-login rate-limit kapısı artık `wu_before_inline_login` yerine `wu_ajax_nopriv_wu_inline_login` öncelik 1 üzerinde tetikleniyor (ve giriş yapmış yansıması). Sonuncusu yalnızca `check_ajax_referer('wu_checkout')` başarılı olduktan sonra tetikleniyordu, bu yüzden geçerli bir wu_checkout nonce'u olmayan yetkisiz botlar 403 alıyor ve limitleyiciyi asla tetiklemiyordu.
* Düzenlendi: `Rate_Limiter::enforce()` artık `surface|ip` anahtarı ile yalnızca bir istek başına koruma uyguluyor, böylece render başına iki kez tetiklenen yukarı akış hook'ları (özellikle Ultimate Multisite'ta `wu_setup_checkout`) etkin rate-limit eşiğini yarıya düşürmüyor.
* Düzenlendi: Rate-limit yüzey kapıları artık `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filtresi) kontrol etmiyor. Bu filtre "captcha başka bir yüzey tarafından zaten ele alındı" sinyali verir ve sel korumasından bağımsızdır — WooCommerce entegrasyonu, bir Woo nonce'u mevcut olduğunda WordPress giriş captcha'sını atlamak için bunu hook'lamıştı, bu da rate sayımına sızarak Woo POST'larının limitleyiciden kaçmasına neden oluyordu. Artık tek geçerli atlama, rate-limit'e özel `wu_cap_rate_limit_whitelist_ip` filtresidir.

Sürüm: 1.3.2 - Yayınlanma Tarihi: 2026-01-27
* Düzenlendi: Elementor veya diğer sayfa oluşturucular kullanan checkout formlarında Cap widget'ı render olmuyordu.
* Düzenlendi: cap-widget özel elemanı wp_kses() sanitizasyonu tarafından kaldırılıyordu.
* Geliştirildi: HTML filtrelemesini atlamak için checkout captcha alanı için çağrılabilir içerik kullanıldı.
* Geliştirildi: Kenar durumlar için yedeklemeli basitleştirilmiş JavaScript.

Sürüm: 1.3.1 - Yayınlanma Tarihi: 2026-01-26
* Düzenlendi: Cap Captcha görünmez modu, dinamik Ultimate Multisite checkout formlarında otomatik çözülmüyordu.
* Geliştirildi: Cap checkout script'i artık dinamik olarak yüklenen widget'ları algılamak için MutationObserver kullanıyor.
* Geliştirildi: Gönderimden önce token beklemek için checkout düğmesi kesintisi eklendi.

Sürüm: 1.3.0 - Yayınlanma Tarihi: 2026-01-27
* Yeni: Store API çekme kesintisi ile WooCommerce Blocks checkout entegrasyonu.
* Yeni: WooCommerce checkout için görünmez captcha desteği (hCaptcha görünmez, reCAPTCHA v2 görünmez, v3).
* Yeni: Ultimate Multisite olmadan kullanmak için bağımsız ayarlar sayfası.
* Yeni: Bağımlılık çakışmalarını önlemek için Jetpack Autoloader.
* Düzenlendi: Dinamik Ultimate Multisite checkout'ında hCaptcha render olmuyordu (AJAX ile yüklenen içerik).
* Düzenlendi: Form doğrulama hataları oluştuğunda Captcha yenilenmiyor/sıfırlanmıyordu.
* Düzenlendi: hCaptcha WooCommerce checkout sayfasında görünmüyordu.
* Düzenlendi: reCAPTCHA sınıfı bulunamadı hatası (google/recaptcha PHP kütüphanesi eklendi).
* Geliştirildi: WordPress hook'ları, MutationObserver ve AJAX kesintisi yoluyla hata algılama.
* Geliştirildi: Ayarlar açıklamalarına API anahtarları için dashboard URL'leri eklendi.

Sürüm: 1.2.2 - Yayınlanma Tarihi: 2026-01-24
* Düzenlendi: Ultimate Multisite Login Form Element'ında Captcha görünmüyordu (form filtresi adı eşleşmemesi).
* Düzenlendi: Cap widget HTML'i wp_kses() sanitizasyonu tarafından kaldırılıyordu.
* Düzenlendi: JavaScript seçicileri, element ID'lerinde eğik çizgi bulunan formları bulamıyordu.
* Eklendi: classaddons'un izin verilen HTML etiketlerini genişletmesi için `wu_kses_allowed_html` filtre hook'u.
* Kaldırıldı: Ölü kod JavaScript dosyaları, sağlayıcıya özel scriptlerle değiştirildi.

Sürüm: 1.2.1 - Yayınlanma Tarihi: 2026-01-23

* Düzenlendi: Çok siteli ortamlarda Cap Captcha token doğrulama başarısız oluyordu (artık ağ genelindeki geçici verileri kullanıyor).
* Düzenlendi: Captcha artık giriş durumundan bağımsız olarak tüm kullanıcılar için tutarlı bir şekilde render oluyor.
* Düzenlendi: Checkout başarısızlıklarına neden olan captcha render etme ve doğrulama arasındaki eşleşmeme giderildi.

Sürüm: 1.2.0 - Yayınlanma Tarihi: 2026-01-21

* Yeni: Cap Captcha - self-hosted proof-of-work captcha, etkinleştirildiğinde varsayılan olarak açık.
* Yeni: Sıfır yapılandırma koruması - eklentiyi etkinleştirin ve hemen korunmaya başlayın.
* Yeni: Kolay genişletilebilirlik için polimorfik captcha sağlayıcı mimarisi.
* Yeni: Kart test saldırılarına karşı WooCommerce Store API checkout koruması.
* Yeni: Zorlukları, doğrulama işlemleri ve engellenen saldırıları gösteren istatistik izleme dashboard'u.
* Yeni: Cap Captcha zorluk seviyesi ön ayarları (Hızlı, Orta, Maks).
* Yeni: reCAPTCHA ve hCaptcha sağlayıcıları için soyut temel sınıflar.
* Geliştirildi: Kod tabanı, modüler sağlayıcı sınıflarına yeniden düzenlendi.
* Geliştirildi: Özel bir yönetici sınıfı ile endişelerin daha iyi ayrılması.
* Düzenlendi: $_SERVER değişkeni sanitizasyonu için güvenlik iyileştirmeleri.
* Düzenlendi: WordPress adlandırma kuralları için PHPUnit test yapılandırması.

Sürüm: 1.0.1 - Yayınlanma Tarihi: 2025-09-28

* Ön eki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm artışı.
