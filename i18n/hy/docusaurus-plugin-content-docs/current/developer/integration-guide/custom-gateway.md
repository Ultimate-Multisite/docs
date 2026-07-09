---
title: Պատվերով վճարային դարպասի մշակում
sidebar_position: 2
_i18n_hash: c3d96ab56931d53cb14b071537a8d0e6
---
# Պատվերով Gateway-ի մշակում

Դուք կարող եք ստեղծել պատվերով վճարային gateway-ներ՝ ընդլայնելով `Base_Gateway` դասը։

## Gateway դաս

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

## Գրանցել Gateway-ը

```php
add_filter('wu_payment_gateways', function($gateways) {
    $gateways['my_gateway'] = 'My_Custom_Gateway';
    return $gateways;
});
```

## Հիմնական մեթոդներ

| Մեթոդ | Նպատակ |
|--------|---------|
| `process_single_payment()` | Մշակել միանվագ վճարումները |
| `process_signup()` | Կարգավորել պարբերական բաժանորդագրությունները |
| `process_refund()` | Մշակել վերադարձի հարցումները |
| `get_payment_methods()` | Վերադարձնել հաճախորդի պահպանված վճարման մեթոդները |

## Թարմացման հավատարմագրեր պարբերական անդամակցությունների համար

Ultimate Multisite v2.13.0-ը gateway ինտեգրումներին թույլ է տալիս հաղորդել, թե արդյոք պարբերական անդամակցությունն ունի վերօգտագործելի թարմացման հավատարմագիր՝ նախքան `auto_renew`-ը պահպանվելը։ Կցեք `wu_membership_has_renewal_credential`-ը և վերադարձրեք՝

- `true`, երբ անդամակցությունն ունի gateway բաժանորդագրություն, վճարման համաձայնագիր, vault token կամ համարժեք վերօգտագործելի վճարման մեթոդ։
- `false`, երբ gateway-ը գիտի, որ պարբերական հավատարմագիրը բացակայում է կամ օգտագործելի չէ։
- `null`՝ հրաժարվելու և լռելյայն վարքագիծն անփոփոխ պահելու համար։

```php
add_filter('wu_membership_has_renewal_credential', function($verified, $membership) {
    if ('my_gateway' !== $membership->get_gateway()) {
        return $verified;
    }

    return '' !== (string) $membership->get_gateway_subscription_id();
}, 10, 2);
```

Երբ gateway-ը վերադարձնում է `false`, Ultimate Multisite-ը պահպանում է անդամակցությունը՝ ավտոմատ թարմացումն անջատված, և պահում է բացակայող հավատարմագրի նշիչ։ Օգտագործեք `wu_membership_renewal_credential_missing`՝ ադմինիստրատորներին ծանուցելու, վերալիազորման հոսք սկսելու կամ աջակցության նշումներ ավելացնելու համար՝

```php
add_action('wu_membership_renewal_credential_missing', function($membership) {
    wu_log_add(
        'my-gateway',
        sprintf('Membership #%d needs payment re-authorization.', $membership->get_id())
    );
});
```

Մաքրեք բացակայող հավատարմագրի նշիչը որպես ձեր gateway-ի հաջող վերալիազորման հոսքի մաս՝ նոր վերօգտագործելի հավատարմագիր պահվելուց հետո։

## Խորհուրդներ

- Ձախողման դեպքում միշտ վերադարձրեք `WP_Error`, որպեսզի Ultimate Multisite-ը կարողանա մշակել սխալի ցուցադրումը
- Set `$this->supports` to declare which payment types your gateway handles (`one-time`, `recurring`)
- Օգտագործեք `wu_log_add()`՝ gateway-ին հատուկ գրանցման համար

## AI կապակցիչի մատակարարի հնարավորություններ

Պատվերով ինտեգրումները, որոնք կանչում են AI կապակցիչի վրա հիմնված գործողություններ, պետք է համապատասխանեցվեն աջակցվող OAuth մատակարարների հավաքածուին, որը ներկայացվել է AI Provider for Anthropic Max v1.3.0-ի հետ՝

| Մատակարար | Հնարավորությունների նշումներ |
|---|---|
| **Anthropic Max** | Աջակցում է գոյություն ունեցող OAuth հաշիվների pool-ի աշխատանքային հոսքին։ Պահպանեք Anthropic գործիքների օգտագործման payload-ները, ներառյալ դատարկ գործիքների զանգվածները և երկկողմ thinking signatures-ը, երբ միջնորդում եք կապակցիչի հարցումները։ |
| **OpenAI ChatGPT/Codex** | Աջակցում է OAuth pool-ի աշխատանքային հոսքին և գործիքների ամբողջական աջակցման վարքագծին՝ կապակցիչով աջակցվող գործողությունների համար։ Փոխանցեք գործիքների սահմանումները և գործիք-կանչերի արդյունքները՝ առանց հեռացնելու Codex-ին հատուկ գործիքների metadata-ն։ |
| **Google AI Pro** | Աջակցում է OAuth pool-ի աշխատանքային հոսքին և SDK-ի վրա հիմնված մատակարարի ինտեգրմանը։ Թարմացրեք մատակարարի հաշիվները OAuth-ի ավարտից հետո՝ նախքան հարցումները երթուղավորելը։ |

Cursor Pro ինտեգրումը և կարգավորման ուղիները հեռացվել են։ Մի գրանցեք Cursor Pro-ն որպես ընտրելի մատակարար և մի ներկայացրեք Cursor-ին հատուկ OAuth հրահանգներ պատվերով կապակցիչի UI-ներում։

Sandbox կամ headless միջավայրերի համար ցուցադրեք ձեռքով OAuth fallback ուղին, որպեսզի ադմինիստրատորները կարողանան տեղադրել վերադարձված authorization տվյալները և ավարտել հաշվի միացումը՝ առանց ավտոմատ browser redirect-ի վրա հենվելու։
