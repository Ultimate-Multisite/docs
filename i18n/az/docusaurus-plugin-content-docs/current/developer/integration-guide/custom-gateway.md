---
title: Fərdi ödəniş keçidinin hazırlanması
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Fərdi ödəniş keçidi hazırlanması

`Base_Gateway` sinfini genişləndirərək fərdi ödəniş keçidləri yarada bilərsiniz.

## Ödəniş keçidi sinfi {#gateway-class}

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

## Ödəniş keçidini qeydiyyatdan keçirin {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Əsas metodlar {#key-methods}

| Metod | Məqsəd |
|--------|---------|
| `process_single_payment()` | Birdəfəlik ödənişləri emal etmək |
| `process_signup()` | Təkrarlanan abunəlikləri qurmaq |
| `process_refund()` | Geri ödəniş sorğularını emal etmək |
| `get_payment_methods()` | Müştəri üçün saxlanmış ödəniş metodlarını qaytarmaq |

## Təkrarlanan üzvlüklər üçün yenilənmə etimad məlumatları {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ödəniş keçidi inteqrasiyalarına `auto_renew` saxlanmazdan əvvəl təkrarlanan üzvlüyün təkrar istifadə edilə bilən yenilənmə etimad məlumatının olub-olmadığını bildirməyə imkan verir. `wu_membership_has_renewal_credential` hook-una qoşulun və qaytarın:

- Üzvlükdə ödəniş keçidi abunəliyi, billing agreement, vault token və ya ekvivalent təkrar istifadə edilə bilən ödəniş metodu olduqda `true`.
- Ödəniş keçidi təkrarlanan etimad məlumatının çatışmadığını və ya istifadəyə yararsız olduğunu bildikdə `false`.
- İmtina etmək və standart davranışı dəyişməz saxlamaq üçün `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Ödəniş keçidi `false` qaytardıqda, Ultimate Multisite üzvlüyü avtomatik yenilənmə deaktiv edilmiş halda saxlayır və çatışmayan etimad məlumatı işarəsi saxlayır. Administratorları xəbərdar etmək, yenidən avtorizasiya axını başlatmaq və ya dəstək qeydləri əlavə etmək üçün `wu_membership_renewal_credential_missing` istifadə edin:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Yeni təkrar istifadə edilə bilən etimad məlumatı saxlandıqdan sonra ödəniş keçidinizin uğurlu yenidən avtorizasiya axınının bir hissəsi kimi çatışmayan etimad məlumatı işarəsini təmizləyin.

## Məsləhətlər {#tips}

- Uğursuzluq zamanı həmişə `WP_Error` qaytarın ki, Ultimate Multisite xəta göstərilməsini idarə edə bilsin
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Ödəniş keçidinə məxsus jurnal qeydləri üçün `wu_log_add()` istifadə edin

## AI connector provayder imkanları {#ai-connector-provider-capabilities}

AI connector əsaslı əməliyyatları çağıran fərdi inteqrasiyalar AI Provider for Anthropic Max v1.3.0 ilə təqdim edilmiş dəstəklənən OAuth provayder dəsti ilə uyğunlaşdırılmalıdır:

| Provayder | İmkan qeydləri |
|---|---|
| **Anthropic Max** | Mövcud OAuth Account hovuzu iş axınını dəstəkləyir. Konnektor sorğularını proksi edərkən boş alət massivləri və gedib-qayıdan düşünmə imzaları daxil olmaqla Anthropic alət istifadəsi payload-larını qoruyun. |
| **OpenAI ChatGPT/Codex** | OAuth hovuzu iş axınını və konnektor tərəfindən dəstəklənən əməliyyatlar üçün tam alət dəstəyi davranışını dəstəkləyir. Codex-ə məxsus alət metadata-sını silmədən alət təriflərini və alət çağırışı nəticələrini ötürün. |
| **Google AI Pro** | OAuth hovuzu iş axınını və SDK əsaslı provayder inteqrasiyasını dəstəkləyir. Sorğuları yönləndirməzdən əvvəl OAuth tamamlandıqdan sonra provayder Account-larını yeniləyin. |

Cursor Pro inteqrasiyası və quraşdırma yolları silinib. Cursor Pro-nu seçilə bilən provayder kimi qeydiyyatdan keçirməyin və ya fərdi konnektor UI-larında Cursor-a məxsus OAuth təlimatları təqdim etməyin.

Sandbox edilmiş və ya başsız mühitlər üçün manual OAuth ehtiyat yolunu göstərin ki, administratorlar qaytarılmış avtorizasiya məlumatlarını yapışdırıb avtomatik brauzer yönləndirməsinə güvənmədən Account bağlantısını tamamlaya bilsinlər.
