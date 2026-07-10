---
title: ការអភិវឌ្ឍច្រកទ្វារផ្ទាល់ខ្លួន
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# ការអភិវឌ្ឍ Gateway ផ្ទាល់ខ្លួន {#custom-gateway-development}

អ្នកអាចបង្កើត gateway ទូទាត់ប្រាក់ផ្ទាល់ខ្លួន ដោយពង្រីក class `Base_Gateway`។

## Class របស់ Gateway {#gateway-class}

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

## ចុះឈ្មោះ Gateway {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Method សំខាន់ៗ {#key-methods}

| Method | គោលបំណង |
|--------|---------|
| `process_single_payment()` | ដោះស្រាយការទូទាត់ម្តងតែមួយ |
| `process_signup()` | រៀបចំ subscription កើតឡើងវិញ |
| `process_refund()` | ដោះស្រាយសំណើសងប្រាក់វិញ |
| `get_payment_methods()` | ត្រឡប់ payment method ដែលបានរក្សាទុកសម្រាប់អតិថិជន |

## ព័ត៌មានសម្ងាត់សម្រាប់បន្តសមាជិកភាពកើតឡើងវិញ {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 អនុញ្ញាតឱ្យការរួមបញ្ចូល gateway រាយការណ៍ថា សមាជិកភាពកើតឡើងវិញមានព័ត៌មានសម្ងាត់សម្រាប់បន្តដែលអាចប្រើឡើងវិញបានឬអត់ មុនពេល `auto_renew` ត្រូវបានរក្សាទុក។ Hook `wu_membership_has_renewal_credential` ហើយត្រឡប់៖

- `true` នៅពេលសមាជិកភាពមាន gateway subscription, billing agreement, vault token ឬ payment method ដែលអាចប្រើឡើងវិញបានដូចគ្នា។
- `false` នៅពេល gateway ដឹងថាព័ត៌មានសម្ងាត់កើតឡើងវិញបាត់ ឬមិនអាចប្រើបាន។
- `null` ដើម្បីមិនចូលរួម ហើយរក្សាឥរិយាបថលំនាំដើមឱ្យនៅដដែល។

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

នៅពេល gateway ត្រឡប់ `false`, Ultimate Multisite រក្សាទុកសមាជិកភាពដោយបិទការបន្តស្វ័យប្រវត្តិ ហើយរក្សាទុកសញ្ញាសម្គាល់ថាបាត់ព័ត៌មានសម្ងាត់។ ប្រើ `wu_membership_renewal_credential_missing` ដើម្បីជូនដំណឹងអ្នកគ្រប់គ្រង ចាប់ផ្តើមលំហូរអនុញ្ញាតឡើងវិញ ឬបន្ថែមកំណត់ត្រាគាំទ្រ៖

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

លុបសញ្ញាសម្គាល់ថាបាត់ព័ត៌មានសម្ងាត់ ជាផ្នែកនៃលំហូរអនុញ្ញាតឡើងវិញដែលជោគជ័យរបស់ gateway របស់អ្នក បន្ទាប់ពីព័ត៌មានសម្ងាត់ថ្មីដែលអាចប្រើឡើងវិញបានត្រូវបានរក្សាទុក។

## គន្លឹះ {#tips}

- តែងតែត្រឡប់ `WP_Error` នៅពេលបរាជ័យ ដើម្បីឱ្យ Ultimate Multisite អាចដោះស្រាយការបង្ហាញកំហុសបាន
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- ប្រើ `wu_log_add()` សម្រាប់ការកត់ត្រាជាក់លាក់របស់ gateway

## សមត្ថភាពអ្នកផ្តល់ connector AI {#ai-connector-provider-capabilities}

ការរួមបញ្ចូលផ្ទាល់ខ្លួនដែលហៅប្រតិបត្តិការដែលគាំទ្រដោយ AI connector គួរតែស្របនឹងសំណុំអ្នកផ្តល់ OAuth ដែលគាំទ្រ ដែលបានណែនាំជាមួយ AI Provider for Anthropic Max v1.3.0៖

| អ្នកផ្តល់ | កំណត់សម្គាល់សមត្ថភាព |
|---|---|
| **Anthropic Max** | គាំទ្រលំហូរការងារអាង Account OAuth ដែលមានស្រាប់។ រក្សា payload ប្រើប្រាស់ឧបករណ៍របស់ Anthropic រួមទាំងអារេឧបករណ៍ទទេ និងហត្ថលេខាគិតដែលបញ្ជូនទៅវិញទៅមក នៅពេល proxy សំណើ connector។ |
| **OpenAI ChatGPT/Codex** | គាំទ្រលំហូរការងារអាង OAuth និងឥរិយាបថគាំទ្រឧបករណ៍ពេញលេញសម្រាប់ប្រតិបត្តិការដែល connector គាំទ្រ។ បញ្ជូននិយមន័យឧបករណ៍ និងលទ្ធផល tool-call ដោយមិនដក metadata ឧបករណ៍ជាក់លាក់របស់ Codex ចេញ។ |
| **Google AI Pro** | គាំទ្រលំហូរការងារអាង OAuth និងការរួមបញ្ចូលអ្នកផ្តល់ដែលគាំទ្រដោយ SDK។ ធ្វើឱ្យ Account របស់អ្នកផ្តល់ស្រស់ឡើងវិញ បន្ទាប់ពីបញ្ចប់ OAuth មុនពេលបញ្ជូនសំណើ។ |

ការរួមបញ្ចូល Cursor Pro និងផ្លូវរៀបចំត្រូវបានដកចេញហើយ។ កុំចុះឈ្មោះ Cursor Pro ជាអ្នកផ្តល់ដែលអាចជ្រើសបាន ឬបង្ហាញសេចក្ដីណែនាំ OAuth ជាក់លាក់សម្រាប់ Cursor ក្នុង UI connector ផ្ទាល់ខ្លួន។

សម្រាប់បរិស្ថាន sandbox ឬគ្មានផ្ទៃមុខ សូមបង្ហាញផ្លូវជំនួស OAuth ដោយដៃ ដើម្បីឱ្យអ្នកគ្រប់គ្រងអាចបិទភ្ជាប់ទិន្នន័យអនុញ្ញាតដែលបានត្រឡប់ ហើយបញ្ចប់ការភ្ជាប់ Account ដោយមិនចាំបាច់ពឹងលើការបញ្ជូនបន្ត browser ស្វ័យប្រវត្តិ។
