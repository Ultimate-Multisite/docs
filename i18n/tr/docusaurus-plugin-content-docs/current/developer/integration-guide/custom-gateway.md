---
title: Özel Ağ Geçidi Geliştirme
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Özel Gateway Geliştirme

`Base_Gateway` sınıfını genişleterek özel ödeme gateway'leri oluşturabilirsiniz.

## Gateway Sınıfı

```php
class My_Custom_Gateway extends \WP_Ultimo\Gateways\Base_Gateway {

    public $id = 'my_gateway';

    public function __construct() {
        $this->title = 'My Payment Gateway';
        $this->description = 'Custom payment processing';
        $this->supports = ['one-time', 'recurring'];

        parent::__construct();
    }

    public function process_single_payment($payment, $cart, $order) {
        $result = $this->api_call('charge', [
            'amount' => $payment->get_total(),
            'currency' => $payment->get_currency(),
            'customer' => $payment->get_customer_id()
        ]);

        if ($result->success) {
            $payment->set_gateway_payment_id($result->transaction_id);
            $payment->set_status('completed');
            return true;
        }

        return new WP_Error('payment_failed', $result->error_message);
    }

    public function process_signup($membership, $customer, $cart, $order) {
        $subscription = $this->api_call('subscription/create', [
            'customer_id' => $customer->get_gateway_customer_id(),
            'plan_id' => $membership->get_plan()->get_gateway_plan_id(),
            'trial_days' => $membership->get_trial_days()
        ]);

        if ($subscription->success) {
            $membership->set_gateway_subscription_id($subscription->id);
            return true;
        }

        return new WP_Error('subscription_failed', $subscription->error);
    }
}
```

## Gateway'i Kaydetme

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Temel Yöntemler

| Yöntem | Amaç |
|--------|---------|
| `process_single_payment()` | Tek seferlik ödemeleri işleme |
| `process_signup()` | Yinelenen abonelikleri ayarlama |
| `process_refund()` | İade taleplerini işleme |
| `get_payment_methods()` | Bir müşteri için kayıtlı ödeme yöntemlerini döndürme |

## Yinelenen üyelikler için yenileme kimlik bilgileri

Ultimate Multisite v2.13.0, gateway entegrasyonlarının `auto_renew` kalıcı hale getirilmeden önce yinelenen bir üyeliğin yeniden kullanılabilir bir yenileme kimlik bilgisine sahip olup olmadığını bildirmesine olanak tanır. `wu_membership_has_renewal_credential` kancasını kullanın ve şunu döndürün:

- Üyeliğin bir gateway aboneliği, faturalandırma anlaşması, kasa token'ı veya eşdeğer yeniden kullanılabilir ödeme yöntemi olduğunda `true`.
- Gateway, yinelenen kimlik bilgisinin eksik veya kullanılamaz olduğunu bildiğinde `false`.
- Katılmamak ve varsayılan davranışı değişmeden tutmak için `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Bir gateway `false` döndürdüğünde, Ultimate Multisite üyeliği otomatik yenileme devre dışı bırakılmış olarak kaydeder ve eksik kimlik bilgisi işaretleyicisi saklar. Yöneticileri bilgilendirmek, yeniden yetkilendirme akışı başlatmak veya destek notları eklemek için `wu_membership_renewal_credential_missing` kullanın:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Yeni bir yeniden kullanılabilir kimlik bilgisi saklandıktan sonra, gateway'inizin başarılı yeniden yetkilendirme akışının bir parçası olarak eksik kimlik bilgisi işaretleyicisini temizleyin.

## İpuçları

- Hata durumunda her zaman `WP_Error` döndürün, böylece Ultimate Multisite hata gösterimini işleyebilir
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gateway'e özel günlükleme için `wu_log_add()` kullanın

## AI connector sağlayıcı yetenekleri

AI connector destekli işlemleri çağıran özel entegrasyonlar, AI Provider for Anthropic Max v1.3.0 ile sunulan desteklenen OAuth sağlayıcı setiyle uyumlu olmalıdır:

| Sağlayıcı | Yetenek notları |
|---|---|
| **Anthropic Max** | Mevcut OAuth Account havuzu iş akışını destekler. Connector isteklerine proxy uygulanırken boş araç dizileri ve gidiş-dönüş düşünme imzaları dahil olmak üzere Anthropic araç kullanım payload'larını koruyun. |
| **OpenAI ChatGPT/Codex** | OAuth havuzu iş akışını ve connector destekli işlemler için tam araç desteği davranışını destekler. Araç tanımlarını ve araç çağrısı sonuçlarını Codex'e özel araç metadata'sını çıkarmadan iletin. |
| **Google AI Pro** | OAuth havuzu iş akışını ve SDK destekli sağlayıcı entegrasyonunu destekler. İstekleri yönlendirmeden önce OAuth tamamlandıktan sonra sağlayıcı Account'larını yenileyin. |

Cursor Pro entegrasyonu ve kurulum yolları kaldırıldı. Cursor Pro'yu seçilebilir bir sağlayıcı olarak kaydetmeyin veya özel connector UI'larında Cursor'a özel OAuth talimatları sunmayın.

Korumalı alan veya headless ortamlar için, yöneticilerin döndürülen yetkilendirme verilerini yapıştırıp otomatik tarayıcı yönlendirmesine güvenmeden Account bağlantısını tamamlayabilmeleri için manuel OAuth yedek yolunu gösterin.
