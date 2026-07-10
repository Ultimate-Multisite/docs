---
title: მორგებული გეითვეის შემუშავება
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# მორგებული Gateway-ის შემუშავება {#custom-gateway-development}

შეგიძლიათ შექმნათ მორგებული გადახდის gateway-ები `Base_Gateway` კლასის გაფართოებით.

## Gateway-ის კლასი {#gateway-class}

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

## Gateway-ის რეგისტრაცია {#register-the-gateway}

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## ძირითადი მეთოდები {#key-methods}

| მეთოდი | დანიშნულება |
|--------|---------|
| `process_single_payment()` | ერთჯერადი გადახდების დამუშავება |
| `process_signup()` | განმეორებადი გამოწერების დაყენება |
| `process_refund()` | თანხის დაბრუნების მოთხოვნების დამუშავება |
| `get_payment_methods()` | მომხმარებლისთვის შენახული გადახდის მეთოდების დაბრუნება |

## განახლების მონაცემები განმეორებადი წევრობებისთვის {#renewal-credentials-for-recurring-memberships}

Ultimate Multisite v2.13.0 gateway-ის ინტეგრაციებს აძლევს საშუალებას, დააფიქსირონ, აქვს თუ არა განმეორებად წევრობას ხელახლა გამოსაყენებელი განახლების credential, სანამ `auto_renew` შენარჩუნდება. გამოიყენეთ hook `wu_membership_has_renewal_credential` და დააბრუნეთ:

- `true`, როდესაც წევრობას აქვს gateway-ის გამოწერა, ბილინგის შეთანხმება, vault token, ან ეკვივალენტური ხელახლა გამოსაყენებელი გადახდის მეთოდი.
- `false`, როდესაც gateway-მა იცის, რომ განმეორებადი credential აკლია ან გამოუყენებელია.
- `null`, რომ გამოეთიშოთ და ნაგულისხმევი ქცევა უცვლელი დარჩეს.

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

როდესაც gateway აბრუნებს `false`-ს, Ultimate Multisite ინახავს წევრობას გამორთული ავტომატური განახლებით და ინახავს დაკარგული credential-ის მარკერს. გამოიყენეთ `wu_membership_renewal_credential_missing`, რათა შეატყობინოთ ადმინისტრატორებს, დაიწყოთ ხელახალი ავტორიზაციის ნაკადი, ან დაამატოთ მხარდაჭერის შენიშვნები:

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

გაასუფთავეთ დაკარგული credential-ის მარკერი თქვენი gateway-ის წარმატებული ხელახალი ავტორიზაციის ნაკადის ნაწილად, მას შემდეგ, რაც ახალი ხელახლა გამოსაყენებელი credential შეინახება.

## რჩევები {#tips}

- წარუმატებლობისას ყოველთვის დააბრუნეთ `WP_Error`, რათა Ultimate Multisite-მა შეძლოს შეცდომის ჩვენების დამუშავება
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- გამოიყენეთ `wu_log_add()` gateway-სპეციფიკური ლოგირებისთვის

## AI connector-ის პროვაიდერის შესაძლებლობები {#ai-connector-provider-capabilities}

მორგებული ინტეგრაციები, რომლებიც იძახებენ AI connector-ზე დაფუძნებულ ოპერაციებს, უნდა შეესაბამებოდეს მხარდაჭერილ OAuth პროვაიდერების ნაკრებს, რომელიც დაინერგა AI Provider for Anthropic Max v1.3.0-თან ერთად:

| პროვაიდერი | შესაძლებლობების შენიშვნები |
|---|---|
| **Anthropic Max** | მხარს უჭერს არსებულ OAuth Account-ის pool-ის სამუშაო ნაკადს. connector-ის მოთხოვნების პროქსირებისას შეინარჩუნეთ Anthropic-ის tool-use payload-ები, მათ შორის ცარიელი tool მასივები და ორმხრივი thinking signature-ები. |
| **OpenAI ChatGPT/Codex** | მხარს უჭერს OAuth pool-ის სამუშაო ნაკადს და tool-ის სრული მხარდაჭერის ქცევას connector-ის მიერ მხარდაჭერილი ოპერაციებისთვის. გაატარეთ tool-ის განსაზღვრებები და tool-call-ის შედეგები Codex-სპეციფიკური tool metadata-ს ამოღების გარეშე. |
| **Google AI Pro** | მხარს უჭერს OAuth pool-ის სამუშაო ნაკადს და SDK-ზე დაფუძნებულ პროვაიდერის ინტეგრაციას. OAuth-ის დასრულების შემდეგ განაახლეთ პროვაიდერის Account-ები მოთხოვნების მარშრუტიზაციამდე. |

Cursor Pro-ის ინტეგრაცია და დაყენების გზები ამოღებულია. არ დაარეგისტრიროთ Cursor Pro ასარჩევ პროვაიდერად და არ აჩვენოთ Cursor-სპეციფიკური OAuth ინსტრუქციები მორგებულ connector-ის UI-ებში.

Sandbox-იან ან headless გარემოებისთვის გამოაჩინეთ ხელით OAuth-ის fallback გზა, რათა ადმინისტრატორებმა შეძლონ დაბრუნებული ავტორიზაციის მონაცემების ჩასმა და Account-ის დაკავშირების დასრულება ავტომატურ browser redirect-ზე დაყრდნობის გარეშე.
