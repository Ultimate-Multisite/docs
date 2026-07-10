---
title: Özel Bir Kayıtçı Entegrasyonu Geliştirme
sidebar_position: 10
_i18n_hash: ee4c4ad8a1defe5760fd09b8f173ef7d
---
# Özel Bir Kayıt Kuruluşu Entegrasyonu Oluşturma {#building-a-custom-registrar-integration}

Domain Seller eklentisi, bir **Entegrasyon Kayıt Defteri** (Integration Registry) kalıbı kullanır. Her kayıt kuruluşu, `Domain_Selling_Capability` arayüzünü uygulayan ve `wu_domain_seller_register_capabilities` action hook'u aracılığıyla kendini kaydeden bir PHP sınıfıdır.

Bu rehber, özel bir kayıt kuruluşu nasıl ekleyeceğinizi gösteriyor.

## Arayüz (The interface) {#the-interface}

Sınıfınızın `WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability` arayüzünü uygulaması ve `WP_Ultimo\Integrations\Base_Capability_Module` sınıfından miras alması gerekir.

Gerekli metotlar:

```php
namespace My\Plugin\Capabilities;

use WP_Ultimo\Integrations\Base_Capability_Module;
use WP_Ultimo\Integrations\Capabilities\Domain_Selling_Capability;

class My_Registrar_Selling extends Base_Capability_Module implements Domain_Selling_Capability {

    // --- Gerekli kimlik metotları (Base_Capability_Module'dan) ---

    public function get_capability_id(): string {
        return 'domain-selling';  // her zaman 'domain-selling'
    }

    public function get_title(): string {
        return __('Domain Selling', 'my-plugin');
    }

    public function get_explainer_lines(): array {
        return [
            'will'     => [__('Domain kaydını My Registrar üzerinden etkinleştirin.', 'my-plugin')],
            'will_not' => [],
        ];
    }

    // --- Temel gerekli metotlar (Domain_Selling_Capability'den) ---

    /** Mevcut tüm TLD'leri ve toptan fiyatlandırmayı çekin. */
    public function sync_tlds(): array { ... }

    /** $domain_name'in $tlds genelinde kullanılabilirliğini kontrol edin. */
    public function search_domains(string $domain_name, array $tlds = []): array { ... }

    /** Bir TLD için N yıl coğrafi toptan fiyatını alın. */
    public function get_domain_pricing(string $tld, int $years = 1): array { ... }

    /** Bir domain kaydedin. Başarılı olursa ['success' => true, 'expiry_date' => '...'] döndürür. */
    public function register_domain(string $domain_name, array $registrant_info, int $years = 1): array { ... }

    /** Bir domaini N yıl için yenileyin. */
    public function renew_domain(string $domain_name, int $years = 1): array { ... }

    /** Kayıt durumunu, bitiş tarihini, nameserver'ları alın. */
    public function get_domain_info(string $domain_name): array { ... }

    /** API kimlik bilgilerini ve bağlantıyı test edin. */
    public function test_connection(): array { ... }
}
```

### Opsiyonel metotlar {#optional-methods}

Ek özellikler açmak için bunları uygulayın. Eklenti, desteği `method_exists()` ile algılar:

| Metot | Açılan Özellik |
|---|---|
| `supports_whois_privacy(): bool` | Ürün ayarlarında WHOIS gizlilik seçeneği |
| `enable_whois_privacy(string $domain_name): array` | Kayıt sırasında gizliliği otomatik etkinleştirme |
| `get_dns_records(string $domain_name): array` | Müşteri DNS görünüm sekmesi |
| `add_dns_record(string $domain_name, array $record_data): array` | Müşterinin DNS kaydı eklemesi |
| `update_dns_record(string $domain, string $record_id, array $record_data): array` | Müşterinin DNS kaydını düzenlemesi |
| `delete_dns_record(string $domain, string $record_id, array $data): array` | Müşterinin DNS kaydını silmesi |
| `update_nameservers(string $domain_name, array $nameservers): array` | Nameserver yönetimi |
| `get_epp_code(string $domain_name): array` | Domain transferi (giden) |
| `transfer_domain(string $domain, string $auth_code, array $registrant_info, array $options): array` | Domain transferi (gelen) |

### Dönüş Değeri Kuralları {#return-value-convention}

Tüm metotlar, en az bir `success` anahtarı içeren bir dizi döndürür:

```php
// Başarılı
return ['success' => true, 'data' => [...]];

// Başarısız
return ['success' => false, 'message' => 'Okunabilir hata mesajı'];
```

---

## Yeteneğinizi Kaydetme {#registering-your-capability}

Sınıfınızı `wu_domain_seller_register_capabilities` action'ını kullanarak kaydedin:

```php
add_action('wu_domain_seller_register_capabilities', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_capability('my-registrar', new \My\Plugin\Capabilities\My_Registrar_Selling());
});
```

`add_capability()` fonksiyonunun ilk argümanı **sağlayıcı ID**'dir (provider ID) — bu, ayarlar, ürün yapılandırması ve log kanallarında kayıt kuruluşunuzu tanımlamak için kullanılan küçük harfli bir slug'dır. Benzersiz bir şey kullanın (örneğin, şirketinizin slug'ı).

---

## Sihirbaz'a Kimlik Bilgisi Alanları Ekleme {#adding-credential-fields-to-the-wizard}

Yöneticilerin kurulum sihirbazı üzerinden kimlik bilgilerini girmesine izin vermek için entegrasyonunuzu kaydedin:

```php
add_action('wu_domain_seller_register_integrations', function(\WP_Ultimo\Integrations\Integration_Registry $registry) {
    $registry->add_integration('my-registrar', [
        'name'   => __('My Registrar', 'my-plugin'),
        'fields' => [
            [
                'id'    => 'my_registrar_api_key',
                'label' => __('API Key', 'my-plugin'),
                'type'  => 'text',
            ],
            [
                'id'    => 'my_registrar_api_secret',
                'label' => __('API Secret', 'my-plugin'),
                'type'  => 'password',
            ],
        ],
    ]);
});
```

Kimlik bilgileri, alan ID'leri anahtar olarak kullanılarak network option'ları olarak depolanır. Bunları, `wu_get_setting('my_registrar_api_key')` ile yetenek sınıfınızda alabilirsiniz.

---

## Kayıt Sonrası İşlemler İçin Hook'lar {#hooks-for-post-registration-actions}

Webhook'ları, provizyonu, bildirimleri veya CRM güncellemelerini tetiklemek için bu action'ları kullanın:

```php
// Başarılı domain kaydından sonra
add_action('wu_domain_registration_completed', function($payment, $registration_data, $result) {
    // $registration_data: domain_name, provider_id, years, expiry_date, customer_id
    // $result: ham kayıt kuruluşu yanıtı
    my_crm_update_domain($registration_data['domain_name'], $registration_data['customer_id']);
}, 10, 3);

// Kayıt başarısız olduktan sonra
add_action('wu_domain_registration_failed', function($payment, $registration_data, $error_message) {
    my_alert_team("Domain kaydı başarısız oldu: {$registration_data['domain_name']} — {$error_message}");
}, 10, 3);

// Başarılı yenilemeden sonra
add_action('wu_domain_renewal_completed', function($payment, $renewal_data, $result) {
    // Faturalandırma sisteminizi güncelleyin, makbuz gönderin vb.
}, 10, 3);

// Yenileme başarısız olduktan sonra
add_action('wu_domain_renewal_failed', function($payment, $renewal_data, $error_message) {
    // Uyarı, yeniden deneme mantığı vb.
}, 10, 3);

// Domain transferi tamamlandıktan sonra
add_action('wu_domain_transfer_completed', function($domain, $transfer_data) {
    // $domain bir WP_Ultimo\Models\Domain nesnesidir
}, 10, 2);

// SES DKIM doğrulaması yapıldıktan sonra (eğer SES entegrasyonu aktifse)
add_action('wu_domain_ses_verified', function($domain) {
    // $domain bir WP_Ultimo\Models\Domain nesnesidir
});
```

---

## Loglama (Logging) {#logging}

`wu_log_add()` kullanarak sağlayıcıya özel log kanalınıza yazın:

```php
wu_log_add('domain-seller-my-registrar', "{$domain_name} başarıyla kaydedildi", 'info');
wu_log_add('domain-seller-my-registrar', "Kayıt başarısız oldu: {$error}", 'error');
```

Loglar **Network Admin › Ultimate Multisite › Logs › domain-seller-my-registrar** altında görünür.
