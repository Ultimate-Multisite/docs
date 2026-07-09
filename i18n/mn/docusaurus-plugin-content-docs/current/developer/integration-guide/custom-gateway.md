---
title: Захиалгат Gateway хөгжүүлэлт
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Custom Gateway хөгжүүлэлт {#custom-gateway-development}

Та `Base_Gateway` классыг өргөтгөн custom төлбөрийн gateway үүсгэж болно.

## Gateway класс {#gateway-class}

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

## Gateway-г бүртгэх {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Гол аргууд {#key-methods}

| Арга | Зорилго |
|--------|---------|
| `process_single_payment()` | Нэг удаагийн төлбөрүүдийг боловсруулах |
| `process_signup()` | Давтагдах subscription-уудыг тохируулах |
| `process_refund()` | Буцаан олголтын хүсэлтүүдийг боловсруулах |
| `get_payment_methods()` | Үйлчлүүлэгчийн хадгалсан төлбөрийн аргуудыг буцаах |

## Давтагдах membership-үүдийн сунгалтын credential-ууд {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 нь gateway интеграциудад `auto_renew` хадгалагдахаас өмнө давтагдах membership дахин ашиглах боломжтой сунгалтын credential-той эсэхийг мэдээлэх боломж олгодог. `wu_membership_has_renewal_credential`-г hook хийгээд дараахыг буцаана уу:

- membership gateway subscription, billing agreement, vault token эсвэл түүнтэй адил дахин ашиглах боломжтой төлбөрийн аргатай үед `true`.
- gateway давтагдах credential байхгүй эсвэл ашиглах боломжгүй гэдгийг мэдэж байгаа үед `false`.
- оролцохгүй байж, анхдагч төлөвийг өөрчлөхгүй үлдээх бол `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Gateway `false` буцаах үед Ultimate Multisite membership-ийг auto-renewal идэвхгүйгээр хадгалж, credential байхгүй гэсэн тэмдэглэгээг хадгална. Администраторуудад мэдэгдэх, дахин authorization урсгалыг эхлүүлэх эсвэл дэмжлэгийн тэмдэглэл нэмэхийн тулд `wu_membership_renewal_credential_missing`-г ашиглана уу:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Шинэ дахин ашиглах боломжтой credential хадгалагдсаны дараа gateway-ийнхаа амжилттай дахин authorization урсгалын нэг хэсэг болгон credential байхгүй гэсэн тэмдэглэгээг арилгана уу.

## Зөвлөмжүүд {#tips}

- Алдаа гарсан үед үргэлж `WP_Error` буцаана уу, ингэснээр Ultimate Multisite алдааны харагдацыг боловсруулах боломжтой
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gateway-д тусгайлсан бүртгэлд `wu_log_add()` ашиглана уу

## AI connector provider-ийн боломжууд {#ai-connector-provider-capabilities}

AI connector-д тулгуурласан үйлдлүүдийг дууддаг custom интеграциуд нь AI Provider for Anthropic Max v1.3.0-той нэвтрүүлсэн дэмжигдсэн OAuth provider багцтай нийцэх ёстой:

| Provider | Боломжийн тэмдэглэл |
|---|---|
| **Anthropic Max** | Одоо байгаа OAuth Account pool ажлын урсгалыг дэмждэг. Connector хүсэлтүүдийг proxy хийхдээ хоосон tool массивууд болон хоёр талын thinking signature-уудыг оролцуулан Anthropic tool-use payload-уудыг хадгална уу. |
| **OpenAI ChatGPT/Codex** | OAuth pool ажлын урсгал болон connector-оор дэмжигдсэн үйлдлүүдийн бүрэн tool-support төлөвийг дэмждэг. Tool тодорхойлолтууд болон tool-call үр дүнгүүдийг Codex-тусгай tool metadata-г хасалгүйгээр дамжуулна уу. |
| **Google AI Pro** | OAuth pool ажлын урсгал болон SDK-д тулгуурласан provider интеграцийг дэмждэг. Хүсэлтүүдийг чиглүүлэхээс өмнө OAuth дууссаны дараа provider Account-уудыг refresh хийнэ үү. |

Cursor Pro интеграци болон тохируулах замууд устгагдсан. Cursor Pro-г сонгох боломжтой provider болгон бүртгэхгүй, мөн custom connector UI-ууд дээр Cursor-тусгай OAuth зааварчилгаа үзүүлэхгүй байх хэрэгтэй.

Sandbox эсвэл headless орчинд администраторууд буцаагдсан authorization өгөгдлийг paste хийж, автомат browser redirect-д найдахгүйгээр Account холболтыг дуусгах боломжтой байхаар гар OAuth fallback замыг ил болгоно уу.
