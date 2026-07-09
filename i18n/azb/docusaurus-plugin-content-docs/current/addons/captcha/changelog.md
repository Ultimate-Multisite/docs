---
title: Captcha Changes Log
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Değişiklik Geçmişi {#captcha-changelog}

Sürüm: 1.5.0 - Yayınlanma Tarihi: 2026-05-22
* Yeni: Sert durdurmalı rate limiter — captcha korumalı tüm sayfalardaki (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) her GET ve POST isteğini sayar ve HTTP 429, bir `Retry-After` başlığı ve rastgele bir tarpit beklemesi (1–5 saniye, maksimum 15 saniye) ile yanıt verir.
* Yeni: Tarpit penceresini ayarlamak için `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ayarları.
* Yeni: Güvenilir IP aralıklarını hariç tutmak için `wu_cap_rate_limit_whitelist_ip` filtresi.
* Yeni: Sert durdurma yanıtı gönderilmeden hemen önce tetiklenen `wu_cap_rate_limit_will_block` eylemi.
* Yeni: Sahteciliğe karşı dayanıklı client-IP algılama. `Captcha_Core::get_client_ip()` (rate-limit kovaları için tek doğru kaynak, captcha siteverify `remoteip` ve istatistik IP hash'leri) artık katı bir güven modelini zorunlu kılıyor: REMOTE_ADDR temel seviyeyi oluşturur, `CF-Connecting-IP` yalnızca anlık eş (peer) mevcut bir Cloudflare IP aralığındaysa dikkate alınır ve `X-Forwarded-For` yalnızca anlık eş yönetici tarafından yapılandırılmış güvenilir proxy listesindeyse dikkate alınır. Bu süreç, güvenilir/CF atlamalarını atlayarak ziyaretçi IP'sine ulaşmak için sağdan sola doğru bir tarama yapar.
* Yeni: `cap_trust_cloudflare_headers` ayarı (varsayılan olarak KAPALI) — Cloudflare arkasında iken `CF-Connecting-IP` güvenliğine geçiş yapmanızı sağlar. Eklenti, Cloudflare CIDR anlık görüntüsünü paketlenmiş olarak içerir ve bu görüntü başarısız olursa, yedekleme ile birlikte her hafta wp-cron üzerinden yeniler.
* Yeni: `cap_trusted_proxies` ayarı — kendi ön cephe proxy'lerinizi / yük dengeleyicilerinizi listeleyen CIDR veya ham IP'ler (her biri bir satırda, `#` yorumları izin verilir) içeren bir textarea. Bu ayar olmadan, rate limiter etkinleştirilmiş olsa bile `X-Forwarded-For` yok sayılır.
* Yeni: Olası Cloudflare / proxy durumunun ilk etkinleştirilmede otomatik algılanması ve tek tıkla "Algılanan ayarları uygula" yönetici bildirimi. Eklenti, kaydettiğiniz değerleri asla geçersiz kılmaz; eğer sonraki trafik yapılandırmanızın artık gerçeklikle eşleşmediğini gösterirse (örneğin Cloudflare CIDR aralıklarını değiştirdiyse ve proxy CIDR'ınız artık güncel değilse), önerilen güncellemeyi gösteren, kapatılamayan bir uyarı belirir.
* Düzeltildi: Görünmez mod artık `cap_security_level`'ı sessizce FAST'a düşürmüyor — yönetici tarafından yapılandırılan seviye korunuyor. Özel mantık isteyen siteler için yeni bir `wu_cap_server_security_level` filtresi mevcut.
* Düzeltildi: İstatistik `rate_limits_triggered` sayacı artık sadece nadir başarı sonrası geri çekilme yolunda değil, her engellemede artıyor.
* Düzeltildi: `Captcha_Core::get_client_ip()` artık rate limiter, captcha sağlayıcıları (reCAPTCHA + hCaptcha `siteverify`) ve istatistikler genelinde ziyaretçi IP'si ataması için tek doğru kaynaktır — doğrudan origin-server istekleri ile sahte `CF-Connecting-IP` başlığı taşıyan ve gerçek eş yerine sahte IP tarafından kovalanacak bir sahtecilik vektörünü kapatır.
* Düzeltildi: WooCommerce klasik checkout rate-limit kapısı artık `woocommerce_before_checkout_form` yerine `template_redirect` (öncelik 1) üzerinde tetikleniyor. Form seviyesindeki hook, sepet boş olduğunda asla tetiklenmediği için, ürün eklemeyen sel trafiği limitleyiciden tamamen kaçırıyordu.
* Düzeltildi: WooCommerce pay-for-order rate-limit kapısı artık `woocommerce_before_pay_action` yerine `template_redirect` üzerinde tetikleniyor. İkincisi yalnızca `wp_verify_nonce('woocommerce-pay')` başarılı olduktan sonra tetikleniyor, bu da yetkisiz saldırganların (asıl tehdit modeli) asla limitleyiciyi tetiklemediği anlamına geliyordu.
* Düzeltildi: WooCommerce Store API (bloklar) checkout rate-limit kapısı artık `woocommerce_store_api_checkout_update_order_from_request` yerine `rest_pre_dispatch` üzerinde tetikleniyor. İkincisi yalnızca Store API sepeti ve fatura alanlarını doğruladıktan sonra tetikleniyor, bu yüzden yetkisiz botlar doğrulayıcıdan 400 alıyor ve asla limitleyiciyi tetiklemiyordu.
* Düzeltildi: Ultimate Multisite inline-login rate-limit kapısı artık `wu_before_inline_login` yerine `wu_ajax_nopriv_wu_inline_login` öncelik 1 üzerinde tetikleniyor (ve giriş yapmış yansıması). İkincisi yalnızca `check_ajax_referer('wu_checkout')` başarılı olduktan sonra tetikleniyordu, bu yüzden geçerli bir wu_checkout nonce'u olmayan yetkisiz botlar 403 alıyor ve asla limitleyiciyi tetiklemiyordu.
* Düzeltildi: `Rate_Limiter::enforce()` artık `surface|ip` anahtarı ile isteğe bir kez koruma uyguluyor, böylece render başına iki kez tetiklenen yukarı akış hook'ları (özellikle Ultimate Multisite'ta `wu_setup_checkout`) etkili rate-limit eşiğini yarıya düşürmüyor.
* Düzeltildi: Rate-limit yüzey kapıları artık `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filtresi) kontrol etmiyor. Bu filtre "captcha başka bir yüzey tarafından zaten ele alındı" sinyali verir ve sel korumasından bağımsızdır — WooCommerce entegrasyonu, bir Woo nonce'u mevcut olduğunda WordPress giriş captcha'sını atlamak için bunu kullanıyordu, bu da rate sayımına sızıyor ve Woo POST'larının limitleyiciden kaçmasına izin veriyordu. Artık tek geçerli atlama, rate-limit'e özel `wu_cap_rate_limit_whitelist_ip` filtresidir.

Sürüm: 1.3.2 - Yayınlanma Tarihi: 2026-01-27
* Düzeltildi: Elementor veya diğer sayfa oluşturucular kullanan checkout formlarında Cap widget'ı render olmuyordu.
* Düzeltildi: cap-widget özel elemanı wp_kses() sanitizasyonu tarafından kaldırılıyordu.
* Geliştirildi: HTML filtrelemesini atlamak için checkout captcha alanı için çağrılabilir içerik kullanıldı.
* Geliştirildi: Kenar durumlar için geri dönüşlü JavaScript basitleştirildi.

Sürüm: 1.3.1 - Yayınlanma Tarihi: 2026-01-26
* Düzeltildi: Cap Captcha görünmez modu, dinamik Ultimate Multisite checkout formlarında otomatik çözülmüyordu.
* Geliştirildi: Cap checkout betiği artık dinamik olarak yüklenen widget'ları algılamak için MutationObserver kullanıyor.
* Geliştirildi: Gönderimden önce token beklemek için checkout düğmesi kesintisi eklendi.

Sürüm: 1.3.0 - Yayınlanma Tarihi: 2026-01-27
* Yeni: Store API çekme kesintisi ile WooCommerce Blocks checkout entegrasyonu.
* Yeni: WooCommerce checkout için görünmez captcha desteği (hCaptcha görünmez, reCAPTCHA v2 görünmez, v3).
* Yeni: Ultimate Multisite olmadan kullanılabilmesi için bağımsız ayarlar sayfası.
* Yeni: Bağımlılık çakışmalarını önlemek için Jetpack Autoloader.
* Düzeltildi: hCaptcha, dinamik Ultimate Multisite checkout'ta (AJAX ile yüklenen içerik) render olmuyordu.
* Düzeltildi: Form doğrulama hataları oluştuğunda Captcha yenilenmiyor/sıfırlanmıyordu.
* Düzeltildi: hCaptcha, WooCommerce checkout sayfasında görünmüyordu.
* Düzeltildi: reCAPTCHA sınıfı bulunamadı hatası (google/recaptcha PHP kütüphanesi eklendi).
* Geliştirildi: WordPress hook'ları, MutationObserver ve AJAX kesintisi yoluyla hata algılama.
* Geliştirildi: Ayarlar açıklamalarına API anahtarları için dashboard URL'leri eklendi.

Sürüm: 1.2.2 - Yayınlanma Tarihi: 2026-01-24
* Düzeltildi: Captcha, Ultimate Multisite Login Form Element'ında görüntülenmiyordu (form filtresi adı eşleşmemesi).
* Düzeltildi: Cap widget HTML'i wp_kses() sanitizasyonu tarafından kaldırılıyordu.
* Düzeltildi: JavaScript seçicileri, element ID'lerinde eğik çizgi bulunan formları bulamıyordu.
* Eklendi: classaddons'un izin verilen HTML etiketlerini genişletmesi için `wu_kses_allowed_html` filtre hook'u.
* Kaldırıldı: Ölü kod JavaScript dosyaları, sağlayıcıya özel betiklerle değiştirildi.

Sürüm: 1.2.1 - Yayınlanma Tarihi: 2026-01-23

* Düzeltildi: Çok siteli ortamlarda Cap Captcha token doğrulama başarısız oluyordu (artık ağ genelindeki geçici verileri kullanıyor).
* Düzeltildi: Captcha, giriş durumundan bağımsız olarak tüm kullanıcılar için tutarlı bir şekilde render oluyor.
* Düzeltildi: Checkout başarısızlıklarına neden olan captcha render etme ve doğrulama arasındaki uyumsuzluk.

Sürüm: 1.2.0 - Yayınlanma Tarihi: 2026-01-21

* Yeni: Cap Captcha - self-hosted proof-of-work captcha, etkinleştirildiğinde varsayılan olarak açık.
* Yeni: Sıfır yapılandırma koruması - eklentiyi etkinleştirin ve hemen korunmaya başlayın.
* Yeni: Kolay genişletilebilirlik için polimorfik captcha sağlayıcı mimarisi.
* Yeni: Kart test saldırılarına karşı WooCommerce Store API checkout koruması.
* Yeni: Zorluklar, doğrulama ve engellenen saldırıları gösteren istatistik izleme panosu.
* Yeni: Cap Captcha zorluk seviyesi ön ayarları (Hızlı, Orta, Maks).
* Yeni: reCAPTCHA ve hCaptcha sağlayıcıları için soyut temel sınıflar.
* Geliştirildi: Kod tabanı, modüler sağlayıcı sınıflarına yeniden düzenlendi.
* Geliştirildi: Özel bir yönetici sınıfı ile daha iyi sorumluluk ayrımı.
* Düzeltildi: $_SERVER değişkeni sanitizasyonu için güvenlik iyileştirmeleri.
* Düzeltildi: WordPress adlandırma kuralları için PHPUnit test yapılandırması.

Sürüm: 1.0.1 - Yayınlanma Tarihi: 2025-09-28

* Ön eki ultimate-multisite olarak yeniden adlandırıldı; metin alanı güncellendi; sürüm artırıldı.
