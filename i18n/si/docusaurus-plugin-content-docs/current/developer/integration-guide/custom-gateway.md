---
title: අභිරුචි ගේට්වේ සංවර්ධනය
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# අභිරුචි Gateway සංවර්ධනය {#custom-gateway-development}

`Base_Gateway` class එක දීර්ඝ කිරීමෙන් ඔබට අභිරුචි ගෙවීම් gateways නිර්මාණය කළ හැක.

## Gateway Class {#gateway-class}

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

## Gateway එක ලියාපදිංචි කරන්න {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ප්‍රධාන Methods {#key-methods}

| Method | අරමුණ |
|--------|---------|
| `process_single_payment()` | එක් වරක් කරන ගෙවීම් හසුරුවන්න |
| `process_signup()` | නැවත නැවත සිදුවන subscriptions සකසන්න |
| `process_refund()` | මුදල් ආපසු ගෙවීමේ ඉල්ලීම් හසුරුවන්න |
| `get_payment_methods()` | පාරිභෝගිකයෙකු සඳහා සුරැකි ගෙවීම් methods ආපසු ලබා දෙන්න |

## නැවත නැවත සිදුවන memberships සඳහා renewal credentials {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 මගින් gateway integrations වලට, `auto_renew` ස්ථිරව සුරැකීමට පෙර නැවත නැවත සිදුවන membership එකකට නැවත භාවිත කළ හැකි renewal credential එකක් තිබේදැයි වාර්තා කිරීමට ඉඩ දෙයි. `wu_membership_has_renewal_credential` hook කර මෙසේ ආපසු ලබා දෙන්න:

- membership එකට gateway subscription එකක්, billing agreement එකක්, vault token එකක්, හෝ ඒකට සමාන නැවත භාවිත කළ හැකි ගෙවීම් method එකක් තිබේ නම් `true`.
- recurring credential එක අස්ථානගත වී ඇති බව හෝ භාවිත කළ නොහැකි බව gateway එක දන්නේ නම් `false`.
- ඉවත් වී පෙරනිමි හැසිරීම වෙනස් නොකර තබා ගැනීමට `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

gateway එකක් `false` ආපසු ලබා දුන් විට, Ultimate Multisite auto-renewal අක්‍රිය කර membership එක සුරකින අතර missing-credential marker එකක් ගබඩා කරයි. පරිපාලකයන්ට දැනුම් දීමට, නැවත අවසර ලබා ගැනීමේ flow එකක් ආරම්භ කිරීමට, හෝ support notes එක් කිරීමට `wu_membership_renewal_credential_missing` භාවිත කරන්න:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

නව නැවත භාවිත කළ හැකි credential එකක් ගබඩා කළ පසු, ඔබේ gateway එකේ සාර්ථක නැවත අවසර ලබා ගැනීමේ flow එකේ කොටසක් ලෙස missing-credential marker එක ඉවත් කරන්න.

## උපදෙස් {#tips}

- අසාර්ථක වූ විට හැමවිටම `WP_Error` ආපසු ලබා දෙන්න, එවිට Ultimate Multisite ට දෝෂ පෙන්වීම හසුරුවන්න හැකි වේ
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- gateway-විශේෂිත logging සඳහා `wu_log_add()` භාවිත කරන්න

## AI connector provider හැකියාවන් {#ai-connector-provider-capabilities}

AI connector මත පදනම් වූ මෙහෙයුම් කැඳවන අභිරුචි integrations, AI Provider for Anthropic Max v1.3.0 සමඟ හඳුන්වා දුන් සහය දක්වන OAuth provider කට්ටලයට ගැළපිය යුතුය:

| Provider | හැකියාවන් පිළිබඳ සටහන් |
|---|---|
| **Anthropic Max** | පවතින OAuth account pool workflow සඳහා සහය දක්වයි. connector ඉල්ලීම් proxy කරන විට, හිස් tool arrays සහ round-trip thinking signatures ඇතුළුව Anthropic tool-use payloads නොවෙනස්ව තබා ගන්න. |
| **OpenAI ChatGPT/Codex** | connector සහය දක්වන මෙහෙයුම් සඳහා OAuth pool workflow සහ සම්පූර්ණ tool-support හැසිරීමට සහය දක්වයි. Codex-විශේෂිත tool metadata ඉවත් නොකර tool definitions සහ tool-call results පසුකර යවන්න. |
| **Google AI Pro** | OAuth pool workflow සහ SDK මත පදනම් වූ provider integration සඳහා සහය දක්වයි. ඉල්ලීම් route කිරීමට පෙර OAuth completion අනතුරුව provider accounts refresh කරන්න. |

Cursor Pro integration සහ setup pathways ඉවත් කර ඇත. අභිරුචි connector UIs තුළ Cursor Pro තෝරාගත හැකි provider එකක් ලෙස ලියාපදිංචි නොකරන්න, හෝ Cursor-විශේෂිත OAuth උපදෙස් ඉදිරිපත් නොකරන්න.

sandboxed හෝ headless පරිසර සඳහා, පරිපාලකයන්ට ආපසු ලැබෙන authorization data අලවා ස්වයංක්‍රීය browser redirect එකක් මත රඳා නොසිටිව account connection සම්පූර්ණ කිරීමට manual OAuth fallback path එක නිරාවරණය කරන්න.
