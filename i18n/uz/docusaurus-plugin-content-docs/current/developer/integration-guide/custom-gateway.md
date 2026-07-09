---
title: Maxsus shlyuz ishlab chiqish
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Maxsus Gateway ishlab chiqish

`Base_Gateway` klassini kengaytirish orqali maxsus toʻlov gatewaylarini yaratishingiz mumkin.

## Gateway klassi

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

## Gatewayni roʻyxatdan oʻtkazish

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Asosiy metodlar

| Metod | Maqsad |
|--------|---------|
| `process_single_payment()` | Bir martalik toʻlovlarni qayta ishlash |
| `process_signup()` | Takroriy obunalarni sozlash |
| `process_refund()` | Qaytarib berish soʻrovlarini qayta ishlash |
| `get_payment_methods()` | Mijoz uchun saqlangan toʻlov usullarini qaytarish |

## Takroriy aʼzoliklar uchun yangilash hisob maʼlumotlari

Ultimate Multisite v2.13.0 gateway integratsiyalariga `auto_renew` saqlanishidan oldin takroriy aʼzolikda qayta ishlatiladigan yangilash hisob maʼlumoti bor-yoʻqligini xabar qilish imkonini beradi. `wu_membership_has_renewal_credential` hookini ulang va quyidagilarni qaytaring:

- aʼzolikda gateway obunasi, billing agreement, vault token yoki shunga teng qayta ishlatiladigan toʻlov usuli boʻlsa, `true`.
- gateway takroriy hisob maʼlumoti yoʻqligini yoki foydalanib boʻlmasligini bilsa, `false`.
- voz kechish va standart xatti-harakatni oʻzgarishsiz saqlash uchun `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway `false` qaytarganda, Ultimate Multisite aʼzolikni avtomatik yangilash oʻchirilgan holda saqlaydi va yetishmayotgan hisob maʼlumoti belgisini saqlaydi. Administratorlarni xabardor qilish, qayta avtorizatsiya jarayonini boshlash yoki qoʻllab-quvvatlash izohlarini qoʻshish uchun `wu_membership_renewal_credential_missing` dan foydalaning:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Yangi qayta ishlatiladigan hisob maʼlumoti saqlangandan soʻng, gatewayingizning muvaffaqiyatli qayta avtorizatsiya jarayonining bir qismi sifatida yetishmayotgan hisob maʼlumoti belgisini tozalang.

## Maslahatlar

- Muvaffaqiyatsizlikda har doim `WP_Error` qaytaring, shunda Ultimate Multisite xato koʻrinishini qayta ishlay oladi
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gatewayga xos jurnallash uchun `wu_log_add()` dan foydalaning

## AI connector provider imkoniyatlari

AI connector asosidagi operatsiyalarni chaqiradigan maxsus integratsiyalar AI Provider for Anthropic Max v1.3.0 bilan joriy qilingan qoʻllab-quvvatlanadigan OAuth provider toʻplamiga mos boʻlishi kerak:

| Provider | Imkoniyatlar boʻyicha izohlar |
|---|---|
| **Anthropic Max** | Mavjud OAuth Account pool ish jarayonini qoʻllab-quvvatlaydi. Connector soʻrovlarini proxy qilishda Anthropic tool-use payloadlarini, jumladan boʻsh tool arraylarini va round-trip thinking signaturelarini saqlang. |
| **OpenAI ChatGPT/Codex** | OAuth pool ish jarayonini va connector qoʻllab-quvvatlaydigan operatsiyalar uchun toʻliq tool-support xatti-harakatini qoʻllab-quvvatlaydi. Tool taʼriflari va tool-call natijalarini Codexga xos tool metadatasini olib tashlamasdan oʻtkazing. |
| **Google AI Pro** | OAuth pool ish jarayonini va SDK asosidagi provider integratsiyasini qoʻllab-quvvatlaydi. Soʻrovlarni yoʻnaltirishdan oldin OAuth yakunlangach provider accountlarini yangilang. |

Cursor Pro integratsiyasi va sozlash yoʻllari olib tashlangan. Cursor Proni tanlanadigan provider sifatida roʻyxatdan oʻtkazmang yoki maxsus connector UIlarida Cursorga xos OAuth koʻrsatmalarini taqdim etmang.

Sandboxlangan yoki headless muhitlar uchun qoʻlda OAuth fallback yoʻlini oching, shunda administratorlar qaytarilgan avtorizatsiya maʼlumotlarini joylashtirib, avtomatik brauzer yoʻnaltirishiga tayanmasdan account ulanishini yakunlay oladi.
