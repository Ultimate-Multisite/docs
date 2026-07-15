---
title: Pangembangan Gerbang Kustom
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Pangembangan Gateway Kustom

Sampeyan bisa nggawe gateway pembayaran kustom kanthi ngembangake kelas `Base_Gateway`.

## Kelas Gateway {#gateway-class}

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

## Ndhaptar Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Metode Kunci {#key-methods}

| Metode | Tujuan |
|--------|---------|
| `process_single_payment()` | Nangani pambayaran sepisan |
| `process_signup()` | Nyetel subscription bola-bali |
| `process_refund()` | Nangani panjalukan refund |
| `get_payment_methods()` | Mbalekake metode pambayaran sing disimpen kanggo customer |

## Kredensial nganyari kanggo membership bola-bali {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 ngidini integrasi gateway nglaporake apa membership bola-bali nduweni kredensial nganyari sing bisa digunakake maneh sadurunge `auto_renew` disimpen. Hook `wu_membership_has_renewal_credential` lan balekake:

- `true` nalika membership nduweni subscription gateway, persetujuan billing, vault token, utawa metode pambayaran sing padha lan bisa digunakake maneh.
- `false` nalika gateway ngerti yen kredensial bola-bali ilang utawa ora bisa digunakake.
- `null` kanggo ora melu lan njaga prilaku gawan tetep ora owah.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Nalika gateway mbalekake `false`, Ultimate Multisite nyimpen membership kanthi nganyari otomatis dipateni lan nyimpen tandha kredensial-ilang. Gunakake `wu_membership_renewal_credential_missing` kanggo menehi kabar marang administrator, miwiti alur re-authorization, utawa nambah cathetan dhukungan:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Resiki tandha kredensial-ilang minangka bagean saka alur re-authorization gateway sampeyan sing sukses sawise kredensial anyar sing bisa digunakake maneh disimpen.

## Tips {#tips}

- Tansah balekake `WP_Error` nalika gagal supaya Ultimate Multisite bisa nangani tampilan kasalahan
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Gunakake `wu_log_add()` kanggo logging khusus gateway

## Kapabilitas panyedhiya panyambung AI {#ai-connector-provider-capabilities}

Integrasi kustom sing nelpon operasi sing didhukung panyambung AI kudu selaras karo set panyedhiya OAuth sing didhukung sing dikenalake karo AI Provider for Anthropic Max v1.3.0:

| Panyedhiya | Cathetan kapabilitas |
|---|---|
| **Anthropic Max** | Ndhukung alur kerja pool Account OAuth sing wis ana. Jaga payload tool-use Anthropic, kalebu array tool kosong lan tanda tangan thinking bolak-balik, nalika proxy panjalukan panyambung. |
| **OpenAI ChatGPT/Codex** | Ndhukung alur kerja pool OAuth lan prilaku dhukungan tool lengkap kanggo operasi sing didhukung panyambung. Terusake definisi tool lan asil tool-call tanpa mbusak metadata tool khusus Codex. |
| **Google AI Pro** | Ndhukung alur kerja pool OAuth lan integrasi panyedhiya sing didhukung SDK. Refresh Account panyedhiya sawise OAuth rampung sadurunge nuntun panjalukan. |

Integrasi lan jalur setup Cursor Pro wis dibusak. Aja ndhaptar Cursor Pro minangka panyedhiya sing bisa dipilih utawa nampilake instruksi OAuth khusus Cursor ing UI panyambung kustom.

Kanggo lingkungan sandbox utawa headless, tampilake jalur fallback OAuth manual supaya administrator bisa nempelake data authorization sing dibalekake lan ngrampungake sambungan Account tanpa gumantung marang redirect browser otomatis.
