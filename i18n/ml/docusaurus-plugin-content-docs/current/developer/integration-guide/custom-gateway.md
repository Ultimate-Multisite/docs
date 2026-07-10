---
title: ഇഷ്ടാനുസൃത ഗേറ്റ്‌വേ വികസനം
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# കസ്റ്റം ഗേറ്റ്‌വേ വികസനം {#custom-gateway-development}

`Base_Gateway` ക്ലാസ് വിപുലീകരിച്ച് നിങ്ങൾക്ക് കസ്റ്റം പേയ്‌മെന്റ് ഗേറ്റ്‌വേകൾ സൃഷ്ടിക്കാം.

## ഗേറ്റ്‌വേ ക്ലാസ് {#gateway-class}

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

## ഗേറ്റ്‌വേ രജിസ്റ്റർ ചെയ്യുക {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## പ്രധാന രീതികൾ {#key-methods}

| Method | Purpose |
|--------|---------|
| `process_single_payment()` | ഒറ്റത്തവണ പേയ്‌മെന്റുകൾ കൈകാര്യം ചെയ്യുക |
| `process_signup()` | ആവർത്തിക്കുന്ന സബ്സ്ക്രിപ്ഷനുകൾ സജ്ജീകരിക്കുക |
| `process_refund()` | റീഫണ്ട് അഭ്യർത്ഥനകൾ കൈകാര്യം ചെയ്യുക |
| `get_payment_methods()` | ഒരു കസ്റ്റമറിനായി സംരക്ഷിച്ച പേയ്‌മെന്റ് രീതികൾ തിരികെ നൽകുക |

## ആവർത്തിക്കുന്ന മെമ്പർഷിപ്പുകൾക്കുള്ള പുതുക്കൽ ക്രെഡൻഷ്യലുകൾ {#renewal-credentials-for-recurring-memberships}

`auto_renew` നിലനിർത്തുന്നതിന് മുമ്പ്, ആവർത്തിക്കുന്ന മെമ്പർഷിപ്പിന് വീണ്ടും ഉപയോഗിക്കാവുന്ന പുതുക്കൽ ക്രെഡൻഷ്യൽ ഉണ്ടോ എന്ന് റിപ്പോർട്ട് ചെയ്യാൻ Ultimate Multisite v2.13.0 ഗേറ്റ്‌വേ ഇന്റഗ്രേഷനുകൾക്ക് അനുവദിക്കുന്നു. `wu_membership_has_renewal_credential` ഹുക്ക് ചെയ്ത് ഇവയിൽ ഒന്ന് തിരികെ നൽകുക:

- മെമ്പർഷിപ്പിന് ഗേറ്റ്‌വേ സബ്സ്ക്രിപ്ഷൻ, ബില്ലിംഗ് അഗ്രിമെന്റ്, വോൾട്ട് ടോക്കൺ, അല്ലെങ്കിൽ സമാനമായ വീണ്ടും ഉപയോഗിക്കാവുന്ന പേയ്‌മെന്റ് രീതി ഉണ്ടെങ്കിൽ `true`.
- ആവർത്തിക്കുന്ന ക്രെഡൻഷ്യൽ ഇല്ലാതെയോ ഉപയോഗിക്കാൻ കഴിയാത്തതായോ ഗേറ്റ്‌വേയ്ക്ക് അറിയാമെങ്കിൽ `false`.
- ഒഴിവാകാനും ഡിഫോൾട്ട് പെരുമാറ്റം മാറ്റമില്ലാതെ നിലനിർത്താനും `null`.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

ഒരു ഗേറ്റ്‌വേ `false` തിരികെ നൽകുമ്പോൾ, Ultimate Multisite ഓട്ടോ-റിന്യൂവൽ പ്രവർത്തനരഹിതമാക്കി മെമ്പർഷിപ്പ് സംരക്ഷിക്കുകയും, ക്രെഡൻഷ്യൽ നഷ്ടപ്പെട്ടതിന്റെ അടയാളം സംഭരിക്കുകയും ചെയ്യുന്നു. അഡ്മിനിസ്ട്രേറ്റർമാരെ അറിയിക്കാൻ, റീ-ഓതറൈസേഷൻ പ്രവാഹം ആരംഭിക്കാൻ, അല്ലെങ്കിൽ പിന്തുണ കുറിപ്പുകൾ ചേർക്കാൻ `wu_membership_renewal_credential_missing` ഉപയോഗിക്കുക:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

പുതിയ വീണ്ടും ഉപയോഗിക്കാവുന്ന ക്രെഡൻഷ്യൽ സംഭരിച്ച ശേഷം, നിങ്ങളുടെ ഗേറ്റ്‌വേയുടെ വിജയകരമായ റീ-ഓതറൈസേഷൻ പ്രവാഹത്തിന്റെ ഭാഗമായി ക്രെഡൻഷ്യൽ നഷ്ടപ്പെട്ടതിന്റെ അടയാളം നീക്കുക.

## നിർദേശങ്ങൾ {#tips}

- പരാജയപ്പെടുമ്പോൾ എപ്പോഴും `WP_Error` തിരികെ നൽകുക, അതുവഴി Ultimate Multisite-ന് പിശക് പ്രദർശനം കൈകാര്യം ചെയ്യാൻ കഴിയും
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ഗേറ്റ്‌വേ-നിർദ്ദിഷ്ട ലോഗിംഗിന് `wu_log_add()` ഉപയോഗിക്കുക

## AI connector പ്രൊവൈഡർ കഴിവുകൾ {#ai-connector-provider-capabilities}

AI connector പിന്തുണയുള്ള പ്രവർത്തനങ്ങൾ വിളിക്കുന്ന കസ്റ്റം ഇന്റഗ്രേഷനുകൾ, AI Provider for Anthropic Max v1.3.0-നൊപ്പം അവതരിപ്പിച്ച പിന്തുണയുള്ള OAuth പ്രൊവൈഡർ സെറ്റുമായി പൊരുത്തപ്പെടണം:

| പ്രൊവൈഡർ | കഴിവ് കുറിപ്പുകൾ |
|---|---|
| **Anthropic Max** | നിലവിലുള്ള OAuth Account പൂൾ വർക്‌ഫ്ലോ പിന്തുണയ്ക്കുന്നു. connector അഭ്യർത്ഥനകൾ പ്രോക്സി ചെയ്യുമ്പോൾ, ശൂന്യമായ ടൂൾ അറേകളും റൗണ്ട്-ട്രിപ്പ് ചിന്താ സിഗ്നേച്ചറുകളും ഉൾപ്പെടെ Anthropic ടൂൾ-ഉപയോഗ പേലോഡുകൾ സംരക്ഷിക്കുക. |
| **OpenAI ChatGPT/Codex** | OAuth പൂൾ വർക്‌ഫ്ലോയും connector പിന്തുണയുള്ള പ്രവർത്തനങ്ങൾക്കുള്ള പൂർണ്ണ ടൂൾ-പിന്തുണ പെരുമാറ്റവും പിന്തുണയ്ക്കുന്നു. Codex-നിർദ്ദിഷ്ട ടൂൾ മെറ്റാഡാറ്റ നീക്കം ചെയ്യാതെ ടൂൾ നിർവചനങ്ങളും ടൂൾ-കോൾ ഫലങ്ങളും കൈമാറുക. |
| **Google AI Pro** | OAuth പൂൾ വർക്‌ഫ്ലോയും SDK പിന്തുണയുള്ള പ്രൊവൈഡർ ഇന്റഗ്രേഷനും പിന്തുണയ്ക്കുന്നു. അഭ്യർത്ഥനകൾ റൂട്ടുചെയ്യുന്നതിന് മുമ്പ് OAuth പൂർത്തിയായ ശേഷം പ്രൊവൈഡർ അക്കൗണ്ടുകൾ പുതുക്കുക. |

Cursor Pro ഇന്റഗ്രേഷനും സജ്ജീകരണ പാതകളും നീക്കം ചെയ്തിരിക്കുന്നു. Cursor Pro-നെ തിരഞ്ഞെടുക്കാവുന്ന പ്രൊവൈഡറായി രജിസ്റ്റർ ചെയ്യരുത്, കസ്റ്റം connector UI-കളിൽ Cursor-നിർദ്ദിഷ്ട OAuth നിർദേശങ്ങൾ കാണിക്കരുത്.

സാൻഡ്‌ബോക്സ് ചെയ്തതോ ഹെഡ്‌ലെസ് ആയതോ ആയ പരിതസ്ഥിതികൾക്കായി, മാനുവൽ OAuth ഫാൾബാക്ക് പാത ലഭ്യമാക്കുക. അങ്ങനെ അഡ്മിനിസ്ട്രേറ്റർമാർക്ക് തിരികെ ലഭിച്ച authorization ഡാറ്റ ഒട്ടിച്ച്, ഓട്ടോമാറ്റിക് ബ്രൗസർ റീഡയറക്ടിനെ ആശ്രയിക്കാതെ Account കണക്ഷൻ പൂർത്തിയാക്കാം.
